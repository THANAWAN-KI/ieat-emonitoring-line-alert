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
    next_time = current_time.replace(minute=17, second=0, microsecond=0)
    if current_time >= next_time:
        next_time += timedelta(hours=1)
    return thai_datetime_text(next_time)


# ============================================================
# ฟังก์ชันจัดการข้อมูล
# ============================================================

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
    station_name = safe_text(properties.get("StationTH"), "")
    code = safe_text(properties.get("Code"), "")
    if station_name in {"", "-"}:
        return False
    if code in {"0", "9999"}:
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
    return properties if isinstance(properties, dict) else {}


def get_coordinates(feature: dict[str, Any]) -> tuple[float | None, float | None]:
    geometry = feature.get("geometry", {})
    if not isinstance(geometry, dict):
        return None, None
    coordinates = geometry.get("coordinates", [])
    if not isinstance(coordinates, list) or len(coordinates) < 2:
        return None, None
    try:
        return float(coordinates[0]), float(coordinates[1])
    except (TypeError, ValueError):
        return None, None


# ============================================================
# ดาวน์โหลดข้อมูล e-Monitoring
# ============================================================

def download_station_data() -> Any:
    request = urllib.request.Request(
        DATA_URL,
        headers={
            "User-Agent": "IEAT-eMonitoring-LINE-Alert/2.0",
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
        raise RuntimeError(f"ดาวน์โหลดข้อมูลไม่สำเร็จ HTTP {error.code}: {error.reason}") from error
    except urllib.error.URLError as error:
        raise RuntimeError(f"ไม่สามารถเชื่อมต่อแหล่งข้อมูล e-Monitoring: {error.reason}") from error
    except json.JSONDecodeError as error:
        raise RuntimeError(f"ข้อมูลจาก e-Monitoring ไม่ใช่ JSON ที่ถูกต้อง: {error}") from error


# ============================================================
# เตรียมข้อมูลสถานีและการจัดกลุ่ม
# ============================================================

def station_type_group(station_type: str) -> str:
    normalized = station_type.upper()
    if "AQM" in normalized:
        return "AQMs"
    if "WQM" in normalized:
        return "WQMs"
    if "CEM" in normalized:
        return "CEMs"
    return "ประเภทอื่น"


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
            or properties.get("IndustrialEstateTH")
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
    stations = []
    for feature in features:
        if not isinstance(feature, dict):
            continue
        properties = get_properties(feature)
        if valid_station(properties):
            stations.append(create_station_record(feature))
    return stations


def filter_alert_features(features: list[dict[str, Any]]) -> list[dict[str, Any]]:
    alert_stations = []
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
        alert_stations.append(create_station_record(feature))
    return alert_stations


def calculate_type_stats(all_stations: list[dict[str, Any]]) -> dict[str, dict[str, int]]:
    stats = {
        "AQMs": {"total": 0, "online": 0, "offline": 0},
        "WQMs": {"total": 0, "online": 0, "offline": 0},
        "CEMs": {"total": 0, "online": 0, "offline": 0},
        "ประเภทอื่น": {"total": 0, "online": 0, "offline": 0},
    }

    for st in all_stations:
        group = station_type_group(st["station_type"])
        if group not in stats:
            group = "ประเภทอื่น"
        
        stats[group]["total"] += 1
        if st["status"].upper() == "ONLINE":
            stats[group]["online"] += 1
        else:
            stats[group]["offline"] += 1

    return stats


def extract_unique_parameters(alert_stations: list[dict[str, Any]]) -> str:
    params = set()
    for st in alert_stations:
        alarm_str = st["parameter_alarm"]
        if not alarm_str or alarm_str == "-":
            continue
        # แยกพารามิเตอร์ที่มักคั่นด้วยเครื่องหมายคอมมา หรือ colon
        parts = re.split(r"[,:]", alarm_str)
        for p in parts:
            clean_p = p.strip()
            # ดึงเฉพาะชื่อตัวย่อพารามิเตอร์ตัวแรกๆ เช่น CO, SO2, PM10 ฯลฯ
            if clean_p:
                sub_words = clean_p.split()
                if sub_words:
                    params.add(sub_words[0].upper())
    
    if not params:
        return "-"
    return ", ".join(sorted(params))


def calculate_severity_levels(alert_stations: list[dict[str, Any]]) -> tuple[int, int, int]:
    """
    จัดระดับสถานการณ์ตามจำนวนรายการแจ้งเตือนต่อสถานี:
    - เกินค่ามาตรฐาน: มีการแจ้งเตือนตั้งแต่ 3 รายการขึ้นไป
    - เฝ้าระวัง: มีการแจ้งเตือน 2 รายการ
    - ติดตามสถานการณ์: มีการแจ้งเตือน 1 รายการ
    """
    urgent = 0
    watch = 0
    follow = 0

    for st in alert_stations:
        alarm_str = st["parameter_alarm"]
        if not alarm_str or alarm_str == "-":
            continue
        # นับจำนวนพารามิเตอร์ที่เกินจากคอมมา
        count = len([x for x in alarm_str.split(",") if x.strip()])
        if count >= 3:
            urgent += 1
        elif count == 2:
            watch += 1
        elif count == 1:
            follow += 1
            
    return urgent, watch, follow


# ============================================================
# สร้างไฟล์สถานะสำหรับหน้าเว็บไซต์
# ============================================================

def write_status_file(
    all_stations: list[dict[str, Any]],
    alert_stations: list[dict[str, Any]],
    type_stats: dict[str, dict[str, int]],
) -> None:
    current_time = now_thailand()
    total_count = len(all_stations)
    online_total = sum(v["online"] for v in type_stats.values())
    offline_total = sum(v["offline"] for v in type_stats.values())

    urgent_count, watch_count, follow_count = calculate_severity_levels(alert_stations)
    estate_count = len({st["estate_name"] for st in alert_stations if st["estate_name"] != "-"})
    param_list_str = extract_unique_parameters(alert_stations)
    
    # ดึงเวลา LastUpdate ของสถานีล่าสุดมาแสดงเป็นข้อมูลอัปเดต
    latest_data_time = report_time_text()
    if all_stations:
        valid_updates = [st["last_update"] for st in all_stations if st["last_update"] != "-"]
        if valid_updates:
            latest_data_time = valid_updates[0]

    status_data = {
        "status": "alert" if alert_stations else "normal",
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
        "updated_at": current_time.isoformat(),
        "updated_at_text": report_time_text(),
        "latest_data_time": latest_data_time,
        "station_count": total_count,
        "online_total": online_total,
        "offline_total": offline_total,
        "online_aqms": type_stats["AQMs"]["online"],
        "online_wqms": type_stats["WQMs"]["online"],
        "online_cems": type_stats["CEMs"]["online"],
        "online_other": type_stats["ประเภทอื่น"]["online"],
        "alert_station_count": len(alert_stations),
        "parameter_text": param_list_str,
        "estate_count": estate_count,
        "urgent_count": urgent_count,
        "watch_count": watch_count,
        "follow_count": follow_count,
        "type_stats": type_stats,
        "stations": alert_stations,
    }

    STATUS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with STATUS_FILE.open("w", encoding="utf-8") as file:
        json.dump(status_data, file, ensure_ascii=False, indent=2)

    print(f"อัปเดตไฟล์เว็บไซต์แล้ว: {STATUS_FILE}")


# ============================================================
# LINE Flex Message Builder
# ============================================================

def text_component(
    text: str,
    size: str = "sm",
    color: str = "#30283A",
    weight: str | None = None,
    wrap: bool = True,
    align: str = "start",
    margin: str | None = None,
) -> dict[str, Any]:
    comp: dict[str, Any] = {
        "type": "text",
        "text": text,
        "size": size,
        "color": color,
        "wrap": wrap,
        "align": align,
    }
    if weight:
        comp["weight"] = weight
    if margin:
        comp["margin"] = margin
    return comp


def build_summary_bubble(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
) -> dict[str, Any]:
    has_alert = len(alert_stations) > 0

    status_color = "#C51F35" if has_alert else "#18794E"
    status_background = "#FFF2F3" if has_alert else "#EAF7EF"
    status_border_color = "#F5C2C7" if has_alert else "#C3E6CB"

    status_title = (
        "พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
        if has_alert
        else "ไม่พบค่าพารามิเตอร์ที่เกินค่ามาตรฐาน"
    )
    status_subtitle = (
        "กรุณาตรวจสอบรายละเอียดสถานีและติดตามสถานการณ์"
        if has_alert
        else "สถานีและติดตามสถานการณ์"
    )

    body_contents: list[dict[str, Any]] = []

    # 1. Status Banner Box
    banner_contents = [
        text_component(status_title, size="md", color=status_color, weight="bold", align="center"),
        text_component(status_subtitle, size="xs", color="#716C6B", margin="xs", align="center"),
    ]
    
    if has_alert:
        param_str = extract_unique_parameters(alert_stations)
        urgent_c, watch_c, follow_c = calculate_severity_levels(alert_stations)
        estate_c = len({st["estate_name"] for st in alert_stations if st["estate_name"] != "-"})

        # กล่องตัวเลข 3 ช่อง (สถานีแจ้งเตือน, พารามิเตอร์, นิคมฯ)
        banner_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
                {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": "#FFFFFF", "cornerRadius": "8px", "paddingAll": "8px", "contents": [
                    text_component(str(len(alert_stations)), size="xl", color="#30283A", weight="bold", align="center"),
                    text_component("สถานีแจ้งเตือน", size="xxs", color="#716C6B", align="center", margin="xs")
                ]},
                {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": "#FFFFFF", "cornerRadius": "8px", "paddingAll": "8px", "contents": [
                    text_component(str(len(set(param_str.split(", "))) if param_str != "-" else 0), size="xl", color="#30283A", weight="bold", align="center"),
                    text_component("พารามิเตอร์", size="xxs", color="#716C6B", align="center", margin="xs")
                ]},
                {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": "#FFFFFF", "cornerRadius": "8px", "paddingAll": "8px", "contents": [
                    text_component(str(estate_c), size="xl", color="#30283A", weight="bold", align="center"),
                    text_component("นิคมฯ", size="xxs", color="#716C6B", align="center", margin="xs")
                ]},
            ]
        })
        
        # รายชื่อพารามิเตอร์ที่เกิน
        banner_contents.append({
            "type": "box",
            "layout": "vertical",
            "margin": "md",
            "contents": [
                text_component("พารามิเตอร์ที่เกินค่ามาตรฐาน", size="xxs", color="#716C6B", weight="bold"),
                text_component(param_str, size="sm", color="#C51F35", weight="bold", margin="xs")
            ]
        })

    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "backgroundColor": status_background,
        "cornerRadius": "12px",
        "paddingAll": "14px",
        "borderColor": status_border_color,
        "borderWidth": "1px",
        "contents": banner_contents
    })

    if not has_alert:
        # กล่องตัวเลข 3 ช่องสำหรับภาวะปกติ (ทั้งหมด, ONLINE, OFFLINE)
        body_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
                {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": "#F8F9FA", "cornerRadius": "10px", "paddingAll": "10px", "borderColor": "#E9ECEF", "borderWidth": "1px", "contents": [
                    text_component(str(total_count), size="xxl", color="#4E2A84", weight="bold", align="center"),
                    text_component("ทั้งหมด", size="xs", color="#716C6B", align="center", margin="xs")
                ]},
                {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": "#EAF7EF", "cornerRadius": "10px", "paddingAll": "10px", "borderColor": "#C3E6CB", "borderWidth": "1px", "contents": [
                    text_component(str(online_total), size="xxl", color="#18794E", weight="bold", align="center"),
                    text_component("ONLINE", size="xs", color="#18794E", align="center", margin="xs", weight="bold")
                ]},
                {"type": "box", "layout": "vertical", "flex": 1, "backgroundColor": "#FFF5F5", "cornerRadius": "10px", "paddingAll": "10px", "borderColor": "#F5C2C7", "borderWidth": "1px", "contents": [
                    text_component(str(offline_total), size="xxl", color="#C51F35", weight="bold", align="center"),
                    text_component("OFFLINE", size="xs", color="#C51F35", align="center", margin="xs", weight="bold")
                ]},
            ]
        })

    # หัวข้อตารางสรุปสถานะสถานีตรวจวัด
    body_contents.extend([
        {
            "type": "box",
            "layout": "horizontal",
            "margin": "xl",
            "contents": [
                {"type": "text", "text": "🏛️", "size": "md", "flex": 0},
                {"type": "text", "text": " สรุปสถานะสถานีตรวจวัด", "size": "sm", "color": "#30283A", "weight": "bold", "flex": 1, "margin": "sm"}
            ]
        },
        {
            "type": "box",
            "layout": "horizontal",
            "margin": "md",
            "paddingAll": "8px",
            "backgroundColor": "#F1F3F5",
            "cornerRadius": "6px",
            "contents": [
                {"type": "text", "text": "ประเภท (Type)", "size": "xs", "color": "#495057", "weight": "bold", "flex": 3},
                {"type": "text", "text": "ทั้งหมด", "size": "xs", "color": "#495057", "weight": "bold", "flex": 1, "align": "center"},
                {"type": "text", "text": "ONLINE", "size": "xs", "color": "#18794E", "weight": "bold", "flex": 1, "align": "center"},
                {"type": "text", "text": "OFFLINE", "size": "xs", "color": "#C51F35", "weight": "bold", "flex": 1, "align": "center"},
            ]
        }
    ])

    # แถวข้อมูลในตาราง (AQMs, WQMs, CEMs, ประเภทอื่น)
    for g_name in ["AQMs", "WQMs", "CEMs", "ประเภทอื่น"]:
        g_data = type_stats.get(g_name, {"total": 0, "online": 0, "offline": 0})
        body_contents.append({
            "type": "box",
            "layout": "horizontal",
            "margin": "sm",
            "paddingAll": "6px",
            "contents": [
                {"type": "text", "text": g_name, "size": "xs", "color": "#30283A", "flex": 3},
                {"type": "text", "text": str(g_data["total"]), "size": "xs", "color": "#30283A", "flex": 1, "align": "center"},
                {"type": "text", "text": str(g_data["online"]), "size": "xs", "color": "#18794E", "flex": 1, "align": "center", "weight": "bold"},
                {"type": "text", "text": str(g_data["offline"]), "size": "xs", "color": "#C51F35", "flex": 1, "align": "center", "weight": "bold"},
            ]
        })

    # ถ้ามี Alert ให้เพิ่มกล่อง "ระดับสถานการณ์" ด้านขวา/ล่าง
    if has_alert:
        urgent_c, watch_c, follow_c = calculate_severity_levels(alert_stations)
        body_contents.extend([
            {"type": "separator", "margin": "lg", "color": "#DEE2E6"},
            {
                "type": "box",
                "layout": "vertical",
                "margin": "md",
                "contents": [
                    text_component("ระดับสถานการณ์", size="sm", color="#30283A", weight="bold"),
                    {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "sm",
                        "spacing": "sm",
                        "contents": [
                            {"type": "box", "layout": "horizontal", "backgroundColor": "#FFF5F5", "borderColor": "#F5C2C7", "borderWidth": "1px", "cornerRadius": "8px", "paddingAll": "8px", "contents": [
                                {"type": "box", "layout": "vertical", "flex": 3, "contents": [
                                    text_component("⚠️ เกินค่ามาตรฐาน", size="xs", color="#C51F35", weight="bold"),
                                    text_component("มีค่าการแจ้งเตือนตั้งแต่ 3 รายการขึ้นไป", size="xxs", color="#6C757D", margin="xs")
                                ]},
                                text_component(f"{urgent_c} สถานี", size="sm", color="#C51F35", weight="bold", align="end", flex=1)
                            ]},
                            {"type": "box", "layout": "horizontal", "backgroundColor": "#FFF9DB", "borderColor": "#FFEEBA", "borderWidth": "1px", "cornerRadius": "8px", "paddingAll": "8px", "contents": [
                                {"type": "box", "layout": "vertical", "flex": 3, "contents": [
                                    text_component("⚠️ เฝ้าระวัง", size="xs", color="#E67700", weight="bold"),
                                    text_component("มีค่าการแจ้งเตือน 2 รายการ", size="xxs", color="#6C757D", margin="xs")
                                ]},
                                text_component(f"{watch_c} สถานี", size="sm", color="#E67700", weight="bold", align="end", flex=1)
                            ]},
                            {"type": "box", "layout": "horizontal", "backgroundColor": "#EBFBEE", "borderColor": "#B2F2BB", "borderWidth": "1px", "cornerRadius": "8px", "paddingAll": "8px", "contents": [
                                {"type": "box", "layout": "vertical", "flex": 3, "contents": [
                                    text_component("⚠️ ติดตามสถานการณ์", size="xs", color="#2B8A3E", weight="bold"),
                                    text_component("มีค่าการแจ้งเตือน 1 รายการ", size="xxs", color="#6C757D", margin="xs")
                                ]},
                                text_component(f"{follow_c} สถานี", size="sm", color="#2B8A3E", weight="bold", align="end", flex=1)
                            ]},
                        ]
                    }
                ]
            }
        ])

    # ส่วนท้าย: ข้อมูลล่าสุดจาก e-Monitoring
    body_contents.append({
        "type": "box",
        "layout": "vertical",
        "margin": "lg",
        "paddingAll": "10px",
        "backgroundColor": "#F8F9FA",
        "cornerRadius": "8px",
        "contents": [
            text_component("ข้อมูลล่าสุดจาก e-Monitoring", size="xxs", color="#6C757D"),
            text_component(f"{report_time_text()}", size="xs", color="#30283A", weight="bold", margin="xs")
        ]
    })

    return {
        "type": "bubble",
        "size": "mega",
        "styles": {
            "header": {"backgroundColor": "#4E2A84"},
            "body": {"backgroundColor": "#FFFFFF"},
            "footer": {"backgroundColor": "#FFFFFF"},
        },
        "header": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "15px",
            "contents": [
                text_component("IEAT e-Monitoring", size="lg", color="#FFFFFF", weight="bold"),
                text_component("สรุปสถานการณ์ e-Monitoring", size="xs", color="#E4E0EE", margin="xs"),
            ],
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "15px",
            "contents": body_contents,
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "paddingAll": "15px",
            "contents": [
                {
                    "type": "button",
                    "style": "primary",
                    "color": "#4E2A84",
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
# ส่งข้อความ LINE และ Main
# ============================================================

def send_line_message(message: dict[str, Any]) -> bool:
    token = os.getenv("LINE_CHANNEL_ACCESS_TOKEN", "").strip()
    if not token:
        print("WARNING: ไม่พบ LINE_CHANNEL_ACCESS_TOKEN จึงอัปเดตหน้าเว็บไซต์โดยไม่ส่ง LINE")
        return False

    payload = json.dumps({"messages": [message]}, ensure_ascii=False).encode("utf-8")
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
        print(f"ERROR: LINE Broadcast API HTTP {error.code}: {response_text}")
        return False
    except urllib.error.URLError as error:
        print(f"ERROR: เชื่อมต่อ LINE ไม่สำเร็จ: {error.reason}")
        return False


def send_summary(
    total_count: int,
    online_total: int,
    offline_total: int,
    type_stats: dict[str, dict[str, int]],
    alert_stations: list[dict[str, Any]],
) -> None:
    message = {
        "type": "flex",
        "altText": (
            "รายงานสถานการณ์ e-Monitoring: "
            f"{'พบสถานีเข้าเกณฑ์แจ้งเตือน ' + str(len(alert_stations)) + ' สถานี' if alert_stations else 'ไม่พบค่าเกินมาตรฐาน'}"
        ),
        "contents": build_summary_bubble(
            total_count=total_count,
            online_total=online_total,
            offline_total=offline_total,
            type_stats=type_stats,
            alert_stations=alert_stations,
        ),
    }
    print("กำลังส่งการ์ดสรุปสถานการณ์")
    send_line_message(message)


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
    alert_stations = filter_alert_features(features)
    type_stats = calculate_type_stats(all_stations)

    total_count = len(all_stations)
    online_total = sum(v["online"] for v in type_stats.values())
    offline_total = sum(v["offline"] for v in type_stats.values())

    print(f"จำนวนสถานีทั้งหมด: {total_count}")
    print(f"ONLINE ทั้งหมด: {online_total}")
    print(f"OFFLINE ทั้งหมด: {offline_total}")
    print(f"สถานีที่มี ParameterAlram: {len(alert_stations)}")

    write_status_file(
        all_stations=all_stations,
        alert_stations=alert_stations,
        type_stats=type_stats,
    )

    send_summary(
        total_count=total_count,
        online_total=online_total,
        offline_total=offline_total,
        type_stats=type_stats,
        alert_stations=alert_stations,
    )

    print("=" * 72)
    print("ดำเนินการเสร็จสิ้น")
    print("=" * 72)
    return 0


if __name__ == "__main__":
    sys.exit(main())
