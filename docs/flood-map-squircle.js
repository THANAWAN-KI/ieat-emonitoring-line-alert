/* 3D neumorphic map markers for the flood hydrology map: white raised buttons with a
   coloured glyph (colour = category / water status). File name kept for cache history.
   IEAT_SQ.pin(kind, hex)            -> marker with pointer tail (tip = bottom centre)
   IEAT_SQ.tile(kind, hex, size)     -> button only (legends / badges)
   IEAT_SQ.cluster(kind, hex, count) -> button with count (centre anchor) */
(()=>{'use strict';
/* Status / category hex used by the map -> glyph colour that reads well on white. */
const INK={
 '#52057f':'#109dc0','#52057f':'#109dc0',
 '#598c14':'#598c14',
 '#ffc719':'#ffc719','#ffc719':'#ffc719',
 '#ff6908':'#ff6908','#ed3b21':'#ff6908',
 '#bf033b':'#ed3b21',
 '#706357':'#706357','#2e1f54':'#109dc0',
 '#109dc0':'#109dc0','#109dc0':'#109dc0',
 '#109dc0':'#109dc0','#109dc0':'#109dc0',
 '#ff6908':'#ffc719','#109dc0':'#109dc0',
 '#109dc0':'#109dc0','#109dc0':'#109dc0'};
const KIND={estate:'#52057f',water:'#109dc0',canal:'#109dc0',dam:'#ff6908',camera:'#109dc0',rain:'#109dc0',pump:'#109dc0',storage:'#109dc0',protection:'#598c14'};
const hexRgb=h=>{h=h.replace('#','');if(h.length===3)h=h.replace(/./g,c=>c+c);const n=parseInt(h,16);return [n>>16&255,n>>8&255,n&255]};
const mix=(h,t,a)=>'#'+hexRgb(h).map((v,i)=>Math.round(v+(t[i]-v)*a).toString(16).padStart(2,'0')).join('');
function ink(hex){
 hex=String(hex||'').trim().toLowerCase();if(!/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/.test(hex))return null;
 if(INK[hex])return INK[hex];
 const [r,g,b]=hexRgb(hex),lum=(.299*r+.587*g+.114*b)/255;
 return lum>.7?mix(hex,[0,0,0],.35):hex;
}
const GL={
 estate:c=>'<path d="M3 21V11.2l5 3v-3l5 3v-3l5 3V3.5h3V21Z" fill="'+c+'"/><rect x="5.3" y="16.5" width="2" height="2" rx=".4" fill="#000000" opacity=".18"/><rect x="10.3" y="16.5" width="2" height="2" rx=".4" fill="#000000" opacity=".18"/><rect x="15.3" y="16.5" width="2" height="2" rx=".4" fill="#000000" opacity=".18"/>',
 water:c=>'<path d="M12 2.2C9.6 5.6 6.8 8.7 6.8 12a5.2 5.2 0 0 0 10.4 0c0-3.3-2.8-6.4-5.2-9.8Z" fill="'+c+'"/><path d="M9.3 12.6a2.8 2.8 0 0 0 2.4 2.6" stroke="#000000" stroke-opacity=".16" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M2.5 20.2c1.6-1.3 3.2 1.3 4.8 0s3.2 1.3 4.8 0 3.2 1.3 4.8 0 3.2 1.3 4.6 0" stroke="'+c+'" stroke-width="1.9" fill="none" stroke-linecap="round"/>',
 dam:c=>'<path d="M2.5 3h7l4.5 18h-11.5Z" fill="'+c+'"/><path d="M5.2 7.5h4.9M5.2 12h6M5.2 16.5h7.1" stroke="#000000" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/><path d="M14.6 8.5c2-1.4 4 1.4 6.4 0M15.7 13c1.8-1.3 3.6 1.3 5.3 0M16.8 17.5c1.5-1.1 3 1.1 4.2 0" stroke="'+c+'" stroke-width="2.3" fill="none" stroke-linecap="round"/>',
 canal:c=>'<path d="M3.5 3.5 6.6 20.5M20.5 3.5l-3.1 17" stroke="'+c+'" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M7.4 8.6c1.5-1.2 3.1 1.2 4.6 0s3.1 1.2 4.6 0M8 13.4c1.3-1.1 2.7 1.1 4 0s2.7 1.1 4 0M8.6 18.2c1.1-.9 2.3.9 3.4 0s2.3.9 3.4 0" stroke="'+c+'" stroke-width="2" fill="none" stroke-linecap="round"/>',
 camera:c=>'<rect x="2.5" y="6.5" width="13" height="11" rx="3" fill="'+c+'"/><path d="m16.5 10.8 5-3v8.4l-5-3Z" fill="'+c+'"/><circle cx="6.6" cy="10.5" r="1.4" fill="#000000" opacity=".2"/>',
 rain:c=>'<path d="M7 14.5a4 4 0 0 1-.6-8A6 6 0 0 1 17.6 7.6a3.5 3.5 0 0 1 .4 6.9Z" fill="'+c+'"/><path d="M8 18l-1 2.5M12.5 18l-1 2.5M17 18l-1 2.5" stroke="'+c+'" stroke-width="1.9" stroke-linecap="round"/>',
 pump:c=>'<rect x="4" y="9" width="11" height="12" rx="2.5" fill="'+c+'"/><path d="M15 13h4.5a1.5 1.5 0 0 1 1.5 1.5V19M9.5 9V4.5h5" stroke="'+c+'" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="15" r="2" fill="#000000" opacity=".18"/>',
 storage:c=>'<path d="M3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill="'+c+'"/><path d="M12 2.5S9 5.6 9 7.4a3 3 0 0 0 6 0C15 5.6 12 2.5 12 2.5Z" fill="'+c+'"/><path d="M5 15c2-1.3 4.7 1.3 7 0s4.7 1.3 7 0" stroke="#000000" stroke-opacity=".18" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
 protection:c=>'<path d="m12 2.5 8 3v6c0 4.8-3.6 8-8 10.5-4.4-2.5-8-5.7-8-10.5v-6Z" fill="'+c+'"/><path d="m8.3 12 2.6 2.6 4.8-5" stroke="#000000" stroke-opacity=".22" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const colour=(kind,hex)=>ink(hex)||ink(KIND[kind]||'#109dc0');
const glyph=(kind,c,w)=>'<svg class="ieat-nm-glyph" width="'+w+'" height="'+w+'" viewBox="1.5 1.5 21 21" aria-hidden="true" focusable="false">'+(GL[kind]||GL.water)(c)+'</svg>';
const isCrit=hex=>String(hex||'').trim().toLowerCase()==='#bf033b';
function tile(kind,hex,size){size=size||28;return '<span class="ieat-nm-btn" style="width:'+size+'px;height:'+size+'px">'+glyph(kind,colour(kind,hex),Math.round(size*.66))+'</span>'}
function pin(kind,hex){const crit=isCrit(hex);
 return '<span class="ieat-sq-pin'+(crit?' is-critical':'')+'" data-type="'+esc(kind)+'" aria-hidden="true"><span class="ieat-nm-btn">'+glyph(kind,colour(kind,hex),27)+'</span><span class="ieat-nm-tail"></span></span>'}
function cluster(kind,hex,count){const c=colour(kind,hex),n=Number(count)||0,txt=n>99?'99+':String(n);
 return '<span class="ieat-sq-cluster" data-type="'+esc(kind)+'"><span class="ieat-nm-btn" style="--nm-ring:'+c+'"><b style="color:'+c+';font-size:'+(txt.length>2?12:15)+'px">'+txt+'</b></span><span class="ieat-sq-cluster-kind">'+tile(kind,hex,20)+'</span></span>'}
window.IEAT_SQ={tile,pin,cluster,ink};
/* 85% frosted white; the drop shadow lives on the button itself (not a parent filter) so backdrop blur still sees the map. */
const BTN='background:radial-gradient(circle at 32% 26%,rgba(255,255,255,.85) 0%,rgba(255,255,255,.85) 38%,rgba(255,255,255,.85) 78%,rgba(255,255,255,.85) 100%)!important;-webkit-backdrop-filter:blur(6px) saturate(1.3);backdrop-filter:blur(6px) saturate(1.3);';
const SHADOW='4px 6px 9px rgba(46,31,84,.30),1px 2px 3px rgba(46,31,84,.20),';
const css=document.createElement('style');css.id='ieat-neumorphic-markers';css.textContent=`
html body .ieat-nm-btn{position:relative!important;display:grid!important;place-items:center!important;box-sizing:border-box!important;border-radius:50%!important;border:0!important;padding:0!important;margin:0!important;${BTN}box-shadow:${SHADOW}inset -3px -3px 5px rgba(74,133,148,.2),inset 2px 2px 4px #ffffff,0 0 0 .5px rgba(74,133,148,.18)!important}
html body .ieat-nm-glyph{display:block!important;filter:drop-shadow(.8px 1.4px 1px rgba(0,0,0,.2))}
html body .ieat-nm-glyph *{visibility:visible!important}
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){html body .ieat-nm-btn{background:radial-gradient(circle at 32% 26%,#ffffff 0%,#ffffff 38%,#ffffff 78%,#ffffff 100%)!important}}
html body .ieat-sq-pin{position:absolute!important;left:50%!important;bottom:0!important;transform:translateX(-50%)!important;display:flex!important;flex-direction:column!important;align-items:center!important;width:40px!important;height:48px!important;margin:0!important;padding:0!important;background:none!important;border:0!important;box-shadow:none!important;filter:none!important;pointer-events:auto;transition:transform .15s ease}
html body .ieat-sq-pin .ieat-nm-btn{width:40px!important;height:40px!important;flex:none!important}
html body .ieat-sq-pin .ieat-nm-glyph{width:27px!important;height:27px!important}
html body .ieat-nm-tail{display:block!important;flex:none!important;width:0!important;height:0!important;margin:0!important;border-left:6px solid transparent!important;border-right:6px solid transparent!important;border-top:8px solid rgba(255,255,255,.92)!important;background:none!important;filter:drop-shadow(2px 2px 1.5px rgba(46,31,84,.25))}
html body .ieat-sq-pin:after,html body .ieat-sq-pin:before{content:none!important;display:none!important}
html body .ieat-sq-pin.is-critical .ieat-nm-btn:before{content:""!important;position:absolute!important;inset:-4px!important;border-radius:50%!important;border:2px solid #ed3b21!important;animation:ieatNmPulse 1.6s ease-in-out infinite}
@keyframes ieatNmPulse{0%,100%{opacity:.8}50%{opacity:.25}}
@media (prefers-reduced-motion:reduce){html body .ieat-sq-pin.is-critical .ieat-nm-btn:before{animation:none;opacity:.6}}
html body .leaflet-marker-icon:hover .ieat-sq-pin,html body .maplibregl-marker:hover .ieat-sq-pin,html body .leaflet-marker-icon:focus-visible .ieat-sq-pin,html body .maplibregl-marker:focus-visible .ieat-sq-pin{transform:translateX(-50%) translateY(-3px) scale(1.06)!important}
html body #mapStage .estate-pin.has-sq,html body #mapStage .flood-data-pin.has-sq,html body .estate-pin.has-sq,html body .flood-data-pin.has-sq,html body .prep-anchor .has-sq{width:40px!important;height:48px!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;filter:none!important;overflow:visible!important;padding:0!important}
html body #mapStage .leaflet-marker-icon.estate-pin.has-sq,html body #mapStage .leaflet-marker-icon.flood-data-pin.has-sq,html body .leaflet-marker-icon.estate-pin.has-sq,html body .leaflet-marker-icon.flood-data-pin.has-sq{margin-left:-20px!important;margin-top:-48px!important}
html body .estate-pin.has-sq .estate-name{top:50px!important}
html body .flood-data-pin.has-sq .fd-pin-name{top:50px!important}
html body .ieat-sq-cluster{position:relative!important;display:block!important;width:44px!important;height:44px!important;background:none!important;box-shadow:none!important;border:0!important;outline:0!important}
html body .ieat-sq-cluster>.ieat-nm-btn{width:44px!important;height:44px!important}
html body .ieat-sq-cluster>.ieat-nm-btn:before{content:"";position:absolute;inset:4px;border-radius:50%;border:2.5px solid var(--nm-ring,#109dc0);opacity:.85}
html body .ieat-sq-cluster b{font:800 15px/1 Sarabun,Tahoma,sans-serif!important;background:none!important;border:0!important;padding:0!important;position:static!important;box-shadow:none!important}
html body .ieat-sq-cluster-kind{position:absolute!important;right:-6px;bottom:-4px}
html body .flood-point-cluster.has-sq{width:44px!important;height:44px!important;min-width:44px!important;min-height:44px!important;filter:none!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:0!important;cursor:pointer}
html body .leaflet-marker-icon.flood-point-cluster.has-sq{margin-left:-22px!important;margin-top:-22px!important}
html body .prep-anchor:has(.has-sq),html body .prep-feature:has(.has-sq){width:40px!important;height:48px!important}
html body .prep-feature button:has(.ieat-sq-pin){position:relative!important;width:40px!important;height:48px!important;background:transparent!important;border:0!important;padding:0!important;box-shadow:none!important;filter:none!important}
`;
(document.head||document.documentElement).appendChild(css);
/* Inline <style> blocks later in <body> can still win; move ours to the very end once parsed. */
const last=()=>(document.body||document.head).appendChild(css);
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',last):last();
})();
