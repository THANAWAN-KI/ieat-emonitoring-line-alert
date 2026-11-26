(() => {
  const categories = [
    { key: 'amenity', pattern: 'hospital|clinic', label: 'โรงพยาบาล / คลินิก', color: '#bf2444' },
    { key: 'amenity', pattern: 'fire_station', label: 'สถานีดับเพลิง', color: '#b84b0b' },
    { key: 'amenity', pattern: 'police', label: 'สถานีตำรวจ', color: '#2456a2' },
    { key: 'amenity', pattern: 'school|kindergarten|college|university', label: 'สถานศึกษา', color: '#7744a5' },
    { key: 'place', pattern: 'city|town|village|hamlet|suburb|neighbourhood', label: 'ชุมชน', color: '#147466' }
  ];

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
    const query = '[out:json][timeout:20];(' + categories.map(({ key, pattern }) =>
      'nwr' + area + '["' + key + '"~"^(' + pattern + ')$"]["name"];'
    ).join('') + ');out tags center;';
    const url = new URL('https://overpass-api.de/api/interpreter');
    url.searchParams.set('data', query);
    const data = await getJSON(url, signal);
    if (data.remark || !Array.isArray(data.elements)) throw Error('Incomplete OpenStreetMap response');
    const seen = new Map();
    for (const item of data.elements) {
      const coords = item.center || item;
      if (![coords.lat, coords.lon].every(Number.isFinite)) continue;
      const category = categories.find(({ key, pattern }) => new RegExp('^(' + pattern + ')$').test(item.tags?.[key] || ''));
      const name = item.tags?.['name:th'] || item.tags?.name;
      const distance = distanceKm(lat, lng, coords.lat, coords.lon);
      if (!category || !name || distance > km) continue;
      const key = JSON.stringify([category.label, name, coords.lat.toFixed(4), coords.lon.toFixed(4)]);
      seen.set(key, { category, name, distance, lat: coords.lat, lng: coords.lon, url: 'https://www.openstreetmap.org/' + item.type + '/' + item.id });
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

  window.ieatFireAnalysisSources = { categories, nearby, wind };
})();
