window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-24T06:44:04+07:00",
  "methodology": {
    "watch_radius_km": 30.0,
    "display_radius_km": 50.0,
    "rain_threshold_mm": 35,
    "note": "นับนิคมฯ เมื่อพบฝนมากกว่า 35 มม. หรือระดับน้ำเฝ้าระวังขึ้นไปภายใน 30 กม."
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
      "lat": 14.3863882,
      "lon": 100.9035767,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.7582559,
      "lon": 100.7893183,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881,
      "lon": 100.704757,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102,
      "lon": 100.707712,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.4893393,
      "lon": 100.5957211,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 6,
      "name": "นิคมอุตสาหกรรมบางปะอิน",
      "lat": 14.2077497,
      "lon": 100.5896748,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309,
      "lon": 100.610012,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.5440008,
      "lon": 100.232856,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.54653659,
      "lon": 100.3436175,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 10,
      "name": "นิคมอุตสาหกรรมราชบุรี",
      "lat": 13.63729443,
      "lon": 99.85002164,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.54202903,
      "lon": 100.1988542,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755,
      "lon": 99.044877,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.5753627,
      "lon": 100.1489452,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.0082598,
      "lon": 100.3598057,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 15,
      "name": "นิคมอุตสาหกรรมสงขลา",
      "lat": 6.54184983,
      "lon": 100.4136034,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 16,
      "name": "นิคมอุตสาหกรรมเวลโกรว์",
      "lat": 13.570618,
      "lon": 100.92248,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694,
      "lon": 101.329567,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.6599038,
      "lon": 100.9114833,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 19,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "lat": 13.56379732,
      "lon": 100.9949185,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 23,
      "name": "นิคมอุตสาหกรรมบางปู",
      "lat": 13.551394,
      "lon": 100.668278,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.565582,
      "lon": 100.794583,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 25,
      "name": "นิคมอุตสาหกรรมบางปู (เหนือ)",
      "lat": 13.551394,
      "lon": 100.668278,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.56903519,
      "lon": 100.6528202,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.0044858,
      "lon": 101.1626075,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 28,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 1",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.4214885,
      "lon": 101.0041244,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 30,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "lat": 13.024547,
      "lon": 101.072437,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954,
      "lon": 101.033398,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.12134595,
      "lon": 100.9904306,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.11034826,
      "lon": 101.0669158,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 34,
      "name": "นิคมอุตสาหกรรมแหลมฉบัง",
      "lat": 13.076561,
      "lon": 100.909175,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 35,
      "name": "นิคมอุตสาหกรรมท่าเรืออุตสาหกรรมมาบตาพุด",
      "lat": 12.665224,
      "lon": 101.133049,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 36,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ตะวันออก (มาบตาพุด)",
      "lat": 12.7030632,
      "lon": 101.1263119,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 37,
      "name": "นิคมอุตสาหกรรมผาแดง",
      "lat": 12.690742,
      "lon": 101.132469,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.716494,
      "lon": 101.105913,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 40,
      "name": "นิคมอุตสาหกรรมมาบตาพุด",
      "lat": 12.678688,
      "lon": 101.131806,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.75079527,
      "lon": 101.1226103,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่"
    },
    {
      "id": 43,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "lat": 13.7973442,
      "lon": 100.5592795,
      "operations": "สำนักงานใหญ่"
    },
    {
      "id": 44,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 2",
      "lat": 13.56379732,
      "lon": 100.9949185,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 47,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ชลบุรี 2",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 49,
      "name": "นิคมอุตสาหกรรมซีพีจีซี",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 50,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อินดัสเตรียล เอสเตท ระยอง",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 51,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 6)",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 52,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 4",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 53,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ ระยอง 36",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 55,
      "name": "นิคมอุตสาหกรรมโรจนะชลบุรี 2 (เขาคันทรง)",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 56,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 2",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 58,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 5)",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 59,
      "name": "นิคมอุตสาหกรรมยามาโตะ อินดัสทรีส์",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 60,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 3",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 61,
      "name": "นิคมอุตสาหกรรมโรจนะหนองใหญ่ จังหวัดชลบุรี",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 62,
      "name": "นิคมอุตสาหกรรมบ้านบึง",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 63,
      "name": "นิคมอุตสาหกรรมเอเซีย คลีน ชลบุรี",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646,
      "lon": 101.008107,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 65,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 4)",
      "lat": 13.11034826,
      "lon": 101.0669158,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 66,
      "name": "นิคมอุตสาหกรรมโรจนะแหลมฉบัง",
      "lat": 13.024547,
      "lon": 101.072437,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 67,
      "name": "นิคมอุตสาหกรรมฉะเชิงเทรา บลูเทค ซิตี้",
      "lat": 13.56379732,
      "lon": 100.9949185,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 68,
      "name": "นิคมอุตสาหกรรมอุดรธานี",
      "lat": 16.5753627,
      "lon": 100.1489452,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 69,
      "name": "นิคมอุตสาหกรรมบ่อทอง 33",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 70,
      "name": "นิคมอุตสาหกรรมเอ็กโก ระยอง",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3"
    },
    {
      "id": 71,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 1",
      "lat": 13.095811,
      "lon": 101.113907,
      "operations": "สายปฎิบัติการ2"
    },
    {
      "id": 72,
      "name": "นิคมอุตสาหกรรมเวิลด์ (ลำพูน)",
      "lat": 18.591755,
      "lon": 99.044877,
      "operations": "สายปฎิบัติการ1"
    },
    {
      "id": 82,
      "name": "นิคมอุตสาหกรรมอมตะ สมาร์ทซิตี้ ชลบุรี",
      "lat": 13.495528967090285,
      "lon": 101.05263377767572,
      "operations": ""
    },
    {
      "id": 83,
      "name": "นิคมอุตสาหกรรมอารยะ",
      "lat": 13.576960871564408,
      "lon": 100.89105577014254,
      "operations": ""
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939485747704445,
      "lon": 101.04139943537544,
      "operations": ""
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.844575469624841,
      "lon": 101.23635660462234,
      "operations": ""
    },
    {
      "id": 86,
      "name": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "lat": 15.653923104685944,
      "lon": 100.58284169495818,
      "operations": ""
    }
  ],
  "estate_watch": [
    {
      "id": 34,
      "name": "นิคมอุตสาหกรรมแหลมฉบัง",
      "lat": 13.076561,
      "lon": 100.909175,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 4,
      "water_alert_count": 0,
      "max_rainfall_mm": 177.4,
      "nearest_alert_km": 12.1,
      "latest_observed_at": "2026-09-24 05:50"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 6,
      "rain_alert_count": 4,
      "water_alert_count": 2,
      "max_rainfall_mm": 109.1,
      "nearest_alert_km": 8.3,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.716494,
      "lon": 101.105913,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 103.0,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939485747704445,
      "lon": 101.04139943537544,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 95.5,
      "nearest_alert_km": 7.6,
      "latest_observed_at": "2026-09-24 05:00"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 12,
      "rain_alert_count": 11,
      "water_alert_count": 1,
      "max_rainfall_mm": 72.8,
      "nearest_alert_km": 6.7,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.56903519,
      "lon": 100.6528202,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 43.0,
      "nearest_alert_km": 10.8,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 11,
      "rain_alert_count": 1,
      "water_alert_count": 10,
      "max_rainfall_mm": 36.0,
      "nearest_alert_km": 10.6,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.4893393,
      "lon": 100.5957211,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 19,
      "rain_alert_count": 0,
      "water_alert_count": 19,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.1,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.54202903,
      "lon": 100.1988542,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.5,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646,
      "lon": 101.008107,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 1,
      "water_alert_count": 2,
      "max_rainfall_mm": 79.4,
      "nearest_alert_km": 11.7,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.7582559,
      "lon": 100.7893183,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 6,
      "water_alert_count": 2,
      "max_rainfall_mm": 77.6,
      "nearest_alert_km": 2.0,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.75079527,
      "lon": 101.1226103,
      "operations": "สายปฎิบัติการ3",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 75.5,
      "nearest_alert_km": 11.5,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 30,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "lat": 13.024547,
      "lon": 101.072437,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 73.6,
      "nearest_alert_km": 4.4,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 43,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "lat": 13.7973442,
      "lon": 100.5592795,
      "operations": "สำนักงานใหญ่",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 6,
      "water_alert_count": 4,
      "max_rainfall_mm": 64.5,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694,
      "lon": 101.329567,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 3,
      "water_alert_count": 2,
      "max_rainfall_mm": 63.4,
      "nearest_alert_km": 7.7,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.6599038,
      "lon": 100.9114833,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 3,
      "water_alert_count": 1,
      "max_rainfall_mm": 50.6,
      "nearest_alert_km": 8.0,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.3863882,
      "lon": 100.9035767,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 18.5,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881,
      "lon": 100.704757,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 15.2,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 6,
      "name": "นิคมอุตสาหกรรมบางปะอิน",
      "lat": 14.2077497,
      "lon": 100.5896748,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 25.8,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309,
      "lon": 100.610012,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 0,
      "water_alert_count": 6,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.5440008,
      "lon": 100.232856,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.5753627,
      "lon": 100.1489452,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.6,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.0082598,
      "lon": 100.3598057,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.9,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 19,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "lat": 13.56379732,
      "lon": 100.9949185,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 1.8,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 15,
      "rain_alert_count": 10,
      "water_alert_count": 5,
      "max_rainfall_mm": 67.0,
      "nearest_alert_km": 6.0,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102,
      "lon": 100.707712,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 6,
      "rain_alert_count": 6,
      "water_alert_count": 0,
      "max_rainfall_mm": 61.5,
      "nearest_alert_km": 5.9,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.4214885,
      "lon": 101.0041244,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 61.4,
      "nearest_alert_km": 6.4,
      "latest_observed_at": "2026-09-24 05:00"
    },
    {
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954,
      "lon": 101.033398,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 61.0,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.0044858,
      "lon": 101.1626075,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 51.2,
      "nearest_alert_km": 5.9,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.12134595,
      "lon": 100.9904306,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 39.2,
      "nearest_alert_km": 10.7,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.11034826,
      "lon": 101.0669158,
      "operations": "สายปฎิบัติการ2",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 38.8,
      "nearest_alert_km": 14.8,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.54653659,
      "lon": 100.3436175,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.6,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 10,
      "name": "นิคมอุตสาหกรรมราชบุรี",
      "lat": 13.63729443,
      "lon": 99.85002164,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 3.7,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755,
      "lon": 99.044877,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 11,
      "rain_alert_count": 0,
      "water_alert_count": 11,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.2,
      "latest_observed_at": "2026-09-24 06:30"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.2,
      "latest_observed_at": "2026-09-24 06:00"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.844575469624841,
      "lon": 101.23635660462234,
      "operations": "",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.1,
      "latest_observed_at": "2026-09-24 06:30"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "ศูนย์กู้ภัยทางทะเลและชายฝั่งวงศ์อมาตย์ หมู่ 5",
      "station_code": "TJ13",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.9578,
      "lon": 100.88441,
      "rainfall_mm": 177.4,
      "value_text": "177.4 มม.",
      "observed_at": "2026-09-24 05:50",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "พัทยา",
      "station_code": "48461",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.92,
      "lon": 100.86944,
      "rainfall_mm": 151.4,
      "value_text": "151.4 มม.",
      "observed_at": "2026-09-24 04:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 17.9,
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
      "rainfall_mm": 109.1,
      "value_text": "109.1 มม.",
      "observed_at": "2026-09-24 04:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 16.3,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "rainfall_mm": 103.0,
      "value_text": "103 มม.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนมิตรสัมพันธ์",
      "station_code": "STN1974",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.952748,
      "lon": 100.91541,
      "rainfall_mm": 95.5,
      "value_text": "95.5 มม.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.7,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
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
      "rainfall_mm": 94.0,
      "value_text": "94 มม.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 12.1,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
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
      "rainfall_mm": 93.5,
      "value_text": "93.5 มม.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.6,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร. คลองลัดบางยอ 2",
      "station_code": "BKC004",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.661021,
      "lon": 100.56727,
      "waterlevel_msl": 1.32,
      "storage_percent": 116.37,
      "value_text": "1.32 ม.รทก.",
      "observed_at": "2026-09-23 16:10",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 13.8,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
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
      "waterlevel_msl": 22.24,
      "storage_percent": 114.6,
      "value_text": "22.24 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 4.09,
      "storage_percent": 114.36,
      "value_text": "4.09 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.7,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 9.6,
      "storage_percent": 108.18,
      "value_text": "9.6 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 10.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองบางหลวง",
      "station_code": "CPY009",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.4158,
      "lon": 100.44071,
      "waterlevel_msl": 4.96,
      "storage_percent": 107.45,
      "value_text": "4.96 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.6,
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
      "waterlevel_msl": 4.95,
      "storage_percent": 106.34,
      "value_text": "4.95 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองบางบาล",
      "station_code": "CPY010",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.42303,
      "lon": 100.48186,
      "waterlevel_msl": 6.02,
      "storage_percent": 102.55,
      "value_text": "6.02 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 14.3,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "วัดบางไผ่นารถ",
      "station_code": "T.15",
      "province": "นครปฐม",
      "district": "บางเลน",
      "lat": 14.05221,
      "lon": 100.175087,
      "waterlevel_msl": 1.97,
      "storage_percent": 102.25,
      "value_text": "1.97 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 47.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ชุมแสงสงคราม",
      "station_code": "VLGE13",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.8586,
      "lon": 100.05965,
      "waterlevel_msl": 40.65,
      "storage_percent": 101.44,
      "value_text": "40.65 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.9,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพรหมโหด",
      "station_code": "SKE003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.705864,
      "lon": 102.48168,
      "waterlevel_msl": 44.34,
      "storage_percent": 101.22,
      "value_text": "44.34 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 2.6,
      "storage_percent": 100.4,
      "value_text": "2.6 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 1.53,
      "storage_percent": 100.28,
      "value_text": "1.53 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 28.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังม่วง",
      "station_code": "WGYG",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.84867,
      "lon": 101.14549,
      "rainfall_mm": 79.4,
      "value_text": "79.4 มม.",
      "observed_at": "2026-09-24 06:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 29.0,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 77.6,
      "value_text": "77.6 มม.",
      "observed_at": "2026-09-24 06:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "rainfall_mm": 76.4,
      "value_text": "76.4 มม.",
      "observed_at": "2026-09-24 06:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 34.1,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักกูด",
      "station_code": "STN1655",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.818632,
      "lon": 101.038965,
      "rainfall_mm": 75.5,
      "value_text": "75.5 มม.",
      "observed_at": "2026-09-24 03:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 11.8,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
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
      "rainfall_mm": 74.0,
      "value_text": "74 มม.",
      "observed_at": "2026-09-24 05:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 46.6,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 73.6,
      "value_text": "73.6 มม.",
      "observed_at": "2026-09-24 06:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 4.4,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
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
      "rainfall_mm": 72.8,
      "value_text": "72.8 มม.",
      "observed_at": "2026-09-24 06:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.9,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 72.8,
      "value_text": "72.8 มม.",
      "observed_at": "2026-09-24 04:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 43.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักแว่น",
      "station_code": "STN1589",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.040789,
      "lon": 102.577395,
      "rainfall_mm": 70.5,
      "value_text": "70.5 มม.",
      "observed_at": "2026-09-24 05:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 35.3,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทาม",
      "station_code": "Kgt.6",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97341,
      "lon": 101.517448,
      "waterlevel_msl": 6.48,
      "storage_percent": 99.04,
      "value_text": "6.48 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.28,
      "storage_percent": 98.49,
      "value_text": "1.28 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 7.37,
      "storage_percent": 97.92,
      "value_text": "7.37 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 38.74,
      "storage_percent": 97.65,
      "value_text": "38.74 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 1.96,
      "storage_percent": 97.5,
      "value_text": "1.96 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 47.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเนินผาสุก",
      "station_code": "Kgt.10",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.8096,
      "lon": 102.054382,
      "waterlevel_msl": 34.66,
      "storage_percent": 96.77,
      "value_text": "34.66 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.7,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 38.62,
      "storage_percent": 96.43,
      "value_text": "38.62 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 38.53,
      "storage_percent": 95.83,
      "value_text": "38.53 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.8,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "waterlevel_msl": 19.2,
      "storage_percent": 95.59,
      "value_text": "19.2 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 3.68,
      "storage_percent": 95.07,
      "value_text": "3.68 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 3.57,
      "storage_percent": 94.52,
      "value_text": "3.57 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.8,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.29,
      "storage_percent": 93.44,
      "value_text": "1.29 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 27.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.75,
      "storage_percent": 92.69,
      "value_text": "0.75 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.1,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 34.91,
      "storage_percent": 92.46,
      "value_text": "34.91 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
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
      "waterlevel_msl": 1.74,
      "storage_percent": 92.14,
      "value_text": "1.74 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.0,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานนวลฉวี",
      "station_code": "CPY014",
      "province": "นนทบุรี",
      "district": "ปากเกร็ด",
      "lat": 13.94749,
      "lon": 100.53507,
      "waterlevel_msl": 1.24,
      "storage_percent": 92.03,
      "value_text": "1.24 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.9,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "กบินทร์บุรี",
      "station_code": "PRC001",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.986616,
      "lon": 101.70547,
      "waterlevel_msl": 10.32,
      "storage_percent": 91.6,
      "value_text": "10.32 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 10.6,
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
      "waterlevel_msl": 3.41,
      "storage_percent": 91.33,
      "value_text": "3.41 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านนาแขม",
      "station_code": "Kgt.43A",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.02174,
      "lon": 101.750664,
      "waterlevel_msl": 11.23,
      "storage_percent": 90.83,
      "value_text": "11.23 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "กรมชลประทานสามเสน",
      "station_code": "C.12",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.78815,
      "lon": 100.509148,
      "waterlevel_msl": 0.72,
      "storage_percent": 90.82,
      "value_text": "0.72 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 5.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "วัดขนอนใต้",
      "station_code": "HDA005",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะอิน",
      "lat": 14.288251,
      "lon": 100.61132,
      "waterlevel_msl": 2.12,
      "storage_percent": 90.74,
      "value_text": "2.12 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 0.24,
      "storage_percent": 89.94,
      "value_text": "0.24 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.1,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 5.71,
      "storage_percent": 88.98,
      "value_text": "5.71 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 14.95,
      "storage_percent": 88.93,
      "value_text": "14.95 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานกรุงเทพ",
      "station_code": "CPY015",
      "province": "กรุงเทพมหานคร",
      "district": "ธนบุรี",
      "lat": 13.700301,
      "lon": 100.49277,
      "waterlevel_msl": 0.07,
      "storage_percent": 88.29,
      "value_text": "0.07 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 32.66,
      "storage_percent": 87.98,
      "value_text": "32.66 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 4.51,
      "storage_percent": 87.44,
      "value_text": "4.51 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 2.05,
      "storage_percent": 87.43,
      "value_text": "2.05 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.1,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 3.38,
      "storage_percent": 87.22,
      "value_text": "3.38 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.5,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 3.21,
      "storage_percent": 87.05,
      "value_text": "3.21 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.4,
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
      "waterlevel_msl": 3.5,
      "storage_percent": 86.91,
      "value_text": "3.5 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
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
      "waterlevel_msl": 0.08,
      "storage_percent": 86.61,
      "value_text": "0.08 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.9,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 26.0,
      "storage_percent": 85.9,
      "value_text": "26 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ประจันตคาม (KGT7A)",
      "station_code": "PRC004",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.070941,
      "lon": 101.51893,
      "waterlevel_msl": 5.85,
      "storage_percent": 85.88,
      "value_text": "5.85 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 0.07,
      "storage_percent": 85.53,
      "value_text": "0.07 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 8.65,
      "storage_percent": 85.36,
      "value_text": "8.65 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.9,
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
      "waterlevel_msl": 0.04,
      "storage_percent": 85.12,
      "value_text": "0.04 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.5,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 33.65,
      "storage_percent": 84.76,
      "value_text": "33.65 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.2,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 3.43,
      "storage_percent": 84.58,
      "value_text": "3.43 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
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
      "waterlevel_msl": 8.53,
      "storage_percent": 83.83,
      "value_text": "8.53 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
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
      "waterlevel_msl": -0.27,
      "storage_percent": 83.72,
      "value_text": "-0.27 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.2,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 6.55,
      "storage_percent": 83.12,
      "value_text": "6.55 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
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
      "waterlevel_msl": -0.66,
      "storage_percent": 82.52,
      "value_text": "-0.66 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "waterlevel_msl": 2.34,
      "storage_percent": 82.24,
      "value_text": "2.34 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.9,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านบางแก้ว",
      "station_code": "C.7A",
      "province": "อ่างทอง",
      "district": "เมืองอ่างทอง",
      "lat": 14.59044,
      "lon": 100.453293,
      "waterlevel_msl": 6.92,
      "storage_percent": 82.08,
      "value_text": "6.92 ม.รทก.",
      "observed_at": "2026-09-24 05:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.0,
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
      "waterlevel_msl": 1.07,
      "storage_percent": 80.75,
      "value_text": "1.07 ม.รทก.",
      "observed_at": "2026-09-24 06:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 6.42,
      "storage_percent": 80.25,
      "value_text": "6.42 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.7,
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
      "waterlevel_msl": 1.95,
      "storage_percent": 79.11,
      "value_text": "1.95 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.7,
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
      "waterlevel_msl": 10.02,
      "storage_percent": 78.73,
      "value_text": "10.02 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 46.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 25.46,
      "storage_percent": 78.7,
      "value_text": "25.46 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 0.23,
      "storage_percent": 77.45,
      "value_text": "0.23 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 2.37,
      "storage_percent": 77.25,
      "value_text": "2.37 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.8,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานเดชาติวงศ์",
      "station_code": "CPY001",
      "province": "นครสวรรค์",
      "district": "เมืองนครสวรรค์",
      "lat": 15.68849,
      "lon": 100.12381,
      "waterlevel_msl": 21.8,
      "storage_percent": 76.54,
      "value_text": "21.8 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 0.19,
      "storage_percent": 76.48,
      "value_text": "0.19 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.7,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 42.14,
      "storage_percent": 76.25,
      "value_text": "42.14 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 5.76,
      "storage_percent": 76.17,
      "value_text": "5.76 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.8,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "storage_percent": 76.06,
      "value_text": "0.36 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.7,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 5.82,
      "storage_percent": 75.89,
      "value_text": "5.82 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 47.18,
      "storage_percent": 75.11,
      "value_text": "47.18 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 45.4,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "value_text": "3.9 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 3.22,
      "storage_percent": 74.29,
      "value_text": "3.22 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": -0.38,
      "storage_percent": 74.0,
      "value_text": "-0.38 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 42.36,
      "storage_percent": 73.98,
      "value_text": "42.36 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 42.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 42.42,
      "storage_percent": 73.81,
      "value_text": "42.42 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 0.03,
      "storage_percent": 73.7,
      "value_text": "0.03 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านชะอม",
      "station_code": "Kgt.34",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.10461,
      "lon": 101.744179,
      "waterlevel_msl": 8.55,
      "storage_percent": 73.07,
      "value_text": "8.55 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สามง่าม",
      "station_code": "Y.17",
      "province": "พิจิตร",
      "district": "สามง่าม",
      "lat": 16.507441,
      "lon": 100.204086,
      "waterlevel_msl": 36.01,
      "storage_percent": 72.75,
      "value_text": "36.01 ม.รทก.",
      "observed_at": "2026-09-24 06:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เสนา",
      "station_code": "CPY017",
      "province": "พระนครศรีอยุธยา",
      "district": "เสนา",
      "lat": 14.31976,
      "lon": 100.37952,
      "waterlevel_msl": 2.1,
      "storage_percent": 71.59,
      "value_text": "2.1 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 25.8,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 14.2,
      "storage_percent": 71.2,
      "value_text": "14.2 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.9,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "waterlevel_msl": 2.21,
      "storage_percent": 70.82,
      "value_text": "2.21 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
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
      "waterlevel_msl": 32.25,
      "storage_percent": 70.56,
      "value_text": "32.25 ม.รทก.",
      "observed_at": "2026-09-24 06:30",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 32.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อรัญประเทศ",
      "station_code": "48462",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.68869,
      "lon": 102.50417,
      "rainfall_mm": 68.6,
      "value_text": "68.6 มม.",
      "observed_at": "2026-09-24 04:00",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "distance_km": 6.7,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "อต."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 36,
    "station_count": 960,
    "alert_station_count": 176,
    "heavy_rain_estate_count": 9,
    "water_alert_estate_count": 25,
    "critical_count": 67,
    "rain_station_count": 773,
    "waterlevel_station_count": 187,
    "waterlevel_alert_count": 104,
    "max_rainfall_mm": 177.4,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.กรุงเทพมหานคร",
      "จ.ฉะเชิงเทรา",
      "จ.ชลบุรี",
      "จ.ชัยนาท",
      "จ.บุรีรัมย์",
      "จ.สระแก้ว",
      "จ.อุบลราชธานี"
    ],
    "flood_watch_province_count": 7,
    "flash_flood_24h_area_count": 11,
    "flash_flood_48h_area_count": 9,
    "warning_title": "",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "flash_flood": {
    "24h": {
      "period": "24h",
      "date": "2026-09-24",
      "time": "06:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
        {
          "geocode": "180302",
          "tambon": "ต.มะขามเฒ่า",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.มะขามเฒ่า",
          "latitude": 15.222455,
          "longitude": 100.062221,
          "sum_rainfall_mm": 179.0,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.06268,
                  15.25821
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.05798,
                  15.2481
                ],
                [
                  100.06031,
                  15.24134
                ],
                [
                  100.06541,
                  15.23201
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.05694,
                  15.19411
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05444,
                  15.18366
                ],
                [
                  100.0445,
                  15.18318
                ],
                [
                  100.03811,
                  15.19776
                ],
                [
                  100.03342,
                  15.20128
                ],
                [
                  100.02295,
                  15.21573
                ],
                [
                  100.02074,
                  15.21365
                ],
                [
                  100.01835,
                  15.21325
                ],
                [
                  100.00699,
                  15.21904
                ],
                [
                  100.0141,
                  15.2195
                ],
                [
                  100.00545,
                  15.22108
                ],
                [
                  100.00037,
                  15.2235
                ],
                [
                  99.99845,
                  15.23338
                ],
                [
                  100.00412,
                  15.24509
                ],
                [
                  100.02238,
                  15.24314
                ],
                [
                  100.02003,
                  15.25097
                ],
                [
                  100.02042,
                  15.25341
                ],
                [
                  100.02584,
                  15.25999
                ],
                [
                  100.0351,
                  15.26278
                ],
                [
                  100.03759,
                  15.25827
                ],
                [
                  100.04144,
                  15.2557
                ],
                [
                  100.04541,
                  15.25693
                ],
                [
                  100.04488,
                  15.2617
                ],
                [
                  100.04693,
                  15.2645
                ],
                [
                  100.05185,
                  15.26329
                ],
                [
                  100.0584,
                  15.26375
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240308",
          "tambon": "ต.ดอนฉิมพลี",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.ดอนฉิมพลี",
          "latitude": 13.90535,
          "longitude": 100.97028,
          "sum_rainfall_mm": 96.2,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99261,
                  13.97048
                ],
                [
                  100.98814,
                  13.92966
                ],
                [
                  100.97842,
                  13.86322
                ],
                [
                  100.97807,
                  13.84571
                ],
                [
                  100.97512,
                  13.84656
                ],
                [
                  100.97276,
                  13.84869
                ],
                [
                  100.95762,
                  13.84627
                ],
                [
                  100.95516,
                  13.84399
                ],
                [
                  100.94978,
                  13.84438
                ],
                [
                  100.94584,
                  13.84593
                ],
                [
                  100.94163,
                  13.84501
                ],
                [
                  100.93777,
                  13.84607
                ],
                [
                  100.93687,
                  13.84765
                ],
                [
                  100.93754,
                  13.85128
                ],
                [
                  100.93629,
                  13.85172
                ],
                [
                  100.9361,
                  13.85513
                ],
                [
                  100.94828,
                  13.96568
                ],
                [
                  100.98277,
                  13.97036
                ],
                [
                  100.99261,
                  13.97048
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200407",
          "tambon": "ต.ตะเคียนเตี้ย",
          "amphoe": "อ.บางละมุง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านนาวัง",
          "latitude": 12.998358,
          "longitude": 101.005843,
          "sum_rainfall_mm": 120.5,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99581,
                  13.04105
                ],
                [
                  101.00496,
                  13.04008
                ],
                [
                  101.00863,
                  13.0381
                ],
                [
                  101.01025,
                  13.03451
                ],
                [
                  101.01411,
                  13.03228
                ],
                [
                  101.01522,
                  13.02756
                ],
                [
                  101.01964,
                  13.02149
                ],
                [
                  101.02153,
                  13.02245
                ],
                [
                  101.02545,
                  13.02924
                ],
                [
                  101.02693,
                  13.02491
                ],
                [
                  101.0284,
                  13.0239
                ],
                [
                  101.03245,
                  13.02385
                ],
                [
                  101.03389,
                  13.02562
                ],
                [
                  101.0363,
                  13.02396
                ],
                [
                  101.04035,
                  13.02602
                ],
                [
                  101.04619,
                  13.02456
                ],
                [
                  101.05601,
                  13.02036
                ],
                [
                  101.06271,
                  13.01058
                ],
                [
                  101.06671,
                  13.0078
                ],
                [
                  101.06942,
                  13.00787
                ],
                [
                  101.07467,
                  13.00203
                ],
                [
                  101.07776,
                  13.00176
                ],
                [
                  101.08525,
                  13.00539
                ],
                [
                  101.08608,
                  13.00197
                ],
                [
                  101.08843,
                  12.99972
                ],
                [
                  101.07658,
                  12.99951
                ],
                [
                  101.07128,
                  13.001
                ],
                [
                  101.06621,
                  12.99984
                ],
                [
                  101.06406,
                  13.00107
                ],
                [
                  101.05737,
                  12.99281
                ],
                [
                  101.05416,
                  12.99398
                ],
                [
                  101.04937,
                  12.99174
                ],
                [
                  101.04436,
                  12.9974
                ],
                [
                  101.03946,
                  12.99974
                ],
                [
                  101.03301,
                  12.99482
                ],
                [
                  101.02922,
                  12.98853
                ],
                [
                  101.02466,
                  12.98576
                ],
                [
                  101.01777,
                  12.97153
                ],
                [
                  101.01504,
                  12.97639
                ],
                [
                  101.01046,
                  12.97905
                ],
                [
                  101.002,
                  12.98777
                ],
                [
                  101.00117,
                  12.99611
                ],
                [
                  100.99668,
                  13.00227
                ],
                [
                  100.98856,
                  13.00244
                ],
                [
                  100.98568,
                  12.99633
                ],
                [
                  100.98332,
                  12.99401
                ],
                [
                  100.9715,
                  13.00264
                ],
                [
                  100.96755,
                  13.00211
                ],
                [
                  100.96758,
                  12.99949
                ],
                [
                  100.96478,
                  12.99793
                ],
                [
                  100.96044,
                  12.99897
                ],
                [
                  100.95214,
                  12.99683
                ],
                [
                  100.94329,
                  12.99857
                ],
                [
                  100.94798,
                  13.00634
                ],
                [
                  100.95446,
                  13.01025
                ],
                [
                  100.9556,
                  13.01242
                ],
                [
                  100.95522,
                  13.02128
                ],
                [
                  100.95042,
                  13.02181
                ],
                [
                  100.94797,
                  13.02601
                ],
                [
                  100.9488,
                  13.03689
                ],
                [
                  100.94509,
                  13.0377
                ],
                [
                  100.94457,
                  13.03971
                ],
                [
                  100.94259,
                  13.03993
                ],
                [
                  100.94242,
                  13.04087
                ],
                [
                  100.94584,
                  13.04148
                ],
                [
                  100.94785,
                  13.04332
                ],
                [
                  100.94974,
                  13.04317
                ],
                [
                  100.95102,
                  13.04562
                ],
                [
                  100.95489,
                  13.04684
                ],
                [
                  100.9612,
                  13.05216
                ],
                [
                  100.96641,
                  13.05206
                ],
                [
                  100.96975,
                  13.05375
                ],
                [
                  100.97856,
                  13.05212
                ],
                [
                  100.98523,
                  13.04841
                ],
                [
                  100.99166,
                  13.04154
                ],
                [
                  100.99581,
                  13.04105
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200403",
          "tambon": "ต.หนองปลาไหล",
          "amphoe": "อ.บางละมุง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชุมชนชัยพรราชา",
          "latitude": 12.96831,
          "longitude": 100.92304,
          "sum_rainfall_mm": 159.5,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99668,
                  13.00227
                ],
                [
                  101.00117,
                  12.99611
                ],
                [
                  101.002,
                  12.98777
                ],
                [
                  101.01046,
                  12.97905
                ],
                [
                  101.01504,
                  12.97639
                ],
                [
                  101.01777,
                  12.97153
                ],
                [
                  101.0143,
                  12.96722
                ],
                [
                  101.00891,
                  12.96431
                ],
                [
                  101.00195,
                  12.96425
                ],
                [
                  100.99899,
                  12.96255
                ],
                [
                  100.99663,
                  12.96257
                ],
                [
                  100.9865,
                  12.97881
                ],
                [
                  100.98336,
                  12.98062
                ],
                [
                  100.97729,
                  12.98172
                ],
                [
                  100.96944,
                  12.97813
                ],
                [
                  100.97578,
                  12.97579
                ],
                [
                  100.97483,
                  12.97502
                ],
                [
                  100.9708,
                  12.97594
                ],
                [
                  100.9694,
                  12.97483
                ],
                [
                  100.96969,
                  12.97334
                ],
                [
                  100.97648,
                  12.97158
                ],
                [
                  100.96908,
                  12.97037
                ],
                [
                  100.96537,
                  12.97088
                ],
                [
                  100.96858,
                  12.96624
                ],
                [
                  100.96684,
                  12.96207
                ],
                [
                  100.96175,
                  12.96461
                ],
                [
                  100.96064,
                  12.96651
                ],
                [
                  100.95932,
                  12.96622
                ],
                [
                  100.95845,
                  12.96373
                ],
                [
                  100.96929,
                  12.95692
                ],
                [
                  100.96773,
                  12.95362
                ],
                [
                  100.96042,
                  12.94661
                ],
                [
                  100.95464,
                  12.95502
                ],
                [
                  100.95319,
                  12.96233
                ],
                [
                  100.95118,
                  12.96634
                ],
                [
                  100.94829,
                  12.96747
                ],
                [
                  100.94566,
                  12.96601
                ],
                [
                  100.94194,
                  12.96581
                ],
                [
                  100.93617,
                  12.96789
                ],
                [
                  100.92947,
                  12.96472
                ],
                [
                  100.92676,
                  12.96526
                ],
                [
                  100.9205,
                  12.96922
                ],
                [
                  100.9367,
                  12.9976
                ],
                [
                  100.94428,
                  12.9986
                ],
                [
                  100.95214,
                  12.99683
                ],
                [
                  100.96044,
                  12.99897
                ],
                [
                  100.96478,
                  12.99793
                ],
                [
                  100.96758,
                  12.99949
                ],
                [
                  100.96755,
                  13.00211
                ],
                [
                  100.9715,
                  13.00264
                ],
                [
                  100.98332,
                  12.99401
                ],
                [
                  100.98568,
                  12.99633
                ],
                [
                  100.98856,
                  13.00244
                ],
                [
                  100.99668,
                  13.00227
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200708",
          "tambon": "ต.บ่อวิน",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพสต.บ่อวิน",
          "latitude": 13.05505,
          "longitude": 101.09782,
          "sum_rainfall_mm": 117.60000000000001,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.1051,
                  13.1048
                ],
                [
                  101.10861,
                  13.09394
                ],
                [
                  101.11462,
                  13.08789
                ],
                [
                  101.11883,
                  13.07968
                ],
                [
                  101.12253,
                  13.07763
                ],
                [
                  101.12462,
                  13.07263
                ],
                [
                  101.13884,
                  13.05151
                ],
                [
                  101.13792,
                  13.04677
                ],
                [
                  101.14717,
                  13.04585
                ],
                [
                  101.15364,
                  13.04758
                ],
                [
                  101.15834,
                  13.04723
                ],
                [
                  101.16192,
                  13.04133
                ],
                [
                  101.16354,
                  13.0327
                ],
                [
                  101.1671,
                  13.02462
                ],
                [
                  101.17339,
                  13.02066
                ],
                [
                  101.17112,
                  13.0163
                ],
                [
                  101.17429,
                  13.01399
                ],
                [
                  101.17333,
                  13.01058
                ],
                [
                  101.17106,
                  13.01114
                ],
                [
                  101.16739,
                  13.01667
                ],
                [
                  101.16647,
                  13.01607
                ],
                [
                  101.16665,
                  13.01202
                ],
                [
                  101.16571,
                  13.01059
                ],
                [
                  101.16463,
                  13.01132
                ],
                [
                  101.16258,
                  13.01777
                ],
                [
                  101.16073,
                  13.01626
                ],
                [
                  101.15763,
                  13.0161
                ],
                [
                  101.15525,
                  13.00801
                ],
                [
                  101.15708,
                  13.00423
                ],
                [
                  101.15495,
                  13.0018
                ],
                [
                  101.15063,
                  13.00401
                ],
                [
                  101.14778,
                  13.00715
                ],
                [
                  101.14292,
                  13.00778
                ],
                [
                  101.14067,
                  13.0121
                ],
                [
                  101.13697,
                  13.01492
                ],
                [
                  101.132,
                  13.01199
                ],
                [
                  101.12478,
                  13.01251
                ],
                [
                  101.12358,
                  13.01142
                ],
                [
                  101.12061,
                  13.01562
                ],
                [
                  101.10904,
                  13.0241
                ],
                [
                  101.10635,
                  13.02383
                ],
                [
                  101.10419,
                  13.02093
                ],
                [
                  101.10262,
                  13.02068
                ],
                [
                  101.09982,
                  13.02181
                ],
                [
                  101.09654,
                  13.02621
                ],
                [
                  101.08991,
                  13.02754
                ],
                [
                  101.08692,
                  13.03048
                ],
                [
                  101.0771,
                  13.02235
                ],
                [
                  101.07021,
                  13.01035
                ],
                [
                  101.06671,
                  13.0078
                ],
                [
                  101.06146,
                  13.01191
                ],
                [
                  101.05542,
                  13.0208
                ],
                [
                  101.04619,
                  13.02456
                ],
                [
                  101.03902,
                  13.02576
                ],
                [
                  101.03914,
                  13.03553
                ],
                [
                  101.02705,
                  13.03895
                ],
                [
                  101.02425,
                  13.04165
                ],
                [
                  101.02637,
                  13.0474
                ],
                [
                  101.02711,
                  13.0602
                ],
                [
                  101.03055,
                  13.06602
                ],
                [
                  101.03796,
                  13.06732
                ],
                [
                  101.03994,
                  13.06255
                ],
                [
                  101.04412,
                  13.05978
                ],
                [
                  101.04318,
                  13.06648
                ],
                [
                  101.03874,
                  13.07543
                ],
                [
                  101.05356,
                  13.07234
                ],
                [
                  101.05681,
                  13.07026
                ],
                [
                  101.05906,
                  13.07076
                ],
                [
                  101.06083,
                  13.07347
                ],
                [
                  101.05661,
                  13.07629
                ],
                [
                  101.05485,
                  13.08281
                ],
                [
                  101.0558,
                  13.0887
                ],
                [
                  101.05521,
                  13.09909
                ],
                [
                  101.05873,
                  13.10064
                ],
                [
                  101.06075,
                  13.10325
                ],
                [
                  101.06814,
                  13.09991
                ],
                [
                  101.07081,
                  13.10386
                ],
                [
                  101.07488,
                  13.10191
                ],
                [
                  101.07777,
                  13.10526
                ],
                [
                  101.08537,
                  13.10457
                ],
                [
                  101.08565,
                  13.101
                ],
                [
                  101.08255,
                  13.09477
                ],
                [
                  101.08737,
                  13.09085
                ],
                [
                  101.09132,
                  13.09032
                ],
                [
                  101.09202,
                  13.0905
                ],
                [
                  101.09105,
                  13.09438
                ],
                [
                  101.09579,
                  13.10574
                ],
                [
                  101.1051,
                  13.1048
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200902",
          "tambon": "ต.นาจอมเทียน",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
          "latitude": 12.768159,
          "longitude": 100.97308,
          "sum_rainfall_mm": 192.60000000000008,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.91165,
                  12.86443
                ],
                [
                  100.91707,
                  12.8566
                ],
                [
                  100.91854,
                  12.85252
                ],
                [
                  100.92157,
                  12.83451
                ],
                [
                  100.92005,
                  12.82729
                ],
                [
                  100.92049,
                  12.82356
                ],
                [
                  100.92327,
                  12.81909
                ],
                [
                  100.92885,
                  12.81352
                ],
                [
                  100.9334,
                  12.80986
                ],
                [
                  100.93619,
                  12.80897
                ],
                [
                  100.93798,
                  12.79943
                ],
                [
                  100.94017,
                  12.79665
                ],
                [
                  100.94177,
                  12.79567
                ],
                [
                  100.94534,
                  12.79604
                ],
                [
                  100.94776,
                  12.794
                ],
                [
                  100.95385,
                  12.78057
                ],
                [
                  100.95405,
                  12.77672
                ],
                [
                  100.9599,
                  12.77162
                ],
                [
                  100.96668,
                  12.7756
                ],
                [
                  100.97284,
                  12.77204
                ],
                [
                  100.97538,
                  12.77254
                ],
                [
                  100.9764,
                  12.76716
                ],
                [
                  100.98165,
                  12.77622
                ],
                [
                  100.98507,
                  12.77725
                ],
                [
                  100.98773,
                  12.77372
                ],
                [
                  100.98822,
                  12.77116
                ],
                [
                  100.98606,
                  12.76191
                ],
                [
                  100.97818,
                  12.7576
                ],
                [
                  100.97304,
                  12.74825
                ],
                [
                  100.96354,
                  12.74167
                ],
                [
                  100.96285,
                  12.737
                ],
                [
                  100.95937,
                  12.73941
                ],
                [
                  100.96126,
                  12.74325
                ],
                [
                  100.9616,
                  12.74757
                ],
                [
                  100.95918,
                  12.75006
                ],
                [
                  100.95959,
                  12.75142
                ],
                [
                  100.95735,
                  12.75549
                ],
                [
                  100.95916,
                  12.75982
                ],
                [
                  100.95473,
                  12.75843
                ],
                [
                  100.95294,
                  12.75875
                ],
                [
                  100.95238,
                  12.76048
                ],
                [
                  100.95007,
                  12.75982
                ],
                [
                  100.94651,
                  12.75744
                ],
                [
                  100.94691,
                  12.75383
                ],
                [
                  100.94426,
                  12.75311
                ],
                [
                  100.93932,
                  12.75361
                ],
                [
                  100.93216,
                  12.75817
                ],
                [
                  100.92932,
                  12.75824
                ],
                [
                  100.93087,
                  12.76768
                ],
                [
                  100.93079,
                  12.77634
                ],
                [
                  100.93307,
                  12.77993
                ],
                [
                  100.92574,
                  12.77907
                ],
                [
                  100.92694,
                  12.77682
                ],
                [
                  100.92579,
                  12.77434
                ],
                [
                  100.91954,
                  12.77581
                ],
                [
                  100.91365,
                  12.7748
                ],
                [
                  100.9037,
                  12.77985
                ],
                [
                  100.90545,
                  12.78641
                ],
                [
                  100.90803,
                  12.79069
                ],
                [
                  100.90942,
                  12.79942
                ],
                [
                  100.91057,
                  12.80043
                ],
                [
                  100.91162,
                  12.80551
                ],
                [
                  100.91291,
                  12.80612
                ],
                [
                  100.91211,
                  12.81243
                ],
                [
                  100.91294,
                  12.81498
                ],
                [
                  100.91198,
                  12.81546
                ],
                [
                  100.90849,
                  12.8295
                ],
                [
                  100.90343,
                  12.84364
                ],
                [
                  100.89219,
                  12.86525
                ],
                [
                  100.91165,
                  12.86443
                ]
              ]
            ]
          }
        },
        {
          "geocode": "270605",
          "tambon": "ต.ท่าข้าม",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพสต.ท่าข้าม",
          "latitude": 13.62763,
          "longitude": 102.57487,
          "sum_rainfall_mm": 176.40000000000003,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.54852,
                  13.66008
                ],
                [
                  102.54835,
                  13.65885
                ],
                [
                  102.55027,
                  13.65808
                ],
                [
                  102.5553,
                  13.65188
                ],
                [
                  102.55746,
                  13.65179
                ],
                [
                  102.55879,
                  13.64822
                ],
                [
                  102.56095,
                  13.64924
                ],
                [
                  102.56135,
                  13.64696
                ],
                [
                  102.56355,
                  13.64755
                ],
                [
                  102.56689,
                  13.64437
                ],
                [
                  102.56954,
                  13.64428
                ],
                [
                  102.57071,
                  13.64267
                ],
                [
                  102.57109,
                  13.63676
                ],
                [
                  102.57541,
                  13.63004
                ],
                [
                  102.57884,
                  13.63011
                ],
                [
                  102.57885,
                  13.62863
                ],
                [
                  102.58109,
                  13.62798
                ],
                [
                  102.58407,
                  13.63015
                ],
                [
                  102.58679,
                  13.62946
                ],
                [
                  102.59004,
                  13.62508
                ],
                [
                  102.59239,
                  13.62492
                ],
                [
                  102.59349,
                  13.62608
                ],
                [
                  102.59482,
                  13.623
                ],
                [
                  102.59989,
                  13.62304
                ],
                [
                  102.60171,
                  13.62175
                ],
                [
                  102.60215,
                  13.6196
                ],
                [
                  102.60428,
                  13.61983
                ],
                [
                  102.60719,
                  13.61651
                ],
                [
                  102.61044,
                  13.61537
                ],
                [
                  102.6113,
                  13.61699
                ],
                [
                  102.6136,
                  13.61622
                ],
                [
                  102.61418,
                  13.61405
                ],
                [
                  102.6212,
                  13.61319
                ],
                [
                  102.62455,
                  13.61064
                ],
                [
                  102.62418,
                  13.60901
                ],
                [
                  102.62162,
                  13.6092
                ],
                [
                  102.62109,
                  13.6079
                ],
                [
                  102.61694,
                  13.60809
                ],
                [
                  102.6152,
                  13.60613
                ],
                [
                  102.61426,
                  13.60661
                ],
                [
                  102.61511,
                  13.60837
                ],
                [
                  102.61411,
                  13.60904
                ],
                [
                  102.61254,
                  13.60616
                ],
                [
                  102.61,
                  13.60546
                ],
                [
                  102.60659,
                  13.60677
                ],
                [
                  102.59818,
                  13.60713
                ],
                [
                  102.59545,
                  13.60854
                ],
                [
                  102.59246,
                  13.60724
                ],
                [
                  102.58819,
                  13.60777
                ],
                [
                  102.5744,
                  13.60348
                ],
                [
                  102.57281,
                  13.60464
                ],
                [
                  102.56095,
                  13.60658
                ],
                [
                  102.56023,
                  13.60707
                ],
                [
                  102.56145,
                  13.60913
                ],
                [
                  102.55867,
                  13.60966
                ],
                [
                  102.55606,
                  13.60877
                ],
                [
                  102.54984,
                  13.61472
                ],
                [
                  102.54522,
                  13.61743
                ],
                [
                  102.54027,
                  13.61719
                ],
                [
                  102.5336,
                  13.61435
                ],
                [
                  102.52586,
                  13.61403
                ],
                [
                  102.51953,
                  13.61508
                ],
                [
                  102.51583,
                  13.61364
                ],
                [
                  102.50053,
                  13.6702
                ],
                [
                  102.50367,
                  13.67221
                ],
                [
                  102.50522,
                  13.67509
                ],
                [
                  102.50998,
                  13.67404
                ],
                [
                  102.51133,
                  13.67278
                ],
                [
                  102.5144,
                  13.67297
                ],
                [
                  102.51376,
                  13.67122
                ],
                [
                  102.51534,
                  13.67039
                ],
                [
                  102.51949,
                  13.6726
                ],
                [
                  102.52224,
                  13.66989
                ],
                [
                  102.52202,
                  13.66854
                ],
                [
                  102.52505,
                  13.66725
                ],
                [
                  102.5302,
                  13.66709
                ],
                [
                  102.5341,
                  13.66298
                ],
                [
                  102.54076,
                  13.66166
                ],
                [
                  102.5412,
                  13.6606
                ],
                [
                  102.54303,
                  13.66123
                ],
                [
                  102.54459,
                  13.65968
                ],
                [
                  102.54634,
                  13.66078
                ],
                [
                  102.54852,
                  13.66008
                ]
              ]
            ]
          }
        },
        {
          "geocode": "310607",
          "tambon": "ต.หนองแวง",
          "amphoe": "อ.ละหานทราย",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ตย.๕ (บาระแนะ)",
          "latitude": 14.249989,
          "longitude": 102.97801,
          "sum_rainfall_mm": 181.20000000000002,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.94112,
                  14.32618
                ],
                [
                  102.94541,
                  14.32005
                ],
                [
                  102.95187,
                  14.31551
                ],
                [
                  102.95473,
                  14.31657
                ],
                [
                  102.95716,
                  14.31615
                ],
                [
                  102.95852,
                  14.31842
                ],
                [
                  102.96011,
                  14.31891
                ],
                [
                  102.96481,
                  14.31625
                ],
                [
                  102.96843,
                  14.31608
                ],
                [
                  102.96939,
                  14.30593
                ],
                [
                  102.97359,
                  14.30193
                ],
                [
                  102.97518,
                  14.29741
                ],
                [
                  102.98448,
                  14.29085
                ],
                [
                  102.98758,
                  14.28481
                ],
                [
                  103.00129,
                  14.27542
                ],
                [
                  103.00644,
                  14.27307
                ],
                [
                  103.01091,
                  14.26737
                ],
                [
                  103.0197,
                  14.26447
                ],
                [
                  103.02795,
                  14.25958
                ],
                [
                  103.03011,
                  14.25774
                ],
                [
                  103.03303,
                  14.25209
                ],
                [
                  103.03839,
                  14.25147
                ],
                [
                  103.0382,
                  14.24589
                ],
                [
                  103.03595,
                  14.24138
                ],
                [
                  103.03265,
                  14.24034
                ],
                [
                  103.02331,
                  14.23014
                ],
                [
                  103.02016,
                  14.22888
                ],
                [
                  103.01705,
                  14.23219
                ],
                [
                  103.01268,
                  14.23148
                ],
                [
                  103.01103,
                  14.22916
                ],
                [
                  103.01093,
                  14.22599
                ],
                [
                  103.00077,
                  14.21801
                ],
                [
                  102.99889,
                  14.21407
                ],
                [
                  102.98903,
                  14.21314
                ],
                [
                  102.98628,
                  14.21489
                ],
                [
                  102.97029,
                  14.21
                ],
                [
                  102.96305,
                  14.21208
                ],
                [
                  102.95387,
                  14.20814
                ],
                [
                  102.95191,
                  14.2053
                ],
                [
                  102.9571,
                  14.19914
                ],
                [
                  102.9561,
                  14.19605
                ],
                [
                  102.95154,
                  14.19543
                ],
                [
                  102.94554,
                  14.19882
                ],
                [
                  102.94013,
                  14.19637
                ],
                [
                  102.93852,
                  14.19421
                ],
                [
                  102.94111,
                  14.18899
                ],
                [
                  102.9399,
                  14.18478
                ],
                [
                  102.92634,
                  14.17428
                ],
                [
                  102.91888,
                  14.17196
                ],
                [
                  102.91,
                  14.16721
                ],
                [
                  102.90526,
                  14.16649
                ],
                [
                  102.90115,
                  14.17227
                ],
                [
                  102.89282,
                  14.17369
                ],
                [
                  102.88019,
                  14.17891
                ],
                [
                  102.87827,
                  14.1869
                ],
                [
                  102.87885,
                  14.18944
                ],
                [
                  102.87434,
                  14.19394
                ],
                [
                  102.87139,
                  14.20357
                ],
                [
                  102.87264,
                  14.21127
                ],
                [
                  102.87595,
                  14.2144
                ],
                [
                  102.88081,
                  14.21607
                ],
                [
                  102.88514,
                  14.22061
                ],
                [
                  102.88583,
                  14.22757
                ],
                [
                  102.8893,
                  14.2331
                ],
                [
                  102.88938,
                  14.24903
                ],
                [
                  102.89037,
                  14.25169
                ],
                [
                  102.89239,
                  14.2531
                ],
                [
                  102.89124,
                  14.25481
                ],
                [
                  102.89137,
                  14.25877
                ],
                [
                  102.89397,
                  14.26395
                ],
                [
                  102.88841,
                  14.26925
                ],
                [
                  102.88983,
                  14.27287
                ],
                [
                  102.88921,
                  14.27369
                ],
                [
                  102.88104,
                  14.2796
                ],
                [
                  102.87929,
                  14.28405
                ],
                [
                  102.87987,
                  14.28711
                ],
                [
                  102.87644,
                  14.28928
                ],
                [
                  102.87646,
                  14.29353
                ],
                [
                  102.87482,
                  14.29453
                ],
                [
                  102.87434,
                  14.29732
                ],
                [
                  102.87254,
                  14.29846
                ],
                [
                  102.87208,
                  14.30054
                ],
                [
                  102.87415,
                  14.30229
                ],
                [
                  102.87267,
                  14.30405
                ],
                [
                  102.87555,
                  14.30772
                ],
                [
                  102.87017,
                  14.31412
                ],
                [
                  102.87064,
                  14.31839
                ],
                [
                  102.87358,
                  14.32488
                ],
                [
                  102.87725,
                  14.32392
                ],
                [
                  102.90361,
                  14.32433
                ],
                [
                  102.90306,
                  14.33789
                ],
                [
                  102.90691,
                  14.34721
                ],
                [
                  102.90234,
                  14.34759
                ],
                [
                  102.90082,
                  14.35409
                ],
                [
                  102.89263,
                  14.35997
                ],
                [
                  102.89228,
                  14.36446
                ],
                [
                  102.89433,
                  14.37052
                ],
                [
                  102.89242,
                  14.37176
                ],
                [
                  102.89174,
                  14.37382
                ],
                [
                  102.89199,
                  14.38825
                ],
                [
                  102.89328,
                  14.39315
                ],
                [
                  102.89687,
                  14.39837
                ],
                [
                  102.8977,
                  14.40369
                ],
                [
                  102.90222,
                  14.40257
                ],
                [
                  102.92634,
                  14.40323
                ],
                [
                  102.92909,
                  14.40243
                ],
                [
                  102.93012,
                  14.40086
                ],
                [
                  102.92995,
                  14.39167
                ],
                [
                  102.92543,
                  14.38751
                ],
                [
                  102.92328,
                  14.38217
                ],
                [
                  102.9232,
                  14.37875
                ],
                [
                  102.91976,
                  14.37407
                ],
                [
                  102.92118,
                  14.36771
                ],
                [
                  102.92303,
                  14.36494
                ],
                [
                  102.92889,
                  14.36422
                ],
                [
                  102.93393,
                  14.35988
                ],
                [
                  102.93539,
                  14.35722
                ],
                [
                  102.93698,
                  14.34517
                ],
                [
                  102.93414,
                  14.34125
                ],
                [
                  102.93411,
                  14.33841
                ],
                [
                  102.9326,
                  14.33581
                ],
                [
                  102.93569,
                  14.32908
                ],
                [
                  102.93993,
                  14.32838
                ],
                [
                  102.94112,
                  14.32618
                ]
              ]
            ]
          }
        },
        {
          "geocode": "340801",
          "tambon": "ต.นาจะหลวย",
          "amphoe": "อ.นาจะหลวย",
          "province": "จ.อุบลราชธานี",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อุทยานแห่งชาติภูจองนายอย",
          "latitude": 14.435199,
          "longitude": 105.25578,
          "sum_rainfall_mm": 148.6,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  105.31149,
                  14.59529
                ],
                [
                  105.31238,
                  14.58888
                ],
                [
                  105.31137,
                  14.57737
                ],
                [
                  105.31542,
                  14.56735
                ],
                [
                  105.31434,
                  14.55644
                ],
                [
                  105.31519,
                  14.5483
                ],
                [
                  105.32006,
                  14.54162
                ],
                [
                  105.31772,
                  14.53623
                ],
                [
                  105.31185,
                  14.52782
                ],
                [
                  105.3115,
                  14.5253
                ],
                [
                  105.32477,
                  14.49826
                ],
                [
                  105.32339,
                  14.49174
                ],
                [
                  105.3192,
                  14.48598
                ],
                [
                  105.31865,
                  14.48072
                ],
                [
                  105.32278,
                  14.47356
                ],
                [
                  105.32293,
                  14.47094
                ],
                [
                  105.321,
                  14.46645
                ],
                [
                  105.3243,
                  14.46517
                ],
                [
                  105.32519,
                  14.46055
                ],
                [
                  105.32382,
                  14.45692
                ],
                [
                  105.32487,
                  14.45372
                ],
                [
                  105.32432,
                  14.44407
                ],
                [
                  105.31804,
                  14.4426
                ],
                [
                  105.31379,
                  14.43551
                ],
                [
                  105.31056,
                  14.43332
                ],
                [
                  105.31475,
                  14.42636
                ],
                [
                  105.32307,
                  14.41989
                ],
                [
                  105.32338,
                  14.41782
                ],
                [
                  105.32016,
                  14.4133
                ],
                [
                  105.31966,
                  14.40878
                ],
                [
                  105.32484,
                  14.40133
                ],
                [
                  105.32424,
                  14.39801
                ],
                [
                  105.32131,
                  14.3982
                ],
                [
                  105.3192,
                  14.39666
                ],
                [
                  105.31136,
                  14.38569
                ],
                [
                  105.30525,
                  14.37538
                ],
                [
                  105.30589,
                  14.37333
                ],
                [
                  105.30422,
                  14.37129
                ],
                [
                  105.30355,
                  14.36614
                ],
                [
                  105.29557,
                  14.36903
                ],
                [
                  105.29182,
                  14.36826
                ],
                [
                  105.29034,
                  14.36587
                ],
                [
                  105.28876,
                  14.36536
                ],
                [
                  105.28434,
                  14.36589
                ],
                [
                  105.28019,
                  14.37368
                ],
                [
                  105.27552,
                  14.37881
                ],
                [
                  105.2739,
                  14.38523
                ],
                [
                  105.27183,
                  14.38873
                ],
                [
                  105.27067,
                  14.39015
                ],
                [
                  105.26075,
                  14.39361
                ],
                [
                  105.25482,
                  14.40113
                ],
                [
                  105.24867,
                  14.40657
                ],
                [
                  105.24021,
                  14.42017
                ],
                [
                  105.23699,
                  14.41853
                ],
                [
                  105.23301,
                  14.42119
                ],
                [
                  105.2224,
                  14.41748
                ],
                [
                  105.21539,
                  14.418
                ],
                [
                  105.20552,
                  14.42643
                ],
                [
                  105.20405,
                  14.43208
                ],
                [
                  105.20023,
                  14.43279
                ],
                [
                  105.19794,
                  14.43169
                ],
                [
                  105.19586,
                  14.43717
                ],
                [
                  105.19381,
                  14.43869
                ],
                [
                  105.1921,
                  14.44468
                ],
                [
                  105.19388,
                  14.44965
                ],
                [
                  105.188,
                  14.4512
                ],
                [
                  105.18881,
                  14.45396
                ],
                [
                  105.18696,
                  14.45564
                ],
                [
                  105.1856,
                  14.4609
                ],
                [
                  105.18224,
                  14.46165
                ],
                [
                  105.18008,
                  14.465
                ],
                [
                  105.17642,
                  14.46739
                ],
                [
                  105.1745,
                  14.4744
                ],
                [
                  105.16831,
                  14.47693
                ],
                [
                  105.16792,
                  14.47903
                ],
                [
                  105.16905,
                  14.48117
                ],
                [
                  105.16419,
                  14.48284
                ],
                [
                  105.16221,
                  14.48214
                ],
                [
                  105.16163,
                  14.48358
                ],
                [
                  105.16185,
                  14.48502
                ],
                [
                  105.16776,
                  14.48676
                ],
                [
                  105.17433,
                  14.49276
                ],
                [
                  105.18061,
                  14.49348
                ],
                [
                  105.17945,
                  14.49853
                ],
                [
                  105.185,
                  14.50443
                ],
                [
                  105.18952,
                  14.51169
                ],
                [
                  105.19651,
                  14.52923
                ],
                [
                  105.20039,
                  14.53605
                ],
                [
                  105.20781,
                  14.54549
                ],
                [
                  105.21569,
                  14.5524
                ],
                [
                  105.22229,
                  14.56321
                ],
                [
                  105.22565,
                  14.56571
                ],
                [
                  105.23251,
                  14.56812
                ],
                [
                  105.23657,
                  14.57425
                ],
                [
                  105.24296,
                  14.57929
                ],
                [
                  105.2459,
                  14.58381
                ],
                [
                  105.25827,
                  14.5914
                ],
                [
                  105.26994,
                  14.59294
                ],
                [
                  105.27462,
                  14.59705
                ],
                [
                  105.28131,
                  14.59885
                ],
                [
                  105.28549,
                  14.59907
                ],
                [
                  105.29317,
                  14.59673
                ],
                [
                  105.31149,
                  14.59529
                ]
              ]
            ]
          }
        },
        {
          "geocode": "340904",
          "tambon": "ต.โดมประดิษฐ์",
          "amphoe": "อ.น้ำยืน",
          "province": "จ.อุบลราชธานี",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.โดมประดิษฐ์",
          "latitude": 14.420149,
          "longitude": 105.17981,
          "sum_rainfall_mm": 160.8,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  105.14919,
                  14.52223
                ],
                [
                  105.14937,
                  14.51629
                ],
                [
                  105.14809,
                  14.51189
                ],
                [
                  105.1467,
                  14.51024
                ],
                [
                  105.14301,
                  14.51017
                ],
                [
                  105.13952,
                  14.50866
                ],
                [
                  105.13897,
                  14.5046
                ],
                [
                  105.14356,
                  14.50255
                ],
                [
                  105.1472,
                  14.49795
                ],
                [
                  105.15117,
                  14.49729
                ],
                [
                  105.14907,
                  14.49386
                ],
                [
                  105.15153,
                  14.49333
                ],
                [
                  105.15341,
                  14.49049
                ],
                [
                  105.15512,
                  14.49165
                ],
                [
                  105.15542,
                  14.48854
                ],
                [
                  105.15698,
                  14.48802
                ],
                [
                  105.1573,
                  14.48624
                ],
                [
                  105.16185,
                  14.48502
                ],
                [
                  105.16185,
                  14.48235
                ],
                [
                  105.16419,
                  14.48284
                ],
                [
                  105.16905,
                  14.48117
                ],
                [
                  105.16792,
                  14.47903
                ],
                [
                  105.16831,
                  14.47693
                ],
                [
                  105.1745,
                  14.4744
                ],
                [
                  105.17642,
                  14.46739
                ],
                [
                  105.18008,
                  14.465
                ],
                [
                  105.18224,
                  14.46165
                ],
                [
                  105.1856,
                  14.4609
                ],
                [
                  105.18696,
                  14.45564
                ],
                [
                  105.18881,
                  14.45396
                ],
                [
                  105.188,
                  14.4512
                ],
                [
                  105.19388,
                  14.44965
                ],
                [
                  105.1921,
                  14.44468
                ],
                [
                  105.19381,
                  14.43869
                ],
                [
                  105.19586,
                  14.43717
                ],
                [
                  105.19794,
                  14.43169
                ],
                [
                  105.20023,
                  14.43279
                ],
                [
                  105.20405,
                  14.43208
                ],
                [
                  105.20552,
                  14.42643
                ],
                [
                  105.21539,
                  14.418
                ],
                [
                  105.2224,
                  14.41748
                ],
                [
                  105.23301,
                  14.42119
                ],
                [
                  105.23699,
                  14.41853
                ],
                [
                  105.24021,
                  14.42017
                ],
                [
                  105.24867,
                  14.40657
                ],
                [
                  105.25482,
                  14.40113
                ],
                [
                  105.26075,
                  14.39361
                ],
                [
                  105.27067,
                  14.39015
                ],
                [
                  105.2739,
                  14.38523
                ],
                [
                  105.27552,
                  14.37881
                ],
                [
                  105.28019,
                  14.37368
                ],
                [
                  105.28434,
                  14.36589
                ],
                [
                  105.28332,
                  14.36421
                ],
                [
                  105.28306,
                  14.35608
                ],
                [
                  105.28143,
                  14.354
                ],
                [
                  105.27679,
                  14.35381
                ],
                [
                  105.26649,
                  14.36098
                ],
                [
                  105.2593,
                  14.36248
                ],
                [
                  105.25132,
                  14.3619
                ],
                [
                  105.24746,
                  14.35855
                ],
                [
                  105.24635,
                  14.3553
                ],
                [
                  105.24169,
                  14.35051
                ],
                [
                  105.23573,
                  14.34982
                ],
                [
                  105.234,
                  14.3451
                ],
                [
                  105.23347,
                  14.33669
                ],
                [
                  105.22626,
                  14.33329
                ],
                [
                  105.22063,
                  14.33699
                ],
                [
                  105.21878,
                  14.33521
                ],
                [
                  105.21629,
                  14.33526
                ],
                [
                  105.21094,
                  14.3422
                ],
                [
                  105.20089,
                  14.34525
                ],
                [
                  105.19727,
                  14.34779
                ],
                [
                  105.19285,
                  14.34699
                ],
                [
                  105.1883,
                  14.34239
                ],
                [
                  105.18491,
                  14.34137
                ],
                [
                  105.1801,
                  14.34189
                ],
                [
                  105.17524,
                  14.34478
                ],
                [
                  105.17138,
                  14.33771
                ],
                [
                  105.1691,
                  14.33573
                ],
                [
                  105.1665,
                  14.32868
                ],
                [
                  105.16859,
                  14.32451
                ],
                [
                  105.1749,
                  14.32187
                ],
                [
                  105.17754,
                  14.31566
                ],
                [
                  105.17554,
                  14.31026
                ],
                [
                  105.17163,
                  14.30857
                ],
                [
                  105.17019,
                  14.30319
                ],
                [
                  105.16095,
                  14.30101
                ],
                [
                  105.1595,
                  14.29301
                ],
                [
                  105.15984,
                  14.28812
                ],
                [
                  105.1531,
                  14.28673
                ],
                [
                  105.15137,
                  14.28542
                ],
                [
                  105.14992,
                  14.27973
                ],
                [
                  105.15026,
                  14.27534
                ],
                [
                  105.15371,
                  14.26915
                ],
                [
                  105.1503,
                  14.26535
                ],
                [
                  105.14437,
                  14.26286
                ],
                [
                  105.14311,
                  14.26136
                ],
                [
                  105.14475,
                  14.25893
                ],
                [
                  105.15387,
                  14.25836
                ],
                [
                  105.15427,
                  14.25634
                ],
                [
                  105.15172,
                  14.24999
                ],
                [
                  105.1456,
                  14.24081
                ],
                [
                  105.13665,
                  14.23392
                ],
                [
                  105.12823,
                  14.22543
                ],
                [
                  105.11553,
                  14.22191
                ],
                [
                  105.11048,
                  14.21502
                ],
                [
                  105.10604,
                  14.21288
                ],
                [
                  105.09319,
                  14.21532
                ],
                [
                  105.08485,
                  14.20943
                ],
                [
                  105.08155,
                  14.20989
                ],
                [
                  105.07559,
                  14.21295
                ],
                [
                  105.05049,
                  14.21464
                ],
                [
                  105.04781,
                  14.21839
                ],
                [
                  105.04827,
                  14.22053
                ],
                [
                  105.04613,
                  14.22229
                ],
                [
                  105.0459,
                  14.22711
                ],
                [
                  105.04169,
                  14.22757
                ],
                [
                  105.0387,
                  14.22933
                ],
                [
                  105.0358,
                  14.23208
                ],
                [
                  105.03243,
                  14.23346
                ],
                [
                  105.03082,
                  14.23591
                ],
                [
                  105.03105,
                  14.23767
                ],
                [
                  105.02615,
                  14.23752
                ],
                [
                  105.0221,
                  14.24203
                ],
                [
                  105.02034,
                  14.24892
                ],
                [
                  105.0224,
                  14.25675
                ],
                [
                  105.02017,
                  14.25987
                ],
                [
                  105.02056,
                  14.26442
                ],
                [
                  105.01574,
                  14.27134
                ],
                [
                  105.01582,
                  14.27635
                ],
                [
                  105.0128,
                  14.27875
                ],
                [
                  105.01047,
                  14.28433
                ],
                [
                  105.0078,
                  14.28546
                ],
                [
                  105.0053,
                  14.28988
                ],
                [
                  105.00148,
                  14.30483
                ],
                [
                  104.99129,
                  14.311
                ],
                [
                  104.98424,
                  14.31891
                ],
                [
                  104.98466,
                  14.32051
                ],
                [
                  104.99111,
                  14.32267
                ],
                [
                  104.99234,
                  14.32525
                ],
                [
                  104.99321,
                  14.32951
                ],
                [
                  104.99239,
                  14.33297
                ],
                [
                  104.99279,
                  14.34193
                ],
                [
                  104.99988,
                  14.35575
                ],
                [
                  105.00144,
                  14.36237
                ],
                [
                  105.00041,
                  14.36733
                ],
                [
                  105.00463,
                  14.38543
                ],
                [
                  105.00681,
                  14.39058
                ],
                [
                  105.01106,
                  14.3948
                ],
                [
                  105.0131,
                  14.39944
                ],
                [
                  105.00969,
                  14.41298
                ],
                [
                  105.00959,
                  14.41959
                ],
                [
                  105.01096,
                  14.42517
                ],
                [
                  105.01277,
                  14.42794
                ],
                [
                  105.01587,
                  14.43837
                ],
                [
                  105.02724,
                  14.44275
                ],
                [
                  105.02954,
                  14.44262
                ],
                [
                  105.03147,
                  14.44457
                ],
                [
                  105.03285,
                  14.44843
                ],
                [
                  105.04195,
                  14.44865
                ],
                [
                  105.04847,
                  14.45057
                ],
                [
                  105.05008,
                  14.44939
                ],
                [
                  105.05147,
                  14.45003
                ],
                [
                  105.05367,
                  14.44864
                ],
                [
                  105.05483,
                  14.4491
                ],
                [
                  105.05542,
                  14.45155
                ],
                [
                  105.05912,
                  14.45411
                ],
                [
                  105.06143,
                  14.4595
                ],
                [
                  105.0644,
                  14.4604
                ],
                [
                  105.06348,
                  14.46269
                ],
                [
                  105.06605,
                  14.46761
                ],
                [
                  105.06872,
                  14.4665
                ],
                [
                  105.07013,
                  14.46862
                ],
                [
                  105.07207,
                  14.46927
                ],
                [
                  105.0756,
                  14.47857
                ],
                [
                  105.08007,
                  14.48162
                ],
                [
                  105.08334,
                  14.4863
                ],
                [
                  105.08564,
                  14.48534
                ],
                [
                  105.0868,
                  14.48762
                ],
                [
                  105.09902,
                  14.49421
                ],
                [
                  105.09793,
                  14.50371
                ],
                [
                  105.10075,
                  14.5127
                ],
                [
                  105.10378,
                  14.51725
                ],
                [
                  105.10542,
                  14.51818
                ],
                [
                  105.11176,
                  14.51828
                ],
                [
                  105.11509,
                  14.52265
                ],
                [
                  105.12096,
                  14.52155
                ],
                [
                  105.12484,
                  14.51937
                ],
                [
                  105.12901,
                  14.52098
                ],
                [
                  105.13644,
                  14.52119
                ],
                [
                  105.14094,
                  14.52405
                ],
                [
                  105.14919,
                  14.52223
                ]
              ]
            ]
          }
        },
        {
          "geocode": "101101",
          "tambon": "ต.ลาดกระบัง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลำปลาทิว ลาดกระบัง",
          "latitude": 13.7407,
          "longitude": 100.79468,
          "sum_rainfall_mm": 118.19999999999999,
          "observed_at": "2026-09-23T18:00:00+07:00"
        }
      ],
      "area_nearby": [
        {
          "geocode": "180302",
          "tambon": "ต.มะขามเฒ่า",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.มะขามเฒ่า",
          "latitude": 15.222455,
          "longitude": 100.062221,
          "sum_rainfall_mm": 179.0,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.06268,
                  15.25821
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.05798,
                  15.2481
                ],
                [
                  100.06031,
                  15.24134
                ],
                [
                  100.06541,
                  15.23201
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.05694,
                  15.19411
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05444,
                  15.18366
                ],
                [
                  100.0445,
                  15.18318
                ],
                [
                  100.03811,
                  15.19776
                ],
                [
                  100.03342,
                  15.20128
                ],
                [
                  100.02295,
                  15.21573
                ],
                [
                  100.02074,
                  15.21365
                ],
                [
                  100.01835,
                  15.21325
                ],
                [
                  100.00699,
                  15.21904
                ],
                [
                  100.0141,
                  15.2195
                ],
                [
                  100.00545,
                  15.22108
                ],
                [
                  100.00037,
                  15.2235
                ],
                [
                  99.99845,
                  15.23338
                ],
                [
                  100.00412,
                  15.24509
                ],
                [
                  100.02238,
                  15.24314
                ],
                [
                  100.02003,
                  15.25097
                ],
                [
                  100.02042,
                  15.25341
                ],
                [
                  100.02584,
                  15.25999
                ],
                [
                  100.0351,
                  15.26278
                ],
                [
                  100.03759,
                  15.25827
                ],
                [
                  100.04144,
                  15.2557
                ],
                [
                  100.04541,
                  15.25693
                ],
                [
                  100.04488,
                  15.2617
                ],
                [
                  100.04693,
                  15.2645
                ],
                [
                  100.05185,
                  15.26329
                ],
                [
                  100.0584,
                  15.26375
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240308",
          "tambon": "ต.ดอนฉิมพลี",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.ดอนฉิมพลี",
          "latitude": 13.90535,
          "longitude": 100.97028,
          "sum_rainfall_mm": 96.2,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99261,
                  13.97048
                ],
                [
                  100.98814,
                  13.92966
                ],
                [
                  100.97842,
                  13.86322
                ],
                [
                  100.97807,
                  13.84571
                ],
                [
                  100.97512,
                  13.84656
                ],
                [
                  100.97276,
                  13.84869
                ],
                [
                  100.95762,
                  13.84627
                ],
                [
                  100.95516,
                  13.84399
                ],
                [
                  100.94978,
                  13.84438
                ],
                [
                  100.94584,
                  13.84593
                ],
                [
                  100.94163,
                  13.84501
                ],
                [
                  100.93777,
                  13.84607
                ],
                [
                  100.93687,
                  13.84765
                ],
                [
                  100.93754,
                  13.85128
                ],
                [
                  100.93629,
                  13.85172
                ],
                [
                  100.9361,
                  13.85513
                ],
                [
                  100.94828,
                  13.96568
                ],
                [
                  100.98277,
                  13.97036
                ],
                [
                  100.99261,
                  13.97048
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200407",
          "tambon": "ต.ตะเคียนเตี้ย",
          "amphoe": "อ.บางละมุง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านนาวัง",
          "latitude": 12.998358,
          "longitude": 101.005843,
          "sum_rainfall_mm": 120.5,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99581,
                  13.04105
                ],
                [
                  101.00496,
                  13.04008
                ],
                [
                  101.00863,
                  13.0381
                ],
                [
                  101.01025,
                  13.03451
                ],
                [
                  101.01411,
                  13.03228
                ],
                [
                  101.01522,
                  13.02756
                ],
                [
                  101.01964,
                  13.02149
                ],
                [
                  101.02153,
                  13.02245
                ],
                [
                  101.02545,
                  13.02924
                ],
                [
                  101.02693,
                  13.02491
                ],
                [
                  101.0284,
                  13.0239
                ],
                [
                  101.03245,
                  13.02385
                ],
                [
                  101.03389,
                  13.02562
                ],
                [
                  101.0363,
                  13.02396
                ],
                [
                  101.04035,
                  13.02602
                ],
                [
                  101.04619,
                  13.02456
                ],
                [
                  101.05601,
                  13.02036
                ],
                [
                  101.06271,
                  13.01058
                ],
                [
                  101.06671,
                  13.0078
                ],
                [
                  101.06942,
                  13.00787
                ],
                [
                  101.07467,
                  13.00203
                ],
                [
                  101.07776,
                  13.00176
                ],
                [
                  101.08525,
                  13.00539
                ],
                [
                  101.08608,
                  13.00197
                ],
                [
                  101.08843,
                  12.99972
                ],
                [
                  101.07658,
                  12.99951
                ],
                [
                  101.07128,
                  13.001
                ],
                [
                  101.06621,
                  12.99984
                ],
                [
                  101.06406,
                  13.00107
                ],
                [
                  101.05737,
                  12.99281
                ],
                [
                  101.05416,
                  12.99398
                ],
                [
                  101.04937,
                  12.99174
                ],
                [
                  101.04436,
                  12.9974
                ],
                [
                  101.03946,
                  12.99974
                ],
                [
                  101.03301,
                  12.99482
                ],
                [
                  101.02922,
                  12.98853
                ],
                [
                  101.02466,
                  12.98576
                ],
                [
                  101.01777,
                  12.97153
                ],
                [
                  101.01504,
                  12.97639
                ],
                [
                  101.01046,
                  12.97905
                ],
                [
                  101.002,
                  12.98777
                ],
                [
                  101.00117,
                  12.99611
                ],
                [
                  100.99668,
                  13.00227
                ],
                [
                  100.98856,
                  13.00244
                ],
                [
                  100.98568,
                  12.99633
                ],
                [
                  100.98332,
                  12.99401
                ],
                [
                  100.9715,
                  13.00264
                ],
                [
                  100.96755,
                  13.00211
                ],
                [
                  100.96758,
                  12.99949
                ],
                [
                  100.96478,
                  12.99793
                ],
                [
                  100.96044,
                  12.99897
                ],
                [
                  100.95214,
                  12.99683
                ],
                [
                  100.94329,
                  12.99857
                ],
                [
                  100.94798,
                  13.00634
                ],
                [
                  100.95446,
                  13.01025
                ],
                [
                  100.9556,
                  13.01242
                ],
                [
                  100.95522,
                  13.02128
                ],
                [
                  100.95042,
                  13.02181
                ],
                [
                  100.94797,
                  13.02601
                ],
                [
                  100.9488,
                  13.03689
                ],
                [
                  100.94509,
                  13.0377
                ],
                [
                  100.94457,
                  13.03971
                ],
                [
                  100.94259,
                  13.03993
                ],
                [
                  100.94242,
                  13.04087
                ],
                [
                  100.94584,
                  13.04148
                ],
                [
                  100.94785,
                  13.04332
                ],
                [
                  100.94974,
                  13.04317
                ],
                [
                  100.95102,
                  13.04562
                ],
                [
                  100.95489,
                  13.04684
                ],
                [
                  100.9612,
                  13.05216
                ],
                [
                  100.96641,
                  13.05206
                ],
                [
                  100.96975,
                  13.05375
                ],
                [
                  100.97856,
                  13.05212
                ],
                [
                  100.98523,
                  13.04841
                ],
                [
                  100.99166,
                  13.04154
                ],
                [
                  100.99581,
                  13.04105
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200403",
          "tambon": "ต.หนองปลาไหล",
          "amphoe": "อ.บางละมุง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชุมชนชัยพรราชา",
          "latitude": 12.96831,
          "longitude": 100.92304,
          "sum_rainfall_mm": 159.5,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99668,
                  13.00227
                ],
                [
                  101.00117,
                  12.99611
                ],
                [
                  101.002,
                  12.98777
                ],
                [
                  101.01046,
                  12.97905
                ],
                [
                  101.01504,
                  12.97639
                ],
                [
                  101.01777,
                  12.97153
                ],
                [
                  101.0143,
                  12.96722
                ],
                [
                  101.00891,
                  12.96431
                ],
                [
                  101.00195,
                  12.96425
                ],
                [
                  100.99899,
                  12.96255
                ],
                [
                  100.99663,
                  12.96257
                ],
                [
                  100.9865,
                  12.97881
                ],
                [
                  100.98336,
                  12.98062
                ],
                [
                  100.97729,
                  12.98172
                ],
                [
                  100.96944,
                  12.97813
                ],
                [
                  100.97578,
                  12.97579
                ],
                [
                  100.97483,
                  12.97502
                ],
                [
                  100.9708,
                  12.97594
                ],
                [
                  100.9694,
                  12.97483
                ],
                [
                  100.96969,
                  12.97334
                ],
                [
                  100.97648,
                  12.97158
                ],
                [
                  100.96908,
                  12.97037
                ],
                [
                  100.96537,
                  12.97088
                ],
                [
                  100.96858,
                  12.96624
                ],
                [
                  100.96684,
                  12.96207
                ],
                [
                  100.96175,
                  12.96461
                ],
                [
                  100.96064,
                  12.96651
                ],
                [
                  100.95932,
                  12.96622
                ],
                [
                  100.95845,
                  12.96373
                ],
                [
                  100.96929,
                  12.95692
                ],
                [
                  100.96773,
                  12.95362
                ],
                [
                  100.96042,
                  12.94661
                ],
                [
                  100.95464,
                  12.95502
                ],
                [
                  100.95319,
                  12.96233
                ],
                [
                  100.95118,
                  12.96634
                ],
                [
                  100.94829,
                  12.96747
                ],
                [
                  100.94566,
                  12.96601
                ],
                [
                  100.94194,
                  12.96581
                ],
                [
                  100.93617,
                  12.96789
                ],
                [
                  100.92947,
                  12.96472
                ],
                [
                  100.92676,
                  12.96526
                ],
                [
                  100.9205,
                  12.96922
                ],
                [
                  100.9367,
                  12.9976
                ],
                [
                  100.94428,
                  12.9986
                ],
                [
                  100.95214,
                  12.99683
                ],
                [
                  100.96044,
                  12.99897
                ],
                [
                  100.96478,
                  12.99793
                ],
                [
                  100.96758,
                  12.99949
                ],
                [
                  100.96755,
                  13.00211
                ],
                [
                  100.9715,
                  13.00264
                ],
                [
                  100.98332,
                  12.99401
                ],
                [
                  100.98568,
                  12.99633
                ],
                [
                  100.98856,
                  13.00244
                ],
                [
                  100.99668,
                  13.00227
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200708",
          "tambon": "ต.บ่อวิน",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพสต.บ่อวิน",
          "latitude": 13.05505,
          "longitude": 101.09782,
          "sum_rainfall_mm": 117.60000000000001,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.1051,
                  13.1048
                ],
                [
                  101.10861,
                  13.09394
                ],
                [
                  101.11462,
                  13.08789
                ],
                [
                  101.11883,
                  13.07968
                ],
                [
                  101.12253,
                  13.07763
                ],
                [
                  101.12462,
                  13.07263
                ],
                [
                  101.13884,
                  13.05151
                ],
                [
                  101.13792,
                  13.04677
                ],
                [
                  101.14717,
                  13.04585
                ],
                [
                  101.15364,
                  13.04758
                ],
                [
                  101.15834,
                  13.04723
                ],
                [
                  101.16192,
                  13.04133
                ],
                [
                  101.16354,
                  13.0327
                ],
                [
                  101.1671,
                  13.02462
                ],
                [
                  101.17339,
                  13.02066
                ],
                [
                  101.17112,
                  13.0163
                ],
                [
                  101.17429,
                  13.01399
                ],
                [
                  101.17333,
                  13.01058
                ],
                [
                  101.17106,
                  13.01114
                ],
                [
                  101.16739,
                  13.01667
                ],
                [
                  101.16647,
                  13.01607
                ],
                [
                  101.16665,
                  13.01202
                ],
                [
                  101.16571,
                  13.01059
                ],
                [
                  101.16463,
                  13.01132
                ],
                [
                  101.16258,
                  13.01777
                ],
                [
                  101.16073,
                  13.01626
                ],
                [
                  101.15763,
                  13.0161
                ],
                [
                  101.15525,
                  13.00801
                ],
                [
                  101.15708,
                  13.00423
                ],
                [
                  101.15495,
                  13.0018
                ],
                [
                  101.15063,
                  13.00401
                ],
                [
                  101.14778,
                  13.00715
                ],
                [
                  101.14292,
                  13.00778
                ],
                [
                  101.14067,
                  13.0121
                ],
                [
                  101.13697,
                  13.01492
                ],
                [
                  101.132,
                  13.01199
                ],
                [
                  101.12478,
                  13.01251
                ],
                [
                  101.12358,
                  13.01142
                ],
                [
                  101.12061,
                  13.01562
                ],
                [
                  101.10904,
                  13.0241
                ],
                [
                  101.10635,
                  13.02383
                ],
                [
                  101.10419,
                  13.02093
                ],
                [
                  101.10262,
                  13.02068
                ],
                [
                  101.09982,
                  13.02181
                ],
                [
                  101.09654,
                  13.02621
                ],
                [
                  101.08991,
                  13.02754
                ],
                [
                  101.08692,
                  13.03048
                ],
                [
                  101.0771,
                  13.02235
                ],
                [
                  101.07021,
                  13.01035
                ],
                [
                  101.06671,
                  13.0078
                ],
                [
                  101.06146,
                  13.01191
                ],
                [
                  101.05542,
                  13.0208
                ],
                [
                  101.04619,
                  13.02456
                ],
                [
                  101.03902,
                  13.02576
                ],
                [
                  101.03914,
                  13.03553
                ],
                [
                  101.02705,
                  13.03895
                ],
                [
                  101.02425,
                  13.04165
                ],
                [
                  101.02637,
                  13.0474
                ],
                [
                  101.02711,
                  13.0602
                ],
                [
                  101.03055,
                  13.06602
                ],
                [
                  101.03796,
                  13.06732
                ],
                [
                  101.03994,
                  13.06255
                ],
                [
                  101.04412,
                  13.05978
                ],
                [
                  101.04318,
                  13.06648
                ],
                [
                  101.03874,
                  13.07543
                ],
                [
                  101.05356,
                  13.07234
                ],
                [
                  101.05681,
                  13.07026
                ],
                [
                  101.05906,
                  13.07076
                ],
                [
                  101.06083,
                  13.07347
                ],
                [
                  101.05661,
                  13.07629
                ],
                [
                  101.05485,
                  13.08281
                ],
                [
                  101.0558,
                  13.0887
                ],
                [
                  101.05521,
                  13.09909
                ],
                [
                  101.05873,
                  13.10064
                ],
                [
                  101.06075,
                  13.10325
                ],
                [
                  101.06814,
                  13.09991
                ],
                [
                  101.07081,
                  13.10386
                ],
                [
                  101.07488,
                  13.10191
                ],
                [
                  101.07777,
                  13.10526
                ],
                [
                  101.08537,
                  13.10457
                ],
                [
                  101.08565,
                  13.101
                ],
                [
                  101.08255,
                  13.09477
                ],
                [
                  101.08737,
                  13.09085
                ],
                [
                  101.09132,
                  13.09032
                ],
                [
                  101.09202,
                  13.0905
                ],
                [
                  101.09105,
                  13.09438
                ],
                [
                  101.09579,
                  13.10574
                ],
                [
                  101.1051,
                  13.1048
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200902",
          "tambon": "ต.นาจอมเทียน",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
          "latitude": 12.768159,
          "longitude": 100.97308,
          "sum_rainfall_mm": 192.60000000000008,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.91165,
                  12.86443
                ],
                [
                  100.91707,
                  12.8566
                ],
                [
                  100.91854,
                  12.85252
                ],
                [
                  100.92157,
                  12.83451
                ],
                [
                  100.92005,
                  12.82729
                ],
                [
                  100.92049,
                  12.82356
                ],
                [
                  100.92327,
                  12.81909
                ],
                [
                  100.92885,
                  12.81352
                ],
                [
                  100.9334,
                  12.80986
                ],
                [
                  100.93619,
                  12.80897
                ],
                [
                  100.93798,
                  12.79943
                ],
                [
                  100.94017,
                  12.79665
                ],
                [
                  100.94177,
                  12.79567
                ],
                [
                  100.94534,
                  12.79604
                ],
                [
                  100.94776,
                  12.794
                ],
                [
                  100.95385,
                  12.78057
                ],
                [
                  100.95405,
                  12.77672
                ],
                [
                  100.9599,
                  12.77162
                ],
                [
                  100.96668,
                  12.7756
                ],
                [
                  100.97284,
                  12.77204
                ],
                [
                  100.97538,
                  12.77254
                ],
                [
                  100.9764,
                  12.76716
                ],
                [
                  100.98165,
                  12.77622
                ],
                [
                  100.98507,
                  12.77725
                ],
                [
                  100.98773,
                  12.77372
                ],
                [
                  100.98822,
                  12.77116
                ],
                [
                  100.98606,
                  12.76191
                ],
                [
                  100.97818,
                  12.7576
                ],
                [
                  100.97304,
                  12.74825
                ],
                [
                  100.96354,
                  12.74167
                ],
                [
                  100.96285,
                  12.737
                ],
                [
                  100.95937,
                  12.73941
                ],
                [
                  100.96126,
                  12.74325
                ],
                [
                  100.9616,
                  12.74757
                ],
                [
                  100.95918,
                  12.75006
                ],
                [
                  100.95959,
                  12.75142
                ],
                [
                  100.95735,
                  12.75549
                ],
                [
                  100.95916,
                  12.75982
                ],
                [
                  100.95473,
                  12.75843
                ],
                [
                  100.95294,
                  12.75875
                ],
                [
                  100.95238,
                  12.76048
                ],
                [
                  100.95007,
                  12.75982
                ],
                [
                  100.94651,
                  12.75744
                ],
                [
                  100.94691,
                  12.75383
                ],
                [
                  100.94426,
                  12.75311
                ],
                [
                  100.93932,
                  12.75361
                ],
                [
                  100.93216,
                  12.75817
                ],
                [
                  100.92932,
                  12.75824
                ],
                [
                  100.93087,
                  12.76768
                ],
                [
                  100.93079,
                  12.77634
                ],
                [
                  100.93307,
                  12.77993
                ],
                [
                  100.92574,
                  12.77907
                ],
                [
                  100.92694,
                  12.77682
                ],
                [
                  100.92579,
                  12.77434
                ],
                [
                  100.91954,
                  12.77581
                ],
                [
                  100.91365,
                  12.7748
                ],
                [
                  100.9037,
                  12.77985
                ],
                [
                  100.90545,
                  12.78641
                ],
                [
                  100.90803,
                  12.79069
                ],
                [
                  100.90942,
                  12.79942
                ],
                [
                  100.91057,
                  12.80043
                ],
                [
                  100.91162,
                  12.80551
                ],
                [
                  100.91291,
                  12.80612
                ],
                [
                  100.91211,
                  12.81243
                ],
                [
                  100.91294,
                  12.81498
                ],
                [
                  100.91198,
                  12.81546
                ],
                [
                  100.90849,
                  12.8295
                ],
                [
                  100.90343,
                  12.84364
                ],
                [
                  100.89219,
                  12.86525
                ],
                [
                  100.91165,
                  12.86443
                ]
              ]
            ]
          }
        },
        {
          "geocode": "270605",
          "tambon": "ต.ท่าข้าม",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพสต.ท่าข้าม",
          "latitude": 13.62763,
          "longitude": 102.57487,
          "sum_rainfall_mm": 176.40000000000003,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.54852,
                  13.66008
                ],
                [
                  102.54835,
                  13.65885
                ],
                [
                  102.55027,
                  13.65808
                ],
                [
                  102.5553,
                  13.65188
                ],
                [
                  102.55746,
                  13.65179
                ],
                [
                  102.55879,
                  13.64822
                ],
                [
                  102.56095,
                  13.64924
                ],
                [
                  102.56135,
                  13.64696
                ],
                [
                  102.56355,
                  13.64755
                ],
                [
                  102.56689,
                  13.64437
                ],
                [
                  102.56954,
                  13.64428
                ],
                [
                  102.57071,
                  13.64267
                ],
                [
                  102.57109,
                  13.63676
                ],
                [
                  102.57541,
                  13.63004
                ],
                [
                  102.57884,
                  13.63011
                ],
                [
                  102.57885,
                  13.62863
                ],
                [
                  102.58109,
                  13.62798
                ],
                [
                  102.58407,
                  13.63015
                ],
                [
                  102.58679,
                  13.62946
                ],
                [
                  102.59004,
                  13.62508
                ],
                [
                  102.59239,
                  13.62492
                ],
                [
                  102.59349,
                  13.62608
                ],
                [
                  102.59482,
                  13.623
                ],
                [
                  102.59989,
                  13.62304
                ],
                [
                  102.60171,
                  13.62175
                ],
                [
                  102.60215,
                  13.6196
                ],
                [
                  102.60428,
                  13.61983
                ],
                [
                  102.60719,
                  13.61651
                ],
                [
                  102.61044,
                  13.61537
                ],
                [
                  102.6113,
                  13.61699
                ],
                [
                  102.6136,
                  13.61622
                ],
                [
                  102.61418,
                  13.61405
                ],
                [
                  102.6212,
                  13.61319
                ],
                [
                  102.62455,
                  13.61064
                ],
                [
                  102.62418,
                  13.60901
                ],
                [
                  102.62162,
                  13.6092
                ],
                [
                  102.62109,
                  13.6079
                ],
                [
                  102.61694,
                  13.60809
                ],
                [
                  102.6152,
                  13.60613
                ],
                [
                  102.61426,
                  13.60661
                ],
                [
                  102.61511,
                  13.60837
                ],
                [
                  102.61411,
                  13.60904
                ],
                [
                  102.61254,
                  13.60616
                ],
                [
                  102.61,
                  13.60546
                ],
                [
                  102.60659,
                  13.60677
                ],
                [
                  102.59818,
                  13.60713
                ],
                [
                  102.59545,
                  13.60854
                ],
                [
                  102.59246,
                  13.60724
                ],
                [
                  102.58819,
                  13.60777
                ],
                [
                  102.5744,
                  13.60348
                ],
                [
                  102.57281,
                  13.60464
                ],
                [
                  102.56095,
                  13.60658
                ],
                [
                  102.56023,
                  13.60707
                ],
                [
                  102.56145,
                  13.60913
                ],
                [
                  102.55867,
                  13.60966
                ],
                [
                  102.55606,
                  13.60877
                ],
                [
                  102.54984,
                  13.61472
                ],
                [
                  102.54522,
                  13.61743
                ],
                [
                  102.54027,
                  13.61719
                ],
                [
                  102.5336,
                  13.61435
                ],
                [
                  102.52586,
                  13.61403
                ],
                [
                  102.51953,
                  13.61508
                ],
                [
                  102.51583,
                  13.61364
                ],
                [
                  102.50053,
                  13.6702
                ],
                [
                  102.50367,
                  13.67221
                ],
                [
                  102.50522,
                  13.67509
                ],
                [
                  102.50998,
                  13.67404
                ],
                [
                  102.51133,
                  13.67278
                ],
                [
                  102.5144,
                  13.67297
                ],
                [
                  102.51376,
                  13.67122
                ],
                [
                  102.51534,
                  13.67039
                ],
                [
                  102.51949,
                  13.6726
                ],
                [
                  102.52224,
                  13.66989
                ],
                [
                  102.52202,
                  13.66854
                ],
                [
                  102.52505,
                  13.66725
                ],
                [
                  102.5302,
                  13.66709
                ],
                [
                  102.5341,
                  13.66298
                ],
                [
                  102.54076,
                  13.66166
                ],
                [
                  102.5412,
                  13.6606
                ],
                [
                  102.54303,
                  13.66123
                ],
                [
                  102.54459,
                  13.65968
                ],
                [
                  102.54634,
                  13.66078
                ],
                [
                  102.54852,
                  13.66008
                ]
              ]
            ]
          }
        },
        {
          "geocode": "310607",
          "tambon": "ต.หนองแวง",
          "amphoe": "อ.ละหานทราย",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ตย.๕ (บาระแนะ)",
          "latitude": 14.249989,
          "longitude": 102.97801,
          "sum_rainfall_mm": 181.20000000000002,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.94112,
                  14.32618
                ],
                [
                  102.94541,
                  14.32005
                ],
                [
                  102.95187,
                  14.31551
                ],
                [
                  102.95473,
                  14.31657
                ],
                [
                  102.95716,
                  14.31615
                ],
                [
                  102.95852,
                  14.31842
                ],
                [
                  102.96011,
                  14.31891
                ],
                [
                  102.96481,
                  14.31625
                ],
                [
                  102.96843,
                  14.31608
                ],
                [
                  102.96939,
                  14.30593
                ],
                [
                  102.97359,
                  14.30193
                ],
                [
                  102.97518,
                  14.29741
                ],
                [
                  102.98448,
                  14.29085
                ],
                [
                  102.98758,
                  14.28481
                ],
                [
                  103.00129,
                  14.27542
                ],
                [
                  103.00644,
                  14.27307
                ],
                [
                  103.01091,
                  14.26737
                ],
                [
                  103.0197,
                  14.26447
                ],
                [
                  103.02795,
                  14.25958
                ],
                [
                  103.03011,
                  14.25774
                ],
                [
                  103.03303,
                  14.25209
                ],
                [
                  103.03839,
                  14.25147
                ],
                [
                  103.0382,
                  14.24589
                ],
                [
                  103.03595,
                  14.24138
                ],
                [
                  103.03265,
                  14.24034
                ],
                [
                  103.02331,
                  14.23014
                ],
                [
                  103.02016,
                  14.22888
                ],
                [
                  103.01705,
                  14.23219
                ],
                [
                  103.01268,
                  14.23148
                ],
                [
                  103.01103,
                  14.22916
                ],
                [
                  103.01093,
                  14.22599
                ],
                [
                  103.00077,
                  14.21801
                ],
                [
                  102.99889,
                  14.21407
                ],
                [
                  102.98903,
                  14.21314
                ],
                [
                  102.98628,
                  14.21489
                ],
                [
                  102.97029,
                  14.21
                ],
                [
                  102.96305,
                  14.21208
                ],
                [
                  102.95387,
                  14.20814
                ],
                [
                  102.95191,
                  14.2053
                ],
                [
                  102.9571,
                  14.19914
                ],
                [
                  102.9561,
                  14.19605
                ],
                [
                  102.95154,
                  14.19543
                ],
                [
                  102.94554,
                  14.19882
                ],
                [
                  102.94013,
                  14.19637
                ],
                [
                  102.93852,
                  14.19421
                ],
                [
                  102.94111,
                  14.18899
                ],
                [
                  102.9399,
                  14.18478
                ],
                [
                  102.92634,
                  14.17428
                ],
                [
                  102.91888,
                  14.17196
                ],
                [
                  102.91,
                  14.16721
                ],
                [
                  102.90526,
                  14.16649
                ],
                [
                  102.90115,
                  14.17227
                ],
                [
                  102.89282,
                  14.17369
                ],
                [
                  102.88019,
                  14.17891
                ],
                [
                  102.87827,
                  14.1869
                ],
                [
                  102.87885,
                  14.18944
                ],
                [
                  102.87434,
                  14.19394
                ],
                [
                  102.87139,
                  14.20357
                ],
                [
                  102.87264,
                  14.21127
                ],
                [
                  102.87595,
                  14.2144
                ],
                [
                  102.88081,
                  14.21607
                ],
                [
                  102.88514,
                  14.22061
                ],
                [
                  102.88583,
                  14.22757
                ],
                [
                  102.8893,
                  14.2331
                ],
                [
                  102.88938,
                  14.24903
                ],
                [
                  102.89037,
                  14.25169
                ],
                [
                  102.89239,
                  14.2531
                ],
                [
                  102.89124,
                  14.25481
                ],
                [
                  102.89137,
                  14.25877
                ],
                [
                  102.89397,
                  14.26395
                ],
                [
                  102.88841,
                  14.26925
                ],
                [
                  102.88983,
                  14.27287
                ],
                [
                  102.88921,
                  14.27369
                ],
                [
                  102.88104,
                  14.2796
                ],
                [
                  102.87929,
                  14.28405
                ],
                [
                  102.87987,
                  14.28711
                ],
                [
                  102.87644,
                  14.28928
                ],
                [
                  102.87646,
                  14.29353
                ],
                [
                  102.87482,
                  14.29453
                ],
                [
                  102.87434,
                  14.29732
                ],
                [
                  102.87254,
                  14.29846
                ],
                [
                  102.87208,
                  14.30054
                ],
                [
                  102.87415,
                  14.30229
                ],
                [
                  102.87267,
                  14.30405
                ],
                [
                  102.87555,
                  14.30772
                ],
                [
                  102.87017,
                  14.31412
                ],
                [
                  102.87064,
                  14.31839
                ],
                [
                  102.87358,
                  14.32488
                ],
                [
                  102.87725,
                  14.32392
                ],
                [
                  102.90361,
                  14.32433
                ],
                [
                  102.90306,
                  14.33789
                ],
                [
                  102.90691,
                  14.34721
                ],
                [
                  102.90234,
                  14.34759
                ],
                [
                  102.90082,
                  14.35409
                ],
                [
                  102.89263,
                  14.35997
                ],
                [
                  102.89228,
                  14.36446
                ],
                [
                  102.89433,
                  14.37052
                ],
                [
                  102.89242,
                  14.37176
                ],
                [
                  102.89174,
                  14.37382
                ],
                [
                  102.89199,
                  14.38825
                ],
                [
                  102.89328,
                  14.39315
                ],
                [
                  102.89687,
                  14.39837
                ],
                [
                  102.8977,
                  14.40369
                ],
                [
                  102.90222,
                  14.40257
                ],
                [
                  102.92634,
                  14.40323
                ],
                [
                  102.92909,
                  14.40243
                ],
                [
                  102.93012,
                  14.40086
                ],
                [
                  102.92995,
                  14.39167
                ],
                [
                  102.92543,
                  14.38751
                ],
                [
                  102.92328,
                  14.38217
                ],
                [
                  102.9232,
                  14.37875
                ],
                [
                  102.91976,
                  14.37407
                ],
                [
                  102.92118,
                  14.36771
                ],
                [
                  102.92303,
                  14.36494
                ],
                [
                  102.92889,
                  14.36422
                ],
                [
                  102.93393,
                  14.35988
                ],
                [
                  102.93539,
                  14.35722
                ],
                [
                  102.93698,
                  14.34517
                ],
                [
                  102.93414,
                  14.34125
                ],
                [
                  102.93411,
                  14.33841
                ],
                [
                  102.9326,
                  14.33581
                ],
                [
                  102.93569,
                  14.32908
                ],
                [
                  102.93993,
                  14.32838
                ],
                [
                  102.94112,
                  14.32618
                ]
              ]
            ]
          }
        },
        {
          "geocode": "340801",
          "tambon": "ต.นาจะหลวย",
          "amphoe": "อ.นาจะหลวย",
          "province": "จ.อุบลราชธานี",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อุทยานแห่งชาติภูจองนายอย",
          "latitude": 14.435199,
          "longitude": 105.25578,
          "sum_rainfall_mm": 148.6,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  105.31149,
                  14.59529
                ],
                [
                  105.31238,
                  14.58888
                ],
                [
                  105.31137,
                  14.57737
                ],
                [
                  105.31542,
                  14.56735
                ],
                [
                  105.31434,
                  14.55644
                ],
                [
                  105.31519,
                  14.5483
                ],
                [
                  105.32006,
                  14.54162
                ],
                [
                  105.31772,
                  14.53623
                ],
                [
                  105.31185,
                  14.52782
                ],
                [
                  105.3115,
                  14.5253
                ],
                [
                  105.32477,
                  14.49826
                ],
                [
                  105.32339,
                  14.49174
                ],
                [
                  105.3192,
                  14.48598
                ],
                [
                  105.31865,
                  14.48072
                ],
                [
                  105.32278,
                  14.47356
                ],
                [
                  105.32293,
                  14.47094
                ],
                [
                  105.321,
                  14.46645
                ],
                [
                  105.3243,
                  14.46517
                ],
                [
                  105.32519,
                  14.46055
                ],
                [
                  105.32382,
                  14.45692
                ],
                [
                  105.32487,
                  14.45372
                ],
                [
                  105.32432,
                  14.44407
                ],
                [
                  105.31804,
                  14.4426
                ],
                [
                  105.31379,
                  14.43551
                ],
                [
                  105.31056,
                  14.43332
                ],
                [
                  105.31475,
                  14.42636
                ],
                [
                  105.32307,
                  14.41989
                ],
                [
                  105.32338,
                  14.41782
                ],
                [
                  105.32016,
                  14.4133
                ],
                [
                  105.31966,
                  14.40878
                ],
                [
                  105.32484,
                  14.40133
                ],
                [
                  105.32424,
                  14.39801
                ],
                [
                  105.32131,
                  14.3982
                ],
                [
                  105.3192,
                  14.39666
                ],
                [
                  105.31136,
                  14.38569
                ],
                [
                  105.30525,
                  14.37538
                ],
                [
                  105.30589,
                  14.37333
                ],
                [
                  105.30422,
                  14.37129
                ],
                [
                  105.30355,
                  14.36614
                ],
                [
                  105.29557,
                  14.36903
                ],
                [
                  105.29182,
                  14.36826
                ],
                [
                  105.29034,
                  14.36587
                ],
                [
                  105.28876,
                  14.36536
                ],
                [
                  105.28434,
                  14.36589
                ],
                [
                  105.28019,
                  14.37368
                ],
                [
                  105.27552,
                  14.37881
                ],
                [
                  105.2739,
                  14.38523
                ],
                [
                  105.27183,
                  14.38873
                ],
                [
                  105.27067,
                  14.39015
                ],
                [
                  105.26075,
                  14.39361
                ],
                [
                  105.25482,
                  14.40113
                ],
                [
                  105.24867,
                  14.40657
                ],
                [
                  105.24021,
                  14.42017
                ],
                [
                  105.23699,
                  14.41853
                ],
                [
                  105.23301,
                  14.42119
                ],
                [
                  105.2224,
                  14.41748
                ],
                [
                  105.21539,
                  14.418
                ],
                [
                  105.20552,
                  14.42643
                ],
                [
                  105.20405,
                  14.43208
                ],
                [
                  105.20023,
                  14.43279
                ],
                [
                  105.19794,
                  14.43169
                ],
                [
                  105.19586,
                  14.43717
                ],
                [
                  105.19381,
                  14.43869
                ],
                [
                  105.1921,
                  14.44468
                ],
                [
                  105.19388,
                  14.44965
                ],
                [
                  105.188,
                  14.4512
                ],
                [
                  105.18881,
                  14.45396
                ],
                [
                  105.18696,
                  14.45564
                ],
                [
                  105.1856,
                  14.4609
                ],
                [
                  105.18224,
                  14.46165
                ],
                [
                  105.18008,
                  14.465
                ],
                [
                  105.17642,
                  14.46739
                ],
                [
                  105.1745,
                  14.4744
                ],
                [
                  105.16831,
                  14.47693
                ],
                [
                  105.16792,
                  14.47903
                ],
                [
                  105.16905,
                  14.48117
                ],
                [
                  105.16419,
                  14.48284
                ],
                [
                  105.16221,
                  14.48214
                ],
                [
                  105.16163,
                  14.48358
                ],
                [
                  105.16185,
                  14.48502
                ],
                [
                  105.16776,
                  14.48676
                ],
                [
                  105.17433,
                  14.49276
                ],
                [
                  105.18061,
                  14.49348
                ],
                [
                  105.17945,
                  14.49853
                ],
                [
                  105.185,
                  14.50443
                ],
                [
                  105.18952,
                  14.51169
                ],
                [
                  105.19651,
                  14.52923
                ],
                [
                  105.20039,
                  14.53605
                ],
                [
                  105.20781,
                  14.54549
                ],
                [
                  105.21569,
                  14.5524
                ],
                [
                  105.22229,
                  14.56321
                ],
                [
                  105.22565,
                  14.56571
                ],
                [
                  105.23251,
                  14.56812
                ],
                [
                  105.23657,
                  14.57425
                ],
                [
                  105.24296,
                  14.57929
                ],
                [
                  105.2459,
                  14.58381
                ],
                [
                  105.25827,
                  14.5914
                ],
                [
                  105.26994,
                  14.59294
                ],
                [
                  105.27462,
                  14.59705
                ],
                [
                  105.28131,
                  14.59885
                ],
                [
                  105.28549,
                  14.59907
                ],
                [
                  105.29317,
                  14.59673
                ],
                [
                  105.31149,
                  14.59529
                ]
              ]
            ]
          }
        },
        {
          "geocode": "340904",
          "tambon": "ต.โดมประดิษฐ์",
          "amphoe": "อ.น้ำยืน",
          "province": "จ.อุบลราชธานี",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.โดมประดิษฐ์",
          "latitude": 14.420149,
          "longitude": 105.17981,
          "sum_rainfall_mm": 160.8,
          "observed_at": "2026-09-23T18:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  105.14919,
                  14.52223
                ],
                [
                  105.14937,
                  14.51629
                ],
                [
                  105.14809,
                  14.51189
                ],
                [
                  105.1467,
                  14.51024
                ],
                [
                  105.14301,
                  14.51017
                ],
                [
                  105.13952,
                  14.50866
                ],
                [
                  105.13897,
                  14.5046
                ],
                [
                  105.14356,
                  14.50255
                ],
                [
                  105.1472,
                  14.49795
                ],
                [
                  105.15117,
                  14.49729
                ],
                [
                  105.14907,
                  14.49386
                ],
                [
                  105.15153,
                  14.49333
                ],
                [
                  105.15341,
                  14.49049
                ],
                [
                  105.15512,
                  14.49165
                ],
                [
                  105.15542,
                  14.48854
                ],
                [
                  105.15698,
                  14.48802
                ],
                [
                  105.1573,
                  14.48624
                ],
                [
                  105.16185,
                  14.48502
                ],
                [
                  105.16185,
                  14.48235
                ],
                [
                  105.16419,
                  14.48284
                ],
                [
                  105.16905,
                  14.48117
                ],
                [
                  105.16792,
                  14.47903
                ],
                [
                  105.16831,
                  14.47693
                ],
                [
                  105.1745,
                  14.4744
                ],
                [
                  105.17642,
                  14.46739
                ],
                [
                  105.18008,
                  14.465
                ],
                [
                  105.18224,
                  14.46165
                ],
                [
                  105.1856,
                  14.4609
                ],
                [
                  105.18696,
                  14.45564
                ],
                [
                  105.18881,
                  14.45396
                ],
                [
                  105.188,
                  14.4512
                ],
                [
                  105.19388,
                  14.44965
                ],
                [
                  105.1921,
                  14.44468
                ],
                [
                  105.19381,
                  14.43869
                ],
                [
                  105.19586,
                  14.43717
                ],
                [
                  105.19794,
                  14.43169
                ],
                [
                  105.20023,
                  14.43279
                ],
                [
                  105.20405,
                  14.43208
                ],
                [
                  105.20552,
                  14.42643
                ],
                [
                  105.21539,
                  14.418
                ],
                [
                  105.2224,
                  14.41748
                ],
                [
                  105.23301,
                  14.42119
                ],
                [
                  105.23699,
                  14.41853
                ],
                [
                  105.24021,
                  14.42017
                ],
                [
                  105.24867,
                  14.40657
                ],
                [
                  105.25482,
                  14.40113
                ],
                [
                  105.26075,
                  14.39361
                ],
                [
                  105.27067,
                  14.39015
                ],
                [
                  105.2739,
                  14.38523
                ],
                [
                  105.27552,
                  14.37881
                ],
                [
                  105.28019,
                  14.37368
                ],
                [
                  105.28434,
                  14.36589
                ],
                [
                  105.28332,
                  14.36421
                ],
                [
                  105.28306,
                  14.35608
                ],
                [
                  105.28143,
                  14.354
                ],
                [
                  105.27679,
                  14.35381
                ],
                [
                  105.26649,
                  14.36098
                ],
                [
                  105.2593,
                  14.36248
                ],
                [
                  105.25132,
                  14.3619
                ],
                [
                  105.24746,
                  14.35855
                ],
                [
                  105.24635,
                  14.3553
                ],
                [
                  105.24169,
                  14.35051
                ],
                [
                  105.23573,
                  14.34982
                ],
                [
                  105.234,
                  14.3451
                ],
                [
                  105.23347,
                  14.33669
                ],
                [
                  105.22626,
                  14.33329
                ],
                [
                  105.22063,
                  14.33699
                ],
                [
                  105.21878,
                  14.33521
                ],
                [
                  105.21629,
                  14.33526
                ],
                [
                  105.21094,
                  14.3422
                ],
                [
                  105.20089,
                  14.34525
                ],
                [
                  105.19727,
                  14.34779
                ],
                [
                  105.19285,
                  14.34699
                ],
                [
                  105.1883,
                  14.34239
                ],
                [
                  105.18491,
                  14.34137
                ],
                [
                  105.1801,
                  14.34189
                ],
                [
                  105.17524,
                  14.34478
                ],
                [
                  105.17138,
                  14.33771
                ],
                [
                  105.1691,
                  14.33573
                ],
                [
                  105.1665,
                  14.32868
                ],
                [
                  105.16859,
                  14.32451
                ],
                [
                  105.1749,
                  14.32187
                ],
                [
                  105.17754,
                  14.31566
                ],
                [
                  105.17554,
                  14.31026
                ],
                [
                  105.17163,
                  14.30857
                ],
                [
                  105.17019,
                  14.30319
                ],
                [
                  105.16095,
                  14.30101
                ],
                [
                  105.1595,
                  14.29301
                ],
                [
                  105.15984,
                  14.28812
                ],
                [
                  105.1531,
                  14.28673
                ],
                [
                  105.15137,
                  14.28542
                ],
                [
                  105.14992,
                  14.27973
                ],
                [
                  105.15026,
                  14.27534
                ],
                [
                  105.15371,
                  14.26915
                ],
                [
                  105.1503,
                  14.26535
                ],
                [
                  105.14437,
                  14.26286
                ],
                [
                  105.14311,
                  14.26136
                ],
                [
                  105.14475,
                  14.25893
                ],
                [
                  105.15387,
                  14.25836
                ],
                [
                  105.15427,
                  14.25634
                ],
                [
                  105.15172,
                  14.24999
                ],
                [
                  105.1456,
                  14.24081
                ],
                [
                  105.13665,
                  14.23392
                ],
                [
                  105.12823,
                  14.22543
                ],
                [
                  105.11553,
                  14.22191
                ],
                [
                  105.11048,
                  14.21502
                ],
                [
                  105.10604,
                  14.21288
                ],
                [
                  105.09319,
                  14.21532
                ],
                [
                  105.08485,
                  14.20943
                ],
                [
                  105.08155,
                  14.20989
                ],
                [
                  105.07559,
                  14.21295
                ],
                [
                  105.05049,
                  14.21464
                ],
                [
                  105.04781,
                  14.21839
                ],
                [
                  105.04827,
                  14.22053
                ],
                [
                  105.04613,
                  14.22229
                ],
                [
                  105.0459,
                  14.22711
                ],
                [
                  105.04169,
                  14.22757
                ],
                [
                  105.0387,
                  14.22933
                ],
                [
                  105.0358,
                  14.23208
                ],
                [
                  105.03243,
                  14.23346
                ],
                [
                  105.03082,
                  14.23591
                ],
                [
                  105.03105,
                  14.23767
                ],
                [
                  105.02615,
                  14.23752
                ],
                [
                  105.0221,
                  14.24203
                ],
                [
                  105.02034,
                  14.24892
                ],
                [
                  105.0224,
                  14.25675
                ],
                [
                  105.02017,
                  14.25987
                ],
                [
                  105.02056,
                  14.26442
                ],
                [
                  105.01574,
                  14.27134
                ],
                [
                  105.01582,
                  14.27635
                ],
                [
                  105.0128,
                  14.27875
                ],
                [
                  105.01047,
                  14.28433
                ],
                [
                  105.0078,
                  14.28546
                ],
                [
                  105.0053,
                  14.28988
                ],
                [
                  105.00148,
                  14.30483
                ],
                [
                  104.99129,
                  14.311
                ],
                [
                  104.98424,
                  14.31891
                ],
                [
                  104.98466,
                  14.32051
                ],
                [
                  104.99111,
                  14.32267
                ],
                [
                  104.99234,
                  14.32525
                ],
                [
                  104.99321,
                  14.32951
                ],
                [
                  104.99239,
                  14.33297
                ],
                [
                  104.99279,
                  14.34193
                ],
                [
                  104.99988,
                  14.35575
                ],
                [
                  105.00144,
                  14.36237
                ],
                [
                  105.00041,
                  14.36733
                ],
                [
                  105.00463,
                  14.38543
                ],
                [
                  105.00681,
                  14.39058
                ],
                [
                  105.01106,
                  14.3948
                ],
                [
                  105.0131,
                  14.39944
                ],
                [
                  105.00969,
                  14.41298
                ],
                [
                  105.00959,
                  14.41959
                ],
                [
                  105.01096,
                  14.42517
                ],
                [
                  105.01277,
                  14.42794
                ],
                [
                  105.01587,
                  14.43837
                ],
                [
                  105.02724,
                  14.44275
                ],
                [
                  105.02954,
                  14.44262
                ],
                [
                  105.03147,
                  14.44457
                ],
                [
                  105.03285,
                  14.44843
                ],
                [
                  105.04195,
                  14.44865
                ],
                [
                  105.04847,
                  14.45057
                ],
                [
                  105.05008,
                  14.44939
                ],
                [
                  105.05147,
                  14.45003
                ],
                [
                  105.05367,
                  14.44864
                ],
                [
                  105.05483,
                  14.4491
                ],
                [
                  105.05542,
                  14.45155
                ],
                [
                  105.05912,
                  14.45411
                ],
                [
                  105.06143,
                  14.4595
                ],
                [
                  105.0644,
                  14.4604
                ],
                [
                  105.06348,
                  14.46269
                ],
                [
                  105.06605,
                  14.46761
                ],
                [
                  105.06872,
                  14.4665
                ],
                [
                  105.07013,
                  14.46862
                ],
                [
                  105.07207,
                  14.46927
                ],
                [
                  105.0756,
                  14.47857
                ],
                [
                  105.08007,
                  14.48162
                ],
                [
                  105.08334,
                  14.4863
                ],
                [
                  105.08564,
                  14.48534
                ],
                [
                  105.0868,
                  14.48762
                ],
                [
                  105.09902,
                  14.49421
                ],
                [
                  105.09793,
                  14.50371
                ],
                [
                  105.10075,
                  14.5127
                ],
                [
                  105.10378,
                  14.51725
                ],
                [
                  105.10542,
                  14.51818
                ],
                [
                  105.11176,
                  14.51828
                ],
                [
                  105.11509,
                  14.52265
                ],
                [
                  105.12096,
                  14.52155
                ],
                [
                  105.12484,
                  14.51937
                ],
                [
                  105.12901,
                  14.52098
                ],
                [
                  105.13644,
                  14.52119
                ],
                [
                  105.14094,
                  14.52405
                ],
                [
                  105.14919,
                  14.52223
                ]
              ]
            ]
          }
        },
        {
          "geocode": "101101",
          "tambon": "ต.ลาดกระบัง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลำปลาทิว ลาดกระบัง",
          "latitude": 13.7407,
          "longitude": 100.79468,
          "sum_rainfall_mm": 118.19999999999999,
          "observed_at": "2026-09-23T18:00:00+07:00"
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_23_09_2026.png?1790204837",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-24",
      "time": "06:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
        {
          "geocode": "180202",
          "tambon": "ต.วัดโคก",
          "amphoe": "อ.มโนรมย์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.มโนรมย์",
          "latitude": 15.3277,
          "longitude": 100.10913,
          "sum_rainfall_mm": 108.40000000000002,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.18317,
                  15.33882
                ],
                [
                  100.18376,
                  15.33116
                ],
                [
                  100.18529,
                  15.32784
                ],
                [
                  100.18166,
                  15.3166
                ],
                [
                  100.18095,
                  15.31098
                ],
                [
                  100.17609,
                  15.3049
                ],
                [
                  100.17042,
                  15.30273
                ],
                [
                  100.16324,
                  15.30764
                ],
                [
                  100.14871,
                  15.30546
                ],
                [
                  100.14751,
                  15.30824
                ],
                [
                  100.12972,
                  15.30906
                ],
                [
                  100.12603,
                  15.30418
                ],
                [
                  100.12044,
                  15.29979
                ],
                [
                  100.11111,
                  15.30766
                ],
                [
                  100.09984,
                  15.31456
                ],
                [
                  100.08361,
                  15.31921
                ],
                [
                  100.08152,
                  15.32127
                ],
                [
                  100.08507,
                  15.32409
                ],
                [
                  100.09228,
                  15.32707
                ],
                [
                  100.0963,
                  15.33081
                ],
                [
                  100.10002,
                  15.33613
                ],
                [
                  100.10092,
                  15.34211
                ],
                [
                  100.11582,
                  15.34304
                ],
                [
                  100.12008,
                  15.34165
                ],
                [
                  100.12694,
                  15.34202
                ],
                [
                  100.13283,
                  15.34069
                ],
                [
                  100.13354,
                  15.33798
                ],
                [
                  100.13616,
                  15.33651
                ],
                [
                  100.13671,
                  15.33429
                ],
                [
                  100.14455,
                  15.33633
                ],
                [
                  100.17161,
                  15.32958
                ],
                [
                  100.1762,
                  15.33031
                ],
                [
                  100.17813,
                  15.33235
                ],
                [
                  100.17888,
                  15.34067
                ],
                [
                  100.18161,
                  15.3472
                ],
                [
                  100.1837,
                  15.34443
                ],
                [
                  100.18317,
                  15.33882
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180302",
          "tambon": "ต.มะขามเฒ่า",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.มะขามเฒ่า",
          "latitude": 15.222455,
          "longitude": 100.062221,
          "sum_rainfall_mm": 104.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.06268,
                  15.25821
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.05798,
                  15.2481
                ],
                [
                  100.06031,
                  15.24134
                ],
                [
                  100.06541,
                  15.23201
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.05694,
                  15.19411
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05444,
                  15.18366
                ],
                [
                  100.0445,
                  15.18318
                ],
                [
                  100.03811,
                  15.19776
                ],
                [
                  100.03342,
                  15.20128
                ],
                [
                  100.02295,
                  15.21573
                ],
                [
                  100.02074,
                  15.21365
                ],
                [
                  100.01835,
                  15.21325
                ],
                [
                  100.00699,
                  15.21904
                ],
                [
                  100.0141,
                  15.2195
                ],
                [
                  100.00545,
                  15.22108
                ],
                [
                  100.00037,
                  15.2235
                ],
                [
                  99.99845,
                  15.23338
                ],
                [
                  100.00412,
                  15.24509
                ],
                [
                  100.02238,
                  15.24314
                ],
                [
                  100.02003,
                  15.25097
                ],
                [
                  100.02042,
                  15.25341
                ],
                [
                  100.02584,
                  15.25999
                ],
                [
                  100.0351,
                  15.26278
                ],
                [
                  100.03759,
                  15.25827
                ],
                [
                  100.04144,
                  15.2557
                ],
                [
                  100.04541,
                  15.25693
                ],
                [
                  100.04488,
                  15.2617
                ],
                [
                  100.04693,
                  15.2645
                ],
                [
                  100.05185,
                  15.26329
                ],
                [
                  100.0584,
                  15.26375
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760513",
          "tambon": "ต.เขากระปุก",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหุบเฉลา",
          "latitude": 12.661321,
          "longitude": 99.65458,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.78024,
                  12.78207
                ],
                [
                  99.78434,
                  12.77597
                ],
                [
                  99.79028,
                  12.77212
                ],
                [
                  99.79248,
                  12.77221
                ],
                [
                  99.79243,
                  12.76901
                ],
                [
                  99.79522,
                  12.76823
                ],
                [
                  99.79536,
                  12.76634
                ],
                [
                  99.79709,
                  12.76533
                ],
                [
                  99.79723,
                  12.77563
                ],
                [
                  99.80436,
                  12.77621
                ],
                [
                  99.81148,
                  12.77525
                ],
                [
                  99.81589,
                  12.77747
                ],
                [
                  99.81915,
                  12.77761
                ],
                [
                  99.83425,
                  12.78259
                ],
                [
                  99.83987,
                  12.783
                ],
                [
                  99.84184,
                  12.77914
                ],
                [
                  99.84114,
                  12.77781
                ],
                [
                  99.84215,
                  12.77417
                ],
                [
                  99.84525,
                  12.77334
                ],
                [
                  99.84711,
                  12.77026
                ],
                [
                  99.85302,
                  12.76647
                ],
                [
                  99.85153,
                  12.76232
                ],
                [
                  99.85297,
                  12.75891
                ],
                [
                  99.84974,
                  12.7548
                ],
                [
                  99.84469,
                  12.75367
                ],
                [
                  99.83428,
                  12.74753
                ],
                [
                  99.8264,
                  12.74898
                ],
                [
                  99.82107,
                  12.74684
                ],
                [
                  99.81593,
                  12.73604
                ],
                [
                  99.81166,
                  12.73125
                ],
                [
                  99.80964,
                  12.73087
                ],
                [
                  99.80107,
                  12.73327
                ],
                [
                  99.78174,
                  12.73626
                ],
                [
                  99.78373,
                  12.7245
                ],
                [
                  99.78804,
                  12.7176
                ],
                [
                  99.79469,
                  12.71173
                ],
                [
                  99.78945,
                  12.69727
                ],
                [
                  99.77697,
                  12.68345
                ],
                [
                  99.77656,
                  12.67953
                ],
                [
                  99.77835,
                  12.67361
                ],
                [
                  99.77924,
                  12.6643
                ],
                [
                  99.77888,
                  12.65749
                ],
                [
                  99.77351,
                  12.65171
                ],
                [
                  99.77101,
                  12.6439
                ],
                [
                  99.7642,
                  12.63994
                ],
                [
                  99.75933,
                  12.63378
                ],
                [
                  99.75416,
                  12.63247
                ],
                [
                  99.75299,
                  12.62905
                ],
                [
                  99.75275,
                  12.61811
                ],
                [
                  99.74621,
                  12.61814
                ],
                [
                  99.74256,
                  12.61551
                ],
                [
                  99.73929,
                  12.61637
                ],
                [
                  99.73503,
                  12.61378
                ],
                [
                  99.72664,
                  12.6129
                ],
                [
                  99.72209,
                  12.60929
                ],
                [
                  99.72048,
                  12.60255
                ],
                [
                  99.71695,
                  12.60034
                ],
                [
                  99.70392,
                  12.60882
                ],
                [
                  99.69571,
                  12.61125
                ],
                [
                  99.69197,
                  12.61629
                ],
                [
                  99.68673,
                  12.62837
                ],
                [
                  99.68046,
                  12.63545
                ],
                [
                  99.66913,
                  12.63747
                ],
                [
                  99.66131,
                  12.63737
                ],
                [
                  99.65689,
                  12.63566
                ],
                [
                  99.65479,
                  12.63897
                ],
                [
                  99.64781,
                  12.64101
                ],
                [
                  99.62243,
                  12.64524
                ],
                [
                  99.61959,
                  12.64151
                ],
                [
                  99.61872,
                  12.6371
                ],
                [
                  99.61696,
                  12.64025
                ],
                [
                  99.61633,
                  12.65361
                ],
                [
                  99.61616,
                  12.6635
                ],
                [
                  99.61784,
                  12.68091
                ],
                [
                  99.61547,
                  12.69359
                ],
                [
                  99.61756,
                  12.70525
                ],
                [
                  99.61603,
                  12.71122
                ],
                [
                  99.61637,
                  12.71527
                ],
                [
                  99.60848,
                  12.72151
                ],
                [
                  99.60394,
                  12.72296
                ],
                [
                  99.60239,
                  12.72555
                ],
                [
                  99.60296,
                  12.73498
                ],
                [
                  99.60633,
                  12.74281
                ],
                [
                  99.60575,
                  12.74724
                ],
                [
                  99.60765,
                  12.75258
                ],
                [
                  99.61454,
                  12.75748
                ],
                [
                  99.61719,
                  12.75474
                ],
                [
                  99.62171,
                  12.75586
                ],
                [
                  99.62527,
                  12.75366
                ],
                [
                  99.62526,
                  12.7561
                ],
                [
                  99.62801,
                  12.75463
                ],
                [
                  99.63032,
                  12.75554
                ],
                [
                  99.63309,
                  12.75363
                ],
                [
                  99.63543,
                  12.75629
                ],
                [
                  99.64433,
                  12.75839
                ],
                [
                  99.64705,
                  12.76178
                ],
                [
                  99.64813,
                  12.76545
                ],
                [
                  99.66031,
                  12.76862
                ],
                [
                  99.67688,
                  12.77481
                ],
                [
                  99.6991,
                  12.77408
                ],
                [
                  99.7084,
                  12.77806
                ],
                [
                  99.71498,
                  12.77894
                ],
                [
                  99.722,
                  12.77669
                ],
                [
                  99.73332,
                  12.76865
                ],
                [
                  99.73694,
                  12.76819
                ],
                [
                  99.74579,
                  12.77062
                ],
                [
                  99.7515,
                  12.77433
                ],
                [
                  99.7547,
                  12.77839
                ],
                [
                  99.7638,
                  12.78076
                ],
                [
                  99.76668,
                  12.78315
                ],
                [
                  99.76832,
                  12.78632
                ],
                [
                  99.77046,
                  12.78546
                ],
                [
                  99.77245,
                  12.78661
                ],
                [
                  99.77386,
                  12.78503
                ],
                [
                  99.7802,
                  12.78384
                ],
                [
                  99.78024,
                  12.78207
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทจ.2 (บางกะม่า)",
          "latitude": 13.2724,
          "longitude": 99.4988,
          "sum_rainfall_mm": 117.9,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเตย",
          "latitude": 13.70628,
          "longitude": 100.58752,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103103",
          "tambon": "ต.บางโคล่",
          "amphoe": "อ.บางคอแหลม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.วัดไทร",
          "latitude": 13.68653,
          "longitude": 100.51643,
          "sum_rainfall_mm": 102.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "100905",
          "tambon": "ต.บางจาก",
          "amphoe": "อ.พระโขนง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พระโขนง",
          "latitude": 13.70233,
          "longitude": 100.60197,
          "sum_rainfall_mm": 104.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "102401",
          "tambon": "ต.ราษฎร์บูรณะ",
          "amphoe": "อ.ราษฎร์บูรณะ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ราษฎร์บูรณะ",
          "latitude": 13.68207,
          "longitude": 100.50586,
          "sum_rainfall_mm": 107.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "110402",
          "tambon": "ต.บางพึ่ง",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองแจงร้อน",
          "latitude": 13.67627,
          "longitude": 100.52097,
          "sum_rainfall_mm": 101.5,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.52806,
                  13.67598
                ],
                [
                  100.52728,
                  13.67115
                ],
                [
                  100.53089,
                  13.6608
                ],
                [
                  100.52979,
                  13.65917
                ],
                [
                  100.53011,
                  13.65431
                ],
                [
                  100.52191,
                  13.64671
                ],
                [
                  100.52311,
                  13.66204
                ],
                [
                  100.52223,
                  13.66539
                ],
                [
                  100.51668,
                  13.67124
                ],
                [
                  100.51686,
                  13.67555
                ],
                [
                  100.52122,
                  13.68171
                ],
                [
                  100.52806,
                  13.67598
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "180201",
          "tambon": "ต.คุ้งสำเภา",
          "amphoe": "อ.มโนรมย์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.คุ้งสำเภา",
          "latitude": 15.31006,
          "longitude": 100.08173,
          "sum_rainfall_mm": 62.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.12603,
                  15.30418
                ],
                [
                  100.12854,
                  15.30228
                ],
                [
                  100.12514,
                  15.29405
                ],
                [
                  100.12965,
                  15.29371
                ],
                [
                  100.13059,
                  15.28908
                ],
                [
                  100.12464,
                  15.28855
                ],
                [
                  100.12049,
                  15.29112
                ],
                [
                  100.11394,
                  15.28581
                ],
                [
                  100.10763,
                  15.27491
                ],
                [
                  100.09732,
                  15.27456
                ],
                [
                  100.09441,
                  15.27255
                ],
                [
                  100.08229,
                  15.27252
                ],
                [
                  100.07699,
                  15.2666
                ],
                [
                  100.07014,
                  15.26414
                ],
                [
                  100.05684,
                  15.26849
                ],
                [
                  100.0581,
                  15.27727
                ],
                [
                  100.06185,
                  15.28445
                ],
                [
                  100.07463,
                  15.29191
                ],
                [
                  100.07843,
                  15.2956
                ],
                [
                  100.08072,
                  15.30888
                ],
                [
                  100.07803,
                  15.31612
                ],
                [
                  100.08152,
                  15.32127
                ],
                [
                  100.08361,
                  15.31921
                ],
                [
                  100.09984,
                  15.31456
                ],
                [
                  100.11111,
                  15.30766
                ],
                [
                  100.12044,
                  15.29979
                ],
                [
                  100.12603,
                  15.30418
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180202",
          "tambon": "ต.วัดโคก",
          "amphoe": "อ.มโนรมย์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือ ปตร.มโนรมย์",
          "latitude": 15.33046,
          "longitude": 100.10331,
          "sum_rainfall_mm": 108.2,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.18317,
                  15.33882
                ],
                [
                  100.18376,
                  15.33116
                ],
                [
                  100.18529,
                  15.32784
                ],
                [
                  100.18166,
                  15.3166
                ],
                [
                  100.18095,
                  15.31098
                ],
                [
                  100.17609,
                  15.3049
                ],
                [
                  100.17042,
                  15.30273
                ],
                [
                  100.16324,
                  15.30764
                ],
                [
                  100.14871,
                  15.30546
                ],
                [
                  100.14751,
                  15.30824
                ],
                [
                  100.12972,
                  15.30906
                ],
                [
                  100.12603,
                  15.30418
                ],
                [
                  100.12044,
                  15.29979
                ],
                [
                  100.11111,
                  15.30766
                ],
                [
                  100.09984,
                  15.31456
                ],
                [
                  100.08361,
                  15.31921
                ],
                [
                  100.08152,
                  15.32127
                ],
                [
                  100.08507,
                  15.32409
                ],
                [
                  100.09228,
                  15.32707
                ],
                [
                  100.0963,
                  15.33081
                ],
                [
                  100.10002,
                  15.33613
                ],
                [
                  100.10092,
                  15.34211
                ],
                [
                  100.11582,
                  15.34304
                ],
                [
                  100.12008,
                  15.34165
                ],
                [
                  100.12694,
                  15.34202
                ],
                [
                  100.13283,
                  15.34069
                ],
                [
                  100.13354,
                  15.33798
                ],
                [
                  100.13616,
                  15.33651
                ],
                [
                  100.13671,
                  15.33429
                ],
                [
                  100.14455,
                  15.33633
                ],
                [
                  100.17161,
                  15.32958
                ],
                [
                  100.1762,
                  15.33031
                ],
                [
                  100.17813,
                  15.33235
                ],
                [
                  100.17888,
                  15.34067
                ],
                [
                  100.18161,
                  15.3472
                ],
                [
                  100.1837,
                  15.34443
                ],
                [
                  100.18317,
                  15.33882
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180202",
          "tambon": "ต.วัดโคก",
          "amphoe": "อ.มโนรมย์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.มโนรมย์",
          "latitude": 15.3277,
          "longitude": 100.10913,
          "sum_rainfall_mm": 108.4,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.18317,
                  15.33882
                ],
                [
                  100.18376,
                  15.33116
                ],
                [
                  100.18529,
                  15.32784
                ],
                [
                  100.18166,
                  15.3166
                ],
                [
                  100.18095,
                  15.31098
                ],
                [
                  100.17609,
                  15.3049
                ],
                [
                  100.17042,
                  15.30273
                ],
                [
                  100.16324,
                  15.30764
                ],
                [
                  100.14871,
                  15.30546
                ],
                [
                  100.14751,
                  15.30824
                ],
                [
                  100.12972,
                  15.30906
                ],
                [
                  100.12603,
                  15.30418
                ],
                [
                  100.12044,
                  15.29979
                ],
                [
                  100.11111,
                  15.30766
                ],
                [
                  100.09984,
                  15.31456
                ],
                [
                  100.08361,
                  15.31921
                ],
                [
                  100.08152,
                  15.32127
                ],
                [
                  100.08507,
                  15.32409
                ],
                [
                  100.09228,
                  15.32707
                ],
                [
                  100.0963,
                  15.33081
                ],
                [
                  100.10002,
                  15.33613
                ],
                [
                  100.10092,
                  15.34211
                ],
                [
                  100.11582,
                  15.34304
                ],
                [
                  100.12008,
                  15.34165
                ],
                [
                  100.12694,
                  15.34202
                ],
                [
                  100.13283,
                  15.34069
                ],
                [
                  100.13354,
                  15.33798
                ],
                [
                  100.13616,
                  15.33651
                ],
                [
                  100.13671,
                  15.33429
                ],
                [
                  100.14455,
                  15.33633
                ],
                [
                  100.17161,
                  15.32958
                ],
                [
                  100.1762,
                  15.33031
                ],
                [
                  100.17813,
                  15.33235
                ],
                [
                  100.17888,
                  15.34067
                ],
                [
                  100.18161,
                  15.3472
                ],
                [
                  100.1837,
                  15.34443
                ],
                [
                  100.18317,
                  15.33882
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180302",
          "tambon": "ต.มะขามเฒ่า",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.มะขามเฒ่า",
          "latitude": 15.222455,
          "longitude": 100.062221,
          "sum_rainfall_mm": 104.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.06268,
                  15.25821
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.05798,
                  15.2481
                ],
                [
                  100.06031,
                  15.24134
                ],
                [
                  100.06541,
                  15.23201
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.05694,
                  15.19411
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05444,
                  15.18366
                ],
                [
                  100.0445,
                  15.18318
                ],
                [
                  100.03811,
                  15.19776
                ],
                [
                  100.03342,
                  15.20128
                ],
                [
                  100.02295,
                  15.21573
                ],
                [
                  100.02074,
                  15.21365
                ],
                [
                  100.01835,
                  15.21325
                ],
                [
                  100.00699,
                  15.21904
                ],
                [
                  100.0141,
                  15.2195
                ],
                [
                  100.00545,
                  15.22108
                ],
                [
                  100.00037,
                  15.2235
                ],
                [
                  99.99845,
                  15.23338
                ],
                [
                  100.00412,
                  15.24509
                ],
                [
                  100.02238,
                  15.24314
                ],
                [
                  100.02003,
                  15.25097
                ],
                [
                  100.02042,
                  15.25341
                ],
                [
                  100.02584,
                  15.25999
                ],
                [
                  100.0351,
                  15.26278
                ],
                [
                  100.03759,
                  15.25827
                ],
                [
                  100.04144,
                  15.2557
                ],
                [
                  100.04541,
                  15.25693
                ],
                [
                  100.04488,
                  15.2617
                ],
                [
                  100.04693,
                  15.2645
                ],
                [
                  100.05185,
                  15.26329
                ],
                [
                  100.0584,
                  15.26375
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180302",
          "tambon": "ต.มะขามเฒ่า",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.มะขามเฒ่า-อู่ทอง",
          "latitude": 15.22229,
          "longitude": 100.06236,
          "sum_rainfall_mm": 65.2,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.06268,
                  15.25821
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.05798,
                  15.2481
                ],
                [
                  100.06031,
                  15.24134
                ],
                [
                  100.06541,
                  15.23201
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.05694,
                  15.19411
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05444,
                  15.18366
                ],
                [
                  100.0445,
                  15.18318
                ],
                [
                  100.03811,
                  15.19776
                ],
                [
                  100.03342,
                  15.20128
                ],
                [
                  100.02295,
                  15.21573
                ],
                [
                  100.02074,
                  15.21365
                ],
                [
                  100.01835,
                  15.21325
                ],
                [
                  100.00699,
                  15.21904
                ],
                [
                  100.0141,
                  15.2195
                ],
                [
                  100.00545,
                  15.22108
                ],
                [
                  100.00037,
                  15.2235
                ],
                [
                  99.99845,
                  15.23338
                ],
                [
                  100.00412,
                  15.24509
                ],
                [
                  100.02238,
                  15.24314
                ],
                [
                  100.02003,
                  15.25097
                ],
                [
                  100.02042,
                  15.25341
                ],
                [
                  100.02584,
                  15.25999
                ],
                [
                  100.0351,
                  15.26278
                ],
                [
                  100.03759,
                  15.25827
                ],
                [
                  100.04144,
                  15.2557
                ],
                [
                  100.04541,
                  15.25693
                ],
                [
                  100.04488,
                  15.2617
                ],
                [
                  100.04693,
                  15.2645
                ],
                [
                  100.05185,
                  15.26329
                ],
                [
                  100.0584,
                  15.26375
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180301",
          "tambon": "ต.วัดสิงห์",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.วัดสิงห์",
          "latitude": 15.2584,
          "longitude": 100.04493,
          "sum_rainfall_mm": 26.599999999999998,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.04806,
                  15.26481
                ],
                [
                  100.04497,
                  15.26203
                ],
                [
                  100.04541,
                  15.25693
                ],
                [
                  100.04186,
                  15.25576
                ],
                [
                  100.03782,
                  15.25801
                ],
                [
                  100.03514,
                  15.26246
                ],
                [
                  100.03667,
                  15.26719
                ],
                [
                  100.03871,
                  15.26807
                ],
                [
                  100.04593,
                  15.26853
                ],
                [
                  100.04806,
                  15.26481
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760511",
          "tambon": "ต.กลัดหลวง",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ท่ายาง",
          "latitude": 12.81345,
          "longitude": 99.79404,
          "sum_rainfall_mm": 3.4000000000000004,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.75065,
                  12.83432
                ],
                [
                  99.75559,
                  12.83646
                ],
                [
                  99.76162,
                  12.84236
                ],
                [
                  99.76351,
                  12.84012
                ],
                [
                  99.77017,
                  12.83967
                ],
                [
                  99.77433,
                  12.83482
                ],
                [
                  99.77942,
                  12.83113
                ],
                [
                  99.78447,
                  12.83311
                ],
                [
                  99.7888,
                  12.83764
                ],
                [
                  99.79292,
                  12.83803
                ],
                [
                  99.79451,
                  12.83672
                ],
                [
                  99.795,
                  12.83535
                ],
                [
                  99.79412,
                  12.83436
                ],
                [
                  99.79158,
                  12.83501
                ],
                [
                  99.78978,
                  12.83409
                ],
                [
                  99.78867,
                  12.82879
                ],
                [
                  99.79202,
                  12.82582
                ],
                [
                  99.79389,
                  12.81872
                ],
                [
                  99.79266,
                  12.81603
                ],
                [
                  99.7933,
                  12.81331
                ],
                [
                  99.78982,
                  12.811
                ],
                [
                  99.78978,
                  12.80513
                ],
                [
                  99.79672,
                  12.80133
                ],
                [
                  99.79709,
                  12.76533
                ],
                [
                  99.79536,
                  12.76634
                ],
                [
                  99.79522,
                  12.76823
                ],
                [
                  99.79243,
                  12.76901
                ],
                [
                  99.79248,
                  12.77221
                ],
                [
                  99.78975,
                  12.77238
                ],
                [
                  99.78206,
                  12.77842
                ],
                [
                  99.7802,
                  12.78384
                ],
                [
                  99.77386,
                  12.78503
                ],
                [
                  99.77217,
                  12.78667
                ],
                [
                  99.77046,
                  12.78546
                ],
                [
                  99.76832,
                  12.78632
                ],
                [
                  99.76668,
                  12.78315
                ],
                [
                  99.76318,
                  12.78045
                ],
                [
                  99.7595,
                  12.78036
                ],
                [
                  99.75447,
                  12.77825
                ],
                [
                  99.7515,
                  12.77433
                ],
                [
                  99.74579,
                  12.77062
                ],
                [
                  99.73694,
                  12.76819
                ],
                [
                  99.73332,
                  12.76865
                ],
                [
                  99.722,
                  12.77669
                ],
                [
                  99.71498,
                  12.77894
                ],
                [
                  99.7084,
                  12.77806
                ],
                [
                  99.6991,
                  12.77408
                ],
                [
                  99.67688,
                  12.77481
                ],
                [
                  99.66031,
                  12.76862
                ],
                [
                  99.64813,
                  12.76545
                ],
                [
                  99.64777,
                  12.77097
                ],
                [
                  99.64057,
                  12.77683
                ],
                [
                  99.63993,
                  12.78051
                ],
                [
                  99.64784,
                  12.79149
                ],
                [
                  99.65046,
                  12.79176
                ],
                [
                  99.65336,
                  12.78855
                ],
                [
                  99.65695,
                  12.78737
                ],
                [
                  99.66328,
                  12.78998
                ],
                [
                  99.6696,
                  12.79453
                ],
                [
                  99.67815,
                  12.79506
                ],
                [
                  99.67707,
                  12.79744
                ],
                [
                  99.67955,
                  12.8009
                ],
                [
                  99.6833,
                  12.81344
                ],
                [
                  99.6863,
                  12.81347
                ],
                [
                  99.69211,
                  12.81638
                ],
                [
                  99.6968,
                  12.82123
                ],
                [
                  99.70109,
                  12.82207
                ],
                [
                  99.70871,
                  12.8174
                ],
                [
                  99.71201,
                  12.81957
                ],
                [
                  99.71502,
                  12.81885
                ],
                [
                  99.7232,
                  12.82563
                ],
                [
                  99.72351,
                  12.829
                ],
                [
                  99.72217,
                  12.83406
                ],
                [
                  99.72898,
                  12.83714
                ],
                [
                  99.73365,
                  12.84428
                ],
                [
                  99.73761,
                  12.844
                ],
                [
                  99.74335,
                  12.83816
                ],
                [
                  99.7458,
                  12.84173
                ],
                [
                  99.74715,
                  12.84156
                ],
                [
                  99.75065,
                  12.83432
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760511",
          "tambon": "ต.กลัดหลวง",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "โรงเรียนบ้านห้วยไผ่",
          "latitude": 12.759098,
          "longitude": 99.61465,
          "sum_rainfall_mm": 33.2,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.75065,
                  12.83432
                ],
                [
                  99.75559,
                  12.83646
                ],
                [
                  99.76162,
                  12.84236
                ],
                [
                  99.76351,
                  12.84012
                ],
                [
                  99.77017,
                  12.83967
                ],
                [
                  99.77433,
                  12.83482
                ],
                [
                  99.77942,
                  12.83113
                ],
                [
                  99.78447,
                  12.83311
                ],
                [
                  99.7888,
                  12.83764
                ],
                [
                  99.79292,
                  12.83803
                ],
                [
                  99.79451,
                  12.83672
                ],
                [
                  99.795,
                  12.83535
                ],
                [
                  99.79412,
                  12.83436
                ],
                [
                  99.79158,
                  12.83501
                ],
                [
                  99.78978,
                  12.83409
                ],
                [
                  99.78867,
                  12.82879
                ],
                [
                  99.79202,
                  12.82582
                ],
                [
                  99.79389,
                  12.81872
                ],
                [
                  99.79266,
                  12.81603
                ],
                [
                  99.7933,
                  12.81331
                ],
                [
                  99.78982,
                  12.811
                ],
                [
                  99.78978,
                  12.80513
                ],
                [
                  99.79672,
                  12.80133
                ],
                [
                  99.79709,
                  12.76533
                ],
                [
                  99.79536,
                  12.76634
                ],
                [
                  99.79522,
                  12.76823
                ],
                [
                  99.79243,
                  12.76901
                ],
                [
                  99.79248,
                  12.77221
                ],
                [
                  99.78975,
                  12.77238
                ],
                [
                  99.78206,
                  12.77842
                ],
                [
                  99.7802,
                  12.78384
                ],
                [
                  99.77386,
                  12.78503
                ],
                [
                  99.77217,
                  12.78667
                ],
                [
                  99.77046,
                  12.78546
                ],
                [
                  99.76832,
                  12.78632
                ],
                [
                  99.76668,
                  12.78315
                ],
                [
                  99.76318,
                  12.78045
                ],
                [
                  99.7595,
                  12.78036
                ],
                [
                  99.75447,
                  12.77825
                ],
                [
                  99.7515,
                  12.77433
                ],
                [
                  99.74579,
                  12.77062
                ],
                [
                  99.73694,
                  12.76819
                ],
                [
                  99.73332,
                  12.76865
                ],
                [
                  99.722,
                  12.77669
                ],
                [
                  99.71498,
                  12.77894
                ],
                [
                  99.7084,
                  12.77806
                ],
                [
                  99.6991,
                  12.77408
                ],
                [
                  99.67688,
                  12.77481
                ],
                [
                  99.66031,
                  12.76862
                ],
                [
                  99.64813,
                  12.76545
                ],
                [
                  99.64777,
                  12.77097
                ],
                [
                  99.64057,
                  12.77683
                ],
                [
                  99.63993,
                  12.78051
                ],
                [
                  99.64784,
                  12.79149
                ],
                [
                  99.65046,
                  12.79176
                ],
                [
                  99.65336,
                  12.78855
                ],
                [
                  99.65695,
                  12.78737
                ],
                [
                  99.66328,
                  12.78998
                ],
                [
                  99.6696,
                  12.79453
                ],
                [
                  99.67815,
                  12.79506
                ],
                [
                  99.67707,
                  12.79744
                ],
                [
                  99.67955,
                  12.8009
                ],
                [
                  99.6833,
                  12.81344
                ],
                [
                  99.6863,
                  12.81347
                ],
                [
                  99.69211,
                  12.81638
                ],
                [
                  99.6968,
                  12.82123
                ],
                [
                  99.70109,
                  12.82207
                ],
                [
                  99.70871,
                  12.8174
                ],
                [
                  99.71201,
                  12.81957
                ],
                [
                  99.71502,
                  12.81885
                ],
                [
                  99.7232,
                  12.82563
                ],
                [
                  99.72351,
                  12.829
                ],
                [
                  99.72217,
                  12.83406
                ],
                [
                  99.72898,
                  12.83714
                ],
                [
                  99.73365,
                  12.84428
                ],
                [
                  99.73761,
                  12.844
                ],
                [
                  99.74335,
                  12.83816
                ],
                [
                  99.7458,
                  12.84173
                ],
                [
                  99.74715,
                  12.84156
                ],
                [
                  99.75065,
                  12.83432
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760513",
          "tambon": "ต.เขากระปุก",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหุบเฉลา",
          "latitude": 12.661321,
          "longitude": 99.65458,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.78024,
                  12.78207
                ],
                [
                  99.78434,
                  12.77597
                ],
                [
                  99.79028,
                  12.77212
                ],
                [
                  99.79248,
                  12.77221
                ],
                [
                  99.79243,
                  12.76901
                ],
                [
                  99.79522,
                  12.76823
                ],
                [
                  99.79536,
                  12.76634
                ],
                [
                  99.79709,
                  12.76533
                ],
                [
                  99.79723,
                  12.77563
                ],
                [
                  99.80436,
                  12.77621
                ],
                [
                  99.81148,
                  12.77525
                ],
                [
                  99.81589,
                  12.77747
                ],
                [
                  99.81915,
                  12.77761
                ],
                [
                  99.83425,
                  12.78259
                ],
                [
                  99.83987,
                  12.783
                ],
                [
                  99.84184,
                  12.77914
                ],
                [
                  99.84114,
                  12.77781
                ],
                [
                  99.84215,
                  12.77417
                ],
                [
                  99.84525,
                  12.77334
                ],
                [
                  99.84711,
                  12.77026
                ],
                [
                  99.85302,
                  12.76647
                ],
                [
                  99.85153,
                  12.76232
                ],
                [
                  99.85297,
                  12.75891
                ],
                [
                  99.84974,
                  12.7548
                ],
                [
                  99.84469,
                  12.75367
                ],
                [
                  99.83428,
                  12.74753
                ],
                [
                  99.8264,
                  12.74898
                ],
                [
                  99.82107,
                  12.74684
                ],
                [
                  99.81593,
                  12.73604
                ],
                [
                  99.81166,
                  12.73125
                ],
                [
                  99.80964,
                  12.73087
                ],
                [
                  99.80107,
                  12.73327
                ],
                [
                  99.78174,
                  12.73626
                ],
                [
                  99.78373,
                  12.7245
                ],
                [
                  99.78804,
                  12.7176
                ],
                [
                  99.79469,
                  12.71173
                ],
                [
                  99.78945,
                  12.69727
                ],
                [
                  99.77697,
                  12.68345
                ],
                [
                  99.77656,
                  12.67953
                ],
                [
                  99.77835,
                  12.67361
                ],
                [
                  99.77924,
                  12.6643
                ],
                [
                  99.77888,
                  12.65749
                ],
                [
                  99.77351,
                  12.65171
                ],
                [
                  99.77101,
                  12.6439
                ],
                [
                  99.7642,
                  12.63994
                ],
                [
                  99.75933,
                  12.63378
                ],
                [
                  99.75416,
                  12.63247
                ],
                [
                  99.75299,
                  12.62905
                ],
                [
                  99.75275,
                  12.61811
                ],
                [
                  99.74621,
                  12.61814
                ],
                [
                  99.74256,
                  12.61551
                ],
                [
                  99.73929,
                  12.61637
                ],
                [
                  99.73503,
                  12.61378
                ],
                [
                  99.72664,
                  12.6129
                ],
                [
                  99.72209,
                  12.60929
                ],
                [
                  99.72048,
                  12.60255
                ],
                [
                  99.71695,
                  12.60034
                ],
                [
                  99.70392,
                  12.60882
                ],
                [
                  99.69571,
                  12.61125
                ],
                [
                  99.69197,
                  12.61629
                ],
                [
                  99.68673,
                  12.62837
                ],
                [
                  99.68046,
                  12.63545
                ],
                [
                  99.66913,
                  12.63747
                ],
                [
                  99.66131,
                  12.63737
                ],
                [
                  99.65689,
                  12.63566
                ],
                [
                  99.65479,
                  12.63897
                ],
                [
                  99.64781,
                  12.64101
                ],
                [
                  99.62243,
                  12.64524
                ],
                [
                  99.61959,
                  12.64151
                ],
                [
                  99.61872,
                  12.6371
                ],
                [
                  99.61696,
                  12.64025
                ],
                [
                  99.61633,
                  12.65361
                ],
                [
                  99.61616,
                  12.6635
                ],
                [
                  99.61784,
                  12.68091
                ],
                [
                  99.61547,
                  12.69359
                ],
                [
                  99.61756,
                  12.70525
                ],
                [
                  99.61603,
                  12.71122
                ],
                [
                  99.61637,
                  12.71527
                ],
                [
                  99.60848,
                  12.72151
                ],
                [
                  99.60394,
                  12.72296
                ],
                [
                  99.60239,
                  12.72555
                ],
                [
                  99.60296,
                  12.73498
                ],
                [
                  99.60633,
                  12.74281
                ],
                [
                  99.60575,
                  12.74724
                ],
                [
                  99.60765,
                  12.75258
                ],
                [
                  99.61454,
                  12.75748
                ],
                [
                  99.61719,
                  12.75474
                ],
                [
                  99.62171,
                  12.75586
                ],
                [
                  99.62527,
                  12.75366
                ],
                [
                  99.62526,
                  12.7561
                ],
                [
                  99.62801,
                  12.75463
                ],
                [
                  99.63032,
                  12.75554
                ],
                [
                  99.63309,
                  12.75363
                ],
                [
                  99.63543,
                  12.75629
                ],
                [
                  99.64433,
                  12.75839
                ],
                [
                  99.64705,
                  12.76178
                ],
                [
                  99.64813,
                  12.76545
                ],
                [
                  99.66031,
                  12.76862
                ],
                [
                  99.67688,
                  12.77481
                ],
                [
                  99.6991,
                  12.77408
                ],
                [
                  99.7084,
                  12.77806
                ],
                [
                  99.71498,
                  12.77894
                ],
                [
                  99.722,
                  12.77669
                ],
                [
                  99.73332,
                  12.76865
                ],
                [
                  99.73694,
                  12.76819
                ],
                [
                  99.74579,
                  12.77062
                ],
                [
                  99.7515,
                  12.77433
                ],
                [
                  99.7547,
                  12.77839
                ],
                [
                  99.7638,
                  12.78076
                ],
                [
                  99.76668,
                  12.78315
                ],
                [
                  99.76832,
                  12.78632
                ],
                [
                  99.77046,
                  12.78546
                ],
                [
                  99.77245,
                  12.78661
                ],
                [
                  99.77386,
                  12.78503
                ],
                [
                  99.7802,
                  12.78384
                ],
                [
                  99.78024,
                  12.78207
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760513",
          "tambon": "ต.เขากระปุก",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "โรงเรียนบ้านเขาอ่างแก้ว",
          "latitude": 12.668859,
          "longitude": 99.65604,
          "sum_rainfall_mm": 123.6,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.78024,
                  12.78207
                ],
                [
                  99.78434,
                  12.77597
                ],
                [
                  99.79028,
                  12.77212
                ],
                [
                  99.79248,
                  12.77221
                ],
                [
                  99.79243,
                  12.76901
                ],
                [
                  99.79522,
                  12.76823
                ],
                [
                  99.79536,
                  12.76634
                ],
                [
                  99.79709,
                  12.76533
                ],
                [
                  99.79723,
                  12.77563
                ],
                [
                  99.80436,
                  12.77621
                ],
                [
                  99.81148,
                  12.77525
                ],
                [
                  99.81589,
                  12.77747
                ],
                [
                  99.81915,
                  12.77761
                ],
                [
                  99.83425,
                  12.78259
                ],
                [
                  99.83987,
                  12.783
                ],
                [
                  99.84184,
                  12.77914
                ],
                [
                  99.84114,
                  12.77781
                ],
                [
                  99.84215,
                  12.77417
                ],
                [
                  99.84525,
                  12.77334
                ],
                [
                  99.84711,
                  12.77026
                ],
                [
                  99.85302,
                  12.76647
                ],
                [
                  99.85153,
                  12.76232
                ],
                [
                  99.85297,
                  12.75891
                ],
                [
                  99.84974,
                  12.7548
                ],
                [
                  99.84469,
                  12.75367
                ],
                [
                  99.83428,
                  12.74753
                ],
                [
                  99.8264,
                  12.74898
                ],
                [
                  99.82107,
                  12.74684
                ],
                [
                  99.81593,
                  12.73604
                ],
                [
                  99.81166,
                  12.73125
                ],
                [
                  99.80964,
                  12.73087
                ],
                [
                  99.80107,
                  12.73327
                ],
                [
                  99.78174,
                  12.73626
                ],
                [
                  99.78373,
                  12.7245
                ],
                [
                  99.78804,
                  12.7176
                ],
                [
                  99.79469,
                  12.71173
                ],
                [
                  99.78945,
                  12.69727
                ],
                [
                  99.77697,
                  12.68345
                ],
                [
                  99.77656,
                  12.67953
                ],
                [
                  99.77835,
                  12.67361
                ],
                [
                  99.77924,
                  12.6643
                ],
                [
                  99.77888,
                  12.65749
                ],
                [
                  99.77351,
                  12.65171
                ],
                [
                  99.77101,
                  12.6439
                ],
                [
                  99.7642,
                  12.63994
                ],
                [
                  99.75933,
                  12.63378
                ],
                [
                  99.75416,
                  12.63247
                ],
                [
                  99.75299,
                  12.62905
                ],
                [
                  99.75275,
                  12.61811
                ],
                [
                  99.74621,
                  12.61814
                ],
                [
                  99.74256,
                  12.61551
                ],
                [
                  99.73929,
                  12.61637
                ],
                [
                  99.73503,
                  12.61378
                ],
                [
                  99.72664,
                  12.6129
                ],
                [
                  99.72209,
                  12.60929
                ],
                [
                  99.72048,
                  12.60255
                ],
                [
                  99.71695,
                  12.60034
                ],
                [
                  99.70392,
                  12.60882
                ],
                [
                  99.69571,
                  12.61125
                ],
                [
                  99.69197,
                  12.61629
                ],
                [
                  99.68673,
                  12.62837
                ],
                [
                  99.68046,
                  12.63545
                ],
                [
                  99.66913,
                  12.63747
                ],
                [
                  99.66131,
                  12.63737
                ],
                [
                  99.65689,
                  12.63566
                ],
                [
                  99.65479,
                  12.63897
                ],
                [
                  99.64781,
                  12.64101
                ],
                [
                  99.62243,
                  12.64524
                ],
                [
                  99.61959,
                  12.64151
                ],
                [
                  99.61872,
                  12.6371
                ],
                [
                  99.61696,
                  12.64025
                ],
                [
                  99.61633,
                  12.65361
                ],
                [
                  99.61616,
                  12.6635
                ],
                [
                  99.61784,
                  12.68091
                ],
                [
                  99.61547,
                  12.69359
                ],
                [
                  99.61756,
                  12.70525
                ],
                [
                  99.61603,
                  12.71122
                ],
                [
                  99.61637,
                  12.71527
                ],
                [
                  99.60848,
                  12.72151
                ],
                [
                  99.60394,
                  12.72296
                ],
                [
                  99.60239,
                  12.72555
                ],
                [
                  99.60296,
                  12.73498
                ],
                [
                  99.60633,
                  12.74281
                ],
                [
                  99.60575,
                  12.74724
                ],
                [
                  99.60765,
                  12.75258
                ],
                [
                  99.61454,
                  12.75748
                ],
                [
                  99.61719,
                  12.75474
                ],
                [
                  99.62171,
                  12.75586
                ],
                [
                  99.62527,
                  12.75366
                ],
                [
                  99.62526,
                  12.7561
                ],
                [
                  99.62801,
                  12.75463
                ],
                [
                  99.63032,
                  12.75554
                ],
                [
                  99.63309,
                  12.75363
                ],
                [
                  99.63543,
                  12.75629
                ],
                [
                  99.64433,
                  12.75839
                ],
                [
                  99.64705,
                  12.76178
                ],
                [
                  99.64813,
                  12.76545
                ],
                [
                  99.66031,
                  12.76862
                ],
                [
                  99.67688,
                  12.77481
                ],
                [
                  99.6991,
                  12.77408
                ],
                [
                  99.7084,
                  12.77806
                ],
                [
                  99.71498,
                  12.77894
                ],
                [
                  99.722,
                  12.77669
                ],
                [
                  99.73332,
                  12.76865
                ],
                [
                  99.73694,
                  12.76819
                ],
                [
                  99.74579,
                  12.77062
                ],
                [
                  99.7515,
                  12.77433
                ],
                [
                  99.7547,
                  12.77839
                ],
                [
                  99.7638,
                  12.78076
                ],
                [
                  99.76668,
                  12.78315
                ],
                [
                  99.76832,
                  12.78632
                ],
                [
                  99.77046,
                  12.78546
                ],
                [
                  99.77245,
                  12.78661
                ],
                [
                  99.77386,
                  12.78503
                ],
                [
                  99.7802,
                  12.78384
                ],
                [
                  99.78024,
                  12.78207
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760513",
          "tambon": "ต.เขากระปุก",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.เขากระปุก",
          "latitude": 12.71212,
          "longitude": 99.7317,
          "sum_rainfall_mm": 48.8,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.78024,
                  12.78207
                ],
                [
                  99.78434,
                  12.77597
                ],
                [
                  99.79028,
                  12.77212
                ],
                [
                  99.79248,
                  12.77221
                ],
                [
                  99.79243,
                  12.76901
                ],
                [
                  99.79522,
                  12.76823
                ],
                [
                  99.79536,
                  12.76634
                ],
                [
                  99.79709,
                  12.76533
                ],
                [
                  99.79723,
                  12.77563
                ],
                [
                  99.80436,
                  12.77621
                ],
                [
                  99.81148,
                  12.77525
                ],
                [
                  99.81589,
                  12.77747
                ],
                [
                  99.81915,
                  12.77761
                ],
                [
                  99.83425,
                  12.78259
                ],
                [
                  99.83987,
                  12.783
                ],
                [
                  99.84184,
                  12.77914
                ],
                [
                  99.84114,
                  12.77781
                ],
                [
                  99.84215,
                  12.77417
                ],
                [
                  99.84525,
                  12.77334
                ],
                [
                  99.84711,
                  12.77026
                ],
                [
                  99.85302,
                  12.76647
                ],
                [
                  99.85153,
                  12.76232
                ],
                [
                  99.85297,
                  12.75891
                ],
                [
                  99.84974,
                  12.7548
                ],
                [
                  99.84469,
                  12.75367
                ],
                [
                  99.83428,
                  12.74753
                ],
                [
                  99.8264,
                  12.74898
                ],
                [
                  99.82107,
                  12.74684
                ],
                [
                  99.81593,
                  12.73604
                ],
                [
                  99.81166,
                  12.73125
                ],
                [
                  99.80964,
                  12.73087
                ],
                [
                  99.80107,
                  12.73327
                ],
                [
                  99.78174,
                  12.73626
                ],
                [
                  99.78373,
                  12.7245
                ],
                [
                  99.78804,
                  12.7176
                ],
                [
                  99.79469,
                  12.71173
                ],
                [
                  99.78945,
                  12.69727
                ],
                [
                  99.77697,
                  12.68345
                ],
                [
                  99.77656,
                  12.67953
                ],
                [
                  99.77835,
                  12.67361
                ],
                [
                  99.77924,
                  12.6643
                ],
                [
                  99.77888,
                  12.65749
                ],
                [
                  99.77351,
                  12.65171
                ],
                [
                  99.77101,
                  12.6439
                ],
                [
                  99.7642,
                  12.63994
                ],
                [
                  99.75933,
                  12.63378
                ],
                [
                  99.75416,
                  12.63247
                ],
                [
                  99.75299,
                  12.62905
                ],
                [
                  99.75275,
                  12.61811
                ],
                [
                  99.74621,
                  12.61814
                ],
                [
                  99.74256,
                  12.61551
                ],
                [
                  99.73929,
                  12.61637
                ],
                [
                  99.73503,
                  12.61378
                ],
                [
                  99.72664,
                  12.6129
                ],
                [
                  99.72209,
                  12.60929
                ],
                [
                  99.72048,
                  12.60255
                ],
                [
                  99.71695,
                  12.60034
                ],
                [
                  99.70392,
                  12.60882
                ],
                [
                  99.69571,
                  12.61125
                ],
                [
                  99.69197,
                  12.61629
                ],
                [
                  99.68673,
                  12.62837
                ],
                [
                  99.68046,
                  12.63545
                ],
                [
                  99.66913,
                  12.63747
                ],
                [
                  99.66131,
                  12.63737
                ],
                [
                  99.65689,
                  12.63566
                ],
                [
                  99.65479,
                  12.63897
                ],
                [
                  99.64781,
                  12.64101
                ],
                [
                  99.62243,
                  12.64524
                ],
                [
                  99.61959,
                  12.64151
                ],
                [
                  99.61872,
                  12.6371
                ],
                [
                  99.61696,
                  12.64025
                ],
                [
                  99.61633,
                  12.65361
                ],
                [
                  99.61616,
                  12.6635
                ],
                [
                  99.61784,
                  12.68091
                ],
                [
                  99.61547,
                  12.69359
                ],
                [
                  99.61756,
                  12.70525
                ],
                [
                  99.61603,
                  12.71122
                ],
                [
                  99.61637,
                  12.71527
                ],
                [
                  99.60848,
                  12.72151
                ],
                [
                  99.60394,
                  12.72296
                ],
                [
                  99.60239,
                  12.72555
                ],
                [
                  99.60296,
                  12.73498
                ],
                [
                  99.60633,
                  12.74281
                ],
                [
                  99.60575,
                  12.74724
                ],
                [
                  99.60765,
                  12.75258
                ],
                [
                  99.61454,
                  12.75748
                ],
                [
                  99.61719,
                  12.75474
                ],
                [
                  99.62171,
                  12.75586
                ],
                [
                  99.62527,
                  12.75366
                ],
                [
                  99.62526,
                  12.7561
                ],
                [
                  99.62801,
                  12.75463
                ],
                [
                  99.63032,
                  12.75554
                ],
                [
                  99.63309,
                  12.75363
                ],
                [
                  99.63543,
                  12.75629
                ],
                [
                  99.64433,
                  12.75839
                ],
                [
                  99.64705,
                  12.76178
                ],
                [
                  99.64813,
                  12.76545
                ],
                [
                  99.66031,
                  12.76862
                ],
                [
                  99.67688,
                  12.77481
                ],
                [
                  99.6991,
                  12.77408
                ],
                [
                  99.7084,
                  12.77806
                ],
                [
                  99.71498,
                  12.77894
                ],
                [
                  99.722,
                  12.77669
                ],
                [
                  99.73332,
                  12.76865
                ],
                [
                  99.73694,
                  12.76819
                ],
                [
                  99.74579,
                  12.77062
                ],
                [
                  99.7515,
                  12.77433
                ],
                [
                  99.7547,
                  12.77839
                ],
                [
                  99.7638,
                  12.78076
                ],
                [
                  99.76668,
                  12.78315
                ],
                [
                  99.76832,
                  12.78632
                ],
                [
                  99.77046,
                  12.78546
                ],
                [
                  99.77245,
                  12.78661
                ],
                [
                  99.77386,
                  12.78503
                ],
                [
                  99.7802,
                  12.78384
                ],
                [
                  99.78024,
                  12.78207
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760506",
          "tambon": "ต.ท่าไม้รวก",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านห้วยตะวาย",
          "latitude": 12.804497,
          "longitude": 99.797363,
          "sum_rainfall_mm": 2.5,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.85495,
                  12.91534
                ],
                [
                  99.85475,
                  12.91162
                ],
                [
                  99.85717,
                  12.90696
                ],
                [
                  99.85415,
                  12.89711
                ],
                [
                  99.85772,
                  12.88778
                ],
                [
                  99.85683,
                  12.88322
                ],
                [
                  99.85906,
                  12.88041
                ],
                [
                  99.85979,
                  12.87036
                ],
                [
                  99.86283,
                  12.86615
                ],
                [
                  99.85186,
                  12.857
                ],
                [
                  99.85052,
                  12.84856
                ],
                [
                  99.85452,
                  12.84736
                ],
                [
                  99.85694,
                  12.84287
                ],
                [
                  99.85675,
                  12.83653
                ],
                [
                  99.8581,
                  12.83413
                ],
                [
                  99.85625,
                  12.83058
                ],
                [
                  99.84823,
                  12.82463
                ],
                [
                  99.85365,
                  12.82085
                ],
                [
                  99.85619,
                  12.81594
                ],
                [
                  99.85956,
                  12.8165
                ],
                [
                  99.86567,
                  12.81415
                ],
                [
                  99.86386,
                  12.80094
                ],
                [
                  99.86202,
                  12.7976
                ],
                [
                  99.86096,
                  12.79125
                ],
                [
                  99.857,
                  12.78711
                ],
                [
                  99.85536,
                  12.7868
                ],
                [
                  99.84693,
                  12.78883
                ],
                [
                  99.84531,
                  12.78223
                ],
                [
                  99.84184,
                  12.77914
                ],
                [
                  99.83987,
                  12.783
                ],
                [
                  99.83722,
                  12.78339
                ],
                [
                  99.81915,
                  12.77761
                ],
                [
                  99.81589,
                  12.77747
                ],
                [
                  99.81148,
                  12.77525
                ],
                [
                  99.80436,
                  12.77621
                ],
                [
                  99.79723,
                  12.77563
                ],
                [
                  99.79672,
                  12.80133
                ],
                [
                  99.78978,
                  12.80513
                ],
                [
                  99.78982,
                  12.811
                ],
                [
                  99.7933,
                  12.81331
                ],
                [
                  99.79266,
                  12.81603
                ],
                [
                  99.79389,
                  12.81872
                ],
                [
                  99.79202,
                  12.82582
                ],
                [
                  99.78867,
                  12.82879
                ],
                [
                  99.78978,
                  12.83409
                ],
                [
                  99.79158,
                  12.83501
                ],
                [
                  99.79412,
                  12.83436
                ],
                [
                  99.795,
                  12.83535
                ],
                [
                  99.79451,
                  12.83672
                ],
                [
                  99.79292,
                  12.83803
                ],
                [
                  99.7888,
                  12.83764
                ],
                [
                  99.78447,
                  12.83311
                ],
                [
                  99.77942,
                  12.83113
                ],
                [
                  99.77433,
                  12.83482
                ],
                [
                  99.76994,
                  12.83981
                ],
                [
                  99.76328,
                  12.84025
                ],
                [
                  99.7561,
                  12.84931
                ],
                [
                  99.75378,
                  12.85967
                ],
                [
                  99.75144,
                  12.86416
                ],
                [
                  99.75032,
                  12.86558
                ],
                [
                  99.74352,
                  12.86818
                ],
                [
                  99.74173,
                  12.87177
                ],
                [
                  99.73737,
                  12.87518
                ],
                [
                  99.73561,
                  12.8785
                ],
                [
                  99.73942,
                  12.87823
                ],
                [
                  99.7426,
                  12.88126
                ],
                [
                  99.74589,
                  12.88044
                ],
                [
                  99.75435,
                  12.88734
                ],
                [
                  99.76279,
                  12.88688
                ],
                [
                  99.76478,
                  12.88485
                ],
                [
                  99.76612,
                  12.88489
                ],
                [
                  99.76771,
                  12.88597
                ],
                [
                  99.7707,
                  12.89175
                ],
                [
                  99.77679,
                  12.88901
                ],
                [
                  99.78152,
                  12.89185
                ],
                [
                  99.79155,
                  12.89417
                ],
                [
                  99.79766,
                  12.89835
                ],
                [
                  99.81053,
                  12.9035
                ],
                [
                  99.82781,
                  12.89982
                ],
                [
                  99.82931,
                  12.90078
                ],
                [
                  99.8305,
                  12.90401
                ],
                [
                  99.83382,
                  12.90611
                ],
                [
                  99.83657,
                  12.90636
                ],
                [
                  99.83868,
                  12.90918
                ],
                [
                  99.84784,
                  12.91087
                ],
                [
                  99.85036,
                  12.91496
                ],
                [
                  99.85495,
                  12.91534
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760501",
          "tambon": "ต.ท่ายาง",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ทต.ท่ายาง",
          "latitude": 12.96333,
          "longitude": 99.89841,
          "sum_rainfall_mm": 23.2,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.91811,
                  13.00241
                ],
                [
                  99.9178,
                  12.99857
                ],
                [
                  99.92032,
                  12.99384
                ],
                [
                  99.91742,
                  12.98687
                ],
                [
                  99.92261,
                  12.97596
                ],
                [
                  99.92566,
                  12.94592
                ],
                [
                  99.92465,
                  12.93769
                ],
                [
                  99.92055,
                  12.93488
                ],
                [
                  99.92299,
                  12.92936
                ],
                [
                  99.92184,
                  12.92487
                ],
                [
                  99.92384,
                  12.91955
                ],
                [
                  99.91949,
                  12.91876
                ],
                [
                  99.92076,
                  12.91777
                ],
                [
                  99.92478,
                  12.91816
                ],
                [
                  99.92602,
                  12.91527
                ],
                [
                  99.92375,
                  12.91308
                ],
                [
                  99.92519,
                  12.90949
                ],
                [
                  99.92007,
                  12.90758
                ],
                [
                  99.92029,
                  12.9052
                ],
                [
                  99.91715,
                  12.90639
                ],
                [
                  99.91217,
                  12.90564
                ],
                [
                  99.9061,
                  12.90881
                ],
                [
                  99.88705,
                  12.91206
                ],
                [
                  99.88538,
                  12.9177
                ],
                [
                  99.88192,
                  12.91931
                ],
                [
                  99.88105,
                  12.93169
                ],
                [
                  99.88286,
                  12.94394
                ],
                [
                  99.88236,
                  12.95285
                ],
                [
                  99.88511,
                  12.96282
                ],
                [
                  99.88455,
                  12.9742
                ],
                [
                  99.89332,
                  12.97572
                ],
                [
                  99.89514,
                  12.97725
                ],
                [
                  99.89514,
                  12.97923
                ],
                [
                  99.88923,
                  12.98055
                ],
                [
                  99.88948,
                  12.98609
                ],
                [
                  99.89271,
                  12.99203
                ],
                [
                  99.89844,
                  12.99116
                ],
                [
                  99.90012,
                  12.9948
                ],
                [
                  99.89974,
                  12.99832
                ],
                [
                  99.89606,
                  12.99907
                ],
                [
                  99.89794,
                  13.00294
                ],
                [
                  99.89498,
                  13.00388
                ],
                [
                  99.89341,
                  13.00629
                ],
                [
                  99.89341,
                  13.0082
                ],
                [
                  99.8956,
                  13.01163
                ],
                [
                  99.89407,
                  13.01581
                ],
                [
                  99.89762,
                  13.01576
                ],
                [
                  99.90451,
                  13.00811
                ],
                [
                  99.91148,
                  13.0072
                ],
                [
                  99.91811,
                  13.00241
                ]
              ]
            ]
          }
        },
        {
          "geocode": "760507",
          "tambon": "ต.วังไคร้",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านวังไคร้",
          "latitude": 12.922013,
          "longitude": 99.817665,
          "sum_rainfall_mm": 7.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.8482,
                  12.91166
                ],
                [
                  99.84602,
                  12.91033
                ],
                [
                  99.83868,
                  12.90918
                ],
                [
                  99.83657,
                  12.90636
                ],
                [
                  99.83382,
                  12.90611
                ],
                [
                  99.8305,
                  12.90401
                ],
                [
                  99.82931,
                  12.90078
                ],
                [
                  99.82781,
                  12.89982
                ],
                [
                  99.81053,
                  12.9035
                ],
                [
                  99.79766,
                  12.89835
                ],
                [
                  99.79155,
                  12.89417
                ],
                [
                  99.78152,
                  12.89185
                ],
                [
                  99.77679,
                  12.88901
                ],
                [
                  99.7707,
                  12.89175
                ],
                [
                  99.76771,
                  12.88597
                ],
                [
                  99.76612,
                  12.88489
                ],
                [
                  99.76478,
                  12.88485
                ],
                [
                  99.76279,
                  12.88688
                ],
                [
                  99.75435,
                  12.88734
                ],
                [
                  99.74589,
                  12.88044
                ],
                [
                  99.7426,
                  12.88126
                ],
                [
                  99.73942,
                  12.87823
                ],
                [
                  99.73561,
                  12.8785
                ],
                [
                  99.74126,
                  12.88336
                ],
                [
                  99.75022,
                  12.88667
                ],
                [
                  99.75599,
                  12.89044
                ],
                [
                  99.76927,
                  12.90142
                ],
                [
                  99.77458,
                  12.90356
                ],
                [
                  99.78204,
                  12.91359
                ],
                [
                  99.7901,
                  12.91786
                ],
                [
                  99.7902,
                  12.92067
                ],
                [
                  99.7849,
                  12.92758
                ],
                [
                  99.78234,
                  12.92878
                ],
                [
                  99.78017,
                  12.93529
                ],
                [
                  99.78473,
                  12.93734
                ],
                [
                  99.79159,
                  12.94904
                ],
                [
                  99.78973,
                  12.95744
                ],
                [
                  99.80605,
                  12.94501
                ],
                [
                  99.81315,
                  12.93807
                ],
                [
                  99.82084,
                  12.93667
                ],
                [
                  99.82311,
                  12.93481
                ],
                [
                  99.82471,
                  12.93553
                ],
                [
                  99.82688,
                  12.93402
                ],
                [
                  99.83041,
                  12.9344
                ],
                [
                  99.83294,
                  12.93299
                ],
                [
                  99.83867,
                  12.924
                ],
                [
                  99.84116,
                  12.91246
                ],
                [
                  99.8482,
                  12.91166
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701001",
          "tambon": "ต.บ้านคา",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านบึงเหนือ",
          "latitude": 13.454239,
          "longitude": 99.374164,
          "sum_rainfall_mm": 24.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.36251,
                  13.5019
                ],
                [
                  99.36953,
                  13.49525
                ],
                [
                  99.38233,
                  13.4867
                ],
                [
                  99.38441,
                  13.4826
                ],
                [
                  99.39228,
                  13.4926
                ],
                [
                  99.39598,
                  13.49388
                ],
                [
                  99.40026,
                  13.49403
                ],
                [
                  99.40383,
                  13.49242
                ],
                [
                  99.41176,
                  13.49393
                ],
                [
                  99.41615,
                  13.49103
                ],
                [
                  99.41718,
                  13.49175
                ],
                [
                  99.41825,
                  13.4965
                ],
                [
                  99.42591,
                  13.50049
                ],
                [
                  99.42089,
                  13.49811
                ],
                [
                  99.40912,
                  13.46794
                ],
                [
                  99.41273,
                  13.46006
                ],
                [
                  99.40356,
                  13.44906
                ],
                [
                  99.4079,
                  13.43427
                ],
                [
                  99.41317,
                  13.43077
                ],
                [
                  99.41444,
                  13.42811
                ],
                [
                  99.41774,
                  13.42793
                ],
                [
                  99.42318,
                  13.43064
                ],
                [
                  99.42549,
                  13.42816
                ],
                [
                  99.42918,
                  13.42671
                ],
                [
                  99.43001,
                  13.42238
                ],
                [
                  99.43602,
                  13.41876
                ],
                [
                  99.43904,
                  13.40963
                ],
                [
                  99.44331,
                  13.40345
                ],
                [
                  99.44882,
                  13.39937
                ],
                [
                  99.45496,
                  13.39695
                ],
                [
                  99.46272,
                  13.39468
                ],
                [
                  99.47298,
                  13.40257
                ],
                [
                  99.47455,
                  13.40144
                ],
                [
                  99.47755,
                  13.40236
                ],
                [
                  99.48636,
                  13.40102
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48351,
                  13.38044
                ],
                [
                  99.48184,
                  13.37962
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.32698,
                  13.36909
                ],
                [
                  99.32664,
                  13.37923
                ],
                [
                  99.32867,
                  13.38572
                ],
                [
                  99.32882,
                  13.3904
                ],
                [
                  99.34026,
                  13.39646
                ],
                [
                  99.34985,
                  13.39977
                ],
                [
                  99.35526,
                  13.40802
                ],
                [
                  99.35381,
                  13.41273
                ],
                [
                  99.35115,
                  13.41406
                ],
                [
                  99.34653,
                  13.42394
                ],
                [
                  99.34043,
                  13.43155
                ],
                [
                  99.33975,
                  13.434
                ],
                [
                  99.33562,
                  13.43756
                ],
                [
                  99.3329,
                  13.445
                ],
                [
                  99.33294,
                  13.44812
                ],
                [
                  99.33848,
                  13.45327
                ],
                [
                  99.34055,
                  13.45859
                ],
                [
                  99.34529,
                  13.46508
                ],
                [
                  99.34271,
                  13.47208
                ],
                [
                  99.33567,
                  13.47165
                ],
                [
                  99.33666,
                  13.47954
                ],
                [
                  99.33771,
                  13.48134
                ],
                [
                  99.34074,
                  13.48282
                ],
                [
                  99.35227,
                  13.48451
                ],
                [
                  99.3585,
                  13.48896
                ],
                [
                  99.35839,
                  13.49178
                ],
                [
                  99.35711,
                  13.49355
                ],
                [
                  99.35454,
                  13.49414
                ],
                [
                  99.3493,
                  13.49275
                ],
                [
                  99.34566,
                  13.49432
                ],
                [
                  99.34472,
                  13.50168
                ],
                [
                  99.34739,
                  13.51463
                ],
                [
                  99.34971,
                  13.51252
                ],
                [
                  99.35729,
                  13.51049
                ],
                [
                  99.36251,
                  13.5019
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านพุบอนบน",
          "latitude": 13.390971,
          "longitude": 99.499611,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านโป่งกระทิงล่าง",
          "latitude": 13.340467,
          "longitude": 99.453281,
          "sum_rainfall_mm": 41.5,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านห้วยน้ำใส",
          "latitude": 13.352029,
          "longitude": 99.395485,
          "sum_rainfall_mm": 9.5,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านพุน้ำร้อน",
          "latitude": 13.249012,
          "longitude": 99.428235,
          "sum_rainfall_mm": 8.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทจ.2 (บางกะม่า)",
          "latitude": 13.2724,
          "longitude": 99.4988,
          "sum_rainfall_mm": 117.9,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701002",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.บ้านบึง",
          "latitude": 13.33639,
          "longitude": 99.45017,
          "sum_rainfall_mm": 61.400000000000006,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.52303,
                  13.39724
                ],
                [
                  99.52439,
                  13.37729
                ],
                [
                  99.52172,
                  13.36408
                ],
                [
                  99.52187,
                  13.3519
                ],
                [
                  99.521,
                  13.34629
                ],
                [
                  99.51808,
                  13.33908
                ],
                [
                  99.51598,
                  13.32113
                ],
                [
                  99.51494,
                  13.31836
                ],
                [
                  99.50552,
                  13.31163
                ],
                [
                  99.49936,
                  13.30145
                ],
                [
                  99.49845,
                  13.2966
                ],
                [
                  99.50776,
                  13.29198
                ],
                [
                  99.51199,
                  13.28578
                ],
                [
                  99.51664,
                  13.28346
                ],
                [
                  99.51521,
                  13.27937
                ],
                [
                  99.50956,
                  13.27647
                ],
                [
                  99.51388,
                  13.27332
                ],
                [
                  99.51544,
                  13.26824
                ],
                [
                  99.5128,
                  13.25168
                ],
                [
                  99.51081,
                  13.25022
                ],
                [
                  99.51019,
                  13.24819
                ],
                [
                  99.51525,
                  13.24204
                ],
                [
                  99.52046,
                  13.23216
                ],
                [
                  99.52249,
                  13.2236
                ],
                [
                  99.53004,
                  13.20796
                ],
                [
                  99.52342,
                  13.20967
                ],
                [
                  99.51956,
                  13.20823
                ],
                [
                  99.51469,
                  13.2015
                ],
                [
                  99.51394,
                  13.19321
                ],
                [
                  99.51045,
                  13.19044
                ],
                [
                  99.50721,
                  13.18065
                ],
                [
                  99.50082,
                  13.17981
                ],
                [
                  99.49953,
                  13.18442
                ],
                [
                  99.49131,
                  13.18927
                ],
                [
                  99.48968,
                  13.19168
                ],
                [
                  99.48415,
                  13.19112
                ],
                [
                  99.48059,
                  13.19898
                ],
                [
                  99.47825,
                  13.20071
                ],
                [
                  99.46898,
                  13.19342
                ],
                [
                  99.46411,
                  13.1877
                ],
                [
                  99.46188,
                  13.18704
                ],
                [
                  99.4599,
                  13.18181
                ],
                [
                  99.45778,
                  13.18617
                ],
                [
                  99.45517,
                  13.18617
                ],
                [
                  99.45356,
                  13.18454
                ],
                [
                  99.45117,
                  13.18528
                ],
                [
                  99.44715,
                  13.18417
                ],
                [
                  99.44149,
                  13.18408
                ],
                [
                  99.43702,
                  13.18544
                ],
                [
                  99.43608,
                  13.18636
                ],
                [
                  99.43601,
                  13.19018
                ],
                [
                  99.43356,
                  13.19031
                ],
                [
                  99.432,
                  13.19464
                ],
                [
                  99.42794,
                  13.19756
                ],
                [
                  99.4222,
                  13.1983
                ],
                [
                  99.41849,
                  13.19633
                ],
                [
                  99.41254,
                  13.19935
                ],
                [
                  99.41055,
                  13.20199
                ],
                [
                  99.40767,
                  13.21079
                ],
                [
                  99.40514,
                  13.21299
                ],
                [
                  99.40148,
                  13.21244
                ],
                [
                  99.39825,
                  13.21726
                ],
                [
                  99.39687,
                  13.21723
                ],
                [
                  99.39354,
                  13.21251
                ],
                [
                  99.38026,
                  13.21658
                ],
                [
                  99.3774,
                  13.21845
                ],
                [
                  99.37352,
                  13.21847
                ],
                [
                  99.37143,
                  13.21991
                ],
                [
                  99.3708,
                  13.22825
                ],
                [
                  99.36759,
                  13.23313
                ],
                [
                  99.36213,
                  13.2332
                ],
                [
                  99.35997,
                  13.23209
                ],
                [
                  99.35769,
                  13.23272
                ],
                [
                  99.35017,
                  13.24351
                ],
                [
                  99.34325,
                  13.23794
                ],
                [
                  99.34193,
                  13.2345
                ],
                [
                  99.33828,
                  13.23237
                ],
                [
                  99.33889,
                  13.22819
                ],
                [
                  99.33535,
                  13.22235
                ],
                [
                  99.33162,
                  13.22207
                ],
                [
                  99.33003,
                  13.21991
                ],
                [
                  99.32733,
                  13.22162
                ],
                [
                  99.32345,
                  13.22112
                ],
                [
                  99.32462,
                  13.21467
                ],
                [
                  99.32135,
                  13.21427
                ],
                [
                  99.3186,
                  13.20771
                ],
                [
                  99.31793,
                  13.2011
                ],
                [
                  99.31905,
                  13.19901
                ],
                [
                  99.31875,
                  13.1892
                ],
                [
                  99.32448,
                  13.18564
                ],
                [
                  99.32583,
                  13.18304
                ],
                [
                  99.32381,
                  13.17704
                ],
                [
                  99.31107,
                  13.1715
                ],
                [
                  99.30465,
                  13.16355
                ],
                [
                  99.29544,
                  13.16251
                ],
                [
                  99.29151,
                  13.15874
                ],
                [
                  99.28144,
                  13.15223
                ],
                [
                  99.26999,
                  13.14866
                ],
                [
                  99.26437,
                  13.15607
                ],
                [
                  99.26487,
                  13.1593
                ],
                [
                  99.25814,
                  13.16417
                ],
                [
                  99.25806,
                  13.16634
                ],
                [
                  99.25484,
                  13.17009
                ],
                [
                  99.25215,
                  13.1713
                ],
                [
                  99.25015,
                  13.17622
                ],
                [
                  99.2457,
                  13.18022
                ],
                [
                  99.24575,
                  13.18555
                ],
                [
                  99.24017,
                  13.18713
                ],
                [
                  99.2374,
                  13.1914
                ],
                [
                  99.23404,
                  13.1928
                ],
                [
                  99.2342,
                  13.19515
                ],
                [
                  99.22913,
                  13.20289
                ],
                [
                  99.22041,
                  13.2047
                ],
                [
                  99.21545,
                  13.20092
                ],
                [
                  99.20999,
                  13.20757
                ],
                [
                  99.20979,
                  13.21178
                ],
                [
                  99.20594,
                  13.21499
                ],
                [
                  99.20387,
                  13.21904
                ],
                [
                  99.20712,
                  13.22212
                ],
                [
                  99.20892,
                  13.22591
                ],
                [
                  99.20783,
                  13.23297
                ],
                [
                  99.2044,
                  13.23681
                ],
                [
                  99.20473,
                  13.24064
                ],
                [
                  99.20143,
                  13.24471
                ],
                [
                  99.20096,
                  13.24768
                ],
                [
                  99.19791,
                  13.2489
                ],
                [
                  99.19843,
                  13.25375
                ],
                [
                  99.19645,
                  13.25572
                ],
                [
                  99.19716,
                  13.25781
                ],
                [
                  99.20106,
                  13.25856
                ],
                [
                  99.20279,
                  13.26137
                ],
                [
                  99.20859,
                  13.25998
                ],
                [
                  99.21134,
                  13.26171
                ],
                [
                  99.20845,
                  13.2667
                ],
                [
                  99.20097,
                  13.27221
                ],
                [
                  99.19929,
                  13.27751
                ],
                [
                  99.19349,
                  13.28112
                ],
                [
                  99.19333,
                  13.28336
                ],
                [
                  99.18701,
                  13.29092
                ],
                [
                  99.18973,
                  13.29452
                ],
                [
                  99.1899,
                  13.30139
                ],
                [
                  99.19408,
                  13.30429
                ],
                [
                  99.19092,
                  13.30693
                ],
                [
                  99.19075,
                  13.31524
                ],
                [
                  99.19221,
                  13.32314
                ],
                [
                  99.19681,
                  13.32468
                ],
                [
                  99.19877,
                  13.3291
                ],
                [
                  99.20274,
                  13.32323
                ],
                [
                  99.20344,
                  13.31818
                ],
                [
                  99.20657,
                  13.31307
                ],
                [
                  99.22059,
                  13.30146
                ],
                [
                  99.22328,
                  13.30132
                ],
                [
                  99.22594,
                  13.30319
                ],
                [
                  99.22829,
                  13.3032
                ],
                [
                  99.22807,
                  13.30666
                ],
                [
                  99.23404,
                  13.31728
                ],
                [
                  99.23633,
                  13.31893
                ],
                [
                  99.23942,
                  13.31749
                ],
                [
                  99.23851,
                  13.31147
                ],
                [
                  99.24319,
                  13.31092
                ],
                [
                  99.24398,
                  13.30651
                ],
                [
                  99.24576,
                  13.30867
                ],
                [
                  99.24755,
                  13.30906
                ],
                [
                  99.24853,
                  13.3071
                ],
                [
                  99.25077,
                  13.30773
                ],
                [
                  99.25108,
                  13.30397
                ],
                [
                  99.25233,
                  13.30502
                ],
                [
                  99.25435,
                  13.30346
                ],
                [
                  99.25666,
                  13.30511
                ],
                [
                  99.25903,
                  13.30267
                ],
                [
                  99.26268,
                  13.3047
                ],
                [
                  99.26715,
                  13.30343
                ],
                [
                  99.27035,
                  13.30811
                ],
                [
                  99.27454,
                  13.30807
                ],
                [
                  99.27519,
                  13.30942
                ],
                [
                  99.274,
                  13.31216
                ],
                [
                  99.27604,
                  13.31212
                ],
                [
                  99.2793,
                  13.31879
                ],
                [
                  99.28102,
                  13.3175
                ],
                [
                  99.28506,
                  13.31879
                ],
                [
                  99.28592,
                  13.31594
                ],
                [
                  99.28762,
                  13.31514
                ],
                [
                  99.2912,
                  13.31881
                ],
                [
                  99.29274,
                  13.31724
                ],
                [
                  99.29257,
                  13.3212
                ],
                [
                  99.29383,
                  13.32419
                ],
                [
                  99.29264,
                  13.32619
                ],
                [
                  99.29897,
                  13.3277
                ],
                [
                  99.29897,
                  13.33021
                ],
                [
                  99.29746,
                  13.33152
                ],
                [
                  99.30221,
                  13.33399
                ],
                [
                  99.3024,
                  13.34316
                ],
                [
                  99.30936,
                  13.34454
                ],
                [
                  99.31238,
                  13.34814
                ],
                [
                  99.31723,
                  13.35679
                ],
                [
                  99.31814,
                  13.36697
                ],
                [
                  99.32137,
                  13.37027
                ],
                [
                  99.32347,
                  13.36961
                ],
                [
                  99.32641,
                  13.37045
                ],
                [
                  99.32661,
                  13.36904
                ],
                [
                  99.33382,
                  13.36595
                ],
                [
                  99.34494,
                  13.35398
                ],
                [
                  99.35724,
                  13.34436
                ],
                [
                  99.36185,
                  13.34302
                ],
                [
                  99.37008,
                  13.34274
                ],
                [
                  99.37408,
                  13.34488
                ],
                [
                  99.37971,
                  13.35016
                ],
                [
                  99.3804,
                  13.35294
                ],
                [
                  99.38269,
                  13.35516
                ],
                [
                  99.39123,
                  13.35554
                ],
                [
                  99.39969,
                  13.36174
                ],
                [
                  99.40769,
                  13.36565
                ],
                [
                  99.4177,
                  13.36717
                ],
                [
                  99.42896,
                  13.37225
                ],
                [
                  99.4304,
                  13.37931
                ],
                [
                  99.43379,
                  13.38147
                ],
                [
                  99.43689,
                  13.38113
                ],
                [
                  99.43913,
                  13.3836
                ],
                [
                  99.44104,
                  13.382
                ],
                [
                  99.4547,
                  13.37699
                ],
                [
                  99.45872,
                  13.37824
                ],
                [
                  99.46289,
                  13.37774
                ],
                [
                  99.46652,
                  13.38127
                ],
                [
                  99.47473,
                  13.38282
                ],
                [
                  99.47905,
                  13.38234
                ],
                [
                  99.481,
                  13.37994
                ],
                [
                  99.48277,
                  13.37976
                ],
                [
                  99.48639,
                  13.39094
                ],
                [
                  99.48577,
                  13.39381
                ],
                [
                  99.4912,
                  13.39753
                ],
                [
                  99.49263,
                  13.40383
                ],
                [
                  99.49597,
                  13.40477
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.52115,
                  13.40158
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701003",
          "tambon": "ต.หนองพันจันทร์",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองธง",
          "latitude": 13.45973,
          "longitude": 99.439887,
          "sum_rainfall_mm": 31.5,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.46908,
                  13.50169
                ],
                [
                  99.47117,
                  13.50021
                ],
                [
                  99.47691,
                  13.49989
                ],
                [
                  99.47516,
                  13.49761
                ],
                [
                  99.47451,
                  13.49199
                ],
                [
                  99.46844,
                  13.48643
                ],
                [
                  99.46881,
                  13.48507
                ],
                [
                  99.47207,
                  13.48424
                ],
                [
                  99.47323,
                  13.48152
                ],
                [
                  99.47764,
                  13.48141
                ],
                [
                  99.47847,
                  13.47959
                ],
                [
                  99.4806,
                  13.47914
                ],
                [
                  99.49142,
                  13.46897
                ],
                [
                  99.49499,
                  13.46794
                ],
                [
                  99.49696,
                  13.46427
                ],
                [
                  99.50354,
                  13.45966
                ],
                [
                  99.50416,
                  13.45722
                ],
                [
                  99.50305,
                  13.44704
                ],
                [
                  99.50473,
                  13.44378
                ],
                [
                  99.50698,
                  13.44235
                ],
                [
                  99.51134,
                  13.44306
                ],
                [
                  99.51404,
                  13.44163
                ],
                [
                  99.53426,
                  13.42354
                ],
                [
                  99.54038,
                  13.41935
                ],
                [
                  99.53158,
                  13.41835
                ],
                [
                  99.52584,
                  13.41517
                ],
                [
                  99.5235,
                  13.4115
                ],
                [
                  99.52422,
                  13.40903
                ],
                [
                  99.5208,
                  13.40664
                ],
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.49473,
                  13.40452
                ],
                [
                  99.48636,
                  13.40102
                ],
                [
                  99.47755,
                  13.40236
                ],
                [
                  99.47455,
                  13.40144
                ],
                [
                  99.47298,
                  13.40257
                ],
                [
                  99.46681,
                  13.39701
                ],
                [
                  99.46162,
                  13.39469
                ],
                [
                  99.44882,
                  13.39937
                ],
                [
                  99.44331,
                  13.40345
                ],
                [
                  99.43904,
                  13.40963
                ],
                [
                  99.43602,
                  13.41876
                ],
                [
                  99.43001,
                  13.42238
                ],
                [
                  99.42918,
                  13.42671
                ],
                [
                  99.42549,
                  13.42816
                ],
                [
                  99.42318,
                  13.43064
                ],
                [
                  99.41774,
                  13.42793
                ],
                [
                  99.41444,
                  13.42811
                ],
                [
                  99.41317,
                  13.43077
                ],
                [
                  99.40832,
                  13.43345
                ],
                [
                  99.40356,
                  13.44906
                ],
                [
                  99.41273,
                  13.46006
                ],
                [
                  99.40912,
                  13.46794
                ],
                [
                  99.42089,
                  13.49811
                ],
                [
                  99.42686,
                  13.50133
                ],
                [
                  99.42859,
                  13.50527
                ],
                [
                  99.43873,
                  13.50487
                ],
                [
                  99.44097,
                  13.50648
                ],
                [
                  99.44823,
                  13.50647
                ],
                [
                  99.44875,
                  13.50772
                ],
                [
                  99.45707,
                  13.50841
                ],
                [
                  99.46515,
                  13.50623
                ],
                [
                  99.4717,
                  13.51128
                ],
                [
                  99.46908,
                  13.50169
                ]
              ]
            ]
          }
        },
        {
          "geocode": "701003",
          "tambon": "ต.หนองพันจันทร์",
          "amphoe": "อ.บ้านคา",
          "province": "จ.ราชบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองโก",
          "latitude": 13.427751,
          "longitude": 99.49674,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.46908,
                  13.50169
                ],
                [
                  99.47117,
                  13.50021
                ],
                [
                  99.47691,
                  13.49989
                ],
                [
                  99.47516,
                  13.49761
                ],
                [
                  99.47451,
                  13.49199
                ],
                [
                  99.46844,
                  13.48643
                ],
                [
                  99.46881,
                  13.48507
                ],
                [
                  99.47207,
                  13.48424
                ],
                [
                  99.47323,
                  13.48152
                ],
                [
                  99.47764,
                  13.48141
                ],
                [
                  99.47847,
                  13.47959
                ],
                [
                  99.4806,
                  13.47914
                ],
                [
                  99.49142,
                  13.46897
                ],
                [
                  99.49499,
                  13.46794
                ],
                [
                  99.49696,
                  13.46427
                ],
                [
                  99.50354,
                  13.45966
                ],
                [
                  99.50416,
                  13.45722
                ],
                [
                  99.50305,
                  13.44704
                ],
                [
                  99.50473,
                  13.44378
                ],
                [
                  99.50698,
                  13.44235
                ],
                [
                  99.51134,
                  13.44306
                ],
                [
                  99.51404,
                  13.44163
                ],
                [
                  99.53426,
                  13.42354
                ],
                [
                  99.54038,
                  13.41935
                ],
                [
                  99.53158,
                  13.41835
                ],
                [
                  99.52584,
                  13.41517
                ],
                [
                  99.5235,
                  13.4115
                ],
                [
                  99.52422,
                  13.40903
                ],
                [
                  99.5208,
                  13.40664
                ],
                [
                  99.52115,
                  13.40158
                ],
                [
                  99.50555,
                  13.4064
                ],
                [
                  99.50195,
                  13.40432
                ],
                [
                  99.49473,
                  13.40452
                ],
                [
                  99.48636,
                  13.40102
                ],
                [
                  99.47755,
                  13.40236
                ],
                [
                  99.47455,
                  13.40144
                ],
                [
                  99.47298,
                  13.40257
                ],
                [
                  99.46681,
                  13.39701
                ],
                [
                  99.46162,
                  13.39469
                ],
                [
                  99.44882,
                  13.39937
                ],
                [
                  99.44331,
                  13.40345
                ],
                [
                  99.43904,
                  13.40963
                ],
                [
                  99.43602,
                  13.41876
                ],
                [
                  99.43001,
                  13.42238
                ],
                [
                  99.42918,
                  13.42671
                ],
                [
                  99.42549,
                  13.42816
                ],
                [
                  99.42318,
                  13.43064
                ],
                [
                  99.41774,
                  13.42793
                ],
                [
                  99.41444,
                  13.42811
                ],
                [
                  99.41317,
                  13.43077
                ],
                [
                  99.40832,
                  13.43345
                ],
                [
                  99.40356,
                  13.44906
                ],
                [
                  99.41273,
                  13.46006
                ],
                [
                  99.40912,
                  13.46794
                ],
                [
                  99.42089,
                  13.49811
                ],
                [
                  99.42686,
                  13.50133
                ],
                [
                  99.42859,
                  13.50527
                ],
                [
                  99.43873,
                  13.50487
                ],
                [
                  99.44097,
                  13.50648
                ],
                [
                  99.44823,
                  13.50647
                ],
                [
                  99.44875,
                  13.50772
                ],
                [
                  99.45707,
                  13.50841
                ],
                [
                  99.46515,
                  13.50623
                ],
                [
                  99.4717,
                  13.51128
                ],
                [
                  99.46908,
                  13.50169
                ]
              ]
            ]
          }
        },
        {
          "geocode": "103302",
          "tambon": "ต.คลองตัน",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดสวนเบญจสิริ",
          "latitude": 13.73159,
          "longitude": 100.56745,
          "sum_rainfall_mm": 46.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเตย",
          "latitude": 13.70628,
          "longitude": 100.58752,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองเตย",
          "latitude": 13.70791,
          "longitude": 100.58363,
          "sum_rainfall_mm": 60.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.พระราม 4",
          "latitude": 13.7087,
          "longitude": 100.55457,
          "sum_rainfall_mm": 50.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103303",
          "tambon": "ต.พระโขนง",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.พระโขนง",
          "latitude": 13.70857,
          "longitude": 100.59542,
          "sum_rainfall_mm": 95.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103101",
          "tambon": "ต.บางคอแหลม",
          "amphoe": "อ.บางคอแหลม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางคอแหลม",
          "latitude": 13.69311,
          "longitude": 100.50229,
          "sum_rainfall_mm": 2.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "103103",
          "tambon": "ต.บางโคล่",
          "amphoe": "อ.บางคอแหลม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.วัดไทร",
          "latitude": 13.68653,
          "longitude": 100.51643,
          "sum_rainfall_mm": 102.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "100905",
          "tambon": "ต.บางจาก",
          "amphoe": "อ.พระโขนง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.บางจาก",
          "latitude": 13.6891,
          "longitude": 100.59068,
          "sum_rainfall_mm": 88.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "100905",
          "tambon": "ต.บางจาก",
          "amphoe": "อ.พระโขนง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พระโขนง",
          "latitude": 13.70233,
          "longitude": 100.60197,
          "sum_rainfall_mm": 104.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "100905",
          "tambon": "ต.บางจาก",
          "amphoe": "อ.พระโขนง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเจ็ก",
          "latitude": 13.69223,
          "longitude": 100.58991,
          "sum_rainfall_mm": 94.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "100905",
          "tambon": "ต.บางจาก",
          "amphoe": "อ.พระโขนง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.บางอ้อ",
          "latitude": 13.68212,
          "longitude": 100.59254,
          "sum_rainfall_mm": 76.5,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "102402",
          "tambon": "ต.บางปะกอก",
          "amphoe": "อ.ราษฎร์บูรณะ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.ดาวคะนอง",
          "latitude": 13.6949,
          "longitude": 100.48758,
          "sum_rainfall_mm": 21.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "102401",
          "tambon": "ต.ราษฎร์บูรณะ",
          "amphoe": "อ.ราษฎร์บูรณะ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ราษฎร์บูรณะ",
          "latitude": 13.68207,
          "longitude": 100.50586,
          "sum_rainfall_mm": 107.0,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "110413",
          "tambon": "ต.ทรงคนอง",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองวัดด่าน",
          "latitude": 13.67071,
          "longitude": 100.54018,
          "sum_rainfall_mm": 89.0,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.54627,
                  13.67421
                ],
                [
                  100.55358,
                  13.67039
                ],
                [
                  100.55929,
                  13.66883
                ],
                [
                  100.5578,
                  13.65872
                ],
                [
                  100.55574,
                  13.65869
                ],
                [
                  100.54396,
                  13.66384
                ],
                [
                  100.54039,
                  13.66425
                ],
                [
                  100.53794,
                  13.66299
                ],
                [
                  100.52995,
                  13.66786
                ],
                [
                  100.52758,
                  13.67241
                ],
                [
                  100.52806,
                  13.67598
                ],
                [
                  100.53706,
                  13.67187
                ],
                [
                  100.5427,
                  13.67241
                ],
                [
                  100.54627,
                  13.67421
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110409",
          "tambon": "ต.บางกระเจ้า",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.วัดบางกระเจ้านอก",
          "latitude": 13.689612,
          "longitude": 100.554886,
          "sum_rainfall_mm": 68.39999999999999,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.57164,
                  13.70439
                ],
                [
                  100.56587,
                  13.68654
                ],
                [
                  100.56269,
                  13.68678
                ],
                [
                  100.55796,
                  13.69046
                ],
                [
                  100.55246,
                  13.69075
                ],
                [
                  100.55066,
                  13.70132
                ],
                [
                  100.55212,
                  13.70523
                ],
                [
                  100.5542,
                  13.7072
                ],
                [
                  100.55764,
                  13.70826
                ],
                [
                  100.56163,
                  13.70793
                ],
                [
                  100.57164,
                  13.70439
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110411",
          "tambon": "ต.บางกระสอบ",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร. คลองตาสด",
          "latitude": 13.664821,
          "longitude": 100.571236,
          "sum_rainfall_mm": 19.0,
          "observed_at": "2026-09-23T07:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.57871,
                  13.67047
                ],
                [
                  100.56991,
                  13.66243
                ],
                [
                  100.56298,
                  13.65938
                ],
                [
                  100.5578,
                  13.65872
                ],
                [
                  100.55929,
                  13.66883
                ],
                [
                  100.55513,
                  13.67019
                ],
                [
                  100.56562,
                  13.67902
                ],
                [
                  100.56894,
                  13.67804
                ],
                [
                  100.56865,
                  13.67447
                ],
                [
                  100.57331,
                  13.67086
                ],
                [
                  100.57871,
                  13.67047
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110411",
          "tambon": "ต.บางกระสอบ",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร. คลองลัดบางยอ 2",
          "latitude": 13.661021,
          "longitude": 100.56727,
          "sum_rainfall_mm": 2.6,
          "observed_at": "2026-09-23T16:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.57871,
                  13.67047
                ],
                [
                  100.56991,
                  13.66243
                ],
                [
                  100.56298,
                  13.65938
                ],
                [
                  100.5578,
                  13.65872
                ],
                [
                  100.55929,
                  13.66883
                ],
                [
                  100.55513,
                  13.67019
                ],
                [
                  100.56562,
                  13.67902
                ],
                [
                  100.56894,
                  13.67804
                ],
                [
                  100.56865,
                  13.67447
                ],
                [
                  100.57331,
                  13.67086
                ],
                [
                  100.57871,
                  13.67047
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110410",
          "tambon": "ต.บางน้ำผึ้ง",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ตลาดน้ำบางน้ำผึ้ง",
          "latitude": 13.678656,
          "longitude": 100.57356,
          "sum_rainfall_mm": 53.4,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.58879,
                  13.68484
                ],
                [
                  100.58347,
                  13.67584
                ],
                [
                  100.57871,
                  13.67047
                ],
                [
                  100.57331,
                  13.67086
                ],
                [
                  100.56865,
                  13.67447
                ],
                [
                  100.56894,
                  13.67804
                ],
                [
                  100.56562,
                  13.67902
                ],
                [
                  100.57181,
                  13.6862
                ],
                [
                  100.58782,
                  13.69266
                ],
                [
                  100.58931,
                  13.68797
                ],
                [
                  100.58879,
                  13.68484
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110402",
          "tambon": "ต.บางพึ่ง",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองแจงร้อน",
          "latitude": 13.67627,
          "longitude": 100.52097,
          "sum_rainfall_mm": 101.5,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.52806,
                  13.67598
                ],
                [
                  100.52728,
                  13.67115
                ],
                [
                  100.53089,
                  13.6608
                ],
                [
                  100.52979,
                  13.65917
                ],
                [
                  100.53011,
                  13.65431
                ],
                [
                  100.52191,
                  13.64671
                ],
                [
                  100.52311,
                  13.66204
                ],
                [
                  100.52223,
                  13.66539
                ],
                [
                  100.51668,
                  13.67124
                ],
                [
                  100.51686,
                  13.67555
                ],
                [
                  100.52122,
                  13.68171
                ],
                [
                  100.52806,
                  13.67598
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110408",
          "tambon": "ต.บางยอ",
          "amphoe": "อ.พระประแดง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร. คลองลัดบางยอ 1",
          "latitude": 13.676162,
          "longitude": 100.553085,
          "sum_rainfall_mm": 45.8,
          "observed_at": "2026-09-24T05:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.56587,
                  13.68654
                ],
                [
                  100.57115,
                  13.68523
                ],
                [
                  100.56726,
                  13.68051
                ],
                [
                  100.55513,
                  13.67019
                ],
                [
                  100.54627,
                  13.67421
                ],
                [
                  100.55127,
                  13.68124
                ],
                [
                  100.55265,
                  13.69095
                ],
                [
                  100.55796,
                  13.69046
                ],
                [
                  100.56269,
                  13.68678
                ],
                [
                  100.56587,
                  13.68654
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_23_09_2026.png?1790204836",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
