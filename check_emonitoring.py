import json
import os
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
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

# จำนวนรายการ Alarm สูงสุดที่แสดงต่อสถานี
MAX_ALARM_ENTRIES_PER_STATION = 6

# ไฟล์จำสถานะ เพื่อไม่ส่งข้อความซ้ำทุก 15 นาที
STATE_FILE = os.getenv("ALERT_STATE_FILE", "alert_state.json")

# แจ้งเตือนซ้ำเมื่อค่ายังเกินต่อเนื่องครบ 60 นาที
REPEAT_ALERT_MINUTES = 60

# Alarm ต้องมีเวลาล่าสุดไม่เกิน 45 นาที จึงถือว่ายังเกิดอยู่
# (Workflow ควรตรวจทุก 15 นาที)
ACTIVE_ALARM_MAX_AGE_MINUTES = 45


# ============================================================
# 2. รูปภาพที่ใช้ใน LINE Flex Message
# ============================================================

ASSET_BASE_URL = (
    "https://THANAWAN-KI.github.io/"
    "ieat-emonitoring-line-alert/assets"
)

IEAT_LOGO_URL = (
    f"{ASSET_BASE_URL}/ieat_logo.png"
)

ALERT_RED_ICON_URL = (
    f"{ASSET_BASE_URL}/alert_red.png"
)

NORMAL_GREEN_ICON_URL = (
    f"{ASSET_BASE_URL}/normal_green.png"
)

WATCH_YELLOW_ICON_URL = (
    f"{ASSET_BASE_URL}/watch_yellow.png"
)


# ============================================================
# 3. ธีมสี กนอ.
# ============================================================

COLOR_PRIMARY = "#4E2A84"
COLOR_PRIMARY_DARK = "#35205A"

COLOR_RED = "#B32632"
COLOR_RED_DARK = "#8E1E28"
COLOR_RED_SOFT = "#FFF3F4"

COLOR_YELLOW = "#C99800"
COLOR_YELLOW_DARK = "#9B7600"
COLOR_YELLOW_SOFT = "#FFF9DF"

COLOR_GREEN = "#2F7D4A"
COLOR_GREEN_DARK = "#23613A"
COLOR_GREEN_SOFT = "#F1F8F3"

COLOR_BLUE = "#356CA5"

COLOR_TEXT = "#20242C"
COLOR_MUTED = "#70757F"
COLOR_BORDER = "#E2E5EA"
COLOR_DIVIDER = "#ECEEF2"
COLOR_BACKGROUND = "#F6F7F9"
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

    date_formats = [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M",
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
            r"(?=\d{2,4}-\d{2}-\d{2}"
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
            r"(\d{2,4}-\d{2}-\d{2}"
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


def get_today_alarm_entries(
    value: Any,
) -> list[str]:
    today = now_thailand().date()

    today_entries = []

    for entry in split_parameter_alarm(
        value
    ):
        alarm_datetime = (
            get_alarm_datetime(entry)
        )

        if alarm_datetime is None:
            print(
                "ข้าม Alarm เนื่องจาก "
                "อ่านวันที่ไม่ได้:",
                entry,
            )
            continue

        if alarm_datetime.date() != today:
            continue

        today_entries.append(
            entry
        )

    return today_entries


def get_active_alarm_entries(value: Any) -> list[str]:
    """คืนเฉพาะ Alarm ล่าสุดที่ยังอยู่ในช่วงเฝ้าระวัง"""
    current = now_thailand()
    active_entries = []

    for entry in get_today_alarm_entries(value):
        alarm_datetime = get_alarm_datetime(entry)
        if alarm_datetime is None:
            continue

        age = current - alarm_datetime
        if timedelta(0) <= age <= timedelta(
            minutes=ACTIVE_ALARM_MAX_AGE_MINUTES
        ):
            active_entries.append(entry)

    return active_entries


# ============================================================
# 8. จัดรูปแบบรายละเอียด Alarm
# ============================================================

def remove_alarm_datetime(
    alarm_entry: str,
) -> str:
    cleaned = re.sub(
        (
            r"^\s*"
            r"\d{2,4}-\d{2}-\d{2}"
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


def count_online_station_types(
    features: list[dict[str, Any]],
) -> dict[str, int]:
    counts = {
        "AQMs": 0,
        "WQMs": 0,
        "CEMs": 0,
        "Other": 0,
        "total": 0,
    }

    seen_stations = set()

    for feature in features:
        properties = feature.get(
            "properties",
            {},
        )

        if not isinstance(
            properties,
            dict,
        ):
            continue

        if not is_valid_station(
            properties
        ):
            continue

        if not is_online(
            properties.get("Status")
        ):
            continue

        unique_key = station_unique_key(
            properties
        )

        if unique_key in seen_stations:
            continue

        seen_stations.add(
            unique_key
        )

        station_type = normalize_station_type(
            properties
        )

        if station_type == "AQMs":
            counts["AQMs"] += 1

        elif station_type == "WQMs":
            counts["WQMs"] += 1

        elif station_type == "CEMs":
            counts["CEMs"] += 1

        else:
            counts["Other"] += 1

    counts["total"] = len(
        seen_stations
    )

    return counts


def filter_current_online_features(
    features: list[dict[str, Any]],
) -> tuple[
    list[dict[str, Any]],
    int,
    int,
]:
    current_features = []

    online_station_keys = set()
    stale_station_keys = set()
    current_station_keys = set()

    for feature in features:
        properties = feature.get(
            "properties",
            {},
        )

        if not isinstance(
            properties,
            dict,
        ):
            continue

        if not is_valid_station(
            properties
        ):
            continue

        if not is_online(
            properties.get("Status")
        ):
            continue

        unique_key = station_unique_key(
            properties
        )

        online_station_keys.add(
            unique_key
        )

        if not is_today(
            properties.get("LastUpdate")
        ):
            stale_station_keys.add(
                unique_key
            )
            continue

        if unique_key in current_station_keys:
            continue

        current_station_keys.add(
            unique_key
        )

        current_features.append(
            feature
        )

    return (
        current_features,
        len(online_station_keys),
        len(stale_station_keys),
    )


def filter_alert_features(
    current_features: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    alert_features = []

    for feature in current_features:
        properties = feature.get(
            "properties",
            {},
        )

        parameter_alarm = properties.get(
            "ParameterAlram"
        )

        if not has_parameter_alarm(
            parameter_alarm
        ):
            continue

        today_alarm_entries = (
            get_active_alarm_entries(
                parameter_alarm
            )
        )

        if not today_alarm_entries:
            continue

        copied_feature = dict(
            feature
        )

        copied_properties = dict(
            properties
        )

        copied_properties[
            "_today_alarm_entries"
        ] = today_alarm_entries

        copied_properties[
            "_parameter_names"
        ] = extract_parameter_names(
            today_alarm_entries
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
        "_today_alarm_entries",
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
    component: dict[str, Any] = {
        "type": "text",
        "text": str(text),
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
        "paddingTop": "15px",
        "paddingBottom": "12px",
        "paddingStart": "14px",
        "paddingEnd": "14px",
        "contents": [
            {
                "type": "box",
                "layout": "horizontal",
                "alignItems": "center",
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
                                size="lg",
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
            flex_separator(
                color=line_color,
                margin="lg",
            ),
        ],
    }


# ============================================================
# 14. กล่องตัวเลขภาพรวม
# ============================================================

def summary_number_box(
    number: int,
    label: str,
    number_color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "vertical",
        "flex": 1,
        "paddingAll": "9px",
        "backgroundColor": COLOR_WHITE,
        "borderColor": COLOR_BORDER,
        "borderWidth": "1px",
        "cornerRadius": "10px",
        "contents": [
            flex_text(
                str(number),
                size="xl",
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
    }


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
        "cornerRadius": "8px",
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
    online_type_counts: dict[str, int],
) -> dict[str, Any]:
    contents = [
        info_row(
            "สถานี ONLINE ทั้งหมด",
            (
                f"{online_type_counts.get('total', 0)} "
                "สถานี"
            ),
            COLOR_PRIMARY,
        ),

        flex_separator(
            margin="sm"
        ),

        station_type_count_box(
            "AQMs",
            online_type_counts.get(
                "AQMs",
                0,
            ),
            COLOR_GREEN,
        ),

        station_type_count_box(
            "WQMs",
            online_type_counts.get(
                "WQMs",
                0,
            ),
            COLOR_BLUE,
        ),

        station_type_count_box(
            "CEMs",
            online_type_counts.get(
                "CEMs",
                0,
            ),
            COLOR_YELLOW_DARK,
        ),
    ]

    other_count = online_type_counts.get(
        "Other",
        0,
    )

    if other_count > 0:
        contents.append(
            station_type_count_box(
                "ประเภทอื่น",
                other_count,
                COLOR_MUTED,
            )
        )

    return {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "11px",
        "backgroundColor": COLOR_WHITE,
        "borderColor": COLOR_BORDER,
        "borderWidth": "1px",
        "cornerRadius": "10px",
        "spacing": "sm",
        "contents": contents,
    }


def severity_box(
    title: str,
    description: str,
    count: int,
    icon_url: str,
    border_color: str,
    background_color: str,
    title_color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "paddingAll": "11px",
        "backgroundColor": background_color,
        "borderColor": border_color,
        "borderWidth": "1px",
        "cornerRadius": "10px",
        "alignItems": "center",
        "contents": [
            {
                "type": "image",
                "url": icon_url,
                "size": "xxs",
                "aspectMode": "fit",
                "flex": 2,
            },
            {
                "type": "box",
                "layout": "vertical",
                "flex": 7,
                "margin": "md",
                "contents": [
                    flex_text(
                        title,
                        size="sm",
                        color=title_color,
                        weight="bold",
                    ),
                    flex_text(
                        description,
                        size="xs",
                        color=COLOR_MUTED,
                        max_lines=3,
                    ),
                ],
            },
            flex_text(
                f"{count} สถานี",
                size="sm",
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
) -> dict[str, Any]:
    summary = summarize_alerts(
        alert_features,
        online_type_counts,
    )

    return {
        "type": "bubble",
        "size": "kilo",

        "header": card_header(
            "สรุปสถานการณ์คุณภาพสิ่งแวดล้อม",
            COLOR_RED,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "md",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "paddingAll": "12px",
                    "backgroundColor": COLOR_RED_SOFT,
                    "borderColor": COLOR_RED,
                    "borderWidth": "1px",
                    "cornerRadius": "10px",
                    "alignItems": "center",
                    "contents": [
                        {
                            "type": "image",
                            "url": ALERT_RED_ICON_URL,
                            "size": "xs",
                            "aspectMode": "fit",
                            "flex": 3,
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 7,
                            "margin": "md",
                            "contents": [
                                flex_text(
                                    "พบค่าพารามิเตอร์เกินเกณฑ์",
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_RED_DARK,
                                ),
                                flex_text(
                                    (
                                        "โปรดตรวจสอบรายละเอียด"
                                        "ของสถานีและติดตามสถานการณ์"
                                    ),
                                    size="sm",
                                    color=COLOR_TEXT,
                                    max_lines=4,
                                ),
                            ],
                        },
                    ],
                },

                flex_text(
                    "ภาพรวมรายการแจ้งเตือน",
                    size="md",
                    weight="bold",
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
                        ),
                        summary_number_box(
                            summary["parameter_count"],
                            "พารามิเตอร์",
                            COLOR_GREEN,
                        ),
                        summary_number_box(
                            summary[
                                "industry_zone_count"
                            ],
                            "นิคมฯ",
                            COLOR_YELLOW_DARK,
                        ),
                    ],
                },

                flex_text(
                    "จำนวนสถานี ONLINE ณ เวลานี้",
                    size="md",
                    weight="bold",
                ),

                online_station_summary_box(
                    online_type_counts
                ),

                flex_text(
                    "ระดับสถานการณ์",
                    size="md",
                    weight="bold",
                ),

                severity_box(
                    "ระดับเร่งด่วน",
                    (
                        "มีรายการแจ้งเตือนตั้งแต่ "
                        "3 รายการขึ้นไป"
                    ),
                    summary["urgent_count"],
                    ALERT_RED_ICON_URL,
                    COLOR_RED,
                    COLOR_RED_SOFT,
                    COLOR_RED_DARK,
                ),

                severity_box(
                    "ระดับเฝ้าระวัง",
                    "มีรายการแจ้งเตือน 2 รายการ",
                    summary["watch_count"],
                    WATCH_YELLOW_ICON_URL,
                    COLOR_YELLOW,
                    COLOR_YELLOW_SOFT,
                    COLOR_YELLOW_DARK,
                ),

                severity_box(
                    "ระดับติดตามสถานการณ์",
                    "มีรายการแจ้งเตือน 1 รายการ",
                    summary["follow_count"],
                    NORMAL_GREEN_ICON_URL,
                    COLOR_GREEN,
                    COLOR_GREEN_SOFT,
                    COLOR_GREEN_DARK,
                ),

                flex_text(
                    f"ข้อมูล ณ {report_time_text()}",
                    size="xs",
                    color=COLOR_MUTED,
                    align="center",
                ),
            ],
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
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
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "kilo",

        "header": card_header(
            "สรุปสถานการณ์คุณภาพสิ่งแวดล้อม",
            COLOR_GREEN,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "md",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "paddingAll": "12px",
                    "backgroundColor": COLOR_GREEN_SOFT,
                    "borderColor": COLOR_GREEN,
                    "borderWidth": "1px",
                    "cornerRadius": "10px",
                    "alignItems": "center",
                    "contents": [
                        {
                            "type": "image",
                            "url": NORMAL_GREEN_ICON_URL,
                            "size": "xs",
                            "aspectMode": "fit",
                            "flex": 3,
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 7,
                            "margin": "md",
                            "contents": [
                                flex_text(
                                    "ไม่พบค่าเกินเกณฑ์มาตรฐาน",
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_GREEN_DARK,
                                ),
                                flex_text(
                                    (
                                        "ขณะนี้ไม่พบค่าพารามิเตอร์"
                                        "เกินเกณฑ์มาตรฐาน"
                                    ),
                                    size="sm",
                                    color=COLOR_TEXT,
                                    max_lines=4,
                                ),
                            ],
                        },
                    ],
                },

                flex_text(
                    "จำนวนสถานี ONLINE ณ เวลานี้",
                    size="md",
                    weight="bold",
                ),

                online_station_summary_box(
                    online_type_counts
                ),

                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "11px",
                    "backgroundColor": COLOR_GREEN_SOFT,
                    "cornerRadius": "10px",
                    "contents": [
                        info_row(
                            "ผลการตรวจสอบ",
                            "ไม่พบค่าเกินมาตรฐาน",
                            COLOR_GREEN,
                        ),
                    ],
                },

                flex_text(
                    f"ข้อมูล ณ {report_time_text()}",
                    size="xs",
                    color=COLOR_MUTED,
                    align="center",
                ),
            ],
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
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

    return {
        "type": "box",
        "layout": "vertical",
        "margin": "md",
        "paddingAll": "11px",
        "backgroundColor": COLOR_WHITE,
        "borderColor": COLOR_BORDER,
        "borderWidth": "1px",
        "cornerRadius": "10px",
        "spacing": "xs",
        "contents": [
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
    }


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

    last_update = format_datetime_thai(
        properties.get("LastUpdate")
    )

    alarm_entries = properties.get(
        "_today_alarm_entries",
        [],
    )

    visible_entries = alarm_entries[
        :MAX_ALARM_ENTRIES_PER_STATION
    ]

    severity = get_severity_level(
        feature
    )

    severity_text = {
        "urgent": "ระดับเร่งด่วน",
        "watch": "ระดับเฝ้าระวัง",
        "follow": "ระดับติดตามสถานการณ์",
    }.get(
        severity,
        "ระดับติดตามสถานการณ์",
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
        "urgent": ALERT_RED_ICON_URL,
        "watch": WATCH_YELLOW_ICON_URL,
        "follow": NORMAL_GREEN_ICON_URL,
    }.get(
        severity,
        ALERT_RED_ICON_URL,
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
                {
                    "type": "image",
                    "url": severity_icon,
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
                            industry_zone,
                            size="sm",
                            weight="bold",
                            color=COLOR_TEXT,
                            max_lines=2,
                        ),
                        flex_text(
                            station_name,
                            size="md",
                            weight="bold",
                            color=COLOR_PRIMARY,
                            max_lines=3,
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

        flex_separator(),
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

    body_contents.extend([
        flex_separator(),

        info_row(
            "ประเภทสถานี",
            station_type,
            COLOR_PRIMARY,
        ),

        info_row(
            "สถานะสถานี",
            "ONLINE",
            COLOR_GREEN,
        ),

        info_row(
            "ระดับสถานการณ์",
            severity_text,
            severity_color,
        ),

        {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "paddingAll": "12px",
            "backgroundColor": severity_background,
            "cornerRadius": "10px",
            "contents": [
                flex_text(
                    (
                        "ตรวจพบค่าพารามิเตอร์"
                        "เกินเกณฑ์มาตรฐาน "
                        "โปรดตรวจสอบรายละเอียด"
                        "และติดตามสถานการณ์"
                    ),
                    size="sm",
                    color=severity_color,
                ),
            ],
        },
    ])

    return {
        "type": "bubble",
        "size": "kilo",

        "header": card_header(
            severity_text,
            severity_color,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "md",
            "contents": body_contents,
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "paddingAll": "14px",
            "contents": [
                flex_button(
                    "ตำแหน่งสถานี",
                    station_map_url(feature),
                    primary=True,
                ),
                flex_button(
                    "เปิดระบบ GIS",
                    ARCGIS_DASHBOARD_URL,
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


# ============================================================
# 21. ส่งรายละเอียดสถานีแบบ Carousel
# ============================================================

def send_alert_detail_carousels(
    alert_features: list[dict[str, Any]],
) -> None:
    if not alert_features:
        print(
            "ไม่มีรายละเอียดสถานีที่ต้องส่ง"
        )
        return

    batches = chunk_list(
        alert_features,
        MAX_BUBBLES_PER_CAROUSEL,
    )

    total_alerts = len(
        alert_features
    )

    total_batches = len(
        batches
    )

    for batch_number, batch in enumerate(
        batches,
        start=1,
    ):
        bubbles = [
            build_alert_detail_bubble(
                feature
            )
            for feature in batch
        ]

        carousel = {
            "type": "carousel",
            "contents": bubbles,
        }

        alt_text = (
            "รายละเอียดแจ้งเตือน "
            "e-Monitoring "
            f"{total_alerts} สถานี"
        )

        if total_batches > 1:
            alt_text += (
                f" ชุดที่ {batch_number}/"
                f"{total_batches}"
            )

        print(
            "กำลังส่งรายละเอียดสถานี "
            f"ชุดที่ {batch_number}/"
            f"{total_batches} "
            f"จำนวน {len(batch)} สถานี"
        )

        send_line_flex(
            alt_text,
            carousel,
        )

        if batch_number < total_batches:
            time.sleep(1)


# ============================================================
# 22. ระบบจำสถานะและคัดเลือกข้อความที่ต้องส่ง
# ============================================================

def load_alert_state() -> dict[str, Any]:
    try:
        with open(STATE_FILE, "r", encoding="utf-8") as state_file:
            state = json.load(state_file)
    except FileNotFoundError:
        return {"stations": {}}
    except (OSError, json.JSONDecodeError) as error:
        print(f"คำเตือน: อ่าน {STATE_FILE} ไม่สำเร็จ: {error}")
        return {"stations": {}}

    if not isinstance(state, dict):
        return {"stations": {}}
    if not isinstance(state.get("stations"), dict):
        state["stations"] = {}
    return state


def save_alert_state(state: dict[str, Any]) -> None:
    state["updated_at"] = now_thailand().isoformat()
    temporary_file = f"{STATE_FILE}.tmp"
    with open(temporary_file, "w", encoding="utf-8") as state_file:
        json.dump(state, state_file, ensure_ascii=False, indent=2)
        state_file.write("\n")
    os.replace(temporary_file, STATE_FILE)
    print(f"บันทึกสถานะลง {STATE_FILE} แล้ว")


def parse_state_datetime(value: Any) -> datetime | None:
    text = clean_text(value)
    if not text:
        return None
    try:
        parsed = datetime.fromisoformat(text.replace("Z", "+00:00"))
    except ValueError:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=THAILAND_TIMEZONE)
    return parsed.astimezone(THAILAND_TIMEZONE)


def select_notifications(
    alert_features: list[dict[str, Any]],
    state: dict[str, Any],
) -> tuple[list[dict[str, Any]], list[str], dict[str, Any]]:
    previous = state.get("stations", {})
    current_time = now_thailand()
    current_by_key: dict[str, dict[str, Any]] = {}

    for feature in alert_features:
        properties = feature.get("properties", {})
        current_by_key[station_unique_key(properties)] = feature

    features_to_send = []
    next_stations: dict[str, Any] = {}

    for key, feature in current_by_key.items():
        properties = feature.get("properties", {})
        old = previous.get(key, {}) if isinstance(previous.get(key), dict) else {}
        last_sent = parse_state_datetime(old.get("last_sent_at"))
        first_seen = clean_text(old.get("first_seen_at"), current_time.isoformat())
        is_due = (
            last_sent is None
            or current_time - last_sent >= timedelta(minutes=REPEAT_ALERT_MINUTES)
        )

        if is_due:
            features_to_send.append(feature)
            last_sent_text = current_time.isoformat()
        else:
            last_sent_text = clean_text(old.get("last_sent_at"))

        next_stations[key] = {
            "active": True,
            "station_name": get_station_name(properties),
            "first_seen_at": first_seen,
            "last_seen_at": current_time.isoformat(),
            "last_sent_at": last_sent_text,
        }

    recovered_names = []
    for key, old in previous.items():
        if key in current_by_key or not isinstance(old, dict):
            continue
        if old.get("active"):
            recovered_names.append(clean_text(old.get("station_name"), key))

    return features_to_send, recovered_names, {"stations": next_stations}


def send_line_text(text: str) -> None:
    if not LINE_CHANNEL_ACCESS_TOKEN:
        raise RuntimeError("ไม่พบ LINE_CHANNEL_ACCESS_TOKEN")

    payload = {"messages": [{"type": "text", "text": text[:5000]}]}
    request = urllib.request.Request(
        LINE_BROADCAST_URL,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        method="POST",
        headers={
            "Authorization": f"Bearer {LINE_CHANNEL_ACCESS_TOKEN}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(
            request, timeout=REQUEST_TIMEOUT_SECONDS
        ) as response:
            print(f"ส่ง LINE Broadcast สำเร็จ HTTP {response.status}")
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"LINE Broadcast API HTTP {error.code}: {body}"
        ) from error
    except urllib.error.URLError as error:
        raise RuntimeError(
            f"ไม่สามารถเชื่อมต่อ LINE Broadcast API ได้: {error.reason}"
        ) from error


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
        current_features,
        online_count,
        stale_online_count,
    ) = filter_current_online_features(
        features
    )

    alert_features = (
        filter_alert_features(
            current_features
        )
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
        "ONLINE และข้อมูลเป็นวันนี้:",
        len(current_features),
    )

    print(
        "สถานีที่มี ParameterAlram "
        "ของวันนี้:",
        len(alert_features),
    )

    print("=" * 80)

    state = load_alert_state()
    features_to_send, recovered_names, next_state = select_notifications(
        alert_features, state
    )

    print("สถานีที่ต้องแจ้งรอบนี้:", len(features_to_send))
    print("สถานีที่กลับสู่ปกติ:", len(recovered_names))

    # ส่งเฉพาะสถานีที่เริ่มเกิน หรือครบกำหนดแจ้งซ้ำ 1 ชั่วโมง
    if features_to_send:
        print(
            "ส่งการ์ดสรุปสถานการณ์"
        )

        summary_bubble = (
            build_alert_summary_bubble(
                features_to_send,
                online_type_counts,
            )
        )

        send_line_flex(
            (
                "สรุปสถานการณ์ e-Monitoring "
                f"พบค่าพารามิเตอร์เกินเกณฑ์ "
                f"{len(features_to_send)} สถานี"
            ),
            summary_bubble,
        )

        time.sleep(1)

        print(
            "ส่งการ์ดรายละเอียดสถานี"
        )

        send_alert_detail_carousels(
            features_to_send
        )

    # แจ้งเมื่อสถานีที่เคยเกินกลับสู่ภาวะปกติ
    if recovered_names:
        visible_names = recovered_names[:20]
        recovery_text = (
            "✅ e-Monitoring: สถานการณ์กลับสู่ภาวะปกติ\n"
            f"ตรวจสอบเมื่อ {report_time_text()}\n\n"
            + "\n".join(f"• {name}" for name in visible_names)
        )
        if len(recovered_names) > len(visible_names):
            recovery_text += (
                f"\n• และอีก {len(recovered_names) - len(visible_names)} สถานี"
            )
        recovery_text += f"\n\nเปิดระบบ GIS: {ARCGIS_DASHBOARD_URL}"
        send_line_text(recovery_text)

    if not features_to_send and not recovered_names:
        if alert_features:
            print("ค่ายังเกิน แต่ยังไม่ครบ 1 ชั่วโมง จึงไม่ส่งซ้ำ")
        else:
            print("ไม่พบค่าพารามิเตอร์เกินเกณฑ์ จึงไม่ส่ง LINE")

    # บันทึกหลังส่งสำเร็จเท่านั้น หาก LINE ล้มเหลว งานจะจบก่อนถึงบรรทัดนี้
    save_alert_state(next_state)


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            "ERROR:",
            str(error),
        )

        sys.exit(1)
