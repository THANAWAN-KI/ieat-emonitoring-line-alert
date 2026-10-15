window.IEAT_THAIWATER_DATA = {
  "schema_version": 3,
  "status": "ok",
  "generated_at": "2026-10-15T11:43:03+07:00",
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
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.004485800000053,
      "lon": 101.16260750000004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 5.943096814769784,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 28,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "lat": 13.04983377800005,
      "lon": 101.09224279000006,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 0.8374957992377094,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.421488500000066,
      "lon": 101.00412440000008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 6,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 6.39764781236248,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 30,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "lat": 13.02386597701363,
      "lon": 101.07115751042997,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 4.512848032476502,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954000000032,
      "lon": 101.03339800000003,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 5.512657119107435,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.121345950000032,
      "lon": 100.99043060000008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 6.789568575180594,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.105671255885829,
      "lon": 101.06700106658508,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 6.544149182863078,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 34,
      "name": "นิคมอุตสาหกรรมแหลมฉบัง",
      "lat": 13.076561000000028,
      "lon": 100.90917500000006,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 12.184142953906699,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 47,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 2",
      "lat": 13.094588902000057,
      "lon": 101.11351620800008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 4.71378257975279,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 55,
      "name": "นิคมอุตสาหกรรมโรจนะชลบุรี 2 (เขาคันทรง)",
      "lat": 13.077101327000037,
      "lon": 101.13626885900004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 4.832848644652421,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 56,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "lat": 13.126916941000047,
      "lon": 101.15881889900004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 6,
      "rain_alert_count": 6,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 10.368494265281772,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 58,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 5)",
      "lat": 13.089015443000047,
      "lon": 101.16322605000005,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 8.028213411927524,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 60,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 3",
      "lat": 13.09628960600003,
      "lon": 101.28410551700006,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 7,
      "rain_alert_count": 6,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 16.469082543743433,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 62,
      "name": "นิคมอุตสาหกรรมบ้านบึง",
      "lat": 13.275150936000044,
      "lon": 101.24514896600004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 12.718687079758276,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 65,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 4)",
      "lat": 13.081752217000028,
      "lon": 101.03817299200006,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 7.110282067936029,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 66,
      "name": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "lat": 13.036467356000058,
      "lon": 100.98974999200004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 11.88764095021543,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 71,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 1",
      "lat": 13.068722661000038,
      "lon": 101.18655755500004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 9.73136220400732,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939503915980483,
      "lon": 101.0413767378398,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 103.8,
      "nearest_alert_km": 14.229297849153712,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.544000800000049,
      "lon": 100.23285600000008,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 7,
      "max_rainfall_mm": 66.2,
      "nearest_alert_km": 4.674934171316372,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.546536590000073,
      "lon": 100.34361750000005,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 13,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": 66.2,
      "nearest_alert_km": 4.60388187720373,
      "latest_observed_at": "2026-10-15 11:30"
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
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 7,
      "max_rainfall_mm": 66.2,
      "nearest_alert_km": 5.96409557705208,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.57506305000004,
      "lon": 100.79479772200006,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 9,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 7,
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 10.518375340120038,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.758255900000053,
      "lon": 100.78931830000005,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 2.0362140416044405,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881000000045,
      "lon": 100.70475700000009,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 17,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 17,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.986228512238855,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102000000062,
      "lon": 100.70771200000007,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 12,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 12,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.202214564103116,
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 23,
      "name": "นิคมอุตสาหกรรมบางปู",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.49470424209022,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 25,
      "name": "นิคมอุตสาหกรรมบางปู (เหนือ)",
      "lat": 13.551394000000071,
      "lon": 100.66827800000004,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.49470424209022,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.569035190000022,
      "lon": 100.65282020000006,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.540324535327358,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 51,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 6)",
      "lat": 12.852329163000036,
      "lon": 101.21748270800003,
      "operations": "สายปฎิบัติการ3",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 89.8,
      "nearest_alert_km": 9.098279075215103,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 52,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "lat": 12.896058797000023,
      "lon": 101.28114772800006,
      "operations": "สายปฎิบัติการ3",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 89.8,
      "nearest_alert_km": 5.6523093721227236,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 53,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
      "lat": 12.89336387800006,
      "lon": 101.12463591300008,
      "operations": "สายปฎิบัติการ3",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 89.8,
      "nearest_alert_km": 12.156752252784177,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 61,
      "name": "นิคมอุตสาหกรรมโรจนะหนองใหญ่ จังหวัดชลบุรี",
      "lat": 13.170794615000036,
      "lon": 101.31258289400006,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 5,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 1,
      "max_rainfall_mm": 89.8,
      "nearest_alert_km": 15.12565779113307,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.843730427800528,
      "lon": 101.23641847915039,
      "operations": "",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 89.8,
      "nearest_alert_km": 7.06507776964934,
      "latest_observed_at": "2026-10-15 11:30"
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
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 8.832622883882104,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.65990380000005,
      "lon": 100.91148330000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 12.030145507083846,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 19,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "lat": 13.56379732000005,
      "lon": 100.99491850000004,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 1.7752687912394733,
      "latest_observed_at": "2026-10-15 11:30"
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
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 3.0979043867166878,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 67,
      "name": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "lat": 13.529234736000037,
      "lon": 101.01651303800008,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 2.7582426638140114,
      "latest_observed_at": "2026-10-15 11:30"
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
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 7.9481422730435725,
      "latest_observed_at": "2026-10-15 11:30"
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
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 12.29672311989434,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.008259800000075,
      "lon": 100.35980570000004,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 14,
      "rain_alert_count": 4,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": 63.0,
      "nearest_alert_km": 10.64480235683347,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.727359730000046,
      "lon": 101.45593100000008,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": 54.5,
      "nearest_alert_km": 17.02824288279466,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.386388200000056,
      "lon": 100.90357670000009,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": 43.0,
      "nearest_alert_km": 17.91918472481892,
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.575362700000024,
      "lon": 100.14894520000007,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.570134034587971,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694000000043,
      "lon": 101.32956700000005,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 12.70008602758719,
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
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
      "max_rainfall_mm": 64.2,
      "nearest_alert_km": 8.817571825599366,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 59,
      "name": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "lat": 13.146767481000039,
      "lon": 101.39876718000005,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 0,
      "max_rainfall_mm": 57.4,
      "nearest_alert_km": 17.402913162314384,
      "latest_observed_at": "2026-10-15 11:00"
    },
    {
      "id": 50,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "lat": 12.868719838070461,
      "lon": 101.36086376330609,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 6,
      "rain_alert_count": 2,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": 54.5,
      "nearest_alert_km": 6.807575134903321,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945000000063,
      "lon": 101.16531900000007,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 37.8,
      "nearest_alert_km": 7.193355299520884,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.739841908000074,
      "lon": 101.12280906200004,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 37.8,
      "nearest_alert_km": 11.454188213708944,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 49,
      "name": "นิคมอุตสาหกรรมซีพีจีซี",
      "lat": 12.803765938000026,
      "lon": 101.22925269200005,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 37.8,
      "nearest_alert_km": 7.317869330076649,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 70,
      "name": "นิคมอุตสาหกรรมเอ็กโก ระยอง",
      "lat": 12.75583830900007,
      "lon": 101.15385591100005,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 1,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": 37.8,
      "nearest_alert_km": 8.325573579588061,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755000000035,
      "lon": 99.04487700000004,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.15377827813516,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 15,
      "name": "นิคมอุตสาหกรรมสงขลา",
      "lat": 6.541849830000046,
      "lon": 100.41360340000006,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.599631491585654,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 35,
      "name": "ท่าเรืออุตสาหกรรมมาบตาพุด",
      "lat": 12.665224000000025,
      "lon": 101.13304900000009,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.129941880333812,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 36,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ตะวันออก (มาบตาพุด)",
      "lat": 12.703063200000031,
      "lon": 101.12631190000008,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.733378129477195,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 37,
      "name": "นิคมอุตสาหกรรมผาแดง",
      "lat": 12.690742000000055,
      "lon": 101.13246900000007,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.655168787830641,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.71649400000007,
      "lon": 101.10591300000004,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.498117147569559,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 40,
      "name": "นิคมอุตสาหกรรมมาบตาพุด",
      "lat": 12.67868800000002,
      "lon": 101.13180600000004,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 12.378253895015913,
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646000000041,
      "lon": 101.00810700000005,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 5,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": null,
      "nearest_alert_km": 0.8464884712603398,
      "latest_observed_at": "2026-10-15 11:30"
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
      "latest_observed_at": "2026-10-15 11:30"
    },
    {
      "id": 72,
      "name": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "lat": 18.60204741100006,
      "lon": 99.03726889700005,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "heavy_rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 6.384441677806887,
      "latest_observed_at": "2026-10-15 11:30"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "สำนักสงฆ์โสธรรมนิมิตร",
      "station_code": "ONE064",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.168441,
      "lon": 101.03034,
      "rainfall_mm": 103.8,
      "value_text": "103.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.512657119107435,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
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
      "waterlevel_msl": 1.58,
      "storage_percent": 126.63,
      "bankfull_msl": null,
      "value_text": "1.58 ม.รทก.",
      "observed_at": "2026-10-15 11:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 13.787576568422011,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานหัวเวียง",
      "station_code": "C.67",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.36851,
      "lon": 100.414391,
      "waterlevel_msl": 5.02,
      "storage_percent": 124.33,
      "bankfull_msl": null,
      "value_text": "5.02 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.702718586020712,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.วัดบางกระเจ้านอก",
      "station_code": "BKC002",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.689612,
      "lon": 100.554886,
      "waterlevel_msl": 1.81,
      "storage_percent": 120.6,
      "bankfull_msl": null,
      "value_text": "1.81 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 16.515461215669056,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "waterlevel_msl": 5.86,
      "storage_percent": 117.74,
      "bankfull_msl": null,
      "value_text": "5.86 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.586439945291232,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.93,
      "storage_percent": 117.23,
      "bankfull_msl": null,
      "value_text": "1.93 ม.รทก.",
      "observed_at": "2026-10-15 11:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 16.06428903072714,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "waterlevel_msl": 5.91,
      "storage_percent": 115.71,
      "bankfull_msl": null,
      "value_text": "5.91 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 2.56,
      "storage_percent": 110.08,
      "bankfull_msl": null,
      "value_text": "2.56 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 2.65,
      "storage_percent": 109.49,
      "bankfull_msl": null,
      "value_text": "2.65 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 6.48,
      "storage_percent": 109.16,
      "bankfull_msl": null,
      "value_text": "6.48 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 41.27,
      "storage_percent": 109.02,
      "bankfull_msl": null,
      "value_text": "41.27 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 2.86,
      "storage_percent": 107.17,
      "bankfull_msl": null,
      "value_text": "2.86 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 2.12,
      "storage_percent": 105.85,
      "bankfull_msl": null,
      "value_text": "2.12 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 2.73,
      "storage_percent": 105.4,
      "bankfull_msl": null,
      "value_text": "2.73 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 49.05798711025778,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองมหาสวัสดิ บางกรวย-สวนผัก",
      "station_code": "BKK003",
      "province": "กรุงเทพมหานคร",
      "district": "ตลิ่งชัน",
      "lat": 13.79965,
      "lon": 100.43863,
      "waterlevel_msl": 2.31,
      "storage_percent": 104.76,
      "bankfull_msl": null,
      "value_text": "2.31 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 28.741410424380156,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 1.91,
      "storage_percent": 104.0,
      "bankfull_msl": null,
      "value_text": "1.91 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 20.11302278215949,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 3.02,
      "storage_percent": 103.57,
      "bankfull_msl": null,
      "value_text": "3.02 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 7.998524231584936,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 5.01,
      "storage_percent": 103.53,
      "bankfull_msl": null,
      "value_text": "5.01 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.11290468175869,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 4.81,
      "storage_percent": 103.38,
      "bankfull_msl": null,
      "value_text": "4.81 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 15.192004169383056,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 2.06,
      "storage_percent": 101.2,
      "bankfull_msl": null,
      "value_text": "2.06 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 27.81450504933709,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 4.2,
      "storage_percent": 100.68,
      "bankfull_msl": null,
      "value_text": "4.2 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
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
      "waterlevel_msl": 2.51,
      "storage_percent": 100.06,
      "bankfull_msl": null,
      "value_text": "2.51 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 24.300920472922257,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ่อวิน",
      "station_code": "SWNG",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.05505,
      "lon": 101.09782,
      "rainfall_mm": 89.8,
      "value_text": "89.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 0.8374957992377094,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยประมงศรีราชา",
      "station_code": "GOT001",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.185876,
      "lon": 100.916916,
      "rainfall_mm": 75.6,
      "value_text": "75.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.716709510122786,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง",
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
      "waterlevel_msl": 2.13,
      "storage_percent": 99.23,
      "bankfull_msl": null,
      "value_text": "2.13 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.195539924978746,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 38.8,
      "storage_percent": 98.39,
      "bankfull_msl": null,
      "value_text": "38.8 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.608170192807048,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางบาล",
      "station_code": "C.37",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.36319,
      "lon": 100.484833,
      "waterlevel_msl": 4.01,
      "storage_percent": 98.19,
      "bankfull_msl": null,
      "value_text": "4.01 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.42168601144319,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 3.6,
      "storage_percent": 96.92,
      "bankfull_msl": null,
      "value_text": "3.6 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.687099448793155,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.59,
      "storage_percent": 96.8,
      "bankfull_msl": null,
      "value_text": "1.59 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 38.62,
      "storage_percent": 96.43,
      "bankfull_msl": null,
      "value_text": "38.62 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.97559718239193,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 6.24,
      "storage_percent": 96.2,
      "bankfull_msl": null,
      "value_text": "6.24 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.153470420161305,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.04,
      "storage_percent": 95.34,
      "bankfull_msl": null,
      "value_text": "1.04 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.7752687912394733,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "storage_percent": 95.3,
      "bankfull_msl": null,
      "value_text": "3.34 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 25.846600860267063,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านวังขนาย",
      "station_code": "K.11A",
      "province": "กาญจนบุรี",
      "district": "ท่าม่วง",
      "lat": 13.95094,
      "lon": 99.645477,
      "waterlevel_msl": 15.53,
      "storage_percent": 95.11,
      "bankfull_msl": null,
      "value_text": "15.53 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.282138683426645,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "พระนครศรีอยุธยา",
      "station_code": "CPY011",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.36913,
      "lon": 100.52861,
      "waterlevel_msl": 4.52,
      "storage_percent": 94.9,
      "bankfull_msl": null,
      "value_text": "4.52 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.195312328999318,
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
      "waterlevel_msl": 5.87,
      "storage_percent": 94.56,
      "bankfull_msl": null,
      "value_text": "5.87 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.420438261300376,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 1.18,
      "storage_percent": 94.13,
      "bankfull_msl": null,
      "value_text": "1.18 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.19079991757201,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.44,
      "storage_percent": 92.68,
      "bankfull_msl": null,
      "value_text": "0.44 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.050330940229774,
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
      "waterlevel_msl": 6.24,
      "storage_percent": 92.66,
      "bankfull_msl": null,
      "value_text": "6.24 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.337808011616087,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 5.27,
      "storage_percent": 92.63,
      "bankfull_msl": null,
      "value_text": "5.27 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.510084795335397,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 3.72,
      "storage_percent": 92.63,
      "bankfull_msl": null,
      "value_text": "3.72 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.898946508897676,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บางตะบูนและบางตะบูนออก",
      "station_code": "GLF003",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.26553,
      "lon": 99.9418,
      "waterlevel_msl": 1.47,
      "storage_percent": 91.93,
      "bankfull_msl": null,
      "value_text": "1.47 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.45314445360332,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.31,
      "storage_percent": 91.73,
      "bankfull_msl": null,
      "value_text": "0.31 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 0.68,
      "storage_percent": 91.55,
      "bankfull_msl": null,
      "value_text": "0.68 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.50034924008027,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 6.71,
      "storage_percent": 91.41,
      "bankfull_msl": null,
      "value_text": "6.71 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.418025616363693,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.15,
      "storage_percent": 91.28,
      "bankfull_msl": null,
      "value_text": "1.15 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.674934171316372,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 1.4,
      "storage_percent": 90.17,
      "bankfull_msl": null,
      "value_text": "1.4 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.93130739016791,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 0.9,
      "storage_percent": 89.96,
      "bankfull_msl": null,
      "value_text": "0.9 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.60388187720373,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 7.39,
      "storage_percent": 89.49,
      "bankfull_msl": null,
      "value_text": "7.39 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.573455402215103,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 7.14,
      "storage_percent": 89.25,
      "bankfull_msl": null,
      "value_text": "7.14 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.67026197358812,
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
      "waterlevel_msl": 0.26,
      "storage_percent": 89.24,
      "bankfull_msl": null,
      "value_text": "0.26 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.45953341454558,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 0.81,
      "storage_percent": 88.25,
      "bankfull_msl": null,
      "value_text": "0.81 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 0.12,
      "storage_percent": 88.14,
      "bankfull_msl": null,
      "value_text": "0.12 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.945006421763477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 7.83,
      "storage_percent": 87.55,
      "bankfull_msl": null,
      "value_text": "7.83 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.01027944909514,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานอนุสรณ์ 100 ปีสิงห์บุรี (สะพานหลวงพ่อแพ 89)",
      "station_code": "HDA006",
      "province": "สิงห์บุรี",
      "district": "เมืองสิงห์บุรี",
      "lat": 14.870205,
      "lon": 100.408585,
      "waterlevel_msl": 10.53,
      "storage_percent": 86.67,
      "bankfull_msl": null,
      "value_text": "10.53 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 9.29,
      "storage_percent": 86.6,
      "bankfull_msl": null,
      "value_text": "9.29 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 34.39,
      "storage_percent": 86.56,
      "bankfull_msl": null,
      "value_text": "34.39 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.232514608114705,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานค่ายหลวง",
      "station_code": "K.55A",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.80568,
      "lon": 99.87159,
      "waterlevel_msl": 7.71,
      "storage_percent": 86.39,
      "bankfull_msl": null,
      "value_text": "7.71 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.86801957595799,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองแกลง",
      "station_code": "RAY001",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.802991,
      "lon": 101.65024,
      "waterlevel_msl": 3.09,
      "storage_percent": 86.34,
      "bankfull_msl": null,
      "value_text": "3.09 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.688334160220514,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 5.55,
      "storage_percent": 86.28,
      "bankfull_msl": null,
      "value_text": "5.55 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.515449625154027,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 6.64,
      "storage_percent": 85.65,
      "bankfull_msl": null,
      "value_text": "6.64 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.758642782654789,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.47,
      "storage_percent": 83.15,
      "bankfull_msl": null,
      "value_text": "1.47 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.87492828233833,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 8.45,
      "storage_percent": 82.8,
      "bankfull_msl": null,
      "value_text": "8.45 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.95975694360689,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 14.61,
      "storage_percent": 82.09,
      "bankfull_msl": null,
      "value_text": "14.61 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.87220334815228,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "waterlevel_msl": 3.93,
      "storage_percent": 81.55,
      "bankfull_msl": null,
      "value_text": "3.93 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.887388401638866,
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
      "waterlevel_msl": 4.19,
      "storage_percent": 81.47,
      "bankfull_msl": null,
      "value_text": "4.19 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.86535432381292,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 5.78,
      "storage_percent": 81.23,
      "bankfull_msl": null,
      "value_text": "5.78 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.629065557313126,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 4.06,
      "storage_percent": 81.13,
      "bankfull_msl": null,
      "value_text": "4.06 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.70008602758719,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 4.2,
      "storage_percent": 80.86,
      "bankfull_msl": null,
      "value_text": "4.2 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 3.6632876362743403,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "waterlevel_msl": 2.52,
      "storage_percent": 80.21,
      "bankfull_msl": null,
      "value_text": "2.52 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.819479632166193,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานข้ามคลองบางม่วง",
      "station_code": "ONE024",
      "province": "พัทลุง",
      "district": "ปากพะยูน",
      "lat": 7.365284,
      "lon": 100.27959,
      "waterlevel_msl": 0.34,
      "storage_percent": 80.13,
      "bankfull_msl": null,
      "value_text": "0.34 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.67365550525883,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 1.67,
      "storage_percent": 80.02,
      "bankfull_msl": null,
      "value_text": "1.67 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.087742962577927,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 1.15,
      "storage_percent": 79.47,
      "bankfull_msl": null,
      "value_text": "1.15 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.540324535327358,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "waterlevel_msl": 7.62,
      "storage_percent": 79.37,
      "bankfull_msl": null,
      "value_text": "7.62 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.232421477602117,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "storage_percent": 79.05,
      "bankfull_msl": null,
      "value_text": "0.73 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.095038483394372,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 6.13,
      "storage_percent": 79.03,
      "bankfull_msl": null,
      "value_text": "6.13 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.80889634653896,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 42.45,
      "storage_percent": 78.96,
      "bankfull_msl": null,
      "value_text": "42.45 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 309.87,
      "storage_percent": 78.68,
      "bankfull_msl": null,
      "value_text": "309.87 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.00045685599943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 6.64,
      "storage_percent": 78.28,
      "bankfull_msl": null,
      "value_text": "6.64 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 10.591098779288023,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.ลาดชิด (ทุ่งผักไห่)",
      "station_code": "TCP004",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.44056,
      "lon": 100.35738,
      "waterlevel_msl": 3.91,
      "storage_percent": 78.2,
      "bankfull_msl": null,
      "value_text": "3.91 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 26.22916357558414,
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
      "waterlevel_msl": 2.95,
      "storage_percent": 77.78,
      "bankfull_msl": null,
      "value_text": "2.95 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.479318846322684,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 53.57,
      "storage_percent": 77.38,
      "bankfull_msl": null,
      "value_text": "53.57 ม.รทก.",
      "observed_at": "2026-10-14 15:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.03611661451666,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร.บางแก้ว (ทุ่งผักไห่)",
      "station_code": "TCP005",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.436604,
      "lon": 100.37149,
      "waterlevel_msl": 3.86,
      "storage_percent": 77.2,
      "bankfull_msl": null,
      "value_text": "3.86 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.845110037519646,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 42.76,
      "storage_percent": 76.58,
      "bankfull_msl": null,
      "value_text": "42.76 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.043927864496574,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "วัดเกยไชยเหนือ",
      "station_code": "N.67",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.86918,
      "lon": 100.264732,
      "waterlevel_msl": 24.48,
      "storage_percent": 76.2,
      "bankfull_msl": null,
      "value_text": "24.48 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 21.44,
      "storage_percent": 74.58,
      "bankfull_msl": null,
      "value_text": "21.44 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.28308700895721,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 3.23,
      "storage_percent": 74.33,
      "bankfull_msl": null,
      "value_text": "3.23 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.195758700698022,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 0.94,
      "storage_percent": 72.92,
      "bankfull_msl": null,
      "value_text": "0.94 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.11919849605185,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.4,
      "storage_percent": 70.57,
      "bankfull_msl": null,
      "value_text": "0.4 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 32.35698288447142,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองสมุทรสาคร",
      "station_code": "THA009",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.58598,
      "lon": 100.23048,
      "rainfall_mm": 66.2,
      "value_text": "66.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 4.674934171316372,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปากแม่น้ำบางปะกง",
      "station_code": "ridtele_TKgt54",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.474833,
      "lon": 100.98196,
      "rainfall_mm": 64.5,
      "value_text": "64.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.39764781236248,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนวัดหนองน้ำเขียว",
      "station_code": "ONE063",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.234701,
      "lon": 101.11684,
      "rainfall_mm": 64.2,
      "value_text": "64.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.817839662436686,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
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
      "rainfall_mm": 63.6,
      "value_text": "63.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 34.867398487093766,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังพา",
      "station_code": "STN0155",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.898464,
      "lon": 100.262261,
      "rainfall_mm": 63.0,
      "value_text": "63 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.27805357743103,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านอุใดใต้",
      "station_code": "ridtele_LA04 (TX.334)",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928031,
      "lon": 99.935987,
      "rainfall_mm": 63.0,
      "value_text": "63 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.62145726325911,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปาล์มไทย (บ้านส้านแดง)",
      "station_code": "STN1916",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 7.046194,
      "lon": 100.030196,
      "rainfall_mm": 62.5,
      "value_text": "62.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 36.619354672165436,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 57.4,
      "value_text": "57.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 8.817571825599366,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
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
      "rainfall_mm": 56.8,
      "value_text": "56.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.89890323153971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 54.5,
      "value_text": "54.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.886330492754643,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "rainfall_mm": 52.4,
      "value_text": "52.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 4.60388187720373,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.อู่ตะเภา",
      "station_code": "ridtele_TSL24",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.987824,
      "lon": 100.462205,
      "rainfall_mm": 51.0,
      "value_text": "51 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.527643673342766,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองภาษีเจริญ เพชรเกษม69",
      "station_code": "BKK005",
      "province": "กรุงเทพมหานคร",
      "district": "บางแค",
      "lat": 13.69158,
      "lon": 100.38127,
      "rainfall_mm": 50.8,
      "value_text": "50.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.633474059900415,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนดินดำ",
      "station_code": "STN1597",
      "province": "พัทลุง",
      "district": "ป่าบอน",
      "lat": 7.132483,
      "lon": 100.007778,
      "rainfall_mm": 50.5,
      "value_text": "50.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.22878128002875,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บางปะกง",
      "station_code": "BPK001",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.54901,
      "lon": 101.00111,
      "rainfall_mm": 47.8,
      "value_text": "47.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 1.7752687912394733,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำเชี่ยว",
      "station_code": "STN1687",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.466831,
      "lon": 100.833499,
      "rainfall_mm": 45.0,
      "value_text": "45 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.13375242742401,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ควนกาหลง",
      "station_code": "STU004",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.928349,
      "lon": 99.936035,
      "rainfall_mm": 44.6,
      "value_text": "44.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 47.6096254577221,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 43.6,
      "value_text": "43.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.834415195032278,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 43.0,
      "value_text": "43 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 27.092634302063587,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาจันทร์",
      "station_code": "STN0512",
      "province": "พัทลุง",
      "district": "ป่าบอน",
      "lat": 7.201698,
      "lon": 100.091954,
      "rainfall_mm": 40.5,
      "value_text": "40.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 36.553411121017405,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ปลวกแดง",
      "station_code": "ONE091",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.970066,
      "lon": 101.20457,
      "rainfall_mm": 37.8,
      "value_text": "37.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.943096814769784,
      "nearest_estate": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านชายคลอง",
      "station_code": "STN2062",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.963151,
      "lon": 100.458623,
      "rainfall_mm": 36.0,
      "value_text": "36 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.004532299603285,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานวัดมงคลร่วมใจ (บ้านวังสาร)",
      "station_code": "FOP022",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.670555,
      "lon": 100.32789,
      "waterlevel_msl": 36.58,
      "storage_percent": 69.17,
      "bankfull_msl": null,
      "value_text": "36.58 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.807326663586515,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระพิมล (ไทรน้อย)",
      "station_code": "BKK018",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 13.97396,
      "lon": 100.31901,
      "waterlevel_msl": 2.17,
      "storage_percent": 69.08,
      "bankfull_msl": null,
      "value_text": "2.17 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 39.08855794765454,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองลาดพร้าว วัดบางบัว",
      "station_code": "BKK021",
      "province": "กรุงเทพมหานคร",
      "district": "บางเขน",
      "lat": 13.85402,
      "lon": 100.58746,
      "waterlevel_msl": 1.4,
      "storage_percent": 68.46,
      "bankfull_msl": null,
      "value_text": "1.4 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.837600556856398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 35.65,
      "storage_percent": 68.37,
      "bankfull_msl": null,
      "value_text": "35.65 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.570134034587971,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 8.32,
      "storage_percent": 66.42,
      "bankfull_msl": null,
      "value_text": "8.32 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.387270610268398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 8.87,
      "storage_percent": 66.23,
      "bankfull_msl": null,
      "value_text": "8.87 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.932480429893243,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขาวังไทร",
      "station_code": "Z.11",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.85783,
      "lon": 101.615738,
      "waterlevel_msl": 7.11,
      "storage_percent": 65.76,
      "bankfull_msl": null,
      "value_text": "7.11 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.599850450622228,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 1.97,
      "storage_percent": 65.67,
      "bankfull_msl": null,
      "value_text": "1.97 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.830034274183255,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 31.81,
      "storage_percent": 65.43,
      "bankfull_msl": null,
      "value_text": "31.81 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 32.2038263788759,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 23.89,
      "storage_percent": 65.34,
      "bankfull_msl": null,
      "value_text": "23.89 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.6003120453232,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ศาลาดิน",
      "station_code": "VLGE20",
      "province": "นครปฐม",
      "district": "พุทธมณฑล",
      "lat": 13.80777,
      "lon": 100.27417,
      "waterlevel_msl": 0.81,
      "storage_percent": 65.32,
      "bankfull_msl": null,
      "value_text": "0.81 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 29.667511489847108,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหนองไผ่",
      "station_code": "K.62",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.78092,
      "lon": 99.420921,
      "waterlevel_msl": 52.66,
      "storage_percent": 65.2,
      "bankfull_msl": null,
      "value_text": "52.66 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.02850371868432,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สถานีแพดับเพลิง",
      "station_code": "S.32",
      "province": "สระบุรี",
      "district": "เมืองสระบุรี",
      "lat": 14.55752,
      "lon": 100.924217,
      "waterlevel_msl": 8.7,
      "storage_percent": 64.16,
      "bankfull_msl": null,
      "value_text": "8.7 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 11.713427738015856,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองนราภิรมย์ (บางเลน)",
      "station_code": "BKK019",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 13.88207,
      "lon": 100.29086,
      "waterlevel_msl": 1.87,
      "storage_percent": 62.29,
      "bankfull_msl": null,
      "value_text": "1.87 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.742377106873434,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 320.86,
      "storage_percent": 60.74,
      "bankfull_msl": null,
      "value_text": "320.86 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 31.649037474678174,
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
      "waterlevel_msl": 14.86,
      "storage_percent": 59.87,
      "bankfull_msl": null,
      "value_text": "14.86 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 43.86269583770013,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "waterlevel_msl": 291.7,
      "storage_percent": 59.49,
      "bankfull_msl": null,
      "value_text": "291.7 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.384441677806887,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านนาแขม",
      "station_code": "Kgt.43A",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.02174,
      "lon": 101.750664,
      "waterlevel_msl": 7.84,
      "storage_percent": 59.44,
      "bankfull_msl": null,
      "value_text": "7.84 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 15.03117019647864,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนครป่าหมากร่วมใจ",
      "station_code": "VLGE12",
      "province": "พิษณุโลก",
      "district": "บางกระทุ่ม",
      "lat": 16.60887,
      "lon": 100.36977,
      "waterlevel_msl": 34.34,
      "storage_percent": 59.17,
      "bankfull_msl": null,
      "value_text": "34.34 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 23.82531823296878,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 440.0,
      "storage_percent": 59.03,
      "bankfull_msl": null,
      "value_text": "440 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.197415007222318,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "ลำพะเนียง อ.เมือง",
      "station_code": "URTU03",
      "province": "หนองบัวลำภู",
      "district": "เมืองหนองบัวลำภู",
      "lat": 17.182448,
      "lon": 102.431941,
      "waterlevel_msl": 207.28,
      "storage_percent": 58.78,
      "bankfull_msl": null,
      "value_text": "207.28 ม.รทก.",
      "observed_at": "2026-10-15 07:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 48.77565416025865,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "กฟผ."
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
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 7.193355299520884,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
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
      "waterlevel_msl": 0.2,
      "storage_percent": 58.21,
      "bankfull_msl": null,
      "value_text": "0.2 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.910660310627168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 10.88,
      "storage_percent": 57.6,
      "bankfull_msl": null,
      "value_text": "10.88 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.23419412493915,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านค่าย",
      "station_code": "RAY004",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.706861,
      "lon": 101.300354,
      "waterlevel_msl": 1.96,
      "storage_percent": 57.13,
      "bankfull_msl": null,
      "value_text": "1.96 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.250183047104377,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
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
      "waterlevel_msl": 30.15,
      "storage_percent": 55.98,
      "bankfull_msl": null,
      "value_text": "30.15 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.640208181648024,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "storage_percent": 54.38,
      "bankfull_msl": null,
      "value_text": "40.8 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.19110745038412,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 1.52,
      "storage_percent": 53.97,
      "bankfull_msl": null,
      "value_text": "1.52 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.810791452117027,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 29.97,
      "storage_percent": 53.65,
      "bankfull_msl": null,
      "value_text": "29.97 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.686873952200855,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านคลองหวะ",
      "station_code": "X.174",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.98637,
      "lon": 100.481857,
      "waterlevel_msl": 4.75,
      "storage_percent": 53.49,
      "bankfull_msl": null,
      "value_text": "4.75 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.688545576793311,
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
      "waterlevel_msl": 346.43,
      "storage_percent": 53.26,
      "bankfull_msl": null,
      "value_text": "346.43 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.271067024949225,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ตะพานหิน",
      "station_code": "NAN007",
      "province": "พิจิตร",
      "district": "ตะพานหิน",
      "lat": 16.27034,
      "lon": 100.41396,
      "waterlevel_msl": 28.25,
      "storage_percent": 52.62,
      "bankfull_msl": null,
      "value_text": "28.25 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.15118819719544,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 30.38,
      "storage_percent": 52.37,
      "bankfull_msl": null,
      "value_text": "30.38 ม.รทก.",
      "observed_at": "2026-10-15 06:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 34.640014831393714,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 12.35,
      "storage_percent": 51.1,
      "bankfull_msl": null,
      "value_text": "12.35 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 5.6523093721227236,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
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
      "waterlevel_msl": 294.45,
      "storage_percent": 51.08,
      "bankfull_msl": null,
      "value_text": "294.45 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 44.537954498051086,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 29.81,
      "storage_percent": 50.72,
      "bankfull_msl": null,
      "value_text": "29.81 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.646875796659856,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 6.37,
      "storage_percent": 50.23,
      "bankfull_msl": null,
      "value_text": "6.37 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.322455362116656,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 16.73,
      "storage_percent": 49.71,
      "bankfull_msl": null,
      "value_text": "16.73 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.843297933527834,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 20.5,
      "storage_percent": 49.29,
      "bankfull_msl": null,
      "value_text": "20.5 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.88918727950312,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 301.65,
      "storage_percent": 48.48,
      "bankfull_msl": null,
      "value_text": "301.65 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 20.8389479818548,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 36.69,
      "storage_percent": 48.07,
      "bankfull_msl": null,
      "value_text": "36.69 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 22.296714406834624,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแม่แต",
      "station_code": "P.67",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 19.00985,
      "lon": 98.95974,
      "waterlevel_msl": 315.54,
      "storage_percent": 47.11,
      "bankfull_msl": null,
      "value_text": "315.54 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 46.074034078099054,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 43.28,
      "storage_percent": 45.2,
      "bankfull_msl": null,
      "value_text": "43.28 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.73752831943657,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านป่า",
      "station_code": "S.9",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.62918,
      "lon": 101.014427,
      "waterlevel_msl": 11.91,
      "storage_percent": 44.82,
      "bankfull_msl": null,
      "value_text": "11.91 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 0.8464884712603398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 13.26,
      "storage_percent": 44.08,
      "bankfull_msl": null,
      "value_text": "13.26 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 25.230396811100928,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านวังนกแอ่น",
      "station_code": "N.24A",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.84712,
      "lon": 100.512093,
      "waterlevel_msl": 45.99,
      "storage_percent": 43.73,
      "bankfull_msl": null,
      "value_text": "45.99 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.08018070636455,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 31.75,
      "storage_percent": 43.42,
      "bankfull_msl": null,
      "value_text": "31.75 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.603460352265568,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 320.87,
      "storage_percent": 43.2,
      "bankfull_msl": null,
      "value_text": "320.87 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.611997774933826,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": 19.88,
      "storage_percent": 42.97,
      "bankfull_msl": null,
      "value_text": "19.88 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 15.51,
      "storage_percent": 42.87,
      "bankfull_msl": null,
      "value_text": "15.51 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.94248989029333,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านบึง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านสบวิน",
      "station_code": "P.82",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.65423,
      "lon": 98.685661,
      "waterlevel_msl": 401.43,
      "storage_percent": 42.12,
      "bankfull_msl": null,
      "value_text": "401.43 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 37.50040396407909,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่าไฮ",
      "station_code": "E.65",
      "province": "กาฬสินธุ์",
      "district": "ท่าคันโท",
      "lat": 16.95174,
      "lon": 103.168053,
      "waterlevel_msl": 162.47,
      "storage_percent": 41.75,
      "bankfull_msl": null,
      "value_text": "162.47 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 49.86838939842491,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "waterlevel_msl": 290.09,
      "storage_percent": 41.12,
      "bankfull_msl": null,
      "value_text": "290.09 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 303.87,
      "storage_percent": 40.32,
      "bankfull_msl": null,
      "value_text": "303.87 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 16.36387841872487,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 290.36,
      "storage_percent": 40.09,
      "bankfull_msl": null,
      "value_text": "290.36 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 18.71260178716996,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางศาลา",
      "station_code": "X.90",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.93124,
      "lon": 100.439857,
      "waterlevel_msl": 3.21,
      "storage_percent": 40.03,
      "bankfull_msl": null,
      "value_text": "3.21 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.304963599540951,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 43.28,
      "storage_percent": 39.96,
      "bankfull_msl": null,
      "value_text": "43.28 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 39.10879394408661,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 3.11,
      "storage_percent": 39.83,
      "bankfull_msl": null,
      "value_text": "3.11 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.304873258948597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหนองวัวซอ",
      "station_code": "Kh.53",
      "province": "อุดรธานี",
      "district": "หนองวัวซอ",
      "lat": 17.2659,
      "lon": 102.59243,
      "waterlevel_msl": 204.16,
      "storage_percent": 38.15,
      "bankfull_msl": null,
      "value_text": "204.16 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 30.15878108274017,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "waterlevel_msl": 15.6,
      "storage_percent": 37.74,
      "bankfull_msl": null,
      "value_text": "15.6 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 12.745614593827344,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 21.05,
      "storage_percent": 36.56,
      "bankfull_msl": null,
      "value_text": "21.05 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.74608468709011,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 167.38,
      "storage_percent": 36.06,
      "bankfull_msl": null,
      "value_text": "167.38 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 21.725608707789945,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานบ้านคันแม่น้ำบน",
      "station_code": "SKT004",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.81476,
      "lon": 99.80374,
      "waterlevel_msl": 45.59,
      "storage_percent": 35.96,
      "bankfull_msl": null,
      "value_text": "45.59 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 45.3918896494035,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 33.18,
      "storage_percent": 35.91,
      "bankfull_msl": null,
      "value_text": "33.18 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.599631491585654,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "waterlevel_msl": 21.92,
      "storage_percent": 35.72,
      "bankfull_msl": null,
      "value_text": "21.92 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 429.68,
      "storage_percent": 35.18,
      "bankfull_msl": null,
      "value_text": "429.68 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 40.927600919337834,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "สะพานวงแหวนรอบ 3",
      "station_code": "P.103",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.86651,
      "lon": 98.978188,
      "waterlevel_msl": 302.86,
      "storage_percent": 35.08,
      "bankfull_msl": null,
      "value_text": "302.86 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 30.0578075597904,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 19.421019936194998,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านท่ามะปรางค์",
      "station_code": "M.43A",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51204,
      "lon": 101.380348,
      "waterlevel_msl": 372.99,
      "storage_percent": 34.42,
      "bankfull_msl": null,
      "value_text": "372.99 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 41.97170823213221,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 366.89,
      "storage_percent": 33.97,
      "bankfull_msl": null,
      "value_text": "366.89 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 35.76,
      "storage_percent": 33.7,
      "bankfull_msl": null,
      "value_text": "35.76 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 27.65208157617353,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านหาดใหญ่ใน",
      "station_code": "X.44",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.00218,
      "lon": 100.456062,
      "waterlevel_msl": 0.93,
      "storage_percent": 33.5,
      "bankfull_msl": null,
      "value_text": "0.93 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 10.64480235683347,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 10.57,
      "storage_percent": 33.28,
      "bankfull_msl": null,
      "value_text": "10.57 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 24.92980239014854,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านโนนสุขภูมิ",
      "station_code": "Kgt.13A",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.91009,
      "lon": 101.838211,
      "waterlevel_msl": 8.72,
      "storage_percent": 32.39,
      "bankfull_msl": null,
      "value_text": "8.72 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.91451213461515,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 289.18,
      "storage_percent": 31.63,
      "bankfull_msl": null,
      "value_text": "289.18 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 13.49732805181853,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองผันน้ำยม-น่าน4",
      "station_code": "DIV004",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.67167,
      "lon": 100.24581,
      "waterlevel_msl": 37.19,
      "storage_percent": 31.62,
      "bankfull_msl": null,
      "value_text": "37.19 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.872698547385934,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 33.08,
      "storage_percent": 31.21,
      "bankfull_msl": null,
      "value_text": "33.08 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 14.967810300867315,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 379.57,
      "storage_percent": 30.94,
      "bankfull_msl": null,
      "value_text": "379.57 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 26.3732617114831,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านสลวงนอก",
      "station_code": "P.93",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 19.015091,
      "lon": 98.880836,
      "waterlevel_msl": 341.27,
      "storage_percent": 30.79,
      "bankfull_msl": null,
      "value_text": "341.27 ม.รทก.",
      "observed_at": "2026-10-15 06:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 48.79068518938278,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ลำน้ำสานบ้านทุ่งยาวเหนือ",
      "station_code": "FOP016",
      "province": "ลำพูน",
      "district": "เมืองลำพูน",
      "lat": 18.511826,
      "lon": 99.07731,
      "waterlevel_msl": 318.06,
      "storage_percent": 30.53,
      "bankfull_msl": null,
      "value_text": "318.06 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 9.52263887180247,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขานางบวช",
      "station_code": "Ny.1B",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.24582,
      "lon": 101.274246,
      "waterlevel_msl": 4.55,
      "storage_percent": 30.28,
      "bankfull_msl": null,
      "value_text": "4.55 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 42.88640558131459,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหว้าหลัง",
      "station_code": "STN1691",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.644711,
      "lon": 100.734254,
      "rainfall_mm": 33.5,
      "value_text": "33.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 37.219863971960265,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการ อบต. ป่าขะ",
      "station_code": "CG02",
      "province": "นครนายก",
      "district": "บ้านนา",
      "lat": 14.301295,
      "lon": 101.07008,
      "rainfall_mm": 32.8,
      "value_text": "32.8 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.27979204659398,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองลำพญาธาร",
      "station_code": "MOU460",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.26568,
      "lon": 101.89133,
      "rainfall_mm": 32.4,
      "value_text": "32.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 33.930789681787886,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังหิน",
      "station_code": "STN0178",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.263495,
      "lon": 101.891589,
      "rainfall_mm": 32.0,
      "value_text": "32 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 33.68961903666013,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองหวะตอนล่าง",
      "station_code": "ridtele_TSL40",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.987312,
      "lon": 100.474043,
      "rainfall_mm": 32.0,
      "value_text": "32 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.82134403938696,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คอหงษ์ สกษ.",
      "station_code": "48571",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.0,
      "lon": 100.5,
      "rainfall_mm": 32.0,
      "value_text": "32 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.499796057973093,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ นสล. 1 (ซับปลากั้ง)",
      "station_code": "MOU411",
      "province": "สระบุรี",
      "district": "วิหารแดง",
      "lat": 14.412701,
      "lon": 100.97773,
      "rainfall_mm": 31.6,
      "value_text": "31.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.505517398800027,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านสามพวง 1",
      "station_code": "STN1536",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.79757,
      "lon": 99.787305,
      "rainfall_mm": 31.0,
      "value_text": "31 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 45.76274395790002,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 30.0,
      "value_text": "30 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 45.2052987960418,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 29.5,
      "value_text": "29.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 30.296569538044483,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 29.0,
      "value_text": "29 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.009850932620274,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 28.5,
      "value_text": "28.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.332532128777713,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 24.593397363992267,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 28.5,
      "value_text": "28.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.00326202136592,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 26.0,
      "value_text": "26 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.69356603018849,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 26.0,
      "value_text": "26 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 30.138215549802513,
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
      "rainfall_mm": 26.0,
      "value_text": "26 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 41.696235786638894,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านวัด",
      "station_code": "STN0292",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.487867,
      "lon": 100.672471,
      "rainfall_mm": 25.0,
      "value_text": "25 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 29.22203897485744,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "รร.วัดอู่ข้าว",
      "station_code": "RSK7",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.19111,
      "lon": 100.75421,
      "rainfall_mm": 24.8,
      "value_text": "24.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.710907497810883,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "rainfall_mm": 24.0,
      "value_text": "24 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 9.082132755141009,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียน ตชด.บ้านส้านักเอาะ",
      "station_code": "FOP069",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.483326,
      "lon": 100.779366,
      "rainfall_mm": 23.8,
      "value_text": "23.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.92913921048899,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "นำร่อง",
      "station_code": "48457",
      "province": "สมุทรปราการ",
      "district": "พระสมุทรเจดีย์",
      "lat": 13.37722,
      "lon": 100.59944,
      "rainfall_mm": 23.7,
      "value_text": "23.7 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.7486112751969,
      "nearest_estate": "นิคมอุตสาหกรรมบางปู",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ฝายท่าเชียด",
      "station_code": "ridtele_TX21A",
      "province": "พัทลุง",
      "district": "บางแก้ว",
      "lat": 7.361018,
      "lon": 100.1085,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 48.03374283041742,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนวัดเกาะ",
      "station_code": "STN2212",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.974349,
      "lon": 100.397919,
      "rainfall_mm": 23.0,
      "value_text": "23 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 5.649145159681108,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าดอยอีหุ้ย",
      "station_code": "MOU334",
      "province": "ลำพูน",
      "district": "ทุ่งหัวช้าง",
      "lat": 18.153486,
      "lon": 98.9833,
      "rainfall_mm": 22.4,
      "value_text": "22.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.16459754740818,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านวังประจัน",
      "station_code": "STN0293",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.754096,
      "lon": 100.149164,
      "rainfall_mm": 22.0,
      "value_text": "22 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 36.598535167828565,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์ป่าอ่างช้างน้ำ",
      "station_code": "MOU468",
      "province": "ชลบุรี",
      "district": "บ้านบึง",
      "lat": 13.2743,
      "lon": 101.082,
      "rainfall_mm": 22.0,
      "value_text": "22 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.65685867509546,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านบึง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านบ่อต้นแซะ",
      "station_code": "STN2058",
      "province": "สงขลา",
      "district": "จะนะ",
      "lat": 6.897362,
      "lon": 100.77132,
      "rainfall_mm": 22.0,
      "value_text": "22 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.06590911252587,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.85174212688185,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 20.8,
      "value_text": "20.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.67365550525883,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามคลองอู่ตะเภา",
      "station_code": "ONE037",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 7.134997,
      "lon": 100.45321,
      "rainfall_mm": 20.8,
      "value_text": "20.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.45953341454558,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 20.6,
      "value_text": "20.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.535304371354172,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองเดื่อ",
      "station_code": "STN1481",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.514054,
      "lon": 101.442372,
      "rainfall_mm": 20.5,
      "value_text": "20.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 48.32608351092006,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.บ้านวังสะตือ",
      "station_code": "ridtele_TY.57",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.87341,
      "lon": 100.02551,
      "rainfall_mm": 20.0,
      "value_text": "20 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 35.6529638557236,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ชลบุรี",
      "station_code": "48459",
      "province": "ชลบุรี",
      "district": "เมืองชลบุรี",
      "lat": 13.36667,
      "lon": 100.98333,
      "rainfall_mm": 19.4,
      "value_text": "19.4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 6.497316424856503,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านบาโรย",
      "station_code": "STN0152",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.774554,
      "lon": 100.230542,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 29.64693605816949,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อุทยานแห่งชาติเขาใหญ่",
      "station_code": "MOU114",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.434425,
      "lon": 101.372604,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 44.57235873708247,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้าน กม.80",
      "station_code": "STN1592",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.317818,
      "lon": 101.837874,
      "rainfall_mm": 19.0,
      "value_text": "19 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 39.88540679282871,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระศรีศิลป์",
      "station_code": "ATG072",
      "province": "สระบุรี",
      "district": "หนองแค",
      "lat": 14.32729,
      "lon": 100.87117,
      "rainfall_mm": 18.6,
      "value_text": "18.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 7.441110103352378,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทับยาง",
      "station_code": "STN1713",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.589842,
      "lon": 100.813667,
      "rainfall_mm": 18.5,
      "value_text": "18.5 มม.",
      "observed_at": "2026-10-15 09:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 44.51430061148113,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำลำตะคอง",
      "station_code": "MOU246",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.550208,
      "lon": 101.459465,
      "rainfall_mm": 18.0,
      "value_text": "18 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.271067024949225,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าโตนงาช้าง",
      "station_code": "MOU502",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.943634,
      "lon": 100.250435,
      "rainfall_mm": 18.0,
      "value_text": "18 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.04845477137316,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 17.8,
      "value_text": "17.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 42.94713605347155,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโป่งก้อนเส้า",
      "station_code": "STN0275",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.491639,
      "lon": 101.135569,
      "rainfall_mm": 17.5,
      "value_text": "17.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 20.17227616803731,
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
      "rainfall_mm": 17.5,
      "value_text": "17.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.567648024216368,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานแมน้ำปาสัก บ้านนาโฉง",
      "station_code": "HDA012",
      "province": "สระบุรี",
      "district": "เมืองสระบุรี",
      "lat": 14.546983,
      "lon": 100.88976,
      "rainfall_mm": 17.4,
      "value_text": "17.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.387270610268398,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 4.210559976461311,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านคอก-วังไทร",
      "station_code": "STN0507",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.585939,
      "lon": 100.672797,
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 29.048769895702318,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 17.0,
      "value_text": "17 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 12.304873258948597,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 16.5,
      "value_text": "16.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 31.561407857762894,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 15.9,
      "value_text": "15.9 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 35.68882401014099,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "รพ.สต.น้ำเชี่ยว",
      "station_code": "FOP070",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.48154,
      "lon": 100.82659,
      "rainfall_mm": 15.8,
      "value_text": "15.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.11596259561385,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 15.6,
      "value_text": "15.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.6302054783819,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ทต.กรอกสมบูรณ์",
      "station_code": "RBPI",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.77716,
      "lon": 101.65875,
      "rainfall_mm": 15.6,
      "value_text": "15.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.360027355574916,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 15.4,
      "value_text": "15.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.02662947022679,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 15.4,
      "value_text": "15.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 48.7230236681225,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองทุเรียน",
      "station_code": "STN0505",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.732478,
      "lon": 100.800317,
      "rainfall_mm": 15.0,
      "value_text": "15 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 47.6828614219267,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 15.0,
      "value_text": "15 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 35.810369515188974,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานีคลองต่ำ",
      "station_code": "ridtele_STN05",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.975436,
      "lon": 100.36767,
      "rainfall_mm": 15.0,
      "value_text": "15 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 3.7516262325205503,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานบ้านคันแม่น้ำบน",
      "station_code": "SKT004",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.81476,
      "lon": 99.80374,
      "rainfall_mm": 14.4,
      "value_text": "14.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 45.3918896494035,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 14.2,
      "value_text": "14.2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 14.80312968515648,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 21.57347033053051,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแก้มอ้น",
      "station_code": "STN1791",
      "province": "ราชบุรี",
      "district": "จอมบึง",
      "lat": 13.745911,
      "lon": 99.464418,
      "rainfall_mm": 13.5,
      "value_text": "13.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 43.37418896744573,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 13.4,
      "value_text": "13.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.819754870491224,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สถานี ชป.คลองวาด",
      "station_code": "ridtele_STN01",
      "province": "สงขลา",
      "district": "หาดใหญ่",
      "lat": 6.990953,
      "lon": 100.38278,
      "rainfall_mm": 13.0,
      "value_text": "13 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 3.183177745060809,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
      "station_code": "BKK017",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.66949,
      "lon": 100.80058,
      "rainfall_mm": 12.6,
      "value_text": "12.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 9.945006421763477,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศีรษะจรเข้น้อย",
      "station_code": "BST1",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.67777,
      "lon": 100.7945,
      "rainfall_mm": 12.6,
      "value_text": "12.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 8.967110872590503,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปราจีนบุรี",
      "station_code": "48430",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.05842,
      "lon": 101.3693,
      "rainfall_mm": 12.5,
      "value_text": "12.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 34.97261818444056,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๑๗ (กลางดง)",
      "station_code": "MOU106",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.549575,
      "lon": 101.26519,
      "rainfall_mm": 12.4,
      "value_text": "12.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 28.89681274800726,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "คลองนราภิรมย์ (บางเลน)",
      "station_code": "BKK019",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 13.88207,
      "lon": 100.29086,
      "rainfall_mm": 12.2,
      "value_text": "12.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 37.742377106873434,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "rainfall_mm": 12.2,
      "value_text": "12.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 16.06428903072714,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าโต้",
      "station_code": "STN1024",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.756746,
      "lon": 100.533575,
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 27.323322558783495,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 25.206033075933966,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 12.0,
      "value_text": "12 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 18.885850429897452,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บุพราหมณ์",
      "station_code": "TLAN",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.20791,
      "lon": 101.90556,
      "rainfall_mm": 11.6,
      "value_text": "11.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 27.657768692287558,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองสอง",
      "station_code": "STN0216",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.37957,
      "lon": 101.849891,
      "rainfall_mm": 11.5,
      "value_text": "11.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.62875175543822,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 11.5,
      "value_text": "11.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 46.631223481902786,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 11.5,
      "value_text": "11.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 4.582213245492624,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ฉะเชิงเทรา",
      "station_code": "48458",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.51556,
      "lon": 101.45833,
      "rainfall_mm": 11.3,
      "value_text": "11.3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 17.754779544208294,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "คลองระพีพัฒน์แยกตก",
      "station_code": "CAN001",
      "province": "ปทุมธานี",
      "district": "คลองหลวง",
      "lat": 14.20612,
      "lon": 100.74476,
      "rainfall_mm": 11.2,
      "value_text": "11.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.195758700698022,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเหนือคลอง",
      "station_code": "STN1917",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.982381,
      "lon": 100.019556,
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 37.66249817066509,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 40.67327840570694,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.181",
      "station_code": "ridtele_STN02",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.060311,
      "lon": 100.454271,
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 11.923906869186597,
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
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 41.18610578740122,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.73828437653031,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 11.0,
      "value_text": "11 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 19.84017165230821,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานป่าโมก",
      "station_code": "HDA009",
      "province": "อ่างทอง",
      "district": "ป่าโมก",
      "lat": 14.498074,
      "lon": 100.44962,
      "rainfall_mm": 10.8,
      "value_text": "10.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 15.758642782654789,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผังปาล์ม 1",
      "station_code": "ridtele_LA07 (TX.336)",
      "province": "สตูล",
      "district": "มะนัง",
      "lat": 6.998849,
      "lon": 99.911013,
      "rainfall_mm": 10.5,
      "value_text": "10.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.54217177724728,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินแด้น",
      "station_code": "STN0053",
      "province": "กาญจนบุรี",
      "district": "ด่านมะขามเตี้ย",
      "lat": 13.780584,
      "lon": 99.420933,
      "rainfall_mm": 10.5,
      "value_text": "10.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 49.01515188945304,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตห้ามล่าสัตว์ป่าแก่งคอย",
      "station_code": "MOU427",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.5439,
      "lon": 101.0983,
      "rainfall_mm": 10.2,
      "value_text": "10.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ฝนปานกลาง",
      "severity_score": 1,
      "distance_km": 13.221869640809718,
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
      "rainfall_mm": 9.8,
      "value_text": "9.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.71665998706693,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "รร.ผังปาล์ม 4",
      "station_code": "SWR037",
      "province": "สตูล",
      "district": "มะนัง",
      "lat": 7.02235,
      "lon": 99.93085,
      "rainfall_mm": 9.6,
      "value_text": "9.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.3665291807886,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางกระเจ้า",
      "station_code": "BKJO",
      "province": "สมุทรสาคร",
      "district": "เมืองสมุทรสาคร",
      "lat": 13.52146,
      "lon": 100.19283,
      "rainfall_mm": 9.6,
      "value_text": "9.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.3780877670010234,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนหนองสาหร่าย (สะพานขาว)",
      "station_code": "STN2201",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.717627,
      "lon": 101.430923,
      "rainfall_mm": 9.5,
      "value_text": "9.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.64241403638004,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "นาทวี",
      "station_code": "JNA002",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.738124,
      "lon": 100.69319,
      "rainfall_mm": 9.4,
      "value_text": "9.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.8139582811628,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 9.4,
      "value_text": "9.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.515461215669056,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทุ่งไพล",
      "station_code": "STN1715",
      "province": "สงขลา",
      "district": "สะบ้าย้อย",
      "lat": 6.547668,
      "lon": 100.836957,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.77246490226134,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เขื่อนนายก",
      "station_code": "ridtele_TNy11",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.18205,
      "lon": 101.162164,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.95410833234516,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองป่าหวาย",
      "station_code": "STN0139",
      "province": "ระยอง",
      "district": "ปลวกแดง",
      "lat": 12.978503,
      "lon": 101.399368,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.900892575962452,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.67264192258456,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองหวะตอนบน",
      "station_code": "ridtele_TSL39",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.969362,
      "lon": 100.558293,
      "rainfall_mm": 9.0,
      "value_text": "9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.329694424387654,
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
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.413886475651438,
      "nearest_estate": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านตลาดนาทวี",
      "station_code": "STN0845",
      "province": "สงขลา",
      "district": "นาทวี",
      "lat": 6.741373,
      "lon": 100.694815,
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.16943500258247,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 8.5,
      "value_text": "8.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.601379042586075,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
      "station_code": "MOU482",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.240835,
      "lon": 101.04208,
      "rainfall_mm": 8.2,
      "value_text": "8.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.585106331078295,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านเขาหวาย",
      "station_code": "STN1656",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.874416,
      "lon": 101.470981,
      "rainfall_mm": 8.0,
      "value_text": "8 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.95358932850628,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามลำภาชี",
      "station_code": "ridtele_TK.68",
      "province": "ราชบุรี",
      "district": "จอมบึง",
      "lat": 13.7521,
      "lon": 99.4374,
      "rainfall_mm": 8.0,
      "value_text": "8 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.3689507943451,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองไม้กอง",
      "station_code": "NMKO",
      "province": "กำแพงเพชร",
      "district": "ไทรงาม",
      "lat": 16.43571,
      "lon": 99.94509,
      "rainfall_mm": 7.8,
      "value_text": "7.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.711193739908897,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 7.6,
      "value_text": "7.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.402327011407195,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 7.6,
      "value_text": "7.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.345810037612154,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
      "station_code": "MOU121",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.768159,
      "lon": 100.97308,
      "rainfall_mm": 7.6,
      "value_text": "7.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.509787632138606,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
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
      "rainfall_mm": 7.6,
      "value_text": "7.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.927600919337834,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "คลองระพีพัฒน์แยกใต้ หนองเสือ",
      "station_code": "BKK013",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.2206,
      "lon": 100.89168,
      "rainfall_mm": 7.6,
      "value_text": "7.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.479318846322684,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผู้ช่วยผู้ใหญ่บ้าน หมู่ 6",
      "station_code": "TB87",
      "province": "นครนายก",
      "district": "ปากพลี",
      "lat": 14.23455,
      "lon": 101.35369,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.732431417798544,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าเชียด",
      "station_code": "STN2210",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.263168,
      "lon": 100.08232,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.72229243790302,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนโต๊ะเหลง",
      "station_code": "STN1594",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.800666,
      "lon": 100.07791,
      "rainfall_mm": 7.5,
      "value_text": "7.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.74499309017716,
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
      "rainfall_mm": 7.4,
      "value_text": "7.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.861758952956861,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "rainfall_mm": 7.4,
      "value_text": "7.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.71905854693515,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "rainfall_mm": 7.4,
      "value_text": "7.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.862570238737058,
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
      "rainfall_mm": 7.3,
      "value_text": "7.3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.90605207349294,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "คลองลำปลาทิว ลาดกระบัง",
      "station_code": "BKK009",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.7407,
      "lon": 100.79468,
      "rainfall_mm": 7.2,
      "value_text": "7.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.0362140416044405,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.47688068231695,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.6003120453232,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่ปอน",
      "station_code": "STN0014",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.467068,
      "lon": 98.609275,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.553046178242994,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระธรรมราชา",
      "station_code": "ATG082",
      "province": "ปทุมธานี",
      "district": "ธัญบุรี",
      "lat": 14.07636,
      "lon": 100.89392,
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.48927154769707,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.728187231816047,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 7.0,
      "value_text": "7 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.54383835472897,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.โคคลาน",
      "station_code": "KOKN",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 13.99106,
      "lon": 102.65064,
      "rainfall_mm": 6.8,
      "value_text": "6.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.46333033604034,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 6.8,
      "value_text": "6.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.625413383813196,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 6.6,
      "value_text": "6.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.70008602758719,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่เลียงพัฒนา",
      "station_code": "STN0144",
      "province": "ลำปาง",
      "district": "เสริมงาม",
      "lat": 18.18034,
      "lon": 99.165629,
      "rainfall_mm": 6.5,
      "value_text": "6.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.48851735893484,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยส้ม",
      "station_code": "TBW035",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.865248,
      "lon": 100.861244,
      "rainfall_mm": 6.4,
      "value_text": "6.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.067160264056348,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 6.4,
      "value_text": "6.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.797913859926771,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 6.4,
      "value_text": "6.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.69905378335247,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "rainfall_mm": 6.2,
      "value_text": "6.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.510084795335397,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 6.2,
      "value_text": "6.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.06762398773943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.73752831943657,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.459434496401541,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่หวาน",
      "station_code": "STN1110",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.957837,
      "lon": 99.233553,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.63343831896001,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ท่าช้าง-บางกล่ำ",
      "station_code": "ridtele_TSL28",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.127928,
      "lon": 100.433274,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.581715399865779,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองกั่ว",
      "station_code": "STN0227",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 6.94136,
      "lon": 100.133067,
      "rainfall_mm": 6.0,
      "value_text": "6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.10782949240627,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาดิน",
      "station_code": "VLGE20",
      "province": "นครปฐม",
      "district": "พุทธมณฑล",
      "lat": 13.80777,
      "lon": 100.27417,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.667511489847108,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติแม่ตะไคร้ ",
      "station_code": "DNP077",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.96566,
      "lon": 99.2407,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.75334189255487,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้อยสว่าง",
      "station_code": "LK13",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.1652,
      "lon": 100.77855,
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.28296324638516,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "rainfall_mm": 5.6,
      "value_text": "5.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.129143527401745,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำตกแม่กลาง",
      "station_code": "STN1978",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.48915,
      "lon": 98.672086,
      "rainfall_mm": 5.5,
      "value_text": "5.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.49289673374737,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองอ้อมนนท์ บางใหญ่ (ถนนบางกรวย-ไทรน้อย)",
      "station_code": "BKK007",
      "province": "นนทบุรี",
      "district": "บางใหญ่",
      "lat": 13.87089,
      "lon": 100.43626,
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.93130739016791,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 5.4,
      "value_text": "5.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.560304216545661,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.329689656172745,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโป่ง",
      "station_code": "RAJ002",
      "province": "ราชบุรี",
      "district": "บ้านโป่ง",
      "lat": 13.81866,
      "lon": 99.86508,
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.232421477602117,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บางกล่ำ",
      "station_code": "SLA007",
      "province": "สงขลา",
      "district": "บางกล่ำ",
      "lat": 7.079418,
      "lon": 100.42788,
      "rainfall_mm": 5.2,
      "value_text": "5.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.910660310627168,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดท่าไม้",
      "station_code": "ridtele_TY.58",
      "province": "นครสวรรค์",
      "district": "ชุมแสง",
      "lat": 15.915063,
      "lon": 100.247163,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.1772366654261,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ฝายท่าลาด",
      "station_code": "ridtele_TKgt59",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.707719,
      "lon": 101.401415,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.932995220382105,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.94354132561136,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.ปลายคลองบางซอ (ทุ่งเจ้าเจ็ด)",
      "station_code": "TCP002",
      "province": "สุพรรณบุรี",
      "district": "สองพี่น้อง",
      "lat": 14.194874,
      "lon": 100.13267,
      "rainfall_mm": 5.0,
      "value_text": "5 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.28443791048643,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพมหานคร",
      "station_code": "48455",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.72639,
      "lon": 100.56,
      "rainfall_mm": 4.9,
      "value_text": "4.9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.574010437654685,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.703677802963367,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเลขที่ 29/2 หมู่ 1",
      "station_code": "TE92",
      "province": "สุโขทัย",
      "district": "กงไกรลาศ",
      "lat": 16.907274,
      "lon": 99.880561,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.67781827632225,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "หาดใหญ่",
      "station_code": "48569",
      "province": "สงขลา",
      "district": "คลองหอยโข่ง",
      "lat": 6.91667,
      "lon": 100.43333,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.022193259139728,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "คลองแม่น้ำใน",
      "station_code": "TB0004",
      "province": "สระบุรี",
      "district": "วิหารแดง",
      "lat": 14.30168,
      "lon": 100.94521,
      "rainfall_mm": 4.8,
      "value_text": "4.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.432445197289608,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 4.7,
      "value_text": "4.7 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.415115576731975,
      "nearest_estate": "นิคมอุตสาหกรรมบางพลี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานข้ามแม่น้ำน้อย (ทุ่งผักไห่)",
      "station_code": "TCP013",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.498449,
      "lon": 100.36825,
      "rainfall_mm": 4.6,
      "value_text": "4.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.509585135609612,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 4.6,
      "value_text": "4.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.640208181648024,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่ศรีจำปา",
      "station_code": "STN1588",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.907834,
      "lon": 102.377541,
      "rainfall_mm": 4.5,
      "value_text": "4.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.99937521772513,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 4.5,
      "value_text": "4.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.210666100402584,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดบ้านห้วยชัน",
      "station_code": "ONE077",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.98736,
      "lon": 102.43794,
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.889603296860976,
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
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.89260098235917,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 4.4,
      "value_text": "4.4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.74777170386582,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เทศบาลเมืองมาบตาพุด",
      "station_code": "TJ23",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.72456,
      "lon": 101.12732,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.7683030605670476,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองน้ำเย็น",
      "station_code": "STN1789",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.786534,
      "lon": 101.726321,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.05298427696326,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านใหม่ไทยถาวร",
      "station_code": "STN1579",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.094721,
      "lon": 102.694658,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.91622759029636,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแหลม",
      "station_code": "ridtele_TPB15",
      "province": "เพชรบุรี",
      "district": "บ้านแหลม",
      "lat": 13.212777,
      "lon": 99.982754,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.438133353034026,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองส่งน้ำชลประทาน บ้านสร่างโศก",
      "station_code": "HDA011",
      "province": "สระบุรี",
      "district": "บ้านหมอ",
      "lat": 14.650794,
      "lon": 100.742775,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.932480429893243,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโนนสมบูรณ์",
      "station_code": "STN1476",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.777422,
      "lon": 101.341215,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.65081543882089,
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
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.409006009977226,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองหิน",
      "station_code": "STN1027",
      "province": "สงขลา",
      "district": "รัตภูมิ",
      "lat": 7.008708,
      "lon": 100.134958,
      "rainfall_mm": 4.0,
      "value_text": "4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.81516132713832,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "วัดคลองคันโท",
      "station_code": "ONE100",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.94595,
      "lon": 102.28505,
      "rainfall_mm": 3.8,
      "value_text": "3.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.16856990409531,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 3.6,
      "value_text": "3.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.81450504933709,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองแหน",
      "station_code": "NGNG",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.68338,
      "lon": 101.32512,
      "rainfall_mm": 3.6,
      "value_text": "3.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.652635856761577,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินลับ",
      "station_code": "STN0678",
      "province": "สระบุรี",
      "district": "มวกเหล็ก",
      "lat": 14.672587,
      "lon": 101.126529,
      "rainfall_mm": 3.5,
      "value_text": "3.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.810230158371521,
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
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.86535432381292,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อโศก",
      "station_code": "AIT001",
      "province": "กรุงเทพมหานคร",
      "district": "วัฒนา",
      "lat": 13.74325,
      "lon": 100.562164,
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.810791452117027,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.884259043741018,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ทต.บ้านโตนด",
      "station_code": "KRMT",
      "province": "สุโขทัย",
      "district": "คีรีมาศ",
      "lat": 16.83377,
      "lon": 99.80269,
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.74965940394183,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.741410424380156,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 3.2,
      "value_text": "3.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.846600860267063,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านควนจง",
      "station_code": "STN2213",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.968613,
      "lon": 100.51886,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.099733015190356,
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
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.456427249901711,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.819030100615226,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": " สะพานข้ามคลองโคน",
      "station_code": "PTTEP1",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3319,
      "lon": 99.96896,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.11919849605185,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.4425024286866,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านนกเขาเปล้า",
      "station_code": "STN1202",
      "province": "ลพบุรี",
      "district": "โคกสำโรง",
      "lat": 15.017018,
      "lon": 100.793065,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.37516196567731,
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
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.467051064439985,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.362706902722444,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "วัดวังปลาช่อน",
      "station_code": "ONE078",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.242124,
      "lon": 99.65333,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.81915636894548,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยยาง",
      "station_code": "ridtele_TTL.01",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.013375,
      "lon": 102.644844,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.629371981357586,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ขนงพระ",
      "station_code": "TLPC",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.60689,
      "lon": 101.45632,
      "rainfall_mm": 3.0,
      "value_text": "3 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.26659989385583,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 2.9,
      "value_text": "2.9 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.727372111208721,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ มค.3 (แม่กวง)",
      "station_code": "DNP078",
      "province": "เชียงใหม่",
      "district": "ดอยสะเก็ด",
      "lat": 18.95247,
      "lon": 99.13795,
      "rainfall_mm": 2.8,
      "value_text": "2.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.381114432933025,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 2.8,
      "value_text": "2.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.3732617114831,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ ท่าเรือคลองเตย",
      "station_code": "48454",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70694,
      "lon": 100.56805,
      "rainfall_mm": 2.7,
      "value_text": "2.7 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.264975308798602,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะพานโยธาอำนวยพัฒนา",
      "station_code": "TB0006",
      "province": "เชียงใหม่",
      "district": "สันป่าตอง",
      "lat": 18.57391,
      "lon": 98.86222,
      "rainfall_mm": 2.6,
      "value_text": "2.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.71260178716996,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหัวบุ่ง",
      "station_code": "STN1582",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.199403,
      "lon": 101.402909,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.3125162204715,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.210566343383235,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.550807101848743,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองขนุน",
      "station_code": "STN0138",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.894996,
      "lon": 101.370717,
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.110870573297016,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.367553202960405,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95365547083031,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.02413326233396,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 2.5,
      "value_text": "2.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.472632961201965,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
      "station_code": "TCP012",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.327773,
      "lon": 100.405464,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.830034274183255,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
      "station_code": "MOU479",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.912333,
      "lon": 101.72454,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.65416268665123,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ปตร.กลางคลองข้าวเม่า (วัดกระสังข์)",
      "station_code": "HDA003",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.357306,
      "lon": 100.60569,
      "rainfall_mm": 2.4,
      "value_text": "2.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.351085674133945,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.423863607482492,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.865798450815927,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "วัดห้วยเกษียร",
      "station_code": "ONE076",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.181127,
      "lon": 101.413635,
      "rainfall_mm": 2.2,
      "value_text": "2.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.01185573221601,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่าโปร่ง",
      "station_code": "STN2036",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.835209,
      "lon": 100.460953,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.0344717749169,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.462268614614038,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.96825900252832,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.202805151690335,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.825842039437443,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อาคารเลขที่ ๙๐๑",
      "station_code": "HII001",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.85604,
      "lon": 100.57558,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.105235156555995,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.627858011376595,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.16809110290915,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.77735864308142,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ บางนา สกษ.",
      "station_code": "48453",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.66639,
      "lon": 100.60611,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.193998319993636,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สถานีคลองหวะ",
      "station_code": "ridtele_STN07",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.970027,
      "lon": 100.515863,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.740743742646153,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สถานี X.112",
      "station_code": "ridtele_STN11",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.705239,
      "lon": 100.433266,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.29739283152536,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองน้ำใส",
      "station_code": "ridtele_TTL.02",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.85454,
      "lon": 102.377483,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.020798806607928,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองวังตะไคร้",
      "station_code": "MOU462",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.321305,
      "lon": 101.30604,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95471174698642,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "คลองลาดพร้าว วัดบางบัว",
      "station_code": "BKK021",
      "province": "กรุงเทพมหานคร",
      "district": "บางเขน",
      "lat": 13.85402,
      "lon": 100.58746,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.837600556856398,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยกองเลาะ",
      "station_code": "STN0434",
      "province": "ลำพูน",
      "district": "บ้านโฮ่ง",
      "lat": 18.250809,
      "lon": 98.91515,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.30608381966317,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 09:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.31500625009662,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.480895715006135,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองห่าย",
      "station_code": "STN1811",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.453694,
      "lon": 98.729318,
      "rainfall_mm": 2.0,
      "value_text": "2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.41808696338698,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "นครปฐม",
      "station_code": "48451",
      "province": "นครปฐม",
      "district": "กำแพงแสน",
      "lat": 14.01167,
      "lon": 99.97,
      "rainfall_mm": 1.9,
      "value_text": "1.9 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.5977605723089,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "แม่หาด",
      "station_code": "VLGE25",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.46006,
      "lon": 98.65094,
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.68344096468531,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.983521249057052,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.689352461252378,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 1.8,
      "value_text": "1.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.961853274234922,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.47203362888489,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนแม่ตาลน้อย",
      "station_code": "VLGE28",
      "province": "ลำปาง",
      "district": "ห้างฉัตร",
      "lat": 18.41521,
      "lon": 99.26469,
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.374606073549067,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.19079991757201,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.81373867868995,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.820867390641911,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.95593032816644,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.687099448793155,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.76029248076602,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.11290468175869,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติเขาน้ำค้าง",
      "station_code": "MOU138",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.600056,
      "lon": 100.58906,
      "rainfall_mm": 1.6,
      "value_text": "1.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.43381666900714,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "วัดศรัทธาธรรม",
      "station_code": "ridtele_TMK01",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3773,
      "lon": 99.993,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.82839589804128,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านกะดุ",
      "station_code": "STN2063",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.632195,
      "lon": 100.06077,
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.248179796434606,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.90200011806768,
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.801458400015285,
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.798940702128306,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.46182522235307,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.549117341880127,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.2891962640767,
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
      "rainfall_mm": 1.5,
      "value_text": "1.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.26669642873633,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.00462535610129,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "คลองพระพิมล (ไทรน้อย)",
      "station_code": "BKK018",
      "province": "นนทบุรี",
      "district": "ไทรน้อย",
      "lat": 13.97396,
      "lon": 100.31901,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.08855794765454,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.8525868457705155,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
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
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.90254768279872,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "เมืองอ่างทอง",
      "station_code": "CPY008",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.5765,
      "lon": 100.44852,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.573455402215103,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.92980239014854,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.6697105917741,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.07779839285101,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.583760714839544,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สะพานคลองนางรอง",
      "station_code": "MOU461",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.315195,
      "lon": 101.312836,
      "rainfall_mm": 1.4,
      "value_text": "1.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.79263454648103,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "กบินทร์บุรี",
      "station_code": "48439",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.98333,
      "lon": 101.70722,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.389305560510971,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บางเลน",
      "station_code": "THA007",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.01636,
      "lon": 100.17979,
      "rainfall_mm": 1.2,
      "value_text": "1.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.05798711025778,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านผาเงิบ",
      "station_code": "STN1170",
      "province": "ลำพูน",
      "district": "ป่าซาง",
      "lat": 18.315978,
      "lon": 98.918348,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.44331786385233,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "นครสวรรค์",
      "station_code": "48400",
      "province": "นครสวรรค์",
      "district": "เมืองนครสวรรค์",
      "lat": 15.67183,
      "lon": 100.13236,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.260739188317785,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.384962279972882,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแจ้ซ้อน",
      "station_code": "STN1073",
      "province": "ลำพูน",
      "district": "บ้านธิ",
      "lat": 18.660141,
      "lon": 99.157814,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.122328135077066,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ลพบุรี",
      "station_code": "48426",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.79972,
      "lon": 100.645,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.91757270504817,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.2111914571275,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านห้วยน้ำดำ",
      "station_code": "STN1915",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.858916,
      "lon": 100.031146,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.89815350010758,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.59859365427491,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.819760116104607,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซอย 8",
      "station_code": "STN1620",
      "province": "สตูล",
      "district": "ควนกาหลง",
      "lat": 6.881952,
      "lon": 99.997221,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.41456729138937,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.310005487503117,
      "nearest_estate": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สตูล",
      "station_code": "48570",
      "province": "สตูล",
      "district": "เมืองสตูล",
      "lat": 6.65,
      "lon": 100.08333,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.41260863393544,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำลัด",
      "station_code": "STN2060",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.62954,
      "lon": 100.442957,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.275678327210088,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.338510512529137,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านลาดใหญ่สามัคคี",
      "station_code": "ridtele_TK.74",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.482,
      "lon": 100.044,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.023939117114256,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับสมบูรณ์",
      "station_code": "STN1002",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.950064,
      "lon": 102.556857,
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.149694302703274,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.9364122713410525,
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.3995193108718,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 1.0,
      "value_text": "1 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.429097174626868,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.9,
      "value_text": "0.9 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.628650685880636,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "รพ.สต.บ้านชากหมาก",
      "station_code": "ONE090",
      "province": "ระยอง",
      "district": "บ้านฉาง",
      "lat": 12.796795,
      "lon": 101.027664,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 12.106499164490682,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.062517576185186,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านสีระมัน",
      "station_code": "ONE089",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 13.038727,
      "lon": 101.66171,
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.90814625497235,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
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
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.152293848641293,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.547808122729683,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.8,
      "value_text": "0.8 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.03761805796871,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ห้วยโป่ง สกษ.",
      "station_code": "48479",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.735,
      "lon": 101.135,
      "rainfall_mm": 0.7,
      "value_text": "0.7 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.4276244076373317,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านท่ามะปราง",
      "station_code": "NF01",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51634,
      "lon": 101.3774,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.527456272396115,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อบต.พลูตาหลวง",
      "station_code": "PLTL",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.69861,
      "lon": 100.9762,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.209969273856109,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.80225767760791,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.46776780508681,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.0367060718405,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.74280568227024,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.711485933246703,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สะเดา",
      "station_code": "48574",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.79806,
      "lon": 100.39056,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.618419732349793,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ตลาดน้ำบางน้ำผึ้ง",
      "station_code": "BKC008",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.678656,
      "lon": 100.57356,
      "rainfall_mm": 0.6,
      "value_text": "0.6 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.51733445065366,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.48505998336849,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านปลักหว้า",
      "station_code": "STN1923",
      "province": "สตูล",
      "district": "ท่าแพ",
      "lat": 6.80296,
      "lon": 99.963794,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.31667259650628,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.265462842626405,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้ำลัด",
      "station_code": "STN1810",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.430578,
      "lon": 98.66912,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.24698576206503,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ราชบุรี",
      "station_code": "48464",
      "province": "ราชบุรี",
      "district": "เมืองราชบุรี",
      "lat": 13.48931,
      "lon": 99.79239,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.594860632472948,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหินสี",
      "station_code": "STN0479",
      "province": "ราชบุรี",
      "district": "ปากท่อ",
      "lat": 13.324017,
      "lon": 99.558695,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.96607177882031,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 1.5535112929361043,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านเนินหินกอง",
      "station_code": "ridtele_TKgt48",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.782015,
      "lon": 101.900566,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.084732908100303,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 0.7363282289368601,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม",
      "station_code": "ridtele_TKgt51",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.069966,
      "lon": 101.518579,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.27638078151886,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านสองพี่น้อง",
      "station_code": "STN1800",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.77487,
      "lon": 100.422722,
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.930225487273518,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.10524516319903,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.5286606078379,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.5,
      "value_text": "0.5 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.86122806015871,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ลานกระบือ",
      "station_code": "LKBU",
      "province": "กำแพงเพชร",
      "district": "ลานกระบือ",
      "lat": 16.61806,
      "lon": 99.88005,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.04478714963737,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.39908310017906,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองครก",
      "station_code": "MOU480",
      "province": "จันทบุรี",
      "district": "แก่งหางแมว",
      "lat": 13.1851,
      "lon": 101.801,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.75867825012914,
      "nearest_estate": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ป่าต้นน้ำคลองมะเดื่อ อช.เขาใหญ่ (นางรอง)",
      "station_code": "ONWR02",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.3693,
      "lon": 101.2712,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.64308020943391,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.78040063937346,
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.6626087034943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "เกาะสีชัง",
      "station_code": "48460",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16167,
      "lon": 100.80194,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.980585146406192,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ทม.สะเดา",
      "station_code": "TSDO",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.63837,
      "lon": 100.42479,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.803452650452002,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.798881544360018,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.603460352265568,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.36387841872487,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.07076184699975,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.81336861580222,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.246140847874884,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "คลองบางหลวง",
      "station_code": "CPY009",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.4158,
      "lon": 100.44071,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.586439945291232,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.34579668119612,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "พิษณุโลก",
      "station_code": "48378",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.79481,
      "lon": 100.2793,
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 10:00",
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
      "rainfall_mm": 0.4,
      "value_text": "0.4 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.617720214020938,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านทาสองท่า หมู่ 7",
      "station_code": "TE42",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.53423,
      "lon": 99.24249,
      "rainfall_mm": 0.3,
      "value_text": "0.3 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.79034979844632,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "สัตหีบ",
      "station_code": "48477",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.68333,
      "lon": 100.98333,
      "rainfall_mm": 0.3,
      "value_text": "0.3 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.799008781419568,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์กู้ภัยทางทะเลและชายฝั่งวงศ์อมาตย์ หมู่ 5",
      "station_code": "TJ13",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.9578,
      "lon": 100.88441,
      "rainfall_mm": 0.3,
      "value_text": "0.3 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.475414165455161,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยศึกษาการพัฒนาการอนุรักษ์ต้นน้ำคลองอู่ตะเภา",
      "station_code": "MOU421",
      "province": "สงขลา",
      "district": "สะเดา",
      "lat": 6.7799,
      "lon": 100.274,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.10163327261954,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.82680048251451,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.87492828233833,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.968176524129444,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.46042027634919,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.28308700895721,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.076556482399493,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.614992020981914,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.887388401638866,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร กุฎิ (ทุ่งป่าโมก)",
      "station_code": "TCP006",
      "province": "พระนครศรีอยุธยา",
      "district": "ผักไห่",
      "lat": 14.412405,
      "lon": 100.40116,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.629065557313126,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.160641045515042,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.569436005387221,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.59469414361081,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อ่างเก็บน้ำห้วยไคร้",
      "station_code": "RES012",
      "province": "ลำพูน",
      "district": "แม่ทา",
      "lat": 18.50746,
      "lon": 99.22739,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.40189804493517,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นาแขม",
      "station_code": "VLGE50",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.04255,
      "lon": 101.72051,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.82661524391665,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ศาลาเอนกประสงค์ หมู่ 2 (ติดกับโรงเรียนบ้านทุ่งสะแกง)",
      "station_code": "TE24",
      "province": "ลำปาง",
      "district": "เมืองปาน",
      "lat": 18.70853,
      "lon": 99.48497,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.150260325485704,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.131766068445735,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.8907144661931,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.68430691375189,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.73106564587656,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนามฟุตบอล ม.1",
      "station_code": "TJ04",
      "province": "ชลบุรี",
      "district": "เกาะสีชัง",
      "lat": 13.16044,
      "lon": 100.80563,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.5851746337789,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.230396811100928,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.934015748296225,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองเพล ม.17",
      "station_code": "TC11",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.51906,
      "lon": 101.37222,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.90620485120995,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.ยางมณี",
      "station_code": "ATG161",
      "province": "สิงห์บุรี",
      "district": "ท่าช้าง",
      "lat": 14.751,
      "lon": 100.41463,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.016853910614486,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.087742962577927,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.933208442922655,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บางปะอิน",
      "station_code": "CPY012",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.30455,
      "lon": 100.56645,
      "rainfall_mm": 0.2,
      "value_text": "0.2 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.998524231584936,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อู่ซ่อมรถ บ้านสุขสมบูรณ์ หมู่ 2",
      "station_code": "TB92",
      "province": "นครราชสีมา",
      "district": "วังน้ำเขียว",
      "lat": 14.347167,
      "lon": 101.94108,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.5318997064484,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการกองทุนบ้านหนองผักแว่น หมู่ 9",
      "station_code": "TE65",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.04115,
      "lon": 102.57745,
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.362732155627924,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.873111363604046,
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
      "rainfall_mm": 0.1,
      "value_text": "0.1 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.987801807227864,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.829898907434359,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.533455547425596,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.74914784453526,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.738842906492124,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.91590554305922,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.12659666215714,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.18130339852194,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.458776686692346,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สา",
      "station_code": "MOU002",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.900038,
      "lon": 98.84829,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.6505840052055,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.107596883298854,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ปตร. คลองลัดบางยอ 2",
      "station_code": "BKC004",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.661021,
      "lon": 100.56727,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.787576568422011,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.407156077101288,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานน้ำแม่สา",
      "station_code": "MOU009",
      "province": "เชียงใหม่",
      "district": "แม่ริม",
      "lat": 18.885838,
      "lon": 98.826904,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.55447608245622,
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.656212216313946,
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.772552410745256,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติทะเลบัน",
      "station_code": "MOU137",
      "province": "สตูล",
      "district": "ควนโดน",
      "lat": 6.709046,
      "lon": 100.16905,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.79114215034916,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
      "agency": "พพภ"
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.194588131796827,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.322275019675324,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.032304015443806,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.9743283114886534,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.83554483458552,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.300920472922257,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.690468831113463,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.661566990988423,
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.511528792919691,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.00521210240413,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.82903602115875,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.42992494503993,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.871180193723266,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.134987561246035,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.82136051988167,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.956700247083184,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.378957321579485,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.57972039805713,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.01883074973619,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.664184881715943,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.69943626602246,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "รพ. ส่งเสริมสุขภาพ บ้าน น้ำปาด",
      "station_code": "TD53",
      "province": "พิษณุโลก",
      "district": "เนินมะปราง",
      "lat": 16.70876,
      "lon": 100.57362,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.613132823947964,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.45840553015746,
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.308980998149355,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "อาคารเวทีกลางสระบัว",
      "station_code": "TH27",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.21373,
      "lon": 100.58728,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.94079121983301,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.88203537235225,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.401074024916895,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.972358863302844,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.32557009291526,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.67026197358812,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.234463351624534,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.043784776286916,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.339556195558867,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.450437870816923,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.790887330336005,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.656128530441595,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.35698288447142,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.22136732051762,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.31348022005833,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.671061081165224,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.18333738835385,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.493648713330077,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.963610408910807,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.89283428146734,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.234807897344204,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านเหมืองแร่",
      "station_code": "ONE088",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.880652,
      "lon": 101.784584,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.50258179986661,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.223225531528975,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.674009630615416,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.82685133752198,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.13113552273412,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.344812903403486,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.95258634488175,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.936440902782635,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 10:50",
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
      "observed_at": "2026-10-15 08:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.42745390227255,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.540324535327358,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.973657272477844,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.043260588859773,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.4696895239987,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.194461805100175,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.766895211963295,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.76035745632954,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.21630688212356,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-15 01:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.52514315465291,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.51203972700152,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.682767693819189,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.83949113726908,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.004598414131543,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 35.357636704948185,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.338041526084151,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองกระท้อน",
      "station_code": "STN0786",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.823198,
      "lon": 101.381608,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.538902464418241,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.55428562754781,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.21491903883384,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79532822696729,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.87220334815228,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.050330940229774,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.พิจิตร",
      "station_code": "NPCT",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.98768,
      "lon": 100.57162,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.488954741504234,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.321326804014046,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.95749858969102,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.83250537963344,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.197415007222318,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.00045685599943,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 41.45314445360332,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 18.43748229741365,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.50034924008027,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.407063059099814,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.435510867872697,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 3.6632876362743403,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองส้ม",
      "station_code": "ridtele_TS.23",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.822028,
      "lon": 101.014594,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.958961752754117,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.94734582105726,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.30160634817812,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.34532511144996,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.39494078518871,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.15118819719544,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.23801708576194,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.2038263788759,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.61576896150359,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.112979181278362,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.05130379751956,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.19110745038412,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.83875240754259,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.82531823296878,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.967810300867315,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.872698547385934,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.09939112273897,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.75107369201308,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.38261214685205,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ศรีมหาโพธิ์",
      "station_code": "ridtele_TKgt62",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.973075,
      "lon": 101.512525,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.878766058468745,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สมบูรณ์",
      "station_code": "ridtele_TNy9",
      "province": "นครนายก",
      "district": "องครักษ์",
      "lat": 13.970389,
      "lon": 101.138699,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.3540411127709,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 28.137859157261943,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.10232557437147,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "วัดท่ากระบือ",
      "station_code": "ridtele_TTC09",
      "province": "สมุทรสาคร",
      "district": "กระทุ่มแบน",
      "lat": 13.662052,
      "lon": 100.223332,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.166988830996637,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.65802972934656,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.178957036570175,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.77788461109181,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.312998761667174,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 9.970221220850517,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.628593181156308,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.007849785401035,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.005244861689754,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.581632172415926,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 27.638225132016643,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.06728169191569,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.320357859744572,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 19.28974776627312,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.282739229159408,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.878858104936317,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95975694360689,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.9375086711988,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.197406162559915,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 6.455301106484008,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "สะพานเจริญราษฎร์รังสรรค์",
      "station_code": "MOU463",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.067594,
      "lon": 101.75532,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 17.53868284110217,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.66529735667747,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.11277293382128,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.68105996458992,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.954084799469323,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 7.146651614165659,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.466774895498872,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.725608707789945,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.369207077956524,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.37359449364129,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.604002556626014,
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79867579046488,
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.833813912894552,
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
      "observed_at": "2026-10-15 08:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.78256897832434,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.631190161803122,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.925507314908446,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 31.84323641894764,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 29.503418956657505,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.6247820990615,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.11645205473142,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.495226581811686,
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.979005262634885,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 20.253111123603006,
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.22230027714344,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.418025616363693,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม (KGT7A)",
      "station_code": "PRC004",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.070941,
      "lon": 101.51893,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 23.337808011616087,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.04088797676839,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.445528831027715,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.71187816567904,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.337182080568624,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.6523093721227236,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 13.250183047104377,
      "nearest_estate": "นิคมอุตสาหกรรมซีพีจีซี",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.947742929730865,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "เมืองแกลง",
      "station_code": "RAY001",
      "province": "ระยอง",
      "district": "แกลง",
      "lat": 12.802991,
      "lon": 101.65024,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.688334160220514,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.93348365136987,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.147470169810376,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.660308412072265,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.22265938238649,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "พพภ"
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.153470420161305,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:50",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.781185552109186,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ปภ."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.819479632166193,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 26.392967489256403,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.45760158424925,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 14.306312776039722,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 15.195312328999318,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 47.82618430363889,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 39.600694785677696,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ตากฟ้า สกษ.",
      "station_code": "48401",
      "province": "นครสวรรค์",
      "district": "ตากฟ้า",
      "lat": 15.34944,
      "lon": 100.53028,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 34.322537154648934,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 2.963768572718923,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "อต."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.84401032739771,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "อต."
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.095038483394372,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.26694804483545,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "อต."
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
      "observed_at": "2026-10-15 07:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.77565416025865,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
      "agency": "กฟผ."
    },
    {
      "kind": "rainfall",
      "station": "สงขลา",
      "station_code": "48568",
      "province": "สงขลา",
      "district": "เมืองสงขลา",
      "lat": 7.18211,
      "lon": 100.60769,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.49404463391094,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "อต."
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.515074180699685,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านโคกทัง",
      "station_code": "STN0134",
      "province": "สงขลา",
      "district": "นาหม่อม",
      "lat": 6.981245,
      "lon": 100.592958,
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.90713751571804,
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.922082679996798,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 10.991726336523053,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "rainfall_mm": 0.0,
      "value_text": "0 มม.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 30.08095907800218,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 32.287812728862335,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "ทน."
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.44469256455542,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "observed_at": "2026-10-15 11:00",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.665867272460714,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 22.444263793568823,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.417880489980817,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.661901207133553,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 37.23419610209725,
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 08:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.18300787538574,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.55859634773667,
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 48.170721745745965,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.98690670650098,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองพิษณุโลก",
      "station_code": "NAN012",
      "province": "พิษณุโลก",
      "district": "เมืองพิษณุโลก",
      "lat": 16.86469,
      "lon": 100.24476,
      "waterlevel_msl": 36.35,
      "storage_percent": 29.66,
      "bankfull_msl": null,
      "value_text": "36.35 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.75107369201308,
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
      "waterlevel_msl": 1.3,
      "storage_percent": 29.55,
      "bankfull_msl": null,
      "value_text": "1.3 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.28443791048643,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 16.21,
      "storage_percent": 29.02,
      "bankfull_msl": null,
      "value_text": "16.21 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 49.95749858969102,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 4.46,
      "storage_percent": 29.02,
      "bankfull_msl": null,
      "value_text": "4.46 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 42.94713605347155,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "แม่น้ำปิงที่ อ.จอมทอง",
      "station_code": "BBU01",
      "province": "เชียงใหม่",
      "district": "ดอยหล่อ",
      "lat": 18.435266,
      "lon": 98.740107,
      "waterlevel_msl": 272.98,
      "storage_percent": 27.46,
      "bankfull_msl": null,
      "value_text": "272.98 ม.รทก.",
      "observed_at": "2026-10-15 11:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 36.409006009977226,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "กฟผ."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "waterlevel_msl": 12.69,
      "storage_percent": 26.49,
      "bankfull_msl": null,
      "value_text": "12.69 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 5.703677802963367,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแม่ขรี",
      "station_code": "X.267",
      "province": "พัทลุง",
      "district": "ตะโหมด",
      "lat": 7.33842,
      "lon": 100.109978,
      "waterlevel_msl": 22.04,
      "storage_percent": 26.39,
      "bankfull_msl": null,
      "value_text": "22.04 ม.รทก.",
      "observed_at": "2026-10-15 06:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 45.906976440754036,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 31.93,
      "storage_percent": 26.02,
      "bankfull_msl": null,
      "value_text": "31.93 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 11.24338873778254,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "วัดท่าระหัด",
      "station_code": "S.7A",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.78944,
      "lon": 101.117104,
      "waterlevel_msl": 43.48,
      "storage_percent": 23.12,
      "bankfull_msl": null,
      "value_text": "43.48 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.753226281537014,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "waterlevel_msl": 304.02,
      "storage_percent": 22.03,
      "bankfull_msl": null,
      "value_text": "304.02 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 25.389433523569583,
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
      "waterlevel_msl": 23.52,
      "storage_percent": 21.43,
      "bankfull_msl": null,
      "value_text": "23.52 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 44.79263454648103,
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
      "waterlevel_msl": 41.46,
      "storage_percent": 21.16,
      "bankfull_msl": null,
      "value_text": "41.46 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 8.131766068445735,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 18.08,
      "storage_percent": 19.44,
      "bankfull_msl": null,
      "value_text": "18.08 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 4.463048298170036,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 26.71,
      "storage_percent": 19.28,
      "bankfull_msl": null,
      "value_text": "26.71 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 43.95471174698642,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "สะพานคลองลำพญาธาร",
      "station_code": "MOU460",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.26568,
      "lon": 101.89133,
      "waterlevel_msl": 79.64,
      "storage_percent": 19.22,
      "bankfull_msl": null,
      "value_text": "79.64 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 33.930789681787886,
      "nearest_estate": "นิคมอุตสาหกรรมบ่อทอง 33",
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
      "waterlevel_msl": 442.65,
      "storage_percent": 18.6,
      "bankfull_msl": null,
      "value_text": "442.65 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
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
      "waterlevel_msl": 314.53,
      "storage_percent": 17.46,
      "bankfull_msl": null,
      "value_text": "314.53 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 24.47590252766334,
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
      "waterlevel_msl": 167.34,
      "storage_percent": 13.22,
      "bankfull_msl": null,
      "value_text": "167.34 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 21.736028811714558,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "waterlevel_msl": 266.16,
      "storage_percent": 12.57,
      "bankfull_msl": null,
      "value_text": "266.16 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 455.48,
      "storage_percent": 11.71,
      "bankfull_msl": null,
      "value_text": "455.48 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 40.72868375605304,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
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
      "waterlevel_msl": -5.77,
      "storage_percent": 10.39,
      "bankfull_msl": null,
      "value_text": "-5.77 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 16.633474059900415,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
      "agency": "สสน."
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
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 440.14,
      "storage_percent": 9.12,
      "bankfull_msl": null,
      "value_text": "440.14 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 38.79867579046488,
      "nearest_estate": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองสงคราม",
      "station_code": "UDN003",
      "province": "อุดรธานี",
      "district": "สร้างคอม",
      "lat": 17.39577,
      "lon": 103.30043,
      "waterlevel_msl": 163.85,
      "storage_percent": 1.82,
      "bankfull_msl": null,
      "value_text": "163.85 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
      "status": "ปกติ",
      "severity_score": 0,
      "distance_km": 46.45760158424925,
      "nearest_estate": "นิคมอุตสาหกรรมอุดรธานี",
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
      "waterlevel_msl": 163.02,
      "storage_percent": 1.25,
      "bankfull_msl": null,
      "value_text": "163.02 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 735.23,
      "storage_percent": 0.62,
      "bankfull_msl": null,
      "value_text": "735.23 ม.รทก.",
      "observed_at": "2026-10-15 11:30",
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
      "waterlevel_msl": 9.32,
      "storage_percent": null,
      "bankfull_msl": null,
      "value_text": "9.32 ม.รทก.",
      "observed_at": "2026-10-15 10:00",
      "status": "ไม่มีข้อมูล",
      "severity_score": 0,
      "distance_km": 21.137617579600168,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    }
  ],
  "summary": {
    "estate_total": 70,
    "estate_count": 68,
    "station_count": 892,
    "alert_station_count": 129,
    "heavy_rain_estate_count": 23,
    "rain_alert_estate_count": 44,
    "water_alert_estate_count": 55,
    "critical_count": 65,
    "rain_station_count": 695,
    "waterlevel_station_count": 197,
    "waterlevel_alert_count": 112,
    "max_rainfall_mm": 103.8,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [],
    "flood_watch_province_count": 0,
    "flash_flood_24h_area_count": 0,
    "flash_flood_48h_area_count": 4,
    "warning_title": "กรมอุตุนิยมวิทยา | ประกาศเตือนภัยลักษณะอากาศ",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "coverage": {
    "stations_complete": true,
    "station_count": 892,
    "estate_location_source": "ArcGIS geometry in EPSG:4326"
  },
  "flash_flood": {
    "24h": {
      "period": "24h",
      "status": "ok",
      "date": "2026-10-15",
      "time": "11:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [],
      "area_nearby": [],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_14_10_2026.png?1792037263",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "status": "ok",
      "date": "2026-10-15",
      "time": "11:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
        {
          "geocode": "720307",
          "tambon": "ต.วังยาว",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.วังยาว",
          "latitude": 14.89012,
          "longitude": 99.37758,
          "sum_rainfall_mm": 132.2,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.38235,
                  15.05105
                ],
                [
                  99.38624,
                  15.04728
                ],
                [
                  99.39376,
                  15.05041
                ],
                [
                  99.39664,
                  15.04935
                ],
                [
                  99.39791,
                  15.04684
                ],
                [
                  99.4051,
                  15.04409
                ],
                [
                  99.40745,
                  15.04631
                ],
                [
                  99.41198,
                  15.0469
                ],
                [
                  99.41498,
                  15.0497
                ],
                [
                  99.4179,
                  15.04969
                ],
                [
                  99.41991,
                  15.04838
                ],
                [
                  99.42055,
                  15.04425
                ],
                [
                  99.41668,
                  15.04018
                ],
                [
                  99.41595,
                  15.03677
                ],
                [
                  99.418,
                  15.03268
                ],
                [
                  99.41798,
                  15.02859
                ],
                [
                  99.42113,
                  15.02715
                ],
                [
                  99.4229,
                  15.02271
                ],
                [
                  99.42296,
                  15.01935
                ],
                [
                  99.42496,
                  15.01703
                ],
                [
                  99.4264,
                  15.01198
                ],
                [
                  99.42622,
                  15.00688
                ],
                [
                  99.42871,
                  15.00178
                ],
                [
                  99.43312,
                  14.99893
                ],
                [
                  99.43558,
                  14.99557
                ],
                [
                  99.43989,
                  14.98603
                ],
                [
                  99.44488,
                  14.98336
                ],
                [
                  99.44213,
                  14.97846
                ],
                [
                  99.43826,
                  14.97517
                ],
                [
                  99.43011,
                  14.97517
                ],
                [
                  99.43443,
                  14.96832
                ],
                [
                  99.43827,
                  14.9663
                ],
                [
                  99.43987,
                  14.96215
                ],
                [
                  99.4471,
                  14.95836
                ],
                [
                  99.44817,
                  14.95378
                ],
                [
                  99.45312,
                  14.95059
                ],
                [
                  99.45387,
                  14.94329
                ],
                [
                  99.46029,
                  14.93734
                ],
                [
                  99.46215,
                  14.93662
                ],
                [
                  99.46512,
                  14.93857
                ],
                [
                  99.4684,
                  14.93574
                ],
                [
                  99.4768,
                  14.93371
                ],
                [
                  99.48251,
                  14.92859
                ],
                [
                  99.48686,
                  14.9279
                ],
                [
                  99.49014,
                  14.9292
                ],
                [
                  99.4909,
                  14.92562
                ],
                [
                  99.48976,
                  14.92348
                ],
                [
                  99.48624,
                  14.92138
                ],
                [
                  99.48544,
                  14.91784
                ],
                [
                  99.48377,
                  14.91664
                ],
                [
                  99.48452,
                  14.91286
                ],
                [
                  99.48108,
                  14.90972
                ],
                [
                  99.48816,
                  14.90073
                ],
                [
                  99.48679,
                  14.89578
                ],
                [
                  99.48819,
                  14.88263
                ],
                [
                  99.49055,
                  14.8789
                ],
                [
                  99.48298,
                  14.87874
                ],
                [
                  99.4803,
                  14.87969
                ],
                [
                  99.47553,
                  14.88459
                ],
                [
                  99.47196,
                  14.8849
                ],
                [
                  99.46907,
                  14.88695
                ],
                [
                  99.46506,
                  14.88618
                ],
                [
                  99.46326,
                  14.88457
                ],
                [
                  99.45624,
                  14.88341
                ],
                [
                  99.45305,
                  14.88411
                ],
                [
                  99.45009,
                  14.88682
                ],
                [
                  99.44128,
                  14.88438
                ],
                [
                  99.43947,
                  14.88293
                ],
                [
                  99.4394,
                  14.88147
                ],
                [
                  99.44612,
                  14.86676
                ],
                [
                  99.44801,
                  14.85985
                ],
                [
                  99.4325,
                  14.85518
                ],
                [
                  99.43554,
                  14.85105
                ],
                [
                  99.43538,
                  14.84846
                ],
                [
                  99.43131,
                  14.84493
                ],
                [
                  99.43415,
                  14.84181
                ],
                [
                  99.43016,
                  14.836
                ],
                [
                  99.42845,
                  14.83132
                ],
                [
                  99.42615,
                  14.82912
                ],
                [
                  99.41507,
                  14.8337
                ],
                [
                  99.40431,
                  14.83198
                ],
                [
                  99.39773,
                  14.83727
                ],
                [
                  99.38917,
                  14.83494
                ],
                [
                  99.38504,
                  14.83195
                ],
                [
                  99.38494,
                  14.83395
                ],
                [
                  99.38228,
                  14.83827
                ],
                [
                  99.38663,
                  14.84475
                ],
                [
                  99.39034,
                  14.85536
                ],
                [
                  99.39412,
                  14.86188
                ],
                [
                  99.39398,
                  14.86482
                ],
                [
                  99.37788,
                  14.86655
                ],
                [
                  99.37429,
                  14.86571
                ],
                [
                  99.37178,
                  14.8634
                ],
                [
                  99.36694,
                  14.86282
                ],
                [
                  99.36054,
                  14.86827
                ],
                [
                  99.35815,
                  14.87295
                ],
                [
                  99.348,
                  14.87443
                ],
                [
                  99.34326,
                  14.87903
                ],
                [
                  99.33158,
                  14.88054
                ],
                [
                  99.3268,
                  14.88262
                ],
                [
                  99.33025,
                  14.8899
                ],
                [
                  99.3245,
                  14.88991
                ],
                [
                  99.32089,
                  14.89528
                ],
                [
                  99.31778,
                  14.89532
                ],
                [
                  99.31673,
                  14.906
                ],
                [
                  99.32022,
                  14.91236
                ],
                [
                  99.32197,
                  14.92305
                ],
                [
                  99.31579,
                  14.92905
                ],
                [
                  99.31308,
                  14.93031
                ],
                [
                  99.31062,
                  14.93553
                ],
                [
                  99.31352,
                  14.93857
                ],
                [
                  99.31585,
                  14.94351
                ],
                [
                  99.32105,
                  14.94669
                ],
                [
                  99.32091,
                  14.94915
                ],
                [
                  99.31491,
                  14.95624
                ],
                [
                  99.31232,
                  14.96723
                ],
                [
                  99.30715,
                  14.97056
                ],
                [
                  99.30532,
                  14.97333
                ],
                [
                  99.30435,
                  14.97599
                ],
                [
                  99.30531,
                  14.97883
                ],
                [
                  99.30431,
                  14.98098
                ],
                [
                  99.30109,
                  14.9833
                ],
                [
                  99.29837,
                  14.98715
                ],
                [
                  99.29244,
                  14.98816
                ],
                [
                  99.28978,
                  14.9927
                ],
                [
                  99.28538,
                  14.99328
                ],
                [
                  99.28314,
                  14.99813
                ],
                [
                  99.28507,
                  15.00156
                ],
                [
                  99.2848,
                  15.007
                ],
                [
                  99.29462,
                  15.00971
                ],
                [
                  99.3,
                  15.01326
                ],
                [
                  99.30195,
                  15.01515
                ],
                [
                  99.30256,
                  15.02017
                ],
                [
                  99.30721,
                  15.02542
                ],
                [
                  99.30689,
                  15.02727
                ],
                [
                  99.30353,
                  15.02828
                ],
                [
                  99.30202,
                  15.03118
                ],
                [
                  99.29586,
                  15.03738
                ],
                [
                  99.29636,
                  15.04004
                ],
                [
                  99.30058,
                  15.04135
                ],
                [
                  99.3014,
                  15.04292
                ],
                [
                  99.30112,
                  15.04539
                ],
                [
                  99.29826,
                  15.04879
                ],
                [
                  99.29985,
                  15.05239
                ],
                [
                  99.29905,
                  15.05382
                ],
                [
                  99.30371,
                  15.05798
                ],
                [
                  99.30578,
                  15.06363
                ],
                [
                  99.31123,
                  15.06292
                ],
                [
                  99.31172,
                  15.06766
                ],
                [
                  99.31932,
                  15.0696
                ],
                [
                  99.32215,
                  15.07274
                ],
                [
                  99.32066,
                  15.07411
                ],
                [
                  99.3205,
                  15.07762
                ],
                [
                  99.31921,
                  15.0798
                ],
                [
                  99.31993,
                  15.08136
                ],
                [
                  99.33032,
                  15.07881
                ],
                [
                  99.33316,
                  15.08175
                ],
                [
                  99.3392,
                  15.08148
                ],
                [
                  99.34195,
                  15.07718
                ],
                [
                  99.34397,
                  15.07612
                ],
                [
                  99.34401,
                  15.07298
                ],
                [
                  99.34754,
                  15.0729
                ],
                [
                  99.35373,
                  15.06187
                ],
                [
                  99.35669,
                  15.06004
                ],
                [
                  99.35622,
                  15.05503
                ],
                [
                  99.36472,
                  15.04871
                ],
                [
                  99.36652,
                  15.04845
                ],
                [
                  99.37052,
                  15.05077
                ],
                [
                  99.37609,
                  15.04971
                ],
                [
                  99.38235,
                  15.05105
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720911",
          "tambon": "ต.เจดีย์",
          "amphoe": "อ.อู่ทอง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.เจดีย์",
          "latitude": 14.38422,
          "longitude": 99.96114,
          "sum_rainfall_mm": 125.99999999999999,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.95453,
                  14.42427
                ],
                [
                  99.95429,
                  14.40002
                ],
                [
                  99.95883,
                  14.3957
                ],
                [
                  99.96194,
                  14.39455
                ],
                [
                  99.96407,
                  14.39139
                ],
                [
                  99.96757,
                  14.38964
                ],
                [
                  99.97011,
                  14.3845
                ],
                [
                  99.96964,
                  14.37813
                ],
                [
                  99.96709,
                  14.3752
                ],
                [
                  99.96674,
                  14.37233
                ],
                [
                  99.96312,
                  14.37181
                ],
                [
                  99.96713,
                  14.36893
                ],
                [
                  99.96937,
                  14.36397
                ],
                [
                  99.97278,
                  14.3637
                ],
                [
                  99.97656,
                  14.36506
                ],
                [
                  99.97717,
                  14.36418
                ],
                [
                  99.97547,
                  14.36239
                ],
                [
                  99.97532,
                  14.36042
                ],
                [
                  99.97961,
                  14.35102
                ],
                [
                  99.97917,
                  14.34915
                ],
                [
                  99.97711,
                  14.34741
                ],
                [
                  99.97552,
                  14.34018
                ],
                [
                  99.97248,
                  14.34015
                ],
                [
                  99.97069,
                  14.3366
                ],
                [
                  99.9726,
                  14.33234
                ],
                [
                  99.97029,
                  14.33066
                ],
                [
                  99.96101,
                  14.34459
                ],
                [
                  99.95515,
                  14.34884
                ],
                [
                  99.94855,
                  14.35768
                ],
                [
                  99.94874,
                  14.37853
                ],
                [
                  99.94565,
                  14.38531
                ],
                [
                  99.92626,
                  14.40486
                ],
                [
                  99.93334,
                  14.41833
                ],
                [
                  99.94082,
                  14.42561
                ],
                [
                  99.94884,
                  14.42625
                ],
                [
                  99.95453,
                  14.42427
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610803",
          "tambon": "ต.ห้วยคต",
          "amphoe": "อ.ห้วยคต",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ห้วยคต",
          "latitude": 15.30362,
          "longitude": 99.60969,
          "sum_rainfall_mm": 105.79999999999998,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.61302,
                  15.32853
                ],
                [
                  99.62199,
                  15.32671
                ],
                [
                  99.62427,
                  15.32468
                ],
                [
                  99.626,
                  15.32477
                ],
                [
                  99.62443,
                  15.31563
                ],
                [
                  99.62625,
                  15.30452
                ],
                [
                  99.62074,
                  15.30077
                ],
                [
                  99.62537,
                  15.29144
                ],
                [
                  99.61777,
                  15.28218
                ],
                [
                  99.60747,
                  15.27265
                ],
                [
                  99.59964,
                  15.25958
                ],
                [
                  99.6041,
                  15.25156
                ],
                [
                  99.62177,
                  15.22878
                ],
                [
                  99.62545,
                  15.22612
                ],
                [
                  99.6261,
                  15.22385
                ],
                [
                  99.62005,
                  15.22178
                ],
                [
                  99.61764,
                  15.21819
                ],
                [
                  99.60532,
                  15.20694
                ],
                [
                  99.60446,
                  15.20327
                ],
                [
                  99.60703,
                  15.19543
                ],
                [
                  99.59252,
                  15.20353
                ],
                [
                  99.58429,
                  15.21045
                ],
                [
                  99.58054,
                  15.21161
                ],
                [
                  99.57756,
                  15.21555
                ],
                [
                  99.57806,
                  15.21711
                ],
                [
                  99.58042,
                  15.21803
                ],
                [
                  99.58166,
                  15.22318
                ],
                [
                  99.57689,
                  15.23103
                ],
                [
                  99.57103,
                  15.23406
                ],
                [
                  99.56229,
                  15.23276
                ],
                [
                  99.56014,
                  15.23394
                ],
                [
                  99.55626,
                  15.23374
                ],
                [
                  99.55361,
                  15.23626
                ],
                [
                  99.55153,
                  15.23633
                ],
                [
                  99.55169,
                  15.24581
                ],
                [
                  99.55435,
                  15.25364
                ],
                [
                  99.55443,
                  15.2583
                ],
                [
                  99.54915,
                  15.27943
                ],
                [
                  99.5506,
                  15.28978
                ],
                [
                  99.55673,
                  15.30239
                ],
                [
                  99.55746,
                  15.30915
                ],
                [
                  99.55602,
                  15.31126
                ],
                [
                  99.55832,
                  15.31764
                ],
                [
                  99.56776,
                  15.31019
                ],
                [
                  99.57118,
                  15.31236
                ],
                [
                  99.57648,
                  15.32138
                ],
                [
                  99.58208,
                  15.32284
                ],
                [
                  99.58657,
                  15.32645
                ],
                [
                  99.59391,
                  15.32744
                ],
                [
                  99.6007,
                  15.3265
                ],
                [
                  99.61009,
                  15.32924
                ],
                [
                  99.61302,
                  15.32853
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710405",
          "tambon": "ต.เขาโจด",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "วัดปากลำขาแข้ง",
          "latitude": 14.92634,
          "longitude": 99.12273,
          "sum_rainfall_mm": 136.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24602,
                  15.00155
                ],
                [
                  99.24771,
                  15.00147
                ],
                [
                  99.24954,
                  14.99974
                ],
                [
                  99.25031,
                  14.99595
                ],
                [
                  99.25294,
                  14.99494
                ],
                [
                  99.25247,
                  14.99234
                ],
                [
                  99.25386,
                  14.99188
                ],
                [
                  99.25633,
                  14.98762
                ],
                [
                  99.25799,
                  14.98781
                ],
                [
                  99.26068,
                  14.99142
                ],
                [
                  99.27575,
                  14.99075
                ],
                [
                  99.27936,
                  14.99306
                ],
                [
                  99.28314,
                  14.99813
                ],
                [
                  99.28538,
                  14.99328
                ],
                [
                  99.28978,
                  14.9927
                ],
                [
                  99.29202,
                  14.98839
                ],
                [
                  99.29837,
                  14.98715
                ],
                [
                  99.30109,
                  14.9833
                ],
                [
                  99.30409,
                  14.98122
                ],
                [
                  99.30531,
                  14.97883
                ],
                [
                  99.30435,
                  14.97599
                ],
                [
                  99.30532,
                  14.97333
                ],
                [
                  99.30715,
                  14.97056
                ],
                [
                  99.31232,
                  14.96723
                ],
                [
                  99.31491,
                  14.95624
                ],
                [
                  99.32091,
                  14.94915
                ],
                [
                  99.32105,
                  14.94669
                ],
                [
                  99.31585,
                  14.94351
                ],
                [
                  99.31352,
                  14.93857
                ],
                [
                  99.31062,
                  14.93553
                ],
                [
                  99.31308,
                  14.93031
                ],
                [
                  99.31621,
                  14.92868
                ],
                [
                  99.3189,
                  14.92513
                ],
                [
                  99.32142,
                  14.92433
                ],
                [
                  99.32201,
                  14.92055
                ],
                [
                  99.31999,
                  14.91169
                ],
                [
                  99.31684,
                  14.9067
                ],
                [
                  99.31811,
                  14.89663
                ],
                [
                  99.31664,
                  14.89061
                ],
                [
                  99.31345,
                  14.88414
                ],
                [
                  99.31161,
                  14.88301
                ],
                [
                  99.3055,
                  14.88276
                ],
                [
                  99.30063,
                  14.87505
                ],
                [
                  99.29584,
                  14.87038
                ],
                [
                  99.29373,
                  14.86964
                ],
                [
                  99.29183,
                  14.86498
                ],
                [
                  99.28912,
                  14.86394
                ],
                [
                  99.28686,
                  14.86481
                ],
                [
                  99.28542,
                  14.86254
                ],
                [
                  99.2816,
                  14.86135
                ],
                [
                  99.2842,
                  14.8584
                ],
                [
                  99.28435,
                  14.85436
                ],
                [
                  99.2878,
                  14.85201
                ],
                [
                  99.28786,
                  14.84711
                ],
                [
                  99.28968,
                  14.84614
                ],
                [
                  99.29154,
                  14.83885
                ],
                [
                  99.29398,
                  14.83588
                ],
                [
                  99.29337,
                  14.83194
                ],
                [
                  99.28227,
                  14.82769
                ],
                [
                  99.27851,
                  14.82861
                ],
                [
                  99.27402,
                  14.8323
                ],
                [
                  99.2691,
                  14.83325
                ],
                [
                  99.26519,
                  14.83594
                ],
                [
                  99.25372,
                  14.83497
                ],
                [
                  99.24687,
                  14.83313
                ],
                [
                  99.24043,
                  14.82803
                ],
                [
                  99.2394,
                  14.82614
                ],
                [
                  99.2401,
                  14.82174
                ],
                [
                  99.25072,
                  14.81453
                ],
                [
                  99.24972,
                  14.81032
                ],
                [
                  99.25074,
                  14.80759
                ],
                [
                  99.25287,
                  14.80452
                ],
                [
                  99.25721,
                  14.80189
                ],
                [
                  99.26354,
                  14.79158
                ],
                [
                  99.27041,
                  14.78844
                ],
                [
                  99.27279,
                  14.78591
                ],
                [
                  99.27289,
                  14.78452
                ],
                [
                  99.26995,
                  14.78271
                ],
                [
                  99.26896,
                  14.77756
                ],
                [
                  99.26972,
                  14.77174
                ],
                [
                  99.27098,
                  14.77045
                ],
                [
                  99.27068,
                  14.76723
                ],
                [
                  99.27258,
                  14.76365
                ],
                [
                  99.27829,
                  14.76269
                ],
                [
                  99.27737,
                  14.75311
                ],
                [
                  99.28119,
                  14.74749
                ],
                [
                  99.28647,
                  14.74498
                ],
                [
                  99.28809,
                  14.74213
                ],
                [
                  99.28462,
                  14.7398
                ],
                [
                  99.28401,
                  14.73736
                ],
                [
                  99.28608,
                  14.7319
                ],
                [
                  99.28428,
                  14.72915
                ],
                [
                  99.28549,
                  14.7261
                ],
                [
                  99.28513,
                  14.71685
                ],
                [
                  99.28925,
                  14.71229
                ],
                [
                  99.28781,
                  14.71002
                ],
                [
                  99.28857,
                  14.7074
                ],
                [
                  99.28555,
                  14.70509
                ],
                [
                  99.28618,
                  14.70191
                ],
                [
                  99.295,
                  14.70212
                ],
                [
                  99.29955,
                  14.70445
                ],
                [
                  99.30283,
                  14.70483
                ],
                [
                  99.31079,
                  14.70044
                ],
                [
                  99.3155,
                  14.70047
                ],
                [
                  99.32012,
                  14.69868
                ],
                [
                  99.32201,
                  14.69924
                ],
                [
                  99.32879,
                  14.69761
                ],
                [
                  99.33162,
                  14.6984
                ],
                [
                  99.33418,
                  14.70263
                ],
                [
                  99.33782,
                  14.70267
                ],
                [
                  99.341,
                  14.69803
                ],
                [
                  99.33966,
                  14.69175
                ],
                [
                  99.33819,
                  14.68997
                ],
                [
                  99.33888,
                  14.68686
                ],
                [
                  99.34296,
                  14.68317
                ],
                [
                  99.34455,
                  14.67992
                ],
                [
                  99.34927,
                  14.67726
                ],
                [
                  99.35354,
                  14.66577
                ],
                [
                  99.35357,
                  14.66378
                ],
                [
                  99.34645,
                  14.64987
                ],
                [
                  99.33751,
                  14.64856
                ],
                [
                  99.33394,
                  14.64697
                ],
                [
                  99.32694,
                  14.64166
                ],
                [
                  99.3236,
                  14.63626
                ],
                [
                  99.31588,
                  14.63326
                ],
                [
                  99.30799,
                  14.62834
                ],
                [
                  99.27757,
                  14.6211
                ],
                [
                  99.27013,
                  14.62351
                ],
                [
                  99.26753,
                  14.62802
                ],
                [
                  99.26089,
                  14.63349
                ],
                [
                  99.25928,
                  14.64123
                ],
                [
                  99.25583,
                  14.64425
                ],
                [
                  99.25494,
                  14.64919
                ],
                [
                  99.25566,
                  14.65181
                ],
                [
                  99.25463,
                  14.65417
                ],
                [
                  99.2555,
                  14.65834
                ],
                [
                  99.25695,
                  14.66209
                ],
                [
                  99.26202,
                  14.66292
                ],
                [
                  99.26174,
                  14.671
                ],
                [
                  99.25688,
                  14.67072
                ],
                [
                  99.25182,
                  14.67214
                ],
                [
                  99.24945,
                  14.68147
                ],
                [
                  99.247,
                  14.68541
                ],
                [
                  99.24172,
                  14.68964
                ],
                [
                  99.23605,
                  14.69189
                ],
                [
                  99.23478,
                  14.69327
                ],
                [
                  99.23334,
                  14.69943
                ],
                [
                  99.2247,
                  14.70425
                ],
                [
                  99.22478,
                  14.70789
                ],
                [
                  99.19747,
                  14.71423
                ],
                [
                  99.19578,
                  14.71546
                ],
                [
                  99.19454,
                  14.7191
                ],
                [
                  99.18739,
                  14.72038
                ],
                [
                  99.18694,
                  14.72948
                ],
                [
                  99.18403,
                  14.73276
                ],
                [
                  99.1857,
                  14.73542
                ],
                [
                  99.18452,
                  14.73931
                ],
                [
                  99.18591,
                  14.74372
                ],
                [
                  99.18593,
                  14.74993
                ],
                [
                  99.17739,
                  14.75487
                ],
                [
                  99.1697,
                  14.75574
                ],
                [
                  99.16283,
                  14.75935
                ],
                [
                  99.15809,
                  14.77042
                ],
                [
                  99.15467,
                  14.7725
                ],
                [
                  99.15315,
                  14.77487
                ],
                [
                  99.15398,
                  14.77891
                ],
                [
                  99.14977,
                  14.78943
                ],
                [
                  99.1479,
                  14.79088
                ],
                [
                  99.14379,
                  14.7914
                ],
                [
                  99.14009,
                  14.79491
                ],
                [
                  99.12893,
                  14.79629
                ],
                [
                  99.1251,
                  14.801
                ],
                [
                  99.12407,
                  14.80561
                ],
                [
                  99.11674,
                  14.81066
                ],
                [
                  99.11556,
                  14.81764
                ],
                [
                  99.11119,
                  14.82241
                ],
                [
                  99.10881,
                  14.82877
                ],
                [
                  99.10341,
                  14.83222
                ],
                [
                  99.10101,
                  14.83969
                ],
                [
                  99.0913,
                  14.84228
                ],
                [
                  99.0884,
                  14.84512
                ],
                [
                  99.08773,
                  14.84701
                ],
                [
                  99.0903,
                  14.8546
                ],
                [
                  99.09011,
                  14.8595
                ],
                [
                  99.07685,
                  14.88256
                ],
                [
                  99.07586,
                  14.88785
                ],
                [
                  99.07831,
                  14.88732
                ],
                [
                  99.08138,
                  14.88275
                ],
                [
                  99.08482,
                  14.88218
                ],
                [
                  99.0867,
                  14.88552
                ],
                [
                  99.08606,
                  14.88958
                ],
                [
                  99.08817,
                  14.89492
                ],
                [
                  99.087,
                  14.89891
                ],
                [
                  99.08778,
                  14.90054
                ],
                [
                  99.09454,
                  14.89843
                ],
                [
                  99.098,
                  14.899
                ],
                [
                  99.10881,
                  14.90673
                ],
                [
                  99.12205,
                  14.92027
                ],
                [
                  99.11052,
                  14.93788
                ],
                [
                  99.11079,
                  14.94203
                ],
                [
                  99.10552,
                  14.94764
                ],
                [
                  99.1021,
                  14.94941
                ],
                [
                  99.09714,
                  14.94955
                ],
                [
                  99.08668,
                  14.95714
                ],
                [
                  99.08223,
                  14.95674
                ],
                [
                  99.07933,
                  14.95786
                ],
                [
                  99.07939,
                  14.9601
                ],
                [
                  99.08362,
                  14.96286
                ],
                [
                  99.08085,
                  14.96839
                ],
                [
                  99.07861,
                  14.98065
                ],
                [
                  99.07227,
                  14.98309
                ],
                [
                  99.07017,
                  14.98765
                ],
                [
                  99.06988,
                  14.99282
                ],
                [
                  99.06669,
                  14.99846
                ],
                [
                  99.0652,
                  15.00587
                ],
                [
                  99.0574,
                  15.01245
                ],
                [
                  99.0553,
                  15.02646
                ],
                [
                  99.05183,
                  15.03163
                ],
                [
                  99.04912,
                  15.03298
                ],
                [
                  99.04688,
                  15.0408
                ],
                [
                  99.04419,
                  15.04222
                ],
                [
                  99.04243,
                  15.04637
                ],
                [
                  99.05034,
                  15.0429
                ],
                [
                  99.06799,
                  15.0476
                ],
                [
                  99.06989,
                  15.04663
                ],
                [
                  99.06998,
                  15.04377
                ],
                [
                  99.07723,
                  15.03864
                ],
                [
                  99.08077,
                  15.04008
                ],
                [
                  99.08723,
                  15.03931
                ],
                [
                  99.09309,
                  15.04273
                ],
                [
                  99.09544,
                  15.04212
                ],
                [
                  99.09771,
                  15.04341
                ],
                [
                  99.10135,
                  15.04255
                ],
                [
                  99.10257,
                  15.0444
                ],
                [
                  99.11103,
                  15.04735
                ],
                [
                  99.11345,
                  15.04432
                ],
                [
                  99.11554,
                  15.04639
                ],
                [
                  99.11563,
                  15.04923
                ],
                [
                  99.11912,
                  15.05499
                ],
                [
                  99.12288,
                  15.05348
                ],
                [
                  99.12484,
                  15.05099
                ],
                [
                  99.13083,
                  15.04945
                ],
                [
                  99.13675,
                  15.05108
                ],
                [
                  99.14088,
                  15.05055
                ],
                [
                  99.1429,
                  15.05207
                ],
                [
                  99.14438,
                  15.04942
                ],
                [
                  99.1467,
                  15.04828
                ],
                [
                  99.1466,
                  15.04696
                ],
                [
                  99.1437,
                  15.04509
                ],
                [
                  99.14042,
                  15.04494
                ],
                [
                  99.1371,
                  15.0426
                ],
                [
                  99.13535,
                  15.04007
                ],
                [
                  99.13563,
                  15.03736
                ],
                [
                  99.14249,
                  15.03514
                ],
                [
                  99.14554,
                  15.02695
                ],
                [
                  99.14784,
                  15.0255
                ],
                [
                  99.1483,
                  15.02391
                ],
                [
                  99.15186,
                  15.02453
                ],
                [
                  99.15587,
                  15.02332
                ],
                [
                  99.15718,
                  15.02169
                ],
                [
                  99.15605,
                  15.02073
                ],
                [
                  99.15775,
                  15.01748
                ],
                [
                  99.16986,
                  15.01392
                ],
                [
                  99.17264,
                  15.01687
                ],
                [
                  99.17526,
                  15.01588
                ],
                [
                  99.18081,
                  15.01739
                ],
                [
                  99.18396,
                  15.01936
                ],
                [
                  99.18741,
                  15.02497
                ],
                [
                  99.19086,
                  15.02664
                ],
                [
                  99.19228,
                  15.02878
                ],
                [
                  99.19402,
                  15.02353
                ],
                [
                  99.204,
                  15.01421
                ],
                [
                  99.20826,
                  15.01388
                ],
                [
                  99.21313,
                  15.01166
                ],
                [
                  99.21539,
                  15.01399
                ],
                [
                  99.21615,
                  15.0128
                ],
                [
                  99.21909,
                  15.0132
                ],
                [
                  99.22737,
                  15.01071
                ],
                [
                  99.23049,
                  15.01063
                ],
                [
                  99.23335,
                  15.0122
                ],
                [
                  99.23588,
                  15.00878
                ],
                [
                  99.24602,
                  15.00155
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "720302",
          "tambon": "ต.ด่านช้าง",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหนองผือ",
          "latitude": 14.728561,
          "longitude": 99.488429,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.75729,
                  14.82609
                ],
                [
                  99.75662,
                  14.82537
                ],
                [
                  99.75747,
                  14.82358
                ],
                [
                  99.75288,
                  14.8262
                ],
                [
                  99.74934,
                  14.82403
                ],
                [
                  99.74934,
                  14.82637
                ],
                [
                  99.74712,
                  14.82592
                ],
                [
                  99.74665,
                  14.8273
                ],
                [
                  99.74351,
                  14.82545
                ],
                [
                  99.74119,
                  14.82212
                ],
                [
                  99.74221,
                  14.82027
                ],
                [
                  99.74156,
                  14.8187
                ],
                [
                  99.74036,
                  14.81805
                ],
                [
                  99.73944,
                  14.81916
                ],
                [
                  99.73592,
                  14.81528
                ],
                [
                  99.73408,
                  14.81519
                ],
                [
                  99.7338,
                  14.81676
                ],
                [
                  99.73232,
                  14.8175
                ],
                [
                  99.72807,
                  14.81768
                ],
                [
                  99.72463,
                  14.81547
                ],
                [
                  99.72495,
                  14.81373
                ],
                [
                  99.72279,
                  14.81305
                ],
                [
                  99.72057,
                  14.81711
                ],
                [
                  99.71914,
                  14.81695
                ],
                [
                  99.7192,
                  14.81459
                ],
                [
                  99.71834,
                  14.81441
                ],
                [
                  99.71035,
                  14.81907
                ],
                [
                  99.7064,
                  14.8182
                ],
                [
                  99.70122,
                  14.82086
                ],
                [
                  99.69755,
                  14.81897
                ],
                [
                  99.68615,
                  14.8229
                ],
                [
                  99.68134,
                  14.82234
                ],
                [
                  99.67673,
                  14.82709
                ],
                [
                  99.67432,
                  14.82596
                ],
                [
                  99.6715,
                  14.82936
                ],
                [
                  99.66598,
                  14.83197
                ],
                [
                  99.66585,
                  14.8294
                ],
                [
                  99.66369,
                  14.82908
                ],
                [
                  99.66077,
                  14.81995
                ],
                [
                  99.65597,
                  14.81546
                ],
                [
                  99.65467,
                  14.80983
                ],
                [
                  99.65187,
                  14.80897
                ],
                [
                  99.65383,
                  14.80558
                ],
                [
                  99.65926,
                  14.80195
                ],
                [
                  99.65297,
                  14.80257
                ],
                [
                  99.63708,
                  14.80152
                ],
                [
                  99.6329,
                  14.79722
                ],
                [
                  99.62907,
                  14.79543
                ],
                [
                  99.62695,
                  14.78947
                ],
                [
                  99.61692,
                  14.78245
                ],
                [
                  99.61002,
                  14.78287
                ],
                [
                  99.60431,
                  14.78589
                ],
                [
                  99.5995,
                  14.78509
                ],
                [
                  99.58842,
                  14.78678
                ],
                [
                  99.58505,
                  14.78525
                ],
                [
                  99.5836,
                  14.78573
                ],
                [
                  99.58055,
                  14.78991
                ],
                [
                  99.5775,
                  14.78951
                ],
                [
                  99.57526,
                  14.78798
                ],
                [
                  99.57333,
                  14.78445
                ],
                [
                  99.5751,
                  14.77305
                ],
                [
                  99.57477,
                  14.76888
                ],
                [
                  99.57839,
                  14.75619
                ],
                [
                  99.57783,
                  14.74792
                ],
                [
                  99.57325,
                  14.74142
                ],
                [
                  99.5721,
                  14.73274
                ],
                [
                  99.56841,
                  14.7305
                ],
                [
                  99.5659,
                  14.73176
                ],
                [
                  99.56061,
                  14.73011
                ],
                [
                  99.5573,
                  14.73064
                ],
                [
                  99.55596,
                  14.72799
                ],
                [
                  99.54352,
                  14.71806
                ],
                [
                  99.54247,
                  14.7157
                ],
                [
                  99.53631,
                  14.71365
                ],
                [
                  99.53346,
                  14.70808
                ],
                [
                  99.52785,
                  14.70718
                ],
                [
                  99.52303,
                  14.7044
                ],
                [
                  99.52075,
                  14.70464
                ],
                [
                  99.51369,
                  14.70244
                ],
                [
                  99.50885,
                  14.70885
                ],
                [
                  99.49632,
                  14.70453
                ],
                [
                  99.49636,
                  14.70378
                ],
                [
                  99.49202,
                  14.70395
                ],
                [
                  99.48107,
                  14.70939
                ],
                [
                  99.47117,
                  14.71733
                ],
                [
                  99.45834,
                  14.72487
                ],
                [
                  99.4543,
                  14.72575
                ],
                [
                  99.45227,
                  14.73348
                ],
                [
                  99.44964,
                  14.73641
                ],
                [
                  99.45421,
                  14.74252
                ],
                [
                  99.45403,
                  14.7485
                ],
                [
                  99.45174,
                  14.75677
                ],
                [
                  99.45372,
                  14.76229
                ],
                [
                  99.45169,
                  14.76523
                ],
                [
                  99.45567,
                  14.77058
                ],
                [
                  99.45689,
                  14.77841
                ],
                [
                  99.45577,
                  14.7833
                ],
                [
                  99.46597,
                  14.78543
                ],
                [
                  99.46921,
                  14.80303
                ],
                [
                  99.47134,
                  14.80774
                ],
                [
                  99.4652,
                  14.82811
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.49684,
                  14.8422
                ],
                [
                  99.5041,
                  14.83356
                ],
                [
                  99.50389,
                  14.83035
                ],
                [
                  99.50817,
                  14.82639
                ],
                [
                  99.51213,
                  14.82511
                ],
                [
                  99.51636,
                  14.82097
                ],
                [
                  99.51691,
                  14.81746
                ],
                [
                  99.51337,
                  14.81423
                ],
                [
                  99.51672,
                  14.80281
                ],
                [
                  99.51474,
                  14.79692
                ],
                [
                  99.51416,
                  14.78529
                ],
                [
                  99.51245,
                  14.77994
                ],
                [
                  99.51459,
                  14.77962
                ],
                [
                  99.51651,
                  14.78069
                ],
                [
                  99.52486,
                  14.78091
                ],
                [
                  99.52797,
                  14.77962
                ],
                [
                  99.53086,
                  14.77994
                ],
                [
                  99.53556,
                  14.78283
                ],
                [
                  99.5377,
                  14.78679
                ],
                [
                  99.53492,
                  14.7899
                ],
                [
                  99.53621,
                  14.79846
                ],
                [
                  99.53824,
                  14.80188
                ],
                [
                  99.53888,
                  14.80595
                ],
                [
                  99.54252,
                  14.81034
                ],
                [
                  99.54113,
                  14.81216
                ],
                [
                  99.54316,
                  14.81548
                ],
                [
                  99.55922,
                  14.81548
                ],
                [
                  99.57795,
                  14.81034
                ],
                [
                  99.59025,
                  14.82639
                ],
                [
                  99.61037,
                  14.81248
                ],
                [
                  99.61594,
                  14.81612
                ],
                [
                  99.6153,
                  14.82254
                ],
                [
                  99.60909,
                  14.82586
                ],
                [
                  99.61112,
                  14.82971
                ],
                [
                  99.61926,
                  14.83164
                ],
                [
                  99.641,
                  14.86652
                ],
                [
                  99.67038,
                  14.8725
                ],
                [
                  99.68554,
                  14.83941
                ],
                [
                  99.75402,
                  14.8447
                ],
                [
                  99.75577,
                  14.84101
                ],
                [
                  99.75858,
                  14.83958
                ],
                [
                  99.75924,
                  14.83753
                ],
                [
                  99.75787,
                  14.83242
                ],
                [
                  99.75316,
                  14.82977
                ],
                [
                  99.75729,
                  14.82609
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720302",
          "tambon": "ต.ด่านช้าง",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านโป่งคอม",
          "latitude": 14.764333,
          "longitude": 99.565738,
          "sum_rainfall_mm": 31.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.75729,
                  14.82609
                ],
                [
                  99.75662,
                  14.82537
                ],
                [
                  99.75747,
                  14.82358
                ],
                [
                  99.75288,
                  14.8262
                ],
                [
                  99.74934,
                  14.82403
                ],
                [
                  99.74934,
                  14.82637
                ],
                [
                  99.74712,
                  14.82592
                ],
                [
                  99.74665,
                  14.8273
                ],
                [
                  99.74351,
                  14.82545
                ],
                [
                  99.74119,
                  14.82212
                ],
                [
                  99.74221,
                  14.82027
                ],
                [
                  99.74156,
                  14.8187
                ],
                [
                  99.74036,
                  14.81805
                ],
                [
                  99.73944,
                  14.81916
                ],
                [
                  99.73592,
                  14.81528
                ],
                [
                  99.73408,
                  14.81519
                ],
                [
                  99.7338,
                  14.81676
                ],
                [
                  99.73232,
                  14.8175
                ],
                [
                  99.72807,
                  14.81768
                ],
                [
                  99.72463,
                  14.81547
                ],
                [
                  99.72495,
                  14.81373
                ],
                [
                  99.72279,
                  14.81305
                ],
                [
                  99.72057,
                  14.81711
                ],
                [
                  99.71914,
                  14.81695
                ],
                [
                  99.7192,
                  14.81459
                ],
                [
                  99.71834,
                  14.81441
                ],
                [
                  99.71035,
                  14.81907
                ],
                [
                  99.7064,
                  14.8182
                ],
                [
                  99.70122,
                  14.82086
                ],
                [
                  99.69755,
                  14.81897
                ],
                [
                  99.68615,
                  14.8229
                ],
                [
                  99.68134,
                  14.82234
                ],
                [
                  99.67673,
                  14.82709
                ],
                [
                  99.67432,
                  14.82596
                ],
                [
                  99.6715,
                  14.82936
                ],
                [
                  99.66598,
                  14.83197
                ],
                [
                  99.66585,
                  14.8294
                ],
                [
                  99.66369,
                  14.82908
                ],
                [
                  99.66077,
                  14.81995
                ],
                [
                  99.65597,
                  14.81546
                ],
                [
                  99.65467,
                  14.80983
                ],
                [
                  99.65187,
                  14.80897
                ],
                [
                  99.65383,
                  14.80558
                ],
                [
                  99.65926,
                  14.80195
                ],
                [
                  99.65297,
                  14.80257
                ],
                [
                  99.63708,
                  14.80152
                ],
                [
                  99.6329,
                  14.79722
                ],
                [
                  99.62907,
                  14.79543
                ],
                [
                  99.62695,
                  14.78947
                ],
                [
                  99.61692,
                  14.78245
                ],
                [
                  99.61002,
                  14.78287
                ],
                [
                  99.60431,
                  14.78589
                ],
                [
                  99.5995,
                  14.78509
                ],
                [
                  99.58842,
                  14.78678
                ],
                [
                  99.58505,
                  14.78525
                ],
                [
                  99.5836,
                  14.78573
                ],
                [
                  99.58055,
                  14.78991
                ],
                [
                  99.5775,
                  14.78951
                ],
                [
                  99.57526,
                  14.78798
                ],
                [
                  99.57333,
                  14.78445
                ],
                [
                  99.5751,
                  14.77305
                ],
                [
                  99.57477,
                  14.76888
                ],
                [
                  99.57839,
                  14.75619
                ],
                [
                  99.57783,
                  14.74792
                ],
                [
                  99.57325,
                  14.74142
                ],
                [
                  99.5721,
                  14.73274
                ],
                [
                  99.56841,
                  14.7305
                ],
                [
                  99.5659,
                  14.73176
                ],
                [
                  99.56061,
                  14.73011
                ],
                [
                  99.5573,
                  14.73064
                ],
                [
                  99.55596,
                  14.72799
                ],
                [
                  99.54352,
                  14.71806
                ],
                [
                  99.54247,
                  14.7157
                ],
                [
                  99.53631,
                  14.71365
                ],
                [
                  99.53346,
                  14.70808
                ],
                [
                  99.52785,
                  14.70718
                ],
                [
                  99.52303,
                  14.7044
                ],
                [
                  99.52075,
                  14.70464
                ],
                [
                  99.51369,
                  14.70244
                ],
                [
                  99.50885,
                  14.70885
                ],
                [
                  99.49632,
                  14.70453
                ],
                [
                  99.49636,
                  14.70378
                ],
                [
                  99.49202,
                  14.70395
                ],
                [
                  99.48107,
                  14.70939
                ],
                [
                  99.47117,
                  14.71733
                ],
                [
                  99.45834,
                  14.72487
                ],
                [
                  99.4543,
                  14.72575
                ],
                [
                  99.45227,
                  14.73348
                ],
                [
                  99.44964,
                  14.73641
                ],
                [
                  99.45421,
                  14.74252
                ],
                [
                  99.45403,
                  14.7485
                ],
                [
                  99.45174,
                  14.75677
                ],
                [
                  99.45372,
                  14.76229
                ],
                [
                  99.45169,
                  14.76523
                ],
                [
                  99.45567,
                  14.77058
                ],
                [
                  99.45689,
                  14.77841
                ],
                [
                  99.45577,
                  14.7833
                ],
                [
                  99.46597,
                  14.78543
                ],
                [
                  99.46921,
                  14.80303
                ],
                [
                  99.47134,
                  14.80774
                ],
                [
                  99.4652,
                  14.82811
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.49684,
                  14.8422
                ],
                [
                  99.5041,
                  14.83356
                ],
                [
                  99.50389,
                  14.83035
                ],
                [
                  99.50817,
                  14.82639
                ],
                [
                  99.51213,
                  14.82511
                ],
                [
                  99.51636,
                  14.82097
                ],
                [
                  99.51691,
                  14.81746
                ],
                [
                  99.51337,
                  14.81423
                ],
                [
                  99.51672,
                  14.80281
                ],
                [
                  99.51474,
                  14.79692
                ],
                [
                  99.51416,
                  14.78529
                ],
                [
                  99.51245,
                  14.77994
                ],
                [
                  99.51459,
                  14.77962
                ],
                [
                  99.51651,
                  14.78069
                ],
                [
                  99.52486,
                  14.78091
                ],
                [
                  99.52797,
                  14.77962
                ],
                [
                  99.53086,
                  14.77994
                ],
                [
                  99.53556,
                  14.78283
                ],
                [
                  99.5377,
                  14.78679
                ],
                [
                  99.53492,
                  14.7899
                ],
                [
                  99.53621,
                  14.79846
                ],
                [
                  99.53824,
                  14.80188
                ],
                [
                  99.53888,
                  14.80595
                ],
                [
                  99.54252,
                  14.81034
                ],
                [
                  99.54113,
                  14.81216
                ],
                [
                  99.54316,
                  14.81548
                ],
                [
                  99.55922,
                  14.81548
                ],
                [
                  99.57795,
                  14.81034
                ],
                [
                  99.59025,
                  14.82639
                ],
                [
                  99.61037,
                  14.81248
                ],
                [
                  99.61594,
                  14.81612
                ],
                [
                  99.6153,
                  14.82254
                ],
                [
                  99.60909,
                  14.82586
                ],
                [
                  99.61112,
                  14.82971
                ],
                [
                  99.61926,
                  14.83164
                ],
                [
                  99.641,
                  14.86652
                ],
                [
                  99.67038,
                  14.8725
                ],
                [
                  99.68554,
                  14.83941
                ],
                [
                  99.75402,
                  14.8447
                ],
                [
                  99.75577,
                  14.84101
                ],
                [
                  99.75858,
                  14.83958
                ],
                [
                  99.75924,
                  14.83753
                ],
                [
                  99.75787,
                  14.83242
                ],
                [
                  99.75316,
                  14.82977
                ],
                [
                  99.75729,
                  14.82609
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720302",
          "tambon": "ต.ด่านช้าง",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ด่านช้าง",
          "latitude": 14.83506,
          "longitude": 99.66543,
          "sum_rainfall_mm": 11.199999999999989,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.75729,
                  14.82609
                ],
                [
                  99.75662,
                  14.82537
                ],
                [
                  99.75747,
                  14.82358
                ],
                [
                  99.75288,
                  14.8262
                ],
                [
                  99.74934,
                  14.82403
                ],
                [
                  99.74934,
                  14.82637
                ],
                [
                  99.74712,
                  14.82592
                ],
                [
                  99.74665,
                  14.8273
                ],
                [
                  99.74351,
                  14.82545
                ],
                [
                  99.74119,
                  14.82212
                ],
                [
                  99.74221,
                  14.82027
                ],
                [
                  99.74156,
                  14.8187
                ],
                [
                  99.74036,
                  14.81805
                ],
                [
                  99.73944,
                  14.81916
                ],
                [
                  99.73592,
                  14.81528
                ],
                [
                  99.73408,
                  14.81519
                ],
                [
                  99.7338,
                  14.81676
                ],
                [
                  99.73232,
                  14.8175
                ],
                [
                  99.72807,
                  14.81768
                ],
                [
                  99.72463,
                  14.81547
                ],
                [
                  99.72495,
                  14.81373
                ],
                [
                  99.72279,
                  14.81305
                ],
                [
                  99.72057,
                  14.81711
                ],
                [
                  99.71914,
                  14.81695
                ],
                [
                  99.7192,
                  14.81459
                ],
                [
                  99.71834,
                  14.81441
                ],
                [
                  99.71035,
                  14.81907
                ],
                [
                  99.7064,
                  14.8182
                ],
                [
                  99.70122,
                  14.82086
                ],
                [
                  99.69755,
                  14.81897
                ],
                [
                  99.68615,
                  14.8229
                ],
                [
                  99.68134,
                  14.82234
                ],
                [
                  99.67673,
                  14.82709
                ],
                [
                  99.67432,
                  14.82596
                ],
                [
                  99.6715,
                  14.82936
                ],
                [
                  99.66598,
                  14.83197
                ],
                [
                  99.66585,
                  14.8294
                ],
                [
                  99.66369,
                  14.82908
                ],
                [
                  99.66077,
                  14.81995
                ],
                [
                  99.65597,
                  14.81546
                ],
                [
                  99.65467,
                  14.80983
                ],
                [
                  99.65187,
                  14.80897
                ],
                [
                  99.65383,
                  14.80558
                ],
                [
                  99.65926,
                  14.80195
                ],
                [
                  99.65297,
                  14.80257
                ],
                [
                  99.63708,
                  14.80152
                ],
                [
                  99.6329,
                  14.79722
                ],
                [
                  99.62907,
                  14.79543
                ],
                [
                  99.62695,
                  14.78947
                ],
                [
                  99.61692,
                  14.78245
                ],
                [
                  99.61002,
                  14.78287
                ],
                [
                  99.60431,
                  14.78589
                ],
                [
                  99.5995,
                  14.78509
                ],
                [
                  99.58842,
                  14.78678
                ],
                [
                  99.58505,
                  14.78525
                ],
                [
                  99.5836,
                  14.78573
                ],
                [
                  99.58055,
                  14.78991
                ],
                [
                  99.5775,
                  14.78951
                ],
                [
                  99.57526,
                  14.78798
                ],
                [
                  99.57333,
                  14.78445
                ],
                [
                  99.5751,
                  14.77305
                ],
                [
                  99.57477,
                  14.76888
                ],
                [
                  99.57839,
                  14.75619
                ],
                [
                  99.57783,
                  14.74792
                ],
                [
                  99.57325,
                  14.74142
                ],
                [
                  99.5721,
                  14.73274
                ],
                [
                  99.56841,
                  14.7305
                ],
                [
                  99.5659,
                  14.73176
                ],
                [
                  99.56061,
                  14.73011
                ],
                [
                  99.5573,
                  14.73064
                ],
                [
                  99.55596,
                  14.72799
                ],
                [
                  99.54352,
                  14.71806
                ],
                [
                  99.54247,
                  14.7157
                ],
                [
                  99.53631,
                  14.71365
                ],
                [
                  99.53346,
                  14.70808
                ],
                [
                  99.52785,
                  14.70718
                ],
                [
                  99.52303,
                  14.7044
                ],
                [
                  99.52075,
                  14.70464
                ],
                [
                  99.51369,
                  14.70244
                ],
                [
                  99.50885,
                  14.70885
                ],
                [
                  99.49632,
                  14.70453
                ],
                [
                  99.49636,
                  14.70378
                ],
                [
                  99.49202,
                  14.70395
                ],
                [
                  99.48107,
                  14.70939
                ],
                [
                  99.47117,
                  14.71733
                ],
                [
                  99.45834,
                  14.72487
                ],
                [
                  99.4543,
                  14.72575
                ],
                [
                  99.45227,
                  14.73348
                ],
                [
                  99.44964,
                  14.73641
                ],
                [
                  99.45421,
                  14.74252
                ],
                [
                  99.45403,
                  14.7485
                ],
                [
                  99.45174,
                  14.75677
                ],
                [
                  99.45372,
                  14.76229
                ],
                [
                  99.45169,
                  14.76523
                ],
                [
                  99.45567,
                  14.77058
                ],
                [
                  99.45689,
                  14.77841
                ],
                [
                  99.45577,
                  14.7833
                ],
                [
                  99.46597,
                  14.78543
                ],
                [
                  99.46921,
                  14.80303
                ],
                [
                  99.47134,
                  14.80774
                ],
                [
                  99.4652,
                  14.82811
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.49684,
                  14.8422
                ],
                [
                  99.5041,
                  14.83356
                ],
                [
                  99.50389,
                  14.83035
                ],
                [
                  99.50817,
                  14.82639
                ],
                [
                  99.51213,
                  14.82511
                ],
                [
                  99.51636,
                  14.82097
                ],
                [
                  99.51691,
                  14.81746
                ],
                [
                  99.51337,
                  14.81423
                ],
                [
                  99.51672,
                  14.80281
                ],
                [
                  99.51474,
                  14.79692
                ],
                [
                  99.51416,
                  14.78529
                ],
                [
                  99.51245,
                  14.77994
                ],
                [
                  99.51459,
                  14.77962
                ],
                [
                  99.51651,
                  14.78069
                ],
                [
                  99.52486,
                  14.78091
                ],
                [
                  99.52797,
                  14.77962
                ],
                [
                  99.53086,
                  14.77994
                ],
                [
                  99.53556,
                  14.78283
                ],
                [
                  99.5377,
                  14.78679
                ],
                [
                  99.53492,
                  14.7899
                ],
                [
                  99.53621,
                  14.79846
                ],
                [
                  99.53824,
                  14.80188
                ],
                [
                  99.53888,
                  14.80595
                ],
                [
                  99.54252,
                  14.81034
                ],
                [
                  99.54113,
                  14.81216
                ],
                [
                  99.54316,
                  14.81548
                ],
                [
                  99.55922,
                  14.81548
                ],
                [
                  99.57795,
                  14.81034
                ],
                [
                  99.59025,
                  14.82639
                ],
                [
                  99.61037,
                  14.81248
                ],
                [
                  99.61594,
                  14.81612
                ],
                [
                  99.6153,
                  14.82254
                ],
                [
                  99.60909,
                  14.82586
                ],
                [
                  99.61112,
                  14.82971
                ],
                [
                  99.61926,
                  14.83164
                ],
                [
                  99.641,
                  14.86652
                ],
                [
                  99.67038,
                  14.8725
                ],
                [
                  99.68554,
                  14.83941
                ],
                [
                  99.75402,
                  14.8447
                ],
                [
                  99.75577,
                  14.84101
                ],
                [
                  99.75858,
                  14.83958
                ],
                [
                  99.75924,
                  14.83753
                ],
                [
                  99.75787,
                  14.83242
                ],
                [
                  99.75316,
                  14.82977
                ],
                [
                  99.75729,
                  14.82609
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720306",
          "tambon": "ต.นิคมกระเสียว",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านท่าเดื่อ",
          "latitude": 14.872319,
          "longitude": 99.568946,
          "sum_rainfall_mm": 56.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.641,
                  14.86652
                ],
                [
                  99.61926,
                  14.83164
                ],
                [
                  99.61112,
                  14.82971
                ],
                [
                  99.60909,
                  14.82586
                ],
                [
                  99.6153,
                  14.82254
                ],
                [
                  99.61594,
                  14.81612
                ],
                [
                  99.61037,
                  14.81248
                ],
                [
                  99.59025,
                  14.82639
                ],
                [
                  99.57795,
                  14.81034
                ],
                [
                  99.55922,
                  14.81548
                ],
                [
                  99.54316,
                  14.81548
                ],
                [
                  99.54113,
                  14.81216
                ],
                [
                  99.54252,
                  14.81034
                ],
                [
                  99.53888,
                  14.80595
                ],
                [
                  99.53482,
                  14.79129
                ],
                [
                  99.5377,
                  14.78679
                ],
                [
                  99.53449,
                  14.78155
                ],
                [
                  99.52797,
                  14.77962
                ],
                [
                  99.52647,
                  14.78091
                ],
                [
                  99.51245,
                  14.77994
                ],
                [
                  99.51416,
                  14.78529
                ],
                [
                  99.51474,
                  14.79692
                ],
                [
                  99.51672,
                  14.80281
                ],
                [
                  99.51337,
                  14.81423
                ],
                [
                  99.51691,
                  14.81746
                ],
                [
                  99.51636,
                  14.82097
                ],
                [
                  99.51213,
                  14.82511
                ],
                [
                  99.50817,
                  14.82639
                ],
                [
                  99.50389,
                  14.83035
                ],
                [
                  99.5041,
                  14.83356
                ],
                [
                  99.49684,
                  14.8422
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.48134,
                  14.85376
                ],
                [
                  99.47599,
                  14.85989
                ],
                [
                  99.4786,
                  14.86438
                ],
                [
                  99.48262,
                  14.86518
                ],
                [
                  99.48865,
                  14.86971
                ],
                [
                  99.49064,
                  14.87932
                ],
                [
                  99.48819,
                  14.88263
                ],
                [
                  99.48687,
                  14.89661
                ],
                [
                  99.4939,
                  14.89678
                ],
                [
                  99.50171,
                  14.89469
                ],
                [
                  99.50637,
                  14.89855
                ],
                [
                  99.50837,
                  14.89823
                ],
                [
                  99.50845,
                  14.89148
                ],
                [
                  99.51496,
                  14.87792
                ],
                [
                  99.57097,
                  14.87703
                ],
                [
                  99.57634,
                  14.87799
                ],
                [
                  99.58482,
                  14.88165
                ],
                [
                  99.59006,
                  14.87414
                ],
                [
                  99.59248,
                  14.86547
                ],
                [
                  99.5943,
                  14.8637
                ],
                [
                  99.5976,
                  14.86371
                ],
                [
                  99.60054,
                  14.86512
                ],
                [
                  99.61324,
                  14.86279
                ],
                [
                  99.62365,
                  14.86798
                ],
                [
                  99.62755,
                  14.8662
                ],
                [
                  99.641,
                  14.86652
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720306",
          "tambon": "ต.นิคมกระเสียว",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.นิคมกระเสียว",
          "latitude": 14.85733,
          "longitude": 99.57508,
          "sum_rainfall_mm": 92.99999999999999,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.641,
                  14.86652
                ],
                [
                  99.61926,
                  14.83164
                ],
                [
                  99.61112,
                  14.82971
                ],
                [
                  99.60909,
                  14.82586
                ],
                [
                  99.6153,
                  14.82254
                ],
                [
                  99.61594,
                  14.81612
                ],
                [
                  99.61037,
                  14.81248
                ],
                [
                  99.59025,
                  14.82639
                ],
                [
                  99.57795,
                  14.81034
                ],
                [
                  99.55922,
                  14.81548
                ],
                [
                  99.54316,
                  14.81548
                ],
                [
                  99.54113,
                  14.81216
                ],
                [
                  99.54252,
                  14.81034
                ],
                [
                  99.53888,
                  14.80595
                ],
                [
                  99.53482,
                  14.79129
                ],
                [
                  99.5377,
                  14.78679
                ],
                [
                  99.53449,
                  14.78155
                ],
                [
                  99.52797,
                  14.77962
                ],
                [
                  99.52647,
                  14.78091
                ],
                [
                  99.51245,
                  14.77994
                ],
                [
                  99.51416,
                  14.78529
                ],
                [
                  99.51474,
                  14.79692
                ],
                [
                  99.51672,
                  14.80281
                ],
                [
                  99.51337,
                  14.81423
                ],
                [
                  99.51691,
                  14.81746
                ],
                [
                  99.51636,
                  14.82097
                ],
                [
                  99.51213,
                  14.82511
                ],
                [
                  99.50817,
                  14.82639
                ],
                [
                  99.50389,
                  14.83035
                ],
                [
                  99.5041,
                  14.83356
                ],
                [
                  99.49684,
                  14.8422
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.48134,
                  14.85376
                ],
                [
                  99.47599,
                  14.85989
                ],
                [
                  99.4786,
                  14.86438
                ],
                [
                  99.48262,
                  14.86518
                ],
                [
                  99.48865,
                  14.86971
                ],
                [
                  99.49064,
                  14.87932
                ],
                [
                  99.48819,
                  14.88263
                ],
                [
                  99.48687,
                  14.89661
                ],
                [
                  99.4939,
                  14.89678
                ],
                [
                  99.50171,
                  14.89469
                ],
                [
                  99.50637,
                  14.89855
                ],
                [
                  99.50837,
                  14.89823
                ],
                [
                  99.50845,
                  14.89148
                ],
                [
                  99.51496,
                  14.87792
                ],
                [
                  99.57097,
                  14.87703
                ],
                [
                  99.57634,
                  14.87799
                ],
                [
                  99.58482,
                  14.88165
                ],
                [
                  99.59006,
                  14.87414
                ],
                [
                  99.59248,
                  14.86547
                ],
                [
                  99.5943,
                  14.8637
                ],
                [
                  99.5976,
                  14.86371
                ],
                [
                  99.60054,
                  14.86512
                ],
                [
                  99.61324,
                  14.86279
                ],
                [
                  99.62365,
                  14.86798
                ],
                [
                  99.62755,
                  14.8662
                ],
                [
                  99.641,
                  14.86652
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720307",
          "tambon": "ต.วังยาว",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์พุเตย",
          "latitude": 15.0219,
          "longitude": 99.3923,
          "sum_rainfall_mm": 78.5,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.38235,
                  15.05105
                ],
                [
                  99.38624,
                  15.04728
                ],
                [
                  99.39376,
                  15.05041
                ],
                [
                  99.39664,
                  15.04935
                ],
                [
                  99.39791,
                  15.04684
                ],
                [
                  99.4051,
                  15.04409
                ],
                [
                  99.40745,
                  15.04631
                ],
                [
                  99.41198,
                  15.0469
                ],
                [
                  99.41498,
                  15.0497
                ],
                [
                  99.4179,
                  15.04969
                ],
                [
                  99.41991,
                  15.04838
                ],
                [
                  99.42055,
                  15.04425
                ],
                [
                  99.41668,
                  15.04018
                ],
                [
                  99.41595,
                  15.03677
                ],
                [
                  99.418,
                  15.03268
                ],
                [
                  99.41798,
                  15.02859
                ],
                [
                  99.42113,
                  15.02715
                ],
                [
                  99.4229,
                  15.02271
                ],
                [
                  99.42296,
                  15.01935
                ],
                [
                  99.42496,
                  15.01703
                ],
                [
                  99.4264,
                  15.01198
                ],
                [
                  99.42622,
                  15.00688
                ],
                [
                  99.42871,
                  15.00178
                ],
                [
                  99.43312,
                  14.99893
                ],
                [
                  99.43558,
                  14.99557
                ],
                [
                  99.43989,
                  14.98603
                ],
                [
                  99.44488,
                  14.98336
                ],
                [
                  99.44213,
                  14.97846
                ],
                [
                  99.43826,
                  14.97517
                ],
                [
                  99.43011,
                  14.97517
                ],
                [
                  99.43443,
                  14.96832
                ],
                [
                  99.43827,
                  14.9663
                ],
                [
                  99.43987,
                  14.96215
                ],
                [
                  99.4471,
                  14.95836
                ],
                [
                  99.44817,
                  14.95378
                ],
                [
                  99.45312,
                  14.95059
                ],
                [
                  99.45387,
                  14.94329
                ],
                [
                  99.46029,
                  14.93734
                ],
                [
                  99.46215,
                  14.93662
                ],
                [
                  99.46512,
                  14.93857
                ],
                [
                  99.4684,
                  14.93574
                ],
                [
                  99.4768,
                  14.93371
                ],
                [
                  99.48251,
                  14.92859
                ],
                [
                  99.48686,
                  14.9279
                ],
                [
                  99.49014,
                  14.9292
                ],
                [
                  99.4909,
                  14.92562
                ],
                [
                  99.48976,
                  14.92348
                ],
                [
                  99.48624,
                  14.92138
                ],
                [
                  99.48544,
                  14.91784
                ],
                [
                  99.48377,
                  14.91664
                ],
                [
                  99.48452,
                  14.91286
                ],
                [
                  99.48108,
                  14.90972
                ],
                [
                  99.48816,
                  14.90073
                ],
                [
                  99.48679,
                  14.89578
                ],
                [
                  99.48819,
                  14.88263
                ],
                [
                  99.49055,
                  14.8789
                ],
                [
                  99.48298,
                  14.87874
                ],
                [
                  99.4803,
                  14.87969
                ],
                [
                  99.47553,
                  14.88459
                ],
                [
                  99.47196,
                  14.8849
                ],
                [
                  99.46907,
                  14.88695
                ],
                [
                  99.46506,
                  14.88618
                ],
                [
                  99.46326,
                  14.88457
                ],
                [
                  99.45624,
                  14.88341
                ],
                [
                  99.45305,
                  14.88411
                ],
                [
                  99.45009,
                  14.88682
                ],
                [
                  99.44128,
                  14.88438
                ],
                [
                  99.43947,
                  14.88293
                ],
                [
                  99.4394,
                  14.88147
                ],
                [
                  99.44612,
                  14.86676
                ],
                [
                  99.44801,
                  14.85985
                ],
                [
                  99.4325,
                  14.85518
                ],
                [
                  99.43554,
                  14.85105
                ],
                [
                  99.43538,
                  14.84846
                ],
                [
                  99.43131,
                  14.84493
                ],
                [
                  99.43415,
                  14.84181
                ],
                [
                  99.43016,
                  14.836
                ],
                [
                  99.42845,
                  14.83132
                ],
                [
                  99.42615,
                  14.82912
                ],
                [
                  99.41507,
                  14.8337
                ],
                [
                  99.40431,
                  14.83198
                ],
                [
                  99.39773,
                  14.83727
                ],
                [
                  99.38917,
                  14.83494
                ],
                [
                  99.38504,
                  14.83195
                ],
                [
                  99.38494,
                  14.83395
                ],
                [
                  99.38228,
                  14.83827
                ],
                [
                  99.38663,
                  14.84475
                ],
                [
                  99.39034,
                  14.85536
                ],
                [
                  99.39412,
                  14.86188
                ],
                [
                  99.39398,
                  14.86482
                ],
                [
                  99.37788,
                  14.86655
                ],
                [
                  99.37429,
                  14.86571
                ],
                [
                  99.37178,
                  14.8634
                ],
                [
                  99.36694,
                  14.86282
                ],
                [
                  99.36054,
                  14.86827
                ],
                [
                  99.35815,
                  14.87295
                ],
                [
                  99.348,
                  14.87443
                ],
                [
                  99.34326,
                  14.87903
                ],
                [
                  99.33158,
                  14.88054
                ],
                [
                  99.3268,
                  14.88262
                ],
                [
                  99.33025,
                  14.8899
                ],
                [
                  99.3245,
                  14.88991
                ],
                [
                  99.32089,
                  14.89528
                ],
                [
                  99.31778,
                  14.89532
                ],
                [
                  99.31673,
                  14.906
                ],
                [
                  99.32022,
                  14.91236
                ],
                [
                  99.32197,
                  14.92305
                ],
                [
                  99.31579,
                  14.92905
                ],
                [
                  99.31308,
                  14.93031
                ],
                [
                  99.31062,
                  14.93553
                ],
                [
                  99.31352,
                  14.93857
                ],
                [
                  99.31585,
                  14.94351
                ],
                [
                  99.32105,
                  14.94669
                ],
                [
                  99.32091,
                  14.94915
                ],
                [
                  99.31491,
                  14.95624
                ],
                [
                  99.31232,
                  14.96723
                ],
                [
                  99.30715,
                  14.97056
                ],
                [
                  99.30532,
                  14.97333
                ],
                [
                  99.30435,
                  14.97599
                ],
                [
                  99.30531,
                  14.97883
                ],
                [
                  99.30431,
                  14.98098
                ],
                [
                  99.30109,
                  14.9833
                ],
                [
                  99.29837,
                  14.98715
                ],
                [
                  99.29244,
                  14.98816
                ],
                [
                  99.28978,
                  14.9927
                ],
                [
                  99.28538,
                  14.99328
                ],
                [
                  99.28314,
                  14.99813
                ],
                [
                  99.28507,
                  15.00156
                ],
                [
                  99.2848,
                  15.007
                ],
                [
                  99.29462,
                  15.00971
                ],
                [
                  99.3,
                  15.01326
                ],
                [
                  99.30195,
                  15.01515
                ],
                [
                  99.30256,
                  15.02017
                ],
                [
                  99.30721,
                  15.02542
                ],
                [
                  99.30689,
                  15.02727
                ],
                [
                  99.30353,
                  15.02828
                ],
                [
                  99.30202,
                  15.03118
                ],
                [
                  99.29586,
                  15.03738
                ],
                [
                  99.29636,
                  15.04004
                ],
                [
                  99.30058,
                  15.04135
                ],
                [
                  99.3014,
                  15.04292
                ],
                [
                  99.30112,
                  15.04539
                ],
                [
                  99.29826,
                  15.04879
                ],
                [
                  99.29985,
                  15.05239
                ],
                [
                  99.29905,
                  15.05382
                ],
                [
                  99.30371,
                  15.05798
                ],
                [
                  99.30578,
                  15.06363
                ],
                [
                  99.31123,
                  15.06292
                ],
                [
                  99.31172,
                  15.06766
                ],
                [
                  99.31932,
                  15.0696
                ],
                [
                  99.32215,
                  15.07274
                ],
                [
                  99.32066,
                  15.07411
                ],
                [
                  99.3205,
                  15.07762
                ],
                [
                  99.31921,
                  15.0798
                ],
                [
                  99.31993,
                  15.08136
                ],
                [
                  99.33032,
                  15.07881
                ],
                [
                  99.33316,
                  15.08175
                ],
                [
                  99.3392,
                  15.08148
                ],
                [
                  99.34195,
                  15.07718
                ],
                [
                  99.34397,
                  15.07612
                ],
                [
                  99.34401,
                  15.07298
                ],
                [
                  99.34754,
                  15.0729
                ],
                [
                  99.35373,
                  15.06187
                ],
                [
                  99.35669,
                  15.06004
                ],
                [
                  99.35622,
                  15.05503
                ],
                [
                  99.36472,
                  15.04871
                ],
                [
                  99.36652,
                  15.04845
                ],
                [
                  99.37052,
                  15.05077
                ],
                [
                  99.37609,
                  15.04971
                ],
                [
                  99.38235,
                  15.05105
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720303",
          "tambon": "ต.ห้วยขมิ้น",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกกเต็น",
          "latitude": 14.944708,
          "longitude": 99.594671,
          "sum_rainfall_mm": 38.5,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.49684,
                  14.98372
                ],
                [
                  99.50652,
                  14.98573
                ],
                [
                  99.50993,
                  14.98536
                ],
                [
                  99.51246,
                  14.98339
                ],
                [
                  99.51598,
                  14.98316
                ],
                [
                  99.51758,
                  14.98192
                ],
                [
                  99.5205,
                  14.98309
                ],
                [
                  99.52471,
                  14.9829
                ],
                [
                  99.5245,
                  14.98135
                ],
                [
                  99.53145,
                  14.97651
                ],
                [
                  99.53242,
                  14.96888
                ],
                [
                  99.54448,
                  14.96474
                ],
                [
                  99.54533,
                  14.96528
                ],
                [
                  99.54767,
                  14.96366
                ],
                [
                  99.5502,
                  14.96426
                ],
                [
                  99.56491,
                  14.96226
                ],
                [
                  99.56788,
                  14.95852
                ],
                [
                  99.57086,
                  14.9585
                ],
                [
                  99.57237,
                  14.95543
                ],
                [
                  99.57587,
                  14.95571
                ],
                [
                  99.57889,
                  14.95407
                ],
                [
                  99.58344,
                  14.94686
                ],
                [
                  99.58873,
                  14.94578
                ],
                [
                  99.59565,
                  14.94749
                ],
                [
                  99.5987,
                  14.94503
                ],
                [
                  99.59908,
                  14.94734
                ],
                [
                  99.60272,
                  14.94777
                ],
                [
                  99.60856,
                  14.94664
                ],
                [
                  99.61292,
                  14.94426
                ],
                [
                  99.62322,
                  14.9426
                ],
                [
                  99.63334,
                  14.93867
                ],
                [
                  99.6362,
                  14.93438
                ],
                [
                  99.63694,
                  14.93119
                ],
                [
                  99.6309,
                  14.93163
                ],
                [
                  99.62787,
                  14.92913
                ],
                [
                  99.62736,
                  14.92693
                ],
                [
                  99.62862,
                  14.92662
                ],
                [
                  99.62866,
                  14.9237
                ],
                [
                  99.63129,
                  14.92109
                ],
                [
                  99.63714,
                  14.91829
                ],
                [
                  99.64019,
                  14.91196
                ],
                [
                  99.64202,
                  14.89972
                ],
                [
                  99.641,
                  14.86652
                ],
                [
                  99.62755,
                  14.8662
                ],
                [
                  99.62365,
                  14.86798
                ],
                [
                  99.61324,
                  14.86279
                ],
                [
                  99.60054,
                  14.86512
                ],
                [
                  99.5976,
                  14.86371
                ],
                [
                  99.5943,
                  14.8637
                ],
                [
                  99.59248,
                  14.86547
                ],
                [
                  99.59006,
                  14.87414
                ],
                [
                  99.58482,
                  14.88165
                ],
                [
                  99.57634,
                  14.87799
                ],
                [
                  99.57097,
                  14.87703
                ],
                [
                  99.51773,
                  14.87726
                ],
                [
                  99.51496,
                  14.87792
                ],
                [
                  99.5111,
                  14.88498
                ],
                [
                  99.50845,
                  14.89148
                ],
                [
                  99.50837,
                  14.89823
                ],
                [
                  99.50637,
                  14.89855
                ],
                [
                  99.50171,
                  14.89469
                ],
                [
                  99.4939,
                  14.89678
                ],
                [
                  99.48687,
                  14.89661
                ],
                [
                  99.48816,
                  14.90073
                ],
                [
                  99.48108,
                  14.90972
                ],
                [
                  99.48452,
                  14.91286
                ],
                [
                  99.48377,
                  14.91664
                ],
                [
                  99.48544,
                  14.91784
                ],
                [
                  99.48624,
                  14.92138
                ],
                [
                  99.49063,
                  14.92458
                ],
                [
                  99.49014,
                  14.9292
                ],
                [
                  99.48686,
                  14.9279
                ],
                [
                  99.48182,
                  14.92884
                ],
                [
                  99.4768,
                  14.93371
                ],
                [
                  99.4684,
                  14.93574
                ],
                [
                  99.46482,
                  14.93865
                ],
                [
                  99.46101,
                  14.93676
                ],
                [
                  99.45387,
                  14.94329
                ],
                [
                  99.45312,
                  14.95059
                ],
                [
                  99.44817,
                  14.95378
                ],
                [
                  99.4471,
                  14.95836
                ],
                [
                  99.43987,
                  14.96215
                ],
                [
                  99.43827,
                  14.9663
                ],
                [
                  99.43443,
                  14.96832
                ],
                [
                  99.43,
                  14.97555
                ],
                [
                  99.43623,
                  14.97474
                ],
                [
                  99.43999,
                  14.97618
                ],
                [
                  99.44661,
                  14.98586
                ],
                [
                  99.45107,
                  14.98896
                ],
                [
                  99.45046,
                  14.99215
                ],
                [
                  99.45137,
                  14.99348
                ],
                [
                  99.45383,
                  14.98977
                ],
                [
                  99.45593,
                  14.98874
                ],
                [
                  99.47256,
                  14.99005
                ],
                [
                  99.47773,
                  14.98835
                ],
                [
                  99.48345,
                  14.98994
                ],
                [
                  99.48601,
                  14.98865
                ],
                [
                  99.48806,
                  14.98532
                ],
                [
                  99.49684,
                  14.98372
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720303",
          "tambon": "ต.ห้วยขมิ้น",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกกเชียง",
          "latitude": 14.927231,
          "longitude": 99.50882,
          "sum_rainfall_mm": 26.5,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.49684,
                  14.98372
                ],
                [
                  99.50652,
                  14.98573
                ],
                [
                  99.50993,
                  14.98536
                ],
                [
                  99.51246,
                  14.98339
                ],
                [
                  99.51598,
                  14.98316
                ],
                [
                  99.51758,
                  14.98192
                ],
                [
                  99.5205,
                  14.98309
                ],
                [
                  99.52471,
                  14.9829
                ],
                [
                  99.5245,
                  14.98135
                ],
                [
                  99.53145,
                  14.97651
                ],
                [
                  99.53242,
                  14.96888
                ],
                [
                  99.54448,
                  14.96474
                ],
                [
                  99.54533,
                  14.96528
                ],
                [
                  99.54767,
                  14.96366
                ],
                [
                  99.5502,
                  14.96426
                ],
                [
                  99.56491,
                  14.96226
                ],
                [
                  99.56788,
                  14.95852
                ],
                [
                  99.57086,
                  14.9585
                ],
                [
                  99.57237,
                  14.95543
                ],
                [
                  99.57587,
                  14.95571
                ],
                [
                  99.57889,
                  14.95407
                ],
                [
                  99.58344,
                  14.94686
                ],
                [
                  99.58873,
                  14.94578
                ],
                [
                  99.59565,
                  14.94749
                ],
                [
                  99.5987,
                  14.94503
                ],
                [
                  99.59908,
                  14.94734
                ],
                [
                  99.60272,
                  14.94777
                ],
                [
                  99.60856,
                  14.94664
                ],
                [
                  99.61292,
                  14.94426
                ],
                [
                  99.62322,
                  14.9426
                ],
                [
                  99.63334,
                  14.93867
                ],
                [
                  99.6362,
                  14.93438
                ],
                [
                  99.63694,
                  14.93119
                ],
                [
                  99.6309,
                  14.93163
                ],
                [
                  99.62787,
                  14.92913
                ],
                [
                  99.62736,
                  14.92693
                ],
                [
                  99.62862,
                  14.92662
                ],
                [
                  99.62866,
                  14.9237
                ],
                [
                  99.63129,
                  14.92109
                ],
                [
                  99.63714,
                  14.91829
                ],
                [
                  99.64019,
                  14.91196
                ],
                [
                  99.64202,
                  14.89972
                ],
                [
                  99.641,
                  14.86652
                ],
                [
                  99.62755,
                  14.8662
                ],
                [
                  99.62365,
                  14.86798
                ],
                [
                  99.61324,
                  14.86279
                ],
                [
                  99.60054,
                  14.86512
                ],
                [
                  99.5976,
                  14.86371
                ],
                [
                  99.5943,
                  14.8637
                ],
                [
                  99.59248,
                  14.86547
                ],
                [
                  99.59006,
                  14.87414
                ],
                [
                  99.58482,
                  14.88165
                ],
                [
                  99.57634,
                  14.87799
                ],
                [
                  99.57097,
                  14.87703
                ],
                [
                  99.51773,
                  14.87726
                ],
                [
                  99.51496,
                  14.87792
                ],
                [
                  99.5111,
                  14.88498
                ],
                [
                  99.50845,
                  14.89148
                ],
                [
                  99.50837,
                  14.89823
                ],
                [
                  99.50637,
                  14.89855
                ],
                [
                  99.50171,
                  14.89469
                ],
                [
                  99.4939,
                  14.89678
                ],
                [
                  99.48687,
                  14.89661
                ],
                [
                  99.48816,
                  14.90073
                ],
                [
                  99.48108,
                  14.90972
                ],
                [
                  99.48452,
                  14.91286
                ],
                [
                  99.48377,
                  14.91664
                ],
                [
                  99.48544,
                  14.91784
                ],
                [
                  99.48624,
                  14.92138
                ],
                [
                  99.49063,
                  14.92458
                ],
                [
                  99.49014,
                  14.9292
                ],
                [
                  99.48686,
                  14.9279
                ],
                [
                  99.48182,
                  14.92884
                ],
                [
                  99.4768,
                  14.93371
                ],
                [
                  99.4684,
                  14.93574
                ],
                [
                  99.46482,
                  14.93865
                ],
                [
                  99.46101,
                  14.93676
                ],
                [
                  99.45387,
                  14.94329
                ],
                [
                  99.45312,
                  14.95059
                ],
                [
                  99.44817,
                  14.95378
                ],
                [
                  99.4471,
                  14.95836
                ],
                [
                  99.43987,
                  14.96215
                ],
                [
                  99.43827,
                  14.9663
                ],
                [
                  99.43443,
                  14.96832
                ],
                [
                  99.43,
                  14.97555
                ],
                [
                  99.43623,
                  14.97474
                ],
                [
                  99.43999,
                  14.97618
                ],
                [
                  99.44661,
                  14.98586
                ],
                [
                  99.45107,
                  14.98896
                ],
                [
                  99.45046,
                  14.99215
                ],
                [
                  99.45137,
                  14.99348
                ],
                [
                  99.45383,
                  14.98977
                ],
                [
                  99.45593,
                  14.98874
                ],
                [
                  99.47256,
                  14.99005
                ],
                [
                  99.47773,
                  14.98835
                ],
                [
                  99.48345,
                  14.98994
                ],
                [
                  99.48601,
                  14.98865
                ],
                [
                  99.48806,
                  14.98532
                ],
                [
                  99.49684,
                  14.98372
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720303",
          "tambon": "ต.ห้วยขมิ้น",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านป่าขี",
          "latitude": 14.962566,
          "longitude": 99.515459,
          "sum_rainfall_mm": 32.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.49684,
                  14.98372
                ],
                [
                  99.50652,
                  14.98573
                ],
                [
                  99.50993,
                  14.98536
                ],
                [
                  99.51246,
                  14.98339
                ],
                [
                  99.51598,
                  14.98316
                ],
                [
                  99.51758,
                  14.98192
                ],
                [
                  99.5205,
                  14.98309
                ],
                [
                  99.52471,
                  14.9829
                ],
                [
                  99.5245,
                  14.98135
                ],
                [
                  99.53145,
                  14.97651
                ],
                [
                  99.53242,
                  14.96888
                ],
                [
                  99.54448,
                  14.96474
                ],
                [
                  99.54533,
                  14.96528
                ],
                [
                  99.54767,
                  14.96366
                ],
                [
                  99.5502,
                  14.96426
                ],
                [
                  99.56491,
                  14.96226
                ],
                [
                  99.56788,
                  14.95852
                ],
                [
                  99.57086,
                  14.9585
                ],
                [
                  99.57237,
                  14.95543
                ],
                [
                  99.57587,
                  14.95571
                ],
                [
                  99.57889,
                  14.95407
                ],
                [
                  99.58344,
                  14.94686
                ],
                [
                  99.58873,
                  14.94578
                ],
                [
                  99.59565,
                  14.94749
                ],
                [
                  99.5987,
                  14.94503
                ],
                [
                  99.59908,
                  14.94734
                ],
                [
                  99.60272,
                  14.94777
                ],
                [
                  99.60856,
                  14.94664
                ],
                [
                  99.61292,
                  14.94426
                ],
                [
                  99.62322,
                  14.9426
                ],
                [
                  99.63334,
                  14.93867
                ],
                [
                  99.6362,
                  14.93438
                ],
                [
                  99.63694,
                  14.93119
                ],
                [
                  99.6309,
                  14.93163
                ],
                [
                  99.62787,
                  14.92913
                ],
                [
                  99.62736,
                  14.92693
                ],
                [
                  99.62862,
                  14.92662
                ],
                [
                  99.62866,
                  14.9237
                ],
                [
                  99.63129,
                  14.92109
                ],
                [
                  99.63714,
                  14.91829
                ],
                [
                  99.64019,
                  14.91196
                ],
                [
                  99.64202,
                  14.89972
                ],
                [
                  99.641,
                  14.86652
                ],
                [
                  99.62755,
                  14.8662
                ],
                [
                  99.62365,
                  14.86798
                ],
                [
                  99.61324,
                  14.86279
                ],
                [
                  99.60054,
                  14.86512
                ],
                [
                  99.5976,
                  14.86371
                ],
                [
                  99.5943,
                  14.8637
                ],
                [
                  99.59248,
                  14.86547
                ],
                [
                  99.59006,
                  14.87414
                ],
                [
                  99.58482,
                  14.88165
                ],
                [
                  99.57634,
                  14.87799
                ],
                [
                  99.57097,
                  14.87703
                ],
                [
                  99.51773,
                  14.87726
                ],
                [
                  99.51496,
                  14.87792
                ],
                [
                  99.5111,
                  14.88498
                ],
                [
                  99.50845,
                  14.89148
                ],
                [
                  99.50837,
                  14.89823
                ],
                [
                  99.50637,
                  14.89855
                ],
                [
                  99.50171,
                  14.89469
                ],
                [
                  99.4939,
                  14.89678
                ],
                [
                  99.48687,
                  14.89661
                ],
                [
                  99.48816,
                  14.90073
                ],
                [
                  99.48108,
                  14.90972
                ],
                [
                  99.48452,
                  14.91286
                ],
                [
                  99.48377,
                  14.91664
                ],
                [
                  99.48544,
                  14.91784
                ],
                [
                  99.48624,
                  14.92138
                ],
                [
                  99.49063,
                  14.92458
                ],
                [
                  99.49014,
                  14.9292
                ],
                [
                  99.48686,
                  14.9279
                ],
                [
                  99.48182,
                  14.92884
                ],
                [
                  99.4768,
                  14.93371
                ],
                [
                  99.4684,
                  14.93574
                ],
                [
                  99.46482,
                  14.93865
                ],
                [
                  99.46101,
                  14.93676
                ],
                [
                  99.45387,
                  14.94329
                ],
                [
                  99.45312,
                  14.95059
                ],
                [
                  99.44817,
                  14.95378
                ],
                [
                  99.4471,
                  14.95836
                ],
                [
                  99.43987,
                  14.96215
                ],
                [
                  99.43827,
                  14.9663
                ],
                [
                  99.43443,
                  14.96832
                ],
                [
                  99.43,
                  14.97555
                ],
                [
                  99.43623,
                  14.97474
                ],
                [
                  99.43999,
                  14.97618
                ],
                [
                  99.44661,
                  14.98586
                ],
                [
                  99.45107,
                  14.98896
                ],
                [
                  99.45046,
                  14.99215
                ],
                [
                  99.45137,
                  14.99348
                ],
                [
                  99.45383,
                  14.98977
                ],
                [
                  99.45593,
                  14.98874
                ],
                [
                  99.47256,
                  14.99005
                ],
                [
                  99.47773,
                  14.98835
                ],
                [
                  99.48345,
                  14.98994
                ],
                [
                  99.48601,
                  14.98865
                ],
                [
                  99.48806,
                  14.98532
                ],
                [
                  99.49684,
                  14.98372
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720304",
          "tambon": "ต.องค์พระ",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านเขาธง",
          "latitude": 14.827652,
          "longitude": 99.330791,
          "sum_rainfall_mm": 50.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.43159,
                  14.83809
                ],
                [
                  99.43421,
                  14.84216
                ],
                [
                  99.43143,
                  14.84533
                ],
                [
                  99.43513,
                  14.84817
                ],
                [
                  99.43564,
                  14.84971
                ],
                [
                  99.43534,
                  14.85171
                ],
                [
                  99.4325,
                  14.85518
                ],
                [
                  99.44801,
                  14.85985
                ],
                [
                  99.44612,
                  14.86676
                ],
                [
                  99.4394,
                  14.88147
                ],
                [
                  99.43947,
                  14.88293
                ],
                [
                  99.44128,
                  14.88438
                ],
                [
                  99.45009,
                  14.88682
                ],
                [
                  99.45305,
                  14.88411
                ],
                [
                  99.45624,
                  14.88341
                ],
                [
                  99.46326,
                  14.88457
                ],
                [
                  99.46506,
                  14.88618
                ],
                [
                  99.46907,
                  14.88695
                ],
                [
                  99.47196,
                  14.8849
                ],
                [
                  99.47553,
                  14.88459
                ],
                [
                  99.4803,
                  14.87969
                ],
                [
                  99.48298,
                  14.87874
                ],
                [
                  99.49055,
                  14.8789
                ],
                [
                  99.48846,
                  14.86943
                ],
                [
                  99.48262,
                  14.86518
                ],
                [
                  99.4786,
                  14.86438
                ],
                [
                  99.47599,
                  14.85989
                ],
                [
                  99.48134,
                  14.85376
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.4652,
                  14.82811
                ],
                [
                  99.47134,
                  14.80774
                ],
                [
                  99.46921,
                  14.80303
                ],
                [
                  99.46627,
                  14.7859
                ],
                [
                  99.45577,
                  14.7833
                ],
                [
                  99.45689,
                  14.77841
                ],
                [
                  99.45567,
                  14.77058
                ],
                [
                  99.45169,
                  14.76523
                ],
                [
                  99.45372,
                  14.76229
                ],
                [
                  99.45174,
                  14.75677
                ],
                [
                  99.4543,
                  14.74357
                ],
                [
                  99.45365,
                  14.74122
                ],
                [
                  99.44958,
                  14.73671
                ],
                [
                  99.45227,
                  14.73348
                ],
                [
                  99.4543,
                  14.72575
                ],
                [
                  99.45095,
                  14.72717
                ],
                [
                  99.44912,
                  14.72975
                ],
                [
                  99.44431,
                  14.73073
                ],
                [
                  99.44162,
                  14.73274
                ],
                [
                  99.44303,
                  14.74074
                ],
                [
                  99.4389,
                  14.74341
                ],
                [
                  99.43463,
                  14.7503
                ],
                [
                  99.43197,
                  14.75244
                ],
                [
                  99.43334,
                  14.75543
                ],
                [
                  99.43153,
                  14.76459
                ],
                [
                  99.43326,
                  14.76813
                ],
                [
                  99.43693,
                  14.77067
                ],
                [
                  99.4357,
                  14.77519
                ],
                [
                  99.43274,
                  14.77595
                ],
                [
                  99.42913,
                  14.77902
                ],
                [
                  99.42119,
                  14.78143
                ],
                [
                  99.41417,
                  14.7769
                ],
                [
                  99.41201,
                  14.77313
                ],
                [
                  99.40622,
                  14.77314
                ],
                [
                  99.38925,
                  14.76566
                ],
                [
                  99.38392,
                  14.76677
                ],
                [
                  99.38131,
                  14.76532
                ],
                [
                  99.37603,
                  14.76582
                ],
                [
                  99.37145,
                  14.76779
                ],
                [
                  99.36665,
                  14.77311
                ],
                [
                  99.36281,
                  14.77112
                ],
                [
                  99.35852,
                  14.77153
                ],
                [
                  99.34881,
                  14.78187
                ],
                [
                  99.34337,
                  14.78333
                ],
                [
                  99.34085,
                  14.78575
                ],
                [
                  99.33468,
                  14.79371
                ],
                [
                  99.33525,
                  14.80021
                ],
                [
                  99.33263,
                  14.80244
                ],
                [
                  99.32998,
                  14.80717
                ],
                [
                  99.32661,
                  14.80827
                ],
                [
                  99.3247,
                  14.81045
                ],
                [
                  99.32134,
                  14.81023
                ],
                [
                  99.31494,
                  14.8141
                ],
                [
                  99.30886,
                  14.81277
                ],
                [
                  99.30285,
                  14.82605
                ],
                [
                  99.29337,
                  14.83194
                ],
                [
                  99.29398,
                  14.83588
                ],
                [
                  99.29154,
                  14.83885
                ],
                [
                  99.28968,
                  14.84614
                ],
                [
                  99.28786,
                  14.84711
                ],
                [
                  99.2878,
                  14.85201
                ],
                [
                  99.28435,
                  14.85436
                ],
                [
                  99.2842,
                  14.8584
                ],
                [
                  99.2816,
                  14.86135
                ],
                [
                  99.28542,
                  14.86254
                ],
                [
                  99.28686,
                  14.86481
                ],
                [
                  99.28912,
                  14.86394
                ],
                [
                  99.29183,
                  14.86498
                ],
                [
                  99.29373,
                  14.86964
                ],
                [
                  99.29584,
                  14.87038
                ],
                [
                  99.30063,
                  14.87505
                ],
                [
                  99.30403,
                  14.87919
                ],
                [
                  99.30503,
                  14.88238
                ],
                [
                  99.31279,
                  14.8835
                ],
                [
                  99.31664,
                  14.89061
                ],
                [
                  99.31778,
                  14.89532
                ],
                [
                  99.32089,
                  14.89528
                ],
                [
                  99.3245,
                  14.88991
                ],
                [
                  99.33025,
                  14.8899
                ],
                [
                  99.3268,
                  14.88262
                ],
                [
                  99.33158,
                  14.88054
                ],
                [
                  99.34326,
                  14.87903
                ],
                [
                  99.348,
                  14.87443
                ],
                [
                  99.35815,
                  14.87295
                ],
                [
                  99.36054,
                  14.86827
                ],
                [
                  99.36694,
                  14.86282
                ],
                [
                  99.37178,
                  14.8634
                ],
                [
                  99.37429,
                  14.86571
                ],
                [
                  99.37788,
                  14.86655
                ],
                [
                  99.39398,
                  14.86482
                ],
                [
                  99.39412,
                  14.86188
                ],
                [
                  99.39034,
                  14.85536
                ],
                [
                  99.38663,
                  14.84475
                ],
                [
                  99.38228,
                  14.83827
                ],
                [
                  99.38494,
                  14.83395
                ],
                [
                  99.38504,
                  14.83195
                ],
                [
                  99.38917,
                  14.83494
                ],
                [
                  99.39773,
                  14.83727
                ],
                [
                  99.40431,
                  14.83198
                ],
                [
                  99.41507,
                  14.8337
                ],
                [
                  99.42615,
                  14.82912
                ],
                [
                  99.42845,
                  14.83132
                ],
                [
                  99.43159,
                  14.83809
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720304",
          "tambon": "ต.องค์พระ",
          "amphoe": "อ.ด่านช้าง",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านวังโหรา",
          "latitude": 14.804954,
          "longitude": 99.441428,
          "sum_rainfall_mm": 42.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.43159,
                  14.83809
                ],
                [
                  99.43421,
                  14.84216
                ],
                [
                  99.43143,
                  14.84533
                ],
                [
                  99.43513,
                  14.84817
                ],
                [
                  99.43564,
                  14.84971
                ],
                [
                  99.43534,
                  14.85171
                ],
                [
                  99.4325,
                  14.85518
                ],
                [
                  99.44801,
                  14.85985
                ],
                [
                  99.44612,
                  14.86676
                ],
                [
                  99.4394,
                  14.88147
                ],
                [
                  99.43947,
                  14.88293
                ],
                [
                  99.44128,
                  14.88438
                ],
                [
                  99.45009,
                  14.88682
                ],
                [
                  99.45305,
                  14.88411
                ],
                [
                  99.45624,
                  14.88341
                ],
                [
                  99.46326,
                  14.88457
                ],
                [
                  99.46506,
                  14.88618
                ],
                [
                  99.46907,
                  14.88695
                ],
                [
                  99.47196,
                  14.8849
                ],
                [
                  99.47553,
                  14.88459
                ],
                [
                  99.4803,
                  14.87969
                ],
                [
                  99.48298,
                  14.87874
                ],
                [
                  99.49055,
                  14.8789
                ],
                [
                  99.48846,
                  14.86943
                ],
                [
                  99.48262,
                  14.86518
                ],
                [
                  99.4786,
                  14.86438
                ],
                [
                  99.47599,
                  14.85989
                ],
                [
                  99.48134,
                  14.85376
                ],
                [
                  99.48367,
                  14.84722
                ],
                [
                  99.4652,
                  14.82811
                ],
                [
                  99.47134,
                  14.80774
                ],
                [
                  99.46921,
                  14.80303
                ],
                [
                  99.46627,
                  14.7859
                ],
                [
                  99.45577,
                  14.7833
                ],
                [
                  99.45689,
                  14.77841
                ],
                [
                  99.45567,
                  14.77058
                ],
                [
                  99.45169,
                  14.76523
                ],
                [
                  99.45372,
                  14.76229
                ],
                [
                  99.45174,
                  14.75677
                ],
                [
                  99.4543,
                  14.74357
                ],
                [
                  99.45365,
                  14.74122
                ],
                [
                  99.44958,
                  14.73671
                ],
                [
                  99.45227,
                  14.73348
                ],
                [
                  99.4543,
                  14.72575
                ],
                [
                  99.45095,
                  14.72717
                ],
                [
                  99.44912,
                  14.72975
                ],
                [
                  99.44431,
                  14.73073
                ],
                [
                  99.44162,
                  14.73274
                ],
                [
                  99.44303,
                  14.74074
                ],
                [
                  99.4389,
                  14.74341
                ],
                [
                  99.43463,
                  14.7503
                ],
                [
                  99.43197,
                  14.75244
                ],
                [
                  99.43334,
                  14.75543
                ],
                [
                  99.43153,
                  14.76459
                ],
                [
                  99.43326,
                  14.76813
                ],
                [
                  99.43693,
                  14.77067
                ],
                [
                  99.4357,
                  14.77519
                ],
                [
                  99.43274,
                  14.77595
                ],
                [
                  99.42913,
                  14.77902
                ],
                [
                  99.42119,
                  14.78143
                ],
                [
                  99.41417,
                  14.7769
                ],
                [
                  99.41201,
                  14.77313
                ],
                [
                  99.40622,
                  14.77314
                ],
                [
                  99.38925,
                  14.76566
                ],
                [
                  99.38392,
                  14.76677
                ],
                [
                  99.38131,
                  14.76532
                ],
                [
                  99.37603,
                  14.76582
                ],
                [
                  99.37145,
                  14.76779
                ],
                [
                  99.36665,
                  14.77311
                ],
                [
                  99.36281,
                  14.77112
                ],
                [
                  99.35852,
                  14.77153
                ],
                [
                  99.34881,
                  14.78187
                ],
                [
                  99.34337,
                  14.78333
                ],
                [
                  99.34085,
                  14.78575
                ],
                [
                  99.33468,
                  14.79371
                ],
                [
                  99.33525,
                  14.80021
                ],
                [
                  99.33263,
                  14.80244
                ],
                [
                  99.32998,
                  14.80717
                ],
                [
                  99.32661,
                  14.80827
                ],
                [
                  99.3247,
                  14.81045
                ],
                [
                  99.32134,
                  14.81023
                ],
                [
                  99.31494,
                  14.8141
                ],
                [
                  99.30886,
                  14.81277
                ],
                [
                  99.30285,
                  14.82605
                ],
                [
                  99.29337,
                  14.83194
                ],
                [
                  99.29398,
                  14.83588
                ],
                [
                  99.29154,
                  14.83885
                ],
                [
                  99.28968,
                  14.84614
                ],
                [
                  99.28786,
                  14.84711
                ],
                [
                  99.2878,
                  14.85201
                ],
                [
                  99.28435,
                  14.85436
                ],
                [
                  99.2842,
                  14.8584
                ],
                [
                  99.2816,
                  14.86135
                ],
                [
                  99.28542,
                  14.86254
                ],
                [
                  99.28686,
                  14.86481
                ],
                [
                  99.28912,
                  14.86394
                ],
                [
                  99.29183,
                  14.86498
                ],
                [
                  99.29373,
                  14.86964
                ],
                [
                  99.29584,
                  14.87038
                ],
                [
                  99.30063,
                  14.87505
                ],
                [
                  99.30403,
                  14.87919
                ],
                [
                  99.30503,
                  14.88238
                ],
                [
                  99.31279,
                  14.8835
                ],
                [
                  99.31664,
                  14.89061
                ],
                [
                  99.31778,
                  14.89532
                ],
                [
                  99.32089,
                  14.89528
                ],
                [
                  99.3245,
                  14.88991
                ],
                [
                  99.33025,
                  14.8899
                ],
                [
                  99.3268,
                  14.88262
                ],
                [
                  99.33158,
                  14.88054
                ],
                [
                  99.34326,
                  14.87903
                ],
                [
                  99.348,
                  14.87443
                ],
                [
                  99.35815,
                  14.87295
                ],
                [
                  99.36054,
                  14.86827
                ],
                [
                  99.36694,
                  14.86282
                ],
                [
                  99.37178,
                  14.8634
                ],
                [
                  99.37429,
                  14.86571
                ],
                [
                  99.37788,
                  14.86655
                ],
                [
                  99.39398,
                  14.86482
                ],
                [
                  99.39412,
                  14.86188
                ],
                [
                  99.39034,
                  14.85536
                ],
                [
                  99.38663,
                  14.84475
                ],
                [
                  99.38228,
                  14.83827
                ],
                [
                  99.38494,
                  14.83395
                ],
                [
                  99.38504,
                  14.83195
                ],
                [
                  99.38917,
                  14.83494
                ],
                [
                  99.39773,
                  14.83727
                ],
                [
                  99.40431,
                  14.83198
                ],
                [
                  99.41507,
                  14.8337
                ],
                [
                  99.42615,
                  14.82912
                ],
                [
                  99.42845,
                  14.83132
                ],
                [
                  99.43159,
                  14.83809
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610801",
          "tambon": "ต.สุขฤทัย",
          "amphoe": "อ.ห้วยคต",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านวังบ่าง",
          "latitude": 15.312792,
          "longitude": 99.658732,
          "sum_rainfall_mm": 46.5,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.69158,
                  15.29509
                ],
                [
                  99.68966,
                  15.29187
                ],
                [
                  99.68934,
                  15.27124
                ],
                [
                  99.68793,
                  15.27028
                ],
                [
                  99.68057,
                  15.27035
                ],
                [
                  99.6784,
                  15.27185
                ],
                [
                  99.67764,
                  15.26415
                ],
                [
                  99.67316,
                  15.2561
                ],
                [
                  99.67128,
                  15.24788
                ],
                [
                  99.66642,
                  15.24431
                ],
                [
                  99.66441,
                  15.24467
                ],
                [
                  99.66173,
                  15.24167
                ],
                [
                  99.65742,
                  15.24209
                ],
                [
                  99.64871,
                  15.23546
                ],
                [
                  99.64938,
                  15.2339
                ],
                [
                  99.6435,
                  15.23185
                ],
                [
                  99.6373,
                  15.22678
                ],
                [
                  99.63345,
                  15.22696
                ],
                [
                  99.6261,
                  15.22385
                ],
                [
                  99.62545,
                  15.22612
                ],
                [
                  99.62177,
                  15.22878
                ],
                [
                  99.6041,
                  15.25156
                ],
                [
                  99.59971,
                  15.25923
                ],
                [
                  99.60747,
                  15.27265
                ],
                [
                  99.62503,
                  15.29056
                ],
                [
                  99.62402,
                  15.29555
                ],
                [
                  99.62074,
                  15.30077
                ],
                [
                  99.62611,
                  15.30398
                ],
                [
                  99.62443,
                  15.31563
                ],
                [
                  99.62561,
                  15.32313
                ],
                [
                  99.62704,
                  15.32386
                ],
                [
                  99.6293,
                  15.32414
                ],
                [
                  99.63299,
                  15.31935
                ],
                [
                  99.63889,
                  15.31789
                ],
                [
                  99.64026,
                  15.31607
                ],
                [
                  99.645,
                  15.31537
                ],
                [
                  99.64792,
                  15.31696
                ],
                [
                  99.65299,
                  15.31279
                ],
                [
                  99.65676,
                  15.31284
                ],
                [
                  99.65877,
                  15.31443
                ],
                [
                  99.66157,
                  15.31458
                ],
                [
                  99.66468,
                  15.31721
                ],
                [
                  99.66978,
                  15.31669
                ],
                [
                  99.67263,
                  15.31509
                ],
                [
                  99.67284,
                  15.31327
                ],
                [
                  99.67692,
                  15.30977
                ],
                [
                  99.67855,
                  15.30481
                ],
                [
                  99.68614,
                  15.30096
                ],
                [
                  99.69158,
                  15.29509
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610801",
          "tambon": "ต.สุขฤทัย",
          "amphoe": "อ.ห้วยคต",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกกงิ้ว",
          "latitude": 15.304712,
          "longitude": 99.648582,
          "sum_rainfall_mm": 48.5,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.69158,
                  15.29509
                ],
                [
                  99.68966,
                  15.29187
                ],
                [
                  99.68934,
                  15.27124
                ],
                [
                  99.68793,
                  15.27028
                ],
                [
                  99.68057,
                  15.27035
                ],
                [
                  99.6784,
                  15.27185
                ],
                [
                  99.67764,
                  15.26415
                ],
                [
                  99.67316,
                  15.2561
                ],
                [
                  99.67128,
                  15.24788
                ],
                [
                  99.66642,
                  15.24431
                ],
                [
                  99.66441,
                  15.24467
                ],
                [
                  99.66173,
                  15.24167
                ],
                [
                  99.65742,
                  15.24209
                ],
                [
                  99.64871,
                  15.23546
                ],
                [
                  99.64938,
                  15.2339
                ],
                [
                  99.6435,
                  15.23185
                ],
                [
                  99.6373,
                  15.22678
                ],
                [
                  99.63345,
                  15.22696
                ],
                [
                  99.6261,
                  15.22385
                ],
                [
                  99.62545,
                  15.22612
                ],
                [
                  99.62177,
                  15.22878
                ],
                [
                  99.6041,
                  15.25156
                ],
                [
                  99.59971,
                  15.25923
                ],
                [
                  99.60747,
                  15.27265
                ],
                [
                  99.62503,
                  15.29056
                ],
                [
                  99.62402,
                  15.29555
                ],
                [
                  99.62074,
                  15.30077
                ],
                [
                  99.62611,
                  15.30398
                ],
                [
                  99.62443,
                  15.31563
                ],
                [
                  99.62561,
                  15.32313
                ],
                [
                  99.62704,
                  15.32386
                ],
                [
                  99.6293,
                  15.32414
                ],
                [
                  99.63299,
                  15.31935
                ],
                [
                  99.63889,
                  15.31789
                ],
                [
                  99.64026,
                  15.31607
                ],
                [
                  99.645,
                  15.31537
                ],
                [
                  99.64792,
                  15.31696
                ],
                [
                  99.65299,
                  15.31279
                ],
                [
                  99.65676,
                  15.31284
                ],
                [
                  99.65877,
                  15.31443
                ],
                [
                  99.66157,
                  15.31458
                ],
                [
                  99.66468,
                  15.31721
                ],
                [
                  99.66978,
                  15.31669
                ],
                [
                  99.67263,
                  15.31509
                ],
                [
                  99.67284,
                  15.31327
                ],
                [
                  99.67692,
                  15.30977
                ],
                [
                  99.67855,
                  15.30481
                ],
                [
                  99.68614,
                  15.30096
                ],
                [
                  99.69158,
                  15.29509
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610803",
          "tambon": "ต.ห้วยคต",
          "amphoe": "อ.ห้วยคต",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกลาง",
          "latitude": 15.313404,
          "longitude": 99.58156,
          "sum_rainfall_mm": 65.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.61302,
                  15.32853
                ],
                [
                  99.62199,
                  15.32671
                ],
                [
                  99.62427,
                  15.32468
                ],
                [
                  99.626,
                  15.32477
                ],
                [
                  99.62443,
                  15.31563
                ],
                [
                  99.62625,
                  15.30452
                ],
                [
                  99.62074,
                  15.30077
                ],
                [
                  99.62537,
                  15.29144
                ],
                [
                  99.61777,
                  15.28218
                ],
                [
                  99.60747,
                  15.27265
                ],
                [
                  99.59964,
                  15.25958
                ],
                [
                  99.6041,
                  15.25156
                ],
                [
                  99.62177,
                  15.22878
                ],
                [
                  99.62545,
                  15.22612
                ],
                [
                  99.6261,
                  15.22385
                ],
                [
                  99.62005,
                  15.22178
                ],
                [
                  99.61764,
                  15.21819
                ],
                [
                  99.60532,
                  15.20694
                ],
                [
                  99.60446,
                  15.20327
                ],
                [
                  99.60703,
                  15.19543
                ],
                [
                  99.59252,
                  15.20353
                ],
                [
                  99.58429,
                  15.21045
                ],
                [
                  99.58054,
                  15.21161
                ],
                [
                  99.57756,
                  15.21555
                ],
                [
                  99.57806,
                  15.21711
                ],
                [
                  99.58042,
                  15.21803
                ],
                [
                  99.58166,
                  15.22318
                ],
                [
                  99.57689,
                  15.23103
                ],
                [
                  99.57103,
                  15.23406
                ],
                [
                  99.56229,
                  15.23276
                ],
                [
                  99.56014,
                  15.23394
                ],
                [
                  99.55626,
                  15.23374
                ],
                [
                  99.55361,
                  15.23626
                ],
                [
                  99.55153,
                  15.23633
                ],
                [
                  99.55169,
                  15.24581
                ],
                [
                  99.55435,
                  15.25364
                ],
                [
                  99.55443,
                  15.2583
                ],
                [
                  99.54915,
                  15.27943
                ],
                [
                  99.5506,
                  15.28978
                ],
                [
                  99.55673,
                  15.30239
                ],
                [
                  99.55746,
                  15.30915
                ],
                [
                  99.55602,
                  15.31126
                ],
                [
                  99.55832,
                  15.31764
                ],
                [
                  99.56776,
                  15.31019
                ],
                [
                  99.57118,
                  15.31236
                ],
                [
                  99.57648,
                  15.32138
                ],
                [
                  99.58208,
                  15.32284
                ],
                [
                  99.58657,
                  15.32645
                ],
                [
                  99.59391,
                  15.32744
                ],
                [
                  99.6007,
                  15.3265
                ],
                [
                  99.61009,
                  15.32924
                ],
                [
                  99.61302,
                  15.32853
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610803",
          "tambon": "ต.ห้วยคต",
          "amphoe": "อ.ห้วยคต",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหนองจอก",
          "latitude": 15.277273,
          "longitude": 99.554759,
          "sum_rainfall_mm": 39.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.61302,
                  15.32853
                ],
                [
                  99.62199,
                  15.32671
                ],
                [
                  99.62427,
                  15.32468
                ],
                [
                  99.626,
                  15.32477
                ],
                [
                  99.62443,
                  15.31563
                ],
                [
                  99.62625,
                  15.30452
                ],
                [
                  99.62074,
                  15.30077
                ],
                [
                  99.62537,
                  15.29144
                ],
                [
                  99.61777,
                  15.28218
                ],
                [
                  99.60747,
                  15.27265
                ],
                [
                  99.59964,
                  15.25958
                ],
                [
                  99.6041,
                  15.25156
                ],
                [
                  99.62177,
                  15.22878
                ],
                [
                  99.62545,
                  15.22612
                ],
                [
                  99.6261,
                  15.22385
                ],
                [
                  99.62005,
                  15.22178
                ],
                [
                  99.61764,
                  15.21819
                ],
                [
                  99.60532,
                  15.20694
                ],
                [
                  99.60446,
                  15.20327
                ],
                [
                  99.60703,
                  15.19543
                ],
                [
                  99.59252,
                  15.20353
                ],
                [
                  99.58429,
                  15.21045
                ],
                [
                  99.58054,
                  15.21161
                ],
                [
                  99.57756,
                  15.21555
                ],
                [
                  99.57806,
                  15.21711
                ],
                [
                  99.58042,
                  15.21803
                ],
                [
                  99.58166,
                  15.22318
                ],
                [
                  99.57689,
                  15.23103
                ],
                [
                  99.57103,
                  15.23406
                ],
                [
                  99.56229,
                  15.23276
                ],
                [
                  99.56014,
                  15.23394
                ],
                [
                  99.55626,
                  15.23374
                ],
                [
                  99.55361,
                  15.23626
                ],
                [
                  99.55153,
                  15.23633
                ],
                [
                  99.55169,
                  15.24581
                ],
                [
                  99.55435,
                  15.25364
                ],
                [
                  99.55443,
                  15.2583
                ],
                [
                  99.54915,
                  15.27943
                ],
                [
                  99.5506,
                  15.28978
                ],
                [
                  99.55673,
                  15.30239
                ],
                [
                  99.55746,
                  15.30915
                ],
                [
                  99.55602,
                  15.31126
                ],
                [
                  99.55832,
                  15.31764
                ],
                [
                  99.56776,
                  15.31019
                ],
                [
                  99.57118,
                  15.31236
                ],
                [
                  99.57648,
                  15.32138
                ],
                [
                  99.58208,
                  15.32284
                ],
                [
                  99.58657,
                  15.32645
                ],
                [
                  99.59391,
                  15.32744
                ],
                [
                  99.6007,
                  15.3265
                ],
                [
                  99.61009,
                  15.32924
                ],
                [
                  99.61302,
                  15.32853
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610803",
          "tambon": "ต.ห้วยคต",
          "amphoe": "อ.ห้วยคต",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหินโหง่น",
          "latitude": 15.234026,
          "longitude": 99.588856,
          "sum_rainfall_mm": 40.5,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.61302,
                  15.32853
                ],
                [
                  99.62199,
                  15.32671
                ],
                [
                  99.62427,
                  15.32468
                ],
                [
                  99.626,
                  15.32477
                ],
                [
                  99.62443,
                  15.31563
                ],
                [
                  99.62625,
                  15.30452
                ],
                [
                  99.62074,
                  15.30077
                ],
                [
                  99.62537,
                  15.29144
                ],
                [
                  99.61777,
                  15.28218
                ],
                [
                  99.60747,
                  15.27265
                ],
                [
                  99.59964,
                  15.25958
                ],
                [
                  99.6041,
                  15.25156
                ],
                [
                  99.62177,
                  15.22878
                ],
                [
                  99.62545,
                  15.22612
                ],
                [
                  99.6261,
                  15.22385
                ],
                [
                  99.62005,
                  15.22178
                ],
                [
                  99.61764,
                  15.21819
                ],
                [
                  99.60532,
                  15.20694
                ],
                [
                  99.60446,
                  15.20327
                ],
                [
                  99.60703,
                  15.19543
                ],
                [
                  99.59252,
                  15.20353
                ],
                [
                  99.58429,
                  15.21045
                ],
                [
                  99.58054,
                  15.21161
                ],
                [
                  99.57756,
                  15.21555
                ],
                [
                  99.57806,
                  15.21711
                ],
                [
                  99.58042,
                  15.21803
                ],
                [
                  99.58166,
                  15.22318
                ],
                [
                  99.57689,
                  15.23103
                ],
                [
                  99.57103,
                  15.23406
                ],
                [
                  99.56229,
                  15.23276
                ],
                [
                  99.56014,
                  15.23394
                ],
                [
                  99.55626,
                  15.23374
                ],
                [
                  99.55361,
                  15.23626
                ],
                [
                  99.55153,
                  15.23633
                ],
                [
                  99.55169,
                  15.24581
                ],
                [
                  99.55435,
                  15.25364
                ],
                [
                  99.55443,
                  15.2583
                ],
                [
                  99.54915,
                  15.27943
                ],
                [
                  99.5506,
                  15.28978
                ],
                [
                  99.55673,
                  15.30239
                ],
                [
                  99.55746,
                  15.30915
                ],
                [
                  99.55602,
                  15.31126
                ],
                [
                  99.55832,
                  15.31764
                ],
                [
                  99.56776,
                  15.31019
                ],
                [
                  99.57118,
                  15.31236
                ],
                [
                  99.57648,
                  15.32138
                ],
                [
                  99.58208,
                  15.32284
                ],
                [
                  99.58657,
                  15.32645
                ],
                [
                  99.59391,
                  15.32744
                ],
                [
                  99.6007,
                  15.3265
                ],
                [
                  99.61009,
                  15.32924
                ],
                [
                  99.61302,
                  15.32853
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710405",
          "tambon": "ต.เขาโจด",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ศร.9 (ไกรเกรียง)",
          "latitude": 15.0256,
          "longitude": 99.1902,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24602,
                  15.00155
                ],
                [
                  99.24771,
                  15.00147
                ],
                [
                  99.24954,
                  14.99974
                ],
                [
                  99.25031,
                  14.99595
                ],
                [
                  99.25294,
                  14.99494
                ],
                [
                  99.25247,
                  14.99234
                ],
                [
                  99.25386,
                  14.99188
                ],
                [
                  99.25633,
                  14.98762
                ],
                [
                  99.25799,
                  14.98781
                ],
                [
                  99.26068,
                  14.99142
                ],
                [
                  99.27575,
                  14.99075
                ],
                [
                  99.27936,
                  14.99306
                ],
                [
                  99.28314,
                  14.99813
                ],
                [
                  99.28538,
                  14.99328
                ],
                [
                  99.28978,
                  14.9927
                ],
                [
                  99.29202,
                  14.98839
                ],
                [
                  99.29837,
                  14.98715
                ],
                [
                  99.30109,
                  14.9833
                ],
                [
                  99.30409,
                  14.98122
                ],
                [
                  99.30531,
                  14.97883
                ],
                [
                  99.30435,
                  14.97599
                ],
                [
                  99.30532,
                  14.97333
                ],
                [
                  99.30715,
                  14.97056
                ],
                [
                  99.31232,
                  14.96723
                ],
                [
                  99.31491,
                  14.95624
                ],
                [
                  99.32091,
                  14.94915
                ],
                [
                  99.32105,
                  14.94669
                ],
                [
                  99.31585,
                  14.94351
                ],
                [
                  99.31352,
                  14.93857
                ],
                [
                  99.31062,
                  14.93553
                ],
                [
                  99.31308,
                  14.93031
                ],
                [
                  99.31621,
                  14.92868
                ],
                [
                  99.3189,
                  14.92513
                ],
                [
                  99.32142,
                  14.92433
                ],
                [
                  99.32201,
                  14.92055
                ],
                [
                  99.31999,
                  14.91169
                ],
                [
                  99.31684,
                  14.9067
                ],
                [
                  99.31811,
                  14.89663
                ],
                [
                  99.31664,
                  14.89061
                ],
                [
                  99.31345,
                  14.88414
                ],
                [
                  99.31161,
                  14.88301
                ],
                [
                  99.3055,
                  14.88276
                ],
                [
                  99.30063,
                  14.87505
                ],
                [
                  99.29584,
                  14.87038
                ],
                [
                  99.29373,
                  14.86964
                ],
                [
                  99.29183,
                  14.86498
                ],
                [
                  99.28912,
                  14.86394
                ],
                [
                  99.28686,
                  14.86481
                ],
                [
                  99.28542,
                  14.86254
                ],
                [
                  99.2816,
                  14.86135
                ],
                [
                  99.2842,
                  14.8584
                ],
                [
                  99.28435,
                  14.85436
                ],
                [
                  99.2878,
                  14.85201
                ],
                [
                  99.28786,
                  14.84711
                ],
                [
                  99.28968,
                  14.84614
                ],
                [
                  99.29154,
                  14.83885
                ],
                [
                  99.29398,
                  14.83588
                ],
                [
                  99.29337,
                  14.83194
                ],
                [
                  99.28227,
                  14.82769
                ],
                [
                  99.27851,
                  14.82861
                ],
                [
                  99.27402,
                  14.8323
                ],
                [
                  99.2691,
                  14.83325
                ],
                [
                  99.26519,
                  14.83594
                ],
                [
                  99.25372,
                  14.83497
                ],
                [
                  99.24687,
                  14.83313
                ],
                [
                  99.24043,
                  14.82803
                ],
                [
                  99.2394,
                  14.82614
                ],
                [
                  99.2401,
                  14.82174
                ],
                [
                  99.25072,
                  14.81453
                ],
                [
                  99.24972,
                  14.81032
                ],
                [
                  99.25074,
                  14.80759
                ],
                [
                  99.25287,
                  14.80452
                ],
                [
                  99.25721,
                  14.80189
                ],
                [
                  99.26354,
                  14.79158
                ],
                [
                  99.27041,
                  14.78844
                ],
                [
                  99.27279,
                  14.78591
                ],
                [
                  99.27289,
                  14.78452
                ],
                [
                  99.26995,
                  14.78271
                ],
                [
                  99.26896,
                  14.77756
                ],
                [
                  99.26972,
                  14.77174
                ],
                [
                  99.27098,
                  14.77045
                ],
                [
                  99.27068,
                  14.76723
                ],
                [
                  99.27258,
                  14.76365
                ],
                [
                  99.27829,
                  14.76269
                ],
                [
                  99.27737,
                  14.75311
                ],
                [
                  99.28119,
                  14.74749
                ],
                [
                  99.28647,
                  14.74498
                ],
                [
                  99.28809,
                  14.74213
                ],
                [
                  99.28462,
                  14.7398
                ],
                [
                  99.28401,
                  14.73736
                ],
                [
                  99.28608,
                  14.7319
                ],
                [
                  99.28428,
                  14.72915
                ],
                [
                  99.28549,
                  14.7261
                ],
                [
                  99.28513,
                  14.71685
                ],
                [
                  99.28925,
                  14.71229
                ],
                [
                  99.28781,
                  14.71002
                ],
                [
                  99.28857,
                  14.7074
                ],
                [
                  99.28555,
                  14.70509
                ],
                [
                  99.28618,
                  14.70191
                ],
                [
                  99.295,
                  14.70212
                ],
                [
                  99.29955,
                  14.70445
                ],
                [
                  99.30283,
                  14.70483
                ],
                [
                  99.31079,
                  14.70044
                ],
                [
                  99.3155,
                  14.70047
                ],
                [
                  99.32012,
                  14.69868
                ],
                [
                  99.32201,
                  14.69924
                ],
                [
                  99.32879,
                  14.69761
                ],
                [
                  99.33162,
                  14.6984
                ],
                [
                  99.33418,
                  14.70263
                ],
                [
                  99.33782,
                  14.70267
                ],
                [
                  99.341,
                  14.69803
                ],
                [
                  99.33966,
                  14.69175
                ],
                [
                  99.33819,
                  14.68997
                ],
                [
                  99.33888,
                  14.68686
                ],
                [
                  99.34296,
                  14.68317
                ],
                [
                  99.34455,
                  14.67992
                ],
                [
                  99.34927,
                  14.67726
                ],
                [
                  99.35354,
                  14.66577
                ],
                [
                  99.35357,
                  14.66378
                ],
                [
                  99.34645,
                  14.64987
                ],
                [
                  99.33751,
                  14.64856
                ],
                [
                  99.33394,
                  14.64697
                ],
                [
                  99.32694,
                  14.64166
                ],
                [
                  99.3236,
                  14.63626
                ],
                [
                  99.31588,
                  14.63326
                ],
                [
                  99.30799,
                  14.62834
                ],
                [
                  99.27757,
                  14.6211
                ],
                [
                  99.27013,
                  14.62351
                ],
                [
                  99.26753,
                  14.62802
                ],
                [
                  99.26089,
                  14.63349
                ],
                [
                  99.25928,
                  14.64123
                ],
                [
                  99.25583,
                  14.64425
                ],
                [
                  99.25494,
                  14.64919
                ],
                [
                  99.25566,
                  14.65181
                ],
                [
                  99.25463,
                  14.65417
                ],
                [
                  99.2555,
                  14.65834
                ],
                [
                  99.25695,
                  14.66209
                ],
                [
                  99.26202,
                  14.66292
                ],
                [
                  99.26174,
                  14.671
                ],
                [
                  99.25688,
                  14.67072
                ],
                [
                  99.25182,
                  14.67214
                ],
                [
                  99.24945,
                  14.68147
                ],
                [
                  99.247,
                  14.68541
                ],
                [
                  99.24172,
                  14.68964
                ],
                [
                  99.23605,
                  14.69189
                ],
                [
                  99.23478,
                  14.69327
                ],
                [
                  99.23334,
                  14.69943
                ],
                [
                  99.2247,
                  14.70425
                ],
                [
                  99.22478,
                  14.70789
                ],
                [
                  99.19747,
                  14.71423
                ],
                [
                  99.19578,
                  14.71546
                ],
                [
                  99.19454,
                  14.7191
                ],
                [
                  99.18739,
                  14.72038
                ],
                [
                  99.18694,
                  14.72948
                ],
                [
                  99.18403,
                  14.73276
                ],
                [
                  99.1857,
                  14.73542
                ],
                [
                  99.18452,
                  14.73931
                ],
                [
                  99.18591,
                  14.74372
                ],
                [
                  99.18593,
                  14.74993
                ],
                [
                  99.17739,
                  14.75487
                ],
                [
                  99.1697,
                  14.75574
                ],
                [
                  99.16283,
                  14.75935
                ],
                [
                  99.15809,
                  14.77042
                ],
                [
                  99.15467,
                  14.7725
                ],
                [
                  99.15315,
                  14.77487
                ],
                [
                  99.15398,
                  14.77891
                ],
                [
                  99.14977,
                  14.78943
                ],
                [
                  99.1479,
                  14.79088
                ],
                [
                  99.14379,
                  14.7914
                ],
                [
                  99.14009,
                  14.79491
                ],
                [
                  99.12893,
                  14.79629
                ],
                [
                  99.1251,
                  14.801
                ],
                [
                  99.12407,
                  14.80561
                ],
                [
                  99.11674,
                  14.81066
                ],
                [
                  99.11556,
                  14.81764
                ],
                [
                  99.11119,
                  14.82241
                ],
                [
                  99.10881,
                  14.82877
                ],
                [
                  99.10341,
                  14.83222
                ],
                [
                  99.10101,
                  14.83969
                ],
                [
                  99.0913,
                  14.84228
                ],
                [
                  99.0884,
                  14.84512
                ],
                [
                  99.08773,
                  14.84701
                ],
                [
                  99.0903,
                  14.8546
                ],
                [
                  99.09011,
                  14.8595
                ],
                [
                  99.07685,
                  14.88256
                ],
                [
                  99.07586,
                  14.88785
                ],
                [
                  99.07831,
                  14.88732
                ],
                [
                  99.08138,
                  14.88275
                ],
                [
                  99.08482,
                  14.88218
                ],
                [
                  99.0867,
                  14.88552
                ],
                [
                  99.08606,
                  14.88958
                ],
                [
                  99.08817,
                  14.89492
                ],
                [
                  99.087,
                  14.89891
                ],
                [
                  99.08778,
                  14.90054
                ],
                [
                  99.09454,
                  14.89843
                ],
                [
                  99.098,
                  14.899
                ],
                [
                  99.10881,
                  14.90673
                ],
                [
                  99.12205,
                  14.92027
                ],
                [
                  99.11052,
                  14.93788
                ],
                [
                  99.11079,
                  14.94203
                ],
                [
                  99.10552,
                  14.94764
                ],
                [
                  99.1021,
                  14.94941
                ],
                [
                  99.09714,
                  14.94955
                ],
                [
                  99.08668,
                  14.95714
                ],
                [
                  99.08223,
                  14.95674
                ],
                [
                  99.07933,
                  14.95786
                ],
                [
                  99.07939,
                  14.9601
                ],
                [
                  99.08362,
                  14.96286
                ],
                [
                  99.08085,
                  14.96839
                ],
                [
                  99.07861,
                  14.98065
                ],
                [
                  99.07227,
                  14.98309
                ],
                [
                  99.07017,
                  14.98765
                ],
                [
                  99.06988,
                  14.99282
                ],
                [
                  99.06669,
                  14.99846
                ],
                [
                  99.0652,
                  15.00587
                ],
                [
                  99.0574,
                  15.01245
                ],
                [
                  99.0553,
                  15.02646
                ],
                [
                  99.05183,
                  15.03163
                ],
                [
                  99.04912,
                  15.03298
                ],
                [
                  99.04688,
                  15.0408
                ],
                [
                  99.04419,
                  15.04222
                ],
                [
                  99.04243,
                  15.04637
                ],
                [
                  99.05034,
                  15.0429
                ],
                [
                  99.06799,
                  15.0476
                ],
                [
                  99.06989,
                  15.04663
                ],
                [
                  99.06998,
                  15.04377
                ],
                [
                  99.07723,
                  15.03864
                ],
                [
                  99.08077,
                  15.04008
                ],
                [
                  99.08723,
                  15.03931
                ],
                [
                  99.09309,
                  15.04273
                ],
                [
                  99.09544,
                  15.04212
                ],
                [
                  99.09771,
                  15.04341
                ],
                [
                  99.10135,
                  15.04255
                ],
                [
                  99.10257,
                  15.0444
                ],
                [
                  99.11103,
                  15.04735
                ],
                [
                  99.11345,
                  15.04432
                ],
                [
                  99.11554,
                  15.04639
                ],
                [
                  99.11563,
                  15.04923
                ],
                [
                  99.11912,
                  15.05499
                ],
                [
                  99.12288,
                  15.05348
                ],
                [
                  99.12484,
                  15.05099
                ],
                [
                  99.13083,
                  15.04945
                ],
                [
                  99.13675,
                  15.05108
                ],
                [
                  99.14088,
                  15.05055
                ],
                [
                  99.1429,
                  15.05207
                ],
                [
                  99.14438,
                  15.04942
                ],
                [
                  99.1467,
                  15.04828
                ],
                [
                  99.1466,
                  15.04696
                ],
                [
                  99.1437,
                  15.04509
                ],
                [
                  99.14042,
                  15.04494
                ],
                [
                  99.1371,
                  15.0426
                ],
                [
                  99.13535,
                  15.04007
                ],
                [
                  99.13563,
                  15.03736
                ],
                [
                  99.14249,
                  15.03514
                ],
                [
                  99.14554,
                  15.02695
                ],
                [
                  99.14784,
                  15.0255
                ],
                [
                  99.1483,
                  15.02391
                ],
                [
                  99.15186,
                  15.02453
                ],
                [
                  99.15587,
                  15.02332
                ],
                [
                  99.15718,
                  15.02169
                ],
                [
                  99.15605,
                  15.02073
                ],
                [
                  99.15775,
                  15.01748
                ],
                [
                  99.16986,
                  15.01392
                ],
                [
                  99.17264,
                  15.01687
                ],
                [
                  99.17526,
                  15.01588
                ],
                [
                  99.18081,
                  15.01739
                ],
                [
                  99.18396,
                  15.01936
                ],
                [
                  99.18741,
                  15.02497
                ],
                [
                  99.19086,
                  15.02664
                ],
                [
                  99.19228,
                  15.02878
                ],
                [
                  99.19402,
                  15.02353
                ],
                [
                  99.204,
                  15.01421
                ],
                [
                  99.20826,
                  15.01388
                ],
                [
                  99.21313,
                  15.01166
                ],
                [
                  99.21539,
                  15.01399
                ],
                [
                  99.21615,
                  15.0128
                ],
                [
                  99.21909,
                  15.0132
                ],
                [
                  99.22737,
                  15.01071
                ],
                [
                  99.23049,
                  15.01063
                ],
                [
                  99.23335,
                  15.0122
                ],
                [
                  99.23588,
                  15.00878
                ],
                [
                  99.24602,
                  15.00155
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710404",
          "tambon": "ต.ท่ากระดาน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "สำนักงานประปา  อบต.ท่ากระดาน สาขาแก่งแคบ",
          "latitude": 14.365097,
          "longitude": 99.154023,
          "sum_rainfall_mm": 45.0,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24612,
                  14.41115
                ],
                [
                  99.25145,
                  14.40739
                ],
                [
                  99.25336,
                  14.40319
                ],
                [
                  99.26068,
                  14.40387
                ],
                [
                  99.26266,
                  14.40263
                ],
                [
                  99.26487,
                  14.40542
                ],
                [
                  99.26797,
                  14.40432
                ],
                [
                  99.26606,
                  14.40783
                ],
                [
                  99.2693,
                  14.40639
                ],
                [
                  99.27228,
                  14.40679
                ],
                [
                  99.27311,
                  14.40972
                ],
                [
                  99.27783,
                  14.41089
                ],
                [
                  99.27586,
                  14.41377
                ],
                [
                  99.27642,
                  14.41458
                ],
                [
                  99.28559,
                  14.41379
                ],
                [
                  99.2907,
                  14.41591
                ],
                [
                  99.2931,
                  14.41927
                ],
                [
                  99.30024,
                  14.41906
                ],
                [
                  99.30447,
                  14.42679
                ],
                [
                  99.30898,
                  14.42664
                ],
                [
                  99.31402,
                  14.42258
                ],
                [
                  99.31839,
                  14.41714
                ],
                [
                  99.32045,
                  14.41238
                ],
                [
                  99.32248,
                  14.41117
                ],
                [
                  99.32117,
                  14.40628
                ],
                [
                  99.32194,
                  14.40323
                ],
                [
                  99.32125,
                  14.3981
                ],
                [
                  99.32423,
                  14.39398
                ],
                [
                  99.32398,
                  14.39076
                ],
                [
                  99.32873,
                  14.3867
                ],
                [
                  99.334,
                  14.38812
                ],
                [
                  99.33734,
                  14.38563
                ],
                [
                  99.34025,
                  14.38129
                ],
                [
                  99.33973,
                  14.37135
                ],
                [
                  99.34474,
                  14.36597
                ],
                [
                  99.35354,
                  14.35979
                ],
                [
                  99.35621,
                  14.35493
                ],
                [
                  99.35583,
                  14.35064
                ],
                [
                  99.36022,
                  14.34565
                ],
                [
                  99.35565,
                  14.34018
                ],
                [
                  99.3518,
                  14.3395
                ],
                [
                  99.3531,
                  14.336
                ],
                [
                  99.35629,
                  14.33418
                ],
                [
                  99.35964,
                  14.32969
                ],
                [
                  99.35977,
                  14.32654
                ],
                [
                  99.36614,
                  14.31466
                ],
                [
                  99.36554,
                  14.3112
                ],
                [
                  99.36084,
                  14.30711
                ],
                [
                  99.36079,
                  14.30489
                ],
                [
                  99.35798,
                  14.3041
                ],
                [
                  99.35686,
                  14.29644
                ],
                [
                  99.35994,
                  14.29089
                ],
                [
                  99.3593,
                  14.28748
                ],
                [
                  99.35136,
                  14.28756
                ],
                [
                  99.347,
                  14.28897
                ],
                [
                  99.34485,
                  14.29146
                ],
                [
                  99.34181,
                  14.30037
                ],
                [
                  99.33171,
                  14.31045
                ],
                [
                  99.32575,
                  14.31961
                ],
                [
                  99.32397,
                  14.32461
                ],
                [
                  99.32112,
                  14.32725
                ],
                [
                  99.31755,
                  14.32811
                ],
                [
                  99.31236,
                  14.33156
                ],
                [
                  99.30745,
                  14.33132
                ],
                [
                  99.30039,
                  14.33462
                ],
                [
                  99.29514,
                  14.33885
                ],
                [
                  99.28414,
                  14.34361
                ],
                [
                  99.27447,
                  14.34367
                ],
                [
                  99.27268,
                  14.34246
                ],
                [
                  99.27232,
                  14.3408
                ],
                [
                  99.26831,
                  14.34016
                ],
                [
                  99.26492,
                  14.3371
                ],
                [
                  99.25958,
                  14.3368
                ],
                [
                  99.25666,
                  14.33761
                ],
                [
                  99.25321,
                  14.34168
                ],
                [
                  99.24691,
                  14.34228
                ],
                [
                  99.24462,
                  14.34546
                ],
                [
                  99.23596,
                  14.33822
                ],
                [
                  99.23399,
                  14.33374
                ],
                [
                  99.22621,
                  14.33208
                ],
                [
                  99.2219,
                  14.32965
                ],
                [
                  99.21699,
                  14.32983
                ],
                [
                  99.21838,
                  14.32671
                ],
                [
                  99.2118,
                  14.32681
                ],
                [
                  99.20869,
                  14.3204
                ],
                [
                  99.2067,
                  14.32072
                ],
                [
                  99.20262,
                  14.3172
                ],
                [
                  99.19761,
                  14.3224
                ],
                [
                  99.18861,
                  14.30931
                ],
                [
                  99.19201,
                  14.30335
                ],
                [
                  99.19592,
                  14.2925
                ],
                [
                  99.19782,
                  14.28099
                ],
                [
                  99.20337,
                  14.27255
                ],
                [
                  99.1987,
                  14.27278
                ],
                [
                  99.19101,
                  14.27522
                ],
                [
                  99.18893,
                  14.27396
                ],
                [
                  99.18564,
                  14.27396
                ],
                [
                  99.17731,
                  14.27758
                ],
                [
                  99.17388,
                  14.27736
                ],
                [
                  99.17041,
                  14.2798
                ],
                [
                  99.16407,
                  14.28025
                ],
                [
                  99.15059,
                  14.28707
                ],
                [
                  99.14564,
                  14.28753
                ],
                [
                  99.13884,
                  14.28356
                ],
                [
                  99.13421,
                  14.28334
                ],
                [
                  99.13041,
                  14.28091
                ],
                [
                  99.12856,
                  14.27856
                ],
                [
                  99.12884,
                  14.27644
                ],
                [
                  99.1336,
                  14.26858
                ],
                [
                  99.13999,
                  14.26392
                ],
                [
                  99.14095,
                  14.25849
                ],
                [
                  99.13898,
                  14.25236
                ],
                [
                  99.14058,
                  14.24434
                ],
                [
                  99.13193,
                  14.22721
                ],
                [
                  99.12619,
                  14.23294
                ],
                [
                  99.11978,
                  14.23472
                ],
                [
                  99.1148,
                  14.23928
                ],
                [
                  99.11006,
                  14.24599
                ],
                [
                  99.10542,
                  14.24844
                ],
                [
                  99.10211,
                  14.25499
                ],
                [
                  99.09898,
                  14.25682
                ],
                [
                  99.09899,
                  14.26366
                ],
                [
                  99.09767,
                  14.26708
                ],
                [
                  99.09451,
                  14.26891
                ],
                [
                  99.09371,
                  14.27186
                ],
                [
                  99.09201,
                  14.27342
                ],
                [
                  99.09139,
                  14.28171
                ],
                [
                  99.08275,
                  14.29086
                ],
                [
                  99.08275,
                  14.29445
                ],
                [
                  99.08088,
                  14.29848
                ],
                [
                  99.08119,
                  14.30573
                ],
                [
                  99.0788,
                  14.31179
                ],
                [
                  99.08022,
                  14.31365
                ],
                [
                  99.08026,
                  14.31636
                ],
                [
                  99.07484,
                  14.32791
                ],
                [
                  99.07016,
                  14.33268
                ],
                [
                  99.06932,
                  14.33692
                ],
                [
                  99.05804,
                  14.3512
                ],
                [
                  99.05807,
                  14.35362
                ],
                [
                  99.0507,
                  14.36616
                ],
                [
                  99.04794,
                  14.36811
                ],
                [
                  99.04712,
                  14.37077
                ],
                [
                  99.04433,
                  14.37317
                ],
                [
                  99.03931,
                  14.37386
                ],
                [
                  99.03609,
                  14.37579
                ],
                [
                  99.03507,
                  14.37857
                ],
                [
                  99.03093,
                  14.38255
                ],
                [
                  99.03138,
                  14.38689
                ],
                [
                  99.02976,
                  14.39076
                ],
                [
                  99.0272,
                  14.39438
                ],
                [
                  99.02473,
                  14.39508
                ],
                [
                  99.02671,
                  14.39907
                ],
                [
                  99.03232,
                  14.39885
                ],
                [
                  99.0356,
                  14.4018
                ],
                [
                  99.03764,
                  14.40025
                ],
                [
                  99.04182,
                  14.39978
                ],
                [
                  99.04443,
                  14.40188
                ],
                [
                  99.04674,
                  14.41351
                ],
                [
                  99.04499,
                  14.4197
                ],
                [
                  99.04864,
                  14.42427
                ],
                [
                  99.04673,
                  14.42864
                ],
                [
                  99.04767,
                  14.4325
                ],
                [
                  99.10493,
                  14.47968
                ],
                [
                  99.12672,
                  14.48617
                ],
                [
                  99.13991,
                  14.45872
                ],
                [
                  99.14006,
                  14.45612
                ],
                [
                  99.14401,
                  14.4517
                ],
                [
                  99.14427,
                  14.44681
                ],
                [
                  99.14567,
                  14.44427
                ],
                [
                  99.15049,
                  14.43912
                ],
                [
                  99.17017,
                  14.42444
                ],
                [
                  99.18026,
                  14.41991
                ],
                [
                  99.18528,
                  14.42126
                ],
                [
                  99.18785,
                  14.42022
                ],
                [
                  99.19275,
                  14.42036
                ],
                [
                  99.19811,
                  14.42259
                ],
                [
                  99.20407,
                  14.41773
                ],
                [
                  99.20968,
                  14.41632
                ],
                [
                  99.21508,
                  14.41799
                ],
                [
                  99.22041,
                  14.41744
                ],
                [
                  99.22942,
                  14.41934
                ],
                [
                  99.23587,
                  14.41444
                ],
                [
                  99.24612,
                  14.41115
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710404",
          "tambon": "ต.ท่ากระดาน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านแก่งแคบ",
          "latitude": 14.345543,
          "longitude": 99.18332,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24612,
                  14.41115
                ],
                [
                  99.25145,
                  14.40739
                ],
                [
                  99.25336,
                  14.40319
                ],
                [
                  99.26068,
                  14.40387
                ],
                [
                  99.26266,
                  14.40263
                ],
                [
                  99.26487,
                  14.40542
                ],
                [
                  99.26797,
                  14.40432
                ],
                [
                  99.26606,
                  14.40783
                ],
                [
                  99.2693,
                  14.40639
                ],
                [
                  99.27228,
                  14.40679
                ],
                [
                  99.27311,
                  14.40972
                ],
                [
                  99.27783,
                  14.41089
                ],
                [
                  99.27586,
                  14.41377
                ],
                [
                  99.27642,
                  14.41458
                ],
                [
                  99.28559,
                  14.41379
                ],
                [
                  99.2907,
                  14.41591
                ],
                [
                  99.2931,
                  14.41927
                ],
                [
                  99.30024,
                  14.41906
                ],
                [
                  99.30447,
                  14.42679
                ],
                [
                  99.30898,
                  14.42664
                ],
                [
                  99.31402,
                  14.42258
                ],
                [
                  99.31839,
                  14.41714
                ],
                [
                  99.32045,
                  14.41238
                ],
                [
                  99.32248,
                  14.41117
                ],
                [
                  99.32117,
                  14.40628
                ],
                [
                  99.32194,
                  14.40323
                ],
                [
                  99.32125,
                  14.3981
                ],
                [
                  99.32423,
                  14.39398
                ],
                [
                  99.32398,
                  14.39076
                ],
                [
                  99.32873,
                  14.3867
                ],
                [
                  99.334,
                  14.38812
                ],
                [
                  99.33734,
                  14.38563
                ],
                [
                  99.34025,
                  14.38129
                ],
                [
                  99.33973,
                  14.37135
                ],
                [
                  99.34474,
                  14.36597
                ],
                [
                  99.35354,
                  14.35979
                ],
                [
                  99.35621,
                  14.35493
                ],
                [
                  99.35583,
                  14.35064
                ],
                [
                  99.36022,
                  14.34565
                ],
                [
                  99.35565,
                  14.34018
                ],
                [
                  99.3518,
                  14.3395
                ],
                [
                  99.3531,
                  14.336
                ],
                [
                  99.35629,
                  14.33418
                ],
                [
                  99.35964,
                  14.32969
                ],
                [
                  99.35977,
                  14.32654
                ],
                [
                  99.36614,
                  14.31466
                ],
                [
                  99.36554,
                  14.3112
                ],
                [
                  99.36084,
                  14.30711
                ],
                [
                  99.36079,
                  14.30489
                ],
                [
                  99.35798,
                  14.3041
                ],
                [
                  99.35686,
                  14.29644
                ],
                [
                  99.35994,
                  14.29089
                ],
                [
                  99.3593,
                  14.28748
                ],
                [
                  99.35136,
                  14.28756
                ],
                [
                  99.347,
                  14.28897
                ],
                [
                  99.34485,
                  14.29146
                ],
                [
                  99.34181,
                  14.30037
                ],
                [
                  99.33171,
                  14.31045
                ],
                [
                  99.32575,
                  14.31961
                ],
                [
                  99.32397,
                  14.32461
                ],
                [
                  99.32112,
                  14.32725
                ],
                [
                  99.31755,
                  14.32811
                ],
                [
                  99.31236,
                  14.33156
                ],
                [
                  99.30745,
                  14.33132
                ],
                [
                  99.30039,
                  14.33462
                ],
                [
                  99.29514,
                  14.33885
                ],
                [
                  99.28414,
                  14.34361
                ],
                [
                  99.27447,
                  14.34367
                ],
                [
                  99.27268,
                  14.34246
                ],
                [
                  99.27232,
                  14.3408
                ],
                [
                  99.26831,
                  14.34016
                ],
                [
                  99.26492,
                  14.3371
                ],
                [
                  99.25958,
                  14.3368
                ],
                [
                  99.25666,
                  14.33761
                ],
                [
                  99.25321,
                  14.34168
                ],
                [
                  99.24691,
                  14.34228
                ],
                [
                  99.24462,
                  14.34546
                ],
                [
                  99.23596,
                  14.33822
                ],
                [
                  99.23399,
                  14.33374
                ],
                [
                  99.22621,
                  14.33208
                ],
                [
                  99.2219,
                  14.32965
                ],
                [
                  99.21699,
                  14.32983
                ],
                [
                  99.21838,
                  14.32671
                ],
                [
                  99.2118,
                  14.32681
                ],
                [
                  99.20869,
                  14.3204
                ],
                [
                  99.2067,
                  14.32072
                ],
                [
                  99.20262,
                  14.3172
                ],
                [
                  99.19761,
                  14.3224
                ],
                [
                  99.18861,
                  14.30931
                ],
                [
                  99.19201,
                  14.30335
                ],
                [
                  99.19592,
                  14.2925
                ],
                [
                  99.19782,
                  14.28099
                ],
                [
                  99.20337,
                  14.27255
                ],
                [
                  99.1987,
                  14.27278
                ],
                [
                  99.19101,
                  14.27522
                ],
                [
                  99.18893,
                  14.27396
                ],
                [
                  99.18564,
                  14.27396
                ],
                [
                  99.17731,
                  14.27758
                ],
                [
                  99.17388,
                  14.27736
                ],
                [
                  99.17041,
                  14.2798
                ],
                [
                  99.16407,
                  14.28025
                ],
                [
                  99.15059,
                  14.28707
                ],
                [
                  99.14564,
                  14.28753
                ],
                [
                  99.13884,
                  14.28356
                ],
                [
                  99.13421,
                  14.28334
                ],
                [
                  99.13041,
                  14.28091
                ],
                [
                  99.12856,
                  14.27856
                ],
                [
                  99.12884,
                  14.27644
                ],
                [
                  99.1336,
                  14.26858
                ],
                [
                  99.13999,
                  14.26392
                ],
                [
                  99.14095,
                  14.25849
                ],
                [
                  99.13898,
                  14.25236
                ],
                [
                  99.14058,
                  14.24434
                ],
                [
                  99.13193,
                  14.22721
                ],
                [
                  99.12619,
                  14.23294
                ],
                [
                  99.11978,
                  14.23472
                ],
                [
                  99.1148,
                  14.23928
                ],
                [
                  99.11006,
                  14.24599
                ],
                [
                  99.10542,
                  14.24844
                ],
                [
                  99.10211,
                  14.25499
                ],
                [
                  99.09898,
                  14.25682
                ],
                [
                  99.09899,
                  14.26366
                ],
                [
                  99.09767,
                  14.26708
                ],
                [
                  99.09451,
                  14.26891
                ],
                [
                  99.09371,
                  14.27186
                ],
                [
                  99.09201,
                  14.27342
                ],
                [
                  99.09139,
                  14.28171
                ],
                [
                  99.08275,
                  14.29086
                ],
                [
                  99.08275,
                  14.29445
                ],
                [
                  99.08088,
                  14.29848
                ],
                [
                  99.08119,
                  14.30573
                ],
                [
                  99.0788,
                  14.31179
                ],
                [
                  99.08022,
                  14.31365
                ],
                [
                  99.08026,
                  14.31636
                ],
                [
                  99.07484,
                  14.32791
                ],
                [
                  99.07016,
                  14.33268
                ],
                [
                  99.06932,
                  14.33692
                ],
                [
                  99.05804,
                  14.3512
                ],
                [
                  99.05807,
                  14.35362
                ],
                [
                  99.0507,
                  14.36616
                ],
                [
                  99.04794,
                  14.36811
                ],
                [
                  99.04712,
                  14.37077
                ],
                [
                  99.04433,
                  14.37317
                ],
                [
                  99.03931,
                  14.37386
                ],
                [
                  99.03609,
                  14.37579
                ],
                [
                  99.03507,
                  14.37857
                ],
                [
                  99.03093,
                  14.38255
                ],
                [
                  99.03138,
                  14.38689
                ],
                [
                  99.02976,
                  14.39076
                ],
                [
                  99.0272,
                  14.39438
                ],
                [
                  99.02473,
                  14.39508
                ],
                [
                  99.02671,
                  14.39907
                ],
                [
                  99.03232,
                  14.39885
                ],
                [
                  99.0356,
                  14.4018
                ],
                [
                  99.03764,
                  14.40025
                ],
                [
                  99.04182,
                  14.39978
                ],
                [
                  99.04443,
                  14.40188
                ],
                [
                  99.04674,
                  14.41351
                ],
                [
                  99.04499,
                  14.4197
                ],
                [
                  99.04864,
                  14.42427
                ],
                [
                  99.04673,
                  14.42864
                ],
                [
                  99.04767,
                  14.4325
                ],
                [
                  99.10493,
                  14.47968
                ],
                [
                  99.12672,
                  14.48617
                ],
                [
                  99.13991,
                  14.45872
                ],
                [
                  99.14006,
                  14.45612
                ],
                [
                  99.14401,
                  14.4517
                ],
                [
                  99.14427,
                  14.44681
                ],
                [
                  99.14567,
                  14.44427
                ],
                [
                  99.15049,
                  14.43912
                ],
                [
                  99.17017,
                  14.42444
                ],
                [
                  99.18026,
                  14.41991
                ],
                [
                  99.18528,
                  14.42126
                ],
                [
                  99.18785,
                  14.42022
                ],
                [
                  99.19275,
                  14.42036
                ],
                [
                  99.19811,
                  14.42259
                ],
                [
                  99.20407,
                  14.41773
                ],
                [
                  99.20968,
                  14.41632
                ],
                [
                  99.21508,
                  14.41799
                ],
                [
                  99.22041,
                  14.41744
                ],
                [
                  99.22942,
                  14.41934
                ],
                [
                  99.23587,
                  14.41444
                ],
                [
                  99.24612,
                  14.41115
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710404",
          "tambon": "ต.ท่ากระดาน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "เขื่อนศรีนครินทร์",
          "latitude": 14.40552,
          "longitude": 99.12831,
          "sum_rainfall_mm": 35.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24612,
                  14.41115
                ],
                [
                  99.25145,
                  14.40739
                ],
                [
                  99.25336,
                  14.40319
                ],
                [
                  99.26068,
                  14.40387
                ],
                [
                  99.26266,
                  14.40263
                ],
                [
                  99.26487,
                  14.40542
                ],
                [
                  99.26797,
                  14.40432
                ],
                [
                  99.26606,
                  14.40783
                ],
                [
                  99.2693,
                  14.40639
                ],
                [
                  99.27228,
                  14.40679
                ],
                [
                  99.27311,
                  14.40972
                ],
                [
                  99.27783,
                  14.41089
                ],
                [
                  99.27586,
                  14.41377
                ],
                [
                  99.27642,
                  14.41458
                ],
                [
                  99.28559,
                  14.41379
                ],
                [
                  99.2907,
                  14.41591
                ],
                [
                  99.2931,
                  14.41927
                ],
                [
                  99.30024,
                  14.41906
                ],
                [
                  99.30447,
                  14.42679
                ],
                [
                  99.30898,
                  14.42664
                ],
                [
                  99.31402,
                  14.42258
                ],
                [
                  99.31839,
                  14.41714
                ],
                [
                  99.32045,
                  14.41238
                ],
                [
                  99.32248,
                  14.41117
                ],
                [
                  99.32117,
                  14.40628
                ],
                [
                  99.32194,
                  14.40323
                ],
                [
                  99.32125,
                  14.3981
                ],
                [
                  99.32423,
                  14.39398
                ],
                [
                  99.32398,
                  14.39076
                ],
                [
                  99.32873,
                  14.3867
                ],
                [
                  99.334,
                  14.38812
                ],
                [
                  99.33734,
                  14.38563
                ],
                [
                  99.34025,
                  14.38129
                ],
                [
                  99.33973,
                  14.37135
                ],
                [
                  99.34474,
                  14.36597
                ],
                [
                  99.35354,
                  14.35979
                ],
                [
                  99.35621,
                  14.35493
                ],
                [
                  99.35583,
                  14.35064
                ],
                [
                  99.36022,
                  14.34565
                ],
                [
                  99.35565,
                  14.34018
                ],
                [
                  99.3518,
                  14.3395
                ],
                [
                  99.3531,
                  14.336
                ],
                [
                  99.35629,
                  14.33418
                ],
                [
                  99.35964,
                  14.32969
                ],
                [
                  99.35977,
                  14.32654
                ],
                [
                  99.36614,
                  14.31466
                ],
                [
                  99.36554,
                  14.3112
                ],
                [
                  99.36084,
                  14.30711
                ],
                [
                  99.36079,
                  14.30489
                ],
                [
                  99.35798,
                  14.3041
                ],
                [
                  99.35686,
                  14.29644
                ],
                [
                  99.35994,
                  14.29089
                ],
                [
                  99.3593,
                  14.28748
                ],
                [
                  99.35136,
                  14.28756
                ],
                [
                  99.347,
                  14.28897
                ],
                [
                  99.34485,
                  14.29146
                ],
                [
                  99.34181,
                  14.30037
                ],
                [
                  99.33171,
                  14.31045
                ],
                [
                  99.32575,
                  14.31961
                ],
                [
                  99.32397,
                  14.32461
                ],
                [
                  99.32112,
                  14.32725
                ],
                [
                  99.31755,
                  14.32811
                ],
                [
                  99.31236,
                  14.33156
                ],
                [
                  99.30745,
                  14.33132
                ],
                [
                  99.30039,
                  14.33462
                ],
                [
                  99.29514,
                  14.33885
                ],
                [
                  99.28414,
                  14.34361
                ],
                [
                  99.27447,
                  14.34367
                ],
                [
                  99.27268,
                  14.34246
                ],
                [
                  99.27232,
                  14.3408
                ],
                [
                  99.26831,
                  14.34016
                ],
                [
                  99.26492,
                  14.3371
                ],
                [
                  99.25958,
                  14.3368
                ],
                [
                  99.25666,
                  14.33761
                ],
                [
                  99.25321,
                  14.34168
                ],
                [
                  99.24691,
                  14.34228
                ],
                [
                  99.24462,
                  14.34546
                ],
                [
                  99.23596,
                  14.33822
                ],
                [
                  99.23399,
                  14.33374
                ],
                [
                  99.22621,
                  14.33208
                ],
                [
                  99.2219,
                  14.32965
                ],
                [
                  99.21699,
                  14.32983
                ],
                [
                  99.21838,
                  14.32671
                ],
                [
                  99.2118,
                  14.32681
                ],
                [
                  99.20869,
                  14.3204
                ],
                [
                  99.2067,
                  14.32072
                ],
                [
                  99.20262,
                  14.3172
                ],
                [
                  99.19761,
                  14.3224
                ],
                [
                  99.18861,
                  14.30931
                ],
                [
                  99.19201,
                  14.30335
                ],
                [
                  99.19592,
                  14.2925
                ],
                [
                  99.19782,
                  14.28099
                ],
                [
                  99.20337,
                  14.27255
                ],
                [
                  99.1987,
                  14.27278
                ],
                [
                  99.19101,
                  14.27522
                ],
                [
                  99.18893,
                  14.27396
                ],
                [
                  99.18564,
                  14.27396
                ],
                [
                  99.17731,
                  14.27758
                ],
                [
                  99.17388,
                  14.27736
                ],
                [
                  99.17041,
                  14.2798
                ],
                [
                  99.16407,
                  14.28025
                ],
                [
                  99.15059,
                  14.28707
                ],
                [
                  99.14564,
                  14.28753
                ],
                [
                  99.13884,
                  14.28356
                ],
                [
                  99.13421,
                  14.28334
                ],
                [
                  99.13041,
                  14.28091
                ],
                [
                  99.12856,
                  14.27856
                ],
                [
                  99.12884,
                  14.27644
                ],
                [
                  99.1336,
                  14.26858
                ],
                [
                  99.13999,
                  14.26392
                ],
                [
                  99.14095,
                  14.25849
                ],
                [
                  99.13898,
                  14.25236
                ],
                [
                  99.14058,
                  14.24434
                ],
                [
                  99.13193,
                  14.22721
                ],
                [
                  99.12619,
                  14.23294
                ],
                [
                  99.11978,
                  14.23472
                ],
                [
                  99.1148,
                  14.23928
                ],
                [
                  99.11006,
                  14.24599
                ],
                [
                  99.10542,
                  14.24844
                ],
                [
                  99.10211,
                  14.25499
                ],
                [
                  99.09898,
                  14.25682
                ],
                [
                  99.09899,
                  14.26366
                ],
                [
                  99.09767,
                  14.26708
                ],
                [
                  99.09451,
                  14.26891
                ],
                [
                  99.09371,
                  14.27186
                ],
                [
                  99.09201,
                  14.27342
                ],
                [
                  99.09139,
                  14.28171
                ],
                [
                  99.08275,
                  14.29086
                ],
                [
                  99.08275,
                  14.29445
                ],
                [
                  99.08088,
                  14.29848
                ],
                [
                  99.08119,
                  14.30573
                ],
                [
                  99.0788,
                  14.31179
                ],
                [
                  99.08022,
                  14.31365
                ],
                [
                  99.08026,
                  14.31636
                ],
                [
                  99.07484,
                  14.32791
                ],
                [
                  99.07016,
                  14.33268
                ],
                [
                  99.06932,
                  14.33692
                ],
                [
                  99.05804,
                  14.3512
                ],
                [
                  99.05807,
                  14.35362
                ],
                [
                  99.0507,
                  14.36616
                ],
                [
                  99.04794,
                  14.36811
                ],
                [
                  99.04712,
                  14.37077
                ],
                [
                  99.04433,
                  14.37317
                ],
                [
                  99.03931,
                  14.37386
                ],
                [
                  99.03609,
                  14.37579
                ],
                [
                  99.03507,
                  14.37857
                ],
                [
                  99.03093,
                  14.38255
                ],
                [
                  99.03138,
                  14.38689
                ],
                [
                  99.02976,
                  14.39076
                ],
                [
                  99.0272,
                  14.39438
                ],
                [
                  99.02473,
                  14.39508
                ],
                [
                  99.02671,
                  14.39907
                ],
                [
                  99.03232,
                  14.39885
                ],
                [
                  99.0356,
                  14.4018
                ],
                [
                  99.03764,
                  14.40025
                ],
                [
                  99.04182,
                  14.39978
                ],
                [
                  99.04443,
                  14.40188
                ],
                [
                  99.04674,
                  14.41351
                ],
                [
                  99.04499,
                  14.4197
                ],
                [
                  99.04864,
                  14.42427
                ],
                [
                  99.04673,
                  14.42864
                ],
                [
                  99.04767,
                  14.4325
                ],
                [
                  99.10493,
                  14.47968
                ],
                [
                  99.12672,
                  14.48617
                ],
                [
                  99.13991,
                  14.45872
                ],
                [
                  99.14006,
                  14.45612
                ],
                [
                  99.14401,
                  14.4517
                ],
                [
                  99.14427,
                  14.44681
                ],
                [
                  99.14567,
                  14.44427
                ],
                [
                  99.15049,
                  14.43912
                ],
                [
                  99.17017,
                  14.42444
                ],
                [
                  99.18026,
                  14.41991
                ],
                [
                  99.18528,
                  14.42126
                ],
                [
                  99.18785,
                  14.42022
                ],
                [
                  99.19275,
                  14.42036
                ],
                [
                  99.19811,
                  14.42259
                ],
                [
                  99.20407,
                  14.41773
                ],
                [
                  99.20968,
                  14.41632
                ],
                [
                  99.21508,
                  14.41799
                ],
                [
                  99.22041,
                  14.41744
                ],
                [
                  99.22942,
                  14.41934
                ],
                [
                  99.23587,
                  14.41444
                ],
                [
                  99.24612,
                  14.41115
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710404",
          "tambon": "ต.ท่ากระดาน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติเอราวัณ",
          "latitude": 14.37565,
          "longitude": 99.11301,
          "sum_rainfall_mm": 37.6,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24612,
                  14.41115
                ],
                [
                  99.25145,
                  14.40739
                ],
                [
                  99.25336,
                  14.40319
                ],
                [
                  99.26068,
                  14.40387
                ],
                [
                  99.26266,
                  14.40263
                ],
                [
                  99.26487,
                  14.40542
                ],
                [
                  99.26797,
                  14.40432
                ],
                [
                  99.26606,
                  14.40783
                ],
                [
                  99.2693,
                  14.40639
                ],
                [
                  99.27228,
                  14.40679
                ],
                [
                  99.27311,
                  14.40972
                ],
                [
                  99.27783,
                  14.41089
                ],
                [
                  99.27586,
                  14.41377
                ],
                [
                  99.27642,
                  14.41458
                ],
                [
                  99.28559,
                  14.41379
                ],
                [
                  99.2907,
                  14.41591
                ],
                [
                  99.2931,
                  14.41927
                ],
                [
                  99.30024,
                  14.41906
                ],
                [
                  99.30447,
                  14.42679
                ],
                [
                  99.30898,
                  14.42664
                ],
                [
                  99.31402,
                  14.42258
                ],
                [
                  99.31839,
                  14.41714
                ],
                [
                  99.32045,
                  14.41238
                ],
                [
                  99.32248,
                  14.41117
                ],
                [
                  99.32117,
                  14.40628
                ],
                [
                  99.32194,
                  14.40323
                ],
                [
                  99.32125,
                  14.3981
                ],
                [
                  99.32423,
                  14.39398
                ],
                [
                  99.32398,
                  14.39076
                ],
                [
                  99.32873,
                  14.3867
                ],
                [
                  99.334,
                  14.38812
                ],
                [
                  99.33734,
                  14.38563
                ],
                [
                  99.34025,
                  14.38129
                ],
                [
                  99.33973,
                  14.37135
                ],
                [
                  99.34474,
                  14.36597
                ],
                [
                  99.35354,
                  14.35979
                ],
                [
                  99.35621,
                  14.35493
                ],
                [
                  99.35583,
                  14.35064
                ],
                [
                  99.36022,
                  14.34565
                ],
                [
                  99.35565,
                  14.34018
                ],
                [
                  99.3518,
                  14.3395
                ],
                [
                  99.3531,
                  14.336
                ],
                [
                  99.35629,
                  14.33418
                ],
                [
                  99.35964,
                  14.32969
                ],
                [
                  99.35977,
                  14.32654
                ],
                [
                  99.36614,
                  14.31466
                ],
                [
                  99.36554,
                  14.3112
                ],
                [
                  99.36084,
                  14.30711
                ],
                [
                  99.36079,
                  14.30489
                ],
                [
                  99.35798,
                  14.3041
                ],
                [
                  99.35686,
                  14.29644
                ],
                [
                  99.35994,
                  14.29089
                ],
                [
                  99.3593,
                  14.28748
                ],
                [
                  99.35136,
                  14.28756
                ],
                [
                  99.347,
                  14.28897
                ],
                [
                  99.34485,
                  14.29146
                ],
                [
                  99.34181,
                  14.30037
                ],
                [
                  99.33171,
                  14.31045
                ],
                [
                  99.32575,
                  14.31961
                ],
                [
                  99.32397,
                  14.32461
                ],
                [
                  99.32112,
                  14.32725
                ],
                [
                  99.31755,
                  14.32811
                ],
                [
                  99.31236,
                  14.33156
                ],
                [
                  99.30745,
                  14.33132
                ],
                [
                  99.30039,
                  14.33462
                ],
                [
                  99.29514,
                  14.33885
                ],
                [
                  99.28414,
                  14.34361
                ],
                [
                  99.27447,
                  14.34367
                ],
                [
                  99.27268,
                  14.34246
                ],
                [
                  99.27232,
                  14.3408
                ],
                [
                  99.26831,
                  14.34016
                ],
                [
                  99.26492,
                  14.3371
                ],
                [
                  99.25958,
                  14.3368
                ],
                [
                  99.25666,
                  14.33761
                ],
                [
                  99.25321,
                  14.34168
                ],
                [
                  99.24691,
                  14.34228
                ],
                [
                  99.24462,
                  14.34546
                ],
                [
                  99.23596,
                  14.33822
                ],
                [
                  99.23399,
                  14.33374
                ],
                [
                  99.22621,
                  14.33208
                ],
                [
                  99.2219,
                  14.32965
                ],
                [
                  99.21699,
                  14.32983
                ],
                [
                  99.21838,
                  14.32671
                ],
                [
                  99.2118,
                  14.32681
                ],
                [
                  99.20869,
                  14.3204
                ],
                [
                  99.2067,
                  14.32072
                ],
                [
                  99.20262,
                  14.3172
                ],
                [
                  99.19761,
                  14.3224
                ],
                [
                  99.18861,
                  14.30931
                ],
                [
                  99.19201,
                  14.30335
                ],
                [
                  99.19592,
                  14.2925
                ],
                [
                  99.19782,
                  14.28099
                ],
                [
                  99.20337,
                  14.27255
                ],
                [
                  99.1987,
                  14.27278
                ],
                [
                  99.19101,
                  14.27522
                ],
                [
                  99.18893,
                  14.27396
                ],
                [
                  99.18564,
                  14.27396
                ],
                [
                  99.17731,
                  14.27758
                ],
                [
                  99.17388,
                  14.27736
                ],
                [
                  99.17041,
                  14.2798
                ],
                [
                  99.16407,
                  14.28025
                ],
                [
                  99.15059,
                  14.28707
                ],
                [
                  99.14564,
                  14.28753
                ],
                [
                  99.13884,
                  14.28356
                ],
                [
                  99.13421,
                  14.28334
                ],
                [
                  99.13041,
                  14.28091
                ],
                [
                  99.12856,
                  14.27856
                ],
                [
                  99.12884,
                  14.27644
                ],
                [
                  99.1336,
                  14.26858
                ],
                [
                  99.13999,
                  14.26392
                ],
                [
                  99.14095,
                  14.25849
                ],
                [
                  99.13898,
                  14.25236
                ],
                [
                  99.14058,
                  14.24434
                ],
                [
                  99.13193,
                  14.22721
                ],
                [
                  99.12619,
                  14.23294
                ],
                [
                  99.11978,
                  14.23472
                ],
                [
                  99.1148,
                  14.23928
                ],
                [
                  99.11006,
                  14.24599
                ],
                [
                  99.10542,
                  14.24844
                ],
                [
                  99.10211,
                  14.25499
                ],
                [
                  99.09898,
                  14.25682
                ],
                [
                  99.09899,
                  14.26366
                ],
                [
                  99.09767,
                  14.26708
                ],
                [
                  99.09451,
                  14.26891
                ],
                [
                  99.09371,
                  14.27186
                ],
                [
                  99.09201,
                  14.27342
                ],
                [
                  99.09139,
                  14.28171
                ],
                [
                  99.08275,
                  14.29086
                ],
                [
                  99.08275,
                  14.29445
                ],
                [
                  99.08088,
                  14.29848
                ],
                [
                  99.08119,
                  14.30573
                ],
                [
                  99.0788,
                  14.31179
                ],
                [
                  99.08022,
                  14.31365
                ],
                [
                  99.08026,
                  14.31636
                ],
                [
                  99.07484,
                  14.32791
                ],
                [
                  99.07016,
                  14.33268
                ],
                [
                  99.06932,
                  14.33692
                ],
                [
                  99.05804,
                  14.3512
                ],
                [
                  99.05807,
                  14.35362
                ],
                [
                  99.0507,
                  14.36616
                ],
                [
                  99.04794,
                  14.36811
                ],
                [
                  99.04712,
                  14.37077
                ],
                [
                  99.04433,
                  14.37317
                ],
                [
                  99.03931,
                  14.37386
                ],
                [
                  99.03609,
                  14.37579
                ],
                [
                  99.03507,
                  14.37857
                ],
                [
                  99.03093,
                  14.38255
                ],
                [
                  99.03138,
                  14.38689
                ],
                [
                  99.02976,
                  14.39076
                ],
                [
                  99.0272,
                  14.39438
                ],
                [
                  99.02473,
                  14.39508
                ],
                [
                  99.02671,
                  14.39907
                ],
                [
                  99.03232,
                  14.39885
                ],
                [
                  99.0356,
                  14.4018
                ],
                [
                  99.03764,
                  14.40025
                ],
                [
                  99.04182,
                  14.39978
                ],
                [
                  99.04443,
                  14.40188
                ],
                [
                  99.04674,
                  14.41351
                ],
                [
                  99.04499,
                  14.4197
                ],
                [
                  99.04864,
                  14.42427
                ],
                [
                  99.04673,
                  14.42864
                ],
                [
                  99.04767,
                  14.4325
                ],
                [
                  99.10493,
                  14.47968
                ],
                [
                  99.12672,
                  14.48617
                ],
                [
                  99.13991,
                  14.45872
                ],
                [
                  99.14006,
                  14.45612
                ],
                [
                  99.14401,
                  14.4517
                ],
                [
                  99.14427,
                  14.44681
                ],
                [
                  99.14567,
                  14.44427
                ],
                [
                  99.15049,
                  14.43912
                ],
                [
                  99.17017,
                  14.42444
                ],
                [
                  99.18026,
                  14.41991
                ],
                [
                  99.18528,
                  14.42126
                ],
                [
                  99.18785,
                  14.42022
                ],
                [
                  99.19275,
                  14.42036
                ],
                [
                  99.19811,
                  14.42259
                ],
                [
                  99.20407,
                  14.41773
                ],
                [
                  99.20968,
                  14.41632
                ],
                [
                  99.21508,
                  14.41799
                ],
                [
                  99.22041,
                  14.41744
                ],
                [
                  99.22942,
                  14.41934
                ],
                [
                  99.23587,
                  14.41444
                ],
                [
                  99.24612,
                  14.41115
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710401",
          "tambon": "ต.นาสวน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "วัดวังผาแดง",
          "latitude": 14.72684,
          "longitude": 99.06556,
          "sum_rainfall_mm": 23.0,
          "observed_at": "2026-10-15T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.04243,
                  15.04637
                ],
                [
                  99.04419,
                  15.04222
                ],
                [
                  99.04688,
                  15.0408
                ],
                [
                  99.04912,
                  15.03298
                ],
                [
                  99.05183,
                  15.03163
                ],
                [
                  99.0553,
                  15.02646
                ],
                [
                  99.0574,
                  15.01245
                ],
                [
                  99.0652,
                  15.00587
                ],
                [
                  99.06669,
                  14.99846
                ],
                [
                  99.06988,
                  14.99282
                ],
                [
                  99.07017,
                  14.98765
                ],
                [
                  99.07227,
                  14.98309
                ],
                [
                  99.07861,
                  14.98065
                ],
                [
                  99.08085,
                  14.96839
                ],
                [
                  99.08362,
                  14.96286
                ],
                [
                  99.07939,
                  14.9601
                ],
                [
                  99.07933,
                  14.95786
                ],
                [
                  99.08223,
                  14.95674
                ],
                [
                  99.08668,
                  14.95714
                ],
                [
                  99.09714,
                  14.94955
                ],
                [
                  99.1021,
                  14.94941
                ],
                [
                  99.10552,
                  14.94764
                ],
                [
                  99.11079,
                  14.94203
                ],
                [
                  99.11052,
                  14.93788
                ],
                [
                  99.12205,
                  14.92027
                ],
                [
                  99.10881,
                  14.90673
                ],
                [
                  99.098,
                  14.899
                ],
                [
                  99.09454,
                  14.89843
                ],
                [
                  99.08778,
                  14.90054
                ],
                [
                  99.087,
                  14.89891
                ],
                [
                  99.08817,
                  14.89492
                ],
                [
                  99.08606,
                  14.88958
                ],
                [
                  99.0867,
                  14.88552
                ],
                [
                  99.08482,
                  14.88218
                ],
                [
                  99.08138,
                  14.88275
                ],
                [
                  99.07831,
                  14.88732
                ],
                [
                  99.07586,
                  14.88785
                ],
                [
                  99.07685,
                  14.88256
                ],
                [
                  99.09011,
                  14.8595
                ],
                [
                  99.0903,
                  14.8546
                ],
                [
                  99.08773,
                  14.84701
                ],
                [
                  99.0884,
                  14.84512
                ],
                [
                  99.0913,
                  14.84228
                ],
                [
                  99.10101,
                  14.83969
                ],
                [
                  99.10341,
                  14.83222
                ],
                [
                  99.10881,
                  14.82877
                ],
                [
                  99.11119,
                  14.82241
                ],
                [
                  99.11556,
                  14.81764
                ],
                [
                  99.11674,
                  14.81066
                ],
                [
                  99.12407,
                  14.80561
                ],
                [
                  99.1251,
                  14.801
                ],
                [
                  99.12893,
                  14.79629
                ],
                [
                  99.14009,
                  14.79491
                ],
                [
                  99.14379,
                  14.7914
                ],
                [
                  99.1479,
                  14.79088
                ],
                [
                  99.14977,
                  14.78943
                ],
                [
                  99.15398,
                  14.77891
                ],
                [
                  99.15315,
                  14.77487
                ],
                [
                  99.15467,
                  14.7725
                ],
                [
                  99.15809,
                  14.77042
                ],
                [
                  99.16283,
                  14.75935
                ],
                [
                  99.1697,
                  14.75574
                ],
                [
                  99.17739,
                  14.75487
                ],
                [
                  99.18593,
                  14.74993
                ],
                [
                  99.18591,
                  14.74372
                ],
                [
                  99.18452,
                  14.73931
                ],
                [
                  99.1857,
                  14.73542
                ],
                [
                  99.18403,
                  14.73276
                ],
                [
                  99.18694,
                  14.72948
                ],
                [
                  99.18739,
                  14.72038
                ],
                [
                  99.19454,
                  14.7191
                ],
                [
                  99.19578,
                  14.71546
                ],
                [
                  99.19747,
                  14.71423
                ],
                [
                  99.22478,
                  14.70789
                ],
                [
                  99.2247,
                  14.70425
                ],
                [
                  99.23334,
                  14.69943
                ],
                [
                  99.23478,
                  14.69327
                ],
                [
                  99.23605,
                  14.69189
                ],
                [
                  99.24172,
                  14.68964
                ],
                [
                  99.247,
                  14.68541
                ],
                [
                  99.24945,
                  14.68147
                ],
                [
                  99.25182,
                  14.67214
                ],
                [
                  99.25688,
                  14.67072
                ],
                [
                  99.26174,
                  14.671
                ],
                [
                  99.26202,
                  14.66292
                ],
                [
                  99.25773,
                  14.66237
                ],
                [
                  99.25632,
                  14.66088
                ],
                [
                  99.25463,
                  14.65417
                ],
                [
                  99.25566,
                  14.65181
                ],
                [
                  99.25494,
                  14.64919
                ],
                [
                  99.25234,
                  14.64623
                ],
                [
                  99.24752,
                  14.64645
                ],
                [
                  99.24373,
                  14.63413
                ],
                [
                  99.24138,
                  14.63041
                ],
                [
                  99.23659,
                  14.6268
                ],
                [
                  99.23562,
                  14.6232
                ],
                [
                  99.23397,
                  14.62157
                ],
                [
                  99.23019,
                  14.62071
                ],
                [
                  99.21842,
                  14.61174
                ],
                [
                  99.20783,
                  14.61199
                ],
                [
                  99.20415,
                  14.60525
                ],
                [
                  99.19952,
                  14.6035
                ],
                [
                  99.19584,
                  14.59799
                ],
                [
                  99.14831,
                  14.60283
                ],
                [
                  99.12832,
                  14.60386
                ],
                [
                  99.12731,
                  14.60576
                ],
                [
                  99.10082,
                  14.61614
                ],
                [
                  99.09699,
                  14.61106
                ],
                [
                  99.09783,
                  14.6096
                ],
                [
                  99.0968,
                  14.60813
                ],
                [
                  99.09139,
                  14.60644
                ],
                [
                  99.08095,
                  14.59922
                ],
                [
                  99.04976,
                  14.61703
                ],
                [
                  99.0958,
                  14.63407
                ],
                [
                  99.11218,
                  14.63336
                ],
                [
                  99.11329,
                  14.62908
                ],
                [
                  99.12596,
                  14.62865
                ],
                [
                  99.14021,
                  14.63524
                ],
                [
                  99.14725,
                  14.63424
                ],
                [
                  99.15008,
                  14.63483
                ],
                [
                  99.1567,
                  14.64349
                ],
                [
                  99.15658,
                  14.64607
                ],
                [
                  99.15502,
                  14.64795
                ],
                [
                  99.15659,
                  14.65076
                ],
                [
                  99.15876,
                  14.65281
                ],
                [
                  99.16524,
                  14.65325
                ],
                [
                  99.1702,
                  14.65635
                ],
                [
                  99.17405,
                  14.66191
                ],
                [
                  99.17761,
                  14.66392
                ],
                [
                  99.17873,
                  14.67419
                ],
                [
                  99.1802,
                  14.67772
                ],
                [
                  99.18251,
                  14.68016
                ],
                [
                  99.19018,
                  14.68322
                ],
                [
                  99.19064,
                  14.6895
                ],
                [
                  99.18949,
                  14.69433
                ],
                [
                  99.18413,
                  14.69984
                ],
                [
                  99.17751,
                  14.7029
                ],
                [
                  99.15338,
                  14.70754
                ],
                [
                  99.14554,
                  14.69972
                ],
                [
                  99.1378,
                  14.68864
                ],
                [
                  99.12243,
                  14.68398
                ],
                [
                  99.09376,
                  14.6832
                ],
                [
                  99.08853,
                  14.68869
                ],
                [
                  99.04845,
                  14.72212
                ],
                [
                  99.01704,
                  14.75087
                ],
                [
                  99.01639,
                  14.75896
                ],
                [
                  99.01489,
                  14.76335
                ],
                [
                  99.00834,
                  14.77027
                ],
                [
                  98.99864,
                  14.77412
                ],
                [
                  98.99797,
                  14.77553
                ],
                [
                  98.99634,
                  14.77532
                ],
                [
                  98.98886,
                  14.76916
                ],
                [
                  98.98054,
                  14.76552
                ],
                [
                  98.9731,
                  14.76358
                ],
                [
                  98.96851,
                  14.76636
                ],
                [
                  98.96339,
                  14.76531
                ],
                [
                  98.95794,
                  14.7624
                ],
                [
                  98.95344,
                  14.76185
                ],
                [
                  98.95811,
                  14.76817
                ],
                [
                  98.95896,
                  14.77106
                ],
                [
                  98.96268,
                  14.77482
                ],
                [
                  98.96373,
                  14.77803
                ],
                [
                  98.96331,
                  14.7861
                ],
                [
                  98.96511,
                  14.78906
                ],
                [
                  98.96194,
                  14.79261
                ],
                [
                  98.96132,
                  14.79954
                ],
                [
                  98.95871,
                  14.80203
                ],
                [
                  98.96102,
                  14.80562
                ],
                [
                  98.96508,
                  14.80757
                ],
                [
                  98.96523,
                  14.80929
                ],
                [
                  98.96682,
                  14.81003
                ],
                [
                  98.96651,
                  14.81214
                ],
                [
                  98.9703,
                  14.81908
                ],
                [
                  98.9688,
                  14.82089
                ],
                [
                  98.97031,
                  14.82267
                ],
                [
                  98.97038,
                  14.82541
                ],
                [
                  98.96605,
                  14.82707
                ],
                [
                  98.9659,
                  14.828
                ],
                [
                  98.96893,
                  14.83336
                ],
                [
                  98.97093,
                  14.83305
                ],
                [
                  98.97236,
                  14.8346
                ],
                [
                  98.97059,
                  14.83686
                ],
                [
                  98.97229,
                  14.83894
                ],
                [
                  98.97191,
                  14.85062
                ],
                [
                  98.97287,
                  14.85243
                ],
                [
                  98.9752,
                  14.85347
                ],
                [
                  98.97602,
                  14.86025
                ],
                [
                  98.97566,
                  14.86233
                ],
                [
                  98.97208,
                  14.86198
                ],
                [
                  98.97062,
                  14.86394
                ],
                [
                  98.97165,
                  14.87018
                ],
                [
                  98.97349,
                  14.873
                ],
                [
                  98.97192,
                  14.87598
                ],
                [
                  98.97188,
                  14.88635
                ],
                [
                  98.97368,
                  14.88948
                ],
                [
                  98.97243,
                  14.89564
                ],
                [
                  98.97357,
                  14.90009
                ],
                [
                  98.9752,
                  14.90141
                ],
                [
                  98.97287,
                  14.90148
                ],
                [
                  98.9714,
                  14.90348
                ],
                [
                  98.97293,
                  14.91029
                ],
                [
                  98.97083,
                  14.91324
                ],
                [
                  98.97335,
                  14.91664
                ],
                [
                  98.97209,
                  14.92135
                ],
                [
                  98.97296,
                  14.92452
                ],
                [
                  98.96638,
                  14.93132
                ],
                [
                  98.96801,
                  14.93523
                ],
                [
                  98.96707,
                  14.93786
                ],
                [
                  98.96761,
                  14.94549
                ],
                [
                  98.96623,
                  14.94714
                ],
                [
                  98.96847,
                  14.95041
                ],
                [
                  98.96542,
                  14.95228
                ],
                [
                  98.96725,
                  14.95928
                ],
                [
                  98.96526,
                  14.96019
                ],
                [
                  98.96484,
                  14.96185
                ],
                [
                  98.96683,
                  14.96425
                ],
                [
                  98.96279,
                  14.96911
                ],
                [
                  98.96501,
                  14.97085
                ],
                [
                  98.96598,
                  14.97373
                ],
                [
                  98.97107,
                  14.97529
                ],
                [
                  98.96994,
                  14.98353
                ],
                [
                  98.96674,
                  14.98651
                ],
                [
                  98.96901,
                  14.99177
                ],
                [
                  98.97067,
                  14.99313
                ],
                [
                  98.96798,
                  14.99543
                ],
                [
                  98.96925,
                  14.99859
                ],
                [
                  98.96849,
                  15.00096
                ],
                [
                  98.9763,
                  15.01718
                ],
                [
                  98.97593,
                  15.02317
                ],
                [
                  98.98336,
                  15.02572
                ],
                [
                  98.98925,
                  15.03017
                ],
                [
                  98.99477,
                  15.03996
                ],
                [
                  99.00014,
                  15.05995
                ],
                [
                  99.00032,
                  15.07133
                ],
                [
                  99.00885,
                  15.07018
                ],
                [
                  99.01414,
                  15.06107
                ],
                [
                  99.01834,
                  15.05827
                ],
                [
                  99.02033,
                  15.05409
                ],
                [
                  99.02425,
                  15.05455
                ],
                [
                  99.0255,
                  15.0517
                ],
                [
                  99.02814,
                  15.04956
                ],
                [
                  99.03158,
                  15.04855
                ],
                [
                  99.03775,
                  15.04952
                ],
                [
                  99.04243,
                  15.04637
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710401",
          "tambon": "ต.นาสวน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์ป่าแม่ปลาสร้อย",
          "latitude": 14.6054,
          "longitude": 99.1704,
          "sum_rainfall_mm": 41.1,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.04243,
                  15.04637
                ],
                [
                  99.04419,
                  15.04222
                ],
                [
                  99.04688,
                  15.0408
                ],
                [
                  99.04912,
                  15.03298
                ],
                [
                  99.05183,
                  15.03163
                ],
                [
                  99.0553,
                  15.02646
                ],
                [
                  99.0574,
                  15.01245
                ],
                [
                  99.0652,
                  15.00587
                ],
                [
                  99.06669,
                  14.99846
                ],
                [
                  99.06988,
                  14.99282
                ],
                [
                  99.07017,
                  14.98765
                ],
                [
                  99.07227,
                  14.98309
                ],
                [
                  99.07861,
                  14.98065
                ],
                [
                  99.08085,
                  14.96839
                ],
                [
                  99.08362,
                  14.96286
                ],
                [
                  99.07939,
                  14.9601
                ],
                [
                  99.07933,
                  14.95786
                ],
                [
                  99.08223,
                  14.95674
                ],
                [
                  99.08668,
                  14.95714
                ],
                [
                  99.09714,
                  14.94955
                ],
                [
                  99.1021,
                  14.94941
                ],
                [
                  99.10552,
                  14.94764
                ],
                [
                  99.11079,
                  14.94203
                ],
                [
                  99.11052,
                  14.93788
                ],
                [
                  99.12205,
                  14.92027
                ],
                [
                  99.10881,
                  14.90673
                ],
                [
                  99.098,
                  14.899
                ],
                [
                  99.09454,
                  14.89843
                ],
                [
                  99.08778,
                  14.90054
                ],
                [
                  99.087,
                  14.89891
                ],
                [
                  99.08817,
                  14.89492
                ],
                [
                  99.08606,
                  14.88958
                ],
                [
                  99.0867,
                  14.88552
                ],
                [
                  99.08482,
                  14.88218
                ],
                [
                  99.08138,
                  14.88275
                ],
                [
                  99.07831,
                  14.88732
                ],
                [
                  99.07586,
                  14.88785
                ],
                [
                  99.07685,
                  14.88256
                ],
                [
                  99.09011,
                  14.8595
                ],
                [
                  99.0903,
                  14.8546
                ],
                [
                  99.08773,
                  14.84701
                ],
                [
                  99.0884,
                  14.84512
                ],
                [
                  99.0913,
                  14.84228
                ],
                [
                  99.10101,
                  14.83969
                ],
                [
                  99.10341,
                  14.83222
                ],
                [
                  99.10881,
                  14.82877
                ],
                [
                  99.11119,
                  14.82241
                ],
                [
                  99.11556,
                  14.81764
                ],
                [
                  99.11674,
                  14.81066
                ],
                [
                  99.12407,
                  14.80561
                ],
                [
                  99.1251,
                  14.801
                ],
                [
                  99.12893,
                  14.79629
                ],
                [
                  99.14009,
                  14.79491
                ],
                [
                  99.14379,
                  14.7914
                ],
                [
                  99.1479,
                  14.79088
                ],
                [
                  99.14977,
                  14.78943
                ],
                [
                  99.15398,
                  14.77891
                ],
                [
                  99.15315,
                  14.77487
                ],
                [
                  99.15467,
                  14.7725
                ],
                [
                  99.15809,
                  14.77042
                ],
                [
                  99.16283,
                  14.75935
                ],
                [
                  99.1697,
                  14.75574
                ],
                [
                  99.17739,
                  14.75487
                ],
                [
                  99.18593,
                  14.74993
                ],
                [
                  99.18591,
                  14.74372
                ],
                [
                  99.18452,
                  14.73931
                ],
                [
                  99.1857,
                  14.73542
                ],
                [
                  99.18403,
                  14.73276
                ],
                [
                  99.18694,
                  14.72948
                ],
                [
                  99.18739,
                  14.72038
                ],
                [
                  99.19454,
                  14.7191
                ],
                [
                  99.19578,
                  14.71546
                ],
                [
                  99.19747,
                  14.71423
                ],
                [
                  99.22478,
                  14.70789
                ],
                [
                  99.2247,
                  14.70425
                ],
                [
                  99.23334,
                  14.69943
                ],
                [
                  99.23478,
                  14.69327
                ],
                [
                  99.23605,
                  14.69189
                ],
                [
                  99.24172,
                  14.68964
                ],
                [
                  99.247,
                  14.68541
                ],
                [
                  99.24945,
                  14.68147
                ],
                [
                  99.25182,
                  14.67214
                ],
                [
                  99.25688,
                  14.67072
                ],
                [
                  99.26174,
                  14.671
                ],
                [
                  99.26202,
                  14.66292
                ],
                [
                  99.25773,
                  14.66237
                ],
                [
                  99.25632,
                  14.66088
                ],
                [
                  99.25463,
                  14.65417
                ],
                [
                  99.25566,
                  14.65181
                ],
                [
                  99.25494,
                  14.64919
                ],
                [
                  99.25234,
                  14.64623
                ],
                [
                  99.24752,
                  14.64645
                ],
                [
                  99.24373,
                  14.63413
                ],
                [
                  99.24138,
                  14.63041
                ],
                [
                  99.23659,
                  14.6268
                ],
                [
                  99.23562,
                  14.6232
                ],
                [
                  99.23397,
                  14.62157
                ],
                [
                  99.23019,
                  14.62071
                ],
                [
                  99.21842,
                  14.61174
                ],
                [
                  99.20783,
                  14.61199
                ],
                [
                  99.20415,
                  14.60525
                ],
                [
                  99.19952,
                  14.6035
                ],
                [
                  99.19584,
                  14.59799
                ],
                [
                  99.14831,
                  14.60283
                ],
                [
                  99.12832,
                  14.60386
                ],
                [
                  99.12731,
                  14.60576
                ],
                [
                  99.10082,
                  14.61614
                ],
                [
                  99.09699,
                  14.61106
                ],
                [
                  99.09783,
                  14.6096
                ],
                [
                  99.0968,
                  14.60813
                ],
                [
                  99.09139,
                  14.60644
                ],
                [
                  99.08095,
                  14.59922
                ],
                [
                  99.04976,
                  14.61703
                ],
                [
                  99.0958,
                  14.63407
                ],
                [
                  99.11218,
                  14.63336
                ],
                [
                  99.11329,
                  14.62908
                ],
                [
                  99.12596,
                  14.62865
                ],
                [
                  99.14021,
                  14.63524
                ],
                [
                  99.14725,
                  14.63424
                ],
                [
                  99.15008,
                  14.63483
                ],
                [
                  99.1567,
                  14.64349
                ],
                [
                  99.15658,
                  14.64607
                ],
                [
                  99.15502,
                  14.64795
                ],
                [
                  99.15659,
                  14.65076
                ],
                [
                  99.15876,
                  14.65281
                ],
                [
                  99.16524,
                  14.65325
                ],
                [
                  99.1702,
                  14.65635
                ],
                [
                  99.17405,
                  14.66191
                ],
                [
                  99.17761,
                  14.66392
                ],
                [
                  99.17873,
                  14.67419
                ],
                [
                  99.1802,
                  14.67772
                ],
                [
                  99.18251,
                  14.68016
                ],
                [
                  99.19018,
                  14.68322
                ],
                [
                  99.19064,
                  14.6895
                ],
                [
                  99.18949,
                  14.69433
                ],
                [
                  99.18413,
                  14.69984
                ],
                [
                  99.17751,
                  14.7029
                ],
                [
                  99.15338,
                  14.70754
                ],
                [
                  99.14554,
                  14.69972
                ],
                [
                  99.1378,
                  14.68864
                ],
                [
                  99.12243,
                  14.68398
                ],
                [
                  99.09376,
                  14.6832
                ],
                [
                  99.08853,
                  14.68869
                ],
                [
                  99.04845,
                  14.72212
                ],
                [
                  99.01704,
                  14.75087
                ],
                [
                  99.01639,
                  14.75896
                ],
                [
                  99.01489,
                  14.76335
                ],
                [
                  99.00834,
                  14.77027
                ],
                [
                  98.99864,
                  14.77412
                ],
                [
                  98.99797,
                  14.77553
                ],
                [
                  98.99634,
                  14.77532
                ],
                [
                  98.98886,
                  14.76916
                ],
                [
                  98.98054,
                  14.76552
                ],
                [
                  98.9731,
                  14.76358
                ],
                [
                  98.96851,
                  14.76636
                ],
                [
                  98.96339,
                  14.76531
                ],
                [
                  98.95794,
                  14.7624
                ],
                [
                  98.95344,
                  14.76185
                ],
                [
                  98.95811,
                  14.76817
                ],
                [
                  98.95896,
                  14.77106
                ],
                [
                  98.96268,
                  14.77482
                ],
                [
                  98.96373,
                  14.77803
                ],
                [
                  98.96331,
                  14.7861
                ],
                [
                  98.96511,
                  14.78906
                ],
                [
                  98.96194,
                  14.79261
                ],
                [
                  98.96132,
                  14.79954
                ],
                [
                  98.95871,
                  14.80203
                ],
                [
                  98.96102,
                  14.80562
                ],
                [
                  98.96508,
                  14.80757
                ],
                [
                  98.96523,
                  14.80929
                ],
                [
                  98.96682,
                  14.81003
                ],
                [
                  98.96651,
                  14.81214
                ],
                [
                  98.9703,
                  14.81908
                ],
                [
                  98.9688,
                  14.82089
                ],
                [
                  98.97031,
                  14.82267
                ],
                [
                  98.97038,
                  14.82541
                ],
                [
                  98.96605,
                  14.82707
                ],
                [
                  98.9659,
                  14.828
                ],
                [
                  98.96893,
                  14.83336
                ],
                [
                  98.97093,
                  14.83305
                ],
                [
                  98.97236,
                  14.8346
                ],
                [
                  98.97059,
                  14.83686
                ],
                [
                  98.97229,
                  14.83894
                ],
                [
                  98.97191,
                  14.85062
                ],
                [
                  98.97287,
                  14.85243
                ],
                [
                  98.9752,
                  14.85347
                ],
                [
                  98.97602,
                  14.86025
                ],
                [
                  98.97566,
                  14.86233
                ],
                [
                  98.97208,
                  14.86198
                ],
                [
                  98.97062,
                  14.86394
                ],
                [
                  98.97165,
                  14.87018
                ],
                [
                  98.97349,
                  14.873
                ],
                [
                  98.97192,
                  14.87598
                ],
                [
                  98.97188,
                  14.88635
                ],
                [
                  98.97368,
                  14.88948
                ],
                [
                  98.97243,
                  14.89564
                ],
                [
                  98.97357,
                  14.90009
                ],
                [
                  98.9752,
                  14.90141
                ],
                [
                  98.97287,
                  14.90148
                ],
                [
                  98.9714,
                  14.90348
                ],
                [
                  98.97293,
                  14.91029
                ],
                [
                  98.97083,
                  14.91324
                ],
                [
                  98.97335,
                  14.91664
                ],
                [
                  98.97209,
                  14.92135
                ],
                [
                  98.97296,
                  14.92452
                ],
                [
                  98.96638,
                  14.93132
                ],
                [
                  98.96801,
                  14.93523
                ],
                [
                  98.96707,
                  14.93786
                ],
                [
                  98.96761,
                  14.94549
                ],
                [
                  98.96623,
                  14.94714
                ],
                [
                  98.96847,
                  14.95041
                ],
                [
                  98.96542,
                  14.95228
                ],
                [
                  98.96725,
                  14.95928
                ],
                [
                  98.96526,
                  14.96019
                ],
                [
                  98.96484,
                  14.96185
                ],
                [
                  98.96683,
                  14.96425
                ],
                [
                  98.96279,
                  14.96911
                ],
                [
                  98.96501,
                  14.97085
                ],
                [
                  98.96598,
                  14.97373
                ],
                [
                  98.97107,
                  14.97529
                ],
                [
                  98.96994,
                  14.98353
                ],
                [
                  98.96674,
                  14.98651
                ],
                [
                  98.96901,
                  14.99177
                ],
                [
                  98.97067,
                  14.99313
                ],
                [
                  98.96798,
                  14.99543
                ],
                [
                  98.96925,
                  14.99859
                ],
                [
                  98.96849,
                  15.00096
                ],
                [
                  98.9763,
                  15.01718
                ],
                [
                  98.97593,
                  15.02317
                ],
                [
                  98.98336,
                  15.02572
                ],
                [
                  98.98925,
                  15.03017
                ],
                [
                  98.99477,
                  15.03996
                ],
                [
                  99.00014,
                  15.05995
                ],
                [
                  99.00032,
                  15.07133
                ],
                [
                  99.00885,
                  15.07018
                ],
                [
                  99.01414,
                  15.06107
                ],
                [
                  99.01834,
                  15.05827
                ],
                [
                  99.02033,
                  15.05409
                ],
                [
                  99.02425,
                  15.05455
                ],
                [
                  99.0255,
                  15.0517
                ],
                [
                  99.02814,
                  15.04956
                ],
                [
                  99.03158,
                  15.04855
                ],
                [
                  99.03775,
                  15.04952
                ],
                [
                  99.04243,
                  15.04637
                ]
              ]
            ]
          }
        },
        {
          "geocode": "710401",
          "tambon": "ต.นาสวน",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.นาสวน",
          "latitude": 14.61133,
          "longitude": 99.12579,
          "sum_rainfall_mm": 41.4,
          "observed_at": "2026-10-15T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.04243,
                  15.04637
                ],
                [
                  99.04419,
                  15.04222
                ],
                [
                  99.04688,
                  15.0408
                ],
                [
                  99.04912,
                  15.03298
                ],
                [
                  99.05183,
                  15.03163
                ],
                [
                  99.0553,
                  15.02646
                ],
                [
                  99.0574,
                  15.01245
                ],
                [
                  99.0652,
                  15.00587
                ],
                [
                  99.06669,
                  14.99846
                ],
                [
                  99.06988,
                  14.99282
                ],
                [
                  99.07017,
                  14.98765
                ],
                [
                  99.07227,
                  14.98309
                ],
                [
                  99.07861,
                  14.98065
                ],
                [
                  99.08085,
                  14.96839
                ],
                [
                  99.08362,
                  14.96286
                ],
                [
                  99.07939,
                  14.9601
                ],
                [
                  99.07933,
                  14.95786
                ],
                [
                  99.08223,
                  14.95674
                ],
                [
                  99.08668,
                  14.95714
                ],
                [
                  99.09714,
                  14.94955
                ],
                [
                  99.1021,
                  14.94941
                ],
                [
                  99.10552,
                  14.94764
                ],
                [
                  99.11079,
                  14.94203
                ],
                [
                  99.11052,
                  14.93788
                ],
                [
                  99.12205,
                  14.92027
                ],
                [
                  99.10881,
                  14.90673
                ],
                [
                  99.098,
                  14.899
                ],
                [
                  99.09454,
                  14.89843
                ],
                [
                  99.08778,
                  14.90054
                ],
                [
                  99.087,
                  14.89891
                ],
                [
                  99.08817,
                  14.89492
                ],
                [
                  99.08606,
                  14.88958
                ],
                [
                  99.0867,
                  14.88552
                ],
                [
                  99.08482,
                  14.88218
                ],
                [
                  99.08138,
                  14.88275
                ],
                [
                  99.07831,
                  14.88732
                ],
                [
                  99.07586,
                  14.88785
                ],
                [
                  99.07685,
                  14.88256
                ],
                [
                  99.09011,
                  14.8595
                ],
                [
                  99.0903,
                  14.8546
                ],
                [
                  99.08773,
                  14.84701
                ],
                [
                  99.0884,
                  14.84512
                ],
                [
                  99.0913,
                  14.84228
                ],
                [
                  99.10101,
                  14.83969
                ],
                [
                  99.10341,
                  14.83222
                ],
                [
                  99.10881,
                  14.82877
                ],
                [
                  99.11119,
                  14.82241
                ],
                [
                  99.11556,
                  14.81764
                ],
                [
                  99.11674,
                  14.81066
                ],
                [
                  99.12407,
                  14.80561
                ],
                [
                  99.1251,
                  14.801
                ],
                [
                  99.12893,
                  14.79629
                ],
                [
                  99.14009,
                  14.79491
                ],
                [
                  99.14379,
                  14.7914
                ],
                [
                  99.1479,
                  14.79088
                ],
                [
                  99.14977,
                  14.78943
                ],
                [
                  99.15398,
                  14.77891
                ],
                [
                  99.15315,
                  14.77487
                ],
                [
                  99.15467,
                  14.7725
                ],
                [
                  99.15809,
                  14.77042
                ],
                [
                  99.16283,
                  14.75935
                ],
                [
                  99.1697,
                  14.75574
                ],
                [
                  99.17739,
                  14.75487
                ],
                [
                  99.18593,
                  14.74993
                ],
                [
                  99.18591,
                  14.74372
                ],
                [
                  99.18452,
                  14.73931
                ],
                [
                  99.1857,
                  14.73542
                ],
                [
                  99.18403,
                  14.73276
                ],
                [
                  99.18694,
                  14.72948
                ],
                [
                  99.18739,
                  14.72038
                ],
                [
                  99.19454,
                  14.7191
                ],
                [
                  99.19578,
                  14.71546
                ],
                [
                  99.19747,
                  14.71423
                ],
                [
                  99.22478,
                  14.70789
                ],
                [
                  99.2247,
                  14.70425
                ],
                [
                  99.23334,
                  14.69943
                ],
                [
                  99.23478,
                  14.69327
                ],
                [
                  99.23605,
                  14.69189
                ],
                [
                  99.24172,
                  14.68964
                ],
                [
                  99.247,
                  14.68541
                ],
                [
                  99.24945,
                  14.68147
                ],
                [
                  99.25182,
                  14.67214
                ],
                [
                  99.25688,
                  14.67072
                ],
                [
                  99.26174,
                  14.671
                ],
                [
                  99.26202,
                  14.66292
                ],
                [
                  99.25773,
                  14.66237
                ],
                [
                  99.25632,
                  14.66088
                ],
                [
                  99.25463,
                  14.65417
                ],
                [
                  99.25566,
                  14.65181
                ],
                [
                  99.25494,
                  14.64919
                ],
                [
                  99.25234,
                  14.64623
                ],
                [
                  99.24752,
                  14.64645
                ],
                [
                  99.24373,
                  14.63413
                ],
                [
                  99.24138,
                  14.63041
                ],
                [
                  99.23659,
                  14.6268
                ],
                [
                  99.23562,
                  14.6232
                ],
                [
                  99.23397,
                  14.62157
                ],
                [
                  99.23019,
                  14.62071
                ],
                [
                  99.21842,
                  14.61174
                ],
                [
                  99.20783,
                  14.61199
                ],
                [
                  99.20415,
                  14.60525
                ],
                [
                  99.19952,
                  14.6035
                ],
                [
                  99.19584,
                  14.59799
                ],
                [
                  99.14831,
                  14.60283
                ],
                [
                  99.12832,
                  14.60386
                ],
                [
                  99.12731,
                  14.60576
                ],
                [
                  99.10082,
                  14.61614
                ],
                [
                  99.09699,
                  14.61106
                ],
                [
                  99.09783,
                  14.6096
                ],
                [
                  99.0968,
                  14.60813
                ],
                [
                  99.09139,
                  14.60644
                ],
                [
                  99.08095,
                  14.59922
                ],
                [
                  99.04976,
                  14.61703
                ],
                [
                  99.0958,
                  14.63407
                ],
                [
                  99.11218,
                  14.63336
                ],
                [
                  99.11329,
                  14.62908
                ],
                [
                  99.12596,
                  14.62865
                ],
                [
                  99.14021,
                  14.63524
                ],
                [
                  99.14725,
                  14.63424
                ],
                [
                  99.15008,
                  14.63483
                ],
                [
                  99.1567,
                  14.64349
                ],
                [
                  99.15658,
                  14.64607
                ],
                [
                  99.15502,
                  14.64795
                ],
                [
                  99.15659,
                  14.65076
                ],
                [
                  99.15876,
                  14.65281
                ],
                [
                  99.16524,
                  14.65325
                ],
                [
                  99.1702,
                  14.65635
                ],
                [
                  99.17405,
                  14.66191
                ],
                [
                  99.17761,
                  14.66392
                ],
                [
                  99.17873,
                  14.67419
                ],
                [
                  99.1802,
                  14.67772
                ],
                [
                  99.18251,
                  14.68016
                ],
                [
                  99.19018,
                  14.68322
                ],
                [
                  99.19064,
                  14.6895
                ],
                [
                  99.18949,
                  14.69433
                ],
                [
                  99.18413,
                  14.69984
                ],
                [
                  99.17751,
                  14.7029
                ],
                [
                  99.15338,
                  14.70754
                ],
                [
                  99.14554,
                  14.69972
                ],
                [
                  99.1378,
                  14.68864
                ],
                [
                  99.12243,
                  14.68398
                ],
                [
                  99.09376,
                  14.6832
                ],
                [
                  99.08853,
                  14.68869
                ],
                [
                  99.04845,
                  14.72212
                ],
                [
                  99.01704,
                  14.75087
                ],
                [
                  99.01639,
                  14.75896
                ],
                [
                  99.01489,
                  14.76335
                ],
                [
                  99.00834,
                  14.77027
                ],
                [
                  98.99864,
                  14.77412
                ],
                [
                  98.99797,
                  14.77553
                ],
                [
                  98.99634,
                  14.77532
                ],
                [
                  98.98886,
                  14.76916
                ],
                [
                  98.98054,
                  14.76552
                ],
                [
                  98.9731,
                  14.76358
                ],
                [
                  98.96851,
                  14.76636
                ],
                [
                  98.96339,
                  14.76531
                ],
                [
                  98.95794,
                  14.7624
                ],
                [
                  98.95344,
                  14.76185
                ],
                [
                  98.95811,
                  14.76817
                ],
                [
                  98.95896,
                  14.77106
                ],
                [
                  98.96268,
                  14.77482
                ],
                [
                  98.96373,
                  14.77803
                ],
                [
                  98.96331,
                  14.7861
                ],
                [
                  98.96511,
                  14.78906
                ],
                [
                  98.96194,
                  14.79261
                ],
                [
                  98.96132,
                  14.79954
                ],
                [
                  98.95871,
                  14.80203
                ],
                [
                  98.96102,
                  14.80562
                ],
                [
                  98.96508,
                  14.80757
                ],
                [
                  98.96523,
                  14.80929
                ],
                [
                  98.96682,
                  14.81003
                ],
                [
                  98.96651,
                  14.81214
                ],
                [
                  98.9703,
                  14.81908
                ],
                [
                  98.9688,
                  14.82089
                ],
                [
                  98.97031,
                  14.82267
                ],
                [
                  98.97038,
                  14.82541
                ],
                [
                  98.96605,
                  14.82707
                ],
                [
                  98.9659,
                  14.828
                ],
                [
                  98.96893,
                  14.83336
                ],
                [
                  98.97093,
                  14.83305
                ],
                [
                  98.97236,
                  14.8346
                ],
                [
                  98.97059,
                  14.83686
                ],
                [
                  98.97229,
                  14.83894
                ],
                [
                  98.97191,
                  14.85062
                ],
                [
                  98.97287,
                  14.85243
                ],
                [
                  98.9752,
                  14.85347
                ],
                [
                  98.97602,
                  14.86025
                ],
                [
                  98.97566,
                  14.86233
                ],
                [
                  98.97208,
                  14.86198
                ],
                [
                  98.97062,
                  14.86394
                ],
                [
                  98.97165,
                  14.87018
                ],
                [
                  98.97349,
                  14.873
                ],
                [
                  98.97192,
                  14.87598
                ],
                [
                  98.97188,
                  14.88635
                ],
                [
                  98.97368,
                  14.88948
                ],
                [
                  98.97243,
                  14.89564
                ],
                [
                  98.97357,
                  14.90009
                ],
                [
                  98.9752,
                  14.90141
                ],
                [
                  98.97287,
                  14.90148
                ],
                [
                  98.9714,
                  14.90348
                ],
                [
                  98.97293,
                  14.91029
                ],
                [
                  98.97083,
                  14.91324
                ],
                [
                  98.97335,
                  14.91664
                ],
                [
                  98.97209,
                  14.92135
                ],
                [
                  98.97296,
                  14.92452
                ],
                [
                  98.96638,
                  14.93132
                ],
                [
                  98.96801,
                  14.93523
                ],
                [
                  98.96707,
                  14.93786
                ],
                [
                  98.96761,
                  14.94549
                ],
                [
                  98.96623,
                  14.94714
                ],
                [
                  98.96847,
                  14.95041
                ],
                [
                  98.96542,
                  14.95228
                ],
                [
                  98.96725,
                  14.95928
                ],
                [
                  98.96526,
                  14.96019
                ],
                [
                  98.96484,
                  14.96185
                ],
                [
                  98.96683,
                  14.96425
                ],
                [
                  98.96279,
                  14.96911
                ],
                [
                  98.96501,
                  14.97085
                ],
                [
                  98.96598,
                  14.97373
                ],
                [
                  98.97107,
                  14.97529
                ],
                [
                  98.96994,
                  14.98353
                ],
                [
                  98.96674,
                  14.98651
                ],
                [
                  98.96901,
                  14.99177
                ],
                [
                  98.97067,
                  14.99313
                ],
                [
                  98.96798,
                  14.99543
                ],
                [
                  98.96925,
                  14.99859
                ],
                [
                  98.96849,
                  15.00096
                ],
                [
                  98.9763,
                  15.01718
                ],
                [
                  98.97593,
                  15.02317
                ],
                [
                  98.98336,
                  15.02572
                ],
                [
                  98.98925,
                  15.03017
                ],
                [
                  98.99477,
                  15.03996
                ],
                [
                  99.00014,
                  15.05995
                ],
                [
                  99.00032,
                  15.07133
                ],
                [
                  99.00885,
                  15.07018
                ],
                [
                  99.01414,
                  15.06107
                ],
                [
                  99.01834,
                  15.05827
                ],
                [
                  99.02033,
                  15.05409
                ],
                [
                  99.02425,
                  15.05455
                ],
                [
                  99.0255,
                  15.0517
                ],
                [
                  99.02814,
                  15.04956
                ],
                [
                  99.03158,
                  15.04855
                ],
                [
                  99.03775,
                  15.04952
                ],
                [
                  99.04243,
                  15.04637
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_14_10_2026.png?1792037237",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
