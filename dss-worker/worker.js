// DSS API proxy for Cloudflare Workers.
// Required secrets: DSS_API_KEY, DASHBOARD_ACCESS_TOKEN
// Required variables: ALLOWED_ORIGIN (exact dashboard origin)
// Optional variables: DSS_AUTH_HEADER ("Authorization" or "X-API-Key"), DSS_AUTH_PREFIX ("Bearer " or "")
export default {
 async fetch(request, env) {
  const origin=request.headers.get("Origin")||"";
  const allowed=env.ALLOWED_ORIGIN||"https://thanawan-ki.github.io";
  const cors={"Access-Control-Allow-Origin":allowed,"Vary":"Origin","Access-Control-Allow-Methods":"GET, OPTIONS","Access-Control-Allow-Headers":"Authorization, Content-Type","Cache-Control":"no-store"};
  const respond=(body,status=200)=>new Response(JSON.stringify(body),{status,headers:{"Content-Type":"application/json; charset=utf-8",...cors}});
  if(origin && origin!==allowed)return respond({error:"Origin not allowed"},403);
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers:cors});
  if(request.method!=="GET")return respond({error:"Method not allowed"},405);
  const url=new URL(request.url);
  const match=url.pathname.match(/^\/api\/v1\/documents\/([A-Za-z0-9._-]{1,120})\/?$/);
  if(!match)return respond({error:"Not found"},404);
  // Browser CORS is not authentication. This separate token must be supplied by the operator.
  const provided=request.headers.get("Authorization")||"";
  if(!env.DASHBOARD_ACCESS_TOKEN||provided!=="Bearer "+env.DASHBOARD_ACCESS_TOKEN)return respond({error:"Unauthorized"},401);
  if(!env.DSS_API_KEY)return respond({error:"Server missing DSS_API_KEY"},503);
  const header=env.DSS_AUTH_HEADER||"Authorization";
  if(!["Authorization","X-API-Key"].includes(header))return respond({error:"Invalid DSS_AUTH_HEADER"},500);
  const prefix=env.DSS_AUTH_PREFIX===undefined?"Bearer ":env.DSS_AUTH_PREFIX;
  const headers=new Headers({"Accept":"application/json"});
  headers.set(header,prefix+env.DSS_API_KEY);
  try{
   const upstream=await fetch("https://dss.ieat.go.th/api/v1/documents/"+encodeURIComponent(match[1]),{headers,redirect:"manual",signal:AbortSignal.timeout(12000)});
   if(!upstream.ok)return respond({error:"DSS API request failed",status:upstream.status},upstream.status===401||upstream.status===403?502:upstream.status);
   const type=upstream.headers.get("Content-Type")||"";
   if(!type.includes("application/json"))return respond({error:"DSS API returned non-JSON response"},502);
   const raw=await upstream.text();
   if(raw.length>2_000_000)return respond({error:"Response too large"},502);
   return new Response(raw,{status:200,headers:{"Content-Type":"application/json; charset=utf-8",...cors}});
  }catch(e){return respond({error:"Unable to reach DSS API"},502)}
 }
};
