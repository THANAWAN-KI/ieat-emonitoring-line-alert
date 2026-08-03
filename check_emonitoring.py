import json
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

import requests


# ============================================================
# CONFIGURATION
# ============================================================

# URL ข้อมูล e-Monitoring ต้นทาง
DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

# LINE Messaging API
LINE_API_URL = "https://api.line.me/v2/bot/message/push"

# GitHub Secrets
LINE_CHANNEL_ACCESS_TOKEN = os.getenv(
    "LINE_CHANNEL_ACCESS_TOKEN",
    "",
).strip()

LINE_TARGET_ID = os.getenv(
    "LINE_TARGET_ID",
    "",
).strip()

# ไฟล์เก็บสถานะ Alert ที่เคยส่ง
STATE_FILE = Path("alert_state.json")

# เขตเวลาไทย
THAILAND_TIMEZONE = ZoneInfo("Asia/Bangkok")

# Timeout
REQUEST_TIMEOUT_SECONDS = 60

# ความยาวข้อความ LINE
LINE_MESSAGE_MAX_LENGTH = 4500


# ============================================================
# TIME
# ============================================================

def thailand_now():
    """
    เวลาปัจจุบันตามประเทศไทย
    """
    return datetime.now(THAILAND_TIMEZONE)


# ============================================================
# TEXT UTILITIES
# ============================================================

def clean_text(value):
    """
    ทำความสะอาดข้อความ

    ค่าเหล่านี้ถือว่าไม่มีข้อมูล:
    None
    ""
    ช่องว่าง
    -
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
    Status ต้องเท่ากับ ONLINE
    """

    return clean_text(value).upper() == "ONLINE"


def has_parameter_alarm(value):
    """
    ParameterAlram ต้องมีข้อมูลจริง
    """

    return bool(clean_text(value))


# ============================================================
# LAST UPDATE
# ============================================================

def parse_last_update(value):
    """
    แปลง LastUpdate เป็น datetime

    รองรับ:
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
                tzinfo=THAILAND_TIMEZONE
            )

        except ValueError:
            continue

    return None


def is_updated_today(properties):
    """
    LastUpdate ต้องเป็นวันที่วันนี้ตามเวลาไทย
    """

    last_update = parse_last_update(
        properties.get("LastUpdate")
    )

    if last_update is None:
        return False

    return (
        last_update.date()
        == thailand_now().date()
    )


# ============================================================
# PARAMETER ALARM DATE
# ============================================================

def parse_alarm_datetime(value):
    """
    อ่านวันที่จาก ParameterAlram

    ตัวอย่าง:
    26-08-03 09:00

    หมายถึง:
    3 สิงหาคม 2026 เวลา 09:00
    """

    text = clean_text(value)

    if not text:
        return None

    formats = [
        "%y-%m-%d %H:%M",
        "%y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%d %H:%M:%S",
    ]

    for date_format in formats:
        try:
            parsed = datetime.strptime(
                text,
                date_format,
            )

            return parsed.replace(
                tzinfo=THAILAND_TIMEZONE
            )

        except ValueError:
            continue

    return None


def split_parameter_alarm(parameter_alarm):
    """
    แยกรายการ ParameterAlram

    ตัวอย่าง:

    26-08-03 09:00 (SO2 120 ppb) ,
    26-08-03 10:00 (PM10 150 ug/m3)

    รองรับทั้ง comma และขึ้นบรรทัดใหม่
    """

    text = clean_text(parameter_alarm)

    if not text:
        return []

    text = text.replace("\r\n", "\n")
    text = text.replace("\r", "\n")

    parts = re.split(
        (
            r"\s*,\s*"
            r"(?=\d{2,4}-\d{2}-\d{2}\s+\d{2}:\d{2})"
            r"|\n+"
        ),
        text,
    )

    results = []

    for part in parts:
        cleaned = part.strip(" ,\n\t")

        if cleaned:
            results.append(cleaned)

    return results


def extract_alarm_datetime(alarm_entry):
    """
    ดึงวันเวลาจากรายการ ParameterAlram
    """

    text = clean_text(alarm_entry)

    if not text:
        return None

    match = re.search(
        (
            r"(?<!\d)"
            r"(\d{2,4}-\d{2}-\d{2}"
            r"\s+\d{2}:\d{2}"
            r"(?::\d{2})?)"
        ),
        text,
    )

    if not match:
        return None

    return parse_alarm_datetime(
        match.group(1)
    )


def get_today_alarm_entries(parameter_alarm):
    """
    เอาเฉพาะ ParameterAlram ที่เป็นของวันนี้
    """

    today = thailand_now().date()

    entries = split_parameter_alarm(
        parameter_alarm
    )

    today_entries = []

    for entry in entries:

        alarm_datetime = extract_alarm_datetime(
            entry
        )

        if alarm_datetime is None:

            print(
                "ข้าม Alarm เพราะอ่านวันที่ไม่ได้:",
                entry,
            )

            continue

        if alarm_datetime.date() != today:
            continue

        today_entries.append(entry)

    return today_entries


# ============================================================
# DOWNLOAD e-MONITORING
# ============================================================

def download_emonitoring_data():
    """
    ดาวน์โหลดข้อมูล e-Monitoring ใหม่ทุกครั้ง

    ใช้ no-cache และ timestamp
    เพื่อช่วยป้องกันการได้ response จาก cache
    """

    print()
    print("=" * 80)
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring")
    print("URL:", DATA_URL)
    print("=" * 80)

    headers = {
        "User-Agent": (
            "IEAT-eMonitoring-LINE-Alert/4.0"
        ),
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
    }

    params = {
        "_t": int(time.time())
    }

    try:

        response = requests.get(
            DATA_URL,
            headers=headers,
            params=params,
            timeout=REQUEST_TIMEOUT_SECONDS,
        )

        response.raise_for_status()

    except requests.RequestException as error:

        print(
            "ERROR: ดาวน์โหลดข้อมูล "
            "e-Monitoring ไม่สำเร็จ"
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
            "Response:",
            response.text[:500],
        )

        sys.exit(1)

    if not isinstance(data, dict):

        print(
            "ERROR: รูปแบบ JSON ไม่ถูกต้อง"
        )

        sys.exit(1)

    print("ดาวน์โหลดข้อมูลสำเร็จ")

    print(
        "HTTP Status:",
        response.status_code,
    )

    return data


# ============================================================
# FEATURES
# ============================================================

def get_features(data):
    """
    อ่าน Feature จาก GeoJSON
    """

    features = data.get(
        "features",
        [],
    )

    if not isinstance(features, list):
        return []

    return features


# ============================================================
# FILTER
# ============================================================

def filter_alert_features(features):
    """
    เงื่อนไขการแจ้งเตือน:

    1. Code ต้องไม่ใช่ 0
    2. StationTH ต้องมีข้อมูล
    3. Status = ONLINE
    4. ParameterAlram มีข้อมูล
    5. LastUpdate เป็นวันที่วันนี้
    6. ParameterAlram มีรายการของวันนี้
    """

    result = []

    code_zero_count = 0
    online_count = 0
    parameter_alarm_count = 0
    today_last_update_count = 0
    today_alarm_count = 0
    old_last_update_count = 0
    old_alarm_count = 0

    print()
    print("=" * 80)

    print(
        "วันที่วันนี้ตามเวลาไทย:",
        thailand_now().strftime(
            "%Y-%m-%d"
        ),
    )

    print("=" * 80)

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

        # ----------------------------------------------------
        # ข้าม Feature Code = 0
        # ----------------------------------------------------

        if code == "0":

            code_zero_count += 1

            continue

        # ----------------------------------------------------
        # ต้องมีชื่อสถานี
        # ----------------------------------------------------

        if not station_name:
            continue

        # ----------------------------------------------------
        # เงื่อนไข 1: ONLINE
        # ----------------------------------------------------

        if not is_online(status):
            continue

        online_count += 1

        # ----------------------------------------------------
        # เงื่อนไข 2: ParameterAlram มีข้อมูล
        # ----------------------------------------------------

        if not has_parameter_alarm(
            parameter_alarm
        ):
            continue

        parameter_alarm_count += 1

        # ----------------------------------------------------
        # เงื่อนไข 3: LastUpdate เป็นวันนี้
        # ----------------------------------------------------

        if not is_updated_today(
            properties
        ):

            old_last_update_count += 1

            print(
                "ข้าม LastUpdate เก่า:",
                station_name,
                "| LastUpdate:",
                clean_text(
                    properties.get(
                        "LastUpdate"
                    )
                )
                or "-",
            )

            continue

        today_last_update_count += 1

        # ----------------------------------------------------
        # เงื่อนไข 4: Alarm ต้องเป็นของวันนี้
        # ----------------------------------------------------

        today_alarm_entries = (
            get_today_alarm_entries(
                parameter_alarm
            )
        )

        if not today_alarm_entries:

            old_alarm_count += 1

            print(
                "ข้าม ParameterAlram เก่า:",
                station_name,
            )

            continue

        today_alarm_count += 1

        # ----------------------------------------------------
        # สร้าง Feature สำหรับ Alert
        # ----------------------------------------------------

        new_feature = dict(feature)

        new_properties = dict(
            properties
        )

        new_properties[
            "_today_alarm_entries"
        ] = today_alarm_entries

        new_feature[
            "properties"
        ] = new_properties

        result.append(
            new_feature
        )

    # ========================================================
    # SUMMARY
    # ========================================================

    print()
    print("=" * 80)
    print("สรุปการกรองข้อมูล")
    print("=" * 80)

    print(
        "Feature ทั้งหมด:",
        len(features),
    )

    print(
        "Code = 0 ที่ถูกข้าม:",
        code_zero_count,
    )

    print(
        "Status = ONLINE:",
        online_count,
    )

    print(
        "ONLINE + ParameterAlram:",
        parameter_alarm_count,
    )

    print(
        "LastUpdate เป็นวันนี้:",
        today_last_update_count,
    )

    print(
        "ParameterAlram เป็นของวันนี้:",
        today_alarm_count,
    )

    print(
        "LastUpdate เก่าที่ถูกข้าม:",
        old_last_update_count,
    )

    print(
        "ParameterAlram เก่าที่ถูกข้าม:",
        old_alarm_count,
    )

    print(
        "ข้อมูลที่เตรียมส่ง LINE:",
        len(result),
    )

    print("=" * 80)

    return result


# ============================================================
# THAI DATE
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
    ตัวอย่าง:

    3 ส.ค. 2569, 09:00
    """

    last_update = parse_last_update(
        properties.get("LastUpdate")
    )

    if last_update is None:
        return ""

    thai_year = (
        last_update.year + 543
    )

    month = THAI_MONTHS_SHORT.get(
        last_update.month,
        "",
    )

    return (
        f"{last_update.day} "
        f"{month} "
        f"{thai_year}, "
        f"{last_update.strftime('%H:%M')}"
    )


# ============================================================
# BUILD MESSAGE
# ============================================================

def build_alert_message(properties):
    """
    สร้างข้อความสำหรับ LINE

    แสดงเฉพาะข้อมูลที่มี
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

    zone = clean_text(
        properties.get("Zone")
    )

    station_type = clean_text(
        properties.get("Type")
    )

    last_update = (
        format_last_update_thai(
            properties
        )
    )

    alarm_entries = properties.get(
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

    if (
        station_code
        and station_code != "0"
    ):

        lines.append(
            f"รหัสสถานี: {station_code}"
        )

    if industry_zone:

        lines.append(
            f"นิคมอุตสาหกรรม: "
            f"{industry_zone}"
        )

    if zone:

        lines.append(
            f"พื้นที่รับผิดชอบ: "
            f"{zone}"
        )

    if station_type:

        lines.append(
            f"ประเภทสถานี: "
            f"{station_type}"
        )

    lines.append(
        "สถานะ: ONLINE"
    )

    if last_update:

        lines.append(
            f"ข้อมูลล่าสุด: "
            f"{last_update}"
        )

    lines.append("")

    lines.append(
        "⚠️ Parameter Alarm"
    )

    for number, alarm in enumerate(
        alarm_entries,
        start=1,
    ):

        lines.append(
            f"{number}. {alarm}"
        )

    return "\n".join(
        lines
    )


# ============================================================
# LINE
# ============================================================

def validate_environment():
    """
    ตรวจ GitHub Secrets
    """

    missing = []

    if not LINE_CHANNEL_ACCESS_TOKEN:

        missing.append(
            "LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not LINE_TARGET_ID:

        missing.append(
            "LINE_TARGET_ID"
        )

    if missing:

        print(
            "ERROR: ไม่พบ GitHub Secrets"
        )

        for item in missing:

            print(
                "-",
                item,
            )

        sys.exit(1)


def split_long_message(message):
    """
    แบ่งข้อความถ้ายาวเกินไป
    """

    if len(message) <= LINE_MESSAGE_MAX_LENGTH:
        return [message]

    lines = message.splitlines()

    chunks = []

    current = ""

    for line in lines:

        if current:

            candidate = (
                current
                + "\n"
                + line
            )

        else:

            candidate = line

        if (
            len(candidate)
            <= LINE_MESSAGE_MAX_LENGTH
        ):

            current = candidate

        else:

            if current:

                chunks.append(
                    current
                )

            current = line

    if current:

        chunks.append(
            current
        )

    return chunks


def send_line_message(message):
    """
    ส่งข้อความเข้า LINE
    """

    chunks = split_long_message(
        message
    )

    for index, chunk in enumerate(
        chunks,
        start=1,
    ):

        headers = {
            "Authorization": (
                "Bearer "
                + LINE_CHANNEL_ACCESS_TOKEN
            ),
            "Content-Type": (
                "application/json"
            ),
        }

        payload = {
            "to": LINE_TARGET_ID,
            "messages": [
                {
                    "type": "text",
                    "text": chunk,
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
                "ERROR: ส่ง LINE ไม่สำเร็จ"
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

        print(
            f"ส่ง LINE สำเร็จ "
            f"({index}/{len(chunks)})"
        )


# ============================================================
# STATE
# ============================================================

def load_state():
    """
    โหลด alert_state.json
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

            state = json.load(
                file
            )

        if not isinstance(state, dict):
            return {}

        return state

    except (
        OSError,
        json.JSONDecodeError,
    ) as error:

        print(
            "WARNING: อ่าน "
            "alert_state.json ไม่สำเร็จ"
        )

        print(error)

        return {}


def save_state(state):
    """
    บันทึก alert_state.json
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
    Key ป้องกัน Alert เดิมส่งซ้ำ

    ใช้:
    Code
    LastUpdate
    Alarm
    """

    code = clean_text(
        properties.get("Code")
    )

    last_update = clean_text(
        properties.get("LastUpdate")
    )

    alarm_entries = properties.get(
        "_today_alarm_entries",
        [],
    )

    alarm_text = "|".join(
        alarm_entries
    )

    return (
        f"{code}|"
        f"{last_update}|"
        f"{alarm_text}"
    )


# ============================================================
# MAIN
# ============================================================

def main():

    print()
    print("=" * 80)
    print("IEAT e-Monitoring LINE Alert")
    print("=" * 80)

    print(
        "เวลาปัจจุบันประเทศไทย:",
        thailand_now().strftime(
            "%Y-%m-%d %H:%M:%S"
        ),
    )

    print()
    print("เงื่อนไขการส่ง LINE:")
    print("1. Status = ONLINE")
    print("2. ParameterAlram มีข้อมูล")
    print("3. LastUpdate เป็นวันที่วันนี้")
    print(
        "4. ParameterAlram "
        "ต้องเป็นรายการของวันนี้"
    )
    print("5. Alert เดิมจะไม่ส่งซ้ำ")
    print("=" * 80)

    # ========================================================
    # ตรวจ Secrets
    # ========================================================

    validate_environment()

    # ========================================================
    # ดาวน์โหลดข้อมูล
    # ========================================================

    data = download_emonitoring_data()

    # ========================================================
    # อ่าน Feature
    # ========================================================

    features = get_features(
        data
    )

    print(
        "จำนวน Feature ที่ได้รับ:",
        len(features),
    )

    if not features:

        print(
            "ERROR: ไม่พบข้อมูล Feature "
            "จาก e-Monitoring"
        )

        sys.exit(1)

    # ========================================================
    # กรองข้อมูล
    # ========================================================

    alert_features = (
        filter_alert_features(
            features
        )
    )

    # ========================================================
    # โหลด State
    # ========================================================

    old_state = load_state()

    current_state = {}

    # ========================================================
    # ไม่มี Alert ของวันนี้
    # ========================================================

    if not alert_features:

        print()
        print("=" * 80)

        print(
            "ไม่พบข้อมูลที่เข้าเงื่อนไข"
        )

        print(
            "ไม่มี Alert ที่ต้องส่งเข้า LINE"
        )

        print(
            "ระบบจะไม่ส่งข้อมูลเก่า"
        )

        print("=" * 80)

        save_state(
            current_state
        )

        return

    # ========================================================
    # ส่ง Alert
    # ========================================================

    sent_count = 0

    duplicate_count = 0

    error_count = 0

    for feature in alert_features:

        properties = feature.get(
            "properties",
            {},
        )

        station_name = clean_text(
            properties.get(
                "StationTH"
            )
        )

        alert_key = create_alert_key(
            properties
        )

        current_state[
            alert_key
        ] = {
            "station": station_name,

            "last_update": clean_text(
                properties.get(
                    "LastUpdate"
                )
            ),

            "alarm_entries": (
                properties.get(
                    "_today_alarm_entries",
                    [],
                )
            ),

            "last_seen": (
                thailand_now().isoformat(
                    timespec="seconds"
                )
            ),
        }

        # ====================================================
        # เคยส่งแล้ว
        # ====================================================

        if alert_key in old_state:

            duplicate_count += 1

            print(
                "ข้าม Alert เดิม:",
                station_name
                or "ไม่ระบุสถานี",
            )

            continue

        # ====================================================
        # Alert ใหม่
        # ====================================================

        message = build_alert_message(
            properties
        )

        print()
        print("-" * 80)

        print(
            "พบ Alert ใหม่:",
            station_name
            or "ไม่ระบุสถานี",
        )

        print(
            "LastUpdate:",
            clean_text(
                properties.get(
                    "LastUpdate"
                )
            ),
        )

        print("-" * 80)

        try:

            send_line_message(
                message
            )

            sent_count += 1

        except requests.RequestException as error:

            error_count += 1

            # ถ้าส่งไม่สำเร็จ
            # เอาออกจาก state
            # เพื่อให้รอบหน้าลองใหม่

            current_state.pop(
                alert_key,
                None,
            )

            print(
                "ERROR: ส่ง Alert ไม่สำเร็จ"
            )

            print(error)

    # ========================================================
    # SAVE STATE
    # ========================================================

    save_state(
        current_state
    )

    # ========================================================
    # SUMMARY
    # ========================================================

    print()
    print("=" * 80)
    print("สรุปผลการทำงาน")
    print("=" * 80)

    print(
        "ข้อมูลเข้าเงื่อนไข:",
        len(alert_features),
    )

    print(
        "ส่ง LINE ใหม่:",
        sent_count,
    )

    print(
        "Alert เดิมไม่ส่งซ้ำ:",
        duplicate_count,
    )

    print(
        "ส่งไม่สำเร็จ:",
        error_count,
    )

    print("=" * 80)

    if error_count > 0:

        print(
            "ERROR: มีข้อความ LINE "
            "ที่ส่งไม่สำเร็จ"
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
