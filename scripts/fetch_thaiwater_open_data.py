#!/usr/bin/env python3
"""Fetch public HII/ThaiWater open data and prepare a small IEAT dashboard feed."""
from __future__ import annotations

import csv
import io
import json
import math
import os
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo

CATALOGS = (
    "https://datagov.hii.or.th/api/3/action",
    "https://data.hii.or.th/api/3/action",
)
WEBMAP_DATA = "https://ieat.maps.arcgis.com/sharing/rest/content/items/590841b3f03147f38703740281ff87a6/data?f=json"
OUTPUT = Path("docs/data/thaiwater_latest.json")
USER_AGENT = "IEAT-Disaster-Support/1.0 (+https://www.ieat.go.th/)"
FALLBACK_ESTATE = {"name": "นิคมอุตสาหกรรมภาคใต้ จังหวัดสงขลา", "lat": 6.997, "lon": 100.475, "source": "IEAT fallback"}


def request(url: str, timeout: int = 45) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/json,text/csv,*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as response:
        return response.read()


def get_json(url: str) -> dict[str, Any]:
    return json.loads(request(url).decode("utf-8-sig"))


def ckan(action: str, **params: str) -> Any:
    errors = []
    for catalog in CATALOGS:
        try:
            url = f"{catalog}/{action}?{urllib.parse.urlencode(params)}"
            payload = get_json(url)
            if payload.get("success"):
                return payload["result"]
            errors.append(f"{catalog}: action failed")
        except Exception as exc:
            errors.append(f"{catalog}: {exc}")
    raise RuntimeError("; ".join(errors))


def package(name: str, query: str) -> dict[str, Any]:
    try:
        return ckan("package_show", id=name)
    except Exception:
        found = ckan("package_search", q=query, rows="10").get("results", [])
        if not found:
            raise RuntimeError(f"Dataset not found: {query}")
        return found[0]


def resource(dataset: dict[str, Any], formats: tuple[str, ...]) -> dict[str, Any]:
    choices = [r for r in dataset.get("resources", []) if str(r.get("format", "")).upper() in formats and r.get("url")]
    if not choices:
        raise RuntimeError(f"No {formats} resource in {dataset.get('name')}")
    return choices[0]


def rows_from_csv(url: str, limit: int = 6000) -> list[dict[str, str]]:
    data = request(url, timeout=60)
    if len(data) > 25_000_000:
        raise RuntimeError("CSV resource is larger than 25 MB")
    text = data.decode("utf-8-sig", errors="replace")
    return list(csv.DictReader(io.StringIO(text)))[:limit]


def key(row: dict[str, Any], names: tuple[str, ...]) -> str | None:
    normalized = {str(k).lower().replace("_", "").replace("-", ""): k for k in row}
    for name in names:
        token = name.lower().replace("_", "").replace("-", "")
        if token in normalized and row.get(normalized[token]) not in (None, ""):
            return str(row[normalized[token]]).strip()
    return None


def number(value: str | None) -> float | None:
    try:
        return float(str(value).replace(",", ""))
    except (TypeError, ValueError):
        return None


def haversine(a: dict[str, Any], b: dict[str, Any]) -> float:
    r = 6371.0
    p1, p2 = math.radians(a["lat"]), math.radians(b["lat"])
    dp = p2 - p1
    dl = math.radians(b["lon"] - a["lon"])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(h))


def normalize_station(row: dict[str, str]) -> dict[str, Any] | None:
    lat = number(key(row, ("latitude", "lat", "station_lat", "y")))
    lon = number(key(row, ("longitude", "lon", "lng", "station_long", "x")))
    rainfall = number(key(row, ("rainfall", "rain", "rain_24h", "rain24h", "daily_rain", "value")))
    if lat is None or lon is None or not (-90 <= lat <= 90 and -180 <= lon <= 180):
        return None
    return {
        "station": key(row, ("station_name", "station", "name", "tele_station_name", "station_th")) or "ไม่ระบุชื่อสถานี",
        "station_code": key(row, ("station_code", "station_id", "code", "id")) or "",
        "province": key(row, ("province_name", "province", "province_th")) or "",
        "district": key(row, ("amphoe_name", "district", "amphoe")) or "",
        "lat": lat,
        "lon": lon,
        "rainfall_mm": rainfall,
        "observed_at": key(row, ("datetime", "date_time", "measure_time", "rainfall_datetime", "date", "time")) or "",
    }


def estate_name(attributes: dict[str, Any]) -> str:
    for k, value in attributes.items():
        if value and any(word in k.lower() for word in ("name", "estate", "นิคม")):
            return str(value)
    return "นิคมอุตสาหกรรม"


def center(geometry: dict[str, Any]) -> tuple[float, float] | None:
    if "x" in geometry and "y" in geometry:
        return float(geometry["y"]), float(geometry["x"])
    points = [p for ring in geometry.get("rings", []) for p in ring if len(p) >= 2]
    if points:
        return sum(p[1] for p in points) / len(points), sum(p[0] for p in points) / len(points)
    return None


def discover_estates() -> list[dict[str, Any]]:
    estates: list[dict[str, Any]] = []
    try:
        webmap = get_json(WEBMAP_DATA)
        for layer in webmap.get("operationalLayers", []):
            title = str(layer.get("title", ""))
            if not any(word in title.lower() for word in ("นิคม", "estate", "industrial")):
                continue
            url = layer.get("url")
            if not url:
                continue
            query = urllib.parse.urlencode({"where": "1=1", "outFields": "*", "returnGeometry": "true", "outSR": "4326", "f": "json"})
            data = get_json(f"{url.rstrip('/')}/query?{query}")
            for feature in data.get("features", []):
                point = center(feature.get("geometry", {}))
                if point:
                    estates.append({"name": estate_name(feature.get("attributes", {})), "lat": point[0], "lon": point[1], "source": "IEAT ArcGIS Web Map"})
    except Exception as exc:
        print(f"Estate discovery warning: {exc}")
    return estates[:100] or [FALLBACK_ESTATE]


def severity(rain: float | None) -> str:
    if rain is None:
        return "ไม่มีข้อมูล"
    if rain >= 90:
        return "วิกฤต"
    if rain >= 70:
        return "เสี่ยงสูง"
    if rain >= 35:
        return "เฝ้าระวัง"
    return "ปกติ"


def previous() -> dict[str, Any] | None:
    try:
        return json.loads(OUTPUT.read_text(encoding="utf-8"))
    except Exception:
        return None


def main() -> int:
    now = datetime.now(timezone.utc).astimezone(ZoneInfo("Asia/Bangkok")).isoformat(timespec="seconds")
    result: dict[str, Any] = {
        "schema_version": 1,
        "status": "unavailable",
        "generated_at": now,
        "source": {"name": "คลังข้อมูลน้ำแห่งชาติ (ThaiWater) / สสน.", "catalog": "https://datagov.hii.or.th/", "license": "Creative Commons Non-Commercial (Any)"},
        "estates": [], "stations": [], "summary": {}, "errors": [],
    }
    try:
        rainfall_set = package("hii-rainfall", "ปริมาณฝน")
        rainfall_resource = resource(rainfall_set, ("CSV",))
        raw_rows = rows_from_csv(rainfall_resource["url"])
        stations = [s for s in (normalize_station(row) for row in raw_rows) if s]
        estates = discover_estates()
        related: list[dict[str, Any]] = []
        for station in stations:
            nearest = min(((haversine(station, estate), estate) for estate in estates), key=lambda item: item[0])
            if nearest[0] <= 100:
                station["distance_km"] = round(nearest[0], 1)
                station["nearest_estate"] = nearest[1]["name"]
                station["status"] = severity(station["rainfall_mm"])
                related.append(station)
        related.sort(key=lambda item: (item["rainfall_mm"] is not None, item["rainfall_mm"] or -1), reverse=True)
        max_rain = max((s["rainfall_mm"] for s in related if s["rainfall_mm"] is not None), default=None)
        result.update({
            "status": "ok",
            "estates": estates,
            "stations": related[:30],
            "summary": {
                "estate_count": len({s["nearest_estate"] for s in related if s["status"] != "ปกติ"}),
                "station_count": len(related),
                "critical_count": sum(s["status"] in ("วิกฤต", "เสี่ยงสูง") for s in related),
                "max_rainfall_mm": max_rain,
                "risk_level": severity(max_rain),
            },
            "resource": {"dataset": rainfall_set.get("title"), "name": rainfall_resource.get("name"), "url": rainfall_resource.get("url"), "metadata_modified": rainfall_set.get("metadata_modified")},
        })
    except Exception as exc:
        old = previous()
        result["errors"].append("ThaiWater Open Data temporarily unavailable")
        if old and old.get("status") == "ok":
            result["last_success"] = {k: old.get(k) for k in ("generated_at", "estates", "stations", "summary", "resource")}
        elif old:
            result["generated_at"] = old.get("generated_at") or now
        print(f"ThaiWater fetch warning: {exc}")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"ThaiWater feed status: {result['status']}; stations: {len(result['stations'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
