(() => {
  const get=id=>document.getElementById(id);
  const form=get('dssEquipmentNearbyForm'),frame=get('emergencyReportFrame');
  const output=get('dssEquipmentNearbyOutput'),status=get('dssEquipmentNearbyStatus'),download=get('dssEquipmentNearbyDownload');
  const classD=/(?:class|ประเภท)\s*[-:]?\s*d\b/i;
  const extinguisher=/ถังดับเพลิง|เครื่องดับเพลิงแบบมือถือ|extinguisher/i;
  const norm=value=>String(value??'').trim().toLowerCase().replace(/\s+/g,' ');
  const dateFormat=new Intl.DateTimeFormat('th-TH',{dateStyle:'medium',timeStyle:'short',timeZone:'Asia/Bangkok'});
  const node=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n;};
  function distanceKm(lat,lng,y,x){
    const rad=Math.PI/180,dy=(y-lat)*rad,dx=(x-lng)*rad;
    const a=Math.sin(dy/2)**2+Math.cos(lat*rad)*Math.cos(y*rad)*Math.sin(dx/2)**2;
    return 12742*Math.asin(Math.sqrt(Math.min(1,a)));
  }
  function currentReport(){
    const doc=frame.contentDocument;
    const company=doc?.querySelector('#report [data-out="company"]')?.textContent.trim()||'';
    const lat=Number(doc?.getElementById('lat')?.value),lng=Number(doc?.getElementById('lng')?.value);
    const registration=doc?.querySelector('#report [data-out="registration"]')?.textContent||'';
    const valid=company&&!['—','-','บริษัท / โรงงานที่เกิดเหตุ','กรุงเทพมหานคร (พื้นที่อ้างอิงเริ่มต้น)'].includes(company)&&lat>=5&&lat<=22&&lng>=97&&lng<=106;
    return {doc,company,lat,lng,registration,valid};
  }
  function equipmentCenter(){
    const incident=window.ieatCoverageIncident;
    if(incident?.company&&Number.isFinite(incident.lat)&&Number.isFinite(incident.lng))return {...incident,valid:true};
    return currentReport();
  }
  function findEquipment(features,term,center,km){
    const items=[],seen=new Set();
    let noLocation=0;
    const isClassD=classD.test(term)||norm(term)==='d';
    for(const feature of features){
      const p=feature.properties||{};
      if(p.doc_active!==true||!p.comp_name||norm(p.comp_name)===norm(center.company))continue;
      const coordinates=feature.geometry?.coordinates||[feature.geometry?.x,feature.geometry?.y];
      const [x,y]=coordinates.map(Number);
      for(const key of Object.keys(p)){
        if(!/^equipment\d+_name$/.test(key)||!p[key])continue;
        const prefix=key.slice(0,-4),name=String(p[key]),type=String(p[prefix+'type']||'');
        if(isClassD?!(extinguisher.test(name)&&classD.test(name+' '+type)):!norm(name+' '+type).includes(norm(term)))continue;
        if(!(x>=97&&x<=106&&y>=5&&y<=22)){noLocation++;continue;}
        const distance=distanceKm(center.lat,center.lng,y,x);
        if(distance>km)continue;
        const amount=p[prefix+'amount'],unit=p[prefix+'amountUnit']||'';
        const capacity=p[prefix+'volume'],capacityUnit=p[prefix+'volumeUnit']||'';
        const identity=[p.comp_uid||p.comp_no||p.comp_name,name,type,amount,unit,capacity,capacityUnit,x,y].join('|');
        if(seen.has(identity))continue;
        seen.add(identity);items.push({company:p.comp_name,estate:p.comp_zone||'ไม่ระบุ',name,type,amount,unit,capacity,capacityUnit,distance});
      }
    }
    return {items:items.sort((a,b)=>a.distance-b.distance),noLocation};
  }
  let savedKey='';
  const key=()=>{const {company,lat,lng}=equipmentCenter();return [company,lat,lng,get('dssEquipmentNearbyQuery').value,get('dssEquipmentNearbyRadius').value].join('|');};
  form.addEventListener('input',()=>{download.disabled=true;status.textContent='กดค้นหาเพื่ออัปเดตผล';});
  form.onsubmit=async event=>{
    event.preventDefault();
    download.disabled=true;output.replaceChildren();savedKey='';
    const center=equipmentCenter();
    if(!center.valid){status.textContent='เลือกโรงงานและกำหนดจุดเกิดเหตุในรายงานก่อน';return;}
    const query=get('dssEquipmentNearbyQuery').value.trim(),km=Number(get('dssEquipmentNearbyRadius').value),searchKey=key();
    if(!query){status.textContent='กรอกชื่อหรือประเภทอุปกรณ์';return;}
    const button=form.querySelector('button[type="submit"]');
    button.disabled=true;status.textContent='กำลังค้นหาอุปกรณ์ในระบบ DSS กนอ.…';
    try{
      const load=frame.contentWindow?.loadDssEquipment;
      if(typeof load!=='function')throw Error('ระบบรายงานยังโหลดไม่เสร็จ');
      const features=await load();
      if(!features?.length)throw Error('โหลดฐานข้อมูลอุปกรณ์ DSS ไม่สำเร็จ');
      if(searchKey!==key()){status.textContent='ข้อมูลจุดเกิดเหตุหรือตัวกรองเปลี่ยน กรุณาค้นหาใหม่';return;}
      const {items,noLocation}=findEquipment(features,query,center,km);
      output.append(node('h4','ผลค้นหาอุปกรณ์สนับสนุนจาก DSS'),node('p','จุดอ้างอิง: '+center.company+' · รัศมี '+km+' กม. · ค้นหา “'+query+'”'),node('p','ค้นเมื่อ '+dateFormat.format(new Date())+' · พบ '+items.length+' รายการในระเบียนที่ใช้งาน'));
      if(items.length){
        const list=document.createElement('ol');
        for(const item of items){
          const amount=item.amount!=null&&String(item.amount).trim()?'จำนวนตามทะเบียน '+item.amount+' '+item.unit:'ไม่ระบุจำนวน';
          const size=item.capacity!=null&&String(item.capacity).trim()?' · ขนาด '+item.capacity+' '+item.capacityUnit:'';
          list.append(node('li',item.company+' ('+item.estate+') · '+item.name+' '+item.type+' · '+amount+size+' · ระยะเส้นตรง '+item.distance.toFixed(2)+' กม.'));
        }
        output.append(list);
      }else output.append(node('p','ไม่พบรายการที่ตรงเงื่อนไขในข้อมูล DSS ที่มีพิกัด'));
      if(noLocation)output.append(node('p','มีรายการตรงคำค้น '+noLocation+' รายการที่ขาดพิกัด จึงตรวจระยะไม่ได้'));
      output.append(node('p','แหล่งข้อมูล: ฐานอุปกรณ์ DSS กนอ. · โปรดประสานโรงงานเพื่อยืนยันจำนวนและความพร้อมก่อนขอใช้'));
      savedKey=searchKey;download.disabled=false;status.textContent='ค้นหาเสร็จแล้ว · ดาวน์โหลดภาพผลค้นหาได้';
    }catch(error){status.textContent=error.message||'ค้นหาไม่สำเร็จ';}
    finally{button.disabled=false;}
  };
  download.onclick=async()=>{
    if(!savedKey||savedKey!==key()){download.disabled=true;status.textContent='กรุณาค้นหาใหม่ก่อนดาวน์โหลด';return;}
    download.disabled=true;
    try{
      const capture=frame.contentWindow?.html2canvas;
      if(typeof capture!=='function')throw Error('เครื่องมือบันทึกภาพยังโหลดไม่เสร็จ');
      status.textContent='กำลังสร้างภาพผลค้นหา…';
      const canvas=await capture(output,{backgroundColor:'#fff',scale:2,logging:false});
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
      if(!blob)throw Error('สร้างภาพไม่สำเร็จ');
      const url=URL.createObjectURL(blob),link=node('a','ดาวน์โหลด PNG');
      link.href=url;link.download='IEAT-DSS-equipment-'+Date.now()+'.png';status.replaceChildren(link);link.click();
      setTimeout(()=>URL.revokeObjectURL(url),300000);
    }catch(error){status.textContent=error.message||'ดาวน์โหลดไม่สำเร็จ';}
    finally{download.disabled=false;}
  };

  function completeReport(){
    const {doc}=currentReport();
    const brief=doc?.getElementById('dssFieldBrief'),nearby=doc?.getElementById('reportNearbySupport');
    if(!brief||!nearby)return;
    const snapshot=window.ieatCoverageReport;
    const selected=doc.querySelector('#report [data-out="company"]')?.textContent.trim();
    let syncNote=doc.getElementById('dssCoverageReportData');
    if(snapshot&&selected===snapshot.company){
      if(!syncNote){syncNote=doc.createElement('section');syncNote.id='dssCoverageReportData';nearby.after(syncNote);}
      const lines=snapshot.rows.map(row=>row.title+': '+(row.failed?'โหลดไม่ได้':row.items.length+(row.truncated?'+':'')+' รายการ'+(row.items.length?' · '+row.items.slice(0,3).join(' / '):'')));
      const text='ข้อมูลจาก Dashboard Risk Map · '+snapshot.incidentType+' · รัศมี '+snapshot.km+' กม.\n'+lines.join('\n');
      if(syncNote.textContent!==text){syncNote.textContent=text;syncNote.style.cssText='white-space:pre-line;font-size:12px;line-height:1.55;padding:8px;border:1px solid #ddd';}
    }else syncNote?.remove();
    const radii=['bufferKm1','bufferKm2','bufferKm'].flatMap((id,i)=>{
      const value=Number(doc.getElementById(id)?.value);
      return doc.getElementById('bufferEnabled'+i)?.checked&&value>0?[value]:[];
    });
    const scope='ขอบเขตพื้นที่ที่ตรวจสอบรอบจุดเกิดเหตุ: '+(radii.length?radii.join(' / ')+' กม.':'ไม่ระบุรัศมี')+' · วงรัศมีแสดงระยะค้นหา พื้นที่ผลกระทบต้องพิจารณาจากข้อมูลเหตุและสภาพอากาศ';
    let note=doc.getElementById('dssExportScopeNote');
    if(!note){note=doc.createElement('p');note.id='dssExportScopeNote';note.style.cssText='margin:8px 0;font-size:13px;color:#333';nearby.before(note);}
    if(note.textContent!==scope)note.textContent=scope;
    const row=[...nearby.querySelectorAll('tr')].find(tr=>/CCTV/i.test(tr.querySelector('th')?.textContent||''));
    let cctv=doc.getElementById('dssExportCctvNote');
    if(!cctv){cctv=doc.createElement('p');cctv.id='dssExportCctvNote';cctv.style.cssText='margin:8px 0;font-size:13px;color:#333';nearby.after(cctv);}
    const summary=row?'4. กล้อง CCTV สังเกตการณ์ · ดูตำแหน่งและระยะในตารางข้อมูลสนับสนุน':'4. กล้อง CCTV สังเกตการณ์ · ยังไม่มีรายการกล้องแสดงในรายงาน โปรดตรวจชั้นข้อมูลและสถานะการโหลด';
    if(cctv.textContent!==summary)cctv.textContent=summary;
  }
  let observer;
  function bindReport(){
    observer?.disconnect();
    const {doc}=currentReport(),nearby=doc?.getElementById('reportNearbySupport');
    if(nearby){observer=new MutationObserver(completeReport);observer.observe(nearby,{childList:true,subtree:true});}
    completeReport();
  }
  frame.addEventListener('load',bindReport);
  window.addEventListener('message',event=>{
    if(event.origin===location.origin&&event.source===frame.contentWindow&&['dss:report-ready','dss:incident'].includes(event.data?.type))bindReport();
  });
  window.ieatCompleteRiskMapReport=completeReport;
  bindReport();
})();