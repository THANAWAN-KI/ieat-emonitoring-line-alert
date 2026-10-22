(() => {
 'use strict';
 const $=id=>document.getElementById(id),make=(tag,text)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;};
 let record,links=[];
 const time=value=>new Date(value).toLocaleString('th-TH',{timeZone:'Asia/Bangkok'});
 $('back').addEventListener('click',event=>{try{if(!record?.incidentId&&window.opener&&!window.opener.closed&&window.opener.location.origin===location.origin){event.preventDefault();window.opener.focus();window.close();}}catch{}});
 function prepareMap(doc){
  const slot=doc.getElementById('fieldBriefMap'),image=doc.getElementById('dashboardReportMapImage');if(!slot||!image)return;
  for(const [key,value] of Object.entries({height:Math.round(986*(Number(slot.dataset.reportMapRatio)||(image.naturalWidth?image.naturalHeight/image.naturalWidth:0.55)))+'px','aspect-ratio':'auto',position:'relative',overflow:'hidden'}))slot.style.setProperty(key,value,'important');
  for(const [key,value] of Object.entries({width:'100%',height:'100%','object-fit':'contain'}))image.style.setProperty(key,value,'important');
  image.alt='ภาพแผนที่ ณ เวลาจัดทำรายงาน';doc.querySelectorAll('[aria-label="ซูมแผนที่รายงาน"]').forEach(n=>n.remove());
  const weather=doc.getElementById('fbWeather');if(weather){slot.append(weather);for(const [key,value] of Object.entries({position:'absolute',top:'auto',right:'16px',bottom:'16px',width:'250px','max-width':'42%','font-size':'11px'}))weather.style.setProperty(key,value,'important');}
 }
 function size(){const doc=$('report-frame').contentDocument;if(doc)$('report-frame').style.height=Math.max(800,doc.body.scrollHeight,doc.documentElement.scrollHeight)+'px';}
 async function show(){
  const id=new URLSearchParams(location.search).get('id');
  if(!id){if(location.hash==='#preparing'){$('status').textContent='กำลังรับข้อมูลจาก Dashboard กรุณารอสักครู่…';return;}await archive();return;}
  record=await window.IEATReportStore.get(id);
  if(record?.incidentId){const back=$('back');back.textContent='← กลับรายการเหตุ';back.href='./incidents.html?id='+encodeURIComponent(record.incidentId);document.querySelector('a[href="./incidents.html"]')?.setAttribute('href',record.kind==='hazard-specific'?'./hazard-report.html?incident='+encodeURIComponent(record.incidentId):'./hub.html?view=incident&incident='+encodeURIComponent(record.incidentId));}
  if(!record){$('status').textContent='ไม่พบรายงานนี้ในอุปกรณ์ กรุณาสร้างจาก Dashboard อีกครั้ง';await archive();return;}
  $('page-title').textContent=record.kind==='hazard-specific'?'รายงานสถานการณ์'+record.incidentType:'รายงานข้อมูลสนับสนุนเหตุฉุกเฉิน';$('summary').hidden=false;
  const meta=make('div');meta.className='meta';for(const [label,value] of [['โรงงาน',record.company],['ประเภทเหตุ',record.incidentType],['ระยะค้นหา',record.radius?record.radius+' กม.':'–'],['จัดทำเมื่อ',time(record.createdAt)]]){const box=make('div');box.append(make('b',label+' '),document.createTextNode(value||'ไม่ระบุ'));meta.append(box);}
  $('summary').append(meta);const note=make('p','ข้อมูลฉบับนี้เก็บ ณ เวลาจัดทำ ไม่เปลี่ยนตามข้อมูลสดบน Dashboard หากต้องการข้อมูลล่าสุดให้จัดทำรายงานฉบับใหม่');note.className='muted';$('summary').append(note);if(record.mapWarning){const p=make('p',record.mapWarning);p.className='warning';$('summary').append(p);}
  if(record.incidentContext){$('summary').append(make('p','รายการเหตุ '+record.incidentId.slice(0,8)+' · '+record.incidentContext.verification+' · รับแจ้ง '+time(record.incidentContext.receivedAt)));}if(record.supportStatus?.failures?.length){const warning=make('p','ข้อมูลสนับสนุนบางประเภทโหลดไม่สำเร็จ ณ เวลาจัดทำ กรุณาตรวจความครบถ้วนก่อนใช้รายงาน');warning.className='warning';$('summary').append(warning);}
  const frame=$('report-frame');frame.hidden=false;frame.onload=()=>{const doc=frame.contentDocument;if(doc){prepareMap(doc);size();new ResizeObserver(size).observe(doc.body);doc.fonts?.ready.then(size);doc.querySelectorAll('img').forEach(i=>i.addEventListener('load',size,{once:true}));}$('download').hidden=false;$('status').textContent='ตรวจสอบข้อมูลรายงานก่อนดาวน์โหลด';};frame.srcdoc=record.markup;
 }
 async function archive(){
  document.querySelector('.steps').hidden=true;$('page-title').textContent='รายงานที่บันทึก';$('archive').hidden=false;const rows=(await window.IEATReportStore.list()).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)),box=$('archive-content');box.replaceChildren();
  if(!rows.length){const p=make('p','ยังไม่มีรายงาน · กด “จัดทำรายงานใหม่” เพื่อเลือกโรงงานและเตรียมข้อมูล');p.className='empty';box.append(p);return;}
  const table=make('table');table.className='archive';const head=make('thead'),tr=make('tr');['จัดทำเมื่อ','โรงงาน / ประเภทเหตุ','เปิดรายงาน'].forEach(x=>tr.append(make('th',x)));head.append(tr);table.append(head);const body=make('tbody');for(const r of rows){const tr=make('tr'),a=make('a','ตรวจรายงาน');a.className='button';a.href='./report.html?id='+encodeURIComponent(r.id);const td=make('td');td.append(a);tr.append(make('td',time(r.createdAt)),make('td',r.company+' · '+r.incidentType),td);body.append(tr);}table.append(body);box.append(table);
 }
 let rendering=false;
 $('download').onclick=async()=>{
  const doc=$('report-frame').contentDocument,button=$('download');if(!record||!doc||rendering)return;
  if(links.length===2){$('downloads').querySelectorAll('a').forEach(a=>a.click());return;}
  rendering=true;button.disabled=true;links.forEach(URL.revokeObjectURL);links=[];$('downloads').replaceChildren();$('status').textContent='กำลังสร้าง PNG 2 หน้า…';
  try{
   if(typeof html2canvas!=='function')throw Error('ระบบสร้างภาพยังไม่พร้อม กรุณาลองอีกครั้ง');
   await doc.fonts?.ready;
   await Promise.all([...doc.images].map(i=>i.complete?Promise.resolve():new Promise(resolve=>{i.addEventListener('load',resolve,{once:true});i.addEventListener('error',resolve,{once:true});})));
   prepareMap(doc);
   const pages=[doc.getElementById('report'),doc.getElementById('dssPageTwo')];if(pages.some(x=>!x))throw Error('รายงานไม่ครบ 2 หน้า');
   for(let i=0;i<pages.length;i++){
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const page=pages[i],canvas=await html2canvas(page,{backgroundColor:'#fff',scale:window.innerWidth<700?1.5:2,useCORS:true,logging:false,width:1050,height:Math.max(1485,page.scrollHeight),windowWidth:1200});
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));canvas.width=0;canvas.height=0;if(!blob)throw Error('สร้างภาพไม่สำเร็จ');
    const url=URL.createObjectURL(blob);links.push(url);const a=make('a','ดาวน์โหลดหน้า '+(i+1));a.href=url;a.download='IEAT-DSS-'+(record.fields?.reportNo||record.id.slice(0,8)).replace(/[^a-zA-Z0-9_-]/g,'-')+'-page-'+(i+1)+'.png';$('downloads').append(a);a.click();
   }
   $('status').textContent='สร้างภาพครบ 2 หน้าแล้ว กดดาวน์โหลดแต่ละหน้าได้ด้านล่าง';
  }catch(error){$('status').textContent='ดาวน์โหลดไม่สำเร็จ: '+error.message;}finally{rendering=false;button.disabled=false;size();}
 };
 window.addEventListener('pagehide',()=>links.forEach(URL.revokeObjectURL));
 show().catch(error=>{$('status').textContent='เปิดรายงานไม่ได้: '+error.message;});
})();


