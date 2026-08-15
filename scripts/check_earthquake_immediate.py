#!/usr/bin/env python3
"""Fetch TMD earthquake RSS and send a LINE alert immediately for new events."""

from __future__ import annotations

import os
import urllib.error
import urllib.request

import check_earthquake as base


def main() -> int:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    target = os.getenv("LINE_TARGET_ID", "").strip()
    if not token or not target:
        raise RuntimeError("LINE_CHANNEL_ACCESS_TOKEN และ LINE_TARGET_ID ต้องถูกตั้งค่าใน GitHub Secrets")

    # Manual test: send immediately without touching the earthquake state.
    if os.getenv("SEND_TEST_ALERT", "").lower() == "true":
        message_type = os.getenv("TEST_MESSAGE_TYPE", "text").strip().lower()
        message = base.text_test_message() if message_type == "text" else base.flex_message(base.test_event(), test=True)
        base.push_line(token, target, message)
        print(f"ส่งข้อความทดสอบ {message_type} เข้า LINE สำเร็จ")
        return 0

    # Fetch source data first. As soon as the RSS is parsed successfully,
    # a new qualifying event is pushed to LINE in the same job.
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

    # First run: send the current latest event immediately instead of silently skipping it.
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
            # IMPORTANT: LINE is called immediately after the source data is available.
            base.push_line(token, target, base.flex_message(event))
            sent += 1
            print(f"ส่ง LINE สำเร็จทันที: {event.get('title', '')}")
        else:
            print(f"พบเหตุการณ์ใหม่แต่ไม่เข้าเกณฑ์แจ้งเตือน: {event.get('title', '')}")
        processed_latest_id = event["id"]

    # Save state only after all processing/sends in this run succeed.
    base.save_state(processed_latest_id or latest_id)
    print(f"ดึงข้อมูลสำเร็จ {len(events)} รายการ | ใหม่ {len(new_events)} | ส่ง LINE {sent} รายการ")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
