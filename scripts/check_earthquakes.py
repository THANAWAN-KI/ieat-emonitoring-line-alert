#!/usr/bin/env python3
"""ตรวจข้อมูลแผ่นดินไหวของกรมอุตุนิยมวิทยาและแจ้งเตือนผ่าน LINE Messaging API."""

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
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

FEED_URL = os.getenv("TMD_EARTHQUAKE_FEED", "https://earthquake.tmd.go.th/feed/rss_tmd.xml")
STATE_FILE = Path(os.getenv("EARTHQUAKE_STATE_FILE", "data/earthquake-state.json"))
LATEST_FILE = Path(os.getenv("EARTHQUAKE_LATEST_FILE", "data/latest-earthquakes.json"))
LINE_ENDPOINT = "https://api.line.me/v2/bot/message/push"
TIMEOUT_SECONDS = 30

THAI_KEYWORDS = ("ประเทศไทย", "thailand", "เชียงราย", "เชียงใหม่", "แม่ฮ่องสอน", "ตาก", "กาญจนบุรี",
                 "ลำปาง", "ลำพูน", "พะเยา", "แพร่", "น่าน", "ภูเก็ต", "พังงา", "กระบี่", "ระนอง")
NEARBY_KEYWORDS = ("เมียนมา", "พม่า", "myanmar", "laos", "ลาว", "cambodia", "กัมพูชา",
                   "vietnam", "เวียดนาม", "malaysia", "มาเลเซีย", "andaman", "อันดามัน")


def text_of(node: ET.Element, *names: str) -> str:
    for name in names:
        found = node.find(name)
        if found is not None and found.text:
            return found.text.strip()
        for child in node:
            if child.tag.rsplit("}", 1)[-1].lower() == name.lower() and child.text:
                return child.text.strip()
    return ""


def clean(value: str) -> str:
    value = html.unescape(re.sub(r"<[^>]+>", " ", value or ""))
    return re.sub(r"\s+", " ", value).strip()


def first_match(patterns: list[str], value: str) -> str:
    for pattern in patterns:
        match = re.search(pattern, value, flags=re.IGNORECASE)
        if match:
            return match.group(1).strip()
    return ""


def parse_feed(xml_bytes: bytes) -> list[dict[str, Any]]:
    root = ET.fromstring(xml_bytes)
    items = [element for element in root.iter() if element.tag.rsplit("}", 1)[-1].lower() in {"item", "entry"}]
    events: list[dict[str, Any]] = []

    for item in items:
        title = clean(text_of(item, "title"))
        description = clean(text_of(item, "description", "summary", "content"))
        link = clean(text_of(item, "link"))
        if not link:
            for child in item:
                if child.tag.rsplit("}", 1)[-1].lower() == "link":
                    link = child.attrib.get("href", "").strip()
                    if link:
                        break
        published = clean(text_of(item, "pubDate", "published", "updated"))
        guid = clean(text_of(item, "guid", "id"))
        combined = f"{title} {description}"

        magnitude = first_match([
            r"(?:ขนาด|magnitude|mag\.?)[\s:=]*([0-9]+(?:\.[0-9]+)?)",
            r"\bM\s*([0-9]+(?:\.[0-9]+)?)\b",
        ], combined)
        depth = first_match([
            r"(?:ความลึก|depth)[\s:=]*([0-9]+(?:\.[0-9]+)?)\s*(?:กม\.?|km)?",
        ], combined)
        latitude = first_match([r"(?:ละติจูด|latitude|lat)[\s:=]*(-?[0-9]+(?:\.[0-9]+)?)"], combined)
        longitude = first_match([r"(?:ลองจิจูด|longitude|long|lon)[\s:=]*(-?[0-9]+(?:\.[0-9]+)?)"], combined)
        location = first_match([
            r"(?:บริเวณ|ศูนย์กลาง|พื้นที่เกิดเหตุ|location)[\s:=]*([^,;|]+)",
        ], combined)
        if not location:
            location = title

        identity = guid or link or hashlib.sha256(combined.encode("utf-8")).hexdigest()
        events.append({
            "id": identity,
            "title": title,
            "description": description,
            "published": published,
            "magnitude": float(magnitude) if magnitude else None,
            "depth_km": float(depth) if depth else None,
            "latitude": float(latitude) if latitude else None,
            "longitude": float(longitude) if longitude else None,
            "location": location,
            "link": link,
            "source": "กองเฝ้าระวังแผ่นดินไหว กรมอุตุนิยมวิทยา",
        })
    return events


def should_alert(event: dict[str, Any]) -> tuple[bool, str]:
    magnitude = event.get("magnitude")
    if magnitude is None:
        return True, "ไม่พบค่าขนาด จึงแจ้งเพื่อให้ตรวจสอบ"
    where = f"{event.get('title', '')} {event.get('description', '')} {event.get('location', '')}".lower()
    if any(keyword.lower() in where for keyword in THAI_KEYWORDS):
        return True, "เหตุการณ์ในประเทศไทย"
    if any(keyword.lower() in where for keyword in NEARBY_KEYWORDS):
        return magnitude >= 3.5, "ประเทศหรือทะเลใกล้เคียง ขนาดตั้งแต่ 3.5"
    return magnitude >= 5.0, "พื้นที่อื่น ขนาดตั้งแต่ 5.0"


def format_message(event: dict[str, Any], reason: str) -> str:
    """ข้อความสำรองสำหรับ altText และการตรวจสอบใน log."""
    magnitude = event.get("magnitude")
    location = event.get("location") or event.get("title") or "ไม่ระบุพื้นที่"
    magnitude_text = f"{magnitude:.1f}" if magnitude is not None else "ไม่ระบุ"
    return f"แจ้งเตือนแผ่นดินไหว ขนาด {magnitude_text} พื้นที่ {location}"[:400]


def alert_style(magnitude: float | None) -> tuple[str, str, str]:
    """คืนชื่อระดับ สีหลัก และสีพื้นหลังตามขนาดแผ่นดินไหว."""
    if magnitude is None:
        return "ระดับติดตาม", "#4A8594", "#EEF6F7"
    if magnitude >= 6.0:
        return "ระดับฉุกเฉิน", "#F00A36", "#FFF0F3"
    if magnitude >= 5.0:
        return "ระดับเฝ้าระวังสูง", "#FF6908", "#FFF2E9"
    if magnitude >= 3.5:
        return "ระดับเฝ้าระวัง", "#FF6908", "#FFF2E9"
    return "ระดับติดตาม", "#4A8594", "#EEF6F7"


def info_row(icon: str, label: str, value: str) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "horizontal",
        "spacing": "md",
        "margin": "lg",
        "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "width": "44px",
                "height": "44px",
                "backgroundColor": "#F2EAF8",
                "cornerRadius": "12px",
                "justifyContent": "center",
                "alignItems": "center",
                "contents": [
                    {"type": "text", "text": icon, "size": "xl", "align": "center"}
                ],
            },
            {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "justifyContent": "center",
                "contents": [
                    {
                        "type": "text",
                        "text": label,
                        "size": "sm",
                        "weight": "bold",
                        "color": "#52057F",
                    },
                    {
                        "type": "text",
                        "text": value,
                        "size": "md",
                        "weight": "bold",
                        "color": "#222222",
                        "wrap": True,
                        "margin": "xs",
                    },
                ],
            },
        ],
    }


def build_flex_message(event: dict[str, Any], reason: str) -> dict[str, Any]:
    magnitude = event.get("magnitude")
    depth = event.get("depth_km")
    lat = event.get("latitude")
    lon = event.get("longitude")
    level, level_color, level_soft = alert_style(magnitude)
    magnitude_text = f"{magnitude:.1f}" if magnitude is not None else "–"
    location = event.get("location") or event.get("title") or "ไม่ระบุพื้นที่"
    published = event.get("published") or "ไม่ระบุวันและเวลา"
    depth_text = f"{depth:g} กิโลเมตร" if depth is not None else "ไม่ระบุ"
    detail_url = event.get("link") or "https://earthquake.tmd.go.th/"

    body_contents: list[dict[str, Any]] = [
        {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "backgroundColor": level_color,
                    "cornerRadius": "10px",
                    "paddingAll": "10px",
                    "contents": [
                        {
                            "type": "text",
                            "text": level,
                            "color": "#FFFFFF",
                            "weight": "bold",
                            "size": "md",
                            "align": "center",
                        }
                    ],
                }
            ],
        },
        {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "baseline",
            "margin": "xl",
            "contents": [
                {
                    "type": "text",
                    "text": "ขนาด",
                    "size": "xl",
                    "weight": "bold",
                    "color": "#FF4B0A",
                    "flex": 0,
                },
                {
                    "type": "text",
                    "text": magnitude_text,
                    "size": "5xl",
                    "weight": "bold",
                    "color": "#FF4B0A",
                    "margin": "md",
                    "flex": 0,
                },
                {
                    "type": "text",
                    "text": "แมกนิจูด",
                    "size": "sm",
                    "color": "#777777",
                    "margin": "sm",
                },
            ],
        },
        info_row("●", "พื้นที่เกิดเหตุ", location),
        info_row("▣", "วันและเวลา", published),
        info_row("↧", "จุดศูนย์กลางลึก", depth_text),
    ]

    if lat is not None and lon is not None:
        body_contents.append(info_row("◎", "พิกัด", f"{lat:g}, {lon:g}"))

    body_contents.extend(
        [
            {"type": "separator", "margin": "xl", "color": "#E8E8E8"},
            {
                "type": "box",
                "layout": "vertical",
                "margin": "xl",
                "paddingAll": "16px",
                "backgroundColor": "#F4F9EE",
                "cornerRadius": "16px",
                "contents": [
                    {
                        "type": "text",
                        "text": "✓  คำแนะนำเพื่อความปลอดภัย",
                        "size": "lg",
                        "weight": "bold",
                        "color": "#3B8B16",
                        "wrap": True,
                    },
                    {
                        "type": "text",
                        "text": "• อยู่ห่างจากกระจกและสิ่งของที่อาจหล่น",
                        "size": "sm",
                        "color": "#333333",
                        "wrap": True,
                        "margin": "lg",
                    },
                    {
                        "type": "text",
                        "text": "• หากอยู่ในอาคาร ให้หมอบ–กำบัง–ยึดเกาะ",
                        "size": "sm",
                        "color": "#333333",
                        "wrap": True,
                        "margin": "md",
                    },
                    {
                        "type": "text",
                        "text": "• ติดตามประกาศจากหน่วยงานอย่างใกล้ชิด",
                        "size": "sm",
                        "color": "#333333",
                        "wrap": True,
                        "margin": "md",
                    },
                ],
            },
            {
                "type": "text",
                "text": f"เกณฑ์การแจ้ง: {reason}",
                "size": "xxs",
                "color": "#888888",
                "wrap": True,
                "margin": "lg",
            },
        ]
    )

    return {
        "type": "flex",
        "altText": format_message(event, reason),
        "contents": {
            "type": "bubble",
            "size": "mega",
            "header": {
                "type": "box",
                "layout": "vertical",
                "paddingAll": "22px",
                "backgroundColor": "#F00A36",
                "contents": [
                    {
                        "type": "text",
                        "text": "⚠  แจ้งเตือนภัยพิบัติ",
                        "color": "#FFFFFF",
                        "weight": "bold",
                        "size": "lg",
                        "align": "center",
                    },
                    {
                        "type": "text",
                        "text": "แผ่นดินไหว",
                        "color": "#FFFFFF",
                        "weight": "bold",
                        "size": "3xl",
                        "align": "center",
                        "margin": "sm",
                    },
                    {
                        "type": "text",
                        "text": "EARTHQUAKE ALERT",
                        "color": "#FFD9E1",
                        "size": "xs",
                        "align": "center",
                        "margin": "sm",
                    },
                ],
            },
            "body": {
                "type": "box",
                "layout": "vertical",
                "paddingAll": "20px",
                "backgroundColor": "#FFFFFF",
                "contents": body_contents,
            },
            "footer": {
                "type": "box",
                "layout": "vertical",
                "paddingAll": "16px",
                "spacing": "md",
                "contents": [
                    {
                        "type": "button",
                        "style": "primary",
                        "height": "sm",
                        "color": "#52057F",
                        "action": {
                            "type": "uri",
                            "label": "ดูรายละเอียดเพิ่มเติม",
                            "uri": detail_url,
                        },
                    },
                    {"type": "separator", "margin": "md", "color": "#598C14"},
                    {
                        "type": "text",
                        "text": "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย กนอ.",
                        "size": "xs",
                        "weight": "bold",
                        "color": "#52057F",
                        "align": "center",
                        "wrap": True,
                    },
                    {
                        "type": "text",
                        "text": "แหล่งข้อมูล: กรมอุตุนิยมวิทยา",
                        "size": "xxs",
                        "color": "#888888",
                        "align": "center",
                    },
                ],
            },
        },
    }


def push_line(event: dict[str, Any], reason: str) -> None:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    recipient = os.getenv("LINE_TO", "").strip()
    if not token or not recipient:
        raise RuntimeError("ยังไม่ได้ตั้งค่า LINE_CHANNEL_ACCESS_TOKEN และ LINE_TO ใน GitHub Secrets")
    payload = json.dumps(
        {"to": recipient, "messages": [build_flex_message(event, reason)]},
        ensure_ascii=False,
    ).encode("utf-8")
    request = urllib.request.Request(
        LINE_ENDPOINT,
        data=payload,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=TIMEOUT_SECONDS) as response:
        if response.status >= 300:
            raise RuntimeError(f"LINE API ตอบกลับ HTTP {response.status}")


def load_state() -> dict[str, Any]:
    if not STATE_FILE.exists():
        return {"initialized": False, "seen_ids": []}
    try:
        return json.loads(STATE_FILE.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {"initialized": False, "seen_ids": []}


def save_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    request = urllib.request.Request(FEED_URL, headers={"User-Agent": "IEAT-eMonitoring-Earthquake-Alert/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=TIMEOUT_SECONDS) as response:
            events = parse_feed(response.read())
    except (urllib.error.URLError, TimeoutError, ET.ParseError) as exc:
        print(f"อ่านข้อมูลกรมอุตุนิยมวิทยาไม่สำเร็จ: {exc}", file=sys.stderr)
        return 1

    now = datetime.now(timezone.utc).isoformat()
    save_json(LATEST_FILE, {"updated_at": now, "feed_url": FEED_URL, "count": len(events), "events": events})

    state = load_state()
    current_ids = [event["id"] for event in events]
    if not state.get("initialized"):
        save_json(STATE_FILE, {"initialized": True, "updated_at": now, "seen_ids": current_ids[:200]})
        print(f"เริ่มต้นระบบแล้ว บันทึกเหตุการณ์เดิม {len(current_ids)} รายการโดยไม่ส่งย้อนหลัง")
        return 0

    seen = set(state.get("seen_ids", []))
    new_events = [event for event in reversed(events) if event["id"] not in seen]
    processed: list[str] = []

    for event in new_events:
        alert, reason = should_alert(event)
        if alert:
            try:
                push_line(event, reason)
                print(f"ส่ง LINE แล้ว: {event['title']}")
            except Exception as exc:
                print(f"ส่ง LINE ไม่สำเร็จ ({event['title']}): {exc}", file=sys.stderr)
                continue
        else:
            print(f"ไม่เข้าเกณฑ์: {event['title']} ({reason})")
        processed.append(event["id"])

    merged_ids = list(dict.fromkeys(current_ids + processed + list(seen)))[:200]
    save_json(STATE_FILE, {"initialized": True, "updated_at": now, "seen_ids": merged_ids})
    print(f"ตรวจพบ {len(events)} รายการใหม่ {len(new_events)} รายการ")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
