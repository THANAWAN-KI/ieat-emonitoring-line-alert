(()=>{'use strict';
function mount(){
 const bar=document.getElementById('floodModeBar'),col=document.getElementById('floodInformationPane');if(!bar||!col)return false;
 if(!document.getElementById('floodPageTitle')){const title=document.createElement('h1');title.id='floodPageTitle';title.textContent='สถานการณ์น้ำในพื้นที่นิคมอุตสาหกรรม';col.prepend(title);}
 if(document.getElementById('expoIdentity'))return true;
 const brand=document.createElement('div');brand.id='expoIdentity';brand.innerHTML='<span class="expo-mark" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><title>open-flood</title><rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="#109dc0" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"/><path fill="none" stroke="#109dc0" stroke-linecap="round" stroke-linejoin="round" d="M14.75 5.5v37M24 5.5v37m9.25-37v37m9.25-27.75h-37m37 9.25h-37m37 9.25h-37"/></svg></span><div><h1>ติดตามสถานการณ์น้ำในนิคมอุตสาหกรรม</h1></div>';bar.prepend(brand);
 const button=document.createElement('button');button.type='button';button.id='expoPresent';button.title='นำเสนอเต็มจอ';button.setAttribute('aria-label','เปิดหรือปิดการนำเสนอเต็มหน้าจอ');button.innerHTML=(window.IEAT_ICONS?.svg('expand')||'')+'<span>นำเสนอเต็มจอ</span>';
 button.onclick=async()=>{if(document.fullscreenElement){await document.exitFullscreen();document.body.classList.remove('expo-presentation');button.querySelector('span').textContent='นำเสนอเต็มจอ';button.setAttribute('aria-pressed','false');return}if(document.body.classList.contains('expo-presentation')){document.body.classList.remove('expo-presentation');button.querySelector('span').textContent='นำเสนอเต็มจอ';button.setAttribute('aria-pressed','false');return}try{await document.documentElement.requestFullscreen();document.body.classList.add('expo-presentation');button.querySelector('span').textContent='ออกจากโหมดนำเสนอ';button.setAttribute('aria-pressed','true')}catch(e){document.body.classList.add('expo-presentation');button.querySelector('span').textContent='ออกจากโหมดนำเสนอ';button.setAttribute('aria-pressed','true')}};bar.append(button);
 document.addEventListener('fullscreenchange',()=>button.setAttribute('aria-pressed',String(Boolean(document.fullscreenElement))));
 const overview=col.querySelector('.flood-overview');if(overview)col.prepend(overview);
 return true;
}
function start(){if(mount())return;const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});observer.observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
(()=>{const icons={"overview":"<svg class=\"user-mode-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><title>twotone-dashboard-customize</title><path fill=\"#2e1f54\" d=\"M5 15h4v4H5zM5 5h4v4H5zm10 0h4v4h-4z\" opacity=\".3\"/><path fill=\"#2e1f54\" d=\"M3 11h8V3H3zm2-6h4v4H5zm8-2v8h8V3zm6 6h-4V5h4zM3 21h8v-8H3zm2-6h4v4H5zm13-2h-2v3h-3v2h3v3h2v-3h3v-2h-3z\"/></svg>","preparedness":"<svg class=\"user-mode-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 48 48\" aria-hidden=\"true\"><title>protect</title><g fill=\"none\" stroke-linejoin=\"round\" stroke-width=\"4\"><path fill=\"#52057f\" stroke=\"#2e1f54\" d=\"M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z\"/><path stroke=\"#ffffff\" stroke-linecap=\"round\" d=\"M15 23L22 30L34 18\"/></g></svg>"};function sync(){for(const [mode,svg] of Object.entries(icons)){document.querySelectorAll('[data-flood-view-tab="'+mode+'"],[data-reference-mode="'+mode+'"]').forEach(button=>{if(button.dataset.referenceIcon||button.querySelector('.user-mode-icon'))return;button.querySelector('svg')?.remove();button.insertAdjacentHTML('afterbegin',svg)})}}let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;sync()})}).observe(document.documentElement,{childList:true,subtree:true});sync()})();
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
function boot(){if(install())return;const observer=new MutationObserver(()=>{if(install())observer.disconnect()});observer.observe(document.documentElement,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
/* Transparent water-data quality and booth layout enhancements (kept separate for maintainability). */
;(()=>{'use strict';
 if(document.getElementById('ieatExpoQualityScript'))return;
 const script=document.createElement('script');
 script.id='ieatExpoQualityScript';
 script.src='flood-expo-quality.js?v=20261105-cyan1';
 script.defer=true;
 document.head.appendChild(script);
})();


