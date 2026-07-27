import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path
from typing import Any


DATA_URL = (
    "https://emonitor.ieat.go.th/"
    "call_feed/geog/GeoData/station_all.json"
)

LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push"
STATE_FILE = Path("alert_state.json")

MISSING_VALUES = {
    "",
    "-",
    "9999",
    9999,
    None,
}

# รูปแบบตัวอย่าง:
# PM10_txt = "28.73 (STD 100) ug./m3"
STD_PATTERN = re.compile(
    r"\(\s*STD\s*([0-9,]+(?:\.[0-9]+)?)\s*\)",
    re.IGNORECASE,
)


def download_json(url: str) -> dict[str, Any]:
    """ดาวน์โหลดข้อมูล JSON จาก e-Monitoring"""

    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "IEAT-eMonitoring-Line-Alert/1.0",
            "Accept": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=60,
        ) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            text = response.read().decode(charset)
            return json.loads(text)

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )
        raise RuntimeError(
            f"ดาวน์โหลดข้อมูลไม่สำเร็จ HTTP {error.code}: {body}"
        ) from error

    except urllib.error.URLError as error:
        raise RuntimeError(
            f"เชื่อมต่อ e-Monitoring ไม่สำเร็จ: {error.reason}"
        ) from error

    except json.JSONDecodeError as error:
        raise RuntimeError(
            "ข้อมูลที่ได้รับจาก e-Monitoring ไม่ใช่ JSON ที่ถูกต้อง"
        ) from error


def safe_float(value: Any) -> float | None:
    """แปลงค่าเป็นตัวเลข และตัดค่าที่ใช้แทนข้อมูลว่างออก"""

    if value in MISSING_VALUES:
        return None

    if isinstance(value, str):
        cleaned = value.strip().replace(",", "")

        if cleaned in MISSING_VALUES:
            return None

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


def extract_standard(text: Any) -> float | None:
    """ดึงค่ามาตรฐานจากข้อความ เช่น (STD 100)"""

    if not isinstance(text, str):
        return None

    match = STD_PATTERN.search(text)

    if not match:
        return None

    return safe_float(match.group(1))


def load_state() -> dict[str, Any]:
    """อ่านสถานะการแจ้งเตือนครั้งก่อน"""

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
            raise ValueError("รูปแบบ State ไม่ถูกต้อง")

        data.setdefault("initialized", False)
        data.setdefault("active_alerts", {})

        return data

    except (
        json.JSONDecodeError,
        OSError,
        ValueError,
    ):
        return {
            "initialized": False,
            "active_alerts": {},
        }


def save_state(
    active_alerts: dict[str, Any],
) -> None:
    """บันทึกสถานะ เพื่อป้องกันการแจ้งเตือนซ้ำ"""

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


def make_alert_key(
    station_code: str,
    parameter: str,
) -> str:
    return f"{station_code}:{parameter}"


def get_location_link(
    geometry: dict[str, Any],
) -> str | None:
    coordinates = geometry.get("coordinates")

    if (
        not isinstance(coordinates, list)
        or len(coordinates) < 2
    ):
        return None

    longitude = safe_float(coordinates[0])
    latitude = safe_float(coordinates[1])

    if longitude is None or latitude is None:
        return None

    return (
        "https://www.google.com/maps/search/"
        f"?api=1&query={latitude},{longitude}"
    )


def find_exceedances(
    data: dict[str, Any],
) -> dict[str, dict[str, Any]]:
    """
    ตรวจหาค่าที่สูงกว่ามาตรฐาน

    ระบบจะตรวจทุกฟิลด์ที่ลงท้ายด้วย _txt
    และมีข้อความ (STD ...)
    """

    current_alerts: dict[str, dict[str, Any]] = {}

    features = data.get("features", [])

    if not isinstance(features, list):
        raise RuntimeError("ไม่พบรายการ features ในข้อมูล GeoJSON")

    for feature in features:
        if not isinstance(feature, dict):
            continue

        properties = feature.get("properties", {})
        geometry = feature.get("geometry", {})

        if not isinstance(properties, dict):
            continue

        station_code = str(
            properties.get("Code", "")
        ).strip()

        # Code 0 เป็นระเบียนว่าง/ระเบียนประกอบ
        if station_code in {"", "0", "-"}:
            continue

        station_name = str(
            properties.get("StationTH")
            or properties.get("StationEN")
            or properties.get("StationShort")
            or "ไม่ระบุชื่อสถานี"
        ).strip()

        if station_name == "-":
            continue

        industry_zone = str(
            properties.get("IndustryZone")
            or "ไม่ระบุนิคมอุตสาหกรรม"
        ).strip()

        station_type = str(
            properties.get("Type")
            or "-"
        ).strip()

        last_update = str(
            properties.get("LastUpdate-TH")
            or properties.get("LastUpdate")
            or "-"
        ).strip()

        status = str(
            properties.get("Status")
            or "-"
        ).strip()

        location_link = get_location_link(geometry)

        for text_field, display_text in properties.items():
            if not text_field.endswith("_txt"):
                continue

            standard = extract_standard(display_text)

            if standard is None:
                continue

            parameter = text_field.removesuffix("_txt")
            measured_value = safe_float(
                properties.get(parameter)
            )

            if measured_value is None:
                continue

            if measured_value <= standard:
                continue

            alert_key = make_alert_key(
                station_code,
                parameter,
            )

            current_alerts[alert_key] = {
                "station_code": station_code,
                "station_name": station_name,
                "industry_zone": industry_zone,
                "station_type": station_type,
                "parameter": parameter,
                "value": measured_value,
                "standard": standard,
                "display_text": str(display_text),
                "last_update": last_update,
                "status": status,
                "location_link": location_link,
            }

    return current_alerts


def format_number(value: float) -> str:
    if value.is_integer():
        return f"{int(value):,}"

    return f"{value:,.2f}".rstrip("0").rstrip(".")


def build_exceedance_message(
    alert: dict[str, Any],
) -> str:
    value = format_number(
        float(alert["value"])
    )

    standard = format_number(
        float(alert["standard"])
    )

    difference = float(alert["value"]) - float(
        alert["standard"]
    )

    percent = (
        difference
        / float(alert["standard"])
        * 100
        if float(alert["standard"]) != 0
        else 0
    )

    lines = [
        "🚨 e-Monitoring เกินค่ามาตรฐาน",
        "",
        f"🏭 นิคมฯ: {alert['industry_zone']}",
        f"📍 สถานี: {alert['station_name']}",
        f"🔎 พารามิเตอร์: {alert['parameter']}",
        f"📈 ค่าตรวจวัด: {value}",
        f"⚠️ ค่ามาตรฐาน: {standard}",
        f"⬆️ สูงกว่ามาตรฐาน: {percent:,.1f}%",
        f"🕒 ข้อมูลล่าสุด: {alert['last_update']}",
        f"📡 สถานะสถานี: {alert['status']}",
    ]

    if alert.get("location_link"):
        lines.extend(
            [
                "",
                f"🗺 เปิดตำแหน่ง: {alert['location_link']}",
            ]
        )

    return "\n".join(lines)


def build_recovery_message(
    previous_alert: dict[str, Any],
) -> str:
    return "\n".join(
        [
            "✅ e-Monitoring กลับเข้าสู่เกณฑ์",
            "",
            f"🏭 นิคมฯ: {previous_alert.get('industry_zone', '-')}",
            f"📍 สถานี: {previous_alert.get('station_name', '-')}",
            f"🔎 พารามิเตอร์: {previous_alert.get('parameter', '-')}",
            "สถานะการเกินมาตรฐานสิ้นสุดแล้ว",
        ]
    )


def send_line_message(message: str) -> None:
    token = os.getenv(
        "LINE_CHANNEL_ACCESS_TOKEN",
    )

    target_id = os.getenv(
        "LINE_TARGET_ID",
    )

    if not token:
        raise RuntimeError(
            "ไม่พบ Secret: LINE_CHANNEL_ACCESS_TOKEN"
        )

    if not target_id:
        raise RuntimeError(
            "ไม่พบ Secret: LINE_TARGET_ID"
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
                f"ส่ง LINE สำเร็จ HTTP {response.status}"
            )

    except urllib.error.HTTPError as error:
        body = error.read().decode(
            "utf-8",
            errors="replace",
        )

        raise RuntimeError(
            f"ส่ง LINE ไม่สำเร็จ HTTP {error.code}: {body}"
        ) from error


def alert_has_changed(
    old_alert: dict[str, Any],
    new_alert: dict[str, Any],
) -> bool:
    """
    แจ้งซ้ำเฉพาะเมื่อค่าตรวจวัดหรือเวลาข้อมูลเปลี่ยนไป

    ถึงแม้ยังเกินมาตรฐานอยู่ ระบบจะไม่ส่งข้อมูลเดิมซ้ำ
    """

    old_value = safe_float(
        old_alert.get("value")
    )

    new_value = safe_float(
        new_alert.get("value")
    )

    old_update = str(
        old_alert.get("last_update", "")
    )

    new_update = str(
        new_alert.get("last_update", "")
    )

    return (
        old_value != new_value
        or old_update != new_update
    )


def main() -> None:
    print("กำลังดาวน์โหลดข้อมูล e-Monitoring...")

    data = download_json(DATA_URL)
    current_alerts = find_exceedances(data)
    previous_state = load_state()

    previous_alerts = previous_state.get(
        "active_alerts",
        {},
    )

    initialized = bool(
        previous_state.get("initialized")
    )

    print(
        "จำนวนรายการที่เกินมาตรฐานปัจจุบัน: "
        f"{len(current_alerts)}"
    )

    new_or_updated_alerts = []

    for key, current_alert in current_alerts.items():
        previous_alert = previous_alerts.get(key)

        if previous_alert is None:
            new_or_updated_alerts.append(current_alert)
            continue

        if alert_has_changed(
            previous_alert,
            current_alert,
        ):
            new_or_updated_alerts.append(current_alert)

    recovered_alerts = [
        previous_alerts[key]
        for key in previous_alerts
        if key not in current_alerts
    ]

    if not initialized:
        print(
            "เป็นการทำงานครั้งแรก "
            "ระบบจะบันทึกสถานะและแจ้งรายการที่เกินปัจจุบัน"
        )

    for alert in new_or_updated_alerts:
        send_line_message(
            build_exceedance_message(alert)
        )

    if initialized:
        for previous_alert in recovered_alerts:
            send_line_message(
                build_recovery_message(
                    previous_alert
                )
            )

    save_state(current_alerts)

    print(
        "แจ้งเตือนค่าที่เกินใหม่หรืออัปเดต: "
        f"{len(new_or_updated_alerts)}"
    )

    print(
        "แจ้งเตือนกลับเข้าสู่เกณฑ์: "
        f"{len(recovered_alerts) if initialized else 0}"
    )

    if (
        not new_or_updated_alerts
        and not recovered_alerts
    ):
        print("ไม่มีสถานะเปลี่ยนแปลง ไม่ส่ง LINE")


if __name__ == "__main__":
    try:
        main()

    except Exception as error:
        print(
            f"เกิดข้อผิดพลาด: {error}",
            file=sys.stderr,
        )
        sys.exit(1)
