import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


# ============================================================
# ตั้งค่าระบบ
# ============================================================

DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

LINE_BROADCAST_URL = "https://api.line.me/v2/bot/message/broadcast"

DASHBOARD_URL = (
    "https://www.arcgis.com/apps/dashboards/"
    "576c71d01cc5403cad90ee330fd67b6e"
)

THAI_TZ = ZoneInfo("Asia/Bangkok")
STATUS_FILE = Path("docs/status.json")

MAX_STATIONS_PER_CAROUSEL = 4
MAX_ALARM_TEXT_CHARS = 350


# ============================================================
# ฟังก์ชันวันและเวลา
# ============================================================

def now_thailand() -> datetime:
    return datetime.now(THAI_TZ)


def thai_datetime_text(value: datetime) -> str:
    thai_months = [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
    ]

    return (
        f"{value.day} {thai_months[value.month - 1]} "
        f"{value.year + 543} เวลา {value:%H:%M} น."
    )


def report_time_text() -> str:
    return thai_datetime_text(now_thailand())


def next_report_time_text() -> str:
    current_time = now_thailand()

    next_time = current_time.replace(
        minute=17,
        second=0,
        microsecond=0
    )

    if current_time >= next_time:
        next_time += timedelta(hours=1)

    return thai_datetime_text(next_time)


# ============================================================
# ฟังก์ชันจัดการข้อมูล
# ============================================================

def safe_text(
    value: Any,
    default: str = "-"
) -> str:

    if value is None:
        return default

    text = str(value).strip()

    if text.lower() in {
        "",
        "-",
        "none",
        "null",
        "nan",
        "n/a"
    }:
        return default

    return text


def compact_text(
    value: Any,
    limit: int = MAX_ALARM_TEXT_CHARS
) -> str:

    text = safe_text(value, "")

    text = re.sub(
        r"\s+",
        " ",
        text
    ).strip()

    if len(text) > limit:
        return text[:limit - 3] + "..."

    return text


def is_online(
    properties: dict[str, Any]
) -> bool:

    return (
        safe_text(
            properties.get("Status"),
            ""
        ).upper()
        == "ONLINE"
    )


def has_alarm(
    properties: dict[str, Any]
) -> bool:

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
        "n/a"
    }


def valid_station(
    properties: dict[str, Any]
) -> bool:

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


def get_features(
    payload: Any
) -> list[dict[str, Any]]:

    if isinstance(payload, dict):

        features = payload.get(
            "features",
            []
        )

        return (
            features
            if isinstance(features, list)
            else []
        )

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

    return (
        properties
        if isinstance(properties, dict)
        else {}
    )


def get_coordinates(
    feature: dict[str, Any]
) -> tuple[float | None, float | None]:

    geometry = feature.get(
        "geometry",
        {}
    )

    if not isinstance(
        geometry,
        dict
    ):
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
            float(coordinates[1])
        )

    except (
        TypeError,
        ValueError
    ):

        return None, None


# ============================================================
# ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_station_data() -> Any:

    request = urllib.request.Request(

        DATA_URL,

        headers={
            "User-Agent":
                "IEAT-eMonitoring-LINE-Alert/2.0",

            "Accept":
                "application/json",

            "Cache-Control":
                "no-cache",

            "Pragma":
                "no-cache",
        },

        method="GET"
    )

    try:

        with urllib.request.urlopen(
            request,
            timeout=60
        ) as response:

            raw_data = (
                response
                .read()
                .decode("utf-8-sig")
            )

            return json.loads(
                raw_data
            )

    except urllib.error.HTTPError as error:

        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ "
            f"HTTP {error.code}: {error.reason}"
        ) from error

    except urllib.error.URLError as error:

        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อแหล่งข้อมูล "
            f"e-Monitoring: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:

        raise RuntimeError(
            "ข้อมูลจาก e-Monitoring "
            f"ไม่ใช่ JSON ที่ถูกต้อง: {error}"
        ) from error


# ============================================================
# เตรียมข้อมูลสถานี
# ============================================================

def station_type_group(
    station_type: str
) -> str:

    normalized = station_type.upper()

    if "AQM" in normalized:
        return "AQMs"

    if "WQM" in normalized:
        return "WQMs"

    if "CEM" in normalized:
        return "CEMs"

    return "ประเภทอื่น"


def create_station_record(
    feature: dict[str, Any]
) -> dict[str, Any]:

    properties = get_properties(
        feature
    )

    longitude, latitude = get_coordinates(
        feature
    )

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

        "parameter_alarm": compact_text(
            properties.get("ParameterAlram")
        ),

        "longitude": longitude,

        "latitude": latitude,
    }


def prepare_stations(
    features: list[dict[str, Any]]
) -> list[dict[str, Any]]:

    stations = []

    for feature in features:

        if not isinstance(
            feature,
            dict
        ):
            continue

        properties = get_properties(
            feature
        )

        if valid_station(
            properties
        ):

            stations.append(
                create_station_record(
                    feature
                )
            )

    return stations


def filter_alert_features(
    features: list[dict[str, Any]]
) -> list[dict[str, Any]]:

    alert_stations = []

    for feature in features:

        if not isinstance(
            feature,
            dict
        ):
            continue

        properties = get_properties(
            feature
        )

        if not valid_station(
            properties
        ):
            continue

        if not is_online(
            properties
        ):
            continue

        if not has_alarm(
            properties
        ):
            continue

        alert_stations.append(
            create_station_record(
                feature
            )
        )

    return alert_stations


def calculate_type_stats(
    all_stations: list[dict[str, Any]]
) -> dict[str, dict[str, int]]:

    stats = {

        "AQMs": {
            "total": 0,
            "online": 0,
            "offline": 0
        },

        "WQMs": {
            "total": 0,
            "online": 0,
            "offline": 0
        },

        "CEMs": {
            "total": 0,
            "online": 0,
            "offline": 0
        },

        "ประเภทอื่น": {
            "total": 0,
            "online": 0,
            "offline": 0
        },
    }

    for st in all_stations:

        group = station_type_group(
            st["station_type"]
        )

        if group not in stats:
            group = "ประเภทอื่น"

        stats[group]["total"] += 1

        if (
            st["status"].upper()
            == "ONLINE"
        ):

            stats[group]["online"] += 1

        else:

            stats[group]["offline"] += 1

    return stats


def extract_unique_parameters(
    alert_stations: list[dict[str, Any]]
) -> str:

    params = set()

    for st in alert_stations:

        alarm_str = st[
            "parameter_alarm"
        ]

        if (
            not alarm_str
            or alarm_str == "-"
        ):
            continue

        parts = re.split(
            r"[,:]",
            alarm_str
        )

        for p in parts:

            clean_p = p.strip()

            if clean_p:

                sub_words = (
                    clean_p.split()
                )

                if sub_words:

                    params.add(
                        sub_words[0].upper()
                    )

    if not params:
        return "-"

    return ", ".join(
        sorted(params)
    )


def calculate_severity_levels(
    alert_stations: list[dict[str, Any]]
) -> tuple[int, int, int]:

    urgent = 0
    watch = 0
    follow = 0

    for st in alert_stations:

        alarm_str = st[
            "parameter_alarm"
        ]

        if (
            not alarm_str
            or alarm_str == "-"
        ):
            continue

        count = len([
            x
            for x in alarm_str.split(",")
            if x.strip()
        ])

        if count >= 3:
            urgent += 1

        elif count == 2:
            watch += 1

        elif count == 1:
            follow += 1

    return (
        urgent,
        watch,
        follow
    )


# ============================================================
# สร้างไฟล์สถานะสำหรับหน้าเว็บไซต์
# ============================================================

def write_status_file(
    all_stations: list[dict[str, Any]],
    alert_stations: list[dict[str, Any]],
    type_stats: dict[str, dict[str, int]],
) -> None:

    current_time = now_thailand()

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

    urgent_count, watch_count, follow_count = (
        calculate_severity_levels(
            alert_stations
        )
    )

    estate_count = len({

        st["estate_name"]

        for st in alert_stations

        if st["estate_name"] != "-"
    })

    param_list_str = (
        extract_unique_parameters(
            alert_stations
        )
    )

    latest_data_time = (
        report_time_text()
    )

    if all_stations:

        valid_updates = [

            st["last_update"]

            for st in all_stations

            if st["last_update"] != "-"
        ]

        if valid_updates:

            latest_data_time = (
                valid_updates[0]
            )

    status_data = {

        "status":
            "alert"
            if alert_stations
            else "normal",

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
            param_list_str,

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
# LINE Flex Message
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

    comp: dict[str, Any] = {

        "type":
            "text",

        "text":
            text,

        "size":
            size,

        "color":
            color,

        "wrap":
            wrap,

        "align":
            align,
    }

    if weight:
        comp["weight"] = weight

    if margin:
        comp["margin"] = margin

    if flex is not None:
        comp["flex"] = flex

    return comp


# ============================================================
# สร้าง LINE Flex Card
# ============================================================

def build_summary_bubble(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
) -> dict[str, Any]:

    # ========================================================
    # ตรวจสอบสถานะ
    # ========================================================

    has_alert = (
        len(alert_stations) > 0
    )

    if has_alert:

        status_color = "#C51F35"
        status_bg = "#FFF4F5"
        status_border = "#E9A6AF"

        status_icon = "!"

        status_title = (
            "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )

        status_subtitle = (
            "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์"
        )

    else:

        status_color = "#18794E"
        status_bg = "#F1F8F3"
        status_border = "#78B88E"

        status_icon = "✓"

        status_title = (
            "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )

        status_subtitle = (
            "สถานีและติดตามสถานการณ์"
        )

    # ========================================================
    # ข้อมูล Alert
    # ========================================================

    if has_alert:

        param_str = (
            extract_unique_parameters(
                alert_stations
            )
        )

        parameter_count = (

            len(
                set(
                    param_str.split(", ")
                )
            )

            if param_str != "-"

            else 0
        )

        urgent_c, watch_c, follow_c = (
            calculate_severity_levels(
                alert_stations
            )
        )

        estate_c = len({

            st["estate_name"]

            for st in alert_stations

            if st["estate_name"] != "-"
        })

    # ========================================================
    # HEADER
    # ========================================================

    header = {

        "type":
            "box",

        "layout":
            "vertical",

        "paddingAll":
            "0px",

        "contents": [

            # เส้นม่วงด้านบน
            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "height":
                    "4px",

                "backgroundColor":
                    "#4E1478",

                "contents":
                    []
            },

            {

                "type":
                    "box",

                "layout":
                    "horizontal",

                "paddingTop":
                    "9px",

                "paddingBottom":
                    "7px",

                "paddingStart":
                    "14px",

                "paddingEnd":
                    "14px",

                "alignItems":
                    "center",

                "contents": [

                    # สัญลักษณ์ กนอ.
                    {

                        "type":
                            "box",

                        "layout":
                            "vertical",

                        "width":
                            "32px",

                        "height":
                            "32px",

                        "cornerRadius":
                            "16px",

                        "backgroundColor":
                            "#F2EAF7",

                        "justifyContent":
                            "center",

                        "alignItems":
                            "center",

                        "contents": [

                            {

                                "type":
                                    "text",

                                "text":
                                    "กนอ.",

                                "size":
                                    "xxs",

                                "weight":
                                    "bold",

                                "color":
                                    "#5B168A",

                                "align":
                                    "center"
                            }
                        ]
                    },

                    {

                        "type":
                            "box",

                        "layout":
                            "vertical",

                        "margin":
                            "md",

                        "flex":
                            1,

                        "contents": [

                            {

                                "type":
                                    "text",

                                "text":
                                    "IEAT e-Monitoring",

                                "size":
                                    "lg",

                                "weight":
                                    "bold",

                                "color":
                                    "#32105B"
                            },

                            {

                                "type":
                                    "text",

                                "text":
                                    "สรุปสถานการณ์ e-Monitoring",

                                "size":
                                    "xs",

                                "color":
                                    "#777777",

                                "margin":
                                    "xs"
                            }
                        ]
                    }
                ]
            }
        ]
    }

    # ========================================================
    # STATUS BANNER
    # ========================================================

    status_banner = {

        "type":
            "box",

        "layout":
            "horizontal",

        "backgroundColor":
            status_bg,

        "borderColor":
            status_border,

        "borderWidth":
            "1px",

        "cornerRadius":
            "9px",

        "paddingAll":
            "10px",

        "alignItems":
            "center",

        "contents": [

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "width":
                    "34px",

                "height":
                    "34px",

                "cornerRadius":
                    "17px",

                "backgroundColor":
                    status_color,

                "justifyContent":
                    "center",

                "alignItems":
                    "center",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            status_icon,

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#FFFFFF",

                        "align":
                            "center"
                    }
                ]
            },

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "margin":
                    "sm",

                "flex":
                    1,

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            status_title,

                        "size":
                            "sm",

                        "weight":
                            "bold",

                        "color":
                            status_color,

                        "wrap":
                            True
                    },

                    {

                        "type":
                            "text",

                        "text":
                            status_subtitle,

                        "size":
                            "xxs",

                        "color":
                            "#777777",

                        "margin":
                            "xs",

                        "wrap":
                            True
                    }
                ]
            }
        ]
    }

    # ========================================================
    # การ์ดตัวเลข 3 ช่อง
    # ========================================================

    if has_alert:

        stat_cards = [

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#F5F0FA",

                "borderColor":
                    "#D7C6E7",

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "paddingAll":
                    "7px",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            str(
                                len(alert_stations)
                            ),

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#4E1478",

                        "align":
                            "center"
                    },

                    {

                        "type":
                            "text",

                        "text":
                            "สถานีแจ้งเตือน",

                        "size":
                            "xxs",

                        "color":
                            "#777777",

                        "align":
                            "center",

                        "margin":
                            "xs"
                    }
                ]
            },

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#F2F8F0",

                "borderColor":
                    "#C9DEBE",

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "paddingAll":
                    "7px",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            str(
                                parameter_count
                            ),

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#3C761E",

                        "align":
                            "center"
                    },

                    {

                        "type":
                            "text",

                        "text":
                            "พารามิเตอร์",

                        "size":
                            "xxs",

                        "color":
                            "#777777",

                        "align":
                            "center",

                        "margin":
                            "xs"
                    }
                ]
            },

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#FFF8E8",

                "borderColor":
                    "#E9D49B",

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "paddingAll":
                    "7px",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            str(
                                estate_c
                            ),

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#E36C00",

                        "align":
                            "center"
                    },

                    {

                        "type":
                            "text",

                        "text":
                            "นิคมฯ",

                        "size":
                            "xxs",

                        "color":
                            "#777777",

                        "align":
                            "center",

                        "margin":
                            "xs"
                    }
                ]
            }
        ]

    else:

        stat_cards = [

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#F5F0FA",

                "borderColor":
                    "#D7C6E7",

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "paddingAll":
                    "8px",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            str(total_count),

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#4E1478",

                        "align":
                            "center"
                    },

                    {

                        "type":
                            "text",

                        "text":
                            "ทั้งหมด",

                        "size":
                            "xxs",

                        "color":
                            "#777777",

                        "align":
                            "center",

                        "margin":
                            "xs"
                    }
                ]
            },

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#F2F8F0",

                "borderColor":
                    "#C9DEBE",

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "paddingAll":
                    "8px",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            str(online_total),

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#3C761E",

                        "align":
                            "center"
                    },

                    {

                        "type":
                            "text",

                        "text":
                            "ONLINE",

                        "size":
                            "xxs",

                        "weight":
                            "bold",

                        "color":
                            "#3C761E",

                        "align":
                            "center",

                        "margin":
                            "xs"
                    }
                ]
            },

            {

                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#FFF1F3",

                "borderColor":
                    "#E9B6BE",

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "paddingAll":
                    "8px",

                "contents": [

                    {

                        "type":
                            "text",

                        "text":
                            str(offline_total),

                        "size":
                            "xl",

                        "weight":
                            "bold",

                        "color":
                            "#C51F35",

                        "align":
                            "center"
                    },

                    {

                        "type":
                            "text",

                        "text":
                            "OFFLINE",

                        "size":
                            "xxs",

                        "weight":
                            "bold",

                        "color":
                            "#C51F35",

                        "align":
                            "center",

                        "margin":
                            "xs"
                    }
                ]
            }
        ]

    stats_row = {

        "type":
            "box",

        "layout":
            "horizontal",

        "spacing":
            "sm",

        "margin":
            "sm",

        "contents":
            stat_cards
    }

    # ========================================================
    # กล่องพารามิเตอร์ที่เกินมาตรฐาน
    # ========================================================

    parameter_box = None

    if has_alert:

        parameter_box = {

            "type":
                "box",

            "layout":
                "vertical",

            "margin":
                "sm",

            "paddingAll":
                "8px",

            "backgroundColor":
                "#FAF8FC",

            "borderColor":
                "#DDD5E5",

            "borderWidth":
                "1px",

            "cornerRadius":
                "7px",

            "contents": [

                {

                    "type":
                        "text",

                    "text":
                        "พารามิเตอร์ที่เกินค่ามาตรฐาน",

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#666666"
                },

                {

                    "type":
                        "text",

                    "text":
                        param_str,

                    "size":
                        "xs",

                    "weight":
                        "bold",

                    "color":
                        "#C51F35",

                    "margin":
                        "xs",

                    "wrap":
                        True
                }
            ]
        }

    # ========================================================
    # ตารางสรุปสถานี
    # ========================================================

    table_contents = [

        {

            "type":
                "box",

            "layout":
                "horizontal",

            "alignItems":
                "center",

            "margin":
                "sm",

            "contents": [

                {

                    "type":
                        "text",

                    "text":
                        "🏭",

                    "size":
                        "sm",

                    "flex":
                        0
                },

                {

                    "type":
                        "text",

                    "text":
                        "สรุปสถานะสถานีตรวจวัด",

                    "size":
                        "sm",

                    "weight":
                        "bold",

                    "color":
                        "#35105D",

                    "margin":
                        "sm",

                    "flex":
                        1
                }
            ]
        },

        # Header ตาราง
        {

            "type":
                "box",

            "layout":
                "horizontal",

            "paddingAll":
                "6px",

            "backgroundColor":
                "#F2F2F4",

            "cornerRadius":
                "6px",

            "contents": [

                {

                    "type":
                        "text",

                    "text":
                        "ประเภท (Type)",

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#555555",

                    "flex":
                        3
                },

                {

                    "type":
                        "text",

                    "text":
                        "ทั้งหมด",

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#555555",

                    "align":
                        "center",

                    "flex":
                        1
                },

                {

                    "type":
                        "text",

                    "text":
                        "ONLINE",

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#3C761E",

                    "align":
                        "center",

                    "flex":
                        1
                },

                {

                    "type":
                        "text",

                    "text":
                        "OFFLINE",

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#C51F35",

                    "align":
                        "center",

                    "flex":
                        1
                }
            ]
        }
    ]

    # ========================================================
    # สีของแต่ละประเภท
    # ========================================================

    row_backgrounds = {

        "AQMs":
            "#F1F7EC",

        "WQMs":
            "#F3EEF8",

        "CEMs":
            "#EEF7FA",

        "ประเภทอื่น":
            "#F1F1F3"
    }

    row_colors = {

        "AQMs":
            "#477A27",

        "WQMs":
            "#4E2A84",

        "CEMs":
            "#32839A",

        "ประเภทอื่น":
            "#666666"
    }

    # ========================================================
    # สร้างแถวตาราง
    # ========================================================

    for g_name in [
        "AQMs",
        "WQMs",
        "CEMs",
        "ประเภทอื่น"
    ]:

        g_data = type_stats.get(

            g_name,

            {
                "total": 0,
                "online": 0,
                "offline": 0
            }
        )

        table_contents.append({

            "type":
                "box",

            "layout":
                "horizontal",

            "paddingAll":
                "6px",

            "margin":
                "xs",

            "backgroundColor":
                row_backgrounds[g_name],

            "cornerRadius":
                "6px",

            "contents": [

                {

                    "type":
                        "text",

                    "text":
                        g_name,

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        row_colors[g_name],

                    "flex":
                        3
                },

                {

                    "type":
                        "text",

                    "text":
                        str(g_data["total"]),

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#444444",

                    "align":
                        "center",

                    "flex":
                        1
                },

                {

                    "type":
                        "text",

                    "text":
                        str(g_data["online"]),

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#3C761E",

                    "align":
                        "center",

                    "flex":
                        1
                },

                {

                    "type":
                        "text",

                    "text":
                        str(g_data["offline"]),

                    "size":
                        "xxs",

                    "weight":
                        "bold",

                    "color":
                        "#C51F35",

                    "align":
                        "center",

                    "flex":
                        1
                }
            ]
        })

    station_table = {

        "type":
            "box",

        "layout":
            "vertical",

        "flex":
            3,

        "contents":
            table_contents
    }

    # ========================================================
    # ระดับสถานการณ์
    # ========================================================

    severity_box = None

    if has_alert:

        severity_box = {

            "type":
                "box",

            "layout":
                "vertical",

            "flex":
                2,

            "margin":
                "sm",

            "contents": [

                {

                    "type":
                        "text",

                    "text":
                        "ระดับสถานการณ์",

                    "size":
                        "xs",

                    "weight":
                        "bold",

                    "color":
                        "#35105D"
                },

                # ------------------------------------------------
                # เกินค่ามาตรฐาน
                # ------------------------------------------------

                {

                    "type":
                        "box",

                    "layout":
                        "horizontal",

                    "margin":
                        "xs",

                    "paddingAll":
                        "6px",

                    "backgroundColor":
                        "#FFF1F3",

                    "borderColor":
                        "#E9B6BE",

                    "borderWidth":
                        "1px",

                    "cornerRadius":
                        "6px",

                    "contents": [

                        {

                            "type":
                                "box",

                            "layout":
                                "vertical",

                            "flex":
                                1,

                            "contents": [

                                {

                                    "type":
                                        "text",

                                    "text":
                                        "⚠ เกินค่ามาตรฐาน",

                                    "size":
                                        "xxs",

                                    "weight":
                                        "bold",

                                    "color":
                                        "#C51F35",

                                    "wrap":
                                        True
                                },

                                {

                                    "type":
                                        "text",

                                    "text":
                                        "≥ 3 รายการ",

                                    "size":
                                        "xxs",

                                    "color":
                                        "#777777",

                                    "margin":
                                        "xs"
                                }
                            ]
                        },

                        {

                            "type":
                                "text",

                            "text":
                                f"{urgent_c} สถานี",

                            "size":
                                "xxs",

                            "weight":
                                "bold",

                            "color":
                                "#C51F35",

                            "align":
                                "end",

                            "flex":
                                0
                        }
                    ]
                },

                # ------------------------------------------------
                # เฝ้าระวัง
                # ------------------------------------------------

                {

                    "type":
                        "box",

                    "layout":
                        "horizontal",

                    "margin":
                        "xs",

                    "paddingAll":
                        "6px",

                    "backgroundColor":
                        "#FFF8E8",

                    "borderColor":
                        "#E9D49B",

                    "borderWidth":
                        "1px",

                    "cornerRadius":
                        "6px",

                    "contents": [

                        {

                            "type":
                                "box",

                            "layout":
                                "vertical",

                            "flex":
                                1,

                            "contents": [

                                {

                                    "type":
                                        "text",

                                    "text":
                                        "⚠ เฝ้าระวัง",

                                    "size":
                                        "xxs",

                                    "weight":
                                        "bold",

                                    "color":
                                        "#E67700"
                                },

                                {

                                    "type":
                                        "text",

                                    "text":
                                        "2 รายการ",

                                    "size":
                                        "xxs",

                                    "color":
                                        "#777777",

                                    "margin":
                                        "xs"
                                }
                            ]
                        },

                        {

                            "type":
                                "text",

                            "text":
                                f"{watch_c} สถานี",

                            "size":
                                "xxs",

                            "weight":
                                "bold",

                            "color":
                                "#E67700",

                            "align":
                                "end",

                            "flex":
                                0
                        }
                    ]
                },

                # ------------------------------------------------
                # ติดตามสถานการณ์
                # ------------------------------------------------

                {

                    "type":
                        "box",

                    "layout":
                        "horizontal",

                    "margin":
                        "xs",

                    "paddingAll":
                        "6px",

                    "backgroundColor":
                        "#F1F8F3",

                    "borderColor":
                        "#BBD8C4",

                    "borderWidth":
                        "1px",

                    "cornerRadius":
                        "6px",

                    "contents": [

                        {

                            "type":
                                "box",

                            "layout":
                                "vertical",

                            "flex":
                                1,

                            "contents": [

                                {

                                    "type":
                                        "text",

                                    "text":
                                        "▲ ติดตามสถานการณ์",

                                    "size":
                                        "xxs",

                                    "weight":
                                        "bold",

                                    "color":
                                        "#2B8A3E",

                                    "wrap":
                                        True
                                },

                                {

                                    "type":
                                        "text",

                                    "text":
                                        "1 รายการ",

                                    "size":
                                        "xxs",

                                    "color":
                                        "#777777",

                                    "margin":
                                        "xs"
                                }
                            ]
                        },

                        {

                            "type":
                                "text",

                            "text":
                                f"{follow_c} สถานี",

                            "size":
                                "xxs",

                            "weight":
                                "bold",

                            "color":
                                "#2B8A3E",

                            "align":
                                "end",

                            "flex":
                                0
                        }
                    ]
                }
            ]
        }

    # ========================================================
    # ข้อมูลล่าสุด
    # ========================================================

    latest_box = {

        "type":
            "box",

        "layout":
            "vertical",

        "margin":
            "sm",

        "paddingAll":
            "8px",

        "backgroundColor":
            "#FAFAFA",

        "borderColor":
            "#E0E0E0",

        "borderWidth":
            "1px",

        "cornerRadius":
            "7px",

        "contents": [

            {

                "type":
                    "text",

                "text":
                    "ข้อมูลล่าสุดจาก e-Monitoring",

                "size":
                    "xxs",

                "color":
                    "#777777"
            },

            {

                "type":
                    "text",

                "text":
                    report_time_text(),

                "size":
                    "xs",

                "weight":
                    "bold",

                "color":
                    "#35105D",

                "margin":
                    "xs"
            },

            {

                "type":
                    "text",

                "text":
                    "จัดทำรายงานเพื่อใช้ในการติดตามสถานการณ์",

                "size":
                    "xxs",

                "color":
                    "#999999",

                "margin":
                    "xs",

                "wrap":
                    True
            }
        ]
    }

    # ========================================================
    # BODY
    # ========================================================

    body_contents = [

        status_banner,

        stats_row
    ]

    # ถ้ามี Alert
    if parameter_box:

        body_contents.append(
            parameter_box
        )

    # ========================================================
    # ตาราง + ระดับสถานการณ์
    # ========================================================

    if has_alert:

        body_contents.append({

            "type":
                "box",

            "layout":
                "horizontal",

            "margin":
                "sm",

            "spacing":
                "sm",

            "contents": [

                station_table,

                severity_box
            ]
        })

    else:

        body_contents.append(
            station_table
        )

    # ========================================================
    # เพิ่มข้อมูลล่าสุด
    # ========================================================

    body_contents.append(
        latest_box
    )

    # ========================================================
    # สร้าง Bubble
    # ========================================================

    return {

        "type":
            "bubble",

        "size":
            "mega",

        "styles": {

            "body": {

                "backgroundColor":
                    "#FFFFFF"
            },

            "footer": {

                "backgroundColor":
                    "#FFFFFF"
            }
        },

        # Header
        "header":
            header,

        # Body
        "body": {

            "type":
                "box",

            "layout":
                "vertical",

            "paddingTop":
                "6px",

            "paddingBottom":
                "8px",

            "paddingStart":
                "14px",

            "paddingEnd":
                "14px",

            "contents":
                body_contents
        },

        # Footer
        "footer": {

            "type":
                "box",

            "layout":
                "vertical",

            "paddingTop":
                "4px",

            "paddingBottom":
                "12px",

            "paddingStart":
                "14px",

            "paddingEnd":
                "14px",

            "contents": [

                {

                    "type":
                        "button",

                    "style":
                        "primary",

                    "height":
                        "sm",

                    "color":
                        "#4E1478",

                    "action": {

                        "type":
                            "uri",

                        "label":
                            "เปิดระบบ GIS",

                        "uri":
                            DASHBOARD_URL
                    }
                }
            ]
        }
    }


# ============================================================
# ส่งข้อความ LINE
# ============================================================

def send_line_message(
    message: dict[str, Any]
) -> bool:

    token = os.getenv(
        "LINE_CHANNEL_ACCESS_TOKEN",
        ""
    ).strip()

    if not token:

        print(
            "WARNING: ไม่พบ "
            "LINE_CHANNEL_ACCESS_TOKEN "
            "จึงอัปเดตหน้าเว็บไซต์โดยไม่ส่ง LINE"
        )

        return False

    payload = json.dumps(
        {
            "messages": [message]
        },
        ensure_ascii=False
    ).encode("utf-8")

    request = urllib.request.Request(

        LINE_BROADCAST_URL,

        data=payload,

        headers={

            "Authorization":
                f"Bearer {token}",

            "Content-Type":
                "application/json",
        },

        method="POST"
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

            return True

    except urllib.error.HTTPError as error:

        response_text = (
            error
            .read()
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

        return False

    except urllib.error.URLError as error:

        print(
            "ERROR: เชื่อมต่อ LINE ไม่สำเร็จ: "
            f"{error.reason}"
        )

        return False


# ============================================================
# ส่ง Summary
# ============================================================

def send_summary(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
) -> None:

    message = {

        "type":
            "flex",

        "altText": (

            "รายงานสถานการณ์ e-Monitoring: "

            +

            (

                "พบสถานีเข้าเกณฑ์แจ้งเตือน "
                + str(len(alert_stations))
                + " สถานี"

                if alert_stations

                else

                "ไม่พบค่าเกินมาตรฐาน"
            )
        ),

        "contents":

            build_summary_bubble(

                total_count=
                    total_count,

                online_total=
                    online_total,

                offline_total=
                    offline_total,

                type_stats=
                    type_stats,

                alert_stations=
                    alert_stations,
            )
    }

    print(
        "กำลังส่งการ์ดสรุปสถานการณ์"
    )

    send_line_message(
        message
    )


# ============================================================
# MAIN
# ============================================================

def main() -> int:

    print("=" * 72)

    print(
        "IEAT e-Monitoring LINE Alert"
    )

    print("=" * 72)

    print(
        f"เวลาประเทศไทย: "
        f"{report_time_text()}"
    )

    print(
        "กำลังดาวน์โหลดข้อมูล "
        "e-Monitoring..."
    )

    # --------------------------------------------------------
    # ดาวน์โหลดข้อมูล
    # --------------------------------------------------------

    try:

        payload = (
            download_station_data()
        )

    except RuntimeError as error:

        print(
            f"ERROR: {error}"
        )

        return 1

    # --------------------------------------------------------
    # เตรียมข้อมูล
    # --------------------------------------------------------

    features = get_features(
        payload
    )

    all_stations = (
        prepare_stations(
            features
        )
    )

    alert_stations = (
        filter_alert_features(
            features
        )
    )

    type_stats = (
        calculate_type_stats(
            all_stations
        )
    )

    # --------------------------------------------------------
    # คำนวณจำนวน
    # --------------------------------------------------------

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

    # --------------------------------------------------------
    # แสดงผล Console
    # --------------------------------------------------------

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
    # เขียน status.json
    # --------------------------------------------------------

    write_status_file(

        all_stations=
            all_stations,

        alert_stations=
            alert_stations,

        type_stats=
            type_stats,
    )

    # --------------------------------------------------------
    # ส่ง LINE
    # --------------------------------------------------------

    send_summary(

        total_count=
            total_count,

        online_total=
            online_total,

        offline_total=
            offline_total,

        type_stats=
            type_stats,

        alert_stations=
            alert_stations,
    )

    print("=" * 72)

    print(
        "ดำเนินการเสร็จสิ้น"
    )

    print("=" * 72)

    return 0


# ============================================================
# RUN
# ============================================================

if __name__ == "__main__":

    sys.exit(
        main()
    )
