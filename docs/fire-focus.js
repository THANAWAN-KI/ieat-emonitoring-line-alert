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
analytics.append(proximity);left.append(analytics,estates,received,dss);
const nearby=dss.querySelector('.emergency-support-section'),areaRow=make('div',null,'focus-area-row');
areaRow.id='fire-area-row';estates.before(areaRow);areaRow.append(estates);
if(nearby){nearby.classList.add('focus-support');areaRow.append(nearby);
const radiusLabel=dss.querySelector('label[for="supportRadius"]');
if(radiusLabel){radiusLabel.classList.add('focus-support-radius');nearby.querySelector('.emergency-support-heading')?.append(radiusLabel);}}
mapHost.querySelector('.fire-map-title')?.remove();$('fire-bottom')?.remove();dash.querySelector('.risk-workspace')?.classList.add('fire-legacy-shell');
const cardIcons=["<img src=\"https://api.iconify.design/solar/flame-outline.svg?color=%239b4dca\" alt=\"\" width=\"32\" height=\"32\">","<img src=\"https://api.iconify.design/solar/buildings-2-outline.svg?color=%239b4dca\" alt=\"\" width=\"32\" height=\"32\">","<img src=\"https://api.iconify.design/solar/fire-square-outline.svg?color=%239b4dca\" alt=\"\" width=\"32\" height=\"32\">","<img src=\"https://api.iconify.design/solar/dropper-outline.svg?color=%239b4dca\" alt=\"\" width=\"32\" height=\"32\">"];
overview.querySelectorAll('.fire-symbol').forEach((n,i)=>{n.innerHTML=cardIcons[i];n.setAttribute('aria-hidden','true');});
overview.querySelectorAll('.fire-stat').forEach((card,i)=>{const unit=make('span',['จุด','แห่ง','เหตุ','เหตุ'][i],'fire-stat-unit');card.append(unit);});
const cardTitles=['จุดความร้อนใกล้นิคมฯ','นิคมฯ ใกล้จุดความร้อน','เหตุไฟไหม้ที่ยังติดตาม','สารเคมีรั่วไหลที่ยังติดตาม'];
overview.querySelectorAll('.fire-stat-title>span').forEach((n,i)=>{n.textContent=cardTitles[i];});
const incidentScope=make('p','เหตุที่ยังติดตาม: รายการรับแจ้งในเบราว์เซอร์นี้','fire-data-scope');overview.after(incidentScope);
const cardLabels=overview.querySelectorAll('.fire-stat small');if(cardLabels[0])cardLabels[0].textContent='ภายในระยะเฝ้าระวังที่เลือก';if(cardLabels[1])cardLabels[1].textContent='มีจุดตรวจพบอยู่ในระยะที่เลือก';
if(trend){trend.querySelector('h2').textContent='ตรวจพบจุดความร้อนช่วงใดบ้าง';trend.querySelector('p').textContent='จุดความร้อนในกรอบแผนที่ · แบ่งตามช่วงเวลาที่เลือก';}
estates.querySelector('h2').textContent='นิคมฯ ใกล้จุดความร้อน';
const mapHeading=mapHost.querySelector('.fire-map-title b');if(mapHeading)mapHeading.textContent='แผนที่เฝ้าระวัง';
const mapSubtitle=mapHost.querySelector('.fire-map-title span');if(mapSubtitle)mapSubtitle.textContent='เลือกนิคมฯ จากรายการเพื่อดูตำแหน่ง';
const mapLegend=mapHost.querySelector('.fire-map-legend');if(mapLegend)mapLegend.innerHTML='<span><i class="legend-hot"></i>จุดใกล้นิคมฯ ตามระยะที่เลือก</span><span><i class="legend-other"></i>จุดอื่นในกรอบพื้นที่</span><span><i class="legend-estate"></i>นิคมฯ</span><span><i class="legend-incident"></i>พิกัดรับแจ้ง</span>';
const sync=make('p','กำลังสืบค้นข้อมูลดาวเทียม…','focus-sync');sync.id='fire-focus-sync';sync.setAttribute('role','status');sync.setAttribute('aria-live','polite');filters.after(sync);
const satelliteScope=make('span','จุดความร้อนจากดาวเทียมยังไม่ใช่การยืนยันเหตุเพลิงไหม้','fire-satellite-scope');sync.after(satelliteScope);
const sourceNote=make('p','ข้อมูลรับแจ้งเก็บในเบราว์เซอร์นี้ · จัดทำรายงานผ่านเมนู “รับแจ้งเหตุและรายงาน” ด้านบน','focus-help');received.append(sourceNote);
const stamp=v=>new Date(v).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',dateStyle:'short',timeStyle:'short'});
function proximityChart(d){const ring=$('fire-proximity-ring'),legend=$('fire-proximity-legend');legend.replaceChildren();if(d.loading||d.error){ring.style.background='#e8eff1';$('fire-proximity-total').textContent='—';ring.setAttribute('aria-label',d.error?'ข้อมูลดาวเทียมไม่พร้อม':'กำลังโหลดข้อมูล');$('fire-proximity-note').textContent=d.error?'ยังสรุปไม่ได้ เนื่องจากดึงข้อมูลดาวเทียมไม่สำเร็จ':'กำลังสืบค้นข้อมูล…';sync.textContent=d.error?'ข้อมูลดาวเทียมไม่พร้อม กรุณาลองดึงข้อมูลใหม่':'กำลังสืบค้นข้อมูลดาวเทียม…';return;}
const bands=[{max:5,label:'ไม่เกิน 5 กม.',color:'#674188',count:0},{max:10,label:'มากกว่า 5–10 กม.',color:'#9472B0',count:0},{max:30,label:'มากกว่า 10–30 กม.',color:'#BAA2CE',count:0},{max:50,label:'มากกว่า 30–50 กม.',color:'#DFD2EB',count:0}].filter((b,i,a)=>i===0||a[i-1].max<d.radius);
for(const p of d.points){if(!Number.isFinite(p.nearestDistance)||p.nearestDistance>d.radius)continue;const b=bands.find(b=>p.nearestDistance<=b.max);if(b)b.count++;}
const total=bands.reduce((s,b)=>s+b.count,0);$('fire-proximity-total').textContent=total.toLocaleString('th-TH');let angle=0;const stops=[];for(const b of bands){if(b.count){const start=angle;angle+=b.count/Math.max(1,total)*360;stops.push(b.color+' '+start+'deg '+angle+'deg');}const row=make('div',null,'focus-distance-row'),dot=make('i');dot.style.background=b.color;row.append(dot,make('span',b.label),make('b',b.count.toLocaleString('th-TH')));legend.append(row);}ring.style.background=total?'conic-gradient('+stops.join(',')+')':'#e8eff1';ring.setAttribute('aria-label','จุดความร้อนใกล้นิคมฯ '+total+' จุด: '+bands.map(b=>b.label+' '+b.count+' จุด').join(', '));$('fire-proximity-note').textContent='แบ่งตามระยะห่าง ไม่ใช่ระดับความรุนแรง';sync.textContent=d.source.toUpperCase()+' · ย้อนหลัง '+d.hours+' ชม. · สืบค้น '+stamp(d.fetchedAt)+' น. (ไทย)';
}
window.addEventListener('ieat-thermal-update',e=>proximityChart(e.detail));if(window.ieatThermalSnapshot)proximityChart(window.ieatThermalSnapshot);
// Keep provenance available without expanding the ranking panel by default.
const detailBox=make('details',null,'focus-estate-details'),detailToggle=make('summary','ⓘ รายละเอียดข้อมูล');
detailBox.append(detailToggle);const detailBody=make('div',null,'focus-estate-details-body');
for(const item of [estates.querySelector('#thermal-status'),estates.querySelector('.actions'),estates.querySelector('.source')]){if(item)detailBody.append(item);}
detailBox.append(detailBody);estates.append(detailBox);
// Keep the two data tables visible while the incident form and search stay out of the overview.
const riskTable=dss.querySelector('.operating-zone-section');
if(riskTable){const comparison=make('div',null,'focus-estate-risk-row');areaRow.prepend(comparison);comparison.append(estates,riskTable);}
function resizeMap(){window.ieatSupportMap?.invalidateSize({pan:false});}requestAnimationFrame(resizeMap);window.addEventListener('ieat-support-map-ready',resizeMap);window.addEventListener('resize',resizeMap);
})();
