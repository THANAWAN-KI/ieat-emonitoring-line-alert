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
  function makePanel(className,title,subtitle){const panel=document.createElement("article");panel.className="card "+className;
    panel.innerHTML='<div class="rain-rank-header"><div><h2>'+title+'</h2><p>'+subtitle+'</p></div><strong class="rain-rank-max">กำลังโหลด…</strong></div><div class="rain-rank-content" aria-live="polite">กำลังโหลดข้อมูลฝนล่าสุด…</div>';
    return panel;
  }
  function zoom(lat,lon,label){if(typeof window.zoomRiskMap==="function")window.zoomRiskMap(lat,lon,label);else {
    const frame=document.querySelector(".thaiwater-risk-map");if(!frame)return;
    const url=new URL(frame.src,document.baseURI);url.searchParams.set("center",lon+","+lat);url.searchParams.set("scale","75000");frame.src=url.toString();frame.scrollIntoView({behavior:"smooth",block:"center"});
  }}
  async function start(){
    const style=document.createElement("style");style.textContent=`
      #warning .actual-rain-panel,#warning .actual-estate-panel{min-width:0;height:410px;min-height:410px;max-height:410px;padding:0;overflow:hidden;display:flex;flex-direction:column}
      #warning .rain-rank-header{flex:none;display:flex;align-items:center;justify-content:space-between;gap:15px;padding:17px 20px 13px;border-bottom:1px solid #e4ebf2}
      #warning .rain-rank-header h2{margin:0;font-size:17px;color:#243143}#warning .rain-rank-header p{margin:4px 0 0;color:#64748b;font-size:12px}
      #warning .rain-rank-max{white-space:nowrap;font-size:14px;color:#243143}#warning .rain-rank-content{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:18px 20px}
      #warning .estate-rain-bars{height:265px;display:grid;grid-template-columns:repeat(10,minmax(0,1fr));align-items:end;gap:12px;border-bottom:1px solid #d8e5ee}
      #warning .estate-rain-bar{min-width:0;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:5px;border:0;background:none;cursor:pointer;color:#25364a;font:inherit;padding:0}
      #warning .estate-rain-bar b{font-size:12px}#warning .estate-rain-track{height:175px;width:min(35px,95%);display:flex;align-items:flex-end}
      #warning .estate-rain-track span{width:100%;border-radius:9px 9px 2px 2px;background:linear-gradient(#39b8d9,#2196c9)}#warning .estate-rain-bar:hover .estate-rain-track span{filter:brightness(.8)}
      #warning .estate-rain-bar small{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:10px;text-align:center}#warning .estate-rain-bar em{font-size:10px;font-style:normal;color:#617588;white-space:nowrap}
      #warning .rain-station-ranking{display:grid;gap:7px}#warning .rain-station-row{width:100%;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 10px;border:0;border-radius:11px;background:#f3f6fd;text-align:left;cursor:pointer;color:#334155;font:inherit}
      #warning .rain-station-row:hover{background:#e3f1f7}#warning .rain-station-name{min-width:0;display:flex;gap:5px;align-items:baseline;font-size:13px}#warning .rain-station-name>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      #warning .rain-station-name small{display:block;color:#64748b;font-size:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#warning .rain-station-row strong{flex:none;border-radius:9px;background:#00858e;color:#fff;padding:4px 10px;font-size:12px}
      #warning .rain-rank-note{font-size:11px;color:#64748b;margin:14px 0 0}#warning .rain-rank-empty{color:#64748b;padding:25px 0}
      @media(max-width:700px){#warning .actual-estate-panel .rain-rank-content{overflow-x:auto}#warning .estate-rain-bars{min-width:680px}#warning .rain-rank-max{font-size:12px}}
    `;document.head.appendChild(style);
    const oldRain=document.querySelector("#warning .station-watch-table"),oldEstates=$("ridStationRows")?.closest(".rid-panel");
    if(!oldRain||!oldEstates)return;
    const rainPanel=makePanel("actual-rain-panel","ภาพรวมฝนสะสม 24 ชั่วโมง","10 สถานีที่มีฝนสะสมสูงสุดใกล้นิคมฯ");
    const estatePanel=makePanel("actual-estate-panel","นิคมอุตสาหกรรมที่เข้าเกณฑ์เฝ้าระวัง","10 นิคมฯ ที่มีฝนสะสมสูงสุดในรัศมี 30 กิโลเมตร");
    oldRain.before(rainPanel);oldEstates.before(estatePanel);oldRain.hidden=true;oldEstates.hidden=true;
    oldRain.style.setProperty("display","none","important");oldEstates.style.setProperty("display","none","important");
    const rainBody=rainPanel.querySelector(".rain-rank-content"),estateBody=estatePanel.querySelector(".rain-rank-content");
    try{
      const [rainResponse,estateResponse]=await Promise.all([fetch("https://nawakonnakhonchai-wq.github.io/Rain_24H/rainfall_24h.geojson",{cache:"no-store"}),fetch("./data/thaiwater_latest.json",{cache:"no-store"})]);
      if(!rainResponse.ok||!estateResponse.ok)throw Error("Data unavailable");
      const [rainFeed,estateFeed]=await Promise.all([rainResponse.json(),estateResponse.json()]);
      const stations=(rainFeed.features||[]).map(point).filter(Boolean),estates=(estateFeed.estates||[]).filter(e=>Number.isFinite(Number(e.lat))&&Number.isFinite(Number(e.lon)));
      const matches=estates.map(estate=>{const nearby=stations.map(station=>({station,distance:km(Number(estate.lat),Number(estate.lon),station.lat,station.lon)})).filter(x=>x.distance<=RADIUS);
        nearby.sort((a,b)=>b.station.rain-a.station.rain||a.distance-b.distance);return {estate,nearby,nearest:nearby[0]||null,maxRain:nearby[0]?.station.rain||0};
      }).filter(x=>x.nearest).sort((a,b)=>b.maxRain-a.maxRain||a.nearest.distance-b.nearest.distance);
      const stationMatches=stations.map(station=>{let nearest=null;for(const e of estates){const distance=km(station.lat,station.lon,Number(e.lat),Number(e.lon));if(!nearest||distance<nearest.distance)nearest={estate:e,distance}}return {station,nearest}}).filter(x=>x.nearest&&x.nearest.distance<=RADIUS).sort((a,b)=>b.station.rain-a.station.rain);
      const topStations=stationMatches.slice(0,10),topEstates=matches.slice(0,10),peak=topEstates[0]?.maxRain||0;
      rainPanel.querySelector(".rain-rank-max").textContent=topStations.length?"สูงสุด "+fmt(topStations[0].station.rain)+" มม.":"ไม่มีข้อมูลเข้าเกณฑ์";
      estatePanel.querySelector(".rain-rank-max").textContent=topEstates.length?"สูงสุด "+fmt(peak)+" มม.":"ไม่มีข้อมูลเข้าเกณฑ์";
      rainBody.innerHTML=topStations.length?'<div class="rain-station-ranking">'+topStations.map(({station,nearest},i)=>'<button type="button" class="rain-station-row rain-zoom" data-lat="'+station.lat+'" data-lon="'+station.lon+'" data-label="'+escape(station.name)+'" title="'+escape(station.name)+' • '+escape(station.time)+'"><span class="rain-station-name"><i>'+(i+1)+'.</i><span>'+escape(station.name)+'<small>'+escape(station.province)+' • ใกล้ '+escape(nearest.estate.name)+' '+fmt(nearest.distance)+' กม.</small></span></span><strong>'+fmt(station.rain)+' มม.</strong></button>').join("")+'</div><p class="rain-rank-note">คลิกรายการเพื่อซูมไปสถานีฝน • ระยะห่างถึงนิคมฯ ใกล้ที่สุด</p>':'<p class="rain-rank-empty">ไม่พบสถานีฝนตั้งแต่ 20 มม. ภายใน 30 กม. จากนิคมฯ</p>';
      estateBody.innerHTML=topEstates.length?'<div class="estate-rain-bars">'+topEstates.map(({estate,nearest,maxRain})=>'<button type="button" class="estate-rain-bar rain-zoom" data-lat="'+Number(estate.lat)+'" data-lon="'+Number(estate.lon)+'" data-label="'+escape(estate.name)+'" title="'+escape(estate.name)+' • '+escape(nearest.station.name)+' • '+fmt(nearest.distance)+' กม. • '+fmt(maxRain)+' มม."><b>'+fmt(maxRain)+'</b><span class="estate-rain-track"><span style="height:'+Math.max(5,maxRain/peak*100)+'%"></span></span><small>'+escape(estate.name.replace(/^นิคมอุตสาหกรรม/,"นิคมฯ "))+'</small><em>'+fmt(nearest.distance)+' กม.</em></button>').join("")+'</div><p class="rain-rank-note">ค่าฝนสูงสุดของสถานีภายใน 30 กม. • ระยะห่างถึงสถานีที่ใช้ประเมิน • คลิกแท่งเพื่อซูมไปนิคมฯ</p>':'<p class="rain-rank-empty">ไม่พบนิคมฯ ภายใน 30 กม. จากสถานีฝนที่เข้าเกณฑ์</p>';
      [rainPanel,estatePanel].forEach(panel=>panel.addEventListener("click",event=>{const button=event.target.closest(".rain-zoom");if(button)zoom(Number(button.dataset.lat),Number(button.dataset.lon),button.dataset.label)}));
    }catch(error){rainBody.textContent="โหลดข้อมูลฝนสะสม 24 ชั่วโมงไม่สำเร็จ กรุณาลองใหม่";estateBody.textContent="ยังไม่สามารถคำนวณนิคมฯ ที่เข้าเกณฑ์ได้";console.warn("Rain and estate watch data unavailable",error)}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(start,0));else setTimeout(start,0);
})();
