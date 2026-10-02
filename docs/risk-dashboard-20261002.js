(() => {
 'use strict';
 const base='https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/';
 const datasets=[
 {id:'estate',label:'ตำแหน่งนิคมฯ',path:'e_PP_2025/FeatureServer/1',names:['สำนักงานนิคมฯ'],estates:['สำนักงานนิคมฯ'],color:'#00b1c1'},
 {id:'hospital',label:'โรงพยาบาล',path:'Hospital_Locations/FeatureServer/0',names:['โรงพยาบาล'],estates:['นิคมอุตสาหกรรม'],color:'#d6083b'},
 {id:'fire',label:'สถานีดับเพลิง',path:'Risk_Map_WFL1/FeatureServer/3',names:['Name'],estates:['IEAT'],color:'#ea7125'},
 {id:'police',label:'สถานีตำรวจ',path:'Risk_Map_WFL1/FeatureServer/5',names:['Name'],estates:['IEAT'],color:'#0072cf'},
 {id:'community',label:'ชุมชน',path:'Map/FeatureServer/1',names:['Name'],estates:['IEAT'],color:'#55a51c'},
 {id:'hydrant',label:'หัวจ่ายน้ำ',path:'Risk_Map_WFL1/FeatureServer/4',names:['Name'],estates:['IEAT'],color:'#00b1c1'},
 {id:'cctv',label:'CCTV',path:'ตำแหน่งกล้องCCTV/FeatureServer/7',names:['Name'],estates:['IEAT'],color:'#8f2bbc'},
 {id:'business',label:'ผู้ประกอบการ',path:'ข้อมูลผู้ประกอบการ_e_PP/FeatureServer/0',names:['ชื่อบริษัทภาษาไทย','ชื่อบริษัทภาษาไทย_สั้','ชื่อบริษัทภาษาอังกฤษ','Name_Parcel_1'],estates:['นิคมอุตสาหกรรม'],color:'#0072cf'}
 ].map(d=>({...d,rows:[],status:'loading',total:null}));
 const riskFields=[{field:'ความเสี่ยง_12_ประเภท',label:'ความเสี่ยงสูง 12 ประเภท',short:'12 ประเภท',color:'#0072cf'},{field:'อัคคีภัยสูง',label:'ความเสี่ยงอัคคีภัยสูง',short:'อัคคีภัยสูง',color:'#ea7125'},{field:'PSM',label:'โรงงาน PSM',short:'PSM',color:'#8f2bbc'}];
 const $=id=>document.getElementById(id),number=n=>Number(n).toLocaleString('th-TH'),normalize=s=>String(s||'').toLowerCase().replace(/นิคมอุตสาหกรรม|นิคมฯ|สำนักงานนิคมฯ|\s+/g,'').trim();
 const pick=(a,fields)=>fields.map(f=>a[f]).find(v=>v!=null&&String(v).trim())||'—';
 const flagged=v=>String(v||'').trim()==='เข้าข่าย';
 const selected={estate:'',type:'',risk:'',query:''};let view,map,layerViews={},renderTimer,active=null,fallbackView=null;
 function el(tag,text,cls){const n=document.createElement(tag);if(text!=null)n.textContent=text;if(cls)n.className=cls;return n;}
 function filterRow(r,d,includeType=true){return (!selected.estate||normalize(r.estate)===selected.estate)&&(!includeType||!selected.type||d.id===selected.type)&&(!selected.risk||(d.id==='business'&&flagged(r.attrs[selected.risk])))&&(!selected.query||normalize(r.name+' '+r.estate+' '+r.registration).includes(selected.query));}
 function visibleRows(d,includeType=true){return d.rows.filter(r=>filterRow(r,d,includeType));}
 function updateOptions(){const names=new Map();datasets.forEach(d=>d.rows.forEach(r=>{if(r.estate!=='—')names.set(normalize(r.estate),r.estate)}));const old=$('estate').value;$('estate').replaceChildren(new Option('ทุกนิคมอุตสาหกรรม',''));[...names].sort((a,b)=>a[1].localeCompare(b[1],'th')).forEach(([key,label])=>$('estate').add(new Option(label,key)));$('estate').value=old;}
 function donut(hostId,entries,centerLabel){const host=$(hostId);host.replaceChildren();const total=entries.reduce((s,e)=>s+e.count,0),wrap=el('div',null,'donut-layout'),ring=el('div',null,'donut'),inside=el('div',null,'donut-inner');inside.append(el('strong',number(total)),el('span',centerLabel));ring.append(inside);let angle=0;const stops=entries.filter(e=>e.count).map(e=>{const start=angle;angle+=e.count/Math.max(total,1)*360;return e.color+' '+start+'deg '+angle+'deg'});ring.style.background=stops.length?'conic-gradient('+stops.join(',')+')':'#edf1f5';const legend=el('div',null,'chart-legend');entries.forEach(e=>{const line=el('div',null,'legend-row'),dot=el('i');dot.style.background=e.color;line.append(dot,el('span',e.label),el('b',number(e.count)));legend.append(line)});wrap.append(ring,legend);host.append(wrap);}
 function render(){updateOptions();$('inventory').replaceChildren();datasets.forEach(d=>{const card=el('button',null,'inventory-card'+(selected.type===d.id?' active':''));card.type='button';card.style.setProperty('--accent',d.color);const count=visibleRows(d,false).length;card.append(el('span',d.label),el('strong',d.status==='loading'?'…':d.status==='error'?'—':number(count)),el('small',d.status==='loading'?'กำลังโหลด':d.status==='error'?'เชื่อมต่อไม่ได้':d.status==='partial'?'ข้อมูลยังไม่ครบ':'รายการ'));card.onclick=()=>{$('type').value=selected.type===d.id?'':d.id;changed()};$('inventory').append(card)});
  const business=datasets.find(d=>d.id==='business'),rows=visibleRows(business),riskCounts=riskFields.map(f=>rows.filter(r=>flagged(r.attrs[f.field])).length),any=rows.filter(r=>riskFields.some(f=>flagged(r.attrs[f.field]))).length;
  $('riskTableBody').replaceChildren();riskFields.forEach((f,i)=>{const tr=el('tr');tr.append(el('td',f.label),el('td',business.status==='loading'?'…':business.status==='error'?'—':number(riskCounts[i])),el('td','เข้าข่าย','risk-pill'));tr.onclick=()=>{$('risk').value=selected.risk===f.field?'':f.field;changed()};$('riskTableBody').append(tr)});
  $('riskTotal').textContent=business.status==='loading'?'…':business.status==='error'?'—':number(any);$('riskUnmarked').textContent=business.status==='loading'?'…':business.status==='error'?'—':number(rows.length-any);
  donut('riskDonut',[{label:'ระบุเข้าข่ายอย่างน้อย 1 กลุ่ม',count:any,color:'#0072cf'},{label:'ไม่ได้ระบุเข้าข่าย',count:rows.length-any,color:'#55a51c'}],'รายการ');
  const supports=datasets.filter(d=>!['business','estate'].includes(d.id));donut('supportDonut',supports.map(d=>({label:d.label,count:visibleRows(d).length,color:d.color})),'จุดสนับสนุน');
  const byEstate=new Map();rows.forEach(r=>{const key=normalize(r.estate);if(!byEstate.has(key))byEstate.set(key,{name:r.estate,total:0,counts:[0,0,0]});const e=byEstate.get(key);e.total++;riskFields.forEach((f,i)=>{if(flagged(r.attrs[f.field]))e.counts[i]++})});
  const ranked=[...byEstate.values()].sort((a,b)=>Math.max(...b.counts)-Math.max(...a.counts)).slice(0,8),max=Math.max(1,...ranked.flatMap(e=>e.counts));$('riskBars').replaceChildren();$('matrixBody').replaceChildren();
  ranked.forEach(e=>{const row=el('div',null,'bar-row');row.append(el('span',e.name));const bars=el('div',null,'bar-tracks');riskFields.forEach((f,i)=>{const line=el('div',null,'bar-line'),track=el('div',null,'bar-track'),fill=el('i');fill.style.width=e.counts[i]/max*100+'%';fill.style.background=f.color;track.append(fill);line.append(track,el('small',number(e.counts[i])));bars.append(line)});row.append(bars);$('riskBars').append(row);
   const tr=el('tr');tr.append(el('th',e.name));e.counts.forEach(n=>{const td=el('td',number(n));td.style.background='rgba(0,114,207,'+(0.12+0.35*n/max)+')';td.style.color='#000';tr.append(td)});tr.append(el('td',number(e.total)));$('matrixBody').append(tr)});
  if(!ranked.length){$('riskBars').append(el('p',business.status==='loading'?'กำลังโหลดข้อมูลผู้ประกอบการ…':'ไม่มีข้อมูลตามตัวกรอง','empty'));}
  const items=datasets.flatMap(d=>visibleRows(d).map(r=>({d,r})));$('directory').replaceChildren();items.slice(0,150).forEach(({d,r})=>{const b=el('button',null,'directory-item');b.type='button';const dot=el('i');dot.style.background=d.color;b.append(dot,el('b',r.name),el('small',d.label+' · '+r.estate));b.onclick=()=>zoomRow(d,r,b);$('directory').append(b)});
  $('listCount').textContent=number(items.length)+' รายการ'+(items.length>150?' · แสดง 150 รายการแรก':'');if(!items.length)$('directory').append(el('p','ไม่พบข้อมูลตามตัวกรอง','empty'));
  if(business.status==='error'){['riskDonut','riskBars'].forEach(id=>$(id).replaceChildren(el('p','ไม่สามารถโหลดข้อมูลความเสี่ยงผู้ประกอบการ กรุณาลองโหลดใหม่','empty')));}
  applyMapFilters();
 }
 function schedule(){clearTimeout(renderTimer);renderTimer=setTimeout(render,120)}
 function applyMapFilters(){if(fallbackView&&fallbackView.refreshData)fallbackView.refreshData();datasets.forEach(d=>{if(!d.layer)return;d.layer.visible=!selected.type||selected.type===d.id;if(selected.risk&&d.id!=='business')d.layer.visible=false;const lv=layerViews[d.id];if(lv){lv.filter=(selected.estate||selected.query||selected.risk)?{objectIds:visibleRows(d).map(r=>r.id).concat([-1])}:null;}});}
 function changed(){selected.estate=$('estate').value;selected.type=$('type').value;selected.risk=$('risk').value;selected.query='';render();}
 async function zoomRow(d,r,button){if(fallbackView){try{const result=await json(base+encodeURI(d.path)+'/query',new URLSearchParams({f:'geojson',objectIds:String(r.id),outFields:(d.fields||[d.oid]).join(','),outSR:'4326',returnGeometry:'true'}));const feature=L.geoJSON(result).addTo(fallbackView);if(feature.getBounds().isValid())fallbackView.fitBounds(feature.getBounds(),{maxZoom:16});}catch(e){$('mapStatus').textContent='ไม่สามารถโหลดตำแหน่งนี้ได้';}return;}if(!view||!d.layer)return;if(active)active.classList.remove('active');active=button;button.classList.add('active');try{const result=await d.layer.queryFeatures({objectIds:[r.id],outFields:['*'],returnGeometry:true,outSpatialReference:{wkid:4326}});const f=result.features[0];if(!f||!f.geometry)throw Error('ไม่มีพิกัด');await view.goTo(f.geometry,{duration:600});if(view.zoom<14)view.zoom=14;view.openPopup({features:[f],location:f.geometry.type==='point'?f.geometry:f.geometry.extent.center});}catch(e){$('mapStatus').textContent='ไม่สามารถเปิดตำแหน่ง '+r.name+' ได้ กรุณาลองอีกครั้ง';}}
 async function json(url,body){let last;for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(url,{signal:AbortSignal.timeout(30000),...(body?{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:String(body)}:{})});if(!response.ok)throw Error('HTTP '+response.status);const value=await response.json();if(value.error)throw Error(value.error.message);return value;}catch(error){last=error;if(attempt<2)await new Promise(resolve=>setTimeout(resolve,600*(attempt+1)));}}throw last;}
 async function load(d){try{const url=base+encodeURI(d.path),meta=await json(url+'?f=json');d.meta=meta;d.oid=meta.objectIdField;const available=new Set(meta.fields.map(f=>f.name)),fields=[d.oid,...d.names,...d.estates,'เลขทะเบียนเดิม','เลขทะเบียนใหม่',...riskFields.map(f=>f.field)].filter((f,i,a)=>available.has(f)&&a.indexOf(f)===i);d.fields=fields;
   const idsResult=await json(url+'/query?f=json&where=1%3D1&returnIdsOnly=true');const ids=idsResult.objectIds||[];d.total=ids.length;
   for(let i=0;i<ids.length;i+=400){const pageIds=ids.slice(i,i+400),params=new URLSearchParams({f:'json',objectIds:pageIds.join(','),outFields:fields.join(','),returnGeometry:'false'});let page;try{page=await json(url+'/query',params);}catch(e){page=await json(url+'/query',params);}
    const seen=new Set(d.rows.map(r=>r.id));(page.features||[]).forEach(f=>{const a=f.attributes,id=a[d.oid];if(seen.has(id))return;seen.add(id);d.rows.push({id,attrs:a,name:String(pick(a,d.names)),estate:String(pick(a,d.estates)),registration:String(pick(a,['เลขทะเบียนใหม่','เลขทะเบียนเดิม']))})});schedule();}
   d.status=d.rows.length===ids.length?'ready':'partial';schedule();
  }catch(e){d.status=d.rows.length?'partial':'error';d.error=e.message;console.warn('Risk Map: '+d.label,e);schedule();}
 }
 datasets.forEach(d=>$('type').add(new Option(d.label,d.id)));$('estate').onchange=changed;$('type').onchange=changed;$('risk').onchange=changed;
 $('reset').onclick=()=>{['estate','type','risk'].forEach(id=>$(id).value='');changed();if(fallbackView)fallbackView.setView([14,101],6);else if(view)view.goTo({center:[101,14],zoom:6}).catch(()=>{});};
 $('refresh').onclick=()=>location.reload();$('basemap').onchange=()=>{if(map)map.basemap=$('basemap').value};
 document.querySelectorAll('.nav-tab').forEach(button=>button.onclick=()=>{document.querySelectorAll('.nav-tab').forEach(b=>b.classList.toggle('active',b===button));const page=button.dataset.page;$('riskDashboard').hidden=page!=='risk';$('otherPage').hidden=page==='risk';if(page!=='risk'){const paths={flood:'./flood-report.html',drought:'./drought.html',pm25:'./pm25.html'};if($('otherFrame').getAttribute('src')!==paths[page])$('otherFrame').src=paths[page];}});
 render();(async()=>{let next=0;async function worker(){while(next<datasets.length)await load(datasets[next++]);}await Promise.allSettled([worker(),worker(),worker()]);})();

 async function fallbackMap(){
  if(fallbackView)return;try{
   try{view.destroy()}catch(e){}$('map').replaceChildren();
   const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.append(css);
   if(!window.L)await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';script.onload=resolve;script.onerror=reject;document.head.append(script)});
   fallbackView=L.map('map').setView([14,101],6);
   const gray=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',{attribution:'Tiles © Esri',maxZoom:18}).addTo(fallbackView);
   const groups={};datasets.forEach(d=>groups[d.label]=L.layerGroup().addTo(fallbackView));L.control.layers({'แผนที่สีเทา':gray},groups).addTo(fallbackView);
   let busy=false,pending=false;
   async function draw(){if(busy){pending=true;return}busy=true;pending=false;const bounds=fallbackView.getBounds();
    for(const d of datasets){if(!d.meta)continue;const group=groups[d.label];group.clearLayers();if(selected.type&&selected.type!==d.id)continue;if(selected.risk&&d.id!=='business')continue;
     const matched=visibleRows(d).map(r=>r.id);if((selected.estate||selected.query||selected.risk)&&!matched.length)continue;
     const params=new URLSearchParams({f:'geojson',where:'1=1',outFields:(d.fields||[d.oid]).join(','),returnGeometry:'true',outSR:'4326',geometry:JSON.stringify({xmin:bounds.getWest(),ymin:bounds.getSouth(),xmax:bounds.getEast(),ymax:bounds.getNorth(),spatialReference:{wkid:4326}}),geometryType:'esriGeometryEnvelope',inSR:'4326',spatialRel:'esriSpatialRelIntersects',resultRecordCount:'300'});
     if(selected.estate||selected.query||selected.risk)params.set('objectIds',matched.join(','));
     try{const result=await json(base+encodeURI(d.path)+'/query',params);L.geoJSON(result,{style:{color:d.color,weight:1,fillOpacity:.25},pointToLayer:(feature,latlng)=>L.circleMarker(latlng,{radius:5,color:'#fff',weight:1,fillColor:d.color,fillOpacity:.9}),onEachFeature:(feature,layer)=>{const a=feature.properties||{},box=el('div');box.append(el('b',String(pick(a,d.names))),el('p',d.label+' · '+pick(a,d.estates)));riskFields.forEach(f=>{if(flagged(a[f.field]))box.append(el('p',f.label+' · เข้าข่าย'))});layer.bindPopup(box)}}).addTo(group);}catch(e){console.warn('Risk Map fallback '+d.label,e)}
    }busy=false;$('mapStatus').textContent='แผนที่รองรับอุปกรณ์ที่ไม่มี WebGL · แสดงสูงสุด 300 รายการต่อชั้นในมุมมองนี้ ซูมเพื่อดูพื้นที่ย่อย';if(pending)draw();
   }
   let debounce;fallbackView.refreshData=()=>{clearTimeout(debounce);debounce=setTimeout(draw,500)};
   $('basemap').onchange=()=>{const names={'gray-vector':'World_Light_Gray_Base','streets-vector':'World_Street_Map','satellite':'World_Imagery','topo-vector':'World_Topo_Map'};gray.setUrl('https://server.arcgisonline.com/ArcGIS/rest/services/'+names[$('basemap').value]+'/MapServer/tile/{z}/{y}/{x}');};
   fallbackView.on('moveend',()=>{clearTimeout(debounce);debounce=setTimeout(draw,400)});
   const timer=setInterval(()=>{if(datasets.every(d=>d.status!=='loading')){clearInterval(timer);draw();}},1000);draw();
   document.querySelectorAll('#estate,#type,#risk,#search,#reset').forEach(control=>control.addEventListener(control.id==='search'?'input':'change',()=>{clearTimeout(debounce);debounce=setTimeout(draw,500)}));$('reset').addEventListener('click',draw);
  }catch(e){$('mapStatus').textContent='โหลดแผนที่ไม่สำเร็จ กรุณารีเฟรช';}
 }

 require(['esri/Map','esri/views/MapView','esri/layers/FeatureLayer','esri/widgets/LayerList','esri/widgets/Legend','esri/widgets/Expand'],(Map,MapView,FeatureLayer,LayerList,Legend,Expand)=>{
  map=new Map({basemap:'gray-vector'});view=new MapView({container:'map',map,center:[101,14],zoom:6,popup:{dockEnabled:true,dockOptions:{position:'bottom-right',buttonEnabled:false}}});
  datasets.forEach(d=>{d.layer=new FeatureLayer({url:base+encodeURI(d.path),title:d.label,outFields:['*']});map.add(d.layer);view.whenLayerView(d.layer).then(lv=>{layerViews[d.id]=lv;applyMapFilters()}).catch(()=>{});});
  view.ui.add(new Expand({view,content:new LayerList({view}),expandTooltip:'ชั้นข้อมูล'}),'top-right');view.ui.add(new Expand({view,content:new Legend({view}),expandTooltip:'คำอธิบายสัญลักษณ์'}),'bottom-left');
  view.when(()=>$('mapStatus').textContent='แผนที่จาก 8 ชั้นข้อมูล Risk Map กนอ.').catch(()=>fallbackMap());
 });
})();