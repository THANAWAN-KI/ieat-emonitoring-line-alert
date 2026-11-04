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
const topics=[['overview','ภาพรวม','.flood-overview'],['water','สถานีระดับน้ำ','.rp-stations'],['canal','คลอง','.ef-canal-panel'],['dam','เขื่อนและอ่างเก็บน้ำ','.ef-related-dams'],['watch','พื้นที่เฝ้าระวัง','.ef-warning'],['preparedness','การเตรียมรับมือ','#preparednessPane']];
let attract=false,timer=null,idle=null,index=0,last=Date.now(),enabled3d=false;
const $=id=>document.getElementById(id);
const msg=data=>{const frame=$('estateFocusMap');frame?.contentWindow?.postMessage(data,location.origin)};
function topic(id,auto=false){
 const item=topics.find(t=>t[0]===id);if(!item)return;
 if(id==='preparedness')document.querySelector('[data-flood-view-tab="preparedness"]')?.click();
 else{
  if(document.body.dataset.floodView==='preparedness')document.querySelector('[data-flood-view-tab="overview"]')?.click();
  const dest=id==='overview'?null:document.querySelector('#estateFocusDashboard '+item[2]);
  if(id==='canal'&&dest?.hidden)dest.hidden=false;
  if(dest)dest.scrollIntoView({behavior:auto?'auto':'smooth',block:'nearest'});
  else if(id==='overview')document.querySelector('#estateFocusDashboard .ef-data-column')?.scrollTo({top:0,behavior:auto?'auto':'smooth'});
 }
 document.querySelectorAll('#expoTopicTabs [data-expo-topic]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.expoTopic===id)));
}
function tour(){
 if(!attract||document.hidden)return;
 const nodes=[...document.querySelectorAll('#efEstates [data-ef-estate][data-ef-lat][data-ef-lon]')].filter(x=>{const a=+x.dataset.efLat,b=+x.dataset.efLon;return a>=5&&a<=21&&b>=97&&b<=106});
 if(nodes.length){const n=nodes[index%Math.min(nodes.length,7)];msg({type:'flood-map-focus',lat:+n.dataset.efLat,lon:+n.dataset.efLon,scale:250000,showPopup:false});}
 const choices=['overview','water','dam','watch'];topic(choices[index%choices.length],true);index++;
}
function setAttract(on){
 attract=!!on;clearInterval(timer);document.body.dataset.expoExperience=attract?'attract':'interact';
 const b=$('expoAttract');if(b){b.textContent=attract?'หยุดโหมดโชว์':'เริ่มโหมดโชว์';b.setAttribute('aria-pressed',String(attract));}
 if(attract){tour();timer=setInterval(tour,18000)}
}
function activity(){
 last=Date.now();if(attract)setAttract(false);
 clearTimeout(idle);idle=setTimeout(()=>{if(!document.hidden&&Date.now()-last>=90000&&!['INPUT','TEXTAREA','IFRAME'].includes(document.activeElement?.tagName))setAttract(true)},90000);
}
function install(){
 const bar=$('floodModeBar'),col=document.querySelector('#estateFocusDashboard .ef-data-column');
 if(!bar||!col)return false;if($('expoBoothActions'))return true;
 const title=$('floodPageTitle');if(title&&!$('expoBoothSubtitle')){const p=document.createElement('p');p.id='expoBoothSubtitle';p.textContent='ติดตามความเสี่ยงน้ำท่วมเชิงพื้นที่ เพื่อสนับสนุนการตัดสินใจของ กนอ.';title.insertAdjacentElement('afterend',p);}
 const row=document.createElement('div');row.id='expoBoothActions';row.innerHTML='<button type="button" id="expoAttract" aria-pressed="false">เริ่มโหมดโชว์</button><button type="button" id="expoExploreMap">แผนที่ 3D</button><button type="button" id="expoExploreData">สำรวจข้อมูล</button>';bar.append(row);
 $('expoAttract').addEventListener('click',()=>{const value=!attract;activity();setAttract(value)});
 $('expoExploreMap').addEventListener('click',()=>{activity();enabled3d=!enabled3d;msg({type:'flood-booth-3d',enabled:enabled3d});$('expoExploreMap').textContent=enabled3d?'กลับแผนที่ 2D':'แผนที่ 3D'});
 $('expoExploreData').addEventListener('click',()=>{activity();topic('water')});
 const nav=document.createElement('nav');nav.id='expoTopicTabs';nav.setAttribute('aria-label','สำรวจหัวข้อสถานการณ์น้ำ');
 nav.innerHTML=topics.map(t=>'<button type="button" data-expo-topic="'+t[0]+'" aria-pressed="'+(t[0]==='overview')+'">'+t[1]+'</button>').join('');
 col.insertBefore(nav,$('riverSidePanel')||col.firstElementChild);
 nav.addEventListener('click',e=>{const b=e.target.closest('[data-expo-topic]');if(b){activity();topic(b.dataset.expoTopic)}});
 ['pointerdown','keydown','wheel','touchstart'].forEach(t=>window.addEventListener(t,activity,{capture:true,passive:true}));
 window.addEventListener('blur',()=>{if(attract)setAttract(false)});
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&attract)setAttract(false);else if(!document.hidden)activity()});
 activity();return true;
}
const style=document.createElement('style');style.id='ieat-booth-story-experience-20261104';style.textContent="\n#expoBoothSubtitle{font:400 12px/1.55 Sarabun,sans-serif!important;color:#526477!important;margin:0 4px 12px!important;padding:0!important}\n#floodPageTitle{font-size:clamp(23px,2vw,31px)!important;font-weight:800!important;line-height:1.28!important;color:#0D47A1!important;margin:0!important}\n#expoBoothActions{display:flex!important;gap:6px!important;align-items:center!important}\n#expoBoothActions button{border:1px solid #dbe6f2!important;background:#fff!important;color:#0D47A1!important;border-radius:9px!important;padding:9px 11px!important;white-space:nowrap!important;font:600 12px/1.2 Sarabun,sans-serif!important;cursor:pointer!important}\n#expoBoothActions #expoAttract[aria-pressed=true]{background:#0D47A1!important;color:#fff!important;border-color:#0D47A1!important}\n#expoTopicTabs{position:sticky!important;top:0!important;z-index:25!important;display:flex!important;flex-wrap:nowrap!important;gap:6px!important;width:100%!important;overflow-x:auto!important;margin:4px 0 14px!important;padding:5px 2px 10px!important;background:#fff!important;scrollbar-width:thin!important}\n#expoTopicTabs button{flex:0 0 auto!important;border:1px solid #e1e9f1!important;background:#fff!important;border-radius:10px!important;padding:9px 12px!important;color:#303841!important;font:600 12px/1.3 Sarabun,sans-serif!important;white-space:nowrap!important;cursor:pointer!important}\n#expoTopicTabs button[aria-pressed=true]{background:#eaf4ff!important;color:#0D47A1!important;border-color:#2196F3!important}\n#expoTopicTabs button:focus-visible,#expoBoothActions button:focus-visible{outline:2px solid #2196F3!important;outline-offset:2px!important}\n@media(max-width:1320px){#expoBoothActions button{font-size:11px!important;padding:7px!important}}\n@media(max-width:950px){#expoBoothActions{max-width:46%;overflow-x:auto}#expoBoothActions button{font-size:10px!important}}\n@media(prefers-reduced-motion:reduce){#expoTopicTabs *,#expoBoothActions *{transition:none!important}}\n";document.head.append(style);
function boot(){if(install())return;const o=new MutationObserver(()=>{if(install())o.disconnect()});o.observe(document.documentElement,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
