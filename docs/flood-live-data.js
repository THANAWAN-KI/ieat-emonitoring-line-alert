(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const fmt=(value,digits=1)=>value==null?"–":Number(value).toLocaleString("th-TH",{maximumFractionDigits:digits});
  const set=(id,value)=>{const el=$(id);if(el)el.value=value};
  const date=value=>value?new Date(value).toLocaleString("th-TH"):"ไม่ระบุเวลา";
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
    if(data.status!=="ok"){
      if(state)state.innerHTML='<b style="color:#d12f47">ข้อมูลอัตโนมัติไม่พร้อมใช้งาน</b><br>ช่องที่ไม่มีข้อมูลจะแสดง “รอตรวจสอบ” และไม่ใช้ตัวเลขตัวอย่าง';
      set("estateCountIn","รอตรวจสอบ");set("criticalIn","รอตรวจสอบ");set("rainIn","รอตรวจสอบ");set("factoryIn","รอตรวจสอบ");set("routeCountIn","รอตรวจสอบ");window.sync?.();return;
    }
    const s=data.summary||{},watch=data.estate_watch||[],top=watch[0];
    if(state)state.innerHTML=`<b style="color:#14845d">เชื่อมต่อข้อมูลทางการสำเร็จ</b><br>อัปเดต ${date(data.generated_at)} • ตำแหน่งนิคมฯ ${fmt(s.estate_total,0)} แห่ง • สถานีใกล้นิคมฯ ${fmt(s.station_count,0)} แห่ง`;
    if(method){const m=data.methodology||{};method.textContent=m.note||`ประเมินสถานีในรัศมี ${m.watch_radius_km||30} กม. จากนิคมฯ`}
    set("estateCountIn",`${fmt(s.estate_count,0)} แห่ง`);
    set("criticalIn",`${fmt(s.critical_count,0)} แห่ง`);
    set("rainIn",s.max_rainfall_mm==null?"ไม่มีข้อมูล":`${fmt(s.max_rainfall_mm)} มม.`);
    set("levelIn",s.risk_level||"ปกติ");
    set("factoryIn","รอตรวจสอบจากสำนักงานนิคมฯ");
    set("routeCountIn","รอตรวจสอบ");
    set("roadIn","รอตรวจสอบผลกระทบจริง");
    set("verifyIn","ข้อมูลอัตโนมัติจาก ThaiWater • ผลกระทบรอยืนยันจากพื้นที่");
    if(top){
      set("estateIn",top.name);
      set("summaryIn",`พบนิคมอุตสาหกรรมเข้าเกณฑ์เฝ้าระวัง ${fmt(s.estate_count,0)} แห่ง จาก ${fmt(s.estate_total,0)} แห่ง โดย ${top.name} มีสถานีผิดปกติใกล้เคียง ${fmt(top.alert_station_count,0)} แห่ง จุดแจ้งเตือนใกล้ที่สุดประมาณ ${fmt(top.nearest_alert_km)} กม. สถานะสูงสุด ${top.status} ข้อมูลนี้เป็นการคัดกรองอัตโนมัติและต้องยืนยันผลกระทบจริงกับสำนักงานนิคมฯ`);
    }else{
      set("estateIn","ภาพรวมทุกนิคมอุตสาหกรรม");
      set("summaryIn",`ไม่พบนิคมอุตสาหกรรมเข้าเกณฑ์เฝ้าระวังอัตโนมัติจากข้อมูลล่าสุด ทั้งนี้ยังต้องติดตามประกาศทางการและยืนยันสถานการณ์ในพื้นที่`);
    }
    renderEstateRanks(watch);renderStations(data.stations||[]);window.sync?.();
  }
  window.addEventListener("DOMContentLoaded",async()=>{banner();try{const response=await fetch(`data/thaiwater_latest.json?v=${Date.now()}`,{cache:"no-store"});if(!response.ok)throw new Error(`HTTP ${response.status}`);apply(await response.json())}catch(error){console.error(error);apply({status:"unavailable"})}});
})();
