/* One status policy for station cards, map pins and detail panels. */
(()=>{'use strict';
const n=v=>v===null||v===undefined||v===''?null:Number.isFinite(Number(v))?Number(v):null;
const palette={red:'#D32F2F',orange:'#F57C00',yellow:'#FBC02D',green:'#2E7D32',blue:'#2196D2',brown:'#8D6E63',gray:'#607D8B'};
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
const legendHTML='<p><b>เตือนน้ำล้นตลิ่ง</b></p><p><i style="background:'+palette.red+'"></i>แดง · ถึงหรือสูงกว่าตลิ่ง</p><p><i style="background:'+palette.orange+'"></i>ส้ม · ต่ำกว่าตลิ่งไม่เกิน 0.50 ม.</p><p><i style="background:'+palette.green+'"></i>เขียว · ต่ำกว่าตลิ่งมากกว่า 0.50 ม.</p><p><b>ปริมาณน้ำ ThaiWater / อ่างเก็บน้ำ</b></p><p>น้ำตาล · น้ำน้อยวิกฤต / ส้ม · น้ำน้อย / เขียว · ปกติ / ฟ้า · น้ำมาก / แดง · ล้นตลิ่งหรือเกินความจุปกติ</p><small>ใช้เกณฑ์เตือนตลิ่งก่อนเมื่อมีระดับตลิ่ง; คลองใช้เกณฑ์เตือนเฉพาะสถานี สีเทา = ไม่มีค่า/เกณฑ์หรือข้อมูลเก่า กล้องเป็นสถานะอุปกรณ์ สีไม่ใช่แนวโน้มขึ้น–ลง<br>อ้างอิง: <a href="https://standard.thaiwater.net/" target="_blank" rel="noopener">มาตรฐานข้อมูลน้ำ ThaiWater</a> · เกณฑ์ปริมาณน้ำและเกณฑ์เตือนภัยเป็นคนละชุด</small>';
window.IEAT_WATER_STATUS={water,canal,dam,palette,legendHTML};
function guide(){const overview=document.querySelector('.flood-overview');if(!overview||document.getElementById('waterStatusGuide'))return;const el=document.createElement('details');el.id='waterStatusGuide';el.innerHTML='<summary>เกณฑ์สีสถานะ · ใช้ตรงกับหมุดแผนที่</summary>'+legendHTML;overview.appendChild(el)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',guide);else guide();
const observer=new MutationObserver(()=>{guide();if(document.getElementById('waterStatusGuide'))observer.disconnect()});observer.observe(document.documentElement,{childList:true,subtree:true});
})();
