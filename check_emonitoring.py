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
# 1. à¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¸£à¸°à¸šà¸š
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

# à¸ˆà¸³à¸™à¸§à¸™à¸à¸²à¸£à¹Œà¸”à¸ªà¸¹à¸‡à¸ªà¸¸à¸”à¸•à¹ˆà¸­ Carousel
MAX_BUBBLES_PER_CAROUSEL = 10

# LINE à¸ˆà¸³à¸à¸±à¸” JSON à¸‚à¸­à¸‡ Flex Carousel à¹„à¸¡à¹ˆà¹€à¸à¸´à¸™ 50 KB
# à¹ƒà¸Šà¹‰ 45 KB à¹€à¸žà¸·à¹ˆà¸­à¹€à¸œà¸·à¹ˆà¸­à¹‚à¸„à¸£à¸‡à¸ªà¸£à¹‰à¸²à¸‡à¸‚à¹‰à¸­à¸„à¸§à¸²à¸¡à¹à¸¥à¸°à¸­à¸±à¸à¸‚à¸£à¸°à¸ à¸²à¸©à¸²à¹„à¸—à¸¢
MAX_CAROUSEL_JSON_BYTES = 45_000

# à¸ˆà¸³à¸™à¸§à¸™à¸£à¸²à¸¢à¸à¸²à¸£ Alarm à¸ªà¸¹à¸‡à¸ªà¸¸à¸”à¸—à¸µà¹ˆà¹à¸ªà¸”à¸‡à¸•à¹ˆà¸­à¸ªà¸–à¸²à¸™à¸µ
MAX_ALARM_ENTRIES_PER_STATION = 3

# ============================================================
# 2. à¸£à¸¹à¸›à¸ à¸²à¸žà¸—à¸µà¹ˆà¹ƒà¸Šà¹‰à¹ƒà¸™ LINE Flex Message
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
# 3. à¸˜à¸µà¸¡à¸ªà¸µ Dashboard e-Monitoring à¸à¸™à¸­.
# ============================================================

# à¸ªà¸µà¸¡à¹ˆà¸§à¸‡à¸«à¸¥à¸±à¸à¸ˆà¸²à¸à¸«à¸±à¸§à¸•à¸²à¸£à¸²à¸‡à¹à¸¥à¸°à¸«à¸±à¸§à¸‚à¹‰à¸­à¹ƒà¸™ Dashboard
COLOR_PRIMARY = "#652780"
COLOR_PRIMARY_DARK = "#4F176B"
COLOR_PRIMARY_SOFT = "#E7D8EB"
COLOR_PRIMARY_PALE = "#F5EFF7"
COLOR_PRIMARY_BORDER = "#C8B2D2"

# à¸ªà¸µà¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™à¸£à¸°à¸”à¸±à¸šà¹€à¸£à¹ˆà¸‡à¸”à¹ˆà¸§à¸™
COLOR_RED = "#D84B58"
COLOR_RED_DARK = "#A92F39"
COLOR_RED_SOFT = "#FDEFF1"

# à¸ªà¸µà¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™à¸£à¸°à¸”à¸±à¸šà¹€à¸à¹‰à¸²à¸£à¸°à¸§à¸±à¸‡
COLOR_YELLOW = "#D7A51F"
COLOR_YELLOW_DARK = "#936D08"
COLOR_YELLOW_SOFT = "#FFF7DF"

# à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§ AQMs / ONLINE à¸•à¸²à¸¡ Dashboard
COLOR_GREEN = "#79C943"
COLOR_GREEN_DARK = "#4F8E2B"
COLOR_GREEN_SOFT = "#EFF8E8"
COLOR_GREEN_BORDER = "#A9D78D"

# à¸ªà¸µà¸Ÿà¹‰à¸² CEMs à¸•à¸²à¸¡ Dashboard
COLOR_BLUE = "#2589C9"
COLOR_BLUE_DARK = "#12689F"
COLOR_BLUE_SOFT = "#E8F4FB"
COLOR_BLUE_BORDER = "#9BC9E5"

COLOR_TEXT = "#33263A"
COLOR_MUTED = "#736879"
COLOR_BORDER = "#D9CFDD"
COLOR_DIVIDER = "#E8E0EA"
COLOR_BACKGROUND = "#F3F0F5"
COLOR_SURFACE = "#FCFAFD"
COLOR_DEPTH = "#DDD3E1"
COLOR_WHITE = "#FFFFFF"


# ============================================================
# 4. à¸Ÿà¸±à¸‡à¸à¹Œà¸Šà¸±à¸™à¸žà¸·à¹‰à¸™à¸à¸²à¸™
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
# 5. à¸§à¸±à¸™à¸—à¸µà¹ˆà¹à¸¥à¸°à¹€à¸§à¸¥à¸²
# ============================================================

THAI_MONTHS_SHORT = {
    1: "à¸¡.à¸„.",
    2: "à¸.à¸ž.",
    3: "à¸¡à¸µ.à¸„.",
    4: "à¹€à¸¡.à¸¢.",
    5: "à¸ž.à¸„.",
    6: "à¸¡à¸´.à¸¢.",
    7: "à¸.à¸„.",
    8: "à¸ª.à¸„.",
    9: "à¸.à¸¢.",
    10: "à¸•.à¸„.",
    11: "à¸ž.à¸¢.",
    12: "à¸˜.à¸„.",
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
        f"à¹€à¸§à¸¥à¸² {parsed:%H:%M} à¸™."
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
        f"à¹€à¸§à¸¥à¸² {current:%H:%M} à¸™."
    )


# ============================================================
# 6. à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ e-Monitoring
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
            "à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ e-Monitoring "
            f"à¹„à¸¡à¹ˆà¸ªà¸³à¹€à¸£à¹‡à¸ˆ HTTP {error.code}: "
            f"{error_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸•à¹ˆà¸­à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ "
            f"e-Monitoring à¹„à¸”à¹‰: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            "à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸ˆà¸²à¸ e-Monitoring "
            "à¹„à¸¡à¹ˆà¹ƒà¸Šà¹ˆ JSON à¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡"
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
# 7. à¸­à¹ˆà¸²à¸™ ParameterAlram
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
                "à¸‚à¹‰à¸²à¸¡ Alarm à¹€à¸™à¸·à¹ˆà¸­à¸‡à¸ˆà¸²à¸ "
                "à¸­à¹ˆà¸²à¸™à¸§à¸±à¸™à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¹„à¸”à¹‰:",
                entry,
            )
            continue

        if alarm_datetime.date() != today:
            continue

        today_entries.append(
            entry
        )

    return today_entries


# ============================================================
# 8. à¸ˆà¸±à¸”à¸£à¸¹à¸›à¹à¸šà¸šà¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸” Alarm
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

    return f"{parsed:%H:%M} à¸™."


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
    "SO2": "SOâ‚‚",
    "NO2": "NOâ‚‚",
    "NOX": "NOx",
    "O3": "Oâ‚ƒ",
    "H2S": "Hâ‚‚S",
    "CH4": "CHâ‚„",
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

    return "à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™"


# ============================================================
# 9. à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ªà¸–à¸²à¸™à¸µ
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

    return "à¹„à¸¡à¹ˆà¸£à¸°à¸šà¸¸à¸Šà¸·à¹ˆà¸­à¸ªà¸–à¸²à¸™à¸µ"


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

    return "à¸£à¸°à¸šà¸š e-Monitoring"


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
        else "à¹„à¸¡à¹ˆà¸£à¸°à¸šà¸¸à¸›à¸£à¸°à¹€à¸ à¸—"
    )


def get_station_comment(
    properties: dict[str, Any],
) -> str:
    """à¸­à¹ˆà¸²à¸™à¸‚à¹‰à¸­à¸„à¸§à¸²à¸¡à¸ªà¸²à¹€à¸«à¸•à¸¸/à¸à¸²à¸£à¸•à¸´à¸”à¸•à¸²à¸¡à¸œà¸¥à¸ˆà¸²à¸à¸Ÿà¸´à¸¥à¸”à¹Œ Comment à¸‚à¸­à¸‡ API"""
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

    return "à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¸¡à¸µà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ªà¸²à¹€à¸«à¸•à¸¸ / à¸à¸²à¸£à¸•à¸´à¸”à¸•à¸²à¸¡à¸œà¸¥"


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
# 10. à¸à¸£à¸­à¸‡à¹à¸¥à¸°à¸™à¸±à¸šà¸ªà¸–à¸²à¸™à¸µ ONLINE
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

    # à¸«à¸²à¸ API à¸¡à¸µà¸ªà¸–à¸²à¸™à¸µà¸‹à¹‰à¸³ à¹ƒà¸«à¹‰à¹ƒà¸Šà¹‰à¸£à¸²à¸¢à¸à¸²à¸£à¸—à¸µà¹ˆ LastUpdate à¸¥à¹ˆà¸²à¸ªà¸¸à¸”à¸‚à¸­à¸‡à¸ªà¸–à¸²à¸™à¸µà¸™à¸±à¹‰à¸™
    latest_station_features: dict[str, dict[str, Any]] = {}

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

        unique_key = station_unique_key(properties)
        existing = latest_station_features.get(unique_key)

        if existing is None:
            latest_station_features[unique_key] = feature
            continue

        existing_properties = existing.get("properties", {})
        existing_time = parse_datetime(existing_properties.get("LastUpdate"))
        candidate_time = parse_datetime(properties.get("LastUpdate"))

        if candidate_time is not None and (
            existing_time is None or candidate_time > existing_time
        ):
            latest_station_features[unique_key] = feature

    for feature in latest_station_features.values():
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
    online_station_keys = set()
    current_by_station: dict[str, dict[str, Any]] = {}

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

        # Alarm à¹à¸¥à¸°à¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸•à¹‰à¸­à¸‡à¹ƒà¸Šà¹‰à¹€à¸‰à¸žà¸²à¸°à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸‚à¸­à¸‡à¸§à¸±à¸™à¸™à¸µà¹‰à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™
        if not is_today(properties.get("LastUpdate")):
            continue

        existing = current_by_station.get(unique_key)
        existing_properties = existing.get("properties", {}) if existing else {}
        existing_time = parse_datetime(existing_properties.get("LastUpdate"))
        candidate_time = parse_datetime(properties.get("LastUpdate"))

        if existing is None or (
            candidate_time is not None
            and (existing_time is None or candidate_time > existing_time)
        ):
            current_by_station[unique_key] = feature

    current_features = list(current_by_station.values())
    stale_station_keys = online_station_keys - set(current_by_station)

    return (
        current_features,
        len(online_station_keys),
        len(stale_station_keys),
    )


def get_latest_online_update(
    features: list[dict[str, Any]],
) -> datetime | None:
    """à¸„à¸·à¸™à¸§à¸±à¸™à¹€à¸§à¸¥à¸² LastUpdate à¸—à¸µà¹ˆà¸¥à¹ˆà¸²à¸ªà¸¸à¸”à¸‚à¸­à¸‡à¸ªà¸–à¸²à¸™à¸µ ONLINE"""
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
) -> list[dict[str, Any]]:
    alert_features = []

    for feature in current_features:
        properties = feature.get(
            "properties",
            {},
        )

        # à¸£à¸­à¸‡à¸£à¸±à¸šà¸—à¸±à¹‰à¸‡à¸Šà¸·à¹ˆà¸­à¹€à¸”à¸´à¸¡à¸—à¸µà¹ˆ API à¸ªà¸°à¸à¸”à¸§à¹ˆà¸² ParameterAlram
        # à¹à¸¥à¸°à¸Šà¸·à¹ˆà¸­à¸—à¸µà¹ˆà¸ªà¸°à¸à¸”à¸–à¸¹à¸/à¸£à¸¹à¸›à¹à¸šà¸šà¸•à¸±à¸§à¸žà¸´à¸¡à¸žà¹Œà¸­à¸·à¹ˆà¸™ à¹€à¸œà¸·à¹ˆà¸­ API à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™ schema
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
# 11. à¹à¸šà¹ˆà¸‡à¸£à¸°à¸”à¸±à¸šà¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ
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
# 12. à¸ªà¹ˆà¸§à¸™à¸›à¸£à¸°à¸à¸­à¸š Flex Message
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
# 13. Header à¸‚à¸­à¸‡à¸à¸²à¸£à¹Œà¸”
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
                "height": "7px",
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
                "paddingTop": "12px",
                "paddingBottom": "11px",
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
                "height": "3px",
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
# 14. à¸à¸¥à¹ˆà¸­à¸‡à¸•à¸±à¸§à¹€à¸¥à¸‚à¸ à¸²à¸žà¸£à¸§à¸¡
# ============================================================

def summary_number_box(
    number: int,
    label: str,
    number_color: str,
    background_color: str = COLOR_WHITE,
    border_color: str = COLOR_BORDER,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "vertical",
        "flex": 1,
        "paddingAll": "10px",
        "backgroundColor": background_color,
        "borderColor": border_color,
        "borderWidth": "1px",
        "cornerRadius": "12px",
        "contents": [
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
                f"{count} à¸ªà¸–à¸²à¸™à¸µ",
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

    for type_key, type_label in (
        ("AQMs", "AQMs"),
        ("WQMs", "WQMs"),
        ("CEMs", "CEMs"),
        ("Other", "à¸›à¸£à¸°à¹€à¸ à¸—à¸­à¸·à¹ˆà¸™"),
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

    return {
        "type": "box",
        "layout": "vertical",
        "paddingAll": "12px",
        "backgroundColor": COLOR_SURFACE,
        "borderColor": COLOR_PRIMARY_BORDER,
        "borderWidth": "1px",
        "cornerRadius": "14px",
        "spacing": "sm",
        "contents": [
            flex_text(
                "à¸ªà¸–à¸²à¸™à¸µà¸•à¸£à¸§à¸ˆà¸§à¸±à¸”",
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
                        "à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
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
                        "à¸›à¸£à¸°à¹€à¸ à¸— (Type)",
                        size="xs",
                        weight="bold",
                        color=COLOR_MUTED,
                        flex=4,
                    ),
                    flex_text(
                        "à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
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
                f"{count} à¸ªà¸–à¸²à¸™à¸µ",
                size="sm",
                color=title_color,
                weight="bold",
                flex=4,
                align="end",
            ),
        ],
    }


# ============================================================
# 15. à¸à¸²à¸£à¹Œà¸”à¸ªà¸£à¸¸à¸›à¹€à¸¡à¸·à¹ˆà¸­à¸žà¸š Alarm
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
        "size": "giga",

        "header": card_header(
            "à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ e-Monitoring",
            COLOR_RED,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "paddingAll": "11px",
                    "backgroundColor": COLOR_RED_SOFT,
                    "borderColor": COLOR_RED,
                    "borderWidth": "2px",
                    "cornerRadius": "14px",
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
                                    "à¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™",
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_RED_DARK,
                                ),
                            ],
                        },
                    ],
                },

                {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "sm",
                    "contents": [
                        summary_number_box(
                            summary["station_count"],
                            "à¸ªà¸–à¸²à¸™à¸µà¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™",
                            COLOR_PRIMARY,
                            COLOR_PRIMARY_SOFT,
                            COLOR_PRIMARY_BORDER,
                        ),
                        summary_number_box(
                            summary["parameter_count"],
                            "à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œ",
                            COLOR_GREEN,
                            COLOR_GREEN_SOFT,
                            COLOR_GREEN_BORDER,
                        ),
                        summary_number_box(
                            summary[
                                "industry_zone_count"
                            ],
                            "à¸™à¸´à¸„à¸¡à¸¯",
                            COLOR_YELLOW_DARK,
                            COLOR_YELLOW_SOFT,
                            "#E5C96F",
                        ),
                    ],
                },

                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "11px",
                    "backgroundColor": COLOR_PRIMARY_PALE,
                    "borderColor": COLOR_PRIMARY_BORDER,
                    "borderWidth": "1px",
                    "cornerRadius": "14px",
                    "spacing": "xs",
                    "contents": [
                        flex_text(
                            "à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™ (ParameterAlram)",
                            size="xs",
                            weight="bold",
                            color=COLOR_MUTED,
                        ),
                        flex_text(
                            ", ".join(summary["parameter_names"])
                            if summary["parameter_names"]
                            else "à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™",
                            size="md",
                            weight="bold",
                            color=COLOR_RED_DARK,
                            max_lines=3,
                        ),
                    ],
                },

                online_station_summary_box(
                    online_type_counts
                ),

                flex_text(
                    f"à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ à¸“ {report_time_text()}",
                    size="xs",
                    color=COLOR_MUTED,
                    align="center",
                ),
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
                    "à¹€à¸›à¸´à¸”à¸£à¸°à¸šà¸š GIS",
                    ARCGIS_DASHBOARD_URL,
                    primary=True,
                ),
            ],
        },
    }


# ============================================================
# 16. à¸à¸²à¸£à¹Œà¸”à¸ªà¸£à¸¸à¸›à¹€à¸¡à¸·à¹ˆà¸­à¹„à¸¡à¹ˆà¸žà¸š Alarm
# ============================================================

def build_normal_summary_bubble(
    online_type_counts: dict[str, int],
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "giga",

        "header": card_header(
            "à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ e-Monitoring",
            COLOR_GREEN,
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "paddingAll": "11px",
                    "backgroundColor": COLOR_GREEN_SOFT,
                    "borderColor": COLOR_GREEN,
                    "borderWidth": "2px",
                    "cornerRadius": "14px",
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
                                    "à¹„à¸¡à¹ˆà¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™",
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_GREEN_DARK,
                                    max_lines=2,
                                ),
                            ],
                        },
                    ],
                },

                online_station_summary_box(
                    online_type_counts
                ),

                flex_text(
                    f"à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ à¸“ {report_time_text()}",
                    size="xs",
                    color=COLOR_MUTED,
                    align="center",
                ),
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
                    "à¹€à¸›à¸´à¸”à¸£à¸°à¸šà¸š GIS",
                    ARCGIS_DASHBOARD_URL,
                    primary=True,
                ),
            ],
        },
    }


def build_no_current_data_summary_bubble(
    online_type_counts: dict[str, int],
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "giga",
        "header": card_header(
            "à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ e-Monitoring",
            COLOR_YELLOW,
        ),
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "backgroundColor": COLOR_BACKGROUND,
            "spacing": "sm",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "paddingAll": "11px",
                    "backgroundColor": COLOR_YELLOW_SOFT,
                    "borderColor": COLOR_YELLOW,
                    "borderWidth": "2px",
                    "cornerRadius": "14px",
                    "alignItems": "center",
                    "contents": [
                        {
                            "type": "image",
                            "url": WATCH_YELLOW_ICON_URL,
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
                                    "à¹„à¸¡à¹ˆà¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™",
                                    size="lg",
                                    weight="bold",
                                    color=COLOR_YELLOW_DARK,
                                    max_lines=2,
                                ),
                                flex_text(
                                    "à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¸¡à¸µà¸ªà¸–à¸²à¸™à¸µ ONLINE à¸—à¸µà¹ˆà¸­à¸±à¸›à¹€à¸”à¸•à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸™à¸§à¸±à¸™à¸™à¸µà¹‰ à¸ˆà¸¶à¸‡à¸¢à¸±à¸‡à¸¢à¸·à¸™à¸¢à¸±à¸™à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œà¹„à¸¡à¹ˆà¹„à¸”à¹‰",
                                    size="xs",
                                    color=COLOR_MUTED,
                                    max_lines=2,
                                ),
                            ],
                        },
                    ],
                },
                online_station_summary_box(online_type_counts),
                flex_text(
                    f"à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹€à¸¡à¸·à¹ˆà¸­ {report_time_text()}",
                    size="xs",
                    color=COLOR_MUTED,
                    align="center",
                ),
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
                    "à¹€à¸›à¸´à¸”à¸£à¸°à¸šà¸š GIS",
                    ARCGIS_DASHBOARD_URL,
                    primary=True,
                ),
            ],
        },
    }


# ============================================================
# 17. à¸à¸¥à¹ˆà¸­à¸‡à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸” Alarm
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
        "margin": "sm",
        "paddingAll": "10px",
        "backgroundColor": COLOR_SURFACE,
        "borderColor": "#EAB3B8",
        "borderWidth": "1px",
        "cornerRadius": "14px",
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
# 18. à¸à¸²à¸£à¹Œà¸”à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¹à¸•à¹ˆà¸¥à¸°à¸ªà¸–à¸²à¸™à¸µ
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
        "urgent": "à¸£à¸°à¸”à¸±à¸šà¹€à¸£à¹ˆà¸‡à¸”à¹ˆà¸§à¸™",
        "watch": "à¸£à¸°à¸”à¸±à¸šà¹€à¸à¹‰à¸²à¸£à¸°à¸§à¸±à¸‡",
        "follow": "à¸£à¸°à¸”à¸±à¸šà¸•à¸´à¸”à¸•à¸²à¸¡à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ",
    }.get(
        severity,
        "à¸£à¸°à¸”à¸±à¸šà¸•à¸´à¸”à¸•à¸²à¸¡à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ",
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
            f"à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸¥à¹ˆà¸²à¸ªà¸¸à¸” à¸“ {last_update}",
            size="xs",
            color=COLOR_MUTED,
        ),

        {
            "type": "box",
            "layout": "horizontal",
            "spacing": "sm",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "paddingAll": "9px",
                    "backgroundColor": COLOR_GREEN_SOFT,
                    "borderColor": COLOR_GREEN_BORDER,
                    "borderWidth": "1px",
                    "cornerRadius": "10px",
                    "contents": [
                        flex_text(
                            "à¸ªà¸–à¸²à¸™à¸°à¸ªà¸–à¸²à¸™à¸µ",
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
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "paddingAll": "9px",
                    "backgroundColor": COLOR_PRIMARY_SOFT,
                    "borderColor": COLOR_PRIMARY_BORDER,
                    "borderWidth": "1px",
                    "cornerRadius": "10px",
                    "contents": [
                        flex_text(
                            "à¸›à¸£à¸°à¹€à¸ à¸—à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸§à¸±à¸” (Type)",
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
                },
            ],
        },

        {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "9px",
            "backgroundColor": severity_background,
            "borderColor": severity_color,
            "borderWidth": "2px",
            "cornerRadius": "12px",
            "contents": [
                flex_text(
                    "à¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™ (ParameterAlram)",
                    size="sm",
                    weight="bold",
                    color=COLOR_RED_DARK,
                ),
            ],
        },
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
                    "à¸¡à¸µà¸£à¸²à¸¢à¸à¸²à¸£à¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸•à¸´à¸¡ "
                    f"{remaining_count} à¸£à¸²à¸¢à¸à¸²à¸£ "
                    "à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹ƒà¸™à¸£à¸°à¸šà¸š GIS"
                ),
                size="xs",
                color=COLOR_MUTED,
                align="center",
            )
        )

    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "paddingAll": "11px",
        "backgroundColor": COLOR_YELLOW_SOFT,
        "borderColor": COLOR_YELLOW,
        "borderWidth": "1px",
        "cornerRadius": "12px",
        "spacing": "xs",
        "contents": [
            flex_text(
                "à¸ªà¸²à¹€à¸«à¸•à¸¸ / à¸à¸²à¸£à¸•à¸´à¸”à¸•à¸²à¸¡à¸œà¸¥ (Comment)",
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
    })

    return {
        "type": "bubble",
        "size": "giga",

        "header": card_header(
            severity_text,
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
            "layout": "horizontal",
            "spacing": "xs",
            "paddingAll": "8px",
            "backgroundColor": COLOR_PRIMARY_PALE,
            "borderColor": COLOR_PRIMARY_BORDER,
            "borderWidth": "1px",
            "contents": [
                flex_button(
                    "à¸•à¸³à¹à¸«à¸™à¹ˆà¸‡à¸ªà¸–à¸²à¸™à¸µ",
                    station_map_url(feature),
                    primary=True,
                ),
                flex_button(
                    "à¹€à¸›à¸´à¸”à¸£à¸°à¸šà¸š GIS",
                    ARCGIS_DASHBOARD_URL,
                ),
            ],
        },
    }


# ============================================================
# 19. à¸ªà¹ˆà¸‡ LINE Broadcast
# ============================================================

def send_line_flex(
    alt_text: str,
    contents: dict[str, Any],
) -> None:
    if not LINE_CHANNEL_ACCESS_TOKEN:
        raise RuntimeError(
            "à¹„à¸¡à¹ˆà¸žà¸š LINE_CHANNEL_ACCESS_TOKEN"
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
                "à¸ªà¹ˆà¸‡ LINE Broadcast à¸ªà¸³à¹€à¸£à¹‡à¸ˆ "
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
            "à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸•à¹ˆà¸­ "
            "LINE Broadcast API à¹„à¸”à¹‰: "
            f"{error.reason}"
        ) from error


# ============================================================
# 20. à¹à¸šà¹ˆà¸‡à¸£à¸²à¸¢à¸à¸²à¸£à¹€à¸›à¹‡à¸™à¸Šà¸¸à¸”
# ============================================================

def chunk_list(
    items: list[Any],
    chunk_size: int,
) -> list[list[Any]]:
    if chunk_size <= 0:
        raise ValueError(
            "chunk_size à¸•à¹‰à¸­à¸‡à¸¡à¸²à¸à¸à¸§à¹ˆà¸² 0"
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
    """à¸„à¸³à¸™à¸§à¸“à¸‚à¸™à¸²à¸” JSON à¸ˆà¸£à¸´à¸‡à¹à¸šà¸š UTF-8 à¸‚à¸­à¸‡ Flex Carousel"""
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
    """à¹à¸šà¹ˆà¸‡ Bubble à¸•à¸²à¸¡à¸ˆà¸³à¸™à¸§à¸™à¹à¸¥à¸°à¸‚à¸™à¸²à¸” JSON à¹€à¸žà¸·à¹ˆà¸­à¹„à¸¡à¹ˆà¹ƒà¸«à¹‰à¹€à¸à¸´à¸™à¸‚à¹‰à¸­à¸ˆà¸³à¸à¸±à¸” LINE"""
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
                "à¸à¸²à¸£à¹Œà¸”à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸‚à¸­à¸‡à¸ªà¸–à¸²à¸™à¸µà¸¡à¸µà¸‚à¸™à¸²à¸”à¹ƒà¸«à¸à¹ˆà¹€à¸à¸´à¸™à¸‚à¹‰à¸­à¸ˆà¸³à¸à¸±à¸” LINE: "
                f"{single_size:,} bytes"
            )

    if current_batch:
        batches.append(current_batch)

    return batches


# ============================================================
# 21. à¸ªà¹ˆà¸‡à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸ªà¸–à¸²à¸™à¸µà¹à¸šà¸š Carousel
# ============================================================

def send_alert_detail_carousels(
    alert_features: list[dict[str, Any]],
) -> None:
    if not alert_features:
        print(
            "à¹„à¸¡à¹ˆà¸¡à¸µà¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸ªà¸–à¸²à¸™à¸µà¸—à¸µà¹ˆà¸•à¹‰à¸­à¸‡à¸ªà¹ˆà¸‡"
        )
        return

    batches = build_carousel_batches(
        alert_features
    )

    total_alerts = len(
        alert_features
    )

    total_batches = len(
        batches
    )

    for batch_number, bubbles in enumerate(
        batches,
        start=1,
    ):
        carousel = {
            "type": "carousel",
            "contents": bubbles,
        }

        carousel_size = carousel_json_size_bytes(
            bubbles
        )

        alt_text = (
            "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™ "
            "e-Monitoring "
            f"{total_alerts} à¸ªà¸–à¸²à¸™à¸µ"
        )

        if total_batches > 1:
            alt_text += (
                f" à¸Šà¸¸à¸”à¸—à¸µà¹ˆ {batch_number}/"
                f"{total_batches}"
            )

        print(
            "à¸à¸³à¸¥à¸±à¸‡à¸ªà¹ˆà¸‡à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸ªà¸–à¸²à¸™à¸µ "
            f"à¸Šà¸¸à¸”à¸—à¸µà¹ˆ {batch_number}/"
            f"{total_batches} "
            f"à¸ˆà¸³à¸™à¸§à¸™ {len(bubbles)} à¸ªà¸–à¸²à¸™à¸µ "
            f"à¸‚à¸™à¸²à¸” {carousel_size:,} bytes"
        )

        send_line_flex(
            alt_text,
            carousel,
        )

        if batch_number < total_batches:
            time.sleep(1)


# ============================================================
# 22. à¸ªà¸£à¹‰à¸²à¸‡à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ªà¸³à¸«à¸£à¸±à¸šà¸«à¸™à¹‰à¸² "à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œà¸¥à¹ˆà¸²à¸ªà¸¸à¸”"
# ============================================================

def write_status_json(
    alert_features: list[dict[str, Any]],
    online_type_counts: dict[str, Any],
    has_current_data: bool,
) -> None:
    """à¹€à¸‚à¸µà¸¢à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸¥à¹ˆà¸²à¸ªà¸¸à¸”à¹ƒà¸«à¹‰à¸«à¸™à¹‰à¸² GitHub Pages à¸­à¹ˆà¸²à¸™à¸ˆà¸²à¸ docs/status.json"""
    station_items: list[dict[str, Any]] = []
    parameter_names: set[str] = set()
    estate_names: set[str] = set()

    urgent_count = 0
    watch_count = 0
    follow_count = 0

    severity_texts = {
        "urgent": "à¸£à¸°à¸”à¸±à¸šà¹€à¸£à¹ˆà¸‡à¸”à¹ˆà¸§à¸™",
        "watch": "à¸£à¸°à¸”à¸±à¸šà¹€à¸à¹‰à¸²à¸£à¸°à¸§à¸±à¸‡",
        "follow": "à¸£à¸°à¸”à¸±à¸šà¸•à¸´à¸”à¸•à¸²à¸¡à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ",
    }

    for feature in alert_features:
        properties = feature.get("properties", {})
        if not isinstance(properties, dict):
            continue

        entries = properties.get("_today_alarm_entries", [])
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
            "parameter": ", ".join(names) if names else "à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¹à¸ˆà¹‰à¸‡à¹€à¸•à¸·à¸­à¸™",
            "parameter_alarm": entries,
            "value": " | ".join(
                remove_alarm_datetime(entry) for entry in entries
            ),
            "comment": get_station_comment(properties),
            "detected_at": ", ".join(detected_times) or "-",
            "severity": severity_texts.get(
                severity,
                "à¸£à¸°à¸”à¸±à¸šà¸•à¸´à¸”à¸•à¸²à¸¡à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ",
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
            "à¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™"
            if has_alert
            else "à¹„à¸¡à¹ˆà¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™"
        ),
        "description": (
            "à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸‚à¸­à¸‡à¸ªà¸–à¸²à¸™à¸µà¹à¸¥à¸°à¸•à¸´à¸”à¸•à¸²à¸¡à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ"
            if has_alert
            else "à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸‚à¸­à¸‡à¸§à¸±à¸™à¸›à¸±à¸ˆà¸ˆà¸¸à¸šà¸±à¸™à¹à¸¥à¹‰à¸§"
            if has_current_data
            else "à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¸¡à¸µà¸ªà¸–à¸²à¸™à¸µ ONLINE à¸—à¸µà¹ˆà¸­à¸±à¸›à¹€à¸”à¸•à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸™à¸§à¸±à¸™à¸™à¸µà¹‰ à¸ˆà¸¶à¸‡à¸¢à¸±à¸‡à¸¢à¸·à¸™à¸¢à¸±à¸™à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œà¹„à¸¡à¹ˆà¹„à¸”à¹‰"
        ),
        "updated_at": report_time_text(),
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

    print(f"à¸­à¸±à¸›à¹€à¸”à¸•à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸«à¸™à¹‰à¸²à¹€à¸§à¹‡à¸šà¹à¸¥à¹‰à¸§: {output_path}")


# ============================================================
# 23. à¹‚à¸›à¸£à¹à¸à¸£à¸¡à¸«à¸¥à¸±à¸
# ============================================================

def main() -> None:
    print("=" * 80)
    print("IEAT e-Monitoring LINE Alert")
    print("=" * 80)

    print(
        "à¹€à¸§à¸¥à¸²à¸›à¸£à¸°à¹€à¸—à¸¨à¹„à¸—à¸¢:",
        now_thailand().strftime(
            "%Y-%m-%d %H:%M:%S"
        ),
    )

    print(
        "à¸à¸³à¸¥à¸±à¸‡à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ "
        "e-Monitoring..."
    )

    data = download_data()

    features = get_features(
        data
    )

    print(
        "Feature à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”:",
        len(features),
    )

    if not features:
        raise RuntimeError(
            "à¹„à¸¡à¹ˆà¸žà¸š Feature à¸ˆà¸²à¸à¸‚à¹‰à¸­à¸¡à¸¹à¸¥ "
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

    # à¸­à¸±à¸›à¹€à¸”à¸•à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸«à¸™à¹‰à¸² "à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œà¸¥à¹ˆà¸²à¸ªà¸¸à¸”" à¸—à¸¸à¸à¸„à¸£à¸±à¹‰à¸‡à¸—à¸µà¹ˆ Workflow à¸—à¸³à¸‡à¸²à¸™
    write_status_json(
        alert_features,
        online_type_counts,
        has_current_data=bool(current_features),
    )

    latest_online_update = get_latest_online_update(features)

    print()
    print("=" * 80)
    print("à¸ªà¸£à¸¸à¸›à¸œà¸¥à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸š")
    print("=" * 80)

    print(
        "à¸ªà¸–à¸²à¸™à¸µ ONLINE à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”:",
        online_type_counts.get(
            "total",
            0,
        ),
    )

    print(
        "à¸ªà¸–à¸²à¸™à¸µ OFFLINE à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”:",
        online_type_counts.get("offline", 0),
    )

    print(
        "à¸ªà¸–à¸²à¸™à¸µà¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”:",
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
        "à¸›à¸£à¸°à¹€à¸ à¸—à¸­à¸·à¹ˆà¸™ ONLINE:",
        online_type_counts.get(
            "Other",
            0,
        ),
    )

    print(
        "ONLINE à¹à¸•à¹ˆà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹„à¸¡à¹ˆà¹ƒà¸Šà¹ˆà¸§à¸±à¸™à¸™à¸µà¹‰:",
        stale_online_count,
    )

    print(
        "à¸ªà¸–à¸²à¸™à¸µ ONLINE à¸—à¸µà¹ˆà¸™à¸³à¸¡à¸²à¸•à¸£à¸§à¸ˆ Alarm:",
        len(current_features),
    )

    print(
        "à¸ªà¸–à¸²à¸™à¸µà¸—à¸µà¹ˆà¸¡à¸µà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¹€à¸à¸´à¸™à¸¡à¸²à¸•à¸£à¸à¸²à¸™à¸‚à¸­à¸‡à¸§à¸±à¸™à¸™à¸µà¹‰:",
        len(alert_features),
    )

    print(
        "LastUpdate à¸¥à¹ˆà¸²à¸ªà¸¸à¸”:",
        latest_online_update.isoformat()
        if latest_online_update is not None
        else "à¹„à¸¡à¹ˆà¸žà¸š",
    )

    print("=" * 80)

    # à¸ªà¹ˆà¸‡à¸£à¸²à¸¢à¸‡à¸²à¸™à¸—à¸¸à¸à¸„à¸£à¸±à¹‰à¸‡ à¹‚à¸”à¸¢ Alarm à¹ƒà¸Šà¹‰à¹€à¸‰à¸žà¸²à¸°à¸ªà¸–à¸²à¸™à¸µ ONLINE à¸—à¸µà¹ˆà¸¡à¸µ LastUpdate à¸§à¸±à¸™à¸™à¸µà¹‰
    if alert_features:
        print(
            "à¸ªà¹ˆà¸‡à¸à¸²à¸£à¹Œà¸”à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ"
        )

        summary_bubble = (
            build_alert_summary_bubble(
                alert_features,
                online_type_counts,
            )
        )

        send_line_flex(
            (
                "à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ e-Monitoring "
                f"à¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™ "
                f"{len(alert_features)} à¸ªà¸–à¸²à¸™à¸µ"
            ),
            summary_bubble,
        )

        time.sleep(1)

        print(
            "à¸ªà¹ˆà¸‡à¸à¸²à¸£à¹Œà¸”à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸ªà¸–à¸²à¸™à¸µ"
        )

        send_alert_detail_carousels(
            alert_features
        )

    elif current_features:
        print("à¹„à¸¡à¹ˆà¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™ à¸ªà¹ˆà¸‡à¸à¸²à¸£à¹Œà¸”à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ")
        send_line_flex(
            "e-Monitoring: à¹„à¸¡à¹ˆà¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™",
            build_normal_summary_bubble(online_type_counts),
        )

    else:
        print("à¸¢à¸±à¸‡à¹„à¸¡à¹ˆà¸¡à¸µà¸ªà¸–à¸²à¸™à¸µ ONLINE à¸—à¸µà¹ˆà¸­à¸±à¸›à¹€à¸”à¸•à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¹ƒà¸™à¸§à¸±à¸™à¸™à¸µà¹‰ à¸ªà¹ˆà¸‡à¸à¸²à¸£à¹Œà¸”à¸ªà¸£à¸¸à¸›à¸ªà¸–à¸²à¸™à¸à¸²à¸£à¸“à¹Œ")
        send_line_flex(
            "e-Monitoring: à¹„à¸¡à¹ˆà¸žà¸šà¸„à¹ˆà¸²à¸žà¸²à¸£à¸²à¸¡à¸´à¹€à¸•à¸­à¸£à¹Œà¸—à¸µà¹ˆà¹€à¸à¸´à¸™à¸„à¹ˆà¸²à¸¡à¸²à¸•à¸£à¸à¸²à¸™",
            build_no_current_data_summary_bubble(online_type_counts),
        )

    print("à¸ªà¹ˆà¸‡à¸£à¸²à¸¢à¸‡à¸²à¸™à¸›à¸£à¸°à¸ˆà¸³à¸£à¸­à¸šà¹€à¸‚à¹‰à¸² LINE à¹€à¸£à¸µà¸¢à¸šà¸£à¹‰à¸­à¸¢")


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            "ERROR:",
            str(error),
        )

        sys.exit(1)
