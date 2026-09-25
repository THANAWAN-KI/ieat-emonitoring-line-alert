const RADAR_URL = 'https://weather.tmd.go.th/ryg/rygloop.gif';
const COMPOSITE_URL = 'https://satda.tmd.go.th/wp-content/uploads/data/radar_composite/max/qpf_202609250600.gif';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/rayong-radar.gif' && url.pathname !== '/api/composite-qpf.gif') return env.ASSETS.fetch(request);
    if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method not allowed', { status: 405 });
    try {
      const upstream = await fetch(url.pathname === '/api/composite-qpf.gif' ? COMPOSITE_URL : RADAR_URL, {
        signal: AbortSignal.timeout(12000),
        cf: { cacheTtl: 90, cacheEverything: true }
      });
      if (!upstream.ok || !String(upstream.headers.get('content-type') || '').toLowerCase().includes('image/gif'))
        throw new Error('TMD radar unavailable');
      const headers = new Headers({
        'Content-Type': 'image/gif',
        'Cache-Control': 'public, max-age=60, s-maxage=90',
        'X-Content-Type-Options': 'nosniff',
        'Access-Control-Allow-Origin': '*'
      });
      for (const key of ['last-modified', 'etag']) {
        const value = upstream.headers.get(key);
        if (value) headers.set(key, value);
      }
      return new Response(request.method === 'HEAD' ? null : upstream.body, { status: 200, headers });
    } catch {
      return new Response('Latest TMD radar unavailable', {
        status: 503,
        headers: { 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};
