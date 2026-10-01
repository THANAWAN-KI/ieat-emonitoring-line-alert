"""Refresh public flood feeds; retain dated last-good data on source failure."""
import json
import urllib.request
from pathlib import Path
from datetime import datetime, timezone
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
    temporary = TARGET.with_suffix(".tmp")
    temporary.write_text(json.dumps(result, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    temporary.replace(TARGET)
    print("Feeds:", {key: len(value.get(SOURCES[key][1], [])) for key, value in feeds.items()}, "Failures:", failures)
if __name__ == "__main__":
    main()
