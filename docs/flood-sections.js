/* Four data sections and the settings view share the existing map and feeds. */
(() => {
 'use strict';
 const $=id=>document.getElementById(id);

 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const svg=(body,view='0 0 24 24')=>'<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="'+view+'" aria-hidden="true">'+body+'</svg>';
 const icons={
 overview:svg('<title>water-rounded</title><path fill="#52057f" d="M5.594 16.27q-.725 0-1.107.293t-.804.456q-.267.087-.475-.035Q3 16.86 3 16.598q0-.182.123-.34t.38-.297q.241-.152.808-.422q.566-.27 1.326-.27q1.202 0 1.705.5t1.487.5t1.474-.5t1.71-.5t1.722.5t1.486.5t1.465-.5t1.697-.5q.69 0 1.266.263t.914.46q.221.114.33.271t.107.335q0 .244-.198.376t-.466.045q-.402-.144-.826-.447t-1.124-.303q-.963 0-1.474.5t-1.71.5t-1.703-.5t-1.486-.5t-1.483.5t-1.707.5t-1.723-.5t-1.506-.5m0-3.769q-.719 0-1.105.293q-.385.293-.806.457q-.268.086-.475-.036Q3 13.092 3 12.83q0-.183.123-.34t.38-.297q.241-.152.807-.422t1.327-.27q1.202 0 1.705.5t1.487.5t1.474-.5t1.71-.5t1.723.5t1.48.5q.976 0 1.465-.5t1.696-.5q.76 0 1.336.28t.816.432q.244.124.357.28q.114.154.114.337q0 .244-.201.376t-.468.045q-.402-.144-.823-.447t-1.121-.303q-.964 0-1.474.5t-1.711.5t-1.703-.5t-1.485-.5t-1.478.5t-1.701.5t-1.732-.5t-1.509-.5m.02-3.77q-.7 0-1.115.285q-.414.283-.816.427q-.267.087-.475-.035Q3 9.284 3 9.04q0-.182.123-.33t.38-.287q.241-.152.808-.422q.566-.27 1.326-.27q1.202 0 1.705.5t1.487.5t1.474-.5t1.71-.5t1.723.5t1.48.5q.976 0 1.465-.5t1.696-.5q.76 0 1.336.28q.575.28.816.431q.244.125.357.28q.114.155.114.337q0 .245-.201.376t-.468.046q-.402-.145-.823-.447q-.422-.303-1.122-.303q-.963 0-1.474.5t-1.71.5t-1.703-.5t-1.486-.5t-1.478.5t-1.7.5t-1.723-.5t-1.499-.5"/>'),
 alerts:svg('<title>code-red-fill</title><defs><linearGradient id="SVGCbAMIeEg" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f87171"/><stop offset=".5" stop-color="#f87171"/><stop offset="1" stop-color="#dc2626"/></linearGradient></defs><path fill="url(#SVGCbAMIeEg)" stroke="#bf033b" stroke-miterlimit="10" stroke-width="4" d="m381 340.1l-52.8-97.3l-51-94.2a24 24 0 0 0-42.4 0l-51 94.2l-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9ZM243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6Zm29.1 107.6q0 7-3 9.6c-2 1.7-5.7 2.6-11 2.6H254c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"/>','0 0 512 512'),
 preparedness:svg('<title>report-sharp</title><g fill="none" stroke="#52057f" stroke-linecap="square" stroke-miterlimit="2" stroke-width="1.5"><path d="M13.75 2.75h-9v18.5h14.5v-13Z"/><path d="M13.75 2.75v5.5h5.5m-10.5 9v-3m3.25 3v-5.5m3.25 5.5v-2"/></g>'),
 layers:svg('<title>layer</title><g fill="none" stroke="#52057f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m13.01 2.92l5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0"/><path d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"/><path d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"/></g>'),
 settings:svg('<title>settings-outline-rounded</title><path fill="#52057f" d="M10.96 21q-.349 0-.605-.229q-.257-.229-.319-.571l-.263-2.092q-.479-.145-1.036-.454q-.556-.31-.947-.664l-1.915.824q-.317.14-.644.03t-.504-.415L3.648 15.57q-.177-.305-.104-.638t.348-.546l1.672-1.25q-.045-.272-.073-.559q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626l-1.672-1.25q-.275-.213-.338-.555t.113-.648l1.06-1.8q.177-.287.504-.406t.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.349 0 .605.229q.257.229.319.571l.263 2.112q.575.202 1.016.463t.909.654l1.992-.804q.318-.14.645-.021t.503.406l1.06 1.819q.177.306.104.638t-.348.547L18.36 10.92q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546t-.094.638l-1.066 1.839q-.176.306-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.393-.94.673t-.985.445l-.264 2.111q-.061.342-.318.571t-.605.23zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"/>')
 };
 const partOneIcons={"overview":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><title>dashboard-rounded</title><path fill=\"currentColor\" d=\"M14 9q-.425 0-.712-.288T13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9zM4 13q-.425 0-.712-.288T3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13zm10 8q-.425 0-.712-.288T13 20v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21zM4 21q-.425 0-.712-.288T3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21z\"/></svg>","alerts":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" aria-hidden=\"true\"><title>flag-hurricane-warning</title><g fill=\"currentColor\"><path fill=\"none\" stroke=\"#ffffff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"24\" d=\"M174.5 376V136\"/><rect width=\"127\" height=\"96\" x=\"210.5\" y=\"137\" rx=\"6.1\"/><rect width=\"52.9\" height=\"40\" x=\"247.5\" y=\"165\" stroke=\"#ffffff\" stroke-width=\"2\" rx=\"6.1\"/><rect width=\"127\" height=\"96\" x=\"210.5\" y=\"246\" rx=\"6.1\"/><rect width=\"52.9\" height=\"40\" x=\"247.5\" y=\"274\" stroke=\"#ffffff\" stroke-width=\"2\" rx=\"6.1\"/><animateTransform additive=\"sum\" attributeName=\"transform\" calcMode=\"spline\" dur=\"6s\" keySplines=\".42,0,.58,1;.42,0,.58,1\" repeatCount=\"indefinite\" type=\"scale\" values=\"1 1;1.1 1;1 1\"/><animateTransform additive=\"sum\" attributeName=\"transform\" calcMode=\"spline\" dur=\"6s\" keySplines=\".42,0,.58,1;.42,0,.58,1\" repeatCount=\"indefinite\" type=\"translate\" values=\"0 0;-18 0;0 0\"/></g></svg>","preparedness":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" aria-hidden=\"true\"><title>snowflake-fill</title><path fill=\"currentColor\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"4\" d=\"m372 295.2l-34.3-19.7a83.8 83.8 0 0 0 0-39l34.3-19.7a24 24 0 1 0-24-41.6L313.7 195a81.4 81.4 0 0 0-33.7-19.4V136a24 24 0 0 0-48 0v39.6a84 84 0 0 0-33.7 19.4L164 175.2a24 24 0 1 0-24 41.6l34.3 19.7a83.8 83.8 0 0 0 0 39L140 295.1a24 24 0 1 0 24 41.6l34.3-19.8a80.6 80.6 0 0 0 33.7 19.4V376a24 24 0 0 0 48 0v-39.7a84 84 0 0 0 33.7-19.3l34.3 19.8a24 24 0 1 0 24-41.6Zm-134-8a36 36 0 1 1 49.2-13.2a36 36 0 0 1-49.2 13.2Z\"><animateTransform attributeName=\"transform\" calcMode=\"spline\" dur=\"6s\" keySplines=\".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1\" repeatCount=\"indefinite\" type=\"scale\" values=\"1 1;.9 .9;1 1;.9 .9;1 1\"/><animateTransform additive=\"sum\" attributeName=\"transform\" calcMode=\"spline\" dur=\"6s\" keySplines=\".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1\" repeatCount=\"indefinite\" type=\"translate\" values=\"0 0;25.75 25.75;0 0;25.75 25.75;0 0\"/><animateTransform additive=\"sum\" attributeName=\"transform\" calcMode=\"spline\" dur=\"6s\" keySplines=\".42,0,.58,1;.42,0,.58,1\" repeatCount=\"indefinite\" type=\"rotate\" values=\"-6 256 256;6 256 256;-6 256 256\"/></path></svg>","report":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><title>report-card-sharp</title><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"square\" stroke-miterlimit=\"2\" stroke-width=\"1.5\"><path d=\"M4.75 2.75h14.5v18.5H4.75z\"/><path d=\"M7.75 5.75h8.5v3.5h-8.5zm.5 7.25h7.5m-7.5 3.75h4.5\"/></g></svg>"};
 const names={overview:'ภาพรวม',alerts:'แจ้งเตือนน้ำท่วม',preparedness:'เตรียมรับมือ',report:'รายงาน',settings:'ตั้งค่า'};
 icons.report=icons.preparedness;

 const lineIcon=body=>svg('<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+body+'</g>');
 Object.assign(icons,{
 overview:lineIcon('<path d="M3 4h18M5 4v12h14V4M9 9v3m3-5v5m3-3v3M9 20l3-4 3 4"/>'),
 alerts:lineIcon('<path d="M18 9a6 6 0 0 0-12 0c0 6-3 6-3 8h18c0-2-3-2-3-8M10 21h4"/>'),
 preparedness:lineIcon('<path d="m12 3 8 3v6c0 4-8 9-8 9s-8-5-8-9V6Z"/><path d="m8 12 3 3 5-6"/>'),
 report:lineIcon('<path d="M4 21V4m0 17h17M8 17v-5h3v5m3 0V7h3v10m3 0v-7h2v7"/><circle cx="10" cy="6" r="2"/>'),
 settings:lineIcon('<path d="m12 2 9 5v10l-9 5-9-5V7Z M3 7l9 5 9-5m-9 5v10"/>')
 });
 let active='overview',overlay,buttons={},alertRows=[],kind='all',severity='all',lastContent='';
 const map=()=>{try{return $('estateFocusMap')?.contentWindow?.IEATPreparednessMap?.()}catch(_){return null}};
 const mapDoc=()=>{try{return $('estateFocusMap')?.contentDocument}catch(_){return null}};
 const pointKey=r=>[r.kind,r.name,Number(r.lat),Number(r.lng)].join('|');
 const when=v=>{if(!v)return 'ไม่ระบุเวลา';const d=new Date(/^\d{4}-\d{2}-\d{2} \d/.test(v)?v.replace(' ','T')+'+07:00':v);return Number.isNaN(d.getTime())?String(v):d.toLocaleString('th-TH',{timeZone:'Asia/Bangkok',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});};
 const selected=()=>{const picker=$('ioEstatePicker');if(!picker)return 'ทุกพื้นที่';const text=picker.querySelector?.('.io-picker-label')?.textContent?.trim()||picker.selectedOptions?.[0]?.textContent?.trim()||picker.textContent?.replace('⌄','').trim();return !text||/^(ทุกนิคม|ทุกพื้นที่|เลือกนิคม)/.test(text)?'ทุกพื้นที่':text;};
 function alerts(){const api=map();if(!api?.ready)return {loaded:false,items:[]};return api.alertSnapshot?.()||{loaded:false,items:[]};}
 function show(section){
  active=section;document.body.dataset.referencePanel='open';const menu=$('referenceMenuToggle');if(menu)menu.setAttribute('aria-expanded','true');if(section==='report'){reportNotes=estateNotes.get(selected())||'';reportMapImage='';reportMapError='';snapshotId='report-'+Date.now();$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-snapshot',id:snapshotId},location.origin);}document.body.dataset.floodSection=section;$('referenceSettings')?.setAttribute('hidden','');
  if(section==='overview'||section==='preparedness')$('floodTab-'+section)?.click();
  const custom=!['overview','preparedness'].includes(section);overlay.hidden=!custom;
  const pane=$('floodInformationPane');if(pane){pane.inert=custom;pane.setAttribute('aria-hidden',String(custom));}
  for(const [key,button] of Object.entries(buttons))button.setAttribute('aria-pressed',String(key===section));
  document.querySelectorAll('[data-structure-section]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.structureSection===section)));
  if(custom){lastContent='';render();overlay.scrollTop=0;}
 }

 function scopedAlertItems(snap){
  const shared=window.IEAT_FLOOD_PROVINCE_SCOPE;
  if(!shared?.active)return snap.items||[];
  const estate=shared.estate;if(!estate)return [];
  const lat=Number(estate.lat),lon=Number(estate.lon??estate.lng),radius=Number(shared.radiusKm)||30;
  return (snap.items||[]).filter(r=>{
   if(r.lat==null||(r.lng??r.lon)==null)return false;
   const a=Number(r.lat),b=Number(r.lng??r.lon);if(![lat,lon,a,b].every(Number.isFinite))return false;
   const rad=Math.PI/180,dy=(a-lat)*rad,dx=(b-lon)*rad,h=Math.sin(dy/2)**2+Math.cos(lat*rad)*Math.cos(a*rad)*Math.sin(dx/2)**2;
   return 12742*Math.asin(Math.sqrt(Math.min(1,h)))<=radius;
  });
 }
 const criticalAlert=r=>/^(#f00a36|#bf033b|#b30707)$/i.test(r.state?.hex||'')||/ล้น|วิกฤต|เกินความจุ/.test(r.state?.label||'')&&!/น้อย/.test(r.state?.label||'');
 function alertView(snap){
  const scoped=scopedAlertItems(snap);
  const red=scoped.filter(criticalAlert).length;
  const rows=scoped.filter(r=>(kind==='all'||r.kind===kind)&&
    (severity==='all'||criticalAlert(r)===(severity==='critical')))
    .sort((a,b)=>Number(criticalAlert(b))-Number(criticalAlert(a)));
  alertRows=rows;
  const number=value=>snap.loaded?String(value):'–';
  const option=(current,value,label)=>'<option value="'+value+'"'+(current===value?' selected':'')+'>'+label+'</option>';
  const stats=[['ทั้งหมด',scoped.length],['วิกฤต / ถึงตลิ่ง',red],['เฝ้าระวัง',scoped.length-red]];
  const cards=stats.map(([label,total])=>'<div><b>'+number(total)+'</b><span>'+label+'</span></div>').join('');
  const items=rows.map((r,i)=>{
   const level=criticalAlert(r)?'critical':'watch';
   return '<button type="button" data-alert-index="'+i+'" class="flood-alert-item" data-severity="'+level+'">'+
    '<span class="flood-alert-meta"><span>'+esc(r.kindLabel)+'</span><span>ตรวจวัด '+esc(when(r.measured_at))+'</span></span>'+
    '<span class="flood-alert-title"><strong>'+esc(r.name)+'</strong><span>'+esc(r.state?.label)+'</span></span>'+
    '<span>'+[r.province,r.state?.criterion].filter(Boolean).map(esc).join(' · ')+'</span>'+
    '<span class="flood-alert-map">ดูบนแผนที่ ↗</span></button>';
  }).join('');
  return '<header class="flood-alert-head"><h1>แจ้งเตือนน้ำท่วม</h1><p>'+esc(selected())+'</p></header>'+
   '<div class="flood-alert-stats" aria-label="สรุปแจ้งเตือน">'+cards+'</div>'+
   '<div class="flood-alert-filters"><label>ระดับแจ้งเตือน<select data-alert-severity>'+
   option(severity,'all','ทุกระดับ')+option(severity,'critical','วิกฤต / ถึงตลิ่ง')+option(severity,'watch','เฝ้าระวัง')+
   '</select></label><label>ประเภทข้อมูล<select data-alert-kind>'+
   option(kind,'all','ทุกประเภท')+option(kind,'water','สถานีระดับน้ำ')+option(kind,'canal','คลอง')+
   option(kind,'rain','ฝนหนัก')+option(kind,'dam','เขื่อน / อ่างเก็บน้ำ')+'</select></label></div>'+
   '<section class="flood-alert-results" aria-labelledby="floodAlertResults"><h2 id="floodAlertResults">รายการแจ้งเตือน <small aria-live="polite">'+number(rows.length)+' รายการ</small></h2>'+
   (!snap.loaded?'<p role="status">กำลังโหลดข้อมูลแจ้งเตือน…</p>':items||'<p class="section-empty">ไม่พบรายการแจ้งเตือนตามตัวกรอง</p>')+'</section>';
 }
 function layerView(){
  const doc=mapDoc(),api=map(),points=api?.points?.()||[],inputs=[...(doc?.querySelectorAll('input[data-layer]')||[])];
  const labels={estate:'ตำแหน่งนิคมอุตสาหกรรม',boundary:'ขอบเขตนิคมอุตสาหกรรม',water:'สถานีระดับน้ำ',canal:'คลอง',rain:'สถานีฝน',rainfall:'ฝนสะสม',dam:'เขื่อนและอ่างเก็บน้ำ',camera:'CCTV ริมน้ำ',flow:'ปริมาณน้ำไหลผ่าน',rings:'ทิศทางสายน้ำ',radar:'ฝนเรดาร์กรมอุตุฯ',satellite:'พื้นที่น้ำท่วมจากดาวเทียม',gistda:'พื้นที่น้ำท่วม GISTDA'};
  const counts=Object.fromEntries(['estate','water','canal','rain','dam','camera'].map(k=>[k,points.filter(r=>r.kind===k).length]));
  return '<h1>ชั้นข้อมูลแผนที่</h1><p class="section-subtitle">'+esc(selected())+' · เปิด–ปิดชั้นข้อมูลจากหน้านี้</p><div class="section-kpis"><div><b>'+inputs.filter(x=>x.checked).length+'</b><span>ชั้นข้อมูลที่เปิด</span></div><div><b>'+inputs.length+'</b><span>ชั้นข้อมูลทั้งหมด</span></div><div><b>'+points.length+'</b><span>จุดข้อมูลในพื้นที่</span></div></div><div class="section-layer-list">'+(!inputs.length?'<p role="status">กำลังโหลดชั้นข้อมูลแผนที่…</p>':inputs.map(input=>{const k=input.dataset.layer,label=labels[k]||input.getAttribute('aria-label')||k;return '<label class="section-layer-row"><span><strong>'+esc(label)+'</strong><small>'+(counts[k]!=null?counts[k]+' จุดในข้อมูลพื้นที่ที่โหลดได้':'ข้อมูลแผนที่ / ภาพซ้อนทับ')+'</small></span><input type="checkbox" data-section-layer="'+esc(k)+'"'+(input.checked?' checked':'')+(input.disabled?' disabled':'')+' aria-label="'+esc(label)+'"></label>'}).join(''))+'</div><p class="section-note">จำนวนจุดอ้างอิงข้อมูลที่โหลดในพื้นที่ ไม่ใช่จำนวนเหตุ · สีเขียว = ปกติ สีเหลือง/ส้ม = เฝ้าระวัง สีแดงเข้ม = วิกฤต สีเทาอมน้ำตาล = ข้อมูลไม่ครบ</p><button type="button" class="section-action" data-section-action="legend">ดูคำอธิบายสัญลักษณ์บนแผนที่</button>';
 }
 /* Enrich the established dashboard in place; keep the live map and estate scope. */
 let reportFrom='',reportTo='',reportNotes='',reportMapImage='',reportMapError='',snapshotId='',cameraPlaying=false,cameraInitialized=false;
 const estateNotes=new Map();
 const table=(head,rows)=>'<div class="ex-report-table"><table><thead><tr>'+head.map(x=>'<th>'+x+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(x=>'<td>'+esc(x)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
 const plain=(selector,fallback='ยังไม่มีข้อมูลในชุดที่โหลดได้')=>{
 const element=document.querySelector(selector);if(!element)return fallback;
 const copy=element.cloneNode(true);
 copy.querySelectorAll('svg,select,option,script,style,summary,[id$="Pager"],.ex-prep-selector,.prep-support,.ex-docs,.ex-reference-documents,.storage-scene').forEach(n=>n.remove());
 const walker=document.createTreeWalker(copy,NodeFilter.SHOW_TEXT);const parts=[];let node;while((node=walker.nextNode())){const value=node.textContent.replace(/\\s+/g,' ').trim();if(value)parts.push(value);}
 return parts.join(' · ')||fallback;
 };
 const today=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 const sendCamera=(action,playing)=>$('estateFocusMap')?.contentWindow?.postMessage({type:'dashboard-camera',action,playing},location.origin);
 function reportDocumentView(){
  reportFrom ||= today();reportTo ||= today();
  const captured=today(),valid=reportFrom<=captured&&reportTo>=captured&&reportFrom<=reportTo;
  const snap=alerts(),current=scopedAlertItems(snap);
  const station=plain('#rpCards .rp-station-row:not(.ieat-page-hidden):not([hidden])');
  return '<h1>รายงานสถานการณ์น้ำ</h1><p class="section-subtitle">'+esc(selected())+' · สรุปจากข้อมูลที่เปิดอยู่ในแดชบอร์ด</p><div class="ex-report-controls" data-report-control><label>ตั้งแต่<input type="date" data-report-from value="'+reportFrom+'"></label><label>ถึง<input type="date" data-report-to value="'+reportTo+'"></label><button type="button" class="section-action" data-section-action="print">พิมพ์ / บันทึก PDF A4</button></div><p class="section-note" data-report-control>รายงานนี้เป็นภาพรวมข้อมูลล่าสุดที่โหลดได้ ไม่ใช่ฐานข้อมูลย้อนหลัง · ตรวจเวลารายสถานีก่อนใช้อ้างอิง</p><label class="ex-report-note" data-report-control>บันทึกการดำเนินงาน / ผู้รับผิดชอบ<textarea data-report-notes placeholder="ระบุการตรวจสอบ การประสานงาน และสถานะติดตาม">'+esc(reportNotes)+'</textarea></label><article id="ieatCurrentReport"><header><h2>รายงานสถานการณ์น้ำในนิคมอุตสาหกรรม</h2><p>'+esc(selected())+'</p><small>ช่วงรายงาน '+esc(reportFrom)+' ถึง '+esc(reportTo)+' · จัดทำ '+esc(new Date().toLocaleDateString('th-TH',{timeZone:'Asia/Bangkok'}))+'</small></header>'+(!valid?'<p class="section-empty">ไม่มีภาพรวมข้อมูลสำหรับช่วงที่เลือก กรุณาเลือกช่วงวันที่ครอบคลุมวันที่เปิดรายงาน</p>':table(['หัวข้อ','ข้อมูลล่าสุดที่โหลดได้'],[['สถานีระดับน้ำ',station],['คลอง',plain('#estateFocusDashboard .ef-canal-panel')],['เขื่อน',plain('#efRelatedDams .ef-dam-card:not(.ieat-page-hidden):not([hidden])')],['อ่างเก็บน้ำ',plain('#efReservoirList .ef-reservoir-row:not(.ieat-page-hidden):not([hidden])')],['น้ำไหลเข้า / ระบายออก',plain('#efDamFlowPanel')],['แจ้งเตือนในพื้นที่ที่เลือก',snap.loaded?current.length+' รายการ · '+current.map(r=>r.name+' · '+r.state?.label+' · '+when(r.measured_at)).join(' / '):'กำลังโหลดข้อมูลแจ้งเตือน'],['แผนและโครงสร้างพื้นฐาน',plain('#preparednessPane')],['บันทึกผู้จัดทำ',reportNotes||'ยังไม่มีบันทึกการดำเนินงาน']]))+(valid?'<figure class="ex-report-map">'+(reportMapImage?'<img src="'+reportMapImage+'" alt="ภาพมุมมองแผนที่จากแดชบอร์ด ณ เวลาจัดทำรายงาน"><figcaption>มุมมองแผนที่ ณ เวลาจัดทำรายงาน · ขอบเขตตามที่เปิดบนหน้าแดชบอร์ด</figcaption>':'<p class="section-note">'+esc(reportMapError||'กำลังเตรียมภาพแผนที่ประกอบรายงาน…')+'</p>')+'</figure>':'')+'<footer><p class="section-note">แหล่งข้อมูล: ข้อความและเวลาจากสถานี / หน่วยงานที่ระบุในแดชบอร์ด</p><a href="'+esc(location.href)+'">เปิดแดชบอร์ดต้นทาง</a></footer></article>';
 }
 /* Graphical reporting uses only loaded points and current alert records. */
 let reportTab='summary';
 const reportSegments=()=>'<nav class="ref-report-segments" aria-label="รูปแบบรายงาน"><button type="button" data-report-tab="summary" aria-pressed="'+(reportTab==='summary')+'">ภาพรวมข้อมูล</button><button type="button" data-report-tab="document" aria-pressed="'+(reportTab==='document')+'">รายงาน A4</button></nav>';
 function reportView(){
  document.body.dataset.reportFormat=reportTab;
  if(reportTab==='document')return reportSegments()+reportDocumentView();
  const api=map(),ready=!!api?.ready;
  const points=[...new Map((api?.points?.()||[]).map(p=>[pointKey(p),p])).values()];
  const categories=[['water','สถานีระดับน้ำ'],['canal','คลอง'],['rain','สถานีฝน'],['dam','เขื่อน / อ่างเก็บน้ำ'],['camera','CCTV ริมน้ำ'],['estate','ตำแหน่งนิคมฯ']];
  const snap=alerts(),items=scopedAlertItems(snap),critical=items.filter(criticalAlert).length;
  const count=(value,loaded)=>loaded?value.toLocaleString('th-TH'):'–';
  const stats=[['จุดข้อมูลบนแผนที่',points.length,ready],['วิกฤต / ถึงตลิ่ง',critical,snap.loaded],['เฝ้าระวัง',items.length-critical,snap.loaded]];
  return '<header class="water-report-heading"><h1>รายงานสถานการณ์น้ำ</h1><p><strong>'+esc(selected())+'</strong> · '+esc($('expoBoothSubtitle')?.textContent||'ข้อมูลล่าสุดที่โหลดได้')+'</p></header>'+reportSegments()+
   '<div class="water-report-stats">'+stats.map(([label,value,loaded])=>'<div><b>'+count(value,loaded)+'</b><span>'+label+'</span></div>').join('')+'</div>'+
   '<section class="ref-chart-card"><h2>ข้อมูลในพื้นที่</h2><p>จำนวนจุดที่แสดงบนแผนที่ แยกตามประเภท</p><div class="water-report-sources">'+categories.map(([key,label])=>{
    const total=points.filter(p=>p.kind===key).length;
    return '<button type="button" data-report-kind="'+key+'"'+(!ready||!total?' disabled':'')+'><span>'+label+'</span><b>'+count(total,ready)+'</b></button>';
   }).join('')+'</div></section>'+
   '<section class="ref-chart-card"><h2>จัดทำรายงาน A4</h2><p>รวมข้อมูลน้ำล่าสุด ภาพแผนที่ และบันทึกการดำเนินงานสำหรับพิมพ์หรือบันทึก PDF</p><button type="button" class="section-action" data-report-tab="document">เปิดรายงาน A4 →</button></section>';
 }

 function supplement(){
  const mapColumn=document.querySelector('#estateFocusDashboard .ef-map-column');
  if(mapColumn&&!$('ieatDashboardCamera')){
   const toolbar=document.createElement('div');toolbar.id='ieatDashboardCamera';toolbar.setAttribute('aria-label','ควบคุมแผนที่ 3 มิติ');toolbar.innerHTML='<span class="ex-camera-label">มุมมอง 3D</span><button type="button" data-live-camera="orbit" aria-pressed="false">หมุน 360°</button><button type="button" data-live-camera="left" aria-label="หมุนซ้าย 45 องศา">↶</button><button type="button" data-live-camera="right" aria-label="หมุนขวา 45 องศา">↷</button><button type="button" data-live-camera="reset">มุมเริ่มต้น</button>';
   toolbar.addEventListener('click',event=>{const b=event.target.closest('[data-live-camera]');if(!b)return;sendCamera(b.dataset.liveCamera,!cameraPlaying);});mapColumn.append(toolbar);
  }
  if(mapColumn&&!cameraInitialized&&map()?.ready){sendCamera('init');cameraInitialized=true;}
 }
 window.addEventListener('message',event=>{
  if(event.origin===location.origin&&event.source===$('estateFocusMap')?.contentWindow&&event.data?.type==='flood-map-snapshot-result'&&event.data.id===snapshotId){const image=event.data.dataUrl;reportMapImage=typeof image==='string'&&/^data:image\/(png|jpeg);base64,/.test(image)?image:'';reportMapError=reportMapImage?'':'ยังเตรียมภาพแผนที่ไม่สำเร็จ สามารถใช้ข้อความสรุปและเปิดแผนที่จากแดชบอร์ดต้นทางได้';lastContent='';render();return;}
  if(event.origin!==location.origin||event.source!==$('estateFocusMap')?.contentWindow||event.data?.type!=='dashboard-camera-status')return;
  const d=event.data;cameraPlaying=!!d.playing;
  if(cameraPlaying&&d.mode==='3d'&&!document.documentElement.classList.contains('story-dashboard')&&document.body.dataset.referencePanel!=='closed')$('referenceMenuToggle')?.click();
  const toolbar=$('ieatDashboardCamera');if(!toolbar)return;
  toolbar.dataset.mode=d.mode;const b=toolbar.querySelector('[data-live-camera=orbit]');b.textContent=d.mode==='2d'?'มุมมอง 2D':cameraPlaying?'หยุดหมุน':'หมุน 360°';b.setAttribute('aria-pressed',String(cameraPlaying));b.disabled=d.mode==='2d';toolbar.querySelector('.ex-camera-label').textContent=d.mode==='2d'?'แผนที่ 2D':'มุมมอง 3D';
 });
 document.addEventListener('ieat-flood-estate-scope',()=>{cameraInitialized=false;lastContent='';setTimeout(supplement,500);});

 function settingsView(){return '<h1>ตั้งค่า</h1><p class="section-subtitle">มุมมองและการใช้งานแดชบอร์ด</p><section class="section-settings-card"><h2>พื้นที่ปัจจุบัน</h2><p>'+esc(selected())+'</p><p class="section-note">'+esc($('expoBoothSubtitle')?.textContent||'กำลังโหลดเวลาอัปเดต')+'</p></section><section class="section-settings-card"><h2>มุมมองแผนที่</h2><button type="button" class="section-action" data-section-action="layers">เปิด–ปิดชั้นข้อมูลบนแผนที่</button><button type="button" class="section-action" data-section-action="fullscreen">ขยายแผนที่เต็มหน้าจอ</button><button type="button" class="section-action" data-section-action="overview">กลับหน้าภาพรวม</button></section><section class="section-settings-card"><h2>รายงาน</h2><p>ใช้ข้อมูลและตำแหน่งจากแดชบอร์ดประกอบการจัดทำรายงาน</p><a class="section-action" href="flood-report-editor.html">จัดทำรายงานน้ำท่วม ↗</a></section>';}
 function render(force){
  const snap=alerts(),count=snap.loaded?scopedAlertItems(snap).length:0,button=buttons.alerts;
  if(button){button.classList.toggle('has-current-alert',count>0);const badge=button.querySelector('.section-alert-count');badge.hidden=!count;const value=count>99?'99+':String(count);if(badge.textContent!==value)badge.textContent=value;const label='แจ้งเตือนน้ำท่วม'+(snap.loaded?' '+count+' รายการ':' กำลังโหลดข้อมูล');if(button.getAttribute('aria-label')!==label)button.setAttribute('aria-label',label);}
  if(overlay.hidden)return;
  if(force!==true&&overlay.contains(document.activeElement)&&document.activeElement.matches('input,textarea,select'))return;
  const html=active==='alerts'?alertView(snap):active==='report'?reportView():settingsView();
  if(html!==lastContent){const top=overlay.scrollTop;overlay.innerHTML=html;overlay.scrollTop=top;lastContent=html;}
 }
 function mount(){
  const nav=document.querySelector('#referenceRail .reference-rail-modes');if(!nav||nav.children.length<5||!$('floodInformationPane'))return false;
  if($('floodSectionPanel'))return true;
  overlay=document.createElement('section');overlay.id='floodSectionPanel';overlay.hidden=true;overlay.setAttribute('aria-label','ข้อมูลแดชบอร์ด');document.body.append(overlay);
  const keys=Object.keys(names);
  [...nav.children].slice(0,5).forEach((button,i)=>{const key=keys[i];button.removeAttribute('data-reference-mode');button.removeAttribute('aria-expanded');button.setAttribute('aria-controls',['overview','preparedness'].includes(key)?'floodInformationPane':'floodSectionPanel');button.dataset.referenceIcon=key;button.dataset.section=key;button.setAttribute('aria-label',names[key]);button.title=names[key];button.innerHTML=(partOneIcons[key]?'<span class="part-one-rail-icon">'+partOneIcons[key]+'</span>':'')+icons[key]+(key==='alerts'?'<span class="section-alert-count" hidden></span>':'');buttons[key]=button;});
  nav.addEventListener('click',event=>{const button=event.target.closest('[data-section]');if(!button)return;event.preventDefault();event.stopImmediatePropagation();show(button.dataset.section);},{capture:true});
  overlay.addEventListener('change',event=>{const e=event.target;if(e.matches('[data-section-estate]')){estateNotes.set(selected(),reportNotes);const picker=$('ioEstatePicker');if(picker){picker.value=e.value;picker.dispatchEvent(new Event('change',{bubbles:true}));reportNotes=estateNotes.get(selected())||'';reportMapImage='';snapshotId='report-'+Date.now();$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-snapshot',id:snapshotId},location.origin);}}else if(e.matches('[data-report-from]'))reportFrom=e.value;else if(e.matches('[data-report-to]'))reportTo=e.value;else if(e.matches('[data-alert-kind],[data-alert-severity]')){const selector=e.matches('[data-alert-kind]')?'[data-alert-kind]':'[data-alert-severity]';if(selector==='[data-alert-kind]')kind=e.value;else severity=e.value;render(true);overlay.querySelector(selector)?.focus({preventScroll:true});return;}else if(e.matches('[data-section-layer]')){const source=[...(mapDoc()?.querySelectorAll('input[data-layer]')||[])].find(x=>x.dataset.layer===e.dataset.sectionLayer);if(source&&source.checked!==e.checked)source.click();}lastContent='';render();});
  overlay.addEventListener('input',event=>{if(event.target.matches('[data-report-notes]')){reportNotes=event.target.value;estateNotes.set(selected(),reportNotes);}});
  overlay.addEventListener('focusout',event=>{if(event.target.matches('[data-report-notes]')){lastContent='';render();}});
  overlay.addEventListener('click',event=>{const row=event.target.closest('[data-alert-index]');if(row){const r=alertRows[Number(row.dataset.alertIndex)],api=map();if(r&&api)api.showAt(r.lng,r.lat,'<h3>'+esc(r.name)+'</h3>'+api.pointContent(r,r.kind),true);return;}const reportChoice=event.target.closest('[data-report-tab]')?.dataset.reportTab;if(reportChoice){reportTab=reportChoice;lastContent='';render();overlay.scrollTop=0;return;}const pointKind=event.target.closest('[data-report-kind]')?.dataset.reportKind;if(pointKind){const api=map(),p=api?.points?.().find(p=>p.kind===pointKind);if(p&&api)api.showAt(p.lng,p.lat,'<h3>'+esc(p.name)+'</h3>'+api.pointContent(p,p.kind),true);return;}const action=event.target.closest('[data-section-action]')?.dataset.sectionAction;if(action==='print'){reportTab='document';lastContent='';render();window.print();}if(action==='layers')$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-reference-map-tools',action:'layers'},location.origin);if(action==='fullscreen')$('efMapFullscreen')?.click();if(action==='overview')show('overview');if(action==='legend'){const legend=mapDoc()?.getElementById('mapLegend');if(legend){legend.open=true;legend.scrollIntoView({block:'nearest'});}}});
  const rail=$('referenceRail');if(rail&&!$('referenceMenuToggle')){const menu=document.createElement('button');menu.id='referenceMenuToggle';menu.type='button';menu.setAttribute('aria-label','เปิดแผนที่เต็มพื้นที่');menu.title='เปิดแผนที่เต็มพื้นที่';menu.setAttribute('aria-expanded','true');menu.innerHTML=lineIcon('<path d="M4 6h16M4 12h16M4 18h16"/>');menu.onclick=()=>{const opened=document.body.dataset.referencePanel!=='closed';if(!opened&&cameraPlaying)sendCamera('orbit',false);document.body.dataset.referencePanel=opened?'closed':'open';menu.setAttribute('aria-expanded',String(!opened));menu.setAttribute('aria-label',opened?'แสดงข้อมูล':'เปิดแผนที่เต็มพื้นที่');menu.title=menu.getAttribute('aria-label');const custom=!['overview','preparedness'].includes(active);overlay.hidden=opened||!custom;const pane=$('floodInformationPane');pane.inert=opened||custom;pane.setAttribute('aria-hidden',String(opened||custom));};rail.append(menu);}
  if(!$('referencePanelSurface')){const surface=document.createElement('div');surface.id='referencePanelSurface';surface.setAttribute('aria-hidden','true');document.body.append(surface);}
  if(!$('referenceViewTabs')){
   const tabs=document.createElement('nav');
   tabs.id='referenceViewTabs';
   tabs.setAttribute('aria-label','ไปยังส่วนข้อมูลแดชบอร์ด');
   const sections=[
    ['stations','ระดับน้ำ','floodInformationPane'],
    ['dams','เขื่อน/อ่าง','floodDamsSection'],
    ['canals','คลอง','floodCanalSection'],
    ['diagram','ผังน้ำ','floodWaterDiagram']
   ];
   tabs.innerHTML=sections.map(([key,label,id])=>'<button type="button" data-water-category="'+key+'" aria-controls="'+id+'" aria-selected="'+(key==='stations')+'"><span>'+label+'</span></button>').join('');
   tabs.addEventListener('click',event=>{
    const button=event.target.closest('[data-water-category]');
    const pane=$('floodInformationPane');
    if(!button||!pane)return;
    const key=button.dataset.waterCategory;
    const target=key==='canals'?pane.querySelector('.ef-canal-panel'):$(button.getAttribute('aria-controls'));
    if(!target)return;
    if(key==='canals'){
     target.id=target.id||'floodCanalSection';
     button.setAttribute('aria-controls',target.id);
    }
    if(key==='diagram')pane.querySelectorAll('#efDetails24,#efDetails48').forEach(detail=>detail.open=true);
    tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',String(b===button)));
    const inset=parseFloat(getComputedStyle(pane).paddingTop)||0;
    const top=key==='stations'?0:pane.scrollTop+target.getBoundingClientRect().top-pane.getBoundingClientRect().top-inset;
    pane.scrollTo({top,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
   });
   document.body.dataset.waterCategory='stations';
   $('floodInformationPane').append(tabs);
  }
  show('overview');render();supplement();$('estateFocusMap')?.addEventListener('load',()=>{cameraInitialized=false;});setInterval(()=>{if(!document.hidden){render();supplement();}},1800);return true;
 }
 function boot(){if(mount())return;const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});observer.observe(document.body,{childList:true,subtree:true});}
 document.readyState==='loading'?document.addEventListener('DOMContentLoaded',boot,{once:true}):boot();
})();




/* Approved water-category tabs, geographic search, and an orbit control on the map rail. */
(()=>{
'use strict';
const $=id=>document.getElementById(id);
const style=document.createElement('style');
style.textContent=`
#approvedAreaSearch{position:fixed;left:calc(var(--ref-left,108px) + var(--ref-panel,400px) + 20px);top:110px;z-index:2300;width:min(330px,calc(100vw - 100px));padding:20px;border-radius:22px;background:#fff;box-shadow:0 6px 26px #22344a24;font:15px/1.5 Sarabun,sans-serif;color:#404040}
#approvedAreaSearch[hidden]{display:none!important}
#approvedAreaSearch label{display:block;margin-bottom:14px}
#approvedAreaSearch select{display:block;width:100%;margin-top:7px;padding:12px;border:1px solid #e3e6ec;border-radius:12px;background:white;font:inherit;color:#555}
#approvedAreaSearch .area-actions{display:flex;gap:10px}
#approvedAreaSearch button{flex:1;padding:11px 14px;border:1px solid #e3e6ec;border-radius:30px;background:#fff;font:inherit;cursor:pointer}
#approvedAreaSearch button[type=submit]{background:#2f68f4;border:0;color:#fff}
#approvedAreaSearch output{display:block;margin:8px 0;font-size:12px;color:#667085}
#approvedAreaSearch .area-close{position:absolute;right:10px;top:6px;border:0;padding:2px 6px}
#approvedAreaSearch h2{font:500 16px Sarabun,sans-serif;margin:0 0 15px}
@media(max-width:900px){#approvedAreaSearch{left:auto;right:78px;top:100px}}
`;
document.head.append(style);
let geoPromise,provinces=[],districts=[],subdistricts=[];
const name=r=>typeof r?.name==='object'?r.name.th:r?.name_th||r?.name||'';
const setOptions=(el,rows,label)=>{el.replaceChildren(new Option(label,''),...rows.filter(r=>!r.deleted_at).map(r=>new Option(name(r),String(r.id))));el.disabled=rows.length===0;};
async function loadGeo(){
 if(!geoPromise)geoPromise=Promise.all(['province','district','sub_district'].map(kind=>fetch('https://cdn.jsdelivr.net/gh/kongvut/thai-province-data@master/api/latest/'+kind+'.json',{signal:AbortSignal.timeout(20000)}).then(r=>{if(!r.ok)throw Error('โหลดรายชื่อพื้นที่ไม่สำเร็จ');return r.json()}))).catch(e=>{geoPromise=null;throw e});
 [provinces,districts,subdistricts]=await geoPromise;
}
function mount(){
 if(!$('referenceViewTabs'))return;
 if(!$('approvedAreaSearch')){
 const form=document.createElement('form');form.id='approvedAreaSearch';form.hidden=true;form.setAttribute('aria-label','ค้นหาพื้นที่');
 form.innerHTML='<button type="button" class="area-close" aria-label="ปิดค้นหาพื้นที่">×</button><h2>ค้นหาพื้นที่</h2><label>จังหวัด<select id="approvedProvince" required><option value="">กำลังโหลดรายชื่อจังหวัด…</option></select></label><label>อำเภอ<select id="approvedDistrict" disabled><option value="">เลือกอำเภอ</option></select></label><label>ตำบล<select id="approvedSubdistrict" disabled><option value="">เลือกตำบล</option></select></label><output aria-live="polite"></output><div class="area-actions"><button type="reset">รีเซ็ต</button><button type="submit">แสดงข้อมูล</button></div>';
 document.body.append(form);
 const p=$('approvedProvince'),d=$('approvedDistrict'),t=$('approvedSubdistrict'),out=form.querySelector('output');
 form.querySelector('.area-close').onclick=()=>{form.hidden=true};
 p.onchange=()=>{setOptions(d,districts.filter(r=>String(r.province_id)===p.value),'เลือกอำเภอ');setOptions(t,[],'เลือกตำบล')};
 d.onchange=()=>setOptions(t,subdistricts.filter(r=>String(r.district_id??r.amphure_id)===d.value),'เลือกตำบล');
 form.onreset=()=>{setOptions(p,provinces,'เลือกจังหวัด');setOptions(d,[],'เลือกอำเภอ');setOptions(t,[],'เลือกตำบล');out.textContent='';};
 form.onsubmit=async e=>{
 e.preventDefault();const submit=form.querySelector('[type=submit]');submit.disabled=true;out.textContent='กำลังค้นหาตำแหน่งพื้นที่…';
 try{
 const pn=name(provinces.find(r=>String(r.id)===p.value)),dn=name(districts.find(r=>String(r.id)===d.value)),tn=name(subdistricts.find(r=>String(r.id)===t.value));
 const address=[tn&&'ตำบล'+tn,dn&&'อำเภอ'+dn,'จังหวัด'+pn,'ประเทศไทย'].filter(Boolean).join(' ');
 const url=new URL('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates');url.search=new URLSearchParams({f:'json',SingleLine:address,outFields:'Match_addr',maxLocations:'1',sourceCountry:'THA'}).toString();
 const response=await fetch(url,{signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error();const data=await response.json(),candidate=data.candidates?.[0];if(!candidate?.location||candidate.score<75)throw Error();
 const api=$('estateFocusMap')?.contentWindow?.IEATPreparednessMap?.();if(!api?.ready)throw Error();
 const zoom=tn?13:dn?11:8;
 if(api.vector)api.vector.flyTo({center:[candidate.location.x,candidate.location.y],zoom,duration:700});
 else api.raster.setView([candidate.location.y,candidate.location.x],zoom);
 out.textContent='แผนที่: '+[tn,dn,pn].filter(Boolean).join(' · ')+' · ข้อมูลยังใช้ขอบเขตนิคมฯ ที่เลือก';form.hidden=true;
 }catch(_){out.textContent='ยังค้นหาตำแหน่งไม่สำเร็จ กรุณาลองอีกครั้ง';}finally{submit.disabled=false}
 };
 }
 const frame=$('estateFocusMap');let doc;try{doc=frame?.contentDocument}catch(_){return}const rail=doc?.getElementById('rightMapToolbar');if(!rail)return;
 if(!doc.getElementById('approvedRotate360')){
 const b=doc.createElement('button');b.id='approvedRotate360';b.type='button';b.title='หมุนอัตโนมัติ 360°';b.setAttribute('aria-label','หมุนอัตโนมัติ 360 องศา');b.setAttribute('aria-pressed','false');b.innerHTML='<span style="font:500 15px Sarabun,sans-serif">↻<br>360°</span>';
 const old=doc.getElementById('aerialTourButton');
 b.onclick=()=>old?.click();const mapApi=frame?.contentWindow?.IEATPreparednessMap?.();if(mapApi?.raster&&!mapApi?.vector){b.disabled=true;b.title='การหมุน 360° ต้องใช้แผนที่ 3 มิติ';}
 const sync=()=>{const playing=old?.getAttribute('aria-pressed')==='true';b.setAttribute('aria-pressed',String(playing));b.title=playing?'หยุดหมุน 360°':'หมุนอัตโนมัติ 360°';b.style.setProperty('background',playing?'#2f68f4':'#fff','important');b.style.setProperty('color',playing?'white':'#797979','important')};
 if(old)new MutationObserver(sync).observe(old,{attributes:true,attributeFilter:['aria-pressed']});sync();
 const support=rail.querySelector('[data-map-action=support]');rail.insertBefore(b,support);
 }
 const search=rail.querySelector('[data-map-action=search]');
 if(search&&!search.dataset.areaSearch){
 search.dataset.areaSearch='true';search.title='ค้นหาจังหวัด อำเภอ ตำบล';search.setAttribute('aria-label',search.title);
 search.addEventListener('click',async event=>{event.stopImmediatePropagation();const form=$('approvedAreaSearch');form.hidden=!form.hidden;if(form.hidden)return;const out=form.querySelector('output');try{if(!provinces.length){out.textContent='กำลังโหลดรายชื่อพื้นที่…';await loadGeo();setOptions($('approvedProvince'),provinces,'เลือกจังหวัด');out.textContent='';}}catch(_){out.textContent='โหลดรายชื่อพื้นที่ไม่สำเร็จ กดปุ่มค้นหาอีกครั้งเพื่อลองใหม่';}},{capture:true});
 }
}
mount();const timer=setInterval(()=>{if(!document.hidden)mount()},1000);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('approvedAreaSearch'))$('approvedAreaSearch').hidden=true});
})();



/* Keep the existing live title and update timestamp together without copying data. */
(()=>{
 function alignHeading(){
 const pane=document.getElementById('floodInformationPane'),title=document.getElementById('floodPageTitle'),date=document.getElementById('expoBoothSubtitle');
 if(!pane||!title||!date)return;
 let row=document.getElementById('approvedDashboardHeading');
 if(!row){row=document.createElement('header');row.id='approvedDashboardHeading';pane.prepend(row)}
 if(title.parentElement!==row)row.append(title);
 if(date.parentElement!==row)row.append(date);
 }
 alignHeading();document.readyState==='loading'&&document.addEventListener('DOMContentLoaded',alignHeading,{once:true});
 setInterval(()=>{if(!document.hidden)alignHeading()},1000);
})();

/* Preserve the source disclosures and pager handlers in one compact footer. */
(()=>{
let pending=false;
function arrange(){
 pending=false;
for(const [hostId,pagerId] of [['efRelatedDams','ieatDamPager'],['efReservoirList','ieatReservoirPager']]){
 const host=document.getElementById(hostId),pager=document.getElementById(pagerId);
 if(!host||!pager)continue;
 const panel=host.closest('.ef-related-dams,.ef-reservoir-panel');
 if(!panel)continue;
 let footer=panel.querySelector('.compact-water-footer');
 if(!footer){footer=document.createElement('div');footer.className='compact-water-footer';panel.append(footer)}
 const detail=panel.querySelector('details');
 if(detail&&detail.parentElement!==footer){footer.querySelectorAll('details').forEach(old=>old.remove());footer.prepend(detail);const summary=detail.querySelector('summary');if(summary)summary.textContent='รายละเอียด / แหล่งข้อมูล'}
 if(pager.parentElement!==footer)footer.append(pager);
}
}
const observer=new MutationObserver(()=>{if(!pending){pending=true;requestAnimationFrame(arrange)}});
observer.observe(document.body,{childList:true,subtree:true});arrange();
})();
