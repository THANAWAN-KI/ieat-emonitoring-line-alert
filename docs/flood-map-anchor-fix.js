/* IEAT Flood map marker-anchor correction.
   Never replace the transform applied by MapLibre or Leaflet for map projection. */
(()=>{
 'use strict';
 if(window.__ieatMapMarkerAnchors)return;
 window.__ieatMapMarkerAnchors=true;
 const stylesheet=document.createElement('style');
 stylesheet.id='ieatMapMarkerAnchorStyles';
 stylesheet.textContent=`
 /* Map engines must keep control of the projected element's absolute position. */
 #mapStage .maplibregl-marker.estate-pin,
 #mapStage .maplibregl-marker.flood-data-pin,
 #mapStage .maplibregl-marker.watch-data-glyph,
 #mapStage .maplibregl-marker.sensor-marker,
 #mapStage .maplibregl-marker.marker-icon,
 #mapStage .leaflet-marker-icon.estate-pin,
 #mapStage .leaflet-marker-icon.flood-data-pin,
 #mapStage .leaflet-marker-icon.sensor-marker,
 #mapStage .leaflet-marker-icon.marker-icon{
  position:absolute!important;
  box-sizing:border-box!important;
 }
 /* The special watch icons currently use a MapLibre CENTER anchor.
    Shift the icon within its own box so its base rests on the actual coordinate.
    CSS translate is additive and leaves the library's transform untouched. */
 #mapStage .maplibregl-marker.watch-data-glyph.ieat-watch-rain-marker{
  translate:0 -32px!important;
 }
 #mapStage .maplibregl-marker.watch-data-glyph.ieat-watch-water-marker{
  translate:0 -21px!important;
 }
 #mapStage .maplibregl-marker.estate-pin{translate:none!important}
 @media(prefers-reduced-motion:reduce){
  #mapStage .maplibregl-marker,#mapStage .leaflet-marker-icon{
   animation:none!important;
  }
 }
 `;
 function mount(){
  const stage=document.getElementById('mapStage');
  if(!stage)return false;
  if(!document.getElementById(stylesheet.id))document.head.appendChild(stylesheet);
  let queued=false;
  const correct=()=>{
   queued=false;
   for(const el of stage.querySelectorAll('.leaflet-marker-icon')){
    const glyph=el.querySelector('.watch-data-glyph');
    if(glyph){
     const rain=glyph.classList.contains('ieat-watch-rain-marker');
     const left=rain?-27:-21, top=rain?-64:-42, width=rain?54:42, height=rain?64:42;
     if(el.style.getPropertyValue('margin-left')!==left+'px'||el.style.getPropertyPriority('margin-left')!=='important')
      el.style.setProperty('margin-left',left+'px','important');
     if(el.style.getPropertyValue('margin-top')!==top+'px'||el.style.getPropertyPriority('margin-top')!=='important')
      el.style.setProperty('margin-top',top+'px','important');
     if(el.style.getPropertyValue('width')!==width+'px')el.style.setProperty('width',width+'px','important');
     if(el.style.getPropertyValue('height')!==height+'px')el.style.setProperty('height',height+'px','important');
     continue;
    }
    // Leaflet puts a pixel anchor into the style attribute. Legacy CSS used
    // margin:0!important, which nullified that anchor and shifted pins on iPad.
    for(const prop of ['margin-left','margin-top']){
     const value=el.style.getPropertyValue(prop);
     if(value&&el.style.getPropertyPriority(prop)!=='important')
       el.style.setProperty(prop,value,'important');
    }
   }
  };
  const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(correct)}};
  new MutationObserver(schedule).observe(stage,{childList:true,subtree:true});
  schedule();
  document.addEventListener('ieat-map-ready',schedule);
  return true;
 }
 if(!mount()){
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});
  else new MutationObserver((_,o)=>{if(mount())o.disconnect()}).observe(document.documentElement,{childList:true,subtree:true});
 }
})();
