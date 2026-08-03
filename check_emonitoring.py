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

REQUEST_TIMEOUT_SECONDS = 60

MAX_BUBBLES_PER_CAROUSEL = 10
MAX_ALARM_ENTRIES_PER_STATION = 6


# ============================================================
# 2. รูปภาพสำหรับ LINE Flex Message
# ============================================================

ASSET_BASE_URL = (
    "https://THANAWAN-KI.github.io/"
    "ieat-emonitoring-line-alert/assets"
)

IEAT_LOGO_URL = f"{ASSET_BASE_URL}/ieat_logo.png"
ALERT_RED_ICON_URL = f"{ASSET_BASE_URL}/alert_red.png"
NORMAL_GREEN_ICON_URL = f"{ASSET_BASE_URL}/normal_green.png"
WATCH_YELLOW_ICON_URL = f"{ASSET_BASE_URL}/watch_yellow.png"


# ============================================================
# 3. ธีมสี
# ============================================================

COLOR_PRIMARY = "#4E2A84"
COLOR_PRIMARY_DARK = "#35205A"
COLOR_PRIMARY_SOFT = "#F5F2F8"

COLOR_RED = "#B32632"
COLOR_RED_DARK = "#8E1E28"
COLOR_RED_SOFT = "#FFF3F4"

COLOR_GREEN = "#2F7D4A"
COLOR_GREEN_DARK = "#23613A"
COLOR_GREEN_SOFT = "#F1F8F3"

COLOR_YELLOW = "#B87422"
COLOR_YELLOW_DARK = "#955C18"
COLOR_YELLOW_SOFT = "#FFF7EC"

COLOR_GOLD = "#B79A5B"

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
    return datetime.now(THAILAND_TIMEZONE)


def clean_text(
    value: Any,
    default: str = "",
) -> str:
    """
    ทำความสะอาดข้อความ

    ค่าต่อไปนี้ถือว่าไม่มีข้อมูล:
    None, "", "-", null, none, nan, undefined, 9999
    """

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
    return clean_text(value).upper() == "ONLINE"


def has_parameter_alarm(value: Any) -> bool:
    return bool(clean_text(value))


# ============================================================
# 5. การจัดการวันที่และเวลา
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


def parse_datetime(value: Any) -> datetime | None:
    """
    รองรับตัวอย่าง:

    2026-08-03 09:00
    2026-08-03 09:00:00
    2026-08-03T09:00
    26-08-03 09:00
    """

    text = clean_text(value)

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


def is_today(value: Any) -> bool:
    parsed = parse_datetime(value)

    if parsed is None:
        return False

    return parsed.date() == now_thailand().date()


def format_datetime_thai(value: Any) -> str:
    parsed = parse_datetime(value)

    if parsed is None:
        return clean_text(value, "-")

    thai_year = parsed.year + 543
    thai_month = THAI_MONTHS_SHORT.get(
        parsed.month,
        "",
    )

    return (
        f"{parsed.day} {thai_month} {thai_year} "
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
        f"{current.day} {thai_month} {thai_year} "
        f"เวลา {current:%H:%M} น."
    )


# ============================================================
# 6. ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_data() -> Any:
    timestamp = int(time.time())

    separator = "&" if "?" in DATA_URL else "?"

    request_url = (
        f"{DATA_URL}{separator}_t={timestamp}"
    )

    request = urllib.request.Request(
        request_url,
        headers={
            "User-Agent": (
                "IEAT-eMonitoring-LINE-Alert/7.0"
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
            f"ดาวน์โหลดข้อมูล e-Monitoring ไม่สำเร็จ "
            f"HTTP {error.code}: {error_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อแหล่งข้อมูล "
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

    features = data.get("features", [])

    if not isinstance(features, list):
        return []

    return [
        feature
        for feature in features
        if isinstance(feature, dict)
    ]


# ============================================================
# 7. แยกข้อมูล ParameterAlram
# ============================================================

def split_parameter_alarm(
    value: Any,
) -> list[str]:
    """
    แยก ParameterAlram เป็นรายเหตุการณ์

    ตัวอย่าง:
    26-08-03 09:00 (...) , 26-08-03 08:00 (...)
    """

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

    result = []

    for part in parts:
        cleaned = part.strip(
            " ,\n\t"
        )

        if cleaned:
            result.append(cleaned)

    return result


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
    """
    เลือกเฉพาะรายการ Alarm ที่เป็นวันที่วันนี้
    """

    today = now_thailand().date()
    today_entries = []

    for entry in split_parameter_alarm(value):
        alarm_datetime = get_alarm_datetime(
            entry
        )

        if alarm_datetime is None:
            print(
                "ข้าม Alarm เนื่องจากอ่านวันที่ไม่ได้:",
                entry,
            )
            continue

        if alarm_datetime.date() != today:
            continue

        today_entries.append(entry)

    return today_entries


# ============================================================
# 8. จัดรูปแบบรายการ Alarm
# ============================================================

def remove_alarm_datetime(
    alarm_entry: str,
) -> str:
    """
    ลบวันเวลาออกจากข้อความ Alarm

    ตัวอย่าง:
    26-08-03 09:00 (SO2 120 ppb)
    เหลือ:
    SO2 120 ppb
    """

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

    return cleaned.strip(" ()")


def alarm_time_text(
    alarm_entry: str,
) -> str:
    parsed = get_alarm_datetime(
        alarm_entry
    )

    if parsed is None:
        return ""

    return f"{parsed:%H:%M} น."


def extract_parameter_name(
    alarm_entry: str,
) -> str:
    """
    พยายามอ่านชื่อ Parameter ตัวแรกจากข้อความ Alarm
    """

    content = remove_alarm_datetime(
        alarm_entry
    )

    match = re.search(
        r"([A-Za-z][A-Za-z0-9_.@%-]*)",
        content,
    )

    if not match:
        return "พารามิเตอร์แจ้งเตือน"

    name = match.group(1)

    replacements = {
        "SO2": "SO₂",
        "NO2": "NO₂",
        "O3": "O₃",
        "H2S": "H₂S",
        "CH4": "CH₄",
        "PM25": "PM2.5",
        "PM2_5": "PM2.5",
    }

    return replacements.get(
        name.upper(),
        name,
    )


def alarm_detail_text(
    alarm_entry: str,
) -> str:
    content = remove_alarm_datetime(
        alarm_entry
    )

    if not content:
        return alarm_entry

    return content


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


def get_station_type(
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

    if not isinstance(geometry, dict):
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
        longitude = float(coordinates[0])
        latitude = float(coordinates[1])

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
# 10. กรองสถานีตามเงื่อนไข
# ============================================================

def filter_current_online_features(
    features: list[dict[str, Any]],
) -> tuple[
    list[dict[str, Any]],
    int,
    int,
]:
    """
    คืนค่า:

    1. สถานี ONLINE ที่มี LastUpdate ของวันนี้
    2. จำนวนสถานี ONLINE ทั้งหมด
    3. จำนวนสถานี ONLINE แต่ข้อมูลไม่ใช่วันนี้
    """

    current_features = []

    online_count = 0
    stale_online_count = 0

    for feature in features:
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

        if code == "0":
            continue

        if not station_name:
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

        current_features.append(feature)

    return (
        current_features,
        online_count,
        stale_online_count,
    )


def filter_alert_features(
    current_features: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """
    เลือกเฉพาะสถานีที่:

    1. ONLINE
    2. LastUpdate เป็นวันนี้
    3. ParameterAlram มีข้อมูล
    4. ParameterAlram มีรายการของวันนี้
    """

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

        copied_feature = dict(feature)
        copied_properties = dict(properties)

        copied_properties[
            "_today_alarm_entries"
        ] = today_alarm_entries

        copied_feature[
            "properties"
        ] = copied_properties

        alert_features.append(
            copied_feature
        )

    return alert_features


# ============================================================
# 11. ส่วนประกอบ LINE Flex Message
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


# ============================================================
# 12. Header การ์ดสำหรับมือถือ
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
# 13. กล่องรายการ Alarm
# ============================================================

def alarm_entry_box(
    alarm_entry: str,
) -> dict[str, Any]:
    parameter_name = extract_parameter_name(
        alarm_entry
    )

    detail = alarm_detail_text(
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
                detail,
                size="sm",
                color=COLOR_TEXT,
                max_lines=4,
            ),
        ],
    }


# ============================================================
# 14. การ์ดสีแดง: พบ Parameter Alarm
# ============================================================

def build_alert_bubble(
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

    station_type = get_station_type(
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

    body_contents: list[dict[str, Any]] = [
        {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "center",
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

    if len(alarm_entries) > len(visible_entries):
        remaining_count = (
            len(alarm_entries)
            - len(visible_entries)
        )

        body_contents.append(
            flex_text(
                (
                    f"มีรายการแจ้งเตือนเพิ่มเติม "
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
        ),

        info_row(
            "สถานะสถานี",
            "ONLINE",
            COLOR_GREEN,
        ),

        info_row(
            "ผลการตรวจสอบ",
            "พบค่าเกินเกณฑ์",
            COLOR_RED,
        ),

        {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "paddingAll": "12px",
            "backgroundColor": COLOR_RED_SOFT,
            "cornerRadius": "10px",
            "contents": [
                flex_text(
                    (
                        "ตรวจพบค่าพารามิเตอร์ที่เกินเกณฑ์"
                        "มาตรฐาน โปรดตรวจสอบรายละเอียดและ"
                        "ดำเนินการตามแนวทางที่เกี่ยวข้อง"
                    ),
                    size="sm",
                    color=COLOR_RED_DARK,
                ),
            ],
        },
    ])

    return {
        "type": "bubble",
        "size": "kilo",

        "header": card_header(
            "แจ้งเตือนค่าพารามิเตอร์เกินเกณฑ์",
            COLOR_RED,
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
# 15. การ์ดสีเขียว: ไม่พบค่าเกินมาตรฐาน
# ============================================================

def build_normal_bubble(
    current_station_count: int,
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "kilo",

        "header": card_header(
            "รายงานสถานะการเฝ้าระวัง",
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
                    "alignItems": "center",
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
                                        "ไม่พบค่าพารามิเตอร์"
                                        "เกินเกณฑ์มาตรฐาน"
                                    ),
                                    size="md",
                                    weight="bold",
                                    color=COLOR_GREEN_DARK,
                                    max_lines=3,
                                ),
                                flex_text(
                                    (
                                        "ตรวจสอบ ณ "
                                        f"{report_time_text()}"
                                    ),
                                    size="xs",
                                    color=COLOR_MUTED,
                                ),
                            ],
                        },
                    ],
                },

                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "12px",
                    "backgroundColor": COLOR_GREEN_SOFT,
                    "cornerRadius": "10px",
                    "contents": [
                        flex_text(
                            (
                                "จากการตรวจสอบข้อมูลสถานี "
                                "e-Monitoring ที่มีสถานะ ONLINE "
                                "และมีข้อมูลเป็นปัจจุบัน ไม่พบค่า"
                                "พารามิเตอร์เกินเกณฑ์มาตรฐาน"
                            ),
                            size="sm",
                            color=COLOR_GREEN_DARK,
                        ),
                    ],
                },

                flex_separator(),

                info_row(
                    "สถานีที่ตรวจสอบ",
                    f"{current_station_count} สถานี",
                ),

                info_row(
                    "ผลการตรวจสอบ",
                    "ไม่พบค่าเกินมาตรฐาน",
                    COLOR_GREEN,
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
# 16. การ์ดสีเหลือง: ข้อมูลไม่เป็นปัจจุบัน
# ============================================================

def build_stale_bubble(
    online_count: int,
    stale_online_count: int,
) -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "kilo",

        "header": card_header(
            "แจ้งเตือนสถานะข้อมูล",
            COLOR_YELLOW,
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
                    "alignItems": "center",
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
                                        "ไม่พบข้อมูลปัจจุบันเพียงพอ"
                                        "สำหรับการประเมินสถานะ"
                                    ),
                                    size="md",
                                    weight="bold",
                                    color=COLOR_YELLOW_DARK,
                                    max_lines=4,
                                ),
                                flex_text(
                                    (
                                        "ตรวจสอบ ณ "
                                        f"{report_time_text()}"
                                    ),
                                    size="xs",
                                    color=COLOR_MUTED,
                                ),
                            ],
                        },
                    ],
                },

                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "12px",
                    "backgroundColor": COLOR_YELLOW_SOFT,
                    "cornerRadius": "10px",
                    "contents": [
                        flex_text(
                            (
                                "ระบบยังไม่สามารถยืนยันสถานะ"
                                "พารามิเตอร์ได้ในขณะนี้ เนื่องจาก"
                                "ไม่พบข้อมูลของวันนี้จากสถานีที่มี"
                                "สถานะ ONLINE โปรดตรวจสอบระบบ "
                                "e-Monitoring หรือแหล่งข้อมูลต้นทาง"
                            ),
                            size="sm",
                            color=COLOR_YELLOW_DARK,
                        ),
                    ],
                },

                flex_separator(),

                info_row(
                    "สถานี ONLINE",
                    f"{online_count} สถานี",
                ),

                info_row(
                    "ข้อมูลไม่เป็นปัจจุบัน",
                    f"{stale_online_count} สถานี",
                    COLOR_YELLOW,
                ),

                info_row(
                    "สถานะการประเมิน",
                    "ยังไม่สามารถยืนยันได้",
                    COLOR_YELLOW,
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
# 17. ส่งข้อความ LINE Flex
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

    request_body = json.dumps(
        payload,
        ensure_ascii=False,
    ).encode("utf-8")

    request = urllib.request.Request(
        LINE_PUSH_URL,
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
                "ส่ง LINE สำเร็จ "
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
            f"LINE API HTTP {error.code}: "
            f"{error_body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อ LINE API ได้: "
            f"{error.reason}"
        ) from error


def chunk_list(
    items: list[Any],
    chunk_size: int,
) -> list[list[Any]]:
    return [
        items[index:index + chunk_size]
        for index in range(
            0,
            len(items),
            chunk_size,
        )
    ]


def send_alert_carousels(
    alert_features: list[dict[str, Any]],
) -> None:
    batches = chunk_list(
        alert_features,
        MAX_BUBBLES_PER_CAROUSEL,
    )

    total_alerts = len(
        alert_features
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
            f"พบค่าพารามิเตอร์เกินเกณฑ์ "
            f"{total_alerts} สถานี"
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
# 18. โปรแกรมหลัก
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
        "กำลังดาวน์โหลดข้อมูล e-Monitoring..."
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
            "ไม่พบ Feature จากข้อมูล e-Monitoring"
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

    print()
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
        "สถานีที่มี ParameterAlram ของวันนี้:",
        len(alert_features),
    )

    print("=" * 80)

    # --------------------------------------------------------
    # กรณีที่ 1: พบ Parameter Alarm
    # --------------------------------------------------------

    if alert_features:
        print(
            "ผลลัพธ์: ส่งการ์ดสีแดง"
        )

        send_alert_carousels(
            alert_features
        )

        return

    # --------------------------------------------------------
    # กรณีที่ 2: มีข้อมูลปัจจุบัน แต่ไม่พบ Alarm
    # --------------------------------------------------------

    if current_features:
        print(
            "ผลลัพธ์: ส่งการ์ดสีเขียว"
        )

        normal_bubble = build_normal_bubble(
            len(current_features)
        )

        send_line_flex(
            (
                "รายงานสถานะ e-Monitoring "
                "ไม่พบค่าพารามิเตอร์เกินเกณฑ์มาตรฐาน"
            ),
            normal_bubble,
        )

        return

    # --------------------------------------------------------
    # กรณีที่ 3: ไม่มีข้อมูลปัจจุบันเพียงพอ
    # --------------------------------------------------------

    print(
        "ผลลัพธ์: ส่งการ์ดสีเหลือง"
    )

    stale_bubble = build_stale_bubble(
        online_count,
        stale_online_count,
    )

    send_line_flex(
        (
            "แจ้งเตือนสถานะข้อมูล e-Monitoring "
            "ไม่พบข้อมูลปัจจุบันเพียงพอ"
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
