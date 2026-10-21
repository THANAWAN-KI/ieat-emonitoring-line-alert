(() => {
 'use strict';
 const webmapId='9c25f3f77ba5481cb481b402177884c2',portalUrl='https://ieat.maps.arcgis.com';
 const base='https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/';
 const datasets=[
 {id:'estate',label:'นิคมอุตสาหกรรม / ท่าเรือฯ',path:'e_PP_2025/FeatureServer/1',names:['สำนักงานนิคมฯ'],estates:['สำนักงานนิคมฯ'],color:'#00b1c1'},
 {id:'hospital',label:'โรงพยาบาล',path:'Hospital_Locations/FeatureServer/0',names:['โรงพยาบาล'],estates:['นิคมอุตสาหกรรม'],color:'#d6083b'},
 {id:'fire',label:'สถานีดับเพลิง',path:'Risk_Map_WFL1/FeatureServer/3',names:['Name'],estates:['IEAT'],color:'#ea7125'},
 {id:'police',label:'สถานีตำรวจ',path:'Risk_Map_WFL1/FeatureServer/5',names:['Name'],estates:['IEAT'],color:'#0072cf'},
 {id:'community',label:'ชุมชน',path:'Map/FeatureServer/1',names:['Name'],estates:['IEAT'],color:'#55a51c'},
 {id:'hydrant',label:'หัวจ่ายน้ำ',path:'Risk_Map_WFL1/FeatureServer/4',names:['Name'],estates:['IEAT'],color:'#00b1c1'},
 {id:'cctv',label:'CCTV',path:'ตำแหน่งกล้องCCTV/FeatureServer/7',names:['Name'],estates:['IEAT'],color:'#8f2bbc'},
 {id:'business',label:'ผู้ประกอบการ',where:'ชื่อบริษัทภาษาไทย IS NOT NULL',path:'ข้อมูลผู้ประกอบการ_e_PP/FeatureServer/0',names:['ชื่อบริษัทภาษาไทย','ชื่อบริษัทภาษาไทย_สั้','ชื่อบริษัทภาษาอังกฤษ','Name_Parcel_1'],estates:['นิคมอุตสาหกรรม'],color:'#0072cf'}
 ].map(d=>({...d,rows:[],status:'loading',total:null}));
 const cardIcons={"estate":"<svg viewBox=\"0 0 508 508\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#BC3F2C\" d=\"M253.6,161.2c42.8,0,77.6-34.8,77.6-77.6c0-42.8-34.8-77.6-77.6-77.6S176,40.8,176,83.6C176,126.4,210.8,161.2,253.6,161.2z\"/><path d=\"M253.6,167.2c-46,0-83.6-37.6-83.6-83.6S207.6,0,253.6,0s83.6,37.6,83.6,83.6S299.6,167.2,253.6,167.2z M253.6,8C212,8,178,42,178,83.6s34,75.6,75.6,75.6s75.6-34,75.6-75.6S295.2,8,253.6,8z\"/><path d=\"M253.6,438c-2.4,0-4-1.6-4-4V166c0-2.4,1.6-4,4-4s4,1.6,4,4v268C257.6,436.4,256,438,253.6,438z M305.6,88.4c-2.4,0-4-1.6-4-4c0-26.4-21.6-48-48-48c-2.4,0-4-1.6-4-4s1.6-4,4-4c30.8,0,56,25.2,56,56C309.6,86.8,308,88.4,305.6,88.4z\"/><path d=\"M253.6,508C144,508,58.4,475.6,58.4,434c0-36.4,65.2-66.4,158.8-72.8c2,0,4,1.6,4.4,3.6c0,2.4-1.6,4-3.6,4.4c-86.4,6-151.2,34-151.2,64.8c0,36,85.6,66,187.2,66s187.2-30.4,187.2-66c0-30.8-65.2-58.8-151.2-64.8c-2.4,0-4-2-3.6-4.4c0-2.4,2-4,4.4-3.6c93.6,6.4,158.8,36.4,158.8,72.8C448.8,475.2,363.2,508,253.6,508z M253.6,461.6c-33.2,0-68-9.6-68-27.6c0-13.2,20.4-23.6,51.6-26.8c2-0.4,4,1.6,4.4,3.6s-1.6,4-3.6,4.4c-27.6,2.8-44.4,11.6-44.4,18.8c0,9.2,25.6,19.6,60,19.6s60-10.4,60-19.6c0-7.2-16.8-16-44.4-18.8c-2-0.4-4-2-3.6-4.4c0.4-2,2-4,4.4-3.6c31.2,2.8,51.6,13.6,51.6,26.8C321.6,452,286.8,461.6,253.6,461.6z\"/></svg>","hospital":"<svg viewBox=\"0 0 507.114 507.114\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#61C2AB\" stroke=\"#000\" stroke-width=\"8\" stroke-linejoin=\"round\" d=\"M500.157,473.557l-66-308h-48.4c-5.6,128-129.2,203.6-130.4,204.4c-0.4,0-0.8,0.8-1.2,0.8s-0.8-1.2-1.2-1.2c-1.2-0.8-124.8-76-130.4-204h-50.4l-66,308H500.157z\"/><path fill=\"#DF5C4E\" stroke=\"#000\" stroke-width=\"8\" d=\"M254.157,31.557c-70.4,0-128,57.2-128,128c0,2.8,0,6,0.4,8.8c5.2,118.8,115.6,191.6,127.6,199.2c12-7.6,122.4-80.4,127.6-199.2c0-2.8,0.4-6,0.4-8.8C382.157,89.157,324.557,31.557,254.157,31.557z\"/><circle cx=\"254.157\" cy=\"159.557\" r=\"98\" fill=\"#BC3F2C\" stroke=\"#000\" stroke-width=\"8\"/><circle cx=\"254.157\" cy=\"159.557\" r=\"62.8\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"8\"/></svg>","fire":"<svg viewBox=\"0 0 504 504\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#000\" stroke-width=\"8\" stroke-linejoin=\"round\"><path fill=\"#F4EFEF\" d=\"M8,87.838L170.8,49.438 333.2,126.238 496,87.838V415.838L333.2,454.238 170.8,377.438 8,415.838Z\"/><path fill=\"#E8E3E3\" d=\"M170.8,49.438L333.2,126.238V454.238L170.8,377.438Z\"/><path fill=\"#FFC52F\" d=\"M375.6,209.038c-1.6-5.2-8-9.2-17.2-10.4l-23.6-3.2l-35.6-5.2c-0.8,0-1.2-0.4-1.6-1.2l-26.8-53.6c-4-8.4-9.6-13.2-15.2-13.2c-5.6,0-11.2,4.8-15.2,13.2l-26.4,53.6c-0.4,0.4-0.8,0.8-1.6,1.2l-43.2,6.4l-16,2.4c-9.2,1.2-15.6,5.2-17.2,10.4c-1.6,5.2,0.8,11.6,7.6,18.4c0.4,0,0.4,0.4,0.8,0.8l25.2,24.4l17.6,17.2c0.4,0.4,0.8,1.2,0.4,1.6l-10,59.2c-1.2,8-0.4,14,2.8,18c4.4,5.2,12.4,5.2,22,0l52.8-28c0.4-0.4,1.2-0.4,2,0l53.2,27.6c9.6,4.8,16.8,4.8,21.2,0c1.2-1.6,2-3.6,2-6v-12.4l-9.6-58.8c0-0.8-0.4-1.2,0.4-1.6l9.2-9.6v-0.4c0-1.2,1.6-2,2.8-2h0.4l31.2-30.4C374.4,221.038,377.2,214.238,375.6,209.038z\"/></g></svg>","police":"<svg viewBox=\"0 0 504.4 504.4\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#E36D60\" stroke=\"#000\" stroke-width=\"8\" d=\"M64.6,193.2c0,183.6,172.8,295.6,187.6,304.8c14.8-9.2,187.6-121.2,187.6-304.8c0-103.6-84.4-187.6-187.6-187.6S64.6,89.6,64.6,193.2z\"/><path fill=\"#BC3F2C\" stroke=\"#000\" stroke-width=\"8\" d=\"M250.6,147.2c-12.4-20.8-34.4-33.6-58.8-33.6c-38,0-68.8,30.8-68.8,68.8C123,264,241,326,252.2,331.6c11.2-5.6,129.2-67.6,129.2-149.2c0-38-30.8-68.8-68.8-68.8c-24.4,0-46.4,12.4-58.8,33.6C253,148.4,251.4,148.4,250.6,147.2z\"/><path fill=\"#fff\" stroke=\"#000\" stroke-width=\"8\" d=\"M275,160c8-13.6,22-21.6,37.6-21.6c11.6,0,22.4,4.4,30.8,12.4l.4,.8l12.8,30v.8c0,58.8-86.4,110.8-103.6,120.8l-.8,.4l-.8-.4c-17.2-10-103.6-62-103.6-120.8c0-24.4,19.6-44,44-44c15.6,0,29.6,8,37.6,21.6c4.8,8,13.6,12.8,22.8,12.8C261.4,172.8,270.2,168,275,160z\"/></svg>","community":"<svg viewBox=\"0 0 504.4 504.4\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#EDC654\" stroke=\"#000\" stroke-width=\"8\" d=\"M252.2,5.6C148.6,5.6,64.6,90,64.6,193.2c0,183.6,172.8,295.6,187.6,304.8c14.8-9.2,187.6-121.2,187.6-304.8C439.8,89.6,355.8,5.6,252.2,5.6z\"/><path fill=\"#FFC52F\" stroke=\"#000\" stroke-width=\"8\" d=\"M381.8,161.6c-2-6-8.8-10-18.8-11.6l-64.8-9.2c-.8,0-1.2-.4-1.6-1.2l-29.2-58.4c-4.8-9.2-10.4-14.4-16.8-14.4c-6.4,0-12.4,5.2-16.8,14.4L205,140c-.4,.4-.8,.8-1.6,1.2l-64.4,9.6c-10.4,1.6-16.8,5.6-18.8,11.6s1.2,13.2,8.4,20l.8,.8l46.4,45.2c.4,.4,.8,1.2,.4,1.6l-10.8,64.4c-1.6,8.4-.4,15.6,3.2,19.6c4.8,5.6,13.6,5.6,24,0l57.6-30.4c.4-.4,1.2-.4,2,0l58,30.4c10.4,5.6,19.6,5.6,24,0c3.6-4,4.4-11.2,3.2-19.6L326.2,230c0-.8,0-1.2,.4-1.6l46.8-45.6C381,174.8,383.8,167.6,381.8,161.6z\"/><path fill=\"#EDC654\" stroke=\"#000\" stroke-width=\"8\" d=\"M341,178.4L313,206c-9.2,8.8-13.2,21.6-11.2,34.4l6.8,38.8c0,.8,0,1.6-.8,2c-.4,.4-1.6,.4-2,0L271,262.8c-11.2-5.6-25.2-5.6-36,0l-34.8,18.4l-.8,.4l-1.2-.4c-.8-.4-.8-1.2-.8-2l6.4-38.8c2-12.4-2-25.2-11.2-34.4l-28.4-27.6c-.4-.4-.8-1.2-.4-2s.8-1.2,1.6-1.2l38.8-5.6c12.8-2,23.6-10,29.2-21.2l17.2-35.6c.4-.8,1.2-1.2,1.6-1.2c.8,0,1.6,.4,1.6,1.2l17.6,35.2c0,.4,8.8,23.2,28.8,21.2h.4l39.2,5.6c.8,0,1.2,.8,1.6,1.2C341.4,177.2,341.4,178,341,178.4z\"/></svg>","hydrant":"<svg viewBox=\"0 0 503.6 503.6\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#000\" stroke-width=\"8\" stroke-linejoin=\"round\"><path fill=\"#F4EFEF\" d=\"M8,87.638L170.8,49.238 333.2,126.038 495.6,87.638V415.638L333.2,454.038 170.8,377.238 8,415.638Z\"/><path fill=\"#E8E3E3\" d=\"M170.8,49.238L333.2,126.038V454.038L170.8,377.238Z\"/><circle fill=\"#33A5D2\" cx=\"256.8\" cy=\"247.238\" r=\"110\"/><path fill=\"none\" stroke-linecap=\"round\" d=\"M256.8,194.838v111.2M201.6,247.238h111.2\"/></g></svg>","cctv":"<svg viewBox=\"0 0 508 508\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"#4BB19B\" stroke=\"#000\" stroke-width=\"8\" cx=\"254\" cy=\"254\" r=\"250\"/><circle fill=\"#61C2AB\" stroke=\"#000\" stroke-width=\"8\" cx=\"254\" cy=\"254\" r=\"218.4\"/><path fill=\"#FFC52F\" stroke=\"#000\" stroke-width=\"8\" d=\"M367.2,353.2L260.8,132.8c-3.2-6.4-6.4-9.6-10-9.6c-2.4,0-6.4,1.6-8,12l-16,91.2l-94.4,18.8c-9.2,1.6-11.6,5.2-12,7.6s1.2,6.4,9.6,10.4l223.2,104c3.6,1.6,6.4,2.4,9.2,2.4c2,0,3.2-.4,4.4-1.2c-.4,0,1.2-.8,2-2C370.8,364,370.4,359.2,367.2,353.2z\"/><path fill=\"#E9B526\" d=\"M226.8,226.8l-94.4,18.8c-9.2,1.6-11.6,5.2-12,7.6s1.2,6.4,9.6,10.4l223.2,104c3.6,1.6,6.4,2.4,9.2,2.4c2,0,3.2-.4,4.4-1.2L226.8,226.8Z\"/><path d=\"M366,371.2c-1.2,0-2-.4-2.8-1.2L261.6,267.2c-1.6-1.6-1.6-4,0-5.6s4-1.6,5.6,0l101.6,102.8c1.6,1.6,1.6,4,0,5.6C368,370.8,367.2,371.2,366,371.2z M238.4,242c-1.2,0-2-.4-2.8-1.2l-10-10c-1.6-1.6-1.6-4,0-5.6s4-1.6,5.6,0l10,10c1.6,1.6,1.6,4,0,5.6C240.4,241.6,239.6,242,238.4,242z\"/></svg>","business":"<svg viewBox=\"0 0 504.8 504.8\" xmlns=\"http://www.w3.org/2000/svg\"><g stroke=\"#000\" stroke-width=\"8\" stroke-linejoin=\"round\"><path fill=\"#E9B526\" d=\"M217.2,251.8l-3.6,3.6c-8.8,8.8-8.8,23.6,0,32.4l3.2,3.2c8.8,8.8,23.6,8.8,32.4,0l3.6-3.6c-6.8-4.8-13.2-10.4-19.2-16.4C227.6,265,222,258.6,217.2,251.8z\"/><path fill=\"#E8E3E3\" d=\"M214,293.8l-3.2-3.2c-1.6-1.6-2.8-2.8-3.6-4.4L176,317.4l11.2,11.2l31.2-31.2C216.8,296.2,215.2,295,214,293.8z\"/><path fill=\"#EF934A\" d=\"M12.8,459c-9.2,9.2-9.2,23.6,0,32.8c4.4,4.4,10.4,6.8,16.4,6.8c6.4,0,12-2.4,16.4-6.8l144.8-154l-4.8-4.8l-14-14l-4.8-4.8L12.8,459z\"/><circle fill=\"#FFC52F\" cx=\"345.2\" cy=\"159.8\" r=\"155.6\"/><circle fill=\"#CDEEF9\" cx=\"345.2\" cy=\"159.8\" r=\"124\"/><path fill=\"#54B265\" d=\"M380.8,179.4l12.4,12.4l-16-10.8l-43.6-43.6L306,165l12.8,12.8l-30.8-25.2L233.2,207c6,14.4,14.8,27.6,26.4,39.2c23.2,23.2,53.6,35.6,86.4,35.6s63.2-12.8,86.4-35.6c12.8-12.8,22-27.6,28-43.6l-50.8-50.8L380.8,179.4z\"/><circle fill=\"#E07D46\" cx=\"379.6\" cy=\"118.6\" r=\"16\"/><path fill=\"none\" stroke-linecap=\"round\" d=\"M431.2,110.6c-17.6-30.8-50.8-49.2-86.4-48M32,477.4l-18.8-18.8\"/></g></svg>"};
 const cardUnits={estate:'แห่ง',hospital:'แห่ง',fire:'แห่ง',police:'แห่ง',community:'แห่ง',hydrant:'จุด',cctv:'จุด',business:'รายการ'};
 const riskFields=[{field:'ความเสี่ยง_12_ประเภท',label:'ความเสี่ยงสูง 12 ประเภท',short:'12 ประเภท',color:'#01b287'},{field:'อัคคีภัยสูง',label:'ความเสี่ยงอัคคีภัยสูง',short:'อัคคีภัยสูง',color:'#e5505a'},{field:'PSM',label:'โรงงาน PSM',short:'PSM',color:'#ff9f1c'}];
 const $=id=>document.getElementById(id),number=n=>Number(n).toLocaleString('th-TH'),normalize=s=>String(s||'').toLowerCase().replace(/นิคมอุตสาหกรรม|นิคมฯ|สำนักงานนิคมฯ|\s+/g,'').trim();
 const pick=(a,fields)=>fields.map(f=>a[f]).find(v=>v!=null&&String(v).trim())||'—';
 const flagged=v=>String(v||'').trim()==='เข้าข่าย';
 let operatingZoneRows=null,operatingZoneError='';
 let pendingCardZoom=null,cardZoomRequest=0;
 let lastMapFilterKey='';
 const selected={estate:'',type:'',risk:'',query:''};let view,map,layerViews={},renderTimer,active=null,selectedItem=null,fallbackView=null,fallbackHighlight=null,initialViewpoint=null,fallbackInitialBounds=null,pendingZoom=null,mapReady=false;
 function el(tag,text,cls){const n=document.createElement(tag);if(text!=null)n.textContent=text;if(cls)n.className=cls;return n;}
 function filterRow(r,d,includeType=true){return (!selected.estate||normalize(r.estate)===selected.estate)&&(!includeType||!selected.type||d.id===selected.type)&&(!selected.risk||(d.id==='business'&&flagged(r.attrs[selected.risk])))&&(!selected.query||normalize(r.name+' '+r.estate+' '+r.registration).includes(selected.query));}
 function visibleRows(d,includeType=true){return d.rows.filter(r=>filterRow(r,d,includeType));}
 function updateOptions(){const names=new Map();datasets.forEach(d=>d.rows.forEach(r=>{if(r.estate!=='—')names.set(normalize(r.estate),r.estate)}));const old=$('estate').value;$('estate').replaceChildren(new Option('ทุกนิคมอุตสาหกรรม',''));[...names].sort((a,b)=>a[1].localeCompare(b[1],'th')).forEach(([key,label])=>$('estate').add(new Option(label,key)));$('estate').value=old;}
 function donut(hostId,entries,centerLabel){const host=$(hostId);host.replaceChildren();const total=entries.reduce((s,e)=>s+e.count,0),wrap=el('div',null,'donut-layout'),ring=el('div',null,'donut'),inside=el('div',null,'donut-inner');inside.append(el('strong',number(total)),el('span',centerLabel));ring.append(inside);let angle=0;const stops=entries.filter(e=>e.count).map(e=>{const start=angle;angle+=e.count/Math.max(total,1)*360;return e.color+' '+start+'deg '+angle+'deg'});ring.style.background=stops.length?'conic-gradient('+stops.join(',')+')':'#edf1f5';const legend=el('div',null,'chart-legend');entries.forEach(e=>{const line=el('div',null,'legend-row'),dot=el('i');dot.style.background=e.color;line.append(dot,el('span',e.label),el('b',number(e.count)));legend.append(line)});wrap.append(ring,legend);host.append(wrap);}
 function render(){updateOptions();$('inventory').replaceChildren();datasets.forEach(d=>{const card=el('button',null,'inventory-card'+(selected.type===d.id?' active':''));card.type='button';card.style.setProperty('--accent',window.ieatInventoryCardColors?.[d.id]||d.color);const count=visibleRows(d,false).length;const icon=el('i',null,'card-art');icon.innerHTML=window.ieatInventoryCardIcons?.[d.id]||window.ieatInventoryCardIcon||cardIcons[d.id];icon.setAttribute('aria-hidden','true');const main=el('div',null,'card-value');main.append(icon,el('strong',d.status==='loading'?'…':d.status==='error'?'—':number(count)));card.append(el('span',d.label,'card-label'),main,el('small',d.status==='loading'?'กำลังโหลด':d.status==='error'?'เชื่อมต่อไม่ได้':d.status==='partial'?'ข้อมูลยังไม่ครบ':cardUnits[d.id]));card.setAttribute('aria-pressed',String(selected.type===d.id));card.onclick=()=>{$('type').value=selected.type===d.id?'':d.id;changed();zoomCardData(d.id)};$('inventory').append(card)});
  const business=datasets.find(d=>d.id==='business'),rows=visibleRows(business,!(location.pathname.endsWith('/hub.html')&&(new URLSearchParams(location.search).get('view')||'hazard')==='hazard')); 
  renderOperatingZones();
  const byEstate=new Map();rows.forEach(r=>{const key=normalize(r.estate);if(!byEstate.has(key))byEstate.set(key,{name:r.estate,total:0,counts:[0,0,0]});const e=byEstate.get(key);e.total++;riskFields.forEach((f,i)=>{if(flagged(r.attrs[f.field]))e.counts[i]++})});
  $('matrixBody').replaceChildren();
  const tableRows=[...byEstate.values()].sort((a,b)=>Math.max(...b.counts)-Math.max(...a.counts)||a.name.localeCompare(b.name,'th'));
  const maxima=riskFields.map((_,i)=>Math.max(1,...tableRows.map(e=>e.counts[i])));
  const totals=[0,0,0,0],riskLoading=['loading','error'].includes(business.status);
  const appendMetric=(tr,value,maxValue)=>{const td=el('td',value==null?'—':number(value));if(value!=null)td.style.background='rgba(217,54,30,'+(value===0?.06:.12+.52*value/maxValue)+')';tr.append(td);};
  $('matrixBody').replaceChildren();
  tableRows.forEach(e=>{
   const tr=el('tr');tr.tabIndex=0;tr.setAttribute('role','button');tr.setAttribute('aria-label',e.name+' ดูผู้ประกอบการบนแผนที่');
   const activate=field=>{if(riskLoading)return;$('estate').value=normalize(e.name);$('type').value='business';$('risk').value=field||'';changed();zoomCardData('business');};
   tr.onclick=()=>activate('');tr.onkeydown=event=>{if(event.target!==tr)return;if(event.key==='Enter'||event.key===' '){event.preventDefault();activate('');}};
   tr.append(el('th',e.name));
   for(const i of [0,2,1]){appendMetric(tr,riskLoading?null:e.counts[i],maxima[i]);const td=tr.lastElementChild;td.tabIndex=0;td.setAttribute('role','button');td.setAttribute('aria-label',e.name+' '+riskFields[i].label+' '+number(e.counts[i])+' รายการ ดูบนแผนที่');td.onclick=event=>{event.stopPropagation();activate(riskFields[i].field);};td.onkeydown=event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();activate(riskFields[i].field);}};}
   tr.append(el('td',riskLoading?'—':number(e.total)));$('matrixBody').append(tr);
   [e.counts[0],e.counts[2],e.counts[1],e.total].forEach((v,i)=>totals[i]+=v);
  });
  if(tableRows.length){const tr=el('tr',null,'matrix-total');tr.append(el('th','รวม'));totals.forEach(n=>tr.append(el('td',riskLoading?'—':number(n))));$('matrixBody').append(tr);}
  applyMapFilters();
 }

 function renderOperatingZones(){
  const host=$('operatingZoneDonut');if(!host)return;
  if(operatingZoneError){host.replaceChildren(el('p','โหลดข้อมูลเขตประกอบการไม่สำเร็จ กรุณารีเฟรชหน้า','empty'));return;}
  if(!operatingZoneRows){host.replaceChildren(el('p','กำลังโหลดเขตประกอบการ…','empty'));return;}
  const counts=new Map();
  operatingZoneRows.filter(r=>!selected.estate||normalize(r.estate)===selected.estate).forEach(r=>counts.set(r.zone,(counts.get(r.zone)||0)+r.count));
  const colors=['#0066b2','#00a6a6','#fdbd10','#ed7902','#667ab7','#438c69','#8d68a6','#58a9d6','#9b805e','#738592','#ad7b9e','#a6b66b'];
  const entries=[...counts].sort((a,b)=>b[1]-a[1]).map(([label,count],i)=>({label,count,color:colors[i%colors.length]}));
  if(!entries.length){host.replaceChildren(el('p','ไม่พบเขตประกอบการในพื้นที่ที่เลือก','empty'));return;}
  donut('operatingZoneDonut',entries,'รายการ');
 }
 async function loadOperatingZones(){
  try{
   const params=new URLSearchParams({f:'json',where:'ชื่อบริษัทภาษาไทย IS NOT NULL',groupByFieldsForStatistics:'นิคมอุตสาหกรรม,เขตประกอบการ',outStatistics:JSON.stringify([{statisticType:'count',onStatisticField:'OBJECTID',outStatisticFieldName:'record_count'}]),returnGeometry:'false',resultRecordCount:'2000'});
   const result=await json(base+'e_PP/FeatureServer/0/query',params);
   if(result.exceededTransferLimit||!Array.isArray(result.features))throw Error('Incomplete zone statistics');
   operatingZoneRows=result.features.map(f=>({estate:String(f.attributes['นิคมอุตสาหกรรม']||'—'),zone:String(f.attributes['เขตประกอบการ']||'ไม่ระบุเขตประกอบการ').trim(),count:Number(f.attributes.record_count)}));
   if(!operatingZoneRows.every(r=>Number.isInteger(r.count)&&r.count>=0))throw Error('Invalid zone counts');
  }catch(e){operatingZoneError=e.message;console.warn('Operating zone statistics',e);}schedule();
 }

 function schedule(){clearTimeout(renderTimer);renderTimer=setTimeout(render,120)}
 function applyMapFilters(){if(fallbackView&&fallbackView.refreshData){const key=JSON.stringify([selected.estate,selected.type,selected.risk,selected.query,(selected.estate||selected.risk||selected.query)?datasets.map(d=>[d.id,d.rows.length,d.status]):null]);if(key!==lastMapFilterKey){lastMapFilterKey=key;fallbackView.refreshData();}}datasets.forEach(d=>{if(!d.layer)return;d.layer.visible=selected.type?selected.type===d.id:d.defaultVisibility!==false;if(selected.risk&&d.id!=='business')d.layer.visible=false;const lv=layerViews[d.id];if(lv){lv.filter=(selected.estate||selected.query||selected.risk)?{objectIds:visibleRows(d).map(r=>r.id).concat([-1])}:null;}});}

 async function zoomCardData(id){
  const d=datasets.find(item=>item.id===id);if(!d)return;
  const requestId=++cardZoomRequest;
  if(!mapReady||!fallbackView){pendingCardZoom=id;$('mapStatus').textContent='กำลังเตรียมแผนที่สำหรับข้อมูลที่เลือก…';return;}
  const rows=visibleRows(d,false),ids=rows.map(r=>r.id);
  if(!ids.length){$('mapStatus').textContent=d.status==='loading'?'กำลังโหลดข้อมูล กรุณาเลือกอีกครั้งเมื่อโหลดเสร็จ':'ไม่พบข้อมูลตามตัวกรองที่เลือก';return;}
  try{
   const params=new URLSearchParams({f:'json',where:d.where||'1=1',objectIds:ids.join(','),returnExtentOnly:'true',outSR:'4326'});
   const result=await json(base+encodeURI(d.path)+'/query',params);
   if(requestId!==cardZoomRequest)return;
   const e=result.extent;
   if(!e||![e.xmin,e.ymin,e.xmax,e.ymax].every(Number.isFinite))throw Error('No extent');
   fallbackView.invalidateSize();
   if(e.xmin===e.xmax&&e.ymin===e.ymax)fallbackView.setView([e.ymin,e.xmin],16);
   else fallbackView.fitBounds([[e.ymin,e.xmin],[e.ymax,e.xmax]],{padding:[35,35],maxZoom:16});
   $('map').scrollIntoView({behavior:'smooth',block:'center'});
   $('mapStatus').textContent=d.label+' · '+number(ids.length)+' รายการตามตัวกรอง';
  }catch(error){if(requestId===cardZoomRequest)$('mapStatus').textContent='ไม่สามารถซูมข้อมูลที่เลือกได้ กรุณาลองอีกครั้ง';}
 }

 function changed(){selected.estate=$('estate').value;selected.type=$('type').value;selected.risk=$('risk').value;selected.query=normalize($('search').value);render();}
 async function zoomRow(d,r,button,reveal=true){if(!mapReady){pendingZoom={d,r,button,reveal};$('mapStatus').textContent='กำลังเตรียมแผนที่สำหรับตำแหน่งที่เลือก…';return;}if(reveal)$('map').scrollIntoView({behavior:'smooth',block:'center'});selectedItem=d.id+':'+r.id;document.querySelectorAll('.directory-item').forEach(b=>{const chosen=b.dataset.key===selectedItem;b.classList.toggle('active',chosen);b.setAttribute('aria-pressed',String(chosen))});active=button;if(fallbackView){try{fallbackView.invalidateSize();const result=await json(base+encodeURI(d.path)+'/query',new URLSearchParams({f:'geojson',objectIds:String(r.id),outFields:(d.fields||[d.oid]).join(','),outSR:'4326',returnGeometry:'true'}));if(fallbackHighlight)fallbackView.removeLayer(fallbackHighlight);const feature=L.geoJSON(result,{style:{color:'#176a42',weight:3,fillColor:'#01b287',fillOpacity:.2},pointToLayer:(f,latlng)=>L.circleMarker(latlng,{radius:9,color:'#fff',weight:3,fillColor:'#176a42',fillOpacity:1}),onEachFeature:(f,layer)=>{const box=el('div');box.append(el('b',r.name),el('p',d.label+' · '+r.estate));layer.bindPopup(box)}}).addTo(fallbackView);fallbackHighlight=feature;if(!feature.getBounds().isValid())throw Error('ไม่มีพิกัด');fallbackView.fitBounds(feature.getBounds(),{maxZoom:16,padding:[45,45],animate:false});$('mapStatus').textContent='ตำแหน่งที่เลือก: '+r.name;feature.eachLayer(layer=>{if(layer.getPopup())layer.openPopup();});}catch(e){$('mapStatus').textContent='ไม่สามารถโหลดตำแหน่งนี้ได้';}return;}if(!view)return;try{const result=await json(base+encodeURI(d.path)+'/query',new URLSearchParams({f:'json',objectIds:String(r.id),outFields:'*',returnGeometry:'true',outSR:'4326'}));const raw=result.features?.[0];if(!raw?.geometry)throw Error('ไม่มีพิกัด');const geometry={...raw.geometry,spatialReference:{wkid:4326},type:raw.geometry.x!=null?'point':raw.geometry.rings?'polygon':'polyline'};require(['esri/Graphic'],async Graphic=>{try{const graphic=new Graphic({geometry,attributes:raw.attributes,symbol:geometry.type==='point'?{type:'simple-marker',size:16,color:'#176a42',outline:{color:'white',width:2}}:{type:'simple-fill',color:[1,178,135,.2],outline:{color:'#176a42',width:3}},popupTemplate:{title:r.name,content:d.label+' · '+r.estate}});view.graphics.removeAll();view.graphics.add(graphic);await view.goTo(geometry.type==='point'?{target:geometry,zoom:16}:{target:geometry},{duration:650});view.openPopup({features:[graphic],location:geometry.type==='point'?geometry:graphic.geometry.extent.center});}catch(e){$('mapStatus').textContent='ไม่สามารถเปิดตำแหน่ง '+r.name+' ได้';}});}catch(e){$('mapStatus').textContent='ไม่สามารถโหลดตำแหน่ง '+r.name+' ได้ กรุณาลองอีกครั้ง';}}

 async function json(url,body){let last;for(let attempt=0;attempt<3;attempt++){try{const response=await fetch(url,{signal:AbortSignal.timeout(30000),...(body?{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:String(body)}:{})});if(!response.ok)throw Error('HTTP '+response.status);const value=await response.json();if(value.error)throw Error(value.error.message);return value;}catch(error){last=error;if(attempt<2)await new Promise(resolve=>setTimeout(resolve,600*(attempt+1)));}}throw last;}
 async function load(d){try{const url=base+encodeURI(d.path),meta=await json(url+'?f=json');d.meta=meta;d.oid=meta.objectIdField;const available=new Set(meta.fields.map(f=>f.name)),fields=[d.oid,...d.names,...d.estates,'เลขทะเบียนเดิม','เลขทะเบียนใหม่',...riskFields.map(f=>f.field)].filter((f,i,a)=>available.has(f)&&a.indexOf(f)===i);d.fields=fields;
   const idsResult=await json(url+'/query?'+new URLSearchParams({f:'json',where:d.where||'1=1',returnIdsOnly:'true'}));const ids=idsResult.objectIds||[];d.total=ids.length;
   for(let i=0;i<ids.length;i+=400){const pageIds=ids.slice(i,i+400),params=new URLSearchParams({f:'json',objectIds:pageIds.join(','),where:d.where||'1=1',outFields:fields.join(','),returnGeometry:'false'});let page;try{page=await json(url+'/query',params);}catch(e){page=await json(url+'/query',params);}
    const seen=new Set(d.rows.map(r=>r.id));(page.features||[]).forEach(f=>{const a=f.attributes,id=a[d.oid];if(seen.has(id))return;seen.add(id);d.rows.push({id,attrs:a,name:String(pick(a,d.names)),estate:String(pick(a,d.estates)),registration:String(pick(a,['เลขทะเบียนใหม่','เลขทะเบียนเดิม']))})});schedule();}
   d.status=d.rows.length===ids.length?'ready':'partial';schedule();
  }catch(e){d.status=d.rows.length?'partial':'error';d.error=e.message;console.warn('Risk Map: '+d.label,e);schedule();}
 }
 function zoomMatches(reveal=false){
  if(selected.estate&&document.querySelector('.dashboard-buffer-tools'))return;
  if(!selected.estate&&!selected.query)return;
  let match;
  const estate=datasets.find(d=>d.id==='estate');
  if(selected.estate)match=estate.rows.filter(r=>normalize(r.estate)===selected.estate).map(r=>({d:estate,r}))[0];
  if(!match)match=datasets.flatMap(d=>visibleRows(d).map(r=>({d,r}))).find(v=>v.d.id==='estate')||datasets.flatMap(d=>visibleRows(d).map(r=>({d,r})))[0];
  if(match){const key=match.d.id+':'+match.r.id;const button=[...document.querySelectorAll('.directory-item')].find(b=>b.dataset.key===key);zoomRow(match.d,match.r,button,reveal);}
}
datasets.forEach(d=>$('type').add(new Option(d.label,d.id)));
$('estate').onchange=()=>{if(!$('estate').value){['type','risk','search'].forEach(id=>$(id).value='');selectedItem=null;pendingZoom=null;pendingCardZoom=null;cardZoomRequest++;changed();if(fallbackView)fallbackView.fitBounds(fallbackInitialBounds||[[5.5,97.3],[20.6,105.7]],{padding:[20,20]});}else{changed();zoomMatches(true)}};$('type').onchange=()=>{changed();zoomMatches(false)};$('risk').onchange=()=>{changed();zoomMatches(false)};
let searchTimer;$('search').oninput=()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{changed();if(selected.query.length>=2)zoomMatches(false)},600)};
$('search').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();clearTimeout(searchTimer);changed();zoomMatches(true)}};
$('searchButton').onclick=()=>{clearTimeout(searchTimer);changed();zoomMatches(true)};
 $('reset').onclick=()=>{clearTimeout(searchTimer);pendingZoom=null;selectedItem=null;if(fallbackHighlight&&fallbackView){fallbackView.removeLayer(fallbackHighlight);fallbackHighlight=null;}['estate','type','risk','search'].forEach(id=>$(id).value='');changed();if(fallbackView){if(fallbackInitialBounds)fallbackView.fitBounds(fallbackInitialBounds);else fallbackView.setView([14,101],6);}else if(view)view.goTo(initialViewpoint||{center:[101,14],zoom:6}).catch(()=>{});};
 $('refresh').onclick=()=>location.reload();$('basemap').onchange=()=>{if(map)map.basemap=$('basemap').value};
 document.querySelectorAll('.nav-tab').forEach(button=>button.onclick=()=>{document.querySelectorAll('.nav-tab').forEach(b=>b.classList.toggle('active',b===button));const page=button.dataset.page;$('riskDashboard').hidden=page!=='risk';$('otherPage').hidden=page==='risk';if(page!=='risk'){const paths={flood:'./flood-report.html?v=20261020-restore-history',drought:'./drought.html',pm25:'./pm25.html',earthquake:'./earthquake.html?v=20261020-sarabun-2'};if($('otherFrame').getAttribute('src')!==paths[page])$('otherFrame').src=paths[page];}});
 loadOperatingZones();
 window.addEventListener('ieat-dss-chemical-ready',schedule);
 render();(async()=>{let next=0;async function worker(){while(next<datasets.length)await load(datasets[next++]);}await Promise.allSettled([worker(),worker(),worker()]);})();


 function symbolStyle(def,attributes){
  const renderer=def.layerDefinition?.drawingInfo?.renderer||{};
  let symbol=renderer.symbol||renderer.defaultSymbol;
  if(renderer.type==='uniqueValue'){
   const val=String(attributes[renderer.field1]??'');
   symbol=(renderer.uniqueValueInfos||[]).find(i=>String(i.value)===val)?.symbol||symbol;
   for(const group of renderer.uniqueValueGroups||[])for(const item of group.classes||[])if((item.values||[]).some(v=>String(v[0])===val))symbol=item.symbol;
  }
  const rgba=a=>Array.isArray(a)?'rgb('+a.slice(0,3).join(',')+')':'#854c9e';
  const parts=symbol?.symbol?.symbolLayers||[],stroke=parts.find(s=>s.type==='CIMSolidStroke'),fill=parts.find(s=>s.type==='CIMSolidFill');
  return {symbol,color:rgba(stroke?.color||symbol?.outline?.color||symbol?.color),weight:Math.max(1,(stroke?.width||symbol?.outline?.width||1)*1.33),fillColor:rgba(fill?.color||symbol?.color),fillOpacity:((fill?.color||symbol?.color||[0,0,0,80])[3]??80)/255};
 }
 function mapPoint(def,feature,latlng){
  const category=def.dataset?.id;
  const mapGlyphs={"hospital":"<path d=\"M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z\"/>","fire":"<path d=\"M13 3c2 5-2 6 0 9 1-2 3-3 4-4 4 6 3 12-5 13C4 20 3 14 8 8c0 3 1 4 2 4-1-4 2-5 3-9Z\"/>","police":"<path d=\"m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6z\"/><path d=\"m9 12 2 2 4-5\"/>","community":"<path d=\"m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7\"/>","hydrant":"<path d=\"M9 6V4h6v2M8 9h8v11H8zM6 8h12M5 12H3v4h5m8-4h5v4h-5M6 21h12\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/>","cctv":"<path d=\"m3 5 16 5-3 8L1 12zM18 11l4 1-2 5-3-1M8 15l-2 6H2v-6\"/>","estate":"<path d=\"M4 21V8l6 3V6l6 4V3h4v18zM8 15v2m4-2v2m4-2v2\"/>","business":"<path d=\"M3 21V10l6 3V8l6 3V4h6v17zM7 16h2m3 0h2m3 0h2\"/>"},mapColors={"hospital":"#8B1E2D","fire":"#D9361E","police":"#4C2365","community":"#4F7D32","hydrant":"#457B9D","cctv":"#8B1E2D","estate":"#7F5D99","business":"#E96A60"};
  if(category&&mapGlyphs[category]){
   const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="white" stroke="'+mapColors[category]+'" stroke-width="2"/><g transform="translate(6 6) scale(.83)" fill="none" stroke="'+mapColors[category]+'" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">'+mapGlyphs[category]+'</g></svg>';
   return L.marker(latlng,{icon:L.icon({iconUrl:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg),iconSize:[29,29],iconAnchor:[14.5,14.5],popupAnchor:[0,-14],className:'dashboard-point-icon'}),title:def.dataset.label,riseOnHover:true});
  }

  const style=symbolStyle(def,feature.properties||{}),s=style.symbol;
  if(s?.type==='esriPMS'&&s.imageData){
   const width=Math.min(38,(s.width||20)*1.33),height=Math.min(38,(s.height||20)*1.33);
   return L.marker(latlng,{icon:L.icon({iconUrl:'data:'+(s.contentType||'image/png')+';base64,'+s.imageData,iconSize:[width,height],iconAnchor:[width/2,height/2]})});
  }
  if(s?.type==='CIMSymbolReference'){
   const marker=s.symbol?.symbolLayers?.find(v=>v.type==='CIMVectorMarker'),frame=marker?.frame;
   if(marker&&frame){const w=frame.xmax-frame.xmin,h=frame.ymax-frame.ymin,paths=[];
    for(const graphic of marker.markerGraphics||[]){const paint=graphic.symbol?.symbolLayers?.find(v=>v.type==='CIMSolidFill')?.color||[210,9,98,255];const d=(graphic.geometry?.rings||graphic.geometry?.paths||[]).map(r=>'M'+r.map(p=>(p[0]-frame.xmin)+','+(frame.ymax-p[1])).join('L')+'Z').join('');paths.push('<path fill="rgb('+paint.slice(0,3).join(',')+')" fill-rule="evenodd" d="'+d+'"/>');}
    const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'">'+paths.join('')+'</svg>',size=Math.min(34,(marker.size||18)*1.33);
    return L.marker(latlng,{icon:L.icon({iconUrl:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg),iconSize:[size,size],iconAnchor:[size/2,size]})});
   }
  }
  return L.circleMarker(latlng,{radius:5,color:'#fff',weight:1,fillColor:style.fillColor,fillOpacity:1});
 }


 async function queryAllMapFeatures(url,params,onBatch,isCurrent=()=>true){
  const idParams=new URLSearchParams(params);idParams.set('f','json');idParams.set('returnIdsOnly','true');idParams.set('returnGeometry','false');idParams.delete('outFields');idParams.delete('resultRecordCount');
  const idData=await json(url+'/query',idParams);if(!isCurrent())throw Error('Map view changed');
  if(idData.exceededTransferLimit)throw Error('Incomplete object ID response');
  const ids=idData.objectIds||[];if(!Array.isArray(ids))throw Error('Invalid object IDs');
  const field=idData.objectIdFieldName||'OBJECTID',features=new Map();
  async function fetchBatch(batch){
   if(!isCurrent())return;
   const page=new URLSearchParams(params);page.set('f','geojson');page.set('objectIds',batch.join(','));page.set('returnGeometry','true');page.set('resultRecordCount',String(batch.length));page.delete('returnIdsOnly');
   const data=await json(url+'/query',page);if(!isCurrent())return;
   const rows=data.type==='FeatureCollection'?data.features:data.type==='Feature'?[data]:null;
   if(!Array.isArray(rows))throw Error('Invalid feature collection');
   if(data.exceededTransferLimit||data.properties?.exceededTransferLimit||rows.length<batch.length){if(batch.length===1)throw Error('Missing feature geometry');const mid=Math.ceil(batch.length/2);await fetchBatch(batch.slice(0,mid));await fetchBatch(batch.slice(mid));return;}
   const fresh=[];for(const feature of rows){const id=feature.properties?.[field]??feature.id;if(id==null)throw Error('Missing feature ID');if(!features.has(String(id))){features.set(String(id),feature);fresh.push(feature);}}
   if(onBatch&&fresh.length)onBatch(fresh,features.size,ids.length);
  }
  let next=0;async function worker(){while(next<ids.length&&isCurrent()){const start=next;next+=100;await fetchBatch(ids.slice(start,start+100));}}
  await Promise.all([worker(),worker(),worker()]);
  if(!isCurrent())throw Error('Map view changed');
  if(features.size!==new Set(ids.map(String)).size)throw Error('Incomplete map features');
  return {type:'FeatureCollection',features:[...features.values()]};
 }
 async function fallbackMap(){
  if(fallbackView)return;
  try{
   try{view.destroy()}catch(e){}$('map').replaceChildren();
   if(!window.L)throw Error('Leaflet unavailable');
   const data=await json(portalUrl+'/sharing/rest/content/items/'+webmapId+'/data?f=json');
   fallbackView=L.map('map',{zoomControl:false}).setView([14,101],6);
   window.ieatSupportMap=fallbackView;window.dispatchEvent(new CustomEvent('ieat-support-map-ready',{detail:{map:fallbackView}}));L.control.zoom({position:'bottomright'}).addTo(fallbackView);
   const tileRoot='https://server.arcgisonline.com/ArcGIS/rest/services/';
   const basemaps={'gray-vector':{path:'Canvas/World_Light_Gray_Base',reference:'Canvas/World_Light_Gray_Reference',native:16},'streets-vector':{path:'World_Street_Map',native:19},satellite:{path:'World_Imagery',reference:'Reference/World_Boundaries_and_Places',native:19},'topo-vector':{path:'World_Topo_Map',native:19}};
   const tiles=L.tileLayer('',{attribution:'Tiles © Esri',maxZoom:20}).addTo(fallbackView);
   fallbackView.createPane('referenceLabels');fallbackView.getPane('referenceLabels').style.zIndex=350;fallbackView.getPane('referenceLabels').style.pointerEvents='none';
   let referenceTiles=null;
   function changeBasemap(){const config=basemaps[$('basemap').value]||basemaps['gray-vector'];tiles.options.maxNativeZoom=config.native;tiles.setUrl(tileRoot+config.path+'/MapServer/tile/{z}/{y}/{x}');if(referenceTiles){fallbackView.removeLayer(referenceTiles);referenceTiles=null;}if(config.reference)referenceTiles=L.tileLayer(tileRoot+config.reference+'/MapServer/tile/{z}/{y}/{x}',{pane:'referenceLabels',maxZoom:20,maxNativeZoom:config.native,interactive:false}).addTo(fallbackView);}
   changeBasemap();
   L.control.scale({position:'bottomleft',imperial:false,maxWidth:110}).addTo(fallbackView);
   const dashboardTools=L.control({position:'topleft'});
   dashboardTools.onAdd=()=>{const box=L.DomUtil.create('div','dashboard-map-tools leaflet-bar');
    const home=L.DomUtil.create('button','dashboard-map-tool',box);home.type='button';home.title='กลับมุมมองเริ่มต้น';home.setAttribute('aria-label','กลับมุมมองเริ่มต้น');home.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m3 11 9-8 9 8M5 10v10h5v-6h4v6h5V10"/></svg>';home.onclick=()=>{if(fallbackInitialBounds)fallbackView.fitBounds(fallbackInitialBounds);else fallbackView.setView([14,101],6);};
    const full=L.DomUtil.create('button','dashboard-map-tool',box);full.type='button';full.title='เปิด Dashboard เต็มจอ';full.setAttribute('aria-label','เปิด Dashboard เต็มจอ');full.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>';
    const section=$('riskMapSection');
    full.onclick=async()=>{if(window.ieatToggleDashboardFullscreen){await window.ieatToggleDashboardFullscreen();return}try{if(document.fullscreenElement===section)await document.exitFullscreen();else if(section.requestFullscreen)await section.requestFullscreen();else section.classList.toggle('dashboard-map-expanded');}catch(e){section.classList.toggle('dashboard-map-expanded');}fallbackView.invalidateSize({pan:false});};
    document.addEventListener('fullscreenchange',()=>{const expanded=document.fullscreenElement===section||document.fullscreenElement===$('riskDashboard');full.setAttribute('aria-label',expanded?'ออกจากเต็มจอ':'เปิด Dashboard เต็มจอ');full.title=expanded?'ออกจากเต็มจอ':'เปิด Dashboard เต็มจอ';fallbackView.invalidateSize({pan:false});});
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&section.classList.contains('dashboard-map-expanded')){section.classList.remove('dashboard-map-expanded');fallbackView.invalidateSize({pan:false});}});
    L.DomEvent.disableClickPropagation(box);L.DomEvent.disableScrollPropagation(box);return box;};dashboardTools.addTo(fallbackView);
   if(window.ResizeObserver)new ResizeObserver(()=>fallbackView.invalidateSize({pan:false})).observe($('map'));
   fallbackInitialBounds=[[5.5,97.3],[20.6,105.7]];fallbackView.fitBounds(fallbackInitialBounds,{padding:[20,20]});
   const definitions=[];function collect(layers,parentVisible=true){for(const def of layers||[]){if(/create[\s_]*buffers/i.test(String(def.title||'')))continue;const shown=parentVisible&&def.visibility!==false;if(def.layers)collect(def.layers,shown);else if(def.url&&['ArcGISFeatureLayer','GeoJSON'].includes(def.layerType))definitions.push({...def,shown});}}collect(data.operationalLayers);
   const groups={},canonical=u=>decodeURI(u||'').replace(/\/$/,'').toLowerCase();
   for(const def of definitions){def.group=L.layerGroup();groups[def.title]=def.group;if(def.shown)def.group.addTo(fallbackView);def.dataset=datasets.find(d=>canonical(base+encodeURI(d.path))===canonical(def.url));def.contextParcel=/\/e_pp\/featureserver\/0$/i.test(canonical(def.url));}
   const layerControl=L.control.layers({},groups,{collapsed:true,position:'topright'}).addTo(fallbackView);layerControl.getContainer().setAttribute('aria-label','เลือกชั้นข้อมูลบนแผนที่');layerControl.getContainer().title='เลือกชั้นข้อมูล';

   let busy=false,pending=false,drawGeneration=0;const lastErrors=new Set();
   const priority=def=>def.dataset?.id==='estate'?0:def.contextParcel?1:({hospital:2,fire:3,police:4,hydrant:5,cctv:6,community:7,business:8}[def.dataset?.id]??(def.layerType==='GeoJSON'?20:10));
   function paintMapFeatures(def,result,group,replace=true){const d=def.dataset;
      const features=result.type==='FeatureCollection'?result.features:result.type==='Feature'?[result]:[];
      const staging=L.layerGroup();
      if(features.length>40&&fallbackView.getZoom()<18){
       const buckets=new Map(),keep=[];
       for(const feature of features){if(feature.geometry?.type!=='Point'){keep.push(feature);continue;}const coords=feature.geometry.coordinates,p=fallbackView.latLngToLayerPoint([coords[1],coords[0]]),key=Math.floor(p.x/52)+':'+Math.floor(p.y/52);if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(feature);}
       const palette={hospital:'#8B1E2D',fire:'#D9361E',police:'#4C2365',community:'#4F7D32',hydrant:'#457B9D',cctv:'#8B1E2D',estate:'#7F5D99',business:'#E96A60'};
       for(const bucket of buckets.values()){if(bucket.length===1){keep.push(bucket[0]);continue;}const lat=bucket.reduce((n,f)=>n+f.geometry.coordinates[1],0)/bucket.length,lon=bucket.reduce((n,f)=>n+f.geometry.coordinates[0],0)/bucket.length,c=palette[d?.id]||'#7F5D99',size=bucket.length>99?40:34;
        const cluster=L.marker([lat,lon],{icon:L.divIcon({className:'dashboard-point-cluster',html:'<span style="background:'+c+'">'+bucket.length+'</span>',iconSize:[size,size],iconAnchor:[size/2,size/2]}),title:bucket.length+' '+(d?.label||def.title)+' · คลิกเพื่อซูม'}).addTo(staging);
        cluster.bindTooltip(el('span',bucket.length+' '+(d?.label||def.title)));
        cluster.on('click',()=>{const bounds=L.latLngBounds(bucket.map(f=>[f.geometry.coordinates[1],f.geometry.coordinates[0]]));fallbackView.fitBounds(bounds,{padding:[50,50],maxZoom:18});});
       }
       result={type:'FeatureCollection',features:keep};
      }
      L.geoJSON(result,{style:f=>symbolStyle(def,f.properties||{}),pointToLayer:(f,ll)=>mapPoint(def,f,ll),onEachFeature:(feature,layer)=>{
       const a=feature.properties||{},name=d?String(pick(a,d.names)):String(pick(a,['Name','Name_Parcel','mercant_na','ชื่อผู้ประกอบการ','name'])),box=el('div');
       box.append(el('b',name),el('p',def.title));if(d)box.append(el('p',String(pick(a,d.estates))));riskFields.forEach(f=>{if(flagged(a[f.field]))box.append(el('p',f.label+' · เข้าข่าย'))});layer.bindPopup(box);
       if(d?.id==='estate'&&fallbackView.getZoom()>=10)layer.bindTooltip(name,{permanent:true,direction:'top',className:'estate-map-label'});
      }}).addTo(staging);
      if(replace)group.clearLayers();group.addLayer(staging);
   }
   async function draw(){
    if(busy){pending=true;return;}busy=true;pending=false;lastErrors.clear();
    const generation=drawGeneration,isCurrent=()=>generation===drawGeneration,bounds=fallbackView.getBounds(),loaded=new Map();
    function status(done=false){
     if(!isCurrent())return;
     const host=$('mapStatus'),count=[...loaded.values()].reduce((a,b)=>a+b,0);
     host.setAttribute('aria-busy',String(!done));
     host.replaceChildren(document.createTextNode((done?'แสดง ':'กำลังโหลด · แสดงแล้ว ')+number(count)+' รายการ'+(lastErrors.size?' · บางชั้นข้อมูลเชื่อมต่อไม่ได้':'')));
     if(done&&lastErrors.size){
      const details=el('details'),summary=el('summary','ดูชั้นข้อมูลที่โหลดไม่สำเร็จ ('+lastErrors.size+')');
      details.append(summary,el('p',[...lastErrors].join(' · ')));
      const retry=el('button','ลองโหลดแผนที่อีกครั้ง');retry.type='button';
      retry.onclick=()=>fallbackView.refreshData();
      details.append(retry);host.append(details);
     }
    }
    status();
    const ordered=[...definitions].sort((a,b)=>priority(a)-priority(b));
    async function drawLayer(def){
     if(!isCurrent())return;
     const group=def.group,d=def.dataset;if(!fallbackView.hasLayer(group))return;
     if(selected.type&&!def.contextParcel&&(!d||selected.type!==d.id)){group.clearLayers();return;}
     if(selected.risk&&!def.contextParcel&&d?.id!=='business'){group.clearLayers();return;}
     const filtered=selected.estate||selected.query||selected.risk;
     if(filtered&&!d&&!def.contextParcel){group.clearLayers();return;}
     const ids=d?visibleRows(d).map(r=>r.id):[];if(filtered&&d&&!ids.length){group.clearLayers();return;}
     try{
      let result;
      if(def.layerType==='GeoJSON'){
       const response=await fetch(def.url,{signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('HTTP '+response.status);result=await response.json();
      }else{
       const params=new URLSearchParams({f:'geojson',where:[def.layerDefinition?.definitionExpression,d?.where].filter(Boolean).map(clause=>'('+clause+')').join(' AND ')||'1=1',outFields:'*',returnGeometry:'true',outSR:'4326',geometry:JSON.stringify({xmin:bounds.getWest(),ymin:bounds.getSouth(),xmax:bounds.getEast(),ymax:bounds.getNorth(),spatialReference:{wkid:4326}}),geometryType:'esriGeometryEnvelope',inSR:'4326',spatialRel:'esriSpatialRelIntersects'});
       if(filtered&&d)params.set('objectIds',ids.join(','));
       let first=true;
       result=await queryAllMapFeatures(def.url,params,(features,count)=>{if(!isCurrent())return;paintMapFeatures(def,{type:'FeatureCollection',features},group,first);first=false;loaded.set(def,count);status();},isCurrent);
      }
      if(!isCurrent()||!fallbackView.hasLayer(group))return;
      paintMapFeatures(def,result,group,true);loaded.set(def,result.type==='FeatureCollection'?result.features.length:result.type==='Feature'?1:0);status();
     }catch(error){if(!isCurrent())return;lastErrors.add(def.title);console.warn('Web Map: '+def.title,error.message);status();}
    }
    try{let next=0;async function worker(){while(next<ordered.length&&isCurrent()){const def=ordered[next++];await drawLayer(def);}}await Promise.allSettled([worker(),worker(),worker(),worker()]);}
    finally{busy=false;status(true);if(pending||!isCurrent())draw();}
   }
   let debounce;
   fallbackView.refreshData=()=>{drawGeneration++;clearTimeout(debounce);debounce=setTimeout(draw,250);};
   $('basemap').onchange=changeBasemap;
   fallbackView.on('moveend overlayadd overlayremove',()=>{drawGeneration++;clearTimeout(debounce);debounce=setTimeout(draw,250);});
   mapReady=true;if(pendingCardZoom){const id=pendingCardZoom;pendingCardZoom=null;zoomCardData(id);}if(pendingZoom){const p=pendingZoom;pendingZoom=null;zoomRow(p.d,p.r,p.button,p.reveal);}draw();
  }catch(e){$('mapStatus').textContent='ไม่สามารถโหลด Web Map กนอ. ได้ กรุณาลองรีเฟรช';console.warn(e);}
 }
 fallbackMap();
})();
