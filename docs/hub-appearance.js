/* Shared Hub header: preserve all existing menu and notification handlers. */
(()=>{'use strict';const header=document.getElementById('ieatPortalHeader');if(!header)return;
const logo=header.querySelector('.brand img');if(logo){logo.src='./assets/TH-Vertical.png';logo.alt='กนอ.';}
const old=header.querySelector('.scope-search-icon');if(old){const img=document.createElement('img');img.src='./assets/estate-tree.svg';img.alt='';img.className='scope-search-icon';img.setAttribute('aria-hidden','true');old.replaceWith(img);}
function relocate(){const nav=header.querySelector('.header-nav'),bell=document.getElementById('hub-alert-button');if(!nav||!bell)return false;nav.append(bell);if(!bell.querySelector('.hub-warning-icon')){const oldIcon=bell.querySelector('svg');if(oldIcon){const img=document.createElement('img');img.src='./assets/alert-warning.svg';img.alt='';img.className='hub-warning-icon';img.setAttribute('aria-hidden','true');oldIcon.replaceWith(img);}}return true;}
if(!relocate()){const observer=new MutationObserver(()=>{if(relocate())observer.disconnect();});observer.observe(header,{childList:true,subtree:true});setTimeout(()=>observer.disconnect(),10000);}
})();
