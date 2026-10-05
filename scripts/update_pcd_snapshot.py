import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
URL='https://air4thai.pcd.go.th/services/getNewAQI_JSON.php'
with urlopen(Request(URL,headers={'User-Agent':'IEAT-Environmental-Dashboard/1.0'}),timeout=90) as response:
    data=json.load(response)
if not isinstance(data.get('stations'),list) or not data['stations']:
    raise ValueError('PCD returned no stations; preserve previous snapshot')
data['source']=URL
data['fetched_at']=datetime.now(timezone.utc).isoformat()
Path('docs/pcd-stations.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
