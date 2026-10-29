(()=>{
'use strict';
/* Presentation anchors only. Manually aligned from bang-pa-in-20261007.jpg
 * against Esri World Imagery, using north-west/south-west estate corners and
 * the red-roof factory group as three approximate control points.
 * No surveyed accuracy; not suitable for flood modelling or field navigation. */
const stations=[
 {id:1,lon:100.5820875,lat:14.2121811,capacity:7200,side:'left',pixel:[275,537]},
 {id:2,lon:100.5805259,lat:14.1999754,capacity:7200,side:'left',pixel:[667,542]},
 {id:3,lon:100.5911019,lat:14.2046585,capacity:7200,side:'right',pixel:[444,210]},
 {id:4,lon:100.5835594,lat:14.1867297,capacity:10800,side:'right',pixel:[1058,391]}
];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number=v=>Number(v).toLocaleString('th-TH');
const style=document.createElement('style');
style.textContent=`
.prep-anchor{background:none!important;border:0!important;overflow:visible!important;z-index:640!important}
.prep-pin-wrap{position:relative;width:32px;height:38px;font:12px/1.4 Sarabun,sans-serif;color:#243744;overflow:visible}
.prep-pin{position:absolute;left:0;bottom:0;width:32px;height:38px;border:0;padding:0;background:none;cursor:pointer;filter:drop-shadow(0 2px 3px #16374b55)}
.prep-pin svg{width:32px;height:38px;display:block}.prep-pin b{position:absolute;top:5px;left:0;width:32px;color:white;font-size:15px;text-align:center}
.prep-tag{position:absolute;left:40px;bottom:7px;min-width:158px;padding:8px 10px;background:#fffffff5;border:0;border-left:3px solid #188c9f;border-radius:9px;box-shadow:0 3px 14px #213b5126;white-space:nowrap;pointer-events:none}
.prep-pin-wrap.left .prep-tag{left:auto;right:40px;border-left:0;border-right:3px solid #188c9f}
.prep-tag:before{content:'';position:absolute;left:-9px;bottom:9px;width:9px;border-top:1px solid #188c9f}
.prep-pin-wrap.left .prep-tag:before{left:auto;right:-9px}
.prep-tag b{display:block;color:#1d6679;font-size:13px}.prep-tag strong{display:block;font-size:15px;color:#223743;margin-top:2px}.prep-tag small{display:block;color:#677580;font-size:10px;margin-top:3px}
.prep-summary .prep-tag{border-color:#70519f;white-space:normal;width:190px}
.prep-summary .prep-tag b{color:#70519f}.prep-summary .prep-tag strong{font-size:14px}
.prep-line-label .prep-tag{border-color:#408a74;width:185px;white-space:normal}
.prep-line-label .prep-tag b{color:#357660}
#ieat-preparedness{position:absolute;z-index:850;left:50%;transform:translateX(-50%);bottom:30px;max-width:calc(100vw - 135px);display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:#fffffff2;border:0;border-radius:11px;box-shadow:0 3px 15px #233b4d20;padding:7px 11px;color:#384853;font:11px/1.5 Sarabun,sans-serif}
#ieat-preparedness[hidden]{display:none}#ieat-preparedness b{color:#70519f}#ieat-preparedness button{font:inherit;color:#70519f;border:0;background:#f0eaf7;padding:5px 8px;border-radius:6px;cursor:pointer}
.prep-compact .prep-tag{display:none}.prep-no-labels .prep-tag{display:none}
.prep-hidden{display:none!important}
@media(max-width:650px){.prep-tag{min-width:130px;padding:5px 7px}.prep-tag b{font-size:11px}.prep-tag strong{font-size:12px}.prep-tag small{max-width:135px;white-space:normal;font-size:9px}.prep-summary .prep-tag,.prep-line-label .prep-tag{width:145px}#ieat-preparedness{bottom:38px;left:10px;transform:none;max-width:calc(100vw - 65px)}}
`;document.head.appendChild(style);
const bar=document.createElement('div');bar.id='ieat-preparedness';bar.hidden=true;
bar.innerHTML='<b>ปัจจุบัน · รับมือน้ำท่วม</b><span>ตำแหน่ง / แนวเส้นประมาณจากผัง · ขีดความสามารถตามแผน</span><button type="button" id="prep-label-toggle" aria-pressed="true">ซ่อนป้าย</button><button type="button" data-flood-plan="bang-pa-in">ดูผังต้นฉบับ ↗</button>';
document.body.appendChild(bar);
let mode={active:true,estate:'บางปะอิน'},focusTimer=null,labels=true,context=null,markers=[],outline=null,outlinePromise=null,rasterOutline=null,active=false;
const isBangpain=()=>mode.active&&mode.estate.includes('บางปะอิน');
const plan=()=>window.IEAT_ESTATE_DIAGRAMS?.find(p=>p.key==='bang-pa-in');
function pin(color,text){return '<button type="button" class="prep-pin" aria-label="'+esc(text)+'"><svg viewBox="0 0 32 38" aria-hidden="true"><path d="M16 37C12 31 2 23 2 15a14 14 0 1 1 28 0c0 8-10 16-14 22Z" fill="'+color+'" stroke="white" stroke-width="2"/></svg></button>'}
function mountMarker(item,html,kind=''){
 const el=document.createElement('div');el.className='prep-pin-wrap '+(item.side||'right')+' '+kind;el.innerHTML=html;
 let marker;
 if(context.vector){const wrapper=document.createElement('div');wrapper.className='prep-anchor';wrapper.appendChild(el);marker=new maplibregl.Marker({element:wrapper,anchor:'bottom',offset:[0,0]}).setLngLat([item.lon,item.lat]).addTo(context.vector)}
 else marker=L.marker([item.lat,item.lon],{icon:L.divIcon({className:'prep-anchor',html:el,iconSize:[32,38],iconAnchor:[16,38]}),keyboard:false,zIndexOffset:850}).addTo(context.raster);
 markers.push({marker,el,item});return el;
}
function popup(item){
 const p=plan(),content='<div class="popup"><h3>สถานีสูบน้ำ '+item.id+'</h3><p><b>กำลังตามผัง '+number(item.capacity)+' ลบ.ม./ชม.</b></p><p>ไฟสำรองตามผัง 800 kVA ทุกสถานี</p><p>ทั้งนิคมฯ: '+esc(p?.pumps||'4 สถานี · 18 เครื่อง')+'</p><small>ตำแหน่งประมาณจากการเทียบภาพผังกับภาพดาวเทียม ไม่ใช่พิกัดสำรวจ<br>ยังไม่มีสถานะเดินเครื่องสด</small><p><button data-flood-plan="bang-pa-in">ดูผังต้นฉบับ</button></p></div>';
 if(context.vector)new maplibregl.Popup({maxWidth:'300px',offset:35}).setLngLat([item.lon,item.lat]).setHTML(content).addTo(context.vector);
 else L.popup({maxWidth:300,offset:[0,-30]}).setLatLng([item.lat,item.lon]).setContent(content).openOn(context.raster);
}
function attach(){
 const next=window.IEATPreparednessMap?.();if(!next?.ready||(!next.vector&&!next.raster))return;
 if(context?.vector===next.vector&&context?.raster===next.raster){refresh();return}
 markers.forEach(x=>x.marker.remove());markers=[];if(rasterOutline)rasterOutline.remove();rasterOutline=null;
 context=next;
 for(const s of stations){
 const el=mountMarker(s,pin('#188c9f','สถานีสูบน้ำ '+s.id+' · ตำแหน่งประมาณ')+'<div class="prep-tag"><b>สถานีสูบน้ำ '+s.id+'</b><strong>'+number(s.capacity)+' ลบ.ม./ชม.</strong><small>กำลังตามผัง · ตำแหน่งประมาณ</small></div>');
 el.querySelector('button').insertAdjacentHTML('beforeend','<b>'+s.id+'</b>');
 el.querySelector('button').onclick=e=>{e.stopPropagation();popup(s)};
 }
 const p=plan();
 const system=mountMarker({lon:100.5869,lat:14.1975},pin('#70519f','ข้อมูลรับน้ำรวมทั้งนิคมฯ')+'<div class="prep-tag"><b>พื้นที่รับน้ำรวมทั้งนิคมฯ</b><strong>'+esc(p?.storage||'200,000 ลบ.ม.')+'</strong><small>ข้อมูลรวมทั้งระบบ · หมุดนี้ไม่ใช่ตำแหน่งบ่อ</small></div>','prep-summary');
 system.querySelector('button').insertAdjacentHTML('beforeend','<b>≈</b>');
 system.querySelector('button').setAttribute('data-flood-plan','bang-pa-in');
 const protection=mountMarker({lon:100.5873,lat:14.2111},pin('#408a74','ข้อมูลแนวป้องกันตามผัง')+'<div class="prep-tag"><b>แนวป้องกันตามผัง</b><strong>+6 MSL · ยาว 10 กม.</strong><small>เส้นประใช้ขอบเขตนิคมฯ เป็นแนวประมาณ ไม่ใช่แนวเขื่อนสำรวจ</small></div>','prep-line-label');
 protection.querySelector('button').insertAdjacentHTML('beforeend','<b>≈</b>');
 protection.querySelector('button').setAttribute('data-flood-plan','bang-pa-in');
 const map=context.vector||context.raster;map.on('zoomend',refresh);map.on('moveend',refresh);
 if(!outlinePromise)outlinePromise=fetch('./data/ieat-building-footprints/bangpain-outline.geojson?v=prep-approx1').then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(d=>{outline=d;drawOutline();refresh()}).catch(()=>{outlinePromise=null});
 drawOutline();refresh();
}
function drawOutline(){
 if(!context||!outline)return;
 if(context.vector){
 const m=context.vector;if(!m.getSource('prep-approx-outline')){m.addSource('prep-approx-outline',{type:'geojson',data:outline});m.addLayer({id:'prep-approx-outline',type:'line',source:'prep-approx-outline',paint:{'line-color':'#408a74','line-width':3,'line-opacity':.8,'line-dasharray':[2,2]}})}
 }else if(!rasterOutline)rasterOutline=L.geoJSON(outline,{interactive:false,style:{color:'#408a74',weight:3,opacity:.8,fill:false,dashArray:'7 6'}}).addTo(context.raster);
}
function refresh(){
 if(!context)return;const zoom=(context.vector||context.raster).getZoom();
 active=isBangpain()&&zoom>=11;
 bar.hidden=!active;
 for(const {el,marker} of markers){
 el.classList.toggle('prep-hidden',!active);el.classList.toggle('prep-compact',zoom<13);el.classList.toggle('prep-no-labels',!labels);
 /* Leaflet's empty icon wrapper must not retain keyboard or pointer targets. */
 const wrapper=context.vector?marker.getElement():marker.getElement?.();if(wrapper)wrapper.style.display=active?'':'none';
 }
 if(context.vector?.getLayer('prep-approx-outline'))context.vector.setLayoutProperty('prep-approx-outline','visibility',active?'visible':'none');
 if(rasterOutline){if(active&&!context.raster.hasLayer(rasterOutline))rasterOutline.addTo(context.raster);else if(!active&&context.raster.hasLayer(rasterOutline))rasterOutline.remove()}
}
bar.querySelector('#prep-label-toggle').onclick=e=>{labels=!labels;e.target.textContent=labels?'ซ่อนป้าย':'แสดงป้าย';e.target.setAttribute('aria-pressed',String(labels));refresh()};
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==parent)return;
 if(e.data?.type==='flood-preparedness-mode'){
 const was=isBangpain();mode={active:!!e.data.active,estate:String(e.data.estate||'')};attach();refresh();
 if(!was&&isBangpain()){clearTimeout(focusTimer);focusTimer=setTimeout(()=>{
  if(!isBangpain()||!context)return;
  window.IEATPreparednessMap?.().clearSelectionPopup?.();
  if(context.vector)context.vector.fitBounds([[100.57824,14.18448],[100.59333,14.21330]],{padding:{top:90,bottom:100,left:110,right:110},maxZoom:15,pitch:55,bearing:-15});
  else context.raster.fitBounds([[14.18448,100.57824],[14.21330,100.59333]],{padding:[85,85],maxZoom:15});
 },300)}
}
});
document.addEventListener('ieat-map-ready',attach);attach();
if(parent!==window)parent.postMessage({type:'flood-preparedness-ready'},location.origin);
})();