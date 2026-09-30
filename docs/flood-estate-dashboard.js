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
  const stationValues=near.filter(r=>(r.kind==='rainfall'&&num(r.rainfall_mm)!==null)||(r.kind==='waterlevel'&&num(r.waterlevel_msl)!==null));
  const usable=complete&&Number.isFinite(age)&&age>=-300000&&age<=MAX_AGE&&stationValues.length>0&&data.status!=='stale';
  const watch=usable?estates.map(e=>{
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
  return {estates,complete,usable,age,stale:!Number.isFinite(age)||age< -300000||age>MAX_AGE||data.status==='stale',near,watch,rain:near.filter(r=>r.kind==='rainfall'&&num(r.rainfall_mm)!==null),water:near.filter(r=>r.kind==='waterlevel'&&num(r.waterlevel_msl)!==null),warning24:warning('24h'),warning48:warning('48h'),excluded:(data.stations||[]).length-stations.length};
 }
 window.IEAT_ESTATE_DASHBOARD_MODEL=model;
 let current=null,selected=new URLSearchParams(location.search).get('estate')||'',busy=false;
 function set(id,text){if($(id))$(id).textContent=text}
 function zoom(lat,lon){const f=$('estateFocusMap');if(f?.contentWindow)f.contentWindow.postMessage({type:'flood-map-focus',lat:Number(lat),lon:Number(lon),scale:75000},location.origin)}
 function mount(){
  const warning=$('warning');if(!warning||$('estateFocusDashboard'))return;
  const style=document.createElement('style');style.textContent=`
   #estateFocusDashboard{font-family:"Sarabun",sans-serif;color:#253346;height:100%;min-height:0}
   #estateFocusDashboard *{box-sizing:border-box}
   .ef-workspace{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(360px,1fr);height:100%;gap:18px}
   .ef-data-column{overflow-y:auto;overflow-x:hidden;min-height:0;padding:2px 10px 16px 2px;scrollbar-width:thin;scrollbar-color:#c2cbd4 transparent}
   .ef-map-column{min-height:0;display:flex;flex-direction:column;background:white;border:1px solid #e7edf2;border-radius:22px;overflow:hidden}
   .ef-map-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid #edf1f5}
   .ef-map-head h2{font-size:18px;margin:0}.ef-map-head small{display:block;font-size:13px;color:#7d8996;margin-top:4px}.ef-map-frame{flex:1;position:relative;min-height:0}
   #estateFocusMap{width:100%;height:100%;border:0;display:block}.ef-map-foot{padding:10px 16px;border-top:1px solid #edf1f5;color:#788595;font-size:13px;line-height:1.5;background:#fff}
   .ef-toolbar{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px}
   .ef-toolbar h1{font-size:22px;margin:0}.ef-toolbar p{font-size:14px;color:#82909e;margin:4px 0 0}
   .ef-actions{display:flex;gap:7px;flex-wrap:wrap}.ef-actions button,.ef-actions a{border:1px solid #e1e8ee;border-radius:999px;background:#f5f8fa;color:#536576;padding:8px 13px;font:inherit;font-size:14px;text-decoration:none;cursor:pointer}.ef-actions button:hover{background:#e6f2f3;color:#087f85}.ef-actions button:disabled{opacity:.5}
   .ef-status{font-size:13px;line-height:1.7;color:#6e7d8a;padding:9px 12px;background:#f3f8f8;border-radius:10px;margin:0 0 16px}.ef-status[data-state="incomplete"]{background:#fff5df;color:#8b6718}
   .ef-charts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:16px}
   .ef-panel,.ef-chart,.ef-metric{background:#fff;border:1px solid #edf1f5;border-radius:20px;box-shadow:0 3px 14px #26334604;min-width:0}
   .ef-chart{padding:18px 15px;min-height:300px}.ef-chart h2{font-size:15px;line-height:1.55;margin:0 0 14px;font-weight:600}.ef-chart p{font-size:13px;color:#84919c;line-height:1.6}
   .ef-gauge svg{width:100%;display:block;margin:32px auto 16px;max-width:245px}.ef-gauge text{font-family:Sarabun,sans-serif}
   .ef-donut{width:128px;height:128px;margin:15px auto 20px;border-radius:50%;position:relative;display:grid;place-items:center;background:#e8edf1}.ef-donut:before{content:"";position:absolute;inset:24px;border-radius:50%;background:white}.ef-donut b{position:relative;font-size:22px;color:#334bab}.ef-chart-legend{display:grid;gap:8px;font-size:13px;color:#74818d}.ef-chart-legend div{display:flex;gap:6px;align-items:center}.ef-chart-legend i{width:8px;height:8px;border-radius:50%;flex:none}.ef-chart-legend strong{margin-left:auto;color:#455364;font-size:13px}
   .ef-rank-row{display:block;width:100%;border:0;background:none;text-align:left;padding:0;margin:13px 0;font:inherit;cursor:pointer;color:#667785}.ef-rank-row span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;margin-bottom:5px}.ef-rank-track{height:18px;background:#f4f7fa;border-radius:4px;overflow:hidden}.ef-rank-track b{display:block;height:100%;min-width:28px;background:#ffd943;color:#5d520a;padding:1px 5px;text-align:right;font-size:12px;font-weight:600;border-radius:4px}.ef-rank-row:hover b{background:#f0c527}
   .ef-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:16px}
   .ef-metric{padding:16px;cursor:pointer;min-height:125px;transition:border-color .15s}.ef-metric:hover{border-color:#71bdc0}.ef-metric:focus-visible{outline:3px solid #138b90;outline-offset:2px}.ef-metric h2{font-size:14px;line-height:1.5;margin:0;color:#697b8a;font-weight:500}.ef-metric-value{display:flex;align-items:baseline;gap:6px;margin:8px 0}.ef-metric strong{font-size:26px;color:#1c8f96;line-height:1.2}.ef-unit{font-size:12px;color:#95a0ac}.ef-metric small{font-size:12px;color:#8c98a3;line-height:1.5;display:block}
   .ef-panel{padding:18px;margin-bottom:16px}.ef-panel h2{font-size:17px;margin:0 0 8px}.ef-panel p{font-size:13px;line-height:1.7;color:#83909b}.ef-panel summary{font-size:15px;cursor:pointer;color:#687b89;font-weight:600}.ef-panel[open]>summary{margin-bottom:12px}
   .ef-tools{display:flex;gap:8px;flex-wrap:wrap}.ef-tools input,.ef-tools select{border:1px solid #e4eaf0;background:#f8fafb;border-radius:999px;padding:9px 12px;color:#607382;font:inherit;font-size:14px;min-width:0}.ef-tools input{flex:1 1 160px}.ef-tools select{flex:1 1 190px}
   .ef-count{font-size:12px;color:#9aa6b0}.ef-estates{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-height:300px;overflow:auto;scrollbar-width:thin;padding:3px}.ef-estate{width:100%;border:1px solid #e9edf2;border-radius:12px;background:#f7f8fb;color:#576179;text-align:left;padding:11px;font:inherit;font-size:14px;cursor:pointer}.ef-estate small{display:block;margin-top:5px;font-size:12px;line-height:1.6;color:#84929d}.ef-estate[aria-pressed="true"]{background:#f0f8f2;border-color:#80b391;color:#286f40}.ef-estate:focus-visible{outline:3px solid #138b90}.ef-selection{background:#eef8f2;border-radius:12px;color:#337650;font-size:14px;line-height:1.7;padding:12px;margin:12px 0}
   .ef-table{overflow:auto;max-height:370px;scrollbar-width:thin}.ef-table table{border-collapse:collapse;width:100%;min-width:590px;font-size:13px}.ef-table td,.ef-table th{padding:10px;border:1px solid #eef1f4;text-align:left;vertical-align:top;color:#687b89;line-height:1.7}.ef-table th{position:sticky;top:0;background:#f5f8fb;z-index:1;color:#4f6475;font-weight:500}.ef-table button{background:none;border:0;color:#2f8ea0;padding:0;text-align:left;font:inherit;text-decoration:underline;cursor:pointer}
   .ef-warning{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.ef-risk{padding:10px 0;border-bottom:1px solid #edf1f4;font-size:13px;color:#80909c;line-height:1.7}.ef-risk button{border:0;background:none;color:#2f8ea0;padding:0;text-align:left;font:inherit;cursor:pointer}.ef-sources{font-size:13px;line-height:1.9}.ef-sources a{color:#338da0}.ef-empty{padding:15px;color:#8b98a5;font-size:14px;line-height:1.7;grid-column:1/-1}
   @media(max-width:1250px){.ef-workspace{grid-template-columns:minmax(0,1.2fr) minmax(330px,1fr)}.ef-chart{padding:14px 10px}.ef-donut{width:110px;height:110px}.ef-donut:before{inset:20px}.ef-chart h2{font-size:14px}.ef-toolbar h1{font-size:20px}}
   @media(max-width:950px){#estateFocusDashboard{height:auto}.ef-workspace{grid-template-columns:1fr;height:auto}.ef-map-column{grid-row:1;height:480px}.ef-data-column{overflow:visible;padding:0}.ef-charts{grid-template-columns:repeat(3,minmax(0,1fr))}}
   @media(max-width:600px){.ef-charts{grid-template-columns:1fr}.ef-chart{min-height:0;padding:20px}.ef-gauge svg{max-width:220px;margin:15px auto}.ef-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}.ef-estates,.ef-warning{grid-template-columns:1fr}.ef-map-column{height:420px}.ef-toolbar h1{font-size:19px}.ef-chart-legend{max-width:240px;margin:auto}.ef-donut{width:135px;height:135px}.ef-donut:before{inset:24px}}

   .ef-map-column:fullscreen{width:100vw;height:100dvh;border-radius:0;border:0;background:#fff}
   .ef-map-column.ef-map-expanded{position:fixed;inset:0;z-index:9999;height:100dvh;width:100%;border-radius:0;background:white}
   .ef-map-column:fullscreen .ef-map-frame,.ef-map-column.ef-map-expanded .ef-map-frame{flex:1;min-height:0}

   .ef-table table{font-size:16px}.ef-table td,.ef-table th{color:#213547;padding:12px;line-height:1.7}.ef-table th{font-weight:700;background:#edf3f8}
   .ef-table .ef-status-cell{min-width:115px;font-weight:700;text-align:center;vertical-align:middle;border:1px solid #d7e2e9;color:#111}
   .ef-status-cell[data-severity="normal"],.ef-status-key[data-severity="normal"]{background:#dcfce7;color:#14532d}
   .ef-status-cell[data-severity="moderate"],.ef-status-key[data-severity="moderate"]{background:#dbeafe;color:#1e3a8a}
   .ef-status-cell[data-severity="watch"],.ef-status-key[data-severity="watch"]{background:#fef08a;color:#713f12}
   .ef-status-cell[data-severity="high"],.ef-status-key[data-severity="high"]{background:#fed7aa;color:#7c2d12}
   .ef-status-cell[data-severity="danger"],.ef-status-key[data-severity="danger"]{background:#fecaca;color:#7f1d1d}
   .ef-status-cell[data-severity="unknown"],.ef-status-key[data-severity="unknown"]{background:#e5e7eb;color:#374151}
   .ef-status-legend{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0;font-size:14px;line-height:1.6}
   .ef-status-key{padding:5px 9px;border-radius:6px;font-weight:600}


   .ef-table{width:100%;max-width:100%;overflow-x:auto}
   .ef-table table{width:100%;min-width:0;table-layout:fixed}
   .ef-table th:nth-child(1){width:25%}.ef-table th:nth-child(2){width:15%}.ef-table th:nth-child(3){width:15%}.ef-table th:nth-child(4){width:27%}.ef-table th:nth-child(5){width:18%}
   .ef-table td,.ef-table th{padding:9px 8px;white-space:normal;overflow-wrap:anywhere;word-break:normal;line-height:1.65}
   .ef-table button{display:inline;max-width:100%;white-space:normal;overflow-wrap:anywhere;line-height:inherit}
   .ef-table .ef-status-cell{min-width:0}
   @media(max-width:600px){.ef-table table{font-size:14px}.ef-table td,.ef-table th{padding:8px 5px}.ef-panel:has(.ef-table){padding:12px}}


   #estateFocusDashboard,#estateFocusDashboard *{color:#000!important}
   #estateFocusDashboard svg text{fill:#000!important}
   #estateFocusDashboard input::placeholder{color:#000;opacity:1}

   #estateFocusDashboard.ef-estate-mode .ef-charts,#estateFocusDashboard.ef-estate-mode .ef-metrics{display:none}
   .ef-brief-title{font-size:24px;margin:0 0 10px;line-height:1.5}
   .ef-brief-note{background:#fff5df;border-left:4px solid #d97706;padding:12px;border-radius:8px;font-size:14px;line-height:1.7}
   .ef-brief-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:16px 0}
   .ef-brief-value{background:#eff6f8;border:1px solid #d5e3e8;border-radius:12px;padding:14px;font-size:14px;line-height:1.6}
   .ef-brief-value strong{display:block;font-size:24px;margin:6px 0}
   .ef-gap-list{margin:14px 0;padding:0;list-style:none;font-size:14px;line-height:1.8}
   .ef-gap-list li{padding:12px 0;border-bottom:1px solid #e3e9ed}.ef-gap-list b{display:block}
   .ef-brief-links{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}
   .ef-brief-links a{padding:9px 12px;border:1px solid #b9ccd8;border-radius:8px;text-decoration:none;font-size:14px}
   @media(max-width:600px){.ef-brief-title{font-size:21px}.ef-brief-grid{grid-template-columns:1fr}}

  `;document.head.appendChild(style);
  const host=document.createElement('section');host.id='estateFocusDashboard';
  const metrics=[['efWatch','นิคมฯ เข้าเกณฑ์เฝ้าระวัง','ผลคัดกรองจากสถานีใกล้นิคมฯ'],['efWaterWatch','ใกล้ระดับน้ำเข้าเกณฑ์','สถานีระดับน้ำภายใน 30 กม.'],['efRainWatch','ใกล้ฝนเข้าเกณฑ์','ฝนสะสมมากกว่า 35 มม. ภายใน 30 กม.'],['efTotal','นิคมฯ / ท่าเรือในชุดข้อมูล','ตำแหน่งที่ใช้ประเมินจากข้อมูล กนอ.'],['ef24','ตำบลเฝ้าระวัง 24 ชั่วโมง','ระยะจากจุดสถานีประเมินถึงนิคมฯ'],['ef48','ตำบลเฝ้าระวัง 48 ชั่วโมง','ระยะจากจุดสถานีประเมินถึงนิคมฯ']];
  host.innerHTML=`<div class="ef-workspace"><div class="ef-data-column">
   <div class="ef-toolbar"><div><h1>สถานการณ์น้ำในพื้นที่นิคมอุตสาหกรรม</h1><p>เฝ้าระวังจากข้อมูลสถานี · รัศมี 30 กิโลเมตร</p></div><div class="ef-actions"><button id="efRefresh" type="button">อัปเดต</button><button id="efReport" type="button">จัดทำรายงาน ↗</button></div></div>
   <div class="ef-status" id="efStatus" role="status">กำลังตรวจสอบข้อมูล…</div>
   <section id="efEstateBrief" class="ef-panel" hidden aria-label="สรุป GIS รายนิคม"></section>
   <div class="ef-charts"><article class="ef-chart"><h2>นิคมฯ เข้าเกณฑ์เฝ้าระวัง</h2><div class="ef-gauge" id="efGauge"></div><p>เทียบกับนิคมฯ / ท่าเรือทั้งหมดในชุดข้อมูล ไม่ใช่จำนวนนิคมฯ ที่ยืนยันน้ำท่วม</p></article><article class="ef-chart"><h2>สัดส่วนการคัดกรองนิคมฯ</h2><div id="efComposition"></div></article><article class="ef-chart"><h2>5 นิคมฯ ใกล้สถานีฝนสะสมสูงสุด</h2><div id="efRainRank"></div><p>ฝนสะสม 24 ชม. สูงสุดจากสถานีในรัศมี 30 กม. · หน่วย มม.</p></article></div>
   <div class="ef-metrics" aria-label="การ์ดข้อมูลเฝ้าระวัง">${metrics.map(([id,title,note])=>`<article class="ef-metric" role="button" tabindex="0" data-ef-card="${id}"><h2>${title}</h2><div class="ef-metric-value"><strong id="${id}">–</strong><span class="ef-unit">${['ef24','ef48'].includes(id)?'ตำบล':'แห่ง'}</span></div><small>${note}</small></article>`).join('')}</div>
   <section class="ef-panel"><h2>ติดตามนิคมฯ / ท่าเรือ</h2><div class="ef-tools"><input id="efSearch" type="search" aria-label="ค้นหาชื่อนิคมฯ / ท่าเรือ" placeholder="ค้นหาชื่อนิคมฯ / ท่าเรือ"><select id="efFilter" aria-label="กรองข้อมูลนิคมฯ"><option value="watch">เข้าเกณฑ์เฝ้าระวัง</option><option value="water">ใกล้ระดับน้ำเข้าเกณฑ์</option><option value="rain">ใกล้ฝนเข้าเกณฑ์</option><option value="all">ทุกนิคมฯ / ท่าเรือ</option></select></div><p id="efResultCount" class="ef-count"></p><div class="ef-selection" id="efSelection" hidden></div><div id="efEstates" class="ef-estates"></div></section>
   <section class="ef-panel"><div class="ef-toolbar"><h2>สถานีที่ใช้ติดตาม</h2><div class="ef-actions"><button id="efClear" type="button">กลับภาพรวม</button></div></div><p id="efStationNote"></p><div class="ef-status-legend" aria-label="สีสถานะตามข้อมูลสถานี"><span class="ef-status-key" data-severity="normal">ปกติ</span><span class="ef-status-key" data-severity="moderate">ฝนปานกลาง</span><span class="ef-status-key" data-severity="watch">เฝ้าระวัง</span><span class="ef-status-key" data-severity="high">วิกฤต / เสี่ยงสูง</span><span class="ef-status-key" data-severity="danger">ล้นตลิ่ง</span><span class="ef-status-key" data-severity="unknown">ไม่มีข้อมูล / ไม่ระบุ</span></div><div class="ef-table"><table><thead><tr><th>สถานี / ที่มา</th><th>ค่าตรวจวัด</th><th>สถานะสถานี</th><th>นิคมฯ / ระยะ</th><th>เวลาตรวจวัด</th></tr></thead><tbody id="efStations"></tbody></table></div></section>
   <div class="ef-warning"><details class="ef-panel" id="efDetails24"><summary>พื้นที่เฝ้าระวัง 24 ชั่วโมง</summary><div id="efWarning24"></div></details><details class="ef-panel" id="efDetails48"><summary>พื้นที่เฝ้าระวัง 48 ชั่วโมง</summary><div id="efWarning48"></div></details></div>
   <details class="ef-panel ef-sources"><summary>แหล่งข้อมูลและเกณฑ์ประเมิน</summary><div id="efSources"></div><p>คัดกรองทุกนิคมฯ กับทุกสถานีภายใน 30 กม. ใช้ค่าฝนมากกว่า 35 มม. หรือสถานะระดับน้ำเฝ้าระวังขึ้นไปจาก ThaiWater และเวลาสถานีภายใน 24 ชั่วโมง ระยะเป็นเส้นตรงจากจุดตำแหน่งนิคมฯ ไม่ใช่ขอบเขตนิคมฯ หนึ่งนิคมฯ อาจเข้าเกณฑ์ทั้งฝนและระดับน้ำ</p><p>การเข้าเกณฑ์เฝ้าระวังไม่ยืนยันน้ำท่วมภายในนิคมฯ ต้องตรวจวันที่ภาพดาวเทียม ขอบเขตน้ำท่วม และข้อมูลจากพื้นที่</p><a href="https://disaster.gistda.or.th/flood" target="_blank" rel="noopener">GISTDA ↗</a> · <a href="https://www.thaiwater.net/new4all/warning" target="_blank" rel="noopener">ThaiWater ↗</a></details>
   </div><section class="ef-map-column"><header class="ef-map-head"><div><h2>แผนที่เฝ้าระวังนิคมอุตสาหกรรม</h2><small>เลือกนิคมฯ หรือสถานีทางซ้ายเพื่อซูม</small></div><div class="ef-actions"><button type="button" id="efMapFullscreen" aria-pressed="false">เต็มหน้าจอ ↗</button><button type="button" id="efMapReset">ดูภาพรวม</button></div></header><div class="ef-map-frame"><iframe id="estateFocusMap" title="แผนที่สถานการณ์น้ำและนิคมอุตสาหกรรม" src="flood-webmap.html?v=20260930-single-map&amp;center=101,13&amp;scale=9244648" loading="eager"></iframe></div><footer class="ef-map-foot">GISTDA: พื้นที่ตรวจพบตามวันที่ภาพ · Longdo: จุดรายงานเหตุการณ์ · ThaiWater: สถานีระดับน้ำ</footer></section></div>`;
  warning.prepend(host);
  const loading=$('dashboardLoading');if(loading)loading.remove();

  const mapPanel=host.querySelector('.ef-map-column'),fullButton=$('efMapFullscreen');
  let previousOverflow='';
  function syncFullscreen(){
   const expanded=document.fullscreenElement===mapPanel||mapPanel.classList.contains('ef-map-expanded');
   fullButton.textContent=expanded?'ย่อแผนที่ ↙':'เต็มหน้าจอ ↗';
   fullButton.setAttribute('aria-pressed',String(expanded));
  }
  function closeExpanded(){
   mapPanel.classList.remove('ef-map-expanded');document.body.style.overflow=previousOverflow;syncFullscreen();
  }
  fullButton.onclick=async()=>{
   if(document.fullscreenElement===mapPanel){await document.exitFullscreen();return}
   if(mapPanel.classList.contains('ef-map-expanded')){closeExpanded();return}
   if(mapPanel.requestFullscreen){try{await mapPanel.requestFullscreen();return}catch(error){}}
   previousOverflow=document.body.style.overflow;mapPanel.classList.add('ef-map-expanded');document.body.style.overflow='hidden';syncFullscreen();
  };
  document.addEventListener('fullscreenchange',syncFullscreen);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mapPanel.classList.contains('ef-map-expanded'))closeExpanded()});

  $('estateFocusMap').addEventListener('load',()=>{if(selected&&current){const estate=model(current).estates.find(e=>String(e.id)===selected);if(estate)zoom(estate.lat,estate.lon)}});
  $('efRefresh').onclick=load;
  $('efReport').onclick=()=>window.open('flood-report-editor.html#infographic','_blank','noopener');
  $('efSearch').oninput=()=>renderEstates();$('efFilter').onchange=()=>renderEstates();
  function reset(){selected='';if(current)render(current);$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat:13,lon:101,scale:9244648},location.origin)}
  $('efClear').onclick=reset;$('efMapReset').onclick=reset;
  function openCard(id){const filters={efWatch:'watch',efWaterWatch:'water',efRainWatch:'rain',efTotal:'all'};if(filters[id]){$('efFilter').value=filters[id];$('efSearch').value='';renderEstates();$('efSearch').scrollIntoView?.({behavior:'smooth',block:'center'});$('efSearch').focus?.()}else{const panel=$(id==='ef24'?'efDetails24':'efDetails48');if(panel){panel.open=true;panel.scrollIntoView?.({behavior:'smooth',block:'start'})}}}
  host.addEventListener('keydown',e=>{const card=e.target.closest('[data-ef-card]');if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openCard(card.dataset.efCard)}});
  host.addEventListener('click',e=>{const card=e.target.closest('[data-ef-card]');if(card){openCard(card.dataset.efCard);return}const button=e.target.closest('[data-ef-lat]');if(!button)return;zoom(button.dataset.efLat,button.dataset.efLon);if(button.dataset.efEstate){selected=button.dataset.efEstate;render(current)}});
 }
 function renderCharts(m){
  if(!m.usable){['efGauge','efComposition','efRainRank'].forEach(id=>$(id).innerHTML='<div class="ef-empty">ข้อมูลยังไม่ครบหรือยังไม่พร้อมประเมิน</div>');return}
  const total=m.estates.length,count=m.watch.length,pct=total?count/total*100:0;
  $('efGauge').innerHTML=`<svg viewBox="0 0 200 130" role="img" aria-label="นิคมฯ เข้าเกณฑ์ ${count} จาก ${total} แห่ง"><path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#eef1f4" stroke-width="22" pathLength="100"/><path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#f96961" stroke-width="22" pathLength="100" stroke-dasharray="${pct} 100"/><text x="100" y="101" text-anchor="middle" fill="#3f51aa" font-size="19" font-weight="600">${count} แห่ง</text><text x="100" y="122" text-anchor="middle" fill="#92a0ac" font-size="12">จาก ${total} แห่งในชุดข้อมูล</text></svg>`;
  const both=m.watch.filter(e=>e.rain.length&&e.water.length).length,rainOnly=m.watch.filter(e=>e.rain.length&&!e.water.length).length,waterOnly=m.watch.filter(e=>e.water.length&&!e.rain.length).length;
  const parts=[['ใกล้ระดับน้ำเข้าเกณฑ์','#62c948',waterOnly],['ใกล้ฝนเข้าเกณฑ์','#ffda31',rainOnly],['เข้าเกณฑ์ทั้งสองแบบ','#db62e8',both],['ไม่พบสถานีเข้าเกณฑ์','#b8bdc3',total-count]];let start=0;
  const stops=parts.map(([,color,n])=>{const end=start+n/total*100,s=`${color} ${start}% ${end}%`;start=end;return s}).join(',');
  $('efComposition').innerHTML=`<div class="ef-donut" role="img" aria-label="สัดส่วน ${parts.map(([label,,n])=>label+' '+n+' แห่ง').join(', ')}" style="background:conic-gradient(${stops})"><b>${total}</b></div><div class="ef-chart-legend">${parts.map(([label,color,n])=>`<div><i style="background:${color}"></i><span>${label}</span><strong>${n}</strong></div>`).join('')}</div>`;
  const rank=m.estates.map(e=>{const values=m.rain.filter(r=>km(e,r)<=RADIUS).map(r=>Number(r.rainfall_mm));return {...e,rain:values.length?Math.max(...values):null}}).filter(e=>e.rain!==null).sort((a,b)=>b.rain-a.rain).slice(0,5),max=rank[0]?.rain||1;
  $('efRainRank').innerHTML=rank.length?rank.map(e=>`<button class="ef-rank-row" type="button" data-ef-estate="${esc(e.id)}" data-ef-lat="${e.lat}" data-ef-lon="${e.lon}" title="${esc(e.name)}: ${fmt(e.rain)} มม."><span>${esc(e.name.replace(/^นิคมอุตสาหกรรม/,''))}</span><div class="ef-rank-track"><b style="width:${Math.max(12,e.rain/max*100)}%">${fmt(e.rain)}</b></div></button>`).join(''):'<div class="ef-empty">ไม่มีค่าฝนล่าสุดที่ใช้จัดอันดับได้</div>';
 }
 function renderEstates(){
  if(!current)return;const m=model(current),q=$('efSearch').value.trim();
  if(!m.usable){$('efEstates').innerHTML='<p class="ef-empty">ชุดข้อมูลยังไม่ครบ / ข้อมูลย้อนหลัง / ไม่มีค่าสถานีล่าสุด จึงยังไม่สรุปยอดนิคมฯ ที่เข้าเกณฑ์</p>';return}
  const filter=$('efFilter').value||'watch';
  const assessments=m.estates.map(e=>m.watch.find(w=>String(w.id)===String(e.id))||{...e,rain:[],water:[],alerts:[],nearest:null,maxRain:null});
  const rows=(filter==='all'?assessments:m.watch).filter(e=>e.name.includes(q)&&(filter!=='water'||e.water.length)&&(filter!=='rain'||e.rain.length));
  set('efResultCount',`แสดง ${rows.length} แห่ง · นิคลมฯ/ท่าเรือในชุดข้อมูล ${m.estates.length} แห่ง`.replace('นิคลมฯ','นิคมฯ'));
  $('efEstates').innerHTML=rows.length?rows.map(e=>`<button type="button" class="ef-estate" aria-pressed="${selected===String(e.id)}" data-ef-estate="${esc(e.id)}" data-ef-lat="${e.lat}" data-ef-lon="${e.lon}"><b>${esc(e.name)}</b><small>สถานีฝนเข้าเกณฑ์ ${e.rain.length} · ระดับน้ำเข้าเกณฑ์ ${e.water.length}<br>${e.alerts.length?'สถานีเข้าเกณฑ์ใกล้ที่สุด '+fmt(e.nearest)+' กม.':'ไม่พบสถานีเข้าเกณฑ์ในชุดข้อมูลล่าสุด · ยังไม่ใช่การยืนยันว่าปลอดภัย'}${e.maxRain!==null?' · ฝนสูงสุด '+fmt(e.maxRain)+' มม.':''}</small></button>`).join(''):`<p class="ef-empty">${q?'ไม่พบชื่อนิคมฯ ที่ค้นหา':'ไม่พบนิคมฯ เข้าเกณฑ์จากสถานีที่มีเวลาตรวจวัดภายใน 24 ชม. ในชุดข้อมูลนี้'}${m.stale?' · ชุดข้อมูลย้อนหลัง':''}</p>`;
 }

 function stationStatusClass(r){
  const label=String(r.status||'').trim(),score=num(r.severity_score);
  if(!label||/ไม่มีข้อมูล|ไม่ระบุ|ไม่พร้อม/.test(label))return 'unknown';
  if(/ล้นตลิ่ง/.test(label)||score===4)return 'danger';
  if(/วิกฤต|เสี่ยงสูง/.test(label)||score===3)return 'high';
  if(/เฝ้าระวัง/.test(label)||score===2)return 'watch';
  if(/ปานกลาง/.test(label)||score===1)return 'moderate';
  if(label==='ปกติ')return 'normal';
  return 'unknown';
 }

 function render(data){
  mount();if(!$('estateFocusDashboard'))return;current=data;const m=model(data);
  $('efStatus').dataset.state=m.complete&&!m.stale&&data.status==='ok'?'ready':'incomplete';
  $('efStatus').textContent=(m.complete?(m.stale?'ข้อมูลย้อนหลัง':data.status==='partial'?'ข้อมูลบางแหล่งไม่พร้อม':'ใช้ชุดข้อมูลครบสำหรับคัดกรองนิคมฯ'):'ข้อมูลยังไม่ครบสำหรับคำนวณยอดนิคมฯ')+' · จัดทำชุดข้อมูล '+time(data.generated_at)+' · ตรวจไฟล์ใหม่ทุก 5 นาที (ต้นทางอัปเดตตามรอบของแต่ละแหล่ง)';
  set('efTotal',m.complete?fmt(m.estates.length):'รอตรวจสอบ');
  [['efWatch',m.watch.length],['efRainWatch',m.watch.filter(e=>e.rain.length).length],['efWaterWatch',m.watch.filter(e=>e.water.length).length]].forEach(([id,n])=>set(id,m.usable?fmt(n):m.stale?'ข้อมูลย้อนหลัง':'ข้อมูลไม่ครบ'));
  set('ef24',m.warning24.available?fmt(m.warning24.rows.length):'ไม่มีข้อมูล');set('ef48',m.warning48.available?fmt(m.warning48.rows.length):'ไม่มีข้อมูล');
  renderEstates();renderCharts(m);
  const chosen=m.estates.find(e=>String(e.id)===selected);

  const brief=$('efEstateBrief');brief.hidden=!chosen;
  $('estateFocusDashboard').classList.toggle('ef-estate-mode',!!chosen);
  if(chosen){
   const local=m.near.map(r=>({...r,distance:km(chosen,r)})).filter(r=>r.distance<=RADIUS);
   const rains=local.filter(r=>r.kind==='rainfall'&&num(r.rainfall_mm)!==null),waters=local.filter(r=>r.kind==='waterlevel'&&num(r.waterlevel_msl)!==null);
   const watch=m.watch.find(e=>String(e.id)===selected),maxRain=rains.length?Math.max(...rains.map(r=>Number(r.rainfall_mm))):null;
   const status=m.usable?(watch?'พบสถานีใกล้นิคมฯ เข้าเกณฑ์เฝ้าระวัง':'ไม่พบสถานีใกล้นิคมฯ เข้าเกณฑ์ในชุดข้อมูลนี้'):'ข้อมูลยังไม่พร้อมประเมิน';
   brief.innerHTML=`<h2 class="ef-brief-title">สรุป GIS · ${esc(chosen.name)}</h2>
    <p>รอบข้อมูล ${esc(time(data.generated_at))} · คัดกรองสถานีภายใน 30 กม. จากจุดตำแหน่งนิคมฯ</p>
    <div class="ef-brief-note"><b>${status}</b><br>สถานะนี้เป็นผลคัดกรองจากสถานี ยังไม่ใช่การยืนยันว่าน้ำท่วมภายในนิคมฯ</div>
    <div class="ef-brief-grid">
     <div class="ef-brief-value">ฝนสะสม 24 ชม. สูงสุดใกล้นิคมฯ<strong>${m.usable&&maxRain!==null?fmt(maxRain)+' มม.':'ยังไม่มีข้อมูลที่ใช้สรุปได้'}</strong>จาก ${rains.length} สถานีที่มีค่าตรวจวัดล่าสุด</div>
     <div class="ef-brief-value">สถานีระดับน้ำเข้าเกณฑ์เฝ้าระวัง<strong>${m.usable?fmt(watch?.water.length||0)+' สถานี':'ยังสรุปไม่ได้'}</strong>จาก ${waters.length} สถานีระดับน้ำที่มีค่าล่าสุด</div>
    </div>
    <h2>ข้อมูลผลกระทบที่ต้องยืนยันจากพื้นที่</h2>
    <ul class="ef-gap-list">
     <li><b>ขอบเขตและความลึกน้ำท่วม</b>ยังไม่มีชั้นข้อมูลยืนยันปัจจุบันในระบบ · ต้องระบุพิกัด ความลึกน้ำ รูปถ่าย และเวลาสำรวจ</li>
     <li><b>โรงงานที่ได้รับผลกระทบ</b>ยังไม่มีรายชื่อยืนยัน · ต้องซ้อนขอบเขตน้ำท่วมที่ตรวจสอบแล้วกับตำแหน่งโรงงาน และยืนยันกับนิคมฯ</li>
     <li><b>ถนนปิดและทางเข้า–ออก</b>ยังไม่มีเส้นทางที่พื้นที่ยืนยัน · จุด Longdo และ CCTV ใช้ประกอบการตรวจสอบ ไม่ยืนยันว่าเส้นทางผ่านได้</li>
     <li><b>จุดสูบน้ำและจุดช่วยเหลือ</b>ยังไม่มีตำแหน่งและสถานะยืนยัน · ต้องรับข้อมูลจากเจ้าหน้าที่นิคมฯ</li>
    </ul>
    <div class="ef-brief-links"><a href="https://disaster.gistda.or.th/flood" target="_blank" rel="noopener">ตรวจวันที่ภาพ GISTDA ↗</a><a href="https://ieat.go.th/th/ieat-news/9711" target="_blank" rel="noopener">ข่าวสถานการณ์จาก กนอ. ↗</a></div>
    <p>ดูตำแหน่งในแผนที่ด้านข้าง และตรวจค่าตรวจวัดจริงพร้อมเวลาที่ตารางสถานีด้านล่าง · ข้อมูลที่ยังไม่ยืนยันไม่ได้หมายความว่าไม่มีผลกระทบ</p>`;
   zoom(chosen.lat,chosen.lon);
  }

  const selection=$('efSelection');selection.hidden=!chosen;
  if(chosen){const w=m.watch.find(e=>String(e.id)===selected);selection.innerHTML='<b>'+esc(chosen.name)+'</b><br>'+(m.usable?(w?'ฝนเข้าเกณฑ์ '+w.rain.length+' สถานี · ระดับน้ำเข้าเกณฑ์ '+w.water.length+' สถานี':'ไม่พบสถานีเข้าเกณฑ์ในชุดข้อมูลนี้'):'ข้อมูลยังไม่พร้อมสรุป')+'<br>ตารางด้านล่างแสดงเฉพาะสถานีภายใน 30 กม. จากนิคมฯ ที่เลือก'}
  set('efStationNote',m.complete?`แสดง ${m.near.length} สถานีในรัศมี 30 กม. · เวลาตรวจวัดภายใน 24 ชั่วโมง · ไม่ใช้ ${m.excluded} รายการที่พิกัดหรือเวลาไม่ผ่านเกณฑ์ · คลิกสถานีเพื่อซูม`:'รายการสถานีชุดเดิมมีไม่ครบ จึงยังใช้ตรวจสอบยอดไม่ได้ รอข้อมูลที่แก้ไขแล้ว');
  const scoped=chosen?m.near.map(r=>({...r,distance:km(chosen,r),nearest:chosen})).filter(r=>r.distance<=RADIUS):m.near;
  const rows=m.complete?scoped.slice().sort((a,b)=>(Number(b.severity_score)||0)-(Number(a.severity_score)||0)):[];
  if(chosen)set('efStationNote',`${chosen.name} · แสดง ${rows.length} สถานีที่มีเวลาตรวจวัดภายใน 24 ชม. และอยู่ในรัศมี 30 กม. · ระยะห่างวัดจากนิคมฯ ที่เลือก`);
  $('efStations').innerHTML=rows.length?rows.map(r=>`<tr><td><button type="button" data-ef-lat="${r.lat}" data-ef-lon="${r.lon}">${esc(r.station)}</button><br>${esc(r.agency||'ThaiWater')} · ${esc(r.province)}</td><td>${esc(r.value_text||'ไม่มีค่า')}</td><td class="ef-status-cell" data-severity="${stationStatusClass(r)}">${esc(r.status||'ไม่ระบุ')}</td><td>${esc(r.nearest?.name)}<br>${fmt(r.distance)} กม.</td><td>${esc(time(r.observed_at))}</td></tr>`).join(''):'<tr><td colspan="5">ยังไม่มีรายการที่แสดงได้ · ไม่ใช้การไม่มีข้อมูลยืนยันว่าพื้นที่ปลอดภัย</td></tr>';
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
