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


def severity(magnitude: float | None) -> tuple[str, str]:
    if magnitude is None:
        return "เฝ้าระวัง", "#598C14"
    if magnitude >= 5:
        return "ระดับรุนแรง", "#FFC719"
    if magnitude >= 3.5:
        return "ควรเฝ้าระวัง", "#598C14"
    return "ตรวจพบเหตุการณ์", "#598C14"


def row(label: str, value: str) -> dict:
    return {"type": "box", "layout": "horizontal", "margin": "md", "contents": [
        {"type": "text", "text": label, "size": "sm", "color": "#6B6277", "flex": 3},
        {"type": "text", "text": value, "size": "sm", "color": "#2E1F54", "weight": "bold", "wrap": True, "flex": 5},
    ]}


def flex_message(event: dict, test: bool = False) -> dict:
    mag = f"{event['magnitude']:g}" if event.get("magnitude") is not None else "–"
    level, badge_color = severity(event.get("magnitude"))
    location = clean(event.get("title") or event.get("description") or "ไม่ระบุพื้นที่")[:300]
    details = [
        row("วันและเวลา", event.get("published") or "รอข้อมูลจากกรมอุตุนิยมวิทยา"),
        row("ความลึก", f"{event['depth']} กิโลเมตร" if event.get("depth") else "ไม่ระบุ"),
        row("พิกัด", event.get("coordinates") or "ไม่ระบุ"),
    ]
    header_contents = []
    if test:
        header_contents.append({"type": "text", "text": "ทดสอบระบบ • ไม่ใช่เหตุการณ์จริง", "size": "xs", "weight": "bold", "color": "#2E1F54", "align": "center", "margin": "none"})
    header_contents += [
        {"type": "box", "layout": "horizontal", "contents": [
            {"type": "text", "text": "IEAT e-MONITORING", "size": "xs", "weight": "bold", "color": "#FFFFFF", "flex": 4},
            {"type": "text", "text": "EARTHQUAKE ALERT", "size": "xxs", "weight": "bold", "color": "#FFC719", "align": "end", "flex": 3},
        ]},
        {"type": "text", "text": "แจ้งเตือนแผ่นดินไหว", "size": "xl", "weight": "bold", "color": "#FFFFFF", "margin": "lg"},
        {"type": "text", "text": location, "size": "sm", "color": "#FFFFFF", "wrap": True, "margin": "sm"},
    ]
    return {
        "type": "flex",
        "altText": ("[ทดสอบ] " if test else "") + f"แจ้งเตือนแผ่นดินไหว ขนาด {mag} — {location}"[:350],
        "contents": {"type": "bubble", "size": "mega", "styles": {"footer": {"separator": True}},
            "header": {"type": "box", "layout": "vertical", "backgroundColor": "#52057F", "paddingAll": "20px", "contents": header_contents},
            "body": {"type": "box", "layout": "vertical", "paddingAll": "20px", "contents": [
                {"type": "box", "layout": "horizontal", "contents": [
                    {"type": "box", "layout": "vertical", "flex": 3, "contents": [
                        {"type": "text", "text": "ขนาด", "size": "sm", "color": "#6B6277"},
                        {"type": "text", "text": mag, "size": "3xl", "weight": "bold", "color": "#52057F", "margin": "sm"},
                    ]},
                    {"type": "box", "layout": "vertical", "flex": 4, "justifyContent": "center", "contents": [
                        {"type": "text", "text": level, "size": "sm", "weight": "bold", "color": "#FFFFFF" if badge_color == "#598C14" else "#2E1F54", "align": "center", "backgroundColor": badge_color, "paddingAll": "10px"}
                    ]},
                ]},
                {"type": "separator", "margin": "xl", "color": "#E7E1EC"},
                *details,
                {"type": "box", "layout": "vertical", "margin": "xl", "paddingAll": "14px", "backgroundColor": "#F4F0F7", "contents": [
                    {"type": "text", "text": "ข้อควรปฏิบัติ", "size": "sm", "weight": "bold", "color": "#52057F"},
                    {"type": "text", "text": "ตั้งสติ อยู่ห่างจากกระจกและสิ่งของที่อาจหล่น ติดตามประกาศจากหน่วยงานราชการ", "size": "sm", "color": "#2E1F54", "wrap": True, "margin": "sm"},
                ]},
                {"type": "text", "text": "ข้อมูลจาก กรมอุตุนิยมวิทยา", "size": "xs", "weight": "bold", "color": "#598C14", "margin": "lg"},
            ]},
            "footer": {"type": "box", "layout": "vertical", "paddingAll": "16px", "contents": [
                {"type": "button", "style": "primary", "height": "sm", "color": "#2E1F54", "action": {"type": "uri", "label": "ดูรายละเอียดจากกรมอุตุนิยมวิทยา", "uri": event.get("link") or "https://earthquake.tmd.go.th/"}},
                {"type": "text", "text": "สายด่วนกรมอุตุนิยมวิทยา 1182", "size": "xs", "color": "#6B6277", "align": "center", "margin": "md"},
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
