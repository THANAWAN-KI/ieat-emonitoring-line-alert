import json
import math
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any


# ============================================================
# การตั้งค่าหลัก
# ============================================================

DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push"

STATE_FILE = Path("alert_state.json")

# ลิงก์ระบบ ArcGIS Experience Builder ของหน่วยงาน
ARCGIS_DASHBOARD_URL = os.getenv(
    "ARCGIS_DASHBOARD_URL",
    "https://experience.arcgis.com/experience/"
    "dd1d5523f3bd425b939b51ad91e06171",
)

# URL Feature Layer สำหรับข้อมูลสนับสนุน
# หากยังไม่ได้กำหนด ระบบจะข้ามส่วนนั้นโดยอัตโนมัติ
HOSPITAL_LAYER_URL = os.getenv("HOSPITAL_LAYER_URL", "").rstrip("/")
FIRE_STATION_LAYER_URL = os.getenv("FIRE_STATION_LAYER_URL", "").rstrip("/")
COMMUNITY_LAYER_URL = os.getenv("COMMUNITY_LAYER_URL", "").rstrip("/")
WEATHER_LAYER_URL = os.getenv("WEATHER_LAYER_URL", "").rstrip("/")

# ชื่อฟิลด์ของแต่ละ Feature Layer
HOSPITAL_NAME_FIELD = os.getenv(
    "HOSPITAL_NAME_FIELD",
    "name",
)

HOSPITAL_PHONE_FIELD = os.getenv(
    "HOSPITAL_PHONE_FIELD",
    "phone",
)

FIRE_NAME_FIELD = os.getenv(
    "FIRE_NAME_FIELD",
    "name",
)

FIRE_PHONE_FIELD = os.getenv(
    "FIRE_PHONE_FIELD",
    "phone",
)

COMMUNITY_NAME_FIELD = os.getenv(
    "COMMUNITY_NAME_FIELD",
    "name",
)

WEATHER_NAME_FIELD = os.getenv(
    "WEATHER_NAME_FIELD",
    "station_name",
)

WEATHER_WD_FIELD = os.getenv(
    "WEATHER_WD_FIELD",
    "wind_direction_deg",
)

WEATHER_WS_FIELD = os.getenv(
    "WEATHER_WS_FIELD",
    "wind_speed",
)

SEARCH_RADIUS_KM = 5.0

MISSING_VALUES = {
    "",
    "-",
    "9999",
    9999,
    None,
}

STD_PATTERN = re.compile(
    r"\(\s*STD\s*([0-9,]+(?:\.[0-9]+)?)\s*\)",
    re.IGNORECASE,
)

NUMBER_PATTERN = re.compile(
    r"[-+]?\d[\d,]*(?:\.\d+)?"
)

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
    "NOX ": "NOx",
    "NO": "NO",
    "CO": "CO",
    "O3": "O3",
    "O₃": "O3",
    "BOD": "BOD",
    "COD": "COD",
    "DO": "DO",
    "PH": "pH",
    "PH ": "pH",
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


# ============================================================
# ฟังก์ชันทั่วไป
# ============================================================

def request_json(
    url: str,
    *,
    timeout: int = 60,
) -> dict[str, Any]:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "IEAT-eMonitoring-Line-Alert/2.0",
            "Accept": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=timeout,
        ) as response:
            charset = (
                response.headers.get_content_charset()
                or "utf-8"
            )

            text = response.read().decode(
                charset,
                errors="replace",
            )

            return json.loads(text)

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )

        raise RuntimeError(
            f"HTTP {error.code}: {body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            f"เชื่อมต่อไม่สำเร็จ: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            "ข้อมูลที่ได้รับไม่ใช่ JSON ที่ถูกต้อง"
        ) from error


def safe_float(value: Any) -> float | None:
    if value in MISSING_VALUES:
        return None

    if isinstance(value, str):
        cleaned = value.strip().replace(",", "")

        if cleaned in {"", "-", "9999"}:
            return None

        match = NUMBER_PATTERN.search(cleaned)

        if not match:
            return None

        cleaned = match.group(0).replace(",", "")

        try:
            number = float(cleaned)
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


def clean_text(
    value: Any,
    default: str = "-",
) -> str:
    if value is None:
        return default

    text = str(value).strip()

    if text in {"", "-", "None", "null"}:
        return default

    return text


def format_number(value: float | None) -> str:
    if value is None:
        return "-"

    if float(value).is_integer():
        return f"{int(value):,}"

    return f"{value:,.2f}".rstrip("0").rstrip(".")


def extract_standard(text: Any) -> float | None:
    if not isinstance(text, str):
        return None

    match = STD_PATTERN.search(text)

    if not match:
        return None

    return safe_float(match.group(1))


def extract_unit(text: Any) -> str:
    if not isinstance(text, str):
        return ""

    cleaned = STD_PATTERN.sub("", text).strip()

    match = NUMBER_PATTERN.search(cleaned)

    if match:
        cleaned = cleaned[match.end():].strip()

    cleaned = cleaned.replace("ug./m3", "µg/m³")
    cleaned = cleaned.replace("ug/m3", "µg/m³")
    cleaned = cleaned.replace("ug/m3L", "µg/m³")
    cleaned = cleaned.replace("m/s", "เมตร/วินาที")
    cleaned = cleaned.replace("DEG", "องศา")

    return cleaned


def haversine_km(
    lat1: float,
    lon1: float,
    lat2: float,
    lon2: float,
) -> float:
    radius = 6371.0088

    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)

    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)

    a = (
        math.sin(delta_phi / 2) ** 2
        + math.cos(phi1)
        * math.cos(phi2)
        * math.sin(delta_lambda / 2) ** 2
    )

    return radius * 2 * math.atan2(
        math.sqrt(a),
        math.sqrt(1 - a),
    )


def wind_direction_th(
    degree: float | None,
) -> str:
    if degree is None:
        return "-"

    directions = [
        "ทิศเหนือ",
        "ทิศตะวันออกเฉียงเหนือ",
        "ทิศตะวันออก",
        "ทิศตะวันออกเฉียงใต้",
        "ทิศใต้",
        "ทิศตะวันตกเฉียงใต้",
        "ทิศตะวันตก",
        "ทิศตะวันตกเฉียงเหนือ",
    ]

    index = int(
        ((degree + 22.5) % 360) / 45
    )

    return directions[index]


def google_maps_link(
    latitude: float,
    longitude: float,
) -> str:
    return (
        "https://www.google.com/maps/search/"
        f"?api=1&query={latitude},{longitude}"
    )


# ============================================================
# ParameterAlram
# ============================================================

def normalize_parameter_name(
    name: str,
) -> str | None:
    cleaned = (
        name.strip()
        .replace("_txt", "")
        .replace("Alarm", "")
        .replace("ALARM", "")
    )

    cleaned_upper = cleaned.upper()

    if cleaned_upper in PARAMETER_ALIASES:
        return PARAMETER_ALIASES[cleaned_upper]

    # รองรับกรณี ParameterAlram มีข้อความประกอบ
    for alias, field_name in PARAMETER_ALIASES.items():
        if alias.upper() in cleaned_upper:
            return field_name

    return None


def parse_parameter_alarm(
    alarm_value: Any,
) -> list[str]:
    """
    รองรับตัวอย่าง:
    PM10
    PM10,SO2
    PM10 / SO2
    PM10|SO2
    PM10;SO2
    PM10 SO2
    """

    text = clean_text(alarm_value, "")

    if not text:
        return []

    text = text.replace("\n", ",")
    text = re.sub(
        r"[|;/]+",
        ",",
        text,
    )

    detected: list[str] = []

    # ค้นหาชื่อพารามิเตอร์จากรายการที่รู้จักก่อน
    uppercase_text = text.upper()

    for alias, field_name in PARAMETER_ALIASES.items():
        pattern = (
            r"(?<![A-Z0-9])"
            + re.escape(alias.upper())
            + r"(?![A-Z0-9])"
        )

        if re.search(pattern, uppercase_text):
            if field_name not in detected:
                detected.append(field_name)

    # สำรองกรณีคั่นด้วย comma
    if not detected:
        for part in text.split(","):
            field_name = normalize_parameter_name(part)

            if field_name and field_name not in detected:
                detected.append(field_name)

    return detected


def get_parameter_result(
    properties: dict[str, Any],
    parameter: str,
) -> dict[str, Any]:
    value = safe_float(
        properties.get(parameter)
    )

    display_text = clean_text(
        properties.get(f"{parameter}_txt"),
        "",
    )

    standard = extract_standard(display_text)
    unit = extract_unit(display_text)

    ratio: float | None = None

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


# ============================================================
# ระดับสถานการณ์
# ============================================================

def calculate_severity(
    parameters: list[dict[str, Any]],
) -> dict[str, str]:
    """
    ระดับ:
    🟡 เฝ้าระวัง     = ParameterAlram มีรายการ แต่ค่าไม่เกิน 150%
    🔴 แจ้งเตือน     = ค่าใดค่าหนึ่งตั้งแต่ 150% ขึ้นไป
    🟣 ฉุกเฉิน       = มีตั้งแต่ 3 พารามิเตอร์ หรือค่าใดค่าหนึ่ง >= 200%
    """

    maximum_ratio = max(
        (
            item["ratio"]
            for item in parameters
            if item.get("ratio") is not None
        ),
        default=1.0,
    )

    if len(parameters) >= 3 or maximum_ratio >= 2:
        return {
            "code": "EMERGENCY",
            "icon": "🟣",
            "name": "ระดับฉุกเฉิน",
        }

    if maximum_ratio >= 1.5:
        return {
            "code": "ALERT",
            "icon": "🔴",
            "name": "ระดับแจ้งเตือน",
        }

    return {
        "code": "WATCH",
        "icon": "🟡",
        "name": "ระดับเฝ้าระวัง",
    }


# ============================================================
# ArcGIS Feature Layer
# ============================================================

def arcgis_query_features(
    layer_url: str,
    latitude: float,
    longitude: float,
    radius_km: float,
    out_fields: str = "*",
) -> list[dict[str, Any]]:
    if not layer_url:
        return []

    params = {
        "f": "json",
        "where": "1=1",
        "geometry": f"{longitude},{latitude}",
        "geometryType": "esriGeometryPoint",
        "inSR": "4326",
        "spatialRel": "esriSpatialRelIntersects",
        "distance": str(radius_km),
        "units": "esriSRUnit_Kilometer",
        "outFields": out_fields,
        "returnGeometry": "true",
        "outSR": "4326",
    }

    url = (
        f"{layer_url}/query?"
        + urllib.parse.urlencode(params)
    )

    try:
        result = request_json(url)

    except Exception as error:
        print(
            f"คำเตือน: อ่าน ArcGIS Layer ไม่สำเร็จ: {error}"
        )
        return []

    if "error" in result:
        print(
            "คำเตือน: ArcGIS Query Error: "
            f"{result['error']}"
        )
        return []

    features = result.get("features", [])

    if not isinstance(features, list):
        return []

    return features


def feature_coordinates(
    feature: dict[str, Any],
) -> tuple[float, float] | None:
    geometry = feature.get("geometry", {})

    x = safe_float(geometry.get("x"))
    y = safe_float(geometry.get("y"))

    if x is not None and y is not None:
        return y, x

    # รองรับ Geometry แบบ Point GeoJSON
    coordinates = geometry.get("coordinates")

    if (
        isinstance(coordinates, list)
        and len(coordinates) >= 2
    ):
        longitude = safe_float(coordinates[0])
        latitude = safe_float(coordinates[1])

        if latitude is not None and longitude is not None:
            return latitude, longitude

    return None


def find_nearest_feature(
    features: list[dict[str, Any]],
    latitude: float,
    longitude: float,
    name_field: str,
    phone_field: str | None = None,
) -> dict[str, Any] | None:
    nearest: dict[str, Any] | None = None

    for feature in features:
        coordinates = feature_coordinates(feature)

        if not coordinates:
            continue

        item_latitude, item_longitude = coordinates

        distance = haversine_km(
            latitude,
            longitude,
            item_latitude,
            item_longitude,
        )

        attributes = feature.get("attributes", {})

        candidate = {
            "name": clean_text(
                attributes.get(name_field),
                "ไม่ระบุชื่อ",
            ),
            "phone": (
                clean_text(
                    attributes.get(phone_field),
                    "-",
                )
                if phone_field
                else "-"
            ),
            "distance_km": distance,
            "latitude": item_latitude,
            "longitude": item_longitude,
        }

        if (
            nearest is None
            or distance < nearest["distance_km"]
        ):
            nearest = candidate

    return nearest


def get_support_information(
    latitude: float,
    longitude: float,
) -> dict[str, Any]:
    hospital_features = arcgis_query_features(
        HOSPITAL_LAYER_URL,
        latitude,
        longitude,
        SEARCH_RADIUS_KM,
    )

    fire_features = arcgis_query_features(
        FIRE_STATION_LAYER_URL,
        latitude,
        longitude,
        SEARCH_RADIUS_KM,
    )

    community_features = arcgis_query_features(
        COMMUNITY_LAYER_URL,
        latitude,
        longitude,
        SEARCH_RADIUS_KM,
    )

    weather_features = arcgis_query_features(
        WEATHER_LAYER_URL,
        latitude,
        longitude,
        SEARCH_RADIUS_KM,
    )

    nearest_hospital = find_nearest_feature(
        hospital_features,
        latitude,
        longitude,
        HOSPITAL_NAME_FIELD,
        HOSPITAL_PHONE_FIELD,
    )

    nearest_fire_station = find_nearest_feature(
        fire_features,
        latitude,
        longitude,
        FIRE_NAME_FIELD,
        FIRE_PHONE_FIELD,
    )

    nearest_weather = find_nearest_feature(
        weather_features,
        latitude,
        longitude,
        WEATHER_NAME_FIELD,
    )

    weather_data = None

    if nearest_weather:
        nearest_weather_feature = min(
            weather_features,
            key=lambda feature: (
                haversine_km(
                    latitude,
                    longitude,
                    feature_coordinates(feature)[0],
                    feature_coordinates(feature)[1],
                )
                if feature_coordinates(feature)
                else float("inf")
            ),
        )

        attributes = nearest_weather_feature.get(
            "attributes",
            {},
        )

        weather_data = {
            **nearest_weather,
            "wind_direction": safe_float(
                attributes.get(WEATHER_WD_FIELD)
            ),
            "wind_speed": safe_float(
                attributes.get(WEATHER_WS_FIELD)
            ),
        }

    return {
        "hospital": nearest_hospital,
        "fire_station": nearest_fire_station,
        "community_count": len(community_features),
        "weather": weather_data,
    }


# ============================================================
# State
# ============================================================

def load_state() -> dict[str, Any]:
    if not STATE_FILE.exists():
        return {
            "initialized": False,
            "active_alerts": {},
        }

    try:
        with STATE_FILE.open(
            "r",
            encoding="utf-8",
        ) as file:
            data = json.load(file)

        if not isinstance(data, dict):
            raise ValueError

        data.setdefault("initialized", False)
        data.setdefault("active_alerts", {})

        return data

    except (
        OSError,
        ValueError,
        json.JSONDecodeError,
    ):
        return {
            "initialized": False,
            "active_alerts": {},
        }


def save_state(
    active_alerts: dict[str, Any],
) -> None:
    state = {
        "initialized": True,
        "active_alerts": active_alerts,
    }

    with STATE_FILE.open(
        "w",
        encoding="utf-8",
    ) as file:
        json.dump(
            state,
            file,
            ensure_ascii=False,
            indent=2,
            sort_keys=True,
        )

        file.write("\n")


# ============================================================
# อ่านสถานีแจ้งเตือน
# ============================================================

def collect_alarm_stations(
    data: dict[str, Any],
) -> dict[str, dict[str, Any]]:
    active_alerts: dict[str, dict[str, Any]] = {}

    features = data.get("features", [])

    if not isinstance(features, list):
        raise RuntimeError(
            "ไม่พบ features ในข้อมูล e-Monitoring"
        )

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

        # ส่งเฉพาะสถานีที่ ParameterAlram มีรายการ
        if not alarm_parameters:
            continue

        coordinates = geometry.get("coordinates")

        if (
            not isinstance(coordinates, list)
            or len(coordinates) < 2
        ):
            continue

        longitude = safe_float(coordinates[0])
        latitude = safe_float(coordinates[1])

        if latitude is None or longitude is None:
            continue

        parameter_results = [
            get_parameter_result(
                properties,
                parameter,
            )
            for parameter in alarm_parameters
        ]

        severity = calculate_severity(
            parameter_results
        )

        local_wind_direction = safe_float(
            properties.get("WD")
        )

        local_wind_speed = safe_float(
            properties.get("WS")
        )

        support = get_support_information(
            latitude,
            longitude,
        )

        # ใช้ลมจากสถานี e-Monitoring ก่อน
        # หากไม่มี ให้ใช้สถานีอุตุนิยมวิทยาใกล้ที่สุด
        wind_source = "สถานีตรวจวัด e-Monitoring"
        wind_direction = local_wind_direction
        wind_speed = local_wind_speed
        weather_station_name = station_name

        if (
            wind_direction is None
            or wind_speed is None
        ):
            nearest_weather = support.get("weather")

            if nearest_weather:
                wind_direction = nearest_weather.get(
                    "wind_direction"
                )

                wind_speed = nearest_weather.get(
                    "wind_speed"
                )

                weather_station_name = nearest_weather.get(
                    "name",
                    "-",
                )

                wind_source = (
                    "สถานีอุตุนิยมวิทยาใกล้ที่สุด"
                )

        alert = {
            "code": code,
            "station_name": station_name,
            "industry_zone": clean_text(
                properties.get("IndustryZone"),
                "ไม่ระบุนิคมอุตสาหกรรม",
            ),
            "zone": clean_text(
                properties.get("Zone")
            ),
            "station_type": clean_text(
                properties.get("Type")
            ),
            "last_update": clean_text(
                properties.get("LastUpdate-TH")
                or properties.get("LastUpdate")
            ),
            "station_status": clean_text(
                properties.get("Status")
            ),
            "parameter_alarm_raw": clean_text(
                parameter_alarm
            ),
            "parameters": parameter_results,
            "severity": severity,
            "latitude": latitude,
            "longitude": longitude,
            "wind_direction": wind_direction,
            "wind_speed": wind_speed,
            "wind_source": wind_source,
            "weather_station_name": weather_station_name,
            "support": support,
        }

        active_alerts[code] = alert

    return active_alerts


# ============================================================
# ข้อความ LINE แบบราชการ
# ============================================================

def parameter_lines(
    parameters: list[dict[str, Any]],
) -> list[str]:
    lines: list[str] = []

    for index, item in enumerate(
        parameters,
        start=1,
    ):
        display_name = item["display_name"]
        value = format_number(item.get("value"))
        standard = format_number(
            item.get("standard")
        )

        unit = item.get("unit") or ""

        value_text = f"{value} {unit}".strip()

        lines.append(
            f"{index}. {display_name}"
        )

        lines.append(
            f"   ค่าตรวจวัด : {value_text}"
        )

        if item.get("standard") is not None:
            standard_text = (
                f"{standard} {unit}"
            ).strip()

            lines.append(
                f"   ค่ามาตรฐาน : {standard_text}"
            )

            ratio = item.get("ratio")

            if ratio is not None:
                excess_percent = (
                    ratio - 1
                ) * 100

                lines.append(
                    "   สูงกว่าค่ามาตรฐาน : "
                    f"{max(excess_percent, 0):,.1f}%"
                )

        elif item.get("display_text"):
            lines.append(
                "   รายละเอียด : "
                f"{item['display_text']}"
            )

        lines.append("")

    return lines


def support_lines(
    alert: dict[str, Any],
) -> list[str]:
    support = alert.get("support", {})

    lines = [
        "ข้อมูลสนับสนุนการเฝ้าระวังและระงับเหตุ",
    ]

    hospital = support.get("hospital")

    if hospital:
        lines.append(
            "โรงพยาบาลใกล้ที่สุด : "
            f"{hospital['name']}"
        )

        lines.append(
            "ระยะทางโดยประมาณ : "
            f"{hospital['distance_km']:.2f} กิโลเมตร"
        )

        if hospital.get("phone") not in {
            None,
            "",
            "-",
        }:
            lines.append(
                f"หมายเลขโทรศัพท์ : {hospital['phone']}"
            )

    else:
        lines.append(
            "โรงพยาบาลใกล้ที่สุด : "
            "ยังไม่ได้เชื่อมต่อข้อมูล ArcGIS"
        )

    lines.append("")

    fire_station = support.get(
        "fire_station"
    )

    if fire_station:
        lines.append(
            "สถานีดับเพลิงใกล้ที่สุด : "
            f"{fire_station['name']}"
        )

        lines.append(
            "ระยะทางโดยประมาณ : "
            f"{fire_station['distance_km']:.2f} กิโลเมตร"
        )

        if fire_station.get("phone") not in {
            None,
            "",
            "-",
        }:
            lines.append(
                f"หมายเลขโทรศัพท์ : {fire_station['phone']}"
            )

    else:
        lines.append(
            "สถานีดับเพลิงใกล้ที่สุด : "
            "ยังไม่ได้เชื่อมต่อข้อมูล ArcGIS"
        )

    lines.append("")

    if COMMUNITY_LAYER_URL:
        lines.append(
            "จำนวนชุมชนในรัศมี 5 กิโลเมตร : "
            f"{support.get('community_count', 0)} แห่ง"
        )

    else:
        lines.append(
            "จำนวนชุมชนในรัศมี 5 กิโลเมตร : "
            "ยังไม่ได้เชื่อมต่อข้อมูล ArcGIS"
        )

    return lines


def build_alert_message(
    alert: dict[str, Any],
) -> str:
    severity = alert["severity"]

    wind_direction = alert.get(
        "wind_direction"
    )

    wind_speed = alert.get(
        "wind_speed"
    )

    lines = [
        f"{severity['icon']} แจ้งเตือนสถานการณ์คุณภาพสิ่งแวดล้อม",
        f"สถานะ : {severity['name']}",
        "",
        "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย",
        "การนิคมอุตสาหกรรมแห่งประเทศไทย",
        "",
        "ตรวจพบค่าพารามิเตอร์คุณภาพสิ่งแวดล้อม",
        "ที่ต้องดำเนินการแจ้งเตือนจากระบบ e-Monitoring",
        "รายละเอียดดังนี้",
        "",
        f"นิคมอุตสาหกรรม : {alert['industry_zone']}",
        f"สถานีตรวจวัด : {alert['station_name']}",
        f"ประเภทสถานี : {alert['station_type']}",
        f"วันและเวลาตรวจวัด : {alert['last_update']}",
        f"สถานะสถานี : {alert['station_status']}",
        "",
        "รายการพารามิเตอร์ที่ต้องแจ้งเตือน",
        "",
    ]

    lines.extend(
        parameter_lines(
            alert["parameters"]
        )
    )

    lines.extend(
        [
            "ข้อมูลทิศทางลมบริเวณใกล้เคียง",
            (
                "ทิศทางลม : "
                f"{wind_direction_th(wind_direction)}"
                + (
                    f" ({format_number(wind_direction)} องศา)"
                    if wind_direction is not None
                    else ""
                )
            ),
            (
                "ความเร็วลม : "
                + (
                    f"{format_number(wind_speed)} เมตร/วินาที"
                    if wind_speed is not None
                    else "-"
                )
            ),
            f"แหล่งข้อมูลลม : {alert['wind_source']}",
            f"สถานีข้อมูลลม : {alert['weather_station_name']}",
            "",
        ]
    )

    lines.extend(
        support_lines(alert)
    )

    maps_url = google_maps_link(
        alert["latitude"],
        alert["longitude"],
    )

    lines.extend(
        [
            "",
            "โปรดตรวจสอบข้อมูลและพิจารณาดำเนินการ",
            "ตามแผนเฝ้าระวังและตอบโต้ภาวะฉุกเฉิน",
            "",
            f"แผนที่ระบบ GIS : {ARCGIS_DASHBOARD_URL}",
            f"ตำแหน่งสถานี : {maps_url}",
            "",
            "ข้อความนี้จัดส่งโดยระบบแจ้งเตือนอัตโนมัติ",
            "e-Monitoring กนอ.",
        ]
    )

    return "\n".join(lines)


def build_recovery_message(
    previous_alert: dict[str, Any],
) -> str:
    parameter_names = ", ".join(
        item.get("display_name", "-")
        for item in previous_alert.get(
            "parameters",
            [],
        )
    )

    return "\n".join(
        [
            "🟢 แจ้งสถานการณ์กลับเข้าสู่ภาวะปกติ",
            "",
            "ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย",
            "การนิคมอุตสาหกรรมแห่งประเทศไทย",
            "",
            "ระบบ e-Monitoring ไม่พบรายการ",
            "ParameterAlram ของสถานีดังต่อไปนี้แล้ว",
            "",
            (
                "นิคมอุตสาหกรรม : "
                f"{previous_alert.get('industry_zone', '-')}"
            ),
            (
                "สถานีตรวจวัด : "
                f"{previous_alert.get('station_name', '-')}"
            ),
            (
                "พารามิเตอร์เดิม : "
                f"{parameter_names or '-'}"
            ),
            "",
            "โปรดติดตามสถานการณ์อย่างต่อเนื่อง",
            "",
            "ข้อความนี้จัดส่งโดยระบบแจ้งเตือนอัตโนมัติ",
            "e-Monitoring กนอ.",
        ]
    )


# ============================================================
# LINE Messaging API
# ============================================================

def send_line_message(
    message: str,
) -> None:
    token = os.getenv(
        "LINE_CHANNEL_ACCESS_TOKEN"
    )

    target_id = os.getenv(
        "LINE_TARGET_ID"
    )

    if not token:
        raise RuntimeError(
            "ไม่พบ LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not target_id:
        raise RuntimeError(
            "ไม่พบ LINE_TARGET_ID"
        )

    payload = {
        "to": target_id,
        "messages": [
            {
                "type": "text",
                "text": message[:5000],
            }
        ],
    }

    request = urllib.request.Request(
        LINE_PUSH_URL,
        data=json.dumps(
            payload,
            ensure_ascii=False,
        ).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
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
                "ส่งข้อความ LINE สำเร็จ "
                f"HTTP {response.status}"
            )

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )

        raise RuntimeError(
            "ส่ง LINE ไม่สำเร็จ "
            f"HTTP {error.code}: {body}"
        ) from error


# ============================================================
# ตรวจสอบว่าควรส่งซ้ำหรือไม่
# ============================================================

def alert_signature(
    alert: dict[str, Any],
) -> str:
    signature_data = {
        "last_update": alert.get(
            "last_update"
        ),
        "severity": alert.get(
            "severity",
            {},
        ).get("code"),
        "parameters": [
            {
                "parameter": item.get(
                    "parameter"
                ),
                "value": item.get("value"),
                "standard": item.get(
                    "standard"
                ),
            }
            for item in alert.get(
                "parameters",
                [],
            )
        ],
    }

    return json.dumps(
        signature_data,
        ensure_ascii=False,
        sort_keys=True,
    )


# ============================================================
# Main
# ============================================================

def main() -> None:
    print(
        "กำลังดาวน์โหลดข้อมูล e-Monitoring..."
    )

    data = request_json(DATA_URL)

    current_alerts = collect_alarm_stations(
        data
    )

    previous_state = load_state()

    previous_alerts = previous_state.get(
        "active_alerts",
        {},
    )

    initialized = bool(
        previous_state.get("initialized")
    )

    print(
        "จำนวนสถานีที่มี ParameterAlram: "
        f"{len(current_alerts)}"
    )

    sent_alert_count = 0
    recovered_count = 0

    for code, alert in current_alerts.items():
        previous_alert = previous_alerts.get(
            code
        )

        should_send = (
            previous_alert is None
            or alert_signature(previous_alert)
            != alert_signature(alert)
        )

        if should_send:
            print(
                "กำลังส่งแจ้งเตือน: "
                f"{alert['station_name']}"
            )

            send_line_message(
                build_alert_message(alert)
            )

            sent_alert_count += 1

        else:
            print(
                "ไม่ส่งซ้ำ ข้อมูลยังไม่เปลี่ยน: "
                f"{alert['station_name']}"
            )

    if initialized:
        for code, previous_alert in (
            previous_alerts.items()
        ):
            if code in current_alerts:
                continue

            print(
                "กำลังส่งสถานะกลับเข้าสู่ภาวะปกติ: "
                f"{previous_alert.get('station_name', code)}"
            )

            send_line_message(
                build_recovery_message(
                    previous_alert
                )
            )

            recovered_count += 1

    save_state(current_alerts)

    print(
        "ส่งข้อความแจ้งเตือน: "
        f"{sent_alert_count} สถานี"
    )

    print(
        "ส่งข้อความกลับเข้าสู่ภาวะปกติ: "
        f"{recovered_count} สถานี"
    )

    if (
        sent_alert_count == 0
        and recovered_count == 0
    ):
        print(
            "ไม่มีข้อมูลเปลี่ยนแปลง "
            "จึงไม่ส่งข้อความ LINE"
        )


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            f"เกิดข้อผิดพลาด: {error}",
            file=sys.stderr,
        )

        sys.exit(1)
