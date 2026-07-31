import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
from typing import Any


# ============================================================
# การตั้งค่าหลัก
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

# รูปภาพจาก GitHub Pages ของคุณ
ASSET_BASE_URL = (
    "https://THANAWAN-KI.github.io/"
    "ieat-emonitoring-line-alert/assets"
)

IEAT_LOGO_URL = f"{ASSET_BASE_URL}/ieat_logo.png"
ALERT_RED_ICON_URL = f"{ASSET_BASE_URL}/alert_red.png"
NORMAL_GREEN_ICON_URL = f"{ASSET_BASE_URL}/normal_green.png"
WATCH_YELLOW_ICON_URL = f"{ASSET_BASE_URL}/watch_yellow.png"


# ============================================================
# สีของระบบ
# ============================================================

COLOR_PRIMARY = "#4E1F6E"
COLOR_SECONDARY = "#3E3E75"
COLOR_TEAL = "#45A9A9"
COLOR_LIGHT_TEAL = "#98E8DE"

COLOR_WHITE = "#FFFFFF"
COLOR_BACKGROUND = "#F7F5FA"
COLOR_TEXT = "#292929"
COLOR_MUTED = "#666666"
COLOR_BORDER = "#DDD6E5"
COLOR_RED = "#C62828"

THAILAND_TIMEZONE = timezone(timedelta(hours=7))


# ============================================================
# ชื่อพารามิเตอร์
# ============================================================

PARAMETER_ALIASES = {
    "PM2.5": "PM25",
    "PM 2.5": "PM25",
    "PM25": "PM25",
    "PM10": "PM10",
    "TSP": "TSP",
    "SO2": "SO2",
    "SO₂": "SO2",
    "NO2": "NO2",
    "NO₂": "NO2",
    "NOX": "NOx",
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

STANDARD_PATTERN = re.compile(
    r"\(\s*STD\s*([0-9,]+(?:\.[0-9]+)?)\s*\)",
    re.IGNORECASE,
)


# ============================================================
# ฟังก์ชันช่วยเหลือ
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
        "9999",
    }:
        return default

    return text


def safe_float(value: Any) -> float | None:
    if value is None:
        return None

    if isinstance(value, str):
        text = value.strip()

        if text in {"", "-", "9999"}:
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


def extract_standard(text: Any) -> float | None:
    if not isinstance(text, str):
        return None

    match = STANDARD_PATTERN.search(text)

    if not match:
        return None

    return safe_float(match.group(1))


def extract_unit(text: Any) -> str:
    if not isinstance(text, str):
        return ""

    cleaned = STANDARD_PATTERN.sub("", text).strip()

    number_match = NUMBER_PATTERN.search(cleaned)

    if number_match:
        cleaned = cleaned[number_match.end():].strip()

    replacements = {
        "ug./m3": "µg/m³",
        "ug/m3": "µg/m³",
        "µg./m3": "µg/m³",
        "µg/m3": "µg/m³",
        "mg./m3": "mg/m³",
        "mg/m3": "mg/m³",
        "mg./l": "mg/L",
        "mg/l": "mg/L",
        "m/s": "เมตร/วินาที",
        "DEG": "องศา",
    }

    for source, target in replacements.items():
        cleaned = cleaned.replace(source, target)

    return cleaned.strip()


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

    buddhist_year = now.year + 543

    return (
        f"{now.day} "
        f"{thai_months[now.month]} "
        f"{buddhist_year} "
        f"เวลา {now:%H:%M} น."
    )


def google_maps_url(
    latitude: float,
    longitude: float,
) -> str:
    return (
        "https://www.google.com/maps/"
        f"search/?api=1&query={latitude},{longitude}"
    )


def download_json(url: str) -> dict[str, Any]:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "IEAT-eMonitoring-LINE-Alert/1.0",
            "Accept": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=60,
        ) as response:
            raw_data = response.read()

            try:
                text = raw_data.decode("utf-8")
            except UnicodeDecodeError:
                text = raw_data.decode(
                    "utf-8-sig",
                    errors="replace",
                )

            return json.loads(text)

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )

        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ "
            f"HTTP {error.code}: {body}"
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
# อ่าน ParameterAlram
# ============================================================

def parse_parameter_alarm(value: Any) -> list[str]:
    text = clean_text(value, "")

    if not text:
        return []

    normalized = (
        text.upper()
        .replace("_TXT", "")
        .replace("-", " ")
        .replace("/", " ")
        .replace(",", " ")
        .replace(";", " ")
    )

    detected: list[str] = []

    sorted_aliases = sorted(
        PARAMETER_ALIASES.items(),
        key=lambda item: len(item[0]),
        reverse=True,
    )

    for alias, field_name in sorted_aliases:
        alias_upper = alias.upper()

        pattern = (
            r"(?<![A-Z0-9])"
            + re.escape(alias_upper)
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

    if field_name == "PM25":
        possible_names.extend([
            "PM2.5",
            "PM2_5",
            "PM25",
        ])

    if field_name == "NOx":
        possible_names.extend([
            "NOX",
            "Nox",
            "NOx",
        ])

    if field_name == "pH":
        possible_names.extend([
            "PH",
            "ph",
            "pH",
        ])

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

    if field_name == "PM25":
        possible_names.extend([
            "PM25_txt",
            "PM2.5_txt",
            "PM2_5_txt",
        ])

    if field_name == "NOx":
        possible_names.extend([
            "NOx_txt",
            "NOX_txt",
            "Nox_txt",
        ])

    if field_name == "pH":
        possible_names.extend([
            "pH_txt",
            "PH_txt",
            "ph_txt",
        ])

    for name in possible_names:
        if name in properties:
            return properties.get(name)

    return None


def get_parameter_information(
    properties: dict[str, Any],
    parameter: str,
) -> dict[str, Any]:
    raw_value = find_property_value(
        properties,
        parameter,
    )

    raw_text = find_text_property(
        properties,
        parameter,
    )

    value = safe_float(raw_value)
    display_text = clean_text(raw_text, "")

    standard = extract_standard(display_text)
    unit = extract_unit(display_text)

    ratio = None

    if (
        value is not None
        and standard is not None
        and standard > 0
    ):
        ratio = value / standard

    return {
        "parameter": parameter,
        "display_name": PARAMETER_DISPLAY_NAMES.get(
            parameter,
            parameter,
        ),
        "value": value,
        "standard": standard,
        "unit": unit,
        "display_text": display_text,
        "ratio": ratio,
    }


def calculate_severity(
    parameters: list[dict[str, Any]],
) -> str:
    ratios = [
        parameter["ratio"]
        for parameter in parameters
        if parameter.get("ratio") is not None
    ]

    maximum_ratio = max(ratios, default=1.0)

    if len(parameters) >= 3 or maximum_ratio >= 2:
        return "EMERGENCY"

    if maximum_ratio >= 1.5:
        return "ALERT"

    return "WATCH"


# ============================================================
# รวบรวมสถานีที่ต้องแจ้งเตือน
# ============================================================

def collect_alert_stations(
    data: dict[str, Any],
) -> list[dict[str, Any]]:
    features = data.get("features", [])

    if not isinstance(features, list):
        raise RuntimeError(
            "ไม่พบรายการ features ในข้อมูล e-Monitoring"
        )

    alerts: list[dict[str, Any]] = []

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = feature.get("properties", {})
        geometry = feature.get("geometry", {})

        if not isinstance(properties, dict):
            continue

        code = clean_text(
            properties.get("Code"),
            "",
        )

        # Code 0 เป็นรายการที่ไม่ต้องนำมาแจ้งเตือน
        if code in {"", "0"}:
            continue

        station_name = clean_text(
            properties.get("StationTH"),
            "",
        )

        if not station_name:
            continue

        parameter_alarm = properties.get(
            "ParameterAlram"
        )

        alarm_parameters = parse_parameter_alarm(
            parameter_alarm
        )

        # ใช้ ParameterAlram เป็นตัว Trigger เท่านั้น
        if not alarm_parameters:
            continue

        parameters = [
            get_parameter_information(
                properties,
                parameter,
            )
            for parameter in alarm_parameters
        ]

        # แสดงเฉพาะพารามิเตอร์ที่ระบุใน ParameterAlram
        # และมีค่าหรือมีข้อความประกอบ
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

        coordinates = geometry.get("coordinates")

        if (
            isinstance(coordinates, list)
            and len(coordinates) >= 2
        ):
            longitude = safe_float(coordinates[0])
            latitude = safe_float(coordinates[1])

        alerts.append({
            "code": code,
            "station_name": station_name,
            "industry_zone": clean_text(
                properties.get("IndustryZone"),
                "ไม่ระบุนิคมอุตสาหกรรม",
            ),
            "station_type": clean_text(
                properties.get("Type")
            ),
            "last_update": clean_text(
                properties.get("LastUpdate-TH")
                or properties.get("LastUpdate")
            ),
            "status": clean_text(
                properties.get("Status")
            ),
            "parameter_alarm": clean_text(
                parameter_alarm
            ),
            "parameters": parameters,
            "severity": calculate_severity(parameters),
            "latitude": latitude,
            "longitude": longitude,
        })

    severity_order = {
        "EMERGENCY": 0,
        "ALERT": 1,
        "WATCH": 2,
    }

    alerts.sort(
        key=lambda item: (
            severity_order.get(
                item["severity"],
                9,
            ),
            item["industry_zone"],
            item["station_name"],
        )
    )

    return alerts


# ============================================================
# ส่วนประกอบ LINE Flex Message
# ============================================================

def text_component(
    text: str,
    size: str = "sm",
    color: str = COLOR_TEXT,
    weight: str = "regular",
    align: str | None = None,
    margin: str | None = None,
) -> dict[str, Any]:
    component: dict[str, Any] = {
        "type": "text",
        "text": str(text),
        "size": size,
        "color": color,
        "weight": weight,
        "wrap": True,
    }

    if align:
        component["align"] = align

    if margin:
        component["margin"] = margin

    return component


def severity_style(
    severity: str,
) -> dict[str, str]:
    styles = {
        "EMERGENCY": {
            "name": "ระดับเร่งด่วน",
            "header": COLOR_PRIMARY,
            "background": "#F8F3FB",
            "icon": ALERT_RED_ICON_URL,
        },
        "ALERT": {
            "name": "ระดับแจ้งเตือน",
            "header": COLOR_SECONDARY,
            "background": "#F8F7FC",
            "icon": ALERT_RED_ICON_URL,
        },
        "WATCH": {
            "name": "ระดับเฝ้าระวัง",
            "header": COLOR_TEAL,
            "background": "#F1FFFC",
            "icon": WATCH_YELLOW_ICON_URL,
        },
    }

    return styles.get(
        severity,
        styles["WATCH"],
    )


def build_parameter_box(
    parameter: dict[str, Any],
) -> dict[str, Any]:
    value = format_number(
        parameter.get("value")
    )

    standard = format_number(
        parameter.get("standard")
    )

    unit = parameter.get("unit") or ""

    measured_text = f"{value} {unit}".strip()

    if parameter.get("standard") is not None:
        standard_text = (
            f"ค่ามาตรฐาน {standard} {unit}"
        ).strip()
    elif parameter.get("display_text"):
        standard_text = parameter["display_text"]
    else:
        standard_text = "ไม่พบข้อมูลค่ามาตรฐาน"

    contents: list[dict[str, Any]] = [
        text_component(
            parameter["display_name"],
            size="md",
            color=COLOR_PRIMARY,
            weight="bold",
        ),
        text_component(
            measured_text,
            size="xl",
            color=COLOR_SECONDARY,
            weight="bold",
        ),
        text_component(
            standard_text,
            size="xs",
            color=COLOR_MUTED,
        ),
    ]

    ratio = parameter.get("ratio")

    if ratio is not None and ratio > 1:
        percent = (ratio - 1) * 100

        contents.append(
            text_component(
                f"สูงกว่าค่ามาตรฐาน {percent:,.1f}%",
                size="xs",
                color=COLOR_RED,
                weight="bold",
            )
        )

    return {
        "type": "box",
        "layout": "horizontal",
        "margin": "md",
        "paddingAll": "12px",
        "backgroundColor": COLOR_WHITE,
        "borderWidth": "1px",
        "borderColor": COLOR_LIGHT_TEAL,
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
                "margin": "md",
                "flex": 1,
                "contents": contents,
            },
        ],
    }


# ============================================================
# การ์ดสรุป
# ============================================================

def build_summary_bubble(
    alerts: list[dict[str, Any]],
) -> dict[str, Any]:
    station_count = len(alerts)

    parameter_count = sum(
        len(alert["parameters"])
        for alert in alerts
    )

    estate_count = len({
        alert["industry_zone"]
        for alert in alerts
    })

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
            "layout": "vertical",
            "backgroundColor": COLOR_PRIMARY,
            "paddingAll": "18px",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "alignItems": "center",
                    "contents": [
                        {
                            "type": "image",
                            "url": IEAT_LOGO_URL,
                            "size": "sm",
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
                                    size="xl",
                                    color=COLOR_WHITE,
                                    weight="bold",
                                ),
                                text_component(
                                    "ระบบแจ้งเตือน e-Monitoring",
                                    size="sm",
                                    color=COLOR_LIGHT_TEAL,
                                    weight="bold",
                                ),
                            ],
                        },
                        {
                            "type": "image",
                            "url": ALERT_RED_ICON_URL,
                            "size": "xs",
                            "aspectMode": "fit",
                            "flex": 0,
                        },
                    ],
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
            "backgroundColor": COLOR_BACKGROUND,
            "contents": [
                text_component(
                    "รายงานสถานการณ์คุณภาพสิ่งแวดล้อม",
                    size="lg",
                    color=COLOR_PRIMARY,
                    weight="bold",
                ),
                text_component(
                    "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย กนอ.",
                    size="sm",
                    color=COLOR_SECONDARY,
                    margin="sm",
                ),
                {
                    "type": "separator",
                    "margin": "lg",
                    "color": COLOR_BORDER,
                },
                text_component(
                    "ตรวจพบค่าพารามิเตอร์ที่ต้องแจ้งเตือน",
                    size="md",
                    color=COLOR_RED,
                    weight="bold",
                    margin="lg",
                ),
                {
                    "type": "box",
                    "layout": "horizontal",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 1,
                            "paddingAll": "10px",
                            "cornerRadius": "10px",
                            "backgroundColor": COLOR_SECONDARY,
                            "contents": [
                                text_component(
                                    str(station_count),
                                    size="xxl",
                                    color=COLOR_WHITE,
                                    weight="bold",
                                    align="center",
                                ),
                                text_component(
                                    "สถานี",
                                    size="xs",
                                    color=COLOR_LIGHT_TEAL,
                                    weight="bold",
                                    align="center",
                                ),
                            ],
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 1,
                            "paddingAll": "10px",
                            "cornerRadius": "10px",
                            "backgroundColor": COLOR_TEAL,
                            "contents": [
                                text_component(
                                    str(parameter_count),
                                    size="xxl",
                                    color=COLOR_WHITE,
                                    weight="bold",
                                    align="center",
                                ),
                                text_component(
                                    "พารามิเตอร์",
                                    size="xs",
                                    color=COLOR_WHITE,
                                    weight="bold",
                                    align="center",
                                ),
                            ],
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "flex": 1,
                            "paddingAll": "10px",
                            "cornerRadius": "10px",
                            "backgroundColor": COLOR_PRIMARY,
                            "contents": [
                                text_component(
                                    str(estate_count),
                                    size="xxl",
                                    color=COLOR_WHITE,
                                    weight="bold",
                                    align="center",
                                ),
                                text_component(
                                    "นิคมฯ",
                                    size="xs",
                                    color=COLOR_LIGHT_TEAL,
                                    weight="bold",
                                    align="center",
                                ),
                            ],
                        },
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "paddingAll": "12px",
                    "cornerRadius": "10px",
                    "backgroundColor": COLOR_WHITE,
                    "borderWidth": "1px",
                    "borderColor": COLOR_BORDER,
                    "contents": [
                        text_component(
                            f"ระดับเร่งด่วน {emergency_count} สถานี",
                            color=COLOR_RED,
                            weight="bold",
                        ),
                        text_component(
                            f"ระดับแจ้งเตือน {alert_count} สถานี",
                            color=COLOR_PRIMARY,
                            weight="bold",
                            margin="sm",
                        ),
                        text_component(
                            f"ระดับเฝ้าระวัง {watch_count} สถานี",
                            color=COLOR_TEAL,
                            weight="bold",
                            margin="sm",
                        ),
                    ],
                },
                text_component(
                    f"ข้อมูล ณ {thai_report_time()}",
                    size="xs",
                    color=COLOR_MUTED,
                    margin="lg",
                ),
                text_component(
                    "โปรดตรวจสอบรายละเอียดสถานีในหน้าถัดไป",
                    size="sm",
                    color=COLOR_TEXT,
                    weight="bold",
                    margin="lg",
                ),
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "12px",
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
# การ์ดรายละเอียดสถานี
# ============================================================

def build_station_bubble(
    alert: dict[str, Any],
) -> dict[str, Any]:
    style = severity_style(alert["severity"])

    body_contents: list[dict[str, Any]] = [
        text_component(
            alert["industry_zone"],
            size="lg",
            color=COLOR_PRIMARY,
            weight="bold",
        ),
        text_component(
            alert["station_name"],
            size="md",
            color=COLOR_SECONDARY,
            weight="bold",
            margin="sm",
        ),
        text_component(
            f"ข้อมูลล่าสุด: {alert['last_update']}",
            size="xs",
            color=COLOR_MUTED,
            margin="sm",
        ),
        {
            "type": "separator",
            "margin": "lg",
            "color": COLOR_BORDER,
        },
        text_component(
            "พารามิเตอร์ที่ต้องแจ้งเตือน",
            size="sm",
            color=COLOR_PRIMARY,
            weight="bold",
            margin="lg",
        ),
    ]

    for parameter in alert["parameters"]:
        body_contents.append(
            build_parameter_box(parameter)
        )

    body_contents.extend([
        {
            "type": "separator",
            "margin": "lg",
            "color": COLOR_BORDER,
        },
        text_component(
            f"ประเภทสถานี: {alert['station_type']}",
            size="xs",
            color=COLOR_MUTED,
            margin="lg",
        ),
        text_component(
            f"สถานะสถานี: {alert['status']}",
            size="xs",
            color=COLOR_MUTED,
            margin="sm",
        ),
    ])

    footer_contents: list[dict[str, Any]] = []

    latitude = alert.get("latitude")
    longitude = alert.get("longitude")

    if latitude is not None and longitude is not None:
        footer_contents.append({
            "type": "button",
            "style": "primary",
            "height": "sm",
            "color": COLOR_PRIMARY,
            "action": {
                "type": "uri",
                "label": "เปิดตำแหน่งสถานี",
                "uri": google_maps_url(
                    latitude,
                    longitude,
                ),
            },
        })

    footer_contents.append({
        "type": "button",
        "style": "secondary",
        "height": "sm",
        "action": {
            "type": "uri",
            "label": "เปิดระบบ GIS",
            "uri": ARCGIS_DASHBOARD_URL,
        },
    })

    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "center",
            "backgroundColor": style["header"],
            "paddingAll": "16px",
            "contents": [
                {
                    "type": "image",
                    "url": style["icon"],
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
                            style["name"],
                            size="sm",
                            color=COLOR_LIGHT_TEAL,
                            weight="bold",
                        ),
                    ],
                },
                {
                    "type": "image",
                    "url": IEAT_LOGO_URL,
                    "size": "xs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "16px",
            "backgroundColor": style["background"],
            "contents": body_contents,
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "paddingAll": "12px",
            "contents": footer_contents,
        },
    }


# ============================================================
# การ์ดสถานการณ์ปกติ
# ============================================================

def build_normal_bubble() -> dict[str, Any]:
    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "alignItems": "center",
            "backgroundColor": COLOR_TEAL,
            "paddingAll": "18px",
            "contents": [
                {
                    "type": "image",
                    "url": IEAT_LOGO_URL,
                    "size": "sm",
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
                            size="xl",
                            color=COLOR_WHITE,
                            weight="bold",
                        ),
                        text_component(
                            "ระบบแจ้งเตือน e-Monitoring",
                            size="sm",
                            color=COLOR_WHITE,
                            weight="bold",
                        ),
                    ],
                },
                {
                    "type": "image",
                    "url": NORMAL_GREEN_ICON_URL,
                    "size": "xs",
                    "aspectMode": "fit",
                    "flex": 0,
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "22px",
            "backgroundColor": "#F1FFFC",
            "contents": [
                text_component(
                    "สถานการณ์ปกติ",
                    size="xl",
                    color=COLOR_TEAL,
                    weight="bold",
                    align="center",
                ),
                text_component(
                    "ไม่พบสถานีที่มี ParameterAlram "
                    "จากระบบ e-Monitoring",
                    size="md",
                    color=COLOR_SECONDARY,
                    weight="bold",
                    align="center",
                    margin="lg",
                ),
                {
                    "type": "separator",
                    "margin": "lg",
                    "color": COLOR_LIGHT_TEAL,
                },
                text_component(
                    f"ข้อมูล ณ {thai_report_time()}",
                    size="xs",
                    color=COLOR_MUTED,
                    align="center",
                    margin="lg",
                ),
                text_component(
                    "ระบบจะตรวจสอบอีกครั้งในชั่วโมงถัดไป",
                    size="sm",
                    color=COLOR_TEXT,
                    align="center",
                    margin="lg",
                ),
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "12px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": COLOR_TEAL,
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
# ส่งข้อความเข้า LINE
# ============================================================

def send_line_messages(
    messages: list[dict[str, Any]],
) -> None:
    channel_access_token = os.getenv(
        "LINE_CHANNEL_ACCESS_TOKEN"
    )

    target_id = os.getenv(
        "LINE_TARGET_ID"
    )

    if not channel_access_token:
        raise RuntimeError(
            "ไม่พบ GitHub Secret: LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not target_id:
        raise RuntimeError(
            "ไม่พบ GitHub Secret: LINE_TARGET_ID"
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
            "Authorization": (
                f"Bearer {channel_access_token}"
            ),
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=30,
        ) as response:
            print(
                f"ส่ง LINE สำเร็จ HTTP {response.status}"
            )

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )

        raise RuntimeError(
            f"ส่ง LINE ไม่สำเร็จ "
            f"HTTP {error.code}: {body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            f"เชื่อมต่อ LINE API ไม่สำเร็จ: {error.reason}"
        ) from error


def send_hourly_report(
    alerts: list[dict[str, Any]],
) -> None:
    if not alerts:
        send_line_messages([
            {
                "type": "flex",
                "altText": (
                    "รายงาน e-Monitoring: สถานการณ์ปกติ"
                ),
                "contents": build_normal_bubble(),
            }
        ])

        return

    # LINE Carousel แสดงได้สูงสุด 10 Bubble
    # Bubble แรกเป็นสรุป และอีก 9 Bubble เป็นรายละเอียดสถานี
    bubbles = [
        build_summary_bubble(alerts)
    ]

    for alert in alerts[:9]:
        bubbles.append(
            build_station_bubble(alert)
        )

    message = {
        "type": "flex",
        "altText": (
            "แจ้งเตือน e-Monitoring: "
            f"พบ {len(alerts)} สถานีที่ต้องตรวจสอบ"
        ),
        "contents": {
            "type": "carousel",
            "contents": bubbles,
        },
    }

    send_line_messages([message])


# ============================================================
# เริ่มทำงาน
# ============================================================

def main() -> None:
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring...")

    data = download_json(DATA_URL)

    alerts = collect_alert_stations(data)

    print(
        "จำนวนสถานีที่มี ParameterAlram: "
        f"{len(alerts)}"
    )

    for alert in alerts:
        parameter_names = ", ".join(
            parameter["display_name"]
            for parameter in alert["parameters"]
        )

        print(
            f"- {alert['industry_zone']} | "
            f"{alert['station_name']} | "
            f"{parameter_names}"
        )

    send_hourly_report(alerts)

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
