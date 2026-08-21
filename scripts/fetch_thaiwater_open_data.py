#!/usr/bin/env python3
"""Build the IEAT flood dashboard feed from official ThaiWater and IEAT GIS data."""
from __future__ import annotations

import json
import math
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo

RAIN_URL = "https://api-v3.thaiwater.net/api/v1/thaiwater30/public/rain_24h"
WATER_URL = "https://api-v3.thaiwater.net/api/v1/thaiwater30/public/waterlevel_load"
ESTATE_URL = (
    "https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/"
    "e_PP_2025/FeatureServer/1/query"
)
OUTPUT = Path("docs/data/thaiwater_latest.json")
SCRIPT_OUTPUT = Path("docs/data/thaiwater_latest.js")
USER_AGENT = "IEAT-Flood-Intelligence/2.0 (+https://www.ieat.go.th/)"
WATCH_RADIUS_KM = 30.0
DISPLAY_RADIUS_KM = 50.0
RAIN_IMAGE_URL = "https://satda.tmd.go.th/wp-content/uploads/data/radar_composite/max/qpf_202608210600.gif"
RAIN_IMAGE_OUTPUT = Path("docs/data/radar_latest.gif")


def get_json(url: str, params: dict[str, str] | None = None) -> dict[str, Any]:
    if params:
        url = f"{url}?{urllib.parse.urlencode(params)}"
    request = urllib.request.Request(
        url, headers={"User-Agent": USER_AGENT, "Accept": "application/json"}
    )
    with urllib.request.urlopen(request, timeout=60) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def number(value: Any) -> float | None:
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def th(value: Any) -> str:
    if isinstance(value, dict):
        return str(value.get("th") or value.get("en") or "")
    return str(value or "")


def distance_km(a: dict[str, Any], b: dict[str, Any]) -> float:
    radius = 6371.0
    p1, p2 = math.radians(a["lat"]), math.radians(b["lat"])
    dp = p2 - p1
    dl = math.radians(b["lon"] - a["lon"])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * radius * math.asin(math.sqrt(h))


def rain_status(value: float | None) -> tuple[str, int]:
    if value is None:
        return "ไม่มีข้อมูล", 0
    if value > 90:
        return "วิกฤต", 4
    if value > 70:
        return "เสี่ยงสูง", 3
    if value > 35:
        return "เฝ้าระวัง", 2
    if value > 10:
        return "ฝนปานกลาง", 1
    return "ปกติ", 0


def water_status(level: int | None, text: str) -> tuple[str, int]:
    if level is None:
        return ("ล้นตลิ่ง", 4) if "ล้นตลิ่ง" in text else ("ไม่มีข้อมูล", 0)
    if level >= 5:
        return "ล้นตลิ่ง", 4
    if level == 4:
        return "วิกฤต", 3
    if level == 3:
        return "เฝ้าระวัง", 2
    return "ปกติ", 0


def fetch_storms() -> list[dict[str, str]]:
    try:
        payload = get_json("https://api-v3.thaiwater.net/api/v1/thaiwater30/public/storm_data")
        candidates = payload.get("data") or payload.get("storm") or payload.get("storms") or []
        if isinstance(candidates, dict):
            candidates = candidates.get("data") or candidates.get("items") or []
        storms = []
        for item in candidates if isinstance(candidates, list) else []:
            if not isinstance(item, dict):
                continue
            name = item.get("name") or item.get("storm_name") or item.get("typhoon_name")
            if isinstance(name, dict):
                name = name.get("th") or name.get("en")
            if name:
                storms.append({"name": str(name), "type": str(item.get("type") or item.get("storm_type") or "")})
        return storms
    except Exception as exc:
        print(f"Storm refresh skipped: {type(exc).__name__}: {exc}")
        return []


def fetch_estates() -> list[dict[str, Any]]:
    payload = get_json(
        ESTATE_URL,
        {
            "where": "1=1",
            "outFields": "OBJECTID,สำนักงานนิคมฯ,ละติจูด,ลองติจูด,Operations",
            "returnGeometry": "true",
            "outSR": "4326",
            "f": "json",
        },
    )
    estates = []
    for feature in payload.get("features", []):
        attrs, geometry = feature.get("attributes", {}), feature.get("geometry", {})
        lat = number(attrs.get("ละติจูด")) or number(geometry.get("y"))
        lon = number(attrs.get("ลองติจูด")) or number(geometry.get("x"))
        name = str(attrs.get("สำนักงานนิคมฯ") or "").strip()
        if name and lat is not None and lon is not None:
            estates.append(
                {
                    "id": attrs.get("OBJECTID"),
                    "name": name if "นิคม" in name else f"นิคมอุตสาหกรรม{name}",
                    "lat": lat,
                    "lon": lon,
                    "operations": attrs.get("Operations") or "",
                }
            )
    if not estates:
        raise RuntimeError("IEAT estate layer returned no locations")
    return estates


def nearest(point: dict[str, Any], estates: list[dict[str, Any]]) -> tuple[float, dict[str, Any]]:
    return min(
        ((distance_km(point, estate), estate) for estate in estates),
        key=lambda item: item[0],
    )


def fetch_rain(estates: list[dict[str, Any]]) -> list[dict[str, Any]]:
    payload = get_json(RAIN_URL)
    rows = []
    for item in payload.get("data", []):
        station, geocode = item.get("station", {}), item.get("geocode", {})
        lat, lon = number(station.get("tele_station_lat")), number(station.get("tele_station_long"))
        if lat is None or lon is None:
            continue
        rain = number(item.get("rain_24h"))
        status, score = rain_status(rain)
        point = {"lat": lat, "lon": lon}
        dist, estate = nearest(point, estates)
        if dist <= DISPLAY_RADIUS_KM:
            rows.append(
                {
                    "kind": "rainfall",
                    "station": th(station.get("tele_station_name")) or "สถานีฝน",
                    "station_code": station.get("tele_station_oldcode") or "",
                    "province": th(geocode.get("province_name")),
                    "district": th(geocode.get("amphoe_name")),
                    "lat": lat,
                    "lon": lon,
                    "rainfall_mm": rain,
                    "value_text": "ไม่มีข้อมูล" if rain is None else f"{rain:g} มม.",
                    "observed_at": item.get("rainfall_datetime") or "",
                    "status": status,
                    "severity_score": score,
                    "distance_km": round(dist, 1),
                    "nearest_estate": estate["name"],
                    "agency": th(item.get("agency", {}).get("agency_shortname")),
                }
            )
    return rows


def fetch_water(estates: list[dict[str, Any]]) -> list[dict[str, Any]]:
    payload = get_json(WATER_URL)
    data = payload.get("waterlevel_data", {}).get("data", [])
    rows = []
    for item in data:
        station, geocode = item.get("station", {}), item.get("geocode", {})
        lat, lon = number(station.get("tele_station_lat")), number(station.get("tele_station_long"))
        if lat is None or lon is None:
            continue
        point = {"lat": lat, "lon": lon}
        dist, estate = nearest(point, estates)
        if dist > DISPLAY_RADIUS_KM:
            continue
        situation = int(item["situation_level"]) if item.get("situation_level") is not None else None
        status, score = water_status(situation, str(item.get("diff_wl_bank_text") or ""))
        level = number(item.get("waterlevel_msl"))
        rows.append(
            {
                "kind": "waterlevel",
                "station": th(station.get("tele_station_name")) or "สถานีระดับน้ำ",
                "station_code": station.get("tele_station_oldcode") or "",
                "province": th(geocode.get("province_name")),
                "district": th(geocode.get("amphoe_name")),
                "lat": lat,
                "lon": lon,
                "waterlevel_msl": level,
                "storage_percent": number(item.get("storage_percent")),
                "value_text": "ไม่มีข้อมูล" if level is None else f"{level:g} ม.รทก.",
                "observed_at": item.get("waterlevel_datetime") or "",
                "status": status,
                "severity_score": score,
                "distance_km": round(dist, 1),
                "nearest_estate": estate["name"],
                "agency": th(item.get("agency", {}).get("agency_shortname")),
            }
        )
    return rows


def build_estate_watch(estates: list[dict[str, Any]], stations: list[dict[str, Any]]) -> list[dict[str, Any]]:
    watch = []
    for estate in estates:
        nearby = [
            station
            for station in stations
            if station["nearest_estate"] == estate["name"]
            and station["distance_km"] <= WATCH_RADIUS_KM
        ]
        alerts = [station for station in nearby if station["severity_score"] >= 2]
        if not alerts:
            continue
        alerts.sort(key=lambda row: (row["severity_score"], row.get("rainfall_mm") or -1), reverse=True)
        rain_values = [row["rainfall_mm"] for row in alerts if row.get("rainfall_mm") is not None]
        watch.append(
            {
                **estate,
                "status": alerts[0]["status"],
                "severity_score": alerts[0]["severity_score"],
                "alert_station_count": len(alerts),
                "rain_alert_count": sum(row["kind"] == "rainfall" for row in alerts),
                "water_alert_count": sum(row["kind"] == "waterlevel" for row in alerts),
                "max_rainfall_mm": max(rain_values, default=None),
                "nearest_alert_km": min(row["distance_km"] for row in alerts),
                "latest_observed_at": max((row["observed_at"] for row in alerts), default=""),
            }
        )
    watch.sort(key=lambda row: (row["severity_score"], row["max_rainfall_mm"] or -1), reverse=True)
    return watch



def fetch_latest_rain_image() -> bool:
    """Refresh the official TMD radar composite without deleting a valid prior image."""
    try:
        request = urllib.request.Request(
            RAIN_IMAGE_URL,
            headers={"User-Agent": USER_AGENT, "Accept": "image/gif,image/*"},
        )
        with urllib.request.urlopen(request, timeout=60) as response:
            image = response.read()
        if len(image) < 10_000 or not image.startswith((b"GIF87a", b"GIF89a")):
            raise RuntimeError("TMD radar response is not a valid GIF")
        RAIN_IMAGE_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        temporary = RAIN_IMAGE_OUTPUT.with_suffix(".tmp")
        temporary.write_bytes(image)
        temporary.replace(RAIN_IMAGE_OUTPUT)
        return True
    except Exception as exc:
        print(f"Rain image refresh skipped: {type(exc).__name__}: {exc}")
        return False

def main() -> int:
    now = datetime.now(timezone.utc).astimezone(ZoneInfo("Asia/Bangkok")).isoformat(timespec="seconds")
    previous = None
    try:
        previous = json.loads(OUTPUT.read_text(encoding="utf-8"))
    except Exception:
        pass
    result: dict[str, Any] = {
        "schema_version": 2,
        "status": "unavailable",
        "generated_at": now,
        "methodology": {
            "watch_radius_km": WATCH_RADIUS_KM,
            "display_radius_km": DISPLAY_RADIUS_KM,
            "rain_threshold_mm": 35,
            "note": "นับนิคมฯ เมื่อพบฝนมากกว่า 35 มม. หรือระดับน้ำเฝ้าระวังขึ้นไปภายใน 30 กม.",
        },
        "sources": [
            {"name": "ThaiWater ฝนสะสม 24 ชั่วโมง", "url": RAIN_URL},
            {"name": "ThaiWater ระดับน้ำ", "url": WATER_URL},
            {"name": "ตำแหน่งนิคมอุตสาหกรรม กนอ.", "url": ESTATE_URL},
        ],
        "estates": [],
        "estate_watch": [],
        "stations": [],
        "summary": {},
        "errors": [],
    }
    try:
        estates = fetch_estates()
        storms = fetch_storms()
        rain = fetch_rain(estates)
        water = fetch_water(estates)
        stations = rain + water
        stations.sort(
            key=lambda row: (row["severity_score"], row.get("rainfall_mm") or -1),
            reverse=True,
        )
        watch = build_estate_watch(estates, stations)
        related_alerts = [
            row
            for row in stations
            if row["severity_score"] >= 2 and row["distance_km"] <= WATCH_RADIUS_KM
        ]
        max_rain = max(
            (
                row["rainfall_mm"]
                for row in rain
                if row.get("rainfall_mm") is not None
                and row["distance_km"] <= WATCH_RADIUS_KM
            ),
            default=None,
        )
        risk_level = watch[0]["status"] if watch else "ปกติ"
        result.update(
            {
                "status": "ok",
                "estates": estates,
                "estate_watch": watch,
                "stations": stations[:100],
                "summary": {
                    "estate_total": len(estates),
                    "estate_count": len(watch),
                    "station_count": len(stations),
                    "alert_station_count": len(related_alerts),
                    "heavy_rain_estate_count": len(
                        {
                            row["nearest_estate"]
                            for row in related_alerts
                            if row["kind"] == "rainfall"
                            and (row.get("rainfall_mm") or 0) > 70
                        }
                    ),
                    "water_alert_estate_count": len(
                        {
                            row["nearest_estate"]
                            for row in related_alerts
                            if row["kind"] == "waterlevel"
                        }
                    ),
                    "critical_count": sum(row["severity_score"] >= 3 for row in related_alerts),
                    "rain_station_count": len(rain),
                    "waterlevel_station_count": len(water),
                    "waterlevel_alert_count": sum(
                        row["kind"] == "waterlevel" and row["severity_score"] >= 2
                        for row in related_alerts
                    ),
                    "max_rainfall_mm": max_rain,
                    "risk_level": risk_level,
                    "storm_count": len(storms),
                    "storm_names": [storm["name"] for storm in storms],
                },
            }
        )
    except Exception as exc:
        result["errors"].append(f"{type(exc).__name__}: {exc}")
        if previous and previous.get("status") == "ok":
            # Keep the last verified figures at the top level. A temporary API
            # failure must not turn every dashboard KPI into "pending".
            result.update(
                {
                    "status": "stale",
                    "generated_at": previous.get("generated_at", now),
                    "last_attempt_at": now,
                    "estates": previous.get("estates", []),
                    "estate_watch": previous.get("estate_watch", []),
                    "stations": previous.get("stations", []),
                    "summary": previous.get("summary", {}),
                }
            )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    json_text = json.dumps(result, ensure_ascii=False, indent=2)
    OUTPUT.write_text(json_text + "\n", encoding="utf-8")
    # Script fallback works in LINE in-app browsers that occasionally block
    # fetch(), while JSON remains the canonical machine-readable endpoint.
    SCRIPT_OUTPUT.write_text(
        "window.IEAT_THAIWATER_DATA = " + json_text + ";\n", encoding="utf-8"
    )
    fetch_latest_rain_image()
    print(
        f"ThaiWater feed status={result['status']} "
        f"estates={result.get('summary', {}).get('estate_count', 0)} "
        f"stations={result.get('summary', {}).get('station_count', 0)}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
