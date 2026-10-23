"""Publish verified IEAT water records and drought context; never synthesize observations."""
import concurrent.futures
import datetime as dt
import json
import math
import os
from pathlib import Path
import re
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1] if Path(__file__).parent.name == 'scripts' else Path(__file__).parent
OUT = ROOT / 'docs/data'
WATER = 'https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/' + urllib.parse.quote('Data_การใช้น้ำในพื้นที่นิคม') + '/FeatureServer/0'
DAM = 'https://api-v3.thaiwater.net/api/v1/thaiwater30/analyst/dam'
WRI = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/aqueduct_water_risk/FeatureServer/1'
NOW = dt.datetime.now(dt.timezone.utc).isoformat()

def get(url, params=None, text=False):
    if params: url += ('&' if '?' in url else '?') + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'IEAT-DroughtDashboard/1.0'})
    with urllib.request.urlopen(req, timeout=35) as response: raw = response.read().decode('utf-8')
    if text: return raw
    data = json.loads(raw)
    if isinstance(data, dict) and data.get('error'): raise ValueError(str(data['error']))
    return data

def number(v):
    if v is None or str(v).strip() in ('', '-', '–', 'ไม่มีข้อมูล'): return None
    try:
        n = float(str(v).replace(',', '').strip())
        return n if math.isfinite(n) and n >= 0 else None
    except (TypeError, ValueError): return None

def write(name, data):
    OUT.mkdir(parents=True, exist_ok=True)
    target = OUT / name
    temp = target.with_suffix(target.suffix + '.tmp')
    temp.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf-8')
    temp.replace(target)

def water():
    count = int(get(WATER + '/query', {'f':'json','where':'1=1','returnCountOnly':'true'})['count'])
    rows, offset = [], 0
    while offset < count:
        page = get(WATER + '/query', {'f':'json','where':'1=1','outFields':'*','returnGeometry':'true','outSR':4326,'orderByFields':'ObjectId','resultOffset':offset,'resultRecordCount':1000})
        features = page.get('features', [])
        if not features: raise ValueError('Incomplete water source pagination')
        rows.extend(features); offset += len(features)
    if len(rows) != count: raise ValueError('Water source count changed; retain prior snapshot')
    columns = ['year','month','name','operation','use','reserve','operators','area','reused','lat','lon','id','source_date']
    values = []
    for row in rows:
        a, g = row['attributes'], row.get('geometry') or {}
        lat, lon = number(g.get('y', a.get('Latitude'))), number(g.get('x', a.get('Longitude')))
        if lat is None or lon is None or not (5 <= lat <= 21 and 97 <= lon <= 106): lat = lon = None
        values.append([a.get('ปี'), a.get('เดือน'), str(a.get('นิคมอุตสาหกรรม') or '').strip(), a.get('สายปฏิบัติการ'), number(a.get('ปริมาณน้ำใช้')), number(a.get('ปริมาณน้ำสำรอง')), number(a.get('ผู้ประกอบการ')), number(a.get('พื้นที่__ไร่_')), number(a.get('น้ำ_3R')), lat, lon, a.get('ObjectId'), a.get('วันที่')])
    return {'schema':1,'fetched_at':NOW,'status':'ok','source_url':WATER,'source_count':count,'columns':columns,'rows':values,'units':{'use':'m3/month','reserve':'m3 reported stock; usable volume not independently confirmed','reused':'m3/month as reported'},'methodology':'Days = reported reserve / (reported monthly use / calendar days). Assumes reported stock usable, no new supply; estimate, not a current shortage declaration.'}

def dams():
    raw = get(DAM)['data']; result = []
    for kind in ['dam_daily', 'dam_medium']:
        for r in raw.get(kind, []):
            d, geo = r.get('dam') or {}, r.get('geocode') or {}
            lat, lon = number(d.get('dam_lat')), number(d.get('dam_long'))
            if lat is None or lon is None: continue
            result.append({'id':str(d.get('id')),'name':(d.get('dam_name') or {}).get('th',''),'lat':lat,'lon':lon,'province':(geo.get('province_name') or {}).get('th',''),'basin':((r.get('basin') or {}).get('basin_name') or {}).get('th',''),'storage':number(r.get('dam_storage')),'usable':number(r.get('dam_uses_water')),'percent':number(r.get('dam_storage_percent')),'capacity':number(d.get('normal_storage')),'inflow':number(r.get('dam_inflow')),'released':number(r.get('dam_released')),'at':r.get('dam_date'),'source_kind':kind})
    return {'status':'ok','source_url':DAM,'fetched_at':NOW,'unit':'million_m3; inflow/released million_m3/day','rows':result}

def tmd():
    base = 'https://www.tmd.go.th'
    html = get(base + '/forecast/agromet/drought', text=True)
    paths = list(dict.fromkeys(re.findall(r'/forecast/agromet/drought/(\d{8})', html)))
    if not paths: raise ValueError('No dated TMD drought publication')
    valid = sorted((dt.datetime.strptime(s,'%d%m%Y').date(), s) for s in paths)
    issued, key = valid[-1]; url = base + '/forecast/agromet/drought/' + key
    article = get(url, text=True)
    pdfs = re.findall(r'(?:href|src)=["\']([^"\']*?/media/[^"\']*?drought[^"\']*?\.pdf)["\']', article, flags=re.I)
    pdf = urllib.parse.urljoin(base,pdfs[0]) if pdfs else None
    return {'status':'ok','source_url':url,'published_at':issued.isoformat(),'pdf_url':pdf,'numeric_spi':None,'note':'Dated TMD publication; no numeric estate-level SPI is inferred.'}

def wri():
    count = int(get(WRI+'/query',{'f':'json','where':"name_0 = 'Thailand'",'returnCountOnly':'true'})['count'])
    features, offset = [], 0
    while offset < count:
        page = get(WRI+'/query',{'f':'geojson','where':"name_0 = 'Thailand'",'outFields':'name_1,bws_label,bws_cat,drr_label,drr_cat','returnGeometry':'true','outSR':4326,'geometryPrecision':3,'maxAllowableOffset':0.015,'resultOffset':offset,'resultRecordCount':200})
        rows = page.get('features',[])
        if not rows: raise ValueError('Incomplete WRI pagination')
        features.extend(rows); offset += len(rows)
    if len(features) != count: raise ValueError('Incomplete WRI feature count')
    return {'type':'FeatureCollection','source_url':WRI,'source':'WRI Aqueduct 4.0','fetched_at':NOW,'note':'Baseline model context, not real-time drought or confirmed estate supply.','features':features}

def main():
    errors = {}; outputs = {}
    jobs = {'water':water,'dams':dams,'tmd':tmd,'wri':wri}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        tasks = {pool.submit(fn):name for name,fn in jobs.items()}
        for task in concurrent.futures.as_completed(tasks):
            name=tasks[task]
            try: outputs[name]=task.result()
            except Exception as exc: errors[name]=type(exc).__name__+': '+str(exc)
    if 'water' in outputs: write('drought-water-latest.json',outputs['water'])
    elif not (OUT/'drought-water-latest.json').exists(): raise RuntimeError(errors.get('water','No water data'))
    if 'wri' in outputs: write('drought-water-risk.geojson',outputs['wri'])
    context = {'schema':1,'fetched_at':NOW,'errors':errors}
    for key in ['dams','tmd']:
        if key in outputs: context[key]=outputs[key]
        else:
            try: context[key]=json.loads((OUT/'drought-context.json').read_text()).get(key,{'status':'unavailable'})
            except (OSError,ValueError): context[key]={'status':'unavailable'}
    write('drought-context.json',context)
    print(json.dumps({'rows':len(outputs.get('water',{}).get('rows',[])),'dams':len(outputs.get('dams',{}).get('rows',[])),'wri':len(outputs.get('wri',{}).get('features',[])),'errors':errors},ensure_ascii=False))

if __name__=='__main__': main()
