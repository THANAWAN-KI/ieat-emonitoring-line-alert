#!/usr/bin/env python3
"""Build the IEAT EMCC daily news digest from official public sources."""
import json
import re
import xml.etree.ElementTree as ET
from datetime import datetime, timezone, timedelta
from html import unescape
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
TZ = timezone(timedelta(hours=7))
MAX_NEWS = 120

SOURCE_PAGES = [
    ("กรมอุตุนิยมวิทยา", "https://www.tmd.go.th/warning-and-events"),
    ("กรมอุตุนิยมวิทยา", "https://www.tmd.go.th/forecast/daily"),
    ("กองเฝ้าระวังแผ่นดินไหว", "https://earthquake.tmd.go.th/"),
    ("GISTDA Disaster Platform", "https://disaster.gistda.or.th/landing/news"),
    ("กรมป้องกันและบรรเทาสาธารณภัย", "https://www.disaster.go.th/th/news/"),
    ("ศูนย์เตือนภัยพิบัติแห่งชาติ", "https://ndwc.disaster.go.th/ndwc/cms/7085"),
    ("กรมควบคุมมลพิษ", "https://www.pcd.go.th/pcd_news/"),
    ("การนิคมอุตสาหกรรมแห่งประเทศไทย", "https://www.ieat.go.th/th/ieat-news"),
    ("กรมโรงงานอุตสาหกรรม", "https://www.diw.go.th/webdiw/pr-news/"),
]
RSS_SOURCES = [
    ("แผ่นดินไหว กรมอุตุนิยมวิทยา", "https://earthquake.tmd.go.th/feed/rss_inside.xml"),
]
STATUS_SOURCES = SOURCE_PAGES + [
    ("ศูนย์ข้อมูลสถานการณ์น้ำ", "https://thanawan-ki.github.io/ieat-emonitoring-line-alert/flood-report.html"),
]
KEYWORDS = (
    "นิคมอุตสาหกรรม", "โรงงาน", "อุตสาหกรรม", "สารเคมี", "ก๊าซ", "มลพิษ",
    "คุณภาพอากาศ", "pm2.5", "pm 2.5", "ฝุ่น", "น้ำเสีย", "คุณภาพน้ำ",
    "ฝนหนัก", "ฝนตกหนัก", "น้ำท่วม", "น้ำป่า", "น้ำล้นตลิ่ง", "พายุ",
    "ลมแรง", "คลื่นสูง", "แผ่นดินไหว", "สึนามิ", "ไฟไหม้", "ไฟป่า",
    "จุดความร้อน", "ดินถล่ม", "ภัยแล้ง", "ภัยพิบัติ", "เตือนภัย", "ฉุกเฉิน",
)
CATEGORY_RULES = [
    ("น้ำและสภาพอากาศ", ("ฝน", "น้ำท่วม", "น้ำป่า", "น้ำล้นตลิ่ง", "พายุ", "ลมแรง", "คลื่น", "อากาศ")),
    ("ไฟไหม้และเหตุฉุกเฉิน", ("ไฟไหม้", "ไฟป่า", "จุดความร้อน", "สารเคมี", "ก๊าซ", "ฉุกเฉิน")),
    ("PM2.5 และสิ่งแวดล้อม", ("pm2.5", "pm 2.5", "ฝุ่น", "มลพิษ", "คุณภาพอากาศ", "น้ำเสีย", "คุณภาพน้ำ")),
    ("แผ่นดินไหวและภัยพิบัติ", ("แผ่นดินไหว", "สึนามิ", "ดินถล่ม", "ภัยพิบัติ")),
    ("นิคมฯ และโรงงาน", ("นิคมอุตสาหกรรม", "โรงงาน", "อุตสาหกรรม")),
]

def clean_html(value):
    value = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", " ", value or "", flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", unescape(value)).strip()

def request_text(url, limit=2_000_000):
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 IEAT-EMCC-News/2.0", "Accept-Language": "th,en;q=0.8"})
    with urlopen(req, timeout=30) as response:
        return response.read(limit).decode("utf-8", errors="ignore"), response.status

def canonical_url(url):
    parts = urlsplit(url)
    return urlunsplit((parts.scheme, parts.netloc.lower(), parts.path.rstrip("/"), "", ""))

def category_for(text):
    value = text.lower()
    for category, terms in CATEGORY_RULES:
        if any(term in value for term in terms):
            return category
    return "ข่าวและประกาศ"

def relevant(text):
    value = text.lower()
    return any(keyword in value for keyword in KEYWORDS)

def page_metadata(html, base_url):
    title_match = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    desc_match = re.search(r'<meta[^>]+(?:name|property)=["\'](?:description|og:description)["\'][^>]+content=["\'](.*?)["\']', html, re.I | re.S)
    image_match = re.search(r'<meta[^>]+(?:property|name)=["\'](?:og:image|twitter:image)["\'][^>]+content=["\'](.*?)["\']', html, re.I | re.S)
    return (
        clean_html(title_match.group(1)) if title_match else "",
        clean_html(desc_match.group(1)) if desc_match else "",
        urljoin(base_url, unescape(image_match.group(1)).strip()) if image_match else "",
    )

def listing_items(source, url, today):
    try:
        html, _ = request_text(url)
    except Exception:
        return []
    items = []
    anchor_pattern = re.compile(r'<a\b[^>]*href=["\']([^"\']+)["\'][^>]*>([\s\S]*?)</a>', re.I)
    for match in anchor_pattern.finditer(html):
        href, label_html = match.groups()
        title = clean_html(label_html)
        if len(title) < 12:
            continue
        absolute = urljoin(url, unescape(href).strip())
        if not absolute.startswith(("http://", "https://")):
            continue
        context = clean_html(html[max(0, match.start()-180):min(len(html), match.end()+220)])
        if not relevant(title + " " + context):
            continue
        items.append({
            "source": source, "url": canonical_url(absolute), "title": title[:240],
            "summary": context[:420] or "เปิดอ่านรายละเอียดจากแหล่งข้อมูลต้นทาง",
            "image": "", "category": category_for(title + " " + context),
            "published_date": today, "available": True,
        })
        if len(items) >= 12:
            break
    if not items:
        title, description, image = page_metadata(html, url)
        if relevant(title + " " + description):
            items.append({
                "source": source, "url": canonical_url(url), "title": title or "ข่าวและประกาศจาก" + source,
                "summary": description[:420] or "เปิดตรวจสอบข้อมูลล่าสุดจากแหล่งข้อมูลต้นทาง",
                "image": image, "category": category_for(title + " " + description),
                "published_date": today, "available": True,
            })
    return items

def rss_items(source, url, today):
    try:
        raw, _ = request_text(url)
        root = ET.fromstring(raw)
    except Exception:
        return []
    result = []
    for node in root.findall(".//item")[:20]:
        title = clean_html(node.findtext("title", ""))
        description = clean_html(node.findtext("description", ""))
        if not relevant(title + " " + description):
            continue
        result.append({
            "source": source, "url": canonical_url(node.findtext("link", url)),
            "title": title[:240], "summary": description[:420],
            "image": "", "category": category_for(title + " " + description),
            "published_date": clean_html(node.findtext("pubDate", "")) or today,
            "available": True,
        })
    return result

def source_status(name, url):
    try:
        _, status = request_text(url, 10_000)
        return {"name": name, "url": url, "ok": 200 <= status < 400, "http_status": status}
    except Exception as exc:
        return {"name": name, "url": url, "ok": False, "error": str(exc)[:160]}

def load_station_summary():
    path = DOCS / "status.json"
    if not path.exists():
        return {"available": False, "total": 0, "online": 0, "offline": 0, "alert": 0}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        rows = data.get("all_stations", [])
        online = sum(str(row.get("status", "")).upper() == "ONLINE" for row in rows)
        alert = sum(bool(str(row.get("parameter_alarm") or row.get("ParameterAlram") or "").strip(" -")) for row in rows)
        return {"available": True, "total": len(rows), "online": online, "offline": len(rows)-online, "alert": alert, "updated_at": data.get("updated_at_text") or data.get("updated_at")}
    except Exception as exc:
        return {"available": False, "error": str(exc)[:160], "total": 0, "online": 0, "offline": 0, "alert": 0}

def previous_news():
    path = DOCS / "daily-report.json"
    try:
        return json.loads(path.read_text(encoding="utf-8")).get("news", [])
    except Exception:
        return []

def deduplicate(items):
    seen, output = set(), []
    for item in items:
        title_key = re.sub(r"\W+", "", str(item.get("title", "")).lower())
        url_key = canonical_url(str(item.get("url", "")))
        key = url_key or title_key
        if not key or key in seen:
            continue
        seen.add(key)
        item.setdefault("category", category_for(item.get("title", "") + " " + item.get("summary", "")))
        item.setdefault("published_date", "")
        item.setdefault("image", "")
        output.append(item)
    return output[:MAX_NEWS]

def main():
    now = datetime.now(TZ)
    today = now.strftime("%Y-%m-%d")
    fresh = []
    for source, url in RSS_SOURCES:
        fresh.extend(rss_items(source, url, today))
    for source, url in SOURCE_PAGES:
        fresh.extend(listing_items(source, url, today))
    news = deduplicate(fresh + previous_news())
    categories = {}
    for item in news:
        categories[item["category"]] = categories.get(item["category"], 0) + 1
    payload = {
        "report_date": today,
        "generated_at": now.isoformat(timespec="seconds"),
        "generated_at_th": now.strftime("%d/%m/%Y %H:%M น."),
        "station_summary": load_station_summary(),
        "sources": [source_status(name, url) for name, url in STATUS_SOURCES],
        "news": news,
        "news_total": len(news),
        "new_today": sum(item.get("published_date") == today for item in news),
        "categories": categories,
        "notice": "รวบรวมอัตโนมัติจากแหล่งข้อมูลสาธารณะของหน่วยงาน โปรดเปิดตรวจสอบรายละเอียดจากแหล่งข่าวต้นทางก่อนนำไปใช้อ้างอิง",
    }
    DOCS.mkdir(parents=True, exist_ok=True)
    (DOCS / "daily-report.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    archive = DOCS / "daily-reports"
    archive.mkdir(exist_ok=True)
    (archive / f"{today}.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

if __name__ == "__main__":
    main()
