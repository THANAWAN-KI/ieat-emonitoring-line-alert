import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { handleTiles } from '../../lib/gistda-proxy.mjs';

export default async function handler(req, res) {
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const request = new Request('https://' + host + req.url, {
    method: req.method,
    headers: Object.entries(req.headers).flatMap(([key,value]) =>
      Array.isArray(value) ? value.map(v=>[key,v]) : value === undefined ? [] : [[key,String(value)]])
  });
  const response = await handleTiles(request, process.env);
  res.statusCode = response.status;
  response.headers.forEach((value,key)=>res.setHeader(key,value));
  if (response.body && req.method !== 'HEAD') {
    await pipeline(Readable.fromWeb(response.body), res);
  } else res.end();
}
