import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from urllib.parse import urlencode
from zoneinfo import ZoneInfo


# ============================================================
# ตั้งค่าระบบ
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

STATUS_FILE = Path(
    "docs/status.json"
)

# LINE Flex Carousel สูงสุด 12 Bubble
MAX_CAROUSEL_BUBBLES = 12


# ============================================================
# Assets
# ============================================================
#
# โครงสร้างใน GitHub:
#
# assets/
# ├── ieat_logo.png
# ├── 4.png
# ├── 3.png
# └── 1.png
#
# ถ้ารันบน GitHub Actions จะสร้าง URL ให้เอง
#
# ถ้า Repository เป็น Private
# ให้ตั้งค่า ASSET_BASE_URL เป็น URL สาธารณะ
# เช่น GitHub Pages
#
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


if (
    not ASSET_BASE_URL
    and GITHUB_REPOSITORY
):

    ASSET_BASE_URL = (
        "https://raw.githubusercontent.com/"
        f"{GITHUB_REPOSITORY}/"
        f"{GITHUB_BRANCH}/assets"
    )


IEAT_LOGO_URL = (
    f"{ASSET_BASE_URL}/ieat_logo.png"
)

SEVERITY_HIGH_ICON_URL = (
    f"{ASSET_BASE_URL}/4.png"
)

SEVERITY_WATCH_ICON_URL = (
    f"{ASSET_BASE_URL}/3.png"
)

SEVERITY_FOLLOW_ICON_URL = (
    f"{ASSET_BASE_URL}/1.png"
)


# ============================================================
# วันและเวลา
# ============================================================

def now_thailand() -> datetime:

    return datetime.now(
        THAI_TZ
    )


def thai_datetime_text(
    value: datetime
) -> str:

    thai_months = [

        "ม.ค.",
        "ก.พ.",
        "มี.ค.",
        "เม.ย.",
        "พ.ค.",
        "มิ.ย.",
        "ก.ค.",
        "ส.ค.",
        "ก.ย.",
        "ต.ค.",
        "พ.ย.",
        "ธ.ค.",
    ]

    return (
        f"{value.day} "
        f"{thai_months[value.month - 1]} "
        f"{value.year + 543} "
        f"เวลา {value:%H:%M} น."
    )


def report_time_text() -> str:

    return thai_datetime_text(
        now_thailand()
    )


def next_report_time_text() -> str:

    current_time = (
        now_thailand()
    )

    next_time = current_time.replace(
        minute=17,
        second=0,
        microsecond=0,
    )

    if current_time >= next_time:

        next_time += timedelta(
            hours=1
        )

    return thai_datetime_text(
        next_time
    )


# ============================================================
# จัดการข้อความ
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
        "n/a",
    }:

        return default

    return text


def full_text(
    value: Any,
    default: str = "-"
) -> str:
    """
    เก็บข้อมูลทั้งหมด
    ไม่ตัดความยาว
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


# ============================================================
# แยก ParameterAlram
# ============================================================

def normalize_alarm_parts(
    value: Any
) -> list[str]:

    text = full_text(
        value,
        ""
    )

    if not text:
        return []

    parts = re.split(
        r"[,;:\n|]+",
        text
    )

    result = []

    for part in parts:

        clean = part.strip()

        if clean:
            result.append(
                clean
            )

    return result


def alarm_count(
    station: dict[str, Any]
) -> int:

    return len(
        normalize_alarm_parts(
            station.get(
                "parameter_alarm",
                ""
            )
        )
    )


# ============================================================
# ตรวจสอบสถานะ
# ============================================================

def is_online(
    properties: dict[str, Any]
) -> bool:

    return (
        safe_text(
            properties.get(
                "Status"
            ),
            ""
        ).upper()
        == "ONLINE"
    )


def has_alarm(
    properties: dict[str, Any]
) -> bool:

    alarm = safe_text(
        properties.get(
            "ParameterAlram"
        ),
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


def valid_station(
    properties: dict[str, Any]
) -> bool:

    station_name = safe_text(
        properties.get(
            "StationTH"
        ),
        ""
    )

    code = safe_text(
        properties.get(
            "Code"
        ),
        ""
    )

    if station_name in {
        "",
        "-"
    }:

        return False

    if code in {
        "0",
        "9999"
    }:

        return False

    return True


# ============================================================
# GeoJSON
# ============================================================

def get_features(
    payload: Any
) -> list[dict[str, Any]]:

    if isinstance(
        payload,
        dict
    ):

        features = payload.get(
            "features",
            []
        )

        if isinstance(
            features,
            list
        ):

            return features

        return []

    if isinstance(
        payload,
        list
    ):

        return payload

    return []


def get_properties(
    feature: dict[str, Any]
) -> dict[str, Any]:

    properties = feature.get(
        "properties",
        {}
    )

    if isinstance(
        properties,
        dict
    ):

        return properties

    return {}


def get_coordinates(
    feature: dict[str, Any]
) -> tuple[
    float | None,
    float | None
]:

    geometry = feature.get(
        "geometry",
        {}
    )

    if not isinstance(
        geometry,
        dict
    ):

        return (
            None,
            None
        )

    coordinates = geometry.get(
        "coordinates",
        []
    )

    if (
        not isinstance(
            coordinates,
            list
        )
        or len(coordinates) < 2
    ):

        return (
            None,
            None
        )

    try:

        return (
            float(
                coordinates[0]
            ),
            float(
                coordinates[1]
            )
        )

    except (
        TypeError,
        ValueError
    ):

        return (
            None,
            None
        )


# ============================================================
# ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_station_data() -> Any:

    request = urllib.request.Request(

        DATA_URL,

        headers={

            "User-Agent":
                "IEAT-eMonitoring-LINE-Alert/3.0",

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

            raw_data = (
                response
                .read()
                .decode(
                    "utf-8-sig"
                )
            )

            return json.loads(
                raw_data
            )

    except urllib.error.HTTPError as error:

        raise RuntimeError(
            "ดาวน์โหลดข้อมูลไม่สำเร็จ "
            f"HTTP {error.code}: "
            f"{error.reason}"
        ) from error

    except urllib.error.URLError as error:

        raise RuntimeError(
            "ไม่สามารถเชื่อมต่อ "
            "e-Monitoring: "
            f"{error.reason}"
        ) from error

    except json.JSONDecodeError as error:

        raise RuntimeError(
            "ข้อมูลจาก e-Monitoring "
            "ไม่ใช่ JSON ที่ถูกต้อง: "
            f"{error}"
        ) from error


# ============================================================
# จัดประเภทสถานี
# ============================================================

def station_type_group(
    station_type: str
) -> str:

    normalized = safe_text(
        station_type,
        ""
    ).upper()

    if "AQM" in normalized:

        return "AQMs"

    if "WQM" in normalized:

        return "WQMs"

    if "CEM" in normalized:

        return "CEMs"

    return "ประเภทอื่น"


# ============================================================
# สร้างข้อมูลสถานี
# ============================================================

def create_station_record(
    feature: dict[str, Any]
) -> dict[str, Any]:

    properties = get_properties(
        feature
    )

    longitude, latitude = (
        get_coordinates(
            feature
        )
    )

    return {

        "code":
            safe_text(
                properties.get(
                    "Code"
                )
            ),

        "station_name":
            safe_text(
                properties.get(
                    "StationTH"
                )
            ),

        "estate_name":
            safe_text(

                properties.get(
                    "IndustryZone"
                )

                or

                properties.get(
                    "EstateTH"
                )

                or

                properties.get(
                    "IndustrialEstate"
                )

                or

                properties.get(
                    "IndustrialEstateTH"
                )
            ),

        "station_type":
            safe_text(
                properties.get(
                    "Type"
                )
            ),

        "status":
            safe_text(
                properties.get(
                    "Status"
                )
            ),

        "last_update":
            safe_text(

                properties.get(
                    "LastUpdate-TH"
                )

                or

                properties.get(
                    "LastUpdateTH"
                )

                or

                properties.get(
                    "LastUpdate"
                )
            ),

        # ไม่ตัดข้อมูล
        "parameter_alarm":
            full_text(
                properties.get(
                    "ParameterAlram"
                )
            ),

        # ดึง Comment
        "comment":
            full_text(

                properties.get(
                    "Comment"
                )

                or

                properties.get(
                    "COMMENT"
                )

                or

                properties.get(
                    "comment"
                )
            ),

        "longitude":
            longitude,

        "latitude":
            latitude,
    }


# ============================================================
# เตรียมสถานีทั้งหมด
# ============================================================

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


# ============================================================
# ค้นหาสถานีที่มี ParameterAlram
# ============================================================

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

        # สำคัญ:
        # ไม่กรอง ONLINE แล้ว
        # เพื่อให้ OFFLINE ที่มี Alarm
        # แสดงรายละเอียดได้ด้วย

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


# ============================================================
# สถิติประเภทสถานี
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
            station[
                "station_type"
            ]
        )

        if group not in stats:

            group = "ประเภทอื่น"

        stats[group][
            "total"
        ] += 1

        if (
            station[
                "status"
            ].upper()
            == "ONLINE"
        ):

            stats[group][
                "online"
            ] += 1

        else:

            stats[group][
                "offline"
            ] += 1

    return stats


# ============================================================
# รายชื่อ Parameter ที่ไม่ซ้ำ
# ============================================================

def extract_unique_parameters(
    alert_stations: list[dict[str, Any]]
) -> list[str]:

    params = set()

    for station in alert_stations:

        parts = normalize_alarm_parts(
            station.get(
                "parameter_alarm",
                ""
            )
        )

        for part in parts:

            clean = part.strip()

            if clean:

                params.add(
                    clean
                )

    return sorted(
        params
    )


# ============================================================
# ระดับการเฝ้าระวัง
# ============================================================

def calculate_severity_levels(
    alert_stations: list[dict[str, Any]]
) -> tuple[int, int, int]:

    urgent = 0
    watch = 0
    follow = 0

    for station in alert_stations:

        count = alarm_count(
            station
        )

        if count >= 3:

            urgent += 1

        elif count == 2:

            watch += 1

        elif count == 1:

            follow += 1

    return (
        urgent,
        watch,
        follow,
    )


def get_station_severity(
    station: dict[str, Any]
) -> dict[str, str]:

    count = alarm_count(
        station
    )

    if count >= 3:

        return {

            "title":
                "เกินค่ามาตรฐาน",

            "color":
                "#C51F35",

            "background":
                "#FFF1F3",

            "border":
                "#E9B6BE",

            "icon_url":
                SEVERITY_HIGH_ICON_URL,
        }

    if count == 2:

        return {

            "title":
                "เฝ้าระวัง",

            "color":
                "#E67700",

            "background":
                "#FFF8E8",

            "border":
                "#E9D49B",

            "icon_url":
                SEVERITY_WATCH_ICON_URL,
        }

    return {

        "title":
            "ติดตามสถานการณ์",

        "color":
            "#2B8A3E",

        "background":
            "#F1F8F3",

        "border":
            "#BBD8C4",

        "icon_url":
            SEVERITY_FOLLOW_ICON_URL,
    }


# ============================================================
# Google Maps
# ============================================================

def google_maps_url(
    latitude: float | None,
    longitude: float | None,
) -> str:

    if (
        latitude is None
        or longitude is None
    ):

        return (
            "https://www.google.com/maps"
        )

    query = urlencode({

        "api":
            "1",

        "query":
            f"{latitude:.7f},"
            f"{longitude:.7f}",
    })

    return (
        "https://www.google.com/maps/"
        "search/?"
        f"{query}"
    )


# ============================================================
# เขียน status.json
# ============================================================

def write_status_file(
    all_stations: list[dict[str, Any]],
    alert_stations: list[dict[str, Any]],
    type_stats: dict[str, dict[str, int]],
) -> None:

    current_time = (
        now_thailand()
    )

    total_count = len(
        all_stations
    )

    online_total = sum(
        value[
            "online"
        ]
        for value in type_stats.values()
    )

    offline_total = sum(
        value[
            "offline"
        ]
        for value in type_stats.values()
    )

    urgent_count, watch_count, follow_count = (
        calculate_severity_levels(
            alert_stations
        )
    )

    estate_count = len({

        station[
            "estate_name"
        ]

        for station
        in alert_stations

        if station[
            "estate_name"
        ] != "-"
    })

    unique_parameters = (
        extract_unique_parameters(
            alert_stations
        )
    )

    latest_data_time = (
        report_time_text()
    )

    if all_stations:

        valid_updates = [

            station[
                "last_update"
            ]

            for station
            in all_stations

            if station[
                "last_update"
            ] != "-"
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

            else

            "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        ),

        "description": (

            "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์"

            if alert_stations

            else

            "สถานีและติดตามสถานการณ์"
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
            type_stats[
                "AQMs"
            ]["online"],

        "online_wqms":
            type_stats[
                "WQMs"
            ]["online"],

        "online_cems":
            type_stats[
                "CEMs"
            ]["online"],

        "online_other":
            type_stats[
                "ประเภทอื่น"
            ]["online"],

        "alert_station_count":
            len(
                alert_stations
            ),

        "parameter_text":
            ", ".join(
                unique_parameters
            )
            if unique_parameters
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
# LINE Flex Helper
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

    component = {

        "type":
            "text",

        "text":
            str(text),

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

        component[
            "weight"
        ] = weight

    if margin:

        component[
            "margin"
        ] = margin

    if flex is not None:

        component[
            "flex"
        ] = flex

    return component


def image_component(
    url: str,
    size: str = "xs",
) -> dict[str, Any]:

    return {

        "type":
            "image",

        "url":
            url,

        "size":
            size,

        "aspectMode":
            "fit",

        "aspectRatio":
            "1:1",

        "flex":
            0,
    }


def detail_row(
    label: str,
    value: str,
    value_color: str = "#30283A",
) -> dict[str, Any]:

    return {

        "type":
            "box",

        "layout":
            "horizontal",

        "paddingTop":
            "3px",

        "paddingBottom":
            "3px",

        "contents": [

            text_component(
                label,
                size="xxs",
                color="#777777",
                weight="bold",
                flex=2
            ),

            text_component(
                value,
                size="xxs",
                color=value_color,
                weight="bold",
                wrap=True,
                flex=4
            ),
        ],
    }


# ============================================================
# Header
# ============================================================

def build_header(
    subtitle: str
) -> dict[str, Any]:

    return {

        "type":
            "box",

        "layout":
            "vertical",

        "paddingTop":
            "7px",

        "paddingBottom":
            "6px",

        "paddingStart":
            "12px",

        "paddingEnd":
            "12px",

        "contents": [

            {
                "type":
                    "box",

                "layout":
                    "vertical",

                "height":
                    "3px",

                "backgroundColor":
                    "#4E1478",

                "contents": [],
            },

            {
                "type":
                    "box",

                "layout":
                    "horizontal",

                "margin":
                    "sm",

                "alignItems":
                    "center",

                "contents": [

                    image_component(
                        IEAT_LOGO_URL,
                        size="xs"
                    ),

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

                            text_component(
                                "IEAT e-Monitoring",
                                size="md",
                                color="#32105B",
                                weight="bold"
                            ),

                            text_component(
                                subtitle,
                                size="xxs",
                                color="#777777",
                                margin="xs"
                            ),
                        ],
                    },
                ],
            },
        ],
    }


# ============================================================
# หน้า Summary
# ============================================================

def build_summary_bubble(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
) -> dict[str, Any]:

    has_alert = bool(
        alert_stations
    )

    if has_alert:

        status_color = (
            "#C51F35"
        )

        status_background = (
            "#FFF2F3"
        )

        status_border = (
            "#F5C2C7"
        )

        status_title = (
            "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )

        status_subtitle = (
            "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์"
        )

    else:

        status_color = (
            "#18794E"
        )

        status_background = (
            "#EAF7EF"
        )

        status_border = (
            "#C3E6CB"
        )

        status_title = (
            "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )

        status_subtitle = (
            "สถานีและติดตามสถานการณ์"
        )

    body_contents = []

    # --------------------------------------------------------
    # Banner
    # --------------------------------------------------------

    banner_contents = [

        text_component(
            status_title,
            size="sm",
            color=status_color,
            weight="bold",
            align="center"
        ),

        text_component(
            status_subtitle,
            size="xxs",
            color="#716C6B",
            margin="xs",
            align="center"
        ),
    ]

    if has_alert:

        parameters = (
            extract_unique_parameters(
                alert_stations
            )
        )

        urgent_count, watch_count, follow_count = (
            calculate_severity_levels(
                alert_stations
            )
        )

        estate_count = len({

            station[
                "estate_name"
            ]

            for station
            in alert_stations

            if station[
                "estate_name"
            ] != "-"
        })

        # ตัวเลข 3 ช่อง
        banner_contents.append({

            "type":
                "box",

            "layout":
                "horizontal",

            "margin":
                "md",

            "spacing":
                "sm",

            "contents": [

                {
                    "type":
                        "box",

                    "layout":
                        "vertical",

                    "flex":
                        1,

                    "backgroundColor":
                        "#FFFFFF",

                    "cornerRadius":
                        "7px",

                    "paddingAll":
                        "6px",

                    "contents": [

                        text_component(
                            str(
                                len(
                                    alert_stations
                                )
                            ),
                            size="lg",
                            color="#30283A",
                            weight="bold",
                            align="center"
                        ),

                        text_component(
                            "สถานีแจ้งเตือน",
                            size="xxs",
                            color="#716C6B",
                            align="center",
                            margin="xs"
                        ),
                    ],
                },

                {
                    "type":
                        "box",

                    "layout":
                        "vertical",

                    "flex":
                        1,

                    "backgroundColor":
                        "#FFFFFF",

                    "cornerRadius":
                        "7px",

                    "paddingAll":
                        "6px",

                    "contents": [

                        text_component(
                            str(
                                len(
                                    parameters
                                )
                            ),
                            size="lg",
                            color="#30283A",
                            weight="bold",
                            align="center"
                        ),

                        text_component(
                            "พารามิเตอร์",
                            size="xxs",
                            color="#716C6B",
                            align="center",
                            margin="xs"
                        ),
                    ],
                },

                {
                    "type":
                        "box",

                    "layout":
                        "vertical",

                    "flex":
                        1,

                    "backgroundColor":
                        "#FFFFFF",

                    "cornerRadius":
                        "7px",

                    "paddingAll":
                        "6px",

                    "contents": [

                        text_component(
                            str(
                                estate_count
                            ),
                            size="lg",
                            color="#30283A",
                            weight="bold",
                            align="center"
                        ),

                        text_component(
                            "นิคมฯ",
                            size="xxs",
                            color="#716C6B",
                            align="center",
                            margin="xs"
                        ),
                    ],
                },
            ],
        })

        # รายชื่อ parameter
        banner_contents.append({

            "type":
                "box",

            "layout":
                "vertical",

            "margin":
                "sm",

            "contents": [

                text_component(
                    "พารามิเตอร์ที่แจ้งเตือน",
                    size="xxs",
                    color="#716C6B",
                    weight="bold"
                ),

                text_component(
                    ", ".join(
                        parameters
                    ),
                    size="xxs",
                    color="#C51F35",
                    weight="bold",
                    margin="xs"
                ),
            ],
        })

    body_contents.append({

        "type":
            "box",

        "layout":
            "vertical",

        "backgroundColor":
            status_background,

        "borderColor":
            status_border,

        "borderWidth":
            "1px",

        "cornerRadius":
            "9px",

        "paddingAll":
            "9px",

        "contents":
            banner_contents,
    })

    # --------------------------------------------------------
    # จำนวนสถานี
    # --------------------------------------------------------

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

            {
                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#F8F9FA",

                "cornerRadius":
                    "8px",

                "paddingAll":
                    "7px",

                "contents": [

                    text_component(
                        str(
                            total_count
                        ),
                        size="lg",
                        color="#4E2A84",
                        weight="bold",
                        align="center"
                    ),

                    text_component(
                        "ทั้งหมด",
                        size="xxs",
                        color="#716C6B",
                        align="center",
                        margin="xs"
                    ),
                ],
            },

            {
                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#EAF7EF",

                "cornerRadius":
                    "8px",

                "paddingAll":
                    "7px",

                "contents": [

                    text_component(
                        str(
                            online_total
                        ),
                        size="lg",
                        color="#18794E",
                        weight="bold",
                        align="center"
                    ),

                    text_component(
                        "ONLINE",
                        size="xxs",
                        color="#18794E",
                        weight="bold",
                        align="center",
                        margin="xs"
                    ),
                ],
            },

            {
                "type":
                    "box",

                "layout":
                    "vertical",

                "flex":
                    1,

                "backgroundColor":
                    "#FFF5F5",

                "cornerRadius":
                    "8px",

                "paddingAll":
                    "7px",

                "contents": [

                    text_component(
                        str(
                            offline_total
                        ),
                        size="lg",
                        color="#C51F35",
                        weight="bold",
                        align="center"
                    ),

                    text_component(
                        "OFFLINE",
                        size="xxs",
                        color="#C51F35",
                        weight="bold",
                        align="center",
                        margin="xs"
                    ),
                ],
            },
        ],
    })

    # --------------------------------------------------------
    # ตารางประเภทสถานี
    # --------------------------------------------------------

    body_contents.append(

        text_component(
            "สรุปสถานะสถานีตรวจวัด",
            size="sm",
            color="#30283A",
            weight="bold",
            margin="sm"
        )
    )

    body_contents.append({

        "type":
            "box",

        "layout":
            "horizontal",

        "margin":
            "xs",

        "paddingAll":
            "6px",

        "backgroundColor":
            "#F1F3F5",

        "cornerRadius":
            "6px",

        "contents": [

            text_component(
                "ประเภท",
                size="xxs",
                color="#495057",
                weight="bold",
                flex=3
            ),

            text_component(
                "ทั้งหมด",
                size="xxs",
                color="#495057",
                weight="bold",
                align="center",
                flex=1
            ),

            text_component(
                "ONLINE",
                size="xxs",
                color="#18794E",
                weight="bold",
                align="center",
                flex=1
            ),

            text_component(
                "OFFLINE",
                size="xxs",
                color="#C51F35",
                weight="bold",
                align="center",
                flex=1
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
            }
        )

        body_contents.append({

            "type":
                "box",

            "layout":
                "horizontal",

            "margin":
                "xs",

            "paddingAll":
                "5px",

            "contents": [

                text_component(
                    group_name,
                    size="xxs",
                    color="#30283A",
                    flex=3
                ),

                text_component(
                    str(
                        data["total"]
                    ),
                    size="xxs",
                    color="#30283A",
                    align="center",
                    flex=1
                ),

                text_component(
                    str(
                        data["online"]
                    ),
                    size="xxs",
                    color="#18794E",
                    weight="bold",
                    align="center",
                    flex=1
                ),

                text_component(
                    str(
                        data["offline"]
                    ),
                    size="xxs",
                    color="#C51F35",
                    weight="bold",
                    align="center",
                    flex=1
                ),
            ],
        })

    # --------------------------------------------------------
    # ระดับการเฝ้าระวัง
    # --------------------------------------------------------

    if has_alert:

        urgent_count, watch_count, follow_count = (
            calculate_severity_levels(
                alert_stations
            )
        )

        body_contents.append({

            "type":
                "separator",

            "margin":
                "sm",
        })

        body_contents.append(

            text_component(
                "ระดับการเฝ้าระวัง",
                size="sm",
                color="#30283A",
                weight="bold",
                margin="sm"
            )
        )

        severity_rows = [

            (
                "เกินค่ามาตรฐาน",
                "ตั้งแต่ 3 รายการขึ้นไป",
                urgent_count,
                "#C51F35",
                "#FFF1F3",
                "#E9B6BE",
                SEVERITY_HIGH_ICON_URL
            ),

            (
                "เฝ้าระวัง",
                "2 รายการ",
                watch_count,
                "#E67700",
                "#FFF8E8",
                "#E9D49B",
                SEVERITY_WATCH_ICON_URL
            ),

            (
                "ติดตามสถานการณ์",
                "1 รายการ",
                follow_count,
                "#2B8A3E",
                "#F1F8F3",
                "#BBD8C4",
                SEVERITY_FOLLOW_ICON_URL
            ),
        ]

        for row in severity_rows:

            (
                title,
                description,
                count,
                color,
                background,
                border,
                icon_url,
            ) = row

            body_contents.append({

                "type":
                    "box",

                "layout":
                    "horizontal",

                "margin":
                    "xs",

                "paddingAll":
                    "6px",

                "backgroundColor":
                    background,

                "borderColor":
                    border,

                "borderWidth":
                    "1px",

                "cornerRadius":
                    "7px",

                "alignItems":
                    "center",

                "contents": [

                    image_component(
                        icon_url,
                        size="xxs"
                    ),

                    {
                        "type":
                            "box",

                        "layout":
                            "vertical",

                        "margin":
                            "xs",

                        "flex":
                            1,

                        "contents": [

                            text_component(
                                title,
                                size="xxs",
                                color=color,
                                weight="bold"
                            ),

                            text_component(
                                description,
                                size="xxs",
                                color="#6C757D",
                                margin="xs"
                            ),
                        ],
                    },

                    text_component(
                        f"{count} สถานี",
                        size="xxs",
                        color=color,
                        weight="bold",
                        align="end"
                    ),
                ],
            })

    # --------------------------------------------------------
    # เวลา
    # --------------------------------------------------------

    body_contents.append({

        "type":
            "box",

        "layout":
            "vertical",

        "margin":
            "sm",

        "paddingAll":
            "7px",

        "backgroundColor":
            "#F8F9FA",

        "cornerRadius":
            "7px",

        "contents": [

            text_component(
                "ข้อมูลล่าสุดจาก e-Monitoring",
                size="xxs",
                color="#6C757D"
            ),

            text_component(
                report_time_text(),
                size="xxs",
                color="#30283A",
                weight="bold",
                margin="xs"
            ),
        ],
    })

    return {

        "type":
            "bubble",

        "size":
            "mega",

        "styles": {

            "header": {
                "backgroundColor":
                    "#FFFFFF"
            },

            "body": {
                "backgroundColor":
                    "#FFFFFF"
            },

            "footer": {
                "backgroundColor":
                    "#FFFFFF"
            },
        },

        "header":
            build_header(
                "สรุปสถานการณ์ e-Monitoring"
            ),

        "body": {

            "type":
                "box",

            "layout":
                "vertical",

            "paddingTop":
                "3px",

            "paddingBottom":
                "7px",

            "paddingStart":
                "12px",

            "paddingEnd":
                "12px",

            "contents":
                body_contents,
        },

        "footer": {

            "type":
                "box",

            "layout":
                "vertical",

            "paddingTop":
                "3px",

            "paddingBottom":
                "8px",

            "paddingStart":
                "12px",

            "paddingEnd":
                "12px",

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
                            DASHBOARD_URL,
                    },
                },
            ],
        },
    }


# ============================================================
# หน้า Detail ของแต่ละสถานี
# ============================================================

def build_station_detail_bubble(
    station: dict[str, Any]
) -> dict[str, Any]:

    severity = get_station_severity(
        station
    )

    station_type = safe_text(
        station.get(
            "station_type"
        )
    )

    group_name = station_type_group(
        station_type
    )

    station_name = safe_text(
        station.get(
            "station_name"
        )
    )

    estate_name = safe_text(
        station.get(
            "estate_name"
        )
    )

    status = safe_text(
        station.get(
            "status"
        )
    )

    parameter_alarm = full_text(
        station.get(
            "parameter_alarm"
        )
    )

    comment = full_text(
        station.get(
            "comment"
        )
    )

    latitude = station.get(
        "latitude"
    )

    longitude = station.get(
        "longitude"
    )

    status_upper = (
        status.upper()
    )

    if status_upper == "ONLINE":

        status_color = (
            "#2B8A3E"
        )

        status_background = (
            "#EAF7EF"
        )

    elif status_upper == "OFFLINE":

        status_color = (
            "#C51F35"
        )

        status_background = (
            "#FFF1F3"
        )

    else:

        status_color = (
            "#777777"
        )

        status_background = (
            "#F3F3F3"
        )

    parameter_parts = (
        normalize_alarm_parts(
            parameter_alarm
        )
    )

    parameter_contents = []

    if parameter_parts:

        for parameter in parameter_parts:

            parameter_contents.append({

                "type":
                    "box",

                "layout":
                    "horizontal",

                "margin":
                    "xs",

                "contents": [

                    text_component(
                        "•",
                        size="xxs",
                        color=severity[
                            "color"
                        ],
                        weight="bold"
                    ),

                    text_component(
                        parameter,
                        size="xxs",
                        color=severity[
                            "color"
                        ],
                        weight="bold",
                        wrap=True,
                        margin="xs",
                        flex=1
                    ),
                ],
            })

    else:

        parameter_contents.append(

            text_component(
                parameter_alarm,
                size="xxs",
                color=severity[
                    "color"
                ],
                weight="bold"
            )
        )

    # ========================================================
    # Bubble
    # ========================================================

    return {

        "type":
            "bubble",

        "size":
            "mega",

        "styles": {

            "header": {
                "backgroundColor":
                    "#FFFFFF"
            },

            "body": {
                "backgroundColor":
                    "#FFFFFF"
            },

            "footer": {
                "backgroundColor":
                    "#FFFFFF"
            },
        },

        "header":
            build_header(
                f"รายละเอียดสถานี {group_name}"
            ),

        "body": {

            "type":
                "box",

            "layout":
                "vertical",

            "paddingTop":
                "3px",

            "paddingBottom":
                "7px",

            "paddingStart":
                "12px",

            "paddingEnd":
                "12px",

            "contents": [

                # ------------------------------------------------
                # ระดับสถานการณ์
                # ------------------------------------------------

                {
                    "type":
                        "box",

                    "layout":
                        "horizontal",

                    "paddingAll":
                        "7px",

                    "backgroundColor":
                        severity[
                            "background"
                        ],

                    "borderColor":
                        severity[
                            "border"
                        ],

                    "borderWidth":
                        "1px",

                    "cornerRadius":
                        "8px",

                    "alignItems":
                        "center",

                    "contents": [

                        image_component(
                            severity[
                                "icon_url"
                            ],
                            size="xxs"
                        ),

                        text_component(
                            severity[
                                "title"
                            ],
                            size="sm",
                            color=severity[
                                "color"
                            ],
                            weight="bold",
                            margin="sm",
                            flex=1
                        ),

                        text_component(
                            (
                                f"{alarm_count(station)} "
                                "รายการ"
                            ),
                            size="xxs",
                            color=severity[
                                "color"
                            ],
                            weight="bold",
                            align="end"
                        ),
                    ],
                },

                # ------------------------------------------------
                # รายละเอียดสถานี
                # ------------------------------------------------

                text_component(
                    "รายละเอียดสถานี",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm"
                ),

                {
                    "type":
                        "box",

                    "layout":
                        "vertical",

                    "margin":
                        "xs",

                    "backgroundColor":
                        "#F8F8FA",

                    "cornerRadius":
                        "8px",

                    "paddingAll":
                        "8px",

                    "contents": [

                        detail_row(
                            "ชื่อสถานี",
                            station_name
                        ),

                        detail_row(
                            "นิคมอุตสาหกรรม",
                            estate_name
                        ),

                        detail_row(
                            "สถานะ",
                            status,
                            status_color
                        ),

                        detail_row(
                            "ประเภท",
                            station_type,
                            "#4E1478"
                        ),
                    ],
                },

                # ------------------------------------------------
                # ParameterAlram
                # ------------------------------------------------

                text_component(
                    "ค่าพารามิเตอร์ที่แจ้งเตือน",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm"
                ),

                {
                    "type":
                        "box",

                    "layout":
                        "vertical",

                    "margin":
                        "xs",

                    "paddingAll":
                        "8px",

                    "backgroundColor":
                        severity[
                            "background"
                        ],

                    "borderColor":
                        severity[
                            "border"
                        ],

                    "borderWidth":
                        "1px",

                    "cornerRadius":
                        "8px",

                    "contents":
                        parameter_contents,
                },

                # ------------------------------------------------
                # Comment
                # ------------------------------------------------

                text_component(
                    "สาเหตุ / การติดตามผล",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm"
                ),

                {
                    "type":
                        "box",

                    "layout":
                        "vertical",

                    "margin":
                        "xs",

                    "paddingAll":
                        "8px",

                    "backgroundColor":
                        "#F8F9FA",

                    "borderColor":
                        "#E1E3E5",

                    "borderWidth":
                        "1px",

                    "cornerRadius":
                        "8px",

                    "contents": [

                        text_component(
                            comment,
                            size="xxs",
                            color="#555555",
                            wrap=True
                        ),
                    ],
                },

                # ------------------------------------------------
                # ตำแหน่ง
                # ------------------------------------------------

                text_component(
                    "ตำแหน่งสถานี",
                    size="sm",
                    color="#35105D",
                    weight="bold",
                    margin="sm"
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

                    else

                    "ไม่พบพิกัดสถานี",

                    size="xxs",
                    color="#777777",
                    margin="xs"
                ),
            ],
        },

        # --------------------------------------------------------
        # Footer: มีเฉพาะ Google Maps
        # --------------------------------------------------------

        "footer": {

            "type":
                "box",

            "layout":
                "vertical",

            "paddingTop":
                "3px",

            "paddingBottom":
                "9px",

            "paddingStart":
                "12px",

            "paddingEnd":
                "12px",

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
                            "เปิดตำแหน่งสถานี",

                        "uri":
                            google_maps_url(
                                latitude,
                                longitude
                            ),
                    },
                },
            ],
        },
    }


# ============================================================
# สร้างหน้ารายละเอียดแยก AQMs / WQMs / CEMs
# ============================================================

def build_detail_bubbles(
    alert_stations: list[
        dict[str, Any]
    ]
) -> list[
    dict[str, Any]
]:

    bubbles = []

    # -----------------------------------------------
    # AQMs
    # -----------------------------------------------

    aqms = [

        station

        for station
        in alert_stations

        if station_type_group(
            station.get(
                "station_type",
                ""
            )
        )
        == "AQMs"
    ]

    # -----------------------------------------------
    # WQMs
    # -----------------------------------------------

    wqms = [

        station

        for station
        in alert_stations

        if station_type_group(
            station.get(
                "station_type",
                ""
            )
        )
        == "WQMs"
    ]

    # -----------------------------------------------
    # CEMs
    # -----------------------------------------------

    cems = [

        station

        for station
        in alert_stations

        if station_type_group(
            station.get(
                "station_type",
                ""
            )
        )
        == "CEMs"
    ]

    # ------------------------------------------------
    # เรียงเป็น AQMs → WQMs → CEMs
    # ------------------------------------------------

    grouped = [

        (
            "AQMs",
            aqms
        ),

        (
            "WQMs",
            wqms
        ),

        (
            "CEMs",
            cems
        ),
    ]

    # ------------------------------------------------
    # แต่ละสถานี = 1 หน้า
    # ------------------------------------------------

    for group_name, stations in grouped:

        if not stations:

            continue

        for station in stations:

            bubbles.append(

                build_station_detail_bubble(
                    station
                )
            )

    return bubbles


# ============================================================
# ส่ง LINE
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
            "LINE_CHANNEL_ACCESS_TOKEN"
        )

        return False

    payload = json.dumps(
        {
            "messages": [
                message
            ]
        },
        ensure_ascii=False
    ).encode(
        "utf-8"
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
# สร้าง Carousel
# ============================================================

def send_summary(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[
        str,
        dict[str, int]
    ],
    alert_stations: list[
        dict[str, Any]
    ],
) -> None:

    # --------------------------------------------------------
    # หน้าแรก
    # --------------------------------------------------------

    bubbles = [

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
    ]

    # --------------------------------------------------------
    # ถ้ามี Alert → เพิ่มหน้า Detail
    # --------------------------------------------------------

    if alert_stations:

        detail_bubbles = (
            build_detail_bubbles(
                alert_stations
            )
        )

        bubbles.extend(
            detail_bubbles
        )

    # --------------------------------------------------------
    # จำกัดจำนวนหน้า
    # --------------------------------------------------------

    if len(bubbles) > MAX_CAROUSEL_BUBBLES:

        print(
            "WARNING: จำนวนหน้าเกิน "
            f"{MAX_CAROUSEL_BUBBLES} หน้า"
        )

        print(
            "LINE Carousel รองรับสูงสุด "
            "12 หน้า จึงแสดงเฉพาะ "
            "12 หน้าแรก"
        )

        bubbles = bubbles[
            :MAX_CAROUSEL_BUBBLES
        ]

    # --------------------------------------------------------
    # altText
    # --------------------------------------------------------

    if alert_stations:

        alt_text = (

            "รายงานสถานการณ์ "
            "e-Monitoring: "

            f"พบสถานีที่มี "
            f"ParameterAlram "
            f"{len(alert_stations)} สถานี "
            "เลื่อนเพื่อดูรายละเอียด"
        )

    else:

        alt_text = (

            "รายงานสถานการณ์ "
            "e-Monitoring: "
            "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        )

    # --------------------------------------------------------
    # Message
    # --------------------------------------------------------

    message = {

        "type":
            "flex",

        "altText":
            alt_text,

        "contents": {

            "type":
                "carousel",

            "contents":
                bubbles,
        },
    }

    print(
        "กำลังส่ง LINE Carousel "
        f"{len(bubbles)} หน้า"
    )

    send_line_message(
        message
    )


# ============================================================
# Main
# ============================================================

def main() -> int:

    print("=" * 72)

    print(
        "IEAT e-Monitoring LINE Alert"
    )

    print("=" * 72)

    print(
        "เวลาประเทศไทย: "
        f"{report_time_text()}"
    )

    print(
        "กำลังดาวน์โหลดข้อมูล "
        "e-Monitoring..."
    )

    # --------------------------------------------------------
    # ตรวจสอบ Assets
    # --------------------------------------------------------

    if not ASSET_BASE_URL:

        print(
            "WARNING: ไม่พบ "
            "ASSET_BASE_URL"
        )

        print(
            "และไม่พบ GITHUB_REPOSITORY"
        )

        print(
            "รูปใน assets อาจไม่แสดงใน LINE"
        )

    else:

        print(
            "Asset URL:"
            f" {ASSET_BASE_URL}"
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
    # สรุปจำนวน
    # --------------------------------------------------------

    total_count = len(
        all_stations
    )

    online_total = sum(
        value[
            "online"
        ]

        for value
        in type_stats.values()
    )

    offline_total = sum(
        value[
            "offline"
        ]

        for value
        in type_stats.values()
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
    # ระดับสถานการณ์
    # --------------------------------------------------------

    urgent_count, watch_count, follow_count = (
        calculate_severity_levels(
            alert_stations
        )
    )

    print(
        "เกินค่ามาตรฐาน: "
        f"{urgent_count} สถานี"
    )

    print(
        "เฝ้าระวัง: "
        f"{watch_count} สถานี"
    )

    print(
        "ติดตามสถานการณ์: "
        f"{follow_count} สถานี"
    )

    # --------------------------------------------------------
    # Debug รายละเอียด
    # --------------------------------------------------------

    for station in alert_stations:

        print(
            "-" * 60
        )

        print(
            "สถานี:",
            station[
                "station_name"
            ]
        )

        print(
            "ประเภท:",
            station[
                "station_type"
            ]
        )

        print(
            "นิคมฯ:",
            station[
                "estate_name"
            ]
        )

        print(
            "สถานะ:",
            station[
                "status"
            ]
        )

        print(
            "ParameterAlram:",
            station[
                "parameter_alarm"
            ]
        )

        print(
            "Comment:",
            station[
                "comment"
            ]
        )

        print(
            "Latitude:",
            station[
                "latitude"
            ]
        )

        print(
            "Longitude:",
            station[
                "longitude"
            ]
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
            type_stats
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
            alert_stations
    )

    print("=" * 72)

    print(
        "ดำเนินการเสร็จสิ้น"
    )

    print("=" * 72)

    return 0


# ============================================================
# Run
# ============================================================

if __name__ == "__main__":

    sys.exit(
        main()
    )
