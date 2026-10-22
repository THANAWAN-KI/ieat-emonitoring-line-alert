"""Read official feeds for the web UI only; this module never sends LINE messages."""
import concurrent.futures, datetime as dt, email.utils, hashlib, html, json, os, re
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse
import xml.etree.ElementTree as ET
UTC=dt.timezone.utc
NOW=dt.datetime.now(UTC)
def iso(d):return d.astimezone(UTC).isoformat()
def when(value):
    try:
        d=dt.datetime.fromisoformat(str(value).replace('Z','+00:00'))
        return d.replace(tzinfo=dt.timezone(dt.timedelta(hours=7))) if not d.tzinfo else d
    except (ValueError,TypeError):
        try:return email.utils.parsedate_to_datetime(value)
        except (ValueError,TypeError):return None
def clean(value):return html.unescape(re.sub('<[^>]+>',' ',str(value or ''))).strip()
def local(tag):return tag.split('}')[-1]
def text(node,name):
    return next((''.join(c.itertext()).strip() for c in node.iter() if local(c.tag)==name),'')
def url(value):return value if urlparse(str(value)).scheme=='https' else ''
def rss(source):
    name,endpoint,category=source
    try:
        with urlopen(Request(endpoint,headers={'User-Agent':'IEAT-EMCC-WebAlerts/1.0'}),timeout=18) as r: raw=r.read(5*1024*1024)
        root=ET.fromstring(raw);items=[]
        nodes=[n for n in root.iter() if local(n.tag) in ('item','entry','alert')]
        for n in nodes[:100]:
            if text(n,'status') in ('Test','Exercise','Draft') or text(n,'msgType')=='Cancel':continue
            title=clean(text(n,'headline') or text(n,'title') or text(n,'event'))
            issued=when(text(n,'sent') or text(n,'pubDate') or text(n,'updated') or text(n,'published'))
            expires=when(text(n,'expires'))
            if not title or not issued or issued>NOW+dt.timedelta(minutes=5):continue
            if expires and expires<NOW:continue
            if NOW-issued>dt.timedelta(hours=48):continue
            link=text(n,'link')
            if not link:
                link=next((c.get('href','') for c in n.iter() if local(c.tag)=='link' and c.get('href')),'')
            uid=text(n,'identifier') or text(n,'guid') or text(n,'id') or (title+iso(issued))
            items.append({'id':hashlib.sha256((name+uid).encode()).hexdigest()[:24],'category':category,'title':title,'message':clean(text(n,'description') or text(n,'summary') or text(n,'content'))[:2500],'source':name,'sourceUrl':url(link) or endpoint,'issuedAt':iso(issued),'expiresAt':iso(expires or issued+dt.timedelta(hours=48)),'area':clean(text(n,'areaDesc'))})
        return items,{'name':name,'url':endpoint,'status':'ready','fetchedAt':iso(NOW),'count':len(items)}
    except Exception as e:return [],{'name':name,'url':endpoint,'status':'error','error':type(e).__name__+': '+str(e)[:160],'checkedAt':iso(NOW)}
def monitoring(path):
    items=[]
    try:
        data=json.loads(Path(path).read_text());fetched=when(data.get('fetched_at'));stale=0
        for f in data.get('features',[]):
            p=f.get('properties',{});measured=when(p.get('LastUpdate'));matches=[]
            for key,value in p.items():
                if not key.endswith('_txt'):continue
                m=re.fullmatch(r'\s*([+-]?[\d,]+(?:\.\d+)?)\s*\(\s*STD\s+([\d,]+(?:\.\d+)?)\s*\)\s*(.*)',str(value),re.I)
                if m and float(m[1].replace(',',''))>float(m[2].replace(',','')):matches.append(key[:-4]+': '+m[1]+' > '+m[2]+' '+m[3])
            if not matches:continue
            if not measured or NOW-measured>dt.timedelta(hours=4) or measured>NOW+dt.timedelta(minutes=5):stale+=1;continue
            code=str(p.get('Code',''));uid='emonitor-'+code+'-'+iso(measured)+'-'+'|'.join(matches)
            items.append({'id':hashlib.sha256(uid.encode()).hexdigest()[:24],'category':'monitoring','title':p.get('StationTH','สถานี e-Monitoring')+' · เกินเกณฑ์ที่ต้นทางระบุ','message':' · '.join(matches)+' | '+p.get('IndustryZone',''),'source':'e-Monitoring กนอ.','sourceUrl':url(data.get('source')) or 'https://emonitor.ieat.go.th/','issuedAt':iso(measured),'expiresAt':iso(measured+dt.timedelta(hours=4))})
        return items,{'name':'e-Monitoring กนอ.','url':data.get('source'),'status':'ready' if fetched and NOW-fetched<dt.timedelta(hours=4) else 'stale','fetchedAt':iso(fetched) if fetched else None,'count':len(items),'staleExceedanceStations':stale,'rule':'เปรียบเทียบเฉพาะค่าและ STD ที่ต้นทางระบุในช่องเดียวกัน ไม่เดาค่ามาตรฐาน'}
    except Exception as e:return [],{'name':'e-Monitoring กนอ.','status':'error','error':str(e)[:160]}
def main():
    sources=[('ประกาศเตือนภัย กรมอุตุนิยมวิทยา','https://tmd.go.th/api/xml/warning-news','weather'),('ประกาศ CAP กรมอุตุนิยมวิทยา','https://www.tmd.go.th/api/xml/CAP','weather'),('แผ่นดินไหว กรมอุตุนิยมวิทยา','https://earthquake.tmd.go.th/feed/rss_inside.xml','disaster')]
    ddpm=os.environ.get('DDPM_PUBLIC_CAP_FEED','').strip()
    if ddpm and url(ddpm):sources.append(('ปภ.',ddpm,'weather'))
    items=[];health=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        for rows,status in pool.map(rss,sources):items.extend(rows);health.append(status)
    rows,status=monitoring('docs/emonitoring-stations.json');items.extend(rows);health.append(status)
    if not ddpm:health.append({'name':'ปภ.','url':'https://capportal.apiddpm.com/','status':'not-connected','error':'ยังไม่ได้ตั้งค่า Feed/API ที่อนุญาตให้เชื่อมต่อ'})
    dedupe={}
    for item in items:
        key=(item['category'],item['title'],item['issuedAt'])
        dedupe.setdefault(key,item)
    payload={'updatedAt':iso(NOW),'coverage':'เฉพาะแหล่งข้อมูลที่แสดงในสถานะการเชื่อมต่อ ไม่ใช่ประกาศครบทุกหน่วยงานประเทศไทย','items':sorted(dedupe.values(),key=lambda v:v['issuedAt'],reverse=True)[:150],'sources':health}
    output=Path('docs/data/web-alerts.json');output.parent.mkdir(parents=True,exist_ok=True);output.write_text(json.dumps(payload,ensure_ascii=False,separators=(',',':'))+'\n')
    print(json.dumps({'items':len(payload['items']),'sources':health},ensure_ascii=False))
if __name__=='__main__':main()
