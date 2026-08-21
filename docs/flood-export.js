(function(){
  "use strict";
  function preview(url,name){
    document.getElementById("pngPreviewModal")?.remove();
    const modal=document.createElement("div");modal.id="pngPreviewModal";
    modal.innerHTML=`<div class="png-dialog"><div class="png-head"><strong>สร้างภาพ PNG สำเร็จ</strong><button type="button" aria-label="ปิด">×</button></div><p>หากเปิดผ่าน LINE แล้วไฟล์ไม่ดาวน์โหลด ให้กดค้างที่ภาพและเลือก “บันทึกรูปภาพ”</p><img src="${url}" alt="อินโฟกราฟิกรายงานสถานการณ์น้ำ"><a href="${url}" download="${name}">ดาวน์โหลดไฟล์ PNG</a></div>`;
    const style=document.createElement("style");style.textContent="#pngPreviewModal{position:fixed;inset:0;z-index:99999;background:rgba(20,31,48,.75);padding:20px;display:grid;place-items:center}.png-dialog{width:min(1100px,96vw);max-height:94vh;overflow:auto;background:#fff;border-radius:20px;padding:20px;font-family:Kanit,'IBM Plex Sans Thai',sans-serif}.png-head{display:flex;justify-content:space-between;align-items:center;font-size:21px}.png-head button{border:0;background:#f0f3f7;border-radius:50%;width:40px;height:40px;font-size:25px}.png-dialog p{font-size:16px;color:#68717d}.png-dialog img{display:block;width:100%;height:auto;border:1px solid #edf1f6}.png-dialog a{display:block;margin-top:14px;padding:13px;text-align:center;border-radius:12px;background:#3478f6;color:#fff;text-decoration:none;font-size:18px}";
    modal.appendChild(style);document.body.appendChild(modal);modal.querySelector("button").onclick=()=>modal.remove();
  }
  async function exportPng(){
    const button=document.getElementById("downloadPng"),old=button?.textContent;
    try{
      if(button){button.disabled=true;button.textContent="กำลังสร้างภาพ…"}
      if(typeof window.sync==="function")window.sync();
      if(typeof window.prepareReportExport==="function")await window.prepareReportExport();
      else if(typeof window.updateMapShot==="function")await window.updateMapShot();
      if(document.fonts?.ready)await document.fonts.ready;
      const report=document.getElementById("reportCanvas");
      if(!report||typeof html2canvas!=="function")throw new Error("Export library unavailable");
      report.classList.add("report-exporting");
      const canvas=await html2canvas(report,{scale:2,backgroundColor:"#ffffff",useCORS:true,logging:false,windowWidth:Math.max(document.documentElement.clientWidth,report.scrollWidth)});
      report.classList.remove("report-exporting");
      const period=window.reportPeriod==="48h"?"48h":"24h";
      const name=`ieat-flood-executive-report-${period}-${new Date().toISOString().slice(0,10)}.png`;
      canvas.toBlob(blob=>{if(!blob){alert("ไม่สามารถสร้างไฟล์ PNG ได้");return}const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.style.display="none";document.body.appendChild(a);a.click();a.remove();preview(url,name)},"image/png",1);
    }catch(error){console.error(error);alert("ไม่สามารถสร้างภาพ PNG ได้ กรุณาเปิดด้วย Chrome หรือ Safari แล้วลองอีกครั้ง")}
    finally{document.getElementById("reportCanvas")?.classList.remove("report-exporting");if(button){button.disabled=false;button.textContent=old}}
  }
  window.addEventListener("DOMContentLoaded",()=>document.getElementById("downloadPng")?.addEventListener("click",exportPng));
  window.downloadPage=exportPng;
})();
