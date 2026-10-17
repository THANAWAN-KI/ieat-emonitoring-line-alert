/* Numbered reference locations and meteorological wind direction for the field brief. */
(function(){
 const overlays=new WeakMap();
 window.ieatUpdateFieldMap=function(map,data,options={}){
  if(!map||!window.L)return;
  let view=overlays.get(map);
  if(!view){
   const wind=document.createElement('div');wind.className='field-report-wind';wind.setAttribute('aria-live','polite');
   map.getContainer().append(wind);L.DomEvent.disableClickPropagation(wind);L.DomEvent.disableScrollPropagation(wind);
   view={layer:L.layerGroup().addTo(map),wind,key:'',fitKey:''};overlays.set(map,view);
  }
  const points=(data.points||[]).filter(p=>Number.isFinite(p.lat)&&Number.isFinite(p.lng));
  const key=JSON.stringify(points.map(p=>[p.number,p.lat,p.lng,p.name,p.status]));
  if(view.key!==key){
   view.layer.clearLayers();view.key=key;
   points.forEach(p=>{
    const badge=document.createElement('span');badge.className='field-reference-number'+(p.status==='ready'?' field-reference-ready':'');badge.textContent=String(p.number);
    const marker=L.marker([p.lat,p.lng],{zIndexOffset:3500,icon:L.divIcon({className:'field-reference-marker',html:badge.outerHTML,iconSize:[28,28],iconAnchor:[14,14]})});
    const label=document.createElement('div');label.textContent=p.number+'. '+p.label+' · '+p.name+' · '+Number(p.distance).toFixed(2)+' กม.';
    marker.bindTooltip(label,{direction:'top'}).bindPopup(label.cloneNode(true)).addTo(view.layer);
   });
  }
  const positionKey=JSON.stringify([data.lat,data.lng,points.map(p=>[p.lat,p.lng])]);
  if(options.fit!==false&&points.length&&(options.forceFit||view.fitKey!==positionKey)&&Number.isFinite(data.lat)&&Number.isFinite(data.lng)){
   view.fitKey=positionKey;map.invalidateSize();
   map.fitBounds(L.latLngBounds([[data.lat,data.lng],...points.map(p=>[p.lat,p.lng])]),{padding:[40,50],maxZoom:15,animate:false});
  }
  view.wind.replaceChildren();
  const speed=Number(data.windSpeed),from=Number(data.windDeg),known=data.windSpeed!==''&&data.windSpeed!=='—'&&Number.isFinite(speed)&&Number.isFinite(from);
  const title=document.createElement('strong');title.textContent='ทิศทางลม';view.wind.append(title);
  if(known&&speed>0){
   const to=((from+180)%360+360)%360,arrow=document.createElement('span');arrow.className='field-wind-arrow';arrow.textContent='↑';arrow.style.transform='rotate('+to+'deg)';arrow.setAttribute('aria-label','ลูกศรชี้ทิศที่ลมพัดไป');view.wind.append(arrow);
   const label=document.createElement('div');label.textContent='พัดจาก '+(data.windDir||from+'°')+' → '+['เหนือ','ตะวันออกเฉียงเหนือ','ตะวันออก','ตะวันออกเฉียงใต้','ใต้','ตะวันตกเฉียงใต้','ตะวันตก','ตะวันตกเฉียงเหนือ'][Math.round(to/45)%8];view.wind.append(label);
   const reading=document.createElement('div');reading.textContent=speed+' กม./ชม. · ลูกศรชี้ทิศที่ลมพัดไป';view.wind.append(reading);
  }else{
   const label=document.createElement('div');label.textContent=known?'ลมสงบ (0 กม./ชม.)':'ยังไม่มีข้อมูลลม';view.wind.append(label);
  }
  const time=document.createElement('small');time.textContent=data.weatherTime||'ยังไม่มีเวลาอากาศ';view.wind.append(time);
 };
})();
