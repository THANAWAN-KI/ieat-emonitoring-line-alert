"""Refresh related dam storage, discharge, and public camera metadata."""
import json
import math
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path
BASE = "https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/"
TARGET = Path(__file__).resolve().parents[1] / "docs/data/related_dams_latest.json"
def text(v): return str(v.get("th") or v.get("en") or "") if isinstance(v, dict) else str(v or "")
def number(v):
    if v is None or v == "": return None
    try:
        n = float(v)
        return n if math.isfinite(n) else None
    except (ValueError, TypeError): return None
def get(path):
    with urllib.request.urlopen(BASE + path, timeout=30) as response: return json.load(response)
def normalize(payload, cameras, yesterday=None):
    rows = payload.get("data", {}).get("dam_daily")
    if not isinstance(rows, list) or not rows: raise ValueError("No dam readings")
    cams = {str(c.get("dam_id")): c for c in cameras.get("data", []) if c.get("is_active") and c.get("media_type") == "img" and str(c.get("cctv_url", "")).startswith("https://")}
    prior = {str(r.get("dam", {}).get("id")): r for r in (yesterday or {}).get("data", {}).get("dam_daily", [])}
    unique = {}
    for r in sorted(rows, key=lambda r: str(r.get("dam_date") or ""), reverse=True):
        d, g, b = r.get("dam") or {}, r.get("geocode") or {}, r.get("basin") or {}
        capacity, storage = number(d.get("normal_storage")), number(r.get("dam_storage"))
        percent = round(storage / capacity * 100, 2) if storage is not None and capacity and capacity > 0 else number(r.get("dam_storage_percent"))
        cam = cams.get(str(d.get("id")), {})
        prev = prior.get(str(d.get("id")), {})
        released, previous = number(r.get("dam_released")), number(prev.get("dam_released"))
        delta = round(released - previous, 2) if released is not None and previous is not None and prev.get("dam_date") == str((datetime.fromisoformat(r["dam_date"]) - timedelta(days=1)).date()) else None
        row = dict(id=d.get("id"), name=text(d.get("dam_name")), province=text(g.get("province_name")), district=text(g.get("amphoe_name")), basin=text(b.get("basin_name")), lat=number(d.get("dam_lat")), lng=number(d.get("dam_long")), storage=storage, capacity=capacity, percent=percent, inflow=number(r.get("dam_inflow")), released=released, release_change=delta, measured_at=r.get("dam_date"), camera_url=cam.get("cctv_url"), camera_title=cam.get("title"))
        if row["name"]: unique.setdefault(row["name"], row)
    return list(unique.values())
def main():
    try:
        payload = get("dam")
        try: cameras = get("cctv")
        except Exception: cameras = {}
        try: yesterday = get("dam?dam_date=" + str((datetime.now(timezone(timedelta(hours=7))) - timedelta(days=1)).date()))
        except Exception: yesterday = {}
        rows = normalize(payload, cameras, yesterday)
        data = dict(source_url=BASE+"dam", fetched_at=datetime.now(timezone.utc).isoformat(), rows=rows)
        temporary = TARGET.with_suffix(".tmp")
        temporary.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        temporary.replace(TARGET)
        print("Related dams:", len(rows))
    except Exception as error: print("Dam refresh failed; retaining previous data:", error)
if __name__ == "__main__": main()
