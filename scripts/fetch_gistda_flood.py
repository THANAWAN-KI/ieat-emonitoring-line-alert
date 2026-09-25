"""Refresh observed flood locations without exposing the GISTDA API key."""
import json
import os
import re
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

API = "https://api-gateway.gistda.or.th/api/2.0/resources/features/flood/7days"
OUTPUT = Path("docs/data/gistda_flood_latest.geojson")
PAGE_SIZE = 1000
MAX_PAGES = 1000


def add_coordinates(value, bounds):
    if not isinstance(value, list) or not value:
        return
    if len(value) >= 2 and all(isinstance(v, (int, float)) for v in value[:2]):
        lon, lat = value[:2]
        if -180 <= lon <= 180 and -90 <= lat <= 90:
            bounds[0] = min(bounds[0], lon)
            bounds[1] = min(bounds[1], lat)
            bounds[2] = max(bounds[2], lon)
            bounds[3] = max(bounds[3], lat)
    else:
        for part in value:
            add_coordinates(part, bounds)


def round_coordinates(value):
    if isinstance(value, list) and value and isinstance(value[0], (int, float)):
        return [round(n, 6) for n in value]
    return [round_coordinates(part) for part in value]


def summary_feature(group):
    left, bottom, right, top = group["bounds"]
    props = group["properties"]
    props["summary_count"] = group["count"]
    props["file_name"] = group["scene"]
    props["flood_bounds"] = [left, bottom, right, top]
    return {"type": "Feature", "geometry": {"type": "MultiPolygon", "coordinates": group["polygons"]}, "properties": props}


def fetch_page(key, offset):
    url = API + "?" + urllib.parse.urlencode({"api_key": key, "limit": PAGE_SIZE, "offset": offset})
    request = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "IEAT-flood-monitor/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=55) as response:
            payload = json.load(response)
    except Exception:
        # URL-bearing HTTP errors can expose an API key in GitHub Actions logs.
        raise RuntimeError("GISTDA flood request failed; existing feed was retained") from None
    if isinstance(payload, dict) and payload.get("type") == "FeatureCollection":
        features = payload.get("features")
    elif isinstance(payload, dict):
        records = payload.get("data") or payload.get("result") or payload.get("features")
        features = records.get("features") if isinstance(records, dict) else records
    else:
        features = None
    if not isinstance(features, list):
        raise RuntimeError("GISTDA flood response has no recognized feature list; existing feed was retained")
    return features


def main():
    key = os.environ.get("GISTDA_API_KEY")
    if not key:
        print("GISTDA_API_KEY is not configured; keeping the previous feed")
        return
    groups, seen, offset = {}, set(), 0
    for page in range(MAX_PAGES):
        batch = fetch_page(key, offset)
        if not batch:
            break
        for f in batch:
            if not isinstance(f, dict) or not isinstance(f.get("geometry"), dict):
                continue
            uid = str(f.get("id") or f.get("properties", {}).get("_id") or f.get("geometry"))
            if uid in seen:
                raise RuntimeError("GISTDA flood pagination repeated a feature; existing feed was retained")
            seen.add(uid)
            geometry = f["geometry"]
            if geometry.get("type") not in ("Polygon", "MultiPolygon"):
                continue
            p = f.get("properties") or {}
            box = [float("inf"), float("inf"), float("-inf"), float("-inf")]
            coordinates = geometry.get("coordinates")
            add_coordinates(coordinates, box)
            if box[0] == float("inf"):
                continue
            place = (p.get("pv_idn") or p.get("pv_tn"), p.get("ap_idn") or p.get("ap_tn"), p.get("tb_idn") or p.get("tb_tn"))
            if not all(place):
                place = (*place, uid)
            if place not in groups:
                groups[place] = {"properties": {k: p.get(k) for k in ("pv_tn", "ap_tn", "tb_tn", "pv_idn", "ap_idn", "tb_idn")}, "count": 0,
                                 "bounds": box.copy(), "scene": "", "polygons": []}
            g = groups[place]
            g["count"] += 1
            parts = coordinates if geometry["type"] == "MultiPolygon" else [coordinates]
            g["polygons"].extend(round_coordinates(parts))
            g["bounds"] = [min(g["bounds"][0], box[0]), min(g["bounds"][1], box[1]),
                           max(g["bounds"][2], box[2]), max(g["bounds"][3], box[3])]
            scenes = re.findall(r"(?:19|20)\d{6}_\d{4}", str(p.get("file_name") or ""))
            if scenes:
                g["scene"] = max(g["scene"], *scenes)
        offset += len(batch)
        print(f"Fetched flood page {page + 1}: {len(batch)} areas, total {offset}, locations {len(groups)}", flush=True)
    else:
        raise RuntimeError("GISTDA flood feed exceeds the configured page limit; existing feed was retained")
    valid = [summary_feature(g) for g in groups.values()]
    if offset and not valid:
        raise RuntimeError("GISTDA flood geometries could not be parsed; existing feed was retained")
    result = {"type": "FeatureCollection", "features": valid,
              "metadata": {"source": "GISTDA Disaster Platform", "source_url": "https://disaster.gistda.or.th/flood",
                           "window_days": 7, "feature_count": offset, "location_count": len(valid),
                           "display_mode": "observed_flood_polygons_by_tambon", "retrieved_at": datetime.now(timezone.utc).isoformat()}}
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    encoded = json.dumps(result, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    if len(encoded) > 70_000_000:
        raise RuntimeError("Flood geometry exceeds publishable file size; existing feed was retained")
    OUTPUT.write_bytes(encoded)
    print(f"Saved {len(valid)} flood area groups from {offset} detected polygons ({len(encoded)} bytes)")


if __name__ == "__main__":
    main()
