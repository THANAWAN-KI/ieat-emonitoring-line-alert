window.IEAT_THAIWATER_DATA = {
  "schema_version": 3,
  "status": "ok",
  "generated_at": "2026-11-01T22:12:34+07:00",
  "methodology": {
    "watch_radius_km": 30.0,
    "display_radius_km": 50.0,
    "rain_threshold_mm": 35,
    "station_max_age_hours": 24,
    "note": "คัดกรองทุกนิคมฯ/ท่าเรือกับทุกสถานีในรัศมี 30 กม. ใช้ค่าฝนมากกว่า 35 มม. หรือสถานะระดับน้ำเฝ้าระวังขึ้นไป และเวลาสถานีไม่เกิน 24 ชั่วโมง ไม่ใช่การยืนยันน้ำท่วมในนิคมฯ"
  },
  "sources": [
    {
      "name": "ThaiWater ฝนสะสม 24 ชั่วโมง",
      "url": "https://api-v3.thaiwater.net/api/v1/thaiwater30/public/rain_24h"
    },
    {
      "name": "ThaiWater ระดับน้ำ",
      "url": "https://api-v3.thaiwater.net/api/v1/thaiwater30/public/waterlevel_load"
    },
    {
      "name": "ตำแหน่งนิคมอุตสาหกรรม กนอ.",
      "url": "https://services5.arcgis.com/XbJa06Lil6auloCa/arcgis/rest/services/e_PP_2025/FeatureServer/1/query"
    },
    {
      "name": "พื้นที่เสี่ยงน้ำท่วมฉับพลัน 24 ชั่วโมง",
      "url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    {
      "name": "พื้นที่เสี่ยงน้ำท่วมฉับพลัน 48 ชั่วโมง",
      "url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  ],
  "estates": [
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.386388200000056,
      "lon": 100.90357670000009,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.758255900000053,
      "lon": 100.78931830000005,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881000000045,
      "lon": 100.70475700000009,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102000000062,
      "lon": 100.70771200000007,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.48933930000004,
      "lon": 100.59572110000005,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 6,
      "name": "นิคมอุตสาหกรรมบางปะอิน",
      "lat": 14.207749700000022,
      "lon": 100.58967480000007,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309000000055,
      "lon": 100.61001200000004,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.544000800000049,
      "lon": 100.23285600000008,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.546536590000073,
      "lon": 100.34361750000005,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 10,
      "name": "นิคมอุตสาหกรรมราชบุรี",
      "lat": 13.637294430000056,
      "lon": 99.85002164000008,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.542029030000036,
      "lon": 100.19885420000008,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755000000035,
      "lon": 99.04487700000004,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.575362700000024,
      "lon": 100.14894520000007,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.008259800000075,
      "lon": 100.35980570000004,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 15,
      "name": "นิคมอุตสาหกรรมสงขลา",
      "lat": 6.541849830000046,
      "lon": 100.41360340000006,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 16,
      "name": "นิคมอุตสาหกรรมเวลโกรว์",
      "lat": 13.570618000000023,
      "lon": 100.92248000000006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694000000043,
      "lon": 101.32956700000005,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.65990380000005,
      "lon": 100.91148330000004,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 19,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "lat": 13.56379732000005,
      "lon": 100.99491850000004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.723897680000052,
      "lon": 102.55463240000006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.906178630000058,
      "lon": 101.65291820000004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.727359730000046,
      "lon": 101.45593100000008,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 23,
      "name": "นิคมอุตสาหกรรมบางปู",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.57506305000004,
      "lon": 100.79479772200006,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 25,
      "name": "นิคมอุตสาหกรรมบางปู (เหนือ)",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.569035190000022,
      "lon": 100.65282020000006,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.004485800000053,
      "lon": 101.16260750000004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 28,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "lat": 13.04983377800005,
      "lon": 101.09224279000006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.421488500000066,
      "lon": 101.00412440000008,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 30,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "lat": 13.02386597701363,
      "lon": 101.07115751042997,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954000000032,
      "lon": 101.03339800000003,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.121345950000032,
      "lon": 100.99043060000008,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.105671255885829,
      "lon": 101.06700106658508,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 34,
      "name": "นิคมอุตสาหกรรมแหลมฉบัง",
      "lat": 13.076561000000028,
      "lon": 100.90917500000006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 35,
      "name": "ท่าเรืออุตสาหกรรมมาบตาพุด",
      "lat": 12.665224000000025,
      "lon": 101.13304900000009,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 36,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ตะวันออก (มาบตาพุด)",
      "lat": 12.703063200000031,
      "lon": 101.12631190000008,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 37,
      "name": "นิคมอุตสาหกรรมผาแดง",
      "lat": 12.690742000000055,
      "lon": 101.13246900000007,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.71649400000007,
      "lon": 101.10591300000004,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945000000063,
      "lon": 101.16531900000007,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 40,
      "name": "นิคมอุตสาหกรรมมาบตาพุด",
      "lat": 12.67868800000002,
      "lon": 101.13180600000004,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.739841908000074,
      "lon": 101.12280906200004,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 44,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 2",
      "lat": 13.570774892000031,
      "lon": 100.98321947200009,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 47,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 2",
      "lat": 13.094588902000057,
      "lon": 101.11351620800008,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 49,
      "name": "นิคมอุตสาหกรรมซีพีจีซี",
      "lat": 12.803765938000026,
      "lon": 101.22925269200005,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 50,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "lat": 12.868719838070461,
      "lon": 101.36086376330609,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 51,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 6)",
      "lat": 12.852329163000036,
      "lon": 101.21748270800003,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 52,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "lat": 12.896058797000023,
      "lon": 101.28114772800006,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 53,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
      "lat": 12.89336387800006,
      "lon": 101.12463591300008,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 55,
      "name": "นิคมอุตสาหกรรมโรจนะชลบุรี 2 (เขาคันทรง)",
      "lat": 13.077101327000037,
      "lon": 101.13626885900004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 56,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "lat": 13.126916941000047,
      "lon": 101.15881889900004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 58,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 5)",
      "lat": 13.089015443000047,
      "lon": 101.16322605000005,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 59,
      "name": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "lat": 13.146767481000039,
      "lon": 101.39876718000005,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 60,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 3",
      "lat": 13.09628960600003,
      "lon": 101.28410551700006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 61,
      "name": "นิคมอุตสาหกรรมโรจนะหนองใหญ่ จังหวัดชลบุรี",
      "lat": 13.170794615000036,
      "lon": 101.31258289400006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 62,
      "name": "นิคมอุตสาหกรรมบ้านบึง",
      "lat": 13.275150936000044,
      "lon": 101.24514896600004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 63,
      "name": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
      "lat": 13.231907109000076,
      "lon": 101.31623919700007,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646000000041,
      "lon": 101.00810700000005,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 65,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 4)",
      "lat": 13.081752217000028,
      "lon": 101.03817299200006,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 66,
      "name": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "lat": 13.036467356000058,
      "lon": 100.98974999200004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 67,
      "name": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "lat": 13.529234736000037,
      "lon": 101.01651303800008,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 68,
      "name": "นิคมอุตสาหกรรมอุดรธานี",
      "lat": 17.301297963000025,
      "lon": 102.87405096400005,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 69,
      "name": "นิคมอุตสาหกรรมบ่อทอง 33",
      "lat": 13.960939854000058,
      "lon": 101.87508894400008,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 70,
      "name": "นิคมอุตสาหกรรมเอ็กโก ระยอง",
      "lat": 12.75583830900007,
      "lon": 101.15385591100005,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 71,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 1",
      "lat": 13.068722661000038,
      "lon": 101.18655755500004,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 72,
      "name": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "lat": 18.60204741100006,
      "lon": 99.03726889700005,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 82,
      "name": "นิคมอุตสาหกรรมอมตะ สมาร์ทซิตี้ ชลบุรี",
      "lat": 13.494940441113723,
      "lon": 101.05249754589352,
      "operations": ""
    },
    {
      "id": 83,
      "name": "นิคมอุตสาหกรรมอารยะ",
      "lat": 13.576978327774249,
      "lon": 100.89104873646208,
      "operations": ""
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939503915980483,
      "lon": 101.0413767378398,
      "operations": ""
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.843730427800528,
      "lon": 101.23641847915039,
      "operations": ""
    },
    {
      "id": 86,
      "name": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "lat": 15.6539432754888,
      "lon": 100.5827344418788,
      "operations": ""
    }
  ],
  "estate_watch": [
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.544000800000049,
      "lon": 100.23285600000008,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 14,
      "rain_alert_count": 7,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 7,
      "max_rainfall_mm": 97.8,
      "nearest_alert_km": 4.674934171316372,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.546536590000073,
      "lon": 100.34361750000005,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 33,
      "rain_alert_count": 24,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 9,
      "max_rainfall_mm": 97.8,
      "nearest_alert_km": 4.60388187720373,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.542029030000036,
      "lon": 100.19885420000008,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 12,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 7,
      "max_rainfall_mm": 97.8,
      "nearest_alert_km": 5.96409557705208,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.758255900000053,
      "lon": 100.78931830000005,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 65,
      "rain_alert_count": 55,
      "heavy_rain_alert_count": 7,
      "water_alert_count": 10,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 2.0362140416044405,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881000000045,
      "lon": 100.70475700000009,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 83,
      "rain_alert_count": 66,
      "heavy_rain_alert_count": 7,
      "water_alert_count": 17,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 0.7278149096202271,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102000000062,
      "lon": 100.70771200000007,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 81,
      "rain_alert_count": 69,
      "heavy_rain_alert_count": 7,
      "water_alert_count": 12,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 3.712356287955699,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 23,
      "name": "นิคมอุตสาหกรรมบางปู",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 59,
      "rain_alert_count": 51,
      "heavy_rain_alert_count": 6,
      "water_alert_count": 8,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 10.49470424209022,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.57506305000004,
      "lon": 100.79479772200006,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 31,
      "rain_alert_count": 25,
      "heavy_rain_alert_count": 5,
      "water_alert_count": 6,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 7.415115576731975,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 25,
      "name": "นิคมอุตสาหกรรมบางปู (เหนือ)",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 59,
      "rain_alert_count": 51,
      "heavy_rain_alert_count": 6,
      "water_alert_count": 8,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 10.49470424209022,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.569035190000022,
      "lon": 100.65282020000006,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 67,
      "rain_alert_count": 58,
      "heavy_rain_alert_count": 6,
      "water_alert_count": 9,
      "max_rainfall_mm": 93.5,
      "nearest_alert_km": 8.540324535327358,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.48933930000004,
      "lon": 100.59572110000005,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 24,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 24,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.11290468175869,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 6,
      "name": "นิคมอุตสาหกรรมบางปะอิน",
      "lat": 14.207749700000022,
      "lon": 100.58967480000007,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 17,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 17,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.25031772245073,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309000000055,
      "lon": 100.61001200000004,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 16,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 16,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.665867272460714,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.65990380000005,
      "lon": 100.91148330000004,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 23,
      "rain_alert_count": 19,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 4,
      "max_rainfall_mm": 84.0,
      "nearest_alert_km": 12.030145507083846,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.008259800000075,
      "lon": 100.35980570000004,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 12,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 10,
      "max_rainfall_mm": 78.0,
      "nearest_alert_km": 10.64480235683347,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 16,
      "name": "นิคมอุตสาหกรรมเวลโกรว์",
      "lat": 13.570618000000023,
      "lon": 100.92248000000006,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 74.0,
      "nearest_alert_km": 8.832622883882104,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 44,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 2",
      "lat": 13.570774892000031,
      "lon": 100.98321947200009,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 4,
      "max_rainfall_mm": 74.0,
      "nearest_alert_km": 3.0979043867166878,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 83,
      "name": "นิคมอุตสาหกรรมอารยะ",
      "lat": 13.576978327774249,
      "lon": 100.89104873646208,
      "operations": "",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 12,
      "rain_alert_count": 9,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 74.0,
      "nearest_alert_km": 12.29672311989434,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 19,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "lat": 13.56379732000005,
      "lon": 100.99491850000004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 63.6,
      "nearest_alert_km": 1.7752687912394733,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945000000063,
      "lon": 101.16531900000007,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 7.193355299520884,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.739841908000074,
      "lon": 101.12280906200004,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 11.454188213708944,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 49,
      "name": "นิคมอุตสาหกรรมซีพีจีซี",
      "lat": 12.803765938000026,
      "lon": 101.22925269200005,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 7.317869330076649,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 50,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "lat": 12.868719838070461,
      "lon": 101.36086376330609,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 6.807575134903321,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 51,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 6)",
      "lat": 12.852329163000036,
      "lon": 101.21748270800003,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 9.098279075215103,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 52,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "lat": 12.896058797000023,
      "lon": 101.28114772800006,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 5.6523093721227236,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 53,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
      "lat": 12.89336387800006,
      "lon": 101.12463591300008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 7,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 12.156752252784177,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 70,
      "name": "นิคมอุตสาหกรรมเอ็กโก ระยอง",
      "lat": 12.75583830900007,
      "lon": 101.15385591100005,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 8.325573579588061,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.843730427800528,
      "lon": 101.23641847915039,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 7.06507776964934,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.906178630000058,
      "lon": 101.65291820000004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": 56.2,
      "nearest_alert_km": 10.591098779288023,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.727359730000046,
      "lon": 101.45593100000008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 16.26694804483545,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 35,
      "name": "ท่าเรืออุตสาหกรรมมาบตาพุด",
      "lat": 12.665224000000025,
      "lon": 101.13304900000009,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 13.129941880333812,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 36,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ตะวันออก (มาบตาพุด)",
      "lat": 12.703063200000031,
      "lon": 101.12631190000008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 11.733378129477195,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 37,
      "name": "นิคมอุตสาหกรรมผาแดง",
      "lat": 12.690742000000055,
      "lon": 101.13246900000007,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 11.655168787830641,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.71649400000007,
      "lon": 101.10591300000004,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 13.498117147569559,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 40,
      "name": "นิคมอุตสาหกรรมมาบตาพุด",
      "lat": 12.67868800000002,
      "lon": 101.13180600000004,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 12.378253895015913,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.421488500000066,
      "lon": 101.00412440000008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 40.7,
      "nearest_alert_km": 14.183489533396038,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 67,
      "name": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "lat": 13.529234736000037,
      "lon": 101.01651303800008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": 40.7,
      "nearest_alert_km": 2.7582426638140114,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.386388200000056,
      "lon": 100.90357670000009,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 7,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 7,
      "max_rainfall_mm": null,
      "nearest_alert_km": 17.91918472481892,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 10,
      "name": "นิคมอุตสาหกรรมราชบุรี",
      "lat": 13.637294430000056,
      "lon": 99.85002164000008,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": null,
      "nearest_alert_km": 3.6632876362743403,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.575362700000024,
      "lon": 100.14894520000007,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.569436005387221,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 82,
      "name": "นิคมอุตสาหกรรมอมตะ สมาร์ทซิตี้ ชลบุรี",
      "lat": 13.494940441113723,
      "lon": 101.05249754589352,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.186112995160817,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.004485800000053,
      "lon": 101.16260750000004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 5.943096814769784,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 28,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "lat": 13.04983377800005,
      "lon": 101.09224279000006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 15.05895411409927,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 30,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "lat": 13.02386597701363,
      "lon": 101.07115751042997,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 15.643772442934248,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954000000032,
      "lon": 101.03339800000003,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 24.857679255604843,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.121345950000032,
      "lon": 100.99043060000008,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 28.65395915858729,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.105671255885829,
      "lon": 101.06700106658508,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 21.200304676387987,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 47,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 2",
      "lat": 13.094588902000057,
      "lon": 101.11351620800008,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 17.000519086805717,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 55,
      "name": "นิคมอุตสาหกรรมโรจนะชลบุรี 2 (เขาคันทรง)",
      "lat": 13.077101327000037,
      "lon": 101.13626885900004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 14.01439817407326,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 56,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "lat": 13.126916941000047,
      "lon": 101.15881889900004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 18.131484859179594,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 58,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 5)",
      "lat": 13.089015443000047,
      "lon": 101.16322605000005,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 13.96433329407525,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 59,
      "name": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "lat": 13.146767481000039,
      "lon": 101.39876718000005,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 2.5866704856555467,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 60,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 3",
      "lat": 13.09628960600003,
      "lon": 101.28410551700006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 12.16330586393426,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 61,
      "name": "นิคมอุตสาหกรรมโรจนะหนองใหญ่ จังหวัดชลบุรี",
      "lat": 13.170794615000036,
      "lon": 101.31258289400006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 5,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 7.180191055675642,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 65,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 4)",
      "lat": 13.081752217000028,
      "lon": 101.03817299200006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 21.89020549414896,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 66,
      "name": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "lat": 13.036467356000058,
      "lon": 100.98974999200004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 24.41745554069368,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 71,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 1",
      "lat": 13.068722661000038,
      "lon": 101.18655755500004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 11.142330125164499,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939503915980483,
      "lon": 101.0413767378398,
      "operations": "",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 18.007954998156684,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 63,
      "name": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
      "lat": 13.231907109000076,
      "lon": 101.31623919700007,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 41.5,
      "nearest_alert_km": 10.624531119975677,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 62,
      "name": "นิคมอุตสาหกรรมบ้านบึง",
      "lat": 13.275150936000044,
      "lon": 101.24514896600004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 39.5,
      "nearest_alert_km": 14.94248989029333,
      "latest_observed_at": "2026-11-01 21:00"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694000000043,
      "lon": 101.32956700000005,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": 37.0,
      "nearest_alert_km": 7.652635856761577,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 72,
      "name": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "lat": 18.60204741100006,
      "lon": 99.03726889700005,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 9,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": 36.4,
      "nearest_alert_km": 6.384441677806887,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755000000035,
      "lon": 99.04487700000004,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.15377827813516,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 15,
      "name": "นิคมอุตสาหกรรมสงขลา",
      "lat": 6.541849830000046,
      "lon": 100.41360340000006,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 28.507442501248693,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646000000041,
      "lon": 101.00810700000005,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.713427738015856,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 68,
      "name": "นิคมอุตสาหกรรมอุดรธานี",
      "lat": 17.301297963000025,
      "lon": 102.87405096400005,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 21.725608707789945,
      "latest_observed_at": "2026-11-01 22:00"
    },
    {
      "id": 69,
      "name": "นิคมอุตสาหกรรมบ่อทอง 33",
      "lat": 13.960939854000058,
      "lon": 101.87508894400008,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.843297933527834,
      "latest_observed_at": "2026-11-01 22:00"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "คลองมหาชัย วัดพันท้ายนรสิงห์",
      "station_code": "BKK006",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.58184,
      "lon": 100.36587,
      "rainfall_mm": 97.8,
      "value_text": "97.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.60388187720373,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.แสนแสบ-เขตบางกะปิ",
      "station_code": "RF.BKP.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางกะปิ",
      "lat": 13.76528,
      "lon": 100.64773,
      "rainfall_mm": 93.5,
      "value_text": "93.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.506673544552091,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "waterlevel",
      "station": "วัดบางไผ่นารถ",
      "station_code": "T.15",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.05221,
      "lon": 100.175087,
      "waterlevel_msl": 2.58,
      "storage_percent": 110.34,
      "bankfull_msl": null,
      "value_text": "2.58 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 47.9341684991966,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ที่ว่าการอ.นครชัยศรี",
      "station_code": "T.1",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.80096,
      "lon": 100.188026,
      "waterlevel_msl": 2.37,
      "storage_percent": 108.21,
      "bankfull_msl": null,
      "value_text": "2.37 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 28.81556976693581,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานหัวเวียง",
      "station_code": "C.67",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.36851,
      "lon": 100.414391,
      "waterlevel_msl": 3.39,
      "storage_percent": 106.86,
      "bankfull_msl": null,
      "value_text": "3.39 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.702718586020712,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางเลน",
      "station_code": "THA007",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.01636,
      "lon": 100.17979,
      "waterlevel_msl": 2.82,
      "storage_percent": 106.3,
      "bankfull_msl": null,
      "value_text": "2.82 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 49.05798711025778,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "วัดขนอนใต้",
      "station_code": "HDA005",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.288251,
      "lon": 100.61132,
      "waterlevel_msl": 2.77,
      "storage_percent": 105.17,
      "bankfull_msl": null,
      "value_text": "2.77 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 4.665867272460714,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "องครักษ์",
      "station_code": "NYK000",
      "province": "นครนายก",
      "district": "องครักษ์",
      "lat": 14.113633,
      "lon": 101.01952,
      "waterlevel_msl": 2.74,
      "storage_percent": 102.83,
      "bankfull_msl": null,
      "value_text": "2.74 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.80225767760791,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ร.ร.บ้านสามพราน",
      "station_code": "T.14",
      "province": "นครปฐม",
      "district": "สามพราน",
      "lat": 13.72411,
      "lon": 100.215683,
      "waterlevel_msl": 1.74,
      "storage_percent": 102.34,
      "bankfull_msl": null,
      "value_text": "1.74 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 20.11302278215949,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนครชัยศรี",
      "station_code": "THA008",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79217,
      "lon": 100.19817,
      "waterlevel_msl": 2.17,
      "storage_percent": 102.25,
      "bankfull_msl": null,
      "value_text": "2.17 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 27.81450504933709,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางน้ำเปรี้ยว",
      "station_code": "BPK003",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.87032,
      "lon": 101.14574,
      "waterlevel_msl": 1.72,
      "storage_percent": 101.97,
      "bankfull_msl": null,
      "value_text": "1.72 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.46042027634919,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.วัดบางกระเจ้านอก",
      "station_code": "BKC002",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.689612,
      "lon": 100.554886,
      "waterlevel_msl": 1.29,
      "storage_percent": 101.12,
      "bankfull_msl": null,
      "value_text": "1.29 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 16.515461215669056,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บึงกุ่ม",
      "station_code": "RF.BKM.01",
      "province": "กรุงเทพมหานคร",
      "district": "บึงกุ่ม",
      "lat": 13.7855,
      "lon": 100.66949,
      "rainfall_mm": 84.0,
      "value_text": "84 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 4.322191329718471,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองแสนแสบ บางกะปิ",
      "station_code": "BKK008",
      "province": "กรุงเทพมหานคร",
      "district": "บางกะปิ",
      "lat": 13.76131,
      "lon": 100.61601,
      "rainfall_mm": 82.6,
      "value_text": "82.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.689352461252378,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองหลา",
      "station_code": "ridtele_TSL30",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.864742,
      "lon": 100.327591,
      "rainfall_mm": 78.0,
      "value_text": "78 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 16.34981741073019,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดบึงมักกะสัน",
      "station_code": "RF.RTW.03",
      "province": "กรุงเทพมหานคร",
      "district": "ราชเทวี",
      "lat": 13.75665,
      "lon": 100.54839,
      "rainfall_mm": 77.5,
      "value_text": "77.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 17.684575241934393,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.ลำผักชี-รร.ลำผักชี",
      "station_code": "RF.NJK.06",
      "province": "กรุงเทพมหานคร",
      "district": "หนองจอก",
      "lat": 13.79205,
      "lon": 100.83524,
      "rainfall_mm": 74.0,
      "value_text": "74 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 6.222227954794016,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางรัก",
      "station_code": "RF.BRK.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางรัก",
      "lat": 13.73067,
      "lon": 100.52382,
      "rainfall_mm": 71.0,
      "value_text": "71 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 20.474201996035994,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.สะพานสูง",
      "station_code": "RF.SPS.01",
      "province": "กรุงเทพมหานคร",
      "district": "สะพานสูง",
      "lat": 13.76881,
      "lon": 100.68545,
      "rainfall_mm": 70.5,
      "value_text": "70.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 4.422102178247681,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "waterlevel",
      "station": "คลองมหาสวัสดิ บางกรวย-สวนผัก",
      "station_code": "BKK003",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.79965,
      "lon": 100.43863,
      "waterlevel_msl": 1.88,
      "storage_percent": 96.42,
      "bankfull_msl": null,
      "value_text": "1.88 ม.รทก.",
      "observed_at": "2026-11-01 21:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 28.741410424380156,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "กรมชลประทานสามเสน",
      "station_code": "C.12",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.78815,
      "lon": 100.509148,
      "waterlevel_msl": 1.54,
      "storage_percent": 95.71,
      "bankfull_msl": null,
      "value_text": "1.54 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.195539924978746,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนวลฉวี",
      "station_code": "CPY014",
      "province": "นนทบุรี",
      "district": "ปากเกร็ด",
      "lat": 13.94749,
      "lon": 100.53507,
      "waterlevel_msl": 1.81,
      "storage_percent": 95.63,
      "bankfull_msl": null,
      "value_text": "1.81 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.300920472922257,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "อุทยานเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
      "station_code": "KRP901",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.76138,
      "lon": 100.52066,
      "waterlevel_msl": 29.84,
      "storage_percent": 94.5,
      "bankfull_msl": null,
      "value_text": "29.84 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.435200528780566,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปากรอ",
      "station_code": "SLA005",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.261514,
      "lon": 100.42447,
      "waterlevel_msl": 0.55,
      "storage_percent": 94.19,
      "bankfull_msl": null,
      "value_text": "0.55 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.050330940229774,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระยาบรรลือ",
      "station_code": "CPY016",
      "province": "พระนครศรีอยุธยา",
      "district": "ลาดบัวหลวง",
      "lat": 14.16476,
      "lon": 100.30725,
      "waterlevel_msl": 3.2,
      "storage_percent": 93.8,
      "bankfull_msl": null,
      "value_text": "3.2 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.819479632166193,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานกรุงเทพ",
      "station_code": "CPY015",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.700301,
      "lon": 100.49277,
      "waterlevel_msl": 1.02,
      "storage_percent": 93.61,
      "bankfull_msl": null,
      "value_text": "1.02 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.631190161803122,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "Y.64",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.762119,
      "lon": 100.121201,
      "waterlevel_msl": 38.36,
      "storage_percent": 93.23,
      "bankfull_msl": null,
      "value_text": "38.36 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.97559718239193,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "Y.16",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.757919,
      "lon": 100.115578,
      "waterlevel_msl": 38.35,
      "storage_percent": 92.83,
      "bankfull_msl": null,
      "value_text": "38.35 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.608170192807048,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางปะอิน",
      "station_code": "CPY012",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.30455,
      "lon": 100.56645,
      "waterlevel_msl": 1.8,
      "storage_percent": 92.75,
      "bankfull_msl": null,
      "value_text": "1.8 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 7.998524231584936,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางหลวงโดด",
      "station_code": "C.36",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.41588,
      "lon": 100.440804,
      "waterlevel_msl": 3.5,
      "storage_percent": 92.2,
      "bankfull_msl": null,
      "value_text": "3.5 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.573434572085226,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองหกวา ลำลูกกา คลอง8",
      "station_code": "BKK015",
      "province": "ปทุมธานี",
      "district": "ลำลูกกา",
      "lat": 13.9416,
      "lon": 100.77499,
      "waterlevel_msl": 2.28,
      "storage_percent": 91.84,
      "bankfull_msl": null,
      "value_text": "2.28 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.087742962577927,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองอ้อมนนท์ บางใหญ่ (ถนนบางกรวย-ไทรน้อย)",
      "station_code": "BKK007",
      "province": "นนทบุรี",
      "district": "บางใหญ่",
      "lat": 13.87089,
      "lon": 100.43626,
      "waterlevel_msl": 1.47,
      "storage_percent": 91.66,
      "bankfull_msl": null,
      "value_text": "1.47 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.93130739016791,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองลพบุรี",
      "station_code": "LBI002",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.76049,
      "lon": 100.5996,
      "waterlevel_msl": 5.87,
      "storage_percent": 91.12,
      "bankfull_msl": null,
      "value_text": "5.87 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.153470420161305,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานข้ามคลองอู่ตะเภา",
      "station_code": "ONE037",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.134997,
      "lon": 100.45321,
      "waterlevel_msl": 0.35,
      "storage_percent": 90.92,
      "bankfull_msl": null,
      "value_text": "0.35 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.45953341454558,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางปะกง",
      "station_code": "BPK001",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.54901,
      "lon": 101.00111,
      "waterlevel_msl": 0.41,
      "storage_percent": 90.54,
      "bankfull_msl": null,
      "value_text": "0.41 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.7752687912394733,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองบางหลวง",
      "station_code": "CPY009",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.4158,
      "lon": 100.44071,
      "waterlevel_msl": 3.46,
      "storage_percent": 90.25,
      "bankfull_msl": null,
      "value_text": "3.46 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.586439945291232,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองช่องสะเดา",
      "station_code": "HDA004",
      "province": "พระนครศรีอยุธยา",
      "district": "อุทัย",
      "lat": 14.344762,
      "lon": 100.670105,
      "waterlevel_msl": 2.75,
      "storage_percent": 90.11,
      "bankfull_msl": null,
      "value_text": "2.75 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.71905854693515,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "พระรามสอง",
      "station_code": "MKG006",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.38362,
      "lon": 99.9836,
      "waterlevel_msl": 0.56,
      "storage_percent": 89.67,
      "bankfull_msl": null,
      "value_text": "0.56 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.19079991757201,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแพ้ว",
      "station_code": "MKG005",
      "province": "สมุทรสาคร",
      "district": "บ้านแพ้ว",
      "lat": 13.57563,
      "lon": 100.07884,
      "waterlevel_msl": 0.62,
      "storage_percent": 89.62,
      "bankfull_msl": null,
      "value_text": "0.62 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.50034924008027,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร. คลองลัดบางยอ 1",
      "station_code": "BKC003",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.676162,
      "lon": 100.553085,
      "waterlevel_msl": 1.25,
      "storage_percent": 89.13,
      "bankfull_msl": null,
      "value_text": "1.25 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.06428903072714,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เสนา",
      "station_code": "CPY017",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.31976,
      "lon": 100.37952,
      "waterlevel_msl": 3.0,
      "storage_percent": 88.71,
      "bankfull_msl": null,
      "value_text": "3 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 25.846600860267063,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป้อม",
      "station_code": "C.35",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.3691,
      "lon": 100.528732,
      "waterlevel_msl": 2.78,
      "storage_percent": 88.46,
      "bankfull_msl": null,
      "value_text": "2.78 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.192004169383056,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองลำปลาทิว ลาดกระบัง",
      "station_code": "BKK009",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.7407,
      "lon": 100.79468,
      "waterlevel_msl": 0.18,
      "storage_percent": 88.33,
      "bankfull_msl": null,
      "value_text": "0.18 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0362140416044405,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองบางบาล",
      "station_code": "CPY010",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.42303,
      "lon": 100.48186,
      "waterlevel_msl": 4.95,
      "storage_percent": 87.28,
      "bankfull_msl": null,
      "value_text": "4.95 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 14.306312776039722,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางปะหัน",
      "station_code": "LBI001",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.42731,
      "lon": 100.55605,
      "waterlevel_msl": 3.44,
      "storage_percent": 86.26,
      "bankfull_msl": null,
      "value_text": "3.44 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.11290468175869,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
      "station_code": "BKK017",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.66949,
      "lon": 100.80058,
      "waterlevel_msl": 0.07,
      "storage_percent": 86.07,
      "bankfull_msl": null,
      "value_text": "0.07 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.945006421763477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร. คลองลัดบางยอ 2",
      "station_code": "BKC004",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.661021,
      "lon": 100.56727,
      "waterlevel_msl": 0.55,
      "storage_percent": 86.0,
      "bankfull_msl": null,
      "value_text": "0.55 ม.รทก.",
      "observed_at": "2026-10-30 21:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.787576568422011,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองมหาชัย วัดพันท้ายนรสิงห์",
      "station_code": "BKK006",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.58184,
      "lon": 100.36587,
      "waterlevel_msl": 0.73,
      "storage_percent": 85.61,
      "bankfull_msl": null,
      "value_text": "0.73 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.60388187720373,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองสมุทรสาคร",
      "station_code": "THA009",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.58598,
      "lon": 100.23048,
      "waterlevel_msl": 0.61,
      "storage_percent": 85.24,
      "bankfull_msl": null,
      "value_text": "0.61 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.674934171316372,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านนาสีทอง",
      "station_code": "X.67A",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.10502,
      "lon": 100.193932,
      "waterlevel_msl": 33.7,
      "storage_percent": 84.88,
      "bankfull_msl": null,
      "value_text": "33.7 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.232514608114705,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองลาดพร้าว วัดบางบัว",
      "station_code": "BKK021",
      "province": "กรุงเทพมหานคร",
      "district": "บางเขน",
      "lat": 13.85402,
      "lon": 100.58746,
      "waterlevel_msl": 1.82,
      "storage_percent": 84.82,
      "bankfull_msl": null,
      "value_text": "1.82 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.837600556856398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ชุมแสงสงคราม",
      "station_code": "VLGE13",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.8586,
      "lon": 100.05965,
      "waterlevel_msl": 39.28,
      "storage_percent": 84.68,
      "bankfull_msl": null,
      "value_text": "39.28 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 32.89890323153971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ทรบ. ปากคลองห้าวา (ทุ่งท่าวุ้ง)",
      "station_code": "TCP010",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.818599,
      "lon": 100.576515,
      "waterlevel_msl": 6.76,
      "storage_percent": 84.5,
      "bankfull_msl": null,
      "value_text": "6.76 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.67026197358812,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางตะบูนและบางตะบูนออก",
      "station_code": "GLF003",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.26553,
      "lon": 99.9418,
      "waterlevel_msl": 0.85,
      "storage_percent": 84.08,
      "bankfull_msl": null,
      "value_text": "0.85 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.45314445360332,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองเปรมประชากร หลักหก",
      "station_code": "BKK002",
      "province": "ปทุมธานี",
      "district": "เมืองปทุมธานี",
      "lat": 13.96562,
      "lon": 100.60262,
      "waterlevel_msl": 0.85,
      "storage_percent": 83.41,
      "bankfull_msl": null,
      "value_text": "0.85 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.095038483394372,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานณรงค์ดำริ",
      "station_code": "Kgt.1",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.05144,
      "lon": 101.367378,
      "waterlevel_msl": 2.39,
      "storage_percent": 82.97,
      "bankfull_msl": null,
      "value_text": "2.39 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.78754763248004,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานข้ามคลองบางม่วง",
      "station_code": "ONE024",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.365284,
      "lon": 100.27959,
      "waterlevel_msl": 0.41,
      "storage_percent": 81.83,
      "bankfull_msl": null,
      "value_text": "0.41 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.67365550525883,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานปรีดี-ธำรง",
      "station_code": "S.5",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.35872,
      "lon": 100.580452,
      "waterlevel_msl": 2.2,
      "storage_percent": 81.19,
      "bankfull_msl": null,
      "value_text": "2.2 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.898946508897676,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานค่ายบางระจัน",
      "station_code": "HDA007",
      "province": "สิงห์บุรี",
      "district": "ค่ายบางระจัน",
      "lat": 14.815288,
      "lon": 100.36448,
      "waterlevel_msl": 8.24,
      "storage_percent": 80.1,
      "bankfull_msl": null,
      "value_text": "8.24 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.95975694360689,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางบาล",
      "station_code": "C.37",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.36319,
      "lon": 100.484833,
      "waterlevel_msl": 2.63,
      "storage_percent": 78.97,
      "bankfull_msl": null,
      "value_text": "2.63 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.42168601144319,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานหน้าจวนผู้ว่าฯ",
      "station_code": "Ny.7",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.20048,
      "lon": 101.219307,
      "waterlevel_msl": 6.09,
      "storage_percent": 78.62,
      "bankfull_msl": null,
      "value_text": "6.09 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.80889634653896,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขาโบสถ์",
      "station_code": "Z.38",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.73796,
      "lon": 101.228401,
      "waterlevel_msl": 9.83,
      "storage_percent": 78.41,
      "bankfull_msl": null,
      "value_text": "9.83 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 7.193355299520884,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "นครหลวง",
      "station_code": "PAS009",
      "province": "พระนครศรีอยุธยา",
      "district": "นครหลวง",
      "lat": 14.40269,
      "lon": 100.5864,
      "waterlevel_msl": 1.88,
      "storage_percent": 78.25,
      "bankfull_msl": null,
      "value_text": "1.88 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.687099448793155,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "แม่น้ำลี้ บ้านโฮ่ง",
      "station_code": "PIN009",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.310793,
      "lon": 98.82355,
      "waterlevel_msl": 309.83,
      "storage_percent": 77.8,
      "bankfull_msl": null,
      "value_text": "309.83 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.00045685599943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองระพีพัฒน์แยกตก",
      "station_code": "CAN001",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.20612,
      "lon": 100.74476,
      "waterlevel_msl": 3.36,
      "storage_percent": 76.85,
      "bankfull_msl": null,
      "value_text": "3.36 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.195758700698022,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
      "station_code": "BKK020",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดพร้าว",
      "lat": 13.93183,
      "lon": 100.63952,
      "waterlevel_msl": 1.28,
      "storage_percent": 76.81,
      "bankfull_msl": null,
      "value_text": "1.28 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.87492828233833,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองแกลง",
      "station_code": "RAY001",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.802991,
      "lon": 101.65024,
      "waterlevel_msl": 2.46,
      "storage_percent": 76.51,
      "bankfull_msl": null,
      "value_text": "2.46 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.688334160220514,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
      "station_code": "BKK016",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.83819,
      "lon": 100.9666,
      "waterlevel_msl": 0.36,
      "storage_percent": 76.11,
      "bankfull_msl": null,
      "value_text": "0.36 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.69905378335247,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "พระนครศรีอยุธยา",
      "station_code": "CPY011",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.36913,
      "lon": 100.52861,
      "waterlevel_msl": 2.51,
      "storage_percent": 75.88,
      "bankfull_msl": null,
      "value_text": "2.51 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.195312328999318,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านตลาดใหม่",
      "station_code": "HDA008",
      "province": "อ่างทอง",
      "district": "วิเศษชัยชาญ",
      "lat": 14.553573,
      "lon": 100.316765,
      "waterlevel_msl": 3.9,
      "storage_percent": 74.6,
      "bankfull_msl": null,
      "value_text": "3.9 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.86535432381292,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระพิมล (ไทรน้อย)",
      "station_code": "BKK018",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 13.97396,
      "lon": 100.31901,
      "waterlevel_msl": 2.42,
      "storage_percent": 73.15,
      "bankfull_msl": null,
      "value_text": "2.42 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.08855794765454,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.ลาดชะโด (ทุ่งผักไห่)",
      "station_code": "TCP003",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.464386,
      "lon": 100.366005,
      "waterlevel_msl": 3.44,
      "storage_percent": 73.1,
      "bankfull_msl": null,
      "value_text": "3.44 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.887388401638866,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทาม",
      "station_code": "Kgt.6",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97341,
      "lon": 101.517448,
      "waterlevel_msl": 2.91,
      "storage_percent": 72.81,
      "bankfull_msl": null,
      "value_text": "2.91 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.420438261300376,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองระพีพัฒน์แยกใต้ หนองเสือ",
      "station_code": "BKK013",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.2206,
      "lon": 100.89168,
      "waterlevel_msl": 2.65,
      "storage_percent": 71.12,
      "bankfull_msl": null,
      "value_text": "2.65 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.479318846322684,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองสตูล",
      "station_code": "STU001",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.726527,
      "lon": 100.06259,
      "waterlevel_msl": 14.17,
      "storage_percent": 70.4,
      "bankfull_msl": null,
      "value_text": "14.17 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.87220334815228,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองอรชร",
      "station_code": "RF.PTW.02",
      "province": "กรุงเทพมหานคร",
      "district": "ปทุมวัน",
      "lat": 13.74807,
      "lon": 100.53618,
      "rainfall_mm": 70.0,
      "value_text": "70 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.234356935135327,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองระหาญ",
      "station_code": "RF.BKT.03",
      "province": "กรุงเทพมหานคร",
      "district": "บางขุนเทียน",
      "lat": 13.60381,
      "lon": 100.39465,
      "rainfall_mm": 68.5,
      "value_text": "68.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 8.425228166177376,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.สวนหลวง",
      "station_code": "RF.SLG.01",
      "province": "กรุงเทพมหานคร",
      "district": "สวนหลวง",
      "lat": 13.73043,
      "lon": 100.65154,
      "rainfall_mm": 67.5,
      "value_text": "67.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.817776556908689,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ห้วยขวาง",
      "station_code": "RF.HKG.01",
      "province": "กรุงเทพมหานคร",
      "district": "ห้วยขวาง",
      "lat": 13.77678,
      "lon": 100.57906,
      "rainfall_mm": 67.5,
      "value_text": "67.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.904461005023975,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์ฯ (ดินแดง)",
      "station_code": "RF.DDG.02",
      "province": "กรุงเทพมหานคร",
      "district": "ดินแดง",
      "lat": 13.76902,
      "lon": 100.55452,
      "rainfall_mm": 66.0,
      "value_text": "66 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.680965189215065,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.บางบัว",
      "station_code": "RF.BKA.02",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.85796,
      "lon": 100.58682,
      "rainfall_mm": 64.0,
      "value_text": "64 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.082207122972079,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.แสนแสบ-วัดทรัพย์ฯ",
      "station_code": "RF.NJK.07",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.8515,
      "lon": 100.80361,
      "rainfall_mm": 64.0,
      "value_text": "64 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.482494504707358,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนามบินสุวรรณภูมิ",
      "station_code": "48429",
      "province": "สมุทรปราการ",
      "district": "บางพลี",
      "lat": 13.68639,
      "lon": 100.7675,
      "rainfall_mm": 63.6,
      "value_text": "63.6 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.459434496401541,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ประเวศ",
      "station_code": "RF.PWT.01",
      "province": "กรุงเทพมหานคร",
      "district": "ประเวศ",
      "lat": 13.71701,
      "lon": 100.69472,
      "rainfall_mm": 63.0,
      "value_text": "63 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 3.712356287955699,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.สามเสน-ค.แสนแสบ",
      "station_code": "RF.HKG.02",
      "province": "กรุงเทพมหานคร",
      "district": "ห้วยขวาง",
      "lat": 13.74842,
      "lon": 100.5992,
      "rainfall_mm": 62.5,
      "value_text": "62.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.960947085424944,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ปลวกแดง",
      "station_code": "ONE091",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.970066,
      "lon": 101.20457,
      "rainfall_mm": 60.8,
      "value_text": "60.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.943096814769784,
      "nearest_estate": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนามบินดอนเมือง",
      "station_code": "48456",
      "province": "กรุงเทพมหานคร",
      "district": "ดอนเมือง",
      "lat": 13.91917,
      "lon": 100.605,
      "rainfall_mm": 60.6,
      "value_text": "60.6 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.74280568227024,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ส.แสนแสบ-คลองตัน",
      "station_code": "RF.WTN.02",
      "province": "กรุงเทพมหานคร",
      "district": "วัฒนา",
      "lat": 13.7411,
      "lon": 100.5964,
      "rainfall_mm": 60.0,
      "value_text": "60 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.490278275317493,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ราชเทวี",
      "station_code": "RF.RTW.01",
      "province": "กรุงเทพมหานคร",
      "district": "ราชเทวี",
      "lat": 13.75917,
      "lon": 100.53405,
      "rainfall_mm": 59.5,
      "value_text": "59.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.093900280563854,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.วัดกระทุ่มฯ",
      "station_code": "RF.PWT.02",
      "province": "กรุงเทพมหานคร",
      "district": "ประเวศ",
      "lat": 13.7241,
      "lon": 100.68957,
      "rainfall_mm": 59.0,
      "value_text": "59 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 4.657600808675983,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองนราภิรมย์ (บางเลน)",
      "station_code": "BKK019",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 13.88207,
      "lon": 100.29086,
      "rainfall_mm": 58.6,
      "value_text": "58.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.742377106873434,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.วังทองหลาง",
      "station_code": "RF.WTL.01",
      "province": "กรุงเทพมหานคร",
      "district": "วังทองหลาง",
      "lat": 13.76435,
      "lon": 100.60553,
      "rainfall_mm": 57.5,
      "value_text": "57.5 มม.",
      "observed_at": "2026-11-01 18:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.582296099373886,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม (KGT7A)",
      "station_code": "PRC004",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.070941,
      "lon": 101.51893,
      "rainfall_mm": 56.2,
      "value_text": "56.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.337808011616087,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อุทยานเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
      "station_code": "KRP901",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.76138,
      "lon": 100.52066,
      "rainfall_mm": 54.2,
      "value_text": "54.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.435200528780566,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองแสนแสบ",
      "station_code": "RF.NJK.02",
      "province": "กรุงเทพมหานคร",
      "district": "หนองจอก",
      "lat": 13.85516,
      "lon": 100.87292,
      "rainfall_mm": 54.0,
      "value_text": "54 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.05707608696276,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "TC.4",
      "station_code": "ridtele_TC.4",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.739099,
      "lon": 100.494938,
      "rainfall_mm": 54.0,
      "value_text": "54 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.728437832155343,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดสวนเบญจสิริ",
      "station_code": "RF.KTY.05",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.73159,
      "lon": 100.56745,
      "rainfall_mm": 53.5,
      "value_text": "53.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.974055444038342,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.ประเวศฯ-วัดขจรศิริ",
      "station_code": "RF.SLG.02",
      "province": "กรุงเทพมหานคร",
      "district": "สวนหลวง",
      "lat": 13.71545,
      "lon": 100.6415,
      "rainfall_mm": 53.5,
      "value_text": "53.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.862193975373652,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองสามวา",
      "station_code": "RF.KSW.02",
      "province": "กรุงเทพมหานคร",
      "district": "คลองสามวา",
      "lat": 13.85954,
      "lon": 100.72909,
      "rainfall_mm": 53.0,
      "value_text": "53 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.7235499868940956,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.บึงขวาง",
      "station_code": "RF.MBR.03",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.79988,
      "lon": 100.74482,
      "rainfall_mm": 53.0,
      "value_text": "53 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 4.348991839506814,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.วัดไทร",
      "station_code": "RF.BKL.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางคอแหลม",
      "lat": 13.68653,
      "lon": 100.51643,
      "rainfall_mm": 52.0,
      "value_text": "52 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.695829061187716,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อโศก",
      "station_code": "AIT001",
      "province": "กรุงเทพมหานคร",
      "district": "วัฒนา",
      "lat": 13.74325,
      "lon": 100.562164,
      "rainfall_mm": 51.4,
      "value_text": "51.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.810791452117027,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านค่าย",
      "station_code": "RAY004",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.706861,
      "lon": 101.300354,
      "rainfall_mm": 51.4,
      "value_text": "51.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.250183047104377,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ประชาร่วมใจ",
      "station_code": "RF.MBR.02",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.8212,
      "lon": 100.74717,
      "rainfall_mm": 51.0,
      "value_text": "51 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 4.968156176661787,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.หลักสี่",
      "station_code": "RF.LSI.01",
      "province": "กรุงเทพมหานคร",
      "district": "หลักสี่",
      "lat": 13.88748,
      "lon": 100.57893,
      "rainfall_mm": 50.5,
      "value_text": "50.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.460804009718917,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ราษฎร์บูรณะ",
      "station_code": "RF.RBN.01",
      "province": "กรุงเทพมหานคร",
      "district": "ราษฎร์บูรณะ",
      "lat": 13.68207,
      "lon": 100.50586,
      "rainfall_mm": 50.5,
      "value_text": "50.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.253233254850603,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.เทเวศร์",
      "station_code": "RF.PNK.02",
      "province": "กรุงเทพมหานคร",
      "district": "พระนคร",
      "lat": 13.77191,
      "lon": 100.5011,
      "rainfall_mm": 50.5,
      "value_text": "50.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.278550217368796,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ บางนา สกษ.",
      "station_code": "48453",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.66639,
      "lon": 100.60611,
      "rainfall_mm": 50.4,
      "value_text": "50.4 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.193998319993636,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองราชมนตรี",
      "station_code": "RF.BKT.04",
      "province": "กรุงเทพมหานคร",
      "district": "บางขุนเทียน",
      "lat": 13.62782,
      "lon": 100.4394,
      "rainfall_mm": 50.0,
      "value_text": "50 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.742790242658376,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "หาดใหญ่",
      "station_code": "48569",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.91667,
      "lon": 100.43333,
      "rainfall_mm": 50.0,
      "value_text": "50 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.022193259139728,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพมหานคร",
      "station_code": "48455",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.72639,
      "lon": 100.56,
      "rainfall_mm": 49.7,
      "value_text": "49.7 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.574010437654685,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองลาดพร้าว",
      "station_code": "RF.WTL.02",
      "province": "กรุงเทพมหานคร",
      "district": "วังทองหลาง",
      "lat": 13.79432,
      "lon": 100.58933,
      "rainfall_mm": 49.5,
      "value_text": "49.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.50971316072592,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเลนเปน",
      "station_code": "RF.BKT.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางขุนเทียน",
      "lat": 13.607,
      "lon": 100.41311,
      "rainfall_mm": 49.5,
      "value_text": "49.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.08073217020337,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดบึงหนองบอน",
      "station_code": "RF.PWT.03",
      "province": "กรุงเทพมหานคร",
      "district": "ประเวศ",
      "lat": 13.69529,
      "lon": 100.65375,
      "rainfall_mm": 49.5,
      "value_text": "49.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.918661909086296,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.คลองสามวา",
      "station_code": "RF.KSW.01",
      "province": "กรุงเทพมหานคร",
      "district": "คลองสามวา",
      "lat": 13.8599,
      "lon": 100.70424,
      "rainfall_mm": 49.0,
      "value_text": "49 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.2292787060274035,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองลำปลาทิว ลาดกระบัง",
      "station_code": "BKK009",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.7407,
      "lon": 100.79468,
      "rainfall_mm": 48.4,
      "value_text": "48.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 2.0362140416044405,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ยานนาวา",
      "station_code": "RF.YNW.01",
      "province": "กรุงเทพมหานคร",
      "district": "ยานนาวา",
      "lat": 13.69627,
      "lon": 100.54222,
      "rainfall_mm": 47.5,
      "value_text": "47.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 17.914704910664362,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ป้อมปราบฯ",
      "station_code": "RF.PPS.01",
      "province": "กรุงเทพมหานคร",
      "district": "ป้อมปราบศัตรูพ่าย",
      "lat": 13.75826,
      "lon": 100.51304,
      "rainfall_mm": 47.0,
      "value_text": "47 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.316675083071967,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองวัดด่าน",
      "station_code": "RF.YNW.03",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.67071,
      "lon": 100.54018,
      "rainfall_mm": 46.5,
      "value_text": "46.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.613144451758917,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองสนามชัย",
      "station_code": "RF.BKT.05",
      "province": "กรุงเทพมหานคร",
      "district": "บางขุนเทียน",
      "lat": 13.63802,
      "lon": 100.44763,
      "rainfall_mm": 46.5,
      "value_text": "46.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.161010502361608,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองแจงร้อน",
      "station_code": "RF.RBN.02",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.67627,
      "lon": 100.52097,
      "rainfall_mm": 46.0,
      "value_text": "46 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.57967418574798,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนโต๊ะเหลง",
      "station_code": "STN1594",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.800666,
      "lon": 100.07791,
      "rainfall_mm": 45.0,
      "value_text": "45 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 38.74499309017716,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางเขน",
      "station_code": "RF.BKA.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางเขน",
      "lat": 13.87349,
      "lon": 100.59643,
      "rainfall_mm": 44.5,
      "value_text": "44.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.025021367475839,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อาคารเลขที่ ๙๐๑",
      "station_code": "HII001",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.85604,
      "lon": 100.57558,
      "rainfall_mm": 44.5,
      "value_text": "44.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.105235156555995,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.พระยาสุเรนทร์",
      "station_code": "RF.SMI.03",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.92126,
      "lon": 100.68741,
      "rainfall_mm": 43.5,
      "value_text": "43.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.185615013754301,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองประแสร์ที่คลองสะพานดำ",
      "station_code": "G09006-TA170406",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.78338,
      "lon": 101.65397,
      "rainfall_mm": 43.5,
      "value_text": "43.5 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.36258324067517,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดศูนย์ราชการ-ถ.แจ้งวัฒนะ",
      "station_code": "RF.LSI.03",
      "province": "กรุงเทพมหานคร",
      "district": "หลักสี่",
      "lat": 13.8921,
      "lon": 100.56383,
      "rainfall_mm": 43.5,
      "value_text": "43.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.103020636979398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.ลำชะล่า-ถ.นวมินทร์",
      "station_code": "RF.KNY.02",
      "province": "กรุงเทพมหานคร",
      "district": "คันนายาว",
      "lat": 13.83637,
      "lon": 100.66131,
      "rainfall_mm": 43.5,
      "value_text": "43.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.921029125495858,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ระยอง",
      "station_code": "48478",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.63369,
      "lon": 101.34075,
      "rainfall_mm": 43.4,
      "value_text": "43.4 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.26694804483545,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองแสนแสบ-บางชัน",
      "station_code": "RF.SPS.02",
      "province": "กรุงเทพมหานคร",
      "district": "สะพานสูง",
      "lat": 13.79734,
      "lon": 100.70451,
      "rainfall_mm": 43.0,
      "value_text": "43 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 0.7278149096202271,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองสี่บาท",
      "station_code": "RF.JTG.03",
      "province": "กรุงเทพมหานคร",
      "district": "บางขุนเทียน",
      "lat": 13.67325,
      "lon": 100.44615,
      "rainfall_mm": 42.5,
      "value_text": "42.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 17.92519084481581,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.บางนา-ถ.ศรีนครินทร์",
      "station_code": "RF.BNA.03",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.66106,
      "lon": 100.63942,
      "rainfall_mm": 42.5,
      "value_text": "42.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.886444442756885,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.พระนคร",
      "station_code": "RF.PNK.01",
      "province": "กรุงเทพมหานคร",
      "district": "พระนคร",
      "lat": 13.7649,
      "lon": 100.49872,
      "rainfall_mm": 41.5,
      "value_text": "41.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.668692824141836,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านคลองตาเพชร",
      "station_code": "G09006-TA170401",
      "province": "ชลบุรี",
      "district": "บ่อทอง",
      "lat": 13.24529,
      "lon": 101.53333,
      "rainfall_mm": 41.5,
      "value_text": "41.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.227222955269863,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.สนามชัย-ค.บางขุนเทียน",
      "station_code": "RF.JTG.02",
      "province": "กรุงเทพมหานคร",
      "district": "จอมทอง",
      "lat": 13.70123,
      "lon": 100.46491,
      "rainfall_mm": 41.0,
      "value_text": "41 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.626101148854588,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สมุทรปราการ สกษ.",
      "station_code": "48420",
      "province": "สมุทรปราการ",
      "district": "เมืองสมุทรปราการ",
      "lat": 13.51667,
      "lon": 100.76167,
      "rainfall_mm": 40.7,
      "value_text": "40.7 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.415115576731975,
      "nearest_estate": "นิคมอุตสาหกรรมบางพลี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านปลวกแดง",
      "station_code": "G09006-TA170201",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.96931,
      "lon": 101.21218,
      "rainfall_mm": 40.5,
      "value_text": "40.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.644455037549361,
      "nearest_estate": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางคอแหลม",
      "station_code": "RF.BKL.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางคอแหลม",
      "lat": 13.69311,
      "lon": 100.50229,
      "rainfall_mm": 40.0,
      "value_text": "40 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.329549254086555,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.กรุงเกษม",
      "station_code": "RF.BRK.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางรัก",
      "lat": 13.73042,
      "lon": 100.51397,
      "rainfall_mm": 39.5,
      "value_text": "39.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.501796537656197,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนอนุบาลหนองใหญ่",
      "station_code": "G09006-TA170402",
      "province": "ชลบุรี",
      "district": "หนองใหญ่",
      "lat": 13.15719,
      "lon": 101.37741,
      "rainfall_mm": 39.5,
      "value_text": "39.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 2.5866704856555467,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.มีนบุรี",
      "station_code": "RF.MBR.01",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.8136,
      "lon": 100.73122,
      "rainfall_mm": 39.0,
      "value_text": "39 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 3.0550379636610883,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองช่องนนทรี",
      "station_code": "RF.YNW.02",
      "province": "กรุงเทพมหานคร",
      "district": "ยานนาวา",
      "lat": 13.69493,
      "lon": 100.54874,
      "rainfall_mm": 38.0,
      "value_text": "38 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 17.20267947425334,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.พญาไท",
      "station_code": "RF.PYT.01",
      "province": "กรุงเทพมหานคร",
      "district": "พญาไท",
      "lat": 13.78003,
      "lon": 100.54287,
      "rainfall_mm": 38.0,
      "value_text": "38 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 17.682028190294115,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ซ.แอนเน็กซ์",
      "station_code": "RF.SMI.04",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.93786,
      "lon": 100.62661,
      "rainfall_mm": 38.0,
      "value_text": "38 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 17.120530952585955,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ควนกาหลง",
      "station_code": "STU004",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928349,
      "lon": 99.936035,
      "rainfall_mm": 37.6,
      "value_text": "37.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.6096254577221,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.บางเชือกหนัง-วัดปากน้ำฝั่งใต้",
      "station_code": "RF.PSC.05",
      "province": "กรุงเทพมหานคร",
      "district": "ภาษีเจริญ",
      "lat": 13.74357,
      "lon": 100.45954,
      "rainfall_mm": 37.5,
      "value_text": "37.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.237164047087536,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองแหน",
      "station_code": "NGNG",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.68338,
      "lon": 101.32512,
      "rainfall_mm": 37.0,
      "value_text": "37 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.652635856761577,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองใหญ่ที่ระยอง",
      "station_code": "G09006-TA170203",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.68,
      "lon": 101.29278,
      "rainfall_mm": 37.0,
      "value_text": "37 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.390519237485664,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "TC.22",
      "station_code": "ridtele_TC.22",
      "province": "นนทบุรี",
      "district": "ปากเกร็ด",
      "lat": 13.896389,
      "lon": 100.494167,
      "rainfall_mm": 37.0,
      "value_text": "37 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.954412390609743,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบูเก็ตยามู",
      "station_code": "STN1029",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.799783,
      "lon": 100.112546,
      "rainfall_mm": 37.0,
      "value_text": "37 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 35.810369515188974,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ท่าน้ำสวัสดี",
      "station_code": "RF.SPW.01",
      "province": "กรุงเทพมหานคร",
      "district": "สัมพันธวงศ์",
      "lat": 13.73664,
      "lon": 100.5096,
      "rainfall_mm": 36.5,
      "value_text": "36.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.126765528434046,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.บางนา",
      "station_code": "RF.BNA.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.67493,
      "lon": 100.58757,
      "rainfall_mm": 36.5,
      "value_text": "36.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.039485760093317,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ลานกางเต็นท์ดอยปุย อุทยานแห่งชาติดอยสุเทพ-ปุย",
      "station_code": "DNP079",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.82574,
      "lon": 98.89448,
      "rainfall_mm": 36.4,
      "value_text": "36.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 29.065979758135356,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ค.ราชมนตรี-ภาษีเจริญ",
      "station_code": "RF.BKE.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.70754,
      "lon": 100.42622,
      "rainfall_mm": 36.0,
      "value_text": "36 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.004745225039777,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ถ.เทศบาลสงเคราะห์",
      "station_code": "RF.CTC.03",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.83978,
      "lon": 100.54175,
      "rainfall_mm": 36.0,
      "value_text": "36 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.04768201609291,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ่อสูบศาลอาญารัชดา",
      "station_code": "RF.CTC.01",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.80967,
      "lon": 100.57498,
      "rainfall_mm": 35.5,
      "value_text": "35.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.028365027734315,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองมอญ",
      "station_code": "RF.BKN.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางกอกใหญ่",
      "lat": 13.74714,
      "lon": 100.48531,
      "rainfall_mm": 35.5,
      "value_text": "35.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.524973504841466,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังประจัน",
      "station_code": "STN0293",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.754096,
      "lon": 100.149164,
      "rainfall_mm": 35.5,
      "value_text": "35.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 36.598535167828565,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "ศาลาดิน",
      "station_code": "VLGE20",
      "province": "นครปฐม",
      "district": "พุทธมณฑล",
      "lat": 13.80777,
      "lon": 100.27417,
      "waterlevel_msl": 0.98,
      "storage_percent": 69.15,
      "bankfull_msl": null,
      "value_text": "0.98 ม.รทก.",
      "observed_at": "2026-11-01 19:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 29.667511489847108,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.ลาดชิด (ทุ่งผักไห่)",
      "station_code": "TCP004",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.44056,
      "lon": 100.35738,
      "waterlevel_msl": 3.45,
      "storage_percent": 69.0,
      "bankfull_msl": null,
      "value_text": "3.45 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 26.22916357558414,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานสวนเฉลิมพระเกียรติ 72 พรรษามหาราชินี",
      "station_code": "ONE038",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.182746,
      "lon": 100.59448,
      "waterlevel_msl": 0.36,
      "storage_percent": 68.23,
      "bankfull_msl": null,
      "value_text": "0.36 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.35698288447142,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองนราภิรมย์ (บางเลน)",
      "station_code": "BKK019",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 13.88207,
      "lon": 100.29086,
      "waterlevel_msl": 2.1,
      "storage_percent": 66.58,
      "bankfull_msl": null,
      "value_text": "2.1 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.742377106873434,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางแก้ว",
      "station_code": "C.7A",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.59044,
      "lon": 100.453293,
      "waterlevel_msl": 4.25,
      "storage_percent": 66.03,
      "bankfull_msl": null,
      "value_text": "4.25 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.01027944909514,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานวัดมงคลร่วมใจ (บ้านวังสาร)",
      "station_code": "FOP022",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.670555,
      "lon": 100.32789,
      "waterlevel_msl": 36.34,
      "storage_percent": 65.89,
      "bankfull_msl": null,
      "value_text": "36.34 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.807326663586515,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ฝ่ายส่งน้ำและบำรุงรักษาที่ 2",
      "station_code": "TBW008",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 18.88353,
      "lon": 99.08182,
      "waterlevel_msl": 321.03,
      "storage_percent": 65.63,
      "bankfull_msl": null,
      "value_text": "321.03 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 31.649037474678174,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนครป่าหมากร่วมใจ",
      "station_code": "VLGE12",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.60887,
      "lon": 100.36977,
      "waterlevel_msl": 34.92,
      "storage_percent": 65.32,
      "bankfull_msl": null,
      "value_text": "34.92 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.82531823296878,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ท่าเรือ",
      "station_code": "PAS008",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.56014,
      "lon": 100.71987,
      "waterlevel_msl": 1.97,
      "storage_percent": 64.11,
      "bankfull_msl": null,
      "value_text": "1.97 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.510084795335397,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "วัดเกยไชยเหนือ",
      "station_code": "N.67",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.86918,
      "lon": 100.264732,
      "waterlevel_msl": 22.49,
      "storage_percent": 63.5,
      "bankfull_msl": null,
      "value_text": "22.49 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.6039437628434,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองอ่างทอง",
      "station_code": "CPY008",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.5765,
      "lon": 100.44852,
      "waterlevel_msl": 3.94,
      "storage_percent": 63.31,
      "bankfull_msl": null,
      "value_text": "3.94 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.573455402215103,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ศรีมหาโพธิ (KGT6)",
      "station_code": "PRC005",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97348,
      "lon": 101.51751,
      "waterlevel_msl": 3.79,
      "storage_percent": 62.62,
      "bankfull_msl": null,
      "value_text": "3.79 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.418025616363693,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "โพธาราม",
      "station_code": "RAJ001",
      "province": "ราชบุรี",
      "district": "โพธาราม",
      "lat": 13.63308,
      "lon": 99.8164,
      "waterlevel_msl": 2.51,
      "storage_percent": 62.12,
      "bankfull_msl": null,
      "value_text": "2.51 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 3.6632876362743403,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางกล่ำ",
      "station_code": "SLA007",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.079418,
      "lon": 100.42788,
      "waterlevel_msl": 0.31,
      "storage_percent": 61.51,
      "bankfull_msl": null,
      "value_text": "0.31 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.910660310627168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านราชช้างขวัญ",
      "station_code": "N.7A",
      "province": "พิจิตร",
      "district": "เมืองพิจิตร",
      "lat": 16.4695,
      "lon": 100.330872,
      "waterlevel_msl": 30.96,
      "storage_percent": 61.43,
      "bankfull_msl": null,
      "value_text": "30.96 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.686873952200855,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานเดชาติวงศ์",
      "station_code": "CPY001",
      "province": "นครสวรรค์",
      "district": "เมืองนครสวรรค์",
      "lat": 15.68849,
      "lon": 100.12381,
      "waterlevel_msl": 18.78,
      "storage_percent": 59.96,
      "bankfull_msl": null,
      "value_text": "18.78 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.28308700895721,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.บางแก้ว (ทุ่งผักไห่)",
      "station_code": "TCP005",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.436604,
      "lon": 100.37149,
      "waterlevel_msl": 2.98,
      "storage_percent": 59.6,
      "bankfull_msl": null,
      "value_text": "2.98 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.845110037519646,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานค่ายหลวง",
      "station_code": "K.55A",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.80568,
      "lon": 99.87159,
      "waterlevel_msl": 5.17,
      "storage_percent": 59.6,
      "bankfull_msl": null,
      "value_text": "5.17 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.86801957595799,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "กงไกรลาศ",
      "station_code": "YOM007",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.92732,
      "lon": 99.95933,
      "waterlevel_msl": 40.21,
      "storage_percent": 59.5,
      "bankfull_msl": null,
      "value_text": "40.21 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.0367060718405,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ท้ายเขื่อนพระรามหก",
      "station_code": "S.26",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.56012,
      "lon": 100.71994,
      "waterlevel_msl": 2.32,
      "storage_percent": 59.43,
      "bankfull_msl": null,
      "value_text": "2.32 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.515449625154027,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานแมน้ำปาสัก บ้านนาโฉง",
      "station_code": "HDA012",
      "province": "สระบุรี",
      "district": "เมืองสระบุรี",
      "lat": 14.546983,
      "lon": 100.88976,
      "waterlevel_msl": 7.67,
      "storage_percent": 59.38,
      "bankfull_msl": null,
      "value_text": "7.67 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.387270610268398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ป้อมพระจุลจอมเกล้า",
      "station_code": "GLF001",
      "province": "สมุทรปราการ",
      "district": "พระสมุทรเจดีย์",
      "lat": 13.57378,
      "lon": 100.57396,
      "waterlevel_msl": 0.46,
      "storage_percent": 59.38,
      "bankfull_msl": null,
      "value_text": "0.46 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 8.540324535327358,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร กุฎิ (ทุ่งป่าโมก)",
      "station_code": "TCP006",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.412405,
      "lon": 100.40116,
      "waterlevel_msl": 4.32,
      "storage_percent": 58.77,
      "bankfull_msl": null,
      "value_text": "4.32 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.629065557313126,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านค่าย",
      "station_code": "RAY004",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.706861,
      "lon": 101.300354,
      "waterlevel_msl": 2.01,
      "storage_percent": 58.69,
      "bankfull_msl": null,
      "value_text": "2.01 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.250183047104377,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านกง",
      "station_code": "Y.15",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.927441,
      "lon": 99.959427,
      "waterlevel_msl": 40.53,
      "storage_percent": 58.45,
      "bankfull_msl": null,
      "value_text": "40.53 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.043927864496574,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ลำน้ำกวงสะพานศรีดอนชัย",
      "station_code": "FOP015",
      "province": "ลำพูน",
      "district": "บ้านธิ",
      "lat": 18.653353,
      "lon": 99.06447,
      "waterlevel_msl": 291.63,
      "storage_percent": 58.42,
      "bankfull_msl": null,
      "value_text": "291.63 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.384441677806887,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "สะพานแม่น้ำทา",
      "station_code": "PIN007",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.546852,
      "lon": 99.25007,
      "waterlevel_msl": 439.97,
      "storage_percent": 58.26,
      "bankfull_msl": null,
      "value_text": "439.97 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.197415007222318,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": " สะพานข้ามคลองโคน",
      "station_code": "PTTEP1",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3319,
      "lon": 99.96896,
      "waterlevel_msl": 0.34,
      "storage_percent": 56.84,
      "bankfull_msl": null,
      "value_text": "0.34 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 34.11919849605185,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สถานีแพดับเพลิง",
      "station_code": "S.32",
      "province": "สระบุรี",
      "district": "เมืองสระบุรี",
      "lat": 14.55752,
      "lon": 100.924217,
      "waterlevel_msl": 7.83,
      "storage_percent": 56.56,
      "bankfull_msl": null,
      "value_text": "7.83 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.713427738015856,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "อโศก",
      "station_code": "AIT001",
      "province": "กรุงเทพมหานคร",
      "district": "วัฒนา",
      "lat": 13.74325,
      "lon": 100.562164,
      "waterlevel_msl": 1.56,
      "storage_percent": 56.08,
      "bankfull_msl": null,
      "value_text": "1.56 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.810791452117027,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองสระแก้ว",
      "station_code": "SKE002",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.809611,
      "lon": 102.05431,
      "waterlevel_msl": 30.12,
      "storage_percent": 55.7,
      "bankfull_msl": null,
      "value_text": "30.12 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.640208181648024,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สามง่าม",
      "station_code": "Y.17",
      "province": "พิจิตร",
      "district": "สามง่าม",
      "lat": 16.507441,
      "lon": 100.204086,
      "waterlevel_msl": 34.52,
      "storage_percent": 54.62,
      "bankfull_msl": null,
      "value_text": "34.52 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.570134034587971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านสร่างโศก",
      "station_code": "HDA011",
      "province": "สระบุรี",
      "district": "บ้านหมอ",
      "lat": 14.650794,
      "lon": 100.742775,
      "waterlevel_msl": 7.91,
      "storage_percent": 53.9,
      "bankfull_msl": null,
      "value_text": "7.91 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.932480429893243,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านคลองหวะ",
      "station_code": "X.174",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98637,
      "lon": 100.481857,
      "waterlevel_msl": 4.78,
      "storage_percent": 53.83,
      "bankfull_msl": null,
      "value_text": "4.78 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.688545576793311,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานป่าโมก",
      "station_code": "HDA009",
      "province": "อ่างทอง",
      "district": "ป่าโมก",
      "lat": 14.498074,
      "lon": 100.44962,
      "waterlevel_msl": 3.65,
      "storage_percent": 53.44,
      "bankfull_msl": null,
      "value_text": "3.65 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.758642782654789,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "พรหมบุรี",
      "station_code": "CPY007",
      "province": "สิงห์บุรี",
      "district": "พรหมบุรี",
      "lat": 14.79091,
      "lon": 100.45184,
      "waterlevel_msl": 5.21,
      "storage_percent": 53.28,
      "bankfull_msl": null,
      "value_text": "5.21 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 36.93348365136987,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ตะพานหิน",
      "station_code": "NAN007",
      "province": "พิจิตร",
      "district": "ตะพานหิน",
      "lat": 16.27034,
      "lon": 100.41396,
      "waterlevel_msl": 28.32,
      "storage_percent": 53.16,
      "bankfull_msl": null,
      "value_text": "28.32 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.15118819719544,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านม่วงก็อง",
      "station_code": "X.173A",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.79663,
      "lon": 100.442337,
      "waterlevel_msl": 10.27,
      "storage_percent": 52.67,
      "bankfull_msl": null,
      "value_text": "10.27 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.23419412493915,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "หนองบัว",
      "station_code": "RAY002",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.849195,
      "lon": 101.301346,
      "waterlevel_msl": 12.44,
      "storage_percent": 52.32,
      "bankfull_msl": null,
      "value_text": "12.44 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.6523093721227236,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโป่ง",
      "station_code": "RAJ002",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.81866,
      "lon": 99.86508,
      "waterlevel_msl": 5.05,
      "storage_percent": 52.15,
      "bankfull_msl": null,
      "value_text": "5.05 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.232421477602117,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานอนุสรณ์ 100 ปีสิงห์บุรี (สะพานหลวงพ่อแพ 89)",
      "station_code": "HDA006",
      "province": "สิงห์บุรี",
      "district": "เมืองสิงห์บุรี",
      "lat": 14.870205,
      "lon": 100.408585,
      "waterlevel_msl": 6.33,
      "storage_percent": 52.1,
      "bankfull_msl": null,
      "value_text": "6.33 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 46.8907144661931,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ประจันตคาม (KGT7A)",
      "station_code": "PRC004",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.070941,
      "lon": 101.51893,
      "waterlevel_msl": 3.9,
      "storage_percent": 51.98,
      "bankfull_msl": null,
      "value_text": "3.9 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.337808011616087,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "พนมสารคาม",
      "station_code": "BPK004",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.72662,
      "lon": 101.35298,
      "waterlevel_msl": 2.0,
      "storage_percent": 51.82,
      "bankfull_msl": null,
      "value_text": "2 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.70008602758719,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนวรัฐ",
      "station_code": "P.1",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.786961,
      "lon": 99.005089,
      "waterlevel_msl": 301.81,
      "storage_percent": 51.72,
      "bankfull_msl": null,
      "value_text": "301.81 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.8389479818548,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเนินผาสุก",
      "station_code": "Kgt.10",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.8096,
      "lon": 102.054382,
      "waterlevel_msl": 29.73,
      "storage_percent": 49.96,
      "bankfull_msl": null,
      "value_text": "29.73 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.646875796659856,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ชุมแสง",
      "station_code": "NAN008",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.86923,
      "lon": 100.26481,
      "waterlevel_msl": 21.97,
      "storage_percent": 49.01,
      "bankfull_msl": null,
      "value_text": "21.97 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.6003120453232,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านซำฆ้อ",
      "station_code": "Z.18",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.95677,
      "lon": 101.672096,
      "waterlevel_msl": 30.02,
      "storage_percent": 47.83,
      "bankfull_msl": null,
      "value_text": "30.02 ม.รทก.",
      "observed_at": "2026-11-01 06:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 34.640014831393714,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแก้ง",
      "station_code": "Kgt.12A",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.93635,
      "lon": 101.972321,
      "waterlevel_msl": 16.46,
      "storage_percent": 46.53,
      "bankfull_msl": null,
      "value_text": "16.46 ม.รทก.",
      "observed_at": "2026-11-01 06:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.843297933527834,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองผันน้ำยม-น่าน2",
      "station_code": "DIV002",
      "province": "พิษณุโลก",
      "district": "พรหมพิราม",
      "lat": 16.95387,
      "lon": 100.12127,
      "waterlevel_msl": 40.13,
      "storage_percent": 45.89,
      "bankfull_msl": null,
      "value_text": "40.13 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.19110745038412,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.ปลายคลองบางซอ (ทุ่งเจ้าเจ็ด)",
      "station_code": "TCP002",
      "province": "สุพรรณบุรี",
      "district": "สองพี่น้อง",
      "lat": 14.194874,
      "lon": 100.13267,
      "waterlevel_msl": 2.01,
      "storage_percent": 45.68,
      "bankfull_msl": null,
      "value_text": "2.01 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.28443791048643,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "โพธิ์ประทับช้าง",
      "station_code": "YOM009",
      "province": "พิจิตร",
      "district": "โพธิ์ประทับช้าง",
      "lat": 16.31077,
      "lon": 100.27173,
      "waterlevel_msl": 30.09,
      "storage_percent": 45.53,
      "bankfull_msl": null,
      "value_text": "30.09 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.2038263788759,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านริมใต้",
      "station_code": "P.21",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.92746,
      "lon": 98.939774,
      "waterlevel_msl": 320.97,
      "storage_percent": 45.36,
      "bankfull_msl": null,
      "value_text": "320.97 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.611997774933826,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านปันจอร์",
      "station_code": "X.279",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.77741,
      "lon": 100.071487,
      "waterlevel_msl": 20.25,
      "storage_percent": 44.59,
      "bankfull_msl": null,
      "value_text": "20.25 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.88918727950312,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานสุพรรณกัลยา ",
      "station_code": "N.5A",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.80608,
      "lon": 100.245827,
      "waterlevel_msl": 37.18,
      "storage_percent": 44.03,
      "bankfull_msl": null,
      "value_text": "37.18 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 27.65208157617353,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่าบุญมี",
      "station_code": "Kgt.19A",
      "province": "ชลบุรี",
      "district": "เกาะจันทร์",
      "lat": 13.40472,
      "lon": 101.281776,
      "waterlevel_msl": 15.53,
      "storage_percent": 43.27,
      "bankfull_msl": null,
      "value_text": "15.53 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.94248989029333,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านบึง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองอุดรธานี",
      "station_code": "KON004",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.482368,
      "lon": 102.79713,
      "waterlevel_msl": 167.83,
      "storage_percent": 43.05,
      "bankfull_msl": null,
      "value_text": "167.83 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.725608707789945,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแม่แต",
      "station_code": "P.67",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 19.00985,
      "lon": 98.95974,
      "waterlevel_msl": 315.25,
      "storage_percent": 42.59,
      "bankfull_msl": null,
      "value_text": "315.25 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 46.074034078099054,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหนองวัวซอ",
      "station_code": "Kh.53",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.2659,
      "lon": 102.59243,
      "waterlevel_msl": 204.31,
      "storage_percent": 42.49,
      "bankfull_msl": null,
      "value_text": "204.31 ม.รทก.",
      "observed_at": "2026-11-01 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 30.15878108274017,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านชะอม",
      "station_code": "Kgt.34",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.10461,
      "lon": 101.744179,
      "waterlevel_msl": 5.55,
      "storage_percent": 41.64,
      "bankfull_msl": null,
      "value_text": "5.55 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.322455362116656,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานเขานางบวช",
      "station_code": "NYK008",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.245718,
      "lon": 101.27481,
      "waterlevel_msl": 5.25,
      "storage_percent": 41.63,
      "bankfull_msl": null,
      "value_text": "5.25 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.94713605347155,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านสบวิน",
      "station_code": "P.82",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.65423,
      "lon": 98.685661,
      "waterlevel_msl": 401.4,
      "storage_percent": 41.44,
      "bankfull_msl": null,
      "value_text": "401.4 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.50040396407909,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขาฉกรรจ์",
      "station_code": "Kgt.9",
      "province": "สระแก้ว",
      "district": "เขาฉกรรจ์",
      "lat": 13.66804,
      "lon": 102.0756,
      "waterlevel_msl": 43.41,
      "storage_percent": 41.2,
      "bankfull_msl": null,
      "value_text": "43.41 ม.รทก.",
      "observed_at": "2026-11-01 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 39.10879394408661,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "นาทวี",
      "station_code": "JNA002",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.738124,
      "lon": 100.69319,
      "waterlevel_msl": 19.79,
      "storage_percent": 41.16,
      "bankfull_msl": null,
      "value_text": "19.79 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.8139582811628,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองห้วยยาง",
      "station_code": "KIZ003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.136408,
      "lon": 101.857475,
      "waterlevel_msl": 31.51,
      "storage_percent": 41.01,
      "bankfull_msl": null,
      "value_text": "31.51 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.603460352265568,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองพิษณุโลก",
      "station_code": "NAN012",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.86469,
      "lon": 100.24476,
      "waterlevel_msl": 37.8,
      "storage_percent": 41.01,
      "bankfull_msl": null,
      "value_text": "37.8 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 33.75107369201308,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานโยธาอำนวยพัฒนา",
      "station_code": "TB0006",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.57391,
      "lon": 98.86222,
      "waterlevel_msl": 290.38,
      "storage_percent": 40.75,
      "bankfull_msl": null,
      "value_text": "290.38 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.71260178716996,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านฉลุงเหนือ",
      "station_code": "X.239",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.72662,
      "lon": 100.062737,
      "waterlevel_msl": 14.22,
      "storage_percent": 40.7,
      "bankfull_msl": null,
      "value_text": "14.22 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 43.86269583770013,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานต้นน้ำบางปะกง",
      "station_code": "Kgt.3",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.98666,
      "lon": 101.705406,
      "waterlevel_msl": 2.88,
      "storage_percent": 40.3,
      "bankfull_msl": null,
      "value_text": "2.88 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.591098779288023,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหล่ายแก้ว",
      "station_code": "P.85",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.366421,
      "lon": 98.772102,
      "waterlevel_msl": 290.03,
      "storage_percent": 40.19,
      "bankfull_msl": null,
      "value_text": "290.03 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 38.14916869631099,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "แม่น้ำทา",
      "station_code": "PIN008",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.471687,
      "lon": 98.95513,
      "waterlevel_msl": 303.84,
      "storage_percent": 39.35,
      "bankfull_msl": null,
      "value_text": "303.84 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.36387841872487,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแก่งดินสอ",
      "station_code": "Kgt.15B",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.06587,
      "lon": 101.922638,
      "waterlevel_msl": 15.69,
      "storage_percent": 38.95,
      "bankfull_msl": null,
      "value_text": "15.69 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.745614593827344,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขานางบวช",
      "station_code": "Ny.1B",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.24582,
      "lon": 101.274246,
      "waterlevel_msl": 5.07,
      "storage_percent": 38.79,
      "bankfull_msl": null,
      "value_text": "5.07 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.88640558131459,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางกระทุ่ม",
      "station_code": "NAN006",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.58046,
      "lon": 100.23858,
      "waterlevel_msl": 33.26,
      "storage_percent": 38.41,
      "bankfull_msl": null,
      "value_text": "33.26 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.569436005387221,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทุ่งแฝก",
      "station_code": "Kgt.14A",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.16131,
      "lon": 101.883057,
      "waterlevel_msl": 36.16,
      "storage_percent": 37.95,
      "bankfull_msl": null,
      "value_text": "36.16 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.296714406834624,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขาวังไทร",
      "station_code": "Z.11",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.85783,
      "lon": 101.615738,
      "waterlevel_msl": 5.4,
      "storage_percent": 37.21,
      "bankfull_msl": null,
      "value_text": "5.4 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.599850450622228,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "วังทอง",
      "station_code": "NAN013",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.8222,
      "lon": 100.43159,
      "waterlevel_msl": 42.28,
      "storage_percent": 36.0,
      "bankfull_msl": null,
      "value_text": "42.28 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.73752831943657,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่าไฮ",
      "station_code": "E.65",
      "province": "กาฬสินธุ์",
      "district": "ท่าคันโท",
      "lat": 16.95174,
      "lon": 103.168053,
      "waterlevel_msl": 162.12,
      "storage_percent": 35.97,
      "bankfull_msl": null,
      "value_text": "162.12 ม.รทก.",
      "observed_at": "2026-11-01 19:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.86838939842491,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางศาลา",
      "station_code": "X.90",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.93124,
      "lon": 100.439857,
      "waterlevel_msl": 2.69,
      "storage_percent": 34.94,
      "bankfull_msl": null,
      "value_text": "2.69 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.304963599540951,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานบ้านคันแม่น้ำบน",
      "station_code": "SKT004",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.81476,
      "lon": 99.80374,
      "waterlevel_msl": 45.55,
      "storage_percent": 34.92,
      "bankfull_msl": null,
      "value_text": "45.55 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 45.3918896494035,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านกลาง",
      "station_code": "P.71A",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.54735,
      "lon": 98.862282,
      "waterlevel_msl": 284.85,
      "storage_percent": 34.85,
      "bankfull_msl": null,
      "value_text": "284.85 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.421019936194998,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองหอยโข่ง",
      "station_code": "SLA002",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.931234,
      "lon": 100.43985,
      "waterlevel_msl": 2.57,
      "storage_percent": 34.61,
      "bankfull_msl": null,
      "value_text": "2.57 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.304873258948597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ควนกาหลง",
      "station_code": "STU004",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928349,
      "lon": 99.936035,
      "waterlevel_msl": 21.84,
      "storage_percent": 34.47,
      "bankfull_msl": null,
      "value_text": "21.84 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.6096254577221,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำแม่กลาง",
      "station_code": "MOU294",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.507551,
      "lon": 98.66203,
      "waterlevel_msl": 429.64,
      "storage_percent": 33.93,
      "bankfull_msl": null,
      "value_text": "429.64 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.927600919337834,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านวังนกแอ่น",
      "station_code": "N.24A",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.84712,
      "lon": 100.512093,
      "waterlevel_msl": 44.85,
      "storage_percent": 33.42,
      "bankfull_msl": null,
      "value_text": "44.85 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.08018070636455,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านวังขนาย",
      "station_code": "K.11A",
      "province": "กาญจนบุรี",
      "district": "ท่าม่วง",
      "lat": 13.95094,
      "lon": 99.645477,
      "waterlevel_msl": 10.85,
      "storage_percent": 33.29,
      "bankfull_msl": null,
      "value_text": "10.85 ม.รทก.",
      "observed_at": "2026-11-01 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.282138683426645,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านสบแม่สะป๊วด",
      "station_code": "P.77",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.43327,
      "lon": 99.085129,
      "waterlevel_msl": 366.83,
      "storage_percent": 32.05,
      "bankfull_msl": null,
      "value_text": "366.83 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.126606895413076,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านด่านทับตะโก",
      "station_code": "K.61",
      "province": "ราชบุรี",
      "district": "จอมบึง",
      "lat": 13.69252,
      "lon": 99.449738,
      "waterlevel_msl": 66.2,
      "storage_percent": 31.67,
      "bankfull_msl": null,
      "value_text": "66.2 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 43.68339292909541,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานวงแหวนรอบ 3",
      "station_code": "P.103",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.86651,
      "lon": 98.978188,
      "waterlevel_msl": 302.52,
      "storage_percent": 30.51,
      "bankfull_msl": null,
      "value_text": "302.52 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 30.0578075597904,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะเดา",
      "station_code": "SLA003",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.796687,
      "lon": 100.44239,
      "waterlevel_msl": 12.44,
      "storage_percent": 30.3,
      "bankfull_msl": null,
      "value_text": "12.44 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.230396811100928,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหาดใหญ่ใน",
      "station_code": "X.44",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.00218,
      "lon": 100.456062,
      "waterlevel_msl": 0.63,
      "storage_percent": 30.3,
      "bankfull_msl": null,
      "value_text": "0.63 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.64480235683347,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานห้วยแม่ตาช้าง",
      "station_code": "MOU010",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.771976,
      "lon": 98.862595,
      "waterlevel_msl": 379.53,
      "storage_percent": 30.26,
      "bankfull_msl": null,
      "value_text": "379.53 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 26.3732617114831,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองบางกอกใหญ่",
      "station_code": "RF.BKY.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางกอกใหญ่",
      "lat": 13.74022,
      "lon": 100.49012,
      "rainfall_mm": 35.0,
      "value_text": "35 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.237155999352623,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปากคลองตลาด",
      "station_code": "RF.PNK.03",
      "province": "กรุงเทพมหานคร",
      "district": "พระนคร",
      "lat": 13.74228,
      "lon": 100.49454,
      "rainfall_mm": 35.0,
      "value_text": "35 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.71375499022601,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.คลองสาน",
      "station_code": "RF.KSN.01",
      "province": "กรุงเทพมหานคร",
      "district": "คลองสาน",
      "lat": 13.73044,
      "lon": 100.50947,
      "rainfall_mm": 35.0,
      "value_text": "35 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.97576127908981,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองกระท้อน",
      "station_code": "STN0786",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.823198,
      "lon": 101.381608,
      "rainfall_mm": 34.5,
      "value_text": "34.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 5.538902464418241,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองสำโรง",
      "station_code": "RF.SPK.01",
      "province": "สมุทรปราการ",
      "district": "เมืองสมุทรปราการ",
      "lat": 13.64819,
      "lon": 100.59514,
      "rainfall_mm": 34.5,
      "value_text": "34.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 10.785508942064483,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองสาทร",
      "station_code": "RF.STN.02",
      "province": "กรุงเทพมหานคร",
      "district": "สาทร",
      "lat": 13.71839,
      "lon": 100.51496,
      "rainfall_mm": 34.0,
      "value_text": "34 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.130301137391854,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.สายไหม",
      "station_code": "RF.SMI.01",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.89531,
      "lon": 100.6609,
      "rainfall_mm": 33.5,
      "value_text": "33.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.214980123523015,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บางเลน",
      "station_code": "THA007",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.01636,
      "lon": 100.17979,
      "rainfall_mm": 33.4,
      "value_text": "33.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.05798711025778,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.วัดบางกระเจ้านอก",
      "station_code": "BKC002",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.689612,
      "lon": 100.554886,
      "rainfall_mm": 33.4,
      "value_text": "33.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.515461215669056,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองบางเขนใหม่",
      "station_code": "RF.BSU.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางซื่อ",
      "lat": 13.81729,
      "lon": 100.5105,
      "rainfall_mm": 32.5,
      "value_text": "32.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.028854444462862,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.พระโขนง",
      "station_code": "RF.PKN.01",
      "province": "กรุงเทพมหานคร",
      "district": "พระโขนง",
      "lat": 13.70233,
      "lon": 100.60197,
      "rainfall_mm": 32.5,
      "value_text": "32.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.565367575644187,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "เขตอุตสาหกรรมกบินทร์บุรี",
      "station_code": "KIZ001",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.072372,
      "lon": 101.837494,
      "rainfall_mm": 32.4,
      "value_text": "32.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.03761805796871,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองสิบสาม",
      "station_code": "RF.NJK.04",
      "province": "กรุงเทพมหานคร",
      "district": "หนองจอก",
      "lat": 13.85859,
      "lon": 100.86754,
      "rainfall_mm": 32.0,
      "value_text": "32 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.99334496666958,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.ดาวคะนอง",
      "station_code": "RF.TBR.03",
      "province": "กรุงเทพมหานคร",
      "district": "ราษฎร์บูรณะ",
      "lat": 13.6949,
      "lon": 100.48758,
      "rainfall_mm": 32.0,
      "value_text": "32 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 22.676003881917396,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองลัดบางยอ 1",
      "station_code": "BKC003",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.676162,
      "lon": 100.553085,
      "rainfall_mm": 31.8,
      "value_text": "31.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.06428903072714,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเตย",
      "station_code": "RF.KTY.04",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70628,
      "lon": 100.58752,
      "rainfall_mm": 31.5,
      "value_text": "31.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.177135525245067,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.บางบอน-ค.สะแกงาม",
      "station_code": "RF.BBN.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางบอน",
      "lat": 13.64255,
      "lon": 100.37952,
      "rainfall_mm": 31.5,
      "value_text": "31.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.359501733895145,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.คลองเตย",
      "station_code": "RF.KTY.01",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70791,
      "lon": 100.58363,
      "rainfall_mm": 31.5,
      "value_text": "31.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.622483558110797,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองแพ",
      "station_code": "BKC007",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.694974,
      "lon": 100.58231,
      "rainfall_mm": 31.0,
      "value_text": "31 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.583760714839544,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.หนองจอก",
      "station_code": "RF.NJK.01",
      "province": "กรุงเทพมหานคร",
      "district": "หนองจอก",
      "lat": 13.85584,
      "lon": 100.86259,
      "rainfall_mm": 31.0,
      "value_text": "31 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.429115496726427,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปลักหว้า",
      "station_code": "STN1923",
      "province": "สตูล",
      "district": "ท่าแพ",
      "lat": 6.80296,
      "lon": 99.963794,
      "rainfall_mm": 31.0,
      "value_text": "31 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.31667259650628,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.สาทร",
      "station_code": "RF.STN.01",
      "province": "กรุงเทพมหานคร",
      "district": "สาทร",
      "lat": 13.70821,
      "lon": 100.52641,
      "rainfall_mm": 31.0,
      "value_text": "31 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.740200263506118,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "กบินทร์บุรี",
      "station_code": "48439",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.98333,
      "lon": 101.70722,
      "rainfall_mm": 30.8,
      "value_text": "30.8 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 10.389305560510971,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เมืองแกลง",
      "station_code": "RAY001",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.802991,
      "lon": 101.65024,
      "rainfall_mm": 30.6,
      "value_text": "30.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 22.688334160220514,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนเนียง",
      "station_code": "STN1799",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.835284,
      "lon": 100.498648,
      "rainfall_mm": 30.5,
      "value_text": "30.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.593397363992267,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดห้วยเกษียร",
      "station_code": "ONE076",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.181127,
      "lon": 101.413635,
      "rainfall_mm": 30.2,
      "value_text": "30.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.01185573221601,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองสองสายใต้",
      "station_code": "RF.SMI.02",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.92314,
      "lon": 100.63447,
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.27841554590092,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเจ้าคุณสิงห์",
      "station_code": "RF.WTL.03",
      "province": "กรุงเทพมหานคร",
      "district": "วังทองหลาง",
      "lat": 13.7616,
      "lon": 100.61525,
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 10.74885345531913,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านตะคร้อเหนือ",
      "station_code": "ridtele_TKgt50",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.183695,
      "lon": 101.592297,
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.543674924810684,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ธนบุรี",
      "station_code": "RF.TBR.01",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.72497,
      "lon": 100.48558,
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.38274413372547,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองสำเหร่",
      "station_code": "RF.TBR.02",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.7067,
      "lon": 100.49646,
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 22.79927179304116,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.บางอ้อ",
      "station_code": "RF.PKN.03",
      "province": "กรุงเทพมหานคร",
      "district": "พระโขนง",
      "lat": 13.68212,
      "lon": 100.59254,
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.450900736461199,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศีรษะจรเข้น้อย",
      "station_code": "BST1",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.67777,
      "lon": 100.7945,
      "rainfall_mm": 29.6,
      "value_text": "29.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.967110872590503,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นาหินลาด",
      "station_code": "BHUN",
      "province": "นครนายก",
      "district": "ปากพลี",
      "lat": 14.20724,
      "lon": 101.35025,
      "rainfall_mm": 29.6,
      "value_text": "29.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.76029248076602,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางขุนเทียน",
      "station_code": "RF.BKT.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางขุนเทียน",
      "lat": 13.66083,
      "lon": 100.43531,
      "rainfall_mm": 29.5,
      "value_text": "29.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.115740127451417,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองบางไส้ไก่",
      "station_code": "RF.KSN.02",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.70692,
      "lon": 100.49737,
      "rainfall_mm": 29.5,
      "value_text": "29.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 22.742971895994785,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผู้ช่วยผู้ใหญ่บ้าน หมู่ 6",
      "station_code": "TB87",
      "province": "นครนายก",
      "district": "ปากพลี",
      "lat": 14.23455,
      "lon": 101.35369,
      "rainfall_mm": 29.2,
      "value_text": "29.2 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 48.732431417798544,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองบางซื่อ",
      "station_code": "RF.BSU.03",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.80023,
      "lon": 100.51848,
      "rainfall_mm": 29.0,
      "value_text": "29 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.119078638181172,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางแค",
      "station_code": "RF.BKE.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.69622,
      "lon": 100.40919,
      "rainfall_mm": 29.0,
      "value_text": "29 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.089742890003475,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก่งดินสอ",
      "station_code": "ridtele_TKgt15A",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.065977,
      "lon": 101.922737,
      "rainfall_mm": 28.5,
      "value_text": "28.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.760805488699319,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานพระพุทธยอดฟ้า",
      "station_code": "G09006-TA100220",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.738694,
      "lon": 100.49633,
      "rainfall_mm": 28.0,
      "value_text": "28 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.57161312341853,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางกอกใหญ่",
      "station_code": "RF.BKY.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางกอกใหญ่",
      "lat": 13.72332,
      "lon": 100.47622,
      "rainfall_mm": 28.0,
      "value_text": "28 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.32569309955743,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ตลาดน้ำบางน้ำผึ้ง",
      "station_code": "BKC008",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.678656,
      "lon": 100.57356,
      "rainfall_mm": 27.6,
      "value_text": "27.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.51733445065366,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองบางจาก",
      "station_code": "RF.BKE.03",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.71471,
      "lon": 100.39555,
      "rainfall_mm": 27.5,
      "value_text": "27.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.523972872579073,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.สิบสอง-ถ.ประชาสำราญ",
      "station_code": "RF.NJK.03",
      "province": "กรุงเทพมหานคร",
      "district": "หนองจอก",
      "lat": 13.91368,
      "lon": 100.86244,
      "rainfall_mm": 27.5,
      "value_text": "27.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.00023306955477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองภาษีเจริญ",
      "station_code": "RF.PSC.04",
      "province": "กรุงเทพมหานคร",
      "district": "ภาษีเจริญ",
      "lat": 13.72204,
      "lon": 100.46863,
      "rainfall_mm": 27.5,
      "value_text": "27.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.734626972974844,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองประแสร์ที่กระแสบน",
      "station_code": "G09006-TA170404",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.85044,
      "lon": 101.63364,
      "rainfall_mm": 27.5,
      "value_text": "27.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.635600815855664,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
      "station_code": "BKK016",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.83819,
      "lon": 100.9666,
      "rainfall_mm": 27.2,
      "value_text": "27.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.69905378335247,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกเขื่อน",
      "station_code": "STN1976",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.159991,
      "lon": 101.521952,
      "rainfall_mm": 27.0,
      "value_text": "27 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.561407857762894,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ส.พระราม 4",
      "station_code": "RF.KTY.02",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.7087,
      "lon": 100.55457,
      "rainfall_mm": 27.0,
      "value_text": "27 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.734052145688665,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.บางจาก",
      "station_code": "RF.PKN.04",
      "province": "กรุงเทพมหานคร",
      "district": "พระโขนง",
      "lat": 13.6891,
      "lon": 100.59068,
      "rainfall_mm": 26.5,
      "value_text": "26.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.648183429747382,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองห้วยยาง",
      "station_code": "KIZ003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.136408,
      "lon": 101.857475,
      "rainfall_mm": 26.2,
      "value_text": "26.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.603460352265568,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ทุ่งครุ",
      "station_code": "RF.TKU.01",
      "province": "กรุงเทพมหานคร",
      "district": "ทุ่งครุ",
      "lat": 13.61135,
      "lon": 100.50878,
      "rainfall_mm": 26.0,
      "value_text": "26 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.26359221528617,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานข้ามแม่น้ำท่าจีน (ทางหลวง 346)",
      "station_code": "G09006-TA130206",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.015993,
      "lon": 100.18,
      "rainfall_mm": 26.0,
      "value_text": "26 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.05533971858623,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเจ็ก",
      "station_code": "RF.PKN.02",
      "province": "กรุงเทพมหานคร",
      "district": "พระโขนง",
      "lat": 13.69223,
      "lon": 100.58991,
      "rainfall_mm": 25.5,
      "value_text": "25.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.745121578932682,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองอ้อมนนท์ บางใหญ่ (ถนนบางกรวย-ไทรน้อย)",
      "station_code": "BKK007",
      "province": "นนทบุรี",
      "district": "บางใหญ่",
      "lat": 13.87089,
      "lon": 100.43626,
      "rainfall_mm": 25.4,
      "value_text": "25.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 29.93130739016791,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านวังอีแอ่น",
      "station_code": "G09006-TA170601",
      "province": "จันทบุรี",
      "district": "แก่งหางแมว",
      "lat": 13.06033,
      "lon": 101.82522,
      "rainfall_mm": 25.0,
      "value_text": "25 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.174176487414485,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าโตนงาช้าง",
      "station_code": "MOU502",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.943634,
      "lon": 100.250435,
      "rainfall_mm": 24.6,
      "value_text": "24.6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.04845477137316,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำเชี่ยว",
      "station_code": "STN1687",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.466831,
      "lon": 100.833499,
      "rainfall_mm": 24.5,
      "value_text": "24.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.13375242742401,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านตลาดเนินหิน",
      "station_code": "ONE061",
      "province": "ชลบุรี",
      "district": "บ่อทอง",
      "lat": 13.298696,
      "lon": 101.36016,
      "rainfall_mm": 24.4,
      "value_text": "24.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.817571825599366,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สระแก้ว",
      "station_code": "48440",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.78889,
      "lon": 102.03472,
      "rainfall_mm": 24.2,
      "value_text": "24.2 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.74777170386582,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านตะคร้อเหนือ",
      "station_code": "G09006-TC150505",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.183638,
      "lon": 101.59204,
      "rainfall_mm": 23.5,
      "value_text": "23.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.54323463971771,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหาดใหญ่",
      "station_code": "STN2204",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.797868,
      "lon": 101.4683,
      "rainfall_mm": 23.5,
      "value_text": "23.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 7.954084799469323,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปลายคลอง",
      "station_code": "STN1692",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.696497,
      "lon": 100.586443,
      "rainfall_mm": 23.5,
      "value_text": "23.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.69356603018849,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.บางเชือกหนัง-ถ.พุทธมณฑลสาย 1",
      "station_code": "RF.PSC.03",
      "province": "กรุงเทพมหานคร",
      "district": "ภาษีเจริญ",
      "lat": 13.74223,
      "lon": 100.42765,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.57867876124564,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก่งไทร",
      "station_code": "ridtele_TKgt44",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.855838,
      "lon": 102.141425,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.031713455246976,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "กบินทร์บุรี",
      "station_code": "ridtele_TKgt3",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.986164,
      "lon": 101.704769,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 10.50777352084145,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางซื่อ",
      "station_code": "RF.BSU.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางซื่อ",
      "lat": 13.80973,
      "lon": 100.53723,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.1015967847225,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางพลัด",
      "station_code": "RF.BPD.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางพลัด",
      "lat": 13.79429,
      "lon": 100.50479,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.619881065140373,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางกอกน้อย",
      "station_code": "RF.BKN.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางกอกน้อย",
      "lat": 13.77078,
      "lon": 100.46806,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.824798053927566,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
      "station_code": "BKK020",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดพร้าว",
      "lat": 13.93183,
      "lon": 100.63952,
      "rainfall_mm": 22.6,
      "value_text": "22.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.87492828233833,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองโพล้ที่เขาชะเมา",
      "station_code": "G09006-TA170403",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.98786,
      "lon": 101.66553,
      "rainfall_mm": 22.0,
      "value_text": "22 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 33.869063022073256,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สียัด",
      "station_code": "ridtele_TKgt18",
      "province": "ฉะเชิงเทรา",
      "district": "ท่าตะเกียบ",
      "lat": 13.476218,
      "lon": 101.623779,
      "rainfall_mm": 21.5,
      "value_text": "21.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 35.33615660013522,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ส.พระโขนง",
      "station_code": "RF.KTY.03",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70857,
      "lon": 100.59542,
      "rainfall_mm": 21.5,
      "value_text": "21.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.385776277527482,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านสำนักเอาะ",
      "station_code": "STN1693",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.485849,
      "lon": 100.779058,
      "rainfall_mm": 21.5,
      "value_text": "21.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.85174212688185,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งแฝก",
      "station_code": "ridtele_TKgt14",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.160683,
      "lon": 101.880776,
      "rainfall_mm": 21.5,
      "value_text": "21.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 22.21889386727592,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ส.สามเสน",
      "station_code": "RF.DST.02",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.78483,
      "lon": 100.50825,
      "rainfall_mm": 21.0,
      "value_text": "21 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.325835182555814,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "วัดควนเนียง",
      "station_code": "ridtele_TSL23",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.833256,
      "lon": 100.498853,
      "rainfall_mm": 21.0,
      "value_text": "21 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.78418570006038,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ภาษีเจริญ",
      "station_code": "RF.PSC.01",
      "province": "กรุงเทพมหานคร",
      "district": "ภาษีเจริญ",
      "lat": 13.71441,
      "lon": 100.43696,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.21767878315778,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวบุ่ง",
      "station_code": "STN1582",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.199403,
      "lon": 101.402909,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 42.3125162204715,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.จอมทอง",
      "station_code": "RF.JTG.01",
      "province": "กรุงเทพมหานคร",
      "district": "จอมทอง",
      "lat": 13.67744,
      "lon": 100.48427,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.04584842732186,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ทต.กรอกสมบูรณ์",
      "station_code": "RBPI",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.77716,
      "lon": 101.65875,
      "rainfall_mm": 20.4,
      "value_text": "20.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.360027355574916,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองเปรมประชากร หลักหก",
      "station_code": "BKK002",
      "province": "ปทุมธานี",
      "district": "เมืองปทุมธานี",
      "lat": 13.96562,
      "lon": 100.60262,
      "rainfall_mm": 19.6,
      "value_text": "19.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.095038483394372,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาหวาย",
      "station_code": "STN1656",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.874416,
      "lon": 101.470981,
      "rainfall_mm": 19.5,
      "value_text": "19.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.95358932850628,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดใหม่บางคล้า",
      "station_code": "ridtele_TKgt63",
      "province": "ฉะเชิงเทรา",
      "district": "บางคล้า",
      "lat": 13.690656,
      "lon": 101.164453,
      "rainfall_mm": 19.5,
      "value_text": "19.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.739519127295512,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองชักพระ",
      "station_code": "RF.TLC.03",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.77892,
      "lon": 100.465,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 26.03950565470488,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 5.703677802963367,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ปลายคลองบางซอ (ทุ่งเจ้าเจ็ด)",
      "station_code": "TCP002",
      "province": "สุพรรณบุรี",
      "district": "สองพี่น้อง",
      "lat": 14.194874,
      "lon": 100.13267,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.28443791048643,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานนวลฉวี",
      "station_code": "CPY014",
      "province": "นนทบุรี",
      "district": "ปากเกร็ด",
      "lat": 13.94749,
      "lon": 100.53507,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.300920472922257,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานโยธกา",
      "station_code": "NYK014",
      "province": "ปราจีนบุรี",
      "district": "บ้านสร้าง",
      "lat": 13.974951,
      "lon": 101.14307,
      "rainfall_mm": 18.8,
      "value_text": "18.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 43.04088797676839,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
      "station_code": "BKK017",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.66949,
      "lon": 100.80058,
      "rainfall_mm": 18.8,
      "value_text": "18.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 9.945006421763477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปาล์มไทย (บ้านส้านแดง)",
      "station_code": "STN1916",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 7.046194,
      "lon": 100.030196,
      "rainfall_mm": 18.5,
      "value_text": "18.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 36.619354672165436,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "TC.55",
      "station_code": "ridtele_TC.55",
      "province": "ปทุมธานี",
      "district": "เมืองปทุมธานี",
      "lat": 14.035556,
      "lon": 100.549365,
      "rainfall_mm": 18.5,
      "value_text": "18.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.634273799694,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านดอยปุย",
      "station_code": "STN1670",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.81661,
      "lon": 98.8835,
      "rainfall_mm": 18.5,
      "value_text": "18.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 28.83554483458552,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองบางม่วง",
      "station_code": "ONE024",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.365284,
      "lon": 100.27959,
      "rainfall_mm": 18.2,
      "value_text": "18.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.67365550525883,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เขานางบวช",
      "station_code": "ridtele_TNy1",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.245138,
      "lon": 101.27419,
      "rainfall_mm": 18.0,
      "value_text": "18 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 42.90854411708874,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่ามะปราง",
      "station_code": "STN1584",
      "province": "นครนายก",
      "district": "ปากพลี",
      "lat": 14.222935,
      "lon": 101.356088,
      "rainfall_mm": 17.5,
      "value_text": "17.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.59859365427491,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองรางจาก-ถ.ประชาอุทิศ",
      "station_code": "RF.TKU.02",
      "province": "กรุงเทพมหานคร",
      "district": "ทุ่งครุ",
      "lat": 13.63494,
      "lon": 100.50218,
      "rainfall_mm": 17.5,
      "value_text": "17.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.853917651412083,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนเสม็ด",
      "station_code": "STN1595",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.695564,
      "lon": 100.521218,
      "rainfall_mm": 17.5,
      "value_text": "17.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.819030100615226,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
      "station_code": "MOU479",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.912333,
      "lon": 101.72454,
      "rainfall_mm": 17.2,
      "value_text": "17.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 35.65416268665123,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อบต.บุพราหมณ์",
      "station_code": "TLAN",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.20791,
      "lon": 101.90556,
      "rainfall_mm": 17.2,
      "value_text": "17.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 27.657768692287558,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ้านโคกอุดม",
      "station_code": "MKKB",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.06948,
      "lon": 101.80991,
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.968176524129444,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ศรีมหาโพธิ (KGT6)",
      "station_code": "PRC005",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97348,
      "lon": 101.51751,
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.418025616363693,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองอู่ตะเภาตอนบนทุ่งลาน",
      "station_code": "G09006-TA200303",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.856463,
      "lon": 100.46416,
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.434904950589534,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติทะเลบัน",
      "station_code": "MOU137",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.709046,
      "lon": 100.16905,
      "rainfall_mm": 16.8,
      "value_text": "16.8 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 32.79114215034916,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยต้นน้ำชายฝั่งทะเลตะวันออก",
      "station_code": "MOU375",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.697516,
      "lon": 101.404884,
      "rainfall_mm": 16.6,
      "value_text": "16.6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 6.455301106484008,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางบอน",
      "station_code": "RF.BBN.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางบอน",
      "lat": 13.63392,
      "lon": 100.36884,
      "rainfall_mm": 16.5,
      "value_text": "16.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 10.091764514096486,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเจ็ดลูกเนิน",
      "station_code": "STN0277",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.777539,
      "lon": 101.3988,
      "rainfall_mm": 16.5,
      "value_text": "16.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.338041526084151,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองภาษีเจริญ เพชรเกษม69",
      "station_code": "BKK005",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.69158,
      "lon": 100.38127,
      "rainfall_mm": 15.8,
      "value_text": "15.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.633474059900415,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หาดใหญ่",
      "station_code": "SLA001",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98013,
      "lon": 100.46322,
      "rainfall_mm": 15.8,
      "value_text": "15.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.834415195032278,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก่งใหญ่",
      "station_code": "G09006-TC150409",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.079854,
      "lon": 102.04428,
      "rainfall_mm": 15.5,
      "value_text": "15.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 22.53886851790903,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "TC.12",
      "station_code": "ridtele_TC.12",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.788165,
      "lon": 100.509162,
      "rainfall_mm": 15.0,
      "value_text": "15 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.193894993834533,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.ประเวศฯ-ถ.ร่วมพัฒนา",
      "station_code": "RF.LKB.04",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.70097,
      "lon": 100.85106,
      "rainfall_mm": 15.0,
      "value_text": "15 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 7.966702861644162,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อบต.พลูตาหลวง",
      "station_code": "PLTL",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.69861,
      "lon": 100.9762,
      "rainfall_mm": 14.6,
      "value_text": "14.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.209969273856109,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองไข่มุก",
      "station_code": "STN1714",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.640181,
      "lon": 100.619208,
      "rainfall_mm": 14.5,
      "value_text": "14.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.206033075933966,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ ท่าเรือคลองเตย",
      "station_code": "48454",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70694,
      "lon": 100.56805,
      "rainfall_mm": 14.5,
      "value_text": "14.5 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.264975308798602,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังพา",
      "station_code": "STN0155",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.898464,
      "lon": 100.262261,
      "rainfall_mm": 14.5,
      "value_text": "14.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.27805357743103,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.เขาพระ",
      "station_code": "KAOP",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.07915,
      "lon": 100.19008,
      "rainfall_mm": 14.2,
      "value_text": "14.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.321326804014046,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางน้ำเปรี้ยว",
      "station_code": "BPK003",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.87032,
      "lon": 101.14574,
      "rainfall_mm": 14.0,
      "value_text": "14 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 34.46042027634919,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนทำนบดินเดิม",
      "station_code": "ridtele_TKgt64",
      "province": "ฉะเชิงเทรา",
      "district": "เมืองฉะเชิงเทรา",
      "lat": 13.691906,
      "lon": 101.131988,
      "rainfall_mm": 14.0,
      "value_text": "14 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.550575954707586,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TC.54",
      "station_code": "ridtele_TC.54",
      "province": "สมุทรปราการ",
      "district": "พระสมุทรเจดีย์",
      "lat": 13.553806,
      "lon": 100.576556,
      "rainfall_mm": 14.0,
      "value_text": "14 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.415887264136062,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางกระเจ้า",
      "station_code": "BKJO",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.52146,
      "lon": 100.19283,
      "rainfall_mm": 13.6,
      "value_text": "13.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 2.3780877670010234,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติออบขาน",
      "station_code": "MOU004",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.72412,
      "lon": 98.82089,
      "rainfall_mm": 13.6,
      "value_text": "13.6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 26.53044041204005,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.ทวีฯ-ค.ภาษีฯ",
      "station_code": "RF.NKM.02",
      "province": "กรุงเทพมหานคร",
      "district": "หนองแขม",
      "lat": 13.69168,
      "lon": 100.38097,
      "rainfall_mm": 13.5,
      "value_text": "13.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.636359529784876,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาพระ",
      "station_code": "G09006-TA200308",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.05101,
      "lon": 100.16574,
      "rainfall_mm": 13.5,
      "value_text": "13.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.93811292443077,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานปทุมธานี 1",
      "station_code": "G09006-TA100219",
      "province": "ปทุมธานี",
      "district": "เมืองปทุมธานี",
      "lat": 14.025061,
      "lon": 100.53942,
      "rainfall_mm": 13.0,
      "value_text": "13 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.02450990357153,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ดุสิต",
      "station_code": "RF.DST.01",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.77693,
      "lon": 100.52032,
      "rainfall_mm": 12.5,
      "value_text": "12.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.14147852004877,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียน ตชด.บ้านส้านักเอาะ",
      "station_code": "FOP069",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.483326,
      "lon": 100.779366,
      "rainfall_mm": 12.2,
      "value_text": "12.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.92913921048899,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านหินเทิน",
      "station_code": "ONE071",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.064819,
      "lon": 102.01052,
      "rainfall_mm": 12.2,
      "value_text": "12.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.625413383813196,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซอย 8",
      "station_code": "STN1620",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.881952,
      "lon": 99.997221,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 42.41456729138937,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองหอยโข่ง",
      "station_code": "SLA002",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.931234,
      "lon": 100.43985,
      "rainfall_mm": 11.6,
      "value_text": "11.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.304873258948597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบาโรย",
      "station_code": "STN0152",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.774554,
      "lon": 100.230542,
      "rainfall_mm": 11.5,
      "value_text": "11.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 29.64693605816949,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หมู่บ้านเศรษฐกิจ ซอย 26",
      "station_code": "RF.BKE.04",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.72167,
      "lon": 100.37676,
      "rainfall_mm": 11.5,
      "value_text": "11.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.80053604740169,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนประแส",
      "station_code": "VLGE26",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.716423,
      "lon": 101.704124,
      "rainfall_mm": 11.2,
      "value_text": "11.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 26.947742929730865,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองพระพิมล (ไทรน้อย)",
      "station_code": "BKK018",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 13.97396,
      "lon": 100.31901,
      "rainfall_mm": 11.2,
      "value_text": "11.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 39.08855794765454,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "TC.53",
      "station_code": "ridtele_TC.53",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.701861,
      "lon": 100.579778,
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.931875067749854,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.90",
      "station_code": "ridtele_STN06",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.931008,
      "lon": 100.439582,
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.30118926386854,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ห้วยโป่ง สกษ.",
      "station_code": "48479",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.735,
      "lon": 101.135,
      "rainfall_mm": 10.8,
      "value_text": "10.8 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 1.4276244076373317,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
      "station_code": "TCP012",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.327773,
      "lon": 100.405464,
      "rainfall_mm": 10.4,
      "value_text": "10.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.830034274183255,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลากลางสมุทรปราการ",
      "station_code": "G09006-TA100221",
      "province": "สมุทรปราการ",
      "district": "เมืองสมุทรปราการ",
      "lat": 13.59801,
      "lon": 100.59622,
      "rainfall_mm": 10.0,
      "value_text": "10 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.914153079374797,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานข้ามแม่น้ำท่าจีน 3",
      "station_code": "G09006-TA130203",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.5859,
      "lon": 100.23125,
      "rainfall_mm": 10.0,
      "value_text": "10 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.6622115448354835,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองสมุทรสาคร",
      "station_code": "THA009",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.58598,
      "lon": 100.23048,
      "rainfall_mm": 10.0,
      "value_text": "10 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.674934171316372,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดบางแตน",
      "station_code": "VLGE47",
      "province": "ปราจีนบุรี",
      "district": "บ้านสร้าง",
      "lat": 13.902437,
      "lon": 101.168,
      "rainfall_mm": 9.8,
      "value_text": "9.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.44469256455542,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.จุฬาลงกรณ์",
      "station_code": "ATG101",
      "province": "ปทุมธานี",
      "district": "ธัญบุรี",
      "lat": 13.98135,
      "lon": 100.6057,
      "rainfall_mm": 9.6,
      "value_text": "9.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.444263793568823,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านสีระมัน",
      "station_code": "ONE089",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 13.038727,
      "lon": 101.66171,
      "rainfall_mm": 9.6,
      "value_text": "9.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.90814625497235,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักแว่น",
      "station_code": "STN1589",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.040789,
      "lon": 102.577395,
      "rainfall_mm": 9.5,
      "value_text": "9.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.322275019675324,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังท่าช้าง",
      "station_code": "WTCH",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.75941,
      "lon": 101.88693,
      "rainfall_mm": 9.4,
      "value_text": "9.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.445528831027715,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองสระแก้ว",
      "station_code": "SKE002",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.809611,
      "lon": 102.05431,
      "rainfall_mm": 9.2,
      "value_text": "9.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.640208181648024,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ตลิ่งชัน",
      "station_code": "RF.TLC.01",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.77663,
      "lon": 100.45653,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-11-01 18:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.976684605760305,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนาส้อง",
      "station_code": "STN0705",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.277879,
      "lon": 100.053089,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.210666100402584,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านช่องมะเฟือง",
      "station_code": "G09006-TC151006",
      "province": "ชลบุรี",
      "district": "เมืองชลบุรี",
      "lat": 13.317424,
      "lon": 101.05648,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.883250416535583,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สัตหีบ",
      "station_code": "48477",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.68333,
      "lon": 100.98333,
      "rainfall_mm": 8.7,
      "value_text": "8.7 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.799008781419568,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ราษฎร์นิยม",
      "station_code": "BKNH",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 14.10388,
      "lon": 100.32209,
      "rainfall_mm": 8.6,
      "value_text": "8.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.076556482399493,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปากช่อง สกษ.",
      "station_code": "48435",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.64389,
      "lon": 101.33194,
      "rainfall_mm": 8.6,
      "value_text": "8.6 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.90605207349294,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังม่วง",
      "station_code": "WGYG",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.84867,
      "lon": 101.14549,
      "rainfall_mm": 8.6,
      "value_text": "8.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.961853274234922,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองน้ำเย็น",
      "station_code": "STN1789",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.786534,
      "lon": 101.726321,
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.05298427696326,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานฉะเชิงเทรา",
      "station_code": "ridtele_TKgt57",
      "province": "ฉะเชิงเทรา",
      "district": "เมืองฉะเชิงเทรา",
      "lat": 13.686212,
      "lon": 101.080098,
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.432141192408956,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปราจีนบุรี",
      "station_code": "48430",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.05842,
      "lon": 101.3693,
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.97261818444056,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "คลองบ้านนา(ชะอม)",
      "station_code": "ridtele_TNy13",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.403987,
      "lon": 101.110443,
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.36607016195545,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนซอย12 สาย 4 ซ้าย",
      "station_code": "G09006-TA121101",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.882131,
      "lon": 100.905748,
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.673760835829963,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านตลาดใหม่",
      "station_code": "HDA008",
      "province": "อ่างทอง",
      "district": "วิเศษชัยชาญ",
      "lat": 14.553573,
      "lon": 100.316765,
      "rainfall_mm": 8.4,
      "value_text": "8.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.86535432381292,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองต่อ",
      "station_code": "STN0063",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.018751,
      "lon": 100.260772,
      "rainfall_mm": 8.0,
      "value_text": "8 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.991726336523053,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองสตูล",
      "station_code": "STU001",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.726527,
      "lon": 100.06259,
      "rainfall_mm": 7.8,
      "value_text": "7.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.87220334815228,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองมหาสวัสดิ บางกรวย-สวนผัก",
      "station_code": "BKK003",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.79965,
      "lon": 100.43863,
      "rainfall_mm": 7.8,
      "value_text": "7.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.741410424380156,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวัด",
      "station_code": "STN0292",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.487867,
      "lon": 100.672471,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.22203897485744,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเนินผาสุก",
      "station_code": "ridtele_TKgt10",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.809517,
      "lon": 102.053887,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.612646442096676,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านชายคลอง",
      "station_code": "STN2062",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.963151,
      "lon": 100.458623,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.004532299603285,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ส.รัชดา-วิภาวดี",
      "station_code": "RF.CTC.02",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.83022,
      "lon": 100.55723,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.196567014649045,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังหิน",
      "station_code": "STN0178",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.263495,
      "lon": 101.891589,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.68961903666013,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ่อวิน",
      "station_code": "SWNG",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.05505,
      "lon": 101.09782,
      "rainfall_mm": 7.2,
      "value_text": "7.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.8374957992377094,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นายายอาม",
      "station_code": "MMNY",
      "province": "จันทบุรี",
      "district": "นายายอาม",
      "lat": 12.77083,
      "lon": 101.85303,
      "rainfall_mm": 7.2,
      "value_text": "7.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.337182080568624,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศรีกะอาง",
      "station_code": "WRRS",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.27798,
      "lon": 101.12879,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.092634302063587,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านยุบตาเหน่ง",
      "station_code": "STN1664",
      "province": "ระยอง",
      "district": "วังจันทร์",
      "lat": 12.967637,
      "lon": 101.466628,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.886330492754643,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำหรา",
      "station_code": "STN0156",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.899784,
      "lon": 100.093935,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.728187231816047,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าอ่าวท่ายาง",
      "station_code": "MOU135",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.42019,
      "lon": 100.33263,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.90254768279872,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งลัง",
      "station_code": "STN1607",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.547067,
      "lon": 100.734004,
      "rainfall_mm": 6.5,
      "value_text": "6.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.3995193108718,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยยาบ",
      "station_code": "STN0018",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.654016,
      "lon": 99.300301,
      "rainfall_mm": 6.5,
      "value_text": "6.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.790887330336005,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานข้ามบางแม่หม้าย-บางเลน",
      "station_code": "G09006-TA130209",
      "province": "สุพรรณบุรี",
      "district": "บางปลาม้า",
      "lat": 14.296477,
      "lon": 100.13867,
      "rainfall_mm": 6.5,
      "value_text": "6.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.59712003999628,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปากรอ",
      "station_code": "G09006-TA200307",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.262618,
      "lon": 100.42497,
      "rainfall_mm": 6.5,
      "value_text": "6.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.1828862580458,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านฉางกาญจนกุลวิทยา",
      "station_code": "G09006-TA170103",
      "province": "ระยอง",
      "district": "บ้านฉาง",
      "lat": 12.73575,
      "lon": 101.05024,
      "rainfall_mm": 6.5,
      "value_text": "6.5 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.4068586969810815,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านยางงาม (บ้านทุ่งปราบ)",
      "station_code": "STN2214",
      "province": "สงขลา",
      "district": "ควนเนียง",
      "lat": 7.160262,
      "lon": 100.376721,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.00462535610129,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ขนงพระ",
      "station_code": "TLPC",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.60689,
      "lon": 101.45632,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.26659989385583,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองลำพญาธาร",
      "station_code": "MOU460",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.26568,
      "lon": 101.89133,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.930789681787886,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านแผ่นดินเย็น",
      "station_code": "STN1591",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.960406,
      "lon": 102.505896,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.819760116104607,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.194",
      "station_code": "ridtele_STN03",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.1558,
      "lon": 100.467,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.225271780295483,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าเชียด",
      "station_code": "STN2210",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.263168,
      "lon": 100.08232,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.72229243790302,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีบ้านปากรอ",
      "station_code": "ridtele_TSL08",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.26253,
      "lon": 100.425,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.17421892887078,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปากรอ",
      "station_code": "SLA005",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.261514,
      "lon": 100.42447,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.050330940229774,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปทุมธานี สกษ.",
      "station_code": "48419",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.1,
      "lon": 100.61667,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.329689656172745,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำแม่สา",
      "station_code": "MOU009",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.885838,
      "lon": 98.826904,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.55447608245622,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยโท้ง",
      "station_code": "STN0075",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.697396,
      "lon": 98.815361,
      "rainfall_mm": 5.5,
      "value_text": "5.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.671061081165224,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านตลาดนาทวี",
      "station_code": "STN0845",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.741373,
      "lon": 100.694815,
      "rainfall_mm": 5.5,
      "value_text": "5.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.16943500258247,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกุดบอน",
      "station_code": "ridtele_TKgt13A",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.909681,
      "lon": 101.838288,
      "rainfall_mm": 5.5,
      "value_text": "5.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.946998801387259,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บางปะกง",
      "station_code": "BPK001",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.54901,
      "lon": 101.00111,
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.7752687912394733,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทล. ๓ (ลำแปรง)",
      "station_code": "MOU256",
      "province": "นครราชสีมา",
      "district": "ครบุรี",
      "lat": 14.2047,
      "lon": 102.211,
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-11-01 16:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.246140847874884,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อุทยานแห่งชาติเขาใหญ่",
      "station_code": "MOU114",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.434425,
      "lon": 101.372604,
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.57235873708247,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "แหลมฉบัง",
      "station_code": "48463",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.07803,
      "lon": 100.87389,
      "rainfall_mm": 5.3,
      "value_text": "5.3 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.8252486111632202,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สตูล",
      "station_code": "48570",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.65,
      "lon": 100.08333,
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.41260863393544,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำลำตะคอง",
      "station_code": "MOU246",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.550208,
      "lon": 101.459465,
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.271067024949225,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าโต้",
      "station_code": "STN1024",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.756746,
      "lon": 100.533575,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.323322558783495,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อ.เมือง จ.พิษณุโลก",
      "station_code": "ridtele_TN.5A",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.814667,
      "lon": 100.260028,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.12109322046796,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สา",
      "station_code": "MOU002",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.900038,
      "lon": 98.84829,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.6505840052055,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองขุนศรีฯ-ค.มหาสวัสดิ์",
      "station_code": "RF.TWW.03",
      "province": "กรุงเทพมหานคร",
      "district": "ทวีวัฒนา",
      "lat": 13.80244,
      "lon": 100.3707,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.605210804939905,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกระบกเตี้ย",
      "station_code": "STN1585",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.682595,
      "lon": 101.528919,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.825842039437443,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชลบุรี",
      "station_code": "48459",
      "province": "ชลบุรี",
      "district": "เมืองชลบุรี",
      "lat": 13.36667,
      "lon": 100.98333,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.497316424856503,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "นาดี",
      "station_code": "PRC003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.133605,
      "lon": 101.72767,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.92980239014854,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ตากฟ้า",
      "station_code": "TKFA",
      "province": "นครสวรรค์",
      "district": "ตากฟ้า",
      "lat": 15.2965,
      "lon": 100.50282,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.65802972934656,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทล.๑๑ (ไทยสามัคคี)",
      "station_code": "MOU112",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.322821,
      "lon": 101.93274,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.71665998706693,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยประมงศรีราชา",
      "station_code": "GOT001",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.185876,
      "lon": 100.916916,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.716709510122786,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนามทับทุ่ม บ้านวังนาใน หมู่ที่ 10",
      "station_code": "SWR035",
      "province": "สตูล",
      "district": "ละงู",
      "lat": 7.13571,
      "lon": 99.93736,
      "rainfall_mm": 4.6,
      "value_text": "4.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.7230236681225,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองขนุน",
      "station_code": "STN0138",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.894996,
      "lon": 101.370717,
      "rainfall_mm": 4.5,
      "value_text": "4.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.110870573297016,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผัง 120",
      "station_code": "STN1918",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.929001,
      "lon": 99.980648,
      "rainfall_mm": 4.5,
      "value_text": "4.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.766895211963295,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่ามาบลำบิด",
      "station_code": "MOU119",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.164513,
      "lon": 101.15418,
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.210559976461311,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการกองทุนบ้านหนองผักแว่น หมู่ 9",
      "station_code": "TE65",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.04115,
      "lon": 102.57745,
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.362732155627924,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นาแขม",
      "station_code": "VLGE50",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.04255,
      "lon": 101.72051,
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.82661524391665,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รพ.สต.น้ำเชี่ยว",
      "station_code": "FOP070",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.48154,
      "lon": 100.82659,
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.11596259561385,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะเดา",
      "station_code": "48574",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.79806,
      "lon": 100.39056,
      "rainfall_mm": 4.2,
      "value_text": "4.2 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.618419732349793,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคอก-วังไทร",
      "station_code": "STN0507",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.585939,
      "lon": 100.672797,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.048769895702318,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดตะโหมด",
      "station_code": "ridtele_TSL16",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.2881,
      "lon": 100.05234,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.03277749359007,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "พัทยา",
      "station_code": "48461",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.92,
      "lon": 100.86944,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.933208442922655,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำทุ่งม่าน",
      "station_code": "RES018",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.25546,
      "lon": 98.84405,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.979005262634885,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ตากฟ้า สกษ.",
      "station_code": "48401",
      "province": "นครสวรรค์",
      "district": "ตากฟ้า",
      "lat": 15.34944,
      "lon": 100.53028,
      "rainfall_mm": 3.6,
      "value_text": "3.6 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.322537154648934,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังใหญ่",
      "station_code": "STN1684",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.705379,
      "lon": 100.742996,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.67327840570694,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพุม่วง",
      "station_code": "STN1524",
      "province": "ลพบุรี",
      "district": "โคกสำโรง",
      "lat": 15.015938,
      "lon": 100.863294,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.210566343383235,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปากช่อง",
      "station_code": "STN0709",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.985409,
      "lon": 100.644548,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.5286606078379,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเทพหัสดิน",
      "station_code": "ridtele_TKgt55",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.482574,
      "lon": 101.005786,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.234649840438314,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะ สมาร์ทซิตี้ ชลบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านชะอม (บำรุงธรรม)",
      "station_code": "G09006-TC150605",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.407605,
      "lon": 101.10499,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.820722626583926,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติเขาน้ำค้าง",
      "station_code": "MOU138",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.600056,
      "lon": 100.58906,
      "rainfall_mm": 3.4,
      "value_text": "3.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.43381666900714,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อาคารเวทีกลางสระบัว",
      "station_code": "TH27",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.21373,
      "lon": 100.58728,
      "rainfall_mm": 3.4,
      "value_text": "3.4 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.94079121983301,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ฉะเชิงเทรา",
      "station_code": "48458",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.51556,
      "lon": 101.45833,
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.754779544208294,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.หน้าควน",
      "station_code": "ridtele_TSL25",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98573,
      "lon": 100.459,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.230736010416173,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานหลวงพ่อเปิ่น",
      "station_code": "G09006-TA130205",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.898843,
      "lon": 100.21246,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.51811631842439,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะเดา",
      "station_code": "SLA003",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.796687,
      "lon": 100.44239,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.230396811100928,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.หนองแขม",
      "station_code": "RF.NKM.01",
      "province": "กรุงเทพมหานคร",
      "district": "หนองแขม",
      "lat": 13.70574,
      "lon": 100.34931,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.713296607390966,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ขนิลเหนือ",
      "station_code": "STN0115",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.800055,
      "lon": 98.792621,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.89283428146734,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "T ขนงพระ",
      "station_code": "ridtele_TM-R1",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.60594,
      "lon": 101.45677,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.319514137571055,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังน้ำเขียว",
      "station_code": "WNKH",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.37476,
      "lon": 101.86537,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.02662947022679,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านสองพี่น้อง",
      "station_code": "STN1800",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.77487,
      "lon": 100.422722,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.930225487273518,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีอ่างเก็บน้ำสะเดา",
      "station_code": "ridtele_STN13",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.58059,
      "lon": 100.496473,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.117215509349037,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "นาทวี",
      "station_code": "JNA002",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.738124,
      "lon": 100.69319,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.8139582811628,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองลาดพร้าว วัดบางบัว",
      "station_code": "BKK021",
      "province": "กรุงเทพมหานคร",
      "district": "บางเขน",
      "lat": 13.85402,
      "lon": 100.58746,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.837600556856398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านประธานสภา หมู่ 5",
      "station_code": "TD60",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.1272,
      "lon": 100.04932,
      "rainfall_mm": 2.8,
      "value_text": "2.8 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.88203537235225,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพุบอนบน",
      "station_code": "STN0791",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.390971,
      "lon": 99.499611,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.74914784453526,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ทวีวัฒนา",
      "station_code": "RF.TWW.01",
      "province": "กรุงเทพมหานคร",
      "district": "ทวีวัฒนา",
      "lat": 13.77281,
      "lon": 100.35324,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.181928075803206,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนหนองสาหร่าย (สะพานขาว)",
      "station_code": "STN2201",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.717627,
      "lon": 101.430923,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.64241403638004,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านขนงพระใต้",
      "station_code": "STN0985",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.618429,
      "lon": 101.443977,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.90200011806768,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกล่าม",
      "station_code": "STN1900",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.06926,
      "lon": 102.631423,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.4696895239987,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองบัว-ทางรถไฟ",
      "station_code": "RF.TLC.02",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.79974,
      "lon": 100.41609,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.223486680660308,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านดง",
      "station_code": "STN1790",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.321565,
      "lon": 101.306075,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95365547083031,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโป่งก้อนเส้า",
      "station_code": "STN0275",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.491639,
      "lon": 101.135569,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.17227616803731,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ดอนฉิมพลี",
      "station_code": "DKLG",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.90535,
      "lon": 100.97028,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.480895715006135,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางปะอิน",
      "station_code": "CPY012",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.30455,
      "lon": 100.56645,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.998524231584936,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางครก",
      "station_code": "BNPK",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.19867,
      "lon": 99.95052,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.68430691375189,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สมุทรสงคราม",
      "station_code": "48438",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.40778,
      "lon": 100.03222,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.39908310017906,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองมะค่า",
      "station_code": "NMKH",
      "province": "ลพบุรี",
      "district": "โคกเจริญ",
      "lat": 15.4321,
      "lon": 100.9245,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.147470169810376,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์ป้องกันและบรรเทาสาธารณภัยเกาะล้าน",
      "station_code": "TJ11",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.91415,
      "lon": 100.76807,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.661566990988423,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการชุมชนเกาะล้าน",
      "station_code": "TJ09",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.92127,
      "lon": 100.78802,
      "rainfall_mm": 2.3,
      "value_text": "2.3 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.690468831113463,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองอู่ตะเภา",
      "station_code": "ONE037",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.134997,
      "lon": 100.45321,
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.45953341454558,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ลำตะคอง",
      "station_code": "MOU263",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.735245,
      "lon": 101.3785,
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.696235786638894,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานห้วยแม่ตาช้าง",
      "station_code": "MOU010",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.771976,
      "lon": 98.862595,
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.3732617114831,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สนามฟุตบอล ม.1",
      "station_code": "TJ04",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16044,
      "lon": 100.80563,
      "rainfall_mm": 2.1,
      "value_text": "2.1 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.5851746337789,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บางตะบูนและบางตะบูนออก",
      "station_code": "GLF003",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.26553,
      "lon": 99.9418,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.45314445360332,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานบ้านนาลาน",
      "station_code": "G09006-TC221203",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.625225,
      "lon": 100.06116,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.020120844913755,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกะดุ",
      "station_code": "STN2063",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.632195,
      "lon": 100.06077,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.248179796434606,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองป่าหวาย",
      "station_code": "STN0139",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.978503,
      "lon": 101.399368,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.900892575962452,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนบ้านท่าหรั่ง",
      "station_code": "STN2059",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.107131,
      "lon": 100.198006,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.96825900252832,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.173A",
      "station_code": "ridtele_STN09",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.823388,
      "lon": 100.438339,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.309935439438394,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ฝายชะมวง",
      "station_code": "ridtele_TSL22",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.122886,
      "lon": 100.225213,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.571654754896397,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ นสล. 1 (ซับปลากั้ง)",
      "station_code": "MOU411",
      "province": "สระบุรี",
      "district": "วิหารแดง",
      "lat": 14.412701,
      "lon": 100.97773,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.505517398800027,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักกูด",
      "station_code": "STN1655",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.818632,
      "lon": 101.038965,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.462268614614038,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คอหงษ์ สกษ.",
      "station_code": "48571",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.0,
      "lon": 100.5,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.499796057973093,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้อยสว่าง",
      "station_code": "LK13",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.1652,
      "lon": 100.77855,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.28296324638516,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "TJ05 - อาคารเอนกประสงค์เกาะขามใหญ่ ต.ท่าเทววงษ์ อ.เกาะสีชัง จ.ชลบุรี",
      "station_code": "TJ05",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16563,
      "lon": 100.8214,
      "rainfall_mm": 1.9,
      "value_text": "1.9 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.727372111208721,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางขวัญ",
      "station_code": "BKWN",
      "province": "ฉะเชิงเทรา",
      "district": "เมืองฉะเชิงเทรา",
      "lat": 13.74984,
      "lon": 101.07751,
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.535304371354172,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เกาะสีชัง",
      "station_code": "48460",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16167,
      "lon": 100.80194,
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.980585146406192,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
      "station_code": "MOU121",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.768159,
      "lon": 100.97308,
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.509787632138606,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองนางรอง",
      "station_code": "MOU461",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.315195,
      "lon": 101.312836,
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.79263454648103,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่นาไทร",
      "station_code": "MOU007",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.794664,
      "lon": 98.832344,
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-11-01 16:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.407156077101288,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บางกล่ำ",
      "station_code": "SLA007",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.079418,
      "lon": 100.42788,
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.910660310627168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานนครชัยศรี",
      "station_code": "THA008",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79217,
      "lon": 100.19817,
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.81450504933709,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนไทยรัฐวิทยา108 (บ้านสำนักทอง)",
      "station_code": "G09006-TA170301",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.76531,
      "lon": 101.48041,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.985545056386992,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองนาเกลือ",
      "station_code": "G09006-TA170102",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.97109,
      "lon": 100.9112,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.192582855631537,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าช้างเหนือ",
      "station_code": "STN1912",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.547743,
      "lon": 101.420603,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.2052987960418,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทับยาง",
      "station_code": "STN1713",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.589842,
      "lon": 100.813667,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.51430061148113,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "องค์การบริหารส่วนตาบลบุพราหมณ์",
      "station_code": "CP02",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.281191,
      "lon": 101.897031,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.68882401014099,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามแม่น้ำเพชรบุรีที่ อบต.บางครก",
      "station_code": "G09006-TA180308",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.183788,
      "lon": 99.949989,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.07969627879459,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่ศรีจำปา",
      "station_code": "STN1588",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.907834,
      "lon": 102.377541,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.99937521772513,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองกะโตวา",
      "station_code": "STN1475",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.718076,
      "lon": 101.364047,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.67264192258456,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองทวีวัฒนา",
      "station_code": "RF.TWW.02",
      "province": "นครปฐม",
      "district": "พุทธมณฑล",
      "lat": 13.80042,
      "lon": 100.32959,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.27120039664175,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกแสมสาร",
      "station_code": "STN0675",
      "province": "ลพบุรี",
      "district": "โคกเจริญ",
      "lat": 15.336768,
      "lon": 100.831599,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.21491903883384,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองสอง",
      "station_code": "STN0216",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.37957,
      "lon": 101.849891,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.62875175543822,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองทุเรียน",
      "station_code": "STN0505",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.732478,
      "lon": 100.800317,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.6828614219267,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เสนา",
      "station_code": "CPY017",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.31976,
      "lon": 100.37952,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.846600860267063,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าอ่างช้างน้ำ",
      "station_code": "MOU468",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.2743,
      "lon": 101.082,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.65685867509546,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านบึง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานเขานางบวช",
      "station_code": "NYK008",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.245718,
      "lon": 101.27481,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.94713605347155,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศรีจุฬา",
      "station_code": "BSCL",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.07064,
      "lon": 101.13746,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.22230027714344,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๑๗ (กลางดง)",
      "station_code": "MOU106",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.549575,
      "lon": 101.26519,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.89681274800726,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนตากวน-อ่าวประดู่ เขตเทศบาลเมืองมาบตาพุต",
      "station_code": "EB03",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.67415,
      "lon": 101.17208,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.349139542633666,
      "nearest_estate": "ท่าเรืออุตสาหกรรมมาบตาพุด",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองวังตะไคร้",
      "station_code": "MOU462",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.321305,
      "lon": 101.30604,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95471174698642,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": " สะพานข้ามคลองโคน",
      "station_code": "PTTEP1",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3319,
      "lon": 99.96896,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.11919849605185,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ประปาหมู่บ้าน หมู่ 8",
      "station_code": "TB81",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.32514,
      "lon": 101.07687,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.871180193723266,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าเขาช่องลม",
      "station_code": "MOU120",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.157225,
      "lon": 101.11463,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.8525868457705155,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ทต.หนองบัว",
      "station_code": "NGBA",
      "province": "นครสวรรค์",
      "district": "หนองบัว",
      "lat": 15.87077,
      "lon": 100.59734,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.160641045515042,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นครชัยศรี",
      "station_code": "TANA",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79036,
      "lon": 100.19051,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.627858011376595,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รร.วัดอู่ข้าว",
      "station_code": "RSK7",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.19111,
      "lon": 100.75421,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.710907497810883,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองยาง",
      "station_code": "ridtele_TKgt67",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.824059,
      "lon": 102.177858,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.05199931078047,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับใต้",
      "station_code": "STN1479",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.542774,
      "lon": 101.243758,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.94354132561136,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำปิงที่ อ.จอมทอง",
      "station_code": "BBU01",
      "province": "เชียงใหม่",
      "district": "ดอยหล่อ",
      "lat": 18.435266,
      "lon": 98.740107,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.409006009977226,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.บางนกแขวก",
      "station_code": "ridtele_TMK03",
      "province": "สมุทรสงคราม",
      "district": "บางคนที",
      "lat": 13.500218,
      "lon": 99.927311,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.381578695174895,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกทัง",
      "station_code": "STN0134",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.981245,
      "lon": 100.592958,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.90713751571804,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดชะอม",
      "station_code": "ridtele_TKgt49",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.102239,
      "lon": 101.747066,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.918786058419883,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองหกวา ลำลูกกา คลอง8",
      "station_code": "BKK015",
      "province": "ปทุมธานี",
      "district": "ลำลูกกา",
      "lat": 13.9416,
      "lon": 100.77499,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.087742962577927,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาคันทรง",
      "station_code": "STN1653",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.11583,
      "lon": 101.167548,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.5535112929361043,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเหมืองฟู",
      "station_code": "STN1995",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.663346,
      "lon": 98.82618,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.262733753883648,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ทม.สะเดา",
      "station_code": "TSDO",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63837,
      "lon": 100.42479,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.803452650452002,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทับทุ่ง",
      "station_code": "ridtele_LA09 (TLA-R2)",
      "province": "สตูล",
      "district": "ทุ่งหว้า",
      "lat": 7.135542,
      "lon": 99.937038,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.75160249035965,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนาวัง",
      "station_code": "STN1654",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.998358,
      "lon": 101.005843,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.582213245492624,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพรุเตาะนอก",
      "station_code": "STN0580",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.040102,
      "lon": 100.536696,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.84017165230821,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.พระอินทราชา",
      "station_code": "ATG091",
      "province": "พระนครศรีอยุธยา",
      "district": "วังน้อย",
      "lat": 14.14407,
      "lon": 100.62136,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.861758952956861,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระอินทราชา",
      "station_code": "ATG092",
      "province": "พระนครศรีอยุธยา",
      "district": "วังน้อย",
      "lat": 14.14378,
      "lon": 100.62075,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.862570238737058,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองยาง",
      "station_code": "MOU465",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.324904,
      "lon": 101.84176,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.6302054783819,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "วัดคลองคันโท",
      "station_code": "ONE100",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.94595,
      "lon": 102.28505,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.16856990409531,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "มัสยิดบาฮาอุดดิน(บ้าลุ่ม) หมู่ 1",
      "station_code": "TF43",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63612,
      "lon": 100.43751,
      "rainfall_mm": 0.7,
      "value_text": "0.7 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.809877143401716,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.เขาทอง",
      "station_code": "BKDN",
      "province": "นครสวรรค์",
      "district": "พยุหะคีรี",
      "lat": 15.5707,
      "lon": 100.18319,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.77788461109181,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สุพรรณบุรี",
      "station_code": "48425",
      "province": "สุพรรณบุรี",
      "district": "เมืองสุพรรณบุรี",
      "lat": 14.47444,
      "lon": 100.13889,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.2111914571275,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ลาดชะโด (ทุ่งผักไห่)",
      "station_code": "TCP003",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.464386,
      "lon": 100.366005,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.887388401638866,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตห้ามล่าสัตว์ป่าแก่งคอย",
      "station_code": "MOU427",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.5439,
      "lon": 101.0983,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.221869640809718,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านโป่ง",
      "station_code": "RAJ002",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.81866,
      "lon": 99.86508,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.232421477602117,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวเกาะ",
      "station_code": "ridtele_TK.55A",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.830933,
      "lon": 99.86531,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.59486055953551,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำลัด",
      "station_code": "STN2060",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.62954,
      "lon": 100.442957,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.275678327210088,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.บึงใหญ่-วัดทองสัมฤทธิ์",
      "station_code": "RF.MBR.05",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.80045,
      "lon": 100.78827,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.693135526894494,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ศาลากลางอ่างทอง",
      "station_code": "G09006-TA100217",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.59002,
      "lon": 100.45375,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.943009467906187,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับสมบูรณ์",
      "station_code": "STN1526",
      "province": "นครสวรรค์",
      "district": "ไพศาลี",
      "lat": 15.566287,
      "lon": 100.778566,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.12659666215714,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองทราย",
      "station_code": "STN0777",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.364402,
      "lon": 101.757113,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.631223481902786,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านต้นปริง",
      "station_code": "STN0015",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.902962,
      "lon": 100.574471,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.429097174626868,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.เก้า-วัดศรีสุขฯ",
      "station_code": "RF.KSW.03",
      "province": "กรุงเทพมหานคร",
      "district": "คลองสามวา",
      "lat": 13.92046,
      "lon": 100.79228,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.04108543228314,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านไร่",
      "station_code": "STN0211",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.047374,
      "lon": 100.629514,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.08095907800218,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้าน กม.80",
      "station_code": "STN1592",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.317818,
      "lon": 101.837874,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.88540679282871,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวควน",
      "station_code": "STN1605",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.526957,
      "lon": 100.512131,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.009850932620274,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์กู้ภัยทางทะเลและชายฝั่งวงศ์อมาตย์ หมู่ 5",
      "station_code": "TJ13",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.9578,
      "lon": 100.88441,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.475414165455161,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านป่าเห่ว",
      "station_code": "STN0647",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.685728,
      "lon": 99.471365,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.134987561246035,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปางปง-ปางทราย",
      "station_code": "STN0246",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.427697,
      "lon": 99.266721,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.664184881715943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคูนายสังข์",
      "station_code": "STN0220",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.833787,
      "lon": 100.617833,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.46182522235307,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหว้าหลัง",
      "station_code": "STN1691",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.644711,
      "lon": 100.734254,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.219863971960265,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่เลียงพัฒนา",
      "station_code": "STN0144",
      "province": "ลำปาง",
      "district": "เสริมงาม",
      "lat": 18.18034,
      "lon": 99.165629,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.48851735893484,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านหนองมะค่า",
      "station_code": "G09006-TA120601",
      "province": "ลพบุรี",
      "district": "โคกเจริญ",
      "lat": 15.434756,
      "lon": 100.919267,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.51738681892557,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยกองเลาะ",
      "station_code": "STN0434",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.250809,
      "lon": 98.91515,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.30608381966317,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนมิตรสัมพันธ์",
      "station_code": "STN1974",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.952748,
      "lon": 100.91541,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.310005487503117,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนชัยพรราชา",
      "station_code": "STN1973",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.96831,
      "lon": 100.92304,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.472632961201965,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนกำแพงแสนวิทยา",
      "station_code": "G09006-TA130212",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 13.983065,
      "lon": 99.997337,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.608667133478676,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดผาสุการาม(สุวรรณวิทยาคาร)",
      "station_code": "G09006-TA170101",
      "province": "ชลบุรี",
      "district": "เมืองชลบุรี",
      "lat": 13.33491,
      "lon": 101.00103,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.63290791706227,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติตาพระยา",
      "station_code": "MOU470",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.13271,
      "lon": 102.66787,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.07201240323685,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านเหมืองแร่",
      "station_code": "ONE088",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.880652,
      "lon": 101.784584,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.50258179986661,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "นครปฐม",
      "station_code": "48451",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 14.01167,
      "lon": 99.97,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.5977605723089,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.กำแพงแสน",
      "station_code": "KSKP",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 14.00326,
      "lon": 99.98091,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.07779839285101,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเจริญราษฎร์รังสรรค์",
      "station_code": "MOU463",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.067594,
      "lon": 101.75532,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.53868284110217,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อบต.ดอนชะเอม",
      "station_code": "DNCM",
      "province": "กาญจนบุรี",
      "district": "ท่ามะกา",
      "lat": 13.96196,
      "lon": 99.80394,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.4425024286866,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พระรามสอง",
      "station_code": "MKG006",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.38362,
      "lon": 99.9836,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.19079991757201,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๔ (คลองปลากั้ง)",
      "station_code": "MOU111",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.356375,
      "lon": 101.72591,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.819754870491224,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "รพ. ส่งเสริมสุขภาพ บ้าน น้ำปาด",
      "station_code": "TD53",
      "province": "พิษณุโลก",
      "district": "เนินมะปราง",
      "lat": 16.70876,
      "lon": 100.57362,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.613132823947964,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.พิจิตร",
      "station_code": "NPCT",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.98768,
      "lon": 100.57162,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.488954741504234,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เทศบาลเมืองมาบตาพุด",
      "station_code": "TJ23",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.72456,
      "lon": 101.12732,
      "rainfall_mm": 0.3,
      "value_text": "0.3 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.7683030605670476,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองบางน้ำผึ้ง",
      "station_code": "BKC006",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.676648,
      "lon": 100.58207,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.614992020981914,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองพระยาบรรลือ",
      "station_code": "CPY016",
      "province": "พระนครศรีอยุธยา",
      "district": "ลาดบัวหลวง",
      "lat": 14.16476,
      "lon": 100.30725,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.819479632166193,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วังทอง",
      "station_code": "NAN013",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.8222,
      "lon": 100.43159,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.73752831943657,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ปางกู่",
      "station_code": "SOKL",
      "province": "หนองบัวลำภู",
      "district": "โนนสัง",
      "lat": 17.01999,
      "lon": 102.59124,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.37359449364129,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เทศบาลตำบลหอไกร",
      "station_code": "BMNK",
      "province": "พิจิตร",
      "district": "บางมูลนาก",
      "lat": 16.04947,
      "lon": 100.37354,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.34579668119612,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พนมสารคาม",
      "station_code": "BPK004",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.72662,
      "lon": 101.35298,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.70008602758719,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองป่าพรุพ้อ",
      "station_code": "MOU136",
      "province": "พัทลุง",
      "district": "ป่าบอน",
      "lat": 7.162198,
      "lon": 100.08452,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.867398487093766,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานอนุสรณ์ 100 ปีสิงห์บุรี (สะพานหลวงพ่อแพ 89)",
      "station_code": "HDA006",
      "province": "สิงห์บุรี",
      "district": "เมืองสิงห์บุรี",
      "lat": 14.870205,
      "lon": 100.408585,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.8907144661931,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รพ.สต.บ้านชากหมาก",
      "station_code": "ONE090",
      "province": "ระยอง",
      "district": "บ้านฉาง",
      "lat": 12.796795,
      "lon": 101.027664,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.106499164490682,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดบ้านห้วยชัน",
      "station_code": "ONE077",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.98736,
      "lon": 102.43794,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.889603296860976,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ลาย – แม่ออน",
      "station_code": "MOU274",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.867105,
      "lon": 99.31434,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.47203362888489,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สงขลา",
      "station_code": "48568",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.18211,
      "lon": 100.60769,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.49404463391094,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ จซ.7 (ดอยล้าน)",
      "station_code": "MOU354",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.85619,
      "lon": 99.367165,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.78256897832434,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "จะนะ",
      "station_code": "JNA001",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.916742,
      "lon": 100.72962,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.06762398773943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เลียง ",
      "station_code": "MOU308",
      "province": "ลำปาง",
      "district": "เสริมงาม",
      "lat": 18.169743,
      "lon": 99.18275,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.129143527401745,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยโป่ง",
      "station_code": "RES015",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.34001,
      "lon": 98.93681,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.224238503714474,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "TJ14 - ศูนย์ประสานงานการช่วยเหลือผู้ประสบภัย ทางทะเล หมู่ 1 ต.นาเกลือ อ.บางละมุง จ.ชลบุรี",
      "station_code": "TJ14",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.99171,
      "lon": 100.92182,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.884259043741018,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดบ่อทรัพย์  หมู่ 2",
      "station_code": "TH26",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.19208,
      "lon": 100.57474,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.308980998149355,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "พระนครศรีอยุธยา",
      "station_code": "CPY011",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.36913,
      "lon": 100.52861,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.195312328999318,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ป่าต้นน้ำคลองมะเดื่อ อช.เขาใหญ่ (นางรอง)",
      "station_code": "ONWR02",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.3693,
      "lon": 101.2712,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.64308020943391,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองช่องสะเดา",
      "station_code": "HDA004",
      "province": "พระนครศรีอยุธยา",
      "district": "อุทัย",
      "lat": 14.344762,
      "lon": 100.670105,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.71905854693515,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองระพีพัฒน์แยกตก",
      "station_code": "CAN001",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.20612,
      "lon": 100.74476,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.195758700698022,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยซับเหล็ก",
      "station_code": "TBW034",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.814826,
      "lon": 100.77581,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.73106564587656,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ปด.8 (พระปรง)",
      "station_code": "MOU466",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 14.00969,
      "lon": 102.4258,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.68883060174405,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หาดถ้ำพัง หมู่ 3",
      "station_code": "TJ07",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.14628,
      "lon": 100.80699,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.511528792919691,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์ อปพร นครเชียงใหม่",
      "station_code": "TH69",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.77386,
      "lon": 98.9799,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.037579683999095,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาปลาดุก ม.5",
      "station_code": "FL01",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.49536,
      "lon": 99.20316,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.83250537963344,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาโขดปอสามัคคี ชุมชนเนินพระ",
      "station_code": "TJ17",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.674546,
      "lon": 101.244718,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.15893541405464,
      "nearest_estate": "ท่าเรืออุตสาหกรรมมาบตาพุด",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่ามะปราง",
      "station_code": "NF01",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51634,
      "lon": 101.3774,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.527456272396115,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก้มอ้น",
      "station_code": "STN1791",
      "province": "ราชบุรี",
      "district": "จอมบึง",
      "lat": 13.745911,
      "lon": 99.464418,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.37418896744573,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดบ้านดง หมู่ 1",
      "station_code": "TB76",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.316932,
      "lon": 101.289112,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.24370758413663,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกำนันถาวร",
      "station_code": "TB77",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.32059,
      "lon": 101.30466,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.82136051988167,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองเพล ม.17",
      "station_code": "TC11",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51906,
      "lon": 101.37222,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.90620485120995,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกุดคล้า หมู่ 5",
      "station_code": "TC12",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.53333,
      "lon": 101.37094,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.34477948813859,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังโต่งโต้น หมู่ 11",
      "station_code": "TC14",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51005,
      "lon": 101.4128,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.378957321579485,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อู่ซ่อมรถ บ้านสุขสมบูรณ์ หมู่ 2",
      "station_code": "TB92",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.347167,
      "lon": 101.94108,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.5318997064484,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผู้ใหญ่บ้าน บ้านบุไทร หมู่ 4",
      "station_code": "TB93",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.37899,
      "lon": 101.90262,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.57972039805713,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์ หมู่ 5 บ้านหนองจอก",
      "station_code": "TD97",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.42534,
      "lon": 99.44951,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.297411549262385,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์ หมู่ 7",
      "station_code": "TD99",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.45788,
      "lon": 99.44012,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.59469414361081,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์บ้านป่าเหว ม.3",
      "station_code": "TE22",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.67984,
      "lon": 99.47343,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.20449128619521,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์บ้านขอใต้ หมู่ 4",
      "station_code": "TE23",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.64634,
      "lon": 99.47241,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.45840553015746,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์ หมู่ 2 (ติดกับโรงเรียนบ้านทุ่งสะแกง)",
      "station_code": "TE24",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.70853,
      "lon": 99.48497,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.150260325485704,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาชมภู (วัด) หมู่ 4",
      "station_code": "TE41",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.51201,
      "lon": 99.21359,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.873111363604046,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาสองท่า หมู่ 7",
      "station_code": "TE42",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.53423,
      "lon": 99.24249,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.79034979844632,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ประปาหมู่บ้าน หมู่ 13",
      "station_code": "TE43",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.53599,
      "lon": 99.25123,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.61811695343895,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาทุ่งหลวง หมู่ 1",
      "station_code": "TE45",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.42175,
      "lon": 99.01306,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.19909326804081,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์ หมู่ 10 บ้านปึก",
      "station_code": "TH28",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 7.08826,
      "lon": 100.68253,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.70827731395123,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "องค์การบริหารส่วนตำบลสะกอม",
      "station_code": "TF52",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.94193,
      "lon": 100.80005,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.14720510943621,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "มัสยิดนูรุสซอละ (บ้านม่วง)  หมู่ 3",
      "station_code": "TF45",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.624953,
      "lon": 100.47444,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.425828817146817,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่พัฒนา หมู่ 10",
      "station_code": "TE79",
      "province": "สระแก้ว",
      "district": "เขาฉกรรจ์",
      "lat": 13.541551,
      "lon": 101.95172,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.362706902722444,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเลขที่ 29/2 หมู่ 1",
      "station_code": "TE92",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.907274,
      "lon": 99.880561,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.67781827632225,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเลขที่ 221 หมู่ 8 ประปาหมู่บ้าน",
      "station_code": "TE93",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.87701,
      "lon": 99.86265,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.327016176383665,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "เทศบาลนครเชียงใหม่",
      "station_code": "TH72",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.79495,
      "lon": 98.99888,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.82755324608657,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์สื่อสารจราจร",
      "station_code": "TH73",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.7887,
      "lon": 99.00316,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.063463003458864,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์เยาวชน-ประชาชน(สนามกีฬาเทศบาลนครเชียงใหม่)",
      "station_code": "TH74",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.80056,
      "lon": 98.98863,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.660253033333774,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "งานรักษาความสงบเรียบร้อยและความมั่นคง",
      "station_code": "TH75",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.79991,
      "lon": 99.00098,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.330839147941596,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ซุ้มเทศบาลหน้าวัดพระสิงห์วรมหาวิหาร",
      "station_code": "TH71",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.78805,
      "lon": 98.9824,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.474802589147924,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สำนักงานปภ.เทศบาลนครเชียงใหม่ (หน่วยช้างเผือก)",
      "station_code": "TH68",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.801082,
      "lon": 98.981712,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.89211755848204,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สำนักงานตำรวจภาค 5",
      "station_code": "TH66",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.76043,
      "lon": 98.99815,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.08698645876541,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "งานรักษาความสะอาดแขวงศรีวิชัย",
      "station_code": "TH70",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.77458,
      "lon": 98.98772,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.881989836942026,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ปตร กุฎิ (ทุ่งป่าโมก)",
      "station_code": "TCP006",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.412405,
      "lon": 100.40116,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.629065557313126,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ลาดชิด (ทุ่งผักไห่)",
      "station_code": "TCP004",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.44056,
      "lon": 100.35738,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.22916357558414,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.บางแก้ว (ทุ่งผักไห่)",
      "station_code": "TCP005",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.436604,
      "lon": 100.37149,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.845110037519646,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทรบ. ปากคลองห้าวา (ทุ่งท่าวุ้ง)",
      "station_code": "TCP010",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.818599,
      "lon": 100.576515,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.67026197358812,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามแม่น้ำน้อย (ทุ่งผักไห่)",
      "station_code": "TCP013",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.498449,
      "lon": 100.36825,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.509585135609612,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานสวนเฉลิมพระเกียรติ 72 พรรษามหาราชินี",
      "station_code": "ONE038",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.182746,
      "lon": 100.59448,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.35698288447142,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดบ้านโป่ง",
      "station_code": "ONE062",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.934848,
      "lon": 100.99091,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.493648713330077,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดหนองน้ำเขียว",
      "station_code": "ONE063",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.234701,
      "lon": 101.11684,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.817839662436686,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สำนักสงฆ์โสธรรมนิมิตร",
      "station_code": "ONE064",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.168441,
      "lon": 101.03034,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.512657119107435,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดวังปลาช่อน",
      "station_code": "ONE078",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.242124,
      "lon": 99.65333,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.81915636894548,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านหนองอ้อน้อย",
      "station_code": "ONE105",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.356909,
      "lon": 102.60082,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.65472762753163,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนหนองแวงจุมพล",
      "station_code": "ONE106",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.041039,
      "lon": 102.62484,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.223225531528975,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เขาน้อย",
      "station_code": "CG01",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.322683,
      "lon": 101.293798,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.628650685880636,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดปลวกง่าม",
      "station_code": "FH06",
      "province": "พิษณุโลก",
      "district": "เนินมะปราง",
      "lat": 16.68676,
      "lon": 100.60045,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 10:20",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.674009630615416,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ว่าการอำเภอเมือง",
      "station_code": "CC01",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.79858,
      "lon": 100.65299,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.933600402440476,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์สาธารณสุขมูลฐาน หมู่ 9",
      "station_code": "TE33",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.42593,
      "lon": 99.26722,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.82685133752198,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท้องฝาย หมู่ 3",
      "station_code": "TE47",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.42159,
      "lon": 99.02984,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.987801807227864,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการ อบต. ป่าขะ",
      "station_code": "CG02",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.301295,
      "lon": 101.07008,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.27979204659398,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต. งื้วราย",
      "station_code": "FT02",
      "province": "พิจิตร",
      "district": "ตะพานหิน",
      "lat": 16.245528,
      "lon": 100.412673,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.221752281247326,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ป้ายทางเข้าอุทยาน ฯ ปางสีดา",
      "station_code": "ET02",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.97827,
      "lon": 102.20292,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.42745390227255,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตห้ามล่าสัตว์ป่าดอยพระบาท",
      "station_code": "MOU320",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.616037,
      "lon": 99.49938,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.973657272477844,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองครก",
      "station_code": "MOU480",
      "province": "จันทบุรี",
      "district": "แก่งหางแมว",
      "lat": 13.1851,
      "lon": 101.801,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 15:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.75867825012914,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำลัด",
      "station_code": "STN1810",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.430578,
      "lon": 98.66912,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.24698576206503,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองห่าย",
      "station_code": "STN1811",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.453694,
      "lon": 98.729318,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.41808696338698,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบ่อต้นแซะ",
      "station_code": "STN2058",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.897362,
      "lon": 100.77132,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.06590911252587,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถ้ำกองเพล",
      "station_code": "STN1894",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.23537,
      "lon": 102.533205,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.926963502623934,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทับกุง",
      "station_code": "STN1898",
      "province": "อุดรธานี",
      "district": "หนองแสง",
      "lat": 17.166869,
      "lon": 102.767568,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.743672473964494,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผาสิงห์",
      "station_code": "STN1901",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.192038,
      "lon": 102.655523,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.194461805100175,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยน้ำดำ",
      "station_code": "STN1915",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.858916,
      "lon": 100.031146,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.89815350010758,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเหนือคลอง",
      "station_code": "STN1917",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.982381,
      "lon": 100.019556,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.66249817066509,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำตกแม่กลาง",
      "station_code": "STN1978",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.48915,
      "lon": 98.672086,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.49289673374737,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าต้นกวาว",
      "station_code": "STN1996",
      "province": "เชียงใหม่",
      "district": "สารภี",
      "lat": 18.719945,
      "lon": 99.071511,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.596880131666625,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านขอใต้",
      "station_code": "STN2009",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.65129,
      "lon": 99.47465,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.76805679540487,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งสะแกง",
      "station_code": "STN2010",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.699913,
      "lon": 99.483582,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.76035745632954,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าโปร่ง",
      "station_code": "STN2036",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.835209,
      "lon": 100.460953,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.0344717749169,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังสายทอง",
      "station_code": "STN2064",
      "province": "สตูล",
      "district": "มะนัง",
      "lat": 7.098653,
      "lon": 99.917802,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.801458400015285,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดศรีหมากหญ้า",
      "station_code": "NWSO",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.250784,
      "lon": 102.60559,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.05288345425053,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองบ้านท่าวัง",
      "station_code": "PLG001",
      "province": "พัทลุง",
      "district": "บางแก้ว",
      "lat": 7.37654,
      "lon": 100.10043,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.95749858969102,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานแม่น้ำทา",
      "station_code": "PIN007",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.546852,
      "lon": 99.25007,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.197415007222318,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำทา",
      "station_code": "PIN008",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.471687,
      "lon": 98.95513,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.36387841872487,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำลี้ บ้านโฮ่ง",
      "station_code": "PIN009",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.310793,
      "lon": 98.82355,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.00045685599943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บริเวณวัดศรีโพธิ์ทอง (วัดบ้านกระเดียง)",
      "station_code": "CP03",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.123532,
      "lon": 101.841568,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.43748229741365,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "TC.29",
      "station_code": "ridtele_TC.29",
      "province": "พระนครศรีอยุธยา",
      "district": "บางไทร",
      "lat": 14.194611,
      "lon": 100.502528,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.507073433779725,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TC.7A",
      "station_code": "ridtele_TC.7A",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.590528,
      "lon": 100.455139,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.85625363859412,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "T.ปตร.เริงราง",
      "station_code": "ridtele_T.RoengrangRegulator",
      "province": "สระบุรี",
      "district": "บ้านหมอ",
      "lat": 14.653581,
      "lon": 100.741418,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.070370866432956,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "T.ปตร.โคกกะเทียม",
      "station_code": "ridtele_T.KhokkatiemRegulator",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.900254,
      "lon": 100.596256,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.69166614464557,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "T.ปตร.ลพบุรี",
      "station_code": "ridtele_T.LopburiRegulator",
      "province": "สิงห์บุรี",
      "district": "เมืองสิงห์บุรี",
      "lat": 14.862979,
      "lon": 100.417662,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.74916932957479,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TL.2B",
      "station_code": "ridtele_TL.2B",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.7605,
      "lon": 100.598946,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.15369049501573,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายเขื่อนป่าสัก",
      "station_code": "ridtele_TS.11",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.833816,
      "lon": 101.085013,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.68534297875967,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อ.แก่งคอย จ.สระบุรี",
      "station_code": "ridtele_TS.9",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.628168,
      "lon": 101.014474,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.7890787511913663,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "T.ปตร.พระศรีเสาวภาค",
      "station_code": "ridtele_T.PhrasrisaowaphakRegulator",
      "province": "สระบุรี",
      "district": "หนองแค",
      "lat": 14.331174,
      "lon": 100.875548,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.841787350148198,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่ริม (P.21) บ้านริมใต้",
      "station_code": "ridtele_TP.21",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.927775,
      "lon": 98.93992,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.64150477147685,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีแม่น้ำปิง (P.1) สะพานนวรัฐ",
      "station_code": "ridtele_TP.1",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.787005,
      "lon": 99.005066,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.84416942539745,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่กวง (P.81) บ้านโป่ง",
      "station_code": "ridtele_TP.81",
      "province": "เชียงใหม่",
      "district": "สารภี",
      "lat": 18.695305,
      "lon": 99.078566,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.245566345127584,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่ออน (P.86) บ้านโฮ้ง",
      "station_code": "ridtele_TP.86",
      "province": "เชียงใหม่",
      "district": "สันกำแพง",
      "lat": 18.739453,
      "lon": 99.21865,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.464851328237682,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่กวง (P.5)",
      "station_code": "ridtele_TP.5",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.580545,
      "lon": 99.00995,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.7425265814109285,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีวัดน้ำฝน ศูนย์วิจัยข้าวสะเมิง",
      "station_code": "ridtele_TUP.20",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.847989,
      "lon": 98.76924,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.30122852521417,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่ทา (P.77) บ้านสบสะป๊วด",
      "station_code": "ridtele_TP.77",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.42957,
      "lon": 99.083816,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 13:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.495627383523832,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่กวง (P.79) บ้านแม่หวาน",
      "station_code": "ridtele_TP.79",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.96465,
      "lon": 99.237049,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.475130715993295,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่ลาย (P.80) บ้านโป่งดิน",
      "station_code": "ridtele_TP.80",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.916133,
      "lon": 99.235938,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.70966429560386,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีน้ำแม่ริม (P.93) บ้านสลวงนอก",
      "station_code": "ridtele_TP.93",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 19.015092,
      "lon": 98.880613,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.798716145828315,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก้วสุวรรณ จ.กำแพงเพชร",
      "station_code": "ridtele_12237",
      "province": "กำแพงเพชร",
      "district": "ไทรงาม",
      "lat": 16.495525,
      "lon": 99.843679,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.72949434307963,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อ.สามง่าม จ.พิจิตร",
      "station_code": "ridtele_TY.17",
      "province": "พิจิตร",
      "district": "สามง่าม",
      "lat": 16.508553,
      "lon": 100.203704,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.447636378630097,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเกยไชย",
      "station_code": "ridtele_TN.67",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.868667,
      "lon": 100.264222,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.61587991533639,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดนกแอ่น",
      "station_code": "ridtele_TN.24",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.84789,
      "lon": 100.51197,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.12257022484412,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อ.เมือง จ.พิจิตร",
      "station_code": "ridtele_TN.7A",
      "province": "พิจิตร",
      "district": "เมืองพิจิตร",
      "lat": 16.469355,
      "lon": 100.330766,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.68559458565156,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อำเภอวังทอง",
      "station_code": "ridtele_TNwt.22",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.822756,
      "lon": 100.432851,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.87841900127066,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าพระจันทร์",
      "station_code": "ridtele_TKgt43",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.876059,
      "lon": 102.313423,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.059941584459803,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านด่านชัยพัฒนา",
      "station_code": "ridtele_TKgt47",
      "province": "สระแก้ว",
      "district": "วังน้ำเย็น",
      "lat": 13.554336,
      "lon": 102.044993,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.79434555575572,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านยางคู่",
      "station_code": "ridtele_TPB09",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.2756,
      "lon": 99.6415,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.10895337786582,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.กำแพงแสน",
      "station_code": "ridtele_TTC19",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 13.997056,
      "lon": 100.002321,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.251884144189916,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดท่าโขลง",
      "station_code": "ridtele_TK.2B",
      "province": "ราชบุรี",
      "district": "เมืองราชบุรี",
      "lat": 13.5598,
      "lon": 99.8173,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.314460828297127,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดไทร",
      "station_code": "ridtele_TK.73",
      "province": "สมุทรสงคราม",
      "district": "บางคนที",
      "lat": 13.46648,
      "lon": 99.94658,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.672783286378568,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ปากคลองบางป่า",
      "station_code": "ridtele_TK.75",
      "province": "ราชบุรี",
      "district": "เมืองราชบุรี",
      "lat": 13.533404,
      "lon": 99.861115,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.614145910437777,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.กลางคลองบางป่า",
      "station_code": "ridtele_TK.76",
      "province": "ราชบุรี",
      "district": "เมืองราชบุรี",
      "lat": 13.576265,
      "lon": 99.864137,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.955513653555207,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ปากคลองท่าสาร - บางปลา",
      "station_code": "ridtele_TK.79",
      "province": "กาญจนบุรี",
      "district": "ท่ามะกา",
      "lat": 13.9703,
      "lon": 99.7221,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.52115827659869,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามห้วยหลวง",
      "station_code": "ridtele_TKH.103",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.482461,
      "lon": 102.797111,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.735949038125625,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านหนองฆ้องสีนวล",
      "station_code": "ridtele_TKH-R1",
      "province": "อุดรธานี",
      "district": "กุดจับ",
      "lat": 17.421688,
      "lon": 102.469746,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.94821302651197,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานหนองวัวซอ",
      "station_code": "ridtele_TKH.53A",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.282764,
      "lon": 102.598086,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.37135598629465,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "กศน.หนองอ้อ",
      "station_code": "ridtele_TKH-R5",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.174752,
      "lon": 102.569536,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.26822323207563,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บ้านตาด",
      "station_code": "ridtele_TKH-R7",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.279501,
      "lon": 102.80179,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.045697442693662,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี E.65",
      "station_code": "ridtele_LP-03",
      "province": "กาฬสินธุ์",
      "district": "ท่าคันโท",
      "lat": 16.95186,
      "lon": 103.16807,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.859115521629,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.44",
      "station_code": "ridtele_STN04",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.000695,
      "lon": 100.456236,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.675724071578168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.113",
      "station_code": "ridtele_STN12",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.635309,
      "lon": 100.393967,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.616133350813561,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีบ้านปากพะยูน",
      "station_code": "ridtele_TSL07",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.353622,
      "lon": 100.324252,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.60231753811278,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลอง ร6",
      "station_code": "ridtele_TSL26",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.994865,
      "lon": 100.501117,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.666884388114095,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองหมู",
      "station_code": "ridtele_TTL.03",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.773183,
      "lon": 102.393748,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.22065215737866,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าข้าม",
      "station_code": "ridtele_TTL.05",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.660485,
      "lon": 102.543605,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.151103093682016,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานค่ายบางระจัน",
      "station_code": "HDA007",
      "province": "สิงห์บุรี",
      "district": "ค่ายบางระจัน",
      "lat": 14.815288,
      "lon": 100.36448,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95975694360689,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานป่าโมก",
      "station_code": "HDA009",
      "province": "อ่างทอง",
      "district": "ป่าโมก",
      "lat": 14.498074,
      "lon": 100.44962,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.758642782654789,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำลพบุรี บ้านโพธิ์เก้าต้น",
      "station_code": "HDA010",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.794374,
      "lon": 100.60633,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.9375086711988,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านสร่างโศก",
      "station_code": "HDA011",
      "province": "สระบุรี",
      "district": "บ้านหมอ",
      "lat": 14.650794,
      "lon": 100.742775,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.932480429893243,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานแมน้ำปาสัก บ้านนาโฉง",
      "station_code": "HDA012",
      "province": "สระบุรี",
      "district": "เมืองสระบุรี",
      "lat": 14.546983,
      "lon": 100.88976,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.387270610268398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยต้นน้ำมูล",
      "station_code": "MOU258",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.527594,
      "lon": 101.33372,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.66529735667747,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
      "station_code": "MOU482",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.240835,
      "lon": 101.04208,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.585106331078295,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านต้นแหนน้อย",
      "station_code": "STN2170",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.547291,
      "lon": 98.862174,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.433888566535728,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยโป่ง",
      "station_code": "STN2171",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.658259,
      "lon": 98.661228,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.11277293382128,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวเสือ",
      "station_code": "STN2172",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.453265,
      "lon": 98.640097,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.02413326233396,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านอ่างกาน้อย (สบหาด)",
      "station_code": "STN2175",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.541897,
      "lon": 98.593349,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.26669642873633,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถนนโค้ง",
      "station_code": "STN2196",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.743917,
      "lon": 101.039334,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.68105996458992,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนวังปาตอง",
      "station_code": "STN2205",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.682056,
      "lon": 102.504417,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.146651614165659,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนย่านยาวออก",
      "station_code": "STN2211",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.868006,
      "lon": 100.456304,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.885850429897452,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนวัดเกาะ",
      "station_code": "STN2212",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.974349,
      "lon": 100.397919,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.649145159681108,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนจง",
      "station_code": "STN2213",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.968613,
      "lon": 100.51886,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.099733015190356,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าหัวทุ่ง",
      "station_code": "MOU259",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.30243,
      "lon": 99.229454,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.604002556626014,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าแม่ทา",
      "station_code": "MOU260",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.43999,
      "lon": 99.14778,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.062517576185186,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ทา",
      "station_code": "MOU276",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.6771,
      "lon": 99.2937,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.882094431002088,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำแม่ขาน",
      "station_code": "MOU293",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.7955,
      "lon": 98.7307,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79867579046488,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำแม่กลาง",
      "station_code": "MOU294",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.507551,
      "lon": 98.66203,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.927600919337834,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยงานวิจัยการจัดการลุ่มน้ำศูนย์ศึกษาการพัฒนาห้วยฮ่องไคร้ อันเนื่องมาจากพระราชดำริ",
      "station_code": "MOU314",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.883398,
      "lon": 99.22465,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.987083635646336,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานพัฒนามิตรภาพแม่น้ำตุ๋ย",
      "station_code": "MOU325",
      "province": "ลำปาง",
      "district": "เมืองลำปาง",
      "lat": 18.474373,
      "lon": 99.46628,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.30543843174566,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าแม่เหล็ก",
      "station_code": "MOU333",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.312527,
      "lon": 98.978264,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.833813912894552,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าดอยอีหุ้ย",
      "station_code": "MOU334",
      "province": "ลำพูน",
      "district": "ทุ่งหัวช้าง",
      "lat": 18.153486,
      "lon": 98.9833,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.16459754740818,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่นึง",
      "station_code": "MOU363",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.571398,
      "lon": 99.43958,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.6626087034943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าดอยผาเมือง",
      "station_code": "MOU313",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.36925,
      "lon": 99.23496,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.84323641894764,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำโฮ่งฮ่างอันเนื่องมาจากพระราขดำริ",
      "station_code": "RES010",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.56854,
      "lon": 99.24858,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.6247820990615,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยไคร้",
      "station_code": "RES012",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.50746,
      "lon": 99.22739,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.40189804493517,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยลากไม้ตอนบน",
      "station_code": "RES013",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.39674,
      "lon": 98.8642,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.865798450815927,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำแม่อาวใหญ่ตอนบน",
      "station_code": "RES016",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.29082,
      "lon": 98.93266,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.49442256097453,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยแทง",
      "station_code": "RES017",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.29177,
      "lon": 98.86272,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.495226581811686,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยยางเงาะ",
      "station_code": "RES060",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.22575,
      "lon": 102.51817,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.71187816567904,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานวัดโบสถ์",
      "station_code": "G09006-TA092002",
      "province": "พิษณุโลก",
      "district": "วัดโบสถ์",
      "lat": 16.996882,
      "lon": 100.312121,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.98628638355026,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "น้ำแม่กวงที่ลำพูน",
      "station_code": "G09006-TA060810",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.582861,
      "lon": 99.017,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.0190674410159057,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ยางหัก",
      "station_code": "G09006-TA180302",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.267599,
      "lon": 99.593249,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.60818730085655,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ห้วยมวกเหล็กที่ อ.มวกเหล็ก",
      "station_code": "G09006-TA121001",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.690491,
      "lon": 101.200369,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.940476440880083,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "น้ำแม่ตุ๋ยที่บ้านแค่",
      "station_code": "G09006-TA070403",
      "province": "ลำปาง",
      "district": "เมืองลำปาง",
      "lat": 18.378611,
      "lon": 99.443861,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.29184989107765,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานปรีดี-ธำรง",
      "station_code": "G09006-TA100222",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.35169,
      "lon": 100.58076,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.13433599204265,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่ท่าฉลอม",
      "station_code": "G09006-TA130202",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.530655,
      "lon": 100.26536,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.8143768504040896,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานบ้านบางระกำ",
      "station_code": "G09006-TA081902",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.761434,
      "lon": 100.12078,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.906580555275607,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านยางมณี",
      "station_code": "G09006-TA100215",
      "province": "อ่างทอง",
      "district": "โพธิ์ทอง",
      "lat": 14.73518,
      "lon": 100.4151,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.54057651989991,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานบุญรัตน์ประชานุวัฒน์",
      "station_code": "G09006-TA130204",
      "province": "นครปฐม",
      "district": "สามพราน",
      "lat": 13.723497,
      "lon": 100.216,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.04200996299588,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเฉลิมพระเกียรติ ร.9 72 พรรษา",
      "station_code": "G09006-TA092306",
      "province": "พิจิตร",
      "district": "บางมูลนาก",
      "lat": 16.009518,
      "lon": 100.368865,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.68055542967016,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบางปี",
      "station_code": "G09006-TA100216",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.794419,
      "lon": 100.60588,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.94091618227815,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "น้ำแม่ขานที่บ้านท่าเดื่อ",
      "station_code": "G09006-TA061016",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.611986,
      "lon": 98.851049,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.655445733073538,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานประชานิมิต",
      "station_code": "G09006-TA060503",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 18.945625,
      "lon": 98.97523,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.7583665264384,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ตาลน้อย",
      "station_code": "G09006-TA070503",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.409111,
      "lon": 99.260306,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.47138534234249,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนแม่ตะไคร้",
      "station_code": "G09006-TA060809",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.729194,
      "lon": 99.30275,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.170338608166176,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดห้วยแก้ว",
      "station_code": "G09006-TA060808",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.856306,
      "lon": 99.274306,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.714745580455975,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานสุพรรณกัลยา",
      "station_code": "G09006-TA092101",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.806748,
      "lon": 100.24548,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.707264951876684,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านปงแม่ลอบ",
      "station_code": "G09006-TA061207",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.266833,
      "lon": 98.939556,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.79943736744236,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทับกฤช",
      "station_code": "G09006-TA092305",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.749707,
      "lon": 100.24618,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.56736377859444,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ห้วยน้ำสวย",
      "station_code": "G09006-TA031322",
      "province": "อุดรธานี",
      "district": "เพ็ญ",
      "lat": 17.682652,
      "lon": 102.78463,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.45212305189674,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองตะโหมด (ท่าเชียด)",
      "station_code": "G09006-TA200206",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.338375,
      "lon": 100.10986,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.91079372313541,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าตูม",
      "station_code": "G09006-TC031506",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.48222,
      "lon": 102.79682,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.72274791433398,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเฉลิมพระเกียรติ 48 พรรษา",
      "station_code": "G09006-TA092102",
      "province": "พิจิตร",
      "district": "เมืองพิจิตร",
      "lat": 16.515844,
      "lon": 100.30841,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.240453355318603,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานกรุงเทพ",
      "station_code": "CPY015",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.700301,
      "lon": 100.49277,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.631190161803122,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายไซฟอน ปตร.พระธรรมราชา",
      "station_code": "FROC02",
      "province": "ปทุมธานี",
      "district": "ธัญบุรี",
      "lat": 14.076805,
      "lon": 100.89407,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 18:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.43932753559925,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองระพีพัฒน์แยกใต้ หนองเสือ",
      "station_code": "BKK013",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.2206,
      "lon": 100.89168,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.479318846322684,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท่าเรือ",
      "station_code": "PAS008",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.56014,
      "lon": 100.71987,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.510084795335397,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "นครหลวง",
      "station_code": "PAS009",
      "province": "พระนครศรีอยุธยา",
      "district": "นครหลวง",
      "lat": 14.40269,
      "lon": 100.5864,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.687099448793155,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองบางบาล",
      "station_code": "CPY010",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.42303,
      "lon": 100.48186,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.306312776039722,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองบางหลวง",
      "station_code": "CPY009",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.4158,
      "lon": 100.44071,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.586439945291232,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางปะหัน",
      "station_code": "LBI001",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.42731,
      "lon": 100.55605,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.11290468175869,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการกำนันตำบลลาดชิด",
      "station_code": "PKH1",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.44142,
      "lon": 100.35564,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.392967489256403,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองอ่างทอง",
      "station_code": "CPY008",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.5765,
      "lon": 100.44852,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.573455402215103,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บ้านพราน",
      "station_code": "SWH1",
      "province": "อ่างทอง",
      "district": "แสวงหา",
      "lat": 14.70217,
      "lon": 100.29819,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.81336861580222,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองลพบุรี",
      "station_code": "LBI002",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.76049,
      "lon": 100.5996,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.153470420161305,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พรหมบุรี",
      "station_code": "CPY007",
      "province": "สิงห์บุรี",
      "district": "พรหมบุรี",
      "lat": 14.79091,
      "lon": 100.45184,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.93348365136987,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทม.ทับกวาง",
      "station_code": "CMKK",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.60885,
      "lon": 101.07645,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.560304216545661,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองแม่น้ำใน",
      "station_code": "TB0004",
      "province": "สระบุรี",
      "district": "วิหารแดง",
      "lat": 14.30168,
      "lon": 100.94521,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.432445197289608,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หนองบัว",
      "station_code": "RAY002",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.849195,
      "lon": 101.301346,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.6523093721227236,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานวังแก่ง",
      "station_code": "NYK001",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.364806,
      "lon": 101.09028,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.253111123603006,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "องครักษ์",
      "station_code": "NYK000",
      "province": "นครนายก",
      "district": "องครักษ์",
      "lat": 14.113633,
      "lon": 101.01952,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.80225767760791,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.โคคลาน",
      "station_code": "KOKN",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 13.99106,
      "lon": 102.65064,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.46333033604034,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทม.วังน้ำเย็น",
      "station_code": "TTWY",
      "province": "สระแก้ว",
      "district": "วังน้ำเย็น",
      "lat": 13.50019,
      "lon": 102.18437,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.11645205473142,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ท่าเกวียน",
      "station_code": "TON004",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.68734,
      "lon": 102.28413,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.503418956657505,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.ท่าข้าม",
      "station_code": "KOSB",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.62763,
      "lon": 102.57487,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.925507314908446,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองพรหมโหด",
      "station_code": "SKE003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.705864,
      "lon": 102.48168,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.131766068445735,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เทศบาลนครอุดรธานี",
      "station_code": "KUDN",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.41293,
      "lon": 102.78866,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.369207077956524,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองอุดรธานี",
      "station_code": "KON004",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.482368,
      "lon": 102.79713,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.725608707789945,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.กุมภวาปี",
      "station_code": "BDMG",
      "province": "อุดรธานี",
      "district": "กุมภวาปี",
      "lat": 17.07686,
      "lon": 103.02154,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.466774895498872,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.ช้างเผือก",
      "station_code": "TAPE",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.8101,
      "lon": 98.96992,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.197406162559915,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "แม่หาด",
      "station_code": "VLGE25",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.46006,
      "lon": 98.65094,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.68344096468531,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.ดอยสะเก็ด",
      "station_code": "DSKT",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.86477,
      "lon": 99.13227,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.878858104936317,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ป่าสักงาม",
      "station_code": "VLGE04",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.9926,
      "lon": 99.12811,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.46776780508681,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานโยธาอำนวยพัฒนา",
      "station_code": "TB0006",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.57391,
      "lon": 98.86222,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.71260178716996,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รร.อนุบาล ทต.สันกำแพง",
      "station_code": "SKPG",
      "province": "เชียงใหม่",
      "district": "สันกำแพง",
      "lat": 18.75289,
      "lon": 99.12771,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.28974776627312,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.สันนาเม็ง",
      "station_code": "SNSI",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 18.83802,
      "lon": 99.05691,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.320357859744572,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สันทราย",
      "station_code": "CHM001",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 19.00979,
      "lon": 98.95975,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.06728169191569,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ว่าการอำเภอแม่วาง",
      "station_code": "TB0007",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.61261,
      "lon": 98.77524,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.638225132016643,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สวนสาธารณะกู่ช้าง ทต.ลำพูน",
      "station_code": "LMPN",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.58646,
      "lon": 99.01955,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.547808122729683,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.ป่าซาง",
      "station_code": "PASG",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.51816,
      "lon": 98.93948,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.798881544360018,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองหล่ม",
      "station_code": "HCTT",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.33624,
      "lon": 99.39992,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.005244861689754,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนแม่ตาลน้อย",
      "station_code": "VLGE28",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.41521,
      "lon": 99.26469,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.374606073549067,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเดชาติวงศ์",
      "station_code": "CPY001",
      "province": "นครสวรรค์",
      "district": "เมืองนครสวรรค์",
      "lat": 15.68849,
      "lon": 100.12381,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.28308700895721,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมแสง",
      "station_code": "NAN008",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.86923,
      "lon": 100.26481,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.6003120453232,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ตาคลี",
      "station_code": "TAKI",
      "province": "นครสวรรค์",
      "district": "ตาคลี",
      "lat": 15.29119,
      "lon": 100.38288,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.6697105917741,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.ท่าตะโก",
      "station_code": "TTKO",
      "province": "นครสวรรค์",
      "district": "ท่าตะโก",
      "lat": 15.63248,
      "lon": 100.47483,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.797913859926771,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.ไพศาลี",
      "station_code": "PSLI",
      "province": "นครสวรรค์",
      "district": "ไพศาลี",
      "lat": 15.60012,
      "lon": 100.6572,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.970221220850517,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองไม้กอง",
      "station_code": "NMKO",
      "province": "กำแพงเพชร",
      "district": "ไทรงาม",
      "lat": 16.43571,
      "lon": 99.94509,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.711193739908897,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ลานกระบือ",
      "station_code": "LKBU",
      "province": "กำแพงเพชร",
      "district": "ลานกระบือ",
      "lat": 16.61806,
      "lon": 99.88005,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.04478714963737,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.ทุ่งทราย",
      "station_code": "STWN",
      "province": "กำแพงเพชร",
      "district": "ทรายทองวัฒนา",
      "lat": 16.29505,
      "lon": 99.80898,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.81373867868995,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.บ้านโตนด",
      "station_code": "KRMT",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.83377,
      "lon": 99.80269,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.74965940394183,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "กงไกรลาศ",
      "station_code": "YOM007",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.92732,
      "lon": 99.95933,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.0367060718405,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โครงการชลประทานพิษณุโลก",
      "station_code": "WCTK",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.81502,
      "lon": 100.25992,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.152293848641293,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองพิษณุโลก",
      "station_code": "NAN012",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.86469,
      "lon": 100.24476,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.75107369201308,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองผันน้ำยม-น่าน4",
      "station_code": "DIV004",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.67167,
      "lon": 100.24581,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.872698547385934,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.บางระกำเมืองใหม่",
      "station_code": "BRKM",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.74893,
      "lon": 100.09029,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.286047700286474,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางระกำ",
      "station_code": "YOM008",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.70818,
      "lon": 100.17179,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.967810300867315,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมแสงสงคราม",
      "station_code": "VLGE13",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.8586,
      "lon": 100.05965,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.89890323153971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางกระทุ่ม",
      "station_code": "NAN006",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.58046,
      "lon": 100.23858,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.569436005387221,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานนครป่าหมากร่วมใจ",
      "station_code": "VLGE12",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.60887,
      "lon": 100.36977,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.82531823296878,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.พรหมพิราม",
      "station_code": "PPRM",
      "province": "พิษณุโลก",
      "district": "พรหมพิราม",
      "lat": 17.02166,
      "lon": 100.19216,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.83875240754259,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองผันน้ำยม-น่าน2",
      "station_code": "DIV002",
      "province": "พิษณุโลก",
      "district": "พรหมพิราม",
      "lat": 16.95387,
      "lon": 100.12127,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.19110745038412,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วัดโบสถ์",
      "station_code": "WTBT",
      "province": "พิษณุโลก",
      "district": "วัดโบสถ์",
      "lat": 16.95813,
      "lon": 100.33734,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.05130379751956,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ่อบำบัด ทม.พิจิตร",
      "station_code": "WTLG",
      "province": "พิจิตร",
      "district": "เมืองพิจิตร",
      "lat": 16.43317,
      "lon": 100.33195,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.112979181278362,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังทรายพูน",
      "station_code": "WSPN",
      "province": "พิจิตร",
      "district": "วังทรายพูน",
      "lat": 16.40616,
      "lon": 100.53869,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.61576896150359,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โพธิ์ประทับช้าง",
      "station_code": "YOM009",
      "province": "พิจิตร",
      "district": "โพธิ์ประทับช้าง",
      "lat": 16.31077,
      "lon": 100.27173,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.2038263788759,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ตะพานหิน",
      "station_code": "NAN007",
      "province": "พิจิตร",
      "district": "ตะพานหิน",
      "lat": 16.27034,
      "lon": 100.41396,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.15118819719544,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองโสน",
      "station_code": "NSNO",
      "province": "พิจิตร",
      "district": "สามง่าม",
      "lat": 16.39612,
      "lon": 100.05419,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.34532511144996,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังงิ้ว",
      "station_code": "SYTL",
      "province": "พิจิตร",
      "district": "ดงเจริญ",
      "lat": 16.01561,
      "lon": 100.73281,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.30160634817812,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บึงสามพัน",
      "station_code": "BSMP",
      "province": "เพชรบูรณ์",
      "district": "บึงสามพัน",
      "lat": 15.77805,
      "lon": 101.02094,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.89260098235917,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โพธาราม",
      "station_code": "RAJ001",
      "province": "ราชบุรี",
      "district": "โพธาราม",
      "lat": 13.63308,
      "lon": 99.8164,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.6632876362743403,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองตาจอน",
      "station_code": "VLGE30",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.43388,
      "lon": 99.67017,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.82680048251451,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาดิน",
      "station_code": "VLGE20",
      "province": "นครปฐม",
      "district": "พุทธมณฑล",
      "lat": 13.80777,
      "lon": 100.27417,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.667511489847108,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปากแม่น้ำท่าจีน",
      "station_code": "GLF002",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.5178,
      "lon": 100.27499,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.407063059099814,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแพ้ว",
      "station_code": "MKG005",
      "province": "สมุทรสาคร",
      "district": "บ้านแพ้ว",
      "lat": 13.57563,
      "lon": 100.07884,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.50034924008027,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนเขาสามยอด (บ้านน้ำจั้น หมู่ 2)",
      "station_code": "STN0674",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.825584,
      "lon": 100.69195,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79532822696729,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองคล้า",
      "station_code": "STN0274",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.490439,
      "lon": 101.040808,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.332532128777713,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถ้ำมงกุฎ",
      "station_code": "STN0449",
      "province": "สระบุรี",
      "district": "พระพุทธบาท",
      "lat": 14.678451,
      "lon": 100.846683,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.367553202960405,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเจ้าพ่อเขาตก",
      "station_code": "STN0677",
      "province": "สระบุรี",
      "district": "พระพุทธบาท",
      "lat": 14.693386,
      "lon": 100.784861,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.202805151690335,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินลับ",
      "station_code": "STN0678",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.672587,
      "lon": 101.126529,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.810230158371521,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองเอี่ยวใน",
      "station_code": "STN0947",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.900096,
      "lon": 101.321716,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.55428562754781,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาเลื่อมใต้",
      "station_code": "STN0998",
      "province": "สระแก้ว",
      "district": "คลองหาด",
      "lat": 13.406297,
      "lon": 102.304654,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.467051064439985,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองแวง",
      "station_code": "STN0999",
      "province": "สระแก้ว",
      "district": "คลองหาด",
      "lat": 13.591549,
      "lon": 102.257092,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.357636704948185,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับแม็ก",
      "station_code": "STN1001",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.874664,
      "lon": 102.42264,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.004598414131543,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบีกริม",
      "station_code": "STN1004",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.638481,
      "lon": 102.393412,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.83949113726908,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านด่าน",
      "station_code": "STN1003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.721552,
      "lon": 102.465027,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 18:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.682767693819189,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนาคันหัก",
      "station_code": "STN0997",
      "province": "สระแก้ว",
      "district": "เขาฉกรรจ์",
      "lat": 13.608058,
      "lon": 102.049221,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.51203972700152,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับสมบูรณ์",
      "station_code": "STN1002",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.950064,
      "lon": 102.556857,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.149694302703274,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองเพล",
      "station_code": "STN0551",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.516402,
      "lon": 101.377397,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 17:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.52514315465291,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกสง่า",
      "station_code": "STN0987",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.712083,
      "lon": 101.454595,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.00326202136592,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโนนหัวช้าง",
      "station_code": "STN0303",
      "province": "ขอนแก่น",
      "district": "เขาสวนกวาง",
      "lat": 17.034119,
      "lon": 102.734217,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.21630688212356,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ปอน",
      "station_code": "STN0014",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.467068,
      "lon": 98.609275,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.553046178242994,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านสะลวงนอก",
      "station_code": "STN0838",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 19.01637,
      "lon": 98.880501,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.936440902782635,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่แมะ",
      "station_code": "STN0254",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.900115,
      "lon": 98.882083,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.95258634488175,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกองแหะ",
      "station_code": "STN0182",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.859268,
      "lon": 98.809246,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.344812903403486,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกองขากหลวง",
      "station_code": "STN0923",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.915366,
      "lon": 98.721861,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.13113552273412,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปางยาง",
      "station_code": "STN0045",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.815946,
      "lon": 98.830684,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.234807897344204,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งโป่งใต้",
      "station_code": "STN0589",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.764184,
      "lon": 98.873346,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.963610408910807,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่สะป๊อก",
      "station_code": "STN0593",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.665041,
      "lon": 98.639008,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.54383835472897,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ลานคำ",
      "station_code": "STN0596",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.75731,
      "lon": 98.713952,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.18333738835385,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่กำปอง",
      "station_code": "STN0203",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.865894,
      "lon": 99.352648,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.31348022005833,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่เตาดิน",
      "station_code": "STN0608",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.881827,
      "lon": 99.264784,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.265462842626405,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าข้าม",
      "station_code": "STN0230",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.602301,
      "lon": 99.274436,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.22136732051762,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านดอนชัย",
      "station_code": "STN0025",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.582748,
      "lon": 99.259631,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.656128530441595,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่ดอนแก้ว",
      "station_code": "STN0590",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.717189,
      "lon": 99.301806,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.450437870816923,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านขุนตาน",
      "station_code": "STN0146",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.50066,
      "lon": 99.265204,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.339556195558867,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่สะป้วด",
      "station_code": "STN0874",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.414779,
      "lon": 99.080985,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.043784776286916,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านต้นผึ้ง",
      "station_code": "STN0433",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.244817,
      "lon": 98.960082,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.601379042586075,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเกาะทุ่งม่าน",
      "station_code": "STN0938",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.276021,
      "lon": 98.822322,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.234463351624534,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่รุ่งเจริญ",
      "station_code": "STN0840",
      "province": "ลำปาง",
      "district": "เมืองลำปาง",
      "lat": 18.474299,
      "lon": 99.466456,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.32557009291526,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งกล้วย",
      "station_code": "STN0646",
      "province": "ลำปาง",
      "district": "เมืองลำปาง",
      "lat": 18.438207,
      "lon": 99.387656,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.972358863302844,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านต้นฮ่างพัฒนา",
      "station_code": "STN0652",
      "province": "ลำปาง",
      "district": "เมืองลำปาง",
      "lat": 18.509606,
      "lon": 99.418201,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.401074024916895,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งหลวง",
      "station_code": "STN0653",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.254,
      "lon": 99.216639,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.69943626602246,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งเกวียน",
      "station_code": "STN0533",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.332701,
      "lon": 99.249899,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.01883074973619,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปางอ่าย",
      "station_code": "STN0143",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.770061,
      "lon": 99.459417,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.956700247083184,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่กองปิน",
      "station_code": "STN0881",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.618016,
      "lon": 99.475075,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.42992494503993,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านป่าเวียง",
      "station_code": "STN0648",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.563746,
      "lon": 99.459658,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.82903602115875,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านป่าเหมี้ยง",
      "station_code": "STN0436",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.822242,
      "lon": 99.384523,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.00521210240413,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินสี",
      "station_code": "STN0479",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.324017,
      "lon": 99.558695,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.96607177882031,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองโก",
      "station_code": "STN0693",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.427751,
      "lon": 99.49674,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.738842906492124,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองธง",
      "station_code": "STN0223",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.45973,
      "lon": 99.439887,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.533455547425596,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินแด้น",
      "station_code": "STN0053",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.780584,
      "lon": 99.420933,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.01515188945304,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเหล้า",
      "station_code": "STN0707",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.129909,
      "lon": 100.625486,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.287812728862335,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนไม้ไผ่",
      "station_code": "STN0212",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.919856,
      "lon": 100.643306,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.798940702128306,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขานา",
      "station_code": "STN0708",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.788918,
      "lon": 100.625724,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.10524516319903,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองหิน",
      "station_code": "STN1027",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.008708,
      "lon": 100.134958,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.81516132713832,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปาดังเบซาร์",
      "station_code": "STN0581",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.665852,
      "lon": 100.318786,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.31500625009662,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหูแร่",
      "station_code": "STN1025",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.982842,
      "lon": 100.328587,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.456427249901711,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโฮ๊ะ",
      "station_code": "STN1026",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.961809,
      "lon": 100.317857,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.9364122713410525,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าจีน",
      "station_code": "STN0710",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.097187,
      "lon": 100.537102,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.922082679996798,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาจันทร์",
      "station_code": "STN0512",
      "province": "พัทลุง",
      "district": "ป่าบอน",
      "lat": 7.201698,
      "lon": 100.091954,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.553411121017405,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เชียงใหม่",
      "station_code": "48327",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.79,
      "lon": 98.97694,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.84401032739771,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ลำพูน",
      "station_code": "48329",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.56722,
      "lon": 99.03389,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.963768572718923,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ลำปาง สกษ.",
      "station_code": "48334",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.31667,
      "lon": 99.28333,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.600694785677696,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อุดรธานี",
      "station_code": "48354",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.38333,
      "lon": 102.8,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.040709798417693,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "หนองบัวลำภู",
      "station_code": "48360",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.2325,
      "lon": 102.42944,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.82618430363889,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "พิษณุโลก",
      "station_code": "48378",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.79481,
      "lon": 100.2793,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.07506465402116,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "พิจิตร สกษ.",
      "station_code": "48386",
      "province": "พิจิตร",
      "district": "เมืองพิจิตร",
      "lat": 16.43806,
      "lon": 100.2925,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.617720214020938,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "นครสวรรค์",
      "station_code": "48400",
      "province": "นครสวรรค์",
      "district": "เมืองนครสวรรค์",
      "lat": 15.67183,
      "lon": 100.13236,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.260739188317785,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "พระนครศรีอยุธยา",
      "station_code": "48415",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.53472,
      "lon": 100.725,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.80312968515648,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ลพบุรี",
      "station_code": "48426",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.79972,
      "lon": 100.645,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.91757270504817,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "นำร่อง",
      "station_code": "48457",
      "province": "สมุทรปราการ",
      "district": "พระสมุทรเจดีย์",
      "lat": 13.37722,
      "lon": 100.59944,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.7486112751969,
      "nearest_estate": "นิคมอุตสาหกรรมบางปู",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อรัญประเทศ",
      "station_code": "48462",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.68869,
      "lon": 102.50417,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.711485933246703,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ราชบุรี",
      "station_code": "48464",
      "province": "ราชบุรี",
      "district": "เมืองราชบุรี",
      "lat": 13.48931,
      "lon": 99.79239,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.594860632472948,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "รร.ผังปาล์ม 4",
      "station_code": "SWR037",
      "province": "สตูล",
      "district": "มะนัง",
      "lat": 7.02235,
      "lon": 99.93085,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.3665291807886,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "มูศ๊อลลา(มัสยิด)ชูฮาดา",
      "station_code": "SWR038",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.96422,
      "lon": 100.02687,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.07076184699975,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ฝ่ายส่งน้ำและบำรุงรักษาที่ 2",
      "station_code": "TBW008",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 18.88353,
      "lon": 99.08182,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.649037474678174,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองเกรียงไกร",
      "station_code": "TBW014",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.84312,
      "lon": 100.21149,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.95593032816644,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.เวียงตาล",
      "station_code": "TBR011",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.31132,
      "lon": 99.3252,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.97260499143264,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโกรกอีดก",
      "station_code": "ONWR01",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.4417,
      "lon": 101.17281,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.983521249057052,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ตำบลซับสมบูรณ์",
      "station_code": "VLGE49",
      "province": "เพชรบูรณ์",
      "district": "วิเชียรบุรี",
      "lat": 15.61598,
      "lon": 101.02351,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.38686527973776,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดขนอนใต้",
      "station_code": "HDA005",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.288251,
      "lon": 100.61132,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.665867272460714,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยส้ม",
      "station_code": "TBW035",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.865248,
      "lon": 100.861244,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.067160264056348,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.หันตรา",
      "station_code": "HDA001",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.37456,
      "lon": 100.58441,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.820867390641911,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.กระมัง (ปากคลองข้าวเม่า)",
      "station_code": "HDA002",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.355055,
      "lon": 100.58354,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.423863607482492,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.กลางคลองข้าวเม่า (วัดกระสังข์)",
      "station_code": "HDA003",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.357306,
      "lon": 100.60569,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.351085674133945,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.พระนารายน์",
      "station_code": "ATG051",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.5583,
      "lon": 100.76205,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.47688068231695,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระนารายน์",
      "station_code": "ATG052",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.55667,
      "lon": 100.76201,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.402327011407195,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระศรีศิลป์",
      "station_code": "ATG072",
      "province": "สระบุรี",
      "district": "หนองแค",
      "lat": 14.32729,
      "lon": 100.87117,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.441110103352378,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.พระธรรมราชา",
      "station_code": "ATG081",
      "province": "ปทุมธานี",
      "district": "ธัญบุรี",
      "lat": 14.07771,
      "lon": 100.89208,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.345810037612154,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระธรรมราชา",
      "station_code": "ATG082",
      "province": "ปทุมธานี",
      "district": "ธัญบุรี",
      "lat": 14.07636,
      "lon": 100.89392,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.48927154769707,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.ยางมณี",
      "station_code": "ATG161",
      "province": "สิงห์บุรี",
      "district": "ท่าช้าง",
      "lat": 14.751,
      "lon": 100.41463,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.016853910614486,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.ยางมณี",
      "station_code": "ATG162",
      "province": "สิงห์บุรี",
      "district": "ท่าช้าง",
      "lat": 14.75033,
      "lon": 100.41498,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.934015748296225,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.ผักไห่-เจ้าเจ็ด",
      "station_code": "ATG171",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.43643,
      "lon": 100.37562,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.417880489980817,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยน้ำลาด",
      "station_code": "STN1242",
      "province": "นครสวรรค์",
      "district": "ไพศาลี",
      "lat": 15.604631,
      "lon": 100.675121,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.311022604383211,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหมาก",
      "station_code": "STN1374",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.689007,
      "lon": 101.198163,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.661901207133553,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโนนสมบูรณ์",
      "station_code": "STN1476",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.777422,
      "lon": 101.341215,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.65081543882089,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยเดื่อ",
      "station_code": "STN1067",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.376158,
      "lon": 98.96111,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.549117341880127,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแจ้ซ้อน",
      "station_code": "STN1073",
      "province": "ลำพูน",
      "district": "บ้านธิ",
      "lat": 18.660141,
      "lon": 99.157814,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.122328135077066,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปางป่าคา",
      "station_code": "STN1099",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.957106,
      "lon": 98.862353,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.563895350759694,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านป่าสักงาม",
      "station_code": "STN1104",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.98908,
      "lon": 99.127441,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.070399192579984,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ดอกแดง",
      "station_code": "STN1108",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.898664,
      "lon": 99.20137,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.23419610209725,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่หวาน",
      "station_code": "STN1110",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.957837,
      "lon": 99.233553,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.63343831896001,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาป่าเปา",
      "station_code": "STN1119",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.477644,
      "lon": 99.190144,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.888501123471872,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ปะ",
      "station_code": "STN1127",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.955123,
      "lon": 98.746881,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.75880191684221,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโป่งนก",
      "station_code": "STN1154",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.807181,
      "lon": 99.227606,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.367044303627125,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกองขากน้อย",
      "station_code": "STN1155",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.88874,
      "lon": 98.68158,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.18300787538574,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผาเงิบ",
      "station_code": "STN1170",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.315978,
      "lon": 98.918348,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.44331786385233,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาขุยพัฒนา",
      "station_code": "STN1185",
      "province": "ลพบุรี",
      "district": "โคกเจริญ",
      "lat": 15.528146,
      "lon": 100.843028,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.190801822103584,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองบน",
      "station_code": "STN1187",
      "province": "เพชรบูรณ์",
      "district": "ชนแดน",
      "lat": 15.931117,
      "lon": 100.829141,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.55859634773667,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนกเขาเปล้า",
      "station_code": "STN1202",
      "province": "ลพบุรี",
      "district": "โคกสำโรง",
      "lat": 15.017018,
      "lon": 100.793065,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.37516196567731,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพญาวัง",
      "station_code": "STN1216",
      "province": "เพชรบูรณ์",
      "district": "บึงสามพัน",
      "lat": 15.864996,
      "lon": 100.848355,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.86122806015871,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพุฝรั่ง",
      "station_code": "STN1217",
      "province": "นครสวรรค์",
      "district": "ไพศาลี",
      "lat": 15.62993,
      "lon": 100.798017,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.205913072625275,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านลาดแคใต้",
      "station_code": "STN1227",
      "province": "เพชรบูรณ์",
      "district": "ชนแดน",
      "lat": 16.035818,
      "lon": 100.826486,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.828931996174894,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองหล่ม",
      "station_code": "STN1240",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.336259,
      "lon": 99.399912,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.00329403647779,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวพุ",
      "station_code": "STN1249",
      "province": "นครสวรรค์",
      "district": "ไพศาลี",
      "lat": 15.564188,
      "lon": 100.705829,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.53452242216833,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหล่ายทุ่ง",
      "station_code": "STN1268",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.396999,
      "lon": 99.352307,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.98690670650098,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่เตี๊ยะใต้",
      "station_code": "STN1291",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.393421,
      "lon": 98.651069,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.868608430478346,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่หอย",
      "station_code": "STN1292",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.485818,
      "lon": 98.668225,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.995717215663674,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถ้ำน้ำพุ",
      "station_code": "STN1300",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.578354,
      "lon": 101.138945,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.990137882011231,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองสองห้อง",
      "station_code": "STN1301",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.45968,
      "lon": 101.037522,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.567648024216368,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถ้ำเต่า",
      "station_code": "STN1303",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.704059,
      "lon": 100.967959,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.829898907434359,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาทุ่งหลวง",
      "station_code": "STN1430",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.421024,
      "lon": 99.009942,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.338510512529137,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเหวปลากั้ง",
      "station_code": "STN1482",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.55014,
      "lon": 101.313189,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.85921844276008,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านดอนทราย",
      "station_code": "STN1498",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.783243,
      "lon": 99.259893,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.91590554305922,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาทุ่งไผ่",
      "station_code": "STN1535",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.528099,
      "lon": 99.234264,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.18130339852194,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านสามพวง 1",
      "station_code": "STN1536",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.79757,
      "lon": 99.787305,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.76274395790002,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่ปางเติม",
      "station_code": "STN1557",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.614812,
      "lon": 98.767551,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.458776686692346,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ปทุมวัน",
      "station_code": "RF.PTW.01",
      "province": "กรุงเทพมหานคร",
      "district": "ปทุมวัน",
      "lat": 13.74493,
      "lon": 100.5222,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.776769904148274,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ดอนเมือง",
      "station_code": "RF.DMG.01",
      "province": "กรุงเทพมหานคร",
      "district": "ดอนเมือง",
      "lat": 13.91053,
      "lon": 100.59492,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.770226656005836,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ลาดพร้าว",
      "station_code": "RF.LPW.01",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดพร้าว",
      "lat": 13.80353,
      "lon": 100.60746,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.506541991010472,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองประเวศฯ-ลาดกระบัง",
      "station_code": "RF.LKB.02",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.72386,
      "lon": 100.74979,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.732101082784837,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองหลวงแพ่ง",
      "station_code": "RF.NJK.05",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.81321,
      "lon": 100.93742,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.12134025455313,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยศึกษาการพัฒนาการอนุรักษ์ต้นน้ำปิงส่วนที่ 2 จังหวัดเชียงใหม่",
      "station_code": "MOU001",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.875978,
      "lon": 98.79428,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.78040063937346,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ห้วยป่าเลา",
      "station_code": "MOU003",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.836586,
      "lon": 98.78661,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.107596883298854,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ลาน",
      "station_code": "MOU005",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.773909,
      "lon": 98.69296,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.99370365700199,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยป้องกันรักษาป่าที่ ชม. ๑๓ (สันป่าตอง)",
      "station_code": "MOU006",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.632383,
      "lon": 98.70691,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.97506055308093,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติดอยขุนตาล",
      "station_code": "MOU052",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.495703,
      "lon": 99.27011,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.035988870280494,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ลำน้ำกวงสะพานศรีดอนชัย",
      "station_code": "FOP015",
      "province": "ลำพูน",
      "district": "บ้านธิ",
      "lat": 18.653353,
      "lon": 99.06447,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.384441677806887,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ลำน้ำสานบ้านทุ่งยาวเหนือ",
      "station_code": "FOP016",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.511826,
      "lon": 99.07731,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.52263887180247,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนแม่กลอง",
      "station_code": "MKSND04",
      "province": "กาญจนบุรี",
      "district": "ท่าม่วง",
      "lat": 13.95678,
      "lon": 99.61505,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.656212216313946,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "วัดหินแท่น (K.62)",
      "station_code": "MKVKD09",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.78093,
      "lon": 99.42085,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.03611661451666,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "สะพานวัดมงคลร่วมใจ (บ้านวังสาร)",
      "station_code": "FOP022",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.670555,
      "lon": 100.32789,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.807326663586515,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "เขตห้ามล่าสัตว์ป่าหนองหานกุมภวาปี",
      "station_code": "MOU089",
      "province": "อุดรธานี",
      "district": "ประจักษ์ศิลปาคม",
      "lat": 17.210785,
      "lon": 103.00368,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.05224532059065,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สถานีควบคุมไฟป่าภูฝอยลม",
      "station_code": "MOU091",
      "province": "อุดรธานี",
      "district": "หนองแสง",
      "lat": 17.15843,
      "lon": 102.69399,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.86109395066772,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ห้วยหลวง",
      "station_code": "MOU092",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.078602,
      "lon": 102.56056,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.49910624458178,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์ศึกษาการพัฒนาการอนุรักษ์ต้นน้ำลุ่มน้ำชี",
      "station_code": "MOU093",
      "province": "ขอนแก่น",
      "district": "อุบลรัตน์",
      "lat": 16.931898,
      "lon": 102.70161,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.97780435600504,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์เนินหอม",
      "station_code": "MOU116",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.174927,
      "lon": 101.43875,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.772552410745256,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาหัวนา",
      "station_code": "STN1580",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.344969,
      "lon": 101.11381,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.10951219609385,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองขาหยั่ง",
      "station_code": "STN1581",
      "province": "ฉะเชิงเทรา",
      "district": "ท่าตะเกียบ",
      "lat": 13.323691,
      "lon": 101.675214,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.810771135849365,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองมะนาว",
      "station_code": "STN1586",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.635338,
      "lon": 102.280666,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.194588131796827,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังรี",
      "station_code": "STN1593",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.333768,
      "lon": 101.195938,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.032304015443806,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนดินดำ",
      "station_code": "STN1597",
      "province": "พัทลุง",
      "district": "ป่าบอน",
      "lat": 7.132483,
      "lon": 100.007778,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 18:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.22878128002875,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งปรือ",
      "station_code": "STN1621",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.815911,
      "lon": 100.554191,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.296569538044483,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านมาบตอง",
      "station_code": "STN1657",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.805375,
      "lon": 101.23584,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.7363282289368601,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านธรรมสถิตย์",
      "station_code": "STN1659",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.702964,
      "lon": 101.444685,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.9743283114886534,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งไพล",
      "station_code": "STN1715",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.547668,
      "lon": 100.836957,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.77246490226134,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทจ.1 (ห้วยต้นห้าง)",
      "station_code": "MOU453",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.4169,
      "lon": 99.555,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.22265938238649,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "องค์การบริหารส่วนตำบลบางลาย หมู่ที่ 3",
      "station_code": "FT03",
      "province": "พิจิตร",
      "district": "บึงนาราง",
      "lat": 16.19118,
      "lon": 100.23879,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.781185552109186,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติแม่ตะไคร้ ",
      "station_code": "DNP077",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.96566,
      "lon": 99.2407,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.75334189255487,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ มค.3 (แม่กวง)",
      "station_code": "DNP078",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.95247,
      "lon": 99.13795,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.381114432933025,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขต.5 (แม่ไพร)",
      "station_code": "DNP081",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.42716,
      "lon": 99.35545,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.515074180699685,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานบ้านคันแม่น้ำบน",
      "station_code": "SKT004",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.81476,
      "lon": 99.80374,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.3918896494035,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองดาน",
      "station_code": "UDN001",
      "province": "อุดรธานี",
      "district": "บ้านผือ",
      "lat": 17.38925,
      "lon": 103.08734,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.660308412072265,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองสงคราม",
      "station_code": "UDN003",
      "province": "อุดรธานี",
      "district": "สร้างคอม",
      "lat": 17.39577,
      "lon": 103.30043,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.45760158424925,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนพระรามหก",
      "station_code": "ridtele_T.RamaVIDam",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.557742,
      "lon": 100.761168,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.365211116977594,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านป้อม",
      "station_code": "G09006-TA100218",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.368386,
      "lon": 100.52908,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 18:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.244249844311737,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเดชาติวงศ์",
      "station_code": "G09006-TA100212",
      "province": "นครสวรรค์",
      "district": "เมืองนครสวรรค์",
      "lat": 15.689367,
      "lon": 100.1234,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.33443367389998,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองอู่ตะเภาตอนล่าง",
      "station_code": "G09006-TA200304",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.00208,
      "lon": 100.45587,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.62436969158755,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านค่ายรวมมิตร",
      "station_code": "G09006-TC221301",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.904969,
      "lon": 100.1292,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.924730844610405,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังกะจะ",
      "station_code": "G09006-TC151005",
      "province": "ฉะเชิงเทรา",
      "district": "แปลงยาว",
      "lat": 13.564515,
      "lon": 101.27105,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.434061928226125,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ไชยวาน",
      "station_code": "G09006-TA042212",
      "province": "อุดรธานี",
      "district": "ไชยวาน",
      "lat": 17.285117,
      "lon": 103.22793,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.6138502228682,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านชำป่างาม",
      "station_code": "G09006-TC150802",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.677758,
      "lon": 101.602,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.987587498802952,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานวังประดู่",
      "station_code": "G09006-TA092204",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.774935,
      "lon": 100.40504,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.16529646122387,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนอุดรธรรมานุสรณ์",
      "station_code": "G09006-TC031507",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.304643,
      "lon": 102.7926,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.655061795164144,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนหนองหานวิทยา",
      "station_code": "G09006-TC031601",
      "province": "อุดรธานี",
      "district": "หนองหาน",
      "lat": 17.358859,
      "lon": 103.10598,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.437027211687226,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนอนุบาลทุ่งฝน",
      "station_code": "G09006-TC031901",
      "province": "อุดรธานี",
      "district": "ทุ่งฝน",
      "lat": 17.468754,
      "lon": 103.27038,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 17:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.994235326420274,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังท่าช้าง",
      "station_code": "G09006-TC150302",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.759265,
      "lon": 101.88831,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.47059700154594,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนชุมชนกุดหมากไฟ",
      "station_code": "G09006-TC031504",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.088444,
      "lon": 102.60749,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.90462052459155,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านตากฟ้า",
      "station_code": "G09006-TC150108",
      "province": "สระแก้ว",
      "district": "คลองหาด",
      "lat": 13.500252,
      "lon": 102.22458,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.48249399829695,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านไทรทอง",
      "station_code": "G09006-TC150109",
      "province": "สระแก้ว",
      "district": "เขาฉกรรจ์",
      "lat": 13.54572,
      "lon": 101.95387,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.94785621046127,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยชัน",
      "station_code": "G09006-TC150205",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.986452,
      "lon": 102.44114,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-11-01 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.6615978917213,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่ามะปรางค์",
      "station_code": "M.43A",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51204,
      "lon": 101.380348,
      "waterlevel_msl": 372.83,
      "storage_percent": 29.67,
      "bankfull_msl": null,
      "value_text": "372.83 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.97170823213221,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "YOM008",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.70818,
      "lon": 100.17179,
      "waterlevel_msl": 32.89,
      "storage_percent": 29.59,
      "bankfull_msl": null,
      "value_text": "32.89 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.967810300867315,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สำนักเทคโนโลยีชีวภัณฑ์สัตว์",
      "station_code": "M.89",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.69785,
      "lon": 101.415154,
      "waterlevel_msl": 293.12,
      "storage_percent": 29.02,
      "bankfull_msl": null,
      "value_text": "293.12 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.537954498051086,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานข้ามคลองบ้านท่าวัง",
      "station_code": "PLG001",
      "province": "พัทลุง",
      "district": "บางแก้ว",
      "lat": 7.37654,
      "lon": 100.10043,
      "waterlevel_msl": 16.17,
      "storage_percent": 28.54,
      "bankfull_msl": null,
      "value_text": "16.17 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.95749858969102,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านสลวงนอก",
      "station_code": "P.93",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 19.015091,
      "lon": 98.880836,
      "waterlevel_msl": 341.19,
      "storage_percent": 28.4,
      "bankfull_msl": null,
      "value_text": "341.19 ม.รทก.",
      "observed_at": "2026-11-01 06:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.79068518938278,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "วัดหินแท่น (K.62)",
      "station_code": "MKVKD09",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.78093,
      "lon": 99.42085,
      "waterlevel_msl": 50.25,
      "storage_percent": 27.45,
      "bankfull_msl": null,
      "value_text": "50.25 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.03611661451666,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "ลำน้ำสานบ้านทุ่งยาวเหนือ",
      "station_code": "FOP016",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.511826,
      "lon": 99.07731,
      "waterlevel_msl": 317.8,
      "storage_percent": 27.45,
      "bankfull_msl": null,
      "value_text": "317.8 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.52263887180247,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองผันน้ำยม-น่าน4",
      "station_code": "DIV004",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.67167,
      "lon": 100.24581,
      "waterlevel_msl": 36.81,
      "storage_percent": 27.24,
      "bankfull_msl": null,
      "value_text": "36.81 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.872698547385934,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป่าซาง",
      "station_code": "P.87",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.519119,
      "lon": 98.942291,
      "waterlevel_msl": 288.92,
      "storage_percent": 27.03,
      "bankfull_msl": null,
      "value_text": "288.92 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.49732805181853,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านนาแขม",
      "station_code": "Kgt.43A",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.02174,
      "lon": 101.750664,
      "waterlevel_msl": 4.31,
      "storage_percent": 26.75,
      "bankfull_msl": null,
      "value_text": "4.31 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.03117019647864,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแม่ขรี",
      "station_code": "X.267",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.33842,
      "lon": 100.109978,
      "waterlevel_msl": 22.02,
      "storage_percent": 26.06,
      "bankfull_msl": null,
      "value_text": "22.02 ม.รทก.",
      "observed_at": "2026-10-31 06:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.906976440754036,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหนองไผ่",
      "station_code": "K.62",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.78092,
      "lon": 99.420921,
      "waterlevel_msl": 50.2,
      "storage_percent": 25.2,
      "bankfull_msl": null,
      "value_text": "50.2 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.02850371868432,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป่า",
      "station_code": "S.9",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.62918,
      "lon": 101.014427,
      "waterlevel_msl": 8.85,
      "storage_percent": 23.82,
      "bankfull_msl": null,
      "value_text": "8.85 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.8464884712603398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
      "station_code": "TCP012",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.327773,
      "lon": 100.405464,
      "waterlevel_msl": 0.71,
      "storage_percent": 23.67,
      "bankfull_msl": null,
      "value_text": "0.71 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.830034274183255,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองสงคราม",
      "station_code": "UDN003",
      "province": "อุดรธานี",
      "district": "สร้างคอม",
      "lat": 17.39577,
      "lon": 103.30043,
      "waterlevel_msl": 164.5,
      "storage_percent": 23.5,
      "bankfull_msl": null,
      "value_text": "164.5 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.45760158424925,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "วัดท่าระหัด",
      "station_code": "S.7A",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.78944,
      "lon": 101.117104,
      "waterlevel_msl": 43.5,
      "storage_percent": 23.38,
      "bankfull_msl": null,
      "value_text": "43.5 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.753226281537014,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโนนสุขภูมิ",
      "station_code": "Kgt.13A",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.91009,
      "lon": 101.838211,
      "waterlevel_msl": 7.7,
      "storage_percent": 23.13,
      "bankfull_msl": null,
      "value_text": "7.7 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.91451213461515,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพรหมโหด",
      "station_code": "SKE003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.705864,
      "lon": 102.48168,
      "waterlevel_msl": 41.53,
      "storage_percent": 23.1,
      "bankfull_msl": null,
      "value_text": "41.53 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.131766068445735,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำลำตะคอง",
      "station_code": "MOU246",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.550208,
      "lon": 101.459465,
      "waterlevel_msl": 345.11,
      "storage_percent": 21.93,
      "bankfull_msl": null,
      "value_text": "345.11 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.271067024949225,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองนางรอง",
      "station_code": "MOU461",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.315195,
      "lon": 101.312836,
      "waterlevel_msl": 23.53,
      "storage_percent": 21.69,
      "bankfull_msl": null,
      "value_text": "23.53 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.79263454648103,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "นาดี",
      "station_code": "PRC003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.133605,
      "lon": 101.72767,
      "waterlevel_msl": 9.46,
      "storage_percent": 21.35,
      "bankfull_msl": null,
      "value_text": "9.46 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.92980239014854,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโป่ง",
      "station_code": "P.81",
      "province": "เชียงใหม่",
      "district": "สารภี",
      "lat": 18.69521,
      "lon": 99.078751,
      "waterlevel_msl": 291.31,
      "storage_percent": 20.83,
      "bankfull_msl": null,
      "value_text": "291.31 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.24338873778254,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโนนตูม",
      "station_code": "Kh.103",
      "province": "อุดรธานี",
      "district": "เมืองอุดรธานี",
      "lat": 17.482571,
      "lon": 102.797394,
      "waterlevel_msl": 167.69,
      "storage_percent": 20.53,
      "bankfull_msl": null,
      "value_text": "167.69 ม.รทก.",
      "observed_at": "2026-11-01 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.736028811714558,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านพันตน",
      "station_code": "P.84",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.59133,
      "lon": 98.796623,
      "waterlevel_msl": 303.94,
      "storage_percent": 20.1,
      "bankfull_msl": null,
      "value_text": "303.94 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.389433523569583,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทุ่งปราบ",
      "station_code": "X.113",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63504,
      "lon": 100.39341,
      "waterlevel_msl": 32.32,
      "storage_percent": 19.21,
      "bankfull_msl": null,
      "value_text": "32.32 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.599631491585654,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองวังตะไคร้",
      "station_code": "MOU462",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.321305,
      "lon": 101.30604,
      "waterlevel_msl": 26.68,
      "storage_percent": 18.41,
      "bankfull_msl": null,
      "value_text": "26.68 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95471174698642,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแม่หวาน",
      "station_code": "P.79",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.9643,
      "lon": 99.237518,
      "waterlevel_msl": 442.61,
      "storage_percent": 17.57,
      "bankfull_msl": null,
      "value_text": "442.61 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.46351091466168,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "waterlevel_msl": 11.84,
      "storage_percent": 17.47,
      "bankfull_msl": null,
      "value_text": "11.84 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.703677802963367,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโห้ง",
      "station_code": "P.86",
      "province": "เชียงใหม่",
      "district": "สันกำแพง",
      "lat": 18.739611,
      "lon": 99.218651,
      "waterlevel_msl": 341.0,
      "storage_percent": 15.63,
      "bankfull_msl": null,
      "value_text": "341 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.47590252766334,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สันทราย",
      "station_code": "CHM001",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 19.00979,
      "lon": 98.95975,
      "waterlevel_msl": 314.24,
      "storage_percent": 13.9,
      "bankfull_msl": null,
      "value_text": "314.24 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.06728169191569,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหูแร่",
      "station_code": "X.240",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98306,
      "lon": 100.328331,
      "waterlevel_msl": 17.69,
      "storage_percent": 13.18,
      "bankfull_msl": null,
      "value_text": "17.69 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.463048298170036,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานพัฒนามิตรภาพแม่น้ำตุ๋ย",
      "station_code": "MOU325",
      "province": "ลำปาง",
      "district": "เมืองลำปาง",
      "lat": 18.474373,
      "lon": 99.46628,
      "waterlevel_msl": 266.11,
      "storage_percent": 11.92,
      "bankfull_msl": null,
      "value_text": "266.11 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.30543843174566,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "แม่น้ำปิงที่ อ.จอมทอง",
      "station_code": "BBU01",
      "province": "เชียงใหม่",
      "district": "ดอยหล่อ",
      "lat": 18.435266,
      "lon": 98.740107,
      "waterlevel_msl": 271.29,
      "storage_percent": 11.48,
      "bankfull_msl": null,
      "value_text": "271.29 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.409006009977226,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโป่งดิน",
      "station_code": "P.80",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.916401,
      "lon": 99.235817,
      "waterlevel_msl": 455.47,
      "storage_percent": 11.43,
      "bankfull_msl": null,
      "value_text": "455.47 ม.รทก.",
      "observed_at": "2026-11-01 12:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.72868375605304,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองลำพญาธาร",
      "station_code": "MOU460",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.26568,
      "lon": 101.89133,
      "waterlevel_msl": 79.17,
      "storage_percent": 10.69,
      "bankfull_msl": null,
      "value_text": "79.17 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.930789681787886,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ท้ายเขื่อนป่าสักชลสิทธิ์",
      "station_code": "S.28",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.83464,
      "lon": 101.084297,
      "waterlevel_msl": 16.58,
      "storage_percent": 9.32,
      "bankfull_msl": null,
      "value_text": "16.58 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.74608468709011,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำแม่ขาน",
      "station_code": "MOU293",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.7955,
      "lon": 98.7307,
      "waterlevel_msl": 440.09,
      "storage_percent": 8.52,
      "bankfull_msl": null,
      "value_text": "440.09 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79867579046488,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองภาษีเจริญ เพชรเกษม69",
      "station_code": "BKK005",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.69158,
      "lon": 100.38127,
      "waterlevel_msl": -5.93,
      "storage_percent": 8.44,
      "bankfull_msl": null,
      "value_text": "-5.93 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.633474059900415,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองดาน",
      "station_code": "UDN001",
      "province": "อุดรธานี",
      "district": "บ้านผือ",
      "lat": 17.38925,
      "lon": 103.08734,
      "waterlevel_msl": 163.12,
      "storage_percent": 4.0,
      "bankfull_msl": null,
      "value_text": "163.12 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.660308412072265,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำแม่สา",
      "station_code": "MOU009",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.885838,
      "lon": 98.826904,
      "waterlevel_msl": 735.21,
      "storage_percent": 0.0,
      "bankfull_msl": null,
      "value_text": "735.21 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.55447608245622,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "จะนะ",
      "station_code": "JNA001",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.916742,
      "lon": 100.72962,
      "waterlevel_msl": 2.47,
      "storage_percent": -10.55,
      "bankfull_msl": null,
      "value_text": "2.47 ม.รทก.",
      "observed_at": "2026-11-01 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.06762398773943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป่าขะ",
      "station_code": "Ny.3",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.28644,
      "lon": 101.070473,
      "waterlevel_msl": 9.22,
      "storage_percent": null,
      "bankfull_msl": null,
      "value_text": "9.22 ม.รทก.",
      "observed_at": "2026-11-01 21:00",
      "status": "ไม่มีข้อมูล",
      "severity_score": 0,
      "distance_km": 21.137617579600168,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    }
  ],
  "summary": {
    "estate_total": 70,
    "estate_count": 67,
    "station_count": 1107,
    "alert_station_count": 189,
    "heavy_rain_estate_count": 15,
    "rain_alert_estate_count": 55,
    "water_alert_estate_count": 55,
    "critical_count": 57,
    "rain_station_count": 908,
    "waterlevel_station_count": 199,
    "waterlevel_alert_count": 102,
    "max_rainfall_mm": 97.8,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.ตรัง",
      "จ.นครศรีธรรมราช",
      "จ.นราธิวาส",
      "จ.ระยอง"
    ],
    "flood_watch_province_count": 4,
    "flash_flood_24h_area_count": 5,
    "flash_flood_48h_area_count": 0,
    "warning_title": "กรมอุตุนิยมวิทยา | ประกาศเตือนภัยลักษณะอากาศ",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "coverage": {
    "stations_complete": true,
    "station_count": 1107,
    "estate_location_source": "ArcGIS geometry in EPSG:4326"
  },
  "flash_flood": {
    "24h": {
      "period": "24h",
      "status": "ok",
      "date": "2026-11-01",
      "time": "22:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
        {
          "geocode": "210601",
          "tambon": "ต.ปลวกแดง",
          "amphoe": "อ.ปลวกแดง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.ปลวกแดง",
          "latitude": 12.970066,
          "longitude": 101.20457,
          "sum_rainfall_mm": 107.19999999999999,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.17339,
                  13.02066
                ],
                [
                  101.17552,
                  13.01828
                ],
                [
                  101.18104,
                  13.00658
                ],
                [
                  101.18177,
                  13.0089
                ],
                [
                  101.18712,
                  13.01201
                ],
                [
                  101.18724,
                  13.01378
                ],
                [
                  101.1905,
                  13.01799
                ],
                [
                  101.19877,
                  13.01675
                ],
                [
                  101.20047,
                  13.01359
                ],
                [
                  101.20651,
                  13.01828
                ],
                [
                  101.21021,
                  13.01956
                ],
                [
                  101.21115,
                  13.01035
                ],
                [
                  101.21277,
                  13.00932
                ],
                [
                  101.21616,
                  13.00309
                ],
                [
                  101.2198,
                  12.99995
                ],
                [
                  101.22066,
                  13.0002
                ],
                [
                  101.21966,
                  13.00434
                ],
                [
                  101.22199,
                  13.00559
                ],
                [
                  101.22214,
                  13.0091
                ],
                [
                  101.22983,
                  13.00711
                ],
                [
                  101.23528,
                  13.00794
                ],
                [
                  101.23152,
                  13.00378
                ],
                [
                  101.23755,
                  12.99797
                ],
                [
                  101.24765,
                  12.99735
                ],
                [
                  101.253,
                  12.9994
                ],
                [
                  101.26022,
                  12.99122
                ],
                [
                  101.28354,
                  12.97619
                ],
                [
                  101.28206,
                  12.972
                ],
                [
                  101.27926,
                  12.96883
                ],
                [
                  101.2789,
                  12.96415
                ],
                [
                  101.27988,
                  12.96223
                ],
                [
                  101.28759,
                  12.95925
                ],
                [
                  101.28854,
                  12.95232
                ],
                [
                  101.29309,
                  12.95263
                ],
                [
                  101.29434,
                  12.95158
                ],
                [
                  101.29575,
                  12.94462
                ],
                [
                  101.29285,
                  12.94007
                ],
                [
                  101.28744,
                  12.93746
                ],
                [
                  101.28434,
                  12.93373
                ],
                [
                  101.28436,
                  12.93071
                ],
                [
                  101.28346,
                  12.93115
                ],
                [
                  101.28483,
                  12.92699
                ],
                [
                  101.28373,
                  12.92559
                ],
                [
                  101.28107,
                  12.92806
                ],
                [
                  101.27798,
                  12.92791
                ],
                [
                  101.27487,
                  12.93182
                ],
                [
                  101.27202,
                  12.93223
                ],
                [
                  101.27121,
                  12.93413
                ],
                [
                  101.26763,
                  12.9339
                ],
                [
                  101.26245,
                  12.93868
                ],
                [
                  101.26029,
                  12.93864
                ],
                [
                  101.25897,
                  12.94057
                ],
                [
                  101.25197,
                  12.93884
                ],
                [
                  101.24893,
                  12.94607
                ],
                [
                  101.24594,
                  12.94713
                ],
                [
                  101.2462,
                  12.94847
                ],
                [
                  101.24487,
                  12.94867
                ],
                [
                  101.24481,
                  12.94977
                ],
                [
                  101.24125,
                  12.95003
                ],
                [
                  101.24118,
                  12.95143
                ],
                [
                  101.239,
                  12.95239
                ],
                [
                  101.23656,
                  12.95627
                ],
                [
                  101.22868,
                  12.95728
                ],
                [
                  101.22518,
                  12.95536
                ],
                [
                  101.22054,
                  12.95929
                ],
                [
                  101.21615,
                  12.95577
                ],
                [
                  101.20561,
                  12.95599
                ],
                [
                  101.19939,
                  12.95471
                ],
                [
                  101.1939,
                  12.95762
                ],
                [
                  101.19164,
                  12.96207
                ],
                [
                  101.18717,
                  12.96123
                ],
                [
                  101.18519,
                  12.96432
                ],
                [
                  101.18607,
                  12.97293
                ],
                [
                  101.17937,
                  12.97405
                ],
                [
                  101.17883,
                  12.97585
                ],
                [
                  101.17711,
                  12.97607
                ],
                [
                  101.17625,
                  12.98286
                ],
                [
                  101.17446,
                  12.98474
                ],
                [
                  101.1735,
                  12.98867
                ],
                [
                  101.16863,
                  12.99236
                ],
                [
                  101.16668,
                  12.99168
                ],
                [
                  101.16413,
                  12.99517
                ],
                [
                  101.16214,
                  12.99538
                ],
                [
                  101.15906,
                  12.99868
                ],
                [
                  101.1544,
                  12.99977
                ],
                [
                  101.15078,
                  12.99898
                ],
                [
                  101.14834,
                  13.00082
                ],
                [
                  101.14418,
                  13.00071
                ],
                [
                  101.14027,
                  13.00402
                ],
                [
                  101.1401,
                  13.00974
                ],
                [
                  101.13555,
                  13.01473
                ],
                [
                  101.13723,
                  13.01481
                ],
                [
                  101.14028,
                  13.01249
                ],
                [
                  101.14292,
                  13.00778
                ],
                [
                  101.14778,
                  13.00715
                ],
                [
                  101.15085,
                  13.00385
                ],
                [
                  101.15532,
                  13.00178
                ],
                [
                  101.15708,
                  13.00423
                ],
                [
                  101.15524,
                  13.00765
                ],
                [
                  101.15719,
                  13.01576
                ],
                [
                  101.16073,
                  13.01626
                ],
                [
                  101.16234,
                  13.01792
                ],
                [
                  101.16571,
                  13.01059
                ],
                [
                  101.16665,
                  13.01202
                ],
                [
                  101.16647,
                  13.01607
                ],
                [
                  101.16739,
                  13.01667
                ],
                [
                  101.17106,
                  13.01114
                ],
                [
                  101.17304,
                  13.01037
                ],
                [
                  101.17429,
                  13.01399
                ],
                [
                  101.17112,
                  13.0163
                ],
                [
                  101.17339,
                  13.02066
                ]
              ]
            ]
          }
        },
        {
          "geocode": "920412",
          "tambon": "ต.ท่าพญา",
          "amphoe": "อ.ปะเหลียน",
          "province": "จ.ตรัง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านย่านตาขาว(X.236)",
          "latitude": 7.371919,
          "longitude": 99.677505,
          "sum_rainfall_mm": 101.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.69907,
                  7.36633
                ],
                [
                  99.68696,
                  7.35393
                ],
                [
                  99.68573,
                  7.35104
                ],
                [
                  99.68335,
                  7.34918
                ],
                [
                  99.68018,
                  7.34937
                ],
                [
                  99.67951,
                  7.34629
                ],
                [
                  99.68508,
                  7.34248
                ],
                [
                  99.68551,
                  7.33737
                ],
                [
                  99.68719,
                  7.33604
                ],
                [
                  99.67193,
                  7.33663
                ],
                [
                  99.66778,
                  7.33533
                ],
                [
                  99.66485,
                  7.33226
                ],
                [
                  99.65706,
                  7.3349
                ],
                [
                  99.65273,
                  7.33327
                ],
                [
                  99.6476,
                  7.33591
                ],
                [
                  99.64756,
                  7.33813
                ],
                [
                  99.65533,
                  7.33832
                ],
                [
                  99.65229,
                  7.34123
                ],
                [
                  99.65303,
                  7.34425
                ],
                [
                  99.65053,
                  7.34604
                ],
                [
                  99.653,
                  7.34599
                ],
                [
                  99.65551,
                  7.3486
                ],
                [
                  99.65215,
                  7.35284
                ],
                [
                  99.65248,
                  7.35442
                ],
                [
                  99.65414,
                  7.35257
                ],
                [
                  99.65556,
                  7.35305
                ],
                [
                  99.65239,
                  7.35806
                ],
                [
                  99.65682,
                  7.36156
                ],
                [
                  99.65992,
                  7.36906
                ],
                [
                  99.66385,
                  7.36713
                ],
                [
                  99.66857,
                  7.3692
                ],
                [
                  99.6723,
                  7.36667
                ],
                [
                  99.67277,
                  7.3712
                ],
                [
                  99.67702,
                  7.37242
                ],
                [
                  99.6887,
                  7.36998
                ],
                [
                  99.69014,
                  7.37202
                ],
                [
                  99.69159,
                  7.37109
                ],
                [
                  99.69659,
                  7.37258
                ],
                [
                  99.69864,
                  7.36921
                ],
                [
                  99.70054,
                  7.36907
                ],
                [
                  99.69907,
                  7.36633
                ]
              ]
            ]
          }
        },
        {
          "geocode": "920412",
          "tambon": "ต.ท่าพญา",
          "amphoe": "อ.ปะเหลียน",
          "province": "จ.ตรัง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "ปะเหลียน",
          "latitude": 7.371991,
          "longitude": 99.677246,
          "sum_rainfall_mm": 124.19999999999999,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.69907,
                  7.36633
                ],
                [
                  99.68696,
                  7.35393
                ],
                [
                  99.68573,
                  7.35104
                ],
                [
                  99.68335,
                  7.34918
                ],
                [
                  99.68018,
                  7.34937
                ],
                [
                  99.67951,
                  7.34629
                ],
                [
                  99.68508,
                  7.34248
                ],
                [
                  99.68551,
                  7.33737
                ],
                [
                  99.68719,
                  7.33604
                ],
                [
                  99.67193,
                  7.33663
                ],
                [
                  99.66778,
                  7.33533
                ],
                [
                  99.66485,
                  7.33226
                ],
                [
                  99.65706,
                  7.3349
                ],
                [
                  99.65273,
                  7.33327
                ],
                [
                  99.6476,
                  7.33591
                ],
                [
                  99.64756,
                  7.33813
                ],
                [
                  99.65533,
                  7.33832
                ],
                [
                  99.65229,
                  7.34123
                ],
                [
                  99.65303,
                  7.34425
                ],
                [
                  99.65053,
                  7.34604
                ],
                [
                  99.653,
                  7.34599
                ],
                [
                  99.65551,
                  7.3486
                ],
                [
                  99.65215,
                  7.35284
                ],
                [
                  99.65248,
                  7.35442
                ],
                [
                  99.65414,
                  7.35257
                ],
                [
                  99.65556,
                  7.35305
                ],
                [
                  99.65239,
                  7.35806
                ],
                [
                  99.65682,
                  7.36156
                ],
                [
                  99.65992,
                  7.36906
                ],
                [
                  99.66385,
                  7.36713
                ],
                [
                  99.66857,
                  7.3692
                ],
                [
                  99.6723,
                  7.36667
                ],
                [
                  99.67277,
                  7.3712
                ],
                [
                  99.67702,
                  7.37242
                ],
                [
                  99.6887,
                  7.36998
                ],
                [
                  99.69014,
                  7.37202
                ],
                [
                  99.69159,
                  7.37109
                ],
                [
                  99.69659,
                  7.37258
                ],
                [
                  99.69864,
                  7.36921
                ],
                [
                  99.70054,
                  7.36907
                ],
                [
                  99.69907,
                  7.36633
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800304",
          "tambon": "ต.กำโลน",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "สะพานบ้านคีรีวง คลองท่าดี",
          "latitude": 8.432906,
          "longitude": 99.782646,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.73265,
                  8.49414
                ],
                [
                  99.74181,
                  8.49392
                ],
                [
                  99.7449,
                  8.49108
                ],
                [
                  99.75163,
                  8.48923
                ],
                [
                  99.75425,
                  8.49194
                ],
                [
                  99.76258,
                  8.49247
                ],
                [
                  99.76737,
                  8.48859
                ],
                [
                  99.77465,
                  8.48496
                ],
                [
                  99.78179,
                  8.47533
                ],
                [
                  99.78981,
                  8.46997
                ],
                [
                  99.78942,
                  8.46693
                ],
                [
                  99.79082,
                  8.46163
                ],
                [
                  99.78908,
                  8.45341
                ],
                [
                  99.79097,
                  8.44682
                ],
                [
                  99.79408,
                  8.44123
                ],
                [
                  99.79489,
                  8.43478
                ],
                [
                  99.80648,
                  8.42315
                ],
                [
                  99.80773,
                  8.41541
                ],
                [
                  99.81174,
                  8.40982
                ],
                [
                  99.80928,
                  8.39771
                ],
                [
                  99.80607,
                  8.39426
                ],
                [
                  99.80513,
                  8.38985
                ],
                [
                  99.80707,
                  8.38694
                ],
                [
                  99.80952,
                  8.38574
                ],
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.70827,
                  8.42771
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70013,
                  8.4316
                ],
                [
                  99.6999,
                  8.43264
                ],
                [
                  99.70453,
                  8.43724
                ],
                [
                  99.70204,
                  8.43992
                ],
                [
                  99.70156,
                  8.44434
                ],
                [
                  99.69962,
                  8.44876
                ],
                [
                  99.69751,
                  8.44978
                ],
                [
                  99.69766,
                  8.453
                ],
                [
                  99.69598,
                  8.45564
                ],
                [
                  99.69878,
                  8.45655
                ],
                [
                  99.70015,
                  8.45892
                ],
                [
                  99.69862,
                  8.4628
                ],
                [
                  99.69936,
                  8.46476
                ],
                [
                  99.69861,
                  8.46688
                ],
                [
                  99.70088,
                  8.47441
                ],
                [
                  99.70319,
                  8.47727
                ],
                [
                  99.70064,
                  8.48133
                ],
                [
                  99.70074,
                  8.48405
                ],
                [
                  99.71026,
                  8.48951
                ],
                [
                  99.71156,
                  8.49135
                ],
                [
                  99.717,
                  8.49188
                ],
                [
                  99.7218,
                  8.49061
                ],
                [
                  99.72865,
                  8.49409
                ],
                [
                  99.73265,
                  8.49414
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960608",
          "tambon": "ต.โคกสะตอ",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "วัดศรีภิญโญศรัทธาราม",
          "latitude": 6.27931,
          "longitude": 101.42126,
          "sum_rainfall_mm": 133.00000000000003,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.49668,
                  6.30665
                ],
                [
                  101.50217,
                  6.30763
                ],
                [
                  101.50287,
                  6.30451
                ],
                [
                  101.50496,
                  6.30277
                ],
                [
                  101.50528,
                  6.30011
                ],
                [
                  101.49984,
                  6.29604
                ],
                [
                  101.49668,
                  6.29136
                ],
                [
                  101.49568,
                  6.28866
                ],
                [
                  101.49572,
                  6.28108
                ],
                [
                  101.48685,
                  6.27119
                ],
                [
                  101.48579,
                  6.2615
                ],
                [
                  101.49149,
                  6.2522
                ],
                [
                  101.48458,
                  6.24647
                ],
                [
                  101.47788,
                  6.2451
                ],
                [
                  101.47301,
                  6.24708
                ],
                [
                  101.45891,
                  6.25965
                ],
                [
                  101.45224,
                  6.26418
                ],
                [
                  101.44765,
                  6.25923
                ],
                [
                  101.44358,
                  6.25663
                ],
                [
                  101.44118,
                  6.25157
                ],
                [
                  101.44014,
                  6.25182
                ],
                [
                  101.4397,
                  6.25501
                ],
                [
                  101.43798,
                  6.25659
                ],
                [
                  101.43355,
                  6.25416
                ],
                [
                  101.43036,
                  6.25818
                ],
                [
                  101.42498,
                  6.25653
                ],
                [
                  101.4172,
                  6.25983
                ],
                [
                  101.41078,
                  6.25943
                ],
                [
                  101.40363,
                  6.26302
                ],
                [
                  101.40021,
                  6.26328
                ],
                [
                  101.40027,
                  6.26735
                ],
                [
                  101.40257,
                  6.27205
                ],
                [
                  101.39948,
                  6.27796
                ],
                [
                  101.39945,
                  6.28161
                ],
                [
                  101.3948,
                  6.28689
                ],
                [
                  101.39553,
                  6.29288
                ],
                [
                  101.39392,
                  6.3002
                ],
                [
                  101.39565,
                  6.30361
                ],
                [
                  101.4077,
                  6.30238
                ],
                [
                  101.42094,
                  6.30611
                ],
                [
                  101.43213,
                  6.30775
                ],
                [
                  101.43613,
                  6.30485
                ],
                [
                  101.4408,
                  6.30354
                ],
                [
                  101.44444,
                  6.30411
                ],
                [
                  101.44693,
                  6.30662
                ],
                [
                  101.44718,
                  6.30854
                ],
                [
                  101.44954,
                  6.30926
                ],
                [
                  101.45406,
                  6.31317
                ],
                [
                  101.45559,
                  6.31222
                ],
                [
                  101.45783,
                  6.31282
                ],
                [
                  101.46053,
                  6.31098
                ],
                [
                  101.46732,
                  6.30933
                ],
                [
                  101.49042,
                  6.30614
                ],
                [
                  101.49668,
                  6.30665
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "210606",
          "tambon": "ต.หนองไร่",
          "amphoe": "อ.ปลวกแดง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านคลองป่าหวาย",
          "latitude": 12.978503,
          "longitude": 101.399368,
          "sum_rainfall_mm": 4.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.38535,
                  13.03304
                ],
                [
                  101.39143,
                  13.02912
                ],
                [
                  101.39414,
                  13.02425
                ],
                [
                  101.39797,
                  13.02174
                ],
                [
                  101.40485,
                  13.01073
                ],
                [
                  101.4065,
                  13.00594
                ],
                [
                  101.40787,
                  12.99178
                ],
                [
                  101.41022,
                  12.98925
                ],
                [
                  101.41554,
                  12.98671
                ],
                [
                  101.41352,
                  12.98211
                ],
                [
                  101.4165,
                  12.97316
                ],
                [
                  101.41516,
                  12.96312
                ],
                [
                  101.41883,
                  12.96083
                ],
                [
                  101.4204,
                  12.95684
                ],
                [
                  101.41223,
                  12.94325
                ],
                [
                  101.40747,
                  12.94009
                ],
                [
                  101.40844,
                  12.93684
                ],
                [
                  101.40592,
                  12.9369
                ],
                [
                  101.40409,
                  12.94135
                ],
                [
                  101.39997,
                  12.94264
                ],
                [
                  101.39594,
                  12.93766
                ],
                [
                  101.39446,
                  12.93275
                ],
                [
                  101.38949,
                  12.92936
                ],
                [
                  101.37831,
                  12.93266
                ],
                [
                  101.37993,
                  12.93927
                ],
                [
                  101.37126,
                  12.94237
                ],
                [
                  101.37191,
                  12.94756
                ],
                [
                  101.37419,
                  12.95091
                ],
                [
                  101.37367,
                  12.95186
                ],
                [
                  101.36718,
                  12.95928
                ],
                [
                  101.3593,
                  12.9639
                ],
                [
                  101.36219,
                  12.97739
                ],
                [
                  101.36852,
                  12.98788
                ],
                [
                  101.36486,
                  12.99042
                ],
                [
                  101.36387,
                  12.99298
                ],
                [
                  101.32579,
                  13.00694
                ],
                [
                  101.31723,
                  13.00776
                ],
                [
                  101.31696,
                  13.00379
                ],
                [
                  101.31504,
                  13.00224
                ],
                [
                  101.309,
                  13.00203
                ],
                [
                  101.30931,
                  13.00389
                ],
                [
                  101.30811,
                  13.00495
                ],
                [
                  101.30729,
                  13.00909
                ],
                [
                  101.30476,
                  13.0083
                ],
                [
                  101.29904,
                  13.01245
                ],
                [
                  101.2914,
                  13.01536
                ],
                [
                  101.28873,
                  13.015
                ],
                [
                  101.27314,
                  13.02344
                ],
                [
                  101.26902,
                  13.02373
                ],
                [
                  101.2618,
                  13.03074
                ],
                [
                  101.26114,
                  13.03759
                ],
                [
                  101.25787,
                  13.0395
                ],
                [
                  101.2544,
                  13.04475
                ],
                [
                  101.2575,
                  13.0496
                ],
                [
                  101.26833,
                  13.04923
                ],
                [
                  101.27428,
                  13.05547
                ],
                [
                  101.27897,
                  13.05588
                ],
                [
                  101.28314,
                  13.05363
                ],
                [
                  101.28707,
                  13.05392
                ],
                [
                  101.29031,
                  13.05078
                ],
                [
                  101.29302,
                  13.05161
                ],
                [
                  101.29131,
                  13.05714
                ],
                [
                  101.29252,
                  13.05873
                ],
                [
                  101.29322,
                  13.06555
                ],
                [
                  101.29812,
                  13.06796
                ],
                [
                  101.30184,
                  13.07301
                ],
                [
                  101.30639,
                  13.07464
                ],
                [
                  101.31056,
                  13.07321
                ],
                [
                  101.31402,
                  13.07844
                ],
                [
                  101.32312,
                  13.08334
                ],
                [
                  101.32466,
                  13.08571
                ],
                [
                  101.32612,
                  13.08307
                ],
                [
                  101.33085,
                  13.08208
                ],
                [
                  101.33325,
                  13.0766
                ],
                [
                  101.34131,
                  13.07461
                ],
                [
                  101.3438,
                  13.069
                ],
                [
                  101.34894,
                  13.0641
                ],
                [
                  101.35172,
                  13.05843
                ],
                [
                  101.35846,
                  13.05562
                ],
                [
                  101.36493,
                  13.0443
                ],
                [
                  101.36865,
                  13.04253
                ],
                [
                  101.37198,
                  13.04299
                ],
                [
                  101.37971,
                  13.03951
                ],
                [
                  101.38535,
                  13.03304
                ]
              ]
            ]
          }
        },
        {
          "geocode": "920403",
          "tambon": "ต.ปะเหลียน",
          "amphoe": "อ.ปะเหลียน",
          "province": "จ.ตรัง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านทุ่งข่า",
          "latitude": 7.357222,
          "longitude": 99.826177,
          "sum_rainfall_mm": 13.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.90396,
                  7.34694
                ],
                [
                  99.90241,
                  7.34382
                ],
                [
                  99.90454,
                  7.34053
                ],
                [
                  99.90348,
                  7.33351
                ],
                [
                  99.90454,
                  7.32964
                ],
                [
                  99.90696,
                  7.32654
                ],
                [
                  99.91204,
                  7.32262
                ],
                [
                  99.92003,
                  7.31937
                ],
                [
                  99.93185,
                  7.31777
                ],
                [
                  99.93766,
                  7.31845
                ],
                [
                  99.93916,
                  7.3171
                ],
                [
                  99.93944,
                  7.31386
                ],
                [
                  99.93809,
                  7.30959
                ],
                [
                  99.94044,
                  7.29591
                ],
                [
                  99.94117,
                  7.28532
                ],
                [
                  99.94033,
                  7.28171
                ],
                [
                  99.94335,
                  7.27219
                ],
                [
                  99.94585,
                  7.26864
                ],
                [
                  99.94624,
                  7.2655
                ],
                [
                  99.94402,
                  7.26381
                ],
                [
                  99.94225,
                  7.25867
                ],
                [
                  99.93646,
                  7.25428
                ],
                [
                  99.93292,
                  7.24681
                ],
                [
                  99.93266,
                  7.24322
                ],
                [
                  99.93396,
                  7.23988
                ],
                [
                  99.93555,
                  7.23967
                ],
                [
                  99.93823,
                  7.23608
                ],
                [
                  99.93783,
                  7.2333
                ],
                [
                  99.94118,
                  7.23025
                ],
                [
                  99.94699,
                  7.21801
                ],
                [
                  99.9478,
                  7.21415
                ],
                [
                  99.94619,
                  7.21144
                ],
                [
                  99.94858,
                  7.20371
                ],
                [
                  99.95118,
                  7.20171
                ],
                [
                  99.95723,
                  7.19995
                ],
                [
                  99.95929,
                  7.19802
                ],
                [
                  99.94142,
                  7.19386
                ],
                [
                  99.89911,
                  7.18846
                ],
                [
                  99.89606,
                  7.22329
                ],
                [
                  99.89126,
                  7.22923
                ],
                [
                  99.8881,
                  7.23655
                ],
                [
                  99.87258,
                  7.23668
                ],
                [
                  99.86834,
                  7.22561
                ],
                [
                  99.86147,
                  7.21702
                ],
                [
                  99.83332,
                  7.22549
                ],
                [
                  99.8145,
                  7.22555
                ],
                [
                  99.79903,
                  7.23651
                ],
                [
                  99.8012,
                  7.23766
                ],
                [
                  99.79839,
                  7.2452
                ],
                [
                  99.7988,
                  7.24729
                ],
                [
                  99.80299,
                  7.25301
                ],
                [
                  99.80259,
                  7.26221
                ],
                [
                  99.7798,
                  7.26271
                ],
                [
                  99.79193,
                  7.27123
                ],
                [
                  99.79469,
                  7.28079
                ],
                [
                  99.79229,
                  7.28225
                ],
                [
                  99.79112,
                  7.2854
                ],
                [
                  99.78986,
                  7.29841
                ],
                [
                  99.79093,
                  7.30061
                ],
                [
                  99.79549,
                  7.30414
                ],
                [
                  99.79566,
                  7.30561
                ],
                [
                  99.78972,
                  7.30841
                ],
                [
                  99.78461,
                  7.30803
                ],
                [
                  99.77758,
                  7.30316
                ],
                [
                  99.7763,
                  7.3005
                ],
                [
                  99.7608,
                  7.30122
                ],
                [
                  99.77527,
                  7.31692
                ],
                [
                  99.77408,
                  7.32233
                ],
                [
                  99.77241,
                  7.32408
                ],
                [
                  99.77385,
                  7.32804
                ],
                [
                  99.77084,
                  7.33014
                ],
                [
                  99.77169,
                  7.33182
                ],
                [
                  99.77021,
                  7.33232
                ],
                [
                  99.77103,
                  7.33478
                ],
                [
                  99.76965,
                  7.33654
                ],
                [
                  99.77121,
                  7.33723
                ],
                [
                  99.77248,
                  7.33591
                ],
                [
                  99.77359,
                  7.338
                ],
                [
                  99.77658,
                  7.33829
                ],
                [
                  99.77856,
                  7.3403
                ],
                [
                  99.77973,
                  7.34436
                ],
                [
                  99.77888,
                  7.34662
                ],
                [
                  99.77987,
                  7.35375
                ],
                [
                  99.78076,
                  7.35617
                ],
                [
                  99.78186,
                  7.35614
                ],
                [
                  99.78199,
                  7.35805
                ],
                [
                  99.78381,
                  7.35912
                ],
                [
                  99.78744,
                  7.36474
                ],
                [
                  99.79516,
                  7.36674
                ],
                [
                  99.79985,
                  7.36497
                ],
                [
                  99.80075,
                  7.36603
                ],
                [
                  99.79997,
                  7.36786
                ],
                [
                  99.80289,
                  7.37031
                ],
                [
                  99.80317,
                  7.37313
                ],
                [
                  99.80918,
                  7.37496
                ],
                [
                  99.8116,
                  7.37679
                ],
                [
                  99.81281,
                  7.37663
                ],
                [
                  99.81474,
                  7.37338
                ],
                [
                  99.8205,
                  7.37068
                ],
                [
                  99.82348,
                  7.37031
                ],
                [
                  99.82652,
                  7.37276
                ],
                [
                  99.83397,
                  7.37452
                ],
                [
                  99.83784,
                  7.37211
                ],
                [
                  99.8406,
                  7.37338
                ],
                [
                  99.84494,
                  7.37211
                ],
                [
                  99.85391,
                  7.36767
                ],
                [
                  99.87276,
                  7.36423
                ],
                [
                  99.87953,
                  7.36057
                ],
                [
                  99.89137,
                  7.35734
                ],
                [
                  99.89984,
                  7.35157
                ],
                [
                  99.90396,
                  7.34694
                ]
              ]
            ]
          }
        },
        {
          "geocode": "920403",
          "tambon": "ต.ปะเหลียน",
          "amphoe": "อ.ปะเหลียน",
          "province": "จ.ตรัง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านปากแคลง",
          "latitude": 7.312836,
          "longitude": 99.837274,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.90396,
                  7.34694
                ],
                [
                  99.90241,
                  7.34382
                ],
                [
                  99.90454,
                  7.34053
                ],
                [
                  99.90348,
                  7.33351
                ],
                [
                  99.90454,
                  7.32964
                ],
                [
                  99.90696,
                  7.32654
                ],
                [
                  99.91204,
                  7.32262
                ],
                [
                  99.92003,
                  7.31937
                ],
                [
                  99.93185,
                  7.31777
                ],
                [
                  99.93766,
                  7.31845
                ],
                [
                  99.93916,
                  7.3171
                ],
                [
                  99.93944,
                  7.31386
                ],
                [
                  99.93809,
                  7.30959
                ],
                [
                  99.94044,
                  7.29591
                ],
                [
                  99.94117,
                  7.28532
                ],
                [
                  99.94033,
                  7.28171
                ],
                [
                  99.94335,
                  7.27219
                ],
                [
                  99.94585,
                  7.26864
                ],
                [
                  99.94624,
                  7.2655
                ],
                [
                  99.94402,
                  7.26381
                ],
                [
                  99.94225,
                  7.25867
                ],
                [
                  99.93646,
                  7.25428
                ],
                [
                  99.93292,
                  7.24681
                ],
                [
                  99.93266,
                  7.24322
                ],
                [
                  99.93396,
                  7.23988
                ],
                [
                  99.93555,
                  7.23967
                ],
                [
                  99.93823,
                  7.23608
                ],
                [
                  99.93783,
                  7.2333
                ],
                [
                  99.94118,
                  7.23025
                ],
                [
                  99.94699,
                  7.21801
                ],
                [
                  99.9478,
                  7.21415
                ],
                [
                  99.94619,
                  7.21144
                ],
                [
                  99.94858,
                  7.20371
                ],
                [
                  99.95118,
                  7.20171
                ],
                [
                  99.95723,
                  7.19995
                ],
                [
                  99.95929,
                  7.19802
                ],
                [
                  99.94142,
                  7.19386
                ],
                [
                  99.89911,
                  7.18846
                ],
                [
                  99.89606,
                  7.22329
                ],
                [
                  99.89126,
                  7.22923
                ],
                [
                  99.8881,
                  7.23655
                ],
                [
                  99.87258,
                  7.23668
                ],
                [
                  99.86834,
                  7.22561
                ],
                [
                  99.86147,
                  7.21702
                ],
                [
                  99.83332,
                  7.22549
                ],
                [
                  99.8145,
                  7.22555
                ],
                [
                  99.79903,
                  7.23651
                ],
                [
                  99.8012,
                  7.23766
                ],
                [
                  99.79839,
                  7.2452
                ],
                [
                  99.7988,
                  7.24729
                ],
                [
                  99.80299,
                  7.25301
                ],
                [
                  99.80259,
                  7.26221
                ],
                [
                  99.7798,
                  7.26271
                ],
                [
                  99.79193,
                  7.27123
                ],
                [
                  99.79469,
                  7.28079
                ],
                [
                  99.79229,
                  7.28225
                ],
                [
                  99.79112,
                  7.2854
                ],
                [
                  99.78986,
                  7.29841
                ],
                [
                  99.79093,
                  7.30061
                ],
                [
                  99.79549,
                  7.30414
                ],
                [
                  99.79566,
                  7.30561
                ],
                [
                  99.78972,
                  7.30841
                ],
                [
                  99.78461,
                  7.30803
                ],
                [
                  99.77758,
                  7.30316
                ],
                [
                  99.7763,
                  7.3005
                ],
                [
                  99.7608,
                  7.30122
                ],
                [
                  99.77527,
                  7.31692
                ],
                [
                  99.77408,
                  7.32233
                ],
                [
                  99.77241,
                  7.32408
                ],
                [
                  99.77385,
                  7.32804
                ],
                [
                  99.77084,
                  7.33014
                ],
                [
                  99.77169,
                  7.33182
                ],
                [
                  99.77021,
                  7.33232
                ],
                [
                  99.77103,
                  7.33478
                ],
                [
                  99.76965,
                  7.33654
                ],
                [
                  99.77121,
                  7.33723
                ],
                [
                  99.77248,
                  7.33591
                ],
                [
                  99.77359,
                  7.338
                ],
                [
                  99.77658,
                  7.33829
                ],
                [
                  99.77856,
                  7.3403
                ],
                [
                  99.77973,
                  7.34436
                ],
                [
                  99.77888,
                  7.34662
                ],
                [
                  99.77987,
                  7.35375
                ],
                [
                  99.78076,
                  7.35617
                ],
                [
                  99.78186,
                  7.35614
                ],
                [
                  99.78199,
                  7.35805
                ],
                [
                  99.78381,
                  7.35912
                ],
                [
                  99.78744,
                  7.36474
                ],
                [
                  99.79516,
                  7.36674
                ],
                [
                  99.79985,
                  7.36497
                ],
                [
                  99.80075,
                  7.36603
                ],
                [
                  99.79997,
                  7.36786
                ],
                [
                  99.80289,
                  7.37031
                ],
                [
                  99.80317,
                  7.37313
                ],
                [
                  99.80918,
                  7.37496
                ],
                [
                  99.8116,
                  7.37679
                ],
                [
                  99.81281,
                  7.37663
                ],
                [
                  99.81474,
                  7.37338
                ],
                [
                  99.8205,
                  7.37068
                ],
                [
                  99.82348,
                  7.37031
                ],
                [
                  99.82652,
                  7.37276
                ],
                [
                  99.83397,
                  7.37452
                ],
                [
                  99.83784,
                  7.37211
                ],
                [
                  99.8406,
                  7.37338
                ],
                [
                  99.84494,
                  7.37211
                ],
                [
                  99.85391,
                  7.36767
                ],
                [
                  99.87276,
                  7.36423
                ],
                [
                  99.87953,
                  7.36057
                ],
                [
                  99.89137,
                  7.35734
                ],
                [
                  99.89984,
                  7.35157
                ],
                [
                  99.90396,
                  7.34694
                ]
              ]
            ]
          }
        },
        {
          "geocode": "920410",
          "tambon": "ต.ลิพัง",
          "amphoe": "อ.ปะเหลียน",
          "province": "จ.ตรัง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านท่าเขา*",
          "latitude": 7.158329,
          "longitude": 99.802767,
          "sum_rainfall_mm": 30.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.79903,
                  7.23651
                ],
                [
                  99.81497,
                  7.22532
                ],
                [
                  99.83332,
                  7.22549
                ],
                [
                  99.86147,
                  7.21702
                ],
                [
                  99.86834,
                  7.22561
                ],
                [
                  99.87258,
                  7.23668
                ],
                [
                  99.8881,
                  7.23655
                ],
                [
                  99.89126,
                  7.22923
                ],
                [
                  99.89606,
                  7.22329
                ],
                [
                  99.89911,
                  7.18846
                ],
                [
                  99.88763,
                  7.18381
                ],
                [
                  99.8736,
                  7.17072
                ],
                [
                  99.85937,
                  7.16849
                ],
                [
                  99.85037,
                  7.16379
                ],
                [
                  99.84508,
                  7.15942
                ],
                [
                  99.8359,
                  7.14807
                ],
                [
                  99.83258,
                  7.14015
                ],
                [
                  99.83067,
                  7.13833
                ],
                [
                  99.82466,
                  7.13785
                ],
                [
                  99.82088,
                  7.13493
                ],
                [
                  99.81212,
                  7.1336
                ],
                [
                  99.799,
                  7.12859
                ],
                [
                  99.78661,
                  7.14011
                ],
                [
                  99.78581,
                  7.13904
                ],
                [
                  99.78717,
                  7.13321
                ],
                [
                  99.78349,
                  7.12803
                ],
                [
                  99.78037,
                  7.1283
                ],
                [
                  99.77431,
                  7.1261
                ],
                [
                  99.76751,
                  7.12619
                ],
                [
                  99.76019,
                  7.1247
                ],
                [
                  99.7545,
                  7.12561
                ],
                [
                  99.74067,
                  7.13135
                ],
                [
                  99.73503,
                  7.13084
                ],
                [
                  99.74062,
                  7.14188
                ],
                [
                  99.74493,
                  7.15356
                ],
                [
                  99.74518,
                  7.15679
                ],
                [
                  99.74323,
                  7.16465
                ],
                [
                  99.7471,
                  7.16822
                ],
                [
                  99.74965,
                  7.17341
                ],
                [
                  99.74091,
                  7.17685
                ],
                [
                  99.7318,
                  7.1899
                ],
                [
                  99.73136,
                  7.19373
                ],
                [
                  99.73309,
                  7.19457
                ],
                [
                  99.73726,
                  7.19248
                ],
                [
                  99.73978,
                  7.1925
                ],
                [
                  99.74176,
                  7.19473
                ],
                [
                  99.74073,
                  7.20091
                ],
                [
                  99.74139,
                  7.20336
                ],
                [
                  99.74443,
                  7.20226
                ],
                [
                  99.75003,
                  7.20409
                ],
                [
                  99.75067,
                  7.20638
                ],
                [
                  99.7524,
                  7.20625
                ],
                [
                  99.7522,
                  7.20879
                ],
                [
                  99.75515,
                  7.20831
                ],
                [
                  99.75627,
                  7.20976
                ],
                [
                  99.75782,
                  7.20817
                ],
                [
                  99.75853,
                  7.21096
                ],
                [
                  99.75731,
                  7.21186
                ],
                [
                  99.75888,
                  7.21433
                ],
                [
                  99.75776,
                  7.21641
                ],
                [
                  99.76047,
                  7.21726
                ],
                [
                  99.7599,
                  7.21949
                ],
                [
                  99.76166,
                  7.21984
                ],
                [
                  99.76112,
                  7.22164
                ],
                [
                  99.76231,
                  7.22231
                ],
                [
                  99.76059,
                  7.22455
                ],
                [
                  99.76346,
                  7.22833
                ],
                [
                  99.77637,
                  7.22995
                ],
                [
                  99.77844,
                  7.23297
                ],
                [
                  99.78723,
                  7.23894
                ],
                [
                  99.79322,
                  7.23884
                ],
                [
                  99.79903,
                  7.23651
                ]
              ]
            ]
          }
        },
        {
          "geocode": "920410",
          "tambon": "ต.ลิพัง",
          "amphoe": "อ.ปะเหลียน",
          "province": "จ.ตรัง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านลิพัง",
          "latitude": 7.163563,
          "longitude": 99.78844,
          "sum_rainfall_mm": 15.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.79903,
                  7.23651
                ],
                [
                  99.81497,
                  7.22532
                ],
                [
                  99.83332,
                  7.22549
                ],
                [
                  99.86147,
                  7.21702
                ],
                [
                  99.86834,
                  7.22561
                ],
                [
                  99.87258,
                  7.23668
                ],
                [
                  99.8881,
                  7.23655
                ],
                [
                  99.89126,
                  7.22923
                ],
                [
                  99.89606,
                  7.22329
                ],
                [
                  99.89911,
                  7.18846
                ],
                [
                  99.88763,
                  7.18381
                ],
                [
                  99.8736,
                  7.17072
                ],
                [
                  99.85937,
                  7.16849
                ],
                [
                  99.85037,
                  7.16379
                ],
                [
                  99.84508,
                  7.15942
                ],
                [
                  99.8359,
                  7.14807
                ],
                [
                  99.83258,
                  7.14015
                ],
                [
                  99.83067,
                  7.13833
                ],
                [
                  99.82466,
                  7.13785
                ],
                [
                  99.82088,
                  7.13493
                ],
                [
                  99.81212,
                  7.1336
                ],
                [
                  99.799,
                  7.12859
                ],
                [
                  99.78661,
                  7.14011
                ],
                [
                  99.78581,
                  7.13904
                ],
                [
                  99.78717,
                  7.13321
                ],
                [
                  99.78349,
                  7.12803
                ],
                [
                  99.78037,
                  7.1283
                ],
                [
                  99.77431,
                  7.1261
                ],
                [
                  99.76751,
                  7.12619
                ],
                [
                  99.76019,
                  7.1247
                ],
                [
                  99.7545,
                  7.12561
                ],
                [
                  99.74067,
                  7.13135
                ],
                [
                  99.73503,
                  7.13084
                ],
                [
                  99.74062,
                  7.14188
                ],
                [
                  99.74493,
                  7.15356
                ],
                [
                  99.74518,
                  7.15679
                ],
                [
                  99.74323,
                  7.16465
                ],
                [
                  99.7471,
                  7.16822
                ],
                [
                  99.74965,
                  7.17341
                ],
                [
                  99.74091,
                  7.17685
                ],
                [
                  99.7318,
                  7.1899
                ],
                [
                  99.73136,
                  7.19373
                ],
                [
                  99.73309,
                  7.19457
                ],
                [
                  99.73726,
                  7.19248
                ],
                [
                  99.73978,
                  7.1925
                ],
                [
                  99.74176,
                  7.19473
                ],
                [
                  99.74073,
                  7.20091
                ],
                [
                  99.74139,
                  7.20336
                ],
                [
                  99.74443,
                  7.20226
                ],
                [
                  99.75003,
                  7.20409
                ],
                [
                  99.75067,
                  7.20638
                ],
                [
                  99.7524,
                  7.20625
                ],
                [
                  99.7522,
                  7.20879
                ],
                [
                  99.75515,
                  7.20831
                ],
                [
                  99.75627,
                  7.20976
                ],
                [
                  99.75782,
                  7.20817
                ],
                [
                  99.75853,
                  7.21096
                ],
                [
                  99.75731,
                  7.21186
                ],
                [
                  99.75888,
                  7.21433
                ],
                [
                  99.75776,
                  7.21641
                ],
                [
                  99.76047,
                  7.21726
                ],
                [
                  99.7599,
                  7.21949
                ],
                [
                  99.76166,
                  7.21984
                ],
                [
                  99.76112,
                  7.22164
                ],
                [
                  99.76231,
                  7.22231
                ],
                [
                  99.76059,
                  7.22455
                ],
                [
                  99.76346,
                  7.22833
                ],
                [
                  99.77637,
                  7.22995
                ],
                [
                  99.77844,
                  7.23297
                ],
                [
                  99.78723,
                  7.23894
                ],
                [
                  99.79322,
                  7.23884
                ],
                [
                  99.79903,
                  7.23651
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800304",
          "tambon": "ต.กำโลน",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านคีรีวง",
          "latitude": 8.434325,
          "longitude": 99.778012,
          "sum_rainfall_mm": 51.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.73265,
                  8.49414
                ],
                [
                  99.74181,
                  8.49392
                ],
                [
                  99.7449,
                  8.49108
                ],
                [
                  99.75163,
                  8.48923
                ],
                [
                  99.75425,
                  8.49194
                ],
                [
                  99.76258,
                  8.49247
                ],
                [
                  99.76737,
                  8.48859
                ],
                [
                  99.77465,
                  8.48496
                ],
                [
                  99.78179,
                  8.47533
                ],
                [
                  99.78981,
                  8.46997
                ],
                [
                  99.78942,
                  8.46693
                ],
                [
                  99.79082,
                  8.46163
                ],
                [
                  99.78908,
                  8.45341
                ],
                [
                  99.79097,
                  8.44682
                ],
                [
                  99.79408,
                  8.44123
                ],
                [
                  99.79489,
                  8.43478
                ],
                [
                  99.80648,
                  8.42315
                ],
                [
                  99.80773,
                  8.41541
                ],
                [
                  99.81174,
                  8.40982
                ],
                [
                  99.80928,
                  8.39771
                ],
                [
                  99.80607,
                  8.39426
                ],
                [
                  99.80513,
                  8.38985
                ],
                [
                  99.80707,
                  8.38694
                ],
                [
                  99.80952,
                  8.38574
                ],
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.70827,
                  8.42771
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70013,
                  8.4316
                ],
                [
                  99.6999,
                  8.43264
                ],
                [
                  99.70453,
                  8.43724
                ],
                [
                  99.70204,
                  8.43992
                ],
                [
                  99.70156,
                  8.44434
                ],
                [
                  99.69962,
                  8.44876
                ],
                [
                  99.69751,
                  8.44978
                ],
                [
                  99.69766,
                  8.453
                ],
                [
                  99.69598,
                  8.45564
                ],
                [
                  99.69878,
                  8.45655
                ],
                [
                  99.70015,
                  8.45892
                ],
                [
                  99.69862,
                  8.4628
                ],
                [
                  99.69936,
                  8.46476
                ],
                [
                  99.69861,
                  8.46688
                ],
                [
                  99.70088,
                  8.47441
                ],
                [
                  99.70319,
                  8.47727
                ],
                [
                  99.70064,
                  8.48133
                ],
                [
                  99.70074,
                  8.48405
                ],
                [
                  99.71026,
                  8.48951
                ],
                [
                  99.71156,
                  8.49135
                ],
                [
                  99.717,
                  8.49188
                ],
                [
                  99.7218,
                  8.49061
                ],
                [
                  99.72865,
                  8.49409
                ],
                [
                  99.73265,
                  8.49414
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800304",
          "tambon": "ต.กำโลน",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "สถานีวิจัยต้นน้ำคีรีวง",
          "latitude": 8.43217,
          "longitude": 99.76882,
          "sum_rainfall_mm": 64.39999999999999,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.73265,
                  8.49414
                ],
                [
                  99.74181,
                  8.49392
                ],
                [
                  99.7449,
                  8.49108
                ],
                [
                  99.75163,
                  8.48923
                ],
                [
                  99.75425,
                  8.49194
                ],
                [
                  99.76258,
                  8.49247
                ],
                [
                  99.76737,
                  8.48859
                ],
                [
                  99.77465,
                  8.48496
                ],
                [
                  99.78179,
                  8.47533
                ],
                [
                  99.78981,
                  8.46997
                ],
                [
                  99.78942,
                  8.46693
                ],
                [
                  99.79082,
                  8.46163
                ],
                [
                  99.78908,
                  8.45341
                ],
                [
                  99.79097,
                  8.44682
                ],
                [
                  99.79408,
                  8.44123
                ],
                [
                  99.79489,
                  8.43478
                ],
                [
                  99.80648,
                  8.42315
                ],
                [
                  99.80773,
                  8.41541
                ],
                [
                  99.81174,
                  8.40982
                ],
                [
                  99.80928,
                  8.39771
                ],
                [
                  99.80607,
                  8.39426
                ],
                [
                  99.80513,
                  8.38985
                ],
                [
                  99.80707,
                  8.38694
                ],
                [
                  99.80952,
                  8.38574
                ],
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.70827,
                  8.42771
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70013,
                  8.4316
                ],
                [
                  99.6999,
                  8.43264
                ],
                [
                  99.70453,
                  8.43724
                ],
                [
                  99.70204,
                  8.43992
                ],
                [
                  99.70156,
                  8.44434
                ],
                [
                  99.69962,
                  8.44876
                ],
                [
                  99.69751,
                  8.44978
                ],
                [
                  99.69766,
                  8.453
                ],
                [
                  99.69598,
                  8.45564
                ],
                [
                  99.69878,
                  8.45655
                ],
                [
                  99.70015,
                  8.45892
                ],
                [
                  99.69862,
                  8.4628
                ],
                [
                  99.69936,
                  8.46476
                ],
                [
                  99.69861,
                  8.46688
                ],
                [
                  99.70088,
                  8.47441
                ],
                [
                  99.70319,
                  8.47727
                ],
                [
                  99.70064,
                  8.48133
                ],
                [
                  99.70074,
                  8.48405
                ],
                [
                  99.71026,
                  8.48951
                ],
                [
                  99.71156,
                  8.49135
                ],
                [
                  99.717,
                  8.49188
                ],
                [
                  99.7218,
                  8.49061
                ],
                [
                  99.72865,
                  8.49409
                ],
                [
                  99.73265,
                  8.49414
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800304",
          "tambon": "ต.กำโลน",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "สะพานคลองปง (คีรีวง)",
          "latitude": 8.43379,
          "longitude": 99.78328,
          "sum_rainfall_mm": 141.20000000000002,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.73265,
                  8.49414
                ],
                [
                  99.74181,
                  8.49392
                ],
                [
                  99.7449,
                  8.49108
                ],
                [
                  99.75163,
                  8.48923
                ],
                [
                  99.75425,
                  8.49194
                ],
                [
                  99.76258,
                  8.49247
                ],
                [
                  99.76737,
                  8.48859
                ],
                [
                  99.77465,
                  8.48496
                ],
                [
                  99.78179,
                  8.47533
                ],
                [
                  99.78981,
                  8.46997
                ],
                [
                  99.78942,
                  8.46693
                ],
                [
                  99.79082,
                  8.46163
                ],
                [
                  99.78908,
                  8.45341
                ],
                [
                  99.79097,
                  8.44682
                ],
                [
                  99.79408,
                  8.44123
                ],
                [
                  99.79489,
                  8.43478
                ],
                [
                  99.80648,
                  8.42315
                ],
                [
                  99.80773,
                  8.41541
                ],
                [
                  99.81174,
                  8.40982
                ],
                [
                  99.80928,
                  8.39771
                ],
                [
                  99.80607,
                  8.39426
                ],
                [
                  99.80513,
                  8.38985
                ],
                [
                  99.80707,
                  8.38694
                ],
                [
                  99.80952,
                  8.38574
                ],
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.70827,
                  8.42771
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70013,
                  8.4316
                ],
                [
                  99.6999,
                  8.43264
                ],
                [
                  99.70453,
                  8.43724
                ],
                [
                  99.70204,
                  8.43992
                ],
                [
                  99.70156,
                  8.44434
                ],
                [
                  99.69962,
                  8.44876
                ],
                [
                  99.69751,
                  8.44978
                ],
                [
                  99.69766,
                  8.453
                ],
                [
                  99.69598,
                  8.45564
                ],
                [
                  99.69878,
                  8.45655
                ],
                [
                  99.70015,
                  8.45892
                ],
                [
                  99.69862,
                  8.4628
                ],
                [
                  99.69936,
                  8.46476
                ],
                [
                  99.69861,
                  8.46688
                ],
                [
                  99.70088,
                  8.47441
                ],
                [
                  99.70319,
                  8.47727
                ],
                [
                  99.70064,
                  8.48133
                ],
                [
                  99.70074,
                  8.48405
                ],
                [
                  99.71026,
                  8.48951
                ],
                [
                  99.71156,
                  8.49135
                ],
                [
                  99.717,
                  8.49188
                ],
                [
                  99.7218,
                  8.49061
                ],
                [
                  99.72865,
                  8.49409
                ],
                [
                  99.73265,
                  8.49414
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800304",
          "tambon": "ต.กำโลน",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "โรงเรียนวัดโคกโพธิ์สถิตย์",
          "latitude": 8.40118,
          "longitude": 99.802,
          "sum_rainfall_mm": 132.80000000000004,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.73265,
                  8.49414
                ],
                [
                  99.74181,
                  8.49392
                ],
                [
                  99.7449,
                  8.49108
                ],
                [
                  99.75163,
                  8.48923
                ],
                [
                  99.75425,
                  8.49194
                ],
                [
                  99.76258,
                  8.49247
                ],
                [
                  99.76737,
                  8.48859
                ],
                [
                  99.77465,
                  8.48496
                ],
                [
                  99.78179,
                  8.47533
                ],
                [
                  99.78981,
                  8.46997
                ],
                [
                  99.78942,
                  8.46693
                ],
                [
                  99.79082,
                  8.46163
                ],
                [
                  99.78908,
                  8.45341
                ],
                [
                  99.79097,
                  8.44682
                ],
                [
                  99.79408,
                  8.44123
                ],
                [
                  99.79489,
                  8.43478
                ],
                [
                  99.80648,
                  8.42315
                ],
                [
                  99.80773,
                  8.41541
                ],
                [
                  99.81174,
                  8.40982
                ],
                [
                  99.80928,
                  8.39771
                ],
                [
                  99.80607,
                  8.39426
                ],
                [
                  99.80513,
                  8.38985
                ],
                [
                  99.80707,
                  8.38694
                ],
                [
                  99.80952,
                  8.38574
                ],
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.70827,
                  8.42771
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70013,
                  8.4316
                ],
                [
                  99.6999,
                  8.43264
                ],
                [
                  99.70453,
                  8.43724
                ],
                [
                  99.70204,
                  8.43992
                ],
                [
                  99.70156,
                  8.44434
                ],
                [
                  99.69962,
                  8.44876
                ],
                [
                  99.69751,
                  8.44978
                ],
                [
                  99.69766,
                  8.453
                ],
                [
                  99.69598,
                  8.45564
                ],
                [
                  99.69878,
                  8.45655
                ],
                [
                  99.70015,
                  8.45892
                ],
                [
                  99.69862,
                  8.4628
                ],
                [
                  99.69936,
                  8.46476
                ],
                [
                  99.69861,
                  8.46688
                ],
                [
                  99.70088,
                  8.47441
                ],
                [
                  99.70319,
                  8.47727
                ],
                [
                  99.70064,
                  8.48133
                ],
                [
                  99.70074,
                  8.48405
                ],
                [
                  99.71026,
                  8.48951
                ],
                [
                  99.71156,
                  8.49135
                ],
                [
                  99.717,
                  8.49188
                ],
                [
                  99.7218,
                  8.49061
                ],
                [
                  99.72865,
                  8.49409
                ],
                [
                  99.73265,
                  8.49414
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800305",
          "tambon": "ต.ขุนทะเล",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "อบต.ขุนทะเล",
          "latitude": 8.33883,
          "longitude": 99.8521,
          "sum_rainfall_mm": 109.00000000000001,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.86969,
                  8.36762
                ],
                [
                  99.87242,
                  8.36542
                ],
                [
                  99.89721,
                  8.36214
                ],
                [
                  99.89866,
                  8.35946
                ],
                [
                  99.89839,
                  8.35715
                ],
                [
                  99.89377,
                  8.34821
                ],
                [
                  99.8895,
                  8.34461
                ],
                [
                  99.87626,
                  8.34021
                ],
                [
                  99.87561,
                  8.33247
                ],
                [
                  99.87247,
                  8.31876
                ],
                [
                  99.868,
                  8.3157
                ],
                [
                  99.8666,
                  8.31265
                ],
                [
                  99.86047,
                  8.30992
                ],
                [
                  99.85989,
                  8.30794
                ],
                [
                  99.86118,
                  8.30583
                ],
                [
                  99.85946,
                  8.30723
                ],
                [
                  99.85861,
                  8.31012
                ],
                [
                  99.85718,
                  8.30996
                ],
                [
                  99.857,
                  8.3078
                ],
                [
                  99.85533,
                  8.30863
                ],
                [
                  99.85535,
                  8.31151
                ],
                [
                  99.8512,
                  8.3142
                ],
                [
                  99.85225,
                  8.31631
                ],
                [
                  99.85138,
                  8.31722
                ],
                [
                  99.84871,
                  8.3168
                ],
                [
                  99.85097,
                  8.31904
                ],
                [
                  99.8472,
                  8.31975
                ],
                [
                  99.84566,
                  8.32142
                ],
                [
                  99.846,
                  8.32332
                ],
                [
                  99.84417,
                  8.32344
                ],
                [
                  99.84185,
                  8.32121
                ],
                [
                  99.83798,
                  8.32246
                ],
                [
                  99.83517,
                  8.32099
                ],
                [
                  99.83193,
                  8.31726
                ],
                [
                  99.83145,
                  8.31233
                ],
                [
                  99.82733,
                  8.30668
                ],
                [
                  99.82706,
                  8.30244
                ],
                [
                  99.82878,
                  8.29987
                ],
                [
                  99.82413,
                  8.30102
                ],
                [
                  99.82361,
                  8.30705
                ],
                [
                  99.8216,
                  8.30889
                ],
                [
                  99.82041,
                  8.31274
                ],
                [
                  99.81636,
                  8.31593
                ],
                [
                  99.81543,
                  8.31923
                ],
                [
                  99.80656,
                  8.33123
                ],
                [
                  99.80579,
                  8.33705
                ],
                [
                  99.80147,
                  8.34684
                ],
                [
                  99.79836,
                  8.35033
                ],
                [
                  99.79869,
                  8.35188
                ],
                [
                  99.80369,
                  8.35391
                ],
                [
                  99.80554,
                  8.36211
                ],
                [
                  99.81061,
                  8.37019
                ],
                [
                  99.81339,
                  8.37275
                ],
                [
                  99.81539,
                  8.37308
                ],
                [
                  99.83015,
                  8.37167
                ],
                [
                  99.83433,
                  8.36761
                ],
                [
                  99.83823,
                  8.36631
                ],
                [
                  99.85339,
                  8.36923
                ],
                [
                  99.85775,
                  8.37275
                ],
                [
                  99.86079,
                  8.37359
                ],
                [
                  99.86591,
                  8.37125
                ],
                [
                  99.86969,
                  8.36762
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800301",
          "tambon": "ต.เขาแก้ว",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านคันเบ็ด",
          "latitude": 8.366532,
          "longitude": 99.759174,
          "sum_rainfall_mm": 87.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.81339,
                  8.37275
                ],
                [
                  99.81112,
                  8.37089
                ],
                [
                  99.80554,
                  8.36211
                ],
                [
                  99.80369,
                  8.35391
                ],
                [
                  99.79869,
                  8.35188
                ],
                [
                  99.79836,
                  8.35033
                ],
                [
                  99.79324,
                  8.34709
                ],
                [
                  99.78301,
                  8.35048
                ],
                [
                  99.77924,
                  8.34595
                ],
                [
                  99.77325,
                  8.34147
                ],
                [
                  99.76226,
                  8.34265
                ],
                [
                  99.7446,
                  8.33347
                ],
                [
                  99.73803,
                  8.33219
                ],
                [
                  99.72838,
                  8.32444
                ],
                [
                  99.72216,
                  8.32324
                ],
                [
                  99.71174,
                  8.31776
                ],
                [
                  99.70583,
                  8.31929
                ],
                [
                  99.70056,
                  8.32415
                ],
                [
                  99.70195,
                  8.32742
                ],
                [
                  99.70507,
                  8.32904
                ],
                [
                  99.70914,
                  8.33351
                ],
                [
                  99.70933,
                  8.33512
                ],
                [
                  99.70622,
                  8.34186
                ],
                [
                  99.70865,
                  8.34721
                ],
                [
                  99.71398,
                  8.34909
                ],
                [
                  99.71217,
                  8.3525
                ],
                [
                  99.70765,
                  8.35602
                ],
                [
                  99.70109,
                  8.35866
                ],
                [
                  99.69659,
                  8.36333
                ],
                [
                  99.70133,
                  8.37345
                ],
                [
                  99.70078,
                  8.37587
                ],
                [
                  99.70341,
                  8.38096
                ],
                [
                  99.70369,
                  8.38617
                ],
                [
                  99.70579,
                  8.38907
                ],
                [
                  99.70995,
                  8.38959
                ],
                [
                  99.70902,
                  8.3917
                ],
                [
                  99.71151,
                  8.39567
                ],
                [
                  99.70922,
                  8.40455
                ],
                [
                  99.70717,
                  8.40671
                ],
                [
                  99.70713,
                  8.40956
                ],
                [
                  99.7047,
                  8.41274
                ],
                [
                  99.70778,
                  8.41938
                ],
                [
                  99.70267,
                  8.42388
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70862,
                  8.42772
                ],
                [
                  99.71189,
                  8.42947
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.80901,
                  8.37687
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800301",
          "tambon": "ต.เขาแก้ว",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติ ตย. ๔ (เขาทง)",
          "latitude": 8.33562,
          "longitude": 99.70955,
          "sum_rainfall_mm": 113.4,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.80901,
                  8.37687
                ],
                [
                  99.81339,
                  8.37275
                ],
                [
                  99.81112,
                  8.37089
                ],
                [
                  99.80554,
                  8.36211
                ],
                [
                  99.80369,
                  8.35391
                ],
                [
                  99.79869,
                  8.35188
                ],
                [
                  99.79836,
                  8.35033
                ],
                [
                  99.79324,
                  8.34709
                ],
                [
                  99.78301,
                  8.35048
                ],
                [
                  99.77924,
                  8.34595
                ],
                [
                  99.77325,
                  8.34147
                ],
                [
                  99.76226,
                  8.34265
                ],
                [
                  99.7446,
                  8.33347
                ],
                [
                  99.73803,
                  8.33219
                ],
                [
                  99.72838,
                  8.32444
                ],
                [
                  99.72216,
                  8.32324
                ],
                [
                  99.71174,
                  8.31776
                ],
                [
                  99.70583,
                  8.31929
                ],
                [
                  99.70056,
                  8.32415
                ],
                [
                  99.70195,
                  8.32742
                ],
                [
                  99.70507,
                  8.32904
                ],
                [
                  99.70914,
                  8.33351
                ],
                [
                  99.70933,
                  8.33512
                ],
                [
                  99.70622,
                  8.34186
                ],
                [
                  99.70865,
                  8.34721
                ],
                [
                  99.71398,
                  8.34909
                ],
                [
                  99.71217,
                  8.3525
                ],
                [
                  99.70765,
                  8.35602
                ],
                [
                  99.70109,
                  8.35866
                ],
                [
                  99.69659,
                  8.36333
                ],
                [
                  99.70133,
                  8.37345
                ],
                [
                  99.70078,
                  8.37587
                ],
                [
                  99.70341,
                  8.38096
                ],
                [
                  99.70369,
                  8.38617
                ],
                [
                  99.70579,
                  8.38907
                ],
                [
                  99.70995,
                  8.38959
                ],
                [
                  99.70902,
                  8.3917
                ],
                [
                  99.71151,
                  8.39567
                ],
                [
                  99.70922,
                  8.40455
                ],
                [
                  99.70717,
                  8.40671
                ],
                [
                  99.70713,
                  8.40956
                ],
                [
                  99.7047,
                  8.41274
                ],
                [
                  99.70778,
                  8.41938
                ],
                [
                  99.70267,
                  8.42388
                ],
                [
                  99.70187,
                  8.42886
                ],
                [
                  99.70611,
                  8.42905
                ],
                [
                  99.70862,
                  8.42772
                ],
                [
                  99.71189,
                  8.42947
                ],
                [
                  99.71621,
                  8.43002
                ],
                [
                  99.72175,
                  8.42802
                ],
                [
                  99.72784,
                  8.4293
                ],
                [
                  99.7435,
                  8.42693
                ],
                [
                  99.7532,
                  8.41774
                ],
                [
                  99.75754,
                  8.41621
                ],
                [
                  99.75997,
                  8.41317
                ],
                [
                  99.76188,
                  8.40806
                ],
                [
                  99.76227,
                  8.402
                ],
                [
                  99.76535,
                  8.39754
                ],
                [
                  99.77044,
                  8.38347
                ],
                [
                  99.77189,
                  8.3828
                ],
                [
                  99.77484,
                  8.38373
                ],
                [
                  99.77681,
                  8.38957
                ],
                [
                  99.77909,
                  8.39036
                ],
                [
                  99.78646,
                  8.38934
                ],
                [
                  99.78688,
                  8.36839
                ],
                [
                  99.79418,
                  8.37057
                ],
                [
                  99.8043,
                  8.37155
                ],
                [
                  99.80901,
                  8.37687
                ]
              ]
            ]
          }
        },
        {
          "geocode": "800302",
          "tambon": "ต.ลานสกา",
          "amphoe": "อ.ลานสกา",
          "province": "จ.นครศรีธรรมราช",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านน้ำรอบ",
          "latitude": 8.305842,
          "longitude": 99.785297,
          "sum_rainfall_mm": 73.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.79836,
                  8.35033
                ],
                [
                  99.80147,
                  8.34684
                ],
                [
                  99.80579,
                  8.33705
                ],
                [
                  99.80656,
                  8.33123
                ],
                [
                  99.81543,
                  8.31923
                ],
                [
                  99.81636,
                  8.31593
                ],
                [
                  99.82041,
                  8.31274
                ],
                [
                  99.8216,
                  8.30889
                ],
                [
                  99.82361,
                  8.30705
                ],
                [
                  99.82354,
                  8.3016
                ],
                [
                  99.82878,
                  8.29987
                ],
                [
                  99.82938,
                  8.29835
                ],
                [
                  99.82898,
                  8.29738
                ],
                [
                  99.82368,
                  8.29613
                ],
                [
                  99.82113,
                  8.29283
                ],
                [
                  99.81602,
                  8.29452
                ],
                [
                  99.81619,
                  8.29181
                ],
                [
                  99.81943,
                  8.28883
                ],
                [
                  99.81961,
                  8.28285
                ],
                [
                  99.81001,
                  8.28203
                ],
                [
                  99.80563,
                  8.28014
                ],
                [
                  99.79877,
                  8.28211
                ],
                [
                  99.79325,
                  8.27212
                ],
                [
                  99.78868,
                  8.27299
                ],
                [
                  99.78746,
                  8.26931
                ],
                [
                  99.78304,
                  8.26515
                ],
                [
                  99.7639,
                  8.2614
                ],
                [
                  99.76099,
                  8.26281
                ],
                [
                  99.75669,
                  8.26006
                ],
                [
                  99.75419,
                  8.26112
                ],
                [
                  99.75213,
                  8.2698
                ],
                [
                  99.74681,
                  8.27197
                ],
                [
                  99.7349,
                  8.27286
                ],
                [
                  99.73216,
                  8.27758
                ],
                [
                  99.72657,
                  8.28334
                ],
                [
                  99.72705,
                  8.28742
                ],
                [
                  99.72545,
                  8.29014
                ],
                [
                  99.72611,
                  8.29312
                ],
                [
                  99.71962,
                  8.30304
                ],
                [
                  99.719,
                  8.30999
                ],
                [
                  99.71996,
                  8.31311
                ],
                [
                  99.71174,
                  8.31776
                ],
                [
                  99.72216,
                  8.32324
                ],
                [
                  99.72838,
                  8.32444
                ],
                [
                  99.73803,
                  8.33219
                ],
                [
                  99.7446,
                  8.33347
                ],
                [
                  99.76226,
                  8.34265
                ],
                [
                  99.77325,
                  8.34147
                ],
                [
                  99.77924,
                  8.34595
                ],
                [
                  99.78301,
                  8.35048
                ],
                [
                  99.79211,
                  8.34674
                ],
                [
                  99.79836,
                  8.35033
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960608",
          "tambon": "ต.โคกสะตอ",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านไอร์กลูแป",
          "latitude": 6.286859,
          "longitude": 101.479381,
          "sum_rainfall_mm": 38.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.49668,
                  6.30665
                ],
                [
                  101.50217,
                  6.30763
                ],
                [
                  101.50287,
                  6.30451
                ],
                [
                  101.50496,
                  6.30277
                ],
                [
                  101.50528,
                  6.30011
                ],
                [
                  101.49984,
                  6.29604
                ],
                [
                  101.49668,
                  6.29136
                ],
                [
                  101.49568,
                  6.28866
                ],
                [
                  101.49572,
                  6.28108
                ],
                [
                  101.48685,
                  6.27119
                ],
                [
                  101.48579,
                  6.2615
                ],
                [
                  101.49149,
                  6.2522
                ],
                [
                  101.48458,
                  6.24647
                ],
                [
                  101.47788,
                  6.2451
                ],
                [
                  101.47301,
                  6.24708
                ],
                [
                  101.45891,
                  6.25965
                ],
                [
                  101.45224,
                  6.26418
                ],
                [
                  101.44765,
                  6.25923
                ],
                [
                  101.44358,
                  6.25663
                ],
                [
                  101.44118,
                  6.25157
                ],
                [
                  101.44014,
                  6.25182
                ],
                [
                  101.4397,
                  6.25501
                ],
                [
                  101.43798,
                  6.25659
                ],
                [
                  101.43355,
                  6.25416
                ],
                [
                  101.43036,
                  6.25818
                ],
                [
                  101.42498,
                  6.25653
                ],
                [
                  101.4172,
                  6.25983
                ],
                [
                  101.41078,
                  6.25943
                ],
                [
                  101.40363,
                  6.26302
                ],
                [
                  101.40021,
                  6.26328
                ],
                [
                  101.40027,
                  6.26735
                ],
                [
                  101.40257,
                  6.27205
                ],
                [
                  101.39948,
                  6.27796
                ],
                [
                  101.39945,
                  6.28161
                ],
                [
                  101.3948,
                  6.28689
                ],
                [
                  101.39553,
                  6.29288
                ],
                [
                  101.39392,
                  6.3002
                ],
                [
                  101.39565,
                  6.30361
                ],
                [
                  101.4077,
                  6.30238
                ],
                [
                  101.42094,
                  6.30611
                ],
                [
                  101.43213,
                  6.30775
                ],
                [
                  101.43613,
                  6.30485
                ],
                [
                  101.4408,
                  6.30354
                ],
                [
                  101.44444,
                  6.30411
                ],
                [
                  101.44693,
                  6.30662
                ],
                [
                  101.44718,
                  6.30854
                ],
                [
                  101.44954,
                  6.30926
                ],
                [
                  101.45406,
                  6.31317
                ],
                [
                  101.45559,
                  6.31222
                ],
                [
                  101.45783,
                  6.31282
                ],
                [
                  101.46053,
                  6.31098
                ],
                [
                  101.46732,
                  6.30933
                ],
                [
                  101.49042,
                  6.30614
                ],
                [
                  101.49668,
                  6.30665
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960605",
          "tambon": "ต.บาตง",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านท่าเรือ*",
          "latitude": 6.35168,
          "longitude": 101.494171,
          "sum_rainfall_mm": 45.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.46802,
                  6.38206
                ],
                [
                  101.46856,
                  6.38008
                ],
                [
                  101.47362,
                  6.37749
                ],
                [
                  101.47637,
                  6.37449
                ],
                [
                  101.47712,
                  6.36978
                ],
                [
                  101.48182,
                  6.36277
                ],
                [
                  101.48237,
                  6.35571
                ],
                [
                  101.48416,
                  6.35287
                ],
                [
                  101.48638,
                  6.35187
                ],
                [
                  101.49073,
                  6.35344
                ],
                [
                  101.49495,
                  6.35083
                ],
                [
                  101.4946,
                  6.34856
                ],
                [
                  101.49026,
                  6.34603
                ],
                [
                  101.48897,
                  6.34116
                ],
                [
                  101.50467,
                  6.32618
                ],
                [
                  101.50502,
                  6.32389
                ],
                [
                  101.4974,
                  6.32193
                ],
                [
                  101.49483,
                  6.32004
                ],
                [
                  101.49342,
                  6.317
                ],
                [
                  101.49466,
                  6.31442
                ],
                [
                  101.49817,
                  6.31381
                ],
                [
                  101.50065,
                  6.31159
                ],
                [
                  101.50217,
                  6.30763
                ],
                [
                  101.48921,
                  6.30626
                ],
                [
                  101.46732,
                  6.30933
                ],
                [
                  101.46053,
                  6.31098
                ],
                [
                  101.45783,
                  6.31282
                ],
                [
                  101.45559,
                  6.31222
                ],
                [
                  101.45406,
                  6.31317
                ],
                [
                  101.44954,
                  6.30926
                ],
                [
                  101.44718,
                  6.30854
                ],
                [
                  101.44693,
                  6.30662
                ],
                [
                  101.44444,
                  6.30411
                ],
                [
                  101.4408,
                  6.30354
                ],
                [
                  101.43613,
                  6.30485
                ],
                [
                  101.43213,
                  6.30775
                ],
                [
                  101.42094,
                  6.30611
                ],
                [
                  101.4077,
                  6.30238
                ],
                [
                  101.39565,
                  6.30361
                ],
                [
                  101.399,
                  6.30871
                ],
                [
                  101.40007,
                  6.31725
                ],
                [
                  101.39875,
                  6.31979
                ],
                [
                  101.38995,
                  6.32613
                ],
                [
                  101.38745,
                  6.33586
                ],
                [
                  101.3887,
                  6.34007
                ],
                [
                  101.39663,
                  6.34797
                ],
                [
                  101.39852,
                  6.35841
                ],
                [
                  101.39982,
                  6.36019
                ],
                [
                  101.40885,
                  6.36761
                ],
                [
                  101.4129,
                  6.36939
                ],
                [
                  101.41446,
                  6.36574
                ],
                [
                  101.41314,
                  6.36162
                ],
                [
                  101.41334,
                  6.35702
                ],
                [
                  101.41539,
                  6.35435
                ],
                [
                  101.41814,
                  6.35391
                ],
                [
                  101.42024,
                  6.35535
                ],
                [
                  101.42117,
                  6.35933
                ],
                [
                  101.42521,
                  6.36457
                ],
                [
                  101.42953,
                  6.36537
                ],
                [
                  101.43721,
                  6.36312
                ],
                [
                  101.44338,
                  6.36524
                ],
                [
                  101.45051,
                  6.37074
                ],
                [
                  101.45658,
                  6.37142
                ],
                [
                  101.45909,
                  6.37666
                ],
                [
                  101.46437,
                  6.38138
                ],
                [
                  101.46802,
                  6.38206
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960601",
          "tambon": "ต.รือเสาะ",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "สวนสาธารณะ ทต.รือเสาะ",
          "latitude": 6.38792,
          "longitude": 101.51716,
          "sum_rainfall_mm": 59.40000000000001,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.49667,
                  6.41836
                ],
                [
                  101.50766,
                  6.41647
                ],
                [
                  101.51009,
                  6.41471
                ],
                [
                  101.51277,
                  6.39732
                ],
                [
                  101.53322,
                  6.369
                ],
                [
                  101.54674,
                  6.37011
                ],
                [
                  101.54938,
                  6.36757
                ],
                [
                  101.54966,
                  6.35439
                ],
                [
                  101.54671,
                  6.33575
                ],
                [
                  101.54852,
                  6.33069
                ],
                [
                  101.54802,
                  6.32856
                ],
                [
                  101.54576,
                  6.32803
                ],
                [
                  101.54367,
                  6.32511
                ],
                [
                  101.54038,
                  6.326
                ],
                [
                  101.54036,
                  6.32367
                ],
                [
                  101.53871,
                  6.32392
                ],
                [
                  101.53732,
                  6.32142
                ],
                [
                  101.53289,
                  6.31925
                ],
                [
                  101.53173,
                  6.31405
                ],
                [
                  101.52711,
                  6.31543
                ],
                [
                  101.52389,
                  6.31354
                ],
                [
                  101.52051,
                  6.31391
                ],
                [
                  101.51866,
                  6.31163
                ],
                [
                  101.51304,
                  6.31346
                ],
                [
                  101.51255,
                  6.31448
                ],
                [
                  101.51353,
                  6.31569
                ],
                [
                  101.51215,
                  6.31756
                ],
                [
                  101.51099,
                  6.3169
                ],
                [
                  101.51046,
                  6.31921
                ],
                [
                  101.50648,
                  6.32172
                ],
                [
                  101.50714,
                  6.32316
                ],
                [
                  101.50502,
                  6.32389
                ],
                [
                  101.50393,
                  6.32722
                ],
                [
                  101.50009,
                  6.32974
                ],
                [
                  101.49378,
                  6.33699
                ],
                [
                  101.48917,
                  6.34052
                ],
                [
                  101.49002,
                  6.34562
                ],
                [
                  101.49497,
                  6.349
                ],
                [
                  101.49469,
                  6.35128
                ],
                [
                  101.49073,
                  6.35344
                ],
                [
                  101.48638,
                  6.35187
                ],
                [
                  101.48416,
                  6.35287
                ],
                [
                  101.48237,
                  6.35571
                ],
                [
                  101.48182,
                  6.36277
                ],
                [
                  101.47712,
                  6.36978
                ],
                [
                  101.47637,
                  6.37449
                ],
                [
                  101.46806,
                  6.38114
                ],
                [
                  101.4688,
                  6.38389
                ],
                [
                  101.47199,
                  6.38598
                ],
                [
                  101.47229,
                  6.38884
                ],
                [
                  101.47151,
                  6.39124
                ],
                [
                  101.46791,
                  6.39454
                ],
                [
                  101.4659,
                  6.40281
                ],
                [
                  101.46702,
                  6.40475
                ],
                [
                  101.47309,
                  6.40843
                ],
                [
                  101.47389,
                  6.41356
                ],
                [
                  101.47774,
                  6.42023
                ],
                [
                  101.4874,
                  6.42047
                ],
                [
                  101.49667,
                  6.41836
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960603",
          "tambon": "ต.เรียง",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "องค์การบริหารส่วนตำบลเรียง ",
          "latitude": 6.40645,
          "longitude": 101.45544,
          "sum_rainfall_mm": 32.599999999999994,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.46945,
                  6.42922
                ],
                [
                  101.47631,
                  6.42464
                ],
                [
                  101.47781,
                  6.42059
                ],
                [
                  101.47389,
                  6.41356
                ],
                [
                  101.47309,
                  6.40843
                ],
                [
                  101.46702,
                  6.40475
                ],
                [
                  101.4659,
                  6.40281
                ],
                [
                  101.46791,
                  6.39454
                ],
                [
                  101.47203,
                  6.39022
                ],
                [
                  101.47199,
                  6.38598
                ],
                [
                  101.4688,
                  6.38389
                ],
                [
                  101.46802,
                  6.38206
                ],
                [
                  101.46437,
                  6.38138
                ],
                [
                  101.45909,
                  6.37666
                ],
                [
                  101.45658,
                  6.37142
                ],
                [
                  101.45051,
                  6.37074
                ],
                [
                  101.44376,
                  6.36543
                ],
                [
                  101.43774,
                  6.36323
                ],
                [
                  101.42953,
                  6.36537
                ],
                [
                  101.42564,
                  6.36476
                ],
                [
                  101.42117,
                  6.35933
                ],
                [
                  101.41993,
                  6.35495
                ],
                [
                  101.41748,
                  6.35385
                ],
                [
                  101.41482,
                  6.35473
                ],
                [
                  101.41326,
                  6.3575
                ],
                [
                  101.41314,
                  6.36162
                ],
                [
                  101.41446,
                  6.36574
                ],
                [
                  101.4129,
                  6.36939
                ],
                [
                  101.41678,
                  6.37267
                ],
                [
                  101.41998,
                  6.38151
                ],
                [
                  101.42025,
                  6.38597
                ],
                [
                  101.41872,
                  6.39101
                ],
                [
                  101.41184,
                  6.39627
                ],
                [
                  101.41269,
                  6.39828
                ],
                [
                  101.41925,
                  6.40212
                ],
                [
                  101.42111,
                  6.40551
                ],
                [
                  101.42168,
                  6.40984
                ],
                [
                  101.42488,
                  6.41379
                ],
                [
                  101.42194,
                  6.4175
                ],
                [
                  101.42401,
                  6.42143
                ],
                [
                  101.43633,
                  6.42965
                ],
                [
                  101.444,
                  6.42854
                ],
                [
                  101.44735,
                  6.43018
                ],
                [
                  101.45679,
                  6.43155
                ],
                [
                  101.45955,
                  6.42906
                ],
                [
                  101.4614,
                  6.42503
                ],
                [
                  101.46525,
                  6.42307
                ],
                [
                  101.46866,
                  6.42533
                ],
                [
                  101.46945,
                  6.42922
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960606",
          "tambon": "ต.ลาโละ",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านบริจ๊ะ",
          "latitude": 6.357526,
          "longitude": 101.579157,
          "sum_rainfall_mm": 14.0,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.62313,
                  6.40133
                ],
                [
                  101.62409,
                  6.3972
                ],
                [
                  101.62843,
                  6.39099
                ],
                [
                  101.6254,
                  6.38547
                ],
                [
                  101.62538,
                  6.38116
                ],
                [
                  101.62997,
                  6.3772
                ],
                [
                  101.63278,
                  6.36992
                ],
                [
                  101.6264,
                  6.37119
                ],
                [
                  101.62351,
                  6.36866
                ],
                [
                  101.62162,
                  6.3651
                ],
                [
                  101.61041,
                  6.36627
                ],
                [
                  101.6064,
                  6.36197
                ],
                [
                  101.60587,
                  6.35508
                ],
                [
                  101.6117,
                  6.35247
                ],
                [
                  101.61401,
                  6.34862
                ],
                [
                  101.6125,
                  6.34233
                ],
                [
                  101.61326,
                  6.33912
                ],
                [
                  101.60914,
                  6.33414
                ],
                [
                  101.60475,
                  6.3325
                ],
                [
                  101.5943,
                  6.30205
                ],
                [
                  101.57381,
                  6.30599
                ],
                [
                  101.56536,
                  6.3064
                ],
                [
                  101.55551,
                  6.31089
                ],
                [
                  101.55184,
                  6.31533
                ],
                [
                  101.54933,
                  6.32115
                ],
                [
                  101.54736,
                  6.32279
                ],
                [
                  101.54913,
                  6.32568
                ],
                [
                  101.54884,
                  6.32857
                ],
                [
                  101.54802,
                  6.32856
                ],
                [
                  101.54852,
                  6.33069
                ],
                [
                  101.54689,
                  6.33402
                ],
                [
                  101.54687,
                  6.33907
                ],
                [
                  101.54969,
                  6.35527
                ],
                [
                  101.56805,
                  6.36848
                ],
                [
                  101.57355,
                  6.37368
                ],
                [
                  101.59971,
                  6.38829
                ],
                [
                  101.60428,
                  6.39468
                ],
                [
                  101.60646,
                  6.40564
                ],
                [
                  101.62313,
                  6.40133
                ]
              ]
            ]
          }
        },
        {
          "geocode": "960609",
          "tambon": "ต.สุวารี",
          "amphoe": "อ.รือเสาะ",
          "province": "จ.นราธิวาส",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านกูโบร์",
          "latitude": 6.461544,
          "longitude": 101.568332,
          "sum_rainfall_mm": 18.5,
          "observed_at": "2026-11-01T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.60489,
                  6.5023
                ],
                [
                  101.6072,
                  6.49843
                ],
                [
                  101.60852,
                  6.49075
                ],
                [
                  101.61458,
                  6.48894
                ],
                [
                  101.6198,
                  6.48438
                ],
                [
                  101.62544,
                  6.48293
                ],
                [
                  101.6322,
                  6.47543
                ],
                [
                  101.63573,
                  6.47382
                ],
                [
                  101.63737,
                  6.4675
                ],
                [
                  101.63261,
                  6.46087
                ],
                [
                  101.63471,
                  6.45799
                ],
                [
                  101.63458,
                  6.45391
                ],
                [
                  101.63726,
                  6.448
                ],
                [
                  101.63727,
                  6.44158
                ],
                [
                  101.6392,
                  6.43805
                ],
                [
                  101.6467,
                  6.43136
                ],
                [
                  101.64513,
                  6.42935
                ],
                [
                  101.64643,
                  6.42513
                ],
                [
                  101.64288,
                  6.42106
                ],
                [
                  101.64549,
                  6.41775
                ],
                [
                  101.64336,
                  6.41412
                ],
                [
                  101.64367,
                  6.41049
                ],
                [
                  101.61557,
                  6.42474
                ],
                [
                  101.60557,
                  6.42815
                ],
                [
                  101.60271,
                  6.43757
                ],
                [
                  101.59755,
                  6.44083
                ],
                [
                  101.58625,
                  6.44227
                ],
                [
                  101.57812,
                  6.44461
                ],
                [
                  101.54956,
                  6.44463
                ],
                [
                  101.52901,
                  6.44668
                ],
                [
                  101.51187,
                  6.45007
                ],
                [
                  101.50341,
                  6.45417
                ],
                [
                  101.50867,
                  6.45316
                ],
                [
                  101.51263,
                  6.45652
                ],
                [
                  101.51553,
                  6.45753
                ],
                [
                  101.52097,
                  6.46449
                ],
                [
                  101.52447,
                  6.46613
                ],
                [
                  101.53161,
                  6.46715
                ],
                [
                  101.53531,
                  6.47198
                ],
                [
                  101.54068,
                  6.47562
                ],
                [
                  101.54187,
                  6.47991
                ],
                [
                  101.54495,
                  6.48097
                ],
                [
                  101.54652,
                  6.48305
                ],
                [
                  101.55111,
                  6.48173
                ],
                [
                  101.55644,
                  6.48439
                ],
                [
                  101.56455,
                  6.49573
                ],
                [
                  101.56714,
                  6.49753
                ],
                [
                  101.57388,
                  6.4993
                ],
                [
                  101.57951,
                  6.50666
                ],
                [
                  101.5812,
                  6.51063
                ],
                [
                  101.58291,
                  6.51174
                ],
                [
                  101.58815,
                  6.51394
                ],
                [
                  101.59952,
                  6.50775
                ],
                [
                  101.6011,
                  6.50395
                ],
                [
                  101.60489,
                  6.5023
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_01_11_2026.png?1793545732",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "status": "ok",
      "date": "2026-11-01",
      "time": "22:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [],
      "area_nearby": [],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_01_11_2026.png?1793545682",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
