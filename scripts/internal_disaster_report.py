#!/usr/bin/env python3
"""Build one private daily disaster brief from IEAT and official public sources."""

from __future__ import annotations

import json
import os
import re
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

import check_earthquake as earthquake
import check_industrial_environment as environment
import check_weather_warning as weather

THAI_TZ = ZoneInfo("Asia/Bangkok")
STATUS_PATH = Path(os.getenv("EMONITORING_STATUS_PATH", "docs/status.json"))
OUTPUT_PATH = Path(os.getenv("DISASTER_REPORT_PATH", "docs/internal-disaster-report.json"))
LINE_API = "https://api.line.me/v2/bot/message/push"
DASHBOARD_URL = os.getenv(
    "DISASTER_DASHBOARD_URL",
    "https://thanawan-ki.github.io/ieat-emonitoring-line-alert/disaster-workspace.html",
)


def source(name: str, url: str, loader) -> dict:
    try:
        items = loader() or []
        return {"name": name, "url": url, "available": True, "items": items, "error": ""}
    except Exception as exc:  # one unavailable provider must not stop the whole brief
        return {"name": name, "url": url, "available": False, "items": [], "error": str(exc)[:180]}


def load_emonitoring() -> dict:
    data = json.loads(STATUS_PATH.read_text(encoding="utf-8"))
    stations = data.get("stations") or []
    alarms = [s for s in stations if str(s.get("parameter_alarm") or "").strip() not in ("", "-")]
    estates = sorted({str(s.get("estate_name") or "ไม่ระบุนิคม").strip() for s in alarms})
    return {
        "updated_at": data.get("updated_at_text") or data.get("updated_at") or "ไม่ระบุ",
        "total": int(data.get("station_count") or len(stations)),
        "online": int(data.get("online_total") or 0),
        "offline": int(data.get("offline_total") or 0),
        "alarm_stations": int(data.get("alert_station_count") or len(alarms)),
        "alarm_estates": estates,
        "alarm_details": [
            {"estate": s.get("estate_name") or "ไม่ระบุนิคม", "station": s.get("station_name") or s.get("code") or "ไม่ระบุ", "parameter": s.get("parameter_alarm") or "-"}
            for s in alarms[:30]
        ],
    }


def load_earthquakes() -> list[dict]:
    req = urllib.request.Request(earthquake.RSS_URL, headers={"User-Agent": "IEAT-Disaster-Brief/1.0"})
    with urllib.request.urlopen(req, timeout=30) as response:
        events = earthquake.parse_feed(response.read())
    return [
        {"title": e.get("title") or "ไม่ระบุพื้นที่", "magnitude": e.get("magnitude"), "published": e.get("published") or "", "url": e.get("link") or "https://earthquake.tmd.go.th/"}
        for e in events if earthquake.qualifies(e)
    ][:5]


def load_weather() -> list[dict]:
    return [{"title": x.get("title", ""), "url": x.get("url", weather.WARNING_URL)} for x in weather.fetch_warnings()[:5]]


def build_report() -> dict:
    now = datetime.now(THAI_TZ)
    em = source("กนอ. e-Monitoring", "./stations.html", load_emonitoring)
    eq = source("กรมอุตุนิยมวิทยา: แผ่นดินไหว", earthquake.RSS_URL, load_earthquakes)
    wt = source("กรมอุตุนิยมวิทยา: ประกาศเตือน", weather.WARNING_URL, load_weather)
    pm = source("กรมควบคุมมลพิษ: Air4Thai", environment.AIR4THAI_URL, environment.pm_events)
    gs = source("GISTDA Disaster", environment.GISTDA_URL, environment.gistda_events)
    monitoring = em["items"] if em["available"] else {"total": 0, "online": 0, "offline": 0, "alarm_stations": 0, "alarm_estates": [], "alarm_details": []}
    external_count = sum(len(x["items"]) for x in (eq, wt, pm, gs))
    return {
        "generated_at": now.isoformat(),
        "generated_at_text": now.strftime("%d/%m/%Y เวลา %H:%M น."),
        "scope_note": "เหตุการณ์ภายนอกเป็นข้อมูลเพื่อเฝ้าระวัง ยังไม่ถือว่านิคมได้รับผลกระทบจนกว่าจะมีการตรวจสอบยืนยัน",
        "summary": {
            "external_events": external_count,
            "sources_available": sum(1 for x in (em, eq, wt, pm, gs) if x["available"]),
            "sources_total": 5,
            "monitoring": monitoring,
        },
        "sources": [em, wt, eq, pm, gs],
    }


def metric(label: str, value: str, color: str) -> dict:
    return {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": color, "cornerRadius": "10px", "paddingAll": "10px", "contents": [
        {"type": "text", "text": value, "size": "xl", "weight": "bold", "color": "#165823", "align": "center"},
        {"type": "text", "text": label, "size": "xxs", "color": "#165823", "align": "center", "wrap": True},
    ]}


def build_flex(report: dict, test: bool = False) -> dict:
    sm = report["summary"]
    em = sm["monitoring"]
    estates = em.get("alarm_estates") or []
    estate_text = " • ".join(estates[:6]) + ((f" และอีก {len(estates)-6} นิคม") if len(estates) > 6 else "")
    unavailable = [x["name"] for x in report["sources"] if not x["available"]]
    contents = [
        {"type": "box", "layout": "horizontal", "spacing": "sm", "contents": [
            metric("เหตุ/ประกาศเฝ้าระวัง", str(sm["external_events"]), "#FFF2F2"),
            metric("สถานีเกินมาตรฐาน", str(em.get("alarm_stations", 0)), "#FFDADA"),
            metric("สถานี Offline", str(em.get("offline", 0)), "#FFF2F2"),
        ]},
        {"type": "text", "text": f"นิคมที่พบค่าเกินมาตรฐาน {len(estates)} แห่ง", "size": "sm", "weight": "bold", "color": "#165823", "margin": "lg"},
        {"type": "text", "text": estate_text or "ไม่พบ", "size": "xs", "color": "#333333", "wrap": True, "margin": "sm"},
        {"type": "separator", "margin": "lg", "color": "#FFDADA"},
        {"type": "text", "text": report["scope_note"], "size": "xxs", "color": "#666666", "wrap": True, "margin": "lg"},
    ]
    if unavailable:
        contents.append({"type": "text", "text": "ดึงข้อมูลไม่ได้: " + " • ".join(unavailable), "size": "xxs", "color": "#B42318", "wrap": True, "margin": "md"})
    return {"type": "flex", "altText": ("[ทดสอบ] " if test else "") + "สรุปสถานการณ์ภัยพิบัติและ e-Monitoring", "contents": {
        "type": "bubble", "size": "mega",
        "header": {"type": "box", "layout": "vertical", "backgroundColor": "#FFFFFF", "paddingAll": "16px", "contents": [
            {"type": "text", "text": "สรุปสถานการณ์ภัยพิบัติ", "size": "lg", "weight": "bold", "color": "#165823"},
            {"type": "text", "text": ("ข้อความทดสอบ • " if test else "") + report["generated_at_text"], "size": "xxs", "color": "#165823", "margin": "sm"},
        ]},
        "body": {"type": "box", "layout": "vertical", "backgroundColor": "#FFFFFF", "paddingAll": "14px", "contents": contents},
        "footer": {"type": "box", "layout": "vertical", "backgroundColor": "#FFFFFF", "paddingAll": "14px", "contents": [
            {"type": "button", "style": "primary", "height": "sm", "color": "#165823", "action": {"type": "uri", "label": "เปิดรายงานและดาวน์โหลด PNG", "uri": DASHBOARD_URL}}
        ]},
    }}


def push(token: str, target: str, message: dict) -> None:
    if not re.fullmatch(r"[UCR][0-9a-fA-F]{32}", target):
        raise ValueError("INTERNAL_LINE_TARGET_ID ไม่ถูกต้อง")
    payload = json.dumps({"to": target, "messages": [message]}, ensure_ascii=False).encode()
    req = urllib.request.Request(LINE_API, data=payload, method="POST", headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=30) as response:
            if response.status >= 300:
                raise RuntimeError(f"LINE API HTTP {response.status}")
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"LINE API HTTP {exc.code}: {exc.read().decode(errors='replace')}") from exc


def main() -> int:
    report = build_report()
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    if os.getenv("SEND_LINE", "false").lower() in ("1", "true", "yes"):
        token = os.getenv("INTERNAL_LINE_CHANNEL_ACCESS_TOKEN", "").strip()
        target = os.getenv("INTERNAL_LINE_TARGET_ID", "").strip()
        if not token or not target:
            raise RuntimeError("กรุณาตั้ง INTERNAL_LINE_CHANNEL_ACCESS_TOKEN และ INTERNAL_LINE_TARGET_ID")
        push(token, target, build_flex(report, os.getenv("TEST_MESSAGE", "false").lower() == "true"))
        print("ส่งสรุปเข้า LINE ส่วนตัวแล้ว")
    else:
        print("สร้างรายงานแล้ว (ไม่ได้ส่ง LINE)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
