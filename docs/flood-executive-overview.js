(function(){
 'use strict';
 const HOUR=3600000,esc=v=>String(v??'–').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=v=>v===null||v===undefined||v===''?null:Number.isFinite(Number(v))?Number(v):null;
 const valid=p=>num(p.lat)!==null&&num(p.lon)!==null&&p.lat>=5&&p.lat<=21&&p.lon>=97&&p.lon<=106;
 const fmt=v=>Number.isFinite(v)?v.toLocaleString('th-TH',{maximumFractionDigits:1}):'–';
 function stamp(v){let s=String(v||'').replace(' ','T');if(/^\d{4}-\d{2}-\d{2}T/.test(s)&&!/(Z|[+-]\d{2}:?\d{2})$/.test(s))s+='+07:00';return Date.parse(s)}
 function time(v){const t=stamp(v);return Number.isFinite(t)?new Date(t).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',dateStyle:'medium',timeStyle:'short'}):'ไม่ระบุเวลา'}
 function distance(a,b){const rad=Math.PI/180,dy=(b.lat-a.lat)*rad,dx=(b.lon-a.lon)*rad,h=Math.sin(dy/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dx/2)**2;return 12742*Math.asin(Math.sqrt(Math.min(1,h)))}
 function closestSegment(p,a,b){
  const c=Math.cos(p.lat*Math.PI/180),ax=(a[0]-p.lon)*c,ay=a[1]-p.lat,bx=(b[0]-p.lon)*c,by=b[1]-p.lat,dx=bx-ax,dy=by-ay;
  const t=dx*dx+dy*dy?Math.max(0,Math.min(1,-(ax*dx+ay*dy)/(dx*dx+dy*dy))):0;
  const q={lon:a[0]+t*(b[0]-a[0]),lat:a[1]+t*(b[1]-a[1])};return {...q,distance:distance(p,q)};
 }
 function lineSegments(geo){const segments=[];for(const f of geo?.features||[]){const lines=f.geometry?.type==='LineString'?[f.geometry.coordinates]:f.geometry?.type==='MultiLineString'?f.geometry.coordinates:[];for(const line of lines)for(let i=1;i<line.length;i++){const a=line[i-1],b=line[i];if([...a,...b].every(Number.isFinite))segments.push({a,b,name:f.properties?.name||'สายน้ำไม่มีชื่อ'});}}return segments;}
 function nearestRiver(p,segments){
  let result=null,best=Infinity;const c=Math.cos(p.lat*Math.PI/180);
  for(const s of segments){
   const ax=(s.a[0]-p.lon)*c,ay=s.a[1]-p.lat,bx=(s.b[0]-p.lon)*c,by=s.b[1]-p.lat;
   const mx=Math.max(0,Math.min(ax,bx),-Math.max(ax,bx)),my=Math.max(0,Math.min(ay,by),-Math.max(ay,by));if(mx*mx+my*my>best)continue;
   const dx=bx-ax,dy=by-ay,t=dx*dx+dy*dy?Math.max(0,Math.min(1,-(ax*dx+ay*dy)/(dx*dx+dy*dy))):0,x=ax+t*dx,y=ay+t*dy,d=x*x+y*y;
   if(d<best){best=d;result={lat:s.a[1]+t*(s.b[1]-s.a[1]),lon:s.a[0]+t*(s.b[0]-s.a[0]),name:s.name,line:[s.a,s.b]};}
  }
  return result?{...result,distance:distance(p,result)}:null;
 }
 function assess(data,now=Date.now()){
  const estates=(data?.estates||[]).filter(valid);
  const complete=Number(data?.schema_version)>=3&&data?.coverage?.stations_complete===true&&Array.isArray(data?.stations)&&data.stations.length===Number(data?.summary?.station_count)&&['ok','partial','stale'].includes(data?.status);
  const fresh=(v,age)=>{const n=now-stamp(v);return Number.isFinite(n)&&n>=-300000&&n<=age};
  const stationReady=complete&&data.status!=='stale'&&fresh(data.generated_at,24*HOUR);
  const stations=(data?.stations||[]).filter(valid).filter(r=>r.kind==='rainfall'?fresh(r.observed_at,24*HOUR)&&num(r.rainfall_mm)!==null:r.kind==='waterlevel'&&fresh(r.observed_at,6*HOUR)&&num(r.waterlevel_msl)!==null&&num(r.bankfull_msl)!==null);
  const announcements=[24,48].map(hours=>{const ds=data?.flash_flood?.[hours+'h'];const at=ds?.date+'T'+(ds?.time||'00:00:00');return {hours,ready:!!ds&&ds.status!=='unavailable'&&Array.isArray(ds.areas)&&fresh(at,24*HOUR),at,rows:(ds?.areas||[]).map(r=>({...r,lat:num(r.latitude),lon:num(r.longitude)})).filter(valid)};});
  const rows=estates.map(e=>{
   const reasons=[],targets=[];let observed=0,availableStations=0;
   if(stationReady)for(const r of stations){const d=distance(e,r);if(d>30)continue;availableStations++;const rain=r.kind==='rainfall'&&Number(r.rainfall_mm)>35,water=r.kind==='waterlevel'&&Number(r.severity_score)>=2;if(!rain&&!water)continue;
    const name=r.station||r.name||'สถานี';reasons.push({type:water?'water':'rain',text:water?'ระดับน้ำ '+name+': '+(r.severity_score>=4?'ล้นตลิ่ง':'เข้าเกณฑ์เฝ้าระวัง')+' · '+fmt(r.waterlevel_msl)+' ม.รทก.':'ฝน '+name+': '+fmt(r.rainfall_mm)+' มม.',distance:d,at:r.observed_at});targets.push({lat:r.lat,lon:r.lon,label:name});observed=Math.max(observed,stamp(r.observed_at));
   }
   for(const a of announcements){if(!a.ready)continue;const nearest=a.rows.map(r=>({...r,d:distance(e,r)})).filter(r=>r.d<=30).sort((x,y)=>x.d-y.d)[0];if(nearest){reasons.push({type:'warning',text:'ใกล้พื้นที่ประกาศเฝ้าระวัง '+a.hours+' ชั่วโมง · '+[nearest.tambon,nearest.amphoe,nearest.province].filter(Boolean).join(' '),distance:nearest.d,at:a.at});targets.push({lat:nearest.lat,lon:nearest.lon,label:'จุดประเมินพื้นที่เฝ้าระวัง '+a.hours+' ชั่วโมง'});observed=Math.max(observed,stamp(a.at));}}
   const priority={water:0,warning:1,rain:2};const paired=reasons.map((reason,i)=>({reason,target:targets[i]})).sort((a,b)=>priority[a.reason.type]-priority[b.reason.type]||a.reason.distance-b.reason.distance);
   return {...e,reasons:paired.map(p=>p.reason),targets:paired.map(p=>p.target),observed,availableStations};
  });
  return {rows,stationReady,announcementReady:announcements.some(a=>a.ready),generated:data?.generated_at};
 }
 window.IEAT_EXECUTIVE_FLOOD={distance,closestSegment,lineSegments,nearestRiver,assess};
 let scopeEstate='',data=null,segments=null,dams=null,geoState='loading',damState='loading',tab='watch',radius=30,search='',selected='',relations=new Map(),relationKey='',lastModel=null;
 const style=document.createElement('style');style.textContent=`
 #efExecutive{margin:0 0 16px;padding:20px;background:#fff;border:1px solid #d9e5ef;border-radius:16px;color:#173b59;font:14px Sarabun,sans-serif;box-shadow:0 4px 20px #163a5910}

 #efExecutive{border-color:#eddfd7;box-shadow:none;color:#452f25}
 #efExecutive h2,#efExecutive .ex-place{color:#452f25}
 #efExecutive .ex-card[data-tab="watch"]{background:#fff0f2;border-color:#e2142d;color:#8e0c20!important}
 #efExecutive .ex-card[data-tab="watch"] strong{color:#e2142d}
 #efExecutive .ex-card[data-tab="river"]{background:#eef8e9;border-color:#4bad31;color:#245c17!important}
 #efExecutive .ex-card[data-tab="river"] strong{color:#4bad31}
 #efExecutive .ex-card[data-tab="dam"]{background:#fffde0;border-color:#f5dc00;color:#665c00!important}
 #efExecutive .ex-card[data-tab="dam"] strong{color:#746700}
 #efExecutive .ex-card[aria-pressed="true"]{outline-color:#e95814}
 #efExecutive th{background:#fff0e7;color:#873809}
 #efExecutive .ex-status{background:#e2142d;color:white}
 #efExecutive .ex-status.unknown{background:#f3efe9;color:#6a6052}
 #efExecutive .ex-map{background:#eef8e9;border-color:#4bad31;color:#245c17!important}
 #efExecutive .ex-map:hover{background:#daf0cf}
 #efExecutive .ex-distance{color:#9a420d}
 #efExecutive .ex-notice{background:#fffbe1;color:#6d6100;border-left:4px solid #f5dc00}
 #efExecutive tbody tr[data-selected="true"]{background:#fff1e8}
 #efExecutive .ex-stamp{background:#fff0e7;color:#873809}


 #efExecutive .ex-header-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
 #efExecutive .ex-close{border:1px solid #e2142d;border-radius:8px;background:#ffe7eb;color:#8e0c20;font:600 12px Sarabun,sans-serif;padding:7px 10px;cursor:pointer}
 body:not(.executive-embedded) #efExecutive .ex-close{display:none}
 #efExecutive .ex-summary-metadata{margin:8px 0 12px;overflow:auto;border:1px solid #eddacb;border-radius:8px}
 #efExecutive table.ex-metadata{min-width:0;font-size:12px;table-layout:fixed}
 #efExecutive .ex-metadata th,#efExecutive .ex-metadata td{padding:7px 9px;min-width:0;position:static;white-space:normal}
 #efExecutive .ex-metadata td{font-weight:600;border-bottom:0}
 #efExecutive .ex-table-wrap table{font-size:12px;min-width:720px}
 #efExecutive .ex-table-wrap th,#efExecutive .ex-table-wrap td{padding:10px 8px}
 #efExecutive .ex-table-wrap td:first-child{min-width:135px}
 #efExecutive .ex-table-wrap td:nth-child(2),#efExecutive .ex-table-wrap td:nth-child(3){min-width:120px}
 #efExecutive .ex-table-wrap td:nth-child(4){min-width:180px}

 #efExecutive .ex-toggle{display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer;font-weight:700;color:#003666;font-size:16px;list-style:none}#efExecutive .ex-toggle::-webkit-details-marker{display:none}#efExecutive .ex-toggle span{font-size:12px;color:#117055;font-weight:500}#efExecutive[open]>.ex-toggle{padding-bottom:14px;border-bottom:1px solid #dce6ef;margin-bottom:14px}#efExecutive:not([open]){padding:12px 14px;margin-bottom:12px}#efExecutive .ex-body{min-width:0}
 #efExecutive .ex-head{display:flex;justify-content:space-between;gap:12px;align-items:start;flex-wrap:wrap}#efExecutive h2{margin:0;font-size:23px;color:#003666}#efExecutive .ex-sub{margin:5px 0 12px;color:#557087;line-height:1.6}
 #efExecutive .ex-stamp{font-size:12px;background:#edf5fb;padding:7px 10px;border-radius:8px;color:#456b89}
 #efExecutive .ex-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin:14px 0}
 #efExecutive .ex-card{font:inherit;border:1px solid #d8e5f0;border-radius:12px;text-align:left;background:#f0f7fd;color:#003666!important;padding:13px;cursor:pointer}
 #efExecutive .ex-card strong{display:block;font-size:30px;line-height:1.3}#efExecutive .ex-card span{display:block;font-weight:600}#efExecutive .ex-card small{display:block;font-size:11px;margin-top:4px;color:#587187}
 #efExecutive .ex-card[data-tab="watch"]{background:#fff2e7;border-color:#f5d8ba}#efExecutive .ex-card[aria-pressed="true"]{outline:2px solid #0072cf;outline-offset:1px}
 #efExecutive .ex-tools{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:15px 0}#efExecutive input,#efExecutive select{font:inherit;color:#163e5d!important;background:white;padding:9px 12px;border:1px solid #c5d8e7;border-radius:8px;max-width:100%}#efExecutive input{flex:1;min-width:160px}#efExecutive .ex-tools label{display:flex;align-items:center;gap:7px;font-size:12px}
 #efExecutive .ex-table-wrap{overflow:auto;max-height:430px;border:1px solid #dce6ef;border-radius:10px}#efExecutive table{width:100%;border-collapse:collapse;font-size:13px;min-width:710px}#efExecutive th{background:#edf4fa;color:#23587d;padding:11px;text-align:left;position:sticky;top:0;z-index:1}#efExecutive td{padding:12px 11px;border-bottom:1px solid #e5edf3;vertical-align:top;line-height:1.6}#efExecutive tbody tr[data-selected="true"]{background:#edf8f2}#efExecutive td:first-child{min-width:155px}#efExecutive td:nth-child(2),#efExecutive td:nth-child(3){min-width:140px}#efExecutive td:nth-child(4){min-width:200px}
 #efExecutive .ex-place{font-weight:600;color:#003666}#efExecutive .ex-distance{display:block;font-weight:700;color:#146c83}#efExecutive .ex-muted{font-size:11px;color:#647b8d}#efExecutive .ex-status{display:inline-block;border-radius:6px;padding:3px 7px;font-size:12px;font-weight:600;background:#fce7dc;color:#a34816}#efExecutive .ex-status.unknown{background:#eef2f6;color:#556b7b}#efExecutive .ex-reasons{padding-left:17px;margin:7px 0;font-size:12px}#efExecutive .ex-reasons li{margin:5px 0}#efExecutive .ex-map{font:600 12px Sarabun,sans-serif;background:#e6f4ed;color:#14614c!important;border:1px solid #acd4c3;border-radius:8px;padding:8px 10px;cursor:pointer;white-space:nowrap}#efExecutive .ex-map:hover{background:#cfeadd}#efExecutive button:focus-visible{outline:3px solid #0072cf;outline-offset:2px}#efExecutive .ex-note{font-size:12px;color:#617689;line-height:1.65;margin:10px 0 0}#efExecutive .ex-notice{padding:10px 12px;background:#fff7e8;border-radius:8px;color:#815e25;font-size:12px;margin:8px 0}#efExecutive .ex-empty{text-align:center;padding:24px;color:#627a8f}#efExecutive summary{cursor:pointer;font-weight:600;color:#386582}
 @media(max-width:600px){#efExecutive{padding:14px}#efExecutive h2{font-size:20px}#efExecutive .ex-cards{gap:7px}#efExecutive .ex-card{padding:10px 8px}#efExecutive .ex-card strong{font-size:25px}#efExecutive .ex-card span{font-size:12px}#efExecutive .ex-stamp{width:100%}}
 `;document.head.appendChild(style);
 function mount(){const dashboard=document.querySelector('#estateFocusDashboard .ef-data-column');if(!dashboard)return null;let host=document.getElementById('efExecutive');if(host)return host;host=document.createElement('details');host.id='efExecutive';if(document.body.dataset.executiveStandalone==='true')host.open=true;dashboard.prepend(host);host.innerHTML='<summary class="ex-toggle">สรุปสำหรับผู้บริหาร <span>เปิดดูรายชื่อนิคมฯ ▾</span></summary><div class="ex-body"><div class="ex-head"><div><h2>สรุปนิคมฯ ที่ต้องติดตาม</h2><p class="ex-sub">ภาพรวมทั่วประเทศ · เลือกกลุ่มเพื่อดูรายชื่อและตำแหน่งที่เกี่ยวข้อง</p></div><div class="ex-header-actions"><span class="ex-stamp" id="exStamp">กำลังโหลดข้อมูล</span><button type="button" id="exClose" class="ex-close" aria-label="ปิดสรุปนิคม">ปิด ✕</button></div></div><div class="ex-cards"><button type="button" class="ex-card" data-tab="watch" aria-pressed="true"><span>เข้าเกณฑ์เฝ้าระวัง</span><strong id="exWatch">–</strong><small>จากข้อมูลที่ยังอยู่ในช่วงเวลา</small></button><button type="button" class="ex-card" data-tab="river" aria-pressed="false"><span>ใกล้สายน้ำสายหลัก</span><strong id="exRiver">–</strong><small>ระยะถึงแนวสายน้ำในชุดข้อมูล</small></button><button type="button" class="ex-card" data-tab="dam" aria-pressed="false"><span>ใกล้เขื่อน / อ่างเก็บน้ำ</span><strong id="exDam">–</strong><small>ระยะเส้นตรง ไม่ยืนยันเส้นทางท้ายเขื่อน</small></button></div><div class="ex-tools"><input id="exSearch" type="search" placeholder="ค้นหาชื่อนิคมฯ / ท่าเรือ" aria-label="ค้นหานิคมในสรุปผู้บริหาร"><label>เกณฑ์ใกล้สายน้ำ / เขื่อน <select id="exRadius"><option value="10">10 กม.</option><option value="30" selected>30 กม.</option><option value="50">50 กม.</option></select></label><select id="exTab" aria-label="กลุ่มนิคมที่แสดง"><option value="watch">เข้าเกณฑ์เฝ้าระวัง</option><option value="river">ใกล้สายน้ำสายหลัก</option><option value="dam">ใกล้เขื่อน / อ่างเก็บน้ำ</option><option value="all">ทุกนิคมฯ / ท่าเรือ</option></select></div><div id="exNotice" role="status"></div><div id="exResult" class="ex-summary-metadata"></div><div class="ex-table-wrap"><table><thead><tr><th scope="col">นิคมฯ / ท่าเรือ</th><th scope="col">สายน้ำที่ใกล้ที่สุด</th><th scope="col">เขื่อน / อ่างที่ใกล้ที่สุด</th><th scope="col">เหตุผลที่เฝ้าระวัง</th><th scope="col">แผนที่</th></tr></thead><tbody id="exRows"></tbody></table></div><details class="ex-note"><summary>เกณฑ์คัดกรองและแหล่งข้อมูล</summary><p>ระยะโดยประมาณจากหมุดนิคมฯ ถึงแนวแม่น้ำสายหลัก OpenStreetMap ที่มีในระบบ และระยะเส้นตรงถึงพิกัดเขื่อน/อ่างจาก ThaiWater · ไม่ใช่ระยะจากขอบเขตนิคมฯ และไม่ครอบคลุมคลองทุกสาย</p><p>เฝ้าระวัง: ฝนมากกว่า 35 มม. ภายใน 30 กม. (เวลาสถานีไม่เกิน 24 ชม.) หรือระดับน้ำเข้าเกณฑ์ภายใน 30 กม. (ไม่เกิน 6 ชม.) หรือใกล้จุดประเมินในประกาศ 24/48 ชม. ภายใน 30 กม. (รอบประกาศไม่เกิน 24 ชม.) · ประเมินทุกนิคมฯ ไม่จำกัดเฉพาะนิคมฯ ที่ใกล้ที่สุดกับสถานี</p><p>อยู่ใกล้สายน้ำหรือเขื่อนไม่เท่ากับมีความเสี่ยงน้ำท่วม · ความเชื่อมโยงท้ายเขื่อนยังไม่ยืนยัน · การคัดกรองไม่ใช่การยืนยันน้ำท่วมภายในนิคมฯ</p></details></div>';
  host.addEventListener('input',e=>{if(e.target.id==='exSearch'){search=e.target.value.trim();render();}});
  host.addEventListener('change',e=>{if(e.target.id==='exRadius'){radius=Number(e.target.value);render();}if(e.target.id==='exTab'){tab=e.target.value;render();}});
  host.addEventListener('click',e=>{if(e.target.closest('#exClose')){window.parent.postMessage({type:'ieat-executive-close'},location.origin);return;}const card=e.target.closest('[data-tab]');if(card){tab=card.dataset.tab;host.querySelector('#exTab').value=tab;render();return;}const b=e.target.closest('[data-ex-estate]');if(b)focus(b.dataset.exEstate);});return host;
 }
 function buildRelations(){if(!data)return;const estates=(data.estates||[]).filter(valid),key=estates.map(e=>[e.id,e.lat,e.lon].join(',')).join('|');if(key===relationKey)return;relationKey=key;relations=new Map();for(const e of estates){const river=segments?nearestRiver(e,segments):null;let dam=null;if(dams)for(const d of dams){const v=distance(e,d);if(!dam||v<dam.distance)dam={...d,distance:v};}relations.set(String(e.id),{river,dam});}}
 function render(){const host=mount();if(!host||!data)return;lastModel=assess(data);const norm=v=>String(v||'').normalize('NFKC').replace(/นิคมอุตสาหกรรม|สำนักงานนิคมฯ|นิคมฯ|\s|[()]/g,'').toLowerCase();const rows=lastModel.rows.filter(e=>!scopeEstate||norm(e.name)===norm(scopeEstate)).map(e=>({...e,...relations.get(String(e.id))}));const count=k=>rows.filter(e=>k==='watch'?e.reasons.length:k==='river'?e.river&&e.river.distance<=radius:e.dam&&e.dam.distance<=radius).length;
  host.querySelector('#exWatch').textContent=lastModel.stationReady||lastModel.announcementReady?fmt(count('watch')):'–';host.querySelector('#exRiver').textContent=geoState==='ready'?fmt(count('river')):'–';host.querySelector('#exDam').textContent=damState==='ready'?fmt(count('dam')):'–';host.querySelector('#exStamp').textContent='ชุดสถานี '+time(data.generated_at);host.querySelector('.ex-sub').textContent=scopeEstate?'ข้อมูลเฉพาะ '+scopeEstate:'ภาพรวมพื้นที่นิคมอุตสาหกรรมทั่วประเทศ';
  host.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tab===tab)));
  const notices=[];if(!lastModel.stationReady)notices.push('ข้อมูลสถานียังไม่ครบหรือเป็นข้อมูลย้อนหลัง จึงไม่ใช้สรุปสถานีที่ต้องเฝ้าระวังตอนนี้');if(!lastModel.announcementReady)notices.push('ประกาศเฝ้าระวัง 24/48 ชั่วโมงยังไม่พร้อมหรือเกินช่วงเวลา');if(geoState==='error')notices.push('โหลดแนวสายน้ำไม่สำเร็จ');if(damState==='partial')notices.push('ข้อมูลเขื่อน/อ่างโหลดได้บางส่วน จำนวนใกล้เขื่อนยังสรุปไม่ได้');if(damState==='error')notices.push('โหลดพิกัดเขื่อน/อ่างไม่สำเร็จ');host.querySelector('#exNotice').innerHTML=notices.map(n=>'<div class="ex-notice">'+esc(n)+'</div>').join('');
  const shown=rows.filter(e=>String(e.name).includes(search)&&(tab==='all'||tab==='watch'&&e.reasons.length||tab==='river'&&e.river&&e.river.distance<=radius||tab==='dam'&&e.dam&&e.dam.distance<=radius)).sort((a,b)=>tab==='river'?a.river.distance-b.river.distance:tab==='dam'?a.dam.distance-b.dam.distance:b.reasons.length-a.reasons.length||String(a.name).localeCompare(String(b.name),'th'));
  host.querySelector('#exResult').innerHTML='<table class="ex-metadata"><thead><tr><th>รายการที่แสดง</th><th>นิคมฯ ในพื้นที่เลือก</th><th>เกณฑ์ระยะใกล้</th><th>ระยะเฝ้าระวัง</th></tr></thead><tbody><tr><td>'+shown.length+' นิคมฯ / ท่าเรือ</td><td>'+rows.length+' นิคมฯ / ท่าเรือ</td><td>'+radius+' กม.</td><td>30 กม.</td></tr></tbody></table>';
  const place=(r,state)=>r?(state==='partial'?'<small class="ex-muted">จากข้อมูลที่โหลดได้บางส่วน</small>':'')+'<span class="ex-place">'+esc(r.name)+'</span><span class="ex-distance">'+fmt(r.distance)+' กม.</span>':'<span class="ex-muted">'+(state==='loading'?'กำลังโหลด':'ไม่มีข้อมูลที่ยืนยันได้')+'</span>';
  host.querySelector('#exRows').innerHTML=shown.length?shown.map(e=>'<tr data-selected="'+(String(e.id)===selected)+'"><td><strong>'+esc(e.name)+'</strong></td><td>'+place(e.river,geoState)+'</td><td>'+place(e.dam,damState)+(e.dam?'<small class="ex-muted">ยังไม่ยืนยันความเชื่อมโยงท้ายเขื่อน</small>':'')+'</td><td>'+(e.reasons.length?'<span class="ex-status">เข้าเกณฑ์เฝ้าระวัง</span><ul class="ex-reasons">'+e.reasons.slice(0,3).map(r=>'<li>'+esc(r.text)+'<br><span class="ex-muted">ห่าง '+fmt(r.distance)+' กม. · '+esc(time(r.at))+'</span></li>').join('')+(e.reasons.length>3?'<li><details><summary>อีก '+(e.reasons.length-3)+' เหตุผล</summary><ul>'+e.reasons.slice(3).map(r=>'<li>'+esc(r.text)+'<br>'+esc(time(r.at))+'</li>').join('')+'</ul></details></li>':'')+'</ul>':'<span class="ex-status unknown">'+(lastModel.stationReady&&e.availableStations?'ไม่พบค่าเข้าเกณฑ์จากข้อมูลที่มี':'ข้อมูลสถานีไม่พอสรุป')+'</span>')+'</td><td><button type="button" class="ex-map" data-ex-estate="'+esc(e.id)+'">ดูบนแผนที่ ↗</button></td></tr>').join(''):'<tr><td colspan="5" class="ex-empty">'+(search?'ไม่พบชื่อที่ค้นหา':tab==='watch'&&!(lastModel.stationReady||lastModel.announcementReady)?'ข้อมูลยังไม่พร้อมสรุปสถานการณ์ปัจจุบัน':(tab==='river'&&geoState==='loading'||tab==='dam'&&damState==='loading')?'กำลังคำนวณระยะห่าง':'ไม่พบรายการตามเกณฑ์ในข้อมูลที่พร้อมใช้งาน')+'</td></tr>';
 }
 function focus(id){const e=lastModel?.rows.find(e=>String(e.id)===id);if(!e)return;selected=id;const rel=relations.get(id)||{},targets=[{lat:e.lat,lon:e.lon,label:e.name}];let line=null;
  if(tab==='river'&&rel.river){targets.push({lat:rel.river.lat,lon:rel.river.lon,label:rel.river.name,kind:'river'});line=rel.river.line;}
  else if(tab==='dam'&&rel.dam)targets.push({lat:rel.dam.lat,lon:rel.dam.lon,label:rel.dam.name,kind:'dam'});
  else if(tab==='watch')targets.push(...e.targets.slice(0,5));
  else {if(rel.river&&rel.river.distance<=radius){targets.push({lat:rel.river.lat,lon:rel.river.lon,label:rel.river.name,kind:'river'});line=rel.river.line;}if(rel.dam&&rel.dam.distance<=radius)targets.push({lat:rel.dam.lat,lon:rel.dam.lon,label:rel.dam.name,kind:'dam'});}
  const frame=document.getElementById('estateFocusMap');const message={type:'flood-map-focus',estateZoom:true,scale:50000,lat:e.lat,lon:e.lon,label:e.name,executive:{targets,line,river:rel.river?rel.river.name+' · '+fmt(rel.river.distance)+' กม.':null,dam:rel.dam?rel.dam.name+' · '+fmt(rel.dam.distance)+' กม.':null,reasons:e.reasons.slice(0,5).map(r=>r.text+' · '+time(r.at)),reasonCount:e.reasons.length}};if(document.body.dataset.executiveEmbedded==='true'){window.parent.postMessage({type:'ieat-executive-open-map',focus:message},location.origin);}else{frame?.contentWindow?.postMessage(message,location.origin);frame?.scrollIntoView({behavior:'smooth',block:'center'});}render();
 }
 async function loadGeography(){const paths=['water_flow_major.geojson','related_dams_latest.json','medium_reservoirs_latest.json'];const rs=await Promise.allSettled(paths.map(async path=>{const r=await fetch('./data/'+path+'?v='+Math.floor(Date.now()/HOUR),{signal:AbortSignal.timeout(25000)});if(!r.ok)throw Error('HTTP '+r.status);const d=await r.json();if(path.endsWith('geojson')?!Array.isArray(d.features):!Array.isArray(d.rows))throw Error('Invalid data');return d;}));
  if(rs[0].status==='fulfilled'){segments=lineSegments(rs[0].value);geoState=segments.length?'ready':'error';}else geoState='error';
  const available=rs.slice(1).filter(r=>r.status==='fulfilled');damState=available.length===2?'ready':available.length?'partial':'error';const unique=new Map();for(const r of available)for(const d of r.value.rows){const p={...d,lat:num(d.lat),lon:num(d.lng??d.lon)};if(valid(p))unique.set(p.name+'|'+p.lat+'|'+p.lon,p);}dams=[...unique.values()];if(!dams.length)damState='error';relationKey='';buildRelations();render();
 }
 window.addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==window.parent||event.data?.type!=='ieat-executive-estate')return;scopeEstate=String(event.data.name||'');search='';const input=document.getElementById('exSearch');if(input)input.value='';render();});
 document.addEventListener('ieat-flood-executive-data',e=>{data=e.detail;buildRelations();render();});
 function start(){mount();if(window.parent!==window)window.parent.postMessage({type:'ieat-executive-ready'},location.origin);if(window.IEAT_FLOOD_EXECUTIVE_DATA){data=window.IEAT_FLOOD_EXECUTIVE_DATA;render();}loadGeography();setInterval(()=>{render();loadGeography();},HOUR);}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
