/* Complete support records for interactive review and paginated A4 appendix exports. */
(() => {
 'use strict';
 const labels={fire:'ดับเพลิง',hospital:'โรงพยาบาล',hydrant:'หัวจ่ายน้ำ',police:'ตำรวจ',community:'ชุมชน',cctv:'CCTV'};
 const node=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=String(text);if(cls)n.className=cls;return n;};
 const phone=value=>{const text=String(value||'').trim();return !text||/^[-—]|ไม่มีข้อมูล|ไม่พบข้อมูล|^null$|^undefined$/i.test(text)?'ไม่พบข้อมูล':text;};
 const distance=value=>Number(value)<1000?Math.round(Number(value))+' เมตร':(Number(value)/1000).toFixed(2)+' กม.';
 function rowsOf(data){return (data?.rows||[]).filter(row=>labels[row.sourceId]&&Number.isFinite(Number(row.distance))&&Number(row.distance)<=Number(data.radius)*1000).sort((a,b)=>Number(a.distance)-Number(b.distance));}
 function rowOf(row,index){const tr=node('tr');[index+1,labels[row.sourceId],row.name||'ไม่ระบุชื่อ',distance(row.distance),phone(row.phone)].forEach(value=>tr.append(node('td',value)));return tr;}
 function table(){const t=node('table',undefined,'support-complete-table'),head=node('thead'),r=node('tr');['ลำดับ','ประเภท','ชื่อสถานที่','ระยะทางเส้นตรง','เบอร์ติดต่อ'].forEach(title=>{const th=node('th',title);th.scope='col';r.append(th)});head.append(r);t.append(head,node('tbody'));return t;}
 const emptyText=data=>data?.unselected?'ค้นหาโรงงานเพื่อดูข้อมูลสนับสนุน':data?.loading?'กำลังค้นหาข้อมูลสนับสนุน…':data?.failures?.length?'บางแหล่งข้อมูลเชื่อมต่อไม่สำเร็จ จึงยังยืนยันรายการทั้งหมดไม่ได้':'ไม่พบจุดสนับสนุนในรัศมีที่เลือกจากข้อมูลที่โหลดสำเร็จ';
 let dialog;
 function ensureDialog(){
  if(dialog)return dialog;
  dialog=node('dialog');dialog.id='supportAllDialog';dialog.setAttribute('aria-labelledby','supportAllDialogTitle');dialog.setAttribute('data-export-exclude','');
  const bar=node('div',undefined,'support-dialog-bar'),title=node('h2','ข้อมูลสนับสนุนทั้งหมด');title.id='supportAllDialogTitle';
  const close=node('button','ปิด');close.type='button';close.onclick=()=>dialog.close();bar.append(title,close);
  const summary=node('p');summary.id='supportAllDialogSummary';const scroll=node('div',undefined,'support-dialog-scroll');scroll.id='supportAllDialogContent';
  dialog.append(bar,summary,scroll);document.body.append(dialog);return dialog;
 }
 window.dssUpdateSupportDialog=data=>{
  if(!dialog)return;
  const rows=rowsOf(data),t=table(),body=t.querySelector('tbody');rows.forEach((row,i)=>body.append(rowOf(row,i)));
  if(!rows.length){const tr=node('tr'),td=node('td',emptyText(data));td.colSpan=5;tr.append(td);body.append(tr);}
  dialog.querySelector('#supportAllDialogSummary').textContent=(data?.company||'')+' · รัศมี '+Number(data?.radius||0)+' กม. · '+rows.length+' รายการ';
  dialog.querySelector('#supportAllDialogContent').replaceChildren(t);
  if(data?.failures?.length)dialog.querySelector('#supportAllDialogContent').append(node('p','บางแหล่งข้อมูลเชื่อมต่อไม่สำเร็จ','support-source-note'));
 };
 window.dssOpenAllSupport=()=>{const d=ensureDialog();window.dssUpdateSupportDialog(window.dssSupportReportData);if(!d.open)d.showModal();};
 window.dssBuildSupportAppendix=()=>{
  const data=window.dssSupportReportData;
  if(!data||data.unselected||data.loading)throw Error('ข้อมูลสนับสนุนยังไม่พร้อมสำหรับภาคผนวก');
  const rows=rowsOf(data),stage=node('div');stage.style.cssText='position:absolute;left:-100000px;top:0;width:1050px;pointer-events:none';document.body.append(stage);
  const pages=[];
  function addPage(){
   const page=node('section',undefined,'dss-support-appendix');
   const source=document.querySelector('#dssPageThree .p2-header')||document.querySelector('#dssPageTwo .p2-header');
   const header=source?.cloneNode(true)||node('header');header.className='support-appendix-header';header.querySelectorAll('[id]').forEach(n=>n.removeAttribute('id'));
   let title=header.querySelector('h1');if(!title){title=node('h1');header.append(title);}title.textContent='ภาคผนวกข้อมูลสนับสนุนทั้งหมด';
   const meta=node('p',(data.company||'')+' · รัศมี '+data.radius+' กม. · '+rows.length+' รายการ','support-appendix-meta');
   const t=table(),footer=node('div',undefined,'dss-page-footer');page.append(header,meta,t,footer);
   if(data.failures?.length)meta.append(node('span',' · บางแหล่งข้อมูลเชื่อมต่อไม่สำเร็จ'));
   stage.append(page);pages.push(page);return page;
  }
  try{
   let page=addPage(),body=page.querySelector('tbody');
   if(!rows.length){const tr=node('tr'),td=node('td',emptyText(data));td.colSpan=5;tr.append(td);body.append(tr);}
   rows.forEach((row,index)=>{
    const tr=rowOf(row,index);body.append(tr);
    if(page.scrollHeight>1485){
     tr.remove();if(!body.children.length)throw Error('รายการสนับสนุนหนึ่งรายการยาวเกินหน้า A4');
     page=addPage();body=page.querySelector('tbody');body.append(tr);
     if(page.scrollHeight>1485)throw Error('รายการสนับสนุนหนึ่งรายการยาวเกินหน้า A4');
    }
   });
   const total=3+pages.length;
   pages.forEach((page,index)=>{page.querySelector('.dss-page-footer').textContent='แหล่งข้อมูล: กนอ. · ระยะทางเส้นตรง | หน้า '+(index+4)+' / '+total;});
   return pages;
  }finally{stage.remove();}
 };
})();
