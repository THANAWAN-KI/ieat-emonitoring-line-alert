import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


# ============================================================
# การตั้งค่าระบบ
# ============================================================

DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

LINE_BROADCAST_URL = "https://api.line.me/v2/bot/message/broadcast"

THAI_TZ = ZoneInfo("Asia/Bangkok")
STATUS_FILE = Path("docs/status.json")

DASHBOARD_URL = (
    "https://www.arcgis.com/apps/dashboards/"
    "576c71d01cc5403cad90ee330fd67b6e"
)

# จำกัดจำนวนสถานีใน Flex Carousel เพื่อไม่ให้เกินขนาด LINE กำหนด
MAX_STATIONS_PER_CAROUSEL = 8
MAX_ALARM_TEXT_CHARS = 600


# ============================================================
# ฟังก์ชันพื้นฐาน
# ============================================================

def now_thailand() -> datetime:
    return datetime.now(THAI_TZ)


def report_time_text() -> str:
    thai_months = [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
    ]

    current_time = now_thailand()
    buddhist_year = current_time.year + 543

    return (
        f"{current_time.day} {thai_months[current_time.month - 1]} "
        f"{buddhist_year} เวลา {current_time:%H:%M} น."
    )


def next_report_time_text() -> str:
    current_time = now_thailand()
    next_hour = current_time.replace(minute=17, second=0, microsecond=0)

    if current_time >= next_hour:
        from datetime import timedelta
        next_hour += timedelta(hours=1)

    thai_months = [
        "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
        "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
    ]

    buddhist_year = next_hour.year + 543

    return (
        f"{next_hour.day} {thai_months[next_hour.month - 1]} "
        f"{buddhist_year} เวลา {next_hour:%H:%M} น."
    )


def safe_text(value: Any, default: str = "-") -> str:
    if value is None:
        return default

    text = str(value).strip()

    if text.lower() in {"", "-", "none", "null", "nan", "n/a"}:
        return default

    return text


def compact_text(value: Any, limit: int = MAX_ALARM_TEXT_CHARS) -> str:
    text = safe_text(value, "")
    text = re.sub(r"\s+", " ", text).strip()

    if len(text) > limit:
        return text[: limit - 3] + "..."

    return text


def is_online(properties: dict[str, Any]) -> bool:
    return safe_text(properties.get("Status"), "").upper() == "ONLINE"


def has_alarm(properties: dict[str, Any]) -> bool:
    alarm = safe_text(properties.get("ParameterAlram"), "")
    return alarm.lower() not in {"", "-", "none", "null", "nan", "n/a"}


def valid_station(properties: dict[str, Any]) -> bool:
    code = safe_text(properties.get("Code"), "")
    station_name = safe_text(properties.get("StationTH"), "")

    if code in {"", "0", "9999"}:
        return False

    if station_name in {"", "-"}:
        return False

    return True


def get_features(payload: Any) -> list[dict[str, Any]]:
    if isinstance(payload, dict):
        features = payload.get("features", [])
        return features if isinstance(features, list) else []

    if isinstance(payload, list):
        return payload

    return []


def get_properties(feature: dict[str, Any]) -> dict[str, Any]:
    properties = feature.get("properties", {})

    if isinstance(properties, dict):
        return properties

    return {}


def get_coordinates(feature: dict[str, Any]) -> tuple[float | None, float | None]:
    geometry = feature.get("geometry", {})

    if not isinstance(geometry, dict):
        return None, None

    coordinates = geometry.get("coordinates", [])

    if not isinstance(coordinates, list) or len(coordinates) < 2:
        return None, None

    try:
        longitude = float(coordinates[0])
        latitude = float(coordinates[1])
        return longitude, latitude
    except (TypeError, ValueError):
        return None, None


# ============================================================
# ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_station_data() -> Any:
    request = urllib.request.Request(
        DATA_URL,
        headers={
            "User-Agent": "IEAT-eMonitoring-LINE-Alert/1.0",
            "Accept": "application/json",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
        },
        method="GET",
    )

    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            raw_data = response.read().decode("utf-8-sig")
            return json.loads(raw_data)

    except urllib.error.HTTPError as error:
        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ HTTP {error.code}: {error.reason}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            f"ไม่สามารถเชื่อมต่อแหล่งข้อมูล e-Monitoring: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            f"ข้อมูลจาก e-Monitoring ไม่ใช่ JSON ที่ถูกต้อง: {error}"
        ) from error


# ============================================================
# จัดเตรียมข้อมูลสถานี
# ============================================================

def station_type_group(station_type: str) -> str:
    normalized = station_type.upper()

    if "AQM" in normalized:
        return "AQMs"

    if "WQM" in normalized:
        return "WQMs"

    if "CEM" in normalized:
        return "CEMs"

    return "อื่น ๆ"


def create_station_record(feature: dict[str, Any]) -> dict[str, Any]:
    properties = get_properties(feature)
    longitude, latitude = get_coordinates(feature)

    return {
        "code": safe_text(properties.get("Code")),
        "station_name": safe_text(properties.get("StationTH")),
        "estate_name": safe_text(
            properties.get("IndustryZone")
            or properties.get("EstateTH")
            or properties.get("IndustrialEstate")
        ),
        "station_type": safe_text(properties.get("Type")),
        "status": safe_text(properties.get("Status")),
        "last_update": safe_text(
            properties.get("LastUpdate-TH")
            or properties.get("LastUpdateTH")
            or properties.get("LastUpdate")
        ),
        "parameter_alarm": compact_text(properties.get("ParameterAlram")),
        "longitude": longitude,
        "latitude": latitude,
    }


def prepare_stations(features: list[dict[str, Any]]) -> list[dict[str, Any]]:
    stations: list[dict[str, Any]] = []

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = get_properties(feature)

        if not valid_station(properties):
            continue

        stations.append(create_station_record(feature))

    return stations


def get_online_stations(
    features: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    online_stations: list[dict[str, Any]] = []

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = get_properties(feature)

        if not valid_station(properties):
            continue

        if not is_online(properties):
            continue

        online_stations.append(create_station_record(feature))

    return online_stations


def get_alert_stations(
    features: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    """
    ตรวจข้อมูลทั้งหมดที่มี Status = ONLINE และ ParameterAlram มีค่า
    ไม่มีการกรองตามวันหรือเวลาของข้อมูลใน feed
    """
    alerts: list[dict[str, Any]] = []

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = get_properties(feature)

        if not valid_station(properties):
            continue

        if not is_online(properties):
            continue

        if not has_alarm(properties):
            continue

        alerts.append(create_station_record(feature))

    return alerts


def count_online_types(
    online_stations: list[dict[str, Any]],
) -> dict[str, int]:
    counts = {
        "AQMs": 0,
        "WQMs": 0,
        "CEMs": 0,
        "อื่น ๆ": 0,
    }

    for station in online_stations:
        group = station_type_group(station["station_type"])
        counts[group] += 1

    return counts


# ============================================================
# สร้างไฟล์สถานะหน้าเว็บไซต์
# ============================================================

def write_status_file(
    all_stations: list[dict[str, Any]],
    online_stations: list[dict[str, Any]],
    alert_stations: list[dict[str, Any]],
    type_counts: dict[str, int],
) -> None:
    current_time = now_thailand()

    status_data = {
        "status": "alert" if alert_stations else "normal",
        "status_text": (
            "พบค่าพารามิเตอร์ที่เข้าเงื่อนไขแจ้งเตือน"
            if alert_stations
            else "ไม่พบค่าพารามิเตอร์เกินมาตรฐาน"
        ),
        "description": (
            "ระบบตรวจพบสถานี ONLINE ที่มี ParameterAlram "
            "จากข้อมูลล่าสุดในแหล่งข้อมูล e-Monitoring"
            if alert_stations
            else "ระบบไม่พบสถานี ONLINE ที่มี ParameterAlram "
            "จากข้อมูลล่าสุดในแหล่งข้อมูล e-Monitoring"
        ),
        "updated_at": current_time.isoformat(),
        "updated_at_text": report_time_text(),
        "data_source_url": DATA_URL,
        "online_total": len(online_stations),
        "online_aqms": type_counts["AQMs"],
        "online_wqms": type_counts["WQMs"],
        "online_cems": type_counts["CEMs"],
        "online_other": type_counts["อื่น ๆ"],
        "station_count": len(all_stations),
        "alert_station_count": len(alert_stations),
        "parameter_count": len(alert_stations),
        "estate_count": len(
            {
                station["estate_name"]
                for station in alert_stations
                if station["estate_name"] != "-"
            }
        ),
        "urgent_count": 0,
        "watch_count": len(alert_stations),
        "follow_count": 0,
        "stations": alert_stations,
    }

    STATUS_FILE.parent.mkdir(parents=True, exist_ok=True)

    with STATUS_FILE.open("w", encoding="utf-8") as file:
        json.dump(
            status_data,
            file,
            ensure_ascii=False,
            indent=2,
        )

    print(f"อัปเดตไฟล์เว็บไซต์แล้ว: {STATUS_FILE}")


# ============================================================
# LINE Flex Message
# ============================================================

def text_component(
    text: str,
    size: str = "sm",
    color: str = "#30283A",
    weight: str | None = None,
    wrap: bool = True,
    margin: str | None = None,
) -> dict[str, Any]:
    component: dict[str, Any] = {
        "type": "text",
        "text": text,
        "size": size,
        "color": color,
        "wrap": wrap,
    }

    if weight:
        component["weight"] = weight

    if margin:
        component["margin"] = margin

    return component


def build_summary_bubble(
    online_total: int,
    type_counts: dict[str, int],
    alert_count: int,
) -> dict[str, Any]:
    has_alert = alert_count > 0

    header_color = "#D92D3F" if has_alert else "#489E3B"
    status_text = (
        f"พบสถานีเข้าเงื่อนไขแจ้งเตือน {alert_count} สถานี"
        if has_alert
        else "ไม่พบค่าพารามิเตอร์เกินมาตรฐาน"
    )

    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "vertical",
            "backgroundColor": "#4E2A84",
            "paddingAll": "18px",
            "contents": [
                text_component(
                    "IEAT e-Monitoring",
                    size="lg",
                    color="#FFFFFF",
                    weight="bold",
                ),
                text_component(
                    "สรุปสถานการณ์ล่าสุด",
                    size="sm",
                    color="#E4E0EE",
                    margin="sm",
                ),
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "18px",
            "contents": [
                {
                    "type": "box",
                    "layout": "vertical",
                    "backgroundColor": "#F8F5FB",
                    "cornerRadius": "12px",
                    "paddingAll": "12px",
                    "contents": [
                        text_component(
                            status_text,
                            size="md",
                            color=header_color,
                            weight="bold",
                        ),
                        text_component(
                            f"เวลาที่แจ้งเตือน: {report_time_text()}",
                            size="xs",
                            color="#716C6B",
                            margin="sm",
                        ),
                    ],
                },
                text_component(
                    "สถานี Online ทั้งหมด",
                    size="md",
                    color="#4E2A84",
                    weight="bold",
                    margin="lg",
                ),
                text_component(
                    f"{online_total} สถานี",
                    size="xxl",
                    color="#30283A",
                    weight="bold",
                    margin="sm",
                ),
                {
                    "type": "separator",
                    "margin": "lg",
                    "color": "#E4E0EE",
                },
                {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                        text_component(
                            f"AQMs: {type_counts['AQMs']} สถานี",
                            size="sm",
                        ),
                        text_component(
                            f"WQMs: {type_counts['WQMs']} สถานี",
                            size="sm",
                        ),
                        text_component(
                            f"CEMs: {type_counts['CEMs']} สถานี",
                            size="sm",
                        ),
                        text_component(
                            f"ประเภทอื่น: {type_counts['อื่น ๆ']} สถานี",
                            size="sm",
                        ),
                    ],
                },
                text_component(
                    f"รอบแจ้งเตือนถัดไป: {next_report_time_text()}",
                    size="xs",
                    color="#716C6B",
                    margin="lg",
                ),
            ],
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "color": "#4E2A84",
                    "action": {
                        "type": "uri",
                        "label": "เปิด Dashboard",
                        "uri": DASHBOARD_URL,
                    },
                }
            ],
        },
    }


def build_alert_detail_bubble(
    station: dict[str, Any],
) -> dict[str, Any]:
    station_name = station["station_name"]
    estate_name = station["estate_name"]
    station_type = station["station_type"]
    alarm_text = station["parameter_alarm"]
    last_update = station["last_update"]

    contents: list[dict[str, Any]] = [
        text_component(
            "รายละเอียดสถานีที่เข้าเงื่อนไข",
            size="sm",
            color="#FFFFFF",
            weight="bold",
        ),
        text_component(
            station_name,
            size="lg",
            color="#FFFFFF",
            weight="bold",
            margin="sm",
        ),
    ]

    body_contents: list[dict[str, Any]] = [
        text_component(
            "นิคมอุตสาหกรรม",
            size="xs",
            color="#716C6B",
        ),
        text_component(
            estate_name,
            size="sm",
            color="#30283A",
            weight="bold",
            margin="sm",
        ),
        text_component(
            f"ประเภทสถานี: {station_type}",
            size="sm",
            color="#30283A",
            margin="md",
        ),
        {
            "type": "separator",
            "margin": "lg",
            "color": "#E4E0EE",
        },
        text_component(
            "พารามิเตอร์ที่เข้าเงื่อนไข",
            size="sm",
            color="#D92D3F",
            weight="bold",
            margin="lg",
        ),
        text_component(
            alarm_text,
            size="sm",
            color="#30283A",
            margin="sm",
        ),
        text_component(
            f"ข้อมูลในแหล่งข้อมูล: {last_update}",
            size="xs",
            color="#716C6B",
            margin="lg",
        ),
        text_component(
            f"เวลาที่แจ้งเตือน: {report_time_text()}",
            size="xs",
            color="#716C6B",
            margin="sm",
        ),
    ]

    bubble: dict[str, Any] = {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "vertical",
            "backgroundColor": "#D92D3F",
            "paddingAll": "16px",
            "contents": contents,
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "16px",
            "contents": body_contents,
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "14px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "color": "#4E2A84",
                    "action": {
                        "type": "uri",
                        "label": "เปิด Dashboard",
                        "uri": DASHBOARD_URL,
                    },
                }
            ],
        },
    }

    return bubble


# ============================================================
# ส่งข้อความ LINE
# ============================================================

def send_line_message(message: dict[str, Any]) -> bool:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()

    if not token:
        print(
            "WARNING: ไม่พบ LINE_CHANNEL_ACCESS_TOKEN "
            "จึงอัปเดตหน้าเว็บโดยไม่ส่ง LINE"
        )
        return False

    payload = json.dumps(
        {"messages": [message]},
        ensure_ascii=False,
    ).encode("utf-8")

    request = urllib.request.Request(
        LINE_BROADCAST_URL,
        data=payload,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            print(f"ส่ง LINE Broadcast สำเร็จ HTTP {response.status}")
            return True

    except urllib.error.HTTPError as error:
        response_text = error.read().decode("utf-8", errors="replace")

        print(
            f"WARNING: ส่ง LINE ไม่สำเร็จ HTTP {error.code}: "
            f"{response_text}"
        )

        # ไม่ให้ workflow ล้มเหลว เพื่อให้ docs/status.json ยังถูกอัปเดต
        return False

    except urllib.error.URLError as error:
        print(f"WARNING: เชื่อมต่อ LINE ไม่สำเร็จ: {error.reason}")
        return False


def send_summary(
    online_stations: list[dict[str, Any]],
    type_counts: dict[str, int],
    alert_stations: list[dict[str, Any]],
) -> None:
    summary_bubble = build_summary_bubble(
        online_total=len(online_stations),
        type_counts=type_counts,
        alert_count=len(alert_stations),
    )

    message = {
        "type": "flex",
        "altText": (
            "แจ้งเตือน e-Monitoring: "
            f"{'พบสถานีเข้าเงื่อนไข ' + str(len(alert_stations)) + ' สถานี' if alert_stations else 'ไม่พบค่าเกินมาตรฐาน'}"
        ),
        "contents": summary_bubble,
    }

    print("กำลังส่งการ์ดสรุปสถานการณ์...")
    send_line_message(message)


def split_batches(
    items: list[dict[str, Any]],
    batch_size: int,
) -> list[list[dict[str, Any]]]:
    return [
        items[index:index + batch_size]
        for index in range(0, len(items), batch_size)
    ]


def send_alert_details(alert_stations: list[dict[str, Any]]) -> None:
    if not alert_stations:
        return

    batches = split_batches(alert_stations, MAX_STATIONS_PER_CAROUSEL)
    total_batches = len(batches)
    total_alerts = len(alert_stations)

    for batch_number, batch in enumerate(batches, start=1):
        carousel = {
            "type": "carousel",
            "contents": [
                build_alert_detail_bubble(station)
                for station in batch
            ],
        }

        suffix = (
            f" ชุดที่ {batch_number}/{total_batches}"
            if total_batches > 1
            else ""
        )

        message = {
            "type": "flex",
            "altText": (
                f"รายละเอียดแจ้งเตือน e-Monitoring "
                f"{total_alerts} สถานี{suffix}"
            ),
            "contents": carousel,
        }

        print(
            f"กำลังส่งรายละเอียดสถานี "
            f"ชุดที่ {batch_number}/{total_batches} "
            f"จำนวน {len(batch)} สถานี"
        )

        send_line_message(message)


# ============================================================
# เริ่มการทำงาน
# ============================================================

def main() -> int:
    print("=" * 72)
    print("IEAT e-Monitoring LINE Alert")
    print("=" * 72)
    print(f"เวลาประเทศไทย: {report_time_text()}")
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring...")

    try:
        payload = download_station_data()
    except RuntimeError as error:
        print(f"ERROR: {error}")
        return 1

    features = get_features(payload)
    all_stations = prepare_stations(features)
    online_stations = get_online_stations(features)
    alert_stations = get_alert_stations(features)
    type_counts = count_online_types(online_stations)

    print(f"จำนวนสถานีทั้งหมดที่ตรวจสอบได้: {len(all_stations)}")
    print(f"สถานี ONLINE ทั้งหมด: {len(online_stations)}")
    print(f"AQMs ONLINE: {type_counts['AQMs']}")
    print(f"WQMs ONLINE: {type_counts['WQMs']}")
    print(f"CEMs ONLINE: {type_counts['CEMs']}")
    print(f"ประเภทอื่น ONLINE: {type_counts['อื่น ๆ']}")
    print(f"สถานีที่มี ParameterAlram: {len(alert_stations)}")

    # อัปเดตหน้าเว็บทุกครั้ง แม้ส่ง LINE ไม่สำเร็จ
    write_status_file(
        all_stations=all_stations,
        online_stations=online_stations,
        alert_stations=alert_stations,
        type_counts=type_counts,
    )

    # ส่งสรุปทุกครั้งที่ workflow รัน: ทุก 1 ชั่วโมง และเมื่อกด Run เอง
    send_summary(
        online_stations=online_stations,
        type_counts=type_counts,
        alert_stations=alert_stations,
    )

    # หากมีสถานีที่ ParameterAlram มีค่า ให้ส่งรายละเอียดเพิ่มเติม
    send_alert_details(alert_stations)

    print("=" * 72)
    print("ดำเนินการเสร็จสิ้น")
    print("=" * 72)

    return 0


if __name__ == "__main__":
    sys.exit(main())
