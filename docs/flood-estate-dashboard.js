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
 let headerEstate='';

 let provinceScope={active:false,province:'',estate:null,name:''},provinceRequest=0;
 const provinceCache=new Map();
 const provinceKey=v=>String(v||'').replace(/^จังหวัด|^จ\./,'').trim();
 function scopeDistance(r){
  const e=provinceScope.estate,lat=num(r.lat),lon=num(r.lng??r.lon);
  return e&&lat!==null&&lon!==null?km(e,{lat,lon}):null;
 }
 function distanceLabel(r){if(!provinceScope.active)return '';const distance=scopeDistance(r);return '<small>ห่างจาก '+esc(provinceScope.name)+' '+(distance===null?'ไม่ทราบระยะ (ไม่มีพิกัด)':fmt(distance)+' กม. (ระยะเส้นตรง)')+'</small>';}
 async function publishProvinceScope(estate){
  const token=++provinceRequest,name=headerEstate;
  provinceScope={active:!!name,province:'',estate:estate||null,name,radiusKm:RADIUS};
  function publish(){
   window.IEAT_FLOOD_PROVINCE_SCOPE=provinceScope;
   document.dispatchEvent(new CustomEvent('ieat-flood-estate-scope',{detail:provinceScope}));
   if(current&&provinceScope.active){const m=model(current);for(const [id,ds] of [['efWarning24',m.warning24],['efWarning48',m.warning48]]){const host=$(id);if(host)host.innerHTML=!ds.available?'<p>ข้อมูลประกาศยังไม่พร้อม</p>':ds.rows.length?ds.rows.map(r=>warningCard(r,id==='efWarning24'?24:48,true)).join(''):'<p>ไม่พบพื้นที่เฝ้าระวังในจังหวัดที่เลือก</p>';}}
   $('estateFocusMap')?.contentWindow?.postMessage({type:'flood-province-scope',...provinceScope},location.origin);
   const note=$('efProvinceScopeNote');if(note)note.textContent=!name?'ข้อมูลทั่วประเทศ · แสดงตัวอย่างสูงสุด 6 รายการต่อส่วน กรุณาเลือกนิคมฯ เพื่อดูข้อมูลเฉพาะพื้นที่':provinceScope.province?name+' · ข้อมูลภายใน '+RADIUS+' กม. · เรียงใกล้ที่สุดก่อน · ระยะเส้นตรง':'กำลังตรวจสอบจังหวัดของ '+name;
  }
  publish();if(!name||!estate)return;
  try{
   let province=provinceCache.get(String(estate.id))||provinceKey(estate.province||'');
   if(!province){
    const q=new URLSearchParams({location:estate.lon+','+estate.lat,f:'json',langCode:'TH'});
    const response=await fetch('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?'+q,{signal:AbortSignal.timeout(15000)});
    if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();
    province=provinceKey(data.address?.Region);if(!province)throw Error('ไม่พบจังหวัด');
    provinceCache.set(String(estate.id),province);
   }
   if(token!==provinceRequest||name!==headerEstate)return;
   provinceScope={active:true,province,estate,name,radiusKm:RADIUS};publish();
  }catch(error){if(token!==provinceRequest)return;const note=$('efProvinceScopeNote');if(note)note.textContent='ตรวจสอบจังหวัดไม่สำเร็จ กรุณาเลือกนิคมฯ อีกครั้ง';}
 }

 const estateKey=v=>String(v||'').replace(/นิคมอุตสาหกรรม|สำนักงานนิคมฯ|นิคมฯ|\s/g,'').normalize('NFKC').toLowerCase();
 function model(data,now=Date.now()){
  const estates=(data.estates||[]).filter(point).filter(e=>!headerEstate||estateKey(e.name)===estateKey(headerEstate));
  const complete=Number(data.schema_version)>=3&&data.coverage?.stations_complete===true&&Array.isArray(data.stations)&&data.stations.length===Number(data.summary?.station_count)&&['ok','partial','stale'].includes(data.status);
  const generated=timestamp(data.generated_at),age=now-generated;
  const fresh=r=>{const age=now-timestamp(r.observed_at);return Number.isFinite(age)&&age>=-300000&&age<=MAX_AGE};
  const stations=(data.stations||[]).filter(r=>point(r)&&fresh(r)&&(r.kind!=='waterlevel'||(now-timestamp(r.observed_at)<=21600000&&num(r.waterlevel_msl)!==null&&num(r.bankfull_msl)!==null)));
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
    if(provinceScope.active?(!provinceScope.province||provinceKey(r.province)!==provinceScope.province):distance>RADIUS)return;
    const key=r.geocode||[r.province,r.amphoe,r.tambon].join('|');const prior=groups.get(key);
    if(!prior||distance<prior.distance)groups.set(key,{...r,...p,distance,estate});
   });
   return {available:complete,rows:[...groups.values()],issued,unlocated};
  }
  return {estates,complete,usable,age,stale:!Number.isFinite(age)||age< -300000||age>MAX_AGE||data.status==='stale',near,watch,rain:near.filter(r=>r.kind==='rainfall'&&num(r.rainfall_mm)!==null),water:near.filter(r=>r.kind==='waterlevel'&&num(r.waterlevel_msl)!==null),warning24:warning('24h'),warning48:warning('48h'),excluded:(data.stations||[]).length-stations.length};
 }
 window.IEAT_ESTATE_DASHBOARD_MODEL=model;
 let riverScope=null;
 let current=null,selected=new URLSearchParams(location.search).get('estate')||'',busy=false;

 function scopedModel(m){
  if(headerEstate)return m;
  if(!riverScope)return {...m,estates:[],watch:[]};
  const stations=riverScope.stations.filter(point),estates=m.estates.map(e=>({...e,riverDistance:stations.length?Math.min(...stations.map(r=>km(e,r))):Infinity})).filter(e=>e.riverDistance<=RADIUS);
  const ids=new Set(estates.map(e=>String(e.id))),distance=new Map(estates.map(e=>[String(e.id),e.riverDistance]));
  const watch=m.watch.filter(e=>ids.has(String(e.id))).map(e=>{
   const water=e.water.filter(w=>stations.some(r=>km(w,r)<=1)),rain=e.rain,alerts=[...rain,...water];
   return {...e,water,rain,alerts,riverDistance:distance.get(String(e.id)),nearest:alerts.length?Math.min(...alerts.map(r=>r.distance)):null};
  }).filter(e=>e.alerts.length);
  return {...m,estates,watch};
 }
 document.addEventListener('ieat-river-scope',event=>{
  riverScope={river:event.detail.river,stations:event.detail.stations};
  if(current){const m=scopedModel(model(current));if(!headerEstate&&!m.estates.some(e=>String(e.id)===selected))selected='';renderEstates();}
 });


 function applyHeaderEstate(name,keepSearch=false){
  headerEstate=String(name||'');selected='';
  if(current){const estate=model(current).estates[0];if(headerEstate&&estate)selected=String(estate.id);}
  if($('efSearch')&&!keepSearch)$('efSearch').value='';
  if($('efFilter'))$('efFilter').value=headerEstate?'all':'watch';
  if(current)render(current);
  if(!headerEstate)$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat:13,lon:101,scale:9244648},location.origin);
 }
 window.addEventListener('message',event=>{
  if(event.origin!==location.origin||event.source!==window.parent||event.data?.type!=='ieat-flood-estate')return;
  applyHeaderEstate(event.data.name);
 });
 if(window.parent!==window)window.parent.postMessage({type:'ieat-flood-ready'},location.origin);

 function set(id,text){if($(id))$(id).textContent=text}

 function warningCard(r,hours,province=false){
  const label=[r.tambon,r.amphoe,r.province].filter(Boolean).join(' ');
  const near=province?'ห่างจาก '+provinceScope.name+' '+fmt(r.distance)+' กม. (ระยะเส้นตรง)':r.estate?'ใกล้ '+r.estate.name+' '+fmt(r.distance)+' กม.':'';
  return '<button type="button" class="ef-risk ef-warning-location" aria-pressed="false" data-ef-warning="'+hours+'" data-ef-label="'+esc(label)+'" data-ef-rain="'+esc(r.sum_rainfall_mm??'')+'" data-ef-observed="'+esc(time(r.observed_at))+'" data-ef-lat="'+r.lat+'" data-ef-lon="'+r.lon+'"><strong>'+esc(label)+'</strong><span>'+esc(near)+'</span><span>ฝนสะสมตามช่วงประกาศ '+fmt(r.sum_rainfall_mm)+' มม.</span><span>เวลาสถานี '+esc(time(r.observed_at))+'</span><span class="ef-warning-map-action">ดูตำแหน่งบนแผนที่ ↗</span></button>';
 }

 function zoom(lat,lon){const f=$('estateFocusMap');if(f?.contentWindow)f.contentWindow.postMessage({type:'flood-map-focus',lat:Number(lat),lon:Number(lon),scale:75000},location.origin)}
 function mount(){
  const warning=$('warning');if(!warning||$('estateFocusDashboard'))return;
  const style=document.createElement('style');style.textContent=`#estateFocusDashboard .ef-map-head h2{font-size:20px!important}#estateFocusDashboard .ef-chart h2{color:#004a91!important}

#estateFocusDashboard .ef-reservoir-panel h2{font-size:20px}
#efReservoirProvince{width:100%;font:inherit;border:1px solid #cadcde;border-radius:8px;padding:8px;margin:8px 0 12px;background:white}
#efReservoirList{display:grid;gap:8px;max-height:360px;overflow:auto}
.ef-reservoir-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px 12px;text-align:left;border:1px solid #cadcde;border-radius:12px;background:#f9fcfc;padding:12px;font:inherit;width:100%;cursor:pointer}
.ef-reservoir-row b{font-size:15px}.ef-reservoir-row small{display:block;font-size:12px}
.ef-reservoir-percent{text-align:right;font-weight:700;font-size:22px}.ef-reservoir-percent span{display:block;font-size:11px;color:white!important;padding:3px 9px;border-radius:20px;margin-top:4px}
.ef-reservoir-bar{grid-column:1/-1;height:6px;background:#cbd8d7;border-radius:6px;overflow:hidden}.ef-reservoir-bar i{display:block;height:100%;border-radius:6px}
#efReservoirTime{display:block;font-size:11px;margin-top:10px;line-height:1.7}

/* Canal panel: keep source note and station cards in normal document flow. */
#estateFocusDashboard .ef-canal-panel{overflow:visible!important}
#estateFocusDashboard #efCanalList{
 display:grid!important;
 grid-template-columns:minmax(0,1fr)!important;
 gap:12px!important;
 width:100%!important;
 margin:12px 0 0!important;
 position:static!important;
 clear:both!important;
}
#estateFocusDashboard .ef-canal-card{
 display:block!important;
 width:100%!important;
 min-width:0!important;
 position:relative!important;
 float:none!important;
 clear:both!important;
 margin:0!important;
 padding:14px!important;
 text-align:left!important;
 font:inherit!important;
 color:#253346!important;
 background:#fff!important;
 border:1px solid #cbdbe5!important;
 border-radius:12px!important;
 box-shadow:0 2px 8px #2633460a!important;
 overflow:visible!important;
}
#estateFocusDashboard .ef-canal-card>b{
 display:block!important;
 position:static!important;
 margin:0 0 10px!important;
 padding:0!important;
 font-size:16px!important;
 line-height:1.5!important;
 white-space:normal!important;
 overflow-wrap:anywhere!important;
 text-align:left!important;
}
#estateFocusDashboard .ef-canal-body{
 display:grid!important;
 grid-template-columns:80px minmax(0,1fr)!important;
 gap:12px!important;
 align-items:start!important;
 position:static!important;
}
#estateFocusDashboard .ef-canal-gauge{width:80px;min-width:80px}
#estateFocusDashboard .ef-canal-gauge svg{display:block;width:80px;height:auto}
#estateFocusDashboard .ef-canal-content{
 display:flex!important;
 flex-direction:column!important;
 gap:5px!important;
 min-width:0!important;
 position:static!important;
}
#estateFocusDashboard .ef-canal-content small,
#estateFocusDashboard .ef-canal-content strong{display:block!important;line-height:1.5!important}
#estateFocusDashboard #efCanalTime{
 display:block!important;
 position:static!important;
 float:none!important;
 clear:both!important;
 width:100%!important;
 margin:14px 0 0!important;
 padding:10px 0 0!important;
 border-top:1px solid #e2e8ef!important;
 font-size:11px!important;
 line-height:1.7!important;
 white-space:normal!important;
 overflow-wrap:anywhere!important;
 color:#607382!important;
}
@media(max-width:560px){
 #estateFocusDashboard .ef-canal-card{padding:12px!important}
 #estateFocusDashboard .ef-canal-card>b{font-size:15px!important;margin-bottom:8px!important}
 #estateFocusDashboard .ef-canal-body{grid-template-columns:66px minmax(0,1fr)!important;gap:9px!important}
 #estateFocusDashboard .ef-canal-gauge{width:66px;min-width:66px}
 #estateFocusDashboard .ef-canal-gauge svg{width:66px}
}


#efRelatedDams{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;max-height:800px;overflow:auto;margin-top:12px}
.ef-dam-card{border:1px solid #c9dcdf;border-top:4px solid #328693;border-radius:12px;padding:14px;background:#fbfdfd;min-width:0}
.ef-dam-card h3{font-size:18px!important;margin:5px 0}
.ef-dam-card .ef-dam-value{font-size:32px;font-weight:700;margin:8px 0}.ef-dam-card small{font-size:11px;display:block}
.ef-dam-card .ef-dam-bar{height:12px;background:#dce8e7;border-radius:12px;overflow:hidden;margin:10px 0}.ef-dam-bar i{display:block;height:100%;background:#df2945;border-radius:12px}
.ef-dam-flows{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}.ef-dam-flows div{background:#edf4f4;border-radius:8px;padding:9px}.ef-dam-flows b{display:block;font-size:22px}
.ef-dam-change{padding:10px;border-radius:8px;background:#f9e8ec;font-size:12px;margin:10px 0}
.ef-dam-card img{width:100%;height:150px;object-fit:cover;border-radius:8px;margin-top:12px}
.ef-dam-card button{font:inherit;font-size:12px;border:1px solid #bcd4da;border-radius:7px;padding:7px 9px;background:#edf6f7;margin-top:8px;cursor:pointer}
@media(max-width:500px){#efRelatedDams{grid-template-columns:1fr}}


#estateFocusDashboard .ef-estate-panel{display:none!important}
#estateFocusDashboard .ef-reservoir-row{background:#007cc0!important;border-color:#007cc0}
#estateFocusDashboard .ef-reservoir-row[data-high="true"]{background:#ce181e!important;border-color:#ce181e}
#estateFocusDashboard .ef-reservoir-row,#estateFocusDashboard .ef-reservoir-row *{color:#fff!important}
#estateFocusDashboard .ef-reservoir-bar{background:#ffffff66}
#estateFocusDashboard .ef-reservoir-bar i{background:#fff!important}

#estateFocusDashboard .ef-related-dams,#estateFocusDashboard .ef-reservoir-panel{padding:16px;background:#fff;border:1px solid #e3e9f0;border-radius:18px;box-shadow:0 3px 12px #26334608}
#estateFocusDashboard .ef-related-dams>h2,#estateFocusDashboard .ef-reservoir-panel>h2{background:#e9f1fc;color:#00387b!important;border-radius:10px;padding:12px;font-size:18px;margin:0 0 12px}
#estateFocusDashboard #efRelatedDams,#estateFocusDashboard #efReservoirList{max-height:none;overflow:visible;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
#estateFocusDashboard .ef-dam-card{background:#fff;border:1px solid #b9ccdd;border-radius:12px;padding:12px;box-shadow:0 3px 9px #234b6a0b}
#estateFocusDashboard .ef-dam-card h3{font-size:16px!important;color:#244653!important}
#estateFocusDashboard .ef-dam-value{font-size:28px;color:#007cc0!important}
#estateFocusDashboard .ef-dam-flows div{background:#eef5fb}
#estateFocusDashboard .ef-dam-flows b{font-size:18px}
#estateFocusDashboard .ef-dam-change{background:#f3f5f8}
#estateFocusDashboard .ef-dam-card button{background:#007cc0;border:0;color:#fff!important;width:100%;padding:10px;border-radius:8px}
#estateFocusDashboard .ef-reservoir-row{border-radius:12px;padding:12px;align-content:start}
#estateFocusDashboard .ef-reservoir-row b{font-size:14px}
#estateFocusDashboard .ef-reservoir-percent{font-size:23px}
@media(max-width:600px){#estateFocusDashboard #efRelatedDams,#estateFocusDashboard #efReservoirList{grid-template-columns:1fr}}

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

 #estateFocusDashboard button.ef-warning-location{display:block;width:100%;margin:8px 0;padding:12px 14px;text-align:left;border:1px solid #d2e4f1;border-radius:12px;background:#f5faff;color:#24465f!important;cursor:pointer;font:14px Sarabun,sans-serif;line-height:1.65;transition:background .15s,border-color .15s}
 #estateFocusDashboard .ef-warning-location strong,#estateFocusDashboard .ef-warning-location span{display:block}
 #estateFocusDashboard .ef-warning-location strong{font-size:15px;color:#00387b}
 #estateFocusDashboard .ef-warning-location:hover,#estateFocusDashboard .ef-warning-location[aria-pressed="true"]{background:#e5f4ee;border-color:#65b398}
 #estateFocusDashboard .ef-warning-location:focus-visible{outline:3px solid #0072cf;outline-offset:2px}
 #estateFocusDashboard .ef-warning-map-action{margin-top:7px;font-weight:600;color:#117055}

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


 .ef-workspace{grid-template-columns:minmax(400px,1.15fr) minmax(460px,1fr)}
 .ef-map-column{grid-column:2;grid-row:1}.ef-data-column{grid-column:1;grid-row:1}
 .ef-map-head{background:#fff}#estateFocusDashboard .ef-map-head h2{color:#532E7C!important}#estateFocusDashboard .ef-map-head small{color:#000!important}
 #estateFocusDashboard .ef-map-head .ef-actions button{background:#f1e5f8;color:#532E7C!important;border-color:#ddc1eb}#estateFocusDashboard .ef-map-head .ef-actions button:hover{background:#e8d3f2}
 @media(max-width:950px){.ef-workspace{grid-template-columns:1fr}.ef-map-column{grid-column:1;grid-row:1;height:540px}.ef-data-column{grid-column:1;grid-row:2}}

   #estateFocusDashboard{font-family:"Sarabun","TH Sarabun New",sans-serif;font-size:16px;line-height:1.5}
   #estateFocusDashboard button,#estateFocusDashboard input,#estateFocusDashboard select,#estateFocusDashboard table{font-family:inherit}
   #estateFocusDashboard h2,#estateFocusDashboard h3,#estateFocusDashboard .ef-brief-title{font-size:15px;font-weight:700;line-height:1.45}
   #estateFocusDashboard .ef-panel p,#estateFocusDashboard .ef-chart p,#estateFocusDashboard .ef-map-head small,#estateFocusDashboard .ef-map-foot{font-size:11px;line-height:1.65}
   #estateFocusDashboard .ef-actions button,#estateFocusDashboard .ef-actions a{font-size:12px;font-weight:600}
   #estateFocusDashboard input,#estateFocusDashboard select{font-size:13px}
   #estateFocusDashboard .ef-metric h2{font-size:13px;font-weight:600}
   #estateFocusDashboard .ef-metric-value strong{font-size:28px;line-height:1.2}
   #estateFocusDashboard .ef-metric small{font-size:12px}
   #estateFocusDashboard .ef-status,#estateFocusDashboard .ef-count,#estateFocusDashboard .ef-estates,#estateFocusDashboard .ef-warning{font-size:12px}

   #estateFocusDashboard .ef-estates{display:grid;grid-template-columns:1fr;gap:10px}
   #estateFocusDashboard .ef-estate-panel{background:#fff;border:1px solid #e5e8ee}
   #estateFocusDashboard .ef-estate{background:#fff;border:1px solid #e5e8ee;border-radius:14px;padding:16px;text-align:left;box-shadow:none}
   #estateFocusDashboard .ef-estate:hover{border-color:#c6a6dc;background:#fcf9ff}
   #estateFocusDashboard .ef-estate[aria-pressed=true]{background:#f4eef8;outline:2px solid #854c9e;outline-offset:-2px}
   .ef-estate-title{display:flex;align-items:start;justify-content:space-between;gap:12px}
   #estateFocusDashboard .ef-estate-title b{font-size:13px;font-weight:600}
   #estateFocusDashboard .ef-estate-badge{font-size:10px;border-radius:20px;padding:4px 8px;white-space:nowrap;background:#e9f8f3;color:#28613b!important}
   #estateFocusDashboard .ef-estate-badge[data-watch=true]{background:#fff4df;color:#9a6200!important}
   .ef-estate-stats{display:grid;grid-template-columns:1fr 1fr 1.35fr;gap:8px;padding:12px 0;margin-top:10px;border-top:1px solid #edf0f3}
   #estateFocusDashboard .ef-estate-stats strong{display:block;font-size:20px;color:#532E7C!important}
   #estateFocusDashboard .ef-estate-stats small{font-size:11px;line-height:1.5}
   #estateFocusDashboard .ef-estate-map-label{display:block;text-align:right;color:#532E7C!important;font-size:11px;font-weight:600;margin-top:10px}
   #estateFocusDashboard .ef-estate-rain{font-size:11px}
   @media(max-width:520px){.ef-estate-title{flex-wrap:wrap}}

#estateFocusDashboard .ef-map-head{flex-wrap:wrap}#estateFocusDashboard .ef-map-head .ef-actions{flex-wrap:wrap}
#estateFocusDashboard #efReport{background:#e8f4fc;color:#0072cf!important;border-color:#b8dbf5}
#efMapControls{padding:10px 16px;border-bottom:1px solid #e5e8ee;background:white;max-height:260px;overflow:auto;flex:none}
#efMapControls .controls{position:static;display:flex;flex-wrap:wrap;gap:8px;align-items:center}
#efMapControls .search{display:flex;gap:8px;width:100%;margin:0}
#efMapControls .search select,#efMapControls .search input,#efMapControls .dam-select{font:13px "Sarabun",sans-serif;min-width:0;padding:8px;border:1px solid #dce1e7;border-radius:8px;background:#fff;flex:1}
#efMapControls .toggles{display:flex;flex-wrap:wrap;gap:6px;width:100%}
#efMapControls .toggles label{font-size:11px;display:flex;align-items:center;gap:4px;background:#f7fafc;padding:5px 7px;border-radius:6px;border:1px solid #e5e8ee;cursor:pointer}
#efMapControls input[type=checkbox]{accent-color:#0072cf}#efMapControls .legend{width:100%;font-size:11px}#efMapControls .legend p{margin:8px 0}#efMapControls .keys{display:flex;gap:10px;flex-wrap:wrap}#efMapControls .dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px}
#estateFocusDashboard .ef-charts{grid-template-columns:1fr}
#estateFocusDashboard .ef-estate-panel h2{color:#00387B!important}
#estateFocusDashboard #efDetails24,#estateFocusDashboard #efDetails48{background:#eaf4fc;border-color:#c6dff1}
#estateFocusDashboard #efDetails24 summary,#estateFocusDashboard #efDetails48 summary{color:#00387B!important}
#estateFocusDashboard .ef-estate{border:1px solid #dce7ef;border-radius:12px;padding:14px;background:#fff;position:relative;border-left:1px solid #dce7ef}
#estateFocusDashboard .ef-estate[aria-pressed=true]{background:#eef7fd;border-color:#0072cf;outline:1px solid #0072cf}
#estateFocusDashboard .ef-estate-title b{color:#00387B!important}
#estateFocusDashboard .ef-estate-stats{border:0;margin-top:8px;padding:10px;background:#f4f8fb;border-radius:8px}
#estateFocusDashboard .ef-estate-stats strong{font-size:18px;color:#0072cf!important}
#estateFocusDashboard .ef-estate-map-label{color:#0072cf!important}
  
#estateFocusDashboard .ef-workspace{gap:10px;width:100%}
#estateFocusDashboard .ef-data-column{padding:0 4px 8px 0}
#estateFocusDashboard .ef-map-column{border-color:#bbccdf;border-radius:10px}
#estateFocusDashboard .ef-map-head{background:#f2eafa;border-bottom:1px solid #d9c7ed;padding:14px 16px}
#estateFocusDashboard #efMapControls{background:#f5f8fd;border-bottom:1px solid #c9d8e9}
#estateFocusDashboard .ef-chart,#estateFocusDashboard .ef-panel{border-color:#bbccdf;box-shadow:0 3px 10px #234b6a0b}
#estateFocusDashboard .ef-chart h2,#estateFocusDashboard .ef-estate-panel h2{background:#eaf2fd;border-radius:8px;padding:12px;font-size:18px}
#estateFocusDashboard .ef-rank-track{height:28px;background:#e9eef6}
#estateFocusDashboard .ef-rank-track b{color:#fff!important;font-size:15px;padding:3px 8px;line-height:22px;text-shadow:0 1px 2px #0005}
#estateFocusDashboard .ef-rank-row>span{font-size:14px;font-weight:600}
#estateFocusDashboard .ef-estate-title b{font-size:15px}
#estateFocusDashboard .ef-estate-stats{background:#eaf2fc}
#estateFocusDashboard .ef-estate-stats strong{font-size:22px}
#estateFocusDashboard #efDetails24,#estateFocusDashboard #efDetails48{border-color:#abc9e5}

#estateFocusDashboard .ef-workspace{height:auto;min-height:100dvh;align-items:start}
#estateFocusDashboard .ef-map-column{height:calc(100dvh + 240px);min-height:1000px}
#estateFocusDashboard .ef-data-column{height:100dvh;position:sticky;top:0}
#estateFocusDashboard .ef-map-column:fullscreen,#estateFocusDashboard .ef-map-column.ef-map-expanded{height:100dvh;min-height:0}
@media(max-width:950px){#estateFocusDashboard .ef-map-column{height:860px;min-height:0}#estateFocusDashboard .ef-data-column{height:auto;position:static}}
@media(max-width:600px){#estateFocusDashboard .ef-map-column{height:760px}}

#estateFocusDashboard .ef-map-column,#estateFocusDashboard .ef-chart,#estateFocusDashboard .ef-panel{border:0}
#estateFocusDashboard .ef-map-head,#estateFocusDashboard #efMapControls{border-bottom:0}
#estateFocusDashboard #efDetails24,#estateFocusDashboard #efDetails48{border:0}

@media(max-width:950px){
 #estateFocusDashboard{height:auto;min-width:0}
 #estateFocusDashboard .ef-workspace{min-height:0;grid-template-columns:minmax(0,1fr)}
 #estateFocusDashboard .ef-data-column{grid-row:1;grid-column:1;width:100%;min-width:0;overflow:visible;height:auto;position:static;padding:0}
 #estateFocusDashboard .ef-map-column{grid-row:2;grid-column:1;width:100%;height:680px;min-height:0}
 #estateFocusDashboard .ef-map-head{flex-wrap:wrap;padding:12px}
 #estateFocusDashboard .ef-actions{width:100%}#estateFocusDashboard .ef-actions button{min-height:44px;flex:1 1 110px;white-space:normal}
 #estateFocusDashboard .ef-estate-title b,#estateFocusDashboard .ef-map-head h2{overflow-wrap:anywhere}
}
@media(max-width:600px){
 #estateFocusDashboard .ef-estate-stats{grid-template-columns:minmax(0,1fr);gap:6px}
 #estateFocusDashboard .ef-tools{flex-direction:column}#estateFocusDashboard .ef-tools input,#estateFocusDashboard .ef-tools select{flex:auto;width:100%;font-size:16px;min-height:44px}
 #estateFocusDashboard .ef-panel{padding:12px}#estateFocusDashboard .ef-estate{padding:12px}
 #estateFocusDashboard #efMapControls{max-height:240px;padding:10px}
 #efMapControls .search{flex-wrap:wrap}#efMapControls .search input,#efMapControls .search select{flex:1 1 100%;font-size:16px}
}
.ef-map-foot{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.ef-map-foot span{flex:1;min-width:180px}
#efFullscreenSlot{display:flex;justify-content:flex-end;margin-bottom:8px}
#estateFocusDashboard #efMapFullscreen,#efMapExitFullscreen{font:600 13px Sarabun,sans-serif;background:#e5f4e9;color:#24633d!important;border:1px solid #b8d9c1;padding:9px 14px;border-radius:20px;cursor:pointer;white-space:nowrap}
#efMapExitFullscreen{display:none;position:absolute;top:12px;left:12px;z-index:1500}
.ef-map-column:fullscreen #efMapExitFullscreen,.ef-map-column.ef-map-expanded #efMapExitFullscreen{display:block}
.ef-map-column{position:relative}
`;document.head.appendChild(style);
  const host=document.createElement('section');host.id='estateFocusDashboard';
  const metrics=[['efWatch','นิคมฯ เข้าเกณฑ์เฝ้าระวัง','ผลคัดกรองจากสถานีใกล้นิคมฯ'],['efWaterWatch','ใกล้ระดับน้ำเข้าเกณฑ์','สถานีระดับน้ำภายใน 30 กม.'],['efRainWatch','ใกล้ฝนเข้าเกณฑ์','ฝนสะสมมากกว่า 35 มม. ภายใน 30 กม.'],['efTotal','นิคมฯ / ท่าเรือในชุดข้อมูล','ตำแหน่งที่ใช้ประเมินจากข้อมูล กนอ.'],['ef24','ตำบลเฝ้าระวัง 24 ชั่วโมง','ระยะจากจุดสถานีประเมินถึงนิคมฯ'],['ef48','ตำบลเฝ้าระวัง 48 ชั่วโมง','ระยะจากจุดสถานีประเมินถึงนิคมฯ']];
  host.innerHTML=`<div class="ef-workspace"><div class="ef-data-column"><p id="efProvinceScopeNote" role="status" style="padding:12px;background:#eaf2f9;color:#003666;border-radius:10px">ข้อมูลทั่วประเทศ · แสดงตัวอย่างสูงสุด 6 รายการต่อส่วน กรุณาเลือกนิคมฯ เพื่อดูข้อมูลเฉพาะพื้นที่</p>
   <section class="ef-panel ef-related-dams"><h2>เขื่อนที่เกี่ยวข้อง</h2><div id="efRelatedDams" role="status">กำลังโหลดข้อมูลเขื่อน…</div></section><section class="ef-panel ef-canal-panel" hidden><h2>คลอง กทม.</h2><div id="efCanalList"></div><small id="efCanalTime"></small></section><section class="ef-panel ef-reservoir-panel"><h2>อ่างเก็บน้ำขนาดกลางในจังหวัด</h2><select id="efReservoirProvince" aria-label="เลือกจังหวัดอ่างเก็บน้ำ" hidden style="display:none"><option value="กาญจนบุรี">กาญจนบุรี</option></select><div id="efReservoirList" role="status">กำลังโหลดข้อมูลอ่างเก็บน้ำ…</div><small id="efReservoirTime"></small></section>
   <section class="ef-panel ef-estate-panel"><h2>ติดตามนิคมฯ / ท่าเรือ</h2><div class="ef-tools"><input id="efSearch" list="efEstateOptions" type="search" aria-label="ค้นหาชื่อนิคมฯ / ท่าเรือ" placeholder="ค้นหาชื่อนิคมฯ / ท่าเรือ"><datalist id="efEstateOptions"></datalist><select id="efFilter" aria-label="กรองข้อมูลนิคมฯ"><option value="watch">เข้าเกณฑ์เฝ้าระวัง</option><option value="water">ใกล้ระดับน้ำเข้าเกณฑ์</option><option value="rain">ใกล้ฝนเข้าเกณฑ์</option><option value="all">ทุกนิคมฯ / ท่าเรือ</option></select></div><p id="efResultCount" class="ef-count"></p><div class="ef-selection" id="efSelection" hidden></div><div id="efEstates" class="ef-estates"></div></section>
   <div class="ef-warning"><details class="ef-panel" id="efDetails24"><summary>พื้นที่เฝ้าระวัง 24 ชั่วโมง</summary><div id="efWarning24"></div></details><details class="ef-panel" id="efDetails48"><summary>พื้นที่เฝ้าระวัง 48 ชั่วโมง</summary><div id="efWarning48"></div></details></div>
   </div><section class="ef-map-column"><button type="button" id="efMapExitFullscreen" aria-label="ออกจากแผนที่เต็มหน้าจอ">ย่อแผนที่ ↙</button><div class="ef-map-frame"><iframe id="estateFocusMap" title="แผนที่สถานการณ์น้ำและนิคมอุตสาหกรรม" src="flood-hydrology-map.html?v=20261007-warning-focus&amp;center=101,13&amp;scale=9244648" loading="eager"></iframe></div><footer class="ef-map-foot"><button type="button" id="efMapFullscreen" aria-pressed="false">เต็มหน้าจอ ↗</button><span>GISTDA ผ่าน Faonam: พื้นที่น้ำท่วมตามวันที่ภาพ · กรมอุตุฯ: เรดาร์คอมโพสิท พร้อมแหล่งสำรอง Faonam · RID GeoJSON: สถานีระดับน้ำ</span></footer></section></div>`;
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
  $('efMapExitFullscreen').onclick=()=>fullButton.click();
  document.addEventListener('fullscreenchange',syncFullscreen);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mapPanel.classList.contains('ef-map-expanded'))closeExpanded()});

  $('estateFocusMap').addEventListener('load',()=>{
   const frame=$('estateFocusMap');
   frame.contentWindow?.postMessage({type:'flood-province-scope',...provinceScope},location.origin);
   frame.contentWindow?.postMessage({type:'flood-map-resize'},location.origin);
   if(selected&&current){const estate=model(current).estates.find(e=>String(e.id)===selected);if(estate)zoom(estate.lat,estate.lon)}
  });

  let searchTimer;
  function searchEstate(){
   if(!current)return;
   const q=$('efSearch').value.trim(),key=estateKey(q);
   const estates=(current.estates||[]).filter(point);
   const exact=estates.find(e=>estateKey(e.name)===key);
   const matches=key?estates.filter(e=>estateKey(e.name).includes(key)):[];
   const chosen=exact||(matches.length===1?matches[0]:null);
   if(!q){applyHeaderEstate('');return}
   if(chosen){$('efSearch').value=chosen.name;applyHeaderEstate(chosen.name,true);return}
   if(headerEstate){headerEstate='';selected='';render(current)}
   renderEstates();
  }
  $('efSearch').oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(searchEstate,250)};
  $('efSearch').onchange=()=>{clearTimeout(searchTimer);searchEstate()};
  $('efSearch').addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();clearTimeout(searchTimer);searchEstate()}});
$('efFilter').onchange=()=>renderEstates();
  function reset(){if(headerEstate){applyHeaderEstate(headerEstate);return}selected='';if(current)render(current);$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat:13,lon:101,scale:9244648},location.origin)}

  function openCard(id){const filters={efWatch:'watch',efWaterWatch:'water',efRainWatch:'rain',efTotal:'all'};if(filters[id]){$('efFilter').value=filters[id];$('efSearch').value='';renderEstates();$('efSearch').scrollIntoView?.({behavior:'smooth',block:'center'});$('efSearch').focus?.()}else{const panel=$(id==='ef24'?'efDetails24':'efDetails48');if(panel){panel.open=true;panel.scrollIntoView?.({behavior:'smooth',block:'start'})}}}
  host.addEventListener('keydown',e=>{const card=e.target.closest('[data-ef-card]');if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openCard(card.dataset.efCard)}});
  host.addEventListener('click',e=>{const card=e.target.closest('[data-ef-card]');if(card){openCard(card.dataset.efCard);return}const button=e.target.closest('[data-ef-lat]');if(!button)return;if(button.dataset.efWarning){
 const lat=Number(button.dataset.efLat),lon=Number(button.dataset.efLon);if(!Number.isFinite(lat)||!Number.isFinite(lon))return;
 host.querySelectorAll('.ef-warning-location[aria-pressed="true"]').forEach(b=>b.setAttribute('aria-pressed','false'));button.setAttribute('aria-pressed','true');
 $('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat,lon,scale:75000,label:button.dataset.efLabel,warning:{hours:Number(button.dataset.efWarning),rain:button.dataset.efRain,observed:button.dataset.efObserved}},location.origin);
 $('estateFocusMap')?.scrollIntoView?.({behavior:'smooth',block:'center'});return;
 }zoom(button.dataset.efLat,button.dataset.efLon);if(button.dataset.efEstate){const estate=(current.estates||[]).find(e=>String(e.id)===button.dataset.efEstate);if(estate){$('efSearch').value=estate.name;applyHeaderEstate(estate.name,true)}}});
 }
 function renderEstates(){
  if(!current)return;const m=scopedModel(model(current)),q=$('efSearch').value.trim();
  if(!m.usable){$('efEstates').innerHTML='<p class="ef-empty">ชุดข้อมูลยังไม่ครบ / ข้อมูลย้อนหลัง / ไม่มีค่าสถานีล่าสุด จึงยังไม่สรุปยอดนิคมฯ ที่เข้าเกณฑ์</p>';return}
  const filter=$('efFilter').value||'watch';
  const assessments=m.estates.map(e=>m.watch.find(w=>String(w.id)===String(e.id))||{...e,rain:[],water:[],alerts:[],nearest:null,maxRain:null});
  const rows=(filter==='all'?assessments:m.watch).filter(e=>e.name.includes(q)&&(filter!=='water'||e.water.length)&&(filter!=='rain'||e.rain.length));
  set('efResultCount',`แสดง ${rows.length} แห่ง · ${headerEstate?'พื้นที่ '+headerEstate:'ใกล้'+(riverScope?.river||'สายน้ำที่เลือก')} ${m.estates.length} แห่ง · ภายใน 30 กม. จากสถานี · คัดกรองเบื้องต้น`);
  $('efEstates').innerHTML=rows.length?rows.map(e=>`<button type="button" class="ef-estate" aria-pressed="${selected===String(e.id)}" data-ef-estate="${esc(e.id)}" data-ef-lat="${e.lat}" data-ef-lon="${e.lon}"><div class="ef-estate-title"><b>${esc(e.name)}</b><span class="ef-estate-badge" data-watch="${e.alerts.length>0}">${e.alerts.length?'เข้าเกณฑ์เฝ้าระวัง':'ไม่พบสถานีเข้าเกณฑ์'}</span></div><div class="ef-estate-stats"><div><strong>${e.water.length}</strong><small>สถานีระดับน้ำ</small></div><div><strong>${e.rain.length}</strong><small>สถานีฝน</small></div><div><strong>${e.nearest!==null?fmt(e.nearest)+' กม.':'–'}</strong><small>สถานีเข้าเกณฑ์ใกล้ที่สุด</small></div></div>${e.maxRain!==null?`<small class="ef-estate-rain">ฝนสูงสุดใกล้นิคมฯ ${fmt(e.maxRain)} มม.</small>`:''}<small class="ef-estate-river-distance">ใกล้สถานีใน${esc(riverScope?.river||'สายน้ำที่เลือก')} ${headerEstate?'ข้อมูลสถานีภายในรัศมี 30 กม.':fmt(e.riverDistance)+' กม.'}</small><span class="ef-estate-map-label">ดูตำแหน่งบนแผนที่ →</span></button>`).join(''):`<p class="ef-empty">${q?'ไม่พบชื่อนิคมฯ ที่ค้นหา':'ไม่พบนิคมฯ เข้าเกณฑ์จากสถานีที่มีเวลาตรวจวัดภายใน 24 ชม. ในชุดข้อมูลนี้'}${m.stale?' · ชุดข้อมูลย้อนหลัง':''}</p>`;
 }


 function stationExportScope(){
  if(!current)throw Error('ยังไม่มีข้อมูลสถานี');
  const m=model(current);if(!m.complete)throw Error('ชุดข้อมูลสถานียังไม่ครบ จึงยังส่งออกไม่ได้');
  const estate=m.estates.find(e=>String(e.id)===selected);
  const rows=(estate?m.near.map(r=>({...r,distance:km(estate,r),nearest:estate})).filter(r=>r.distance<=RADIUS):m.near).slice().sort((a,b)=>(Number(b.severity_score)||0)-(Number(a.severity_score)||0));
  if(!rows.length)throw Error('ไม่มีสถานีในรายการที่เลือกสำหรับส่งออก');
  return {rows,estate,title:estate?estate.name:'ภาพรวมสถานีใกล้นิคมฯ',generated:time(current.generated_at),stale:m.stale};
 }
 function downloadExport(name,content,type){
  const blob=new Blob([content],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
 }
 function csvCell(value){
  let s=String(value??'');if(/^[\s]*[=+@-]/.test(s))s="'"+s;
  return '"'+s.replace(/"/g,'""')+'"';
 }
 function exportStationsCsv(){
  try{
   const s=stationExportScope(),headers=['สถานี','ประเภท','หน่วยงาน','จังหวัด','ค่าตรวจวัด','สถานะสถานี','ระดับความรุนแรงต้นทาง','นิคมฯ อ้างอิง','ระยะ กม.','ละติจูด','ลองจิจูด','เวลาตรวจวัด','รอบชุดข้อมูล','หมายเหตุ'];
   const rows=s.rows.map(r=>[r.station,r.kind==='rainfall'?'ฝน':'ระดับน้ำ',r.agency||'ThaiWater',r.province,r.value_text,r.status,r.severity_score,r.nearest?.name,Number(r.distance.toFixed(2)),r.lat,r.lon,time(r.observed_at),s.generated,s.stale?'ชุดข้อมูลย้อนหลัง':'สถานีภายใน 30 กม. ไม่ใช่การยืนยันน้ำท่วมในนิคมฯ']);
   downloadExport('stations-'+(s.estate?.id||'overview')+'.csv','\uFEFF'+[headers,...rows].map(row=>row.map(csvCell).join(',')).join('\r\n'),'text/csv;charset=utf-8');
  }catch(error){alert(error.message)}
 }
 function exportStationsMap(){
  try{
   const s=stationExportScope();
   const colors={normal:'#16a34a',moderate:'#2563eb',watch:'#ca8a04',high:'#ea580c',danger:'#dc2626',unknown:'#64748b'};
   const points=s.rows.map(r=>({name:r.station,kind:r.kind,agency:r.agency||'ThaiWater',province:r.province,value:r.value_text||'ไม่มีค่า',status:r.status||'ไม่ระบุ',observed:time(r.observed_at),lat:r.lat,lon:r.lon,distance:fmt(r.distance),estate:r.nearest?.name||'',color:colors[stationStatusClass(r)]}));
   const payload=JSON.stringify({points,estate:s.estate?{name:s.estate.name,lat:s.estate.lat,lon:s.estate.lon}:null}).replace(/</g,'\\u003c');
   const table=points.map(p=>'<tr><td>'+esc(p.name)+'</td><td>'+esc(p.kind==='rainfall'?'ฝน':'ระดับน้ำ')+'</td><td>'+esc(p.value)+'</td><td>'+esc(p.status)+'</td><td>'+esc(p.estate)+'<br>'+p.distance+' กม.</td><td>'+esc(p.observed)+'</td></tr>').join('');
   const html='<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>แผนที่สถานี '+esc(s.title)+'</title><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"><style>body{font-family:Arial,sans-serif;color:#000;margin:24px;line-height:1.6}h1{font-size:24px}#map{height:560px;border:1px solid #cbd5e1;border-radius:12px}.legend{margin:12px 0}.legend span{margin-right:14px}.legend i{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:4px}table{border-collapse:collapse;width:100%;font-size:14px}td,th{border:1px solid #cbd5e1;padding:8px;text-align:left}th{background:#eef2f6}button{padding:10px 16px;font-size:16px;margin-bottom:12px}.leaflet-popup-content{font-size:14px;color:#000}@media print{button{display:none}#map{height:420px}body{margin:0}thead{display:table-header-group}tr{break-inside:avoid}}@media(max-width:600px){body{margin:12px}#map{height:420px}.table-wrap{overflow:auto}}</style></head><body><h1>แผนที่สถานีที่ใช้ติดตาม '+esc(s.title)+'</h1><p>รอบข้อมูล '+esc(s.generated)+' · '+points.length+' สถานี · รัศมี 30 กม. · '+(s.stale?'ชุดข้อมูลย้อนหลัง':'เวลาสถานีภายใน 24 ชั่วโมง ณ เวลาส่งออก')+'</p><p>ค่าตรวจวัดเป็นข้อมูลสถานี ไม่ใช่การยืนยันน้ำท่วมภายในนิคมฯ · ไฟล์นี้เป็นข้อมูล ณ เวลาส่งออก ไม่อัปเดตอัตโนมัติ</p><button onclick="window.print()">พิมพ์ / บันทึก PDF</button><div id="map" aria-label="แผนที่ตำแหน่งสถานี"></div><div class="legend">'+[['ปกติ',colors.normal],['ฝนปานกลาง',colors.moderate],['เฝ้าระวัง',colors.watch],['วิกฤต / เสี่ยงสูง',colors.high],['ล้นตลิ่ง',colors.danger],['ไม่มีข้อมูล',colors.unknown]].map(([label,color])=>'<span><i style="background:'+color+'"></i>'+label+'</span>').join('')+'</div><p id="mapNote">เปิดไฟล์ผ่านเบราว์เซอร์ขณะเชื่อมต่ออินเทอร์เน็ตเพื่อโหลดแผนที่ฐาน · คลิกสถานีเพื่อดูรายละเอียด</p><div class="table-wrap"><table><thead><tr><th>สถานี</th><th>ประเภท</th><th>ค่าตรวจวัด</th><th>สถานะ</th><th>นิคมฯ / ระยะ</th><th>เวลาตรวจวัด</th></tr></thead><tbody>'+table+'</tbody></table></div><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script><script>const data='+payload+';if(typeof L==="undefined"){document.getElementById("mapNote").textContent="โหลดแผนที่ไม่สำเร็จ กรุณาเชื่อมต่ออินเทอร์เน็ต ตารางข้อมูลยังอ่านได้"}else{const map=L.map("map"),bounds=[];L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap contributors"}).addTo(map);data.points.forEach(p=>{const box=document.createElement("div");const title=document.createElement("b");title.textContent=p.name;box.appendChild(title);[p.agency+" · "+p.province,p.value+" · "+p.status,"ตรวจวัด "+p.observed,p.estate+" · "+p.distance+" กม."].forEach(t=>{const line=document.createElement("div");line.textContent=t;box.appendChild(line)});L.circleMarker([p.lat,p.lon],{radius:7,color:"#fff",weight:2,fillColor:p.color,fillOpacity:1}).addTo(map).bindPopup(box).bindTooltip(p.name);bounds.push([p.lat,p.lon])});if(data.estate){L.marker([data.estate.lat,data.estate.lon]).addTo(map).bindTooltip(data.estate.name,{permanent:true});L.circle([data.estate.lat,data.estate.lon],{radius:30000,color:"#0f766e",weight:1,fillOpacity:.03}).addTo(map);bounds.push([data.estate.lat,data.estate.lon])}map.fitBounds(bounds,{padding:[30,30],maxZoom:13})}<\/script></body></html>';
   downloadExport('station-map-'+(s.estate?.id||'overview')+'.html',html,'text/html;charset=utf-8');
  }catch(error){alert(error.message)}
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
  mount();if(!$('estateFocusDashboard'))return;current=data;
  if($('efEstateOptions'))$('efEstateOptions').innerHTML=(data.estates||[]).filter(point).map(e=>'<option value="'+esc(e.name)+'"></option>').join('');
  const m=model(data);
  if(headerEstate&&m.estates[0])selected=String(m.estates[0].id);
  publishProvinceScope(headerEstate?m.estates[0]||null:null);
  set('efTotal',m.complete?fmt(m.estates.length):'รอตรวจสอบ');
  [['efWatch',m.watch.length],['efRainWatch',m.watch.filter(e=>e.rain.length).length],['efWaterWatch',m.watch.filter(e=>e.water.length).length]].forEach(([id,n])=>set(id,m.usable?fmt(n):m.stale?'ข้อมูลย้อนหลัง':'ข้อมูลไม่ครบ'));
  set('ef24',m.warning24.available?fmt(m.warning24.rows.length):'ไม่มีข้อมูล');set('ef48',m.warning48.available?fmt(m.warning48.rows.length):'ไม่มีข้อมูล');
  renderEstates();
  const chosen=m.estates.find(e=>String(e.id)===selected);

  if(chosen)zoom(chosen.lat,chosen.lon);

  const selection=$('efSelection');selection.hidden=!chosen;
  if(chosen){const w=m.watch.find(e=>String(e.id)===selected);selection.innerHTML='<b>'+esc(chosen.name)+'</b><br>'+(m.usable?(w?'ฝนเข้าเกณฑ์ '+w.rain.length+' สถานี · ระดับน้ำเข้าเกณฑ์ '+w.water.length+' สถานี':'ไม่พบสถานีเข้าเกณฑ์ในชุดข้อมูลนี้'):'ข้อมูลยังไม่พร้อมสรุป')+'<br>แผนที่แสดงตำแหน่งนิคมฯ ที่เลือก'}
  for(const [id,ds] of [['efWarning24',m.warning24],['efWarning48',m.warning48]]){
   $(id).innerHTML=!ds.available?'<p class="ef-empty">ข้อมูลประกาศหรือพิกัดนิคมฯ ไม่พร้อม / เกินช่วง 24 ชั่วโมง จึงยังสรุปจำนวนไม่ได้</p>':`<p>รอบประกาศ ${esc(time(new Date(ds.issued).toISOString()))}${ds.unlocated?' · มี '+ds.unlocated+' รายการที่ไม่มีพิกัด จึงไม่รวมในการคำนวณ':''}</p>`+(ds.rows.length?ds.rows.map(r=>warningCard(r,id==='efWarning24'?24:48)).join(''):'<p class="ef-empty">ไม่พบตำบลในรายการเฝ้าระวังที่จุดสถานีประเมินอยู่ภายใน 30 กม. จากนิคมฯ ในชุดข้อมูลนี้</p>');
  }

 }
 async function load(){
  if(busy)return;busy=true;if($('efRefresh'))$('efRefresh').disabled=true;
  try{const res=await fetch('./data/thaiwater_latest.json?v='+Date.now(),{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status);const data=await res.json();if(!data.summary||!Array.isArray(data.estates))throw Error('รูปแบบข้อมูลไม่ครบ');
   const rid=await window.IEAT_RID.load(),water=rid.map(r=>({...r,kind:'waterlevel',station:r.name,lon:r.lng,observed_at:r.measured_at,waterlevel_msl:r.wl,bankfull_msl:r.bank,storage_percent:r.percent,value_text:fmt(r.wl)+' ม.รทก.',severity_score:r.status==='ล้นตลิ่ง'?4:r.status==='ใกล้ตลิ่ง'?2:0}));
   data.stations=[...(data.stations||[]).filter(r=>r.kind!=='waterlevel'),...water];data.summary.station_count=data.stations.length;render(data)}
  catch(e){if(current){render({...current,status:'stale'});set('efResultCount','โหลดรอบใหม่ไม่สำเร็จ · แสดงข้อมูลเดิม')}else{set('efResultCount','โหลดข้อมูลไม่สำเร็จ ยังไม่สามารถสรุปสถานการณ์ได้')}}
  finally{busy=false;if($('efRefresh'))$('efRefresh').disabled=false}
 }


 let selectedWaterProvince=null;
 function filterWaterScope(rows){return !provinceScope.active?rows:rows.filter(r=>{const d=scopeDistance(r);return d!==null&&d<=RADIUS}).sort((a,b)=>scopeDistance(a)-scopeDistance(b));}
 document.addEventListener('ieat-flood-estate-scope',()=>{renderReservoirs();renderRelatedDams()});
 window.addEventListener('message',event=>{
  if(event.origin!==location.origin||event.source!==$('estateFocusMap')?.contentWindow||event.data?.type!=='flood-map-province')return;
  selectedWaterProvince=String(event.data.province||'');renderReservoirs();renderRelatedDams();
 });

 let reservoirs=[],reservoirStamp='',reservoirBusy=false,reservoirError='';
 function waterCardTheme(percent){
  if(percent===null)return {key:'unknown',color:'#66788a'};
  return percent>=100?{key:'red',color:'#ec1c24'}:percent>=80?{key:'yellow',color:'#fdbd10'}:percent>=30?{key:'blue',color:'#0066b2'}:{key:'orange',color:'#ed7902'};
 }
 function renderReservoirs(){
  const list=$('efReservoirList');if(!list)return;
  const latest=reservoirs.filter(r=>num(r.percent)!==null);
  let rows=filterWaterScope(latest).sort((a,b)=>Number(b.percent)-Number(a.percent));if(!provinceScope.active)rows=rows.slice(0,6);
  const panel=list.closest('.ef-reservoir-panel');if(panel)panel.hidden=rows.length===0;
  list.innerHTML=rows.length?rows.map(r=>{const p=num(r.percent),theme=waterCardTheme(p),color=theme.color,label=p===null?'ไม่มีค่าล่าสุด':p>=100?'เกินความจุ':p>=80?'น้ำมาก':p>=30?'น้ำปานกลาง':'น้ำน้อย';return '<button type="button" class="ef-reservoir-row" data-water-theme="'+theme.key+'" style="--water-accent:'+color+'" data-high="'+(p>=80)+'" data-reservoir-id="'+esc(r.id)+'" '+(r.lat==null||r.lng==null?'disabled':'')+'><div><b>'+esc(r.name)+'</b><small>จ.'+esc(r.province)+' · อ.'+esc(r.district)+'</small></div><div class="ef-reservoir-percent">'+(p===null?'—':Math.round(p)+'%')+'<span style="background:'+color+'">'+label+'</span></div><div class="ef-reservoir-bar"><i style="width:'+Math.min(100,Math.max(0,p))+'%;background:'+color+'"></i></div><small>ข้อมูล '+esc(r.measured_at)+'</small>'+distanceLabel(r)+'</button>'}).join(''):'<p>'+'ไม่พบข้อมูลอ่างเก็บน้ำในชุดข้อมูลต้นทาง'+'</p>';
  $('efReservoirTime').textContent='แสดงทุกจังหวัด · แต่ละรายการระบุวันที่ตรวจวัด · ข้อมูลรายวัน · สัดส่วนน้ำต่อความจุปกติ · ThaiWater / กรมชลประทาน · โหลดใหม่ทุก 1 ชั่วโมง'+(reservoirError?' · โหลดรอบใหม่ไม่สำเร็จ แสดงค่าครั้งก่อน':'');
 }
 async function loadReservoirs(){
  if(reservoirBusy)return;reservoirBusy=true;
  try{const r=await fetch('./data/medium_reservoirs_latest.json?v='+Math.floor(Date.now()/3600000),{cache:'no-store',signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error(r.status);const d=await r.json();if(!Array.isArray(d.rows))throw Error('รูปแบบข้อมูลไม่ถูกต้อง');reservoirs=d.rows;reservoirStamp=d.fetched_at;reservoirError='';renderReservoirs();renderRelatedDams();}
  catch(e){reservoirError=e.message;if(reservoirs.length)renderReservoirs();else if($('efReservoirList'))$('efReservoirList').textContent='โหลดข้อมูลอ่างเก็บน้ำไม่สำเร็จ';}
  finally{reservoirBusy=false;}
 }
 document.addEventListener('change',event=>{if(event.target.id==='efReservoirProvince')renderReservoirs()});
 document.addEventListener('click',event=>{const b=event.target.closest('[data-reservoir-id]');if(!b)return;const r=reservoirs.find(r=>String(r.id)===b.dataset.reservoirId);if(r&&r.lat!=null&&r.lng!=null){zoom(r.lat,r.lng);}});


 let relatedDams=[],relatedDamBusy=false;
 function renderRelatedDams(){
  const host=$('efRelatedDams');if(!host)return;
  let rows=filterWaterScope(relatedDams);if(!provinceScope.active)rows=rows.slice(0,6);
  document.dispatchEvent(new CustomEvent('ieat-dam-flow-data',{detail:rows}));
  host.innerHTML=rows.length?rows.map(r=>{const p=num(r.percent),delta=num(r.release_change),theme=waterCardTheme(p),c=theme.color;const camera=r.camera_url&&/^https:\/\//.test(r.camera_url)?'<img data-dam-camera src="'+esc(r.camera_url)+'?v='+Math.floor(Date.now()/3600000)+'" alt="ภาพกล้อง '+esc(r.camera_title||r.name)+'" loading="lazy"><small>ภาพนิ่งจากกล้องต้นทาง · ตรวจเวลาภาพที่ประทับในภาพ</small>':'<small>ต้นทางไม่มีภาพกล้องในชุดข้อมูลนี้</small>';return '<article class="ef-dam-card" data-water-theme="'+theme.key+'" style="--water-accent:'+c+'"><small>'+esc(r.province)+' · '+esc(r.basin)+'</small>'+distanceLabel(r)+'<h3>'+esc(r.name)+'</h3><div class="ef-dam-value">'+(p===null?'—':p.toFixed(1)+'%')+'</div><div class="ef-dam-bar"><i style="background:'+c+';width:'+Math.min(100,Math.max(0,p))+'%"></i></div><small>ของระดับเก็บกักปกติ</small><p>กักเก็บ '+fmt(r.storage)+' ล้าน ลบ.ม. · ความจุปกติ '+fmt(r.capacity)+' ล้าน ลบ.ม.</p><div class="ef-dam-flows"><div><small>น้ำไหลเข้า</small><b>'+fmt(r.inflow)+'</b></div><div><small>ระบายออก</small><b>'+fmt(r.released)+'</b><small>≈ '+(num(r.released)===null?'—':fmt(r.released*1000000/86400))+' ลบ.ม./วินาที</small></div></div><div class="ef-dam-change">'+(delta===null?'ยังไม่มีค่าเปรียบเทียบการระบายกับวันก่อน':delta>0?'▲ ระบายเพิ่มจากเมื่อวาน '+fmt(delta)+' ล้าน ลบ.ม.':delta<0?'▼ ระบายลดจากเมื่อวาน '+fmt(Math.abs(delta))+' ล้าน ลบ.ม.':'ระบายเท่ากับเมื่อวาน')+'</div><small>ล้าน ลบ.ม./วัน · ข้อมูลวันที่ '+esc(r.measured_at)+'</small>'+camera+'<button type="button" data-related-dam="'+esc(r.id)+'">ดูตำแหน่งเขื่อนบนแผนที่ ↗</button></article>'}).join(''):'<p>'+(provinceScope.active?'ไม่พบเขื่อนภายใน 30 กม. จากนิคมฯ ที่เลือก':'ไม่พบข้อมูลเขื่อนในชุดข้อมูลต้นทาง')+'</p>';
 }
 async function loadRelatedDams(){
  if(relatedDamBusy)return;relatedDamBusy=true;
  try{const r=await fetch('./data/related_dams_latest.json?v='+Math.floor(Date.now()/3600000),{cache:'no-store',signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error(r.status);const d=await r.json();if(!Array.isArray(d.rows))throw Error('ไม่มีข้อมูลเขื่อน');relatedDams=d.rows;renderRelatedDams();}
  catch(e){if(!relatedDams.length&&$('efRelatedDams'))$('efRelatedDams').textContent='โหลดข้อมูลเขื่อนไม่สำเร็จ';}
  finally{relatedDamBusy=false}
 }
 document.addEventListener('change',event=>{if(event.target.id==='efReservoirProvince')renderRelatedDams()});
 document.addEventListener('click',event=>{const b=event.target.closest('[data-related-dam]');if(!b)return;const r=relatedDams.find(r=>String(r.id)===b.dataset.relatedDam);if(r&&r.lat!=null&&r.lng!=null)zoom(r.lat,r.lng)});
 document.addEventListener('error',event=>{if(event.target.matches?.('[data-dam-camera]')){event.target.hidden=true;const text=document.createElement('small');text.textContent='กล้องต้นทางไม่ส่งภาพในขณะนี้';event.target.after(text)}},true);


 let canalRows=[],canalBusy=false,canalError='';
 const canalText=v=>typeof v==='object'&&v!==null?String(v.th||v.en||''):String(v||'');
 function renderCanals(){
  const host=$('efCanalList');if(!host)return;
  let rows=filterWaterScope(canalRows).filter(r=>num(r.wl)!==null&&Date.now()-timestamp(r.measured_at)<=86400000&&timestamp(r.measured_at)<=Date.now()+300000).sort((a,b)=>(scopeDistance(a)??Infinity)-(scopeDistance(b)??Infinity));if(!provinceScope.active)rows=rows.slice(0,6);
  host.closest('.ef-canal-panel').hidden=false;
  host.innerHTML=rows.map(r=>{

   const gap=r.bank===null?null:r.wl-r.bank,near=r.warning!==null&&r.wl>=r.warning;
   const color=gap!==null&&gap>=0?'#d9364d':near?'#dd9c20':'#169b8f',label=gap===null?'ไม่มีระดับตลิ่ง':gap>=0?'ล้นตลิ่ง':near?'ใกล้ตลิ่ง':'ต่ำกว่าตลิ่ง';
   const lo=Math.min(0,r.wl,r.bank??0)-.2,hi=Math.max(2,r.wl,r.bank??0)+.5,y=v=>155-(v-lo)/(hi-lo)*130;
   const gauge='<svg viewBox="0 0 80 185" role="img" aria-label="มาตรวัดระดับน้ำ"><rect x="24" y="25" width="28" height="130" rx="1" fill="#eff7fa" stroke="#27677c"/><rect x="25" y="'+y(r.wl)+'" width="26" height="'+Math.max(0,155-y(r.wl))+'" fill="#59bed7"/>'+[0,1,2,3,4,5].map(i=>{const v=lo+(hi-lo)*i/5;return '<path d="M40 '+y(v)+' H51" stroke="#6ebad0"/><text x="17" y="'+(y(v)+3)+'" font-size="7" text-anchor="end" fill="#003666">'+v.toFixed(1)+'</text>'}).join('')+(r.bank===null?'':'<path d="M16 '+y(r.bank)+' H61" stroke="#ec1c24" stroke-width="1.5"/><text x="63" y="'+(y(r.bank)-3)+'" fill="#ec1c24" font-size="6">ตลิ่ง</text>')+'<text x="38" y="169" font-size="6" text-anchor="middle" fill="#003666">ม.รทก.</text></svg>';
   return '<button type="button" class="ef-canal-card" data-canal-id="'+esc(r.id)+'"><b>'+esc(r.code)+' · '+esc(r.name)+'</b><div class="ef-canal-body"><div class="ef-canal-gauge">'+gauge+'</div><div class="ef-canal-content"><span class="ef-canal-status" style="background:'+color+'">'+label+'</span>'+distanceLabel(r)+'<small>'+esc(r.district)+' · กรุงเทพมหานคร</small><strong style="color:'+color+'">'+(gap===null?'ไม่มีระดับตลิ่ง':(gap>=0?'สูงกว่าตลิ่ง ':'ต่ำกว่าตลิ่ง ')+Math.abs(gap).toLocaleString('th-TH',{maximumFractionDigits:2})+' ม.')+'</strong><small>ระดับ '+r.wl.toLocaleString('th-TH',{maximumFractionDigits:2})+' ม.รทก.</small><small>อัปเดต '+esc(time(r.measured_at))+' · สำนักการระบายน้ำ กทม.</small></div></div></button>';

  }).join('');
  if(!rows.length)host.innerHTML='<p>ไม่พบข้อมูลคลองล่าสุดในพื้นที่ที่เลือก'+(canalError?' · โหลดข้อมูลไม่สำเร็จ':'')+'</p>';
  $('efCanalTime').textContent=(provinceScope.active?'คลองภายใน 30 กม. จากนิคมฯ ที่เลือก · เรียงใกล้ที่สุดก่อน · ':'')+'สำนักการระบายน้ำ กรุงเทพมหานคร ผ่าน Faonam · โหลดใหม่ทุก 1 ชั่วโมง'+(canalError?' · โหลดรอบใหม่ไม่สำเร็จ แสดงข้อมูลครั้งก่อน':'');
 }
 async function loadCanalsPanel(){
  if(canalBusy)return;canalBusy=true;
  try{
   const response=await fetch('./data/bma_canal_latest.json?v='+Math.floor(Date.now()/3600000),{cache:'no-store',signal:AbortSignal.timeout(15000)});
   if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();if(!Array.isArray(data.data))throw Error('รูปแบบข้อมูลคลองไม่ถูกต้อง');
   canalRows=data.data.map(r=>{const t=r.station||{},g=r.geocode||{};return {id:t.id,code:t.canal_oldcode,name:canalText(t.canal_name),district:canalText(g.amphoe_name),province:canalText(g.province_name),lat:num(t.canal_lat),lng:num(t.canal_long),wl:num(r.canal_value),outer:num(r.canal_out),bank:num(t.bank),warning:num(t.warning_level),critical:num(t.critical_level),measured_at:r.canal_datetime}});
   canalError='';renderCanals();
  }catch(error){canalError=error.message;renderCanals()}finally{canalBusy=false}
 }
 document.addEventListener('ieat-flood-estate-scope',renderCanals);
 document.addEventListener('click',event=>{const button=event.target.closest('[data-canal-id]');if(!button)return;const row=canalRows.find(r=>String(r.id)===button.dataset.canalId);if(row&&row.lat!==null&&row.lng!==null)$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat:row.lat,lon:row.lng,scale:75000,label:row.name,kind:'canal',station:{...row,source_name:'สำนักการระบายน้ำ กทม.',source_url:'https://faonam.com/p/71'}},location.origin)});

 function start(){mount();loadCanalsPanel();setInterval(loadCanalsPanel,3600000);loadRelatedDams();setInterval(loadRelatedDams,3600000);loadReservoirs();setInterval(loadReservoirs,3600000);if(window.IEAT_THAIWATER_DATA)render(window.IEAT_THAIWATER_DATA);load();setInterval(load,3600000)}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();




