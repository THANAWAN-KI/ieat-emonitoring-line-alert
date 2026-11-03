(()=>{'use strict';
function mount(){
 const bar=document.getElementById('floodModeBar'),col=document.getElementById('floodInformationPane');if(!bar||!col)return false;
 if(document.getElementById('expoIdentity'))return true;
 const brand=document.createElement('div');brand.id='expoIdentity';brand.innerHTML='<span class="expo-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 25V11l8 4V8l7 4V5h7v20"/><path d="M3 28c4-3 6 3 10 0s6 3 10 0 5 1 7 0" stroke="#2196F3"/><path d="M9 20h2m6-2h2m5 2h2"/></svg></span><div><h1>เฝ้าระวังน้ำในพื้นที่นิคมอุตสาหกรรม</h1><small>การนิคมอุตสาหกรรมแห่งประเทศไทย · ศูนย์เฝ้าระวังสิ่งแวดล้อมและความปลอดภัย</small></div>';bar.prepend(brand);
 const button=document.createElement('button');button.type='button';button.id='expoPresent';button.setAttribute('aria-label','เปิดหรือปิดการนำเสนอเต็มหน้าจอ');button.innerHTML=(window.IEAT_ICONS?.svg('expand')||'')+'<span>นำเสนอเต็มจอ</span>';
 button.onclick=async()=>{if(document.body.classList.contains('expo-presentation')){document.body.classList.remove('expo-presentation');button.querySelector('span').textContent='นำเสนอเต็มจอ';button.setAttribute('aria-pressed','false');return}try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch(e){document.body.classList.add('expo-presentation');button.querySelector('span').textContent='ออกจากโหมดนำเสนอ';button.setAttribute('aria-pressed','true');button.title='โหมดนำเสนอ · ใช้ปุ่มเต็มจอของอุปกรณ์เพื่อซ่อนแถบเบราว์เซอร์'}};bar.append(button);
 document.addEventListener('fullscreenchange',()=>button.setAttribute('aria-pressed',String(Boolean(document.fullscreenElement))));
 const overview=col.querySelector('.flood-overview');if(overview)col.prepend(overview);
 return true;
}
function start(){if(mount())return;const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});observer.observe(document.body,{childList:true,subtree:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();