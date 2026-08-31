#!/usr/bin/env python3
"""Send one official-data daily disaster brief to each affected IEAT operation zone."""

from __future__ import annotations

import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

THAI_TZ = ZoneInfo("Asia/Bangkok")
DATA_PATH = Path(os.getenv("THAIWATER_DATA_PATH", "docs/data/thaiwater_latest.json"))
STATE_PATH = Path(os.getenv("DISASTER_DAILY_STATE_PATH", "data/disaster-daily-zone-state.json"))
LINE_API = "https://api.line.me/v2/bot/message/push"
THAIWATER_URL = "https://www.thaiwater.net/"
LOGO_URL = "https://raw.githubusercontent.com/THANAWAN-KI/ieat-emonitoring-line-alert/main/docs/assets/TH-Vertical.png"
TARGET_RE = re.compile(r"^[UCR][0-9a-fA-F]{32}$")
ZONE_TARGETS = {
    "สายปฏิบัติการ 1": "LINE_GROUP_ID_DEMO_01",
    "สายปฏิบัติการ 2": "LINE_GROUP_ID_DEMO_02",
    "สายปฏิบัติการ 3": "LINE_GROUP_ID_DEMO_03",
}


def enabled(name: str) -> bool:
    return os.getenv(name, "").strip().lower() in {"1", "true", "yes", "on"}


def normalize_zone(value: object) -> str:
    text = re.sub(r"\s+", "", str(value or "")).replace("ปฎิบัติการ", "ปฏิบัติการ")
    match = re.search(r"([123])$", text)
    return f"สายปฏิบัติการ {match.group(1)}" if match else ""


def parse_time(value: object) -> datetime | None:
    text = str(value or "").strip().replace("Z", "+00:00")
    if not text:
        return None
    candidates = [text, text.replace(" ", "T", 1)]
    for candidate in candidates:
        try:
            dt = datetime.fromisoformat(candidate)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=THAI_TZ)
            return dt.astimezone(THAI_TZ)
        except ValueError:
            pass
    for pattern in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M"):
        try:
            return datetime.strptime(text[:19], pattern).replace(tzinfo=THAI_TZ)
        except ValueError:
            pass
    return None


def load_data() -> dict:
    payload = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    if payload.get("status") not in {"ok", "stale"}:
        raise RuntimeError("ข้อมูล ThaiWater ยังไม่พร้อมใช้งาน")
    return payload


def today_risks(payload: dict, now: datetime) -> dict[str, list[dict]]:
    generated = parse_time(payload.get("generated_at"))
    if not generated or generated.date() != now.date():
        raise RuntimeError("ข้อมูล ThaiWater ไม่ใช่ข้อมูลของวันปัจจุบัน จึงไม่ส่ง LINE")

    estates = {str(x.get("name") or ""): x for x in payload.get("estates", [])}
    grouped: dict[str, dict[str, dict]] = {zone: {} for zone in ZONE_TARGETS}
    for row in payload.get("stations", []):
        observed = parse_time(row.get("observed_at"))
        if not observed or observed.date() != now.date():
            continue
        if int(row.get("severity_score") or 0) < 2 or float(row.get("distance_km") or 999) > 30:
            continue
        estate_name = str(row.get("nearest_estate") or "").strip()
        estate = estates.get(estate_name, {})
        zone = normalize_zone(estate.get("operations"))
        if zone not in grouped:
            continue
        current = grouped[zone].setdefault(estate_name, {
            "estate": estate_name,
            "province": str(row.get("province") or "ไม่ระบุจังหวัด"),
            "severity": 0,
            "status": "เฝ้าระวัง",
            "max_rain": None,
            "water_alerts": 0,
            "latest": observed,
        })
        current["severity"] = max(current["severity"], int(row.get("severity_score") or 0))
        if int(row.get("severity_score") or 0) >= current["severity"]:
            current["status"] = str(row.get("status") or "เฝ้าระวัง")
        if row.get("kind") == "rainfall" and row.get("rainfall_mm") is not None:
            rain = float(row["rainfall_mm"])
            current["max_rain"] = max(current["max_rain"] or rain, rain)
        if row.get("kind") == "waterlevel":
            current["water_alerts"] += 1
        current["latest"] = max(current["latest"], observed)
    return {
        zone: sorted(items.values(), key=lambda x: (x["severity"], x["max_rain"] or -1), reverse=True)
        for zone, items in grouped.items() if items
    }


def sample_risks(zone: str, now: datetime) -> dict[str, list[dict]]:
    return {zone: [
        {"estate": "นิคมอุตสาหกรรมตัวอย่าง จังหวัดระยอง", "province": "ระยอง", "severity": 3,
         "status": "เสี่ยงสูง", "max_rain": 78.5, "water_alerts": 1, "latest": now},
        {"estate": "นิคมอุตสาหกรรมตัวอย่าง 2", "province": "ระยอง", "severity": 2,
         "status": "เฝ้าระวัง", "max_rain": 46.0, "water_alerts": 0, "latest": now},
    ]}


def risk_color(score: int) -> tuple[str, str]:
    if score >= 4:
        return "#BF033B", "#FCE7ED"
    if score >= 3:
        return "#E57200", "#FFF3DF"
    return "#165823", "#EEF7F0"


def build_flex(zone: str, risks: list[dict], now: datetime, test: bool) -> dict:
    highest = max(x["severity"] for x in risks)
    accent, pale = risk_color(highest)
    max_rain = max((x["max_rain"] for x in risks if x["max_rain"] is not None), default=None)
    water_count = sum(x["water_alerts"] for x in risks)
    rows = []
    for item in risks[:4]:
        details = []
        if item["max_rain"] is not None:
            details.append(f"ฝน 24 ชม. {item['max_rain']:g} มม.")
        if item["water_alerts"]:
            details.append(f"ระดับน้ำเฝ้าระวัง {item['water_alerts']} จุด")
        rows.append({"type": "box", "layout": "vertical", "margin": "md", "paddingAll": "10px",
            "backgroundColor": "#F7F8FA", "cornerRadius": "10px", "contents": [
                {"type": "text", "text": item["estate"], "size": "sm", "weight": "bold", "color": "#111111", "wrap": True},
                {"type": "text", "text": f"จ.{item['province']} • {item['status']}", "size": "xs", "color": accent, "weight": "bold", "margin": "xs", "wrap": True},
                {"type": "text", "text": " • ".join(details) or "พบค่าถึงเกณฑ์เฝ้าระวัง", "size": "xs", "color": "#555555", "margin": "xs", "wrap": True},
            ]})
    if len(risks) > 4:
        rows.append({"type": "text", "text": f"และอีก {len(risks) - 4} นิคมฯ", "size": "xs", "color": "#666666", "align": "center", "margin": "md"})

    metrics = [
        (str(len(risks)), "นิคมฯ เฝ้าระวัง"),
        ("-" if max_rain is None else f"{max_rain:g}", "ฝนสูงสุด (มม.)"),
        (str(water_count), "จุดระดับน้ำ"),
    ]
    metric_boxes = [{"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": pale,
        "cornerRadius": "10px", "paddingAll": "9px", "contents": [
            {"type": "text", "text": value, "size": "xl", "weight": "bold", "color": accent, "align": "center"},
            {"type": "text", "text": label, "size": "xxs", "color": "#333333", "align": "center", "wrap": True},
        ]} for value, label in metrics]

    return {"type": "flex", "altText": (("[ทดสอบ] " if test else "") + f"รายงานภัยพิบัติรายวัน {zone}")[:400], "contents": {
        "type": "bubble", "size": "mega", "styles": {"header": {"backgroundColor": "#FFFFFF"}, "body": {"backgroundColor": "#FFFFFF"}, "footer": {"backgroundColor": "#FFFFFF"}},
        "hero": {"type": "image", "url": LOGO_URL, "size": "full", "aspectRatio": "20:7", "aspectMode": "fit", "backgroundColor": "#FFFFFF"},
        "header": {"type": "box", "layout": "vertical", "paddingAll": "14px", "contents": [
            {"type": "text", "text": "รายงานสถานการณ์ภัยพิบัติรายวัน", "size": "lg", "weight": "bold", "color": "#111111", "align": "center", "wrap": True},
            {"type": "text", "text": zone, "size": "sm", "weight": "bold", "color": "#165823", "align": "center", "margin": "sm"},
            {"type": "text", "text": ("ตัวอย่าง • ไม่ใช่เหตุการณ์จริง • " if test else "") + now.strftime("%d/%m/%Y เวลา %H:%M น."), "size": "xxs", "color": "#666666", "align": "center", "margin": "sm", "wrap": True},
        ]},
        "body": {"type": "box", "layout": "vertical", "paddingAll": "14px", "contents": [
            {"type": "box", "layout": "horizontal", "spacing": "sm", "contents": metric_boxes},
            {"type": "text", "text": "พื้นที่ที่ต้องเฝ้าระวัง", "size": "sm", "weight": "bold", "color": "#111111", "margin": "lg"},
            *rows,
            {"type": "text", "text": "ข้อแนะนำ", "size": "sm", "weight": "bold", "color": "#111111", "margin": "lg"},
            {"type": "text", "text": "ตรวจระบบระบายน้ำและเครื่องสูบน้ำ • ป้องกันระบบไฟฟ้าและสารเคมี • ติดตามประกาศของหน่วยงานรัฐก่อนเดินทาง", "size": "xs", "color": "#333333", "wrap": True, "margin": "sm"},
            {"type": "text", "text": "เส้นทางจะระบุเฉพาะเมื่อมีประกาศปิดหรือหลีกเลี่ยงจากหน่วยงานทางการ", "size": "xxs", "color": "#777777", "wrap": True, "margin": "md"},
        ]},
        "footer": {"type": "box", "layout": "vertical", "paddingAll": "14px", "contents": [
            {"type": "button", "style": "primary", "height": "sm", "color": "#165823", "action": {"type": "uri", "label": "ตรวจสอบข้อมูล ThaiWater", "uri": THAIWATER_URL}},
            {"type": "text", "text": "แหล่งข้อมูล: ThaiWater (สสน.) และตำแหน่งนิคมฯ กนอ.", "size": "xxs", "color": "#777777", "align": "center", "wrap": True, "margin": "md"},
        ]},
    }}


def push(token: str, target: str, message: dict) -> None:
    if not TARGET_RE.fullmatch(target):
        raise ValueError("Group ID มีรูปแบบไม่ถูกต้อง")
    body = json.dumps({"to": target, "messages": [message]}, ensure_ascii=False).encode()
    req = urllib.request.Request(LINE_API, data=body, method="POST", headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            if response.status >= 300:
                raise RuntimeError(f"LINE API HTTP {response.status}")
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"LINE API HTTP {exc.code}: {exc.read().decode(errors='replace')}") from exc


def load_state() -> dict:
    try:
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return {}


def save_state(now: datetime, zones: list[str]) -> None:
    STATE_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATE_PATH.write_text(json.dumps({"date": now.date().isoformat(), "zones": zones, "updated_at": now.isoformat()}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> int:
    now = datetime.now(THAI_TZ)
    preview = enabled("DISASTER_PREVIEW_MODE")
    preview_zone = os.getenv("DISASTER_PREVIEW_ZONE", "สายปฏิบัติการ 3").strip()
    if preview_zone not in ZONE_TARGETS:
        preview_zone = "สายปฏิบัติการ 3"
    grouped = sample_risks(preview_zone, now) if preview else today_risks(load_data(), now)
    if not grouped:
        print("วันนี้ไม่พบพื้นที่ถึงเกณฑ์เฝ้าระวัง จึงไม่ส่ง LINE")
        return 0
    if not preview:
        state = load_state()
        if state.get("date") == now.date().isoformat():
            grouped = {zone: risks for zone, risks in grouped.items() if zone not in state.get("zones", [])}
            if not grouped:
                print("ส่งรายงานของวันนี้ครบแล้ว จึงไม่ส่งซ้ำ")
                return 0
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    if not token:
        raise RuntimeError("ไม่พบ Secret LINE_CHANNEL_ACCESS_TOKEN")
    sent = []
    for zone, risks in grouped.items():
        secret_name = ZONE_TARGETS[zone]
        target = os.getenv(secret_name, "").strip()
        if not target:
            raise RuntimeError(f"ไม่พบ Secret {secret_name}")
        push(token, target, build_flex(zone, risks, now, preview))
        sent.append(zone)
        print(f"ส่งรายงาน {zone} สำเร็จ ({len(risks)} นิคมฯ)")
    if not preview:
        save_state(now, sent)
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)