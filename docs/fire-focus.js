/* Focused fire and chemical dashboard. All charts derive from loaded source records. */
(()=>{'use strict';if(window.IEATWorkflowView!=='hazard')return;
const $=id=>document.getElementById(id),dash=$('riskDashboard'),mapHost=$('riskMapSection');if(!dash||!$('fire-overview')||!mapHost)return;
const make=(tag,text,cls)=>{const n=document.createElement(tag);if(text!=null)n.textContent=text;if(cls)n.className=cls;return n;};
dash.classList.add('fire-focus');
const shell=make('div',null,'fire-console');shell.id='fire-console';const left=make('div',null,'fire-console-left');shell.append(left,mapHost);dash.prepend(shell);
const overview=$('fire-overview'),context=dash.querySelector('.fire-context'),filters=dash.querySelector('.fire-filterbar'),trend=dash.querySelector('.fire-insight'),estates=$('thermal-panel'),received=$('fire-received'),dss=$('fire-dss-inline');
left.append(overview,filters);if(context)left.append(context);
const analytics=make('div',null,'fire-analytics');if(trend)analytics.append(trend);
const proximity=make('section',null,'wf fire-box fire-proximity');proximity.innerHTML='<h2>จุดความร้อนแยกตามระยะ</h2><p class="focus-help">วัดถึงจุดอ้างอิงนิคมฯ ที่ใกล้ที่สุด</p><div class="focus-donut-wrap"><div id="fire-proximity-ring" class="focus-donut" role="img" aria-label="กำลังรอข้อมูลระยะห่าง"><div><strong id="fire-proximity-total">—</strong><span>จุดใกล้นิคมฯ</span></div></div><div id="fire-proximity-legend"></div></div><p id="fire-proximity-note" class="focus-help">กำลังรอข้อมูลดาวเทียม…</p>';
analytics.append(proximity);left.append(analytics,estates,received,dss);$('fire-bottom')?.remove();dash.querySelector('.risk-workspace')?.classList.add('fire-legacy-shell');
const paths=[
 '<path d="M12 3c1 4-2 5-2 8 2-1 3-2 4-4 4 4 6 7 4 11a7 7 0 0 1-12 0C3 13 7 9 8 7c0 3 1 4 2 5-1-4 1-6 2-9Z"/>',
 '<path d="M3 21V10l6 3V9l6 3V5h5v16H3Z"/><path d="M7 17h1m4 0h1m4 0h1"/>',
 '<path d="M8 6h8v15H8zM11 3h6M12 3v3M16 8h3l2 5M8 10H5V7h7"/>',
 '<path d="M9 3h6M10 3v6L4 19a1.4 1.4 0 0 0 1.2 2h13.6a1.4 1.4 0 0 0 1.2-2L14 9V3M7 15h10"/>'
];overview.querySelectorAll('.fire-symbol').forEach((n,i)=>{n.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+paths[i]+'</svg>';});
const cardLabels=overview.querySelectorAll('.fire-stat small');if(cardLabels[0])cardLabels[0].textContent='ภายในระยะเฝ้าระวังที่เลือก';if(cardLabels[1])cardLabels[1].textContent='มีจุดตรวจพบอยู่ในระยะที่เลือก';
if(trend){trend.querySelector('h2').textContent='ตรวจพบจุดความร้อนช่วงใดบ้าง';trend.querySelector('p').textContent='จำนวนจุดตรวจพบในกรอบพื้นที่ แบ่งตามช่วงเวลา';}
estates.querySelector('h2').textContent='นิคมฯ ใกล้จุดความร้อน';
const mapHeading=mapHost.querySelector('.fire-map-title b');if(mapHeading)mapHeading.textContent='แผนที่เฝ้าระวัง';
const mapSubtitle=mapHost.querySelector('.fire-map-title span');if(mapSubtitle)mapSubtitle.textContent='เลือกนิคมฯ จากรายการเพื่อดูตำแหน่ง';
const mapLegend=mapHost.querySelector('.fire-map-legend');if(mapLegend)mapLegend.innerHTML='<span><i class="legend-hot"></i>จุดใกล้นิคมฯ ตามระยะที่เลือก</span><span><i class="legend-other"></i>จุดอื่นในกรอบพื้นที่</span><span><i class="legend-estate"></i>นิคมฯ</span><span><i class="legend-incident"></i>พิกัดรับแจ้ง</span>';
const sync=make('p','กำลังสืบค้นข้อมูลดาวเทียม…','focus-sync');sync.id='fire-focus-sync';filters.after(sync);
const sourceNote=make('p','ข้อมูลรับแจ้งเก็บในเบราว์เซอร์นี้ · จัดทำรายงานผ่านเมนู “รับแจ้งเหตุและรายงาน” ด้านบน','focus-help');received.append(sourceNote);
const stamp=v=>new Date(v).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',dateStyle:'short',timeStyle:'short'});
function proximityChart(d){const ring=$('fire-proximity-ring'),legend=$('fire-proximity-legend');legend.replaceChildren();if(d.loading||d.error){ring.style.background='#e8eff1';$('fire-proximity-total').textContent='—';ring.setAttribute('aria-label',d.error?'ข้อมูลดาวเทียมไม่พร้อม':'กำลังโหลดข้อมูล');$('fire-proximity-note').textContent=d.error?'ยังสรุปไม่ได้ เนื่องจากดึงข้อมูลดาวเทียมไม่สำเร็จ':'กำลังสืบค้นข้อมูล…';sync.textContent=d.error?'ข้อมูลดาวเทียมไม่พร้อม กรุณาลองดึงข้อมูลใหม่':'กำลังสืบค้นข้อมูลดาวเทียม…';return;}
const bands=[{max:5,label:'ไม่เกิน 5 กม.',color:'#4F7D32',count:0},{max:10,label:'มากกว่า 5–10 กม.',color:'#F5B52E',count:0},{max:30,label:'มากกว่า 10–30 กม.',color:'#FFD16A',count:0},{max:50,label:'มากกว่า 30–50 กม.',color:'#b9cea7',count:0}].filter((b,i,a)=>i===0||a[i-1].max<d.radius);
for(const p of d.points){if(!Number.isFinite(p.nearestDistance)||p.nearestDistance>d.radius)continue;const b=bands.find(b=>p.nearestDistance<=b.max);if(b)b.count++;}
const total=bands.reduce((s,b)=>s+b.count,0);$('fire-proximity-total').textContent=total.toLocaleString('th-TH');let angle=0;const stops=[];for(const b of bands){if(b.count){const start=angle;angle+=b.count/Math.max(1,total)*360;stops.push(b.color+' '+start+'deg '+angle+'deg');}const row=make('div',null,'focus-distance-row'),dot=make('i');dot.style.background=b.color;row.append(dot,make('span',b.label),make('b',b.count.toLocaleString('th-TH')));legend.append(row);}ring.style.background=total?'conic-gradient('+stops.join(',')+')':'#e8eff1';ring.setAttribute('aria-label','จุดความร้อนใกล้นิคมฯ '+total+' จุด: '+bands.map(b=>b.label+' '+b.count+' จุด').join(', '));$('fire-proximity-note').textContent='ระยะไม่เกิน '+d.radius+' กม. · นับแต่ละจุดครั้งเดียว · ไม่ใช่ระดับผลกระทบ';sync.textContent=d.source.toUpperCase()+' · ย้อนหลัง '+d.hours+' ชั่วโมง · สืบค้น '+stamp(d.fetchedAt)+' · อัปเดตขณะเปิดหน้าทุก 10 นาที';
}
window.addEventListener('ieat-thermal-update',e=>proximityChart(e.detail));if(window.ieatThermalSnapshot)proximityChart(window.ieatThermalSnapshot);
// These counts use the same RiskMap table and filters as the detailed view.
const riskSummary=make('section',null,'focus-risk-summary');riskSummary.innerHTML='<h3>ข้อมูลกลุ่มเสี่ยงเพื่อเตรียมรับมือ</h3><p class="focus-help">ข้อมูล RiskMap ตามนิคมฯ ที่เลือก · กลุ่มอาจซ้ำกัน · ไม่ใช่จำนวนเหตุที่เกิดขึ้น</p><div id="fire-risk-bars"></div>';
dss.querySelector('.direct-querybar')?.after(riskSummary);
function renderRisk(){const target=$('fire-risk-bars'),row=$('matrixBody')?.querySelector('tr.matrix-total');target.replaceChildren();if(!row){target.append(make('p','กำลังโหลดข้อมูลกลุ่มเสี่ยง หรือไม่มีรายการตามตัวกรอง','focus-help'));return;}const cells=[...row.children],values=[1,2,3].map(i=>Number(cells[i]?.textContent.replace(/[,\s]/g,'')));if(values.some(v=>!Number.isFinite(v))){target.append(make('p','ข้อมูลกลุ่มเสี่ยงยังไม่พร้อม','focus-help'));return;}const max=Math.max(1,...values);['ความเสี่ยง 12 ประเภท','โรงงาน PSM','อัคคีภัยสูง'].forEach((label,i)=>{const item=make('div',null,'focus-risk-row'),top=make('div');top.append(make('span',label),make('b',values[i].toLocaleString('th-TH')+' รายการ'));const track=make('div',null,'focus-risk-track'),bar=make('i');bar.style.width=(values[i]/max*100)+'%';track.append(bar);item.append(top,track);target.append(item);});}
if($('matrixBody'))new MutationObserver(renderRisk).observe($('matrixBody'),{childList:true});renderRisk();
function resizeMap(){window.ieatSupportMap?.invalidateSize({pan:false});}requestAnimationFrame(resizeMap);window.addEventListener('ieat-support-map-ready',resizeMap);window.addEventListener('resize',resizeMap);
})();
