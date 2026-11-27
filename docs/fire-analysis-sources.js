(() => {
  const categories = [
    ['hospital','โรงพยาบาล / คลินิก','#9f0812','amenity','hospital|clinic'],
    ['fire','สถานีดับเพลิง','#dc380f','amenity','fire_station'],
    ['police','สถานีตำรวจ','#368dd5','amenity','police'],
    ['community','ชุมชน','#70af1e','place','city|town|village|hamlet|suburb|neighbourhood'],
    ['school','สถานศึกษา','#7e887a','amenity','school|kindergarten|college|university'],
    ['hydrant','หัวจ่ายน้ำ','#e1ac26','emergency','fire_hydrant'],
    ['cctv','กล้อง CCTV','#6347b2','man_made','surveillance'],
    ['estate','นิคมอุตสาหกรรม / ท่าเรือ','#787271'],
    ['business','โรงงาน / ผู้ประกอบการ','#687181'],
    ['aqm','AQMs · คุณภาพอากาศ','#5A37C3'],
    ['wqm','WQMs · คุณภาพน้ำ','#946107'],
    ['cem','CEMs · มลพิษจากปล่อง','#237351'],
    ['environment','จุดตรวจวัด / สิ่งแวดล้อม','#356831'],
    ['waterWatch','จุดเฝ้าระวังระดับน้ำ','#16688e'],
    ['wastewater','ระบบบำบัดน้ำเสีย','#24645d'],
    ['airWatch','สถานีตรวจวัดคุณภาพอากาศ','#465a92'],
    ['waste','สถานที่รวบรวมและจัดการขยะ','#666020']
  ].map(([id,label,color,key,pattern])=>({id,label,color,key,pattern}));
  // IBM Carbon Design icons, Apache-2.0. Source: carbon-design-system/carbon, packages/icons/src/svg/32.
  // Adapted for the map with category colors and marker backgrounds. See fire-map-carbon-license.txt.
  const glyphs = {
  "hospital": "<polygon points=\"21 10 17 10 17 6 15 6 15 10 11 10 11 12 15 12 15 16 17 16 17 12 21 12 21 10\"/><path d=\"M28,10H26V4a2.0023,2.0023,0,0,0-2-2H8A2.0023,2.0023,0,0,0,6,4v6H4a2.0023,2.0023,0,0,0-2,2V30H30V12A2.0023,2.0023,0,0,0,28,10ZM14,28V22h4v6Zm6,0V21a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v7H4V12H8V4H24v8h4V28Z\"/>",
  "fire": "<rect x=\"4\" y=\"16\" width=\"12\" height=\"2\"/><rect x=\"2\" y=\"11\" width=\"10\" height=\"2\"/><path d=\"M29.9189,16.6064l-3-7A.9985.9985,0,0,0,26,9H23V7a1,1,0,0,0-1-1H6V8H21V20.5562A3.9924,3.9924,0,0,0,19.1421,23H12.8579a4,4,0,1,0,0,2h6.2842a3.9806,3.9806,0,0,0,7.7158,0H29a1,1,0,0,0,1-1V17A.9965.9965,0,0,0,29.9189,16.6064ZM9,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,9,26ZM23,11h2.3408l2.1431,5H23Zm0,15a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,23,26Zm5-3H26.8579A3.9954,3.9954,0,0,0,23,20V18h5Z\"/>",
  "police": "<polygon points=\"14 16.59 11.41 14 10 15.41 14 19.41 22 11.41 20.59 10 14 16.59\"/><path d=\"M16,30,9.8242,26.7071A10.9818,10.9818,0,0,1,4,17V4A2.0021,2.0021,0,0,1,6,2H26a2.0021,2.0021,0,0,1,2,2V17a10.9818,10.9818,0,0,1-5.8242,9.7071ZM6,4V17a8.9852,8.9852,0,0,0,4.7656,7.9423L16,27.7333l5.2344-2.791A8.9852,8.9852,0,0,0,26,17V4Z\"/>",
  "community": "<path d=\"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z\" transform=\"translate(0 0)\"/>",
  "school": "<path d=\"M26,30H24V27a5.0059,5.0059,0,0,0-5-5H13a5.0059,5.0059,0,0,0-5,5v3H6V27a7.0082,7.0082,0,0,1,7-7h6a7.0082,7.0082,0,0,1,7,7Z\"/><path d=\"M5,6A1,1,0,0,0,4,7v9H6V7A1,1,0,0,0,5,6Z\"/><path d=\"M4,2V4H9v7a7,7,0,0,0,14,0V4h5V2Zm7,2H21V7H11Zm5,12a5,5,0,0,1-5-5V9H21v2A5,5,0,0,1,16,16Z\"/>",
  "hydrant": "<path d=\"M17.5053,16l8.1591-7.2529A1,1,0,0,0,25,7H22V2H20V9h2.37L16,14.6621,9.63,9H12V2H10V7H7a1,1,0,0,0-.6646,1.7471L14.4945,16,6.3353,23.2529A1,1,0,0,0,7,25h3v5h2V23H9.63L16,17.3379,22.37,23H20v7h2V25h3a1,1,0,0,0,.6645-1.7471Z\"/>",
  "cctv": "<path d=\"M21,26H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H21a2,2,0,0,1,2,2v4.06l5.42-3.87A1,1,0,0,1,30,9V23a1,1,0,0,1-1.58.81L23,19.94V24A2,2,0,0,1,21,26ZM4,8V24H21V18a1,1,0,0,1,1.58-.81L28,21.06V10.94l-5.42,3.87A1,1,0,0,1,21,14V8Z\"/>",
  "estate": "<path d=\"M28,2H16a2.002,2.002,0,0,0-2,2V14H4a2.002,2.002,0,0,0-2,2V30H30V4A2.0023,2.0023,0,0,0,28,2ZM9,28V21h4v7Zm19,0H15V20a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1v8H4V16H16V4H28Z\"/><rect x=\"18\" y=\"8\" width=\"2\" height=\"2\"/><rect x=\"24\" y=\"8\" width=\"2\" height=\"2\"/><rect x=\"18\" y=\"14\" width=\"2\" height=\"2\"/><rect x=\"24\" y=\"14\" width=\"2\" height=\"2\"/><rect x=\"18\" y=\"19.9996\" width=\"2\" height=\"2\"/><rect x=\"24\" y=\"19.9996\" width=\"2\" height=\"2\"/>",
  "business": "<path d=\"M29.53,6.15a1,1,0,0,0-1,0L20,10.38V7a1,1,0,0,0-1.45-.89L10,10.38V3A1,1,0,0,0,9,2H3A1,1,0,0,0,2,3V28H30V7A1,1,0,0,0,29.53,6.15ZM22,26H18V19h4Zm6,0H24V18a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v8H4V4H8v9.62l10-5v5l10-5Z\" transform=\"translate(0 0)\"/>",
  "environment": "<path d=\"M4,2H2V28a2,2,0,0,0,2,2H30V28H4V25H26V17H4V13H18V5H4ZM24,19v4H4V19ZM16,7v4H4V7Z\"/>",
  "waterWatch": "<path d=\"M23.4761,13.9932,16.8472,3.4365a1.04,1.04,0,0,0-1.6944,0L8.4941,14.0444A9.9861,9.9861,0,0,0,7,19a9,9,0,0,0,18,0A10.0632,10.0632,0,0,0,23.4761,13.9932ZM16,26.0005a7.0089,7.0089,0,0,1-7-7,7.978,7.978,0,0,1,1.2183-3.9438l.935-1.4888L21.2271,23.6411A6.9772,6.9772,0,0,1,16,26.0005Z\"/>",
  "wastewater": "<path d=\"M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z\"/>",
  "airWatch": "<path d=\"M21,15H8V13H21a3,3,0,1,0-3-3H16a5,5,0,1,1,5,5Z\"/><path d=\"M23,28a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V18H23a5,5,0,0,1,0,10Z\"/>",
  "waste": "<rect x=\"12\" y=\"12\" width=\"2\" height=\"12\"/><rect x=\"18\" y=\"12\" width=\"2\" height=\"12\"/><path d=\"M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z\"/><rect x=\"12\" y=\"2\" width=\"8\" height=\"2\"/>",
  "incident": '<g transform="scale(.0625)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"><path d="M256,80c-8.66,0-16.58,7.36-16,16l8,216a8,8,0,0,0,8,8h0a8,8,0,0,0,8-8l8-216C272.58,87.36,264.66,80,256,80Z"/><circle cx="256" cy="416" r="16"/></g>',
};
  const incident={id:'incident',color:'#CE1126'};
  const windArrow='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 82" aria-hidden="true"><path d="M21 5 37 50 21 39 5 50Z" fill="#fff" stroke="#365465" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const pinColors = {
    hospital: ['#fa709e','#d92262'],
    fire: ['#ffae55','#c65b10'],
    police: ['#63a5fb','#1756b5'],
    community: ['#59a983','#237351'],
    school: ['#be9df4','#7b3fad'],
    hydrant: ['#67c8d8','#076576'],
    cctv: ['#9d91d9','#4b3884'],
    business: ['#adb4c2','#687181'],
    environment: ['#83bd68','#356831'],
    waterWatch: ['#76b7e0','#16688e'],
    wastewater: ['#65baa8','#24645d'],
    airWatch: ['#9caae2','#465a92'],
    waste: ['#c2b879','#666020'],
  };

  const supportGlyphs={
  "hospital": "M16 8v16M8 16h16",
  "fire": "M16 28c-6 0-10-4-10-9 0-4 2-7 5-9 0 4 2 4 3 4 3-4 4-7 4-10 5 4 8 9 8 15 0 5-4 9-10 9Z M16 27c-3 0-4-2-4-4s2-4 4-6c2 2 4 4 4 6s-1 4-4 4Z",
  "police": "M16 28c-7-3-10-7-10-13V7l10-3 10 3v8c0 6-3 10-10 13Z M11 16l3 3 7-7",
  "hydrant": "M11 28V12h10v16M8 28h16M10 12h12M13 12V9a3 3 0 0 1 6 0v3M11 16H7v6h4m10-6h4v6h-4",
  "cctv": "M6 8h16v10H6zM22 11l5-3v10l-5-3M14 18v6h8",
  "community": "M4 16l7-6 7 6m-12-2v12h10v-9m1-6 5-5 7 6m-2-2v16H17m-7 0v-6h3",
  "school": "m4 12 12-6 12 6-12 6-12-6Zm5 3v7c4 4 10 4 14 0v-7m5-3v8"
};
  function badge({id,color}){
    if(supportGlyphs[id]){
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">'+
        '<rect x="2" y="2" width="32" height="32" rx="10" fill="'+color+'" stroke="#fff" stroke-width="2"/>'+
        '<path transform="translate(4 4) scale(.875)" d="'+supportGlyphs[id]+'" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    const [top,bottom]=pinColors[id]||[color,color];
    if(['aqm','wqm','cem'].includes(id)){
      const symbol={
        aqm:'M7 12h12a3 3 0 1 0-3-3M5 17h18a3 3 0 1 1-3 3M8 22h5',
        wqm:'M16 6c-3 5-7 9-7 13a7 7 0 1 0 14 0c0-4-4-8-7-13Z',
        cem:'M6 25V15l7 3v-5l7 4V9h4v16ZM10 22h1m4 0h1m4 0h1'
      }[id];
      const highlight={aqm:'#a68aff',wqm:'#ffcf69',cem:'#72d49c'}[id];
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">'+
        '<defs><linearGradient id="station" x2="0" y2="1"><stop stop-color="'+highlight+'"/><stop offset="1" stop-color="'+color+'"/></linearGradient></defs>'+
        '<rect x="5" y="5" width="28" height="28" rx="9" fill="#253e59" opacity=".22"/>'+
        '<rect x="4" y="3" width="28" height="28" rx="8" fill="url(#station)" stroke="white" stroke-width="2"/>'+
        '<rect x="6.5" y="5.5" width="23" height="23" rx="6" fill="none" stroke="white" stroke-opacity=".62"/>'+
        '<path transform="translate(5 4) scale(.8)" d="'+symbol+'" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }
    if(id==='business')return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><circle cx="18" cy="18" r="13" fill="#8590a4" stroke="#fff" stroke-width="3"/><circle cx="18" cy="18" r="5" fill="#fff"/></svg>';
    if(id==='estate'){
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">'+
        '<defs><linearGradient id="estate-fill" x1="0" y1="2" x2="0" y2="27" gradientUnits="userSpaceOnUse"><stop stop-color="#b1aaa7"/><stop offset="1" stop-color="#746e6d"/></linearGradient></defs>'+
        '<path d="M18 32c-2-1.8-2.1-4.5-6.2-6.3a13 13 0 1 1 12.4 0C20.1 27.5 20 30.2 18 32Z" fill="#fff"/>'+
        '<circle cx="18" cy="14" r="11.75" fill="url(#estate-fill)"/>'+
        '<circle cx="18" cy="14" r="4.7" fill="#fff"/>'+
        '<circle cx="18" cy="34" r="1.65" fill="#746e6d" stroke="#fff" stroke-width="1.15"/></svg>';
    }
    const glyph=id==='hospital'
      ? '<path d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z" stroke="#fff" stroke-width="1" stroke-linejoin="round"/>'
      : glyphs[id];
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">'+
      '<defs><linearGradient id="pin-fill" x1="0" y1="0" x2="0" y2="100%" gradientUnits="objectBoundingBox"><stop stop-color="'+top+'"/><stop offset="1" stop-color="'+bottom+'"/></linearGradient></defs>'+
      (id==='incident'||id==='estate'?'<path d="M18 30c-1.9 0-1.2-2.5-5.6-4.1a12.8 12.8 0 1 1 11.2 0C19.2 27.5 19.9 30 18 30Z" fill="#fff"/>':'<circle cx="18" cy="14" r="13" fill="#fff"/>')+
      '<circle cx="18" cy="14" r="11.8" fill="url(#pin-fill)"/>'+
      '<g transform="translate(10 6) scale(.5)" fill="#fff">'+glyph+'</g>'+
      (id==='incident'||id==='estate'?'<circle cx="18" cy="34" r="1.8" fill="'+bottom+'" stroke="#fff" stroke-width="1.25"/>':'')+'</svg>';
  }

  async function getJSON(url, signal) {
    const response = await fetch(url, { signal });
    if (!response.ok) throw Error('HTTP ' + response.status);
    return response.json();
  }

  function distanceKm(lat, lng, targetLat, targetLng) {
    const rad = Math.PI / 180;
    const a = Math.sin((targetLat - lat) * rad / 2) ** 2 +
      Math.cos(lat * rad) * Math.cos(targetLat * rad) * Math.sin((targetLng - lng) * rad / 2) ** 2;
    return 12742 * Math.asin(Math.sqrt(Math.min(1, a)));
  }

  async function nearby(lat, lng, km, signal) {
    if (![lat, lng, km].every(Number.isFinite) || km < 0.1 || km > 50) throw Error('Invalid search radius');
    const area = '(around:' + km * 1000 + ',' + lat.toFixed(6) + ',' + lng.toFixed(6) + ')';
    const query = '[out:json][timeout:20];(' + categories.filter(item=>item.key).map(({ key, pattern }) =>
      'nwr' + area + '["' + key + '"~"^(' + pattern + ')$"]'+(key==='man_made'?'["surveillance:type"="camera"]':'')+';'
    ).join('') + ');out tags center;';
    const url = new URL('https://overpass-api.de/api/interpreter');
    url.searchParams.set('data', query);
    const data = await getJSON(url, signal);
    if (data.remark || !Array.isArray(data.elements)) throw Error('Incomplete OpenStreetMap response');
    const seen = new Map();
    for (const item of data.elements) {
      const coords = item.center || item;
      if (![coords.lat, coords.lon].every(Number.isFinite)) continue;
      const category = categories.find(({ key, pattern }) => key && new RegExp('^(' + pattern + ')$').test(item.tags?.[key] || ''));
      const name = item.tags?.['name:th'] || item.tags?.name || category?.label;
      const distance = distanceKm(lat, lng, coords.lat, coords.lon);
      if (!category || !name || distance > km) continue;
      const key = JSON.stringify([category.label, name, coords.lat.toFixed(4), coords.lon.toFixed(4)]);
      seen.set(key, { category, name, distance, source:'OpenStreetMap', lat: coords.lat, lng: coords.lon, url: 'https://www.openstreetmap.org/' + item.type + '/' + item.id });
    }
    return [...seen.values()].sort((a, b) => a.distance - b.distance);
  }

  async function wind(lat, lng, signal) {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.search = new URLSearchParams({
      latitude: lat.toFixed(5), longitude: lng.toFixed(5),
      current: 'wind_speed_10m,wind_direction_10m', wind_speed_unit: 'kmh', timezone: 'Asia/Bangkok'
    });
    const { current } = await getJSON(url, signal);
    if (!Number.isFinite(current?.wind_speed_10m)) throw Error('Missing current wind');
    return {
      windSpeed: current.wind_speed_10m,
      windDegrees: Number.isFinite(current.wind_direction_10m) ? current.wind_direction_10m % 360 : null,
      time: current.time?.replace('T', ' ') || '',
      source: 'Open-Meteo · แบบจำลองลมที่ระดับ 10 ม.'
    };
  }

  window.ieatFireAnalysisSources = { categories, incident, windArrow, badge, distanceKm, nearby, wind };
})();
