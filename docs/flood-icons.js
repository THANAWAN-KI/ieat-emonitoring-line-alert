/* Shared, code-native icon family for the water dashboard and map. */
(()=>{'use strict';
const paths={
 water:'<path d="M12 3C10 6 6 10 6 15a6 6 0 0 0 12 0c0-5-4-9-6-12Z"/><path d="M7 15c2-2 4 2 6 0s3 0 4 0M10 18h4"/>',
 canal:'<path d="M3 4v16m18-16v16M8 5h8M10 5v12m4-12v12M7 9h10M3 18c2-2 4 2 6 0s4 2 6 0 4 2 6 0"/>',
 flow:'<path d="M3 7c2-2 4 2 6 0s4 2 6 0h6m-3-3 3 3-3 3M3 13c2-2 4 2 6 0s4 2 6 0M3 19c2-2 4 2 6 0s4 2 6 0h6m-3-3 3 3-3 3"/>',
 dam:'<path d="M4 3h6l3 18H4ZM4 7h5M4 12h6M4 17h7M14 10c2-2 4 2 7 0M15 15c2-2 4 2 6 0M16 20c2-2 3 1 5 0"/>',
 camera:'<path d="m4 4 15 5-3 8L1 12Zm14 8 3 1 2-4-3-1M9 15l-2 6H3M3 18v5"/><path d="m5 7 10 3"/>',
 pump:'<path d="M3 21h18M6 21v-7h12v7M9 14V7h6v7M8 7V3h8v4M15 10h6v7M3 15H1v5h5"/><circle cx="12" cy="17.5" r="1.5"/>',
 storage:'<path d="M3 10v11h18V10M3 14c3-3 6 3 9 0s6 3 9 0M3 18c3-3 6 3 9 0s6 3 9 0M12 2s-3 3-3 5a3 3 0 0 0 6 0c0-2-3-5-3-5Z"/>',
 protection:'<path d="m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5Z"/><path d="m8 12 3 3 5-6"/>',
 flood:'<path d="m3 10 9-7 9 7M6 8v7m12-7v7M10 12h4v4M2 18c2-2 4 2 6 0s4 2 6 0 4 2 8 0M2 22c2-2 4 2 6 0s4 2 6 0 4 2 8 0"/>',
 rain:'<path d="M6 13a4 4 0 0 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 0 1 1 9M7 17l-1 3m6-3-1 3m6-3-1 3"/>',
 layers:'<path d="m12 3 10 6-10 6L2 9Zm-10 10 10 6 10-6M2 17l10 6 10-6"/>',
 satellite:'<path d="m8 8 8 8m-5-11 8 8-6 6-8-8Zm-9 2 5-5 4 4-5 5Zm11 11 5-5 4 4-5 5M3 15a6 6 0 0 1 6 6M3 19a2 2 0 0 1 2 2"/>',
 radar:'<circle cx="12" cy="12" r="9"/><path d="m12 12 6-6M3 12h9v9M7 12a5 5 0 0 1 8-4M7 16a5 5 0 0 0 10-4"/>',
 expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6m12-6v6h-6"/>',
 cube:'<path d="m12 2 9 5v10l-9 5-9-5V7Zm0 10 9-5M12 12 3 7m9 5v10M7.5 4.5l9 5"/>',
 orbit:'<path d="m8 14 4-3 4 3M9 18h6M12 11V7"/><path d="M4 8C0 11 2 17 10 19c7 1 13-1 12-5m-4-7 3 1-1-3M4 8C7 5 15 5 21 8"/>',
 pause:'<path d="M8 5v14M16 5v14"/>',
 close:'<path d="m6 6 12 12M18 6 6 18"/>',
 refresh:'<path d="M20 10a8 8 0 1 0-1 8M20 4v6h-6"/>',
 locate:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 1v4m0 14v4M1 12h4m14 0h4"/>'
};
const svg=kind=>'<svg class="ieat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+(paths[kind]||paths.water)+'</svg>';
window.IEAT_ICONS={svg,paths};
const style=document.createElement('style');style.textContent=`
.ieat-icon{display:inline-block;width:20px;height:20px;vertical-align:middle;flex-shrink:0;fill:none!important;stroke:currentColor!important}
.fd-pin-shape{border:2px solid white!important;box-shadow:0 3px 8px #20344338!important}
.fd-pin-icon{width:24px!important;height:24px!important;margin:2px;border-radius:50%;background:white;color:var(--pin-ink,#37576b)!important}
.fd-pin-icon .ieat-icon{width:19px!important;height:19px!important;stroke-width:1.8}
.fd-pin-name,.prep-name{border:1px solid #dfe5e9!important;border-radius:7px!important;box-shadow:0 2px 7px #20344312!important;font-weight:600!important}
.fd-legend-icon{background:#edf1f5!important;color:#526677!important;border:1px solid #d8e1e8;border-radius:7px!important}
.fd-legend-icon .ieat-icon{width:17px;height:17px}
#mapDetails nav button{display:inline-flex;align-items:center;gap:4px}#mapDetails nav .ieat-icon{width:15px;height:15px}
#supportMapButton .ieat-icon{width:18px;height:18px;margin-right:5px}#estateView3d .ieat-icon{width:17px;height:17px;margin-right:5px}
#aerialTourButton span{display:inline-flex;vertical-align:middle}#aerialTourButton .ieat-icon{width:19px;height:19px}
#mapDetailsClose{display:grid;place-items:center}#mapDetailsClose .ieat-icon{width:16px;height:16px}
#estateFocusDashboard .ef-kpi-icon{box-shadow:inset 0 0 0 1px #8459aa15!important;border-radius:14px!important}#estateFocusDashboard .ef-kpi-icon .ieat-icon{stroke-width:1.65}
button:focus-visible{outline:3px solid #9879bb;outline-offset:3px}
`;document.head.appendChild(style);
function decorate(el,kind){if(!el||el.querySelector('.ieat-icon'))return;el.insertAdjacentHTML('afterbegin',svg(kind)+' ')}
function sync(){
 decorate(document.querySelector('#mapLayers>summary'),'layers');decorate(document.getElementById('efMapFullscreen'),'expand');decorate(document.getElementById('efMapExitFullscreen'),'expand');
 document.querySelectorAll('[data-layer="satellite"],[data-layer="radar"],[data-layer="flow"]').forEach(input=>{const swatch=input.parentElement.querySelector('.layer-swatch');if(swatch&&!swatch.querySelector('.ieat-icon')){swatch.classList.add('fd-legend-icon');swatch.innerHTML=svg(input.dataset.layer)}});
 document.querySelectorAll('[data-detail-tab]').forEach(b=>decorate(b,b.dataset.detailTab==='prep'?'protection':b.dataset.detailTab));
 decorate(document.getElementById('supportMapButton'),'protection');decorate(document.getElementById('estateView3d'),'cube');
 const close=document.getElementById('mapDetailsClose');if(close&&!close.querySelector('.ieat-icon'))close.innerHTML=svg('close');
 const aerial=document.querySelector('#aerialTourButton span');if(aerial&&!aerial.querySelector('.ieat-icon'))aerial.innerHTML=svg(document.getElementById('aerialTourButton').getAttribute('aria-pressed')==='true'?'pause':'orbit');
 document.querySelectorAll('[data-camera-refresh]').forEach(b=>decorate(b,'refresh'));
 document.querySelectorAll('.ef-kpi-icon').forEach((el,i)=>{if(!el.querySelector('.ieat-icon'))el.innerHTML=svg(['flood','water','rain'][i%3])});
}
let scheduled=false;new MutationObserver(()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;sync()})}).observe(document.documentElement,{childList:true,subtree:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',sync);else sync();
})();
