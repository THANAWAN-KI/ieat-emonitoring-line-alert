window.IEAT_THAIWATER_DATA = {
  "schema_version": 3,
  "status": "ok",
  "generated_at": "2026-10-17T00:25:58+07:00",
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
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": 51.0,
      "nearest_alert_km": 4.674934171316372,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.546536590000073,
      "lon": 100.34361750000005,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 11,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": 51.0,
      "nearest_alert_km": 4.60388187720373,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.542029030000036,
      "lon": 100.19885420000008,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": 51.0,
      "nearest_alert_km": 5.96409557705208,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.48933930000004,
      "lon": 100.59572110000005,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 25,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 25,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.11290468175869,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 6,
      "name": "นิคมอุตสาหกรรมบางปะอิน",
      "lat": 14.207749700000022,
      "lon": 100.58967480000007,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 18,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 18,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.25031772245073,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309000000055,
      "lon": 100.61001200000004,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 17,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 17,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.665867272460714,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.575362700000024,
      "lon": 100.14894520000007,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.570134034587971,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694000000043,
      "lon": 101.32956700000005,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": 64.0,
      "nearest_alert_km": 8.434061928226125,
      "latest_observed_at": "2026-10-17 00:00"
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
      "max_rainfall_mm": 64.0,
      "nearest_alert_km": 1.7752687912394733,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 67,
      "name": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "lat": 13.529234736000037,
      "lon": 101.01651303800008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": 64.0,
      "nearest_alert_km": 2.7582426638140114,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 82,
      "name": "นิคมอุตสาหกรรมอมตะ สมาร์ทซิตี้ ชลบุรี",
      "lat": 13.494940441113723,
      "lon": 101.05249754589352,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": 64.0,
      "nearest_alert_km": 7.9481422730435725,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 16,
      "name": "นิคมอุตสาหกรรมเวลโกรว์",
      "lat": 13.570618000000023,
      "lon": 100.92248000000006,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 8.832622883882104,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.421488500000066,
      "lon": 101.00412440000008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 6.39764781236248,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 44,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 2",
      "lat": 13.570774892000031,
      "lon": 100.98321947200009,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 3.0979043867166878,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 83,
      "name": "นิคมอุตสาหกรรมอารยะ",
      "lat": 13.576978327774249,
      "lon": 100.89104873646208,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 12.29672311989434,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.65990380000005,
      "lon": 100.91148330000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": 38.0,
      "nearest_alert_km": 12.030145507083846,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.57506305000004,
      "lon": 100.79479772200006,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": 38.0,
      "nearest_alert_km": 10.518375340120038,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.386388200000056,
      "lon": 100.90357670000009,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 17.91918472481892,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.758255900000053,
      "lon": 100.78931830000005,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 2.0362140416044405,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881000000045,
      "lon": 100.70475700000009,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 15,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 15,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.986228512238855,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102000000062,
      "lon": 100.70771200000007,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.202214564103116,
      "latest_observed_at": "2026-10-17 00:00"
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
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.008259800000075,
      "lon": 100.35980570000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.64480235683347,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.906178630000058,
      "lon": 101.65291820000004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.591098779288023,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.727359730000046,
      "lon": 101.45593100000008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": null,
      "nearest_alert_km": 17.02824288279466,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 23,
      "name": "นิคมอุตสาหกรรมบางปู",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 6,
      "max_rainfall_mm": null,
      "nearest_alert_km": 18.640105759701317,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 25,
      "name": "นิคมอุตสาหกรรมบางปู (เหนือ)",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 6,
      "max_rainfall_mm": null,
      "nearest_alert_km": 18.640105759701317,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.569035190000022,
      "lon": 100.65282020000006,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 7,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 7,
      "max_rainfall_mm": null,
      "nearest_alert_km": 16.06428903072714,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 35,
      "name": "ท่าเรืออุตสาหกรรมมาบตาพุด",
      "lat": 12.665224000000025,
      "lon": 101.13304900000009,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.129941880333812,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 36,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ตะวันออก (มาบตาพุด)",
      "lat": 12.703063200000031,
      "lon": 101.12631190000008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.733378129477195,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 37,
      "name": "นิคมอุตสาหกรรมผาแดง",
      "lat": 12.690742000000055,
      "lon": 101.13246900000007,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.655168787830641,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.71649400000007,
      "lon": 101.10591300000004,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.498117147569559,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945000000063,
      "lon": 101.16531900000007,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.193355299520884,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 40,
      "name": "นิคมอุตสาหกรรมมาบตาพุด",
      "lat": 12.67868800000002,
      "lon": 101.13180600000004,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 12.378253895015913,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.739841908000074,
      "lon": 101.12280906200004,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.454188213708944,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 49,
      "name": "นิคมอุตสาหกรรมซีพีจีซี",
      "lat": 12.803765938000026,
      "lon": 101.22925269200005,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.317869330076649,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 50,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "lat": 12.868719838070461,
      "lon": 101.36086376330609,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": null,
      "nearest_alert_km": 6.807575134903321,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 51,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 6)",
      "lat": 12.852329163000036,
      "lon": 101.21748270800003,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.098279075215103,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 52,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "lat": 12.896058797000023,
      "lon": 101.28114772800006,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 5.6523093721227236,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 53,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
      "lat": 12.89336387800006,
      "lon": 101.12463591300008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 19.775135848211736,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 69,
      "name": "นิคมอุตสาหกรรมบ่อทอง 33",
      "lat": 13.960939854000058,
      "lon": 101.87508894400008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 11,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 11,
      "max_rainfall_mm": null,
      "nearest_alert_km": 6.91451213461515,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 70,
      "name": "นิคมอุตสาหกรรมเอ็กโก ระยอง",
      "lat": 12.75583830900007,
      "lon": 101.15385591100005,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.325573579588061,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.843730427800528,
      "lon": 101.23641847915039,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.06507776964934,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646000000041,
      "lon": 101.00810700000005,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 6,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": 52.4,
      "nearest_alert_km": 0.8464884712603398,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954000000032,
      "lon": 101.03339800000003,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 24.267469291223325,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.121345950000032,
      "lon": 100.99043060000008,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 23.774938746387843,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.105671255885829,
      "lon": 101.06700106658508,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 26.47162168143376,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 47,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 2",
      "lat": 13.094588902000057,
      "lon": 101.11351620800008,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 29.366013871150642,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 56,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "lat": 13.126916941000047,
      "lon": 101.15881889900004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 28.750757111920052,
      "latest_observed_at": "2026-10-16 23:00"
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
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 14.94248989029333,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 65,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 4)",
      "lat": 13.081752217000028,
      "lon": 101.03817299200006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 46.0,
      "nearest_alert_km": 28.435574702607067,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755000000035,
      "lon": 99.04487700000004,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.15377827813516,
      "latest_observed_at": "2026-10-17 00:00"
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
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.004485800000053,
      "lon": 101.16260750000004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 22.896520903983966,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 60,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 3",
      "lat": 13.09628960600003,
      "lon": 101.28410551700006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 27.539102019134173,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 61,
      "name": "นิคมอุตสาหกรรมโรจนะหนองใหญ่ จังหวัดชลบุรี",
      "lat": 13.170794615000036,
      "lon": 101.31258289400006,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 26.224095262127022,
      "latest_observed_at": "2026-10-16 23:00"
    },
    {
      "id": 63,
      "name": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
      "lat": 13.231907109000076,
      "lon": 101.31623919700007,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 19.574406661880516,
      "latest_observed_at": "2026-10-16 23:00"
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
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 71,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 1",
      "lat": 13.068722661000038,
      "lon": 101.18655755500004,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 27.39688878611207,
      "latest_observed_at": "2026-10-17 00:00"
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
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 6.384441677806887,
      "latest_observed_at": "2026-10-17 00:00"
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939503915980483,
      "lon": 101.0413767378398,
      "operations": "",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 29.914156745530203,
      "latest_observed_at": "2026-10-17 00:00"
    }
  ],
  "stations": [
    {
      "kind": "waterlevel",
      "station": "สะพานหัวเวียง",
      "station_code": "C.67",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.36851,
      "lon": 100.414391,
      "waterlevel_msl": 4.94,
      "storage_percent": 123.47,
      "bankfull_msl": null,
      "value_text": "4.94 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.702718586020712,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร. คลองลัดบางยอ 2",
      "station_code": "BKC004",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.661021,
      "lon": 100.56727,
      "waterlevel_msl": 1.35,
      "storage_percent": 117.55,
      "bankfull_msl": null,
      "value_text": "1.35 ม.รทก.",
      "observed_at": "2026-10-15 18:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 13.787576568422011,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "waterlevel_msl": 5.74,
      "storage_percent": 116.46,
      "bankfull_msl": null,
      "value_text": "5.74 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.586439945291232,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 5.78,
      "storage_percent": 114.44,
      "bankfull_msl": null,
      "value_text": "5.78 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.573434572085226,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "วัดบางไผ่นารถ",
      "station_code": "T.15",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.05221,
      "lon": 100.175087,
      "waterlevel_msl": 2.59,
      "storage_percent": 110.48,
      "bankfull_msl": null,
      "value_text": "2.59 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 47.9341684991966,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางน้ำเปรี้ยว",
      "station_code": "BPK003",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.87032,
      "lon": 101.14574,
      "waterlevel_msl": 2.61,
      "storage_percent": 109.16,
      "bankfull_msl": null,
      "value_text": "2.61 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.46042027634919,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 6.42,
      "storage_percent": 108.23,
      "bankfull_msl": null,
      "value_text": "6.42 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 14.306312776039722,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 41.21,
      "storage_percent": 108.2,
      "bankfull_msl": null,
      "value_text": "41.21 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.89890323153971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 2.87,
      "storage_percent": 107.39,
      "bankfull_msl": null,
      "value_text": "2.87 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 4.665867272460714,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ที่ว่าการอ.นครชัยศรี",
      "station_code": "T.1",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.80096,
      "lon": 100.188026,
      "waterlevel_msl": 2.24,
      "storage_percent": 106.98,
      "bankfull_msl": null,
      "value_text": "2.24 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 28.81556976693581,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 2.81,
      "storage_percent": 106.18,
      "bankfull_msl": null,
      "value_text": "2.81 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 49.05798711025778,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางปะอิน",
      "station_code": "CPY012",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.30455,
      "lon": 100.56645,
      "waterlevel_msl": 2.97,
      "storage_percent": 103.17,
      "bankfull_msl": null,
      "value_text": "2.97 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 7.998524231584936,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 4.68,
      "storage_percent": 102.43,
      "bankfull_msl": null,
      "value_text": "4.68 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 15.192004169383056,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางปะหัน",
      "station_code": "LBI001",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.42731,
      "lon": 100.55605,
      "waterlevel_msl": 4.91,
      "storage_percent": 102.39,
      "bankfull_msl": null,
      "value_text": "4.91 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.11290468175869,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนครชัยศรี",
      "station_code": "THA008",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79217,
      "lon": 100.19817,
      "waterlevel_msl": 2.06,
      "storage_percent": 101.14,
      "bankfull_msl": null,
      "value_text": "2.06 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 27.81450504933709,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "Y.16",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.757919,
      "lon": 100.115578,
      "waterlevel_msl": 39.01,
      "storage_percent": 100.99,
      "bankfull_msl": null,
      "value_text": "39.01 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 20.608170192807048,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ร.ร.บ้านสามพราน",
      "station_code": "T.14",
      "province": "นครปฐม",
      "district": "สามพราน",
      "lat": 13.72411,
      "lon": 100.215683,
      "waterlevel_msl": 1.55,
      "storage_percent": 100.49,
      "bankfull_msl": null,
      "value_text": "1.55 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 20.11302278215949,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "Y.64",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.762119,
      "lon": 100.121201,
      "waterlevel_msl": 38.9,
      "storage_percent": 99.88,
      "bankfull_msl": null,
      "value_text": "38.9 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.97559718239193,
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
      "waterlevel_msl": 15.85,
      "storage_percent": 99.34,
      "bankfull_msl": null,
      "value_text": "15.85 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.282138683426645,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานณรงค์ดำริ",
      "station_code": "Kgt.1",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.05144,
      "lon": 101.367378,
      "waterlevel_msl": 4.05,
      "storage_percent": 99.22,
      "bankfull_msl": null,
      "value_text": "4.05 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.78754763248004,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 2.23,
      "storage_percent": 98.29,
      "bankfull_msl": null,
      "value_text": "2.23 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.300920472922257,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 3.94,
      "storage_percent": 97.21,
      "bankfull_msl": null,
      "value_text": "3.94 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.42168601144319,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองมหาสวัสดิ บางกรวย-สวนผัก",
      "station_code": "BKK003",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.79965,
      "lon": 100.43863,
      "waterlevel_msl": 1.91,
      "storage_percent": 96.92,
      "bankfull_msl": null,
      "value_text": "1.91 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
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
      "waterlevel_msl": 1.56,
      "storage_percent": 95.83,
      "bankfull_msl": null,
      "value_text": "1.56 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.195539924978746,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองลพบุรี",
      "station_code": "LBI002",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.76049,
      "lon": 100.5996,
      "waterlevel_msl": 6.21,
      "storage_percent": 95.76,
      "bankfull_msl": null,
      "value_text": "6.21 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.153470420161305,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "นครหลวง",
      "station_code": "PAS009",
      "province": "พระนครศรีอยุธยา",
      "district": "นครหลวง",
      "lat": 14.40269,
      "lon": 100.5864,
      "waterlevel_msl": 3.46,
      "storage_percent": 95.38,
      "bankfull_msl": null,
      "value_text": "3.46 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.687099448793155,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 3.34,
      "storage_percent": 95.24,
      "bankfull_msl": null,
      "value_text": "3.34 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 25.846600860267063,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 2.87,
      "storage_percent": 94.39,
      "bankfull_msl": null,
      "value_text": "2.87 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.71905854693515,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 4.42,
      "storage_percent": 93.94,
      "bankfull_msl": null,
      "value_text": "4.42 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.195312328999318,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.47,
      "storage_percent": 93.09,
      "bankfull_msl": null,
      "value_text": "0.47 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.050330940229774,
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
      "waterlevel_msl": 3.66,
      "storage_percent": 92.17,
      "bankfull_msl": null,
      "value_text": "3.66 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.898946508897676,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทาม",
      "station_code": "Kgt.6",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97341,
      "lon": 101.517448,
      "waterlevel_msl": 5.48,
      "storage_percent": 91.7,
      "bankfull_msl": null,
      "value_text": "5.48 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.420438261300376,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
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
      "storage_percent": 91.68,
      "bankfull_msl": null,
      "value_text": "1.47 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.93130739016791,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 0.59,
      "storage_percent": 91.2,
      "bankfull_msl": null,
      "value_text": "0.59 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.631190161803122,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองลำปลาทิว ลาดกระบัง",
      "station_code": "BKK009",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.7407,
      "lon": 100.79468,
      "waterlevel_msl": 0.28,
      "storage_percent": 91.04,
      "bankfull_msl": null,
      "value_text": "0.28 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0362140416044405,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 0.66,
      "storage_percent": 90.94,
      "bankfull_msl": null,
      "value_text": "0.66 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.50034924008027,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.31,
      "storage_percent": 90.17,
      "bankfull_msl": null,
      "value_text": "0.31 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.45953341454558,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 6.07,
      "storage_percent": 89.7,
      "bankfull_msl": null,
      "value_text": "6.07 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.337808011616087,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 7.1,
      "storage_percent": 88.75,
      "bankfull_msl": null,
      "value_text": "7.1 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.67026197358812,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองอ่างทอง",
      "station_code": "CPY008",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.5765,
      "lon": 100.44852,
      "waterlevel_msl": 7.25,
      "storage_percent": 88.45,
      "bankfull_msl": null,
      "value_text": "7.25 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.573455402215103,
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
      "waterlevel_msl": 7.9,
      "storage_percent": 88.4,
      "bankfull_msl": null,
      "value_text": "7.9 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.86801957595799,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
      "station_code": "BKK016",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.83819,
      "lon": 100.9666,
      "waterlevel_msl": 0.81,
      "storage_percent": 88.33,
      "bankfull_msl": null,
      "value_text": "0.81 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.69905378335247,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 0.11,
      "storage_percent": 87.6,
      "bankfull_msl": null,
      "value_text": "0.11 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.945006421763477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 6.32,
      "storage_percent": 87.57,
      "bankfull_msl": null,
      "value_text": "6.32 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.418025616363693,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 3.15,
      "storage_percent": 87.27,
      "bankfull_msl": null,
      "value_text": "3.15 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.688334160220514,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 7.68,
      "storage_percent": 86.65,
      "bankfull_msl": null,
      "value_text": "7.68 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.01027944909514,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ท่าเรือ",
      "station_code": "PAS008",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.56014,
      "lon": 100.71987,
      "waterlevel_msl": 4.53,
      "storage_percent": 86.25,
      "bankfull_msl": null,
      "value_text": "4.53 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.510084795335397,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 10.45,
      "storage_percent": 86.01,
      "bankfull_msl": null,
      "value_text": "10.45 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 46.8907144661931,
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
      "waterlevel_msl": 9.19,
      "storage_percent": 85.78,
      "bankfull_msl": null,
      "value_text": "9.19 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.93348365136987,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 33.9,
      "storage_percent": 85.37,
      "bankfull_msl": null,
      "value_text": "33.9 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.232514608114705,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางปะกง",
      "station_code": "BPK001",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.54901,
      "lon": 101.00111,
      "waterlevel_msl": -0.36,
      "storage_percent": 84.8,
      "bankfull_msl": null,
      "value_text": "-0.36 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.7752687912394733,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานป่าโมก",
      "station_code": "HDA009",
      "province": "อ่างทอง",
      "district": "ป่าโมก",
      "lat": 14.498074,
      "lon": 100.44962,
      "waterlevel_msl": 6.51,
      "storage_percent": 84.25,
      "bankfull_msl": null,
      "value_text": "6.51 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.758642782654789,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": -0.19,
      "storage_percent": 84.24,
      "bankfull_msl": null,
      "value_text": "-0.19 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.19079991757201,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 5.93,
      "storage_percent": 83.54,
      "bankfull_msl": null,
      "value_text": "5.93 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.629065557313126,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานค่ายบางระจัน",
      "station_code": "HDA007",
      "province": "สิงห์บุรี",
      "district": "ค่ายบางระจัน",
      "lat": 14.815288,
      "lon": 100.36448,
      "waterlevel_msl": 8.48,
      "storage_percent": 83.18,
      "bankfull_msl": null,
      "value_text": "8.48 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.95975694360689,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 4.33,
      "storage_percent": 82.34,
      "bankfull_msl": null,
      "value_text": "4.33 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 3.6632876362743403,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "waterlevel_msl": 4.2,
      "storage_percent": 81.7,
      "bankfull_msl": null,
      "value_text": "4.2 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.86535432381292,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 2.59,
      "storage_percent": 81.61,
      "bankfull_msl": null,
      "value_text": "2.59 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.819479632166193,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 3.6,
      "storage_percent": 81.47,
      "bankfull_msl": null,
      "value_text": "3.6 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.195758700698022,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 7.8,
      "storage_percent": 81.32,
      "bankfull_msl": null,
      "value_text": "7.8 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.232421477602117,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานหน้าจวนผู้ว่าฯ",
      "station_code": "Ny.7",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.20048,
      "lon": 101.219307,
      "waterlevel_msl": 6.34,
      "storage_percent": 81.16,
      "bankfull_msl": null,
      "value_text": "6.34 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.80889634653896,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.ลาดชะโด (ทุ่งผักไห่)",
      "station_code": "TCP003",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.464386,
      "lon": 100.366005,
      "waterlevel_msl": 3.89,
      "storage_percent": 80.86,
      "bankfull_msl": null,
      "value_text": "3.89 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.887388401638866,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 4.88,
      "storage_percent": 80.71,
      "bankfull_msl": null,
      "value_text": "4.88 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.515449625154027,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.36,
      "storage_percent": 80.61,
      "bankfull_msl": null,
      "value_text": "0.36 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.67365550525883,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 0.73,
      "storage_percent": 79.09,
      "bankfull_msl": null,
      "value_text": "0.73 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.095038483394372,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 3.9,
      "storage_percent": 78.85,
      "bankfull_msl": null,
      "value_text": "3.9 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.70008602758719,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "กงไกรลาศ",
      "station_code": "YOM007",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.92732,
      "lon": 99.95933,
      "waterlevel_msl": 42.39,
      "storage_percent": 78.43,
      "bankfull_msl": null,
      "value_text": "42.39 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0367060718405,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 309.84,
      "storage_percent": 78.02,
      "bankfull_msl": null,
      "value_text": "309.84 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.00045685599943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 1.31,
      "storage_percent": 77.82,
      "bankfull_msl": null,
      "value_text": "1.31 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.87492828233833,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 3.89,
      "storage_percent": 77.8,
      "bankfull_msl": null,
      "value_text": "3.89 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 26.22916357558414,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.65,
      "storage_percent": 77.15,
      "bankfull_msl": null,
      "value_text": "0.65 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.515461215669056,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "waterlevel_msl": -0.12,
      "storage_percent": 76.91,
      "bankfull_msl": null,
      "value_text": "-0.12 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.674934171316372,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 42.68,
      "storage_percent": 75.93,
      "bankfull_msl": null,
      "value_text": "42.68 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.043927864496574,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.บางแก้ว (ทุ่งผักไห่)",
      "station_code": "TCP005",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.436604,
      "lon": 100.37149,
      "waterlevel_msl": 3.79,
      "storage_percent": 75.8,
      "bankfull_msl": null,
      "value_text": "3.79 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.845110037519646,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองระพีพัฒน์แยกใต้ หนองเสือ",
      "station_code": "BKK013",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.2206,
      "lon": 100.89168,
      "waterlevel_msl": 2.86,
      "storage_percent": 75.7,
      "bankfull_msl": null,
      "value_text": "2.86 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.479318846322684,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 2.55,
      "storage_percent": 75.55,
      "bankfull_msl": null,
      "value_text": "2.55 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.250183047104377,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
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
      "waterlevel_msl": 24.22,
      "storage_percent": 74.54,
      "bankfull_msl": null,
      "value_text": "24.22 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6039437628434,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 21.38,
      "storage_percent": 74.28,
      "bankfull_msl": null,
      "value_text": "21.38 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.28308700895721,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองหกวา ลำลูกกา คลอง8",
      "station_code": "BKK015",
      "province": "ปทุมธานี",
      "district": "ลำลูกกา",
      "lat": 13.9416,
      "lon": 100.77499,
      "waterlevel_msl": 1.35,
      "storage_percent": 73.85,
      "bankfull_msl": null,
      "value_text": "1.35 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.087742962577927,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 14.28,
      "storage_percent": 73.33,
      "bankfull_msl": null,
      "value_text": "14.28 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.87220334815228,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "waterlevel_msl": 0.24,
      "storage_percent": 73.31,
      "bankfull_msl": null,
      "value_text": "0.24 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.60388187720373,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานวัดมงคลร่วมใจ (บ้านวังสาร)",
      "station_code": "FOP022",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.670555,
      "lon": 100.32789,
      "waterlevel_msl": 36.77,
      "storage_percent": 71.77,
      "bankfull_msl": null,
      "value_text": "36.77 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.807326663586515,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บางตะบูนและบางตะบูนออก",
      "station_code": "GLF003",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.26553,
      "lon": 99.9418,
      "waterlevel_msl": -0.12,
      "storage_percent": 71.73,
      "bankfull_msl": null,
      "value_text": "-0.12 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.45314445360332,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานต้นน้ำบางปะกง",
      "station_code": "Kgt.3",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.98666,
      "lon": 101.705406,
      "waterlevel_msl": 5.97,
      "storage_percent": 71.52,
      "bankfull_msl": null,
      "value_text": "5.97 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 10.591098779288023,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระพิมล (ไทรน้อย)",
      "station_code": "BKK018",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 13.97396,
      "lon": 100.31901,
      "waterlevel_msl": 2.28,
      "storage_percent": 70.9,
      "bankfull_msl": null,
      "value_text": "2.28 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.08855794765454,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังกะจะ",
      "station_code": "G09006-TC151005",
      "province": "ฉะเชิงเทรา",
      "district": "แปลงยาว",
      "lat": 13.564515,
      "lon": 101.27105,
      "rainfall_mm": 64.0,
      "value_text": "64 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 8.434061928226125,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนแม่กลอง",
      "station_code": "MKSND04",
      "province": "กาญจนบุรี",
      "district": "ท่าม่วง",
      "lat": 13.95678,
      "lon": 99.61505,
      "rainfall_mm": 61.0,
      "value_text": "61 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 43.656212216313946,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "ทม.ทับกวาง",
      "station_code": "CMKK",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.60885,
      "lon": 101.07645,
      "rainfall_mm": 52.4,
      "value_text": "52.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.560304216545661,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดท่ากระบือ",
      "station_code": "ridtele_TTC09",
      "province": "สมุทรสาคร",
      "district": "กระทุ่มแบน",
      "lat": 13.662052,
      "lon": 100.223332,
      "rainfall_mm": 51.0,
      "value_text": "51 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.166988830996637,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สนามทับทุ่ม บ้านวังนาใน หมู่ที่ 10",
      "station_code": "SWR035",
      "province": "สตูล",
      "district": "ละงู",
      "lat": 7.13571,
      "lon": 99.93736,
      "rainfall_mm": 50.4,
      "value_text": "50.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 48.7230236681225,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ดอนชะเอม",
      "station_code": "DNCM",
      "province": "กาญจนบุรี",
      "district": "ท่ามะกา",
      "lat": 13.96196,
      "lon": 99.80394,
      "rainfall_mm": 48.6,
      "value_text": "48.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 36.4425024286866,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 46.5,
      "value_text": "46.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.174176487414485,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
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
      "rainfall_mm": 46.0,
      "value_text": "46 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.63290791706227,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
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
      "rainfall_mm": 46.0,
      "value_text": "46 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.287812728862335,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 40.6,
      "value_text": "40.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 4.674934171316372,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนโต๊ะเหลง",
      "station_code": "STN1594",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.800666,
      "lon": 100.07791,
      "rainfall_mm": 38.0,
      "value_text": "38 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 38.74499309017716,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปากแม่น้ำบางปะกง",
      "station_code": "ridtele_TKgt54",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.474833,
      "lon": 100.98196,
      "rainfall_mm": 38.0,
      "value_text": "38 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.39764781236248,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
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
      "waterlevel_msl": 52.94,
      "storage_percent": 69.76,
      "bankfull_msl": null,
      "value_text": "52.94 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.02850371868432,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "waterlevel_msl": 1.43,
      "storage_percent": 69.6,
      "bankfull_msl": null,
      "value_text": "1.43 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.837600556856398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 0.37,
      "storage_percent": 68.82,
      "bankfull_msl": null,
      "value_text": "0.37 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.35698288447142,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "วัดหินแท่น (K.62)",
      "station_code": "MKVKD09",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.78093,
      "lon": 99.42085,
      "waterlevel_msl": 52.99,
      "storage_percent": 68.75,
      "bankfull_msl": null,
      "value_text": "52.99 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.03611661451666,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "สามง่าม",
      "station_code": "Y.17",
      "province": "พิจิตร",
      "district": "สามง่าม",
      "lat": 16.507441,
      "lon": 100.204086,
      "waterlevel_msl": 35.59,
      "storage_percent": 67.64,
      "bankfull_msl": null,
      "value_text": "35.59 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.570134034587971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ศาลาดิน",
      "station_code": "VLGE20",
      "province": "นครปฐม",
      "district": "พุทธมณฑล",
      "lat": 13.80777,
      "lon": 100.27417,
      "waterlevel_msl": 0.79,
      "storage_percent": 64.83,
      "bankfull_msl": null,
      "value_text": "0.79 ม.รทก.",
      "observed_at": "2026-10-16 13:50",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 29.667511489847108,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 31.75,
      "storage_percent": 64.8,
      "bankfull_msl": null,
      "value_text": "31.75 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.2038263788759,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านสร่างโศก",
      "station_code": "HDA011",
      "province": "สระบุรี",
      "district": "บ้านหมอ",
      "lat": 14.650794,
      "lon": 100.742775,
      "waterlevel_msl": 8.74,
      "storage_percent": 64.56,
      "bankfull_msl": null,
      "value_text": "8.74 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.932480429893243,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.95,
      "storage_percent": 63.69,
      "bankfull_msl": null,
      "value_text": "1.95 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.742377106873434,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
      "station_code": "TCP012",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.327773,
      "lon": 100.405464,
      "waterlevel_msl": 1.91,
      "storage_percent": 63.67,
      "bankfull_msl": null,
      "value_text": "1.91 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.830034274183255,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 0.63,
      "storage_percent": 63.51,
      "bankfull_msl": null,
      "value_text": "0.63 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.06428903072714,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานแมน้ำปาสัก บ้านนาโฉง",
      "station_code": "HDA012",
      "province": "สระบุรี",
      "district": "เมืองสระบุรี",
      "lat": 14.546983,
      "lon": 100.88976,
      "waterlevel_msl": 8.04,
      "storage_percent": 63.39,
      "bankfull_msl": null,
      "value_text": "8.04 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.387270610268398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ชุมแสง",
      "station_code": "NAN008",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.86923,
      "lon": 100.26481,
      "waterlevel_msl": 23.66,
      "storage_percent": 63.35,
      "bankfull_msl": null,
      "value_text": "23.66 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.6003120453232,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ฝ่ายส่งน้ำและบำรุงรักษาที่ 2",
      "station_code": "TBW008",
      "province": "เชียงใหม่",
      "district": "สันทราย",
      "lat": 18.88353,
      "lon": 99.08182,
      "waterlevel_msl": 320.88,
      "storage_percent": 61.12,
      "bankfull_msl": null,
      "value_text": "320.88 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 31.649037474678174,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 8.3,
      "storage_percent": 60.66,
      "bankfull_msl": null,
      "value_text": "8.3 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.713427738015856,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางกล่ำ",
      "station_code": "SLA007",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.079418,
      "lon": 100.42788,
      "waterlevel_msl": 0.25,
      "storage_percent": 59.71,
      "bankfull_msl": null,
      "value_text": "0.25 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.910660310627168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานแม่น้ำทา",
      "station_code": "PIN007",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.546852,
      "lon": 99.25007,
      "waterlevel_msl": 440.02,
      "storage_percent": 59.54,
      "bankfull_msl": null,
      "value_text": "440.02 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.197415007222318,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ลำน้ำกวงสะพานศรีดอนชัย",
      "station_code": "FOP015",
      "province": "ลำพูน",
      "district": "บ้านธิ",
      "lat": 18.653353,
      "lon": 99.06447,
      "waterlevel_msl": 291.7,
      "storage_percent": 59.49,
      "bankfull_msl": null,
      "value_text": "291.7 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.384441677806887,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนครป่าหมากร่วมใจ",
      "station_code": "VLGE12",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.60887,
      "lon": 100.36977,
      "waterlevel_msl": 34.33,
      "storage_percent": 59.07,
      "bankfull_msl": null,
      "value_text": "34.33 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.82531823296878,
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
      "waterlevel_msl": 10.98,
      "storage_percent": 58.41,
      "bankfull_msl": null,
      "value_text": "10.98 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.23419412493915,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 9.11,
      "storage_percent": 58.22,
      "bankfull_msl": null,
      "value_text": "9.11 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.193355299520884,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองสระแก้ว",
      "station_code": "SKE002",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.809611,
      "lon": 102.05431,
      "waterlevel_msl": 30.31,
      "storage_percent": 57.51,
      "bankfull_msl": null,
      "value_text": "30.31 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.640208181648024,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "อโศก",
      "station_code": "AIT001",
      "province": "กรุงเทพมหานคร",
      "district": "วัฒนา",
      "lat": 13.74325,
      "lon": 100.562164,
      "waterlevel_msl": 1.57,
      "storage_percent": 56.61,
      "bankfull_msl": null,
      "value_text": "1.57 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.810791452117027,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "หนองบัว",
      "station_code": "RAY002",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.849195,
      "lon": 101.301346,
      "waterlevel_msl": 12.71,
      "storage_percent": 55.97,
      "bankfull_msl": null,
      "value_text": "12.71 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.6523093721227236,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองผันน้ำยม-น่าน2",
      "station_code": "DIV002",
      "province": "พิษณุโลก",
      "district": "พรหมพิราม",
      "lat": 16.95387,
      "lon": 100.12127,
      "waterlevel_msl": 40.8,
      "storage_percent": 54.32,
      "bankfull_msl": null,
      "value_text": "40.8 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.19110745038412,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 4.77,
      "storage_percent": 53.72,
      "bankfull_msl": null,
      "value_text": "4.77 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.688545576793311,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 7.18,
      "storage_percent": 53.33,
      "bankfull_msl": null,
      "value_text": "7.18 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.03117019647864,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ลำพะเนียง อ.เมือง",
      "station_code": "URTU03",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.182448,
      "lon": 102.431941,
      "waterlevel_msl": 206.84,
      "storage_percent": 52.41,
      "bankfull_msl": null,
      "value_text": "206.84 ม.รทก.",
      "observed_at": "2026-10-16 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 48.77565416025865,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเนินผาสุก",
      "station_code": "Kgt.10",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.8096,
      "lon": 102.054382,
      "waterlevel_msl": 29.98,
      "storage_percent": 52.34,
      "bankfull_msl": null,
      "value_text": "29.98 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.646875796659856,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านวังนกแอ่น",
      "station_code": "N.24A",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.84712,
      "lon": 100.512093,
      "waterlevel_msl": 46.93,
      "storage_percent": 52.23,
      "bankfull_msl": null,
      "value_text": "46.93 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.08018070636455,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านราชช้างขวัญ",
      "station_code": "N.7A",
      "province": "พิจิตร",
      "district": "เมืองพิจิตร",
      "lat": 16.4695,
      "lon": 100.330872,
      "waterlevel_msl": 29.78,
      "storage_percent": 52.16,
      "bankfull_msl": null,
      "value_text": "29.78 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.686873952200855,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านซำฆ้อ",
      "station_code": "Z.18",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.95677,
      "lon": 101.672096,
      "waterlevel_msl": 30.3,
      "storage_percent": 51.36,
      "bankfull_msl": null,
      "value_text": "30.3 ม.รทก.",
      "observed_at": "2026-10-16 06:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 34.640014831393714,
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
      "waterlevel_msl": 43.93,
      "storage_percent": 51.17,
      "bankfull_msl": null,
      "value_text": "43.93 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.73752831943657,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 28.0,
      "storage_percent": 50.58,
      "bankfull_msl": null,
      "value_text": "28 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.15118819719544,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแก้ง",
      "station_code": "Kgt.12A",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.93635,
      "lon": 101.972321,
      "waterlevel_msl": 16.8,
      "storage_percent": 50.54,
      "bankfull_msl": null,
      "value_text": "16.8 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.843297933527834,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองภาษีเจริญ เพชรเกษม69",
      "station_code": "BKK005",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.69158,
      "lon": 100.38127,
      "waterlevel_msl": -2.68,
      "storage_percent": 48.94,
      "bankfull_msl": null,
      "value_text": "-2.68 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.633474059900415,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 315.63,
      "storage_percent": 48.52,
      "bankfull_msl": null,
      "value_text": "315.63 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 46.074034078099054,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 6.18,
      "storage_percent": 48.24,
      "bankfull_msl": null,
      "value_text": "6.18 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.322455362116656,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนวรัฐ",
      "station_code": "P.1",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.786961,
      "lon": 99.005089,
      "waterlevel_msl": 301.59,
      "storage_percent": 47.27,
      "bankfull_msl": null,
      "value_text": "301.59 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.8389479818548,
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
      "waterlevel_msl": 20.38,
      "storage_percent": 47.03,
      "bankfull_msl": null,
      "value_text": "20.38 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.88918727950312,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 20.06,
      "storage_percent": 46.6,
      "bankfull_msl": null,
      "value_text": "20.06 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.8139582811628,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่าบุญมี",
      "station_code": "Kgt.19A",
      "province": "ชลบุรี",
      "district": "เกาะจันทร์",
      "lat": 13.40472,
      "lon": 101.281776,
      "waterlevel_msl": 15.61,
      "storage_percent": 44.87,
      "bankfull_msl": null,
      "value_text": "15.61 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.94248989029333,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านบึง",
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
      "waterlevel_msl": 5.8,
      "storage_percent": 43.89,
      "bankfull_msl": null,
      "value_text": "5.8 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.599850450622228,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ควนกาหลง",
      "station_code": "STU004",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928349,
      "lon": 99.936035,
      "waterlevel_msl": 22.44,
      "storage_percent": 43.84,
      "bankfull_msl": null,
      "value_text": "22.44 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.6096254577221,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 401.5,
      "storage_percent": 43.69,
      "bankfull_msl": null,
      "value_text": "401.5 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.50040396407909,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านฉลุงเหนือ",
      "station_code": "X.239",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.72662,
      "lon": 100.062737,
      "waterlevel_msl": 14.3,
      "storage_percent": 43.1,
      "bankfull_msl": null,
      "value_text": "14.3 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 43.86269583770013,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทุ่งแฝก",
      "station_code": "Kgt.14A",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.16131,
      "lon": 101.883057,
      "waterlevel_msl": 36.38,
      "storage_percent": 42.15,
      "bankfull_msl": null,
      "value_text": "36.38 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.296714406834624,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองห้วยยาง",
      "station_code": "KIZ003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.136408,
      "lon": 101.857475,
      "waterlevel_msl": 31.6,
      "storage_percent": 41.91,
      "bankfull_msl": null,
      "value_text": "31.6 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.603460352265568,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะเดา",
      "station_code": "SLA003",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.796687,
      "lon": 100.44239,
      "waterlevel_msl": 13.13,
      "storage_percent": 41.89,
      "bankfull_msl": null,
      "value_text": "13.13 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.230396811100928,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 162.45,
      "storage_percent": 41.42,
      "bankfull_msl": null,
      "value_text": "162.45 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.86838939842491,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "waterlevel_msl": 43.43,
      "storage_percent": 41.39,
      "bankfull_msl": null,
      "value_text": "43.43 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 39.10879394408661,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านริมใต้",
      "station_code": "P.21",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.92746,
      "lon": 98.939774,
      "waterlevel_msl": 320.78,
      "storage_percent": 41.25,
      "bankfull_msl": null,
      "value_text": "320.78 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.611997774933826,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 290.07,
      "storage_percent": 40.81,
      "bankfull_msl": null,
      "value_text": "290.07 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 38.14916869631099,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 45.77,
      "storage_percent": 40.46,
      "bankfull_msl": null,
      "value_text": "45.77 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 45.3918896494035,
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
      "waterlevel_msl": 290.37,
      "storage_percent": 40.32,
      "bankfull_msl": null,
      "value_text": "290.37 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.71260178716996,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานเขานางบวช",
      "station_code": "NYK008",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.245718,
      "lon": 101.27481,
      "waterlevel_msl": 5.11,
      "storage_percent": 39.39,
      "bankfull_msl": null,
      "value_text": "5.11 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.94713605347155,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
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
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.36387841872487,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 293.71,
      "storage_percent": 38.81,
      "bankfull_msl": null,
      "value_text": "293.71 ม.รทก.",
      "observed_at": "2026-10-16 20:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.537954498051086,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.88640558131459,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 10.97,
      "storage_percent": 38.37,
      "bankfull_msl": null,
      "value_text": "10.97 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 0.8464884712603398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแก่งดินสอ",
      "station_code": "Kgt.15B",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.06587,
      "lon": 101.922638,
      "waterlevel_msl": 15.61,
      "storage_percent": 37.87,
      "bankfull_msl": null,
      "value_text": "15.61 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.745614593827344,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 204.13,
      "storage_percent": 37.28,
      "bankfull_msl": null,
      "value_text": "204.13 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 30.15878108274017,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ท้ายเขื่อนป่าสักชลสิทธิ์",
      "station_code": "S.28",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.83464,
      "lon": 101.084297,
      "waterlevel_msl": 21.07,
      "storage_percent": 36.68,
      "bankfull_msl": null,
      "value_text": "21.07 ม.รทก.",
      "observed_at": "2026-10-16 12:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.74608468709011,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 2.8,
      "storage_percent": 36.01,
      "bankfull_msl": null,
      "value_text": "2.8 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.304963599540951,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 167.34,
      "storage_percent": 35.44,
      "bankfull_msl": null,
      "value_text": "167.34 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.725608707789945,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองหอยโข่ง",
      "station_code": "SLA002",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.931234,
      "lon": 100.43985,
      "waterlevel_msl": 2.65,
      "storage_percent": 35.38,
      "bankfull_msl": null,
      "value_text": "2.65 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.304873258948597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานวงแหวนรอบ 3",
      "station_code": "P.103",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.86651,
      "lon": 98.978188,
      "waterlevel_msl": 302.88,
      "storage_percent": 35.35,
      "bankfull_msl": null,
      "value_text": "302.88 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 30.0578075597904,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำแม่กลาง",
      "station_code": "MOU294",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.507551,
      "lon": 98.66203,
      "waterlevel_msl": 429.68,
      "storage_percent": 35.18,
      "bankfull_msl": null,
      "value_text": "429.68 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.927600919337834,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 37.5,
      "storage_percent": 35.11,
      "bankfull_msl": null,
      "value_text": "37.5 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.872698547385934,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 1.06,
      "storage_percent": 34.89,
      "bankfull_msl": null,
      "value_text": "1.06 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.64480235683347,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำลำตะคอง",
      "station_code": "MOU246",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.550208,
      "lon": 101.459465,
      "waterlevel_msl": 345.65,
      "storage_percent": 34.75,
      "bankfull_msl": null,
      "value_text": "345.65 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.271067024949225,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": " สะพานข้ามคลองโคน",
      "station_code": "PTTEP1",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3319,
      "lon": 99.96896,
      "waterlevel_msl": -0.52,
      "storage_percent": 33.78,
      "bankfull_msl": null,
      "value_text": "-0.52 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 34.11919849605185,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "YOM008",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.70818,
      "lon": 100.17179,
      "waterlevel_msl": 33.39,
      "storage_percent": 33.77,
      "bankfull_msl": null,
      "value_text": "33.39 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.967810300867315,
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
      "waterlevel_msl": 284.79,
      "storage_percent": 33.71,
      "bankfull_msl": null,
      "value_text": "284.79 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.421019936194998,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 366.87,
      "storage_percent": 33.33,
      "bankfull_msl": null,
      "value_text": "366.87 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.126606895413076,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 35.64,
      "storage_percent": 32.82,
      "bankfull_msl": null,
      "value_text": "35.64 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 27.65208157617353,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 8.63,
      "storage_percent": 31.57,
      "bankfull_msl": null,
      "value_text": "8.63 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.91451213461515,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "นาดี",
      "station_code": "PRC003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.133605,
      "lon": 101.72767,
      "waterlevel_msl": 10.35,
      "storage_percent": 30.91,
      "bankfull_msl": null,
      "value_text": "10.35 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.92980239014854,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานห้วยแม่ตาช้าง",
      "station_code": "MOU010",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.771976,
      "lon": 98.862595,
      "waterlevel_msl": 379.56,
      "storage_percent": 30.77,
      "bankfull_msl": null,
      "value_text": "379.56 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 26.3732617114831,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ลำน้ำสานบ้านทุ่งยาวเหนือ",
      "station_code": "FOP016",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.511826,
      "lon": 99.07731,
      "waterlevel_msl": 318.07,
      "storage_percent": 30.64,
      "bankfull_msl": null,
      "value_text": "318.07 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.52263887180247,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.ปลายคลองบางซอ (ทุ่งเจ้าเจ็ด)",
      "station_code": "TCP002",
      "province": "สุพรรณบุรี",
      "district": "สองพี่น้อง",
      "lat": 14.194874,
      "lon": 100.13267,
      "waterlevel_msl": 1.33,
      "storage_percent": 30.23,
      "bankfull_msl": null,
      "value_text": "1.33 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.28443791048643,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "rainfall_mm": 34.6,
      "value_text": "34.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.387270610268398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 34.0,
      "value_text": "34 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 39.08855794765454,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สตูล",
      "station_code": "48570",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.65,
      "lon": 100.08333,
      "rainfall_mm": 33.6,
      "value_text": "33.6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 38.41260863393544,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกทัง",
      "station_code": "STN0134",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.981245,
      "lon": 100.592958,
      "rainfall_mm": 33.0,
      "value_text": "33 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.90713751571804,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "รร.ผังปาล์ม 4",
      "station_code": "SWR037",
      "province": "สตูล",
      "district": "มะนัง",
      "lat": 7.02235,
      "lon": 99.93085,
      "rainfall_mm": 32.2,
      "value_text": "32.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.3665291807886,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโป่ง",
      "station_code": "RAJ002",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.81866,
      "lon": 99.86508,
      "rainfall_mm": 31.2,
      "value_text": "31.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.232421477602117,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 29.0,
      "value_text": "29 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 42.41456729138937,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองนราภิรมย์ (บางเลน)",
      "station_code": "BKK019",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 13.88207,
      "lon": 100.29086,
      "rainfall_mm": 29.0,
      "value_text": "29 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 37.742377106873434,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานข้ามแม่น้ำท่าจีน 3",
      "station_code": "G09006-TA130203",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.5859,
      "lon": 100.23125,
      "rainfall_mm": 28.5,
      "value_text": "28.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 4.6622115448354835,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนเนียง",
      "station_code": "STN1799",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.835284,
      "lon": 100.498648,
      "rainfall_mm": 28.5,
      "value_text": "28.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.593397363992267,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศรีมหาโพธิ (KGT6)",
      "station_code": "PRC005",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97348,
      "lon": 101.51751,
      "rainfall_mm": 27.0,
      "value_text": "27 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.418025616363693,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองสองห้อง",
      "station_code": "STN1301",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.45968,
      "lon": 101.037522,
      "rainfall_mm": 27.0,
      "value_text": "27 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.567648024216368,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศรีมหาโพธิ์",
      "station_code": "ridtele_TKgt62",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.973075,
      "lon": 101.512525,
      "rainfall_mm": 26.5,
      "value_text": "26.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.878766058468745,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองโพล้ที่เขาชะเมา",
      "station_code": "G09006-TA170403",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.98786,
      "lon": 101.66553,
      "rainfall_mm": 26.5,
      "value_text": "26.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 33.869063022073256,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
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
      "rainfall_mm": 25.5,
      "value_text": "25.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.248179796434606,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 25.0,
      "value_text": "25 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 39.89815350010758,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองแม่น้ำใน",
      "station_code": "TB0004",
      "province": "สระบุรี",
      "district": "วิหารแดง",
      "lat": 14.30168,
      "lon": 100.94521,
      "rainfall_mm": 24.8,
      "value_text": "24.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 10.432445197289608,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองภาษีเจริญ เพชรเกษม69",
      "station_code": "BKK005",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.69158,
      "lon": 100.38127,
      "rainfall_mm": 24.0,
      "value_text": "24 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.633474059900415,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "rainfall_mm": 23.5,
      "value_text": "23.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 36.619354672165436,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.112",
      "station_code": "ridtele_STN11",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.705239,
      "lon": 100.433266,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.29739283152536,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานบ้านนาลาน",
      "station_code": "G09006-TC221203",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.625225,
      "lon": 100.06116,
      "rainfall_mm": 21.5,
      "value_text": "21.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.020120844913755,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองอู่ตะเภาตอนบนทุ่งลาน",
      "station_code": "G09006-TA200303",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.856463,
      "lon": 100.46416,
      "rainfall_mm": 21.0,
      "value_text": "21 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.434904950589534,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก้มอ้น",
      "station_code": "STN1791",
      "province": "ราชบุรี",
      "district": "จอมบึง",
      "lat": 13.745911,
      "lon": 99.464418,
      "rainfall_mm": 21.0,
      "value_text": "21 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 43.37418896744573,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังใหญ่",
      "station_code": "STN1684",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.705379,
      "lon": 100.742996,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.67327840570694,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านไร่",
      "station_code": "STN0211",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.047374,
      "lon": 100.629514,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 30.08095907800218,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านชะอม (บำรุงธรรม)",
      "station_code": "G09006-TC150605",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.407605,
      "lon": 101.10499,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.820722626583926,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่พัฒนา หมู่ 10",
      "station_code": "TE79",
      "province": "สระแก้ว",
      "district": "เขาฉกรรจ์",
      "lat": 13.541551,
      "lon": 101.95172,
      "rainfall_mm": 20.4,
      "value_text": "20.4 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.362706902722444,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ฝายท่าลาด",
      "station_code": "ridtele_TKgt59",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.707719,
      "lon": 101.401415,
      "rainfall_mm": 20.0,
      "value_text": "20 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.932995220382105,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตห้ามล่าสัตว์ป่าแก่งคอย",
      "station_code": "MOU427",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.5439,
      "lon": 101.0983,
      "rainfall_mm": 20.0,
      "value_text": "20 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.221869640809718,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านเหนือคลอง",
      "station_code": "STN1917",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.982381,
      "lon": 100.019556,
      "rainfall_mm": 18.5,
      "value_text": "18.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 37.66249817066509,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 18.0,
      "value_text": "18 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.01515188945304,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 17.4,
      "value_text": "17.4 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.499796057973093,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งไพล",
      "station_code": "STN1715",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.547668,
      "lon": 100.836957,
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.77246490226134,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดหินแท่น (K.62)",
      "station_code": "MKVKD09",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.78093,
      "lon": 99.42085,
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.03611661451666,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองแหน",
      "station_code": "NGNG",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.68338,
      "lon": 101.32512,
      "rainfall_mm": 16.2,
      "value_text": "16.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 7.652635856761577,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "rainfall_mm": 16.0,
      "value_text": "16 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 3.110870573297016,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "rainfall_mm": 15.5,
      "value_text": "15.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.5286606078379,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "พนมสารคาม",
      "station_code": "BPK004",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.72662,
      "lon": 101.35298,
      "rainfall_mm": 15.4,
      "value_text": "15.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.70008602758719,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "rainfall_mm": 15.2,
      "value_text": "15.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 39.64308020943391,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 15.0,
      "value_text": "15 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 23.932480429893243,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผัง 120",
      "station_code": "STN1918",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.929001,
      "lon": 99.980648,
      "rainfall_mm": 14.5,
      "value_text": "14.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 42.766895211963295,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาหวาย",
      "station_code": "STN1656",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.874416,
      "lon": 101.470981,
      "rainfall_mm": 14.5,
      "value_text": "14.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.95358932850628,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "rainfall_mm": 14.4,
      "value_text": "14.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 5.703677802963367,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองตงตอนล่าง",
      "station_code": "ridtele_TSL38",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.848806,
      "lon": 100.471146,
      "rainfall_mm": 14.0,
      "value_text": "14 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.57347033053051,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโพธิ์",
      "station_code": "ridtele_TKgt56",
      "province": "ฉะเชิงเทรา",
      "district": "บ้านโพธิ์",
      "lat": 13.58335,
      "lon": 101.070917,
      "rainfall_mm": 14.0,
      "value_text": "14 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.413886475651438,
      "nearest_estate": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านตลาดเนินหิน",
      "station_code": "ONE061",
      "province": "ชลบุรี",
      "district": "บ่อทอง",
      "lat": 13.298696,
      "lon": 101.36016,
      "rainfall_mm": 13.8,
      "value_text": "13.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.817571825599366,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองมะค่า",
      "station_code": "NMKH",
      "province": "ลพบุรี",
      "district": "โคกเจริญ",
      "lat": 15.4321,
      "lon": 100.9245,
      "rainfall_mm": 13.6,
      "value_text": "13.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 44.147470169810376,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 13.0,
      "value_text": "13 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.561407857762894,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเจริญราษฎร์รังสรรค์",
      "station_code": "MOU463",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.067594,
      "lon": 101.75532,
      "rainfall_mm": 12.4,
      "value_text": "12.4 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.53868284110217,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "เมืองสตูล",
      "station_code": "STU001",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.726527,
      "lon": 100.06259,
      "rainfall_mm": 12.2,
      "value_text": "12.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 43.87220334815228,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ฝายคลองสุคต",
      "station_code": "ridtele_TS.22",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.863621,
      "lon": 101.119957,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 29.16809110290915,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองส้ม",
      "station_code": "ridtele_TS.23",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.822028,
      "lon": 101.014594,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.958961752754117,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ห้วยมวกเหล็กที่ อ.มวกเหล็ก",
      "station_code": "G09006-TA121001",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.690491,
      "lon": 101.200369,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.940476440880083,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานสวนเฉลิมพระเกียรติ 72 พรรษามหาราชินี",
      "station_code": "ONE038",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.182746,
      "lon": 100.59448,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 32.35698288447142,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวควน",
      "station_code": "STN1605",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.526957,
      "lon": 100.512131,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.009850932620274,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองอู่ตะเภา",
      "station_code": "ONE037",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.134997,
      "lon": 100.45321,
      "rainfall_mm": 11.8,
      "value_text": "11.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.45953341454558,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สมุทรปราการ สกษ.",
      "station_code": "48420",
      "province": "สมุทรปราการ",
      "district": "เมืองสมุทรปราการ",
      "lat": 13.51667,
      "lon": 100.76167,
      "rainfall_mm": 11.6,
      "value_text": "11.6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 7.415115576731975,
      "nearest_estate": "นิคมอุตสาหกรรมบางพลี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนจง",
      "station_code": "STN2213",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.968613,
      "lon": 100.51886,
      "rainfall_mm": 11.5,
      "value_text": "11.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.099733015190356,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศรีกะอาง",
      "station_code": "WRRS",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.27798,
      "lon": 101.12879,
      "rainfall_mm": 11.2,
      "value_text": "11.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 27.092634302063587,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ฉะเชิงเทรา",
      "station_code": "48458",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.51556,
      "lon": 101.45833,
      "rainfall_mm": 11.1,
      "value_text": "11.1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.754779544208294,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.27805357743103,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองไข่มุก",
      "station_code": "STN1714",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.640181,
      "lon": 100.619208,
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.206033075933966,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สงขลา",
      "station_code": "48568",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.18211,
      "lon": 100.60769,
      "rainfall_mm": 10.6,
      "value_text": "10.6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 33.49404463391094,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนอนุบาลหนองใหญ่",
      "station_code": "G09006-TA170402",
      "province": "ชลบุรี",
      "district": "หนองใหญ่",
      "lat": 13.15719,
      "lon": 101.37741,
      "rainfall_mm": 10.5,
      "value_text": "10.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 2.5866704856555467,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านคลองตาเพชร",
      "station_code": "G09006-TA170401",
      "province": "ชลบุรี",
      "district": "บ่อทอง",
      "lat": 13.24529,
      "lon": 101.53333,
      "rainfall_mm": 10.5,
      "value_text": "10.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.227222955269863,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
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
      "rainfall_mm": 10.5,
      "value_text": "10.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 38.98690670650098,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองประแสร์ที่กระแสบน",
      "station_code": "G09006-TA170404",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.85044,
      "lon": 101.63364,
      "rainfall_mm": 10.0,
      "value_text": "10 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.635600815855664,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองน้ำใส",
      "station_code": "ridtele_TTL.02",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.85454,
      "lon": 102.377483,
      "rainfall_mm": 10.0,
      "value_text": "10 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.020798806607928,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นครชัยศรี",
      "station_code": "TANA",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79036,
      "lon": 100.19051,
      "rainfall_mm": 9.6,
      "value_text": "9.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.627858011376595,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองอู่ตะเภาตอนล่าง",
      "station_code": "G09006-TA200304",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.00208,
      "lon": 100.45587,
      "rainfall_mm": 9.5,
      "value_text": "9.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.62436969158755,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 9.5,
      "value_text": "9.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.37516196567731,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 9.5,
      "value_text": "9.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.0344717749169,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 9.5,
      "value_text": "9.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.922082679996798,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานนครชัยศรี",
      "station_code": "THA008",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79217,
      "lon": 100.19817,
      "rainfall_mm": 9.4,
      "value_text": "9.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.81450504933709,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำโฮ่งฮ่างอันเนื่องมาจากพระราขดำริ",
      "station_code": "RES010",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.56854,
      "lon": 99.24858,
      "rainfall_mm": 9.4,
      "value_text": "9.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.6247820990615,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติทะเลบัน",
      "station_code": "MOU137",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.709046,
      "lon": 100.16905,
      "rainfall_mm": 9.2,
      "value_text": "9.2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.79114215034916,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านผังปาล์ม 1",
      "station_code": "ridtele_LA07 (TX.336)",
      "province": "สตูล",
      "district": "มะนัง",
      "lat": 6.998849,
      "lon": 99.911013,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.54217177724728,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ลำตะคอง",
      "station_code": "MOU263",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.735245,
      "lon": 101.3785,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.696235786638894,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านตะคร้อเหนือ",
      "station_code": "G09006-TC150505",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.183638,
      "lon": 101.59204,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.54323463971771,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วัดโบสถ์",
      "station_code": "WTBT",
      "province": "พิษณุโลก",
      "district": "วัดโบสถ์",
      "lat": 16.95813,
      "lon": 100.33734,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.05130379751956,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่ามาบลำบิด",
      "station_code": "MOU119",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.164513,
      "lon": 101.15418,
      "rainfall_mm": 8.8,
      "value_text": "8.8 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.210559976461311,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ้านโคกอุดม",
      "station_code": "MKKB",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.06948,
      "lon": 101.80991,
      "rainfall_mm": 8.8,
      "value_text": "8.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.968176524129444,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 8.6,
      "value_text": "8.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.81373867868995,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชลบุรี",
      "station_code": "48459",
      "province": "ชลบุรี",
      "district": "เมืองชลบุรี",
      "lat": 13.36667,
      "lon": 100.98333,
      "rainfall_mm": 8.2,
      "value_text": "8.2 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.497316424856503,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เหนือเขื่อนป่าสัก",
      "station_code": "ridtele_TS.10",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.848254,
      "lon": 101.090205,
      "rainfall_mm": 8.0,
      "value_text": "8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.384962279972882,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพรุเตาะนอก",
      "station_code": "STN0580",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.040102,
      "lon": 100.536696,
      "rainfall_mm": 8.0,
      "value_text": "8 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.84017165230821,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ตากฟ้า สกษ.",
      "station_code": "48401",
      "province": "นครสวรรค์",
      "district": "ตากฟ้า",
      "lat": 15.34944,
      "lon": 100.53028,
      "rainfall_mm": 7.6,
      "value_text": "7.6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.322537154648934,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองคล้า",
      "station_code": "STN0274",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.490439,
      "lon": 101.040808,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.332532128777713,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.533455547425596,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองมหาชัย วัดพันท้ายนรสิงห์",
      "station_code": "BKK006",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.58184,
      "lon": 100.36587,
      "rainfall_mm": 7.4,
      "value_text": "7.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.60388187720373,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อาคารเวทีกลางสระบัว",
      "station_code": "TH27",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.21373,
      "lon": 100.58728,
      "rainfall_mm": 7.3,
      "value_text": "7.3 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.94079121983301,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดหนองน้ำเขียว",
      "station_code": "ONE063",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.234701,
      "lon": 101.11684,
      "rainfall_mm": 7.2,
      "value_text": "7.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.817839662436686,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์ หมู่ 7",
      "station_code": "TD99",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.45788,
      "lon": 99.44012,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.59469414361081,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองโก",
      "station_code": "STN0693",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.427751,
      "lon": 99.49674,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.738842906492124,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักแว่น",
      "station_code": "STN1589",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.040789,
      "lon": 102.577395,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.322275019675324,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.728187231816047,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.429097174626868,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.51738681892557,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.06590911252587,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผู้ช่วยผู้ใหญ่บ้าน หมู่ 6",
      "station_code": "TB87",
      "province": "นครนายก",
      "district": "ปากพลี",
      "lat": 14.23455,
      "lon": 101.35369,
      "rainfall_mm": 6.9,
      "value_text": "6.9 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.732431417798544,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 6.8,
      "value_text": "6.8 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95471174698642,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าอ่างช้างน้ำ",
      "station_code": "MOU468",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.2743,
      "lon": 101.082,
      "rainfall_mm": 6.2,
      "value_text": "6.2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.65685867509546,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านบึง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินลับ",
      "station_code": "STN0678",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.672587,
      "lon": 101.126529,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.810230158371521,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปลักหว้า",
      "station_code": "STN1923",
      "province": "สตูล",
      "district": "ท่าแพ",
      "lat": 6.80296,
      "lon": 99.963794,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.31667259650628,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านดง",
      "station_code": "STN1790",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.321565,
      "lon": 101.306075,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95365547083031,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.656128530441595,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบูเก็ตยามู",
      "station_code": "STN1029",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.799783,
      "lon": 100.112546,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.810369515188974,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยประมงศรีราชา",
      "station_code": "GOT001",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.185876,
      "lon": 100.916916,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.716709510122786,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำลัด",
      "station_code": "STN2060",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.62954,
      "lon": 100.442957,
      "rainfall_mm": 5.5,
      "value_text": "5.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.275678327210088,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองนางรอง",
      "station_code": "MOU461",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.315195,
      "lon": 101.312836,
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.79263454648103,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ควนกาหลง",
      "station_code": "STU004",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928349,
      "lon": 99.936035,
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.6096254577221,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.495226581811686,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการกองทุนบ้านหนองผักแว่น หมู่ 9",
      "station_code": "TE65",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.04115,
      "lon": 102.57745,
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.362732155627924,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศีรษะจรเข้น้อย",
      "station_code": "BST1",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.67777,
      "lon": 100.7945,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.967110872590503,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.40189804493517,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-10-16 13:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.667511489847108,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเขานางบวช",
      "station_code": "NYK008",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.245718,
      "lon": 101.27481,
      "rainfall_mm": 4.6,
      "value_text": "4.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.94713605347155,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนไม้ไผ่",
      "station_code": "STN0212",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.919856,
      "lon": 100.643306,
      "rainfall_mm": 4.5,
      "value_text": "4.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.798940702128306,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพุบอนบน",
      "station_code": "STN0791",
      "province": "ราชบุรี",
      "district": "บ้านคา",
      "lat": 13.390971,
      "lon": 99.499611,
      "rainfall_mm": 4.5,
      "value_text": "4.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.74914784453526,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หาดใหญ่",
      "station_code": "SLA001",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98013,
      "lon": 100.46322,
      "rainfall_mm": 4.2,
      "value_text": "4.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.834415195032278,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านอุใดใต้",
      "station_code": "ridtele_LA04 (TX.334)",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928031,
      "lon": 99.935987,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.62145726325911,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่กำปอง",
      "station_code": "STN0203",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.865894,
      "lon": 99.352648,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.31348022005833,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เขาน้อย",
      "station_code": "CG01",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.322683,
      "lon": 101.293798,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.628650685880636,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สถานีคลองหวะ",
      "station_code": "ridtele_STN07",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.970027,
      "lon": 100.515863,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.740743742646153,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองบน",
      "station_code": "STN1187",
      "province": "เพชรบูรณ์",
      "district": "ชนแดน",
      "lat": 15.931117,
      "lon": 100.829141,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.55859634773667,
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
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.661901207133553,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.96607177882031,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่ามะปราง",
      "station_code": "STN1584",
      "province": "นครนายก",
      "district": "ปากพลี",
      "lat": 14.222935,
      "lon": 101.356088,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.59859365427491,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโกรกอีดก",
      "station_code": "ONWR01",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.4417,
      "lon": 101.17281,
      "rainfall_mm": 3.6,
      "value_text": "3.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.983521249057052,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 3.6,
      "value_text": "3.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.90814625497235,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หอทอง",
      "station_code": "ridtele_TKgt61",
      "province": "ปราจีนบุรี",
      "district": "บ้านสร้าง",
      "lat": 13.960857,
      "lon": 101.216475,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.38261214685205,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านสำนักเอาะ",
      "station_code": "STN1693",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.485849,
      "lon": 100.779058,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.85174212688185,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.954084799469323,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกแสมสาร",
      "station_code": "STN0675",
      "province": "ลพบุรี",
      "district": "โคกเจริญ",
      "lat": 15.336768,
      "lon": 100.831599,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.21491903883384,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.601379042586075,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.004598414131543,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.170338608166176,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ท่าเรือ",
      "station_code": "PAS008",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.56014,
      "lon": 100.71987,
      "rainfall_mm": 3.4,
      "value_text": "3.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.510084795335397,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 3.4,
      "value_text": "3.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.04088797676839,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนามบินสุวรรณภูมิ",
      "station_code": "48429",
      "province": "สมุทรปราการ",
      "district": "บางพลี",
      "lat": 13.68639,
      "lon": 100.7675,
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.459434496401541,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำลพบุรี บ้านโพธิ์เก้าต้น",
      "station_code": "HDA010",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.794374,
      "lon": 100.60633,
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.9375086711988,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พระนครศรีอยุธยา",
      "station_code": "48415",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.53472,
      "lon": 100.725,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.80312968515648,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบางปี",
      "station_code": "G09006-TA100216",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.794419,
      "lon": 100.60588,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.94091618227815,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียน ตชด.บ้านส้านักเอาะ",
      "station_code": "FOP069",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.483326,
      "lon": 100.779366,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.92913921048899,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งปรือ",
      "station_code": "STN1621",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.815911,
      "lon": 100.554191,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.296569538044483,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองตงตอนบน",
      "station_code": "ridtele_TSL37",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.817693,
      "lon": 100.553952,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-16 13:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.138215549802513,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ลพบุรี",
      "station_code": "48426",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.79972,
      "lon": 100.645,
      "rainfall_mm": 2.8,
      "value_text": "2.8 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.91757270504817,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 2.6,
      "value_text": "2.6 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.509787632138606,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บางปะหัน",
      "station_code": "LBI001",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.42731,
      "lon": 100.55605,
      "rainfall_mm": 2.6,
      "value_text": "2.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.11290468175869,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม",
      "station_code": "ridtele_TKgt51",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.069966,
      "lon": 101.518579,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.27638078151886,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบีกริม",
      "station_code": "STN1004",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.638481,
      "lon": 102.393412,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.83949113726908,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกระบกเตี้ย",
      "station_code": "STN1585",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.682595,
      "lon": 101.528919,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.825842039437443,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปทุมธานี สกษ.",
      "station_code": "48419",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.1,
      "lon": 100.61667,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.329689656172745,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองกั่ว",
      "station_code": "STN0227",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 6.94136,
      "lon": 100.133067,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.10782949240627,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.85921844276008,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.801458400015285,
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.883250416535583,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สำนักสงฆ์โสธรรมนิมิตร",
      "station_code": "ONE064",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.168441,
      "lon": 101.03034,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.512657119107435,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เขตอุตสาหกรรมกบินทร์บุรี",
      "station_code": "KIZ001",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.072372,
      "lon": 101.837494,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.03761805796871,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานห้วยแม่ตาช้าง",
      "station_code": "MOU010",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.771976,
      "lon": 98.862595,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.3732617114831,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม (KGT7A)",
      "station_code": "PRC004",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.070941,
      "lon": 101.51893,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.337808011616087,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "นาดี",
      "station_code": "PRC003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.133605,
      "lon": 101.72767,
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.92980239014854,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.837600556856398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.067160264056348,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รพ. ส่งเสริมสุขภาพ บ้าน น้ำปาด",
      "station_code": "TD53",
      "province": "พิษณุโลก",
      "district": "เนินมะปราง",
      "lat": 16.70876,
      "lon": 100.57362,
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.613132823947964,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สมบูรณ์",
      "station_code": "ridtele_TNy9",
      "province": "นครนายก",
      "district": "องครักษ์",
      "lat": 13.970389,
      "lon": 101.138699,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.3540411127709,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองกระท้อน",
      "station_code": "STN0786",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.823198,
      "lon": 101.381608,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.538902464418241,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.65416268665123,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "คลองหอยโข่ง",
      "station_code": "SLA002",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.931234,
      "lon": 100.43985,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.304873258948597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.945006421763477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลอง 1ซ-ร1",
      "station_code": "ridtele_TSL27",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.008409,
      "lon": 100.442098,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.082132755141009,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TJ14 - ศูนย์ประสานงานการช่วยเหลือผู้ประสบภัย ทางทะเล หมู่ 1 ต.นาเกลือ อ.บางละมุง จ.ชลบุรี",
      "station_code": "TJ14",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.99171,
      "lon": 100.92182,
      "rainfall_mm": 1.7,
      "value_text": "1.7 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.884259043741018,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.488954741504234,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปากรอ",
      "station_code": "G09006-TA200307",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.262618,
      "lon": 100.42497,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.1828862580458,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.00462535610129,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.17227616803731,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังหิน",
      "station_code": "STN0178",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.263495,
      "lon": 101.891589,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.68961903666013,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.88540679282871,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.987587498802952,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๔ (คลองปลากั้ง)",
      "station_code": "MOU111",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.356375,
      "lon": 101.72591,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.819754870491224,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ทม.วังน้ำเย็น",
      "station_code": "TTWY",
      "province": "สระแก้ว",
      "district": "วังน้ำเย็น",
      "lat": 13.50019,
      "lon": 102.18437,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.11645205473142,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "องค์การบริหารส่วนตาบลบุพราหมณ์",
      "station_code": "CP02",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.281191,
      "lon": 101.897031,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.68882401014099,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สะเดา",
      "station_code": "SLA003",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.796687,
      "lon": 100.44239,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.230396811100928,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปากรอ",
      "station_code": "SLA005",
      "province": "สงขลา",
      "district": "สิงหนคร",
      "lat": 7.261514,
      "lon": 100.42447,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.050330940229774,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.106499164490682,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "สสน."
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.8525868457705155,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านสองพี่น้อง",
      "station_code": "STN1800",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.77487,
      "lon": 100.422722,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.930225487273518,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.649145159681108,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะเดา",
      "station_code": "48574",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.79806,
      "lon": 100.39056,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.618419732349793,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองเกรียงไกร",
      "station_code": "TBW014",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.84312,
      "lon": 100.21149,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.95593032816644,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทจ.1 (ห้วยต้นห้าง)",
      "station_code": "MOU453",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.4169,
      "lon": 99.555,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.22265938238649,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.462268614614038,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.6828614219267,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่ามะปราง",
      "station_code": "NF01",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51634,
      "lon": 101.3774,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.527456272396115,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ปลายคลองบางซอ (ทุ่งเจ้าเจ็ด)",
      "station_code": "TCP002",
      "province": "สุพรรณบุรี",
      "district": "สองพี่น้อง",
      "lat": 14.194874,
      "lon": 100.13267,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.28443791048643,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนบ้านท่าหรั่ง",
      "station_code": "STN2059",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.107131,
      "lon": 100.198006,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.96825900252832,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.790887330336005,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นาแขม",
      "station_code": "VLGE50",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.04255,
      "lon": 101.72051,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.82661524391665,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ยางหัก",
      "station_code": "G09006-TA180302",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.267599,
      "lon": 99.593249,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.60818730085655,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.43381666900714,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่กองปิน",
      "station_code": "STN0881",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.618016,
      "lon": 99.475075,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.42992494503993,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.472632961201965,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หาดใหญ่",
      "station_code": "48569",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.91667,
      "lon": 100.43333,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.022193259139728,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "นครปฐม",
      "station_code": "48451",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 14.01167,
      "lon": 99.97,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.5977605723089,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองลำพญาธาร",
      "station_code": "MOU460",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.26568,
      "lon": 101.89133,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.930789681787886,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ่อวิน",
      "station_code": "SWNG",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.05505,
      "lon": 101.09782,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.8374957992377094,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พัทยา",
      "station_code": "48461",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.92,
      "lon": 100.86944,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.933208442922655,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ท่าเกวียน",
      "station_code": "TON004",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.68734,
      "lon": 102.28413,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.503418956657505,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.76029248076602,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าแม่ทา",
      "station_code": "MOU260",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.43999,
      "lon": 99.14778,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.062517576185186,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.910660310627168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.374606073549067,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.998524231584936,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านเหมืองแร่",
      "station_code": "ONE088",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.880652,
      "lon": 101.784584,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.50258179986661,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.กรอกสมบูรณ์",
      "station_code": "RBPI",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.77716,
      "lon": 101.65875,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.360027355574916,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านตลาดใหม่",
      "station_code": "HDA008",
      "province": "อ่างทอง",
      "district": "วิเศษชัยชาญ",
      "lat": 14.553573,
      "lon": 100.316765,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.86535432381292,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.797913859926771,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางปะกง",
      "station_code": "BPK001",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.54901,
      "lon": 101.00111,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.7752687912394733,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปลายคลอง",
      "station_code": "STN1692",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.696497,
      "lon": 100.586443,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.69356603018849,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.219863971960265,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.450437870816923,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านตะเภาลาย",
      "station_code": "ridtele_TKgt53",
      "province": "ปราจีนบุรี",
      "district": "บ้านสร้าง",
      "lat": 14.012733,
      "lon": 101.265193,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.48505998336849,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกล่าม",
      "station_code": "STN1900",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.06926,
      "lon": 102.631423,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.4696895239987,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.357636704948185,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.7363282289368601,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาคันทรง",
      "station_code": "STN1653",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.11583,
      "lon": 101.167548,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.5535112929361043,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.682767693819189,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานวัดโบสถ์",
      "station_code": "G09006-TA092002",
      "province": "พิษณุโลก",
      "district": "วัดโบสถ์",
      "lat": 16.996882,
      "lon": 100.312121,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.98628638355026,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านชายคลอง",
      "station_code": "STN2062",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.963151,
      "lon": 100.458623,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.004532299603285,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งลัง",
      "station_code": "STN1607",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.547067,
      "lon": 100.734004,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.3995193108718,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.22878128002875,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.68055542967016,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานพระพุทธยอดฟ้า",
      "station_code": "G09006-TA100220",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.738694,
      "lon": 100.49633,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.57161312341853,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.210566343383235,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.12659666215714,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.310005487503117,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.714745580455975,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.16529646122387,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนไทยรัฐวิทยา108 (บ้านสำนักทอง)",
      "station_code": "G09006-TA170301",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.76531,
      "lon": 101.48041,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.985545056386992,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานข้ามแม่น้ำท่าจีน (ทางหลวง 346)",
      "station_code": "G09006-TA130206",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.015993,
      "lon": 100.18,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.05533971858623,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.47059700154594,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.205913072625275,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาพระ",
      "station_code": "G09006-TA200308",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.05101,
      "lon": 100.16574,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.93811292443077,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.2052987960418,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคอก-วังไทร",
      "station_code": "STN0507",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.585939,
      "lon": 100.672797,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.048769895702318,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบาโรย",
      "station_code": "STN0152",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.774554,
      "lon": 100.230542,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.64693605816949,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.51430061148113,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.01185573221601,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.867398487093766,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำลำตะคอง",
      "station_code": "MOU246",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.550208,
      "lon": 101.459465,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.271067024949225,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ทต.ไพศาลี",
      "station_code": "PSLI",
      "province": "นครสวรรค์",
      "district": "ไพศาลี",
      "lat": 15.60012,
      "lon": 100.6572,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.970221220850517,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.573455402215103,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการชุมชนเกาะล้าน",
      "station_code": "TJ09",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.92127,
      "lon": 100.78802,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.690468831113463,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "คลองมหาสวัสดิ บางกรวย-สวนผัก",
      "station_code": "BKK003",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.79965,
      "lon": 100.43863,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.741410424380156,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทม.สะเดา",
      "station_code": "TSDO",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63837,
      "lon": 100.42479,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.803452650452002,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.เขาพระ",
      "station_code": "KAOP",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.07915,
      "lon": 100.19008,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.321326804014046,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.06762398773943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.67026197358812,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาปลาดุก ม.5",
      "station_code": "FL01",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.49536,
      "lon": 99.20316,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.83250537963344,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "หนองบัว",
      "station_code": "RAY002",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.849195,
      "lon": 101.301346,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.6523093721227236,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองบางม่วง",
      "station_code": "ONE024",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.365284,
      "lon": 100.27959,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.67365550525883,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.131766068445735,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.89260098235917,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.28308700895721,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังท่าช้าง",
      "station_code": "WTCH",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.75941,
      "lon": 101.88693,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.445528831027715,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.กำแพงแสน",
      "station_code": "KSKP",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 14.00326,
      "lon": 99.98091,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.07779839285101,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางเลน",
      "station_code": "THA007",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.01636,
      "lon": 100.17979,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.05798711025778,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อุทยานแห่งชาติเขาใหญ่",
      "station_code": "MOU114",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.434425,
      "lon": 101.372604,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.57235873708247,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางกระเจ้า",
      "station_code": "BKJO",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.52146,
      "lon": 100.19283,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.3780877670010234,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.640208181648024,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยศึกษาการพัฒนาการอนุรักษ์ต้นน้ำปิงส่วนที่ 2 จังหวัดเชียงใหม่",
      "station_code": "MOU001",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.875978,
      "lon": 98.79428,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.78040063937346,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สา",
      "station_code": "MOU002",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.900038,
      "lon": 98.84829,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.6505840052055,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางครก",
      "station_code": "BNPK",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.19867,
      "lon": 99.95052,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.68430691375189,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำแม่สา",
      "station_code": "MOU009",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.885838,
      "lon": 98.826904,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.55447608245622,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "เมืองแกลง",
      "station_code": "RAY001",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.802991,
      "lon": 101.65024,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.688334160220514,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "องค์การบริหารส่วนตำบลบางลาย หมู่ที่ 3",
      "station_code": "FT03",
      "province": "พิจิตร",
      "district": "บึงนาราง",
      "lat": 16.19118,
      "lon": 100.23879,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.781185552109186,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สนามฟุตบอล ม.1",
      "station_code": "TJ04",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16044,
      "lon": 100.80563,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.5851746337789,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.674009630615416,
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.82755324608657,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.79034979844632,
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.150260325485704,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.221752281247326,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ปากช่อง สกษ.",
      "station_code": "48435",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.64389,
      "lon": 101.33194,
      "rainfall_mm": 0.01,
      "value_text": "0.01 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.90605207349294,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สุพรรณบุรี",
      "station_code": "48425",
      "province": "สุพรรณบุรี",
      "district": "เมืองสุพรรณบุรี",
      "lat": 14.47444,
      "lon": 100.13889,
      "rainfall_mm": 0.01,
      "value_text": "0.01 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.2111914571275,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.01,
      "value_text": "0.01 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.594860632472948,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สัตหีบ",
      "station_code": "48477",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.68333,
      "lon": 100.98333,
      "rainfall_mm": 0.01,
      "value_text": "0.01 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.799008781419568,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "อต."
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.190801822103584,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.86122806015871,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.53452242216833,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งขาม",
      "station_code": "STN1257",
      "province": "ลำปาง",
      "district": "เกาะคา",
      "lat": 18.243647,
      "lon": 99.316658,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.170721745745965,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.990137882011231,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.338510512529137,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองยาง",
      "station_code": "STN1478",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.607045,
      "lon": 101.207572,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.550807101848743,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับใต้",
      "station_code": "STN1479",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.542774,
      "lon": 101.243758,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.94354132561136,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองเดื่อ",
      "station_code": "STN1481",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.514054,
      "lon": 101.442372,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.32608351092006,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.458776686692346,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.107596883298854,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ปตร.วัดบางกระเจ้านอก",
      "station_code": "BKC002",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.689612,
      "lon": 100.554886,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.515461215669056,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองลัดบางยอ 1",
      "station_code": "BKC003",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.676162,
      "lon": 100.553085,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.06428903072714,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองบางน้ำผึ้ง",
      "station_code": "BKC006",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.676648,
      "lon": 100.58207,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.614992020981914,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองแพ",
      "station_code": "BKC007",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.694974,
      "lon": 100.58231,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.583760714839544,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ตลาดน้ำบางน้ำผึ้ง",
      "station_code": "BKC008",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.678656,
      "lon": 100.57356,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.51733445065366,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.53044041204005,
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.97506055308093,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 16:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.407156077101288,
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.52263887180247,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.807326663586515,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อโศก",
      "station_code": "AIT001",
      "province": "กรุงเทพมหานคร",
      "district": "วัฒนา",
      "lat": 13.74325,
      "lon": 100.562164,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.810791452117027,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.97780435600504,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๑๗ (กลางดง)",
      "station_code": "MOU106",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.549575,
      "lon": 101.26519,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.89681274800726,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทล.๑๑ (ไทยสามัคคี)",
      "station_code": "MOU112",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.322821,
      "lon": 101.93274,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.71665998706693,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.772552410745256,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าอ่าวท่ายาง",
      "station_code": "MOU135",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.42019,
      "lon": 100.33263,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.90254768279872,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่ไทยถาวร",
      "station_code": "STN1579",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.094721,
      "lon": 102.694658,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.91622759029636,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.810771135849365,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวบุ่ง",
      "station_code": "STN1582",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.199403,
      "lon": 101.402909,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.3125162204715,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.194588131796827,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.99937521772513,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแผ่นดินเย็น",
      "station_code": "STN1591",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.960406,
      "lon": 102.505896,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.819760116104607,
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.032304015443806,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนเสม็ด",
      "station_code": "STN1595",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.695564,
      "lon": 100.521218,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.819030100615226,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนาวัง",
      "station_code": "STN1654",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.998358,
      "lon": 101.005843,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.582213245492624,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
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
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.9743283114886534,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านยุบตาเหน่ง",
      "station_code": "STN1664",
      "province": "ระยอง",
      "district": "วังจันทร์",
      "lat": 12.967637,
      "lon": 101.466628,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.886330492754643,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านดอยปุย",
      "station_code": "STN1670",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.81661,
      "lon": 98.8835,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.83554483458552,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำเชี่ยว",
      "station_code": "STN1687",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.466831,
      "lon": 100.833499,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.13375242742401,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองน้ำเย็น",
      "station_code": "STN1789",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.786534,
      "lon": 101.726321,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.05298427696326,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์ป้องกันและบรรเทาสาธารณภัยเกาะล้าน",
      "station_code": "TJ11",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.91415,
      "lon": 100.76807,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.661566990988423,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "TJ05 - อาคารเอนกประสงค์เกาะขามใหญ่ ต.ท่าเทววงษ์ อ.เกาะสีชัง จ.ชลบุรี",
      "station_code": "TJ05",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16563,
      "lon": 100.8214,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.727372111208721,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "หาดถ้ำพัง หมู่ 3",
      "station_code": "TJ07",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.14628,
      "lon": 100.80699,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.511528792919691,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ประปาหมู่บ้าน หมู่ 8",
      "station_code": "TB81",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.32514,
      "lon": 101.07687,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.871180193723266,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.57972039805713,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "เทศบาลเมืองมาบตาพุด",
      "station_code": "TJ23",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.72456,
      "lon": 101.12732,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.7683030605670476,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.297411549262385,
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.45840553015746,
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.873111363604046,
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.19909326804081,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.14720510943621,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "มัสยิดบาฮาอุดดิน(บ้าลุ่ม) หมู่ 1",
      "station_code": "TF43",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63612,
      "lon": 100.43751,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.809877143401716,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.308980998149355,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.327016176383665,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.08698645876541,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.037579683999095,
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.881989836942026,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านประธานสภา หมู่ 5",
      "station_code": "TD60",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.1272,
      "lon": 100.04932,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.88203537235225,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.629065557313126,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ลาดชะโด (ทุ่งผักไห่)",
      "station_code": "TCP003",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.464386,
      "lon": 100.366005,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.887388401638866,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.845110037519646,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
      "station_code": "TCP012",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.327773,
      "lon": 100.405464,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.830034274183255,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.509585135609612,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.493648713330077,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านหินเทิน",
      "station_code": "ONE071",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.064819,
      "lon": 102.01052,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.625413383813196,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.889603296860976,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.81915636894548,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ปลวกแดง",
      "station_code": "ONE091",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.970066,
      "lon": 101.20457,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.943096814769784,
      "nearest_estate": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดคลองคันโท",
      "station_code": "ONE100",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.94595,
      "lon": 102.28505,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.16856990409531,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.223225531528975,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.11596259561385,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์กู้ภัยทางทะเลและชายฝั่งวงศ์อมาตย์ หมู่ 5",
      "station_code": "TJ13",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.9578,
      "lon": 100.88441,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.475414165455161,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนตากวน-อ่าวประดู่ เขตเทศบาลเมืองมาบตาพุต",
      "station_code": "EB03",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.67415,
      "lon": 101.17208,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.349139542633666,
      "nearest_estate": "ท่าเรืออุตสาหกรรมมาบตาพุด",
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
      "observed_at": "2026-10-16 22:50",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.27979204659398,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ทต.บางปะหัน",
      "station_code": "CJ04",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.46164,
      "lon": 100.54531,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.240545830645339,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.42745390227255,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าโตนงาช้าง",
      "station_code": "MOU502",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.943634,
      "lon": 100.250435,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.04845477137316,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทล. ๓ (ลำแปรง)",
      "station_code": "MOU256",
      "province": "นครราชสีมา",
      "district": "ครบุรี",
      "lat": 14.2047,
      "lon": 102.211,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 17:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.246140847874884,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-16 16:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.41808696338698,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านภูพานทอง",
      "station_code": "STN1893",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.228966,
      "lon": 102.47278,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.36126923138884,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.926963502623934,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทับไฮ",
      "station_code": "STN1899",
      "province": "อุดรธานี",
      "district": "หนองแสง",
      "lat": 17.108731,
      "lon": 102.771099,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.043260588859773,
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.194461805100175,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.49289673374737,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.262733753883648,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.76035745632954,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.95749858969102,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อาคารเลขที่ ๙๐๑",
      "station_code": "HII001",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.85604,
      "lon": 100.57558,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.105235156555995,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองห้วยยาง",
      "station_code": "KIZ003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.136408,
      "lon": 101.857475,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.603460352265568,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 22:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.43748229741365,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "TC.60",
      "station_code": "ridtele_TC.60",
      "province": "นครสวรรค์",
      "district": "ท่าตะโก",
      "lat": 15.67,
      "lon": 100.334167,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.67303898721316,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "T.ปตร.ผักไห่",
      "station_code": "ridtele_T.PhakhaiRegulator",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.43626,
      "lon": 100.375495,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.435510867872697,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดจอมเกษ",
      "station_code": "ridtele_TS.25",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.414349,
      "lon": 100.55782,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.283656836824175,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีแม่น้ำปิงที่ฝายหนองสลีก",
      "station_code": "ridtele_TUP.10",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.525197,
      "lon": 98.902161,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.60868138155647,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนแม่กวงอุดมธารา",
      "station_code": "ridtele_TUP.12",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.929542,
      "lon": 99.127708,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.64000523472821,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีโครงการชลประทานแม่ปิงเก่า",
      "station_code": "ridtele_TUP.18",
      "province": "เชียงใหม่",
      "district": "สารภี",
      "lat": 18.690973,
      "lon": 98.987948,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.170325905245045,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีคลองส่งน้ำแม่แตง",
      "station_code": "ridtele_TUP.19",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.804512,
      "lon": 98.959762,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.94734582105726,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TW.28",
      "station_code": "ridtele_TW.28",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.559259,
      "lon": 99.466838,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.62214506278063,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TW.29",
      "station_code": "ridtele_TW.29",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.368642,
      "lon": 99.326625,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.708831039853074,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "TW.30",
      "station_code": "ridtele_TW.30",
      "province": "ลำปาง",
      "district": "เกาะคา",
      "lat": 18.241214,
      "lon": 99.316761,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.39494078518871,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อำเภอโพธิ์ประทับช้าง จ.พิจิตร",
      "station_code": "ridtele_TY.42",
      "province": "พิจิตร",
      "district": "โพธิ์ประทับช้าง",
      "lat": 16.310319,
      "lon": 100.271461,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.23801708576194,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดท่าไม้",
      "station_code": "ridtele_TY.58",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.915063,
      "lon": 100.247163,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.1772366654261,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.บ้านวังสะตือ",
      "station_code": "ridtele_TY.57",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.87341,
      "lon": 100.02551,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.6529638557236,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานเขาโค้ง",
      "station_code": "ridtele_TY.56",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.925978,
      "lon": 99.890301,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.7324180155879,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำยม ปากคลองเข้า ปตร.บางพระ",
      "station_code": "ridtele_TY.55",
      "province": "สุโขทัย",
      "district": "เมืองสุโขทัย",
      "lat": 16.9145,
      "lon": 99.8438,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.77735864308142,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนทดน้ำบางปะกง",
      "station_code": "ridtele_TKgt58",
      "province": "ฉะเชิงเทรา",
      "district": "เมืองฉะเชิงเทรา",
      "lat": 13.706797,
      "lon": 101.136945,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.09939112273897,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองแม่น้ำใน(โพธิ์แทน)",
      "station_code": "ridtele_TNy10",
      "province": "นครนายก",
      "district": "องครักษ์",
      "lat": 14.212921,
      "lon": 100.942453,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.73828437653031,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนนายก",
      "station_code": "ridtele_TNy11",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.18205,
      "lon": 101.162164,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.95410833234516,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดสง่างาม",
      "station_code": "ridtele_TKgt52",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.031635,
      "lon": 101.42646,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.137859157261943,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเนินหินกอง",
      "station_code": "ridtele_TKgt48",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.782015,
      "lon": 101.900566,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.084732908100303,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแหลม",
      "station_code": "ridtele_TPB15",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.212777,
      "lon": 99.982754,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.438133353034026,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดมณีวรรณ",
      "station_code": "ridtele_TTC05",
      "province": "สุพรรณบุรี",
      "district": "บางปลาม้า",
      "lat": 14.3969,
      "lon": 100.153,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.76802923053133,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดบางปลา",
      "station_code": "ridtele_TTC07",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 13.983198,
      "lon": 100.179057,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.10232557437147,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดศรัทธาธรรม",
      "station_code": "ridtele_TMK01",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3773,
      "lon": 99.993,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.82839589804128,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามลำภาชี",
      "station_code": "ridtele_TK.68",
      "province": "ราชบุรี",
      "district": "จอมบึง",
      "lat": 13.7521,
      "lon": 99.4374,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.3689507943451,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดบางคนฑีใน",
      "station_code": "ridtele_TK.72",
      "province": "สมุทรสงคราม",
      "district": "บางคนที",
      "lat": 13.4913,
      "lon": 99.9445,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.178957036570175,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านลาดใหญ่สามัคคี",
      "station_code": "ridtele_TK.74",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.482,
      "lon": 100.044,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.023939117114256,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานห้วยลม",
      "station_code": "ridtele_TKH.119",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.323277,
      "lon": 102.543788,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.144952484662454,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์การเรียนรู้ อบต.เตาไห",
      "station_code": "ridtele_TKH.121",
      "province": "อุดรธานี",
      "district": "เพ็ญ",
      "lat": 17.638449,
      "lon": 103.098806,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.42692268951202,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานห้วยน้ำขุ่น",
      "station_code": "ridtele_TKH.124",
      "province": "อุดรธานี",
      "district": "เพ็ญ",
      "lat": 17.550091,
      "lon": 102.958432,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.07690450503529,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยหลวง",
      "station_code": "ridtele_TKH.130",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.375118,
      "lon": 102.599133,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.312998761667174,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีฝายกุมภวาปี",
      "station_code": "ridtele_LP-02",
      "province": "อุดรธานี",
      "district": "กุมภวาปี",
      "lat": 17.0762,
      "lon": 103.0233,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.628593181156308,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี ชป.คลองวาด",
      "station_code": "ridtele_STN01",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.990953,
      "lon": 100.38278,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.183177745060809,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.181",
      "station_code": "ridtele_STN02",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.060311,
      "lon": 100.454271,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.923906869186597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีคลองต่ำ",
      "station_code": "ridtele_STN05",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.975436,
      "lon": 100.36767,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.7516262325205503,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีคลองรำใหญ่",
      "station_code": "ridtele_STN10",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.761329,
      "lon": 100.399158,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.457064560132796,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานีบ่อยาง",
      "station_code": "ridtele_TSL09",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.200311,
      "lon": 100.587907,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.007849785401035,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.อู่ตะเภา",
      "station_code": "ridtele_TSL24",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.987824,
      "lon": 100.462205,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.527643673342766,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ท่าช้าง-บางกล่ำ",
      "station_code": "ridtele_TSL28",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.127928,
      "lon": 100.433274,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.581715399865779,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองเหมืองตะกั่ว",
      "station_code": "ridtele_TSL35",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.26871,
      "lon": 100.094388,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.18610578740122,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองหวะตอนบน",
      "station_code": "ridtele_TSL39",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.969362,
      "lon": 100.558293,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.329694424387654,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองหวะตอนล่าง",
      "station_code": "ridtele_TSL40",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.987312,
      "lon": 100.474043,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.82134403938696,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ฝายท่าเชียด",
      "station_code": "ridtele_TX21A",
      "province": "พัทลุง",
      "district": "บางแก้ว",
      "lat": 7.361018,
      "lon": 100.1085,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.03374283041742,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านพรุพร้อ",
      "station_code": "ridtele_TX69",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.19253,
      "lon": 100.221,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.581632172415926,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านฟากห้วย",
      "station_code": "ridtele_TTL.04",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.684085,
      "lon": 102.501103,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.282739229159408,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยยาง",
      "station_code": "ridtele_TTL.01",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.013375,
      "lon": 102.644844,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.629371981357586,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานอนุสรณ์ 100 ปีสิงห์บุรี (สะพานหลวงพ่อแพ 89)",
      "station_code": "HDA006",
      "province": "สิงห์บุรี",
      "district": "เมืองสิงห์บุรี",
      "lat": 14.870205,
      "lon": 100.408585,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.8907144661931,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.758642782654789,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": " สะพานข้ามคลองโคน",
      "station_code": "PTTEP1",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3319,
      "lon": 99.96896,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.11919849605185,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยต้นน้ำชายฝั่งทะเลตะวันออก",
      "station_code": "MOU375",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.697516,
      "lon": 101.404884,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.455301106484008,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ นสล. 1 (ซับปลากั้ง)",
      "station_code": "MOU411",
      "province": "สระบุรี",
      "district": "วิหารแดง",
      "lat": 14.412701,
      "lon": 100.97773,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.505517398800027,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองยาง",
      "station_code": "MOU465",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.324904,
      "lon": 101.84176,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.6302054783819,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.585106331078295,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำปิงที่ อ.จอมทอง",
      "station_code": "BBU01",
      "province": "เชียงใหม่",
      "district": "ดอยหล่อ",
      "lat": 18.435266,
      "lon": 98.740107,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.409006009977226,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "กฟผ."
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.68105996458992,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนหนองสาหร่าย (สะพานขาว)",
      "station_code": "STN2201",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.717627,
      "lon": 101.430923,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.64241403638004,
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.146651614165659,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าเชียด",
      "station_code": "STN2210",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.263168,
      "lon": 100.08232,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.72229243790302,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.885850429897452,
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.604002556626014,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ลาย – แม่ออน",
      "station_code": "MOU274",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.867105,
      "lon": 99.31434,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.47203362888489,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.16459754740818,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ จซ.7 (ดอยล้าน)",
      "station_code": "MOU354",
      "province": "เชียงใหม่",
      "district": "แม่ออน",
      "lat": 18.85619,
      "lon": 99.367165,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.78256897832434,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.6626087034943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เลียง ",
      "station_code": "MOU308",
      "province": "ลำปาง",
      "district": "เสริมงาม",
      "lat": 18.169743,
      "lon": 99.18275,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.129143527401745,
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.84323641894764,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.865798450815927,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยโป่ง",
      "station_code": "RES015",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.34001,
      "lon": 98.93681,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.224238503714474,
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.49442256097453,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำทุ่งม่าน",
      "station_code": "RES018",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.25546,
      "lon": 98.84405,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.979005262634885,
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.71187816567904,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.0190674410159057,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนซอย12 สาย 4 ซ้าย",
      "station_code": "G09006-TA121101",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.882131,
      "lon": 100.905748,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.673760835829963,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามแม่น้ำเพชรบุรีที่ อบต.บางครก",
      "station_code": "G09006-TA180308",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.183788,
      "lon": 99.949989,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.07969627879459,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.8143768504040896,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.02450990357153,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.04200996299588,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลากลางสมุทรปราการ",
      "station_code": "G09006-TA100221",
      "province": "สมุทรปราการ",
      "district": "เมืองสมุทรปราการ",
      "lat": 13.59801,
      "lon": 100.59622,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.914153079374797,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.47138534234249,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.56736377859444,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "แม่น้ำท่าจีนที่สะพานหลวงพ่อเปิ่น",
      "station_code": "G09006-TA130205",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.898843,
      "lon": 100.21246,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.51811631842439,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.72274791433398,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองประแสร์ที่คลองสะพานดำ",
      "station_code": "G09006-TA170406",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.78338,
      "lon": 101.65397,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.36258324067517,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองใหญ่ที่ระยอง",
      "station_code": "G09006-TA170203",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.68,
      "lon": 101.29278,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.390519237485664,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลากลางอ่างทอง",
      "station_code": "G09006-TA100217",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.59002,
      "lon": 100.45375,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.943009467906187,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.240453355318603,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.192582855631537,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.33443367389998,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.6138502228682,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.608667133478676,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.59712003999628,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.437027211687226,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.6615978917213,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก่งใหญ่",
      "station_code": "G09006-TC150409",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.079854,
      "lon": 102.04428,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.53886851790903,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านปลวกแดง",
      "station_code": "G09006-TA170201",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.96931,
      "lon": 101.21218,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.644455037549361,
      "nearest_estate": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.4068586969810815,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยศึกษาการพัฒนาการอนุรักษ์ต้นน้ำคลองอู่ตะเภา",
      "station_code": "MOU421",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.7799,
      "lon": 100.274,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.10163327261954,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองแสนแสบ บางกะปิ",
      "station_code": "BKK008",
      "province": "กรุงเทพมหานคร",
      "district": "บางกะปิ",
      "lat": 13.76131,
      "lon": 100.61601,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.689352461252378,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองลำปลาทิว ลาดกระบัง",
      "station_code": "BKK009",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.7407,
      "lon": 100.79468,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.0362140416044405,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.631190161803122,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
      "station_code": "BKK020",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดพร้าว",
      "lat": 13.93183,
      "lon": 100.63952,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.87492828233833,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ป้อมพระจุลจอมเกล้า",
      "station_code": "GLF001",
      "province": "สมุทรปราการ",
      "district": "พระสมุทรเจดีย์",
      "lat": 13.57378,
      "lon": 100.57396,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.540324535327358,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองอ้อมนนท์ บางใหญ่ (ถนนบางกรวย-ไทรน้อย)",
      "station_code": "BKK007",
      "province": "นนทบุรี",
      "district": "บางใหญ่",
      "lat": 13.87089,
      "lon": 100.43626,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.93130739016791,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ราษฎร์นิยม",
      "station_code": "BKNH",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 14.10388,
      "lon": 100.32209,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.076556482399493,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.300920472922257,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.095038483394372,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.710907497810883,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.195758700698022,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "observed_at": "2026-10-16 17:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.43932753559925,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้อยสว่าง",
      "station_code": "LK13",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.1652,
      "lon": 100.77855,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.28296324638516,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.479318846322684,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองหกวา ลำลูกกา คลอง8",
      "station_code": "BKK015",
      "province": "ปทุมธานี",
      "district": "ลำลูกกา",
      "lat": 13.9416,
      "lon": 100.77499,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.087742962577927,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พระนครศรีอยุธยา",
      "station_code": "CPY011",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.36913,
      "lon": 100.52861,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.195312328999318,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.586439945291232,
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.392967489256403,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.819479632166193,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เสนา",
      "station_code": "CPY017",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.31976,
      "lon": 100.37952,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.846600860267063,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.93348365136987,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังม่วง",
      "station_code": "WGYG",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.84867,
      "lon": 101.14549,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.961853274234922,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.พลูตาหลวง",
      "station_code": "PLTL",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.69861,
      "lon": 100.9762,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.209969273856109,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนประแส",
      "station_code": "VLGE26",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.716423,
      "lon": 101.704124,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.947742929730865,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.250183047104377,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.337182080568624,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางขวัญ",
      "station_code": "BKWN",
      "province": "ฉะเชิงเทรา",
      "district": "เมืองฉะเชิงเทรา",
      "lat": 13.74984,
      "lon": 101.07751,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.535304371354172,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
      "station_code": "BKK016",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.83819,
      "lon": 100.9666,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.69905378335247,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.46042027634919,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ดอนฉิมพลี",
      "station_code": "DKLG",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.90535,
      "lon": 100.97028,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.480895715006135,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บุพราหมณ์",
      "station_code": "TLAN",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.20791,
      "lon": 101.90556,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.657768692287558,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.22230027714344,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.46333033604034,
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.925507314908446,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ขนงพระ",
      "station_code": "TLPC",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.60689,
      "lon": 101.45632,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.26659989385583,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังน้ำเขียว",
      "station_code": "WNKH",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.37476,
      "lon": 101.86537,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.02662947022679,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.37359449364129,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.005244861689754,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.6003120453232,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ทต.หนองบัว",
      "station_code": "NGBA",
      "province": "นครสวรรค์",
      "district": "หนองบัว",
      "lat": 15.87077,
      "lon": 100.59734,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.160641045515042,
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.6697105917741,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.เขาทอง",
      "station_code": "BKDN",
      "province": "นครสวรรค์",
      "district": "พยุหะคีรี",
      "lat": 15.5707,
      "lon": 100.18319,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.77788461109181,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.65802972934656,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.04478714963737,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.872698547385934,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.19110745038412,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.73752831943657,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.15118819719544,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.34579668119612,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.30160634817812,
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.82680048251451,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.50034924008027,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.19079991757201,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางตะบูนและบางตะบูนออก",
      "station_code": "GLF003",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.26553,
      "lon": 99.9418,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.45314445360332,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "นาทวี",
      "station_code": "JNA002",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.738124,
      "lon": 100.69319,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.8139582811628,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79532822696729,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.202805151690335,
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.55428562754781,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเจ็ดลูกเนิน",
      "station_code": "STN0277",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.777539,
      "lon": 101.3988,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.338041526084151,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.900892575962452,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.467051064439985,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 17:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.00326202136592,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.90200011806768,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.631223481902786,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.62875175543822,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.234807897344204,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ขนิลเหนือ",
      "station_code": "STN0115",
      "province": "เชียงใหม่",
      "district": "หางดง",
      "lat": 18.800055,
      "lon": 98.792621,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.89283428146734,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.18333738835385,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านขุนป๋วย",
      "station_code": "STN0520",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.603013,
      "lon": 98.607522,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.2891962640767,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยโท้ง",
      "station_code": "STN0075",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.697396,
      "lon": 98.815361,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.671061081165224,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.22136732051762,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.043784776286916,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่เหล็ก",
      "station_code": "STN0145",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.321308,
      "lon": 98.979967,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.841831729588574,
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
      "observed_at": "2026-10-16 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.234463351624534,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.30608381966317,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.401074024916895,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.48851735893484,
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.69943626602246,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.664184881715943,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.956700247083184,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านป่าเห่ว",
      "station_code": "STN0647",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.685728,
      "lon": 99.471365,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.134987561246035,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.00521210240413,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.10524516319903,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.46182522235307,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.16943500258247,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวัด",
      "station_code": "STN0292",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.487867,
      "lon": 100.672471,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.22203897485744,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.31500625009662,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าโต้",
      "station_code": "STN1024",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.756746,
      "lon": 100.533575,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.323322558783495,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองต่อ",
      "station_code": "STN0063",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.018751,
      "lon": 100.260772,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.991726336523053,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.9364122713410525,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังประจัน",
      "station_code": "STN0293",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.754096,
      "lon": 100.149164,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.598535167828565,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนาส้อง",
      "station_code": "STN0705",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.277879,
      "lon": 100.053089,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.210666100402584,
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.553411121017405,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ลำพะเนียง อ.เมือง",
      "station_code": "URTU03",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.182448,
      "lon": 102.431941,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.77565416025865,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "กฟผ."
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.260739188317785,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ปราจีนบุรี",
      "station_code": "48430",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.05842,
      "lon": 101.3693,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.97261818444056,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "กบินทร์บุรี",
      "station_code": "48439",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.98333,
      "lon": 101.70722,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.389305560510971,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สระแก้ว",
      "station_code": "48440",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.78889,
      "lon": 102.03472,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.74777170386582,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ บางนา สกษ.",
      "station_code": "48453",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.66639,
      "lon": 100.60611,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.193998319993636,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ ท่าเรือคลองเตย",
      "station_code": "48454",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70694,
      "lon": 100.56805,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.264975308798602,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.574010437654685,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สนามบินดอนเมือง",
      "station_code": "48456",
      "province": "กรุงเทพมหานคร",
      "district": "ดอนเมือง",
      "lat": 13.91917,
      "lon": 100.605,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.74280568227024,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "observed_at": "2026-10-16 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.7486112751969,
      "nearest_estate": "นิคมอุตสาหกรรมบางปู",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เกาะสีชัง",
      "station_code": "48460",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16167,
      "lon": 100.80194,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.980585146406192,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.711485933246703,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "แหลมฉบัง",
      "station_code": "48463",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.07803,
      "lon": 100.87389,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 19:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.8252486111632202,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ระยอง",
      "station_code": "48478",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.63369,
      "lon": 101.34075,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.26694804483545,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ห้วยโป่ง สกษ.",
      "station_code": "48479",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.735,
      "lon": 101.135,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.4276244076373317,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "อต."
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.649037474678174,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.97260499143264,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.44469256455542,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.39908310017906,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "อต."
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.38686527973776,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.71905854693515,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.665867272460714,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.73106564587656,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.444263793568823,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.48927154769707,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.พระอินทราชา",
      "station_code": "ATG091",
      "province": "พระนครศรีอยุธยา",
      "district": "วังน้อย",
      "lat": 14.14407,
      "lon": 100.62136,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.862570238737058,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.311022604383211,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.67264192258456,
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
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
      "observed_at": "2026-10-16 22:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.18300787538574,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.381114432933025,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ลานกางเต็นท์ดอยปุย อุทยานแห่งชาติดอยสุเทพ-ปุย",
      "station_code": "DNP079",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.82574,
      "lon": 98.89448,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.065979758135356,
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
      "observed_at": "2026-10-17 00:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
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
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.45760158424925,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่ามะปรางค์",
      "station_code": "M.43A",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51204,
      "lon": 101.380348,
      "waterlevel_msl": 372.84,
      "storage_percent": 29.97,
      "bankfull_msl": null,
      "value_text": "372.84 ม.รทก.",
      "observed_at": "2026-10-16 20:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.97170823213221,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป่าซาง",
      "station_code": "P.87",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.519119,
      "lon": 98.942291,
      "waterlevel_msl": 289.08,
      "storage_percent": 29.86,
      "bankfull_msl": null,
      "value_text": "289.08 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.49732805181853,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 12.94,
      "storage_percent": 29.15,
      "bankfull_msl": null,
      "value_text": "12.94 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.703677802963367,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานข้ามคลองบ้านท่าวัง",
      "station_code": "PLG001",
      "province": "พัทลุง",
      "district": "บางแก้ว",
      "lat": 7.37654,
      "lon": 100.10043,
      "waterlevel_msl": 16.22,
      "storage_percent": 29.13,
      "bankfull_msl": null,
      "value_text": "16.22 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.95749858969102,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทุ่งปราบ",
      "station_code": "X.113",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63504,
      "lon": 100.39341,
      "waterlevel_msl": 32.83,
      "storage_percent": 29.11,
      "bankfull_msl": null,
      "value_text": "32.83 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.599631491585654,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ป้อมพระจุลจอมเกล้า",
      "station_code": "GLF001",
      "province": "สมุทรปราการ",
      "district": "พระสมุทรเจดีย์",
      "lat": 13.57378,
      "lon": 100.57396,
      "waterlevel_msl": -0.58,
      "storage_percent": 28.99,
      "bankfull_msl": null,
      "value_text": "-0.58 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.540324535327358,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "waterlevel_msl": 36.22,
      "storage_percent": 28.68,
      "bankfull_msl": null,
      "value_text": "36.22 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.75107369201308,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "observed_at": "2026-10-16 06:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.79068518938278,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 22.13,
      "storage_percent": 27.87,
      "bankfull_msl": null,
      "value_text": "22.13 ม.รทก.",
      "observed_at": "2026-10-16 06:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.906976440754036,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "แม่น้ำปิงที่ อ.จอมทอง",
      "station_code": "BBU01",
      "province": "เชียงใหม่",
      "district": "ดอยหล่อ",
      "lat": 18.435266,
      "lon": 98.740107,
      "waterlevel_msl": 272.84,
      "storage_percent": 26.16,
      "bankfull_msl": null,
      "value_text": "272.84 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.409006009977226,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "บางกระทุ่ม",
      "station_code": "NAN006",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.58046,
      "lon": 100.23858,
      "waterlevel_msl": 31.85,
      "storage_percent": 25.32,
      "bankfull_msl": null,
      "value_text": "31.85 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.569436005387221,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 291.49,
      "storage_percent": 24.06,
      "bankfull_msl": null,
      "value_text": "291.49 ม.รทก.",
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.24338873778254,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองนางรอง",
      "station_code": "MOU461",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.315195,
      "lon": 101.312836,
      "waterlevel_msl": 23.61,
      "storage_percent": 23.81,
      "bankfull_msl": null,
      "value_text": "23.61 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.79263454648103,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "วัดท่าระหัด",
      "station_code": "S.7A",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.78944,
      "lon": 101.117104,
      "waterlevel_msl": 43.53,
      "storage_percent": 23.77,
      "bankfull_msl": null,
      "value_text": "43.53 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.753226281537014,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 26.84,
      "storage_percent": 23.05,
      "bankfull_msl": null,
      "value_text": "26.84 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95471174698642,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองพรหมโหด",
      "station_code": "SKE003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.705864,
      "lon": 102.48168,
      "waterlevel_msl": 41.51,
      "storage_percent": 22.55,
      "bankfull_msl": null,
      "value_text": "41.51 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.131766068445735,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
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
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.389433523569583,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแม่หวาน",
      "station_code": "P.79",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.9643,
      "lon": 99.237518,
      "waterlevel_msl": 442.66,
      "storage_percent": 18.86,
      "bankfull_msl": null,
      "value_text": "442.66 ม.รทก.",
      "observed_at": "2026-10-16 07:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.46351091466168,
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
      "waterlevel_msl": 314.49,
      "storage_percent": 16.94,
      "bankfull_msl": null,
      "value_text": "314.49 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.06728169191569,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-16 21:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.47590252766334,
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
      "waterlevel_msl": 79.41,
      "storage_percent": 15.05,
      "bankfull_msl": null,
      "value_text": "79.41 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.930789681787886,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหูแร่",
      "station_code": "X.240",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98306,
      "lon": 100.328331,
      "waterlevel_msl": 17.75,
      "storage_percent": 14.14,
      "bankfull_msl": null,
      "value_text": "17.75 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
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
      "waterlevel_msl": 266.14,
      "storage_percent": 12.31,
      "bankfull_msl": null,
      "value_text": "266.14 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.30543843174566,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโป่งดิน",
      "station_code": "P.80",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.916401,
      "lon": 99.235817,
      "waterlevel_msl": 455.49,
      "storage_percent": 12.0,
      "bankfull_msl": null,
      "value_text": "455.49 ม.รทก.",
      "observed_at": "2026-10-16 07:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.72868375605304,
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
      "waterlevel_msl": 167.28,
      "storage_percent": 11.97,
      "bankfull_msl": null,
      "value_text": "167.28 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.736028811714558,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "จะนะ",
      "station_code": "JNA001",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.916742,
      "lon": 100.72962,
      "waterlevel_msl": 2.9,
      "storage_percent": 10.26,
      "bankfull_msl": null,
      "value_text": "2.9 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.06762398773943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานน้ำแม่ขาน",
      "station_code": "MOU293",
      "province": "เชียงใหม่",
      "district": "สะเมิง",
      "lat": 18.7955,
      "lon": 98.7307,
      "waterlevel_msl": 440.02,
      "storage_percent": 7.66,
      "bankfull_msl": null,
      "value_text": "440.02 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79867579046488,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองดาน",
      "station_code": "UDN001",
      "province": "อุดรธานี",
      "district": "บ้านผือ",
      "lat": 17.38925,
      "lon": 103.08734,
      "waterlevel_msl": 163.0,
      "storage_percent": 0.67,
      "bankfull_msl": null,
      "value_text": "163 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.660308412072265,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "waterlevel_msl": 163.82,
      "storage_percent": 0.64,
      "bankfull_msl": null,
      "value_text": "163.82 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.45760158424925,
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
      "waterlevel_msl": 735.23,
      "storage_percent": 0.62,
      "bankfull_msl": null,
      "value_text": "735.23 ม.รทก.",
      "observed_at": "2026-10-17 00:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.55447608245622,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป่าขะ",
      "station_code": "Ny.3",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.28644,
      "lon": 101.070473,
      "waterlevel_msl": 9.29,
      "storage_percent": null,
      "bankfull_msl": null,
      "value_text": "9.29 ม.รทก.",
      "observed_at": "2026-10-16 23:00",
      "status": "ไม่มีข้อมูล",
      "severity_score": 0,
      "distance_km": 21.137617579600168,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    }
  ],
  "summary": {
    "estate_total": 70,
    "estate_count": 61,
    "station_count": 967,
    "alert_station_count": 115,
    "heavy_rain_estate_count": 0,
    "rain_alert_estate_count": 21,
    "water_alert_estate_count": 55,
    "critical_count": 61,
    "rain_station_count": 770,
    "waterlevel_station_count": 197,
    "waterlevel_alert_count": 109,
    "max_rainfall_mm": 64.0,
    "risk_level": "ล้นตลิ่ง",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.กระบี่",
      "จ.ตราด",
      "จ.ระนอง"
    ],
    "flood_watch_province_count": 3,
    "flash_flood_24h_area_count": 3,
    "flash_flood_48h_area_count": 2,
    "warning_title": "กรมอุตุนิยมวิทยา | ประกาศเตือนภัยลักษณะอากาศ",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "coverage": {
    "stations_complete": true,
    "station_count": 967,
    "estate_location_source": "ArcGIS geometry in EPSG:4326"
  },
  "flash_flood": {
    "24h": {
      "period": "24h",
      "status": "ok",
      "date": "2026-10-17",
      "time": "00:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
        {
          "geocode": "230403",
          "tambon": "ต.ด่านชุมพล",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ คก. ๓ (เขาพลู)",
          "latitude": 12.4193,
          "longitude": 102.744,
          "sum_rainfall_mm": 119.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.64691,
                  12.53431
                ],
                [
                  102.64954,
                  12.53249
                ],
                [
                  102.65431,
                  12.53273
                ],
                [
                  102.65549,
                  12.52652
                ],
                [
                  102.65809,
                  12.5238
                ],
                [
                  102.65961,
                  12.52431
                ],
                [
                  102.66241,
                  12.52304
                ],
                [
                  102.66668,
                  12.5254
                ],
                [
                  102.68102,
                  12.5247
                ],
                [
                  102.69434,
                  12.51949
                ],
                [
                  102.70357,
                  12.51961
                ],
                [
                  102.70524,
                  12.51777
                ],
                [
                  102.70501,
                  12.51373
                ],
                [
                  102.70657,
                  12.51129
                ],
                [
                  102.70938,
                  12.51051
                ],
                [
                  102.7134,
                  12.50693
                ],
                [
                  102.71716,
                  12.50727
                ],
                [
                  102.72336,
                  12.51231
                ],
                [
                  102.72787,
                  12.51209
                ],
                [
                  102.72851,
                  12.50897
                ],
                [
                  102.72354,
                  12.50211
                ],
                [
                  102.72526,
                  12.49598
                ],
                [
                  102.72067,
                  12.49131
                ],
                [
                  102.72077,
                  12.486
                ],
                [
                  102.72286,
                  12.4854
                ],
                [
                  102.72977,
                  12.49066
                ],
                [
                  102.73365,
                  12.48927
                ],
                [
                  102.73503,
                  12.48593
                ],
                [
                  102.73771,
                  12.48482
                ],
                [
                  102.7399,
                  12.48186
                ],
                [
                  102.73751,
                  12.47601
                ],
                [
                  102.73631,
                  12.46598
                ],
                [
                  102.74162,
                  12.46618
                ],
                [
                  102.74348,
                  12.46383
                ],
                [
                  102.74318,
                  12.45977
                ],
                [
                  102.74504,
                  12.45781
                ],
                [
                  102.74671,
                  12.45733
                ],
                [
                  102.74939,
                  12.46178
                ],
                [
                  102.75082,
                  12.46226
                ],
                [
                  102.75251,
                  12.46061
                ],
                [
                  102.75395,
                  12.45554
                ],
                [
                  102.75699,
                  12.45708
                ],
                [
                  102.76592,
                  12.45605
                ],
                [
                  102.76937,
                  12.44822
                ],
                [
                  102.76912,
                  12.44175
                ],
                [
                  102.77092,
                  12.44027
                ],
                [
                  102.77279,
                  12.43568
                ],
                [
                  102.77519,
                  12.43421
                ],
                [
                  102.7783,
                  12.43585
                ],
                [
                  102.7788,
                  12.43175
                ],
                [
                  102.77691,
                  12.4255
                ],
                [
                  102.77413,
                  12.4242
                ],
                [
                  102.76974,
                  12.42413
                ],
                [
                  102.76702,
                  12.42434
                ],
                [
                  102.76435,
                  12.42602
                ],
                [
                  102.75599,
                  12.42617
                ],
                [
                  102.75355,
                  12.4225
                ],
                [
                  102.75044,
                  12.42342
                ],
                [
                  102.74867,
                  12.41997
                ],
                [
                  102.7451,
                  12.41894
                ],
                [
                  102.74285,
                  12.41524
                ],
                [
                  102.73903,
                  12.41308
                ],
                [
                  102.73543,
                  12.41316
                ],
                [
                  102.7327,
                  12.41038
                ],
                [
                  102.7264,
                  12.41143
                ],
                [
                  102.72219,
                  12.40797
                ],
                [
                  102.72103,
                  12.40523
                ],
                [
                  102.71855,
                  12.40602
                ],
                [
                  102.71523,
                  12.40433
                ],
                [
                  102.71325,
                  12.40453
                ],
                [
                  102.71309,
                  12.40249
                ],
                [
                  102.7107,
                  12.40047
                ],
                [
                  102.70911,
                  12.39575
                ],
                [
                  102.70656,
                  12.39755
                ],
                [
                  102.70541,
                  12.39539
                ],
                [
                  102.70283,
                  12.39675
                ],
                [
                  102.70142,
                  12.39633
                ],
                [
                  102.69942,
                  12.39969
                ],
                [
                  102.69701,
                  12.40073
                ],
                [
                  102.69627,
                  12.40316
                ],
                [
                  102.69336,
                  12.40404
                ],
                [
                  102.69292,
                  12.40554
                ],
                [
                  102.69008,
                  12.40532
                ],
                [
                  102.68852,
                  12.40643
                ],
                [
                  102.68165,
                  12.40523
                ],
                [
                  102.67925,
                  12.40595
                ],
                [
                  102.67794,
                  12.40354
                ],
                [
                  102.67451,
                  12.40358
                ],
                [
                  102.67088,
                  12.40058
                ],
                [
                  102.66855,
                  12.39546
                ],
                [
                  102.66343,
                  12.39504
                ],
                [
                  102.66019,
                  12.39606
                ],
                [
                  102.65729,
                  12.39427
                ],
                [
                  102.65564,
                  12.39499
                ],
                [
                  102.65555,
                  12.39707
                ],
                [
                  102.64613,
                  12.39607
                ],
                [
                  102.64284,
                  12.39677
                ],
                [
                  102.64212,
                  12.39865
                ],
                [
                  102.6405,
                  12.39941
                ],
                [
                  102.63888,
                  12.39771
                ],
                [
                  102.64051,
                  12.39607
                ],
                [
                  102.64042,
                  12.39461
                ],
                [
                  102.63607,
                  12.39568
                ],
                [
                  102.6325,
                  12.3917
                ],
                [
                  102.62395,
                  12.39521
                ],
                [
                  102.62158,
                  12.39797
                ],
                [
                  102.61455,
                  12.40192
                ],
                [
                  102.61071,
                  12.4058
                ],
                [
                  102.61018,
                  12.41061
                ],
                [
                  102.60714,
                  12.41466
                ],
                [
                  102.60734,
                  12.41666
                ],
                [
                  102.609,
                  12.41712
                ],
                [
                  102.60898,
                  12.41954
                ],
                [
                  102.61002,
                  12.41997
                ],
                [
                  102.60902,
                  12.42379
                ],
                [
                  102.61067,
                  12.42711
                ],
                [
                  102.60727,
                  12.43578
                ],
                [
                  102.60241,
                  12.44283
                ],
                [
                  102.58611,
                  12.44299
                ],
                [
                  102.58406,
                  12.44498
                ],
                [
                  102.58153,
                  12.44552
                ],
                [
                  102.58004,
                  12.44776
                ],
                [
                  102.5809,
                  12.44985
                ],
                [
                  102.57671,
                  12.45183
                ],
                [
                  102.57566,
                  12.45968
                ],
                [
                  102.5742,
                  12.46252
                ],
                [
                  102.57422,
                  12.46801
                ],
                [
                  102.57166,
                  12.4698
                ],
                [
                  102.56534,
                  12.46626
                ],
                [
                  102.56327,
                  12.46788
                ],
                [
                  102.56081,
                  12.46801
                ],
                [
                  102.56038,
                  12.46375
                ],
                [
                  102.55837,
                  12.46522
                ],
                [
                  102.55455,
                  12.46512
                ],
                [
                  102.55174,
                  12.46656
                ],
                [
                  102.55359,
                  12.46857
                ],
                [
                  102.55324,
                  12.47324
                ],
                [
                  102.56033,
                  12.47542
                ],
                [
                  102.56281,
                  12.47967
                ],
                [
                  102.56002,
                  12.48479
                ],
                [
                  102.55643,
                  12.48535
                ],
                [
                  102.55605,
                  12.49277
                ],
                [
                  102.55166,
                  12.50206
                ],
                [
                  102.55471,
                  12.50444
                ],
                [
                  102.55687,
                  12.50364
                ],
                [
                  102.56357,
                  12.50495
                ],
                [
                  102.56743,
                  12.50384
                ],
                [
                  102.57164,
                  12.49992
                ],
                [
                  102.57407,
                  12.49922
                ],
                [
                  102.57617,
                  12.5005
                ],
                [
                  102.57821,
                  12.50417
                ],
                [
                  102.58101,
                  12.50574
                ],
                [
                  102.58129,
                  12.50417
                ],
                [
                  102.58606,
                  12.49952
                ],
                [
                  102.59112,
                  12.49884
                ],
                [
                  102.59553,
                  12.50041
                ],
                [
                  102.6005,
                  12.49857
                ],
                [
                  102.60102,
                  12.50013
                ],
                [
                  102.60459,
                  12.50223
                ],
                [
                  102.607,
                  12.5099
                ],
                [
                  102.6113,
                  12.51487
                ],
                [
                  102.61286,
                  12.51511
                ],
                [
                  102.61579,
                  12.51267
                ],
                [
                  102.62366,
                  12.51884
                ],
                [
                  102.62763,
                  12.51851
                ],
                [
                  102.63257,
                  12.51542
                ],
                [
                  102.63069,
                  12.51934
                ],
                [
                  102.63411,
                  12.51966
                ],
                [
                  102.63467,
                  12.5228
                ],
                [
                  102.63718,
                  12.52287
                ],
                [
                  102.63858,
                  12.5242
                ],
                [
                  102.63877,
                  12.53175
                ],
                [
                  102.6375,
                  12.53392
                ],
                [
                  102.63867,
                  12.54156
                ],
                [
                  102.64487,
                  12.53887
                ],
                [
                  102.64575,
                  12.53514
                ],
                [
                  102.64691,
                  12.53431
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810203",
          "tambon": "ต.สินปุน",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "อ่างเก็บน้ำบางกำปรัด",
          "latitude": 8.221995,
          "longitude": 99.19775,
          "sum_rainfall_mm": 127.19999999999999,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.22556,
                  8.32192
                ],
                [
                  99.23783,
                  8.31434
                ],
                [
                  99.26244,
                  8.30232
                ],
                [
                  99.268,
                  8.30267
                ],
                [
                  99.27261,
                  8.30072
                ],
                [
                  99.27709,
                  8.3014
                ],
                [
                  99.28993,
                  8.30904
                ],
                [
                  99.29246,
                  8.31275
                ],
                [
                  99.29396,
                  8.31253
                ],
                [
                  99.29407,
                  8.31412
                ],
                [
                  99.29552,
                  8.31425
                ],
                [
                  99.29635,
                  8.31586
                ],
                [
                  99.29966,
                  8.31553
                ],
                [
                  99.29863,
                  8.31137
                ],
                [
                  99.30048,
                  8.3108
                ],
                [
                  99.29857,
                  8.30679
                ],
                [
                  99.30101,
                  8.30681
                ],
                [
                  99.30117,
                  8.30789
                ],
                [
                  99.30293,
                  8.30721
                ],
                [
                  99.30258,
                  8.30429
                ],
                [
                  99.30412,
                  8.30527
                ],
                [
                  99.30622,
                  8.30465
                ],
                [
                  99.30607,
                  8.30359
                ],
                [
                  99.30794,
                  8.30329
                ],
                [
                  99.30853,
                  8.30152
                ],
                [
                  99.3129,
                  8.30055
                ],
                [
                  99.31584,
                  8.29619
                ],
                [
                  99.31776,
                  8.29634
                ],
                [
                  99.3175,
                  8.29453
                ],
                [
                  99.31864,
                  8.29425
                ],
                [
                  99.31921,
                  8.29563
                ],
                [
                  99.32136,
                  8.2939
                ],
                [
                  99.32463,
                  8.29638
                ],
                [
                  99.32544,
                  8.2948
                ],
                [
                  99.32812,
                  8.29369
                ],
                [
                  99.32732,
                  8.29187
                ],
                [
                  99.32984,
                  8.29216
                ],
                [
                  99.33092,
                  8.29113
                ],
                [
                  99.33222,
                  8.28546
                ],
                [
                  99.33128,
                  8.28229
                ],
                [
                  99.33244,
                  8.28159
                ],
                [
                  99.33123,
                  8.28044
                ],
                [
                  99.33283,
                  8.27942
                ],
                [
                  99.33353,
                  8.2762
                ],
                [
                  99.33221,
                  8.27378
                ],
                [
                  99.33596,
                  8.26941
                ],
                [
                  99.33423,
                  8.26775
                ],
                [
                  99.33408,
                  8.26242
                ],
                [
                  99.33141,
                  8.261
                ],
                [
                  99.3333,
                  8.25763
                ],
                [
                  99.33007,
                  8.25544
                ],
                [
                  99.32819,
                  8.25603
                ],
                [
                  99.32627,
                  8.25367
                ],
                [
                  99.32399,
                  8.25282
                ],
                [
                  99.32385,
                  8.25156
                ],
                [
                  99.32268,
                  8.25162
                ],
                [
                  99.3215,
                  8.24829
                ],
                [
                  99.31962,
                  8.24737
                ],
                [
                  99.32076,
                  8.24572
                ],
                [
                  99.32045,
                  8.24363
                ],
                [
                  99.31476,
                  8.2417
                ],
                [
                  99.31525,
                  8.24066
                ],
                [
                  99.31363,
                  8.23929
                ],
                [
                  99.3152,
                  8.23872
                ],
                [
                  99.31458,
                  8.23632
                ],
                [
                  99.31295,
                  8.2365
                ],
                [
                  99.31246,
                  8.23511
                ],
                [
                  99.30059,
                  8.237
                ],
                [
                  99.29558,
                  8.2402
                ],
                [
                  99.28912,
                  8.24036
                ],
                [
                  99.2765,
                  8.24373
                ],
                [
                  99.27112,
                  8.2431
                ],
                [
                  99.25976,
                  8.24417
                ],
                [
                  99.25075,
                  8.24218
                ],
                [
                  99.23609,
                  8.24249
                ],
                [
                  99.22945,
                  8.23795
                ],
                [
                  99.21216,
                  8.23599
                ],
                [
                  99.20894,
                  8.23448
                ],
                [
                  99.2032,
                  8.2274
                ],
                [
                  99.20109,
                  8.22001
                ],
                [
                  99.18826,
                  8.22389
                ],
                [
                  99.18628,
                  8.22837
                ],
                [
                  99.19158,
                  8.23314
                ],
                [
                  99.19229,
                  8.23862
                ],
                [
                  99.18939,
                  8.2466
                ],
                [
                  99.18336,
                  8.25295
                ],
                [
                  99.18456,
                  8.2603
                ],
                [
                  99.18342,
                  8.28111
                ],
                [
                  99.18234,
                  8.28529
                ],
                [
                  99.17507,
                  8.29623
                ],
                [
                  99.17409,
                  8.31853
                ],
                [
                  99.18496,
                  8.31372
                ],
                [
                  99.19244,
                  8.31665
                ],
                [
                  99.20318,
                  8.31662
                ],
                [
                  99.2137,
                  8.31938
                ],
                [
                  99.2207,
                  8.32537
                ],
                [
                  99.22556,
                  8.32192
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850106",
          "tambon": "ต.บางนอน",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ กบ.2 (เขาเมืองสูง)",
          "latitude": 10.0237,
          "longitude": 98.66568,
          "sum_rainfall_mm": 122.6,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.68261,
                  10.05975
                ],
                [
                  98.68181,
                  10.05112
                ],
                [
                  98.68272,
                  10.04663
                ],
                [
                  98.68077,
                  10.04372
                ],
                [
                  98.68021,
                  10.03862
                ],
                [
                  98.68265,
                  10.03066
                ],
                [
                  98.68107,
                  10.02829
                ],
                [
                  98.68151,
                  10.02526
                ],
                [
                  98.67994,
                  10.01594
                ],
                [
                  98.68128,
                  10.01468
                ],
                [
                  98.68476,
                  10.01439
                ],
                [
                  98.68568,
                  10.00736
                ],
                [
                  98.69136,
                  10.00425
                ],
                [
                  98.69294,
                  10.00219
                ],
                [
                  98.69504,
                  9.99743
                ],
                [
                  98.69326,
                  9.99243
                ],
                [
                  98.69472,
                  9.98853
                ],
                [
                  98.68291,
                  9.98466
                ],
                [
                  98.67759,
                  9.98159
                ],
                [
                  98.67756,
                  9.97772
                ],
                [
                  98.67194,
                  9.96957
                ],
                [
                  98.66297,
                  9.96536
                ],
                [
                  98.66306,
                  9.96747
                ],
                [
                  98.66129,
                  9.96669
                ],
                [
                  98.65291,
                  9.95834
                ],
                [
                  98.64689,
                  9.96191
                ],
                [
                  98.64684,
                  9.96438
                ],
                [
                  98.64341,
                  9.96891
                ],
                [
                  98.63924,
                  9.97998
                ],
                [
                  98.63534,
                  9.98013
                ],
                [
                  98.62933,
                  9.97857
                ],
                [
                  98.62987,
                  9.97448
                ],
                [
                  98.63133,
                  9.97248
                ],
                [
                  98.6306,
                  9.9697
                ],
                [
                  98.63164,
                  9.96522
                ],
                [
                  98.62963,
                  9.96052
                ],
                [
                  98.61925,
                  9.96488
                ],
                [
                  98.61382,
                  9.96367
                ],
                [
                  98.61065,
                  9.95964
                ],
                [
                  98.60415,
                  9.95611
                ],
                [
                  98.60085,
                  9.95605
                ],
                [
                  98.59784,
                  9.95753
                ],
                [
                  98.59954,
                  9.96139
                ],
                [
                  98.6051,
                  9.96056
                ],
                [
                  98.60603,
                  9.96643
                ],
                [
                  98.60466,
                  9.97017
                ],
                [
                  98.60877,
                  9.97884
                ],
                [
                  98.61084,
                  9.98025
                ],
                [
                  98.61014,
                  9.98453
                ],
                [
                  98.61987,
                  9.99404
                ],
                [
                  98.62134,
                  9.99821
                ],
                [
                  98.6211,
                  10.00183
                ],
                [
                  98.62255,
                  10.00217
                ],
                [
                  98.62582,
                  10.008
                ],
                [
                  98.62998,
                  10.01126
                ],
                [
                  98.63032,
                  10.01585
                ],
                [
                  98.63544,
                  10.02462
                ],
                [
                  98.6421,
                  10.02841
                ],
                [
                  98.64488,
                  10.03184
                ],
                [
                  98.64688,
                  10.04448
                ],
                [
                  98.65324,
                  10.05906
                ],
                [
                  98.65728,
                  10.0648
                ],
                [
                  98.65794,
                  10.07117
                ],
                [
                  98.6648,
                  10.07566
                ],
                [
                  98.6667,
                  10.07437
                ],
                [
                  98.66949,
                  10.06799
                ],
                [
                  98.67028,
                  10.06098
                ],
                [
                  98.67218,
                  10.05731
                ],
                [
                  98.68261,
                  10.05975
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "230405",
          "tambon": "ต.นนทรีย์",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านมะม่วง",
          "latitude": 12.549057,
          "longitude": 102.57967,
          "sum_rainfall_mm": 8.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.64766,
                  12.60233
                ],
                [
                  102.64733,
                  12.59604
                ],
                [
                  102.64434,
                  12.59481
                ],
                [
                  102.6456,
                  12.59012
                ],
                [
                  102.64457,
                  12.58492
                ],
                [
                  102.6488,
                  12.5839
                ],
                [
                  102.65154,
                  12.58187
                ],
                [
                  102.65409,
                  12.58286
                ],
                [
                  102.65766,
                  12.58149
                ],
                [
                  102.66192,
                  12.58249
                ],
                [
                  102.66712,
                  12.57336
                ],
                [
                  102.66778,
                  12.56274
                ],
                [
                  102.67562,
                  12.55911
                ],
                [
                  102.68504,
                  12.54798
                ],
                [
                  102.6778,
                  12.54239
                ],
                [
                  102.67764,
                  12.53871
                ],
                [
                  102.67938,
                  12.53718
                ],
                [
                  102.68446,
                  12.53717
                ],
                [
                  102.69237,
                  12.53194
                ],
                [
                  102.69387,
                  12.52885
                ],
                [
                  102.69692,
                  12.52634
                ],
                [
                  102.69534,
                  12.52335
                ],
                [
                  102.69579,
                  12.51922
                ],
                [
                  102.68102,
                  12.5247
                ],
                [
                  102.66668,
                  12.5254
                ],
                [
                  102.66241,
                  12.52304
                ],
                [
                  102.65961,
                  12.52431
                ],
                [
                  102.65809,
                  12.5238
                ],
                [
                  102.65549,
                  12.52652
                ],
                [
                  102.65431,
                  12.53273
                ],
                [
                  102.64929,
                  12.53263
                ],
                [
                  102.64575,
                  12.53514
                ],
                [
                  102.64487,
                  12.53887
                ],
                [
                  102.639,
                  12.54179
                ],
                [
                  102.6375,
                  12.53392
                ],
                [
                  102.63877,
                  12.53175
                ],
                [
                  102.63858,
                  12.5242
                ],
                [
                  102.63718,
                  12.52287
                ],
                [
                  102.63467,
                  12.5228
                ],
                [
                  102.63411,
                  12.51966
                ],
                [
                  102.63069,
                  12.51934
                ],
                [
                  102.63257,
                  12.51542
                ],
                [
                  102.62763,
                  12.51851
                ],
                [
                  102.62366,
                  12.51884
                ],
                [
                  102.61579,
                  12.51267
                ],
                [
                  102.61286,
                  12.51511
                ],
                [
                  102.6113,
                  12.51487
                ],
                [
                  102.607,
                  12.5099
                ],
                [
                  102.60459,
                  12.50223
                ],
                [
                  102.60102,
                  12.50013
                ],
                [
                  102.6005,
                  12.49857
                ],
                [
                  102.59553,
                  12.50041
                ],
                [
                  102.59112,
                  12.49884
                ],
                [
                  102.58606,
                  12.49952
                ],
                [
                  102.58129,
                  12.50417
                ],
                [
                  102.58101,
                  12.50574
                ],
                [
                  102.57821,
                  12.50417
                ],
                [
                  102.57617,
                  12.5005
                ],
                [
                  102.57407,
                  12.49922
                ],
                [
                  102.57164,
                  12.49992
                ],
                [
                  102.56743,
                  12.50384
                ],
                [
                  102.56357,
                  12.50495
                ],
                [
                  102.55687,
                  12.50364
                ],
                [
                  102.55471,
                  12.50444
                ],
                [
                  102.55166,
                  12.50206
                ],
                [
                  102.55054,
                  12.5053
                ],
                [
                  102.54804,
                  12.50628
                ],
                [
                  102.54736,
                  12.50872
                ],
                [
                  102.54479,
                  12.50881
                ],
                [
                  102.54462,
                  12.51129
                ],
                [
                  102.54184,
                  12.51223
                ],
                [
                  102.53981,
                  12.51087
                ],
                [
                  102.53711,
                  12.51253
                ],
                [
                  102.53512,
                  12.51133
                ],
                [
                  102.53158,
                  12.51453
                ],
                [
                  102.529,
                  12.51307
                ],
                [
                  102.52833,
                  12.5162
                ],
                [
                  102.52609,
                  12.5127
                ],
                [
                  102.52313,
                  12.5142
                ],
                [
                  102.52317,
                  12.51267
                ],
                [
                  102.52188,
                  12.51296
                ],
                [
                  102.51933,
                  12.51082
                ],
                [
                  102.51415,
                  12.51341
                ],
                [
                  102.5127,
                  12.51035
                ],
                [
                  102.51044,
                  12.51057
                ],
                [
                  102.50865,
                  12.51239
                ],
                [
                  102.50647,
                  12.51152
                ],
                [
                  102.50649,
                  12.51534
                ],
                [
                  102.50374,
                  12.51221
                ],
                [
                  102.50155,
                  12.51193
                ],
                [
                  102.50335,
                  12.51562
                ],
                [
                  102.51027,
                  12.51687
                ],
                [
                  102.51023,
                  12.52042
                ],
                [
                  102.51438,
                  12.52249
                ],
                [
                  102.51586,
                  12.52688
                ],
                [
                  102.52056,
                  12.53143
                ],
                [
                  102.52286,
                  12.53542
                ],
                [
                  102.52704,
                  12.53878
                ],
                [
                  102.53159,
                  12.539
                ],
                [
                  102.5331,
                  12.54012
                ],
                [
                  102.53464,
                  12.5378
                ],
                [
                  102.53654,
                  12.53846
                ],
                [
                  102.53925,
                  12.53634
                ],
                [
                  102.54135,
                  12.53874
                ],
                [
                  102.54496,
                  12.53713
                ],
                [
                  102.55165,
                  12.54042
                ],
                [
                  102.55275,
                  12.54224
                ],
                [
                  102.55315,
                  12.5516
                ],
                [
                  102.56583,
                  12.55931
                ],
                [
                  102.56704,
                  12.56497
                ],
                [
                  102.57149,
                  12.56649
                ],
                [
                  102.57662,
                  12.56653
                ],
                [
                  102.57772,
                  12.57065
                ],
                [
                  102.57932,
                  12.57237
                ],
                [
                  102.59596,
                  12.5784
                ],
                [
                  102.59578,
                  12.58922
                ],
                [
                  102.60621,
                  12.58713
                ],
                [
                  102.6114,
                  12.58317
                ],
                [
                  102.61772,
                  12.584
                ],
                [
                  102.62554,
                  12.58927
                ],
                [
                  102.62873,
                  12.5929
                ],
                [
                  102.63562,
                  12.59533
                ],
                [
                  102.63851,
                  12.59511
                ],
                [
                  102.64625,
                  12.59726
                ],
                [
                  102.64685,
                  12.59873
                ],
                [
                  102.64552,
                  12.60563
                ],
                [
                  102.64661,
                  12.60888
                ],
                [
                  102.64766,
                  12.60233
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230405",
          "tambon": "ต.นนทรีย์",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดทุ่งตอง",
          "latitude": 12.515793,
          "longitude": 102.59027,
          "sum_rainfall_mm": 43.6,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.64766,
                  12.60233
                ],
                [
                  102.64733,
                  12.59604
                ],
                [
                  102.64434,
                  12.59481
                ],
                [
                  102.6456,
                  12.59012
                ],
                [
                  102.64457,
                  12.58492
                ],
                [
                  102.6488,
                  12.5839
                ],
                [
                  102.65154,
                  12.58187
                ],
                [
                  102.65409,
                  12.58286
                ],
                [
                  102.65766,
                  12.58149
                ],
                [
                  102.66192,
                  12.58249
                ],
                [
                  102.66712,
                  12.57336
                ],
                [
                  102.66778,
                  12.56274
                ],
                [
                  102.67562,
                  12.55911
                ],
                [
                  102.68504,
                  12.54798
                ],
                [
                  102.6778,
                  12.54239
                ],
                [
                  102.67764,
                  12.53871
                ],
                [
                  102.67938,
                  12.53718
                ],
                [
                  102.68446,
                  12.53717
                ],
                [
                  102.69237,
                  12.53194
                ],
                [
                  102.69387,
                  12.52885
                ],
                [
                  102.69692,
                  12.52634
                ],
                [
                  102.69534,
                  12.52335
                ],
                [
                  102.69579,
                  12.51922
                ],
                [
                  102.68102,
                  12.5247
                ],
                [
                  102.66668,
                  12.5254
                ],
                [
                  102.66241,
                  12.52304
                ],
                [
                  102.65961,
                  12.52431
                ],
                [
                  102.65809,
                  12.5238
                ],
                [
                  102.65549,
                  12.52652
                ],
                [
                  102.65431,
                  12.53273
                ],
                [
                  102.64929,
                  12.53263
                ],
                [
                  102.64575,
                  12.53514
                ],
                [
                  102.64487,
                  12.53887
                ],
                [
                  102.639,
                  12.54179
                ],
                [
                  102.6375,
                  12.53392
                ],
                [
                  102.63877,
                  12.53175
                ],
                [
                  102.63858,
                  12.5242
                ],
                [
                  102.63718,
                  12.52287
                ],
                [
                  102.63467,
                  12.5228
                ],
                [
                  102.63411,
                  12.51966
                ],
                [
                  102.63069,
                  12.51934
                ],
                [
                  102.63257,
                  12.51542
                ],
                [
                  102.62763,
                  12.51851
                ],
                [
                  102.62366,
                  12.51884
                ],
                [
                  102.61579,
                  12.51267
                ],
                [
                  102.61286,
                  12.51511
                ],
                [
                  102.6113,
                  12.51487
                ],
                [
                  102.607,
                  12.5099
                ],
                [
                  102.60459,
                  12.50223
                ],
                [
                  102.60102,
                  12.50013
                ],
                [
                  102.6005,
                  12.49857
                ],
                [
                  102.59553,
                  12.50041
                ],
                [
                  102.59112,
                  12.49884
                ],
                [
                  102.58606,
                  12.49952
                ],
                [
                  102.58129,
                  12.50417
                ],
                [
                  102.58101,
                  12.50574
                ],
                [
                  102.57821,
                  12.50417
                ],
                [
                  102.57617,
                  12.5005
                ],
                [
                  102.57407,
                  12.49922
                ],
                [
                  102.57164,
                  12.49992
                ],
                [
                  102.56743,
                  12.50384
                ],
                [
                  102.56357,
                  12.50495
                ],
                [
                  102.55687,
                  12.50364
                ],
                [
                  102.55471,
                  12.50444
                ],
                [
                  102.55166,
                  12.50206
                ],
                [
                  102.55054,
                  12.5053
                ],
                [
                  102.54804,
                  12.50628
                ],
                [
                  102.54736,
                  12.50872
                ],
                [
                  102.54479,
                  12.50881
                ],
                [
                  102.54462,
                  12.51129
                ],
                [
                  102.54184,
                  12.51223
                ],
                [
                  102.53981,
                  12.51087
                ],
                [
                  102.53711,
                  12.51253
                ],
                [
                  102.53512,
                  12.51133
                ],
                [
                  102.53158,
                  12.51453
                ],
                [
                  102.529,
                  12.51307
                ],
                [
                  102.52833,
                  12.5162
                ],
                [
                  102.52609,
                  12.5127
                ],
                [
                  102.52313,
                  12.5142
                ],
                [
                  102.52317,
                  12.51267
                ],
                [
                  102.52188,
                  12.51296
                ],
                [
                  102.51933,
                  12.51082
                ],
                [
                  102.51415,
                  12.51341
                ],
                [
                  102.5127,
                  12.51035
                ],
                [
                  102.51044,
                  12.51057
                ],
                [
                  102.50865,
                  12.51239
                ],
                [
                  102.50647,
                  12.51152
                ],
                [
                  102.50649,
                  12.51534
                ],
                [
                  102.50374,
                  12.51221
                ],
                [
                  102.50155,
                  12.51193
                ],
                [
                  102.50335,
                  12.51562
                ],
                [
                  102.51027,
                  12.51687
                ],
                [
                  102.51023,
                  12.52042
                ],
                [
                  102.51438,
                  12.52249
                ],
                [
                  102.51586,
                  12.52688
                ],
                [
                  102.52056,
                  12.53143
                ],
                [
                  102.52286,
                  12.53542
                ],
                [
                  102.52704,
                  12.53878
                ],
                [
                  102.53159,
                  12.539
                ],
                [
                  102.5331,
                  12.54012
                ],
                [
                  102.53464,
                  12.5378
                ],
                [
                  102.53654,
                  12.53846
                ],
                [
                  102.53925,
                  12.53634
                ],
                [
                  102.54135,
                  12.53874
                ],
                [
                  102.54496,
                  12.53713
                ],
                [
                  102.55165,
                  12.54042
                ],
                [
                  102.55275,
                  12.54224
                ],
                [
                  102.55315,
                  12.5516
                ],
                [
                  102.56583,
                  12.55931
                ],
                [
                  102.56704,
                  12.56497
                ],
                [
                  102.57149,
                  12.56649
                ],
                [
                  102.57662,
                  12.56653
                ],
                [
                  102.57772,
                  12.57065
                ],
                [
                  102.57932,
                  12.57237
                ],
                [
                  102.59596,
                  12.5784
                ],
                [
                  102.59578,
                  12.58922
                ],
                [
                  102.60621,
                  12.58713
                ],
                [
                  102.6114,
                  12.58317
                ],
                [
                  102.61772,
                  12.584
                ],
                [
                  102.62554,
                  12.58927
                ],
                [
                  102.62873,
                  12.5929
                ],
                [
                  102.63562,
                  12.59533
                ],
                [
                  102.63851,
                  12.59511
                ],
                [
                  102.64625,
                  12.59726
                ],
                [
                  102.64685,
                  12.59873
                ],
                [
                  102.64552,
                  12.60563
                ],
                [
                  102.64661,
                  12.60888
                ],
                [
                  102.64766,
                  12.60233
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230401",
          "tambon": "ต.บ่อพลอย",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหมื่นด่าน",
          "latitude": 12.595746,
          "longitude": 102.578773,
          "sum_rainfall_mm": 10.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.58749,
                  12.63992
                ],
                [
                  102.59142,
                  12.63827
                ],
                [
                  102.59374,
                  12.63449
                ],
                [
                  102.59905,
                  12.62981
                ],
                [
                  102.60559,
                  12.62745
                ],
                [
                  102.60785,
                  12.62399
                ],
                [
                  102.61709,
                  12.6155
                ],
                [
                  102.6269,
                  12.61448
                ],
                [
                  102.62923,
                  12.61249
                ],
                [
                  102.62974,
                  12.6095
                ],
                [
                  102.64521,
                  12.61086
                ],
                [
                  102.64661,
                  12.60888
                ],
                [
                  102.64552,
                  12.60563
                ],
                [
                  102.64648,
                  12.59749
                ],
                [
                  102.62873,
                  12.5929
                ],
                [
                  102.61935,
                  12.5846
                ],
                [
                  102.61414,
                  12.58316
                ],
                [
                  102.60967,
                  12.58382
                ],
                [
                  102.60621,
                  12.58713
                ],
                [
                  102.59578,
                  12.58922
                ],
                [
                  102.59596,
                  12.5784
                ],
                [
                  102.57932,
                  12.57237
                ],
                [
                  102.57772,
                  12.57065
                ],
                [
                  102.57662,
                  12.56653
                ],
                [
                  102.57149,
                  12.56649
                ],
                [
                  102.56704,
                  12.56497
                ],
                [
                  102.56583,
                  12.55931
                ],
                [
                  102.55315,
                  12.5516
                ],
                [
                  102.55275,
                  12.54224
                ],
                [
                  102.55165,
                  12.54042
                ],
                [
                  102.54496,
                  12.53713
                ],
                [
                  102.54135,
                  12.53874
                ],
                [
                  102.53925,
                  12.53634
                ],
                [
                  102.53654,
                  12.53846
                ],
                [
                  102.53464,
                  12.5378
                ],
                [
                  102.5331,
                  12.54012
                ],
                [
                  102.53159,
                  12.539
                ],
                [
                  102.5268,
                  12.53864
                ],
                [
                  102.51586,
                  12.52688
                ],
                [
                  102.51438,
                  12.52249
                ],
                [
                  102.51023,
                  12.52042
                ],
                [
                  102.51,
                  12.51663
                ],
                [
                  102.50335,
                  12.51562
                ],
                [
                  102.5018,
                  12.51205
                ],
                [
                  102.49868,
                  12.51253
                ],
                [
                  102.49521,
                  12.51094
                ],
                [
                  102.49562,
                  12.50742
                ],
                [
                  102.4938,
                  12.50412
                ],
                [
                  102.49051,
                  12.50211
                ],
                [
                  102.49022,
                  12.499
                ],
                [
                  102.48647,
                  12.49805
                ],
                [
                  102.48418,
                  12.49317
                ],
                [
                  102.48303,
                  12.4931
                ],
                [
                  102.48369,
                  12.49809
                ],
                [
                  102.47852,
                  12.49842
                ],
                [
                  102.47617,
                  12.5
                ],
                [
                  102.48078,
                  12.50023
                ],
                [
                  102.48368,
                  12.50367
                ],
                [
                  102.48497,
                  12.51031
                ],
                [
                  102.48414,
                  12.52297
                ],
                [
                  102.47874,
                  12.53783
                ],
                [
                  102.47451,
                  12.54331
                ],
                [
                  102.46979,
                  12.54662
                ],
                [
                  102.47346,
                  12.5519
                ],
                [
                  102.48511,
                  12.56152
                ],
                [
                  102.49214,
                  12.56376
                ],
                [
                  102.49796,
                  12.56312
                ],
                [
                  102.50342,
                  12.56106
                ],
                [
                  102.50711,
                  12.56728
                ],
                [
                  102.50443,
                  12.57054
                ],
                [
                  102.50527,
                  12.57452
                ],
                [
                  102.50403,
                  12.57806
                ],
                [
                  102.50445,
                  12.58244
                ],
                [
                  102.50143,
                  12.58468
                ],
                [
                  102.50118,
                  12.58713
                ],
                [
                  102.4972,
                  12.58946
                ],
                [
                  102.4954,
                  12.59246
                ],
                [
                  102.49516,
                  12.59535
                ],
                [
                  102.49686,
                  12.59952
                ],
                [
                  102.50076,
                  12.60315
                ],
                [
                  102.50222,
                  12.60752
                ],
                [
                  102.50734,
                  12.61544
                ],
                [
                  102.50354,
                  12.62142
                ],
                [
                  102.5046,
                  12.62908
                ],
                [
                  102.50719,
                  12.63184
                ],
                [
                  102.50838,
                  12.63561
                ],
                [
                  102.50643,
                  12.6443
                ],
                [
                  102.50896,
                  12.65236
                ],
                [
                  102.51615,
                  12.65729
                ],
                [
                  102.51843,
                  12.66285
                ],
                [
                  102.53195,
                  12.65313
                ],
                [
                  102.53929,
                  12.65132
                ],
                [
                  102.54438,
                  12.65599
                ],
                [
                  102.5503,
                  12.65547
                ],
                [
                  102.55222,
                  12.65259
                ],
                [
                  102.55497,
                  12.65196
                ],
                [
                  102.56762,
                  12.65764
                ],
                [
                  102.57135,
                  12.65346
                ],
                [
                  102.58001,
                  12.65281
                ],
                [
                  102.58193,
                  12.64506
                ],
                [
                  102.5852,
                  12.64349
                ],
                [
                  102.58749,
                  12.63992
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230401",
          "tambon": "ต.บ่อพลอย",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านตาบาด",
          "latitude": 12.60122,
          "longitude": 102.567709,
          "sum_rainfall_mm": 7.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.58749,
                  12.63992
                ],
                [
                  102.59142,
                  12.63827
                ],
                [
                  102.59374,
                  12.63449
                ],
                [
                  102.59905,
                  12.62981
                ],
                [
                  102.60559,
                  12.62745
                ],
                [
                  102.60785,
                  12.62399
                ],
                [
                  102.61709,
                  12.6155
                ],
                [
                  102.6269,
                  12.61448
                ],
                [
                  102.62923,
                  12.61249
                ],
                [
                  102.62974,
                  12.6095
                ],
                [
                  102.64521,
                  12.61086
                ],
                [
                  102.64661,
                  12.60888
                ],
                [
                  102.64552,
                  12.60563
                ],
                [
                  102.64648,
                  12.59749
                ],
                [
                  102.62873,
                  12.5929
                ],
                [
                  102.61935,
                  12.5846
                ],
                [
                  102.61414,
                  12.58316
                ],
                [
                  102.60967,
                  12.58382
                ],
                [
                  102.60621,
                  12.58713
                ],
                [
                  102.59578,
                  12.58922
                ],
                [
                  102.59596,
                  12.5784
                ],
                [
                  102.57932,
                  12.57237
                ],
                [
                  102.57772,
                  12.57065
                ],
                [
                  102.57662,
                  12.56653
                ],
                [
                  102.57149,
                  12.56649
                ],
                [
                  102.56704,
                  12.56497
                ],
                [
                  102.56583,
                  12.55931
                ],
                [
                  102.55315,
                  12.5516
                ],
                [
                  102.55275,
                  12.54224
                ],
                [
                  102.55165,
                  12.54042
                ],
                [
                  102.54496,
                  12.53713
                ],
                [
                  102.54135,
                  12.53874
                ],
                [
                  102.53925,
                  12.53634
                ],
                [
                  102.53654,
                  12.53846
                ],
                [
                  102.53464,
                  12.5378
                ],
                [
                  102.5331,
                  12.54012
                ],
                [
                  102.53159,
                  12.539
                ],
                [
                  102.5268,
                  12.53864
                ],
                [
                  102.51586,
                  12.52688
                ],
                [
                  102.51438,
                  12.52249
                ],
                [
                  102.51023,
                  12.52042
                ],
                [
                  102.51,
                  12.51663
                ],
                [
                  102.50335,
                  12.51562
                ],
                [
                  102.5018,
                  12.51205
                ],
                [
                  102.49868,
                  12.51253
                ],
                [
                  102.49521,
                  12.51094
                ],
                [
                  102.49562,
                  12.50742
                ],
                [
                  102.4938,
                  12.50412
                ],
                [
                  102.49051,
                  12.50211
                ],
                [
                  102.49022,
                  12.499
                ],
                [
                  102.48647,
                  12.49805
                ],
                [
                  102.48418,
                  12.49317
                ],
                [
                  102.48303,
                  12.4931
                ],
                [
                  102.48369,
                  12.49809
                ],
                [
                  102.47852,
                  12.49842
                ],
                [
                  102.47617,
                  12.5
                ],
                [
                  102.48078,
                  12.50023
                ],
                [
                  102.48368,
                  12.50367
                ],
                [
                  102.48497,
                  12.51031
                ],
                [
                  102.48414,
                  12.52297
                ],
                [
                  102.47874,
                  12.53783
                ],
                [
                  102.47451,
                  12.54331
                ],
                [
                  102.46979,
                  12.54662
                ],
                [
                  102.47346,
                  12.5519
                ],
                [
                  102.48511,
                  12.56152
                ],
                [
                  102.49214,
                  12.56376
                ],
                [
                  102.49796,
                  12.56312
                ],
                [
                  102.50342,
                  12.56106
                ],
                [
                  102.50711,
                  12.56728
                ],
                [
                  102.50443,
                  12.57054
                ],
                [
                  102.50527,
                  12.57452
                ],
                [
                  102.50403,
                  12.57806
                ],
                [
                  102.50445,
                  12.58244
                ],
                [
                  102.50143,
                  12.58468
                ],
                [
                  102.50118,
                  12.58713
                ],
                [
                  102.4972,
                  12.58946
                ],
                [
                  102.4954,
                  12.59246
                ],
                [
                  102.49516,
                  12.59535
                ],
                [
                  102.49686,
                  12.59952
                ],
                [
                  102.50076,
                  12.60315
                ],
                [
                  102.50222,
                  12.60752
                ],
                [
                  102.50734,
                  12.61544
                ],
                [
                  102.50354,
                  12.62142
                ],
                [
                  102.5046,
                  12.62908
                ],
                [
                  102.50719,
                  12.63184
                ],
                [
                  102.50838,
                  12.63561
                ],
                [
                  102.50643,
                  12.6443
                ],
                [
                  102.50896,
                  12.65236
                ],
                [
                  102.51615,
                  12.65729
                ],
                [
                  102.51843,
                  12.66285
                ],
                [
                  102.53195,
                  12.65313
                ],
                [
                  102.53929,
                  12.65132
                ],
                [
                  102.54438,
                  12.65599
                ],
                [
                  102.5503,
                  12.65547
                ],
                [
                  102.55222,
                  12.65259
                ],
                [
                  102.55497,
                  12.65196
                ],
                [
                  102.56762,
                  12.65764
                ],
                [
                  102.57135,
                  12.65346
                ],
                [
                  102.58001,
                  12.65281
                ],
                [
                  102.58193,
                  12.64506
                ],
                [
                  102.5852,
                  12.64349
                ],
                [
                  102.58749,
                  12.63992
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230401",
          "tambon": "ต.บ่อพลอย",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองสะตอ",
          "latitude": 12.5973,
          "longitude": 102.608,
          "sum_rainfall_mm": 7.200000000000001,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.58749,
                  12.63992
                ],
                [
                  102.59142,
                  12.63827
                ],
                [
                  102.59374,
                  12.63449
                ],
                [
                  102.59905,
                  12.62981
                ],
                [
                  102.60559,
                  12.62745
                ],
                [
                  102.60785,
                  12.62399
                ],
                [
                  102.61709,
                  12.6155
                ],
                [
                  102.6269,
                  12.61448
                ],
                [
                  102.62923,
                  12.61249
                ],
                [
                  102.62974,
                  12.6095
                ],
                [
                  102.64521,
                  12.61086
                ],
                [
                  102.64661,
                  12.60888
                ],
                [
                  102.64552,
                  12.60563
                ],
                [
                  102.64648,
                  12.59749
                ],
                [
                  102.62873,
                  12.5929
                ],
                [
                  102.61935,
                  12.5846
                ],
                [
                  102.61414,
                  12.58316
                ],
                [
                  102.60967,
                  12.58382
                ],
                [
                  102.60621,
                  12.58713
                ],
                [
                  102.59578,
                  12.58922
                ],
                [
                  102.59596,
                  12.5784
                ],
                [
                  102.57932,
                  12.57237
                ],
                [
                  102.57772,
                  12.57065
                ],
                [
                  102.57662,
                  12.56653
                ],
                [
                  102.57149,
                  12.56649
                ],
                [
                  102.56704,
                  12.56497
                ],
                [
                  102.56583,
                  12.55931
                ],
                [
                  102.55315,
                  12.5516
                ],
                [
                  102.55275,
                  12.54224
                ],
                [
                  102.55165,
                  12.54042
                ],
                [
                  102.54496,
                  12.53713
                ],
                [
                  102.54135,
                  12.53874
                ],
                [
                  102.53925,
                  12.53634
                ],
                [
                  102.53654,
                  12.53846
                ],
                [
                  102.53464,
                  12.5378
                ],
                [
                  102.5331,
                  12.54012
                ],
                [
                  102.53159,
                  12.539
                ],
                [
                  102.5268,
                  12.53864
                ],
                [
                  102.51586,
                  12.52688
                ],
                [
                  102.51438,
                  12.52249
                ],
                [
                  102.51023,
                  12.52042
                ],
                [
                  102.51,
                  12.51663
                ],
                [
                  102.50335,
                  12.51562
                ],
                [
                  102.5018,
                  12.51205
                ],
                [
                  102.49868,
                  12.51253
                ],
                [
                  102.49521,
                  12.51094
                ],
                [
                  102.49562,
                  12.50742
                ],
                [
                  102.4938,
                  12.50412
                ],
                [
                  102.49051,
                  12.50211
                ],
                [
                  102.49022,
                  12.499
                ],
                [
                  102.48647,
                  12.49805
                ],
                [
                  102.48418,
                  12.49317
                ],
                [
                  102.48303,
                  12.4931
                ],
                [
                  102.48369,
                  12.49809
                ],
                [
                  102.47852,
                  12.49842
                ],
                [
                  102.47617,
                  12.5
                ],
                [
                  102.48078,
                  12.50023
                ],
                [
                  102.48368,
                  12.50367
                ],
                [
                  102.48497,
                  12.51031
                ],
                [
                  102.48414,
                  12.52297
                ],
                [
                  102.47874,
                  12.53783
                ],
                [
                  102.47451,
                  12.54331
                ],
                [
                  102.46979,
                  12.54662
                ],
                [
                  102.47346,
                  12.5519
                ],
                [
                  102.48511,
                  12.56152
                ],
                [
                  102.49214,
                  12.56376
                ],
                [
                  102.49796,
                  12.56312
                ],
                [
                  102.50342,
                  12.56106
                ],
                [
                  102.50711,
                  12.56728
                ],
                [
                  102.50443,
                  12.57054
                ],
                [
                  102.50527,
                  12.57452
                ],
                [
                  102.50403,
                  12.57806
                ],
                [
                  102.50445,
                  12.58244
                ],
                [
                  102.50143,
                  12.58468
                ],
                [
                  102.50118,
                  12.58713
                ],
                [
                  102.4972,
                  12.58946
                ],
                [
                  102.4954,
                  12.59246
                ],
                [
                  102.49516,
                  12.59535
                ],
                [
                  102.49686,
                  12.59952
                ],
                [
                  102.50076,
                  12.60315
                ],
                [
                  102.50222,
                  12.60752
                ],
                [
                  102.50734,
                  12.61544
                ],
                [
                  102.50354,
                  12.62142
                ],
                [
                  102.5046,
                  12.62908
                ],
                [
                  102.50719,
                  12.63184
                ],
                [
                  102.50838,
                  12.63561
                ],
                [
                  102.50643,
                  12.6443
                ],
                [
                  102.50896,
                  12.65236
                ],
                [
                  102.51615,
                  12.65729
                ],
                [
                  102.51843,
                  12.66285
                ],
                [
                  102.53195,
                  12.65313
                ],
                [
                  102.53929,
                  12.65132
                ],
                [
                  102.54438,
                  12.65599
                ],
                [
                  102.5503,
                  12.65547
                ],
                [
                  102.55222,
                  12.65259
                ],
                [
                  102.55497,
                  12.65196
                ],
                [
                  102.56762,
                  12.65764
                ],
                [
                  102.57135,
                  12.65346
                ],
                [
                  102.58001,
                  12.65281
                ],
                [
                  102.58193,
                  12.64506
                ],
                [
                  102.5852,
                  12.64349
                ],
                [
                  102.58749,
                  12.63992
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230401",
          "tambon": "ต.บ่อพลอย",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองโสน",
          "latitude": 12.513374,
          "longitude": 102.50484,
          "sum_rainfall_mm": 9.0,
          "observed_at": "2026-10-16T11:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.58749,
                  12.63992
                ],
                [
                  102.59142,
                  12.63827
                ],
                [
                  102.59374,
                  12.63449
                ],
                [
                  102.59905,
                  12.62981
                ],
                [
                  102.60559,
                  12.62745
                ],
                [
                  102.60785,
                  12.62399
                ],
                [
                  102.61709,
                  12.6155
                ],
                [
                  102.6269,
                  12.61448
                ],
                [
                  102.62923,
                  12.61249
                ],
                [
                  102.62974,
                  12.6095
                ],
                [
                  102.64521,
                  12.61086
                ],
                [
                  102.64661,
                  12.60888
                ],
                [
                  102.64552,
                  12.60563
                ],
                [
                  102.64648,
                  12.59749
                ],
                [
                  102.62873,
                  12.5929
                ],
                [
                  102.61935,
                  12.5846
                ],
                [
                  102.61414,
                  12.58316
                ],
                [
                  102.60967,
                  12.58382
                ],
                [
                  102.60621,
                  12.58713
                ],
                [
                  102.59578,
                  12.58922
                ],
                [
                  102.59596,
                  12.5784
                ],
                [
                  102.57932,
                  12.57237
                ],
                [
                  102.57772,
                  12.57065
                ],
                [
                  102.57662,
                  12.56653
                ],
                [
                  102.57149,
                  12.56649
                ],
                [
                  102.56704,
                  12.56497
                ],
                [
                  102.56583,
                  12.55931
                ],
                [
                  102.55315,
                  12.5516
                ],
                [
                  102.55275,
                  12.54224
                ],
                [
                  102.55165,
                  12.54042
                ],
                [
                  102.54496,
                  12.53713
                ],
                [
                  102.54135,
                  12.53874
                ],
                [
                  102.53925,
                  12.53634
                ],
                [
                  102.53654,
                  12.53846
                ],
                [
                  102.53464,
                  12.5378
                ],
                [
                  102.5331,
                  12.54012
                ],
                [
                  102.53159,
                  12.539
                ],
                [
                  102.5268,
                  12.53864
                ],
                [
                  102.51586,
                  12.52688
                ],
                [
                  102.51438,
                  12.52249
                ],
                [
                  102.51023,
                  12.52042
                ],
                [
                  102.51,
                  12.51663
                ],
                [
                  102.50335,
                  12.51562
                ],
                [
                  102.5018,
                  12.51205
                ],
                [
                  102.49868,
                  12.51253
                ],
                [
                  102.49521,
                  12.51094
                ],
                [
                  102.49562,
                  12.50742
                ],
                [
                  102.4938,
                  12.50412
                ],
                [
                  102.49051,
                  12.50211
                ],
                [
                  102.49022,
                  12.499
                ],
                [
                  102.48647,
                  12.49805
                ],
                [
                  102.48418,
                  12.49317
                ],
                [
                  102.48303,
                  12.4931
                ],
                [
                  102.48369,
                  12.49809
                ],
                [
                  102.47852,
                  12.49842
                ],
                [
                  102.47617,
                  12.5
                ],
                [
                  102.48078,
                  12.50023
                ],
                [
                  102.48368,
                  12.50367
                ],
                [
                  102.48497,
                  12.51031
                ],
                [
                  102.48414,
                  12.52297
                ],
                [
                  102.47874,
                  12.53783
                ],
                [
                  102.47451,
                  12.54331
                ],
                [
                  102.46979,
                  12.54662
                ],
                [
                  102.47346,
                  12.5519
                ],
                [
                  102.48511,
                  12.56152
                ],
                [
                  102.49214,
                  12.56376
                ],
                [
                  102.49796,
                  12.56312
                ],
                [
                  102.50342,
                  12.56106
                ],
                [
                  102.50711,
                  12.56728
                ],
                [
                  102.50443,
                  12.57054
                ],
                [
                  102.50527,
                  12.57452
                ],
                [
                  102.50403,
                  12.57806
                ],
                [
                  102.50445,
                  12.58244
                ],
                [
                  102.50143,
                  12.58468
                ],
                [
                  102.50118,
                  12.58713
                ],
                [
                  102.4972,
                  12.58946
                ],
                [
                  102.4954,
                  12.59246
                ],
                [
                  102.49516,
                  12.59535
                ],
                [
                  102.49686,
                  12.59952
                ],
                [
                  102.50076,
                  12.60315
                ],
                [
                  102.50222,
                  12.60752
                ],
                [
                  102.50734,
                  12.61544
                ],
                [
                  102.50354,
                  12.62142
                ],
                [
                  102.5046,
                  12.62908
                ],
                [
                  102.50719,
                  12.63184
                ],
                [
                  102.50838,
                  12.63561
                ],
                [
                  102.50643,
                  12.6443
                ],
                [
                  102.50896,
                  12.65236
                ],
                [
                  102.51615,
                  12.65729
                ],
                [
                  102.51843,
                  12.66285
                ],
                [
                  102.53195,
                  12.65313
                ],
                [
                  102.53929,
                  12.65132
                ],
                [
                  102.54438,
                  12.65599
                ],
                [
                  102.5503,
                  12.65547
                ],
                [
                  102.55222,
                  12.65259
                ],
                [
                  102.55497,
                  12.65196
                ],
                [
                  102.56762,
                  12.65764
                ],
                [
                  102.57135,
                  12.65346
                ],
                [
                  102.58001,
                  12.65281
                ],
                [
                  102.58193,
                  12.64506
                ],
                [
                  102.5852,
                  12.64349
                ],
                [
                  102.58749,
                  12.63992
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230404",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองบอน",
          "latitude": 12.681499,
          "longitude": 102.466076,
          "sum_rainfall_mm": 5.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.49649,
                  12.75724
                ],
                [
                  102.50025,
                  12.75677
                ],
                [
                  102.50107,
                  12.75401
                ],
                [
                  102.50385,
                  12.75285
                ],
                [
                  102.5086,
                  12.75304
                ],
                [
                  102.50565,
                  12.74609
                ],
                [
                  102.50017,
                  12.73946
                ],
                [
                  102.50342,
                  12.733
                ],
                [
                  102.50409,
                  12.72783
                ],
                [
                  102.5023,
                  12.7189
                ],
                [
                  102.50286,
                  12.71208
                ],
                [
                  102.49705,
                  12.7043
                ],
                [
                  102.4977,
                  12.70233
                ],
                [
                  102.50085,
                  12.70099
                ],
                [
                  102.49909,
                  12.69744
                ],
                [
                  102.49932,
                  12.6909
                ],
                [
                  102.49463,
                  12.68526
                ],
                [
                  102.48994,
                  12.68201
                ],
                [
                  102.48563,
                  12.67626
                ],
                [
                  102.48511,
                  12.67324
                ],
                [
                  102.48311,
                  12.67289
                ],
                [
                  102.48223,
                  12.67114
                ],
                [
                  102.47723,
                  12.66863
                ],
                [
                  102.47629,
                  12.66282
                ],
                [
                  102.47453,
                  12.6641
                ],
                [
                  102.47211,
                  12.66396
                ],
                [
                  102.46869,
                  12.66662
                ],
                [
                  102.46635,
                  12.66614
                ],
                [
                  102.46596,
                  12.65995
                ],
                [
                  102.46436,
                  12.65762
                ],
                [
                  102.46493,
                  12.65547
                ],
                [
                  102.4605,
                  12.65
                ],
                [
                  102.46126,
                  12.64635
                ],
                [
                  102.46341,
                  12.64499
                ],
                [
                  102.46461,
                  12.64596
                ],
                [
                  102.46637,
                  12.64493
                ],
                [
                  102.46465,
                  12.64374
                ],
                [
                  102.46739,
                  12.64091
                ],
                [
                  102.46618,
                  12.63914
                ],
                [
                  102.46673,
                  12.63798
                ],
                [
                  102.46963,
                  12.63908
                ],
                [
                  102.47241,
                  12.6373
                ],
                [
                  102.47534,
                  12.63705
                ],
                [
                  102.47399,
                  12.63316
                ],
                [
                  102.47547,
                  12.6292
                ],
                [
                  102.47462,
                  12.62728
                ],
                [
                  102.47719,
                  12.62492
                ],
                [
                  102.4747,
                  12.6199
                ],
                [
                  102.47576,
                  12.61587
                ],
                [
                  102.47259,
                  12.61504
                ],
                [
                  102.4686,
                  12.60953
                ],
                [
                  102.46522,
                  12.61218
                ],
                [
                  102.46529,
                  12.61798
                ],
                [
                  102.46355,
                  12.62318
                ],
                [
                  102.46024,
                  12.62474
                ],
                [
                  102.45448,
                  12.62545
                ],
                [
                  102.4519,
                  12.62771
                ],
                [
                  102.44568,
                  12.62774
                ],
                [
                  102.43157,
                  12.62735
                ],
                [
                  102.42675,
                  12.61955
                ],
                [
                  102.42426,
                  12.61792
                ],
                [
                  102.42131,
                  12.61886
                ],
                [
                  102.42046,
                  12.61753
                ],
                [
                  102.42127,
                  12.6152
                ],
                [
                  102.41989,
                  12.61552
                ],
                [
                  102.41381,
                  12.6201
                ],
                [
                  102.41185,
                  12.62577
                ],
                [
                  102.40527,
                  12.63475
                ],
                [
                  102.40376,
                  12.64181
                ],
                [
                  102.38992,
                  12.64514
                ],
                [
                  102.38812,
                  12.64739
                ],
                [
                  102.38683,
                  12.65856
                ],
                [
                  102.38426,
                  12.6624
                ],
                [
                  102.38585,
                  12.66651
                ],
                [
                  102.38534,
                  12.66968
                ],
                [
                  102.38314,
                  12.67171
                ],
                [
                  102.3842,
                  12.6786
                ],
                [
                  102.39052,
                  12.67956
                ],
                [
                  102.39313,
                  12.67893
                ],
                [
                  102.3947,
                  12.68261
                ],
                [
                  102.39254,
                  12.68549
                ],
                [
                  102.393,
                  12.68738
                ],
                [
                  102.40306,
                  12.69286
                ],
                [
                  102.40097,
                  12.69903
                ],
                [
                  102.40298,
                  12.7006
                ],
                [
                  102.40657,
                  12.69915
                ],
                [
                  102.40792,
                  12.70106
                ],
                [
                  102.41046,
                  12.70125
                ],
                [
                  102.41439,
                  12.70645
                ],
                [
                  102.4171,
                  12.707
                ],
                [
                  102.42147,
                  12.71155
                ],
                [
                  102.42362,
                  12.71149
                ],
                [
                  102.42523,
                  12.71683
                ],
                [
                  102.42483,
                  12.72372
                ],
                [
                  102.43049,
                  12.72345
                ],
                [
                  102.43455,
                  12.72993
                ],
                [
                  102.44014,
                  12.73182
                ],
                [
                  102.4401,
                  12.73508
                ],
                [
                  102.44122,
                  12.73694
                ],
                [
                  102.44496,
                  12.73751
                ],
                [
                  102.44855,
                  12.73549
                ],
                [
                  102.4584,
                  12.7331
                ],
                [
                  102.46056,
                  12.73544
                ],
                [
                  102.46483,
                  12.73339
                ],
                [
                  102.47407,
                  12.73556
                ],
                [
                  102.47763,
                  12.73893
                ],
                [
                  102.48253,
                  12.74714
                ],
                [
                  102.48925,
                  12.75204
                ],
                [
                  102.49097,
                  12.75665
                ],
                [
                  102.49649,
                  12.75724
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230404",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สะพานคลองสะตอ",
          "latitude": 12.7065,
          "longitude": 102.415,
          "sum_rainfall_mm": 64.8,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.49649,
                  12.75724
                ],
                [
                  102.50025,
                  12.75677
                ],
                [
                  102.50107,
                  12.75401
                ],
                [
                  102.50385,
                  12.75285
                ],
                [
                  102.5086,
                  12.75304
                ],
                [
                  102.50565,
                  12.74609
                ],
                [
                  102.50017,
                  12.73946
                ],
                [
                  102.50342,
                  12.733
                ],
                [
                  102.50409,
                  12.72783
                ],
                [
                  102.5023,
                  12.7189
                ],
                [
                  102.50286,
                  12.71208
                ],
                [
                  102.49705,
                  12.7043
                ],
                [
                  102.4977,
                  12.70233
                ],
                [
                  102.50085,
                  12.70099
                ],
                [
                  102.49909,
                  12.69744
                ],
                [
                  102.49932,
                  12.6909
                ],
                [
                  102.49463,
                  12.68526
                ],
                [
                  102.48994,
                  12.68201
                ],
                [
                  102.48563,
                  12.67626
                ],
                [
                  102.48511,
                  12.67324
                ],
                [
                  102.48311,
                  12.67289
                ],
                [
                  102.48223,
                  12.67114
                ],
                [
                  102.47723,
                  12.66863
                ],
                [
                  102.47629,
                  12.66282
                ],
                [
                  102.47453,
                  12.6641
                ],
                [
                  102.47211,
                  12.66396
                ],
                [
                  102.46869,
                  12.66662
                ],
                [
                  102.46635,
                  12.66614
                ],
                [
                  102.46596,
                  12.65995
                ],
                [
                  102.46436,
                  12.65762
                ],
                [
                  102.46493,
                  12.65547
                ],
                [
                  102.4605,
                  12.65
                ],
                [
                  102.46126,
                  12.64635
                ],
                [
                  102.46341,
                  12.64499
                ],
                [
                  102.46461,
                  12.64596
                ],
                [
                  102.46637,
                  12.64493
                ],
                [
                  102.46465,
                  12.64374
                ],
                [
                  102.46739,
                  12.64091
                ],
                [
                  102.46618,
                  12.63914
                ],
                [
                  102.46673,
                  12.63798
                ],
                [
                  102.46963,
                  12.63908
                ],
                [
                  102.47241,
                  12.6373
                ],
                [
                  102.47534,
                  12.63705
                ],
                [
                  102.47399,
                  12.63316
                ],
                [
                  102.47547,
                  12.6292
                ],
                [
                  102.47462,
                  12.62728
                ],
                [
                  102.47719,
                  12.62492
                ],
                [
                  102.4747,
                  12.6199
                ],
                [
                  102.47576,
                  12.61587
                ],
                [
                  102.47259,
                  12.61504
                ],
                [
                  102.4686,
                  12.60953
                ],
                [
                  102.46522,
                  12.61218
                ],
                [
                  102.46529,
                  12.61798
                ],
                [
                  102.46355,
                  12.62318
                ],
                [
                  102.46024,
                  12.62474
                ],
                [
                  102.45448,
                  12.62545
                ],
                [
                  102.4519,
                  12.62771
                ],
                [
                  102.44568,
                  12.62774
                ],
                [
                  102.43157,
                  12.62735
                ],
                [
                  102.42675,
                  12.61955
                ],
                [
                  102.42426,
                  12.61792
                ],
                [
                  102.42131,
                  12.61886
                ],
                [
                  102.42046,
                  12.61753
                ],
                [
                  102.42127,
                  12.6152
                ],
                [
                  102.41989,
                  12.61552
                ],
                [
                  102.41381,
                  12.6201
                ],
                [
                  102.41185,
                  12.62577
                ],
                [
                  102.40527,
                  12.63475
                ],
                [
                  102.40376,
                  12.64181
                ],
                [
                  102.38992,
                  12.64514
                ],
                [
                  102.38812,
                  12.64739
                ],
                [
                  102.38683,
                  12.65856
                ],
                [
                  102.38426,
                  12.6624
                ],
                [
                  102.38585,
                  12.66651
                ],
                [
                  102.38534,
                  12.66968
                ],
                [
                  102.38314,
                  12.67171
                ],
                [
                  102.3842,
                  12.6786
                ],
                [
                  102.39052,
                  12.67956
                ],
                [
                  102.39313,
                  12.67893
                ],
                [
                  102.3947,
                  12.68261
                ],
                [
                  102.39254,
                  12.68549
                ],
                [
                  102.393,
                  12.68738
                ],
                [
                  102.40306,
                  12.69286
                ],
                [
                  102.40097,
                  12.69903
                ],
                [
                  102.40298,
                  12.7006
                ],
                [
                  102.40657,
                  12.69915
                ],
                [
                  102.40792,
                  12.70106
                ],
                [
                  102.41046,
                  12.70125
                ],
                [
                  102.41439,
                  12.70645
                ],
                [
                  102.4171,
                  12.707
                ],
                [
                  102.42147,
                  12.71155
                ],
                [
                  102.42362,
                  12.71149
                ],
                [
                  102.42523,
                  12.71683
                ],
                [
                  102.42483,
                  12.72372
                ],
                [
                  102.43049,
                  12.72345
                ],
                [
                  102.43455,
                  12.72993
                ],
                [
                  102.44014,
                  12.73182
                ],
                [
                  102.4401,
                  12.73508
                ],
                [
                  102.44122,
                  12.73694
                ],
                [
                  102.44496,
                  12.73751
                ],
                [
                  102.44855,
                  12.73549
                ],
                [
                  102.4584,
                  12.7331
                ],
                [
                  102.46056,
                  12.73544
                ],
                [
                  102.46483,
                  12.73339
                ],
                [
                  102.47407,
                  12.73556
                ],
                [
                  102.47763,
                  12.73893
                ],
                [
                  102.48253,
                  12.74714
                ],
                [
                  102.48925,
                  12.75204
                ],
                [
                  102.49097,
                  12.75665
                ],
                [
                  102.49649,
                  12.75724
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230404",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.หนองบอน",
          "latitude": 12.67735,
          "longitude": 102.45936,
          "sum_rainfall_mm": 17.4,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.49649,
                  12.75724
                ],
                [
                  102.50025,
                  12.75677
                ],
                [
                  102.50107,
                  12.75401
                ],
                [
                  102.50385,
                  12.75285
                ],
                [
                  102.5086,
                  12.75304
                ],
                [
                  102.50565,
                  12.74609
                ],
                [
                  102.50017,
                  12.73946
                ],
                [
                  102.50342,
                  12.733
                ],
                [
                  102.50409,
                  12.72783
                ],
                [
                  102.5023,
                  12.7189
                ],
                [
                  102.50286,
                  12.71208
                ],
                [
                  102.49705,
                  12.7043
                ],
                [
                  102.4977,
                  12.70233
                ],
                [
                  102.50085,
                  12.70099
                ],
                [
                  102.49909,
                  12.69744
                ],
                [
                  102.49932,
                  12.6909
                ],
                [
                  102.49463,
                  12.68526
                ],
                [
                  102.48994,
                  12.68201
                ],
                [
                  102.48563,
                  12.67626
                ],
                [
                  102.48511,
                  12.67324
                ],
                [
                  102.48311,
                  12.67289
                ],
                [
                  102.48223,
                  12.67114
                ],
                [
                  102.47723,
                  12.66863
                ],
                [
                  102.47629,
                  12.66282
                ],
                [
                  102.47453,
                  12.6641
                ],
                [
                  102.47211,
                  12.66396
                ],
                [
                  102.46869,
                  12.66662
                ],
                [
                  102.46635,
                  12.66614
                ],
                [
                  102.46596,
                  12.65995
                ],
                [
                  102.46436,
                  12.65762
                ],
                [
                  102.46493,
                  12.65547
                ],
                [
                  102.4605,
                  12.65
                ],
                [
                  102.46126,
                  12.64635
                ],
                [
                  102.46341,
                  12.64499
                ],
                [
                  102.46461,
                  12.64596
                ],
                [
                  102.46637,
                  12.64493
                ],
                [
                  102.46465,
                  12.64374
                ],
                [
                  102.46739,
                  12.64091
                ],
                [
                  102.46618,
                  12.63914
                ],
                [
                  102.46673,
                  12.63798
                ],
                [
                  102.46963,
                  12.63908
                ],
                [
                  102.47241,
                  12.6373
                ],
                [
                  102.47534,
                  12.63705
                ],
                [
                  102.47399,
                  12.63316
                ],
                [
                  102.47547,
                  12.6292
                ],
                [
                  102.47462,
                  12.62728
                ],
                [
                  102.47719,
                  12.62492
                ],
                [
                  102.4747,
                  12.6199
                ],
                [
                  102.47576,
                  12.61587
                ],
                [
                  102.47259,
                  12.61504
                ],
                [
                  102.4686,
                  12.60953
                ],
                [
                  102.46522,
                  12.61218
                ],
                [
                  102.46529,
                  12.61798
                ],
                [
                  102.46355,
                  12.62318
                ],
                [
                  102.46024,
                  12.62474
                ],
                [
                  102.45448,
                  12.62545
                ],
                [
                  102.4519,
                  12.62771
                ],
                [
                  102.44568,
                  12.62774
                ],
                [
                  102.43157,
                  12.62735
                ],
                [
                  102.42675,
                  12.61955
                ],
                [
                  102.42426,
                  12.61792
                ],
                [
                  102.42131,
                  12.61886
                ],
                [
                  102.42046,
                  12.61753
                ],
                [
                  102.42127,
                  12.6152
                ],
                [
                  102.41989,
                  12.61552
                ],
                [
                  102.41381,
                  12.6201
                ],
                [
                  102.41185,
                  12.62577
                ],
                [
                  102.40527,
                  12.63475
                ],
                [
                  102.40376,
                  12.64181
                ],
                [
                  102.38992,
                  12.64514
                ],
                [
                  102.38812,
                  12.64739
                ],
                [
                  102.38683,
                  12.65856
                ],
                [
                  102.38426,
                  12.6624
                ],
                [
                  102.38585,
                  12.66651
                ],
                [
                  102.38534,
                  12.66968
                ],
                [
                  102.38314,
                  12.67171
                ],
                [
                  102.3842,
                  12.6786
                ],
                [
                  102.39052,
                  12.67956
                ],
                [
                  102.39313,
                  12.67893
                ],
                [
                  102.3947,
                  12.68261
                ],
                [
                  102.39254,
                  12.68549
                ],
                [
                  102.393,
                  12.68738
                ],
                [
                  102.40306,
                  12.69286
                ],
                [
                  102.40097,
                  12.69903
                ],
                [
                  102.40298,
                  12.7006
                ],
                [
                  102.40657,
                  12.69915
                ],
                [
                  102.40792,
                  12.70106
                ],
                [
                  102.41046,
                  12.70125
                ],
                [
                  102.41439,
                  12.70645
                ],
                [
                  102.4171,
                  12.707
                ],
                [
                  102.42147,
                  12.71155
                ],
                [
                  102.42362,
                  12.71149
                ],
                [
                  102.42523,
                  12.71683
                ],
                [
                  102.42483,
                  12.72372
                ],
                [
                  102.43049,
                  12.72345
                ],
                [
                  102.43455,
                  12.72993
                ],
                [
                  102.44014,
                  12.73182
                ],
                [
                  102.4401,
                  12.73508
                ],
                [
                  102.44122,
                  12.73694
                ],
                [
                  102.44496,
                  12.73751
                ],
                [
                  102.44855,
                  12.73549
                ],
                [
                  102.4584,
                  12.7331
                ],
                [
                  102.46056,
                  12.73544
                ],
                [
                  102.46483,
                  12.73339
                ],
                [
                  102.47407,
                  12.73556
                ],
                [
                  102.47763,
                  12.73893
                ],
                [
                  102.48253,
                  12.74714
                ],
                [
                  102.48925,
                  12.75204
                ],
                [
                  102.49097,
                  12.75665
                ],
                [
                  102.49649,
                  12.75724
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810202",
          "tambon": "ต.เขาดิน",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านกอตง",
          "latitude": 8.35229,
          "longitude": 99.065648,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.20366,
                  8.36752
                ],
                [
                  99.20452,
                  8.36585
                ],
                [
                  99.20218,
                  8.36218
                ],
                [
                  99.20189,
                  8.35874
                ],
                [
                  99.20621,
                  8.35332
                ],
                [
                  99.20569,
                  8.34629
                ],
                [
                  99.20871,
                  8.34326
                ],
                [
                  99.20907,
                  8.33741
                ],
                [
                  99.2146,
                  8.3305
                ],
                [
                  99.2207,
                  8.32537
                ],
                [
                  99.21518,
                  8.32007
                ],
                [
                  99.20372,
                  8.3167
                ],
                [
                  99.19244,
                  8.31665
                ],
                [
                  99.18496,
                  8.31372
                ],
                [
                  99.17409,
                  8.31853
                ],
                [
                  99.16311,
                  8.31292
                ],
                [
                  99.16055,
                  8.31367
                ],
                [
                  99.156,
                  8.31764
                ],
                [
                  99.15181,
                  8.31884
                ],
                [
                  99.14734,
                  8.31924
                ],
                [
                  99.14133,
                  8.31576
                ],
                [
                  99.13817,
                  8.3186
                ],
                [
                  99.11797,
                  8.31801
                ],
                [
                  99.09173,
                  8.32251
                ],
                [
                  99.0667,
                  8.32337
                ],
                [
                  99.06502,
                  8.31859
                ],
                [
                  99.06308,
                  8.30206
                ],
                [
                  99.06458,
                  8.30002
                ],
                [
                  99.06377,
                  8.29701
                ],
                [
                  99.06486,
                  8.29117
                ],
                [
                  99.06776,
                  8.28563
                ],
                [
                  99.06741,
                  8.28439
                ],
                [
                  99.0598,
                  8.28315
                ],
                [
                  99.05195,
                  8.28749
                ],
                [
                  99.04502,
                  8.29031
                ],
                [
                  99.04031,
                  8.2901
                ],
                [
                  99.03723,
                  8.29242
                ],
                [
                  99.03162,
                  8.29044
                ],
                [
                  99.02685,
                  8.30139
                ],
                [
                  99.02677,
                  8.30977
                ],
                [
                  99.0298,
                  8.3235
                ],
                [
                  99.02702,
                  8.3292
                ],
                [
                  99.02433,
                  8.33203
                ],
                [
                  99.02676,
                  8.33544
                ],
                [
                  99.02749,
                  8.34044
                ],
                [
                  99.02888,
                  8.34231
                ],
                [
                  99.02449,
                  8.34259
                ],
                [
                  99.0209,
                  8.34622
                ],
                [
                  99.01936,
                  8.34989
                ],
                [
                  99.01308,
                  8.35
                ],
                [
                  99.01093,
                  8.35267
                ],
                [
                  99.00826,
                  8.35295
                ],
                [
                  99.00653,
                  8.35468
                ],
                [
                  99.01057,
                  8.36825
                ],
                [
                  99.0088,
                  8.37709
                ],
                [
                  99.0095,
                  8.38298
                ],
                [
                  99.02507,
                  8.37082
                ],
                [
                  99.03289,
                  8.36632
                ],
                [
                  99.04173,
                  8.36275
                ],
                [
                  99.05204,
                  8.36043
                ],
                [
                  99.06431,
                  8.3604
                ],
                [
                  99.07246,
                  8.36236
                ],
                [
                  99.0745,
                  8.36401
                ],
                [
                  99.08992,
                  8.3624
                ],
                [
                  99.09725,
                  8.3656
                ],
                [
                  99.11883,
                  8.36698
                ],
                [
                  99.12835,
                  8.36581
                ],
                [
                  99.14317,
                  8.36022
                ],
                [
                  99.14628,
                  8.36214
                ],
                [
                  99.15171,
                  8.36104
                ],
                [
                  99.15818,
                  8.36467
                ],
                [
                  99.16362,
                  8.36948
                ],
                [
                  99.16972,
                  8.36934
                ],
                [
                  99.17441,
                  8.37315
                ],
                [
                  99.17997,
                  8.37158
                ],
                [
                  99.18427,
                  8.37197
                ],
                [
                  99.19599,
                  8.36631
                ],
                [
                  99.20366,
                  8.36752
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810206",
          "tambon": "ต.โคกหาร",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านไสยง",
          "latitude": 8.210164,
          "longitude": 99.22717,
          "sum_rainfall_mm": 20.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.31244,
                  8.23511
                ],
                [
                  99.31202,
                  8.23409
                ],
                [
                  99.31338,
                  8.23403
                ],
                [
                  99.31317,
                  8.23219
                ],
                [
                  99.31539,
                  8.22967
                ],
                [
                  99.31416,
                  8.22908
                ],
                [
                  99.31553,
                  8.22839
                ],
                [
                  99.31725,
                  8.22034
                ],
                [
                  99.31881,
                  8.21843
                ],
                [
                  99.32005,
                  8.21899
                ],
                [
                  99.31934,
                  8.21421
                ],
                [
                  99.32175,
                  8.20951
                ],
                [
                  99.31891,
                  8.20558
                ],
                [
                  99.31992,
                  8.20462
                ],
                [
                  99.3184,
                  8.20417
                ],
                [
                  99.3189,
                  8.20271
                ],
                [
                  99.32044,
                  8.20228
                ],
                [
                  99.3181,
                  8.19743
                ],
                [
                  99.31619,
                  8.19669
                ],
                [
                  99.3168,
                  8.19492
                ],
                [
                  99.31511,
                  8.19351
                ],
                [
                  99.31162,
                  8.19509
                ],
                [
                  99.31062,
                  8.19326
                ],
                [
                  99.3071,
                  8.19194
                ],
                [
                  99.30829,
                  8.19039
                ],
                [
                  99.30542,
                  8.18992
                ],
                [
                  99.30708,
                  8.18936
                ],
                [
                  99.30589,
                  8.18746
                ],
                [
                  99.30746,
                  8.18514
                ],
                [
                  99.3061,
                  8.184
                ],
                [
                  99.30813,
                  8.18139
                ],
                [
                  99.30714,
                  8.17914
                ],
                [
                  99.30861,
                  8.17907
                ],
                [
                  99.30697,
                  8.17477
                ],
                [
                  99.3028,
                  8.17006
                ],
                [
                  99.29934,
                  8.1719
                ],
                [
                  99.29814,
                  8.17093
                ],
                [
                  99.29787,
                  8.16747
                ],
                [
                  99.29666,
                  8.16862
                ],
                [
                  99.29656,
                  8.16717
                ],
                [
                  99.28989,
                  8.16568
                ],
                [
                  99.29011,
                  8.16109
                ],
                [
                  99.28902,
                  8.16077
                ],
                [
                  99.29,
                  8.15918
                ],
                [
                  99.28977,
                  8.15593
                ],
                [
                  99.28834,
                  8.15521
                ],
                [
                  99.29099,
                  8.15338
                ],
                [
                  99.28863,
                  8.15159
                ],
                [
                  99.29386,
                  8.14946
                ],
                [
                  99.29344,
                  8.1466
                ],
                [
                  99.29549,
                  8.14719
                ],
                [
                  99.29898,
                  8.14132
                ],
                [
                  99.29676,
                  8.14081
                ],
                [
                  99.29711,
                  8.13625
                ],
                [
                  99.29557,
                  8.13556
                ],
                [
                  99.29642,
                  8.13191
                ],
                [
                  99.28096,
                  8.12976
                ],
                [
                  99.25657,
                  8.12256
                ],
                [
                  99.24624,
                  8.12523
                ],
                [
                  99.23759,
                  8.12399
                ],
                [
                  99.23199,
                  8.1219
                ],
                [
                  99.22783,
                  8.12456
                ],
                [
                  99.21969,
                  8.12408
                ],
                [
                  99.21686,
                  8.12793
                ],
                [
                  99.21594,
                  8.1394
                ],
                [
                  99.21711,
                  8.14383
                ],
                [
                  99.21482,
                  8.15238
                ],
                [
                  99.22201,
                  8.15596
                ],
                [
                  99.22443,
                  8.15918
                ],
                [
                  99.22444,
                  8.16812
                ],
                [
                  99.22312,
                  8.16982
                ],
                [
                  99.22011,
                  8.17067
                ],
                [
                  99.21036,
                  8.1697
                ],
                [
                  99.18444,
                  8.15787
                ],
                [
                  99.18088,
                  8.15752
                ],
                [
                  99.18103,
                  8.16727
                ],
                [
                  99.17865,
                  8.17846
                ],
                [
                  99.18056,
                  8.18339
                ],
                [
                  99.18163,
                  8.1915
                ],
                [
                  99.18717,
                  8.19854
                ],
                [
                  99.19019,
                  8.20532
                ],
                [
                  99.19054,
                  8.21344
                ],
                [
                  99.18727,
                  8.22043
                ],
                [
                  99.18826,
                  8.22389
                ],
                [
                  99.20109,
                  8.22001
                ],
                [
                  99.2032,
                  8.2274
                ],
                [
                  99.20894,
                  8.23448
                ],
                [
                  99.21216,
                  8.23599
                ],
                [
                  99.22945,
                  8.23795
                ],
                [
                  99.23609,
                  8.24249
                ],
                [
                  99.25075,
                  8.24218
                ],
                [
                  99.25976,
                  8.24417
                ],
                [
                  99.27112,
                  8.2431
                ],
                [
                  99.2765,
                  8.24373
                ],
                [
                  99.28912,
                  8.24036
                ],
                [
                  99.29558,
                  8.2402
                ],
                [
                  99.30059,
                  8.237
                ],
                [
                  99.31244,
                  8.23511
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810204",
          "tambon": "ต.พรุเตียว",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านบางเหรียง",
          "latitude": 8.243599,
          "longitude": 99.141692,
          "sum_rainfall_mm": 78.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.17409,
                  8.31853
                ],
                [
                  99.17507,
                  8.29623
                ],
                [
                  99.18234,
                  8.28529
                ],
                [
                  99.18342,
                  8.28111
                ],
                [
                  99.18456,
                  8.2603
                ],
                [
                  99.18336,
                  8.25295
                ],
                [
                  99.18966,
                  8.24616
                ],
                [
                  99.19244,
                  8.23692
                ],
                [
                  99.19158,
                  8.23314
                ],
                [
                  99.18616,
                  8.22785
                ],
                [
                  99.18826,
                  8.22389
                ],
                [
                  99.18747,
                  8.21918
                ],
                [
                  99.19054,
                  8.21344
                ],
                [
                  99.18989,
                  8.20397
                ],
                [
                  99.18717,
                  8.19854
                ],
                [
                  99.18163,
                  8.1915
                ],
                [
                  99.18056,
                  8.18339
                ],
                [
                  99.17865,
                  8.17846
                ],
                [
                  99.18103,
                  8.16727
                ],
                [
                  99.18088,
                  8.15752
                ],
                [
                  99.17193,
                  8.16085
                ],
                [
                  99.17115,
                  8.16268
                ],
                [
                  99.17176,
                  8.1718
                ],
                [
                  99.16662,
                  8.17871
                ],
                [
                  99.15861,
                  8.17952
                ],
                [
                  99.14502,
                  8.18436
                ],
                [
                  99.12906,
                  8.18793
                ],
                [
                  99.1265,
                  8.19962
                ],
                [
                  99.12688,
                  8.20605
                ],
                [
                  99.12261,
                  8.23458
                ],
                [
                  99.09849,
                  8.23059
                ],
                [
                  99.09484,
                  8.21854
                ],
                [
                  99.08757,
                  8.20353
                ],
                [
                  99.08072,
                  8.17697
                ],
                [
                  99.08178,
                  8.1915
                ],
                [
                  99.08113,
                  8.2386
                ],
                [
                  99.07743,
                  8.24579
                ],
                [
                  99.07775,
                  8.25052
                ],
                [
                  99.06974,
                  8.25205
                ],
                [
                  99.06747,
                  8.25375
                ],
                [
                  99.0681,
                  8.26041
                ],
                [
                  99.06491,
                  8.27001
                ],
                [
                  99.06726,
                  8.27563
                ],
                [
                  99.0699,
                  8.27582
                ],
                [
                  99.07146,
                  8.28022
                ],
                [
                  99.07103,
                  8.28183
                ],
                [
                  99.06741,
                  8.28439
                ],
                [
                  99.0677,
                  8.28605
                ],
                [
                  99.06486,
                  8.29117
                ],
                [
                  99.06398,
                  8.29546
                ],
                [
                  99.06458,
                  8.30002
                ],
                [
                  99.06308,
                  8.30206
                ],
                [
                  99.06502,
                  8.31859
                ],
                [
                  99.06647,
                  8.32311
                ],
                [
                  99.09173,
                  8.32251
                ],
                [
                  99.11845,
                  8.31798
                ],
                [
                  99.13817,
                  8.3186
                ],
                [
                  99.14133,
                  8.31576
                ],
                [
                  99.14734,
                  8.31924
                ],
                [
                  99.15181,
                  8.31884
                ],
                [
                  99.156,
                  8.31764
                ],
                [
                  99.16256,
                  8.31294
                ],
                [
                  99.16863,
                  8.31508
                ],
                [
                  99.17409,
                  8.31853
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810203",
          "tambon": "ต.สินปุน",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านหน้าช่องฉันทนา (บ้านไสใหญ่)",
          "latitude": 8.244067,
          "longitude": 99.209211,
          "sum_rainfall_mm": 16.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.22556,
                  8.32192
                ],
                [
                  99.23783,
                  8.31434
                ],
                [
                  99.26244,
                  8.30232
                ],
                [
                  99.268,
                  8.30267
                ],
                [
                  99.27261,
                  8.30072
                ],
                [
                  99.27709,
                  8.3014
                ],
                [
                  99.28993,
                  8.30904
                ],
                [
                  99.29246,
                  8.31275
                ],
                [
                  99.29396,
                  8.31253
                ],
                [
                  99.29407,
                  8.31412
                ],
                [
                  99.29552,
                  8.31425
                ],
                [
                  99.29635,
                  8.31586
                ],
                [
                  99.29966,
                  8.31553
                ],
                [
                  99.29863,
                  8.31137
                ],
                [
                  99.30048,
                  8.3108
                ],
                [
                  99.29857,
                  8.30679
                ],
                [
                  99.30101,
                  8.30681
                ],
                [
                  99.30117,
                  8.30789
                ],
                [
                  99.30293,
                  8.30721
                ],
                [
                  99.30258,
                  8.30429
                ],
                [
                  99.30412,
                  8.30527
                ],
                [
                  99.30622,
                  8.30465
                ],
                [
                  99.30607,
                  8.30359
                ],
                [
                  99.30794,
                  8.30329
                ],
                [
                  99.30853,
                  8.30152
                ],
                [
                  99.3129,
                  8.30055
                ],
                [
                  99.31584,
                  8.29619
                ],
                [
                  99.31776,
                  8.29634
                ],
                [
                  99.3175,
                  8.29453
                ],
                [
                  99.31864,
                  8.29425
                ],
                [
                  99.31921,
                  8.29563
                ],
                [
                  99.32136,
                  8.2939
                ],
                [
                  99.32463,
                  8.29638
                ],
                [
                  99.32544,
                  8.2948
                ],
                [
                  99.32812,
                  8.29369
                ],
                [
                  99.32732,
                  8.29187
                ],
                [
                  99.32984,
                  8.29216
                ],
                [
                  99.33092,
                  8.29113
                ],
                [
                  99.33222,
                  8.28546
                ],
                [
                  99.33128,
                  8.28229
                ],
                [
                  99.33244,
                  8.28159
                ],
                [
                  99.33123,
                  8.28044
                ],
                [
                  99.33283,
                  8.27942
                ],
                [
                  99.33353,
                  8.2762
                ],
                [
                  99.33221,
                  8.27378
                ],
                [
                  99.33596,
                  8.26941
                ],
                [
                  99.33423,
                  8.26775
                ],
                [
                  99.33408,
                  8.26242
                ],
                [
                  99.33141,
                  8.261
                ],
                [
                  99.3333,
                  8.25763
                ],
                [
                  99.33007,
                  8.25544
                ],
                [
                  99.32819,
                  8.25603
                ],
                [
                  99.32627,
                  8.25367
                ],
                [
                  99.32399,
                  8.25282
                ],
                [
                  99.32385,
                  8.25156
                ],
                [
                  99.32268,
                  8.25162
                ],
                [
                  99.3215,
                  8.24829
                ],
                [
                  99.31962,
                  8.24737
                ],
                [
                  99.32076,
                  8.24572
                ],
                [
                  99.32045,
                  8.24363
                ],
                [
                  99.31476,
                  8.2417
                ],
                [
                  99.31525,
                  8.24066
                ],
                [
                  99.31363,
                  8.23929
                ],
                [
                  99.3152,
                  8.23872
                ],
                [
                  99.31458,
                  8.23632
                ],
                [
                  99.31295,
                  8.2365
                ],
                [
                  99.31246,
                  8.23511
                ],
                [
                  99.30059,
                  8.237
                ],
                [
                  99.29558,
                  8.2402
                ],
                [
                  99.28912,
                  8.24036
                ],
                [
                  99.2765,
                  8.24373
                ],
                [
                  99.27112,
                  8.2431
                ],
                [
                  99.25976,
                  8.24417
                ],
                [
                  99.25075,
                  8.24218
                ],
                [
                  99.23609,
                  8.24249
                ],
                [
                  99.22945,
                  8.23795
                ],
                [
                  99.21216,
                  8.23599
                ],
                [
                  99.20894,
                  8.23448
                ],
                [
                  99.2032,
                  8.2274
                ],
                [
                  99.20109,
                  8.22001
                ],
                [
                  99.18826,
                  8.22389
                ],
                [
                  99.18628,
                  8.22837
                ],
                [
                  99.19158,
                  8.23314
                ],
                [
                  99.19229,
                  8.23862
                ],
                [
                  99.18939,
                  8.2466
                ],
                [
                  99.18336,
                  8.25295
                ],
                [
                  99.18456,
                  8.2603
                ],
                [
                  99.18342,
                  8.28111
                ],
                [
                  99.18234,
                  8.28529
                ],
                [
                  99.17507,
                  8.29623
                ],
                [
                  99.17409,
                  8.31853
                ],
                [
                  99.18496,
                  8.31372
                ],
                [
                  99.19244,
                  8.31665
                ],
                [
                  99.20318,
                  8.31662
                ],
                [
                  99.2137,
                  8.31938
                ],
                [
                  99.2207,
                  8.32537
                ],
                [
                  99.22556,
                  8.32192
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810203",
          "tambon": "ต.สินปุน",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "อบต.สินปุน",
          "latitude": 8.25222,
          "longitude": 99.27451,
          "sum_rainfall_mm": 43.99999999999999,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.22556,
                  8.32192
                ],
                [
                  99.23783,
                  8.31434
                ],
                [
                  99.26244,
                  8.30232
                ],
                [
                  99.268,
                  8.30267
                ],
                [
                  99.27261,
                  8.30072
                ],
                [
                  99.27709,
                  8.3014
                ],
                [
                  99.28993,
                  8.30904
                ],
                [
                  99.29246,
                  8.31275
                ],
                [
                  99.29396,
                  8.31253
                ],
                [
                  99.29407,
                  8.31412
                ],
                [
                  99.29552,
                  8.31425
                ],
                [
                  99.29635,
                  8.31586
                ],
                [
                  99.29966,
                  8.31553
                ],
                [
                  99.29863,
                  8.31137
                ],
                [
                  99.30048,
                  8.3108
                ],
                [
                  99.29857,
                  8.30679
                ],
                [
                  99.30101,
                  8.30681
                ],
                [
                  99.30117,
                  8.30789
                ],
                [
                  99.30293,
                  8.30721
                ],
                [
                  99.30258,
                  8.30429
                ],
                [
                  99.30412,
                  8.30527
                ],
                [
                  99.30622,
                  8.30465
                ],
                [
                  99.30607,
                  8.30359
                ],
                [
                  99.30794,
                  8.30329
                ],
                [
                  99.30853,
                  8.30152
                ],
                [
                  99.3129,
                  8.30055
                ],
                [
                  99.31584,
                  8.29619
                ],
                [
                  99.31776,
                  8.29634
                ],
                [
                  99.3175,
                  8.29453
                ],
                [
                  99.31864,
                  8.29425
                ],
                [
                  99.31921,
                  8.29563
                ],
                [
                  99.32136,
                  8.2939
                ],
                [
                  99.32463,
                  8.29638
                ],
                [
                  99.32544,
                  8.2948
                ],
                [
                  99.32812,
                  8.29369
                ],
                [
                  99.32732,
                  8.29187
                ],
                [
                  99.32984,
                  8.29216
                ],
                [
                  99.33092,
                  8.29113
                ],
                [
                  99.33222,
                  8.28546
                ],
                [
                  99.33128,
                  8.28229
                ],
                [
                  99.33244,
                  8.28159
                ],
                [
                  99.33123,
                  8.28044
                ],
                [
                  99.33283,
                  8.27942
                ],
                [
                  99.33353,
                  8.2762
                ],
                [
                  99.33221,
                  8.27378
                ],
                [
                  99.33596,
                  8.26941
                ],
                [
                  99.33423,
                  8.26775
                ],
                [
                  99.33408,
                  8.26242
                ],
                [
                  99.33141,
                  8.261
                ],
                [
                  99.3333,
                  8.25763
                ],
                [
                  99.33007,
                  8.25544
                ],
                [
                  99.32819,
                  8.25603
                ],
                [
                  99.32627,
                  8.25367
                ],
                [
                  99.32399,
                  8.25282
                ],
                [
                  99.32385,
                  8.25156
                ],
                [
                  99.32268,
                  8.25162
                ],
                [
                  99.3215,
                  8.24829
                ],
                [
                  99.31962,
                  8.24737
                ],
                [
                  99.32076,
                  8.24572
                ],
                [
                  99.32045,
                  8.24363
                ],
                [
                  99.31476,
                  8.2417
                ],
                [
                  99.31525,
                  8.24066
                ],
                [
                  99.31363,
                  8.23929
                ],
                [
                  99.3152,
                  8.23872
                ],
                [
                  99.31458,
                  8.23632
                ],
                [
                  99.31295,
                  8.2365
                ],
                [
                  99.31246,
                  8.23511
                ],
                [
                  99.30059,
                  8.237
                ],
                [
                  99.29558,
                  8.2402
                ],
                [
                  99.28912,
                  8.24036
                ],
                [
                  99.2765,
                  8.24373
                ],
                [
                  99.27112,
                  8.2431
                ],
                [
                  99.25976,
                  8.24417
                ],
                [
                  99.25075,
                  8.24218
                ],
                [
                  99.23609,
                  8.24249
                ],
                [
                  99.22945,
                  8.23795
                ],
                [
                  99.21216,
                  8.23599
                ],
                [
                  99.20894,
                  8.23448
                ],
                [
                  99.2032,
                  8.2274
                ],
                [
                  99.20109,
                  8.22001
                ],
                [
                  99.18826,
                  8.22389
                ],
                [
                  99.18628,
                  8.22837
                ],
                [
                  99.19158,
                  8.23314
                ],
                [
                  99.19229,
                  8.23862
                ],
                [
                  99.18939,
                  8.2466
                ],
                [
                  99.18336,
                  8.25295
                ],
                [
                  99.18456,
                  8.2603
                ],
                [
                  99.18342,
                  8.28111
                ],
                [
                  99.18234,
                  8.28529
                ],
                [
                  99.17507,
                  8.29623
                ],
                [
                  99.17409,
                  8.31853
                ],
                [
                  99.18496,
                  8.31372
                ],
                [
                  99.19244,
                  8.31665
                ],
                [
                  99.20318,
                  8.31662
                ],
                [
                  99.2137,
                  8.31938
                ],
                [
                  99.2207,
                  8.32537
                ],
                [
                  99.22556,
                  8.32192
                ]
              ]
            ]
          }
        },
        {
          "geocode": "810205",
          "tambon": "ต.หน้าเขา",
          "amphoe": "อ.เขาพนม",
          "province": "จ.กระบี่",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านต้นหาร",
          "latitude": 8.309862,
          "longitude": 98.968714,
          "sum_rainfall_mm": 31.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.94046,
                  8.44823
                ],
                [
                  98.93875,
                  8.44315
                ],
                [
                  98.93911,
                  8.43854
                ],
                [
                  98.94307,
                  8.43485
                ],
                [
                  98.9436,
                  8.43169
                ],
                [
                  98.94715,
                  8.42546
                ],
                [
                  98.97005,
                  8.41726
                ],
                [
                  98.9954,
                  8.39534
                ],
                [
                  98.99727,
                  8.3921
                ],
                [
                  99.0095,
                  8.38298
                ],
                [
                  99.0088,
                  8.37709
                ],
                [
                  99.01057,
                  8.36825
                ],
                [
                  99.00653,
                  8.35468
                ],
                [
                  99.00826,
                  8.35295
                ],
                [
                  99.01093,
                  8.35267
                ],
                [
                  99.01308,
                  8.35
                ],
                [
                  99.01936,
                  8.34989
                ],
                [
                  99.0209,
                  8.34622
                ],
                [
                  99.02449,
                  8.34259
                ],
                [
                  99.02888,
                  8.34231
                ],
                [
                  99.02749,
                  8.34044
                ],
                [
                  99.02676,
                  8.33544
                ],
                [
                  99.02433,
                  8.33203
                ],
                [
                  99.02702,
                  8.3292
                ],
                [
                  99.0298,
                  8.3235
                ],
                [
                  99.02677,
                  8.30977
                ],
                [
                  99.02685,
                  8.30139
                ],
                [
                  99.03162,
                  8.29044
                ],
                [
                  99.03002,
                  8.28648
                ],
                [
                  99.02711,
                  8.28485
                ],
                [
                  99.02231,
                  8.27827
                ],
                [
                  99.01885,
                  8.27675
                ],
                [
                  99.01759,
                  8.27436
                ],
                [
                  99.00779,
                  8.27408
                ],
                [
                  98.99988,
                  8.27798
                ],
                [
                  98.99871,
                  8.27958
                ],
                [
                  98.98947,
                  8.2768
                ],
                [
                  98.98289,
                  8.28135
                ],
                [
                  98.97439,
                  8.27865
                ],
                [
                  98.97108,
                  8.27909
                ],
                [
                  98.96695,
                  8.2813
                ],
                [
                  98.96278,
                  8.27866
                ],
                [
                  98.93395,
                  8.27928
                ],
                [
                  98.93004,
                  8.28187
                ],
                [
                  98.92563,
                  8.28243
                ],
                [
                  98.91778,
                  8.27903
                ],
                [
                  98.91538,
                  8.27691
                ],
                [
                  98.90789,
                  8.28836
                ],
                [
                  98.90676,
                  8.29265
                ],
                [
                  98.90778,
                  8.31582
                ],
                [
                  98.91207,
                  8.32328
                ],
                [
                  98.91661,
                  8.32619
                ],
                [
                  98.9183,
                  8.33083
                ],
                [
                  98.91644,
                  8.33478
                ],
                [
                  98.91657,
                  8.33951
                ],
                [
                  98.92066,
                  8.34379
                ],
                [
                  98.92112,
                  8.35184
                ],
                [
                  98.92503,
                  8.35676
                ],
                [
                  98.92089,
                  8.36358
                ],
                [
                  98.92179,
                  8.36567
                ],
                [
                  98.92158,
                  8.37128
                ],
                [
                  98.92362,
                  8.37351
                ],
                [
                  98.92341,
                  8.37647
                ],
                [
                  98.92637,
                  8.37801
                ],
                [
                  98.92701,
                  8.38027
                ],
                [
                  98.92601,
                  8.39008
                ],
                [
                  98.92338,
                  8.39302
                ],
                [
                  98.92582,
                  8.39766
                ],
                [
                  98.92541,
                  8.40123
                ],
                [
                  98.92778,
                  8.40472
                ],
                [
                  98.92526,
                  8.40874
                ],
                [
                  98.92585,
                  8.41429
                ],
                [
                  98.92752,
                  8.41593
                ],
                [
                  98.92708,
                  8.4189
                ],
                [
                  98.92858,
                  8.42199
                ],
                [
                  98.92757,
                  8.42519
                ],
                [
                  98.92857,
                  8.4283
                ],
                [
                  98.92533,
                  8.4374
                ],
                [
                  98.92669,
                  8.44146
                ],
                [
                  98.92566,
                  8.44694
                ],
                [
                  98.92662,
                  8.44934
                ],
                [
                  98.93262,
                  8.45366
                ],
                [
                  98.94059,
                  8.45643
                ],
                [
                  98.94215,
                  8.45219
                ],
                [
                  98.94046,
                  8.44823
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850101",
          "tambon": "ต.เขานิเวศน์",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "เมืองระนอง",
          "latitude": 9.961575,
          "longitude": 98.644485,
          "sum_rainfall_mm": 26.599999999999998,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.65151,
                  9.95844
                ],
                [
                  98.64647,
                  9.95887
                ],
                [
                  98.64136,
                  9.96254
                ],
                [
                  98.63356,
                  9.95699
                ],
                [
                  98.62526,
                  9.95801
                ],
                [
                  98.62033,
                  9.95596
                ],
                [
                  98.61718,
                  9.95718
                ],
                [
                  98.61524,
                  9.9597
                ],
                [
                  98.61208,
                  9.9589
                ],
                [
                  98.61065,
                  9.95964
                ],
                [
                  98.61382,
                  9.96367
                ],
                [
                  98.61925,
                  9.96488
                ],
                [
                  98.62963,
                  9.96052
                ],
                [
                  98.63164,
                  9.96522
                ],
                [
                  98.6306,
                  9.9697
                ],
                [
                  98.63133,
                  9.97248
                ],
                [
                  98.62987,
                  9.97448
                ],
                [
                  98.62933,
                  9.97857
                ],
                [
                  98.63534,
                  9.98013
                ],
                [
                  98.63924,
                  9.97998
                ],
                [
                  98.64341,
                  9.96891
                ],
                [
                  98.64684,
                  9.96438
                ],
                [
                  98.64689,
                  9.96191
                ],
                [
                  98.65109,
                  9.95979
                ],
                [
                  98.65151,
                  9.95844
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850108",
          "tambon": "ต.ทรายแดง",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านน้ำตก",
          "latitude": 10.085445,
          "longitude": 98.669169,
          "sum_rainfall_mm": 18.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.73209,
                  10.16138
                ],
                [
                  98.73206,
                  10.15689
                ],
                [
                  98.73401,
                  10.15259
                ],
                [
                  98.73133,
                  10.1462
                ],
                [
                  98.72473,
                  10.14171
                ],
                [
                  98.71629,
                  10.14082
                ],
                [
                  98.71277,
                  10.13784
                ],
                [
                  98.71293,
                  10.13411
                ],
                [
                  98.70998,
                  10.12693
                ],
                [
                  98.70438,
                  10.11966
                ],
                [
                  98.70511,
                  10.10818
                ],
                [
                  98.70057,
                  10.10362
                ],
                [
                  98.69464,
                  10.1064
                ],
                [
                  98.69072,
                  10.10519
                ],
                [
                  98.68852,
                  10.10245
                ],
                [
                  98.68561,
                  10.09624
                ],
                [
                  98.68484,
                  10.09188
                ],
                [
                  98.6851,
                  10.08765
                ],
                [
                  98.68396,
                  10.08388
                ],
                [
                  98.68565,
                  10.08124
                ],
                [
                  98.68009,
                  10.07327
                ],
                [
                  98.68123,
                  10.06334
                ],
                [
                  98.68417,
                  10.06261
                ],
                [
                  98.68261,
                  10.05975
                ],
                [
                  98.67314,
                  10.05707
                ],
                [
                  98.67121,
                  10.05903
                ],
                [
                  98.66949,
                  10.06799
                ],
                [
                  98.6667,
                  10.07437
                ],
                [
                  98.6648,
                  10.07566
                ],
                [
                  98.66529,
                  10.07937
                ],
                [
                  98.6671,
                  10.08192
                ],
                [
                  98.66736,
                  10.08674
                ],
                [
                  98.66509,
                  10.09116
                ],
                [
                  98.66346,
                  10.09123
                ],
                [
                  98.66167,
                  10.08946
                ],
                [
                  98.65984,
                  10.09042
                ],
                [
                  98.65844,
                  10.09327
                ],
                [
                  98.65716,
                  10.09103
                ],
                [
                  98.65509,
                  10.09175
                ],
                [
                  98.65362,
                  10.08862
                ],
                [
                  98.63308,
                  10.08868
                ],
                [
                  98.63421,
                  10.10378
                ],
                [
                  98.63574,
                  10.10774
                ],
                [
                  98.64076,
                  10.11428
                ],
                [
                  98.64166,
                  10.11786
                ],
                [
                  98.63935,
                  10.13199
                ],
                [
                  98.64504,
                  10.1417
                ],
                [
                  98.65514,
                  10.16676
                ],
                [
                  98.66318,
                  10.1685
                ],
                [
                  98.67192,
                  10.17511
                ],
                [
                  98.68058,
                  10.17133
                ],
                [
                  98.68497,
                  10.1711
                ],
                [
                  98.69309,
                  10.17628
                ],
                [
                  98.69903,
                  10.18281
                ],
                [
                  98.70175,
                  10.18395
                ],
                [
                  98.71192,
                  10.17565
                ],
                [
                  98.72134,
                  10.17029
                ],
                [
                  98.72701,
                  10.16832
                ],
                [
                  98.73209,
                  10.16138
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850108",
          "tambon": "ต.ทรายแดง",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านทรายแดง",
          "latitude": 10.156317,
          "longitude": 98.697453,
          "sum_rainfall_mm": 5.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.73209,
                  10.16138
                ],
                [
                  98.73206,
                  10.15689
                ],
                [
                  98.73401,
                  10.15259
                ],
                [
                  98.73133,
                  10.1462
                ],
                [
                  98.72473,
                  10.14171
                ],
                [
                  98.71629,
                  10.14082
                ],
                [
                  98.71277,
                  10.13784
                ],
                [
                  98.71293,
                  10.13411
                ],
                [
                  98.70998,
                  10.12693
                ],
                [
                  98.70438,
                  10.11966
                ],
                [
                  98.70511,
                  10.10818
                ],
                [
                  98.70057,
                  10.10362
                ],
                [
                  98.69464,
                  10.1064
                ],
                [
                  98.69072,
                  10.10519
                ],
                [
                  98.68852,
                  10.10245
                ],
                [
                  98.68561,
                  10.09624
                ],
                [
                  98.68484,
                  10.09188
                ],
                [
                  98.6851,
                  10.08765
                ],
                [
                  98.68396,
                  10.08388
                ],
                [
                  98.68565,
                  10.08124
                ],
                [
                  98.68009,
                  10.07327
                ],
                [
                  98.68123,
                  10.06334
                ],
                [
                  98.68417,
                  10.06261
                ],
                [
                  98.68261,
                  10.05975
                ],
                [
                  98.67314,
                  10.05707
                ],
                [
                  98.67121,
                  10.05903
                ],
                [
                  98.66949,
                  10.06799
                ],
                [
                  98.6667,
                  10.07437
                ],
                [
                  98.6648,
                  10.07566
                ],
                [
                  98.66529,
                  10.07937
                ],
                [
                  98.6671,
                  10.08192
                ],
                [
                  98.66736,
                  10.08674
                ],
                [
                  98.66509,
                  10.09116
                ],
                [
                  98.66346,
                  10.09123
                ],
                [
                  98.66167,
                  10.08946
                ],
                [
                  98.65984,
                  10.09042
                ],
                [
                  98.65844,
                  10.09327
                ],
                [
                  98.65716,
                  10.09103
                ],
                [
                  98.65509,
                  10.09175
                ],
                [
                  98.65362,
                  10.08862
                ],
                [
                  98.63308,
                  10.08868
                ],
                [
                  98.63421,
                  10.10378
                ],
                [
                  98.63574,
                  10.10774
                ],
                [
                  98.64076,
                  10.11428
                ],
                [
                  98.64166,
                  10.11786
                ],
                [
                  98.63935,
                  10.13199
                ],
                [
                  98.64504,
                  10.1417
                ],
                [
                  98.65514,
                  10.16676
                ],
                [
                  98.66318,
                  10.1685
                ],
                [
                  98.67192,
                  10.17511
                ],
                [
                  98.68058,
                  10.17133
                ],
                [
                  98.68497,
                  10.1711
                ],
                [
                  98.69309,
                  10.17628
                ],
                [
                  98.69903,
                  10.18281
                ],
                [
                  98.70175,
                  10.18395
                ],
                [
                  98.71192,
                  10.17565
                ],
                [
                  98.72134,
                  10.17029
                ],
                [
                  98.72701,
                  10.16832
                ],
                [
                  98.73209,
                  10.16138
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850106",
          "tambon": "ต.บางนอน",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านบางนอนนอก",
          "latitude": 9.994826,
          "longitude": 98.647922,
          "sum_rainfall_mm": 35.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.68261,
                  10.05975
                ],
                [
                  98.68181,
                  10.05112
                ],
                [
                  98.68272,
                  10.04663
                ],
                [
                  98.68077,
                  10.04372
                ],
                [
                  98.68021,
                  10.03862
                ],
                [
                  98.68265,
                  10.03066
                ],
                [
                  98.68107,
                  10.02829
                ],
                [
                  98.68151,
                  10.02526
                ],
                [
                  98.67994,
                  10.01594
                ],
                [
                  98.68128,
                  10.01468
                ],
                [
                  98.68476,
                  10.01439
                ],
                [
                  98.68568,
                  10.00736
                ],
                [
                  98.69136,
                  10.00425
                ],
                [
                  98.69294,
                  10.00219
                ],
                [
                  98.69504,
                  9.99743
                ],
                [
                  98.69326,
                  9.99243
                ],
                [
                  98.69472,
                  9.98853
                ],
                [
                  98.68291,
                  9.98466
                ],
                [
                  98.67759,
                  9.98159
                ],
                [
                  98.67756,
                  9.97772
                ],
                [
                  98.67194,
                  9.96957
                ],
                [
                  98.66297,
                  9.96536
                ],
                [
                  98.66306,
                  9.96747
                ],
                [
                  98.66129,
                  9.96669
                ],
                [
                  98.65291,
                  9.95834
                ],
                [
                  98.64689,
                  9.96191
                ],
                [
                  98.64684,
                  9.96438
                ],
                [
                  98.64341,
                  9.96891
                ],
                [
                  98.63924,
                  9.97998
                ],
                [
                  98.63534,
                  9.98013
                ],
                [
                  98.62933,
                  9.97857
                ],
                [
                  98.62987,
                  9.97448
                ],
                [
                  98.63133,
                  9.97248
                ],
                [
                  98.6306,
                  9.9697
                ],
                [
                  98.63164,
                  9.96522
                ],
                [
                  98.62963,
                  9.96052
                ],
                [
                  98.61925,
                  9.96488
                ],
                [
                  98.61382,
                  9.96367
                ],
                [
                  98.61065,
                  9.95964
                ],
                [
                  98.60415,
                  9.95611
                ],
                [
                  98.60085,
                  9.95605
                ],
                [
                  98.59784,
                  9.95753
                ],
                [
                  98.59954,
                  9.96139
                ],
                [
                  98.6051,
                  9.96056
                ],
                [
                  98.60603,
                  9.96643
                ],
                [
                  98.60466,
                  9.97017
                ],
                [
                  98.60877,
                  9.97884
                ],
                [
                  98.61084,
                  9.98025
                ],
                [
                  98.61014,
                  9.98453
                ],
                [
                  98.61987,
                  9.99404
                ],
                [
                  98.62134,
                  9.99821
                ],
                [
                  98.6211,
                  10.00183
                ],
                [
                  98.62255,
                  10.00217
                ],
                [
                  98.62582,
                  10.008
                ],
                [
                  98.62998,
                  10.01126
                ],
                [
                  98.63032,
                  10.01585
                ],
                [
                  98.63544,
                  10.02462
                ],
                [
                  98.6421,
                  10.02841
                ],
                [
                  98.64488,
                  10.03184
                ],
                [
                  98.64688,
                  10.04448
                ],
                [
                  98.65324,
                  10.05906
                ],
                [
                  98.65728,
                  10.0648
                ],
                [
                  98.65794,
                  10.07117
                ],
                [
                  98.6648,
                  10.07566
                ],
                [
                  98.6667,
                  10.07437
                ],
                [
                  98.66949,
                  10.06799
                ],
                [
                  98.67028,
                  10.06098
                ],
                [
                  98.67218,
                  10.05731
                ],
                [
                  98.68261,
                  10.05975
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850104",
          "tambon": "ต.บางริ้น",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านพรรั้ง",
          "latitude": 9.880111,
          "longitude": 98.626948,
          "sum_rainfall_mm": 5.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.65151,
                  9.95844
                ],
                [
                  98.65291,
                  9.95834
                ],
                [
                  98.6524,
                  9.95024
                ],
                [
                  98.66017,
                  9.94638
                ],
                [
                  98.6616,
                  9.94134
                ],
                [
                  98.66132,
                  9.92608
                ],
                [
                  98.6632,
                  9.92264
                ],
                [
                  98.66627,
                  9.90018
                ],
                [
                  98.66479,
                  9.89412
                ],
                [
                  98.66586,
                  9.89165
                ],
                [
                  98.66556,
                  9.88877
                ],
                [
                  98.66852,
                  9.88613
                ],
                [
                  98.66886,
                  9.88237
                ],
                [
                  98.66826,
                  9.87857
                ],
                [
                  98.66609,
                  9.87645
                ],
                [
                  98.65829,
                  9.86212
                ],
                [
                  98.65774,
                  9.85809
                ],
                [
                  98.6552,
                  9.85654
                ],
                [
                  98.6542,
                  9.85451
                ],
                [
                  98.65369,
                  9.85151
                ],
                [
                  98.65575,
                  9.84628
                ],
                [
                  98.65475,
                  9.84345
                ],
                [
                  98.64514,
                  9.84966
                ],
                [
                  98.63987,
                  9.86125
                ],
                [
                  98.63384,
                  9.86665
                ],
                [
                  98.63319,
                  9.87192
                ],
                [
                  98.62821,
                  9.87462
                ],
                [
                  98.62664,
                  9.87669
                ],
                [
                  98.6231,
                  9.87798
                ],
                [
                  98.61992,
                  9.88105
                ],
                [
                  98.61971,
                  9.88351
                ],
                [
                  98.62136,
                  9.88792
                ],
                [
                  98.61602,
                  9.89415
                ],
                [
                  98.61662,
                  9.89852
                ],
                [
                  98.61112,
                  9.89998
                ],
                [
                  98.60974,
                  9.90169
                ],
                [
                  98.6072,
                  9.90072
                ],
                [
                  98.60327,
                  9.90213
                ],
                [
                  98.60162,
                  9.89867
                ],
                [
                  98.60148,
                  9.8938
                ],
                [
                  98.5943,
                  9.89022
                ],
                [
                  98.59128,
                  9.89085
                ],
                [
                  98.58875,
                  9.89363
                ],
                [
                  98.58861,
                  9.89837
                ],
                [
                  98.58672,
                  9.90133
                ],
                [
                  98.57077,
                  9.90988
                ],
                [
                  98.56862,
                  9.9138
                ],
                [
                  98.56753,
                  9.91895
                ],
                [
                  98.56536,
                  9.92202
                ],
                [
                  98.56621,
                  9.92538
                ],
                [
                  98.57065,
                  9.93087
                ],
                [
                  98.57265,
                  9.93184
                ],
                [
                  98.58502,
                  9.93446
                ],
                [
                  98.59556,
                  9.93406
                ],
                [
                  98.59817,
                  9.9351
                ],
                [
                  98.59922,
                  9.94155
                ],
                [
                  98.59497,
                  9.9482
                ],
                [
                  98.59522,
                  9.95188
                ],
                [
                  98.59784,
                  9.95753
                ],
                [
                  98.60085,
                  9.95605
                ],
                [
                  98.60415,
                  9.95611
                ],
                [
                  98.61029,
                  9.95988
                ],
                [
                  98.61208,
                  9.9589
                ],
                [
                  98.61524,
                  9.9597
                ],
                [
                  98.61718,
                  9.95718
                ],
                [
                  98.62033,
                  9.95596
                ],
                [
                  98.62526,
                  9.95801
                ],
                [
                  98.63356,
                  9.95699
                ],
                [
                  98.64136,
                  9.96254
                ],
                [
                  98.64647,
                  9.95887
                ],
                [
                  98.65151,
                  9.95844
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850105",
          "tambon": "ต.ปากน้ำ",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านเขานางหงษ์",
          "latitude": 9.978944,
          "longitude": 98.599994,
          "sum_rainfall_mm": 23.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.52578,
                  9.9132
                ],
                [
                  98.52434,
                  9.91465
                ],
                [
                  98.5253,
                  9.91605
                ],
                [
                  98.52669,
                  9.91482
                ],
                [
                  98.52578,
                  9.9132
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850105",
          "tambon": "ต.ปากน้ำ",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "ทต.ปากน้ำ",
          "latitude": 9.94654,
          "longitude": 98.5952,
          "sum_rainfall_mm": 85.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.52578,
                  9.9132
                ],
                [
                  98.52434,
                  9.91465
                ],
                [
                  98.5253,
                  9.91605
                ],
                [
                  98.52669,
                  9.91482
                ],
                [
                  98.52578,
                  9.9132
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850102",
          "tambon": "ต.ราชกรูด",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านคลองของ",
          "latitude": 9.638162,
          "longitude": 98.551851,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.63475,
                  9.78881
                ],
                [
                  98.63282,
                  9.78893
                ],
                [
                  98.63259,
                  9.78395
                ],
                [
                  98.62937,
                  9.77879
                ],
                [
                  98.6327,
                  9.77024
                ],
                [
                  98.63266,
                  9.76762
                ],
                [
                  98.62643,
                  9.76408
                ],
                [
                  98.63197,
                  9.75737
                ],
                [
                  98.63296,
                  9.7541
                ],
                [
                  98.63181,
                  9.75055
                ],
                [
                  98.63397,
                  9.74563
                ],
                [
                  98.64222,
                  9.73831
                ],
                [
                  98.64184,
                  9.73327
                ],
                [
                  98.63846,
                  9.72982
                ],
                [
                  98.6394,
                  9.72696
                ],
                [
                  98.63815,
                  9.72044
                ],
                [
                  98.64014,
                  9.71661
                ],
                [
                  98.63933,
                  9.71362
                ],
                [
                  98.63649,
                  9.7124
                ],
                [
                  98.63236,
                  9.70823
                ],
                [
                  98.63187,
                  9.70433
                ],
                [
                  98.62176,
                  9.69495
                ],
                [
                  98.62061,
                  9.69212
                ],
                [
                  98.61411,
                  9.68575
                ],
                [
                  98.61241,
                  9.68058
                ],
                [
                  98.60929,
                  9.67715
                ],
                [
                  98.60513,
                  9.67509
                ],
                [
                  98.60385,
                  9.6721
                ],
                [
                  98.60073,
                  9.67003
                ],
                [
                  98.60125,
                  9.66492
                ],
                [
                  98.60001,
                  9.66127
                ],
                [
                  98.59593,
                  9.66004
                ],
                [
                  98.59288,
                  9.6573
                ],
                [
                  98.59023,
                  9.65238
                ],
                [
                  98.58435,
                  9.64977
                ],
                [
                  98.58435,
                  9.64656
                ],
                [
                  98.5875,
                  9.64102
                ],
                [
                  98.58718,
                  9.63915
                ],
                [
                  98.57886,
                  9.63501
                ],
                [
                  98.5545,
                  9.6149
                ],
                [
                  98.55223,
                  9.61616
                ],
                [
                  98.55013,
                  9.62024
                ],
                [
                  98.54668,
                  9.62078
                ],
                [
                  98.54548,
                  9.62314
                ],
                [
                  98.53228,
                  9.62643
                ],
                [
                  98.53308,
                  9.63115
                ],
                [
                  98.52845,
                  9.63274
                ],
                [
                  98.52586,
                  9.63575
                ],
                [
                  98.51433,
                  9.63459
                ],
                [
                  98.50632,
                  9.62887
                ],
                [
                  98.50109,
                  9.62976
                ],
                [
                  98.50007,
                  9.63474
                ],
                [
                  98.50543,
                  9.63905
                ],
                [
                  98.50834,
                  9.64321
                ],
                [
                  98.51104,
                  9.65204
                ],
                [
                  98.51058,
                  9.65357
                ],
                [
                  98.51319,
                  9.65405
                ],
                [
                  98.52073,
                  9.65232
                ],
                [
                  98.5243,
                  9.65302
                ],
                [
                  98.52468,
                  9.65456
                ],
                [
                  98.52367,
                  9.65566
                ],
                [
                  98.51411,
                  9.65803
                ],
                [
                  98.50983,
                  9.65731
                ],
                [
                  98.50308,
                  9.6587
                ],
                [
                  98.50027,
                  9.65699
                ],
                [
                  98.50012,
                  9.65267
                ],
                [
                  98.49817,
                  9.65251
                ],
                [
                  98.49582,
                  9.66143
                ],
                [
                  98.49189,
                  9.66289
                ],
                [
                  98.49203,
                  9.66884
                ],
                [
                  98.49009,
                  9.67137
                ],
                [
                  98.48921,
                  9.67994
                ],
                [
                  98.48785,
                  9.6815
                ],
                [
                  98.48492,
                  9.6811
                ],
                [
                  98.48457,
                  9.68603
                ],
                [
                  98.4908,
                  9.68563
                ],
                [
                  98.49379,
                  9.68126
                ],
                [
                  98.49755,
                  9.68134
                ],
                [
                  98.49681,
                  9.67718
                ],
                [
                  98.49822,
                  9.67515
                ],
                [
                  98.50023,
                  9.67546
                ],
                [
                  98.50204,
                  9.674
                ],
                [
                  98.50677,
                  9.67447
                ],
                [
                  98.51001,
                  9.67204
                ],
                [
                  98.51778,
                  9.67702
                ],
                [
                  98.52086,
                  9.68104
                ],
                [
                  98.52236,
                  9.67982
                ],
                [
                  98.52545,
                  9.6801
                ],
                [
                  98.52952,
                  9.67753
                ],
                [
                  98.53537,
                  9.67791
                ],
                [
                  98.53503,
                  9.67912
                ],
                [
                  98.52914,
                  9.68186
                ],
                [
                  98.52932,
                  9.68355
                ],
                [
                  98.5318,
                  9.68403
                ],
                [
                  98.53143,
                  9.68618
                ],
                [
                  98.53306,
                  9.68662
                ],
                [
                  98.53199,
                  9.6892
                ],
                [
                  98.5409,
                  9.69839
                ],
                [
                  98.54075,
                  9.70392
                ],
                [
                  98.53894,
                  9.70697
                ],
                [
                  98.54172,
                  9.70618
                ],
                [
                  98.54317,
                  9.7094
                ],
                [
                  98.54266,
                  9.71131
                ],
                [
                  98.54672,
                  9.7151
                ],
                [
                  98.54625,
                  9.71751
                ],
                [
                  98.55119,
                  9.71646
                ],
                [
                  98.54995,
                  9.72342
                ],
                [
                  98.55306,
                  9.72715
                ],
                [
                  98.55722,
                  9.72914
                ],
                [
                  98.55581,
                  9.73526
                ],
                [
                  98.55668,
                  9.73695
                ],
                [
                  98.55376,
                  9.74112
                ],
                [
                  98.55526,
                  9.74835
                ],
                [
                  98.55455,
                  9.74936
                ],
                [
                  98.5615,
                  9.75872
                ],
                [
                  98.55789,
                  9.76483
                ],
                [
                  98.5559,
                  9.77584
                ],
                [
                  98.55231,
                  9.77671
                ],
                [
                  98.55254,
                  9.77925
                ],
                [
                  98.54953,
                  9.78114
                ],
                [
                  98.54824,
                  9.78398
                ],
                [
                  98.54838,
                  9.79143
                ],
                [
                  98.54724,
                  9.79696
                ],
                [
                  98.54815,
                  9.79848
                ],
                [
                  98.56744,
                  9.81549
                ],
                [
                  98.57205,
                  9.82323
                ],
                [
                  98.57328,
                  9.82349
                ],
                [
                  98.57667,
                  9.81947
                ],
                [
                  98.58001,
                  9.82024
                ],
                [
                  98.58132,
                  9.8179
                ],
                [
                  98.58592,
                  9.82022
                ],
                [
                  98.59019,
                  9.82033
                ],
                [
                  98.59536,
                  9.8243
                ],
                [
                  98.59698,
                  9.83242
                ],
                [
                  98.60375,
                  9.83219
                ],
                [
                  98.6062,
                  9.83393
                ],
                [
                  98.60631,
                  9.83144
                ],
                [
                  98.60738,
                  9.83133
                ],
                [
                  98.6079,
                  9.82947
                ],
                [
                  98.61222,
                  9.82749
                ],
                [
                  98.61672,
                  9.81665
                ],
                [
                  98.62257,
                  9.81221
                ],
                [
                  98.62806,
                  9.80347
                ],
                [
                  98.63475,
                  9.78881
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850102",
          "tambon": "ต.ราชกรูด",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านห้วยน้ำใส",
          "latitude": 9.727078,
          "longitude": 98.602777,
          "sum_rainfall_mm": 11.5,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.63475,
                  9.78881
                ],
                [
                  98.63282,
                  9.78893
                ],
                [
                  98.63259,
                  9.78395
                ],
                [
                  98.62937,
                  9.77879
                ],
                [
                  98.6327,
                  9.77024
                ],
                [
                  98.63266,
                  9.76762
                ],
                [
                  98.62643,
                  9.76408
                ],
                [
                  98.63197,
                  9.75737
                ],
                [
                  98.63296,
                  9.7541
                ],
                [
                  98.63181,
                  9.75055
                ],
                [
                  98.63397,
                  9.74563
                ],
                [
                  98.64222,
                  9.73831
                ],
                [
                  98.64184,
                  9.73327
                ],
                [
                  98.63846,
                  9.72982
                ],
                [
                  98.6394,
                  9.72696
                ],
                [
                  98.63815,
                  9.72044
                ],
                [
                  98.64014,
                  9.71661
                ],
                [
                  98.63933,
                  9.71362
                ],
                [
                  98.63649,
                  9.7124
                ],
                [
                  98.63236,
                  9.70823
                ],
                [
                  98.63187,
                  9.70433
                ],
                [
                  98.62176,
                  9.69495
                ],
                [
                  98.62061,
                  9.69212
                ],
                [
                  98.61411,
                  9.68575
                ],
                [
                  98.61241,
                  9.68058
                ],
                [
                  98.60929,
                  9.67715
                ],
                [
                  98.60513,
                  9.67509
                ],
                [
                  98.60385,
                  9.6721
                ],
                [
                  98.60073,
                  9.67003
                ],
                [
                  98.60125,
                  9.66492
                ],
                [
                  98.60001,
                  9.66127
                ],
                [
                  98.59593,
                  9.66004
                ],
                [
                  98.59288,
                  9.6573
                ],
                [
                  98.59023,
                  9.65238
                ],
                [
                  98.58435,
                  9.64977
                ],
                [
                  98.58435,
                  9.64656
                ],
                [
                  98.5875,
                  9.64102
                ],
                [
                  98.58718,
                  9.63915
                ],
                [
                  98.57886,
                  9.63501
                ],
                [
                  98.5545,
                  9.6149
                ],
                [
                  98.55223,
                  9.61616
                ],
                [
                  98.55013,
                  9.62024
                ],
                [
                  98.54668,
                  9.62078
                ],
                [
                  98.54548,
                  9.62314
                ],
                [
                  98.53228,
                  9.62643
                ],
                [
                  98.53308,
                  9.63115
                ],
                [
                  98.52845,
                  9.63274
                ],
                [
                  98.52586,
                  9.63575
                ],
                [
                  98.51433,
                  9.63459
                ],
                [
                  98.50632,
                  9.62887
                ],
                [
                  98.50109,
                  9.62976
                ],
                [
                  98.50007,
                  9.63474
                ],
                [
                  98.50543,
                  9.63905
                ],
                [
                  98.50834,
                  9.64321
                ],
                [
                  98.51104,
                  9.65204
                ],
                [
                  98.51058,
                  9.65357
                ],
                [
                  98.51319,
                  9.65405
                ],
                [
                  98.52073,
                  9.65232
                ],
                [
                  98.5243,
                  9.65302
                ],
                [
                  98.52468,
                  9.65456
                ],
                [
                  98.52367,
                  9.65566
                ],
                [
                  98.51411,
                  9.65803
                ],
                [
                  98.50983,
                  9.65731
                ],
                [
                  98.50308,
                  9.6587
                ],
                [
                  98.50027,
                  9.65699
                ],
                [
                  98.50012,
                  9.65267
                ],
                [
                  98.49817,
                  9.65251
                ],
                [
                  98.49582,
                  9.66143
                ],
                [
                  98.49189,
                  9.66289
                ],
                [
                  98.49203,
                  9.66884
                ],
                [
                  98.49009,
                  9.67137
                ],
                [
                  98.48921,
                  9.67994
                ],
                [
                  98.48785,
                  9.6815
                ],
                [
                  98.48492,
                  9.6811
                ],
                [
                  98.48457,
                  9.68603
                ],
                [
                  98.4908,
                  9.68563
                ],
                [
                  98.49379,
                  9.68126
                ],
                [
                  98.49755,
                  9.68134
                ],
                [
                  98.49681,
                  9.67718
                ],
                [
                  98.49822,
                  9.67515
                ],
                [
                  98.50023,
                  9.67546
                ],
                [
                  98.50204,
                  9.674
                ],
                [
                  98.50677,
                  9.67447
                ],
                [
                  98.51001,
                  9.67204
                ],
                [
                  98.51778,
                  9.67702
                ],
                [
                  98.52086,
                  9.68104
                ],
                [
                  98.52236,
                  9.67982
                ],
                [
                  98.52545,
                  9.6801
                ],
                [
                  98.52952,
                  9.67753
                ],
                [
                  98.53537,
                  9.67791
                ],
                [
                  98.53503,
                  9.67912
                ],
                [
                  98.52914,
                  9.68186
                ],
                [
                  98.52932,
                  9.68355
                ],
                [
                  98.5318,
                  9.68403
                ],
                [
                  98.53143,
                  9.68618
                ],
                [
                  98.53306,
                  9.68662
                ],
                [
                  98.53199,
                  9.6892
                ],
                [
                  98.5409,
                  9.69839
                ],
                [
                  98.54075,
                  9.70392
                ],
                [
                  98.53894,
                  9.70697
                ],
                [
                  98.54172,
                  9.70618
                ],
                [
                  98.54317,
                  9.7094
                ],
                [
                  98.54266,
                  9.71131
                ],
                [
                  98.54672,
                  9.7151
                ],
                [
                  98.54625,
                  9.71751
                ],
                [
                  98.55119,
                  9.71646
                ],
                [
                  98.54995,
                  9.72342
                ],
                [
                  98.55306,
                  9.72715
                ],
                [
                  98.55722,
                  9.72914
                ],
                [
                  98.55581,
                  9.73526
                ],
                [
                  98.55668,
                  9.73695
                ],
                [
                  98.55376,
                  9.74112
                ],
                [
                  98.55526,
                  9.74835
                ],
                [
                  98.55455,
                  9.74936
                ],
                [
                  98.5615,
                  9.75872
                ],
                [
                  98.55789,
                  9.76483
                ],
                [
                  98.5559,
                  9.77584
                ],
                [
                  98.55231,
                  9.77671
                ],
                [
                  98.55254,
                  9.77925
                ],
                [
                  98.54953,
                  9.78114
                ],
                [
                  98.54824,
                  9.78398
                ],
                [
                  98.54838,
                  9.79143
                ],
                [
                  98.54724,
                  9.79696
                ],
                [
                  98.54815,
                  9.79848
                ],
                [
                  98.56744,
                  9.81549
                ],
                [
                  98.57205,
                  9.82323
                ],
                [
                  98.57328,
                  9.82349
                ],
                [
                  98.57667,
                  9.81947
                ],
                [
                  98.58001,
                  9.82024
                ],
                [
                  98.58132,
                  9.8179
                ],
                [
                  98.58592,
                  9.82022
                ],
                [
                  98.59019,
                  9.82033
                ],
                [
                  98.59536,
                  9.8243
                ],
                [
                  98.59698,
                  9.83242
                ],
                [
                  98.60375,
                  9.83219
                ],
                [
                  98.6062,
                  9.83393
                ],
                [
                  98.60631,
                  9.83144
                ],
                [
                  98.60738,
                  9.83133
                ],
                [
                  98.6079,
                  9.82947
                ],
                [
                  98.61222,
                  9.82749
                ],
                [
                  98.61672,
                  9.81665
                ],
                [
                  98.62257,
                  9.81221
                ],
                [
                  98.62806,
                  9.80347
                ],
                [
                  98.63475,
                  9.78881
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850103",
          "tambon": "ต.หงาว",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "ที่ทำการอุทยานแห่งชาติน้ำตกหงาว",
          "latitude": 9.85479,
          "longitude": 98.62825,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.55746,
                  9.75306
                ],
                [
                  98.55271,
                  9.75126
                ],
                [
                  98.54858,
                  9.74548
                ],
                [
                  98.5434,
                  9.74323
                ],
                [
                  98.53396,
                  9.74508
                ],
                [
                  98.52988,
                  9.75089
                ],
                [
                  98.5223,
                  9.75035
                ],
                [
                  98.52057,
                  9.74892
                ],
                [
                  98.51935,
                  9.7453
                ],
                [
                  98.51432,
                  9.7419
                ],
                [
                  98.51087,
                  9.7415
                ],
                [
                  98.50838,
                  9.73718
                ],
                [
                  98.50602,
                  9.73871
                ],
                [
                  98.50363,
                  9.73722
                ],
                [
                  98.50105,
                  9.73921
                ],
                [
                  98.50026,
                  9.74136
                ],
                [
                  98.50243,
                  9.74483
                ],
                [
                  98.5072,
                  9.74498
                ],
                [
                  98.50734,
                  9.75096
                ],
                [
                  98.51217,
                  9.75374
                ],
                [
                  98.51196,
                  9.76231
                ],
                [
                  98.5096,
                  9.76831
                ],
                [
                  98.5073,
                  9.76866
                ],
                [
                  98.50629,
                  9.77132
                ],
                [
                  98.50746,
                  9.77681
                ],
                [
                  98.50605,
                  9.78331
                ],
                [
                  98.51129,
                  9.7843
                ],
                [
                  98.51369,
                  9.78806
                ],
                [
                  98.51777,
                  9.79029
                ],
                [
                  98.52305,
                  9.78648
                ],
                [
                  98.52751,
                  9.7877
                ],
                [
                  98.53277,
                  9.79083
                ],
                [
                  98.54268,
                  9.78896
                ],
                [
                  98.54695,
                  9.78994
                ],
                [
                  98.54838,
                  9.79143
                ],
                [
                  98.54884,
                  9.78226
                ],
                [
                  98.55254,
                  9.77925
                ],
                [
                  98.55231,
                  9.77671
                ],
                [
                  98.5559,
                  9.77584
                ],
                [
                  98.55789,
                  9.76483
                ],
                [
                  98.56156,
                  9.75972
                ],
                [
                  98.55746,
                  9.75306
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850107",
          "tambon": "ต.หาดส้มแป้น",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านหาดส้มแป้น",
          "latitude": 9.95134,
          "longitude": 98.693319,
          "sum_rainfall_mm": 3.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.74132,
                  9.92486
                ],
                [
                  98.74436,
                  9.92225
                ],
                [
                  98.74417,
                  9.91613
                ],
                [
                  98.74269,
                  9.91282
                ],
                [
                  98.7381,
                  9.90706
                ],
                [
                  98.73564,
                  9.90525
                ],
                [
                  98.73079,
                  9.90409
                ],
                [
                  98.72766,
                  9.89924
                ],
                [
                  98.72041,
                  9.89332
                ],
                [
                  98.71921,
                  9.88973
                ],
                [
                  98.71995,
                  9.88594
                ],
                [
                  98.71906,
                  9.88213
                ],
                [
                  98.72145,
                  9.87658
                ],
                [
                  98.71974,
                  9.87103
                ],
                [
                  98.72047,
                  9.86765
                ],
                [
                  98.71855,
                  9.86432
                ],
                [
                  98.70704,
                  9.85387
                ],
                [
                  98.70336,
                  9.85184
                ],
                [
                  98.70362,
                  9.84993
                ],
                [
                  98.69748,
                  9.84318
                ],
                [
                  98.69211,
                  9.83323
                ],
                [
                  98.68921,
                  9.83207
                ],
                [
                  98.68553,
                  9.8345
                ],
                [
                  98.68178,
                  9.83477
                ],
                [
                  98.67846,
                  9.82816
                ],
                [
                  98.67199,
                  9.82397
                ],
                [
                  98.66866,
                  9.81826
                ],
                [
                  98.66349,
                  9.815
                ],
                [
                  98.6628,
                  9.80761
                ],
                [
                  98.65649,
                  9.81974
                ],
                [
                  98.65812,
                  9.83046
                ],
                [
                  98.65658,
                  9.83517
                ],
                [
                  98.65707,
                  9.8394
                ],
                [
                  98.65475,
                  9.84345
                ],
                [
                  98.65571,
                  9.84672
                ],
                [
                  98.65359,
                  9.8528
                ],
                [
                  98.6552,
                  9.85654
                ],
                [
                  98.65774,
                  9.85809
                ],
                [
                  98.65829,
                  9.86212
                ],
                [
                  98.66609,
                  9.87645
                ],
                [
                  98.66826,
                  9.87857
                ],
                [
                  98.66886,
                  9.88237
                ],
                [
                  98.66852,
                  9.88613
                ],
                [
                  98.66556,
                  9.88877
                ],
                [
                  98.66586,
                  9.89165
                ],
                [
                  98.66479,
                  9.89412
                ],
                [
                  98.66627,
                  9.90018
                ],
                [
                  98.6632,
                  9.92264
                ],
                [
                  98.66132,
                  9.92608
                ],
                [
                  98.6616,
                  9.94134
                ],
                [
                  98.66017,
                  9.94638
                ],
                [
                  98.6524,
                  9.95024
                ],
                [
                  98.65295,
                  9.95895
                ],
                [
                  98.66129,
                  9.96669
                ],
                [
                  98.66306,
                  9.96747
                ],
                [
                  98.66297,
                  9.96536
                ],
                [
                  98.67194,
                  9.96957
                ],
                [
                  98.67756,
                  9.97772
                ],
                [
                  98.67759,
                  9.98159
                ],
                [
                  98.68007,
                  9.98332
                ],
                [
                  98.69472,
                  9.98853
                ],
                [
                  98.70032,
                  9.98676
                ],
                [
                  98.70423,
                  9.98066
                ],
                [
                  98.70339,
                  9.97774
                ],
                [
                  98.70408,
                  9.97559
                ],
                [
                  98.70763,
                  9.97285
                ],
                [
                  98.70985,
                  9.96489
                ],
                [
                  98.7154,
                  9.96485
                ],
                [
                  98.72111,
                  9.95806
                ],
                [
                  98.72527,
                  9.95627
                ],
                [
                  98.72946,
                  9.95232
                ],
                [
                  98.73237,
                  9.94817
                ],
                [
                  98.73927,
                  9.93595
                ],
                [
                  98.74003,
                  9.93092
                ],
                [
                  98.73873,
                  9.92693
                ],
                [
                  98.74132,
                  9.92486
                ]
              ]
            ]
          }
        },
        {
          "geocode": "850107",
          "tambon": "ต.หาดส้มแป้น",
          "amphoe": "อ.เมืองระนอง",
          "province": "จ.ระนอง",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านบางสังตี",
          "latitude": 9.959389,
          "longitude": 98.690417,
          "sum_rainfall_mm": 3.0,
          "observed_at": "2026-10-16T12:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.74132,
                  9.92486
                ],
                [
                  98.74436,
                  9.92225
                ],
                [
                  98.74417,
                  9.91613
                ],
                [
                  98.74269,
                  9.91282
                ],
                [
                  98.7381,
                  9.90706
                ],
                [
                  98.73564,
                  9.90525
                ],
                [
                  98.73079,
                  9.90409
                ],
                [
                  98.72766,
                  9.89924
                ],
                [
                  98.72041,
                  9.89332
                ],
                [
                  98.71921,
                  9.88973
                ],
                [
                  98.71995,
                  9.88594
                ],
                [
                  98.71906,
                  9.88213
                ],
                [
                  98.72145,
                  9.87658
                ],
                [
                  98.71974,
                  9.87103
                ],
                [
                  98.72047,
                  9.86765
                ],
                [
                  98.71855,
                  9.86432
                ],
                [
                  98.70704,
                  9.85387
                ],
                [
                  98.70336,
                  9.85184
                ],
                [
                  98.70362,
                  9.84993
                ],
                [
                  98.69748,
                  9.84318
                ],
                [
                  98.69211,
                  9.83323
                ],
                [
                  98.68921,
                  9.83207
                ],
                [
                  98.68553,
                  9.8345
                ],
                [
                  98.68178,
                  9.83477
                ],
                [
                  98.67846,
                  9.82816
                ],
                [
                  98.67199,
                  9.82397
                ],
                [
                  98.66866,
                  9.81826
                ],
                [
                  98.66349,
                  9.815
                ],
                [
                  98.6628,
                  9.80761
                ],
                [
                  98.65649,
                  9.81974
                ],
                [
                  98.65812,
                  9.83046
                ],
                [
                  98.65658,
                  9.83517
                ],
                [
                  98.65707,
                  9.8394
                ],
                [
                  98.65475,
                  9.84345
                ],
                [
                  98.65571,
                  9.84672
                ],
                [
                  98.65359,
                  9.8528
                ],
                [
                  98.6552,
                  9.85654
                ],
                [
                  98.65774,
                  9.85809
                ],
                [
                  98.65829,
                  9.86212
                ],
                [
                  98.66609,
                  9.87645
                ],
                [
                  98.66826,
                  9.87857
                ],
                [
                  98.66886,
                  9.88237
                ],
                [
                  98.66852,
                  9.88613
                ],
                [
                  98.66556,
                  9.88877
                ],
                [
                  98.66586,
                  9.89165
                ],
                [
                  98.66479,
                  9.89412
                ],
                [
                  98.66627,
                  9.90018
                ],
                [
                  98.6632,
                  9.92264
                ],
                [
                  98.66132,
                  9.92608
                ],
                [
                  98.6616,
                  9.94134
                ],
                [
                  98.66017,
                  9.94638
                ],
                [
                  98.6524,
                  9.95024
                ],
                [
                  98.65295,
                  9.95895
                ],
                [
                  98.66129,
                  9.96669
                ],
                [
                  98.66306,
                  9.96747
                ],
                [
                  98.66297,
                  9.96536
                ],
                [
                  98.67194,
                  9.96957
                ],
                [
                  98.67756,
                  9.97772
                ],
                [
                  98.67759,
                  9.98159
                ],
                [
                  98.68007,
                  9.98332
                ],
                [
                  98.69472,
                  9.98853
                ],
                [
                  98.70032,
                  9.98676
                ],
                [
                  98.70423,
                  9.98066
                ],
                [
                  98.70339,
                  9.97774
                ],
                [
                  98.70408,
                  9.97559
                ],
                [
                  98.70763,
                  9.97285
                ],
                [
                  98.70985,
                  9.96489
                ],
                [
                  98.7154,
                  9.96485
                ],
                [
                  98.72111,
                  9.95806
                ],
                [
                  98.72527,
                  9.95627
                ],
                [
                  98.72946,
                  9.95232
                ],
                [
                  98.73237,
                  9.94817
                ],
                [
                  98.73927,
                  9.93595
                ],
                [
                  98.74003,
                  9.93092
                ],
                [
                  98.73873,
                  9.92693
                ],
                [
                  98.74132,
                  9.92486
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_16_10_2026.png?1792170501",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "status": "ok",
      "date": "2026-10-17",
      "time": "00:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
        {
          "geocode": "380112",
          "tambon": "ต.โป่งเปือย",
          "amphoe": "อ.เมืองบึงกาฬ",
          "province": "จ.บึงกาฬ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านโป่งเปื่อย",
          "latitude": 18.314566,
          "longitude": 103.525551,
          "sum_rainfall_mm": 302.0,
          "observed_at": "2026-10-16T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.53445,
                  18.35954
                ],
                [
                  103.53681,
                  18.35726
                ],
                [
                  103.54027,
                  18.35607
                ],
                [
                  103.54625,
                  18.35724
                ],
                [
                  103.56186,
                  18.35673
                ],
                [
                  103.56363,
                  18.35213
                ],
                [
                  103.56014,
                  18.34452
                ],
                [
                  103.56091,
                  18.33594
                ],
                [
                  103.56193,
                  18.33178
                ],
                [
                  103.5637,
                  18.32978
                ],
                [
                  103.56371,
                  18.32654
                ],
                [
                  103.56261,
                  18.32142
                ],
                [
                  103.56093,
                  18.31967
                ],
                [
                  103.56215,
                  18.31851
                ],
                [
                  103.562,
                  18.31695
                ],
                [
                  103.55989,
                  18.31536
                ],
                [
                  103.56099,
                  18.31393
                ],
                [
                  103.55977,
                  18.31405
                ],
                [
                  103.55882,
                  18.31271
                ],
                [
                  103.56009,
                  18.3106
                ],
                [
                  103.55441,
                  18.30795
                ],
                [
                  103.55384,
                  18.30587
                ],
                [
                  103.55141,
                  18.30401
                ],
                [
                  103.55011,
                  18.30422
                ],
                [
                  103.54829,
                  18.30075
                ],
                [
                  103.54584,
                  18.29932
                ],
                [
                  103.5424,
                  18.29943
                ],
                [
                  103.5403,
                  18.29581
                ],
                [
                  103.53836,
                  18.29597
                ],
                [
                  103.53665,
                  18.29907
                ],
                [
                  103.53406,
                  18.29878
                ],
                [
                  103.53311,
                  18.29972
                ],
                [
                  103.53078,
                  18.29487
                ],
                [
                  103.52739,
                  18.29427
                ],
                [
                  103.5214,
                  18.29972
                ],
                [
                  103.52146,
                  18.30094
                ],
                [
                  103.52412,
                  18.30387
                ],
                [
                  103.53117,
                  18.30242
                ],
                [
                  103.53202,
                  18.30552
                ],
                [
                  103.528,
                  18.30632
                ],
                [
                  103.5269,
                  18.31008
                ],
                [
                  103.52381,
                  18.31146
                ],
                [
                  103.52479,
                  18.3149
                ],
                [
                  103.51977,
                  18.31412
                ],
                [
                  103.52105,
                  18.317
                ],
                [
                  103.5203,
                  18.31926
                ],
                [
                  103.51807,
                  18.31893
                ],
                [
                  103.51781,
                  18.31675
                ],
                [
                  103.51565,
                  18.31385
                ],
                [
                  103.51318,
                  18.31452
                ],
                [
                  103.51178,
                  18.3187
                ],
                [
                  103.50937,
                  18.31672
                ],
                [
                  103.50806,
                  18.31249
                ],
                [
                  103.50444,
                  18.31234
                ],
                [
                  103.50588,
                  18.3147
                ],
                [
                  103.4979,
                  18.31343
                ],
                [
                  103.49687,
                  18.31398
                ],
                [
                  103.49692,
                  18.31579
                ],
                [
                  103.4946,
                  18.31474
                ],
                [
                  103.49097,
                  18.31538
                ],
                [
                  103.49241,
                  18.3184
                ],
                [
                  103.48905,
                  18.32568
                ],
                [
                  103.48922,
                  18.32687
                ],
                [
                  103.49364,
                  18.32979
                ],
                [
                  103.50491,
                  18.34144
                ],
                [
                  103.50787,
                  18.34701
                ],
                [
                  103.50882,
                  18.35137
                ],
                [
                  103.51297,
                  18.35486
                ],
                [
                  103.51543,
                  18.36146
                ],
                [
                  103.51774,
                  18.36423
                ],
                [
                  103.51586,
                  18.36667
                ],
                [
                  103.51431,
                  18.36598
                ],
                [
                  103.51338,
                  18.36739
                ],
                [
                  103.51461,
                  18.37087
                ],
                [
                  103.51561,
                  18.37157
                ],
                [
                  103.52081,
                  18.37
                ],
                [
                  103.53445,
                  18.35954
                ]
              ]
            ]
          }
        },
        {
          "geocode": "841802",
          "tambon": "ต.ชัยบุรี",
          "amphoe": "อ.ชัยบุรี",
          "province": "จ.สุราษฎร์ธานี",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "อบต.ชัยบุรี",
          "latitude": 8.45064,
          "longitude": 99.08304,
          "sum_rainfall_mm": 176.8,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.99698,
                  8.45457
                ],
                [
                  99.01792,
                  8.45297
                ],
                [
                  99.05279,
                  8.45314
                ],
                [
                  99.06848,
                  8.4521
                ],
                [
                  99.08332,
                  8.45505
                ],
                [
                  99.0985,
                  8.45454
                ],
                [
                  99.12707,
                  8.45009
                ],
                [
                  99.18536,
                  8.44534
                ],
                [
                  99.19345,
                  8.44554
                ],
                [
                  99.2018,
                  8.44372
                ],
                [
                  99.202,
                  8.43662
                ],
                [
                  99.19628,
                  8.42554
                ],
                [
                  99.19645,
                  8.41676
                ],
                [
                  99.03923,
                  8.41434
                ],
                [
                  99.03119,
                  8.40877
                ],
                [
                  99.01691,
                  8.43222
                ],
                [
                  99.01391,
                  8.43021
                ],
                [
                  99.0055,
                  8.42971
                ],
                [
                  98.99886,
                  8.43308
                ],
                [
                  98.99276,
                  8.43929
                ],
                [
                  98.98761,
                  8.44044
                ],
                [
                  98.98581,
                  8.43621
                ],
                [
                  98.97905,
                  8.43833
                ],
                [
                  98.97442,
                  8.437
                ],
                [
                  98.96865,
                  8.44188
                ],
                [
                  98.96385,
                  8.44077
                ],
                [
                  98.95651,
                  8.44347
                ],
                [
                  98.95143,
                  8.43903
                ],
                [
                  98.94632,
                  8.44234
                ],
                [
                  98.94328,
                  8.44652
                ],
                [
                  98.94046,
                  8.44823
                ],
                [
                  98.94215,
                  8.45219
                ],
                [
                  98.94059,
                  8.45643
                ],
                [
                  98.94493,
                  8.46092
                ],
                [
                  98.94588,
                  8.46448
                ],
                [
                  98.94467,
                  8.46616
                ],
                [
                  98.94509,
                  8.46769
                ],
                [
                  98.94874,
                  8.47178
                ],
                [
                  98.95709,
                  8.4687
                ],
                [
                  98.96387,
                  8.46083
                ],
                [
                  98.98489,
                  8.45479
                ],
                [
                  98.99695,
                  8.45539
                ],
                [
                  98.99698,
                  8.45457
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "380101",
          "tambon": "ต.บึงกาฬ",
          "amphoe": "อ.เมืองบึงกาฬ",
          "province": "จ.บึงกาฬ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.บึงกาฬ",
          "latitude": 18.36219,
          "longitude": 103.65973,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.76094,
                  18.34088
                ],
                [
                  103.7634,
                  18.33978
                ],
                [
                  103.76359,
                  18.33854
                ],
                [
                  103.75339,
                  18.33548
                ],
                [
                  103.74937,
                  18.33558
                ],
                [
                  103.74782,
                  18.33673
                ],
                [
                  103.74622,
                  18.33252
                ],
                [
                  103.74223,
                  18.33099
                ],
                [
                  103.74149,
                  18.33184
                ],
                [
                  103.73988,
                  18.32946
                ],
                [
                  103.7343,
                  18.33049
                ],
                [
                  103.73827,
                  18.32326
                ],
                [
                  103.73757,
                  18.32204
                ],
                [
                  103.73363,
                  18.32226
                ],
                [
                  103.73617,
                  18.31824
                ],
                [
                  103.73568,
                  18.31569
                ],
                [
                  103.73059,
                  18.31495
                ],
                [
                  103.72634,
                  18.31858
                ],
                [
                  103.72633,
                  18.31687
                ],
                [
                  103.72259,
                  18.31325
                ],
                [
                  103.72047,
                  18.31422
                ],
                [
                  103.71955,
                  18.31341
                ],
                [
                  103.72136,
                  18.31054
                ],
                [
                  103.72301,
                  18.31263
                ],
                [
                  103.72518,
                  18.3123
                ],
                [
                  103.72652,
                  18.30878
                ],
                [
                  103.73073,
                  18.30745
                ],
                [
                  103.73129,
                  18.30201
                ],
                [
                  103.73032,
                  18.30148
                ],
                [
                  103.72842,
                  18.30346
                ],
                [
                  103.7273,
                  18.30731
                ],
                [
                  103.7196,
                  18.30574
                ],
                [
                  103.71748,
                  18.30354
                ],
                [
                  103.71863,
                  18.2986
                ],
                [
                  103.71363,
                  18.29696
                ],
                [
                  103.71221,
                  18.30061
                ],
                [
                  103.70817,
                  18.30002
                ],
                [
                  103.70585,
                  18.30446
                ],
                [
                  103.70345,
                  18.3053
                ],
                [
                  103.69961,
                  18.30173
                ],
                [
                  103.69857,
                  18.30321
                ],
                [
                  103.69522,
                  18.30407
                ],
                [
                  103.69169,
                  18.30013
                ],
                [
                  103.6878,
                  18.29879
                ],
                [
                  103.6817,
                  18.30317
                ],
                [
                  103.67551,
                  18.30458
                ],
                [
                  103.66446,
                  18.30982
                ],
                [
                  103.65934,
                  18.31603
                ],
                [
                  103.65248,
                  18.31816
                ],
                [
                  103.65002,
                  18.32435
                ],
                [
                  103.6438,
                  18.32278
                ],
                [
                  103.63906,
                  18.32449
                ],
                [
                  103.63895,
                  18.31893
                ],
                [
                  103.63784,
                  18.31655
                ],
                [
                  103.63436,
                  18.31229
                ],
                [
                  103.63175,
                  18.31152
                ],
                [
                  103.6279,
                  18.30647
                ],
                [
                  103.61471,
                  18.30586
                ],
                [
                  103.6107,
                  18.30741
                ],
                [
                  103.61677,
                  18.31115
                ],
                [
                  103.61824,
                  18.31445
                ],
                [
                  103.61783,
                  18.31995
                ],
                [
                  103.62267,
                  18.32349
                ],
                [
                  103.62468,
                  18.32733
                ],
                [
                  103.62738,
                  18.32641
                ],
                [
                  103.63179,
                  18.32676
                ],
                [
                  103.63117,
                  18.33246
                ],
                [
                  103.62878,
                  18.33635
                ],
                [
                  103.63053,
                  18.34017
                ],
                [
                  103.63056,
                  18.34327
                ],
                [
                  103.62597,
                  18.34801
                ],
                [
                  103.62587,
                  18.35562
                ],
                [
                  103.63842,
                  18.36099
                ],
                [
                  103.64466,
                  18.35809
                ],
                [
                  103.65853,
                  18.37412
                ],
                [
                  103.68068,
                  18.35718
                ],
                [
                  103.69356,
                  18.34429
                ],
                [
                  103.69757,
                  18.34274
                ],
                [
                  103.70776,
                  18.34141
                ],
                [
                  103.74625,
                  18.34366
                ],
                [
                  103.74879,
                  18.33981
                ],
                [
                  103.76094,
                  18.34088
                ]
              ]
            ]
          }
        },
        {
          "geocode": "380105",
          "tambon": "ต.หนองเลิง",
          "amphoe": "อ.เมืองบึงกาฬ",
          "province": "จ.บึงกาฬ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "ทต.หนองเลิง",
          "latitude": 18.33914,
          "longitude": 103.39765,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.42289,
                  18.38879
                ],
                [
                  103.42179,
                  18.38471
                ],
                [
                  103.42248,
                  18.37369
                ],
                [
                  103.42627,
                  18.36808
                ],
                [
                  103.4297,
                  18.36553
                ],
                [
                  103.43068,
                  18.36029
                ],
                [
                  103.43017,
                  18.35149
                ],
                [
                  103.42432,
                  18.34816
                ],
                [
                  103.42154,
                  18.33807
                ],
                [
                  103.41787,
                  18.33083
                ],
                [
                  103.4187,
                  18.32587
                ],
                [
                  103.41998,
                  18.32446
                ],
                [
                  103.4193,
                  18.32352
                ],
                [
                  103.42071,
                  18.31424
                ],
                [
                  103.42577,
                  18.31301
                ],
                [
                  103.42613,
                  18.3117
                ],
                [
                  103.42478,
                  18.30785
                ],
                [
                  103.42465,
                  18.29818
                ],
                [
                  103.4211,
                  18.29398
                ],
                [
                  103.41891,
                  18.28847
                ],
                [
                  103.41555,
                  18.28781
                ],
                [
                  103.41409,
                  18.28943
                ],
                [
                  103.41233,
                  18.28894
                ],
                [
                  103.41062,
                  18.28803
                ],
                [
                  103.4107,
                  18.28638
                ],
                [
                  103.40861,
                  18.28402
                ],
                [
                  103.40047,
                  18.28293
                ],
                [
                  103.39749,
                  18.28047
                ],
                [
                  103.39699,
                  18.28938
                ],
                [
                  103.39458,
                  18.29194
                ],
                [
                  103.39477,
                  18.29434
                ],
                [
                  103.39244,
                  18.29645
                ],
                [
                  103.39086,
                  18.30003
                ],
                [
                  103.38191,
                  18.30341
                ],
                [
                  103.3768,
                  18.30825
                ],
                [
                  103.37759,
                  18.31474
                ],
                [
                  103.37593,
                  18.31816
                ],
                [
                  103.376,
                  18.32625
                ],
                [
                  103.37286,
                  18.3246
                ],
                [
                  103.36872,
                  18.3276
                ],
                [
                  103.36316,
                  18.32661
                ],
                [
                  103.35903,
                  18.3272
                ],
                [
                  103.36182,
                  18.33433
                ],
                [
                  103.36492,
                  18.3388
                ],
                [
                  103.35832,
                  18.34165
                ],
                [
                  103.35634,
                  18.35274
                ],
                [
                  103.36263,
                  18.36549
                ],
                [
                  103.36604,
                  18.36247
                ],
                [
                  103.37399,
                  18.36245
                ],
                [
                  103.38004,
                  18.35391
                ],
                [
                  103.38558,
                  18.3574
                ],
                [
                  103.39039,
                  18.35703
                ],
                [
                  103.39467,
                  18.3602
                ],
                [
                  103.39369,
                  18.36624
                ],
                [
                  103.39418,
                  18.39009
                ],
                [
                  103.40225,
                  18.38928
                ],
                [
                  103.41003,
                  18.38684
                ],
                [
                  103.41408,
                  18.38756
                ],
                [
                  103.41718,
                  18.39084
                ],
                [
                  103.42042,
                  18.38965
                ],
                [
                  103.42089,
                  18.38795
                ],
                [
                  103.42289,
                  18.38879
                ]
              ]
            ]
          }
        },
        {
          "geocode": "841803",
          "tambon": "ต.คลองน้อย",
          "amphoe": "อ.ชัยบุรี",
          "province": "จ.สุราษฎร์ธานี",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านยูงงาม",
          "latitude": 8.472825,
          "longitude": 98.986899,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.99523,
                  8.55096
                ],
                [
                  99.0245,
                  8.554
                ],
                [
                  99.02455,
                  8.51563
                ],
                [
                  99.02938,
                  8.51638
                ],
                [
                  99.04222,
                  8.51503
                ],
                [
                  99.06144,
                  8.51553
                ],
                [
                  99.05551,
                  8.50718
                ],
                [
                  99.05367,
                  8.501
                ],
                [
                  99.05641,
                  8.48951
                ],
                [
                  99.05893,
                  8.45294
                ],
                [
                  99.01792,
                  8.45297
                ],
                [
                  99.0015,
                  8.45383
                ],
                [
                  98.99698,
                  8.45457
                ],
                [
                  98.99695,
                  8.45539
                ],
                [
                  98.98489,
                  8.45479
                ],
                [
                  98.96387,
                  8.46083
                ],
                [
                  98.95709,
                  8.4687
                ],
                [
                  98.94874,
                  8.47178
                ],
                [
                  98.94643,
                  8.48036
                ],
                [
                  98.94699,
                  8.48384
                ],
                [
                  98.9494,
                  8.48557
                ],
                [
                  98.95018,
                  8.49227
                ],
                [
                  98.94842,
                  8.49503
                ],
                [
                  98.946,
                  8.49626
                ],
                [
                  98.94281,
                  8.50713
                ],
                [
                  98.94118,
                  8.53262
                ],
                [
                  98.93627,
                  8.5362
                ],
                [
                  98.9334,
                  8.54132
                ],
                [
                  98.93251,
                  8.55083
                ],
                [
                  98.93542,
                  8.55755
                ],
                [
                  98.94417,
                  8.55032
                ],
                [
                  98.94836,
                  8.5508
                ],
                [
                  98.95129,
                  8.5493
                ],
                [
                  98.95694,
                  8.55167
                ],
                [
                  98.96227,
                  8.55099
                ],
                [
                  98.96668,
                  8.54888
                ],
                [
                  98.97318,
                  8.54779
                ],
                [
                  98.98037,
                  8.54411
                ],
                [
                  98.98416,
                  8.544
                ],
                [
                  98.989,
                  8.54927
                ],
                [
                  98.99523,
                  8.55096
                ]
              ]
            ]
          }
        },
        {
          "geocode": "841803",
          "tambon": "ต.คลองน้อย",
          "amphoe": "อ.ชัยบุรี",
          "province": "จ.สุราษฎร์ธานี",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านหน้าเขา",
          "latitude": 8.529955,
          "longitude": 98.990604,
          "sum_rainfall_mm": 2.0,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.99523,
                  8.55096
                ],
                [
                  99.0245,
                  8.554
                ],
                [
                  99.02455,
                  8.51563
                ],
                [
                  99.02938,
                  8.51638
                ],
                [
                  99.04222,
                  8.51503
                ],
                [
                  99.06144,
                  8.51553
                ],
                [
                  99.05551,
                  8.50718
                ],
                [
                  99.05367,
                  8.501
                ],
                [
                  99.05641,
                  8.48951
                ],
                [
                  99.05893,
                  8.45294
                ],
                [
                  99.01792,
                  8.45297
                ],
                [
                  99.0015,
                  8.45383
                ],
                [
                  98.99698,
                  8.45457
                ],
                [
                  98.99695,
                  8.45539
                ],
                [
                  98.98489,
                  8.45479
                ],
                [
                  98.96387,
                  8.46083
                ],
                [
                  98.95709,
                  8.4687
                ],
                [
                  98.94874,
                  8.47178
                ],
                [
                  98.94643,
                  8.48036
                ],
                [
                  98.94699,
                  8.48384
                ],
                [
                  98.9494,
                  8.48557
                ],
                [
                  98.95018,
                  8.49227
                ],
                [
                  98.94842,
                  8.49503
                ],
                [
                  98.946,
                  8.49626
                ],
                [
                  98.94281,
                  8.50713
                ],
                [
                  98.94118,
                  8.53262
                ],
                [
                  98.93627,
                  8.5362
                ],
                [
                  98.9334,
                  8.54132
                ],
                [
                  98.93251,
                  8.55083
                ],
                [
                  98.93542,
                  8.55755
                ],
                [
                  98.94417,
                  8.55032
                ],
                [
                  98.94836,
                  8.5508
                ],
                [
                  98.95129,
                  8.5493
                ],
                [
                  98.95694,
                  8.55167
                ],
                [
                  98.96227,
                  8.55099
                ],
                [
                  98.96668,
                  8.54888
                ],
                [
                  98.97318,
                  8.54779
                ],
                [
                  98.98037,
                  8.54411
                ],
                [
                  98.98416,
                  8.544
                ],
                [
                  98.989,
                  8.54927
                ],
                [
                  98.99523,
                  8.55096
                ]
              ]
            ]
          }
        },
        {
          "geocode": "841804",
          "tambon": "ต.ไทรทอง",
          "amphoe": "อ.ชัยบุรี",
          "province": "จ.สุราษฎร์ธานี",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านควนพุน",
          "latitude": 8.438118,
          "longitude": 98.987245,
          "sum_rainfall_mm": 14.5,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.99698,
                  8.43534
                ],
                [
                  98.99972,
                  8.43246
                ],
                [
                  99.00584,
                  8.42962
                ],
                [
                  99.01391,
                  8.43021
                ],
                [
                  99.01716,
                  8.43207
                ],
                [
                  99.03119,
                  8.40877
                ],
                [
                  99.03923,
                  8.41434
                ],
                [
                  99.19645,
                  8.41676
                ],
                [
                  99.19739,
                  8.40782
                ],
                [
                  99.20317,
                  8.39858
                ],
                [
                  99.20224,
                  8.3899
                ],
                [
                  99.20404,
                  8.38352
                ],
                [
                  99.20652,
                  8.38069
                ],
                [
                  99.20669,
                  8.37725
                ],
                [
                  99.20526,
                  8.37479
                ],
                [
                  99.20179,
                  8.37392
                ],
                [
                  99.20366,
                  8.36752
                ],
                [
                  99.20204,
                  8.36699
                ],
                [
                  99.19599,
                  8.36631
                ],
                [
                  99.18427,
                  8.37197
                ],
                [
                  99.17997,
                  8.37158
                ],
                [
                  99.17441,
                  8.37315
                ],
                [
                  99.16972,
                  8.36934
                ],
                [
                  99.16362,
                  8.36948
                ],
                [
                  99.15818,
                  8.36467
                ],
                [
                  99.15171,
                  8.36104
                ],
                [
                  99.14628,
                  8.36214
                ],
                [
                  99.14317,
                  8.36022
                ],
                [
                  99.12835,
                  8.36581
                ],
                [
                  99.11883,
                  8.36698
                ],
                [
                  99.09725,
                  8.3656
                ],
                [
                  99.08992,
                  8.3624
                ],
                [
                  99.0745,
                  8.36401
                ],
                [
                  99.07246,
                  8.36236
                ],
                [
                  99.06431,
                  8.3604
                ],
                [
                  99.04861,
                  8.36087
                ],
                [
                  99.03681,
                  8.36462
                ],
                [
                  99.02507,
                  8.37082
                ],
                [
                  98.99754,
                  8.39187
                ],
                [
                  98.9954,
                  8.39534
                ],
                [
                  98.97005,
                  8.41726
                ],
                [
                  98.94715,
                  8.42546
                ],
                [
                  98.9436,
                  8.43169
                ],
                [
                  98.94307,
                  8.43485
                ],
                [
                  98.93911,
                  8.43854
                ],
                [
                  98.93875,
                  8.44315
                ],
                [
                  98.94046,
                  8.44823
                ],
                [
                  98.94328,
                  8.44652
                ],
                [
                  98.94632,
                  8.44234
                ],
                [
                  98.95143,
                  8.43903
                ],
                [
                  98.95651,
                  8.44347
                ],
                [
                  98.96385,
                  8.44077
                ],
                [
                  98.96865,
                  8.44188
                ],
                [
                  98.97442,
                  8.437
                ],
                [
                  98.97905,
                  8.43833
                ],
                [
                  98.98581,
                  8.43621
                ],
                [
                  98.98724,
                  8.44005
                ],
                [
                  98.98847,
                  8.44031
                ],
                [
                  98.99276,
                  8.43929
                ],
                [
                  98.99698,
                  8.43534
                ]
              ]
            ]
          }
        },
        {
          "geocode": "841801",
          "tambon": "ต.สองแพรก",
          "amphoe": "อ.ชัยบุรี",
          "province": "จ.สุราษฎร์ธานี",
          "region_id": "6",
          "region_name": "ภาคใต้",
          "station": "บ้านในช่อง",
          "latitude": 8.491633,
          "longitude": 99.138902,
          "sum_rainfall_mm": 22.0,
          "observed_at": "2026-10-16T22:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.17944,
                  8.50216
                ],
                [
                  99.17554,
                  8.50207
                ],
                [
                  99.18446,
                  8.49379
                ],
                [
                  99.18808,
                  8.49239
                ],
                [
                  99.19467,
                  8.48336
                ],
                [
                  99.19722,
                  8.47774
                ],
                [
                  99.20149,
                  8.45765
                ],
                [
                  99.2018,
                  8.44372
                ],
                [
                  99.19345,
                  8.44554
                ],
                [
                  99.18536,
                  8.44534
                ],
                [
                  99.12707,
                  8.45009
                ],
                [
                  99.09263,
                  8.45498
                ],
                [
                  99.08332,
                  8.45505
                ],
                [
                  99.06848,
                  8.4521
                ],
                [
                  99.05893,
                  8.45294
                ],
                [
                  99.05641,
                  8.48951
                ],
                [
                  99.05367,
                  8.501
                ],
                [
                  99.05475,
                  8.50512
                ],
                [
                  99.05784,
                  8.51124
                ],
                [
                  99.06144,
                  8.51553
                ],
                [
                  99.07049,
                  8.51633
                ],
                [
                  99.07819,
                  8.52027
                ],
                [
                  99.08145,
                  8.52445
                ],
                [
                  99.08862,
                  8.52415
                ],
                [
                  99.09467,
                  8.52087
                ],
                [
                  99.09615,
                  8.52108
                ],
                [
                  99.09652,
                  8.51865
                ],
                [
                  99.09876,
                  8.51733
                ],
                [
                  99.1008,
                  8.51394
                ],
                [
                  99.10282,
                  8.51311
                ],
                [
                  99.10211,
                  8.51703
                ],
                [
                  99.1046,
                  8.51746
                ],
                [
                  99.10625,
                  8.51958
                ],
                [
                  99.10835,
                  8.52703
                ],
                [
                  99.11299,
                  8.52765
                ],
                [
                  99.11182,
                  8.5306
                ],
                [
                  99.11288,
                  8.53286
                ],
                [
                  99.11461,
                  8.53331
                ],
                [
                  99.12753,
                  8.52605
                ],
                [
                  99.14159,
                  8.5199
                ],
                [
                  99.14445,
                  8.51718
                ],
                [
                  99.15355,
                  8.51379
                ],
                [
                  99.15948,
                  8.50969
                ],
                [
                  99.17034,
                  8.50688
                ],
                [
                  99.17944,
                  8.50216
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_16_10_2026.png?1792170493",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
