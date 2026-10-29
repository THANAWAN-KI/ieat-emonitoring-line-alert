/* Shared chemical lookup: period report plus active DSS factories absent from it. */
(()=>{'use strict';
const norm=value=>String(value??'').normalize('NFKC').replace(/\u0e4d\u0e32/g,'ำ').toLowerCase().replace(/[\u2010-\u2015\u2212]/g,'-').replace(/นิคมอุตสาหกรรม|สำนักงานนิคมฯ|นิคมฯ|[\s\u200b-\u200d]/g,'').trim();
const company=value=>norm(value).replace(/^(?:บริษัท|บจก\.?|บมจ\.?)|(?:จำกัด\(?มหาชน\)?|จำกัด)$/g,'').replace(/[().,]/g,'');
let pending;
async function json(url){const response=await fetch(url,{signal:AbortSignal.timeout(60000)});if(!response.ok)throw Error('HTTP '+response.status);return response.json()}
async function periodReport(){const packed=await json('./data/dss-chemical-details-20261015.json');if(packed.encoding!=='gzip-base64')throw Error('รูปแบบรายงานสารเคมีไม่ถูกต้อง');const bytes=Uint8Array.from(atob(packed.data),c=>c.charCodeAt(0));return JSON.parse(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).text())}
function valid(data){return data?.schemaVersion===1&&['companies','names','cas','units','rows'].every(k=>Array.isArray(data[k]))&&data.rows.every(r=>Array.isArray(r)&&r.length===6&&data.companies[r[0]]&&typeof data.names[r[1]]==='string'&&typeof data.cas[r[2]]==='string'&&typeof data.units[r[5]]==='string')}
function merge(report,features){
 const data=report?JSON.parse(JSON.stringify(report)):{schemaVersion:1,period:'2026-01-01/2026-10-15',companies:[],names:[],cas:[],units:[],rows:[]};
 data.companySources=data.companies.map(()=>'report');data.rowDetails=data.rows.map(()=>null);data.reportRowCount=data.rows.length;data.catalogRowCount=0;
 const ids=new Set(),names=new Set();data.companies.forEach(c=>{if(norm(c[1]))ids.add(norm(c[1])+'|'+norm(c[2]));names.add(company(c[0])+'|'+norm(c[2]))});
 const dictionaries={};for(const field of ['names','cas','units'])dictionaries[field]=new Map(data[field].map((v,i)=>[String(v),i]));
 const intern=(field,value)=>{const v=String(value??'');if(!dictionaries[field].has(v)){dictionaries[field].set(v,data[field].length);data[field].push(v)}return dictionaries[field].get(v)};
 const added=new Map(),seen=new Set();
 for(const feature of features){const p=feature.properties||feature.attributes||feature;if(p.doc_active!==true||!p.comp_name)continue;const zone=norm(p.comp_zone),id=norm(p.comp_no),name=company(p.comp_name);if((id&&ids.has(id+'|'+zone))||names.has(name+'|'+zone))continue;
  const entries=Object.keys(p).filter(k=>/^hazard\d+_name$/.test(k)&&String(p[k]??'').trim()).sort((a,b)=>Number(a.match(/\d+/)[0])-Number(b.match(/\d+/)[0]));if(!entries.length)continue;
  const key=[id||name,zone,name].join('|');let index=added.get(key);if(index===undefined){index=data.companies.length;data.companies.push([String(p.comp_name),String(p.comp_no||''),String(p.comp_zone||'')]);data.companySources.push('catalog');added.set(key,index)}
  for(const k of entries){const prefix=k.replace(/name$/,''),row=[index,intern('names',p[k]),intern('cas',p[prefix+'casNo']),String(p[prefix+'unNo']??''),String(p[prefix+'volume']??''),intern('units',p[prefix+'storageUnit'])],signature=JSON.stringify(row);if(seen.has(signature))continue;seen.add(signature);data.rows.push(row);data.rowDetails.push({state:String(p[prefix+'state']??''),container:String(p[prefix+'container']??''),response:String(p[prefix+'chemical']??'')});data.catalogRowCount++}
 }
 return data;
}
function findCompanies(data,name,estate,registrations=[]){const zone=norm(estate),inZone=c=>!zone||zone==='—'||zone==='-'||norm(c[2])===zone,ids=registrations.map(norm).filter(v=>v&&!['—','-'].includes(v));let indices=data.companies.flatMap((c,i)=>ids.includes(norm(c[1]))&&inZone(c)?[i]:[]);if(!indices.length)indices=data.companies.flatMap((c,i)=>company(c[0])===company(name)&&inZone(c)?[i]:[]);const identities=new Set(indices.map(i=>[company(data.companies[i][0]),norm(data.companies[i][1]),norm(data.companies[i][2])].join('|')));return identities.size===1?indices:[]}
async function load(){if(!pending)pending=(async()=>{const results=await Promise.allSettled([periodReport(),json('./dss-data.json')]);const report=results[0].status==='fulfilled'&&valid(results[0].value)?results[0].value:null,raw=results[1].status==='fulfilled'?results[1].value:null,features=Array.isArray(raw)?raw:raw?.features||[];if(!report&&!features.length)throw Error('โหลดข้อมูลสารเคมี DSS ไม่สำเร็จ');const data=merge(report,features);data.sourceWarning=!report?'เชื่อมต่อรายงานตามช่วงเวลาไม่ได้ แสดงเฉพาะคลัง DSS':!features.length?'เชื่อมต่อคลัง DSS เพิ่มเติมไม่ได้ ผลค้นหาอาจยังไม่ครบ':'';return data})().catch(error=>{pending=null;throw error});return pending}
window.IEATDssChemicalCatalog={load,merge,findCompanies,normalize:norm,companyKey:company};
})();
