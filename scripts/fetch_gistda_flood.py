"""Refresh observed flood polygons without exposing the GISTDA API key on GitHub Pages."""
import json
import os
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

API = "https://api-gateway.gistda.or.th/api/2.0/resources/features/flood/7days"
OUTPUT = Path("docs/data/gistda_flood_latest.geojson")


def main():
    key = os.environ.get("GISTDA_API_KEY")
    if not key:
        print("GISTDA_API_KEY is not configured; keeping the previous feed")
        return
    url = API + "?" + urllib.parse.urlencode({"api_key": key})
    request = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "IEAT-flood-monitor/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=35) as response:
            payload = json.load(response)
    except Exception as exc:
        # Avoid printing an exception that might include the URL or secret.
        raise RuntimeError("GISTDA flood request failed; existing feed was retained") from None
    if isinstance(payload, dict) and payload.get("type") == "FeatureCollection":
        features = payload.get("features")
    elif isinstance(payload, dict):
        records = payload.get("data") or payload.get("result") or payload.get("features")
        if isinstance(records, dict):
            features = records.get("features")
        elif isinstance(records, list):
            features = records
        else:
            features = None
    else:
        features = None
    if not isinstance(features, list):
        raise RuntimeError("GISTDA flood response has no recognized feature list; existing feed was retained")
    valid = [f for f in features if isinstance(f, dict) and isinstance(f.get("geometry"), dict)
             and f["geometry"].get("type") in ("Polygon", "MultiPolygon", "Point")]
    if features and not valid:
        raise RuntimeError("GISTDA flood geometries could not be parsed; existing feed was retained")
    result = {"type": "FeatureCollection", "features": valid,
              "metadata": {"source": "GISTDA Disaster Platform", "source_url": "https://disaster.gistda.or.th/flood",
                           "window_days": 7, "retrieved_at": datetime.now(timezone.utc).isoformat()}}
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"Saved {len(valid)} GISTDA flood features")


if __name__ == "__main__":
    main()
