"""Refresh public flood feeds; retain dated last-good data on source failure."""
import json
import urllib.request
from pathlib import Path
from datetime import datetime, timezone, timedelta
import concurrent.futures

ROOT = Path(__file__).resolve().parents[1] / "docs" / "data"
TARGET = ROOT / "popnix_latest.json"
SOURCES = {"canal": ("api_overview.php", "stations"), "road": ("api_roads.php", "roads"), "river": ("api_river.php", "stations")}
def fetch(item):
    key, (endpoint, rows) = item
    try:
        with urllib.request.urlopen("https://flood.pop.in.th/" + endpoint, timeout=25) as response:
            data = json.load(response)
        if not isinstance(data.get("summary"), dict) or not isinstance(data.get(rows), list):
            raise ValueError("Unexpected source schema")
        data["_fetched_at"] = datetime.now(timezone.utc).isoformat()
        return key, data, None
    except Exception as error:
        return key, None, str(error)
def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    try:
        previous = json.loads(TARGET.read_text())
    except (OSError, ValueError):
        previous = {}
    feeds = previous.get("feeds", {})
    failures = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        for key, data, error in executor.map(fetch, SOURCES.items()):
            if data is not None:
                feeds[key] = data
            else:
                failures[key] = error
    result = {"fetched_at": datetime.now(timezone.utc).isoformat(), "source": "https://flood.pop.in.th/", "feeds": feeds, "failures": failures}

    history = previous.get("history", [])
    if not isinstance(history, list):
        history = []
    cutoff = datetime.now(timezone.utc) - timedelta(days=30)
    def parsed(value):
        try:
            text = str(value or "").replace(" ", "T")
            if not text.endswith("Z") and "+" not in text[10:]:
                text += "+07:00"
            return datetime.fromisoformat(text.replace("Z", "+00:00"))
        except (ValueError, TypeError):
            return None
    history = [point for point in history if isinstance(point, dict)
               and isinstance(point.get("stations"), list)
               and parsed(point.get("time")) is not None
               and parsed(point["time"]) >= cutoff]
    if "river" not in failures:
        current = feeds.get("river", {}).get("stations", [])
        now = datetime.now(timezone.utc)
        valid = [station for station in current
                 if parsed(station.get("measured_at")) is not None
                 and -300 <= (now - parsed(station["measured_at"])).total_seconds() <= 21600
                 and station.get("wl") is not None]
        if valid:
            latest = max(parsed(station["measured_at"]) for station in valid)
            hour = latest.astimezone(timezone.utc).replace(minute=0, second=0, microsecond=0)
            keys = ("code", "oldcode", "river", "wl", "bank", "warn", "crit", "situation", "flow", "measured_at")
            point = {"time": latest.isoformat(), "hour": hour.isoformat(),
                     "stations": [{key: station.get(key) for key in keys} for station in valid]}
            same = next((i for i, sample in enumerate(history) if sample.get("hour") == point["hour"]), None)
            if same is None:
                history.append(point)
            else:
                # Preserve the highest observed discharge for the daily bars.
                prior_flow = {str(s.get("code")): s.get("flow_max", s.get("flow")) for s in history[same]["stations"]}
                for station in point["stations"]:
                    values = [v for v in (station.get("flow"), prior_flow.get(str(station["code"]))) if isinstance(v, (int, float))]
                    station["flow_max"] = max(values) if values else None
                history[same] = point
    history.sort(key=lambda point: parsed(point["time"]))
    result["history"] = history

    temporary = TARGET.with_suffix(".tmp")
    temporary.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    temporary.replace(TARGET)
    print("Feeds:", {key: len(value.get(SOURCES[key][1], [])) for key, value in feeds.items()}, "Failures:", failures)
if __name__ == "__main__":
    main()
