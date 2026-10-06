#!/usr/bin/env python3
"""Refresh named river stations from the public Faonam / ThaiWater feed."""
import json
import urllib.request
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

def text(value):
    return value.get('th', '') if isinstance(value, dict) else str(value or '')

def number(value):
    try:
        return float(value) if value is not None and str(value).strip() else None
    except (ValueError, TypeError):
        return None

def collect():
    urls = ['https://faonam.com/api/tw/public/waterlevel_load',
            'https://api-v3.thaiwater.net/api/v1/thaiwater30/public/waterlevel_load']
    error = None
    for url in urls:
        try:
            request = urllib.request.Request(url, headers={'Accept': 'application/json'})
            with urllib.request.urlopen(request, timeout=30) as response:
                payload = json.load(response)
            raw = payload['waterlevel_data']['data']
            if not isinstance(raw, list) or not raw:
                raise ValueError('Empty station feed')
            break
        except Exception as exception:
            error = exception
    else:
        raise RuntimeError('Unable to refresh river stations') from error
    rows = []
    for record in raw:
        station, area = record.get('station') or {}, record.get('geocode') or {}
        river = text(record.get('river_name')).strip()
        province_code = str(area.get('province_code', ''))
        if not river or not province_code.isdigit() or not 10 <= int(province_code) <= 96:
            continue
        level, bank = number(record.get('waterlevel_msl')), number(station.get('min_bank'))
        previous = number(record.get('waterlevel_msl_previous'))
        gap = round(level-bank, 2) if level is not None and bank is not None else None
        code = station.get('tele_station_oldcode')
        if not code:
            continue
        rows.append({
            'id': station.get('id'), 'code': code, 'oldcode': code,
            'name': text(station.get('tele_station_name')), 'river': river,
            'province': text(area.get('province_name')), 'district': text(area.get('amphoe_name')),
            'lat': number(station.get('tele_station_lat')), 'lng': number(station.get('tele_station_long')),
            'wl': level, 'bank': bank, 'diff': gap, 'flow': number(record.get('discharge')),
            'delta': round(level-previous, 2) if level is not None and previous is not None else None,
            'measured_at': record.get('waterlevel_datetime'),
            'source_name': 'ThaiWater / '+text((record.get('agency') or {}).get('agency_shortname')),
            'source_url': 'https://faonam.com/rivers',
            'status': 'ล้นตลิ่ง' if gap is not None and gap >= 0 else 'ใกล้ตลิ่ง' if record.get('situation_level') == 4 else 'ต่ำกว่าตลิ่ง'
        })
    counts = Counter(row['river'] for row in rows)
    if not rows:
        raise ValueError('No named river stations')
    # Faonam rivers picker shows rivers with at least three named stations.
    return {'fetched_at': datetime.now(timezone.utc).isoformat(), 'source_url': url,
            'rivers': [{'name': name, 'stations': count} for name, count in counts.items() if count >= 3],
            'rows': rows}

if __name__ == '__main__':
    data = collect()
    target = Path(__file__).resolve().parents[1] / 'docs/data/faonam_rivers_latest.json'
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = target.with_suffix('.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    temporary.replace(target)
    print(f"Updated {len(data['rivers'])} rivers / {len(data['rows'])} stations")
