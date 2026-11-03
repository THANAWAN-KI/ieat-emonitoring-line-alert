const DATA_ROOT = 'https://api-gateway.gistda.or.th/api/2.0/resources/3d-tiles/thailand-lod/';
const DEFAULT_ORIGIN = 'https://thanawan-ki.github.io';
const PRIVATE_QUERY = new Set(['api_key', 'api-key', 'token', 'access_token']);

function safeResource(input, base = DATA_ROOT) {
  const u = new URL(input, base);
  if (u.origin !== new URL(DATA_ROOT).origin || !u.pathname.startsWith(new URL(DATA_ROOT).pathname)) {
    throw new Error('Resource outside GISTDA Thailand LOD1');
  }
  for (const name of [...u.searchParams.keys()]) {
    if (PRIVATE_QUERY.has(name.toLowerCase())) u.searchParams.delete(name);
  }
  return u;
}

export function rewriteResources(value, upstreamUrl, proxyBase) {
  if (Array.isArray(value)) return value.map(item => rewriteResources(item, upstreamUrl, proxyBase));
  if (!value || typeof value !== 'object') return value;
  const result = {};
  for (const [key, child] of Object.entries(value)) {
    if ((key === 'uri' || key === 'url') && typeof child === 'string' && !child.startsWith('data:')) {
      const resource = safeResource(child, upstreamUrl);
      const suffix = resource.pathname.slice(new URL(DATA_ROOT).pathname.length);
      result[key] = proxyBase + suffix + resource.search;
    } else {
      result[key] = rewriteResources(child, upstreamUrl, proxyBase);
    }
  }
  return result;
}

export async function handleTiles(request, env, fetcher = fetch) {
  const origin = request.headers.get('Origin');
  const allowed = env.ALLOWED_ORIGIN || DEFAULT_ORIGIN;
  const headers = new Headers({
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers': 'Range',
    'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges',
    'Vary': 'Origin',
    'X-Content-Type-Options': 'nosniff'
  });
  const error = (message, status) => {
    const h = new Headers(headers);
    h.set('Content-Type', 'application/json; charset=utf-8');
    h.set('Cache-Control', 'no-store');
    return new Response(JSON.stringify({error: message}), {status, headers: h});
  };
  if (origin && origin !== allowed) return error('Origin not allowed', 403);
  if (request.method === 'OPTIONS') return new Response(null, {status: 204, headers});
  if (!['GET', 'HEAD'].includes(request.method)) return error('Method not allowed', 405);
  if (!env.GISTDA_3D_API_KEY) return error('GISTDA_3D_API_KEY is not configured', 503);
  const url = new URL(request.url);
  const prefix = '/api/tiles/';
  if (!url.pathname.startsWith(prefix)) return error('Not found', 404);
  let path;
  try {
    path = decodeURIComponent(url.pathname.slice(prefix.length));
    if (!path || path.includes('\\') || path.split('/').some(p => p === '.' || p === '..') || path.startsWith('/') || path.includes('://')) {
      return error('Invalid tile path', 400);
    }
  } catch { return error('Invalid tile path', 400); }
  if (path === 'health') {
    headers.set('Content-Type', 'application/json');
    headers.set('Cache-Control', 'no-store');
    return new Response(JSON.stringify({configured: true, coverage: 'Thailand LOD1', mode: 'streaming'}), {headers});
  }
  try {
    const upstream = safeResource(path + url.search);
    const upstreamHeaders = {'API-Key': env.GISTDA_3D_API_KEY};
    const isJson = upstream.pathname.toLowerCase().endsWith('.json') || upstream.pathname.toLowerCase().endsWith('.gltf');
    if (request.headers.has('Range') && !isJson) upstreamHeaders.Range = request.headers.get('Range');
    const response = await fetcher(upstream, {method: request.method, headers: upstreamHeaders, redirect: 'manual', signal: AbortSignal.timeout(55000)});
    if (!response.ok) return error('GISTDA returned HTTP ' + response.status, response.status >= 500 ? 502 : response.status);
    for (const name of ['Content-Type', 'Content-Range', 'Accept-Ranges', 'ETag', 'Last-Modified']) {
      if (response.headers.has(name)) headers.set(name, response.headers.get(name));
    }
    headers.set('Cache-Control', 'public, max-age=' + (isJson ? '300' : '3600'));
    if (request.method === 'HEAD') return new Response(null, {status: response.status, headers});
    if (isJson) {
      const data = rewriteResources(await response.json(), upstream, url.origin + prefix);
      const body = JSON.stringify(data);
      if (body.includes(env.GISTDA_3D_API_KEY)) return error('Upstream credential disclosure prevented', 502);
      headers.set('Content-Type', 'application/json; charset=utf-8');
      return new Response(body, {headers});
    }
    // Binary building tiles stream through unchanged; no key is returned to the browser.
    return new Response(response.body, {status: response.status, headers});
  } catch {
    return error('GISTDA tile request failed', 502);
  }
}
