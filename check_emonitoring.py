import json
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

import requests


# ============================================================
# การตั้งค่าระบบ
# ============================================================

DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

LINE_API_URL = "https://api.line.me/v2/bot/message/push"

LINE_CHANNEL_ACCESS_TOKEN = os.getenv(
    "LINE_CHANNEL_ACCESS_TOKEN",
    "",
).strip()

LINE_TARGET_ID = os.getenv(
    "LINE_TARGET_ID",
    "",
).strip()

STATE_FILE = Path("alert_state.json")

REQUEST_TIMEOUT_SECONDS = 60

THAILAND_TIMEZONE = ZoneInfo("Asia/Bangkok")


# ============================================================
# ฟังก์ชันพื้นฐาน
# ============================================================

def thailand_now():
    """
    คืนค่าเวลาปัจจุบันตามเขตเวลาไทย
    """
    return datetime.now(THAILAND_TIMEZONE)


def clean_text(value):
    """
    ทำความสะอาดข้อความ

    ค่าเหล่านี้ถือว่าไม่มีข้อมูล:
    None
    ""
    ช่องว่าง
    "-"
    null
    none
    n/a
    na
    undefined
    """

    if value is None:
        return ""

    text = str(value).strip()

    invalid_values = {
        "",
        "-",
        "null",
        "none",
        "n/a",
        "na",
        "undefined",
    }

    if text.lower() in invalid_values:
        return ""

    return text


def is_online(value):
    """
    ตรวจสอบว่า Status เท่ากับ ONLINE หรือไม่

    รองรับ:
    ONLINE
    Online
    online
    """

    status = clean_text(value).upper()

    return status == "ONLINE"


def has_parameter_alarm(value):
    """
    ตรวจสอบว่า ParameterAlram มีข้อมูลจริงหรือไม่
    """

    return bool(clean_text(value))


# ============================================================
# การตรวจวันที่ LastUpdate
# ============================================================

def parse_last_update(value):
    """
    แปลงค่า LastUpdate เป็น datetime

    รองรับรูปแบบ:
    2026-08-03 09:00
    2026-08-03 09:00:00
    2026-08-03T09:00
    2026-08-03T09:00:00
    """

    text = clean_text(value)

    if not text:
        return None

    formats = [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M",
    ]

    for date_format in formats:
        try:
            parsed = datetime.strptime(
                text,
                date_format,
            )

            return parsed.replace(
                tzinfo=THAILAND_TIMEZONE,
            )

        except ValueError:
            continue

    return None


def is_updated_today(properties):
    """
    ตรวจสอบว่า LastUpdate เป็นวันที่วันนี้ตามเวลาไทยหรือไม่
    """

    last_update = parse_last_update(
        properties.get("LastUpdate")
    )

    if last_update is None:
        return False

    today_thailand = thailand_now().date()

    return last_update.date() == today_thailand


# ============================================================
# การกรอง ParameterAlram เฉพาะของวันนี้
# ============================================================

def parse_alarm_date(date_text):
    """
    แปลงวันที่ใน ParameterAlram

    ตัวอย่างรูปแบบจากข้อมูล:
    26-07-10 15:00

    หมายถึง:
    ปี 2026 เดือน 07 วันที่ 10 เวลา 15:00
    """

    text = clean_text(date_text)

    if not text:
        return None

    formats = [
        "%y-%m-%d %H:%M",
        "%Y-%m-%d %H:%M",
        "%y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M:%S",
    ]

    for date_format in formats:
        try:
            parsed = datetime.strptime(
                text,
                date_format,
            )

            return parsed.replace(
                tzinfo=THAILAND_TIMEZONE,
            )

        except ValueError:
            continue

    return None


def split_parameter_alarm(parameter_alarm):
    """
    แยกรายการ ParameterAlram ออกจากกัน

    รองรับตัวคั่น:
    " , "
    ","
    ขึ้นบรรทัดใหม่

    จะพยายามไม่แยก comma ที่อยู่ในตัวเลข เช่น 1,003.62
    """

    text = clean_text(parameter_alarm)

    if not text:
        return []

    text = text.replace("\r\n", "\n")
    text = text.replace("\r", "\n")

    parts = re.split(
        r"\s+,\s+(?=\d{2,4}-\d{2}-\d{2}\s+\d{2}:\d{2})|\n+",
        text,
    )

    results = []

    for part in parts:
        cleaned = part.strip(" ,")

        if cleaned:
            results.append(cleaned)

    return results


def extract_alarm_datetime(alarm_text):
    """
    อ่านวันและเวลาจากต้นรายการ ParameterAlram

    ตัวอย่าง:
    26-08-03 09:00 (SO2 115.67 ppb)
    """

    text = clean_text(alarm_text)

    if not text:
        return None

    match = re.search(
        r"(?<!\d)"
        r"(\d{2,4}-\d{2}-\d{2}\s+\d{2}:\d{2}(?::\d{2})?)",
        text,
    )

    if not match:
        return None

    return parse_alarm_date(
        match.group(1)
    )


def get_today_alarm_entries(parameter_alarm):
    """
    คืนค่าเฉพาะรายการ ParameterAlram ที่เป็นวันที่วันนี้

    ถ้าอ่านวันที่ใน ParameterAlram ไม่ได้ทั้งหมด
    จะไม่ส่งรายการนั้น เพื่อป้องกันข้อมูลเก่า
    """

    today_thailand = thailand_now().date()

    alarm_entries = split_parameter_alarm(
        parameter_alarm
    )

    today_entries = []

    for alarm_entry in alarm_entries:
        alarm_datetime = extract_alarm_datetime(
            alarm_entry
        )

        if alarm_datetime is None:
            print(
                "ข้าม Alarm ที่อ่านวันที่ไม่ได้:",
                alarm_entry,
            )
            continue

        if alarm_datetime.date() != today_thailand:
            continue

        today_entries.append(
            alarm_entry
        )

    return today_entries


# ============================================================
# ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_emonitoring_data():
    """
    ดาวน์โหลดข้อมูล e-Monitoring สด

    เพิ่ม timestamp เพื่อป้องกัน cache
    """

    print("=" * 78)
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring")
    print("URL:", DATA_URL)
    print("=" * 78)

    request_time = int(
        thailand_now().timestamp()
    )

    headers = {
        "User-Agent": (
            "IEAT-eMonitoring-LINE-Alert/2.0"
        ),
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
    }

    try:
        response = requests.get(
            DATA_URL,
            headers=headers,
            params={
                "_t": request_time,
            },
            timeout=REQUEST_TIMEOUT_SECONDS,
        )

        response.raise_for_status()

    except requests.RequestException as error:
        print(
            "ERROR: ดาวน์โหลดข้อมูล e-Monitoring ไม่สำเร็จ"
        )
        print(error)
        sys.exit(1)

    try:
        data = response.json()

    except ValueError:
        print(
            "ERROR: ข้อมูลที่ได้รับไม่ใช่ JSON"
        )
        print(
            "HTTP Status:",
            response.status_code,
        )
        print(
            "Content-Type:",
            response.headers.get(
                "Content-Type",
                "",
            ),
        )
        print(
            "Response ตัวอย่าง:",
            response.text[:500],
        )
        sys.exit(1)

    if not isinstance(data, dict):
        print(
            "ERROR: โครงสร้าง JSON ไม่ถูกต้อง"
        )
        sys.exit(1)

    print(
        "ดาวน์โหลดข้อมูลสำเร็จ"
    )
    print(
        "HTTP Status:",
        response.status_code,
    )

    return data


def get_features(data):
    """
    อ่านรายการ Feature จาก GeoJSON
    """

    features = data.get(
        "features",
        [],
    )

    if not isinstance(features, list):
        print(
            "ERROR: features ไม่ใช่รายการ"
        )
        return []

    return features


# ============================================================
# กรองข้อมูลตามเงื่อนไข
# ============================================================

def filter_alert_features(features):
    """
    เลือกเฉพาะข้อมูลที่ผ่านทุกเงื่อนไข:

    1. Status = ONLINE
    2. ParameterAlram มีข้อมูลจริง
    3. LastUpdate เป็นวันที่วันนี้
    4. ParameterAlram มีรายการของวันนี้
    5. Code ต้องไม่เท่ากับ 0
    6. StationTH ต้องมีชื่อจริง
    """

    filtered_features = []

    online_count = 0
    alarm_count = 0
    today_last_update_count = 0
    today_alarm_count = 0

    skipped_code_zero = 0
    skipped_old_last_update = 0
    skipped_old_alarm = 0

    today_text = thailand_now().strftime(
        "%Y-%m-%d"
    )

    print()
    print("=" * 78)
    print(
        "วันที่ปัจจุบันตามเวลาไทย:",
        today_text,
    )
    print("=" * 78)

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = feature.get(
            "properties",
            {},
        )

        if not isinstance(properties, dict):
            continue

        code = clean_text(
            properties.get("Code")
        )

        station_name = clean_text(
            properties.get("StationTH")
        )

        status = properties.get(
            "Status"
        )

        parameter_alarm = properties.get(
            "ParameterAlram"
        )

        # ข้ามรายการ Code = 0
        if code == "0":
            skipped_code_zero += 1
            continue

        # ข้ามรายการไม่มีชื่อสถานีจริง
        if not station_name:
            continue

        # เงื่อนไขที่ 1: ONLINE
        if not is_online(status):
            continue

        online_count += 1

        # เงื่อนไขที่ 2: ParameterAlram มีข้อมูล
        if not has_parameter_alarm(
            parameter_alarm
        ):
            continue

        alarm_count += 1

        # เงื่อนไขที่ 3: LastUpdate เป็นวันนี้
        if not is_updated_today(
            properties
        ):
            skipped_old_last_update += 1

            print(
                "ข้ามข้อมูล LastUpdate เก่า:",
                station_name,
                "| LastUpdate:",
                clean_text(
                    properties.get("LastUpdate")
                )
                or "-",
            )

            continue

        today_last_update_count += 1

        # เงื่อนไขที่ 4:
        # ParameterAlram ต้องมีรายการของวันนี้
        today_alarm_entries = (
            get_today_alarm_entries(
                parameter_alarm
            )
        )

        if not today_alarm_entries:
            skipped_old_alarm += 1

            print(
                "ข้าม Alarm เก่า:",
                station_name,
                "| ParameterAlram ไม่มีรายการของวันนี้",
            )

            continue

        today_alarm_count += 1

        # เพิ่มค่าใหม่เข้า properties
        # เพื่อใช้สร้างข้อความ LINE
        copied_feature = dict(feature)

        copied_properties = dict(
            properties
        )

        copied_properties[
            "_today_alarm_entries"
        ] = today_alarm_entries

        copied_feature[
            "properties"
        ] = copied_properties

        filtered_features.append(
            copied_feature
        )

    print()
    print("=" * 78)
    print("สรุปการกรองข้อมูล")
    print("=" * 78)
    print(
        f"Feature ทั้งหมด                       : "
        f"{len(features)}"
    )
    print(
        f"ข้ามรายการ Code = 0                  : "
        f"{skipped_code_zero}"
    )
    print(
        f"สถานะ ONLINE                         : "
        f"{online_count}"
    )
    print(
        f"ONLINE และ ParameterAlram มีข้อมูล   : "
        f"{alarm_count}"
    )
    print(
        f"LastUpdate เป็นวันนี้                 : "
        f"{today_last_update_count}"
    )
    print(
        f"ParameterAlram มีรายการของวันนี้      : "
        f"{today_alarm_count}"
    )
    print(
        f"ข้ามเพราะ LastUpdate เก่า             : "
        f"{skipped_old_last_update}"
    )
    print(
        f"ข้ามเพราะ Alarm ไม่ใช่ของวันนี้        : "
        f"{skipped_old_alarm}"
    )
    print(
        f"ข้อมูลที่เตรียมส่ง LINE                : "
        f"{len(filtered_features)}"
    )
    print("=" * 78)

    return filtered_features


# ============================================================
# จัดรูปแบบวันที่
# ============================================================

THAI_MONTHS_SHORT = {
    1: "ม.ค.",
    2: "ก.พ.",
    3: "มี.ค.",
    4: "เม.ย.",
    5: "พ.ค.",
    6: "มิ.ย.",
    7: "ก.ค.",
    8: "ส.ค.",
    9: "ก.ย.",
    10: "ต.ค.",
    11: "พ.ย.",
    12: "ธ.ค.",
}


def format_last_update_thai(properties):
    """
    จัดรูปแบบวันที่เป็นภาษาไทยจาก LastUpdate จริง

    ตัวอย่าง:
    3 ส.ค. 2569, 09:00
    """

    last_update = parse_last_update(
        properties.get("LastUpdate")
    )

    if last_update is None:
        return ""

    thai_year = last_update.year + 543

    thai_month = THAI_MONTHS_SHORT.get(
        last_update.month,
        "",
    )

    return (
        f"{last_update.day} "
        f"{thai_month} "
        f"{thai_year}, "
        f"{last_update.strftime('%H:%M')}"
    )


# ============================================================
# สร้างข้อความ LINE
# ============================================================

def build_alert_message(properties):
    """
    สร้างข้อความ LINE

    แสดงเฉพาะข้อมูลที่มีจริง
    """

    station_name = clean_text(
        properties.get("StationTH")
    )

    station_code = clean_text(
        properties.get("Code")
    )

    industry_zone = clean_text(
        properties.get("IndustryZone")
    )

    operation_zone = clean_text(
        properties.get("Zone")
    )

    station_type = clean_text(
        properties.get("Type")
    )

    comment = clean_text(
        properties.get("Comment")
    )

    last_update_thai = (
        format_last_update_thai(
            properties
        )
    )

    today_alarm_entries = properties.get(
        "_today_alarm_entries",
        [],
    )

    lines = [
        "🚨 แจ้งเตือน e-Monitoring",
        "",
    ]

    if station_name:
        lines.append(
            f"สถานี: {station_name}"
        )

    if station_code and station_code != "0":
        lines.append(
            f"รหัสสถานี: {station_code}"
        )

    if industry_zone:
        lines.append(
            f"นิคมอุตสาหกรรม: {industry_zone}"
        )

    if operation_zone:
        lines.append(
            f"พื้นที่รับผิดชอบ: {operation_zone}"
        )

    if station_type:
        lines.append(
            f"ประเภทสถานี: {station_type}"
        )

    lines.append(
        "สถานะ: ONLINE"
    )

    if last_update_thai:
        lines.append(
            f"ข้อมูลล่าสุด: {last_update_thai}"
        )

    if comment:
        lines.append(
            f"หมายเหตุ: {comment}"
        )

    lines.append("")
    lines.append(
        "⚠️ พารามิเตอร์ที่เกินค่ามาตรฐาน"
    )

    for index, alarm_entry in enumerate(
        today_alarm_entries,
        start=1,
    ):
        lines.append(
            f"{index}. {alarm_entry}"
        )

    return "\n".join(lines)


# ============================================================
# State ป้องกันการส่งซ้ำ
# ============================================================

def load_state():
    """
    โหลดข้อมูลรายการที่เคยส่งแล้ว
    """

    if not STATE_FILE.exists():
        print(
            "ยังไม่มี alert_state.json"
        )
        return {}

    try:
        with STATE_FILE.open(
            "r",
            encoding="utf-8",
        ) as file:
            state = json.load(file)

        if not isinstance(state, dict):
            return {}

        print(
            f"โหลด Alert เดิมแล้ว "
            f"{len(state)} รายการ"
        )

        return state

    except (
        OSError,
        json.JSONDecodeError,
    ) as error:
        print(
            "WARNING: อ่าน alert_state.json ไม่สำเร็จ"
        )
        print(error)
        return {}


def save_state(state):
    """
    บันทึก State ปัจจุบัน
    """

    with STATE_FILE.open(
        "w",
        encoding="utf-8",
    ) as file:
        json.dump(
            state,
            file,
            ensure_ascii=False,
            indent=2,
        )

    print(
        "บันทึก alert_state.json แล้ว"
    )


def create_alert_key(properties):
    """
    สร้าง Key สำหรับป้องกันการส่งข้อมูลเดิมซ้ำ

    ใช้:
    Code
    LastUpdate
    รายการ Alarm ของวันนี้
    """

    station_code = clean_text(
        properties.get("Code")
    )

    last_update = clean_text(
        properties.get("LastUpdate")
    )

    today_alarm_entries = properties.get(
        "_today_alarm_entries",
        [],
    )

    alarm_text = "|".join(
        today_alarm_entries
    )

    return (
        f"{station_code}|"
        f"{last_update}|"
        f"{alarm_text}"
    )


# ============================================================
# ส่ง LINE Messaging API
# ============================================================

def validate_environment():
    """
    ตรวจสอบ GitHub Secrets
    """

    missing_values = []

    if not LINE_CHANNEL_ACCESS_TOKEN:
        missing_values.append(
            "LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not LINE_TARGET_ID:
        missing_values.append(
            "LINE_TARGET_ID"
        )

    if missing_values:
        print(
            "ERROR: ไม่พบ GitHub Secrets:"
        )

        for item in missing_values:
            print(
                f"- {item}"
            )

        sys.exit(1)


def send_line_message(message):
    """
    ส่งข้อความ Push ผ่าน LINE Messaging API
    """

    headers = {
        "Authorization": (
            f"Bearer "
            f"{LINE_CHANNEL_ACCESS_TOKEN}"
        ),
        "Content-Type": "application/json",
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
        timeout=REQUEST_TIMEOUT_SECONDS,
    )

    if not response.ok:
        print(
            "ERROR: LINE API ส่งข้อความไม่สำเร็จ"
        )
        print(
            "HTTP Status:",
            response.status_code,
        )
        print(
            "Response:",
            response.text,
        )

        response.raise_for_status()


# ============================================================
# โปรแกรมหลัก
# ============================================================

def main():
    print()
    print("=" * 78)
    print("IEAT e-Monitoring LINE Alert")
    print("=" * 78)
    print(
        "เวลาเริ่มทำงาน:",
        thailand_now().strftime(
            "%Y-%m-%d %H:%M:%S"
        ),
    )
    print()
    print("เงื่อนไขการแจ้งเตือน:")
    print("1. Status = ONLINE")
    print("2. ParameterAlram มีข้อมูลจริง")
    print("3. LastUpdate เป็นวันที่วันนี้")
    print(
        "4. ParameterAlram มีรายการของวันนี้"
    )
    print("=" * 78)

    validate_environment()

    data = download_emonitoring_data()

    features = get_features(
        data
    )

    if not features:
        print(
            "ERROR: ไม่พบ Feature ในข้อมูลต้นทาง"
        )
        sys.exit(1)

    alert_features = filter_alert_features(
        features
    )

    old_state = load_state()

    current_state = {}

    if not alert_features:
        print()
        print("=" * 78)
        print(
            "ไม่พบข้อมูลที่เข้าเงื่อนไขของวันนี้"
        )
        print(
            "ระบบจะไม่ส่งข้อมูลเก่าเข้า LINE"
        )
        print("=" * 78)

        save_state(
            current_state
        )

        return

    sent_count = 0
    duplicate_count = 0
    error_count = 0

    for feature in alert_features:
        properties = feature.get(
            "properties",
            {},
        )

        station_name = clean_text(
            properties.get("StationTH")
        )

        alert_key = create_alert_key(
            properties
        )

        current_state[alert_key] = {
            "station": station_name,
            "last_update": clean_text(
                properties.get("LastUpdate")
            ),
            "alarm_entries": properties.get(
                "_today_alarm_entries",
                [],
            ),
            "last_seen": thailand_now().isoformat(
                timespec="seconds"
            ),
        }

        if alert_key in old_state:
            duplicate_count += 1

            print()
            print(
                "ข้ามข้อมูลเดิม:",
                station_name
                or "ไม่ระบุชื่อสถานี",
            )

            continue

        message = build_alert_message(
            properties
        )

        print()
        print("-" * 78)
        print(
            "กำลังส่ง Alert ใหม่:",
            station_name
            or "ไม่ระบุชื่อสถานี",
        )
        print("-" * 78)
        print(message)

        try:
            send_line_message(
                message
            )

            sent_count += 1

            print(
                "ส่ง LINE สำเร็จ"
            )

        except requests.RequestException as error:
            error_count += 1

            current_state.pop(
                alert_key,
                None,
            )

            print(
                "ERROR: ส่ง LINE ไม่สำเร็จ"
            )
            print(error)

    save_state(
        current_state
    )

    print()
    print("=" * 78)
    print("สรุปผลการทำงาน")
    print("=" * 78)
    print(
        f"ข้อมูลเข้าเงื่อนไข : "
        f"{len(alert_features)}"
    )
    print(
        f"ส่ง LINE ใหม่      : "
        f"{sent_count}"
    )
    print(
        f"ข้อมูลเดิมไม่ส่งซ้ำ : "
        f"{duplicate_count}"
    )
    print(
        f"ส่งไม่สำเร็จ       : "
        f"{error_count}"
    )
    print("=" * 78)

    if error_count > 0:
        sys.exit(1)

    print(
        "ทำงานเสร็จสมบูรณ์"
    )


if __name__ == "__main__":
    main()
