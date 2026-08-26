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
  function renderNationalWarning(data){
    const warning=data.national_warning||{},storms=warning.storms||[];
    const flood=warning.flood_watch_24h||{},forecast=warning.forecast_24h||{};
    if($("stormCount"))$("stormCount").textContent=`${fmt(storms.length,0)} ลูก`;
    if($("stormSummary"))$("stormSummary").textContent=storms.length?storms.map(s=>s.name).join(", "):"ไม่พบพายุเข้าใกล้ประเทศไทย";
    if($("stormList"))$("stormList").innerHTML=storms.length?storms.map(s=>`<span class="storm-chip"><b>${s.name}</b> • ลม ${fmt(s.wind_knot,0)} นอต • ${s.observed_at||"ไม่ระบุเวลา"}</span>`).join(""):'<span class="storm-chip" style="background:#EAF8F3;color:#14845D">ไม่พบพายุเข้าใกล้ประเทศไทย</span>';
    if($("floodProvinceCount"))$("floodProvinceCount").textContent=`${fmt(flood.province_count||0,0)} จังหวัด`;
    if($("floodProvinceList"))$("floodProvinceList").innerHTML=(flood.provinces||[]).length?flood.provinces.map(p=>`<span class="province-tag">${p}</span>`).join(""):'<span class="province-tag" style="background:#EAF8F3;color:#14845D">ไม่พบจังหวัดเข้าเกณฑ์เฝ้าระวัง ณ เวลาปัจจุบัน</span>';
    if($("forecastCaption"))$("forecastCaption").textContent=forecast.valid_at?`ภาพพยากรณ์ฝน WRF-ROMS สำหรับ ${date(forecast.valid_at)}`:"ยังไม่มีภาพพยากรณ์ล่าสุด";
    if($("forecastRainImage")&&forecast.image_url){$("forecastRainImage").src=forecast.image_url;$("forecastRainImage").hidden=false}
    if($("overviewWatchList"))$("overviewWatchList").innerHTML=(data.estate_watch||[]).length?(data.estate_watch||[]).slice(0,8).map(e=>`<li><b>${e.name}</b> — ${e.status} • จุดแจ้งเตือนใกล้สุด ${fmt(e.nearest_alert_km)} กม.</li>`).join(""):'<li>ไม่พบนิคมฯ เข้าเกณฑ์เฝ้าระวังจากข้อมูลล่าสุด</li>';
    if($("warningUpdated"))$("warningUpdated").textContent=`ล่าสุด ${date(data.generated_at)}`;
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
    renderNationalWarning(data);renderEstateRanks(watch);renderStations(data.stations||[]);window.sync?.();
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
