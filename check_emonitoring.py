import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


# ============================================================
# IEAT e-Monitoring -> LINE Alert
# ============================================================

DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

DASHBOARD_URL = (
    "https://thanawan-ki.github.io/"
    "ieat-emonitoring-line-alert/index.html#offline-stations"
)

THAI_TZ = ZoneInfo("Asia/Bangkok")
STATUS_FILE = Path("docs/status.json")
ALERT_STATE_FILE = Path("docs/alert_state.json")

# LINE Flex carousel JSON จำกัด 50 KB
# ใช้ 45 KB เป็น safety margin
MAX_FLEX_BYTES = 45 * 1024

# Broadcast 1 request ส่งได้สูงสุด 5 messages
MAX_MESSAGES_PER_REQUEST = 5

# Carousel 1 ชุดมีได้สูงสุด 12 bubbles
MAX_BUBBLES_PER_CAROUSEL = 12


# ============================================================
# Assets
# ============================================================

GITHUB_REPOSITORY = os.getenv(
    "GITHUB_REPOSITORY",
    ""
).strip()

GITHUB_BRANCH = os.getenv(
    "GITHUB_REF_NAME",
    "main"
).strip()

ASSET_BASE_URL = os.getenv(
    "ASSET_BASE_URL",
    ""
).strip()

if not ASSET_BASE_URL and GITHUB_REPOSITORY:
    ASSET_BASE_URL = (
        "https://raw.githubusercontent.com/"
        f"{GITHUB_REPOSITORY}/"
        f"{GITHUB_BRANCH}/assets"
    )

IEAT_LOGO_URL = f"{ASSET_BASE_URL}/ieat_logo.png"
HIGH_ICON_URL = f"{ASSET_BASE_URL}/4.png"
WATCH_ICON_URL = f"{ASSET_BASE_URL}/3.png"
FOLLOW_ICON_URL = f"{ASSET_BASE_URL}/1.png"

TH_VERTICAL_LOGO_URL = (
    "https://raw.githubusercontent.com/"
    f"{GITHUB_REPOSITORY or 'THANAWAN-KI/ieat-emonitoring-line-alert'}/"
    f"{GITHUB_BRANCH}/docs/assets/TH-Vertical.png"
)


# ============================================================
# Date / Time
# ============================================================

def now_thailand() -> datetime:
    return datetime.now(THAI_TZ)


def thai_datetime_text(value: datetime) -> str:
    months = [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
    ]
    return (
        f"{value.day} {months[value.month - 1]} "
        f"{value.year + 543} เวลา {value:%H:%M} น."
    )


def report_time_text() -> str:
    return thai_datetime_text(now_thailand())


def next_report_time_text() -> str:
    current = now_thailand()
    next_time = current.replace(
        minute=17,
        second=0,
        microsecond=0,
    )
    if current >= next_time:
        next_time += timedelta(hours=1)
    return thai_datetime_text(next_time)


THAI_MONTH_NUMBERS = {
    "ม.ค.": 1,
    "ก.พ.": 2,
    "มี.ค.": 3,
    "เม.ย.": 4,
    "พ.ค.": 5,
    "มิ.ย.": 6,
    "ก.ค.": 7,
    "ส.ค.": 8,
    "ก.ย.": 9,
    "ต.ค.": 10,
    "พ.ย.": 11,
    "ธ.ค.": 12,
}


def parse_station_update_date(
    value: Any,
) -> datetime | None:
    """อ่านวันที่รูปแบบไทย เช่น 31 ส.ค. 2569, 11:44"""
    text = safe_text(value, "")
    if not text:
        return None

    parts = text.replace(",", " ").split()
    if len(parts) >= 3 and parts[1] in THAI_MONTH_NUMBERS:
        try:
            day = int(parts[0])
            month = THAI_MONTH_NUMBERS[parts[1]]
            year = int(parts[2])
            if year >= 2400:
                year -= 543

            hour = 0
            minute = 0
            if len(parts) >= 4 and ":" in parts[3]:
                hour_text, minute_text = parts[3].split(":", 1)
                hour = int(hour_text)
                minute = int(minute_text)

            return datetime(
                year,
                month,
                day,
                hour,
                minute,
                tzinfo=THAI_TZ,
            )
        except (TypeError, ValueError):
            return None

    try:
        parsed = datetime.fromisoformat(
            text.replace("Z", "+00:00")
        )
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=THAI_TZ)
        return parsed.astimezone(THAI_TZ)
    except ValueError:
        return None


def station_updated_today(
    station: dict[str, Any],
) -> bool:
    update_time = parse_station_update_date(
        station.get("last_update")
    )
    if update_time is None:
        return False
    return update_time.date() == now_thailand().date()


def filter_stations_updated_today(
    stations: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    return [
        station
        for station in stations
        if station_updated_today(station)
    ]


# ============================================================
# Text helpers
# ============================================================

def safe_text(value: Any, default: str = "-") -> str:
    if value is None:
        return default

    text = str(value).strip()

    if text.lower() in {
        "",
        "-",
        "none",
        "null",
        "nan",
        "n/a",
    }:
        return default

    return text


def full_text(value: Any, default: str = "-") -> str:
    """
    ไม่ตัดข้อมูล ParameterAlram / Comment
    """
    if value is None:
        return default

    text = str(value).strip()

    if text.lower() in {
        "",
        "-",
        "none",
        "null",
        "nan",
        "n/a",
    }:
        return default

    return text


def split_alarm_items(value: Any) -> list[str]:
    """
    ParameterAlram จาก API อาจมีหลายรายการคั่นด้วย comma
    เก็บข้อความจริงทั้งหมด ไม่ตัดความยาว
    """
    text = full_text(value, "")

    if not text:
        return []

    # ข้อมูลจริงมักคั่นด้วย " , "
    # จึงใช้ comma เป็นตัวแบ่งหลัก
    parts = [
        part.strip()
        for part in text.split(",")
        if part.strip()
    ]

    return parts if parts else [text]


def alarm_count(station: dict[str, Any]) -> int:
    return len(
        split_alarm_items(
            station.get("parameter_alarm", "")
        )
    )


# ============================================================
# Station classification
# ============================================================

def station_type_group(station_type: str) -> str:
    normalized = safe_text(
        station_type,
        ""
    ).upper()

    # API จริงมี Type = AIR QUALITY
    if (
        "AQM" in normalized
        or "AIR QUALITY" in normalized
        or "AIR_QUALITY" in normalized
    ):
        return "AQMs"

    if (
        "WQM" in normalized
        or "WATER QUALITY" in normalized
        or "WATER_QUALITY" in normalized
    ):
        return "WQMs"

    if "CEM" in normalized:
        return "CEMs"

    return "ประเภทอื่น"


def is_online(properties: dict[str, Any]) -> bool:
    return (
        safe_text(
            properties.get("Status"),
            ""
        ).upper()
        == "ONLINE"
    )


def has_alarm(properties: dict[str, Any]) -> bool:
    alarm = safe_text(
        properties.get("ParameterAlram"),
        ""
    )
    return alarm.lower() not in {
        "",
        "-",
        "none",
        "null",
        "nan",
        "n/a",
    }


def valid_station(properties: dict[str, Any]) -> bool:
    station_name = safe_text(
        properties.get("StationTH"),
        ""
    )
    code = safe_text(
        properties.get("Code"),
        ""
    )

    if station_name in {"", "-"}:
        return False

    if code in {"0", "9999"}:
        return False

    return True


# ============================================================
# GeoJSON
# ============================================================

def get_features(payload: Any) -> list[dict[str, Any]]:
    if isinstance(payload, dict):
        features = payload.get("features", [])
        return features if isinstance(features, list) else []

    if isinstance(payload, list):
        return payload

    return []


def get_properties(
    feature: dict[str, Any]
) -> dict[str, Any]:
    properties = feature.get(
        "properties",
        {}
    )
    return properties if isinstance(properties, dict) else {}


def get_coordinates(
    feature: dict[str, Any]
) -> tuple[float | None, float | None]:

    geometry = feature.get(
        "geometry",
        {}
    )

    if not isinstance(geometry, dict):
        return None, None

    coordinates = geometry.get(
        "coordinates",
        []
    )

    if (
        not isinstance(coordinates, list)
        or len(coordinates) < 2
    ):
        return None, None

    try:
        return (
            float(coordinates[0]),
            float(coordinates[1]),
        )
    except (TypeError, ValueError):
        return None, None


# ============================================================
# Download e-Monitoring
# ============================================================

def download_station_data() -> Any:
    request = urllib.request.Request(
        DATA_URL,
        headers={
            "User-Agent":
                "IEAT-eMonitoring-LINE-Alert/4.0",
            "Accept":
                "application/json",
            "Cache-Control":
                "no-cache",
            "Pragma":
                "no-cache",
        },
        method="GET",
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=60
        ) as response:
            raw = response.read().decode(
                "utf-8-sig"
            )
            return json.loads(raw)

    except urllib.error.HTTPError as error:
        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ "
            f"HTTP {error.code}: {error.reason}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อ "
            f"e-Monitoring: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            f"ข้อมูลจาก e-Monitoring ไม่ใช่ JSON ที่ถูกต้อง: {error}"
        ) from error


# ============================================================
# Station record
# ============================================================

def create_station_record(
    feature: dict[str, Any]
) -> dict[str, Any]:

    properties = get_properties(feature)
    longitude, latitude = get_coordinates(feature)

    return {
        "code": safe_text(
            properties.get("Code")
        ),

        "station_name": safe_text(
            properties.get("StationTH")
        ),

        "estate_name": safe_text(
            properties.get("IndustryZone")
            or properties.get("EstateTH")
            or properties.get("IndustrialEstate")
            or properties.get("IndustrialEstateTH")
        ),

        "zone": safe_text(
            properties.get("Zone")
            or properties.get("ZONE")
            or properties.get("zone")
        ),

        "station_type": safe_text(
            properties.get("Type")
        ),

        "status": safe_text(
            properties.get("Status")
        ),

        "last_update": safe_text(
            properties.get("LastUpdate-TH")
            or properties.get("LastUpdateTH")
            or properties.get("LastUpdate")
        ),

        # ไม่ตัด
        "parameter_alarm": full_text(
            properties.get("ParameterAlram")
        ),

        # เก็บ Comment จริง
        "comment": full_text(
            properties.get("Comment")
            or properties.get("COMMENT")
            or properties.get("comment")
        ),

        "longitude": longitude,
        "latitude": latitude,
    }


def prepare_stations(
    features: list[dict[str, Any]]
) -> list[dict[str, Any]]:

    stations = []

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = get_properties(feature)

        if valid_station(properties):
            stations.append(
                create_station_record(feature)
            )

    return stations


def filter_alert_features(
    features: list[dict[str, Any]]
) -> list[dict[str, Any]]:

    alert_stations = []

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = get_properties(feature)

        if not valid_station(properties):
            continue

        # ตั้งใจไม่กรอง ONLINE
        # เพื่อให้ OFFLINE ที่มี ParameterAlram
        # สามารถแสดงรายละเอียดได้
        if not has_alarm(properties):
            continue

        alert_stations.append(
            create_station_record(feature)
        )

    return alert_stations


# ============================================================
# Statistics
# ============================================================

def calculate_type_stats(
    all_stations: list[dict[str, Any]]
) -> dict[str, dict[str, int]]:

    stats = {
        "AQMs": {
            "total": 0,
            "online": 0,
            "offline": 0,
        },
        "WQMs": {
            "total": 0,
            "online": 0,
            "offline": 0,
        },
        "CEMs": {
            "total": 0,
            "online": 0,
            "offline": 0,
        },
        "ประเภทอื่น": {
            "total": 0,
            "online": 0,
            "offline": 0,
        },
    }

    for station in all_stations:
        group = station_type_group(
            station["station_type"]
        )

        stats[group]["total"] += 1

        if (
            station["status"].upper()
            == "ONLINE"
        ):
            stats[group]["online"] += 1
        else:
            stats[group]["offline"] += 1

    return stats


def calculate_severity_levels(
    alert_stations: list[dict[str, Any]]
) -> tuple[int, int, int]:

    urgent = 0
    watch = 0
    follow = 0

    for station in alert_stations:
        count = alarm_count(station)

        if count >= 3:
            urgent += 1
        elif count == 2:
            watch += 1
        elif count == 1:
            follow += 1

    return urgent, watch, follow


def extract_unique_parameters(
    alert_stations: list[dict[str, Any]]
) -> list[str]:

    result: list[str] = []

    for station in alert_stations:
        for item in split_alarm_items(
            station.get(
                "parameter_alarm",
                ""
            )
        ):
            if item not in result:
                result.append(item)

    return result


# ============================================================
# Severity
# ============================================================

def get_station_severity(
    station: dict[str, Any]
) -> dict[str, str]:

    count = alarm_count(station)

    if count >= 3:
        return {
            "title": "เกินค่ามาตรฐาน",
            "color": "#C51F35",
            "background": "#FFF1F3",
            "border": "#E9B6BE",
            "icon_url": HIGH_ICON_URL,
        }

    if count == 2:
        return {
            "title": "เฝ้าระวัง",
            "color": "#E67700",
            "background": "#FFF8E8",
            "border": "#E9D49B",
            "icon_url": WATCH_ICON_URL,
        }

    return {
        "title": "ติดตามสถานการณ์",
        "color": "#2B8A3E",
        "background": "#F1F8F3",
        "border": "#BBD8C4",
        "icon_url": FOLLOW_ICON_URL,
    }


# ============================================================
# Google Maps
# ============================================================

def google_maps_url(
    latitude: float | None,
    longitude: float | None
) -> str:

    if (
        latitude is None
        or longitude is None
    ):
        return "https://www.google.com/maps"

    return (
        "https://www.google.com/maps/"
        f"search/?api=1&query="
        f"{latitude:.7f},{longitude:.7f}"
    )


# ============================================================
# status.json
# ============================================================

def write_status_file(
    all_stations: list[dict[str, Any]],
    alert_stations: list[dict[str, Any]],
    type_stats: dict[str, dict[str, int]],
) -> None:

    current_time = now_thailand()

    total_count = len(all_stations)

    online_total = sum(
        v["online"]
        for v in type_stats.values()
    )

    offline_total = sum(
        v["offline"]
        for v in type_stats.values()
    )

    urgent_count, watch_count, follow_count = (
        calculate_severity_levels(
            alert_stations
        )
    )

    estate_count = len({
        station["estate_name"]
        for station in alert_stations
        if station["estate_name"] != "-"
    })

    parameter_list = extract_unique_parameters(
        alert_stations
    )

    latest_data_time = report_time_text()

    valid_updates = [
        station["last_update"]
        for station in all_stations
        if station["last_update"] != "-"
    ]

    if valid_updates:
        latest_data_time = valid_updates[0]

    status_data = {
        "status": (
            "alert"
            if alert_stations
            else "normal"
        ),

        "status_text": (
            "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
            if alert_stations
            else "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        ),

        "description": (
            "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์"
            if alert_stations
            else "สถานีและติดตามสถานการณ์"
        ),

        "updated_at":
            current_time.isoformat(),

        "updated_at_text":
            report_time_text(),

        "latest_data_time":
            latest_data_time,

        "station_count":
            total_count,

        "online_total":
            online_total,

        "offline_total":
            offline_total,

        "online_aqms":
            type_stats["AQMs"]["online"],

        "online_wqms":
            type_stats["WQMs"]["online"],

        "online_cems":
            type_stats["CEMs"]["online"],

        "online_other":
            type_stats["ประเภทอื่น"]["online"],

        "alert_station_count":
            len(alert_stations),

        "parameter_text":
            ", ".join(parameter_list)
            if parameter_list
            else "-",

        "estate_count":
            estate_count,

        "urgent_count":
            urgent_count,

        "watch_count":
            watch_count,

        "follow_count":
            follow_count,

        "type_stats":
            type_stats,

        # ข้อมูลสถานีทั้งหมดสำหรับ Executive Dashboard
        "all_stations":
            all_stations,

        # รายการสถานีที่มีการแจ้งเตือน
        "stations":
            alert_stations,
    }

    STATUS_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    with STATUS_FILE.open(
        "w",
        encoding="utf-8"
    ) as file:
        json.dump(
            status_data,
            file,
            ensure_ascii=False,
            indent=2
        )


# ============================================================
# Alert state / Event-based notification
# ============================================================

def station_key(station: dict[str, Any]) -> str:
    """
    ใช้ Code เป็นตัวระบุสถานี ถ้าไม่มีให้ fallback เป็นชื่อสถานี
    """
    code = safe_text(station.get("code"), "")
    if code and code != "-":
        return code

    return safe_text(
        station.get("station_name"),
        "UNKNOWN"
    )


def offline_threshold_minutes() -> int:
    """เวลาที่สถานีต้อง OFFLINE ต่อเนื่องก่อนแจ้งเตือน"""
    try:
        return max(
            1,
            int(os.getenv("OFFLINE_ALERT_MINUTES", "60")),
        )
    except ValueError:
        return 60


def offline_minutes(station: dict[str, Any]) -> int | None:
    update_time = parse_station_update_date(
        station.get("last_update")
    )
    if update_time is None:
        return None
    return max(
        0,
        int((now_thailand() - update_time).total_seconds() // 60),
    )


def offline_notification_due(station: dict[str, Any]) -> bool:
    if safe_text(station.get("status"), "").upper() != "OFFLINE":
        return False
    minutes = offline_minutes(station)
    return (
        minutes is not None
        and minutes >= offline_threshold_minutes()
    )


def station_snapshot(
    station: dict[str, Any]
) -> dict[str, Any]:
    """
    เก็บเฉพาะข้อมูลที่จำเป็นสำหรับเปรียบเทียบวันก่อน/วันนี้
    """
    return {
        "station_name":
            safe_text(station.get("station_name")),
        "estate_name":
            safe_text(station.get("estate_name")),
        "zone":
            safe_text(station.get("zone")),
        "station_type":
            safe_text(station.get("station_type")),
        "status":
            safe_text(station.get("status")).upper(),
        "last_update":
            safe_text(station.get("last_update"), ""),
        "offline_notified":
            offline_notification_due(station),
        "parameter_alarm":
            full_text(station.get("parameter_alarm"), ""),
        "comment":
            full_text(station.get("comment"), ""),
        "latitude":
            station.get("latitude"),
        "longitude":
            station.get("longitude"),
    }


def load_alert_state() -> dict[str, Any]:
    if not ALERT_STATE_FILE.exists():
        return {
            "version": 1,
            "updated_at": None,
            "stations": {},
        }

    try:
        with ALERT_STATE_FILE.open(
            "r",
            encoding="utf-8"
        ) as file:
            data = json.load(file)

        if not isinstance(data, dict):
            raise ValueError("state ไม่ใช่ object")

        stations = data.get("stations", {})
        if not isinstance(stations, dict):
            stations = {}

        return {
            "version": data.get("version", 1),
            "updated_at": data.get("updated_at"),
            "stations": stations,
        }

    except (
        OSError,
        json.JSONDecodeError,
        ValueError,
    ) as error:

        print(
            "WARNING: อ่าน alert_state.json ไม่ได้ "
            f"({error}) -> เริ่ม state ใหม่"
        )

        return {
            "version": 1,
            "updated_at": None,
            "stations": {},
        }


def save_alert_state(
    all_stations: list[dict[str, Any]]
) -> None:

    station_states: dict[str, Any] = {}

    for station in all_stations:
        station_states[
            station_key(station)
        ] = station_snapshot(station)

    state = {
        "version": 1,
        "updated_at":
            now_thailand().isoformat(),
        "stations":
            station_states,
    }

    ALERT_STATE_FILE.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    temp_file = ALERT_STATE_FILE.with_suffix(
        ".json.tmp"
    )

    with temp_file.open(
        "w",
        encoding="utf-8"
    ) as file:
        json.dump(
            state,
            file,
            ensure_ascii=False,
            indent=2
        )

    temp_file.replace(
        ALERT_STATE_FILE
    )


def alarm_level_from_snapshot(
    snapshot: dict[str, Any]
) -> str:

    parameters = split_alarm_items(
        snapshot.get(
            "parameter_alarm",
            ""
        )
    )

    count = len(parameters)

    if count >= 3:
        return "เกินค่ามาตรฐาน"

    if count == 2:
        return "เฝ้าระวัง"

    if count == 1:
        return "ติดตามสถานการณ์"

    return "ปกติ"


def alarm_level_from_station(
    station: dict[str, Any]
) -> str:

    return get_station_severity(
        station
    )["title"]


def build_event_station(
    station: dict[str, Any],
    event_type: str,
    reason: str,
    previous: dict[str, Any] | None = None,
) -> dict[str, Any]:

    result = dict(station)
    result["event_type"] = event_type
    result["event_reason"] = reason
    result["previous_snapshot"] = previous or {}
    return result


def detect_notification_events(
    previous_state: dict[str, Any],
    all_stations: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """
    แจ้งเฉพาะเหตุการณ์ที่เปลี่ยนจากรอบก่อน

    1) NEW_ALARM:
       สถานีที่เดิมไม่มี alarm -> วันนี้มี alarm

    2) ALARM_CHANGED:
       ParameterAlram เปลี่ยน

    3) SEVERITY_UP:
       ระดับสูงขึ้น เช่น เฝ้าระวัง -> เกินค่ามาตรฐาน

    4) SEVERITY_DOWN:
       ระดับลดลง แต่ยังมี alarm

    5) RECOVERED:
       มี alarm -> วันนี้กลับปกติ

    6) OFFLINE:
       ONLINE -> OFFLINE

    7) ONLINE:
       OFFLINE -> ONLINE

    ไม่ส่งซ้ำทุกวันถ้าข้อมูลเหมือนเดิม
    """

    previous_stations = previous_state.get(
        "stations",
        {}
    )

    if not isinstance(
        previous_stations,
        dict
    ):
        previous_stations = {}

    events: list[dict[str, Any]] = []

    # --------------------------------------------------------
    # เปรียบเทียบทุกสถานีที่มีอยู่วันนี้
    # --------------------------------------------------------

    for station in all_stations:

        key = station_key(station)

        current = station_snapshot(
            station
        )

        previous = previous_stations.get(
            key
        )

        current_alarm = bool(
            current.get(
                "parameter_alarm",
                ""
            ).strip()
        )

        current_status = current.get(
            "status",
            ""
        ).upper()

        if previous is None:

            # รอบแรก: แจ้งเฉพาะ Alarm หรือ OFFLINE ที่ครบเกณฑ์
            # ไม่แจ้งทุกสถานีเป็นจำนวนมหาศาล
            if current_alarm:
                events.append(
                    build_event_station(
                        station,
                        "NEW_ALARM",
                        "พบค่าพารามิเตอร์แจ้งเตือนใหม่",
                        None,
                    )
                )

            if (
                current_status == "OFFLINE"
                and current.get("offline_notified", False)
            ):
                minutes = offline_minutes(station)
                duration_text = (
                    f"{minutes} นาที"
                    if minutes is not None
                    else "ตามเวลาที่กำหนด"
                )
                events.append(
                    build_event_station(
                        station,
                        "OFFLINE",
                        (
                            "สถานี OFFLINE ต่อเนื่อง "
                            f"{duration_text} (เกณฑ์ "
                            f"{offline_threshold_minutes()} นาที)"
                        ),
                        None,
                    )
                )

            continue

        previous_alarm = bool(
            str(
                previous.get(
                    "parameter_alarm",
                    ""
                )
            ).strip()
        )

        previous_status = str(
            previous.get(
                "status",
                ""
            )
        ).upper()
        previous_offline_notified = bool(
            previous.get("offline_notified", False)
        )
        current_offline_notified = bool(
            current.get("offline_notified", False)
        )

        previous_level = alarm_level_from_snapshot(
            previous
        )

        current_level = alarm_level_from_snapshot(
            current
        )

        # ----------------------------------------------------
        # Alarm: ไม่มี -> มี
        # ----------------------------------------------------

        if (
            not previous_alarm
            and current_alarm
        ):

            events.append(
                build_event_station(
                    station,
                    "NEW_ALARM",
                    "พบค่าพารามิเตอร์แจ้งเตือนใหม่",
                    previous,
                )
            )

        # ----------------------------------------------------
        # Alarm: มี -> ไม่มี = กลับปกติ
        # ----------------------------------------------------

        elif (
            previous_alarm
            and not current_alarm
        ):

            events.append(
                build_event_station(
                    station,
                    "RECOVERED",
                    "ค่าพารามิเตอร์กลับสู่ภาวะปกติ",
                    previous,
                )
            )

        # ----------------------------------------------------
        # Alarm: เปลี่ยนรายการ
        # ----------------------------------------------------

        elif (
            previous_alarm
            and current_alarm
            and (
                previous.get(
                    "parameter_alarm",
                    ""
                )
                != current.get(
                    "parameter_alarm",
                    ""
                )
            )
        ):

            if (
                current_level
                != previous_level
            ):

                if current_level == "เกินค่ามาตรฐาน":

                    events.append(
                        build_event_station(
                            station,
                            "SEVERITY_UP",
                            (
                                "ระดับการแจ้งเตือนสูงขึ้น: "
                                f"{previous_level} → "
                                f"{current_level}"
                            ),
                            previous,
                        )
                    )

                else:

                    events.append(
                        build_event_station(
                            station,
                            "SEVERITY_DOWN",
                            (
                                "ระดับการแจ้งเตือนเปลี่ยน: "
                                f"{previous_level} → "
                                f"{current_level}"
                            ),
                            previous,
                        )
                    )

            else:

                events.append(
                    build_event_station(
                        station,
                        "ALARM_CHANGED",
                        "รายการ ParameterAlram เปลี่ยนแปลง",
                        previous,
                    )
                )

        # ----------------------------------------------------
        # ONLINE -> OFFLINE
        # ----------------------------------------------------

        if (
            current_status == "OFFLINE"
            and current_offline_notified
            and not previous_offline_notified
        ):
            minutes = offline_minutes(station)
            duration_text = (
                f"{minutes} นาที"
                if minutes is not None
                else "ตามเวลาที่กำหนด"
            )
            events.append(
                build_event_station(
                    station,
                    "OFFLINE",
                    (
                        "สถานี OFFLINE ต่อเนื่อง "
                        f"{duration_text} (เกณฑ์ "
                        f"{offline_threshold_minutes()} นาที)"
                    ),
                    previous,
                )
            )

        # ----------------------------------------------------
        # OFFLINE -> ONLINE
        # ----------------------------------------------------

        elif (
            previous_status == "OFFLINE"
            and current_status == "ONLINE"
            and previous_offline_notified
        ):

            events.append(
                build_event_station(
                    station,
                    "ONLINE",
                    "สถานีกลับมา ONLINE",
                    previous,
                )
            )

    # --------------------------------------------------------
    # สถานีหายไปจากข้อมูล
    #
    # ไม่แจ้งว่า OFFLINE เพราะอาจเป็น API/ข้อมูลขัดข้อง
    # เพื่อป้องกัน False Alarm
    # --------------------------------------------------------

    return events


def event_priority(
    event_type: str
) -> int:

    priorities = {
        "SEVERITY_UP": 1,
        "NEW_ALARM": 2,
        "OFFLINE": 3,
        "ALARM_CHANGED": 4,
        "SEVERITY_DOWN": 5,
        "ONLINE": 6,
        "RECOVERED": 7,
    }

    return priorities.get(
        event_type,
        99
    )


def event_icon_url(
    event: dict[str, Any]
) -> str:

    event_type = event.get(
        "event_type",
        ""
    )

    if event_type == "RECOVERED":
        return FOLLOW_ICON_URL

    if event_type == "ONLINE":
        return FOLLOW_ICON_URL

    if event_type == "OFFLINE":
        return WATCH_ICON_URL

    if event_type == "SEVERITY_UP":
        return HIGH_ICON_URL

    if event_type == "SEVERITY_DOWN":
        return WATCH_ICON_URL

    return HIGH_ICON_URL


def event_title(
    event: dict[str, Any]
) -> str:

    titles = {
        "NEW_ALARM":
            "พบการแจ้งเตือนใหม่",

        "SEVERITY_UP":
            "ระดับการแจ้งเตือนสูงขึ้น",

        "ALARM_CHANGED":
            "รายการแจ้งเตือนเปลี่ยนแปลง",

        "SEVERITY_DOWN":
            "ระดับการแจ้งเตือนลดลง",

        "OFFLINE":
            "สถานี OFFLINE",

        "ONLINE":
            "สถานีกลับมา ONLINE",

        "RECOVERED":
            "สถานการณ์กลับสู่ปกติ",
    }

    return titles.get(
        event.get("event_type", ""),
        "แจ้งเตือนการเปลี่ยนแปลง"
    )


def event_color(
    event: dict[str, Any]
) -> str:

    event_type = event.get(
        "event_type",
        ""
    )

    if event_type in {
        "RECOVERED",
        "ONLINE",
    }:
        return "#2B8A3E"

    if event_type in {
        "OFFLINE",
        "SEVERITY_DOWN",
    }:
        return "#E67700"

    return "#C51F35"


# ============================================================
# Station status summary bubble
# ============================================================

def status_progress_bar(online: int, offline: int) -> dict[str, Any]:
    total = online + offline
    online_flex = round((online / total) * 100) if total else 0
    offline_flex = 100 - online_flex
    contents: list[dict[str, Any]] = []

    if online_flex:
        contents.append({
            "type": "box", "layout": "vertical", "flex": online_flex,
            "height": "8px", "backgroundColor": "#2B8A3E", "contents": [],
        })
    if offline_flex:
        contents.append({
            "type": "box", "layout": "vertical", "flex": offline_flex,
            "height": "8px", "backgroundColor": "#D9DEE3", "contents": [],
        })

    return {
        "type": "box", "layout": "horizontal", "margin": "xs",
        "cornerRadius": "4px", "contents": contents,
    }


def station_type_summary_row(
    label: str,
    stats: dict[str, int],
) -> dict[str, Any]:
    total = stats["total"]
    online = stats["online"]
    offline = stats["offline"]
    percent = round((online / total) * 100) if total else 0

    return {
        "type": "box",
        "layout": "vertical",
        "margin": "sm",
        "contents": [
            {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                    text_component(label, size="xs", weight="bold", flex=2),
                    text_component(
                        f"{online} Online", size="xs", color="#2B8A3E",
                        weight="bold", align="end", flex=2,
                    ),
                    text_component(
                        f"{offline} Offline", size="xs", color="#8A9299",
                        align="end", flex=2,
                    ),
                ],
            },
            status_progress_bar(online, offline),
            text_component(
                f"พร้อมใช้งาน {percent}% จากทั้งหมด {total} สถานี",
                size="xxs", color="#777777", margin="xs", align="end",
            ),
        ],
    }


def build_station_status_summary_bubble(
    all_stations: list[dict[str, Any]],
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
    events: list[dict[str, Any]],
) -> dict[str, Any]:
    total = len(all_stations)
    online = sum(item["online"] for item in type_stats.values())
    offline = sum(item["offline"] for item in type_stats.values())
    online_percent = round((online / total) * 100) if total else 0
    alert_station_count = len(alert_stations)
    parameter_alarm_count = sum(
        alarm_count(station)
        for station in alert_stations
    )
    recovered_station_count = len({
        station_key(event)
        for event in events
        if event.get("event_type") == "RECOVERED"
    })
    alert_estate_names = sorted({
        safe_text(station.get("estate_name"), "")
        for station in alert_stations
        if safe_text(station.get("estate_name"), "") not in {"", "-"}
    })
    alert_estate_text = (
        " • ".join(alert_estate_names)
        if alert_estate_names
        else "ไม่พบข้อมูลชื่อนิคมอุตสาหกรรม"
    )

    type_rows = [
        station_type_summary_row("AQMs", type_stats["AQMs"]),
        station_type_summary_row("WQMs", type_stats["WQMs"]),
        station_type_summary_row("CEMs", type_stats["CEMs"]),
    ]
    if type_stats["ประเภทอื่น"]["total"]:
        type_rows.append(
            station_type_summary_row("ประเภทอื่น", type_stats["ประเภทอื่น"])
        )

    stat_cards = []
    for value, label, background, color in [
        (total, "ทั้งหมด", "#F4F5F6", "#30283A"),
        (online, "ONLINE", "#F1F8F3", "#2B8A3E"),
        (offline, "OFFLINE", "#F5F6F7", "#6C757D"),
    ]:
        stat_cards.append({
            "type": "box", "layout": "vertical", "flex": 1,
            "paddingAll": "7px", "backgroundColor": background,
            "cornerRadius": "8px",
            "contents": [
                text_component(
                    str(value), size="xl", color=color,
                    weight="bold", align="center",
                ),
                text_component(
                    label, size="xs", color=color, align="center",
                ),
            ],
        })

    return {
        "type": "bubble",
        "size": "giga",
        "styles": {
            "header": {"backgroundColor": "#FFFFFF"},
            "body": {"backgroundColor": "#FFFFFF"},
            "footer": {"backgroundColor": "#FFFFFF"},
        },
        "header": build_header("สรุปสถานะสถานีตรวจวัด"),
        "body": {
            "type": "box", "layout": "vertical",
            "paddingTop": "3px", "paddingBottom": "8px",
            "paddingStart": "12px", "paddingEnd": "12px",
            "contents": [
                {
                    "type": "box", "layout": "vertical",
                    "paddingAll": "10px", "backgroundColor": "#F8F4FB",
                    "cornerRadius": "10px",
                    "contents": [
                        text_component(
                            f"สถานีพร้อมใช้งาน {online_percent}%",
                            size="md", color="#4E1478",
                            weight="bold", align="center",
                        ),
                        status_progress_bar(online, offline),
                    ],
                },
                {
                    "type": "box", "layout": "horizontal",
                    "margin": "sm", "spacing": "xs",
                    "contents": stat_cards,
                },
                text_component(
                    "สรุปสถานการณ์", size="sm",
                    weight="bold", margin="md",
                ),
                {
                    "type": "box", "layout": "horizontal",
                    "margin": "sm", "spacing": "xs",
                    "contents": [
                        {
                            "type": "box", "layout": "vertical", "flex": 1,
                            "paddingAll": "7px",
                            "backgroundColor": "#FFF1F3",
                            "cornerRadius": "8px",
                            "contents": [
                                text_component(
                                    str(parameter_alarm_count), size="xl",
                                    color="#C51F35", weight="bold",
                                    align="center",
                                ),
                                text_component(
                                    "พารามิเตอร์\nเกินมาตรฐาน", size="xxs",
                                    color="#C51F35", align="center",
                                ),
                            ],
                        },
                        {
                            "type": "box", "layout": "vertical", "flex": 1,
                            "paddingAll": "7px",
                            "backgroundColor": "#FFF8E8",
                            "cornerRadius": "8px",
                            "contents": [
                                text_component(
                                    str(alert_station_count), size="xl",
                                    color="#E67700", weight="bold",
                                    align="center",
                                ),
                                text_component(
                                    "สถานีที่ต้อง\nเฝ้าระวัง", size="xxs",
                                    color="#E67700", align="center",
                                ),
                            ],
                        },
                        {
                            "type": "box", "layout": "vertical", "flex": 1,
                            "paddingAll": "7px",
                            "backgroundColor": "#F1F8F3",
                            "cornerRadius": "8px",
                            "contents": [
                                text_component(
                                    str(recovered_station_count), size="xl",
                                    color="#2B8A3E", weight="bold",
                                    align="center",
                                ),
                                text_component(
                                    "สถานีกลับสู่\nภาวะปกติ", size="xxs",
                                    color="#2B8A3E", align="center",
                                ),
                            ],
                        },
                    ],
                },
                text_component(
                    "นิคมฯ ที่พบค่าเกินมาตรฐาน", size="xs",
                    color="#30283A", weight="bold", margin="md",
                ),
                text_component(
                    alert_estate_text, size="xs",
                    color="#555555", margin="xs", wrap=True,
                ),
                text_component(
                    "สถานะแยกตามประเภท", size="sm",
                    weight="bold", margin="md",
                ),
                *type_rows,
                {
                    "type": "box", "layout": "horizontal", "margin": "md",
                    "contents": [
                        text_component(
                            "● ONLINE", size="xxs",
                            color="#2B8A3E", flex=1,
                        ),
                        text_component(
                            "● OFFLINE", size="xxs",
                            color="#8A9299", align="end", flex=1,
                        ),
                    ],
                },
                text_component(
                    f"อัปเดต {report_time_text()}", size="xxs",
                    color="#777777", margin="sm", align="center",
                ),
            ],
        },
        "footer": {
            "type": "box", "layout": "vertical",
            "paddingTop": "3px", "paddingBottom": "9px",
            "paddingStart": "12px", "paddingEnd": "12px",
            "contents": [{
                "type": "button", "style": "primary",
                "height": "sm", "color": "#4E1478",
                "action": {
                    "type": "uri",
                    "label": "ดูรายละเอียดใน Dashboard",
                    "uri": DASHBOARD_URL,
                },
            }],
        },
    }


# ============================================================
# LINE Flex helpers
# ============================================================

def text_component(
    text: str,
    size: str = "sm",
    color: str = "#30283A",
    weight: str | None = None,
    wrap: bool = True,
    align: str = "start",
    margin: str | None = None,
    flex: int | None = None,
) -> dict[str, Any]:

    component: dict[str, Any] = {
        "type": "text",
        "text": str(text),
        "size": size,
        "color": color,
        "wrap": wrap,
        "align": align,
    }

    if weight:
        component["weight"] = weight

    if margin:
        component["margin"] = margin

    if flex is not None:
        component["flex"] = flex

    return component


def image_component(
    url: str,
    size: str = "xxs"
) -> dict[str, Any]:

    return {
        "type": "image",
        "url": url,
        "size": size,
        "aspectMode": "fit",
        "aspectRatio": "1:1",
        "flex": 0,
    }


def detail_row(
    label: str,
    value: str,
    value_color: str = "#30283A",
) -> dict[str, Any]:

    return {
        "type": "box",
        "layout": "horizontal",
        "paddingTop": "3px",
        "paddingBottom": "3px",
        "contents": [
            text_component(
                label,
                size="xs",
                color="#777777",
                weight="bold",
                flex=2,
            ),
            text_component(
                value,
                size="xs",
                color=value_color,
                weight="bold",
                wrap=True,
                flex=4,
            ),
        ],
    }


def build_header(
    subtitle: str
) -> dict[str, Any]:

    return {
        "type": "box",
        "layout": "vertical",
        "paddingTop": "7px",
        "paddingBottom": "6px",
        "paddingStart": "12px",
        "paddingEnd": "12px",
        "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "height": "3px",
                "backgroundColor": "#4E1478",
                "contents": [],
            },
            {
                "type": "box",
                "layout": "horizontal",
                "margin": "sm",
                    "contents": [
                    image_component(
                        IEAT_LOGO_URL,
                        size="xs"
                    ),
                    {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "sm",
                        "flex": 1,
                        "contents": [
                            text_component(
                                "IEAT e-Monitoring",
                                size="md",
                                color="#32105B",
                                weight="bold",
                            ),
                            text_component(
                                subtitle,
                                size="xs",
                                color="#777777",
                                margin="xs",
                            ),
                        ],
                    },
                ],
            },
        ],
    }


# ============================================================
# Summary bubble
# ============================================================

def build_summary_bubble(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
) -> dict[str, Any]:

    has_alert = bool(alert_stations)

    if has_alert:
        status_color = "#C51F35"
        status_background = "#FFF2F3"
        status_border = "#F5C2C7"
        status_title = (
            "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )
        status_subtitle = (
            "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์"
        )
    else:
        status_color = "#18794E"
        status_background = "#EAF7EF"
        status_border = "#C3E6CB"
        status_title = (
            "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )
        status_subtitle = (
            "สถานีและติดตามสถานการณ์"
        )

    body_contents: list[dict[str, Any]] = []

    banner_contents = [
        text_component(
            status_title,
            size="sm",
            color=status_color,
            weight="bold",
            align="center",
        ),
        text_component(
            status_subtitle,
            size="xs",
            color="#716C6B",
            margin="xs",
            align="center",
        ),
    ]

    if has_alert:
        urgent_count, watch_count, follow_count = (
            calculate_severity_levels(
                alert_stations
            )
        )

        parameters = extract_unique_parameters(
            alert_stations
        )

        estate_count = len({
            s["estate_name"]
            for s in alert_stations
            if s["estate_name"] != "-"
        })

        banner_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "md",
            "spacing": "sm",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFFFFF",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(len(alert_stations)),
                            size="lg",
                            color="#30283A",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "สถานีแจ้งเตือน",
                            size="xs",
                            color="#716C6B",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFFFFF",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(len(parameters)),
                            size="lg",
                            color="#30283A",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "รายการ",
                            size="xs",
                            color="#716C6B",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFFFFF",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(estate_count),
                            size="lg",
                            color="#30283A",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "นิคมฯ",
                            size="xs",
                            color="#716C6B",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
            ],
        })

        # สรุปจำนวนระดับ
        banner_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "spacing": "xs",
            "contents": [
                text_component(
                    f"{urgent_count}",
                    size="xs",
                    color="#C51F35",
                    weight="bold",
                    align="center",
                    flex=1,
                ),
                text_component(
                    f"{watch_count}",
                    size="xs",
                    color="#E67700",
                    weight="bold",
                    align="center",
                    flex=1,
                ),
                text_component(
                    f"{follow_count}",
                    size="xs",
                    color="#2B8A3E",
                    weight="bold",
                    align="center",
                    flex=1,
                ),
            ],
        })

    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "backgroundColor": status_background,
        "borderColor": status_border,
        "borderWidth": "1px",
        "cornerRadius": "9px",
        "paddingAll": "9px",
        "contents": banner_contents,
    })

    # สถานีทั้งหมด
    body_contents.append({
        "type": "box",
        "layout": "horizontal",
        "margin": "sm",
        "spacing": "sm",
        "contents": [
            {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#F8F9FA",
                "cornerRadius": "8px",
                "paddingAll": "7px",
                "contents": [
                    text_component(
                        str(total_count),
                        size="lg",
                        color="#4E2A84",
                        weight="bold",
                        align="center",
                    ),
                    text_component(
                        "ทั้งหมด",
                        size="xs",
                        color="#716C6B",
                        align="center",
                        margin="xs",
                    ),
                ],
            },
            {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#EAF7EF",
                "cornerRadius": "8px",
                "paddingAll": "7px",
                "contents": [
                    text_component(
                        str(online_total),
                        size="lg",
                        color="#18794E",
                        weight="bold",
                        align="center",
                    ),
                    text_component(
                        "ONLINE",
                        size="xs",
                        color="#18794E",
                        weight="bold",
                        align="center",
                        margin="xs",
                    ),
                ],
            },
            {
                "type": "box",
                "layout": "vertical",
                "flex": 1,
                "backgroundColor": "#FFF5F5",
                "cornerRadius": "8px",
                "paddingAll": "7px",
                "contents": [
                    text_component(
                        str(offline_total),
                        size="lg",
                        color="#C51F35",
                        weight="bold",
                        align="center",
                    ),
                    text_component(
                        "OFFLINE",
                        size="xs",
                        color="#C51F35",
                        weight="bold",
                        align="center",
                        margin="xs",
                    ),
                ],
            },
        ],
    })

    # ตารางประเภท
    body_contents.append(
        text_component(
            "สรุปสถานะสถานีตรวจวัด",
            size="sm",
            color="#30283A",
            weight="bold",
            margin="sm",
        )
    )

    body_contents.append({
        "type": "box",
        "layout": "horizontal",
        "margin": "xs",
        "paddingAll": "6px",
        "backgroundColor": "#F1F3F5",
        "cornerRadius": "6px",
        "contents": [
            text_component(
                "ประเภท",
                size="xs",
                color="#495057",
                weight="bold",
                flex=3,
            ),
            text_component(
                "ทั้งหมด",
                size="xs",
                color="#495057",
                weight="bold",
                align="center",
                flex=1,
            ),
            text_component(
                "ONLINE",
                size="xs",
                color="#18794E",
                weight="bold",
                align="center",
                flex=1,
            ),
            text_component(
                "OFFLINE",
                size="xs",
                color="#C51F35",
                weight="bold",
                align="center",
                flex=1,
            ),
        ],
    })

    for group_name in [
        "AQMs",
        "WQMs",
        "CEMs",
        "ประเภทอื่น",
    ]:
        data = type_stats.get(
            group_name,
            {
                "total": 0,
                "online": 0,
                "offline": 0,
            },
        )

        body_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "xs",
            "paddingAll": "5px",
            "contents": [
                text_component(
                    group_name,
                    size="xs",
                    color="#30283A",
                    flex=3,
                ),
                text_component(
                    str(data["total"]),
                    size="xs",
                    color="#30283A",
                    align="center",
                    flex=1,
                ),
                text_component(
                    str(data["online"]),
                    size="xs",
                    color="#18794E",
                    weight="bold",
                    align="center",
                    flex=1,
                ),
                text_component(
                    str(data["offline"]),
                    size="xs",
                    color="#C51F35",
                    weight="bold",
                    align="center",
                    flex=1,
                ),
            ],
        })

    if has_alert:
        urgent_count, watch_count, follow_count = (
            calculate_severity_levels(
                alert_stations
            )
        )

        body_contents.append({
            "type": "separator",
            "margin": "sm",
        })

        body_contents.append(
            text_component(
                "ระดับการเฝ้าระวัง",
                size="sm",
                color="#30283A",
                weight="bold",
                margin="sm",
            )
        )

        rows = [
            (
                "เกินค่ามาตรฐาน",
                "ตั้งแต่ 3 รายการขึ้นไป",
                urgent_count,
                "#C51F35",
                "#FFF1F3",
                "#E9B6BE",
                HIGH_ICON_URL,
            ),
            (
                "เฝ้าระวัง",
                "2 รายการ",
                watch_count,
                "#E67700",
                "#FFF8E8",
                "#E9D49B",
                WATCH_ICON_URL,
            ),
            (
                "ติดตามสถานการณ์",
                "1 รายการ",
                follow_count,
                "#2B8A3E",
                "#F1F8F3",
                "#BBD8C4",
                FOLLOW_ICON_URL,
            ),
        ]

        for (
            title,
            description,
            count,
            color,
            background,
            border,
            icon_url,
        ) in rows:
            body_contents.append({
                "type": "box",
                "layout": "horizontal",
                "margin": "xs",
                "paddingAll": "6px",
                "backgroundColor": background,
                "borderColor": border,
                "borderWidth": "1px",
                "cornerRadius": "7px",
                    "contents": [
                    image_component(
                        icon_url,
                        size="xs",
                    ),
                    {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "xs",
                        "flex": 1,
                        "contents": [
                            text_component(
                                title,
                                size="xs",
                                color=color,
                                weight="bold",
                            ),
                            text_component(
                                description,
                                size="xs",
                                color="#6C757D",
                                margin="xs",
                            ),
                        ],
                    },
                    text_component(
                        f"{count} สถานี",
                        size="xs",
                        color=color,
                        weight="bold",
                        align="end",
                    ),
                ],
            })

    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "margin": "sm",
        "paddingAll": "7px",
        "backgroundColor": "#F8F9FA",
        "cornerRadius": "7px",
        "contents": [
            text_component(
                "ข้อมูลล่าสุดจาก e-Monitoring",
                size="xs",
                color="#6C757D",
            ),
            text_component(
                report_time_text(),
                size="xs",
                color="#30283A",
                weight="bold",
                margin="xs",
            ),
        ],
    })

    return {
        "type": "bubble",
        "size": "giga",
        "styles": {
            "header": {
                "backgroundColor": "#FFFFFF"
            },
            "body": {
                "backgroundColor": "#FFFFFF"
            },
            "footer": {
                "backgroundColor": "#FFFFFF"
            },
        },
        "header": build_header(
            "สรุปสถานการณ์ e-Monitoring"
        ),
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "7px",
            "paddingStart": "12px",
            "paddingEnd": "12px",
            "contents": body_contents,
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "8px",
            "paddingStart": "12px",
            "paddingEnd": "12px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": "#4E1478",
                    "action": {
                        "type": "uri",
                        "label": "เปิดระบบ GIS",
                        "uri": DASHBOARD_URL,
                    },
                },
            ],
        },
    }


# ============================================================
# Detail bubble
# ============================================================

def build_station_detail_bubble(
    station: dict[str, Any]
) -> dict[str, Any]:

    severity = get_station_severity(station)

    station_type = safe_text(
        station.get("station_type")
    )

    group_name = station_type_group(
        station_type
    )

    station_name = safe_text(
        station.get("station_name")
    )

    estate_name = safe_text(
        station.get("estate_name")
    )

    status = safe_text(
        station.get("status")
    )

    parameter_alarm = full_text(
        station.get("parameter_alarm")
        or station.get("previous_snapshot", {}).get("parameter_alarm")
    )

    comment = full_text(
        station.get("comment")
    )

    latitude = station.get("latitude")
    longitude = station.get("longitude")

    status_upper = status.upper()

    if status_upper == "ONLINE":
        status_color = "#2B8A3E"
        status_background = "#EAF7EF"
    elif status_upper == "OFFLINE":
        status_color = "#C51F35"
        status_background = "#FFF1F3"
    else:
        status_color = "#777777"
        status_background = "#F3F3F3"

    parameter_items = split_alarm_items(
        parameter_alarm
    )

    parameter_contents: list[dict[str, Any]] = []

    for parameter in parameter_items:
        parameter_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "none",
            "contents": [
                text_component(
                    "•",
                    size="xs",
                    color=severity["color"],
                    weight="bold",
                    flex=0,
                ),
                text_component(
                    parameter,
                    size="xs",
                    color=severity["color"],
                    wrap=True,
                    margin="xs",
                    flex=1,
                ),
            ],
        })

    if not parameter_contents:
        parameter_contents.append(
            text_component(
                parameter_alarm,
                size="xs",
                color=severity["color"],
                weight="bold",
            )
        )

    return {
        "type": "bubble",
        "size": "giga",
        "styles": {
            "header": {
                "backgroundColor": "#FFFFFF"
            },
            "body": {
                "backgroundColor": "#FFFFFF"
            },
            "footer": {
                "backgroundColor": "#FFFFFF"
            },
        },

        "header": build_header(
            f"รายละเอียดสถานี {group_name}"
        ),

        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "7px",
            "paddingStart": "12px",
            "paddingEnd": "12px",
            "contents": [

                # ระดับ
                {
                    "type": "box",
                    "layout": "horizontal",
                    "paddingAll": "7px",
                    "backgroundColor": severity["background"],
                    "borderColor": severity["border"],
                    "borderWidth": "1px",
                    "cornerRadius": "8px",
                            "contents": [
                        image_component(
                            severity["icon_url"],
                            size="xs",
                        ),
                        text_component(
                            severity["title"],
                            size="sm",
                            color=severity["color"],
                            weight="bold",
                            margin="sm",
                            flex=1,
                        ),
                        text_component(
                            f"{alarm_count(station)} รายการ",
                            size="xs",
                            color=severity["color"],
                            weight="bold",
                            align="end",
                        ),
                    ],
                },

                text_component(
                    "รายละเอียดสถานี",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm",
                ),

                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "xs",
                    "backgroundColor": "#F8F8FA",
                    "cornerRadius": "8px",
                    "paddingAll": "8px",
                    "contents": [
                        detail_row(
                            "ชื่อสถานี",
                            station_name,
                        ),
                        detail_row(
                            "นิคมอุตสาหกรรม",
                            estate_name,
                        ),
                        detail_row(
                            "สถานะ",
                            status,
                            status_color,
                        ),
                        detail_row(
                            "ประเภท",
                            station_type,
                            "#4E1478",
                        ),
                    ],
                },

                text_component(
                    "ค่าพารามิเตอร์ที่แจ้งเตือน",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="xs",
                ),

                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "none",
                    "paddingAll": "6px",
                    "backgroundColor": severity["background"],
                    "borderColor": severity["border"],
                    "borderWidth": "1px",
                    "cornerRadius": "8px",
                    "contents": parameter_contents,
                },

                text_component(
                    "สาเหตุ / การติดตามผล",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm",
                ),

                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "xs",
                    "paddingAll": "8px",
                    "backgroundColor": "#F8F9FA",
                    "borderColor": "#E1E3E5",
                    "borderWidth": "1px",
                    "cornerRadius": "8px",
                    "contents": [
                        text_component(
                            comment,
                            size="xs",
                            color="#555555",
                            wrap=True,
                        ),
                    ],
                },

                text_component(
                    "ตำแหน่งสถานี",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm",
                ),

                text_component(
                    (
                        f"{latitude:.6f}, "
                        f"{longitude:.6f}"
                    )
                    if (
                        latitude is not None
                        and longitude is not None
                    )
                    else "ไม่พบพิกัดสถานี",
                    size="xs",
                    color="#777777",
                    margin="xs",
                ),
            ],
        },

        # มีปุ่มเดียว
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "9px",
            "paddingStart": "12px",
            "paddingEnd": "12px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": "#4E1478",
                    "action": {
                        "type": "uri",
                        "label": "เปิดตำแหน่งสถานี",
                        "uri": google_maps_url(
                            latitude,
                            longitude,
                        ),
                    },
                },
            ],
        },
    }


# ============================================================
# LINE message builders
# ============================================================

def make_flex_message(
    bubble: dict[str, Any],
    alt_text: str,
) -> dict[str, Any]:

    return {
        "type": "flex",
        "altText": alt_text,
        "contents": bubble,
    }


def make_carousel_message(
    bubbles: list[dict[str, Any]],
    alt_text: str,
) -> dict[str, Any]:

    return {
        "type": "flex",
        "altText": alt_text,
        "contents": {
            "type": "carousel",
            "contents": bubbles,
        },
    }


def json_size_bytes(
    payload: dict[str, Any]
) -> int:

    return len(
        json.dumps(
            payload,
            ensure_ascii=False,
            separators=(",", ":"),
        ).encode("utf-8")
    )


# ============================================================
# Split carousel by actual JSON size
# ============================================================

def build_detail_carousels(
    alert_stations: list[dict[str, Any]]
) -> list[dict[str, Any]]:
    """
    แยกข้อความตามประเภท AQMs, CEMs, WQMs
    ภายในแต่ละประเภทคงการ์ดรายละเอียดสถานีรูปแบบเดิมทั้งหมด
    """

    groups = [
        (
            "AQMs",
            [
                s for s in alert_stations
                if station_type_group(
                    s["station_type"]
                ) == "AQMs"
            ],
        ),
        (
            "WQMs",
            [
                s for s in alert_stations
                if station_type_group(
                    s["station_type"]
                ) == "WQMs"
            ],
        ),
        (
            "CEMs",
            [
                s for s in alert_stations
                if station_type_group(
                    s["station_type"]
                ) == "CEMs"
            ],
        ),
    ]

    messages: list[dict[str, Any]] = []

    for group_name, stations in groups:
        if not stations:
            continue

        current_bubbles: list[dict[str, Any]] = []

        for station in stations:
            bubble = build_station_detail_bubble(station)
            candidate_bubbles = [*current_bubbles, bubble]
            candidate_message = make_carousel_message(
                candidate_bubbles,
                f"การแจ้งเตือนประเภท {group_name}",
            )

            exceeds_limit = (
                len(candidate_bubbles) > MAX_BUBBLES_PER_CAROUSEL
                or json_size_bytes(candidate_message) > MAX_FLEX_BYTES
            )

            if exceeds_limit and current_bubbles:
                messages.append(
                    make_carousel_message(
                        current_bubbles,
                        f"การแจ้งเตือนประเภท {group_name}",
                    )
                )
                current_bubbles = [bubble]
            else:
                current_bubbles = candidate_bubbles

        if current_bubbles:
            messages.append(
                make_carousel_message(
                    current_bubbles,
                    f"การแจ้งเตือนประเภท {group_name}",
                )
            )

        print(
            f"สร้างข้อความประเภท {group_name}: "
            f"{len(stations)} สถานี "
            "โดยคงรูปแบบการ์ดเดิม"
        )

    return messages


# ============================================================
# Zone-based LINE routing
# ============================================================

LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push"

ZONE_GROUP_ENV = {
    "สายปฏิบัติการ 1": "LINE_GROUP_ID_DEMO_01",
    "สายปฏิบัติการ 2": "LINE_GROUP_ID_DEMO_02",
    "สายปฏิบัติการ 3": "LINE_GROUP_ID_DEMO_03",
}


def normalize_operation_zone(value: Any) -> str:
    text = " ".join(safe_text(value, "").split())
    aliases = {
        "สายปฏิบัติการ1": "สายปฏิบัติการ 1",
        "สายปฏิบัติการ2": "สายปฏิบัติการ 2",
        "สายปฏิบัติการ3": "สายปฏิบัติการ 3",
    }
    return aliases.get(text, text)


def zone_routing_enabled() -> bool:
    return os.getenv(
        "LINE_ZONE_ROUTING_ENABLED",
        "",
    ).strip().lower() in {
        "1",
        "true",
        "yes",
        "on",
    }


def event_zone(event: dict[str, Any]) -> str:
    return normalize_operation_zone(
        event.get("zone")
    )


def build_zone_event_texts(
    zone: str,
    events: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """Flex แจ้งเตือนแบบกระชับสำหรับเจ้าหน้าที่ประจำนิคมฯ"""
    visible = events[:5]
    remaining = max(0, len(events) - len(visible))
    station_count = len({
        station_key(event)
        for event in events
    })
    parameter_count = sum(
        alarm_count(event)
        for event in events
    )
    recovered_count = sum(
        1
        for event in events
        if event.get("event_type") in {
            "RECOVERED",
            "ONLINE",
        }
    )
    active_count = max(
        0,
        station_count - recovered_count,
    )

    def metric(
        value: int,
        label: str,
        background: str,
        color: str,
    ) -> dict[str, Any]:
        return {
            "type": "box",
            "layout": "vertical",
            "flex": 1,
            "paddingAll": "8px",
            "backgroundColor": background,
            "cornerRadius": "9px",
            "contents": [
                {
                    "type": "text",
                    "text": str(value),
                    "size": "xl",
                    "weight": "bold",
                    "color": color,
                    "align": "center",
                },
                {
                    "type": "text",
                    "text": label,
                    "size": "xxs",
                    "color": color,
                    "align": "center",
                    "wrap": True,
                    "margin": "xs",
                },
            ],
        }

    rows: list[dict[str, Any]] = []

    for event in visible:
        event_type = safe_text(event.get("event_type"), "")
        previous_snapshot = event.get("previous_snapshot", {})
        previous_alarm_text = full_text(
            previous_snapshot.get("parameter_alarm")
            if isinstance(previous_snapshot, dict)
            else "",
            "",
        )
        parameter_text = full_text(
            event.get("parameter_alarm"),
            (
                f"ค่ากลับสู่เกณฑ์ (เดิม: {previous_alarm_text})"
                if event_type == "RECOVERED" and previous_alarm_text
                else event_title(event)
            ),
        )
        urgency = {
            "SEVERITY_UP": "เร่งตรวจสอบ",
            "NEW_ALARM": "เร่งตรวจสอบ",
            "OFFLINE": "เฝ้าระวัง",
            "ALARM_CHANGED": "ติดตามการเปลี่ยนแปลง",
            "SEVERITY_DOWN": "ติดตามสถานการณ์",
            "ONLINE": "กลับสู่การให้บริการ",
            "RECOVERED": "กลับสู่ภาวะปกติ",
        }.get(event_type, "ติดตามสถานการณ์")
        station_group = station_type_group(
            safe_text(event.get("station_type"), "")
        )
        comment_text = full_text(
            event.get("comment"),
            "",
        )

        detail_contents: list[dict[str, Any]] = [
            {
                "type": "text",
                "text": safe_text(
                    event.get("estate_name"),
                    "ไม่พบชื่อนิคมอุตสาหกรรม",
                ),
                "size": "xxs",
                "weight": "bold",
                "color": "#5D2A7A",
                "wrap": True,
            },
            {
                "type": "text",
                "text": safe_text(
                    event.get("station_name")
                ),
                "size": "sm",
                "weight": "bold",
                "color": "#000000",
                "wrap": True,
                "margin": "xs",
            },
            {
                "type": "text",
                "text": f"ระดับ: {urgency}",
                "size": "xs",
                "weight": "bold",
                "color": event_color(event),
                "wrap": True,
                "margin": "xs",
            },
            {
                "type": "text",
                "text": f"รายละเอียด: {parameter_text}",
                "size": "xs",
                "weight": "bold",
                "color": event_color(event),
                "wrap": True,
                "margin": "xs",
            },
            {
                "type": "text",
                "text": f"ประเภทระบบ: {station_group}",
                "size": "xxs",
                "color": "#0871B9",
                "wrap": True,
                "margin": "xs",
            },
            {
                "type": "text",
                "text": (
                    f"{event_title(event)} • "
                    f"{safe_text(event.get('last_update'))}"
                ),
                "size": "xxs",
                "color": "#6F7880",
                "wrap": True,
                "margin": "xs",
            },
        ]

        if comment_text:
            detail_contents.append({
                "type": "text",
                "text": f"หมายเหตุ: {comment_text}",
                "size": "xxs",
                "color": "#555555",
                "wrap": True,
                "margin": "xs",
            })

        rows.append({
            "type": "box",
            "layout": "vertical",
            "margin": "sm",
            "paddingAll": "9px",
            "backgroundColor": "#F8F9FA",
            "cornerRadius": "8px",
            "contents": detail_contents,
        })

    if remaining:
        rows.append({
            "type": "text",
            "text": (
                f"ยังมีอีก {remaining} สถานี "
                "กรุณาเปิด Dashboard เพื่อตรวจสอบ"
            ),
            "size": "xs",
            "color": "#5D2A7A",
            "align": "center",
            "wrap": True,
            "margin": "md",
        })

    bubble = {
        "type": "bubble",
        "size": "giga",
        "header": {
            "type": "box",
            "layout": "horizontal",
            "paddingAll": "12px",
            "backgroundColor": "#FFFFFF",
            "spacing": "md",
            "contents": [
                {
                    "type": "image",
                    "url": TH_VERTICAL_LOGO_URL,
                    "size": "sm",
                    "aspectMode": "fit",
                    "aspectRatio": "4:5",
                    "flex": 0,
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "contents": [
                        {
                            "type": "text",
                            "text": "แจ้งเตือน e-Monitoring",
                            "size": "lg",
                            "weight": "bold",
                            "color": "#000000",
                            "wrap": True,
                        },
                        {
                            "type": "text",
                            "text": zone,
                            "size": "sm",
                            "weight": "bold",
                            "color": "#000000",
                            "wrap": True,
                            "margin": "xs",
                        },
                        {
                            "type": "text",
                            "text": (
                                "[DEMO] ข้อมูลตัวอย่าง • "
                                "ไม่ใช่เหตุการณ์จริง"
                            ),
                            "size": "xxs",
                            "color": "#777777",
                            "wrap": True,
                            "margin": "xs",
                        },
                    ],
                },
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "10px",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "paddingAll": "10px",
                    "backgroundColor": "#FDECEF",
                    "cornerRadius": "10px",
                    "contents": [
                        {
                            "type": "text",
                            "text": (
                                f"พบเหตุการณ์ที่ต้องตรวจสอบ "
                                f"{len(events)} รายการ"
                            ),
                            "size": "md",
                            "weight": "bold",
                            "color": "#E63946",
                            "align": "center",
                            "wrap": True,
                        },
                        {
                            "type": "text",
                            "text": (
                                "แจ้งเฉพาะสถานีในพื้นที่รับผิดชอบ"
                            ),
                            "size": "xxs",
                            "color": "#8D3C49",
                            "align": "center",
                            "wrap": True,
                            "margin": "xs",
                        },
                    ],
                },
                {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "xs",
                    "margin": "sm",
                    "contents": [
                        metric(
                            active_count,
                            "สถานีที่ต้องตรวจสอบ",
                            "#FFF6E5",
                            "#E67700",
                        ),
                        metric(
                            parameter_count,
                            "พารามิเตอร์แจ้งเตือน",
                            "#FDECEF",
                            "#E63946",
                        ),
                        metric(
                            recovered_count,
                            "กลับสู่ภาวะปกติ",
                            "#EEF7F0",
                            "#2F8F46",
                        ),
                    ],
                },
                {
                    "type": "text",
                    "text": "รายละเอียดสถานี",
                    "size": "sm",
                    "weight": "bold",
                    "color": "#000000",
                    "margin": "md",
                },
                *rows,
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "paddingAll": "9px",
                    "backgroundColor": "#E5F2FB",
                    "cornerRadius": "8px",
                    "contents": [
                        {
                            "type": "text",
                            "text": "การดำเนินการ",
                            "size": "xs",
                            "weight": "bold",
                            "color": "#0871B9",
                        },
                        {
                            "type": "text",
                            "text": (
                                "โปรดตรวจสอบข้อมูลล่าสุด และประสานสถานี "
                                "หรือผู้ประกอบการที่เกี่ยวข้อง"
                            ),
                            "size": "xxs",
                            "color": "#355B73",
                            "wrap": True,
                            "margin": "xs",
                        },
                    ],
                },
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingTop": "3px",
            "paddingBottom": "12px",
            "paddingStart": "10px",
            "paddingEnd": "10px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "height": "sm",
                    "color": "#5D2A7A",
                    "action": {
                        "type": "uri",
                        "label": "เปิด Dashboard เพื่อตรวจสอบ",
                        "uri": DASHBOARD_URL,
                    },
                },
            ],
        },
        "styles": {
            "header": {
                "backgroundColor": "#FFFFFF",
            },
            "body": {
                "backgroundColor": "#FFFFFF",
            },
            "footer": {
                "backgroundColor": "#FFFFFF",
            },
        },
    }

    message = make_flex_message(
        bubble,
        (
            f"{zone}: พบ {len(events)} "
            "เหตุการณ์ที่ต้องตรวจสอบ"
        ),
    )
    if json_size_bytes(message) > MAX_FLEX_BYTES:
        raise RuntimeError(
            f"Flex Card ของ {zone} มีขนาดเกินกำหนด"
        )
    return [message]

def push_line_messages(
    group_id: str,
    messages: list[dict[str, Any]],
) -> bool:
    token = os.getenv(
        "LINE_CHANNEL_ACCESS_TOKEN",
        "",
    ).strip()

    if not token:
        print("ERROR: ไม่พบ LINE_CHANNEL_ACCESS_TOKEN")
        return False

    all_success = True

    for start in range(
        0,
        len(messages),
        MAX_MESSAGES_PER_REQUEST,
    ):
        batch = messages[
            start:start + MAX_MESSAGES_PER_REQUEST
        ]

        payload = json.dumps(
            {
                "to": group_id,
                "messages": batch,
            },
            ensure_ascii=False,
            separators=(",", ":"),
        ).encode("utf-8")

        request = urllib.request.Request(
            LINE_PUSH_URL,
            data=payload,
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
            },
            method="POST",
        )

        try:
            with urllib.request.urlopen(
                request,
                timeout=60,
            ) as response:
                print(
                    "ส่ง LINE Push สำเร็จ "
                    f"HTTP {response.status}"
                )
        except urllib.error.HTTPError as error:
            response_text = (
                error.read()
                .decode("utf-8", errors="replace")
            )
            print(
                "ERROR: LINE Push API "
                f"HTTP {error.code}: {response_text}"
            )
            all_success = False
        except urllib.error.URLError as error:
            print(
                "ERROR: เชื่อมต่อ LINE ไม่สำเร็จ: "
                f"{error.reason}"
            )
            all_success = False

    return all_success


def send_zone_event_reports(
    events: list[dict[str, Any]],
) -> bool:
    """แยกเหตุการณ์ตาม Zone และ Push เฉพาะกลุ่มที่เกี่ยวข้อง"""
    grouped: dict[str, list[dict[str, Any]]] = {}

    for event in events:
        zone = event_zone(event)

        if zone not in ZONE_GROUP_ENV:
            print(
                "ERROR: ไม่สามารถจับคู่ Zone ได้ — "
                f"สถานี={safe_text(event.get('station_name'))}, "
                f"Zone={zone or '-'}"
            )
            return False

        grouped.setdefault(zone, []).append(event)

    all_success = True

    for zone, zone_events in grouped.items():
        env_name = ZONE_GROUP_ENV[zone]
        group_id = os.getenv(env_name, "").strip()

        if not group_id:
            print(
                f"ERROR: ไม่พบ GitHub Secret {env_name}"
            )
            all_success = False
            continue

        print(
            f"{zone}: ส่ง {len(zone_events)} เหตุการณ์ "
            f"ไปยัง {env_name}"
        )

        messages = build_zone_event_texts(
            zone,
            zone_events,
        )

        success = push_line_messages(
            group_id,
            messages,
        )
        all_success = all_success and success

    return all_success
