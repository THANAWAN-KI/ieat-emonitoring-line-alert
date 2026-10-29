(()=>{
'use strict';
const $=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const bridge=()=>window.IEATPreparednessMap?.();
const css=document.createElement('style');css.textContent=`
#mapDetails{position:absolute;right:0;top:0;bottom:0;width:300px;z-index:1100;background:#fff;color:#293d4d;display:flex;flex-direction:column;font:13px/1.6 Sarabun,sans-serif;box-shadow:-3px 0 18px #263a4b18}#mapDetails[hidden]{display:none}
#mapDetails header{display:flex;gap:8px;align-items:center;padding:13px 15px;border-bottom:1px solid #edf0f3}#mapDetails h2{font-size:16px;margin:0;flex:1}#mapDetailsClose{border:0;background:#f0f3f6;border-radius:50%;width:29px;height:29px;font:20px sans-serif;cursor:pointer;color:#5a6772}
#mapDetails nav{display:flex;gap:4px;padding:8px 10px;flex-wrap:wrap;border-bottom:1px solid #edf0f3}#mapDetails nav button{border:0;background:#f3f5f8;color:#526373;border-radius:7px;padding:5px 7px;font:11px Sarabun,sans-serif;cursor:pointer}#mapDetails nav button[aria-pressed=true]{background:#ebe6f3;color:#6f5097}
#mapDetailsBody{padding:13px;overflow:auto;flex:1;min-height:0}#mapDetailsBody h3{font-size:16px;margin:0 0 10px;color:#28495d}
#mapDetailsBody table{border-collapse:collapse;width:100%;font-size:12px}#mapDetailsBody th,#mapDetailsBody td{padding:9px 8px;text-align:left;vertical-align:top;border:1px solid #dbe5ec;overflow-wrap:anywhere}#mapDetailsBody th{width:39%;background:#f0f6fa;font-weight:600}
.map-support-point{display:block;width:100%;border:1px solid #d6e3ec;background:white;border-radius:8px;padding:9px 10px;margin:0 0 7px;text-align:left;font:13px Sarabun,sans-serif;color:#2f536d;cursor:pointer}.map-support-point[aria-pressed=true]{background:#eaf3f6;border-color:#6aa6b5}.map-support-point small{display:block;color:#71808a;font-size:10px;margin-top:4px}
.map-details-note{font-size:11px;color:#71808a;line-height:1.65}.map-selected-station{padding:10px;background:#f2f7fa;border-radius:9px;margin-bottom:12px}
#mapDetails .popup{min-width:0!important;width:100%!important;max-width:100%!important}#mapDetails .station-popup{font-size:13px}#mapDetails .flood-card{box-shadow:none}#mapDetails .fc-detail-body{padding:10px 0;max-height:none}#mapDetails .fc-preview{min-height:150px}#mapDetails .fc-camera img{height:155px}#mapDetails .station-popup-head{display:block}#mapDetails .canal-popup{min-width:0!important}#mapDetails details summary{cursor:pointer}
#supportMapButton{position:absolute;right:175px;top:12px;z-index:1050;background:white;color:#70519f;border:0;border-radius:10px;box-shadow:0 3px 12px #23374b18;padding:10px 12px;font:12px Sarabun,sans-serif;cursor:pointer}
body.map-details-open #mapStage{right:300px;width:auto!important}body.map-details-open .controls{right:358px}body.map-details-open #supportMapButton{display:none}
@media(max-width:650px){#mapDetails{width:min(290px,88vw)}body.map-details-open #mapStage{right:0;width:100%!important}body.map-details-open .controls{right:58px}body.map-details-open #supportMapButton{display:none}#supportMapButton{right:170px;max-width:150px;padding:9px;font-size:10px}}
`;document.head.appendChild(css);
const aside=document.createElement('aside');aside.id='mapDetails';aside.hidden=true;aside.setAttribute('aria-label','รายละเอียดข้อมูลสนับสนุน');
aside.innerHTML='<header><h2>ข้อมูลสนับสนุน</h2><button id="mapDetailsClose" aria-label="ปิดรายละเอียด">×</button></header><nav aria-label="ประเภทข้อมูลสนับสนุน">'+[['prep','เตรียมพร้อม'],['water','ระดับน้ำ'],['canal','คลอง กทม.'],['dam','เขื่อน'],['camera','CCTV']].map(([k,n])=>'<button data-detail-tab="'+k+'" aria-pressed="false">'+n+'</button>').join('')+'</nav><div id="mapDetailsBody"></div>';
document.body.appendChild(aside);
const button=document.createElement('button');button.id='supportMapButton';button.type='button';button.textContent='ข้อมูลสนับสนุนการเตรียมความพร้อม';button.onclick=()=>prep();document.body.appendChild(button);
let estate='บางปะอิน',tab='prep',selected=null;
function open(which){tab=which;aside.hidden=false;document.body.classList.add('map-details-open');aside.querySelectorAll('[data-detail-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.detailTab===which)));const map=bridge()?.vector||bridge()?.raster;requestAnimationFrame(()=>{map?.resize?.();map?.invalidateSize?.()})}
function close(){aside.hidden=true;document.body.classList.remove('map-details-open');const map=bridge()?.vector||bridge()?.raster;requestAnimationFrame(()=>{map?.resize?.();map?.invalidateSize?.()})}
$('mapDetailsClose').onclick=close;
function focus(lon,lat){if(!Number.isFinite(Number(lon))||!Number.isFinite(Number(lat)))return;requestAnimationFrame(()=>bridge()?.focusPoint?.(Number(lon),Number(lat)))}
function plan(){return (window.IEAT_ESTATE_DIAGRAMS||[]).find(p=>p.match&&estate.includes(p.match))}
function prep(id=null,move=false){
 open('prep');selected=id;const p=plan();if(!p){$('mapDetailsBody').innerHTML='<h3>'+esc(estate||'เลือกนิคมฯ')+'</h3><p>ยังไม่มีผังการเตรียมรับมือของพื้นที่นี้ในระบบ</p>';return}
 const pumps=window.IEAT_PREPAREDNESS?.stations||[];
 const selectedPump=p.key==='bang-pa-in'?pumps.find(s=>String(s.id)===String(id)):null;
 $('mapDetailsBody').innerHTML='<h3>'+esc(p.name)+'</h3><div>'+ (p.key==='bang-pa-in'?pumps.map(s=>'<button class="map-support-point" data-support-station="'+s.id+'" aria-pressed="'+(String(id)===String(s.id))+'">สถานีสูบน้ำ '+s.id+'<small>คลิกเพื่อไปยังตำแหน่งประมาณบนแผนที่</small></button>').join(''):'')+'</div>'+(selectedPump?'<div class="map-selected-station"><b>สถานีสูบน้ำ '+selectedPump.id+'</b><br>กำลังสูบตามผัง '+selectedPump.capacity.toLocaleString('th-TH')+' ลบ.ม./ชม.<br><small>ไฟสำรองตามผัง 800 kVA · ตำแหน่งประมาณ</small></div>':'')+'<table><tbody>'+(p.rows||[]).map(([k,v])=>'<tr><th scope="row">'+esc(k)+'</th><td>'+esc(v)+'</td></tr>').join('')+'</tbody></table><p class="map-details-note">ที่มา: '+esc(p.source)+'<br>ขีดความสามารถตามผัง ไม่ใช่สถานะเดินเครื่องสด · ตำแหน่งและแนวเส้นบนแผนที่เป็นค่าประมาณ ไม่ใช้แทนพิกัดสำรวจ</p>';
 if(move&&selectedPump)focus(selectedPump.lon,selectedPump.lat);
}
function show(r,k){
 if(k==='estate'){estate=String(r.name||estate);prep();return}
 open(k);$('mapDetailsBody').innerHTML=bridge()?.pointContent?.(r,k)||'<h3>'+esc(r.name)+'</h3>';
 bridge()?.mountHistory?.($('mapDetailsBody'));
 if(k==='camera')bridge()?.loadCamera?.(r);
}
function list(k){
 open(k);const rows=(bridge()?.points?.()||[]).filter(r=>r.kind===k);
 $('mapDetailsBody').innerHTML='<h3>'+({water:'สถานีระดับน้ำ',canal:'คลอง กทม.',dam:'เขื่อนและอ่างเก็บน้ำ',camera:'CCTV ริมน้ำ'}[k]||'ข้อมูล')+'</h3>'+(rows.length?rows.map((r,i)=>'<button class="map-support-point" data-support-row="'+i+'">'+esc([r.code,r.name].filter(Boolean).join(' · '))+'<small>'+esc(r.province||'')+' · คลิกเพื่อดูข้อมูลและตำแหน่ง</small></button>').join(''):'<p>ไม่พบข้อมูลประเภทนี้ในขอบเขตที่เลือก</p>');
 $('mapDetailsBody').querySelectorAll('[data-support-row]').forEach(b=>b.onclick=()=>{const r=rows[Number(b.dataset.supportRow)];show(r,k);focus(r.lng??r.lon,r.lat)});
}
aside.addEventListener('click',e=>{const st=e.target.closest('[data-support-station]');if(st){prep(st.dataset.supportStation,true);return}const b=e.target.closest('[data-detail-tab]');if(b){if(b.dataset.detailTab==='prep')prep();else list(b.dataset.detailTab)}});
window.IEAT_MAP_DETAILS={show,prep,close,setEstate(name){estate=String(name||'');if(!aside.hidden&&tab==='prep')prep()},showHTML(html){open('point');$('mapDetailsBody').innerHTML=typeof html==='string'?html:'';bridge()?.mountHistory?.($('mapDetailsBody'))}};
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent)return;if(e.data?.type==='flood-support-open'){estate=String(e.data.estate||estate);prep()}});
})();
