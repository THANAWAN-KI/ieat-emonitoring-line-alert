(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const esc=value=>String(value==null?"":value).replace(/[&<>"\']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","\'":"&#39;"}[char]));
  let latestData=null;

  function statusLevel(status,score){
    const text=String(status||"");
    if(Number(score)>=4||text.includes("ล้น")||text.includes("วิกฤต"))return "critical";
    if(Number(score)>=3||text.includes("มาก")||text.includes("เฝ้าระวัง"))return "warning";
    return "normal";
  }
  function fmt(value,digits=1){
    return value==null||value===""?"–":Number(value).toLocaleString("th-TH",{maximumFractionDigits:digits});
  }
  function shortTime(value){
    if(!value)return "–";
    const date=new Date(String(value).replace(" ","T"));
    return Number.isNaN(date.getTime())?String(value):date.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})+" น.";
  }
  function cleanProvince(value){return String(value||"–").replace(/^จ\./,"")}
  function distanceKm(a,b,c,d){
    const R=6371,toRad=x=>x*Math.PI/180,dp=toRad(c-a),dl=toRad(d-b);
    const q=Math.sin(dp/2)**2+Math.cos(toRad(a))*Math.cos(toRad(c))*Math.sin(dl/2)**2;
    return 2*R*Math.asin(Math.sqrt(q));
  }
  function renderPins(data){
    const estates=(data.estate_watch||[]).filter(e=>Number.isFinite(Number(e.lat))&&Number.isFinite(Number(e.lon)));
    ["estatePinOverlay","forecastPinOverlay24","forecastPinOverlay48"].forEach(id=>{
      const overlay=$(id);if(!overlay)return;overlay.innerHTML="";
      estates.forEach(estate=>{
        const left=(Number(estate.lon)-97.3)/(105.8-97.3)*100;
        const top=(20.5-Number(estate.lat))/(20.5-5.6)*100;
        if(left<0||left>100||top<0||top>100)return;
        const dot=document.createElement("i");dot.className="report-estate-dot";dot.style.left=left+"%";dot.style.top=top+"%";dot.title=estate.name;overlay.appendChild(dot);
      });
    });
  }
  const MAP_WIDTH=1100,MAP_HEIGHT=405,OSM_TILE_SIZE=256;
  function mercatorWorld(lon,lat,zoom){
    const scale=OSM_TILE_SIZE*Math.pow(2,zoom);
    const safeLat=Math.max(-85.05112878,Math.min(85.05112878,Number(lat)));
    const sin=Math.sin(safeLat*Math.PI/180);
    return [
      (Number(lon)+180)/360*scale,
      (.5-Math.log((1+sin)/(1-sin))/(4*Math.PI))*scale
    ];
  }
  function osmLayout(bounds){
    const [west,south,east,north]=bounds;
    const nw0=mercatorWorld(west,north,0),se0=mercatorWorld(east,south,0);
    const spanX=Math.max(.000001,se0[0]-nw0[0]),spanY=Math.max(.000001,se0[1]-nw0[1]);
    const zoom=Math.max(3,Math.min(13,Math.floor(Math.min(
      Math.log2(MAP_WIDTH/spanX),
      Math.log2(MAP_HEIGHT/spanY)
    ))));
    const nw=mercatorWorld(west,north,zoom),se=mercatorWorld(east,south,zoom);
    const spanW=se[0]-nw[0],spanH=se[1]-nw[1];
    const scale=Math.max(MAP_WIDTH/spanW,MAP_HEIGHT/spanH); // cover the entire report map frame
    const drawW=spanW*scale,drawH=spanH*scale;
    const offsetX=(MAP_WIDTH-drawW)/2,offsetY=(MAP_HEIGHT-drawH)/2;
    const project=coord=>{
      const p=mercatorWorld(coord[0],coord[1],zoom);
      return [offsetX+(p[0]-nw[0])*scale,offsetY+(p[1]-nw[1])*scale];
    };
    const tiles=[];
    const minX=Math.floor(nw[0]/OSM_TILE_SIZE),maxX=Math.floor(se[0]/OSM_TILE_SIZE);
    const minY=Math.floor(nw[1]/OSM_TILE_SIZE),maxY=Math.floor(se[1]/OSM_TILE_SIZE);
    const limit=Math.pow(2,zoom);
    for(let x=minX;x<=maxX;x++)for(let y=minY;y<=maxY;y++){
      if(y<0||y>=limit)continue;
      const wrappedX=((x%limit)+limit)%limit;
      const px=offsetX+(x*OSM_TILE_SIZE-nw[0])*scale;
      const py=offsetY+(y*OSM_TILE_SIZE-nw[1])*scale;
      const size=OSM_TILE_SIZE*scale+1;
      const host=["a","b","c"][Math.abs(x+y)%3];
      tiles.push('<image href="https://'+host+'.tile.openstreetmap.org/'+zoom+'/'+wrappedX+'/'+y+'.png" x="'+px.toFixed(2)+'" y="'+py.toFixed(2)+'" width="'+size.toFixed(2)+'" height="'+size.toFixed(2)+'" preserveAspectRatio="none" crossorigin="anonymous"/>');
    }
    return {project,tiles:tiles.join("")};
  }
  function polygonPath(geometry,project){
    const polygons=geometry?.rings?[geometry.rings]:geometry?.type==="MultiPolygon"?geometry.coordinates:geometry?.type==="Polygon"?[geometry.coordinates]:[];
    return polygons.map(poly=>poly.map(ring=>ring.map((coord,index)=>{const p=project(coord);return(index?"L":"M")+p[0].toFixed(1)+","+p[1].toFixed(1)}).join(" ")+" Z").join(" ")).join(" ");
  }
  function setupForecastMapZoom(frame,areaOverlay){
    let controls=frame.querySelector(".report-map-zoom-controls");
    if(!controls){
      controls=document.createElement("div");
      controls.className="report-map-zoom-controls";
      controls.innerHTML='<button type="button" data-zoom="in" aria-label="ซูมเข้า">+</button><button type="button" data-zoom="out" aria-label="ซูมออก">−</button><button type="button" data-zoom="reset" aria-label="รีเซ็ตแผนที่">↺</button>';
      frame.appendChild(controls);
    }
    const state=()=>{
      const zoom=Math.max(1,Math.min(4,Number(areaOverlay.dataset.zoom)||1));
      let panX=Number(areaOverlay.dataset.panX)||0,panY=Number(areaOverlay.dataset.panY)||0;
      if(zoom<=1){panX=0;panY=0}
      const limitX=(zoom-1)*frame.clientWidth*.5,limitY=(zoom-1)*frame.clientHeight*.5;
      panX=Math.max(-limitX,Math.min(limitX,panX));
      panY=Math.max(-limitY,Math.min(limitY,panY));
      areaOverlay.dataset.zoom=String(zoom);
      areaOverlay.dataset.panX=String(panX);
      areaOverlay.dataset.panY=String(panY);
      areaOverlay.style.setProperty("transform","translate("+panX+"px,"+panY+"px) scale("+zoom+")");
      areaOverlay.style.setProperty("transform-origin","center center");
      areaOverlay.style.setProperty("cursor",areaOverlay.dataset.dragging==="true"?"grabbing":zoom>1?"grab":"zoom-in");
    };
    const changeZoom=delta=>{
      const zoom=Math.max(1,Math.min(4,(Number(areaOverlay.dataset.zoom)||1)+delta));
      areaOverlay.dataset.zoom=String(zoom);
      if(zoom<=1){areaOverlay.dataset.panX="0";areaOverlay.dataset.panY="0"}
      state();
    };
    if(!controls.dataset.bound){
      controls.dataset.bound="true";
      controls.addEventListener("click",event=>{
        const action=event.target.closest("button")?.dataset.zoom;if(!action)return;
        event.stopPropagation();
        if(action==="in")changeZoom(.25);
        else if(action==="out")changeZoom(-.25);
        else{areaOverlay.dataset.zoom="1";areaOverlay.dataset.panX="0";areaOverlay.dataset.panY="0";state()}
      });
      frame.addEventListener("wheel",event=>{
        event.preventDefault();
        changeZoom(event.deltaY < 0 ? 0.15 : -0.15);
      },{passive:false});
    }
    if(!areaOverlay.dataset.mouseZoomBound){
      areaOverlay.dataset.mouseZoomBound="true";
      areaOverlay.setAttribute("title","ลากเพื่อเลื่อน · คลิกซ้ายเพื่อซูมเข้า · คลิกขวาเพื่อซูมออก · หมุนล้อเมาส์เพื่อซูม");
      let drag=null,moved=false;
      areaOverlay.addEventListener("pointerdown",event=>{
        if(event.button!==0)return;
        drag={x:event.clientX,y:event.clientY,panX:Number(areaOverlay.dataset.panX)||0,panY:Number(areaOverlay.dataset.panY)||0};
        moved=false;areaOverlay.dataset.dragging="true";areaOverlay.setPointerCapture?.(event.pointerId);state();
      });
      areaOverlay.addEventListener("pointermove",event=>{
        if(!drag)return;
        const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
        if(Math.abs(dx)+Math.abs(dy)>4)moved=true;
        areaOverlay.dataset.panX=String(drag.panX+dx);
        areaOverlay.dataset.panY=String(drag.panY+dy);
        state();
      });
      const stopDrag=event=>{
        if(!drag)return;
        areaOverlay.releasePointerCapture?.(event.pointerId);
        drag=null;areaOverlay.dataset.dragging="false";areaOverlay.dataset.dragMoved=moved?"true":"false";state();
      };
      areaOverlay.addEventListener("pointerup",stopDrag);
      areaOverlay.addEventListener("pointercancel",stopDrag);
      areaOverlay.addEventListener("click",event=>{
        if(areaOverlay.dataset.dragMoved==="true"){areaOverlay.dataset.dragMoved="false";return}
        changeZoom(.25);
      });
      areaOverlay.addEventListener("contextmenu",event=>{event.preventDefault();changeZoom(-.25)});
    }
    state();
  }
  async function renderForecastPeriodMap(period,areas,imageId){
    const image=$(imageId);if(!image)return;
    const frame=image.closest(".three-day-risk-map");if(!frame)return;
    frame.querySelectorAll(".forecast-area-overlay,.forecast-risk-overlay,.forecast-map-period-legend,.report-map-zoom-controls,.arcgis-report-map").forEach(el=>el.remove());
    image.style.setProperty("display","none","important");
    frame.style.setProperty("height","600px","important");
    frame.style.setProperty("min-height","600px","important");
    frame.style.setProperty("overflow","hidden","important");
    const iframe=document.createElement("iframe");
    iframe.className="arcgis-report-map arcgis-report-map-"+period;
    iframe.width="700";
    iframe.height="600";
    iframe.allow="local-network-access; geolocation";
    iframe.title="แผนที่แสดงข้อมูลน้ำท่วม พื้นที่เฝ้าระวัง "+(period==="24h"?"24":"48")+" ชั่วโมง";
    iframe.src="https://ieat.maps.arcgis.com/apps/mapviewer/index.html?configurableview=true&webmap=3d24287ac6ea49cd823625ddad496e01&theme=light&bookmarks=true&legend=true&information=true&share=true&scroll=false&basemaps=true&center=101.60218426570209,13.611210763141127&scale=4622324.434309";
    iframe.loading="eager";
    iframe.referrerPolicy="strict-origin-when-cross-origin";
    iframe.style.cssText="display:block;width:100%;height:100%;min-height:600px;border:0;background:#fff;pointer-events:auto";
    frame.appendChild(iframe);
  }
  function renderForecastMaps(data){
    renderForecastPeriodMap("24h",data.flash_flood?.["24h"]?.areas||[],"forecastMap24");
    renderForecastPeriodMap("48h",data.flash_flood?.["48h"]?.areas||[],"forecastMap48");
  }
  function renderExportData(data){
    latestData=data;
    const estates=(data.estate_watch||[]).slice(0,8);
    $("exportEstateRows").innerHTML=estates.length?estates.map((e,i)=>{
      const overflow=String(e.status||"").includes("ล้นตลิ่ง"),level=overflow?"overflow":statusLevel(e.status,e.severity_score);
      const lat=Number(e.lat),lon=Number(e.lon),hasPoint=Number.isFinite(lat)&&Number.isFinite(lon)&&lat!==0&&lon!==0&&Math.abs(lat)<=90&&Math.abs(lon)<=180;
      const estateName=hasPoint?'<button type="button" class="report-estate-map-link" data-report-lat="'+lat+'" data-report-lon="'+lon+'" title="ดูตำแหน่งนิคมฯ บนแผนที่รายงาน">'+e.name+'</button>':'<b>'+e.name+'</b>';
      return '<tr><td>'+(i+1)+'</td><td>'+estateName+'</td><td>'+fmt(e.alert_station_count,0)+' สถานี</td><td>'+fmt(e.nearest_alert_km)+' กม.</td><td>'+(e.max_rainfall_mm==null?"–":fmt(e.max_rainfall_mm)+" มม.")+'</td><td><span class="export-status '+level+'"'+(overflow?' style="background:#ED3B21!important;color:#fff!important"':'')+'>'+(e.status||"เฝ้าระวัง")+'</span></td></tr>';
    }).join(""):'<tr><td colspan="6">ไม่พบนิคมอุตสาหกรรมเข้าเกณฑ์เฝ้าระวัง</td></tr>';

    const waters=(data.stations||[]).filter(s=>s.kind==="waterlevel"&&Number(s.distance_km)<=30&&Number(s.severity_score)>=2).slice(0,8);
    $("exportWaterRows").innerHTML=waters.length?waters.map(s=>{
      const overflow=String(s.status||"").includes("ล้นตลิ่ง"),level=overflow?"overflow":statusLevel(s.status,s.severity_score);
      return '<tr><td><b>'+s.station+'</b><small style="display:block">'+s.nearest_estate+'</small></td><td>'+s.value_text+'</td><td><span class="export-status '+level+'"'+(overflow?' style="background:#ED3B21!important;color:#fff!important"':'')+'>'+(s.status||"เฝ้าระวัง")+'</span></td><td>'+shortTime(s.observed_at)+'</td></tr>';
    }).join(""):'<tr><td colspan="4">ไม่พบสถานีระดับน้ำผิดปกติใกล้นิคมฯ</td></tr>';

    const locatedEstates=(data.estate_watch||[]).filter(e=>Number.isFinite(Number(e.lat))&&Number.isFinite(Number(e.lon)));
    const forecast=[];
    ["24h","48h"].forEach(period=>{
      (data.flash_flood?.[period]?.areas||[]).forEach(area=>{
        if(!Number.isFinite(Number(area.latitude))||!Number.isFinite(Number(area.longitude)))return;
        let nearest=null,km=Infinity;
        locatedEstates.forEach(estate=>{const d=distanceKm(Number(area.latitude),Number(area.longitude),Number(estate.lat),Number(estate.lon));if(d<km){km=d;nearest=estate}});
        if(nearest&&km<=30)forecast.push({period,area,nearest,km});
      });
    });
    function renderForecastPeriod(period,targetId){
      const rows=forecast.filter(row=>row.period===period).slice(0,6);
      const target=$(targetId);if(!target)return;
      target.innerHTML=rows.length?rows.map(row=>{
        return '<tr><td>'+cleanProvince(row.area.province)+'</td><td>'+(row.area.amphoe||"–")+'</td><td>'+(row.area.tambon||"–")+'</td><td>'+(row.area.sum_rainfall_mm==null?"–":fmt(row.area.sum_rainfall_mm)+" มม.")+'</td><td><b>'+row.nearest.name+'</b><small style="display:block">'+fmt(row.km)+' กม.</small></td></tr>';
      }).join(""):'<tr><td colspan="5">ไม่พบพื้นที่เฝ้าระวัง '+(period==="24h"?"24":"48")+' ชั่วโมงภายในรัศมี 30 กิโลเมตรจากนิคมฯ</td></tr>';
    }
    renderForecastPeriod("24h","exportForecastRows24");
    renderForecastPeriod("48h","exportForecastRows48");
    renderPins(data);
    renderForecastMaps(data);
  }
  function syncEditableText(){
    const period=$("reportPeriodTitle")?.textContent?.trim()||"ข้อมูลตามช่วงเวลารายงาน";
    document.querySelectorAll(".shared-report-period").forEach(el=>el.textContent=period);
  }
  function preview(items){
    $("pngPreviewModal")?.remove();
    const modal=document.createElement("div");modal.id="pngPreviewModal";
    modal.innerHTML='<div class="png-dialog"><div class="png-head"><strong>สร้างภาพ PNG สำเร็จ</strong><button type="button" aria-label="ปิด">×</button></div><p>คลิกขวาที่ภาพด้านล่าง แล้วเลือก Save image as… หรือ Copy image</p><div class="png-preview-list">'+items.map(item=>'<section><h3>'+item.label+'</h3><img src="'+item.url+'" alt="'+item.label+'" title="คลิกขวาเพื่อบันทึกหรือคัดลอกภาพ"></section>').join("")+'</div></div>';
    const style=document.createElement("style");style.textContent="#pngPreviewModal{position:fixed;inset:0;z-index:99999;background:rgba(20,31,48,.75);padding:20px;display:grid;place-items:center}.png-dialog{width:min(1100px,96vw);max-height:94vh;overflow:auto;background:#fff;border-radius:16px;padding:20px;font-family:Sarabun,sans-serif}.png-head{display:flex;justify-content:space-between;align-items:center;font-size:20px}.png-head button{border:0;background:#eee;border-radius:50%;width:38px;height:38px;font-size:24px}.png-dialog p{color:#68717d}.png-preview-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:15px}.png-preview-list section{border:1px solid #ccd3d9;padding:10px}.png-preview-list h3{margin:0 0 8px}.png-preview-list img{display:block;width:100%;height:auto;border:1px solid #ddd}";
    modal.appendChild(style);document.body.appendChild(modal);modal.querySelector(".png-head button").onclick=()=>{items.forEach(x=>URL.revokeObjectURL(x.url));modal.remove()};
  }
  async function waitForSheetAssets(sheet){
    if(document.fonts?.ready)await document.fonts.ready;
    const images=[...sheet.querySelectorAll("img")];
    await Promise.all(images.map(image=>{
      if(image.complete){
        if(typeof image.decode==="function")return image.decode().catch(()=>{});
        return Promise.resolve();
      }
      return new Promise(resolve=>{
        const done=()=>resolve();
        image.addEventListener("load",done,{once:true});
        image.addEventListener("error",done,{once:true});
        setTimeout(done,12000);
      });
    }));
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  }
  async function captureSheet(sheet){
    if(typeof html2canvas!=="function")throw new Error("Export library unavailable");

    // Render an exact duplicate of the visible report. Do not resize the live
    // page or its parent: changing zoom/width here makes Thai text reflow and
    // produces a PNG that is different from the preview.
    await waitForSheetAssets(sheet);
    const rect=sheet.getBoundingClientRect();
    const renderWidth=Math.max(1,Math.round(sheet.offsetWidth||rect.width));
    const renderHeight=Math.max(1,Math.round(sheet.offsetHeight||rect.height));
    const renderRoot=document.createElement("div");
    const clone=sheet.cloneNode(true);
    if(sheet.id==="reportCanvas"){
      const frame=clone.querySelector(".sheet-map-frame");
      if(frame){
        const mapImage=document.createElement("img");
        mapImage.alt="แผนที่สถานการณ์น้ำท่วมสำหรับรายงาน";
        mapImage.src=window.IEAT_REPORT_MAP_IMAGE||new URL("./assets/thaiwater-overall-latest.png",document.baseURI).href;
        mapImage.style.cssText="display:block;width:100%;height:100%;object-fit:cover;background:#eef3f7";
        try{await mapImage.decode()}catch(error){throw new Error("Report map image unavailable")}
        frame.replaceChildren(mapImage);
      }
    }

    renderRoot.setAttribute("aria-hidden","true");
    renderRoot.style.cssText=[
      "position:fixed",
      "left:-100000px",
      "top:0",
      "width:"+renderWidth+"px",
      "height:"+renderHeight+"px",
      "overflow:hidden",
      "pointer-events:none",
      "background:#fff",
      "z-index:-2147483647"
    ].join(";");

    clone.style.setProperty("width",renderWidth+"px","important");
    clone.style.setProperty("min-width",renderWidth+"px","important");
    clone.style.setProperty("max-width",renderWidth+"px","important");
    clone.style.setProperty("height",renderHeight+"px","important");
    clone.style.setProperty("min-height",renderHeight+"px","important");
    clone.style.setProperty("max-height",renderHeight+"px","important");
    clone.style.setProperty("margin","0","important");
    clone.style.setProperty("transform","none","important");
    clone.style.setProperty("zoom","1","important");
    clone.style.setProperty("box-sizing","border-box","important");
    renderRoot.appendChild(clone);
    (document.getElementById("infographic")||document.body).appendChild(renderRoot);

    try{
      await waitForSheetAssets(clone);
      const scale=Math.max(2,Math.min(3,Number(window.devicePixelRatio)||1));
      const canvas=await html2canvas(clone,{
        scale,
        backgroundColor:"#ffffff",
        useCORS:true,
        allowTaint:false,
        logging:false,
        width:renderWidth,
        height:renderHeight,
        windowWidth:Math.max(renderWidth,document.documentElement.clientWidth),
        windowHeight:Math.max(renderHeight,document.documentElement.clientHeight),
        scrollX:0,
        scrollY:0,
        imageTimeout:15000,
        removeContainer:true
      });
      return await new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("PNG blob unavailable")),"image/png",1));
    }finally{
      renderRoot.remove();
    }
  }
  async function exportPages(pageNumber){
    const button=pageNumber?document.querySelector('[data-export-page="'+pageNumber+'"]'):$("downloadPng");
    const old=button?.textContent;
    try{
      if(button){button.disabled=true;button.textContent="กำลังสร้างภาพ…"}
      syncEditableText();
      if(document.fonts?.ready)await document.fonts.ready;
      const sheets=pageNumber?[document.querySelector('[data-report-page="'+pageNumber+'"]')]:[...document.querySelectorAll("[data-report-page]")];
      const stamp=new Date().toISOString().slice(0,10),items=[];
      for(const sheet of sheets){
        const page=sheet.dataset.reportPage,blob=await captureSheet(sheet);
        items.push({url:URL.createObjectURL(blob),name:"IEAT-Flood-Report-"+stamp+"-page-"+page+".png",label:"รายงานหน้า "+page});
      }
      preview(items);
    }catch(error){
      console.error(error);alert("ไม่สามารถสร้างภาพ PNG ได้ กรุณาเปิดด้วย Chrome หรือ Safari แล้วลองอีกครั้ง");
    }finally{
      document.querySelectorAll(".report-exporting").forEach(el=>el.classList.remove("report-exporting"));
      if(button){button.disabled=false;button.textContent=old}
    }
  }
  function bindImageUpload(inputId,imageIds){
    $(inputId)?.addEventListener("change",event=>{
      const file=event.target.files?.[0];if(!file)return;
      const reader=new FileReader();reader.onload=()=>imageIds.forEach(id=>{const img=$(id);if(img){img.src=reader.result;img.dataset.userUploaded="true";const overlay=img.closest(".three-day-risk-map")?.querySelector(".forecast-risk-overlay");if(overlay)overlay.replaceChildren()}});reader.readAsDataURL(file);
    });
  }
  function setupMapUpload(){
    $("reportMapUpload")?.addEventListener("change",event=>{
      const file=event.target.files?.[0];if(!file)return;
      const reader=new FileReader();
      reader.onload=()=>{window.IEAT_REPORT_MAP_IMAGE=reader.result};
      reader.readAsDataURL(file);
    });
    bindImageUpload("forecast24Upload",["forecastMap24"]);
    bindImageUpload("forecast48Upload",["forecastMap48"]);
  }
  async function refreshLatest(){
    try{
      const response=await fetch(new URL("./data/thaiwater_latest.json?v="+Date.now(),document.baseURI),{cache:"no-store"});
      if(response.ok)renderExportData(await response.json());
    }catch(error){console.warn("ใช้ข้อมูลล่าสุดที่มีอยู่ในหน้า",error)}
    const stamp=Date.now();
    ["infographicMap","forecastMap24","forecastMap48"].forEach(id=>{const img=$(id);if(img&&img.src.includes("thaiwater-overall-latest.png"))img.src="assets/thaiwater-overall-latest.png?v="+stamp});
  }
  window.addEventListener("ieat:data-ready",event=>renderExportData(event.detail));
  window.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("contextmenu",event=>{const sheet=event.target.closest?.("[data-report-page]");if(!sheet)return;event.preventDefault();exportPages(sheet.dataset.reportPage)});
    $("reportPeriodTitle")?.addEventListener("input",syncEditableText);
    setupMapUpload();
    refreshLatest();
    if(window.IEAT_LIVE_DATA)renderExportData(window.IEAT_LIVE_DATA);
  });
  window.downloadPage=()=>exportPages();
})();
