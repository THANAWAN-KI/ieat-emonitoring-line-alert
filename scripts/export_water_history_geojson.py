#!/usr/bin/env python3
import json
from pathlib import Path

ROOT = Path("docs/data/water-history")
OUT = Path("docs/data/exports")
OUT.mkdir(parents=True, exist_ok=True)

index = json.loads((ROOT / "index.json").read_text(encoding="utf-8"))

bank_by_code = {}
fp = Path("docs/data/faonam_rivers_latest.json")
if fp.exists():
    try:
        src = json.loads(fp.read_text(encoding="utf-8"))
        for r in src.get("rows", []):
            code = str(r.get("oldcode") or r.get("code") or "").strip()
            if code:
                bank_by_code[code] = r.get("bank")
    except Exception:
        pass

features = []
for year in (2023, 2024, 2025, 2026):
    data = json.loads((ROOT / f"waterlevel_{year}.json").read_text(encoding="utf-8"))
    for code, st in data.get("stations", {}).items():
        meta = index.get("stations", {}).get(code, {})
        lon = meta.get("lon", st.get("lon"))
        lat = meta.get("lat", st.get("lat"))
        if lon is None or lat is None:
            continue
        try:
            lon, lat = float(lon), float(lat)
        except Exception:
            continue

        bank = bank_by_code.get(code)
        try:
            bank = None if bank in (None, "") else float(bank)
        except Exception:
            bank = None

        for row in st.get("days", []):
            if len(row) < 5:
                continue
            date_text, daily_min, daily_max, daily_avg, raw_count = row[:5]
            avg_vs_bank = None
            if bank is not None and daily_avg is not None:
                try:
                    avg_vs_bank = round(float(daily_avg) - bank, 3)
                except Exception:
                    pass

            features.append({
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [lon, lat]},
                "properties": {
                    "station_code": code,
                    "station_id": str(meta.get("station_id") or st.get("station_id") or ""),
                    "station_name": meta.get("name") or st.get("name") or "",
                    "agency": meta.get("agency") or st.get("agency") or "",
                    "province": meta.get("province") or st.get("province") or "",
                    "amphoe": meta.get("amphoe") or st.get("amphoe") or "",
                    "basin": meta.get("basin") or st.get("basin") or "",
                    "date": date_text,
                    "date_iso": date_text + "T00:00:00+07:00",
                    "year": year,
                    "daily_min_msl": daily_min,
                    "daily_max_msl": daily_max,
                    "daily_avg_msl": daily_avg,
                    "raw_count": raw_count,
                    "bank_msl": bank,
                    "avg_vs_bank_m": avg_vs_bank,
                    "source": "ThaiWater / HII"
                }
            })

out = {
    "type": "FeatureCollection",
    "name": "thaiwater_waterlevel_history_2023_2026",
    "features": features
}
path = OUT / "thaiwater_waterlevel_history_2023_2026.geojson"
path.write_text(json.dumps(out, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
print(f"wrote {len(features)} features to {path} ({path.stat().st_size} bytes)")
