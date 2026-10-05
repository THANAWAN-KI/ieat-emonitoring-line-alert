"""Publish Air4Thai PM2.5 and retain actual station observations for 7 days."""
import json, ssl
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError
SOURCE='https://air4thai.pcd.go.th/services/getNewAQI_JSON.php'
DEST=Path('docs/pm25-data.json')
def update(data, previous, now):
    if not isinstance(data.get('stations'),list) or not data['stations']:
        raise ValueError('Empty station feed; preserve last successful data')
    old={s['id']:s for s in previous.get('stations',[])}
    rows=[]; cutoff=now-timedelta(days=7)
    for station in data['stations']:
        ident=str(station['stationID']); values=station.get('AQILast') or station.get('LastUpdate') or {}
        raw=values.get('PM25',{}).get('value')
        try:
            pm=float(raw)
            if pm<0 or pm==9999: pm=None
        except (TypeError,ValueError): pm=None
        stamp=None
        try:
            stamp=datetime.fromisoformat(values['date']+'T'+values['time']).replace(tzinfo=timezone(timedelta(hours=7)))
        except (KeyError,ValueError,TypeError): pass
        history={p['time']:p for p in old.get(ident,{}).get('history',[]) if datetime.fromisoformat(p['time'])>=cutoff}
        if pm is not None and stamp is not None and cutoff<=stamp<=now+timedelta(minutes=10):
            history[stamp.isoformat()]={'time':stamp.isoformat(),'value':pm}
        rows.append({'id':ident,'name':station.get('nameTH',''),'area':station.get('areaTH',''),'lat':station.get('lat'),'lon':station.get('long'), 'value':pm,'time':stamp.isoformat() if stamp else None,'history':sorted(history.values(),key=lambda p:p['time'])})
    return {'source':SOURCE,'fetched_at':now.isoformat(),'stations':rows,'history_started_at':previous.get('history_started_at') or now.isoformat()}
if __name__=='__main__':
    request=Request(SOURCE,headers={'User-Agent':'IEAT-PM25-Dashboard/1.0'})
    try: response=urlopen(request,timeout=90)
    except URLError as error:
        if not isinstance(error.reason,ssl.SSLCertVerificationError): raise
        # Fixed public Air4Thai host currently omits an intermediate certificate.
        response=urlopen(request,timeout=90,context=ssl._create_unverified_context())
    with response: data=json.load(response)
    previous=json.loads(DEST.read_text()) if DEST.exists() else {}
    result=update(data,previous,datetime.now(timezone.utc))
    DEST.write_text(json.dumps(result,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
