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
    stations = payload if isinstance(payload, list) else (payload.get("stations") or payload.get("data") or [])
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


def environment_info_row(icon: str, label: str, value: str) -> dict:
    return {
        "type": "box", "layout": "horizontal", "spacing": "md", "margin": "lg",
        "contents": [
            {"type": "box", "layout": "vertical", "width": "36px", "height": "36px",
             "backgroundColor": "#F2EAF8", "cornerRadius": "9px",
             "justifyContent": "center", "alignItems": "center",
             "contents": [{"type": "text", "text": icon, "size": "lg",
                           "weight": "bold", "color": "#52057F", "align": "center"}]},
            {"type": "box", "layout": "vertical", "flex": 1, "justifyContent": "center",
             "contents": [
                 {"type": "text", "text": label, "size": "xs", "weight": "bold",
                  "color": "#52057F"},
                 {"type": "text", "text": value, "size": "sm", "weight": "bold",
                  "color": "#222222", "wrap": True, "margin": "xs"},
             ]},
        ],
    }


def simple_guidance(kind: str) -> list[str]:
    if kind == "PM2.5":
        return [
            "ลดกิจกรรมและงานกลางแจ้งในช่วงค่าฝุ่นสูง",
            "จัดเตรียมหน้ากากและดูแลพนักงานกลุ่มเสี่ยง",
            "ติดตามค่าฝุ่นจากสถานีตรวจวัดอย่างใกล้ชิด",
        ]
    if "จุดความร้อน" in kind:
        return [
            "ตรวจพื้นที่รอบโรงงานและคลังสารไวไฟ",
            "เตรียมทีมดับเพลิง แหล่งน้ำ และอุปกรณ์ฉุกเฉิน",
            "งดกิจกรรมที่ก่อประกายไฟในพื้นที่เสี่ยง",
        ]
    if kind == "น้ำท่วม":
        return [
            "ตรวจระบบระบายน้ำและเครื่องสูบน้ำ",
            "ป้องกันระบบไฟฟ้า สารเคมี และคลังสินค้า",
            "เตรียมเส้นทางสำรองและทีมฉุกเฉิน",
        ]
    return [
        "ติดตามสถานการณ์น้ำดิบและปริมาณน้ำสำรอง",
        "วางแผนลดการใช้น้ำในส่วนที่ไม่จำเป็น",
        "ติดตามข้อมูลจากหน่วยงานอย่างใกล้ชิด",
    ]


def flex(event: dict, test: bool = False) -> dict:
    color = event["color"]
    tips = simple_guidance(event["kind"])
    detected = datetime.now(THAI_TZ).strftime("%d/%m/%Y เวลา %H:%M น.")

    header = [
        {"type": "text", "text": "⚠  แจ้งเตือนภัยพิบัติ", "color": "#FFFFFF",
         "weight": "bold", "size": "md", "align": "center"},
        {"type": "text", "text": "สิ่งแวดล้อม", "color": "#FFFFFF",
         "weight": "bold", "size": "3xl", "align": "center", "margin": "sm"},
    ]
    if test:
        header.append({"type": "text", "text": "ตัวอย่างทดสอบ • ไม่ใช่เหตุการณ์จริง",
                       "size": "xs", "weight": "bold", "color": "#FFF2A8",
                       "align": "center", "margin": "md"})

    return {
        "type": "flex",
        "altText": ("[ทดสอบ] " if test else "") +
                   f"แจ้งเตือน{event['kind']} — {event['value']}",
        "contents": {
            "type": "bubble", "size": "kilo",
            "header": {"type": "box", "layout": "vertical",
                       "backgroundColor": "#FF6908", "paddingAll": "16px",
                       "contents": header},
            "body": {"type": "box", "layout": "vertical", "paddingAll": "20px",
                     "backgroundColor": "#FFFFFF", "contents": [
                {"type": "box", "layout": "horizontal", "contents": [
                    {"type": "box", "layout": "vertical", "paddingAll": "9px",
                     "backgroundColor": color, "cornerRadius": "9px",
                     "contents": [{"type": "text", "text": event["level"],
                                   "size": "sm", "weight": "bold",
                                   "color": "#FFFFFF", "align": "center",
                                   "wrap": True}]}
                ]},
                {"type": "text", "text": event["kind"], "size": "lg",
                 "weight": "bold", "color": "#FF4B0A", "margin": "xl"},
                {"type": "text", "text": event["value"], "size": "3xl",
                 "weight": "bold", "color": "#FF4B0A", "margin": "sm"},
                environment_info_row("●", "พื้นที่/สถานี", event["title"]),
                environment_info_row("▣", "เวลาที่ระบบตรวจพบ", detected),
                {"type": "separator", "margin": "xl", "color": "#E7E7E7"},
                {"type": "box", "layout": "vertical", "margin": "xl",
                 "paddingAll": "13px", "backgroundColor": "#F4F9EE",
                 "cornerRadius": "14px", "contents": [
                    {"type": "text", "text": "✓  คำแนะนำเพื่อความปลอดภัย",
                     "size": "lg", "weight": "bold", "color": "#598C14",
                     "wrap": True},
                    {"type": "text", "text": f"• {tips[0]}", "size": "xs",
                     "color": "#333333", "wrap": True, "margin": "lg"},
                    {"type": "text", "text": f"• {tips[1]}", "size": "xs",
                     "color": "#333333", "wrap": True, "margin": "md"},
                    {"type": "text", "text": f"• {tips[2]}", "size": "xs",
                     "color": "#333333", "wrap": True, "margin": "md"},
                ]},
            ]},
            "footer": {"type": "box", "layout": "vertical", "paddingAll": "16px",
                       "spacing": "md", "contents": [
                {"type": "button", "style": "primary", "height": "sm",
                 "color": "#52057F",
                 "action": {"type": "uri", "label": "ดูข้อมูลจากหน่วยงาน",
                            "uri": event["url"]}},
                {"type": "separator", "margin": "md", "color": "#598C14"},
                {"type": "text",
                 "text": "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย กนอ.",
                 "size": "xs", "weight": "bold", "color": "#52057F",
                 "align": "center", "wrap": True},
            ]},
        },
    }


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
