const LINE_REPLY_API = "https://api.line.me/v2/bot/message/reply";
const LINE_PUSH_API = "https://api.line.me/v2/bot/message/push";
const DEFAULT_REPORT_URL = "https://thanawan-ki.github.io/ieat-emonitoring-line-alert/emcc-report.html";
const DEFAULT_HAZARDOUS_URL = "https://emonitor.ieat.go.th/envisys/gis/file/hazardous8H8j51DukSmv9Opd4Z6dCVbuB5saueSIz2ErixyZp7lOdfcZX1t44oIdouDxWESk.json";
const TYPE_RULES = [
  ["แผ่นดินไหวและสึนามิ", /แผ่นดินไหว|สึนามิ|earthquake|tsunami/i],
  ["พายุและอากาศรุนแรง", /พายุ|ลมแรง|ลูกเห็บ|storm|typhoon|cyclone/i],
  ["ฝนหนัก น้ำท่วม และน้ำป่า", /ฝนหนัก|น้ำท่วม|น้ำป่า|น้ำหลาก|flood|flash flood/i],
  ["ไฟป่า จุดความร้อน และหมอกควัน", /ไฟป่า|จุดความร้อน|หมอกควัน|hotspot|wildfire/i],
  ["เหตุโรงงาน ไฟไหม้ และสารเคมี", /โรงงาน|ไฟไหม้|เพลิงไหม้|สารเคมี|รั่วไหล|ระเบิด|ซ้อมแผน|factory|chemical|fire|drill/i],
  ["ภัยแล้งและสถานการณ์น้ำ", /ภัยแล้ง|ขาดแคลนน้ำ|drought/i],
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/health") return json({ ok: true, service: "emcc-disaster-webhook" });
    if (url.pathname === "/line-webhook" && request.method === "POST") {
      return handleLineWebhook(request, env, ctx);
    }
    if (url.pathname === "/events" && request.method === "POST") {
      return handleExternalEvent(request, env);
    }
    return json({ ok: false, message: "Not found" }, 404);
  },
};

async function handleLineWebhook(request, env, ctx) {
  const raw = await request.text();
  const signature = request.headers.get("x-line-signature") || "";
  if (!(await validLineSignature(raw, signature, env.LINE_CHANNEL_SECRET))) {
    return json({ ok: false, message: "Invalid LINE signature" }, 401);
  }
  const payload = JSON.parse(raw);
  for (const event of payload.events || []) {
    if (event.type !== "message" || event.message?.type !== "text" || !event.replyToken) continue;
    ctx.waitUntil(replyToOfficer(event.replyToken, event.message.text, env));
  }
  return json({ ok: true });
}

async function replyToOfficer(replyToken, text, env) {
  const normalized = String(text || "").trim();
  if (/^(ช่วยเหลือ|help|วิธีใช้)$/i.test(normalized)) {
    return lineReply(replyToken, [{
      type: "text",
      text: "วิธีใช้ EMCC Disaster\nพิมพ์ประเภทเหตุ + ชื่อบริษัท + รายละเอียด เช่น\nไฟไหม้ บริษัท ABC มีควันบริเวณคลังสินค้า\nซ้อมแผน บริษัท XYZ วันที่ 30 สิงหาคม 2569\n\nระบบจะวิเคราะห์ข้อมูลเบื้องต้นและสร้างลิงก์จัดทำรายงาน PNG"
    }], env);
  }

  const incidentType = classifyType(normalized);
  const companyQuery = extractCompany(normalized);
  const company = companyQuery ? await findCompany(companyQuery, env) : null;
  const analysis = buildAnalysis(incidentType, normalized, company);
  const reportUrl = buildReportUrl(env.REPORT_BASE_URL || DEFAULT_REPORT_URL, {
    type: incidentType,
    company: company?.name || companyQuery || "",
    estate: company?.estate || "",
    location: company?.location || "",
    details: normalized,
    analysis,
    source: "LINE emcc_disaster",
    time: new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" }),
  });
  const messages = [buildIncidentFlex(incidentType, normalized, company, analysis, reportUrl)];
  if (!companyQuery) messages.push({ type: "text", text: "คำแนะนำ: ระบุคำว่า “บริษัท” ตามด้วยชื่อบริษัท เพื่อให้ระบบค้นข้อมูลสถานประกอบการและพื้นที่นิคมฯ ได้แม่นยำขึ้น" });
  return lineReply(replyToken, messages, env);
}

async function handleExternalEvent(request, env) {
  const token = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!env.EMCC_WEBHOOK_SECRET || !constantTimeEqual(token, env.EMCC_WEBHOOK_SECRET)) {
    return json({ ok: false, message: "Unauthorized" }, 401);
  }
  const event = await request.json();
  const id = String(event.id || event.event_id || crypto.randomUUID());
  if (env.EVENTS_KV) {
    if (await env.EVENTS_KV.get(id)) return json({ ok: true, duplicate: true });
    await env.EVENTS_KV.put(id, new Date().toISOString(), { expirationTtl: 604800 });
  }
  const incidentType = event.type || classifyType([event.title, event.details].filter(Boolean).join(" "));
  const title = event.title || "ตรวจพบเหตุการณ์ใหม่";
  const details = event.details || event.description || "ไม่มีรายละเอียดเพิ่มเติม";
  const reportUrl = buildReportUrl(env.REPORT_BASE_URL || DEFAULT_REPORT_URL, {
    type: incidentType, company: event.company || "", estate: event.estate || "",
    location: event.location || "", details, source: event.source || "External Webhook",
    source_url: event.source_url || "", time: event.time || new Date().toISOString(),
  });
  await linePush([buildExternalFlex(incidentType, title, details, event, reportUrl)], env);
  return json({ ok: true, id });
}

function classifyType(text) {
  for (const [name, pattern] of TYPE_RULES) if (pattern.test(text)) return name;
  return "เหตุฉุกเฉินอื่น";
}

function extractCompany(text) {
  const match = text.match(/(?:บริษัท|บจก\.|หจก\.|โรงงาน)\s*([^\n,;:]{2,100})/i);
  if (!match) return "";
  return match[1].replace(/\s+(?:เกิด|มี|แจ้ง|เวลา|วันที่|บริเวณ|ซ้อมแผน|ไฟไหม้|เพลิงไหม้|สารเคมี).*$/i, "").trim();
}

let dataCache = { expires: 0, records: [] };
async function findCompany(query, env) {
  if (Date.now() > dataCache.expires) {
    const response = await fetch(env.HAZARDOUS_DATA_URL || DEFAULT_HAZARDOUS_URL, { cf: { cacheTtl: 300 } });
    if (!response.ok) return null;
    const raw = await response.json();
    dataCache = { expires: Date.now() + 300000, records: collectObjects(raw).slice(0, 20000) };
  }
  const needle = normalize(query);
  let best = null, bestScore = 0;
  for (const record of dataCache.records) {
    const name = pick(record, ["CompanyNameTH","CompanyName","FactoryName","name","ชื่อผู้ประกอบการ","บริษัท"]);
    if (!name) continue;
    const candidate = normalize(name);
    const score = candidate === needle ? 100 : candidate.includes(needle) ? 80 : needle.includes(candidate) ? 60 : wordScore(needle, candidate);
    if (score > bestScore) { bestScore = score; best = record; }
  }
  if (!best || bestScore < 35) return null;
  return {
    name: pick(best, ["CompanyNameTH","CompanyName","FactoryName","name","ชื่อผู้ประกอบการ","บริษัท"]) || query,
    estate: pick(best, ["IndustrialEstateTH","IndustrialEstate","IndustryZone","estate_name","นิคมอุตสาหกรรม"]) || "",
    location: pick(best, ["Address","address","Location","ตำแหน่ง","ที่อยู่"]) || "",
    chemicals: pick(best, ["ChemicalName","HazardousName","สารเคมี","วัตถุอันตราย"]) || "",
    registration: pick(best, ["FactoryNo","RegistrationNo","เลขทะเบียนโรงงาน"]) || "",
  };
}

function collectObjects(value, out = []) {
  if (!value || typeof value !== "object") return out;
  if (!Array.isArray(value)) out.push(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === "object") collectObjects(child, out);
  }
  return out;
}
function pick(obj, keys) { for (const key of keys) if (obj?.[key] !== undefined && obj[key] !== null && String(obj[key]).trim()) return String(obj[key]).trim(); return ""; }
function normalize(value) { return String(value || "").toLowerCase().replace(/[\s.,()\-_/บริษัทจำกัดมหาชน]+/g, ""); }
function wordScore(a, b) { let hits = 0; for (const ch of new Set(a)) if (b.includes(ch)) hits++; return a.length ? Math.round(hits / a.length * 50) : 0; }

function buildAnalysis(type, details, company) {
  const parts = [];
  if (company) {
    parts.push(`พบข้อมูลสถานประกอบการ: ${company.name}`);
    if (company.estate) parts.push(`พื้นที่: ${company.estate}`);
    if (company.chemicals) parts.push(`พบข้อมูลสาร/วัตถุอันตรายที่ควรตรวจสอบ: ${company.chemicals}`);
  } else {
    parts.push("ยังไม่พบข้อมูลสถานประกอบการที่ตรงกัน กรุณายืนยันชื่อและพื้นที่");
  }
  if (type.includes("โรงงาน")) parts.push("ควรตรวจทิศทางลม ผู้บาดเจ็บ แหล่งกำเนิด ระบบไฟฟ้า/ก๊าซ/สารเคมี และพื้นที่อพยพ");
  if (type.includes("แผ่นดินไหว")) parts.push("ควรตรวจอาคาร เครื่องจักร ท่อ ก๊าซ สารเคมี และระบบสาธารณูปโภค");
  if (type.includes("น้ำท่วม")) parts.push("ควรตรวจระดับน้ำ เส้นทางเข้าออก ระบบไฟฟ้า และการย้ายสารเคมีขึ้นที่สูง");
  return parts.join("\n• ");
}

function buildIncidentFlex(type, text, company, analysis, reportUrl) {
  return flex("รับแจ้งเหตุจากเจ้าหน้าที่", type, [
    row("บริษัท/พื้นที่", company ? [company.name, company.estate].filter(Boolean).join(" • ") : "รอยืนยันข้อมูล"),
    row("รายละเอียด", text),
    row("วิเคราะห์เบื้องต้น", "• " + analysis),
  ], reportUrl, "#5A008F");
}

function buildExternalFlex(type, title, details, event, reportUrl) {
  const severity = String(event.severity || "เฝ้าระวัง");
  const color = /วิกฤต|รุนแรง|critical|high/i.test(severity) ? "#D90429" : /เตือน|warning|medium/i.test(severity) ? "#E85D04" : "#5A008F";
  return flex(title, type, [
    row("ระดับ", severity),
    row("พื้นที่", event.location || event.province || "ไม่ระบุ"),
    row("รายละเอียด", details),
    row("แหล่งข้อมูล", event.source || "ระบบภายนอก"),
  ], reportUrl, color);
}

function row(label, value) {
  return { type: "box", layout: "vertical", margin: "md", spacing: "xs", contents: [
    { type: "text", text: label, size: "xs", color: "#5A008F", weight: "bold", wrap: true },
    { type: "text", text: String(value || "-").slice(0, 1200), size: "sm", color: "#252525", wrap: true },
  ]};
}
function flex(title, type, rows, reportUrl, color) {
  return { type: "flex", altText: `${title}: ${type}`.slice(0, 400), contents: {
    type: "bubble", size: "mega",
    header: { type: "box", layout: "vertical", paddingAll: "16px", backgroundColor: color, contents: [
      { type: "text", text: title, color: "#FFFFFF", weight: "bold", size: "lg", wrap: true },
      { type: "text", text: type, color: "#FFFFFFCC", size: "sm", margin: "sm", wrap: true },
    ]},
    body: { type: "box", layout: "vertical", paddingAll: "15px", contents: rows },
    footer: { type: "box", layout: "vertical", paddingAll: "14px", contents: [
      { type: "button", style: "primary", color: "#5A008F", action: { type: "uri", label: "จัดทำรายงานและส่งออก PNG", uri: reportUrl } },
    ]},
  }};
}

function buildReportUrl(base, values) {
  const url = new URL(base);
  for (const [key, value] of Object.entries(values)) if (value) url.searchParams.set(key, String(value).slice(0, 1200));
  return url.toString();
}
async function validLineSignature(body, signature, secret) {
  if (!secret || !signature) return false;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(body));
  const expected = btoa(String.fromCharCode(...new Uint8Array(digest)));
  return constantTimeEqual(expected, signature);
}
function constantTimeEqual(a, b) {
  a = String(a || ""); b = String(b || "");
  if (a.length !== b.length) return false;
  let diff = 0; for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
async function lineReply(replyToken, messages, env) { return lineRequest(LINE_REPLY_API, { replyToken, messages }, env); }
async function linePush(messages, env) {
  if (!env.LINE_TARGET_ID) throw new Error("LINE_TARGET_ID is missing");
  return lineRequest(LINE_PUSH_API, { to: env.LINE_TARGET_ID, messages }, env);
}
async function lineRequest(endpoint, payload, env) {
  const response = await fetch(endpoint, { method: "POST", headers: { authorization: `Bearer ${env.LINE_CHANNEL_ACCESS_TOKEN}`, "content-type": "application/json" }, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`LINE API ${response.status}: ${await response.text()}`);
  return response;
}
function json(value, status = 200) { return new Response(JSON.stringify(value), { status, headers: { "content-type": "application/json; charset=utf-8" } }); }
