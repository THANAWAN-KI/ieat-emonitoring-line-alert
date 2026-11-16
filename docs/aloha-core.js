/* Geometry ingestion only: this module does not calculate atmospheric dispersion. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.IEATAlohaCore=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const levels=['red','orange','yellow'];
function ring(raw){
 if(!Array.isArray(raw)||raw.length<3)throw Error('รูปขอบเขตต้องมีพิกัดอย่างน้อย 3 จุด');
 const r=raw.map(p=>{if(!Array.isArray(p)||p.length<2||!Number.isFinite(p[0])||!Number.isFinite(p[1])||Math.abs(p[0])>180||Math.abs(p[1])>90)throw Error('ต้องเป็นพิกัด WGS84 ลองจิจูด/ละติจูด');return [p[0],p[1]];});
 if(r[0][0]!==r.at(-1)[0]||r[0][1]!==r.at(-1)[1])r.push([...r[0]]);
 if(new Set(r.map(p=>p.join(','))).size<3||Math.abs(area(r))<1e-14)throw Error('ขอบเขตไม่มีพื้นที่');
 if(Math.max(...r.map(p=>p[0]))-Math.min(...r.map(p=>p[0]))>180)throw Error('ไม่รองรับขอบเขตข้ามเส้นวันที่');
 return r;
}
function area(r){let a=0;for(let i=1;i<r.length;i++)a+=r[i-1][0]*r[i][1]-r[i][0]*r[i-1][1];return a/2;}
function hint(name,color='') {const s=(name+' '+color).toLowerCase();if(/\bred\b|แดง|#ff0000/.test(s))return 'red';if(/\borange\b|ส้ม|#ff8000|#ffa500/.test(s))return 'orange';if(/\byellow\b|เหลือง|#ffff00/.test(s))return 'yellow';return '';}
function normalize(features){
 let points=0;const result=[];
 for(const [index,f] of features.entries()){
  if(!f||f.type!=='Feature')throw Error('GeoJSON ต้องมี Feature');
  const g=f.geometry;if(!g)continue;
  if(!['Polygon','MultiPolygon'].includes(g.type))continue;
  const polys=g.type==='Polygon'?[g.coordinates]:g.coordinates;
  for(const [j,p] of polys.entries()){
   if(!Array.isArray(p)||!p.length)throw Error('ขอบเขตไม่มีวงพิกัด');
   const rings=p.map(ring);points+=rings.reduce((n,r)=>n+r.length,0);
   if(points>50000||result.length>=100)throw Error('ไฟล์มีขอบเขตมากเกินไป (สูงสุด 100 รูป / 50,000 จุด)');
   const props=f.properties||{},name=String(props.name||props.Name||'เขต '+(index+1)).slice(0,200);
   result.push({id:'zone-'+index+'-'+j,name,level:levels.includes(props.zone)?props.zone:hint(name,String(props.color||'')),rings,description:String(props.description||'').slice(0,2000),loc:String(props.loc||'').slice(0,160),unit:String(props.unit||'').slice(0,80),exposure:String(props.exposure||'').slice(0,100)});
  }
 }
 if(!result.length)throw Error('ไม่พบขอบเขต Polygon ในไฟล์ กรุณาส่งออก Threat Zones เป็น KML หรือ GeoJSON');
 return result;
}
function geojson(data){
 if(data.crs&&!/4326|CRS84/i.test(JSON.stringify(data.crs)))throw Error('รองรับเฉพาะ GeoJSON พิกัด WGS84');
 return normalize(data.type==='FeatureCollection'?data.features:data.type==='Feature'?[data]:[]);
}
function kml(text,Parser){
 if(/<!DOCTYPE|<!ENTITY/i.test(text))throw Error('ไม่รองรับ DTD หรือ Entity ใน KML');
 const doc=new Parser().parseFromString(text,'application/xml');
 if(doc.getElementsByTagName('parsererror').length||doc.getElementsByTagNameNS('*','parsererror').length)throw Error('KML มีรูปแบบ XML ไม่ถูกต้อง');
 const all=(n,t)=>Array.from(n.getElementsByTagNameNS('*',t));
 const first=(n,t)=>all(n,t)[0];
 const textOf=(n,t)=>first(n,t)?.textContent?.trim()||'';
 const styles=new Map(all(doc,'Style').map(s=>[s.getAttribute('id'),textOf(first(s,'PolyStyle')||s,'color')]));
 for(const m of all(doc,'StyleMap')){const p=all(m,'Pair').find(x=>textOf(x,'key')==='normal');if(p)styles.set(m.getAttribute('id'),styles.get(textOf(p,'styleUrl').replace(/^#/,''))||'');}
 const features=[];
 for(const pm of all(doc,'Placemark')){
  const name=textOf(pm,'name'),style=textOf(pm,'styleUrl').replace(/^#/,'');
  const hex=textOf(first(pm,'PolyStyle')||pm,'color')||styles.get(style)||'';
  const rgb=hex.length===8?'#'+hex.slice(6,8)+hex.slice(4,6)+hex.slice(2,4):'';
  for(const poly of all(pm,'Polygon')){
   const outer=first(poly,'outerBoundaryIs');if(!outer)throw Error('KML Polygon ไม่มีขอบเขตภายนอก');
   const parse=n=>textOf(n,'coordinates').split(/\s+/).filter(Boolean).map(v=>{const p=v.split(',');if(p.length<2||!p[0].trim()||!p[1].trim())throw Error('พิกัด KML ไม่ครบ');return p.slice(0,2).map(Number);});
   features.push({type:'Feature',properties:{name,color:rgb,description:textOf(pm,'description')},geometry:{type:'Polygon',coordinates:[parse(outer),...all(poly,'innerBoundaryIs').map(parse)]}});
  }
 }
 return normalize(features);
}
function arcRings(rings){return rings.map((r,i)=>((area(r)>0)===(i===0)?[...r].reverse():r).map(p=>[...p]));}
function onSegment(p,a,b){const cross=(p[1]-a[1])*(b[0]-a[0])-(p[0]-a[0])*(b[1]-a[1]);return Math.abs(cross)<1e-12&&p[0]>=Math.min(a[0],b[0])-1e-12&&p[0]<=Math.max(a[0],b[0])+1e-12&&p[1]>=Math.min(a[1],b[1])-1e-12&&p[1]<=Math.max(a[1],b[1])+1e-12;}
function insideRing(p,r){let inside=false;for(let i=1;i<r.length;i++){const a=r[i-1],b=r[i];if(onSegment(p,a,b))return 2;if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside?1:0;}
function contains(p,rings){if(!insideRing(p,rings[0]))return false;return !rings.slice(1).some(r=>insideRing(p,r)===1);}
function highestZone(p,zones){return [...zones].sort((a,b)=>levels.indexOf(a.level)-levels.indexOf(b.level)).find(z=>contains(p,z.rings))?.level||null;}
return {levels,ring,area,geojson,kml,arcRings,contains,highestZone};
});
