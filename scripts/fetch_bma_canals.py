"""Refresh the Bangkok canal fallback without discarding the last successful file."""
import json
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

URL = "https://faonam.com/api/bma/canal_waterlevel"
TARGET = Path(__file__).resolve().parents[1] / "docs/data/bma_canal_latest.json"

def main():
    try:
        request = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0", "Accept": "application/json"})
        with urllib.request.urlopen(request, timeout=30) as response:
            payload = json.load(response)
        if not isinstance(payload.get("data"), list) or not payload["data"]:
            raise ValueError("No canal readings")
        payload["fetched_at"] = datetime.now(timezone.utc).isoformat()
        payload["source_url"] = URL
        temporary = TARGET.with_suffix(".tmp")
        temporary.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
        temporary.replace(TARGET)
        print("Canal stations:", len(payload["data"]))
    except Exception as error:
        print("Canal refresh failed; retaining previous observations:", error)

if __name__ == "__main__":
    main()
