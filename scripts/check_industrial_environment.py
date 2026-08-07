#!/usr/bin/env python3
"""ตรวจ PM2.5 และภาพรวมภัยจากแหล่งข้อมูลทางการ แล้วแจ้ง LINE เมื่อเกินเกณฑ์."""

from __future__ import annotations

import hashlib
import html
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

AIR4THAI_URL = os.getenv("AIR4THAI_URL", "https://air4thai.pcd.go.th/services/getNewAQI_JSON.php")
GISTDA_URL = os.getenv("GISTDA_DISASTER_URL", "https://disaster.gistda.or.th/dashboard")
STATE_PATH = Path(os.getenv("INDUSTRIAL_ENV_STATE_PATH", "data/industrial-environment-state.json"))
LINE_API = "https://api.line.me/v2/bot/message/push"
TARGET_ID_RE = re.compile(r"^[UCR][0-9a-fA-F]{32}$")
THAI_TZ = ZoneInfo("Asia/Bangkok")


def request_text(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "IEAT-eMonitoring/4.0", "Accept-Language": "th-TH,th;q=0.9"})
    with urllib.request.urlopen(req, timeout=40) as response:
        return response.read().decode("utf-8", errors="replace")


def wanted_provinces() -> set[str]:
    return {x.strip() for x in os.getenv("TARGET_PROVINCES", "").split(",") if x.strip()}


def number(value) -> float | None:
    try:
        text = str(value).strip().replace(",", "")
        return float(text) if text not in ("", "-", "None") else None
    except (TypeError, ValueError):
        return None


def pm_events() -> list[dict]:
    payload = json.loads(request_text(AIR4THAI_URL))
    stations = payload.get("stations") or payload.get("data") or payload if isinstance(payload, list) else []
    provinces = wanted_provinces()
    events = []
    for station in stations:
        area = station.get("areaTH") or station.get("nameTH") or station.get("stationName") or "ไม่ระบุสถานี"
        province = station.get("province") or station.get("provinceTH") or ""
        if provinces and not any(p in f"{province} {area}" for p in provinces):
            continue
        last = station.get("LastUpdate") or station.get("lastUpdate") or station.get("AQILast") or {}
        pm = number(last.get("PM25") if isinstance(last, dict) else None)
        if pm is None:
            pm = number(station.get("PM25"))
        if pm is None or pm < 37.6:
            continue
        level = "อันตราย" if pm > 75 else "เริ่มมีผลกระทบต่อสุขภาพ"
        events.append({"kind": "PM2.5", "title": f"{area}{(' • ' + province) if province and province not in area else ''}", "value": f"{pm:g} µg/m³", "level": level, "color": "#BF033B" if pm > 75 else "#FF6908", "url": "https://air4thai.pcd.go.th/"})
    return sorted(events, key=lambda x: float(x["value"].split()[0]), reverse=True)[:8]


def gistda_events() -> list[dict]:
    raw = html.unescape(re.sub(r"<[^>]+>", " ", request_text(GISTDA_URL)))
    clean = re.sub(r"\s+", " ", raw)
    patterns = [
        ("จุดความร้อน/ไฟป่า", r"(\d[\d,]*)\s*จุด\s*จุดความร้อนทั้งหมด", "https://disaster.gistda.or.th/fire"),
        ("น้ำท่วม", r"พื้นที่น้ำท่วมทั้งหมด\s*(\d[\d,]*)\s*จุด", "https://disaster.gistda.or.th/flood"),
        ("ภัยแล้ง", r"([\d.]+)\s*%\s*ค่าเฉลี่ยพื้นที่เสี่ยงภัยแล้ง", "https://disaster.gistda.or.th/drought"),
    ]
    events = []
    for kind, pattern, url in patterns:
        match = re.search(pattern, clean)
        value = number(match.group(1)) if match else None
        if value is None or value <= 0:
            continue
        threshold = 1 if kind != "ภัยแล้ง" else 40
        if value < threshold:
            continue
        suffix = " จุด" if kind != "ภัยแล้ง" else "%"
        events.append({"kind": kind, "title": "ภาพรวมประเทศไทยจาก GISTDA", "value": f"{value:g}{suffix}", "level": "เฝ้าระวังและตรวจสอบพื้นที่นิคม", "color": "#FF6908", "url": url})
    return events


def fingerprint(events: list[dict]) -> str:
    stable = json.dumps(events, ensure_ascii=False, sort_keys=True)
    return hashlib.sha256(stable.encode()).hexdigest()[:24]


def guidance(kind: str) -> str:
    if kind == "PM2.5":
        return "ลดงานกลางแจ้ง • จัดหน้ากากที่เหมาะสม • ตรวจระบบกรองอากาศ • เฝ้าระวังพนักงานกลุ่มเสี่ยง"
    if "จุดความร้อน" in kind:
        return "ตรวจพื้นที่รอบโรงงานและคลังสารไวไฟ • เตรียมทีมดับเพลิงและแหล่งน้ำ • งดกิจกรรมที่ก่อประกายไฟ"
    if kind == "น้ำท่วม":
        return "ตรวจระบบระบายน้ำและเครื่องสูบน้ำ • ป้องกันระบบไฟฟ้า สารเคมี และคลังสินค้า • เตรียมเส้นทางสำรอง"
    return "ติดตามแหล่งน้ำดิบและแผนจัดสรรน้ำ • ตรวจปริมาณสำรอง • เตรียมลดการใช้น้ำในกระบวนการที่ไม่จำเป็น"


def flex(event: dict, test: bool = False) -> dict:
    color = event["color"]
    return {"type": "flex", "altText": ("[ทดสอบ] " if test else "") + f"{event['kind']} — {event['value']}", "contents": {"type": "bubble", "size": "mega", "header": {"type": "box", "layout": "vertical", "backgroundColor": "#17233C", "paddingAll": "20px", "contents": [{"type": "text", "text": "INDUSTRIAL ENVIRONMENT ALERT", "size": "xxs", "weight": "bold", "color": "#B9A6C9"}, {"type": "text", "text": f"แจ้งเตือน{event['kind']}", "size": "xl", "weight": "bold", "color": "#FFFFFF", "wrap": True, "margin": "xs"}] + ([{"type": "text", "text": "ตัวอย่างทดสอบ • ไม่ใช่เหตุการณ์จริง", "size": "xs", "weight": "bold", "color": "#FFD166", "margin": "md"}] if test else [])}, "body": {"type": "box", "layout": "vertical", "paddingAll": "20px", "contents": [{"type": "text", "text": event["level"], "size": "sm", "weight": "bold", "color": color}, {"type": "text", "text": event["value"], "size": "3xl", "weight": "bold", "color": "#17233C", "margin": "md"}, {"type": "text", "text": event["title"], "size": "md", "weight": "bold", "color": "#252B3A", "wrap": True, "margin": "md"}, {"type": "box", "layout": "vertical", "backgroundColor": "#F7F8FA", "cornerRadius": "lg", "paddingAll": "14px", "margin": "xl", "contents": [{"type": "text", "text": "แนวทางสำหรับนิคมอุตสาหกรรม", "size": "sm", "weight": "bold", "color": color}, {"type": "text", "text": guidance(event["kind"]), "size": "sm", "color": "#3A3F4B", "wrap": True, "margin": "sm"}]}, {"type": "text", "text": datetime.now(THAI_TZ).strftime("ตรวจพบ %d/%m/%Y เวลา %H:%M น."), "size": "xs", "color": "#7B8190", "margin": "xl"}]}, "footer": {"type": "box", "layout": "vertical", "paddingAll": "16px", "contents": [{"type": "button", "style": "primary", "height": "sm", "color": color, "action": {"type": "uri", "label": "เปิดดูข้อมูลจากหน่วยงาน", "uri": event["url"]}}]}}}


def push(token: str, target: str, message: dict) -> None:
    if not TARGET_ID_RE.fullmatch(target):
        raise ValueError("LINE_TARGET_ID มีรูปแบบไม่ถูกต้อง")
    body = json.dumps({"to": target, "messages": [message]}, ensure_ascii=False).encode()
    req = urllib.request.Request(LINE_API, data=body, headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req, timeout=30) as response:
        if response.status >= 300:
            raise RuntimeError(f"LINE API HTTP {response.status}")


def load_state() -> dict:
    try:
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def save_state(ids: dict[str, str]) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(json.dumps({"fingerprints": ids, "updated_at": datetime.now(THAI_TZ).isoformat()}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    token, target = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip(), os.getenv("LINE_TARGET_ID", "").strip()
    if os.getenv("SEND_TEST_ALERT", "").lower() == "true":
        sample = {"kind": "PM2.5", "title": "สถานีตัวอย่างใกล้นิคมอุตสาหกรรม", "value": "58 µg/m³", "level": "เริ่มมีผลกระทบต่อสุขภาพ", "color": "#FF6908", "url": "https://air4thai.pcd.go.th/"}
        if not token or not target:
            return 1
        push(token, target, flex(sample, True))
        print("Test industrial environment alert sent.")
        return 0
    providers = {"air4thai": pm_events, "gistda": gistda_events}
    old = load_state().get("fingerprints", {})
    current, pending = {}, []
    for name, provider in providers.items():
        try:
            events = provider()
        except (urllib.error.URLError, json.JSONDecodeError, TypeError, ValueError) as error:
            print(f"Provider {name} unavailable: {error}", file=sys.stderr)
            current[name] = old.get(name, "")
            continue
        current[name] = fingerprint(events)
        if old and events and current[name] != old.get(name):
            pending.extend(events)
    if pending and (not token or not target):
        print("LINE secrets missing; state not advanced.", file=sys.stderr)
        return 1
    for event in pending[:10]:
        push(token, target, flex(event))
    save_state(current)
    print(f"Checked {len(providers)} providers; sent {min(len(pending), 10)} alerts.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
