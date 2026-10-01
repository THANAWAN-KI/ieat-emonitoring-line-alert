"""Build province-level monitoring from official public ThaiWater endpoints."""
import concurrent.futures
import json
import math
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "docs" / "data"
TARGET = ROOT / "provincial_water_latest.json"
BASE = "https://api-v3.thaiwater.net/api/v1/thaiwater30/"
ENDPOINTS = {"water": "public/waterlevel_load", "rain": "public/rain_24h", "dam": "analyst/dam", "warning": "public/warning"}
def text(value):
    return str(value.get("th") or value.get("en") or "") if isinstance(value, dict) else str(value or "")
def number(value):
    if value is None or value == "": return None
    try:
        n = float(value)
        return n if math.isfinite(n) else None
    except (TypeError, ValueError): return None
def normalize(key, payload):
    if key == "warning":
        rows = payload.get("data")
        if not isinstance(rows, list): raise ValueError("Missing warnings")
        return [{"time": r.get("datetime"), "message": str(r.get("message") or "")} for r in rows]
    rows = payload.get("waterlevel_data", {}).get("data") if key == "water" else payload.get("data", {}).get("dam_daily") if key == "dam" else payload.get("data")
    if not isinstance(rows, list) or not rows: raise ValueError("Missing station list")
    result = []
    for r in rows:
        s = r.get("dam" if key == "dam" else "station") or {}
        g = r.get("geocode") or {}
        item = {"id": s.get("id"), "name": text(s.get("dam_name" if key == "dam" else "tele_station_name")), "code": s.get("dam_oldcode" if key == "dam" else "tele_station_oldcode", ""), "province": text(g.get("province_name")), "province_code": str(g.get("province_code") or ""), "district": text(g.get("amphoe_name")), "basin": text((r.get("basin") or {}).get("basin_name")), "basin_id": (r.get("basin") or {}).get("id"), "agency": text((r.get("agency") or {}).get("agency_shortname")), "lat": number(s.get("dam_lat" if key == "dam" else "tele_station_lat")), "lng": number(s.get("dam_long" if key == "dam" else "tele_station_long"))}
        if key == "water":
            item.update(wl=number(r.get("waterlevel_msl")), bank=number(s.get("min_bank")), diff=number(r.get("diff_wl_bank")), discharge=number(r.get("discharge")), previous=number(r.get("waterlevel_msl_previous")), measured_at=r.get("waterlevel_datetime"), river=text(r.get("river_name")))
        elif key == "rain":
            item.update(rain=number(r.get("rain_24h")), measured_at=r.get("rainfall_datetime"))
        else:
            item.update(storage=number(r.get("dam_storage")), percent=number(r.get("dam_storage_percent")), inflow=number(r.get("dam_inflow")), released=number(r.get("dam_released")), capacity=number(s.get("normal_storage")), measured_at=r.get("dam_date"))
        if key == "dam" and item["capacity"] is not None and item["capacity"] > 0 and item["storage"] is not None:
            item["percent"] = round(item["storage"] / item["capacity"] * 100, 2)
        result.append(item)
    if key == "dam":
        unique = {}
        for item in sorted(result, key=lambda r: str(r["measured_at"] or ""), reverse=True):
            identity = (item["code"] or item["name"], item["basin_id"])
            unique.setdefault(identity, item)
        result = list(unique.values())
    return result
def fetch(key):
    try:
        with urllib.request.urlopen(BASE + ENDPOINTS[key], timeout=30) as response:
            rows = normalize(key, json.load(response))
        return key, {"fetched_at": datetime.now(timezone.utc).isoformat(), "source_url": BASE + ENDPOINTS[key], "rows": rows}, None
    except Exception as error: return key, None, str(error)
def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    try: previous = json.loads(TARGET.read_text())
    except (OSError, ValueError): previous = {}
    feeds = previous.get("feeds", {})
    failures = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor:
        for key, data, error in executor.map(fetch, ENDPOINTS):
            if data is not None: feeds[key] = data
            else: failures[key] = error
    result = {"fetched_at": datetime.now(timezone.utc).isoformat(), "feeds": feeds, "failures": failures}
    temporary = TARGET.with_suffix(".tmp")
    temporary.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    temporary.replace(TARGET)
    print({key: len(feed["rows"]) for key, feed in feeds.items()}, failures)
if __name__ == "__main__": main()
