/* One status policy for station cards, map pins and detail panels. */
(()=>{'use strict';
const n=v=>v===null||v===undefined||v===''?null:Number.isFinite(Number(v))?Number(v):null;
const statusPairs={
 blue:['#99D3F0','#0A5378'],teal:['#99F0E7','#148C80'],green:['#21AD02','#165708'],
 yellow:['#EBE700','#B5B204'],orange:['#F09B4D','#7A4310'],brown:['#CF6B08','#8A4A0A'],
 red:['#B30707','#520707'],gray:['#E5E7EB','#667085']
};
const palette={...Object.fromEntries(Object.entries(statusPairs).map(([key,pair])=>[key,pair[0]])),lightBlue:'#99D3F0',navy:'#0A5378',lavender:'#C3ACD0',purple:'#674188'};
const state=(key,label,criterion)=>({key:'standard-'+key,hex:palette[key],color:palette[key],background:statusPairs[key]?.[0]||palette[key],textColor:statusPairs[key]?.[1]||'#303841',label,criterion});
const unknown=()=>state('gray','ไม่มีค่าหรือเกณฑ์เทียบ','ยังไม่จัดเป็นสถานการณ์ปกติ');
function water(r){
 const wl=n(r.wl??r.waterlevel_msl),bank=n(r.bank??r.bankfull_msl);if(wl===null)return unknown();
 const gap=bank===null?null:Math.round((wl-bank)*10000)/10000;
 // Flood-event criterion takes priority over the separate water-quantity class.
 if(gap!==null&&gap>=0)return state('red','ถึงตลิ่ง / ล้นตลิ่ง','เกณฑ์เตือนน้ำล้นตลิ่ง: ระดับน้ำเสมอหรือสูงกว่าตลิ่ง');
 if(gap!==null&&gap>=-.5)return state('orange','ใกล้ตลิ่ง · เตือนภัย','เกณฑ์เตือนน้ำล้นตลิ่ง: ต่ำกว่าตลิ่งไม่เกิน 0.50 ม. (รวมค่าขอบเขต 0.50 ม.)');
 const levels={1:['brown','น้ำน้อยวิกฤต'],2:['orange','น้ำน้อย'],3:['green','น้ำปกติ'],4:['blue','น้ำมาก'],5:['red','ล้นตลิ่ง']};
 const source=levels[n(r.situation_level)];if(source)return state(source[0],source[1],'สถานะปริมาณน้ำ situation_level จาก ThaiWater: ≤10 / ≤30 / ≤70 / ≤100 / >100%; ไม่คำนวณร้อยละจากค่า ม.รทก.');
 return gap!==null?state('green','ปกติ · ต่ำกว่าตลิ่ง','เกณฑ์เตือนน้ำล้นตลิ่ง: ต่ำกว่าตลิ่งมากกว่า 0.50 ม.'):unknown();
}
function canal(r){
 const wl=n(r.wl),bank=n(r.bank),critical=n(r.critical),warning=n(r.warning);if(wl===null)return unknown();
 if(bank!==null&&wl>=bank||critical!==null&&wl>=critical)return state('red','ถึงเกณฑ์วิกฤต / ตลิ่ง','เทียบระดับวิกฤตหรือตลิ่งเฉพาะสถานีที่ต้นทาง กทม. ระบุ');
 if(warning!==null&&wl>=warning)return state('orange','ถึงเกณฑ์เฝ้าระวัง','เทียบระดับเตือนเฉพาะสถานีที่ต้นทาง กทม. ระบุ');
 if(bank===null&&critical===null&&warning===null)return unknown();
 return state('green','ต่ำกว่าเกณฑ์เตือน','เกณฑ์เฉพาะสถานีคลอง กทม.; ไม่ใช้เกณฑ์ความจุอ่างกับคลอง');
}
function dam(value){
 const p=n(value);if(p===null)return unknown();
 if(p>100)return state('red','เกินความจุเก็บกักปกติ','ปริมาณกักเก็บมากกว่า 100% ของความจุปกติ; ไม่ใช่ข้อสรุปว่าเขื่อนเสียหาย');
 if(p>80)return state('blue','น้ำมาก','ปริมาณกักเก็บมากกว่า 80% ถึง 100% ของความจุปกติ');
 if(p>50)return state('green','น้ำปกติ','ปริมาณกักเก็บมากกว่า 50% ถึง 80% ของความจุปกติ');
 if(p>30)return state('orange','น้ำน้อย','ปริมาณกักเก็บมากกว่า 30% ถึง 50% ของความจุปกติ');
 return state('brown','น้ำน้อยวิกฤต','ปริมาณกักเก็บไม่เกิน 30% ของความจุปกติ');
}

const rainClasses=[
 ['ฝนเล็กน้อย','#99F0E7','#148C80','0.1–10.0 มม.'],
 ['ฝนปานกลาง','#21AD02','#165708','10.1–35.0 มม.'],
 ['ฝนหนัก','#F09B4D','#7A4310','35.1–90.0 มม.'],
 ['ฝนหนักมาก','#B30707','#520707','ตั้งแต่ 90.1 มม.']
];
function rain(value){
 const v=n(value);if(v===null||v<0)return {...unknown(),textColor:'#667085'};
 if(v<.1)return {key:'rain-trace',hex:'#99D3F0',color:'#99D3F0',textColor:'#0A5378',label:v===0?'ไม่มีฝน':'ฝนวัดจำนวนไม่ได้',criterion:'ปริมาณฝนน้อยกว่า 0.1 มม. ใน 24 ชั่วโมง'};
 const rounded=Math.round(v*10)/10,index=rounded<=10?0:rounded<=35?1:rounded<=90?2:3;
 const [label,fill,ink,range]=rainClasses[index];return {key:'rain-'+index,hex:fill,color:fill,textColor:ink,label,criterion:range+' ใน 24 ชั่วโมง'};
}
const rainLegendHTML='<div class="rain-palette-legend">'+[['ไม่มีฝน / ฝนวัดจำนวนไม่ได้','#99D3F0','#0A5378','น้อยกว่า 0.1 มม.'],...rainClasses].map(([label,fill,ink,range])=>'<div style="display:flex;gap:8px;align-items:center;margin:6px 0"><i aria-hidden="true" style="width:24px;height:16px;flex:0 0 24px;border-radius:4px;background:'+fill+';border:1px solid '+ink+'"></i><span style="color:'+ink+'">'+label+' · '+range+'</span></div>').join('')+'</div>';
const sourceRoot='https://standard.thaiwater.net/docs/การจัดทำมาตรฐานน้ำ-ระย-2/ข้อมูลและเกณฑ์ของข้อมู/เกณฑ์ของข้อมูลสำหรับกา/';
const waterClasses=[
 ['brown','น้ำน้อยวิกฤต','ไม่เกิน 10%'],
 ['orange','น้ำน้อย','มากกว่า 10% ถึง 30%'],
 ['green','น้ำปกติ','มากกว่า 30% ถึง 70%'],
 ['blue','น้ำมาก','มากกว่า 70% ถึง 100%'],
 ['red','ล้นตลิ่ง','มากกว่า 100%']
];
const storageClasses=[
 ['brown','น้ำน้อยวิกฤต','ไม่เกิน 30%'],
 ['orange','น้ำน้อย','มากกว่า 30% ถึง 50%'],
 ['green','น้ำปกติ','มากกว่า 50% ถึง 80%'],
 ['blue','น้ำมาก','มากกว่า 80% ถึง 100%'],
 ['red','เกินความจุปกติ','มากกว่า 100%']
];
const floodClasses=[
 ['green','ปกติ','ต่ำกว่าตลิ่งมากกว่า 0.50 ม.'],
 ['orange','เตือนภัย','ต่ำกว่าตลิ่งไม่ถึง 0.50 ม.'],
 ['red','วิกฤต','เสมอหรือสูงกว่าตลิ่ง']
];
const table=rows=>'<table class="water-criteria-table"><thead><tr><th>สี / สถานะ</th><th>ช่วงค่า</th></tr></thead><tbody>'+rows.map(([key,name,range])=>'<tr><td><i style="background:'+palette[key]+'"></i>'+name+'</td><td>'+range+'</td></tr>').join('')+'</tbody></table>';
const legendHTML=
 '<p><b>อ้างอิงหน่วยงานตามชนิดข้อมูล</b></p>'+
 '<details open><summary>เตือนน้ำล้นตลิ่ง · 3 ระดับ</summary>'+table(floodClasses)+'<small>เกณฑ์เหตุการณ์จากมาตรฐานข้อมูลน้ำ ThaiWater; ระบบรวมค่าขอบเขตห่างตลิ่ง 0.50 ม. ไว้ในสีส้ม และให้เกณฑ์นี้มาก่อนสถานะปริมาณน้ำเมื่อถึงช่วงเตือนภัย</small></details>'+
 '<details><summary>ปริมาณน้ำท่า ThaiWater · 5 ระดับ</summary>'+table(waterClasses)+'<small>อ่านชั้นสถานะ situation_level จากต้นทาง ไม่หารค่า ม.รทก. ด้วยระดับตลิ่งเพื่อสร้างร้อยละเอง</small></details>'+
 '<details><summary>น้ำในอ่างเก็บน้ำ · 5 ระดับ</summary>'+table(storageClasses)+'<small>ร้อยละปริมาณน้ำต่อความจุเก็บกักปกติ เกิน 100% ไม่ใช่ข้อสรุปว่าเขื่อนเสียหาย</small></details>'+
 '<details><summary>ปริมาณฝนสะสม 24 ชั่วโมง · กรมอุตุนิยมวิทยา</summary>'+rainLegendHTML+'<small>ใช้ชื่อและช่วงค่าตามกรมอุตุนิยมวิทยา สีเป็นรูปแบบการแสดงผลของแดชบอร์ด ไม่ใช่สีทางการของหน่วยงาน; อ่านช่วงเวลาสะสมตามข้อมูลต้นทาง</small></details>'+ 
 '<p><b>คลอง กทม.</b> ใช้ warning_level / critical_level / bank ของแต่ละสถานี: เขียวต่ำกว่าเตือน ส้มถึงระดับเตือน แดงถึงระดับวิกฤตหรือตลิ่ง</p>'+
 '<small>เทา = ไม่มีค่า/เกณฑ์หรือข้อมูลเก่า ไม่นับเป็นระดับความรุนแรง กล้องใช้สีบอกความพร้อมของอุปกรณ์ แนวโน้มเพิ่ม–ลดแสดงแยกจากสีสถานะ<br>อ้างอิง: <a href="'+sourceRoot+'การแจ้งข่าวสาร/" target="_blank" rel="noopener">ThaiWater: ปริมาณน้ำ 5 ระดับ</a> · <a href="'+sourceRoot+'การแจ้งเตือนภัยเหตุการ/" target="_blank" rel="noopener">ThaiWater: เตือนน้ำล้นตลิ่ง 3 ระดับ</a> · <a href="https://www.tmd.go.th/info/เกณฑ์อากาศร้อน" target="_blank" rel="noopener">กรมอุตุฯ: เกณฑ์ปริมาณฝน 4 ระดับ</a></small>';
window.IEAT_WATER_STATUS={water,canal,dam,rain,palette,statusPairs,legendHTML,rainClasses,rainLegendHTML};
const pairStyle=document.createElement('style');pairStyle.id='unified-water-status-pairs';
const root='html body #warning '+'#estateFocusDashboard'.repeat(46);
pairStyle.textContent=Object.values(statusPairs).map(([fill,ink])=>{
 const card=root+' [style*="--rp-status-color:'+fill+'"]';
 const water=root+' [style*="--water-accent:'+fill+'"]';
 return card+' .rp-station-top em{background:'+fill+'!important;color:'+ink+'!important;border:1px solid '+ink+'!important}'+
 card+' .rp-station-content strong{color:'+ink+'!important}'+
 water+' .dam-inline-status,'+water+' .ef-canal-status,'+water+' .ef-reservoir-percent span{background:'+fill+'!important;color:'+ink+'!important;border:1px solid '+ink+'!important}'+
 water+' .ef-dam-value,'+water+' .ef-reservoir-percent,'+water+' .ef-canal-content strong{color:'+ink+'!important}';
}).join('');
document.head.appendChild(pairStyle);
const criteriaStyle=document.createElement('style');criteriaStyle.textContent='.water-criteria-table{width:100%;border-collapse:collapse;font-size:11px;margin:7px 0}.water-criteria-table th,.water-criteria-table td{text-align:left;padding:5px 6px;vertical-align:top}.water-criteria-table th{background:#f3f5f7}.water-criteria-table i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px}#waterStatusGuide>details,#mapStatusKey details{padding:7px 0;border-bottom:1px solid #e8edf1}#waterStatusGuide>details>summary,#mapStatusKey details>summary{font-weight:600;cursor:pointer}#waterStatusGuide small,#mapStatusKey small{line-height:1.7}';document.head.appendChild(criteriaStyle);
function guide(){const overview=document.querySelector('.flood-overview');if(!overview||document.getElementById('waterStatusGuide'))return;const el=document.createElement('details');el.id='waterStatusGuide';el.innerHTML='<summary>เกณฑ์สีสถานะ · ใช้ตรงกับหมุดแผนที่</summary>'+legendHTML;overview.appendChild(el)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',guide);else guide();
if(location.pathname.endsWith('flood-report.html')){const observer=new MutationObserver(()=>{guide();if(document.getElementById('waterStatusGuide'))observer.disconnect()});observer.observe(document.documentElement,{childList:true,subtree:true});}
})();

