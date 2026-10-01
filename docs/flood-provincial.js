(function(){
'use strict';
const $=id=>document.getElementById(id),esc=v=>String(v??'–').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=v=>v==null?'ไม่มีค่า':Number(v).toLocaleString('th-TH',{maximumFractionDigits:2});
function stamp(v){let s=String(v||'').replace(' ','T');if(/^\d{4}-\d{2}-\d{2}$/.test(s))s+='T00:00:00';if(s&&!/(Z|[+-]\d{2}:?\d{2})$/.test(s))s+='+07:00';return Date.parse(s)}
function stale(r,kind){const age=Date.now()-stamp(r.measured_at);return !Number.isFinite(age)||age< -300000||age>(kind==='dam'?72:6)*3600000}
let data=null,visible=[],busy=false,active=false;
function rows(kind){return data?.feeds?.[kind]?.rows||[]}
function sourceOld(kind){const age=Date.now()-Date.parse(data?.feeds?.[kind]?.fetched_at||'');return !Number.isFinite(age)||age>3600000||Boolean(data?.failures?.[kind])}
function scoped(kind){const province=$('pwProvince').value,q=$('pwSearch').value.trim().toLowerCase();const basins=new Set(rows('water').filter(r=>r.province===province).map(r=>r.basin_id));if(basins.has(10)){basins.add(6);basins.add(9)}
return rows(kind).filter(r=>(!province||r.province===province||(kind==='dam'&&r.basin_id!=null&&basins.has(r.basin_id)))&&[r.name,r.code,r.district,r.river,r.basin].join(' ').toLowerCase().includes(q))}
function status(r,kind){
 if(stale(r,kind)||sourceOld(kind))return ['ข้อมูลเก่า / เวลาไม่ผ่านเกณฑ์','unknown','unk'];
 if(kind==='water')return r.wl==null?['ไม่มีค่า','unknown','unk']:r.diff==null?['ไม่มีระดับตลิ่งให้เทียบ','unknown','unk']:r.diff>=0?['ล้นตลิ่ง '+fmt(r.diff)+' ม.','danger','crit']:['ต่ำกว่าตลิ่ง '+fmt(Math.abs(r.diff))+' ม.',(r.situation_level!=null?r.situation_level===4:r.diff>-.5)?'watch':'normal',(r.situation_level!=null?r.situation_level===4:r.diff>-.5)?'warn':'ok'];
 if(kind==='rain')return [r.rain==null?'ไม่มีค่า':'ฝนสะสม 24 ชม.',r.rain==null?'unknown':r.rain>90?'danger':r.rain>35?'watch':'normal','unk'];
 return [r.percent==null?'ไม่มีค่า':fmt(r.percent)+'% ของระดับเก็บกักปกติ',r.percent==null?'unknown':r.percent>=100?'danger':r.percent>=80?'watch':'normal','unk'];
}
function value(r,kind){return kind==='water'?(r.wl==null?'ไม่มีค่า':fmt(r.wl)+' ม.รทก.'):kind==='rain'?(r.rain==null?'ไม่มีค่า':fmt(r.rain)+' มม.'):(r.storage==null?'ไม่มีค่า':fmt(r.storage)+' ล้าน ลบ.ม.')}
function mapRows(){const kind=$('pwKind').value;return visible.map(r=>({...r,level:status(r,kind)[2],stale:stale(r,kind)||sourceOld(kind),value_text:value(r,kind),source_text:'ThaiWater / '+(r.agency||'สสน.'),source_url:'https://www.thaiwater.net/'}))}
function sendMap(){if(active)$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-water-feed',kind:'provincial-'+$('pwKind').value,rows:mapRows()},location.origin)}
function render(){
 if(!data)return;
 const kind=$('pwKind').value,water=scoped('water'),rain=scoped('rain'),dams=scoped('dam');
 const fresh=water.filter(r=>!stale(r,'water')&&!sourceOld('water')&&r.wl!=null),over=fresh.filter(r=>r.diff!=null&&r.diff>=0),near=fresh.filter(r=>r.diff!=null&&r.diff<0&&r.diff>-.5);
 const recentRain=rain.filter(r=>!stale(r,'rain')&&!sourceOld('rain')&&r.rain!=null);
 const flows=fresh.filter(r=>r.discharge!=null).sort((a,b)=>b.discharge-a.discharge);
 const maxRain=recentRain.slice().sort((a,b)=>b.rain-a.rain)[0];
 $('pwMetrics').innerHTML=[['สถานีล้นตลิ่ง',sourceOld('water')?'ยังสรุปไม่ได้':over.length+' จุด'],['ต่ำกว่าตลิ่งไม่ถึง 0.5 ม.',sourceOld('water')?'ยังสรุปไม่ได้':near.length+' จุด'],['ฝน 24 ชม. สูงสุด',maxRain?fmt(maxRain.rain)+' มม.':'ไม่มีค่าล่าสุด'],['น้ำไหลผ่านสูงสุด',flows.length?fmt(flows[0].discharge)+' ลบ.ม./วินาที':'ไม่มีค่าจากสถานี']].map(([title,v])=>'<div class="pw-metric"><span>'+esc(title)+'</span><strong>'+esc(v)+'</strong></div>').join('');
 $('pwSummary').textContent='ข้อมูลระดับน้ำล่าสุด '+fresh.length+' / '+water.length+' จุด · '+(maxRain?'ฝนสูงสุดที่ '+maxRain.name:'ไม่มีค่าฝนล่าสุดในตัวกรอง')+' · เขื่อนในจังหวัด / ลุ่มน้ำที่เกี่ยวข้อง '+dams.length+' แห่ง';
 visible=scoped(kind).sort((a,b)=>kind==='water'?(b.diff??-999)-(a.diff??-999):kind==='rain'?(b.rain??-999)-(a.rain??-999):(b.percent??-999)-(a.percent??-999));
 if($('pwFresh').checked)visible=visible.filter(r=>!stale(r,kind)&&!sourceOld(kind));
 $('pwStatus').textContent=visible.length+' รายการ · รอบเก็บข้อมูล '+new Date(data.feeds?.[kind]?.fetched_at||data.fetched_at).toLocaleString('th-TH',{timeZone:'Asia/Bangkok'})+(sourceOld(kind)?' · เก็บรอบใหม่ไม่สำเร็จ / ข้อมูลเก่า':'');
 $('pwRows').innerHTML=visible.slice(0,250).map((r,i)=>{
  const s=status(r,kind),delta=r.wl!=null&&r.previous!=null?r.wl-r.previous:null;
  const detail=kind==='water'?(delta==null?'ไม่มีค่าเทียบก่อนหน้า':(delta>0?'เพิ่มขึ้น ':delta<0?'ลดลง ':'ทรงตัว ')+fmt(Math.abs(delta))+' ม.')+'<br>น้ำไหลผ่าน '+(r.discharge==null?'ไม่มีค่า':fmt(r.discharge)+' ลบ.ม./วินาที'):kind==='dam'?'น้ำเข้า '+fmt(r.inflow)+'<br>ระบาย '+fmt(r.released)+' ล้าน ลบ.ม./วัน':esc(r.district||r.basin);
  return '<tr><td><button type="button" data-pw-index="'+i+'">'+esc(r.code? r.code+' · '+r.name:r.name)+'</button><br>'+esc(r.province)+' · '+esc(r.agency)+'</td><td>'+esc(value(r,kind))+'</td><td class="ef-status-cell" data-severity="'+s[1]+'">'+esc(s[0])+'</td><td>'+detail+'</td><td>'+esc(r.measured_at||'ไม่ระบุ')+' (ไทย)</td></tr>';
 }).join('')||'<tr><td colspan="5">ไม่มีรายการในตัวกรองนี้ · ไม่ใช่การยืนยันว่าพื้นที่ไม่มีน้ำท่วม</td></tr>';
 if(visible.length>250)$('pwStatus').textContent+=' · แสดงตาราง 250 รายการแรก กรุณาเลือกจังหวัดหรือค้นหาเพิ่ม';
 const province=$('pwProvince').value;
 const messages=rows('warning').flatMap(r=>String(r.message).split(/\n\s*\n/).filter(message=>!province||message.includes('จ.'+province)||message.includes('จ. '+province)).map(message=>({message,time:r.time})));
 $('pwWarnings').innerHTML=(sourceOld('warning')?'<p>คำเตือนชุดเก่า / เก็บรอบใหม่ไม่สำเร็จ โปรดตรวจสอบต้นทาง</p>':'')+(messages.length?messages.slice(0,20).map(r=>'<div class="pw-warning"><b>'+esc(r.time)+' (ไทย)</b><p>'+esc(r.message)+'</p></div>').join(''):'<p>ไม่มีข้อความตรงกับจังหวัดในชุดข้อมูลที่โหลดได้</p>');
 sendMap();
}
async function load(){
 if(busy)return;busy=true;
 try{
  let response;try{response=await fetch('https://raw.githubusercontent.com/THANAWAN-KI/ieat-emonitoring-line-alert/main/docs/data/provincial_water_latest.json?v='+Math.floor(Date.now()/300000),{signal:AbortSignal.timeout(7000)});if(!response.ok)throw Error('raw')}catch(e){response=await fetch('./data/provincial_water_latest.json?v='+Math.floor(Date.now()/300000),{signal:AbortSignal.timeout(7000)})}
  if(!response.ok)throw Error(response.status);const next=await response.json();if(!next.feeds)throw Error('schema');next.feeds.water?.rows?.forEach(r=>{r.diff=r.wl!=null&&r.bank!=null?Math.round((r.wl-r.bank)*100)/100:null});data=next;
  const selected=$('pwProvince').value,provinces=[...new Set(['water','rain','dam'].flatMap(k=>rows(k).map(r=>r.province)).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'th'));
  $('pwProvince').innerHTML='<option value="">ทั่วประเทศ</option>'+provinces.map(p=>'<option value="'+esc(p)+'">'+esc(p)+'</option>').join('');
  $('pwProvince').value=provinces.includes(selected)?selected:'';render();
 }catch(e){$('pwStatus').textContent='โหลดข้อมูลรายจังหวัดไม่สำเร็จ กรุณาลองใหม่หรือเปิด ThaiWater';if(data){Object.keys(data.feeds).forEach(k=>data.failures[k]='refresh failed');render()}}
 finally{busy=false}
}
function start(){
 const column=document.querySelector('.ef-data-column');if(!column)return;
 const host=document.createElement('section');host.className='ef-panel';host.id='provinceWater';
 host.innerHTML='<h2>เฝ้าระวังน้ำรายจังหวัด</h2><p>ระดับน้ำเทียบตลิ่ง · ฝน 24 ชั่วโมง · ปริมาณน้ำไหล · เขื่อน · คำเตือน</p><div class="ef-tools"><select id="pwProvince" aria-label="เลือกจังหวัด"><option>พระนครศรีอยุธยา</option></select><input id="pwSearch" type="search" placeholder="ค้นหาสถานี อำเภอ หรือสายน้ำ" aria-label="ค้นหาข้อมูลน้ำรายจังหวัด"></div><div id="pwMetrics" class="pw-metrics"></div><p id="pwSummary"></p><div class="ef-tools"><select id="pwKind" aria-label="เลือกชุดข้อมูล"><option value="water">ระดับน้ำ / ปริมาณน้ำไหล</option><option value="rain">ฝนสะสม 24 ชั่วโมง</option><option value="dam">เขื่อนในจังหวัด / ลุ่มน้ำที่เกี่ยวข้อง</option></select><button id="pwRefresh" type="button">อัปเดตข้อมูล</button><button id="pwMap" type="button">แสดงชุดนี้บนแผนที่</button></div><p><label><input id="pwFresh" type="checkbox"> แสดงเฉพาะข้อมูลที่ไม่เกิน 6 ชม. (เขื่อน 3 วัน)</label></p><p id="pwStatus" role="status">กำลังโหลดข้อมูลรายจังหวัด…</p><div class="ef-table"><table><thead><tr><th>สถานี / เขื่อน</th><th>ค่าตรวจวัด</th><th>เทียบตลิ่ง / สถานะ</th><th>แนวโน้ม / ปริมาณน้ำ</th><th>เวลาตรวจวัด</th></tr></thead><tbody id="pwRows"></tbody></table></div><details><summary>คำเตือนจาก ThaiWater ในจังหวัดนี้</summary><div id="pwWarnings"></div></details><p>ข้อมูล: สถาบันสารสนเทศทรัพยากรน้ำ (สสน.) และหน่วยงานเจ้าของสถานี ผ่าน <a href="https://www.thaiwater.net/" target="_blank" rel="noopener">ThaiWater</a> · จัดแสดงข้อมูลประเภทเดียวกับ <a href="https://faonam.com/" target="_blank" rel="noopener">เฝ้าน้ำ</a></p><p>ระดับน้ำเป็น ม.รทก. ระยะจากตลิ่งคำนวณจากระดับน้ำ − ระดับตลิ่ง น้ำไหลผ่านเป็น ลบ.ม./วินาที เขื่อนใช้ปริมาณรายวัน · ไม่มีค่าแสดงว่าไม่มีข้อมูล ไม่ใช่ศูนย์</p>';
 column.insertBefore(host,column.querySelector('#unifiedWater')||column.querySelector('.ef-charts'));
 const style=document.createElement('style');style.textContent='.pw-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:16px 0}.pw-metric{padding:14px;background:#edf7fb;border:1px solid #cce3ee;border-radius:12px;font-size:14px}.pw-metric strong{display:block;font-size:22px;margin-top:8px}.pw-warning{border-left:4px solid #dc2626;background:#fff1f2;padding:12px;margin:10px 0;font-size:14px;line-height:1.8}#provinceWater button:not([data-pw-index]){font:inherit;padding:9px 12px;border:1px solid #bfd5df;border-radius:9px;background:#edf7fb;cursor:pointer}@media(max-width:480px){.pw-metrics{grid-template-columns:1fr}}';document.head.appendChild(style);
 ['pwProvince','pwKind','pwFresh'].forEach(id=>$(id).addEventListener('change',render));$('pwSearch').addEventListener('input',render);$('pwRefresh').addEventListener('click',load);$('pwMap').addEventListener('click',()=>{active=true;sendMap()});
 $('pwRows').addEventListener('click',event=>{const b=event.target.closest('[data-pw-index]');if(!b)return;const r=visible[Number(b.dataset.pwIndex)];if(r.lat==null||r.lng==null)return;active=true;sendMap();$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat:r.lat,lon:r.lng,label:r.name,scale:75000},location.origin);if(innerWidth<951)$('estateFocusMap')?.scrollIntoView({behavior:'smooth',block:'center'})});
 window.addEventListener('message',event=>{if(event.origin===location.origin&&event.source===$('estateFocusMap')?.contentWindow&&event.data?.type==='flood-water-ready')sendMap()});
 load();setInterval(()=>{if(!document.hidden)load()},300000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
