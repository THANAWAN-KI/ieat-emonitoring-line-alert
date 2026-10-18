/* Numbered reference locations and meteorological wind direction for the field brief. */
(function(){
 const overlays=new WeakMap();
 function layoutReferences(map,view){
  view.lines.clearLayers();const used=[],size=map.getSize();
  view.markers.forEach(({point,marker})=>{
   const at=map.latLngToContainerPoint([point.lat,point.lng]);
   if(at.x<0||at.y<0||at.x>size.x||at.y>size.y){marker.setLatLng([point.lat,point.lng]);return}
   const offsets=[[0,0],[34,0],[-34,0],[0,-34],[0,34],[34,-34],[-34,-34],[34,34],[-34,34],[68,0],[-68,0],[0,-68],[0,68]];
   const offset=offsets.find(([dx,dy])=>at.x+dx>18&&at.x+dx<size.x-18&&at.y+dy>18&&at.y+dy<size.y-18&&!used.some(p=>Math.abs(p.x-at.x-dx)<32&&Math.abs(p.y-at.y-dy)<32))||[0,0];
   const badge=L.point(at.x+offset[0],at.y+offset[1]);used.push(badge);
   const target=map.containerPointToLatLng(badge);marker.setLatLng(target);
   if(offset[0]||offset[1]){
    L.polyline([[point.lat,point.lng],target],{color:'#8B1E2D',weight:1.5,opacity:1,interactive:false}).addTo(view.lines);
    L.circleMarker([point.lat,point.lng],{radius:3,color:'#fff',weight:1,fillColor:'#8B1E2D',fillOpacity:1,interactive:false}).addTo(view.lines);
   }
  });
 }
 window.ieatUpdateFieldMap=function(map,data,options={}){
  if(!map||!window.L)return;
  let view=overlays.get(map);
  if(!view){
   const wind=document.createElement('div');wind.className='field-report-wind';wind.style.cssText='right:12px;bottom:42px;left:auto;top:auto';wind.setAttribute('aria-live','polite');
   map.getContainer().append(wind);L.DomEvent.disableClickPropagation(wind);L.DomEvent.disableScrollPropagation(wind);
   view={layer:L.layerGroup().addTo(map),lines:L.layerGroup().addTo(map),markers:[],wind,key:'',fitKey:''};overlays.set(map,view);map.on('zoomend moveend',()=>layoutReferences(map,view));
  }
  const points=(data.points||[]).filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng));
  const key=JSON.stringify(points.map(p=>[p.number,p.lat,p.lng,p.name,p.status]));
  if(view.key!==key){
   view.layer.clearLayers();view.markers=[];view.key=key;
   points.forEach(p=>{
    const badge=document.createElement('span');badge.className='field-reference-number'+(p.status==='ready'?' field-reference-ready':'');badge.textContent=String(p.number);
    const marker=L.marker([p.lat,p.lng],{zIndexOffset:3500,icon:L.divIcon({className:'field-reference-marker',html:badge.outerHTML,iconSize:[28,28],iconAnchor:[14,14]})});
    const label=document.createElement('div');label.textContent=p.number+'. '+p.label+' · '+p.name+' · '+Number(p.distance).toFixed(2)+' กม.';
    marker.bindTooltip(label,{direction:'top'}).bindPopup(label.cloneNode(true)).addTo(view.layer);view.markers.push({point:p,marker});
   });
  }
  const positionKey=JSON.stringify([data.lat,data.lng,points.map(p=>[p.lat,p.lng])]);
  if(options.fit!==false&&points.length&&(options.forceFit||view.fitKey!==positionKey)&&Number.isFinite(data.lat)&&Number.isFinite(data.lng)){
   view.fitKey=positionKey;map.invalidateSize();
   map.fitBounds(L.latLngBounds([[data.lat,data.lng],...points.map(p=>[p.lat,p.lng])]),{padding:[40,50],maxZoom:15,animate:false});
  }
  layoutReferences(map,view);
  view.wind.replaceChildren();
  const speed=Number(data.windSpeed),from=Number(data.windDeg),known=data.windSpeed!==''&&data.windSpeed!=='—'&&Number.isFinite(speed)&&Number.isFinite(from);
  const title=document.createElement('strong');title.textContent='ทิศทางลม (พัดไป)';view.wind.append(title);
  if(known&&speed>0){
   const to=((from+180)%360+360)%360,arrow=document.createElement('span');arrow.className='field-wind-arrow';arrow.textContent='↑';arrow.style.transform='rotate('+to+'deg)';arrow.setAttribute('aria-label','ลูกศรชี้ทิศที่ลมพัดไป');view.wind.append(arrow);
   const label=document.createElement('div');label.textContent='พัดจาก '+(data.windDir||from+'°')+' → '+['เหนือ','ตะวันออกเฉียงเหนือ','ตะวันออก','ตะวันออกเฉียงใต้','ใต้','ตะวันตกเฉียงใต้','ตะวันตก','ตะวันตกเฉียงเหนือ'][Math.round(to/45)%8];view.wind.append(label);
   const reading=document.createElement('div');reading.textContent='ความเร็ว '+speed+' กม./ชม.';view.wind.append(reading);
  }else{
   const label=document.createElement('div');label.textContent=known?'ลมสงบ (0 กม./ชม.)':'ไม่พบข้อมูล';view.wind.append(label);
  }
  const time=document.createElement('small');time.textContent=data.weatherTime||'ไม่พบข้อมูล';view.wind.append(time);layoutReferences(map,view);
 };
})();
