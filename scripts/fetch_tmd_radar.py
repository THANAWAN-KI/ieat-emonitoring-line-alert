"""Cache a dated public TMD rain-rate image for the flood map (no browser CORS)."""
import base64
import json
import re
import struct
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

BASE = 'https://weather.tmd.go.th/composite/'
SOURCE = BASE + 'index_composite.html'
LIST = BASE + 'images_composite.list'
TARGET = Path(__file__).resolve().parents[1] / 'docs/data/tmd_radar_latest.json'

def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'IEAT-Flood-Monitor/1.0', 'Cache-Control': 'no-cache'})
    error = None
    for _ in range(2):
        try:
            with urllib.request.urlopen(req, timeout=25) as response:
                return response.read(4_000_000)
        except Exception as exc:
            error = exc
    raise error

def frames(text):
    out = []
    for line in text.splitlines():
        match = re.match(r'^\S+\s+"(\d{4}-\d{2}-\d{2} \d{2}:\d{2})"\s+overlay=(.+)$', line.strip())
        if not match:
            continue
        path = next((p.strip() for p in match[2].split(',') if re.fullmatch(r'zr/\d{2}\.png', p.strip())), None)
        if path:
            at = datetime.strptime(match[1], '%Y-%m-%d %H:%M').replace(tzinfo=timezone.utc)
            out.append((at, path))
    return sorted(out)

def main():
    previous = json.loads(TARGET.read_text()) if TARGET.exists() else None
    try:
        listed = frames(get(LIST).decode('utf-8-sig'))
        if not listed:
            raise ValueError('TMD did not publish dated frames')
        at, path = listed[-1]
        if at.timestamp() > datetime.now(timezone.utc).timestamp() + 300:
            raise ValueError('Radar date is in the future')
        if previous and at.isoformat() < previous['frames'][0]['at']:
            raise ValueError('Upstream image is older than the saved image')
        image_url = BASE + 'images/' + path
        png = get(image_url)
        if png[:8] != b'\x89PNG\r\n\x1a\n' or len(png) < 1000:
            raise ValueError('Invalid radar PNG')
        width, height = struct.unpack('>II', png[16:24])
        if (width, height) != (1800, 2644):
            raise ValueError('Unexpected radar dimensions; inspect georeferencing first')
        # Confirm the rotating slot still refers to the same time after image download.
        after = frames(get(LIST).decode('utf-8-sig'))
        if not after or after[-1] != (at, path):
            raise ValueError('Radar changed during download; retry next cycle')
        value = {
            'source': 'TMD Radar Composite', 'source_url': SOURCE,
            'fetched_at': datetime.now(timezone.utc).isoformat(),
            'bounds': [95.0, 4.0, 108.0, 22.5], 'unit': 'mm/h',
            'frames': [{'kind': 'observed', 'at': at.isoformat(), 'source_image_url': image_url,
                        'url': 'data:image/png;base64,' + base64.b64encode(png).decode()}]
        }
    except Exception as exc:
        print('TMD radar fetch failed:', str(exc))
        if previous:
            print('Retained image at', previous['frames'][0]['at'])
            return
        raise
    TARGET.parent.mkdir(parents=True, exist_ok=True)
    tmp = TARGET.with_suffix('.tmp')
    tmp.write_text(json.dumps(value, ensure_ascii=False, separators=(',', ':')))
    tmp.replace(TARGET)
    print('TMD radar image at', at.isoformat())

if __name__ == '__main__':
    main()
