(() => {
'use strict';
const get=id=>document.getElementById(id),source=get('estate'),search=get('chemicalSearch'),estate=get('chemicalEstate'),body=get('chemicalDetailBody'),status=get('chemicalDetailStatus'),prev=get('chemicalPrev'),next=get('chemicalNext'),pageLabel=get('chemicalPage');
const normalize=v=>String(v||'').normalize('NFKC').toLowerCase().replace(/[\u2010-\u2015\u2212]/g,'-').replace(/นิคมอุตสาหกรรม|นิคมฯ|สำนักงานนิคมฯ|[\s\u200b-\u200d]/g,'').trim();
let data=null,page=0,filtered=[],scope='',timer,eppMatches=[],eppSequence=0,eppController=null;
const eppUrl='https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/e_PP/FeatureServer/0/query';
const companyKey=v=>normalize(v).replace(/บริษัท|จำกัด|มหาชน|company|limited|co\.?|ltd\.?|[().,\-\/]/g,'');
// Ammonia identity: CDC/NIOSH https://www.cdc.gov/niosh/npg/npgd0028.html
const chemicalAliases=[
 {names:['แอมโมเนีย','แอมโมเนียแอนไฮดรัส','ammonia','nh3','nh₃'],english:'ammonia',cas:'7664-41-7'},
 {names:['เอทานอล','เอทิลแอลกอฮอล์'],english:'ethanol',cas:'64-17-5'},
 {names:['เมทานอล','เมทิลแอลกอฮอล์'],english:'methanol',cas:'67-56-1'},
 {names:['ไดเอทาโนลามีน'],english:'diethanolamine',cas:'111-42-2'},
 {names:['ไตรเอทาโนลามีน'],english:'triethanolamine',cas:'102-71-6'}
];
function chemicalAlias(value){const key=normalize(value).replace(/^(ก๊าซ|แก๊ส|กาซ|gas)/,'');return chemicalAliases.find(a=>a.names.some(name=>normalize(name)===key))||null}
function chemicalMatches(row,value){
 const alias=chemicalAlias(value),name=normalize(data.names[row[1]]),cas=normalize(data.cas[row[2]]),term=normalize(value);
 if(alias)return cas.includes(alias.cas)||name===alias.english||name.startsWith(alias.english+'(')||name.startsWith(alias.english+'gas')||name.startsWith(alias.english+'anhydrous')||name.startsWith('anhydrous'+alias.english);
 return normalize([data.names[row[1]],data.cas[row[2]],row[3]].join(' ')).includes(term);
}

const eppBox=document.createElement('div');eppBox.id='unifiedCompanyResults';search.closest('.chemical-detail-filters').after(eppBox);
let pageSize=25;
window.addEventListener('ieat-dss-page-size',event=>{const size=Number(event.detail?.size);if(!Number.isInteger(size)||size<1||size>25||size===pageSize)return;const first=page*pageSize;pageSize=size;page=Math.floor(first/pageSize);render();});
const number=n=>Number(n).toLocaleString('th-TH');
function cell(row,text){const td=document.createElement('td');td.textContent=String(text||'—');td.title=td.textContent;row.append(td);}
function render(){
 if(!data)return;
 const term=normalize(search.value),selected=scope;
 filtered=data.rows.filter(r=>{const c=data.companies[r[0]];return (!selected||normalize(c[2])===selected)&&(!term||normalize([c[0],c[1],c[2]].join(' ')).includes(term)||chemicalMatches(r,search.value)||eppMatches.some(f=>{const a=f.attributes;return companyKey(c[0])===companyKey(a['ชื่อบริษัทภาษาไทย'])||[a['เลขทะเบียนเดิม'],a['เลขทะเบียนใหม่']].filter(Boolean).some(v=>normalize(c[1])===normalize(v))}));});
 const pages=Math.max(1,Math.ceil(filtered.length/pageSize));page=Math.min(page,pages-1);
 body.replaceChildren();
 for(const [index,r] of filtered.slice(page*pageSize,(page+1)*pageSize).entries()){
  const company=data.companies[r[0]],tr=document.createElement('tr');
  cell(tr,page*pageSize+index+1);
  const companyCell=document.createElement('td'),companyButton=document.createElement('button');companyButton.type='button';companyButton.textContent=company[0];companyButton.title='เลือกบริษัทนี้เพื่อจัดทำรายงาน';companyButton.onclick=()=>{search.value=company[0];searchEpp()};companyCell.append(companyButton);tr.append(companyCell);cell(tr,company[2]);cell(tr,data.names[r[1]]);cell(tr,data.cas[r[2]]);cell(tr,r[3]);cell(tr,r[4]);cell(tr,data.units[r[5]]);body.append(tr);
 }
 if(!filtered.length){const tr=document.createElement('tr'),td=document.createElement('td');td.colSpan=8;td.textContent='ไม่พบรายการสารเคมีตามตัวกรอง';tr.append(td);body.append(tr);}
 status.textContent='พบ '+number(filtered.length)+' จาก '+number(data.rows.length)+' รายการ · แสดง '+(filtered.length?number(page*pageSize+1):'0')+'–'+number(Math.min((page+1)*pageSize,filtered.length));
 pageLabel.textContent='หน้า '+number(page+1)+' / '+number(pages);prev.disabled=page===0;next.disabled=page>=pages-1;
}
function syncScope(){
 scope=source.value?normalize(source.selectedOptions[0]?.textContent||source.value):'';
 if(scope&&!Array.from(estate.options).some(o=>o.value===scope)){const o=new Option(source.selectedOptions[0]?.textContent||source.value,scope);estate.add(o);}
 estate.value=scope;page=0;eppMatches=[];dismissCompanySuggestions();render();search.placeholder=scope?'โรงงานใน '+(source.selectedOptions[0]?.textContent||'นิคมฯ')+' / สารเคมี / CAS':'บริษัท / ทะเบียน / สารเคมี / CAS';if(search.value.trim().length>=2)searchEpp();
}

function showChemicalMatches(){
 if(!data||!search.value.trim())return false;
 const term=normalize(search.value),matches=data.rows.filter(r=>{const c=data.companies[r[0]];return (!scope||normalize(c[2])===scope)&&chemicalMatches(r,search.value)});
 if(!matches.length)return false;
 const companies=new Map();matches.forEach(r=>{const c=data.companies[r[0]],key=[companyKey(c[0]),normalize(c[1]),normalize(c[2])].join('|');if(!companies.has(key))companies.set(key,[]);companies.get(key).push(r)});
 const group=document.createElement('section');group.className='unified-chemical-matches';group.setAttribute('aria-label','ผลค้นหาสารเคมีและโรงงาน');
 const title=document.createElement('p');title.className='unified-company-status';title.textContent='พบสารเคมี '+number(matches.length)+' รายการ ใน '+number(companies.size)+' โรงงาน';group.append(title);
 const view=document.createElement('button');view.type='button';view.className='chemical-results-view';view.textContent='ดูรายการสารเคมีทั้งหมดในตาราง DSS';view.onclick=()=>{dismissCompanySuggestions();document.querySelector('.chemical-details-panel').scrollIntoView({behavior:'smooth',block:'center'})};group.append(view);
 [...companies].slice(0,10).forEach(([,rows])=>{
 const c=data.companies[rows[0][0]],button=document.createElement('button'),name=document.createElement('b'),detail=document.createElement('span');button.type='button';button.className='unified-company-option unified-chemical-option';name.textContent=c[0];
 const examples=[...new Set(rows.map(r=>data.names[r[1]]+' · CAS '+data.cas[r[2]]))];detail.textContent='นิคมฯ: '+c[2]+' · '+examples.slice(0,2).join(' / ')+(examples.length>2?' · และอีก '+(examples.length-2)+' รายการ':'');button.append(name,detail);
 button.onclick=()=>{searchEpp({company:c[0],estate:c[2],registration:c[1]})};group.append(button);
 });
 if(companies.size>10){const note=document.createElement('p');note.className='unified-company-status';note.textContent='แสดง 10 บริษัทแรก · ดูบริษัทที่เหลือได้ในตาราง DSS';group.append(note)}
 eppBox.append(group);return true;
}
async function searchEpp(companyLookup){
 const lookup=companyLookup&&typeof companyLookup==='object'&&companyLookup.company?companyLookup:null,lookupOnly=typeof companyLookup==='string'||!!lookup,term=lookup?lookup.company:lookupOnly?companyLookup:search.value.trim(),sequence=++eppSequence;
 eppController?.abort();eppMatches=[];eppBox.replaceChildren();page=0;render();
 const hasChemicalMatches=!lookupOnly&&showChemicalMatches();
 if(term.length<2)return;
 const message=document.createElement('p');message.className='unified-company-status';message.textContent=hasChemicalMatches?'กำลังตรวจชื่อบริษัทเพิ่มเติม…':'กำลังค้นหาบริษัทและเลขทะเบียนจาก e_PP…';eppBox.append(message);search.setAttribute('aria-expanded','true');
 eppController=new AbortController();const controller=eppController,timeout=setTimeout(()=>controller.abort(),lookupOnly?30000:20000);
 try{
  const escaped=term.replace(/'/g,"''").replace(/[%_]/g,'');
  const fields=['ชื่อบริษัทภาษาไทย','ชื่อบริษัทภาษาอังกฤษ','เลขทะเบียนใหม่','เลขทะเบียนเดิม'];
  const estateTerm=(lookup?.estate||source.value)?String(lookup?.estate||source.selectedOptions[0]?.textContent||source.value).replace(/นิคมอุตสาหกรรม|นิคมฯ|สำนักงานนิคมฯ/g,'').trim().replace(/'/g,"''"):'';
  const where=(lookupOnly?"ชื่อบริษัทภาษาไทย = '"+escaped+"'":"ชื่อบริษัทภาษาไทย IS NOT NULL AND ("+fields.map(field=>"UPPER("+field+") LIKE '%"+escaped.toUpperCase()+"%'").join(' OR ')+")")+(estateTerm?" AND นิคมอุตสาหกรรม LIKE '%"+estateTerm+"%'":"");
  const params=new URLSearchParams({where,outFields:'*',returnGeometry:'true',outSR:'4326',orderByFields:'OBJECTID ASC',resultRecordCount:'50',f:'json'});
  const response=await fetch(eppUrl+'?'+params,{signal:controller.signal});if(!response.ok)throw Error('HTTP '+response.status);
  const result=await response.json();if(result.error)throw Error(result.error.message);
  if(sequence!==eppSequence)return;
  const targetScope=lookup?.estate?normalize(lookup.estate):scope;const officialMatches=(result.features||[]).filter(f=>!targetScope||normalize(f.attributes?.['นิคมอุตสาหกรรม'])===targetScope);if(!lookupOnly)eppMatches=officialMatches;eppBox.replaceChildren();if(!lookupOnly)showChemicalMatches();
  const unique=new Map();officialMatches.forEach(f=>{const a=f.attributes,key=[a['ชื่อบริษัทภาษาไทย'],a['นิคมอุตสาหกรรม'],a['เลขทะเบียนใหม่'],a['เลขทะเบียนเดิม']].join('|');if(!unique.has(key))unique.set(key,f)});
  message.textContent='ผู้ประกอบการ e_PP '+unique.size+' บริษัท'+(result.exceededTransferLimit?' · แสดง 50 แปลงแรก กรุณาระบุคำค้นให้เจาะจงขึ้น':'')+' · คลิกบริษัทเพื่อจัดทำรายงาน';
  if(unique.size||!hasChemicalMatches)eppBox.append(message);
  for(const feature of unique.values()){
   const a=feature.attributes,button=document.createElement('button'),name=document.createElement('b'),detail=document.createElement('span');
   button.type='button';button.className='unified-company-option';name.textContent=a['ชื่อบริษัทภาษาไทย'];detail.textContent=[a['ชื่อบริษัทภาษาอังกฤษ'],a['นิคมอุตสาหกรรม'],'ทะเบียนเดิม '+(a['เลขทะเบียนเดิม']||'—'),'ทะเบียนใหม่ '+(a['เลขทะเบียนใหม่']||'—')].filter(Boolean).join(' · ');
   button.append(name,detail);button.addEventListener('click',()=>{window.dispatchEvent(new CustomEvent('ieat-unified-company-select',{detail:{feature}}))});eppBox.append(button);
  }
  render();
  if(unique.size===1&&(lookupOnly||!hasChemicalMatches))window.dispatchEvent(new CustomEvent('ieat-unified-company-select',{detail:{feature:unique.values().next().value}}));
 }catch(error){if(sequence!==eppSequence)return;if(lookupOnly){eppBox.replaceChildren();showChemicalMatches();eppBox.append(message)}message.textContent=lookupOnly?'พบข้อมูลสารเคมีของ '+term+' แต่เชื่อมต่อตำแหน่งโรงงานไม่สำเร็จ กรุณาเลือกโรงงานอีกครั้ง':hasChemicalMatches?'พบข้อมูลสารเคมีใน DSS ตามรายการด้านบน · ขณะนี้เชื่อมต่อข้อมูลบริษัทเพิ่มเติมไม่ได้':'ค้นหา e_PP ไม่สำเร็จ · ยังแสดงผลจากรายงานสารเคมีได้ กรุณาลองพิมพ์ค้นหาอีกครั้ง';}
 finally{clearTimeout(timeout)}
}
function dismissCompanySuggestions(){
 clearTimeout(timer);eppSequence++;eppController?.abort();eppBox.replaceChildren();search.setAttribute('aria-expanded','false');
}
window.addEventListener('ieat-unified-company-select',dismissCompanySuggestions);
document.addEventListener('pointerdown',event=>{if(!eppBox.contains(event.target)&&event.target!==search&&!event.target.closest('#companySearchSubmit'))dismissCompanySuggestions()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')dismissCompanySuggestions()});
search.setAttribute('aria-controls',eppBox.id);search.setAttribute('aria-expanded','false');
window.ieatRunCompanySearch=searchEpp;
search.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(searchEpp,350);});

estate.addEventListener('change',()=>{scope=estate.value;page=0;render();});
source.addEventListener('change',syncScope);source.addEventListener('input',syncScope);
prev.addEventListener('click',()=>{if(page>0){page--;render();}});next.addEventListener('click',()=>{if((page+1)*pageSize<filtered.length){page++;render();}});
(async()=>{try{
 const response=await fetch('./data/dss-chemical-details-20261015.json',{cache:'no-cache',signal:AbortSignal.timeout(30000)});
 if(!response.ok)throw Error('HTTP '+response.status);
 const packed=await response.json();if(packed.encoding!=='gzip-base64'||typeof DecompressionStream==='undefined')throw Error('เบราว์เซอร์ไม่รองรับข้อมูลรายงานนี้');
 const bytes=Uint8Array.from(atob(packed.data),c=>c.charCodeAt(0));
 const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
 const result=JSON.parse(await new Response(stream).text());
 if(result.schemaVersion!==1||result.period!=='2026-01-01/2026-10-15'||!Array.isArray(result.rows)||!Array.isArray(result.companies)||!Array.isArray(result.names)||!Array.isArray(result.cas)||!Array.isArray(result.units))throw Error('รูปแบบรายงานไม่ถูกต้อง');
 if(!result.rows.every(r=>Array.isArray(r)&&r.length===6&&result.companies[r[0]]&&typeof result.names[r[1]]==='string'&&typeof result.cas[r[2]]==='string'&&typeof result.units[r[5]]==='string'))throw Error('รายการรายงานไม่ถูกต้อง');
 data=result;
 const names=new Map();data.companies.forEach(c=>names.set(normalize(c[2]),c[2]));
 [...names].sort((a,b)=>a[1].localeCompare(b[1],'th')).forEach(([key,name])=>estate.add(new Option(name,key)));
 search.disabled=false;estate.disabled=false;syncScope();
 }catch(error){status.textContent='โหลดรายละเอียดสารเคมีไม่สำเร็จ กรุณารีเฟรชหน้า';console.warn('Chemical report details',error);}})();
})();