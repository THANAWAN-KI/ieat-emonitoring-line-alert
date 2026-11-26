(() => {
  const categories = [
    ['hospital','โรงพยาบาล / คลินิก','#a4255c','M12 5v14M5 12h14','amenity','hospital|clinic'],
    ['fire','สถานีดับเพลิง','#ad4a11','M4 8h10v9H4zM14 11h4l3 3v3h-7M8 19v1m10-1v1M7 5h4','amenity','fire_station'],
    ['police','สถานีตำรวจ','#284f99','M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6ZM12 8v6m-3-3h6','amenity','police'],
    ['community','ชุมชน','#276944','m3 11 9-7 9 7M6 10v10h12V10m-8 10v-5h4v5','place','city|town|village|hamlet|suburb|neighbourhood'],
    ['school','สถานศึกษา','#7043a4','m2 9 10-5 10 5-10 5ZM6 11v5q6 5 12 0v-5','amenity','school|kindergarten|college|university'],
    ['hydrant','หัวจ่ายน้ำ','#00738d','M12 3c-2 4-6 8-6 12a6 6 0 0 0 12 0c0-4-4-8-6-12Z','emergency','fire_hydrant'],
    ['cctv','กล้อง CCTV','#52417d','M3 7h12v10H3zM15 10l6-3v10l-6-3','man_made','surveillance'],
    ['estate','นิคมอุตสาหกรรม / ท่าเรือ','#846014','m3 20 1-9 5 3v-4l5 3V7h4l3 13Z'],
    ['business','โรงงาน / ผู้ประกอบการ','#475569','M3 20V9l6 3V8l6 3V4h5v16ZM6 16h2m3 0h2m3 0h2'],
    ['environment','จุดตรวจวัด / สิ่งแวดล้อม','#197568','M12 20V9m0 5C5 14 4 10 4 6q8 0 8 8m0-1q0-9 8-9 0 8-8 9']
  ].map(([id,label,color,path,key,pattern])=>({id,label,color,path,key,pattern}));
  const incident={id:'incident',color:'#be202c',path:'M12 3c0 5-6 6-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11ZM12 12v5'};
  function badge({id,color,path}){
    const isIncident=id==='incident';
    const frame=isIncident
      ? '<path d="M18 34S4 24 4 16a14 14 0 0 1 28 0c0 8-14 18-14 18Z" fill="'+color+'" stroke="#fff" stroke-width="2"/>'
      : '<circle cx="18" cy="18" r="15" fill="#fff" stroke="'+color+'" stroke-width="2.3"/>';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">'+frame+
      '<path transform="translate(6 '+(isIncident?4:6)+') " d="'+path+'" fill="none" stroke="'+(isIncident?'#fff':color)+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
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

  window.ieatFireAnalysisSources = { categories, incident, badge, distanceKm, nearby, wind };
})();
