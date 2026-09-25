(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const fmt=(value,digits=1)=>value==null?"–":Number(value).toLocaleString("th-TH",{maximumFractionDigits:digits});
  const set=(id,value)=>{const el=$(id);if(!el)return;if(el.matches("input, select, textarea"))el.value=value;else el.textContent=value};
  const date=value=>value?new Date(value).toLocaleString("th-TH"):"ไม่ระบุเวลา";
  const CACHE_KEY="ieat-thaiwater-latest-v2";
  function banner(){
    const box=document.createElement("section");box.id="liveDataStatus";box.className="form-group";
    box.innerHTML='<h2>สถานะข้อมูลอัตโนมัติ</h2><div id="liveState" style="font-size:16px;line-height:1.6">กำลังตรวจสอบข้อมูล…</div><div id="liveMethod" style="margin-top:8px;color:#68717d;font-size:14px;line-height:1.55"></div><a href="https://www.thaiwater.net/new4all" target="_blank" rel="noopener" style="display:block;margin-top:8px;color:#3478f6">เปิดข้อมูล ThaiWater</a>';
    document.querySelector(".drawer-head")?.after(box);
  }
  function renderStations(stations,summary){
    const body=$("stations");if(!body)return;body.innerHTML="";
    const selected=stations.filter(s=>s.kind==="waterlevel"&&s.distance_km<=30&&s.severity_score>=2).slice(0,12);
    if(!selected.length){
      const reported=Number(summary?.waterlevel_alert_count)||0;
      body.innerHTML='<tr><td colspan="4" style="text-align:center;color:#7b8390;padding:28px">'+
        (reported?'ข้อมูลสรุประบุสถานีระดับน้ำเข้าเกณฑ์ '+reported.toLocaleString('th-TH')+' แห่ง แต่รายละเอียดสถานียังไม่พร้อมแสดง กรุณาตรวจสอบข้อมูลระดับน้ำต้นทาง':'ไม่พบสถานีระดับน้ำผิดปกติภายในรัศมี 30 กม. จากนิคมฯ')+
        '</td></tr>';return;
    }
    selected.forEach(s=>window.addStation?.({
      n:`${s.station} • ${s.nearest_estate}`,
      v:s.value_text||"–",s:s.status||"ไม่มีข้อมูล",trend:s.kind==="rainfall"?"ฝน 24 ชม.":"ระดับน้ำ",
      t:s.observed_at||"–",agency:s.agency||"ThaiWater",lat:s.lat,lon:s.lon
    }));
  }
  function renderEstateRanks(){
    const body=$("estateRanks");if(!body)return;
    body.innerHTML='<tr><td colspan="6" class="table-empty" style="padding:24px;line-height:1.7">ยังไม่มีข้อมูลตำแหน่งน้ำท่วมที่ตรวจพบพร้อมวันเวลาให้แสดงในระบบนี้ ข้อมูลสถานีฝนและระดับน้ำไม่สามารถใช้ยืนยันว่าจุดใดน้ำท่วมแล้วได้<br><a href="https://disaster.gistda.or.th/flood" target="_blank" rel="noopener noreferrer">เปิดแผนที่พื้นที่น้ำท่วมของ GISTDA เพื่อตรวจสอบข้อมูลล่าสุด ↗</a></td></tr>';
  }
  async function renderObservedFloods(){
    const body=$("estateRanks");if(!body)return;
    try{
      const response=await fetch("./data/gistda_flood_latest.geojson?v="+Date.now(),{cache:"no-store"});
      if(!response.ok)throw new Error("feed unavailable");
      const feed=await response.json(),retrieved=Date.parse(feed.metadata?.retrieved_at||"");
      if(!Number.isFinite(retrieved)||Date.now()-retrieved>12*3600000)throw new Error("feed outdated");
      const clean=s=>String(s??"–").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
      const groups=new Map();
      function bounds(coordinates,box){
        if(!Array.isArray(coordinates))return;
        if(typeof coordinates[0]==="number"&&typeof coordinates[1]==="number"){
          const [lon,lat]=coordinates;
          if(Math.abs(lat)<=90&&Math.abs(lon)<=180){box.minLon=Math.min(box.minLon,lon);box.maxLon=Math.max(box.maxLon,lon);box.minLat=Math.min(box.minLat,lat);box.maxLat=Math.max(box.maxLat,lat)}
        }else coordinates.forEach(part=>bounds(part,box));
      }
      (feed.features||[]).filter(f=>f.geometry&&f.properties).forEach(f=>{
        const p=f.properties,location=[p.tb_tn||p.tambon,p.ap_tn||p.amphoe||p.district].filter(Boolean).join(" ")||p.name||"พื้นที่ในภาพดาวเทียม";
        const province=p.pv_tn||p.province||p.prov_name||"–";
        const scenes=[...String(p.file_name||"").matchAll(/(?:19|20)\d{6}_\d{4}/g)].map(m=>m[0]).sort();
        const latest=scenes.at(-1),observed=p.acquired_at||p.acquisition_date||p.image_date||p.observed_at||p.date||p.datetime;
        const when=latest?`${Number(latest.slice(6,8))} ${["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."][Number(latest.slice(4,6))-1]} ${Number(latest.slice(0,4))+543} ${latest.slice(9,11)}:${latest.slice(11,13)} น. (ชื่อไฟล์ภาพ)`:
          observed&&Number.isFinite(Date.parse(observed))?new Date(observed).toLocaleString("th-TH"):"ไม่ระบุวันภาพ";
        const key=province+"|"+location;
        if(!groups.has(key))groups.set(key,{location,province,when,count:0,box:{minLon:Infinity,maxLon:-Infinity,minLat:Infinity,maxLat:-Infinity}});
        const group=groups.get(key);group.count++;
        bounds(f.geometry.coordinates,group.box);
      });
      const rows=[...groups.values()].sort((a,b)=>b.count-a.count).map((g,i)=>{
        const b=g.box,valid=Number.isFinite(b.minLon)&&Number.isFinite(b.minLat);
        const scale=valid?Math.round(Math.max(35000,Math.min(300000,Math.max((b.maxLon-b.minLon)*95,(b.maxLat-b.minLat)*111)*8000))):75000;
        const attrs=valid?` data-map-lat="${(b.minLat+b.maxLat)/2}" data-map-lon="${(b.minLon+b.maxLon)/2}" data-map-scale="${scale}" data-map-label="${clean(g.location)}"`:"";
        const badge=valid?`<button type="button" class="map-cell-zoom observed-flood-zoom"${attrs} aria-label="ซูมแผนที่ไปที่พื้นที่น้ำท่วม ${clean(g.location)}">${clean(g.when)}</button>`:clean(g.when);
        return `<tr data-count="${g.count}"><td>${i+1}</td><td>${clean(g.location)} <small>(${g.count} ขอบเขต)</small></td><td>${clean(g.province)}</td><td>${badge}</td><td>ยังไม่ยืนยันผลกระทบนิคมฯ</td><td><a href="https://disaster.gistda.or.th/flood" target="_blank" rel="noopener noreferrer">GISTDA ↗</a></td></tr>`;
      });
      const heading=body.closest(".estate-watch-table")?.querySelector(".table-section-head h2");
      if(heading)heading.textContent=`ตำแหน่งพื้นที่ที่ตรวจพบน้ำท่วม (${groups.size.toLocaleString("th-TH")} ตำบล)`;
      body.innerHTML=rows.length?rows.join(""):'<tr><td colspan="6" class="table-empty">ไม่พบขอบเขตพื้นที่น้ำท่วมในข้อมูล GISTDA รอบ 7 วันที่ดึงล่าสุด</td></tr>';
    }catch(_error){renderEstateRanks()}
  }
  function apply(data){
    window.IEAT_LIVE_DATA=data;
    window.dispatchEvent(new CustomEvent("ieat:data-ready",{detail:data}));
    const state=$("liveState"),method=$("liveMethod");
    if(!["ok","stale","partial"].includes(data.status)||!data.summary){
      if(state)state.innerHTML='<b style="color:#d12f47">ข้อมูลอัตโนมัติไม่พร้อมใช้งาน</b><br>ช่องที่ไม่มีข้อมูลจะแสดง “รอตรวจสอบ” และไม่ใช้ตัวเลขตัวอย่าง';
      set("estateCountIn","รอตรวจสอบ");set("criticalIn","รอตรวจสอบ");set("rainIn","รอตรวจสอบ");set("factoryIn","รอตรวจสอบ");set("routeCountIn","รอตรวจสอบ");window.sync?.();return;
    }
    const s=data.summary||{},watch=data.estate_watch||[],top=watch[0];
    const stale=data.status!=="ok";
    if(state)state.innerHTML=`<b style="color:${stale?'#b66a04':'#14845d'}">${stale?'ใช้ข้อมูลสำเร็จล่าสุด':'เชื่อมต่อข้อมูลทางการสำเร็จ'}</b><br>อัปเดต ${date(data.generated_at)} • ตำแหน่งนิคมฯ ${fmt(s.estate_total,0)} แห่ง • สถานีใกล้นิคมฯ ${fmt(s.station_count,0)} แห่ง`;
    if(method){const m=data.methodology||{};method.textContent=m.note||`ประเมินสถานีในรัศมี ${m.watch_radius_km||30} กม. จากนิคมฯ`}
    set("estateCountIn",`${fmt(s.estate_count,0)} แห่ง`);
    set("factoryIn",`${fmt(s.heavy_rain_estate_count,0)} แห่ง`);
    set("criticalIn",`${fmt(s.water_alert_estate_count,0)} แห่ง`);
    set("routeCountIn",`${fmt(s.alert_station_count,0)} แห่ง`);
    set("rainIn",s.max_rainfall_mm==null?"ไม่มีข้อมูล":`${fmt(s.max_rainfall_mm)} มม.`);
    set("levelIn",s.risk_level||"ปกติ");
    set("roadIn","รอตรวจสอบผลกระทบจริง");
    set("verifyIn","ข้อมูลอัตโนมัติจาก ThaiWater • ผลกระทบรอยืนยันจากพื้นที่");
    set("estateIn","นิคมอุตสาหกรรมทั่วประเทศไทย");
    if(top){
      const names=watch.slice(0,3).map(e=>e.name).join(", ");
      set("summaryIn",`พบนิคมอุตสาหกรรมเข้าเกณฑ์เฝ้าระวัง ${fmt(s.estate_count,0)} แห่ง จาก ${fmt(s.estate_total,0)} แห่ง พื้นที่ที่ต้องติดตามลำดับต้น ได้แก่ ${names} โดยจุดแจ้งเตือนที่ใกล้นิคมฯ มากที่สุดประมาณ ${fmt(Math.min(...watch.map(e=>e.nearest_alert_km)))} กม. ข้อมูลนี้เป็นการคัดกรองอัตโนมัติและต้องยืนยันผลกระทบจริงกับสำนักงานนิคมฯ`);
    }else{
      set("summaryIn",`ไม่พบนิคมอุตสาหกรรมเข้าเกณฑ์เฝ้าระวังอัตโนมัติจากข้อมูลล่าสุด ทั้งนี้ยังต้องติดตามประกาศทางการและยืนยันสถานการณ์ในพื้นที่`);
    }
    const stations=data.stations||[];
    const provinceNames=items=>[...new Set(items.map(row=>row.province).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"th"));
    const waterProvinces=provinceNames(stations.filter(row=>row.kind==="waterlevel"&&Number(row.severity_score)>=2));
    const heavyRainProvinces=provinceNames(stations.filter(row=>row.kind==="rainfall"&&Number(row.rainfall_mm)>70));
    const floodProvinces=(s.flood_watch_provinces?.length?s.flood_watch_provinces:provinceNames(stations.filter(row=>Number(row.severity_score)>=3))).filter(Boolean);
    const watchProvinces=[...new Set([...waterProvinces,...heavyRainProvinces,...floodProvinces])].sort((a,b)=>a.localeCompare(b,"th"));
    set("nationalStormCount",fmt(s.storm_count||0,0));
    set("nationalStormLabel",s.storm_names?.length?s.storm_names.join(", "):"ไม่มีพายุเข้าใกล้ประเทศไทย");
    set("nationalWaterProvinceCount",fmt(waterProvinces.length,0));
    set("nationalHeavyRainCount",fmt(heavyRainProvinces.length,0));
    set("nationalFloodCount",fmt(floodProvinces.length,0));
    set("radarUpdated",`อัปเดตพร้อมข้อมูลเวลา ${date(data.generated_at)}`);
    const provinceCenters={};
    stations.forEach(row=>{if(!row.province||!Number.isFinite(Number(row.lat))||!Number.isFinite(Number(row.lon)))return;const p=provinceCenters[row.province]||(provinceCenters[row.province]={lat:0,lon:0,n:0});p.lat+=Number(row.lat);p.lon+=Number(row.lon);p.n++});
    const mapUrl=(name)=>{const p=provinceCenters[name];if(!p)return "https://ieat.maps.arcgis.com/apps/mapviewer/index.html?configurableview=true&webmap=3d24287ac6ea49cd823625ddad496e01&theme=light";const lat=(p.lat/p.n).toFixed(5),lon=(p.lon/p.n).toFixed(5);return `https://ieat.maps.arcgis.com/apps/mapviewer/index.html?configurableview=true&webmap=3d24287ac6ea49cd823625ddad496e01&theme=light&scroll=false&center=${lon},${lat}&scale=550000`};
    const list=document.getElementById("nationalProvinceList");
    if(list)list.innerHTML=watchProvinces.length?watchProvinces.map(name=>`<a href="${mapUrl(name)}" target="floodMap" title="ซูมแผนที่ไปที่จังหวัด${name}">${name}</a>`).join(""):'<span class="empty">ไม่พบจังหวัดเข้าเกณฑ์เฝ้าระวังจากข้อมูลล่าสุด</span>';
    const alert=document.getElementById("nationalAlertText");
    if(alert)alert.textContent=s.warning_title||s.warning_summary||(watchProvinces.length?`พบพื้นที่เข้าเกณฑ์เฝ้าระวัง ${watchProvinces.length} จังหวัด ควรติดตามประกาศทางการและยืนยันสถานการณ์กับพื้นที่`:"ไม่พบพื้นที่เข้าเกณฑ์เฝ้าระวังอัตโนมัติจากข้อมูลล่าสุด");
    const warningLink=document.getElementById("nationalWarningLink");if(warningLink&&s.warning_url)warningLink.href=s.warning_url;
    renderEstateRanks();renderObservedFloods();renderStations(stations,s);window.sync?.();
  }
  async function load(){
    const url=new URL("./data/thaiwater_latest.json",document.baseURI);url.searchParams.set("v",Date.now());
    try{
      const response=await fetch(url,{cache:"no-store"});if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const data=await response.json();
      if(!data.summary)throw new Error("ข้อมูลสรุปไม่ครบ");
      try{localStorage.setItem(CACHE_KEY,JSON.stringify(data))}catch(_error){}
      apply(data);
    }catch(error){
      console.error("โหลดข้อมูล ThaiWater ไม่สำเร็จ",error);
      try{const cached=JSON.parse(localStorage.getItem(CACHE_KEY)||"null");if(cached?.summary){cached.status="stale";apply(cached);return}}catch(_error){}
      if(!window.IEAT_THAIWATER_DATA?.summary)apply({status:"unavailable"});
    }
  }
  window.addEventListener("DOMContentLoaded",()=>{
    banner();
    renderObservedFloods();
    if(window.IEAT_THAIWATER_DATA?.summary)apply(window.IEAT_THAIWATER_DATA);
    load();
  });
})();
