/* 3D neumorphic map markers for the flood hydrology map: white raised buttons with a
   coloured glyph (colour = category / water status). File name kept for cache history.
   IEAT_SQ.pin(kind, hex)            -> marker with pointer tail (tip = bottom centre)
   IEAT_SQ.tile(kind, hex, size)     -> button only (legends / badges)
   IEAT_SQ.cluster(kind, hex, count) -> button with count (centre anchor) */
(()=>{'use strict';
/* Status / category hex used by the map -> glyph colour that reads well on white. */
const INK={'#52057f':'#2f68f4','#109dc0':'#2f68f4','#2e1f54':'#64748b','#ffc719':'#c28513','#bf033b':'#bf033b'};
const KIND={estate:'#2f68f4',water:'#2f68f4',canal:'#149fc3',dam:'#2f68f4',camera:'#3867a6',rain:'#2f68f4',pump:'#2f68f4',storage:'#2f68f4',protection:'#53953b'};
const hexRgb=h=>{h=h.replace('#','');if(h.length===3)h=h.replace(/./g,c=>c+c);const n=parseInt(h,16);return [n>>16&255,n>>8&255,n&255]};
const mix=(h,t,a)=>'#'+hexRgb(h).map((v,i)=>Math.round(v+(t[i]-v)*a).toString(16).padStart(2,'0')).join('');
function ink(hex){
 hex=String(hex||'').trim().toLowerCase();if(!/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/.test(hex))return null;
 if(INK[hex])return INK[hex];
 const [r,g,b]=hexRgb(hex),lum=(.299*r+.587*g+.114*b)/255;
 return lum>.7?mix(hex,[0,0,0],.35):hex;
}
const outline=d=>c=>'<g fill="none" stroke="'+c+'" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+d+'</g>';
const GL={
 estate:outline('<path d="M3 21V10l6 3v-3l6 3V4h4v17M3 21h18M6 17v1m4-1v1m7-1v1"/>'),
 water:outline('<path d="M9 3h7v15H9zM12 7h4m-4 4h4m-4 4h4M3 21q3-2 6 0t6 0t6 0"/>'),
 canal:outline('<path d="M4 3v18M20 3v18M4 8h16M8 11v5m4-5v5m4-5v5M4 20q4-2 8 0t8 0"/>'),
 dam:outline('<path d="M4 4h11l3 16H7zM8 4l3 16m1-16 3 16M18 10h4m-3 5h3M2 22q3-2 6 0t6 0t6 0"/>'),
 camera:c=>'<g stroke="'+c+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 5 15 3-2 8-14-4z" fill="'+c+'"/><path d="m18 9 4 1-1 5-4-1" fill="none"/><path d="m9 15-1 4h6m-2-3v3" fill="none"/><path d="m5 7 9 2" stroke="#ffffff" stroke-opacity=".8"/></g>',
 rain:outline('<path d="M6 14a4 4 0 0 1 0-8 6 6 0 0 1 11-1 4.5 4.5 0 0 1 1 9zM8 17l-1 4m6-4-1 4m6-4-1 4"/>'),
 pump:outline('<rect x="4" y="9" width="11" height="12" rx="2"/><path d="M9 9V4h6m0 9h5v7"/><circle cx="9" cy="15" r="2"/>'),
 storage:outline('<path d="M3 10h18v11H3zM3 16q4-2 9 0t9 0M12 2s-3 3-3 5a3 3 0 0 0 6 0c0-2-3-5-3-5z"/>'),
 protection:outline('<path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6zM8 12l3 3 5-6"/>')
};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const colour=(kind,hex)=>ink(hex)||ink(KIND[kind]||'#109dc0');
const glyph=(kind,c,w)=>'<svg class="ieat-nm-glyph" width="'+w+'" height="'+w+'" viewBox="1.5 1.5 21 21" aria-hidden="true" focusable="false">'+(GL[kind]||GL.water)(c)+'</svg>';
const storySymbols=new URLSearchParams(location.search).get('story')==='1';

const storyArt={
 estate:['#e9a44f','<path d="M3 26V13l9 5v-6l9 5V6h6l2 20Z"/><path d="M7 21h4v3H7zm8 0h4v3h-4z" fill="#fff2cf"/>'],
 water:['#67b9e5','<path d="M3 23q4-4 8 0t8 0t10 0v5H3Z"/><path d="M11 23V4h9v19m-5-14h5m-5 5h5m-5 5h5" fill="#fff7df"/>'],
 rain:['#83bddb','<path d="M7 19a5 5 0 0 1-1-10 8 8 0 0 1 14-3 7 7 0 0 1 5 13Z"/><path d="m10 22-2 5m9-5-2 5m9-5-2 5" fill="none" stroke="#315783"/>'],
 canal:['#68c4d7','<path d="m3 7 9 16h8l9-16v19H3Z"/><path d="M11 24q3-4 6 0t6 0" fill="none" stroke="#fff"/>'],
 dam:['#c8a77d','<path d="M3 8h16l7 18H8Z"/><path d="m9 8 5 18m1-18 6 18" fill="none"/><path d="M3 27q4-3 8 0t8 0t10 0" fill="none" stroke="#247ca8"/>'],
 camera:['#a0b7e8','<path d="m4 7 19 5-3 10-18-5zm19 6 6 2-2 7-6-2z"/><path d="m13 21-2 6h8m-4-3v4" fill="none"/>'],
 pump:['#82b7e3','<path d="M9 12V5h13v5m-5 7h11v8" fill="none"/><rect x="4" y="12" width="16" height="15" rx="3"/><circle cx="12" cy="19.5" r="3" fill="#fff"/>'],
 storage:['#74c9bc','<path d="M3 14h26l-5 13H8Z"/><path d="M7 18q4-3 8 0t10 0" fill="none"/><path d="M16 4q-7 8 0 9 7-1 0-9Z" fill="#81d8ed"/>'],
 protection:['#87bd69','<path d="m16 3 10 4v10q-2 7-10 12Q8 24 6 17V7Z"/><path d="m11 15 4 4 7-8" fill="none" stroke="#fff"/>']
};
function storyIcon(kind,hex,size,count){
 const [fill,shape]=storyArt[kind]||storyArt.water;
 const status=/^#[0-9a-f]{6}$/i.test(String(hex))?hex:null;
 return '<span class="ieat-story-symbol" style="--story-icon-size:'+size+'px" aria-hidden="true">'+
  '<svg viewBox="0 0 32 32"><g fill="'+fill+'" stroke="#27313a" stroke-width="1.45" stroke-linejoin="round" stroke-linecap="round">'+shape+'</g>'+
  (kind==='water'&&status?'<circle cx="25" cy="9" r="3" fill="'+status+'" stroke="#27313a" stroke-width="1"/>':'')+'</svg>'+
  (count?'<b>'+count+'</b>':'')+'</span>';
}
const isCrit=hex=>String(hex||'').trim().toLowerCase()==='#bf033b';
function waterCircle(hex,marker){
 const c=/^#[0-9a-f]{6}$/i.test(String(hex))?hex:'#99d3f0';
 return '<span class="ieat-water-circle'+(marker?' is-map-point':'')+'" data-type="water" style="--water-dot:'+c+'" aria-hidden="true"></span>';
}
function tile(kind,hex,size){if(storySymbols)return storyIcon(kind,hex,size||28);if(kind==='water')return waterCircle(hex,false);size=size||28;return '<span class="ieat-nm-btn" style="width:'+size+'px;height:'+size+'px">'+glyph(kind,colour(kind,hex),Math.round(size*.66))+'</span>'}
function pin(kind,hex){if(storySymbols)return '<span class="ieat-story-pin">'+storyIcon(kind,hex,32)+'</span>';if(kind==='camera'&&!storySymbols)return '<span class="ieat-sq-pin ieat-cctv-pin" data-type="camera" aria-hidden="true"><span class="ieat-nm-btn">'+glyph('camera','#ffffff',27)+'</span><span class="ieat-nm-tail"></span></span>';if(kind==='water'&&!storySymbols)return waterCircle(hex,true);const crit=isCrit(hex);
 return '<span class="ieat-sq-pin'+(crit?' is-critical':'')+'" data-type="'+esc(kind)+'" aria-hidden="true"><span class="ieat-nm-btn">'+glyph(kind,colour(kind,hex),27)+'</span><span class="ieat-nm-tail"></span></span>'}
function cluster(kind,hex,count){const c=colour(kind,hex),n=Number(count)||0,txt=n>99?'99+':String(n);
 if(storySymbols)return storyIcon(kind,hex,43,txt);
 return '<span class="ieat-sq-cluster" data-type="'+esc(kind)+'"><span class="ieat-nm-btn" style="--nm-ring:'+c+'"><b style="color:'+c+';font-size:'+(txt.length>2?12:15)+'px">'+txt+'</b></span><span class="ieat-sq-cluster-kind">'+tile(kind,hex,20)+'</span></span>'}
window.IEAT_SQ={tile,pin,cluster,ink};
/* 85% frosted white; the drop shadow lives on the button itself (not a parent filter) so backdrop blur still sees the map. */
const BTN='background:radial-gradient(circle at 32% 26%,rgba(255,255,255,.85) 0%,rgba(255,255,255,.85) 38%,rgba(255,255,255,.85) 78%,rgba(255,255,255,.85) 100%)!important;-webkit-backdrop-filter:blur(6px) saturate(1.3);backdrop-filter:blur(6px) saturate(1.3);';
const SHADOW='0 2px 7px rgba(35,60,95,.18),';
const css=document.createElement('style');css.id='ieat-neumorphic-markers';css.textContent=`
html body .ieat-nm-btn{position:relative!important;display:grid!important;place-items:center!important;box-sizing:border-box!important;border-radius:50%!important;border:0!important;padding:0!important;margin:0!important;${BTN}box-shadow:${SHADOW}0 0 0 1px #e5ebf5!important}
html body .ieat-nm-glyph{display:block!important;filter:none!important}
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
html body .leaflet-marker-icon:hover .ieat-sq-pin,html body .maplibregl-marker:hover .ieat-sq-pin,html body .leaflet-marker-icon:focus-visible .ieat-sq-pin,html body .maplibregl-marker:focus-visible .ieat-sq-pin{transform:translateX(-50%)!important}
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

css.textContent+=`
html body .ieat-water-circle{display:inline-block!important;width:12px!important;height:12px!important;min-width:12px!important;border-radius:50%!important;background:var(--water-dot,#99d3f0)!important;border:1px solid color-mix(in srgb,var(--water-dot,#99d3f0),#26384c 40%)!important;box-sizing:border-box!important;box-shadow:none!important}
html body .ieat-water-circle.is-map-point{position:absolute!important;left:50%!important;bottom:0!important;transform:translate(-50%,50%)!important}
html body #mapLayers .layer-swatch[data-kind="water"]>*{display:none!important}
html body #mapLayers .layer-swatch[data-kind="water"]:after{content:""!important;display:block!important;width:12px!important;height:12px!important;box-sizing:border-box!important;border-radius:50%!important;background:#99d3f0!important;border:1px solid #639bbb!important}
html body .ieat-water-circle:before,html body .ieat-water-circle:after{content:none!important}
`;
css.textContent+=`
html body .ieat-cctv-pin.ieat-cctv-pin .ieat-nm-btn{background:#2f68f4!important;border:2px solid #fff!important;box-shadow:0 3px 9px #173b7040!important}
html body .ieat-cctv-pin.ieat-cctv-pin .ieat-nm-tail{border-top-color:#2f68f4!important}
html body .ieat-cctv-pin.ieat-cctv-pin .ieat-nm-glyph{width:27px!important;height:27px!important}
`;
if(storySymbols)css.textContent+=`
html body .ieat-story-symbol{display:inline-block!important;position:relative;width:var(--story-icon-size);height:var(--story-icon-size);line-height:1;vertical-align:middle}
html body .ieat-story-symbol svg{display:block!important;width:100%!important;height:100%!important;filter:drop-shadow(0 1px 1px #15202e45)!important}
html body .ieat-story-symbol b{position:absolute;right:-2px;bottom:1px;padding:1px 3px;border:1px solid #fff;border-radius:5px;background:#29333b;color:#fff;font:700 11px/1 Sarabun,sans-serif}
html body .ieat-story-pin,html body .estate-pin>.ieat-story-symbol{position:absolute;bottom:0;left:50%;transform:translateX(-50%)}
html body #mapLayers .layer-swatch[data-kind="water"] .ieat-story-symbol{display:inline-block!important}
html body #mapLayers .layer-swatch[data-kind="water"]:after{content:none!important}
`;
(document.head||document.documentElement).appendChild(css);
/* Inline <style> blocks later in <body> can still win; move ours to the very end once parsed. */
const last=()=>(document.body||document.head).appendChild(css);
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',last):last();
})();
