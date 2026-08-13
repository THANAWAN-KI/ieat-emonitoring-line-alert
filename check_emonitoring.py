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

LINE_BROADCAST_URL = (
    "https://api.line.me/v2/bot/message/broadcast"
)

DASHBOARD_URL = (
    "https://www.arcgis.com/apps/dashboards/"
    "576c71d01cc5403cad90ee330fd67b6e"
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

        # ข้อมูลเต็ม
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
        "station_type":
            safe_text(station.get("station_type")),
        "status":
            safe_text(station.get("status")).upper(),
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

            # รอบแรก: แจ้งเฉพาะสถานีที่มี Alarm
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
            previous_status == "ONLINE"
            and current_status == "OFFLINE"
        ):

            events.append(
                build_event_station(
                    station,
                    "OFFLINE",
                    "สถานีเปลี่ยนสถานะจาก ONLINE เป็น OFFLINE",
                    previous,
                )
            )

        # ----------------------------------------------------
        # OFFLINE -> ONLINE
        # ----------------------------------------------------

        elif (
            previous_status == "OFFLINE"
            and current_status == "ONLINE"
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
# Event summary bubble
# ============================================================

def build_event_summary_bubble(
    events: list[dict[str, Any]]
) -> dict[str, Any]:

    sorted_events = sorted(
        events,
        key=lambda event:
            event_priority(
                event.get(
                    "event_type",
                    ""
                )
            )
    )

    new_alarm_count = sum(
        1 for e in events
        if e.get("event_type")
        == "NEW_ALARM"
    )

    severity_up_count = sum(
        1 for e in events
        if e.get("event_type")
        == "SEVERITY_UP"
    )

    offline_count = sum(
        1 for e in events
        if e.get("event_type")
        == "OFFLINE"
    )

    recovered_count = sum(
        1 for e in events
        if e.get("event_type")
        == "RECOVERED"
    )

    online_count = sum(
        1 for e in events
        if e.get("event_type")
        == "ONLINE"
    )

    changed_count = sum(
        1 for e in events
        if e.get("event_type")
        == "ALARM_CHANGED"
    )

    body_contents: list[dict[str, Any]] = [

        {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "9px",
            "backgroundColor": "#F8F4FB",
            "borderColor": "#DCCBEA",
            "borderWidth": "1px",
            "cornerRadius": "9px",
            "contents": [
                text_component(
                    "มีการเปลี่ยนแปลงที่ต้องติดตาม",
                    size="sm",
                    color="#4E1478",
                    weight="bold",
                    align="center",
                ),
                text_component(
                    (
                        f"{len(events)} เหตุการณ์ "
                        "จากรอบตรวจสอบล่าสุด"
                    ),
                    size="xs",
                    color="#777777",
                    margin="xs",
                    align="center",
                ),
            ],
        },

        {
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "spacing": "xs",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFF1F3",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(
                                new_alarm_count
                                + severity_up_count
                            ),
                            size="lg",
                            color="#C51F35",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "Alarm ใหม่/รุนแรงขึ้น",
                            size="xs",
                            color="#777777",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#FFF8E8",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(
                                offline_count
                                + changed_count
                            ),
                            size="lg",
                            color="#E67700",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "เฝ้าติดตาม",
                            size="xs",
                            color="#777777",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "flex": 1,
                    "backgroundColor": "#F1F8F3",
                    "cornerRadius": "7px",
                    "paddingAll": "6px",
                    "contents": [
                        text_component(
                            str(
                                recovered_count
                                + online_count
                            ),
                            size="lg",
                            color="#2B8A3E",
                            weight="bold",
                            align="center",
                        ),
                        text_component(
                            "กลับปกติ",
                            size="xs",
                            color="#777777",
                            align="center",
                            margin="xs",
                        ),
                    ],
                },
            ],
        },

        text_component(
            "เหตุการณ์",
            size="sm",
            color="#30283A",
            weight="bold",
            margin="sm",
        ),
    ]

    # แสดงรายการเหตุการณ์แบบสั้น
    # เพื่อไม่ให้ Summary ใหญ่เกินไป
    for event in sorted_events[:12]:

        title = event_title(event)
        color = event_color(event)

        body_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "xs",
            "paddingAll": "6px",
            "backgroundColor": "#F8F9FA",
            "cornerRadius": "7px",
            "alignItems": "center",
            "contents": [
                image_component(
                    event_icon_url(event),
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
                            safe_text(
                                event.get(
                                    "station_name"
                                )
                            ),
                            size="xs",
                            color="#30283A",
                            margin="xs",
                            wrap=True,
                        ),
                    ],
                },
            ],
        })

    if len(sorted_events) > 12:
        body_contents.append(
            text_component(
                (
                    f"และอีก "
                    f"{len(sorted_events) - 12} "
                    "เหตุการณ์ ดูรายละเอียดใน Dashboard"
                ),
                size="xs",
                color="#777777",
                margin="xs",
                align="center",
            )
        )

    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "margin": "sm",
        "paddingAll": "7px",
        "backgroundColor": "#F8F9FA",
        "cornerRadius": "7px",
        "contents": [
            text_component(
                "ตรวจสอบล่าสุด",
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
            "แจ้งเตือนเฉพาะเหตุการณ์"
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
                        "label": "เปิด Dashboard",
                        "uri": DASHBOARD_URL,
                    },
                },
            ],
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
                "alignItems": "center",
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
                "alignItems": "center",
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
            "margin": "xs",
            "contents": [
                text_component(
                    "•",
                    size="xs",
                    color=severity["color"],
                    weight="bold",
                ),
                text_component(
                    parameter,
                    size="xs",
                    color=severity["color"],
                    weight="bold",
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
                    "alignItems": "center",
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
                    margin="sm",
                ),

                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "xs",
                    "paddingAll": "8px",
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

    # แยกประเภทก่อน
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
        (
            "ประเภทอื่น",
            [
                s for s in alert_stations
                if station_type_group(
                    s["station_type"]
                ) == "ประเภทอื่น"
            ],
        ),
    ]

    messages: list[dict[str, Any]] = []

    for group_name, stations in groups:

        if not stations:
            continue

        current_bubbles: list[dict[str, Any]] = []

        for station in stations:

            bubble = build_station_detail_bubble(
                station
            )

            # ทดสอบ bubble เดี่ยว
            single_message = make_carousel_message(
                [bubble],
                f"รายละเอียดสถานี {group_name}",
            )

            single_size = json_size_bytes(
                single_message
            )

            if single_size > MAX_FLEX_BYTES:
                raise RuntimeError(
                    "รายละเอียดสถานีเดี่ยวมีขนาดเกิน "
                    f"{MAX_FLEX_BYTES / 1024:.0f} KB: "
                    f"{station['station_name']} "
                    f"({single_size / 1024:.1f} KB)"
                )

            candidate = current_bubbles + [
                bubble
            ]

            candidate_message = make_carousel_message(
                candidate,
                f"รายละเอียดสถานี {group_name}",
            )

            candidate_size = json_size_bytes(
                candidate_message
            )

            # ถ้าเกิน หรือถึง 12 bubbles
            if (
                candidate_size > MAX_FLEX_BYTES
                or len(candidate)
                > MAX_BUBBLES_PER_CAROUSEL
            ):

                if current_bubbles:
                    final_message = make_carousel_message(
                        current_bubbles,
                        f"รายละเอียดสถานี {group_name}",
                    )

                    final_size = json_size_bytes(
                        final_message
                    )

                    messages.append(
                        final_message
                    )

                    print(
                        f"สร้าง Carousel {group_name}: "
                        f"{len(current_bubbles)} หน้า / "
                        f"{final_size / 1024:.1f} KB"
                    )

                current_bubbles = [
                    bubble
                ]

            else:
                current_bubbles = candidate

        if current_bubbles:

            final_message = make_carousel_message(
                current_bubbles,
                f"รายละเอียดสถานี {group_name}",
            )

            final_size = json_size_bytes(
                final_message
            )

            messages.append(
                final_message
            )

            print(
                f"สร้าง Carousel {group_name}: "
                f"{len(current_bubbles)} หน้า / "
                f"{final_size / 1024:.1f} KB"
            )

    return messages


# ============================================================
# LINE Broadcast
# ============================================================

def send_line_messages(
    messages: list[dict[str, Any]]
) -> bool:

    token = os.getenv(
        "LINE_CHANNEL_ACCESS_TOKEN",
        ""
    ).strip()

    if not token:
        print(
            "ERROR: ไม่พบ "
            "LINE_CHANNEL_ACCESS_TOKEN"
        )
        return False

    if not messages:
        print(
            "ไม่มีข้อความสำหรับส่ง LINE"
        )
        return False

    all_success = True

    # Broadcast API ส่งได้สูงสุด 5 messages/request
    for start in range(
        0,
        len(messages),
        MAX_MESSAGES_PER_REQUEST
    ):

        batch = messages[
            start:
            start + MAX_MESSAGES_PER_REQUEST
        ]

        request_payload = {
            "messages": batch
        }

        payload = json.dumps(
            request_payload,
            ensure_ascii=False,
            separators=(",", ":"),
        ).encode("utf-8")

        payload_size = len(payload)

        print(
            f"กำลังส่ง LINE batch "
            f"{start // MAX_MESSAGES_PER_REQUEST + 1}: "
            f"{len(batch)} messages / "
            f"{payload_size / 1024:.1f} KB"
        )

        request = urllib.request.Request(
            LINE_BROADCAST_URL,
            data=payload,
            headers={
                "Authorization":
                    f"Bearer {token}",
                "Content-Type":
                    "application/json",
            },
            method="POST",
        )

        try:
            with urllib.request.urlopen(
                request,
                timeout=60
            ) as response:

                print(
                    "ส่ง LINE Broadcast สำเร็จ "
                    f"HTTP {response.status}"
                )

        except urllib.error.HTTPError as error:

            response_text = (
                error.read()
                .decode(
                    "utf-8",
                    errors="replace"
                )
            )

            print(
                "ERROR: LINE Broadcast API "
                f"HTTP {error.code}: "
                f"{response_text}"
            )

            all_success = False

        except urllib.error.URLError as error:

            print(
                "ERROR: เชื่อมต่อ LINE ไม่สำเร็จ: "
                f"{error.reason}"
            )

            all_success = False

    return all_success


# ============================================================
# Send report
# ============================================================

def send_event_report(
    events: list[dict[str, Any]]
) -> bool:
    """
    ส่ง LINE เฉพาะเมื่อมีเหตุการณ์เปลี่ยนแปลง
    ไม่มีเหตุการณ์ = ไม่ส่ง LINE เลย
    """

    if not events:
        print(
            "ไม่พบการเปลี่ยนแปลงที่ต้องแจ้ง LINE"
        )
        print(
            "ประหยัดโควตา: 0 ข้อความ"
        )
        return True

    messages: list[dict[str, Any]] = []

    # Summary 1 message
    summary_bubble = (
        build_event_summary_bubble(events)
    )

    summary_message = make_flex_message(
        summary_bubble,
        (
            "IEAT e-Monitoring: "
            f"พบการเปลี่ยนแปลง {len(events)} เหตุการณ์"
        ),
    )

    summary_size = json_size_bytes(
        summary_message
    )

    if summary_size > MAX_FLEX_BYTES:
        raise RuntimeError(
            "Event Summary มีขนาดเกิน "
            f"{MAX_FLEX_BYTES / 1024:.0f} KB"
        )

    messages.append(
        summary_message
    )

    # Detail เฉพาะสถานีที่มีเหตุการณ์
    # ไม่ส่งสถานี Alarm เดิมที่ไม่มีการเปลี่ยนแปลง
    detail_stations = [
        event
        for event in events
        if event.get(
            "event_type"
        ) != "RECOVERED"
        or event.get(
            "previous_snapshot"
        )
    ]

    detail_messages = (
        build_detail_carousels(
            detail_stations
        )
        if detail_stations
        else []
    )

    messages.extend(
        detail_messages
    )

    print(
        f"เหตุการณ์ที่ต้องแจ้ง: "
        f"{len(events)}"
    )

    print(
        f"LINE messages ที่จะส่ง: "
        f"{len(messages)}"
    )

    success = send_line_messages(
        messages
    )

    if success:
        print(
            "ส่ง LINE สำเร็จ "
            "และสามารถบันทึกสถานะรอบนี้ได้"
        )
    else:
        print(
            "ส่ง LINE ไม่สำเร็จ "
            "จะยังไม่บันทึก state ใหม่ "
            "เพื่อให้รอบถัดไป retry"
        )

    return success


# ============================================================
# Main
# ============================================================

def main() -> int:

    # ป้องกัน GitHub Actions เริ่มงานล่าช้าจนส่ง LINE นอกเวลาที่กำหนด
    # อนุญาตเฉพาะ 08:30-16:30 น. ตามเวลาประเทศไทย
    current_time = now_thailand()
    current_minutes = current_time.hour * 60 + current_time.minute
    start_minutes = 8 * 60 + 30
    end_minutes = 16 * 60 + 30

    if not start_minutes <= current_minutes <= end_minutes:
        print("=" * 72)
        print(
            "ยกเลิกการทำงาน: อยู่นอกช่วงเวลา "
            "08:30-16:30 น. ตามเวลาประเทศไทย"
        )
        print(
            "เวลาประเทศไทยปัจจุบัน: "
            f"{thai_datetime_text(current_time)}"
        )
        print("ไม่มีการดาวน์โหลดข้อมูล ไม่มีการส่ง LINE และไม่บันทึก state")
        print("=" * 72)
        return 0

    print("=" * 72)
    print(
        "IEAT e-Monitoring LINE Alert "
        "v5 - Event Based / Quota Saver"
    )
    print("=" * 72)

    print(
        "เวลาประเทศไทย: "
        f"{report_time_text()}"
    )

    print(
        "กำลังดาวน์โหลดข้อมูล e-Monitoring..."
    )

    if ASSET_BASE_URL:
        print(
            "Asset URL: "
            f"{ASSET_BASE_URL}"
        )
    else:
        print(
            "WARNING: ไม่พบ Asset URL"
        )

    try:
        payload = download_station_data()
    except RuntimeError as error:
        print(
            f"ERROR: {error}"
        )
        return 1

    features = get_features(payload)

    all_stations = prepare_stations(
        features
    )

    alert_stations = filter_alert_features(
        features
    )

    type_stats = calculate_type_stats(
        all_stations
    )

    total_count = len(
        all_stations
    )

    online_total = sum(
        v["online"]
        for v in type_stats.values()
    )

    offline_total = sum(
        v["offline"]
        for v in type_stats.values()
    )

    print(
        f"จำนวนสถานีทั้งหมด: "
        f"{total_count}"
    )

    print(
        f"ONLINE ทั้งหมด: "
        f"{online_total}"
    )

    print(
        f"OFFLINE ทั้งหมด: "
        f"{offline_total}"
    )

    print(
        "สถานีที่มี ParameterAlram: "
        f"{len(alert_stations)}"
    )

    # --------------------------------------------------------
    # State comparison
    # --------------------------------------------------------

    previous_state = load_alert_state()

    print(
        "State เดิมมีสถานี: "
        f"{len(previous_state.get('stations', {}))}"
    )

    events = detect_notification_events(
        previous_state,
        all_stations,
    )

    # --------------------------------------------------------
    # Debug events
    # --------------------------------------------------------

    if events:

        print(
            f"พบเหตุการณ์ที่ต้องแจ้ง: "
            f"{len(events)}"
        )

        for event in sorted(
            events,
            key=lambda item:
                event_priority(
                    item.get(
                        "event_type",
                        ""
                    )
                )
        ):

            print("-" * 60)

            print(
                "Event:",
                event.get(
                    "event_type"
                )
            )

            print(
                "สถานี:",
                event.get(
                    "station_name"
                )
            )

            print(
                "เหตุผล:",
                event.get(
                    "event_reason"
                )
            )

            print(
                "ParameterAlram:",
                event.get(
                    "parameter_alarm"
                )
            )

            print(
                "Comment:",
                event.get(
                    "comment"
                )
            )

    else:

        print(
            "ไม่พบเหตุการณ์ใหม่หรือการเปลี่ยนแปลง"
        )

    # --------------------------------------------------------
    # Dashboard status:
    # อัปเดตทุกวัน ไม่กินโควตา LINE
    # --------------------------------------------------------

    write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    # --------------------------------------------------------
    # LINE:
    # ส่งเฉพาะเมื่อมี event
    # --------------------------------------------------------

    if not events:

        # เมื่อไม่มี event เราสามารถบันทึก state ได้ทันที
        # เพื่อให้วันต่อไปเปรียบเทียบกับข้อมูลล่าสุด
        save_alert_state(
            all_stations
        )

        print(
            "Dashboard อัปเดตแล้ว"
        )

        print(
            "LINE: ไม่ส่ง "
            "(ไม่มีการเปลี่ยนแปลง)"
        )

        print(
            "โควตารอบนี้: 0 ข้อความ"
        )

        print("=" * 72)

        return 0

    try:

        success = send_event_report(
            events
        )

    except RuntimeError as error:

        print(
            f"ERROR: {error}"
        )

        return 1

    if not success:

        print(
            "ERROR: ส่ง LINE ไม่สำเร็จ"
        )

        # ไม่ save state เพื่อให้ retry รอบถัดไป
        return 1

    # สำคัญ:
    # save state หลัง LINE สำเร็จเท่านั้น
    save_alert_state(
        all_stations
    )

    print(
        "บันทึก alert_state.json แล้ว"
    )

    print(
        "Dashboard อัปเดตแล้ว"
    )

    print("=" * 72)
    print(
        "ทำงานสำเร็จ: "
        "Dashboard update + Event notification"
    )
    print("=" * 72)

    return 0


if __name__ == "__main__":
    sys.exit(main())
