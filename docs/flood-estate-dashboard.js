(function(){
 'use strict';
 window.IEAT_FOCUSED_DASHBOARD=true;
 const RADIUS=30,MAX_AGE=86400000;
 const $=id=>document.getElementById(id);
 const esc=v=>String(v??'–').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=v=>v===null||v===undefined||v===''?null:Number.isFinite(Number(v))?Number(v):null;
 const fmt=v=>num(v)===null?'–':Number(v).toLocaleString('th-TH',{maximumFractionDigits:1});
 function timestamp(v){let s=String(v||'').replace(' ','T');if(/^\d{4}-\d{2}-\d{2}T/.test(s)&&!/(Z|[+-]\d{2}:?\d{2})$/.test(s))s+='+07:00';return Date.parse(s)}
 function time(v){const n=timestamp(v);return Number.isFinite(n)?new Date(n).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',dateStyle:'medium',timeStyle:'short'}):'ไม่ระบุเวลา'}
 function point(r){return num(r.lat)!==null&&num(r.lon)!==null&&Number(r.lat)>=5&&Number(r.lat)<=21&&Number(r.lon)>=97&&Number(r.lon)<=106}
 function km(a,b){const rad=Math.PI/180,dy=(b.lat-a.lat)*rad,dx=(b.lon-a.lon)*rad,h=Math.sin(dy/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dx/2)**2;return 12742*Math.asin(Math.sqrt(Math.min(1,h)))}
 function model(data,now=Date.now()){
  const estates=(data.estates||[]).filter(point);
  const complete=Number(data.schema_version)>=3&&data.coverage?.stations_complete===true&&Array.isArray(data.stations)&&data.stations.length===Number(data.summary?.station_count)&&['ok','partial','stale'].includes(data.status);
  const generated=timestamp(data.generated_at),age=now-generated;
  const fresh=r=>{const age=now-timestamp(r.observed_at);return Number.isFinite(age)&&age>=-300000&&age<=MAX_AGE};
  const stations=(data.stations||[]).filter(r=>point(r)&&fresh(r));
  const near=stations.map(r=>{let nearest=null,distance=Infinity;estates.forEach(e=>{const d=km(r,e);if(d<distance){distance=d;nearest=e}});return {...r,distance,nearest}}).filter(r=>r.distance<=RADIUS);
  const watch=complete?estates.map(e=>{
   const nearby=stations.map(r=>({...r,distance:km(e,r)})).filter(r=>r.distance<=RADIUS);
   const rain=nearby.filter(r=>r.kind==='rainfall'&&num(r.rainfall_mm)!==null&&Number(r.rainfall_mm)>35);
   const water=nearby.filter(r=>r.kind==='waterlevel'&&num(r.waterlevel_msl)!==null&&Number(r.severity_score)>=2);
   const alerts=[...rain,...water];
   return {...e,rain,water,alerts,nearest:alerts.length?Math.min(...alerts.map(r=>r.distance)):null,maxRain:rain.length?Math.max(...rain.map(r=>Number(r.rainfall_mm))):null};
  }).filter(e=>e.alerts.length).sort((a,b)=>b.water.length-a.water.length||(b.maxRain??-1)-(a.maxRain??-1)):[];
  function warning(period){
   const ds=data.flash_flood?.[period];
   const issued=timestamp(ds?.date+'T'+(ds?.time||'00:00:00'));
   if(!ds||ds.status==='unavailable'||!Array.isArray(ds.areas)||!Number.isFinite(issued)||now-issued< -300000||now-issued>MAX_AGE)return {available:false,rows:[],issued};
   const groups=new Map();let unlocated=0;
   ds.areas.forEach(r=>{
    const p={lat:num(r.latitude),lon:num(r.longitude)};if(p.lat===null||p.lon===null||!point(p)){unlocated++;return}
    let distance=Infinity,estate=null;estates.forEach(e=>{const d=km(e,p);if(d<distance){distance=d;estate=e}});
    if(distance>RADIUS)return;
    const key=r.geocode||[r.province,r.amphoe,r.tambon].join('|');const prior=groups.get(key);
    if(!prior||distance<prior.distance)groups.set(key,{...r,...p,distance,estate});
   });
   return {available:complete,rows:[...groups.values()],issued,unlocated};
  }
  return {estates,complete,age,stale:!Number.isFinite(age)||age< -300000||age>MAX_AGE||data.status==='stale',near,watch,rain:near.filter(r=>r.kind==='rainfall'&&num(r.rainfall_mm)!==null),water:near.filter(r=>r.kind==='waterlevel'&&num(r.waterlevel_msl)!==null),warning24:warning('24h'),warning48:warning('48h'),excluded:(data.stations||[]).length-stations.length};
 }
 window.IEAT_ESTATE_DASHBOARD_MODEL=model;
 let current=null,selected='',busy=false;
 function set(id,text){if($(id))$(id).textContent=text}
 function zoom(lat,lon){const f=$('estateFocusMap');if(f?.contentWindow)f.contentWindow.postMessage({type:'flood-map-focus',lat:Number(lat),lon:Number(lon),scale:75000},location.origin)}
 function mount(){
  const warning=$('warning');if(!warning||$('estateFocusDashboard'))return;
  const style=document.createElement('style');style.textContent=`
   html body main.container #warning>:not(#estateFocusDashboard){display:none!important}
   #estateFocusDashboard{display:block!important;color:#243143;font-family:"Sarabun",sans-serif;min-width:0}
   #estateFocusDashboard *{box-sizing:border-box}
   .ef-head,.ef-tools{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
   .ef-head h1{font-size:24px;margin:0 0 6px}.ef-head p{font-size:14px;margin:0;color:#61717e}
   .ef-actions{display:flex;gap:8px;flex-wrap:wrap}.ef-actions button,.ef-actions a{border:0;border-radius:9px;background:#d5e9ff;color:#006da7;padding:10px 15px;font:inherit;text-decoration:none;cursor:pointer}
   .ef-status{padding:13px 16px;border:1px solid #dbe5eb;border-radius:12px;margin:16px 0;background:#f5f9fc;font-size:14px;line-height:1.7}
   .ef-status[data-state="incomplete"]{background:#fff7e8;border-color:#e3c88e}
   .ef-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}
   .ef-metric{background:white;border:1px solid #dce5ed;border-radius:14px;padding:16px;min-width:0}
   .ef-metric h2{font-size:14px;margin:0}.ef-metric strong{display:block;font-size:27px;color:#007f83;margin:8px 0}.ef-metric small{display:block;font-size:12px;color:#637383;line-height:1.5}
   .ef-grid{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(270px,1fr);gap:16px;align-items:start}
   .ef-panel{border:1px solid #dce5ed;border-radius:14px;background:white;padding:16px;min-width:0;margin-bottom:16px}
   .ef-panel h2{font-size:18px;margin:0 0 8px}.ef-panel p{font-size:13px;line-height:1.6;color:#637383}
   #estateFocusMap{border:0;width:100%;height:600px;display:block;border-radius:9px}
   .ef-tools input{border:1px solid #cbd8e2;border-radius:8px;padding:9px;width:100%;font:inherit;font-size:14px}
   .ef-estates{max-height:560px;overflow:auto;margin-top:10px}.ef-estate{display:block;width:100%;text-align:left;border:1px solid #e0e6ef;border-radius:10px;background:#f7f4fa;color:#442b59;padding:12px;margin:8px 0;font:inherit;cursor:pointer}.ef-estate[aria-pressed="true"]{background:#f7fcf8;border-color:#348a58;color:#185b33}.ef-estate small{display:block;font-size:12px;line-height:1.5;margin-top:5px}
   .ef-table{overflow:auto;max-height:420px}.ef-table table{border-collapse:collapse;width:100%;min-width:650px;font-size:13px}.ef-table th,.ef-table td{padding:10px;text-align:left;border-bottom:1px solid #e4eaf0;vertical-align:top}.ef-table th{position:sticky;top:0;background:#edf6fc}.ef-table button{border:0;background:none;color:#006da7;text-align:left;font:inherit;text-decoration:underline;cursor:pointer}
   .ef-warning{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.ef-risk{padding:10px;border-bottom:1px solid #e3e9ef;font-size:13px;line-height:1.6}.ef-risk button{border:0;background:none;color:#006da7;cursor:pointer;font:inherit;text-decoration:underline;padding:0;text-align:left}
   .ef-sources{font-size:13px;line-height:1.8}.ef-sources a{color:#006da7}.ef-empty{padding:18px;color:#637383;font-size:14px;line-height:1.6}
   @media(max-width:800px){.ef-grid{grid-template-columns:1fr}.ef-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.ef-warning{grid-template-columns:1fr}#estateFocusMap{height:460px}.ef-head h1{font-size:20px}}
   @media(max-width:420px){.ef-metrics{grid-template-columns:1fr}}
  `;document.head.appendChild(style);
  const host=document.createElement('section');host.id='estateFocusDashboard';
  const metrics=[['efTotal','นิคมฯ / ท่าเรือในชุดข้อมูล','จำนวนตำแหน่งที่ตรวจสอบได้จากข้อมูล กนอ.'],['efWatch','นิคมฯ เข้าเกณฑ์เฝ้าระวัง','ไม่ใช่จำนวนนิคมฯ ที่ยืนยันน้ำท่วม'],['efRainWatch','นิคมฯ ใกล้ฝนเข้าเกณฑ์','ฝนสะสม 24 ชม. มากกว่า 35 มม. ในรัศมี 30 กม.'],['efWaterWatch','นิคมฯ ใกล้ระดับน้ำเข้าเกณฑ์','ใช้สถานะเฝ้าระวังขึ้นไปจาก ThaiWater ในรัศมี 30 กม.'],['ef24','ตำบลเฝ้าระวัง 24 ชม. ใกล้นิคมฯ','วัดระยะจากจุดสถานีที่ใช้ประเมิน ไม่ใช่ขอบเขตตำบล'],['ef48','ตำบลเฝ้าระวัง 48 ชม. ใกล้นิคมฯ','วัดระยะจากจุดสถานีที่ใช้ประเมิน ไม่ใช่ขอบเขตตำบล']];
  host.innerHTML=`<div class="ef-head"><div><h1>สถานการณ์น้ำเพื่อเฝ้าระวังนิคมอุตสาหกรรม</h1><p>เน้นนิคมฯ และท่าเรือ · เกณฑ์ระยะ 30 กิโลเมตร · ระบุเวลาและแหล่งข้อมูล</p></div><div class="ef-actions"><button type="button" id="efRefresh">อัปเดตข้อมูล</button><button type="button" id="efReport">จัดทำรายงาน</button></div></div><div class="ef-status" id="efStatus" role="status">กำลังตรวจสอบข้อมูล…</div><div class="ef-metrics">${metrics.map(([id,title,note])=>`<article class="ef-metric"><h2>${title}</h2><strong id="${id}">–</strong><small>${note}</small></article>`).join('')}</div>
   <div class="ef-grid"><section class="ef-panel"><h2>แผนที่นิคมฯ และสถานการณ์น้ำ</h2><p>เลือกนิคมฯ เพื่อซูม · GISTDA แสดงพื้นที่ที่ตรวจพบตามวันที่ภาพ · จุด Longdo เป็นรายงานเหตุการณ์ · สถานีระดับน้ำเป็นข้อมูล ThaiWater</p><iframe id="estateFocusMap" title="แผนที่สถานการณ์น้ำเพื่อเฝ้าระวังนิคมอุตสาหกรรม" src="flood-webmap.html?v=20260930-estate-focus" loading="eager"></iframe></section>
   <section class="ef-panel"><h2>นิคมฯ ที่เข้าเกณฑ์เฝ้าระวัง</h2><div class="ef-tools"><input id="efSearch" type="search" aria-label="ค้นหานิคมอุตสาหกรรม" placeholder="ค้นหาชื่อนิคมฯ / ท่าเรือ"></div><div id="efEstates" class="ef-estates"></div><p>สถานีหนึ่งแห่งอาจอยู่ใกล้หลายนิคมฯ จึงนับนิคมฯ แต่ละแห่งแยกกัน ระยะเป็นเส้นตรงจากจุดตำแหน่งในชุดข้อมูล</p></section></div>
   <section class="ef-panel"><h2>สถานีที่ใช้ติดตามใกล้นิคมฯ</h2><p id="efStationNote">กำลังตรวจสอบความครบถ้วน</p><div class="ef-table"><table><thead><tr><th>สถานี / แหล่งข้อมูล</th><th>ค่าตรวจวัด</th><th>สถานะสถานี</th><th>นิคมฯ ที่ใกล้ที่สุด / ระยะ</th><th>เวลาตรวจวัด (ไทย)</th></tr></thead><tbody id="efStations"></tbody></table></div></section>
   <div class="ef-warning"><section class="ef-panel"><h2>พื้นที่เฝ้าระวัง 24 ชั่วโมงใกล้นิคมฯ</h2><div id="efWarning24"></div></section><section class="ef-panel"><h2>พื้นที่เฝ้าระวัง 48 ชั่วโมงใกล้นิคมฯ</h2><div id="efWarning48"></div></section></div>
   <section class="ef-panel ef-sources"><h2>แหล่งข้อมูลและเกณฑ์ประเมิน</h2><div id="efSources"></div><p>ค่าฝน 35 มม. และระยะ 30 กม. เป็นเกณฑ์คัดกรองของระบบ ใช้สถานีที่มีค่าตรวจวัดและเวลาไม่เกิน 24 ชั่วโมง ความใกล้สถานีหรือพื้นที่เฝ้าระวังไม่ยืนยันน้ำท่วมภายในนิคมฯ การยืนยันผลกระทบต้องใช้ขอบเขตน้ำท่วมตามวันที่ภาพและข้อมูลจากพื้นที่</p><a href="https://disaster.gistda.or.th/flood" target="_blank" rel="noopener">ตรวจสอบภาพและวันที่น้ำท่วม GISTDA ↗</a> · <a href="https://www.thaiwater.net/new4all/warning" target="_blank" rel="noopener">ตรวจสอบประกาศพื้นที่เฝ้าระวัง ThaiWater ↗</a></section>`;
  warning.prepend(host);
  $('efRefresh').onclick=load;
  $('efReport').onclick=()=>{$('openFloodReport')?.click()};
  $('efSearch').oninput=()=>renderEstates();
  host.addEventListener('click',e=>{const button=e.target.closest('[data-ef-lat]');if(!button)return;zoom(button.dataset.efLat,button.dataset.efLon);if(button.dataset.efEstate){selected=button.dataset.efEstate;renderEstates()}});
 }
 function renderEstates(){
  if(!current)return;const m=model(current),q=$('efSearch').value.trim();
  if(!m.complete){$('efEstates').innerHTML='<p class="ef-empty">รอชุดข้อมูลที่คำนวณด้วยเกณฑ์ใหม่และมีรายการสถานีครบ จึงยังไม่แสดงยอดนิคมฯ</p>';return}
  const rows=m.watch.filter(e=>e.name.includes(q));
  $('efEstates').innerHTML=rows.length?rows.map(e=>`<button type="button" class="ef-estate" aria-pressed="${selected===String(e.id)}" data-ef-estate="${esc(e.id)}" data-ef-lat="${e.lat}" data-ef-lon="${e.lon}"><b>${esc(e.name)}</b><small>สถานีฝนเข้าเกณฑ์ ${e.rain.length} · ระดับน้ำเข้าเกณฑ์ ${e.water.length}<br>สถานีเข้าเกณฑ์ใกล้ที่สุด ${fmt(e.nearest)} กม.${e.maxRain!==null?' · ฝนสูงสุด '+fmt(e.maxRain)+' มม.':''}</small></button>`).join(''):`<p class="ef-empty">${q?'ไม่พบชื่อนิคมฯ ที่ค้นหา':'ไม่พบนิคมฯ เข้าเกณฑ์จากสถานีที่มีเวลาตรวจวัดภายใน 24 ชม. ในชุดข้อมูลนี้'}${m.stale?' · ชุดข้อมูลย้อนหลัง':''}</p>`;
 }
 function render(data){
  mount();if(!$('estateFocusDashboard'))return;current=data;const m=model(data);
  $('efStatus').dataset.state=m.complete&&!m.stale&&data.status==='ok'?'ready':'incomplete';
  $('efStatus').textContent=(m.complete?(m.stale?'ข้อมูลย้อนหลัง':data.status==='partial'?'ข้อมูลบางแหล่งไม่พร้อม':'ใช้ชุดข้อมูลครบสำหรับคัดกรองนิคมฯ'):'ข้อมูลยังไม่ครบสำหรับคำนวณยอดนิคมฯ')+' · จัดทำชุดข้อมูล '+time(data.generated_at)+' · ตรวจไฟล์ใหม่ทุก 5 นาที (ต้นทางอัปเดตตามรอบของแต่ละแหล่ง)';
  set('efTotal',m.complete?fmt(m.estates.length):'รอตรวจสอบ');
  [['efWatch',m.watch.length],['efRainWatch',m.watch.filter(e=>e.rain.length).length],['efWaterWatch',m.watch.filter(e=>e.water.length).length]].forEach(([id,n])=>set(id,m.complete?fmt(n):'ข้อมูลไม่ครบ'));
  set('ef24',m.warning24.available?fmt(m.warning24.rows.length):'ไม่มีข้อมูล');set('ef48',m.warning48.available?fmt(m.warning48.rows.length):'ไม่มีข้อมูล');
  renderEstates();
  set('efStationNote',m.complete?`แสดง ${m.near.length} สถานีในรัศมี 30 กม. · เวลาตรวจวัดภายใน 24 ชั่วโมง · ไม่ใช้ ${m.excluded} รายการที่พิกัดหรือเวลาไม่ผ่านเกณฑ์ · คลิกสถานีเพื่อซูม`:'รายการสถานีชุดเดิมมีไม่ครบ จึงยังใช้ตรวจสอบยอดไม่ได้ รอข้อมูลที่แก้ไขแล้ว');
  const rows=m.complete?m.near.slice().sort((a,b)=>(Number(b.severity_score)||0)-(Number(a.severity_score)||0)):[];
  $('efStations').innerHTML=rows.length?rows.map(r=>`<tr><td><button type="button" data-ef-lat="${r.lat}" data-ef-lon="${r.lon}">${esc(r.station)}</button><br>${esc(r.agency||'ThaiWater')} · ${esc(r.province)}</td><td>${esc(r.value_text||'ไม่มีค่า')}</td><td>${esc(r.status||'ไม่ระบุ')}</td><td>${esc(r.nearest?.name)}<br>${fmt(r.distance)} กม.</td><td>${esc(time(r.observed_at))}</td></tr>`).join(''):'<tr><td colspan="5">ยังไม่มีรายการที่แสดงได้ · ไม่ใช้การไม่มีข้อมูลยืนยันว่าพื้นที่ปลอดภัย</td></tr>';
  for(const [id,ds] of [['efWarning24',m.warning24],['efWarning48',m.warning48]]){
   $(id).innerHTML=!ds.available?'<p class="ef-empty">ข้อมูลประกาศหรือพิกัดนิคมฯ ไม่พร้อม / เกินช่วง 24 ชั่วโมง จึงยังสรุปจำนวนไม่ได้</p>':`<p>รอบประกาศ ${esc(time(new Date(ds.issued).toISOString()))}${ds.unlocated?' · มี '+ds.unlocated+' รายการที่ไม่มีพิกัด จึงไม่รวมในการคำนวณ':''}</p>`+(ds.rows.length?ds.rows.map(r=>`<div class="ef-risk"><button data-ef-lat="${r.lat}" data-ef-lon="${r.lon}">${esc([r.tambon,r.amphoe,r.province].join(' '))}</button><br>ใกล้ ${esc(r.estate.name)} ${fmt(r.distance)} กม.<br>ฝนสะสมตามช่วงประกาศ ${fmt(r.sum_rainfall_mm)} มม. · เวลาสถานี ${esc(time(r.observed_at))}</div>`).join(''):'<p class="ef-empty">ไม่พบตำบลในรายการเฝ้าระวังที่จุดสถานีประเมินอยู่ภายใน 30 กม. จากนิคมฯ ในชุดข้อมูลนี้</p>');
  }
  $('efSources').innerHTML=(data.sources||[]).filter(s=>/^https:\/\//.test(s.url)).map(s=>`<div><a target="_blank" rel="noopener" href="${esc(s.url)}">${esc(s.name)} ↗</a></div>`).join('');
 }
 async function load(){
  if(busy)return;busy=true;if($('efRefresh'))$('efRefresh').disabled=true;
  try{const res=await fetch('./data/thaiwater_latest.json?v='+Date.now(),{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status);const data=await res.json();if(!data.summary||!Array.isArray(data.estates))throw Error('รูปแบบข้อมูลไม่ครบ');render(data)}
  catch(e){if(current){render({...current,status:'stale'});$('efStatus').textContent+=' · โหลดรอบใหม่ไม่สำเร็จ'}else{set('efStatus','โหลดข้อมูลไม่สำเร็จ ยังไม่สามารถสรุปสถานการณ์ได้');$('efStatus').dataset.state='incomplete'}}
  finally{busy=false;if($('efRefresh'))$('efRefresh').disabled=false}
 }
 function start(){mount();if(window.IEAT_THAIWATER_DATA)render(window.IEAT_THAIWATER_DATA);load();setInterval(load,300000)}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
