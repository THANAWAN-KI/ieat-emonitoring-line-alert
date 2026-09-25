"""Refresh observed flood polygons without exposing the GISTDA API key on GitHub Pages."""
import json
import os
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

API = "https://api-gateway.gistda.or.th/api/2.0/resources/features/flood/7days"
OUTPUT = Path("docs/data/gistda_flood_latest.geojson")
PAGE_SIZE = 100
MAX_PAGES = 100


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
    features, seen = [], set()
    for page in range(MAX_PAGES):
        batch = fetch_page(key, len(features))
        if not batch:
            break
        new = [f for f in batch if str(f.get("id") or f.get("properties", {}).get("_id") or f.get("geometry")) not in seen]
        if len(new) != len(batch):
            raise RuntimeError("GISTDA flood pagination repeated a feature; existing feed was retained")
        for f in new:
            seen.add(str(f.get("id") or f.get("properties", {}).get("_id") or f.get("geometry")))
        features.extend(new)
        print(f"Fetched flood page {page + 1}: {len(batch)} areas, total {len(features)}")
    else:
        raise RuntimeError("GISTDA flood feed exceeds the configured page limit; existing feed was retained")
    valid = [f for f in features if isinstance(f, dict) and isinstance(f.get("geometry"), dict)
             and f["geometry"].get("type") in ("Polygon", "MultiPolygon", "Point")]
    if features and not valid:
        raise RuntimeError("GISTDA flood geometries could not be parsed; existing feed was retained")
    result = {"type": "FeatureCollection", "features": valid,
              "metadata": {"source": "GISTDA Disaster Platform", "source_url": "https://disaster.gistda.or.th/flood",
                           "window_days": 7, "feature_count": len(valid), "retrieved_at": datetime.now(timezone.utc).isoformat()}}
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Saved {len(valid)} GISTDA flood features")


if __name__ == "__main__":
    main()
