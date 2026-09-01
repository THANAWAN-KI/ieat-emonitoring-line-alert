#!/usr/bin/env python3
import json
from datetime import datetime, timezone, timedelta
from pathlib import Path
from urllib.request import Request, urlopen
from html import unescape
import re

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
TZ = timezone(timedelta(hours=7))

SOURCES = [
    ("กรมอุตุนิยมวิทยา", "https://www.tmd.go.th/"),
    ("ประกาศเตือนภัย กรมอุตุนิยมวิทยา", "https://www.tmd.go.th/warning-and-events"),
    ("แผ่นดินไหว กรมอุตุนิยมวิทยา", "https://earthquake.tmd.go.th/"),
    ("ศูนย์ข้อมูลสถานการณ์น้ำ", "https://thanawan-ki.github.io/ieat-emonitoring-line-alert/flood-report.html"),
]

NEWS_SOURCES = [
    ("GISTDA", "https://disaster.gistda.or.th/landing/news"),
    ("กรมอุตุนิยมวิทยา", "https://www.tmd.go.th/forecast/daily"),
    ("ปภ. / ศูนย์เตือนภัยพิบัติแห่งชาติ", "https://ndwc.disaster.go.th/ndwc/cms/7085?id=163329"),
]
KEYWORDS = ("ฝนหนัก", "ฝนตกหนัก", "น้ำท่วม", "น้ำป่า", "พายุ", "ลมแรง", "คลื่นสูง", "แผ่นดินไหว", "ไฟป่า", "จุดความร้อน", "ดินถล่ม", "ภัยพิบัติ", "สารเคมี", "โรงงาน", "นิคมอุตสาหกรรม")

def clean_html(value):
    value = re.sub(r"<script[\s\S]*?</script>|<style[\s\S]*?</style>", " ", value, flags=re.I)
    value = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", unescape(value)).strip()

def fetch_news(source, url):
    try:
        req = Request(url, headers={"User-Agent": "Mozilla/5.0 IEAT-Daily-Situation/1.0"})
        with urlopen(req, timeout=25) as response:
            html = response.read(1_500_000).decode("utf-8", errors="ignore")
        title_match = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
        text = clean_html(html)
        snippets = []
        for keyword in KEYWORDS:
            pos = text.find(keyword)
            if pos >= 0:
                snippet = text[max(0, pos - 90):pos + 360].strip()
                if snippet not in snippets:
                    snippets.append(snippet)
            if len(snippets) >= 2:
                break
        return {"source": source, "url": url, "title": clean_html(title_match.group(1)) if title_match else f"ข่าวจาก{source}", "summary": " • ".join(snippets)[:650] or "เปิดตรวจสอบข่าวและประกาศล่าสุดจากแหล่งข้อมูลต้นทาง", "matched_keywords": [k for k in KEYWORDS if k in text][:8], "available": True}
    except Exception as exc:
        return {"source": source, "url": url, "title": f"ข่าวและประกาศจาก{source}", "summary": "ไม่สามารถดึงรายละเอียดอัตโนมัติได้ในรอบนี้ กรุณาเปิดตรวจสอบจากแหล่งข้อมูลต้นทาง", "matched_keywords": [], "available": False, "error": str(exc)[:160]}

def source_status(name, url):
    try:
        req = Request(url, headers={"User-Agent": "IEAT-Daily-Situation/1.0"})
        with urlopen(req, timeout=20) as response:
            return {"name": name, "url": url, "ok": 200 <= response.status < 400, "http_status": response.status}
    except Exception as exc:
        return {"name": name, "url": url, "ok": False, "error": str(exc)[:160]}

def load_station_summary():
    path = DOCS / "status.json"
    if not path.exists():
        return {"available": False, "total": 0, "online": 0, "offline": 0, "alert": 0}
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        rows = data.get("all_stations", [])
        online = sum(str(r.get("status", "")).upper() == "ONLINE" for r in rows)
        alert = sum(bool(str(r.get("parameter_alarm") or r.get("ParameterAlram") or "").strip(" -")) for r in rows)
        return {"available": True, "total": len(rows), "online": online, "offline": len(rows)-online, "alert": alert, "updated_at": data.get("updated_at_text") or data.get("updated_at")}
    except Exception as exc:
        return {"available": False, "error": str(exc)[:160], "total": 0, "online": 0, "offline": 0, "alert": 0}

def main():
    now = datetime.now(TZ)
    payload = {
        "report_date": now.strftime("%Y-%m-%d"),
        "generated_at": now.isoformat(timespec="seconds"),
        "generated_at_th": now.strftime("%d/%m/%Y %H:%M น."),
        "station_summary": load_station_summary(),
        "sources": [source_status(name, url) for name, url in SOURCES],
        "news": [fetch_news(source, url) for source, url in NEWS_SOURCES],
        "experience_id": "a6b0cc340ae343379c4f66951610f535",
        "notice": "ข้อมูลเพื่อสนับสนุนการติดตามและประสานงานเบื้องต้น โปรดตรวจสอบกับหน่วยงานเจ้าของข้อมูลก่อนนำไปใช้อ้างอิง"
    }
    DOCS.mkdir(parents=True, exist_ok=True)
    (DOCS / "daily-report.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    archive = DOCS / "daily-reports"
    archive.mkdir(exist_ok=True)
    (archive / f"{payload['report_date']}.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

if __name__ == "__main__":
    main()
