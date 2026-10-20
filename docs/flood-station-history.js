(()=>{
'use strict';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const whFmt=(v,d=2)=>v==null||!Number.isFinite(Number(v))?'–':Number(v).toLocaleString('th-TH',{maximumFractionDigits:d});
let index=null,code='C.2',year=2026,bank=null,request=0;const years=new Map();

function whChart(station,year,bank){
 const days=station.days||[];if(!days.length)return '<div class="wh-empty">ไม่มีค่าระดับน้ำที่ ThaiWater ส่งกลับสำหรับปี '+year+'</div>';
 const W=720,H=300,L=48,R=704,T=20,B=252,bankValue=Number(bank),hasBank=bank!==null&&bank!==undefined&&Number.isFinite(bankValue);
 const vals=days.flatMap(d=>[Number(d[1]),Number(d[2]),Number(d[3])]).filter(Number.isFinite);if(hasBank)vals.push(bankValue);
 let lo=Math.min(...vals),hi=Math.max(...vals);if(hi===lo){hi+=.5;lo-=.5}const pad=Math.max(.08,(hi-lo)*.08);lo-=pad;hi+=pad;
 const start=Date.parse(year+'-01-01T00:00:00+07:00'),end=Date.parse(year+'-12-31T23:59:59+07:00'),span=end-start;
 const x=d=>L+(Date.parse(d+'T12:00:00+07:00')-start)/span*(R-L),y=v=>B-(v-lo)/(hi-lo)*(B-T);
 const ticks=Array.from({length:5},(_,i)=>lo+(hi-lo)*i/4);
 const monthTicks=Array.from({length:12},(_,i)=>({x:L+i/11*(R-L),label:['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'][i]}));
 const groups=[];let group=[];let previous=null;
 days.forEach(d=>{const at=Date.parse(d[0]+'T12:00:00+07:00');if(previous!==null&&at-previous>4*86400000){if(group.length)groups.push(group);group=[]}group.push(d);previous=at});if(group.length)groups.push(group);
 const bands=groups.map(g=>{const top=g.map((d,i)=>(i?'L':'M')+x(d[0]).toFixed(1)+' '+y(Number(d[2])).toFixed(1)).join(' '),bottom=g.slice().reverse().map(d=>'L'+x(d[0]).toFixed(1)+' '+y(Number(d[1])).toFixed(1)).join(' ');return '<path d="'+top+' '+bottom+' Z" fill="#9cc9ee" opacity=".34"/>'}).join('');
 const lines=groups.map(g=>'<path d="'+g.map((d,i)=>(i?'L':'M')+x(d[0]).toFixed(1)+' '+y(Number(d[3])).toFixed(1)).join(' ')+'" fill="none" stroke="#0072cf" stroke-width="2"/>').join('');
 const bankLine=hasBank?'<path d="M'+L+' '+y(bankValue).toFixed(1)+'H'+R+'" stroke="#d62839" stroke-width="2.5" stroke-dasharray="9 6"/><rect x="'+(R-128)+'" y="'+(y(bankValue)-18).toFixed(1)+'" width="128" height="17" rx="5" fill="#fff" opacity=".92"/><text x="'+(R-5)+'" y="'+(y(bankValue)-6).toFixed(1)+'" text-anchor="end" style="fill:#d62839;font-weight:700">ตลิ่ง '+whFmt(bankValue)+' ม.รทก.</text>':'';
 return '<div class="wh-chart"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="กราฟระดับน้ำรายวัน '+year+(hasBank?' พร้อมเส้นระดับตลิ่ง':'')+'">'+ticks.map(v=>'<path d="M'+L+' '+y(v)+'H'+R+'" stroke="#e2e9ef"/><text x="'+(L-6)+'" y="'+(y(v)+4)+'" text-anchor="end">'+whFmt(v,1)+'</text>').join('')+monthTicks.map(m=>'<text x="'+m.x+'" y="276" text-anchor="middle">'+m.label+'</text>').join('')+bands+lines+bankLine+'<text x="8" y="12">ม.รทก.</text></svg></div>';
}

async function loadYear(y){if(!years.has(y)){const r=await fetch('./data/water-history/waterlevel_'+y+'.json?v=20261020',{signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('โหลดข้อมูลปี '+y+' ไม่สำเร็จ');years.set(y,await r.json())}return years.get(y)}
function options(){const select=document.getElementById('stationHistorySelect');if(!index||!select)return;const records=Object.entries(index.stations||{}).filter(([,m])=>m.station_id);if(!records.some(([k])=>k===code))records.unshift([code,{name:'ไม่มีข้อมูลย้อนหลังในชุดนี้'}]);select.innerHTML=records.map(([k,m])=>'<option value="'+esc(k)+'"'+(k===code?' selected':'')+'>'+esc(k+' · '+m.name+(m.province?' · '+m.province:''))+'</option>').join('')}
async function render(){const body=document.getElementById('stationHistoryBody');if(!body||!index)return;const token=++request;options();document.getElementById('stationHistoryYear').value=String(year);const meta=index.stations?.[code];body.textContent='กำลังโหลดข้อมูลย้อนหลัง…';if(!meta?.station_id){body.textContent='สถานี '+code+' ไม่มีข้อมูลย้อนหลังในชุดปี 2023–2026 ที่เชื่อมไว้ กรุณาเลือกสถานีอื่นจากรายการ';return}
try{const data=await loadYear(year);if(token!==request)return;const st=data.stations?.[code];if(!st?.days?.length){body.textContent='ไม่พบค่าระดับน้ำของ '+code+' ในปี '+year;return}
body.innerHTML='<p class="station-history-name">'+esc(meta.name+' · '+(meta.province||'')+' · ปี '+year)+'</p>'+whChart(st,year,bank)+'<p class="station-history-source">ข้อมูล ThaiWater / HII · ชุดข้อมูลปรับปรุง '+esc(index.generated_at||'ไม่ระบุ')+' · เส้นสีน้ำเงินคือค่าเฉลี่ยรายวัน พื้นที่สีฟ้าคือช่วงต่ำสุด–สูงสุด'+(bank!==null?' · เส้นประสีแดงคือระดับตลิ่งที่สถานีปัจจุบันระบุ':'')+' · ช่องว่างคือช่วงที่ไม่มีข้อมูล</p>';
}catch(e){if(token===request)body.textContent=e.message+' กรุณาเลือกปีใหม่เพื่อลองอีกครั้ง'}
}
function mount(){const col=document.querySelector('.ef-data-column');if(!col)return false;if(document.getElementById('floodStationHistory'))return true;const section=document.createElement('section');section.id='floodStationHistory';section.style.order='11';section.innerHTML='<h3>ระดับน้ำย้อนหลังรายสถานี</h3><div class="station-history-controls"><label>สถานี<select id="stationHistorySelect" aria-label="เลือกสถานีระดับน้ำย้อนหลัง"></select></label><label>ปี<select id="stationHistoryYear" aria-label="เลือกปีข้อมูลระดับน้ำย้อนหลัง">'+[2023,2024,2025,2026].map(y=>'<option value="'+y+'"'+(y===2026?' selected':'')+'>'+y+'</option>').join('')+'</select></label></div><div id="stationHistoryBody" role="status">กำลังโหลดทะเบียนสถานี…</div>';col.append(section);
section.querySelector('#stationHistorySelect').addEventListener('change',e=>{code=e.target.value;bank=null;render()});section.querySelector('#stationHistoryYear').addEventListener('change',e=>{year=Number(e.target.value);render()});
fetch('./data/water-history/index.json?v=20261020',{signal:AbortSignal.timeout(20000)}).then(r=>{if(!r.ok)throw Error('โหลดทะเบียนสถานีย้อนหลังไม่สำเร็จ');return r.json()}).then(d=>{index=d;render()}).catch(e=>{section.querySelector('#stationHistoryBody').textContent=e.message});
return true}
document.addEventListener('ieat-station-history-select',e=>{const r=e.detail;if(!r)return;code=String(r.oldcode||r.code||'');bank=r.bank!==null&&r.bank!==undefined&&Number.isFinite(Number(r.bank))?Number(r.bank):null;render()});
if(!mount()){const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});observer.observe(document.getElementById('warning'),{childList:true,subtree:true})}
})();

