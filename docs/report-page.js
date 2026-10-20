(() => {
 'use strict';
 const $=id=>document.getElementById(id),make=(tag,text)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;};
 let record,links=[];
 const time=value=>new Date(value).toLocaleString('th-TH',{timeZone:'Asia/Bangkok'});
 $('back').addEventListener('click',event=>{try{if(window.opener&&!window.opener.closed&&window.opener.location.origin===location.origin){event.preventDefault();window.opener.focus();window.close();}}catch{}});
 function size(){const doc=$('report-frame').contentDocument;if(doc)$('report-frame').style.height=Math.max(800,doc.body.scrollHeight,doc.documentElement.scrollHeight)+'px';}
 async function show(){
  const id=new URLSearchParams(location.search).get('id');
  if(!id){if(location.hash==='#preparing'){$('status').textContent='กำลังรับข้อมูลจาก Dashboard กรุณารอสักครู่…';return;}await archive();return;}
  record=await window.IEATReportStore.get(id);
  if(!record){$('status').textContent='ไม่พบรายงานนี้ในอุปกรณ์ กรุณาสร้างจาก Dashboard อีกครั้ง';await archive();return;}
  $('page-title').textContent='รายงานข้อมูลสนับสนุนเหตุฉุกเฉิน';$('summary').hidden=false;
  const meta=make('div');meta.className='meta';for(const [label,value] of [['โรงงาน',record.company],['ประเภทเหตุ',record.incidentType],['ระยะค้นหา',record.radius?record.radius+' กม.':'–'],['จัดทำเมื่อ',time(record.createdAt)]]){const box=make('div');box.append(make('b',label+' '),document.createTextNode(value||'ไม่ระบุ'));meta.append(box);}
  $('summary').append(meta);const note=make('p','ข้อมูลฉบับนี้เก็บ ณ เวลาจัดทำ ไม่เปลี่ยนตามข้อมูลสดบน Dashboard หากต้องการข้อมูลล่าสุดให้จัดทำรายงานฉบับใหม่');note.className='muted';$('summary').append(note);if(record.mapWarning){const p=make('p',record.mapWarning);p.className='warning';$('summary').append(p);}
  const frame=$('report-frame');frame.hidden=false;frame.onload=()=>{size();const doc=frame.contentDocument;if(doc){new ResizeObserver(size).observe(doc.body);doc.fonts?.ready.then(size);doc.querySelectorAll('img').forEach(i=>i.addEventListener('load',size,{once:true}));}$('download').hidden=false;$('status').textContent='ตรวจสอบชื่อโรงงาน ประเภทเหตุ แผนที่ และตาราง DSS ก่อนดาวน์โหลด';};frame.srcdoc=record.markup;
 }
 async function archive(){
  $('archive').hidden=false;const rows=(await window.IEATReportStore.list()).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)),box=$('archive-content');box.replaceChildren();
  if(!rows.length){const p=make('p','ยังไม่มีรายงาน · กลับ Dashboard เลือกโรงงาน แล้วกด “จัดทำรายงาน”');p.className='empty';box.append(p);return;}
  const table=make('table');table.className='archive';const head=make('thead'),tr=make('tr');['จัดทำเมื่อ','โรงงาน / ประเภทเหตุ','เปิดรายงาน'].forEach(x=>tr.append(make('th',x)));head.append(tr);table.append(head);const body=make('tbody');for(const r of rows){const tr=make('tr'),a=make('a','ตรวจรายงาน');a.className='button';a.href='./report.html?id='+encodeURIComponent(r.id);const td=make('td');td.append(a);tr.append(make('td',time(r.createdAt)),make('td',r.company+' · '+r.incidentType),td);body.append(tr);}table.append(body);box.append(table);
 }
 $('download').onclick=async()=>{
  const frame=$('report-frame'),doc=frame.contentDocument,button=$('download');if(!record||!doc)return;button.disabled=true;links.forEach(URL.revokeObjectURL);links=[];$('downloads').replaceChildren();$('status').textContent='กำลังสร้าง PNG 2 หน้า…';
  try{if(typeof html2canvas!=='function')throw Error('ระบบสร้างภาพยังไม่พร้อม กรุณาลองอีกครั้ง');await doc.fonts?.ready;const pages=[doc.getElementById('report'),doc.getElementById('dssPageTwo')];if(pages.some(x=>!x))throw Error('รายงานไม่ครบ 2 หน้า');for(let i=0;i<pages.length;i++){const page=pages[i];page.classList.add('dss-field-export');await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));const canvas=await html2canvas(page,{backgroundColor:'#fff',scale:2,useCORS:true,logging:false});const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('สร้างภาพไม่สำเร็จ');const url=URL.createObjectURL(blob);links.push(url);const a=make('a','ดาวน์โหลดหน้า '+(i+1));a.href=url;a.download='EMCC-'+record.id.slice(0,8)+'-page-'+(i+1)+'.png';$('downloads').append(a);a.click();page.classList.remove('dss-field-export');}$('status').textContent='สร้างภาพครบ 2 หน้าแล้ว หากดาวน์โหลดไม่เริ่ม ให้กดลิงก์แต่ละหน้าด้านล่าง';}
  catch(error){$('status').textContent='ดาวน์โหลดไม่สำเร็จ: '+error.message;}finally{doc.querySelectorAll('.dss-field-export').forEach(n=>n.classList.remove('dss-field-export'));button.disabled=false;size();}
 };
 show().catch(error=>{$('status').textContent='เปิดรายงานไม่ได้: '+error.message;});
})();
