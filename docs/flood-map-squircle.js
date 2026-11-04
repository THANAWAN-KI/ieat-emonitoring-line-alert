/* Squircle gradient map markers for the flood hydrology map.
   IEAT_SQ.pin(kind, hex)            -> marker with pointer tail (tip = bottom centre)
   IEAT_SQ.tile(kind, hex, size)     -> tile only (legends / swatches)
   IEAT_SQ.cluster(kind, hex, count) -> stacked cluster tile with count (centre anchor) */
(()=>{'use strict';
const KNOWN={
 '#674188':['#A274E0','#5B2C93','#fff'],'#7541a3':['#A274E0','#5B2C93','#fff'],
 '#21ad02':['#4BE07A','#119A35','#fff'],
 '#ebe700':['#FFE869','#E2B800','#5C4600'],'#ffd16a':['#FFE08A','#E8A912','#5C4600'],
 '#f09b4d':['#FFB867','#EA6B12','#fff'],'#cf6b08':['#FFA552','#C9570A','#fff'],
 '#b30707':['#FF6B6B','#B9101A','#fff'],
 '#e5e7eb':['#D3D9DE','#8A96A0','#fff'],'#c3acd0':['#D9CBE3','#9A84AC','#fff'],
 '#99d3f0':['#9EE0FF','#3D9BD6','#fff'],'#99f0e7':['#8FF0E4','#1FA99A','#fff'],
 '#2196f3':['#62C0FF','#1A5FDB','#fff'],'#2677ca':['#62C0FF','#1A5FDB','#fff'],
 '#d58b1a':['#FFCB6B','#D17E0C','#fff'],'#089a9b':['#4FE0D6','#08909A','#fff'],
 '#8064c6':['#A991F0','#5B3FB8','#fff'],'#647887':['#A8B6C1','#5B6B78','#fff']};
const KIND={estate:'#674188',water:'#2677ca',canal:'#089a9b',dam:'#d58b1a',camera:'#2196f3',rain:'#2677ca',pump:'#089a9b',storage:'#8064c6',protection:'#21ad02'};
const hexRgb=h=>{h=h.replace('#','');if(h.length===3)h=h.replace(/./g,c=>c+c);const n=parseInt(h,16);return [n>>16&255,n>>8&255,n&255]};
const mix=(h,t,a)=>'#'+hexRgb(h).map((v,i)=>Math.round(v+(t[i]-v)*a).toString(16).padStart(2,'0')).join('');
function theme(hex){
 hex=String(hex||'').trim().toLowerCase();if(!/^#[0-9a-f]{3,6}$/.test(hex))return null;
 if(KNOWN[hex])return KNOWN[hex];
 const [r,g,b]=hexRgb(hex),lum=(.299*r+.587*g+.114*b)/255;
 return [mix(hex,[255,255,255],.3),mix(hex,[0,0,0],.2),lum>.72?mix(hex,[0,0,0],.62):'#fff'];
}
const GL={
 estate:c=>'<path d="M3 21V11.2l5 3v-3l5 3v-3l5 3V3.5h3V21Z" fill="'+c+'"/><rect x="5.3" y="16.5" width="2" height="2" rx=".4" fill="#000" opacity=".18"/><rect x="10.3" y="16.5" width="2" height="2" rx=".4" fill="#000" opacity=".18"/><rect x="15.3" y="16.5" width="2" height="2" rx=".4" fill="#000" opacity=".18"/>',
 water:c=>'<path d="M12 2.2C9.6 5.6 6.8 8.7 6.8 12a5.2 5.2 0 0 0 10.4 0c0-3.3-2.8-6.4-5.2-9.8Z" fill="'+c+'"/><path d="M9.3 12.6a2.8 2.8 0 0 0 2.4 2.6" stroke="#000" stroke-opacity=".16" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M2.5 20.2c1.6-1.3 3.2 1.3 4.8 0s3.2 1.3 4.8 0 3.2 1.3 4.8 0 3.2 1.3 4.6 0" stroke="'+c+'" stroke-width="1.9" fill="none" stroke-linecap="round"/>',
 dam:c=>'<path d="M2.5 3h7l4.5 18h-11.5Z" fill="'+c+'"/><path d="M5.2 7.5h4.9M5.2 12h6M5.2 16.5h7.1" stroke="#000" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/><path d="M14.6 8.5c2-1.4 4 1.4 6.4 0M15.7 13c1.8-1.3 3.6 1.3 5.3 0M16.8 17.5c1.5-1.1 3 1.1 4.2 0" stroke="'+c+'" stroke-width="2.3" fill="none" stroke-linecap="round"/>',
 canal:c=>'<path d="M3.5 3.5 6.6 20.5M20.5 3.5l-3.1 17" stroke="'+c+'" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M7.4 8.6c1.5-1.2 3.1 1.2 4.6 0s3.1 1.2 4.6 0M8 13.4c1.3-1.1 2.7 1.1 4 0s2.7 1.1 4 0M8.6 18.2c1.1-.9 2.3.9 3.4 0s2.3.9 3.4 0" stroke="'+c+'" stroke-width="2" fill="none" stroke-linecap="round"/>',
 camera:c=>'<rect x="2.5" y="6.5" width="13" height="11" rx="3" fill="'+c+'"/><path d="m16.5 10.8 5-3v8.4l-5-3Z" fill="'+c+'"/><circle cx="6.6" cy="10.5" r="1.4" fill="#000" opacity=".2"/>',
 rain:c=>'<path d="M7 14.5a4 4 0 0 1-.6-8A6 6 0 0 1 17.6 7.6a3.5 3.5 0 0 1 .4 6.9Z" fill="'+c+'"/><path d="M8 18l-1 2.5M12.5 18l-1 2.5M17 18l-1 2.5" stroke="'+c+'" stroke-width="1.9" stroke-linecap="round"/>',
 pump:c=>'<rect x="4" y="9" width="11" height="12" rx="2.5" fill="'+c+'"/><path d="M15 13h4.5a1.5 1.5 0 0 1 1.5 1.5V19M9.5 9V4.5h5" stroke="'+c+'" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="15" r="2" fill="#000" opacity=".18"/>',
 storage:c=>'<path d="M3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" fill="'+c+'"/><path d="M12 2.5S9 5.6 9 7.4a3 3 0 0 0 6 0C15 5.6 12 2.5 12 2.5Z" fill="'+c+'"/><path d="M5 15c2-1.3 4.7 1.3 7 0s4.7 1.3 7 0" stroke="#000" stroke-opacity=".18" stroke-width="1.4" fill="none" stroke-linecap="round"/>',
 protection:c=>'<path d="m12 2.5 8 3v6c0 4.8-3.6 8-8 10.5-4.4-2.5-8-5.7-8-10.5v-6Z" fill="'+c+'"/><path d="m8.3 12 2.6 2.6 4.8-5" stroke="#000" stroke-opacity=".22" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'};
let seq=0;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
function defs(id,t){return '<defs><linearGradient id="'+id+'g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+t[0]+'"/><stop offset="1" stop-color="'+t[1]+'"/></linearGradient><linearGradient id="'+id+'h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient><filter id="'+id+'s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy=".8" stdDeviation=".7" flood-color="#000" flood-opacity=".22"/></filter></defs>'}
function face(id,t,x,y,s,inner){const r=s*.28;return '<rect x="'+x+'" y="'+y+'" width="'+s+'" height="'+s+'" rx="'+r+'" fill="url(#'+id+'g)"/><rect x="'+x+'" y="'+y+'" width="'+s+'" height="'+s+'" rx="'+r+'" fill="url(#'+id+'h)"/><rect x="'+(x+.6)+'" y="'+(y+.6)+'" width="'+(s-1.2)+'" height="'+(s-1.2)+'" rx="'+(r-.6)+'" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1"/>'+inner}
function glyph(kind,t,x,y,s,id){const g=GL[kind]||GL.water,k=s*.64/24,o=(s-24*k)/2;return '<g transform="translate('+(x+o)+' '+(y+o)+') scale('+k+')" filter="url(#'+id+'s)">'+g(t[2])+'</g>'}
function pick(kind,hex){return theme(hex)||theme(KIND[kind]||'#2677ca')}
function tile(kind,hex,size){const t=pick(kind,hex),id='iqs'+(seq++);size=size||28;
 return '<svg class="ieat-sq-svg" width="'+size+'" height="'+size+'" viewBox="0 0 36 36" aria-hidden="true" focusable="false">'+defs(id,t)+face(id,t,0,0,36,glyph(kind,t,0,0,36,id))+'</svg>'}
function pin(kind,hex,opts){opts=opts||{};const t=pick(kind,hex),id='iqs'+(seq++),crit=String(hex||'').toLowerCase()==='#b30707';
 const ring=crit?'<rect class="ieat-sq-alert" x=".8" y=".8" width="38.4" height="38.4" rx="12" fill="none" stroke="#FF3B3B" stroke-width="1.6"/>':'';
 return '<span class="ieat-sq-pin'+(crit?' is-critical':'')+'" data-type="'+esc(kind)+'" aria-hidden="true"><svg class="ieat-sq-svg" width="40" height="48" viewBox="0 0 40 48" focusable="false">'+defs(id,t)+'<ellipse cx="20" cy="46.6" rx="5" ry="1.4" fill="#1d2a33" opacity=".28"/><path d="M14.5 37.5h11L20 45.5Z" fill="'+t[1]+'"/>'+ring+face(id,t,2,2,36,glyph(kind,t,2,2,36,id))+'</svg></span>'}
function cluster(kind,hex,count){const t=pick(kind,hex),id='iqs'+(seq++),n=Number(count)||0,txt=n>99?'99+':String(n);
 return '<span class="ieat-sq-cluster" data-type="'+esc(kind)+'"><svg class="ieat-sq-svg" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" focusable="false">'+defs(id,t)+'<rect x="8" y="3" width="32" height="32" rx="9" fill="'+t[1]+'" opacity=".45" transform="rotate(8 24 19)"/>'+face(id,t,3,7,34,'<text x="20" y="'+(txt.length>2?29.5:30.5)+'" text-anchor="middle" font-family="Sarabun,Tahoma,sans-serif" font-weight="700" font-size="'+(txt.length>2?12:15)+'" fill="'+t[2]+'">'+txt+'</text>')+'</svg><span class="ieat-sq-cluster-kind">'+tile(kind,hex,16)+'</span></span>'}
window.IEAT_SQ={tile,pin,cluster,theme};
const css=document.createElement('style');css.id='ieat-squircle-markers';css.textContent=`
html body .ieat-sq-pin{position:absolute!important;left:50%!important;bottom:0!important;transform:translateX(-50%)!important;display:block!important;width:40px!important;height:48px!important;margin:0!important;padding:0!important;background:none!important;border:0!important;box-shadow:none!important;filter:drop-shadow(0 3px 4px rgba(20,32,44,.26))!important;pointer-events:auto;transition:transform .15s ease}
html body .ieat-sq-pin .ieat-sq-svg{display:block!important;width:40px!important;height:48px!important;overflow:visible}
html body .ieat-sq-svg *{visibility:visible!important}
html body .ieat-sq-pin:after,html body .ieat-sq-pin:before{content:none!important;display:none!important}
html body .leaflet-marker-icon:hover .ieat-sq-pin,html body .maplibregl-marker:hover .ieat-sq-pin,html body .leaflet-marker-icon:focus-visible .ieat-sq-pin,html body .maplibregl-marker:focus-visible .ieat-sq-pin{transform:translateX(-50%) translateY(-3px) scale(1.06)!important}
html body .ieat-sq-pin.is-critical .ieat-sq-alert{animation:ieatSqPulse 1.6s ease-in-out infinite;transform-origin:20px 20px}
@keyframes ieatSqPulse{0%,100%{opacity:.85}50%{opacity:.25}}
@media (prefers-reduced-motion:reduce){html body .ieat-sq-pin.is-critical .ieat-sq-alert{animation:none}}
html body .estate-pin.has-sq,html body .flood-data-pin.has-sq,html body .prep-anchor .has-sq{width:40px!important;height:48px!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;filter:none!important;overflow:visible!important;padding:0!important}
html body .leaflet-marker-icon.estate-pin.has-sq,html body .leaflet-marker-icon.flood-data-pin.has-sq{margin-left:-20px!important;margin-top:-48px!important}
html body .estate-pin.has-sq .estate-name{top:50px!important}
html body .flood-data-pin.has-sq .fd-pin-name{top:50px!important}
html body .ieat-sq-cluster{position:relative!important;display:block!important;width:44px!important;height:44px!important;filter:drop-shadow(0 3px 4px rgba(20,32,44,.28))}
html body .ieat-sq-cluster .ieat-sq-svg{display:block!important;width:44px!important;height:44px!important}
html body .ieat-sq-cluster-kind{position:absolute!important;right:-4px;bottom:-2px;width:18px;height:18px;border-radius:6px;background:#fff;padding:1px;box-shadow:0 1px 3px rgba(0,0,0,.25)}
html body .ieat-sq-cluster-kind .ieat-sq-svg{width:16px!important;height:16px!important}
html body .flood-point-cluster.has-sq{width:44px!important;height:44px!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;padding:0!important;cursor:pointer}
html body .leaflet-marker-icon.flood-point-cluster.has-sq{margin-left:-22px!important;margin-top:-22px!important}
html body .prep-feature button:has(.ieat-sq-pin){position:relative!important;width:40px!important;height:48px!important;background:transparent!important;border:0!important;padding:0!important;box-shadow:none!important}
`;
(document.head||document.documentElement).appendChild(css);
/* Inline <style> blocks later in <body> can still win; move ours to the very end once parsed. */
const last=()=>(document.body||document.head).appendChild(css);
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',last):last();
})();
