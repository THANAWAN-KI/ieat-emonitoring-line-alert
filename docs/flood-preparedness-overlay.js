(()=>{
'use strict';
const stations=[
 {id:1,lon:100.5820875,lat:14.2121811,capacity:7200,side:'left'},
 {id:2,lon:100.5805259,lat:14.1999754,capacity:7200,side:'left'},
 {id:3,lon:100.5911019,lat:14.2046585,capacity:7200,side:'right'},
 {id:4,lon:100.5835594,lat:14.1867297,capacity:10800,side:'right'}
];
const icons={
 pump:'<path d="M5 16h14v4H5zM8 16V9h7v7M9 9V5h5v4M15 11h5v5M20 16v3M5 12H2v5h3M10 12h3"/>',
 storage:'<path d="M3 8v12h18V8M3 13q3-3 6 0t6 0t6 0M3 17q3-3 6 0t6 0t6 0M12 2s-3 3-3 5a3 3 0 0 0 6 0c0-2-3-5-3-5Z"/>',
 protection:'<path d="M4 20 8 7h8l4 13M9 7V4h6v3M2 20h20M10 11h4M9 15h6"/>'
};
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const style=document.createElement('style');style.textContent=`
.prep-anchor{background:none!important;border:0!important;overflow:visible!important;z-index:640!important}
.prep-feature{position:relative;width:34px;height:44px;overflow:visible;font:11px/1.4 Sarabun,sans-serif;color:#36525f}
.prep-feature button{position:absolute;left:0;top:0;width:34px;height:40px;border:0;background:none;padding:0;cursor:pointer;filter:drop-shadow(0 2px 3px #233c4b44)}
.prep-feature button svg{width:34px;height:40px;display:block}
.prep-feature .prep-name{position:absolute;left:40px;top:5px;white-space:nowrap;padding:4px 7px;background:#fffffff0;border-radius:6px;color:#36525f;box-shadow:0 1px 5px #21384c18;pointer-events:none;font-weight:600}
.prep-feature.left .prep-name{left:auto;right:40px}.prep-feature.prep-hidden{display:none}
.prep-feature button:focus-visible{outline:3px solid #9072b8;outline-offset:2px}
`;document.head.appendChild(style);
let mode={active:true,estate:'บางปะอิน'},context=null,markers=[],outline=null,rasterOutline=null,outlinePromise=null,parentSeen=false,needsFocus=true,timer=null;
const active=()=>mode.active&&mode.estate.includes('บางปะอิน');
function svg(kind,color){return '<svg viewBox="0 0 36 44" aria-hidden="true"><path d="M18 43C14 36 2 28 2 18a16 16 0 1 1 32 0c0 10-12 18-16 25Z" fill="'+color+'" stroke="white" stroke-width="2"/><circle cx="18" cy="18" r="12" fill="white"/><g transform="translate(8 8) scale(.84)" fill="none" stroke="'+color+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+window.IEAT_ICONS.paths[kind]+'</g></svg>'}
function mount(item,kind,name,color,id){
 const el=document.createElement('div');el.className='prep-feature '+(item.side||'right');el.innerHTML='<button type="button" aria-label="'+esc(name)+'">'+svg(kind,color)+'</button><span class="prep-name">'+esc(name)+'</span>';
 let marker;if(context.vector){const wrap=document.createElement('div');wrap.className='prep-anchor';wrap.appendChild(el);marker=new maplibregl.Marker({element:wrap,anchor:'bottom'}).setLngLat([item.lon,item.lat]).addTo(context.vector)}
 else marker=L.marker([item.lat,item.lon],{icon:L.divIcon({className:'prep-anchor',html:el,iconSize:[34,44],iconAnchor:[17,44]}),keyboard:false,zIndexOffset:850}).addTo(context.raster);
 el.querySelector('button').onclick=e=>{e.stopPropagation();window.IEAT_MAP_DETAILS?.prep(id,false)};
 markers.push({el,marker});
}
function focusStation(id){const s=stations.find(s=>String(s.id)===String(id));if(s)window.IEATPreparednessMap?.().focusPoint?.(s.lon,s.lat)}
window.IEAT_PREPAREDNESS={stations,focus:focusStation};
function focusEstate(){
 if(!context||!needsFocus||!active())return;clearTimeout(timer);timer=setTimeout(()=>{
 if(!active()||!context)return;needsFocus=false;window.IEATPreparednessMap?.().clearSelectionPopup?.();
 if(context.vector)context.vector.fitBounds([[100.57824,14.18448],[100.59333,14.21330]],{padding:{top:90,bottom:65,left:60,right:60},maxZoom:15,pitch:55,bearing:-15});
 else context.raster.fitBounds([[14.18448,100.57824],[14.21330,100.59333]],{padding:[60,60],maxZoom:15});
 },300);
}
function attach(){
 const next=window.IEATPreparednessMap?.();if(!next?.ready||(!next.vector&&!next.raster))return;
 if(context?.vector===next.vector&&context?.raster===next.raster){refresh();focusEstate();return}
 markers.forEach(x=>x.marker.remove());markers=[];rasterOutline?.remove();rasterOutline=null;context=next;
 stations.forEach(s=>mount(s,'pump','สถานีสูบน้ำ '+s.id,'#397d8f',s.id));
 mount({lon:100.5869,lat:14.1975},'storage','ระบบรับน้ำรวม','#736297',null);
 mount({lon:100.5873,lat:14.2111},'protection','แนวป้องกัน','#4e816e',null);
 const map=context.vector||context.raster;map.on('zoomend',refresh);map.on('moveend',refresh);
 if(!outlinePromise)outlinePromise=fetch('./data/ieat-building-footprints/bangpain-outline.geojson?v=prep-approx1').then(r=>{if(!r.ok)throw Error(r.status);return r.json()}).then(d=>{outline=d;drawOutline();refresh()}).catch(()=>{outlinePromise=null});
 drawOutline();refresh();focusEstate();
}
function drawOutline(){
 if(!context||!outline)return;
 if(context.vector){const m=context.vector;if(!m.getSource('prep-approx-outline')){m.addSource('prep-approx-outline',{type:'geojson',data:outline});m.addLayer({id:'prep-approx-outline',type:'line',source:'prep-approx-outline',paint:{'line-color':'#5c9182','line-width':2,'line-opacity':.65,'line-dasharray':[2,2]}})}}
 else if(!rasterOutline)rasterOutline=L.geoJSON(outline,{interactive:false,style:{color:'#5c9182',weight:2,opacity:.65,fill:false,dashArray:'7 6'}}).addTo(context.raster);
}
function refresh(){
 if(!context)return;const enabled=active()&&(context.vector||context.raster).getZoom()>=11;
 for(const {el,marker} of markers){el.classList.toggle('prep-hidden',!enabled);const wrap=marker.getElement?.();if(wrap)wrap.style.display=enabled?'':'none'}
 if(context.vector?.getLayer('prep-approx-outline'))context.vector.setLayoutProperty('prep-approx-outline','visibility',enabled?'visible':'none');
 if(rasterOutline){if(enabled&&!context.raster.hasLayer(rasterOutline))rasterOutline.addTo(context.raster);else if(!enabled&&context.raster.hasLayer(rasterOutline))rasterOutline.remove()}
}
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==parent)return;const d=e.data;
 if(d?.type==='flood-preparedness-mode'){const was=active();mode={active:d.active!==false,estate:String(d.estate||'')};needsFocus=active()&&(!parentSeen||!was||needsFocus);parentSeen=true;window.IEAT_MAP_DETAILS?.setEstate(mode.estate);if(!active())clearTimeout(timer);attach();focusEstate()}
 if(d?.type==='flood-province-scope'&&d.active&&String(d.name||'').includes('บางปะอิน')&&active()){needsFocus=true;attach();focusEstate()}
});
document.addEventListener('ieat-map-ready',attach);attach();if(parent!==window)parent.postMessage({type:'flood-preparedness-ready'},location.origin);
})();
