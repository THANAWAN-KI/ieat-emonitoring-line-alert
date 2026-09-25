window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-25T20:49:49+07:00",
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
      "id": 31,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "lat": 13.118954,
      "lon": 101.033398,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 228.0,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694,
      "lon": 101.329567,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 6,
      "rain_alert_count": 5,
      "water_alert_count": 1,
      "max_rainfall_mm": 218.6,
      "nearest_alert_km": 7.7,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.7582559,
      "lon": 100.7893183,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 16,
      "rain_alert_count": 14,
      "water_alert_count": 2,
      "max_rainfall_mm": 196.6,
      "nearest_alert_km": 2.0,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 19,
      "name": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "lat": 13.56379732,
      "lon": 100.9949185,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 191.0,
      "nearest_alert_km": 1.8,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 3,
      "name": "นิคมอุตสาหกรรมบางชัน",
      "lat": 13.803881,
      "lon": 100.704757,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 20,
      "rain_alert_count": 17,
      "water_alert_count": 3,
      "max_rainfall_mm": 185.5,
      "nearest_alert_km": 0.7,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.4893393,
      "lon": 100.5957211,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 40,
      "rain_alert_count": 21,
      "water_alert_count": 19,
      "max_rainfall_mm": 182.4,
      "nearest_alert_km": 8.1,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 30,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "lat": 13.024547,
      "lon": 101.072437,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 156.4,
      "nearest_alert_km": 4.4,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102,
      "lon": 100.707712,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 10,
      "water_alert_count": 0,
      "max_rainfall_mm": 154.6,
      "nearest_alert_km": 3.7,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 12,
      "rain_alert_count": 11,
      "water_alert_count": 1,
      "max_rainfall_mm": 152.4,
      "nearest_alert_km": 6.7,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 19,
      "rain_alert_count": 14,
      "water_alert_count": 5,
      "max_rainfall_mm": 150.8,
      "nearest_alert_km": 10.4,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 11,
      "rain_alert_count": 10,
      "water_alert_count": 1,
      "max_rainfall_mm": 150.0,
      "nearest_alert_km": 3.0,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.54202903,
      "lon": 100.1988542,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 8,
      "rain_alert_count": 4,
      "water_alert_count": 4,
      "max_rainfall_mm": 148.8,
      "nearest_alert_km": 2.4,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.565582,
      "lon": 100.794583,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 148.1,
      "nearest_alert_km": 6.5,
      "latest_observed_at": "2026-09-25 19:00"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.6599038,
      "lon": 100.9114833,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 3,
      "water_alert_count": 1,
      "max_rainfall_mm": 148.0,
      "nearest_alert_km": 8.0,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646,
      "lon": 101.008107,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 21,
      "rain_alert_count": 17,
      "water_alert_count": 4,
      "max_rainfall_mm": 148.0,
      "nearest_alert_km": 0.8,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.75079527,
      "lon": 101.1226103,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 147.0,
      "nearest_alert_km": 2.2,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309,
      "lon": 100.610012,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 15,
      "rain_alert_count": 9,
      "water_alert_count": 6,
      "max_rainfall_mm": 145.8,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 38,
      "rain_alert_count": 33,
      "water_alert_count": 5,
      "max_rainfall_mm": 142.8,
      "nearest_alert_km": 2.1,
      "latest_observed_at": "2026-09-25 20:30"
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
      "max_rainfall_mm": 140.6,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 32,
      "name": "นิคมอุตสาหกรรมปิ่นทอง",
      "lat": 13.12134595,
      "lon": 100.9904306,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 140.0,
      "nearest_alert_km": 10.7,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 43,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "lat": 13.7973442,
      "lon": 100.5592795,
      "operations": "สำนักงานใหญ่",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 57,
      "rain_alert_count": 53,
      "water_alert_count": 4,
      "max_rainfall_mm": 137.0,
      "nearest_alert_km": 2.6,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.844575469624841,
      "lon": 101.23635660462234,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 131.5,
      "nearest_alert_km": 4.4,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.56903519,
      "lon": 100.6528202,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 4,
      "water_alert_count": 1,
      "max_rainfall_mm": 130.0,
      "nearest_alert_km": 10.8,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 6,
      "name": "นิคมอุตสาหกรรมบางปะอิน",
      "lat": 14.2077497,
      "lon": 100.5896748,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 4,
      "water_alert_count": 1,
      "max_rainfall_mm": 127.4,
      "nearest_alert_km": 7.9,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 27,
      "name": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "lat": 13.0044858,
      "lon": 101.1626075,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 126.6,
      "nearest_alert_km": 5.9,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.4214885,
      "lon": 101.0041244,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 118.0,
      "nearest_alert_km": 6.4,
      "latest_observed_at": "2026-09-25 19:00"
    },
    {
      "id": 86,
      "name": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "lat": 15.653923104685944,
      "lon": 100.58284169495818,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 4,
      "water_alert_count": 0,
      "max_rainfall_mm": 112.6,
      "nearest_alert_km": 10.0,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.3863882,
      "lon": 100.9035767,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 9,
      "water_alert_count": 1,
      "max_rainfall_mm": 111.5,
      "nearest_alert_km": 7.4,
      "latest_observed_at": "2026-09-25 20:30"
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
      "max_rainfall_mm": 106.5,
      "nearest_alert_km": 7.6,
      "latest_observed_at": "2026-09-25 19:00"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.54653659,
      "lon": 100.3436175,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 18,
      "rain_alert_count": 16,
      "water_alert_count": 2,
      "max_rainfall_mm": 101.2,
      "nearest_alert_km": 4.6,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.5440008,
      "lon": 100.232856,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 6,
      "rain_alert_count": 3,
      "water_alert_count": 3,
      "max_rainfall_mm": 88.0,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 34,
      "name": "นิคมอุตสาหกรรมแหลมฉบัง",
      "lat": 13.076561,
      "lon": 100.909175,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 6,
      "water_alert_count": 0,
      "max_rainfall_mm": 86.6,
      "nearest_alert_km": 3.8,
      "latest_observed_at": "2026-09-25 19:50"
    },
    {
      "id": 33,
      "name": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 3)",
      "lat": 13.11034826,
      "lon": 101.0669158,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 76.8,
      "nearest_alert_km": 14.8,
      "latest_observed_at": "2026-09-25 20:00"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.5753627,
      "lon": 100.1489452,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 11,
      "rain_alert_count": 1,
      "water_alert_count": 10,
      "max_rainfall_mm": 37.6,
      "nearest_alert_km": 9.6,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755,
      "lon": 99.044877,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 11,
      "rain_alert_count": 0,
      "water_alert_count": 11,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.2,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.0082598,
      "lon": 100.3598057,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.9,
      "latest_observed_at": "2026-09-25 20:30"
    },
    {
      "id": 23,
      "name": "นิคมอุตสาหกรรมบางปู",
      "lat": 13.551394,
      "lon": 100.668278,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 59.6,
      "nearest_alert_km": 20.7,
      "latest_observed_at": "2026-09-25 19:00"
    },
    {
      "id": 10,
      "name": "นิคมอุตสาหกรรมราชบุรี",
      "lat": 13.63729443,
      "lon": 99.85002164,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 4,
      "rain_alert_count": 1,
      "water_alert_count": 3,
      "max_rainfall_mm": 48.8,
      "nearest_alert_km": 3.7,
      "latest_observed_at": "2026-09-25 20:30"
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
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 42.8,
      "nearest_alert_km": 15.7,
      "latest_observed_at": "2026-09-25 20:00"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
      "station_code": "MOU482",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.240835,
      "lon": 101.04208,
      "rainfall_mm": 228.0,
      "value_text": "228 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.6,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อบต.หนองแหน",
      "station_code": "NGNG",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.68338,
      "lon": 101.32512,
      "rainfall_mm": 218.6,
      "value_text": "218.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "rainfall_mm": 196.6,
      "value_text": "196.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "rainfall_mm": 194.6,
      "value_text": "194.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโพธิ์",
      "station_code": "ridtele_TKgt56",
      "province": "ฉะเชิงเทรา",
      "district": "บ้านโพธิ์",
      "lat": 13.58335,
      "lon": 101.070917,
      "rainfall_mm": 191.0,
      "value_text": "191 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 8.5,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ศีรษะจรเข้น้อย",
      "station_code": "BST1",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.67777,
      "lon": 100.7945,
      "rainfall_mm": 189.4,
      "value_text": "189.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 9.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองสามวา",
      "station_code": "RF.KSW.02",
      "province": "กรุงเทพมหานคร",
      "district": "คลองสามวา",
      "lat": 13.85954,
      "lon": 100.72909,
      "rainfall_mm": 185.5,
      "value_text": "185.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.7,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ฉะเชิงเทรา",
      "station_code": "48458",
      "province": "ฉะเชิงเทรา",
      "district": "สนามชัยเขต",
      "lat": 13.51556,
      "lon": 101.45833,
      "rainfall_mm": 182.9,
      "value_text": "182.9 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 17.8,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระนารายน์",
      "station_code": "ATG052",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.55667,
      "lon": 100.76201,
      "rainfall_mm": 182.4,
      "value_text": "182.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 19.4,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 181.0,
      "value_text": "181 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 9.9,
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
      "rainfall_mm": 172.0,
      "value_text": "172 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 19.5,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 164.0,
      "value_text": "164 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.0,
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
      "rainfall_mm": 163.5,
      "value_text": "163.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.7,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "โรงเรียนบ้านสีระมัน",
      "station_code": "ONE089",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 13.038727,
      "lon": 101.66171,
      "rainfall_mm": 160.4,
      "value_text": "160.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 41.2,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "rainfall_mm": 159.0,
      "value_text": "159 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 14.8,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.บึงขวาง",
      "station_code": "RF.MBR.03",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.79988,
      "lon": 100.74482,
      "rainfall_mm": 157.0,
      "value_text": "157 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.3,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ่อวิน",
      "station_code": "SWNG",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.05505,
      "lon": 101.09782,
      "rainfall_mm": 156.4,
      "value_text": "156.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.4,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
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
      "rainfall_mm": 156.2,
      "value_text": "156.2 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 154.6,
      "value_text": "154.6 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.5,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สนข.สะพานสูง",
      "station_code": "RF.SPS.01",
      "province": "กรุงเทพมหานคร",
      "district": "สะพานสูง",
      "lat": 13.76881,
      "lon": 100.68545,
      "rainfall_mm": 154.5,
      "value_text": "154.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.4,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.พระยาสุเรนทร์",
      "station_code": "RF.SMI.03",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.92126,
      "lon": 100.68741,
      "rainfall_mm": 154.5,
      "value_text": "154.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.2,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อบต.ท่าเกวียน",
      "station_code": "TON004",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.68734,
      "lon": 102.28413,
      "rainfall_mm": 152.4,
      "value_text": "152.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 29.5,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.มีนบุรี",
      "station_code": "RF.MBR.01",
      "province": "กรุงเทพมหานคร",
      "district": "มีนบุรี",
      "lat": 13.8136,
      "lon": 100.73122,
      "rainfall_mm": 152.0,
      "value_text": "152 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 3.1,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองแสนแสบ-บางชัน",
      "station_code": "RF.SPS.02",
      "province": "กรุงเทพมหานคร",
      "district": "สะพานสูง",
      "lat": 13.79734,
      "lon": 100.70451,
      "rainfall_mm": 151.0,
      "value_text": "151 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 0.7,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 150.8,
      "value_text": "150.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 14.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 150.0,
      "value_text": "150 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 26.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ฝายท่าลาด",
      "station_code": "ridtele_TKgt59",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.707719,
      "lon": 101.401415,
      "rainfall_mm": 149.5,
      "value_text": "149.5 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 12.9,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สะพานนครชัยศรี",
      "station_code": "THA008",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79217,
      "lon": 100.19817,
      "rainfall_mm": 148.8,
      "value_text": "148.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 27.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 148.6,
      "value_text": "148.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.5,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 148.1,
      "value_text": "148.1 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.5,
      "nearest_estate": "นิคมอุตสาหกรรมบางพลี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.บางขวัญ",
      "station_code": "BKWN",
      "province": "ฉะเชิงเทรา",
      "district": "เมืองฉะเชิงเทรา",
      "lat": 13.74984,
      "lon": 101.07751,
      "rainfall_mm": 148.0,
      "value_text": "148 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 20.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถนนโค้ง",
      "station_code": "STN2196",
      "province": "สระบุรี",
      "district": "แก่งคอย",
      "lat": 14.743917,
      "lon": 101.039334,
      "rainfall_mm": 148.0,
      "value_text": "148 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.7,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 147.5,
      "value_text": "147.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักกูด",
      "station_code": "STN1655",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.818632,
      "lon": 101.038965,
      "rainfall_mm": 147.0,
      "value_text": "147 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 11.8,
      "nearest_estate": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านน้อยสว่าง",
      "station_code": "LK13",
      "province": "ปทุมธานี",
      "district": "หนองเสือ",
      "lat": 14.1652,
      "lon": 100.77855,
      "rainfall_mm": 145.8,
      "value_text": "145.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 20.3,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดบึงหนองบอน",
      "station_code": "RF.PWT.03",
      "province": "กรุงเทพมหานคร",
      "district": "ประเวศ",
      "lat": 13.69529,
      "lon": 100.65375,
      "rainfall_mm": 144.0,
      "value_text": "144 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.9,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
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
      "rainfall_mm": 143.8,
      "value_text": "143.8 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 11.2,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ซ.แอนเน็กซ์",
      "station_code": "RF.SMI.04",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.93786,
      "lon": 100.62661,
      "rainfall_mm": 143.5,
      "value_text": "143.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 17.1,
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
      "rainfall_mm": 142.8,
      "value_text": "142.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.3,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเจ้าคุณสิงห์",
      "station_code": "RF.WTL.03",
      "province": "กรุงเทพมหานคร",
      "district": "วังทองหลาง",
      "lat": 13.7616,
      "lon": 100.61525,
      "rainfall_mm": 141.0,
      "value_text": "141 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.2,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "rainfall_mm": 140.6,
      "value_text": "140.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 14.2,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
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
      "rainfall_mm": 140.6,
      "value_text": "140.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 18.1,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "อบต.นครชัยศรี",
      "station_code": "TANA",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.79036,
      "lon": 100.19051,
      "rainfall_mm": 140.2,
      "value_text": "140.2 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 27.6,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สัตหีบ",
      "station_code": "48477",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.68333,
      "lon": 100.98333,
      "rainfall_mm": 140.1,
      "value_text": "140.1 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.8,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "สถานีวิจัยประมงศรีราชา",
      "station_code": "GOT001",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.185876,
      "lon": 100.916916,
      "rainfall_mm": 140.0,
      "value_text": "140 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.7,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "คลองลาดพร้าว ท้ายปตร.คลอง2",
      "station_code": "BKK001",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.92245,
      "lon": 100.63438,
      "rainfall_mm": 139.6,
      "value_text": "139.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.พระโขนง",
      "station_code": "RF.PKN.01",
      "province": "กรุงเทพมหานคร",
      "district": "พระโขนง",
      "lat": 13.70233,
      "lon": 100.60197,
      "rainfall_mm": 139.5,
      "value_text": "139.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 11.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บางปะกง",
      "station_code": "BPK001",
      "province": "ฉะเชิงเทรา",
      "district": "บางปะกง",
      "lat": 13.54901,
      "lon": 101.00111,
      "rainfall_mm": 139.2,
      "value_text": "139.2 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.ลำชะล่า-ถ.นวมินทร์",
      "station_code": "RF.KNY.02",
      "province": "กรุงเทพมหานคร",
      "district": "คันนายาว",
      "lat": 13.83637,
      "lon": 100.66131,
      "rainfall_mm": 138.5,
      "value_text": "138.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ค.ประเวศฯ-รพ.ลาดกระบัง",
      "station_code": "RF.LKB.03",
      "province": "กรุงเทพมหานคร",
      "district": "ลาดกระบัง",
      "lat": 13.72398,
      "lon": 100.78407,
      "rainfall_mm": 138.0,
      "value_text": "138 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 3.9,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "rainfall_mm": 137.0,
      "value_text": "137 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 9.3,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 136.5,
      "value_text": "136.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 17.1,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "rainfall_mm": 136.0,
      "value_text": "136 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.2,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
      "station_code": "MOU479",
      "province": "ระยอง",
      "district": "เขาชะเมา",
      "lat": 12.912333,
      "lon": 101.72454,
      "rainfall_mm": 135.8,
      "value_text": "135.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 35.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ค.แสนแสบ-เขตบางกะปิ",
      "station_code": "RF.BKP.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางกะปิ",
      "lat": 13.76528,
      "lon": 100.64773,
      "rainfall_mm": 135.5,
      "value_text": "135.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.5,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "rainfall_mm": 135.0,
      "value_text": "135 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 2.6,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "คลองบางบาล",
      "station_code": "CPY010",
      "province": "พระนครศรีอยุธยา",
      "district": "บางบาล",
      "lat": 14.42303,
      "lon": 100.48186,
      "rainfall_mm": 134.4,
      "value_text": "134.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 14.3,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านถ้ำมงกุฎ",
      "station_code": "STN0449",
      "province": "สระบุรี",
      "district": "พระพุทธบาท",
      "lat": 14.678451,
      "lon": 100.846683,
      "rainfall_mm": 132.5,
      "value_text": "132.5 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 18.4,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ส.บางนา",
      "station_code": "RF.BNA.02",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.67493,
      "lon": 100.58757,
      "rainfall_mm": 132.0,
      "value_text": "132 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.0,
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
      "rainfall_mm": 132.0,
      "value_text": "132 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.9,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านคลองขนุน",
      "station_code": "STN0138",
      "province": "ระยอง",
      "district": "บ้านค่าย",
      "lat": 12.894996,
      "lon": 101.370717,
      "rainfall_mm": 131.5,
      "value_text": "131.5 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.6,
      "nearest_estate": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
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
      "rainfall_mm": 130.5,
      "value_text": "130.5 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 30.1,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองสำโรง",
      "station_code": "RF.SPK.01",
      "province": "สมุทรปราการ",
      "district": "เมืองสมุทรปราการ",
      "lat": 13.64819,
      "lon": 100.59514,
      "rainfall_mm": 130.0,
      "value_text": "130 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.8,
      "nearest_estate": "นิคมอุตสาหกรรมแพรกษา",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนามบินดอนเมือง",
      "station_code": "48456",
      "province": "กรุงเทพมหานคร",
      "district": "ดอนเมือง",
      "lat": 13.91917,
      "lon": 100.605,
      "rainfall_mm": 127.8,
      "value_text": "127.8 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 14.4,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "อบต.นาแขม",
      "station_code": "VLGE50",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.04255,
      "lon": 101.72051,
      "rainfall_mm": 127.6,
      "value_text": "127.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 16.8,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ส.เทเวศร์",
      "station_code": "RF.PNK.02",
      "province": "กรุงเทพมหานคร",
      "district": "พระนคร",
      "lat": 13.77191,
      "lon": 100.5011,
      "rainfall_mm": 127.5,
      "value_text": "127.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.9,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 127.5,
      "value_text": "127.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 11.2,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "เหนือปตร.พระอินทราชา",
      "station_code": "ATG091",
      "province": "พระนครศรีอยุธยา",
      "district": "วังน้อย",
      "lat": 14.14407,
      "lon": 100.62136,
      "rainfall_mm": 127.4,
      "value_text": "127.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๑๐ (ประจันตคาม)",
      "station_code": "MOU115",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.181167,
      "lon": 101.592064,
      "rainfall_mm": 127.2,
      "value_text": "127.2 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 31.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ท้ายปตร.พระอินทราชา",
      "station_code": "ATG092",
      "province": "พระนครศรีอยุธยา",
      "district": "วังน้อย",
      "lat": 14.14378,
      "lon": 100.62075,
      "rainfall_mm": 127.2,
      "value_text": "127.2 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "rainfall_mm": 127.0,
      "value_text": "127 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "rainfall_mm": 126.6,
      "value_text": "126.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.5,
      "nearest_estate": "นิคมอุตสาหกรรมปิ่นทอง (โครงการ 2)",
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
      "rainfall_mm": 126.6,
      "value_text": "126.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.9,
      "nearest_estate": "นิคมอุตสาหกรรมอีสเทิร์นซีบอร์ด (ระยอง)",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ ท่าเรือคลองเตย",
      "station_code": "48454",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70694,
      "lon": 100.56805,
      "rainfall_mm": 126.0,
      "value_text": "126 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "rainfall_mm": 126.0,
      "value_text": "126 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.4,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเตย",
      "station_code": "RF.KTY.04",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70628,
      "lon": 100.58752,
      "rainfall_mm": 125.5,
      "value_text": "125.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.วังทองหลาง",
      "station_code": "RF.WTL.01",
      "province": "กรุงเทพมหานคร",
      "district": "วังทองหลาง",
      "lat": 13.76435,
      "lon": 100.60553,
      "rainfall_mm": 124.5,
      "value_text": "124.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 6.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองบางซื่อ",
      "station_code": "RF.BSU.03",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.80023,
      "lon": 100.51848,
      "rainfall_mm": 124.5,
      "value_text": "124.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.4,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 124.0,
      "value_text": "124 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.5,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ประเวศ",
      "station_code": "RF.PWT.01",
      "province": "กรุงเทพมหานคร",
      "district": "ประเวศ",
      "lat": 13.71701,
      "lon": 100.69472,
      "rainfall_mm": 124.0,
      "value_text": "124 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 3.7,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.จุฬาลงกรณ์",
      "station_code": "ATG101",
      "province": "ปทุมธานี",
      "district": "ธัญบุรี",
      "lat": 13.98135,
      "lon": 100.6057,
      "rainfall_mm": 123.0,
      "value_text": "123 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 21.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "rainfall_mm": 123.0,
      "value_text": "123 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 35.0,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.คลองตะเกรา",
      "station_code": "NKOK",
      "province": "ฉะเชิงเทรา",
      "district": "ท่าตะเกียบ",
      "lat": 13.41823,
      "lon": 101.64146,
      "rainfall_mm": 122.6,
      "value_text": "122.6 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 40.2,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดศูนย์ราชการ-ถ.แจ้งวัฒนะ",
      "station_code": "RF.LSI.03",
      "province": "กรุงเทพมหานคร",
      "district": "หลักสี่",
      "lat": 13.8921,
      "lon": 100.56383,
      "rainfall_mm": 122.5,
      "value_text": "122.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 122.5,
      "value_text": "122.5 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.4,
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
      "rainfall_mm": 122.2,
      "value_text": "122.2 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 20.7,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "rainfall_mm": 122.0,
      "value_text": "122 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 24.4,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัด ถ.เทศบาลสงเคราะห์",
      "station_code": "RF.CTC.03",
      "province": "กรุงเทพมหานคร",
      "district": "จตุจักร",
      "lat": 13.83978,
      "lon": 100.54175,
      "rainfall_mm": 121.5,
      "value_text": "121.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 5.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 121.0,
      "value_text": "121 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 3.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "วัดจอมเกษ",
      "station_code": "ridtele_TS.25",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.414349,
      "lon": 100.55782,
      "rainfall_mm": 121.0,
      "value_text": "121 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 9.3,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "สนข.บางรัก",
      "station_code": "RF.BRK.01",
      "province": "กรุงเทพมหานคร",
      "district": "บางรัก",
      "lat": 13.73067,
      "lon": 100.52382,
      "rainfall_mm": 121.0,
      "value_text": "121 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 8.3,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บางปะหัน",
      "station_code": "LBI001",
      "province": "พระนครศรีอยุธยา",
      "district": "บางปะหัน",
      "lat": 14.42731,
      "lon": 100.55605,
      "rainfall_mm": 120.4,
      "value_text": "120.4 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 8.1,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "rainfall_mm": 120.3,
      "value_text": "120.3 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.9,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านโนนสมบูรณ์",
      "station_code": "STN1476",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.777422,
      "lon": 101.341215,
      "rainfall_mm": 120.0,
      "value_text": "120 มม.",
      "observed_at": "2026-09-25 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 39.7,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังม่วง",
      "station_code": "WGYG",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.84867,
      "lon": 101.14549,
      "rainfall_mm": 119.8,
      "value_text": "119.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 29.0,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 119.8,
      "value_text": "119.8 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "จุดวัดบึงมักกะสัน",
      "station_code": "RF.RTW.03",
      "province": "กรุงเทพมหานคร",
      "district": "ราชเทวี",
      "lat": 13.75665,
      "lon": 100.54839,
      "rainfall_mm": 119.5,
      "value_text": "119.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 119.0,
      "value_text": "119 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 2.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ส.พระโขนง",
      "station_code": "RF.KTY.03",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70857,
      "lon": 100.59542,
      "rainfall_mm": 118.5,
      "value_text": "118.5 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.6,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "สนข.ยานนาวา",
      "station_code": "RF.YNW.01",
      "province": "กรุงเทพมหานคร",
      "district": "ยานนาวา",
      "lat": 13.69627,
      "lon": 100.54222,
      "rainfall_mm": 118.0,
      "value_text": "118 มม.",
      "observed_at": "2026-09-25 20:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 11.4,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สนน กทม."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 39,
    "station_count": 949,
    "alert_station_count": 391,
    "heavy_rain_estate_count": 33,
    "water_alert_estate_count": 24,
    "critical_count": 308,
    "rain_station_count": 778,
    "waterlevel_station_count": 171,
    "waterlevel_alert_count": 98,
    "max_rainfall_mm": 228.0,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.กรุงเทพมหานคร",
      "จ.ฉะเชิงเทรา",
      "จ.ชลบุรี",
      "จ.ชัยนาท",
      "จ.ตราด",
      "จ.นครนายก",
      "จ.นครปฐม",
      "จ.นครสวรรค์",
      "จ.ปราจีนบุรี",
      "จ.พระนครศรีอยุธยา",
      "จ.ระยอง",
      "จ.สมุทรปราการ",
      "จ.สิงห์บุรี",
      "จ.สุพรรณบุรี",
      "จ.อุทัยธานี"
    ],
    "flood_watch_province_count": 15,
    "flash_flood_24h_area_count": 86,
    "flash_flood_48h_area_count": 181,
    "warning_title": "",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "flash_flood": {
    "24h": {
      "period": "24h",
      "date": "2026-09-25",
      "time": "20:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
        {
          "geocode": "180107",
          "tambon": "ต.ธรรมามูล",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานธรรมจักร(วัดธรรมามูล)",
          "latitude": 15.25029,
          "longitude": 100.08347,
          "sum_rainfall_mm": 194.39999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.13059,
                  15.28908
                ],
                [
                  100.13242,
                  15.28176
                ],
                [
                  100.14221,
                  15.27971
                ],
                [
                  100.14439,
                  15.27612
                ],
                [
                  100.14828,
                  15.2741
                ],
                [
                  100.15366,
                  15.26588
                ],
                [
                  100.15803,
                  15.26309
                ],
                [
                  100.15899,
                  15.25738
                ],
                [
                  100.15512,
                  15.25246
                ],
                [
                  100.15464,
                  15.24618
                ],
                [
                  100.13631,
                  15.24535
                ],
                [
                  100.13042,
                  15.2461
                ],
                [
                  100.12573,
                  15.24509
                ],
                [
                  100.10959,
                  15.24796
                ],
                [
                  100.10508,
                  15.24753
                ],
                [
                  100.10165,
                  15.24575
                ],
                [
                  100.11139,
                  15.22511
                ],
                [
                  100.108,
                  15.22261
                ],
                [
                  100.10519,
                  15.22389
                ],
                [
                  100.10074,
                  15.22286
                ],
                [
                  100.08917,
                  15.22296
                ],
                [
                  100.07954,
                  15.22786
                ],
                [
                  100.07668,
                  15.23174
                ],
                [
                  100.07629,
                  15.23704
                ],
                [
                  100.07868,
                  15.24363
                ],
                [
                  100.08378,
                  15.25198
                ],
                [
                  100.08455,
                  15.25162
                ],
                [
                  100.08315,
                  15.25603
                ],
                [
                  100.08065,
                  15.25691
                ],
                [
                  100.06849,
                  15.25544
                ],
                [
                  100.06416,
                  15.25698
                ],
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.05684,
                  15.26849
                ],
                [
                  100.06858,
                  15.26407
                ],
                [
                  100.07247,
                  15.26461
                ],
                [
                  100.07699,
                  15.2666
                ],
                [
                  100.08229,
                  15.27252
                ],
                [
                  100.09441,
                  15.27255
                ],
                [
                  100.09732,
                  15.27456
                ],
                [
                  100.10763,
                  15.27491
                ],
                [
                  100.11394,
                  15.28581
                ],
                [
                  100.12049,
                  15.29112
                ],
                [
                  100.12464,
                  15.28855
                ],
                [
                  100.13059,
                  15.28908
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180106",
          "tambon": "ต.หาดท่าเสา",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.พลเทพ",
          "latitude": 15.214294,
          "longitude": 100.073325,
          "sum_rainfall_mm": 229.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.08378,
                  15.25198
                ],
                [
                  100.07747,
                  15.24148
                ],
                [
                  100.07629,
                  15.23704
                ],
                [
                  100.07668,
                  15.23174
                ],
                [
                  100.08013,
                  15.22741
                ],
                [
                  100.09411,
                  15.21945
                ],
                [
                  100.10115,
                  15.20631
                ],
                [
                  100.10409,
                  15.2041
                ],
                [
                  100.10372,
                  15.19694
                ],
                [
                  100.10203,
                  15.19333
                ],
                [
                  100.08909,
                  15.18406
                ],
                [
                  100.08145,
                  15.16966
                ],
                [
                  100.07634,
                  15.17563
                ],
                [
                  100.0721,
                  15.17605
                ],
                [
                  100.05845,
                  15.181
                ],
                [
                  100.05501,
                  15.17949
                ],
                [
                  100.05429,
                  15.18222
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05678,
                  15.19388
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.06398,
                  15.23429
                ],
                [
                  100.05924,
                  15.24421
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.06916,
                  15.25544
                ],
                [
                  100.08065,
                  15.25691
                ],
                [
                  100.08315,
                  15.25603
                ],
                [
                  100.08455,
                  15.25162
                ],
                [
                  100.08378,
                  15.25198
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
          "sum_rainfall_mm": 285.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "180405",
          "tambon": "ต.โพนางดำออก",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สรรพยา",
          "latitude": 15.10907,
          "longitude": 100.26785,
          "sum_rainfall_mm": 219.8,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.34117,
                  15.1076
                ],
                [
                  100.32761,
                  15.0968
                ],
                [
                  100.31473,
                  15.08825
                ],
                [
                  100.30321,
                  15.08288
                ],
                [
                  100.28908,
                  15.07846
                ],
                [
                  100.28721,
                  15.08056
                ],
                [
                  100.28535,
                  15.08639
                ],
                [
                  100.2847,
                  15.10205
                ],
                [
                  100.28264,
                  15.10324
                ],
                [
                  100.27495,
                  15.10353
                ],
                [
                  100.26949,
                  15.1067
                ],
                [
                  100.26343,
                  15.11905
                ],
                [
                  100.28612,
                  15.14024
                ],
                [
                  100.29347,
                  15.13513
                ],
                [
                  100.30625,
                  15.12033
                ],
                [
                  100.34117,
                  15.1076
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180401",
          "tambon": "ต.สรรพยา",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สรรพยา",
          "latitude": 15.13217,
          "longitude": 100.25129,
          "sum_rainfall_mm": 236.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.26343,
                  15.11905
                ],
                [
                  100.26534,
                  15.11486
                ],
                [
                  100.2489,
                  15.09512
                ],
                [
                  100.23748,
                  15.09591
                ],
                [
                  100.23547,
                  15.09991
                ],
                [
                  100.22179,
                  15.10125
                ],
                [
                  100.21285,
                  15.10926
                ],
                [
                  100.20117,
                  15.116
                ],
                [
                  100.20064,
                  15.11652
                ],
                [
                  100.20662,
                  15.11655
                ],
                [
                  100.20226,
                  15.11918
                ],
                [
                  100.21456,
                  15.128
                ],
                [
                  100.20899,
                  15.13568
                ],
                [
                  100.22054,
                  15.14296
                ],
                [
                  100.21342,
                  15.16315
                ],
                [
                  100.22247,
                  15.16893
                ],
                [
                  100.22668,
                  15.17357
                ],
                [
                  100.23039,
                  15.17051
                ],
                [
                  100.23494,
                  15.16442
                ],
                [
                  100.24257,
                  15.15706
                ],
                [
                  100.24502,
                  15.15307
                ],
                [
                  100.24584,
                  15.14316
                ],
                [
                  100.24869,
                  15.14092
                ],
                [
                  100.25802,
                  15.12703
                ],
                [
                  100.26102,
                  15.12005
                ],
                [
                  100.26343,
                  15.11905
                ]
              ]
            ]
          }
        },
        {
          "geocode": "260107",
          "tambon": "ต.ศรีจุฬา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีจุฬา",
          "latitude": 14.07064,
          "longitude": 101.13746,
          "sum_rainfall_mm": 229.6,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.17691,
                  14.09338
                ],
                [
                  101.17768,
                  14.09256
                ],
                [
                  101.17859,
                  14.09375
                ],
                [
                  101.18077,
                  14.09296
                ],
                [
                  101.18294,
                  14.09571
                ],
                [
                  101.18566,
                  14.09242
                ],
                [
                  101.18918,
                  14.09324
                ],
                [
                  101.18882,
                  14.08708
                ],
                [
                  101.19043,
                  14.08244
                ],
                [
                  101.18971,
                  14.08021
                ],
                [
                  101.1858,
                  14.0831
                ],
                [
                  101.18446,
                  14.08074
                ],
                [
                  101.18049,
                  14.07926
                ],
                [
                  101.17834,
                  14.07669
                ],
                [
                  101.20383,
                  14.04118
                ],
                [
                  101.20082,
                  14.03734
                ],
                [
                  101.20018,
                  14.03206
                ],
                [
                  101.1969,
                  14.02891
                ],
                [
                  101.20014,
                  14.02541
                ],
                [
                  101.20018,
                  14.02358
                ],
                [
                  101.1985,
                  14.02295
                ],
                [
                  101.19532,
                  14.02478
                ],
                [
                  101.19366,
                  14.02369
                ],
                [
                  101.197,
                  14.0142
                ],
                [
                  101.19279,
                  14.01472
                ],
                [
                  101.1847,
                  14.01206
                ],
                [
                  101.17863,
                  14.01213
                ],
                [
                  101.17827,
                  14.0087
                ],
                [
                  101.17684,
                  14.00705
                ],
                [
                  101.17204,
                  14.01218
                ],
                [
                  101.17018,
                  14.01355
                ],
                [
                  101.16842,
                  14.01315
                ],
                [
                  101.16738,
                  14.01482
                ],
                [
                  101.15252,
                  14.0107
                ],
                [
                  101.12231,
                  14.05277
                ],
                [
                  101.11136,
                  14.05402
                ],
                [
                  101.1114,
                  14.09012
                ],
                [
                  101.10784,
                  14.09484
                ],
                [
                  101.11837,
                  14.09512
                ],
                [
                  101.12398,
                  14.11065
                ],
                [
                  101.14276,
                  14.09236
                ],
                [
                  101.14797,
                  14.10104
                ],
                [
                  101.14925,
                  14.09632
                ],
                [
                  101.15078,
                  14.09531
                ],
                [
                  101.14957,
                  14.09215
                ],
                [
                  101.15454,
                  14.09173
                ],
                [
                  101.16103,
                  14.0939
                ],
                [
                  101.15972,
                  14.09553
                ],
                [
                  101.16434,
                  14.10116
                ],
                [
                  101.16645,
                  14.10058
                ],
                [
                  101.17142,
                  14.10188
                ],
                [
                  101.17193,
                  14.09594
                ],
                [
                  101.1744,
                  14.09773
                ],
                [
                  101.17499,
                  14.09427
                ],
                [
                  101.17691,
                  14.09338
                ]
              ]
            ]
          }
        },
        {
          "geocode": "260404",
          "tambon": "ต.โพธิ์แทน",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองแม่น้ำใน(โพธิ์แทน)",
          "latitude": 14.212921,
          "longitude": 100.942453,
          "sum_rainfall_mm": 173.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.98382,
                  14.21802
                ],
                [
                  100.99444,
                  14.20633
                ],
                [
                  100.98982,
                  14.2042
                ],
                [
                  100.98591,
                  14.20418
                ],
                [
                  100.97416,
                  14.19582
                ],
                [
                  100.9445,
                  14.17845
                ],
                [
                  100.93842,
                  14.16662
                ],
                [
                  100.93596,
                  14.18125
                ],
                [
                  100.93661,
                  14.18655
                ],
                [
                  100.93458,
                  14.19467
                ],
                [
                  100.93176,
                  14.19734
                ],
                [
                  100.92333,
                  14.19996
                ],
                [
                  100.92427,
                  14.20148
                ],
                [
                  100.92051,
                  14.20342
                ],
                [
                  100.9143,
                  14.20917
                ],
                [
                  100.91429,
                  14.22118
                ],
                [
                  100.94673,
                  14.23657
                ],
                [
                  100.97723,
                  14.2133
                ],
                [
                  100.98382,
                  14.21802
                ]
              ]
            ]
          }
        },
        {
          "geocode": "600702",
          "tambon": "ต.ช่องแค",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ่อดินขาว",
          "latitude": 15.169044,
          "longitude": 100.41471,
          "sum_rainfall_mm": 128.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.45012,
                  15.24033
                ],
                [
                  100.44747,
                  15.23823
                ],
                [
                  100.44553,
                  15.23341
                ],
                [
                  100.4443,
                  15.22672
                ],
                [
                  100.44137,
                  15.22039
                ],
                [
                  100.44089,
                  15.21517
                ],
                [
                  100.43692,
                  15.20923
                ],
                [
                  100.43658,
                  15.20652
                ],
                [
                  100.44224,
                  15.19994
                ],
                [
                  100.45364,
                  15.19767
                ],
                [
                  100.45731,
                  15.19521
                ],
                [
                  100.45566,
                  15.17539
                ],
                [
                  100.44812,
                  15.14567
                ],
                [
                  100.44513,
                  15.14622
                ],
                [
                  100.4419,
                  15.14511
                ],
                [
                  100.43253,
                  15.13852
                ],
                [
                  100.42479,
                  15.14912
                ],
                [
                  100.421,
                  15.15158
                ],
                [
                  100.41387,
                  15.16003
                ],
                [
                  100.41578,
                  15.16822
                ],
                [
                  100.41343,
                  15.17205
                ],
                [
                  100.3904,
                  15.19586
                ],
                [
                  100.39401,
                  15.20642
                ],
                [
                  100.3978,
                  15.21278
                ],
                [
                  100.39507,
                  15.21438
                ],
                [
                  100.39401,
                  15.21814
                ],
                [
                  100.39482,
                  15.22053
                ],
                [
                  100.39036,
                  15.22291
                ],
                [
                  100.39009,
                  15.22703
                ],
                [
                  100.38709,
                  15.23083
                ],
                [
                  100.38883,
                  15.23262
                ],
                [
                  100.39349,
                  15.23006
                ],
                [
                  100.39578,
                  15.23011
                ],
                [
                  100.40152,
                  15.23373
                ],
                [
                  100.40294,
                  15.23964
                ],
                [
                  100.40248,
                  15.24206
                ],
                [
                  100.40388,
                  15.24418
                ],
                [
                  100.41217,
                  15.24089
                ],
                [
                  100.41775,
                  15.24395
                ],
                [
                  100.42116,
                  15.24438
                ],
                [
                  100.42426,
                  15.23854
                ],
                [
                  100.4261,
                  15.23808
                ],
                [
                  100.43384,
                  15.23875
                ],
                [
                  100.43809,
                  15.24087
                ],
                [
                  100.44481,
                  15.23975
                ],
                [
                  100.45012,
                  15.24033
                ]
              ]
            ]
          }
        },
        {
          "geocode": "600710",
          "tambon": "ต.พรหมนิมิต",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ช่องแค",
          "latitude": 15.14624,
          "longitude": 100.41298,
          "sum_rainfall_mm": 213.39999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.44812,
                  15.14567
                ],
                [
                  100.4478,
                  15.13944
                ],
                [
                  100.44941,
                  15.1324
                ],
                [
                  100.44325,
                  15.12713
                ],
                [
                  100.44017,
                  15.12622
                ],
                [
                  100.43434,
                  15.12663
                ],
                [
                  100.41878,
                  15.12994
                ],
                [
                  100.41373,
                  15.1365
                ],
                [
                  100.40686,
                  15.16311
                ],
                [
                  100.40446,
                  15.16292
                ],
                [
                  100.39266,
                  15.15743
                ],
                [
                  100.38475,
                  15.15874
                ],
                [
                  100.38201,
                  15.16183
                ],
                [
                  100.37443,
                  15.17841
                ],
                [
                  100.37749,
                  15.18143
                ],
                [
                  100.38284,
                  15.19081
                ],
                [
                  100.38917,
                  15.1906
                ],
                [
                  100.3904,
                  15.19586
                ],
                [
                  100.41343,
                  15.17205
                ],
                [
                  100.41578,
                  15.16822
                ],
                [
                  100.41387,
                  15.16003
                ],
                [
                  100.421,
                  15.15158
                ],
                [
                  100.42479,
                  15.14912
                ],
                [
                  100.43253,
                  15.13852
                ],
                [
                  100.4419,
                  15.14511
                ],
                [
                  100.44513,
                  15.14622
                ],
                [
                  100.44812,
                  15.14567
                ]
              ]
            ]
          }
        },
        {
          "geocode": "140203",
          "tambon": "ต.ท่าหลวง",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.พระนารายน์",
          "latitude": 14.5583,
          "longitude": 100.76205,
          "sum_rainfall_mm": 232.99999999999997,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.78074,
                  14.56733
                ],
                [
                  100.78239,
                  14.5664
                ],
                [
                  100.78137,
                  14.56108
                ],
                [
                  100.77743,
                  14.55642
                ],
                [
                  100.77556,
                  14.55041
                ],
                [
                  100.77941,
                  14.53918
                ],
                [
                  100.77854,
                  14.53033
                ],
                [
                  100.7752,
                  14.52686
                ],
                [
                  100.77123,
                  14.52703
                ],
                [
                  100.76949,
                  14.52502
                ],
                [
                  100.76749,
                  14.52482
                ],
                [
                  100.755,
                  14.53742
                ],
                [
                  100.74808,
                  14.54276
                ],
                [
                  100.74692,
                  14.54522
                ],
                [
                  100.74734,
                  14.54919
                ],
                [
                  100.75297,
                  14.56227
                ],
                [
                  100.75469,
                  14.56345
                ],
                [
                  100.75643,
                  14.56109
                ],
                [
                  100.75757,
                  14.56122
                ],
                [
                  100.76271,
                  14.56855
                ],
                [
                  100.76939,
                  14.56565
                ],
                [
                  100.77438,
                  14.56716
                ],
                [
                  100.78074,
                  14.56733
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170504",
          "tambon": "ต.พิกุลทอง",
          "amphoe": "อ.ท่าช้าง",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ยางมณี",
          "latitude": 14.751,
          "longitude": 100.41463,
          "sum_rainfall_mm": 223.80000000000004,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.42145,
                  14.79022
                ],
                [
                  100.42292,
                  14.78831
                ],
                [
                  100.42352,
                  14.78369
                ],
                [
                  100.4215,
                  14.75704
                ],
                [
                  100.41469,
                  14.74922
                ],
                [
                  100.41356,
                  14.7515
                ],
                [
                  100.4063,
                  14.7558
                ],
                [
                  100.40412,
                  14.75899
                ],
                [
                  100.39961,
                  14.75927
                ],
                [
                  100.39568,
                  14.76194
                ],
                [
                  100.39347,
                  14.766
                ],
                [
                  100.39058,
                  14.7656
                ],
                [
                  100.39019,
                  14.76678
                ],
                [
                  100.39106,
                  14.76902
                ],
                [
                  100.39545,
                  14.77132
                ],
                [
                  100.39878,
                  14.77767
                ],
                [
                  100.40146,
                  14.78394
                ],
                [
                  100.40006,
                  14.78889
                ],
                [
                  100.40631,
                  14.79223
                ],
                [
                  100.418,
                  14.78993
                ],
                [
                  100.42145,
                  14.79022
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170203",
          "tambon": "ต.เชิงกลัด",
          "amphoe": "อ.บางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.บางระจัน",
          "latitude": 14.92539,
          "longitude": 100.27912,
          "sum_rainfall_mm": 118.6,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.25907,
                  14.94381
                ],
                [
                  100.26054,
                  14.93818
                ],
                [
                  100.26974,
                  14.93775
                ],
                [
                  100.27298,
                  14.92859
                ],
                [
                  100.28349,
                  14.92337
                ],
                [
                  100.28669,
                  14.91527
                ],
                [
                  100.29565,
                  14.90617
                ],
                [
                  100.29669,
                  14.90287
                ],
                [
                  100.28471,
                  14.88555
                ],
                [
                  100.26155,
                  14.87161
                ],
                [
                  100.25476,
                  14.88787
                ],
                [
                  100.25854,
                  14.896
                ],
                [
                  100.2603,
                  14.90463
                ],
                [
                  100.25495,
                  14.91437
                ],
                [
                  100.25814,
                  14.92274
                ],
                [
                  100.24519,
                  14.92807
                ],
                [
                  100.24114,
                  14.93125
                ],
                [
                  100.24245,
                  14.93943
                ],
                [
                  100.24532,
                  14.94592
                ],
                [
                  100.25907,
                  14.94381
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170605",
          "tambon": "ต.ชีน้ำร้าย",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สถานีสูบน้ำคลองระบายชัยนาท-ป่าสัก 2 (ทุ่งเชียงราก)",
          "latitude": 15.05502,
          "longitude": 100.32081,
          "sum_rainfall_mm": 209.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.36498,
                  15.09353
                ],
                [
                  100.35871,
                  15.07199
                ],
                [
                  100.35735,
                  15.08346
                ],
                [
                  100.35253,
                  15.07565
                ],
                [
                  100.34728,
                  15.0712
                ],
                [
                  100.32372,
                  15.05785
                ],
                [
                  100.31833,
                  15.05289
                ],
                [
                  100.31307,
                  15.05017
                ],
                [
                  100.30512,
                  15.05158
                ],
                [
                  100.3052,
                  15.05369
                ],
                [
                  100.30986,
                  15.0607
                ],
                [
                  100.30972,
                  15.0634
                ],
                [
                  100.30775,
                  15.06522
                ],
                [
                  100.30323,
                  15.06588
                ],
                [
                  100.29659,
                  15.06128
                ],
                [
                  100.29396,
                  15.06186
                ],
                [
                  100.29466,
                  15.07117
                ],
                [
                  100.28908,
                  15.07846
                ],
                [
                  100.30365,
                  15.08305
                ],
                [
                  100.31932,
                  15.09118
                ],
                [
                  100.32761,
                  15.0968
                ],
                [
                  100.3494,
                  15.11489
                ],
                [
                  100.35165,
                  15.11985
                ],
                [
                  100.35408,
                  15.11881
                ],
                [
                  100.35634,
                  15.11567
                ],
                [
                  100.3543,
                  15.10122
                ],
                [
                  100.36498,
                  15.09353
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170601",
          "tambon": "ต.อินทร์บุรี",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อินทร์บุรี",
          "latitude": 15.00602,
          "longitude": 100.33088,
          "sum_rainfall_mm": 186.79999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.33882,
                  15.01584
                ],
                [
                  100.34152,
                  15.00818
                ],
                [
                  100.34386,
                  15.0092
                ],
                [
                  100.3486,
                  15.00898
                ],
                [
                  100.34903,
                  15.0108
                ],
                [
                  100.351,
                  15.0111
                ],
                [
                  100.3559,
                  15.00385
                ],
                [
                  100.34677,
                  15.00344
                ],
                [
                  100.35307,
                  14.99171
                ],
                [
                  100.35068,
                  14.99096
                ],
                [
                  100.34888,
                  14.98846
                ],
                [
                  100.33887,
                  14.98473
                ],
                [
                  100.3367,
                  14.99222
                ],
                [
                  100.3329,
                  14.99148
                ],
                [
                  100.3322,
                  14.99039
                ],
                [
                  100.32719,
                  14.99127
                ],
                [
                  100.32039,
                  14.98882
                ],
                [
                  100.31191,
                  15.00263
                ],
                [
                  100.30935,
                  15.01022
                ],
                [
                  100.31031,
                  15.0136
                ],
                [
                  100.3095,
                  15.02138
                ],
                [
                  100.30578,
                  15.02408
                ],
                [
                  100.30432,
                  15.02773
                ],
                [
                  100.32671,
                  15.03013
                ],
                [
                  100.32825,
                  15.02641
                ],
                [
                  100.3316,
                  15.0232
                ],
                [
                  100.33175,
                  15.02043
                ],
                [
                  100.33634,
                  15.02087
                ],
                [
                  100.33882,
                  15.01584
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สามชุก",
          "latitude": 14.75138,
          "longitude": 100.09592,
          "sum_rainfall_mm": 159.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.11676,
                  14.7849
                ],
                [
                  100.11473,
                  14.76944
                ],
                [
                  100.11631,
                  14.74673
                ],
                [
                  100.12186,
                  14.74423
                ],
                [
                  100.12301,
                  14.74171
                ],
                [
                  100.12649,
                  14.74014
                ],
                [
                  100.13027,
                  14.73589
                ],
                [
                  100.1138,
                  14.73356
                ],
                [
                  100.10364,
                  14.73398
                ],
                [
                  100.08405,
                  14.72894
                ],
                [
                  100.08098,
                  14.73004
                ],
                [
                  100.08409,
                  14.7359
                ],
                [
                  100.08362,
                  14.7418
                ],
                [
                  100.08504,
                  14.74635
                ],
                [
                  100.08437,
                  14.75169
                ],
                [
                  100.08358,
                  14.75143
                ],
                [
                  100.08209,
                  14.7541
                ],
                [
                  100.07216,
                  14.75247
                ],
                [
                  100.07242,
                  14.76084
                ],
                [
                  100.0699,
                  14.76088
                ],
                [
                  100.06809,
                  14.76305
                ],
                [
                  100.06571,
                  14.76279
                ],
                [
                  100.06547,
                  14.76566
                ],
                [
                  100.06661,
                  14.76557
                ],
                [
                  100.06663,
                  14.76985
                ],
                [
                  100.06565,
                  14.76986
                ],
                [
                  100.06648,
                  14.77352
                ],
                [
                  100.06194,
                  14.77311
                ],
                [
                  100.05907,
                  14.77162
                ],
                [
                  100.06137,
                  14.77731
                ],
                [
                  100.06583,
                  14.78205
                ],
                [
                  100.06954,
                  14.78173
                ],
                [
                  100.07298,
                  14.78369
                ],
                [
                  100.07375,
                  14.78259
                ],
                [
                  100.07497,
                  14.7834
                ],
                [
                  100.07599,
                  14.78265
                ],
                [
                  100.07805,
                  14.78655
                ],
                [
                  100.08046,
                  14.78616
                ],
                [
                  100.08539,
                  14.7878
                ],
                [
                  100.08902,
                  14.78688
                ],
                [
                  100.09333,
                  14.78921
                ],
                [
                  100.0984,
                  14.7888
                ],
                [
                  100.10326,
                  14.79071
                ],
                [
                  100.10536,
                  14.79287
                ],
                [
                  100.10959,
                  14.78984
                ],
                [
                  100.11261,
                  14.78956
                ],
                [
                  100.11676,
                  14.7849
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610301",
          "tambon": "ต.สว่างอารมณ์",
          "amphoe": "อ.สว่างอารมณ์",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สว่างอารมณ์",
          "latitude": 15.58538,
          "longitude": 99.86514,
          "sum_rainfall_mm": 152.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.85073,
                  15.62
                ],
                [
                  99.86256,
                  15.61753
                ],
                [
                  99.86408,
                  15.61456
                ],
                [
                  99.86605,
                  15.61399
                ],
                [
                  99.86696,
                  15.60752
                ],
                [
                  99.86561,
                  15.60598
                ],
                [
                  99.86835,
                  15.60501
                ],
                [
                  99.86734,
                  15.60208
                ],
                [
                  99.86917,
                  15.60092
                ],
                [
                  99.86682,
                  15.59903
                ],
                [
                  99.8684,
                  15.59714
                ],
                [
                  99.86719,
                  15.59606
                ],
                [
                  99.86853,
                  15.59534
                ],
                [
                  99.86585,
                  15.59434
                ],
                [
                  99.86865,
                  15.59254
                ],
                [
                  99.86867,
                  15.59092
                ],
                [
                  99.86728,
                  15.58985
                ],
                [
                  99.86832,
                  15.58765
                ],
                [
                  99.86569,
                  15.58651
                ],
                [
                  99.86553,
                  15.58531
                ],
                [
                  99.86738,
                  15.58317
                ],
                [
                  99.86579,
                  15.58252
                ],
                [
                  99.86965,
                  15.57941
                ],
                [
                  99.86632,
                  15.57881
                ],
                [
                  99.86919,
                  15.57762
                ],
                [
                  99.86868,
                  15.57458
                ],
                [
                  99.87044,
                  15.57326
                ],
                [
                  99.86938,
                  15.57158
                ],
                [
                  99.8705,
                  15.56805
                ],
                [
                  99.86823,
                  15.56717
                ],
                [
                  99.8714,
                  15.56517
                ],
                [
                  99.87079,
                  15.56378
                ],
                [
                  99.87269,
                  15.56103
                ],
                [
                  99.87623,
                  15.55916
                ],
                [
                  99.87577,
                  15.55664
                ],
                [
                  99.87753,
                  15.55431
                ],
                [
                  99.87418,
                  15.5547
                ],
                [
                  99.87257,
                  15.55335
                ],
                [
                  99.87117,
                  15.55597
                ],
                [
                  99.86649,
                  15.55843
                ],
                [
                  99.86395,
                  15.55756
                ],
                [
                  99.86398,
                  15.54705
                ],
                [
                  99.86225,
                  15.54445
                ],
                [
                  99.86303,
                  15.54313
                ],
                [
                  99.85919,
                  15.53787
                ],
                [
                  99.85825,
                  15.53382
                ],
                [
                  99.84792,
                  15.53167
                ],
                [
                  99.84648,
                  15.52912
                ],
                [
                  99.84391,
                  15.52875
                ],
                [
                  99.84172,
                  15.52578
                ],
                [
                  99.8379,
                  15.52457
                ],
                [
                  99.83611,
                  15.52215
                ],
                [
                  99.83259,
                  15.52058
                ],
                [
                  99.82704,
                  15.5226
                ],
                [
                  99.82057,
                  15.52811
                ],
                [
                  99.81577,
                  15.52992
                ],
                [
                  99.81421,
                  15.53169
                ],
                [
                  99.8128,
                  15.53555
                ],
                [
                  99.81352,
                  15.54049
                ],
                [
                  99.81076,
                  15.54391
                ],
                [
                  99.81022,
                  15.54647
                ],
                [
                  99.81283,
                  15.55518
                ],
                [
                  99.82067,
                  15.56647
                ],
                [
                  99.82734,
                  15.56769
                ],
                [
                  99.83225,
                  15.56516
                ],
                [
                  99.84132,
                  15.56441
                ],
                [
                  99.84374,
                  15.56641
                ],
                [
                  99.84483,
                  15.56569
                ],
                [
                  99.84716,
                  15.56656
                ],
                [
                  99.83838,
                  15.5733
                ],
                [
                  99.83776,
                  15.58185
                ],
                [
                  99.83913,
                  15.58755
                ],
                [
                  99.8386,
                  15.59548
                ],
                [
                  99.84029,
                  15.60614
                ],
                [
                  99.84769,
                  15.61863
                ],
                [
                  99.85073,
                  15.62
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240301",
          "tambon": "ต.บางน้ำเปรี้ยว",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
          "latitude": 13.83819,
          "longitude": 100.9666,
          "sum_rainfall_mm": 266.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.05003,
                  13.85515
                ],
                [
                  101.05344,
                  13.84978
                ],
                [
                  101.058,
                  13.84776
                ],
                [
                  101.04385,
                  13.83589
                ],
                [
                  101.02322,
                  13.81521
                ],
                [
                  101.01824,
                  13.80922
                ],
                [
                  101.01615,
                  13.8034
                ],
                [
                  101.00613,
                  13.79296
                ],
                [
                  101.00126,
                  13.79735
                ],
                [
                  100.99663,
                  13.79913
                ],
                [
                  100.99498,
                  13.80091
                ],
                [
                  100.99068,
                  13.80028
                ],
                [
                  100.97936,
                  13.80734
                ],
                [
                  100.96691,
                  13.80694
                ],
                [
                  100.95904,
                  13.81267
                ],
                [
                  100.95537,
                  13.80868
                ],
                [
                  100.9535,
                  13.81573
                ],
                [
                  100.95736,
                  13.82289
                ],
                [
                  100.95777,
                  13.82692
                ],
                [
                  100.96358,
                  13.83525
                ],
                [
                  100.9671,
                  13.83852
                ],
                [
                  100.97027,
                  13.83897
                ],
                [
                  100.97135,
                  13.84189
                ],
                [
                  100.97589,
                  13.84634
                ],
                [
                  100.97918,
                  13.8455
                ],
                [
                  100.99665,
                  13.85218
                ],
                [
                  101.00166,
                  13.8576
                ],
                [
                  101.01308,
                  13.84912
                ],
                [
                  101.05003,
                  13.85515
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240309",
          "tambon": "ต.ศาลาแดง",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปตร.คลองหลวงแพ่ง",
          "latitude": 13.81321,
          "longitude": 100.93742,
          "sum_rainfall_mm": 216.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.93616,
                  13.85397
                ],
                [
                  100.93629,
                  13.85172
                ],
                [
                  100.93754,
                  13.85128
                ],
                [
                  100.93712,
                  13.84697
                ],
                [
                  100.94163,
                  13.84501
                ],
                [
                  100.94584,
                  13.84593
                ],
                [
                  100.94978,
                  13.84438
                ],
                [
                  100.95516,
                  13.84399
                ],
                [
                  100.95762,
                  13.84627
                ],
                [
                  100.97276,
                  13.84869
                ],
                [
                  100.97589,
                  13.84634
                ],
                [
                  100.97135,
                  13.84189
                ],
                [
                  100.97027,
                  13.83897
                ],
                [
                  100.9659,
                  13.83758
                ],
                [
                  100.95962,
                  13.82983
                ],
                [
                  100.95349,
                  13.8145
                ],
                [
                  100.95537,
                  13.80868
                ],
                [
                  100.95904,
                  13.81267
                ],
                [
                  100.96691,
                  13.80694
                ],
                [
                  100.97936,
                  13.80734
                ],
                [
                  100.99068,
                  13.80028
                ],
                [
                  100.99432,
                  13.80105
                ],
                [
                  100.99663,
                  13.79913
                ],
                [
                  100.98765,
                  13.79708
                ],
                [
                  100.98144,
                  13.79322
                ],
                [
                  100.98108,
                  13.79003
                ],
                [
                  100.98341,
                  13.7807
                ],
                [
                  100.97524,
                  13.77076
                ],
                [
                  100.93066,
                  13.8049
                ],
                [
                  100.93796,
                  13.81465
                ],
                [
                  100.9073,
                  13.83855
                ],
                [
                  100.90907,
                  13.84239
                ],
                [
                  100.91281,
                  13.8463
                ],
                [
                  100.90461,
                  13.84853
                ],
                [
                  100.90492,
                  13.85049
                ],
                [
                  100.91304,
                  13.84936
                ],
                [
                  100.92391,
                  13.84971
                ],
                [
                  100.92408,
                  13.85434
                ],
                [
                  100.93616,
                  13.85397
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240402",
          "tambon": "ต.ท่าสะอ้าน",
          "amphoe": "อ.บางปะกง",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บางปะกง",
          "latitude": 13.54901,
          "longitude": 101.00111,
          "sum_rainfall_mm": 206.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99635,
                  13.56022
                ],
                [
                  101.00233,
                  13.5601
                ],
                [
                  101.01679,
                  13.5662
                ],
                [
                  101.02206,
                  13.5615
                ],
                [
                  101.02447,
                  13.5498
                ],
                [
                  101.02283,
                  13.54844
                ],
                [
                  101.02053,
                  13.54835
                ],
                [
                  101.01372,
                  13.55113
                ],
                [
                  101.0098,
                  13.55157
                ],
                [
                  101.00337,
                  13.54981
                ],
                [
                  100.99584,
                  13.54412
                ],
                [
                  100.9952,
                  13.5418
                ],
                [
                  100.99587,
                  13.53558
                ],
                [
                  101.00058,
                  13.52746
                ],
                [
                  100.98721,
                  13.52823
                ],
                [
                  100.97677,
                  13.53774
                ],
                [
                  100.97758,
                  13.53886
                ],
                [
                  100.98067,
                  13.53732
                ],
                [
                  100.98195,
                  13.53806
                ],
                [
                  100.97983,
                  13.54576
                ],
                [
                  100.98195,
                  13.55419
                ],
                [
                  100.97726,
                  13.56292
                ],
                [
                  100.98026,
                  13.56345
                ],
                [
                  100.97869,
                  13.56932
                ],
                [
                  100.98041,
                  13.57338
                ],
                [
                  100.98086,
                  13.57784
                ],
                [
                  100.97956,
                  13.57954
                ],
                [
                  100.98024,
                  13.58131
                ],
                [
                  100.98181,
                  13.57895
                ],
                [
                  100.99058,
                  13.57382
                ],
                [
                  100.9948,
                  13.56668
                ],
                [
                  100.99635,
                  13.56022
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240501",
          "tambon": "ต.บ้านโพธิ์",
          "amphoe": "อ.บ้านโพธิ์",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านโพธิ์",
          "latitude": 13.58335,
          "longitude": 101.070917,
          "sum_rainfall_mm": 308.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.0906,
                  13.60431
                ],
                [
                  101.09405,
                  13.60456
                ],
                [
                  101.09411,
                  13.59912
                ],
                [
                  101.09838,
                  13.59207
                ],
                [
                  101.09648,
                  13.58711
                ],
                [
                  101.09839,
                  13.58272
                ],
                [
                  101.09634,
                  13.57799
                ],
                [
                  101.09699,
                  13.57677
                ],
                [
                  101.09589,
                  13.57193
                ],
                [
                  101.09439,
                  13.56959
                ],
                [
                  101.09015,
                  13.57263
                ],
                [
                  101.08391,
                  13.57058
                ],
                [
                  101.08212,
                  13.57323
                ],
                [
                  101.07827,
                  13.57494
                ],
                [
                  101.07598,
                  13.57949
                ],
                [
                  101.07217,
                  13.58106
                ],
                [
                  101.07038,
                  13.58483
                ],
                [
                  101.07482,
                  13.5877
                ],
                [
                  101.07639,
                  13.59285
                ],
                [
                  101.07642,
                  13.60159
                ],
                [
                  101.0801,
                  13.60236
                ],
                [
                  101.08208,
                  13.6077
                ],
                [
                  101.08379,
                  13.60763
                ],
                [
                  101.08638,
                  13.60417
                ],
                [
                  101.0906,
                  13.60431
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240601",
          "tambon": "ต.เกาะขนุน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ฝายท่าลาด",
          "latitude": 13.707719,
          "longitude": 101.401415,
          "sum_rainfall_mm": 244.5,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.4238,
                  13.75741
                ],
                [
                  101.42358,
                  13.74932
                ],
                [
                  101.43116,
                  13.74172
                ],
                [
                  101.43647,
                  13.72604
                ],
                [
                  101.44371,
                  13.71884
                ],
                [
                  101.44342,
                  13.71279
                ],
                [
                  101.44562,
                  13.70475
                ],
                [
                  101.44558,
                  13.68971
                ],
                [
                  101.44037,
                  13.68716
                ],
                [
                  101.43714,
                  13.67846
                ],
                [
                  101.43428,
                  13.67554
                ],
                [
                  101.42259,
                  13.67345
                ],
                [
                  101.42039,
                  13.67149
                ],
                [
                  101.42052,
                  13.66346
                ],
                [
                  101.42279,
                  13.65607
                ],
                [
                  101.41568,
                  13.64305
                ],
                [
                  101.41297,
                  13.63475
                ],
                [
                  101.40795,
                  13.62696
                ],
                [
                  101.40081,
                  13.62093
                ],
                [
                  101.39909,
                  13.61518
                ],
                [
                  101.38811,
                  13.61909
                ],
                [
                  101.38213,
                  13.62285
                ],
                [
                  101.3779,
                  13.62753
                ],
                [
                  101.36707,
                  13.64379
                ],
                [
                  101.36552,
                  13.64917
                ],
                [
                  101.36577,
                  13.65388
                ],
                [
                  101.36379,
                  13.65719
                ],
                [
                  101.36332,
                  13.66168
                ],
                [
                  101.35863,
                  13.66946
                ],
                [
                  101.35795,
                  13.67379
                ],
                [
                  101.36439,
                  13.68266
                ],
                [
                  101.36495,
                  13.68668
                ],
                [
                  101.36496,
                  13.70599
                ],
                [
                  101.36298,
                  13.71463
                ],
                [
                  101.3593,
                  13.72324
                ],
                [
                  101.36435,
                  13.73005
                ],
                [
                  101.36667,
                  13.74043
                ],
                [
                  101.38908,
                  13.75783
                ],
                [
                  101.39747,
                  13.77024
                ],
                [
                  101.41171,
                  13.76273
                ],
                [
                  101.41358,
                  13.75286
                ],
                [
                  101.4238,
                  13.75741
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240607",
          "tambon": "ต.หนองแหน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.หนองแหน",
          "latitude": 13.68338,
          "longitude": 101.32512,
          "sum_rainfall_mm": 357.3999999999999,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.33804,
                  13.70481
                ],
                [
                  101.35074,
                  13.7031
                ],
                [
                  101.34402,
                  13.69618
                ],
                [
                  101.34441,
                  13.69262
                ],
                [
                  101.35795,
                  13.67379
                ],
                [
                  101.35863,
                  13.66946
                ],
                [
                  101.36332,
                  13.66168
                ],
                [
                  101.36379,
                  13.65719
                ],
                [
                  101.36577,
                  13.65388
                ],
                [
                  101.36552,
                  13.64917
                ],
                [
                  101.36707,
                  13.64379
                ],
                [
                  101.37383,
                  13.63343
                ],
                [
                  101.38213,
                  13.62285
                ],
                [
                  101.38811,
                  13.61909
                ],
                [
                  101.39909,
                  13.61518
                ],
                [
                  101.39329,
                  13.6046
                ],
                [
                  101.38964,
                  13.60312
                ],
                [
                  101.38554,
                  13.59937
                ],
                [
                  101.38297,
                  13.5996
                ],
                [
                  101.37966,
                  13.60469
                ],
                [
                  101.37301,
                  13.61041
                ],
                [
                  101.36612,
                  13.61478
                ],
                [
                  101.36244,
                  13.61509
                ],
                [
                  101.36143,
                  13.61741
                ],
                [
                  101.35876,
                  13.61776
                ],
                [
                  101.35455,
                  13.62081
                ],
                [
                  101.34367,
                  13.63303
                ],
                [
                  101.33998,
                  13.63487
                ],
                [
                  101.33485,
                  13.64065
                ],
                [
                  101.32746,
                  13.64109
                ],
                [
                  101.31264,
                  13.64939
                ],
                [
                  101.30143,
                  13.65278
                ],
                [
                  101.29857,
                  13.6553
                ],
                [
                  101.29434,
                  13.65472
                ],
                [
                  101.29147,
                  13.65576
                ],
                [
                  101.28796,
                  13.65761
                ],
                [
                  101.28219,
                  13.66405
                ],
                [
                  101.28462,
                  13.66752
                ],
                [
                  101.29047,
                  13.68179
                ],
                [
                  101.29208,
                  13.69941
                ],
                [
                  101.29375,
                  13.69897
                ],
                [
                  101.3038,
                  13.70186
                ],
                [
                  101.31566,
                  13.70042
                ],
                [
                  101.32029,
                  13.70328
                ],
                [
                  101.32622,
                  13.7038
                ],
                [
                  101.33125,
                  13.70705
                ],
                [
                  101.33596,
                  13.70434
                ],
                [
                  101.33804,
                  13.70481
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240109",
          "tambon": "ต.บางขวัญ",
          "amphoe": "อ.เมืองฉะเชิงเทรา",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บางขวัญ",
          "latitude": 13.74984,
          "longitude": 101.07751,
          "sum_rainfall_mm": 325.4,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.07779,
                  13.76274
                ],
                [
                  101.07959,
                  13.75942
                ],
                [
                  101.07966,
                  13.7555
                ],
                [
                  101.0861,
                  13.75506
                ],
                [
                  101.09833,
                  13.75208
                ],
                [
                  101.10536,
                  13.74149
                ],
                [
                  101.10834,
                  13.74079
                ],
                [
                  101.11181,
                  13.73622
                ],
                [
                  101.10399,
                  13.72955
                ],
                [
                  101.1013,
                  13.73205
                ],
                [
                  101.09475,
                  13.73108
                ],
                [
                  101.09527,
                  13.7292
                ],
                [
                  101.09775,
                  13.72898
                ],
                [
                  101.10004,
                  13.72679
                ],
                [
                  101.10275,
                  13.72623
                ],
                [
                  101.10273,
                  13.72298
                ],
                [
                  101.10493,
                  13.7216
                ],
                [
                  101.10245,
                  13.71919
                ],
                [
                  101.1018,
                  13.71692
                ],
                [
                  101.10383,
                  13.71551
                ],
                [
                  101.09122,
                  13.71073
                ],
                [
                  101.0885,
                  13.70184
                ],
                [
                  101.08837,
                  13.70345
                ],
                [
                  101.08673,
                  13.70445
                ],
                [
                  101.08664,
                  13.70817
                ],
                [
                  101.08449,
                  13.71263
                ],
                [
                  101.08202,
                  13.71373
                ],
                [
                  101.08371,
                  13.72166
                ],
                [
                  101.08303,
                  13.72459
                ],
                [
                  101.08106,
                  13.7265
                ],
                [
                  101.08073,
                  13.73173
                ],
                [
                  101.0765,
                  13.73411
                ],
                [
                  101.07541,
                  13.73809
                ],
                [
                  101.0773,
                  13.74025
                ],
                [
                  101.07733,
                  13.74194
                ],
                [
                  101.07471,
                  13.74427
                ],
                [
                  101.07635,
                  13.74746
                ],
                [
                  101.0735,
                  13.75484
                ],
                [
                  101.06585,
                  13.75917
                ],
                [
                  101.06227,
                  13.76392
                ],
                [
                  101.05867,
                  13.7647
                ],
                [
                  101.0578,
                  13.76852
                ],
                [
                  101.04692,
                  13.77252
                ],
                [
                  101.0447,
                  13.77484
                ],
                [
                  101.04172,
                  13.77286
                ],
                [
                  101.0392,
                  13.77342
                ],
                [
                  101.03813,
                  13.77708
                ],
                [
                  101.03412,
                  13.77939
                ],
                [
                  101.03813,
                  13.78857
                ],
                [
                  101.04464,
                  13.79054
                ],
                [
                  101.04858,
                  13.78854
                ],
                [
                  101.0512,
                  13.7886
                ],
                [
                  101.06352,
                  13.79681
                ],
                [
                  101.06595,
                  13.79274
                ],
                [
                  101.06972,
                  13.78935
                ],
                [
                  101.0713,
                  13.78358
                ],
                [
                  101.07005,
                  13.77585
                ],
                [
                  101.07779,
                  13.76274
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200204",
          "tambon": "ต.หนองซ้ำซาก",
          "amphoe": "อ.บ้านบึง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์ป่าอ่างช้างน้ำ",
          "latitude": 13.2743,
          "longitude": 101.082,
          "sum_rainfall_mm": 176.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.08544,
                  13.3296
                ],
                [
                  101.08714,
                  13.33068
                ],
                [
                  101.08877,
                  13.32905
                ],
                [
                  101.09062,
                  13.3292
                ],
                [
                  101.09183,
                  13.32736
                ],
                [
                  101.09173,
                  13.32198
                ],
                [
                  101.08988,
                  13.31924
                ],
                [
                  101.09225,
                  13.31692
                ],
                [
                  101.09178,
                  13.31386
                ],
                [
                  101.09394,
                  13.30986
                ],
                [
                  101.09368,
                  13.30812
                ],
                [
                  101.08914,
                  13.30285
                ],
                [
                  101.08472,
                  13.29204
                ],
                [
                  101.08076,
                  13.28613
                ],
                [
                  101.07243,
                  13.28476
                ],
                [
                  101.06591,
                  13.28598
                ],
                [
                  101.07389,
                  13.29387
                ],
                [
                  101.0718,
                  13.29718
                ],
                [
                  101.07337,
                  13.30882
                ],
                [
                  101.068,
                  13.31981
                ],
                [
                  101.0677,
                  13.32683
                ],
                [
                  101.06494,
                  13.32838
                ],
                [
                  101.0578,
                  13.32947
                ],
                [
                  101.05765,
                  13.3314
                ],
                [
                  101.05942,
                  13.33476
                ],
                [
                  101.05298,
                  13.33846
                ],
                [
                  101.05484,
                  13.34325
                ],
                [
                  101.05448,
                  13.3487
                ],
                [
                  101.05307,
                  13.34974
                ],
                [
                  101.05076,
                  13.34866
                ],
                [
                  101.04081,
                  13.35801
                ],
                [
                  101.04496,
                  13.36236
                ],
                [
                  101.05256,
                  13.35713
                ],
                [
                  101.06317,
                  13.3626
                ],
                [
                  101.06716,
                  13.36732
                ],
                [
                  101.07443,
                  13.36253
                ],
                [
                  101.08002,
                  13.36158
                ],
                [
                  101.07975,
                  13.35615
                ],
                [
                  101.0778,
                  13.35357
                ],
                [
                  101.07923,
                  13.35178
                ],
                [
                  101.07939,
                  13.34519
                ],
                [
                  101.07796,
                  13.33744
                ],
                [
                  101.07975,
                  13.3358
                ],
                [
                  101.0797,
                  13.33327
                ],
                [
                  101.08544,
                  13.3296
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
          "latitude": 13.240835,
          "longitude": 101.04208,
          "sum_rainfall_mm": 277.5999999999999,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.02342,
                  13.28177
                ],
                [
                  101.02637,
                  13.27804
                ],
                [
                  101.03317,
                  13.27328
                ],
                [
                  101.03935,
                  13.27179
                ],
                [
                  101.04605,
                  13.26782
                ],
                [
                  101.05245,
                  13.26937
                ],
                [
                  101.0566,
                  13.26722
                ],
                [
                  101.05646,
                  13.2637
                ],
                [
                  101.05764,
                  13.26097
                ],
                [
                  101.05672,
                  13.25872
                ],
                [
                  101.05854,
                  13.2566
                ],
                [
                  101.05881,
                  13.25429
                ],
                [
                  101.06202,
                  13.25281
                ],
                [
                  101.06036,
                  13.24642
                ],
                [
                  101.06262,
                  13.23792
                ],
                [
                  101.0598,
                  13.23761
                ],
                [
                  101.05901,
                  13.23612
                ],
                [
                  101.06311,
                  13.22174
                ],
                [
                  101.06855,
                  13.21846
                ],
                [
                  101.07469,
                  13.21833
                ],
                [
                  101.07487,
                  13.21335
                ],
                [
                  101.06988,
                  13.20735
                ],
                [
                  101.07047,
                  13.20282
                ],
                [
                  101.07624,
                  13.20015
                ],
                [
                  101.08068,
                  13.19249
                ],
                [
                  101.0835,
                  13.19044
                ],
                [
                  101.07893,
                  13.18641
                ],
                [
                  101.07647,
                  13.17787
                ],
                [
                  101.07391,
                  13.17488
                ],
                [
                  101.07253,
                  13.16384
                ],
                [
                  101.06999,
                  13.1603
                ],
                [
                  101.06845,
                  13.15935
                ],
                [
                  101.0655,
                  13.15965
                ],
                [
                  101.04836,
                  13.16692
                ],
                [
                  101.02312,
                  13.16795
                ],
                [
                  100.99883,
                  13.1795
                ],
                [
                  100.99481,
                  13.17727
                ],
                [
                  100.98935,
                  13.1763
                ],
                [
                  100.98524,
                  13.17088
                ],
                [
                  100.98229,
                  13.17578
                ],
                [
                  100.97946,
                  13.17595
                ],
                [
                  100.97056,
                  13.16487
                ],
                [
                  100.97042,
                  13.16331
                ],
                [
                  100.96924,
                  13.16568
                ],
                [
                  100.9672,
                  13.1656
                ],
                [
                  100.96431,
                  13.16923
                ],
                [
                  100.95921,
                  13.17031
                ],
                [
                  100.95507,
                  13.17318
                ],
                [
                  100.9483,
                  13.17517
                ],
                [
                  100.9439,
                  13.17848
                ],
                [
                  100.93201,
                  13.18304
                ],
                [
                  100.93164,
                  13.18482
                ],
                [
                  100.92929,
                  13.18549
                ],
                [
                  100.92973,
                  13.19115
                ],
                [
                  100.93407,
                  13.19476
                ],
                [
                  100.93634,
                  13.20342
                ],
                [
                  100.93422,
                  13.21106
                ],
                [
                  100.9362,
                  13.21465
                ],
                [
                  100.93612,
                  13.21944
                ],
                [
                  100.93136,
                  13.2378
                ],
                [
                  100.93868,
                  13.2397
                ],
                [
                  100.9554,
                  13.24
                ],
                [
                  100.96228,
                  13.24163
                ],
                [
                  100.9694,
                  13.24732
                ],
                [
                  100.97343,
                  13.25266
                ],
                [
                  100.97367,
                  13.25494
                ],
                [
                  100.97742,
                  13.25745
                ],
                [
                  100.98265,
                  13.26878
                ],
                [
                  100.98993,
                  13.27031
                ],
                [
                  100.99417,
                  13.2674
                ],
                [
                  101.00594,
                  13.26941
                ],
                [
                  101.014,
                  13.27405
                ],
                [
                  101.02342,
                  13.28177
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230303",
          "tambon": "ต.วังตะเคียน",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองโสน",
          "latitude": 12.513374,
          "longitude": 102.50484,
          "sum_rainfall_mm": 254.60000000000002,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.55166,
                  12.50206
                ],
                [
                  102.55605,
                  12.49277
                ],
                [
                  102.55643,
                  12.48535
                ],
                [
                  102.56063,
                  12.48417
                ],
                [
                  102.5627,
                  12.48031
                ],
                [
                  102.56253,
                  12.47809
                ],
                [
                  102.55946,
                  12.4749
                ],
                [
                  102.55324,
                  12.47324
                ],
                [
                  102.5534,
                  12.46784
                ],
                [
                  102.55059,
                  12.46521
                ],
                [
                  102.55151,
                  12.46285
                ],
                [
                  102.54887,
                  12.46242
                ],
                [
                  102.54972,
                  12.45822
                ],
                [
                  102.5469,
                  12.45767
                ],
                [
                  102.53976,
                  12.45043
                ],
                [
                  102.53715,
                  12.45028
                ],
                [
                  102.53694,
                  12.44805
                ],
                [
                  102.53851,
                  12.44568
                ],
                [
                  102.53649,
                  12.44473
                ],
                [
                  102.53573,
                  12.44294
                ],
                [
                  102.53378,
                  12.44352
                ],
                [
                  102.5293,
                  12.44131
                ],
                [
                  102.52773,
                  12.44217
                ],
                [
                  102.52803,
                  12.43839
                ],
                [
                  102.52706,
                  12.43817
                ],
                [
                  102.52583,
                  12.44041
                ],
                [
                  102.52348,
                  12.43619
                ],
                [
                  102.52195,
                  12.43754
                ],
                [
                  102.52297,
                  12.43314
                ],
                [
                  102.51828,
                  12.4332
                ],
                [
                  102.50733,
                  12.42565
                ],
                [
                  102.50382,
                  12.42835
                ],
                [
                  102.49678,
                  12.42732
                ],
                [
                  102.49354,
                  12.42214
                ],
                [
                  102.4855,
                  12.41691
                ],
                [
                  102.48187,
                  12.41297
                ],
                [
                  102.47929,
                  12.4122
                ],
                [
                  102.47408,
                  12.40721
                ],
                [
                  102.46965,
                  12.40518
                ],
                [
                  102.46196,
                  12.40665
                ],
                [
                  102.46383,
                  12.41178
                ],
                [
                  102.45709,
                  12.42106
                ],
                [
                  102.45281,
                  12.42454
                ],
                [
                  102.45053,
                  12.42467
                ],
                [
                  102.44731,
                  12.4231
                ],
                [
                  102.44369,
                  12.41937
                ],
                [
                  102.44163,
                  12.42017
                ],
                [
                  102.43918,
                  12.4238
                ],
                [
                  102.43544,
                  12.42335
                ],
                [
                  102.43364,
                  12.43404
                ],
                [
                  102.44052,
                  12.43846
                ],
                [
                  102.43553,
                  12.44099
                ],
                [
                  102.4361,
                  12.44358
                ],
                [
                  102.44413,
                  12.44364
                ],
                [
                  102.44838,
                  12.43854
                ],
                [
                  102.45249,
                  12.44429
                ],
                [
                  102.45552,
                  12.43926
                ],
                [
                  102.45868,
                  12.44454
                ],
                [
                  102.46096,
                  12.44386
                ],
                [
                  102.46527,
                  12.44825
                ],
                [
                  102.46976,
                  12.44978
                ],
                [
                  102.46917,
                  12.45336
                ],
                [
                  102.47258,
                  12.45246
                ],
                [
                  102.47353,
                  12.45687
                ],
                [
                  102.47774,
                  12.4556
                ],
                [
                  102.48069,
                  12.45659
                ],
                [
                  102.47558,
                  12.46751
                ],
                [
                  102.47737,
                  12.46961
                ],
                [
                  102.47714,
                  12.4746
                ],
                [
                  102.47792,
                  12.47601
                ],
                [
                  102.48842,
                  12.48211
                ],
                [
                  102.48611,
                  12.48475
                ],
                [
                  102.48584,
                  12.48934
                ],
                [
                  102.48161,
                  12.48946
                ],
                [
                  102.48068,
                  12.49119
                ],
                [
                  102.48418,
                  12.49317
                ],
                [
                  102.48647,
                  12.49805
                ],
                [
                  102.49022,
                  12.499
                ],
                [
                  102.49051,
                  12.50211
                ],
                [
                  102.49314,
                  12.50337
                ],
                [
                  102.49522,
                  12.50627
                ],
                [
                  102.49543,
                  12.51116
                ],
                [
                  102.49904,
                  12.51258
                ],
                [
                  102.50304,
                  12.51176
                ],
                [
                  102.50649,
                  12.51534
                ],
                [
                  102.50647,
                  12.51152
                ],
                [
                  102.50865,
                  12.51239
                ],
                [
                  102.51044,
                  12.51057
                ],
                [
                  102.5127,
                  12.51035
                ],
                [
                  102.51415,
                  12.51341
                ],
                [
                  102.51933,
                  12.51082
                ],
                [
                  102.52188,
                  12.51296
                ],
                [
                  102.52317,
                  12.51267
                ],
                [
                  102.52313,
                  12.5142
                ],
                [
                  102.52609,
                  12.5127
                ],
                [
                  102.52833,
                  12.5162
                ],
                [
                  102.529,
                  12.51307
                ],
                [
                  102.53158,
                  12.51453
                ],
                [
                  102.53512,
                  12.51133
                ],
                [
                  102.53711,
                  12.51253
                ],
                [
                  102.53981,
                  12.51087
                ],
                [
                  102.54184,
                  12.51223
                ],
                [
                  102.54462,
                  12.51129
                ],
                [
                  102.54479,
                  12.50881
                ],
                [
                  102.54736,
                  12.50872
                ],
                [
                  102.54804,
                  12.50628
                ],
                [
                  102.55054,
                  12.5053
                ],
                [
                  102.55166,
                  12.50206
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230305",
          "tambon": "ต.สะตอ",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.สะตอ",
          "latitude": 12.53639,
          "longitude": 102.44429,
          "sum_rainfall_mm": 319.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.42127,
                  12.6152
                ],
                [
                  102.42638,
                  12.61499
                ],
                [
                  102.42933,
                  12.61168
                ],
                [
                  102.43033,
                  12.60654
                ],
                [
                  102.43168,
                  12.60509
                ],
                [
                  102.44231,
                  12.60501
                ],
                [
                  102.4435,
                  12.58455
                ],
                [
                  102.45828,
                  12.57365
                ],
                [
                  102.4688,
                  12.55937
                ],
                [
                  102.46939,
                  12.54703
                ],
                [
                  102.47451,
                  12.54331
                ],
                [
                  102.47874,
                  12.53783
                ],
                [
                  102.48414,
                  12.52297
                ],
                [
                  102.48483,
                  12.50893
                ],
                [
                  102.48368,
                  12.50367
                ],
                [
                  102.48164,
                  12.50066
                ],
                [
                  102.47099,
                  12.49996
                ],
                [
                  102.46757,
                  12.50203
                ],
                [
                  102.45475,
                  12.49455
                ],
                [
                  102.44958,
                  12.49559
                ],
                [
                  102.44615,
                  12.4906
                ],
                [
                  102.44383,
                  12.49005
                ],
                [
                  102.43967,
                  12.49195
                ],
                [
                  102.43848,
                  12.49451
                ],
                [
                  102.43516,
                  12.4968
                ],
                [
                  102.42446,
                  12.49823
                ],
                [
                  102.42179,
                  12.50133
                ],
                [
                  102.41776,
                  12.50369
                ],
                [
                  102.41539,
                  12.50333
                ],
                [
                  102.41203,
                  12.50018
                ],
                [
                  102.40668,
                  12.50081
                ],
                [
                  102.40457,
                  12.50584
                ],
                [
                  102.40349,
                  12.50627
                ],
                [
                  102.40412,
                  12.50811
                ],
                [
                  102.40316,
                  12.51002
                ],
                [
                  102.40081,
                  12.50927
                ],
                [
                  102.39859,
                  12.51003
                ],
                [
                  102.39813,
                  12.50807
                ],
                [
                  102.39581,
                  12.51086
                ],
                [
                  102.39597,
                  12.51229
                ],
                [
                  102.40203,
                  12.51536
                ],
                [
                  102.40756,
                  12.51519
                ],
                [
                  102.40969,
                  12.51648
                ],
                [
                  102.41218,
                  12.51957
                ],
                [
                  102.41143,
                  12.52185
                ],
                [
                  102.4132,
                  12.52495
                ],
                [
                  102.41294,
                  12.52754
                ],
                [
                  102.41227,
                  12.52901
                ],
                [
                  102.40784,
                  12.53173
                ],
                [
                  102.4082,
                  12.53704
                ],
                [
                  102.40642,
                  12.54294
                ],
                [
                  102.39849,
                  12.54481
                ],
                [
                  102.39882,
                  12.5533
                ],
                [
                  102.39781,
                  12.55509
                ],
                [
                  102.39422,
                  12.55725
                ],
                [
                  102.39136,
                  12.56159
                ],
                [
                  102.39107,
                  12.56478
                ],
                [
                  102.38744,
                  12.57112
                ],
                [
                  102.38866,
                  12.57314
                ],
                [
                  102.38161,
                  12.57708
                ],
                [
                  102.38517,
                  12.58187
                ],
                [
                  102.38776,
                  12.57946
                ],
                [
                  102.3877,
                  12.57707
                ],
                [
                  102.39015,
                  12.57766
                ],
                [
                  102.3905,
                  12.57653
                ],
                [
                  102.39218,
                  12.57662
                ],
                [
                  102.39234,
                  12.5749
                ],
                [
                  102.39655,
                  12.57409
                ],
                [
                  102.39615,
                  12.57161
                ],
                [
                  102.39785,
                  12.57048
                ],
                [
                  102.39708,
                  12.56932
                ],
                [
                  102.40173,
                  12.56746
                ],
                [
                  102.40497,
                  12.56795
                ],
                [
                  102.40838,
                  12.57037
                ],
                [
                  102.40908,
                  12.56945
                ],
                [
                  102.41086,
                  12.57029
                ],
                [
                  102.41417,
                  12.56977
                ],
                [
                  102.41677,
                  12.56839
                ],
                [
                  102.4165,
                  12.57157
                ],
                [
                  102.41907,
                  12.57137
                ],
                [
                  102.4196,
                  12.57063
                ],
                [
                  102.41855,
                  12.56992
                ],
                [
                  102.41962,
                  12.5692
                ],
                [
                  102.42264,
                  12.56988
                ],
                [
                  102.42364,
                  12.57198
                ],
                [
                  102.42323,
                  12.57358
                ],
                [
                  102.41883,
                  12.57668
                ],
                [
                  102.41906,
                  12.57943
                ],
                [
                  102.41622,
                  12.57912
                ],
                [
                  102.4155,
                  12.58178
                ],
                [
                  102.41356,
                  12.58235
                ],
                [
                  102.41413,
                  12.58358
                ],
                [
                  102.41326,
                  12.58474
                ],
                [
                  102.40998,
                  12.58693
                ],
                [
                  102.40761,
                  12.58619
                ],
                [
                  102.40647,
                  12.58955
                ],
                [
                  102.40319,
                  12.59013
                ],
                [
                  102.39991,
                  12.59386
                ],
                [
                  102.39991,
                  12.59608
                ],
                [
                  102.39662,
                  12.5994
                ],
                [
                  102.39499,
                  12.59866
                ],
                [
                  102.39457,
                  12.60072
                ],
                [
                  102.39232,
                  12.60195
                ],
                [
                  102.39125,
                  12.60488
                ],
                [
                  102.38921,
                  12.60579
                ],
                [
                  102.38841,
                  12.60407
                ],
                [
                  102.3875,
                  12.60426
                ],
                [
                  102.38874,
                  12.60724
                ],
                [
                  102.38823,
                  12.61002
                ],
                [
                  102.3921,
                  12.60992
                ],
                [
                  102.39175,
                  12.60776
                ],
                [
                  102.39409,
                  12.60964
                ],
                [
                  102.39651,
                  12.60856
                ],
                [
                  102.39753,
                  12.61051
                ],
                [
                  102.39601,
                  12.61207
                ],
                [
                  102.39612,
                  12.61448
                ],
                [
                  102.39794,
                  12.61594
                ],
                [
                  102.40087,
                  12.61549
                ],
                [
                  102.39989,
                  12.61739
                ],
                [
                  102.40098,
                  12.61883
                ],
                [
                  102.39933,
                  12.62234
                ],
                [
                  102.39711,
                  12.62236
                ],
                [
                  102.39663,
                  12.62796
                ],
                [
                  102.39168,
                  12.62991
                ],
                [
                  102.39005,
                  12.63261
                ],
                [
                  102.39359,
                  12.63941
                ],
                [
                  102.38992,
                  12.64514
                ],
                [
                  102.40376,
                  12.64181
                ],
                [
                  102.40527,
                  12.63475
                ],
                [
                  102.41185,
                  12.62577
                ],
                [
                  102.41381,
                  12.6201
                ],
                [
                  102.42127,
                  12.6152
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
          "sum_rainfall_mm": 199.20000000000005,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองสะตอ",
          "latitude": 12.5973,
          "longitude": 102.608,
          "sum_rainfall_mm": 192.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "250212",
          "tambon": "ต.นาแขม",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.นาแขม",
          "latitude": 14.04255,
          "longitude": 101.72051,
          "sum_rainfall_mm": 257.6,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.74243,
                  14.08799
                ],
                [
                  101.75045,
                  14.08732
                ],
                [
                  101.752,
                  14.08622
                ],
                [
                  101.74909,
                  14.08183
                ],
                [
                  101.74417,
                  14.08216
                ],
                [
                  101.7441,
                  14.07705
                ],
                [
                  101.74737,
                  14.07319
                ],
                [
                  101.75476,
                  14.06877
                ],
                [
                  101.75509,
                  14.0666
                ],
                [
                  101.75334,
                  14.06437
                ],
                [
                  101.74732,
                  14.06426
                ],
                [
                  101.74881,
                  14.05861
                ],
                [
                  101.74778,
                  14.05792
                ],
                [
                  101.74427,
                  14.05948
                ],
                [
                  101.74321,
                  14.05385
                ],
                [
                  101.74471,
                  14.04759
                ],
                [
                  101.74817,
                  14.04519
                ],
                [
                  101.75013,
                  14.0465
                ],
                [
                  101.75351,
                  14.04224
                ],
                [
                  101.75058,
                  14.04028
                ],
                [
                  101.75349,
                  14.03761
                ],
                [
                  101.7532,
                  14.03509
                ],
                [
                  101.75565,
                  14.03494
                ],
                [
                  101.75582,
                  14.0379
                ],
                [
                  101.75662,
                  14.03576
                ],
                [
                  101.75907,
                  14.03397
                ],
                [
                  101.75658,
                  14.03031
                ],
                [
                  101.75905,
                  14.02677
                ],
                [
                  101.75513,
                  14.02516
                ],
                [
                  101.75266,
                  14.02215
                ],
                [
                  101.74777,
                  14.02181
                ],
                [
                  101.74716,
                  14.02031
                ],
                [
                  101.74941,
                  14.01632
                ],
                [
                  101.74926,
                  14.01391
                ],
                [
                  101.74576,
                  14.01111
                ],
                [
                  101.74562,
                  14.01403
                ],
                [
                  101.74434,
                  14.0145
                ],
                [
                  101.74201,
                  14.00918
                ],
                [
                  101.73743,
                  14.00903
                ],
                [
                  101.73895,
                  14.00587
                ],
                [
                  101.73821,
                  14.0044
                ],
                [
                  101.73343,
                  14.00512
                ],
                [
                  101.73049,
                  14.0036
                ],
                [
                  101.7284,
                  14.00404
                ],
                [
                  101.72736,
                  14.00113
                ],
                [
                  101.72399,
                  14.00015
                ],
                [
                  101.72466,
                  13.99563
                ],
                [
                  101.72226,
                  13.99217
                ],
                [
                  101.72055,
                  13.99221
                ],
                [
                  101.71889,
                  13.99566
                ],
                [
                  101.71429,
                  13.99904
                ],
                [
                  101.71436,
                  13.9941
                ],
                [
                  101.71309,
                  13.99403
                ],
                [
                  101.70895,
                  13.99885
                ],
                [
                  101.71313,
                  14.00526
                ],
                [
                  101.71066,
                  14.02529
                ],
                [
                  101.71431,
                  14.03779
                ],
                [
                  101.71733,
                  14.04082
                ],
                [
                  101.71232,
                  14.04222
                ],
                [
                  101.70811,
                  14.04488
                ],
                [
                  101.70671,
                  14.05166
                ],
                [
                  101.70146,
                  14.05671
                ],
                [
                  101.70254,
                  14.05982
                ],
                [
                  101.6976,
                  14.06006
                ],
                [
                  101.69187,
                  14.0669
                ],
                [
                  101.68791,
                  14.07855
                ],
                [
                  101.68301,
                  14.08573
                ],
                [
                  101.68309,
                  14.09457
                ],
                [
                  101.68439,
                  14.09677
                ],
                [
                  101.68769,
                  14.09852
                ],
                [
                  101.6913,
                  14.09951
                ],
                [
                  101.69548,
                  14.09902
                ],
                [
                  101.69843,
                  14.10181
                ],
                [
                  101.70174,
                  14.1022
                ],
                [
                  101.704,
                  14.10118
                ],
                [
                  101.70475,
                  14.09713
                ],
                [
                  101.70742,
                  14.09395
                ],
                [
                  101.71514,
                  14.09261
                ],
                [
                  101.72069,
                  14.08911
                ],
                [
                  101.72063,
                  14.0848
                ],
                [
                  101.72304,
                  14.08176
                ],
                [
                  101.72589,
                  14.08042
                ],
                [
                  101.73568,
                  14.08251
                ],
                [
                  101.74243,
                  14.08799
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250306",
          "tambon": "ต.บุพราหมณ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บุพราหมณ์",
          "latitude": 14.20791,
          "longitude": 101.90556,
          "sum_rainfall_mm": 254.59999999999997,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.83871,
                  14.35506
                ],
                [
                  101.83912,
                  14.35227
                ],
                [
                  101.84735,
                  14.34949
                ],
                [
                  101.85901,
                  14.34165
                ],
                [
                  101.87567,
                  14.32425
                ],
                [
                  101.88789,
                  14.32264
                ],
                [
                  101.88889,
                  14.31919
                ],
                [
                  101.89249,
                  14.322
                ],
                [
                  101.89277,
                  14.32789
                ],
                [
                  101.89431,
                  14.33042
                ],
                [
                  101.9023,
                  14.32688
                ],
                [
                  101.91011,
                  14.32573
                ],
                [
                  101.91758,
                  14.3317
                ],
                [
                  101.91967,
                  14.33008
                ],
                [
                  101.92184,
                  14.33081
                ],
                [
                  101.92475,
                  14.32843
                ],
                [
                  101.92827,
                  14.32857
                ],
                [
                  101.92971,
                  14.32761
                ],
                [
                  101.9303,
                  14.32435
                ],
                [
                  101.93415,
                  14.32025
                ],
                [
                  101.93768,
                  14.31024
                ],
                [
                  101.94337,
                  14.30245
                ],
                [
                  101.93942,
                  14.29748
                ],
                [
                  101.92958,
                  14.29081
                ],
                [
                  101.92858,
                  14.28693
                ],
                [
                  101.92904,
                  14.28394
                ],
                [
                  101.93287,
                  14.28006
                ],
                [
                  101.93706,
                  14.27068
                ],
                [
                  101.94449,
                  14.24767
                ],
                [
                  101.94783,
                  14.24568
                ],
                [
                  101.95855,
                  14.24489
                ],
                [
                  101.97197,
                  14.23944
                ],
                [
                  101.98178,
                  14.23771
                ],
                [
                  101.98128,
                  14.23589
                ],
                [
                  101.97856,
                  14.23361
                ],
                [
                  101.97315,
                  14.23027
                ],
                [
                  101.9671,
                  14.22878
                ],
                [
                  101.96668,
                  14.2275
                ],
                [
                  101.97582,
                  14.22434
                ],
                [
                  101.98907,
                  14.21763
                ],
                [
                  101.99619,
                  14.21169
                ],
                [
                  101.99409,
                  14.2104
                ],
                [
                  101.99001,
                  14.21301
                ],
                [
                  101.98642,
                  14.21179
                ],
                [
                  101.97896,
                  14.20191
                ],
                [
                  101.97732,
                  14.19767
                ],
                [
                  101.97361,
                  14.19372
                ],
                [
                  101.97181,
                  14.1934
                ],
                [
                  101.97147,
                  14.19126
                ],
                [
                  101.97299,
                  14.18774
                ],
                [
                  101.97225,
                  14.18299
                ],
                [
                  101.97412,
                  14.18008
                ],
                [
                  101.97469,
                  14.17249
                ],
                [
                  101.97088,
                  14.17119
                ],
                [
                  101.96874,
                  14.17278
                ],
                [
                  101.9643,
                  14.17312
                ],
                [
                  101.94204,
                  14.18663
                ],
                [
                  101.9374,
                  14.18722
                ],
                [
                  101.93404,
                  14.18612
                ],
                [
                  101.93329,
                  14.1884
                ],
                [
                  101.92848,
                  14.18935
                ],
                [
                  101.92124,
                  14.18545
                ],
                [
                  101.9199,
                  14.18271
                ],
                [
                  101.92376,
                  14.18187
                ],
                [
                  101.92695,
                  14.18345
                ],
                [
                  101.92844,
                  14.18222
                ],
                [
                  101.9279,
                  14.17927
                ],
                [
                  101.92928,
                  14.1764
                ],
                [
                  101.93282,
                  14.17635
                ],
                [
                  101.93623,
                  14.17452
                ],
                [
                  101.93876,
                  14.17654
                ],
                [
                  101.93522,
                  14.17048
                ],
                [
                  101.93354,
                  14.17068
                ],
                [
                  101.93244,
                  14.17224
                ],
                [
                  101.93077,
                  14.17193
                ],
                [
                  101.92823,
                  14.16711
                ],
                [
                  101.92422,
                  14.16459
                ],
                [
                  101.92172,
                  14.16494
                ],
                [
                  101.91892,
                  14.16195
                ],
                [
                  101.91511,
                  14.16543
                ],
                [
                  101.91297,
                  14.16429
                ],
                [
                  101.91059,
                  14.16475
                ],
                [
                  101.90855,
                  14.16647
                ],
                [
                  101.90821,
                  14.16921
                ],
                [
                  101.90368,
                  14.16766
                ],
                [
                  101.89626,
                  14.16749
                ],
                [
                  101.89401,
                  14.17005
                ],
                [
                  101.8937,
                  14.16738
                ],
                [
                  101.88984,
                  14.16619
                ],
                [
                  101.88813,
                  14.16159
                ],
                [
                  101.88657,
                  14.16207
                ],
                [
                  101.88441,
                  14.16093
                ],
                [
                  101.8847,
                  14.1653
                ],
                [
                  101.88223,
                  14.16745
                ],
                [
                  101.87912,
                  14.1728
                ],
                [
                  101.87217,
                  14.17973
                ],
                [
                  101.87244,
                  14.18476
                ],
                [
                  101.87044,
                  14.18543
                ],
                [
                  101.8705,
                  14.19051
                ],
                [
                  101.86737,
                  14.19234
                ],
                [
                  101.86402,
                  14.19836
                ],
                [
                  101.85917,
                  14.19646
                ],
                [
                  101.85763,
                  14.1966
                ],
                [
                  101.85662,
                  14.1981
                ],
                [
                  101.8587,
                  14.20502
                ],
                [
                  101.85618,
                  14.21199
                ],
                [
                  101.85535,
                  14.22109
                ],
                [
                  101.85178,
                  14.22541
                ],
                [
                  101.8542,
                  14.22754
                ],
                [
                  101.85001,
                  14.23584
                ],
                [
                  101.85063,
                  14.24178
                ],
                [
                  101.84453,
                  14.24536
                ],
                [
                  101.84842,
                  14.25024
                ],
                [
                  101.84897,
                  14.25706
                ],
                [
                  101.83356,
                  14.2596
                ],
                [
                  101.81888,
                  14.26045
                ],
                [
                  101.81862,
                  14.26315
                ],
                [
                  101.81732,
                  14.26401
                ],
                [
                  101.8083,
                  14.26603
                ],
                [
                  101.795,
                  14.2712
                ],
                [
                  101.78014,
                  14.28105
                ],
                [
                  101.76809,
                  14.29223
                ],
                [
                  101.74209,
                  14.30753
                ],
                [
                  101.74814,
                  14.31439
                ],
                [
                  101.74788,
                  14.31982
                ],
                [
                  101.75045,
                  14.32465
                ],
                [
                  101.74797,
                  14.3307
                ],
                [
                  101.74893,
                  14.3344
                ],
                [
                  101.74639,
                  14.33949
                ],
                [
                  101.7475,
                  14.34495
                ],
                [
                  101.74938,
                  14.34822
                ],
                [
                  101.75399,
                  14.3445
                ],
                [
                  101.76084,
                  14.34309
                ],
                [
                  101.77055,
                  14.34812
                ],
                [
                  101.77433,
                  14.34699
                ],
                [
                  101.77464,
                  14.34973
                ],
                [
                  101.78085,
                  14.35206
                ],
                [
                  101.7797,
                  14.35734
                ],
                [
                  101.7847,
                  14.35701
                ],
                [
                  101.78881,
                  14.35974
                ],
                [
                  101.79281,
                  14.35725
                ],
                [
                  101.79562,
                  14.35842
                ],
                [
                  101.80231,
                  14.35434
                ],
                [
                  101.80774,
                  14.34847
                ],
                [
                  101.812,
                  14.34765
                ],
                [
                  101.81779,
                  14.3505
                ],
                [
                  101.82092,
                  14.34989
                ],
                [
                  101.82282,
                  14.35068
                ],
                [
                  101.82808,
                  14.35634
                ],
                [
                  101.82959,
                  14.36275
                ],
                [
                  101.83541,
                  14.36335
                ],
                [
                  101.84018,
                  14.36612
                ],
                [
                  101.84239,
                  14.36417
                ],
                [
                  101.83921,
                  14.3605
                ],
                [
                  101.83871,
                  14.35506
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250707",
          "tambon": "ต.บุฝ้าย",
          "amphoe": "อ.ประจันตคาม",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๑๐ (ประจันตคาม)",
          "latitude": 14.181167,
          "longitude": 101.592064,
          "sum_rainfall_mm": 195.00000000000006,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.62234,
                  14.42687
                ],
                [
                  101.61829,
                  14.41942
                ],
                [
                  101.61984,
                  14.4156
                ],
                [
                  101.62664,
                  14.41331
                ],
                [
                  101.62917,
                  14.40761
                ],
                [
                  101.6313,
                  14.40586
                ],
                [
                  101.64101,
                  14.40769
                ],
                [
                  101.64643,
                  14.40551
                ],
                [
                  101.64919,
                  14.40306
                ],
                [
                  101.64707,
                  14.39555
                ],
                [
                  101.64905,
                  14.39245
                ],
                [
                  101.64764,
                  14.38976
                ],
                [
                  101.64849,
                  14.38378
                ],
                [
                  101.64633,
                  14.38104
                ],
                [
                  101.64291,
                  14.37971
                ],
                [
                  101.63961,
                  14.37492
                ],
                [
                  101.64338,
                  14.36363
                ],
                [
                  101.6418,
                  14.35871
                ],
                [
                  101.65119,
                  14.35614
                ],
                [
                  101.65245,
                  14.35415
                ],
                [
                  101.65101,
                  14.34213
                ],
                [
                  101.64691,
                  14.33597
                ],
                [
                  101.64765,
                  14.33477
                ],
                [
                  101.65081,
                  14.33391
                ],
                [
                  101.65252,
                  14.33044
                ],
                [
                  101.65573,
                  14.32871
                ],
                [
                  101.65663,
                  14.32685
                ],
                [
                  101.65691,
                  14.32421
                ],
                [
                  101.65497,
                  14.32242
                ],
                [
                  101.65668,
                  14.31739
                ],
                [
                  101.6514,
                  14.31415
                ],
                [
                  101.65267,
                  14.30958
                ],
                [
                  101.65565,
                  14.30674
                ],
                [
                  101.65498,
                  14.304
                ],
                [
                  101.65738,
                  14.30311
                ],
                [
                  101.6575,
                  14.30685
                ],
                [
                  101.65992,
                  14.30695
                ],
                [
                  101.66058,
                  14.30945
                ],
                [
                  101.66251,
                  14.30986
                ],
                [
                  101.66853,
                  14.30327
                ],
                [
                  101.66928,
                  14.30504
                ],
                [
                  101.67034,
                  14.30493
                ],
                [
                  101.67288,
                  14.29856
                ],
                [
                  101.67707,
                  14.30064
                ],
                [
                  101.67919,
                  14.29879
                ],
                [
                  101.67876,
                  14.2964
                ],
                [
                  101.6747,
                  14.29313
                ],
                [
                  101.67861,
                  14.29186
                ],
                [
                  101.68184,
                  14.28114
                ],
                [
                  101.68036,
                  14.27958
                ],
                [
                  101.67389,
                  14.278
                ],
                [
                  101.67376,
                  14.2711
                ],
                [
                  101.66883,
                  14.25974
                ],
                [
                  101.66902,
                  14.25612
                ],
                [
                  101.66302,
                  14.2458
                ],
                [
                  101.67151,
                  14.23659
                ],
                [
                  101.66897,
                  14.22697
                ],
                [
                  101.67337,
                  14.21764
                ],
                [
                  101.67223,
                  14.21093
                ],
                [
                  101.67509,
                  14.20501
                ],
                [
                  101.6746,
                  14.19955
                ],
                [
                  101.67084,
                  14.19146
                ],
                [
                  101.66884,
                  14.19071
                ],
                [
                  101.66813,
                  14.1922
                ],
                [
                  101.6636,
                  14.19363
                ],
                [
                  101.65758,
                  14.19249
                ],
                [
                  101.6553,
                  14.1886
                ],
                [
                  101.65116,
                  14.1867
                ],
                [
                  101.64618,
                  14.17882
                ],
                [
                  101.6469,
                  14.17523
                ],
                [
                  101.64618,
                  14.17241
                ],
                [
                  101.63909,
                  14.16202
                ],
                [
                  101.63662,
                  14.15427
                ],
                [
                  101.63153,
                  14.15645
                ],
                [
                  101.62419,
                  14.16248
                ],
                [
                  101.62145,
                  14.16333
                ],
                [
                  101.62143,
                  14.16438
                ],
                [
                  101.61237,
                  14.16466
                ],
                [
                  101.61063,
                  14.16346
                ],
                [
                  101.60929,
                  14.16008
                ],
                [
                  101.60737,
                  14.15964
                ],
                [
                  101.59867,
                  14.1612
                ],
                [
                  101.59442,
                  14.16416
                ],
                [
                  101.59302,
                  14.16354
                ],
                [
                  101.59235,
                  14.15692
                ],
                [
                  101.58855,
                  14.15403
                ],
                [
                  101.58101,
                  14.14161
                ],
                [
                  101.58143,
                  14.1376
                ],
                [
                  101.57937,
                  14.13082
                ],
                [
                  101.57527,
                  14.12547
                ],
                [
                  101.56753,
                  14.12197
                ],
                [
                  101.56897,
                  14.11683
                ],
                [
                  101.56793,
                  14.11481
                ],
                [
                  101.56455,
                  14.11223
                ],
                [
                  101.55975,
                  14.11052
                ],
                [
                  101.55204,
                  14.11491
                ],
                [
                  101.55268,
                  14.11693
                ],
                [
                  101.55171,
                  14.12318
                ],
                [
                  101.55303,
                  14.12429
                ],
                [
                  101.55208,
                  14.12646
                ],
                [
                  101.54024,
                  14.1268
                ],
                [
                  101.53779,
                  14.12814
                ],
                [
                  101.53832,
                  14.13027
                ],
                [
                  101.54068,
                  14.13218
                ],
                [
                  101.53906,
                  14.13357
                ],
                [
                  101.54029,
                  14.13752
                ],
                [
                  101.53798,
                  14.13936
                ],
                [
                  101.53804,
                  14.14583
                ],
                [
                  101.53869,
                  14.1515
                ],
                [
                  101.54185,
                  14.16057
                ],
                [
                  101.54149,
                  14.16473
                ],
                [
                  101.54446,
                  14.17044
                ],
                [
                  101.54551,
                  14.17561
                ],
                [
                  101.54464,
                  14.18626
                ],
                [
                  101.5454,
                  14.19447
                ],
                [
                  101.54952,
                  14.20495
                ],
                [
                  101.55473,
                  14.20899
                ],
                [
                  101.54941,
                  14.21667
                ],
                [
                  101.54892,
                  14.22013
                ],
                [
                  101.54603,
                  14.22107
                ],
                [
                  101.54631,
                  14.22593
                ],
                [
                  101.54884,
                  14.23312
                ],
                [
                  101.54152,
                  14.23788
                ],
                [
                  101.53946,
                  14.24187
                ],
                [
                  101.53511,
                  14.24587
                ],
                [
                  101.52929,
                  14.247
                ],
                [
                  101.5275,
                  14.25122
                ],
                [
                  101.52797,
                  14.25306
                ],
                [
                  101.52284,
                  14.25629
                ],
                [
                  101.52315,
                  14.2594
                ],
                [
                  101.51895,
                  14.26587
                ],
                [
                  101.52322,
                  14.27367
                ],
                [
                  101.52405,
                  14.27849
                ],
                [
                  101.52728,
                  14.28085
                ],
                [
                  101.5298,
                  14.30435
                ],
                [
                  101.52908,
                  14.30725
                ],
                [
                  101.52289,
                  14.30969
                ],
                [
                  101.52218,
                  14.31582
                ],
                [
                  101.52758,
                  14.32024
                ],
                [
                  101.52847,
                  14.3237
                ],
                [
                  101.53283,
                  14.33
                ],
                [
                  101.53481,
                  14.33505
                ],
                [
                  101.54514,
                  14.34702
                ],
                [
                  101.54457,
                  14.34973
                ],
                [
                  101.54819,
                  14.35837
                ],
                [
                  101.54943,
                  14.36002
                ],
                [
                  101.55432,
                  14.3609
                ],
                [
                  101.56057,
                  14.37213
                ],
                [
                  101.56206,
                  14.37234
                ],
                [
                  101.57571,
                  14.36568
                ],
                [
                  101.582,
                  14.36632
                ],
                [
                  101.58362,
                  14.36835
                ],
                [
                  101.58723,
                  14.36926
                ],
                [
                  101.58888,
                  14.36764
                ],
                [
                  101.58973,
                  14.36813
                ],
                [
                  101.5896,
                  14.37264
                ],
                [
                  101.58592,
                  14.37375
                ],
                [
                  101.58275,
                  14.38184
                ],
                [
                  101.58417,
                  14.3836
                ],
                [
                  101.59354,
                  14.38574
                ],
                [
                  101.5943,
                  14.38761
                ],
                [
                  101.58479,
                  14.39424
                ],
                [
                  101.58111,
                  14.39499
                ],
                [
                  101.57955,
                  14.39725
                ],
                [
                  101.57967,
                  14.40002
                ],
                [
                  101.57473,
                  14.40268
                ],
                [
                  101.57384,
                  14.40581
                ],
                [
                  101.57416,
                  14.40746
                ],
                [
                  101.57778,
                  14.40883
                ],
                [
                  101.58021,
                  14.41138
                ],
                [
                  101.58493,
                  14.4104
                ],
                [
                  101.58723,
                  14.41135
                ],
                [
                  101.58692,
                  14.41553
                ],
                [
                  101.58787,
                  14.41809
                ],
                [
                  101.58643,
                  14.42134
                ],
                [
                  101.58594,
                  14.42771
                ],
                [
                  101.58392,
                  14.43224
                ],
                [
                  101.58446,
                  14.43822
                ],
                [
                  101.59566,
                  14.4386
                ],
                [
                  101.6016,
                  14.43573
                ],
                [
                  101.60563,
                  14.43641
                ],
                [
                  101.60904,
                  14.43393
                ],
                [
                  101.6213,
                  14.42861
                ],
                [
                  101.62234,
                  14.42687
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250810",
          "tambon": "ต.กรอกสมบูรณ์",
          "amphoe": "อ.ศรีมหาโพธิ",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.กรอกสมบูรณ์",
          "latitude": 13.77716,
          "longitude": 101.65875,
          "sum_rainfall_mm": 228.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.62268,
                  13.86137
                ],
                [
                  101.62447,
                  13.85291
                ],
                [
                  101.62115,
                  13.85039
                ],
                [
                  101.61394,
                  13.84928
                ],
                [
                  101.61201,
                  13.84793
                ],
                [
                  101.60993,
                  13.84108
                ],
                [
                  101.61106,
                  13.83517
                ],
                [
                  101.61035,
                  13.83303
                ],
                [
                  101.61283,
                  13.82629
                ],
                [
                  101.61592,
                  13.82544
                ],
                [
                  101.62442,
                  13.81751
                ],
                [
                  101.62573,
                  13.81065
                ],
                [
                  101.6337,
                  13.80565
                ],
                [
                  101.65194,
                  13.8
                ],
                [
                  101.65815,
                  13.7952
                ],
                [
                  101.67077,
                  13.79592
                ],
                [
                  101.67926,
                  13.79464
                ],
                [
                  101.6834,
                  13.79023
                ],
                [
                  101.6916,
                  13.78583
                ],
                [
                  101.69359,
                  13.78211
                ],
                [
                  101.69361,
                  13.77719
                ],
                [
                  101.67514,
                  13.74976
                ],
                [
                  101.6712,
                  13.74008
                ],
                [
                  101.66785,
                  13.73794
                ],
                [
                  101.66342,
                  13.73696
                ],
                [
                  101.65454,
                  13.73823
                ],
                [
                  101.64797,
                  13.74456
                ],
                [
                  101.63903,
                  13.74723
                ],
                [
                  101.64128,
                  13.75577
                ],
                [
                  101.64084,
                  13.75942
                ],
                [
                  101.64534,
                  13.76953
                ],
                [
                  101.6454,
                  13.77801
                ],
                [
                  101.63332,
                  13.78675
                ],
                [
                  101.63343,
                  13.79578
                ],
                [
                  101.62284,
                  13.80269
                ],
                [
                  101.60742,
                  13.82395
                ],
                [
                  101.59943,
                  13.82651
                ],
                [
                  101.59603,
                  13.82885
                ],
                [
                  101.58816,
                  13.84405
                ],
                [
                  101.57947,
                  13.84932
                ],
                [
                  101.57996,
                  13.85526
                ],
                [
                  101.56824,
                  13.86256
                ],
                [
                  101.56792,
                  13.86492
                ],
                [
                  101.57037,
                  13.86834
                ],
                [
                  101.56209,
                  13.87188
                ],
                [
                  101.56157,
                  13.8763
                ],
                [
                  101.56654,
                  13.88494
                ],
                [
                  101.58298,
                  13.89629
                ],
                [
                  101.59023,
                  13.89799
                ],
                [
                  101.60799,
                  13.89885
                ],
                [
                  101.62172,
                  13.90569
                ],
                [
                  101.62657,
                  13.90671
                ],
                [
                  101.62639,
                  13.90538
                ],
                [
                  101.62422,
                  13.9044
                ],
                [
                  101.62352,
                  13.90105
                ],
                [
                  101.62362,
                  13.89453
                ],
                [
                  101.62646,
                  13.88732
                ],
                [
                  101.62425,
                  13.88417
                ],
                [
                  101.62436,
                  13.87839
                ],
                [
                  101.62279,
                  13.8756
                ],
                [
                  101.62369,
                  13.86976
                ],
                [
                  101.62268,
                  13.86137
                ]
              ]
            ]
          }
        },
        {
          "geocode": "210701",
          "tambon": "ต.น้ำเป็น",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
          "latitude": 12.912333,
          "longitude": 101.72454,
          "sum_rainfall_mm": 228.60000000000002,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.74064,
                  12.95809
                ],
                [
                  101.74793,
                  12.94922
                ],
                [
                  101.75128,
                  12.95096
                ],
                [
                  101.75273,
                  12.95053
                ],
                [
                  101.75285,
                  12.94587
                ],
                [
                  101.75711,
                  12.94043
                ],
                [
                  101.76675,
                  12.94388
                ],
                [
                  101.77342,
                  12.95115
                ],
                [
                  101.77544,
                  12.95104
                ],
                [
                  101.7789,
                  12.95307
                ],
                [
                  101.78388,
                  12.94693
                ],
                [
                  101.78999,
                  12.94308
                ],
                [
                  101.79206,
                  12.93872
                ],
                [
                  101.79073,
                  12.93239
                ],
                [
                  101.79156,
                  12.92935
                ],
                [
                  101.79496,
                  12.92667
                ],
                [
                  101.79914,
                  12.92724
                ],
                [
                  101.80072,
                  12.925
                ],
                [
                  101.80027,
                  12.92198
                ],
                [
                  101.80236,
                  12.91732
                ],
                [
                  101.80262,
                  12.90728
                ],
                [
                  101.80613,
                  12.9012
                ],
                [
                  101.80616,
                  12.8955
                ],
                [
                  101.80776,
                  12.89096
                ],
                [
                  101.80788,
                  12.88667
                ],
                [
                  101.80925,
                  12.88454
                ],
                [
                  101.80393,
                  12.88092
                ],
                [
                  101.80025,
                  12.88167
                ],
                [
                  101.78959,
                  12.87825
                ],
                [
                  101.78775,
                  12.87881
                ],
                [
                  101.78433,
                  12.87626
                ],
                [
                  101.78198,
                  12.87635
                ],
                [
                  101.77907,
                  12.87214
                ],
                [
                  101.77665,
                  12.87195
                ],
                [
                  101.77542,
                  12.86944
                ],
                [
                  101.7748,
                  12.87036
                ],
                [
                  101.76796,
                  12.86562
                ],
                [
                  101.76236,
                  12.86366
                ],
                [
                  101.76057,
                  12.86189
                ],
                [
                  101.75767,
                  12.86157
                ],
                [
                  101.75481,
                  12.85921
                ],
                [
                  101.75006,
                  12.8596
                ],
                [
                  101.74794,
                  12.85583
                ],
                [
                  101.74786,
                  12.85353
                ],
                [
                  101.7432,
                  12.84808
                ],
                [
                  101.74615,
                  12.84302
                ],
                [
                  101.74032,
                  12.83934
                ],
                [
                  101.73913,
                  12.83381
                ],
                [
                  101.73447,
                  12.83035
                ],
                [
                  101.735,
                  12.83424
                ],
                [
                  101.73399,
                  12.83572
                ],
                [
                  101.73312,
                  12.83539
                ],
                [
                  101.73091,
                  12.83986
                ],
                [
                  101.72799,
                  12.83897
                ],
                [
                  101.72165,
                  12.84351
                ],
                [
                  101.72059,
                  12.84246
                ],
                [
                  101.7227,
                  12.83744
                ],
                [
                  101.71775,
                  12.83779
                ],
                [
                  101.70473,
                  12.85887
                ],
                [
                  101.70388,
                  12.86356
                ],
                [
                  101.70648,
                  12.86989
                ],
                [
                  101.71011,
                  12.8674
                ],
                [
                  101.71134,
                  12.86865
                ],
                [
                  101.70747,
                  12.88862
                ],
                [
                  101.71343,
                  12.90067
                ],
                [
                  101.71175,
                  12.90054
                ],
                [
                  101.71024,
                  12.90232
                ],
                [
                  101.7091,
                  12.90766
                ],
                [
                  101.70639,
                  12.90904
                ],
                [
                  101.70259,
                  12.90848
                ],
                [
                  101.70028,
                  12.91138
                ],
                [
                  101.70128,
                  12.91221
                ],
                [
                  101.69998,
                  12.9134
                ],
                [
                  101.69946,
                  12.91668
                ],
                [
                  101.6967,
                  12.91782
                ],
                [
                  101.6982,
                  12.91963
                ],
                [
                  101.6963,
                  12.92178
                ],
                [
                  101.69756,
                  12.92333
                ],
                [
                  101.69631,
                  12.92684
                ],
                [
                  101.69759,
                  12.92664
                ],
                [
                  101.69598,
                  12.92851
                ],
                [
                  101.69744,
                  12.93233
                ],
                [
                  101.69676,
                  12.93352
                ],
                [
                  101.69876,
                  12.93577
                ],
                [
                  101.70556,
                  12.93588
                ],
                [
                  101.70583,
                  12.94034
                ],
                [
                  101.71637,
                  12.94369
                ],
                [
                  101.71804,
                  12.94756
                ],
                [
                  101.72021,
                  12.94886
                ],
                [
                  101.72563,
                  12.94746
                ],
                [
                  101.7289,
                  12.94827
                ],
                [
                  101.73479,
                  12.95665
                ],
                [
                  101.73936,
                  12.95896
                ],
                [
                  101.74064,
                  12.95809
                ]
              ]
            ]
          }
        },
        {
          "geocode": "210702",
          "tambon": "ต.ห้วยทับมอญ",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านสีระมัน",
          "latitude": 13.038727,
          "longitude": 101.66171,
          "sum_rainfall_mm": 273.80000000000007,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.69527,
                  13.1459
                ],
                [
                  101.69676,
                  13.14052
                ],
                [
                  101.69603,
                  13.13619
                ],
                [
                  101.69453,
                  13.13397
                ],
                [
                  101.69011,
                  13.13166
                ],
                [
                  101.68814,
                  13.12611
                ],
                [
                  101.68557,
                  13.12374
                ],
                [
                  101.68647,
                  13.11372
                ],
                [
                  101.69192,
                  13.10919
                ],
                [
                  101.69928,
                  13.10937
                ],
                [
                  101.70046,
                  13.10806
                ],
                [
                  101.7,
                  13.10621
                ],
                [
                  101.69592,
                  13.10334
                ],
                [
                  101.69565,
                  13.09932
                ],
                [
                  101.69305,
                  13.09594
                ],
                [
                  101.69321,
                  13.09277
                ],
                [
                  101.69859,
                  13.08176
                ],
                [
                  101.70033,
                  13.08008
                ],
                [
                  101.7029,
                  13.07978
                ],
                [
                  101.70458,
                  13.07688
                ],
                [
                  101.703,
                  13.07039
                ],
                [
                  101.70859,
                  13.05879
                ],
                [
                  101.71019,
                  13.05816
                ],
                [
                  101.71144,
                  13.04831
                ],
                [
                  101.71414,
                  13.04366
                ],
                [
                  101.71407,
                  13.04254
                ],
                [
                  101.71157,
                  13.04202
                ],
                [
                  101.71072,
                  13.0407
                ],
                [
                  101.71404,
                  13.03885
                ],
                [
                  101.71625,
                  13.03421
                ],
                [
                  101.72594,
                  13.02963
                ],
                [
                  101.73064,
                  13.03487
                ],
                [
                  101.73585,
                  13.03343
                ],
                [
                  101.73941,
                  13.03387
                ],
                [
                  101.74128,
                  13.03647
                ],
                [
                  101.7446,
                  13.03749
                ],
                [
                  101.74748,
                  13.04618
                ],
                [
                  101.75021,
                  13.04844
                ],
                [
                  101.75464,
                  13.04934
                ],
                [
                  101.75877,
                  13.04708
                ],
                [
                  101.76095,
                  13.03698
                ],
                [
                  101.76001,
                  13.03433
                ],
                [
                  101.75698,
                  13.03131
                ],
                [
                  101.75333,
                  13.03044
                ],
                [
                  101.75214,
                  13.02909
                ],
                [
                  101.75384,
                  13.01584
                ],
                [
                  101.75488,
                  13.01297
                ],
                [
                  101.7582,
                  13.01191
                ],
                [
                  101.75506,
                  13.00625
                ],
                [
                  101.75188,
                  13.00529
                ],
                [
                  101.7512,
                  13.00056
                ],
                [
                  101.74353,
                  12.99117
                ],
                [
                  101.73767,
                  12.98115
                ],
                [
                  101.74075,
                  12.97733
                ],
                [
                  101.73912,
                  12.9671
                ],
                [
                  101.73936,
                  12.95896
                ],
                [
                  101.73479,
                  12.95665
                ],
                [
                  101.7289,
                  12.94827
                ],
                [
                  101.72563,
                  12.94746
                ],
                [
                  101.72021,
                  12.94886
                ],
                [
                  101.71804,
                  12.94756
                ],
                [
                  101.71637,
                  12.94369
                ],
                [
                  101.70583,
                  12.94034
                ],
                [
                  101.70556,
                  12.93588
                ],
                [
                  101.69876,
                  12.93577
                ],
                [
                  101.69676,
                  12.93352
                ],
                [
                  101.69744,
                  12.93233
                ],
                [
                  101.69666,
                  12.92942
                ],
                [
                  101.69519,
                  12.92883
                ],
                [
                  101.69491,
                  12.93042
                ],
                [
                  101.69235,
                  12.93003
                ],
                [
                  101.69021,
                  12.93156
                ],
                [
                  101.68828,
                  12.93607
                ],
                [
                  101.68662,
                  12.93622
                ],
                [
                  101.68606,
                  12.94076
                ],
                [
                  101.68423,
                  12.94036
                ],
                [
                  101.68213,
                  12.94396
                ],
                [
                  101.68,
                  12.94518
                ],
                [
                  101.6784,
                  12.94909
                ],
                [
                  101.6732,
                  12.95338
                ],
                [
                  101.67209,
                  12.95735
                ],
                [
                  101.6699,
                  12.95826
                ],
                [
                  101.67066,
                  12.96107
                ],
                [
                  101.66738,
                  12.96313
                ],
                [
                  101.66852,
                  12.96437
                ],
                [
                  101.66695,
                  12.96822
                ],
                [
                  101.66811,
                  12.96924
                ],
                [
                  101.66828,
                  12.97368
                ],
                [
                  101.66455,
                  12.97937
                ],
                [
                  101.6655,
                  12.98028
                ],
                [
                  101.66478,
                  12.98242
                ],
                [
                  101.6661,
                  12.98779
                ],
                [
                  101.66444,
                  12.98884
                ],
                [
                  101.66536,
                  12.99166
                ],
                [
                  101.66482,
                  12.99857
                ],
                [
                  101.66366,
                  12.99995
                ],
                [
                  101.65801,
                  13.00044
                ],
                [
                  101.65566,
                  13.00362
                ],
                [
                  101.65528,
                  13.00842
                ],
                [
                  101.65702,
                  13.01041
                ],
                [
                  101.65599,
                  13.01256
                ],
                [
                  101.65492,
                  13.01262
                ],
                [
                  101.65643,
                  13.01447
                ],
                [
                  101.65455,
                  13.01803
                ],
                [
                  101.65506,
                  13.02033
                ],
                [
                  101.65383,
                  13.02
                ],
                [
                  101.6545,
                  13.02192
                ],
                [
                  101.65215,
                  13.02317
                ],
                [
                  101.64966,
                  13.0221
                ],
                [
                  101.64709,
                  13.02388
                ],
                [
                  101.64496,
                  13.02342
                ],
                [
                  101.64363,
                  13.02437
                ],
                [
                  101.64387,
                  13.02589
                ],
                [
                  101.63938,
                  13.03061
                ],
                [
                  101.63871,
                  13.038
                ],
                [
                  101.63606,
                  13.0389
                ],
                [
                  101.63651,
                  13.04272
                ],
                [
                  101.6338,
                  13.04486
                ],
                [
                  101.63417,
                  13.0486
                ],
                [
                  101.63765,
                  13.05157
                ],
                [
                  101.63902,
                  13.06109
                ],
                [
                  101.64089,
                  13.06289
                ],
                [
                  101.63707,
                  13.07351
                ],
                [
                  101.63293,
                  13.09348
                ],
                [
                  101.63595,
                  13.09504
                ],
                [
                  101.63865,
                  13.09322
                ],
                [
                  101.64014,
                  13.09436
                ],
                [
                  101.63345,
                  13.10834
                ],
                [
                  101.61306,
                  13.13488
                ],
                [
                  101.61613,
                  13.13625
                ],
                [
                  101.61959,
                  13.13977
                ],
                [
                  101.62301,
                  13.13968
                ],
                [
                  101.62444,
                  13.14494
                ],
                [
                  101.6336,
                  13.1541
                ],
                [
                  101.63604,
                  13.15876
                ],
                [
                  101.64591,
                  13.16306
                ],
                [
                  101.6534,
                  13.15987
                ],
                [
                  101.65742,
                  13.16347
                ],
                [
                  101.65688,
                  13.15968
                ],
                [
                  101.66036,
                  13.15728
                ],
                [
                  101.66121,
                  13.15446
                ],
                [
                  101.66517,
                  13.15558
                ],
                [
                  101.6684,
                  13.15318
                ],
                [
                  101.67377,
                  13.1541
                ],
                [
                  101.68258,
                  13.14839
                ],
                [
                  101.69527,
                  13.1459
                ]
              ]
            ]
          }
        },
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
          "sum_rainfall_mm": 244.20000000000005,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "103302",
          "tambon": "ต.คลองตัน",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดสวนเบญจสิริ",
          "latitude": 13.73159,
          "longitude": 100.56745,
          "sum_rainfall_mm": 172.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 157.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 269.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101802",
          "tambon": "ต.คลองสาน",
          "amphoe": "อ.คลองสาน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสาน",
          "latitude": 13.73044,
          "longitude": 100.50947,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104603",
          "tambon": "ต.บางขัน",
          "amphoe": "อ.คลองสามวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสามวา",
          "latitude": 13.8599,
          "longitude": 100.70424,
          "sum_rainfall_mm": 154.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104301",
          "tambon": "ต.คันนายาว",
          "amphoe": "อ.คันนายาว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ลำชะล่า-ถ.นวมินทร์",
          "latitude": 13.83637,
          "longitude": 100.66131,
          "sum_rainfall_mm": 162.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103001",
          "tambon": "ต.ลาดยาว",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ถ.เทศบาลสงเคราะห์",
          "latitude": 13.83978,
          "longitude": 100.54175,
          "sum_rainfall_mm": 182.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100206",
          "tambon": "ต.ถนนนครไชยศรี",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางซื่อ",
          "latitude": 13.80023,
          "longitude": 100.51848,
          "sum_rainfall_mm": 182.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100203",
          "tambon": "ต.สวนจิตรลดา",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อุทยานเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
          "latitude": 13.76138,
          "longitude": 100.52066,
          "sum_rainfall_mm": 135.6,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104801",
          "tambon": "ต.ทวีวัฒนา",
          "amphoe": "อ.ทวีวัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ทวีวัฒนา",
          "latitude": 13.77281,
          "longitude": 100.35324,
          "sum_rainfall_mm": 161.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101507",
          "tambon": "ต.สำเหร่",
          "amphoe": "อ.ธนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสำเหร่",
          "latitude": 13.7067,
          "longitude": 100.49646,
          "sum_rainfall_mm": 114.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101601",
          "tambon": "ต.วัดอรุณ",
          "amphoe": "อ.บางกอกใหญ่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางกอกใหญ่",
          "latitude": 13.74022,
          "longitude": 100.49012,
          "sum_rainfall_mm": 94.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100608",
          "tambon": "ต.หัวหมาก",
          "amphoe": "อ.บางกะปิ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองแสนแสบ บางกะปิ",
          "latitude": 13.76131,
          "longitude": 100.61601,
          "sum_rainfall_mm": 207.79999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104002",
          "tambon": "ต.บางแคเหนือ",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "หมู่บ้านเศรษฐกิจ ซอย 26",
          "latitude": 13.72167,
          "longitude": 100.37676,
          "sum_rainfall_mm": 126.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104004",
          "tambon": "ต.หลักสอง",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองภาษีเจริญ เพชรเกษม69",
          "latitude": 13.69158,
          "longitude": 100.38127,
          "sum_rainfall_mm": 153.2,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104701",
          "tambon": "ต.บางนา",
          "amphoe": "อ.บางนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.บางนา",
          "latitude": 13.67493,
          "longitude": 100.58757,
          "sum_rainfall_mm": 246.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102502",
          "tambon": "ต.บางอ้อ",
          "amphoe": "อ.บางพลัด",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางพลัด",
          "latitude": 13.79429,
          "longitude": 100.50479,
          "sum_rainfall_mm": 165.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100404",
          "tambon": "ต.บางรัก",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.กรุงเกษม",
          "latitude": 13.73042,
          "longitude": 100.51397,
          "sum_rainfall_mm": 139.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100405",
          "tambon": "ต.สี่พระยา",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางรัก",
          "latitude": 13.73067,
          "longitude": 100.52382,
          "sum_rainfall_mm": 160.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100703",
          "tambon": "ต.ปทุมวัน",
          "amphoe": "อ.ปทุมวัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองอรชร",
          "latitude": 13.74807,
          "longitude": 100.53618,
          "sum_rainfall_mm": 148.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103201",
          "tambon": "ต.ประเวศ",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ประเวศ",
          "latitude": 13.71701,
          "longitude": 100.69472,
          "sum_rainfall_mm": 180.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103202",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงหนองบอน",
          "latitude": 13.69529,
          "longitude": 100.65375,
          "sum_rainfall_mm": 222.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101401",
          "tambon": "ต.สามเสนใน",
          "amphoe": "อ.พญาไท",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พญาไท",
          "latitude": 13.78003,
          "longitude": 100.54287,
          "sum_rainfall_mm": 215.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 302.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100101",
          "tambon": "ต.พระบรมมหาราชวัง",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปากคลองตลาด",
          "latitude": 13.74228,
          "longitude": 100.49454,
          "sum_rainfall_mm": 179.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100112",
          "tambon": "ต.วัดสามพระยา",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พระนคร",
          "latitude": 13.7649,
          "longitude": 100.49872,
          "sum_rainfall_mm": 151.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.บึงขวาง",
          "latitude": 13.79988,
          "longitude": 100.74482,
          "sum_rainfall_mm": 183.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101203",
          "tambon": "ต.ช่องนนทรี",
          "amphoe": "อ.ยานนาวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ยานนาวา",
          "latitude": 13.69627,
          "longitude": 100.54222,
          "sum_rainfall_mm": 210.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103704",
          "tambon": "ต.มักกะสัน",
          "amphoe": "อ.ราชเทวี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงมักกะสัน",
          "latitude": 13.75665,
          "longitude": 100.54839,
          "sum_rainfall_mm": 164.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101106",
          "tambon": "ต.ขุมทอง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-ถ.ร่วมพัฒนา",
          "latitude": 13.70097,
          "longitude": 100.85106,
          "sum_rainfall_mm": 169.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 299.99999999999994,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103801",
          "tambon": "ต.ลาดพร้าว",
          "amphoe": "อ.ลาดพร้าว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
          "latitude": 13.93183,
          "longitude": 100.63952,
          "sum_rainfall_mm": 189.2,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104501",
          "tambon": "ต.วังทองหลาง",
          "amphoe": "อ.วังทองหลาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.วังทองหลาง",
          "latitude": 13.76435,
          "longitude": 100.60553,
          "sum_rainfall_mm": 165.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103902",
          "tambon": "ต.คลองตันเหนือ",
          "amphoe": "อ.วัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.แสนแสบ-คลองตัน",
          "latitude": 13.7411,
          "longitude": 100.5964,
          "sum_rainfall_mm": 179.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103401",
          "tambon": "ต.สวนหลวง",
          "amphoe": "อ.สวนหลวง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-วัดขจรศิริ",
          "latitude": 13.71545,
          "longitude": 100.6415,
          "sum_rainfall_mm": 241.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104401",
          "tambon": "ต.สะพานสูง",
          "amphoe": "อ.สะพานสูง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สะพานสูง",
          "latitude": 13.76881,
          "longitude": 100.68545,
          "sum_rainfall_mm": 184.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101302",
          "tambon": "ต.สัมพันธวงศ์",
          "amphoe": "อ.สัมพันธวงศ์",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ท่าน้ำสวัสดี",
          "latitude": 13.73664,
          "longitude": 100.5096,
          "sum_rainfall_mm": 143.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102801",
          "tambon": "ต.ทุ่งวัดดอน",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สาทร",
          "latitude": 13.70821,
          "longitude": 100.52641,
          "sum_rainfall_mm": 162.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102802",
          "tambon": "ต.ยานนาวา",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสาทร",
          "latitude": 13.71839,
          "longitude": 100.51496,
          "sum_rainfall_mm": 128.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104201",
          "tambon": "ต.สายไหม",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว ท้ายปตร.คลอง2",
          "latitude": 13.92245,
          "longitude": 100.63438,
          "sum_rainfall_mm": 170.39999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104202",
          "tambon": "ต.ออเงิน",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สายไหม",
          "latitude": 13.89531,
          "longitude": 100.6609,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102302",
          "tambon": "ต.หนองแขม",
          "amphoe": "อ.หนองแขม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ทวีฯ-ค.ภาษีฯ",
          "latitude": 13.69168,
          "longitude": 100.38097,
          "sum_rainfall_mm": 141.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101701",
          "tambon": "ต.ห้วยขวาง",
          "amphoe": "อ.ห้วยขวาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ห้วยขวาง",
          "latitude": 13.77678,
          "longitude": 100.57906,
          "sum_rainfall_mm": 170.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "730212",
          "tambon": "ต.กำแพงแสน",
          "amphoe": "อ.กำแพงแสน",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.กำแพงแสน",
          "latitude": 14.00326,
          "longitude": 99.98091,
          "sum_rainfall_mm": 142.4,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.99679,
                  14.03204
                ],
                [
                  100.00052,
                  14.02896
                ],
                [
                  100.00038,
                  14.02264
                ],
                [
                  100.00479,
                  14.02231
                ],
                [
                  100.00298,
                  14.0175
                ],
                [
                  100.00407,
                  14.01504
                ],
                [
                  100.0061,
                  14.01365
                ],
                [
                  100.01004,
                  14.01539
                ],
                [
                  100.01151,
                  14.01464
                ],
                [
                  100.00822,
                  14.0122
                ],
                [
                  100.01302,
                  14.00762
                ],
                [
                  100.00923,
                  14.00576
                ],
                [
                  100.00824,
                  14.00438
                ],
                [
                  100.00858,
                  14.00164
                ],
                [
                  100.00702,
                  14.00161
                ],
                [
                  100.00773,
                  13.99888
                ],
                [
                  100.01055,
                  13.99557
                ],
                [
                  100.00871,
                  13.99371
                ],
                [
                  100.00726,
                  13.99348
                ],
                [
                  100.00572,
                  13.99543
                ],
                [
                  100.00227,
                  13.99582
                ],
                [
                  99.99845,
                  13.99928
                ],
                [
                  99.9982,
                  14.00162
                ],
                [
                  99.99948,
                  14.00218
                ],
                [
                  99.99138,
                  14.00119
                ],
                [
                  99.98901,
                  13.99691
                ],
                [
                  99.98377,
                  13.99934
                ],
                [
                  99.97728,
                  13.99826
                ],
                [
                  99.97864,
                  14.00164
                ],
                [
                  99.97433,
                  14.00539
                ],
                [
                  99.97466,
                  14.00819
                ],
                [
                  99.95839,
                  14.00973
                ],
                [
                  99.95561,
                  14.01272
                ],
                [
                  99.95619,
                  14.04217
                ],
                [
                  99.961,
                  14.04119
                ],
                [
                  99.96381,
                  14.05156
                ],
                [
                  99.96788,
                  14.05254
                ],
                [
                  99.98698,
                  14.04979
                ],
                [
                  99.99029,
                  14.05098
                ],
                [
                  99.99232,
                  14.03817
                ],
                [
                  99.99679,
                  14.03204
                ]
              ]
            ]
          }
        },
        {
          "geocode": "730324",
          "tambon": "ต.ไทยาวาส",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สะพานนครชัยศรี",
          "latitude": 13.79217,
          "longitude": 100.19817,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.23671,
                  13.80508
                ],
                [
                  100.23673,
                  13.80279
                ],
                [
                  100.24374,
                  13.80275
                ],
                [
                  100.24046,
                  13.80062
                ],
                [
                  100.23706,
                  13.79605
                ],
                [
                  100.23747,
                  13.79061
                ],
                [
                  100.23377,
                  13.79292
                ],
                [
                  100.22932,
                  13.7934
                ],
                [
                  100.22519,
                  13.78715
                ],
                [
                  100.21103,
                  13.78278
                ],
                [
                  100.20627,
                  13.78426
                ],
                [
                  100.2021,
                  13.78732
                ],
                [
                  100.18814,
                  13.80183
                ],
                [
                  100.18603,
                  13.80783
                ],
                [
                  100.20634,
                  13.80643
                ],
                [
                  100.20633,
                  13.80455
                ],
                [
                  100.22211,
                  13.80113
                ],
                [
                  100.22846,
                  13.80372
                ],
                [
                  100.23671,
                  13.80508
                ]
              ]
            ]
          }
        },
        {
          "geocode": "730301",
          "tambon": "ต.นครชัยศรี",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.นครชัยศรี",
          "latitude": 13.79036,
          "longitude": 100.19051,
          "sum_rainfall_mm": 148.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.18685,
                  13.80404
                ],
                [
                  100.20112,
                  13.78832
                ],
                [
                  100.19658,
                  13.78381
                ],
                [
                  100.19475,
                  13.77298
                ],
                [
                  100.19161,
                  13.76388
                ],
                [
                  100.18746,
                  13.79051
                ],
                [
                  100.19162,
                  13.79269
                ],
                [
                  100.18139,
                  13.80476
                ],
                [
                  100.18685,
                  13.80404
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110602",
          "tambon": "ต.ศีรษะจรเข้น้อย",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.ศีรษะจรเข้น้อย",
          "latitude": 13.67777,
          "longitude": 100.7945,
          "sum_rainfall_mm": 260.79999999999995,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.82831,
                  13.70177
                ],
                [
                  100.81908,
                  13.68513
                ],
                [
                  100.81696,
                  13.68306
                ],
                [
                  100.82308,
                  13.67525
                ],
                [
                  100.8224,
                  13.67311
                ],
                [
                  100.8238,
                  13.6673
                ],
                [
                  100.81877,
                  13.66338
                ],
                [
                  100.80489,
                  13.66162
                ],
                [
                  100.80152,
                  13.65877
                ],
                [
                  100.7993,
                  13.66027
                ],
                [
                  100.79697,
                  13.65996
                ],
                [
                  100.79645,
                  13.6638
                ],
                [
                  100.80028,
                  13.6696
                ],
                [
                  100.80204,
                  13.67534
                ],
                [
                  100.79345,
                  13.67773
                ],
                [
                  100.77212,
                  13.67375
                ],
                [
                  100.76303,
                  13.6748
                ],
                [
                  100.77864,
                  13.70153
                ],
                [
                  100.78518,
                  13.70682
                ],
                [
                  100.78182,
                  13.70986
                ],
                [
                  100.78465,
                  13.71649
                ],
                [
                  100.78871,
                  13.71627
                ],
                [
                  100.80111,
                  13.71215
                ],
                [
                  100.82831,
                  13.70177
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110603",
          "tambon": "ต.ศีรษะจรเข้ใหญ่",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
          "latitude": 13.66949,
          "longitude": 100.80058,
          "sum_rainfall_mm": 248.60000000000002,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.8238,
                  13.6673
                ],
                [
                  100.82663,
                  13.66573
                ],
                [
                  100.81938,
                  13.64767
                ],
                [
                  100.8156,
                  13.63094
                ],
                [
                  100.81294,
                  13.62796
                ],
                [
                  100.7991,
                  13.61931
                ],
                [
                  100.79839,
                  13.61718
                ],
                [
                  100.8009,
                  13.60951
                ],
                [
                  100.80037,
                  13.60468
                ],
                [
                  100.7972,
                  13.60118
                ],
                [
                  100.79893,
                  13.59092
                ],
                [
                  100.7957,
                  13.59125
                ],
                [
                  100.79403,
                  13.58893
                ],
                [
                  100.79091,
                  13.5891
                ],
                [
                  100.78878,
                  13.59284
                ],
                [
                  100.77925,
                  13.59487
                ],
                [
                  100.77947,
                  13.59903
                ],
                [
                  100.7821,
                  13.60201
                ],
                [
                  100.78274,
                  13.60677
                ],
                [
                  100.78603,
                  13.61496
                ],
                [
                  100.78405,
                  13.62223
                ],
                [
                  100.78491,
                  13.63074
                ],
                [
                  100.78312,
                  13.64766
                ],
                [
                  100.78712,
                  13.6562
                ],
                [
                  100.79428,
                  13.6662
                ],
                [
                  100.79086,
                  13.67371
                ],
                [
                  100.79065,
                  13.67716
                ],
                [
                  100.79345,
                  13.67773
                ],
                [
                  100.80204,
                  13.67534
                ],
                [
                  100.80028,
                  13.6696
                ],
                [
                  100.79645,
                  13.6638
                ],
                [
                  100.79697,
                  13.65996
                ],
                [
                  100.7993,
                  13.66027
                ],
                [
                  100.80152,
                  13.65877
                ],
                [
                  100.80489,
                  13.66162
                ],
                [
                  100.81877,
                  13.66338
                ],
                [
                  100.8238,
                  13.6673
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 192.5,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "110115",
          "tambon": "ต.เทพารักษ์",
          "amphoe": "อ.เมืองสมุทรปราการ",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสำโรง",
          "latitude": 13.64819,
          "longitude": 100.59514,
          "sum_rainfall_mm": 205.5,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.62864,
                  13.63324
                ],
                [
                  100.64832,
                  13.62426
                ],
                [
                  100.66058,
                  13.62158
                ],
                [
                  100.6645,
                  13.61885
                ],
                [
                  100.67109,
                  13.61859
                ],
                [
                  100.66749,
                  13.60936
                ],
                [
                  100.66563,
                  13.60912
                ],
                [
                  100.66229,
                  13.60643
                ],
                [
                  100.65465,
                  13.61332
                ],
                [
                  100.64816,
                  13.61731
                ],
                [
                  100.63574,
                  13.62034
                ],
                [
                  100.60862,
                  13.63208
                ],
                [
                  100.60141,
                  13.6363
                ],
                [
                  100.59147,
                  13.63991
                ],
                [
                  100.58933,
                  13.64142
                ],
                [
                  100.59296,
                  13.65264
                ],
                [
                  100.59614,
                  13.65211
                ],
                [
                  100.61944,
                  13.63748
                ],
                [
                  100.62864,
                  13.63324
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "180107",
          "tambon": "ต.ธรรมามูล",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานธรรมจักร(วัดธรรมามูล)",
          "latitude": 15.25029,
          "longitude": 100.08347,
          "sum_rainfall_mm": 194.39999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.13059,
                  15.28908
                ],
                [
                  100.13242,
                  15.28176
                ],
                [
                  100.14221,
                  15.27971
                ],
                [
                  100.14439,
                  15.27612
                ],
                [
                  100.14828,
                  15.2741
                ],
                [
                  100.15366,
                  15.26588
                ],
                [
                  100.15803,
                  15.26309
                ],
                [
                  100.15899,
                  15.25738
                ],
                [
                  100.15512,
                  15.25246
                ],
                [
                  100.15464,
                  15.24618
                ],
                [
                  100.13631,
                  15.24535
                ],
                [
                  100.13042,
                  15.2461
                ],
                [
                  100.12573,
                  15.24509
                ],
                [
                  100.10959,
                  15.24796
                ],
                [
                  100.10508,
                  15.24753
                ],
                [
                  100.10165,
                  15.24575
                ],
                [
                  100.11139,
                  15.22511
                ],
                [
                  100.108,
                  15.22261
                ],
                [
                  100.10519,
                  15.22389
                ],
                [
                  100.10074,
                  15.22286
                ],
                [
                  100.08917,
                  15.22296
                ],
                [
                  100.07954,
                  15.22786
                ],
                [
                  100.07668,
                  15.23174
                ],
                [
                  100.07629,
                  15.23704
                ],
                [
                  100.07868,
                  15.24363
                ],
                [
                  100.08378,
                  15.25198
                ],
                [
                  100.08455,
                  15.25162
                ],
                [
                  100.08315,
                  15.25603
                ],
                [
                  100.08065,
                  15.25691
                ],
                [
                  100.06849,
                  15.25544
                ],
                [
                  100.06416,
                  15.25698
                ],
                [
                  100.0584,
                  15.26375
                ],
                [
                  100.05684,
                  15.26849
                ],
                [
                  100.06858,
                  15.26407
                ],
                [
                  100.07247,
                  15.26461
                ],
                [
                  100.07699,
                  15.2666
                ],
                [
                  100.08229,
                  15.27252
                ],
                [
                  100.09441,
                  15.27255
                ],
                [
                  100.09732,
                  15.27456
                ],
                [
                  100.10763,
                  15.27491
                ],
                [
                  100.11394,
                  15.28581
                ],
                [
                  100.12049,
                  15.29112
                ],
                [
                  100.12464,
                  15.28855
                ],
                [
                  100.13059,
                  15.28908
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180106",
          "tambon": "ต.หาดท่าเสา",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.พลเทพ",
          "latitude": 15.214294,
          "longitude": 100.073325,
          "sum_rainfall_mm": 229.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.08378,
                  15.25198
                ],
                [
                  100.07747,
                  15.24148
                ],
                [
                  100.07629,
                  15.23704
                ],
                [
                  100.07668,
                  15.23174
                ],
                [
                  100.08013,
                  15.22741
                ],
                [
                  100.09411,
                  15.21945
                ],
                [
                  100.10115,
                  15.20631
                ],
                [
                  100.10409,
                  15.2041
                ],
                [
                  100.10372,
                  15.19694
                ],
                [
                  100.10203,
                  15.19333
                ],
                [
                  100.08909,
                  15.18406
                ],
                [
                  100.08145,
                  15.16966
                ],
                [
                  100.07634,
                  15.17563
                ],
                [
                  100.0721,
                  15.17605
                ],
                [
                  100.05845,
                  15.181
                ],
                [
                  100.05501,
                  15.17949
                ],
                [
                  100.05429,
                  15.18222
                ],
                [
                  100.05486,
                  15.18872
                ],
                [
                  100.05678,
                  15.19388
                ],
                [
                  100.06144,
                  15.19452
                ],
                [
                  100.06385,
                  15.20023
                ],
                [
                  100.06825,
                  15.20207
                ],
                [
                  100.06784,
                  15.20584
                ],
                [
                  100.06934,
                  15.20829
                ],
                [
                  100.06803,
                  15.21157
                ],
                [
                  100.07187,
                  15.21364
                ],
                [
                  100.07543,
                  15.22182
                ],
                [
                  100.06398,
                  15.23429
                ],
                [
                  100.05924,
                  15.24421
                ],
                [
                  100.05794,
                  15.25184
                ],
                [
                  100.06538,
                  15.25656
                ],
                [
                  100.06916,
                  15.25544
                ],
                [
                  100.08065,
                  15.25691
                ],
                [
                  100.08315,
                  15.25603
                ],
                [
                  100.08455,
                  15.25162
                ],
                [
                  100.08378,
                  15.25198
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
          "sum_rainfall_mm": 285.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "180405",
          "tambon": "ต.โพนางดำออก",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สรรพยา",
          "latitude": 15.10907,
          "longitude": 100.26785,
          "sum_rainfall_mm": 219.8,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.34117,
                  15.1076
                ],
                [
                  100.32761,
                  15.0968
                ],
                [
                  100.31473,
                  15.08825
                ],
                [
                  100.30321,
                  15.08288
                ],
                [
                  100.28908,
                  15.07846
                ],
                [
                  100.28721,
                  15.08056
                ],
                [
                  100.28535,
                  15.08639
                ],
                [
                  100.2847,
                  15.10205
                ],
                [
                  100.28264,
                  15.10324
                ],
                [
                  100.27495,
                  15.10353
                ],
                [
                  100.26949,
                  15.1067
                ],
                [
                  100.26343,
                  15.11905
                ],
                [
                  100.28612,
                  15.14024
                ],
                [
                  100.29347,
                  15.13513
                ],
                [
                  100.30625,
                  15.12033
                ],
                [
                  100.34117,
                  15.1076
                ]
              ]
            ]
          }
        },
        {
          "geocode": "180401",
          "tambon": "ต.สรรพยา",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สรรพยา",
          "latitude": 15.13217,
          "longitude": 100.25129,
          "sum_rainfall_mm": 236.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.26343,
                  15.11905
                ],
                [
                  100.26534,
                  15.11486
                ],
                [
                  100.2489,
                  15.09512
                ],
                [
                  100.23748,
                  15.09591
                ],
                [
                  100.23547,
                  15.09991
                ],
                [
                  100.22179,
                  15.10125
                ],
                [
                  100.21285,
                  15.10926
                ],
                [
                  100.20117,
                  15.116
                ],
                [
                  100.20064,
                  15.11652
                ],
                [
                  100.20662,
                  15.11655
                ],
                [
                  100.20226,
                  15.11918
                ],
                [
                  100.21456,
                  15.128
                ],
                [
                  100.20899,
                  15.13568
                ],
                [
                  100.22054,
                  15.14296
                ],
                [
                  100.21342,
                  15.16315
                ],
                [
                  100.22247,
                  15.16893
                ],
                [
                  100.22668,
                  15.17357
                ],
                [
                  100.23039,
                  15.17051
                ],
                [
                  100.23494,
                  15.16442
                ],
                [
                  100.24257,
                  15.15706
                ],
                [
                  100.24502,
                  15.15307
                ],
                [
                  100.24584,
                  15.14316
                ],
                [
                  100.24869,
                  15.14092
                ],
                [
                  100.25802,
                  15.12703
                ],
                [
                  100.26102,
                  15.12005
                ],
                [
                  100.26343,
                  15.11905
                ]
              ]
            ]
          }
        },
        {
          "geocode": "260107",
          "tambon": "ต.ศรีจุฬา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีจุฬา",
          "latitude": 14.07064,
          "longitude": 101.13746,
          "sum_rainfall_mm": 229.6,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.17691,
                  14.09338
                ],
                [
                  101.17768,
                  14.09256
                ],
                [
                  101.17859,
                  14.09375
                ],
                [
                  101.18077,
                  14.09296
                ],
                [
                  101.18294,
                  14.09571
                ],
                [
                  101.18566,
                  14.09242
                ],
                [
                  101.18918,
                  14.09324
                ],
                [
                  101.18882,
                  14.08708
                ],
                [
                  101.19043,
                  14.08244
                ],
                [
                  101.18971,
                  14.08021
                ],
                [
                  101.1858,
                  14.0831
                ],
                [
                  101.18446,
                  14.08074
                ],
                [
                  101.18049,
                  14.07926
                ],
                [
                  101.17834,
                  14.07669
                ],
                [
                  101.20383,
                  14.04118
                ],
                [
                  101.20082,
                  14.03734
                ],
                [
                  101.20018,
                  14.03206
                ],
                [
                  101.1969,
                  14.02891
                ],
                [
                  101.20014,
                  14.02541
                ],
                [
                  101.20018,
                  14.02358
                ],
                [
                  101.1985,
                  14.02295
                ],
                [
                  101.19532,
                  14.02478
                ],
                [
                  101.19366,
                  14.02369
                ],
                [
                  101.197,
                  14.0142
                ],
                [
                  101.19279,
                  14.01472
                ],
                [
                  101.1847,
                  14.01206
                ],
                [
                  101.17863,
                  14.01213
                ],
                [
                  101.17827,
                  14.0087
                ],
                [
                  101.17684,
                  14.00705
                ],
                [
                  101.17204,
                  14.01218
                ],
                [
                  101.17018,
                  14.01355
                ],
                [
                  101.16842,
                  14.01315
                ],
                [
                  101.16738,
                  14.01482
                ],
                [
                  101.15252,
                  14.0107
                ],
                [
                  101.12231,
                  14.05277
                ],
                [
                  101.11136,
                  14.05402
                ],
                [
                  101.1114,
                  14.09012
                ],
                [
                  101.10784,
                  14.09484
                ],
                [
                  101.11837,
                  14.09512
                ],
                [
                  101.12398,
                  14.11065
                ],
                [
                  101.14276,
                  14.09236
                ],
                [
                  101.14797,
                  14.10104
                ],
                [
                  101.14925,
                  14.09632
                ],
                [
                  101.15078,
                  14.09531
                ],
                [
                  101.14957,
                  14.09215
                ],
                [
                  101.15454,
                  14.09173
                ],
                [
                  101.16103,
                  14.0939
                ],
                [
                  101.15972,
                  14.09553
                ],
                [
                  101.16434,
                  14.10116
                ],
                [
                  101.16645,
                  14.10058
                ],
                [
                  101.17142,
                  14.10188
                ],
                [
                  101.17193,
                  14.09594
                ],
                [
                  101.1744,
                  14.09773
                ],
                [
                  101.17499,
                  14.09427
                ],
                [
                  101.17691,
                  14.09338
                ]
              ]
            ]
          }
        },
        {
          "geocode": "260404",
          "tambon": "ต.โพธิ์แทน",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองแม่น้ำใน(โพธิ์แทน)",
          "latitude": 14.212921,
          "longitude": 100.942453,
          "sum_rainfall_mm": 173.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.98382,
                  14.21802
                ],
                [
                  100.99444,
                  14.20633
                ],
                [
                  100.98982,
                  14.2042
                ],
                [
                  100.98591,
                  14.20418
                ],
                [
                  100.97416,
                  14.19582
                ],
                [
                  100.9445,
                  14.17845
                ],
                [
                  100.93842,
                  14.16662
                ],
                [
                  100.93596,
                  14.18125
                ],
                [
                  100.93661,
                  14.18655
                ],
                [
                  100.93458,
                  14.19467
                ],
                [
                  100.93176,
                  14.19734
                ],
                [
                  100.92333,
                  14.19996
                ],
                [
                  100.92427,
                  14.20148
                ],
                [
                  100.92051,
                  14.20342
                ],
                [
                  100.9143,
                  14.20917
                ],
                [
                  100.91429,
                  14.22118
                ],
                [
                  100.94673,
                  14.23657
                ],
                [
                  100.97723,
                  14.2133
                ],
                [
                  100.98382,
                  14.21802
                ]
              ]
            ]
          }
        },
        {
          "geocode": "600702",
          "tambon": "ต.ช่องแค",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ่อดินขาว",
          "latitude": 15.169044,
          "longitude": 100.41471,
          "sum_rainfall_mm": 128.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.45012,
                  15.24033
                ],
                [
                  100.44747,
                  15.23823
                ],
                [
                  100.44553,
                  15.23341
                ],
                [
                  100.4443,
                  15.22672
                ],
                [
                  100.44137,
                  15.22039
                ],
                [
                  100.44089,
                  15.21517
                ],
                [
                  100.43692,
                  15.20923
                ],
                [
                  100.43658,
                  15.20652
                ],
                [
                  100.44224,
                  15.19994
                ],
                [
                  100.45364,
                  15.19767
                ],
                [
                  100.45731,
                  15.19521
                ],
                [
                  100.45566,
                  15.17539
                ],
                [
                  100.44812,
                  15.14567
                ],
                [
                  100.44513,
                  15.14622
                ],
                [
                  100.4419,
                  15.14511
                ],
                [
                  100.43253,
                  15.13852
                ],
                [
                  100.42479,
                  15.14912
                ],
                [
                  100.421,
                  15.15158
                ],
                [
                  100.41387,
                  15.16003
                ],
                [
                  100.41578,
                  15.16822
                ],
                [
                  100.41343,
                  15.17205
                ],
                [
                  100.3904,
                  15.19586
                ],
                [
                  100.39401,
                  15.20642
                ],
                [
                  100.3978,
                  15.21278
                ],
                [
                  100.39507,
                  15.21438
                ],
                [
                  100.39401,
                  15.21814
                ],
                [
                  100.39482,
                  15.22053
                ],
                [
                  100.39036,
                  15.22291
                ],
                [
                  100.39009,
                  15.22703
                ],
                [
                  100.38709,
                  15.23083
                ],
                [
                  100.38883,
                  15.23262
                ],
                [
                  100.39349,
                  15.23006
                ],
                [
                  100.39578,
                  15.23011
                ],
                [
                  100.40152,
                  15.23373
                ],
                [
                  100.40294,
                  15.23964
                ],
                [
                  100.40248,
                  15.24206
                ],
                [
                  100.40388,
                  15.24418
                ],
                [
                  100.41217,
                  15.24089
                ],
                [
                  100.41775,
                  15.24395
                ],
                [
                  100.42116,
                  15.24438
                ],
                [
                  100.42426,
                  15.23854
                ],
                [
                  100.4261,
                  15.23808
                ],
                [
                  100.43384,
                  15.23875
                ],
                [
                  100.43809,
                  15.24087
                ],
                [
                  100.44481,
                  15.23975
                ],
                [
                  100.45012,
                  15.24033
                ]
              ]
            ]
          }
        },
        {
          "geocode": "600710",
          "tambon": "ต.พรหมนิมิต",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ช่องแค",
          "latitude": 15.14624,
          "longitude": 100.41298,
          "sum_rainfall_mm": 213.39999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.44812,
                  15.14567
                ],
                [
                  100.4478,
                  15.13944
                ],
                [
                  100.44941,
                  15.1324
                ],
                [
                  100.44325,
                  15.12713
                ],
                [
                  100.44017,
                  15.12622
                ],
                [
                  100.43434,
                  15.12663
                ],
                [
                  100.41878,
                  15.12994
                ],
                [
                  100.41373,
                  15.1365
                ],
                [
                  100.40686,
                  15.16311
                ],
                [
                  100.40446,
                  15.16292
                ],
                [
                  100.39266,
                  15.15743
                ],
                [
                  100.38475,
                  15.15874
                ],
                [
                  100.38201,
                  15.16183
                ],
                [
                  100.37443,
                  15.17841
                ],
                [
                  100.37749,
                  15.18143
                ],
                [
                  100.38284,
                  15.19081
                ],
                [
                  100.38917,
                  15.1906
                ],
                [
                  100.3904,
                  15.19586
                ],
                [
                  100.41343,
                  15.17205
                ],
                [
                  100.41578,
                  15.16822
                ],
                [
                  100.41387,
                  15.16003
                ],
                [
                  100.421,
                  15.15158
                ],
                [
                  100.42479,
                  15.14912
                ],
                [
                  100.43253,
                  15.13852
                ],
                [
                  100.4419,
                  15.14511
                ],
                [
                  100.44513,
                  15.14622
                ],
                [
                  100.44812,
                  15.14567
                ]
              ]
            ]
          }
        },
        {
          "geocode": "140203",
          "tambon": "ต.ท่าหลวง",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.พระนารายน์",
          "latitude": 14.5583,
          "longitude": 100.76205,
          "sum_rainfall_mm": 232.99999999999997,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.78074,
                  14.56733
                ],
                [
                  100.78239,
                  14.5664
                ],
                [
                  100.78137,
                  14.56108
                ],
                [
                  100.77743,
                  14.55642
                ],
                [
                  100.77556,
                  14.55041
                ],
                [
                  100.77941,
                  14.53918
                ],
                [
                  100.77854,
                  14.53033
                ],
                [
                  100.7752,
                  14.52686
                ],
                [
                  100.77123,
                  14.52703
                ],
                [
                  100.76949,
                  14.52502
                ],
                [
                  100.76749,
                  14.52482
                ],
                [
                  100.755,
                  14.53742
                ],
                [
                  100.74808,
                  14.54276
                ],
                [
                  100.74692,
                  14.54522
                ],
                [
                  100.74734,
                  14.54919
                ],
                [
                  100.75297,
                  14.56227
                ],
                [
                  100.75469,
                  14.56345
                ],
                [
                  100.75643,
                  14.56109
                ],
                [
                  100.75757,
                  14.56122
                ],
                [
                  100.76271,
                  14.56855
                ],
                [
                  100.76939,
                  14.56565
                ],
                [
                  100.77438,
                  14.56716
                ],
                [
                  100.78074,
                  14.56733
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170504",
          "tambon": "ต.พิกุลทอง",
          "amphoe": "อ.ท่าช้าง",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ยางมณี",
          "latitude": 14.751,
          "longitude": 100.41463,
          "sum_rainfall_mm": 223.80000000000004,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.42145,
                  14.79022
                ],
                [
                  100.42292,
                  14.78831
                ],
                [
                  100.42352,
                  14.78369
                ],
                [
                  100.4215,
                  14.75704
                ],
                [
                  100.41469,
                  14.74922
                ],
                [
                  100.41356,
                  14.7515
                ],
                [
                  100.4063,
                  14.7558
                ],
                [
                  100.40412,
                  14.75899
                ],
                [
                  100.39961,
                  14.75927
                ],
                [
                  100.39568,
                  14.76194
                ],
                [
                  100.39347,
                  14.766
                ],
                [
                  100.39058,
                  14.7656
                ],
                [
                  100.39019,
                  14.76678
                ],
                [
                  100.39106,
                  14.76902
                ],
                [
                  100.39545,
                  14.77132
                ],
                [
                  100.39878,
                  14.77767
                ],
                [
                  100.40146,
                  14.78394
                ],
                [
                  100.40006,
                  14.78889
                ],
                [
                  100.40631,
                  14.79223
                ],
                [
                  100.418,
                  14.78993
                ],
                [
                  100.42145,
                  14.79022
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170203",
          "tambon": "ต.เชิงกลัด",
          "amphoe": "อ.บางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.บางระจัน",
          "latitude": 14.92539,
          "longitude": 100.27912,
          "sum_rainfall_mm": 118.6,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.25907,
                  14.94381
                ],
                [
                  100.26054,
                  14.93818
                ],
                [
                  100.26974,
                  14.93775
                ],
                [
                  100.27298,
                  14.92859
                ],
                [
                  100.28349,
                  14.92337
                ],
                [
                  100.28669,
                  14.91527
                ],
                [
                  100.29565,
                  14.90617
                ],
                [
                  100.29669,
                  14.90287
                ],
                [
                  100.28471,
                  14.88555
                ],
                [
                  100.26155,
                  14.87161
                ],
                [
                  100.25476,
                  14.88787
                ],
                [
                  100.25854,
                  14.896
                ],
                [
                  100.2603,
                  14.90463
                ],
                [
                  100.25495,
                  14.91437
                ],
                [
                  100.25814,
                  14.92274
                ],
                [
                  100.24519,
                  14.92807
                ],
                [
                  100.24114,
                  14.93125
                ],
                [
                  100.24245,
                  14.93943
                ],
                [
                  100.24532,
                  14.94592
                ],
                [
                  100.25907,
                  14.94381
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170605",
          "tambon": "ต.ชีน้ำร้าย",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สถานีสูบน้ำคลองระบายชัยนาท-ป่าสัก 2 (ทุ่งเชียงราก)",
          "latitude": 15.05502,
          "longitude": 100.32081,
          "sum_rainfall_mm": 209.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.36498,
                  15.09353
                ],
                [
                  100.35871,
                  15.07199
                ],
                [
                  100.35735,
                  15.08346
                ],
                [
                  100.35253,
                  15.07565
                ],
                [
                  100.34728,
                  15.0712
                ],
                [
                  100.32372,
                  15.05785
                ],
                [
                  100.31833,
                  15.05289
                ],
                [
                  100.31307,
                  15.05017
                ],
                [
                  100.30512,
                  15.05158
                ],
                [
                  100.3052,
                  15.05369
                ],
                [
                  100.30986,
                  15.0607
                ],
                [
                  100.30972,
                  15.0634
                ],
                [
                  100.30775,
                  15.06522
                ],
                [
                  100.30323,
                  15.06588
                ],
                [
                  100.29659,
                  15.06128
                ],
                [
                  100.29396,
                  15.06186
                ],
                [
                  100.29466,
                  15.07117
                ],
                [
                  100.28908,
                  15.07846
                ],
                [
                  100.30365,
                  15.08305
                ],
                [
                  100.31932,
                  15.09118
                ],
                [
                  100.32761,
                  15.0968
                ],
                [
                  100.3494,
                  15.11489
                ],
                [
                  100.35165,
                  15.11985
                ],
                [
                  100.35408,
                  15.11881
                ],
                [
                  100.35634,
                  15.11567
                ],
                [
                  100.3543,
                  15.10122
                ],
                [
                  100.36498,
                  15.09353
                ]
              ]
            ]
          }
        },
        {
          "geocode": "170601",
          "tambon": "ต.อินทร์บุรี",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อินทร์บุรี",
          "latitude": 15.00602,
          "longitude": 100.33088,
          "sum_rainfall_mm": 186.79999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.33882,
                  15.01584
                ],
                [
                  100.34152,
                  15.00818
                ],
                [
                  100.34386,
                  15.0092
                ],
                [
                  100.3486,
                  15.00898
                ],
                [
                  100.34903,
                  15.0108
                ],
                [
                  100.351,
                  15.0111
                ],
                [
                  100.3559,
                  15.00385
                ],
                [
                  100.34677,
                  15.00344
                ],
                [
                  100.35307,
                  14.99171
                ],
                [
                  100.35068,
                  14.99096
                ],
                [
                  100.34888,
                  14.98846
                ],
                [
                  100.33887,
                  14.98473
                ],
                [
                  100.3367,
                  14.99222
                ],
                [
                  100.3329,
                  14.99148
                ],
                [
                  100.3322,
                  14.99039
                ],
                [
                  100.32719,
                  14.99127
                ],
                [
                  100.32039,
                  14.98882
                ],
                [
                  100.31191,
                  15.00263
                ],
                [
                  100.30935,
                  15.01022
                ],
                [
                  100.31031,
                  15.0136
                ],
                [
                  100.3095,
                  15.02138
                ],
                [
                  100.30578,
                  15.02408
                ],
                [
                  100.30432,
                  15.02773
                ],
                [
                  100.32671,
                  15.03013
                ],
                [
                  100.32825,
                  15.02641
                ],
                [
                  100.3316,
                  15.0232
                ],
                [
                  100.33175,
                  15.02043
                ],
                [
                  100.33634,
                  15.02087
                ],
                [
                  100.33882,
                  15.01584
                ]
              ]
            ]
          }
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สามชุก",
          "latitude": 14.75138,
          "longitude": 100.09592,
          "sum_rainfall_mm": 159.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.11676,
                  14.7849
                ],
                [
                  100.11473,
                  14.76944
                ],
                [
                  100.11631,
                  14.74673
                ],
                [
                  100.12186,
                  14.74423
                ],
                [
                  100.12301,
                  14.74171
                ],
                [
                  100.12649,
                  14.74014
                ],
                [
                  100.13027,
                  14.73589
                ],
                [
                  100.1138,
                  14.73356
                ],
                [
                  100.10364,
                  14.73398
                ],
                [
                  100.08405,
                  14.72894
                ],
                [
                  100.08098,
                  14.73004
                ],
                [
                  100.08409,
                  14.7359
                ],
                [
                  100.08362,
                  14.7418
                ],
                [
                  100.08504,
                  14.74635
                ],
                [
                  100.08437,
                  14.75169
                ],
                [
                  100.08358,
                  14.75143
                ],
                [
                  100.08209,
                  14.7541
                ],
                [
                  100.07216,
                  14.75247
                ],
                [
                  100.07242,
                  14.76084
                ],
                [
                  100.0699,
                  14.76088
                ],
                [
                  100.06809,
                  14.76305
                ],
                [
                  100.06571,
                  14.76279
                ],
                [
                  100.06547,
                  14.76566
                ],
                [
                  100.06661,
                  14.76557
                ],
                [
                  100.06663,
                  14.76985
                ],
                [
                  100.06565,
                  14.76986
                ],
                [
                  100.06648,
                  14.77352
                ],
                [
                  100.06194,
                  14.77311
                ],
                [
                  100.05907,
                  14.77162
                ],
                [
                  100.06137,
                  14.77731
                ],
                [
                  100.06583,
                  14.78205
                ],
                [
                  100.06954,
                  14.78173
                ],
                [
                  100.07298,
                  14.78369
                ],
                [
                  100.07375,
                  14.78259
                ],
                [
                  100.07497,
                  14.7834
                ],
                [
                  100.07599,
                  14.78265
                ],
                [
                  100.07805,
                  14.78655
                ],
                [
                  100.08046,
                  14.78616
                ],
                [
                  100.08539,
                  14.7878
                ],
                [
                  100.08902,
                  14.78688
                ],
                [
                  100.09333,
                  14.78921
                ],
                [
                  100.0984,
                  14.7888
                ],
                [
                  100.10326,
                  14.79071
                ],
                [
                  100.10536,
                  14.79287
                ],
                [
                  100.10959,
                  14.78984
                ],
                [
                  100.11261,
                  14.78956
                ],
                [
                  100.11676,
                  14.7849
                ]
              ]
            ]
          }
        },
        {
          "geocode": "610301",
          "tambon": "ต.สว่างอารมณ์",
          "amphoe": "อ.สว่างอารมณ์",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สว่างอารมณ์",
          "latitude": 15.58538,
          "longitude": 99.86514,
          "sum_rainfall_mm": 152.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.85073,
                  15.62
                ],
                [
                  99.86256,
                  15.61753
                ],
                [
                  99.86408,
                  15.61456
                ],
                [
                  99.86605,
                  15.61399
                ],
                [
                  99.86696,
                  15.60752
                ],
                [
                  99.86561,
                  15.60598
                ],
                [
                  99.86835,
                  15.60501
                ],
                [
                  99.86734,
                  15.60208
                ],
                [
                  99.86917,
                  15.60092
                ],
                [
                  99.86682,
                  15.59903
                ],
                [
                  99.8684,
                  15.59714
                ],
                [
                  99.86719,
                  15.59606
                ],
                [
                  99.86853,
                  15.59534
                ],
                [
                  99.86585,
                  15.59434
                ],
                [
                  99.86865,
                  15.59254
                ],
                [
                  99.86867,
                  15.59092
                ],
                [
                  99.86728,
                  15.58985
                ],
                [
                  99.86832,
                  15.58765
                ],
                [
                  99.86569,
                  15.58651
                ],
                [
                  99.86553,
                  15.58531
                ],
                [
                  99.86738,
                  15.58317
                ],
                [
                  99.86579,
                  15.58252
                ],
                [
                  99.86965,
                  15.57941
                ],
                [
                  99.86632,
                  15.57881
                ],
                [
                  99.86919,
                  15.57762
                ],
                [
                  99.86868,
                  15.57458
                ],
                [
                  99.87044,
                  15.57326
                ],
                [
                  99.86938,
                  15.57158
                ],
                [
                  99.8705,
                  15.56805
                ],
                [
                  99.86823,
                  15.56717
                ],
                [
                  99.8714,
                  15.56517
                ],
                [
                  99.87079,
                  15.56378
                ],
                [
                  99.87269,
                  15.56103
                ],
                [
                  99.87623,
                  15.55916
                ],
                [
                  99.87577,
                  15.55664
                ],
                [
                  99.87753,
                  15.55431
                ],
                [
                  99.87418,
                  15.5547
                ],
                [
                  99.87257,
                  15.55335
                ],
                [
                  99.87117,
                  15.55597
                ],
                [
                  99.86649,
                  15.55843
                ],
                [
                  99.86395,
                  15.55756
                ],
                [
                  99.86398,
                  15.54705
                ],
                [
                  99.86225,
                  15.54445
                ],
                [
                  99.86303,
                  15.54313
                ],
                [
                  99.85919,
                  15.53787
                ],
                [
                  99.85825,
                  15.53382
                ],
                [
                  99.84792,
                  15.53167
                ],
                [
                  99.84648,
                  15.52912
                ],
                [
                  99.84391,
                  15.52875
                ],
                [
                  99.84172,
                  15.52578
                ],
                [
                  99.8379,
                  15.52457
                ],
                [
                  99.83611,
                  15.52215
                ],
                [
                  99.83259,
                  15.52058
                ],
                [
                  99.82704,
                  15.5226
                ],
                [
                  99.82057,
                  15.52811
                ],
                [
                  99.81577,
                  15.52992
                ],
                [
                  99.81421,
                  15.53169
                ],
                [
                  99.8128,
                  15.53555
                ],
                [
                  99.81352,
                  15.54049
                ],
                [
                  99.81076,
                  15.54391
                ],
                [
                  99.81022,
                  15.54647
                ],
                [
                  99.81283,
                  15.55518
                ],
                [
                  99.82067,
                  15.56647
                ],
                [
                  99.82734,
                  15.56769
                ],
                [
                  99.83225,
                  15.56516
                ],
                [
                  99.84132,
                  15.56441
                ],
                [
                  99.84374,
                  15.56641
                ],
                [
                  99.84483,
                  15.56569
                ],
                [
                  99.84716,
                  15.56656
                ],
                [
                  99.83838,
                  15.5733
                ],
                [
                  99.83776,
                  15.58185
                ],
                [
                  99.83913,
                  15.58755
                ],
                [
                  99.8386,
                  15.59548
                ],
                [
                  99.84029,
                  15.60614
                ],
                [
                  99.84769,
                  15.61863
                ],
                [
                  99.85073,
                  15.62
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240301",
          "tambon": "ต.บางน้ำเปรี้ยว",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
          "latitude": 13.83819,
          "longitude": 100.9666,
          "sum_rainfall_mm": 266.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.05003,
                  13.85515
                ],
                [
                  101.05344,
                  13.84978
                ],
                [
                  101.058,
                  13.84776
                ],
                [
                  101.04385,
                  13.83589
                ],
                [
                  101.02322,
                  13.81521
                ],
                [
                  101.01824,
                  13.80922
                ],
                [
                  101.01615,
                  13.8034
                ],
                [
                  101.00613,
                  13.79296
                ],
                [
                  101.00126,
                  13.79735
                ],
                [
                  100.99663,
                  13.79913
                ],
                [
                  100.99498,
                  13.80091
                ],
                [
                  100.99068,
                  13.80028
                ],
                [
                  100.97936,
                  13.80734
                ],
                [
                  100.96691,
                  13.80694
                ],
                [
                  100.95904,
                  13.81267
                ],
                [
                  100.95537,
                  13.80868
                ],
                [
                  100.9535,
                  13.81573
                ],
                [
                  100.95736,
                  13.82289
                ],
                [
                  100.95777,
                  13.82692
                ],
                [
                  100.96358,
                  13.83525
                ],
                [
                  100.9671,
                  13.83852
                ],
                [
                  100.97027,
                  13.83897
                ],
                [
                  100.97135,
                  13.84189
                ],
                [
                  100.97589,
                  13.84634
                ],
                [
                  100.97918,
                  13.8455
                ],
                [
                  100.99665,
                  13.85218
                ],
                [
                  101.00166,
                  13.8576
                ],
                [
                  101.01308,
                  13.84912
                ],
                [
                  101.05003,
                  13.85515
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240309",
          "tambon": "ต.ศาลาแดง",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปตร.คลองหลวงแพ่ง",
          "latitude": 13.81321,
          "longitude": 100.93742,
          "sum_rainfall_mm": 216.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.93616,
                  13.85397
                ],
                [
                  100.93629,
                  13.85172
                ],
                [
                  100.93754,
                  13.85128
                ],
                [
                  100.93712,
                  13.84697
                ],
                [
                  100.94163,
                  13.84501
                ],
                [
                  100.94584,
                  13.84593
                ],
                [
                  100.94978,
                  13.84438
                ],
                [
                  100.95516,
                  13.84399
                ],
                [
                  100.95762,
                  13.84627
                ],
                [
                  100.97276,
                  13.84869
                ],
                [
                  100.97589,
                  13.84634
                ],
                [
                  100.97135,
                  13.84189
                ],
                [
                  100.97027,
                  13.83897
                ],
                [
                  100.9659,
                  13.83758
                ],
                [
                  100.95962,
                  13.82983
                ],
                [
                  100.95349,
                  13.8145
                ],
                [
                  100.95537,
                  13.80868
                ],
                [
                  100.95904,
                  13.81267
                ],
                [
                  100.96691,
                  13.80694
                ],
                [
                  100.97936,
                  13.80734
                ],
                [
                  100.99068,
                  13.80028
                ],
                [
                  100.99432,
                  13.80105
                ],
                [
                  100.99663,
                  13.79913
                ],
                [
                  100.98765,
                  13.79708
                ],
                [
                  100.98144,
                  13.79322
                ],
                [
                  100.98108,
                  13.79003
                ],
                [
                  100.98341,
                  13.7807
                ],
                [
                  100.97524,
                  13.77076
                ],
                [
                  100.93066,
                  13.8049
                ],
                [
                  100.93796,
                  13.81465
                ],
                [
                  100.9073,
                  13.83855
                ],
                [
                  100.90907,
                  13.84239
                ],
                [
                  100.91281,
                  13.8463
                ],
                [
                  100.90461,
                  13.84853
                ],
                [
                  100.90492,
                  13.85049
                ],
                [
                  100.91304,
                  13.84936
                ],
                [
                  100.92391,
                  13.84971
                ],
                [
                  100.92408,
                  13.85434
                ],
                [
                  100.93616,
                  13.85397
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240402",
          "tambon": "ต.ท่าสะอ้าน",
          "amphoe": "อ.บางปะกง",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บางปะกง",
          "latitude": 13.54901,
          "longitude": 101.00111,
          "sum_rainfall_mm": 206.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.99635,
                  13.56022
                ],
                [
                  101.00233,
                  13.5601
                ],
                [
                  101.01679,
                  13.5662
                ],
                [
                  101.02206,
                  13.5615
                ],
                [
                  101.02447,
                  13.5498
                ],
                [
                  101.02283,
                  13.54844
                ],
                [
                  101.02053,
                  13.54835
                ],
                [
                  101.01372,
                  13.55113
                ],
                [
                  101.0098,
                  13.55157
                ],
                [
                  101.00337,
                  13.54981
                ],
                [
                  100.99584,
                  13.54412
                ],
                [
                  100.9952,
                  13.5418
                ],
                [
                  100.99587,
                  13.53558
                ],
                [
                  101.00058,
                  13.52746
                ],
                [
                  100.98721,
                  13.52823
                ],
                [
                  100.97677,
                  13.53774
                ],
                [
                  100.97758,
                  13.53886
                ],
                [
                  100.98067,
                  13.53732
                ],
                [
                  100.98195,
                  13.53806
                ],
                [
                  100.97983,
                  13.54576
                ],
                [
                  100.98195,
                  13.55419
                ],
                [
                  100.97726,
                  13.56292
                ],
                [
                  100.98026,
                  13.56345
                ],
                [
                  100.97869,
                  13.56932
                ],
                [
                  100.98041,
                  13.57338
                ],
                [
                  100.98086,
                  13.57784
                ],
                [
                  100.97956,
                  13.57954
                ],
                [
                  100.98024,
                  13.58131
                ],
                [
                  100.98181,
                  13.57895
                ],
                [
                  100.99058,
                  13.57382
                ],
                [
                  100.9948,
                  13.56668
                ],
                [
                  100.99635,
                  13.56022
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240501",
          "tambon": "ต.บ้านโพธิ์",
          "amphoe": "อ.บ้านโพธิ์",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านโพธิ์",
          "latitude": 13.58335,
          "longitude": 101.070917,
          "sum_rainfall_mm": 308.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.0906,
                  13.60431
                ],
                [
                  101.09405,
                  13.60456
                ],
                [
                  101.09411,
                  13.59912
                ],
                [
                  101.09838,
                  13.59207
                ],
                [
                  101.09648,
                  13.58711
                ],
                [
                  101.09839,
                  13.58272
                ],
                [
                  101.09634,
                  13.57799
                ],
                [
                  101.09699,
                  13.57677
                ],
                [
                  101.09589,
                  13.57193
                ],
                [
                  101.09439,
                  13.56959
                ],
                [
                  101.09015,
                  13.57263
                ],
                [
                  101.08391,
                  13.57058
                ],
                [
                  101.08212,
                  13.57323
                ],
                [
                  101.07827,
                  13.57494
                ],
                [
                  101.07598,
                  13.57949
                ],
                [
                  101.07217,
                  13.58106
                ],
                [
                  101.07038,
                  13.58483
                ],
                [
                  101.07482,
                  13.5877
                ],
                [
                  101.07639,
                  13.59285
                ],
                [
                  101.07642,
                  13.60159
                ],
                [
                  101.0801,
                  13.60236
                ],
                [
                  101.08208,
                  13.6077
                ],
                [
                  101.08379,
                  13.60763
                ],
                [
                  101.08638,
                  13.60417
                ],
                [
                  101.0906,
                  13.60431
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240601",
          "tambon": "ต.เกาะขนุน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ฝายท่าลาด",
          "latitude": 13.707719,
          "longitude": 101.401415,
          "sum_rainfall_mm": 244.5,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.4238,
                  13.75741
                ],
                [
                  101.42358,
                  13.74932
                ],
                [
                  101.43116,
                  13.74172
                ],
                [
                  101.43647,
                  13.72604
                ],
                [
                  101.44371,
                  13.71884
                ],
                [
                  101.44342,
                  13.71279
                ],
                [
                  101.44562,
                  13.70475
                ],
                [
                  101.44558,
                  13.68971
                ],
                [
                  101.44037,
                  13.68716
                ],
                [
                  101.43714,
                  13.67846
                ],
                [
                  101.43428,
                  13.67554
                ],
                [
                  101.42259,
                  13.67345
                ],
                [
                  101.42039,
                  13.67149
                ],
                [
                  101.42052,
                  13.66346
                ],
                [
                  101.42279,
                  13.65607
                ],
                [
                  101.41568,
                  13.64305
                ],
                [
                  101.41297,
                  13.63475
                ],
                [
                  101.40795,
                  13.62696
                ],
                [
                  101.40081,
                  13.62093
                ],
                [
                  101.39909,
                  13.61518
                ],
                [
                  101.38811,
                  13.61909
                ],
                [
                  101.38213,
                  13.62285
                ],
                [
                  101.3779,
                  13.62753
                ],
                [
                  101.36707,
                  13.64379
                ],
                [
                  101.36552,
                  13.64917
                ],
                [
                  101.36577,
                  13.65388
                ],
                [
                  101.36379,
                  13.65719
                ],
                [
                  101.36332,
                  13.66168
                ],
                [
                  101.35863,
                  13.66946
                ],
                [
                  101.35795,
                  13.67379
                ],
                [
                  101.36439,
                  13.68266
                ],
                [
                  101.36495,
                  13.68668
                ],
                [
                  101.36496,
                  13.70599
                ],
                [
                  101.36298,
                  13.71463
                ],
                [
                  101.3593,
                  13.72324
                ],
                [
                  101.36435,
                  13.73005
                ],
                [
                  101.36667,
                  13.74043
                ],
                [
                  101.38908,
                  13.75783
                ],
                [
                  101.39747,
                  13.77024
                ],
                [
                  101.41171,
                  13.76273
                ],
                [
                  101.41358,
                  13.75286
                ],
                [
                  101.4238,
                  13.75741
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240607",
          "tambon": "ต.หนองแหน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.หนองแหน",
          "latitude": 13.68338,
          "longitude": 101.32512,
          "sum_rainfall_mm": 357.3999999999999,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.33804,
                  13.70481
                ],
                [
                  101.35074,
                  13.7031
                ],
                [
                  101.34402,
                  13.69618
                ],
                [
                  101.34441,
                  13.69262
                ],
                [
                  101.35795,
                  13.67379
                ],
                [
                  101.35863,
                  13.66946
                ],
                [
                  101.36332,
                  13.66168
                ],
                [
                  101.36379,
                  13.65719
                ],
                [
                  101.36577,
                  13.65388
                ],
                [
                  101.36552,
                  13.64917
                ],
                [
                  101.36707,
                  13.64379
                ],
                [
                  101.37383,
                  13.63343
                ],
                [
                  101.38213,
                  13.62285
                ],
                [
                  101.38811,
                  13.61909
                ],
                [
                  101.39909,
                  13.61518
                ],
                [
                  101.39329,
                  13.6046
                ],
                [
                  101.38964,
                  13.60312
                ],
                [
                  101.38554,
                  13.59937
                ],
                [
                  101.38297,
                  13.5996
                ],
                [
                  101.37966,
                  13.60469
                ],
                [
                  101.37301,
                  13.61041
                ],
                [
                  101.36612,
                  13.61478
                ],
                [
                  101.36244,
                  13.61509
                ],
                [
                  101.36143,
                  13.61741
                ],
                [
                  101.35876,
                  13.61776
                ],
                [
                  101.35455,
                  13.62081
                ],
                [
                  101.34367,
                  13.63303
                ],
                [
                  101.33998,
                  13.63487
                ],
                [
                  101.33485,
                  13.64065
                ],
                [
                  101.32746,
                  13.64109
                ],
                [
                  101.31264,
                  13.64939
                ],
                [
                  101.30143,
                  13.65278
                ],
                [
                  101.29857,
                  13.6553
                ],
                [
                  101.29434,
                  13.65472
                ],
                [
                  101.29147,
                  13.65576
                ],
                [
                  101.28796,
                  13.65761
                ],
                [
                  101.28219,
                  13.66405
                ],
                [
                  101.28462,
                  13.66752
                ],
                [
                  101.29047,
                  13.68179
                ],
                [
                  101.29208,
                  13.69941
                ],
                [
                  101.29375,
                  13.69897
                ],
                [
                  101.3038,
                  13.70186
                ],
                [
                  101.31566,
                  13.70042
                ],
                [
                  101.32029,
                  13.70328
                ],
                [
                  101.32622,
                  13.7038
                ],
                [
                  101.33125,
                  13.70705
                ],
                [
                  101.33596,
                  13.70434
                ],
                [
                  101.33804,
                  13.70481
                ]
              ]
            ]
          }
        },
        {
          "geocode": "240109",
          "tambon": "ต.บางขวัญ",
          "amphoe": "อ.เมืองฉะเชิงเทรา",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บางขวัญ",
          "latitude": 13.74984,
          "longitude": 101.07751,
          "sum_rainfall_mm": 325.4,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.07779,
                  13.76274
                ],
                [
                  101.07959,
                  13.75942
                ],
                [
                  101.07966,
                  13.7555
                ],
                [
                  101.0861,
                  13.75506
                ],
                [
                  101.09833,
                  13.75208
                ],
                [
                  101.10536,
                  13.74149
                ],
                [
                  101.10834,
                  13.74079
                ],
                [
                  101.11181,
                  13.73622
                ],
                [
                  101.10399,
                  13.72955
                ],
                [
                  101.1013,
                  13.73205
                ],
                [
                  101.09475,
                  13.73108
                ],
                [
                  101.09527,
                  13.7292
                ],
                [
                  101.09775,
                  13.72898
                ],
                [
                  101.10004,
                  13.72679
                ],
                [
                  101.10275,
                  13.72623
                ],
                [
                  101.10273,
                  13.72298
                ],
                [
                  101.10493,
                  13.7216
                ],
                [
                  101.10245,
                  13.71919
                ],
                [
                  101.1018,
                  13.71692
                ],
                [
                  101.10383,
                  13.71551
                ],
                [
                  101.09122,
                  13.71073
                ],
                [
                  101.0885,
                  13.70184
                ],
                [
                  101.08837,
                  13.70345
                ],
                [
                  101.08673,
                  13.70445
                ],
                [
                  101.08664,
                  13.70817
                ],
                [
                  101.08449,
                  13.71263
                ],
                [
                  101.08202,
                  13.71373
                ],
                [
                  101.08371,
                  13.72166
                ],
                [
                  101.08303,
                  13.72459
                ],
                [
                  101.08106,
                  13.7265
                ],
                [
                  101.08073,
                  13.73173
                ],
                [
                  101.0765,
                  13.73411
                ],
                [
                  101.07541,
                  13.73809
                ],
                [
                  101.0773,
                  13.74025
                ],
                [
                  101.07733,
                  13.74194
                ],
                [
                  101.07471,
                  13.74427
                ],
                [
                  101.07635,
                  13.74746
                ],
                [
                  101.0735,
                  13.75484
                ],
                [
                  101.06585,
                  13.75917
                ],
                [
                  101.06227,
                  13.76392
                ],
                [
                  101.05867,
                  13.7647
                ],
                [
                  101.0578,
                  13.76852
                ],
                [
                  101.04692,
                  13.77252
                ],
                [
                  101.0447,
                  13.77484
                ],
                [
                  101.04172,
                  13.77286
                ],
                [
                  101.0392,
                  13.77342
                ],
                [
                  101.03813,
                  13.77708
                ],
                [
                  101.03412,
                  13.77939
                ],
                [
                  101.03813,
                  13.78857
                ],
                [
                  101.04464,
                  13.79054
                ],
                [
                  101.04858,
                  13.78854
                ],
                [
                  101.0512,
                  13.7886
                ],
                [
                  101.06352,
                  13.79681
                ],
                [
                  101.06595,
                  13.79274
                ],
                [
                  101.06972,
                  13.78935
                ],
                [
                  101.0713,
                  13.78358
                ],
                [
                  101.07005,
                  13.77585
                ],
                [
                  101.07779,
                  13.76274
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200204",
          "tambon": "ต.หนองซ้ำซาก",
          "amphoe": "อ.บ้านบึง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์ป่าอ่างช้างน้ำ",
          "latitude": 13.2743,
          "longitude": 101.082,
          "sum_rainfall_mm": 176.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.08544,
                  13.3296
                ],
                [
                  101.08714,
                  13.33068
                ],
                [
                  101.08877,
                  13.32905
                ],
                [
                  101.09062,
                  13.3292
                ],
                [
                  101.09183,
                  13.32736
                ],
                [
                  101.09173,
                  13.32198
                ],
                [
                  101.08988,
                  13.31924
                ],
                [
                  101.09225,
                  13.31692
                ],
                [
                  101.09178,
                  13.31386
                ],
                [
                  101.09394,
                  13.30986
                ],
                [
                  101.09368,
                  13.30812
                ],
                [
                  101.08914,
                  13.30285
                ],
                [
                  101.08472,
                  13.29204
                ],
                [
                  101.08076,
                  13.28613
                ],
                [
                  101.07243,
                  13.28476
                ],
                [
                  101.06591,
                  13.28598
                ],
                [
                  101.07389,
                  13.29387
                ],
                [
                  101.0718,
                  13.29718
                ],
                [
                  101.07337,
                  13.30882
                ],
                [
                  101.068,
                  13.31981
                ],
                [
                  101.0677,
                  13.32683
                ],
                [
                  101.06494,
                  13.32838
                ],
                [
                  101.0578,
                  13.32947
                ],
                [
                  101.05765,
                  13.3314
                ],
                [
                  101.05942,
                  13.33476
                ],
                [
                  101.05298,
                  13.33846
                ],
                [
                  101.05484,
                  13.34325
                ],
                [
                  101.05448,
                  13.3487
                ],
                [
                  101.05307,
                  13.34974
                ],
                [
                  101.05076,
                  13.34866
                ],
                [
                  101.04081,
                  13.35801
                ],
                [
                  101.04496,
                  13.36236
                ],
                [
                  101.05256,
                  13.35713
                ],
                [
                  101.06317,
                  13.3626
                ],
                [
                  101.06716,
                  13.36732
                ],
                [
                  101.07443,
                  13.36253
                ],
                [
                  101.08002,
                  13.36158
                ],
                [
                  101.07975,
                  13.35615
                ],
                [
                  101.0778,
                  13.35357
                ],
                [
                  101.07923,
                  13.35178
                ],
                [
                  101.07939,
                  13.34519
                ],
                [
                  101.07796,
                  13.33744
                ],
                [
                  101.07975,
                  13.3358
                ],
                [
                  101.0797,
                  13.33327
                ],
                [
                  101.08544,
                  13.3296
                ]
              ]
            ]
          }
        },
        {
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
          "latitude": 13.240835,
          "longitude": 101.04208,
          "sum_rainfall_mm": 277.5999999999999,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.02342,
                  13.28177
                ],
                [
                  101.02637,
                  13.27804
                ],
                [
                  101.03317,
                  13.27328
                ],
                [
                  101.03935,
                  13.27179
                ],
                [
                  101.04605,
                  13.26782
                ],
                [
                  101.05245,
                  13.26937
                ],
                [
                  101.0566,
                  13.26722
                ],
                [
                  101.05646,
                  13.2637
                ],
                [
                  101.05764,
                  13.26097
                ],
                [
                  101.05672,
                  13.25872
                ],
                [
                  101.05854,
                  13.2566
                ],
                [
                  101.05881,
                  13.25429
                ],
                [
                  101.06202,
                  13.25281
                ],
                [
                  101.06036,
                  13.24642
                ],
                [
                  101.06262,
                  13.23792
                ],
                [
                  101.0598,
                  13.23761
                ],
                [
                  101.05901,
                  13.23612
                ],
                [
                  101.06311,
                  13.22174
                ],
                [
                  101.06855,
                  13.21846
                ],
                [
                  101.07469,
                  13.21833
                ],
                [
                  101.07487,
                  13.21335
                ],
                [
                  101.06988,
                  13.20735
                ],
                [
                  101.07047,
                  13.20282
                ],
                [
                  101.07624,
                  13.20015
                ],
                [
                  101.08068,
                  13.19249
                ],
                [
                  101.0835,
                  13.19044
                ],
                [
                  101.07893,
                  13.18641
                ],
                [
                  101.07647,
                  13.17787
                ],
                [
                  101.07391,
                  13.17488
                ],
                [
                  101.07253,
                  13.16384
                ],
                [
                  101.06999,
                  13.1603
                ],
                [
                  101.06845,
                  13.15935
                ],
                [
                  101.0655,
                  13.15965
                ],
                [
                  101.04836,
                  13.16692
                ],
                [
                  101.02312,
                  13.16795
                ],
                [
                  100.99883,
                  13.1795
                ],
                [
                  100.99481,
                  13.17727
                ],
                [
                  100.98935,
                  13.1763
                ],
                [
                  100.98524,
                  13.17088
                ],
                [
                  100.98229,
                  13.17578
                ],
                [
                  100.97946,
                  13.17595
                ],
                [
                  100.97056,
                  13.16487
                ],
                [
                  100.97042,
                  13.16331
                ],
                [
                  100.96924,
                  13.16568
                ],
                [
                  100.9672,
                  13.1656
                ],
                [
                  100.96431,
                  13.16923
                ],
                [
                  100.95921,
                  13.17031
                ],
                [
                  100.95507,
                  13.17318
                ],
                [
                  100.9483,
                  13.17517
                ],
                [
                  100.9439,
                  13.17848
                ],
                [
                  100.93201,
                  13.18304
                ],
                [
                  100.93164,
                  13.18482
                ],
                [
                  100.92929,
                  13.18549
                ],
                [
                  100.92973,
                  13.19115
                ],
                [
                  100.93407,
                  13.19476
                ],
                [
                  100.93634,
                  13.20342
                ],
                [
                  100.93422,
                  13.21106
                ],
                [
                  100.9362,
                  13.21465
                ],
                [
                  100.93612,
                  13.21944
                ],
                [
                  100.93136,
                  13.2378
                ],
                [
                  100.93868,
                  13.2397
                ],
                [
                  100.9554,
                  13.24
                ],
                [
                  100.96228,
                  13.24163
                ],
                [
                  100.9694,
                  13.24732
                ],
                [
                  100.97343,
                  13.25266
                ],
                [
                  100.97367,
                  13.25494
                ],
                [
                  100.97742,
                  13.25745
                ],
                [
                  100.98265,
                  13.26878
                ],
                [
                  100.98993,
                  13.27031
                ],
                [
                  100.99417,
                  13.2674
                ],
                [
                  101.00594,
                  13.26941
                ],
                [
                  101.014,
                  13.27405
                ],
                [
                  101.02342,
                  13.28177
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230303",
          "tambon": "ต.วังตะเคียน",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองโสน",
          "latitude": 12.513374,
          "longitude": 102.50484,
          "sum_rainfall_mm": 254.60000000000002,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.55166,
                  12.50206
                ],
                [
                  102.55605,
                  12.49277
                ],
                [
                  102.55643,
                  12.48535
                ],
                [
                  102.56063,
                  12.48417
                ],
                [
                  102.5627,
                  12.48031
                ],
                [
                  102.56253,
                  12.47809
                ],
                [
                  102.55946,
                  12.4749
                ],
                [
                  102.55324,
                  12.47324
                ],
                [
                  102.5534,
                  12.46784
                ],
                [
                  102.55059,
                  12.46521
                ],
                [
                  102.55151,
                  12.46285
                ],
                [
                  102.54887,
                  12.46242
                ],
                [
                  102.54972,
                  12.45822
                ],
                [
                  102.5469,
                  12.45767
                ],
                [
                  102.53976,
                  12.45043
                ],
                [
                  102.53715,
                  12.45028
                ],
                [
                  102.53694,
                  12.44805
                ],
                [
                  102.53851,
                  12.44568
                ],
                [
                  102.53649,
                  12.44473
                ],
                [
                  102.53573,
                  12.44294
                ],
                [
                  102.53378,
                  12.44352
                ],
                [
                  102.5293,
                  12.44131
                ],
                [
                  102.52773,
                  12.44217
                ],
                [
                  102.52803,
                  12.43839
                ],
                [
                  102.52706,
                  12.43817
                ],
                [
                  102.52583,
                  12.44041
                ],
                [
                  102.52348,
                  12.43619
                ],
                [
                  102.52195,
                  12.43754
                ],
                [
                  102.52297,
                  12.43314
                ],
                [
                  102.51828,
                  12.4332
                ],
                [
                  102.50733,
                  12.42565
                ],
                [
                  102.50382,
                  12.42835
                ],
                [
                  102.49678,
                  12.42732
                ],
                [
                  102.49354,
                  12.42214
                ],
                [
                  102.4855,
                  12.41691
                ],
                [
                  102.48187,
                  12.41297
                ],
                [
                  102.47929,
                  12.4122
                ],
                [
                  102.47408,
                  12.40721
                ],
                [
                  102.46965,
                  12.40518
                ],
                [
                  102.46196,
                  12.40665
                ],
                [
                  102.46383,
                  12.41178
                ],
                [
                  102.45709,
                  12.42106
                ],
                [
                  102.45281,
                  12.42454
                ],
                [
                  102.45053,
                  12.42467
                ],
                [
                  102.44731,
                  12.4231
                ],
                [
                  102.44369,
                  12.41937
                ],
                [
                  102.44163,
                  12.42017
                ],
                [
                  102.43918,
                  12.4238
                ],
                [
                  102.43544,
                  12.42335
                ],
                [
                  102.43364,
                  12.43404
                ],
                [
                  102.44052,
                  12.43846
                ],
                [
                  102.43553,
                  12.44099
                ],
                [
                  102.4361,
                  12.44358
                ],
                [
                  102.44413,
                  12.44364
                ],
                [
                  102.44838,
                  12.43854
                ],
                [
                  102.45249,
                  12.44429
                ],
                [
                  102.45552,
                  12.43926
                ],
                [
                  102.45868,
                  12.44454
                ],
                [
                  102.46096,
                  12.44386
                ],
                [
                  102.46527,
                  12.44825
                ],
                [
                  102.46976,
                  12.44978
                ],
                [
                  102.46917,
                  12.45336
                ],
                [
                  102.47258,
                  12.45246
                ],
                [
                  102.47353,
                  12.45687
                ],
                [
                  102.47774,
                  12.4556
                ],
                [
                  102.48069,
                  12.45659
                ],
                [
                  102.47558,
                  12.46751
                ],
                [
                  102.47737,
                  12.46961
                ],
                [
                  102.47714,
                  12.4746
                ],
                [
                  102.47792,
                  12.47601
                ],
                [
                  102.48842,
                  12.48211
                ],
                [
                  102.48611,
                  12.48475
                ],
                [
                  102.48584,
                  12.48934
                ],
                [
                  102.48161,
                  12.48946
                ],
                [
                  102.48068,
                  12.49119
                ],
                [
                  102.48418,
                  12.49317
                ],
                [
                  102.48647,
                  12.49805
                ],
                [
                  102.49022,
                  12.499
                ],
                [
                  102.49051,
                  12.50211
                ],
                [
                  102.49314,
                  12.50337
                ],
                [
                  102.49522,
                  12.50627
                ],
                [
                  102.49543,
                  12.51116
                ],
                [
                  102.49904,
                  12.51258
                ],
                [
                  102.50304,
                  12.51176
                ],
                [
                  102.50649,
                  12.51534
                ],
                [
                  102.50647,
                  12.51152
                ],
                [
                  102.50865,
                  12.51239
                ],
                [
                  102.51044,
                  12.51057
                ],
                [
                  102.5127,
                  12.51035
                ],
                [
                  102.51415,
                  12.51341
                ],
                [
                  102.51933,
                  12.51082
                ],
                [
                  102.52188,
                  12.51296
                ],
                [
                  102.52317,
                  12.51267
                ],
                [
                  102.52313,
                  12.5142
                ],
                [
                  102.52609,
                  12.5127
                ],
                [
                  102.52833,
                  12.5162
                ],
                [
                  102.529,
                  12.51307
                ],
                [
                  102.53158,
                  12.51453
                ],
                [
                  102.53512,
                  12.51133
                ],
                [
                  102.53711,
                  12.51253
                ],
                [
                  102.53981,
                  12.51087
                ],
                [
                  102.54184,
                  12.51223
                ],
                [
                  102.54462,
                  12.51129
                ],
                [
                  102.54479,
                  12.50881
                ],
                [
                  102.54736,
                  12.50872
                ],
                [
                  102.54804,
                  12.50628
                ],
                [
                  102.55054,
                  12.5053
                ],
                [
                  102.55166,
                  12.50206
                ]
              ]
            ]
          }
        },
        {
          "geocode": "230305",
          "tambon": "ต.สะตอ",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.สะตอ",
          "latitude": 12.53639,
          "longitude": 102.44429,
          "sum_rainfall_mm": 319.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.42127,
                  12.6152
                ],
                [
                  102.42638,
                  12.61499
                ],
                [
                  102.42933,
                  12.61168
                ],
                [
                  102.43033,
                  12.60654
                ],
                [
                  102.43168,
                  12.60509
                ],
                [
                  102.44231,
                  12.60501
                ],
                [
                  102.4435,
                  12.58455
                ],
                [
                  102.45828,
                  12.57365
                ],
                [
                  102.4688,
                  12.55937
                ],
                [
                  102.46939,
                  12.54703
                ],
                [
                  102.47451,
                  12.54331
                ],
                [
                  102.47874,
                  12.53783
                ],
                [
                  102.48414,
                  12.52297
                ],
                [
                  102.48483,
                  12.50893
                ],
                [
                  102.48368,
                  12.50367
                ],
                [
                  102.48164,
                  12.50066
                ],
                [
                  102.47099,
                  12.49996
                ],
                [
                  102.46757,
                  12.50203
                ],
                [
                  102.45475,
                  12.49455
                ],
                [
                  102.44958,
                  12.49559
                ],
                [
                  102.44615,
                  12.4906
                ],
                [
                  102.44383,
                  12.49005
                ],
                [
                  102.43967,
                  12.49195
                ],
                [
                  102.43848,
                  12.49451
                ],
                [
                  102.43516,
                  12.4968
                ],
                [
                  102.42446,
                  12.49823
                ],
                [
                  102.42179,
                  12.50133
                ],
                [
                  102.41776,
                  12.50369
                ],
                [
                  102.41539,
                  12.50333
                ],
                [
                  102.41203,
                  12.50018
                ],
                [
                  102.40668,
                  12.50081
                ],
                [
                  102.40457,
                  12.50584
                ],
                [
                  102.40349,
                  12.50627
                ],
                [
                  102.40412,
                  12.50811
                ],
                [
                  102.40316,
                  12.51002
                ],
                [
                  102.40081,
                  12.50927
                ],
                [
                  102.39859,
                  12.51003
                ],
                [
                  102.39813,
                  12.50807
                ],
                [
                  102.39581,
                  12.51086
                ],
                [
                  102.39597,
                  12.51229
                ],
                [
                  102.40203,
                  12.51536
                ],
                [
                  102.40756,
                  12.51519
                ],
                [
                  102.40969,
                  12.51648
                ],
                [
                  102.41218,
                  12.51957
                ],
                [
                  102.41143,
                  12.52185
                ],
                [
                  102.4132,
                  12.52495
                ],
                [
                  102.41294,
                  12.52754
                ],
                [
                  102.41227,
                  12.52901
                ],
                [
                  102.40784,
                  12.53173
                ],
                [
                  102.4082,
                  12.53704
                ],
                [
                  102.40642,
                  12.54294
                ],
                [
                  102.39849,
                  12.54481
                ],
                [
                  102.39882,
                  12.5533
                ],
                [
                  102.39781,
                  12.55509
                ],
                [
                  102.39422,
                  12.55725
                ],
                [
                  102.39136,
                  12.56159
                ],
                [
                  102.39107,
                  12.56478
                ],
                [
                  102.38744,
                  12.57112
                ],
                [
                  102.38866,
                  12.57314
                ],
                [
                  102.38161,
                  12.57708
                ],
                [
                  102.38517,
                  12.58187
                ],
                [
                  102.38776,
                  12.57946
                ],
                [
                  102.3877,
                  12.57707
                ],
                [
                  102.39015,
                  12.57766
                ],
                [
                  102.3905,
                  12.57653
                ],
                [
                  102.39218,
                  12.57662
                ],
                [
                  102.39234,
                  12.5749
                ],
                [
                  102.39655,
                  12.57409
                ],
                [
                  102.39615,
                  12.57161
                ],
                [
                  102.39785,
                  12.57048
                ],
                [
                  102.39708,
                  12.56932
                ],
                [
                  102.40173,
                  12.56746
                ],
                [
                  102.40497,
                  12.56795
                ],
                [
                  102.40838,
                  12.57037
                ],
                [
                  102.40908,
                  12.56945
                ],
                [
                  102.41086,
                  12.57029
                ],
                [
                  102.41417,
                  12.56977
                ],
                [
                  102.41677,
                  12.56839
                ],
                [
                  102.4165,
                  12.57157
                ],
                [
                  102.41907,
                  12.57137
                ],
                [
                  102.4196,
                  12.57063
                ],
                [
                  102.41855,
                  12.56992
                ],
                [
                  102.41962,
                  12.5692
                ],
                [
                  102.42264,
                  12.56988
                ],
                [
                  102.42364,
                  12.57198
                ],
                [
                  102.42323,
                  12.57358
                ],
                [
                  102.41883,
                  12.57668
                ],
                [
                  102.41906,
                  12.57943
                ],
                [
                  102.41622,
                  12.57912
                ],
                [
                  102.4155,
                  12.58178
                ],
                [
                  102.41356,
                  12.58235
                ],
                [
                  102.41413,
                  12.58358
                ],
                [
                  102.41326,
                  12.58474
                ],
                [
                  102.40998,
                  12.58693
                ],
                [
                  102.40761,
                  12.58619
                ],
                [
                  102.40647,
                  12.58955
                ],
                [
                  102.40319,
                  12.59013
                ],
                [
                  102.39991,
                  12.59386
                ],
                [
                  102.39991,
                  12.59608
                ],
                [
                  102.39662,
                  12.5994
                ],
                [
                  102.39499,
                  12.59866
                ],
                [
                  102.39457,
                  12.60072
                ],
                [
                  102.39232,
                  12.60195
                ],
                [
                  102.39125,
                  12.60488
                ],
                [
                  102.38921,
                  12.60579
                ],
                [
                  102.38841,
                  12.60407
                ],
                [
                  102.3875,
                  12.60426
                ],
                [
                  102.38874,
                  12.60724
                ],
                [
                  102.38823,
                  12.61002
                ],
                [
                  102.3921,
                  12.60992
                ],
                [
                  102.39175,
                  12.60776
                ],
                [
                  102.39409,
                  12.60964
                ],
                [
                  102.39651,
                  12.60856
                ],
                [
                  102.39753,
                  12.61051
                ],
                [
                  102.39601,
                  12.61207
                ],
                [
                  102.39612,
                  12.61448
                ],
                [
                  102.39794,
                  12.61594
                ],
                [
                  102.40087,
                  12.61549
                ],
                [
                  102.39989,
                  12.61739
                ],
                [
                  102.40098,
                  12.61883
                ],
                [
                  102.39933,
                  12.62234
                ],
                [
                  102.39711,
                  12.62236
                ],
                [
                  102.39663,
                  12.62796
                ],
                [
                  102.39168,
                  12.62991
                ],
                [
                  102.39005,
                  12.63261
                ],
                [
                  102.39359,
                  12.63941
                ],
                [
                  102.38992,
                  12.64514
                ],
                [
                  102.40376,
                  12.64181
                ],
                [
                  102.40527,
                  12.63475
                ],
                [
                  102.41185,
                  12.62577
                ],
                [
                  102.41381,
                  12.6201
                ],
                [
                  102.42127,
                  12.6152
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
          "sum_rainfall_mm": 199.20000000000005,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองสะตอ",
          "latitude": 12.5973,
          "longitude": 102.608,
          "sum_rainfall_mm": 192.40000000000003,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "250212",
          "tambon": "ต.นาแขม",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.นาแขม",
          "latitude": 14.04255,
          "longitude": 101.72051,
          "sum_rainfall_mm": 257.6,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.74243,
                  14.08799
                ],
                [
                  101.75045,
                  14.08732
                ],
                [
                  101.752,
                  14.08622
                ],
                [
                  101.74909,
                  14.08183
                ],
                [
                  101.74417,
                  14.08216
                ],
                [
                  101.7441,
                  14.07705
                ],
                [
                  101.74737,
                  14.07319
                ],
                [
                  101.75476,
                  14.06877
                ],
                [
                  101.75509,
                  14.0666
                ],
                [
                  101.75334,
                  14.06437
                ],
                [
                  101.74732,
                  14.06426
                ],
                [
                  101.74881,
                  14.05861
                ],
                [
                  101.74778,
                  14.05792
                ],
                [
                  101.74427,
                  14.05948
                ],
                [
                  101.74321,
                  14.05385
                ],
                [
                  101.74471,
                  14.04759
                ],
                [
                  101.74817,
                  14.04519
                ],
                [
                  101.75013,
                  14.0465
                ],
                [
                  101.75351,
                  14.04224
                ],
                [
                  101.75058,
                  14.04028
                ],
                [
                  101.75349,
                  14.03761
                ],
                [
                  101.7532,
                  14.03509
                ],
                [
                  101.75565,
                  14.03494
                ],
                [
                  101.75582,
                  14.0379
                ],
                [
                  101.75662,
                  14.03576
                ],
                [
                  101.75907,
                  14.03397
                ],
                [
                  101.75658,
                  14.03031
                ],
                [
                  101.75905,
                  14.02677
                ],
                [
                  101.75513,
                  14.02516
                ],
                [
                  101.75266,
                  14.02215
                ],
                [
                  101.74777,
                  14.02181
                ],
                [
                  101.74716,
                  14.02031
                ],
                [
                  101.74941,
                  14.01632
                ],
                [
                  101.74926,
                  14.01391
                ],
                [
                  101.74576,
                  14.01111
                ],
                [
                  101.74562,
                  14.01403
                ],
                [
                  101.74434,
                  14.0145
                ],
                [
                  101.74201,
                  14.00918
                ],
                [
                  101.73743,
                  14.00903
                ],
                [
                  101.73895,
                  14.00587
                ],
                [
                  101.73821,
                  14.0044
                ],
                [
                  101.73343,
                  14.00512
                ],
                [
                  101.73049,
                  14.0036
                ],
                [
                  101.7284,
                  14.00404
                ],
                [
                  101.72736,
                  14.00113
                ],
                [
                  101.72399,
                  14.00015
                ],
                [
                  101.72466,
                  13.99563
                ],
                [
                  101.72226,
                  13.99217
                ],
                [
                  101.72055,
                  13.99221
                ],
                [
                  101.71889,
                  13.99566
                ],
                [
                  101.71429,
                  13.99904
                ],
                [
                  101.71436,
                  13.9941
                ],
                [
                  101.71309,
                  13.99403
                ],
                [
                  101.70895,
                  13.99885
                ],
                [
                  101.71313,
                  14.00526
                ],
                [
                  101.71066,
                  14.02529
                ],
                [
                  101.71431,
                  14.03779
                ],
                [
                  101.71733,
                  14.04082
                ],
                [
                  101.71232,
                  14.04222
                ],
                [
                  101.70811,
                  14.04488
                ],
                [
                  101.70671,
                  14.05166
                ],
                [
                  101.70146,
                  14.05671
                ],
                [
                  101.70254,
                  14.05982
                ],
                [
                  101.6976,
                  14.06006
                ],
                [
                  101.69187,
                  14.0669
                ],
                [
                  101.68791,
                  14.07855
                ],
                [
                  101.68301,
                  14.08573
                ],
                [
                  101.68309,
                  14.09457
                ],
                [
                  101.68439,
                  14.09677
                ],
                [
                  101.68769,
                  14.09852
                ],
                [
                  101.6913,
                  14.09951
                ],
                [
                  101.69548,
                  14.09902
                ],
                [
                  101.69843,
                  14.10181
                ],
                [
                  101.70174,
                  14.1022
                ],
                [
                  101.704,
                  14.10118
                ],
                [
                  101.70475,
                  14.09713
                ],
                [
                  101.70742,
                  14.09395
                ],
                [
                  101.71514,
                  14.09261
                ],
                [
                  101.72069,
                  14.08911
                ],
                [
                  101.72063,
                  14.0848
                ],
                [
                  101.72304,
                  14.08176
                ],
                [
                  101.72589,
                  14.08042
                ],
                [
                  101.73568,
                  14.08251
                ],
                [
                  101.74243,
                  14.08799
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250306",
          "tambon": "ต.บุพราหมณ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บุพราหมณ์",
          "latitude": 14.20791,
          "longitude": 101.90556,
          "sum_rainfall_mm": 254.59999999999997,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.83871,
                  14.35506
                ],
                [
                  101.83912,
                  14.35227
                ],
                [
                  101.84735,
                  14.34949
                ],
                [
                  101.85901,
                  14.34165
                ],
                [
                  101.87567,
                  14.32425
                ],
                [
                  101.88789,
                  14.32264
                ],
                [
                  101.88889,
                  14.31919
                ],
                [
                  101.89249,
                  14.322
                ],
                [
                  101.89277,
                  14.32789
                ],
                [
                  101.89431,
                  14.33042
                ],
                [
                  101.9023,
                  14.32688
                ],
                [
                  101.91011,
                  14.32573
                ],
                [
                  101.91758,
                  14.3317
                ],
                [
                  101.91967,
                  14.33008
                ],
                [
                  101.92184,
                  14.33081
                ],
                [
                  101.92475,
                  14.32843
                ],
                [
                  101.92827,
                  14.32857
                ],
                [
                  101.92971,
                  14.32761
                ],
                [
                  101.9303,
                  14.32435
                ],
                [
                  101.93415,
                  14.32025
                ],
                [
                  101.93768,
                  14.31024
                ],
                [
                  101.94337,
                  14.30245
                ],
                [
                  101.93942,
                  14.29748
                ],
                [
                  101.92958,
                  14.29081
                ],
                [
                  101.92858,
                  14.28693
                ],
                [
                  101.92904,
                  14.28394
                ],
                [
                  101.93287,
                  14.28006
                ],
                [
                  101.93706,
                  14.27068
                ],
                [
                  101.94449,
                  14.24767
                ],
                [
                  101.94783,
                  14.24568
                ],
                [
                  101.95855,
                  14.24489
                ],
                [
                  101.97197,
                  14.23944
                ],
                [
                  101.98178,
                  14.23771
                ],
                [
                  101.98128,
                  14.23589
                ],
                [
                  101.97856,
                  14.23361
                ],
                [
                  101.97315,
                  14.23027
                ],
                [
                  101.9671,
                  14.22878
                ],
                [
                  101.96668,
                  14.2275
                ],
                [
                  101.97582,
                  14.22434
                ],
                [
                  101.98907,
                  14.21763
                ],
                [
                  101.99619,
                  14.21169
                ],
                [
                  101.99409,
                  14.2104
                ],
                [
                  101.99001,
                  14.21301
                ],
                [
                  101.98642,
                  14.21179
                ],
                [
                  101.97896,
                  14.20191
                ],
                [
                  101.97732,
                  14.19767
                ],
                [
                  101.97361,
                  14.19372
                ],
                [
                  101.97181,
                  14.1934
                ],
                [
                  101.97147,
                  14.19126
                ],
                [
                  101.97299,
                  14.18774
                ],
                [
                  101.97225,
                  14.18299
                ],
                [
                  101.97412,
                  14.18008
                ],
                [
                  101.97469,
                  14.17249
                ],
                [
                  101.97088,
                  14.17119
                ],
                [
                  101.96874,
                  14.17278
                ],
                [
                  101.9643,
                  14.17312
                ],
                [
                  101.94204,
                  14.18663
                ],
                [
                  101.9374,
                  14.18722
                ],
                [
                  101.93404,
                  14.18612
                ],
                [
                  101.93329,
                  14.1884
                ],
                [
                  101.92848,
                  14.18935
                ],
                [
                  101.92124,
                  14.18545
                ],
                [
                  101.9199,
                  14.18271
                ],
                [
                  101.92376,
                  14.18187
                ],
                [
                  101.92695,
                  14.18345
                ],
                [
                  101.92844,
                  14.18222
                ],
                [
                  101.9279,
                  14.17927
                ],
                [
                  101.92928,
                  14.1764
                ],
                [
                  101.93282,
                  14.17635
                ],
                [
                  101.93623,
                  14.17452
                ],
                [
                  101.93876,
                  14.17654
                ],
                [
                  101.93522,
                  14.17048
                ],
                [
                  101.93354,
                  14.17068
                ],
                [
                  101.93244,
                  14.17224
                ],
                [
                  101.93077,
                  14.17193
                ],
                [
                  101.92823,
                  14.16711
                ],
                [
                  101.92422,
                  14.16459
                ],
                [
                  101.92172,
                  14.16494
                ],
                [
                  101.91892,
                  14.16195
                ],
                [
                  101.91511,
                  14.16543
                ],
                [
                  101.91297,
                  14.16429
                ],
                [
                  101.91059,
                  14.16475
                ],
                [
                  101.90855,
                  14.16647
                ],
                [
                  101.90821,
                  14.16921
                ],
                [
                  101.90368,
                  14.16766
                ],
                [
                  101.89626,
                  14.16749
                ],
                [
                  101.89401,
                  14.17005
                ],
                [
                  101.8937,
                  14.16738
                ],
                [
                  101.88984,
                  14.16619
                ],
                [
                  101.88813,
                  14.16159
                ],
                [
                  101.88657,
                  14.16207
                ],
                [
                  101.88441,
                  14.16093
                ],
                [
                  101.8847,
                  14.1653
                ],
                [
                  101.88223,
                  14.16745
                ],
                [
                  101.87912,
                  14.1728
                ],
                [
                  101.87217,
                  14.17973
                ],
                [
                  101.87244,
                  14.18476
                ],
                [
                  101.87044,
                  14.18543
                ],
                [
                  101.8705,
                  14.19051
                ],
                [
                  101.86737,
                  14.19234
                ],
                [
                  101.86402,
                  14.19836
                ],
                [
                  101.85917,
                  14.19646
                ],
                [
                  101.85763,
                  14.1966
                ],
                [
                  101.85662,
                  14.1981
                ],
                [
                  101.8587,
                  14.20502
                ],
                [
                  101.85618,
                  14.21199
                ],
                [
                  101.85535,
                  14.22109
                ],
                [
                  101.85178,
                  14.22541
                ],
                [
                  101.8542,
                  14.22754
                ],
                [
                  101.85001,
                  14.23584
                ],
                [
                  101.85063,
                  14.24178
                ],
                [
                  101.84453,
                  14.24536
                ],
                [
                  101.84842,
                  14.25024
                ],
                [
                  101.84897,
                  14.25706
                ],
                [
                  101.83356,
                  14.2596
                ],
                [
                  101.81888,
                  14.26045
                ],
                [
                  101.81862,
                  14.26315
                ],
                [
                  101.81732,
                  14.26401
                ],
                [
                  101.8083,
                  14.26603
                ],
                [
                  101.795,
                  14.2712
                ],
                [
                  101.78014,
                  14.28105
                ],
                [
                  101.76809,
                  14.29223
                ],
                [
                  101.74209,
                  14.30753
                ],
                [
                  101.74814,
                  14.31439
                ],
                [
                  101.74788,
                  14.31982
                ],
                [
                  101.75045,
                  14.32465
                ],
                [
                  101.74797,
                  14.3307
                ],
                [
                  101.74893,
                  14.3344
                ],
                [
                  101.74639,
                  14.33949
                ],
                [
                  101.7475,
                  14.34495
                ],
                [
                  101.74938,
                  14.34822
                ],
                [
                  101.75399,
                  14.3445
                ],
                [
                  101.76084,
                  14.34309
                ],
                [
                  101.77055,
                  14.34812
                ],
                [
                  101.77433,
                  14.34699
                ],
                [
                  101.77464,
                  14.34973
                ],
                [
                  101.78085,
                  14.35206
                ],
                [
                  101.7797,
                  14.35734
                ],
                [
                  101.7847,
                  14.35701
                ],
                [
                  101.78881,
                  14.35974
                ],
                [
                  101.79281,
                  14.35725
                ],
                [
                  101.79562,
                  14.35842
                ],
                [
                  101.80231,
                  14.35434
                ],
                [
                  101.80774,
                  14.34847
                ],
                [
                  101.812,
                  14.34765
                ],
                [
                  101.81779,
                  14.3505
                ],
                [
                  101.82092,
                  14.34989
                ],
                [
                  101.82282,
                  14.35068
                ],
                [
                  101.82808,
                  14.35634
                ],
                [
                  101.82959,
                  14.36275
                ],
                [
                  101.83541,
                  14.36335
                ],
                [
                  101.84018,
                  14.36612
                ],
                [
                  101.84239,
                  14.36417
                ],
                [
                  101.83921,
                  14.3605
                ],
                [
                  101.83871,
                  14.35506
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250707",
          "tambon": "ต.บุฝ้าย",
          "amphoe": "อ.ประจันตคาม",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๑๐ (ประจันตคาม)",
          "latitude": 14.181167,
          "longitude": 101.592064,
          "sum_rainfall_mm": 195.00000000000006,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.62234,
                  14.42687
                ],
                [
                  101.61829,
                  14.41942
                ],
                [
                  101.61984,
                  14.4156
                ],
                [
                  101.62664,
                  14.41331
                ],
                [
                  101.62917,
                  14.40761
                ],
                [
                  101.6313,
                  14.40586
                ],
                [
                  101.64101,
                  14.40769
                ],
                [
                  101.64643,
                  14.40551
                ],
                [
                  101.64919,
                  14.40306
                ],
                [
                  101.64707,
                  14.39555
                ],
                [
                  101.64905,
                  14.39245
                ],
                [
                  101.64764,
                  14.38976
                ],
                [
                  101.64849,
                  14.38378
                ],
                [
                  101.64633,
                  14.38104
                ],
                [
                  101.64291,
                  14.37971
                ],
                [
                  101.63961,
                  14.37492
                ],
                [
                  101.64338,
                  14.36363
                ],
                [
                  101.6418,
                  14.35871
                ],
                [
                  101.65119,
                  14.35614
                ],
                [
                  101.65245,
                  14.35415
                ],
                [
                  101.65101,
                  14.34213
                ],
                [
                  101.64691,
                  14.33597
                ],
                [
                  101.64765,
                  14.33477
                ],
                [
                  101.65081,
                  14.33391
                ],
                [
                  101.65252,
                  14.33044
                ],
                [
                  101.65573,
                  14.32871
                ],
                [
                  101.65663,
                  14.32685
                ],
                [
                  101.65691,
                  14.32421
                ],
                [
                  101.65497,
                  14.32242
                ],
                [
                  101.65668,
                  14.31739
                ],
                [
                  101.6514,
                  14.31415
                ],
                [
                  101.65267,
                  14.30958
                ],
                [
                  101.65565,
                  14.30674
                ],
                [
                  101.65498,
                  14.304
                ],
                [
                  101.65738,
                  14.30311
                ],
                [
                  101.6575,
                  14.30685
                ],
                [
                  101.65992,
                  14.30695
                ],
                [
                  101.66058,
                  14.30945
                ],
                [
                  101.66251,
                  14.30986
                ],
                [
                  101.66853,
                  14.30327
                ],
                [
                  101.66928,
                  14.30504
                ],
                [
                  101.67034,
                  14.30493
                ],
                [
                  101.67288,
                  14.29856
                ],
                [
                  101.67707,
                  14.30064
                ],
                [
                  101.67919,
                  14.29879
                ],
                [
                  101.67876,
                  14.2964
                ],
                [
                  101.6747,
                  14.29313
                ],
                [
                  101.67861,
                  14.29186
                ],
                [
                  101.68184,
                  14.28114
                ],
                [
                  101.68036,
                  14.27958
                ],
                [
                  101.67389,
                  14.278
                ],
                [
                  101.67376,
                  14.2711
                ],
                [
                  101.66883,
                  14.25974
                ],
                [
                  101.66902,
                  14.25612
                ],
                [
                  101.66302,
                  14.2458
                ],
                [
                  101.67151,
                  14.23659
                ],
                [
                  101.66897,
                  14.22697
                ],
                [
                  101.67337,
                  14.21764
                ],
                [
                  101.67223,
                  14.21093
                ],
                [
                  101.67509,
                  14.20501
                ],
                [
                  101.6746,
                  14.19955
                ],
                [
                  101.67084,
                  14.19146
                ],
                [
                  101.66884,
                  14.19071
                ],
                [
                  101.66813,
                  14.1922
                ],
                [
                  101.6636,
                  14.19363
                ],
                [
                  101.65758,
                  14.19249
                ],
                [
                  101.6553,
                  14.1886
                ],
                [
                  101.65116,
                  14.1867
                ],
                [
                  101.64618,
                  14.17882
                ],
                [
                  101.6469,
                  14.17523
                ],
                [
                  101.64618,
                  14.17241
                ],
                [
                  101.63909,
                  14.16202
                ],
                [
                  101.63662,
                  14.15427
                ],
                [
                  101.63153,
                  14.15645
                ],
                [
                  101.62419,
                  14.16248
                ],
                [
                  101.62145,
                  14.16333
                ],
                [
                  101.62143,
                  14.16438
                ],
                [
                  101.61237,
                  14.16466
                ],
                [
                  101.61063,
                  14.16346
                ],
                [
                  101.60929,
                  14.16008
                ],
                [
                  101.60737,
                  14.15964
                ],
                [
                  101.59867,
                  14.1612
                ],
                [
                  101.59442,
                  14.16416
                ],
                [
                  101.59302,
                  14.16354
                ],
                [
                  101.59235,
                  14.15692
                ],
                [
                  101.58855,
                  14.15403
                ],
                [
                  101.58101,
                  14.14161
                ],
                [
                  101.58143,
                  14.1376
                ],
                [
                  101.57937,
                  14.13082
                ],
                [
                  101.57527,
                  14.12547
                ],
                [
                  101.56753,
                  14.12197
                ],
                [
                  101.56897,
                  14.11683
                ],
                [
                  101.56793,
                  14.11481
                ],
                [
                  101.56455,
                  14.11223
                ],
                [
                  101.55975,
                  14.11052
                ],
                [
                  101.55204,
                  14.11491
                ],
                [
                  101.55268,
                  14.11693
                ],
                [
                  101.55171,
                  14.12318
                ],
                [
                  101.55303,
                  14.12429
                ],
                [
                  101.55208,
                  14.12646
                ],
                [
                  101.54024,
                  14.1268
                ],
                [
                  101.53779,
                  14.12814
                ],
                [
                  101.53832,
                  14.13027
                ],
                [
                  101.54068,
                  14.13218
                ],
                [
                  101.53906,
                  14.13357
                ],
                [
                  101.54029,
                  14.13752
                ],
                [
                  101.53798,
                  14.13936
                ],
                [
                  101.53804,
                  14.14583
                ],
                [
                  101.53869,
                  14.1515
                ],
                [
                  101.54185,
                  14.16057
                ],
                [
                  101.54149,
                  14.16473
                ],
                [
                  101.54446,
                  14.17044
                ],
                [
                  101.54551,
                  14.17561
                ],
                [
                  101.54464,
                  14.18626
                ],
                [
                  101.5454,
                  14.19447
                ],
                [
                  101.54952,
                  14.20495
                ],
                [
                  101.55473,
                  14.20899
                ],
                [
                  101.54941,
                  14.21667
                ],
                [
                  101.54892,
                  14.22013
                ],
                [
                  101.54603,
                  14.22107
                ],
                [
                  101.54631,
                  14.22593
                ],
                [
                  101.54884,
                  14.23312
                ],
                [
                  101.54152,
                  14.23788
                ],
                [
                  101.53946,
                  14.24187
                ],
                [
                  101.53511,
                  14.24587
                ],
                [
                  101.52929,
                  14.247
                ],
                [
                  101.5275,
                  14.25122
                ],
                [
                  101.52797,
                  14.25306
                ],
                [
                  101.52284,
                  14.25629
                ],
                [
                  101.52315,
                  14.2594
                ],
                [
                  101.51895,
                  14.26587
                ],
                [
                  101.52322,
                  14.27367
                ],
                [
                  101.52405,
                  14.27849
                ],
                [
                  101.52728,
                  14.28085
                ],
                [
                  101.5298,
                  14.30435
                ],
                [
                  101.52908,
                  14.30725
                ],
                [
                  101.52289,
                  14.30969
                ],
                [
                  101.52218,
                  14.31582
                ],
                [
                  101.52758,
                  14.32024
                ],
                [
                  101.52847,
                  14.3237
                ],
                [
                  101.53283,
                  14.33
                ],
                [
                  101.53481,
                  14.33505
                ],
                [
                  101.54514,
                  14.34702
                ],
                [
                  101.54457,
                  14.34973
                ],
                [
                  101.54819,
                  14.35837
                ],
                [
                  101.54943,
                  14.36002
                ],
                [
                  101.55432,
                  14.3609
                ],
                [
                  101.56057,
                  14.37213
                ],
                [
                  101.56206,
                  14.37234
                ],
                [
                  101.57571,
                  14.36568
                ],
                [
                  101.582,
                  14.36632
                ],
                [
                  101.58362,
                  14.36835
                ],
                [
                  101.58723,
                  14.36926
                ],
                [
                  101.58888,
                  14.36764
                ],
                [
                  101.58973,
                  14.36813
                ],
                [
                  101.5896,
                  14.37264
                ],
                [
                  101.58592,
                  14.37375
                ],
                [
                  101.58275,
                  14.38184
                ],
                [
                  101.58417,
                  14.3836
                ],
                [
                  101.59354,
                  14.38574
                ],
                [
                  101.5943,
                  14.38761
                ],
                [
                  101.58479,
                  14.39424
                ],
                [
                  101.58111,
                  14.39499
                ],
                [
                  101.57955,
                  14.39725
                ],
                [
                  101.57967,
                  14.40002
                ],
                [
                  101.57473,
                  14.40268
                ],
                [
                  101.57384,
                  14.40581
                ],
                [
                  101.57416,
                  14.40746
                ],
                [
                  101.57778,
                  14.40883
                ],
                [
                  101.58021,
                  14.41138
                ],
                [
                  101.58493,
                  14.4104
                ],
                [
                  101.58723,
                  14.41135
                ],
                [
                  101.58692,
                  14.41553
                ],
                [
                  101.58787,
                  14.41809
                ],
                [
                  101.58643,
                  14.42134
                ],
                [
                  101.58594,
                  14.42771
                ],
                [
                  101.58392,
                  14.43224
                ],
                [
                  101.58446,
                  14.43822
                ],
                [
                  101.59566,
                  14.4386
                ],
                [
                  101.6016,
                  14.43573
                ],
                [
                  101.60563,
                  14.43641
                ],
                [
                  101.60904,
                  14.43393
                ],
                [
                  101.6213,
                  14.42861
                ],
                [
                  101.62234,
                  14.42687
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250810",
          "tambon": "ต.กรอกสมบูรณ์",
          "amphoe": "อ.ศรีมหาโพธิ",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.กรอกสมบูรณ์",
          "latitude": 13.77716,
          "longitude": 101.65875,
          "sum_rainfall_mm": 228.2,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.62268,
                  13.86137
                ],
                [
                  101.62447,
                  13.85291
                ],
                [
                  101.62115,
                  13.85039
                ],
                [
                  101.61394,
                  13.84928
                ],
                [
                  101.61201,
                  13.84793
                ],
                [
                  101.60993,
                  13.84108
                ],
                [
                  101.61106,
                  13.83517
                ],
                [
                  101.61035,
                  13.83303
                ],
                [
                  101.61283,
                  13.82629
                ],
                [
                  101.61592,
                  13.82544
                ],
                [
                  101.62442,
                  13.81751
                ],
                [
                  101.62573,
                  13.81065
                ],
                [
                  101.6337,
                  13.80565
                ],
                [
                  101.65194,
                  13.8
                ],
                [
                  101.65815,
                  13.7952
                ],
                [
                  101.67077,
                  13.79592
                ],
                [
                  101.67926,
                  13.79464
                ],
                [
                  101.6834,
                  13.79023
                ],
                [
                  101.6916,
                  13.78583
                ],
                [
                  101.69359,
                  13.78211
                ],
                [
                  101.69361,
                  13.77719
                ],
                [
                  101.67514,
                  13.74976
                ],
                [
                  101.6712,
                  13.74008
                ],
                [
                  101.66785,
                  13.73794
                ],
                [
                  101.66342,
                  13.73696
                ],
                [
                  101.65454,
                  13.73823
                ],
                [
                  101.64797,
                  13.74456
                ],
                [
                  101.63903,
                  13.74723
                ],
                [
                  101.64128,
                  13.75577
                ],
                [
                  101.64084,
                  13.75942
                ],
                [
                  101.64534,
                  13.76953
                ],
                [
                  101.6454,
                  13.77801
                ],
                [
                  101.63332,
                  13.78675
                ],
                [
                  101.63343,
                  13.79578
                ],
                [
                  101.62284,
                  13.80269
                ],
                [
                  101.60742,
                  13.82395
                ],
                [
                  101.59943,
                  13.82651
                ],
                [
                  101.59603,
                  13.82885
                ],
                [
                  101.58816,
                  13.84405
                ],
                [
                  101.57947,
                  13.84932
                ],
                [
                  101.57996,
                  13.85526
                ],
                [
                  101.56824,
                  13.86256
                ],
                [
                  101.56792,
                  13.86492
                ],
                [
                  101.57037,
                  13.86834
                ],
                [
                  101.56209,
                  13.87188
                ],
                [
                  101.56157,
                  13.8763
                ],
                [
                  101.56654,
                  13.88494
                ],
                [
                  101.58298,
                  13.89629
                ],
                [
                  101.59023,
                  13.89799
                ],
                [
                  101.60799,
                  13.89885
                ],
                [
                  101.62172,
                  13.90569
                ],
                [
                  101.62657,
                  13.90671
                ],
                [
                  101.62639,
                  13.90538
                ],
                [
                  101.62422,
                  13.9044
                ],
                [
                  101.62352,
                  13.90105
                ],
                [
                  101.62362,
                  13.89453
                ],
                [
                  101.62646,
                  13.88732
                ],
                [
                  101.62425,
                  13.88417
                ],
                [
                  101.62436,
                  13.87839
                ],
                [
                  101.62279,
                  13.8756
                ],
                [
                  101.62369,
                  13.86976
                ],
                [
                  101.62268,
                  13.86137
                ]
              ]
            ]
          }
        },
        {
          "geocode": "210701",
          "tambon": "ต.น้ำเป็น",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
          "latitude": 12.912333,
          "longitude": 101.72454,
          "sum_rainfall_mm": 228.60000000000002,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.74064,
                  12.95809
                ],
                [
                  101.74793,
                  12.94922
                ],
                [
                  101.75128,
                  12.95096
                ],
                [
                  101.75273,
                  12.95053
                ],
                [
                  101.75285,
                  12.94587
                ],
                [
                  101.75711,
                  12.94043
                ],
                [
                  101.76675,
                  12.94388
                ],
                [
                  101.77342,
                  12.95115
                ],
                [
                  101.77544,
                  12.95104
                ],
                [
                  101.7789,
                  12.95307
                ],
                [
                  101.78388,
                  12.94693
                ],
                [
                  101.78999,
                  12.94308
                ],
                [
                  101.79206,
                  12.93872
                ],
                [
                  101.79073,
                  12.93239
                ],
                [
                  101.79156,
                  12.92935
                ],
                [
                  101.79496,
                  12.92667
                ],
                [
                  101.79914,
                  12.92724
                ],
                [
                  101.80072,
                  12.925
                ],
                [
                  101.80027,
                  12.92198
                ],
                [
                  101.80236,
                  12.91732
                ],
                [
                  101.80262,
                  12.90728
                ],
                [
                  101.80613,
                  12.9012
                ],
                [
                  101.80616,
                  12.8955
                ],
                [
                  101.80776,
                  12.89096
                ],
                [
                  101.80788,
                  12.88667
                ],
                [
                  101.80925,
                  12.88454
                ],
                [
                  101.80393,
                  12.88092
                ],
                [
                  101.80025,
                  12.88167
                ],
                [
                  101.78959,
                  12.87825
                ],
                [
                  101.78775,
                  12.87881
                ],
                [
                  101.78433,
                  12.87626
                ],
                [
                  101.78198,
                  12.87635
                ],
                [
                  101.77907,
                  12.87214
                ],
                [
                  101.77665,
                  12.87195
                ],
                [
                  101.77542,
                  12.86944
                ],
                [
                  101.7748,
                  12.87036
                ],
                [
                  101.76796,
                  12.86562
                ],
                [
                  101.76236,
                  12.86366
                ],
                [
                  101.76057,
                  12.86189
                ],
                [
                  101.75767,
                  12.86157
                ],
                [
                  101.75481,
                  12.85921
                ],
                [
                  101.75006,
                  12.8596
                ],
                [
                  101.74794,
                  12.85583
                ],
                [
                  101.74786,
                  12.85353
                ],
                [
                  101.7432,
                  12.84808
                ],
                [
                  101.74615,
                  12.84302
                ],
                [
                  101.74032,
                  12.83934
                ],
                [
                  101.73913,
                  12.83381
                ],
                [
                  101.73447,
                  12.83035
                ],
                [
                  101.735,
                  12.83424
                ],
                [
                  101.73399,
                  12.83572
                ],
                [
                  101.73312,
                  12.83539
                ],
                [
                  101.73091,
                  12.83986
                ],
                [
                  101.72799,
                  12.83897
                ],
                [
                  101.72165,
                  12.84351
                ],
                [
                  101.72059,
                  12.84246
                ],
                [
                  101.7227,
                  12.83744
                ],
                [
                  101.71775,
                  12.83779
                ],
                [
                  101.70473,
                  12.85887
                ],
                [
                  101.70388,
                  12.86356
                ],
                [
                  101.70648,
                  12.86989
                ],
                [
                  101.71011,
                  12.8674
                ],
                [
                  101.71134,
                  12.86865
                ],
                [
                  101.70747,
                  12.88862
                ],
                [
                  101.71343,
                  12.90067
                ],
                [
                  101.71175,
                  12.90054
                ],
                [
                  101.71024,
                  12.90232
                ],
                [
                  101.7091,
                  12.90766
                ],
                [
                  101.70639,
                  12.90904
                ],
                [
                  101.70259,
                  12.90848
                ],
                [
                  101.70028,
                  12.91138
                ],
                [
                  101.70128,
                  12.91221
                ],
                [
                  101.69998,
                  12.9134
                ],
                [
                  101.69946,
                  12.91668
                ],
                [
                  101.6967,
                  12.91782
                ],
                [
                  101.6982,
                  12.91963
                ],
                [
                  101.6963,
                  12.92178
                ],
                [
                  101.69756,
                  12.92333
                ],
                [
                  101.69631,
                  12.92684
                ],
                [
                  101.69759,
                  12.92664
                ],
                [
                  101.69598,
                  12.92851
                ],
                [
                  101.69744,
                  12.93233
                ],
                [
                  101.69676,
                  12.93352
                ],
                [
                  101.69876,
                  12.93577
                ],
                [
                  101.70556,
                  12.93588
                ],
                [
                  101.70583,
                  12.94034
                ],
                [
                  101.71637,
                  12.94369
                ],
                [
                  101.71804,
                  12.94756
                ],
                [
                  101.72021,
                  12.94886
                ],
                [
                  101.72563,
                  12.94746
                ],
                [
                  101.7289,
                  12.94827
                ],
                [
                  101.73479,
                  12.95665
                ],
                [
                  101.73936,
                  12.95896
                ],
                [
                  101.74064,
                  12.95809
                ]
              ]
            ]
          }
        },
        {
          "geocode": "210702",
          "tambon": "ต.ห้วยทับมอญ",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านสีระมัน",
          "latitude": 13.038727,
          "longitude": 101.66171,
          "sum_rainfall_mm": 273.80000000000007,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.69527,
                  13.1459
                ],
                [
                  101.69676,
                  13.14052
                ],
                [
                  101.69603,
                  13.13619
                ],
                [
                  101.69453,
                  13.13397
                ],
                [
                  101.69011,
                  13.13166
                ],
                [
                  101.68814,
                  13.12611
                ],
                [
                  101.68557,
                  13.12374
                ],
                [
                  101.68647,
                  13.11372
                ],
                [
                  101.69192,
                  13.10919
                ],
                [
                  101.69928,
                  13.10937
                ],
                [
                  101.70046,
                  13.10806
                ],
                [
                  101.7,
                  13.10621
                ],
                [
                  101.69592,
                  13.10334
                ],
                [
                  101.69565,
                  13.09932
                ],
                [
                  101.69305,
                  13.09594
                ],
                [
                  101.69321,
                  13.09277
                ],
                [
                  101.69859,
                  13.08176
                ],
                [
                  101.70033,
                  13.08008
                ],
                [
                  101.7029,
                  13.07978
                ],
                [
                  101.70458,
                  13.07688
                ],
                [
                  101.703,
                  13.07039
                ],
                [
                  101.70859,
                  13.05879
                ],
                [
                  101.71019,
                  13.05816
                ],
                [
                  101.71144,
                  13.04831
                ],
                [
                  101.71414,
                  13.04366
                ],
                [
                  101.71407,
                  13.04254
                ],
                [
                  101.71157,
                  13.04202
                ],
                [
                  101.71072,
                  13.0407
                ],
                [
                  101.71404,
                  13.03885
                ],
                [
                  101.71625,
                  13.03421
                ],
                [
                  101.72594,
                  13.02963
                ],
                [
                  101.73064,
                  13.03487
                ],
                [
                  101.73585,
                  13.03343
                ],
                [
                  101.73941,
                  13.03387
                ],
                [
                  101.74128,
                  13.03647
                ],
                [
                  101.7446,
                  13.03749
                ],
                [
                  101.74748,
                  13.04618
                ],
                [
                  101.75021,
                  13.04844
                ],
                [
                  101.75464,
                  13.04934
                ],
                [
                  101.75877,
                  13.04708
                ],
                [
                  101.76095,
                  13.03698
                ],
                [
                  101.76001,
                  13.03433
                ],
                [
                  101.75698,
                  13.03131
                ],
                [
                  101.75333,
                  13.03044
                ],
                [
                  101.75214,
                  13.02909
                ],
                [
                  101.75384,
                  13.01584
                ],
                [
                  101.75488,
                  13.01297
                ],
                [
                  101.7582,
                  13.01191
                ],
                [
                  101.75506,
                  13.00625
                ],
                [
                  101.75188,
                  13.00529
                ],
                [
                  101.7512,
                  13.00056
                ],
                [
                  101.74353,
                  12.99117
                ],
                [
                  101.73767,
                  12.98115
                ],
                [
                  101.74075,
                  12.97733
                ],
                [
                  101.73912,
                  12.9671
                ],
                [
                  101.73936,
                  12.95896
                ],
                [
                  101.73479,
                  12.95665
                ],
                [
                  101.7289,
                  12.94827
                ],
                [
                  101.72563,
                  12.94746
                ],
                [
                  101.72021,
                  12.94886
                ],
                [
                  101.71804,
                  12.94756
                ],
                [
                  101.71637,
                  12.94369
                ],
                [
                  101.70583,
                  12.94034
                ],
                [
                  101.70556,
                  12.93588
                ],
                [
                  101.69876,
                  12.93577
                ],
                [
                  101.69676,
                  12.93352
                ],
                [
                  101.69744,
                  12.93233
                ],
                [
                  101.69666,
                  12.92942
                ],
                [
                  101.69519,
                  12.92883
                ],
                [
                  101.69491,
                  12.93042
                ],
                [
                  101.69235,
                  12.93003
                ],
                [
                  101.69021,
                  12.93156
                ],
                [
                  101.68828,
                  12.93607
                ],
                [
                  101.68662,
                  12.93622
                ],
                [
                  101.68606,
                  12.94076
                ],
                [
                  101.68423,
                  12.94036
                ],
                [
                  101.68213,
                  12.94396
                ],
                [
                  101.68,
                  12.94518
                ],
                [
                  101.6784,
                  12.94909
                ],
                [
                  101.6732,
                  12.95338
                ],
                [
                  101.67209,
                  12.95735
                ],
                [
                  101.6699,
                  12.95826
                ],
                [
                  101.67066,
                  12.96107
                ],
                [
                  101.66738,
                  12.96313
                ],
                [
                  101.66852,
                  12.96437
                ],
                [
                  101.66695,
                  12.96822
                ],
                [
                  101.66811,
                  12.96924
                ],
                [
                  101.66828,
                  12.97368
                ],
                [
                  101.66455,
                  12.97937
                ],
                [
                  101.6655,
                  12.98028
                ],
                [
                  101.66478,
                  12.98242
                ],
                [
                  101.6661,
                  12.98779
                ],
                [
                  101.66444,
                  12.98884
                ],
                [
                  101.66536,
                  12.99166
                ],
                [
                  101.66482,
                  12.99857
                ],
                [
                  101.66366,
                  12.99995
                ],
                [
                  101.65801,
                  13.00044
                ],
                [
                  101.65566,
                  13.00362
                ],
                [
                  101.65528,
                  13.00842
                ],
                [
                  101.65702,
                  13.01041
                ],
                [
                  101.65599,
                  13.01256
                ],
                [
                  101.65492,
                  13.01262
                ],
                [
                  101.65643,
                  13.01447
                ],
                [
                  101.65455,
                  13.01803
                ],
                [
                  101.65506,
                  13.02033
                ],
                [
                  101.65383,
                  13.02
                ],
                [
                  101.6545,
                  13.02192
                ],
                [
                  101.65215,
                  13.02317
                ],
                [
                  101.64966,
                  13.0221
                ],
                [
                  101.64709,
                  13.02388
                ],
                [
                  101.64496,
                  13.02342
                ],
                [
                  101.64363,
                  13.02437
                ],
                [
                  101.64387,
                  13.02589
                ],
                [
                  101.63938,
                  13.03061
                ],
                [
                  101.63871,
                  13.038
                ],
                [
                  101.63606,
                  13.0389
                ],
                [
                  101.63651,
                  13.04272
                ],
                [
                  101.6338,
                  13.04486
                ],
                [
                  101.63417,
                  13.0486
                ],
                [
                  101.63765,
                  13.05157
                ],
                [
                  101.63902,
                  13.06109
                ],
                [
                  101.64089,
                  13.06289
                ],
                [
                  101.63707,
                  13.07351
                ],
                [
                  101.63293,
                  13.09348
                ],
                [
                  101.63595,
                  13.09504
                ],
                [
                  101.63865,
                  13.09322
                ],
                [
                  101.64014,
                  13.09436
                ],
                [
                  101.63345,
                  13.10834
                ],
                [
                  101.61306,
                  13.13488
                ],
                [
                  101.61613,
                  13.13625
                ],
                [
                  101.61959,
                  13.13977
                ],
                [
                  101.62301,
                  13.13968
                ],
                [
                  101.62444,
                  13.14494
                ],
                [
                  101.6336,
                  13.1541
                ],
                [
                  101.63604,
                  13.15876
                ],
                [
                  101.64591,
                  13.16306
                ],
                [
                  101.6534,
                  13.15987
                ],
                [
                  101.65742,
                  13.16347
                ],
                [
                  101.65688,
                  13.15968
                ],
                [
                  101.66036,
                  13.15728
                ],
                [
                  101.66121,
                  13.15446
                ],
                [
                  101.66517,
                  13.15558
                ],
                [
                  101.6684,
                  13.15318
                ],
                [
                  101.67377,
                  13.1541
                ],
                [
                  101.68258,
                  13.14839
                ],
                [
                  101.69527,
                  13.1459
                ]
              ]
            ]
          }
        },
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
          "sum_rainfall_mm": 244.20000000000005,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "103302",
          "tambon": "ต.คลองตัน",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดสวนเบญจสิริ",
          "latitude": 13.73159,
          "longitude": 100.56745,
          "sum_rainfall_mm": 172.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 157.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 269.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101802",
          "tambon": "ต.คลองสาน",
          "amphoe": "อ.คลองสาน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสาน",
          "latitude": 13.73044,
          "longitude": 100.50947,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104603",
          "tambon": "ต.บางขัน",
          "amphoe": "อ.คลองสามวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสามวา",
          "latitude": 13.8599,
          "longitude": 100.70424,
          "sum_rainfall_mm": 154.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104301",
          "tambon": "ต.คันนายาว",
          "amphoe": "อ.คันนายาว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ลำชะล่า-ถ.นวมินทร์",
          "latitude": 13.83637,
          "longitude": 100.66131,
          "sum_rainfall_mm": 162.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103001",
          "tambon": "ต.ลาดยาว",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ถ.เทศบาลสงเคราะห์",
          "latitude": 13.83978,
          "longitude": 100.54175,
          "sum_rainfall_mm": 182.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100206",
          "tambon": "ต.ถนนนครไชยศรี",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางซื่อ",
          "latitude": 13.80023,
          "longitude": 100.51848,
          "sum_rainfall_mm": 182.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100203",
          "tambon": "ต.สวนจิตรลดา",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อุทยานเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
          "latitude": 13.76138,
          "longitude": 100.52066,
          "sum_rainfall_mm": 135.6,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104801",
          "tambon": "ต.ทวีวัฒนา",
          "amphoe": "อ.ทวีวัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ทวีวัฒนา",
          "latitude": 13.77281,
          "longitude": 100.35324,
          "sum_rainfall_mm": 161.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101507",
          "tambon": "ต.สำเหร่",
          "amphoe": "อ.ธนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสำเหร่",
          "latitude": 13.7067,
          "longitude": 100.49646,
          "sum_rainfall_mm": 114.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101601",
          "tambon": "ต.วัดอรุณ",
          "amphoe": "อ.บางกอกใหญ่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางกอกใหญ่",
          "latitude": 13.74022,
          "longitude": 100.49012,
          "sum_rainfall_mm": 94.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100608",
          "tambon": "ต.หัวหมาก",
          "amphoe": "อ.บางกะปิ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองแสนแสบ บางกะปิ",
          "latitude": 13.76131,
          "longitude": 100.61601,
          "sum_rainfall_mm": 207.79999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104002",
          "tambon": "ต.บางแคเหนือ",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "หมู่บ้านเศรษฐกิจ ซอย 26",
          "latitude": 13.72167,
          "longitude": 100.37676,
          "sum_rainfall_mm": 126.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104004",
          "tambon": "ต.หลักสอง",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองภาษีเจริญ เพชรเกษม69",
          "latitude": 13.69158,
          "longitude": 100.38127,
          "sum_rainfall_mm": 153.2,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104701",
          "tambon": "ต.บางนา",
          "amphoe": "อ.บางนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.บางนา",
          "latitude": 13.67493,
          "longitude": 100.58757,
          "sum_rainfall_mm": 246.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102502",
          "tambon": "ต.บางอ้อ",
          "amphoe": "อ.บางพลัด",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางพลัด",
          "latitude": 13.79429,
          "longitude": 100.50479,
          "sum_rainfall_mm": 165.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100404",
          "tambon": "ต.บางรัก",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.กรุงเกษม",
          "latitude": 13.73042,
          "longitude": 100.51397,
          "sum_rainfall_mm": 139.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100405",
          "tambon": "ต.สี่พระยา",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางรัก",
          "latitude": 13.73067,
          "longitude": 100.52382,
          "sum_rainfall_mm": 160.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100703",
          "tambon": "ต.ปทุมวัน",
          "amphoe": "อ.ปทุมวัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองอรชร",
          "latitude": 13.74807,
          "longitude": 100.53618,
          "sum_rainfall_mm": 148.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103201",
          "tambon": "ต.ประเวศ",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ประเวศ",
          "latitude": 13.71701,
          "longitude": 100.69472,
          "sum_rainfall_mm": 180.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103202",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงหนองบอน",
          "latitude": 13.69529,
          "longitude": 100.65375,
          "sum_rainfall_mm": 222.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101401",
          "tambon": "ต.สามเสนใน",
          "amphoe": "อ.พญาไท",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พญาไท",
          "latitude": 13.78003,
          "longitude": 100.54287,
          "sum_rainfall_mm": 215.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 302.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100101",
          "tambon": "ต.พระบรมมหาราชวัง",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปากคลองตลาด",
          "latitude": 13.74228,
          "longitude": 100.49454,
          "sum_rainfall_mm": 179.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "100112",
          "tambon": "ต.วัดสามพระยา",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พระนคร",
          "latitude": 13.7649,
          "longitude": 100.49872,
          "sum_rainfall_mm": 151.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.บึงขวาง",
          "latitude": 13.79988,
          "longitude": 100.74482,
          "sum_rainfall_mm": 183.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101203",
          "tambon": "ต.ช่องนนทรี",
          "amphoe": "อ.ยานนาวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ยานนาวา",
          "latitude": 13.69627,
          "longitude": 100.54222,
          "sum_rainfall_mm": 210.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103704",
          "tambon": "ต.มักกะสัน",
          "amphoe": "อ.ราชเทวี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงมักกะสัน",
          "latitude": 13.75665,
          "longitude": 100.54839,
          "sum_rainfall_mm": 164.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101106",
          "tambon": "ต.ขุมทอง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-ถ.ร่วมพัฒนา",
          "latitude": 13.70097,
          "longitude": 100.85106,
          "sum_rainfall_mm": 169.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
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
          "sum_rainfall_mm": 299.99999999999994,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103801",
          "tambon": "ต.ลาดพร้าว",
          "amphoe": "อ.ลาดพร้าว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
          "latitude": 13.93183,
          "longitude": 100.63952,
          "sum_rainfall_mm": 189.2,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104501",
          "tambon": "ต.วังทองหลาง",
          "amphoe": "อ.วังทองหลาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.วังทองหลาง",
          "latitude": 13.76435,
          "longitude": 100.60553,
          "sum_rainfall_mm": 165.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103902",
          "tambon": "ต.คลองตันเหนือ",
          "amphoe": "อ.วัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.แสนแสบ-คลองตัน",
          "latitude": 13.7411,
          "longitude": 100.5964,
          "sum_rainfall_mm": 179.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "103401",
          "tambon": "ต.สวนหลวง",
          "amphoe": "อ.สวนหลวง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-วัดขจรศิริ",
          "latitude": 13.71545,
          "longitude": 100.6415,
          "sum_rainfall_mm": 241.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104401",
          "tambon": "ต.สะพานสูง",
          "amphoe": "อ.สะพานสูง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สะพานสูง",
          "latitude": 13.76881,
          "longitude": 100.68545,
          "sum_rainfall_mm": 184.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101302",
          "tambon": "ต.สัมพันธวงศ์",
          "amphoe": "อ.สัมพันธวงศ์",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ท่าน้ำสวัสดี",
          "latitude": 13.73664,
          "longitude": 100.5096,
          "sum_rainfall_mm": 143.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102801",
          "tambon": "ต.ทุ่งวัดดอน",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สาทร",
          "latitude": 13.70821,
          "longitude": 100.52641,
          "sum_rainfall_mm": 162.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102802",
          "tambon": "ต.ยานนาวา",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสาทร",
          "latitude": 13.71839,
          "longitude": 100.51496,
          "sum_rainfall_mm": 128.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104201",
          "tambon": "ต.สายไหม",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว ท้ายปตร.คลอง2",
          "latitude": 13.92245,
          "longitude": 100.63438,
          "sum_rainfall_mm": 170.39999999999998,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104202",
          "tambon": "ต.ออเงิน",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สายไหม",
          "latitude": 13.89531,
          "longitude": 100.6609,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "102302",
          "tambon": "ต.หนองแขม",
          "amphoe": "อ.หนองแขม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ทวีฯ-ค.ภาษีฯ",
          "latitude": 13.69168,
          "longitude": 100.38097,
          "sum_rainfall_mm": 141.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "101701",
          "tambon": "ต.ห้วยขวาง",
          "amphoe": "อ.ห้วยขวาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ห้วยขวาง",
          "latitude": 13.77678,
          "longitude": 100.57906,
          "sum_rainfall_mm": 170.5,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "730212",
          "tambon": "ต.กำแพงแสน",
          "amphoe": "อ.กำแพงแสน",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.กำแพงแสน",
          "latitude": 14.00326,
          "longitude": 99.98091,
          "sum_rainfall_mm": 142.4,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.99679,
                  14.03204
                ],
                [
                  100.00052,
                  14.02896
                ],
                [
                  100.00038,
                  14.02264
                ],
                [
                  100.00479,
                  14.02231
                ],
                [
                  100.00298,
                  14.0175
                ],
                [
                  100.00407,
                  14.01504
                ],
                [
                  100.0061,
                  14.01365
                ],
                [
                  100.01004,
                  14.01539
                ],
                [
                  100.01151,
                  14.01464
                ],
                [
                  100.00822,
                  14.0122
                ],
                [
                  100.01302,
                  14.00762
                ],
                [
                  100.00923,
                  14.00576
                ],
                [
                  100.00824,
                  14.00438
                ],
                [
                  100.00858,
                  14.00164
                ],
                [
                  100.00702,
                  14.00161
                ],
                [
                  100.00773,
                  13.99888
                ],
                [
                  100.01055,
                  13.99557
                ],
                [
                  100.00871,
                  13.99371
                ],
                [
                  100.00726,
                  13.99348
                ],
                [
                  100.00572,
                  13.99543
                ],
                [
                  100.00227,
                  13.99582
                ],
                [
                  99.99845,
                  13.99928
                ],
                [
                  99.9982,
                  14.00162
                ],
                [
                  99.99948,
                  14.00218
                ],
                [
                  99.99138,
                  14.00119
                ],
                [
                  99.98901,
                  13.99691
                ],
                [
                  99.98377,
                  13.99934
                ],
                [
                  99.97728,
                  13.99826
                ],
                [
                  99.97864,
                  14.00164
                ],
                [
                  99.97433,
                  14.00539
                ],
                [
                  99.97466,
                  14.00819
                ],
                [
                  99.95839,
                  14.00973
                ],
                [
                  99.95561,
                  14.01272
                ],
                [
                  99.95619,
                  14.04217
                ],
                [
                  99.961,
                  14.04119
                ],
                [
                  99.96381,
                  14.05156
                ],
                [
                  99.96788,
                  14.05254
                ],
                [
                  99.98698,
                  14.04979
                ],
                [
                  99.99029,
                  14.05098
                ],
                [
                  99.99232,
                  14.03817
                ],
                [
                  99.99679,
                  14.03204
                ]
              ]
            ]
          }
        },
        {
          "geocode": "730324",
          "tambon": "ต.ไทยาวาส",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สะพานนครชัยศรี",
          "latitude": 13.79217,
          "longitude": 100.19817,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.23671,
                  13.80508
                ],
                [
                  100.23673,
                  13.80279
                ],
                [
                  100.24374,
                  13.80275
                ],
                [
                  100.24046,
                  13.80062
                ],
                [
                  100.23706,
                  13.79605
                ],
                [
                  100.23747,
                  13.79061
                ],
                [
                  100.23377,
                  13.79292
                ],
                [
                  100.22932,
                  13.7934
                ],
                [
                  100.22519,
                  13.78715
                ],
                [
                  100.21103,
                  13.78278
                ],
                [
                  100.20627,
                  13.78426
                ],
                [
                  100.2021,
                  13.78732
                ],
                [
                  100.18814,
                  13.80183
                ],
                [
                  100.18603,
                  13.80783
                ],
                [
                  100.20634,
                  13.80643
                ],
                [
                  100.20633,
                  13.80455
                ],
                [
                  100.22211,
                  13.80113
                ],
                [
                  100.22846,
                  13.80372
                ],
                [
                  100.23671,
                  13.80508
                ]
              ]
            ]
          }
        },
        {
          "geocode": "730301",
          "tambon": "ต.นครชัยศรี",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.นครชัยศรี",
          "latitude": 13.79036,
          "longitude": 100.19051,
          "sum_rainfall_mm": 148.0,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.18685,
                  13.80404
                ],
                [
                  100.20112,
                  13.78832
                ],
                [
                  100.19658,
                  13.78381
                ],
                [
                  100.19475,
                  13.77298
                ],
                [
                  100.19161,
                  13.76388
                ],
                [
                  100.18746,
                  13.79051
                ],
                [
                  100.19162,
                  13.79269
                ],
                [
                  100.18139,
                  13.80476
                ],
                [
                  100.18685,
                  13.80404
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110602",
          "tambon": "ต.ศีรษะจรเข้น้อย",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.ศีรษะจรเข้น้อย",
          "latitude": 13.67777,
          "longitude": 100.7945,
          "sum_rainfall_mm": 260.79999999999995,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.82831,
                  13.70177
                ],
                [
                  100.81908,
                  13.68513
                ],
                [
                  100.81696,
                  13.68306
                ],
                [
                  100.82308,
                  13.67525
                ],
                [
                  100.8224,
                  13.67311
                ],
                [
                  100.8238,
                  13.6673
                ],
                [
                  100.81877,
                  13.66338
                ],
                [
                  100.80489,
                  13.66162
                ],
                [
                  100.80152,
                  13.65877
                ],
                [
                  100.7993,
                  13.66027
                ],
                [
                  100.79697,
                  13.65996
                ],
                [
                  100.79645,
                  13.6638
                ],
                [
                  100.80028,
                  13.6696
                ],
                [
                  100.80204,
                  13.67534
                ],
                [
                  100.79345,
                  13.67773
                ],
                [
                  100.77212,
                  13.67375
                ],
                [
                  100.76303,
                  13.6748
                ],
                [
                  100.77864,
                  13.70153
                ],
                [
                  100.78518,
                  13.70682
                ],
                [
                  100.78182,
                  13.70986
                ],
                [
                  100.78465,
                  13.71649
                ],
                [
                  100.78871,
                  13.71627
                ],
                [
                  100.80111,
                  13.71215
                ],
                [
                  100.82831,
                  13.70177
                ]
              ]
            ]
          }
        },
        {
          "geocode": "110603",
          "tambon": "ต.ศีรษะจรเข้ใหญ่",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
          "latitude": 13.66949,
          "longitude": 100.80058,
          "sum_rainfall_mm": 248.60000000000002,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.8238,
                  13.6673
                ],
                [
                  100.82663,
                  13.66573
                ],
                [
                  100.81938,
                  13.64767
                ],
                [
                  100.8156,
                  13.63094
                ],
                [
                  100.81294,
                  13.62796
                ],
                [
                  100.7991,
                  13.61931
                ],
                [
                  100.79839,
                  13.61718
                ],
                [
                  100.8009,
                  13.60951
                ],
                [
                  100.80037,
                  13.60468
                ],
                [
                  100.7972,
                  13.60118
                ],
                [
                  100.79893,
                  13.59092
                ],
                [
                  100.7957,
                  13.59125
                ],
                [
                  100.79403,
                  13.58893
                ],
                [
                  100.79091,
                  13.5891
                ],
                [
                  100.78878,
                  13.59284
                ],
                [
                  100.77925,
                  13.59487
                ],
                [
                  100.77947,
                  13.59903
                ],
                [
                  100.7821,
                  13.60201
                ],
                [
                  100.78274,
                  13.60677
                ],
                [
                  100.78603,
                  13.61496
                ],
                [
                  100.78405,
                  13.62223
                ],
                [
                  100.78491,
                  13.63074
                ],
                [
                  100.78312,
                  13.64766
                ],
                [
                  100.78712,
                  13.6562
                ],
                [
                  100.79428,
                  13.6662
                ],
                [
                  100.79086,
                  13.67371
                ],
                [
                  100.79065,
                  13.67716
                ],
                [
                  100.79345,
                  13.67773
                ],
                [
                  100.80204,
                  13.67534
                ],
                [
                  100.80028,
                  13.6696
                ],
                [
                  100.79645,
                  13.6638
                ],
                [
                  100.79697,
                  13.65996
                ],
                [
                  100.7993,
                  13.66027
                ],
                [
                  100.80152,
                  13.65877
                ],
                [
                  100.80489,
                  13.66162
                ],
                [
                  100.81877,
                  13.66338
                ],
                [
                  100.8238,
                  13.6673
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 192.5,
          "observed_at": "2026-09-25T08:00:00+07:00",
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
          "geocode": "110115",
          "tambon": "ต.เทพารักษ์",
          "amphoe": "อ.เมืองสมุทรปราการ",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสำโรง",
          "latitude": 13.64819,
          "longitude": 100.59514,
          "sum_rainfall_mm": 205.5,
          "observed_at": "2026-09-25T08:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.62864,
                  13.63324
                ],
                [
                  100.64832,
                  13.62426
                ],
                [
                  100.66058,
                  13.62158
                ],
                [
                  100.6645,
                  13.61885
                ],
                [
                  100.67109,
                  13.61859
                ],
                [
                  100.66749,
                  13.60936
                ],
                [
                  100.66563,
                  13.60912
                ],
                [
                  100.66229,
                  13.60643
                ],
                [
                  100.65465,
                  13.61332
                ],
                [
                  100.64816,
                  13.61731
                ],
                [
                  100.63574,
                  13.62034
                ],
                [
                  100.60862,
                  13.63208
                ],
                [
                  100.60141,
                  13.6363
                ],
                [
                  100.59147,
                  13.63991
                ],
                [
                  100.58933,
                  13.64142
                ],
                [
                  100.59296,
                  13.65264
                ],
                [
                  100.59614,
                  13.65211
                ],
                [
                  100.61944,
                  13.63748
                ],
                [
                  100.62864,
                  13.63324
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_25_09_2026.png?1790341620",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-25",
      "time": "20:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
        {
          "geocode": "620411",
          "tambon": "ต.ปางมะค่า",
          "amphoe": "อ.ขาณุวรลักษบุรี",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานต้นน้ำ (เกาะแก้ว-ตลิ่งสูง)",
          "latitude": 15.91465,
          "longitude": 99.4194,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620501",
          "tambon": "ต.คลองขลุง",
          "amphoe": "อ.คลองขลุง",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.คลองขลุง",
          "latitude": 16.20864,
          "longitude": 99.70895,
          "sum_rainfall_mm": 108.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 135.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 137.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180104",
          "tambon": "ต.ชัยนาท",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.บรมธาตุ",
          "latitude": 15.15713,
          "longitude": 100.152981,
          "sum_rainfall_mm": 151.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180107",
          "tambon": "ต.ธรรมามูล",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานธรรมจักร(วัดธรรมามูล)",
          "latitude": 15.25029,
          "longitude": 100.08347,
          "sum_rainfall_mm": 147.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180102",
          "tambon": "ต.บ้านกล้วย",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.มหาราช",
          "latitude": 15.15892,
          "longitude": 100.17329,
          "sum_rainfall_mm": 198.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180106",
          "tambon": "ต.หาดท่าเสา",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.พลเทพ",
          "latitude": 15.214294,
          "longitude": 100.073325,
          "sum_rainfall_mm": 138.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 136.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 121.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180405",
          "tambon": "ต.โพนางดำออก",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สรรพยา",
          "latitude": 15.10907,
          "longitude": 100.26785,
          "sum_rainfall_mm": 157.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180401",
          "tambon": "ต.สรรพยา",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สรรพยา",
          "latitude": 15.13217,
          "longitude": 100.25129,
          "sum_rainfall_mm": 183.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180611",
          "tambon": "ต.สามง่ามท่าโบสถ์",
          "amphoe": "อ.หันคา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.ท่าโบสถ์",
          "latitude": 15.05349,
          "longitude": 100.01175,
          "sum_rainfall_mm": 123.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180601",
          "tambon": "ต.หันคา",
          "amphoe": "อ.หันคา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.หันคา",
          "latitude": 14.96964,
          "longitude": 100.01039,
          "sum_rainfall_mm": 110.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260207",
          "tambon": "ต.นาหินลาด",
          "amphoe": "อ.ปากพลี",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.นาหินลาด",
          "latitude": 14.20724,
          "longitude": 101.35025,
          "sum_rainfall_mm": 144.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260102",
          "tambon": "ต.ท่าช้าง",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เขื่อนนายก",
          "latitude": 14.18205,
          "longitude": 101.162164,
          "sum_rainfall_mm": 106.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260107",
          "tambon": "ต.ศรีจุฬา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีจุฬา",
          "latitude": 14.07064,
          "longitude": 101.13746,
          "sum_rainfall_mm": 168.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260405",
          "tambon": "ต.บางสมบูรณ์",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สมบูรณ์",
          "latitude": 13.970389,
          "longitude": 101.138699,
          "sum_rainfall_mm": 154.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260404",
          "tambon": "ต.โพธิ์แทน",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองแม่น้ำใน(โพธิ์แทน)",
          "latitude": 14.212921,
          "longitude": 100.942453,
          "sum_rainfall_mm": 126.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600201",
          "tambon": "ต.โกรกพระ",
          "amphoe": "อ.โกรกพระ",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.โกรกพระ",
          "latitude": 15.55312,
          "longitude": 100.0709,
          "sum_rainfall_mm": 126.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600702",
          "tambon": "ต.ช่องแค",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เขาวง",
          "latitude": 15.181689,
          "longitude": 100.41453,
          "sum_rainfall_mm": 139.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600701",
          "tambon": "ต.ตาคลี",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ตาคลี",
          "latitude": 15.29119,
          "longitude": 100.38288,
          "sum_rainfall_mm": 129.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600710",
          "tambon": "ต.พรหมนิมิต",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ช่องแค",
          "latitude": 15.14624,
          "longitude": 100.41298,
          "sum_rainfall_mm": 148.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600805",
          "tambon": "ต.วังมหากร",
          "amphoe": "อ.ท่าตะโก",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "TC.60",
          "latitude": 15.67,
          "longitude": 100.334167,
          "sum_rainfall_mm": 131.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "601007",
          "tambon": "ต.เขาทอง",
          "amphoe": "อ.พยุหะคีรี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.เขาทอง",
          "latitude": 15.5707,
          "longitude": 100.18319,
          "sum_rainfall_mm": 105.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600908",
          "tambon": "ต.ไพศาลี",
          "amphoe": "อ.ไพศาลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ไพศาลี",
          "latitude": 15.60012,
          "longitude": 100.6572,
          "sum_rainfall_mm": 137.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140201",
          "tambon": "ต.ท่าเรือ",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท่าเรือ",
          "latitude": 14.56014,
          "longitude": 100.71987,
          "sum_rainfall_mm": 190.20000000000005,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140203",
          "tambon": "ต.ท่าหลวง",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.พระนารายน์",
          "latitude": 14.5583,
          "longitude": 100.76205,
          "sum_rainfall_mm": 210.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140303",
          "tambon": "ต.บ่อโพง",
          "amphoe": "อ.นครหลวง",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "นครหลวง",
          "latitude": 14.40269,
          "longitude": 100.5864,
          "sum_rainfall_mm": 126.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140503",
          "tambon": "ต.ไทรน้อย",
          "amphoe": "อ.บางบาล",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองบางบาล",
          "latitude": 14.42303,
          "longitude": 100.48186,
          "sum_rainfall_mm": 143.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140513",
          "tambon": "ต.บางหลวงโดด",
          "amphoe": "อ.บางบาล",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองบางหลวง",
          "latitude": 14.4158,
          "longitude": 100.44071,
          "sum_rainfall_mm": 108.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140702",
          "tambon": "ต.ขยาย",
          "amphoe": "อ.บางปะหัน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดจอมเกษ",
          "latitude": 14.414349,
          "longitude": 100.55782,
          "sum_rainfall_mm": 134.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140714",
          "tambon": "ต.โพธิ์สามต้น",
          "amphoe": "อ.บางปะหัน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บางปะหัน",
          "latitude": 14.42731,
          "longitude": 100.55605,
          "sum_rainfall_mm": 138.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140618",
          "tambon": "ต.ขนอนหลวง",
          "amphoe": "อ.บางปะอิน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บางปะอิน",
          "latitude": 14.30455,
          "longitude": 100.56645,
          "sum_rainfall_mm": 115.39999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140604",
          "tambon": "ต.บ้านกรด",
          "amphoe": "อ.บางปะอิน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดขนอนใต้",
          "latitude": 14.288251,
          "longitude": 100.61132,
          "sum_rainfall_mm": 104.40000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140805",
          "tambon": "ต.ตาลาน",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.บางแก้ว (ทุ่งผักไห่)",
          "latitude": 14.436604,
          "longitude": 100.37149,
          "sum_rainfall_mm": 118.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140816",
          "tambon": "ต.บ้านใหญ่",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.ผักไห่",
          "latitude": 14.43626,
          "longitude": 100.375495,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140814",
          "tambon": "ต.ลาดชิด",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ที่ทำการกำนันตำบลลาดชิด",
          "latitude": 14.44142,
          "longitude": 100.35564,
          "sum_rainfall_mm": 127.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140815",
          "tambon": "ต.หน้าโคก",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานข้ามแม่น้ำน้อย (ทุ่งผักไห่)",
          "latitude": 14.498449,
          "longitude": 100.36825,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140108",
          "tambon": "ต.ภูเขาทอง",
          "amphoe": "อ.พระนครศรีอยุธยา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พระนครศรีอยุธยา",
          "latitude": 14.36913,
          "longitude": 100.52861,
          "sum_rainfall_mm": 108.60000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140113",
          "tambon": "ต.หันตรา",
          "amphoe": "อ.พระนครศรีอยุธยา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.กลางคลองข้าวเม่า (วัดกระสังข์)",
          "latitude": 14.357306,
          "longitude": 100.60569,
          "sum_rainfall_mm": 102.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141106",
          "tambon": "ต.พยอม",
          "amphoe": "อ.วังน้อย",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.พระอินทราชา",
          "latitude": 14.14378,
          "longitude": 100.62075,
          "sum_rainfall_mm": 144.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141103",
          "tambon": "ต.วังน้อย",
          "amphoe": "อ.วังน้อย",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.พระอินทราชา",
          "latitude": 14.14407,
          "longitude": 100.62136,
          "sum_rainfall_mm": 144.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141217",
          "tambon": "ต.เจ้าเสด็จ",
          "amphoe": "อ.เสนา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เสนา",
          "latitude": 14.31976,
          "longitude": 100.37952,
          "sum_rainfall_mm": 120.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141201",
          "tambon": "ต.เสนา",
          "amphoe": "อ.เสนา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
          "latitude": 14.327773,
          "longitude": 100.405464,
          "sum_rainfall_mm": 133.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141406",
          "tambon": "ต.อุทัย",
          "amphoe": "อ.อุทัย",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองช่องสะเดา",
          "latitude": 14.344762,
          "longitude": 100.670105,
          "sum_rainfall_mm": 133.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "670601",
          "tambon": "ต.ศรีเทพ",
          "amphoe": "อ.ศรีเทพ",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีเทพ",
          "latitude": 15.43789,
          "longitude": 101.16249,
          "sum_rainfall_mm": 105.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160903",
          "tambon": "ต.หนองมะค่า",
          "amphoe": "อ.โคกเจริญ",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.หนองมะค่า",
          "latitude": 15.4321,
          "longitude": 100.9245,
          "sum_rainfall_mm": 151.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160414",
          "tambon": "ต.ท่ามะนาว",
          "amphoe": "อ.ชัยบาดาล",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ท่ามะนาว",
          "latitude": 15.19934,
          "longitude": 101.16389,
          "sum_rainfall_mm": 119.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160406",
          "tambon": "ต.บัวชุม",
          "amphoe": "อ.ชัยบาดาล",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคลองลำสนธิ",
          "latitude": 15.246861,
          "longitude": 101.19566,
          "sum_rainfall_mm": 131.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160201",
          "tambon": "ต.พัฒนานิคม",
          "amphoe": "อ.พัฒนานิคม",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองส้ม",
          "latitude": 14.822028,
          "longitude": 101.014594,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160207",
          "tambon": "ต.หนองบัว",
          "amphoe": "อ.พัฒนานิคม",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือเขื่อนป่าสัก",
          "latitude": 14.848254,
          "longitude": 101.090205,
          "sum_rainfall_mm": 103.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160117",
          "tambon": "ต.บางขันหมาก",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทรบ. ปากคลองห้าวา (ทุ่งท่าวุ้ง)",
          "latitude": 14.818599,
          "longitude": 100.576515,
          "sum_rainfall_mm": 118.00000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160122",
          "tambon": "ต.โพธิ์เก้าต้น",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เมืองลพบุรี",
          "latitude": 14.76049,
          "longitude": 100.5996,
          "sum_rainfall_mm": 137.99999999999997,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "161106",
          "tambon": "ต.ชอนสารเดช",
          "amphoe": "อ.หนองม่วง",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ชอนสารเดช",
          "latitude": 15.18496,
          "longitude": 100.68131,
          "sum_rainfall_mm": 137.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "750101",
          "tambon": "ต.แม่กลอง",
          "amphoe": "อ.เมืองสมุทรสงคราม",
          "province": "จ.สมุทรสงคราม",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พระรามสอง",
          "latitude": 13.38362,
          "longitude": 99.9836,
          "sum_rainfall_mm": 112.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "190603",
          "tambon": "ต.สร่างโศก",
          "amphoe": "อ.บ้านหมอ",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคลองส่งน้ำชลประทาน บ้านสร่างโศก",
          "latitude": 14.650794,
          "longitude": 100.742775,
          "sum_rainfall_mm": 121.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "191203",
          "tambon": "ต.วังม่วง",
          "amphoe": "อ.วังม่วง",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ฝายคลองสุคต",
          "latitude": 14.863621,
          "longitude": 101.119957,
          "sum_rainfall_mm": 129.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "190301",
          "tambon": "ต.หนองแค",
          "amphoe": "อ.หนองแค",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.พระศรีศิลป์",
          "latitude": 14.32729,
          "longitude": 100.87117,
          "sum_rainfall_mm": 132.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170303",
          "tambon": "ต.โพสังโฆ",
          "amphoe": "อ.ค่ายบางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานค่ายบางระจัน",
          "latitude": 14.815288,
          "longitude": 100.36448,
          "sum_rainfall_mm": 113.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170504",
          "tambon": "ต.พิกุลทอง",
          "amphoe": "อ.ท่าช้าง",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ยางมณี",
          "latitude": 14.751,
          "longitude": 100.41463,
          "sum_rainfall_mm": 155.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170203",
          "tambon": "ต.เชิงกลัด",
          "amphoe": "อ.บางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.บางระจัน",
          "latitude": 14.92539,
          "longitude": 100.27912,
          "sum_rainfall_mm": 103.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170402",
          "tambon": "ต.พรหมบุรี",
          "amphoe": "อ.พรหมบุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พรหมบุรี",
          "latitude": 14.79091,
          "longitude": 100.45184,
          "sum_rainfall_mm": 133.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170106",
          "tambon": "ต.ต้นโพธิ์",
          "amphoe": "อ.เมืองสิงห์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานอนุสรณ์ 100 ปีสิงห์บุรี (สะพานหลวงพ่อแพ 89)",
          "latitude": 14.870205,
          "longitude": 100.408585,
          "sum_rainfall_mm": 112.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170605",
          "tambon": "ต.ชีน้ำร้าย",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สถานีสูบน้ำคลองระบายชัยนาท-ป่าสัก 2 (ทุ่งเชียงราก)",
          "latitude": 15.05502,
          "longitude": 100.32081,
          "sum_rainfall_mm": 127.00000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170601",
          "tambon": "ต.อินทร์บุรี",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อินทร์บุรี",
          "latitude": 15.00602,
          "longitude": 100.33088,
          "sum_rainfall_mm": 121.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สามชุก",
          "latitude": 14.75138,
          "longitude": 100.09592,
          "sum_rainfall_mm": 116.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "150302",
          "tambon": "ต.ป่าโมก",
          "amphoe": "อ.ป่าโมก",
          "province": "จ.อ่างทอง",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานป่าโมก",
          "latitude": 14.498074,
          "longitude": 100.44962,
          "sum_rainfall_mm": 119.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610205",
          "tambon": "ต.โคกหม้อ",
          "amphoe": "อ.ทัพทัน",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดโคกหม้อ",
          "latitude": 15.534278,
          "longitude": 99.899083,
          "sum_rainfall_mm": 117.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610201",
          "tambon": "ต.ทัพทัน",
          "amphoe": "อ.ทัพทัน",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ทัพทัน",
          "latitude": 15.45764,
          "longitude": 99.89484,
          "sum_rainfall_mm": 134.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610301",
          "tambon": "ต.สว่างอารมณ์",
          "amphoe": "อ.สว่างอารมณ์",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สว่างอารมณ์",
          "latitude": 15.58538,
          "longitude": 99.86514,
          "sum_rainfall_mm": 126.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610501",
          "tambon": "ต.หนองขาหย่าง",
          "amphoe": "อ.หนองขาหย่าง",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.หนองขาหย่าง",
          "latitude": 15.36227,
          "longitude": 99.93845,
          "sum_rainfall_mm": 142.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610401",
          "tambon": "ต.หนองฉาง",
          "amphoe": "อ.หนองฉาง",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.หนองฉาง",
          "latitude": 15.38896,
          "longitude": 99.84505,
          "sum_rainfall_mm": 132.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "221003",
          "tambon": "ต.ตะเคียนทอง",
          "amphoe": "อ.เขาคิชฌกูฏ",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.ตะเคียนทอง",
          "latitude": 12.9131,
          "longitude": 102.0815,
          "sum_rainfall_mm": 187.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220402",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.โป่งน้ำร้อน",
          "latitude": 12.90515,
          "longitude": 102.26646,
          "sum_rainfall_mm": 153.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220504",
          "tambon": "ต.วังแซ้ม",
          "amphoe": "อ.มะขาม",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดโคกตะพง (แกลง)",
          "latitude": 12.78168,
          "longitude": 102.17328,
          "sum_rainfall_mm": 166.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "241002",
          "tambon": "ต.คลองตะเกรา",
          "amphoe": "อ.ท่าตะเกียบ",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ภูไท",
          "latitude": 13.417764,
          "longitude": 101.883095,
          "sum_rainfall_mm": 180.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 166.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240301",
          "tambon": "ต.บางน้ำเปรี้ยว",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
          "latitude": 13.83819,
          "longitude": 100.9666,
          "sum_rainfall_mm": 172.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240309",
          "tambon": "ต.ศาลาแดง",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปตร.คลองหลวงแพ่ง",
          "latitude": 13.81321,
          "longitude": 100.93742,
          "sum_rainfall_mm": 179.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240402",
          "tambon": "ต.ท่าสะอ้าน",
          "amphoe": "อ.บางปะกง",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บางปะกง",
          "latitude": 13.54901,
          "longitude": 101.00111,
          "sum_rainfall_mm": 169.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240501",
          "tambon": "ต.บ้านโพธิ์",
          "amphoe": "อ.บ้านโพธิ์",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านโพธิ์",
          "latitude": 13.58335,
          "longitude": 101.070917,
          "sum_rainfall_mm": 217.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240601",
          "tambon": "ต.เกาะขนุน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ฝายท่าลาด",
          "latitude": 13.707719,
          "longitude": 101.401415,
          "sum_rainfall_mm": 188.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240607",
          "tambon": "ต.หนองแหน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.หนองแหน",
          "latitude": 13.68338,
          "longitude": 101.32512,
          "sum_rainfall_mm": 265.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240109",
          "tambon": "ต.บางขวัญ",
          "amphoe": "อ.เมืองฉะเชิงเทรา",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บางขวัญ",
          "latitude": 13.74984,
          "longitude": 101.07751,
          "sum_rainfall_mm": 185.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
          "latitude": 13.240835,
          "longitude": 101.04208,
          "sum_rainfall_mm": 238.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200701",
          "tambon": "ต.ศรีราชา",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สถานีวิจัยประมงศรีราชา",
          "latitude": 13.185876,
          "longitude": 100.916916,
          "sum_rainfall_mm": 165.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200903",
          "tambon": "ต.พลูตาหลวง",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.พลูตาหลวง",
          "latitude": 12.69861,
          "longitude": 100.9762,
          "sum_rainfall_mm": 201.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230305",
          "tambon": "ต.สะตอ",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.สะตอ",
          "latitude": 12.53639,
          "longitude": 102.44429,
          "sum_rainfall_mm": 183.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 153.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 163.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 226.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230111",
          "tambon": "ต.ท่ากุ่ม",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพ.สต.บ้านคลองขวาง",
          "latitude": 12.344451,
          "longitude": 102.64169,
          "sum_rainfall_mm": 159.00000000000003,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230108",
          "tambon": "ต.ห้วยแร้ง",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดคลองขุด",
          "latitude": 12.360417,
          "longitude": 102.549297,
          "sum_rainfall_mm": 156.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250214",
          "tambon": "ต.วังท่าช้าง",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเนินหินกอง",
          "latitude": 13.782015,
          "longitude": 101.900566,
          "sum_rainfall_mm": 183.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250810",
          "tambon": "ต.กรอกสมบูรณ์",
          "amphoe": "อ.ศรีมหาโพธิ",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.กรอกสมบูรณ์",
          "latitude": 13.77716,
          "longitude": 101.65875,
          "sum_rainfall_mm": 179.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210701",
          "tambon": "ต.น้ำเป็น",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
          "latitude": 12.912333,
          "longitude": 101.72454,
          "sum_rainfall_mm": 175.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210702",
          "tambon": "ต.ห้วยทับมอญ",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านสีระมัน",
          "latitude": 13.038727,
          "longitude": 101.66171,
          "sum_rainfall_mm": 195.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210201",
          "tambon": "ต.สำนักท้อน",
          "amphoe": "อ.บ้านฉาง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพ.สต.บ้านชากหมาก",
          "latitude": 12.796795,
          "longitude": 101.027664,
          "sum_rainfall_mm": 165.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 177.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270306",
          "tambon": "ต.ทัพราช",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองผักแว่น",
          "latitude": 14.040789,
          "longitude": 102.577395,
          "sum_rainfall_mm": 159.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270903",
          "tambon": "ต.วังทอง",
          "amphoe": "อ.วังสมบูรณ์",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ศูนย์ศึกษาการพัฒนาการอนุรักษ์ต้นน้ำลุ่มน้ำบางปะกง",
          "latitude": 13.351688,
          "longitude": 101.99863,
          "sum_rainfall_mm": 169.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270502",
          "tambon": "ต.ท่าเกวียน",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.ท่าเกวียน",
          "latitude": 13.68734,
          "longitude": 102.28413,
          "sum_rainfall_mm": 219.40000000000003,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270601",
          "tambon": "ต.อรัญประเทศ",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านฟากห้วย",
          "latitude": 13.684085,
          "longitude": 102.501103,
          "sum_rainfall_mm": 157.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "361305",
          "tambon": "ต.ทุ่งลุยลาย",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ทุ่งลุยลาย",
          "latitude": 16.499163,
          "longitude": 101.67309,
          "sum_rainfall_mm": 139.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302502",
          "tambon": "ต.วังหมี",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.วังหมี",
          "latitude": 14.4157,
          "longitude": 101.68403,
          "sum_rainfall_mm": 126.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "312003",
          "tambon": "ต.ลำนางรอง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ลำนางรอง",
          "latitude": 14.1899,
          "longitude": 102.68618,
          "sum_rainfall_mm": 179.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "310808",
          "tambon": "ต.จันทบเพชร",
          "amphoe": "อ.บ้านกรวด",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "โรงเรียนบ้านสายโท ๔ ใต้",
          "latitude": 14.370019,
          "longitude": 103.14561,
          "sum_rainfall_mm": 260.79999999999995,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "310601",
          "tambon": "ต.ละหานทราย",
          "amphoe": "อ.ละหานทราย",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ละหานทราย",
          "latitude": 14.39567,
          "longitude": 102.84726,
          "sum_rainfall_mm": 172.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 173.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710701",
          "tambon": "ต.ท่าขนุน",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ทต.ท่าขนุน",
          "latitude": 14.74405,
          "longitude": 98.64233,
          "sum_rainfall_mm": 106.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 124.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 130.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101802",
          "tambon": "ต.คลองสาน",
          "amphoe": "อ.คลองสาน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสาน",
          "latitude": 13.73044,
          "longitude": 100.50947,
          "sum_rainfall_mm": 106.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104603",
          "tambon": "ต.บางขัน",
          "amphoe": "อ.คลองสามวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสามวา",
          "latitude": 13.8599,
          "longitude": 100.70424,
          "sum_rainfall_mm": 141.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104301",
          "tambon": "ต.คันนายาว",
          "amphoe": "อ.คันนายาว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ลำชะล่า-ถ.นวมินทร์",
          "latitude": 13.83637,
          "longitude": 100.66131,
          "sum_rainfall_mm": 146.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103005",
          "tambon": "ต.จตุจักร",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.รัชดา-วิภาวดี",
          "latitude": 13.83022,
          "longitude": 100.55723,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103004",
          "tambon": "ต.จอมพล",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "บ่อสูบศาลอาญารัชดา",
          "latitude": 13.80967,
          "longitude": 100.57498,
          "sum_rainfall_mm": 130.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103001",
          "tambon": "ต.ลาดยาว",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อาคารเลขที่ ๙๐๑",
          "latitude": 13.85604,
          "longitude": 100.57558,
          "sum_rainfall_mm": 126.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103002",
          "tambon": "ต.เสนานิคม",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.บางบัว",
          "latitude": 13.85796,
          "longitude": 100.58682,
          "sum_rainfall_mm": 109.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103602",
          "tambon": "ต.สีกัน",
          "amphoe": "อ.ดอนเมือง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ดอนเมือง",
          "latitude": 13.91053,
          "longitude": 100.59492,
          "sum_rainfall_mm": 107.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102601",
          "tambon": "ต.ดินแดง",
          "amphoe": "อ.ดินแดง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ศูนย์ฯ (ดินแดง)",
          "latitude": 13.76902,
          "longitude": 100.55452,
          "sum_rainfall_mm": 123.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100206",
          "tambon": "ต.ถนนนครไชยศรี",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางซื่อ",
          "latitude": 13.80023,
          "longitude": 100.51848,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100203",
          "tambon": "ต.สวนจิตรลดา",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อุทยานเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
          "latitude": 13.76138,
          "longitude": 100.52066,
          "sum_rainfall_mm": 135.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101903",
          "tambon": "ต.ฉิมพลี",
          "amphoe": "อ.ตลิ่งชัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองบัว-ทางรถไฟ",
          "latitude": 13.79974,
          "longitude": 100.41609,
          "sum_rainfall_mm": 109.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101601",
          "tambon": "ต.วัดอรุณ",
          "amphoe": "อ.บางกอกใหญ่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองมอญ",
          "latitude": 13.74714,
          "longitude": 100.48531,
          "sum_rainfall_mm": 102.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100608",
          "tambon": "ต.หัวหมาก",
          "amphoe": "อ.บางกะปิ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองแสนแสบ บางกะปิ",
          "latitude": 13.76131,
          "longitude": 100.61601,
          "sum_rainfall_mm": 150.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100502",
          "tambon": "ต.อนุสาวรีย์",
          "amphoe": "อ.บางเขน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว วัดบางบัว",
          "latitude": 13.85402,
          "longitude": 100.58746,
          "sum_rainfall_mm": 112.60000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 110.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104002",
          "tambon": "ต.บางแคเหนือ",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางจาก",
          "latitude": 13.71471,
          "longitude": 100.39555,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104004",
          "tambon": "ต.หลักสอง",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองภาษีเจริญ เพชรเกษม69",
          "latitude": 13.69158,
          "longitude": 100.38127,
          "sum_rainfall_mm": 117.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102901",
          "tambon": "ต.บางซื่อ",
          "amphoe": "อ.บางซื่อ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางซื่อ",
          "latitude": 13.80973,
          "longitude": 100.53723,
          "sum_rainfall_mm": 104.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104701",
          "tambon": "ต.บางนา",
          "amphoe": "อ.บางนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.บางนา",
          "latitude": 13.67493,
          "longitude": 100.58757,
          "sum_rainfall_mm": 152.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102502",
          "tambon": "ต.บางอ้อ",
          "amphoe": "อ.บางพลัด",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางพลัด",
          "latitude": 13.79429,
          "longitude": 100.50479,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100404",
          "tambon": "ต.บางรัก",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.กรุงเกษม",
          "latitude": 13.73042,
          "longitude": 100.51397,
          "sum_rainfall_mm": 119.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100405",
          "tambon": "ต.สี่พระยา",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางรัก",
          "latitude": 13.73067,
          "longitude": 100.52382,
          "sum_rainfall_mm": 142.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102701",
          "tambon": "ต.คลองกุ่ม",
          "amphoe": "อ.บึงกุ่ม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บึงกุ่ม",
          "latitude": 13.7855,
          "longitude": 100.66949,
          "sum_rainfall_mm": 130.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100703",
          "tambon": "ต.ปทุมวัน",
          "amphoe": "อ.ปทุมวัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองอรชร",
          "latitude": 13.74807,
          "longitude": 100.53618,
          "sum_rainfall_mm": 123.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103201",
          "tambon": "ต.ประเวศ",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ประเวศ",
          "latitude": 13.71701,
          "longitude": 100.69472,
          "sum_rainfall_mm": 145.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103202",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงหนองบอน",
          "latitude": 13.69529,
          "longitude": 100.65375,
          "sum_rainfall_mm": 167.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100805",
          "tambon": "ต.วัดโสมนัส",
          "amphoe": "อ.ป้อมปราบศัตรูพ่าย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ป้อมปราบฯ",
          "latitude": 13.75826,
          "longitude": 100.51304,
          "sum_rainfall_mm": 112.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101401",
          "tambon": "ต.สามเสนใน",
          "amphoe": "อ.พญาไท",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พญาไท",
          "latitude": 13.78003,
          "longitude": 100.54287,
          "sum_rainfall_mm": 149.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 153.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100101",
          "tambon": "ต.พระบรมมหาราชวัง",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปากคลองตลาด",
          "latitude": 13.74228,
          "longitude": 100.49454,
          "sum_rainfall_mm": 146.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100112",
          "tambon": "ต.วัดสามพระยา",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พระนคร",
          "latitude": 13.7649,
          "longitude": 100.49872,
          "sum_rainfall_mm": 120.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101001",
          "tambon": "ต.มีนบุรี",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.มีนบุรี",
          "latitude": 13.8136,
          "longitude": 100.73122,
          "sum_rainfall_mm": 166.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.ประชาร่วมใจ",
          "latitude": 13.8212,
          "longitude": 100.74717,
          "sum_rainfall_mm": 185.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101203",
          "tambon": "ต.ช่องนนทรี",
          "amphoe": "อ.ยานนาวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ยานนาวา",
          "latitude": 13.69627,
          "longitude": 100.54222,
          "sum_rainfall_mm": 128.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103704",
          "tambon": "ต.มักกะสัน",
          "amphoe": "อ.ราชเทวี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงมักกะสัน",
          "latitude": 13.75665,
          "longitude": 100.54839,
          "sum_rainfall_mm": 128.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101106",
          "tambon": "ต.ขุมทอง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-ถ.ร่วมพัฒนา",
          "latitude": 13.70097,
          "longitude": 100.85106,
          "sum_rainfall_mm": 140.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 238.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103801",
          "tambon": "ต.ลาดพร้าว",
          "amphoe": "อ.ลาดพร้าว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
          "latitude": 13.93183,
          "longitude": 100.63952,
          "sum_rainfall_mm": 162.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104501",
          "tambon": "ต.วังทองหลาง",
          "amphoe": "อ.วังทองหลาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.วังทองหลาง",
          "latitude": 13.76435,
          "longitude": 100.60553,
          "sum_rainfall_mm": 125.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103902",
          "tambon": "ต.คลองตันเหนือ",
          "amphoe": "อ.วัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.แสนแสบ-คลองตัน",
          "latitude": 13.7411,
          "longitude": 100.5964,
          "sum_rainfall_mm": 133.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103401",
          "tambon": "ต.สวนหลวง",
          "amphoe": "อ.สวนหลวง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สวนหลวง",
          "latitude": 13.73043,
          "longitude": 100.65154,
          "sum_rainfall_mm": 121.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104401",
          "tambon": "ต.สะพานสูง",
          "amphoe": "อ.สะพานสูง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สะพานสูง",
          "latitude": 13.76881,
          "longitude": 100.68545,
          "sum_rainfall_mm": 171.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101302",
          "tambon": "ต.สัมพันธวงศ์",
          "amphoe": "อ.สัมพันธวงศ์",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ท่าน้ำสวัสดี",
          "latitude": 13.73664,
          "longitude": 100.5096,
          "sum_rainfall_mm": 124.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102801",
          "tambon": "ต.ทุ่งวัดดอน",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สาทร",
          "latitude": 13.70821,
          "longitude": 100.52641,
          "sum_rainfall_mm": 132.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102802",
          "tambon": "ต.ยานนาวา",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสาทร",
          "latitude": 13.71839,
          "longitude": 100.51496,
          "sum_rainfall_mm": 112.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104201",
          "tambon": "ต.สายไหม",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ซ.แอนเน็กซ์",
          "latitude": 13.93786,
          "longitude": 100.62661,
          "sum_rainfall_mm": 154.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104202",
          "tambon": "ต.ออเงิน",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สายไหม",
          "latitude": 13.89531,
          "longitude": 100.6609,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102302",
          "tambon": "ต.หนองแขม",
          "amphoe": "อ.หนองแขม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ทวีฯ-ค.ภาษีฯ",
          "latitude": 13.69168,
          "longitude": 100.38097,
          "sum_rainfall_mm": 108.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100301",
          "tambon": "ต.กระทุ่มราย",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.หนองจอก",
          "latitude": 13.85584,
          "longitude": 100.86259,
          "sum_rainfall_mm": 109.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100304",
          "tambon": "ต.คลองสิบสอง",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.สิบสอง-ถ.ประชาสำราญ",
          "latitude": 13.91368,
          "longitude": 100.86244,
          "sum_rainfall_mm": 110.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100307",
          "tambon": "ต.ลำผักชี",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ลำผักชี-รร.ลำผักชี",
          "latitude": 13.79205,
          "longitude": 100.83524,
          "sum_rainfall_mm": 133.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100302",
          "tambon": "ต.หนองจอก",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองแสนแสบ",
          "latitude": 13.85516,
          "longitude": 100.87292,
          "sum_rainfall_mm": 124.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104101",
          "tambon": "ต.ทุ่งสองห้อง",
          "amphoe": "อ.หลักสี่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดศูนย์ราชการ-ถ.แจ้งวัฒนะ",
          "latitude": 13.8921,
          "longitude": 100.56383,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101701",
          "tambon": "ต.ห้วยขวาง",
          "amphoe": "อ.ห้วยขวาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ห้วยขวาง",
          "latitude": 13.77678,
          "longitude": 100.57906,
          "sum_rainfall_mm": 128.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "730324",
          "tambon": "ต.ไทยาวาส",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สะพานนครชัยศรี",
          "latitude": 13.79217,
          "longitude": 100.19817,
          "sum_rainfall_mm": 117.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "730301",
          "tambon": "ต.นครชัยศรี",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.นครชัยศรี",
          "latitude": 13.79036,
          "longitude": 100.19051,
          "sum_rainfall_mm": 116.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130207",
          "tambon": "ต.คลองเจ็ด",
          "amphoe": "อ.คลองหลวง",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "รร.วัดอู่ข้าว",
          "latitude": 14.19111,
          "longitude": 100.75421,
          "sum_rainfall_mm": 121.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130301",
          "tambon": "ต.ประชาธิปัตย์",
          "amphoe": "อ.ธัญบุรี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.จุฬาลงกรณ์",
          "latitude": 13.98135,
          "longitude": 100.6057,
          "sum_rainfall_mm": 132.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130114",
          "tambon": "ต.หลักหก",
          "amphoe": "อ.เมืองปทุมธานี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองเปรมประชากร หลักหก",
          "latitude": 13.96562,
          "longitude": 100.60262,
          "sum_rainfall_mm": 118.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130604",
          "tambon": "ต.ลำลูกกา",
          "amphoe": "อ.ลำลูกกา",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองหกวา ลำลูกกา คลอง8",
          "latitude": 13.9416,
          "longitude": 100.77499,
          "sum_rainfall_mm": 130.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130404",
          "tambon": "ต.บึงชำอ้อ",
          "amphoe": "อ.หนองเสือ",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "บ้านน้อยสว่าง",
          "latitude": 14.1652,
          "longitude": 100.77855,
          "sum_rainfall_mm": 171.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "110602",
          "tambon": "ต.ศีรษะจรเข้น้อย",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.ศีรษะจรเข้น้อย",
          "latitude": 13.67777,
          "longitude": 100.7945,
          "sum_rainfall_mm": 217.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "110603",
          "tambon": "ต.ศีรษะจรเข้ใหญ่",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
          "latitude": 13.66949,
          "longitude": 100.80058,
          "sum_rainfall_mm": 210.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 108.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 111.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "110115",
          "tambon": "ต.เทพารักษ์",
          "amphoe": "อ.เมืองสมุทรปราการ",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสำโรง",
          "latitude": 13.64819,
          "longitude": 100.59514,
          "sum_rainfall_mm": 146.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        }
      ],
      "area_nearby": [
        {
          "geocode": "620413",
          "tambon": "ต.เกาะตาล",
          "amphoe": "อ.ขาณุวรลักษบุรี",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านเกาะตาล",
          "latitude": 16.135833,
          "longitude": 99.784167,
          "sum_rainfall_mm": 77.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620411",
          "tambon": "ต.ปางมะค่า",
          "amphoe": "อ.ขาณุวรลักษบุรี",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานต้นน้ำ (เกาะแก้ว-ตลิ่งสูง)",
          "latitude": 15.91465,
          "longitude": 99.4194,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620411",
          "tambon": "ต.ปางมะค่า",
          "amphoe": "อ.ขาณุวรลักษบุรี",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานแม่วงก์",
          "latitude": 15.90176,
          "longitude": 99.4704,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620404",
          "tambon": "ต.ป่าพุทรา",
          "amphoe": "อ.ขาณุวรลักษบุรี",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ขาณุวรลักษบุรี",
          "latitude": 16.06475,
          "longitude": 99.8603,
          "sum_rainfall_mm": 95.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620406",
          "tambon": "ต.สลกบาตร",
          "amphoe": "อ.ขาณุวรลักษบุรี",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.สลกบาตร",
          "latitude": 15.97907,
          "longitude": 99.82462,
          "sum_rainfall_mm": 67.60000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620501",
          "tambon": "ต.คลองขลุง",
          "amphoe": "อ.คลองขลุง",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.คลองขลุง",
          "latitude": 16.20864,
          "longitude": 99.70895,
          "sum_rainfall_mm": 108.60000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620504",
          "tambon": "ต.ท่าพุทรา",
          "amphoe": "อ.คลองขลุง",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองวังหิน",
          "latitude": 16.229583,
          "longitude": 99.696722,
          "sum_rainfall_mm": 86.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "620509",
          "tambon": "ต.วังไทร",
          "amphoe": "อ.คลองขลุง",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สำนักสงฆ์มอหินเพลิง",
          "latitude": 16.151548,
          "longitude": 99.527517,
          "sum_rainfall_mm": 83.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 135.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 137.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 126.40000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180104",
          "tambon": "ต.ชัยนาท",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.บรมธาตุ",
          "latitude": 15.15713,
          "longitude": 100.152981,
          "sum_rainfall_mm": 151.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180104",
          "tambon": "ต.ชัยนาท",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.บรมธาตุ",
          "latitude": 15.15785,
          "longitude": 100.15282,
          "sum_rainfall_mm": 201.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180104",
          "tambon": "ต.ชัยนาท",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.บรมธาตุ",
          "latitude": 15.15816,
          "longitude": 100.15352,
          "sum_rainfall_mm": 204.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180107",
          "tambon": "ต.ธรรมามูล",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานธรรมจักร(วัดธรรมามูล)",
          "latitude": 15.25029,
          "longitude": 100.08347,
          "sum_rainfall_mm": 147.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180102",
          "tambon": "ต.บ้านกล้วย",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.มหาราช",
          "latitude": 15.16144,
          "longitude": 100.17268,
          "sum_rainfall_mm": 206.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180102",
          "tambon": "ต.บ้านกล้วย",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.มหาราช",
          "latitude": 15.15892,
          "longitude": 100.17329,
          "sum_rainfall_mm": 198.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180106",
          "tambon": "ต.หาดท่าเสา",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.พลเทพ",
          "latitude": 15.214294,
          "longitude": 100.073325,
          "sum_rainfall_mm": 138.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180106",
          "tambon": "ต.หาดท่าเสา",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.พลเทพ",
          "latitude": 15.215885,
          "longitude": 100.073047,
          "sum_rainfall_mm": 25.0,
          "observed_at": "2026-09-25T04:00:00+07:00"
        },
        {
          "geocode": "180106",
          "tambon": "ต.หาดท่าเสา",
          "amphoe": "อ.เมืองชัยนาท",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคง-ศุข ศรีสวัสดิ์",
          "latitude": 15.225,
          "longitude": 100.07824,
          "sum_rainfall_mm": 158.40000000000003,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 136.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 170.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 121.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180405",
          "tambon": "ต.โพนางดำออก",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สรรพยา",
          "latitude": 15.10907,
          "longitude": 100.26785,
          "sum_rainfall_mm": 157.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180401",
          "tambon": "ต.สรรพยา",
          "amphoe": "อ.สรรพยา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สรรพยา",
          "latitude": 15.13217,
          "longitude": 100.25129,
          "sum_rainfall_mm": 183.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180611",
          "tambon": "ต.สามง่ามท่าโบสถ์",
          "amphoe": "อ.หันคา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.ท่าโบสถ์",
          "latitude": 15.05395,
          "longitude": 100.01206,
          "sum_rainfall_mm": 86.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180611",
          "tambon": "ต.สามง่ามท่าโบสถ์",
          "amphoe": "อ.หันคา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.ท่าโบสถ์",
          "latitude": 15.05349,
          "longitude": 100.01175,
          "sum_rainfall_mm": 123.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "180601",
          "tambon": "ต.หันคา",
          "amphoe": "อ.หันคา",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.หันคา",
          "latitude": 14.96964,
          "longitude": 100.01039,
          "sum_rainfall_mm": 110.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260207",
          "tambon": "ต.นาหินลาด",
          "amphoe": "อ.ปากพลี",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านท่ามะปราง",
          "latitude": 14.222935,
          "longitude": 101.356088,
          "sum_rainfall_mm": 86.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "260207",
          "tambon": "ต.นาหินลาด",
          "amphoe": "อ.ปากพลี",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.20 (น้ำตกเหวนรก)",
          "latitude": 14.28622,
          "longitude": 101.39359,
          "sum_rainfall_mm": 11.600000000000001,
          "observed_at": "2026-09-25T15:00:00+07:00"
        },
        {
          "geocode": "260207",
          "tambon": "ต.นาหินลาด",
          "amphoe": "อ.ปากพลี",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.นาหินลาด",
          "latitude": 14.20724,
          "longitude": 101.35025,
          "sum_rainfall_mm": 144.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260112",
          "tambon": "ต.เขาพระ",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านวังรี",
          "latitude": 14.333768,
          "longitude": 101.195938,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "260102",
          "tambon": "ต.ท่าช้าง",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เขื่อนนายก",
          "latitude": 14.18205,
          "longitude": 101.162164,
          "sum_rainfall_mm": 106.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260107",
          "tambon": "ต.ศรีจุฬา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีจุฬา",
          "latitude": 14.07064,
          "longitude": 101.13746,
          "sum_rainfall_mm": 168.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260109",
          "tambon": "ต.ศรีนาวา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานเขานางบวช",
          "latitude": 14.245718,
          "longitude": 101.27481,
          "sum_rainfall_mm": 31.599999999999994,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260110",
          "tambon": "ต.สาริกา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านดง",
          "latitude": 14.321565,
          "longitude": 101.306075,
          "sum_rainfall_mm": 61.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "260110",
          "tambon": "ต.สาริกา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคลองวังตะไคร้",
          "latitude": 14.321305,
          "longitude": 101.30604,
          "sum_rainfall_mm": 92.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260110",
          "tambon": "ต.สาริกา",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ป่าต้นน้ำคลองมะเดื่อ อช.เขาใหญ่ (นางรอง)",
          "latitude": 14.3693,
          "longitude": 101.2712,
          "sum_rainfall_mm": 0.6000000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260111",
          "tambon": "ต.หินตั้ง",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ที่ทำการน้ำตกนางรอง",
          "latitude": 14.333356,
          "longitude": 101.320856,
          "sum_rainfall_mm": 63.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "260111",
          "tambon": "ต.หินตั้ง",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคลองนางรอง",
          "latitude": 14.315195,
          "longitude": 101.312836,
          "sum_rainfall_mm": 96.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260111",
          "tambon": "ต.หินตั้ง",
          "amphoe": "อ.เมืองนครนายก",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อุทยานแห่งชาติเขาใหญ่",
          "latitude": 14.434425,
          "longitude": 101.372604,
          "sum_rainfall_mm": 16.6,
          "observed_at": "2026-09-24T05:00:00+07:00"
        },
        {
          "geocode": "260405",
          "tambon": "ต.บางสมบูรณ์",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สมบูรณ์",
          "latitude": 13.970389,
          "longitude": 101.138699,
          "sum_rainfall_mm": 154.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260404",
          "tambon": "ต.โพธิ์แทน",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองแม่น้ำใน(โพธิ์แทน)",
          "latitude": 14.212921,
          "longitude": 100.942453,
          "sum_rainfall_mm": 126.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "260409",
          "tambon": "ต.องครักษ์",
          "amphoe": "อ.องครักษ์",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "องครักษ์",
          "latitude": 14.113633,
          "longitude": 101.01952,
          "sum_rainfall_mm": 79.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600201",
          "tambon": "ต.โกรกพระ",
          "amphoe": "อ.โกรกพระ",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.โกรกพระ",
          "latitude": 15.55312,
          "longitude": 100.0709,
          "sum_rainfall_mm": 126.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600702",
          "tambon": "ต.ช่องแค",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ่อดินขาว",
          "latitude": 15.169044,
          "longitude": 100.41471,
          "sum_rainfall_mm": 91.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600702",
          "tambon": "ต.ช่องแค",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เขาวง",
          "latitude": 15.181689,
          "longitude": 100.41453,
          "sum_rainfall_mm": 139.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600701",
          "tambon": "ต.ตาคลี",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ตาคลี",
          "latitude": 15.29119,
          "longitude": 100.38288,
          "sum_rainfall_mm": 129.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600710",
          "tambon": "ต.พรหมนิมิต",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.ช่องแค",
          "latitude": 15.145483,
          "longitude": 100.411717,
          "sum_rainfall_mm": 90.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600710",
          "tambon": "ต.พรหมนิมิต",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.ช่องแค",
          "latitude": 15.14554,
          "longitude": 100.41321,
          "sum_rainfall_mm": 145.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600710",
          "tambon": "ต.พรหมนิมิต",
          "amphoe": "อ.ตาคลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ช่องแค",
          "latitude": 15.14624,
          "longitude": 100.41298,
          "sum_rainfall_mm": 148.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600801",
          "tambon": "ต.ท่าตะโก",
          "amphoe": "อ.ท่าตะโก",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ท่าตะโก",
          "latitude": 15.63248,
          "longitude": 100.47483,
          "sum_rainfall_mm": 5.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600805",
          "tambon": "ต.วังมหากร",
          "amphoe": "อ.ท่าตะโก",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "TC.60",
          "latitude": 15.67,
          "longitude": 100.334167,
          "sum_rainfall_mm": 131.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "601007",
          "tambon": "ต.เขาทอง",
          "amphoe": "อ.พยุหะคีรี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.เขาทอง",
          "latitude": 15.5707,
          "longitude": 100.18319,
          "sum_rainfall_mm": 105.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "601008",
          "tambon": "ต.ท่าน้ำอ้อย",
          "amphoe": "อ.พยุหะคีรี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พยุหะคีรี",
          "latitude": 15.42655,
          "longitude": 100.13471,
          "sum_rainfall_mm": 89.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600908",
          "tambon": "ต.ไพศาลี",
          "amphoe": "อ.ไพศาลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ไพศาลี",
          "latitude": 15.60012,
          "longitude": 100.6572,
          "sum_rainfall_mm": 137.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "600906",
          "tambon": "ต.วังข่อย",
          "amphoe": "อ.ไพศาลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหัวพุ",
          "latitude": 15.564188,
          "longitude": 100.705829,
          "sum_rainfall_mm": 59.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "600906",
          "tambon": "ต.วังข่อย",
          "amphoe": "อ.ไพศาลี",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านซับสมบูรณ์",
          "latitude": 15.566287,
          "longitude": 100.778566,
          "sum_rainfall_mm": 50.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "140201",
          "tambon": "ต.ท่าเรือ",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท่าเรือ",
          "latitude": 14.56014,
          "longitude": 100.71987,
          "sum_rainfall_mm": 190.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140203",
          "tambon": "ต.ท่าหลวง",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.พระนารายน์",
          "latitude": 14.55667,
          "longitude": 100.76201,
          "sum_rainfall_mm": 222.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140203",
          "tambon": "ต.ท่าหลวง",
          "amphoe": "อ.ท่าเรือ",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.พระนารายน์",
          "latitude": 14.5583,
          "longitude": 100.76205,
          "sum_rainfall_mm": 210.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140303",
          "tambon": "ต.บ่อโพง",
          "amphoe": "อ.นครหลวง",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "นครหลวง",
          "latitude": 14.40269,
          "longitude": 100.5864,
          "sum_rainfall_mm": 126.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140503",
          "tambon": "ต.ไทรน้อย",
          "amphoe": "อ.บางบาล",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองบางบาล",
          "latitude": 14.42303,
          "longitude": 100.48186,
          "sum_rainfall_mm": 143.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140513",
          "tambon": "ต.บางหลวงโดด",
          "amphoe": "อ.บางบาล",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองบางหลวง",
          "latitude": 14.4158,
          "longitude": 100.44071,
          "sum_rainfall_mm": 108.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140702",
          "tambon": "ต.ขยาย",
          "amphoe": "อ.บางปะหัน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดจอมเกษ",
          "latitude": 14.414349,
          "longitude": 100.55782,
          "sum_rainfall_mm": 134.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140714",
          "tambon": "ต.โพธิ์สามต้น",
          "amphoe": "อ.บางปะหัน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บางปะหัน",
          "latitude": 14.42731,
          "longitude": 100.55605,
          "sum_rainfall_mm": 138.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140618",
          "tambon": "ต.ขนอนหลวง",
          "amphoe": "อ.บางปะอิน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บางปะอิน",
          "latitude": 14.30455,
          "longitude": 100.56645,
          "sum_rainfall_mm": 115.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140604",
          "tambon": "ต.บ้านกรด",
          "amphoe": "อ.บางปะอิน",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดขนอนใต้",
          "latitude": 14.288251,
          "longitude": 100.61132,
          "sum_rainfall_mm": 104.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140812",
          "tambon": "ต.จักราช",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.ลาดชิด (ทุ่งผักไห่)",
          "latitude": 14.44056,
          "longitude": 100.35738,
          "sum_rainfall_mm": 96.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140805",
          "tambon": "ต.ตาลาน",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.บางแก้ว (ทุ่งผักไห่)",
          "latitude": 14.436604,
          "longitude": 100.37149,
          "sum_rainfall_mm": 118.39999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140806",
          "tambon": "ต.ท่าดินแดง",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร กุฎิ (ทุ่งป่าโมก)",
          "latitude": 14.412405,
          "longitude": 100.40116,
          "sum_rainfall_mm": 98.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140816",
          "tambon": "ต.บ้านใหญ่",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.ผักไห่",
          "latitude": 14.43626,
          "longitude": 100.375495,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140816",
          "tambon": "ต.บ้านใหญ่",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ผักไห่-เจ้าเจ็ด",
          "latitude": 14.43643,
          "longitude": 100.37562,
          "sum_rainfall_mm": 130.00000000000003,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140814",
          "tambon": "ต.ลาดชิด",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ที่ทำการกำนันตำบลลาดชิด",
          "latitude": 14.44142,
          "longitude": 100.35564,
          "sum_rainfall_mm": 127.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140815",
          "tambon": "ต.หน้าโคก",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานข้ามแม่น้ำน้อย (ทุ่งผักไห่)",
          "latitude": 14.498449,
          "longitude": 100.36825,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140802",
          "tambon": "ต.อมฤต",
          "amphoe": "อ.ผักไห่",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.ลาดชะโด (ทุ่งผักไห่)",
          "latitude": 14.464386,
          "longitude": 100.366005,
          "sum_rainfall_mm": 95.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140116",
          "tambon": "ต.บ้านเกาะ",
          "amphoe": "อ.พระนครศรีอยุธยา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.หันตรา",
          "latitude": 14.37456,
          "longitude": 100.58441,
          "sum_rainfall_mm": 75.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140108",
          "tambon": "ต.ภูเขาทอง",
          "amphoe": "อ.พระนครศรีอยุธยา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พระนครศรีอยุธยา",
          "latitude": 14.36913,
          "longitude": 100.52861,
          "sum_rainfall_mm": 108.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140113",
          "tambon": "ต.หันตรา",
          "amphoe": "อ.พระนครศรีอยุธยา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.กลางคลองข้าวเม่า (วัดกระสังข์)",
          "latitude": 14.357306,
          "longitude": 100.60569,
          "sum_rainfall_mm": 102.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "140104",
          "tambon": "ต.หัวรอ",
          "amphoe": "อ.พระนครศรีอยุธยา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.กระมัง (ปากคลองข้าวเม่า)",
          "latitude": 14.355055,
          "longitude": 100.58354,
          "sum_rainfall_mm": 91.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141106",
          "tambon": "ต.พยอม",
          "amphoe": "อ.วังน้อย",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.พระอินทราชา",
          "latitude": 14.14378,
          "longitude": 100.62075,
          "sum_rainfall_mm": 144.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141103",
          "tambon": "ต.วังน้อย",
          "amphoe": "อ.วังน้อย",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.พระอินทราชา",
          "latitude": 14.14407,
          "longitude": 100.62136,
          "sum_rainfall_mm": 144.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141217",
          "tambon": "ต.เจ้าเสด็จ",
          "amphoe": "อ.เสนา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เสนา",
          "latitude": 14.31976,
          "longitude": 100.37952,
          "sum_rainfall_mm": 120.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141201",
          "tambon": "ต.เสนา",
          "amphoe": "อ.เสนา",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เสนา (ทุ่งบางบาล-บ้านแพน)",
          "latitude": 14.327773,
          "longitude": 100.405464,
          "sum_rainfall_mm": 133.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "141406",
          "tambon": "ต.อุทัย",
          "amphoe": "อ.อุทัย",
          "province": "จ.พระนครศรีอยุธยา",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองช่องสะเดา",
          "latitude": 14.344762,
          "longitude": 100.670105,
          "sum_rainfall_mm": 133.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "670601",
          "tambon": "ต.ศรีเทพ",
          "amphoe": "อ.ศรีเทพ",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีเทพ",
          "latitude": 15.43789,
          "longitude": 101.16249,
          "sum_rainfall_mm": 105.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160905",
          "tambon": "ต.โคกแสมสาร",
          "amphoe": "อ.โคกเจริญ",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านโคกแสมสาร",
          "latitude": 15.336768,
          "longitude": 100.831599,
          "sum_rainfall_mm": 10.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "160902",
          "tambon": "ต.ยางราก",
          "amphoe": "อ.โคกเจริญ",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านวังวัด",
          "latitude": 15.337537,
          "longitude": 100.960186,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "160903",
          "tambon": "ต.หนองมะค่า",
          "amphoe": "อ.โคกเจริญ",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านเขาขุยพัฒนา",
          "latitude": 15.528146,
          "longitude": 100.843028,
          "sum_rainfall_mm": 34.5,
          "observed_at": "2026-09-25T17:00:00+07:00"
        },
        {
          "geocode": "160903",
          "tambon": "ต.หนองมะค่า",
          "amphoe": "อ.โคกเจริญ",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.หนองมะค่า",
          "latitude": 15.4321,
          "longitude": 100.9245,
          "sum_rainfall_mm": 151.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160422",
          "tambon": "ต.เขาแหลม",
          "amphoe": "อ.ชัยบาดาล",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านห้วยหิน",
          "latitude": 15.080861,
          "longitude": 100.965868,
          "sum_rainfall_mm": 44.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "160414",
          "tambon": "ต.ท่ามะนาว",
          "amphoe": "อ.ชัยบาดาล",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ท่ามะนาว",
          "latitude": 15.19934,
          "longitude": 101.16389,
          "sum_rainfall_mm": 119.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160410",
          "tambon": "ต.นาโสม",
          "amphoe": "อ.ชัยบาดาล",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เขตห้ามล่าสัตว์ป่าเขาสมโภชน์",
          "latitude": 15.181677,
          "longitude": 101.29398,
          "sum_rainfall_mm": 68.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160406",
          "tambon": "ต.บัวชุม",
          "amphoe": "อ.ชัยบาดาล",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคลองลำสนธิ",
          "latitude": 15.246861,
          "longitude": 101.19566,
          "sum_rainfall_mm": 131.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160201",
          "tambon": "ต.พัฒนานิคม",
          "amphoe": "อ.พัฒนานิคม",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "คลองส้ม",
          "latitude": 14.822028,
          "longitude": 101.014594,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160207",
          "tambon": "ต.หนองบัว",
          "amphoe": "อ.พัฒนานิคม",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือเขื่อนป่าสัก",
          "latitude": 14.848254,
          "longitude": 101.090205,
          "sum_rainfall_mm": 103.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160106",
          "tambon": "ต.เขาสามยอด",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ชุมชนเขาสามยอด (บ้านน้ำจั้น หมู่ 2)",
          "latitude": 14.825584,
          "longitude": 100.69195,
          "sum_rainfall_mm": 74.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "160109",
          "tambon": "ต.โคกตูม",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อ่างเก็บน้ำห้วยส้ม",
          "latitude": 14.865248,
          "longitude": 100.861244,
          "sum_rainfall_mm": 10.200000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160109",
          "tambon": "ต.โคกตูม",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อ่างเก็บน้ำห้วยซับเหล็ก",
          "latitude": 14.814826,
          "longitude": 100.77581,
          "sum_rainfall_mm": 75.39999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160117",
          "tambon": "ต.บางขันหมาก",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทรบ. ปากคลองห้าวา (ทุ่งท่าวุ้ง)",
          "latitude": 14.818599,
          "longitude": 100.576515,
          "sum_rainfall_mm": 118.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "160122",
          "tambon": "ต.โพธิ์เก้าต้น",
          "amphoe": "อ.เมืองลพบุรี",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เมืองลพบุรี",
          "latitude": 14.76049,
          "longitude": 100.5996,
          "sum_rainfall_mm": 138.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "161106",
          "tambon": "ต.ชอนสารเดช",
          "amphoe": "อ.หนองม่วง",
          "province": "จ.ลพบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ชอนสารเดช",
          "latitude": 15.18496,
          "longitude": 100.68131,
          "sum_rainfall_mm": 137.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "750109",
          "tambon": "ต.คลองโคน",
          "amphoe": "อ.เมืองสมุทรสงคราม",
          "province": "จ.สมุทรสงคราม",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": " สะพานข้ามคลองโคน",
          "latitude": 13.3319,
          "longitude": 99.96896,
          "sum_rainfall_mm": 98.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "750111",
          "tambon": "ต.บางจะเกร็ง",
          "amphoe": "อ.เมืองสมุทรสงคราม",
          "province": "จ.สมุทรสงคราม",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดศรัทธาธรรม",
          "latitude": 13.3773,
          "longitude": 99.993,
          "sum_rainfall_mm": 92.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "750101",
          "tambon": "ต.แม่กลอง",
          "amphoe": "อ.เมืองสมุทรสงคราม",
          "province": "จ.สมุทรสงคราม",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พระรามสอง",
          "latitude": 13.38362,
          "longitude": 99.9836,
          "sum_rainfall_mm": 112.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "750103",
          "tambon": "ต.ลาดใหญ่",
          "amphoe": "อ.เมืองสมุทรสงคราม",
          "province": "จ.สมุทรสงคราม",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "โรงเรียนบ้านลาดใหญ่สามัคคี",
          "latitude": 13.482,
          "longitude": 100.044,
          "sum_rainfall_mm": 74.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "190603",
          "tambon": "ต.สร่างโศก",
          "amphoe": "อ.บ้านหมอ",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานคลองส่งน้ำชลประทาน บ้านสร่างโศก",
          "latitude": 14.650794,
          "longitude": 100.742775,
          "sum_rainfall_mm": 121.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "191203",
          "tambon": "ต.วังม่วง",
          "amphoe": "อ.วังม่วง",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ฝายคลองสุคต",
          "latitude": 14.863621,
          "longitude": 101.119957,
          "sum_rainfall_mm": 129.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "191203",
          "tambon": "ต.วังม่วง",
          "amphoe": "อ.วังม่วง",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.วังม่วง",
          "latitude": 14.84867,
          "longitude": 101.14549,
          "sum_rainfall_mm": 142.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "190301",
          "tambon": "ต.หนองแค",
          "amphoe": "อ.หนองแค",
          "province": "จ.สระบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.พระศรีศิลป์",
          "latitude": 14.32729,
          "longitude": 100.87117,
          "sum_rainfall_mm": 132.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170303",
          "tambon": "ต.โพสังโฆ",
          "amphoe": "อ.ค่ายบางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานค่ายบางระจัน",
          "latitude": 14.815288,
          "longitude": 100.36448,
          "sum_rainfall_mm": 113.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170504",
          "tambon": "ต.พิกุลทอง",
          "amphoe": "อ.ท่าช้าง",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ยางมณี",
          "latitude": 14.751,
          "longitude": 100.41463,
          "sum_rainfall_mm": 155.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170504",
          "tambon": "ต.พิกุลทอง",
          "amphoe": "อ.ท่าช้าง",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.ยางมณี",
          "latitude": 14.75033,
          "longitude": 100.41498,
          "sum_rainfall_mm": 142.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170203",
          "tambon": "ต.เชิงกลัด",
          "amphoe": "อ.บางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.บางระจัน",
          "latitude": 14.92594,
          "longitude": 100.27585,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170203",
          "tambon": "ต.เชิงกลัด",
          "amphoe": "อ.บางระจัน",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.บางระจัน",
          "latitude": 14.92539,
          "longitude": 100.27912,
          "sum_rainfall_mm": 103.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170402",
          "tambon": "ต.พรหมบุรี",
          "amphoe": "อ.พรหมบุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "พรหมบุรี",
          "latitude": 14.79091,
          "longitude": 100.45184,
          "sum_rainfall_mm": 133.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170106",
          "tambon": "ต.ต้นโพธิ์",
          "amphoe": "อ.เมืองสิงห์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานอนุสรณ์ 100 ปีสิงห์บุรี (สะพานหลวงพ่อแพ 89)",
          "latitude": 14.870205,
          "longitude": 100.408585,
          "sum_rainfall_mm": 112.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170605",
          "tambon": "ต.ชีน้ำร้าย",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สถานีสูบน้ำคลองระบายชัยนาท-ป่าสัก 2 (ทุ่งเชียงราก)",
          "latitude": 15.05502,
          "longitude": 100.32081,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170610",
          "tambon": "ต.โพธิ์ชัย",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.โพธิ์ชัย",
          "latitude": 14.9972,
          "longitude": 100.42356,
          "sum_rainfall_mm": 7.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "170601",
          "tambon": "ต.อินทร์บุรี",
          "amphoe": "อ.อินทร์บุรี",
          "province": "จ.สิงห์บุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อินทร์บุรี",
          "latitude": 15.00602,
          "longitude": 100.33088,
          "sum_rainfall_mm": 121.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ปตร.สามชุก",
          "latitude": 14.772463,
          "longitude": 100.088281,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ท้ายปตร.ชลมาร์คพิจารณ์",
          "latitude": 14.7706,
          "longitude": 100.08824,
          "sum_rainfall_mm": 129.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สามชุก",
          "latitude": 14.75138,
          "longitude": 100.09592,
          "sum_rainfall_mm": 116.59999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "720803",
          "tambon": "ต.สามชุก",
          "amphoe": "อ.สามชุก",
          "province": "จ.สุพรรณบุรี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "เหนือปตร.ชลมาร์คพิจารณ์",
          "latitude": 14.77118,
          "longitude": 100.0884,
          "sum_rainfall_mm": 126.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "150302",
          "tambon": "ต.ป่าโมก",
          "amphoe": "อ.ป่าโมก",
          "province": "จ.อ่างทอง",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานป่าโมก",
          "latitude": 14.498074,
          "longitude": 100.44962,
          "sum_rainfall_mm": 119.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610205",
          "tambon": "ต.โคกหม้อ",
          "amphoe": "อ.ทัพทัน",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "วัดโคกหม้อ",
          "latitude": 15.534278,
          "longitude": 99.899083,
          "sum_rainfall_mm": 117.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610201",
          "tambon": "ต.ทัพทัน",
          "amphoe": "อ.ทัพทัน",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ทัพทัน",
          "latitude": 15.45764,
          "longitude": 99.89484,
          "sum_rainfall_mm": 134.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610301",
          "tambon": "ต.สว่างอารมณ์",
          "amphoe": "อ.สว่างอารมณ์",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.สว่างแจ้งสบายใจ",
          "latitude": 15.559001,
          "longitude": 99.864809,
          "sum_rainfall_mm": 91.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610301",
          "tambon": "ต.สว่างอารมณ์",
          "amphoe": "อ.สว่างอารมณ์",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.สว่างอารมณ์",
          "latitude": 15.58538,
          "longitude": 99.86514,
          "sum_rainfall_mm": 126.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610501",
          "tambon": "ต.หนองขาหย่าง",
          "amphoe": "อ.หนองขาหย่าง",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.หนองขาหย่าง",
          "latitude": 15.36227,
          "longitude": 99.93845,
          "sum_rainfall_mm": 142.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610410",
          "tambon": "ต.เขากวางทอง",
          "amphoe": "อ.หนองฉาง",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ฝายทับเสลา",
          "latitude": 15.407623,
          "longitude": 99.714458,
          "sum_rainfall_mm": 98.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "610410",
          "tambon": "ต.เขากวางทอง",
          "amphoe": "อ.หนองฉาง",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านสนามบิน",
          "latitude": 15.396463,
          "longitude": 99.661082,
          "sum_rainfall_mm": 56.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "610401",
          "tambon": "ต.หนองฉาง",
          "amphoe": "อ.หนองฉาง",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.หนองฉาง",
          "latitude": 15.38896,
          "longitude": 99.84505,
          "sum_rainfall_mm": 132.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "221004",
          "tambon": "ต.คลองพลู",
          "amphoe": "อ.เขาคิชฌกูฏ",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านวังยายมุก",
          "latitude": 12.92717,
          "longitude": 102.015565,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "221005",
          "tambon": "ต.จันทเขลม",
          "amphoe": "อ.เขาคิชฌกูฏ",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านจันตาแป๊ะ",
          "latitude": 13.035104,
          "longitude": 102.108348,
          "sum_rainfall_mm": 17.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "221005",
          "tambon": "ต.จันทเขลม",
          "amphoe": "อ.เขาคิชฌกูฏ",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านคลองใหญ่",
          "latitude": 12.972159,
          "longitude": 102.057715,
          "sum_rainfall_mm": 101.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "221005",
          "tambon": "ต.จันทเขลม",
          "amphoe": "อ.เขาคิชฌกูฏ",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สะพานคลองจันทเขลม",
          "latitude": 13.003336,
          "longitude": 102.04864,
          "sum_rainfall_mm": 145.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "221003",
          "tambon": "ต.ตะเคียนทอง",
          "amphoe": "อ.เขาคิชฌกูฏ",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.ตะเคียนทอง",
          "latitude": 12.9131,
          "longitude": 102.0815,
          "sum_rainfall_mm": 187.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220401",
          "tambon": "ต.ทับไทร",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านคลองตานี",
          "latitude": 12.896003,
          "longitude": 102.271006,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220401",
          "tambon": "ต.ทับไทร",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านวังกระแพร่",
          "latitude": 12.971751,
          "longitude": 102.285409,
          "sum_rainfall_mm": 91.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220401",
          "tambon": "ต.ทับไทร",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านทุ่งม่วง",
          "latitude": 12.85727,
          "longitude": 102.306321,
          "sum_rainfall_mm": 100.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "220401",
          "tambon": "ต.ทับไทร",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านดงจิก",
          "latitude": 12.992358,
          "longitude": 102.304401,
          "sum_rainfall_mm": 67.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "220401",
          "tambon": "ต.ทับไทร",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านทุ่งกร่าง",
          "latitude": 13.016522,
          "longitude": 102.270633,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "220409",
          "tambon": "ต.เทพนิมิต",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.เทพนิมิต",
          "latitude": 13.04028,
          "longitude": 102.44956,
          "sum_rainfall_mm": 75.99999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220402",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเครือหวาย",
          "latitude": 12.902447,
          "longitude": 102.406244,
          "sum_rainfall_mm": 80.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "220402",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.โป่งน้ำร้อน",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.โป่งน้ำร้อน",
          "latitude": 12.90515,
          "longitude": 102.26646,
          "sum_rainfall_mm": 153.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220506",
          "tambon": "ต.ฉมัน",
          "amphoe": "อ.มะขาม",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านตะบกเตี้ย",
          "latitude": 12.822394,
          "longitude": 102.233618,
          "sum_rainfall_mm": 53.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "220503",
          "tambon": "ต.ปัถวี",
          "amphoe": "อ.มะขาม",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.ปัถวี",
          "latitude": 12.74261,
          "longitude": 102.23263,
          "sum_rainfall_mm": 140.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "220504",
          "tambon": "ต.วังแซ้ม",
          "amphoe": "อ.มะขาม",
          "province": "จ.จันทบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดโคกตะพง (แกลง)",
          "latitude": 12.78168,
          "longitude": 102.17328,
          "sum_rainfall_mm": 166.20000000000005,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "241002",
          "tambon": "ต.คลองตะเกรา",
          "amphoe": "อ.ท่าตะเกียบ",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองขาหยั่ง",
          "latitude": 13.323691,
          "longitude": 101.675214,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "241002",
          "tambon": "ต.คลองตะเกรา",
          "amphoe": "อ.ท่าตะเกียบ",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ภูไท",
          "latitude": 13.417764,
          "longitude": 101.883095,
          "sum_rainfall_mm": 180.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "241002",
          "tambon": "ต.คลองตะเกรา",
          "amphoe": "อ.ท่าตะเกียบ",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.คลองตะเกรา",
          "latitude": 13.41823,
          "longitude": 101.64146,
          "sum_rainfall_mm": 154.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 166.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240302",
          "tambon": "ต.บางขนาก",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บางขนาก",
          "latitude": 13.874795,
          "longitude": 101.141647,
          "sum_rainfall_mm": 120.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240302",
          "tambon": "ต.บางขนาก",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บางน้ำเปรี้ยว",
          "latitude": 13.87032,
          "longitude": 101.14574,
          "sum_rainfall_mm": 126.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240301",
          "tambon": "ต.บางน้ำเปรี้ยว",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปากคลองพระองค์เจ้าฯ (บางน้ำเปรี้ยว)",
          "latitude": 13.83819,
          "longitude": 100.9666,
          "sum_rainfall_mm": 172.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240309",
          "tambon": "ต.ศาลาแดง",
          "amphoe": "อ.บางน้ำเปรี้ยว",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปตร.คลองหลวงแพ่ง",
          "latitude": 13.81321,
          "longitude": 100.93742,
          "sum_rainfall_mm": 179.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240410",
          "tambon": "ต.ท่าข้าม",
          "amphoe": "อ.บางปะกง",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ปากแม่น้ำบางปะกง",
          "latitude": 13.474833,
          "longitude": 100.98196,
          "sum_rainfall_mm": 137.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240402",
          "tambon": "ต.ท่าสะอ้าน",
          "amphoe": "อ.บางปะกง",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บางปะกง",
          "latitude": 13.54901,
          "longitude": 101.00111,
          "sum_rainfall_mm": 169.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240501",
          "tambon": "ต.บ้านโพธิ์",
          "amphoe": "อ.บ้านโพธิ์",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านโพธิ์",
          "latitude": 13.58335,
          "longitude": 101.070917,
          "sum_rainfall_mm": 217.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240601",
          "tambon": "ต.เกาะขนุน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ฝายท่าลาด",
          "latitude": 13.707719,
          "longitude": 101.401415,
          "sum_rainfall_mm": 188.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240601",
          "tambon": "ต.เกาะขนุน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "พนมสารคาม",
          "latitude": 13.72662,
          "longitude": 101.35298,
          "sum_rainfall_mm": 247.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240607",
          "tambon": "ต.หนองแหน",
          "amphoe": "อ.พนมสารคาม",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.หนองแหน",
          "latitude": 13.68338,
          "longitude": 101.32512,
          "sum_rainfall_mm": 265.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240108",
          "tambon": "ต.บางแก้ว",
          "amphoe": "อ.เมืองฉะเชิงเทรา",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขื่อนทดน้ำบางปะกง",
          "latitude": 13.706797,
          "longitude": 101.136945,
          "sum_rainfall_mm": 0.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "240109",
          "tambon": "ต.บางขวัญ",
          "amphoe": "อ.เมืองฉะเชิงเทรา",
          "province": "จ.ฉะเชิงเทรา",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บางขวัญ",
          "latitude": 13.74984,
          "longitude": 101.07751,
          "sum_rainfall_mm": 185.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200706",
          "tambon": "ต.เขาคันทรง",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเขาคันทรง",
          "latitude": 13.11583,
          "longitude": 101.167548,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "200706",
          "tambon": "ต.เขาคันทรง",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์ป่าเขาช่องลม",
          "latitude": 13.157225,
          "longitude": 101.11463,
          "sum_rainfall_mm": 38.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเขาเขียว-เขาชมภู่",
          "latitude": 13.240835,
          "longitude": 101.04208,
          "sum_rainfall_mm": 238.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สำนักสงฆ์โสธรรมนิมิตร",
          "latitude": 13.168441,
          "longitude": 101.03034,
          "sum_rainfall_mm": 172.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200701",
          "tambon": "ต.ศรีราชา",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สถานีวิจัยประมงศรีราชา",
          "latitude": 13.185876,
          "longitude": 100.916916,
          "sum_rainfall_mm": 165.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 128.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "200903",
          "tambon": "ต.พลูตาหลวง",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.พลูตาหลวง",
          "latitude": 12.69861,
          "longitude": 100.9762,
          "sum_rainfall_mm": 201.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230308",
          "tambon": "ต.ทุ่งนนทรี",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขาสมิง",
          "latitude": 12.348571,
          "longitude": 102.454615,
          "sum_rainfall_mm": 49.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "230307",
          "tambon": "ต.เทพนิมิต",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดเทพนิมิต",
          "latitude": 12.433914,
          "longitude": 102.433072,
          "sum_rainfall_mm": 63.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230306",
          "tambon": "ต.ประณีต",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองประณีต บ.ตลุง",
          "latitude": 12.511324,
          "longitude": 102.37168,
          "sum_rainfall_mm": 129.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230303",
          "tambon": "ต.วังตะเคียน",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองโสน",
          "latitude": 12.513374,
          "longitude": 102.50484,
          "sum_rainfall_mm": 143.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230305",
          "tambon": "ต.สะตอ",
          "amphoe": "อ.เขาสมิง",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.สะตอ",
          "latitude": 12.53639,
          "longitude": 102.44429,
          "sum_rainfall_mm": 183.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 153.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 107.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
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
          "sum_rainfall_mm": 163.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 111.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
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
          "sum_rainfall_mm": 92.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
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
          "sum_rainfall_mm": 147.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 136.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
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
          "sum_rainfall_mm": 141.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 226.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230111",
          "tambon": "ต.ท่ากุ่ม",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดวุรุณดิตถาราม",
          "latitude": 12.282,
          "longitude": 102.615378,
          "sum_rainfall_mm": 92.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230111",
          "tambon": "ต.ท่ากุ่ม",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านจันทิ",
          "latitude": 12.29452,
          "longitude": 102.615646,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "230111",
          "tambon": "ต.ท่ากุ่ม",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพ.สต.บ้านคลองขวาง",
          "latitude": 12.344451,
          "longitude": 102.64169,
          "sum_rainfall_mm": 159.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230109",
          "tambon": "ต.เนินทราย",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านไร่ป่า",
          "latitude": 12.287519,
          "longitude": 102.524556,
          "sum_rainfall_mm": 130.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230109",
          "tambon": "ต.เนินทราย",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.ท่าพริกเนินทราย",
          "latitude": 12.25512,
          "longitude": 102.55822,
          "sum_rainfall_mm": 136.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230107",
          "tambon": "ต.วังกระแจะ",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านปลายคลอง",
          "latitude": 12.260545,
          "longitude": 102.46482,
          "sum_rainfall_mm": 137.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230107",
          "tambon": "ต.วังกระแจะ",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชลประทานวังกระแจะ",
          "latitude": 12.250492,
          "longitude": 102.530206,
          "sum_rainfall_mm": 8.0,
          "observed_at": "2026-09-24T14:00:00+07:00"
        },
        {
          "geocode": "230107",
          "tambon": "ต.วังกระแจะ",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองเขาระกำ",
          "latitude": 12.25058,
          "longitude": 102.475716,
          "sum_rainfall_mm": 146.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230107",
          "tambon": "ต.วังกระแจะ",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วังกระแจะ",
          "latitude": 12.262445,
          "longitude": 102.52681,
          "sum_rainfall_mm": 96.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230102",
          "tambon": "ต.หนองเสม็ด",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชลประทานตราด",
          "latitude": 12.243311,
          "longitude": 102.506553,
          "sum_rainfall_mm": 123.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230105",
          "tambon": "ต.ห้วงน้ำขาว",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เปร็ดใน",
          "latitude": 12.14203,
          "longitude": 102.52977,
          "sum_rainfall_mm": 123.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230108",
          "tambon": "ต.ห้วยแร้ง",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดคลองขุด",
          "latitude": 12.360417,
          "longitude": 102.549297,
          "sum_rainfall_mm": 156.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230108",
          "tambon": "ต.ห้วยแร้ง",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เมืองตราด",
          "latitude": 12.325195,
          "longitude": 102.5005,
          "sum_rainfall_mm": 119.40000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "230108",
          "tambon": "ต.ห้วยแร้ง",
          "amphoe": "อ.เมืองตราด",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ห้วยแร้ง",
          "latitude": 12.369261,
          "longitude": 102.54332,
          "sum_rainfall_mm": 133.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250201",
          "tambon": "ต.กบินทร์",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "กบินทร์บุรี",
          "latitude": 13.986616,
          "longitude": 101.70547,
          "sum_rainfall_mm": 122.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250212",
          "tambon": "ต.นาแขม",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.นาแขม",
          "latitude": 14.04255,
          "longitude": 101.72051,
          "sum_rainfall_mm": 147.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250214",
          "tambon": "ต.วังท่าช้าง",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเนินหินกอง",
          "latitude": 13.782015,
          "longitude": 101.900566,
          "sum_rainfall_mm": 183.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250214",
          "tambon": "ต.วังท่าช้าง",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.วังท่าช้าง",
          "latitude": 13.75941,
          "longitude": 101.88693,
          "sum_rainfall_mm": 171.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250211",
          "tambon": "ต.หนองกี่",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขตอุตสาหกรรมกบินทร์บุรี",
          "latitude": 14.072372,
          "longitude": 101.837494,
          "sum_rainfall_mm": 123.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250211",
          "tambon": "ต.หนองกี่",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพสต.บ้านโคกอุดม",
          "latitude": 14.06948,
          "longitude": 101.80991,
          "sum_rainfall_mm": 120.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250810",
          "tambon": "ต.กรอกสมบูรณ์",
          "amphoe": "อ.ศรีมหาโพธิ",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.กรอกสมบูรณ์",
          "latitude": 13.77716,
          "longitude": 101.65875,
          "sum_rainfall_mm": 179.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250803",
          "tambon": "ต.บ้านทาม",
          "amphoe": "อ.ศรีมหาโพธิ",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ศรีมหาโพธิ (KGT6)",
          "latitude": 13.97348,
          "longitude": 101.51751,
          "sum_rainfall_mm": 71.99999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "250801",
          "tambon": "ต.ศรีมหาโพธิ์",
          "amphoe": "อ.ศรีมหาโพธิ",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ศรีมหาโพธิ์",
          "latitude": 13.973075,
          "longitude": 101.512525,
          "sum_rainfall_mm": 82.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210701",
          "tambon": "ต.น้ำเป็น",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ที่ทำการอุทยานแห่งชาติเขาชะเมา-เขาวง",
          "latitude": 12.912333,
          "longitude": 101.72454,
          "sum_rainfall_mm": 175.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210701",
          "tambon": "ต.น้ำเป็น",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านเหมืองแร่",
          "latitude": 12.880652,
          "longitude": 101.784584,
          "sum_rainfall_mm": 3.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210702",
          "tambon": "ต.ห้วยทับมอญ",
          "amphoe": "อ.เขาชะเมา",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านสีระมัน",
          "latitude": 13.038727,
          "longitude": 101.66171,
          "sum_rainfall_mm": 195.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "210201",
          "tambon": "ต.สำนักท้อน",
          "amphoe": "อ.บ้านฉาง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "รพ.สต.บ้านชากหมาก",
          "latitude": 12.796795,
          "longitude": 101.027664,
          "sum_rainfall_mm": 165.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 177.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
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
          "sum_rainfall_mm": 2.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270309",
          "tambon": "ต.โคคลาน",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.โคคลาน",
          "latitude": 13.99106,
          "longitude": 102.65064,
          "sum_rainfall_mm": 97.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270307",
          "tambon": "ต.ทัพไทย",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ตย.๑ (ทัพไทย)",
          "latitude": 14.138174,
          "longitude": 102.88573,
          "sum_rainfall_mm": 92.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270306",
          "tambon": "ต.ทัพราช",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อ่างเก็บน้ำห้วยยาง",
          "latitude": 14.013375,
          "longitude": 102.644844,
          "sum_rainfall_mm": 131.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270306",
          "tambon": "ต.ทัพราช",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองผักแว่น",
          "latitude": 14.040789,
          "longitude": 102.577395,
          "sum_rainfall_mm": 159.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270306",
          "tambon": "ต.ทัพราช",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านใหม่ไทยถาวร",
          "latitude": 14.094721,
          "longitude": 102.694658,
          "sum_rainfall_mm": 38.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270302",
          "tambon": "ต.ทัพเสด็จ",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ตาพระยา",
          "latitude": 14.051278,
          "longitude": 102.88541,
          "sum_rainfall_mm": 58.99999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270903",
          "tambon": "ต.วังทอง",
          "amphoe": "อ.วังสมบูรณ์",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ศูนย์ศึกษาการพัฒนาการอนุรักษ์ต้นน้ำลุ่มน้ำบางปะกง",
          "latitude": 13.351688,
          "longitude": 101.99863,
          "sum_rainfall_mm": 169.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270903",
          "tambon": "ต.วังทอง",
          "amphoe": "อ.วังสมบูรณ์",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านคลองยายอินทร์",
          "latitude": 13.383314,
          "longitude": 102.127266,
          "sum_rainfall_mm": 28.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270902",
          "tambon": "ต.วังใหม่",
          "amphoe": "อ.วังสมบูรณ์",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านวังชุมทอง",
          "latitude": 13.383704,
          "longitude": 102.016914,
          "sum_rainfall_mm": 113.0,
          "observed_at": "2026-09-25T06:00:00+07:00"
        },
        {
          "geocode": "270506",
          "tambon": "ต.ช่องกุ่ม",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดบ้านห้วยชัน",
          "latitude": 13.98736,
          "longitude": 102.43794,
          "sum_rainfall_mm": 149.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270508",
          "tambon": "ต.แซร์ออ",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านแผ่นดินเย็น",
          "latitude": 13.960406,
          "longitude": 102.505896,
          "sum_rainfall_mm": 138.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270508",
          "tambon": "ต.แซร์ออ",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านซับสมบูรณ์",
          "latitude": 13.950064,
          "longitude": 102.556857,
          "sum_rainfall_mm": 128.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270502",
          "tambon": "ต.ท่าเกวียน",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านคลองมะนาว",
          "latitude": 13.635338,
          "longitude": 102.280666,
          "sum_rainfall_mm": 97.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270502",
          "tambon": "ต.ท่าเกวียน",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.ท่าเกวียน",
          "latitude": 13.68734,
          "longitude": 102.28413,
          "sum_rainfall_mm": 219.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270510",
          "tambon": "ต.หนองตะเคียนบอน",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "วัดคลองคันโท",
          "latitude": 13.94595,
          "longitude": 102.28505,
          "sum_rainfall_mm": 143.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270505",
          "tambon": "ต.หนองน้ำใส",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองน้ำใส",
          "latitude": 13.85454,
          "longitude": 102.377483,
          "sum_rainfall_mm": 91.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270505",
          "tambon": "ต.หนองน้ำใส",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านซับแม็ก",
          "latitude": 13.874664,
          "longitude": 102.42264,
          "sum_rainfall_mm": 138.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270509",
          "tambon": "ต.หนองหมากฝ้าย",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านใหม่ศรีจำปา",
          "latitude": 13.907834,
          "longitude": 102.377541,
          "sum_rainfall_mm": 69.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270611",
          "tambon": "ต.คลองทับจันทร์",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านบีกริม",
          "latitude": 13.638481,
          "longitude": 102.393412,
          "sum_rainfall_mm": 63.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
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
          "sum_rainfall_mm": 121.39999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270613",
          "tambon": "ต.บ้านด่าน",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านด่าน",
          "latitude": 13.721552,
          "longitude": 102.465027,
          "sum_rainfall_mm": 72.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "270608",
          "tambon": "ต.บ้านใหม่หนองไทร",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองพรหมโหด",
          "latitude": 13.705864,
          "longitude": 102.48168,
          "sum_rainfall_mm": 86.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270601",
          "tambon": "ต.อรัญประเทศ",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านฟากห้วย",
          "latitude": 13.684085,
          "longitude": 102.501103,
          "sum_rainfall_mm": 157.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "270601",
          "tambon": "ต.อรัญประเทศ",
          "amphoe": "อ.อรัญประเทศ",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชุมชนวังปาตอง",
          "latitude": 13.682056,
          "longitude": 102.504417,
          "sum_rainfall_mm": 93.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "361302",
          "tambon": "ต.ทุ่งพระ",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านท่าเริงรมย์",
          "latitude": 16.639903,
          "longitude": 101.892638,
          "sum_rainfall_mm": 22.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "361302",
          "tambon": "ต.ทุ่งพระ",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ลำเชิญ",
          "latitude": 16.660492,
          "longitude": 101.73749,
          "sum_rainfall_mm": 27.799999999999997,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "361305",
          "tambon": "ต.ทุ่งลุยลาย",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านหนองเชียงรอดเหนือ",
          "latitude": 16.515036,
          "longitude": 101.823138,
          "sum_rainfall_mm": 60.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "361305",
          "tambon": "ต.ทุ่งลุยลาย",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "เขื่อนจุฬาภรณ์",
          "latitude": 16.534794,
          "longitude": 101.649035,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "361305",
          "tambon": "ต.ทุ่งลุยลาย",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "เขื่อนจุฬาภรณ์",
          "latitude": 16.535683,
          "longitude": 101.644386,
          "sum_rainfall_mm": 39.0,
          "observed_at": "2026-09-25T17:00:00+07:00"
        },
        {
          "geocode": "361305",
          "tambon": "ต.ทุ่งลุยลาย",
          "amphoe": "อ.คอนสาร",
          "province": "จ.ชัยภูมิ",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ทุ่งลุยลาย",
          "latitude": 16.499163,
          "longitude": 101.67309,
          "sum_rainfall_mm": 139.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302505",
          "tambon": "ต.ไทยสามัคคี",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทล.๑๑ (ไทยสามัคคี)",
          "latitude": 14.322821,
          "longitude": 101.93274,
          "sum_rainfall_mm": 103.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302503",
          "tambon": "ต.ระเริง",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านไทรงาม",
          "latitude": 14.621957,
          "longitude": 101.72213,
          "sum_rainfall_mm": 34.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302503",
          "tambon": "ต.ระเริง",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านวังขอน",
          "latitude": 14.514877,
          "longitude": 101.761444,
          "sum_rainfall_mm": 44.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302503",
          "tambon": "ต.ระเริง",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านระเริง",
          "latitude": 14.581153,
          "longitude": 101.710822,
          "sum_rainfall_mm": 35.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302503",
          "tambon": "ต.ระเริง",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองสอง",
          "latitude": 14.595323,
          "longitude": 101.73728,
          "sum_rainfall_mm": 82.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302501",
          "tambon": "ต.วังน้ำเขียว",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านคลองสอง",
          "latitude": 14.37957,
          "longitude": 101.849891,
          "sum_rainfall_mm": 36.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302501",
          "tambon": "ต.วังน้ำเขียว",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านซับไทรทอง",
          "latitude": 14.503397,
          "longitude": 101.81842,
          "sum_rainfall_mm": 40.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302501",
          "tambon": "ต.วังน้ำเขียว",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านคลองทราย",
          "latitude": 14.364402,
          "longitude": 101.757113,
          "sum_rainfall_mm": 50.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302501",
          "tambon": "ต.วังน้ำเขียว",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.วังน้ำเขียว",
          "latitude": 14.37476,
          "longitude": 101.86537,
          "sum_rainfall_mm": 99.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302502",
          "tambon": "ต.วังหมี",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านคลองสะท้อน",
          "latitude": 14.407495,
          "longitude": 101.685106,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302502",
          "tambon": "ต.วังหมี",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านยุปอีปูน",
          "latitude": 14.4508,
          "longitude": 101.744504,
          "sum_rainfall_mm": 2.0,
          "observed_at": "2026-09-25T17:00:00+07:00"
        },
        {
          "geocode": "302502",
          "tambon": "ต.วังหมี",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.๔ (คลองปลากั้ง)",
          "latitude": 14.356375,
          "longitude": 101.72591,
          "sum_rainfall_mm": 53.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302502",
          "tambon": "ต.วังหมี",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.วังหมี",
          "latitude": 14.4157,
          "longitude": 101.68403,
          "sum_rainfall_mm": 126.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "302504",
          "tambon": "ต.อุดมทรัพย์",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านห้วยน้ำเค็ม",
          "latitude": 14.464046,
          "longitude": 101.905837,
          "sum_rainfall_mm": 78.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302504",
          "tambon": "ต.อุดมทรัพย์",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านอุดมทรัพย์พัฒนา",
          "latitude": 14.533591,
          "longitude": 101.971095,
          "sum_rainfall_mm": 38.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302504",
          "tambon": "ต.อุดมทรัพย์",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "บ้านซับเต่า",
          "latitude": 14.460456,
          "longitude": 101.986167,
          "sum_rainfall_mm": 53.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "302504",
          "tambon": "ต.อุดมทรัพย์",
          "amphoe": "อ.วังน้ำเขียว",
          "province": "จ.นครราชสีมา",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.อุดมทรัพย์",
          "latitude": 14.55706,
          "longitude": 101.97418,
          "sum_rainfall_mm": 109.60000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "312001",
          "tambon": "ต.โนนดินแดง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าดงใหญ่",
          "latitude": 14.29667,
          "longitude": 102.73718,
          "sum_rainfall_mm": 48.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "312003",
          "tambon": "ต.ลำนางรอง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ลำนางรอง",
          "latitude": 14.1899,
          "longitude": 102.68618,
          "sum_rainfall_mm": 179.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "310808",
          "tambon": "ต.จันทบเพชร",
          "amphoe": "อ.บ้านกรวด",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "โรงเรียนบ้านสายโท ๔ ใต้",
          "latitude": 14.370019,
          "longitude": 103.14561,
          "sum_rainfall_mm": 260.79999999999995,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "310601",
          "tambon": "ต.ละหานทราย",
          "amphoe": "อ.ละหานทราย",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ละหานทราย",
          "latitude": 14.39567,
          "longitude": 102.84726,
          "sum_rainfall_mm": 172.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 173.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710705",
          "tambon": "ต.ชะแล",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลิตี้",
          "latitude": 14.9616,
          "longitude": 98.8889,
          "sum_rainfall_mm": 62.7,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710705",
          "tambon": "ต.ชะแล",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองงู",
          "latitude": 14.849774,
          "longitude": 98.824,
          "sum_rainfall_mm": 78.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710701",
          "tambon": "ต.ท่าขนุน",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "วัดท่าขนุน",
          "latitude": 14.742605,
          "longitude": 98.635243,
          "sum_rainfall_mm": 97.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710701",
          "tambon": "ต.ท่าขนุน",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ.ทองผาภูมิ",
          "latitude": 14.73758,
          "longitude": 98.63576,
          "sum_rainfall_mm": 94.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710701",
          "tambon": "ต.ท่าขนุน",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "น้ำฝนเขื่อนวชิราลงกรณ",
          "latitude": 14.79865,
          "longitude": 98.5966,
          "sum_rainfall_mm": 54.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710701",
          "tambon": "ต.ท่าขนุน",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ลง.7 (องธิ)",
          "latitude": 14.735226,
          "longitude": 98.69861,
          "sum_rainfall_mm": 67.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710701",
          "tambon": "ต.ท่าขนุน",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ทต.ท่าขนุน",
          "latitude": 14.74405,
          "longitude": 98.64233,
          "sum_rainfall_mm": 106.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710702",
          "tambon": "ต.ปีล็อก",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "เหมืองปิล๊อก",
          "latitude": 14.67761,
          "longitude": 98.36765,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T15:00:00+07:00"
        },
        {
          "geocode": "710702",
          "tambon": "ต.ปีล็อก",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ปิล๊อก",
          "latitude": 14.6659,
          "longitude": 98.3811,
          "sum_rainfall_mm": 26.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710704",
          "tambon": "ต.ลิ่นถิ่น",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "วัดลิ่นถิ่น",
          "latitude": 14.5613,
          "longitude": 98.7925,
          "sum_rainfall_mm": 66.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710704",
          "tambon": "ต.ลิ่นถิ่น",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองบาง",
          "latitude": 14.576704,
          "longitude": 98.820788,
          "sum_rainfall_mm": 4.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710704",
          "tambon": "ต.ลิ่นถิ่น",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านลิ่นถิ่น (K.54)",
          "latitude": 14.53566,
          "longitude": 98.78764,
          "sum_rainfall_mm": 39.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710704",
          "tambon": "ต.ลิ่นถิ่น",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "สถานีวิจัยต้นน้ำแม่กลอง",
          "latitude": 14.576,
          "longitude": 98.8406,
          "sum_rainfall_mm": 59.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710707",
          "tambon": "ต.สหกรณ์นิคม",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านสะพานลาว",
          "latitude": 14.725793,
          "longitude": 98.783443,
          "sum_rainfall_mm": 20.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710707",
          "tambon": "ต.สหกรณ์นิคม",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ศร.11 (เนินสวรรค์)",
          "latitude": 14.74058,
          "longitude": 98.81722,
          "sum_rainfall_mm": 44.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710706",
          "tambon": "ต.ห้วยเขย่ง",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านประจำไม้",
          "latitude": 14.589914,
          "longitude": 98.586428,
          "sum_rainfall_mm": 12.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710706",
          "tambon": "ต.ห้วยเขย่ง",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านไร่",
          "latitude": 14.707321,
          "longitude": 98.527799,
          "sum_rainfall_mm": 9.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710703",
          "tambon": "ต.หินดาด",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านดงโคร่ง",
          "latitude": 14.625644,
          "longitude": 98.759389,
          "sum_rainfall_mm": 8.5,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710703",
          "tambon": "ต.หินดาด",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหินดาด",
          "latitude": 14.59539,
          "longitude": 98.72946,
          "sum_rainfall_mm": 26.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "710703",
          "tambon": "ต.หินดาด",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ศร.4 (ผาตาด)",
          "latitude": 14.64951,
          "longitude": 98.77478,
          "sum_rainfall_mm": 37.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "710703",
          "tambon": "ต.หินดาด",
          "amphoe": "อ.ทองผาภูมิ",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.หินดาด",
          "latitude": 14.61504,
          "longitude": 98.72972,
          "sum_rainfall_mm": 40.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 124.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 108.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 140.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 130.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101802",
          "tambon": "ต.คลองสาน",
          "amphoe": "อ.คลองสาน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสาน",
          "latitude": 13.73044,
          "longitude": 100.50947,
          "sum_rainfall_mm": 106.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104603",
          "tambon": "ต.บางขัน",
          "amphoe": "อ.คลองสามวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองสามวา",
          "latitude": 13.85954,
          "longitude": 100.72909,
          "sum_rainfall_mm": 196.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104603",
          "tambon": "ต.บางขัน",
          "amphoe": "อ.คลองสามวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.คลองสามวา",
          "latitude": 13.8599,
          "longitude": 100.70424,
          "sum_rainfall_mm": 141.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104602",
          "tambon": "ต.สามวาตะวันออก",
          "amphoe": "อ.คลองสามวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.เก้า-วัดศรีสุขฯ",
          "latitude": 13.92046,
          "longitude": 100.79228,
          "sum_rainfall_mm": 26.0,
          "observed_at": "2026-09-25T08:00:00+07:00"
        },
        {
          "geocode": "104301",
          "tambon": "ต.คันนายาว",
          "amphoe": "อ.คันนายาว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ลำชะล่า-ถ.นวมินทร์",
          "latitude": 13.83637,
          "longitude": 100.66131,
          "sum_rainfall_mm": 146.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103005",
          "tambon": "ต.จตุจักร",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.รัชดา-วิภาวดี",
          "latitude": 13.83022,
          "longitude": 100.55723,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103004",
          "tambon": "ต.จอมพล",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "บ่อสูบศาลอาญารัชดา",
          "latitude": 13.80967,
          "longitude": 100.57498,
          "sum_rainfall_mm": 130.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103001",
          "tambon": "ต.ลาดยาว",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อาคารเลขที่ ๙๐๑",
          "latitude": 13.85604,
          "longitude": 100.57558,
          "sum_rainfall_mm": 126.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103001",
          "tambon": "ต.ลาดยาว",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ถ.เทศบาลสงเคราะห์",
          "latitude": 13.83978,
          "longitude": 100.54175,
          "sum_rainfall_mm": 136.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103002",
          "tambon": "ต.เสนานิคม",
          "amphoe": "อ.จตุจักร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.บางบัว",
          "latitude": 13.85796,
          "longitude": 100.58682,
          "sum_rainfall_mm": 109.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103602",
          "tambon": "ต.สีกัน",
          "amphoe": "อ.ดอนเมือง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ดอนเมือง",
          "latitude": 13.91053,
          "longitude": 100.59492,
          "sum_rainfall_mm": 107.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102601",
          "tambon": "ต.ดินแดง",
          "amphoe": "อ.ดินแดง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ศูนย์ฯ (ดินแดง)",
          "latitude": 13.76902,
          "longitude": 100.55452,
          "sum_rainfall_mm": 123.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100201",
          "tambon": "ต.ดุสิต",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ดุสิต",
          "latitude": 13.77693,
          "longitude": 100.52032,
          "sum_rainfall_mm": 71.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100206",
          "tambon": "ต.ถนนนครไชยศรี",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.สามเสน",
          "latitude": 13.78483,
          "longitude": 100.50825,
          "sum_rainfall_mm": 119.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100206",
          "tambon": "ต.ถนนนครไชยศรี",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางซื่อ",
          "latitude": 13.80023,
          "longitude": 100.51848,
          "sum_rainfall_mm": 143.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100203",
          "tambon": "ต.สวนจิตรลดา",
          "amphoe": "อ.ดุสิต",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อุทยานเฉลิมพระเกียรติพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร",
          "latitude": 13.76138,
          "longitude": 100.52066,
          "sum_rainfall_mm": 135.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101901",
          "tambon": "ต.คลองชักพระ",
          "amphoe": "อ.ตลิ่งชัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ตลิ่งชัน",
          "latitude": 13.77663,
          "longitude": 100.45653,
          "sum_rainfall_mm": 96.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101901",
          "tambon": "ต.คลองชักพระ",
          "amphoe": "อ.ตลิ่งชัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองชักพระ",
          "latitude": 13.77892,
          "longitude": 100.465,
          "sum_rainfall_mm": 88.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101903",
          "tambon": "ต.ฉิมพลี",
          "amphoe": "อ.ตลิ่งชัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองบัว-ทางรถไฟ",
          "latitude": 13.79974,
          "longitude": 100.41609,
          "sum_rainfall_mm": 109.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101902",
          "tambon": "ต.ตลิ่งชัน",
          "amphoe": "อ.ตลิ่งชัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองมหาสวัสดิ บางกรวย-สวนผัก",
          "latitude": 13.79965,
          "longitude": 100.43863,
          "sum_rainfall_mm": 89.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101602",
          "tambon": "ต.วัดท่าพระ",
          "amphoe": "อ.บางกอกใหญ่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางกอกใหญ่",
          "latitude": 13.72332,
          "longitude": 100.47622,
          "sum_rainfall_mm": 78.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101601",
          "tambon": "ต.วัดอรุณ",
          "amphoe": "อ.บางกอกใหญ่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางกอกใหญ่",
          "latitude": 13.74022,
          "longitude": 100.49012,
          "sum_rainfall_mm": 94.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101601",
          "tambon": "ต.วัดอรุณ",
          "amphoe": "อ.บางกอกใหญ่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองมอญ",
          "latitude": 13.74714,
          "longitude": 100.48531,
          "sum_rainfall_mm": 102.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100608",
          "tambon": "ต.หัวหมาก",
          "amphoe": "อ.บางกะปิ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองแสนแสบ บางกะปิ",
          "latitude": 13.76131,
          "longitude": 100.61601,
          "sum_rainfall_mm": 150.00000000000003,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100608",
          "tambon": "ต.หัวหมาก",
          "amphoe": "อ.บางกะปิ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.แสนแสบ-เขตบางกะปิ",
          "latitude": 13.76528,
          "longitude": 100.64773,
          "sum_rainfall_mm": 149.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100502",
          "tambon": "ต.อนุสาวรีย์",
          "amphoe": "อ.บางเขน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว วัดบางบัว",
          "latitude": 13.85402,
          "longitude": 100.58746,
          "sum_rainfall_mm": 112.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100502",
          "tambon": "ต.อนุสาวรีย์",
          "amphoe": "อ.บางเขน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางเขน",
          "latitude": 13.87349,
          "longitude": 100.59643,
          "sum_rainfall_mm": 113.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T11:00:00+07:00"
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
          "sum_rainfall_mm": 110.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104001",
          "tambon": "ต.บางแค",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ค.ราชมนตรี-ภาษีเจริญ",
          "latitude": 13.70754,
          "longitude": 100.42622,
          "sum_rainfall_mm": 70.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104001",
          "tambon": "ต.บางแค",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางแค",
          "latitude": 13.69622,
          "longitude": 100.40919,
          "sum_rainfall_mm": 90.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104002",
          "tambon": "ต.บางแคเหนือ",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "หมู่บ้านเศรษฐกิจ ซอย 26",
          "latitude": 13.72167,
          "longitude": 100.37676,
          "sum_rainfall_mm": 95.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104002",
          "tambon": "ต.บางแคเหนือ",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางจาก",
          "latitude": 13.71471,
          "longitude": 100.39555,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104003",
          "tambon": "ต.บางไผ่",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ทวีฯ-ค.บางเชือกหนัง",
          "latitude": 13.75037,
          "longitude": 100.35351,
          "sum_rainfall_mm": 73.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104004",
          "tambon": "ต.หลักสอง",
          "amphoe": "อ.บางแค",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองภาษีเจริญ เพชรเกษม69",
          "latitude": 13.69158,
          "longitude": 100.38127,
          "sum_rainfall_mm": 117.79999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102901",
          "tambon": "ต.บางซื่อ",
          "amphoe": "อ.บางซื่อ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางซื่อ",
          "latitude": 13.80973,
          "longitude": 100.53723,
          "sum_rainfall_mm": 104.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102901",
          "tambon": "ต.บางซื่อ",
          "amphoe": "อ.บางซื่อ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองบางเขนใหม่",
          "latitude": 13.81729,
          "longitude": 100.5105,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104701",
          "tambon": "ต.บางนา",
          "amphoe": "อ.บางนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.บางนา-ถ.ศรีนครินทร์",
          "latitude": 13.66106,
          "longitude": 100.63942,
          "sum_rainfall_mm": 86.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104701",
          "tambon": "ต.บางนา",
          "amphoe": "อ.บางนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.บางนา",
          "latitude": 13.67493,
          "longitude": 100.58757,
          "sum_rainfall_mm": 152.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102502",
          "tambon": "ต.บางอ้อ",
          "amphoe": "อ.บางพลัด",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางพลัด",
          "latitude": 13.79429,
          "longitude": 100.50479,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100404",
          "tambon": "ต.บางรัก",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.กรุงเกษม",
          "latitude": 13.73042,
          "longitude": 100.51397,
          "sum_rainfall_mm": 119.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100405",
          "tambon": "ต.สี่พระยา",
          "amphoe": "อ.บางรัก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บางรัก",
          "latitude": 13.73067,
          "longitude": 100.52382,
          "sum_rainfall_mm": 142.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102701",
          "tambon": "ต.คลองกุ่ม",
          "amphoe": "อ.บึงกุ่ม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.บึงกุ่ม",
          "latitude": 13.7855,
          "longitude": 100.66949,
          "sum_rainfall_mm": 130.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100703",
          "tambon": "ต.ปทุมวัน",
          "amphoe": "อ.ปทุมวัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองอรชร",
          "latitude": 13.74807,
          "longitude": 100.53618,
          "sum_rainfall_mm": 123.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100702",
          "tambon": "ต.วังใหม่",
          "amphoe": "อ.ปทุมวัน",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ปทุมวัน",
          "latitude": 13.74493,
          "longitude": 100.5222,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103201",
          "tambon": "ต.ประเวศ",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.วัดกระทุ่มฯ",
          "latitude": 13.7241,
          "longitude": 100.68957,
          "sum_rainfall_mm": 135.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103201",
          "tambon": "ต.ประเวศ",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ประเวศ",
          "latitude": 13.71701,
          "longitude": 100.69472,
          "sum_rainfall_mm": 145.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103202",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.ประเวศ",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงหนองบอน",
          "latitude": 13.69529,
          "longitude": 100.65375,
          "sum_rainfall_mm": 167.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100805",
          "tambon": "ต.วัดโสมนัส",
          "amphoe": "อ.ป้อมปราบศัตรูพ่าย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ป้อมปราบฯ",
          "latitude": 13.75826,
          "longitude": 100.51304,
          "sum_rainfall_mm": 112.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101401",
          "tambon": "ต.สามเสนใน",
          "amphoe": "อ.พญาไท",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "กรมทรัพยากรน้ำ",
          "latitude": 13.785535,
          "longitude": 100.53908,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "101401",
          "tambon": "ต.สามเสนใน",
          "amphoe": "อ.พญาไท",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พญาไท",
          "latitude": 13.78003,
          "longitude": 100.54287,
          "sum_rainfall_mm": 149.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 153.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 134.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 122.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 113.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100101",
          "tambon": "ต.พระบรมมหาราชวัง",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปากคลองตลาด",
          "latitude": 13.74228,
          "longitude": 100.49454,
          "sum_rainfall_mm": 146.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100112",
          "tambon": "ต.วัดสามพระยา",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.เทเวศร์",
          "latitude": 13.77191,
          "longitude": 100.5011,
          "sum_rainfall_mm": 142.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100112",
          "tambon": "ต.วัดสามพระยา",
          "amphoe": "อ.พระนคร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.พระนคร",
          "latitude": 13.7649,
          "longitude": 100.49872,
          "sum_rainfall_mm": 120.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101001",
          "tambon": "ต.มีนบุรี",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.มีนบุรี",
          "latitude": 13.8136,
          "longitude": 100.73122,
          "sum_rainfall_mm": 166.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.แสนแสบ-วัดทรัพย์ฯ",
          "latitude": 13.8515,
          "longitude": 100.80361,
          "sum_rainfall_mm": 154.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.บึงใหญ่-วัดทองสัมฤทธิ์",
          "latitude": 13.80045,
          "longitude": 100.78827,
          "sum_rainfall_mm": 144.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.บึงขวาง",
          "latitude": 13.79988,
          "longitude": 100.74482,
          "sum_rainfall_mm": 172.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101002",
          "tambon": "ต.แสนแสบ",
          "amphoe": "อ.มีนบุรี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.ประชาร่วมใจ",
          "latitude": 13.8212,
          "longitude": 100.74717,
          "sum_rainfall_mm": 185.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101203",
          "tambon": "ต.ช่องนนทรี",
          "amphoe": "อ.ยานนาวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองช่องนนทรี",
          "latitude": 13.69493,
          "longitude": 100.54874,
          "sum_rainfall_mm": 95.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101203",
          "tambon": "ต.ช่องนนทรี",
          "amphoe": "อ.ยานนาวา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ยานนาวา",
          "latitude": 13.69627,
          "longitude": 100.54222,
          "sum_rainfall_mm": 128.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103701",
          "tambon": "ต.ทุ่งพญาไท",
          "amphoe": "อ.ราชเทวี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ราชเทวี",
          "latitude": 13.75917,
          "longitude": 100.53405,
          "sum_rainfall_mm": 94.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103704",
          "tambon": "ต.มักกะสัน",
          "amphoe": "อ.ราชเทวี",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดบึงมักกะสัน",
          "latitude": 13.75665,
          "longitude": 100.54839,
          "sum_rainfall_mm": 128.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101106",
          "tambon": "ต.ขุมทอง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-ถ.ร่วมพัฒนา",
          "latitude": 13.70097,
          "longitude": 100.85106,
          "sum_rainfall_mm": 140.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 238.39999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101101",
          "tambon": "ต.ลาดกระบัง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองประเวศฯ-ลาดกระบัง",
          "latitude": 13.72386,
          "longitude": 100.74979,
          "sum_rainfall_mm": 178.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101101",
          "tambon": "ต.ลาดกระบัง",
          "amphoe": "อ.ลาดกระบัง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ค.ประเวศฯ-รพ.ลาดกระบัง",
          "latitude": 13.72398,
          "longitude": 100.78407,
          "sum_rainfall_mm": 165.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103801",
          "tambon": "ต.ลาดพร้าว",
          "amphoe": "อ.ลาดพร้าว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองลาดพร้าว ปากคลอง2สายใต้",
          "latitude": 13.93183,
          "longitude": 100.63952,
          "sum_rainfall_mm": 162.8,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103801",
          "tambon": "ต.ลาดพร้าว",
          "amphoe": "อ.ลาดพร้าว",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ลาดพร้าว",
          "latitude": 13.80353,
          "longitude": 100.60746,
          "sum_rainfall_mm": 73.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104501",
          "tambon": "ต.วังทองหลาง",
          "amphoe": "อ.วังทองหลาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.วังทองหลาง",
          "latitude": 13.76435,
          "longitude": 100.60553,
          "sum_rainfall_mm": 125.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104501",
          "tambon": "ต.วังทองหลาง",
          "amphoe": "อ.วังทองหลาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองลาดพร้าว",
          "latitude": 13.79432,
          "longitude": 100.58933,
          "sum_rainfall_mm": 120.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104501",
          "tambon": "ต.วังทองหลาง",
          "amphoe": "อ.วังทองหลาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเจ้าคุณสิงห์",
          "latitude": 13.7616,
          "longitude": 100.61525,
          "sum_rainfall_mm": 145.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103902",
          "tambon": "ต.คลองตันเหนือ",
          "amphoe": "อ.วัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.แสนแสบ-คลองตัน",
          "latitude": 13.7411,
          "longitude": 100.5964,
          "sum_rainfall_mm": 133.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103901",
          "tambon": "ต.คลองเตยเหนือ",
          "amphoe": "อ.วัฒนา",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อโศก",
          "latitude": 13.74325,
          "longitude": 100.562164,
          "sum_rainfall_mm": 87.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103401",
          "tambon": "ต.สวนหลวง",
          "amphoe": "อ.สวนหลวง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สวนหลวง",
          "latitude": 13.73043,
          "longitude": 100.65154,
          "sum_rainfall_mm": 121.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "103401",
          "tambon": "ต.สวนหลวง",
          "amphoe": "อ.สวนหลวง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ประเวศฯ-วัดขจรศิริ",
          "latitude": 13.71545,
          "longitude": 100.6415,
          "sum_rainfall_mm": 155.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104401",
          "tambon": "ต.สะพานสูง",
          "amphoe": "อ.สะพานสูง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองแสนแสบ-บางชัน",
          "latitude": 13.79734,
          "longitude": 100.70451,
          "sum_rainfall_mm": 160.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104401",
          "tambon": "ต.สะพานสูง",
          "amphoe": "อ.สะพานสูง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สะพานสูง",
          "latitude": 13.76881,
          "longitude": 100.68545,
          "sum_rainfall_mm": 171.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101302",
          "tambon": "ต.สัมพันธวงศ์",
          "amphoe": "อ.สัมพันธวงศ์",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ท่าน้ำสวัสดี",
          "latitude": 13.73664,
          "longitude": 100.5096,
          "sum_rainfall_mm": 124.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102801",
          "tambon": "ต.ทุ่งวัดดอน",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สาทร",
          "latitude": 13.70821,
          "longitude": 100.52641,
          "sum_rainfall_mm": 132.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102802",
          "tambon": "ต.ยานนาวา",
          "amphoe": "อ.สาทร",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสาทร",
          "latitude": 13.71839,
          "longitude": 100.51496,
          "sum_rainfall_mm": 112.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104201",
          "tambon": "ต.สายไหม",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.พระยาสุเรนทร์",
          "latitude": 13.92126,
          "longitude": 100.68741,
          "sum_rainfall_mm": 157.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104201",
          "tambon": "ต.สายไหม",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองสองสายใต้",
          "latitude": 13.92314,
          "longitude": 100.63447,
          "sum_rainfall_mm": 96.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104201",
          "tambon": "ต.สายไหม",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ซ.แอนเน็กซ์",
          "latitude": 13.93786,
          "longitude": 100.62661,
          "sum_rainfall_mm": 154.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104202",
          "tambon": "ต.ออเงิน",
          "amphoe": "อ.สายไหม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.สายไหม",
          "latitude": 13.89531,
          "longitude": 100.6609,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102302",
          "tambon": "ต.หนองแขม",
          "amphoe": "อ.หนองแขม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ทวีฯ-ค.ภาษีฯ",
          "latitude": 13.69168,
          "longitude": 100.38097,
          "sum_rainfall_mm": 108.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "102303",
          "tambon": "ต.หนองค้างพลู",
          "amphoe": "อ.หนองแขม",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.หนองแขม",
          "latitude": 13.70574,
          "longitude": 100.34931,
          "sum_rainfall_mm": 70.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100301",
          "tambon": "ต.กระทุ่มราย",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.หนองจอก",
          "latitude": 13.85584,
          "longitude": 100.86259,
          "sum_rainfall_mm": 109.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100304",
          "tambon": "ต.คลองสิบสอง",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.สิบสอง-ถ.ประชาสำราญ",
          "latitude": 13.91368,
          "longitude": 100.86244,
          "sum_rainfall_mm": 110.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100307",
          "tambon": "ต.ลำผักชี",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัด ค.ลำผักชี-รร.ลำผักชี",
          "latitude": 13.79205,
          "longitude": 100.83524,
          "sum_rainfall_mm": 133.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100302",
          "tambon": "ต.หนองจอก",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองแสนแสบ",
          "latitude": 13.85516,
          "longitude": 100.87292,
          "sum_rainfall_mm": 124.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "100302",
          "tambon": "ต.หนองจอก",
          "amphoe": "อ.หนองจอก",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.คลองสิบสาม",
          "latitude": 13.85859,
          "longitude": 100.86754,
          "sum_rainfall_mm": 131.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104101",
          "tambon": "ต.ทุ่งสองห้อง",
          "amphoe": "อ.หลักสี่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.หลักสี่",
          "latitude": 13.88748,
          "longitude": 100.57893,
          "sum_rainfall_mm": 99.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "104101",
          "tambon": "ต.ทุ่งสองห้อง",
          "amphoe": "อ.หลักสี่",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดศูนย์ราชการ-ถ.แจ้งวัฒนะ",
          "latitude": 13.8921,
          "longitude": 100.56383,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101702",
          "tambon": "ต.บางกะปิ",
          "amphoe": "อ.ห้วยขวาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.สามเสน-ค.แสนแสบ",
          "latitude": 13.74842,
          "longitude": 100.5992,
          "sum_rainfall_mm": 98.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "101701",
          "tambon": "ต.ห้วยขวาง",
          "amphoe": "อ.ห้วยขวาง",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สนข.ห้วยขวาง",
          "latitude": 13.77678,
          "longitude": 100.57906,
          "sum_rainfall_mm": 128.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "730324",
          "tambon": "ต.ไทยาวาส",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "สะพานนครชัยศรี",
          "latitude": 13.79217,
          "longitude": 100.19817,
          "sum_rainfall_mm": 117.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "730301",
          "tambon": "ต.นครชัยศรี",
          "amphoe": "อ.นครชัยศรี",
          "province": "จ.นครปฐม",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.นครชัยศรี",
          "latitude": 13.79036,
          "longitude": 100.19051,
          "sum_rainfall_mm": 116.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130207",
          "tambon": "ต.คลองเจ็ด",
          "amphoe": "อ.คลองหลวง",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "รร.วัดอู่ข้าว",
          "latitude": 14.19111,
          "longitude": 100.75421,
          "sum_rainfall_mm": 121.59999999999998,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130207",
          "tambon": "ต.คลองเจ็ด",
          "amphoe": "อ.คลองหลวง",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองระพีพัฒน์แยกตก",
          "latitude": 14.20612,
          "longitude": 100.74476,
          "sum_rainfall_mm": 113.00000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130306",
          "tambon": "ต.บึงน้ำรักษ์",
          "amphoe": "อ.ธัญบุรี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ท้ายไซฟอน ปตร.พระธรรมราชา",
          "latitude": 14.076805,
          "longitude": 100.89407,
          "sum_rainfall_mm": 20.8,
          "observed_at": "2026-09-25T18:00:00+07:00"
        },
        {
          "geocode": "130306",
          "tambon": "ต.บึงน้ำรักษ์",
          "amphoe": "อ.ธัญบุรี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ท้ายปตร.พระธรรมราชา",
          "latitude": 14.07636,
          "longitude": 100.89392,
          "sum_rainfall_mm": 99.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130306",
          "tambon": "ต.บึงน้ำรักษ์",
          "amphoe": "อ.ธัญบุรี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "เหนือปตร.พระธรรมราชา",
          "latitude": 14.07771,
          "longitude": 100.89208,
          "sum_rainfall_mm": 99.20000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130301",
          "tambon": "ต.ประชาธิปัตย์",
          "amphoe": "อ.ธัญบุรี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ปตร.จุฬาลงกรณ์",
          "latitude": 13.98135,
          "longitude": 100.6057,
          "sum_rainfall_mm": 132.2,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130114",
          "tambon": "ต.หลักหก",
          "amphoe": "อ.เมืองปทุมธานี",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองเปรมประชากร หลักหก",
          "latitude": 13.96562,
          "longitude": 100.60262,
          "sum_rainfall_mm": 118.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130604",
          "tambon": "ต.ลำลูกกา",
          "amphoe": "อ.ลำลูกกา",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองหกวา ลำลูกกา คลอง8",
          "latitude": 13.9416,
          "longitude": 100.77499,
          "sum_rainfall_mm": 130.4,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130407",
          "tambon": "ต.นพรัตน์",
          "amphoe": "อ.หนองเสือ",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองระพีพัฒน์แยกใต้ หนองเสือ",
          "latitude": 14.2206,
          "longitude": 100.89168,
          "sum_rainfall_mm": 77.80000000000001,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "130404",
          "tambon": "ต.บึงชำอ้อ",
          "amphoe": "อ.หนองเสือ",
          "province": "จ.ปทุมธานี",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "บ้านน้อยสว่าง",
          "latitude": 14.1652,
          "longitude": 100.77855,
          "sum_rainfall_mm": 171.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "110602",
          "tambon": "ต.ศีรษะจรเข้น้อย",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "อบต.ศีรษะจรเข้น้อย",
          "latitude": 13.67777,
          "longitude": 100.7945,
          "sum_rainfall_mm": 217.40000000000003,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "110603",
          "tambon": "ต.ศีรษะจรเข้ใหญ่",
          "amphoe": "อ.บางเสาธง",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
          "latitude": 13.66949,
          "longitude": 100.80058,
          "sum_rainfall_mm": 210.60000000000002,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 108.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 86.19999999999999,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 0.6000000000000001,
          "observed_at": "2026-09-24T17:00:00+07:00"
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
          "sum_rainfall_mm": 62.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 111.5,
          "observed_at": "2026-09-25T19:00:00+07:00"
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
          "sum_rainfall_mm": 87.6,
          "observed_at": "2026-09-25T19:00:00+07:00"
        },
        {
          "geocode": "110115",
          "tambon": "ต.เทพารักษ์",
          "amphoe": "อ.เมืองสมุทรปราการ",
          "province": "จ.สมุทรปราการ",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองสำโรง",
          "latitude": 13.64819,
          "longitude": 100.59514,
          "sum_rainfall_mm": 146.0,
          "observed_at": "2026-09-25T19:00:00+07:00"
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_25_09_2026.png?1790341620",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
