(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  let latestData=null;

  function statusLevel(status,score){
    const text=String(status||"");
    if(Number(score)>=4||text.includes("ล้น")||text.includes("วิกฤต"))return "critical";
    if(Number(score)>=3||text.includes("มาก")||text.includes("เฝ้าระวัง"))return "warning";
    return "normal";
  }
  function fmt(value,digits=1){
    return value==null||value===""?"–":Number(value).toLocaleString("th-TH",{maximumFractionDigits:digits});
  }
  function shortTime(value){
    if(!value)return "–";
    const date=new Date(String(value).replace(" ","T"));
    return Number.isNaN(date.getTime())?String(value):date.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})+" น.";
  }
  function cleanProvince(value){return String(value||"–").replace(/^จ\./,"")}
  function distanceKm(a,b,c,d){
    const R=6371,toRad=x=>x*Math.PI/180,dp=toRad(c-a),dl=toRad(d-b);
    const q=Math.sin(dp/2)**2+Math.cos(toRad(a))*Math.cos(toRad(c))*Math.sin(dl/2)**2;
    return 2*R*Math.asin(Math.sqrt(q));
  }
  function renderPins(data){
    const estates=(data.estate_watch||[]).filter(e=>Number.isFinite(Number(e.lat))&&Number.isFinite(Number(e.lon)));
    ["estatePinOverlay","forecastPinOverlay"].forEach(id=>{
      const overlay=$(id);if(!overlay)return;overlay.innerHTML="";
      estates.forEach(estate=>{
        const left=(Number(estate.lon)-97.3)/(105.8-97.3)*100;
        const top=(20.5-Number(estate.lat))/(20.5-5.6)*100;
        if(left<0||left>100||top<0||top>100)return;
        const dot=document.createElement("i");dot.className="report-estate-dot";dot.style.left=left+"%";dot.style.top=top+"%";dot.title=estate.name;overlay.appendChild(dot);
      });
    });
  }
  function renderExportData(data){
    latestData=data;
    const estates=(data.estate_watch||[]).slice(0,10);
    $("exportEstateRows").innerHTML=estates.length?estates.map((e,i)=>{
      const level=statusLevel(e.status,e.severity_score);
      return '<tr><td>'+(i+1)+'</td><td><b>'+e.name+'</b></td><td>'+fmt(e.alert_station_count,0)+' สถานี</td><td>'+fmt(e.nearest_alert_km)+' กม.</td><td>'+(e.max_rainfall_mm==null?"–":fmt(e.max_rainfall_mm)+" มม.")+'</td><td><span class="export-status '+level+'">'+(e.status||"เฝ้าระวัง")+'</span></td></tr>';
    }).join(""):'<tr><td colspan="6">ไม่พบนิคมอุตสาหกรรมเข้าเกณฑ์เฝ้าระวัง</td></tr>';

    const waters=(data.stations||[]).filter(s=>s.kind==="waterlevel"&&Number(s.distance_km)<=30&&Number(s.severity_score)>=2).slice(0,12);
    $("exportWaterRows").innerHTML=waters.length?waters.map(s=>{
      const level=statusLevel(s.status,s.severity_score);
      return '<tr><td><b>'+s.station+'</b><small style="display:block">'+s.nearest_estate+'</small></td><td>'+s.value_text+'</td><td><span class="export-status '+level+'">'+(s.status||"เฝ้าระวัง")+'</span></td><td>'+shortTime(s.observed_at)+'</td></tr>';
    }).join(""):'<tr><td colspan="4">ไม่พบสถานีระดับน้ำผิดปกติใกล้นิคมฯ</td></tr>';

    const locatedEstates=(data.estate_watch||[]).filter(e=>Number.isFinite(Number(e.lat))&&Number.isFinite(Number(e.lon)));
    const forecast=[];
    ["24h","48h"].forEach(period=>{
      (data.flash_flood?.[period]?.areas||[]).forEach(area=>{
        if(!Number.isFinite(Number(area.latitude))||!Number.isFinite(Number(area.longitude)))return;
        let nearest=null,km=Infinity;
        locatedEstates.forEach(estate=>{const d=distanceKm(Number(area.latitude),Number(area.longitude),Number(estate.lat),Number(estate.lon));if(d<km){km=d;nearest=estate}});
        if(nearest&&km<=30)forecast.push({period,area,nearest,km});
      });
    });
    $("exportForecastRows").innerHTML=forecast.length?forecast.slice(0,14).map(row=>{
      return '<tr><td><b>'+(row.period==="24h"?"24 ชั่วโมง":"48 ชั่วโมง")+'</b></td><td>'+cleanProvince(row.area.province)+'</td><td>'+(row.area.amphoe||"–")+'</td><td>'+(row.area.tambon||"–")+'</td><td>'+(row.area.sum_rainfall_mm==null?"–":fmt(row.area.sum_rainfall_mm)+" มม.")+'</td><td><b>'+row.nearest.name+'</b><small style="display:block">'+fmt(row.km)+" กม.</small></td></tr>';
    }).join(""):'<tr><td colspan="6">ไม่พบพื้นที่คาดการณ์ 24/48 ชั่วโมงภายในรัศมี 30 กิโลเมตรจากนิคมฯ</td></tr>';
    renderPins(data);
  }
  function syncEditableText(){
    const period=$("reportPeriodTitle")?.textContent?.trim()||"ข้อมูลตามช่วงเวลารายงาน";
    document.querySelectorAll(".shared-report-period").forEach(el=>el.textContent=period);
  }
  function preview(items){
    $("pngPreviewModal")?.remove();
    const modal=document.createElement("div");modal.id="pngPreviewModal";
    modal.innerHTML='<div class="png-dialog"><div class="png-head"><strong>สร้างภาพ PNG สำเร็จ</strong><button type="button" aria-label="ปิด">×</button></div><p>เลือกดาวน์โหลดรายงานแต่ละหน้า หรือกดค้างที่ภาพเพื่อบันทึกผ่าน LINE</p><div class="png-preview-list">'+items.map(item=>'<section><h3>'+item.label+'</h3><img src="'+item.url+'" alt="'+item.label+'"><a href="'+item.url+'" download="'+item.name+'">ดาวน์โหลด '+item.label+'</a></section>').join("")+'</div></div>';
    const style=document.createElement("style");style.textContent="#pngPreviewModal{position:fixed;inset:0;z-index:99999;background:rgba(20,31,48,.75);padding:20px;display:grid;place-items:center}.png-dialog{width:min(1100px,96vw);max-height:94vh;overflow:auto;background:#fff;border-radius:16px;padding:20px;font-family:Sarabun,sans-serif}.png-head{display:flex;justify-content:space-between;align-items:center;font-size:20px}.png-head button{border:0;background:#eee;border-radius:50%;width:38px;height:38px;font-size:24px}.png-dialog p{color:#68717d}.png-preview-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:15px}.png-preview-list section{border:1px solid #ccd3d9;padding:10px}.png-preview-list h3{margin:0 0 8px}.png-preview-list img{display:block;width:100%;height:auto;border:1px solid #ddd}.png-preview-list a{display:block;margin-top:9px;padding:10px;text-align:center;background:#004b79;color:#fff;text-decoration:none}";
    modal.appendChild(style);document.body.appendChild(modal);modal.querySelector(".png-head button").onclick=()=>{items.forEach(x=>URL.revokeObjectURL(x.url));modal.remove()};
  }
  async function captureSheet(sheet){
    if(typeof html2canvas!=="function")throw new Error("Export library unavailable");
    sheet.classList.add("report-exporting");
    const canvas=await html2canvas(sheet,{scale:2,backgroundColor:"#ffffff",useCORS:true,logging:false,width:794,height:1123,windowWidth:1200});
    sheet.classList.remove("report-exporting");
    return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("PNG blob unavailable")),"image/png",1));
  }
  async function exportPages(pageNumber){
    const button=pageNumber?document.querySelector('[data-export-page="'+pageNumber+'"]'):$("downloadPng");
    const old=button?.textContent;
    try{
      if(button){button.disabled=true;button.textContent="กำลังสร้างภาพ…"}
      syncEditableText();
      if(document.fonts?.ready)await document.fonts.ready;
      const sheets=pageNumber?[document.querySelector('[data-report-page="'+pageNumber+'"]')]:[...document.querySelectorAll("[data-report-page]")];
      const stamp=new Date().toISOString().slice(0,10),items=[];
      for(const sheet of sheets){
        const page=sheet.dataset.reportPage,blob=await captureSheet(sheet);
        items.push({url:URL.createObjectURL(blob),name:"IEAT-Flood-Report-"+stamp+"-page-"+page+".png",label:"รายงานหน้า "+page});
      }
      preview(items);
    }catch(error){
      console.error(error);alert("ไม่สามารถสร้างภาพ PNG ได้ กรุณาเปิดด้วย Chrome หรือ Safari แล้วลองอีกครั้ง");
    }finally{
      document.querySelectorAll(".report-exporting").forEach(el=>el.classList.remove("report-exporting"));
      if(button){button.disabled=false;button.textContent=old}
    }
  }
  function setupMapUpload(){
    $("reportMapUpload")?.addEventListener("change",event=>{
      const file=event.target.files?.[0];if(!file)return;
      const reader=new FileReader();reader.onload=()=>{
        ["infographicMap","forecastReportMap"].forEach(id=>{const img=$(id);if(img)img.src=reader.result});
      };reader.readAsDataURL(file);
    });
  }
  window.addEventListener("ieat:data-ready",event=>renderExportData(event.detail));
  window.addEventListener("DOMContentLoaded",()=>{
    $("downloadPng")?.addEventListener("click",()=>exportPages());
    document.querySelectorAll("[data-export-page]").forEach(button=>button.addEventListener("click",()=>exportPages(button.dataset.exportPage)));
    $("reportPeriodTitle")?.addEventListener("input",syncEditableText);
    setupMapUpload();
    if(window.IEAT_LIVE_DATA)renderExportData(window.IEAT_LIVE_DATA);
  });
  window.downloadPage=()=>exportPages();
})();