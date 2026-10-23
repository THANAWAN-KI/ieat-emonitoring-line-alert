(function(root){'use strict';
function number(value){if(value===null||value===undefined||String(value).trim()===''||typeof value==='boolean')return null;const n=Number(String(value).replace(/,/g,''));return Number.isFinite(n)&&n>=0?n:null;}
function daysInMonth(year,month){return new Date(Date.UTC(year>2400?year-543:year,month,0)).getUTCDate();}
function periodEnd(row){return Date.UTC(row.year>2400?row.year-543:row.year,row.month,0,16,59,59);}
function unpack(data){if(!Array.isArray(data.columns)||!Array.isArray(data.rows))throw Error('รูปแบบข้อมูลน้ำไม่ถูกต้อง');return data.rows.map(values=>{const row=Object.fromEntries(data.columns.map((key,i)=>[key,values[i]]));for(const k of ['year','month','operation','use','reserve','operators','area','reused','lat','lon','id'])row[k]=number(row[k]);return row;}).filter(r=>r.name&&r.year&&r.month>=1&&r.month<=12);}
function dedupe(rows){const unique=new Map();for(const r of rows){const key=[r.year,r.month,String(r.name).trim()].join('|');if(!unique.has(key)||Number(r.id)>Number(unique.get(key).id))unique.set(key,r);}return [...unique.values()];}
function analyse(row,allRows,thresholds=[14,30,60],at=Date.now()){
 const daily=row.use!==null&&row.use>0?row.use/daysInMonth(row.year,row.month):null;
 const days=daily!==null&&row.reserve!==null?row.reserve/daily:null;
 const priorMonth=row.month===1?12:row.month-1,priorYear=row.month===1?row.year-1:row.year;
 const previous=allRows.find(r=>r.name===row.name&&r.year===priorYear&&r.month===priorMonth);
 const previousYear=allRows.find(r=>r.name===row.name&&r.year===row.year-1&&r.month===row.month);
 const percent=(a,b)=>a!==null&&b!==null&&b>0?(a-b)/b*100:null;
 const stale=at-periodEnd(row)>45*86400000;
 const level=days===null?'unknown':days<thresholds[0]?'red':days<thresholds[1]?'orange':days<thresholds[2]?'yellow':'green';
 const reusedRate=row.reused!==null&&row.use>0?row.reused/row.use*100:null;
 return {...row,daily,days,stale,level:stale?'historical':level,screeningLevel:level,useChange:previous?percent(row.use,previous.use):null,reserveChange:previous?percent(row.reserve,previous.reserve):null,yearChange:previousYear?percent(row.use,previousYear.use):null,reusedRate,reusedAnomaly:reusedRate!==null&&reusedRate>100,previous};
}
function scenario(row,demandPercent,inflow=0){const daily=row.daily===null?null:row.daily*demandPercent/100;const net=daily===null?null:daily-inflow;return {daily,net,days:net!==null&&net>0&&row.reserve!==null?row.reserve/net:null,balanced:net!==null&&net<=0};}
function distance(a,b){if([a.lat,a.lon,b.lat,b.lon].some(v=>number(v)===null))return null;const rad=Math.PI/180,dy=(b.lat-a.lat)*rad,dx=(b.lon-a.lon)*rad,h=Math.sin(dy/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dx/2)**2;return 12742*Math.asin(Math.sqrt(Math.min(1,h)));}
function sourceTime(value){let s=String(value||'').replace(' ','T');if(/^\d{4}-\d{2}-\d{2}$/.test(s))s+='T00:00:00';if(/^\d{4}-\d{2}-\d{2}T/.test(s)&&!/(Z|[+-]\d{2}:?\d{2})$/.test(s))s+='+07:00';return Date.parse(s);}
function nearby(rows,estate,at=Date.now(),maxAgeDays=2){return rows.map(r=>({...r,distance:distance(estate,{lat:r.lat,lon:r.lon??r.lng})})).filter(r=>r.distance!==null).map(r=>{const age=at-sourceTime(r.at||r.observed_at||r.measured_at);return {...r,stale:!Number.isFinite(age)||age< -300000||age>maxAgeDays*86400000};}).sort((a,b)=>a.distance-b.distance);}
const api={number,daysInMonth,periodEnd,unpack,dedupe,analyse,scenario,distance,nearby};if(typeof module!=='undefined'&&module.exports)module.exports=api;root.DroughtModel=api;
})(typeof window!=='undefined'?window:globalThis);
