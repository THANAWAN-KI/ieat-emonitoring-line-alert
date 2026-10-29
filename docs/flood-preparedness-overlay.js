(()=>{
'use strict';
const style=document.createElement('style');
style.textContent=`
#ieat-preparedness{position:absolute;z-index:650;right:12px;top:82px;width:305px;max-width:calc(100vw - 24px);max-height:calc(100vh - 155px);overflow:auto;background:#fffffff2;border:1px solid #dce3eb;border-radius:16px;box-shadow:0 8px 28px #18334d25;color:#253b4d;font:13px/1.6 Sarabun,sans-serif;backdrop-filter:blur(10px)}
#ieat-preparedness[hidden]{display:none}
#ieat-preparedness summary{cursor:pointer;padding:13px 16px;color:#654399;font-weight:700}
#ieat-preparedness .ip-body{padding:0 16px 14px}
#ieat-preparedness h2{font-size:17px;line-height:1.4;margin:0 0 5px}
#ieat-preparedness p{margin:7px 0}
#ieat-preparedness .ip-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:12px 0}
#ieat-preparedness .ip-stat{background:#edf4f8;border-radius:10px;padding:9px}
#ieat-preparedness strong{display:block;font-size:20px;color:#255779;line-height:1.4}
#ieat-preparedness .ip-note{font-size:11px;color:#667685}
#ieat-preparedness button{cursor:pointer;border:0;border-radius:9px;padding:9px 12px;background:#70519f;color:white;font:inherit;width:100%;margin-top:8px}
#ieat-preparedness .ip-row{padding:7px 0;border-top:1px solid #e0e7ed}
@media(max-width:650px){#ieat-preparedness{top:auto;bottom:85px;max-height:45vh;width:275px}#ieat-preparedness summary{padding:9px 12px}}
`;document.head.appendChild(style);
const panel=document.createElement('details');panel.id='ieat-preparedness';panel.open=innerWidth>650;
document.body.appendChild(panel);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let mode={active:true,estate:'บางปะอิน'};
function render(){
 const plan=(window.IEAT_ESTATE_DIAGRAMS||[]).find(p=>p.match&&mode.estate.includes(p.match));
 panel.hidden=!mode.active||!plan;if(panel.hidden)return;
 const metric=(title,value)=>'<div class="ip-stat">'+esc(title)+'<strong>'+esc(value||'ไม่ระบุ')+'</strong></div>';
 panel.innerHTML='<summary>ปัจจุบัน · เราเตรียมรับมืออย่างไร</summary><div class="ip-body"><h2>'+esc(plan.name)+'</h2><p class="ip-note">ขีดความสามารถตามผัง · ไม่ใช่สถานะเดินเครื่องสด</p><div class="ip-grid">'+metric('กำลังสูบรวม',plan.capacity)+metric('รองรับฝนตามผัง',plan.rain)+'</div><div class="ip-row"><b>ระบบสูบระบายน้ำ</b><p>'+esc(plan.pumps)+'</p></div><div class="ip-row"><b>พื้นที่รับน้ำ</b><p>'+esc(plan.storage||'ไม่ระบุในผัง')+'</p></div><div class="ip-row"><b>แนวป้องกันและไฟสำรอง</b><p>'+esc(plan.protection||'ไม่ระบุในผัง')+'</p></div><button type="button" data-flood-plan="'+esc(plan.key)+'">ดูตำแหน่งสถานีในผัง ↗</button><p class="ip-note">ที่มา: '+esc(plan.source)+'<br>ตำแหน่งสถานีในผังยังไม่ใช่พิกัด GPS จึงแสดงข้อมูลบนแผนที่โดยไม่ปักตำแหน่งคาดเดา</p></div>';
}
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==parent)return;
 if(e.data?.type==='flood-preparedness-mode'){mode={active:!!e.data.active,estate:String(e.data.estate||'')};render()}
});
render();
if(parent!==window)parent.postMessage({type:'flood-preparedness-ready'},location.origin);
})();