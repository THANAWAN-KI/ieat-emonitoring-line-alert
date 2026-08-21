(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const fmt=value=>value==null?"–":Number(value).toLocaleString("th-TH",{maximumFractionDigits:2});
  const set=(id,value)=>{const el=$(id);if(el)el.value=value};
  function banner(){
    const box=document.createElement("section");box.id="liveDataStatus";box.className="form-group";
    box.innerHTML='<h2>ข้อมูล ThaiWater</h2><div id="liveState" style="font-size:16px;line-height:1.55">กำลังตรวจสอบข้อมูล…</div><a href="https://datagov.hii.or.th/" target="_blank" rel="noopener" style="display:block;margin-top:7px;color:#2f80ed;font-size:15px">เปิดแหล่งข้อมูล สสน.</a>';
    document.querySelector(".drawer-head")?.after(box);
  }
  function stationRows(stations){
    const body=$("stations");if(!body||!stations.length)return;body.innerHTML="";
    stations.slice(0,8).forEach(s=>window.addStation?.({n:`${s.station}${s.province?" • "+s.province:""}`,v:s.rainfall_mm==null?"–":`${fmt(s.rainfall_mm)} มม.`,s:s.status||"ไม่มีข้อมูล",trend:"–",t:s.observed_at||"–"}));
  }
  function apply(data){
    const state=$("liveState");
    if(data.status!=="ok"){
      if(state)state.innerHTML='<b style="color:#d12f47">เชื่อมต่อข้อมูลล่าสุดไม่ได้</b><br>ระบบยังเปิดให้กรอกข้อมูลที่เจ้าหน้าที่ยืนยันเอง โดยไม่แสดงข้อมูลเก่าว่าเป็นข้อมูลสด';return;
    }
    const s=data.summary||{};
    if(state)state.innerHTML=`<b style="color:#14845d">เชื่อมต่อข้อมูลเปิดสำเร็จ</b><br>อัปเดต ${new Date(data.generated_at).toLocaleString("th-TH")} • สถานีใกล้นิคมฯ ${fmt(s.station_count)} แห่ง`;
    set("estateCountIn",`${fmt(s.estate_count)} แห่ง`);set("criticalIn",`${fmt(s.critical_count)} แห่ง`);set("rainIn",s.max_rainfall_mm==null?"ไม่มีข้อมูล":`${fmt(s.max_rainfall_mm)} มม.`);set("levelIn",s.risk_level||"เฝ้าระวัง");
    stationRows(data.stations||[]);window.sync?.();
  }
  window.addEventListener("DOMContentLoaded",async()=>{banner();try{const response=await fetch(`data/thaiwater_latest.json?v=${Date.now()}`,{cache:"no-store"});if(!response.ok)throw new Error(`HTTP ${response.status}`);apply(await response.json())}catch(error){console.error(error);apply({status:"unavailable"})}});
})();
