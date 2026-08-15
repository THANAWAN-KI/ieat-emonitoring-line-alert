#!/usr/bin/env python3
"""Fetch TMD earthquake RSS and send a LINE alert immediately for new events."""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.request
from pathlib import Path

import check_earthquake as base


def main() -> int:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    target = os.getenv("LINE_TARGET_ID", "").strip()
    if not token or not target:
        raise RuntimeError("LINE_CHANNEL_ACCESS_TOKEN และ LINE_TARGET_ID ต้องถูกตั้งค่าใน GitHub Secrets")

    request = urllib.request.Request(
        base.RSS_URL,
        headers={"User-Agent": "IEAT-eMonitoring/2.0"},
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            raw = response.read()
    except urllib.error.URLError as error:
        raise RuntimeError(f"ไม่สามารถดึงข้อมูล TMD ได้: {error}") from error

    events = base.parse_feed(raw)
    if not events:
        print("TMD RSS ไม่พบข้อมูลเหตุการณ์")
        return 0

    state = base.load_state()
    previous_id = state.get("last_seen_id")
    latest_id = events[0]["id"]

    # ครั้งแรก: ส่งเหตุการณ์ล่าสุดทันที เพื่อไม่ให้เหตุการณ์ปัจจุบันถูกข้าม
    if not previous_id:
        new_events = [events[0]]
    else:
        new_events = []
        for event in events:
            if event["id"] == previous_id:
                break
            new_events.append(event)
        new_events.reverse()

    if not new_events:
        print("ดึงข้อมูลสำเร็จ: ไม่มีเหตุการณ์ใหม่ จึงไม่ส่ง LINE")
        return 0

    sent = 0
    processed_latest_id = previous_id

    for event in new_events:
        if base.qualifies(event):
            # ส่งทันทีหลังจากอ่านข้อมูลจาก TMD ได้แล้ว
            base.push_line(token, target, base.flex_message(event))
            sent += 1
            print(f"ส่ง LINE สำเร็จทันที: {event.get('title', '')}")
        else:
            print(f"พบเหตุการณ์ใหม่แต่ไม่เข้าเกณฑ์แจ้งเตือน: {event.get('title', '')}")
        processed_latest_id = event["id"]

    # บันทึก state เฉพาะหลังจากการประมวลผลสำเร็จ
    base.save_state(processed_latest_id or latest_id)
    print(f"ดึงข้อมูลสำเร็จ {len(events)} รายการ | ใหม่ {len(new_events)} | ส่ง LINE {sent} รายการ")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
