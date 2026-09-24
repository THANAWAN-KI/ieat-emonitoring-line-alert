window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-24T17:03:20+07:00",
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
      "max_rainfall_mm": 130.2,
      "nearest_alert_km": 12.1,
      "latest_observed_at": "2026-09-24 15:50"
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
      "max_rainfall_mm": 106.5,
      "nearest_alert_km": 6.7,
      "latest_observed_at": "2026-09-24 16:50"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 9,
      "rain_alert_count": 7,
      "water_alert_count": 2,
      "max_rainfall_mm": 103.6,
      "nearest_alert_km": 3.0,
      "latest_observed_at": "2026-09-24 16:50"
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
      "max_rainfall_mm": 99.0,
      "nearest_alert_km": 7.6,
      "latest_observed_at": "2026-09-24 15:00"
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
      "max_rainfall_mm": 91.4,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-24 16:00"
    },
    {
      "id": 5,
      "name": "นิคมอุตสาหกรรมนครหลวง",
      "lat": 14.4893393,
      "lon": 100.5957211,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 22,
      "rain_alert_count": 3,
      "water_alert_count": 19,
      "max_rainfall_mm": 47.2,
      "nearest_alert_km": 8.1,
      "latest_observed_at": "2026-09-24 16:50"
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
      "max_rainfall_mm": 38.0,
      "nearest_alert_km": 10.6,
      "latest_observed_at": "2026-09-24 16:50"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.56903519,
      "lon": 100.6528202,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-24 16:50"
    },
    {
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": null,
      "nearest_alert_km": 6.0,
      "latest_observed_at": "2026-09-24 16:50"
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
      "max_rainfall_mm": 75.4,
      "nearest_alert_km": 4.4,
      "latest_observed_at": "2026-09-24 16:00"
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
      "latest_observed_at": "2026-09-24 15:00"
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
      "max_rainfall_mm": 68.6,
      "nearest_alert_km": 2.0,
      "latest_observed_at": "2026-09-24 16:50"
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
      "max_rainfall_mm": 63.8,
      "nearest_alert_km": 7.7,
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.54653659,
      "lon": 100.3436175,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.6,
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:00"
    },
    {
      "id": 43,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "lat": 13.7973442,
      "lon": 100.5592795,
      "operations": "สำนักงานใหญ่",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 0,
      "water_alert_count": 4,
      "max_rainfall_mm": null,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-24 16:50"
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
      "max_rainfall_mm": 61.6,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-24 16:00"
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
      "max_rainfall_mm": 60.8,
      "nearest_alert_km": 11.5,
      "latest_observed_at": "2026-09-24 16:00"
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
      "max_rainfall_mm": 53.6,
      "nearest_alert_km": 5.9,
      "latest_observed_at": "2026-09-24 16:00"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.844575469624841,
      "lon": 101.23635660462234,
      "operations": "",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 1,
      "water_alert_count": 1,
      "max_rainfall_mm": 41.5,
      "nearest_alert_km": 7.1,
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 13:00"
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
      "max_rainfall_mm": 38.6,
      "nearest_alert_km": 10.7,
      "latest_observed_at": "2026-09-24 16:00"
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
      "latest_observed_at": "2026-09-24 16:50"
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
      "latest_observed_at": "2026-09-24 16:50"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646,
      "lon": 101.008107,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 11.7,
      "latest_observed_at": "2026-09-24 16:50"
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
      "rainfall_mm": 130.2,
      "value_text": "130.2 มม.",
      "observed_at": "2026-09-24 15:50",
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
      "rainfall_mm": 128.6,
      "value_text": "128.6 มม.",
      "observed_at": "2026-09-24 13:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 17.9,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
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
      "rainfall_mm": 116.5,
      "value_text": "116.5 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 35.3,
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
      "rainfall_mm": 106.5,
      "value_text": "106.5 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 22.0,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 105.8,
      "value_text": "105.8 มม.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 31.9,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ระยอง",
      "station_code": "48478",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.63369,
      "lon": 101.34075,
      "rainfall_mm": 103.6,
      "value_text": "103.6 มม.",
      "observed_at": "2026-09-24 13:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 16.3,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ที่ทำการกองทุนบ้านหนองผักแว่น หมู่ 9",
      "station_code": "TE65",
      "province": "สระแก้ว",
      "district": "ตาพระยา",
      "lat": 14.04115,
      "lon": 102.57745,
      "rainfall_mm": 102.2,
      "value_text": "102.2 มม.",
      "observed_at": "2026-09-24 15:50",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 35.4,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนชัยพรราชา",
      "station_code": "STN1973",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.96831,
      "lon": 100.92304,
      "rainfall_mm": 101.5,
      "value_text": "101.5 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 12.1,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
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
      "rainfall_mm": 99.4,
      "value_text": "99.4 มม.",
      "observed_at": "2026-09-24 13:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 43.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 99.0,
      "value_text": "99 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 13.7,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
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
      "rainfall_mm": 98.0,
      "value_text": "98 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 7.6,
      "nearest_estate": "นิคมอุตสาหกรรมเฮอร์มีส",
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
      "rainfall_mm": 97.0,
      "value_text": "97 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 26.8,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เขตห้ามล่าสัตว์ป่าเขาชีโอน",
      "station_code": "MOU121",
      "province": "ชลบุรี",
      "district": "สัตหีบ",
      "lat": 12.768159,
      "lon": 100.97308,
      "rainfall_mm": 91.4,
      "value_text": "91.4 มม.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 15.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเชีย",
      "agency": "พพภ"
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
      "value_text": "1.35 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 22.48,
      "storage_percent": 117.43,
      "value_text": "22.48 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "waterlevel_msl": 4.19,
      "storage_percent": 115.43,
      "value_text": "4.19 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "waterlevel_msl": 9.68,
      "storage_percent": 108.99,
      "value_text": "9.68 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "waterlevel_msl": 5.07,
      "storage_percent": 108.67,
      "value_text": "5.07 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 5.09,
      "storage_percent": 107.71,
      "value_text": "5.09 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.6,
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
      "waterlevel_msl": 1.46,
      "storage_percent": 107.49,
      "value_text": "1.46 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 12.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 44.53,
      "storage_percent": 106.51,
      "value_text": "44.53 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "storage_percent": 103.02,
      "value_text": "6.05 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 1.92,
      "storage_percent": 101.59,
      "value_text": "1.92 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "storage_percent": 101.58,
      "value_text": "40.66 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 2.61,
      "storage_percent": 100.57,
      "value_text": "2.61 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านซับสมบูรณ์",
      "station_code": "STN1002",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.950064,
      "lon": 102.556857,
      "rainfall_mm": 88.5,
      "value_text": "88.5 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 25.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 87.5,
      "value_text": "87.5 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 46.6,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "รพสต.ท่าข้าม",
      "station_code": "KOSB",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.62763,
      "lon": 102.57487,
      "rainfall_mm": 84.8,
      "value_text": "84.8 มม.",
      "observed_at": "2026-09-24 16:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.9,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 80.6,
      "value_text": "80.6 มม.",
      "observed_at": "2026-09-24 13:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 6.7,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนวังปาตอง",
      "station_code": "STN2205",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.682056,
      "lon": 102.504417,
      "rainfall_mm": 79.0,
      "value_text": "79 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 7.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านฟากห้วย",
      "station_code": "ridtele_TTL.04",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.684085,
      "lon": 102.501103,
      "rainfall_mm": 78.0,
      "value_text": "78 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 7.3,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านด่าน",
      "station_code": "STN1003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.721552,
      "lon": 102.465027,
      "rainfall_mm": 77.0,
      "value_text": "77 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 9.7,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 75.4,
      "value_text": "75.4 มม.",
      "observed_at": "2026-09-24 16:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 4.4,
      "nearest_estate": "นิคมอุตสาหกรรมอมตะซิตี้ ระยอง",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "บ้านหนองแวง",
      "station_code": "STN0999",
      "province": "สระแก้ว",
      "district": "คลองหาด",
      "lat": 13.591549,
      "lon": 102.257092,
      "rainfall_mm": 71.0,
      "value_text": "71 มม.",
      "observed_at": "2026-09-24 15:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 35.4,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 70.4,
      "value_text": "70.4 มม.",
      "observed_at": "2026-09-24 13:00",
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
      "waterlevel_msl": 6.56,
      "storage_percent": 99.63,
      "value_text": "6.56 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 7.44,
      "storage_percent": 98.61,
      "value_text": "7.44 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.33,
      "storage_percent": 98.4,
      "value_text": "1.33 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 28.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 34.81,
      "storage_percent": 98.2,
      "value_text": "34.81 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.7,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 38.77,
      "storage_percent": 98.02,
      "value_text": "38.77 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "waterlevel_msl": 1.13,
      "storage_percent": 97.24,
      "value_text": "1.13 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระปรง",
      "station_code": "SKE001",
      "province": "สระแก้ว",
      "district": "เมืองสระแก้ว",
      "lat": 13.937376,
      "lon": 101.922035,
      "waterlevel_msl": 19.34,
      "storage_percent": 97.08,
      "value_text": "19.34 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 38.66,
      "storage_percent": 96.92,
      "value_text": "38.66 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.0,
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
      "waterlevel_msl": 1.9,
      "storage_percent": 96.88,
      "value_text": "1.9 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 47.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 1.4,
      "storage_percent": 95.33,
      "value_text": "1.4 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 3.69,
      "storage_percent": 95.15,
      "value_text": "3.69 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "waterlevel_msl": 3.61,
      "storage_percent": 94.91,
      "value_text": "3.61 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.8,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 0.88,
      "storage_percent": 94.12,
      "value_text": "0.88 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "waterlevel_msl": 1.05,
      "storage_percent": 93.78,
      "value_text": "1.05 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 1.12,
      "storage_percent": 93.72,
      "value_text": "1.12 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.2,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 38.37,
      "storage_percent": 93.64,
      "value_text": "38.37 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.8,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ร.ร.บ้านสามพราน",
      "station_code": "T.14",
      "province": "นครปฐม",
      "district": "สามพราน",
      "lat": 13.72411,
      "lon": 100.215683,
      "waterlevel_msl": 0.77,
      "storage_percent": 92.88,
      "value_text": "0.77 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.1,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 1.01,
      "storage_percent": 92.55,
      "value_text": "1.01 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 5.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 1.29,
      "storage_percent": 92.34,
      "value_text": "1.29 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 10.4,
      "storage_percent": 92.2,
      "value_text": "10.4 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 10.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 34.86,
      "storage_percent": 92.07,
      "value_text": "34.86 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
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
      "waterlevel_msl": 1.47,
      "storage_percent": 91.99,
      "value_text": "1.47 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 1.14,
      "storage_percent": 91.88,
      "value_text": "1.14 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 27.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 2.14,
      "storage_percent": 91.19,
      "value_text": "2.14 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 11.22,
      "storage_percent": 90.74,
      "value_text": "11.22 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 15.09,
      "storage_percent": 90.2,
      "value_text": "15.09 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.52,
      "storage_percent": 90.19,
      "value_text": "1.52 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.0,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 3.48,
      "storage_percent": 89.49,
      "value_text": "3.48 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.5,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 0.18,
      "storage_percent": 89.12,
      "value_text": "0.18 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "storage_percent": 88.97,
      "value_text": "5.71 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.88,
      "storage_percent": 88.24,
      "value_text": "0.88 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 32.65,
      "storage_percent": 87.91,
      "value_text": "32.65 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 0.1,
      "storage_percent": 87.49,
      "value_text": "0.1 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.9,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 3.23,
      "storage_percent": 87.33,
      "value_text": "3.23 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.4,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "พนมสารคาม",
      "station_code": "BPK004",
      "province": "ฉะเชิงเทรา",
      "district": "พนมสารคาม",
      "lat": 13.72662,
      "lon": 101.35298,
      "waterlevel_msl": 4.5,
      "storage_percent": 87.29,
      "value_text": "4.5 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 1.39,
      "storage_percent": 86.83,
      "value_text": "1.39 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 5.89,
      "storage_percent": 86.57,
      "value_text": "5.89 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 8.75,
      "storage_percent": 86.18,
      "value_text": "8.75 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.9,
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
      "waterlevel_msl": 26.04,
      "storage_percent": 86.15,
      "value_text": "26.04 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 1.97,
      "storage_percent": 85.87,
      "value_text": "1.97 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.1,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 3.36,
      "storage_percent": 85.34,
      "value_text": "3.36 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
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
      "waterlevel_msl": 33.63,
      "storage_percent": 84.71,
      "value_text": "33.63 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "storage_percent": 84.53,
      "value_text": "3.43 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
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
      "waterlevel_msl": -0.01,
      "storage_percent": 84.19,
      "value_text": "-0.01 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.5,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 6.66,
      "storage_percent": 83.92,
      "value_text": "6.66 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 7.05,
      "storage_percent": 82.86,
      "value_text": "7.05 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
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
      "waterlevel_msl": 2.17,
      "storage_percent": 80.96,
      "value_text": "2.17 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.9,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ทรบ. ปากคลองห้าวา (ทุ่งท่าวุ้ง)",
      "station_code": "TCP010",
      "province": "ลพบุรี",
      "district": "เมืองลพบุรี",
      "lat": 14.818599,
      "lon": 100.576515,
      "waterlevel_msl": 6.44,
      "storage_percent": 80.5,
      "value_text": "6.44 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.7,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.51,
      "storage_percent": 80.2,
      "value_text": "0.51 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.6,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 10.11,
      "storage_percent": 79.44,
      "value_text": "10.11 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 25.51,
      "storage_percent": 79.12,
      "value_text": "25.51 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 1.83,
      "storage_percent": 77.78,
      "value_text": "1.83 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.7,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 5.86,
      "storage_percent": 77.25,
      "value_text": "5.86 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "storage_percent": 76.7,
      "value_text": "21.82 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 5.89,
      "storage_percent": 76.6,
      "value_text": "5.89 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.8,
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
      "waterlevel_msl": 42.18,
      "storage_percent": 76.58,
      "value_text": "42.18 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
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
      "waterlevel_msl": 0.37,
      "storage_percent": 76.36,
      "value_text": "0.37 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.7,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 0.16,
      "storage_percent": 75.48,
      "value_text": "0.16 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.14,
      "storage_percent": 75.27,
      "value_text": "0.14 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.7,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขาโบสถ์",
      "station_code": "Z.38",
      "province": "ระยอง",
      "district": "เมืองระยอง",
      "lat": 12.73796,
      "lon": 101.228401,
      "waterlevel_msl": 9.7,
      "storage_percent": 74.76,
      "value_text": "9.7 ม.รทก.",
      "observed_at": "2026-09-24 16:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 7.2,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "agency": "ชป."
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
      "observed_at": "2026-09-24 16:50",
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
      "storage_percent": 74.25,
      "value_text": "3.22 ม.รทก.",
      "observed_at": "2026-09-24 16:50",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 35,
    "station_count": 966,
    "alert_station_count": 160,
    "heavy_rain_estate_count": 7,
    "water_alert_estate_count": 25,
    "critical_count": 76,
    "rain_station_count": 779,
    "waterlevel_station_count": 187,
    "waterlevel_alert_count": 105,
    "max_rainfall_mm": 130.2,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.จันทบุรี",
      "จ.ตราด",
      "จ.บุรีรัมย์",
      "จ.สระแก้ว"
    ],
    "flood_watch_province_count": 4,
    "flash_flood_24h_area_count": 7,
    "flash_flood_48h_area_count": 10,
    "warning_title": "",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "flash_flood": {
    "24h": {
      "period": "24h",
      "date": "2026-09-24",
      "time": "16:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
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
          "sum_rainfall_mm": 127.2,
          "observed_at": "2026-09-24T04:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.19923,
                  12.75176
                ],
                [
                  102.20197,
                  12.74227
                ],
                [
                  102.19972,
                  12.74009
                ],
                [
                  102.19938,
                  12.74102
                ],
                [
                  102.19546,
                  12.74061
                ],
                [
                  102.19402,
                  12.73665
                ],
                [
                  102.19056,
                  12.7351
                ],
                [
                  102.18943,
                  12.73239
                ],
                [
                  102.18607,
                  12.73304
                ],
                [
                  102.18618,
                  12.72853
                ],
                [
                  102.18274,
                  12.72819
                ],
                [
                  102.18428,
                  12.72588
                ],
                [
                  102.1831,
                  12.71696
                ],
                [
                  102.17747,
                  12.71534
                ],
                [
                  102.17554,
                  12.71667
                ],
                [
                  102.17404,
                  12.7155
                ],
                [
                  102.17124,
                  12.71603
                ],
                [
                  102.16925,
                  12.71828
                ],
                [
                  102.16175,
                  12.72189
                ],
                [
                  102.16129,
                  12.7243
                ],
                [
                  102.1596,
                  12.72502
                ],
                [
                  102.15876,
                  12.72698
                ],
                [
                  102.15196,
                  12.72952
                ],
                [
                  102.14284,
                  12.73609
                ],
                [
                  102.12737,
                  12.73974
                ],
                [
                  102.10891,
                  12.74244
                ],
                [
                  102.12015,
                  12.74863
                ],
                [
                  102.12217,
                  12.76789
                ],
                [
                  102.12891,
                  12.77839
                ],
                [
                  102.15561,
                  12.78314
                ],
                [
                  102.16049,
                  12.78688
                ],
                [
                  102.173,
                  12.80172
                ],
                [
                  102.18106,
                  12.80648
                ],
                [
                  102.18498,
                  12.81229
                ],
                [
                  102.18481,
                  12.81033
                ],
                [
                  102.19446,
                  12.80489
                ],
                [
                  102.19472,
                  12.80271
                ],
                [
                  102.1937,
                  12.80315
                ],
                [
                  102.19275,
                  12.80121
                ],
                [
                  102.19334,
                  12.79856
                ],
                [
                  102.1985,
                  12.79637
                ],
                [
                  102.19987,
                  12.78998
                ],
                [
                  102.2032,
                  12.78748
                ],
                [
                  102.2017,
                  12.78484
                ],
                [
                  102.20209,
                  12.78136
                ],
                [
                  102.19877,
                  12.77701
                ],
                [
                  102.19829,
                  12.774
                ],
                [
                  102.19505,
                  12.76803
                ],
                [
                  102.19923,
                  12.75176
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
          "sum_rainfall_mm": 179.5,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "sum_rainfall_mm": 257.5,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "geocode": "270505",
          "tambon": "ต.หนองน้ำใส",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านซับแม็ก",
          "latitude": 13.874664,
          "longitude": 102.42264,
          "sum_rainfall_mm": 302.0,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "geocode": "312003",
          "tambon": "ต.ลำนางรอง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ลำนางรอง",
          "latitude": 14.1899,
          "longitude": 102.68618,
          "sum_rainfall_mm": 246.20000000000005,
          "observed_at": "2026-09-24T04:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.74698,
                  14.29882
                ],
                [
                  102.74932,
                  14.29654
                ],
                [
                  102.75458,
                  14.29679
                ],
                [
                  102.75698,
                  14.2916
                ],
                [
                  102.75385,
                  14.28087
                ],
                [
                  102.75181,
                  14.27756
                ],
                [
                  102.75233,
                  14.27406
                ],
                [
                  102.7549,
                  14.27517
                ],
                [
                  102.75631,
                  14.27436
                ],
                [
                  102.75603,
                  14.27289
                ],
                [
                  102.75116,
                  14.27021
                ],
                [
                  102.74759,
                  14.26357
                ],
                [
                  102.75677,
                  14.25923
                ],
                [
                  102.76491,
                  14.26108
                ],
                [
                  102.76662,
                  14.26048
                ],
                [
                  102.765,
                  14.25306
                ],
                [
                  102.7513,
                  14.2518
                ],
                [
                  102.75015,
                  14.25111
                ],
                [
                  102.7529,
                  14.25193
                ],
                [
                  102.74987,
                  14.24782
                ],
                [
                  102.75051,
                  14.24653
                ],
                [
                  102.75602,
                  14.24161
                ],
                [
                  102.75875,
                  14.24148
                ],
                [
                  102.76189,
                  14.24325
                ],
                [
                  102.76901,
                  14.24156
                ],
                [
                  102.77139,
                  14.24604
                ],
                [
                  102.77738,
                  14.2513
                ],
                [
                  102.77653,
                  14.2483
                ],
                [
                  102.77811,
                  14.24612
                ],
                [
                  102.77752,
                  14.24432
                ],
                [
                  102.7789,
                  14.24304
                ],
                [
                  102.77843,
                  14.24044
                ],
                [
                  102.78,
                  14.23951
                ],
                [
                  102.77995,
                  14.23314
                ],
                [
                  102.78597,
                  14.22942
                ],
                [
                  102.78647,
                  14.22801
                ],
                [
                  102.7856,
                  14.22377
                ],
                [
                  102.78323,
                  14.22298
                ],
                [
                  102.78402,
                  14.22177
                ],
                [
                  102.78196,
                  14.21605
                ],
                [
                  102.78013,
                  14.21475
                ],
                [
                  102.77822,
                  14.20609
                ],
                [
                  102.77372,
                  14.20308
                ],
                [
                  102.76509,
                  14.19168
                ],
                [
                  102.76438,
                  14.18813
                ],
                [
                  102.76115,
                  14.18584
                ],
                [
                  102.76088,
                  14.1808
                ],
                [
                  102.76183,
                  14.17854
                ],
                [
                  102.75886,
                  14.174
                ],
                [
                  102.75799,
                  14.16795
                ],
                [
                  102.74838,
                  14.15427
                ],
                [
                  102.74769,
                  14.13973
                ],
                [
                  102.74283,
                  14.14125
                ],
                [
                  102.7345,
                  14.1415
                ],
                [
                  102.72719,
                  14.13875
                ],
                [
                  102.71737,
                  14.13739
                ],
                [
                  102.71055,
                  14.13377
                ],
                [
                  102.70474,
                  14.13212
                ],
                [
                  102.69574,
                  14.13057
                ],
                [
                  102.68868,
                  14.13434
                ],
                [
                  102.69071,
                  14.14291
                ],
                [
                  102.68249,
                  14.15128
                ],
                [
                  102.65867,
                  14.16255
                ],
                [
                  102.65535,
                  14.16562
                ],
                [
                  102.65157,
                  14.16452
                ],
                [
                  102.64563,
                  14.16068
                ],
                [
                  102.639,
                  14.15059
                ],
                [
                  102.63431,
                  14.14886
                ],
                [
                  102.6276,
                  14.15216
                ],
                [
                  102.61385,
                  14.1682
                ],
                [
                  102.60802,
                  14.17105
                ],
                [
                  102.59866,
                  14.16918
                ],
                [
                  102.59244,
                  14.16612
                ],
                [
                  102.58817,
                  14.15866
                ],
                [
                  102.58603,
                  14.15689
                ],
                [
                  102.56871,
                  14.14863
                ],
                [
                  102.55134,
                  14.13579
                ],
                [
                  102.54879,
                  14.13491
                ],
                [
                  102.53745,
                  14.13827
                ],
                [
                  102.53113,
                  14.13849
                ],
                [
                  102.52671,
                  14.14166
                ],
                [
                  102.52228,
                  14.14312
                ],
                [
                  102.51697,
                  14.14161
                ],
                [
                  102.50745,
                  14.13261
                ],
                [
                  102.50027,
                  14.13281
                ],
                [
                  102.49873,
                  14.13645
                ],
                [
                  102.49032,
                  14.13517
                ],
                [
                  102.48796,
                  14.13971
                ],
                [
                  102.48269,
                  14.14172
                ],
                [
                  102.47575,
                  14.13228
                ],
                [
                  102.47384,
                  14.13122
                ],
                [
                  102.45541,
                  14.13602
                ],
                [
                  102.45297,
                  14.14326
                ],
                [
                  102.44621,
                  14.142
                ],
                [
                  102.43765,
                  14.14315
                ],
                [
                  102.43311,
                  14.14643
                ],
                [
                  102.43134,
                  14.15234
                ],
                [
                  102.4337,
                  14.1544
                ],
                [
                  102.43711,
                  14.16054
                ],
                [
                  102.43964,
                  14.17241
                ],
                [
                  102.44784,
                  14.18486
                ],
                [
                  102.4495,
                  14.19028
                ],
                [
                  102.45342,
                  14.19389
                ],
                [
                  102.45828,
                  14.19421
                ],
                [
                  102.46877,
                  14.19229
                ],
                [
                  102.47356,
                  14.19915
                ],
                [
                  102.47707,
                  14.20036
                ],
                [
                  102.48158,
                  14.19675
                ],
                [
                  102.48642,
                  14.18939
                ],
                [
                  102.49604,
                  14.18629
                ],
                [
                  102.50065,
                  14.18635
                ],
                [
                  102.5045,
                  14.18931
                ],
                [
                  102.5075,
                  14.19544
                ],
                [
                  102.51198,
                  14.20108
                ],
                [
                  102.53858,
                  14.20212
                ],
                [
                  102.544,
                  14.20779
                ],
                [
                  102.54863,
                  14.21627
                ],
                [
                  102.55633,
                  14.21684
                ],
                [
                  102.57366,
                  14.22422
                ],
                [
                  102.58954,
                  14.23678
                ],
                [
                  102.5954,
                  14.23893
                ],
                [
                  102.60256,
                  14.24417
                ],
                [
                  102.61351,
                  14.25655
                ],
                [
                  102.62557,
                  14.26572
                ],
                [
                  102.64569,
                  14.27818
                ],
                [
                  102.65862,
                  14.28221
                ],
                [
                  102.67542,
                  14.29348
                ],
                [
                  102.68603,
                  14.29852
                ],
                [
                  102.69185,
                  14.29407
                ],
                [
                  102.69757,
                  14.29639
                ],
                [
                  102.70593,
                  14.29457
                ],
                [
                  102.70753,
                  14.29522
                ],
                [
                  102.71005,
                  14.30087
                ],
                [
                  102.71378,
                  14.30435
                ],
                [
                  102.72807,
                  14.29913
                ],
                [
                  102.73781,
                  14.30019
                ],
                [
                  102.73846,
                  14.29898
                ],
                [
                  102.73713,
                  14.29553
                ],
                [
                  102.73916,
                  14.2945
                ],
                [
                  102.74698,
                  14.29882
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
          "sum_rainfall_mm": 225.4,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "geocode": "310601",
          "tambon": "ต.ละหานทราย",
          "amphoe": "อ.ละหานทราย",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ละหานทราย",
          "latitude": 14.39567,
          "longitude": 102.84726,
          "sum_rainfall_mm": 179.39999999999998,
          "observed_at": "2026-09-24T04:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.86172,
                  14.45587
                ],
                [
                  102.86546,
                  14.45489
                ],
                [
                  102.86748,
                  14.45241
                ],
                [
                  102.86762,
                  14.45071
                ],
                [
                  102.86619,
                  14.45027
                ],
                [
                  102.86665,
                  14.4476
                ],
                [
                  102.88043,
                  14.44675
                ],
                [
                  102.89543,
                  14.44242
                ],
                [
                  102.89408,
                  14.43915
                ],
                [
                  102.89022,
                  14.43467
                ],
                [
                  102.89204,
                  14.42978
                ],
                [
                  102.89236,
                  14.42345
                ],
                [
                  102.89641,
                  14.42034
                ],
                [
                  102.89445,
                  14.4118
                ],
                [
                  102.89777,
                  14.40344
                ],
                [
                  102.89596,
                  14.39595
                ],
                [
                  102.89274,
                  14.39165
                ],
                [
                  102.89167,
                  14.38393
                ],
                [
                  102.86855,
                  14.38042
                ],
                [
                  102.8646,
                  14.38055
                ],
                [
                  102.85674,
                  14.38346
                ],
                [
                  102.85206,
                  14.38644
                ],
                [
                  102.85056,
                  14.38892
                ],
                [
                  102.85003,
                  14.39346
                ],
                [
                  102.84518,
                  14.39436
                ],
                [
                  102.83342,
                  14.40273
                ],
                [
                  102.82464,
                  14.40436
                ],
                [
                  102.82427,
                  14.40945
                ],
                [
                  102.81932,
                  14.40949
                ],
                [
                  102.81802,
                  14.41285
                ],
                [
                  102.81513,
                  14.41378
                ],
                [
                  102.81416,
                  14.41737
                ],
                [
                  102.81049,
                  14.4178
                ],
                [
                  102.81162,
                  14.43296
                ],
                [
                  102.81506,
                  14.43917
                ],
                [
                  102.81614,
                  14.44686
                ],
                [
                  102.82193,
                  14.44699
                ],
                [
                  102.83055,
                  14.44989
                ],
                [
                  102.83849,
                  14.43954
                ],
                [
                  102.84509,
                  14.43853
                ],
                [
                  102.84724,
                  14.43967
                ],
                [
                  102.85554,
                  14.45115
                ],
                [
                  102.85322,
                  14.45582
                ],
                [
                  102.85391,
                  14.45693
                ],
                [
                  102.85726,
                  14.45722
                ],
                [
                  102.86172,
                  14.45587
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
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
          "sum_rainfall_mm": 127.2,
          "observed_at": "2026-09-24T04:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.19923,
                  12.75176
                ],
                [
                  102.20197,
                  12.74227
                ],
                [
                  102.19972,
                  12.74009
                ],
                [
                  102.19938,
                  12.74102
                ],
                [
                  102.19546,
                  12.74061
                ],
                [
                  102.19402,
                  12.73665
                ],
                [
                  102.19056,
                  12.7351
                ],
                [
                  102.18943,
                  12.73239
                ],
                [
                  102.18607,
                  12.73304
                ],
                [
                  102.18618,
                  12.72853
                ],
                [
                  102.18274,
                  12.72819
                ],
                [
                  102.18428,
                  12.72588
                ],
                [
                  102.1831,
                  12.71696
                ],
                [
                  102.17747,
                  12.71534
                ],
                [
                  102.17554,
                  12.71667
                ],
                [
                  102.17404,
                  12.7155
                ],
                [
                  102.17124,
                  12.71603
                ],
                [
                  102.16925,
                  12.71828
                ],
                [
                  102.16175,
                  12.72189
                ],
                [
                  102.16129,
                  12.7243
                ],
                [
                  102.1596,
                  12.72502
                ],
                [
                  102.15876,
                  12.72698
                ],
                [
                  102.15196,
                  12.72952
                ],
                [
                  102.14284,
                  12.73609
                ],
                [
                  102.12737,
                  12.73974
                ],
                [
                  102.10891,
                  12.74244
                ],
                [
                  102.12015,
                  12.74863
                ],
                [
                  102.12217,
                  12.76789
                ],
                [
                  102.12891,
                  12.77839
                ],
                [
                  102.15561,
                  12.78314
                ],
                [
                  102.16049,
                  12.78688
                ],
                [
                  102.173,
                  12.80172
                ],
                [
                  102.18106,
                  12.80648
                ],
                [
                  102.18498,
                  12.81229
                ],
                [
                  102.18481,
                  12.81033
                ],
                [
                  102.19446,
                  12.80489
                ],
                [
                  102.19472,
                  12.80271
                ],
                [
                  102.1937,
                  12.80315
                ],
                [
                  102.19275,
                  12.80121
                ],
                [
                  102.19334,
                  12.79856
                ],
                [
                  102.1985,
                  12.79637
                ],
                [
                  102.19987,
                  12.78998
                ],
                [
                  102.2032,
                  12.78748
                ],
                [
                  102.2017,
                  12.78484
                ],
                [
                  102.20209,
                  12.78136
                ],
                [
                  102.19877,
                  12.77701
                ],
                [
                  102.19829,
                  12.774
                ],
                [
                  102.19505,
                  12.76803
                ],
                [
                  102.19923,
                  12.75176
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
          "sum_rainfall_mm": 179.5,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "sum_rainfall_mm": 257.5,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "geocode": "270505",
          "tambon": "ต.หนองน้ำใส",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านซับแม็ก",
          "latitude": 13.874664,
          "longitude": 102.42264,
          "sum_rainfall_mm": 302.0,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "geocode": "312003",
          "tambon": "ต.ลำนางรอง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ลำนางรอง",
          "latitude": 14.1899,
          "longitude": 102.68618,
          "sum_rainfall_mm": 246.20000000000005,
          "observed_at": "2026-09-24T04:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.74698,
                  14.29882
                ],
                [
                  102.74932,
                  14.29654
                ],
                [
                  102.75458,
                  14.29679
                ],
                [
                  102.75698,
                  14.2916
                ],
                [
                  102.75385,
                  14.28087
                ],
                [
                  102.75181,
                  14.27756
                ],
                [
                  102.75233,
                  14.27406
                ],
                [
                  102.7549,
                  14.27517
                ],
                [
                  102.75631,
                  14.27436
                ],
                [
                  102.75603,
                  14.27289
                ],
                [
                  102.75116,
                  14.27021
                ],
                [
                  102.74759,
                  14.26357
                ],
                [
                  102.75677,
                  14.25923
                ],
                [
                  102.76491,
                  14.26108
                ],
                [
                  102.76662,
                  14.26048
                ],
                [
                  102.765,
                  14.25306
                ],
                [
                  102.7513,
                  14.2518
                ],
                [
                  102.75015,
                  14.25111
                ],
                [
                  102.7529,
                  14.25193
                ],
                [
                  102.74987,
                  14.24782
                ],
                [
                  102.75051,
                  14.24653
                ],
                [
                  102.75602,
                  14.24161
                ],
                [
                  102.75875,
                  14.24148
                ],
                [
                  102.76189,
                  14.24325
                ],
                [
                  102.76901,
                  14.24156
                ],
                [
                  102.77139,
                  14.24604
                ],
                [
                  102.77738,
                  14.2513
                ],
                [
                  102.77653,
                  14.2483
                ],
                [
                  102.77811,
                  14.24612
                ],
                [
                  102.77752,
                  14.24432
                ],
                [
                  102.7789,
                  14.24304
                ],
                [
                  102.77843,
                  14.24044
                ],
                [
                  102.78,
                  14.23951
                ],
                [
                  102.77995,
                  14.23314
                ],
                [
                  102.78597,
                  14.22942
                ],
                [
                  102.78647,
                  14.22801
                ],
                [
                  102.7856,
                  14.22377
                ],
                [
                  102.78323,
                  14.22298
                ],
                [
                  102.78402,
                  14.22177
                ],
                [
                  102.78196,
                  14.21605
                ],
                [
                  102.78013,
                  14.21475
                ],
                [
                  102.77822,
                  14.20609
                ],
                [
                  102.77372,
                  14.20308
                ],
                [
                  102.76509,
                  14.19168
                ],
                [
                  102.76438,
                  14.18813
                ],
                [
                  102.76115,
                  14.18584
                ],
                [
                  102.76088,
                  14.1808
                ],
                [
                  102.76183,
                  14.17854
                ],
                [
                  102.75886,
                  14.174
                ],
                [
                  102.75799,
                  14.16795
                ],
                [
                  102.74838,
                  14.15427
                ],
                [
                  102.74769,
                  14.13973
                ],
                [
                  102.74283,
                  14.14125
                ],
                [
                  102.7345,
                  14.1415
                ],
                [
                  102.72719,
                  14.13875
                ],
                [
                  102.71737,
                  14.13739
                ],
                [
                  102.71055,
                  14.13377
                ],
                [
                  102.70474,
                  14.13212
                ],
                [
                  102.69574,
                  14.13057
                ],
                [
                  102.68868,
                  14.13434
                ],
                [
                  102.69071,
                  14.14291
                ],
                [
                  102.68249,
                  14.15128
                ],
                [
                  102.65867,
                  14.16255
                ],
                [
                  102.65535,
                  14.16562
                ],
                [
                  102.65157,
                  14.16452
                ],
                [
                  102.64563,
                  14.16068
                ],
                [
                  102.639,
                  14.15059
                ],
                [
                  102.63431,
                  14.14886
                ],
                [
                  102.6276,
                  14.15216
                ],
                [
                  102.61385,
                  14.1682
                ],
                [
                  102.60802,
                  14.17105
                ],
                [
                  102.59866,
                  14.16918
                ],
                [
                  102.59244,
                  14.16612
                ],
                [
                  102.58817,
                  14.15866
                ],
                [
                  102.58603,
                  14.15689
                ],
                [
                  102.56871,
                  14.14863
                ],
                [
                  102.55134,
                  14.13579
                ],
                [
                  102.54879,
                  14.13491
                ],
                [
                  102.53745,
                  14.13827
                ],
                [
                  102.53113,
                  14.13849
                ],
                [
                  102.52671,
                  14.14166
                ],
                [
                  102.52228,
                  14.14312
                ],
                [
                  102.51697,
                  14.14161
                ],
                [
                  102.50745,
                  14.13261
                ],
                [
                  102.50027,
                  14.13281
                ],
                [
                  102.49873,
                  14.13645
                ],
                [
                  102.49032,
                  14.13517
                ],
                [
                  102.48796,
                  14.13971
                ],
                [
                  102.48269,
                  14.14172
                ],
                [
                  102.47575,
                  14.13228
                ],
                [
                  102.47384,
                  14.13122
                ],
                [
                  102.45541,
                  14.13602
                ],
                [
                  102.45297,
                  14.14326
                ],
                [
                  102.44621,
                  14.142
                ],
                [
                  102.43765,
                  14.14315
                ],
                [
                  102.43311,
                  14.14643
                ],
                [
                  102.43134,
                  14.15234
                ],
                [
                  102.4337,
                  14.1544
                ],
                [
                  102.43711,
                  14.16054
                ],
                [
                  102.43964,
                  14.17241
                ],
                [
                  102.44784,
                  14.18486
                ],
                [
                  102.4495,
                  14.19028
                ],
                [
                  102.45342,
                  14.19389
                ],
                [
                  102.45828,
                  14.19421
                ],
                [
                  102.46877,
                  14.19229
                ],
                [
                  102.47356,
                  14.19915
                ],
                [
                  102.47707,
                  14.20036
                ],
                [
                  102.48158,
                  14.19675
                ],
                [
                  102.48642,
                  14.18939
                ],
                [
                  102.49604,
                  14.18629
                ],
                [
                  102.50065,
                  14.18635
                ],
                [
                  102.5045,
                  14.18931
                ],
                [
                  102.5075,
                  14.19544
                ],
                [
                  102.51198,
                  14.20108
                ],
                [
                  102.53858,
                  14.20212
                ],
                [
                  102.544,
                  14.20779
                ],
                [
                  102.54863,
                  14.21627
                ],
                [
                  102.55633,
                  14.21684
                ],
                [
                  102.57366,
                  14.22422
                ],
                [
                  102.58954,
                  14.23678
                ],
                [
                  102.5954,
                  14.23893
                ],
                [
                  102.60256,
                  14.24417
                ],
                [
                  102.61351,
                  14.25655
                ],
                [
                  102.62557,
                  14.26572
                ],
                [
                  102.64569,
                  14.27818
                ],
                [
                  102.65862,
                  14.28221
                ],
                [
                  102.67542,
                  14.29348
                ],
                [
                  102.68603,
                  14.29852
                ],
                [
                  102.69185,
                  14.29407
                ],
                [
                  102.69757,
                  14.29639
                ],
                [
                  102.70593,
                  14.29457
                ],
                [
                  102.70753,
                  14.29522
                ],
                [
                  102.71005,
                  14.30087
                ],
                [
                  102.71378,
                  14.30435
                ],
                [
                  102.72807,
                  14.29913
                ],
                [
                  102.73781,
                  14.30019
                ],
                [
                  102.73846,
                  14.29898
                ],
                [
                  102.73713,
                  14.29553
                ],
                [
                  102.73916,
                  14.2945
                ],
                [
                  102.74698,
                  14.29882
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
          "sum_rainfall_mm": 225.4,
          "observed_at": "2026-09-24T04:00:00+07:00",
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
          "geocode": "310601",
          "tambon": "ต.ละหานทราย",
          "amphoe": "อ.ละหานทราย",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ละหานทราย",
          "latitude": 14.39567,
          "longitude": 102.84726,
          "sum_rainfall_mm": 179.39999999999998,
          "observed_at": "2026-09-24T04:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.86172,
                  14.45587
                ],
                [
                  102.86546,
                  14.45489
                ],
                [
                  102.86748,
                  14.45241
                ],
                [
                  102.86762,
                  14.45071
                ],
                [
                  102.86619,
                  14.45027
                ],
                [
                  102.86665,
                  14.4476
                ],
                [
                  102.88043,
                  14.44675
                ],
                [
                  102.89543,
                  14.44242
                ],
                [
                  102.89408,
                  14.43915
                ],
                [
                  102.89022,
                  14.43467
                ],
                [
                  102.89204,
                  14.42978
                ],
                [
                  102.89236,
                  14.42345
                ],
                [
                  102.89641,
                  14.42034
                ],
                [
                  102.89445,
                  14.4118
                ],
                [
                  102.89777,
                  14.40344
                ],
                [
                  102.89596,
                  14.39595
                ],
                [
                  102.89274,
                  14.39165
                ],
                [
                  102.89167,
                  14.38393
                ],
                [
                  102.86855,
                  14.38042
                ],
                [
                  102.8646,
                  14.38055
                ],
                [
                  102.85674,
                  14.38346
                ],
                [
                  102.85206,
                  14.38644
                ],
                [
                  102.85056,
                  14.38892
                ],
                [
                  102.85003,
                  14.39346
                ],
                [
                  102.84518,
                  14.39436
                ],
                [
                  102.83342,
                  14.40273
                ],
                [
                  102.82464,
                  14.40436
                ],
                [
                  102.82427,
                  14.40945
                ],
                [
                  102.81932,
                  14.40949
                ],
                [
                  102.81802,
                  14.41285
                ],
                [
                  102.81513,
                  14.41378
                ],
                [
                  102.81416,
                  14.41737
                ],
                [
                  102.81049,
                  14.4178
                ],
                [
                  102.81162,
                  14.43296
                ],
                [
                  102.81506,
                  14.43917
                ],
                [
                  102.81614,
                  14.44686
                ],
                [
                  102.82193,
                  14.44699
                ],
                [
                  102.83055,
                  14.44989
                ],
                [
                  102.83849,
                  14.43954
                ],
                [
                  102.84509,
                  14.43853
                ],
                [
                  102.84724,
                  14.43967
                ],
                [
                  102.85554,
                  14.45115
                ],
                [
                  102.85322,
                  14.45582
                ],
                [
                  102.85391,
                  14.45693
                ],
                [
                  102.85726,
                  14.45722
                ],
                [
                  102.86172,
                  14.45587
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_24_09_2026.png?1790240826",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-24",
      "time": "16:00:00",
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
          "sum_rainfall_mm": 105.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "geocode": "230404",
          "tambon": "ต.หนองบอน",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "ทต.หนองบอน",
          "latitude": 12.67735,
          "longitude": 102.45936,
          "sum_rainfall_mm": 154.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "geocode": "312003",
          "tambon": "ต.ลำนางรอง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ลำนางรอง",
          "latitude": 14.1899,
          "longitude": 102.68618,
          "sum_rainfall_mm": 144.4,
          "observed_at": "2026-09-24T15:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.74698,
                  14.29882
                ],
                [
                  102.74932,
                  14.29654
                ],
                [
                  102.75458,
                  14.29679
                ],
                [
                  102.75698,
                  14.2916
                ],
                [
                  102.75385,
                  14.28087
                ],
                [
                  102.75181,
                  14.27756
                ],
                [
                  102.75233,
                  14.27406
                ],
                [
                  102.7549,
                  14.27517
                ],
                [
                  102.75631,
                  14.27436
                ],
                [
                  102.75603,
                  14.27289
                ],
                [
                  102.75116,
                  14.27021
                ],
                [
                  102.74759,
                  14.26357
                ],
                [
                  102.75677,
                  14.25923
                ],
                [
                  102.76491,
                  14.26108
                ],
                [
                  102.76662,
                  14.26048
                ],
                [
                  102.765,
                  14.25306
                ],
                [
                  102.7513,
                  14.2518
                ],
                [
                  102.75015,
                  14.25111
                ],
                [
                  102.7529,
                  14.25193
                ],
                [
                  102.74987,
                  14.24782
                ],
                [
                  102.75051,
                  14.24653
                ],
                [
                  102.75602,
                  14.24161
                ],
                [
                  102.75875,
                  14.24148
                ],
                [
                  102.76189,
                  14.24325
                ],
                [
                  102.76901,
                  14.24156
                ],
                [
                  102.77139,
                  14.24604
                ],
                [
                  102.77738,
                  14.2513
                ],
                [
                  102.77653,
                  14.2483
                ],
                [
                  102.77811,
                  14.24612
                ],
                [
                  102.77752,
                  14.24432
                ],
                [
                  102.7789,
                  14.24304
                ],
                [
                  102.77843,
                  14.24044
                ],
                [
                  102.78,
                  14.23951
                ],
                [
                  102.77995,
                  14.23314
                ],
                [
                  102.78597,
                  14.22942
                ],
                [
                  102.78647,
                  14.22801
                ],
                [
                  102.7856,
                  14.22377
                ],
                [
                  102.78323,
                  14.22298
                ],
                [
                  102.78402,
                  14.22177
                ],
                [
                  102.78196,
                  14.21605
                ],
                [
                  102.78013,
                  14.21475
                ],
                [
                  102.77822,
                  14.20609
                ],
                [
                  102.77372,
                  14.20308
                ],
                [
                  102.76509,
                  14.19168
                ],
                [
                  102.76438,
                  14.18813
                ],
                [
                  102.76115,
                  14.18584
                ],
                [
                  102.76088,
                  14.1808
                ],
                [
                  102.76183,
                  14.17854
                ],
                [
                  102.75886,
                  14.174
                ],
                [
                  102.75799,
                  14.16795
                ],
                [
                  102.74838,
                  14.15427
                ],
                [
                  102.74769,
                  14.13973
                ],
                [
                  102.74283,
                  14.14125
                ],
                [
                  102.7345,
                  14.1415
                ],
                [
                  102.72719,
                  14.13875
                ],
                [
                  102.71737,
                  14.13739
                ],
                [
                  102.71055,
                  14.13377
                ],
                [
                  102.70474,
                  14.13212
                ],
                [
                  102.69574,
                  14.13057
                ],
                [
                  102.68868,
                  14.13434
                ],
                [
                  102.69071,
                  14.14291
                ],
                [
                  102.68249,
                  14.15128
                ],
                [
                  102.65867,
                  14.16255
                ],
                [
                  102.65535,
                  14.16562
                ],
                [
                  102.65157,
                  14.16452
                ],
                [
                  102.64563,
                  14.16068
                ],
                [
                  102.639,
                  14.15059
                ],
                [
                  102.63431,
                  14.14886
                ],
                [
                  102.6276,
                  14.15216
                ],
                [
                  102.61385,
                  14.1682
                ],
                [
                  102.60802,
                  14.17105
                ],
                [
                  102.59866,
                  14.16918
                ],
                [
                  102.59244,
                  14.16612
                ],
                [
                  102.58817,
                  14.15866
                ],
                [
                  102.58603,
                  14.15689
                ],
                [
                  102.56871,
                  14.14863
                ],
                [
                  102.55134,
                  14.13579
                ],
                [
                  102.54879,
                  14.13491
                ],
                [
                  102.53745,
                  14.13827
                ],
                [
                  102.53113,
                  14.13849
                ],
                [
                  102.52671,
                  14.14166
                ],
                [
                  102.52228,
                  14.14312
                ],
                [
                  102.51697,
                  14.14161
                ],
                [
                  102.50745,
                  14.13261
                ],
                [
                  102.50027,
                  14.13281
                ],
                [
                  102.49873,
                  14.13645
                ],
                [
                  102.49032,
                  14.13517
                ],
                [
                  102.48796,
                  14.13971
                ],
                [
                  102.48269,
                  14.14172
                ],
                [
                  102.47575,
                  14.13228
                ],
                [
                  102.47384,
                  14.13122
                ],
                [
                  102.45541,
                  14.13602
                ],
                [
                  102.45297,
                  14.14326
                ],
                [
                  102.44621,
                  14.142
                ],
                [
                  102.43765,
                  14.14315
                ],
                [
                  102.43311,
                  14.14643
                ],
                [
                  102.43134,
                  14.15234
                ],
                [
                  102.4337,
                  14.1544
                ],
                [
                  102.43711,
                  14.16054
                ],
                [
                  102.43964,
                  14.17241
                ],
                [
                  102.44784,
                  14.18486
                ],
                [
                  102.4495,
                  14.19028
                ],
                [
                  102.45342,
                  14.19389
                ],
                [
                  102.45828,
                  14.19421
                ],
                [
                  102.46877,
                  14.19229
                ],
                [
                  102.47356,
                  14.19915
                ],
                [
                  102.47707,
                  14.20036
                ],
                [
                  102.48158,
                  14.19675
                ],
                [
                  102.48642,
                  14.18939
                ],
                [
                  102.49604,
                  14.18629
                ],
                [
                  102.50065,
                  14.18635
                ],
                [
                  102.5045,
                  14.18931
                ],
                [
                  102.5075,
                  14.19544
                ],
                [
                  102.51198,
                  14.20108
                ],
                [
                  102.53858,
                  14.20212
                ],
                [
                  102.544,
                  14.20779
                ],
                [
                  102.54863,
                  14.21627
                ],
                [
                  102.55633,
                  14.21684
                ],
                [
                  102.57366,
                  14.22422
                ],
                [
                  102.58954,
                  14.23678
                ],
                [
                  102.5954,
                  14.23893
                ],
                [
                  102.60256,
                  14.24417
                ],
                [
                  102.61351,
                  14.25655
                ],
                [
                  102.62557,
                  14.26572
                ],
                [
                  102.64569,
                  14.27818
                ],
                [
                  102.65862,
                  14.28221
                ],
                [
                  102.67542,
                  14.29348
                ],
                [
                  102.68603,
                  14.29852
                ],
                [
                  102.69185,
                  14.29407
                ],
                [
                  102.69757,
                  14.29639
                ],
                [
                  102.70593,
                  14.29457
                ],
                [
                  102.70753,
                  14.29522
                ],
                [
                  102.71005,
                  14.30087
                ],
                [
                  102.71378,
                  14.30435
                ],
                [
                  102.72807,
                  14.29913
                ],
                [
                  102.73781,
                  14.30019
                ],
                [
                  102.73846,
                  14.29898
                ],
                [
                  102.73713,
                  14.29553
                ],
                [
                  102.73916,
                  14.2945
                ],
                [
                  102.74698,
                  14.29882
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
          "sum_rainfall_mm": 194.8,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเตย",
          "latitude": 13.70628,
          "longitude": 100.58752,
          "sum_rainfall_mm": 126.5,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "sum_rainfall_mm": 103.0,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "sum_rainfall_mm": 100.5,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 105.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 58.400000000000006,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 26.200000000000003,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "geocode": "230403",
          "tambon": "ต.ด่านชุมพล",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ คก. ๓ (เขาพลู)",
          "latitude": 12.4193,
          "longitude": 102.744,
          "sum_rainfall_mm": 39.0,
          "observed_at": "2026-09-24T14:00:00+07:00",
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
          "geocode": "230405",
          "tambon": "ต.นนทรีย์",
          "amphoe": "อ.บ่อไร่",
          "province": "จ.ตราด",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านมะม่วง",
          "latitude": 12.549057,
          "longitude": 102.57967,
          "sum_rainfall_mm": 35.5,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 34.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 49.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 44.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 26.6,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 105.5,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 78.8,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 154.0,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "geocode": "312003",
          "tambon": "ต.ลำนางรอง",
          "amphoe": "อ.โนนดินแดง",
          "province": "จ.บุรีรัมย์",
          "region_id": "3",
          "region_name": "ภาคตะวันออกเฉียงเหนือ",
          "station": "อบต.ลำนางรอง",
          "latitude": 14.1899,
          "longitude": 102.68618,
          "sum_rainfall_mm": 144.4,
          "observed_at": "2026-09-24T15:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.74698,
                  14.29882
                ],
                [
                  102.74932,
                  14.29654
                ],
                [
                  102.75458,
                  14.29679
                ],
                [
                  102.75698,
                  14.2916
                ],
                [
                  102.75385,
                  14.28087
                ],
                [
                  102.75181,
                  14.27756
                ],
                [
                  102.75233,
                  14.27406
                ],
                [
                  102.7549,
                  14.27517
                ],
                [
                  102.75631,
                  14.27436
                ],
                [
                  102.75603,
                  14.27289
                ],
                [
                  102.75116,
                  14.27021
                ],
                [
                  102.74759,
                  14.26357
                ],
                [
                  102.75677,
                  14.25923
                ],
                [
                  102.76491,
                  14.26108
                ],
                [
                  102.76662,
                  14.26048
                ],
                [
                  102.765,
                  14.25306
                ],
                [
                  102.7513,
                  14.2518
                ],
                [
                  102.75015,
                  14.25111
                ],
                [
                  102.7529,
                  14.25193
                ],
                [
                  102.74987,
                  14.24782
                ],
                [
                  102.75051,
                  14.24653
                ],
                [
                  102.75602,
                  14.24161
                ],
                [
                  102.75875,
                  14.24148
                ],
                [
                  102.76189,
                  14.24325
                ],
                [
                  102.76901,
                  14.24156
                ],
                [
                  102.77139,
                  14.24604
                ],
                [
                  102.77738,
                  14.2513
                ],
                [
                  102.77653,
                  14.2483
                ],
                [
                  102.77811,
                  14.24612
                ],
                [
                  102.77752,
                  14.24432
                ],
                [
                  102.7789,
                  14.24304
                ],
                [
                  102.77843,
                  14.24044
                ],
                [
                  102.78,
                  14.23951
                ],
                [
                  102.77995,
                  14.23314
                ],
                [
                  102.78597,
                  14.22942
                ],
                [
                  102.78647,
                  14.22801
                ],
                [
                  102.7856,
                  14.22377
                ],
                [
                  102.78323,
                  14.22298
                ],
                [
                  102.78402,
                  14.22177
                ],
                [
                  102.78196,
                  14.21605
                ],
                [
                  102.78013,
                  14.21475
                ],
                [
                  102.77822,
                  14.20609
                ],
                [
                  102.77372,
                  14.20308
                ],
                [
                  102.76509,
                  14.19168
                ],
                [
                  102.76438,
                  14.18813
                ],
                [
                  102.76115,
                  14.18584
                ],
                [
                  102.76088,
                  14.1808
                ],
                [
                  102.76183,
                  14.17854
                ],
                [
                  102.75886,
                  14.174
                ],
                [
                  102.75799,
                  14.16795
                ],
                [
                  102.74838,
                  14.15427
                ],
                [
                  102.74769,
                  14.13973
                ],
                [
                  102.74283,
                  14.14125
                ],
                [
                  102.7345,
                  14.1415
                ],
                [
                  102.72719,
                  14.13875
                ],
                [
                  102.71737,
                  14.13739
                ],
                [
                  102.71055,
                  14.13377
                ],
                [
                  102.70474,
                  14.13212
                ],
                [
                  102.69574,
                  14.13057
                ],
                [
                  102.68868,
                  14.13434
                ],
                [
                  102.69071,
                  14.14291
                ],
                [
                  102.68249,
                  14.15128
                ],
                [
                  102.65867,
                  14.16255
                ],
                [
                  102.65535,
                  14.16562
                ],
                [
                  102.65157,
                  14.16452
                ],
                [
                  102.64563,
                  14.16068
                ],
                [
                  102.639,
                  14.15059
                ],
                [
                  102.63431,
                  14.14886
                ],
                [
                  102.6276,
                  14.15216
                ],
                [
                  102.61385,
                  14.1682
                ],
                [
                  102.60802,
                  14.17105
                ],
                [
                  102.59866,
                  14.16918
                ],
                [
                  102.59244,
                  14.16612
                ],
                [
                  102.58817,
                  14.15866
                ],
                [
                  102.58603,
                  14.15689
                ],
                [
                  102.56871,
                  14.14863
                ],
                [
                  102.55134,
                  14.13579
                ],
                [
                  102.54879,
                  14.13491
                ],
                [
                  102.53745,
                  14.13827
                ],
                [
                  102.53113,
                  14.13849
                ],
                [
                  102.52671,
                  14.14166
                ],
                [
                  102.52228,
                  14.14312
                ],
                [
                  102.51697,
                  14.14161
                ],
                [
                  102.50745,
                  14.13261
                ],
                [
                  102.50027,
                  14.13281
                ],
                [
                  102.49873,
                  14.13645
                ],
                [
                  102.49032,
                  14.13517
                ],
                [
                  102.48796,
                  14.13971
                ],
                [
                  102.48269,
                  14.14172
                ],
                [
                  102.47575,
                  14.13228
                ],
                [
                  102.47384,
                  14.13122
                ],
                [
                  102.45541,
                  14.13602
                ],
                [
                  102.45297,
                  14.14326
                ],
                [
                  102.44621,
                  14.142
                ],
                [
                  102.43765,
                  14.14315
                ],
                [
                  102.43311,
                  14.14643
                ],
                [
                  102.43134,
                  14.15234
                ],
                [
                  102.4337,
                  14.1544
                ],
                [
                  102.43711,
                  14.16054
                ],
                [
                  102.43964,
                  14.17241
                ],
                [
                  102.44784,
                  14.18486
                ],
                [
                  102.4495,
                  14.19028
                ],
                [
                  102.45342,
                  14.19389
                ],
                [
                  102.45828,
                  14.19421
                ],
                [
                  102.46877,
                  14.19229
                ],
                [
                  102.47356,
                  14.19915
                ],
                [
                  102.47707,
                  14.20036
                ],
                [
                  102.48158,
                  14.19675
                ],
                [
                  102.48642,
                  14.18939
                ],
                [
                  102.49604,
                  14.18629
                ],
                [
                  102.50065,
                  14.18635
                ],
                [
                  102.5045,
                  14.18931
                ],
                [
                  102.5075,
                  14.19544
                ],
                [
                  102.51198,
                  14.20108
                ],
                [
                  102.53858,
                  14.20212
                ],
                [
                  102.544,
                  14.20779
                ],
                [
                  102.54863,
                  14.21627
                ],
                [
                  102.55633,
                  14.21684
                ],
                [
                  102.57366,
                  14.22422
                ],
                [
                  102.58954,
                  14.23678
                ],
                [
                  102.5954,
                  14.23893
                ],
                [
                  102.60256,
                  14.24417
                ],
                [
                  102.61351,
                  14.25655
                ],
                [
                  102.62557,
                  14.26572
                ],
                [
                  102.64569,
                  14.27818
                ],
                [
                  102.65862,
                  14.28221
                ],
                [
                  102.67542,
                  14.29348
                ],
                [
                  102.68603,
                  14.29852
                ],
                [
                  102.69185,
                  14.29407
                ],
                [
                  102.69757,
                  14.29639
                ],
                [
                  102.70593,
                  14.29457
                ],
                [
                  102.70753,
                  14.29522
                ],
                [
                  102.71005,
                  14.30087
                ],
                [
                  102.71378,
                  14.30435
                ],
                [
                  102.72807,
                  14.29913
                ],
                [
                  102.73781,
                  14.30019
                ],
                [
                  102.73846,
                  14.29898
                ],
                [
                  102.73713,
                  14.29553
                ],
                [
                  102.73916,
                  14.2945
                ],
                [
                  102.74698,
                  14.29882
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
          "sum_rainfall_mm": 194.8,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "geocode": "103302",
          "tambon": "ต.คลองตัน",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดสวนเบญจสิริ",
          "latitude": 13.73159,
          "longitude": 100.56745,
          "sum_rainfall_mm": 46.5,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "sum_rainfall_mm": 126.5,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "sum_rainfall_mm": 103.0,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "sum_rainfall_mm": 1.5,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "sum_rainfall_mm": 100.5,
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00"
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
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 68.60000000000001,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 2.8,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 53.60000000000001,
          "observed_at": "2026-09-24T11:00:00+07:00",
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
          "observed_at": "2026-09-24T15:00:00+07:00",
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
          "sum_rainfall_mm": 46.00000000000001,
          "observed_at": "2026-09-24T15:00:00+07:00",
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
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_24_09_2026.png?1790240826",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
