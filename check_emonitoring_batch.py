#!/usr/bin/env python3
"""Quota-saving e-Monitoring runner.

Keeps the existing check_emonitoring.py data parsing and Flex theme, but sends
ONE summary Flex message per detected run instead of summary + station-detail
carousels. The existing station detail remains available in the Dashboard.
"""

from __future__ import annotations

import os
import sys
from datetime import timedelta

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


def build_hourly_alarm_events(
    alert_stations: list[dict],
) -> list[dict]:
    """สร้างเหตุการณ์จากค่าที่มี Alarm ทั้งหมด เพื่อแจ้งซ้ำทุกชั่วโมง"""
    return [
        {
            **station,
            "event_type": "CURRENT_ALARM",
            "event_reason": "ค่าพารามิเตอร์ที่ต้องติดตามประจำชั่วโมง",
            "previous_snapshot": {},
        }
        for station in alert_stations
    ]


def hourly_slot_start(current_time):
    """รอบรายชั่วโมงล่าสุด (08:30, 09:30, ... 15:30)"""
    slot = current_time.replace(minute=30, second=0, microsecond=0)
    if current_time.minute < 30:
        slot -= timedelta(hours=1)
    return slot


def hourly_slot_already_sent(current_time) -> bool:
    """กันการส่งซ้ำ เมื่อ cron สำรอง :40 ทำงานหลังรอบหลัก :30"""
    updated_at = base.load_alert_state().get("updated_at")
    if not updated_at:
        return False
    try:
        last_sent = base.datetime.fromisoformat(updated_at)
        if last_sent.tzinfo is None:
            last_sent = last_sent.replace(tzinfo=base.THAI_TZ)
        last_sent = last_sent.astimezone(base.THAI_TZ)
    except (TypeError, ValueError):
        return False

    slot = hourly_slot_start(current_time)
    return slot <= last_sent < slot + timedelta(hours=1)


def main() -> int:
    current_time = base.now_thailand()
    run_mode = os.getenv(
        "EMONITORING_RUN_MODE",
        "",
    ).strip().lower()
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

    # GitHub Workflow ระบุโหมดจากรอบ cron โดยตรง จึงไม่คลาดเคลื่อน
    # แม้ GitHub Actions จะเริ่มทำงานช้ากว่าเวลาที่กำหนด
    daily_summary_mode = (
        run_mode == "daily_summary"
        or (
            not run_mode
            and current_minutes >= 16 * 60 + 30
        )
    )

    if (
        not daily_summary_mode
        and not 8 * 60 + 30 <= current_minutes <= 16 * 60 + 30
    ):
        print("อยู่นอกช่วงเวลาแจ้งเตือน 08:30-16:30 น. — ไม่ส่ง LINE")
        return 0

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

    # ใช้ข้อมูลทั้งหมดในการแจ้งเตือน แม้ LastUpdate ยังไม่ใช่วันปัจจุบัน
    # เนื่องจากแหล่งข้อมูลต้นทางอาจยังไม่ได้รับการอัปเดต
    notification_stations = all_stations
    notification_alert_stations = alert_stations

    base.write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    # แจ้งค่าที่มี Alarm ทั้งหมดซ้ำทุก 1 ชั่วโมง
    # ไม่รอให้ค่าเปลี่ยน และไม่กรองทิ้งเมื่อข้อมูลต้นทางล่าช้า
    events = build_hourly_alarm_events(
        notification_alert_stations
    )

    print(f"สถานีทั้งหมด: {len(all_stations)}")
    print(f"สถานีที่ใช้แจ้งเตือนทั้งหมด: {len(notification_stations)}")
    print(
        "สถานีที่มี Alarm สำหรับแจ้งเตือนรอบนี้: "
        f"{len(notification_alert_stations)}"
    )
    print("ใช้ข้อมูลทั้งหมด แม้วันที่ข้อมูลต้นทางยังไม่เป็นปัจจุบัน")
    print(f"รายการแจ้งเตือนประจำชั่วโมง: {len(events)}")
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

    if hourly_slot_already_sent(current_time):
        print("LINE: ไม่ส่งซ้ำ — รอบรายชั่วโมงนี้ส่งสำเร็จแล้ว")
        print("โควตารอบนี้: 0 ข้อความ")
        return 0

    if not events:
        # แม้ไม่มี Alarm ก็ต้องส่งสรุป Online/Offline ทุกชั่วโมง
        print("ไม่พบ Alarm — ส่งสรุปสถานะ Online/Offline ประจำชั่วโมง")
        try:
            success = base.send_zone_daily_summaries(all_stations)
        except RuntimeError as error:
            print(f"ERROR: {error}")
            return 1
        if not success:
            print("ERROR: ส่งสรุปรายชั่วโมงไม่สำเร็จ")
            return 1
        base.save_alert_state(all_stations)
        print("ส่ง LINE สรุปสถานะประจำชั่วโมงสำเร็จ")
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
    print("ส่ง LINE แจ้งค่าพารามิเตอร์ประจำชั่วโมงสำเร็จ")
    print("บันทึก alert_state.json แล้ว")
    print("Dashboard อัปเดตแล้ว")
    return 0


if __name__ == "__main__":
    sys.exit(main())
