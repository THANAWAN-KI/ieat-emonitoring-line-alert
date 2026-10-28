(() => {
 'use strict';
 const frame=document.getElementById('emergencyReportFrame'),section=document.getElementById('emergencyReportPage');
 if(!frame||!section)return;
 // Keep the embedded report visible in the DSS / RiskMap data workspace.
 const view=new URLSearchParams(location.search).get('view');
 if(view==='data'){
  section.hidden=false;
  section.removeAttribute('aria-hidden');
  section.style.setProperty('display','block','important');
  if(!frame.getAttribute('src'))frame.src='./dss.html?embedded=dashboard&v=20261022';
  return;
 }
 section.style.setProperty('display','none','important');
 section.setAttribute('aria-hidden','true');
 window.addEventListener('ieat-unified-company-select',()=>{section.hidden=false;section.removeAttribute('aria-hidden');section.style.setProperty('display','block','important');if(!frame.getAttribute('src'))frame.src='./dss.html?embedded=dashboard&v=20261022';});
 if(new URLSearchParams(location.search).get('view')!=='incident')return;
 let busy=false;
 const notice=document.createElement('p');notice.id='separate-report-status';notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');notice.style.cssText='margin:8px 0;color:#3949ab;font:13px/1.6 Sarabun,sans-serif';
 document.querySelector('.direct-querybar')?.after(notice);
 function clean(root){root.querySelectorAll('script,iframe,object,embed,form').forEach(n=>n.remove());root.querySelectorAll('button').forEach(n=>{const span=document.createElement('span');span.textContent=n.textContent;n.replaceWith(span);});root.querySelectorAll('*').forEach(el=>{for(const attr of [...el.attributes])if(attr.name.startsWith('on')||attr.name==='srcdoc')el.removeAttribute(attr.name);if(el.tagName==='CANVAS')el.remove();});return root;}
 function field(doc,key){return doc.querySelector('[data-key="'+key+'"]')?.value||doc.querySelector('[data-out="'+key+'"]')?.textContent||'';}
 async function create(){
  if(busy)return;
  if(typeof window.ieatCanCreateReport==='function'&&!window.ieatCanCreateReport())return;
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
   await frame.contentWindow.dssLoadReportChemicals?.();
   await frame.contentWindow.dssRefreshPageTwo?.();
   await doc.fonts?.ready;
   const first=clean(doc.getElementById('report').cloneNode(true)),second=clean(doc.getElementById('dssPageTwo').cloneNode(true));
   first.querySelectorAll(':scope > :not(#dssFieldBrief)').forEach(n=>n.remove());
   const brief=first.querySelector('#dssFieldBrief');
   if(!brief)throw Error('แบบรายงานเดิมยังไม่พร้อม กรุณาลองอีกครั้ง');
   brief.querySelectorAll(':scope > .fb-section').forEach((node,index)=>{if(index===2)node.remove()});
   brief.querySelector('.fb-footer')?.remove();
   if(first.querySelector('#reportNearbySupport table'))first.querySelector('#fbSupport')?.closest('table')?.remove();
   first.classList.add('dss-field-export','dss-two-page-first');second.classList.add('dss-page-two-export');

   if(mapImage){
    const slot=first.querySelector('#fieldBriefMap'),weather=first.querySelector('#fbWeather'),image=new Image();
    image.src=mapImage;await image.decode();image.id='dashboardReportMapImage';image.alt='แผนที่จุดเกิดเหตุและข้อมูลสนับสนุน';
    slot.replaceChildren(image);if(weather)slot.append(weather);
    slot.dataset.reportMapRatio=String(image.naturalHeight/image.naturalWidth);
   }
   const footer=doc.createElement('div');footer.className='dss-page-footer';footer.textContent='แหล่งข้อมูล: e_PP · DSS · Open-Meteo | '+field(doc,'reportNo')+' | หน้า 1 / 2';brief.append(footer);

   const style=document.createElement('div');
   doc.querySelectorAll('style,link[rel="stylesheet"]').forEach(n=>style.append(n.cloneNode(true)));
   const css=style.innerHTML;for(const page of [first,second]){page.removeAttribute('hidden');page.style.setProperty('display','block','important');page.style.setProperty('width','1050px','important');page.style.setProperty('max-width','none','important');page.style.setProperty('min-height','1485px','important');page.style.setProperty('padding','32px','important');page.style.setProperty('height','auto','important');page.style.setProperty('overflow','visible','important');}
   const frozenStyle='<style>html,body{height:auto!important;overflow:visible!important;background:#f3f5f8!important;margin:0!important;padding:0!important}body>.top,.editor,.report-download-toolbar,.wf-header{display:none!important}body #report,body #dssPageTwo{display:block!important;width:1050px!important;max-width:none!important;min-height:1485px!important;height:auto!important;margin:0 auto 24px!important;padding:32px!important;box-sizing:border-box!important;position:relative!important;left:auto!important;top:auto!important;overflow:visible!important;background:white!important;border:0!important;border-radius:0!important}body #report>:not(#dssFieldBrief){display:none!important}body #report #dssFieldBrief{display:block!important;width:986px!important;max-width:none!important;transform:none!important}body #report #dssFieldBrief .fb-facts{display:grid!important;grid-template-columns:1fr 1fr!important}body #report #dssFieldBrief .fb-wide{grid-column:1/-1!important}body #report #dssFieldBrief .fb-map{position:relative!important;aspect-ratio:auto!important}body #report #dssFieldBrief .fb-map img{width:100%!important;height:100%!important;object-fit:contain!important}body #report #dssFieldBrief #fbWeather{position:absolute!important;right:16px!important;bottom:16px!important;top:auto!important;width:250px!important;max-width:40%!important;background:#fffffff5!important}body #dssPageTwo :is(.p2-scroll,.mobile-report-table-scroll){overflow:visible!important}body .report-wrap{display:block!important}</style>';

   const markup='<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="'+new URL('.',location.href).href+'">'+css+frozenStyle+'</head><body style="height:auto!important;overflow:visible!important;padding:0!important;margin:0!important" class="legacy-two-page-report">'+first.outerHTML+second.outerHTML+'</body></html>';
   const record={id:crypto.randomUUID(),createdAt:new Date().toISOString(),kind:'incident-support',layoutVersion:'legacy-two-page-20261022',incidentId:window.ieatIncidentContext?.()?.incidentId||null,incidentContext:window.ieatIncidentContext?.()||null,supportStatus:{loading:Boolean(window.ieatSupportSnapshot?.loading),failures:window.ieatSupportSnapshot?.failures||[]},company,estate:field(doc,'estate'),incidentType:document.getElementById('dashboardIncidentType')?.value||field(doc,'event'),radius:Number(document.getElementById('supportRadius')?.value)||null,bufferRadii:[...document.querySelectorAll('.dashboard-buffer-tools input:checked')].map(n=>Number(n.value)).filter(Number.isFinite),mapView:view,mapWarning,markup,fields:Object.fromEntries(['company','registration','estate','address','event','date','reportNo','source'].map(key=>[key,field(doc,key)]))};
   await window.IEATReportStore.add(record);
   if(record.incidentId&&window.IEATIncidentStore){try{await window.IEATIncidentStore.linkReport(record.incidentId,record);}catch(error){console.warn('Incident link',error);}}
   const url=new URL('./report.html',location.href);url.searchParams.set('id',record.id);
   if(target&&!target.closed)target.location.replace(url.href);else location.assign(url.href);
   notice.textContent='เปิดหน้ารายงานแล้ว · กลับมาวิเคราะห์ต่อบน Dashboard นี้ได้';
  }catch(error){if(target&&!target.closed)target.close();notice.textContent='ยังสร้างรายงานไม่ได้: '+(error?.message||'บันทึกข้อมูลในอุปกรณ์ไม่สำเร็จ')+' · ข้อมูลที่เลือกบน Dashboard ยังอยู่';}
  finally{busy=false;if(button)button.disabled=false;}
 }
 document.addEventListener('click',event=>{if(!event.target.closest('#dashboardCreateReport'))return;event.preventDefault();event.stopImmediatePropagation();create();},true);
})();



