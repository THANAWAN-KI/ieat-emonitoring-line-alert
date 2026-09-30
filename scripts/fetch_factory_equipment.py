"""Fetch factory-reported incident equipment for the GIS report."""
import json
from pathlib import Path
from datetime import datetime, timezone
from urllib.request import Request, urlopen
from urllib.error import URLError
SOURCE = "https://emonitor.ieat.go.th/envisys/gis/file/equimentPQbOLMB5TIGSziiCggBx77R8ITBd2aCRPaybDRoqZBejLTEQ4SICTxC1Vay15xIG.json"
ROOT = Path(__file__).resolve().parents[1] / "docs" / "data"
LATEST = ROOT / "equipment_latest.json"
META = ROOT / "equipment_meta.json"
def records(data):
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        if data.get("type") == "FeatureCollection" and isinstance(data.get("features"), list):
            return [{"properties": f.get("properties", {}), "__geometry": f.get("geometry")} for f in data["features"] if isinstance(f, dict)]
        for key in ("data", "items", "equipment", "equiment", "records", "results"):
            if key in data:
                try:
                    return records(data[key])
                except ValueError:
                    pass
        arrays = [v for v in data.values() if isinstance(v, list) and (not v or isinstance(v[0], dict))]
        if len(arrays) == 1:
            return arrays[0]
        if data and all(isinstance(v, dict) for v in data.values()):
            return [{"source_record_id": k, **v} for k, v in data.items()]
    raise ValueError("Unsupported equipment JSON structure")
def write(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(value, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    tmp.replace(path)
def main():
    checked = datetime.now(timezone.utc).isoformat()
    prior = json.loads(META.read_text()) if META.exists() else {}
    try:
        request = Request(SOURCE, headers={"User-Agent": "IEAT-GIS-equipment-sync/1.0", "Accept": "application/json"})
        with urlopen(request, timeout=90) as response:
            raw = response.read(50 * 1024 * 1024 + 1)
            last_modified = response.headers.get("Last-Modified")
        if len(raw) > 50 * 1024 * 1024:
            raise ValueError("Equipment feed exceeds 50 MiB")
        data = json.loads(raw.decode("utf-8-sig"))
        rows = records(data)
        if any(not isinstance(row, dict) for row in rows):
            raise ValueError("Equipment records must be JSON objects")
        write(LATEST, {"data": rows})
        write(META, {"status": "ok", "source_url": SOURCE, "checked_at": checked,
                     "fetched_at": checked, "source_last_modified": last_modified,
                     "record_count": len(rows), "availability_verified": False})
        print(f"Saved {len(rows)} equipment records")
    except (URLError, ValueError, OSError) as error:
        write(META, {**prior, "status": "stale" if LATEST.exists() else "unavailable",
                     "source_url": SOURCE, "checked_at": checked, "error": str(error)})
        print("Equipment fetch failed; retained last successful dataset")
if __name__ == "__main__":
    main()
