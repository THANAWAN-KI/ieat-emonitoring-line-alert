(function(){
'use strict';
const URL='https://nawakonnakhonchai-wq.github.io/rid-geojson-bot/rid_realtime.geojson';
const number=v=>v==null||String(v).trim()===''?null:Number.isFinite(Number(v))?Number(v):null;
function normalize(data){
 if(data.type!=='FeatureCollection'||!Array.isArray(data.features))throw Error('RID GeoJSON ไม่ถูกต้อง');
 return data.features.map(f=>{
  const p=f.properties||{},coords=f.geometry?.coordinates||[],wl=number(p['ระดับน้ำปัจจุบัน (ม.รทก.)']),diff=number(p['ระยะจากตลิ่ง (ม.)']),givenBank=number(p['ระดับตลิ่ง (ม.รทก.)']),bank=givenBank??(wl!==null&&diff!==null?Math.round((wl-diff)*1000)/1000:null),percent=number(p['ระดับน้ำเทียบตลิ่ง (%)']),code=String(p['รหัสสถานี']||''),province=String(p['จังหวัด']||'');
  const status=diff!==null&&diff>=0?'ล้นตลิ่ง':percent!==null&&percent>=90?'ใกล้ตลิ่ง':'ต่ำกว่าตลิ่ง';
  return {id:code,code,oldcode:code,name:p['ชื่อสถานี']||code,province,lat:number(coords[1]??p.Latitude),lng:number(coords[0]??p.Longitude),lon:number(coords[0]??p.Longitude),wl,bank,diff,bank_derived:givenBank===null&&bank!==null,percent,flow:number(p['อัตราการไหล (ลบ.ม./วิ)']),discharge:number(p['อัตราการไหล (ลบ.ม./วิ)']),trend_text:p['แนวโน้มระดับน้ำ']||'',delta:null,measured_at:p['เวลาบันทึกข้อมูล (UTC)']||p['เวลาบันทึกข้อมูล (เวลาไทย)']||'',agency:'กรมชลประทาน',source_name:'RID GeoJSON',source_url:URL,status,river:'จังหวัด'+province};
 });
}
function fresh(r,now=Date.now()){const a=now-Date.parse(r.measured_at);return Number.isFinite(a)&&a>=-300000&&a<=21600000&&r.wl!==null&&r.bank!==null&&r.lat!==null&&r.lng!==null}
let pending=null;
async function load(){if(pending)return pending;pending=(async()=>{const r=await fetch(URL+'?v='+Date.now(),{cache:'no-store',signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('RID HTTP '+r.status);return normalize(await r.json())})();try{return await pending}finally{pending=null}}
window.IEAT_RID={url:URL,normalize,fresh,load};
})();