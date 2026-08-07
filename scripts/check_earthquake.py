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
THAI_TZ = ZoneInfo("Asia/Bangkok")
MAG_RE = re.compile(r"(?:ขนาด|Magnitude|Mag\.?)[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)", re.I)
DEPTH_RE = re.compile(r"(?:ความลึก|Depth)[^0-9]{0,12}([0-9]+(?:\.[0-9]+)?)", re.I)
COORD_RE = re.compile(r"(-?\d{1,2}\.\d+)\s*[,/]\s*(-?\d{1,3}\.\d+)")
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
        return "เฝ้าระวัง", "#6F4A8E", "#F4EFF8"
    if magnitude >= 6:
        return "รุนแรงมาก", "#C83E4D", "#FDEDEF"
    if magnitude >= 5:
        return "ระดับรุนแรง", "#E45B5B", "#FFF0F0"
    if magnitude >= 3.5:
        return "ควรเฝ้าระวัง", "#E09A2D", "#FFF7E6"
    return "ตรวจพบเหตุการณ์", "#2F8F6B", "#EAF7F2"


def info_card(label: str, value: str, accent: str = "#6F4A8E") -> dict:
    return {"type": "box", "layout": "vertical", "flex": 1, "paddingAll": "12px",
        "backgroundColor": "#F7F8FA", "cornerRadius": "lg", "contents": [
            {"type": "text", "text": label, "size": "xxs", "weight": "bold", "color": "#7B8190"},
            {"type": "text", "text": value, "size": "sm", "weight": "bold", "color": accent,
             "wrap": True, "margin": "sm"},
        ]}


def flex_message(event: dict, test: bool = False) -> dict:
    mag = f"{event['magnitude']:g}" if event.get("magnitude") is not None else "–"
    level, status_color, status_bg = severity(event.get("magnitude"))
    location = clean(event.get("title") or event.get("description") or "ไม่ระบุพื้นที่")[:300]
    published = event.get("published") or "รอข้อมูลจากกรมอุตุนิยมวิทยา"
    depth = f"{event['depth']} กม." if event.get("depth") else "ไม่ระบุ"
    coordinates = event.get("coordinates") or "ไม่ระบุ"

    header_contents = [
        {"type": "box", "layout": "horizontal", "alignItems": "center", "contents": [
            {"type": "box", "layout": "vertical", "width": "36px", "height": "36px",
             "backgroundColor": "#6F4A8E", "cornerRadius": "18px", "justifyContent": "center",
             "contents": [{"type": "text", "text": "!", "size": "lg", "weight": "bold",
                           "color": "#FFFFFF", "align": "center"}]},
            {"type": "box", "layout": "vertical", "margin": "md", "flex": 1, "contents": [
                {"type": "text", "text": "EARTHQUAKE ALERT", "size": "xxs", "weight": "bold",
                 "color": "#B9A6C9"},
                {"type": "text", "text": "แจ้งเตือนแผ่นดินไหว", "size": "xl", "weight": "bold",
                 "color": "#FFFFFF", "margin": "xs"},
            ]},
        ]},
    ]
    if test:
        header_contents.append(
            {"type": "box", "layout": "vertical", "margin": "lg", "paddingAll": "8px",
             "backgroundColor": "#FFF3CD", "cornerRadius": "md", "contents": [
                {"type": "text", "text": "ตัวอย่างทดสอบ • ไม่ใช่เหตุการณ์จริง", "size": "xs",
                 "weight": "bold", "color": "#765A00", "align": "center"}
             ]}
        )

    return {
        "type": "flex",
        "altText": ("[ทดสอบ] " if test else "") + f"แจ้งเตือนแผ่นดินไหว ขนาด {mag} — {location}"[:350],
        "contents": {"type": "bubble", "size": "mega",
            "styles": {"body": {"backgroundColor": "#FFFFFF"},
                       "footer": {"backgroundColor": "#FFFFFF", "separator": True,
                                  "separatorColor": "#ECEEF2"}},
            "header": {"type": "box", "layout": "vertical", "backgroundColor": "#17233C",
                       "paddingAll": "20px", "contents": header_contents},
            "body": {"type": "box", "layout": "vertical", "paddingAll": "20px", "contents": [
                {"type": "box", "layout": "horizontal", "alignItems": "center", "contents": [
                    {"type": "box", "layout": "vertical", "flex": 2, "contents": [
                        {"type": "text", "text": "ขนาดแผ่นดินไหว", "size": "xs", "color": "#7B8190"},
                        {"type": "box", "layout": "baseline", "margin": "xs", "contents": [
                            {"type": "text", "text": mag, "size": "4xl", "weight": "bold",
                             "color": "#17233C", "flex": 0},
                            {"type": "text", "text": "แมกนิจูด", "size": "xs", "color": "#7B8190",
                             "margin": "sm", "flex": 0},
                        ]},
                    ]},
                    {"type": "box", "layout": "vertical", "flex": 2, "paddingAll": "11px",
                     "backgroundColor": status_bg, "cornerRadius": "lg", "contents": [
                        {"type": "text", "text": level, "size": "sm", "weight": "bold",
                         "color": status_color, "align": "center"}
                    ]},
                ]},
                {"type": "box", "layout": "vertical", "margin": "xl", "paddingAll": "14px",
                 "backgroundColor": "#F4EFF8", "cornerRadius": "lg", "contents": [
                    {"type": "text", "text": "พื้นที่เกิดเหตุ", "size": "xxs", "weight": "bold",
                     "color": "#6F4A8E"},
                    {"type": "text", "text": location, "size": "md", "weight": "bold",
                     "color": "#252B3A", "wrap": True, "margin": "sm"},
                ]},
                {"type": "box", "layout": "horizontal", "spacing": "sm", "margin": "lg", "contents": [
                    info_card("ความลึก", depth, "#17233C"),
                    info_card("พิกัด", coordinates, "#17233C"),
                ]},
                {"type": "box", "layout": "vertical", "margin": "sm", "paddingAll": "12px",
                 "backgroundColor": "#F7F8FA", "cornerRadius": "lg", "contents": [
                    {"type": "text", "text": "วันและเวลา", "size": "xxs", "weight": "bold",
                     "color": "#7B8190"},
                    {"type": "text", "text": published, "size": "sm", "weight": "bold",
                     "color": "#252B3A", "wrap": True, "margin": "sm"},
                ]},
                {"type": "separator", "margin": "xl", "color": "#ECEEF2"},
                {"type": "box", "layout": "vertical", "margin": "lg", "contents": [
                    {"type": "text", "text": "คำแนะนำเพื่อความปลอดภัย", "size": "sm",
                     "weight": "bold", "color": "#17233C"},
                    {"type": "text", "text": "ตั้งสติ • อยู่ห่างจากกระจกและสิ่งของที่อาจหล่น • ติดตามประกาศจากหน่วยงานราชการ",
                     "size": "sm", "color": "#565D6D", "wrap": True, "margin": "sm"},
                ]},
                {"type": "box", "layout": "horizontal", "margin": "xl", "alignItems": "center",
                 "contents": [
                    {"type": "box", "layout": "vertical", "width": "6px", "height": "6px",
                     "backgroundColor": "#2F8F6B", "cornerRadius": "3px", "contents": []},
                    {"type": "text", "text": "ข้อมูลจากกรมอุตุนิยมวิทยา", "size": "xs",
                     "color": "#7B8190", "margin": "sm"},
                ]},
            ]},
            "footer": {"type": "box", "layout": "vertical", "paddingAll": "16px", "contents": [
                {"type": "button", "style": "primary", "height": "sm", "color": "#6F4A8E",
                 "action": {"type": "uri", "label": "ดูรายละเอียดเหตุการณ์",
                            "uri": event.get("link") or "https://earthquake.tmd.go.th/"}},
                {"type": "box", "layout": "horizontal", "justifyContent": "center", "margin": "md",
                 "contents": [
                    {"type": "text", "text": "สายด่วนกรมอุตุนิยมวิทยา", "size": "xxs",
                     "color": "#8B90A0", "flex": 0},
                    {"type": "text", "text": "1182", "size": "xxs", "weight": "bold",
                     "color": "#6F4A8E", "margin": "sm", "flex": 0},
                 ]},
            ]},
        },
    }

def push_line(token: str, target: str, line_message: dict) -> None:
    body = json.dumps({"to": target, "messages": [line_message]}, ensure_ascii=False).encode()
    request = urllib.request.Request(LINE_API, data=body, headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status >= 300:
            raise RuntimeError(f"LINE API returned HTTP {response.status}")


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
        push_line(token, target, flex_message(test_event(), test=True))
        print("Test Flex Message sent to LINE.")
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
