/* Shared station dataset for the coverage map and emergency report. */
(() => {
  'use strict';
  const SOURCE='https://emonitor.ieat.go.th/call_feed/geog/GeoData/station_all.json';
  let inFlight=null,cached=null,cachedAt=0,sequence=0,mountObserver=null;
  const typeOf=value=>{const t=String(value||'').toUpperCase();return /AIR|AQM/.test(t)?'AQMs':/WQM/.test(t)?'WQMs':/CEM/.test(t)?'CEMs':String(value||'ไม่ระบุประเภท');};
  const distance=(a,b)=>{const rad=x=>x*Math.PI/180,dLat=rad(b.lat-a.lat),dLng=rad(b.lng-a.lng);const q=Math.sin(dLat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLng/2)**2;return 6371*2*Math.atan2(Math.sqrt(q),Math.sqrt(Math.max(0,1-q)));};
  function reading(key,raw){
    const text=String(raw??'').trim(),name=key.replace(/_txt$/i,'');
    const number=text.match(/^(-?\d[\d,]*(?:\.\d+)?)(?=\s|$|\()/);
    const value=number?Number(number[1].replace(/,/g,'')):null;
    const std=text.match(/\(\s*STD\s+([^)]*)\)/i);
    let min=null,max=null;
    if(std){
      const range=std[1].trim().match(/^(-?\d[\d,]*(?:\.\d+)?)\s*(?:-|–|ถึง)\s*(-?\d[\d,]*(?:\.\d+)?)$/);
      const single=std[1].trim().match(/^(\d[\d,]*(?:\.\d+)?)$/);
      if(range){min=Number(range[1].replace(/,/g,''));max=Number(range[2].replace(/,/g,''));if(min>max){min=null;max=null;}}
      else if(single)max=Number(single[1].replace(/,/g,''));
    }
    const assessed=Number.isFinite(value)&&max!==null;
    return {name,text,value,standard:std?.[1]?.trim()||null,assessed,exceeded:assessed&&(value>max||(min!==null&&value<min))};
  }
  function station(feature,point){
    const p=feature.properties||{},c=feature.geometry?.coordinates||[];
    if(feature.geometry?.type!=='Point'||c.length<2||c[0]==null||c[1]==null||String(p.Code)==='9999')return null;
    const lat=Number(c[1]),lng=Number(c[0]);if(!Number.isFinite(lat)||!Number.isFinite(lng)||Math.abs(lat)>90||Math.abs(lng)>180)return null;
    const readings=Object.entries(p).filter(([key])=>/_txt$/i.test(key)).map(([key,v])=>reading(key,v));
    const exceeded=readings.filter(r=>r.exceeded),assessed=readings.filter(r=>r.assessed);
    const alarm=String(p.ParameterAlram||p.parameter_alarm||'').trim();
    const hasAlarm=!!alarm&&!/^(-|none|null|nan|n\/a|0|normal|ปกติ)$/i.test(alarm);
    const online=String(p.Status||'').toUpperCase()==='ONLINE';
    let status=exceeded.length?'เกินค่ามาตรฐาน':hasAlarm?'มีรายการแจ้งเตือนจากต้นทาง':!online?'ออฟไลน์ / ไม่ทราบสถานะ':!assessed.length?'ข้อมูลไม่พอประเมิน':'ปกติ';
    return {code:String(p.Code||''),name:String(p.StationTH||'ไม่ระบุชื่อสถานี'),type:typeOf(p.Type),estate:String(p.IndustryZone||''),lat,lng,distance:distance(point,{lat,lng}),updated:String(p['LastUpdate-TH']||p.LastUpdate||'ไม่ระบุเวลาตรวจวัด'),rawUpdated:String(p.LastUpdate||''),online,readings,exceeded,alarm:hasAlarm?alarm:'',status};
  }
  async function getJson(url){
    const response=await fetch(url,{cache:'no-store',signal:AbortSignal.timeout(8000)});
    if(!response.ok)throw Error('HTTP '+response.status);
    const data=await response.json();if(!Array.isArray(data.features))throw Error('รูปแบบข้อมูลสถานีไม่ถูกต้อง');return data;
  }
  function load(){
    if(cached&&Date.now()-cachedAt<60000)return Promise.resolve(cached);
    if(inFlight)return inFlight;
    inFlight=(async()=>{
      try{const data=await getJson(SOURCE);return {...data,source:SOURCE,live:true};}
      catch{const data=await getJson('./emonitoring-stations.json');return {...data,source:SOURCE,live:false};}
    })().then(data=>{cached=data;cachedAt=Date.now();return data;}).finally(()=>{inFlight=null;});
    return inFlight;
  }
  function nearby(data,point,km){
    if(!point||![point.lat,point.lng,km].every(Number.isFinite)||km<=0)throw Error('พิกัดหรือรัศมีไม่ถูกต้อง');
    const seen=new Set();return data.features.map(f=>station(f,point)).filter(s=>{
      if(!s||s.distance>km)return false;const key=[s.type,s.code,s.name,s.lat,s.lng].join('|');if(seen.has(key))return false;seen.add(key);return true;
    }).sort((a,b)=>a.distance-b.distance);
  }
  const textNode=(doc,tag,text,className)=>{const node=doc.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;};
  function build(doc,result,km){
    const host=textNode(doc,'section',undefined,'monitoring-report');host.id='reportMonitoringSupport';
    host.append(textNode(doc,'h3','สถานี e-Monitoring ในรัศมี '+km+' กม.'));
    if(result.error){host.append(textNode(doc,'p','โหลดข้อมูลสถานีไม่สำเร็จ จึงยังยืนยันไม่ได้ว่ามีสถานีในรัศมีหรือไม่'));return host;}
    const intro=result.rows.length?'พบ '+result.rows.length+' สถานี · ระยะทางเส้นตรงจากจุดเกิดเหตุ':'ไม่พบสถานี e-Monitoring ในรัศมี '+km+' กม. จากชุดข้อมูลที่ตรวจสอบ';
    host.append(textNode(doc,'p',intro));
    if(!result.live){let time='ไม่ระบุเวลา';if(result.fetchedAt){const date=new Date(result.fetchedAt);if(Number.isFinite(date.getTime()))time=date.toLocaleString('th-TH',{timeZone:'Asia/Bangkok'});}host.append(textNode(doc,'p','ต้นทางสดเชื่อมต่อไม่ได้ ใช้ชุดข้อมูลสำรองที่ดึงเมื่อ '+time+' · ค่าต่อไปนี้เป็นค่าล่าสุดที่มีในชุดข้อมูล ไม่ใช่การยืนยันค่าปัจจุบัน','monitoring-note'));}
    for(const s of result.rows){
      const card=textNode(doc,'article',undefined,'monitoring-station');
      card.append(textNode(doc,'h4',s.type+' · '+s.name));
      card.append(textNode(doc,'p',(s.estate?s.estate+' · ':'')+s.distance.toFixed(2)+' กม. · ตรวจวัด '+s.updated));
      const status=textNode(doc,'p',s.status==='ปกติ'?'ปกติ ณ เวลาข้อมูล (พารามิเตอร์ที่มีค่า STD)':s.status,s.status==='ปกติ'?'monitoring-normal':s.exceeded.length||s.alarm?'monitoring-exceeded':'monitoring-note');
      card.append(status);
      if(!s.online)card.append(textNode(doc,'p','สถานีไม่ได้รายงาน ONLINE · แสดงค่าล่าสุดที่บันทึกไว้','monitoring-note'));
      if(s.exceeded.length)card.append(textNode(doc,'p','พารามิเตอร์เกินค่ามาตรฐาน: '+s.exceeded.map(r=>r.name+' '+r.text).join(' · '),'monitoring-exceeded'));
      if(s.alarm)card.append(textNode(doc,'p','รายการแจ้งเตือนจากต้นทาง: '+s.alarm,'monitoring-exceeded'));
      if(!s.readings.some(r=>r.value!==null))card.append(textNode(doc,'p','ไม่มีค่าตรวจวัดที่ใช้ประเมินได้'));
      const table=doc.createElement('table'),head=doc.createElement('thead'),hr=doc.createElement('tr');
      ['พารามิเตอร์','ค่าตรวจวัด / หน่วย','เกณฑ์ STD จากต้นทาง','ผลเทียบเกณฑ์'].forEach(label=>hr.append(textNode(doc,'th',label)));head.append(hr);table.append(head);
      const body=doc.createElement('tbody');
      for(const r of s.readings){const row=doc.createElement('tr');[r.name,r.text||'ไม่มีข้อมูล',r.standard||'ไม่ระบุ',!r.assessed?'ประเมินไม่ได้':r.exceeded?'เกินค่ามาตรฐาน':'ปกติ'].forEach(value=>row.append(textNode(doc,'td',value)));if(r.exceeded)row.className='monitoring-exceeded-row';body.append(row);}
      table.append(body);card.append(table);host.append(card);
    }
    host.append(textNode(doc,'p','เปรียบเทียบกับค่า STD ที่ต้นทางระบุเท่านั้น พารามิเตอร์ที่ไม่มีเกณฑ์หรือเกณฑ์ผิดรูปแบบจะแสดง “ประเมินไม่ได้” เวลาแสดงเป็นเวลาตรวจวัดของแต่ละสถานี','monitoring-note'));
    return host;
  }
  async function update(context){
    const token=++sequence;mountObserver?.disconnect();
    const doc=document.getElementById('emergencyReportFrame')?.contentDocument;
    if(!doc)return;
    doc.getElementById('reportMonitoringSupport')?.remove();
    doc.getElementById('reportMonitoringSummary')?.remove();
    let result;
    try{const data=await load();result={rows:nearby(data,context.point,Number(context.km)),live:data.live,fetchedAt:data.fetched_at||null};}
    catch{result={rows:[],error:true};}
    if(token!==sequence||window.ieatCoverageReport?.id!==context.id)return;
    context.summary.monitoring=result;
    const host=build(doc,result,context.km);
    const summary=textNode(doc,'section',undefined,'monitoring-summary');summary.id='reportMonitoringSummary';
    const exceedCount=result.rows.filter(s=>s.exceeded.length).length;
    summary.append(textNode(doc,'h3','สรุปสถานี e-Monitoring ใกล้จุดเกิดเหตุ'));
    summary.append(textNode(doc,'p',result.error?'โหลดข้อมูลสถานีไม่สำเร็จ · ยังประเมินไม่ได้':
      'ในรัศมี '+context.km+' กม. พบ '+result.rows.length+' สถานี · เกินค่า STD '+exceedCount+' สถานี · แจ้งเตือนจากต้นทาง '+result.rows.filter(s=>s.alarm).length+' สถานี'));
    const link=textNode(doc,'a','ดูรายชื่อสถานี ค่าตรวจวัด และผลเทียบมาตรฐานในหน้าที่ 3');link.href='#dssPageThree';summary.append(link);
    const place=()=>{
      const page=doc.getElementById('dssPageThree'),target=doc.getElementById('reportNearbySupport'),content=doc.getElementById('dssPageThreeContent');
      if(content&&host.parentElement!==content){content.replaceChildren(host);}
      if(page){
        const facts=doc.getElementById('dssPageThreeFacts');
        const text=context.company+' · รัศมี '+context.km+' กม.';
        if(facts&&facts.textContent!==text)facts.textContent=text;
      }
      if(target&&summary.parentElement!==target)target.append(summary);
    };
    place();mountObserver=new MutationObserver(place);mountObserver.observe(doc.body,{childList:true,subtree:true});
    return result;
  }
  window.ieatMonitoringReport={load,nearby,reading,station,update};
})();
