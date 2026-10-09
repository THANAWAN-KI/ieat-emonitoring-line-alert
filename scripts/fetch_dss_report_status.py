"""Validate DSS report statuses and publish aggregate counts only."""
import calendar,json,re,sys,urllib.parse,urllib.request
from collections import Counter,defaultdict
from datetime import datetime,timezone
from html.parser import HTMLParser
from pathlib import Path
IDS=[22,17,1,13,12,20,5,21,35,26,3,10,29,18,16,15,9,39,6,8,41,40,30,45,50,36,2,46,4,24,34,37,11,25,23,44,7,14,28,64,32,19]
STATUS={'อนุมัติแล้ว':'approved','อยู่ระหว่างการตรวจสอบ':'review','อยู่ระหว่างจัดทำ':'draft','NO DATA':'none','ขอข้อมูลเพิ่ม':'more'}
class ReportParser(HTMLParser):
 def __init__(self):super().__init__();self.rows=[];self.row=None;self.cell=None
 def handle_starttag(self,t,a):
  if t=='tr':self.row=[]
  if t in ('td','th') and self.row is not None:self.cell=[]
 def handle_data(self,d):
  if self.cell is not None:self.cell.append(d)
 def handle_endtag(self,t):
  if t in ('td','th') and self.cell is not None:
   self.row.append(' '.join(''.join(self.cell).split()));self.cell=None
  if t=='tr' and self.row is not None:self.rows.append(self.row);self.row=None

def parse_report(html,url,month):
 p=ReportParser();p.feed(html)
 rows=[r for r in p.rows if len(r)==12 and r[0].isdigit()]
 total_match=re.search(r'รวมชุดข้อมูลทั้งหมด\((\d+)\)', ' '.join(' '.join(r) for r in p.rows if len(r)==1))
 if not total_match or not rows or len(rows)!=int(total_match[1]):raise ValueError('Incomplete DSS report; retain previous snapshot')
 if len({r[0] for r in rows})!=len(rows):raise ValueError('Duplicate report rows')
 counts=Counter();estates=defaultdict(Counter)
 for r in rows:
  if r[5] not in STATUS:raise ValueError('Unknown DSS status: '+r[5])
  key=STATUS[r[5]];counts[key]+=1;estates[r[4]][key]+=1
 # Reconcile every source category, including the fifth status.
 summary=' '.join(p.rows[0])
 for label,key in [('อนุมัติแล้ว','approved'),('อยู่ระหว่างการตรวจสอบ','review'),('อยู่ระหว่างจัดทำ','draft'),('ไม่มีชุดข้อมูล','none'),('ขอข้อมูลเพิ่ม','more')]:
  match=re.search(re.escape(label)+r'\((\d+)\)',summary)
  if not match or counts[key]!=int(match[1]):raise ValueError('DSS summary mismatch: '+label)
 def pack(c):return {**{k:c[k] for k in STATUS.values()},'total':sum(c.values())}
 return {'schemaVersion':1,'period':month,'retrievedAt':datetime.now(timezone.utc).isoformat(),'sourceUrl':url,'counts':pack(counts),'estates':[{'name':name,**pack(c)} for name,c in sorted(estates.items())]}

def main():
 month=sys.argv[1] if len(sys.argv)>1 else '2026-10'
 year,m=map(int,month.split('-'));last=calendar.monthrange(year,m)[1]
 query=urllib.parse.urlencode([('daterange',f'{month}-01 00:00 TO {month}-{last:02} 23:59')]+[('checkBox1[]',i) for i in IDS])
 url='https://dss.ieat.go.th/extension/dssreportAdmin/index.php?'+query
 if len(sys.argv)>2:html=Path(sys.argv[2]).read_text()
 else:
  with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'IEAT-EMCC-Dashboard/1.0'}),timeout=120) as r:html=r.read().decode('utf-8-sig')
 result=parse_report(html,url,month)
 path=Path('docs/data/dss-report-status.json');path.parent.mkdir(parents=True,exist_ok=True);path.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
 print('DSS statuses validated:',result['counts'])
if __name__=='__main__':main()
