#!/usr/bin/env python3
"""Quota-saving e-Monitoring runner.

Keeps the existing check_emonitoring.py data parsing and Flex theme, but sends
ONE summary Flex message per detected run instead of summary + station-detail
carousels. The existing station detail remains available in the Dashboard.
"""

from __future__ import annotations

import sys

import check_emonitoring as base


def main() -> int:
    current_time = base.now_thailand()
    current_minutes = current_time.hour * 60 + current_time.minute
    if not 8 * 60 + 30 <= current_minutes <= 16 * 60 + 30:
        print("อยู่นอกช่วงเวลา 08:30-16:30 น. — ไม่ส่ง LINE")
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
    events = base.detect_notification_events(
        previous_state,
        notification_stations,
    )

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

    if not events:
        base.save_alert_state(notification_stations)
        print("LINE: ไม่ส่ง — ไม่มีการเปลี่ยนแปลงจากข้อมูลวันที่ปัจจุบัน")
        print("โควตารอบนี้: 0 ข้อความ")
        return 0

    try:
        if base.zone_routing_enabled():
            print("LINE routing: แยกส่งตามสายปฏิบัติการ")
            success = base.send_zone_event_reports(events)
        else:
            print("LINE routing: ใช้ Broadcast เดิม")
            success = base.send_station_status_report(
                notification_stations,
                notification_type_stats,
                notification_alert_stations,
                events,
            )
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return 1
    if not success:
        print("ERROR: ส่ง LINE ไม่สำเร็จ — ยังไม่บันทึก state เพื่อให้ retry")
        return 1

    base.save_alert_state(notification_stations)
    print("ส่ง LINE สำเร็จตามข้อมูลวันที่ปัจจุบัน")
    print("บันทึก alert_state.json แล้ว")
    print("Dashboard อัปเดตแล้ว")
    return 0


if __name__ == "__main__":
    sys.exit(main())
