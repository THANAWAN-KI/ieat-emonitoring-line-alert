import json
import os
import re
import sys
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
    "https://experience.arcgis.com/experience/"
    "dd1d5523f3bd425b939b51ad91e06171"
)


# ============================================================
# 2. รูปภาพจาก GitHub Pages
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
# 3. ธีมสี IEAT Purple Modern
# ============================================================

COLOR_PRIMARY = "#2F3A56"
COLOR_HIGHLIGHT = "#4E5D78"
COLOR_SECONDARY = "#233046"
COLOR_PURPLE_LIGHT = "#D9E2EC"
COLOR_BACKGROUND = "#F4F6F8"

COLOR_TEXT = "#1F2937"
COLOR_MUTED = "#6B7280"
COLOR_DISABLED = "#AAB2BD"
COLOR_BORDER = "#D9E2EC"

COLOR_SUCCESS = "#2E7D32"
COLOR_ACCENT = "#C8A951"
COLOR_DANGER = "#C62828"

COLOR_WHITE = "#FFFFFF"
COLOR_SURFACE = "#FFFFFF"

COLOR_RED_BACKGROUND = "#FFF7F7"
COLOR_GREEN_BACKGROUND = "#F5FAF5"
COLOR_PURPLE_BACKGROUND = "#F3F5F8"
COLOR_YELLOW_BACKGROUND = "#FFF9E6"

# รองรับตัวแปรสีเดิม
COLOR_GREEN = COLOR_SUCCESS
COLOR_RED = COLOR_DANGER
COLOR_RED_DARK = COLOR_DANGER
COLOR_BLUE_BACKGROUND = COLOR_PURPLE_BACKGROUND
COLOR_TEAL = COLOR_SUCCESS
COLOR_LIGHT_TEAL = COLOR_PURPLE_LIGHT

THAILAND_TIMEZONE = timezone(timedelta(hours=7))


# ============================================================
# 4. ชื่อพารามิเตอร์
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
    "BOD": "BOD",
    "COD": "COD",
    "DO": "DO",
    "PH": "pH",
    "FLOW": "FLOW",
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
    "BOD": "BOD",
    "COD": "COD",
    "DO": "DO",
    "pH": "pH",
    "FLOW": "อัตราการไหล",
}

NUMBER_PATTERN = re.compile(r"[-+]?\d[\d,]*(?:\.\d+)?")

STANDARD_PATTERNS = [
    re.compile(
        r"\(\s*STD\s*[:=]?\s*([0-9,]+(?:\.[0-9]+)?)\s*\)",
        re.IGNORECASE,
    ),
    re.compile(
        r"STD\s*[:=]?\s*([0-9,]+(?:\.[0-9]+)?)",
        re.IGNORECASE,
    ),
    re.compile(
        r"มาตรฐาน\s*[:=]?\s*([0-9,]+(?:\.[0-9]+)?)",
        re.IGNORECASE,
    ),
]


# ============================================================
# 5. ฟังก์ชันพื้นฐาน
# ============================================================

def clean_text(value: Any, default: str = "-") -> str:
    if value is None:
        return default

    text = str(value).strip()

    if text.lower() in {
        "",
        "-",
        "none",
        "null",
        "nan",
        "9999",
        "9999.0",
    }:
        return default

    return text


def safe_float(value: Any) -> float | None:
    if value is None or isinstance(value, bool):
        return None

    if isinstance(value, str):
        text = value.strip()

        if text.lower() in {
            "",
            "-",
            "none",
            "null",
            "nan",
            "9999",
            "9999.0",
        }:
            return None

        match = NUMBER_PATTERN.search(text)

        if not match:
            return None

        text = match.group(0).replace(",", "")

        try:
            number = float(text)
        except ValueError:
            return None
    else:
        try:
            number = float(value)
        except (TypeError, ValueError):
            return None

    if number == 9999:
        return None

    return number


def format_number(value: float | None) -> str:
    if value is None:
        return "-"

    if float(value).is_integer():
        return f"{int(value):,}"

    return f"{value:,.2f}".rstrip("0").rstrip(".")


def normalize_unit(unit: str) -> str:
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
        "MG/L": "mg/L",
        "M/S": "m/s",
        "PPM": "ppm",
        "PPB": "ppb",
    }

    for source, target in replacements.items():
        result = result.replace(source, target)

    return result.strip()


def extract_standard(text: Any) -> float | None:
    if not isinstance(text, str):
        return None

    for pattern in STANDARD_PATTERNS:
        match = pattern.search(text)

        if match:
            return safe_float(match.group(1))

    return None


def extract_unit(text: Any) -> str:
    if not isinstance(text, str):
        return ""

    cleaned = text.strip()

    for pattern in STANDARD_PATTERNS:
        cleaned = pattern.sub("", cleaned)

    number_match = NUMBER_PATTERN.search(cleaned)

    if number_match:
        cleaned = cleaned[number_match.end():].strip()

    cleaned = cleaned.strip(" :-,()")
    return normalize_unit(cleaned)


def thai_report_time() -> str:
    now = datetime.now(THAILAND_TIMEZONE)

    thai_months = [
        "",
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
    ]

    return (
        f"{now.day} {thai_months[now.month]} "
        f"{now.year + 543} {now:%H:%M} น."
    )


def google_maps_url(latitude: float, longitude: float) -> str:
    return (
        "https://www.google.com/maps/search/?api=1&query="
        f"{latitude},{longitude}"
    )


# ============================================================
# 6. ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_json(url: str) -> Any:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "IEAT-eMonitoring-LINE-Alert/4.0",
            "Accept": "application/json",
            "Cache-Control": "no-cache",
        },
    )

    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            raw_data = response.read()

            try:
                text = raw_data.decode("utf-8-sig")
            except UnicodeDecodeError:
                text = raw_data.decode("utf-8", errors="replace")

            return json.loads(text)

    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ HTTP {error.code}: {body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            f"เชื่อมต่อแหล่งข้อมูลไม่ได้: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            "ข้อมูลจาก e-Monitoring ไม่ใช่ JSON ที่ถูกต้อง"
        ) from error


# ============================================================
# 7. อ่าน ParameterAlram
# ============================================================

def parse_parameter_alarm(value: Any) -> list[str]:
    text = clean_text(value, "")

    if not text:
        return []

    normalized = (
        text.upper()
        .replace("_TXT", " ")
        .replace("-", " ")
        .replace("/", " ")
        .replace(",", " ")
        .replace(";", " ")
        .replace("|", " ")
        .replace(":", " ")
        .replace("\n", " ")
    )

    detected: list[str] = []

    sorted_aliases = sorted(
        PARAMETER_ALIASES.items(),
        key=lambda item: len(item[0]),
        reverse=True,
    )

    for alias, field_name in sorted_aliases:
        pattern = (
            r"(?<![A-Z0-9])"
            + re.escape(alias.upper())
            + r"(?![A-Z0-9])"
        )

        if re.search(pattern, normalized):
            if field_name not in detected:
                detected.append(field_name)

    return detected


def find_property_value(
    properties: dict[str, Any],
    field_name: str,
) -> Any:
    possible_names = [
        field_name,
        field_name.upper(),
        field_name.lower(),
    ]

    special_names = {
        "PM25": ["PM25", "PM2.5", "PM2_5", "pm25"],
        "NOx": ["NOx", "NOX", "Nox", "nox"],
        "pH": ["pH", "PH", "ph"],
        "O3": ["O3", "o3"],
    }

    possible_names.extend(special_names.get(field_name, []))

    for name in possible_names:
        if name in properties:
            return properties.get(name)

    return None


def find_text_property(
    properties: dict[str, Any],
    field_name: str,
) -> Any:
    possible_names = [
        f"{field_name}_txt",
        f"{field_name.upper()}_txt",
        f"{field_name.lower()}_txt",
    ]

    special_names = {
        "PM25": ["PM25_txt", "PM2.5_txt", "PM2_5_txt", "pm25_txt"],
        "NOx": ["NOx_txt", "NOX_txt", "Nox_txt", "nox_txt"],
        "pH": ["pH_txt", "PH_txt", "ph_txt"],
        "O3": ["O3_txt", "o3_txt"],
    }

    possible_names.extend(special_names.get(field_name, []))

    for name in possible_names:
        if name in properties:
            return properties.get(name)

    return None


def get_parameter_information(
    properties: dict[str, Any],
    parameter: str,
) -> dict[str, Any]:
    raw_value = find_property_value(properties, parameter)
    raw_text = find_text_property(properties, parameter)

    value = safe_float(raw_value)
    display_text = clean_text(raw_text, "")
    standard = extract_standard(display_text)
    unit = extract_unit(display_text)

    ratio = None

    if value is not None and standard is not None and standard > 0:
        ratio = value / standard

    return {
        "parameter": parameter,
        "display_name": PARAMETER_DISPLAY_NAMES.get(parameter, parameter),
        "value": value,
        "standard": standard,
        "unit": unit,
        "display_text": display_text,
        "ratio": ratio,
    }


# ============================================================
# 8. ระดับสถานการณ์
# ============================================================

def calculate_severity(parameters: list[dict[str, Any]]) -> str:
    ratios = [
        item["ratio"]
        for item in parameters
        if item.get("ratio") is not None
    ]

    maximum_ratio = max(ratios, default=1.0)

    if len(parameters) >= 3 or maximum_ratio >= 2.0:
        return "EMERGENCY"

    if maximum_ratio >= 1.5:
        return "ALERT"

    return "WATCH"


def severity_style(severity: str) -> dict[str, str]:
    styles = {
        "EMERGENCY": {
            "name": "ระดับเร่งด่วน",
            "short_name": "เร่งด่วน",
            "header": COLOR_DANGER,
            "background": COLOR_RED_BACKGROUND,
            "accent": COLOR_DANGER,
            "icon": ALERT_RED_ICON_URL,
        },
        "ALERT": {
            "name": "ระดับเฝ้าระวังสูง",
            "short_name": "เฝ้าระวังสูง",
            "header": "#B7791F",
            "background": COLOR_YELLOW_BACKGROUND,
            "accent": "#B7791F",
            "icon": WATCH_YELLOW_ICON_URL,
        },
        "WATCH": {
            "name": "ระดับติดตามสถานการณ์",
            "short_name": "ติดตาม",
            "header": "#4E5D78",
            "background": "#F4F6F8",
            "accent": "#4E5D78",
            "icon": WATCH_YELLOW_ICON_URL,
        },
    }

    return styles.get(severity, styles["WATCH"])


# ============================================================
# 9. รวบรวมข้อมูลสถานีแจ้งเตือน
# ============================================================

def get_features(data: Any) -> list[dict[str, Any]]:
    if isinstance(data, list):
        return [item for item in data if isinstance(item, dict)]

    if isinstance(data, dict):
        features = data.get("features", [])

        if isinstance(features, list):
            return [item for item in features if isinstance(item, dict)]

    raise RuntimeError("ไม่พบรายการ features ในข้อมูล e-Monitoring")


def collect_alert_stations(data: Any) -> list[dict[str, Any]]:
    alerts: list[dict[str, Any]] = []

    for feature in get_features(data):
        properties = feature.get("properties", feature)
        geometry = feature.get("geometry", {})

        if not isinstance(properties, dict):
            continue

        code = clean_text(properties.get("Code"), "")

        if code in {"", "0"}:
            continue

        station_name = clean_text(properties.get("StationTH"), "")

        if not station_name:
            continue

        parameter_alarm = properties.get("ParameterAlram")
        alarm_parameters = parse_parameter_alarm(parameter_alarm)

        if not alarm_parameters:
            continue

        parameters = [
            get_parameter_information(properties, parameter)
            for parameter in alarm_parameters
        ]

        parameters = [
            parameter
            for parameter in parameters
            if (
                parameter.get("value") is not None
                or parameter.get("display_text")
            )
        ]

        if not parameters:
            continue

        latitude = None
        longitude = None

        if isinstance(geometry, dict):
            coordinates = geometry.get("coordinates")

            if isinstance(coordinates, list) and len(coordinates) >= 2:
                longitude = safe_float(coordinates[0])
                latitude = safe_float(coordinates[1])

        alerts.append(
            {
                "code": code,
                "station_name": station_name,
                "industry_zone": clean_text(
                    properties.get("IndustryZone"),
                    "ไม่ระบุนิคมอุตสาหกรรม",
                ),
                "station_type": clean_text(properties.get("Type")),
                "last_update": clean_text(
                    properties.get("LastUpdate-TH")
                    or properties.get("LastUpdate_TH")
                    or properties.get("LastUpdate")
                ),
                "status": clean_text(properties.get("Status")),
                "parameter_alarm": clean_text(parameter_alarm),
                "parameters": parameters,
                "severity": calculate_severity(parameters),
                "latitude": latitude,
                "longitude": longitude,
            }
        )

    severity_order = {
        "EMERGENCY": 0,
        "ALERT": 1,
        "WATCH": 2,
    }

    alerts.sort(
        key=lambda item: (
            severity_order.get(item["severity"], 9),
            item["industry_zone"],
            item["station_name"],
        )
    )

    return alerts


# ============================================================
# 10. ส่วนประกอบ LINE Flex Message
# ============================================================

def text_component(
    text: str,
    *,
    size: str = "sm",
    color: str = COLOR_TEXT,
    weight: str = "regular",
    align: str | None = None,
    margin: str | None = None,
    flex: int | None = None,
    max_lines: int | None = None,
) -> dict[str, Any]:
    component: dict[str, Any] = {
        "type": "text",
        "text": str(text),
        "size": size,
        "color": color,
        "weight": weight,
        "wrap": True,
    }

    if align is not None:
        component["align"] = align

    if margin is not None:
        component["margin"] = margin

    if flex is not None:
        component["flex"] = flex

    if max_lines is not None:
        component["maxLines"] = max_lines

    return component


def summary_metric_box(
    value: int,
    label: str,
    background_color: str,
    value_color: str = COLOR_WHITE,
    label_color: str = COLOR_WHITE,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "vertical",
        "flex": 1,
        "paddingAll": "8px",
        "cornerRadius": "10px",
        "backgroundColor": background_color,
        "contents": [
            text_component(
                str(value),
                size="xl",
                color=value_color,
                weight="bold",
                align="center",
            ),
            text_component(
                label,
                size="xxs",
                color=label_color,
                weight="bold",
                align="center",
            ),
        ],
    }


def severity_metric_box(
    value: int,
    label: str,
    color: str,
) -> dict[str, Any]:
    return {
        "type": "box",
        "layout": "vertical",
        "flex": 1,
        "contents": [
            text_component(
                str(value),
                size="md",
                color=color,
                weight="bold",
                align="center",
            ),
            text_component(
                label,
                size="xxs",
                color=COLOR_MUTED,
                align="center",
            ),
        ],
    }


# ============================================================
# 11. กล่องพารามิเตอร์
# ============================================================

def build_parameter_box(
    parameter: dict[str, Any],
) -> dict[str, Any]:
    value = format_number(parameter.get("value"))
    standard = format_number(parameter.get("standard"))
    unit = parameter.get("unit") or ""

    measured_text = f"{value} {unit}".strip()

    if parameter.get("standard") is not None:
        standard_text = f"มาตรฐาน {standard} {unit}".strip()
    elif parameter.get("display_text"):
        standard_text = parameter["display_text"]
    else:
        standard_text = "ไม่พบข้อมูลค่ามาตรฐาน"

    parameter_name = parameter.get(
        "display_name",
        parameter.get("parameter", "-"),
    )

    detail_contents: list[dict[str, Any]] = [
        {
            "type": "box",
            "layout": "horizontal",
            "contents": [
                text_component(
                    parameter_name,
                    size="sm",
                    color=COLOR_SECONDARY,
                    weight="bold",
                    flex=2,
                ),
                text_component(
                    measured_text,
                    size="lg",
                    color=COLOR_PRIMARY,
                    weight="bold",
                    align="end",
                    flex=3,
                ),
            ],
        },
        text_component(
            standard_text,
            size="xxs",
            color=COLOR_MUTED,
            margin="xs",
            max_lines=2,
        ),
    ]

    ratio = parameter.get("ratio")

    if ratio is not None and ratio > 1:
        excess_percent = (ratio - 1) * 100

        detail_contents.append(
            text_component(
                f"สูงกว่ามาตรฐาน {excess_percent:,.1f}%",
                size="xxs",
                color=COLOR_DANGER,
                weight="bold",
                margin="xs",
            )
        )

    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "sm",
        "paddingAll": "9px",
        "backgroundColor": COLOR_SURFACE,
        "borderWidth": "1px",
        "borderColor": COLOR_BORDER,
        "cornerRadius": "10px",
        "alignItems": "center",
        "contents": [
            {
                "type": "image",
                "url": ALERT_RED_ICON_URL,
                "size": "xxs",
                "aspectMode": "fit",
                "flex": 0,
            },
            {
                "type": "box",
                "layout": "vertical",
                "margin": "sm",
                "flex": 1,
                "contents": detail_contents,
            },
        ],
    }


# ============================================================
# 12. การ์ดสรุปแบบกระชับ
# ============================================================

def build_summary_bubble(
    alerts: list[dict[str, Any]],
) -> dict[str, Any]:
    station_count = len(alerts)

    parameter_count = sum(
        len(alert["parameters"])
        for alert in alerts
    )

    estate_count = len(
        {alert["industry_zone"] for alert in alerts}
    )

    emergency_count = sum(
        alert["severity"] == "EMERGENCY"
        for alert in alerts
    )

    alert_count = sum(
        alert["severity"] == "ALERT"
        for alert in alerts
    )

    watch_count = sum(
        alert["severity"] == "WATCH"
        for alert in alerts
    )

    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "backgroundColor": COLOR_PRIMARY,
            "paddingAll": "12px",
            "alignItems": "center",
            "contents": [
                {
                    "type": "image",
                    "url": IEAT_LOGO_URL,
                    "size": "xs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "flex": 1,
                    "contents": [
                        text_component(
                            "IEAT LINE ALERT",
                            size="lg",
                            color=COLOR_WHITE,
                            weight="bold",
                        ),
                        text_component(
                            "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย",
                            size="xxs",
                            color=COLOR_ACCENT,
                            weight="bold",
                        ),
                    ],
                },
                {
                    "type": "image",
                    "url": ALERT_RED_ICON_URL,
                    "size": "xxs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "12px",
            "backgroundColor": "#F4F6F8",
            "contents": [
                text_component(
                    "สรุปสถานการณ์คุณภาพสิ่งแวดล้อม",
                    size="md",
                    color=COLOR_SECONDARY,
                    weight="bold",
                ),
                {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "sm",
                    "spacing": "sm",
                    "contents": [
                        summary_metric_box(
                            station_count,
                            "สถานี",
                            COLOR_SECONDARY,
                            COLOR_WHITE,
                            "#E9E2F2",
                        ),
                        summary_metric_box(
                            parameter_count,
                            "พารามิเตอร์",
                            COLOR_SUCCESS,
                            COLOR_WHITE,
                            "#EEF6EB",
                        ),
                        summary_metric_box(
                            estate_count,
                            "นิคมฯ",
                            COLOR_PRIMARY,
                            COLOR_ACCENT,
                            COLOR_WHITE,
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "sm",
                    "paddingAll": "8px",
                    "cornerRadius": "10px",
                    "backgroundColor": COLOR_SURFACE,
                    "borderWidth": "1px",
                    "borderColor": COLOR_BORDER,
                    "contents": [
                        severity_metric_box(
                            emergency_count,
                            "เร่งด่วน",
                            COLOR_DANGER,
                        ),
                        {
                            "type": "separator",
                            "color": COLOR_BORDER,
                        },
                        severity_metric_box(
                            alert_count,
                            "เฝ้าระวังสูง",
                            COLOR_PRIMARY,
                        ),
                        {
                            "type": "separator",
                            "color": COLOR_BORDER,
                        },
                        severity_metric_box(
                            watch_count,
                            "ติดตาม",
                            COLOR_SUCCESS,
                        ),
                    ],
                },
                text_component(
                    f"อัปเดต {thai_report_time()}",
                    size="xxs",
                    color=COLOR_MUTED,
                    margin="sm",
                ),
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "8px",
            "backgroundColor": COLOR_SURFACE,
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": COLOR_PRIMARY,
                    "action": {
                        "type": "uri",
                        "label": "เปิดแผนที่สถานการณ์",
                        "uri": ARCGIS_DASHBOARD_URL,
                    },
                },
            ],
        },
    }


# ============================================================
# 13. การ์ดรายละเอียดสถานี
# ============================================================

def build_station_bubble(
    alert: dict[str, Any],
) -> dict[str, Any]:
    style = severity_style(alert["severity"])

    body_contents: list[dict[str, Any]] = [
        text_component(
            alert["industry_zone"],
            size="md",
            color=COLOR_SECONDARY,
            weight="bold",
            max_lines=2,
        ),
        text_component(
            alert["station_name"],
            size="sm",
            color=COLOR_PRIMARY,
            weight="bold",
            margin="xs",
            max_lines=2,
        ),
        text_component(
            f"ข้อมูลล่าสุด: {alert['last_update']}",
            size="xxs",
            color=COLOR_MUTED,
            margin="xs",
        ),
        {
            "type": "separator",
            "margin": "sm",
            "color": COLOR_BORDER,
        },
    ]

    for parameter in alert["parameters"]:
        body_contents.append(build_parameter_box(parameter))

    body_contents.extend(
        [
            {
                "type": "separator",
                "margin": "sm",
                "color": COLOR_BORDER,
            },
            {
                "type": "box",
                "layout": "horizontal",
                "margin": "sm",
                "contents": [
                    text_component(
                        "ประเภท",
                        size="xxs",
                        color=COLOR_MUTED,
                        flex=2,
                    ),
                    text_component(
                        alert["station_type"],
                        size="xxs",
                        color=COLOR_TEXT,
                        align="end",
                        flex=4,
                        max_lines=1,
                    ),
                ],
            },
            {
                "type": "box",
                "layout": "horizontal",
                "margin": "xs",
                "contents": [
                    text_component(
                        "สถานะ",
                        size="xxs",
                        color=COLOR_MUTED,
                        flex=2,
                    ),
                    text_component(
                        alert["status"],
                        size="xxs",
                        color=style["accent"],
                        weight="bold",
                        align="end",
                        flex=4,
                        max_lines=1,
                    ),
                ],
            },
        ]
    )

    footer_contents: list[dict[str, Any]] = []

    latitude = alert.get("latitude")
    longitude = alert.get("longitude")

    if latitude is not None and longitude is not None:
        footer_contents.append(
            {
                "type": "button",
                "style": "primary",
                "height": "sm",
                "color": COLOR_PRIMARY,
                "action": {
                    "type": "uri",
                    "label": "เปิดตำแหน่งสถานี",
                    "uri": google_maps_url(latitude, longitude),
                },
            }
        )

    footer_contents.append(
        {
            "type": "button",
            "style": "secondary",
            "height": "sm",
            "action": {
                "type": "uri",
                "label": "เปิดระบบ GIS",
                "uri": ARCGIS_DASHBOARD_URL,
            },
        }
    )

    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "center",
            "backgroundColor": style["header"],
            "paddingAll": "12px",
            "contents": [
                {
                    "type": "image",
                    "url": style["icon"],
                    "size": "xxs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "sm",
                    "flex": 1,
                    "contents": [
                        text_component(
                            "IEAT LINE ALERT",
                            size="md",
                            color=COLOR_WHITE,
                            weight="bold",
                        ),
                        text_component(
                            style["name"],
                            size="xxs",
                            color=COLOR_ACCENT,
                            weight="bold",
                        ),
                    ],
                },
                {
                    "type": "image",
                    "url": IEAT_LOGO_URL,
                    "size": "xxs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "12px",
            "backgroundColor": "#FFFFFF",
            "contents": body_contents,
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "paddingAll": "8px",
            "backgroundColor": COLOR_SURFACE,
            "contents": footer_contents,
        },
    }


# ============================================================
# 14. การ์ดสถานการณ์ปกติ
# ============================================================

def build_normal_bubble() -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "backgroundColor": COLOR_SUCCESS,
            "paddingAll": "12px",
            "alignItems": "center",
            "contents": [
                {
                    "type": "image",
                    "url": IEAT_LOGO_URL,
                    "size": "xs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "flex": 1,
                    "contents": [
                        text_component(
                            "IEAT LINE ALERT",
                            size="lg",
                            color=COLOR_WHITE,
                            weight="bold",
                        ),
                        text_component(
                            "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย",
                            size="xxs",
                            color=COLOR_ACCENT,
                            weight="bold",
                        ),
                    ],
                },
                {
                    "type": "image",
                    "url": NORMAL_GREEN_ICON_URL,
                    "size": "xxs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "16px",
            "backgroundColor": COLOR_GREEN_BACKGROUND,
            "contents": [
                text_component(
                    "สถานการณ์ปกติ",
                    size="xl",
                    color=COLOR_SUCCESS,
                    weight="bold",
                    align="center",
                ),
                text_component(
                    "ไม่พบสถานีที่มีค่าพารามิเตอร์ต้องแจ้งเตือน",
                    size="sm",
                    color=COLOR_SECONDARY,
                    weight="bold",
                    align="center",
                    margin="sm",
                ),
                text_component(
                    f"อัปเดต {thai_report_time()}",
                    size="xxs",
                    color=COLOR_MUTED,
                    align="center",
                    margin="sm",
                ),
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "8px",
            "backgroundColor": COLOR_SURFACE,
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": COLOR_SUCCESS,
                    "action": {
                        "type": "uri",
                        "label": "เปิดระบบ GIS",
                        "uri": ARCGIS_DASHBOARD_URL,
                    },
                },
            ],
        },
    }


# ============================================================
# 15. ส่งข้อความ LINE
# ============================================================

def send_line_messages(
    messages: list[dict[str, Any]],
) -> None:
    channel_access_token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN")
    target_id = os.getenv("LINE_TARGET_ID")

    if not channel_access_token:
        raise RuntimeError(
            "ไม่พบ GitHub Secret LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not target_id:
        raise RuntimeError(
            "ไม่พบ GitHub Secret LINE_TARGET_ID"
        )

    payload = {
        "to": target_id,
        "messages": messages,
    }

    request = urllib.request.Request(
        LINE_PUSH_URL,
        data=json.dumps(
            payload,
            ensure_ascii=False,
        ).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {channel_access_token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            print(f"ส่ง LINE สำเร็จ HTTP {response.status}")

    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"ส่ง LINE ไม่สำเร็จ HTTP {error.code}: {body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            f"เชื่อมต่อ LINE API ไม่สำเร็จ: {error.reason}"
        ) from error


# ============================================================
# 16. สร้างรายงานประจำชั่วโมง
# ============================================================

def send_hourly_report(
    alerts: list[dict[str, Any]],
) -> None:
    if not alerts:
        message = {
            "type": "flex",
            "altText": "รายงาน e-Monitoring: สถานการณ์ปกติ",
            "contents": build_normal_bubble(),
        }

        send_line_messages([message])
        return

    bubbles = [build_summary_bubble(alerts)]

    for alert in alerts[:9]:
        bubbles.append(build_station_bubble(alert))

    message = {
        "type": "flex",
        "altText": (
            f"แจ้งเตือน e-Monitoring: พบ {len(alerts)} สถานี"
        ),
        "contents": {
            "type": "carousel",
            "contents": bubbles,
        },
    }

    send_line_messages([message])


# ============================================================
# 17. เริ่มต้นทำงาน
# ============================================================

def main() -> None:
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring...")

    data = download_json(DATA_URL)
    alerts = collect_alert_stations(data)

    print(
        "จำนวนสถานีที่มี ParameterAlram: "
        f"{len(alerts)}"
    )

    for index, alert in enumerate(alerts, start=1):
        parameter_names = ", ".join(
            parameter["display_name"]
            for parameter in alert["parameters"]
        )

        print(
            f"{index}. "
            f"{alert['industry_zone']} | "
            f"{alert['station_name']} | "
            f"{parameter_names} | "
            f"{alert['severity']}"
        )

    send_hourly_report(alerts)

    if len(alerts) > 9:
        print(
            "หมายเหตุ: LINE Carousel แสดงรายละเอียด "
            "9 สถานีแรกตามระดับความรุนแรง"
        )

    print("กระบวนการทำงานเสร็จสมบูรณ์")


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            f"เกิดข้อผิดพลาด: {error}",
            file=sys.stderr,
        )
        sys.exit(1)
