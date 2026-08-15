#!/usr/bin/env python3
"""Quota-saving e-Monitoring runner.

Keeps the existing check_emonitoring.py data parsing and Flex theme, but sends
ONE summary Flex message per detected run instead of summary + station-detail
carousels. The existing station detail remains available in the Dashboard.
"""

from __future__ import annotations

import json
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

    base.write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    previous_state = base.load_alert_state()
    events = base.detect_notification_events(previous_state, all_stations)

    print(f"สถานีทั้งหมด: {len(all_stations)}")
    print(f"สถานีที่มี Alarm: {len(alert_stations)}")
    print(f"เหตุการณ์ใหม่/เปลี่ยนแปลง: {len(events)}")

    if not events:
        base.save_alert_state(all_stations)
        print("LINE: ไม่ส่ง — ไม่มีการเปลี่ยนแปลง")
        print("โควตารอบนี้: 0 ข้อความ")
        return 0

    # ใช้ Bubble/Theme เดิมของระบบ ไม่สร้างดีไซน์ใหม่
    bubble = base.build_event_summary_bubble(events)
    message = base.make_flex_message(
        bubble,
        f"IEAT e-Monitoring: พบการเปลี่ยนแปลง {len(events)} เหตุการณ์",
    )

    size = base.json_size_bytes(message)
    if size > base.MAX_FLEX_BYTES:
        print(
            f"ERROR: Summary Flex มีขนาด {size / 1024:.1f} KB "
            f"เกิน {base.MAX_FLEX_BYTES / 1024:.0f} KB"
        )
        return 1

    print("LINE messages ที่จะส่ง: 1")
    print(f"Flex size: {size / 1024:.1f} KB")

    success = base.send_line_messages([message])
    if not success:
        print("ERROR: ส่ง LINE ไม่สำเร็จ — ยังไม่บันทึก state เพื่อให้ retry")
        return 1

    base.save_alert_state(all_stations)
    print("ส่ง LINE สำเร็จ: 1 ข้อความ")
    print("บันทึก alert_state.json แล้ว")
    print("Dashboard อัปเดตแล้ว")
    return 0


if __name__ == "__main__":
    sys.exit(main())
