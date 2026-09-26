"""Save the newest TMD radar composite acquired today in Thailand."""

import json
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

THAILAND = timezone(timedelta(hours=7))
UTC = timezone.utc
now = datetime.now(THAILAND)
if now.hour < 7:
    raise SystemExit("No radar frame from the current Thailand day yet")

# TMD's qpf filenames use UTC. Probe the 13:00 Thailand frame first,
# then the latest available quarter-hour frame from the same local day.
latest = min(now.astimezone(UTC).replace(second=0, microsecond=0),
             now.replace(hour=13, minute=0, second=0, microsecond=0).astimezone(UTC))
latest -= timedelta(minutes=latest.minute % 15)
first = now.replace(hour=7, minute=0, second=0, microsecond=0).astimezone(UTC)
root = Path(__file__).resolve().parents[1] / "docs"
image = root / "assets" / "composite-qpf-1300.gif"
meta = root / "data" / "composite-qpf.json"
existing = json.loads(meta.read_text(encoding="utf-8")) if meta.exists() else {}

for step in range(min(9, int((latest - first).total_seconds() // 900) + 1)):
    frame = latest - timedelta(minutes=15 * step)
    name = f"qpf_{frame:%Y%m%d%H%M}.gif"
    source = f"https://satda.tmd.go.th/wp-content/uploads/data/radar_composite/max/{name}"
    try:
        with urlopen(Request(source, headers={"User-Agent": "Mozilla/5.0 IEAT radar report"}), timeout=8) as response:
            data = response.read(30_000_001)
    except (HTTPError, URLError, TimeoutError):
        continue
    if not data.startswith((b"GIF87a", b"GIF89a")) or not 100_000 < len(data) < 30_000_000:
        continue
    captured_at = frame.astimezone(THAILAND).isoformat(timespec="seconds")
    if existing.get("captured_at") == captured_at and image.exists():
        print(f"Already saved {name}")
        break
    image.parent.mkdir(parents=True, exist_ok=True)
    meta.parent.mkdir(parents=True, exist_ok=True)
    image.write_bytes(data)
    meta.write_text(json.dumps({"captured_at": captured_at, "image": "assets/composite-qpf-1300.gif", "source": source}, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Saved {name}: {len(data)} bytes, captured {captured_at}")
    break
else:
    raise SystemExit("TMD has not published a valid radar frame for today; leaving yesterday's verified image unchanged")
