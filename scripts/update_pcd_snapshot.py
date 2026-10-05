import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError
import ssl
URL='https://air4thai.pcd.go.th/services/getNewAQI_JSON.php'
request=Request(URL,headers={'User-Agent':'IEAT-Environmental-Dashboard/1.0'})
try:
    response=urlopen(request,timeout=90)
except URLError as error:
    if not isinstance(error.reason,ssl.SSLCertVerificationError):
        raise
    # Air4Thai currently serves an incomplete certificate chain. This fallback
    # applies only to this public, credential-free station feed on the fixed host.
    response=urlopen(request,timeout=90,context=ssl._create_unverified_context())
with response:
    data=json.load(response)
if not isinstance(data.get('stations'),list) or not data['stations']:
    raise ValueError('PCD returned no stations; preserve previous snapshot')
data['source']=URL
data['fetched_at']=datetime.now(timezone.utc).isoformat()
Path('docs/pcd-stations.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
