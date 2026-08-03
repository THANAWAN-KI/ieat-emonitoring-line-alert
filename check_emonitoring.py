import json
import os
import sys
from datetime import datetime

import requests


# ============================================================
# CONFIG
# ============================================================

# ข้อมูล e-Monitoring ต้นทาง
DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

# LINE Messaging API
LINE_API_URL = "https://api.line.me/v2/bot/message/push"

# GitHub Secrets
LINE_CHANNEL_ACCESS_TOKEN = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "")
LINE_TARGET_ID = os.getenv("LINE_TARGET_ID", "")

# ไฟล์สำหรับจำว่าเคยส่ง Alert อะไรไปแล้ว
STATE_FILE = "alert_state.json"

# Timeout สำหรับการโหลดข้อมูล
REQUEST_TIMEOUT = 60


# ============================================================
# UTILITY
# ============================================================

def clean_text(value):
    """
    ทำความสะอาดข้อความ

    ค่าเหล่านี้ถือว่าไม่มีข้อมูล:
    None
    ""
    "-"
    "null"
    "none"
    "n/a"
    "na"
    """

    if value is None:
        return ""

    text = str(value).strip()

    if text.lower() in {
        "",
        "-",
        "null",
        "none",
        "n/a",
        "na",
    }:
        return ""

    return text


def is_online(value):
    """
    ตรวจว่า Status เป็น ONLINE หรือไม่

    รองรับ:
    ONLINE
    Online
    online
    """

    status = clean_text(value).upper()

    return status == "ONLINE"


def has_parameter_alarm(value):
    """
    ตรวจว่า ParameterAlram มีข้อมูลจริงหรือไม่
    """

    return bool(clean_text(value))


# ============================================================
# DOWNLOAD e-MONITORING
# ============================================================

def download_emonitoring():
    """
    ดาวน์โหลดข้อมูล e-Monitoring สดทุกครั้งที่ Workflow ทำงาน
    """

    print("=" * 70)
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring")
    print("=" * 70)

    try:
        response = requests.get(
            DATA_URL,
            timeout=REQUEST_TIMEOUT,
            headers={
                "User-Agent": "IEAT-eMonitoring-LINE-Alert/1.0",
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
            },
            params={
                "_t": int(datetime.now().timestamp())
            },
        )

        response.raise_for_status()

    except requests.RequestException as exc:
        print("ERROR: ไม่สามารถดาวน์โหลดข้อมูล e-Monitoring")
        print(exc)
        sys.exit(1)

    try:
        data = response.json()

    except ValueError:
        print("ERROR: ข้อมูลที่ได้รับไม่ใช่ JSON")
        print("HTTP Status:", response.status_code)
        print("Content-Type:", response.headers.get("Content-Type"))
        sys.exit(1)

    print("ดาวน์โหลดข้อมูลสำเร็จ")
    print("HTTP Status:", response.status_code)

    return data


# ============================================================
# GET FEATURES
# ============================================================

def get_features(data):
    """
    รองรับข้อมูล GeoJSON ที่มีโครงสร้าง:

    {
        "type": "FeatureCollection",
        "features": [...]
    }
    """

    if not isinstance(data, dict):
        print("ERROR: รูปแบบข้อมูลไม่ถูกต้อง")
        return []

    features = data.get("features", [])

    if not isinstance(features, list):
        print("ERROR: ไม่พบ features ในข้อมูล")
        return []

    return features


# ============================================================
# FILTER
# ============================================================

def filter_alert_features(features):
    """
    เงื่อนไขหลักของระบบ

    ส่ง LINE เฉพาะ:

    1. Status = ONLINE
    2. ParameterAlram มีข้อมูลจริง

    ไม่ส่ง:
    OFFLINE
    null
    None
    ""
    "-"
    """

    result = []

    online_count = 0
    alarm_count = 0

    for feature in features:

        if not isinstance(feature, dict):
            continue

        properties = feature.get("properties", {})

        if not isinstance(properties, dict):
            continue

        status = properties.get("Status")
        parameter_alarm = properties.get("ParameterAlram")

        # ----------------------------
        # ตรวจ ONLINE
        # ----------------------------

        if not is_online(status):
            continue

        online_count += 1

        # ----------------------------
        # ตรวจ ParameterAlram
        # ----------------------------

        if not has_parameter_alarm(parameter_alarm):
            continue

        alarm_count += 1

        result.append(feature)

    print()
    print("ผลการกรองข้อมูล")
    print("-" * 70)

    print(f"สถานะ ONLINE               : {online_count}")
    print(f"ONLINE + ParameterAlram    : {alarm_count}")
    print(f"เตรียมตรวจเพื่อส่ง LINE     : {len(result)}")

    return result


# ============================================================
# ALERT KEY
# ============================================================

def create_alert_key(properties):
    """
    สร้าง Key สำหรับตรวจว่า Alert นี้เคยส่งหรือยัง

    ใช้:
    Code
    StationTH
    ParameterAlram

    ถ้า ParameterAlram เปลี่ยน
    จะถือว่าเป็น Alert ใหม่
    """

    code = clean_text(
        properties.get("Code")
    )

    station = clean_text(
        properties.get("StationTH")
    )

    parameter_alarm = clean_text(
        properties.get("ParameterAlram")
    )

    return f"{code}|{station}|{parameter_alarm}"


# ============================================================
# STATE
# ============================================================

def load_state():
    """
    โหลดรายการ Alert ที่เคยส่งแล้ว
    """

    if not os.path.exists(STATE_FILE):
        print("ยังไม่มี alert_state.json")
        return {}

    try:

        with open(
            STATE_FILE,
            "r",
            encoding="utf-8",
        ) as file:

            state = json.load(file)

        if not isinstance(state, dict):
            return {}

        print(
            f"โหลด Alert เดิมแล้ว: "
            f"{len(state)} รายการ"
        )

        return state

    except Exception as exc:

        print(
            "WARNING: อ่าน alert_state.json ไม่สำเร็จ"
        )

        print(exc)

        return {}


def save_state(state):
    """
    บันทึกรายการ Alert ล่าสุด
    """

    with open(
        STATE_FILE,
        "w",
        encoding="utf-8",
    ) as file:

        json.dump(
            state,
            file,
            ensure_ascii=False,
            indent=2,
        )

    print()
    print("บันทึก alert_state.json แล้ว")


# ============================================================
# BUILD LINE MESSAGE
# ============================================================

def build_alert_message(properties):
    """
    สร้างข้อความ LINE

    แสดงเฉพาะ field ที่มีข้อมูล
    """

    station = clean_text(
        properties.get("StationTH")
    )

    industry_zone = clean_text(
        properties.get("IndustryZone")
    )

    zone = clean_text(
        properties.get("Zone")
    )

    code = clean_text(
        properties.get("Code")
    )

    last_update = clean_text(
        properties.get("LastUpdate-TH")
    )

    if not last_update:
        last_update = clean_text(
            properties.get("LastUpdate")
        )

    parameter_alarm = clean_text(
        properties.get("ParameterAlram")
    )

    lines = []

    lines.append("⚠️ แจ้งเตือน e-Monitoring")
    lines.append("")

    # -------------------------
    # ชื่อสถานี
    # -------------------------

    if station:
        lines.append(
            f"สถานี: {station}"
        )

    # -------------------------
    # Code
    # -------------------------

    if code and code != "0":
        lines.append(
            f"รหัสสถานี: {code}"
        )

    # -------------------------
    # นิคม
    # -------------------------

    if industry_zone:
        lines.append(
            f"นิคมอุตสาหกรรม: {industry_zone}"
        )

    # -------------------------
    # Zone
    # -------------------------

    if zone:
        lines.append(
            f"พื้นที่รับผิดชอบ: {zone}"
        )

    # -------------------------
    # Status
    # -------------------------

    lines.append(
        "สถานะ: ONLINE"
    )

    # -------------------------
    # Last Update
    # -------------------------

    if last_update:

        lines.append(
            f"ข้อมูลล่าสุด: {last_update}"
        )

    # -------------------------
    # Parameter Alarm
    # -------------------------

    lines.append("")
    lines.append(
        "🚨 พารามิเตอร์ที่แจ้งเตือน"
    )

    lines.append(
        parameter_alarm
    )

    return "\n".join(lines)


# ============================================================
# SEND LINE
# ============================================================

def send_line_message(message):
    """
    ส่งข้อความด้วย LINE Messaging API
    """

    if not LINE_CHANNEL_ACCESS_TOKEN:
        raise RuntimeError(
            "ไม่พบ LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not LINE_TARGET_ID:
        raise RuntimeError(
            "ไม่พบ LINE_TARGET_ID"
        )

    headers = {
        "Authorization":
            f"Bearer {LINE_CHANNEL_ACCESS_TOKEN}",

        "Content-Type":
            "application/json",
    }

    payload = {
        "to": LINE_TARGET_ID,

        "messages": [
            {
                "type": "text",
                "text": message,
            }
        ],
    }

    response = requests.post(
        LINE_API_URL,
        headers=headers,
        json=payload,
        timeout=REQUEST_TIMEOUT,
    )

    if not response.ok:

        print()
        print("LINE API ERROR")
        print("Status:", response.status_code)
        print("Response:", response.text)

        response.raise_for_status()

    return True


# ============================================================
# MAIN
# ============================================================

def main():

    print()
    print("=" * 70)
    print("IEAT e-Monitoring LINE Alert")
    print("=" * 70)

    print(
        "เงื่อนไข: Status = ONLINE "
        "และ ParameterAlram มีข้อมูล"
    )

    print(
        "เวลาเริ่ม:",
        datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        ),
    )

    # ========================================================
    # 1. DOWNLOAD
    # ========================================================

    data = download_emonitoring()

    # ========================================================
    # 2. GET FEATURES
    # ========================================================

    features = get_features(data)

    print()
    print(
        f"จำนวน Feature ทั้งหมด: "
        f"{len(features)}"
    )

    if not features:

        print(
            "ไม่พบข้อมูลสถานี"
        )

        return

    # ========================================================
    # 3. FILTER
    # ========================================================

    alert_features = filter_alert_features(
        features
    )

    # ========================================================
    # 4. LOAD OLD STATE
    # ========================================================

    old_state = load_state()

    # State รอบใหม่
    #
    # เก็บเฉพาะ Alert ที่ยังอยู่ในข้อมูลปัจจุบัน
    # เพื่อให้ถ้า Alarm หายไป แล้วเกิดใหม่ในอนาคต
    # สามารถแจ้งเตือนได้อีกครั้ง

    current_state = {}

    # ========================================================
    # 5. NO ALERT
    # ========================================================

    if not alert_features:

        print()
        print("=" * 70)

        print(
            "ไม่พบสถานี ONLINE "
            "ที่มี ParameterAlram"
        )

        print("=" * 70)

        # ล้าง state เมื่อไม่มี Alarm เหลืออยู่
        save_state(current_state)

        return

    # ========================================================
    # 6. CHECK EACH ALERT
    # ========================================================

    sent_count = 0
    duplicate_count = 0
    error_count = 0

    print()
    print("=" * 70)
    print("ตรวจสอบ Alert")
    print("=" * 70)

    for feature in alert_features:

        properties = feature.get(
            "properties",
            {},
        )

        station = clean_text(
            properties.get("StationTH")
        )

        parameter_alarm = clean_text(
            properties.get("ParameterAlram")
        )

        alert_key = create_alert_key(
            properties
        )

        # บันทึกว่า Alarm นี้ยัง active อยู่
        current_state[alert_key] = {
            "station": station,
            "parameter_alarm": parameter_alarm,
            "last_seen": datetime.now().isoformat(
                timespec="seconds"
            ),
        }

        # ====================================================
        # เคยส่งแล้ว
        # ====================================================

        if alert_key in old_state:

            duplicate_count += 1

            print()
            print(
                f"SKIP: {station or 'ไม่ระบุสถานี'}"
            )

            print(
                "เหตุผล: Alert นี้เคยส่งแล้ว"
            )

            print(
                f"ParameterAlram: "
                f"{parameter_alarm}"
            )

            continue

        # ====================================================
        # Alert ใหม่
        # ====================================================

        message = build_alert_message(
            properties
        )

        print()
        print("-" * 70)

        print(
            f"NEW ALERT: "
            f"{station or 'ไม่ระบุสถานี'}"
        )

        print(
            f"ParameterAlram: "
            f"{parameter_alarm}"
        )

        # ====================================================
        # SEND
        # ====================================================

        try:

            send_line_message(message)

            sent_count += 1

            print(
                "ส่ง LINE สำเร็จ"
            )

        except Exception as exc:

            error_count += 1

            print(
                "ERROR: ส่ง LINE ไม่สำเร็จ"
            )

            print(exc)

            # ถ้าส่งไม่สำเร็จ
            # ต้องเอาออกจาก state
            # เพื่อให้รอบหน้าได้ลองส่งใหม่

            current_state.pop(
                alert_key,
                None,
            )

    # ========================================================
    # 7. SAVE STATE
    # ========================================================

    save_state(current_state)

    # ========================================================
    # 8. SUMMARY
    # ========================================================

    print()
    print("=" * 70)
    print("สรุปผล")
    print("=" * 70)

    print(
        f"Feature ทั้งหมด       : "
        f"{len(features)}"
    )

    print(
        f"เข้าเงื่อนไข Alert     : "
        f"{len(alert_features)}"
    )

    print(
        f"ส่ง LINE ใหม่          : "
        f"{sent_count}"
    )

    print(
        f"ข้อมูลเดิมไม่ส่งซ้ำ     : "
        f"{duplicate_count}"
    )

    print(
        f"ส่งไม่สำเร็จ           : "
        f"{error_count}"
    )

    print("=" * 70)

    # ถ้าส่ง LINE ไม่สำเร็จ
    # ให้ GitHub Actions ขึ้น Failed

    if error_count > 0:

        print(
            "ERROR: มี Alert ที่ส่ง LINE ไม่สำเร็จ"
        )

        sys.exit(1)

    print(
        "ทำงานเสร็จสมบูรณ์"
    )


# ============================================================
# RUN
# ============================================================

if __name__ == "__main__":
    main()
