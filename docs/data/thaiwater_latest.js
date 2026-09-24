window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-24T11:54:15+07:00",
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
      "max_rainfall_mm": 180.1,
      "nearest_alert_km": 12.1,
      "latest_observed_at": "2026-09-24 10:50"
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
      "max_rainfall_mm": 130.0,
      "nearest_alert_km": 7.6,
      "latest_observed_at": "2026-09-24 10:00"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 7,
      "rain_alert_count": 5,
      "water_alert_count": 2,
      "max_rainfall_mm": 103.9,
      "nearest_alert_km": 8.3,
      "latest_observed_at": "2026-09-24 11:40"
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
      "max_rainfall_mm": 103.2,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-24 11:00"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 13,
      "rain_alert_count": 12,
      "water_alert_count": 1,
      "max_rainfall_mm": 95.5,
      "nearest_alert_km": 6.7,
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:00"
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
      "max_rainfall_mm": 36.6,
      "nearest_alert_km": 10.6,
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "max_rainfall_mm": 74.6,
      "nearest_alert_km": 4.4,
      "latest_observed_at": "2026-09-24 11:00"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102,
      "lon": 100.707712,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 6,
      "rain_alert_count": 6,
      "water_alert_count": 0,
      "max_rainfall_mm": 72.8,
      "nearest_alert_km": 5.9,
      "latest_observed_at": "2026-09-24 11:00"
    },
    {
      "id": 29,
      "name": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "lat": 13.4214885,
      "lon": 101.0041244,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 70.4,
      "nearest_alert_km": 6.4,
      "latest_observed_at": "2026-09-24 10:00"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.7582559,
      "lon": 100.7893183,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 6,
      "water_alert_count": 2,
      "max_rainfall_mm": 68.8,
      "nearest_alert_km": 2.0,
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "max_rainfall_mm": 63.6,
      "nearest_alert_km": 7.7,
      "latest_observed_at": "2026-09-24 11:40"
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
      "max_rainfall_mm": 50.4,
      "nearest_alert_km": 8.0,
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.54202903,
      "lon": 100.1988542,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.5,
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.2,
      "latest_observed_at": "2026-09-24 11:00"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.75079527,
      "lon": 101.1226103,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 66.5,
      "nearest_alert_km": 11.5,
      "latest_observed_at": "2026-09-24 11:00"
    },
    {
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 16,
      "rain_alert_count": 12,
      "water_alert_count": 4,
      "max_rainfall_mm": 66.0,
      "nearest_alert_km": 6.0,
      "latest_observed_at": "2026-09-24 11:40"
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
      "max_rainfall_mm": 61.8,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-24 11:00"
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
      "max_rainfall_mm": 53.2,
      "nearest_alert_km": 5.9,
      "latest_observed_at": "2026-09-24 11:00"
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
      "max_rainfall_mm": 41.0,
      "nearest_alert_km": 14.8,
      "latest_observed_at": "2026-09-24 11:00"
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
      "max_rainfall_mm": 39.4,
      "nearest_alert_km": 10.7,
      "latest_observed_at": "2026-09-24 11:00"
    },
    {
      "id": 24,
      "name": "นิคมอุตสาหกรรมบางพลี",
      "lat": 13.565582,
      "lon": 100.794583,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 38.6,
      "nearest_alert_km": 6.5,
      "latest_observed_at": "2026-09-24 10:00"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.54653659,
      "lon": 100.3436175,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.6,
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "latest_observed_at": "2026-09-24 11:40"
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
      "rainfall_mm": 180.1,
      "value_text": "180.1 มม.",
      "observed_at": "2026-09-24 10:50",
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
      "rainfall_mm": 171.8,
      "value_text": "171.8 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 17.9,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนมิตรสัมพันธ์",
      "station_code": "STN1974",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.952748,
      "lon": 100.91541,
      "rainfall_mm": 130.0,
      "value_text": "130 มม.",
      "observed_at": "2026-09-24 10:00",
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
      "rainfall_mm": 120.5,
      "value_text": "120.5 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 12.1,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "ระยอง",
      "station_code": "48478",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.63369,
      "lon": 101.34075,
      "rainfall_mm": 103.9,
      "value_text": "103.9 มม.",
      "observed_at": "2026-09-24 10:00",
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
      "rainfall_mm": 103.2,
      "value_text": "103.2 มม.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองผักแว่น",
      "station_code": "STN1589",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.040789,
      "lon": 102.577395,
      "rainfall_mm": 99.5,
      "value_text": "99.5 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 35.3,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 98.5,
      "value_text": "98.5 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.6,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สระแก้ว",
      "station_code": "48440",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.78889,
      "lon": 102.03472,
      "rainfall_mm": 97.0,
      "value_text": "97 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 43.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "วัดบ้านห้วยชัน",
      "station_code": "ONE077",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.98736,
      "lon": 102.43794,
      "rainfall_mm": 96.0,
      "value_text": "96 มม.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 31.9,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับแม็ก",
      "station_code": "STN1001",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.874664,
      "lon": 102.42264,
      "rainfall_mm": 95.5,
      "value_text": "95.5 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 22.0,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 22.36,
      "storage_percent": 116.02,
      "value_text": "22.36 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
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
      "waterlevel_msl": 4.17,
      "storage_percent": 115.22,
      "value_text": "4.17 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
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
      "waterlevel_msl": 9.63,
      "storage_percent": 108.48,
      "value_text": "9.63 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
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
      "waterlevel_msl": 5.02,
      "storage_percent": 108.13,
      "value_text": "5.02 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 5.05,
      "storage_percent": 107.32,
      "value_text": "5.05 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 44.44,
      "storage_percent": 104.0,
      "value_text": "44.44 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 6.05,
      "storage_percent": 102.92,
      "value_text": "6.05 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 1.94,
      "storage_percent": 101.86,
      "value_text": "1.94 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
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
      "waterlevel_msl": 40.66,
      "storage_percent": 101.51,
      "value_text": "40.66 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.9,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "observed_at": "2026-09-24 11:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "rainfall_mm": 89.3,
      "value_text": "89.3 มม.",
      "observed_at": "2026-09-24 10:50",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 35.4,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแผ่นดินเย็น",
      "station_code": "STN1591",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.960406,
      "lon": 102.505896,
      "rainfall_mm": 82.5,
      "value_text": "82.5 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 26.8,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 80.0,
      "value_text": "80 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 25.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 79.4,
      "value_text": "79.4 มม.",
      "observed_at": "2026-09-24 11:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 29.0,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
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
      "rainfall_mm": 77.4,
      "value_text": "77.4 มม.",
      "observed_at": "2026-09-24 11:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.9,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "observed_at": "2026-09-24 11:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 34.1,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "rainfall_mm": 75.6,
      "value_text": "75.6 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 6.7,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.บ่อวิน",
      "station_code": "SWNG",
      "province": "ชลบุรี",
      "district": "ศรีราชา",
      "lat": 13.05505,
      "lon": 101.09782,
      "rainfall_mm": 74.6,
      "value_text": "74.6 มม.",
      "observed_at": "2026-09-24 11:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 4.4,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
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
      "rainfall_mm": 74.0,
      "value_text": "74 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 46.6,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "กรุงเทพฯ บางนา สกษ.",
      "station_code": "48453",
      "province": "กรุงเทพมหานคร",
      "district": "บางนา",
      "lat": 13.66639,
      "lon": 100.60611,
      "rainfall_mm": 72.8,
      "value_text": "72.8 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 11.2,
      "nearest_estate": "นิคมอุตสาหกรรมอัญธานี",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "บ้านฟากห้วย",
      "station_code": "ridtele_TTL.04",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.684085,
      "lon": 102.501103,
      "rainfall_mm": 72.0,
      "value_text": "72 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 7.3,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 70.4,
      "value_text": "70.4 มม.",
      "observed_at": "2026-09-24 10:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 6.5,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี",
      "agency": "อต."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านทาม",
      "station_code": "Kgt.6",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97341,
      "lon": 101.517448,
      "waterlevel_msl": 6.52,
      "storage_percent": 99.34,
      "value_text": "6.52 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.42,
      "storage_percent": 99.25,
      "value_text": "1.42 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 28.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ศรีมหาโพธิ (KGT6)",
      "station_code": "PRC005",
      "province": "ปราจีนบุรี",
      "district": "ศรีมหาโพธิ",
      "lat": 13.97348,
      "lon": 101.51751,
      "waterlevel_msl": 7.4,
      "storage_percent": 98.22,
      "value_text": "7.4 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 38.76,
      "storage_percent": 97.9,
      "value_text": "38.76 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 1.18,
      "storage_percent": 97.64,
      "value_text": "1.18 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 34.72,
      "storage_percent": 97.34,
      "value_text": "34.72 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.7,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.93,
      "storage_percent": 97.2,
      "value_text": "1.93 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 47.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 38.64,
      "storage_percent": 96.68,
      "value_text": "38.64 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 19.27,
      "storage_percent": 96.34,
      "value_text": "19.27 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 3.7,
      "storage_percent": 95.22,
      "value_text": "3.7 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
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
      "waterlevel_msl": 38.45,
      "storage_percent": 94.73,
      "value_text": "38.45 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.8,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "สะพานณรงค์ดำริ",
      "station_code": "Kgt.1",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.05144,
      "lon": 101.367378,
      "waterlevel_msl": 3.58,
      "storage_percent": 94.62,
      "value_text": "3.58 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
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
      "waterlevel_msl": 1.21,
      "storage_percent": 92.54,
      "value_text": "1.21 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 27.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 34.87,
      "storage_percent": 92.14,
      "value_text": "34.87 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "กบินทร์บุรี",
      "station_code": "PRC001",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 13.986616,
      "lon": 101.70547,
      "waterlevel_msl": 10.36,
      "storage_percent": 91.9,
      "value_text": "10.36 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 3.39,
      "storage_percent": 91.02,
      "value_text": "3.39 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 1.6,
      "storage_percent": 90.97,
      "value_text": "1.6 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.0,
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
      "waterlevel_msl": 0.31,
      "storage_percent": 90.9,
      "value_text": "0.31 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.1,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 2.12,
      "storage_percent": 90.74,
      "value_text": "2.12 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 11.21,
      "storage_percent": 90.65,
      "value_text": "11.21 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 0.54,
      "storage_percent": 90.64,
      "value_text": "0.54 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.1,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 0.96,
      "storage_percent": 90.26,
      "value_text": "0.96 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.9,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 15.03,
      "storage_percent": 89.65,
      "value_text": "15.03 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 5.72,
      "storage_percent": 89.04,
      "value_text": "5.72 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.27,
      "storage_percent": 88.14,
      "value_text": "0.27 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 5.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ตะพานหิน",
      "station_code": "NAN007",
      "province": "พิจิตร",
      "district": "ตะพานหิน",
      "lat": 16.27034,
      "lon": 100.41396,
      "waterlevel_msl": 32.64,
      "storage_percent": 87.79,
      "value_text": "32.64 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 3.4,
      "storage_percent": 87.73,
      "value_text": "3.4 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 3.24,
      "storage_percent": 87.47,
      "value_text": "3.24 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.4,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองจระเข้ใหญ่ บางเสาธง (วัดศรีวารีน้อย)",
      "station_code": "BKK017",
      "province": "สมุทรปราการ",
      "district": "บางเสาธง",
      "lat": 13.66949,
      "lon": 100.80058,
      "waterlevel_msl": 0.1,
      "storage_percent": 87.45,
      "value_text": "0.1 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.9,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "storage_percent": 87.43,
      "value_text": "4.51 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 0.1,
      "storage_percent": 86.25,
      "value_text": "0.1 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.5,
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
      "waterlevel_msl": 5.87,
      "storage_percent": 86.22,
      "value_text": "5.87 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "storage_percent": 86.21,
      "value_text": "3.44 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
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
      "waterlevel_msl": 26.02,
      "storage_percent": 86.02,
      "value_text": "26.02 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "พรหมบุรี",
      "station_code": "CPY007",
      "province": "สิงห์บุรี",
      "district": "พรหมบุรี",
      "lat": 14.79091,
      "lon": 100.45184,
      "waterlevel_msl": 8.71,
      "storage_percent": 85.81,
      "value_text": "8.71 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.08,
      "storage_percent": 85.72,
      "value_text": "0.08 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": -0.46,
      "storage_percent": 85.32,
      "value_text": "-0.46 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 3.45,
      "storage_percent": 84.74,
      "value_text": "3.45 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
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
      "waterlevel_msl": 33.64,
      "storage_percent": 84.74,
      "value_text": "33.64 ม.รทก.",
      "observed_at": "2026-09-24 10:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.2,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 1.87,
      "storage_percent": 83.88,
      "value_text": "1.87 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.1,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 6.63,
      "storage_percent": 83.71,
      "value_text": "6.63 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
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
      "waterlevel_msl": 8.52,
      "storage_percent": 83.7,
      "value_text": "8.52 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 7.02,
      "storage_percent": 82.68,
      "value_text": "7.02 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.0,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สะพานปรีดี-ธำรง",
      "station_code": "S.5",
      "province": "พระนครศรีอยุธยา",
      "district": "พระนครศรีอยุธยา",
      "lat": 14.35872,
      "lon": 100.580452,
      "waterlevel_msl": 2.27,
      "storage_percent": 81.72,
      "value_text": "2.27 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.9,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "พระรามสอง",
      "station_code": "MKG006",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.38362,
      "lon": 99.9836,
      "waterlevel_msl": -0.8,
      "storage_percent": 79.88,
      "value_text": "-0.8 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.2,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 6.38,
      "storage_percent": 79.75,
      "value_text": "6.38 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.7,
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
      "waterlevel_msl": 10.09,
      "storage_percent": 79.28,
      "value_text": "10.09 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 25.49,
      "storage_percent": 78.89,
      "value_text": "25.49 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 1.89,
      "storage_percent": 78.41,
      "value_text": "1.89 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.7,
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
      "waterlevel_msl": -1.22,
      "storage_percent": 78.32,
      "value_text": "-1.22 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "waterlevel_msl": 0.21,
      "storage_percent": 76.97,
      "value_text": "0.21 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.7,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 5.82,
      "storage_percent": 76.82,
      "value_text": "5.82 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.8,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 21.82,
      "storage_percent": 76.67,
      "value_text": "21.82 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
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
      "waterlevel_msl": 0.19,
      "storage_percent": 76.5,
      "value_text": "0.19 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 42.15,
      "storage_percent": 76.33,
      "value_text": "42.15 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "storage_percent": 76.14,
      "value_text": "0.36 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
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
      "waterlevel_msl": 5.83,
      "storage_percent": 75.99,
      "value_text": "5.83 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.8,
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
      "waterlevel_msl": 9.74,
      "storage_percent": 75.88,
      "value_text": "9.74 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 7.2,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "agency": "ชป."
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
      "storage_percent": 74.39,
      "value_text": "3.23 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 3.89,
      "storage_percent": 74.37,
      "value_text": "3.89 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.73,
      "storage_percent": 74.2,
      "value_text": "0.73 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 42.45,
      "storage_percent": 74.06,
      "value_text": "42.45 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 47.13,
      "storage_percent": 73.91,
      "value_text": "47.13 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 45.4,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 8.59,
      "storage_percent": 73.49,
      "value_text": "8.59 ม.รทก.",
      "observed_at": "2026-09-24 11:00",
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
      "observed_at": "2026-09-24 11:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 42.23,
      "storage_percent": 72.39,
      "value_text": "42.23 ม.รทก.",
      "observed_at": "2026-09-24 11:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 42.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 37,
    "station_count": 965,
    "alert_station_count": 181,
    "heavy_rain_estate_count": 9,
    "water_alert_estate_count": 25,
    "critical_count": 72,
    "rain_station_count": 778,
    "waterlevel_station_count": 187,
    "waterlevel_alert_count": 104,
    "max_rainfall_mm": 180.1,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.ฉะเชิงเทรา",
      "จ.ชลบุรี",
      "จ.ตราด",
      "จ.บุรีรัมย์",
      "จ.สระแก้ว"
    ],
    "flood_watch_province_count": 5,
    "flash_flood_24h_area_count": 14,
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
      "time": "11:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
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
          "sum_rainfall_mm": 96.4,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "sum_rainfall_mm": 127.5,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200402",
          "tambon": "ต.หนองปรือ",
          "amphoe": "อ.บางละมุง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชุมชนมิตรสัมพันธ์",
          "latitude": 12.952748,
          "longitude": 100.91541,
          "sum_rainfall_mm": 133.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9622,
                  12.94831
                ],
                [
                  100.96439,
                  12.94665
                ],
                [
                  100.95904,
                  12.94306
                ],
                [
                  100.95652,
                  12.92342
                ],
                [
                  100.95796,
                  12.9203
                ],
                [
                  100.96381,
                  12.92147
                ],
                [
                  100.9683,
                  12.91877
                ],
                [
                  100.96888,
                  12.90747
                ],
                [
                  100.97035,
                  12.90511
                ],
                [
                  100.97137,
                  12.89695
                ],
                [
                  100.97067,
                  12.89267
                ],
                [
                  100.97165,
                  12.89176
                ],
                [
                  100.95254,
                  12.88084
                ],
                [
                  100.93991,
                  12.88519
                ],
                [
                  100.93527,
                  12.88572
                ],
                [
                  100.93141,
                  12.88806
                ],
                [
                  100.92226,
                  12.8885
                ],
                [
                  100.92092,
                  12.88386
                ],
                [
                  100.91768,
                  12.88387
                ],
                [
                  100.91683,
                  12.88265
                ],
                [
                  100.91547,
                  12.87513
                ],
                [
                  100.91307,
                  12.87677
                ],
                [
                  100.91125,
                  12.86758
                ],
                [
                  100.90577,
                  12.88448
                ],
                [
                  100.90352,
                  12.89563
                ],
                [
                  100.90336,
                  12.91326
                ],
                [
                  100.90535,
                  12.92339
                ],
                [
                  100.9205,
                  12.96922
                ],
                [
                  100.92676,
                  12.96526
                ],
                [
                  100.92947,
                  12.96472
                ],
                [
                  100.93617,
                  12.96789
                ],
                [
                  100.94194,
                  12.96581
                ],
                [
                  100.94566,
                  12.96601
                ],
                [
                  100.94829,
                  12.96747
                ],
                [
                  100.95118,
                  12.96634
                ],
                [
                  100.95539,
                  12.95353
                ],
                [
                  100.95962,
                  12.94666
                ],
                [
                  100.96139,
                  12.94678
                ],
                [
                  100.9622,
                  12.94831
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
          "sum_rainfall_mm": 165.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "sum_rainfall_mm": 123.20000000000002,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สำนักสงฆ์โสธรรมนิมิตร",
          "latitude": 13.168441,
          "longitude": 101.03034,
          "sum_rainfall_mm": 98.6,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200902",
          "tambon": "ต.นาจอมเทียน",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
          "latitude": 12.768159,
          "longitude": 100.97308,
          "sum_rainfall_mm": 196.2000000000001,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200903",
          "tambon": "ต.พลูตาหลวง",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.พลูตาหลวง",
          "latitude": 12.69861,
          "longitude": 100.9762,
          "sum_rainfall_mm": 161.8,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.01209,
                  12.76718
                ],
                [
                  101.01251,
                  12.76189
                ],
                [
                  101.0145,
                  12.76108
                ],
                [
                  101.01473,
                  12.75896
                ],
                [
                  101.01172,
                  12.75363
                ],
                [
                  101.00842,
                  12.7512
                ],
                [
                  101.00808,
                  12.74581
                ],
                [
                  101.00325,
                  12.73873
                ],
                [
                  101.00336,
                  12.73343
                ],
                [
                  100.99046,
                  12.72596
                ],
                [
                  100.99109,
                  12.72284
                ],
                [
                  100.99294,
                  12.72189
                ],
                [
                  100.99248,
                  12.72048
                ],
                [
                  100.99447,
                  12.71468
                ],
                [
                  100.99,
                  12.70933
                ],
                [
                  100.98946,
                  12.70578
                ],
                [
                  100.98628,
                  12.69964
                ],
                [
                  100.98758,
                  12.69781
                ],
                [
                  100.98549,
                  12.6958
                ],
                [
                  100.98455,
                  12.69277
                ],
                [
                  100.9879,
                  12.68749
                ],
                [
                  100.98735,
                  12.68432
                ],
                [
                  100.98959,
                  12.68448
                ],
                [
                  100.99051,
                  12.67882
                ],
                [
                  100.99228,
                  12.67643
                ],
                [
                  100.99026,
                  12.66992
                ],
                [
                  100.99269,
                  12.66475
                ],
                [
                  100.99173,
                  12.66308
                ],
                [
                  100.99328,
                  12.66106
                ],
                [
                  100.99251,
                  12.65974
                ],
                [
                  100.99309,
                  12.6561
                ],
                [
                  100.98152,
                  12.65244
                ],
                [
                  100.96954,
                  12.64622
                ],
                [
                  100.96802,
                  12.64183
                ],
                [
                  100.97077,
                  12.63893
                ],
                [
                  100.96595,
                  12.63497
                ],
                [
                  100.96366,
                  12.62899
                ],
                [
                  100.95345,
                  12.64446
                ],
                [
                  100.95479,
                  12.64646
                ],
                [
                  100.95202,
                  12.66698
                ],
                [
                  100.92677,
                  12.66548
                ],
                [
                  100.92828,
                  12.66971
                ],
                [
                  100.92672,
                  12.68449
                ],
                [
                  100.92229,
                  12.68497
                ],
                [
                  100.92271,
                  12.68762
                ],
                [
                  100.92132,
                  12.68856
                ],
                [
                  100.91924,
                  12.70106
                ],
                [
                  100.91547,
                  12.70117
                ],
                [
                  100.91628,
                  12.70488
                ],
                [
                  100.92004,
                  12.71135
                ],
                [
                  100.92927,
                  12.71018
                ],
                [
                  100.93036,
                  12.71207
                ],
                [
                  100.93775,
                  12.71
                ],
                [
                  100.94109,
                  12.71144
                ],
                [
                  100.94316,
                  12.71079
                ],
                [
                  100.94238,
                  12.71523
                ],
                [
                  100.96248,
                  12.7188
                ],
                [
                  100.96412,
                  12.72355
                ],
                [
                  100.96257,
                  12.73134
                ],
                [
                  100.96319,
                  12.74104
                ],
                [
                  100.97304,
                  12.74825
                ],
                [
                  100.97818,
                  12.7576
                ],
                [
                  100.98606,
                  12.76191
                ],
                [
                  100.99125,
                  12.76279
                ],
                [
                  100.99136,
                  12.7644
                ],
                [
                  100.99385,
                  12.76646
                ],
                [
                  101.00395,
                  12.7687
                ],
                [
                  101.01209,
                  12.76718
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
          "sum_rainfall_mm": 194.8,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "270306",
          "tambon": "ต.ทัพราช",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองผักแว่น",
          "latitude": 14.040789,
          "longitude": 102.577395,
          "sum_rainfall_mm": 240.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.74628,
                  14.14038
                ],
                [
                  102.74861,
                  14.13931
                ],
                [
                  102.75983,
                  14.13855
                ],
                [
                  102.76573,
                  14.14078
                ],
                [
                  102.76945,
                  14.11891
                ],
                [
                  102.76914,
                  14.10825
                ],
                [
                  102.7726,
                  14.09231
                ],
                [
                  102.7719,
                  14.08816
                ],
                [
                  102.77332,
                  14.08064
                ],
                [
                  102.77882,
                  14.06811
                ],
                [
                  102.77981,
                  14.06053
                ],
                [
                  102.75989,
                  14.04928
                ],
                [
                  102.75122,
                  14.04621
                ],
                [
                  102.74911,
                  14.03635
                ],
                [
                  102.7459,
                  14.03579
                ],
                [
                  102.73889,
                  14.0308
                ],
                [
                  102.73531,
                  14.02963
                ],
                [
                  102.73132,
                  14.02457
                ],
                [
                  102.72584,
                  14.02365
                ],
                [
                  102.72192,
                  14.01343
                ],
                [
                  102.71715,
                  14.01138
                ],
                [
                  102.7143,
                  14.00747
                ],
                [
                  102.7142,
                  14.00566
                ],
                [
                  102.71097,
                  14.00579
                ],
                [
                  102.70824,
                  14.00902
                ],
                [
                  102.70118,
                  14.00933
                ],
                [
                  102.69752,
                  14.01262
                ],
                [
                  102.69517,
                  14.01075
                ],
                [
                  102.69201,
                  14.01102
                ],
                [
                  102.69116,
                  14.00881
                ],
                [
                  102.68578,
                  14.00899
                ],
                [
                  102.68108,
                  14.00407
                ],
                [
                  102.67779,
                  14.00316
                ],
                [
                  102.65746,
                  14.00699
                ],
                [
                  102.6423,
                  14.00842
                ],
                [
                  102.62276,
                  14.00538
                ],
                [
                  102.60292,
                  13.99985
                ],
                [
                  102.58925,
                  13.98016
                ],
                [
                  102.58516,
                  13.9816
                ],
                [
                  102.57818,
                  13.97898
                ],
                [
                  102.56962,
                  13.98139
                ],
                [
                  102.56484,
                  13.98444
                ],
                [
                  102.55909,
                  13.99345
                ],
                [
                  102.5581,
                  13.99997
                ],
                [
                  102.55977,
                  14.00567
                ],
                [
                  102.55837,
                  14.01746
                ],
                [
                  102.55441,
                  14.01795
                ],
                [
                  102.54955,
                  14.02063
                ],
                [
                  102.54608,
                  14.0289
                ],
                [
                  102.54804,
                  14.03338
                ],
                [
                  102.54687,
                  14.03878
                ],
                [
                  102.53727,
                  14.0431
                ],
                [
                  102.53518,
                  14.04573
                ],
                [
                  102.53553,
                  14.06166
                ],
                [
                  102.53873,
                  14.07425
                ],
                [
                  102.53526,
                  14.07539
                ],
                [
                  102.53393,
                  14.07715
                ],
                [
                  102.53493,
                  14.08178
                ],
                [
                  102.53305,
                  14.08466
                ],
                [
                  102.53445,
                  14.08834
                ],
                [
                  102.53257,
                  14.09706
                ],
                [
                  102.52957,
                  14.09693
                ],
                [
                  102.51813,
                  14.09181
                ],
                [
                  102.50972,
                  14.09271
                ],
                [
                  102.50465,
                  14.09982
                ],
                [
                  102.49923,
                  14.10509
                ],
                [
                  102.49762,
                  14.11196
                ],
                [
                  102.49788,
                  14.12108
                ],
                [
                  102.50029,
                  14.12265
                ],
                [
                  102.50311,
                  14.12752
                ],
                [
                  102.50253,
                  14.13012
                ],
                [
                  102.50027,
                  14.13281
                ],
                [
                  102.50745,
                  14.13261
                ],
                [
                  102.51697,
                  14.14161
                ],
                [
                  102.52228,
                  14.14312
                ],
                [
                  102.52671,
                  14.14166
                ],
                [
                  102.53113,
                  14.13849
                ],
                [
                  102.53745,
                  14.13827
                ],
                [
                  102.55016,
                  14.13525
                ],
                [
                  102.56871,
                  14.14863
                ],
                [
                  102.58603,
                  14.15689
                ],
                [
                  102.58817,
                  14.15866
                ],
                [
                  102.59244,
                  14.16612
                ],
                [
                  102.59866,
                  14.16918
                ],
                [
                  102.6063,
                  14.17096
                ],
                [
                  102.61239,
                  14.1694
                ],
                [
                  102.6276,
                  14.15216
                ],
                [
                  102.63431,
                  14.14886
                ],
                [
                  102.639,
                  14.15059
                ],
                [
                  102.64563,
                  14.16068
                ],
                [
                  102.65157,
                  14.16452
                ],
                [
                  102.65535,
                  14.16562
                ],
                [
                  102.65867,
                  14.16255
                ],
                [
                  102.68249,
                  14.15128
                ],
                [
                  102.69071,
                  14.14291
                ],
                [
                  102.68868,
                  14.13434
                ],
                [
                  102.69574,
                  14.13057
                ],
                [
                  102.70474,
                  14.13212
                ],
                [
                  102.71055,
                  14.13377
                ],
                [
                  102.71737,
                  14.13739
                ],
                [
                  102.72719,
                  14.13875
                ],
                [
                  102.7345,
                  14.1415
                ],
                [
                  102.74628,
                  14.14038
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 183.8,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.13856,
                  13.39707
                ],
                [
                  102.14176,
                  13.38858
                ],
                [
                  102.13747,
                  13.38249
                ],
                [
                  102.13944,
                  13.38017
                ],
                [
                  102.14141,
                  13.37471
                ],
                [
                  102.13882,
                  13.36858
                ],
                [
                  102.14501,
                  13.3552
                ],
                [
                  102.1765,
                  13.34187
                ],
                [
                  102.16599,
                  13.32888
                ],
                [
                  102.16506,
                  13.32417
                ],
                [
                  102.15732,
                  13.32117
                ],
                [
                  102.15644,
                  13.32205
                ],
                [
                  102.15466,
                  13.32014
                ],
                [
                  102.15025,
                  13.31882
                ],
                [
                  102.14729,
                  13.32078
                ],
                [
                  102.1472,
                  13.32206
                ],
                [
                  102.1437,
                  13.32321
                ],
                [
                  102.14314,
                  13.32571
                ],
                [
                  102.14198,
                  13.32546
                ],
                [
                  102.14148,
                  13.32705
                ],
                [
                  102.13928,
                  13.32773
                ],
                [
                  102.13895,
                  13.32941
                ],
                [
                  102.13738,
                  13.33012
                ],
                [
                  102.13783,
                  13.33185
                ],
                [
                  102.13625,
                  13.33314
                ],
                [
                  102.13371,
                  13.33318
                ],
                [
                  102.13114,
                  13.33548
                ],
                [
                  102.12764,
                  13.33436
                ],
                [
                  102.12804,
                  13.33291
                ],
                [
                  102.12695,
                  13.33152
                ],
                [
                  102.12772,
                  13.32918
                ],
                [
                  102.12666,
                  13.32724
                ],
                [
                  102.12924,
                  13.32522
                ],
                [
                  102.12741,
                  13.32093
                ],
                [
                  102.12815,
                  13.31931
                ],
                [
                  102.12542,
                  13.31795
                ],
                [
                  102.12551,
                  13.31356
                ],
                [
                  102.12375,
                  13.31364
                ],
                [
                  102.1226,
                  13.31136
                ],
                [
                  102.12417,
                  13.30979
                ],
                [
                  102.11899,
                  13.30346
                ],
                [
                  102.11953,
                  13.30117
                ],
                [
                  102.11825,
                  13.29919
                ],
                [
                  102.1197,
                  13.297
                ],
                [
                  102.11981,
                  13.29265
                ],
                [
                  102.11836,
                  13.28941
                ],
                [
                  102.11899,
                  13.28345
                ],
                [
                  102.11777,
                  13.28218
                ],
                [
                  102.11817,
                  13.27713
                ],
                [
                  102.11646,
                  13.27672
                ],
                [
                  102.1159,
                  13.27438
                ],
                [
                  102.11361,
                  13.27469
                ],
                [
                  102.11427,
                  13.27294
                ],
                [
                  102.11296,
                  13.2724
                ],
                [
                  102.11307,
                  13.26968
                ],
                [
                  102.1086,
                  13.26395
                ],
                [
                  102.10292,
                  13.26114
                ],
                [
                  102.0992,
                  13.26122
                ],
                [
                  102.09369,
                  13.25929
                ],
                [
                  102.08882,
                  13.26028
                ],
                [
                  102.08207,
                  13.25718
                ],
                [
                  102.07116,
                  13.25571
                ],
                [
                  102.0678,
                  13.25223
                ],
                [
                  102.0627,
                  13.25003
                ],
                [
                  102.06186,
                  13.24721
                ],
                [
                  102.06419,
                  13.2467
                ],
                [
                  102.05635,
                  13.23977
                ],
                [
                  102.04929,
                  13.23887
                ],
                [
                  102.04375,
                  13.24167
                ],
                [
                  102.03614,
                  13.23846
                ],
                [
                  102.03134,
                  13.23896
                ],
                [
                  102.02833,
                  13.23657
                ],
                [
                  102.02674,
                  13.23982
                ],
                [
                  102.02873,
                  13.24324
                ],
                [
                  102.02846,
                  13.2482
                ],
                [
                  102.0296,
                  13.2499
                ],
                [
                  102.0287,
                  13.25769
                ],
                [
                  102.03023,
                  13.26091
                ],
                [
                  102.02912,
                  13.26621
                ],
                [
                  102.03561,
                  13.28116
                ],
                [
                  102.03384,
                  13.28505
                ],
                [
                  102.0289,
                  13.28759
                ],
                [
                  102.02397,
                  13.28696
                ],
                [
                  102.02129,
                  13.28888
                ],
                [
                  102.01811,
                  13.28882
                ],
                [
                  102.01418,
                  13.29251
                ],
                [
                  102.01278,
                  13.28913
                ],
                [
                  102.01076,
                  13.29091
                ],
                [
                  102.00935,
                  13.29698
                ],
                [
                  102.00164,
                  13.31652
                ],
                [
                  101.99239,
                  13.32431
                ],
                [
                  101.98984,
                  13.33324
                ],
                [
                  101.98573,
                  13.33917
                ],
                [
                  101.98585,
                  13.34142
                ],
                [
                  101.98909,
                  13.34518
                ],
                [
                  101.99013,
                  13.35334
                ],
                [
                  101.99843,
                  13.35949
                ],
                [
                  102.00673,
                  13.36102
                ],
                [
                  102.00976,
                  13.36433
                ],
                [
                  102.01187,
                  13.36911
                ],
                [
                  102.02108,
                  13.37706
                ],
                [
                  102.02685,
                  13.37817
                ],
                [
                  102.03862,
                  13.38504
                ],
                [
                  102.04742,
                  13.38857
                ],
                [
                  102.05311,
                  13.39314
                ],
                [
                  102.06342,
                  13.39647
                ],
                [
                  102.06483,
                  13.40226
                ],
                [
                  102.06744,
                  13.40382
                ],
                [
                  102.06925,
                  13.40302
                ],
                [
                  102.07398,
                  13.40665
                ],
                [
                  102.07583,
                  13.41064
                ],
                [
                  102.07561,
                  13.4125
                ],
                [
                  102.07811,
                  13.41313
                ],
                [
                  102.07844,
                  13.41865
                ],
                [
                  102.0835,
                  13.41926
                ],
                [
                  102.08525,
                  13.42136
                ],
                [
                  102.0891,
                  13.41963
                ],
                [
                  102.09005,
                  13.41684
                ],
                [
                  102.09221,
                  13.41721
                ],
                [
                  102.09544,
                  13.41508
                ],
                [
                  102.09766,
                  13.41623
                ],
                [
                  102.0994,
                  13.41216
                ],
                [
                  102.10363,
                  13.41156
                ],
                [
                  102.10438,
                  13.40936
                ],
                [
                  102.11297,
                  13.40771
                ],
                [
                  102.11456,
                  13.40822
                ],
                [
                  102.11539,
                  13.41205
                ],
                [
                  102.1191,
                  13.41556
                ],
                [
                  102.12423,
                  13.41641
                ],
                [
                  102.12878,
                  13.41436
                ],
                [
                  102.14169,
                  13.41836
                ],
                [
                  102.14146,
                  13.4101
                ],
                [
                  102.13602,
                  13.4033
                ],
                [
                  102.13856,
                  13.39707
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 197.39999999999998,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.43134,
                  14.15234
                ],
                [
                  102.43311,
                  14.14643
                ],
                [
                  102.43658,
                  14.14336
                ],
                [
                  102.44621,
                  14.142
                ],
                [
                  102.45097,
                  14.14338
                ],
                [
                  102.45338,
                  14.14285
                ],
                [
                  102.45073,
                  14.13171
                ],
                [
                  102.44661,
                  14.12454
                ],
                [
                  102.44712,
                  14.12028
                ],
                [
                  102.45475,
                  14.11316
                ],
                [
                  102.45841,
                  14.1033
                ],
                [
                  102.46571,
                  14.0948
                ],
                [
                  102.46548,
                  14.08698
                ],
                [
                  102.47125,
                  14.07679
                ],
                [
                  102.47942,
                  14.06711
                ],
                [
                  102.48462,
                  14.04981
                ],
                [
                  102.49091,
                  14.04264
                ],
                [
                  102.49008,
                  14.03533
                ],
                [
                  102.49628,
                  14.02984
                ],
                [
                  102.49536,
                  14.00671
                ],
                [
                  102.48601,
                  13.99756
                ],
                [
                  102.48216,
                  13.98752
                ],
                [
                  102.48695,
                  13.9687
                ],
                [
                  102.48727,
                  13.95053
                ],
                [
                  102.48932,
                  13.94549
                ],
                [
                  102.48991,
                  13.92944
                ],
                [
                  102.49234,
                  13.91956
                ],
                [
                  102.49176,
                  13.91422
                ],
                [
                  102.48664,
                  13.89779
                ],
                [
                  102.48394,
                  13.88286
                ],
                [
                  102.48466,
                  13.87082
                ],
                [
                  102.47991,
                  13.87027
                ],
                [
                  102.47295,
                  13.87475
                ],
                [
                  102.46852,
                  13.87204
                ],
                [
                  102.46653,
                  13.86866
                ],
                [
                  102.46398,
                  13.86717
                ],
                [
                  102.46438,
                  13.8606
                ],
                [
                  102.46193,
                  13.85673
                ],
                [
                  102.45966,
                  13.85876
                ],
                [
                  102.45857,
                  13.86277
                ],
                [
                  102.44693,
                  13.86646
                ],
                [
                  102.44736,
                  13.87943
                ],
                [
                  102.44549,
                  13.8851
                ],
                [
                  102.42321,
                  13.89129
                ],
                [
                  102.42027,
                  13.8925
                ],
                [
                  102.41754,
                  13.89547
                ],
                [
                  102.41652,
                  13.90053
                ],
                [
                  102.41668,
                  13.92184
                ],
                [
                  102.41489,
                  13.92398
                ],
                [
                  102.40981,
                  13.92546
                ],
                [
                  102.40715,
                  13.92391
                ],
                [
                  102.40169,
                  13.92355
                ],
                [
                  102.40187,
                  13.92708
                ],
                [
                  102.40457,
                  13.9287
                ],
                [
                  102.40215,
                  13.93135
                ],
                [
                  102.40392,
                  13.93393
                ],
                [
                  102.40162,
                  13.93526
                ],
                [
                  102.4049,
                  13.9356
                ],
                [
                  102.40605,
                  13.94036
                ],
                [
                  102.4047,
                  13.94106
                ],
                [
                  102.40545,
                  13.94325
                ],
                [
                  102.40697,
                  13.94361
                ],
                [
                  102.40511,
                  13.94468
                ],
                [
                  102.40425,
                  13.94724
                ],
                [
                  102.405,
                  13.95166
                ],
                [
                  102.40776,
                  13.95181
                ],
                [
                  102.40707,
                  13.95284
                ],
                [
                  102.40988,
                  13.95451
                ],
                [
                  102.4086,
                  13.95634
                ],
                [
                  102.41227,
                  13.95803
                ],
                [
                  102.41152,
                  13.95969
                ],
                [
                  102.41407,
                  13.95951
                ],
                [
                  102.41419,
                  13.9617
                ],
                [
                  102.41781,
                  13.96108
                ],
                [
                  102.41817,
                  13.96404
                ],
                [
                  102.41676,
                  13.96472
                ],
                [
                  102.41813,
                  13.96626
                ],
                [
                  102.41693,
                  13.96737
                ],
                [
                  102.41969,
                  13.96735
                ],
                [
                  102.41981,
                  13.96892
                ],
                [
                  102.42204,
                  13.96871
                ],
                [
                  102.42374,
                  13.97073
                ],
                [
                  102.42185,
                  13.97256
                ],
                [
                  102.42363,
                  13.97329
                ],
                [
                  102.42383,
                  13.97479
                ],
                [
                  102.42268,
                  13.97499
                ],
                [
                  102.42298,
                  13.97666
                ],
                [
                  102.42167,
                  13.97733
                ],
                [
                  102.42359,
                  13.97984
                ],
                [
                  102.42036,
                  13.98347
                ],
                [
                  102.42164,
                  13.98728
                ],
                [
                  102.42156,
                  13.99318
                ],
                [
                  102.42011,
                  13.99608
                ],
                [
                  102.42076,
                  14.00068
                ],
                [
                  102.42135,
                  14.00171
                ],
                [
                  102.42416,
                  14.00193
                ],
                [
                  102.43123,
                  14.01048
                ],
                [
                  102.42974,
                  14.0108
                ],
                [
                  102.43184,
                  14.0142
                ],
                [
                  102.43118,
                  14.0151
                ],
                [
                  102.4256,
                  14.01279
                ],
                [
                  102.42472,
                  14.01337
                ],
                [
                  102.42521,
                  14.01601
                ],
                [
                  102.42292,
                  14.01747
                ],
                [
                  102.42182,
                  14.02488
                ],
                [
                  102.42051,
                  14.02635
                ],
                [
                  102.42292,
                  14.03194
                ],
                [
                  102.42039,
                  14.03386
                ],
                [
                  102.42346,
                  14.03415
                ],
                [
                  102.42478,
                  14.03718
                ],
                [
                  102.42727,
                  14.03758
                ],
                [
                  102.42835,
                  14.03893
                ],
                [
                  102.43092,
                  14.04381
                ],
                [
                  102.4293,
                  14.04565
                ],
                [
                  102.43048,
                  14.04975
                ],
                [
                  102.4339,
                  14.0502
                ],
                [
                  102.43393,
                  14.05156
                ],
                [
                  102.43601,
                  14.05273
                ],
                [
                  102.43565,
                  14.05458
                ],
                [
                  102.43681,
                  14.0561
                ],
                [
                  102.43096,
                  14.05884
                ],
                [
                  102.43301,
                  14.06209
                ],
                [
                  102.42876,
                  14.06731
                ],
                [
                  102.4264,
                  14.06853
                ],
                [
                  102.42989,
                  14.07474
                ],
                [
                  102.43016,
                  14.0785
                ],
                [
                  102.42701,
                  14.08556
                ],
                [
                  102.42369,
                  14.08716
                ],
                [
                  102.42251,
                  14.09057
                ],
                [
                  102.41703,
                  14.09257
                ],
                [
                  102.41548,
                  14.09098
                ],
                [
                  102.40629,
                  14.09852
                ],
                [
                  102.40579,
                  14.10544
                ],
                [
                  102.40226,
                  14.11645
                ],
                [
                  102.40353,
                  14.12348
                ],
                [
                  102.4006,
                  14.13184
                ],
                [
                  102.4018,
                  14.13768
                ],
                [
                  102.39928,
                  14.14115
                ],
                [
                  102.39403,
                  14.14515
                ],
                [
                  102.40027,
                  14.14599
                ],
                [
                  102.40516,
                  14.15328
                ],
                [
                  102.40961,
                  14.15571
                ],
                [
                  102.41834,
                  14.154
                ],
                [
                  102.42125,
                  14.15723
                ],
                [
                  102.42376,
                  14.15791
                ],
                [
                  102.42574,
                  14.15632
                ],
                [
                  102.42714,
                  14.15265
                ],
                [
                  102.43134,
                  14.15234
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 291.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.41754,
                  13.89547
                ],
                [
                  102.42027,
                  13.8925
                ],
                [
                  102.42321,
                  13.89129
                ],
                [
                  102.44549,
                  13.8851
                ],
                [
                  102.44736,
                  13.87943
                ],
                [
                  102.44693,
                  13.86646
                ],
                [
                  102.43353,
                  13.85901
                ],
                [
                  102.42904,
                  13.85154
                ],
                [
                  102.42604,
                  13.85024
                ],
                [
                  102.42384,
                  13.84165
                ],
                [
                  102.41815,
                  13.83761
                ],
                [
                  102.41583,
                  13.8335
                ],
                [
                  102.4114,
                  13.83279
                ],
                [
                  102.40818,
                  13.8267
                ],
                [
                  102.40308,
                  13.82734
                ],
                [
                  102.40252,
                  13.82975
                ],
                [
                  102.3973,
                  13.83508
                ],
                [
                  102.39376,
                  13.83576
                ],
                [
                  102.38907,
                  13.84362
                ],
                [
                  102.38674,
                  13.84459
                ],
                [
                  102.36693,
                  13.83104
                ],
                [
                  102.36481,
                  13.83352
                ],
                [
                  102.36462,
                  13.83803
                ],
                [
                  102.35961,
                  13.84196
                ],
                [
                  102.35794,
                  13.84701
                ],
                [
                  102.36072,
                  13.85257
                ],
                [
                  102.36116,
                  13.85768
                ],
                [
                  102.35946,
                  13.86034
                ],
                [
                  102.35431,
                  13.86126
                ],
                [
                  102.35096,
                  13.85522
                ],
                [
                  102.34906,
                  13.8543
                ],
                [
                  102.33553,
                  13.85724
                ],
                [
                  102.33176,
                  13.85576
                ],
                [
                  102.32827,
                  13.85625
                ],
                [
                  102.32462,
                  13.85344
                ],
                [
                  102.32005,
                  13.85377
                ],
                [
                  102.31669,
                  13.86357
                ],
                [
                  102.30509,
                  13.87255
                ],
                [
                  102.30708,
                  13.88073
                ],
                [
                  102.31348,
                  13.88426
                ],
                [
                  102.31477,
                  13.88621
                ],
                [
                  102.31905,
                  13.88418
                ],
                [
                  102.32022,
                  13.88523
                ],
                [
                  102.32157,
                  13.88454
                ],
                [
                  102.32199,
                  13.88571
                ],
                [
                  102.32452,
                  13.8853
                ],
                [
                  102.32512,
                  13.88639
                ],
                [
                  102.32631,
                  13.88513
                ],
                [
                  102.32625,
                  13.88302
                ],
                [
                  102.32821,
                  13.88187
                ],
                [
                  102.32878,
                  13.88295
                ],
                [
                  102.33202,
                  13.88368
                ],
                [
                  102.33427,
                  13.88287
                ],
                [
                  102.33417,
                  13.88508
                ],
                [
                  102.33668,
                  13.88751
                ],
                [
                  102.33811,
                  13.88535
                ],
                [
                  102.342,
                  13.8865
                ],
                [
                  102.34441,
                  13.88426
                ],
                [
                  102.34427,
                  13.88609
                ],
                [
                  102.34678,
                  13.88572
                ],
                [
                  102.34872,
                  13.88845
                ],
                [
                  102.3487,
                  13.89169
                ],
                [
                  102.35177,
                  13.89249
                ],
                [
                  102.35082,
                  13.89379
                ],
                [
                  102.34955,
                  13.89326
                ],
                [
                  102.34979,
                  13.89794
                ],
                [
                  102.3519,
                  13.89641
                ],
                [
                  102.35253,
                  13.89878
                ],
                [
                  102.35522,
                  13.89667
                ],
                [
                  102.35652,
                  13.89933
                ],
                [
                  102.35826,
                  13.89782
                ],
                [
                  102.36077,
                  13.8997
                ],
                [
                  102.3621,
                  13.89869
                ],
                [
                  102.36296,
                  13.90033
                ],
                [
                  102.36694,
                  13.90055
                ],
                [
                  102.36892,
                  13.90259
                ],
                [
                  102.3726,
                  13.90185
                ],
                [
                  102.37466,
                  13.90018
                ],
                [
                  102.37606,
                  13.89438
                ],
                [
                  102.37878,
                  13.8907
                ],
                [
                  102.38238,
                  13.88149
                ],
                [
                  102.38572,
                  13.87691
                ],
                [
                  102.3932,
                  13.87321
                ],
                [
                  102.40299,
                  13.87137
                ],
                [
                  102.40951,
                  13.87547
                ],
                [
                  102.40878,
                  13.87749
                ],
                [
                  102.4105,
                  13.88249
                ],
                [
                  102.41264,
                  13.88479
                ],
                [
                  102.41377,
                  13.88464
                ],
                [
                  102.41594,
                  13.88794
                ],
                [
                  102.41576,
                  13.89094
                ],
                [
                  102.41754,
                  13.89547
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 178.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.17805,
                  14.43562
                ],
                [
                  103.17696,
                  14.43057
                ],
                [
                  103.178,
                  14.42451
                ],
                [
                  103.17815,
                  14.40766
                ],
                [
                  103.18604,
                  14.40846
                ],
                [
                  103.18965,
                  14.398
                ],
                [
                  103.19009,
                  14.37742
                ],
                [
                  103.19197,
                  14.37161
                ],
                [
                  103.19438,
                  14.35467
                ],
                [
                  103.19595,
                  14.33059
                ],
                [
                  103.18004,
                  14.33519
                ],
                [
                  103.16822,
                  14.33538
                ],
                [
                  103.16377,
                  14.33345
                ],
                [
                  103.16132,
                  14.33069
                ],
                [
                  103.15826,
                  14.32215
                ],
                [
                  103.15317,
                  14.3136
                ],
                [
                  103.14638,
                  14.32482
                ],
                [
                  103.14214,
                  14.32653
                ],
                [
                  103.13919,
                  14.32472
                ],
                [
                  103.13837,
                  14.32641
                ],
                [
                  103.13847,
                  14.33317
                ],
                [
                  103.13743,
                  14.3357
                ],
                [
                  103.14015,
                  14.34333
                ],
                [
                  103.14003,
                  14.34571
                ],
                [
                  103.13774,
                  14.35042
                ],
                [
                  103.13556,
                  14.36175
                ],
                [
                  103.13555,
                  14.37019
                ],
                [
                  103.13374,
                  14.37557
                ],
                [
                  103.13137,
                  14.39121
                ],
                [
                  103.13525,
                  14.39766
                ],
                [
                  103.14774,
                  14.41019
                ],
                [
                  103.13953,
                  14.43082
                ],
                [
                  103.16542,
                  14.43596
                ],
                [
                  103.17805,
                  14.43562
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
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
          "sum_rainfall_mm": 96.4,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "sum_rainfall_mm": 127.5,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200402",
          "tambon": "ต.หนองปรือ",
          "amphoe": "อ.บางละมุง",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ชุมชนมิตรสัมพันธ์",
          "latitude": 12.952748,
          "longitude": 100.91541,
          "sum_rainfall_mm": 133.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9622,
                  12.94831
                ],
                [
                  100.96439,
                  12.94665
                ],
                [
                  100.95904,
                  12.94306
                ],
                [
                  100.95652,
                  12.92342
                ],
                [
                  100.95796,
                  12.9203
                ],
                [
                  100.96381,
                  12.92147
                ],
                [
                  100.9683,
                  12.91877
                ],
                [
                  100.96888,
                  12.90747
                ],
                [
                  100.97035,
                  12.90511
                ],
                [
                  100.97137,
                  12.89695
                ],
                [
                  100.97067,
                  12.89267
                ],
                [
                  100.97165,
                  12.89176
                ],
                [
                  100.95254,
                  12.88084
                ],
                [
                  100.93991,
                  12.88519
                ],
                [
                  100.93527,
                  12.88572
                ],
                [
                  100.93141,
                  12.88806
                ],
                [
                  100.92226,
                  12.8885
                ],
                [
                  100.92092,
                  12.88386
                ],
                [
                  100.91768,
                  12.88387
                ],
                [
                  100.91683,
                  12.88265
                ],
                [
                  100.91547,
                  12.87513
                ],
                [
                  100.91307,
                  12.87677
                ],
                [
                  100.91125,
                  12.86758
                ],
                [
                  100.90577,
                  12.88448
                ],
                [
                  100.90352,
                  12.89563
                ],
                [
                  100.90336,
                  12.91326
                ],
                [
                  100.90535,
                  12.92339
                ],
                [
                  100.9205,
                  12.96922
                ],
                [
                  100.92676,
                  12.96526
                ],
                [
                  100.92947,
                  12.96472
                ],
                [
                  100.93617,
                  12.96789
                ],
                [
                  100.94194,
                  12.96581
                ],
                [
                  100.94566,
                  12.96601
                ],
                [
                  100.94829,
                  12.96747
                ],
                [
                  100.95118,
                  12.96634
                ],
                [
                  100.95539,
                  12.95353
                ],
                [
                  100.95962,
                  12.94666
                ],
                [
                  100.96139,
                  12.94678
                ],
                [
                  100.9622,
                  12.94831
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
          "sum_rainfall_mm": 165.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "sum_rainfall_mm": 123.20000000000002,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200707",
          "tambon": "ต.บางพระ",
          "amphoe": "อ.ศรีราชา",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สำนักสงฆ์โสธรรมนิมิตร",
          "latitude": 13.168441,
          "longitude": 101.03034,
          "sum_rainfall_mm": 98.6,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200902",
          "tambon": "ต.นาจอมเทียน",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
          "latitude": 12.768159,
          "longitude": 100.97308,
          "sum_rainfall_mm": 196.2000000000001,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "200903",
          "tambon": "ต.พลูตาหลวง",
          "amphoe": "อ.สัตหีบ",
          "province": "จ.ชลบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.พลูตาหลวง",
          "latitude": 12.69861,
          "longitude": 100.9762,
          "sum_rainfall_mm": 161.8,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.01209,
                  12.76718
                ],
                [
                  101.01251,
                  12.76189
                ],
                [
                  101.0145,
                  12.76108
                ],
                [
                  101.01473,
                  12.75896
                ],
                [
                  101.01172,
                  12.75363
                ],
                [
                  101.00842,
                  12.7512
                ],
                [
                  101.00808,
                  12.74581
                ],
                [
                  101.00325,
                  12.73873
                ],
                [
                  101.00336,
                  12.73343
                ],
                [
                  100.99046,
                  12.72596
                ],
                [
                  100.99109,
                  12.72284
                ],
                [
                  100.99294,
                  12.72189
                ],
                [
                  100.99248,
                  12.72048
                ],
                [
                  100.99447,
                  12.71468
                ],
                [
                  100.99,
                  12.70933
                ],
                [
                  100.98946,
                  12.70578
                ],
                [
                  100.98628,
                  12.69964
                ],
                [
                  100.98758,
                  12.69781
                ],
                [
                  100.98549,
                  12.6958
                ],
                [
                  100.98455,
                  12.69277
                ],
                [
                  100.9879,
                  12.68749
                ],
                [
                  100.98735,
                  12.68432
                ],
                [
                  100.98959,
                  12.68448
                ],
                [
                  100.99051,
                  12.67882
                ],
                [
                  100.99228,
                  12.67643
                ],
                [
                  100.99026,
                  12.66992
                ],
                [
                  100.99269,
                  12.66475
                ],
                [
                  100.99173,
                  12.66308
                ],
                [
                  100.99328,
                  12.66106
                ],
                [
                  100.99251,
                  12.65974
                ],
                [
                  100.99309,
                  12.6561
                ],
                [
                  100.98152,
                  12.65244
                ],
                [
                  100.96954,
                  12.64622
                ],
                [
                  100.96802,
                  12.64183
                ],
                [
                  100.97077,
                  12.63893
                ],
                [
                  100.96595,
                  12.63497
                ],
                [
                  100.96366,
                  12.62899
                ],
                [
                  100.95345,
                  12.64446
                ],
                [
                  100.95479,
                  12.64646
                ],
                [
                  100.95202,
                  12.66698
                ],
                [
                  100.92677,
                  12.66548
                ],
                [
                  100.92828,
                  12.66971
                ],
                [
                  100.92672,
                  12.68449
                ],
                [
                  100.92229,
                  12.68497
                ],
                [
                  100.92271,
                  12.68762
                ],
                [
                  100.92132,
                  12.68856
                ],
                [
                  100.91924,
                  12.70106
                ],
                [
                  100.91547,
                  12.70117
                ],
                [
                  100.91628,
                  12.70488
                ],
                [
                  100.92004,
                  12.71135
                ],
                [
                  100.92927,
                  12.71018
                ],
                [
                  100.93036,
                  12.71207
                ],
                [
                  100.93775,
                  12.71
                ],
                [
                  100.94109,
                  12.71144
                ],
                [
                  100.94316,
                  12.71079
                ],
                [
                  100.94238,
                  12.71523
                ],
                [
                  100.96248,
                  12.7188
                ],
                [
                  100.96412,
                  12.72355
                ],
                [
                  100.96257,
                  12.73134
                ],
                [
                  100.96319,
                  12.74104
                ],
                [
                  100.97304,
                  12.74825
                ],
                [
                  100.97818,
                  12.7576
                ],
                [
                  100.98606,
                  12.76191
                ],
                [
                  100.99125,
                  12.76279
                ],
                [
                  100.99136,
                  12.7644
                ],
                [
                  100.99385,
                  12.76646
                ],
                [
                  101.00395,
                  12.7687
                ],
                [
                  101.01209,
                  12.76718
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
          "sum_rainfall_mm": 194.8,
          "observed_at": "2026-09-23T23:00:00+07:00",
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
          "geocode": "270306",
          "tambon": "ต.ทัพราช",
          "amphoe": "อ.ตาพระยา",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหนองผักแว่น",
          "latitude": 14.040789,
          "longitude": 102.577395,
          "sum_rainfall_mm": 240.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.74628,
                  14.14038
                ],
                [
                  102.74861,
                  14.13931
                ],
                [
                  102.75983,
                  14.13855
                ],
                [
                  102.76573,
                  14.14078
                ],
                [
                  102.76945,
                  14.11891
                ],
                [
                  102.76914,
                  14.10825
                ],
                [
                  102.7726,
                  14.09231
                ],
                [
                  102.7719,
                  14.08816
                ],
                [
                  102.77332,
                  14.08064
                ],
                [
                  102.77882,
                  14.06811
                ],
                [
                  102.77981,
                  14.06053
                ],
                [
                  102.75989,
                  14.04928
                ],
                [
                  102.75122,
                  14.04621
                ],
                [
                  102.74911,
                  14.03635
                ],
                [
                  102.7459,
                  14.03579
                ],
                [
                  102.73889,
                  14.0308
                ],
                [
                  102.73531,
                  14.02963
                ],
                [
                  102.73132,
                  14.02457
                ],
                [
                  102.72584,
                  14.02365
                ],
                [
                  102.72192,
                  14.01343
                ],
                [
                  102.71715,
                  14.01138
                ],
                [
                  102.7143,
                  14.00747
                ],
                [
                  102.7142,
                  14.00566
                ],
                [
                  102.71097,
                  14.00579
                ],
                [
                  102.70824,
                  14.00902
                ],
                [
                  102.70118,
                  14.00933
                ],
                [
                  102.69752,
                  14.01262
                ],
                [
                  102.69517,
                  14.01075
                ],
                [
                  102.69201,
                  14.01102
                ],
                [
                  102.69116,
                  14.00881
                ],
                [
                  102.68578,
                  14.00899
                ],
                [
                  102.68108,
                  14.00407
                ],
                [
                  102.67779,
                  14.00316
                ],
                [
                  102.65746,
                  14.00699
                ],
                [
                  102.6423,
                  14.00842
                ],
                [
                  102.62276,
                  14.00538
                ],
                [
                  102.60292,
                  13.99985
                ],
                [
                  102.58925,
                  13.98016
                ],
                [
                  102.58516,
                  13.9816
                ],
                [
                  102.57818,
                  13.97898
                ],
                [
                  102.56962,
                  13.98139
                ],
                [
                  102.56484,
                  13.98444
                ],
                [
                  102.55909,
                  13.99345
                ],
                [
                  102.5581,
                  13.99997
                ],
                [
                  102.55977,
                  14.00567
                ],
                [
                  102.55837,
                  14.01746
                ],
                [
                  102.55441,
                  14.01795
                ],
                [
                  102.54955,
                  14.02063
                ],
                [
                  102.54608,
                  14.0289
                ],
                [
                  102.54804,
                  14.03338
                ],
                [
                  102.54687,
                  14.03878
                ],
                [
                  102.53727,
                  14.0431
                ],
                [
                  102.53518,
                  14.04573
                ],
                [
                  102.53553,
                  14.06166
                ],
                [
                  102.53873,
                  14.07425
                ],
                [
                  102.53526,
                  14.07539
                ],
                [
                  102.53393,
                  14.07715
                ],
                [
                  102.53493,
                  14.08178
                ],
                [
                  102.53305,
                  14.08466
                ],
                [
                  102.53445,
                  14.08834
                ],
                [
                  102.53257,
                  14.09706
                ],
                [
                  102.52957,
                  14.09693
                ],
                [
                  102.51813,
                  14.09181
                ],
                [
                  102.50972,
                  14.09271
                ],
                [
                  102.50465,
                  14.09982
                ],
                [
                  102.49923,
                  14.10509
                ],
                [
                  102.49762,
                  14.11196
                ],
                [
                  102.49788,
                  14.12108
                ],
                [
                  102.50029,
                  14.12265
                ],
                [
                  102.50311,
                  14.12752
                ],
                [
                  102.50253,
                  14.13012
                ],
                [
                  102.50027,
                  14.13281
                ],
                [
                  102.50745,
                  14.13261
                ],
                [
                  102.51697,
                  14.14161
                ],
                [
                  102.52228,
                  14.14312
                ],
                [
                  102.52671,
                  14.14166
                ],
                [
                  102.53113,
                  14.13849
                ],
                [
                  102.53745,
                  14.13827
                ],
                [
                  102.55016,
                  14.13525
                ],
                [
                  102.56871,
                  14.14863
                ],
                [
                  102.58603,
                  14.15689
                ],
                [
                  102.58817,
                  14.15866
                ],
                [
                  102.59244,
                  14.16612
                ],
                [
                  102.59866,
                  14.16918
                ],
                [
                  102.6063,
                  14.17096
                ],
                [
                  102.61239,
                  14.1694
                ],
                [
                  102.6276,
                  14.15216
                ],
                [
                  102.63431,
                  14.14886
                ],
                [
                  102.639,
                  14.15059
                ],
                [
                  102.64563,
                  14.16068
                ],
                [
                  102.65157,
                  14.16452
                ],
                [
                  102.65535,
                  14.16562
                ],
                [
                  102.65867,
                  14.16255
                ],
                [
                  102.68249,
                  14.15128
                ],
                [
                  102.69071,
                  14.14291
                ],
                [
                  102.68868,
                  14.13434
                ],
                [
                  102.69574,
                  14.13057
                ],
                [
                  102.70474,
                  14.13212
                ],
                [
                  102.71055,
                  14.13377
                ],
                [
                  102.71737,
                  14.13739
                ],
                [
                  102.72719,
                  14.13875
                ],
                [
                  102.7345,
                  14.1415
                ],
                [
                  102.74628,
                  14.14038
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 183.8,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.13856,
                  13.39707
                ],
                [
                  102.14176,
                  13.38858
                ],
                [
                  102.13747,
                  13.38249
                ],
                [
                  102.13944,
                  13.38017
                ],
                [
                  102.14141,
                  13.37471
                ],
                [
                  102.13882,
                  13.36858
                ],
                [
                  102.14501,
                  13.3552
                ],
                [
                  102.1765,
                  13.34187
                ],
                [
                  102.16599,
                  13.32888
                ],
                [
                  102.16506,
                  13.32417
                ],
                [
                  102.15732,
                  13.32117
                ],
                [
                  102.15644,
                  13.32205
                ],
                [
                  102.15466,
                  13.32014
                ],
                [
                  102.15025,
                  13.31882
                ],
                [
                  102.14729,
                  13.32078
                ],
                [
                  102.1472,
                  13.32206
                ],
                [
                  102.1437,
                  13.32321
                ],
                [
                  102.14314,
                  13.32571
                ],
                [
                  102.14198,
                  13.32546
                ],
                [
                  102.14148,
                  13.32705
                ],
                [
                  102.13928,
                  13.32773
                ],
                [
                  102.13895,
                  13.32941
                ],
                [
                  102.13738,
                  13.33012
                ],
                [
                  102.13783,
                  13.33185
                ],
                [
                  102.13625,
                  13.33314
                ],
                [
                  102.13371,
                  13.33318
                ],
                [
                  102.13114,
                  13.33548
                ],
                [
                  102.12764,
                  13.33436
                ],
                [
                  102.12804,
                  13.33291
                ],
                [
                  102.12695,
                  13.33152
                ],
                [
                  102.12772,
                  13.32918
                ],
                [
                  102.12666,
                  13.32724
                ],
                [
                  102.12924,
                  13.32522
                ],
                [
                  102.12741,
                  13.32093
                ],
                [
                  102.12815,
                  13.31931
                ],
                [
                  102.12542,
                  13.31795
                ],
                [
                  102.12551,
                  13.31356
                ],
                [
                  102.12375,
                  13.31364
                ],
                [
                  102.1226,
                  13.31136
                ],
                [
                  102.12417,
                  13.30979
                ],
                [
                  102.11899,
                  13.30346
                ],
                [
                  102.11953,
                  13.30117
                ],
                [
                  102.11825,
                  13.29919
                ],
                [
                  102.1197,
                  13.297
                ],
                [
                  102.11981,
                  13.29265
                ],
                [
                  102.11836,
                  13.28941
                ],
                [
                  102.11899,
                  13.28345
                ],
                [
                  102.11777,
                  13.28218
                ],
                [
                  102.11817,
                  13.27713
                ],
                [
                  102.11646,
                  13.27672
                ],
                [
                  102.1159,
                  13.27438
                ],
                [
                  102.11361,
                  13.27469
                ],
                [
                  102.11427,
                  13.27294
                ],
                [
                  102.11296,
                  13.2724
                ],
                [
                  102.11307,
                  13.26968
                ],
                [
                  102.1086,
                  13.26395
                ],
                [
                  102.10292,
                  13.26114
                ],
                [
                  102.0992,
                  13.26122
                ],
                [
                  102.09369,
                  13.25929
                ],
                [
                  102.08882,
                  13.26028
                ],
                [
                  102.08207,
                  13.25718
                ],
                [
                  102.07116,
                  13.25571
                ],
                [
                  102.0678,
                  13.25223
                ],
                [
                  102.0627,
                  13.25003
                ],
                [
                  102.06186,
                  13.24721
                ],
                [
                  102.06419,
                  13.2467
                ],
                [
                  102.05635,
                  13.23977
                ],
                [
                  102.04929,
                  13.23887
                ],
                [
                  102.04375,
                  13.24167
                ],
                [
                  102.03614,
                  13.23846
                ],
                [
                  102.03134,
                  13.23896
                ],
                [
                  102.02833,
                  13.23657
                ],
                [
                  102.02674,
                  13.23982
                ],
                [
                  102.02873,
                  13.24324
                ],
                [
                  102.02846,
                  13.2482
                ],
                [
                  102.0296,
                  13.2499
                ],
                [
                  102.0287,
                  13.25769
                ],
                [
                  102.03023,
                  13.26091
                ],
                [
                  102.02912,
                  13.26621
                ],
                [
                  102.03561,
                  13.28116
                ],
                [
                  102.03384,
                  13.28505
                ],
                [
                  102.0289,
                  13.28759
                ],
                [
                  102.02397,
                  13.28696
                ],
                [
                  102.02129,
                  13.28888
                ],
                [
                  102.01811,
                  13.28882
                ],
                [
                  102.01418,
                  13.29251
                ],
                [
                  102.01278,
                  13.28913
                ],
                [
                  102.01076,
                  13.29091
                ],
                [
                  102.00935,
                  13.29698
                ],
                [
                  102.00164,
                  13.31652
                ],
                [
                  101.99239,
                  13.32431
                ],
                [
                  101.98984,
                  13.33324
                ],
                [
                  101.98573,
                  13.33917
                ],
                [
                  101.98585,
                  13.34142
                ],
                [
                  101.98909,
                  13.34518
                ],
                [
                  101.99013,
                  13.35334
                ],
                [
                  101.99843,
                  13.35949
                ],
                [
                  102.00673,
                  13.36102
                ],
                [
                  102.00976,
                  13.36433
                ],
                [
                  102.01187,
                  13.36911
                ],
                [
                  102.02108,
                  13.37706
                ],
                [
                  102.02685,
                  13.37817
                ],
                [
                  102.03862,
                  13.38504
                ],
                [
                  102.04742,
                  13.38857
                ],
                [
                  102.05311,
                  13.39314
                ],
                [
                  102.06342,
                  13.39647
                ],
                [
                  102.06483,
                  13.40226
                ],
                [
                  102.06744,
                  13.40382
                ],
                [
                  102.06925,
                  13.40302
                ],
                [
                  102.07398,
                  13.40665
                ],
                [
                  102.07583,
                  13.41064
                ],
                [
                  102.07561,
                  13.4125
                ],
                [
                  102.07811,
                  13.41313
                ],
                [
                  102.07844,
                  13.41865
                ],
                [
                  102.0835,
                  13.41926
                ],
                [
                  102.08525,
                  13.42136
                ],
                [
                  102.0891,
                  13.41963
                ],
                [
                  102.09005,
                  13.41684
                ],
                [
                  102.09221,
                  13.41721
                ],
                [
                  102.09544,
                  13.41508
                ],
                [
                  102.09766,
                  13.41623
                ],
                [
                  102.0994,
                  13.41216
                ],
                [
                  102.10363,
                  13.41156
                ],
                [
                  102.10438,
                  13.40936
                ],
                [
                  102.11297,
                  13.40771
                ],
                [
                  102.11456,
                  13.40822
                ],
                [
                  102.11539,
                  13.41205
                ],
                [
                  102.1191,
                  13.41556
                ],
                [
                  102.12423,
                  13.41641
                ],
                [
                  102.12878,
                  13.41436
                ],
                [
                  102.14169,
                  13.41836
                ],
                [
                  102.14146,
                  13.4101
                ],
                [
                  102.13602,
                  13.4033
                ],
                [
                  102.13856,
                  13.39707
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 197.39999999999998,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.43134,
                  14.15234
                ],
                [
                  102.43311,
                  14.14643
                ],
                [
                  102.43658,
                  14.14336
                ],
                [
                  102.44621,
                  14.142
                ],
                [
                  102.45097,
                  14.14338
                ],
                [
                  102.45338,
                  14.14285
                ],
                [
                  102.45073,
                  14.13171
                ],
                [
                  102.44661,
                  14.12454
                ],
                [
                  102.44712,
                  14.12028
                ],
                [
                  102.45475,
                  14.11316
                ],
                [
                  102.45841,
                  14.1033
                ],
                [
                  102.46571,
                  14.0948
                ],
                [
                  102.46548,
                  14.08698
                ],
                [
                  102.47125,
                  14.07679
                ],
                [
                  102.47942,
                  14.06711
                ],
                [
                  102.48462,
                  14.04981
                ],
                [
                  102.49091,
                  14.04264
                ],
                [
                  102.49008,
                  14.03533
                ],
                [
                  102.49628,
                  14.02984
                ],
                [
                  102.49536,
                  14.00671
                ],
                [
                  102.48601,
                  13.99756
                ],
                [
                  102.48216,
                  13.98752
                ],
                [
                  102.48695,
                  13.9687
                ],
                [
                  102.48727,
                  13.95053
                ],
                [
                  102.48932,
                  13.94549
                ],
                [
                  102.48991,
                  13.92944
                ],
                [
                  102.49234,
                  13.91956
                ],
                [
                  102.49176,
                  13.91422
                ],
                [
                  102.48664,
                  13.89779
                ],
                [
                  102.48394,
                  13.88286
                ],
                [
                  102.48466,
                  13.87082
                ],
                [
                  102.47991,
                  13.87027
                ],
                [
                  102.47295,
                  13.87475
                ],
                [
                  102.46852,
                  13.87204
                ],
                [
                  102.46653,
                  13.86866
                ],
                [
                  102.46398,
                  13.86717
                ],
                [
                  102.46438,
                  13.8606
                ],
                [
                  102.46193,
                  13.85673
                ],
                [
                  102.45966,
                  13.85876
                ],
                [
                  102.45857,
                  13.86277
                ],
                [
                  102.44693,
                  13.86646
                ],
                [
                  102.44736,
                  13.87943
                ],
                [
                  102.44549,
                  13.8851
                ],
                [
                  102.42321,
                  13.89129
                ],
                [
                  102.42027,
                  13.8925
                ],
                [
                  102.41754,
                  13.89547
                ],
                [
                  102.41652,
                  13.90053
                ],
                [
                  102.41668,
                  13.92184
                ],
                [
                  102.41489,
                  13.92398
                ],
                [
                  102.40981,
                  13.92546
                ],
                [
                  102.40715,
                  13.92391
                ],
                [
                  102.40169,
                  13.92355
                ],
                [
                  102.40187,
                  13.92708
                ],
                [
                  102.40457,
                  13.9287
                ],
                [
                  102.40215,
                  13.93135
                ],
                [
                  102.40392,
                  13.93393
                ],
                [
                  102.40162,
                  13.93526
                ],
                [
                  102.4049,
                  13.9356
                ],
                [
                  102.40605,
                  13.94036
                ],
                [
                  102.4047,
                  13.94106
                ],
                [
                  102.40545,
                  13.94325
                ],
                [
                  102.40697,
                  13.94361
                ],
                [
                  102.40511,
                  13.94468
                ],
                [
                  102.40425,
                  13.94724
                ],
                [
                  102.405,
                  13.95166
                ],
                [
                  102.40776,
                  13.95181
                ],
                [
                  102.40707,
                  13.95284
                ],
                [
                  102.40988,
                  13.95451
                ],
                [
                  102.4086,
                  13.95634
                ],
                [
                  102.41227,
                  13.95803
                ],
                [
                  102.41152,
                  13.95969
                ],
                [
                  102.41407,
                  13.95951
                ],
                [
                  102.41419,
                  13.9617
                ],
                [
                  102.41781,
                  13.96108
                ],
                [
                  102.41817,
                  13.96404
                ],
                [
                  102.41676,
                  13.96472
                ],
                [
                  102.41813,
                  13.96626
                ],
                [
                  102.41693,
                  13.96737
                ],
                [
                  102.41969,
                  13.96735
                ],
                [
                  102.41981,
                  13.96892
                ],
                [
                  102.42204,
                  13.96871
                ],
                [
                  102.42374,
                  13.97073
                ],
                [
                  102.42185,
                  13.97256
                ],
                [
                  102.42363,
                  13.97329
                ],
                [
                  102.42383,
                  13.97479
                ],
                [
                  102.42268,
                  13.97499
                ],
                [
                  102.42298,
                  13.97666
                ],
                [
                  102.42167,
                  13.97733
                ],
                [
                  102.42359,
                  13.97984
                ],
                [
                  102.42036,
                  13.98347
                ],
                [
                  102.42164,
                  13.98728
                ],
                [
                  102.42156,
                  13.99318
                ],
                [
                  102.42011,
                  13.99608
                ],
                [
                  102.42076,
                  14.00068
                ],
                [
                  102.42135,
                  14.00171
                ],
                [
                  102.42416,
                  14.00193
                ],
                [
                  102.43123,
                  14.01048
                ],
                [
                  102.42974,
                  14.0108
                ],
                [
                  102.43184,
                  14.0142
                ],
                [
                  102.43118,
                  14.0151
                ],
                [
                  102.4256,
                  14.01279
                ],
                [
                  102.42472,
                  14.01337
                ],
                [
                  102.42521,
                  14.01601
                ],
                [
                  102.42292,
                  14.01747
                ],
                [
                  102.42182,
                  14.02488
                ],
                [
                  102.42051,
                  14.02635
                ],
                [
                  102.42292,
                  14.03194
                ],
                [
                  102.42039,
                  14.03386
                ],
                [
                  102.42346,
                  14.03415
                ],
                [
                  102.42478,
                  14.03718
                ],
                [
                  102.42727,
                  14.03758
                ],
                [
                  102.42835,
                  14.03893
                ],
                [
                  102.43092,
                  14.04381
                ],
                [
                  102.4293,
                  14.04565
                ],
                [
                  102.43048,
                  14.04975
                ],
                [
                  102.4339,
                  14.0502
                ],
                [
                  102.43393,
                  14.05156
                ],
                [
                  102.43601,
                  14.05273
                ],
                [
                  102.43565,
                  14.05458
                ],
                [
                  102.43681,
                  14.0561
                ],
                [
                  102.43096,
                  14.05884
                ],
                [
                  102.43301,
                  14.06209
                ],
                [
                  102.42876,
                  14.06731
                ],
                [
                  102.4264,
                  14.06853
                ],
                [
                  102.42989,
                  14.07474
                ],
                [
                  102.43016,
                  14.0785
                ],
                [
                  102.42701,
                  14.08556
                ],
                [
                  102.42369,
                  14.08716
                ],
                [
                  102.42251,
                  14.09057
                ],
                [
                  102.41703,
                  14.09257
                ],
                [
                  102.41548,
                  14.09098
                ],
                [
                  102.40629,
                  14.09852
                ],
                [
                  102.40579,
                  14.10544
                ],
                [
                  102.40226,
                  14.11645
                ],
                [
                  102.40353,
                  14.12348
                ],
                [
                  102.4006,
                  14.13184
                ],
                [
                  102.4018,
                  14.13768
                ],
                [
                  102.39928,
                  14.14115
                ],
                [
                  102.39403,
                  14.14515
                ],
                [
                  102.40027,
                  14.14599
                ],
                [
                  102.40516,
                  14.15328
                ],
                [
                  102.40961,
                  14.15571
                ],
                [
                  102.41834,
                  14.154
                ],
                [
                  102.42125,
                  14.15723
                ],
                [
                  102.42376,
                  14.15791
                ],
                [
                  102.42574,
                  14.15632
                ],
                [
                  102.42714,
                  14.15265
                ],
                [
                  102.43134,
                  14.15234
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 291.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.41754,
                  13.89547
                ],
                [
                  102.42027,
                  13.8925
                ],
                [
                  102.42321,
                  13.89129
                ],
                [
                  102.44549,
                  13.8851
                ],
                [
                  102.44736,
                  13.87943
                ],
                [
                  102.44693,
                  13.86646
                ],
                [
                  102.43353,
                  13.85901
                ],
                [
                  102.42904,
                  13.85154
                ],
                [
                  102.42604,
                  13.85024
                ],
                [
                  102.42384,
                  13.84165
                ],
                [
                  102.41815,
                  13.83761
                ],
                [
                  102.41583,
                  13.8335
                ],
                [
                  102.4114,
                  13.83279
                ],
                [
                  102.40818,
                  13.8267
                ],
                [
                  102.40308,
                  13.82734
                ],
                [
                  102.40252,
                  13.82975
                ],
                [
                  102.3973,
                  13.83508
                ],
                [
                  102.39376,
                  13.83576
                ],
                [
                  102.38907,
                  13.84362
                ],
                [
                  102.38674,
                  13.84459
                ],
                [
                  102.36693,
                  13.83104
                ],
                [
                  102.36481,
                  13.83352
                ],
                [
                  102.36462,
                  13.83803
                ],
                [
                  102.35961,
                  13.84196
                ],
                [
                  102.35794,
                  13.84701
                ],
                [
                  102.36072,
                  13.85257
                ],
                [
                  102.36116,
                  13.85768
                ],
                [
                  102.35946,
                  13.86034
                ],
                [
                  102.35431,
                  13.86126
                ],
                [
                  102.35096,
                  13.85522
                ],
                [
                  102.34906,
                  13.8543
                ],
                [
                  102.33553,
                  13.85724
                ],
                [
                  102.33176,
                  13.85576
                ],
                [
                  102.32827,
                  13.85625
                ],
                [
                  102.32462,
                  13.85344
                ],
                [
                  102.32005,
                  13.85377
                ],
                [
                  102.31669,
                  13.86357
                ],
                [
                  102.30509,
                  13.87255
                ],
                [
                  102.30708,
                  13.88073
                ],
                [
                  102.31348,
                  13.88426
                ],
                [
                  102.31477,
                  13.88621
                ],
                [
                  102.31905,
                  13.88418
                ],
                [
                  102.32022,
                  13.88523
                ],
                [
                  102.32157,
                  13.88454
                ],
                [
                  102.32199,
                  13.88571
                ],
                [
                  102.32452,
                  13.8853
                ],
                [
                  102.32512,
                  13.88639
                ],
                [
                  102.32631,
                  13.88513
                ],
                [
                  102.32625,
                  13.88302
                ],
                [
                  102.32821,
                  13.88187
                ],
                [
                  102.32878,
                  13.88295
                ],
                [
                  102.33202,
                  13.88368
                ],
                [
                  102.33427,
                  13.88287
                ],
                [
                  102.33417,
                  13.88508
                ],
                [
                  102.33668,
                  13.88751
                ],
                [
                  102.33811,
                  13.88535
                ],
                [
                  102.342,
                  13.8865
                ],
                [
                  102.34441,
                  13.88426
                ],
                [
                  102.34427,
                  13.88609
                ],
                [
                  102.34678,
                  13.88572
                ],
                [
                  102.34872,
                  13.88845
                ],
                [
                  102.3487,
                  13.89169
                ],
                [
                  102.35177,
                  13.89249
                ],
                [
                  102.35082,
                  13.89379
                ],
                [
                  102.34955,
                  13.89326
                ],
                [
                  102.34979,
                  13.89794
                ],
                [
                  102.3519,
                  13.89641
                ],
                [
                  102.35253,
                  13.89878
                ],
                [
                  102.35522,
                  13.89667
                ],
                [
                  102.35652,
                  13.89933
                ],
                [
                  102.35826,
                  13.89782
                ],
                [
                  102.36077,
                  13.8997
                ],
                [
                  102.3621,
                  13.89869
                ],
                [
                  102.36296,
                  13.90033
                ],
                [
                  102.36694,
                  13.90055
                ],
                [
                  102.36892,
                  13.90259
                ],
                [
                  102.3726,
                  13.90185
                ],
                [
                  102.37466,
                  13.90018
                ],
                [
                  102.37606,
                  13.89438
                ],
                [
                  102.37878,
                  13.8907
                ],
                [
                  102.38238,
                  13.88149
                ],
                [
                  102.38572,
                  13.87691
                ],
                [
                  102.3932,
                  13.87321
                ],
                [
                  102.40299,
                  13.87137
                ],
                [
                  102.40951,
                  13.87547
                ],
                [
                  102.40878,
                  13.87749
                ],
                [
                  102.4105,
                  13.88249
                ],
                [
                  102.41264,
                  13.88479
                ],
                [
                  102.41377,
                  13.88464
                ],
                [
                  102.41594,
                  13.88794
                ],
                [
                  102.41576,
                  13.89094
                ],
                [
                  102.41754,
                  13.89547
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 178.0,
          "observed_at": "2026-09-23T23:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.17805,
                  14.43562
                ],
                [
                  103.17696,
                  14.43057
                ],
                [
                  103.178,
                  14.42451
                ],
                [
                  103.17815,
                  14.40766
                ],
                [
                  103.18604,
                  14.40846
                ],
                [
                  103.18965,
                  14.398
                ],
                [
                  103.19009,
                  14.37742
                ],
                [
                  103.19197,
                  14.37161
                ],
                [
                  103.19438,
                  14.35467
                ],
                [
                  103.19595,
                  14.33059
                ],
                [
                  103.18004,
                  14.33519
                ],
                [
                  103.16822,
                  14.33538
                ],
                [
                  103.16377,
                  14.33345
                ],
                [
                  103.16132,
                  14.33069
                ],
                [
                  103.15826,
                  14.32215
                ],
                [
                  103.15317,
                  14.3136
                ],
                [
                  103.14638,
                  14.32482
                ],
                [
                  103.14214,
                  14.32653
                ],
                [
                  103.13919,
                  14.32472
                ],
                [
                  103.13837,
                  14.32641
                ],
                [
                  103.13847,
                  14.33317
                ],
                [
                  103.13743,
                  14.3357
                ],
                [
                  103.14015,
                  14.34333
                ],
                [
                  103.14003,
                  14.34571
                ],
                [
                  103.13774,
                  14.35042
                ],
                [
                  103.13556,
                  14.36175
                ],
                [
                  103.13555,
                  14.37019
                ],
                [
                  103.13374,
                  14.37557
                ],
                [
                  103.13137,
                  14.39121
                ],
                [
                  103.13525,
                  14.39766
                ],
                [
                  103.14774,
                  14.41019
                ],
                [
                  103.13953,
                  14.43082
                ],
                [
                  103.16542,
                  14.43596
                ],
                [
                  103.17805,
                  14.43562
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_23_09_2026.png?1790222829",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-24",
      "time": "11:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
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
          "sum_rainfall_mm": 103.0,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "geocode": "310808",
          "tambon": "ต.จันทบเพชร",
          "amphoe": "อ.บ้านกรวด",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "โรงเรียนบ้านสายโท ๔ ใต้",
          "latitude": 14.370019,
          "longitude": 103.14561,
          "sum_rainfall_mm": 149.2,
          "observed_at": "2026-09-24T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.17805,
                  14.43562
                ],
                [
                  103.17696,
                  14.43057
                ],
                [
                  103.178,
                  14.42451
                ],
                [
                  103.17815,
                  14.40766
                ],
                [
                  103.18604,
                  14.40846
                ],
                [
                  103.18965,
                  14.398
                ],
                [
                  103.19009,
                  14.37742
                ],
                [
                  103.19197,
                  14.37161
                ],
                [
                  103.19438,
                  14.35467
                ],
                [
                  103.19595,
                  14.33059
                ],
                [
                  103.18004,
                  14.33519
                ],
                [
                  103.16822,
                  14.33538
                ],
                [
                  103.16377,
                  14.33345
                ],
                [
                  103.16132,
                  14.33069
                ],
                [
                  103.15826,
                  14.32215
                ],
                [
                  103.15317,
                  14.3136
                ],
                [
                  103.14638,
                  14.32482
                ],
                [
                  103.14214,
                  14.32653
                ],
                [
                  103.13919,
                  14.32472
                ],
                [
                  103.13837,
                  14.32641
                ],
                [
                  103.13847,
                  14.33317
                ],
                [
                  103.13743,
                  14.3357
                ],
                [
                  103.14015,
                  14.34333
                ],
                [
                  103.14003,
                  14.34571
                ],
                [
                  103.13774,
                  14.35042
                ],
                [
                  103.13556,
                  14.36175
                ],
                [
                  103.13555,
                  14.37019
                ],
                [
                  103.13374,
                  14.37557
                ],
                [
                  103.13137,
                  14.39121
                ],
                [
                  103.13525,
                  14.39766
                ],
                [
                  103.14774,
                  14.41019
                ],
                [
                  103.13953,
                  14.43082
                ],
                [
                  103.16542,
                  14.43596
                ],
                [
                  103.17805,
                  14.43562
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "sum_rainfall_mm": 101.0,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "geocode": "180302",
          "tambon": "ต.มะขามเฒ่า",
          "amphoe": "อ.วัดสิงห์",
          "province": "จ.ชัยนาท",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "T.ปตร.มะขามเฒ่า",
          "latitude": 15.222455,
          "longitude": 100.062221,
          "sum_rainfall_mm": 103.0,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "sum_rainfall_mm": 55.8,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "sum_rainfall_mm": 12.0,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "geocode": "310808",
          "tambon": "ต.จันทบเพชร",
          "amphoe": "อ.บ้านกรวด",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "โรงเรียนบ้านสายโท ๔ ใต้",
          "latitude": 14.370019,
          "longitude": 103.14561,
          "sum_rainfall_mm": 149.2,
          "observed_at": "2026-09-24T10:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  103.17805,
                  14.43562
                ],
                [
                  103.17696,
                  14.43057
                ],
                [
                  103.178,
                  14.42451
                ],
                [
                  103.17815,
                  14.40766
                ],
                [
                  103.18604,
                  14.40846
                ],
                [
                  103.18965,
                  14.398
                ],
                [
                  103.19009,
                  14.37742
                ],
                [
                  103.19197,
                  14.37161
                ],
                [
                  103.19438,
                  14.35467
                ],
                [
                  103.19595,
                  14.33059
                ],
                [
                  103.18004,
                  14.33519
                ],
                [
                  103.16822,
                  14.33538
                ],
                [
                  103.16377,
                  14.33345
                ],
                [
                  103.16132,
                  14.33069
                ],
                [
                  103.15826,
                  14.32215
                ],
                [
                  103.15317,
                  14.3136
                ],
                [
                  103.14638,
                  14.32482
                ],
                [
                  103.14214,
                  14.32653
                ],
                [
                  103.13919,
                  14.32472
                ],
                [
                  103.13837,
                  14.32641
                ],
                [
                  103.13847,
                  14.33317
                ],
                [
                  103.13743,
                  14.3357
                ],
                [
                  103.14015,
                  14.34333
                ],
                [
                  103.14003,
                  14.34571
                ],
                [
                  103.13774,
                  14.35042
                ],
                [
                  103.13556,
                  14.36175
                ],
                [
                  103.13555,
                  14.37019
                ],
                [
                  103.13374,
                  14.37557
                ],
                [
                  103.13137,
                  14.39121
                ],
                [
                  103.13525,
                  14.39766
                ],
                [
                  103.14774,
                  14.41019
                ],
                [
                  103.13953,
                  14.43082
                ],
                [
                  103.16542,
                  14.43596
                ],
                [
                  103.17805,
                  14.43562
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
          "sum_rainfall_mm": 33.4,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "station": "ท่ายาง",
          "latitude": 12.81345,
          "longitude": 99.79404,
          "sum_rainfall_mm": 3.4000000000000004,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "sum_rainfall_mm": 123.80000000000001,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "station": "บ้านโป่งกระทิงล่าง",
          "latitude": 13.340467,
          "longitude": 99.453281,
          "sum_rainfall_mm": 41.5,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "station": "บ้านพุบอนบน",
          "latitude": 13.390971,
          "longitude": 99.499611,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "sum_rainfall_mm": 59.5,
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00"
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "sum_rainfall_mm": 68.6,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "sum_rainfall_mm": 101.0,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
          "sum_rainfall_mm": 45.800000000000004,
          "observed_at": "2026-09-24T10:00:00+07:00",
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
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_23_09_2026.png?1790222823",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
