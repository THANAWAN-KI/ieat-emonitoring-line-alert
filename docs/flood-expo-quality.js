/* IEAT Flood Expo · screen layout and data-integrity disclosure, 2026-11-04.
   This layer intentionally does not alter the source measurements or risk thresholds. */
(()=>{
 'use strict';
 if(window.__ieatExpoQualityBooted)return;
 window.__ieatExpoQualityBooted=true;
 const $=(q)=>document.querySelector(q);
 const media=window.matchMedia('(min-width: 1000px)');
 const set=(el,key,value)=>{if(el&&el.style.getPropertyValue(key)!==value)el.style.setProperty(key,value,'important')};
 let lastLayout='',layoutTimer=0;
 function applyLayout(){
   const data=$('#estateFocusDashboard .ef-data-column');
   const map=$('#estateFocusDashboard .ef-map-column');
   if(!data||!map)return false;
   const wide=media.matches;
   const presentation=document.body.classList.contains('expo-presentation');
   const closed=document.body.dataset.referencePanel==='closed';
   const signature=[wide,presentation,closed,innerWidth,innerHeight].join('|');
   if(signature===lastLayout)return true;
   lastLayout=signature;
   set(document.body,'--expo-rail',wide?(presentation?'0px':'60px'):'0px');
   set(document.body,'--expo-panel',wide?'calc((100vw - var(--expo-rail)) * 0.4)':'100vw');
   set(data,'position','fixed');
   set(map,'position','fixed');
   set(data,'min-width','0');
   set(map,'min-width','0');
   if(wide){
     set(data,'left','var(--expo-rail)');
     set(data,'width','var(--expo-panel)');
     set(data,'top','var(--expo-header)');
     set(data,'height','calc(100dvh - var(--expo-header))');
     set(data,'overflow-y','auto');
     set(data,'overflow-x','hidden');
     set(map,'left',closed?'var(--expo-rail)':'calc(var(--expo-rail) + var(--expo-panel))');
     set(map,'width','auto');
     set(map,'right','0');
     set(map,'top','var(--expo-header)');
     set(map,'height','calc(100dvh - var(--expo-header))');
     set(map,'bottom','0');
   }else{
     // Tablet / iPad: map first, independently scrollable information panel below.
     set(map,'left','0');
     set(map,'width','100%');
     set(map,'right','0');
     set(map,'top','var(--expo-header)');
     set(map,'height','46dvh');
     set(map,'bottom','auto');
     set(data,'left','0');
     set(data,'width','100%');
     set(data,'top','calc(var(--expo-header) + 46dvh)');
     set(data,'height','calc(54dvh - var(--expo-header))');
     set(data,'overflow-y','auto');
     set(data,'overflow-x','hidden');
   }
   // Resizing the container requires a matching WebGL redraw.
   clearTimeout(layoutTimer);
   layoutTimer=setTimeout(()=>{
     const frame=$('#estateFocusMap');
     try{frame?.contentWindow?.postMessage({type:'flood-map-resize'},location.origin)}catch(_){}
   },100);
   return true;
 }
 function dateValue(value){
   let s=String(value||'').trim().replace(' ','T');
   if(/^\d{4}-\d{2}-\d{2}T/.test(s)&&!/(Z|[+-]\d{2}:?\d{2})$/.test(s))s+='+07:00';
   return Date.parse(s);
 }
 const number=n=>Number(n||0).toLocaleString('th-TH');
 function renderIntegrity(data){
   if(!data||!Array.isArray(data.estates)||!Array.isArray(data.stations))return;
   const host=$('#floodInformationPane')||$('#estateFocusDashboard .ef-data-column');
   if(!host)return;
   let section=$('#ieatDataIntegrity');
   if(!section){
     section=document.createElement('section');
     section.id='ieatDataIntegrity';
     section.setAttribute('aria-label','สถานะคุณภาพข้อมูลน้ำ');
     section.innerHTML='<div class="ieat-quality-head"><strong></strong><span></span></div><p class="ieat-quality-coverage"></p><details><summary>ตรวจสอบความครบถ้วนและที่มาของข้อมูล</summary><div class="ieat-quality-detail"></div></details>';
     const overview=host.querySelector('.flood-overview');
     if(overview)host.insertBefore(section,overview);
     else host.prepend(section);
   }
   const generated=dateValue(data.generated_at);
   const time=Number.isFinite(generated)?new Date(generated).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}):'ไม่ระบุเวลา';
   const now=Date.now();
   const staleBatch=data.status==='stale'||!Number.isFinite(generated)||(now-generated)>86400000;
   const staleStations=data.stations.filter(s=>{const t=dateValue(s.observed_at);return !Number.isFinite(t)||now-t>86400000;}).length;
   const water=data.stations.filter(s=>s.kind==='waterlevel');
   const noBank=water.filter(s=>s.bankfull_msl==null&&s.bank==null).length;
   const assessed=new Set((data.estate_watch||[]).map(e=>String(e.id)));
   const omitted=data.estates.filter(e=>!assessed.has(String(e.id)));
   const qualityTitle=section.querySelector('.ieat-quality-head strong');
   qualityTitle.textContent=(staleBatch?'ชุดข้อมูลย้อนหลัง · ':'ข้อมูลล่าสุด · ')+time;
   section.querySelector('.ieat-quality-head span').textContent='สถานี '+number(data.stations.length)+' จุด';
   section.querySelector('.ieat-quality-coverage').textContent=
     'พื้นที่ในชุดข้อมูล '+number(data.estates.length)+' แห่ง · มีรายการประเมิน '+number(assessed.size)+' แห่ง';
   const detail=section.querySelector('.ieat-quality-detail');
   detail.textContent='';
   const items=[
     'เกณฑ์เฝ้าระวังใช้สถานีภายใน 30 กม. และฝน/ระดับน้ำที่เข้าเกณฑ์ ไม่ใช่การยืนยันว่านิคมฯ ถูกน้ำท่วม',
     'สถานีที่ข้อมูลเกิน 24 ชั่วโมงหรือไม่มีเวลาตรวจวัด '+number(staleStations)+' จุด — ต้องแยกจากข้อมูลปัจจุบัน',
     'สถานีระดับน้ำที่ไม่มีค่าระดับตลิ่งสำหรับเปรียบเทียบ '+number(noBank)+' จาก '+number(water.length)+' จุด — อย่าแปลสถานะจากต้นทางเป็นความสูงล้นตลิ่ง',
     omitted.length?'พื้นที่ยังไม่ปรากฏในรายการประเมิน: '+omitted.map(e=>e.name).join(', '):'พื้นที่ทั้งหมดมีรายการประเมินในชุดข้อมูลนี้',
     'แหล่งข้อมูลและเวลาตรวจวัดของแต่ละสถานีอาจต่างจากเวลาสร้างชุดข้อมูล'
   ];
   for(const label of items){const p=document.createElement('p');p.textContent=label;detail.appendChild(p)}
   section.dataset.stale=staleBatch?'true':'false';
   section.dataset.incomplete=omitted.length||noBank||staleStations?'true':'false';
 }
 const css=`
 #ieatDataIntegrity{box-sizing:border-box;order:1;grid-column:1/-1;display:block;width:100%;min-width:0;
   margin:0 0 8px;padding:11px 14px;background:#fff;border:0;border-radius:14px;
   box-shadow:0 2px 10px rgba(13,71,161,.09);font:400 12px/1.65 Sarabun,sans-serif;color:#303841}
 #ieatDataIntegrity .ieat-quality-head{display:flex;gap:8px;justify-content:space-between;align-items:center;flex-wrap:wrap}
 #ieatDataIntegrity .ieat-quality-head strong{font-weight:700;color:#0D47A1;font-size:13px}
 #ieatDataIntegrity .ieat-quality-head span{font-weight:600;color:#2185D5}
 #ieatDataIntegrity .ieat-quality-coverage{margin:3px 0 0;color:#303841}
 #ieatDataIntegrity details{margin-top:6px;border-top:1px solid #e8edf3;padding-top:5px}
 #ieatDataIntegrity summary{cursor:pointer;font-weight:600;color:#0D47A1}
 #ieatDataIntegrity .ieat-quality-detail p{font-size:12px;line-height:1.65;margin:6px 0}
 #ieatDataIntegrity[data-stale="true"] .ieat-quality-head strong{color:#B30707}
 @media(max-width:999px){#ieatDataIntegrity{padding:10px 12px}}
 `;
 const style=document.createElement('style');style.id='ieat-quality-ui';style.textContent=css;document.head.appendChild(style);
 document.addEventListener('ieat-flood-data-rendered',event=>renderIntegrity(event.detail?.data));
 if(window.IEAT_EXPO_CURRENT_DATA)renderIntegrity(window.IEAT_EXPO_CURRENT_DATA);
 const observer=new MutationObserver(()=>{if(applyLayout()){observer.disconnect();const frame=$('#estateFocusMap');frame?.addEventListener('load',applyLayout)}});
 observer.observe(document.documentElement,{childList:true,subtree:true});
 applyLayout();
 const check=()=>applyLayout();
 window.addEventListener('resize',check,{passive:true});
 document.addEventListener('fullscreenchange',()=>{lastLayout='';applyLayout()});
 const classObserver=new MutationObserver(()=>{lastLayout='';applyLayout()});
 classObserver.observe(document.body,{attributes:true,attributeFilter:['class','data-reference-panel']});
 if(media.addEventListener)media.addEventListener('change',()=>{lastLayout='';applyLayout()});
})();
