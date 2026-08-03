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

LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push"

# Dashboard GIS ใหม่
ARCGIS_DASHBOARD_URL = (
    "https://www.arcgis.com/apps/dashboards/"
    "576c71d01cc5403cad90ee330fd67b6e"
)

LINE_CHANNEL_ACCESS_TOKEN = os.getenv(
    "LINE_CHANNEL_ACCESS_TOKEN",
    "",
).strip()

LINE_TARGET_ID = os.getenv(
    "LINE_TARGET_ID",
    "",
).strip()

THAILAND_TIMEZONE = timezone(
    timedelta(hours=7)
)

REQUEST_TIMEOUT = 60

# จำนวนการ์ดสูงสุดต่อ Carousel
MAX_BUBBLES_PER_CAROUSEL = 10


# ============================================================
# 2. รูปภาพจาก GitHub Pages
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
# 3. ธีมสี
# ============================================================

COLOR_PURPLE = "#4E2A84"
COLOR_PURPLE_DARK = "#35205A"

COLOR_RED = "#B32632"
COLOR_RED_SOFT = "#FFF3F4"

COLOR_GREEN = "#2F7D4A"
COLOR_GREEN_SOFT = "#F1F8F3"

COLOR_YELLOW = "#B87422"
COLOR_YELLOW_SOFT = "#FFF7EC"

COLOR_GOLD = "#D4A900"

COLOR_TEXT = "#20242C"
COLOR_MUTED = "#70757F"
COLOR_BORDER = "#E2E5EA"
COLOR_BACKGROUND = "#F6F7F9"
COLOR_WHITE = "#FFFFFF"


# ============================================================
# 4. การตั้งค่าพารามิเตอร์
# ============================================================

PARAMETER_ALIASES = {
    "PM2.5": "PM25",
    "PM 2.5": "PM25",
    "PM2_5": "PM25",
    "PM25": "PM25",
    "PM10": "PM10",
    "TSP": "TSP",
    "SO2": "SO2",
    "SO₂": "SO2",
    "NO2": "NO2",
    "NO₂": "NO2",
    "NOX": "NOx",
    "NOX.": "NOx",
    "NO": "NO",
    "CO": "CO",
    "O3": "O3",
    "O₃": "O3",
    "H2S": "H2S",
    "CH4": "CH4",
    "NMHC": "NMHC",
    "THC": "THC",
    "BOD": "BOD",
    "COD": "COD",
    "DO": "DO",
    "PH": "pH",
    "FLOW": "FLOW",
    "OPACITY": "Opacity",
    "HCL": "HCL",
}

PARAMETER_DISPLAY_NAMES = {
    "PM25": "PM2.5",
    "PM10": "PM10",
    "TSP": "TSP",
    "SO2": "SO₂",
    "NO2": "NO₂",
    "NOx": "NOx",
    "NO": "NO",
    "CO": "CO",
    "O3": "O₃",
    "H2S": "H₂S",
    "CH4": "CH₄",
    "NMHC": "NMHC",
    "THC": "THC",
    "BOD": "BOD",
    "COD": "COD",
    "DO": "DO",
    "pH": "pH",
    "FLOW": "อัตราการไหล",
    "Opacity": "Opacity",
    "HCL": "HCl",
}

NUMBER_PATTERN = re.compile(
    r"[-+]?\d[\d,]*(?:\.\d+)?"
)

STANDARD_PATTERNS = [
    re.compile(
        r"\(\s*STD\s*[:=]?\s*"
        r"([0-9,]+(?:\.[0-9]+)?)\s*\)",
        re.IGNORECASE,
    ),
    re.compile(
        r"STD\s*[:=]?\s*"
        r"([0-9,]+(?:\.[0-9]+)?)",
        re.IGNORECASE,
    ),
    re.compile(
        r"มาตรฐาน\s*[:=]?\s*"
        r"([0-9,]+(?:\.[0-9]+)?)",
        re.IGNORECASE,
    ),
]


# ============================================================
# 5. ฟังก์ชันพื้นฐาน
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
        "9999",
        "9999.0",
    }

    if text.lower() in invalid_values:
        return default

    return text


def safe_float(value: Any) -> float | None:
    if value is None:
        return None

    if isinstance(value, bool):
        return None

    text = clean_text(
        value
    )

    if not text:
        return None

    match = NUMBER_PATTERN.search(
        text
    )

    if not match:
        return None

    try:
        number = float(
            match.group(0).replace(",", "")
        )
    except ValueError:
        return None

    if number == 9999:
        return None

    return number


def format_number(
    value: float | None,
) -> str:
    if value is None:
        return "-"

    if float(value).is_integer():
        return f"{int(value):,}"

    return (
        f"{value:,.2f}"
        .rstrip("0")
        .rstrip(".")
    )


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
# 6. วันที่และเวลา
# ============================================================

def parse_datetime(
    value: Any,
) -> datetime | None:
    text = clean_text(
        value
    )

    if not text:
        return None

    formats = [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%dT%H:%M:%S",
        "%Y-%m-%dT%H:%M",
        "%y-%m-%d %H:%M:%S",
        "%y-%m-%d %H:%M",
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


def is_today(
    value: Any,
) -> bool:
    parsed = parse_datetime(
        value
    )

    if parsed is None:
        return False

    return (
        parsed.date()
        == now_thailand().date()
    )


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


def format_datetime_thai(
    value: Any,
) -> str:
    parsed = parse_datetime(
        value
    )

    if parsed is None:
        return clean_text(
            value,
            "-",
        )

    thai_year = parsed.year + 543

    month = THAI_MONTHS_SHORT.get(
        parsed.month,
        "",
    )

    return (
        f"{parsed.day} "
        f"{month} "
        f"{thai_year}, "
        f"{parsed:%H:%M}"
    )


def report_time_text() -> str:
    current = now_thailand()

    thai_year = current.year + 543

    month = THAI_MONTHS_SHORT.get(
        current.month,
        "",
    )

    return (
        f"{current.day} "
        f"{month} "
        f"{thai_year}, "
        f"{current:%H:%M} น."
    )


# ============================================================
# 7. ดาวน์โหลดข้อมูลใหม่
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

    url = (
        f"{DATA_URL}"
        f"{separator}_t={timestamp}"
    )

    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "IEAT-eMonitoring-LINE-Alert/6.0"
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
            timeout=REQUEST_TIMEOUT,
        ) as response:
            raw_data = response.read()

            text = raw_data.decode(
                "utf-8-sig",
                errors="replace",
            )

            return json.loads(
                text
            )

    except urllib.error.HTTPError as error:
        response_body = (
            error.read()
            .decode(
                "utf-8",
                errors="replace",
            )
        )

        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ "
            f"HTTP {error.code}: "
            f"{response_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "เชื่อมต่อข้อมูล e-Monitoring "
            f"ไม่ได้: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            "ข้อมูล e-Monitoring "
            "ไม่ใช่ JSON ที่ถูกต้อง"
        ) from error


def get_features(
    data: Any,
) -> list[dict[str, Any]]:
    if not isinstance(
        data,
        dict,
    ):
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
# 8. แยกรายการ ParameterAlram
# ============================================================

def split_parameter_alarm(
    value: Any,
) -> list[str]:
    text = clean_text(
        value
    )

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

    result = []

    for part in parts:
        cleaned = part.strip(
            " ,\n\t"
        )

        if cleaned:
            result.append(
                cleaned
            )

    return result


def alarm_entry_datetime(
    entry: str,
) -> datetime | None:
    match = re.search(
        (
            r"(?<!\d)"
            r"(\d{2,4}-\d{2}-\d{2}"
            r"\s+\d{2}:\d{2}"
            r"(?::\d{2})?)"
        ),
        entry,
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

    result = []

    for entry in split_parameter_alarm(
        value
    ):
        alarm_time = alarm_entry_datetime(
            entry
        )

        if alarm_time is None:
            print(
                "ข้าม Alarm ที่อ่านวันที่ไม่ได้:",
                entry,
            )
            continue

        if alarm_time.date() != today:
            continue

        result.append(
            entry
        )

    return result


# ============================================================
# 9. อ่านชื่อพารามิเตอร์
# ============================================================

def detect_parameter_names(
    alarm_entries: list[str],
) -> list[str]:
    combined_text = " ".join(
        alarm_entries
    ).upper()

    detected = []

    aliases = sorted(
        PARAMETER_ALIASES.items(),
        key=lambda item: len(item[0]),
        reverse=True,
    )

    for alias, field_name in aliases:
        pattern = (
            r"(?<![A-Z0-9])"
            + re.escape(alias.upper())
            + r"(?![A-Z0-9])"
        )

        if re.search(
            pattern,
            combined_text,
        ):
            if field_name not in detected:
                detected.append(
                    field_name
                )

    return detected


def property_candidates(
    field_name: str,
) -> list[str]:
    candidates = [
        field_name,
        field_name.upper(),
        field_name.lower(),
        f"{field_name}_txt",
        f"{field_name.upper()}_txt",
        f"{field_name.lower()}_txt",
    ]

    special_candidates = {
        "PM25": [
            "PM25",
            "PM25_txt",
            "PM2.5",
            "PM2_5",
        ],
        "NOx": [
            "NOx",
            "NOx_txt",
            "NOX",
            "NOX_txt",
        ],
        "pH": [
            "pH",
            "PH",
            "PH_txt",
        ],
        "O3": [
            "O3",
            "O3_txt",
        ],
        "Opacity": [
            "Opacity",
            "Opacity_txt",
        ],
        "HCL": [
            "HCL",
            "HCL_txt",
        ],
    }

    candidates.extend(
        special_candidates.get(
            field_name,
            [],
        )
    )

    return list(
        dict.fromkeys(candidates)
    )


def find_property_value(
    properties: dict[str, Any],
    field_name: str,
) -> Any:
    for candidate in property_candidates(
        field_name
    ):
        if candidate in properties:
            return properties.get(
                candidate
            )

    return None


def find_text_property(
    properties: dict[str, Any],
    field_name: str,
) -> str:
    for candidate in property_candidates(
        field_name
    ):
        if not candidate.lower().endswith(
            "_txt"
        ):
            continue

        if candidate in properties:
            text = clean_text(
                properties.get(candidate)
            )

            if text:
                return text

    raw_value = find_property_value(
        properties,
        field_name,
    )

    return clean_text(
        raw_value
    )


def extract_standard(
    text: Any,
) -> float | None:
    if not isinstance(
        text,
        str,
    ):
        return None

    for pattern in STANDARD_PATTERNS:
        match = pattern.search(
            text
        )

        if match:
            return safe_float(
                match.group(1)
            )

    return None


def normalize_unit(
    unit: str,
) -> str:
    result = unit.strip()

    replacements = {
        "ug./m3": "µg/m³",
        "ug/m3": "µg/m³",
        "µg./m3": "µg/m³",
        "µg/m3": "µg/m³",
        "μg/m3": "µg/m³",
        "mg./m3": "mg/m³",
        "mg/m3": "mg/m³",
        "mg./l": "mg/L",
        "mg/l": "mg/L",
        "PPM": "ppm",
        "PPB": "ppb",
        "M/S": "m/s",
    }

    for source, target in replacements.items():
        result = result.replace(
            source,
            target,
        )

    return result.strip()


def extract_unit(
    text: Any,
) -> str:
    if not isinstance(
        text,
        str,
    ):
        return ""

    cleaned = text

    for pattern in STANDARD_PATTERNS:
        cleaned = pattern.sub(
            "",
            cleaned,
        )

    number_match = NUMBER_PATTERN.search(
        cleaned
    )

    if number_match:
        cleaned = cleaned[
            number_match.end():
        ]

    cleaned = cleaned.strip(
        " :-,()"
    )

    return normalize_unit(
        cleaned
    )


def build_parameter_data(
    properties: dict[str, Any],
    alarm_entries: list[str],
) -> list[dict[str, Any]]:
    names = detect_parameter_names(
        alarm_entries
    )

    results = []

    for field_name in names:
        text_value = find_text_property(
            properties,
            field_name,
        )

        numeric_value = safe_float(
            find_property_value(
                properties,
                field_name,
            )
        )

        if numeric_value is None:
            numeric_value = safe_float(
                text_value
            )

        standard = extract_standard(
            text_value
        )

        unit = extract_unit(
            text_value
        )

        results.append({
            "field": field_name,
            "name": (
                PARAMETER_DISPLAY_NAMES.get(
                    field_name,
                    field_name,
                )
            ),
            "value": numeric_value,
            "standard": standard,
            "unit": unit,
            "raw": text_value,
        })

    return results


# ============================================================
# 10. ข้อมูลสถานี
# ============================================================

def station_name(
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


def industry_zone(
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

    return "e-Monitoring"


def station_type(
    properties: dict[str, Any],
) -> str:
    fields = [
        "Type",
        "StationType",
        "type",
    ]

    for field in fields:
        value = clean_text(
            properties.get(field)
        )

        if value:
            return value

    return "-"


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
# 11. กรองข้อมูล
# ============================================================

def filter_current_online_features(
    features: list[dict[str, Any]],
) -> tuple[
    list[dict[str, Any]],
    int,
    int,
]:
    current_features = []

    online_count = 0
    stale_online_count = 0

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

        code = clean_text(
            properties.get("Code")
        )

        if code == "0":
            continue

        if not clean_text(
            properties.get("StationTH")
        ):
            continue

        if not is_online(
            properties.get("Status")
        ):
            continue

        online_count += 1

        if not is_today(
            properties.get("LastUpdate")
        ):
            stale_online_count += 1
            continue

        current_features.append(
            feature
        )

    return (
        current_features,
        online_count,
        stale_online_count,
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
            get_today_alarm_entries(
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
            "_parameter_data"
        ] = build_parameter_data(
            copied_properties,
            today_alarm_entries,
        )

        copied_feature[
            "properties"
        ] = copied_properties

        alert_features.append(
            copied_feature
        )

    return alert_features


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
) -> dict[str, Any]:
    component = {
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

    return component


def flex_separator(
    color: str = COLOR_BORDER,
    margin: str | None = None,
) -> dict[str, Any]:
    component = {
        "type": "separator",
        "color": color,
    }

    if margin:
        component["margin"] = margin

    return component


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
                color=COLOR_MUTED,
                flex=4,
            ),
            flex_text(
                value,
                color=value_color,
                weight="bold",
                flex=6,
                align="end",
            ),
        ],
    }


def flex_button(
    label: str,
    uri: str,
    primary: bool = False,
) -> dict[str, Any]:
    button = {
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
        button["color"] = COLOR_PURPLE_DARK
    else:
        button["style"] = "secondary"

    return button


# ============================================================
# 13. กล่องพารามิเตอร์
# ============================================================

def parameter_box(
    parameter: dict[str, Any],
) -> dict[str, Any]:
    name = parameter.get(
        "name",
        "-",
    )

    value = parameter.get(
        "value"
    )

    standard = parameter.get(
        "standard"
    )

    unit = clean_text(
        parameter.get("unit")
    )

    raw = clean_text(
        parameter.get("raw")
    )

    if value is not None:
        value_text = format_number(
            value
        )

        if unit:
            value_text = (
                f"{value_text} {unit}"
            )
    elif raw:
        value_text = raw
    else:
        value_text = "-"

    if standard is not None:
        standard_text = (
            f"ค่ามาตรฐาน "
            f"{format_number(standard)}"
        )

        if unit:
            standard_text += (
                f" {unit}"
            )
    else:
        standard_text = (
            "ตรวจพบในรายการแจ้งเตือน"
        )

    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "paddingAll": "12px",
        "backgroundColor": COLOR_WHITE,
        "borderColor": COLOR_BORDER,
        "borderWidth": "1px",
        "cornerRadius": "10px",
        "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "flex": 7,
                "contents": [
                    flex_text(
                        name,
                        size="lg",
                        weight="bold",
                    ),
                    flex_text(
                        standard_text,
                        color=COLOR_MUTED,
                    ),
                ],
            },
            flex_text(
                value_text,
                size="lg",
                weight="bold",
                color=COLOR_GOLD,
                flex=5,
                align="end",
            ),
        ],
    }


def raw_alarm_box(
    alarm_entries: list[str],
) -> dict[str, Any]:
    visible_entries = alarm_entries[:5]

    lines = []

    for index, entry in enumerate(
        visible_entries,
        start=1,
    ):
        lines.append(
            f"{index}. {entry}"
        )

    if len(alarm_entries) > 5:
        lines.append(
            "และรายการอื่นเพิ่มเติม "
            f"{len(alarm_entries) - 5} รายการ"
        )

    return {
        "type": "box",
        "layout": "vertical",
        "margin": "md",
        "paddingAll": "12px",
        "backgroundColor": COLOR_RED_SOFT,
        "cornerRadius": "10px",
        "contents": [
            flex_text(
                "รายการแจ้งเตือน",
                weight="bold",
                color=COLOR_RED,
            ),
            flex_text(
                "\n".join(lines),
                color=COLOR_TEXT,
            ),
        ],
    }


# ============================================================
# 14. Header ของการ์ด
# ============================================================

def card_header(
    subtitle: str,
    line_color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "18px",
        "contents": [
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    {
                        "type": "image",
                        "url": IEAT_LOGO_URL,
                        "size": "sm",
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
                                color=COLOR_PURPLE_DARK,
                            ),
                            flex_text(
                                subtitle,
                                color=COLOR_MUTED,
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
# 15. การ์ดสีแดง
# ============================================================

def build_alert_bubble(
    feature: dict[str, Any],
) -> dict[str, Any]:
    properties = feature.get(
        "properties",
        {},
    )

    name = station_name(
        properties
    )

    estate = industry_zone(
        properties
    )

    type_name = station_type(
        properties
    )

    last_update = format_datetime_thai(
        properties.get("LastUpdate")
    )

    parameter_data = properties.get(
        "_parameter_data",
        [],
    )

    alarm_entries = properties.get(
        "_today_alarm_entries",
        [],
    )

    body_contents = [
        {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                {
                    "type": "image",
                    "url": ALERT_RED_ICON_URL,
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
                            estate,
                            size="lg",
                            weight="bold",
                        ),
                        flex_text(
                            name,
                            size="lg",
                            weight="bold",
                            color=COLOR_PURPLE,
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 3,
                    "paddingAll": "8px",
                    "backgroundColor": COLOR_RED_SOFT,
                    "cornerRadius": "8px",
                    "contents": [
                        flex_text(
                            "เร่งด่วน",
                            color=COLOR_RED,
                            weight="bold",
                            align="center",
                        ),
                    ],
                },
            ],
        },

        flex_text(
            f"ข้อมูลล่าสุด {last_update}",
            color=COLOR_MUTED,
        ),

        flex_separator(),
    ]

    for parameter in parameter_data[:5]:
        body_contents.append(
            parameter_box(
                parameter
            )
        )

    body_contents.append(
        raw_alarm_box(
            alarm_entries
        )
    )

    body_contents.extend([
        flex_separator(),

        info_row(
            "ประเภทสถานี",
            type_name,
        ),

        info_row(
            "สถานะข้อมูล",
            "ONLINE",
            COLOR_RED,
        ),

        {
            "type": "box",
            "layout": "horizontal",
            "margin": "lg",
            "paddingAll": "14px",
            "backgroundColor": COLOR_RED_SOFT,
            "cornerRadius": "10px",
            "contents": [
                {
                    "type": "image",
                    "url": ALERT_RED_ICON_URL,
                    "size": "xxs",
                    "aspectMode": "fit",
                    "flex": 2,
                },
                flex_text(
                    (
                        "ตรวจพบพารามิเตอร์ที่ควรให้ความสำคัญ "
                        "โปรดตรวจสอบข้อมูลและดำเนินการตาม "
                        "แนวทางที่เกี่ยวข้อง"
                    ),
                    flex=8,
                ),
            ],
        },
    ])

    return {
        "type": "bubble",
        "size": "mega",

        "header": card_header(
            "ระดับเร่งด่วน",
            COLOR_RED,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "md",
            "contents": body_contents,
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "paddingAll": "18px",
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
# 16. การ์ดสีเขียว
# ============================================================

def build_normal_bubble(
    current_station_count: int,
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "mega",

        "header": card_header(
            "สถานะการเฝ้าระวัง",
            COLOR_GREEN,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "md",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "image",
                            "url": NORMAL_GREEN_ICON_URL,
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
                                    (
                                        "ไม่พบพารามิเตอร์"
                                        "ที่เกินค่ามาตรฐาน"
                                    ),
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_GREEN,
                                ),
                                flex_text(
                                    (
                                        "ข้อมูล ณ เวลา "
                                        f"{report_time_text()}"
                                    ),
                                    color=COLOR_MUTED,
                                ),
                            ],
                        },
                    ],
                },

                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "14px",
                    "backgroundColor": COLOR_GREEN_SOFT,
                    "cornerRadius": "10px",
                    "contents": [
                        flex_text(
                            (
                                "ไม่พบพารามิเตอร์ที่เกินค่า"
                                "มาตรฐานจากข้อมูลสถานี "
                                "e-Monitoring ที่มีสถานะ "
                                "ONLINE และมีข้อมูลของวันนี้"
                            ),
                        ),
                    ],
                },

                info_row(
                    "สถานีที่ตรวจสอบ",
                    f"{current_station_count} สถานี",
                ),

                info_row(
                    "สถานะ",
                    "ปกติ",
                    COLOR_GREEN,
                ),
            ],
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
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
# 17. การ์ดสีเหลือง
# ============================================================

def build_stale_bubble(
    online_count: int,
    stale_online_count: int,
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "mega",

        "header": card_header(
            "ตรวจสอบสถานะข้อมูล",
            COLOR_YELLOW,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "md",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "image",
                            "url": WATCH_YELLOW_ICON_URL,
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
                                    (
                                        "ไม่พบข้อมูล e-Monitoring "
                                        "ที่เป็นปัจจุบัน"
                                    ),
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_YELLOW,
                                ),
                                flex_text(
                                    (
                                        "ตรวจสอบ ณ "
                                        f"{report_time_text()}"
                                    ),
                                    color=COLOR_MUTED,
                                ),
                            ],
                        },
                    ],
                },

                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "14px",
                    "backgroundColor": COLOR_YELLOW_SOFT,
                    "cornerRadius": "10px",
                    "contents": [
                        flex_text(
                            (
                                "ระบบยังไม่สามารถยืนยันว่า"
                                "พารามิเตอร์อยู่ในเกณฑ์ปกติ"
                                "หรือไม่ เนื่องจากไม่พบข้อมูล"
                                "ของวันนี้จากสถานีที่มีสถานะ "
                                "ONLINE"
                            ),
                        ),
                    ],
                },

                info_row(
                    "สถานี ONLINE",
                    f"{online_count} สถานี",
                ),

                info_row(
                    "ข้อมูลไม่ใช่วันนี้",
                    f"{stale_online_count} สถานี",
                    COLOR_YELLOW,
                ),

                info_row(
                    "สถานะข้อมูล",
                    "ควรตรวจสอบ",
                    COLOR_YELLOW,
                ),
            ],
        },

        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
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
# 18. ส่ง LINE Flex Message
# ============================================================

def send_line_flex(
    alt_text: str,
    contents: dict[str, Any],
) -> None:
    if not LINE_CHANNEL_ACCESS_TOKEN:
        raise RuntimeError(
            "ไม่พบ LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not LINE_TARGET_ID:
        raise RuntimeError(
            "ไม่พบ LINE_TARGET_ID"
        )

    payload = {
        "to": LINE_TARGET_ID,
        "messages": [
            {
                "type": "flex",
                "altText": alt_text[:400],
                "contents": contents,
            }
        ],
    }

    body = json.dumps(
        payload,
        ensure_ascii=False,
    ).encode("utf-8")

    request = urllib.request.Request(
        LINE_PUSH_URL,
        data=body,
        method="POST",
        headers={
            "Authorization": (
                "Bearer "
                f"{LINE_CHANNEL_ACCESS_TOKEN}"
            ),
            "Content-Type": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=REQUEST_TIMEOUT,
        ) as response:
            print(
                "ส่ง LINE สำเร็จ "
                f"HTTP {response.status}"
            )

    except urllib.error.HTTPError as error:
        response_body = (
            error.read()
            .decode(
                "utf-8",
                errors="replace",
            )
        )

        raise RuntimeError(
            f"LINE API HTTP {error.code}: "
            f"{response_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "เชื่อมต่อ LINE API ไม่สำเร็จ: "
            f"{error.reason}"
        ) from error


def chunk_list(
    items: list[Any],
    size: int,
) -> list[list[Any]]:
    return [
        items[index:index + size]
        for index in range(
            0,
            len(items),
            size,
        )
    ]


def send_alert_carousels(
    alert_features: list[dict[str, Any]],
) -> None:
    batches = chunk_list(
        alert_features,
        MAX_BUBBLES_PER_CAROUSEL,
    )

    for batch_number, batch in enumerate(
        batches,
        start=1,
    ):
        bubbles = [
            build_alert_bubble(feature)
            for feature in batch
        ]

        contents = {
            "type": "carousel",
            "contents": bubbles,
        }

        alt_text = (
            "แจ้งเตือน e-Monitoring "
            f"พบ {len(alert_features)} สถานี"
        )

        if len(batches) > 1:
            alt_text += (
                f" ส่วนที่ {batch_number}/"
                f"{len(batches)}"
            )

        send_line_flex(
            alt_text,
            contents,
        )

        if batch_number < len(batches):
            time.sleep(1)


# ============================================================
# 19. โปรแกรมหลัก
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
        "กำลังดาวน์โหลดข้อมูลใหม่..."
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
            "ไม่พบ Feature จาก e-Monitoring"
        )

    (
        current_features,
        online_count,
        stale_online_count,
    ) = filter_current_online_features(
        features
    )

    alert_features = filter_alert_features(
        current_features
    )

    print("=" * 80)
    print("สรุปผลการตรวจสอบ")
    print("=" * 80)

    print(
        "สถานี ONLINE ทั้งหมด:",
        online_count,
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
        "พบ ParameterAlram ของวันนี้:",
        len(alert_features),
    )

    print("=" * 80)

    # --------------------------------------------------------
    # กรณีที่ 1 พบ Alarm
    # --------------------------------------------------------

    if alert_features:
        print(
            "ส่งการ์ดแจ้งเตือนสีแดง"
        )

        send_alert_carousels(
            alert_features
        )

        return

    # --------------------------------------------------------
    # กรณีที่ 2 มีข้อมูลปัจจุบัน แต่ไม่มี Alarm
    # --------------------------------------------------------

    if current_features:
        print(
            "ส่งการ์ดสถานะปกติสีเขียว"
        )

        normal_bubble = build_normal_bubble(
            len(current_features)
        )

        send_line_flex(
            (
                "รายงาน e-Monitoring "
                "ไม่พบพารามิเตอร์"
                "ที่เกินค่ามาตรฐาน"
            ),
            normal_bubble,
        )

        return

    # --------------------------------------------------------
    # กรณีที่ 3 ไม่มีข้อมูลปัจจุบัน
    # --------------------------------------------------------

    print(
        "ส่งการ์ดตรวจสอบข้อมูลสีเหลือง"
    )

    stale_bubble = build_stale_bubble(
        online_count,
        stale_online_count,
    )

    send_line_flex(
        (
            "แจ้งสถานะ e-Monitoring "
            "ไม่พบข้อมูลปัจจุบัน"
        ),
        stale_bubble,
    )


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            "ERROR:",
            str(error),
        )

        sys.exit(1)
