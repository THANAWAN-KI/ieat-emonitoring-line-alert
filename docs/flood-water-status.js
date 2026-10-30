/* One status policy for station cards, map pins and detail panels. */
(()=>{'use strict';
const n=v=>v===null||v===undefined||v===''?null:Number.isFinite(Number(v))?Number(v):null;
const palette={red:'#D9361E',orange:'#F5B52E',yellow:'#FFD16A',green:'#4F7D32',blue:'#2196F3',lightBlue:'#E3F2FD',navy:'#0D47A1',lavender:'#C3ACD0',purple:'#674188',brown:'#0D47A1',gray:'#0D47A1'};
const state=(key,label,criterion)=>({key:'standard-'+key,hex:palette[key],color:palette[key],label,criterion});
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
 '<details><summary>ความหนักของฝน กรมอุตุฯ · 4 ระดับ</summary><p>เล็กน้อย 0.1–10.0 มม.<br>ปานกลาง 10.1–35.0 มม.<br>หนัก 35.1–90.0 มม.<br>หนักมาก ตั้งแต่ 90.1 มม.</p><small>เกณฑ์ปริมาณฝนคนละชุดกับระดับน้ำ สีในภาพเรดาร์ใช้คำอธิบายจากผู้ให้บริการภาพ ไม่เปลี่ยนสีเรดาร์ตามหมุดระดับน้ำ</small></details>'+
 '<p><b>คลอง กทม.</b> ใช้ warning_level / critical_level / bank ของแต่ละสถานี: เขียวต่ำกว่าเตือน ส้มถึงระดับเตือน แดงถึงระดับวิกฤตหรือตลิ่ง</p>'+
 '<small>เทา = ไม่มีค่า/เกณฑ์หรือข้อมูลเก่า ไม่นับเป็นระดับความรุนแรง กล้องใช้สีบอกความพร้อมของอุปกรณ์ แนวโน้มเพิ่ม–ลดแสดงแยกจากสีสถานะ<br>อ้างอิง: <a href="'+sourceRoot+'การแจ้งข่าวสาร/" target="_blank" rel="noopener">ThaiWater: ปริมาณน้ำ 5 ระดับ</a> · <a href="'+sourceRoot+'การแจ้งเตือนภัยเหตุการ/" target="_blank" rel="noopener">ThaiWater: เตือนน้ำล้นตลิ่ง 3 ระดับ</a> · <a href="https://www.tmd.go.th/info/เกณฑ์อากาศร้อน" target="_blank" rel="noopener">กรมอุตุฯ: เกณฑ์ปริมาณฝน 4 ระดับ</a></small>';
window.IEAT_WATER_STATUS={water,canal,dam,palette,legendHTML};
const criteriaStyle=document.createElement('style');criteriaStyle.textContent='.water-criteria-table{width:100%;border-collapse:collapse;font-size:11px;margin:7px 0}.water-criteria-table th,.water-criteria-table td{text-align:left;padding:5px 6px;vertical-align:top}.water-criteria-table th{background:#f3f5f7}.water-criteria-table i{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px}#waterStatusGuide>details,#mapStatusKey details{padding:7px 0;border-bottom:1px solid #e8edf1}#waterStatusGuide>details>summary,#mapStatusKey details>summary{font-weight:600;cursor:pointer}#waterStatusGuide small,#mapStatusKey small{line-height:1.7}';document.head.appendChild(criteriaStyle);
function guide(){const overview=document.querySelector('.flood-overview');if(!overview||document.getElementById('waterStatusGuide'))return;const el=document.createElement('details');el.id='waterStatusGuide';el.innerHTML='<summary>เกณฑ์สีสถานะ · ใช้ตรงกับหมุดแผนที่</summary>'+legendHTML;overview.appendChild(el)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',guide);else guide();
if(location.pathname.endsWith('flood-report.html')){const observer=new MutationObserver(()=>{guide();if(document.getElementById('waterStatusGuide'))observer.disconnect()});observer.observe(document.documentElement,{childList:true,subtree:true});}
})();

