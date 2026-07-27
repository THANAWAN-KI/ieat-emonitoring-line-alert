import json
import os
import sys
import urllib.error
import urllib.request


LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push"


def send_line_message(message: str) -> None:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN")
    target_id = os.getenv("LINE_TARGET_ID")

    if not token:
        raise ValueError("ไม่พบ LINE_CHANNEL_ACCESS_TOKEN")

    if not target_id:
        raise ValueError("ไม่พบ LINE_TARGET_ID")

    payload = {
        "to": target_id,
        "messages": [
            {
                "type": "text",
                "text": message,
            }
        ],
    }

    request = urllib.request.Request(
        LINE_PUSH_URL,
        data=json.dumps(
            payload,
            ensure_ascii=False,
        ).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=30,
        ) as response:
            print(f"ส่ง LINE สำเร็จ HTTP {response.status}")

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )

        print(f"ส่ง LINE ไม่สำเร็จ HTTP {error.code}")
        print(body)
        raise


def main():
    message = (
        "✅ ทดสอบระบบแจ้งเตือน e-Monitoring\n\n"
        "ระบบเชื่อมต่อ GitHub Actions กับ LINE สำเร็จ"
    )

    send_line_message(message)


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(f"เกิดข้อผิดพลาด: {error}")
        sys.exit(1)
