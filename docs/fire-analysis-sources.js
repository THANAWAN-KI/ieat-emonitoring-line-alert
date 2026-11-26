(() => {
  const categories = [
    ['hospital','โรงพยาบาล / คลินิก','#a82b63','M5 8h14v11H5zM9 8V5h6v3m-3 2v7m-3-3.5h6','amenity','hospital|clinic'],
    ['fire','สถานีดับเพลิง','#b44a13','M3 9h11v8H3zM14 11h4l3 4v2h-7M5 9V6h5m0 5H5m3 6v2m10-2v2','amenity','fire_station'],
    ['police','สถานีตำรวจ','#274daa','M12 4 18 7l1 1v4q0 5-7 8-7-3-7-8V8Zm0 5 1 2 2 .3-1.5 1.5.3 2.2-1.8-1-1.8 1 .3-2.2L9 11.3l2-.3Z','amenity','police'],
    ['community','ชุมชน','#257353','m3 12 5-4 5 4m-9-1v8h8v-8m0-1 4-4 5 4m-1-1v10h-6m-7 0v-4h2v4','place','city|town|village|hamlet|suburb|neighbourhood'],
    ['school','สถานศึกษา','#773caa','M5 5h12a2 2 0 0 1 2 2v12H7a2 2 0 0 1-2-2Zm0 11h14M9 9h6m-6 3h4','amenity','school|kindergarten|college|university'],
    ['hydrant','หัวจ่ายน้ำ','#00758b','M8 18h8M9 18v-8a3 3 0 0 1 6 0v8M8 11H5v4h4m7-4h3v4h-4m-6-8h6m-3-2v2','emergency','fire_hydrant'],
    ['cctv','กล้อง CCTV','#574692','M4 7h15v8H4zM19 8l2 1v4l-2 1m-9 1v4h7M7 10h6','man_made','surveillance'],
    ['estate','นิคมอุตสาหกรรม / ท่าเรือ','#926214','M4 20V7h8v13m0-9h8v9H4M7 10h2m-2 4h2m6 0h2m-2 3h2'],
    ['business','โรงงาน / ผู้ประกอบการ','#52637b','M4 20V10l5 3V9l5 3V6h4l2 14ZM7 17h1m3 0h1m3 0h1'],
    ['environment','จุดตรวจวัด / สิ่งแวดล้อม','#207561','M4 17h16M7 14v-3m5 3V8m5 6V5'],
    ['waterWatch','จุดเฝ้าระวังระดับน้ำ','#086a9d','M12 4c-2 4-5 7-5 10a5 5 0 0 0 10 0c0-3-3-6-5-10Zm-4 11h4'],
    ['wastewater','ระบบบำบัดน้ำเสีย','#167e81','M4 8h16v10H4zM4 12q4-2 8 0t8 0M8 5v3m8-3v3'],
    ['airWatch','สถานีตรวจวัดคุณภาพอากาศ','#327394','M4 8h11a2 2 0 1 0-2-2M4 12h14a2 2 0 1 1-2 2M4 16h7'],
    ['waste','สถานที่รวบรวมและจัดการขยะ','#727528','M5 8h14m-11 0 1 11h6l1-11M9 8V5h6v3m-4 3v5m2-5v5']
  ].map(([id,label,color,path,key,pattern])=>({id,label,color,path,key,pattern}));
  const incident={id:'incident',color:'#c12436',path:'M12 4c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 3-6 0 2 1 3 2 3 1-3 0-5 0-7Z'};
  const windArrow='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="#fff" stroke="#c9daf8"/><path d="M18 7 27 26 18 21 9 26Z" fill="#2257c8" stroke="#163d93" stroke-linejoin="round"/></svg>';

  function badge({id,color,path}){
    const marker=id==='incident';
    const frame=marker
      ? '<path d="M18 34C14 30 3 23 3 16a15 15 0 1 1 30 0c0 7-11 14-15 18Z" fill="'+color+'" stroke="#fff" stroke-width="2"/>'
      : '<rect x="3" y="3" width="30" height="30" rx="10" fill="#fff" stroke="'+color+'" stroke-width="2"/>';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">'+frame+
      '<path transform="translate(6 '+(marker?4:6)+')" d="'+path+'" fill="none" stroke="'+(marker?'#fff':color)+'" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/></svg>';
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
