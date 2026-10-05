import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import urlopen
SOURCE = 'https://emonitor.ieat.go.th/call_feed/geog/GeoData/station_all.json'
def snapshot(data):
    features=[]
    for f in data.get('features', []):
        p=f.get('properties', {})
        if str(p.get('Code', '')) in ('0', '9999') or p.get('StationTH') in (None, '-', ''):
            continue
        keep={k:v for k,v in p.items() if k in ('Code','StationTH','IndustryZone','Type','Status','LastUpdate','LastUpdate-TH') or k.endswith('_txt')}
        alarm=str(p.get('ParameterAlram', '')).strip()
        keep['ParameterAlram']='แจ้งเตือนจากแหล่งข้อมูล' if alarm and alarm.lower() not in ('-', 'none', 'null', 'nan', 'n/a') else '-'
        features.append({'type':'Feature','geometry':f.get('geometry'),'properties':keep})
    if not features:
        raise ValueError('No valid stations; preserve previous snapshot')
    return {'type':'FeatureCollection','source':SOURCE,'fetched_at':datetime.now(timezone.utc).isoformat(),'features':features}
if __name__ == '__main__':
    with urlopen(SOURCE, timeout=90) as response:
        result=snapshot(json.load(response))
    destination=Path('docs/emonitoring-stations.json')
    destination.parent.mkdir(parents=True,exist_ok=True)
    destination.write_text(json.dumps(result,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
