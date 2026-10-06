#!/usr/bin/env python3
import datetime as dt, json, math, time, urllib.parse, urllib.request
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

API = "https://api-v3.thaiwater.net/api/v1/thaiwater30/public"
OUT = Path("docs/data/water-history")
OUT.mkdir(parents=True, exist_ok=True)
STATIONS = {
  "P.67": "3247",
  "P.1": "3226",
  "P.5": null,
  "W.10B": "1099005",
  "W.1C": "3168",
  "Y.20": "3205",
  "Y.1C": "3146",
  "N.64": "3246",
  "N.1": "3219",
  "Y.37": "3127",
  "P.21": "3240",
  "P.73A": "504708",
  "W.3A": "3102",
  "N.13A": null,
  "N.49": "3245",
  "N.2B": "3095",
  "N.60": "3065",
  "N.5A": "2953",
  "N.7A": "2895",
  "N.8B": null,
  "N.22A": "3292",
  "N.24A": "3295",
  "Y.14B": null,
  "Y.3A": "3041",
  "Y.33": "3017",
  "Y.4": "2986",
  "Y.64": "504897",
  "Y.17": "2906",
  "P.2A": "2963",
  "P.7A": "2900",
  "P.16": "2847",
  "P.50A": "2914",
  "P.47A": null,
  "P.78": "2855",
  "W.23": "3059",
  "W.4A": "3018",
  "S.33": "2985",
  "S.3": "2576",
  "S.4B": "2881",
  "S.42": "2799",
  "P.17": "2832",
  "N.67": "2821",
  "C.2": "2795",
  "C.13": "2744",
  "C.3": "2723",
  "C.7A": "2626",
  "C.35": "2609",
  "C.36": "2611",
  "C.37": "2608",
  "C.29B": null,
  "C.30": null,
  "Ct.5A": "2830",
  "Ct.4": "2811",
  "Ct.7": null,
  "Ct.9": "2781",
  "Ct.19": "2777",
  "S.43": "504982",
  "S.14": "2753",
  "S.28": "2712",
  "S.9": "2632",
  "S.32": "2623",
  "S.26": "2624",
  "S.5": "2607",
  "K.11A": "2679",
  "K.55A": "832066",
  "K.56A": null,
  "K.2B": null,
  "K.57": null,
  "T.10": null,
  "T.13": "505039",
  "T.15": "528052",
  "T.1": "2676",
  "T.14": "505041",
  "X.173A": "2585",
  "X.90": "2589",
  "X.44": "2591",
  "P.81": "3212"
}
YEARS = (2023, 2024, 2025, 2026)
UA = "Mozilla/5.0 (compatible; IEAT-EMCC-GIS/1.0; +https://www.thaiwater.net/)"

def fetch_json(path, params=None, attempts=4, timeout=180):
    params = params or {}
    url = API + "/" + path + ("?" + urllib.parse.urlencode(params) if params else "")
    last = None
    for i in range(attempts):
        try:
            req = urllib.request.Request(url, headers={"Accept":"application/json","User-Agent":UA,"Referer":"https://www.thaiwater.net/"})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                payload = json.load(r)
            data = payload.get("data") if isinstance(payload, dict) else None
            if isinstance(data, str) and data.startswith("5"):
                raise RuntimeError(data[:140])
            return payload
        except Exception as exc:
            last = exc
            time.sleep(min(10, 2*(i+1)))
    raise RuntimeError(f"{url}: {last}")

def localized(v):
    if isinstance(v, dict):
        return (v.get("th") or v.get("en") or "").strip()
    return str(v or "").strip()

def catalogue():
    meta = {}
    try:
        payload = fetch_json("waterlevel")
        entries = payload.get("data") if isinstance(payload, dict) else []
        if isinstance(entries, dict):
            entries = entries.get("data") or entries.get("waterlevel_data") or []
        if not isinstance(entries, list):
            entries = []
        for e in entries:
            st = e.get("station") or {}
            sid = st.get("id")
            if sid is None: continue
            meta[str(sid)] = {
                "name": localized(st.get("tele_station_name")),
                "agency": localized((e.get("agency") or {}).get("agency_shortname")),
                "province": localized((e.get("geocode") or {}).get("province_name")),
                "amphoe": localized((e.get("geocode") or {}).get("amphoe_name")),
                "basin": localized((e.get("basin") or {}).get("basin_name")),
                "lat": st.get("tele_station_lat"),
                "lon": st.get("tele_station_long"),
            }
    except Exception as exc:
        print("catalogue warning", exc, flush=True)
    return meta

def graph_points(payload):
    if not isinstance(payload, dict): return []
    data = payload.get("data")
    if isinstance(data, dict) and isinstance(data.get("graph_data"), list):
        return data["graph_data"]
    if isinstance(payload.get("graph_data"), list):
        return payload["graph_data"]
    return []

def get_year(code, sid, year):
    today = (dt.datetime.utcnow() + dt.timedelta(hours=7)).date()
    start = dt.date(year,1,1)
    end = min(dt.date(year,12,31), today)
    if start > end: return code, year, [], "future"
    params = {"station_id":sid,"station_type":"tele_waterlevel","start_date":start.isoformat(),"end_date":end.isoformat()}
    try:
        pts = graph_points(fetch_json("waterlevel_graph", params))
        return code, year, pts, ""
    except Exception as exc:
        # Monthly fallback protects against large yearly responses / transient DB errors.
        all_pts, errs = [], []
        for month in range(1,13):
            a = dt.date(year,month,1)
            if a > end: break
            b = min(end, (dt.date(year+1,1,1) if month==12 else dt.date(year,month+1,1))-dt.timedelta(days=1))
            try:
                p = dict(params, start_date=a.isoformat(), end_date=b.isoformat())
                all_pts.extend(graph_points(fetch_json("waterlevel_graph", p)))
            except Exception as e:
                errs.append(f"{a}:{e}")
        return code, year, all_pts, " | ".join(errs[:3]) if not all_pts else "monthly fallback"

def summarize(points):
    byday = defaultdict(list)
    first = last = None
    total = 0.0; count = 0; lo = None; hi = None
    seen = set()
    for p in points:
        stamp = str(p.get("datetime") or p.get("waterlevel_datetime") or "").strip().replace("T"," ")
        if not stamp: continue
        raw = p.get("value")
        if raw in (None,""): raw = p.get("waterlevel_msl")
        try: v=float(raw)
        except Exception: continue
        if not math.isfinite(v): continue
        key=(stamp,v)
        if key in seen: continue
        seen.add(key)
        day=stamp[:10]
        if len(day)!=10: continue
        byday[day].append(v)
        total+=v; count+=1
        lo=v if lo is None or v<lo else lo
        hi=v if hi is None or v>hi else hi
        first=stamp if first is None or stamp<first else first
        last=stamp if last is None or stamp>last else last
    days=[]
    for day in sorted(byday):
        a=byday[day]
        days.append([day, round(min(a),3), round(max(a),3), round(sum(a)/len(a),3), len(a)])
    return {
        "count":count,"first":first,"last":last,
        "min":None if lo is None else round(lo,3),
        "max":None if hi is None else round(hi,3),
        "avg":None if not count else round(total/count,3),
        "days":days
    }

def main():
    meta=catalogue()
    now=(dt.datetime.utcnow()+dt.timedelta(hours=7)).replace(microsecond=0).isoformat(sep=" ")
    resolved={c:s for c,s in STATIONS.items() if s}
    yearly={y:{"schema_version":1,"year":y,"generated_at":now,"source":"ThaiWater / HII","stations":{}} for y in YEARS}
    jobs=[]
    with ThreadPoolExecutor(max_workers=8) as pool:
        for code,sid in resolved.items():
            for year in YEARS:
                jobs.append(pool.submit(get_year,code,sid,year))
        for fut in as_completed(jobs):
            code,year,points,note=fut.result()
            sid=resolved[code]
            summary=summarize(points)
            summary.update({"station_id":sid, **meta.get(str(sid), {})})
            if note: summary["note"]=note
            yearly[year]["stations"][code]=summary
            print(year, code, summary["count"], note, flush=True)
    for year,data in yearly.items():
        (OUT/f"waterlevel_{year}.json").write_text(json.dumps(data,ensure_ascii=False,separators=(",",":")),encoding="utf-8")
    index={
      "schema_version":1,"generated_at":now,"years":list(YEARS),
      "stations":{code:({"station_id":sid,**meta.get(str(sid),{})} if sid else {"station_id":None,"available":False}) for code,sid in STATIONS.items()},
      "missing":[code for code,sid in STATIONS.items() if not sid],
      "source":"https://www.thaiwater.net/water/wl"
    }
    (OUT/"index.json").write_text(json.dumps(index,ensure_ascii=False,separators=(",",":")),encoding="utf-8")

if __name__=="__main__":
    main()
