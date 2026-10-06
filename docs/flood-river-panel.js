(function(){
 'use strict';
 const $=id=>document.getElementById(id),esc=v=>String(v??'–').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const n=v=>v===null||v===undefined||v===''?null:Number.isFinite(Number(v))?Number(v):null;
 const fmt=(v,d=2)=>n(v)===null?'ไม่มีค่า':Number(v).toLocaleString('th-TH',{maximumFractionDigits:d});
 const stamp=v=>Date.parse(/(Z|[+-]\d\d:?\d\d)$/.test(String(v))?v:String(v||'').replace(' ','T')+'+07:00');
 const time=v=>Number.isFinite(stamp(v))?new Date(stamp(v)).toLocaleString('th-TH',{timeZone:'Asia/Bangkok',dateStyle:'short',timeStyle:'short'}):'ไม่ระบุเวลา';
 let rows=[],busy=false,selected='49',river='แม่น้ำเจ้าพระยา',error=false,history=[],historyDays=1;

 let estateScope={active:false,estate:null,name:''};
 function stationDistance(r){
  const e=estateScope.estate,lat=n(r.lat),lon=n(r.lng??r.lon);if(!e||lat===null||lon===null)return null;
  const rad=Math.PI/180,dy=(lat-Number(e.lat))*rad,dx=(lon-Number(e.lon))*rad,h=Math.sin(dy/2)**2+Math.cos(Number(e.lat)*rad)*Math.cos(lat*rad)*Math.sin(dx/2)**2;
  return 12742*Math.asin(Math.sqrt(Math.min(1,h)));
 }
 function inEstateScope(r){return !estateScope.active||!!estateScope.province&&String(r.province||'').replace(/^จังหวัด|^จ\./,'').trim()===estateScope.province;}
 document.addEventListener('ieat-flood-estate-scope',event=>{
  const next=event.detail;
  if(JSON.stringify(next)===JSON.stringify(estateScope))return;
  estateScope=next;selected='';
  const local=rows.filter(r=>inEstateScope(r)&&fresh(r));
  if(local.length&&!local.some(r=>r.river===river))river=local[0].river;
  render();
 });
 function fresh(r){const a=Date.now()-stamp(r.measured_at);return Number.isFinite(a)&&a>=-300000&&a<=21600000}
 function gap(r){return n(r.wl)!==null&&n(r.bank)!==null?r.wl-r.bank:null}
 function nearBank(r){return n(r.percent)!==null&&Number(r.percent)>=90}
 function status(r){const g=gap(r);return g!==null&&g>=0?['#d9364d','ล้นตลิ่ง']:nearBank(r)?['#dd9c20','ใกล้ตลิ่ง']:['#169b8f','ต่ำกว่าตลิ่ง']}
 function gapText(r){const g=gap(r);return g===null?'ไม่มีระดับตลิ่ง':(g>=0?'สูงกว่าตลิ่ง ':'ต่ำกว่าตลิ่ง ')+fmt(Math.abs(g))+' ม.'}
 function focus(r){if(n(r.lat)===null||n(r.lng)===null)return;$('estateFocusMap')?.contentWindow?.postMessage({type:'flood-map-focus',lat:Number(r.lat),lon:Number(r.lng),label:r.name,scale:75000,station:{...r,discharge:r.flow,source_name:'RID GeoJSON'}},location.origin)}
 function trend(r){return r.trend_text?({'เพิ่มขึ้น':'▲ เพิ่มขึ้น','ลดลง':'▼ ลดลง','คงที่':'• คงที่'}[r.trend_text]||r.trend_text):'ไม่ระบุแนวโน้ม'}
 function spark(r){const a=(r.spark||[]).map(n),v=a.filter(x=>x!==null);if(v.length<2)return '<small>ไม่มีกราฟย้อนหลังในชุดข้อมูลนี้</small>';const lo=Math.min(...v),range=Math.max(.01,Math.max(...v)-lo);let paths=[],p='';a.forEach((y,i)=>{if(y===null){if(p)paths.push(p);p='';return}p+=(p?' L':'M')+(i*280/(a.length-1)).toFixed(1)+' '+(42-(y-lo)/range*34).toFixed(1)});if(p)paths.push(p);return '<svg viewBox="0 0 280 48" role="img" aria-label="ระดับน้ำย้อนหลัง 24 ชั่วโมง">'+paths.map(d=>'<path d="'+d+'" fill="none" stroke="#2588a0" stroke-width="2"/>').join('')+'</svg>'}

 function stationScene(r){
  const wl=n(r.wl),bank=n(r.bank),warn=n(r.warn),critical=n(r.crit??r.critical);
  const levels=[wl,bank,warn,critical].filter(v=>v!==null),lo=Math.min(...levels,0)-.5,hi=Math.max(...levels,1)+.5;
  const y=v=>Math.max(112,Math.min(270,270-(v-lo)/(hi-lo)*150)),surface=wl===null?270:y(wl);
  const line=(v,color,label)=>v===null?'':`<path d="M58 ${y(v)} H586" stroke="${color}" stroke-width="1.5" stroke-dasharray="5 5"/><text x="578" y="${y(v)-6}" text-anchor="end" fill="${color}" font-size="12" font-weight="700" paint-order="stroke" stroke="#f2f7fa" stroke-width="3">${label} ${fmt(v)} ม.</text>`;
  const wave=(offset=0)=>`M-160 ${surface+offset} Q-120 ${surface+offset-5} -80 ${surface+offset} T0 ${surface+offset} T80 ${surface+offset} T160 ${surface+offset} T240 ${surface+offset} T320 ${surface+offset} T400 ${surface+offset} T480 ${surface+offset} T560 ${surface+offset} T640 ${surface+offset} T720 ${surface+offset} T800 ${surface+offset} V340 H-160Z`;
  return `<svg class="rp-scene rp-industrial-scene" viewBox="0 0 640 340" role="img" aria-label="ภาพจำลองระดับน้ำสถานี ${esc(r.name)} ${fmt(wl)} ม.รทก. ${esc(gapText(r))}"><defs><linearGradient id="rpSky" x2="0" y2="1"><stop stop-color="#bde5f5"/><stop offset="1" stop-color="#eff8fa"/></linearGradient><linearGradient id="rpWater" x2="0" y2="1"><stop stop-color="#45a9bf"/><stop offset="1" stop-color="#17758f"/></linearGradient><clipPath id="rpCanalClip"><path d="M58 105H586L560 340H82Z"/></clipPath></defs><rect width="640" height="340" fill="url(#rpSky)"/><circle cx="84" cy="35" r="18" fill="#fff0c1"/><g fill="#fff" opacity=".7"><ellipse cx="225" cy="36" rx="46" ry="9"/><ellipse cx="515" cy="30" rx="38" ry="8"/></g><path d="M0 84Q80 54 160 82T320 77T480 82T640 68V122H0Z" fill="#b7d5c5"/><g fill="#8cadbc" stroke="#789aaa" stroke-width="1"><path d="M128 92V61l51-22 51 22v31Z"/><path d="M246 92V58l55-20 55 20v34Z"/><path d="M386 92V62h103v30Z"/></g><g fill="#d8edf3"><path d="M140 70h17v13h-17Zm27 0h17v13h-17Zm27 0h17v13h-17ZM260 69h20v13h-20Zm32 0h20v13h-20Zm32 0h20v13h-20ZM400 71h24v11h-24Zm35 0h24v11h-24Z"/></g><path d="M453 62V18h14v44M474 62V29h10v33" fill="#9ebcc9"/><g fill="#669d80"><circle cx="65" cy="73" r="17"/><circle cx="549" cy="75" r="19"/><circle cx="593" cy="70" r="15"/></g><path d="M0 102H640V116H0Z" fill="#e3e9e8"/><path d="M0 116H58L82 340H0ZM586 116H640V340H560Z" fill="#adc3ca"/><path d="M0 142H61M0 179H65M0 216H70M582 142H640M578 179H640M574 216H640" stroke="#8ba9b5"/>${wl===null?'':`<g clip-path="url(#rpCanalClip)"><path class="rp-wave-back" d="${wave(-3)}" fill="#80cada"/><path class="rp-wave-front" d="${wave()}" fill="url(#rpWater)"/><g class="rp-water-ripples" fill="none" stroke="#b4e4ec" stroke-width="1.5" opacity=".55"><path d="M120 ${surface+30}q20-4 40 0m55 18q30-5 60 0m90-8q20-4 45 0m50 32q22-4 44 0"/></g></g>`}${line(bank,'#476a7c','ตลิ่ง')}${line(critical,'#e64f00','วิกฤต')}${line(warn,'#c98d00','เฝ้าระวัง')}<text x="16" y="324" font-size="10" fill="#fff">ภาพจำลองระดับน้ำ</text></svg>`;
 }
 function stationGauge(r){
  const wl=n(r.wl),bank=n(r.bank),levels=[wl,bank].filter(v=>v!==null),center=bank??wl??0;
  const lo=Math.floor(Math.min(center-2,...levels)),hi=Math.ceil(Math.max(center+2,...levels)),span=hi-lo||1,y=v=>260-(v-lo)/span*232,step=span>8?Math.ceil(span/8):.5,ticks=[];
  for(let value=lo;value<=hi+.001;value+=step)ticks.push(value);
  return `<svg class="rp-gauge" viewBox="0 0 142 290" role="img" aria-label="มาตรวัดระดับ ${fmt(wl)} ม.รทก. ตลิ่ง ${fmt(bank)} ม.รทก."><rect x="46" y="28" width="48" height="232" rx="3" fill="#eef7fa" stroke="#245967" stroke-width="1.6"/>${wl===null?'':`<rect x="47" y="${y(wl)}" width="46" height="${260-y(wl)}" fill="#69c5e4"/>`}${ticks.map((v,i)=>`<path d="M${i%2?75:62} ${y(v)}H93" stroke="#218499" stroke-width="1"/>${i%2?'':`<text x="38" y="${y(v)+4}" text-anchor="end" font-size="12" fill="#245967">${fmt(v,1)}</text>`}`).join('')}${bank===null?'':`<path d="M28 ${y(bank)}H111" stroke="#e6004d" stroke-width="3"/><text x="112" y="${y(bank)-5}" font-size="10" fill="#e6004d">ตลิ่ง</text>`}<rect x="46" y="28" width="48" height="232" rx="3" fill="none" stroke="#245967" stroke-width="1.6"/><text x="70" y="282" text-anchor="middle" font-size="11" fill="#245967">ม.รทก.</text></svg>`;
 }
 function stationCard(r){
  const [color,label]=status(r),location=[r.amphoe,r.province].filter(Boolean).join(' · ');
  return `<button type="button" class="rp-card rp-station-row" style="--rp-status-color:${color}" data-rp-id="${esc(r.code)}" aria-pressed="${String(r.code)===selected}">${stationGauge(r)}<div class="rp-station-content"><div class="rp-station-top"><b>${esc(r.oldcode)} · ${esc(r.name)}</b><em style="background:${color}">${label}</em></div>${estateScope.active?`<small>ห่างจาก ${esc(estateScope.name)} ${stationDistance(r)===null?'ไม่ทราบระยะ':fmt(stationDistance(r),1)+' กม. (ระยะเส้นตรง)'}</small>`:''}${location?`<small class="rp-location">${esc(location)}</small>`:''}<strong>${esc(gapText(r))}</strong><div class="rp-row-trend">${esc(trend(r))}</div><small>ระดับ ${fmt(r.wl)} ม.รทก.${n(r.flow)!==null?' · '+fmt(r.flow,0)+' ลบ.ม./วิ':''}</small><small class="rp-row-time">อัปเดต ${esc(time(r.measured_at))} · ${esc(r.agency||'ThaiWater')}</small></div></button>`;
 }
 function stationSummary(r){
  const g=gap(r),delta=n(r.delta),valid=fresh(r)&&n(r.wl)!==null;
  return `<div class="rp-visual-card"><div class="rp-visual-art">${stationScene(r)}</div><div class="rp-visual-values"><div class="rp-station-name">${esc(r.name)} · ${esc(r.agency||'ThaiWater')} <small>${esc(r.oldcode||'')}</small></div><div class="rp-big-level">${fmt(r.wl)} <span>ม.รทก.</span></div><div class="rp-bank-gap" data-state="${g!==null&&g>=0?'overflow':'normal'}" style="color:${valid?g!==null&&g>=0?'#ed3b21':'#209a8c':'#73858d'}">${esc(gapText(r))}</div><p class="rp-observed">${esc(r.trend_text?trend(r):delta===null?'ไม่มีค่าแนวโน้ม':delta>0?'กำลังเพิ่ม +'+fmt(delta)+' ม. เทียบค่าก่อนหน้า':delta<0?'กำลังลด −'+fmt(Math.abs(delta))+' ม. เทียบค่าก่อนหน้า':'ระดับน้ำทรงตัว')} · วัดเมื่อ ${esc(time(r.measured_at))}</p>${!valid?'<p class="rp-data-note">ข้อมูลย้อนหลัง / ไม่มีค่าตรวจวัดล่าสุด</p>':''}<div class="rp-data-note">${n(r.flow)===null?'ไม่มีข้อมูลอัตราการไหล':'อัตราการไหล '+fmt(r.flow,0)+' ลบ.ม./วิ'}<small>ระดับตลิ่ง ${fmt(r.bank)} ม.รทก.${r.bank_derived?' (คำนวณจากระดับน้ำ − ระยะจากตลิ่ง)':''}</small></div><button id="rpFocus" type="button">ดูสถานีนี้บนแผนที่ ↗</button></div></div>`;
 }


 function riverProfile(list){
  const stations=list.filter(r=>n(r.wl)!==null).sort((a,b)=>river==='แม่น้ำเจ้าพระยา'&&n(a.lat)!==null&&n(b.lat)!==null?Number(b.lat)-Number(a.lat):0),W=1000,H=310,left=48,right=960,top=55,bottom=275;
  if(stations.length<2)return '<p>มีค่าระดับน้ำน้อยกว่า 2 สถานี ยังแสดงกราฟตามแนวแม่น้ำไม่ได้</p>';
  const vals=stations.flatMap(r=>[n(r.wl),n(r.bank)]).filter(v=>v!==null),low=Math.min(0,...vals),high=Math.ceil(Math.max(5,...vals)/5)*5;
  const scale=v=>Math.asinh(v/3),span=scale(high)-scale(low)||1;
  const y=v=>bottom-(scale(v)-scale(low))/span*(bottom-top),x=i=>left+i*(right-left)/(stations.length-1);
  const path=stations.map((r,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(n(r.wl)).toFixed(1)).join(' ');
  let bankPaths=[],p='';stations.forEach((r,i)=>{if(n(r.bank)===null){if(p)bankPaths.push(p);p='';return}p+=(p?'L':'M')+x(i).toFixed(1)+' '+y(n(r.bank)).toFixed(1)+' '});if(p)bankPaths.push(p);
  const metro=stations.findIndex(r=>['CPY014','C.12','WL.PKG.01','CPY015'].includes(r.oldcode)),mx=metro<0?null:x(metro)-20;
  const ticks=[low<0?Math.floor(low):null,0,2,5,10,20,30,40,50,100,200,300,500].filter(v=>v!==null&&v>=low&&v<=high);
  return `<div class="rp-profile-head"><h4>ระดับน้ำตามแนว${esc(river)} จากต้นน้ำถึงปลายน้ำ</h4><p>เส้นสีน้ำตาล = ระดับตลิ่งแต่ละสถานี · สเกลแนวตั้งบีบช่วงสูง · คลิกจุดเพื่อดูสถานีบนแผนที่</p></div><div class="rp-profile-nav"><button type="button" data-rp-scroll="-1" aria-label="เลื่อนกราฟไปต้นน้ำ">← ต้นน้ำ</button><button type="button" data-rp-scroll="1" aria-label="เลื่อนกราฟไปปลายน้ำ">ปลายน้ำ →</button></div><div class="rp-profile-scroll" tabindex="0" role="region" aria-label="กราฟแนวแม่น้ำ เลื่อนซ้ายขวาเพื่อดูสถานี"><svg class="rp-profile-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="กราฟระดับน้ำและตลิ่งตามลำดับสถานี ${esc(river)}"><defs><linearGradient id="rpProfileWater" x2="0" y2="1"><stop stop-color="#92b9c7" stop-opacity=".65"/><stop offset="1" stop-color="#6c929f" stop-opacity=".7"/></linearGradient></defs>${mx===null?'':`<rect x="${mx}" y="${top}" width="${right-mx}" height="${bottom-top}" rx="10" fill="#e0ecf2"/><text x="${mx+10}" y="${top+15}" fill="#1575a5" font-size="11">กรุงเทพฯ และปริมณฑล</text>`}${ticks.map(t=>`<path d="M${left} ${y(t)}H${right+20}" stroke="#e3eaee"/><text x="${left-9}" y="${y(t)+4}" text-anchor="end" fill="#7895a5" font-size="10">${fmt(t,0)}</text>`).join('')}<text x="20" y="40" fill="#7895a5" font-size="10">ม.รทก.</text><path d="${path} L${right} ${bottom}H${left}Z" fill="url(#rpProfileWater)"/>${bankPaths.map(d=>`<path d="${d}" stroke="#a47b50" stroke-width="2" fill="none"/>`).join('')}<path class="rp-profile-motion" d="${path}" stroke="#2682a6" stroke-width="2" stroke-dasharray="2 6" fill="none"/>${stations.map((r,i)=>{const color=status(r)[0],yy=y(n(r.wl)),label=i%2===0||i===stations.length-1||r.oldcode==='WL.PKG.01';return `<g class="rp-node" data-rp-id="${esc(r.code)}" role="button" tabindex="0" aria-label="${esc(r.name)} ระดับ ${fmt(r.wl)} ม.รทก. ${esc(gapText(r))}"><title>${esc(r.name)} · ระดับ ${fmt(r.wl)} · ตลิ่ง ${fmt(r.bank)} ม.รทก.</title><circle cx="${x(i)}" cy="${yy}" r="${String(r.code)===selected?6:4.5}" fill="${color}" stroke="#fff" stroke-width="1.7"/>${label?`<text x="${x(i)}" y="${Math.max(top-12,yy-(i%4===0?14:26))}" text-anchor="${i===0?'start':i===stations.length-1?'end':'middle'}" fill="#254456" font-size="10">${esc(String(r.name).length>16?String(r.name).slice(0,15)+'…':r.name)}</text>`:''}</g>`}).join('')}<text x="${left}" y="299" font-size="11" fill="#6e8a9c">${river==='แม่น้ำเจ้าพระยา'?'นครสวรรค์':esc(stations[0].name)}</text><text x="${right}" y="299" text-anchor="end" font-size="11" fill="#6e8a9c">${river==='แม่น้ำเจ้าพระยา'?'ปลายน้ำ / ปากอ่าว':esc(stations[stations.length-1].name)}</text></svg></div>`;
 }


 function historyChart(){
  const cutoff=Date.now()-historyDays*86400000,entries=history.filter(s=>stamp(s.time)>=cutoff).map(s=>({time:s.time,stations:s.stations.filter(r=>r.river===river&&(!estateScope.active||rows.some(v=>inEstateScope(v)&&String(v.code)===String(r.code))))})).filter(s=>s.stations.length),points=[];
  entries.forEach(s=>{const values=s.stations.filter(r=>n(r.wl)!==null),mean=values.reduce((a,r)=>a+Number(r.wl),0)/values.length;if(!values.length)return;points.push({label:time(s.time),at:stamp(s.time),mean,warn:values.filter(r=>!(gap(r)!==null&&gap(r)>=0)&&(n(r.warn)!==null?Number(r.wl)>=Number(r.warn):Number(r.situation)===4)).length,crit:values.filter(r=>gap(r)!==null&&gap(r)>=0).length})});
  let approximate=false;
  if(points.length<2&&historyDays===1){
   approximate=true;points.length=0;const stations=rows.filter(r=>inEstateScope(r)&&(estateScope.active||r.river===river)&&Array.isArray(r.spark)),count=Math.max(0,...stations.map(r=>r.spark.length));
   for(let i=0;i<count;i++){const valid=stations.map(r=>({...r,wl:n(r.spark[i])})).filter(r=>r.wl!==null);if(!valid.length){points.push(null);continue}points.push({label:'ตัวอย่าง '+(i+1),mean:valid.reduce((a,r)=>a+r.wl,0)/valid.length,warn:valid.filter(r=>n(r.warn)!==null&&r.wl>=r.warn&&!(gap(r)!==null&&gap(r)>=0)).length,crit:valid.filter(r=>gap(r)!==null&&gap(r)>=0).length})}
  }
  const usable=points.filter(Boolean);
  $('rpHistoryNote').textContent=approximate?'ข้อมูลย้อนหลัง 24 ชม. ตามลำดับตัวอย่างต้นทาง · ต้นทางไม่ระบุเวลาแต่ละตัวอย่าง · จำนวนใกล้ตลิ่งนับเฉพาะสถานีที่มีค่าเกณฑ์':'ย้อนหลัง '+(historyDays===1?'24 ชั่วโมง':historyDays+' วัน')+' · '+usable.length+' รอบ · ช่วงที่ไม่มีข้อมูลเว้นไว้';
  if(usable.length<2){$('rpHistoryPlot').innerHTML='<p class="rp-empty">ยังมีข้อมูลย้อนหลังไม่พอสำหรับช่วงนี้ ระบบเริ่มเก็บข้อมูลต่อเนื่องแล้ว</p>';$('rpHistoryRows').innerHTML='<tr><td colspan="4">ยังมีข้อมูลย้อนหลังไม่พอสำหรับช่วงนี้</td></tr>';return}
  const W=1000,H=330,L=65,R=925,T=35,B=280,lo=Math.min(...usable.map(p=>p.mean)),hi=Math.max(...usable.map(p=>p.mean)),pad=Math.max(.01,(hi-lo)*.15),y=v=>B-(v-lo+pad)/(hi-lo+pad*2)*(B-T),maxCount=Math.max(1,...usable.map(p=>p.warn+p.crit)),barWidth=Math.min(40,Math.max(2,(R-L)/points.length*.72)),x=i=>points[i]?.at?L+Math.max(0,Math.min(1,(points[i].at-cutoff)/(historyDays*86400000)))*(R-L):L+(i+.5)*(R-L)/points.length;
  let paths=[],path='';points.forEach((p,i)=>{if(!p){if(path)paths.push(path);path='';return}path+=(path?'L':'M')+x(i)+' '+y(p.mean)+' '});if(path)paths.push(path);
  $('rpHistoryPlot').innerHTML=`<svg class="rp-history-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="ระดับน้ำเฉลี่ยและจำนวนสถานีเกินเกณฑ์ย้อนหลัง"><text x="15" y="18" font-size="11" fill="#617d91">ม.รทก.</text><text x="${R}" y="18" text-anchor="end" font-size="11" fill="#617d91">จำนวนสถานี</text>${[0,.25,.5,.75,1].map(f=>`<path d="M${L} ${B-f*(B-T)}H${R}" stroke="#dce6ec"/><text x="${L-9}" y="${B-f*(B-T)+4}" text-anchor="end" font-size="11" fill="#617d91">${fmt(lo-pad+f*(hi-lo+pad*2))}</text><text x="${R+10}" y="${B-f*(B-T)+4}" font-size="11" fill="#617d91">${fmt(f*maxCount,0)}</text>`).join('')}${points.map((p,i)=>p?`<rect x="${x(i)-barWidth/2}" y="${B-p.warn/maxCount*(B-T)}" width="${barWidth}" height="${p.warn/maxCount*(B-T)}" rx="2" fill="#ffaa00"/><rect x="${x(i)-barWidth/2}" y="${B-(p.warn+p.crit)/maxCount*(B-T)}" width="${barWidth}" height="${p.crit/maxCount*(B-T)}" rx="2" fill="#e64f00"/>${i%Math.max(1,Math.ceil(points.length/6))===0?`<text x="${x(i)}" y="303" text-anchor="middle" font-size="10" fill="#617d91">${esc(p.label)}</text>`:''}`:'').join('')}${[0,.25,.5,.75,1].map(f=>`<text x="${L+f*(R-L)}" y="322" text-anchor="middle" font-size="10" fill="#617d91">${esc(time(new Date(cutoff+f*historyDays*86400000).toISOString()))}</text>`).join('')}${paths.map(d=>`<path d="${d}" fill="none" stroke="#008558" stroke-width="2.5"/>`).join('')}</svg>`;
  $('rpHistoryRows').innerHTML=usable.map(p=>`<tr><td>${esc(p.label)}</td><td>${fmt(p.mean)}</td><td>${p.warn}</td><td>${p.crit}</td></tr>`).join('');
 }
 function flowChart(){
  const list=rows.filter(v=>inEstateScope(v)&&v.river===river),r=(estateScope.active?list.find(v=>n(v.flow)!==null):river==='แม่น้ำเจ้าพระยา'?byCode('C.13'):river==='แม่น้ำป่าสัก'?byCode('S.26'):list.find(v=>n(v.flow)!==null))||null,title=estateScope.active?'อัตราการไหลในพื้นที่ · '+estateScope.name:river==='แม่น้ำเจ้าพระยา'?'น้ำที่เขื่อนเจ้าพระยาระบาย':river==='แม่น้ำป่าสัก'?'น้ำที่ท้ายเขื่อนพระรามหก':'อัตราการไหล · '+river; $('rpFlowTitle').textContent=title; const today=new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Bangkok'}),days=Array.from({length:14},(_,i)=>new Date(Date.parse(today+'T12:00:00+07:00')-(13-i)*86400000).toLocaleDateString('en-CA',{timeZone:'Asia/Bangkok'})),daily=new Map();
  const refCode=r?.oldcode;history.forEach(s=>{const sample=s.stations.find(v=>v.river===river&&refCode&&v.oldcode===refCode);if(!sample||n(sample.flow_max??sample.flow)===null)return;const r=sample;const d=new Date(stamp(s.time)).toLocaleDateString('en-CA',{timeZone:'Asia/Bangkok'});if(!daily.has(d)||daily.get(d).value<Number(r.flow_max??r.flow))daily.set(d,{value:Number(r.flow_max??r.flow),time:r.measured_at})});
  if(r&&n(r.flow)!==null){const d=new Date(stamp(r.measured_at)).toLocaleDateString('en-CA',{timeZone:'Asia/Bangkok'});if(!daily.has(d)||daily.get(d).value<Number(r.flow))daily.set(d,{value:Number(r.flow),time:r.measured_at})}
  const prior=new Date(Date.parse(today+'T12:00:00+07:00')-86400000).toLocaleDateString('en-CA',{timeZone:'Asia/Bangkok'}),now=daily.get(today),prev=daily.get(prior),diff=now&&prev?now.value-prev.value:null;
  $('rpFlowValue').innerHTML=(r&&n(r.flow)!==null?fmt(r.flow,0):'ไม่มีค่า')+' <small>ลบ.ม./วินาที</small>';
  $('rpFlowChange').textContent=diff===null?'ยังไม่มีค่าเทียบวันก่อน':(diff>0?'+':'')+fmt(diff,0)+' จากวันก่อน';
  const bangkok=!estateScope.active&&river==='แม่น้ำเจ้าพระยา'?byCode('C.12'):list.slice().reverse().find(v=>n(v.flow)!==null);$('rpDownstreamLabel').textContent=river==='แม่น้ำเจ้าพระยา'?'อัตราการไหลผ่านกรุงเทพฯ':'อัตราการไหล · '+(bangkok?.name||river);$('rpBangkokFlow').textContent=bangkok&&n(bangkok.flow)!==null?fmt(bangkok.flow,0)+' ลบ.ม./วินาที · '+time(bangkok.measured_at):'ไม่มีข้อมูลอัตราการไหลของสายน้ำที่เลือก';
  const max=Math.max(1,...[...daily.values()].map(v=>v.value)),W=1000,H=285,L=18,B=240,bw=54,step=69;
  $('rpFlowPlot').innerHTML=`<svg class="rp-history-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)} 14 วันย้อนหลัง">${days.map((d,i)=>{const v=daily.get(d),previous=daily.get(days[i-1]),delta=v&&previous?v.value-previous.value:null,x=L+i*step,h=v?v.value/max*165:0;return `<g><title>${d}: ${v?fmt(v.value,0)+' ลบ.ม./วินาที':'ไม่มีข้อมูล'}</title>${v?`<rect x="${x}" y="${B-h}" width="${bw}" height="${h}" rx="7" fill="${delta>0?'#ffaa00':'#008558'}"/><text x="${x+bw/2}" y="${B-h-8}" text-anchor="middle" font-size="12" font-weight="700" fill="#e6004d">${fmt(v.value,0)}</text>${delta===null?'':`<text x="${x+bw/2}" y="${B-h-25}" text-anchor="middle" font-size="11" fill="#e6004d">${delta>0?'+':''}${fmt(delta,0)}</text>`}`:`<path d="M${x} ${B}h${bw}" stroke="#d6e3e9" stroke-width="2"/><text x="${x+bw/2}" y="${B-10}" text-anchor="middle" font-size="10" fill="#8ca1af">ไม่มีข้อมูล</text>`}<text x="${x+bw/2}" y="265" text-anchor="middle" font-size="11" fill="#607d91">${new Date(d+'T12:00:00+07:00').toLocaleDateString('th-TH',{timeZone:'Asia/Bangkok',day:'numeric',month:'short'})}</text></g>`}).join('')}</svg>`;
  $('rpFlowNote').textContent=(r?'สถานี '+r.oldcode+' '+r.name:'ไม่มีสถานีอัตราการไหลใน '+river)+' · '+(r?time(r.measured_at):'ไม่มีเวลาตรวจวัด')+' · แท่งแสดงค่าสูงสุดจากรอบที่เก็บได้ของแต่ละวัน · วันที่ไม่มีข้อมูลเว้นไว้';
 }

 function byCode(c){return rows.find(r=>inEstateScope(r)&&(estateScope.active||r.river===river)&&r.oldcode===c)}
 function node(r,x,y,label){const color=r?status(r)[0]:'#899b9e';return `<g ${r?`data-rp-id="${esc(r.code)}" role="button" tabindex="0" aria-label="ดู ${esc(r.name)} บนแผนที่"`:''} class="rp-node"><circle cx="${x}" cy="${y}" r="8" fill="${color}" stroke="white" stroke-width="2"/><text x="${x+17}" y="${y-2}" font-size="11" font-weight="600">${esc(label||r?.oldcode)} ${esc(r?.name||'')}</text><text x="${x+17}" y="${y+15}" font-size="14" font-weight="700">${r&&n(r.flow)!==null?fmt(r.flow,0)+' ลบ.ม./วิ':r?esc(gapText(r)):'ไม่มีสถานีในชุดข้อมูล'}</text><text x="${x+17}" y="${y+31}" font-size="10">${r&&n(r.flow)!==null?esc(gapText(r)):r?'ระดับ '+fmt(r.wl)+' ม.รทก.':''}</text></g>`}
 function graph(list){
  const stations=list;
  if(!stations.length)return '<p>ไม่มีสถานีในสายน้ำที่เลือก</p>';
  const H=100+stations.length*86,last=55+(stations.length-1)*86;
  return `<svg viewBox="0 0 500 ${H}" class="rp-flow" aria-label="ผังสถานี ${esc(river)}"><text x="20" y="22" font-size="14" font-weight="700">${esc(river)}</text><path d="M30 44 L30 ${last+24}" stroke="#579cba" stroke-width="10" fill="none"/><path d="M30 44 L30 ${last+24}" class="rp-motion" stroke="white" stroke-width="2" fill="none" stroke-dasharray="2 14"/>${stations.map((r,i)=>node(r,30,55+i*86,r.oldcode)).join('')}</svg>`;
 }

 let rankedDams=[],mainRiver='';
 const forecastStations=[['P1','P.1 · สะพานนวรัฐ','เชียงใหม่'],['P17','P.17 · บ้านท่างิ้ว','นครสวรรค์'],['Y1C','Y.1C · บ้านน้ำโค้ง','แพร่'],['N1','N.1 · หน้าสำนักงานป่าไม้','น่าน'],['N8B','N.8B · บางมูลนาก','พิจิตร'],['N67','N.67 · วัดเกยไชยเหนือ','นครสวรรค์'],['C2','C.2 · ค่ายจิรประวัติ','นครสวรรค์'],['E18','E.18 · บ้านท่าสะแบง','ร้อยเอ็ด'],['E20A','E.20A · บ้านฟ้าหยาด','ยโสธร'],['M7','M.7 · สะพานเสรีประชาธิปไตย','อุบลราชธานี'],['KGT3','Kgt.3 · สะพานต้นน้ำบางปะกง','ปราจีนบุรี']];
 function rankRow(r,value,note,attribute){
  return '<button type="button" class="rp-rank-card" '+attribute+'><div><strong>'+fmt(value,0)+'</strong><small>ลบ.ม./วินาที</small></div><div><b>'+esc(r.name)+'</b><small>'+esc(note)+'</small></div></button>';
 }
 function renderWaterExtras(){
  if(!$('rpFlowRanks'))return;
  const local=rows.filter(v=>fresh(v)&&inEstateScope(v));
  const flowing=local.filter(v=>n(v.flow)!==null&&n(v.flow)>=0).sort((a,b)=>Number(b.flow)-Number(a.flow));
  $('rpFlowRanks').innerHTML=flowing.slice(0,5).map(r=>rankRow(r,r.flow,(r.oldcode||'')+' · '+time(r.measured_at),'data-rp-id="'+esc(r.code)+'"')).join('')||'<p>ไม่มีอัตราการไหลล่าสุดในพื้นที่ที่เลือก</p>';
  const damRows=rankedDams.filter(r=>n(r.released)!==null&&n(r.released)>=0&&Date.now()-stamp(r.measured_at+'T00:00:00')<=72*3600000).map(r=>({...r,rate:Number(r.released)*1000000/86400}));
  const barrages=local.filter(r=>['C.13','S.26'].includes(r.oldcode)&&n(r.flow)!==null).map(r=>({...r,rate:Number(r.flow),barrage:true}));
  $('rpDamRanks').innerHTML=[...damRows,...barrages].sort((a,b)=>b.rate-a.rate).slice(0,5).map(r=>rankRow({...r,name:r.barrage?(r.oldcode==='C.13'?'เขื่อนเจ้าพระยา':'เขื่อนพระรามหก'):r.name},r.rate,r.barrage?'สถานีท้ายเขื่อน · '+time(r.measured_at):'อัตราเฉลี่ยรายวัน · '+r.measured_at,r.barrage?'data-rp-id="'+esc(r.code)+'"':'data-related-dam="'+esc(r.id)+'"')).join('')||'<p>ไม่มีค่าระบายน้ำในพื้นที่ที่เลือก</p>';
  const rivers=[...new Set(local.map(r=>r.river).filter(Boolean))].sort();
  if(!rivers.includes(mainRiver))mainRiver=rivers.includes('แม่น้ำเจ้าพระยา')?'แม่น้ำเจ้าพระยา':rivers[0]||'';
  $('rpMainRiver').innerHTML=rivers.map(v=>'<option '+(v===mainRiver?'selected':'')+'>'+esc(v)+'</option>').join('');
  const chain=local.filter(r=>r.river===mainRiver).sort((a,b)=>(n(a.order)??999)-(n(b.order)??999));
  const saved=river;river=mainRiver;$('rpMainGraph').innerHTML=graph(chain);river=saved;
  const charts=forecastStations.filter(r=>!estateScope.active||r[2]===estateScope.province);
  $('rpForecastCards').innerHTML=charts.map(r=>{const url='https://faonam.com/api/rid/ann/'+r[0]+'.jpg?v='+Math.floor(Date.now()/3600000);return '<article class="rp-forecast-card"><h4>'+esc(r[1])+'</h4><small>จังหวัด'+esc(r[2])+'</small><a href="'+url+'" target="_blank" rel="noopener"><img src="'+url+'" alt="กราฟคาดการณ์ ANNs '+esc(r[1])+'" loading="lazy"></a><small>กรมชลประทาน · คาดการณ์ใช้ตามวันที่ที่ระบุในกราฟ · คลิกภาพเพื่อขยาย</small></article>'}).join('')||'<p>ไม่มีสถานีคาดการณ์ ANNs ในจังหวัดที่เลือก</p>';
 }
 document.addEventListener('ieat-dam-flow-data',event=>{rankedDams=event.detail||[];renderWaterExtras()});

 function render(){
  if(!$('riverSidePanel'))return;rows=rows.filter(r=>fresh(r));const list=rows.filter(r=>inEstateScope(r)&&r.river===river).sort((a,b)=>(n(a.order)||999)-(n(b.order)||999)),r=list.find(r=>String(r.code)===selected)||list[0];if(r)selected=String(r.code);
  $('rpRiver').innerHTML=[...new Set(rows.filter(inEstateScope).map(r=>r.river).filter(Boolean))].map(v=>`<option ${v===river?'selected':''}>${esc(v)}</option>`).join('');
  $('rpStation').innerHTML=list.map(v=>`<option value="${esc(v.code)}" ${String(v.code)===selected?'selected':''}>${esc(v.oldcode)} · ${esc(v.name)}</option>`).join('');
  $('rpUpdated').textContent=error?'โหลดรอบใหม่ไม่สำเร็จ · แสดงชุดข้อมูลเดิม':estateScope.active&&!list.length?'ไม่พบสถานี RID ที่มีพิกัดภายใน 30 กม. จาก '+estateScope.name:`ข้อมูล ${time(list.reduce((a,r)=>stamp(r.measured_at)>stamp(a)?r.measured_at:a,list[0]?.measured_at))} · คลิกจุดหรือการ์ดเพื่อดูในแผนที่`;
  const overflow=list.filter(v=>gap(v)>=0).length,near=list.filter(v=>gap(v)<0&&nearBank(v)).length;
  flowChart();$('rpHistoryPanel').hidden=true;renderWaterExtras();
  $('rpSummary').innerHTML=r?stationSummary(r):'ไม่พบข้อมูลสถานีในพื้นที่ที่เลือก';
  $('rpCards').innerHTML=list.length?list.map(stationCard).join(''):'<p>ไม่พบสถานีระดับน้ำล่าสุดในจังหวัดที่เลือก</p>';
  document.dispatchEvent(new CustomEvent('ieat-river-scope',{detail:{river,stations:list.map(v=>({code:v.code,oldcode:v.oldcode,lat:n(v.lat),lon:n(v.lng??v.lon)}))}}));
  $('rpFocus')?.addEventListener('click',()=>focus(r));
 }
 async function refresh(){if(busy)return;busy=true;try{rows=await window.IEAT_RID.load();history=[];error=false;if(!rows.some(r=>r.river===river))river=rows.find(fresh)?.river||rows[0]?.river||'';render()}catch(e){error=true;render();if(!rows.length)$('rpUpdated').textContent='โหลดข้อมูล RID ไม่สำเร็จ'}finally{busy=false}}
 function mount(){const col=document.querySelector('.ef-data-column');if(!col){setTimeout(mount,100);return}const style=document.createElement('style');style.textContent=`.rp-titlebar{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}.rp-titlebar h2{margin:0!important}.rp-titlebar #rpMapActions{margin-left:auto}#riverSidePanel{background:#edf4f3;border:1px solid #d6e3e3;border-radius:20px;padding:18px;margin-bottom:16px;font-size:13px}#riverSidePanel h2{font-size:24px;margin:0 0 5px}#riverSidePanel h3{font-size:16px;margin:0 0 12px}#riverSidePanel p{font-size:12px;line-height:1.7;margin:8px 0}.rp-controls{display:flex;gap:8px;margin:12px 0}.rp-controls select{width:100%;min-width:0;background:white;border:1px solid #c6d8d9;border-radius:8px;padding:9px;font:inherit}#rpRefresh,#rpFocus{background:#e1eef0;border:1px solid #bad3d7;border-radius:8px;padding:8px 12px;font:inherit;cursor:pointer}#rpGraph{background:#fbfdfd;border:1px solid #cadcde;border-radius:14px;padding:12px 6px}.rp-flow{width:100%;display:block}.rp-node{cursor:pointer}.rp-node:hover circle,.rp-node:focus circle{stroke:#112c38;stroke-width:3}.rp-motion{animation:rpMove 1.2s linear infinite}@keyframes rpMove{to{stroke-dashoffset:-16}}@media(prefers-reduced-motion:reduce){.rp-motion{animation:none}}.rp-key,.rp-counts{display:flex;gap:12px;flex-wrap:wrap;margin:10px 0;font-size:11px}.rp-key i{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:4px}.rp-summary{background:white;border:1px solid #ccdcdf;border-radius:12px;padding:15px;margin:14px 0}.rp-summary-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.rp-summary strong{display:block;font-size:18px;margin-top:4px}.rp-summary small{font-size:11px}.rp-summary svg{width:100%;height:62px;margin-top:12px}.rp-card{display:block;width:100%;text-align:left;background:#fff;border:1px solid #d0dfe0;border-radius:10px;padding:12px;margin:8px 0;font:inherit;cursor:pointer}.rp-card[aria-pressed=true]{outline:2px solid #318b9c}.rp-card span{display:flex;justify-content:space-between;gap:8px;align-items:start}.rp-card b{font-size:12px}#estateFocusDashboard #riverSidePanel .rp-card em{font-style:normal;color:white!important;font-size:10px;padding:3px 6px;border-radius:8px;white-space:nowrap}.rp-card strong,.rp-card small{display:block;margin-top:5px}.rp-card svg{width:100%;height:40px}.rp-card:hover{background:#f5fafb}.rp-note{border-top:1px solid #d7e4e5;padding-top:8px}.rp-list-title{margin-top:20px!important}.rp-extra-panel{background:#f8fbfd;border:1px solid #d0dde3;border-radius:22px;padding:18px 14px;margin:16px 0;box-shadow:0 6px 16px #16334112}.rp-flow-header,.rp-history-head{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap}.rp-flow-header>div:last-child{max-width:210px;font-size:12px}.rp-flow-header strong{display:block;font-size:13px;margin-top:6px}.rp-flow-value{font-size:40px;font-weight:700;margin:8px 0}.rp-flow-value small{font-size:13px}.rp-extra-scroll{overflow-x:auto;scrollbar-width:thin}.rp-history-svg{width:100%;min-width:0;height:auto;display:block;margin:14px 0}.rp-periods{display:flex;gap:4px;align-items:center;background:#e4edf1;border-radius:24px;padding:4px}.rp-periods button{border:0;background:transparent;border-radius:20px;font:inherit;padding:8px 10px;cursor:pointer}.rp-periods button[aria-pressed=true]{background:#fff;box-shadow:0 1px 4px #12334120}.rp-history-key{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;font-size:11px;margin:14px 0}.rp-empty{padding:25px 8px;text-align:center}.rp-extra-panel table{width:100%;border-collapse:collapse;font-size:12px}.rp-extra-panel th,.rp-extra-panel td{padding:8px;border-bottom:1px solid #d9e4ea;text-align:left}.rp-profile{background:#f8fbfd;border:1px solid #d0dde3;border-radius:22px;box-shadow:0 6px 16px #16334112;padding:14px 12px;margin:12px 0 18px;overflow:hidden}.rp-profile-head h4{margin:0;font-size:15px;color:#5f7d91!important}.rp-profile-head p{color:#7895a5!important;font-size:11px!important}.rp-profile-scroll{overflow-x:auto;scrollbar-width:thin}.rp-profile-svg{width:100%;min-width:650px;height:auto;display:block}#estateFocusDashboard #rpProfile svg text{fill:revert!important}#estateFocusDashboard #rpSummary .rp-station-name,#estateFocusDashboard #rpSummary .rp-station-name small,#estateFocusDashboard #rpSummary .rp-big-level span,#estateFocusDashboard #rpSummary .rp-observed{color:#607d91!important}#estateFocusDashboard #rpSummary .rp-bank-gap{color:inherit!important}#estateFocusDashboard #rpSummary .rp-data-note{color:#244355!important}#estateFocusDashboard #rpSummary .rp-data-note small{color:#607d91!important}#rpSummary .rp-visual-art{align-items:center}#rpSummary .rp-scene{height:auto;min-height:0;aspect-ratio:2/1}#rpSummary .rp-visual-card{grid-template-columns:1fr}#rpSummary .rp-visual-values{padding:18px}#estateFocusDashboard #rpSummary svg text{fill:revert!important}@media(min-width:1700px){#rpSummary .rp-visual-card{grid-template-columns:1.7fr 1fr}}#rpSummary.rp-summary{padding:0;border:1px solid #d0dde3;border-radius:22px;overflow:hidden;background:#f8fbfd;box-shadow:0 8px 18px #16334112}.rp-visual-card{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(230px,1fr);align-items:stretch}.rp-visual-art{display:flex;background:#90c6dc;overflow:hidden}#rpSummary .rp-scene{width:100%;height:100%;min-height:260px;margin:0;display:block;object-fit:cover}.rp-visual-values{padding:24px 20px;color:#12232d}.rp-station-name{font-size:13px;color:#5f7d91;font-weight:600}.rp-station-name small{display:block;margin-top:4px}.rp-big-level{font-size:clamp(36px,5vw,62px);font-weight:700;line-height:1.15;margin:16px 0 8px;overflow-wrap:anywhere}.rp-big-level span{font-size:14px;color:#607d91;font-weight:500}.rp-bank-gap{font-size:20px;font-weight:700}.rp-visual-values .rp-observed{font-size:13px;color:#607d91;line-height:1.6;margin:10px 0}.rp-data-note{background:#e1edf3;border-radius:14px;padding:12px;color:#244355;font-size:13px;line-height:1.6;margin:12px 0}.rp-data-note small{display:block;color:#607d91;font-size:11px;margin-top:5px}@media(max-width:1200px){.rp-visual-card{grid-template-columns:1fr}#rpSummary .rp-scene{height:auto;min-height:0}.rp-visual-values{padding:18px}.rp-big-level{font-size:48px}}
#estateFocusDashboard #riverSidePanel{background:#fff;font-family:"Sarabun","TH Sarabun New",sans-serif;font-size:13px;line-height:1.5}
#estateFocusDashboard #riverSidePanel h2,#estateFocusDashboard #riverSidePanel h3,#estateFocusDashboard #riverSidePanel h4{font-size:15px;font-weight:700;line-height:1.45}
#estateFocusDashboard #riverSidePanel p,#estateFocusDashboard #riverSidePanel small{font-size:11px;line-height:1.65}
#estateFocusDashboard #riverSidePanel button,#estateFocusDashboard #riverSidePanel select{font-family:inherit;font-size:12px}
#estateFocusDashboard #riverSidePanel .rp-list-title,#estateFocusDashboard #rpFlowPanel h3,#estateFocusDashboard #rpHistoryPanel h3{color:#00387B!important}
#estateFocusDashboard #rpProfile h4{color:#109DC0!important}
#estateFocusDashboard #riverSidePanel .rp-extra-panel,#estateFocusDashboard #rpProfile,#estateFocusDashboard #rpGraph{background:#fff}
#estateFocusDashboard #riverSidePanel .rp-card b{font-size:13px;font-weight:600}
#estateFocusDashboard #riverSidePanel .rp-card strong{font-size:24px}
#estateFocusDashboard #rpSummary .rp-big-level{font-size:28px;line-height:1.2}
#estateFocusDashboard #rpSummary .rp-bank-gap{font-size:24px}
#estateFocusDashboard #rpSummary .rp-station-name{font-size:13px}
#estateFocusDashboard #rpFlowValue{font-size:28px}
#estateFocusDashboard #rpHistoryPlot svg text,#estateFocusDashboard #rpFlowPlot svg text{fill:revert!important}
#estateFocusDashboard #rpHistoryPanel table{font-family:inherit;font-size:11px;width:100%;border-collapse:collapse;min-width:420px}
#estateFocusDashboard #rpHistoryPanel th,#estateFocusDashboard #rpHistoryPanel .rp-history-table h4{background:#f1e5f8;color:#532E7C!important;padding:10px 8px;text-align:left}
#estateFocusDashboard #rpHistoryPanel td{padding:12px 8px;border-bottom:1px solid #edf0f3}
.rp-history-table h4{margin:16px 0 0;border-radius:8px 8px 0 0}
.rp-history-key i{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
.rp-profile-nav{display:flex;justify-content:space-between;gap:8px;margin:10px 0}
#estateFocusDashboard .rp-profile-nav button{background:#f1e5f8;color:#532E7C!important;border:1px solid #ddc1eb;border-radius:8px;padding:8px 12px}
.rp-profile-scroll{overflow-x:auto;cursor:grab;touch-action:pan-x pan-y;overscroll-behavior-x:contain}
.rp-profile-scroll.rp-dragging{cursor:grabbing;user-select:none}
.rp-profile-svg{min-width:1000px}
.rp-profile-motion{animation:rpProfileMove 1.5s linear infinite}
@keyframes rpProfileMove{to{stroke-dashoffset:-16}}
@media(prefers-reduced-motion:reduce){.rp-profile-motion{animation:none}}

#estateFocusDashboard #riverSidePanel{container-type:inline-size}
#estateFocusDashboard #rpSummary .rp-visual-card{grid-template-columns:1fr}
#estateFocusDashboard #rpSummary .rp-scene{height:auto;min-height:0;aspect-ratio:640/340}
@container(min-width:700px){#estateFocusDashboard #rpSummary .rp-visual-card{grid-template-columns:1.5fr 1fr}#estateFocusDashboard #rpSummary .rp-scene{height:100%;min-height:260px}}
#estateFocusDashboard #rpSummary .rp-visual-values{padding:18px 14px;background:#fff}
#estateFocusDashboard #rpSummary .rp-visual-art{background:#e6f5fa}
#estateFocusDashboard #rpSummary .rp-big-level{font-size:36px;margin:12px 0}
#estateFocusDashboard #rpSummary .rp-bank-gap{font-size:18px;color:#008558!important}
#estateFocusDashboard #rpSummary .rp-bank-gap[data-state="overflow"]{color:#e64f00!important}
.rp-wave-front{animation:rpWaveFront 6s linear infinite}.rp-wave-back{animation:rpWaveBack 9s linear infinite}.rp-water-ripples{animation:rpRipple 4s ease-in-out infinite}
@keyframes rpWaveFront{to{transform:translateX(160px)}}@keyframes rpWaveBack{to{transform:translateX(-160px)}}@keyframes rpRipple{50%{transform:translateX(12px);opacity:.3}}
#estateFocusDashboard #riverSidePanel .rp-station-row{display:grid;grid-template-columns:42px minmax(0,1fr);gap:12px;border:1px solid #d5e2e5;border-radius:14px;padding:14px;background:#fafdfd;box-shadow:none;margin:10px 0}
#estateFocusDashboard #riverSidePanel .rp-station-row:hover{background:#f2f8fa;border-color:#adcad6}
#estateFocusDashboard #riverSidePanel .rp-station-row[aria-pressed=true]{outline:2px solid #532E7C;background:#f9f5fc}
#estateFocusDashboard #riverSidePanel .rp-gauge{width:42px;height:126px;margin:0}
#estateFocusDashboard #riverSidePanel .rp-station-top{display:flex;align-items:start;justify-content:space-between;gap:12px}
#estateFocusDashboard #riverSidePanel .rp-station-top b{font-size:13px;color:#163c49!important}
#estateFocusDashboard #riverSidePanel .rp-station-top em{border-radius:16px;font-size:10px;padding:5px 9px;flex:none}
#estateFocusDashboard #riverSidePanel .rp-station-content strong{font-size:18px;color:#163c49!important;margin-top:5px}
#estateFocusDashboard #riverSidePanel .rp-row-trend{font-size:13px;color:#28616c!important;margin:5px 0;font-weight:600}
#estateFocusDashboard #riverSidePanel .rp-row-time,#estateFocusDashboard #riverSidePanel .rp-location{color:#607d91!important}
@media(max-width:520px){#estateFocusDashboard #rpSummary .rp-visual-card{grid-template-columns:1fr}#estateFocusDashboard #rpSummary .rp-scene{min-height:0;height:auto;aspect-ratio:640/340}.rp-station-top{flex-wrap:wrap}}
@media(prefers-reduced-motion:reduce){.rp-wave-front,.rp-wave-back,.rp-water-ripples{animation:none}}

#estateFocusDashboard #riverSidePanel .rp-station-top em[style*="#dd9c20"]{color:#000!important}
#estateFocusDashboard #riverSidePanel>h2{color:#00387B!important;font-size:20px}
#estateFocusDashboard #rpFlowPanel h3,#estateFocusDashboard #rpHistoryPanel h3{font-size:21px}
#estateFocusDashboard #rpFlowPanel p,#estateFocusDashboard #rpHistoryPanel p{font-size:13px}
#estateFocusDashboard #rpFlowValue{font-size:36px;color:#e6004d!important}
#estateFocusDashboard #rpFlowChange,#estateFocusDashboard #rpBangkokFlow{color:#e6004d!important;font-size:15px}
#estateFocusDashboard #rpFlowValue small{color:#e6004d!important;font-size:14px}
#estateFocusDashboard #rpHistoryPanel .rp-periods button{font-size:13px;padding:9px 12px}
#estateFocusDashboard #rpHistoryPanel table{border-collapse:collapse;table-layout:fixed;font-size:12px;width:100%}
#estateFocusDashboard #rpHistoryPanel th,#estateFocusDashboard #rpHistoryPanel td{border:1px solid #000;text-align:center;vertical-align:middle;padding:10px 6px;overflow-wrap:anywhere}
#estateFocusDashboard #rpHistoryPanel th{color:#fff!important}
#estateFocusDashboard #rpHistoryPanel th:nth-child(1){background:#008558}
#estateFocusDashboard #rpHistoryPanel th:nth-child(2){background:#ffaa00;color:#000!important}
#estateFocusDashboard #rpHistoryPanel th:nth-child(3){background:#e64f00}
#estateFocusDashboard #rpHistoryPanel th:nth-child(4){background:#e6004d}
#estateFocusDashboard #rpHistoryPanel td:nth-child(1){background:#edf8f3}#estateFocusDashboard #rpHistoryPanel td:nth-child(2){background:#fff8e7}#estateFocusDashboard #rpHistoryPanel td:nth-child(3){background:#fff1e9}#estateFocusDashboard #rpHistoryPanel td:nth-child(4){background:#fff0f5}
#estateFocusDashboard #riverSidePanel .rp-card[aria-pressed=true]{outline-color:#109dc0;background:#eef8fc}
.rp-wave-front{animation-duration:3.5s}.rp-wave-back{animation-duration:5s}.rp-water-ripples{animation-duration:2.8s}

#estateFocusDashboard #riverSidePanel{border-color:#b9cddd;box-shadow:0 3px 12px #234b6a0b;background:#fff}
#estateFocusDashboard #riverSidePanel>h2{background:#e9f1fc;border-radius:9px;padding:12px 14px;margin:0 0 12px}
#estateFocusDashboard #rpGraph{background:linear-gradient(180deg,#f0f9fc,#fff);border-color:#b6d3e2}
#estateFocusDashboard #rpGraph{max-height:720px;overflow:auto;scrollbar-width:thin}
#estateFocusDashboard #riverSidePanel .rp-counts{background:#edf4fc;border:1px solid #c5d7e9;border-radius:9px;padding:10px;font-size:13px;font-weight:600}
#estateFocusDashboard #riverSidePanel .rp-extra-panel,#estateFocusDashboard #rpSummary{border-color:#bdcfdf;box-shadow:0 3px 10px #234b6a0b}
#estateFocusDashboard #riverSidePanel .rp-flow-header,#estateFocusDashboard #riverSidePanel .rp-history-head{background:#edf4fc;border-radius:10px;padding:14px}
#estateFocusDashboard #riverSidePanel details>summary{font-size:18px;font-weight:700;color:#00387B!important;background:#e9f1fc;border:1px solid #c5d7e9;border-radius:9px;padding:12px;cursor:pointer}
#estateFocusDashboard #riverSidePanel .rp-station-row{display:grid;grid-template-columns:116px minmax(0,1fr);gap:16px;padding:16px;background:#fff;border:1px solid #b9ccdd;border-radius:12px;box-shadow:0 3px 9px #234b6a0b}
#estateFocusDashboard #riverSidePanel .rp-station-row:hover{background:#f0f6ff;border-color:#7045ba}
#estateFocusDashboard #riverSidePanel .rp-station-row[aria-pressed=true]{background:#f5f0fc;border-color:#7045ba;outline:2px solid #7045ba}
#estateFocusDashboard #riverSidePanel .rp-gauge{width:116px;height:237px;display:block}
#estateFocusDashboard #riverSidePanel .rp-gauge text{fill:#245967!important}
#estateFocusDashboard #riverSidePanel .rp-gauge text[fill="#e6004d"]{fill:#e6004d!important}
#estateFocusDashboard #riverSidePanel .rp-station-top{display:block}
#estateFocusDashboard #riverSidePanel .rp-station-top b{font-size:17px;line-height:1.55;display:block}
#estateFocusDashboard #riverSidePanel .rp-station-top em{display:inline-block;margin:8px 0}
#estateFocusDashboard #riverSidePanel .rp-station-content strong{font-size:22px;margin:8px 0}
#estateFocusDashboard #riverSidePanel .rp-station-content small{font-size:12px;line-height:1.7;display:block}
@media(max-width:520px){#estateFocusDashboard #riverSidePanel .rp-station-row{grid-template-columns:90px minmax(0,1fr);gap:8px;padding:10px}#estateFocusDashboard #riverSidePanel .rp-gauge{width:90px;height:184px}#estateFocusDashboard #riverSidePanel .rp-station-top b{font-size:15px}#estateFocusDashboard #riverSidePanel .rp-station-content strong{font-size:18px}}

#estateFocusDashboard #rpCards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:10px}
#estateFocusDashboard #riverSidePanel .rp-station-row{grid-template-columns:74px minmax(0,1fr);gap:8px;padding:12px 8px;margin:0;align-items:center;min-width:0}
#estateFocusDashboard #riverSidePanel .rp-gauge{width:74px;height:175px}
#estateFocusDashboard #riverSidePanel .rp-station-top b{font-size:14px;overflow-wrap:anywhere}
#estateFocusDashboard #riverSidePanel .rp-station-top em{font-size:10px;white-space:normal}
#estateFocusDashboard #riverSidePanel .rp-station-content strong{font-size:17px;line-height:1.5}
#estateFocusDashboard #riverSidePanel .rp-row-trend{font-size:12px}
#estateFocusDashboard #riverSidePanel .rp-station-content small{font-size:11px}
@media(max-width:600px){#estateFocusDashboard #rpCards{grid-template-columns:1fr}#estateFocusDashboard #riverSidePanel .rp-station-row{grid-template-columns:90px minmax(0,1fr)}#estateFocusDashboard #riverSidePanel .rp-gauge{width:90px;height:190px}}

#estateFocusDashboard #riverSidePanel,#estateFocusDashboard #rpGraph,#estateFocusDashboard #rpSummary,#estateFocusDashboard #rpProfile,#estateFocusDashboard #riverSidePanel .rp-extra-panel,#estateFocusDashboard #riverSidePanel .rp-counts,#estateFocusDashboard #riverSidePanel details>summary{border:0}

/* Water overview matches the reference metric cards and summary strip. */
#estateFocusDashboard #riverSidePanel{padding:0;border:0;background:transparent;box-shadow:none}
#rpCounts.rp-overview-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0 0 14px}
#estateFocusDashboard .rp-overview-card{display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid #e0e5ef;border-radius:18px;padding:20px 18px;box-shadow:0 6px 20px #25334605;min-width:0}
#estateFocusDashboard .rp-overview-card h3{font-size:13px;font-weight:500;line-height:1.5;margin:0 0 12px;color:#000!important}
#estateFocusDashboard .rp-overview-card strong{font-size:29px;line-height:1.2;font-weight:700;color:var(--metric-color)!important;display:block}
#estateFocusDashboard .rp-overview-card strong span{font-size:13px;font-weight:500;color:var(--metric-color)!important}
#estateFocusDashboard .rp-overview-card p{font-size:11px;line-height:1.6;margin:10px 0 0}
.rp-overview-icon{width:56px;flex:0 0 56px}.rp-overview-icon svg{display:block;width:100%;height:auto}
#estateFocusDashboard .rp-overview-note{background:#f6f1fa;border-left:4px solid #8b6bb0;border-radius:12px;padding:17px 20px;margin-bottom:16px}
#estateFocusDashboard .rp-overview-note p{font-size:14px;line-height:1.8;margin:0 0 9px}
#estateFocusDashboard .rp-overview-note small{display:block;font-size:11px;line-height:1.7}
.rp-stations-title{font-size:18px!important;font-weight:700;color:#00387B!important;background:#e9f1fc;border-radius:9px;padding:12px;margin:0 0 12px!important}
.rp-area-picker{border:1px solid #e0e5ef;border-radius:12px;padding:10px 14px;background:white;margin:0 0 16px}.rp-area-picker summary{cursor:pointer;font-size:12px;font-weight:600}.rp-area-picker .rp-controls{margin-bottom:0}
@media(min-width:1750px){#rpCounts.rp-overview-cards{grid-template-columns:repeat(4,minmax(0,1fr))}.rp-overview-icon{width:42px;flex-basis:42px}#estateFocusDashboard .rp-overview-card{padding:18px 14px}}
@media(max-width:430px){#rpCounts.rp-overview-cards{gap:8px}#estateFocusDashboard .rp-overview-card{padding:14px 10px}.rp-overview-icon{width:36px;flex-basis:36px}#estateFocusDashboard .rp-overview-card strong{font-size:25px}}
`;document.head.append(style);const host=document.createElement('section');host.id='riverSidePanel';host.innerHTML=`<p id="rpUpdated" role="status"></p><details class="rp-area-picker"><summary>เลือกพื้นที่สถานี</summary><div class="rp-controls"><select id="rpRiver" aria-label="เลือกพื้นที่สถานี"><option>แม่น้ำเจ้าพระยา</option></select></div></details><section id="rpFlowPanel" class="rp-extra-panel"><div class="rp-flow-header"><div><h3 id="rpFlowTitle">น้ำที่เขื่อนเจ้าพระยาระบาย</h3><div id="rpFlowValue" class="rp-flow-value"></div><span id="rpFlowChange"></span></div><div><small id="rpDownstreamLabel">อัตราการไหลผ่านกรุงเทพฯ</small><strong id="rpBangkokFlow"></strong></div></div><div class="rp-extra-scroll" id="rpFlowPlot"></div><p id="rpFlowNote"></p></section><section id="rpHistoryPanel" class="rp-extra-panel"><div class="rp-history-head"><div><h3>ระดับน้ำย้อนหลัง</h3><p>ค่าเฉลี่ยจุดวัดตามสายน้ำที่เลือก และจำนวนจุดเกินเกณฑ์</p></div><div class="rp-periods" role="group" aria-label="ช่วงเวลาย้อนหลัง"><button type="button" data-rp-days="1" aria-pressed="true">24 ชม.</button><button type="button" data-rp-days="3" aria-pressed="false">3 วัน</button><button type="button" data-rp-days="7" aria-pressed="false">7 วัน</button><button type="button" data-rp-days="30" aria-pressed="false">30 วัน</button></div></div><div class="rp-history-key"><span><i style="background:#008558"></i>ระดับน้ำเฉลี่ย (ม.)</span><span><i style="background:#ffaa00"></i>ใกล้ตลิ่ง</span><span><i style="background:#e64f00"></i>ล้นตลิ่ง</span></div><div id="rpHistoryPlot" class="rp-extra-scroll"></div><p id="rpHistoryNote"></p><section class="rp-history-table"><h4>ดูค่าเป็นตาราง</h4><div class="rp-extra-scroll"><table><thead><tr><th>เวลา / ตัวอย่าง</th><th>เฉลี่ย (ม.รทก.)</th><th>ใกล้ตลิ่ง</th><th>ล้นตลิ่ง</th></tr></thead><tbody id="rpHistoryRows"></tbody></table></div></section></section><select id="rpStation" aria-label="เลือกสถานีสรุป" hidden style="display:none"></select><article id="rpSummary" class="rp-summary"></article><section class="rp-new-section"><h3>เขื่อนที่ปล่อยน้ำมากที่สุด</h3><div id="rpDamRanks"></div><small>อัตราระบายเฉลี่ยจากข้อมูลรายวัน · รวมสถานีท้ายเขื่อนที่มีค่าตรวจวัดล่าสุด</small></section><section class="rp-new-section"><h3>จุดวัดที่น้ำไหลผ่านมากที่สุดตอนนี้</h3><div id="rpFlowRanks"></div><small>เรียงจากค่าตรวจวัดล่าสุดในชุดข้อมูล · ตรวจเวลาแต่ละสถานี</small></section><section class="rp-new-section"><h3>สายน้ำหลัก</h3><label for="rpMainRiver">เลือกแม่น้ำ</label><select id="rpMainRiver"></select><div id="rpMainGraph"></div><small>เรียงตามลำดับสถานีในชุดข้อมูลต้นทาง · ลูกศรแสดงทิศตามลำดับ ไม่ใช่ความเร็วกระแสน้ำ</small></section><section class="rp-new-section"><h3>คาดการณ์น้ำล่วงหน้า 1–5 วัน</h3><p>แบบจำลอง ANNs กรมชลประทาน · กราฟต้นทางผ่าน Faonam · ตรวจวันที่ออกคาดการณ์ในแต่ละภาพ</p><div id="rpForecastCards"></div></section><section class="rp-stations"><h3 class="rp-stations-title">สถานีระดับน้ำในพื้นที่</h3><div id="rpCards"></div></section><p>ข้อมูลระดับน้ำ: RID GeoJSON · โหลดใหม่ทุก 1 ชั่วโมง · เวลาแสดงเป็นเวลาไทย</p>`;col.prepend(host);$('rpMainRiver').addEventListener('change',()=>{mainRiver=$('rpMainRiver').value;renderWaterExtras()});$('rpRiver').addEventListener('change',()=>{river=$('rpRiver').value;selected=String(rows.find(r=>r.river===river)?.code||'');render()});$('rpStation').addEventListener('change',()=>{selected=$('rpStation').value;render();const r=rows.find(r=>String(r.code)===selected);if(r)focus(r)});function choose(e){const target=e.target.closest('[data-rp-id]');if(!target)return;const r=rows.find(v=>String(v.code)===target.dataset.rpId);if(!r)return;selected=String(r.code);river=r.river;render();focus(r)}host.addEventListener('click',e=>{const b=e.target.closest('[data-rp-days]');if(!b)return;historyDays=Number(b.dataset.rpDays);host.querySelectorAll('[data-rp-days]').forEach(v=>v.setAttribute('aria-pressed',String(v===b)));historyChart()});host.addEventListener('click',e=>{const b=e.target.closest('[data-rp-scroll]');if(b)host.querySelector('.rp-profile-scroll')?.scrollBy({left:Number(b.dataset.rpScroll)*360,behavior:'smooth'})});
let drag=null,suppressClick=false;
host.addEventListener('pointerdown',e=>{const scroller=e.target.closest('.rp-profile-scroll');if(!scroller||e.pointerType!=='mouse'||e.button!==0)return;drag={scroller,x:e.clientX,left:scroller.scrollLeft,id:e.pointerId,moved:false}});
host.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x;if(Math.abs(dx)>5){drag.moved=true;drag.scroller.classList.add('rp-dragging');drag.scroller.setPointerCapture(e.pointerId);drag.scroller.scrollLeft=drag.left-dx;e.preventDefault()}});
function endDrag(){if(!drag)return;suppressClick=drag.moved;drag.scroller.classList.remove('rp-dragging');drag=null;setTimeout(()=>suppressClick=false,0)}
host.addEventListener('pointerup',endDrag);host.addEventListener('pointercancel',endDrag);
host.addEventListener('click',e=>{if(suppressClick){e.preventDefault();return}choose(e)});host.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){if(e.target.matches('[data-rp-id]')){e.preventDefault();choose(e)}}});refresh();setInterval(()=>{if(!document.hidden)refresh()},3600000)}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();



