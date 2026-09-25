(function(){
  "use strict";
  const RADIUS=30,THRESHOLD=20;
  const $=id=>document.getElementById(id);
  const escape=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const fmt=n=>Number(n).toLocaleString("th-TH",{maximumFractionDigits:1});
  function km(a,b,c,d){const r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,h=Math.sin(x/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(h)))}
  function point(feature){const p=feature.properties||{},c=feature.geometry?.coordinates||[];
    const lat=Number(p.latitude??p.lat??c[1]),lon=Number(p.longitude??p.lon??c[0]),rain=Number(p.rain_24h);
    return Number.isFinite(lat)&&Number.isFinite(lon)&&Number.isFinite(rain)&&rain>=THRESHOLD?{lat,lon,rain,name:p.station_name||p.station||"สถานีฝน",province:p.province||"–",time:p.datetime||"–"}:null;
  }
  function makePanel(className,title,subtitle,columns){const panel=document.createElement("article");panel.className="card warning-table focus-data-table "+className;
    panel.innerHTML='<div class="table-section-head"><div><h2>'+title+'</h2><p>'+subtitle+'</p></div><span>ฝนสะสม 24 ชม.</span></div><div class="table-scroll"><table class="table"><thead><tr>'+columns.map(x=>'<th>'+x+'</th>').join("")+'</tr></thead><tbody><tr><td colspan="'+columns.length+'" class="table-empty">กำลังโหลดข้อมูลฝนล่าสุด…</td></tr></tbody></table></div>';
    return panel;
  }
  function zoom(lat,lon,label){if(typeof window.zoomRiskMap==="function")window.zoomRiskMap(lat,lon,label);else {
    const frame=document.querySelector(".thaiwater-risk-map");if(!frame)return;
    const url=new URL(frame.src,document.baseURI);url.searchParams.set("center",lon+","+lat);url.searchParams.set("scale","75000");frame.src=url.toString();frame.scrollIntoView({behavior:"smooth",block:"center"});
  }}
  async function start(){
    const oldRain=document.querySelector("#warning .station-watch-table"),oldEstates=$("ridStationRows")?.closest(".rid-panel");
    if(!oldRain||!oldEstates)return;
    const rainPanel=makePanel("actual-rain-panel","ภาพรวมฝนสะสม 24 ชั่วโมง","สถานีฝนที่วัดได้ตั้งแต่ 20 มม. และอยู่ภายใน 30 กม. จากนิคมฯ • คลิกสถานีเพื่อซูมแผนที่",["สถานีฝน","จังหวัด","ฝนสะสม 24 ชม.","นิคมฯ ใกล้ที่สุด","ระยะห่าง","ข้อมูลล่าสุด"]);
    const estatePanel=makePanel("actual-estate-panel","นิคมอุตสาหกรรมที่เข้าเกณฑ์เฝ้าระวัง","นิคมฯ ภายใน 30 กม. จากสถานีที่วัดฝนสะสม 24 ชม. ตั้งแต่ 20 มม. • แสดงสถานีที่ฝนสูงสุดในรัศมีและระยะเส้นตรง",["นิคมอุตสาหกรรม","สถานีฝนที่ใช้ประเมิน","ระยะห่าง (กม.)","ฝนสะสม 24 ชม.","ข้อมูลล่าสุด"]);
    oldRain.before(rainPanel);oldEstates.before(estatePanel);oldRain.hidden=true;oldEstates.hidden=true;
    oldRain.style.setProperty("display","none","important");oldEstates.style.setProperty("display","none","important");
    const rainBody=rainPanel.querySelector("tbody"),estateBody=estatePanel.querySelector("tbody");
    try{
      const [rainResponse,estateResponse]=await Promise.all([fetch("https://nawakonnakhonchai-wq.github.io/Rain_24H/rainfall_24h.geojson",{cache:"no-store"}),fetch("./data/thaiwater_latest.json",{cache:"no-store"})]);
      if(!rainResponse.ok||!estateResponse.ok)throw Error("Data unavailable");
      const [rainFeed,estateFeed]=await Promise.all([rainResponse.json(),estateResponse.json()]);
      const stations=(rainFeed.features||[]).map(point).filter(Boolean),estates=(estateFeed.estates||[]).filter(e=>Number.isFinite(Number(e.lat))&&Number.isFinite(Number(e.lon)));
      const matches=estates.map(estate=>{const nearby=stations.map(station=>({station,distance:km(Number(estate.lat),Number(estate.lon),station.lat,station.lon)})).filter(x=>x.distance<=RADIUS);
        nearby.sort((a,b)=>b.station.rain-a.station.rain||a.distance-b.distance);return {estate,nearby,nearest:nearby[0]||null,maxRain:nearby[0]?.station.rain||0};
      }).filter(x=>x.nearest).sort((a,b)=>b.maxRain-a.maxRain||a.nearest.distance-b.nearest.distance);
      const stationMatches=stations.map(station=>{let nearest=null;for(const e of estates){const distance=km(station.lat,station.lon,Number(e.lat),Number(e.lon));if(!nearest||distance<nearest.distance)nearest={estate:e,distance}}return {station,nearest}}).filter(x=>x.nearest&&x.nearest.distance<=RADIUS).sort((a,b)=>b.station.rain-a.station.rain);
      rainBody.innerHTML=stationMatches.length?stationMatches.map(({station,nearest})=>'<tr><td><button type="button" class="rain-zoom" data-lat="'+station.lat+'" data-lon="'+station.lon+'" data-label="'+escape(station.name)+'">'+escape(station.name)+'</button></td><td>'+escape(station.province)+'</td><td><b>'+fmt(station.rain)+' มม.</b></td><td>'+escape(nearest.estate.name)+'</td><td>'+fmt(nearest.distance)+' กม.</td><td>'+escape(station.time)+'</td></tr>').join(""):'<tr><td colspan="6" class="table-empty">ไม่พบสถานีฝนตั้งแต่ 20 มม. ภายใน 30 กม. จากนิคมฯ</td></tr>';
      estateBody.innerHTML=matches.length?matches.map(({estate,nearest,maxRain})=>'<tr><td><button type="button" class="rain-zoom" data-lat="'+Number(estate.lat)+'" data-lon="'+Number(estate.lon)+'" data-label="'+escape(estate.name)+'">'+escape(estate.name)+'</button></td><td>'+escape(nearest.station.name)+'</td><td>'+fmt(nearest.distance)+'</td><td>'+fmt(maxRain)+' มม.</td><td>'+escape(nearest.station.time)+'</td></tr>').join(""):'<tr><td colspan="5" class="table-empty">ไม่พบนิคมฯ ภายใน 30 กม. จากสถานีฝนที่เข้าเกณฑ์</td></tr>';
      [rainPanel,estatePanel].forEach(panel=>panel.addEventListener("click",event=>{const button=event.target.closest(".rain-zoom");if(button)zoom(Number(button.dataset.lat),Number(button.dataset.lon),button.dataset.label)}));
    }catch(error){rainBody.innerHTML='<tr><td colspan="6" class="table-empty">โหลดข้อมูลฝนสะสม 24 ชั่วโมงไม่สำเร็จ กรุณาลองใหม่</td></tr>';estateBody.innerHTML='<tr><td colspan="5" class="table-empty">ยังไม่สามารถคำนวณนิคมฯ ที่เข้าเกณฑ์ได้</td></tr>';console.warn("Rain and estate watch data unavailable",error)}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(start,0));else setTimeout(start,0);
})();
