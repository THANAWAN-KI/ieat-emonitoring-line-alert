#!/usr/bin/env python3
"""Fetch latest Google Flood Forecasting statuses for Thailand as GeoJSON."""
import json
import os
import pathlib
import sys
import urllib.error
import urllib.parse
import urllib.request

API = "https://floodforecasting.googleapis.com/v1/floodStatus:searchLatestFloodStatusByArea"
OUT = pathlib.Path("data/google_flood_status_th.geojson")


def fetch(key):
    statuses, token, seen = [], None, set()
    while True:
        body = {"regionCode": "TH", "pageSize": 10000, "includeNonQualityVerified": False}
        if token:
            body["pageToken"] = token
        req = urllib.request.Request(
            API + "?" + urllib.parse.urlencode({"key": key}),
            data=json.dumps(body).encode(),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=45) as response:
                payload = json.load(response)
        except urllib.error.HTTPError as exc:
            raise RuntimeError(
                f"Google API returned HTTP {exc.code}; check API access and key"
            ) from None
        statuses.extend(payload.get("floodStatuses", []))
        next_token = payload.get("nextPageToken")
        if not next_token:
            return statuses
        if next_token in seen:
            raise RuntimeError("Repeated pagination token")
        seen.add(next_token)
        token = next_token


def convert(statuses):
    features = []
    for status in statuses:
        loc = status.get("gaugeLocation") or {}
        try:
            lat, lon = float(loc["latitude"]), float(loc["longitude"])
        except (KeyError, ValueError, TypeError):
            continue
        if not (-90 <= lat <= 90 and -180 <= lon <= 180):
            continue
        period = status.get("forecastTimeRange") or {}
        features.append({
            "type": "Feature",
            "geometry": {"type": "Point", "coordinates": [lon, lat]},
            "properties": {
                "gauge_id": str(status.get("gaugeId", "")),
                "severity": str(status.get("severity", "UNKNOWN")),
                "trend": str(status.get("forecastTrend", "")),
                "issued_time": str(status.get("issuedTime", "")),
                "forecast_start": str(period.get("start", "")),
                "forecast_end": str(period.get("end", "")),
                "source": str(status.get("source", "")),
                "quality_verified": bool(status.get("qualityVerified", False)),
            },
        })
    return {"type": "FeatureCollection", "features": features}


def main():
    key = os.getenv("FLOODS_API_KEY")
    if not key:
        sys.exit("Missing FLOODS_API_KEY secret; no output changed")
    collection = convert(fetch(key))
    if not collection["features"]:
        sys.exit("No valid Thai gauge features returned; preserving previous output")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    temp = OUT.with_suffix(".tmp")
    temp.write_text(json.dumps(collection, ensure_ascii=False) + "\n", encoding="utf-8")
    temp.replace(OUT)
    print(f"Wrote {len(collection['features'])} gauge features")


if __name__ == "__main__":
    main()
