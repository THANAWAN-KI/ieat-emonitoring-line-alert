#!/usr/bin/env python3
"""Check TMD earthquake RSS and push new qualifying events to LINE."""

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
        mag_match = MAG_RE.search(combined)
        depth_match = DEPTH_RE.search(combined)
        coord_match = COORD_RE.search(combined)
        events.append({
            "id": event_id(item, title, description),
            "title": title,
            "description": description,
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
    text = event["text"]
    if any(word.lower() in text.lower() for word in THAILAND_WORDS):
        return True
    if any(word.lower() in text.lower() for word in NEARBY_WORDS):
        return magnitude >= 3.5
    return magnitude >= 5.0


def message(event: dict) -> str:
    lines = ["🚨 แจ้งเตือนแผ่นดินไหว"]
    if event["published"]:
        lines.append(f"วันที่/เวลา: {event['published']}")
    if event["magnitude"] is not None:
        lines.append(f"ขนาด: {event['magnitude']:g}")
    if event["depth"]:
        lines.append(f"ความลึก: {event['depth']} กิโลเมตร")
    location = event["title"] or event["description"]
    if location:
        lines.append(f"รายละเอียด: {location[:500]}")
    if event["coordinates"]:
        lines.append(f"พิกัด: {event['coordinates']}")
    lines.extend([
        "แหล่งข้อมูล: กรมอุตุนิยมวิทยา",
        "กรุณาติดตามประกาศจากหน่วยงานราชการและปฏิบัติตามคู่มือความปลอดภัย",
    ])
    if event["link"]:
        lines.append(event["link"])
    return "\n".join(lines)[:5000]


def push_line(token: str, target: str, text: str) -> None:
    body = json.dumps({"to": target, "messages": [{"type": "text", "text": text}]}).encode()
    request = urllib.request.Request(
        LINE_API,
        data=body,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method="POST",
    )
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
    STATE_PATH.write_text(
        json.dumps(
            {"last_seen_id": latest_id, "updated_at": datetime.now(THAI_TZ).isoformat()},
            ensure_ascii=False,
            indent=2,
        ) + "\n",
        encoding="utf-8",
    )


def main() -> int:
    request = urllib.request.Request(RSS_URL, headers={"User-Agent": "IEAT-eMonitoring/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            events = parse_feed(response.read())
    except (urllib.error.URLError, ET.ParseError) as error:
        print(f"Unable to read TMD RSS: {error}", file=sys.stderr)
        return 1

    if not events:
        print("TMD RSS contained no events.")
        return 0

    state = load_state()
    latest_id = events[0]["id"]
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

    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    target = os.getenv("LINE_TARGET_ID", "").strip()
    sent = 0
    if token and target:
        for event in reversed(new_events):
            if qualifies(event):
                push_line(token, target, message(event))
                sent += 1
    elif new_events:
        print("LINE secrets are missing; new events were recorded without sending.", file=sys.stderr)

    save_state(latest_id)
    print(f"Checked {len(events)} events; found {len(new_events)} new; sent {sent}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
