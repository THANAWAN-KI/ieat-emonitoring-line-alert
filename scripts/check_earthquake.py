#!/usr/bin/env python3
"""Check TMD earthquake RSS and push qualifying events as LINE Flex Messages."""

from __future__ import annotations

import hashlib
import html
import json
import math
import os
import re
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime
from email.utils import parsedate_to_datetime
from pathlib import Path
from zoneinfo import ZoneInfo

RSS_URL = os.getenv("TMD_EARTHQUAKE_RSS_URL", "https://earthquake.tmd.go.th/feed/rss_tmd.xml")
STATE_PATH = Path(os.getenv("EARTHQUAKE_STATE_PATH", "data/earthquake-state.json"))
LINE_API = "https://api.line.me/v2/bot/message/push"
GIS_DASHBOARD_URL = "https://www.arcgis.com/apps/dashboards/4bdeaa7907734b32b5ddc64705c86f7d"
THAI_TZ = ZoneInfo("Asia/Bangkok")

ASSET_BASE_URL = (
    "https://raw.githubusercontent.com/"
    "THANAWAN-KI/ieat-emonitoring-line-alert/main/docs/assets"
)
ASSET_URLS = {
    "alert": f"{ASSET_BASE_URL}/advertising-svgrepo-com.png",
    "danger": f"{ASSET_BASE_URL}/4.png",
    "normal": f"{ASSET_BASE_URL}/1.png",
    "air": f"{ASSET_BASE_URL}/co2-svgrepo-com.png",
    "flood": f"{ASSET_BASE_URL}/dam-svgrepo-com.png",
    "world": f"{ASSET_BASE_URL}/globe-svgrepo-com.png",
    "nature": f"{ASSET_BASE_URL}/tree-svgrepo-com.png",
    "factory": f"{ASSET_BASE_URL}/factory-svgrepo-com.png",
}
MAG_RE = re.compile(r"(?:ขนาด|Magnitude|Mag\.?)[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)", re.I)
DEPTH_RE = re.compile(r"(?:ความลึก|Depth)[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)", re.I)
COORD_RE = re.compile(r"(-?\d{1,2}\.\d+)\s*[,/]\s*(-?\d{1,3}\.\d+)")
TARGET_ID_RE = re.compile(r"^[UCR][0-9a-fA-F]{32}$")
THAILAND_WORDS = ("ประเทศไทย", "Thailand", "จ.", "อ.", "เชียงราย", "เชียงใหม่", "แม่ฮ่องสอน", "ตาก", "กาญจนบุรี", "ภูเก็ต", "พังงา", "กระบี่")
NEARBY_WORDS = ("เมียนมา", "พม่า", "Myanmar", "ลาว", "Laos", "กัมพูชา", "Cambodia", "เวียดนาม", "Vietnam", "มาเลเซีย", "Malaysia", "ทะเลอันดามัน", "Andaman")

# Simplified Thailand boundary, used only for an approximate nearest-distance
# calculation. Points are ordered clockwise and deliberately avoid external GIS
# dependencies so the existing GitHub Action can keep using stock Python.
THAILAND_BOUNDARY = (
    (20.47, 99.96), (20.10, 100.55), (19.55, 101.15), (18.35, 101.18),
    (17.65, 102.10), (17.95, 103.10), (18.35, 103.95), (17.15, 104.75),
    (16.10, 105.05), (15.10, 105.65), (14.35, 105.25), (13.55, 105.15),
    (12.65, 102.75), (11.75, 102.90), (10.70, 101.75), (9.55, 101.15),
    (8.45, 100.25), (7.20, 100.55), (6.35, 101.10), (5.62, 101.15),
    (5.62, 100.10), (6.45, 99.70), (7.00, 99.60), (7.75, 98.35),
    (8.60, 98.25), (9.75, 98.45), (10.75, 98.75), (11.65, 99.45),
    (12.15, 99.95), (13.15, 100.05), (13.55, 99.50), (14.25, 98.25),
    (15.10, 98.60), (16.05, 98.85), (17.10, 97.95), (18.20, 97.75),
    (19.20, 98.20), (19.85, 98.75),
)


def clean(value: str | None) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value or ""))).strip()


def first_text(node: ET.Element, names: tuple[str, ...]) -> str:
    for child in node.iter():
        if child.tag.rsplit("}", 1)[-1].lower() in names and child.text:
            return clean(child.text)
    return ""


def event_id(item: ET.Element, title: str, description: str) -> str:
    stable = first_text(item, ("guid", "id", "link"))
    return stable or hashlib.sha256(f"{title}|{description}".encode()).hexdigest()[:24]


def format_publish_time(value: str | None) -> str:
    """Convert an RSS Publish Time to Thailand time."""
    raw = clean(value)
    if not raw:
        return "ไม่ระบุวันและเวลา"
    parsed = None
    try:
        parsed = parsedate_to_datetime(raw)
    except (TypeError, ValueError):
        try:
            parsed = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        except ValueError:
            return f"{raw} (เวลาประเทศไทย)"
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=THAI_TZ)
    return parsed.astimezone(THAI_TZ).strftime("%d/%m/%Y เวลา %H:%M น. (ประเทศไทย)")


def _point_in_polygon(lat: float, lon: float) -> bool:
    inside = False
    previous_lat, previous_lon = THAILAND_BOUNDARY[-1]
    for current_lat, current_lon in THAILAND_BOUNDARY:
        crosses = (current_lat > lat) != (previous_lat > lat)
        if crosses:
            edge_lon = (previous_lon - current_lon) * (lat - current_lat) / (previous_lat - current_lat) + current_lon
            if lon < edge_lon:
                inside = not inside
        previous_lat, previous_lon = current_lat, current_lon
    return inside


def distance_from_thailand(coordinates: str | None) -> str:
    """Return approximate shortest distance from an epicentre to Thailand."""
    if not coordinates:
        return "ไม่สามารถคำนวณได้ (ไม่มีพิกัด)"
    try:
        lat, lon = (float(part.strip()) for part in coordinates.split(",", 1))
    except (TypeError, ValueError):
        return "ไม่สามารถคำนวณได้"
    if _point_in_polygon(lat, lon):
        return "อยู่ภายในประเทศไทย (ประมาณ 0 กม.)"

    # Equirectangular projection is sufficiently accurate for this regional,
    # user-facing estimate; find the nearest point on every boundary segment.
    reference_lat = math.radians(lat)
    scale_x = 111.32 * math.cos(reference_lat)
    scale_y = 110.57
    px, py = lon * scale_x, lat * scale_y
    nearest = float("inf")
    points = list(THAILAND_BOUNDARY) + [THAILAND_BOUNDARY[0]]
    for (lat1, lon1), (lat2, lon2) in zip(points, points[1:]):
        x1, y1, x2, y2 = lon1 * scale_x, lat1 * scale_y, lon2 * scale_x, lat2 * scale_y
        dx, dy = x2 - x1, y2 - y1
        t = 0.0 if dx == dy == 0 else max(0.0, min(1.0, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy)))
        nearest = min(nearest, math.hypot(px - (x1 + t * dx), py - (y1 + t * dy)))
    return f"ประมาณ {nearest:.0f} กม. จากประเทศไทย"


def parse_feed(raw: bytes) -> list[dict]:
    root = ET.fromstring(raw)
    events = []
    for item in root.iter():
        if item.tag.rsplit("}", 1)[-1].lower() not in ("item", "entry"):
            continue
        title = first_text(item, ("title",))
        description = first_text(item, ("description", "summary", "content"))
        combined = f"{title} {description}"
        mag_match, depth_match, coord_match = MAG_RE.search(combined), DEPTH_RE.search(combined), COORD_RE.search(combined)
        events.append({
            "id": event_id(item, title, description), "title": title, "description": description,
            "published": first_text(item, ("pubdate", "published", "updated")),
            "link": first_text(item, ("link",)),
            "magnitude": float(mag_match.group(1)) if mag_match else None,
            "depth": depth_match.group(1) if depth_match else None,
            "coordinates": f"{coord_match.group(1)}, {coord_match.group(2)}" if coord_match else None,
            "text": combined,
        })
    return events


def qualifies(event: dict) -> bool:
    magnitude = event["magnitude"]
    if magnitude is None:
        return True
    lowered = event["text"].lower()
    if any(word.lower() in lowered for word in THAILAND_WORDS):
        return True
    if any(word.lower() in lowered for word in NEARBY_WORDS):
        return magnitude >= 3.5
    return magnitude >= 5.0


def severity(magnitude: float | None) -> tuple[str, str, str]:
    if magnitude is None:
        return "เฝ้าระวัง", "#5A008F", "#F5EDF9"
    if magnitude >= 6:
        return "ระดับวิกฤต • เร่งด่วน", "#D90429", "#FDECEF"
    if magnitude >= 5:
        return "ระดับรุนแรง • ตรวจสอบทันที", "#E85D04", "#FFF1E8"
    if magnitude >= 3.5:
        return "ระดับเตือนภัย • ตรวจสอบพื้นที่", "#C58A00", "#FFF8DB"
    return "ระดับเฝ้าระวัง", "#2E9E45", "#EAF7ED"


def industrial_guidance(magnitude: float | None) -> str:
    if magnitude is None:
        return "ติดตามประกาศ • แจ้งผู้รับผิดชอบความปลอดภัย • เตรียมตรวจพื้นที่และระบบสำคัญ"
    if magnitude >= 5:
        return (
            "ตรวจอาคาร เครื่องจักร ระบบไฟฟ้า ก๊าซ ท่อ และสารเคมีทันที • "
            "หยุดกระบวนการผลิตที่มีความเสี่ยง • อพยพตามแผนฉุกเฉินเมื่อพบความเสียหาย"
        )
    if magnitude >= 3.5:
        return (
            "สำรวจอาคารและเครื่องจักร • ตรวจระบบไฟฟ้า ก๊าซ ท่อ และสารเคมี • "
            "เตรียมทีมฉุกเฉินและรายงานความผิดปกติแก่ผู้รับผิดชอบนิคม"
        )
    return (
        "ติดตามประกาศ • ตรวจสอบเบื้องต้นบริเวณอาคาร เครื่องจักร และสาธารณูปโภค • "
        "แจ้งผู้รับผิดชอบหากพบแรงสั่นสะเทือนหรือความผิดปกติ"
    )


def icon_image(url: str, size: str = "24px") -> dict:
    return {"type": "image", "url": url, "size": size, "aspectMode": "fit"}


def alert_info_row(icon_url: str, label: str, value: str) -> dict:
    return {
        "type": "box", "layout": "horizontal", "spacing": "md", "margin": "lg",
        "contents": [
            {"type": "box", "layout": "vertical", "width": "36px", "height": "36px",
             "backgroundColor": "#F2EAF8", "cornerRadius": "10px",
             "justifyContent": "center", "alignItems": "center",
             "contents": [icon_image(icon_url)]},
            {"type": "box", "layout": "vertical", "flex": 1, "justifyContent": "center",
             "contents": [
                 {"type": "text", "text": label, "size": "xs", "weight": "bold", "color": "#52057F"},
                 {"type": "text", "text": value, "size": "sm", "weight": "bold", "color": "#222222", "wrap": True, "margin": "xs"},
             ]},
        ],
    }


def flex_message(event: dict, test: bool = False) -> dict:
    """Build a compact earthquake card with the IEAT green-plum palette."""
    magnitude = event.get("magnitude")
    mag = f"{magnitude:.1f}" if magnitude is not None else "–"
    level, severity_color, severity_background = severity(magnitude)
    location = clean(
        event.get("title")
        or event.get("description")
        or "ไม่ระบุพื้นที่"
    )
    published = format_publish_time(event.get("published"))
    depth = f"{event['depth']} กม." if event.get("depth") else "ไม่ระบุ"
    coordinates = event.get("coordinates")
    thailand_distance = distance_from_thailand(coordinates)
    map_url = (
        "https://www.google.com/maps/search/?api=1&query="
        f"{coordinates.replace(' ', '')}"
        if coordinates
        else event.get("link") or "https://earthquake.tmd.go.th/"
    )

    header_contents = [
        {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "center",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "width": "30px",
                    "contents": [
                        icon_image(ASSET_URLS["alert"], "22px"),
                    ],
                },
                {
                    "type": "text",
                    "text": "แจ้งเตือนแผ่นดินไหว",
                    "color": "#5A008F",
                    "weight": "bold",
                    "size": "lg",
                    "align": "center",
                    "flex": 1,
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "width": "30px",
                    "contents": [
                        {
                            "type": "text",
                            "text": " ",
                            "size": "xxs",
                            "color": "#5A008F",
                        },
                    ],
                },
            ],
        },
    ]
    if test:
        header_contents.append({
            "type": "text",
            "text": "ข้อความทดสอบ • ไม่ใช่เหตุการณ์จริง",
            "size": "xxs",
            "color": "#5A008F",
            "weight": "bold",
            "align": "center",
            "margin": "sm",
        })

    detail_rows = [
        ("พื้นที่", location),
        ("ทิศทาง / ระยะห่าง", thailand_distance),
        ("Publish Time", published),
        ("ความลึก", depth),
    ]

    return {
        "type": "flex",
        "altText": (
            ("[ทดสอบ] " if test else "")
            + f"แผ่นดินไหวขนาด {mag} {location}"
        )[:350],
        "contents": {
            "type": "bubble",
            "size": "mega",
            "styles": {
                "header": {"backgroundColor": "#FBF8FD"},
                "body": {"backgroundColor": "#FFFFFF"},
                "footer": {"backgroundColor": "#FFFFFF"},
            },
            "header": {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "14px",
                "paddingBottom": "14px",
                "paddingStart": "16px",
                "paddingEnd": "16px",
                "contents": header_contents,
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "14px",
                "paddingBottom": "12px",
                "paddingStart": "14px",
                "paddingEnd": "14px",
                "contents": [
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "alignItems": "center",
                        "paddingAll": "12px",
                        "backgroundColor": severity_background,
                        "cornerRadius": "12px",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "vertical",
                                "width": "78px",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": mag,
                                        "size": "3xl",
                                        "weight": "bold",
                                        "color": severity_color,
                                        "align": "center",
                                    },
                                    {
                                        "type": "text",
                                        "text": "MAGNITUDE",
                                        "size": "xxs",
                                        "color": "#5A008F",
                                        "align": "center",
                                    },
                                ],
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "width": "2px",
                                "height": "58px",
                                "backgroundColor": severity_color,
                                "contents": [],
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "flex": 1,
                                "paddingStart": "12px",
                                "contents": [
                                    {
                                        "type": "text",
                                        "text": level,
                                        "size": "sm",
                                        "weight": "bold",
                                        "color": severity_color,
                                        "align": "center",
                                        "wrap": True,
                                    },
                                    {
                                        "type": "text",
                                        "text": "ข้อมูลล่าสุดจากกรมอุตุนิยมวิทยา",
                                        "size": "xxs",
                                        "color": "#6F6F6F",
                                        "align": "center",
                                        "margin": "sm",
                                        "wrap": True,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "md",
                        "paddingAll": "12px",
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#E5D8EC",
                        "borderWidth": "1px",
                        "cornerRadius": "12px",
                        "contents": [
                            *[
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "margin": "md" if index else "none",
                                    "spacing": "xs",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": label,
                                            "size": "xs",
                                            "color": "#5A008F",
                                            "weight": "bold",
                                            "wrap": True,
                                        },
                                        {
                                            "type": "text",
                                            "text": value,
                                            "size": "sm",
                                            "color": "#252525",
                                            "wrap": True,
                                        },
                                    ],
                                }
                                for index, (label, value) in enumerate(detail_rows)
                            ],
                        ],
                    },
                ],
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "paddingTop": "4px",
                "paddingBottom": "12px",
                "paddingStart": "14px",
                "paddingEnd": "14px",
                "contents": [
                    {
                        "type": "button",
                        "style": "primary",
                        "height": "sm",
                        "color": "#5A008F",
                        "action": {
                            "type": "uri",
                            "label": "ดูตำแหน่งบนแผนที่",
                            "uri": map_url,
                        },
                    },
                ],
            },
        },
    }


def push_line(token: str, target: str, line_message: dict) -> None:
    if not TARGET_ID_RE.fullmatch(target):
        raise ValueError("LINE_TARGET_ID มีรูปแบบไม่ถูกต้อง: ต้องเป็น User ID ที่ขึ้นต้นด้วย U หรือ Group/Room ID ที่ขึ้นต้นด้วย C/R และตามด้วยเลขฐานสิบหก 32 ตัว")

    body = json.dumps({"to": target, "messages": [line_message]}, ensure_ascii=False).encode()
    request = urllib.request.Request(LINE_API, data=body, headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"}, method="POST")
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            if response.status >= 300:
                raise RuntimeError(f"LINE API returned HTTP {response.status}")
    except urllib.error.HTTPError as error:
        response_body = error.read().decode("utf-8", errors="replace")
        try:
            details = json.loads(response_body)
            line_message_text = details.get("message", response_body)
            detail_items = details.get("details") or []
            detail_text = "; ".join(f"{item.get('property', 'ข้อมูล')}: {item.get('message', 'ไม่ถูกต้อง')}" for item in detail_items)
            reason = f"{line_message_text}" + (f" ({detail_text})" if detail_text else "")
        except json.JSONDecodeError:
            reason = response_body or error.reason
        hint = ""
        if error.code == 400:
            hint = " ตรวจสอบรูปแบบ Flex Message และ LINE_TARGET_ID"
        elif error.code == 401:
            hint = " ตรวจหรือออก LINE_CHANNEL_ACCESS_TOKEN ใหม่"
        raise RuntimeError(f"LINE API HTTP {error.code}: {reason}.{hint}") from error


def text_test_message() -> dict:
    return {"type": "text", "text": "✅ ทดสอบระบบแจ้งเตือนแผ่นดินไหว\nข้อความนี้เป็นการทดสอบ ไม่ใช่เหตุการณ์จริง"}


def load_state() -> dict:
    try:
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def save_state(latest_id: str) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(json.dumps({"last_seen_id": latest_id, "updated_at": datetime.now(THAI_TZ).isoformat()}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def test_event() -> dict:
    now = datetime.now(THAI_TZ).strftime("%d/%m/%Y เวลา %H:%M น.")
    return {"title": "บริเวณประเทศเมียนมา ทางทิศตะวันตกเฉียงเหนือของ อ.แม่สาย จ.เชียงราย", "description": "ข้อมูลจำลองสำหรับตรวจสอบรูปแบบข้อความ", "published": now, "link": "https://earthquake.tmd.go.th/", "magnitude": 4.2, "depth": "10", "coordinates": "20.123, 99.456", "text": "เมียนมา"}


def main() -> int:
    token, target = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip(), os.getenv("LINE_TARGET_ID", "").strip()
    if os.getenv("SEND_TEST_ALERT", "").lower() == "true":
        if not token or not target:
            print("LINE secrets are required for a test alert.", file=sys.stderr)
            return 1
        test_message_type = os.getenv("TEST_MESSAGE_TYPE", "flex").strip().lower()
        message = text_test_message() if test_message_type == "text" else flex_message(test_event(), test=True)
        push_line(token, target, message)
        print(f"Test {test_message_type} message sent to LINE.")
        return 0

    request = urllib.request.Request(RSS_URL, headers={"User-Agent": "IEAT-eMonitoring/2.0"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            events = parse_feed(response.read())
    except (urllib.error.URLError, ET.ParseError) as error:
        print(f"Unable to read TMD RSS: {error}", file=sys.stderr)
        return 1
    if not events:
        print("TMD RSS contained no events.")
        return 0

    state, latest_id = load_state(), events[0]["id"]
    previous_id = state.get("last_seen_id")
    if not previous_id:
        save_state(latest_id)
        print("Initialized state from the latest event; no historical alert was sent.")
        return 0
    new_events = []
    for event in events:
        if event["id"] == previous_id:
            break
        new_events.append(event)
    sent = 0
    if token and target:
        for event in reversed(new_events):
            if qualifies(event):
                push_line(token, target, flex_message(event))
                sent += 1
    elif new_events:
        print("LINE secrets are missing; new events were recorded without sending.", file=sys.stderr)
    save_state(latest_id)
    print(f"Checked {len(events)} events; found {len(new_events)} new; sent {sent}.")
    return 0


