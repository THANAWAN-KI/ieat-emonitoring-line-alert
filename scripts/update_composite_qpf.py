"""Save TMD's 13:00 Thailand radar composite for the current day."""

import json
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.request import Request, urlopen


THAILAND = timezone(timedelta(hours=7))
today = datetime.now(THAILAND).date()
captured_at = datetime(today.year, today.month, today.day, 13, tzinfo=THAILAND)
if datetime.now(THAILAND) < captured_at:
    raise SystemExit("13:00 Thailand time has not arrived; keeping the previous image")

name = f"qpf_{today:%Y%m%d}0600.gif"
source = f"https://satda.tmd.go.th/wp-content/uploads/data/radar_composite/max/{name}"
request = Request(source, headers={"User-Agent": "Mozilla/5.0 IEAT radar report"})
with urlopen(request, timeout=35) as response:
    data = response.read(30_000_001)

if not data.startswith((b"GIF87a", b"GIF89a")) or not 100_000 < len(data) < 30_000_000:
    raise ValueError(f"TMD did not return a valid radar GIF for {name}")

root = Path(__file__).resolve().parents[1] / "docs"
image = root / "assets" / "composite-qpf-1300.gif"
meta = root / "data" / "composite-qpf.json"
image.parent.mkdir(parents=True, exist_ok=True)
meta.parent.mkdir(parents=True, exist_ok=True)
image.write_bytes(data)
meta.write_text(
    json.dumps(
        {
            "captured_at": captured_at.isoformat(timespec="seconds"),
            "image": "assets/composite-qpf-1300.gif",
            "source": source,
        },
        ensure_ascii=False,
    )
    + "\n",
    encoding="utf-8",
)
print(f"Saved {name}: {len(data)} bytes")
