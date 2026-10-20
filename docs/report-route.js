(() => {
 'use strict';
 const frame=document.getElementById('emergencyReportFrame'),section=document.getElementById('emergencyReportPage');
 if(!frame||!section)return;
 // Preserve the existing data-selection engine, but remove its report from the dashboard layout.
 section.style.setProperty('display','none','important');
 section.setAttribute('aria-hidden','true');
 let busy=false;
 const notice=document.createElement('p');notice.id='separate-report-status';notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');notice.style.cssText='margin:8px 0;color:#3949ab;font:13px/1.6 Sarabun,sans-serif';
 document.querySelector('.direct-querybar')?.after(notice);
 const nav=document.querySelector('.header-nav');
 if(nav&&!nav.querySelector('[data-report-center]')){const a=document.createElement('a');a.href='./report.html';a.textContent='รายงาน';a.dataset.reportCenter='true';nav.append(a);}
 function clean(root){root.querySelectorAll('script,iframe,object,embed,form').forEach(n=>n.remove());root.querySelectorAll('button').forEach(n=>{const span=document.createElement('span');span.textContent=n.textContent;n.replaceWith(span);});root.querySelectorAll('*').forEach(el=>{for(const attr of [...el.attributes])if(attr.name.startsWith('on')||attr.name==='srcdoc')el.removeAttribute(attr.name);if(el.tagName==='CANVAS')el.remove();});return root;}
 function field(doc,key){return doc.querySelector('[data-key="'+key+'"]')?.value||doc.querySelector('[data-out="'+key+'"]')?.textContent||'';}
 async function create(){
  if(busy)return;
  let doc;try{doc=frame.contentDocument;}catch{}
  const company=doc?field(doc,'company').trim():'';
  if(!doc||!company||/บริษัท\s*\/\s*โรงงานที่เกิดเหตุ/.test(company)){notice.textContent='กรุณาค้นหาและเลือกโรงงานก่อน แล้วกด “จัดทำรายงาน”';document.getElementById('chemicalSearch')?.focus();return;}
  if(!doc.getElementById('report')||!doc.getElementById('dssPageTwo')){notice.textContent='รายงานยังเตรียมข้อมูลไม่เสร็จ กรุณาลองอีกครั้ง';return;}
  busy=true;const button=document.getElementById('dashboardCreateReport');if(button)button.disabled=true;
  // Open synchronously from the click so browsers permit the new report tab.
  const target=window.open('./report.html#preparing','_blank');
  notice.textContent='กำลังเตรียมรายงานจากข้อมูลที่เลือกและมุมมองแผนที่ปัจจุบัน…';
  try{
   let mapImage='',mapWarning='';
   const currentMap=window.ieatSupportMap;
   const view=currentMap?{center:{lat:currentMap.getCenter().lat,lng:currentMap.getCenter().lng},zoom:currentMap.getZoom(),bounds:currentMap.getBounds().toBBoxString()}:null;
   if(window.ieatCaptureReportMap&&frame.contentWindow.html2canvas){try{mapImage=await window.ieatCaptureReportMap(frame.contentWindow.html2canvas);}catch{mapWarning='ภาพแผนที่ Dashboard จับภาพไม่สำเร็จ กรุณาตรวจแผนที่ในรายงานก่อนใช้งาน';}}else mapWarning='แผนที่ Dashboard ยังไม่พร้อม กรุณาตรวจภาพแผนที่ในรายงานก่อนใช้งาน';
   const first=clean(doc.getElementById('report').cloneNode(true)),second=clean(doc.getElementById('dssPageTwo').cloneNode(true));
   if(mapImage){const image=first.querySelector('#dashboardReportMapImage');if(image)image.src=mapImage;}
   const style=document.createElement('div');
   doc.head.querySelectorAll('style,link[rel="stylesheet"]').forEach(n=>style.append(n.cloneNode(true)));
   const css=style.innerHTML;for(const page of [first,second]){page.removeAttribute('hidden');page.style.setProperty('display','block','important');page.style.setProperty('width','100%','important');page.style.setProperty('max-width','1100px','important');page.style.setProperty('height','auto','important');page.style.setProperty('overflow','visible','important');}
   const frozenStyle='<style>html,body{height:auto!important;overflow:visible!important;background:#f3f5f8!important;margin:0!important;padding:0!important}body>.top,.editor,.report-download-toolbar{display:none!important}body #report,body #dssPageTwo{display:block!important;width:100%!important;max-width:1100px!important;min-height:0!important;height:auto!important;margin:0 auto 20px!important;position:relative!important;left:auto!important;top:auto!important}body #report:not(.dss-field-export)>:not(#dssFieldBrief){display:none!important}body #report #dssFieldBrief{display:block!important}body #report #dssFieldBrief .fb-map{height:auto!important;aspect-ratio:1.85}body #report #dssFieldBrief .fb-map img{object-fit:contain!important}body #dssPageTwo{overflow:visible!important}body .report-wrap{display:block!important}</style>';
   const markup='<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="'+new URL('.',location.href).href+'">'+css+frozenStyle+'</head><body class="'+doc.body.className+'">'+first.outerHTML+second.outerHTML+'</body></html>';
   const record={id:crypto.randomUUID(),createdAt:new Date().toISOString(),kind:'incident-support',company,estate:field(doc,'estate'),incidentType:document.getElementById('dashboardIncidentType')?.value||field(doc,'event'),radius:Number(document.getElementById('supportRadius')?.value)||null,bufferRadii:[...document.querySelectorAll('.dashboard-buffer-tools input:checked')].map(n=>Number(n.value)).filter(Number.isFinite),mapView:view,mapWarning,markup,fields:Object.fromEntries(['company','registration','estate','address','event','date','reportNo','source'].map(key=>[key,field(doc,key)]))};
   await window.IEATReportStore.add(record);
   const url=new URL('./report.html',location.href);url.searchParams.set('id',record.id);
   if(target&&!target.closed)target.location.replace(url.href);else location.assign(url.href);
   notice.textContent='เปิดหน้ารายงานแล้ว · กลับมาวิเคราะห์ต่อบน Dashboard นี้ได้';
  }catch(error){if(target&&!target.closed)target.close();notice.textContent='ยังสร้างรายงานไม่ได้: '+(error?.message||'บันทึกข้อมูลในอุปกรณ์ไม่สำเร็จ')+' · ข้อมูลที่เลือกบน Dashboard ยังอยู่';}
  finally{busy=false;if(button)button.disabled=false;}
 }
 document.addEventListener('click',event=>{if(!event.target.closest('#dashboardCreateReport'))return;event.preventDefault();event.stopImmediatePropagation();create();},true);
})();
