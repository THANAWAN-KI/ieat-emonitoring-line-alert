/* Import and document reviewed ALOHA outputs. No plume modelling is performed here. */
(function(){
'use strict';
const C=window.IEATAlohaCore;if(!C||!document.documentElement.classList.contains('chemical-report-view'))return;
const $=id=>document.getElementById(id),el=(tag,text)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;};
const labels={red:'แดง',orange:'ส้ม',yellow:'เหลือง'},colors={red:'#c74444',orange:'#df8e28',yellow:'#d8b832'};
let draft=[],filename='',applied=null,layer=null,revision=0,reportHookWindow=null,lastContextId=null,queryRevision=0;
const panel=el('section');panel.id='chemicalAloha';panel.className='chemical-aloha';
panel.innerHTML=`<header><div><h2>วิเคราะห์พื้นที่อันตรายจากผล ALOHA</h2><p>นำผลจำลองมาซ้อนบนแผนที่และจัดทำรายงานสนับสนุนการรับมือสารเคมีรั่วไหล</p></div><span id="alohaBadge">ยังไม่มีผลจำลอง</span></header>
<p class="aloha-intro">ค้นหาโรงงานเพื่อทำรายงาน → จำลองเหตุในโปรแกรม ALOHA และ Export to KML → นำเข้าไฟล์ ตรวจข้อมูลและเกณฑ์ แล้วกดใช้ผลในรายงาน</p>
<p class="aloha-note">เว็บนี้ไม่คำนวณการแพร่กระจายแทน ALOHA · รัศมีค้นหาทรัพยากรไม่ใช่เขตอันตราย · ผลจำลองไม่ใช่ค่าตรวจวัดหรือคำสั่งอพยพ</p>
<form id="alohaScenarioForm">
<details open><summary>ข้อมูลสารเคมีและสมมติฐานที่ใช้จำลอง</summary><fieldset><legend>สารเคมีและการรั่วไหล</legend><div class="aloha-grid">
<label>ชื่อสารเคมี<input name="chemical" required maxlength="160" placeholder="ชื่อเดียวกับที่เลือกใน ALOHA"></label>
<label>CAS No.<input name="cas" required pattern="[0-9]{2,7}-[0-9]{2}-[0-9]" placeholder="เช่น 7664-41-7"></label>
<label>ความเข้มข้น / ความบริสุทธิ์<input name="concentration" required maxlength="100" placeholder="ระบุค่าและหน่วยตามผลจำลอง"></label>
<label>สถานะของสาร<select name="state"><option>ก๊าซ</option><option>ของเหลว</option><option>ก๊าซเหลวภายใต้ความดัน</option></select></label>
<label>แหล่งรั่ว<select name="source"><option>ถัง</option><option>ท่อก๊าซ</option><option>แอ่งสาร</option><option>ระบุอัตราการรั่วโดยตรง</option></select></label>
<label>ปริมาณ / อัตราการรั่ว พร้อมหน่วย<input name="release" required maxlength="160" placeholder="ตาม Source Strength / Text Summary"></label>
<label>ระยะเวลาการรั่ว พร้อมหน่วย<input name="duration" required maxlength="100"></label>
<label>อุณหภูมิ / ความดันสาร<input name="storage" maxlength="160" placeholder="ระบุพร้อมหน่วย หรือระบุว่าไม่มีข้อมูล"></label>
<label class="aloha-wide">รายละเอียดถัง ท่อ ช่องรั่ว หรือแอ่งสาร<textarea name="sourceDetail" rows="2" maxlength="1600" placeholder="ขนาด ระดับบรรจุ ขนาดรูรั่ว หรือข้อมูลตามสถานการณ์ที่จำลอง"></textarea></label>
<label class="aloha-wide">แหล่ง SDS / เลขที่เอกสาร<input name="sds" maxlength="500" placeholder="ชื่อเอกสาร วันที่ปรับปรุง หรือลิงก์ SDS ของสารที่เกี่ยวข้อง"></label>
</div></fieldset><fieldset><legend>อากาศที่ใช้ในแบบจำลอง (ไม่อัปเดตแทนโดยอัตโนมัติ)</legend><div class="aloha-grid">
<label>ทิศลมพัดจาก (องศาเหนือจริง)<input name="windFrom" type="number" min="0" max="360" step="any" required></label>
<label>ความเร็วลม<input name="windSpeed" type="number" min="0" step="any" required></label>
<label>หน่วยความเร็วลม<select name="windUnit"><option>m/s</option><option>km/h</option><option>knots</option></select></label>
<label>ความสูงที่วัดลม (เมตร)<input name="windHeight" type="number" min="0.1" step="any" required></label>
<label>อุณหภูมิอากาศ (°C)<input name="temperature" type="number" step="any" required></label>
<label>เมฆ / ความเสถียรบรรยากาศ<input name="atmosphere" required maxlength="180" placeholder="ตามข้อมูลที่กรอกใน ALOHA"></label>
<label>เวลาข้อมูลอากาศ (เวลาไทย)<input name="weatherTime" type="datetime-local" required></label>
<label>แหล่งข้อมูลอากาศ<input name="weatherSource" required maxlength="220" placeholder="สถานี / เครื่องมือ / แหล่งข้อมูล"></label>
</div></fieldset></details>
<details open><summary>ไฟล์เขตอันตราย เกณฑ์ และผู้ตรวจทาน</summary><fieldset><legend>ผลจำลอง</legend><div class="aloha-grid">
<label>นำเข้าเขตอันตราย KML / GeoJSON<input id="alohaImport" type="file" accept=".kml,.geojson,.json"></label>
<label>ประเภทอันตราย<select name="hazard"><option value="toxic">ความเป็นพิษของไอสาร</option><option value="flammable">ไอไวไฟ</option><option value="thermal">รังสีความร้อน</option><option value="pressure">แรงดันจากการระเบิด</option></select></label>
<label>ละติจูดต้นกำเนิดที่ใช้ส่งออก<input name="sourceLat" type="number" min="-90" max="90" step="any" required></label>
<label>ลองจิจูดต้นกำเนิดที่ใช้ส่งออก<input name="sourceLng" type="number" min="-180" max="180" step="any" required></label>
<label>เวลาเริ่มสถานการณ์ในแบบจำลอง (เวลาไทย)<input name="modelTime" type="datetime-local" required></label>
<label>รุ่น ALOHA / รหัสชุดผลจำลอง<input name="modelVersion" required maxlength="160"></label>
<label>ผู้วิเคราะห์<input name="analyst" required maxlength="160"></label>
<label>ผู้ตรวจทาน<input name="reviewer" required maxlength="160"></label>
<label>ลักษณะสถานการณ์<select name="caseKind"><option>วิเคราะห์เพื่อเตรียมพร้อม / ซ้อมแผน</option><option>สนับสนุนเหตุที่ได้รับแจ้ง</option></select></label>
<label>เวลาตรวจทานผล (เวลาไทย)<input name="reviewTime" type="datetime-local" required></label>
<label class="aloha-wide">Text Summary จาก ALOHA<textarea name="textSummary" rows="4" maxlength="12000" placeholder="วางข้อความสรุปเพื่อเก็บเงื่อนไขการจำลองและข้อจำกัดไว้ตรวจสอบ"></textarea></label>
<label class="aloha-wide">สมมติฐาน / ความไม่แน่นอน / ข้อมูลที่ยังไม่ยืนยัน<textarea name="assumptions" required rows="2" maxlength="2000" placeholder="ลมเปลี่ยน อาคาร ภูมิประเทศ สารผสม หรือข้อมูลที่ใช้ประมาณการ"></textarea></label>
</div><div id="alohaZoneRows" class="aloha-zone-rows"><p>ยังไม่ได้นำเข้าไฟล์ผลจำลอง</p></div>
<label class="aloha-check"><input name="confirmed" type="checkbox" required>ตรวจชื่อสาร พิกัดต้นกำเนิด เวลา สีเขต และค่าเกณฑ์กับผล ALOHA แล้ว ผลนี้เป็นของโรงงาน/จุดเกิดเหตุที่เลือกอยู่</label>
<p class="aloha-note">ระบุค่า LOC และหน่วยตามผลจริง เช่น AEGL / ERPG สำหรับไอพิษ พร้อมระยะเวลาสัมผัสอ้างอิง ห้ามใช้ชื่อสีแทนค่าเกณฑ์</p>
</fieldset></details>
<div class="aloha-actions"><button type="submit">ใช้ผลจำลองในแผนที่และรายงาน</button><button type="button" id="alohaClear">ล้างผลจำลอง</button><button type="button" id="alohaJson" disabled>ดาวน์โหลดชุดข้อมูลผลวิเคราะห์</button><button type="button" id="alohaPng" disabled>ดาวน์โหลดภาคผนวก ALOHA (PNG)</button></div>
<p id="alohaStatus" role="status" aria-live="polite">ยังไม่มีผล ALOHA ในรายงาน กรุณาค้นหาโรงงานและนำเข้าไฟล์ผลจำลอง</p>
</form><div id="alohaFindings" aria-live="polite"></div>
<footer>อ้างอิง: <a href="https://response.restoration.noaa.gov/aloha" target="_blank" rel="noopener">NOAA ALOHA</a> · <a href="https://response.restoration.noaa.gov/oil-and-chemical-spills/chemical-spills/response-tools/alohas-limitations.html" target="_blank" rel="noopener">ข้อจำกัดของแบบจำลอง</a> · ตรวจผลร่วมกับข้อมูลตรวจวัดและการประเมินของผู้เชี่ยวชาญ</footer>`;
$('riskmapReportPanel').before(panel);
const form=$('alohaScenarioForm'),status=$('alohaStatus'),findings=$('alohaFindings');
const workspace=el('details'),workspaceTitle=el('summary','เพิ่ม / ตรวจผลวิเคราะห์ ALOHA');workspace.className='aloha-workspace';form.before(workspace);workspace.append(workspaceTitle,form);
const field=n=>form.elements.namedItem(n),context=()=>window.ieatCoverageReport;
form.addEventListener('invalid',event=>{workspace.open=true;let details=event.target.closest('details');while(details&&form.contains(details)){details.open=true;details=details.parentElement?.closest('details');}},true);
const valid=()=>applied&&context()?.status==='ready'&&applied.contextId===context()?.id;
const link=el('a');link.href='#chemicalAloha';link.append(el('span','วิเคราะห์ ALOHA'));$('riskmapRailSteps')?.append(link);
function metadata(){return Object.fromEntries(new FormData(form).entries());}
function setStatus(text){status.textContent=text;}
function invalidate(message){const hadResult=!!applied;revision++;queryRevision++;applied=null;layer?.removeAll();findings.replaceChildren();field('confirmed').checked=false;$('alohaBadge').textContent=draft.length?'รอตรวจสอบผลใหม่':'ยังไม่มีผลจำลอง';$('alohaJson').disabled=true;$('alohaPng').disabled=true;if(message)setStatus(message);refreshReport();window.ieatUpdateRiskMapCase?.();if(hadResult)window.ieatSyncCoverageMapPreview?.().catch(()=>{});}
function setFieldsFromIncident(){const p=context()?.point;if(!p)return;for(const [key,value] of [['sourceLat',p.lat],['sourceLng',p.lng]])if(!field(key).value)field(key).value=Number(value).toFixed(6);}
function rows(){
 const host=$('alohaZoneRows');host.replaceChildren();
 draft.forEach(z=>{
  const row=el('div');row.className='aloha-zone-row';row.dataset.id=z.id;row.append(el('strong',z.name));
  const pick=el('select');pick.dataset.key='level';pick.required=true;pick.append(new Option('เลือกสีเขตตามผลจริง',''),...C.levels.map(k=>new Option(labels[k],k)));pick.value=z.level;
  const loc=el('input');loc.dataset.key='loc';loc.required=true;loc.maxLength=160;loc.placeholder='ชื่อเกณฑ์และค่า เช่น AEGL-2: …';loc.value=z.loc||'';
  const unit=el('input');unit.dataset.key='unit';unit.required=true;unit.maxLength=80;unit.placeholder='หน่วย เช่น ppm';unit.value=z.unit||'';
  const exposure=el('input');exposure.dataset.key='exposure';exposure.maxLength=100;exposure.placeholder='เวลาสัมผัสอ้างอิง เช่น … นาที';exposure.value=z.exposure||'';
  for(const [title,node] of [['สีเขต',pick],['เกณฑ์และค่า LOC',loc],['หน่วย',unit],['เวลาที่เกณฑ์อ้างอิง',exposure]]){const label=el('label',title);label.append(node);row.append(label);}
  host.append(row);
 });
}
function zonesFromRows(){return draft.map(z=>{const row=$('alohaZoneRows').querySelector('[data-id="'+z.id+'"]');const read=k=>row.querySelector('[data-key="'+k+'"]').value.trim();return {...z,level:read('level'),loc:read('loc'),unit:read('unit'),exposure:read('exposure')};});}
$('alohaImport').addEventListener('change',async()=>{
 invalidate('กำลังอ่านไฟล์…');const importTicket=revision;draft=[];filename='';rows();const file=$('alohaImport').files[0];if(!file){setStatus('ยังไม่ได้เลือกไฟล์');return;}
 try{
  if(file.size>5*1024*1024)throw Error('รองรับไฟล์ขนาดไม่เกิน 5 MB');
  const text=await file.text();if(importTicket!==revision)return;if(/\.kml$/i.test(file.name))draft=C.kml(text,DOMParser);else{const json=JSON.parse(text);draft=C.geojson(json);const saved=json.metadata?.data;if(saved&&typeof saved==='object')for(const input of form.querySelectorAll('[name]:not([type=checkbox])')){if(typeof saved[input.name]==='string')input.value=saved[input.name].slice(0,input.maxLength>0?input.maxLength:12000);}}
  filename=file.name;rows();$('alohaBadge').textContent='รอตรวจสอบผลนำเข้า';setStatus('นำเข้า '+draft.length+' รูปขอบเขตจาก '+filename+' แล้ว · ตรวจสี ค่าเกณฑ์ และข้อมูลการจำลองก่อนใช้ผล');
 }catch(e){draft=[];rows();$('alohaBadge').textContent='นำเข้าไม่ได้';setStatus('นำเข้าไม่ได้: '+e.message);}
});
form.addEventListener('input',e=>{if(e.target.id!=='alohaImport'&&e.target.name!=='confirmed')invalidate('ข้อมูลเปลี่ยนแล้ว กรุณาตรวจและใช้ผลจำลองใหม่');});
form.addEventListener('change',e=>{if(e.target.id!=='alohaImport'&&e.target.type!=='file'&&e.target.name!=='confirmed')invalidate('ข้อมูลเปลี่ยนแล้ว กรุณาตรวจและใช้ผลจำลองใหม่');if(e.target.name==='confirmed'&&!e.target.checked&&applied)invalidate('ยกเลิกการยืนยันผลแล้ว');});
$('alohaClear').onclick=()=>{draft=[];filename='';form.reset();invalidate('ล้างผลจำลองแล้ว');rows();};
function modules(names){return new Promise((resolve,reject)=>{if(typeof window.require!=='function')return reject(Error('ระบบแผนที่ยังไม่พร้อม'));window.require(names,(...items)=>resolve(items),reject);});}
async function mapLayer(){
 const adapter=window.ieatChemicalMap;if(!adapter)throw Error('แผนที่ยังไม่พร้อม กรุณารอให้แผนที่โหลด');await adapter.view.when();
 if(!layer){const [GraphicsLayer]=await modules(['esri/layers/GraphicsLayer']);layer=new GraphicsLayer({title:'เขตอันตรายจากผล ALOHA (นำเข้า)',listMode:'show'});adapter.map.add(layer);}
 return adapter;
}
async function draw(zones,ticket){
 const adapter=await mapLayer(),[Graphic,Polygon,engine]=await modules(['esri/Graphic','esri/geometry/Polygon','esri/geometry/geometryEngine']);
 if(ticket!==revision)throw Error('ข้อมูลเปลี่ยนก่อนแสดงผล');
 for(const z of zones)if(!engine.isSimple(new Polygon({rings:C.arcRings(z.rings),spatialReference:{wkid:4326}})))throw Error('ขอบเขตตัดตัวเองหรือมีโครงสร้างไม่ถูกต้อง: '+z.name);
 layer.removeAll();
 for(const z of [...zones].sort((a,b)=>C.levels.indexOf(b.level)-C.levels.indexOf(a.level)))layer.add(new Graphic({geometry:{type:'polygon',rings:C.arcRings(z.rings),spatialReference:{wkid:4326}},symbol:{type:'simple-fill',color:[...({red:[199,68,68],orange:[223,142,40],yellow:[216,184,50]})[z.level],.22],outline:{color:colors[z.level],width:2}},attributes:{name:z.name,level:labels[z.level],loc:z.loc+' '+z.unit,exposure:z.exposure||'ไม่ระบุ'},popupTemplate:{title:'ALOHA · เขต{level}',content:[{type:'fields',fieldInfos:[{fieldName:'name',label:'ชื่อขอบเขต'},{fieldName:'loc',label:'ค่าเกณฑ์จากผลนำเข้า'},{fieldName:'exposure',label:'เวลาอ้างอิง'}]}]}}));
 await adapter.view.goTo(layer.graphics.toArray().map(g=>g.geometry),{animate:false});
}
const within=(promise,ms=20000)=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('หมดเวลารอข้อมูล')),ms);Promise.resolve(promise).then(v=>{clearTimeout(timer);resolve(v);},e=>{clearTimeout(timer);reject(e);});});
async function receptors(snapshot){
 const adapter=await mapLayer(),request=++queryRevision;
 const jobs=[];const uniqueLayers=[...new Map(adapter.layers.map(l=>[l.url+'|'+(l.definitionExpression||''),l])).values()];
 for(const source of uniqueLayers)for(const z of snapshot.zones)jobs.push({source,z});
 const found=new Map(),notes=new Set();let index=0;
 await Promise.all(Array.from({length:Math.min(4,jobs.length)},async()=>{
  while(index<jobs.length){const {source,z}=jobs[index++];try{
   await within(source.load());if(request!==queryRevision)return;
   const q=source.createQuery();q.geometry={type:'polygon',rings:C.arcRings(z.rings),spatialReference:{wkid:4326}};q.spatialRelationship='intersects';q.returnGeometry=false;q.num=500;
   const names=source.fields.filter(f=>f.name===source.objectIdField||f.name===source.displayField||/^(Name|name|NAME|ชื่อบริษัทภาษาไทย|ชื่อ|StationTH|นิคมอุตสาหกรรม)$/.test(f.name)).map(f=>f.name);q.outFields=[...new Set([source.objectIdField,...names])];
   const result=await within(source.queryFeatures(q));if(request!==queryRevision)return;
   if(result.exceededTransferLimit||result.features.length>=500)notes.add('รายการอาจไม่ครบ: '+source.title+' (สูงสุด 500 รายการต่อเขต)');
   for(const f of result.features){const key=source.url+'|'+f.attributes[source.objectIdField];const previous=found.get(key);if(previous&&C.levels.indexOf(previous.level)<=C.levels.indexOf(z.level))continue;
    const attrs=f.attributes;const name=attrs['ชื่อบริษัทภาษาไทย']||attrs.Name||attrs.NAME||attrs.name||attrs.StationTH||attrs[source.displayField]||'รายการ '+attrs[source.objectIdField];
    found.set(key,{name:String(name),layer:source.title,level:z.level});
   }
  }catch{notes.add('โหลดไม่ได้: '+source.title);}}
 }));
 if(request!==queryRevision)throw Error('ข้อมูลเปลี่ยนระหว่างวิเคราะห์');
 return {rows:[...found.values()].sort((a,b)=>C.levels.indexOf(a.level)-C.levels.indexOf(b.level)||a.layer.localeCompare(b.layer,'th')),notes:[...notes],time:new Date().toISOString()};
}
form.addEventListener('submit',async e=>{
 e.preventDefault();if(!form.reportValidity())return;
 if(!draft.length){setStatus('กรุณานำเข้าไฟล์เขตอันตรายจาก ALOHA ก่อน');return;}
 const ctx=context();if(ctx?.status!=='ready'||!ctx.id||!ctx.point){setStatus('ค้นหาและเลือกโรงงานให้รายงานพร้อมก่อนใช้ผล ALOHA');return;}
 const data=metadata(),zones=zonesFromRows();
 if(data.hazard==='toxic'&&zones.some(z=>!z.exposure)){setStatus('ผลไอพิษต้องระบุระยะเวลาสัมผัสอ้างอิงของเกณฑ์ทุกเขต');return;}
 if(Math.abs(Number(data.sourceLat)-ctx.point.lat)>.001||Math.abs(Number(data.sourceLng)-ctx.point.lng)>.001){setStatus('พิกัดต้นกำเนิดที่กรอกไม่ตรงกับจุดเกิดเหตุ (ต่างเกิน 0.001 องศา) กรุณาตรวจพิกัดส่งออกและตำแหน่งโรงงาน');return;}
 const ticket=++revision;const button=form.querySelector('button[type="submit"]');button.disabled=true;setStatus('กำลังซ้อนขอบเขตและตรวจรายการ GIS ที่ตัดกับแต่ละเขต…');
 try{
  applied=null;refreshReport();window.ieatUpdateRiskMapCase?.();await draw(zones,ticket);if(ticket!==revision)return;
  const snapshot={contextId:ctx.id,company:ctx.company,point:{...ctx.point},data,zones,filename,appliedAt:new Date().toISOString(),results:null};
  const result=await receptors(snapshot);if(ticket!==revision||context()?.id!==ctx.id||context()?.status!=='ready')throw Error('จุดเกิดเหตุหรือข้อมูลรายงานเปลี่ยน กรุณาตรวจผลใหม่');
  snapshot.results=result;applied=snapshot;$('alohaBadge').textContent=result.notes.length?'ผลนำเข้า · ข้อมูล GIS บางส่วนไม่ครบ':'ผลนำเข้าที่ผู้กรอกยืนยันแล้ว';$('alohaJson').disabled=false;$('alohaPng').disabled=false;
  showFindings();refreshReport();window.ieatUpdateRiskMapCase?.();
  await window.ieatSyncCoverageMapPreview?.();setStatus('ใช้ผลนำเข้าในแผนที่ รายงาน PNG และข้อความ LINE แล้ว · ตรวจข้อจำกัดและข้อมูลที่โหลดไม่ครบก่อนใช้ตัดสินใจ');
 }catch(err){if(ticket===revision)invalidate('ยังใช้ผลไม่ได้: '+err.message);}
 finally{button.disabled=false;}
});
function showFindings(){
 findings.replaceChildren();if(!valid())return;const s=applied;
 findings.append(el('h3','รายการ GIS ที่ตัดกับเขตอันตรายจากผลนำเข้า'));
 findings.append(el('p','นับเฉพาะรายการที่โหลดได้ แต่ละรายการจัดไว้ในเขตที่รุนแรงที่สุดที่ตัดกัน ไม่ใช่จำนวนประชาชนหรือการยืนยันการได้รับสัมผัส'));
 const summary=el('div');summary.className='aloha-counts';for(const k of C.levels){const card=el('div');card.style.borderLeftColor=colors[k];card.append(el('strong','เขต'+labels[k]),el('span',s.results.rows.filter(r=>r.level===k).length+' รายการ'));summary.append(card);}findings.append(summary);
 for(const n of s.results.notes)findings.append(el('p',n));
 const table=el('table'),head=el('tr');['ชื่อรายการ','ชั้นข้อมูล','เขตอันตราย'].forEach(t=>head.append(el('th',t)));const thead=el('thead');thead.append(head);table.append(thead);const body=el('tbody');
 for(const r of s.results.rows.slice(0,200)){const tr=el('tr');[r.name,r.layer,'เขต'+labels[r.level]].forEach(v=>tr.append(el('td',v)));body.append(tr);}table.append(body);const wrap=el('div');wrap.className='aloha-table-scroll';wrap.append(table);findings.append(wrap);if(s.results.rows.length>200)findings.append(el('p','แสดง 200 รายการแรกบนหน้าเว็บ · ชุดข้อมูลดาวน์โหลดมีรายการที่ดึงได้ทั้งหมด'));
}
function textLines(){
 if(!valid())return ['สถานะ ALOHA: ยังไม่มีผลจำลองที่ยืนยันสำหรับเงื่อนไขรายงานปัจจุบัน','รัศมีค้นหาทรัพยากรไม่ใช่เขตอันตรายจากสารเคมี'];
 const s=applied,d=s.data;return [
 'ผลนำเข้าจาก ALOHA · '+s.company,'สาร: '+d.chemical+' · CAS '+d.cas+' · '+d.concentration+' · '+d.state,
 'ประเภทผล: '+field('hazard').selectedOptions[0].textContent+' · '+d.caseKind,
 'แหล่งรั่ว: '+d.source+' · '+d.release+' · ระยะเวลา '+d.duration,'รายละเอียดแหล่งรั่ว: '+(d.sourceDetail||'ไม่ระบุ')+' · อุณหภูมิ/ความดัน: '+(d.storage||'ไม่ระบุ'),
 'ต้นกำเนิดที่ระบุ: '+d.sourceLat+', '+d.sourceLng+' · เริ่มสถานการณ์ '+d.modelTime+' (เวลาไทย)',
 'ลมพัดจาก '+d.windFrom+'° · '+d.windSpeed+' '+d.windUnit+' · ความสูงวัดลม '+d.windHeight+' ม.',
 'อากาศ '+d.temperature+' °C · '+d.atmosphere+' · ข้อมูลเมื่อ '+d.weatherTime+' (เวลาไทย) · '+d.weatherSource,
 'ชุดผลจำลอง: '+d.modelVersion+' · ไฟล์ '+s.filename,
 ...s.zones.map(z=>'เขต'+labels[z.level]+' · '+z.name+' · '+z.loc+' '+z.unit+' · เวลาอ้างอิง '+(z.exposure||'ไม่ระบุ')),
 'รายการ GIS ที่โหลดได้ในเขต: '+C.levels.map(k=>labels[k]+' '+s.results.rows.filter(r=>r.level===k).length).join(' / ')+' รายการ',
 ...s.results.notes,'ผู้วิเคราะห์: '+d.analyst+' · ผู้ตรวจทาน: '+d.reviewer+' · ตรวจทาน '+d.reviewTime+' (เวลาไทย)',
 'SDS: '+(d.sds||'ยังไม่แนบแหล่งอ้างอิง'),'สมมติฐาน/ข้อมูลยังไม่ยืนยัน: '+d.assumptions,
 'ผลคาดการณ์จากแบบจำลอง ไม่ใช่ค่าตรวจวัดหรือคำสั่งอพยพ ต้องใช้ร่วมกับข้อมูลหน้างานและการประเมินของผู้เชี่ยวชาญ'
 ];
}
function appendixPages(doc){
 const lines=textLines(),pages=[];let page,used=0;
 const begin=()=>{page=doc.createElement('section');page.className='aloha-report-appendix';page.style.cssText='box-sizing:border-box;width:1050px;min-height:1485px;padding:32px;background:#fff;color:#17201d;font:16px/1.65 Sarabun,Tahoma,sans-serif;border:1px solid #4d6055';const h=doc.createElement('h2');h.textContent='ภาคผนวกผลวิเคราะห์สารเคมี / ALOHA · '+(pages.length+1);h.style.cssText='font-size:24px;color:#4d6055;margin:0 0 18px';page.append(h);pages.push(page);used=0;};
 const add=text=>{for(let i=0;i<text.length||i===0;i+=280){const piece=text.slice(i,i+280),weight=Math.ceil(Math.max(1,piece.length)/65)*30+20;if(!page||used+weight>1120)begin();const p=doc.createElement('p');p.textContent=piece;p.style.cssText='margin:7px 0;overflow-wrap:anywhere;white-space:pre-wrap';page.append(p);used+=weight;}};
 lines.forEach(add);
 if(valid()){
  if(applied.data.textSummary){begin();add('Text Summary ที่ผู้วิเคราะห์แนบจาก ALOHA');applied.data.textSummary.split('\n').forEach(add);}
  if(applied.results.rows.length){begin();add('รายการ GIS ที่ตัดกับเขตนำเข้า · เฉพาะรายการที่โหลดได้ / จัดเขตรุนแรงที่สุด / ไม่ใช่จำนวนประชาชน');for(const r of applied.results.rows)add('เขต'+labels[r.level]+' · '+r.layer+' · '+r.name);}
 }
 return pages;
}
function refreshReport(){
 const frame=$('emergencyReportFrame');const doc=frame?.contentDocument;if(!doc?.body)return;
 let preview=doc.getElementById('alohaReportPreview');if(!preview){preview=doc.createElement('section');preview.id='alohaReportPreview';preview.style.cssText='border:1px solid #4d6055;padding:14px;background:#fff;white-space:pre-wrap;font:14px/1.6 Sarabun,Tahoma,sans-serif';doc.querySelector('.report-wrap')?.append(preview);}
 const previewText='ภาคผนวก ALOHA (รวมในชุด PNG)\n'+textLines().join('\n');if(preview.textContent!==previewText)preview.textContent=previewText;
 const png=doc.getElementById('pngBtn');if(png&&typeof png.onclick==='function'&&!png.onclick.alohaLocked){const originalPng=png.onclick;const locked=async function(...args){const before=form.inert;form.inert=true;try{return await originalPng.apply(this,args);}finally{form.inert=before;}};locked.alohaLocked=true;png.onclick=locked;}
 const win=frame.contentWindow;if(win&&typeof win.dssBuildSupportAppendix==='function'&&reportHookWindow!==win.dssBuildSupportAppendix){const original=win.dssBuildSupportAppendix;const wrapped=function(...args){return [...(original.apply(this,args)||[]),...appendixPages(doc)];};wrapped.alohaHook=true;win.dssBuildSupportAppendix=wrapped;reportHookWindow=wrapped;}
}
const originalBuilder=window.ieatBuildRiskMapMessage;if(typeof originalBuilder==='function')window.ieatBuildRiskMapMessage=function(...args){const base=originalBuilder.apply(this,args);return base?base+'\n\n'+textLines().join('\n'):base;};
window.addEventListener('ieat-coverage-context-updated',()=>{
 const ctx=context();if(applied&&(ctx?.id!==applied.contextId||ctx?.status!=='ready'))invalidate('โรงงาน จุดเกิดเหตุ หรือเงื่อนไขรายงานเปลี่ยนแล้ว กรุณาตรวจและใช้ผล ALOHA ใหม่');
 if(ctx?.id!==lastContextId){lastContextId=ctx?.id;setFieldsFromIncident();}refreshReport();
});
$('emergencyReportFrame')?.addEventListener('load',()=>{reportHookWindow=null;refreshReport();});
$('alohaJson').onclick=()=>{
 if(!valid())return;const s=applied;const bundle={type:'FeatureCollection',metadata:{...s, zones:undefined},features:s.zones.map(z=>({type:'Feature',properties:{name:z.name,zone:z.level,loc:z.loc,unit:z.unit,exposure:z.exposure},geometry:{type:'Polygon',coordinates:z.rings}}))};
 const url=URL.createObjectURL(new Blob([JSON.stringify(bundle,null,2)],{type:'application/geo+json'})),a=el('a');a.href=url;a.download='ALOHA-'+new Date().toISOString().slice(0,10)+'.geojson';a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);
};
$('alohaPng').onclick=async()=>{
 if(!valid())return;const frame=$('emergencyReportFrame'),doc=frame?.contentDocument,renderer=frame?.contentWindow?.html2canvas;if(!doc?.body||typeof renderer!=='function'){setStatus('เครื่องมือ PNG ยังไม่พร้อม รอรายงานโหลดแล้วลองใหม่');return;}
 const ticket=revision,button=$('alohaPng');button.disabled=true;const old=$('alohaDownloadLinks');old?.remove();const links=el('div');links.id='alohaDownloadLinks';panel.append(links);
 try{const pages=appendixPages(doc);for(const [i,page] of pages.entries()){
  const stage=doc.createElement('div');stage.style.cssText='position:absolute;left:-100000px;top:0;width:1050px';stage.append(page);doc.body.append(stage);
  try{const canvas=await renderer(page,{scale:1.5,backgroundColor:'#fff',useCORS:true,allowTaint:false,logging:false,width:1050,height:Math.max(1485,page.scrollHeight),windowWidth:1200});if(ticket!==revision||!valid())throw Error('ข้อมูลเปลี่ยนระหว่างสร้างภาพ กรุณาใช้ผลจำลองใหม่');const a=el('a');a.href=canvas.toDataURL('image/png');a.download='ALOHA-appendix-'+(i+1)+'.png';a.textContent='ดาวน์โหลดภาคผนวก ALOHA หน้า '+(i+1);links.append(a);a.click();}finally{stage.remove();}
 }setStatus('สร้าง PNG ภาคผนวก ALOHA แล้ว · แผนที่เขตนำเข้ารวมอยู่ในชุดรายงานหลัก');}catch(err){links.remove();setStatus('สร้างภาพไม่สำเร็จ: '+err.message);}finally{button.disabled=!valid();}
};
function installCaptureLegend(){
 const original=window.ieatCaptureCoverageMap;if(typeof original!=='function'||original.alohaLegend)return;
 const wrapped=async function(...args){
  const snapshot=valid()?applied:null;const data=await original.apply(this,args);if(!data)return data;
  if((valid()?applied:null)!==snapshot)throw Error('ผล ALOHA เปลี่ยนระหว่างบันทึกแผนที่ กรุณาลองใหม่');
  const lines=['เส้นประสีเขียวเทา = รัศมีค้นหาทรัพยากร (ไม่ใช่เขตอันตราย)'];
  if(snapshot){lines.push('ALOHA · ผลนำเข้าที่ผู้กรอกยืนยัน: '+snapshot.data.chemical+' · '+snapshot.data.modelTime+' (เวลาไทย)');for(const k of C.levels){const list=snapshot.zones.filter(z=>z.level===k);if(!list.length)continue;const texts=[...new Set(list.map(z=>z.loc+' '+z.unit+' / '+(z.exposure||'ไม่ระบุเวลาอ้างอิง')))];lines.push('เขต'+labels[k]+' · '+(texts.length===1?texts[0]:'หลายขอบเขต / หลายเกณฑ์ ดูภาคผนวก'));}}
  else lines.push('ALOHA: ยังไม่มีผลจำลองที่ยืนยันสำหรับรายงานนี้');
  lines.push('ผลจำลองไม่ใช่ค่าตรวจวัดหรือคำสั่งอพยพ · รายละเอียดและข้อจำกัดในภาคผนวก ALOHA');
  const image=new Image();image.src=data;await image.decode();const canvas=document.createElement('canvas');canvas.width=image.naturalWidth||image.width;const scale=canvas.width/1972,lineHeight=38*scale,padding=22*scale;canvas.height=(image.naturalHeight||image.height)+Math.ceil(lines.length*lineHeight+padding*2);
  const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0);ctx.fillStyle='#17201d';ctx.font=(25*scale)+'px Sarabun,Tahoma,sans-serif';ctx.textBaseline='top';for(const [i,line] of lines.entries()){const text=line.length>180?line.slice(0,175)+'… ดูภาคผนวก':line;ctx.fillText(text,padding,(image.naturalHeight||image.height)+padding+i*lineHeight,canvas.width-2*padding);}return canvas.toDataURL('image/png');
 };wrapped.alohaLegend=true;window.ieatCaptureCoverageMap=wrapped;
}
window.addEventListener('ieat-chemical-map-ready',installCaptureLegend);installCaptureLegend();
window.ieatChemicalAloha={getSnapshot:()=>valid()?applied:null,getReportLines:textLines};
setFieldsFromIncident();refreshReport();
})();
