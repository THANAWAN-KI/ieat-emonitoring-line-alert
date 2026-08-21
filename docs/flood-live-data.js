(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const fmt=(value,digits=1)=>value==null?"–":Number(value).toLocaleString("th-TH",{maximumFractionDigits:digits});
  const set=(id,value)=>{const el=$(id);if(el)el.value=value};
  const date=value=>value?new Date(value).toLocaleString("th-TH"):"ไม่ระบุเวลา";
  const CACHE_KEY="ieat-thaiwater-latest-v2";
  function banner(){
    const box=document.createElement("section");box.id="liveDataStatus";box.className="form-group";
    box.innerHTML='<h2>สถานะข้อมูลอัตโนมัติ</h2><div id="liveState" style="font-size:16px;line-height:1.6">กำลังตรวจสอบข้อมูล…</div><div id="liveMethod" style="margin-top:8px;color:#68717d;font-size:14px;line-height:1.55"></div><a href="https://www.thaiwater.net/new4all" target="_blank" rel="noopener" style="display:block;margin-top:8px;color:#3478f6">เปิดข้อมูล ThaiWater</a>';
    document.querySelector(".drawer-head")?.after(box);
  }
  function renderStations(stations){
    const body=$("stations");if(!body)return;body.innerHTML="";
    const selected=stations.filter(s=>s.distance_km<=30&&s.severity_score>=2).slice(0,12);
    if(!selected.length){body.innerHTML='<tr><td colspan="6" style="text-align:center;color:#7b8390;padding:28px">ไม่พบสถานีผิดปกติภายในรัศมี 30 กม. จากนิคมฯ</td></tr>';return}
    selected.forEach(s=>window.addStation?.({
      n:`${s.station} • ${s.nearest_estate}`,
      v:s.value_text||"–",s:s.status||"ไม่มีข้อมูล",trend:s.kind==="rainfall"?"ฝน 24 ชม.":"ระดับน้ำ",
      t:s.observed_at||"–",agency:s.agency||"ThaiWater"
    }));
  }
  function renderEstateRanks(estates){
    const box=$("estateRanks");if(!box)return;
    if(!estates.length){box.innerHTML='<div style="padding:22px;text-align:center;color:#7b8390">ไม่พบนิคมฯ เข้าเกณฑ์เฝ้าระวัง</div>';return}
    box.innerHTML=estates.slice(0,8).map((e,i)=>`<div class="rank"><i>${i+1}</i><div><b>${e.name}</b><small>สถานีผิดปกติ ${fmt(e.alert_station_count,0)} แห่ง • ใกล้สุด ${fmt(e.nearest_alert_km)} กม.</small></div><strong>${e.max_rainfall_mm==null?e.status:fmt(e.max_rainfall_mm)+" มม."}</strong></div>`).join("");
  }
  function apply(data){
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
    renderEstateRanks(watch);renderStations(stations);window.sync?.();
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
    if(window.IEAT_THAIWATER_DATA?.summary)apply(window.IEAT_THAIWATER_DATA);
    load();
  });
})();
