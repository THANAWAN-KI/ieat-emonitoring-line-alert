"""Save the latest medium-reservoir readings from ThaiWater."""
import json
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
URL = "https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/dam"
TARGET = Path(__file__).resolve().parents[1] / "docs/data/medium_reservoirs_latest.json"
def text(v):
    return str(v.get("th") or v.get("en") or "") if isinstance(v, dict) else str(v or "")
def number(v):
    if v is None or v == "": return None
    try: return float(v)
    except (ValueError, TypeError): return None
def normalize(data):
    rows = data.get("data", {}).get("dam_medium")
    if not isinstance(rows, list) or not rows: raise ValueError("No medium reservoir readings")
    unique = {}
    for r in sorted(rows, key=lambda r: str(r.get("dam_date") or ""), reverse=True):
        d, g = r.get("dam") or {}, r.get("geocode") or {}
        capacity, storage = number(d.get("normal_storage")), number(r.get("dam_storage"))
        percent = round(storage / capacity * 100, 2) if storage is not None and capacity and capacity > 0 else number(r.get("dam_storage_percent"))
        row = dict(id=d.get("id"), name=text(d.get("dam_name")), province=text(g.get("province_name")), district=text(g.get("amphoe_name")), lat=number(d.get("dam_lat")), lng=number(d.get("dam_long")), storage=storage, capacity=capacity, percent=percent, measured_at=r.get("dam_date"))
        if row["name"]: unique.setdefault(str(row["id"] or row["name"]), row)
    return list(unique.values())
def main():
    try:
        with urllib.request.urlopen(URL, timeout=30) as response: rows = normalize(json.load(response))
        data = dict(source_url=URL, fetched_at=datetime.now(timezone.utc).isoformat(), rows=rows)
        temporary = TARGET.with_suffix(".tmp")
        temporary.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        temporary.replace(TARGET)
        print("Medium reservoirs:", len(rows))
    except Exception as error: print("Reservoir refresh failed; retaining previous data:", error)
if __name__ == "__main__": main()
