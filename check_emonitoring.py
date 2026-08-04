import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


# ============================================================
# 1. การตั้งค่าระบบ
# ============================================================

DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

LINE_BROADCAST_URL = (
    "https://api.line.me/v2/bot/message/broadcast"
)

ARCGIS_DASHBOARD_URL = (
    "https://www.arcgis.com/apps/dashboards/"
    "576c71d01cc5403cad90ee330fd67b6e"
)

LINE_CHANNEL_ACCESS_TOKEN = os.getenv(
    "LINE_CHANNEL_ACCESS_TOKEN",
    "",
).strip()

THAILAND_TIMEZONE = timezone(
    timedelta(hours=7)
)

REQUEST_TIMEOUT_SECONDS = 60

# จำนวนการ์ดสูงสุดต่อ Carousel
MAX_BUBBLES_PER_CAROUSEL = 10

# LINE จำกัด JSON ของ Flex Carousel ไม่เกิน 50 KB
# ใช้ 40 KB เพื่อเผื่อ payload และอักขระภาษาไทยอย่างปลอดภัย
MAX_CAROUSEL_JSON_BYTES = 40_000

# จำนวนรายการ Alarm สูงสุดที่แสดงต่อสถานี
MAX_ALARM_ENTRIES_PER_STATION = 3

# จำกัดข้อความในแต่ละ Flex component เพื่อป้องกัน Bubble ใหญ่ผิดปกติ
MAX_FLEX_TEXT_CHARS = 1_000

# ============================================================
# 2. รูปภาพและไอคอนที่ใช้ใน LINE Flex Message
# ============================================================

ASSET_BASE_URL = (
    "https://THANAWAN-KI.github.io/"
    "ieat-emonitoring-line-alert"
)

# เก็บไอคอนทั้งหมดไว้ในโฟลเดอร์ assets ของ GitHub Pages
# หากชื่อไฟล์จริงต่างจากนี้ ให้แก้เฉพาะค่าด้านล่าง หรือกำหนดค่า
# LINE_ICON_<ชื่อ>_URL ใน GitHub Secrets ได้ทันที
ICON_ASSET_BASE_URL = os.getenv(
    "LINE_ICON_ASSET_BASE_URL",
    f"{ASSET_BASE_URL}/assets",
).rstrip("/")

# ชื่อไฟล์บน GitHub Pages ต้องตรงตัวพิมพ์เล็ก-ใหญ่ทุกตัว
IEAT_LOGO_URL = os.getenv(
    "IEAT_LOGO_URL",
    f"{ASSET_BASE_URL}/ieat_logo.png.PNG",
).strip()

# ใช้ Unicode ในข้อความสั้น ๆ และใช้รูปไอคอนจาก assets สำหรับ Badge
# บนการ์ด เพื่อให้ภาพรวมเรียบหรูและดูเป็นระบบเดียวกัน
ICON_ALERT = "⚠️"
ICON_NORMAL = "✅"
ICON_WATCH = "⏳"
ICON_STATION = "📡"
ICON_DASHBOARD = "📊"
ICON_LOCATION = "📍"
ICON_AIR = "🌿"
ICON_WATER = "💧"
ICON_CEMS = "🏭"
ICON_OTHER = "●"

ICON_ASSET_URLS = {
    ICON_ALERT: os.getenv(
        "LINE_ICON_ALERT_URL",
        f"{ICON_ASSET_BASE_URL}/alert.png",
    ),
    ICON_NORMAL: os.getenv(
        "LINE_ICON_NORMAL_URL",
        f"{ICON_ASSET_BASE_URL}/normal.png",
    ),
    ICON_WATCH: os.getenv(
        "LINE_ICON_WATCH_URL",
        f"{ICON_ASSET_BASE_URL}/watch.png",
    ),
    ICON_STATION: os.getenv(
        "LINE_ICON_STATION_URL",
        f"{ICON_ASSET_BASE_URL}/station.png",
    ),
    ICON_DASHBOARD: os.getenv(
        "LINE_ICON_DASHBOARD_URL",
        f"{ICON_ASSET_BASE_URL}/dashboard.png",
    ),
    ICON_LOCATION: os.getenv(
        "LINE_ICON_LOCATION_URL",
        f"{ICON_ASSET_BASE_URL}/location.png",
    ),
    ICON_AIR: os.getenv(
        "LINE_ICON_AIR_URL",
        f"{ICON_ASSET_BASE_URL}/air.png",
    ),
    ICON_WATER: os.getenv(
        "LINE_ICON_WATER_URL",
        f"{ICON_ASSET_BASE_URL}/water.png",
    ),
    ICON_CEMS: os.getenv(
        "LINE_ICON_CEMS_URL",
        f"{ICON_ASSET_BASE_URL}/cems.png",
    ),
}


# ============================================================
# 3. ธีมสี Dashboard e-Monitoring กนอ.
# ============================================================

# ธีมตามสีองค์กรที่กำหนด: ม่วง #52057F และเขียว #598C14
# สีระดับพารามิเตอร์: เกินค่ามาตรฐาน / เฝ้าระวัง / ติดตามสถานการณ์
COLOR_PRIMARY = "#52057F"
COLOR_PRIMARY_DARK = "#3F0661"
COLOR_PRIMARY_SOFT = "#F3EDF7"
COLOR_PRIMARY_PALE = "#FBF8FC"
COLOR_PRIMARY_BORDER = "#DCCBE8"

# สีแจ้งเตือนระดับเร่งด่วน
COLOR_RED = "#F00A36"
COLOR_RED_DARK = "#BE062A"
COLOR_RED_SOFT = "#FFF0F3"

# สีแจ้งเตือนระดับเฝ้าระวัง
COLOR_YELLOW = "#FFC719"
COLOR_YELLOW_DARK = "#FF6908"
COLOR_YELLOW_SOFT = "#FFF9DD"

# สีเขียว AQMs / ONLINE ตาม Dashboard
COLOR_GREEN = "#598C14"
COLOR_GREEN_DARK = "#426A0F"
COLOR_GREEN_SOFT = "#F1F7E8"
COLOR_GREEN_BORDER = "#C9DFA7"

# สีฟ้า CEMs ตาม Dashboard
COLOR_BLUE = "#4A8594"
COLOR_BLUE_DARK = "#336775"
COLOR_BLUE_SOFT = "#EEF7F8"
COLOR_BLUE_BORDER = "#C3DDE2"

COLOR_TEXT = "#2D2933"
COLOR_MUTED = "#766F7C"
COLOR_BORDER = "#E5E0E9"
COLOR_DIVIDER = "#EEEAF1"
COLOR_BACKGROUND = "#FAF9FB"
COLOR_SURFACE = "#FFFFFF"
COLOR_DEPTH = "#F5F2F7"
COLOR_DEPTH_DARK = "#EAE5EE"
COLOR_WHITE = "#FFFFFF"


# ============================================================
# 4. ฟังก์ชันพื้นฐาน
# ============================================================

def now_thailand() -> datetime:
    return datetime.now(
        THAILAND_TIMEZONE
    )


def clean_text(
    value: Any,
    default: str = "",
) -> str:
    if value is None:
        return default

    text = str(value).strip()

    invalid_values = {
        "",
        "-",
        "none",
        "null",
        "nan",
        "undefined",
        "n/a",
        "na",
        "9999",
        "9999.0",
    }

    if text.lower() in invalid_values:
        return default

    return text


def is_online(value: Any) -> bool:
    return (
        clean_text(value).upper()
        == "ONLINE"
    )


def has_parameter_alarm(
    value: Any,
) -> bool:
    return bool(
        clean_text(value)
    )


# ============================================================
# 5. วันที่และเวลา
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


def parse_datetime(
    value: Any,
) -> datetime | None:
    text = clean_text(value)

    if not text:
        return None

    # รองรับ ISO 8601 ที่มี timezone, milliseconds และตัวอักษร Z
    iso_text = text.replace("Z", "+00:00")

    try:
        parsed_iso = datetime.fromisoformat(iso_text)

        if parsed_iso.tzinfo is None:
            return parsed_iso.replace(tzinfo=THAILAND_TIMEZONE)

        return parsed_iso.astimezone(THAILAND_TIMEZONE)

    except ValueError:
        pass

    date_formats = [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M",
        "%Y/%m/%d %H:%M:%S",
        "%Y/%m/%d %H:%M",
        "%d/%m/%Y %H:%M:%S",
        "%d/%m/%Y %H:%M",
        "%y-%m-%d %H:%M:%S",
        "%y-%m-%d %H:%M",
    ]

    for date_format in date_formats:
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


def is_today(value: Any) -> bool:
    parsed = parse_datetime(value)

    if parsed is None:
        return False

    return (
        parsed.date()
        == now_thailand().date()
    )


def format_datetime_thai(
    value: Any,
) -> str:
    parsed = parse_datetime(value)

    if parsed is None:
        return clean_text(
            value,
            "-",
        )

    thai_year = parsed.year + 543

    thai_month = THAI_MONTHS_SHORT.get(
        parsed.month,
        "",
    )

    return (
        f"{parsed.day} "
        f"{thai_month} "
        f"{thai_year} "
        f"เวลา {parsed:%H:%M} น."
    )


def report_time_text() -> str:
    current = now_thailand()

    thai_year = current.year + 543

    thai_month = THAI_MONTHS_SHORT.get(
        current.month,
        "",
    )

    return (
        f"{current.day} "
        f"{thai_month} "
        f"{thai_year} "
        f"เวลา {current:%H:%M} น."
    )


# ============================================================
# 6. ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_data() -> Any:
    timestamp = int(
        time.time()
    )

    separator = (
        "&"
        if "?" in DATA_URL
        else "?"
    )

    request_url = (
        f"{DATA_URL}"
        f"{separator}_t={timestamp}"
    )

    request = urllib.request.Request(
        request_url,
        headers={
            "User-Agent": (
                "IEAT-eMonitoring-LINE-Alert/10.0"
            ),
            "Accept": "application/json",
            "Cache-Control": (
                "no-cache, no-store, max-age=0"
            ),
            "Pragma": "no-cache",
        },
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=REQUEST_TIMEOUT_SECONDS,
        ) as response:

            raw_data = response.read()

            text = raw_data.decode(
                "utf-8-sig",
                errors="replace",
            )

            return json.loads(text)

    except urllib.error.HTTPError as error:
        error_body = (
            error.read()
            .decode(
                "utf-8",
                errors="replace",
            )
        )

        raise RuntimeError(
            "ดาวน์โหลดข้อมูล e-Monitoring "
            f"ไม่สำเร็จ HTTP {error.code}: "
            f"{error_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อข้อมูล "
            f"e-Monitoring ได้: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            "ข้อมูลที่ได้รับจาก e-Monitoring "
            "ไม่ใช่ JSON ที่ถูกต้อง"
        ) from error


def get_features(
    data: Any,
) -> list[dict[str, Any]]:
    if not isinstance(data, dict):
        return []

    features = data.get(
        "features",
        [],
    )

    if not isinstance(
        features,
        list,
    ):
        return []

    return [
        feature
        for feature in features
        if isinstance(feature, dict)
    ]


# ============================================================
# 7. อ่าน ParameterAlram
# ============================================================

def split_parameter_alarm(
    value: Any,
) -> list[str]:
    text = clean_text(value)

    if not text:
        return []

    text = (
        text
        .replace("\r\n", "\n")
        .replace("\r", "\n")
    )

    parts = re.split(
        (
            r"\s*,\s*"
            r"(?=\d{2,4}[-/]\d{2}[-/]\d{2}"
            r"\s+\d{2}:\d{2})"
            r"|\n+"
        ),
        text,
    )

    results = []

    for part in parts:
        cleaned = part.strip(
            " ,\n\t"
        )

        if cleaned:
            results.append(
                cleaned
            )

    return results


def get_alarm_datetime(
    alarm_entry: str,
) -> datetime | None:
    match = re.search(
        (
            r"(?<!\d)"
            r"(\d{2,4}[-/]\d{2}[-/]\d{2}"
            r"\s+\d{2}:\d{2}"
            r"(?::\d{2})?)"
        ),
        alarm_entry,
    )

    if not match:
        return None

    return parse_datetime(
        match.group(1)
    )


def get_latest_alarm_entries(
    value: Any,
    reference_date: Any = None,
) -> list[str]:
    """คืน Alarm ของวันที่ข้อมูลล่าสุด ไม่ผูกกับวันที่รัน Workflow

    e-Monitoring อาจอัปเดต feed ช้ากว่าวันปัจจุบัน การบังคับใช้เฉพาะ
    Alarm ของ "วันนี้" จะทำให้ระบบรายงานผิดว่าไม่พบค่าเกินมาตรฐาน
    ทั้งที่ feed ล่าสุดยังมี ParameterAlram อยู่
    """
    entries = split_parameter_alarm(value)

    if not entries:
        return []

    dated_entries: list[tuple[str, datetime]] = []
    undated_entries: list[str] = []

    for entry in entries:
        parsed = get_alarm_datetime(entry)

        if parsed is None:
            undated_entries.append(entry)
        else:
            dated_entries.append((entry, parsed))

    target_date = None

    if isinstance(reference_date, datetime):
        target_date = reference_date.date()
    elif reference_date is not None:
        target_date = reference_date
    elif dated_entries:
        target_date = max(parsed.date() for _, parsed in dated_entries)

    if target_date is not None:
        matched = [
            entry
            for entry, parsed in dated_entries
            if parsed.date() == target_date
        ]

        if matched:
            return matched

        # ถ้า Alarm มีวันที่ แต่ไม่ตรงกับวันที่ล่าสุดของ feed ถือเป็นข้อมูลเก่า
        if dated_entries:
            return []

    # กรณี API ส่งข้อความ Alarm โดยไม่มีวันที่ ให้ถือว่าฟิลด์ปัจจุบันยัง Alarm
    return undated_entries or entries


# ============================================================
# 8. จัดรูปแบบรายละเอียด Alarm
# ============================================================

def remove_alarm_datetime(
    alarm_entry: str,
) -> str:
    cleaned = re.sub(
        (
            r"^\s*"
            r"\d{2,4}[-/]\d{2}[-/]\d{2}"
            r"\s+\d{2}:\d{2}"
            r"(?::\d{2})?"
            r"\s*"
        ),
        "",
        alarm_entry,
    )

    return cleaned.strip(
        " ()"
    )


def alarm_time_text(
    alarm_entry: str,
) -> str:
    parsed = get_alarm_datetime(
        alarm_entry
    )

    if parsed is None:
        return ""

    return f"{parsed:%H:%M} น."


KNOWN_PARAMETERS = [
    "PM2.5",
    "PM25",
    "PM10",
    "TSP",
    "SO2",
    "NO2",
    "NOX",
    "NO",
    "CO",
    "O3",
    "H2S",
    "CH4",
    "NMHC",
    "THC",
    "BOD",
    "COD",
    "DO",
    "PH",
    "FLOW",
    "OPACITY",
    "HCL",
]


PARAMETER_DISPLAY_NAMES = {
    "PM25": "PM2.5",
    "SO2": "SO₂",
    "NO2": "NO₂",
    "NOX": "NOx",
    "O3": "O₃",
    "H2S": "H₂S",
    "CH4": "CH₄",
    "PH": "pH",
    "OPACITY": "Opacity",
    "HCL": "HCl",
}


def parameter_display_name(
    parameter: str,
) -> str:
    return PARAMETER_DISPLAY_NAMES.get(
        parameter,
        parameter,
    )


def extract_parameter_names(
    alarm_entries: list[str],
) -> list[str]:
    found = []

    combined_text = " ".join(
        alarm_entries
    ).upper()

    for parameter in KNOWN_PARAMETERS:
        pattern = (
            r"(?<![A-Z0-9])"
            + re.escape(parameter)
            + r"(?![A-Z0-9])"
        )

        if re.search(
            pattern,
            combined_text,
        ):
            display_name = (
                parameter_display_name(
                    parameter
                )
            )

            if display_name not in found:
                found.append(
                    display_name
                )

    return found


def extract_primary_parameter_name(
    alarm_entry: str,
) -> str:
    content = remove_alarm_datetime(
        alarm_entry
    )

    upper_content = content.upper()

    for parameter in KNOWN_PARAMETERS:
        pattern = (
            r"(?<![A-Z0-9])"
            + re.escape(parameter)
            + r"(?![A-Z0-9])"
        )

        if re.search(
            pattern,
            upper_content,
        ):
            return parameter_display_name(
                parameter
            )

    first_word = re.search(
        r"([A-Za-z][A-Za-z0-9_.@%-]*)",
        content,
    )

    if first_word:
        return first_word.group(1)

    return "พารามิเตอร์แจ้งเตือน"


# ============================================================
# 9. ข้อมูลสถานี
# ============================================================

def get_station_name(
    properties: dict[str, Any],
) -> str:
    fields = [
        "StationTH",
        "StationName",
        "station_name",
        "Name",
    ]

    for field in fields:
        value = clean_text(
            properties.get(field)
        )

        if value:
            return value

    return "ไม่ระบุชื่อสถานี"


def get_industry_zone(
    properties: dict[str, Any],
) -> str:
    fields = [
        "IndustryZone",
        "IndustrialEstate",
        "EstateTH",
        "Estate",
        "Zone",
    ]

    for field in fields:
        value = clean_text(
            properties.get(field)
        )

        if value:
            return value

    return "ระบบ e-Monitoring"


def get_raw_station_type(
    properties: dict[str, Any],
) -> str:
    fields = [
        "Type",
        "StationType",
        "type",
        "TYPE",
        "station_type",
    ]

    for field in fields:
        value = clean_text(
            properties.get(field)
        )

        if value:
            return value

    return ""


def normalize_station_type(
    properties: dict[str, Any],
) -> str:
    raw_type = get_raw_station_type(
        properties
    )

    normalized = (
        clean_text(raw_type)
        .upper()
        .replace(" ", "")
        .replace("-", "")
        .replace("_", "")
        .replace(".", "")
    )

    if normalized in {
        "AQM",
        "AQMS",
        "AIRQUALITY",
        "AIRQUALITYMONITORING",
        "AIRQUALITYMONITORINGSTATION",
    }:
        return "AQMs"

    if normalized in {
        "WQM",
        "WQMS",
        "WATERQUALITY",
        "WATERQUALITYMONITORING",
        "WATERQUALITYMONITORINGSTATION",
    }:
        return "WQMs"

    if normalized in {
        "CEM",
        "CEMS",
        "CONTINUOUSEMISSIONMONITORING",
        "CONTINUOUSEMISSIONMONITORINGSYSTEM",
        "EMISSIONMONITORING",
    }:
        return "CEMs"

    if "AQM" in normalized:
        return "AQMs"

    if "WQM" in normalized:
        return "WQMs"

    if "CEM" in normalized:
        return "CEMs"

    return (
        raw_type
        if raw_type
        else "ไม่ระบุประเภท"
    )


def get_station_comment(
    properties: dict[str, Any],
) -> str:
    """อ่านข้อความสาเหตุ/การติดตามผลจากฟิลด์ Comment ของ API"""
    fields = [
        "Comment",
        "comment",
        "COMMENT",
        "Remark",
        "Remarks",
        "remark",
    ]

    for field in fields:
        value = clean_text(
            properties.get(field)
        )

        if value:
            return value

    return "ยังไม่มีข้อมูลสาเหตุ / การติดตามผล"


def get_coordinates(
    feature: dict[str, Any],
) -> tuple[float, float] | None:
    geometry = feature.get(
        "geometry",
        {},
    )

    if not isinstance(
        geometry,
        dict,
    ):
        return None

    coordinates = geometry.get(
        "coordinates"
    )

    if (
        not isinstance(coordinates, list)
        or len(coordinates) < 2
    ):
        return None

    try:
        longitude = float(
            coordinates[0]
        )

        latitude = float(
            coordinates[1]
        )

    except (TypeError, ValueError):
        return None

    return latitude, longitude


def station_map_url(
    feature: dict[str, Any],
) -> str:
    coordinates = get_coordinates(
        feature
    )

    if coordinates is None:
        return ARCGIS_DASHBOARD_URL

    latitude, longitude = coordinates

    return (
        "https://www.google.com/maps/"
        "search/?api=1&query="
        f"{latitude},{longitude}"
    )


# ============================================================
# 10. กรองและนับสถานี ONLINE
# ============================================================

def is_valid_station(
    properties: dict[str, Any],
) -> bool:
    code = clean_text(
        properties.get("Code")
    )

    name = clean_text(
        properties.get("StationTH")
    )

    if code == "0":
        return False

    if not name:
        return False

    return True


def station_unique_key(
    properties: dict[str, Any],
) -> str:
    code = clean_text(
        properties.get("Code")
    )

    name = get_station_name(
        properties
    )

    if code and code != "0":
        return f"CODE:{code}"

    return f"NAME:{name}"


def get_latest_station_features(
    features: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """ตัดสถานีซ้ำและเก็บ record ที่ LastUpdate ล่าสุดของแต่ละสถานี"""
    latest_by_station: dict[str, dict[str, Any]] = {}

    for feature in features:
        properties = feature.get("properties", {})

        if not isinstance(properties, dict):
            continue

        if not is_valid_station(properties):
            continue

        unique_key = station_unique_key(properties)
        existing = latest_by_station.get(unique_key)

        if existing is None:
            latest_by_station[unique_key] = feature
            continue

        existing_properties = existing.get("properties", {})
        existing_time = parse_datetime(existing_properties.get("LastUpdate"))
        candidate_time = parse_datetime(properties.get("LastUpdate"))

        if candidate_time is not None and (
            existing_time is None or candidate_time > existing_time
        ):
            latest_by_station[unique_key] = feature

    return list(latest_by_station.values())


def count_online_station_types(
    features: list[dict[str, Any]],
) -> dict[str, Any]:
    counts = {
        "AQMs": 0,
        "WQMs": 0,
        "CEMs": 0,
        "Other": 0,
        "total": 0,
        "offline": 0,
        "all_total": 0,
        "type_breakdown": {
            "AQMs": {"total": 0, "online": 0, "offline": 0},
            "WQMs": {"total": 0, "online": 0, "offline": 0},
            "CEMs": {"total": 0, "online": 0, "offline": 0},
            "Other": {"total": 0, "online": 0, "offline": 0},
        },
    }

    for feature in get_latest_station_features(features):
        properties = feature.get("properties", {})
        station_type = normalize_station_type(properties)
        type_key = station_type if station_type in {"AQMs", "WQMs", "CEMs"} else "Other"
        online = is_online(properties.get("Status"))

        counts["all_total"] += 1
        counts["type_breakdown"][type_key]["total"] += 1

        if online:
            counts["total"] += 1
            counts[type_key] += 1
            counts["type_breakdown"][type_key]["online"] += 1
        else:
            counts["offline"] += 1
            counts["type_breakdown"][type_key]["offline"] += 1

    return counts


def filter_current_online_features(
    features: list[dict[str, Any]],
) -> tuple[
    list[dict[str, Any]],
    int,
    int,
]:
    # ใช้ record ล่าสุดของทุกสถานี โดยไม่บังคับว่าต้องเป็นวันที่รัน Workflow
    # เพราะ feed จริงอาจมี LastUpdate เก่ากว่าวันปัจจุบัน
    online_features = []
    stale_count = 0

    for feature in get_latest_station_features(features):
        properties = feature.get("properties", {})

        if not is_online(properties.get("Status")):
            continue

        online_features.append(feature)

        if not is_today(properties.get("LastUpdate")):
            stale_count += 1

    return (
        online_features,
        len(online_features),
        stale_count,
    )


def get_latest_online_update(
    features: list[dict[str, Any]],
) -> datetime | None:
    """คืนวันเวลา LastUpdate ที่ล่าสุดของสถานี ONLINE"""
    latest: datetime | None = None

    for feature in features:
        properties = feature.get("properties", {})
        if not isinstance(properties, dict):
            continue
        if not is_valid_station(properties):
            continue
        if not is_online(properties.get("Status")):
            continue

        parsed = parse_datetime(properties.get("LastUpdate"))
        if parsed is not None and (latest is None or parsed > latest):
            latest = parsed

    return latest


def filter_alert_features(
    current_features: list[dict[str, Any]],
    alarm_reference_date: Any = None,
) -> list[dict[str, Any]]:
    alert_features = []

    for feature in current_features:
        properties = feature.get(
            "properties",
            {},
        )

        # รองรับทั้งชื่อเดิมที่ API สะกดว่า ParameterAlram
        # และชื่อที่สะกดถูก/รูปแบบตัวพิมพ์อื่น เผื่อ API เปลี่ยน schema
        parameter_alarm = next(
            (
                properties.get(field)
                for field in (
                    "ParameterAlram",
                    "ParameterAlarm",
                    "parameterAlram",
                    "parameterAlarm",
                )
                if has_parameter_alarm(properties.get(field))
            ),
            "",
        )

        if not has_parameter_alarm(
            parameter_alarm
        ):
            continue

        latest_alarm_entries = (
            get_latest_alarm_entries(
                parameter_alarm,
                alarm_reference_date,
            )
        )

        if not latest_alarm_entries:
            continue

        copied_feature = dict(
            feature
        )

        copied_properties = dict(
            properties
        )

        copied_properties[
            "_alarm_entries"
        ] = latest_alarm_entries

        copied_properties[
            "_parameter_names"
        ] = extract_parameter_names(
            latest_alarm_entries
        )

        copied_properties[
            "_normalized_station_type"
        ] = normalize_station_type(
            copied_properties
        )

        copied_feature[
            "properties"
        ] = copied_properties

        alert_features.append(
            copied_feature
        )

    return alert_features


# ============================================================
# 11. แบ่งระดับสถานการณ์
# ============================================================

def get_severity_level(
    feature: dict[str, Any],
) -> str:
    properties = feature.get(
        "properties",
        {},
    )

    alarm_entries = properties.get(
        "_alarm_entries",
        [],
    )

    alarm_count = len(
        alarm_entries
    )

    if alarm_count >= 3:
        return "urgent"

    if alarm_count == 2:
        return "watch"

    return "follow"


def summarize_alerts(
    alert_features: list[dict[str, Any]],
    online_type_counts: dict[str, int],
) -> dict[str, Any]:
    station_keys = set()
    parameter_names = set()
    industry_zones = set()

    urgent_count = 0
    watch_count = 0
    follow_count = 0

    for feature in alert_features:
        properties = feature.get(
            "properties",
            {},
        )

        station_key = station_unique_key(
            properties
        )

        station_keys.add(
            station_key
        )

        industry_zones.add(
            get_industry_zone(
                properties
            )
        )

        for parameter in properties.get(
            "_parameter_names",
            [],
        ):
            parameter_names.add(
                parameter
            )

        severity = get_severity_level(
            feature
        )

        if severity == "urgent":
            urgent_count += 1

        elif severity == "watch":
            watch_count += 1

        else:
            follow_count += 1

    return {
        "station_count": len(
            station_keys
        ),
        "parameter_count": len(
            parameter_names
        ),
        "parameter_names": sorted(
            parameter_names
        ),
        "industry_zone_count": len(
            industry_zones
        ),
        "urgent_count": urgent_count,
        "watch_count": watch_count,
        "follow_count": follow_count,
        "online_total": online_type_counts.get(
            "total",
            0,
        ),
        "offline_total": online_type_counts.get(
            "offline",
            0,
        ),
        "station_total": online_type_counts.get(
            "all_total",
            0,
        ),
        "online_aqms": online_type_counts.get(
            "AQMs",
            0,
        ),
        "online_wqms": online_type_counts.get(
            "WQMs",
            0,
        ),
        "online_cems": online_type_counts.get(
            "CEMs",
            0,
        ),
    }


# ============================================================
# 12. ส่วนประกอบ Flex Message
# ============================================================

def flex_text(
    text: Any,
    size: str = "sm",
    color: str = COLOR_TEXT,
    weight: str = "regular",
    wrap: bool = True,
    flex: int | None = None,
    align: str | None = None,
    max_lines: int | None = None,
) -> dict[str, Any]:
    display_text = str(text)

    if len(display_text) > MAX_FLEX_TEXT_CHARS:
        display_text = (
            display_text[:MAX_FLEX_TEXT_CHARS - 1].rstrip()
            + "…"
        )

    component: dict[str, Any] = {
        "type": "text",
        "text": display_text,
        "size": size,
        "color": color,
        "weight": weight,
        "wrap": wrap,
    }

    if flex is not None:
        component["flex"] = flex

    if align is not None:
        component["align"] = align

    if max_lines is not None:
        component["maxLines"] = max_lines

    return component


def flex_separator(
    color: str = COLOR_DIVIDER,
    margin: str | None = None,
) -> dict[str, Any]:
    component: dict[str, Any] = {
        "type": "separator",
        "color": color,
    }

    if margin:
        component["margin"] = margin

    return component


def flex_button(
    label: str,
    uri: str,
    primary: bool = False,
) -> dict[str, Any]:
    button: dict[str, Any] = {
        "type": "button",
        "height": "sm",
        "action": {
            "type": "uri",
            "label": label,
            "uri": uri,
        },
    }

    if primary:
        button["style"] = "primary"
        button["color"] = COLOR_PRIMARY_DARK
    else:
        button["style"] = "secondary"

    return button


def icon_badge(
    icon: str,
    background_color: str,
    border_color: str,
    size: str = "md",
) -> dict[str, Any]:
    """แสดงไอคอนจากโฟลเดอร์ assets โดยไม่มีกรอบสี่เหลี่ยม"""
    icon_url = ICON_ASSET_URLS.get(icon, "")

    if icon_url:
        return {
            "type": "image",
            "url": icon_url,
            "size": "38px",
            "aspectMode": "fit",
            "aspectRatio": "1:1",
        }

    # สำรองไว้เฉพาะกรณีเพิ่มสัญลักษณ์ใหม่ที่ยังไม่มีไฟล์ใน assets
    return {
        "type": "box",
        "layout": "vertical",
        "width": "38px",
        "height": "38px",
        "justifyContent": "center",
        "alignItems": "center",
        "contents": [
            flex_text(
                icon,
                size=size,
                align="center",
                flex=0,
            ),
        ],
    }


def depth_panel(
    contents: list[dict[str, Any]],
    background_color: str = COLOR_WHITE,
    border_color: str = COLOR_BORDER,
    shadow_color: str = COLOR_DEPTH,
    padding: str = "11px",
    corner_radius: str = "6px",
    layout: str = "vertical",
    spacing: str | None = None,
    flex: int | None = None,
    margin: str | None = None,
    align_items: str | None = None,
) -> dict[str, Any]:
    """กรอบข้อมูลสะอาดตาแบบองค์กร โดยไม่ใช้เงาซ้อนหลายชั้น"""
    inner: dict[str, Any] = {
        "type": "box",
        "layout": layout,
        "paddingAll": padding,
        "backgroundColor": background_color,
        "borderColor": border_color,
        "borderWidth": "1px",
        "cornerRadius": corner_radius,
        "contents": contents,
    }

    if spacing:
        inner["spacing"] = spacing

    if align_items:
        inner["alignItems"] = align_items

    # Flex Message ไม่มี shadow จริง การใช้ชั้นสีซ้อนทำให้การ์ดดูหนาเกินไป
    # จึงใช้กรอบเส้นบางเพียงชั้นเดียว ให้ภาพรวมเรียบหรูและอ่านง่าย
    panel = inner

    if flex is not None:
        panel["flex"] = flex

    if margin:
        panel["margin"] = margin

    return panel


def status_banner(
    title: str,
    icon: str,
    title_color: str,
    background_color: str,
    border_color: str,
    shadow_color: str,
    description: str = "",
) -> dict[str, Any]:
    text_contents = [
        flex_text(
            title,
            size="lg",
            weight="bold",
            color=title_color,
            max_lines=3,
        ),
    ]

    if description:
        text_contents.append(
            flex_text(
                description,
                size="xs",
                color=COLOR_MUTED,
                max_lines=3,
            )
        )

    return depth_panel(
        [
            icon_badge(
                icon,
                COLOR_WHITE,
                border_color,
                size="lg",
            ),
            {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "margin": "md",
                "spacing": "xs",
                "contents": text_contents,
            },
        ],
        background_color=background_color,
        border_color=border_color,
        shadow_color=shadow_color,
        padding="12px",
        layout="horizontal",
        align_items="center",
    )


def data_timestamp_box(
    latest_update: datetime | None,
) -> dict[str, Any]:
    latest_text = (
        format_datetime_thai(latest_update)
        if latest_update is not None
        else "ไม่พบเวลาอัปเดต"
    )

    return depth_panel(
        [
            flex_text(
                "ข้อมูลล่าสุดจาก e-Monitoring",
                size="xs",
                color=COLOR_MUTED,
                weight="bold",
            ),
            flex_text(
                latest_text,
                size="sm",
                color=COLOR_PRIMARY_DARK,
                weight="bold",
            ),
            flex_text(
                f"จัดทำรายงานเมื่อ {report_time_text()}",
                size="xxs",
                color=COLOR_MUTED,
            ),
        ],
        background_color=COLOR_PRIMARY_PALE,
        border_color=COLOR_PRIMARY_BORDER,
        shadow_color=COLOR_DEPTH,
        padding="9px",
        corner_radius="5px",
        spacing="xs",
    )


def info_row(
    label: str,
    value: str,
    value_color: str = COLOR_TEXT,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "sm",
        "contents": [
            flex_text(
                label,
                size="sm",
                color=COLOR_MUTED,
                flex=5,
            ),
            flex_text(
                value,
                size="sm",
                color=value_color,
                weight="bold",
                flex=7,
                align="end",
            ),
        ],
    }


# ============================================================
# 13. Header ของการ์ด
# ============================================================

def card_header(
    subtitle: str,
    line_color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "0px",
        "backgroundColor": COLOR_SURFACE,
        "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "height": "4px",
                "backgroundColor": COLOR_PRIMARY_DARK,
                "contents": [
                    {
                        "type": "filler",
                    },
                ],
            },
            {
                "type": "box",
                "layout": "horizontal",
                "alignItems": "center",
                "paddingTop": "13px",
                "paddingBottom": "12px",
                "paddingStart": "16px",
                "paddingEnd": "16px",
                "contents": [
                    {
                        "type": "image",
                        "url": IEAT_LOGO_URL,
                        "size": "xs",
                        "aspectMode": "fit",
                        "flex": 2,
                    },
                    {
                        "type": "box",
                        "layout": "vertical",
                        "flex": 8,
                        "margin": "md",
                        "contents": [
                            flex_text(
                                "IEAT e-Monitoring",
                                size="xl",
                                weight="bold",
                                color=COLOR_PRIMARY_DARK,
                                max_lines=1,
                            ),
                            flex_text(
                                subtitle,
                                size="xs",
                                color=COLOR_MUTED,
                                max_lines=2,
                            ),
                        ],
                    },
                ],
            },
            {
                "type": "box",
                "layout": "vertical",
                "height": "2px",
                "backgroundColor": line_color,
                "contents": [
                    {
                        "type": "filler",
                    },
                ],
            },
        ],
    }


# ============================================================
# 14. กล่องตัวเลขภาพรวม
# ============================================================

def summary_number_box(
    number: int,
    label: str,
    number_color: str,
    background_color: str = COLOR_WHITE,
    border_color: str = COLOR_BORDER,
) -> dict[str, Any]:
    return depth_panel(
        [
            flex_text(
                str(number),
                size="xxl",
                color=number_color,
                weight="bold",
                align="center",
            ),
            flex_text(
                label,
                size="xs",
                color=COLOR_MUTED,
                align="center",
                max_lines=2,
            ),
        ],
        background_color=background_color,
        border_color=border_color,
        shadow_color=COLOR_DEPTH,
        padding="10px",
        corner_radius="6px",
        flex=1,
    )


def station_type_count_box(
    station_type: str,
    count: int,
    color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "sm",
        "paddingAll": "9px",
        "backgroundColor": COLOR_WHITE,
        "borderColor": COLOR_BORDER,
        "borderWidth": "1px",
        "cornerRadius": "5px",
        "contents": [
            flex_text(
                station_type,
                size="sm",
                weight="bold",
                color=color,
                flex=6,
            ),
            flex_text(
                f"{count} สถานี",
                size="sm",
                weight="bold",
                color=COLOR_TEXT,
                flex=4,
                align="end",
            ),
        ],
    }


def online_station_summary_box(
    online_type_counts: dict[str, Any],
) -> dict[str, Any]:
    type_breakdown = online_type_counts.get(
        "type_breakdown",
        {},
    )

    type_rows = []
    type_colors = {
        "AQMs": COLOR_GREEN,
        "WQMs": COLOR_PRIMARY,
        "CEMs": COLOR_BLUE,
        "Other": COLOR_MUTED,
    }
    type_backgrounds = {
        "AQMs": COLOR_GREEN_SOFT,
        "WQMs": COLOR_PRIMARY_SOFT,
        "CEMs": COLOR_BLUE_SOFT,
        "Other": "#F1EEF2",
    }
    type_borders = {
        "AQMs": COLOR_GREEN_BORDER,
        "WQMs": COLOR_PRIMARY_BORDER,
        "CEMs": COLOR_BLUE_BORDER,
        "Other": COLOR_BORDER,
    }
    type_icons = {
        "AQMs": ICON_AIR,
        "WQMs": ICON_WATER,
        "CEMs": ICON_CEMS,
        "Other": ICON_OTHER,
    }

    for type_key, type_label in (
        ("AQMs", "AQMs"),
        ("WQMs", "WQMs"),
        ("CEMs", "CEMs"),
        ("Other", "ประเภทอื่น"),
    ):
        values = type_breakdown.get(type_key, {})
        type_rows.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "xs",
            "paddingTop": "6px",
            "paddingBottom": "6px",
            "paddingStart": "8px",
            "paddingEnd": "8px",
            "backgroundColor": type_backgrounds[type_key],
            "borderColor": type_borders[type_key],
            "borderWidth": "1px",
            "cornerRadius": "8px",
            "contents": [
                flex_text(
                type_label,
                    size="sm",
                    weight="bold",
                    color=type_colors[type_key],
                    flex=4,
                ),
                flex_text(
                    str(values.get("total", 0)),
                    size="sm",
                    weight="bold",
                    align="center",
                    flex=2,
                ),
                flex_text(
                    str(values.get("online", 0)),
                    size="sm",
                    weight="bold",
                    color=COLOR_GREEN_DARK,
                    align="center",
                    flex=2,
                ),
                flex_text(
                    str(values.get("offline", 0)),
                    size="sm",
                    weight="bold",
                    color=COLOR_RED_DARK,
                    align="center",
                    flex=2,
                ),
            ],
        })

    return depth_panel(
        [
            flex_text(
                "สรุปสถานะสถานีตรวจวัด",
                size="md",
                weight="bold",
                color=COLOR_PRIMARY_DARK,
            ),
            {
                "type": "box",
                "layout": "horizontal",
                "spacing": "sm",
                "contents": [
                    summary_number_box(
                        online_type_counts.get("all_total", 0),
                        "ทั้งหมด",
                        COLOR_PRIMARY,
                        COLOR_PRIMARY_SOFT,
                        COLOR_PRIMARY_BORDER,
                    ),
                    summary_number_box(
                        online_type_counts.get("total", 0),
                        "ONLINE",
                        COLOR_GREEN_DARK,
                        COLOR_GREEN_SOFT,
                        COLOR_GREEN_BORDER,
                    ),
                    summary_number_box(
                        online_type_counts.get("offline", 0),
                        "OFFLINE",
                        COLOR_RED_DARK,
                        COLOR_RED_SOFT,
                        "#EAB3B8",
                    ),
                ],
            },
            flex_separator(),
            {
                "type": "box",
                "layout": "horizontal",
                "paddingBottom": "3px",
                "contents": [
                    flex_text(
                        "ประเภท (Type)",
                        size="xs",
                        weight="bold",
                        color=COLOR_MUTED,
                        flex=4,
                    ),
                    flex_text(
                        "ทั้งหมด",
                        size="xs",
                        weight="bold",
                        color=COLOR_MUTED,
                        align="center",
                        flex=2,
                    ),
                    flex_text(
                        "ONLINE",
                        size="xs",
                        weight="bold",
                        color=COLOR_GREEN_DARK,
                        align="center",
                        flex=2,
                    ),
                    flex_text(
                        "OFFLINE",
                        size="xs",
                        weight="bold",
                        color=COLOR_RED_DARK,
                        align="center",
                        flex=2,
                    ),
                ],
            },
            *type_rows,
        ],
        background_color=COLOR_SURFACE,
        border_color=COLOR_PRIMARY_BORDER,
        shadow_color=COLOR_DEPTH_DARK,
        padding="12px",
        corner_radius="14px",
        spacing="sm",
    )


def severity_box(
    title: str,
    description: str,
    count: int,
    icon: str,
    border_color: str,
    background_color: str,
    title_color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "paddingAll": "12px",
        "backgroundColor": background_color,
        "borderColor": border_color,
        "borderWidth": "2px",
        "cornerRadius": "10px",
        "alignItems": "center",
        "contents": [
            icon_badge(
                icon,
                COLOR_WHITE,
                border_color,
                size="md",
            ),
            {
                "type": "box",
                "layout": "vertical",
                "flex": 7,
                "margin": "md",
                "contents": [
                    flex_text(
                        title,
                        size="lg",
                        color=title_color,
                        weight="bold",
                    ),
                    flex_text(
                        description,
                        size="sm",
                        color=COLOR_MUTED,
                        max_lines=3,
                    ),
                ],
            },
            flex_text(
                f"{count} สถานี",
                size="md",
                color=title_color,
                weight="bold",
                flex=4,
                align="end",
            ),
        ],
    }


# ============================================================
# 15. การ์ดสรุปเมื่อพบ Alarm
# ============================================================

def build_alert_summary_bubble(
    alert_features: list[dict[str, Any]],
    online_type_counts: dict[str, int],
    latest_update: datetime | None = None,
) -> dict[str, Any]:
    summary = summarize_alerts(
        alert_features,
        online_type_counts,
    )

    return {
        "type": "bubble",
        "size": "giga",

        "header": card_header(
            "สรุปสถานการณ์ e-Monitoring",
            COLOR_RED,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": [
                status_banner(
                    "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน",
                    ICON_ALERT,
                    COLOR_RED_DARK,
                    COLOR_RED_SOFT,
                    COLOR_RED,
                    "#E6A5AD",
                    "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์",
                ),

                {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "sm",
                    "contents": [
                        summary_number_box(
                            summary["station_count"],
                            "สถานีแจ้งเตือน",
                            COLOR_PRIMARY,
                            COLOR_PRIMARY_SOFT,
                            COLOR_PRIMARY_BORDER,
                        ),
                        summary_number_box(
                            summary["parameter_count"],
                            "พารามิเตอร์",
                            COLOR_GREEN,
                            COLOR_GREEN_SOFT,
                            COLOR_GREEN_BORDER,
                        ),
                        summary_number_box(
                            summary[
                                "industry_zone_count"
                            ],
                            "นิคมฯ",
                            COLOR_YELLOW_DARK,
                            COLOR_YELLOW_SOFT,
                            "#E5C96F",
                        ),
                    ],
                },

                depth_panel(
                    [
                        flex_text(
                            "พารามิเตอร์ที่เกินค่ามาตรฐาน",
                            size="xs",
                            weight="bold",
                            color=COLOR_MUTED,
                        ),
                        flex_text(
                            ", ".join(summary["parameter_names"])
                            if summary["parameter_names"]
                            else "พารามิเตอร์แจ้งเตือน",
                            size="md",
                            weight="bold",
                            color=COLOR_RED_DARK,
                            max_lines=3,
                        ),
                    ],
                    background_color=COLOR_PRIMARY_PALE,
                    border_color=COLOR_PRIMARY_BORDER,
                    shadow_color=COLOR_DEPTH,
                    padding="11px",
                    corner_radius="14px",
                    spacing="xs",
                ),

                online_station_summary_box(
                    online_type_counts
                ),

                flex_text(
                    "ระดับสถานการณ์",
                    size="md",
                    weight="bold",
                    color=COLOR_TEXT,
                ),
                severity_box(
                    "เกินค่ามาตรฐาน",
                    "มีรายการแจ้งเตือนตั้งแต่ 3 รายการขึ้นไป",
                    summary["urgent_count"],
                    ICON_ALERT,
                    COLOR_RED,
                    COLOR_RED_SOFT,
                    COLOR_RED_DARK,
                ),
                severity_box(
                    "เฝ้าระวัง",
                    "มีรายการแจ้งเตือน 2 รายการ",
                    summary["watch_count"],
                    ICON_WATCH,
                    COLOR_YELLOW,
                    COLOR_YELLOW_SOFT,
                    COLOR_YELLOW_DARK,
                ),
                severity_box(
                    "ติดตามสถานการณ์",
                    "มีรายการแจ้งเตือน 1 รายการ",
                    summary["follow_count"],
                    ICON_NORMAL,
                    COLOR_GREEN,
                    COLOR_GREEN_SOFT,
                    COLOR_GREEN_DARK,
                ),

                data_timestamp_box(latest_update),
            ],
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "10px",
            "backgroundColor": COLOR_PRIMARY_PALE,
            "borderColor": COLOR_PRIMARY_BORDER,
            "borderWidth": "1px",
            "contents": [
                flex_button(
                    "เปิดระบบ GIS",
                    ARCGIS_DASHBOARD_URL,
                    primary=True,
                ),
            ],
        },
    }


# ============================================================
# 16. การ์ดสรุปเมื่อไม่พบ Alarm
# ============================================================

def build_normal_summary_bubble(
    online_type_counts: dict[str, int],
    latest_update: datetime | None = None,
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "giga",

        "header": card_header(
            "สรุปสถานการณ์ e-Monitoring",
            COLOR_GREEN,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": [
                status_banner(
                    "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน",
                    ICON_NORMAL,
                    COLOR_GREEN_DARK,
                    COLOR_GREEN_SOFT,
                    COLOR_GREEN,
                    COLOR_GREEN_BORDER,
                    "ระบบตรวจสอบข้อมูลจากสถานี ONLINE เรียบร้อยแล้ว",
                ),

                online_station_summary_box(
                    online_type_counts
                ),

                data_timestamp_box(latest_update),
            ],
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "10px",
            "backgroundColor": COLOR_PRIMARY_PALE,
            "borderColor": COLOR_PRIMARY_BORDER,
            "borderWidth": "1px",
            "contents": [
                flex_button(
                    "เปิดระบบ GIS",
                    ARCGIS_DASHBOARD_URL,
                    primary=True,
                ),
            ],
        },
    }


def build_no_current_data_summary_bubble(
    online_type_counts: dict[str, int],
    latest_update: datetime | None = None,
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "giga",
        "header": card_header(
            "สรุปสถานการณ์ e-Monitoring",
            COLOR_YELLOW,
        ),
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": [
                status_banner(
                    "ยังไม่มีสถานี ONLINE",
                    ICON_WATCH,
                    COLOR_YELLOW_DARK,
                    COLOR_YELLOW_SOFT,
                    COLOR_YELLOW,
                    "#E5C96F",
                    "ระบบยังไม่มีข้อมูลสถานี ONLINE สำหรับตรวจสอบ Alarm",
                ),
                online_station_summary_box(online_type_counts),
                data_timestamp_box(latest_update),
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "10px",
            "backgroundColor": COLOR_PRIMARY_PALE,
            "borderColor": COLOR_PRIMARY_BORDER,
            "borderWidth": "1px",
            "contents": [
                flex_button(
                    "เปิดระบบ GIS",
                    ARCGIS_DASHBOARD_URL,
                    primary=True,
                ),
            ],
        },
    }


# ============================================================
# 17. กล่องรายละเอียด Alarm
# ============================================================

def alarm_entry_box(
    alarm_entry: str,
) -> dict[str, Any]:
    parameter_name = (
        extract_primary_parameter_name(
            alarm_entry
        )
    )

    detail_text = remove_alarm_datetime(
        alarm_entry
    )

    time_text = alarm_time_text(
        alarm_entry
    )

    return depth_panel(
        [
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    flex_text(
                        parameter_name,
                        size="md",
                        weight="bold",
                        color=COLOR_RED_DARK,
                        flex=7,
                    ),
                    flex_text(
                        time_text,
                        size="xs",
                        color=COLOR_MUTED,
                        flex=4,
                        align="end",
                    ),
                ],
            },
            flex_text(
                detail_text,
                size="sm",
                color=COLOR_TEXT,
                max_lines=5,
            ),
        ],
        background_color=COLOR_SURFACE,
        border_color="#EAB3B8",
        shadow_color="#E4C4C8",
        padding="10px",
        corner_radius="14px",
        spacing="xs",
        margin="sm",
    )


# ============================================================
# 18. การ์ดรายละเอียดแต่ละสถานี
# ============================================================

def build_alert_detail_bubble(
    feature: dict[str, Any],
) -> dict[str, Any]:
    properties = feature.get(
        "properties",
        {},
    )

    station_name = get_station_name(
        properties
    )

    industry_zone = get_industry_zone(
        properties
    )

    station_type = normalize_station_type(
        properties
    )

    station_comment = get_station_comment(
        properties
    )

    last_update = format_datetime_thai(
        properties.get("LastUpdate")
    )

    alarm_entries = properties.get(
        "_alarm_entries",
        [],
    )

    visible_entries = alarm_entries[
        :MAX_ALARM_ENTRIES_PER_STATION
    ]

    severity = get_severity_level(
        feature
    )

    severity_text = {
        "urgent": "เกินค่ามาตรฐาน",
        "watch": "เฝ้าระวัง",
        "follow": "ติดตามสถานการณ์",
    }.get(
        severity,
        "ติดตามสถานการณ์",
    )

    severity_color = {
        "urgent": COLOR_RED,
        "watch": COLOR_YELLOW,
        "follow": COLOR_GREEN,
    }.get(
        severity,
        COLOR_RED,
    )

    severity_icon = {
        "urgent": ICON_ALERT,
        "watch": ICON_WATCH,
        "follow": ICON_NORMAL,
    }.get(
        severity,
        ICON_ALERT,
    )

    severity_background = {
        "urgent": COLOR_RED_SOFT,
        "watch": COLOR_YELLOW_SOFT,
        "follow": COLOR_GREEN_SOFT,
    }.get(
        severity,
        COLOR_RED_SOFT,
    )

    body_contents: list[
        dict[str, Any]
    ] = [
        {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "center",
            "contents": [
                icon_badge(
                    severity_icon,
                    severity_background,
                    severity_color,
                    size="lg",
                ),
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 8,
                    "margin": "md",
                    "contents": [
                        flex_text(
                            industry_zone,
                            size="sm",
                            weight="bold",
                            color=COLOR_TEXT,
                            max_lines=2,
                        ),
                        flex_text(
                            station_name,
                            size="lg",
                            weight="bold",
                            color=COLOR_PRIMARY,
                            max_lines=2,
                        ),
                    ],
                },
            ],
        },

        flex_text(
            f"ข้อมูลล่าสุด ณ {last_update}",
            size="xs",
            color=COLOR_MUTED,
        ),

        {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
                depth_panel(
                    [
                        flex_text(
                            "สถานะสถานี",
                            size="xs",
                            color=COLOR_MUTED,
                        ),
                        flex_text(
                            "ONLINE",
                            size="sm",
                            weight="bold",
                            color=COLOR_GREEN_DARK,
                        ),
                    ],
                    background_color=COLOR_GREEN_SOFT,
                    border_color=COLOR_GREEN_BORDER,
                    shadow_color=COLOR_GREEN_BORDER,
                    padding="9px",
                    corner_radius="10px",
                    flex=1,
                ),
                depth_panel(
                    [
                        flex_text(
                            "ประเภทการตรวจวัด",
                            size="xs",
                            color=COLOR_MUTED,
                        ),
                        flex_text(
                            station_type,
                            size="sm",
                            weight="bold",
                            color=COLOR_PRIMARY_DARK,
                        ),
                    ],
                    background_color=COLOR_PRIMARY_SOFT,
                    border_color=COLOR_PRIMARY_BORDER,
                    shadow_color=COLOR_PRIMARY_BORDER,
                    padding="9px",
                    corner_radius="10px",
                    flex=1,
                ),
            ],
        },

        depth_panel(
            [
                flex_text(
                    "ค่าพารามิเตอร์ที่เกินค่ามาตรฐาน",
                    size="sm",
                    weight="bold",
                    color=COLOR_RED_DARK,
                ),
            ],
            background_color=severity_background,
            border_color=severity_color,
            shadow_color=COLOR_DEPTH_DARK,
            padding="9px",
            corner_radius="12px",
        ),
    ]

    for alarm_entry in visible_entries:
        body_contents.append(
            alarm_entry_box(
                alarm_entry
            )
        )

    if len(alarm_entries) > len(
        visible_entries
    ):
        remaining_count = (
            len(alarm_entries)
            - len(visible_entries)
        )

        body_contents.append(
            flex_text(
                (
                    "มีรายการแจ้งเตือนเพิ่มเติม "
                    f"{remaining_count} รายการ "
                    "โปรดตรวจสอบในระบบ GIS"
                ),
                size="xs",
                color=COLOR_MUTED,
                align="center",
            )
        )

    body_contents.append(depth_panel(
        [
            flex_text(
                "สาเหตุ / การติดตามผล",
                size="sm",
                weight="bold",
                color=COLOR_YELLOW_DARK,
            ),
            flex_text(
                station_comment,
                size="sm",
                color=COLOR_TEXT,
                max_lines=6,
            ),
        ],
        background_color=COLOR_YELLOW_SOFT,
        border_color=COLOR_YELLOW,
        shadow_color="#E5C96F",
        padding="11px",
        corner_radius="12px",
        spacing="xs",
    ))

    return {
        "type": "bubble",
        "size": "giga",

        "header": card_header(
            f"{station_type} · {severity_text}",
            severity_color,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": body_contents,
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "8px",
            "backgroundColor": COLOR_PRIMARY_PALE,
            "borderColor": COLOR_PRIMARY_BORDER,
            "borderWidth": "1px",
            "contents": [
                flex_button(
                    "ตำแหน่งสถานี",
                    station_map_url(feature),
                    primary=True,
                ),
            ],
        },
    }


# ============================================================
# 19. ส่ง LINE Broadcast
# ============================================================

def send_line_flex(
    alt_text: str,
    contents: dict[str, Any],
) -> None:
    if not LINE_CHANNEL_ACCESS_TOKEN:
        raise RuntimeError(
            "ไม่พบ LINE_CHANNEL_ACCESS_TOKEN"
        )

    payload = {
        "messages": [
            {
                "type": "flex",
                "altText": alt_text[:400],
                "contents": contents,
            }
        ],
    }

    request_body = json.dumps(
        payload,
        ensure_ascii=False,
    ).encode("utf-8")

    request = urllib.request.Request(
        LINE_BROADCAST_URL,
        data=request_body,
        method="POST",
        headers={
            "Authorization": (
                f"Bearer "
                f"{LINE_CHANNEL_ACCESS_TOKEN}"
            ),
            "Content-Type": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=REQUEST_TIMEOUT_SECONDS,
        ) as response:

            print(
                "ส่ง LINE Broadcast สำเร็จ "
                f"HTTP {response.status}"
            )

    except urllib.error.HTTPError as error:
        error_body = (
            error.read()
            .decode(
                "utf-8",
                errors="replace",
            )
        )

        raise RuntimeError(
            f"LINE Broadcast API "
            f"HTTP {error.code}: "
            f"{error_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อ "
            "LINE Broadcast API ได้: "
            f"{error.reason}"
        ) from error


# ============================================================
# 20. แบ่งรายการเป็นชุด
# ============================================================

def chunk_list(
    items: list[Any],
    chunk_size: int,
) -> list[list[Any]]:
    if chunk_size <= 0:
        raise ValueError(
            "chunk_size ต้องมากกว่า 0"
        )

    return [
        items[index:index + chunk_size]
        for index in range(
            0,
            len(items),
            chunk_size,
        )
    ]


def carousel_json_size_bytes(
    bubbles: list[dict[str, Any]],
) -> int:
    """คำนวณขนาด JSON จริงแบบ UTF-8 ของ Flex Carousel"""
    carousel = {
        "type": "carousel",
        "contents": bubbles,
    }

    return len(
        json.dumps(
            carousel,
            ensure_ascii=False,
            separators=(",", ":"),
        ).encode("utf-8")
    )


def build_carousel_batches(
    alert_features: list[dict[str, Any]],
) -> list[list[dict[str, Any]]]:
    """แบ่ง Bubble ตามจำนวนและขนาด JSON เพื่อไม่ให้เกินข้อจำกัด LINE"""
    batches: list[list[dict[str, Any]]] = []
    current_batch: list[dict[str, Any]] = []

    for feature in alert_features:
        bubble = build_alert_detail_bubble(feature)
        candidate_batch = current_batch + [bubble]

        exceeds_count = (
            len(candidate_batch)
            > MAX_BUBBLES_PER_CAROUSEL
        )
        exceeds_size = (
            carousel_json_size_bytes(candidate_batch)
            > MAX_CAROUSEL_JSON_BYTES
        )

        if current_batch and (exceeds_count or exceeds_size):
            batches.append(current_batch)
            current_batch = [bubble]
        else:
            current_batch = candidate_batch

        single_size = carousel_json_size_bytes([bubble])
        if single_size > MAX_CAROUSEL_JSON_BYTES:
            raise RuntimeError(
                "การ์ดรายละเอียดของสถานีมีขนาดใหญ่เกินข้อจำกัด LINE: "
                f"{single_size:,} bytes"
            )

    if current_batch:
        batches.append(current_batch)

    return batches


# ============================================================
# 21. ส่งรายละเอียดสถานีแบบ Carousel
# ============================================================

def send_alert_detail_carousels(
    alert_features: list[dict[str, Any]],
) -> None:
    """ส่งรายละเอียดแยกตามประเภท AQMs, WQMs, CEMs ไม่ปะปนกันใน Carousel เดียว"""
    if not alert_features:
        print(
            "ไม่มีรายละเอียดสถานีที่ต้องส่ง"
        )
        return

    features_by_type: dict[str, list[dict[str, Any]]] = {
        "AQMs": [],
        "WQMs": [],
        "CEMs": [],
        "อื่น ๆ": [],
    }

    for feature in alert_features:
        station_type = normalize_station_type(
            feature.get("properties", {})
        )
        group_name = (
            station_type
            if station_type in {"AQMs", "WQMs", "CEMs"}
            else "อื่น ๆ"
        )
        features_by_type[group_name].append(feature)

    # 1 ประเภท = 1 ชุด Carousel (หากเกินข้อจำกัด LINE จะแบ่งเป็นชุดย่อย)
    for group_name in ("AQMs", "WQMs", "CEMs", "อื่น ๆ"):
        group_features = features_by_type[group_name]
        if not group_features:
            continue

        batches = build_carousel_batches(group_features)
        total_batches = len(batches)

        for batch_number, bubbles in enumerate(batches, start=1):
            carousel = {
                "type": "carousel",
                "contents": bubbles,
            }
            carousel_size = carousel_json_size_bytes(bubbles)

            alt_text = (
                f"รายละเอียดแจ้งเตือน {group_name} "
                f"{len(group_features)} สถานี"
            )
            if total_batches > 1:
                alt_text += f" ชุดที่ {batch_number}/{total_batches}"

            print(
                f"กำลังส่งรายละเอียด {group_name} "
                f"ชุดที่ {batch_number}/{total_batches} "
                f"จำนวน {len(bubbles)} สถานี "
                f"ขนาด {carousel_size:,} bytes"
            )
            send_line_flex(alt_text, carousel)

            if batch_number < total_batches:
                time.sleep(1)


# ============================================================
# 22. สร้างข้อมูลสำหรับหน้า "สถานการณ์ล่าสุด"
# ============================================================

def write_status_json(
    alert_features: list[dict[str, Any]],
    online_type_counts: dict[str, Any],
    has_current_data: bool,
    latest_online_update: datetime | None = None,
    stale_online_count: int = 0,
) -> None:
    """เขียนข้อมูลล่าสุดให้หน้า GitHub Pages อ่านจาก docs/status.json"""
    station_items: list[dict[str, Any]] = []
    parameter_names: set[str] = set()
    estate_names: set[str] = set()

    urgent_count = 0
    watch_count = 0
    follow_count = 0

    severity_texts = {
        "urgent": "เกินค่ามาตรฐาน",
        "watch": "เฝ้าระวัง",
        "follow": "ติดตามสถานการณ์",
    }

    for feature in alert_features:
        properties = feature.get("properties", {})
        if not isinstance(properties, dict):
            continue

        entries = properties.get("_alarm_entries", [])
        names = properties.get("_parameter_names", [])
        severity = get_severity_level(feature)
        estate = get_industry_zone(properties)

        if severity == "urgent":
            urgent_count += 1
        elif severity == "watch":
            watch_count += 1
        else:
            follow_count += 1

        estate_names.add(estate)
        parameter_names.update(str(name) for name in names)

        detected_times = [
            alarm_time_text(entry)
            for entry in entries
            if alarm_time_text(entry)
        ]

        station_items.append({
            "estate": estate,
            "station_name": get_station_name(properties),
            "station_type": normalize_station_type(properties),
            "status": clean_text(properties.get("Status"), "-").upper(),
            "parameter": ", ".join(names) if names else "พารามิเตอร์แจ้งเตือน",
            "parameter_alarm": entries,
            "value": " | ".join(
                remove_alarm_datetime(entry) for entry in entries
            ),
            "comment": get_station_comment(properties),
            "detected_at": ", ".join(detected_times) or "-",
            "severity": severity_texts.get(
                severity,
                "ติดตามสถานการณ์",
            ),
            "map_url": station_map_url(feature),
            "gis_url": ARCGIS_DASHBOARD_URL,
        })

    has_alert = bool(station_items)

    status = (
        "alert"
        if has_alert
        else "normal"
        if has_current_data
        else "watch"
    )

    status_data = {
        "status": status,
        "status_text": (
            "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
            if has_alert
            else "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        ),
        "description": (
            "โปรดตรวจสอบรายละเอียดของสถานีและติดตามสถานการณ์"
            if has_alert
            else "ตรวจสอบข้อมูลของ feed ล่าสุดแล้ว"
            if has_current_data
            else "ยังไม่มีสถานี ONLINE สำหรับตรวจสอบสถานการณ์"
        ),
        "updated_at": report_time_text(),
        "data_last_update": (
            latest_online_update.isoformat()
            if latest_online_update is not None
            else None
        ),
        "data_is_today": (
            latest_online_update.date() == now_thailand().date()
            if latest_online_update is not None
            else False
        ),
        "stale_online_total": stale_online_count,
        "online_total": online_type_counts.get("total", 0),
        "offline_total": online_type_counts.get("offline", 0),
        "station_total": online_type_counts.get("all_total", 0),
        "online_aqms": online_type_counts.get("AQMs", 0),
        "online_wqms": online_type_counts.get("WQMs", 0),
        "online_cems": online_type_counts.get("CEMs", 0),
        "station_types": online_type_counts.get("type_breakdown", {}),
        "alert_station_count": len(station_items),
        "parameter_count": len(parameter_names),
        "estate_count": len(estate_names),
        "urgent_count": urgent_count,
        "watch_count": watch_count,
        "follow_count": follow_count,
        "stations": station_items,
    }

    output_path = Path("docs/status.json")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(status_data, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(f"อัปเดตข้อมูลหน้าเว็บแล้ว: {output_path}")


# ============================================================
# 23. โปรแกรมหลัก
# ============================================================

def main() -> None:
    print("=" * 80)
    print("IEAT e-Monitoring LINE Alert")
    print("=" * 80)

    print(
        "เวลาประเทศไทย:",
        now_thailand().strftime(
            "%Y-%m-%d %H:%M:%S"
        ),
    )

    print(
        "กำลังดาวน์โหลดข้อมูล "
        "e-Monitoring..."
    )

    data = download_data()

    features = get_features(
        data
    )

    print(
        "Feature ทั้งหมด:",
        len(features),
    )

    if not features:
        raise RuntimeError(
            "ไม่พบ Feature จากข้อมูล "
            "e-Monitoring"
        )

    online_type_counts = (
        count_online_station_types(
            features
        )
    )

    (
        online_features,
        online_count,
        stale_online_count,
    ) = filter_current_online_features(
        features
    )

    latest_online_update = get_latest_online_update(
        online_features
    )

    alarm_reference_date = (
        latest_online_update.date()
        if latest_online_update is not None
        else None
    )

    alert_features = (
        filter_alert_features(
            online_features,
            alarm_reference_date,
        )
    )

    # อัปเดตข้อมูลหน้า "สถานการณ์ล่าสุด" ทุกครั้งที่ Workflow ทำงาน
    write_status_json(
        alert_features,
        online_type_counts,
        has_current_data=bool(online_features),
        latest_online_update=latest_online_update,
        stale_online_count=stale_online_count,
    )

    print()
    print("=" * 80)
    print("สรุปผลการตรวจสอบ")
    print("=" * 80)

    print(
        "สถานี ONLINE ทั้งหมด:",
        online_type_counts.get(
            "total",
            0,
        ),
    )

    print(
        "สถานี OFFLINE ทั้งหมด:",
        online_type_counts.get("offline", 0),
    )

    print(
        "สถานีทั้งหมด:",
        online_type_counts.get("all_total", 0),
    )

    print(
        "AQMs ONLINE:",
        online_type_counts.get(
            "AQMs",
            0,
        ),
    )

    print(
        "WQMs ONLINE:",
        online_type_counts.get(
            "WQMs",
            0,
        ),
    )

    print(
        "CEMs ONLINE:",
        online_type_counts.get(
            "CEMs",
            0,
        ),
    )

    print(
        "ประเภทอื่น ONLINE:",
        online_type_counts.get(
            "Other",
            0,
        ),
    )

    print(
        "ONLINE แต่ข้อมูลไม่ใช่วันนี้:",
        stale_online_count,
    )

    print(
        "สถานี ONLINE ที่นำมาตรวจ Alarm:",
        online_count,
    )

    print(
        "สถานีที่มี ParameterAlram ของวันที่ล่าสุดใน feed:",
        len(alert_features),
    )

    print(
        "LastUpdate ล่าสุด:",
        latest_online_update.isoformat()
        if latest_online_update is not None
        else "ไม่พบ",
    )

    print("=" * 80)

    # ส่งรายงานทุกครั้ง โดยตรวจ Alarm จากวันที่ล่าสุดที่มีอยู่จริงใน feed
    if alert_features:
        print(
            "ส่งการ์ดสรุปสถานการณ์"
        )

        summary_bubble = (
            build_alert_summary_bubble(
                alert_features,
                online_type_counts,
                latest_online_update,
            )
        )

        send_line_flex(
            (
                "สรุปสถานการณ์ e-Monitoring "
                f"พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน "
                f"{len(alert_features)} สถานี"
            ),
            summary_bubble,
        )

        time.sleep(1)

        print(
            "ส่งการ์ดรายละเอียดสถานี"
        )

        send_alert_detail_carousels(
            alert_features
        )

    elif online_features:
        print("ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน ส่งการ์ดสรุปสถานการณ์")
        send_line_flex(
            "e-Monitoring: ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน",
            build_normal_summary_bubble(
                online_type_counts,
                latest_online_update,
            ),
        )

    else:
        print("ยังไม่มีสถานี ONLINE ส่งการ์ดสรุปสถานการณ์")
        send_line_flex(
            "e-Monitoring: ยังไม่มีสถานี ONLINE",
            build_no_current_data_summary_bubble(
                online_type_counts,
                latest_online_update,
            ),
        )

    print("ส่งรายงานประจำรอบเข้า LINE เรียบร้อย")


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            "ERROR:",
            str(error),
        )

        sys.exit(1)
