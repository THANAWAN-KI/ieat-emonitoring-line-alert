(function(){
"use strict";
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm=s=>String(s||"").toLowerCase().replace(/^(นิคมอุตสาหกรรม|นิคมฯ)/,"").replace(/[\s().-]/g,"");
const fmt=(n,d=1)=>Number.isFinite(Number(n))?Number(n).toLocaleString("th-TH",{maximumFractionDigits:d}):"ไม่มีข้อมูล";
const km=(a,b,c,d)=>{const r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(h)))};
const isHub=location.pathname.endsWith("/hub.html");
const root=document.createElement("section");root.id="estateSearchDetail";root.setAttribute("aria-label","ค้นหาข้อมูลนิคมอุตสาหกรรม");
root.innerHTML='<div class="estate-detail-head"><div><h2>ค้นหาข้อมูลนิคมอุตสาหกรรม</h2><p>ค้นหาจากรายชื่อนิคมอุตสาหกรรมทั้งหมด และดูข้อมูลสถานการณ์น้ำที่มีของพื้นที่นั้น</p></div><div class="estate-detail-controls"><input id="estateDetailQuery" type="search" list="estateDetailNames" placeholder="พิมพ์ชื่อนิคมอุตสาหกรรม" aria-label="ค้นหาชื่อนิคมอุตสาหกรรม"><datalist id="estateDetailNames"></datalist><button id="estateDetailFind" type="button">ค้นหา</button></div></div><div id="estateDetailResult" aria-live="polite">กำลังโหลดข้อมูลนิคมฯ และสถานีตรวจวัด…</div>';
const style=document.createElement("style");style.textContent='#estateSearchDetail{background:#fff;border:1px solid #d8e2e8;border-radius:14px;padding:20px;margin:16px 0 22px;color:#172536;font-family:inherit;box-shadow:0 3px 14px #1b385210}#estateSearchDetail *{box-sizing:border-box}.estate-detail-head{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}.estate-detail-head h2{margin:0;font-size:21px}.estate-detail-head p{margin:4px 0 0;color:#526477}.estate-detail-controls{display:flex;gap:8px;flex-wrap:wrap}.estate-detail-controls input{width:min(360px,80vw);padding:10px 12px;border:1px solid #b9cbd7;border-radius:8px;background:#fff;color:#172536}.estate-detail-controls button,.estate-detail-map{padding:10px 16px;border:0;border-radius:8px;background:#0091cd;color:#fff;cursor:pointer;text-decoration:none;display:inline-block}.estate-detail-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px;margin:15px 0}.estate-detail-card{padding:12px;border:1px solid #dce7ee;border-radius:10px;background:#f8fbfd}.estate-detail-card small{display:block;color:#536778}.estate-detail-card strong{display:block;font-size:19px;margin-top:5px}.estate-detail-list{margin:10px 0;padding-left:22px}.estate-detail-list li{margin:6px 0}.estate-detail-note{color:#526477;font-size:13px;line-height:1.5}.estate-detail-empty{padding:16px 0;color:#526477}@media(max-width:650px){.estate-detail-controls,.estate-detail-controls input,.estate-detail-controls button{width:100%}}';
document.head.appendChild(style);
const parent=isHub?$("captureArea"):document.querySelector("main.container");
if(!parent)return;
const anchor=isHub?parent.querySelector(".tabs"):parent.firstElementChild;
parent.insertBefore(root,anchor);
let data=null,names=[];
function render(){
 const raw=$("estateDetailQuery").value.trim(),key=norm(raw),out=$("estateDetailResult");
 if(!raw){out.innerHTML='<p class="estate-detail-empty">เลือกชื่อนิคมฯ จากรายการ หรือพิมพ์ชื่อเพื่อค้นหา</p>';return}
 const exact=names.find(n=>norm(n)===key);const found=exact?[exact]:names.filter(n=>norm(n).includes(key));
 if(found.length!==1){out.innerHTML='<p class="estate-detail-empty">'+(found.length?"พบ "+found.length+" แห่ง กรุณาเลือกชื่อจากรายการที่แสดง":"ไม่พบชื่อนิคมอุตสาหกรรม กรุณาเลือกจากรายชื่อที่แนะนำ")+'</p>'+(found.length?'<ul class="estate-detail-list">'+found.slice(0,30).map(n=>'<li><button type="button" class="estate-detail-choice" data-name="'+esc(n)+'">'+esc(n)+'</button></li>').join("")+'</ul>':"");return}
 const name=found[0],location=(data.estates||[]).find(e=>norm(e.name)===norm(name)),estate=(data.estate_watch||[]).find(e=>norm(e.name)===norm(name)),stations=(data.stations||[]).filter(s=>norm(s.nearest_estate)===norm(name));
 const point=location||estate;const nearby=point&&Number.isFinite(Number(point.lat))&&Number.isFinite(Number(point.lon))?stations.map(s=>({...s,_km:km(Number(point.lat),Number(point.lon),Number(s.lat),Number(s.lon))})).sort((a,b)=>a._km-b._km):stations;
 const card=(label,value)=>'<div class="estate-detail-card"><small>'+label+'</small><strong>'+esc(value)+'</strong></div>';
 let html='<h3>'+esc(name)+'</h3><div class="estate-detail-cards">'+card("สถานะเฝ้าระวัง",estate?.status||"ไม่มีรายการเข้าเกณฑ์ในข้อมูลล่าสุด")+card("สถานีที่เกี่ยวข้อง",nearby.length.toLocaleString("th-TH")+" แห่ง")+card("จุดแจ้งเตือนใกล้ที่สุด",estate?.nearest_alert_km!=null?fmt(estate.nearest_alert_km)+" กม.":"ไม่มีข้อมูล")+card("คะแนนความรุนแรง",estate?.severity_score!=null?fmt(estate.severity_score,0):"ไม่มีข้อมูล")+'</div>';
 if(point){html+='<p>พื้นที่รับผิดชอบ: '+esc(location?.operations||"ไม่มีข้อมูล")+' · พิกัด: '+fmt(point.lat,5)+', '+fmt(point.lon,5)+'</p>'}
 html+='<h4>สถานีตรวจวัดที่เชื่อมโยงกับนิคมฯ นี้</h4>';
 html+=nearby.length?'<ul class="estate-detail-list">'+nearby.map(s=>'<li><b>'+esc(s.station||"ไม่ระบุชื่อสถานี")+'</b> · '+esc(s.kind==="rainfall"?"ฝน":"ระดับน้ำ")+' · '+esc(s.value_text||s.status||"ไม่มีข้อมูล")+' · '+(s._km!=null?fmt(s._km)+" กม.":"ระยะห่างไม่มีข้อมูล")+' · '+esc(s.observed_at||"ไม่ระบุเวลา")+'</li>').join("")+'</ul>':'<p class="estate-detail-note">ไม่มีรายละเอียดสถานีที่เชื่อมโยงกับนิคมฯ นี้ในชุดข้อมูลล่าสุด</p>';
 if(point&&Number.isFinite(Number(point.lat))&&Number.isFinite(Number(point.lon)))html+='<a class="estate-detail-map" target="_blank" rel="noopener" href="https://ieat.maps.arcgis.com/apps/mapviewer/index.html?webmap=3d24287ac6ea49cd823625ddad496e01&center='+encodeURIComponent(point.lon+","+point.lat)+'&scale=75000">ดูตำแหน่งบนแผนที่ ↗</a>';
 html+='<p class="estate-detail-note">อัปเดตข้อมูล '+esc(data.generated_at?new Date(data.generated_at).toLocaleString("th-TH"):"ไม่ระบุเวลา")+' · แสดงข้อมูลที่มีในชุด ThaiWater ซึ่งเป็นการคัดกรองเพื่อเฝ้าระวัง ผลกระทบจริงต้องยืนยันกับพื้นที่</p>';
 if(isHub)html+='<p><a href="./flood-report.html?estate='+encodeURIComponent(name)+'">เปิดรายงานสถานการณ์น้ำของนิคมฯ นี้ ↗</a></p>';
 out.innerHTML=html;
}
$("estateDetailFind").onclick=render;
$("estateDetailQuery").addEventListener("change",render);
$("estateDetailQuery").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();render()}});
$("estateDetailResult").addEventListener("click",e=>{let b=e.target.closest(".estate-detail-choice");if(b){$("estateDetailQuery").value=b.dataset.name;render()}});
function apply(d){if(!d?.summary)return;data=d;names=[...new Set((d.estates||[]).map(e=>e.name).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"th"));$("estateDetailNames").innerHTML=names.map(n=>'<option value="'+esc(n)+'"></option>').join("");const selected=new URLSearchParams(location.search).get("estate");if(selected){$("estateDetailQuery").value=selected;render()}else render()}
window.addEventListener("ieat:data-ready",e=>apply(e.detail));
if(window.IEAT_LIVE_DATA)apply(window.IEAT_LIVE_DATA);
else fetch("./data/thaiwater_latest.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(apply).catch(()=>{$("estateDetailResult").textContent="ไม่สามารถโหลดข้อมูลนิคมฯ ได้ กรุณาลองใหม่ภายหลัง"});
})();