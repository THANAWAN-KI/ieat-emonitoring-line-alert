#!/usr/bin/env python3
"""Check TMD earthquake RSS and push qualifying events as LINE Flex Messages."""

from __future__ import annotations

import hashlib
import html
import json
import os
import re
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime
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
        return "เฝ้าระวัง", "#FF6908", "#FFF0E8"
    if magnitude >= 5:
        return "ระดับรุนแรง • เร่งด่วน", "#BF033B", "#FCE7ED"
    if magnitude >= 3.5:
        return "ระดับเตือนภัย • ตรวจสอบพื้นที่", "#FF6908", "#FFF0E8"
    return "ระดับเฝ้าระวัง", "#598C14", "#EEF5E6"


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


def info_card(label: str, value: str, accent: str = "#6F4A8E") -> dict:
    return {"type": "box", "layout": "vertical", "flex": 1, "paddingAll": "12px",
        "backgroundColor": "#F7F8FA", "cornerRadius": "lg", "contents": [
            {"type": "text", "text": label, "size": "xxs", "weight": "bold", "color": "#7B8190"},
            {"type": "text", "text": value, "size": "sm", "weight": "bold", "color": accent,
             "wrap": True, "margin": "sm"},
        ]}


def icon_image(url: str, size: str = "24px") -> dict:
    return {
        "type": "image",
        "url": url,
        "size": size,
        "aspectMode": "fit",
    }


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
                 {"type": "text", "text": label, "size": "xs", "weight": "bold",
                  "color": "#52057F"},
                 {"type": "text", "text": value, "size": "sm", "weight": "bold",
                  "color": "#222222", "wrap": True, "margin": "xs"},
             ]},
        ],
    }


def flex_message(event: dict, test: bool = False) -> dict:
    magnitude = event.get("magnitude")
    mag = f"{magnitude:.1f}" if magnitude is not None else "–"
    level, status_color, _ = severity(magnitude)
    location = clean(event.get("title") or event.get("description") or "ไม่ระบุพื้นที่")[:300]
    published = event.get("published") or "ไม่ระบุวันและเวลา"
    depth = f"{event['depth']} กิโลเมตร" if event.get("depth") else "ไม่ระบุ"
    coordinates = event.get("coordinates")
    map_url = (
        f"https://www.google.com/maps/search/?api=1&query={coordinates.replace(' ', '')}"
        if coordinates
        else (event.get("link") or "https://earthquake.tmd.go.th/")
    )

    header = [
        {"type": "box", "layout": "horizontal", "justifyContent": "center",
         "alignItems": "center", "spacing": "sm", "contents": [
            icon_image(ASSET_URLS["alert"], "24px"),
            {"type": "text", "text": "แจ้งเตือนภัยพิบัติ", "color": "#FFFFFF",
             "weight": "bold", "size": "sm", "flex": 0},
         ]},
        {"type": "text", "text": "แผ่นดินไหว", "color": "#FFFFFF",
         "weight": "bold", "size": "xl", "align": "center", "margin": "sm"},
    ]
    if test:
        header.append({"type": "text", "text": "ตัวอย่างทดสอบ • ไม่ใช่เหตุการณ์จริง",
                       "size": "xxs", "weight": "bold", "color": "#FFF2A8",
                       "align": "center", "margin": "md"})

    return {
        "type": "flex",
        "altText": ("[ทดสอบ] " if test else "") +
                   f"แจ้งเตือนแผ่นดินไหว ขนาด {mag} — {location}"[:350],
        "contents": {
            "type": "bubble", "size": "mega",
            "header": {"type": "box", "layout": "vertical",
                       "backgroundColor": "#F00A36", "paddingAll": "14px",
                       "contents": header},
            "body": {"type": "box", "layout": "vertical", "paddingAll": "14px",
                     "backgroundColor": "#FFFFFF", "contents": [
                {"type": "box", "layout": "horizontal", "alignItems": "center",
                 "spacing": "sm", "contents": [
                    icon_image(
                        ASSET_URLS["danger"] if magnitude is not None and magnitude >= 5
                        else ASSET_URLS["normal"],
                        "28px",
                    ),
                    {"type": "box", "layout": "vertical", "paddingAll": "8px",
                     "backgroundColor": status_color, "cornerRadius": "9px", "flex": 0,
                     "contents": [{"type": "text", "text": level, "size": "xs",
                                   "weight": "bold", "color": "#FFFFFF",
                                   "align": "center"}]}
                ]},
                {"type": "box", "layout": "horizontal", "alignItems": "center",
                 "margin": "lg", "contents": [
                    {"type": "text", "text": "ขนาด", "size": "md", "weight": "bold",
                     "color": "#FF4B0A", "flex": 0},
                    {"type": "text", "text": mag, "size": "2xl", "weight": "bold",
                     "color": "#FF4B0A", "margin": "md", "flex": 0},
                    {"type": "text", "text": "แมกนิจูด", "size": "sm",
                     "color": "#666666", "margin": "sm"},
                ]},
                alert_info_row(
                    ASSET_URLS["factory"], "พื้นที่เกิดเหตุ", location
                ),
                alert_info_row(
                    ASSET_URLS["world"], "วันและเวลา", published
                ),
                alert_info_row(
                    ASSET_URLS["flood"], "จุดศูนย์กลางลึก", depth
                ),
                {"type": "separator", "margin": "lg", "color": "#E7E7E7"},
                {"type": "box", "layout": "vertical", "margin": "lg",
                 "paddingAll": "12px", "backgroundColor": "#F4F9EE",
                 "cornerRadius": "14px", "contents": [
                    {"type": "box", "layout": "horizontal", "alignItems": "center",
                     "spacing": "sm", "contents": [
                        icon_image(ASSET_URLS["nature"], "24px"),
                        {"type": "text", "text": "คำแนะนำเพื่อความปลอดภัย",
                         "size": "sm", "weight": "bold", "color": "#598C14",
                         "wrap": True, "flex": 1},
                     ]},
                    {"type": "text",
                     "text": "• อยู่ห่างจากกระจกและสิ่งของที่อาจหล่น",
                     "size": "xs", "color": "#333333", "wrap": True,
                     "margin": "lg"},
                    {"type": "text",
                     "text": "• หากอยู่ในอาคาร ให้หมอบ–กำบัง–ยึดเกาะ",
                     "size": "xs", "color": "#333333", "wrap": True,
                     "margin": "md"},
                ]},
            ]},
            "footer": {"type": "box", "layout": "vertical", "paddingAll": "12px",
                       "spacing": "sm", "contents": [
                {"type": "button", "style": "primary", "height": "sm",
                 "color": "#52057F",
                 "action": {"type": "uri", "label": "ดูตำแหน่งบน Google Maps",
                            "uri": map_url}},
                {"type": "separator", "margin": "md", "color": "#598C14"},
                {"type": "text",
                 "text": "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย กนอ.",
                 "size": "xxs", "weight": "bold", "color": "#52057F",
                 "align": "center", "wrap": True},
            ]},
        },
    }


def push_line(token: str, target: str, line_message: dict) -> None:
    if not TARGET_ID_RE.fullmatch(target):
        raise ValueError(
            "LINE_TARGET_ID มีรูปแบบไม่ถูกต้อง: ต้องเป็น User ID ที่ขึ้นต้นด้วย U "
            "(หรือ Group/Room ID ที่ขึ้นต้นด้วย C/R) ตามด้วยเลขฐานสิบหก 32 ตัว "
            "และต้องไม่ใช่ LINE ID สำหรับเพิ่มเพื่อน"
        )

    body = json.dumps({"to": target, "messages": [line_message]}, ensure_ascii=False).encode()
    request = urllib.request.Request(
        LINE_API,
        data=body,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method="POST",
    )
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
            detail_text = "; ".join(
                f"{item.get('property', 'ข้อมูล')}: {item.get('message', 'ไม่ถูกต้อง')}"
                for item in detail_items
            )
            reason = f"{line_message_text}" + (f" ({detail_text})" if detail_text else "")
        except json.JSONDecodeError:
            reason = response_body or error.reason
        hint = ""
        if error.code == 400:
            hint = (
                " ตรวจว่า LINE_TARGET_ID เป็น ID จาก Messaging API channel เดียวกับ Token, "
                "ผู้รับเพิ่ม LINE OA เป็นเพื่อนแล้ว และทดลองข้อความธรรมดาเพื่อแยกปัญหาการ์ด"
            )
        elif error.code == 401:
            hint = " ตรวจหรือออก LINE_CHANNEL_ACCESS_TOKEN ใหม่"
        raise RuntimeError(f"LINE API HTTP {error.code}: {reason}.{hint}") from error


def text_test_message() -> dict:
    return {
        "type": "text",
        "text": "✅ ทดสอบระบบแจ้งเตือนแผ่นดินไหว\nข้อความนี้เป็นการทดสอบ ไม่ใช่เหตุการณ์จริง",
    }


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


if __name__ == "__main__":
    raise SystemExit(main())
