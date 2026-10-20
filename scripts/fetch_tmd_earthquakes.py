"""Fetch the official TMD RSS without inventing unavailable depth/impact data."""
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

URL = 'https://earthquake.tmd.go.th/feed/rss_inside.xml'

def parse_feed(raw):
    root = ET.fromstring(raw)
    features = []
    for item in root.findall('./channel/item'):
        title = item.findtext('title', '')
        description = item.findtext('description', '')
        link = item.findtext('link', '').strip()
        coords = re.search(r'\((-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)\)', title)
        mag = re.search(r'ขนาด\s*(\d+(?:\.\d+)?)', title + ' ' + description)
        if not coords or not mag or not link.startswith('https://earthquake.tmd.go.th/'):
            continue
        try:
            when = parsedate_to_datetime(item.findtext('pubDate', ''))
            if when.tzinfo is None:
                continue
            latitude, longitude = map(float, coords.groups())
            if not (-90 <= latitude <= 90 and -180 <= longitude <= 180):
                continue
            place = title.split('(', 1)[0].replace('แผ่นดินไหว', '', 1).strip()
            identifier = link.rsplit('=', 1)[-1]
            features.append({'type': 'Feature', 'id': 'tmd-' + identifier,
                'geometry': {'type': 'Point', 'coordinates': [longitude, latitude, None]},
                'properties': {'mag': float(mag.group(1)), 'place': place,
                    'time': int(when.timestamp()*1000), 'url': link, 'source': 'TMD',
                    'types': '', 'detail': None, 'status': 'published', 'magType': None}})
        except (ValueError, TypeError, OverflowError):
            continue
    if not features:
        raise ValueError('No valid TMD items; preserving previous data')
    features = sorted({f['id']: f for f in features}.values(), key=lambda f:f['properties']['time'], reverse=True)
    return {'type':'FeatureCollection', 'metadata': {
        'source':'TMD RSS', 'url':URL, 'fetchedAt':datetime.now(timezone.utc).isoformat(),
        'coverage':'Recent RSS items only, not a complete historical catalog',
        'count':len(features), 'oldestEvent':features[-1]['properties']['time'],
        'latestEvent':features[0]['properties']['time']}, 'features':features}

def main():
    request = urllib.request.Request(URL, headers={'User-Agent':'IEAT-earthquake-dashboard/1.0'})
    with urllib.request.urlopen(request, timeout=45) as response:
        data = parse_feed(response.read())
    output = Path(sys.argv[1] if len(sys.argv)>1 else 'docs/data/earthquake-tmd.json')
    output.parent.mkdir(parents=True, exist_ok=True)
    temp = output.with_suffix('.tmp')
    temp.write_text(json.dumps(data, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    temp.replace(output)
    print('Updated', len(data['features']), 'official TMD events')

if __name__ == '__main__':
    main()
