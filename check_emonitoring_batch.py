#!/usr/bin/env python3
"""Quota-saving e-Monitoring runner.

Keeps the existing check_emonitoring.py data parsing and Flex theme, but sends
ONE summary Flex message per detected run instead of summary + station-detail
carousels. The existing station detail remains available in the Dashboard.
"""

from __future__ import annotations

import os
import sys

import check_emonitoring as base


def build_preview_events() -> list[dict]:
    """ข้อมูลสมมติสำหรับดูรูปแบบ Flex Card เท่านั้น"""
    update_text = base.report_time_text()
    samples = [
        (
            "สายปฏิบัติการ 1",
            "สถานีทดสอบ A",
            "นิคมอุตสาหกรรมตัวอย่าง 1",
            "PM2.5 = 45 µg/m³ (ค่าตัวอย่าง)",
        ),
        (
            "สายปฏิบัติการ 2",
            "สถานีทดสอบ B",
            "นิคมอุตสาหกรรมตัวอย่าง 2",
            "COD = 135 mg/L (ค่าตัวอย่าง)",
        ),
        (
            "สายปฏิบัติการ 3",
            "สถานีทดสอบ C",
            "นิคมอุตสาหกรรมตัวอย่าง 3",
            "NOx = 210 ppm (ค่าตัวอย่าง)",
        ),
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
        for index, (
            zone,
            station_name,
            estate_name,
            parameter,
        ) in enumerate(samples, start=1)
    ]


def main() -> int:
    current_time = base.now_thailand()
    preview_mode = os.getenv(
        "LINE_PREVIEW_MODE",
        "",
    ).strip().lower() in {
        "1",
        "true",
        "yes",
        "on",
    }

    if preview_mode:
        print(
            "PREVIEW MODE: ส่งข้อมูลสมมติ 3 Zone "
            "โดยไม่ดาวน์โหลดข้อมูลจริงและไม่บันทึก state"
        )
        success = base.send_zone_event_reports(
            build_preview_events()
        )
        if not success:
            print("ERROR: ส่ง Flex Preview ไม่สำเร็จ")
            return 1
        print(
            "ส่ง Flex Preview สำเร็จ — "
            "ไม่กระทบระบบอัตโนมัติ"
        )
        return 0

    # วันจันทร์=0 ... วันเสาร์=5 วันอาทิตย์=6
    if current_time.weekday() >= 5:
        print(
            "วันเสาร์–อาทิตย์ — "
            "ไม่ดาวน์โหลดข้อมูล ไม่ส่ง LINE และไม่บันทึก state"
        )
        return 0

    current_minutes = current_time.hour * 60 + current_time.minute
    if not 8 * 60 + 30 <= current_minutes <= 16 * 60 + 59:
        print("อยู่นอกช่วงเวลา 08:30-16:59 น. — ไม่ส่ง LINE")
        return 0

    # รอบเวลา 16:30 (เผื่อ GitHub Actions เริ่มช้า) เป็นรายงานประจำวัน
    daily_summary_mode = current_time.hour == 16

    print("=" * 72)
    print("IEAT e-Monitoring LINE Alert - Quota Saver")
    print("ส่ง 1 Flex summary ต่อรอบที่มีการเปลี่ยนแปลง")
    print("=" * 72)

    try:
        payload = base.download_station_data()
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return 1

    features = base.get_features(payload)
    all_stations = base.prepare_stations(features)
    alert_stations = base.filter_alert_features(features)
    type_stats = base.calculate_type_stats(all_stations)

    # ใช้เฉพาะข้อมูลที่ LastUpdate เป็นวันปัจจุบันสำหรับ LINE
    # Dashboard ยังคงแสดงข้อมูลทั้งหมดเพื่อให้ตรวจสอบข้อมูลล่าช้าได้
    notification_stations = base.filter_stations_updated_today(
        all_stations
    )
    notification_alert_stations = [
        station
        for station in notification_stations
        if base.full_text(
            station.get("parameter_alarm"),
            "",
        ).strip()
    ]
    notification_type_stats = base.calculate_type_stats(
        notification_stations
    )

    base.write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    previous_state = base.load_alert_state()
    detected_events = base.detect_notification_events(
        previous_state,
        all_stations,
    )
    # Alarm ต้องเป็นข้อมูลวันปัจจุบันเท่านั้น
    # แต่สถานี OFFLINE จำเป็นต้องใช้เวลาข้อมูลล่าสุดที่ค้างอยู่
    events = [
        event
        for event in detected_events
        if (
            event.get("event_type") in {"OFFLINE", "ONLINE"}
            or base.station_updated_today(event)
        )
    ]

    print(f"สถานีทั้งหมด: {len(all_stations)}")
    print(f"สถานีข้อมูลวันที่ปัจจุบัน: {len(notification_stations)}")
    print(
        "สถานีข้อมูลวันที่ปัจจุบันที่มี Alarm: "
        f"{len(notification_alert_stations)}"
    )
    print(
        "สถานี Alarm ที่ถูกตัดออกเพราะข้อมูลไม่ใช่วันนี้: "
        f"{len(alert_stations) - len(notification_alert_stations)}"
    )
    print(f"เหตุการณ์ใหม่/เปลี่ยนแปลง: {len(events)}")
    print(
        "เกณฑ์แจ้งสถานี OFFLINE ต่อเนื่อง: "
        f"{base.offline_threshold_minutes()} นาที"
    )

    if daily_summary_mode:
        if base.daily_summary_sent_today():
            base.save_alert_state(all_stations)
            print("LINE: ไม่ส่ง — รายงานประจำวันนี้ถูกส่งแล้ว")
            print("โควตารอบนี้: 0 ข้อความ")
            return 0

        if not base.zone_routing_enabled():
            print(
                "ERROR: LINE Zone routing ยังไม่เปิดใช้งาน "
                "และ Broadcast ถูกปิด"
            )
            return 1

        print(
            "รอบรายงานประจำวัน: ส่ง 1 Flex Message ต่อ Zone "
            "แม้ไม่มีข้อมูลใหม่"
        )
        try:
            success = base.send_zone_daily_summaries(
                all_stations
            )
        except RuntimeError as error:
            print(f"ERROR: {error}")
            return 1

        if not success:
            print(
                "ERROR: ส่งรายงานประจำวันไม่สำเร็จ — "
                "ยังไม่บันทึกสถานะเพื่อให้ retry"
            )
            return 1

        base.save_alert_state(all_stations)
        base.mark_daily_summary_sent()
        print("ส่งรายงานประจำวันครบทุก Zone แล้ว")
        print("บันทึกสถานะป้องกันการส่งรายงานซ้ำแล้ว")
        print("Dashboard อัปเดตแล้ว")
        return 0

    if not events:
        base.save_alert_state(all_stations)
        print("LINE: ไม่ส่ง — ไม่มีการเปลี่ยนแปลงจากข้อมูลวันที่ปัจจุบัน")
        print("โควตารอบนี้: 0 ข้อความ")
        return 0

    try:
        if base.zone_routing_enabled():
            print("LINE routing: แยกส่งตามสายปฏิบัติการ")
            success = base.send_zone_event_reports(events)
        else:
            print(
                "ERROR: LINE Zone routing ยังไม่เปิดใช้งาน "
                "และ Broadcast ถูกปิดเพื่อป้องกันการส่งข้าม Zone"
            )
            success = False
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return 1
    if not success:
        print("ERROR: ส่ง LINE ไม่สำเร็จ — ยังไม่บันทึก state เพื่อให้ retry")
        return 1

    base.save_alert_state(all_stations)
    print("ส่ง LINE สำเร็จตามข้อมูลวันที่ปัจจุบัน")
    print("บันทึก alert_state.json แล้ว")
    print("Dashboard อัปเดตแล้ว")
    return 0


if __name__ == "__main__":
    sys.exit(main())
