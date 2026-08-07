#!/usr/bin/env python3
"""ตรวจประกาศฝนตกหนักและพายุจากกรมอุตุนิยมวิทยา แล้วส่ง LINE Flex Message."""

from __future__ import annotations

import hashlib
import html
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from zoneinfo import ZoneInfo

WARNING_URL = os.getenv("TMD_WARNING_URL", "https://www.tmd.go.th/warning-and-events/warning-storm")
STATE_PATH = Path(os.getenv("WEATHER_WARNING_STATE_PATH", "data/weather-warning-state.json"))
LINE_API = "https://api.line.me/v2/bot/message/push"
THAI_TZ = ZoneInfo("Asia/Bangkok")
TARGET_ID_RE = re.compile(r"^[UCR][0-9a-fA-F]{32}$")
KEYWORDS = ("ฝนตกหนัก", "ฝนตกหนักมาก", "พายุ", "มรสุม", "คลื่นลมแรง", "พายุฝนฟ้าคะนอง", "ลมแรง", "น้ำท่วมฉับพลัน", "น้ำป่าไหลหลาก")


def clean(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


class WarningParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.href = ""
        self.parts: list[str] = []
        self.items: list[dict] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag == "a":
            href = dict(attrs).get("href") or ""
            if "/warning-and-events/" in href and "warning-storm" not in href:
                self.href, self.parts = href, []

    def handle_data(self, data: str) -> None:
        if self.href:
            self.parts.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "a" and self.href:
            title = clean(" ".join(self.parts))
            if title and any(word in title for word in KEYWORDS):
                url = urllib.parse.urljoin(WARNING_URL, self.href)
                item_id = hashlib.sha256(url.encode()).hexdigest()[:24]
                if not any(item["id"] == item_id for item in self.items):
                    self.items.append({"id": item_id, "title": title[:500], "url": url})
            self.href, self.parts = "", []


def fetch_warnings() -> list[dict]:
    request = urllib.request.Request(
        WARNING_URL,
        headers={"User-Agent": "IEAT-eMonitoring/3.0", "Accept-Language": "th-TH,th;q=0.9"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        raw = response.read().decode("utf-8", errors="replace")
    parser = WarningParser()
    parser.feed(raw)
    return parser.items


def severity(title: str) -> tuple[str, str, str]:
    if any(word in title for word in ("พายุไต้ฝุ่น", "พายุโซนร้อน", "พายุไซโคลน", "หนักมาก")):
        return "อันตราย • ดำเนินการเร่งด่วน", "#BF033B", "#FCE7ED"
    if any(word in title for word in ("ฝนตกหนัก", "คลื่นลมแรง", "พายุ", "ลมแรง")):
        return "เตรียมพร้อม • ตรวจสอบพื้นที่", "#FF6908", "#FFF0E8"
    return "เฝ้าระวัง • ติดตามประกาศ", "#598C14", "#EEF5E6"


def industrial_guidance(level: str) -> str:
    if level.startswith("อันตราย"):
        return "เปิดใช้แผนฉุกเฉิน • ตรวจระบบระบายน้ำและพื้นที่เสี่ยงน้ำท่วม • ยึดตรึงป้าย หลังคา เครน และวัสดุ • ป้องกันระบบไฟฟ้า สารเคมี และคลังสินค้า • พิจารณาหยุดงานกลางแจ้งและกระบวนการเสี่ยง"
    if level.startswith("เตรียมพร้อม"):
        return "ตรวจท่อและเครื่องสูบน้ำ • เคลียร์ทางระบายน้ำ • ตรวจหลังคา ป้าย เครน และวัสดุที่อาจปลิว • เตรียมไฟสำรองและเส้นทางขนส่งสำรอง • แจ้งผู้รับผิดชอบความปลอดภัย"
    return "ติดตามประกาศกรมอุตุนิยมวิทยา • ตรวจความพร้อมระบบระบายน้ำ ไฟสำรอง และช่องทางประสานเหตุของนิคม"


def flex_message(item: dict, test: bool = False) -> dict:
    level, color, background = severity(item["title"])
    now = datetime.now(THAI_TZ).strftime("%d/%m/%Y เวลา %H:%M น.")
    title = item["title"]
    return {
        "type": "flex",
        "altText": ("[ทดสอบ] " if test else "") + f"แจ้งเตือนฝนตกหนักและพายุ — {level}",
        "contents": {
            "type": "bubble", "size": "mega",
            "header": {"type": "box", "layout": "vertical", "backgroundColor": "#17233C", "paddingAll": "20px", "contents": [
                {"type": "text", "text": "HEAVY RAIN & STORM ALERT", "size": "xxs", "weight": "bold", "color": "#B9A6C9"},
                {"type": "text", "text": "แจ้งเตือนฝนตกหนักและพายุ", "size": "xl", "weight": "bold", "color": "#FFFFFF", "wrap": True, "margin": "xs"},
                *([{"type": "text", "text": "ตัวอย่างทดสอบ • ไม่ใช่เหตุการณ์จริง", "size": "xs", "weight": "bold", "color": "#FFD166", "margin": "md"}] if test else [])
            ]},
            "body": {"type": "box", "layout": "vertical", "paddingAll": "20px", "contents": [
                {"type": "box", "layout": "vertical", "backgroundColor": background, "cornerRadius": "lg", "paddingAll": "13px", "contents": [
                    {"type": "text", "text": level, "size": "sm", "weight": "bold", "color": color, "align": "center"}
                ]},
                {"type": "text", "text": "ประกาศกรมอุตุนิยมวิทยา", "size": "xxs", "weight": "bold", "color": color, "margin": "xl"},
                {"type": "text", "text": title, "size": "md", "weight": "bold", "color": "#252B3A", "wrap": True, "margin": "sm"},
                {"type": "box", "layout": "vertical", "backgroundColor": "#F7F8FA", "cornerRadius": "lg", "paddingAll": "12px", "margin": "lg", "contents": [
                    {"type": "text", "text": "เวลาที่ระบบตรวจพบ", "size": "xxs", "weight": "bold", "color": "#7B8190"},
                    {"type": "text", "text": now, "size": "sm", "weight": "bold", "color": "#252B3A", "margin": "sm"}
                ]},
                {"type": "box", "layout": "vertical", "backgroundColor": background, "cornerRadius": "lg", "paddingAll": "14px", "margin": "lg", "contents": [
                    {"type": "text", "text": "แนวทางสำหรับนิคมอุตสาหกรรม", "size": "sm", "weight": "bold", "color": color},
                    {"type": "text", "text": industrial_guidance(level), "size": "sm", "color": "#3A3F4B", "wrap": True, "margin": "sm"}
                ]},
                {"type": "text", "text": "ข้อมูลจากกรมอุตุนิยมวิทยา • สายด่วน 1182", "size": "xs", "color": "#7B8190", "wrap": True, "margin": "xl"}
            ]},
            "footer": {"type": "box", "layout": "vertical", "paddingAll": "16px", "contents": [
                {"type": "button", "style": "primary", "height": "sm", "color": color, "action": {"type": "uri", "label": "เปิดอ่านประกาศฉบับเต็ม", "uri": item["url"]}},
                {"type": "button", "style": "secondary", "height": "sm", "margin": "sm", "color": color, "action": {"type": "uri", "label": "ดูเรดาร์ตรวจอากาศ", "uri": "https://weather.tmd.go.th/"}}
            ]}
        }
    }


def push_line(token: str, target: str, message: dict) -> None:
    if not TARGET_ID_RE.fullmatch(target):
        raise ValueError("LINE_TARGET_ID มีรูปแบบไม่ถูกต้อง")
    body = json.dumps({"to": target, "messages": [message]}, ensure_ascii=False).encode()
    request = urllib.request.Request(LINE_API, data=body, headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"}, method="POST")
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            if response.status >= 300:
                raise RuntimeError(f"LINE API HTTP {response.status}")
    except urllib.error.HTTPError as error:
        details = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"LINE API HTTP {error.code}: {details}") from error


def load_state() -> dict:
    try:
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def save_state(latest_id: str) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(json.dumps({"last_seen_id": latest_id, "updated_at": datetime.now(THAI_TZ).isoformat()}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def test_item() -> dict:
    return {"id": "test", "title": "ฝนตกหนักถึงหนักมากและลมแรงในหลายพื้นที่ (ข้อมูลจำลองสำหรับทดสอบระบบ)", "url": WARNING_URL}


def main() -> int:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    target = os.getenv("LINE_TARGET_ID", "").strip()
    if os.getenv("SEND_TEST_ALERT", "").lower() == "true":
        if not token or not target:
            print("LINE secrets are required.", file=sys.stderr)
            return 1
        push_line(token, target, flex_message(test_item(), test=True))
        print("Test weather warning sent to LINE.")
        return 0
    try:
        warnings = fetch_warnings()
    except (urllib.error.URLError, UnicodeError) as error:
        print(f"Unable to read TMD warnings: {error}", file=sys.stderr)
        return 1
    if not warnings:
        print("No matching TMD weather warnings found.", file=sys.stderr)
        return 1
    latest_id = warnings[0]["id"]
    previous_id = load_state().get("last_seen_id")
    if not previous_id:
        save_state(latest_id)
        print("Initialized weather warning state; no historical alert sent.")
        return 0
    new_items = []
    for item in warnings:
        if item["id"] == previous_id:
            break
        new_items.append(item)
    sent = 0
    if new_items and (not token or not target):
        print("LINE secrets are missing; state was not advanced.", file=sys.stderr)
        return 1
    for item in reversed(new_items[:5]):
        push_line(token, target, flex_message(item))
        sent += 1
    save_state(latest_id)
    print(f"Checked {len(warnings)} warnings; found {len(new_items)} new; sent {sent}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
