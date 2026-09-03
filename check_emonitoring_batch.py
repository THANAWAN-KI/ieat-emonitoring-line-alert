#!/usr/bin/env python3
"""IEAT e-Monitoring scheduled LINE sender.

Simple policy:
- Mon-Fri 08:30-15:30: fetch latest source data and send to all 3 operation groups.
- 16:30: fetch latest source data and send daily summary to all 3 operation groups.
- No previous-slot/state suppression. A scheduled run means fetch and send.
"""

from __future__ import annotations

import os
import sys

import check_emonitoring as base


def build_preview_events() -> list[dict]:
    update_text = base.report_time_text()
    samples = [
        ("สายปฏิบัติการ 1", "สถานีทดสอบ A", "นิคมอุตสาหกรรมตัวอย่าง 1", "PM2.5 = 45 µg/m³ (ค่าตัวอย่าง)"),
        ("สายปฏิบัติการ 2", "สถานีทดสอบ B", "นิคมอุตสาหกรรมตัวอย่าง 2", "COD = 135 mg/L (ค่าตัวอย่าง)"),
        ("สายปฏิบัติการ 3", "สถานีทดสอบ C", "นิคมอุตสาหกรรมตัวอย่าง 3", "NOx = 210 ppm (ค่าตัวอย่าง)"),
    ]
    return [
        {
            "code": f"DEMO-{index:02d}",
            "station_name": station_name,
            "estate_name": estate_name,
            "zone": zone,
            "station_type": "DEMO",
            "status": "ONLINE",
            "last_update": update_text,
            "parameter_alarm": parameter,
            "comment": "ข้อมูลสมมติสำหรับทดสอบรูปแบบเท่านั้น",
            "longitude": None,
            "latitude": None,
            "event_type": "NEW_ALARM",
            "event_reason": "ตัวอย่างรูปแบบการแจ้งเตือน",
            "previous_snapshot": {},
        }
        for index, (zone, station_name, estate_name, parameter) in enumerate(samples, start=1)
    ]


def build_hourly_alarm_events(alert_stations: list[dict]) -> list[dict]:
    return [
        {
            **station,
            "event_type": "CURRENT_ALARM",
            "event_reason": "ค่าพารามิเตอร์ที่ต้องติดตามประจำชั่วโมง",
            "previous_snapshot": {},
        }
        for station in alert_stations
    ]


def main() -> int:
    current_time = base.now_thailand()
    run_mode = os.getenv("EMONITORING_RUN_MODE", "").strip().lower()
    preview_mode = os.getenv("LINE_PREVIEW_MODE", "").strip().lower() in {"1", "true", "yes", "on"}

    if preview_mode:
        success = base.send_zone_event_reports(build_preview_events())
        return 0 if success else 1

    if current_time.weekday() >= 5:
        print("วันเสาร์-อาทิตย์ — ไม่ส่ง LINE")
        return 0

    daily_summary_mode = run_mode == "daily_summary"

    # สำคัญ: เมื่อ workflow เรียกรอบที่กำหนด ให้ดึงข้อมูลใหม่ทุกครั้งแล้วส่งทันที
    print("ถึงรอบแจ้งเตือน — กำลังเรียกข้อมูล e-Monitoring ล่าสุด")
    try:
        payload = base.download_station_data()
    except RuntimeError as error:
        print(f"ERROR: เรียกข้อมูลไม่สำเร็จ: {error}")
        return 1

    features = base.get_features(payload)
    all_stations = base.prepare_stations(features)
    alert_stations = base.filter_alert_features(features)
    type_stats = base.calculate_type_stats(all_stations)

    base.write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    if not base.zone_routing_enabled():
        print("ERROR: LINE Zone routing ยังไม่เปิดใช้งาน")
        return 1

    if daily_summary_mode:
        print("16:30 — ส่งรายงานสรุปประจำวันให้ทั้ง 3 สายปฏิบัติการทันที")
        try:
            success = base.send_zone_daily_summaries(all_stations)
        except RuntimeError as error:
            print(f"ERROR: {error}")
            return 1
        if not success:
            print("ERROR: ส่งรายงานสรุปไม่ครบทั้ง 3 กลุ่ม")
            return 1
        base.save_alert_state(all_stations)
        print("ส่งรายงานสรุปครบทั้ง 3 กลุ่มสำเร็จ")
        return 0

    events = build_hourly_alarm_events(alert_stations)
    print(f"ข้อมูลทั้งหมด {len(all_stations)} สถานี | Alarm {len(alert_stations)} สถานี")
    print("ส่งรายงานประจำชั่วโมงให้ทั้ง 3 สายปฏิบัติการทันที")
    try:
        success = base.send_all_zone_hourly_reports(all_stations, events)
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return 1

    if not success:
        print("ERROR: ส่งรายงานรายชั่วโมงไม่ครบทั้ง 3 กลุ่ม")
        return 1

    base.save_alert_state(all_stations)
    print("ส่งรายงานประจำชั่วโมงครบทั้ง 3 กลุ่มสำเร็จ")
    return 0


if __name__ == "__main__":
    sys.exit(main())
