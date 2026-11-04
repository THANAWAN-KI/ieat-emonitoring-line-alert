(()=>{'use strict';
function mount(){
 const bar=document.getElementById('floodModeBar'),col=document.getElementById('floodInformationPane');if(!bar||!col)return false;
 if(!document.getElementById('floodPageTitle')){const title=document.createElement('h1');title.id='floodPageTitle';title.textContent='สถานการณ์น้ำในพื้นที่นิคมอุตสาหกรรม';col.prepend(title);}
 if(document.getElementById('expoIdentity'))return true;
 const brand=document.createElement('div');brand.id='expoIdentity';brand.innerHTML='<span class="expo-mark" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>open-flood</title><rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="#2A75D3" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"/><path fill="none" stroke="#2A75D3" stroke-linecap="round" stroke-linejoin="round" d="M14.75 5.5v37M24 5.5v37m9.25-37v37m9.25-27.75h-37m37 9.25h-37m37 9.25h-37"/></svg></span><div><h1>ติดตามสถานการณ์น้ำในนิคมอุตสาหกรรม</h1></div>';bar.prepend(brand);
 const button=document.createElement('button');button.type='button';button.id='expoPresent';button.title='นำเสนอเต็มจอ';button.setAttribute('aria-label','เปิดหรือปิดการนำเสนอเต็มหน้าจอ');button.innerHTML=(window.IEAT_ICONS?.svg('expand')||'')+'<span>นำเสนอเต็มจอ</span>';
 button.onclick=async()=>{if(document.fullscreenElement){await document.exitFullscreen();document.body.classList.remove('expo-presentation');button.querySelector('span').textContent='นำเสนอเต็มจอ';button.setAttribute('aria-pressed','false');return}if(document.body.classList.contains('expo-presentation')){document.body.classList.remove('expo-presentation');button.querySelector('span').textContent='นำเสนอเต็มจอ';button.setAttribute('aria-pressed','false');return}try{await document.documentElement.requestFullscreen();document.body.classList.add('expo-presentation');button.querySelector('span').textContent='ออกจากโหมดนำเสนอ';button.setAttribute('aria-pressed','true')}catch(e){document.body.classList.add('expo-presentation');button.querySelector('span').textContent='ออกจากโหมดนำเสนอ';button.setAttribute('aria-pressed','true')}};bar.append(button);
 document.addEventListener('fullscreenchange',()=>button.setAttribute('aria-pressed',String(Boolean(document.fullscreenElement))));
 const overview=col.querySelector('.flood-overview');if(overview)col.prepend(overview);
 return true;
}
function start(){if(mount())return;const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});observer.observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
(()=>{const icons={"overview":"<svg class=\"user-mode-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><title>twotone-dashboard-customize</title><path fill=\"#5E548E\" d=\"M5 15h4v4H5zM5 5h4v4H5zm10 0h4v4h-4z\" opacity=\".3\"/><path fill=\"#5E548E\" d=\"M3 11h8V3H3zm2-6h4v4H5zm8-2v8h8V3zm6 6h-4V5h4zM3 21h8v-8H3zm2-6h4v4H5zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z\"/></svg>","preparedness":"<svg class=\"user-mode-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><title>protect</title><g fill=\"none\" stroke-linejoin=\"round\" stroke-width=\"4\"><path fill=\"#A07AA9\" stroke=\"#5E548E\" d=\"M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z\"/><path stroke=\"#fff\" stroke-linecap=\"round\" d=\"M15 23L22 30L34 18\"/></g></svg>"};function sync(){for(const [mode,svg] of Object.entries(icons)){document.querySelectorAll('[data-flood-view-tab="'+mode+'"],[data-reference-mode="'+mode+'"]').forEach(button=>{if(button.querySelector('.user-mode-icon'))return;button.querySelector('svg')?.remove();button.insertAdjacentHTML('afterbegin',svg)})}}let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;sync()})}).observe(document.documentElement,{childList:true,subtree:true});sync()})();
;(()=>{'use strict';
// Exhibition controls reuse the two existing flood tabs. No secondary topic tabs.
let touring=false,tourTimer=null,tourIndex=0,enabled3d=false;
const $=id=>document.getElementById(id);
const post=data=>{try{$('estateFocusMap')?.contentWindow?.postMessage(data,location.origin)}catch(e){console.warn('Flood map action unavailable',e)}};
function stopTour(){
 touring=false;clearInterval(tourTimer);tourTimer=null;
 document.body.dataset.expoExperience='interact';
 const b=$('expoAttract');if(b){b.textContent='เริ่มโหมดนำเสนอ';b.setAttribute('aria-pressed','false')}
}
function tourStep(){
 if(!touring||document.hidden)return;
 const nodes=[...document.querySelectorAll('#efEstates [data-ef-estate][data-ef-lat][data-ef-lon]')].filter(x=>{
  const lat=Number(x.dataset.efLat),lon=Number(x.dataset.efLon);
  return Number.isFinite(lat)&&Number.isFinite(lon)&&lat>=5&&lat<=21&&lon>=97&&lon<=106;
 });
 if(!nodes.length)return;
 const node=nodes[tourIndex%Math.min(nodes.length,7)];
 post({type:'flood-map-focus',lat:Number(node.dataset.efLat),lon:Number(node.dataset.efLon),scale:250000,showPopup:false});
 tourIndex++;
}
function toggleTour(){
 if(touring){stopTour();return}
 touring=true;document.body.dataset.expoExperience='attract';
 const b=$('expoAttract');if(b){b.textContent='หยุดโหมดนำเสนอ';b.setAttribute('aria-pressed','true')}
 tourIndex=0;tourStep();tourTimer=setInterval(tourStep,18000);
}
function install(){
 const bar=$('floodModeBar'),col=document.querySelector('#estateFocusDashboard .ef-data-column');
 if(!bar||!col)return false;
 if($('expoBoothActions'))return true;
 // Remove only controls injected by prior versions; keep original dashboard controls.
 $('expoTopicTabs')?.remove();
 $('ieat-booth-story-experience-20261104')?.remove();
 const title=$('floodPageTitle');
 if(title&&!$('expoBoothSubtitle')){const p=document.createElement('p');p.id='expoBoothSubtitle';p.textContent='ติดตามสถานการณ์น้ำและพื้นที่เสี่ยงของนิคมอุตสาหกรรม';title.insertAdjacentElement('afterend',p)}
 const row=document.createElement('div');row.id='expoBoothActions';
 row.innerHTML='<button type="button" id="expoAttract" aria-pressed="false">เริ่มโหมดนำเสนอ</button><button type="button" id="expoExploreMap" aria-pressed="false">แผนที่ 3D</button><button type="button" id="expoResetOverview">กลับสู่ภาพรวม</button>';
 bar.append(row);
 $('expoAttract').addEventListener('click',toggleTour);
 $('expoExploreMap').addEventListener('click',()=>{
  stopTour();enabled3d=!enabled3d;
  post({type:'flood-booth-3d',enabled:enabled3d});
  const b=$('expoExploreMap');b.textContent=enabled3d?'กลับแผนที่ 2D':'แผนที่ 3D';b.setAttribute('aria-pressed',String(enabled3d));
 });
 $('expoResetOverview').addEventListener('click',()=>{
  stopTour();document.querySelector('[data-flood-view-tab="overview"]')?.click();
  col.scrollTo({top:0,behavior:'smooth'});
 });
 // Interaction cancels the tour, including interactions inside the map iframe when focus leaves.
 ['pointerdown','keydown','wheel','touchstart'].forEach(type=>window.addEventListener(type,event=>{
  if(!touring)return;
  if(event.target?.closest?.('#expoAttract'))return;
  stopTour();
 },{capture:true,passive:true}));
 window.addEventListener('blur',stopTour);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stopTour()});
 return true;
}
const style=document.createElement('style');style.id='ieat-booth-compact-20261104';
style.textContent=`
#expoBoothSubtitle{display:block;width:100%;max-width:none;font:400 12px/1.35 Sarabun,sans-serif;color:#526477;margin:0 0 5px;padding:0;white-space:nowrap;overflow:visible;word-break:normal}
#floodPageTitle{font-size:clamp(21px,1.8vw,29px);font-weight:800;line-height:1.25;color:#0D47A1;margin:0 0 2px}
#expoBoothActions{display:flex;gap:6px;align-items:center;min-width:0}
#expoBoothActions button{border:1px solid #dbe6f2;background:#fff;color:#0D47A1;border-radius:9px;padding:8px 10px;white-space:nowrap;font:600 12px/1.3 Sarabun,sans-serif;cursor:pointer;min-height:38px}
#expoBoothActions button[aria-pressed=true]{background:#0D47A1;color:#fff;border-color:#0D47A1}
#expoBoothActions button:focus-visible{outline:2px solid #2196F3;outline-offset:2px}
@media(min-width:1100px){html body #estateFocusDashboard .ef-workspace{grid-template-columns:minmax(0,2fr) minmax(0,3fr)!important}}
@media(max-width:1320px){#expoBoothActions button{font-size:11px;padding:7px}}
@media(max-width:600px){#expoBoothSubtitle{white-space:normal;overflow-wrap:break-word}}
@media(max-width:950px){#expoBoothActions{max-width:45%;overflow-x:auto}#expoBoothActions button{min-height:40px;flex:0 0 auto}}
@media(prefers-reduced-motion:reduce){#expoBoothActions button{transition:none}}
`;
document.head.append(style);
function boot(){if(install())return;const observer=new MutationObserver(()=>{if(install())observer.disconnect()});observer.observe(document.documentElement,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
;(()=>{'use strict';
const id='ieat-exhibition-full-map-v1',css="\n@media(min-width:960px){\nhtml body #estateFocusDashboard{position:relative!important;min-height:0!important;overflow:hidden!important}\nhtml body #estateFocusDashboard .ef-workspace{position:relative!important;display:block!important;grid-template-columns:none!important;width:100%!important;height:calc(100dvh - 88px)!important;min-height:560px!important;overflow:hidden!important;gap:0!important;padding:0!important;margin:0!important;background:#edf4fa!important}\nhtml body #estateFocusDashboard .ef-map-column{position:absolute!important;inset:0!important;z-index:1!important;grid-column:auto!important;grid-row:auto!important;width:100%!important;height:100%!important;min-height:0!important;margin:0!important;border:0!important;border-radius:0!important;padding:0!important;overflow:hidden!important}\nhtml body #estateFocusDashboard .ef-map-frame{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:0!important}\nhtml body #estateFocusDashboard #estateFocusMap{width:100%!important;height:100%!important;border:0!important}\nhtml body #estateFocusDashboard .ef-map-foot{display:none!important}\nhtml body #estateFocusDashboard .ef-data-column{position:absolute!important;z-index:15!important;left:16px!important;top:14px!important;bottom:14px!important;grid-column:auto!important;grid-row:auto!important;width:clamp(310px,30vw,430px)!important;height:auto!important;min-height:0!important;max-width:calc(100% - 32px)!important;overflow-y:auto!important;overflow-x:hidden!important;margin:0!important;padding:16px!important;border:0!important;border-radius:22px!important;background:rgba(255,255,255,.91)!important;box-shadow:0 20px 56px rgba(24,59,93,.22),0 2px 9px rgba(24,59,93,.08)!important;backdrop-filter:blur(22px) saturate(135%)!important;-webkit-backdrop-filter:blur(22px) saturate(135%)!important}\nhtml body #estateFocusDashboard .ef-data-column .ef-panel,html body #estateFocusDashboard .ef-data-column .ef-chart,html body #estateFocusDashboard .ef-data-column .flood-kpi{border:0!important;border-radius:14px!important;background:#fff!important;box-shadow:0 3px 12px rgba(24,59,93,.07)!important}\nhtml body #estateFocusDashboard .ef-data-column .flood-kpis{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px!important}\nhtml body #estateFocusDashboard .ef-data-column .flood-kpi{min-width:0!important;padding:9px!important}\nhtml body #estateFocusDashboard .ef-map-column #efMapFullscreen{position:absolute!important;right:18px!important;bottom:20px!important;z-index:5!important;border:0!important;border-radius:14px!important;background:#fff!important;box-shadow:0 9px 25px rgba(24,59,93,.19)!important}\n#expoFloatingMetrics{display:none!important;position:absolute;z-index:11;top:16px;left:calc(clamp(310px,30vw,430px) + 32px);right:20px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:9px}\n#expoFloatingMetrics button{min-width:0;border:0;border-radius:17px;background:rgba(255,255,255,.91);box-shadow:0 9px 25px rgba(24,59,93,.15);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);padding:12px;text-align:left;display:flex;flex-direction:column;gap:4px;cursor:pointer}\n#expoFloatingMetrics strong{font:800 clamp(16px,1.8vw,26px)/1.2 Sarabun,sans-serif;color:#0D47A1;overflow-wrap:anywhere}\n#expoFloatingMetrics span{font:600 12px/1.3 Sarabun,sans-serif;color:#526477}\n#expoPaneToggle{position:absolute;z-index:19;left:calc(clamp(310px,30vw,430px) + 26px);bottom:20px;border:0;border-radius:12px;background:#fff;color:#0D47A1;box-shadow:0 8px 22px rgba(24,59,93,.17);padding:10px 13px;font:700 12px Sarabun,sans-serif;cursor:pointer}\nhtml body #estateFocusDashboard .ef-workspace.expo-hide-data .ef-data-column{transform:translateX(calc(-100% - 26px))!important;pointer-events:none!important}\n.expo-hide-data #expoPaneToggle{left:18px}\n}\n@media(min-width:960px) and (max-width:1240px){#expoFloatingMetrics{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media(max-width:959px){#expoFloatingMetrics,#expoPaneToggle{display:none!important}}\n";
function mount(){
 const space=document.querySelector('#estateFocusDashboard .ef-workspace'),pane=space?.querySelector('.ef-data-column'),map=space?.querySelector('.ef-map-column');
 if(!space||!pane||!map)return false;
 if(!document.getElementById(id)){const style=document.createElement('style');style.id=id;style.textContent=css;document.head.append(style)}
 if(space.dataset.expoFullMap==='true')return true;
 space.dataset.expoFullMap='true';
 const metrics=document.createElement('div');metrics.id='expoFloatingMetrics';metrics.setAttribute('aria-label','สรุปข้อมูลจริง');space.append(metrics);
 const toggle=document.createElement('button');toggle.id='expoPaneToggle';toggle.type='button';toggle.textContent='ซ่อนรายละเอียด';toggle.setAttribute('aria-expanded','true');space.append(toggle);
 const resize=()=>document.getElementById('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-resize'},location.origin);
 toggle.onclick=()=>{const hidden=space.classList.toggle('expo-hide-data');toggle.textContent=hidden?'แสดงรายละเอียด':'ซ่อนรายละเอียด';toggle.setAttribute('aria-expanded',String(!hidden));setTimeout(resize,60)};
 function sync(){
  const src=[...pane.querySelectorAll('.flood-kpis .flood-kpi')].slice(0,4);
  metrics.hidden=!src.length;
  while(metrics.children.length<src.length){
   const b=document.createElement('button');b.type='button';const value=document.createElement('strong'),label=document.createElement('span');b.append(value,label);
   b.onclick=()=>pane.querySelectorAll('.flood-kpis .flood-kpi')[Number(b.dataset.index)]?.click();metrics.append(b);
  }
  while(metrics.children.length>src.length)metrics.lastChild.remove();
  src.forEach((item,i)=>{const b=metrics.children[i],value=item.querySelector('.ef-kpi-copy strong')?.textContent||'กำลังโหลด',label=item.querySelector('.ef-kpi-label')?.textContent||'ข้อมูลสถานการณ์';b.dataset.index=i;
   if(b.children[0].textContent!==value)b.children[0].textContent=value;
   if(b.children[1].textContent!==label)b.children[1].textContent=label;
   b.setAttribute('aria-label',label+' '+value)});
 }
 sync();
 const target=pane.querySelector('.flood-kpis');if(target){let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;sync()})}).observe(target,{childList:true,subtree:true,characterData:true})}
 window.addEventListener('resize',resize,{passive:true});setTimeout(resize,250);
 return true;
}
function boot(){if(mount())return;const o=new MutationObserver(()=>{if(mount())o.disconnect()});o.observe(document.documentElement,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
/* Transparent water-data quality and booth layout enhancements (kept separate for maintainability). */
;(()=>{'use strict';
 if(document.getElementById('ieatExpoQualityScript'))return;
 const script=document.createElement('script');
 script.id='ieatExpoQualityScript';
 script.src='flood-expo-quality.js?v=20261104-quality-v1';
 script.defer=true;
 document.head.appendChild(script);
})();
