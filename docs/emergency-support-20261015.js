(() => {
'use strict';
const radians=n=>n*Math.PI/180;
function straightDistance(a,b){const dLat=radians(b.lat-a.lat),dLon=radians(b.lon-a.lon),v=Math.sin(dLat/2)**2+Math.cos(radians(a.lat))*Math.cos(radians(b.lat))*Math.sin(dLon/2)**2;return 6371008.8*2*Math.atan2(Math.sqrt(Math.min(1,v)),Math.sqrt(Math.max(0,1-v)));}
function nearestGeometry(g,origin){
 if(!g)return null;
 const valid=p=>p&&Number.isFinite(p[0])&&Number.isFinite(p[1])&&Math.abs(p[0])<=180&&Math.abs(p[1])<=90;
 const make=p=>valid(p)?{lat:p[1],lon:p[0],distance:straightDistance(origin,{lat:p[1],lon:p[0]})}:null;
 if(g.x!=null)return make([g.x,g.y]);
 if(g.points)return g.points.map(make).filter(Boolean).sort((a,b)=>a.distance-b.distance)[0]||null;
 const rings=g.rings,paths=rings||g.paths;if(!paths)return null;
 function insideRing(ring){let inside=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if(((a[1]>origin.lat)!==(b[1]>origin.lat))&&(origin.lon<(b[0]-a[0])*(origin.lat-a[1])/(b[1]-a[1])+a[0]))inside=!inside;}return inside;}
 if(rings&&rings.reduce((inside,r)=>inside!==insideRing(r),false))return {...origin,distance:0};
 const k=111195.08,cos=Math.max(.0001,Math.cos(radians(origin.lat)));let best=null;
 for(const path of paths){for(let i=0;i<path.length;i++){const a=path[i],b=path[i+1]||(rings?path[0]:null);if(!valid(a))continue;let p=a;
  if(b&&valid(b)){const ax=(a[0]-origin.lon)*k*cos,ay=(a[1]-origin.lat)*k,bx=(b[0]-origin.lon)*k*cos,by=(b[1]-origin.lat)*k,dx=bx-ax,dy=by-ay,t=Math.max(0,Math.min(1,-(ax*dx+ay*dy)/(dx*dx+dy*dy||1)));p=[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];}
  const candidate=make(p);if(candidate&&(!best||candidate.distance<best.distance))best=candidate;
 }}return best;
}
const get=id=>document.getElementById(id),host=get('emergencySupportCards'),note=get('emergencySupportStatus'),radius=get('supportRadius'),pick=get('incidentPickButton'),localPick=get('supportPickPoint'),clear=get('supportClearPoint'),pointLabel=get('supportIncidentLabel');
const base='https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/';
const sources=[
 {id:'hospital',label:'โรงพยาบาล',path:'Hospital_Locations/FeatureServer/0',names:['โรงพยาบาล']},
 {id:'fire',label:'สถานีดับเพลิง',path:'Risk_Map_WFL1/FeatureServer/3',names:['Name']},
 {id:'police',label:'สถานีตำรวจ',path:'Risk_Map_WFL1/FeatureServer/5',names:['Name']},
 {id:'hydrant',label:'หัวจ่ายน้ำดับเพลิง',path:'Risk_Map_WFL1/FeatureServer/4',names:['Name']},
 {id:'cctv',label:'CCTV',path:'ตำแหน่งกล้องCCTV/FeatureServer/7',names:['Name']},
 {id:'community',label:'ชุมชน',path:'Map/FeatureServer/1',names:['Name']},
 {id:'business',label:'ผู้ประกอบการ',path:'ข้อมูลผู้ประกอบการ_e_PP/FeatureServer/0',names:['ชื่อบริษัทภาษาไทย','ชื่อบริษัทภาษาไทย_สั้','ชื่อบริษัทภาษาอังกฤษ'],where:'ชื่อบริษัทภาษาไทย IS NOT NULL'}
];
const groups=[{title:'ช่วยเหลือและระงับเหตุ',ids:['hospital','fire','police'],each:2},{title:'น้ำดับเพลิงและเฝ้าระวัง',ids:['hydrant','cctv'],each:3},{title:'ประสานพื้นที่ใกล้เคียง',ids:['community','business'],each:3}];
let estateName='',estateSequence=0,estateFeatures=null;let map=null,incident=null,marker=null,markers=null,selecting=false,request=0,controller=null,results=new Map(),loading=false,failures=[];
const overviewRows=new Map(),overviewTotals=new Map(),cardPages=[0,0,0];let overviewLoading=false,overviewCompleted=false,overviewFailures=[];
const fetchedAt=new Map(),metadata=new Map(),number=n=>Number(n).toLocaleString('th-TH'),distance=n=>n<1000?number(Math.round(n))+' ม.':number(Math.round(n/100)/10)+' กม.';
const text=(tag,value,cls)=>{const e=document.createElement(tag);e.textContent=value;if(cls)e.className=cls;return e;};
const color=d=>d<=5000?['#4F7D32','#fff']:d<=10000?['#FFD16A','#000']:d<=20000?['#F5B52E','#000']:['#D9361E','#fff'];
const usable=v=>v!=null&&String(v).trim()&&!/^(null|undefined|ไม่มีข้อมูล|ไม่ระบุ|-|—)$/i.test(String(v).trim());
function first(attrs,fields){return fields.map(f=>attrs[f]).find(usable);}
function selectedRows(){return groups.map(g=>g.ids.flatMap(id=>(results.get(id)||[])).sort((a,b)=>a.distance-b.distance));}
function focusRow(row){
 if(!map)return;
 if(!Number.isFinite(row.lat)||!Number.isFinite(row.lon))return; map.setView([row.lat,row.lon],16);
 const box=document.createElement('div');box.append(text('strong',row.name),text('p',row.type+(Number.isFinite(row.distance)?' · '+distance(row.distance):'')),text('p','โทร: '+(row.phone||'ไม่มีข้อมูลในระบบ')));
 if(row.address)box.append(text('p',row.address));
 window.L.popup().setLatLng([row.lat,row.lon]).setContent(box).openOn(map);
}
function drawSupportMarkers(){
 if(!map||!window.L)return;
 if(markers)markers.remove();markers=window.L.layerGroup().addTo(map);
 Array.from(results.values()).flat().filter(row=>row.distance<=effectiveSupportRadius()*1000).forEach(row=>{const c=color(row.distance);const m=(window.ieatSupportPointMarker?window.ieatSupportPointMarker({dataset:{id:row.source||sources.find(s=>s.label===row.type)?.id,label:row.type},title:row.type},{properties:{}},window.L.latLng(row.lat,row.lon)):window.L.circleMarker([row.lat,row.lon],{radius:7,color:'#fff',weight:2,fillColor:c[0],fillOpacity:1})).addTo(markers);m.bindTooltip(text('span',row.type+' · '+row.name));m.on('click',()=>{if(!selecting)focusRow(row);});});
}
function effectiveSupportRadius(){return Number(radius.value)}
function publishSupport(){
 const limit=effectiveSupportRadius();const rows=Array.from(results.values()).flat().filter(r=>r.distance<=limit*1000).sort((a,b)=>a.distance-b.distance);
 const snapshot={origin:incident?{...incident,name:estateName}:null,radius:limit,searchRadius:Number(radius.value),rows,loading,failures:[...failures],sources:sources.map(s=>({id:s.id,label:s.label,url:base+encodeURI(s.path),fetchedAt:fetchedAt.get(s.id)||null,sourceUpdatedAt:metadata.get(s.id)?.editingInfo?.lastEditDate||null,status:failures.includes(s.id)?'error':results.has(s.id)?'ready':loading?'loading':'idle'}))};
 window.ieatSupportSnapshot=snapshot;get('emergencyReportFrame')?.contentWindow?.postMessage({type:'dss:nearby-support',...snapshot},location.origin);
 window.dispatchEvent(new CustomEvent('ieat-support-updated',{detail:snapshot}));
}
window.addEventListener('ieat-retry-support',load);
function render(){
 publishSupport();host.replaceChildren();
 const overview=!incident;radius.disabled=overview;pointLabel.hidden=overview;
 if(overviewLoading&&!incident)note.textContent='กำลังโหลดข้อมูลจริงจากแหล่งข้อมูล';
 const selections=overview?groups.map(g=>g.ids.flatMap(id=>(overviewRows.get(id)||[]))):selectedRows();
 groups.forEach((g,index)=>{const card=document.createElement('article');card.className='risk-ranking-card emergency-support-card';card.dataset.supportPaged='true';card.append(text('h3',g.title));
  const rows=selections[index];if(overview){const totals=g.ids.map(id=>{const source=sources.find(s=>s.id===id);return source.label+' '+(overviewTotals.has(id)?number(overviewTotals.get(id)):'—')+' รายการ';});card.append(text('p',totals.join(' · '),'support-overview-counts'));}if(!rows.length){card.append(text('p',overview?(overviewLoading?'กำลังโหลดภาพรวมข้อมูลสนับสนุน…':g.ids.some(id=>overviewFailures.includes(id))?'โหลดข้อมูลบางประเภทไม่สำเร็จ':'ไม่มีรายการในฐานข้อมูล'):loading?'กำลังค้นหาตำแหน่งใกล้เหตุ…':g.ids.some(id=>failures.includes(id))?'โหลดข้อมูลบางประเภทไม่สำเร็จ':'ไม่พบข้อมูลกลุ่มนี้ในระยะที่เลือก','support-empty'));}
  const list=document.createElement('div');list.className='support-scroll-list';list.setAttribute('aria-label',g.title+' เลื่อนเพื่อดูรายการทั้งหมด');list.tabIndex=0;let rendered=0;
  function addRows(){const fragment=document.createDocumentFragment();for(const row of rows.slice(rendered,rendered+30)){const button=document.createElement('button');button.type='button';button.className='emergency-support-row';const top=document.createElement('div');top.className='support-row-top';top.append(text('span',row.type,'support-type'));if(Number.isFinite(row.distance)){const badge=text('strong',distance(row.distance),'support-distance');const c=color(row.distance);badge.style.background=c[0];badge.style.color=c[1];top.append(badge);}button.append(top,text('b',row.name,'support-name'),text('span','โทร: '+(row.phone||'ไม่มีข้อมูลในระบบ'),'support-phone'));if(row.address)button.append(text('span',row.address,'support-address'));if(Number.isFinite(row.lat)&&Number.isFinite(row.lon)){button.addEventListener('click',()=>focusRow(row));button.setAttribute('aria-label',row.type+' '+row.name+' ดูบนแผนที่');}else{button.disabled=true;button.append(text('span','ไม่มีพิกัดในระบบ','support-address'));}fragment.append(button);}rendered=Math.min(rows.length,rendered+30);list.append(fragment);}
  list.addEventListener('scroll',()=>{if(rendered<rows.length&&list.scrollTop+list.clientHeight>=list.scrollHeight-250)addRows();},{passive:true});if(rows.length){addRows();card.append(list);}host.append(card);
 });
 if(incident){pointLabel.textContent='นิคมอุตสาหกรรม: '+estateName;clear.disabled=false;
  note.textContent=loading?'กำลังค้นหาข้อมูลสนับสนุนในระยะ '+radius.value+' กม.…':(failures.length?'โหลดไม่ได้: '+sources.filter(s=>failures.includes(s.id)).map(s=>s.label).join(', '):'');
 }else{pointLabel.textContent='';clear.disabled=true;note.textContent=overviewLoading?'กำลังโหลดภาพรวม…':(overviewFailures.length?'บางแหล่งข้อมูลยังโหลดไม่สำเร็จ':'');}
}
async function fetchJSON(url,params,signal){const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:String(params),signal:AbortSignal.any([signal,AbortSignal.timeout(30000)])});if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();if(data.error)throw Error(data.error.message||'Query failed');return data;}
async function loadSource(source,origin,limit,signal){
 const url=base+encodeURI(source.path);
 let meta=metadata.get(source.id);
 if(!meta){const response=await fetch(url+'?f=json',{signal:AbortSignal.any([signal,AbortSignal.timeout(20000)])});if(!response.ok)throw Error('Metadata failed');meta=await response.json();if(meta.error||!meta.objectIdField||!Array.isArray(meta.fields))throw Error('Invalid layer');metadata.set(source.id,meta);}
 const fieldNames=meta.fields.map(f=>f.name),phones=meta.fields.filter(f=>/โทร|phone|(^|[^a-z])tel([^a-z]|$)/i.test(f.name+' '+(f.alias||''))).map(f=>f.name),addresses=meta.fields.filter(f=>/ที่อยู่|address/i.test(f.name+' '+(f.alias||''))).map(f=>f.name);
 const fields=[...new Set([meta.objectIdField,...source.names,...phones,...addresses])].filter(f=>fieldNames.includes(f));
 const params=new URLSearchParams({f:'json',where:source.where||'1=1',returnIdsOnly:'true',geometry:JSON.stringify({x:origin.lon,y:origin.lat,spatialReference:{wkid:4326}}),geometryType:'esriGeometryPoint',inSR:'4326',spatialRel:'esriSpatialRelIntersects',distance:String(limit*1000),units:'esriSRUnit_Meter'});
 const idsData=await fetchJSON(url+'/query',params,signal);if(idsData.objectIds!=null&&!Array.isArray(idsData.objectIds))throw Error('Invalid spatial query results');idsData.objectIds=idsData.objectIds||[];const rows=[];
 for(let i=0;i<idsData.objectIds.length;i+=300){const p=new URLSearchParams({f:'json',objectIds:idsData.objectIds.slice(i,i+300).join(','),where:source.where||'1=1',outFields:fields.join(','),returnGeometry:'true',outSR:'4326'});
  const data=await fetchJSON(url+'/query',p,signal);if(data.exceededTransferLimit||!Array.isArray(data.features))throw Error('Incomplete spatial query');
  data.features.forEach(f=>{const near=nearestGeometry(f.geometry,origin);if(!near||near.distance>limit*1000+1)return;rows.push({...near,id:f.attributes[meta.objectIdField],sourceId:source.id,type:source.label,name:String(first(f.attributes,source.names)||source.label+' #'+f.attributes[meta.objectIdField]),phone:String(first(f.attributes,phones)||''),address:String(first(f.attributes,addresses)||'')});});
 }
 return rows.sort((a,b)=>a.distance-b.distance);
}

// The unselected view is a bounded directory sample, never a fabricated nearby search.
async function loadOverview(force=false){
 if(overviewLoading||(!force&&overviewCompleted))return;
 overviewLoading=true;overviewFailures=[];if(!incident)render();
 async function one(source){
  try{
   const url=base+encodeURI(source.path);let meta=metadata.get(source.id);
   if(!meta){const response=await fetch(url+'?f=json',{signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error('Metadata failed');meta=await response.json();if(meta.error||!meta.objectIdField||!Array.isArray(meta.fields))throw Error('Invalid layer');metadata.set(source.id,meta);}
   const names=meta.fields.map(f=>f.name),phones=meta.fields.filter(f=>/โทร|phone|(^|[^a-z])tel([^a-z]|$)/i.test(f.name+' '+(f.alias||''))).map(f=>f.name),addresses=meta.fields.filter(f=>/ที่อยู่|address/i.test(f.name+' '+(f.alias||''))).map(f=>f.name);
   const fields=[...new Set([meta.objectIdField,...source.names,...phones,...addresses])].filter(f=>names.includes(f)),signal=new AbortController().signal;
   const idsData=await fetchJSON(url+'/query',new URLSearchParams({f:'json',where:source.where||'1=1',returnIdsOnly:'true'}),signal);
   if(!Array.isArray(idsData.objectIds))throw Error('ไม่สามารถอ่านรายการทั้งหมด');
   const ids=idsData.objectIds.sort((a,b)=>a-b),rows=[];overviewTotals.set(source.id,ids.length);overviewRows.set(source.id,rows);
   for(let i=0;i<ids.length;i+=300){
    const params=new URLSearchParams({f:'json',objectIds:ids.slice(i,i+300).join(','),where:source.where||'1=1',outFields:fields.join(','),returnGeometry:'true',outSR:'4326'});
    const data=await fetchJSON(url+'/query',params,signal);if(data.exceededTransferLimit||!Array.isArray(data.features))throw Error('ข้อมูลไม่ครบ');
    for(const f of data.features){const g=f.geometry;let p=g&&Number.isFinite(g.x)&&Number.isFinite(g.y)?[g.x,g.y]:g?.points?.[0]||g?.rings?.[0]?.[0]||g?.paths?.[0]?.[0];let lat,lon;if(p&&Number.isFinite(p[0])&&Number.isFinite(p[1])&&Math.abs(p[0])<=180&&Math.abs(p[1])<=90){lon=p[0];lat=p[1];}rows.push({id:f.attributes[meta.objectIdField],sourceId:source.id,type:source.label,name:String(first(f.attributes,source.names)||source.label+' #'+f.attributes[meta.objectIdField]),phone:String(first(f.attributes,phones)||''),address:String(first(f.attributes,addresses)||''),lat,lon});}
   }
  }catch(error){overviewFailures.push(source.id);console.warn('Support overview '+source.label,error.message);}
  if(!incident)render();
 }
 let index=0;async function worker(){while(index<sources.length){const source=sources[index++];await one(source);}}
 await Promise.allSettled([worker(),worker()]);overviewLoading=false;overviewCompleted=true;if(!incident)render();
}

async function load(){
 if(!incident){loadOverview(true);return;}
 cardPages.fill(0);
 controller?.abort();controller=new AbortController();const signal=controller.signal,id=++request,origin={...incident};loading=true;results=new Map();fetchedAt.clear();failures=[];drawSupportMarkers();render();
 await Promise.allSettled(sources.map(async source=>{try{const rows=await loadSource(source,origin,effectiveSupportRadius(),signal);if(id!==request)return;results.set(source.id,rows);fetchedAt.set(source.id,new Date().toISOString());}catch(e){if(id!==request||signal.aborted)return;failures.push(source.id);console.warn('Emergency support '+source.label,e);}if(id===request){render();drawSupportMarkers();}}));
 if(id!==request)return;loading=false;render();drawSupportMarkers();
}
function setIncident(lat,lon){
 if(!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180)return;
 incident={lat,lon};selecting=false;map.getContainer().style.cursor='';pick.textContent='ย้ายจุดเกิดเหตุ';localPick.textContent='ย้ายจุดเกิดเหตุ';
 if(marker)marker.remove();marker=window.L.marker([lat,lon],{draggable:false,title:'ตำแหน่งอ้างอิงนิคมอุตสาหกรรม'}).addTo(map);marker.bindTooltip(estateName||'นิคมอุตสาหกรรม',{permanent:true,direction:'top',className:'incident-support-label'});
 marker.on('dragend',()=>{const p=marker.getLatLng();setIncident(p.lat,p.lng);});load();
}
function choose(){if(!map){note.textContent='กำลังเตรียมแผนที่ กรุณารอ';return;}selecting=!selecting;map.getContainer().style.cursor=selecting?'crosshair':'';pick.textContent=selecting?'คลิกจุดเกิดเหตุบนแผนที่':incident?'ย้ายจุดเกิดเหตุ':'กำหนดจุดเกิดเหตุ';note.textContent=selecting?'คลิกตำแหน่งเกิดเหตุบนแผนที่ด้านขวา':incident?'เลือกย้ายจุดเกิดเหตุได้ทุกเมื่อ':'ยังไม่ได้เลือกจุดเกิดเหตุ';if(selecting)get('map').scrollIntoView({behavior:'smooth',block:'center'});}
function bindMap(nextMap){if(map===nextMap)return;map=nextMap;pick.disabled=false;localPick.disabled=false;map.on('click',e=>{if(selecting){map.closePopup();setIncident(e.latlng.lat,e.latlng.lng);}});}
pick.addEventListener('click',choose);localPick.addEventListener('click',choose);radius.addEventListener('change',load);
clear.addEventListener('click',()=>{controller?.abort();request++;incident=null;selecting=false;loading=false;results=new Map();failures=[];if(marker)marker.remove();if(markers)markers.remove();if(map)map.getContainer().style.cursor='';pick.textContent='กำหนดจุดเกิดเหตุ';localPick.textContent='เลือกจุดเกิดเหตุ';render();});
window.addEventListener('ieat-support-map-ready',e=>bindMap(e.detail.map));if(window.ieatSupportMap)bindMap(window.ieatSupportMap);

let companyOrigin=null;
const estateSource=get('estate'),normEstate=v=>String(v||'').normalize('NFKC').toLowerCase().replace(/นิคมอุตสาหกรรม|ท่าเรืออุตสาหกรรม|สำนักงานนิคมฯ|นิคมฯ|[\s\u200b-\u200d]/g,'');
function clearEstate(){controller?.abort();request++;incident=null;loading=false;failures=[];results=new Map();if(marker)marker.remove();if(markers)markers.remove();window.dispatchEvent(new CustomEvent('ieat-clear-support-center'));render();loadOverview()}
async function selectEstate(){
 const sequence=++estateSequence;if(companyOrigin){applyCompanyOrigin();return}if(!estateSource?.value){estateName='';clearEstate();return}
 const name=estateSource.selectedOptions[0]?.textContent||estateSource.value;estateName=name;if(!map){note.textContent='กำลังเตรียมแผนที่สำหรับ '+name;return}
 note.textContent='กำลังค้นหาตำแหน่งนิคมอุตสาหกรรม '+name;
 try{
  if(!estateFeatures){const params=new URLSearchParams({f:'json',where:'1=1',outFields:'สำนักงานนิคมฯ',returnGeometry:'true',outSR:'4326',resultRecordCount:'2000'});const response=await fetch(base+'e_PP_2025/FeatureServer/1/query?'+params,{signal:AbortSignal.timeout(30000)});if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();if(data.error||!Array.isArray(data.features))throw Error('ไม่สามารถอ่านตำแหน่งนิคมฯ');estateFeatures=data.features}
  if(sequence!==estateSequence)return;
  const key=normEstate(name);let matches=estateFeatures.filter(f=>normEstate(f.attributes?.['สำนักงานนิคมฯ'])===key);
  if(!matches.length)matches=estateFeatures.filter(f=>{const n=normEstate(f.attributes?.['สำนักงานนิคมฯ']);return n&&key&&(n.includes(key)||key.includes(n))});
  if(matches.length!==1)throw Error('ไม่พบตำแหน่งนิคมฯ ที่ตรงกันเพียงแห่งเดียว');
  const g=matches[0].geometry;if(!Number.isFinite(g?.x)||!Number.isFinite(g?.y)||g.y<5||g.y>22||g.x<97||g.x>106)throw Error('ไม่มีพิกัดที่ใช้งานได้');
  setIncident(g.y,g.x);window.dispatchEvent(new CustomEvent('ieat-support-center',{detail:{lat:g.y,lon:g.x,name}}));
 }catch(error){if(sequence===estateSequence){clearEstate();note.textContent='โหลดข้อมูลสนับสนุนของ '+name+' ไม่สำเร็จ: '+error.message}}
}
function applyCompanyOrigin(){
 if(!companyOrigin||!map)return;
 estateName=companyOrigin.name;
 if(incident&&Math.abs(incident.lat-companyOrigin.lat)<.000001&&Math.abs(incident.lon-companyOrigin.lon)<.000001)return;
 setIncident(companyOrigin.lat,companyOrigin.lon);
 window.dispatchEvent(new CustomEvent('ieat-support-center',{detail:companyOrigin}));
}
window.addEventListener('message',event=>{
 const frame=get('emergencyReportFrame');if(event.origin!==location.origin||event.source!==frame?.contentWindow||event.data?.type!=='dss:incident')return;
 const lat=Number(event.data.lat),lon=Number(event.data.lng);if(!Number.isFinite(lat)||!Number.isFinite(lon)||lat<5||lat>22||lon<97||lon>106)return;
 estateSequence++;companyOrigin={lat,lon,name:event.data.name||'สถานประกอบการที่เลือก'};applyCompanyOrigin();
});
estateSource?.addEventListener('change',()=>{companyOrigin=null;selectEstate()});window.addEventListener('ieat-refresh-estate-support',selectEstate);window.addEventListener('ieat-support-map-ready',selectEstate);
clear.textContent='ล้างการเลือก';clear.addEventListener('click',()=>{estateSource.value='';estateSource.dispatchEvent(new Event('change',{bubbles:true}))});
if(estateSource?.value&&window.ieatSupportMap)selectEstate();

render();if(!estateSource?.value)loadOverview();
})();


