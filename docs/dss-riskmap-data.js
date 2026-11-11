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

 const verifiedContacts=[
  {kind:'fire',names:['สถานีดับเพลิงและกู้ภัยบางชัน','สถานีดับเพลิงบางชัน'],phones:[['สำนักงาน','02-517-2919'],['สำนักงาน','02-517-2920']],source:'https://webportal.bangkok.go.th/minburi/page/sub/3072/สถานีดับเพลิงในพื้นที่เขตมีนบุรี'},
  {kind:'police',names:['สถานีตำรวจนครบาลบางชัน'],phones:[['สถานีตำรวจ','02-517-1717']],source:'https://bangchan.metro.police.go.th/home/ita-standards/ita-2025/informations/informations931/informations-2/contact/'},
  {kind:'hospital',names:['โรงพยาบาลวิภาราม แหลมฉบัง','โรงพยาบาลวิภารามแหลมฉบัง'],phones:[['สำนักงาน','033-009-800'],['ฉุกเฉิน','033-009-888']],source:'https://vibharamlcb.com/contact.php'},
  {kind:'hospital',names:['โรงพยาบาลพญาไท ศรีราชา','โรงพยาบาลพญาไทศรีราชา'],phones:[['สำนักงาน','038-317-333']],source:'https://www.phyathai.com/th/pyts'}
 ];
 const contactKey=value=>String(value||'').normalize('NFKC').replace(/\s+/g,'');
 function contactDetails(name,kind,attrs={}){
  const official=verifiedContacts.find(item=>item.kind===kind&&item.names.some(label=>contactKey(label)===contactKey(name)));
  if(official)return {...official,verified:true,checked:'11 พฤศจิกายน 2569'};
  const values=Object.entries(attrs).filter(([key,value])=>value&&/โทร|phone|telephone|(^|_)tel($|_)/i.test(key)&&!/fax|แฟกซ์/i.test(key));
  const phones=values.flatMap(([label,value])=>{
    const matches=String(value).match(/(?:\+66|0)[\d ()-]{7,20}\d/g)||[];
    return matches.filter(phone=>{const digits=phone.replace(/\D/g,'');return digits.length>=9&&digits.length<=11;}).map(phone=>[label,phone]);
  });
  return {phones,verified:false,source:attrs['แหล่งอ้างอิง']||'',note:attrs['สถานะตรวจสอบ']||'เบอร์จากทะเบียน ยังไม่ได้ตรวจยืนยันกับเว็บไซต์หน่วยงาน'};
 }
 function appendContact(host,info){
  if(!info.phones.length){host.append(el('span','ยังไม่มีเบอร์ติดต่อที่ยืนยันได้'));return;}
  info.phones.forEach(([label,phone])=>{
    const line=el('div'),link=el('a',label+' '+phone);link.href='tel:'+phone.replace(/[^+\d]/g,'');line.append(link);host.append(line);
  });
  host.append(el('small',info.verified?'ตรวจจากเว็บไซต์ทางการ · '+info.checked:info.note));
 }
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
 const riskRegister={...datasets.find(d=>d.id==='business'),rows:[],path:'e_PP/FeatureServer/0'};
 const extraSupport=[
  {id:'waterWatch',label:'จุดเฝ้าระวังระดับน้ำ',path:'Risk_Map_WFL1/FeatureServer/0'},
  {id:'school',label:'โรงเรียน',path:'Risk_Map_WFL1/FeatureServer/1'},
  {id:'communityRisk',label:'พื้นที่ชุมชน (ชุด Risk Map)',path:'Risk_Map_WFL1/FeatureServer/2'}
 ].map(d=>({...d,names:['Name'],estates:['IEAT'],rows:[],status:'loading'}));
 function bindIncidentSearch(view,map,factory,sources,GraphicsLayer,Graphic,Circle,SketchViewModel){
  const form=$('coverageIncidentForm'), matches=$('coverageFactoryMatches'), results=$('coverageNearbyResults');
  if(!form)return;
  const message=$('coverageIncidentStatus'), radius=$('coverageIncidentRadius'), type=$('coverageIncidentType'), keyword=$('coverageSupportQuery');
  const graphics=new GraphicsLayer({title:'จุดเกิดเหตุและรัศมีค้นหา',listMode:'hide'});
  const pinLayer=new GraphicsLayer({title:'หมุดจุดเกิดเหตุ',listMode:'hide'});
  map.addMany([graphics,pinLayer]);
  const sketch=new SketchViewModel({view,layer:pinLayer,updateOnGraphicClick:true});
  const factoryName='ชื่อบริษัทภาษาไทย', oldReg='เลขทะเบียนเดิม', newReg='เลขทะเบียนใหม่';
  const fields=[factoryName,'ชื่อบริษัทภาษาอังกฤษ',oldReg,newReg,'นิคมอุตสาหกรรม'];
  let origin=null,pin=null,name='',picking=false,searchId=0,nearbyId=0,auxiliaryId=0,selectedFactory=null;
  const publishPoint=()=>{window.ieatCoverageIncident=origin&&{company:name,lat:origin.latitude,lng:origin.longitude,km:Number(radius.value)};};
  let syncTimer, incidentRevision=0, hasSearched=false;
  const queueReport=()=>{incidentRevision++;clearTimeout(syncTimer);if(hasSearched)syncTimer=setTimeout(()=>syncReport(false),350);};
  const sql=value=>String(value).replace(/'/g,"''");
  function incidentDetails(){
    const box=el('div'),table=el('table');
    const attrs=selectedFactory||{};
    const rows=[
      ['สถานประกอบการ',name],
      ['นิคมอุตสาหกรรม',attrs['นิคมอุตสาหกรรม']||'ไม่พบข้อมูล'],
      ['เลขทะเบียนใหม่',attrs[newReg]||'ไม่พบข้อมูล'],
      ['เลขทะเบียนเดิม',attrs[oldReg]||'ไม่พบข้อมูล'],
      ['ประเภทเหตุ',type.selectedOptions[0]?.textContent||'ยังไม่ระบุ'],
      ['รัศมีค้นหา',radius.value+' กม.'],
      ['พิกัด',origin?origin.latitude.toFixed(6)+', '+origin.longitude.toFixed(6):'']
    ];
    for(const [label,value] of rows){const row=el('tr');row.append(el('th',label),el('td',value));table.append(row);}
    table.style.cssText='width:100%;font:14px/1.7 Sarabun,sans-serif;text-align:left';
    box.append(table);return box;
  }
  function openIncident(){if(pin&&origin)view.openPopup({features:[pin],location:origin});}

  function draw(){
    if(!origin)return;
    if(pin)pin.popupTemplate={title:'จุดเกิดเหตุ · '+name,content:incidentDetails};
    graphics.removeAll();
    const circle=new Circle({center:origin,radius:Number(radius.value),radiusUnit:'kilometers',geodesic:true});
    graphics.addMany([
      new Graphic({geometry:circle,symbol:{type:'simple-fill',color:[184,46,52,.025],outline:{color:'#b82e34',width:1.5}}}),
      new Graphic({geometry:origin,symbol:{type:'text',text:name.length>36?name.slice(0,36)+'…':name,color:'#61191c',haloColor:'#fff',haloSize:1.5,yoffset:38,font:{size:10,weight:'bold'}}})
    ]);
    return circle;
  }
  async function updateNearby(forReport=false,auxiliary=false){
    if(!origin||!form.reportValidity())return;
    publishPoint();
    const results=auxiliary?$('coverageAuxiliaryResults'): $('coverageNearbyResults');
    const id=auxiliary?++auxiliaryId:++nearbyId, circle=draw(), term=auxiliary?keyword.value.trim().toLowerCase():'';
    results.replaceChildren(el('p','กำลังค้นหาข้อมูลสนับสนุน…'));
    const tasks=sources.map(async ({layer,fields:preferred})=>{
      await layer.load();
      const available=new Set(layer.fields.map(field=>field.name));
      const names=preferred.filter(field=>available.has(field));
      if(!names.length&&layer.displayField&&available.has(layer.displayField))names.push(layer.displayField);
      const q=layer.createQuery();
      q.geometry=circle;q.spatialRelationship='intersects';q.returnGeometry=false;q.num=25;
      q.outFields=names.length?names:[layer.objectIdField];
      if(term&&!layer.title.toLowerCase().includes(term)){
        if(!names.length)return null;
        q.where=names.map(field=>"UPPER("+field+") LIKE '%"+sql(term.toUpperCase())+"%'").join(' OR ');
      }
      const data=await layer.queryFeatures(q);
      return {title:layer.title,truncated:data.exceededTransferLimit||data.features.length===25,items:data.features.map(f=>names.map(field=>f.attributes[field]).filter(Boolean).join(' · ')||'รายการ '+f.attributes[layer.objectIdField])};
    });
    if(term&&window.IEATDssChemicalCatalog){
      tasks.push(window.IEATDssChemicalCatalog.load().then(data=>{
        const ids=new Set(window.IEATDssChemicalCatalog.findCompanies(data,name,'',[]));
        const matching=data.rows.filter(([company,chemical,cas])=>ids.has(company)&&[data.names[chemical],data.cas[cas]].some(value=>String(value).toLowerCase().includes(term)));
        return {title:'สารเคมี DSS ของโรงงานที่เลือก',truncated:matching.length>25,items:matching.slice(0,25).map(([,chemical,cas])=>[data.names[chemical],data.cas[cas]].filter(Boolean).join(' · '))};
      }));
    }
    const settled=await Promise.allSettled(tasks);
    if(id!==(auxiliary?auxiliaryId:nearbyId))return;
    results.replaceChildren(el('h3','ข้อมูลในรัศมี '+radius.value+' กม. · '+type.selectedOptions[0].textContent));
    let found=false;
    const cards=el('div',null,'incident-result-cards');
    if(forReport)results.append(cards);
    settled.forEach((result,i)=>{
      if(result.status==='rejected'){(forReport?cards:results).append(el('p','โหลดไม่ได้ · '+(sources[i]?.layer.title||'DSS')));return;}
      const section=result.value;
      if(!section)return;
      found ||= section.items.length>0;
      if(forReport!==true&&!section.items.length)return;
      const group=el('details'), list=el('ul');
      group.append(el('summary',section.title+' ('+section.items.length+(section.truncated?'+':'')+')'));
      section.items.forEach(item=>list.append(el('li',item)));
      group.append(list);(forReport?cards:results).append(group);
    });
    if(!found)results.append(el('p','ไม่พบรายการที่ตรงกันจากแหล่งที่โหลดสำเร็จ'));
    if(forReport===true)return settled.map((entry,i)=>entry.status==='fulfilled'?entry.value:{title:sources[i]?.layer.title||'DSS',failed:true}).filter(Boolean);
  }
  function place(point,label){
    sketch.cancel();
    origin=point;name=label;
    pinLayer.removeAll();
    pin=new Graphic({geometry:point,symbol:{type:'picture-marker',url:'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40"><path fill="#c64032" stroke="#fff" stroke-width="2" d="M16 1C8 1 2 7 2 15c0 10 14 24 14 24s14-14 14-24C30 7 24 1 16 1Z"/><circle cx="16" cy="15" r="8" fill="#fff"/><path stroke="#c64032" stroke-width="2.5" stroke-linecap="round" d="M16 10v6m0 4v.2"/></svg>'),width:26,height:34,yoffset:17}});
    pinLayer.add(pin);
    draw();updateNearby();queueReport();openIncident();
    message.textContent='จุดเกิดเหตุ · '+name+' · คลิกหมุดแล้วลากเพื่อย้ายจุด';
  }
  sketch.on('update',event=>{
    const moved=event.graphics[0];
    if(moved!==pin||!moved?.geometry)return;
    if(event.state==='active'||event.state==='complete'){origin=moved.geometry;draw();}
    if(event.state==='complete'){updateNearby();queueReport();openIncident();}
  });
  $('coveragePickIncident').onclick=()=>{picking=true;message.textContent='คลิกบนแผนที่เพื่อกำหนดจุดเกิดเหตุ';$('coverageMap').scrollIntoView({block:'nearest'});};
  view.on('click',event=>{
    if(!picking||!event.mapPoint)return;
    event.stopPropagation();picking=false;place(event.mapPoint,name||'จุดเกิดเหตุ');
  });
  async function syncReport(manual=true){
    if(!origin||!selectedFactory){message.textContent='เลือกโรงงานก่อนเปิดรายงาน';return;}
    if(!form.reportValidity())return;
    const button=$('coverageOpenReport'),frame=$('emergencyReportFrame');
    const point={lat:origin.latitude,lng:origin.longitude},attrs={...selectedFactory};
    const km=Number(radius.value),incidentType=type.value;
    const revision=incidentRevision;
    button.disabled=true;
    window.ieatCoverageReport={company:name,point,km,incidentType,status:'loading'};
    window.dispatchEvent(new Event('ieat-coverage-context-updated'));
    try{
      const rows=await updateNearby(true);
      if(revision!==incidentRevision)return;
      if(!rows)throw Error('จุดเกิดเหตุหรือเงื่อนไขค้นหาเปลี่ยน กรุณาเปิดรายงานอีกครั้ง');
      window.ieatCoverageReport={company:name,point,km,incidentType,rows,status:'loading'};
      let doc;
      for(let i=0;i<60;i++){
        doc=frame.contentDocument;
        if(typeof frame.contentWindow?.dssApplyIncidentContext==='function')break;
        await new Promise(resolve=>setTimeout(resolve,150));
      }
      if(!doc?.getElementById('pngBtn')?.onclick||!doc.getElementById('bufferKm1'))throw Error('รายงานยังโหลดไม่เสร็จ');
      if(revision!==incidentRevision)return;
      window.ieatIncidentChosen=true;
      const context={id:String(Date.now())+'-'+revision,company:name,point,km,incidentType,rows,attributes:attrs,status:'loading'};
      window.ieatCoverageReport=context;
      window.dispatchEvent(new Event('ieat-coverage-context-updated'));
      if(typeof frame.contentWindow.dssApplyIncidentContext!=='function')throw Error('รายงานเวอร์ชันใหม่ยังไม่พร้อม กรุณารีเฟรชหน้า');
      const summary=await frame.contentWindow.dssApplyIncidentContext(context);
      if(revision!==incidentRevision||!summary)return;
      context.summary=summary;context.status='rendering-map';
      const circle=draw();
      await view.goTo({target:circle.extent.expand(1.15)},{animate:false});
      if(revision!==incidentRevision)return;
      openIncident();
      const mapImage=await window.ieatCaptureCoverageMap();
      if(revision!==incidentRevision)return;
      frame.contentWindow.dssSetCoverageMapImage(mapImage,context.id);
      context.status='ready';
      window.dispatchEvent(new Event('ieat-coverage-context-updated'));
      if(manual)$('dashboardDownloadImage')?.focus({preventScroll:true});
      message.textContent='อัปเดตโรงงาน ประเภทเหตุ รัศมี แผนที่ รายงาน และข้อความ LINE แล้ว';
    }catch(error){if(revision===incidentRevision){if(window.ieatCoverageReport)window.ieatCoverageReport.status='error';window.dispatchEvent(new Event('ieat-coverage-context-updated'));message.textContent=error.message||'เปิดรายงานไม่ได้ กรุณาลองอีกครั้ง';}}
    finally{button.disabled=false;}
  };
  $('coverageOpenReport').onclick=event=>{event.preventDefault();hasSearched=true;incidentRevision++;syncReport(true);};
  radius.onchange=()=>{incidentRevision++;if(window.ieatCoverageReport)window.ieatCoverageReport.status='changed';window.dispatchEvent(new Event('ieat-coverage-context-updated'));draw();openIncident();message.textContent='กดค้นหาเพื่อใช้ระยะค้นหาใหม่ในรายงาน';};
  type.onchange=()=>{incidentRevision++;if(window.ieatCoverageReport)window.ieatCoverageReport.status='changed';window.dispatchEvent(new Event('ieat-coverage-context-updated'));draw();openIncident();message.textContent='กดค้นหาเพื่อใช้ประเภทเหตุใหม่ในรายงาน';};
  $('coverageSearchSupport').onclick=()=>{if(origin&&selectedFactory)updateNearby(false,true);else message.textContent='ค้นหาและเลือกโรงงานก่อนค้นหาข้อมูลสนับสนุน';};
  const searchFactories=async event=>{
    event.preventDefault();
    const value=$('coverageFactoryQuery').value.trim();
    if(!value){$('coverageSearchSupport').click();return;}
    const id=++searchId;
    const combined=value.match(/^(\d+)\s*\((.+)\)$/);
    const terms=(combined?[combined[1],combined[2]]:[value]).map(term=>sql(term.toUpperCase()));
    message.textContent='กำลังค้นหาโรงงานจากทะเบียน กนอ.…';matches.replaceChildren();
    try{
      await factory.load();
      const q=factory.createQuery();
      q.where=fields.slice(0,4).flatMap(field=>terms.map(term=>"UPPER("+field+") LIKE '%"+term+"%'")).join(' OR ');
      q.outFields=['*'];q.returnGeometry=true;q.num=30;q.outSpatialReference=view.spatialReference;
      const data=await factory.queryFeatures(q);
      if(id!==searchId)return;
      message.textContent=data.features.length?'เลือกโรงงานจากผลค้นหา':'ไม่พบชื่อหรือเลขทะเบียนที่ตรงกัน';
      const select=async feature=>{
        const point=feature.geometry?.type==='polygon'?feature.geometry.centroid:feature.geometry;
        if(!point){message.textContent='โรงงานนี้ไม่มีพิกัดสำหรับปักหมุด';return;}
        const label=feature.attributes[factoryName]||feature.attributes['ชื่อบริษัทภาษาอังกฤษ']||'โรงงานที่เลือก';
        hasSearched=false;incidentRevision++;
        selectedFactory=feature.attributes;
        matches.replaceChildren();place(point,label);
        hasSearched=true;incidentRevision++;
        await syncReport(true);
      };
      if(data.features.length===1){await select(data.features[0]);return;}
      for(const feature of data.features){
        const row=feature.attributes,button=el('button',[row[factoryName],row[newReg],row[oldReg]].filter(Boolean).join(' · ')||'โรงงานที่ไม่ระบุชื่อ');
        button.type='button';button.onclick=()=>select(feature);matches.append(button);
      }
      if(data.exceededTransferLimit||data.features.length===30)matches.append(el('p','แสดงไม่เกิน 30 รายการ โปรดระบุชื่อหรือเลขทะเบียนเพิ่ม'));
    }catch(error){if(id===searchId)message.textContent='ค้นหาทะเบียนโรงงานไม่ได้ กรุณาลองอีกครั้ง';}
  };
  const runSearch=async event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    if(!$('coverageFactoryQuery').value.trim()){message.textContent='กรอกชื่อโรงงานหรือเลขทะเบียนก่อนค้นหา';$('coverageFactoryQuery').focus();return;}
    if(selectedFactory&&origin){hasSearched=true;incidentRevision++;await syncReport(true);}
    else await searchFactories(event);
  };
  $('coverageOpenReport').onclick=runSearch;
  $('coverageFactoryQuery').addEventListener('keydown',event=>{if(event.key==='Enter')runSearch(event);});
  $('coverageFactoryQuery').addEventListener('input',()=>{selectedFactory=null;hasSearched=false;searchId++;auxiliaryId++;matches.replaceChildren();incidentRevision++;if(window.ieatCoverageReport)window.ieatCoverageReport.status='changed';window.dispatchEvent(new Event('ieat-coverage-context-updated'));});
  form.onsubmit=runSearch;

  const chemicalForm=$('coverageChemicalForm'),chemicalOutput=$('coverageChemicalOutput');
  const chemicalDownload=$('coverageChemicalDownload'),chemicalStatus=$('coverageChemicalStatus');
  if(!chemicalForm)return;
  const chemicalKey=()=>[window.ieatCoverageReport?.id,window.ieatCoverageReport?.status,origin?.latitude,origin?.longitude,selectedFactory?.[newReg],radius.value,...new FormData(chemicalForm).values()].join('|');
  let savedChemicalKey='';
  chemicalForm.addEventListener('input',()=>{chemicalDownload.disabled=true;});
  window.addEventListener('ieat-coverage-context-updated',()=>{chemicalDownload.disabled=!savedChemicalKey||savedChemicalKey!==chemicalKey();});
  chemicalForm.onsubmit=async event=>{
    event.preventDefault();
    chemicalOutput.replaceChildren();chemicalDownload.disabled=true;savedChemicalKey='';
    if(!origin||!selectedFactory||window.ieatCoverageReport?.status!=='ready'){chemicalStatus.textContent='ค้นหาและเลือกโรงงานก่อน';return;}
    const term=$('coverageChemicalQuery').value.trim().toLowerCase(),scope=$('coverageChemicalScope').value;
    if(!term){chemicalStatus.textContent='กรอกชื่อสารเคมีหรือเลข CAS';return;}
    const estate=selectedFactory['นิคมอุตสาหกรรม'],km=Number(radius.value);
    if(scope==='estate'&&(!estate||estate==='—')){chemicalStatus.textContent='โรงงานที่เลือกไม่มีชื่อนิคมฯ ในทะเบียน';return;}
    if(scope==='radius'&&!radius.reportValidity())return;
    const key=chemicalKey(),submit=chemicalForm.querySelector('button');
    submit.disabled=true;chemicalStatus.textContent='กำลังค้นหาสารเคมีจาก DSS…';
    try{
      const catalog=window.IEATDssChemicalCatalog;
      if(!catalog)throw Error('โหลดเครื่องมือค้นหา DSS ไม่สำเร็จ');
      await factory.load();
      const q=factory.createQuery();q.outFields=fields;q.returnGeometry=false;
      if(scope==='estate')q.where="นิคมอุตสาหกรรม = '"+sql(estate)+"'";
      else {q.geometry=new Circle({center:origin,radius:km,radiusUnit:'kilometers',geodesic:true});q.spatialRelationship='intersects';}
      const [data,ids]=await Promise.all([catalog.load(),factory.queryObjectIds(q)]);
      if(!data?.companies?.length)throw Error('ฐานข้อมูลสารเคมี DSS ยังไม่พร้อม');
      const companyIds=new Set();
      for(let offset=0;offset<ids.length;offset+=200){
        const page=await factory.queryFeatures({objectIds:ids.slice(offset,offset+200),outFields:fields,returnGeometry:false});
        if(page.exceededTransferLimit)throw Error('ทะเบียนโรงงานส่งข้อมูลมาไม่ครบ กรุณาลดขอบเขตค้นหา');
        for(const {attributes:a} of page.features){
          for(const id of catalog.findCompanies(data,a[factoryName],a['นิคมอุตสาหกรรม'],[a[newReg],a[oldReg]]))companyIds.add(id);
        }
      }
      if(key!==chemicalKey()){chemicalStatus.textContent='เงื่อนไขเปลี่ยน กรุณาค้นหาใหม่';return;}
      const found=new Set();
      for(const [company,chemical,cas] of data.rows){
        if(!companyIds.has(company))continue;
        const label=data.names[chemical],code=data.cas[cas];
        if(![label,code].some(value=>String(value).toLowerCase().includes(term)))continue;
        found.add([data.companies[company][0],label,code&&'CAS '+code].filter(Boolean).join(' · '));
      }
      chemicalOutput.append(el('h4','ผลค้นหาสารเคมี DSS'),el('p',scope==='estate'?estate:name+' · รัศมี '+km+' กม.'));
      chemicalOutput.append(el('p','คำค้น: '+term+' · '+new Date().toLocaleString('th-TH',{timeZone:'Asia/Bangkok'})));
      const list=el('ol');for(const item of found)list.append(el('li',item));
      if(found.size)chemicalOutput.append(list);
      else chemicalOutput.append(el('p','ไม่พบสารที่ตรงคำค้นในทะเบียน DSS ที่จับคู่โรงงานได้'));
      chemicalOutput.append(el('p','แหล่งข้อมูล: ทะเบียนโรงงาน กนอ. และบัญชีสารเคมี DSS · จับคู่ด้วยทะเบียนหรือชื่อและนิคมฯ'));
      chemicalStatus.textContent='จับคู่ทะเบียน DSS ได้ '+companyIds.size+' รายการบริษัท · พบ '+found.size+' รายการสาร';
      savedChemicalKey=key;chemicalDownload.disabled=false;
    }catch(error){chemicalStatus.textContent=error.message||'ค้นหาสารเคมีไม่สำเร็จ';}
    finally{submit.disabled=false;}
  };
  chemicalDownload.onclick=async()=>{
    if(!savedChemicalKey||savedChemicalKey!==chemicalKey()){chemicalDownload.disabled=true;chemicalStatus.textContent='กรุณาค้นหาใหม่ก่อนดาวน์โหลด';return;}
    chemicalDownload.disabled=true;
    try{
      const capture=$('emergencyReportFrame').contentWindow?.html2canvas;
      if(typeof capture!=='function')throw Error('เครื่องมือดาวน์โหลดยังไม่พร้อม');
      const canvas=await capture(chemicalOutput,{backgroundColor:'#fff',scale:2,logging:false});
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
      if(!blob)throw Error('สร้างภาพผลค้นหาไม่สำเร็จ');
      const url=URL.createObjectURL(blob),link=el('a');
      link.href=url;link.download='IEAT-DSS-chemical-'+Date.now()+'.png';link.click();
      setTimeout(()=>URL.revokeObjectURL(url),300000);
      chemicalStatus.textContent='สร้างภาพผลค้นหาแล้ว';
    }catch(error){chemicalStatus.textContent=error.message;}
    finally{chemicalDownload.disabled=savedChemicalKey!==chemicalKey();}
  };
 }

 function createCoverageMap(){
  const host=$('coverageMapView'), status=$('coverageMapStatus');
  if(!host)return;
  if(typeof window.require!=='function'){status.textContent='โหลดระบบแผนที่ไม่ได้';return;}
  window.require(['esri/Map','esri/views/MapView','esri/layers/FeatureLayer','esri/layers/GroupLayer','esri/widgets/LayerList','esri/widgets/Expand','esri/widgets/Home','esri/widgets/Legend','esri/layers/GraphicsLayer','esri/Graphic','esri/geometry/Circle','esri/widgets/Sketch/SketchViewModel'],
    (ArcMap,MapView,FeatureLayer,GroupLayer,LayerList,Expand,Home,Legend,GraphicsLayer,Graphic,Circle,SketchViewModel)=>{
    const riskNames=riskFields.map(f=>f.field);
    const marker=(style,color,size=11)=>({type:'simple-marker',style,color,size,outline:{color:'#fff',width:1}});
    const svgMarker=(drawing,width,height,yoffset=0)=>({
      type:'picture-marker',url:'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">'+drawing+'</svg>'),
      width,height,yoffset
    });
    const badge=(drawing,color,size=18)=>svgMarker(
      '<defs><linearGradient id="face" x1="0" y1="0" x2="0.8" y2="1"><stop offset="0" stop-color="'+color+'"/><stop offset="1" stop-color="'+color+'" stop-opacity=".82"/></linearGradient></defs>'+
      '<circle cx="12" cy="12.8" r="10.8" fill="#12263a" opacity=".18"/>'+
      '<circle cx="12" cy="11.5" r="10.5" fill="url(#face)" stroke="#fff" stroke-width="1.8"/>'+
      '<g fill="none" stroke="#fff" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" transform="translate(2.4 1.9) scale(.8)">'+drawing+'</g>',size,size);
    const pin=svgMarker('<path fill="#7942a0" stroke="#fff" stroke-width="1.4" d="M12 1a8 8 0 0 0-8 8c0 5.5 8 14 8 14s8-8.5 8-14a8 8 0 0 0-8-8Z"/><path fill="none" stroke="#fff" stroke-width="1.3" d="M7 12V7l3 2V6l3 2V5h4v7H7Zm3-1v-1m3 1v-1m3 1v-1"/>',25,25,12);
    const fireStation=badge('<path d="M6 18V10l6-4 6 4v8H6Z"/><path d="M9 18v-5h6v5m-6-3h6"/><path d="M12 7V5"/>','#d34a32');
    const hospital=badge('<path d="M9 5h6v4h4v6h-4v4H9v-4H5V9h4Z"/>','#c53e58');
    const supportSymbols={
      fire:fireStation,hospital,
      hydrant:badge('<path d="M9 18V9a3 3 0 0 1 6 0v9M7 18h10M8 10H6v4h3m7-4h2v4h-3M9 7h6M12 4v2"/><circle cx="12" cy="12" r="1.6"/>','#167dad'),
      police:badge('<path d="m12 4 7 3v5c0 4-7 8-7 8s-7-4-7-8V7l7-3Z"/><path d="m12 8 1.1 2.2 2.4.3-1.8 1.8.4 2.5-2.1-1.2-2.1 1.2.4-2.5-1.8-1.8 2.4-.3Z"/>','#365c9d'),
      community:badge('<path d="m4 12 5-4 5 4m-8-1v7h6v-7m0-3 3-3 5 4m-6 0v9h4V9M8 18v-3h2"/>','#23866b'),
      communityRisk:badge('<path d="m4 12 5-4 5 4m-8-1v7h6v-7m0-3 3-3 5 4m-6 0v9h4V9M8 18v-3h2"/>','#23866b'),
      waterWatch:badge('<path d="M12 4s-5 6-5 9a5 5 0 0 0 10 0c0-3-5-9-5-9Z"/><path d="M5 19h14m-8-6h2m-2 3h2"/>','#138fa9'),
      school:badge('<path d="m4 9 8-4 8 4-8 4-8-4Zm4 2v5c3 2 5 2 8 0v-5m4-2v6"/>','#ae7419'),
      cctv:badge('<path d="m5 7 12 3-2 7L3 14l2-7Zm12 5 4-1-2 6-3-2M9 16v3h7"/><circle cx="7" cy="11" r="1"/>','#365477',18)
    };
    const polygon=(color,outline)=>({type:'simple-fill',color,outline:{color:outline,width:1}});
    const layer=(path,title,{visible=false,url=base+encodeURI(path),fields=[],definitionExpression,symbol,minScale=0,opacity=1}={})=>new FeatureLayer({
      url,title,visible,definitionExpression,minScale,opacity,
      ...(symbol?{renderer:{type:'simple',symbol}}:{}),
      popupEnabled:fields.length>0,
      ...(fields.length?{popupTemplate:{title:'{'+fields[0]+'}',content:[{type:'fields',fieldInfos:fields.map(fieldName=>({fieldName}))}]}}:{})
    });
    const center=layer('e_PP_2025/FeatureServer/1','จุดศูนย์กลางนิคมฯ / ท่าเรือฯ',{visible:true,fields:['สำนักงานนิคมฯ'],symbol:pin});
    const zones=layer('Map/FeatureServer/10','เขตประกอบการภายในนิคมฯ (กนอ.)',{visible:true,opacity:.55,minScale:1500000});
    const businesses=layer('EPP_2026_V1/FeatureServer/0','แปลงผู้ประกอบการ EPP 2026',{minScale:350000,symbol:polygon([105,91,156,.16],'#7967a8')});
    const riskSymbols=[
      polygon([240,155,46,.32],'#b46713'),polygon([221,56,59,.34],'#b12c33'),polygon([123,73,173,.29],'#6b3a92')
    ];
    const risks=riskFields.map((f,i)=>layer('e_PP/FeatureServer/0',f.label,{
      minScale:1000000,symbol:riskSymbols[i],definitionExpression:f.field+" = 'เข้าข่าย'",fields:['ชื่อบริษัทภาษาไทย','นิคมอุตสาหกรรม',...riskNames]
    }));
    const support=datasets.filter(d=>!['estate','business'].includes(d.id)).concat(extraSupport).map(d=>layer(d.path,d.label,{
      visible:['fire','hospital','hydrant','police','community','cctv'].includes(d.id),minScale:1000000,symbol:supportSymbols[d.id],
      fields:[...new Set([...d.names.slice(0,1),...d.estates.slice(0,1)])]
    }));
    const supportColors={fire:'#d34a32',hospital:'#c53e58',hydrant:'#167dad',police:'#365c9d',community:'#23866b',communityRisk:'#23866b',waterWatch:'#138fa9',school:'#ae7419',cctv:'#365477'};
    const supportDefinitions=datasets.filter(d=>!['estate','business'].includes(d.id)).concat(extraSupport);
    support.forEach((item,index)=>{
      const def=supportDefinitions[index],color=supportColors[def.id]||'#586b7f';
      if(['hospital','fire','police'].includes(def.id)){
        item.outFields=['*'];item.popupEnabled=true;
        item.popupTemplate={title:'{'+def.names[0]+'}',outFields:['*'],content:feature=>{
          const attrs=feature.graphic?.attributes||{},box=el('div');
          const name=String(pick(attrs,def.names));
          box.append(el('strong',name),el('p',String(pick(attrs,def.estates))));
          appendContact(box,contactDetails(name,def.id,attrs));
          return box;
        }};
      }

      if(def.id==='hydrant'||def.id==='cctv')item.minScale=150000;
      item.when(()=>{
        if(item.geometryType!=='point')return;
        item.featureReduction={
          type:'cluster',clusterRadius:(def.id==='hydrant'?'65px':'55px'),clusterMinSize:'24px',clusterMaxSize:'34px',maxScale:2000,
          symbol:{type:'simple-marker',style:'circle',color,outline:{color:'#fff',width:1.5}},
          labelingInfo:[{
            deconflictionStrategy:'none',labelPlacement:'center-center',
            labelExpressionInfo:{expression:"Text($feature.cluster_count, '#,###')"},
            symbol:{type:'text',color:'#fff',font:{family:'Sarabun',size:10,weight:'bold'}}
          }],
          popupTemplate:{title:def.label+' · {cluster_count} จุด',content:'กลุ่มจุดข้อมูลที่อยู่ใกล้กัน ซูมเข้าเพื่อดูตำแหน่งและรายละเอียดรายจุด'}
        };
      }).catch(()=>{});
    });
    const publicBase='https://gistdaportal.gistda.or.th/arcgis/rest/services/Hosted/Identity_gdb/FeatureServer/';
    const supplemental=[[0,'จุดตรวจวัดน้ำ'],[1,'ระบบบำบัดน้ำเสีย'],[2,'สถานีตรวจวัดคุณภาพอากาศ'],[3,'สถานที่รวบรวมและจัดการขยะ']].map(([id,title])=>layer('',title,{url:publicBase+id}));
    const extraSymbols=[
      supportSymbols.waterWatch,
      badge('<path d="M5 8h14v9H5Zm0 3h14M8 5v3m8-3v3M8 14h2m4 0h2"/>','#168f9a'),
      badge('<path d="M5 8h10a2 2 0 1 0-2-2M5 12h14a2 2 0 1 1-2 2M5 16h5"/>','#388578'),
      badge('<path d="M7 8h10l-1 11H8L7 8Zm-2 0h14M9 8V5h6v3m-4 3v5m3-5v5"/>','#768338')
    ];
    supplemental.forEach((item,index)=>item.when(()=>{if(item.geometryType==='point')item.renderer={type:'simple',symbol:extraSymbols[index]};}).catch(()=>{}));
    const group=(title,layers)=>new GroupLayer({title,layers,visibilityMode:'independent'});
    const map=new ArcMap({basemap:$('coverageBasemap')?.value||'gray-vector',layers:[group('พื้นที่และแปลงผู้ประกอบการ กนอ.',[zones,businesses]),group('ความเสี่ยงโรงงาน กนอ.',risks),group('ข้อมูลเสริม GISTDA',supplemental),group('ข้อมูลสนับสนุน กนอ.',support),group('ตำแหน่งนิคมฯ กนอ.',[center])]});
    const view=new MapView({container:host,map,center:[101,14],zoom:5});
    const factorySelection=new GraphicsLayer({title:'โรงงานที่เลือกจากทะเบียน',listMode:'hide'});
    map.add(factorySelection);
    let factorySelectionSequence=0;
    const dssCache=new Map();
    const normIdentity=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/นิคมอุตสาหกรรม|นิคมฯ|สำนักงานนิคมฯ|[\s\u200b-\u200d]/g,'');
    const rowsOf=data=>{
      const rows=Array.isArray(data)?data:data.features||data.data||data.records;
      if(!Array.isArray(rows))throw Error('รูปแบบข้อมูลไม่ถูกต้อง');
      return rows.map(row=>row.properties||row.attributes||row);
    };
    function loadPopupSource(url){
      if(!dssCache.has(url))dssCache.set(url,fetch(url,{signal:AbortSignal.timeout(25000)}).then(response=>{
        if(!response.ok)throw Error('HTTP '+response.status);return response.json();
      }).then(rowsOf).catch(error=>{dssCache.delete(url);throw error;}));
      return dssCache.get(url);
    }
    function matchPopupCompany(rows,row){
      const attrs=row.attrs||{};
      const numbers=[attrs['เลขทะเบียนใหม่'],attrs['เลขทะเบียนเดิม'],row.registration].filter(value=>value&&value!=='—').map(normIdentity);
      let candidates=rows.filter(p=>numbers.includes(normIdentity(p.comp_no)));
      if(!candidates.length)candidates=rows.filter(p=>normIdentity(p.comp_name)===normIdentity(row.name)&&normIdentity(p.comp_zone)===normIdentity(row.estate));
      if(candidates.length>1){const active=candidates.filter(p=>p.doc_active===true);if(active.length===1)return active[0];throw Error('พบหลายระเบียน ยังยืนยันการจับคู่โรงงานไม่ได้');}
      return candidates[0]||null;
    }
    const popupSources=[
      {title:'ข้อมูลสารเคมี',url:'./dss-data.json',kind:'chemical'},
      {title:'อุปกรณ์ระงับเหตุ',url:'./data/equipment_latest.json',kind:'equipment'},
      {title:'แผนผังโรงงาน',url:'https://emonitor.ieat.go.th/envisys/gis/file/chartXGGEz35P2ksHhyywS7A4SzLddPpt8fqqVTCoaR1i18T2Bt5OMxIsUgvzGMUu5gAb.json',kind:'plan'},
      {title:'แผนผังทีมตอบโต้ภาวะฉุกเฉิน',url:'https://emonitor.ieat.go.th/envisys/gis/file/plotplanPFdxm48K5k8oWuAg8G3Av0yjyWEOLrmiVifKJiyF5d5vL4EM6gCDw3tKEhmvKT9q.json',kind:'plan'}
    ];
    function renderPopupRecord(host,p,kind){
      host.replaceChildren();
      if(!p){host.append(el('p','ไม่พบข้อมูลที่จับคู่กับโรงงานนี้'));return;}
      if(p.doc_active===false){host.append(el('p','ระเบียนนี้ไม่ได้ใช้งานในระบบ DSS'));return;}
      const list=el('ul');
      if(kind==='chemical'||kind==='equipment'){
        const prefix=kind==='chemical'?'hazard':'equipment';
        const keys=Object.keys(p).filter(key=>new RegExp('^'+prefix+'\\d+_name$').test(key)&&p[key]).sort((a,b)=>Number(a.match(/\d+/)[0])-Number(b.match(/\d+/)[0]));
        for(const key of keys){
          const stem=key.slice(0,-4);
          const parts=kind==='chemical'?[p[key],p[stem+'casNo']?'CAS '+p[stem+'casNo']:'',p[stem+'volume'],p[stem+'storageUnit']]:[p[key],p[stem+'type'],p[stem+'amount']!=null?'จำนวน '+p[stem+'amount']:'',p[stem+'amountUnit'],p[stem+'volume']!=null?'ขนาด '+p[stem+'volume']:'',p[stem+'volumeUnit']];
          list.append(el('li',parts.filter(value=>value!=null&&String(value).trim()).join(' · ')));
        }
        host.append(list.children.length?list:el('p','ไม่พบรายการในระเบียนนี้'));
      }else{
        const links=new Set();
        for(const [key,value] of Object.entries(p)){
          if(typeof value!=='string'||!/(?:url|path|file)$/i.test(key))continue;
          try{const url=new URL(value);if(['https:','http:'].includes(url.protocol))links.add(url.href);}catch{}
          if(/<(?:a|img)\b/i.test(value)){
            const doc=new DOMParser().parseFromString(value,'text/html');
            doc.querySelectorAll('a[href],img[src]').forEach(item=>{
              try{const url=new URL(item.getAttribute('href')||item.getAttribute('src'),'https://emonitor.ieat.go.th/');if(['https:','http:'].includes(url.protocol))links.add(url.href);}catch{}
            });
          }
        }
        for(const url of links){
          const link=el('a','เปิดแผนผัง / เอกสารแนบ');link.href=url;link.target='_blank';link.rel='noopener noreferrer';host.append(link);
          if(/\.(?:png|jpe?g|webp)(?:[?#]|$)/i.test(url)){const image=el('img');image.src=url;image.alt='แผนผังของโรงงานที่เลือก';image.loading='lazy';image.onerror=()=>image.remove();host.append(image);}
        }
        if(!links.size)host.append(el('p','ไม่พบไฟล์แผนผังที่เปิดดูได้ในข้อมูลต้นทาง'));
      }
    }
    window.ieatOpenFactoryPopup=async(row,path)=>{
      const sequence=++factorySelectionSequence;
      await view.when();
      const result=await json(base+path+'/query',new URLSearchParams({f:'json',objectIds:String(row.id),outFields:'*',returnGeometry:'true',outSR:'4326'}));
      if(sequence!==factorySelectionSequence)return;
      const feature=result.features?.[0],raw=feature?.geometry;
      if(!raw)throw Error('ไม่มีพิกัดโรงงาน');
      const geometry={...raw,type:raw.rings?'polygon':raw.paths?'polyline':'point',spatialReference:{wkid:4326}};
      const box=el('div',null,'factory-dss-popup');
      box.append(el('strong',row.name),el('p',row.estate+' · เลขทะเบียน '+row.registration));
      const factoryPhoneBox=el('div');
      factoryPhoneBox.append(el('h4','เบอร์ติดต่อโรงงาน / สำนักงาน'));
      appendContact(factoryPhoneBox,contactDetails(row.name,'business',feature.attributes||row.attrs));
      box.append(factoryPhoneBox);

      const hosts=popupSources.map(source=>{box.append(el('h4',source.title));const content=el('div');content.append(el('p','กำลังโหลดข้อมูล…'));box.append(content);return content;});
      box.append(el('small','แหล่งข้อมูล: ระบบ DSS กนอ. · แสดงตามระเบียนที่จับคู่ได้'));
      const graphic=new Graphic({geometry,attributes:feature.attributes,symbol:geometry.type==='point'?{type:'simple-marker',size:15,color:'#7942a0',outline:{color:'#fff',width:2}}:geometry.type==='polygon'?{type:'simple-fill',color:[121,66,160,.15],outline:{color:'#7942a0',width:2}}:{type:'simple-line',color:'#7942a0',width:3},popupTemplate:{title:row.name,content:()=>box}});
      factorySelection.removeAll();factorySelection.add(graphic);
      await view.goTo(geometry.type==='point'?{target:geometry,zoom:17}:{target:geometry});
      if(sequence!==factorySelectionSequence)return;
      view.openPopup({features:[graphic],location:geometry.type==='point'?geometry:graphic.geometry.extent.center});
      popupSources.forEach((source,index)=>{
        loadPopupSource(source.url).then(rows=>{if(sequence===factorySelectionSequence)renderPopupRecord(hosts[index],matchPopupCompany(rows,row),source.kind);}).catch(error=>{
          if(sequence!==factorySelectionSequence)return;
          hosts[index].replaceChildren(el('p',error.message.includes('หลายระเบียน')?error.message:'โหลดข้อมูลไม่สำเร็จ'));
          const retry=el('button','ลองโหลดใหม่');retry.type='button';retry.onclick=()=>{hosts[index].replaceChildren(el('p','กำลังโหลดข้อมูล…'));loadPopupSource(source.url).then(rows=>renderPopupRecord(hosts[index],matchPopupCompany(rows,row),source.kind)).catch(()=>hosts[index].replaceChildren(el('p','โหลดข้อมูลไม่สำเร็จ')));};hosts[index].append(retry);
        });
      });
    };

    function resizeSupportSymbols(){
      const baseSize=view.scale>100000?13:view.scale>20000?15:view.scale>5000?17:19;
      support.forEach((item,index)=>{
        if(item.renderer?.symbol?.type!=='picture-marker')return;
        const def=supportDefinitions[index],size=baseSize-(['hydrant','cctv'].includes(def.id)?2:0);
        if(Number(item.renderer.symbol.width)===size)return;
        const renderer=item.renderer.clone();renderer.symbol.width=size;renderer.symbol.height=size;item.renderer=renderer;
      });
    }
    view.watch('stationary',stationary=>{if(stationary)resizeSupportSymbols();});
    view.when(resizeSupportSymbols).catch(()=>{});

    const basemapSelect=$('coverageBasemap');
    if(basemapSelect){
      basemapSelect.disabled=false;
      basemapSelect.onchange=()=>{map.basemap=basemapSelect.value;};
    }
    window.ieatCoverageMapNavigate=async data=>{
      if(!view.ready)return;
      if(data.type==='dss:report-map-pan'&&[data.dx,data.dy].every(Number.isFinite)){
        const center=view.toMap({x:view.width*(.5-data.dx),y:view.height*(.5-data.dy)});
        if(center)await view.goTo({target:center,zoom:view.zoom},{animate:false});
      }else if(data.type==='dss:report-map-zoom'&&[1,-1].includes(data.delta)){
        const x=Number.isFinite(data.x)?Math.max(0,Math.min(1,data.x)):.5,y=Number.isFinite(data.y)?Math.max(0,Math.min(1,data.y)):.5;
        const target=view.toMap({x:view.width*x,y:view.height*y});
        if(target)await view.goTo({target,zoom:view.zoom+data.delta},{animate:false});
      }
    };
    let previewTimer,previewSequence=0;
    window.ieatCaptureCoverageMap=async()=>{
      if(!view.ready||!window.ieatCoverageReport)return null;
      await view.when();
      if(!view.stationary||view.updating)await new Promise((resolve,reject)=>{
        let timer;
        const handles=[];
        const cleanup=()=>{clearTimeout(timer);handles.forEach(handle=>handle.remove());};
        const ready=()=>{if(view.stationary&&!view.updating){cleanup();resolve();}};
        handles.push(view.watch('stationary',ready),view.watch('updating',ready));
        timer=setTimeout(()=>{cleanup();reject(Error('แผนที่ยังโหลดไม่ครบ กรุณารอสักครู่'));},12000);
        ready();
      });
      const aspect=8/5,areaWidth=Math.min(view.width,view.height*aspect),areaHeight=areaWidth/aspect;
      const area={x:(view.width-areaWidth)/2,y:(view.height-areaHeight)/2,width:areaWidth,height:areaHeight};
      const shot=await view.takeScreenshot({format:'png',area,width:1972,height:1232});
      return shot.dataUrl;
    };
    window.ieatSyncCoverageMapPreview=async()=>{
      const context=window.ieatCoverageReport;
      if(!context?.id||context.status!=='ready'||!view.stationary||view.updating)return;
      const id=++previewSequence,image=await window.ieatCaptureCoverageMap();
      if(id!==previewSequence||window.ieatCoverageReport?.id!==context.id)return;
      const frame=$('emergencyReportFrame');
      frame?.contentWindow?.dssSetCoverageMapImage?.(image,context.id);
    };
    const schedulePreview=()=>{clearTimeout(previewTimer);previewTimer=setTimeout(()=>window.ieatSyncCoverageMapPreview().catch(()=>{}),200);};
    view.watch('stationary',value=>{if(value)schedulePreview();});
    view.watch('updating',value=>{if(!value)schedulePreview();});
    $('coverageBasemap')?.addEventListener('change',schedulePreview);

    view.ui.add(new Home({view}),'top-left');
    view.ui.add(new Expand({view,content:new LayerList({view,selectionEnabled:false}),expandTooltip:'ชั้นข้อมูลแผนที่'}),'top-right');
    view.ui.add(new Expand({view,content:new Legend({view}),expandTooltip:'คำอธิบายสัญลักษณ์'}),'bottom-left');
    const factory=layer('e_PP/FeatureServer/0','โรงงานใกล้เคียง');
    const supportData=datasets.filter(d=>!['estate','business'].includes(d.id)).concat(extraSupport);
    view.when(()=>bindIncidentSearch(view,map,factory,[
      {layer:factory,fields:['ชื่อบริษัทภาษาไทย','เลขทะเบียนใหม่','เลขทะเบียนเดิม']},
      ...support.map((item,i)=>({layer:item,fields:supportData[i].names})),
      ...supplemental.map(item=>({layer:item,fields:[]}))
    ],GraphicsLayer,Graphic,Circle,SketchViewModel)).catch(()=>{});
    const layers=[center,zones,businesses,...support,...risks,...supplemental];
    view.when(()=>{status.textContent='ซูมเข้าหรือเลือกนิคมฯ เพื่อดูเขตประกอบการและทรัพยากรใกล้เคียง';},()=>{status.textContent='โหลดแผนที่ไม่ได้';});
    Promise.allSettled(layers.map(l=>l.load())).then(results=>{
      const failures=results.flatMap((r,i)=>r.status==='rejected'?[layers[i].title]:[]);
      if(failures.length)status.textContent='โหลดบางชั้นไม่ได้ · '+failures.join(' · ');
    });
    let request=0;
    $('coverageEstate').addEventListener('change',async event=>{
      const sequence=++request,select=event.currentTarget;
      const name=select.selectedOptions[0]?.textContent;
      try{
        await view.when();
        if(!select.value){if(sequence===request)await view.goTo({center:[101,14],zoom:5});return;}
        const query=center.createQuery();
        query.where="สำนักงานนิคมฯ = '"+name.replace(/'/g,"''")+"'";
        query.returnGeometry=true;
        const result=await center.queryFeatures(query);
        if(sequence===request&&result.features.length)await view.goTo({target:result.features,zoom:13});
      }catch(error){if(sequence===request&&error.name!=='AbortError')status.textContent='ซูมไปยังนิคมฯ ที่เลือกไม่ได้';}
    });
  },()=>{status.textContent='โหลดเครื่องมือแผนที่ไม่ได้';});
 }

  function createCoverageOverview(){
  const search=$('coverageEstateSearch'), select=$('coverageEstate');
  const risk=$('coverageRisk'), detail=$('coverageDetail');
  const registry=datasets.find(d=>d.id==='estate');
  const business=riskRegister;
  const supportLayers=datasets.filter(d=>!['estate','business'].includes(d.id)).concat(extraSupport);
  const groups=[riskFields[0],riskFields[2],riskFields[1]];
  const stateLabel={loading:'กำลังโหลด',error:'เชื่อมต่อไม่ได้',partial:'ข้อมูลยังไม่ครบ'};
  let drill='';
  let estateNames=[], showEstateMatches=false;
  const estateForm=$('coverageEstateForm');
  const estateResults=el('div',null,'coverage-estate-results');
  const estateStatus=el('p');
  estateStatus.setAttribute('role','status');
  estateResults.append(estateStatus);
  estateResults.hidden=true;
  estateForm.append(estateResults);

  function matchingEstates(){
    const query=normalize(search.value);
    return query?estateNames.filter(([key])=>key.includes(query)):[];
  }
  function chooseEstate(key,name=''){
    showEstateMatches=false;
    search.value=name;
    select.value=key;
    select.dispatchEvent(new Event('change'));
  }
  function renderEstateMatches(){
    const matches=matchingEstates();
    estateResults.hidden=!showEstateMatches||!normalize(search.value);
    if(estateResults.hidden)return;
    estateStatus.textContent=matches.length?'เลือกนิคมฯ จากผลค้นหา':
      registry.status==='loading'?'กำลังโหลดรายชื่อนิคมฯ…':
      registry.status==='error'?'โหลดรายชื่อนิคมฯ ไม่ได้':'ไม่พบชื่อนิคมฯ ที่ตรงกัน';
    estateResults.replaceChildren(estateStatus,...matches.map(([key,name])=>{
      const option=el('button',name);
      option.type='button';
      option.onclick=()=>{
        search.focus();
        chooseEstate(key,name);
      };
      return option;
    }));
  }
  function line(label,count,max,description,onClick){
    const row=el(onClick?'button':'div',null,'coverage-bar');
    if(onClick){row.type='button';row.onclick=onClick;}
    const plot=el('span',null,'coverage-track'),fill=el('span');
    const value=el('strong',count===null?'—':number(count));
    plot.setAttribute('aria-hidden','true');
    fill.style.height=(count===null?0:count/Math.max(1,max)*100)+'%';
    plot.append(fill);
    row.append(value,plot,el('span',label,'coverage-bar-label'));
    if(description)row.append(el('small',description));
    return row;
  }
  function renderCoverage(){
    const estates=new Map(registry.rows.filter(r=>r.estate!=='—').map(r=>[normalize(r.estate),r.estate]));
    const selectedKey=select.value;
    estateNames=[...estates].sort((a,b)=>a[1].localeCompare(b[1],'th'));
    select.replaceChildren(new Option('ทุกนิคมฯ',''),...estateNames.map(([key,name])=>new Option(name,key)));
    select.value=estates.has(selectedKey)?selectedKey:'';
    renderEstateMatches();
    const key=select.value;
    const match=r=>!key||normalize(r.estate)===key;
    const rowsByLayer=supportLayers.map(layer=>({layer,rows:layer.rows.filter(match)}));
    $('coverageSupportCards').replaceChildren(...rowsByLayer.map(({layer,rows})=>{
      const card=el('article',null,'coverage-support-card');
      const visibleCount=layer.status==='ready'||layer.status==='partial';
      card.append(el('h3',layer.label),el('strong',visibleCount?number(rows.length):'—'));
      if(stateLabel[layer.status])card.append(el('small',stateLabel[layer.status]));
      return card;
    }));

    const contactHost=$('coverageContactDirectory');
    if(contactHost){
      const table=el('table',null,'dss-risk-table'),head=table.createTHead().insertRow();
      ['หน่วยงาน','นิคมฯ','เบอร์ติดต่อ','แหล่งอ้างอิง'].forEach(title=>{const th=el('th',title);th.scope='col';head.append(th);});
      const tbody=table.createTBody();
      const contacts=rowsByLayer.filter(({layer})=>['hospital','fire','police'].includes(layer.id)).flatMap(({layer,rows})=>rows.map(row=>({layer,row,info:contactDetails(row.name,layer.id,row.attrs)})));
      contacts.sort((a,b)=>Number(b.info.verified)-Number(a.info.verified)||a.row.name.localeCompare(b.row.name,'th'));
      for(const {layer,row,info} of contacts){
        const tr=tbody.insertRow();tr.append(el('td',row.name),el('td',row.estate));
        const phone=el('td');appendContact(phone,info);tr.append(phone);
        const source=el('td');
        let url=info.source;
        if(!url)url=base+layer.path+'/query?'+new URLSearchParams({f:'pjson',objectIds:String(row.id),outFields:'*',returnGeometry:'false'});
        try{const target=new URL(url);if(['https:','http:'].includes(target.protocol)){const a=el('a',info.verified?'เว็บไซต์ทางการ':'ข้อมูลต้นทาง');a.href=target.href;a.target='_blank';a.rel='noopener noreferrer';source.append(a);}}catch{}
        tr.append(source);
      }
      contactHost.replaceChildren(contacts.length?table:el('p','กำลังโหลดหรือไม่พบหน่วยงานในนิคมฯ ที่เลือก'));
    }
    const facilities=new Map();
    for(const row of business.rows.filter(match)){
      const registration=row.registration==='—'?'':row.registration.replace(/\s+/g,'');
      const identity=registration||'record:'+row.id;
      if(!facilities.has(identity))facilities.set(identity,{row,flags:new Set()});
      const item=facilities.get(identity);
      for(const group of groups){
        const value=String(row.attrs[group.field]??'').trim();
        if(flagged(value))item.flags.add(group.field);
      }
    }
    const items=[...facilities.values()];
    window.ieatFactoryRegister={rows:items.map(item=>item.row),status:business.status};
    window.dispatchEvent(new CustomEvent('ieat-factory-register-updated',{detail:window.ieatFactoryRegister}));
    window.ieatFocusCoverageFactory=async id=>{
      const row=business.rows.find(item=>String(item.id)===String(id));
      if(!row)throw Error('ไม่พบโรงงาน');
      if(!window.ieatOpenFactoryPopup)throw Error('แผนที่ยังโหลดไม่เสร็จ');
      return window.ieatOpenFactoryPopup(row,business.path);
    };

    const available=business.status==='ready'||business.status==='partial';
    const status=stateLabel[business.status];
    const counts=groups.map(group=>available&&business.fields?.includes(group.field)
      ?items.filter(item=>item.flags.has(group.field)).length:null);
    const max=Math.max(1,...counts);
    const riskRows=groups.map((group,index)=>{
      const count=counts[index];
      return line(group.label,count,max,status||(count===null?'ไม่มีข้อมูล':''),count===null?null:()=>{
        drill=drill===group.field?'':group.field;
        renderCoverage();
        if(drill){
          detail.focus();
          detail.scrollIntoView({block:'nearest'});
        }else risk.children[index]?.focus();
      });
    });
    riskRows.forEach((row,index)=>row.setAttribute('aria-pressed',String(drill===groups[index].field)));
    risk.replaceChildren(...riskRows);
    const group=groups.find(g=>g.field===drill);
    detail.hidden=false;
    const sorted=items.filter(item=>drill?item.flags.has(drill):item.flags.size>0).sort((a,b)=>a.row.name.localeCompare(b.row.name,'th'));
    const heading=el('h3',(group?.label||'รายชื่อโรงงานที่เข้าข่ายความเสี่ยง')+' · '+(available?number(sorted.length):'—')+' ราย');
    const note=el('p',available?'โรงงานหนึ่งแห่งอาจเข้าข่ายหลายกลุ่ม จึงไม่ควรบวกจำนวนการ์ดรวมกัน · คลิกการ์ดเพื่อกรองรายการ':'กำลังโหลดหรือเชื่อมต่อทะเบียนโรงงานไม่ได้');
    const actions=el('div',null,'risk-table-actions'),reset=el('button','ดูทุกกลุ่มความเสี่ยง');
    reset.type='button';reset.disabled=!drill;reset.onclick=()=>{drill='';renderCoverage();};
    actions.append(reset);
    const table=el('table',null,'dss-risk-table');
    const head=table.createTHead().insertRow();
    for(const label of ['โรงงาน','นิคมฯ','เลขทะเบียน',...groups.map(group=>group.label),'แผนที่']){
      const th=el('th',label);th.scope='col';head.append(th);
    }
    const body=table.createTBody();
    for(const {row,flags} of sorted){
      const tr=body.insertRow();
      for(const value of [row.name,row.estate,row.registration])tr.append(el('td',value));
      for(const group of groups){
        const known=business.fields?.includes(group.field);
        tr.append(el('td',flags.has(group.field)?'เข้าข่าย':known?'ไม่ระบุว่าเข้าข่าย':'ไม่มีข้อมูล'));
      }
      const td=el('td'),button=el('button','ดูแผนที่');button.type='button';
      button.onclick=async()=>{
        button.disabled=true;
        try{await window.ieatFocusCoverageFactory(row.id);$('coverageMap').scrollIntoView({block:'nearest',behavior:'smooth'});}
        catch{note.textContent='เปิดตำแหน่งไม่ได้ แผนที่อาจยังโหลดไม่เสร็จ กรุณาลองอีกครั้ง';}
        finally{button.disabled=false;}
      };
      td.append(button);tr.append(td);
    }
    const wrap=el('div',null,'dss-risk-table-wrap');
    wrap.tabIndex=0;wrap.setAttribute('role','region');wrap.setAttribute('aria-label','รายชื่อโรงงานเสี่ยง เลื่อนดูรายการเพิ่มเติม');
    wrap.append(table);
    const sourceNote=el('p','แหล่งข้อมูล: ทะเบียน e_PP กนอ. · แสดงตามธงความเสี่ยงในทะเบียน ไม่ใช่ผลประเมินอุบัติเหตุ ณ เวลาปัจจุบัน');
    detail.replaceChildren(heading,actions,note,...(sorted.length?[wrap]:[el('p',available?'ไม่พบรายการในขอบเขตที่เลือก':'ยังแสดงรายชื่อไม่ได้')]),sourceNote);
    if(sorted.length)requestAnimationFrame(()=>{
      const rows=[...body.rows].slice(0,3);
      wrap.style.maxHeight=(table.tHead.getBoundingClientRect().height+rows.reduce((sum,row)=>sum+row.getBoundingClientRect().height,0)+2)+'px';
    });
  }
  select.onchange=renderCoverage;
  search.oninput=()=>{
    if(!search.value.trim()&&select.value){chooseEstate('');return;}
    showEstateMatches=true;
    renderEstateMatches();
  };
  estateForm.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!estateResults.hidden){
      event.preventDefault();
      showEstateMatches=false;
      renderEstateMatches();
      search.focus();
    }
  });
  estateForm.onsubmit=event=>{
    event.preventDefault();
    const query=normalize(search.value);
    if(!query){chooseEstate('');return;}
    const matches=matchingEstates();
    const exact=matches.find(([key])=>key===query);
    if(exact||matches.length===1){chooseEstate(...(exact||matches[0]));return;}
    showEstateMatches=true;
    renderEstateMatches();
  };
  return renderCoverage;
 }
 const renderCoverage=$('riskCoverage')?createCoverageOverview():null;

 function render(){updateOptions();renderCoverage?.();$('inventory').replaceChildren();datasets.forEach(d=>{const card=el('button',null,'inventory-card'+(selected.type===d.id?' active':''));card.type='button';card.style.setProperty('--accent',window.ieatInventoryCardColors?.[d.id]||d.color);const count=visibleRows(d,false).length;const icon=el('i',null,'card-art');icon.innerHTML=window.ieatInventoryCardIcons?.[d.id]||window.ieatInventoryCardIcon||cardIcons[d.id];icon.setAttribute('aria-hidden','true');const main=el('div',null,'card-value');main.append(icon,el('strong',d.status==='loading'?'…':d.status==='error'?'—':number(count)));card.append(el('span',d.label,'card-label'),main,el('small',d.status==='loading'?'กำลังโหลด':d.status==='error'?'เชื่อมต่อไม่ได้':d.status==='partial'?'ข้อมูลยังไม่ครบ':cardUnits[d.id]));card.setAttribute('aria-pressed',String(selected.type===d.id));card.onclick=()=>{$('type').value=selected.type===d.id?'':d.id;changed();zoomCardData(d.id)};$('inventory').append(card)});
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
 async function load(d){try{const url=base+encodeURI(d.path),meta=await json(url+'?f=json');d.meta=meta;d.oid=meta.objectIdField;const available=new Set(meta.fields.map(f=>f.name)),contactFields=meta.fields.filter(f=>/โทร|phone|telephone|(^|_)tel($|_)|แหล่งอ้างอิง|สถานะตรวจสอบ|สายด่วน/i.test(f.name)&&!/fax|แฟกซ์/i.test(f.name)).map(f=>f.name),fields=[...contactFields,d.oid,...d.names,...d.estates,'เลขทะเบียนเดิม','เลขทะเบียนใหม่',...riskFields.map(f=>f.field)].filter((f,i,a)=>available.has(f)&&a.indexOf(f)===i);d.fields=fields;
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
 document.querySelectorAll('.nav-tab').forEach(button=>button.onclick=()=>{document.querySelectorAll('.nav-tab').forEach(b=>b.classList.toggle('active',b===button));const page=button.dataset.page;$('riskDashboard').hidden=page!=='risk';$('otherPage').hidden=page==='risk';if(page!=='risk'){const paths={flood:'./flood-report.html?v=20261027-popup',drought:'./drought.html?v=20261023-water-security',pm25:'./pm25.html',earthquake:'./earthquake.html?v=20261020-sarabun-2'};if($('otherFrame').getAttribute('src')!==paths[page])$('otherFrame').src=paths[page];}});
 loadOperatingZones();
 window.addEventListener('ieat-dss-chemical-ready',schedule);
 render();createCoverageMap();(async()=>{const queue=[riskRegister,...datasets,...extraSupport];let next=0;async function worker(){while(next<queue.length)await load(queue[next++]);}await Promise.allSettled([worker(),worker(),worker()]);})();


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
 const dashboardIconCache=new Map();
 function mapPoint(def,feature,latlng){
  const category=def.dataset?.id||(/สารเคมี/.test(def.title)?'chemical':/อุปกรณ์/.test(def.title)?'equipment':/ทีม|บุคลากร/.test(def.title)?'team':/แผนผัง|ผัง/.test(def.title)?'plan':/คลอง|น้ำ/.test(def.title)?'water':null);
  {
   const solar={hospital:'health',fire:'flame',police:'shield-check',community:'home-2',hydrant:'waterdrop',cctv:'videocamera',estate:'buildings-2',business:'buildings',chemical:'dropper',equipment:'settings',team:'users-group-rounded',plan:'map',water:'waterdrop'};
   const colors={hospital:'#C43C4C',fire:'#D16637',police:'#535F9F',community:'#4F886F',hydrant:'#3483A2',cctv:'#606C76',estate:'#9B4DCA',business:'#8C627E',chemical:'#B45587',equipment:'#A7813F',team:'#3D8E8B',plan:'#7662A3',water:'#3483A2'};
   if(solar[category]){
    const src='https://api.iconify.design/solar/'+solar[category]+'-outline.svg?color=%23ffffff';
    const html='<span style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;box-sizing:border-box;border:2px solid white;border-radius:50%;background:'+colors[category]+';box-shadow:0 2px 7px rgba(43,38,54,.35)"><img src="'+src+'" alt="" width="19" height="19" style="display:block;width:19px;height:19px"></span>';
    const icon=L.divIcon({className:'solar-map-point',html,iconSize:[32,32],iconAnchor:[16,16],popupAnchor:[0,-16]});
    return L.marker(latlng,{icon,title:def.dataset?.label||def.title,riseOnHover:true,zIndexOffset:category==='estate'?150:0});
   }
  }
  const mapGlyphs={"hospital":"<path d=\"M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6z\"/>","fire":"<path d=\"M13 3c2 5-2 6 0 9 1-2 3-3 4-4 4 6 3 12-5 13C4 20 3 14 8 8c0 3 1 4 2 4-1-4 2-5 3-9Z\"/>","police":"<path d=\"m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6z\"/><path d=\"m9 12 2 2 4-5\"/>","community":"<path d=\"m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7\"/>","hydrant":"<path d=\"M9 6V4h6v2M8 9h8v11H8zM6 8h12M5 12H3v4h5m8-4h5v4h-5M6 21h12\"/><circle cx=\"12\" cy=\"14\" r=\"2\"/>","cctv":"<path d=\"m3 5 16 5-3 8L1 12zM18 11l4 1-2 5-3-1M8 15l-2 6H2v-6\"/>","estate":"<path d=\"M4 21V8l6 3V6l6 4V3h4v18zM8 15v2m4-2v2m4-2v2\"/>","business":"<path d=\"M3 21V10l6 3V8l6 3V4h6v17zM7 16h2m3 0h2m3 0h2\"/>"},mapColors={"hospital":"#8B1E2D","fire":"#D9361E","police":"#4C2365","community":"#4F7D32","hydrant":"#457B9D","cctv":"#8B1E2D","estate":"#7F5D99","business":"#E96A60"};
  Object.assign(mapGlyphs,{chemical:'<path d="M9 3h6M10 3v7L4 20h16l-6-10V3M8 14h8"/>',equipment:'<path d="M9 7h7v14H8V9l4-5h6M16 8l5 4M10 3h5"/>',team:'<circle cx="8" cy="7" r="3"/><circle cx="17" cy="8" r="2"/><path d="M2 21v-5a6 6 0 0 1 12 0v5m2-8a4 4 0 0 1 6 4v4"/>',plan:'<path d="M5 2h11l4 4v16H5zM9 8h6M9 12h7M9 16h5"/>',water:'<path d="M12 2C8 8 4 12 4 16a8 8 0 0 0 16 0c0-4-4-8-8-14Z"/>'});
  Object.assign(mapColors,{hospital:'#c62828',fire:'#e65100',police:'#283593',community:'#2e7d32',hydrant:'#0277bd',cctv:'#37474f',estate:'#6a1b9a',business:'#795548',chemical:'#ad1457',equipment:'#f57f17',team:'#00897b',plan:'#5e35b1',water:'#039be5'});
  if(category&&mapGlyphs[category]){
   let icon=dashboardIconCache.get(category);
   if(!icon){
    const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" role="img"><circle cx="22" cy="22" r="19.5" fill="#ffffff" stroke="#ffffff" stroke-width="3"/><circle cx="22" cy="22" r="17" fill="'+mapColors[category]+'"/><circle cx="22" cy="22" r="15" fill="none" stroke="#ffffff" stroke-opacity=".28" stroke-width="1"/><g transform="translate(11 11) scale(.92)" fill="none" stroke="#ffffff" stroke-width="2.15" stroke-linejoin="round" stroke-linecap="round">'+mapGlyphs[category]+'</g></svg>';
    icon=L.icon({iconUrl:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg),iconSize:[34,34],iconAnchor:[17,17],popupAnchor:[0,-18],className:'dashboard-point-icon'});dashboardIconCache.set(category,icon);
   }
   return L.marker(latlng,{icon,title:def.dataset?.label||def.title,riseOnHover:true,zIndexOffset:category==='estate'?150:0});
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


 window.ieatSupportPointMarker=mapPoint;
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
   fallbackView=L.map('map',{zoomControl:false,preferCanvas:true}).setView([14,101],6);
   window.ieatSupportMap=fallbackView;window.dispatchEvent(new CustomEvent('ieat-support-map-ready',{detail:{map:fallbackView}}));L.control.zoom({position:'bottomright'}).addTo(fallbackView);
   const tileRoot='https://server.arcgisonline.com/ArcGIS/rest/services/';
   const basemaps={'dashboard-light':{path:'World_Street_Map',native:19},'gray-vector':{path:'Canvas/World_Light_Gray_Base',reference:'Canvas/World_Light_Gray_Reference',native:16},'streets-vector':{path:'World_Street_Map',native:19},satellite:{path:'World_Imagery',reference:'Reference/World_Boundaries_and_Places',native:19},'topo-vector':{path:'World_Topo_Map',native:19}};
   const tiles=L.tileLayer('',{attribution:'Tiles © Esri',maxZoom:20,updateWhenIdle:true,updateWhenZooming:false,keepBuffer:2}).addTo(fallbackView);
   fallbackView.createPane('referenceLabels');fallbackView.getPane('referenceLabels').style.zIndex=350;fallbackView.getPane('referenceLabels').style.pointerEvents='none';
   let referenceTiles=null;
   const lightOption=document.createElement('option');lightOption.value='dashboard-light';lightOption.textContent='แผนที่ถนนโทนอ่อน · Dashboard';$('basemap').prepend(lightOption);
   function changeBasemap(){$('map').classList.toggle('dashboard-light-basemap',$('basemap').value==='dashboard-light');const config=basemaps[$('basemap').value]||basemaps['gray-vector'];tiles.options.maxNativeZoom=config.native;tiles.setUrl(tileRoot+config.path+'/MapServer/tile/{z}/{y}/{x}');if(referenceTiles){fallbackView.removeLayer(referenceTiles);referenceTiles=null;}if(config.reference)referenceTiles=L.tileLayer(tileRoot+config.reference+'/MapServer/tile/{z}/{y}/{x}',{pane:'referenceLabels',maxZoom:20,maxNativeZoom:config.native,interactive:false}).addTo(fallbackView);}
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
   if(window.ResizeObserver){let width=0,height=0,resizePending=false;new ResizeObserver(entries=>{const size=entries[0].contentRect,w=Math.round(size.width),h=Math.round(size.height);if(w===width&&h===height)return;width=w;height=h;if(resizePending)return;resizePending=true;requestAnimationFrame(()=>{resizePending=false;fallbackView.invalidateSize({pan:false})})}).observe($('map'));}
   fallbackInitialBounds=[[5.5,97.3],[20.6,105.7]];fallbackView.fitBounds(fallbackInitialBounds,{padding:[20,20]});
   const geoDataCache=new Map();async function geoData(url){if(!geoDataCache.has(url))geoDataCache.set(url,fetch(url,{signal:AbortSignal.timeout(20000)}).then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.json();}).catch(e=>{geoDataCache.delete(url);throw e;}));return geoDataCache.get(url);}
   const definitions=[];function collect(layers,parentVisible=true){for(const def of layers||[]){if(/create[\s_]*buffers/i.test(String(def.title||'')))continue;const shown=true;if(def.layers)collect(def.layers,shown);else if(def.url&&['ArcGISFeatureLayer','GeoJSON'].includes(def.layerType))definitions.push({...def,shown});}}collect(data.operationalLayers);
   const groups={},canonical=u=>decodeURI(u||'').replace(/\/$/,'').toLowerCase();
   for(const d of datasets){const url=base+encodeURI(d.path);if(!definitions.some(def=>canonical(def.url)===canonical(url)))definitions.push({title:d.label,url,layerType:'ArcGISFeatureLayer',shown:true});}
   for(const def of definitions){def.group=L.layerGroup();groups[def.title]=def.group;def.dataset=datasets.find(d=>canonical(base+encodeURI(d.path))===canonical(def.url));if(new URLSearchParams(location.search).get('view')==='data'?def.dataset?.id==='estate':def.shown)def.group.addTo(fallbackView);def.contextParcel=/\/e_pp\/featureserver\/0$/i.test(canonical(def.url));}
   const layerControl=L.control.layers({},groups,{collapsed:true,position:'topright'}).addTo(fallbackView);layerControl.getContainer().setAttribute('aria-label','เลือกชั้นข้อมูลบนแผนที่');layerControl.getContainer().title='เลือกชั้นข้อมูล';

   let busy=false,pending=false,drawGeneration=0;const lastErrors=new Set();
   const priority=def=>def.dataset?.id==='estate'?0:def.contextParcel?1:({hospital:2,fire:3,police:4,hydrant:5,cctv:6,community:7,business:8}[def.dataset?.id]??(def.layerType==='GeoJSON'?20:10));
   function paintMapFeatures(def,result,group,replace=true){const d=def.dataset;
      const features=result.type==='FeatureCollection'?result.features:result.type==='Feature'?[result]:[];
      const staging=L.layerGroup();
      if(features.length>40&&fallbackView.getZoom()<18){
       const buckets=new Map(),keep=[];
       for(const feature of features){if(feature.geometry?.type!=='Point'){keep.push(feature);continue;}const coords=feature.geometry.coordinates,p=fallbackView.latLngToLayerPoint([coords[1],coords[0]]),cell=fallbackView.getZoom()<=7&&d?.id!=='estate'?88:52,key=Math.floor(p.x/cell)+':'+Math.floor(p.y/cell);if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(feature);}
       const palette=true?{hospital:'#C43C4C',fire:'#D16637',police:'#535F9F',community:'#4F886F',hydrant:'#3483A2',cctv:'#606C76',estate:'#9B4DCA',business:'#8C627E'}:{hospital:'#8B1E2D',fire:'#D9361E',police:'#4C2365',community:'#4F7D32',hydrant:'#457B9D',cctv:'#8B1E2D',estate:'#7F5D99',business:'#E96A60'};
       for(const bucket of buckets.values()){if(bucket.length===1){keep.push(bucket[0]);continue;}const lat=bucket.reduce((n,f)=>n+f.geometry.coordinates[1],0)/bucket.length,lon=bucket.reduce((n,f)=>n+f.geometry.coordinates[0],0)/bucket.length,c=palette[d?.id]||'#7F5D99',size=bucket.length>99?40:34;
        const compact=fallbackView.getZoom()<=7;
        const labels={hospital:'รพ.',fire:'ดับเพลิง',police:'ตำรวจ',community:'ชุมชน',hydrant:'หัวจ่ายน้ำ',cctv:'CCTV',estate:'นิคมฯ',business:'โรงงาน'};
        const iconForCluster=mapPoint(def,bucket[0],L.latLng(lat,lon)).options.icon;
        const clusterHtml=iconForCluster?.options?.html||'<img alt="" width="30" height="30" src="'+(iconForCluster?.options?.iconUrl||'')+'">';
        const cluster=L.marker([lat,lon],{icon:L.divIcon({className:'dashboard-point-cluster',html:clusterHtml,iconSize:[32,32],iconAnchor:[16,16]}),zIndexOffset:d?.id==='estate'?300:0,riseOnHover:true,title:bucket.length+' '+(d?.label||def.title)+' · คลิกเพื่อซูม'}).addTo(staging);
        cluster.bindTooltip(el('span',bucket.length+' '+(d?.label||def.title)));
        cluster.on('click',()=>{const bounds=L.latLngBounds(bucket.map(f=>[f.geometry.coordinates[1],f.geometry.coordinates[0]]));fallbackView.fitBounds(bounds,{padding:[50,50],maxZoom:18});});
       }
       result={type:'FeatureCollection',features:keep};
      }
      L.geoJSON(result,{style:f=>symbolStyle(def,f.properties||{}),pointToLayer:(f,ll)=>mapPoint(def,f,ll),onEachFeature:(feature,layer)=>{
       const a=feature.properties||{},name=d?String(pick(a,d.names)):String(pick(a,['Name','Name_Parcel','mercant_na','ชื่อผู้ประกอบการ','ชื่อบริษัทภาษาไทย','comp_name','StationTH','name'])),box=el('div');
       box.append(el('b',name),el('p',def.title));const phone=Object.entries(a).filter(([k,v])=>v&&/โทร|phone|telephone|(^|_)tel($|_)/i.test(k)&&!/fax/i.test(k)).map(([,v])=>String(v)).join(' / ');box.append(el('p','โทร: '+(phone||'ยังไม่มีข้อมูลติดต่อจากต้นทาง')));if(d)box.append(el('p',String(pick(a,d.estates))));riskFields.forEach(f=>{if(flagged(a[f.field]))box.append(el('p',f.label+' · เข้าข่าย'))});
       const details=el('details'),summary=el('summary','รายละเอียดจากต้นทาง');details.append(summary);const aliases=new Map((def.popupInfo?.fieldInfos||[]).map(v=>[v.fieldName,v.label]));
       for(const [key,value]of Object.entries(a).filter(([k,v])=>v!=null&&String(v).trim()&&!/^objectid$|^fid$|^shape_/i.test(k)).slice(0,35)){const label=aliases.get(key)||key;if(typeof value==='string'&&/^https:\/\//i.test(value.trim())){const link=el('a',label+' ↗');link.href=value.trim();link.target='_blank';link.rel='noopener';const line=el('p');line.append(link);details.append(line);if(/\.(png|jpe?g|webp)(?:[?#]|$)/i.test(value)){const img=el('img');img.src=value.trim();img.alt=label;img.loading='lazy';img.style.cssText='display:block;width:100%;max-height:260px;object-fit:contain';details.append(img);}}else details.append(el('p',label+': '+String(value).slice(0,900)));}box.append(details);layer.bindPopup(box,{maxWidth:380});
       if(d?.id==='estate')layer.bindTooltip(name,{direction:'top',className:'estate-map-label'});
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
     
     
     const filtered=Boolean(selected.estate);
     if(filtered&&!d&&!def.contextParcel&&def.layerType!=='GeoJSON'){group.clearLayers();return;}
     const ids=d?visibleRows(d).map(r=>r.id):[];if(filtered&&d&&!ids.length){group.clearLayers();return;}
     try{
      let result;
      if(def.layerType==='GeoJSON'){
       result=await geoData(def.url);if(result.type==='FeatureCollection'){result={...result,features:result.features.filter(f=>{const p=f.properties||{},g=f.geometry;if(g?.type==='Point'){const c=g.coordinates;if(!c||!Number.isFinite(c[0])||!Number.isFinite(c[1])||!bounds.contains([c[1],c[0]]))return false;}return true;})};}
      }else{
       const params=new URLSearchParams({f:'geojson',where:[def.layerDefinition?.definitionExpression,d?.where].filter(Boolean).map(clause=>'('+clause+')').join(' AND ')||'1=1',outFields:'*',returnGeometry:'true',outSR:'4326',geometry:JSON.stringify({xmin:bounds.getWest(),ymin:bounds.getSouth(),xmax:bounds.getEast(),ymax:bounds.getNorth(),spatialReference:{wkid:4326}}),geometryType:'esriGeometryEnvelope',inSR:'4326',spatialRel:'esriSpatialRelIntersects'});
       if(filtered&&d)params.set('objectIds',ids.join(','));
       // Paint the complete result once; batch-by-batch plus final painting duplicated all map work.
       result=await queryAllMapFeatures(def.url,params,null,isCurrent);
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

