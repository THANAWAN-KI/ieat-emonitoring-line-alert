window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-22T21:56:14+07:00",
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
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 21,
      "rain_alert_count": 11,
      "water_alert_count": 10,
      "max_rainfall_mm": 161.0,
      "nearest_alert_km": 10.4,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.54202903,
      "lon": 100.1988542,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 5,
      "rain_alert_count": 1,
      "water_alert_count": 4,
      "max_rainfall_mm": 53.8,
      "nearest_alert_km": 2.4,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 26,
      "name": "นิคมอุตสาหกรรมแพรกษา",
      "lat": 13.56903519,
      "lon": 100.6528202,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 2,
      "rain_alert_count": 1,
      "water_alert_count": 1,
      "max_rainfall_mm": 37.5,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-22 21:00"
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
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.5753627,
      "lon": 100.1489452,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.6,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 9,
      "water_alert_count": 1,
      "max_rainfall_mm": 81.0,
      "nearest_alert_km": 6.7,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 13,
      "rain_alert_count": 8,
      "water_alert_count": 5,
      "max_rainfall_mm": 73.0,
      "nearest_alert_km": 6.0,
      "latest_observed_at": "2026-09-22 21:40"
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
      "max_rainfall_mm": 66.8,
      "nearest_alert_km": 7.7,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 43,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "lat": 13.7973442,
      "lon": 100.5592795,
      "operations": "สำนักงานใหญ่",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 8,
      "rain_alert_count": 4,
      "water_alert_count": 4,
      "max_rainfall_mm": 63.5,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 1,
      "name": "นิคมอุตสาหกรรมหนองแค",
      "lat": 14.3863882,
      "lon": 100.9035767,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 1,
      "water_alert_count": 1,
      "max_rainfall_mm": 49.6,
      "nearest_alert_km": 18.5,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.0082598,
      "lon": 100.3598057,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 11,
      "rain_alert_count": 3,
      "water_alert_count": 8,
      "max_rainfall_mm": 40.0,
      "nearest_alert_km": 3.8,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.7582559,
      "lon": 100.7893183,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 2.0,
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309,
      "lon": 100.610012,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 0,
      "water_alert_count": 5,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 9,
      "name": "นิคมอุตสาหกรรมสินสาคร",
      "lat": 13.54653659,
      "lon": 100.3436175,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.6,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 18,
      "name": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
      "lat": 13.6599038,
      "lon": 100.9114833,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 20.7,
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 22.6,
      "latest_observed_at": "2026-09-22 21:40"
    },
    {
      "id": 15,
      "name": "นิคมอุตสาหกรรมสงขลา",
      "lat": 6.54184983,
      "lon": 100.4136034,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 3,
      "rain_alert_count": 2,
      "water_alert_count": 1,
      "max_rainfall_mm": 54.5,
      "nearest_alert_km": 10.6,
      "latest_observed_at": "2026-09-22 21:00"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102,
      "lon": 100.707712,
      "operations": "สายปฎิบัติการ1",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 42.0,
      "nearest_alert_km": 13.0,
      "latest_observed_at": "2026-09-22 21:00"
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
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:00"
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
      "latest_observed_at": "2026-09-22 21:40"
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
      "latest_observed_at": "2026-09-22 21:40"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "รพสต.บ้านโคกอุดม",
      "station_code": "MKKB",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.06948,
      "lon": 101.80991,
      "rainfall_mm": 161.0,
      "value_text": "161 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 24.8,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 156.0,
      "value_text": "156 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 33.8,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 131.0,
      "value_text": "131 มม.",
      "observed_at": "2026-09-22 19:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 35.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "อต."
    },
    {
      "kind": "rainfall",
      "station": "เขตอุตสาหกรรมกบินทร์บุรี",
      "station_code": "KIZ001",
      "province": "ปราจีนบุรี",
      "district": "กบินทร์บุรี",
      "lat": 14.072372,
      "lon": 101.837494,
      "rainfall_mm": 124.2,
      "value_text": "124.2 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 27.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 102.4,
      "value_text": "102.4 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 42.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 100.6,
      "value_text": "100.6 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 40.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.26,
      "storage_percent": 114.0,
      "value_text": "1.26 ม.รทก.",
      "observed_at": "2026-09-22 20:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 13.8,
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
      "waterlevel_msl": 3.6,
      "storage_percent": 109.11,
      "value_text": "3.6 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
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
      "waterlevel_msl": 9.38,
      "storage_percent": 105.96,
      "value_text": "9.38 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 10.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 21.44,
      "storage_percent": 105.18,
      "value_text": "21.44 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 38.98,
      "storage_percent": 101.98,
      "value_text": "38.98 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 21.8,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "ที่ว่าการอ.นครชัยศรี",
      "station_code": "T.1",
      "province": "นครปฐม",
      "district": "นครชัยศรี",
      "lat": 13.80096,
      "lon": 100.188026,
      "waterlevel_msl": 1.69,
      "storage_percent": 101.79,
      "value_text": "1.69 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 28.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 1.9,
      "storage_percent": 101.33,
      "value_text": "1.9 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 47.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม",
      "station_code": "ridtele_TKgt51",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.069966,
      "lon": 101.518579,
      "rainfall_mm": 85.5,
      "value_text": "85.5 มม.",
      "observed_at": "2026-09-22 20:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ประจันตคาม (KGT7A)",
      "station_code": "PRC004",
      "province": "ปราจีนบุรี",
      "district": "ประจันตคาม",
      "lat": 14.070941,
      "lon": 101.51893,
      "rainfall_mm": 82.0,
      "value_text": "82 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "rainfall_mm": 81.0,
      "value_text": "81 มม.",
      "observed_at": "2026-09-22 20:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 22.0,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 79.6,
      "value_text": "79.6 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.9,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "rainfall_mm": 74.6,
      "value_text": "74.6 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 21.1,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "ส.คลองเตย",
      "station_code": "RF.KTY.04",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70628,
      "lon": 100.58752,
      "rainfall_mm": 73.0,
      "value_text": "73 มม.",
      "observed_at": "2026-09-22 21:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "บ้านแผ่นดินเย็น",
      "station_code": "STN1591",
      "province": "สระแก้ว",
      "district": "วัฒนานคร",
      "lat": 13.960406,
      "lon": 102.505896,
      "rainfall_mm": 71.0,
      "value_text": "71 มม.",
      "observed_at": "2026-09-22 20:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 26.8,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "บางน้ำเปรี้ยว",
      "station_code": "BPK003",
      "province": "ฉะเชิงเทรา",
      "district": "บางน้ำเปรี้ยว",
      "lat": 13.87032,
      "lon": 101.14574,
      "waterlevel_msl": 1.41,
      "storage_percent": 99.54,
      "value_text": "1.41 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 40.49,
      "storage_percent": 99.46,
      "value_text": "40.49 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 32.9,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 4.22,
      "storage_percent": 99.22,
      "value_text": "4.22 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 4.24,
      "storage_percent": 99.14,
      "value_text": "4.24 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.41,
      "storage_percent": 99.12,
      "value_text": "1.41 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.1,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "องครักษ์",
      "station_code": "NYK000",
      "province": "นครนายก",
      "district": "องครักษ์",
      "lat": 14.113633,
      "lon": 101.01952,
      "waterlevel_msl": 2.48,
      "storage_percent": 98.31,
      "value_text": "2.48 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 32.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 1.84,
      "storage_percent": 97.5,
      "value_text": "1.84 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 5.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 38.7,
      "storage_percent": 97.16,
      "value_text": "38.7 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
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
      "waterlevel_msl": 1.91,
      "storage_percent": 96.91,
      "value_text": "1.91 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 47.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 348.26,
      "storage_percent": 96.7,
      "value_text": "348.26 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "บางระกำ",
      "station_code": "Y.64",
      "province": "พิษณุโลก",
      "district": "บางระกำ",
      "lat": 16.762119,
      "lon": 100.121201,
      "waterlevel_msl": 38.58,
      "storage_percent": 95.94,
      "value_text": "38.58 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 1.54,
      "storage_percent": 95.87,
      "value_text": "1.54 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 27.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 6.03,
      "storage_percent": 95.74,
      "value_text": "6.03 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.13,
      "storage_percent": 95.13,
      "value_text": "1.13 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 1.63,
      "storage_percent": 94.5,
      "value_text": "1.63 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.9,
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
      "waterlevel_msl": 34.35,
      "storage_percent": 93.83,
      "value_text": "34.35 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.7,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 5.41,
      "storage_percent": 93.82,
      "value_text": "5.41 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 14.3,
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
      "waterlevel_msl": 6.95,
      "storage_percent": 93.78,
      "value_text": "6.95 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.73,
      "storage_percent": 93.35,
      "value_text": "1.73 ม.รทก.",
      "observed_at": "2026-09-22 21:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 11.44,
      "storage_percent": 92.78,
      "value_text": "11.44 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.6,
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
      "waterlevel_msl": 0.85,
      "storage_percent": 92.66,
      "value_text": "0.85 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 34.92,
      "storage_percent": 92.54,
      "value_text": "34.92 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 2.31,
      "storage_percent": 92.46,
      "value_text": "2.31 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.1,
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
      "waterlevel_msl": 0.38,
      "storage_percent": 91.86,
      "value_text": "0.38 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.1,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 3.29,
      "storage_percent": 91.78,
      "value_text": "3.29 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.8,
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
      "waterlevel_msl": 1.68,
      "storage_percent": 91.61,
      "value_text": "1.68 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.0,
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
      "waterlevel_msl": 3.1,
      "storage_percent": 90.81,
      "value_text": "3.1 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.38,
      "storage_percent": 90.36,
      "value_text": "0.38 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "waterlevel_msl": 0.62,
      "storage_percent": 90.14,
      "value_text": "0.62 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.2,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 18.68,
      "storage_percent": 90.08,
      "value_text": "18.68 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 10.11,
      "storage_percent": 90.01,
      "value_text": "10.11 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 10.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 2.08,
      "storage_percent": 89.85,
      "value_text": "2.08 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 43.9,
      "storage_percent": 88.99,
      "value_text": "43.9 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 3.23,
      "storage_percent": 88.52,
      "value_text": "3.23 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 0.21,
      "storage_percent": 88.3,
      "value_text": "0.21 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.5,
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
      "waterlevel_msl": 5.61,
      "storage_percent": 87.55,
      "value_text": "5.61 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.2,
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
      "waterlevel_msl": 32.56,
      "storage_percent": 87.16,
      "value_text": "32.56 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.2,
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
      "waterlevel_msl": 9.7,
      "storage_percent": 85.12,
      "value_text": "9.7 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 0.93,
      "storage_percent": 85.1,
      "value_text": "0.93 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 33.78,
      "storage_percent": 85.08,
      "value_text": "33.78 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.2,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 0.04,
      "storage_percent": 85.0,
      "value_text": "0.04 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.9,
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
      "waterlevel_msl": 3.31,
      "storage_percent": 84.78,
      "value_text": "3.31 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
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
      "waterlevel_msl": 0.56,
      "storage_percent": 84.58,
      "value_text": "0.56 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 25.73,
      "storage_percent": 84.17,
      "value_text": "25.73 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 3.23,
      "storage_percent": 83.9,
      "value_text": "3.23 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.5,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": -0.01,
      "storage_percent": 83.29,
      "value_text": "-0.01 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 14.3,
      "storage_percent": 83.03,
      "value_text": "14.3 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "ปตร. คลองลัดบางยอ 1",
      "station_code": "BKC003",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.676162,
      "lon": 100.553085,
      "waterlevel_msl": 1.09,
      "storage_percent": 82.52,
      "value_text": "1.09 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 8.1,
      "storage_percent": 82.3,
      "value_text": "8.1 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.6,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 8.41,
      "storage_percent": 82.28,
      "value_text": "8.41 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
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
      "waterlevel_msl": 0.56,
      "storage_percent": 81.36,
      "value_text": "0.56 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.6,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 2.13,
      "storage_percent": 80.66,
      "value_text": "2.13 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.9,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 5.55,
      "storage_percent": 80.66,
      "value_text": "5.55 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.3,
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
      "waterlevel_msl": 3.99,
      "storage_percent": 80.13,
      "value_text": "3.99 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 2.92,
      "storage_percent": 79.72,
      "value_text": "2.92 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "วังทอง",
      "station_code": "NAN013",
      "province": "พิษณุโลก",
      "district": "วังทอง",
      "lat": 16.8222,
      "lon": 100.43159,
      "waterlevel_msl": 47.02,
      "storage_percent": 79.59,
      "value_text": "47.02 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.7,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 2.67,
      "storage_percent": 79.53,
      "value_text": "2.67 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.4,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านแพ้ว",
      "station_code": "MKG005",
      "province": "สมุทรสาคร",
      "district": "บ้านแพ้ว",
      "lat": 13.57563,
      "lon": 100.07884,
      "waterlevel_msl": 0.28,
      "storage_percent": 79.02,
      "value_text": "0.28 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
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
      "waterlevel_msl": 6.28,
      "storage_percent": 78.5,
      "value_text": "6.28 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.7,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 42.68,
      "storage_percent": 78.06,
      "value_text": "42.68 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 42.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 47.29,
      "storage_percent": 77.91,
      "value_text": "47.29 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 45.4,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 6.01,
      "storage_percent": 77.81,
      "value_text": "6.01 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 0.22,
      "storage_percent": 77.21,
      "value_text": "0.22 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.7,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 1.76,
      "storage_percent": 77.0,
      "value_text": "1.76 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.7,
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
      "waterlevel_msl": 7.62,
      "storage_percent": 76.54,
      "value_text": "7.62 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.9,
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
      "waterlevel_msl": 25.2,
      "storage_percent": 76.45,
      "value_text": "25.2 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 0.66,
      "storage_percent": 76.28,
      "value_text": "0.66 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.3,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 14.39,
      "storage_percent": 76.25,
      "value_text": "14.39 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 43.9,
      "nearest_estate": "นิคมอุตสาหกรรมสงขลา",
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
      "waterlevel_msl": 5.89,
      "storage_percent": 75.89,
      "value_text": "5.89 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.0,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 21.6,
      "storage_percent": 75.49,
      "value_text": "21.6 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 5.54,
      "storage_percent": 75.46,
      "value_text": "5.54 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 41.96,
      "storage_percent": 74.66,
      "value_text": "41.96 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
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
      "waterlevel_msl": 3.89,
      "storage_percent": 74.37,
      "value_text": "3.89 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.9,
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
      "waterlevel_msl": 0.29,
      "storage_percent": 74.09,
      "value_text": "0.29 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.7,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 295.81,
      "storage_percent": 73.63,
      "value_text": "295.81 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.5,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพระยาบรรลือ",
      "station_code": "CPY016",
      "province": "พระนครศรีอยุธยา",
      "district": "ลาดบัวหลวง",
      "lat": 14.16476,
      "lon": 100.30725,
      "waterlevel_msl": 2.19,
      "storage_percent": 73.53,
      "value_text": "2.19 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.8,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 42.25,
      "storage_percent": 72.43,
      "value_text": "42.25 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 49.16,
      "storage_percent": 72.41,
      "value_text": "49.16 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.1,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 9.09,
      "storage_percent": 71.42,
      "value_text": "9.09 ม.รทก.",
      "observed_at": "2026-09-22 21:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 46.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 35.9,
      "storage_percent": 71.41,
      "value_text": "35.9 ม.รทก.",
      "observed_at": "2026-09-22 21:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 27,
    "station_count": 971,
    "alert_station_count": 147,
    "heavy_rain_estate_count": 3,
    "water_alert_estate_count": 26,
    "critical_count": 68,
    "rain_station_count": 783,
    "waterlevel_station_count": 188,
    "waterlevel_alert_count": 103,
    "max_rainfall_mm": 161.0,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.กระบี่",
      "จ.กรุงเทพมหานคร",
      "จ.นครสวรรค์"
    ],
    "flood_watch_province_count": 3,
    "flash_flood_24h_area_count": 4,
    "flash_flood_48h_area_count": 8,
    "warning_title": "",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "flash_flood": {
    "24h": {
      "period": "24h",
      "date": "2026-09-22",
      "time": "21:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
        {
          "geocode": "601303",
          "tambon": "ต.แม่เล่ย์",
          "amphoe": "อ.แม่วงก์",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านใหม่ศรีนคร",
          "latitude": 15.788101,
          "longitude": 99.458804,
          "sum_rainfall_mm": 222.5,
          "observed_at": "2026-09-22T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24701,
                  15.91973
                ],
                [
                  99.25745,
                  15.9154
                ],
                [
                  99.26671,
                  15.90738
                ],
                [
                  99.26879,
                  15.9124
                ],
                [
                  99.27057,
                  15.91232
                ],
                [
                  99.2732,
                  15.9091
                ],
                [
                  99.27386,
                  15.90419
                ],
                [
                  99.27794,
                  15.90318
                ],
                [
                  99.28091,
                  15.89803
                ],
                [
                  99.28607,
                  15.8969
                ],
                [
                  99.28987,
                  15.89188
                ],
                [
                  99.29204,
                  15.89445
                ],
                [
                  99.29208,
                  15.89669
                ],
                [
                  99.29179,
                  15.90045
                ],
                [
                  99.28919,
                  15.90198
                ],
                [
                  99.28962,
                  15.9048
                ],
                [
                  99.29108,
                  15.90511
                ],
                [
                  99.29263,
                  15.90305
                ],
                [
                  99.29431,
                  15.90303
                ],
                [
                  99.29528,
                  15.90732
                ],
                [
                  99.29721,
                  15.90896
                ],
                [
                  99.30189,
                  15.90781
                ],
                [
                  99.30512,
                  15.90402
                ],
                [
                  99.3091,
                  15.90413
                ],
                [
                  99.31138,
                  15.90843
                ],
                [
                  99.31008,
                  15.91194
                ],
                [
                  99.31039,
                  15.9179
                ],
                [
                  99.31335,
                  15.9193
                ],
                [
                  99.31739,
                  15.91692
                ],
                [
                  99.31945,
                  15.91746
                ],
                [
                  99.32002,
                  15.92046
                ],
                [
                  99.31849,
                  15.92592
                ],
                [
                  99.31953,
                  15.92755
                ],
                [
                  99.32774,
                  15.92027
                ],
                [
                  99.32613,
                  15.91586
                ],
                [
                  99.33008,
                  15.91148
                ],
                [
                  99.34385,
                  15.9203
                ],
                [
                  99.35702,
                  15.9264
                ],
                [
                  99.36269,
                  15.92151
                ],
                [
                  99.3735,
                  15.91566
                ],
                [
                  99.38133,
                  15.91743
                ],
                [
                  99.38574,
                  15.91692
                ],
                [
                  99.40037,
                  15.91359
                ],
                [
                  99.40473,
                  15.911
                ],
                [
                  99.40824,
                  15.91418
                ],
                [
                  99.41275,
                  15.91058
                ],
                [
                  99.41472,
                  15.9108
                ],
                [
                  99.41692,
                  15.91318
                ],
                [
                  99.41958,
                  15.91407
                ],
                [
                  99.42018,
                  15.91737
                ],
                [
                  99.42326,
                  15.91825
                ],
                [
                  99.42377,
                  15.92084
                ],
                [
                  99.42497,
                  15.92128
                ],
                [
                  99.42724,
                  15.91978
                ],
                [
                  99.42687,
                  15.91706
                ],
                [
                  99.42924,
                  15.91564
                ],
                [
                  99.43148,
                  15.90901
                ],
                [
                  99.43653,
                  15.91049
                ],
                [
                  99.43951,
                  15.90622
                ],
                [
                  99.44627,
                  15.90246
                ],
                [
                  99.44788,
                  15.9028
                ],
                [
                  99.44901,
                  15.90502
                ],
                [
                  99.45102,
                  15.90485
                ],
                [
                  99.45879,
                  15.885
                ],
                [
                  99.45837,
                  15.88078
                ],
                [
                  99.46214,
                  15.8743
                ],
                [
                  99.46701,
                  15.85256
                ],
                [
                  99.47402,
                  15.84047
                ],
                [
                  99.47412,
                  15.83564
                ],
                [
                  99.47706,
                  15.83403
                ],
                [
                  99.47613,
                  15.82449
                ],
                [
                  99.47914,
                  15.81613
                ],
                [
                  99.47985,
                  15.81006
                ],
                [
                  99.48314,
                  15.80703
                ],
                [
                  99.48449,
                  15.80113
                ],
                [
                  99.49148,
                  15.79007
                ],
                [
                  99.49448,
                  15.78957
                ],
                [
                  99.49714,
                  15.78757
                ],
                [
                  99.49764,
                  15.78425
                ],
                [
                  99.4966,
                  15.78023
                ],
                [
                  99.48878,
                  15.77366
                ],
                [
                  99.484,
                  15.77167
                ],
                [
                  99.482,
                  15.76618
                ],
                [
                  99.47861,
                  15.7643
                ],
                [
                  99.46419,
                  15.76112
                ],
                [
                  99.44955,
                  15.7637
                ],
                [
                  99.44519,
                  15.76253
                ],
                [
                  99.44446,
                  15.76061
                ],
                [
                  99.44646,
                  15.75475
                ],
                [
                  99.44556,
                  15.75162
                ],
                [
                  99.44911,
                  15.74695
                ],
                [
                  99.45137,
                  15.74627
                ],
                [
                  99.45476,
                  15.7427
                ],
                [
                  99.45474,
                  15.73783
                ],
                [
                  99.4568,
                  15.73422
                ],
                [
                  99.4553,
                  15.7343
                ],
                [
                  99.4542,
                  15.73083
                ],
                [
                  99.45389,
                  15.73297
                ],
                [
                  99.4506,
                  15.73283
                ],
                [
                  99.44843,
                  15.73422
                ],
                [
                  99.44491,
                  15.73331
                ],
                [
                  99.44458,
                  15.73485
                ],
                [
                  99.44286,
                  15.73564
                ],
                [
                  99.44258,
                  15.7387
                ],
                [
                  99.43787,
                  15.74344
                ],
                [
                  99.43778,
                  15.74554
                ],
                [
                  99.42818,
                  15.75243
                ],
                [
                  99.42082,
                  15.74603
                ],
                [
                  99.41466,
                  15.74828
                ],
                [
                  99.41278,
                  15.74533
                ],
                [
                  99.40914,
                  15.74263
                ],
                [
                  99.40468,
                  15.74375
                ],
                [
                  99.40191,
                  15.74295
                ],
                [
                  99.40001,
                  15.74058
                ],
                [
                  99.39998,
                  15.73824
                ],
                [
                  99.40258,
                  15.7351
                ],
                [
                  99.39733,
                  15.73375
                ],
                [
                  99.39643,
                  15.73089
                ],
                [
                  99.39519,
                  15.7305
                ],
                [
                  99.39303,
                  15.73304
                ],
                [
                  99.38286,
                  15.73301
                ],
                [
                  99.38097,
                  15.73505
                ],
                [
                  99.36808,
                  15.73816
                ],
                [
                  99.36602,
                  15.74243
                ],
                [
                  99.3674,
                  15.74569
                ],
                [
                  99.36468,
                  15.76088
                ],
                [
                  99.36085,
                  15.76601
                ],
                [
                  99.35636,
                  15.76712
                ],
                [
                  99.34637,
                  15.77286
                ],
                [
                  99.34359,
                  15.77288
                ],
                [
                  99.31735,
                  15.78294
                ],
                [
                  99.30693,
                  15.78513
                ],
                [
                  99.3004,
                  15.7852
                ],
                [
                  99.29631,
                  15.7832
                ],
                [
                  99.29084,
                  15.778
                ],
                [
                  99.29186,
                  15.76996
                ],
                [
                  99.29006,
                  15.76438
                ],
                [
                  99.28725,
                  15.76121
                ],
                [
                  99.28391,
                  15.76456
                ],
                [
                  99.28058,
                  15.76571
                ],
                [
                  99.27835,
                  15.76951
                ],
                [
                  99.26983,
                  15.7718
                ],
                [
                  99.26799,
                  15.77386
                ],
                [
                  99.26607,
                  15.77416
                ],
                [
                  99.26628,
                  15.77713
                ],
                [
                  99.26327,
                  15.78124
                ],
                [
                  99.2616,
                  15.77995
                ],
                [
                  99.25972,
                  15.78175
                ],
                [
                  99.25694,
                  15.78078
                ],
                [
                  99.25488,
                  15.78457
                ],
                [
                  99.25035,
                  15.78483
                ],
                [
                  99.24839,
                  15.78677
                ],
                [
                  99.24018,
                  15.79012
                ],
                [
                  99.23854,
                  15.79236
                ],
                [
                  99.22957,
                  15.79574
                ],
                [
                  99.21462,
                  15.77918
                ],
                [
                  99.2165,
                  15.77297
                ],
                [
                  99.21669,
                  15.76813
                ],
                [
                  99.2132,
                  15.76683
                ],
                [
                  99.20655,
                  15.76546
                ],
                [
                  99.20206,
                  15.76687
                ],
                [
                  99.19968,
                  15.77185
                ],
                [
                  99.1952,
                  15.77458
                ],
                [
                  99.19384,
                  15.77891
                ],
                [
                  99.18925,
                  15.78002
                ],
                [
                  99.18657,
                  15.78368
                ],
                [
                  99.18433,
                  15.78192
                ],
                [
                  99.18114,
                  15.78256
                ],
                [
                  99.17863,
                  15.78127
                ],
                [
                  99.17435,
                  15.78253
                ],
                [
                  99.16814,
                  15.77785
                ],
                [
                  99.16582,
                  15.77757
                ],
                [
                  99.16401,
                  15.77959
                ],
                [
                  99.16391,
                  15.78985
                ],
                [
                  99.1589,
                  15.7926
                ],
                [
                  99.15034,
                  15.79248
                ],
                [
                  99.14725,
                  15.79676
                ],
                [
                  99.13899,
                  15.79669
                ],
                [
                  99.13377,
                  15.79821
                ],
                [
                  99.13128,
                  15.80725
                ],
                [
                  99.129,
                  15.80835
                ],
                [
                  99.12394,
                  15.81437
                ],
                [
                  99.1177,
                  15.81685
                ],
                [
                  99.11412,
                  15.81705
                ],
                [
                  99.11341,
                  15.81869
                ],
                [
                  99.10812,
                  15.81914
                ],
                [
                  99.10727,
                  15.82034
                ],
                [
                  99.1033,
                  15.82109
                ],
                [
                  99.10289,
                  15.82233
                ],
                [
                  99.10447,
                  15.82513
                ],
                [
                  99.10367,
                  15.82726
                ],
                [
                  99.09626,
                  15.8314
                ],
                [
                  99.09641,
                  15.83397
                ],
                [
                  99.09469,
                  15.83744
                ],
                [
                  99.09635,
                  15.84091
                ],
                [
                  99.09744,
                  15.8509
                ],
                [
                  99.09877,
                  15.85378
                ],
                [
                  99.09446,
                  15.85856
                ],
                [
                  99.09408,
                  15.86117
                ],
                [
                  99.09734,
                  15.87116
                ],
                [
                  99.09517,
                  15.87523
                ],
                [
                  99.08898,
                  15.87909
                ],
                [
                  99.08623,
                  15.88552
                ],
                [
                  99.08674,
                  15.88676
                ],
                [
                  99.08784,
                  15.88657
                ],
                [
                  99.09526,
                  15.88333
                ],
                [
                  99.10116,
                  15.89039
                ],
                [
                  99.10487,
                  15.89166
                ],
                [
                  99.1071,
                  15.89533
                ],
                [
                  99.11764,
                  15.9023
                ],
                [
                  99.1284,
                  15.91259
                ],
                [
                  99.12992,
                  15.91212
                ],
                [
                  99.13039,
                  15.90927
                ],
                [
                  99.13631,
                  15.90762
                ],
                [
                  99.13815,
                  15.90575
                ],
                [
                  99.14006,
                  15.90598
                ],
                [
                  99.14239,
                  15.90821
                ],
                [
                  99.14716,
                  15.90885
                ],
                [
                  99.15329,
                  15.91439
                ],
                [
                  99.15428,
                  15.91693
                ],
                [
                  99.15289,
                  15.91931
                ],
                [
                  99.15343,
                  15.92013
                ],
                [
                  99.15686,
                  15.92014
                ],
                [
                  99.1617,
                  15.92455
                ],
                [
                  99.16365,
                  15.92416
                ],
                [
                  99.16433,
                  15.92613
                ],
                [
                  99.17341,
                  15.92843
                ],
                [
                  99.17302,
                  15.93335
                ],
                [
                  99.17156,
                  15.93576
                ],
                [
                  99.1722,
                  15.93719
                ],
                [
                  99.17336,
                  15.93716
                ],
                [
                  99.17599,
                  15.93404
                ],
                [
                  99.17978,
                  15.93317
                ],
                [
                  99.18493,
                  15.9286
                ],
                [
                  99.18644,
                  15.92856
                ],
                [
                  99.19138,
                  15.93206
                ],
                [
                  99.19173,
                  15.93717
                ],
                [
                  99.1943,
                  15.93774
                ],
                [
                  99.19536,
                  15.93934
                ],
                [
                  99.19509,
                  15.94166
                ],
                [
                  99.19267,
                  15.94251
                ],
                [
                  99.19351,
                  15.94477
                ],
                [
                  99.19547,
                  15.94469
                ],
                [
                  99.19917,
                  15.93954
                ],
                [
                  99.20411,
                  15.93618
                ],
                [
                  99.20514,
                  15.93706
                ],
                [
                  99.20517,
                  15.94334
                ],
                [
                  99.20824,
                  15.94868
                ],
                [
                  99.21087,
                  15.94724
                ],
                [
                  99.21199,
                  15.94441
                ],
                [
                  99.2168,
                  15.94411
                ],
                [
                  99.2173,
                  15.94173
                ],
                [
                  99.21329,
                  15.93956
                ],
                [
                  99.21845,
                  15.93685
                ],
                [
                  99.22077,
                  15.93774
                ],
                [
                  99.2211,
                  15.94488
                ],
                [
                  99.22278,
                  15.94453
                ],
                [
                  99.22519,
                  15.93742
                ],
                [
                  99.23129,
                  15.93325
                ],
                [
                  99.23392,
                  15.9286
                ],
                [
                  99.23895,
                  15.92654
                ],
                [
                  99.24314,
                  15.92159
                ],
                [
                  99.24701,
                  15.91973
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
          "station": "บ้านบางตะเภา",
          "latitude": 8.270104,
          "longitude": 99.334934,
          "sum_rainfall_mm": 131.0,
          "observed_at": "2026-09-22T09:00:00+07:00",
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
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเตย",
          "latitude": 13.70628,
          "longitude": 100.58752,
          "sum_rainfall_mm": 164.0,
          "observed_at": "2026-09-22T09:00:00+07:00"
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
          "sum_rainfall_mm": 120.0,
          "observed_at": "2026-09-22T09:00:00+07:00"
        }
      ],
      "area_nearby": [
        {
          "geocode": "601303",
          "tambon": "ต.แม่เล่ย์",
          "amphoe": "อ.แม่วงก์",
          "province": "จ.นครสวรรค์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านใหม่ศรีนคร",
          "latitude": 15.788101,
          "longitude": 99.458804,
          "sum_rainfall_mm": 222.5,
          "observed_at": "2026-09-22T09:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  99.24701,
                  15.91973
                ],
                [
                  99.25745,
                  15.9154
                ],
                [
                  99.26671,
                  15.90738
                ],
                [
                  99.26879,
                  15.9124
                ],
                [
                  99.27057,
                  15.91232
                ],
                [
                  99.2732,
                  15.9091
                ],
                [
                  99.27386,
                  15.90419
                ],
                [
                  99.27794,
                  15.90318
                ],
                [
                  99.28091,
                  15.89803
                ],
                [
                  99.28607,
                  15.8969
                ],
                [
                  99.28987,
                  15.89188
                ],
                [
                  99.29204,
                  15.89445
                ],
                [
                  99.29208,
                  15.89669
                ],
                [
                  99.29179,
                  15.90045
                ],
                [
                  99.28919,
                  15.90198
                ],
                [
                  99.28962,
                  15.9048
                ],
                [
                  99.29108,
                  15.90511
                ],
                [
                  99.29263,
                  15.90305
                ],
                [
                  99.29431,
                  15.90303
                ],
                [
                  99.29528,
                  15.90732
                ],
                [
                  99.29721,
                  15.90896
                ],
                [
                  99.30189,
                  15.90781
                ],
                [
                  99.30512,
                  15.90402
                ],
                [
                  99.3091,
                  15.90413
                ],
                [
                  99.31138,
                  15.90843
                ],
                [
                  99.31008,
                  15.91194
                ],
                [
                  99.31039,
                  15.9179
                ],
                [
                  99.31335,
                  15.9193
                ],
                [
                  99.31739,
                  15.91692
                ],
                [
                  99.31945,
                  15.91746
                ],
                [
                  99.32002,
                  15.92046
                ],
                [
                  99.31849,
                  15.92592
                ],
                [
                  99.31953,
                  15.92755
                ],
                [
                  99.32774,
                  15.92027
                ],
                [
                  99.32613,
                  15.91586
                ],
                [
                  99.33008,
                  15.91148
                ],
                [
                  99.34385,
                  15.9203
                ],
                [
                  99.35702,
                  15.9264
                ],
                [
                  99.36269,
                  15.92151
                ],
                [
                  99.3735,
                  15.91566
                ],
                [
                  99.38133,
                  15.91743
                ],
                [
                  99.38574,
                  15.91692
                ],
                [
                  99.40037,
                  15.91359
                ],
                [
                  99.40473,
                  15.911
                ],
                [
                  99.40824,
                  15.91418
                ],
                [
                  99.41275,
                  15.91058
                ],
                [
                  99.41472,
                  15.9108
                ],
                [
                  99.41692,
                  15.91318
                ],
                [
                  99.41958,
                  15.91407
                ],
                [
                  99.42018,
                  15.91737
                ],
                [
                  99.42326,
                  15.91825
                ],
                [
                  99.42377,
                  15.92084
                ],
                [
                  99.42497,
                  15.92128
                ],
                [
                  99.42724,
                  15.91978
                ],
                [
                  99.42687,
                  15.91706
                ],
                [
                  99.42924,
                  15.91564
                ],
                [
                  99.43148,
                  15.90901
                ],
                [
                  99.43653,
                  15.91049
                ],
                [
                  99.43951,
                  15.90622
                ],
                [
                  99.44627,
                  15.90246
                ],
                [
                  99.44788,
                  15.9028
                ],
                [
                  99.44901,
                  15.90502
                ],
                [
                  99.45102,
                  15.90485
                ],
                [
                  99.45879,
                  15.885
                ],
                [
                  99.45837,
                  15.88078
                ],
                [
                  99.46214,
                  15.8743
                ],
                [
                  99.46701,
                  15.85256
                ],
                [
                  99.47402,
                  15.84047
                ],
                [
                  99.47412,
                  15.83564
                ],
                [
                  99.47706,
                  15.83403
                ],
                [
                  99.47613,
                  15.82449
                ],
                [
                  99.47914,
                  15.81613
                ],
                [
                  99.47985,
                  15.81006
                ],
                [
                  99.48314,
                  15.80703
                ],
                [
                  99.48449,
                  15.80113
                ],
                [
                  99.49148,
                  15.79007
                ],
                [
                  99.49448,
                  15.78957
                ],
                [
                  99.49714,
                  15.78757
                ],
                [
                  99.49764,
                  15.78425
                ],
                [
                  99.4966,
                  15.78023
                ],
                [
                  99.48878,
                  15.77366
                ],
                [
                  99.484,
                  15.77167
                ],
                [
                  99.482,
                  15.76618
                ],
                [
                  99.47861,
                  15.7643
                ],
                [
                  99.46419,
                  15.76112
                ],
                [
                  99.44955,
                  15.7637
                ],
                [
                  99.44519,
                  15.76253
                ],
                [
                  99.44446,
                  15.76061
                ],
                [
                  99.44646,
                  15.75475
                ],
                [
                  99.44556,
                  15.75162
                ],
                [
                  99.44911,
                  15.74695
                ],
                [
                  99.45137,
                  15.74627
                ],
                [
                  99.45476,
                  15.7427
                ],
                [
                  99.45474,
                  15.73783
                ],
                [
                  99.4568,
                  15.73422
                ],
                [
                  99.4553,
                  15.7343
                ],
                [
                  99.4542,
                  15.73083
                ],
                [
                  99.45389,
                  15.73297
                ],
                [
                  99.4506,
                  15.73283
                ],
                [
                  99.44843,
                  15.73422
                ],
                [
                  99.44491,
                  15.73331
                ],
                [
                  99.44458,
                  15.73485
                ],
                [
                  99.44286,
                  15.73564
                ],
                [
                  99.44258,
                  15.7387
                ],
                [
                  99.43787,
                  15.74344
                ],
                [
                  99.43778,
                  15.74554
                ],
                [
                  99.42818,
                  15.75243
                ],
                [
                  99.42082,
                  15.74603
                ],
                [
                  99.41466,
                  15.74828
                ],
                [
                  99.41278,
                  15.74533
                ],
                [
                  99.40914,
                  15.74263
                ],
                [
                  99.40468,
                  15.74375
                ],
                [
                  99.40191,
                  15.74295
                ],
                [
                  99.40001,
                  15.74058
                ],
                [
                  99.39998,
                  15.73824
                ],
                [
                  99.40258,
                  15.7351
                ],
                [
                  99.39733,
                  15.73375
                ],
                [
                  99.39643,
                  15.73089
                ],
                [
                  99.39519,
                  15.7305
                ],
                [
                  99.39303,
                  15.73304
                ],
                [
                  99.38286,
                  15.73301
                ],
                [
                  99.38097,
                  15.73505
                ],
                [
                  99.36808,
                  15.73816
                ],
                [
                  99.36602,
                  15.74243
                ],
                [
                  99.3674,
                  15.74569
                ],
                [
                  99.36468,
                  15.76088
                ],
                [
                  99.36085,
                  15.76601
                ],
                [
                  99.35636,
                  15.76712
                ],
                [
                  99.34637,
                  15.77286
                ],
                [
                  99.34359,
                  15.77288
                ],
                [
                  99.31735,
                  15.78294
                ],
                [
                  99.30693,
                  15.78513
                ],
                [
                  99.3004,
                  15.7852
                ],
                [
                  99.29631,
                  15.7832
                ],
                [
                  99.29084,
                  15.778
                ],
                [
                  99.29186,
                  15.76996
                ],
                [
                  99.29006,
                  15.76438
                ],
                [
                  99.28725,
                  15.76121
                ],
                [
                  99.28391,
                  15.76456
                ],
                [
                  99.28058,
                  15.76571
                ],
                [
                  99.27835,
                  15.76951
                ],
                [
                  99.26983,
                  15.7718
                ],
                [
                  99.26799,
                  15.77386
                ],
                [
                  99.26607,
                  15.77416
                ],
                [
                  99.26628,
                  15.77713
                ],
                [
                  99.26327,
                  15.78124
                ],
                [
                  99.2616,
                  15.77995
                ],
                [
                  99.25972,
                  15.78175
                ],
                [
                  99.25694,
                  15.78078
                ],
                [
                  99.25488,
                  15.78457
                ],
                [
                  99.25035,
                  15.78483
                ],
                [
                  99.24839,
                  15.78677
                ],
                [
                  99.24018,
                  15.79012
                ],
                [
                  99.23854,
                  15.79236
                ],
                [
                  99.22957,
                  15.79574
                ],
                [
                  99.21462,
                  15.77918
                ],
                [
                  99.2165,
                  15.77297
                ],
                [
                  99.21669,
                  15.76813
                ],
                [
                  99.2132,
                  15.76683
                ],
                [
                  99.20655,
                  15.76546
                ],
                [
                  99.20206,
                  15.76687
                ],
                [
                  99.19968,
                  15.77185
                ],
                [
                  99.1952,
                  15.77458
                ],
                [
                  99.19384,
                  15.77891
                ],
                [
                  99.18925,
                  15.78002
                ],
                [
                  99.18657,
                  15.78368
                ],
                [
                  99.18433,
                  15.78192
                ],
                [
                  99.18114,
                  15.78256
                ],
                [
                  99.17863,
                  15.78127
                ],
                [
                  99.17435,
                  15.78253
                ],
                [
                  99.16814,
                  15.77785
                ],
                [
                  99.16582,
                  15.77757
                ],
                [
                  99.16401,
                  15.77959
                ],
                [
                  99.16391,
                  15.78985
                ],
                [
                  99.1589,
                  15.7926
                ],
                [
                  99.15034,
                  15.79248
                ],
                [
                  99.14725,
                  15.79676
                ],
                [
                  99.13899,
                  15.79669
                ],
                [
                  99.13377,
                  15.79821
                ],
                [
                  99.13128,
                  15.80725
                ],
                [
                  99.129,
                  15.80835
                ],
                [
                  99.12394,
                  15.81437
                ],
                [
                  99.1177,
                  15.81685
                ],
                [
                  99.11412,
                  15.81705
                ],
                [
                  99.11341,
                  15.81869
                ],
                [
                  99.10812,
                  15.81914
                ],
                [
                  99.10727,
                  15.82034
                ],
                [
                  99.1033,
                  15.82109
                ],
                [
                  99.10289,
                  15.82233
                ],
                [
                  99.10447,
                  15.82513
                ],
                [
                  99.10367,
                  15.82726
                ],
                [
                  99.09626,
                  15.8314
                ],
                [
                  99.09641,
                  15.83397
                ],
                [
                  99.09469,
                  15.83744
                ],
                [
                  99.09635,
                  15.84091
                ],
                [
                  99.09744,
                  15.8509
                ],
                [
                  99.09877,
                  15.85378
                ],
                [
                  99.09446,
                  15.85856
                ],
                [
                  99.09408,
                  15.86117
                ],
                [
                  99.09734,
                  15.87116
                ],
                [
                  99.09517,
                  15.87523
                ],
                [
                  99.08898,
                  15.87909
                ],
                [
                  99.08623,
                  15.88552
                ],
                [
                  99.08674,
                  15.88676
                ],
                [
                  99.08784,
                  15.88657
                ],
                [
                  99.09526,
                  15.88333
                ],
                [
                  99.10116,
                  15.89039
                ],
                [
                  99.10487,
                  15.89166
                ],
                [
                  99.1071,
                  15.89533
                ],
                [
                  99.11764,
                  15.9023
                ],
                [
                  99.1284,
                  15.91259
                ],
                [
                  99.12992,
                  15.91212
                ],
                [
                  99.13039,
                  15.90927
                ],
                [
                  99.13631,
                  15.90762
                ],
                [
                  99.13815,
                  15.90575
                ],
                [
                  99.14006,
                  15.90598
                ],
                [
                  99.14239,
                  15.90821
                ],
                [
                  99.14716,
                  15.90885
                ],
                [
                  99.15329,
                  15.91439
                ],
                [
                  99.15428,
                  15.91693
                ],
                [
                  99.15289,
                  15.91931
                ],
                [
                  99.15343,
                  15.92013
                ],
                [
                  99.15686,
                  15.92014
                ],
                [
                  99.1617,
                  15.92455
                ],
                [
                  99.16365,
                  15.92416
                ],
                [
                  99.16433,
                  15.92613
                ],
                [
                  99.17341,
                  15.92843
                ],
                [
                  99.17302,
                  15.93335
                ],
                [
                  99.17156,
                  15.93576
                ],
                [
                  99.1722,
                  15.93719
                ],
                [
                  99.17336,
                  15.93716
                ],
                [
                  99.17599,
                  15.93404
                ],
                [
                  99.17978,
                  15.93317
                ],
                [
                  99.18493,
                  15.9286
                ],
                [
                  99.18644,
                  15.92856
                ],
                [
                  99.19138,
                  15.93206
                ],
                [
                  99.19173,
                  15.93717
                ],
                [
                  99.1943,
                  15.93774
                ],
                [
                  99.19536,
                  15.93934
                ],
                [
                  99.19509,
                  15.94166
                ],
                [
                  99.19267,
                  15.94251
                ],
                [
                  99.19351,
                  15.94477
                ],
                [
                  99.19547,
                  15.94469
                ],
                [
                  99.19917,
                  15.93954
                ],
                [
                  99.20411,
                  15.93618
                ],
                [
                  99.20514,
                  15.93706
                ],
                [
                  99.20517,
                  15.94334
                ],
                [
                  99.20824,
                  15.94868
                ],
                [
                  99.21087,
                  15.94724
                ],
                [
                  99.21199,
                  15.94441
                ],
                [
                  99.2168,
                  15.94411
                ],
                [
                  99.2173,
                  15.94173
                ],
                [
                  99.21329,
                  15.93956
                ],
                [
                  99.21845,
                  15.93685
                ],
                [
                  99.22077,
                  15.93774
                ],
                [
                  99.2211,
                  15.94488
                ],
                [
                  99.22278,
                  15.94453
                ],
                [
                  99.22519,
                  15.93742
                ],
                [
                  99.23129,
                  15.93325
                ],
                [
                  99.23392,
                  15.9286
                ],
                [
                  99.23895,
                  15.92654
                ],
                [
                  99.24314,
                  15.92159
                ],
                [
                  99.24701,
                  15.91973
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
          "station": "บ้านบางตะเภา",
          "latitude": 8.270104,
          "longitude": 99.334934,
          "sum_rainfall_mm": 131.0,
          "observed_at": "2026-09-22T09:00:00+07:00",
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
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเตย",
          "latitude": 13.70628,
          "longitude": 100.58752,
          "sum_rainfall_mm": 164.0,
          "observed_at": "2026-09-22T09:00:00+07:00"
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
          "sum_rainfall_mm": 120.0,
          "observed_at": "2026-09-22T09:00:00+07:00"
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_22_09_2026.png?1790086030",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-22",
      "time": "21:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
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
          "sum_rainfall_mm": 112.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.76061,
                  15.66908
                ],
                [
                  100.76181,
                  15.66606
                ],
                [
                  100.76085,
                  15.66538
                ],
                [
                  100.75131,
                  15.66762
                ],
                [
                  100.75631,
                  15.65689
                ],
                [
                  100.75636,
                  15.65431
                ],
                [
                  100.76044,
                  15.6501
                ],
                [
                  100.75896,
                  15.64534
                ],
                [
                  100.7548,
                  15.64215
                ],
                [
                  100.74669,
                  15.64066
                ],
                [
                  100.7424,
                  15.63731
                ],
                [
                  100.73849,
                  15.63665
                ],
                [
                  100.73429,
                  15.63322
                ],
                [
                  100.7258,
                  15.63238
                ],
                [
                  100.7253,
                  15.63058
                ],
                [
                  100.72841,
                  15.62835
                ],
                [
                  100.72946,
                  15.62291
                ],
                [
                  100.7338,
                  15.61806
                ],
                [
                  100.7333,
                  15.61662
                ],
                [
                  100.72791,
                  15.61476
                ],
                [
                  100.71794,
                  15.60846
                ],
                [
                  100.71021,
                  15.60727
                ],
                [
                  100.69865,
                  15.60768
                ],
                [
                  100.69567,
                  15.60614
                ],
                [
                  100.6949,
                  15.60292
                ],
                [
                  100.69549,
                  15.59284
                ],
                [
                  100.69015,
                  15.58755
                ],
                [
                  100.69328,
                  15.58324
                ],
                [
                  100.69619,
                  15.57561
                ],
                [
                  100.69598,
                  15.57098
                ],
                [
                  100.69341,
                  15.56584
                ],
                [
                  100.69082,
                  15.56653
                ],
                [
                  100.68587,
                  15.56394
                ],
                [
                  100.68003,
                  15.56532
                ],
                [
                  100.67351,
                  15.56166
                ],
                [
                  100.66288,
                  15.56315
                ],
                [
                  100.65592,
                  15.56178
                ],
                [
                  100.64572,
                  15.56228
                ],
                [
                  100.63845,
                  15.5658
                ],
                [
                  100.63769,
                  15.56675
                ],
                [
                  100.63924,
                  15.57164
                ],
                [
                  100.64479,
                  15.57901
                ],
                [
                  100.64432,
                  15.58464
                ],
                [
                  100.6453,
                  15.59025
                ],
                [
                  100.64289,
                  15.59986
                ],
                [
                  100.64553,
                  15.60555
                ],
                [
                  100.64529,
                  15.61157
                ],
                [
                  100.63922,
                  15.62813
                ],
                [
                  100.64373,
                  15.64105
                ],
                [
                  100.64269,
                  15.64871
                ],
                [
                  100.64489,
                  15.6634
                ],
                [
                  100.65295,
                  15.6625
                ],
                [
                  100.6561,
                  15.65874
                ],
                [
                  100.66541,
                  15.65507
                ],
                [
                  100.67177,
                  15.64817
                ],
                [
                  100.68192,
                  15.64556
                ],
                [
                  100.68634,
                  15.65308
                ],
                [
                  100.69606,
                  15.66078
                ],
                [
                  100.69938,
                  15.66605
                ],
                [
                  100.71324,
                  15.67455
                ],
                [
                  100.72734,
                  15.68637
                ],
                [
                  100.7376,
                  15.6981
                ],
                [
                  100.75114,
                  15.69311
                ],
                [
                  100.75621,
                  15.68832
                ],
                [
                  100.75742,
                  15.68873
                ],
                [
                  100.75701,
                  15.69116
                ],
                [
                  100.75794,
                  15.69292
                ],
                [
                  100.76139,
                  15.69144
                ],
                [
                  100.75971,
                  15.675
                ],
                [
                  100.76061,
                  15.66908
                ]
              ]
            ]
          }
        },
        {
          "geocode": "661102",
          "tambon": "ต.วังงิ้ว",
          "amphoe": "อ.ดงเจริญ",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.วังงิ้ว",
          "latitude": 16.01561,
          "longitude": 100.73281,
          "sum_rainfall_mm": 133.4,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.74657,
                  16.01148
                ],
                [
                  100.76029,
                  16.00951
                ],
                [
                  100.76112,
                  16.00711
                ],
                [
                  100.76252,
                  16.00693
                ],
                [
                  100.76343,
                  16.00534
                ],
                [
                  100.76663,
                  16.00556
                ],
                [
                  100.76889,
                  16.00386
                ],
                [
                  100.76935,
                  16.00201
                ],
                [
                  100.76796,
                  16.00049
                ],
                [
                  100.76924,
                  15.99844
                ],
                [
                  100.77224,
                  15.9997
                ],
                [
                  100.77211,
                  15.99878
                ],
                [
                  100.77667,
                  15.99845
                ],
                [
                  100.78489,
                  15.99221
                ],
                [
                  100.78291,
                  15.98235
                ],
                [
                  100.78412,
                  15.98117
                ],
                [
                  100.78042,
                  15.97818
                ],
                [
                  100.77785,
                  15.97245
                ],
                [
                  100.7794,
                  15.96812
                ],
                [
                  100.77805,
                  15.96604
                ],
                [
                  100.78491,
                  15.96244
                ],
                [
                  100.78691,
                  15.95994
                ],
                [
                  100.79114,
                  15.95823
                ],
                [
                  100.79133,
                  15.955
                ],
                [
                  100.79403,
                  15.95185
                ],
                [
                  100.79376,
                  15.94637
                ],
                [
                  100.79556,
                  15.94242
                ],
                [
                  100.79767,
                  15.94151
                ],
                [
                  100.7968,
                  15.94078
                ],
                [
                  100.79901,
                  15.93722
                ],
                [
                  100.79812,
                  15.93537
                ],
                [
                  100.78929,
                  15.93644
                ],
                [
                  100.78501,
                  15.93337
                ],
                [
                  100.78108,
                  15.93511
                ],
                [
                  100.77831,
                  15.93014
                ],
                [
                  100.76865,
                  15.92949
                ],
                [
                  100.76641,
                  15.9314
                ],
                [
                  100.76793,
                  15.93304
                ],
                [
                  100.76768,
                  15.93554
                ],
                [
                  100.76391,
                  15.93684
                ],
                [
                  100.75614,
                  15.9425
                ],
                [
                  100.7542,
                  15.95058
                ],
                [
                  100.75096,
                  15.95511
                ],
                [
                  100.74997,
                  15.95912
                ],
                [
                  100.75036,
                  15.96927
                ],
                [
                  100.74563,
                  15.97496
                ],
                [
                  100.74541,
                  15.98056
                ],
                [
                  100.74382,
                  15.98103
                ],
                [
                  100.74403,
                  15.9827
                ],
                [
                  100.74244,
                  15.98532
                ],
                [
                  100.73865,
                  15.98615
                ],
                [
                  100.73783,
                  15.98924
                ],
                [
                  100.73075,
                  15.99056
                ],
                [
                  100.71915,
                  15.9885
                ],
                [
                  100.71112,
                  15.98986
                ],
                [
                  100.70226,
                  15.98931
                ],
                [
                  100.68972,
                  15.99339
                ],
                [
                  100.68238,
                  15.99983
                ],
                [
                  100.69015,
                  16.02701
                ],
                [
                  100.69307,
                  16.02619
                ],
                [
                  100.69394,
                  16.02415
                ],
                [
                  100.7016,
                  16.02537
                ],
                [
                  100.70664,
                  16.02432
                ],
                [
                  100.71302,
                  16.02589
                ],
                [
                  100.72046,
                  16.0233
                ],
                [
                  100.7271,
                  16.0224
                ],
                [
                  100.73323,
                  16.0193
                ],
                [
                  100.73535,
                  16.01695
                ],
                [
                  100.74397,
                  16.01359
                ],
                [
                  100.74384,
                  16.0121
                ],
                [
                  100.74657,
                  16.01148
                ]
              ]
            ]
          }
        },
        {
          "geocode": "660801",
          "tambon": "ต.ทับคล้อ",
          "amphoe": "อ.ทับคล้อ",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ทับคล้อ",
          "latitude": 16.16959,
          "longitude": 100.566,
          "sum_rainfall_mm": 110.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.61566,
                  16.17769
                ],
                [
                  100.61451,
                  16.17723
                ],
                [
                  100.61461,
                  16.17548
                ],
                [
                  100.61275,
                  16.17589
                ],
                [
                  100.61268,
                  16.17363
                ],
                [
                  100.61188,
                  16.1733
                ],
                [
                  100.61173,
                  16.1743
                ],
                [
                  100.61132,
                  16.17254
                ],
                [
                  100.60923,
                  16.17115
                ],
                [
                  100.60977,
                  16.17011
                ],
                [
                  100.60574,
                  16.16762
                ],
                [
                  100.60467,
                  16.1656
                ],
                [
                  100.60364,
                  16.1661
                ],
                [
                  100.60293,
                  16.16405
                ],
                [
                  100.60243,
                  16.16489
                ],
                [
                  100.60189,
                  16.16334
                ],
                [
                  100.60091,
                  16.16416
                ],
                [
                  100.60063,
                  16.16246
                ],
                [
                  100.59793,
                  16.16259
                ],
                [
                  100.59743,
                  16.15992
                ],
                [
                  100.59582,
                  16.15925
                ],
                [
                  100.59537,
                  16.15773
                ],
                [
                  100.59435,
                  16.15754
                ],
                [
                  100.59294,
                  16.15944
                ],
                [
                  100.59235,
                  16.15854
                ],
                [
                  100.59155,
                  16.15926
                ],
                [
                  100.58638,
                  16.15783
                ],
                [
                  100.58627,
                  16.15647
                ],
                [
                  100.58489,
                  16.15633
                ],
                [
                  100.58291,
                  16.15376
                ],
                [
                  100.58376,
                  16.15253
                ],
                [
                  100.58178,
                  16.15271
                ],
                [
                  100.58147,
                  16.15062
                ],
                [
                  100.57829,
                  16.15099
                ],
                [
                  100.57815,
                  16.15017
                ],
                [
                  100.57504,
                  16.15216
                ],
                [
                  100.56786,
                  16.15111
                ],
                [
                  100.56433,
                  16.1498
                ],
                [
                  100.56307,
                  16.14559
                ],
                [
                  100.56264,
                  16.14967
                ],
                [
                  100.56489,
                  16.15632
                ],
                [
                  100.56079,
                  16.15447
                ],
                [
                  100.56027,
                  16.15572
                ],
                [
                  100.56128,
                  16.15694
                ],
                [
                  100.55947,
                  16.15662
                ],
                [
                  100.55892,
                  16.15514
                ],
                [
                  100.55687,
                  16.15712
                ],
                [
                  100.55224,
                  16.15498
                ],
                [
                  100.54264,
                  16.15522
                ],
                [
                  100.54049,
                  16.15387
                ],
                [
                  100.53782,
                  16.15499
                ],
                [
                  100.53526,
                  16.15414
                ],
                [
                  100.53198,
                  16.15479
                ],
                [
                  100.52965,
                  16.15266
                ],
                [
                  100.52759,
                  16.15233
                ],
                [
                  100.52582,
                  16.14828
                ],
                [
                  100.52302,
                  16.14747
                ],
                [
                  100.52231,
                  16.14615
                ],
                [
                  100.51695,
                  16.14519
                ],
                [
                  100.51513,
                  16.14743
                ],
                [
                  100.51886,
                  16.15416
                ],
                [
                  100.52312,
                  16.18382
                ],
                [
                  100.53212,
                  16.18062
                ],
                [
                  100.53309,
                  16.1903
                ],
                [
                  100.53495,
                  16.19316
                ],
                [
                  100.54021,
                  16.1958
                ],
                [
                  100.5429,
                  16.20118
                ],
                [
                  100.54072,
                  16.19979
                ],
                [
                  100.53892,
                  16.20066
                ],
                [
                  100.53411,
                  16.19767
                ],
                [
                  100.53214,
                  16.19755
                ],
                [
                  100.53044,
                  16.20236
                ],
                [
                  100.53324,
                  16.2041
                ],
                [
                  100.53325,
                  16.20543
                ],
                [
                  100.53826,
                  16.20929
                ],
                [
                  100.54052,
                  16.21278
                ],
                [
                  100.54146,
                  16.21229
                ],
                [
                  100.54247,
                  16.21339
                ],
                [
                  100.54349,
                  16.21258
                ],
                [
                  100.54575,
                  16.21487
                ],
                [
                  100.54714,
                  16.21389
                ],
                [
                  100.54914,
                  16.21455
                ],
                [
                  100.54931,
                  16.21685
                ],
                [
                  100.551,
                  16.21685
                ],
                [
                  100.55578,
                  16.22025
                ],
                [
                  100.55916,
                  16.22046
                ],
                [
                  100.56029,
                  16.21825
                ],
                [
                  100.56106,
                  16.22131
                ],
                [
                  100.56268,
                  16.2212
                ],
                [
                  100.56285,
                  16.22257
                ],
                [
                  100.56669,
                  16.22217
                ],
                [
                  100.56849,
                  16.22784
                ],
                [
                  100.57137,
                  16.22857
                ],
                [
                  100.57292,
                  16.23103
                ],
                [
                  100.57912,
                  16.22826
                ],
                [
                  100.58193,
                  16.23025
                ],
                [
                  100.58449,
                  16.23031
                ],
                [
                  100.59943,
                  16.22019
                ],
                [
                  100.59433,
                  16.21429
                ],
                [
                  100.5898,
                  16.2049
                ],
                [
                  100.59525,
                  16.20027
                ],
                [
                  100.60449,
                  16.19771
                ],
                [
                  100.60517,
                  16.19417
                ],
                [
                  100.61999,
                  16.19339
                ],
                [
                  100.61775,
                  16.18157
                ],
                [
                  100.62122,
                  16.179
                ],
                [
                  100.6194,
                  16.17671
                ],
                [
                  100.61761,
                  16.1792
                ],
                [
                  100.61566,
                  16.17769
                ]
              ]
            ]
          }
        },
        {
          "geocode": "660301",
          "tambon": "ต.โพธิ์ประทับช้าง",
          "amphoe": "อ.โพธิ์ประทับช้าง",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "โพธิ์ประทับช้าง",
          "latitude": 16.31077,
          "longitude": 100.27173,
          "sum_rainfall_mm": 111.4,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.31554,
                  16.36138
                ],
                [
                  100.31819,
                  16.36002
                ],
                [
                  100.31802,
                  16.35478
                ],
                [
                  100.32505,
                  16.33877
                ],
                [
                  100.33199,
                  16.33207
                ],
                [
                  100.33314,
                  16.32881
                ],
                [
                  100.33422,
                  16.31355
                ],
                [
                  100.32813,
                  16.30371
                ],
                [
                  100.32254,
                  16.28864
                ],
                [
                  100.31181,
                  16.27615
                ],
                [
                  100.30478,
                  16.28132
                ],
                [
                  100.29784,
                  16.28014
                ],
                [
                  100.28712,
                  16.28154
                ],
                [
                  100.28969,
                  16.29363
                ],
                [
                  100.28818,
                  16.2951
                ],
                [
                  100.28542,
                  16.2956
                ],
                [
                  100.28249,
                  16.29234
                ],
                [
                  100.27616,
                  16.30164
                ],
                [
                  100.2722,
                  16.30412
                ],
                [
                  100.27177,
                  16.30572
                ],
                [
                  100.27367,
                  16.30934
                ],
                [
                  100.26708,
                  16.31197
                ],
                [
                  100.26928,
                  16.31798
                ],
                [
                  100.26479,
                  16.31893
                ],
                [
                  100.2667,
                  16.32223
                ],
                [
                  100.26488,
                  16.3256
                ],
                [
                  100.26682,
                  16.32752
                ],
                [
                  100.27069,
                  16.32492
                ],
                [
                  100.27268,
                  16.3263
                ],
                [
                  100.27226,
                  16.32984
                ],
                [
                  100.2742,
                  16.3323
                ],
                [
                  100.27416,
                  16.33431
                ],
                [
                  100.26938,
                  16.33503
                ],
                [
                  100.26888,
                  16.3384
                ],
                [
                  100.26713,
                  16.34075
                ],
                [
                  100.27538,
                  16.35035
                ],
                [
                  100.27951,
                  16.36384
                ],
                [
                  100.29581,
                  16.36272
                ],
                [
                  100.30188,
                  16.36387
                ],
                [
                  100.31554,
                  16.36138
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670201",
          "tambon": "ต.ชนแดน",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านวังลาด",
          "latitude": 16.17415,
          "longitude": 100.911551,
          "sum_rainfall_mm": 161.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.98173,
                  16.18563
                ],
                [
                  100.98608,
                  16.18255
                ],
                [
                  100.98465,
                  16.16636
                ],
                [
                  100.98227,
                  16.15516
                ],
                [
                  100.9827,
                  16.15145
                ],
                [
                  100.98557,
                  16.14657
                ],
                [
                  100.98635,
                  16.13885
                ],
                [
                  100.98561,
                  16.13747
                ],
                [
                  100.98187,
                  16.13696
                ],
                [
                  100.98112,
                  16.13369
                ],
                [
                  100.97755,
                  16.1346
                ],
                [
                  100.97445,
                  16.13855
                ],
                [
                  100.97307,
                  16.14588
                ],
                [
                  100.96458,
                  16.14063
                ],
                [
                  100.96069,
                  16.14143
                ],
                [
                  100.95118,
                  16.13393
                ],
                [
                  100.94947,
                  16.13404
                ],
                [
                  100.94771,
                  16.13699
                ],
                [
                  100.9452,
                  16.13692
                ],
                [
                  100.94259,
                  16.1339
                ],
                [
                  100.94131,
                  16.12565
                ],
                [
                  100.93914,
                  16.12606
                ],
                [
                  100.9356,
                  16.12902
                ],
                [
                  100.93086,
                  16.12982
                ],
                [
                  100.92753,
                  16.1329
                ],
                [
                  100.92458,
                  16.13287
                ],
                [
                  100.91924,
                  16.1234
                ],
                [
                  100.90773,
                  16.10877
                ],
                [
                  100.90553,
                  16.10418
                ],
                [
                  100.88944,
                  16.09272
                ],
                [
                  100.88698,
                  16.09244
                ],
                [
                  100.88385,
                  16.09466
                ],
                [
                  100.88022,
                  16.10408
                ],
                [
                  100.86046,
                  16.11776
                ],
                [
                  100.8514,
                  16.12644
                ],
                [
                  100.84154,
                  16.13338
                ],
                [
                  100.84136,
                  16.13527
                ],
                [
                  100.84335,
                  16.13804
                ],
                [
                  100.83858,
                  16.14188
                ],
                [
                  100.83284,
                  16.1504
                ],
                [
                  100.83016,
                  16.15193
                ],
                [
                  100.82691,
                  16.15611
                ],
                [
                  100.82665,
                  16.17594
                ],
                [
                  100.82881,
                  16.18665
                ],
                [
                  100.84715,
                  16.18703
                ],
                [
                  100.84816,
                  16.18859
                ],
                [
                  100.84722,
                  16.19625
                ],
                [
                  100.84955,
                  16.19675
                ],
                [
                  100.85214,
                  16.2045
                ],
                [
                  100.85724,
                  16.2102
                ],
                [
                  100.86355,
                  16.21374
                ],
                [
                  100.86656,
                  16.21418
                ],
                [
                  100.86928,
                  16.21226
                ],
                [
                  100.86662,
                  16.21038
                ],
                [
                  100.8659,
                  16.20842
                ],
                [
                  100.8672,
                  16.19933
                ],
                [
                  100.87805,
                  16.20454
                ],
                [
                  100.87895,
                  16.2136
                ],
                [
                  100.8903,
                  16.21482
                ],
                [
                  100.90251,
                  16.21906
                ],
                [
                  100.90351,
                  16.21813
                ],
                [
                  100.90866,
                  16.20167
                ],
                [
                  100.9157,
                  16.19569
                ],
                [
                  100.9144,
                  16.18874
                ],
                [
                  100.91541,
                  16.18223
                ],
                [
                  100.9298,
                  16.15626
                ],
                [
                  100.92981,
                  16.14973
                ],
                [
                  100.93168,
                  16.14525
                ],
                [
                  100.93672,
                  16.14472
                ],
                [
                  100.94883,
                  16.14624
                ],
                [
                  100.95235,
                  16.14825
                ],
                [
                  100.95456,
                  16.15739
                ],
                [
                  100.95444,
                  16.16524
                ],
                [
                  100.94975,
                  16.17624
                ],
                [
                  100.9506,
                  16.1819
                ],
                [
                  100.95288,
                  16.18486
                ],
                [
                  100.95739,
                  16.18667
                ],
                [
                  100.95963,
                  16.18631
                ],
                [
                  100.96667,
                  16.18033
                ],
                [
                  100.97184,
                  16.17987
                ],
                [
                  100.97668,
                  16.18119
                ],
                [
                  100.98173,
                  16.18563
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 161.8,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.90748,
                  14.08554
                ],
                [
                  101.89125,
                  14.07328
                ],
                [
                  101.89207,
                  14.06922
                ],
                [
                  101.8969,
                  14.05955
                ],
                [
                  101.89825,
                  14.05424
                ],
                [
                  101.89707,
                  14.05252
                ],
                [
                  101.89771,
                  14.05106
                ],
                [
                  101.89482,
                  14.05064
                ],
                [
                  101.89319,
                  14.04888
                ],
                [
                  101.89149,
                  14.04931
                ],
                [
                  101.89082,
                  14.0477
                ],
                [
                  101.88913,
                  14.04953
                ],
                [
                  101.88607,
                  14.04909
                ],
                [
                  101.88601,
                  14.04538
                ],
                [
                  101.88042,
                  14.04299
                ],
                [
                  101.87829,
                  14.03767
                ],
                [
                  101.87523,
                  14.03927
                ],
                [
                  101.87303,
                  14.03759
                ],
                [
                  101.87071,
                  14.03904
                ],
                [
                  101.86713,
                  14.03932
                ],
                [
                  101.86597,
                  14.03617
                ],
                [
                  101.86632,
                  14.03262
                ],
                [
                  101.86355,
                  14.02767
                ],
                [
                  101.85937,
                  14.02358
                ],
                [
                  101.85459,
                  14.0246
                ],
                [
                  101.85164,
                  14.02914
                ],
                [
                  101.84791,
                  14.03028
                ],
                [
                  101.84643,
                  14.02699
                ],
                [
                  101.84511,
                  14.02642
                ],
                [
                  101.84262,
                  14.02819
                ],
                [
                  101.84121,
                  14.03093
                ],
                [
                  101.83954,
                  14.0303
                ],
                [
                  101.83834,
                  14.02451
                ],
                [
                  101.8369,
                  14.02393
                ],
                [
                  101.83311,
                  14.0275
                ],
                [
                  101.83261,
                  14.02974
                ],
                [
                  101.82866,
                  14.02939
                ],
                [
                  101.82752,
                  14.02789
                ],
                [
                  101.82509,
                  14.02931
                ],
                [
                  101.82453,
                  14.03059
                ],
                [
                  101.82565,
                  14.03347
                ],
                [
                  101.82209,
                  14.03375
                ],
                [
                  101.82138,
                  14.03903
                ],
                [
                  101.81648,
                  14.03976
                ],
                [
                  101.80957,
                  14.04309
                ],
                [
                  101.80582,
                  14.04219
                ],
                [
                  101.80274,
                  14.04317
                ],
                [
                  101.79705,
                  14.04828
                ],
                [
                  101.79309,
                  14.04609
                ],
                [
                  101.7864,
                  14.04512
                ],
                [
                  101.78276,
                  14.04804
                ],
                [
                  101.77925,
                  14.04615
                ],
                [
                  101.77528,
                  14.04837
                ],
                [
                  101.77653,
                  14.05213
                ],
                [
                  101.77954,
                  14.04873
                ],
                [
                  101.78236,
                  14.05061
                ],
                [
                  101.78453,
                  14.05068
                ],
                [
                  101.79117,
                  14.05776
                ],
                [
                  101.79156,
                  14.06065
                ],
                [
                  101.79063,
                  14.06218
                ],
                [
                  101.79164,
                  14.0696
                ],
                [
                  101.79377,
                  14.0723
                ],
                [
                  101.79476,
                  14.0761
                ],
                [
                  101.80143,
                  14.07852
                ],
                [
                  101.80329,
                  14.08074
                ],
                [
                  101.80346,
                  14.08877
                ],
                [
                  101.80569,
                  14.09227
                ],
                [
                  101.80583,
                  14.09492
                ],
                [
                  101.80914,
                  14.09779
                ],
                [
                  101.80934,
                  14.10144
                ],
                [
                  101.81121,
                  14.09664
                ],
                [
                  101.81553,
                  14.09699
                ],
                [
                  101.81714,
                  14.09986
                ],
                [
                  101.81992,
                  14.09707
                ],
                [
                  101.82377,
                  14.10002
                ],
                [
                  101.82465,
                  14.09751
                ],
                [
                  101.82131,
                  14.09254
                ],
                [
                  101.82282,
                  14.0909
                ],
                [
                  101.82656,
                  14.09017
                ],
                [
                  101.84078,
                  14.10643
                ],
                [
                  101.85334,
                  14.10028
                ],
                [
                  101.85569,
                  14.10835
                ],
                [
                  101.85689,
                  14.10429
                ],
                [
                  101.86492,
                  14.09687
                ],
                [
                  101.86607,
                  14.10217
                ],
                [
                  101.86375,
                  14.10489
                ],
                [
                  101.86337,
                  14.1119
                ],
                [
                  101.86766,
                  14.11422
                ],
                [
                  101.86971,
                  14.11278
                ],
                [
                  101.87372,
                  14.11283
                ],
                [
                  101.8798,
                  14.12352
                ],
                [
                  101.88456,
                  14.11958
                ],
                [
                  101.88745,
                  14.11875
                ],
                [
                  101.88942,
                  14.11642
                ],
                [
                  101.89829,
                  14.10369
                ],
                [
                  101.90748,
                  14.08554
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250304",
          "tambon": "ต.ทุ่งโพธิ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองห้วยยาง",
          "latitude": 14.136408,
          "longitude": 101.857475,
          "sum_rainfall_mm": 174.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.99619,
                  14.21169
                ],
                [
                  101.99717,
                  14.21014
                ],
                [
                  102.01111,
                  14.20305
                ],
                [
                  102.03154,
                  14.19821
                ],
                [
                  102.02736,
                  14.19534
                ],
                [
                  102.0223,
                  14.19437
                ],
                [
                  102.01981,
                  14.18634
                ],
                [
                  102.01332,
                  14.17787
                ],
                [
                  102.01056,
                  14.168
                ],
                [
                  102.0041,
                  14.16354
                ],
                [
                  102.00474,
                  14.15985
                ],
                [
                  102.00962,
                  14.15768
                ],
                [
                  102.00879,
                  14.15151
                ],
                [
                  102.00028,
                  14.15042
                ],
                [
                  101.99154,
                  14.1525
                ],
                [
                  101.9902,
                  14.15371
                ],
                [
                  101.98916,
                  14.15777
                ],
                [
                  101.98611,
                  14.15903
                ],
                [
                  101.97904,
                  14.1566
                ],
                [
                  101.97149,
                  14.15766
                ],
                [
                  101.96708,
                  14.15546
                ],
                [
                  101.9656,
                  14.15187
                ],
                [
                  101.96154,
                  14.15003
                ],
                [
                  101.96276,
                  14.14722
                ],
                [
                  101.96246,
                  14.14438
                ],
                [
                  101.96529,
                  14.14215
                ],
                [
                  101.96472,
                  14.13485
                ],
                [
                  101.95876,
                  14.12797
                ],
                [
                  101.95731,
                  14.1227
                ],
                [
                  101.95491,
                  14.12248
                ],
                [
                  101.954,
                  14.12068
                ],
                [
                  101.95021,
                  14.11966
                ],
                [
                  101.9516,
                  14.11793
                ],
                [
                  101.94678,
                  14.10287
                ],
                [
                  101.94157,
                  14.10093
                ],
                [
                  101.93908,
                  14.09813
                ],
                [
                  101.92962,
                  14.0926
                ],
                [
                  101.92425,
                  14.08456
                ],
                [
                  101.92304,
                  14.08447
                ],
                [
                  101.91996,
                  14.08807
                ],
                [
                  101.90748,
                  14.08554
                ],
                [
                  101.89829,
                  14.10369
                ],
                [
                  101.88967,
                  14.11607
                ],
                [
                  101.88745,
                  14.11875
                ],
                [
                  101.88456,
                  14.11958
                ],
                [
                  101.88018,
                  14.12356
                ],
                [
                  101.87372,
                  14.11283
                ],
                [
                  101.86971,
                  14.11278
                ],
                [
                  101.86766,
                  14.11422
                ],
                [
                  101.86337,
                  14.1119
                ],
                [
                  101.86375,
                  14.10489
                ],
                [
                  101.86607,
                  14.10217
                ],
                [
                  101.86492,
                  14.09687
                ],
                [
                  101.85689,
                  14.10429
                ],
                [
                  101.85569,
                  14.10835
                ],
                [
                  101.85334,
                  14.10028
                ],
                [
                  101.84078,
                  14.10643
                ],
                [
                  101.8522,
                  14.11871
                ],
                [
                  101.85167,
                  14.12037
                ],
                [
                  101.84796,
                  14.12237
                ],
                [
                  101.84995,
                  14.12652
                ],
                [
                  101.85331,
                  14.12681
                ],
                [
                  101.85636,
                  14.12408
                ],
                [
                  101.85658,
                  14.1254
                ],
                [
                  101.85468,
                  14.12746
                ],
                [
                  101.85544,
                  14.13176
                ],
                [
                  101.85806,
                  14.13794
                ],
                [
                  101.86254,
                  14.1433
                ],
                [
                  101.86958,
                  14.1568
                ],
                [
                  101.87123,
                  14.16316
                ],
                [
                  101.8681,
                  14.16545
                ],
                [
                  101.86251,
                  14.16218
                ],
                [
                  101.86155,
                  14.16535
                ],
                [
                  101.86236,
                  14.16965
                ],
                [
                  101.86417,
                  14.1716
                ],
                [
                  101.87044,
                  14.18543
                ],
                [
                  101.87244,
                  14.18476
                ],
                [
                  101.87217,
                  14.17973
                ],
                [
                  101.87912,
                  14.1728
                ],
                [
                  101.88509,
                  14.16463
                ],
                [
                  101.88404,
                  14.16149
                ],
                [
                  101.88485,
                  14.16085
                ],
                [
                  101.88657,
                  14.16207
                ],
                [
                  101.88813,
                  14.16159
                ],
                [
                  101.88984,
                  14.16619
                ],
                [
                  101.8937,
                  14.16738
                ],
                [
                  101.89401,
                  14.17005
                ],
                [
                  101.89626,
                  14.16749
                ],
                [
                  101.90368,
                  14.16766
                ],
                [
                  101.90821,
                  14.16921
                ],
                [
                  101.90855,
                  14.16647
                ],
                [
                  101.91059,
                  14.16475
                ],
                [
                  101.91297,
                  14.16429
                ],
                [
                  101.91511,
                  14.16543
                ],
                [
                  101.91892,
                  14.16195
                ],
                [
                  101.92172,
                  14.16494
                ],
                [
                  101.92422,
                  14.16459
                ],
                [
                  101.92823,
                  14.16711
                ],
                [
                  101.93077,
                  14.17193
                ],
                [
                  101.93244,
                  14.17224
                ],
                [
                  101.93354,
                  14.17068
                ],
                [
                  101.93522,
                  14.17048
                ],
                [
                  101.93876,
                  14.17654
                ],
                [
                  101.93623,
                  14.17452
                ],
                [
                  101.93282,
                  14.17635
                ],
                [
                  101.92928,
                  14.1764
                ],
                [
                  101.9279,
                  14.17927
                ],
                [
                  101.92844,
                  14.18222
                ],
                [
                  101.92695,
                  14.18345
                ],
                [
                  101.92376,
                  14.18187
                ],
                [
                  101.9199,
                  14.18271
                ],
                [
                  101.92124,
                  14.18545
                ],
                [
                  101.92848,
                  14.18935
                ],
                [
                  101.93329,
                  14.1884
                ],
                [
                  101.93404,
                  14.18612
                ],
                [
                  101.9374,
                  14.18722
                ],
                [
                  101.94204,
                  14.18663
                ],
                [
                  101.96365,
                  14.17337
                ],
                [
                  101.96874,
                  14.17278
                ],
                [
                  101.97088,
                  14.17119
                ],
                [
                  101.97527,
                  14.17342
                ],
                [
                  101.97401,
                  14.18054
                ],
                [
                  101.97225,
                  14.18299
                ],
                [
                  101.97299,
                  14.18774
                ],
                [
                  101.97147,
                  14.19126
                ],
                [
                  101.97181,
                  14.1934
                ],
                [
                  101.97361,
                  14.19372
                ],
                [
                  101.97732,
                  14.19767
                ],
                [
                  101.97896,
                  14.20191
                ],
                [
                  101.98642,
                  14.21179
                ],
                [
                  101.99001,
                  14.21301
                ],
                [
                  101.99409,
                  14.2104
                ],
                [
                  101.99619,
                  14.21169
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
          "sum_rainfall_mm": 168.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
        }
      ],
      "area_nearby": [
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
          "sum_rainfall_mm": 112.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.76061,
                  15.66908
                ],
                [
                  100.76181,
                  15.66606
                ],
                [
                  100.76085,
                  15.66538
                ],
                [
                  100.75131,
                  15.66762
                ],
                [
                  100.75631,
                  15.65689
                ],
                [
                  100.75636,
                  15.65431
                ],
                [
                  100.76044,
                  15.6501
                ],
                [
                  100.75896,
                  15.64534
                ],
                [
                  100.7548,
                  15.64215
                ],
                [
                  100.74669,
                  15.64066
                ],
                [
                  100.7424,
                  15.63731
                ],
                [
                  100.73849,
                  15.63665
                ],
                [
                  100.73429,
                  15.63322
                ],
                [
                  100.7258,
                  15.63238
                ],
                [
                  100.7253,
                  15.63058
                ],
                [
                  100.72841,
                  15.62835
                ],
                [
                  100.72946,
                  15.62291
                ],
                [
                  100.7338,
                  15.61806
                ],
                [
                  100.7333,
                  15.61662
                ],
                [
                  100.72791,
                  15.61476
                ],
                [
                  100.71794,
                  15.60846
                ],
                [
                  100.71021,
                  15.60727
                ],
                [
                  100.69865,
                  15.60768
                ],
                [
                  100.69567,
                  15.60614
                ],
                [
                  100.6949,
                  15.60292
                ],
                [
                  100.69549,
                  15.59284
                ],
                [
                  100.69015,
                  15.58755
                ],
                [
                  100.69328,
                  15.58324
                ],
                [
                  100.69619,
                  15.57561
                ],
                [
                  100.69598,
                  15.57098
                ],
                [
                  100.69341,
                  15.56584
                ],
                [
                  100.69082,
                  15.56653
                ],
                [
                  100.68587,
                  15.56394
                ],
                [
                  100.68003,
                  15.56532
                ],
                [
                  100.67351,
                  15.56166
                ],
                [
                  100.66288,
                  15.56315
                ],
                [
                  100.65592,
                  15.56178
                ],
                [
                  100.64572,
                  15.56228
                ],
                [
                  100.63845,
                  15.5658
                ],
                [
                  100.63769,
                  15.56675
                ],
                [
                  100.63924,
                  15.57164
                ],
                [
                  100.64479,
                  15.57901
                ],
                [
                  100.64432,
                  15.58464
                ],
                [
                  100.6453,
                  15.59025
                ],
                [
                  100.64289,
                  15.59986
                ],
                [
                  100.64553,
                  15.60555
                ],
                [
                  100.64529,
                  15.61157
                ],
                [
                  100.63922,
                  15.62813
                ],
                [
                  100.64373,
                  15.64105
                ],
                [
                  100.64269,
                  15.64871
                ],
                [
                  100.64489,
                  15.6634
                ],
                [
                  100.65295,
                  15.6625
                ],
                [
                  100.6561,
                  15.65874
                ],
                [
                  100.66541,
                  15.65507
                ],
                [
                  100.67177,
                  15.64817
                ],
                [
                  100.68192,
                  15.64556
                ],
                [
                  100.68634,
                  15.65308
                ],
                [
                  100.69606,
                  15.66078
                ],
                [
                  100.69938,
                  15.66605
                ],
                [
                  100.71324,
                  15.67455
                ],
                [
                  100.72734,
                  15.68637
                ],
                [
                  100.7376,
                  15.6981
                ],
                [
                  100.75114,
                  15.69311
                ],
                [
                  100.75621,
                  15.68832
                ],
                [
                  100.75742,
                  15.68873
                ],
                [
                  100.75701,
                  15.69116
                ],
                [
                  100.75794,
                  15.69292
                ],
                [
                  100.76139,
                  15.69144
                ],
                [
                  100.75971,
                  15.675
                ],
                [
                  100.76061,
                  15.66908
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 37.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.82698,
                  15.66433
                ],
                [
                  100.8232,
                  15.66211
                ],
                [
                  100.8265,
                  15.64603
                ],
                [
                  100.82181,
                  15.63895
                ],
                [
                  100.81836,
                  15.63097
                ],
                [
                  100.81926,
                  15.62584
                ],
                [
                  100.82186,
                  15.62247
                ],
                [
                  100.82298,
                  15.61715
                ],
                [
                  100.82501,
                  15.61402
                ],
                [
                  100.81986,
                  15.60752
                ],
                [
                  100.81714,
                  15.60192
                ],
                [
                  100.81213,
                  15.6022
                ],
                [
                  100.8115,
                  15.59812
                ],
                [
                  100.80855,
                  15.59632
                ],
                [
                  100.80839,
                  15.59427
                ],
                [
                  100.8185,
                  15.58608
                ],
                [
                  100.81376,
                  15.57898
                ],
                [
                  100.81831,
                  15.57687
                ],
                [
                  100.82442,
                  15.57203
                ],
                [
                  100.82814,
                  15.56584
                ],
                [
                  100.83217,
                  15.56367
                ],
                [
                  100.81541,
                  15.55203
                ],
                [
                  100.8076,
                  15.54971
                ],
                [
                  100.79777,
                  15.5438
                ],
                [
                  100.79419,
                  15.53908
                ],
                [
                  100.79351,
                  15.54015
                ],
                [
                  100.78959,
                  15.5377
                ],
                [
                  100.78195,
                  15.53785
                ],
                [
                  100.77645,
                  15.53486
                ],
                [
                  100.77142,
                  15.53529
                ],
                [
                  100.76918,
                  15.53429
                ],
                [
                  100.76416,
                  15.5285
                ],
                [
                  100.75803,
                  15.52549
                ],
                [
                  100.75933,
                  15.52354
                ],
                [
                  100.75953,
                  15.51905
                ],
                [
                  100.75429,
                  15.5138
                ],
                [
                  100.74667,
                  15.51363
                ],
                [
                  100.74517,
                  15.51181
                ],
                [
                  100.74086,
                  15.51481
                ],
                [
                  100.73175,
                  15.52456
                ],
                [
                  100.72783,
                  15.53158
                ],
                [
                  100.72847,
                  15.53742
                ],
                [
                  100.72511,
                  15.54739
                ],
                [
                  100.72125,
                  15.55385
                ],
                [
                  100.71482,
                  15.55768
                ],
                [
                  100.70999,
                  15.55796
                ],
                [
                  100.69905,
                  15.56118
                ],
                [
                  100.69341,
                  15.56584
                ],
                [
                  100.69598,
                  15.57098
                ],
                [
                  100.69619,
                  15.57561
                ],
                [
                  100.69328,
                  15.58324
                ],
                [
                  100.69015,
                  15.58755
                ],
                [
                  100.69549,
                  15.59284
                ],
                [
                  100.6949,
                  15.60292
                ],
                [
                  100.69567,
                  15.60614
                ],
                [
                  100.69865,
                  15.60768
                ],
                [
                  100.71021,
                  15.60727
                ],
                [
                  100.71794,
                  15.60846
                ],
                [
                  100.72791,
                  15.61476
                ],
                [
                  100.7333,
                  15.61662
                ],
                [
                  100.7338,
                  15.61806
                ],
                [
                  100.72946,
                  15.62291
                ],
                [
                  100.72841,
                  15.62835
                ],
                [
                  100.7253,
                  15.63058
                ],
                [
                  100.7258,
                  15.63238
                ],
                [
                  100.73429,
                  15.63322
                ],
                [
                  100.73849,
                  15.63665
                ],
                [
                  100.7424,
                  15.63731
                ],
                [
                  100.74669,
                  15.64066
                ],
                [
                  100.7548,
                  15.64215
                ],
                [
                  100.75948,
                  15.64628
                ],
                [
                  100.76044,
                  15.6501
                ],
                [
                  100.75636,
                  15.65431
                ],
                [
                  100.75389,
                  15.66318
                ],
                [
                  100.75128,
                  15.66701
                ],
                [
                  100.75182,
                  15.66815
                ],
                [
                  100.76085,
                  15.66538
                ],
                [
                  100.76181,
                  15.66606
                ],
                [
                  100.76061,
                  15.66908
                ],
                [
                  100.765,
                  15.66863
                ],
                [
                  100.773,
                  15.67094
                ],
                [
                  100.7879,
                  15.67122
                ],
                [
                  100.79757,
                  15.66865
                ],
                [
                  100.81444,
                  15.66836
                ],
                [
                  100.82698,
                  15.66433
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 3.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.82698,
                  15.66433
                ],
                [
                  100.8232,
                  15.66211
                ],
                [
                  100.8265,
                  15.64603
                ],
                [
                  100.82181,
                  15.63895
                ],
                [
                  100.81836,
                  15.63097
                ],
                [
                  100.81926,
                  15.62584
                ],
                [
                  100.82186,
                  15.62247
                ],
                [
                  100.82298,
                  15.61715
                ],
                [
                  100.82501,
                  15.61402
                ],
                [
                  100.81986,
                  15.60752
                ],
                [
                  100.81714,
                  15.60192
                ],
                [
                  100.81213,
                  15.6022
                ],
                [
                  100.8115,
                  15.59812
                ],
                [
                  100.80855,
                  15.59632
                ],
                [
                  100.80839,
                  15.59427
                ],
                [
                  100.8185,
                  15.58608
                ],
                [
                  100.81376,
                  15.57898
                ],
                [
                  100.81831,
                  15.57687
                ],
                [
                  100.82442,
                  15.57203
                ],
                [
                  100.82814,
                  15.56584
                ],
                [
                  100.83217,
                  15.56367
                ],
                [
                  100.81541,
                  15.55203
                ],
                [
                  100.8076,
                  15.54971
                ],
                [
                  100.79777,
                  15.5438
                ],
                [
                  100.79419,
                  15.53908
                ],
                [
                  100.79351,
                  15.54015
                ],
                [
                  100.78959,
                  15.5377
                ],
                [
                  100.78195,
                  15.53785
                ],
                [
                  100.77645,
                  15.53486
                ],
                [
                  100.77142,
                  15.53529
                ],
                [
                  100.76918,
                  15.53429
                ],
                [
                  100.76416,
                  15.5285
                ],
                [
                  100.75803,
                  15.52549
                ],
                [
                  100.75933,
                  15.52354
                ],
                [
                  100.75953,
                  15.51905
                ],
                [
                  100.75429,
                  15.5138
                ],
                [
                  100.74667,
                  15.51363
                ],
                [
                  100.74517,
                  15.51181
                ],
                [
                  100.74086,
                  15.51481
                ],
                [
                  100.73175,
                  15.52456
                ],
                [
                  100.72783,
                  15.53158
                ],
                [
                  100.72847,
                  15.53742
                ],
                [
                  100.72511,
                  15.54739
                ],
                [
                  100.72125,
                  15.55385
                ],
                [
                  100.71482,
                  15.55768
                ],
                [
                  100.70999,
                  15.55796
                ],
                [
                  100.69905,
                  15.56118
                ],
                [
                  100.69341,
                  15.56584
                ],
                [
                  100.69598,
                  15.57098
                ],
                [
                  100.69619,
                  15.57561
                ],
                [
                  100.69328,
                  15.58324
                ],
                [
                  100.69015,
                  15.58755
                ],
                [
                  100.69549,
                  15.59284
                ],
                [
                  100.6949,
                  15.60292
                ],
                [
                  100.69567,
                  15.60614
                ],
                [
                  100.69865,
                  15.60768
                ],
                [
                  100.71021,
                  15.60727
                ],
                [
                  100.71794,
                  15.60846
                ],
                [
                  100.72791,
                  15.61476
                ],
                [
                  100.7333,
                  15.61662
                ],
                [
                  100.7338,
                  15.61806
                ],
                [
                  100.72946,
                  15.62291
                ],
                [
                  100.72841,
                  15.62835
                ],
                [
                  100.7253,
                  15.63058
                ],
                [
                  100.7258,
                  15.63238
                ],
                [
                  100.73429,
                  15.63322
                ],
                [
                  100.73849,
                  15.63665
                ],
                [
                  100.7424,
                  15.63731
                ],
                [
                  100.74669,
                  15.64066
                ],
                [
                  100.7548,
                  15.64215
                ],
                [
                  100.75948,
                  15.64628
                ],
                [
                  100.76044,
                  15.6501
                ],
                [
                  100.75636,
                  15.65431
                ],
                [
                  100.75389,
                  15.66318
                ],
                [
                  100.75128,
                  15.66701
                ],
                [
                  100.75182,
                  15.66815
                ],
                [
                  100.76085,
                  15.66538
                ],
                [
                  100.76181,
                  15.66606
                ],
                [
                  100.76061,
                  15.66908
                ],
                [
                  100.765,
                  15.66863
                ],
                [
                  100.773,
                  15.67094
                ],
                [
                  100.7879,
                  15.67122
                ],
                [
                  100.79757,
                  15.66865
                ],
                [
                  100.81444,
                  15.66836
                ],
                [
                  100.82698,
                  15.66433
                ]
              ]
            ]
          }
        },
        {
          "geocode": "661102",
          "tambon": "ต.วังงิ้ว",
          "amphoe": "อ.ดงเจริญ",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.วังงิ้ว",
          "latitude": 16.01561,
          "longitude": 100.73281,
          "sum_rainfall_mm": 133.39999999999998,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.74657,
                  16.01148
                ],
                [
                  100.76029,
                  16.00951
                ],
                [
                  100.76112,
                  16.00711
                ],
                [
                  100.76252,
                  16.00693
                ],
                [
                  100.76343,
                  16.00534
                ],
                [
                  100.76663,
                  16.00556
                ],
                [
                  100.76889,
                  16.00386
                ],
                [
                  100.76935,
                  16.00201
                ],
                [
                  100.76796,
                  16.00049
                ],
                [
                  100.76924,
                  15.99844
                ],
                [
                  100.77224,
                  15.9997
                ],
                [
                  100.77211,
                  15.99878
                ],
                [
                  100.77667,
                  15.99845
                ],
                [
                  100.78489,
                  15.99221
                ],
                [
                  100.78291,
                  15.98235
                ],
                [
                  100.78412,
                  15.98117
                ],
                [
                  100.78042,
                  15.97818
                ],
                [
                  100.77785,
                  15.97245
                ],
                [
                  100.7794,
                  15.96812
                ],
                [
                  100.77805,
                  15.96604
                ],
                [
                  100.78491,
                  15.96244
                ],
                [
                  100.78691,
                  15.95994
                ],
                [
                  100.79114,
                  15.95823
                ],
                [
                  100.79133,
                  15.955
                ],
                [
                  100.79403,
                  15.95185
                ],
                [
                  100.79376,
                  15.94637
                ],
                [
                  100.79556,
                  15.94242
                ],
                [
                  100.79767,
                  15.94151
                ],
                [
                  100.7968,
                  15.94078
                ],
                [
                  100.79901,
                  15.93722
                ],
                [
                  100.79812,
                  15.93537
                ],
                [
                  100.78929,
                  15.93644
                ],
                [
                  100.78501,
                  15.93337
                ],
                [
                  100.78108,
                  15.93511
                ],
                [
                  100.77831,
                  15.93014
                ],
                [
                  100.76865,
                  15.92949
                ],
                [
                  100.76641,
                  15.9314
                ],
                [
                  100.76793,
                  15.93304
                ],
                [
                  100.76768,
                  15.93554
                ],
                [
                  100.76391,
                  15.93684
                ],
                [
                  100.75614,
                  15.9425
                ],
                [
                  100.7542,
                  15.95058
                ],
                [
                  100.75096,
                  15.95511
                ],
                [
                  100.74997,
                  15.95912
                ],
                [
                  100.75036,
                  15.96927
                ],
                [
                  100.74563,
                  15.97496
                ],
                [
                  100.74541,
                  15.98056
                ],
                [
                  100.74382,
                  15.98103
                ],
                [
                  100.74403,
                  15.9827
                ],
                [
                  100.74244,
                  15.98532
                ],
                [
                  100.73865,
                  15.98615
                ],
                [
                  100.73783,
                  15.98924
                ],
                [
                  100.73075,
                  15.99056
                ],
                [
                  100.71915,
                  15.9885
                ],
                [
                  100.71112,
                  15.98986
                ],
                [
                  100.70226,
                  15.98931
                ],
                [
                  100.68972,
                  15.99339
                ],
                [
                  100.68238,
                  15.99983
                ],
                [
                  100.69015,
                  16.02701
                ],
                [
                  100.69307,
                  16.02619
                ],
                [
                  100.69394,
                  16.02415
                ],
                [
                  100.7016,
                  16.02537
                ],
                [
                  100.70664,
                  16.02432
                ],
                [
                  100.71302,
                  16.02589
                ],
                [
                  100.72046,
                  16.0233
                ],
                [
                  100.7271,
                  16.0224
                ],
                [
                  100.73323,
                  16.0193
                ],
                [
                  100.73535,
                  16.01695
                ],
                [
                  100.74397,
                  16.01359
                ],
                [
                  100.74384,
                  16.0121
                ],
                [
                  100.74657,
                  16.01148
                ]
              ]
            ]
          }
        },
        {
          "geocode": "660801",
          "tambon": "ต.ทับคล้อ",
          "amphoe": "อ.ทับคล้อ",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.ทับคล้อ",
          "latitude": 16.16959,
          "longitude": 100.566,
          "sum_rainfall_mm": 110.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.61566,
                  16.17769
                ],
                [
                  100.61451,
                  16.17723
                ],
                [
                  100.61461,
                  16.17548
                ],
                [
                  100.61275,
                  16.17589
                ],
                [
                  100.61268,
                  16.17363
                ],
                [
                  100.61188,
                  16.1733
                ],
                [
                  100.61173,
                  16.1743
                ],
                [
                  100.61132,
                  16.17254
                ],
                [
                  100.60923,
                  16.17115
                ],
                [
                  100.60977,
                  16.17011
                ],
                [
                  100.60574,
                  16.16762
                ],
                [
                  100.60467,
                  16.1656
                ],
                [
                  100.60364,
                  16.1661
                ],
                [
                  100.60293,
                  16.16405
                ],
                [
                  100.60243,
                  16.16489
                ],
                [
                  100.60189,
                  16.16334
                ],
                [
                  100.60091,
                  16.16416
                ],
                [
                  100.60063,
                  16.16246
                ],
                [
                  100.59793,
                  16.16259
                ],
                [
                  100.59743,
                  16.15992
                ],
                [
                  100.59582,
                  16.15925
                ],
                [
                  100.59537,
                  16.15773
                ],
                [
                  100.59435,
                  16.15754
                ],
                [
                  100.59294,
                  16.15944
                ],
                [
                  100.59235,
                  16.15854
                ],
                [
                  100.59155,
                  16.15926
                ],
                [
                  100.58638,
                  16.15783
                ],
                [
                  100.58627,
                  16.15647
                ],
                [
                  100.58489,
                  16.15633
                ],
                [
                  100.58291,
                  16.15376
                ],
                [
                  100.58376,
                  16.15253
                ],
                [
                  100.58178,
                  16.15271
                ],
                [
                  100.58147,
                  16.15062
                ],
                [
                  100.57829,
                  16.15099
                ],
                [
                  100.57815,
                  16.15017
                ],
                [
                  100.57504,
                  16.15216
                ],
                [
                  100.56786,
                  16.15111
                ],
                [
                  100.56433,
                  16.1498
                ],
                [
                  100.56307,
                  16.14559
                ],
                [
                  100.56264,
                  16.14967
                ],
                [
                  100.56489,
                  16.15632
                ],
                [
                  100.56079,
                  16.15447
                ],
                [
                  100.56027,
                  16.15572
                ],
                [
                  100.56128,
                  16.15694
                ],
                [
                  100.55947,
                  16.15662
                ],
                [
                  100.55892,
                  16.15514
                ],
                [
                  100.55687,
                  16.15712
                ],
                [
                  100.55224,
                  16.15498
                ],
                [
                  100.54264,
                  16.15522
                ],
                [
                  100.54049,
                  16.15387
                ],
                [
                  100.53782,
                  16.15499
                ],
                [
                  100.53526,
                  16.15414
                ],
                [
                  100.53198,
                  16.15479
                ],
                [
                  100.52965,
                  16.15266
                ],
                [
                  100.52759,
                  16.15233
                ],
                [
                  100.52582,
                  16.14828
                ],
                [
                  100.52302,
                  16.14747
                ],
                [
                  100.52231,
                  16.14615
                ],
                [
                  100.51695,
                  16.14519
                ],
                [
                  100.51513,
                  16.14743
                ],
                [
                  100.51886,
                  16.15416
                ],
                [
                  100.52312,
                  16.18382
                ],
                [
                  100.53212,
                  16.18062
                ],
                [
                  100.53309,
                  16.1903
                ],
                [
                  100.53495,
                  16.19316
                ],
                [
                  100.54021,
                  16.1958
                ],
                [
                  100.5429,
                  16.20118
                ],
                [
                  100.54072,
                  16.19979
                ],
                [
                  100.53892,
                  16.20066
                ],
                [
                  100.53411,
                  16.19767
                ],
                [
                  100.53214,
                  16.19755
                ],
                [
                  100.53044,
                  16.20236
                ],
                [
                  100.53324,
                  16.2041
                ],
                [
                  100.53325,
                  16.20543
                ],
                [
                  100.53826,
                  16.20929
                ],
                [
                  100.54052,
                  16.21278
                ],
                [
                  100.54146,
                  16.21229
                ],
                [
                  100.54247,
                  16.21339
                ],
                [
                  100.54349,
                  16.21258
                ],
                [
                  100.54575,
                  16.21487
                ],
                [
                  100.54714,
                  16.21389
                ],
                [
                  100.54914,
                  16.21455
                ],
                [
                  100.54931,
                  16.21685
                ],
                [
                  100.551,
                  16.21685
                ],
                [
                  100.55578,
                  16.22025
                ],
                [
                  100.55916,
                  16.22046
                ],
                [
                  100.56029,
                  16.21825
                ],
                [
                  100.56106,
                  16.22131
                ],
                [
                  100.56268,
                  16.2212
                ],
                [
                  100.56285,
                  16.22257
                ],
                [
                  100.56669,
                  16.22217
                ],
                [
                  100.56849,
                  16.22784
                ],
                [
                  100.57137,
                  16.22857
                ],
                [
                  100.57292,
                  16.23103
                ],
                [
                  100.57912,
                  16.22826
                ],
                [
                  100.58193,
                  16.23025
                ],
                [
                  100.58449,
                  16.23031
                ],
                [
                  100.59943,
                  16.22019
                ],
                [
                  100.59433,
                  16.21429
                ],
                [
                  100.5898,
                  16.2049
                ],
                [
                  100.59525,
                  16.20027
                ],
                [
                  100.60449,
                  16.19771
                ],
                [
                  100.60517,
                  16.19417
                ],
                [
                  100.61999,
                  16.19339
                ],
                [
                  100.61775,
                  16.18157
                ],
                [
                  100.62122,
                  16.179
                ],
                [
                  100.6194,
                  16.17671
                ],
                [
                  100.61761,
                  16.1792
                ],
                [
                  100.61566,
                  16.17769
                ]
              ]
            ]
          }
        },
        {
          "geocode": "660301",
          "tambon": "ต.โพธิ์ประทับช้าง",
          "amphoe": "อ.โพธิ์ประทับช้าง",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "โพธิ์ประทับช้าง",
          "latitude": 16.31077,
          "longitude": 100.27173,
          "sum_rainfall_mm": 111.4,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.31554,
                  16.36138
                ],
                [
                  100.31819,
                  16.36002
                ],
                [
                  100.31802,
                  16.35478
                ],
                [
                  100.32505,
                  16.33877
                ],
                [
                  100.33199,
                  16.33207
                ],
                [
                  100.33314,
                  16.32881
                ],
                [
                  100.33422,
                  16.31355
                ],
                [
                  100.32813,
                  16.30371
                ],
                [
                  100.32254,
                  16.28864
                ],
                [
                  100.31181,
                  16.27615
                ],
                [
                  100.30478,
                  16.28132
                ],
                [
                  100.29784,
                  16.28014
                ],
                [
                  100.28712,
                  16.28154
                ],
                [
                  100.28969,
                  16.29363
                ],
                [
                  100.28818,
                  16.2951
                ],
                [
                  100.28542,
                  16.2956
                ],
                [
                  100.28249,
                  16.29234
                ],
                [
                  100.27616,
                  16.30164
                ],
                [
                  100.2722,
                  16.30412
                ],
                [
                  100.27177,
                  16.30572
                ],
                [
                  100.27367,
                  16.30934
                ],
                [
                  100.26708,
                  16.31197
                ],
                [
                  100.26928,
                  16.31798
                ],
                [
                  100.26479,
                  16.31893
                ],
                [
                  100.2667,
                  16.32223
                ],
                [
                  100.26488,
                  16.3256
                ],
                [
                  100.26682,
                  16.32752
                ],
                [
                  100.27069,
                  16.32492
                ],
                [
                  100.27268,
                  16.3263
                ],
                [
                  100.27226,
                  16.32984
                ],
                [
                  100.2742,
                  16.3323
                ],
                [
                  100.27416,
                  16.33431
                ],
                [
                  100.26938,
                  16.33503
                ],
                [
                  100.26888,
                  16.3384
                ],
                [
                  100.26713,
                  16.34075
                ],
                [
                  100.27538,
                  16.35035
                ],
                [
                  100.27951,
                  16.36384
                ],
                [
                  100.29581,
                  16.36272
                ],
                [
                  100.30188,
                  16.36387
                ],
                [
                  100.31554,
                  16.36138
                ]
              ]
            ]
          }
        },
        {
          "geocode": "660303",
          "tambon": "ต.วังจิก",
          "amphoe": "อ.โพธิ์ประทับช้าง",
          "province": "จ.พิจิตร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อำเภอโพธิ์ประทับช้าง จ.พิจิตร",
          "latitude": 16.310319,
          "longitude": 100.271461,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.2656,
                  16.39423
                ],
                [
                  100.2701,
                  16.39118
                ],
                [
                  100.27159,
                  16.38321
                ],
                [
                  100.27951,
                  16.36384
                ],
                [
                  100.27538,
                  16.35035
                ],
                [
                  100.26713,
                  16.34075
                ],
                [
                  100.26888,
                  16.3384
                ],
                [
                  100.26938,
                  16.33503
                ],
                [
                  100.27416,
                  16.33431
                ],
                [
                  100.2742,
                  16.3323
                ],
                [
                  100.27226,
                  16.32984
                ],
                [
                  100.27268,
                  16.3263
                ],
                [
                  100.27069,
                  16.32492
                ],
                [
                  100.26682,
                  16.32752
                ],
                [
                  100.26488,
                  16.3256
                ],
                [
                  100.2667,
                  16.32223
                ],
                [
                  100.26479,
                  16.31893
                ],
                [
                  100.26928,
                  16.31798
                ],
                [
                  100.26708,
                  16.31197
                ],
                [
                  100.27345,
                  16.30976
                ],
                [
                  100.27175,
                  16.30509
                ],
                [
                  100.27641,
                  16.30055
                ],
                [
                  100.2629,
                  16.3076
                ],
                [
                  100.25955,
                  16.30755
                ],
                [
                  100.25426,
                  16.30532
                ],
                [
                  100.24602,
                  16.3079
                ],
                [
                  100.24026,
                  16.30615
                ],
                [
                  100.2386,
                  16.30905
                ],
                [
                  100.23199,
                  16.30886
                ],
                [
                  100.22879,
                  16.31061
                ],
                [
                  100.22887,
                  16.31272
                ],
                [
                  100.23416,
                  16.31371
                ],
                [
                  100.24776,
                  16.31263
                ],
                [
                  100.25048,
                  16.31649
                ],
                [
                  100.24794,
                  16.31805
                ],
                [
                  100.24831,
                  16.32247
                ],
                [
                  100.24384,
                  16.32413
                ],
                [
                  100.24179,
                  16.32656
                ],
                [
                  100.23725,
                  16.32613
                ],
                [
                  100.23157,
                  16.32817
                ],
                [
                  100.22905,
                  16.32725
                ],
                [
                  100.22892,
                  16.33023
                ],
                [
                  100.22569,
                  16.3318
                ],
                [
                  100.22587,
                  16.33375
                ],
                [
                  100.22351,
                  16.33654
                ],
                [
                  100.2244,
                  16.33902
                ],
                [
                  100.23861,
                  16.34717
                ],
                [
                  100.23987,
                  16.34882
                ],
                [
                  100.24124,
                  16.35125
                ],
                [
                  100.24033,
                  16.36586
                ],
                [
                  100.23993,
                  16.36742
                ],
                [
                  100.21826,
                  16.38906
                ],
                [
                  100.2201,
                  16.39428
                ],
                [
                  100.21672,
                  16.39847
                ],
                [
                  100.22083,
                  16.40463
                ],
                [
                  100.2254,
                  16.40641
                ],
                [
                  100.22883,
                  16.40919
                ],
                [
                  100.22986,
                  16.41591
                ],
                [
                  100.23169,
                  16.41436
                ],
                [
                  100.23528,
                  16.41744
                ],
                [
                  100.23549,
                  16.41196
                ],
                [
                  100.2417,
                  16.39887
                ],
                [
                  100.24474,
                  16.39868
                ],
                [
                  100.24867,
                  16.39638
                ],
                [
                  100.2656,
                  16.39423
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670201",
          "tambon": "ต.ชนแดน",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านวังลาด",
          "latitude": 16.17415,
          "longitude": 100.911551,
          "sum_rainfall_mm": 161.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.98173,
                  16.18563
                ],
                [
                  100.98608,
                  16.18255
                ],
                [
                  100.98465,
                  16.16636
                ],
                [
                  100.98227,
                  16.15516
                ],
                [
                  100.9827,
                  16.15145
                ],
                [
                  100.98557,
                  16.14657
                ],
                [
                  100.98635,
                  16.13885
                ],
                [
                  100.98561,
                  16.13747
                ],
                [
                  100.98187,
                  16.13696
                ],
                [
                  100.98112,
                  16.13369
                ],
                [
                  100.97755,
                  16.1346
                ],
                [
                  100.97445,
                  16.13855
                ],
                [
                  100.97307,
                  16.14588
                ],
                [
                  100.96458,
                  16.14063
                ],
                [
                  100.96069,
                  16.14143
                ],
                [
                  100.95118,
                  16.13393
                ],
                [
                  100.94947,
                  16.13404
                ],
                [
                  100.94771,
                  16.13699
                ],
                [
                  100.9452,
                  16.13692
                ],
                [
                  100.94259,
                  16.1339
                ],
                [
                  100.94131,
                  16.12565
                ],
                [
                  100.93914,
                  16.12606
                ],
                [
                  100.9356,
                  16.12902
                ],
                [
                  100.93086,
                  16.12982
                ],
                [
                  100.92753,
                  16.1329
                ],
                [
                  100.92458,
                  16.13287
                ],
                [
                  100.91924,
                  16.1234
                ],
                [
                  100.90773,
                  16.10877
                ],
                [
                  100.90553,
                  16.10418
                ],
                [
                  100.88944,
                  16.09272
                ],
                [
                  100.88698,
                  16.09244
                ],
                [
                  100.88385,
                  16.09466
                ],
                [
                  100.88022,
                  16.10408
                ],
                [
                  100.86046,
                  16.11776
                ],
                [
                  100.8514,
                  16.12644
                ],
                [
                  100.84154,
                  16.13338
                ],
                [
                  100.84136,
                  16.13527
                ],
                [
                  100.84335,
                  16.13804
                ],
                [
                  100.83858,
                  16.14188
                ],
                [
                  100.83284,
                  16.1504
                ],
                [
                  100.83016,
                  16.15193
                ],
                [
                  100.82691,
                  16.15611
                ],
                [
                  100.82665,
                  16.17594
                ],
                [
                  100.82881,
                  16.18665
                ],
                [
                  100.84715,
                  16.18703
                ],
                [
                  100.84816,
                  16.18859
                ],
                [
                  100.84722,
                  16.19625
                ],
                [
                  100.84955,
                  16.19675
                ],
                [
                  100.85214,
                  16.2045
                ],
                [
                  100.85724,
                  16.2102
                ],
                [
                  100.86355,
                  16.21374
                ],
                [
                  100.86656,
                  16.21418
                ],
                [
                  100.86928,
                  16.21226
                ],
                [
                  100.86662,
                  16.21038
                ],
                [
                  100.8659,
                  16.20842
                ],
                [
                  100.8672,
                  16.19933
                ],
                [
                  100.87805,
                  16.20454
                ],
                [
                  100.87895,
                  16.2136
                ],
                [
                  100.8903,
                  16.21482
                ],
                [
                  100.90251,
                  16.21906
                ],
                [
                  100.90351,
                  16.21813
                ],
                [
                  100.90866,
                  16.20167
                ],
                [
                  100.9157,
                  16.19569
                ],
                [
                  100.9144,
                  16.18874
                ],
                [
                  100.91541,
                  16.18223
                ],
                [
                  100.9298,
                  16.15626
                ],
                [
                  100.92981,
                  16.14973
                ],
                [
                  100.93168,
                  16.14525
                ],
                [
                  100.93672,
                  16.14472
                ],
                [
                  100.94883,
                  16.14624
                ],
                [
                  100.95235,
                  16.14825
                ],
                [
                  100.95456,
                  16.15739
                ],
                [
                  100.95444,
                  16.16524
                ],
                [
                  100.94975,
                  16.17624
                ],
                [
                  100.9506,
                  16.1819
                ],
                [
                  100.95288,
                  16.18486
                ],
                [
                  100.95739,
                  16.18667
                ],
                [
                  100.95963,
                  16.18631
                ],
                [
                  100.96667,
                  16.18033
                ],
                [
                  100.97184,
                  16.17987
                ],
                [
                  100.97668,
                  16.18119
                ],
                [
                  100.98173,
                  16.18563
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670201",
          "tambon": "ต.ชนแดน",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ชนแดน",
          "latitude": 16.17908,
          "longitude": 100.90167,
          "sum_rainfall_mm": 115.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.98173,
                  16.18563
                ],
                [
                  100.98608,
                  16.18255
                ],
                [
                  100.98465,
                  16.16636
                ],
                [
                  100.98227,
                  16.15516
                ],
                [
                  100.9827,
                  16.15145
                ],
                [
                  100.98557,
                  16.14657
                ],
                [
                  100.98635,
                  16.13885
                ],
                [
                  100.98561,
                  16.13747
                ],
                [
                  100.98187,
                  16.13696
                ],
                [
                  100.98112,
                  16.13369
                ],
                [
                  100.97755,
                  16.1346
                ],
                [
                  100.97445,
                  16.13855
                ],
                [
                  100.97307,
                  16.14588
                ],
                [
                  100.96458,
                  16.14063
                ],
                [
                  100.96069,
                  16.14143
                ],
                [
                  100.95118,
                  16.13393
                ],
                [
                  100.94947,
                  16.13404
                ],
                [
                  100.94771,
                  16.13699
                ],
                [
                  100.9452,
                  16.13692
                ],
                [
                  100.94259,
                  16.1339
                ],
                [
                  100.94131,
                  16.12565
                ],
                [
                  100.93914,
                  16.12606
                ],
                [
                  100.9356,
                  16.12902
                ],
                [
                  100.93086,
                  16.12982
                ],
                [
                  100.92753,
                  16.1329
                ],
                [
                  100.92458,
                  16.13287
                ],
                [
                  100.91924,
                  16.1234
                ],
                [
                  100.90773,
                  16.10877
                ],
                [
                  100.90553,
                  16.10418
                ],
                [
                  100.88944,
                  16.09272
                ],
                [
                  100.88698,
                  16.09244
                ],
                [
                  100.88385,
                  16.09466
                ],
                [
                  100.88022,
                  16.10408
                ],
                [
                  100.86046,
                  16.11776
                ],
                [
                  100.8514,
                  16.12644
                ],
                [
                  100.84154,
                  16.13338
                ],
                [
                  100.84136,
                  16.13527
                ],
                [
                  100.84335,
                  16.13804
                ],
                [
                  100.83858,
                  16.14188
                ],
                [
                  100.83284,
                  16.1504
                ],
                [
                  100.83016,
                  16.15193
                ],
                [
                  100.82691,
                  16.15611
                ],
                [
                  100.82665,
                  16.17594
                ],
                [
                  100.82881,
                  16.18665
                ],
                [
                  100.84715,
                  16.18703
                ],
                [
                  100.84816,
                  16.18859
                ],
                [
                  100.84722,
                  16.19625
                ],
                [
                  100.84955,
                  16.19675
                ],
                [
                  100.85214,
                  16.2045
                ],
                [
                  100.85724,
                  16.2102
                ],
                [
                  100.86355,
                  16.21374
                ],
                [
                  100.86656,
                  16.21418
                ],
                [
                  100.86928,
                  16.21226
                ],
                [
                  100.86662,
                  16.21038
                ],
                [
                  100.8659,
                  16.20842
                ],
                [
                  100.8672,
                  16.19933
                ],
                [
                  100.87805,
                  16.20454
                ],
                [
                  100.87895,
                  16.2136
                ],
                [
                  100.8903,
                  16.21482
                ],
                [
                  100.90251,
                  16.21906
                ],
                [
                  100.90351,
                  16.21813
                ],
                [
                  100.90866,
                  16.20167
                ],
                [
                  100.9157,
                  16.19569
                ],
                [
                  100.9144,
                  16.18874
                ],
                [
                  100.91541,
                  16.18223
                ],
                [
                  100.9298,
                  16.15626
                ],
                [
                  100.92981,
                  16.14973
                ],
                [
                  100.93168,
                  16.14525
                ],
                [
                  100.93672,
                  16.14472
                ],
                [
                  100.94883,
                  16.14624
                ],
                [
                  100.95235,
                  16.14825
                ],
                [
                  100.95456,
                  16.15739
                ],
                [
                  100.95444,
                  16.16524
                ],
                [
                  100.94975,
                  16.17624
                ],
                [
                  100.9506,
                  16.1819
                ],
                [
                  100.95288,
                  16.18486
                ],
                [
                  100.95739,
                  16.18667
                ],
                [
                  100.95963,
                  16.18631
                ],
                [
                  100.96667,
                  16.18033
                ],
                [
                  100.97184,
                  16.17987
                ],
                [
                  100.97668,
                  16.18119
                ],
                [
                  100.98173,
                  16.18563
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670203",
          "tambon": "ต.ท่าข้าม",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกุฏิพระ",
          "latitude": 16.158007,
          "longitude": 100.817123,
          "sum_rainfall_mm": 54.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.79099,
                  16.2713
                ],
                [
                  100.78916,
                  16.26074
                ],
                [
                  100.79576,
                  16.25462
                ],
                [
                  100.7939,
                  16.24979
                ],
                [
                  100.79519,
                  16.24009
                ],
                [
                  100.79806,
                  16.23709
                ],
                [
                  100.8088,
                  16.2326
                ],
                [
                  100.81636,
                  16.22041
                ],
                [
                  100.81609,
                  16.21745
                ],
                [
                  100.8051,
                  16.20689
                ],
                [
                  100.80461,
                  16.2038
                ],
                [
                  100.80651,
                  16.19402
                ],
                [
                  100.80995,
                  16.18835
                ],
                [
                  100.82881,
                  16.18665
                ],
                [
                  100.82665,
                  16.17594
                ],
                [
                  100.82691,
                  16.15611
                ],
                [
                  100.83016,
                  16.15193
                ],
                [
                  100.83284,
                  16.1504
                ],
                [
                  100.83858,
                  16.14188
                ],
                [
                  100.84335,
                  16.13804
                ],
                [
                  100.84125,
                  16.13395
                ],
                [
                  100.84693,
                  16.12931
                ],
                [
                  100.84481,
                  16.1261
                ],
                [
                  100.84377,
                  16.11861
                ],
                [
                  100.84119,
                  16.11671
                ],
                [
                  100.8331,
                  16.1163
                ],
                [
                  100.82714,
                  16.11973
                ],
                [
                  100.81082,
                  16.13255
                ],
                [
                  100.80416,
                  16.1397
                ],
                [
                  100.80289,
                  16.14356
                ],
                [
                  100.80701,
                  16.14961
                ],
                [
                  100.80819,
                  16.15685
                ],
                [
                  100.81062,
                  16.15772
                ],
                [
                  100.80944,
                  16.15959
                ],
                [
                  100.80837,
                  16.15744
                ],
                [
                  100.80746,
                  16.15981
                ],
                [
                  100.80581,
                  16.15895
                ],
                [
                  100.80691,
                  16.15693
                ],
                [
                  100.80489,
                  16.15578
                ],
                [
                  100.80492,
                  16.15391
                ],
                [
                  100.80076,
                  16.15238
                ],
                [
                  100.80067,
                  16.14996
                ],
                [
                  100.79926,
                  16.15198
                ],
                [
                  100.7965,
                  16.1518
                ],
                [
                  100.79403,
                  16.14872
                ],
                [
                  100.79304,
                  16.15056
                ],
                [
                  100.79169,
                  16.15014
                ],
                [
                  100.79071,
                  16.14841
                ],
                [
                  100.78917,
                  16.14823
                ],
                [
                  100.78946,
                  16.14543
                ],
                [
                  100.78849,
                  16.144
                ],
                [
                  100.78738,
                  16.14425
                ],
                [
                  100.78724,
                  16.14624
                ],
                [
                  100.78535,
                  16.14565
                ],
                [
                  100.78401,
                  16.14722
                ],
                [
                  100.78022,
                  16.14572
                ],
                [
                  100.77951,
                  16.14379
                ],
                [
                  100.77701,
                  16.14486
                ],
                [
                  100.77692,
                  16.14344
                ],
                [
                  100.78022,
                  16.14169
                ],
                [
                  100.78046,
                  16.13917
                ],
                [
                  100.7794,
                  16.13897
                ],
                [
                  100.77953,
                  16.14079
                ],
                [
                  100.77856,
                  16.14
                ],
                [
                  100.77733,
                  16.14071
                ],
                [
                  100.77712,
                  16.13973
                ],
                [
                  100.7759,
                  16.14036
                ],
                [
                  100.77492,
                  16.1364
                ],
                [
                  100.77407,
                  16.13682
                ],
                [
                  100.77422,
                  16.13545
                ],
                [
                  100.77304,
                  16.13675
                ],
                [
                  100.77258,
                  16.13502
                ],
                [
                  100.76283,
                  16.13976
                ],
                [
                  100.76036,
                  16.14303
                ],
                [
                  100.75541,
                  16.14637
                ],
                [
                  100.7595,
                  16.14863
                ],
                [
                  100.76516,
                  16.15565
                ],
                [
                  100.76541,
                  16.16441
                ],
                [
                  100.75828,
                  16.16783
                ],
                [
                  100.75279,
                  16.17325
                ],
                [
                  100.74826,
                  16.17588
                ],
                [
                  100.74578,
                  16.17877
                ],
                [
                  100.74107,
                  16.19171
                ],
                [
                  100.74546,
                  16.20514
                ],
                [
                  100.74425,
                  16.21083
                ],
                [
                  100.74177,
                  16.21545
                ],
                [
                  100.74169,
                  16.22996
                ],
                [
                  100.73749,
                  16.23323
                ],
                [
                  100.74113,
                  16.25666
                ],
                [
                  100.74776,
                  16.2604
                ],
                [
                  100.74989,
                  16.25999
                ],
                [
                  100.7504,
                  16.26172
                ],
                [
                  100.75116,
                  16.26088
                ],
                [
                  100.75445,
                  16.26359
                ],
                [
                  100.75711,
                  16.26338
                ],
                [
                  100.7581,
                  16.26107
                ],
                [
                  100.76009,
                  16.25984
                ],
                [
                  100.76275,
                  16.26043
                ],
                [
                  100.76577,
                  16.26228
                ],
                [
                  100.767,
                  16.26526
                ],
                [
                  100.7708,
                  16.26769
                ],
                [
                  100.77352,
                  16.26744
                ],
                [
                  100.77506,
                  16.26848
                ],
                [
                  100.77631,
                  16.26743
                ],
                [
                  100.78013,
                  16.26736
                ],
                [
                  100.78154,
                  16.27176
                ],
                [
                  100.78219,
                  16.27012
                ],
                [
                  100.78443,
                  16.27155
                ],
                [
                  100.78584,
                  16.27065
                ],
                [
                  100.78818,
                  16.27358
                ],
                [
                  100.79099,
                  16.2713
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670204",
          "tambon": "ต.พุทธบาท",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านน้ำพุ",
          "latitude": 16.210173,
          "longitude": 100.972217,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-22T19:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9425,
                  16.30869
                ],
                [
                  100.94277,
                  16.30418
                ],
                [
                  100.94771,
                  16.30265
                ],
                [
                  100.94933,
                  16.29761
                ],
                [
                  100.9547,
                  16.29431
                ],
                [
                  100.95695,
                  16.28959
                ],
                [
                  100.9641,
                  16.28226
                ],
                [
                  100.96112,
                  16.27345
                ],
                [
                  100.96351,
                  16.27017
                ],
                [
                  100.96608,
                  16.26321
                ],
                [
                  100.97122,
                  16.25931
                ],
                [
                  100.98017,
                  16.25743
                ],
                [
                  100.98125,
                  16.25556
                ],
                [
                  100.98284,
                  16.25089
                ],
                [
                  100.98273,
                  16.24483
                ],
                [
                  100.9838,
                  16.24325
                ],
                [
                  100.9827,
                  16.22625
                ],
                [
                  100.98423,
                  16.2253
                ],
                [
                  100.99208,
                  16.22596
                ],
                [
                  100.99317,
                  16.21985
                ],
                [
                  100.99348,
                  16.21092
                ],
                [
                  100.98931,
                  16.20537
                ],
                [
                  100.98921,
                  16.1979
                ],
                [
                  100.98621,
                  16.19165
                ],
                [
                  100.97872,
                  16.1825
                ],
                [
                  100.97668,
                  16.18119
                ],
                [
                  100.96925,
                  16.17982
                ],
                [
                  100.96519,
                  16.18118
                ],
                [
                  100.96072,
                  16.18593
                ],
                [
                  100.95739,
                  16.18667
                ],
                [
                  100.95288,
                  16.18486
                ],
                [
                  100.95102,
                  16.18291
                ],
                [
                  100.94975,
                  16.17624
                ],
                [
                  100.95419,
                  16.16701
                ],
                [
                  100.95479,
                  16.16082
                ],
                [
                  100.95374,
                  16.15232
                ],
                [
                  100.95095,
                  16.1469
                ],
                [
                  100.93672,
                  16.14472
                ],
                [
                  100.93128,
                  16.14582
                ],
                [
                  100.92981,
                  16.14973
                ],
                [
                  100.9298,
                  16.15626
                ],
                [
                  100.91541,
                  16.18223
                ],
                [
                  100.9144,
                  16.18874
                ],
                [
                  100.9157,
                  16.19569
                ],
                [
                  100.90866,
                  16.20167
                ],
                [
                  100.90555,
                  16.21378
                ],
                [
                  100.90251,
                  16.21906
                ],
                [
                  100.8903,
                  16.21482
                ],
                [
                  100.87895,
                  16.2136
                ],
                [
                  100.87805,
                  16.20454
                ],
                [
                  100.8672,
                  16.19933
                ],
                [
                  100.8659,
                  16.20842
                ],
                [
                  100.86662,
                  16.21038
                ],
                [
                  100.86928,
                  16.21226
                ],
                [
                  100.86656,
                  16.21418
                ],
                [
                  100.86292,
                  16.21352
                ],
                [
                  100.85724,
                  16.2102
                ],
                [
                  100.85214,
                  16.2045
                ],
                [
                  100.84955,
                  16.19675
                ],
                [
                  100.84735,
                  16.19661
                ],
                [
                  100.84816,
                  16.18859
                ],
                [
                  100.84674,
                  16.18671
                ],
                [
                  100.83258,
                  16.18635
                ],
                [
                  100.8094,
                  16.18859
                ],
                [
                  100.80592,
                  16.19547
                ],
                [
                  100.80461,
                  16.20531
                ],
                [
                  100.80578,
                  16.20773
                ],
                [
                  100.81609,
                  16.21745
                ],
                [
                  100.81636,
                  16.22041
                ],
                [
                  100.8088,
                  16.2326
                ],
                [
                  100.79806,
                  16.23709
                ],
                [
                  100.79519,
                  16.24009
                ],
                [
                  100.7939,
                  16.24979
                ],
                [
                  100.79576,
                  16.25462
                ],
                [
                  100.78916,
                  16.26074
                ],
                [
                  100.79099,
                  16.2713
                ],
                [
                  100.7922,
                  16.27287
                ],
                [
                  100.79461,
                  16.27217
                ],
                [
                  100.79567,
                  16.27417
                ],
                [
                  100.80262,
                  16.27661
                ],
                [
                  100.80573,
                  16.27976
                ],
                [
                  100.81459,
                  16.2798
                ],
                [
                  100.8201,
                  16.28177
                ],
                [
                  100.82933,
                  16.27464
                ],
                [
                  100.83067,
                  16.26935
                ],
                [
                  100.83523,
                  16.26714
                ],
                [
                  100.83865,
                  16.26778
                ],
                [
                  100.84164,
                  16.27429
                ],
                [
                  100.84139,
                  16.28308
                ],
                [
                  100.84444,
                  16.28317
                ],
                [
                  100.8472,
                  16.29031
                ],
                [
                  100.8463,
                  16.29461
                ],
                [
                  100.84339,
                  16.29826
                ],
                [
                  100.84272,
                  16.30494
                ],
                [
                  100.84505,
                  16.30868
                ],
                [
                  100.84589,
                  16.31525
                ],
                [
                  100.85361,
                  16.3201
                ],
                [
                  100.85863,
                  16.32896
                ],
                [
                  100.86763,
                  16.33075
                ],
                [
                  100.87654,
                  16.32898
                ],
                [
                  100.88421,
                  16.33019
                ],
                [
                  100.89674,
                  16.32379
                ],
                [
                  100.90295,
                  16.31908
                ],
                [
                  100.9107,
                  16.31989
                ],
                [
                  100.91631,
                  16.31422
                ],
                [
                  100.9187,
                  16.30731
                ],
                [
                  100.92168,
                  16.3036
                ],
                [
                  100.9425,
                  16.30869
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670204",
          "tambon": "ต.พุทธบาท",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านโป่งตะแบก",
          "latitude": 16.274916,
          "longitude": 100.910896,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9425,
                  16.30869
                ],
                [
                  100.94277,
                  16.30418
                ],
                [
                  100.94771,
                  16.30265
                ],
                [
                  100.94933,
                  16.29761
                ],
                [
                  100.9547,
                  16.29431
                ],
                [
                  100.95695,
                  16.28959
                ],
                [
                  100.9641,
                  16.28226
                ],
                [
                  100.96112,
                  16.27345
                ],
                [
                  100.96351,
                  16.27017
                ],
                [
                  100.96608,
                  16.26321
                ],
                [
                  100.97122,
                  16.25931
                ],
                [
                  100.98017,
                  16.25743
                ],
                [
                  100.98125,
                  16.25556
                ],
                [
                  100.98284,
                  16.25089
                ],
                [
                  100.98273,
                  16.24483
                ],
                [
                  100.9838,
                  16.24325
                ],
                [
                  100.9827,
                  16.22625
                ],
                [
                  100.98423,
                  16.2253
                ],
                [
                  100.99208,
                  16.22596
                ],
                [
                  100.99317,
                  16.21985
                ],
                [
                  100.99348,
                  16.21092
                ],
                [
                  100.98931,
                  16.20537
                ],
                [
                  100.98921,
                  16.1979
                ],
                [
                  100.98621,
                  16.19165
                ],
                [
                  100.97872,
                  16.1825
                ],
                [
                  100.97668,
                  16.18119
                ],
                [
                  100.96925,
                  16.17982
                ],
                [
                  100.96519,
                  16.18118
                ],
                [
                  100.96072,
                  16.18593
                ],
                [
                  100.95739,
                  16.18667
                ],
                [
                  100.95288,
                  16.18486
                ],
                [
                  100.95102,
                  16.18291
                ],
                [
                  100.94975,
                  16.17624
                ],
                [
                  100.95419,
                  16.16701
                ],
                [
                  100.95479,
                  16.16082
                ],
                [
                  100.95374,
                  16.15232
                ],
                [
                  100.95095,
                  16.1469
                ],
                [
                  100.93672,
                  16.14472
                ],
                [
                  100.93128,
                  16.14582
                ],
                [
                  100.92981,
                  16.14973
                ],
                [
                  100.9298,
                  16.15626
                ],
                [
                  100.91541,
                  16.18223
                ],
                [
                  100.9144,
                  16.18874
                ],
                [
                  100.9157,
                  16.19569
                ],
                [
                  100.90866,
                  16.20167
                ],
                [
                  100.90555,
                  16.21378
                ],
                [
                  100.90251,
                  16.21906
                ],
                [
                  100.8903,
                  16.21482
                ],
                [
                  100.87895,
                  16.2136
                ],
                [
                  100.87805,
                  16.20454
                ],
                [
                  100.8672,
                  16.19933
                ],
                [
                  100.8659,
                  16.20842
                ],
                [
                  100.86662,
                  16.21038
                ],
                [
                  100.86928,
                  16.21226
                ],
                [
                  100.86656,
                  16.21418
                ],
                [
                  100.86292,
                  16.21352
                ],
                [
                  100.85724,
                  16.2102
                ],
                [
                  100.85214,
                  16.2045
                ],
                [
                  100.84955,
                  16.19675
                ],
                [
                  100.84735,
                  16.19661
                ],
                [
                  100.84816,
                  16.18859
                ],
                [
                  100.84674,
                  16.18671
                ],
                [
                  100.83258,
                  16.18635
                ],
                [
                  100.8094,
                  16.18859
                ],
                [
                  100.80592,
                  16.19547
                ],
                [
                  100.80461,
                  16.20531
                ],
                [
                  100.80578,
                  16.20773
                ],
                [
                  100.81609,
                  16.21745
                ],
                [
                  100.81636,
                  16.22041
                ],
                [
                  100.8088,
                  16.2326
                ],
                [
                  100.79806,
                  16.23709
                ],
                [
                  100.79519,
                  16.24009
                ],
                [
                  100.7939,
                  16.24979
                ],
                [
                  100.79576,
                  16.25462
                ],
                [
                  100.78916,
                  16.26074
                ],
                [
                  100.79099,
                  16.2713
                ],
                [
                  100.7922,
                  16.27287
                ],
                [
                  100.79461,
                  16.27217
                ],
                [
                  100.79567,
                  16.27417
                ],
                [
                  100.80262,
                  16.27661
                ],
                [
                  100.80573,
                  16.27976
                ],
                [
                  100.81459,
                  16.2798
                ],
                [
                  100.8201,
                  16.28177
                ],
                [
                  100.82933,
                  16.27464
                ],
                [
                  100.83067,
                  16.26935
                ],
                [
                  100.83523,
                  16.26714
                ],
                [
                  100.83865,
                  16.26778
                ],
                [
                  100.84164,
                  16.27429
                ],
                [
                  100.84139,
                  16.28308
                ],
                [
                  100.84444,
                  16.28317
                ],
                [
                  100.8472,
                  16.29031
                ],
                [
                  100.8463,
                  16.29461
                ],
                [
                  100.84339,
                  16.29826
                ],
                [
                  100.84272,
                  16.30494
                ],
                [
                  100.84505,
                  16.30868
                ],
                [
                  100.84589,
                  16.31525
                ],
                [
                  100.85361,
                  16.3201
                ],
                [
                  100.85863,
                  16.32896
                ],
                [
                  100.86763,
                  16.33075
                ],
                [
                  100.87654,
                  16.32898
                ],
                [
                  100.88421,
                  16.33019
                ],
                [
                  100.89674,
                  16.32379
                ],
                [
                  100.90295,
                  16.31908
                ],
                [
                  100.9107,
                  16.31989
                ],
                [
                  100.91631,
                  16.31422
                ],
                [
                  100.9187,
                  16.30731
                ],
                [
                  100.92168,
                  16.3036
                ],
                [
                  100.9425,
                  16.30869
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670205",
          "tambon": "ต.ลาดแค",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านลาดแคใต้",
          "latitude": 16.035818,
          "longitude": 100.826486,
          "sum_rainfall_mm": 1.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.87394,
                  16.07371
                ],
                [
                  100.87271,
                  16.07196
                ],
                [
                  100.86879,
                  16.07014
                ],
                [
                  100.86878,
                  16.0669
                ],
                [
                  100.87265,
                  16.05857
                ],
                [
                  100.88071,
                  16.04759
                ],
                [
                  100.88267,
                  16.04069
                ],
                [
                  100.88612,
                  16.03548
                ],
                [
                  100.8838,
                  16.02894
                ],
                [
                  100.88123,
                  16.02898
                ],
                [
                  100.87951,
                  16.02709
                ],
                [
                  100.87625,
                  16.02682
                ],
                [
                  100.87532,
                  16.0251
                ],
                [
                  100.87111,
                  16.02572
                ],
                [
                  100.87217,
                  16.01943
                ],
                [
                  100.8743,
                  16.02075
                ],
                [
                  100.87574,
                  16.01793
                ],
                [
                  100.87883,
                  16.0179
                ],
                [
                  100.88327,
                  16.01445
                ],
                [
                  100.88594,
                  16.00978
                ],
                [
                  100.88853,
                  16.00994
                ],
                [
                  100.8915,
                  16.00162
                ],
                [
                  100.89129,
                  15.99923
                ],
                [
                  100.89351,
                  15.99777
                ],
                [
                  100.89364,
                  15.99546
                ],
                [
                  100.89853,
                  15.991
                ],
                [
                  100.90008,
                  15.99167
                ],
                [
                  100.90277,
                  15.99034
                ],
                [
                  100.90063,
                  15.97963
                ],
                [
                  100.89798,
                  15.97623
                ],
                [
                  100.89461,
                  15.96654
                ],
                [
                  100.89299,
                  15.96492
                ],
                [
                  100.89028,
                  15.96794
                ],
                [
                  100.88781,
                  15.96699
                ],
                [
                  100.88705,
                  15.96122
                ],
                [
                  100.88447,
                  15.95998
                ],
                [
                  100.88152,
                  15.96009
                ],
                [
                  100.87977,
                  15.95615
                ],
                [
                  100.88099,
                  15.95127
                ],
                [
                  100.88688,
                  15.94612
                ],
                [
                  100.88674,
                  15.93577
                ],
                [
                  100.89067,
                  15.93047
                ],
                [
                  100.89769,
                  15.9159
                ],
                [
                  100.89835,
                  15.90999
                ],
                [
                  100.89605,
                  15.90476
                ],
                [
                  100.89683,
                  15.90148
                ],
                [
                  100.90187,
                  15.89698
                ],
                [
                  100.89917,
                  15.89623
                ],
                [
                  100.89173,
                  15.90023
                ],
                [
                  100.89004,
                  15.90659
                ],
                [
                  100.88707,
                  15.90859
                ],
                [
                  100.88725,
                  15.91114
                ],
                [
                  100.88543,
                  15.91572
                ],
                [
                  100.8808,
                  15.92228
                ],
                [
                  100.87562,
                  15.92326
                ],
                [
                  100.87495,
                  15.92486
                ],
                [
                  100.87155,
                  15.92588
                ],
                [
                  100.86487,
                  15.9242
                ],
                [
                  100.85725,
                  15.92891
                ],
                [
                  100.85551,
                  15.92564
                ],
                [
                  100.84763,
                  15.91897
                ],
                [
                  100.84155,
                  15.90978
                ],
                [
                  100.83357,
                  15.91255
                ],
                [
                  100.82753,
                  15.91314
                ],
                [
                  100.82546,
                  15.9112
                ],
                [
                  100.82117,
                  15.91094
                ],
                [
                  100.81841,
                  15.91412
                ],
                [
                  100.81071,
                  15.91885
                ],
                [
                  100.80852,
                  15.92493
                ],
                [
                  100.80304,
                  15.92403
                ],
                [
                  100.7983,
                  15.92635
                ],
                [
                  100.79808,
                  15.92394
                ],
                [
                  100.79448,
                  15.92042
                ],
                [
                  100.79247,
                  15.9132
                ],
                [
                  100.78145,
                  15.89998
                ],
                [
                  100.78226,
                  15.8977
                ],
                [
                  100.77881,
                  15.89688
                ],
                [
                  100.77575,
                  15.89765
                ],
                [
                  100.77026,
                  15.90227
                ],
                [
                  100.76394,
                  15.91137
                ],
                [
                  100.76278,
                  15.92307
                ],
                [
                  100.76641,
                  15.9314
                ],
                [
                  100.7689,
                  15.92938
                ],
                [
                  100.77283,
                  15.92919
                ],
                [
                  100.77865,
                  15.93032
                ],
                [
                  100.78108,
                  15.93511
                ],
                [
                  100.78501,
                  15.93337
                ],
                [
                  100.78929,
                  15.93644
                ],
                [
                  100.79708,
                  15.93512
                ],
                [
                  100.79899,
                  15.93623
                ],
                [
                  100.7968,
                  15.94078
                ],
                [
                  100.79767,
                  15.94151
                ],
                [
                  100.79556,
                  15.94242
                ],
                [
                  100.79376,
                  15.94637
                ],
                [
                  100.79403,
                  15.95185
                ],
                [
                  100.79133,
                  15.955
                ],
                [
                  100.79114,
                  15.95823
                ],
                [
                  100.77832,
                  15.96557
                ],
                [
                  100.7794,
                  15.96812
                ],
                [
                  100.7777,
                  15.97179
                ],
                [
                  100.78018,
                  15.97785
                ],
                [
                  100.78412,
                  15.98117
                ],
                [
                  100.78291,
                  15.98235
                ],
                [
                  100.78395,
                  15.99011
                ],
                [
                  100.78518,
                  15.99163
                ],
                [
                  100.78208,
                  15.99403
                ],
                [
                  100.78403,
                  15.99821
                ],
                [
                  100.78997,
                  15.99552
                ],
                [
                  100.80021,
                  15.993
                ],
                [
                  100.80233,
                  15.99478
                ],
                [
                  100.80504,
                  16.00425
                ],
                [
                  100.80263,
                  16.01564
                ],
                [
                  100.80713,
                  16.01676
                ],
                [
                  100.80861,
                  16.01557
                ],
                [
                  100.80984,
                  16.02843
                ],
                [
                  100.80901,
                  16.03516
                ],
                [
                  100.80416,
                  16.03961
                ],
                [
                  100.80294,
                  16.04451
                ],
                [
                  100.80366,
                  16.04601
                ],
                [
                  100.80754,
                  16.04879
                ],
                [
                  100.81035,
                  16.05618
                ],
                [
                  100.81791,
                  16.06017
                ],
                [
                  100.82099,
                  16.05916
                ],
                [
                  100.82145,
                  16.06307
                ],
                [
                  100.82315,
                  16.06426
                ],
                [
                  100.82746,
                  16.06451
                ],
                [
                  100.83259,
                  16.06839
                ],
                [
                  100.83532,
                  16.0688
                ],
                [
                  100.83672,
                  16.06731
                ],
                [
                  100.83826,
                  16.06904
                ],
                [
                  100.84029,
                  16.0693
                ],
                [
                  100.84115,
                  16.07159
                ],
                [
                  100.84298,
                  16.07049
                ],
                [
                  100.84401,
                  16.07173
                ],
                [
                  100.84894,
                  16.07118
                ],
                [
                  100.84978,
                  16.07378
                ],
                [
                  100.85748,
                  16.07735
                ],
                [
                  100.86382,
                  16.07302
                ],
                [
                  100.87394,
                  16.07371
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670205",
          "tambon": "ต.ลาดแค",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านคลองบน",
          "latitude": 15.931117,
          "longitude": 100.829141,
          "sum_rainfall_mm": 34.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.87394,
                  16.07371
                ],
                [
                  100.87271,
                  16.07196
                ],
                [
                  100.86879,
                  16.07014
                ],
                [
                  100.86878,
                  16.0669
                ],
                [
                  100.87265,
                  16.05857
                ],
                [
                  100.88071,
                  16.04759
                ],
                [
                  100.88267,
                  16.04069
                ],
                [
                  100.88612,
                  16.03548
                ],
                [
                  100.8838,
                  16.02894
                ],
                [
                  100.88123,
                  16.02898
                ],
                [
                  100.87951,
                  16.02709
                ],
                [
                  100.87625,
                  16.02682
                ],
                [
                  100.87532,
                  16.0251
                ],
                [
                  100.87111,
                  16.02572
                ],
                [
                  100.87217,
                  16.01943
                ],
                [
                  100.8743,
                  16.02075
                ],
                [
                  100.87574,
                  16.01793
                ],
                [
                  100.87883,
                  16.0179
                ],
                [
                  100.88327,
                  16.01445
                ],
                [
                  100.88594,
                  16.00978
                ],
                [
                  100.88853,
                  16.00994
                ],
                [
                  100.8915,
                  16.00162
                ],
                [
                  100.89129,
                  15.99923
                ],
                [
                  100.89351,
                  15.99777
                ],
                [
                  100.89364,
                  15.99546
                ],
                [
                  100.89853,
                  15.991
                ],
                [
                  100.90008,
                  15.99167
                ],
                [
                  100.90277,
                  15.99034
                ],
                [
                  100.90063,
                  15.97963
                ],
                [
                  100.89798,
                  15.97623
                ],
                [
                  100.89461,
                  15.96654
                ],
                [
                  100.89299,
                  15.96492
                ],
                [
                  100.89028,
                  15.96794
                ],
                [
                  100.88781,
                  15.96699
                ],
                [
                  100.88705,
                  15.96122
                ],
                [
                  100.88447,
                  15.95998
                ],
                [
                  100.88152,
                  15.96009
                ],
                [
                  100.87977,
                  15.95615
                ],
                [
                  100.88099,
                  15.95127
                ],
                [
                  100.88688,
                  15.94612
                ],
                [
                  100.88674,
                  15.93577
                ],
                [
                  100.89067,
                  15.93047
                ],
                [
                  100.89769,
                  15.9159
                ],
                [
                  100.89835,
                  15.90999
                ],
                [
                  100.89605,
                  15.90476
                ],
                [
                  100.89683,
                  15.90148
                ],
                [
                  100.90187,
                  15.89698
                ],
                [
                  100.89917,
                  15.89623
                ],
                [
                  100.89173,
                  15.90023
                ],
                [
                  100.89004,
                  15.90659
                ],
                [
                  100.88707,
                  15.90859
                ],
                [
                  100.88725,
                  15.91114
                ],
                [
                  100.88543,
                  15.91572
                ],
                [
                  100.8808,
                  15.92228
                ],
                [
                  100.87562,
                  15.92326
                ],
                [
                  100.87495,
                  15.92486
                ],
                [
                  100.87155,
                  15.92588
                ],
                [
                  100.86487,
                  15.9242
                ],
                [
                  100.85725,
                  15.92891
                ],
                [
                  100.85551,
                  15.92564
                ],
                [
                  100.84763,
                  15.91897
                ],
                [
                  100.84155,
                  15.90978
                ],
                [
                  100.83357,
                  15.91255
                ],
                [
                  100.82753,
                  15.91314
                ],
                [
                  100.82546,
                  15.9112
                ],
                [
                  100.82117,
                  15.91094
                ],
                [
                  100.81841,
                  15.91412
                ],
                [
                  100.81071,
                  15.91885
                ],
                [
                  100.80852,
                  15.92493
                ],
                [
                  100.80304,
                  15.92403
                ],
                [
                  100.7983,
                  15.92635
                ],
                [
                  100.79808,
                  15.92394
                ],
                [
                  100.79448,
                  15.92042
                ],
                [
                  100.79247,
                  15.9132
                ],
                [
                  100.78145,
                  15.89998
                ],
                [
                  100.78226,
                  15.8977
                ],
                [
                  100.77881,
                  15.89688
                ],
                [
                  100.77575,
                  15.89765
                ],
                [
                  100.77026,
                  15.90227
                ],
                [
                  100.76394,
                  15.91137
                ],
                [
                  100.76278,
                  15.92307
                ],
                [
                  100.76641,
                  15.9314
                ],
                [
                  100.7689,
                  15.92938
                ],
                [
                  100.77283,
                  15.92919
                ],
                [
                  100.77865,
                  15.93032
                ],
                [
                  100.78108,
                  15.93511
                ],
                [
                  100.78501,
                  15.93337
                ],
                [
                  100.78929,
                  15.93644
                ],
                [
                  100.79708,
                  15.93512
                ],
                [
                  100.79899,
                  15.93623
                ],
                [
                  100.7968,
                  15.94078
                ],
                [
                  100.79767,
                  15.94151
                ],
                [
                  100.79556,
                  15.94242
                ],
                [
                  100.79376,
                  15.94637
                ],
                [
                  100.79403,
                  15.95185
                ],
                [
                  100.79133,
                  15.955
                ],
                [
                  100.79114,
                  15.95823
                ],
                [
                  100.77832,
                  15.96557
                ],
                [
                  100.7794,
                  15.96812
                ],
                [
                  100.7777,
                  15.97179
                ],
                [
                  100.78018,
                  15.97785
                ],
                [
                  100.78412,
                  15.98117
                ],
                [
                  100.78291,
                  15.98235
                ],
                [
                  100.78395,
                  15.99011
                ],
                [
                  100.78518,
                  15.99163
                ],
                [
                  100.78208,
                  15.99403
                ],
                [
                  100.78403,
                  15.99821
                ],
                [
                  100.78997,
                  15.99552
                ],
                [
                  100.80021,
                  15.993
                ],
                [
                  100.80233,
                  15.99478
                ],
                [
                  100.80504,
                  16.00425
                ],
                [
                  100.80263,
                  16.01564
                ],
                [
                  100.80713,
                  16.01676
                ],
                [
                  100.80861,
                  16.01557
                ],
                [
                  100.80984,
                  16.02843
                ],
                [
                  100.80901,
                  16.03516
                ],
                [
                  100.80416,
                  16.03961
                ],
                [
                  100.80294,
                  16.04451
                ],
                [
                  100.80366,
                  16.04601
                ],
                [
                  100.80754,
                  16.04879
                ],
                [
                  100.81035,
                  16.05618
                ],
                [
                  100.81791,
                  16.06017
                ],
                [
                  100.82099,
                  16.05916
                ],
                [
                  100.82145,
                  16.06307
                ],
                [
                  100.82315,
                  16.06426
                ],
                [
                  100.82746,
                  16.06451
                ],
                [
                  100.83259,
                  16.06839
                ],
                [
                  100.83532,
                  16.0688
                ],
                [
                  100.83672,
                  16.06731
                ],
                [
                  100.83826,
                  16.06904
                ],
                [
                  100.84029,
                  16.0693
                ],
                [
                  100.84115,
                  16.07159
                ],
                [
                  100.84298,
                  16.07049
                ],
                [
                  100.84401,
                  16.07173
                ],
                [
                  100.84894,
                  16.07118
                ],
                [
                  100.84978,
                  16.07378
                ],
                [
                  100.85748,
                  16.07735
                ],
                [
                  100.86382,
                  16.07302
                ],
                [
                  100.87394,
                  16.07371
                ]
              ]
            ]
          }
        },
        {
          "geocode": "670210",
          "tambon": "ต.ศาลาลาย",
          "amphoe": "อ.ชนแดน",
          "province": "จ.เพชรบูรณ์",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหัวถนน",
          "latitude": 16.086102,
          "longitude": 100.867742,
          "sum_rainfall_mm": 65.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.84693,
                  16.12931
                ],
                [
                  100.8514,
                  16.12644
                ],
                [
                  100.86046,
                  16.11776
                ],
                [
                  100.88022,
                  16.10408
                ],
                [
                  100.88314,
                  16.09569
                ],
                [
                  100.89293,
                  16.08484
                ],
                [
                  100.88844,
                  16.07962
                ],
                [
                  100.88219,
                  16.08157
                ],
                [
                  100.88238,
                  16.07762
                ],
                [
                  100.87566,
                  16.07393
                ],
                [
                  100.86458,
                  16.0729
                ],
                [
                  100.85786,
                  16.07733
                ],
                [
                  100.85634,
                  16.0762
                ],
                [
                  100.85447,
                  16.07662
                ],
                [
                  100.84978,
                  16.07378
                ],
                [
                  100.84894,
                  16.07118
                ],
                [
                  100.84401,
                  16.07173
                ],
                [
                  100.84298,
                  16.07049
                ],
                [
                  100.84115,
                  16.07159
                ],
                [
                  100.84029,
                  16.0693
                ],
                [
                  100.83826,
                  16.06904
                ],
                [
                  100.83672,
                  16.06731
                ],
                [
                  100.83532,
                  16.0688
                ],
                [
                  100.83259,
                  16.06839
                ],
                [
                  100.82746,
                  16.06451
                ],
                [
                  100.82315,
                  16.06426
                ],
                [
                  100.82145,
                  16.06307
                ],
                [
                  100.82099,
                  16.05916
                ],
                [
                  100.81791,
                  16.06017
                ],
                [
                  100.81014,
                  16.05561
                ],
                [
                  100.80038,
                  16.06468
                ],
                [
                  100.79565,
                  16.07539
                ],
                [
                  100.79366,
                  16.08664
                ],
                [
                  100.79064,
                  16.0901
                ],
                [
                  100.79526,
                  16.0933
                ],
                [
                  100.79642,
                  16.09555
                ],
                [
                  100.79765,
                  16.09559
                ],
                [
                  100.79884,
                  16.1002
                ],
                [
                  100.79126,
                  16.10025
                ],
                [
                  100.78116,
                  16.10833
                ],
                [
                  100.7741,
                  16.12017
                ],
                [
                  100.77165,
                  16.12656
                ],
                [
                  100.77178,
                  16.13498
                ],
                [
                  100.77286,
                  16.13509
                ],
                [
                  100.77304,
                  16.13675
                ],
                [
                  100.77422,
                  16.13545
                ],
                [
                  100.7759,
                  16.14036
                ],
                [
                  100.77712,
                  16.13973
                ],
                [
                  100.77733,
                  16.14071
                ],
                [
                  100.77856,
                  16.14
                ],
                [
                  100.77953,
                  16.14079
                ],
                [
                  100.7794,
                  16.13897
                ],
                [
                  100.78046,
                  16.13917
                ],
                [
                  100.78022,
                  16.14169
                ],
                [
                  100.77692,
                  16.14344
                ],
                [
                  100.77701,
                  16.14486
                ],
                [
                  100.77951,
                  16.14379
                ],
                [
                  100.78022,
                  16.14572
                ],
                [
                  100.78401,
                  16.14722
                ],
                [
                  100.78535,
                  16.14565
                ],
                [
                  100.78724,
                  16.14624
                ],
                [
                  100.78824,
                  16.14391
                ],
                [
                  100.78946,
                  16.14543
                ],
                [
                  100.78917,
                  16.14823
                ],
                [
                  100.79071,
                  16.14841
                ],
                [
                  100.79206,
                  16.15038
                ],
                [
                  100.79304,
                  16.15056
                ],
                [
                  100.79403,
                  16.14872
                ],
                [
                  100.7965,
                  16.1518
                ],
                [
                  100.79926,
                  16.15198
                ],
                [
                  100.80067,
                  16.14996
                ],
                [
                  100.80076,
                  16.15238
                ],
                [
                  100.80492,
                  16.15391
                ],
                [
                  100.80489,
                  16.15578
                ],
                [
                  100.80691,
                  16.15693
                ],
                [
                  100.80568,
                  16.15865
                ],
                [
                  100.80746,
                  16.15981
                ],
                [
                  100.80795,
                  16.15753
                ],
                [
                  100.80909,
                  16.15963
                ],
                [
                  100.8107,
                  16.15799
                ],
                [
                  100.80819,
                  16.15685
                ],
                [
                  100.80716,
                  16.15003
                ],
                [
                  100.8031,
                  16.14408
                ],
                [
                  100.80317,
                  16.14132
                ],
                [
                  100.81082,
                  16.13255
                ],
                [
                  100.82455,
                  16.12167
                ],
                [
                  100.8331,
                  16.1163
                ],
                [
                  100.84119,
                  16.11671
                ],
                [
                  100.84377,
                  16.11861
                ],
                [
                  100.84481,
                  16.1261
                ],
                [
                  100.84693,
                  16.12931
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 59.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.71095,
                  14.02345
                ],
                [
                  101.71313,
                  14.00526
                ],
                [
                  101.71173,
                  14.00209
                ],
                [
                  101.71037,
                  14.00219
                ],
                [
                  101.70909,
                  13.99847
                ],
                [
                  101.71277,
                  13.99414
                ],
                [
                  101.71436,
                  13.9941
                ],
                [
                  101.71374,
                  13.99825
                ],
                [
                  101.71461,
                  13.99898
                ],
                [
                  101.71889,
                  13.99566
                ],
                [
                  101.72087,
                  13.99201
                ],
                [
                  101.72397,
                  13.99424
                ],
                [
                  101.72835,
                  13.99096
                ],
                [
                  101.72357,
                  13.98955
                ],
                [
                  101.72383,
                  13.98734
                ],
                [
                  101.72747,
                  13.98455
                ],
                [
                  101.73026,
                  13.98399
                ],
                [
                  101.73296,
                  13.97874
                ],
                [
                  101.73697,
                  13.9751
                ],
                [
                  101.73732,
                  13.97254
                ],
                [
                  101.73574,
                  13.9696
                ],
                [
                  101.73839,
                  13.96814
                ],
                [
                  101.73591,
                  13.96717
                ],
                [
                  101.73558,
                  13.96574
                ],
                [
                  101.73615,
                  13.96359
                ],
                [
                  101.73737,
                  13.96315
                ],
                [
                  101.73395,
                  13.96059
                ],
                [
                  101.73286,
                  13.95416
                ],
                [
                  101.72679,
                  13.94891
                ],
                [
                  101.72879,
                  13.9355
                ],
                [
                  101.73601,
                  13.91183
                ],
                [
                  101.73506,
                  13.90654
                ],
                [
                  101.73256,
                  13.90175
                ],
                [
                  101.73629,
                  13.89905
                ],
                [
                  101.74126,
                  13.89147
                ],
                [
                  101.74488,
                  13.87809
                ],
                [
                  101.74023,
                  13.87351
                ],
                [
                  101.7313,
                  13.87087
                ],
                [
                  101.7285,
                  13.86785
                ],
                [
                  101.72264,
                  13.86689
                ],
                [
                  101.71917,
                  13.8616
                ],
                [
                  101.70793,
                  13.86616
                ],
                [
                  101.70424,
                  13.88459
                ],
                [
                  101.69925,
                  13.8907
                ],
                [
                  101.6992,
                  13.89358
                ],
                [
                  101.69628,
                  13.90044
                ],
                [
                  101.69625,
                  13.90261
                ],
                [
                  101.69799,
                  13.90492
                ],
                [
                  101.69598,
                  13.90684
                ],
                [
                  101.69391,
                  13.91236
                ],
                [
                  101.69332,
                  13.93206
                ],
                [
                  101.68817,
                  13.93925
                ],
                [
                  101.68229,
                  13.94353
                ],
                [
                  101.6852,
                  13.95109
                ],
                [
                  101.68458,
                  13.95718
                ],
                [
                  101.68705,
                  13.96018
                ],
                [
                  101.68538,
                  13.97426
                ],
                [
                  101.68273,
                  13.97736
                ],
                [
                  101.6784,
                  13.9756
                ],
                [
                  101.67195,
                  13.97966
                ],
                [
                  101.67334,
                  13.99188
                ],
                [
                  101.67227,
                  13.99532
                ],
                [
                  101.68742,
                  13.99463
                ],
                [
                  101.69592,
                  14.00188
                ],
                [
                  101.69725,
                  14.0014
                ],
                [
                  101.70557,
                  14.00982
                ],
                [
                  101.70893,
                  14.02245
                ],
                [
                  101.71066,
                  14.02529
                ],
                [
                  101.71095,
                  14.02345
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
          "sum_rainfall_mm": 69.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "250214",
          "tambon": "ต.วังท่าช้าง",
          "amphoe": "อ.กบินทร์บุรี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเนินหินกอง",
          "latitude": 13.782015,
          "longitude": 101.900566,
          "sum_rainfall_mm": 37.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.93926,
                  13.81078
                ],
                [
                  101.94208,
                  13.81107
                ],
                [
                  101.94613,
                  13.80681
                ],
                [
                  101.94807,
                  13.79908
                ],
                [
                  101.94389,
                  13.78853
                ],
                [
                  101.9445,
                  13.78504
                ],
                [
                  101.94121,
                  13.75786
                ],
                [
                  101.94177,
                  13.75486
                ],
                [
                  101.93903,
                  13.74388
                ],
                [
                  101.93616,
                  13.74049
                ],
                [
                  101.93959,
                  13.73861
                ],
                [
                  101.94158,
                  13.73916
                ],
                [
                  101.93862,
                  13.72398
                ],
                [
                  101.93889,
                  13.71667
                ],
                [
                  101.93765,
                  13.7107
                ],
                [
                  101.94033,
                  13.70847
                ],
                [
                  101.94294,
                  13.70118
                ],
                [
                  101.94264,
                  13.69511
                ],
                [
                  101.94497,
                  13.68737
                ],
                [
                  101.94426,
                  13.67686
                ],
                [
                  101.94763,
                  13.67242
                ],
                [
                  101.94859,
                  13.66803
                ],
                [
                  101.94369,
                  13.65049
                ],
                [
                  101.9388,
                  13.64688
                ],
                [
                  101.9404,
                  13.64334
                ],
                [
                  101.9391,
                  13.63984
                ],
                [
                  101.9394,
                  13.63662
                ],
                [
                  101.93575,
                  13.62879
                ],
                [
                  101.94172,
                  13.61955
                ],
                [
                  101.94204,
                  13.61624
                ],
                [
                  101.93341,
                  13.61119
                ],
                [
                  101.92059,
                  13.61112
                ],
                [
                  101.90952,
                  13.60492
                ],
                [
                  101.90874,
                  13.60165
                ],
                [
                  101.91221,
                  13.59403
                ],
                [
                  101.91248,
                  13.58904
                ],
                [
                  101.91566,
                  13.58552
                ],
                [
                  101.91046,
                  13.58697
                ],
                [
                  101.90408,
                  13.58665
                ],
                [
                  101.89856,
                  13.58317
                ],
                [
                  101.89267,
                  13.58446
                ],
                [
                  101.88996,
                  13.58232
                ],
                [
                  101.88432,
                  13.59734
                ],
                [
                  101.87898,
                  13.60161
                ],
                [
                  101.87642,
                  13.60032
                ],
                [
                  101.87254,
                  13.60178
                ],
                [
                  101.86983,
                  13.60503
                ],
                [
                  101.87019,
                  13.61059
                ],
                [
                  101.86475,
                  13.62002
                ],
                [
                  101.86469,
                  13.63154
                ],
                [
                  101.86143,
                  13.63297
                ],
                [
                  101.85828,
                  13.63627
                ],
                [
                  101.83285,
                  13.63669
                ],
                [
                  101.83253,
                  13.64376
                ],
                [
                  101.83406,
                  13.64712
                ],
                [
                  101.83468,
                  13.65342
                ],
                [
                  101.83816,
                  13.65932
                ],
                [
                  101.83732,
                  13.66633
                ],
                [
                  101.83841,
                  13.66882
                ],
                [
                  101.83609,
                  13.67348
                ],
                [
                  101.84163,
                  13.68127
                ],
                [
                  101.83855,
                  13.68695
                ],
                [
                  101.83755,
                  13.69599
                ],
                [
                  101.8355,
                  13.70104
                ],
                [
                  101.82867,
                  13.7049
                ],
                [
                  101.82197,
                  13.70558
                ],
                [
                  101.82527,
                  13.7099
                ],
                [
                  101.82729,
                  13.71501
                ],
                [
                  101.83197,
                  13.71533
                ],
                [
                  101.83452,
                  13.72607
                ],
                [
                  101.83828,
                  13.72792
                ],
                [
                  101.84048,
                  13.73116
                ],
                [
                  101.84063,
                  13.73559
                ],
                [
                  101.83928,
                  13.74047
                ],
                [
                  101.84011,
                  13.74238
                ],
                [
                  101.84673,
                  13.74916
                ],
                [
                  101.85159,
                  13.75151
                ],
                [
                  101.85645,
                  13.752
                ],
                [
                  101.86371,
                  13.75847
                ],
                [
                  101.86376,
                  13.76539
                ],
                [
                  101.86764,
                  13.77124
                ],
                [
                  101.87014,
                  13.77955
                ],
                [
                  101.86992,
                  13.78273
                ],
                [
                  101.87717,
                  13.78732
                ],
                [
                  101.87896,
                  13.79049
                ],
                [
                  101.88132,
                  13.78987
                ],
                [
                  101.88995,
                  13.79147
                ],
                [
                  101.89173,
                  13.79405
                ],
                [
                  101.89195,
                  13.7973
                ],
                [
                  101.89957,
                  13.80001
                ],
                [
                  101.90552,
                  13.79918
                ],
                [
                  101.92363,
                  13.79355
                ],
                [
                  101.92345,
                  13.80796
                ],
                [
                  101.92229,
                  13.81292
                ],
                [
                  101.92392,
                  13.8162
                ],
                [
                  101.93926,
                  13.81078
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 29.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.93926,
                  13.81078
                ],
                [
                  101.94208,
                  13.81107
                ],
                [
                  101.94613,
                  13.80681
                ],
                [
                  101.94807,
                  13.79908
                ],
                [
                  101.94389,
                  13.78853
                ],
                [
                  101.9445,
                  13.78504
                ],
                [
                  101.94121,
                  13.75786
                ],
                [
                  101.94177,
                  13.75486
                ],
                [
                  101.93903,
                  13.74388
                ],
                [
                  101.93616,
                  13.74049
                ],
                [
                  101.93959,
                  13.73861
                ],
                [
                  101.94158,
                  13.73916
                ],
                [
                  101.93862,
                  13.72398
                ],
                [
                  101.93889,
                  13.71667
                ],
                [
                  101.93765,
                  13.7107
                ],
                [
                  101.94033,
                  13.70847
                ],
                [
                  101.94294,
                  13.70118
                ],
                [
                  101.94264,
                  13.69511
                ],
                [
                  101.94497,
                  13.68737
                ],
                [
                  101.94426,
                  13.67686
                ],
                [
                  101.94763,
                  13.67242
                ],
                [
                  101.94859,
                  13.66803
                ],
                [
                  101.94369,
                  13.65049
                ],
                [
                  101.9388,
                  13.64688
                ],
                [
                  101.9404,
                  13.64334
                ],
                [
                  101.9391,
                  13.63984
                ],
                [
                  101.9394,
                  13.63662
                ],
                [
                  101.93575,
                  13.62879
                ],
                [
                  101.94172,
                  13.61955
                ],
                [
                  101.94204,
                  13.61624
                ],
                [
                  101.93341,
                  13.61119
                ],
                [
                  101.92059,
                  13.61112
                ],
                [
                  101.90952,
                  13.60492
                ],
                [
                  101.90874,
                  13.60165
                ],
                [
                  101.91221,
                  13.59403
                ],
                [
                  101.91248,
                  13.58904
                ],
                [
                  101.91566,
                  13.58552
                ],
                [
                  101.91046,
                  13.58697
                ],
                [
                  101.90408,
                  13.58665
                ],
                [
                  101.89856,
                  13.58317
                ],
                [
                  101.89267,
                  13.58446
                ],
                [
                  101.88996,
                  13.58232
                ],
                [
                  101.88432,
                  13.59734
                ],
                [
                  101.87898,
                  13.60161
                ],
                [
                  101.87642,
                  13.60032
                ],
                [
                  101.87254,
                  13.60178
                ],
                [
                  101.86983,
                  13.60503
                ],
                [
                  101.87019,
                  13.61059
                ],
                [
                  101.86475,
                  13.62002
                ],
                [
                  101.86469,
                  13.63154
                ],
                [
                  101.86143,
                  13.63297
                ],
                [
                  101.85828,
                  13.63627
                ],
                [
                  101.83285,
                  13.63669
                ],
                [
                  101.83253,
                  13.64376
                ],
                [
                  101.83406,
                  13.64712
                ],
                [
                  101.83468,
                  13.65342
                ],
                [
                  101.83816,
                  13.65932
                ],
                [
                  101.83732,
                  13.66633
                ],
                [
                  101.83841,
                  13.66882
                ],
                [
                  101.83609,
                  13.67348
                ],
                [
                  101.84163,
                  13.68127
                ],
                [
                  101.83855,
                  13.68695
                ],
                [
                  101.83755,
                  13.69599
                ],
                [
                  101.8355,
                  13.70104
                ],
                [
                  101.82867,
                  13.7049
                ],
                [
                  101.82197,
                  13.70558
                ],
                [
                  101.82527,
                  13.7099
                ],
                [
                  101.82729,
                  13.71501
                ],
                [
                  101.83197,
                  13.71533
                ],
                [
                  101.83452,
                  13.72607
                ],
                [
                  101.83828,
                  13.72792
                ],
                [
                  101.84048,
                  13.73116
                ],
                [
                  101.84063,
                  13.73559
                ],
                [
                  101.83928,
                  13.74047
                ],
                [
                  101.84011,
                  13.74238
                ],
                [
                  101.84673,
                  13.74916
                ],
                [
                  101.85159,
                  13.75151
                ],
                [
                  101.85645,
                  13.752
                ],
                [
                  101.86371,
                  13.75847
                ],
                [
                  101.86376,
                  13.76539
                ],
                [
                  101.86764,
                  13.77124
                ],
                [
                  101.87014,
                  13.77955
                ],
                [
                  101.86992,
                  13.78273
                ],
                [
                  101.87717,
                  13.78732
                ],
                [
                  101.87896,
                  13.79049
                ],
                [
                  101.88132,
                  13.78987
                ],
                [
                  101.88995,
                  13.79147
                ],
                [
                  101.89173,
                  13.79405
                ],
                [
                  101.89195,
                  13.7973
                ],
                [
                  101.89957,
                  13.80001
                ],
                [
                  101.90552,
                  13.79918
                ],
                [
                  101.92363,
                  13.79355
                ],
                [
                  101.92345,
                  13.80796
                ],
                [
                  101.92229,
                  13.81292
                ],
                [
                  101.92392,
                  13.8162
                ],
                [
                  101.93926,
                  13.81078
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 125.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.90748,
                  14.08554
                ],
                [
                  101.89125,
                  14.07328
                ],
                [
                  101.89207,
                  14.06922
                ],
                [
                  101.8969,
                  14.05955
                ],
                [
                  101.89825,
                  14.05424
                ],
                [
                  101.89707,
                  14.05252
                ],
                [
                  101.89771,
                  14.05106
                ],
                [
                  101.89482,
                  14.05064
                ],
                [
                  101.89319,
                  14.04888
                ],
                [
                  101.89149,
                  14.04931
                ],
                [
                  101.89082,
                  14.0477
                ],
                [
                  101.88913,
                  14.04953
                ],
                [
                  101.88607,
                  14.04909
                ],
                [
                  101.88601,
                  14.04538
                ],
                [
                  101.88042,
                  14.04299
                ],
                [
                  101.87829,
                  14.03767
                ],
                [
                  101.87523,
                  14.03927
                ],
                [
                  101.87303,
                  14.03759
                ],
                [
                  101.87071,
                  14.03904
                ],
                [
                  101.86713,
                  14.03932
                ],
                [
                  101.86597,
                  14.03617
                ],
                [
                  101.86632,
                  14.03262
                ],
                [
                  101.86355,
                  14.02767
                ],
                [
                  101.85937,
                  14.02358
                ],
                [
                  101.85459,
                  14.0246
                ],
                [
                  101.85164,
                  14.02914
                ],
                [
                  101.84791,
                  14.03028
                ],
                [
                  101.84643,
                  14.02699
                ],
                [
                  101.84511,
                  14.02642
                ],
                [
                  101.84262,
                  14.02819
                ],
                [
                  101.84121,
                  14.03093
                ],
                [
                  101.83954,
                  14.0303
                ],
                [
                  101.83834,
                  14.02451
                ],
                [
                  101.8369,
                  14.02393
                ],
                [
                  101.83311,
                  14.0275
                ],
                [
                  101.83261,
                  14.02974
                ],
                [
                  101.82866,
                  14.02939
                ],
                [
                  101.82752,
                  14.02789
                ],
                [
                  101.82509,
                  14.02931
                ],
                [
                  101.82453,
                  14.03059
                ],
                [
                  101.82565,
                  14.03347
                ],
                [
                  101.82209,
                  14.03375
                ],
                [
                  101.82138,
                  14.03903
                ],
                [
                  101.81648,
                  14.03976
                ],
                [
                  101.80957,
                  14.04309
                ],
                [
                  101.80582,
                  14.04219
                ],
                [
                  101.80274,
                  14.04317
                ],
                [
                  101.79705,
                  14.04828
                ],
                [
                  101.79309,
                  14.04609
                ],
                [
                  101.7864,
                  14.04512
                ],
                [
                  101.78276,
                  14.04804
                ],
                [
                  101.77925,
                  14.04615
                ],
                [
                  101.77528,
                  14.04837
                ],
                [
                  101.77653,
                  14.05213
                ],
                [
                  101.77954,
                  14.04873
                ],
                [
                  101.78236,
                  14.05061
                ],
                [
                  101.78453,
                  14.05068
                ],
                [
                  101.79117,
                  14.05776
                ],
                [
                  101.79156,
                  14.06065
                ],
                [
                  101.79063,
                  14.06218
                ],
                [
                  101.79164,
                  14.0696
                ],
                [
                  101.79377,
                  14.0723
                ],
                [
                  101.79476,
                  14.0761
                ],
                [
                  101.80143,
                  14.07852
                ],
                [
                  101.80329,
                  14.08074
                ],
                [
                  101.80346,
                  14.08877
                ],
                [
                  101.80569,
                  14.09227
                ],
                [
                  101.80583,
                  14.09492
                ],
                [
                  101.80914,
                  14.09779
                ],
                [
                  101.80934,
                  14.10144
                ],
                [
                  101.81121,
                  14.09664
                ],
                [
                  101.81553,
                  14.09699
                ],
                [
                  101.81714,
                  14.09986
                ],
                [
                  101.81992,
                  14.09707
                ],
                [
                  101.82377,
                  14.10002
                ],
                [
                  101.82465,
                  14.09751
                ],
                [
                  101.82131,
                  14.09254
                ],
                [
                  101.82282,
                  14.0909
                ],
                [
                  101.82656,
                  14.09017
                ],
                [
                  101.84078,
                  14.10643
                ],
                [
                  101.85334,
                  14.10028
                ],
                [
                  101.85569,
                  14.10835
                ],
                [
                  101.85689,
                  14.10429
                ],
                [
                  101.86492,
                  14.09687
                ],
                [
                  101.86607,
                  14.10217
                ],
                [
                  101.86375,
                  14.10489
                ],
                [
                  101.86337,
                  14.1119
                ],
                [
                  101.86766,
                  14.11422
                ],
                [
                  101.86971,
                  14.11278
                ],
                [
                  101.87372,
                  14.11283
                ],
                [
                  101.8798,
                  14.12352
                ],
                [
                  101.88456,
                  14.11958
                ],
                [
                  101.88745,
                  14.11875
                ],
                [
                  101.88942,
                  14.11642
                ],
                [
                  101.89829,
                  14.10369
                ],
                [
                  101.90748,
                  14.08554
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 161.8,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.90748,
                  14.08554
                ],
                [
                  101.89125,
                  14.07328
                ],
                [
                  101.89207,
                  14.06922
                ],
                [
                  101.8969,
                  14.05955
                ],
                [
                  101.89825,
                  14.05424
                ],
                [
                  101.89707,
                  14.05252
                ],
                [
                  101.89771,
                  14.05106
                ],
                [
                  101.89482,
                  14.05064
                ],
                [
                  101.89319,
                  14.04888
                ],
                [
                  101.89149,
                  14.04931
                ],
                [
                  101.89082,
                  14.0477
                ],
                [
                  101.88913,
                  14.04953
                ],
                [
                  101.88607,
                  14.04909
                ],
                [
                  101.88601,
                  14.04538
                ],
                [
                  101.88042,
                  14.04299
                ],
                [
                  101.87829,
                  14.03767
                ],
                [
                  101.87523,
                  14.03927
                ],
                [
                  101.87303,
                  14.03759
                ],
                [
                  101.87071,
                  14.03904
                ],
                [
                  101.86713,
                  14.03932
                ],
                [
                  101.86597,
                  14.03617
                ],
                [
                  101.86632,
                  14.03262
                ],
                [
                  101.86355,
                  14.02767
                ],
                [
                  101.85937,
                  14.02358
                ],
                [
                  101.85459,
                  14.0246
                ],
                [
                  101.85164,
                  14.02914
                ],
                [
                  101.84791,
                  14.03028
                ],
                [
                  101.84643,
                  14.02699
                ],
                [
                  101.84511,
                  14.02642
                ],
                [
                  101.84262,
                  14.02819
                ],
                [
                  101.84121,
                  14.03093
                ],
                [
                  101.83954,
                  14.0303
                ],
                [
                  101.83834,
                  14.02451
                ],
                [
                  101.8369,
                  14.02393
                ],
                [
                  101.83311,
                  14.0275
                ],
                [
                  101.83261,
                  14.02974
                ],
                [
                  101.82866,
                  14.02939
                ],
                [
                  101.82752,
                  14.02789
                ],
                [
                  101.82509,
                  14.02931
                ],
                [
                  101.82453,
                  14.03059
                ],
                [
                  101.82565,
                  14.03347
                ],
                [
                  101.82209,
                  14.03375
                ],
                [
                  101.82138,
                  14.03903
                ],
                [
                  101.81648,
                  14.03976
                ],
                [
                  101.80957,
                  14.04309
                ],
                [
                  101.80582,
                  14.04219
                ],
                [
                  101.80274,
                  14.04317
                ],
                [
                  101.79705,
                  14.04828
                ],
                [
                  101.79309,
                  14.04609
                ],
                [
                  101.7864,
                  14.04512
                ],
                [
                  101.78276,
                  14.04804
                ],
                [
                  101.77925,
                  14.04615
                ],
                [
                  101.77528,
                  14.04837
                ],
                [
                  101.77653,
                  14.05213
                ],
                [
                  101.77954,
                  14.04873
                ],
                [
                  101.78236,
                  14.05061
                ],
                [
                  101.78453,
                  14.05068
                ],
                [
                  101.79117,
                  14.05776
                ],
                [
                  101.79156,
                  14.06065
                ],
                [
                  101.79063,
                  14.06218
                ],
                [
                  101.79164,
                  14.0696
                ],
                [
                  101.79377,
                  14.0723
                ],
                [
                  101.79476,
                  14.0761
                ],
                [
                  101.80143,
                  14.07852
                ],
                [
                  101.80329,
                  14.08074
                ],
                [
                  101.80346,
                  14.08877
                ],
                [
                  101.80569,
                  14.09227
                ],
                [
                  101.80583,
                  14.09492
                ],
                [
                  101.80914,
                  14.09779
                ],
                [
                  101.80934,
                  14.10144
                ],
                [
                  101.81121,
                  14.09664
                ],
                [
                  101.81553,
                  14.09699
                ],
                [
                  101.81714,
                  14.09986
                ],
                [
                  101.81992,
                  14.09707
                ],
                [
                  101.82377,
                  14.10002
                ],
                [
                  101.82465,
                  14.09751
                ],
                [
                  101.82131,
                  14.09254
                ],
                [
                  101.82282,
                  14.0909
                ],
                [
                  101.82656,
                  14.09017
                ],
                [
                  101.84078,
                  14.10643
                ],
                [
                  101.85334,
                  14.10028
                ],
                [
                  101.85569,
                  14.10835
                ],
                [
                  101.85689,
                  14.10429
                ],
                [
                  101.86492,
                  14.09687
                ],
                [
                  101.86607,
                  14.10217
                ],
                [
                  101.86375,
                  14.10489
                ],
                [
                  101.86337,
                  14.1119
                ],
                [
                  101.86766,
                  14.11422
                ],
                [
                  101.86971,
                  14.11278
                ],
                [
                  101.87372,
                  14.11283
                ],
                [
                  101.8798,
                  14.12352
                ],
                [
                  101.88456,
                  14.11958
                ],
                [
                  101.88745,
                  14.11875
                ],
                [
                  101.88942,
                  14.11642
                ],
                [
                  101.89829,
                  14.10369
                ],
                [
                  101.90748,
                  14.08554
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250305",
          "tambon": "ต.แก่งดินสอ",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "โรงเรียนบ้านหินเทิน",
          "latitude": 14.064819,
          "longitude": 102.01052,
          "sum_rainfall_mm": 140.2,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.05789,
                  14.17758
                ],
                [
                  102.06498,
                  14.16924
                ],
                [
                  102.07152,
                  14.16415
                ],
                [
                  102.08396,
                  14.16162
                ],
                [
                  102.09917,
                  14.15665
                ],
                [
                  102.10673,
                  14.15136
                ],
                [
                  102.10315,
                  14.13821
                ],
                [
                  102.09823,
                  14.12642
                ],
                [
                  102.09785,
                  14.11649
                ],
                [
                  102.09953,
                  14.10767
                ],
                [
                  102.09883,
                  14.10389
                ],
                [
                  102.09026,
                  14.09374
                ],
                [
                  102.08766,
                  14.08782
                ],
                [
                  102.08651,
                  14.08289
                ],
                [
                  102.08541,
                  14.0618
                ],
                [
                  102.07816,
                  14.04608
                ],
                [
                  102.07525,
                  14.03506
                ],
                [
                  102.06668,
                  14.03581
                ],
                [
                  102.05519,
                  14.03405
                ],
                [
                  102.03839,
                  14.03556
                ],
                [
                  102.00544,
                  14.03188
                ],
                [
                  101.99417,
                  14.03262
                ],
                [
                  101.97573,
                  14.02921
                ],
                [
                  101.95827,
                  14.02223
                ],
                [
                  101.94347,
                  14.02413
                ],
                [
                  101.92217,
                  14.0199
                ],
                [
                  101.91867,
                  14.02038
                ],
                [
                  101.90389,
                  14.01834
                ],
                [
                  101.86307,
                  14.01119
                ],
                [
                  101.86336,
                  14.01349
                ],
                [
                  101.86851,
                  14.01498
                ],
                [
                  101.8703,
                  14.01762
                ],
                [
                  101.87293,
                  14.01699
                ],
                [
                  101.87503,
                  14.01805
                ],
                [
                  101.87773,
                  14.01695
                ],
                [
                  101.88122,
                  14.01733
                ],
                [
                  101.88362,
                  14.01906
                ],
                [
                  101.88636,
                  14.01874
                ],
                [
                  101.88735,
                  14.02149
                ],
                [
                  101.88576,
                  14.02778
                ],
                [
                  101.8869,
                  14.03221
                ],
                [
                  101.88252,
                  14.0359
                ],
                [
                  101.88337,
                  14.04366
                ],
                [
                  101.88619,
                  14.04566
                ],
                [
                  101.88607,
                  14.04909
                ],
                [
                  101.88913,
                  14.04953
                ],
                [
                  101.89082,
                  14.0477
                ],
                [
                  101.89149,
                  14.04931
                ],
                [
                  101.89319,
                  14.04888
                ],
                [
                  101.89482,
                  14.05064
                ],
                [
                  101.89771,
                  14.05106
                ],
                [
                  101.89707,
                  14.05252
                ],
                [
                  101.89823,
                  14.05394
                ],
                [
                  101.89613,
                  14.06202
                ],
                [
                  101.89207,
                  14.06922
                ],
                [
                  101.89145,
                  14.0739
                ],
                [
                  101.89449,
                  14.07513
                ],
                [
                  101.90891,
                  14.08615
                ],
                [
                  101.91996,
                  14.08807
                ],
                [
                  101.9239,
                  14.08437
                ],
                [
                  101.92962,
                  14.0926
                ],
                [
                  101.93908,
                  14.09813
                ],
                [
                  101.94157,
                  14.10093
                ],
                [
                  101.94678,
                  14.10287
                ],
                [
                  101.9516,
                  14.11793
                ],
                [
                  101.95021,
                  14.11966
                ],
                [
                  101.954,
                  14.12068
                ],
                [
                  101.95491,
                  14.12248
                ],
                [
                  101.95731,
                  14.1227
                ],
                [
                  101.95876,
                  14.12797
                ],
                [
                  101.96472,
                  14.13485
                ],
                [
                  101.96529,
                  14.14215
                ],
                [
                  101.96246,
                  14.14438
                ],
                [
                  101.96276,
                  14.14722
                ],
                [
                  101.96154,
                  14.15003
                ],
                [
                  101.9656,
                  14.15187
                ],
                [
                  101.96708,
                  14.15546
                ],
                [
                  101.97149,
                  14.15766
                ],
                [
                  101.97904,
                  14.1566
                ],
                [
                  101.98611,
                  14.15903
                ],
                [
                  101.98916,
                  14.15777
                ],
                [
                  101.9902,
                  14.15371
                ],
                [
                  101.99154,
                  14.1525
                ],
                [
                  102.00028,
                  14.15042
                ],
                [
                  102.00853,
                  14.15131
                ],
                [
                  102.00962,
                  14.15768
                ],
                [
                  102.00474,
                  14.15985
                ],
                [
                  102.0041,
                  14.16354
                ],
                [
                  102.01056,
                  14.168
                ],
                [
                  102.01332,
                  14.17787
                ],
                [
                  102.01981,
                  14.18634
                ],
                [
                  102.0223,
                  14.19437
                ],
                [
                  102.02736,
                  14.19534
                ],
                [
                  102.03154,
                  14.19821
                ],
                [
                  102.0363,
                  14.19607
                ],
                [
                  102.04128,
                  14.18753
                ],
                [
                  102.05016,
                  14.18319
                ],
                [
                  102.05789,
                  14.17758
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250304",
          "tambon": "ต.ทุ่งโพธิ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "คลองห้วยยาง",
          "latitude": 14.136408,
          "longitude": 101.857475,
          "sum_rainfall_mm": 174.00000000000003,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.99619,
                  14.21169
                ],
                [
                  101.99717,
                  14.21014
                ],
                [
                  102.01111,
                  14.20305
                ],
                [
                  102.03154,
                  14.19821
                ],
                [
                  102.02736,
                  14.19534
                ],
                [
                  102.0223,
                  14.19437
                ],
                [
                  102.01981,
                  14.18634
                ],
                [
                  102.01332,
                  14.17787
                ],
                [
                  102.01056,
                  14.168
                ],
                [
                  102.0041,
                  14.16354
                ],
                [
                  102.00474,
                  14.15985
                ],
                [
                  102.00962,
                  14.15768
                ],
                [
                  102.00879,
                  14.15151
                ],
                [
                  102.00028,
                  14.15042
                ],
                [
                  101.99154,
                  14.1525
                ],
                [
                  101.9902,
                  14.15371
                ],
                [
                  101.98916,
                  14.15777
                ],
                [
                  101.98611,
                  14.15903
                ],
                [
                  101.97904,
                  14.1566
                ],
                [
                  101.97149,
                  14.15766
                ],
                [
                  101.96708,
                  14.15546
                ],
                [
                  101.9656,
                  14.15187
                ],
                [
                  101.96154,
                  14.15003
                ],
                [
                  101.96276,
                  14.14722
                ],
                [
                  101.96246,
                  14.14438
                ],
                [
                  101.96529,
                  14.14215
                ],
                [
                  101.96472,
                  14.13485
                ],
                [
                  101.95876,
                  14.12797
                ],
                [
                  101.95731,
                  14.1227
                ],
                [
                  101.95491,
                  14.12248
                ],
                [
                  101.954,
                  14.12068
                ],
                [
                  101.95021,
                  14.11966
                ],
                [
                  101.9516,
                  14.11793
                ],
                [
                  101.94678,
                  14.10287
                ],
                [
                  101.94157,
                  14.10093
                ],
                [
                  101.93908,
                  14.09813
                ],
                [
                  101.92962,
                  14.0926
                ],
                [
                  101.92425,
                  14.08456
                ],
                [
                  101.92304,
                  14.08447
                ],
                [
                  101.91996,
                  14.08807
                ],
                [
                  101.90748,
                  14.08554
                ],
                [
                  101.89829,
                  14.10369
                ],
                [
                  101.88967,
                  14.11607
                ],
                [
                  101.88745,
                  14.11875
                ],
                [
                  101.88456,
                  14.11958
                ],
                [
                  101.88018,
                  14.12356
                ],
                [
                  101.87372,
                  14.11283
                ],
                [
                  101.86971,
                  14.11278
                ],
                [
                  101.86766,
                  14.11422
                ],
                [
                  101.86337,
                  14.1119
                ],
                [
                  101.86375,
                  14.10489
                ],
                [
                  101.86607,
                  14.10217
                ],
                [
                  101.86492,
                  14.09687
                ],
                [
                  101.85689,
                  14.10429
                ],
                [
                  101.85569,
                  14.10835
                ],
                [
                  101.85334,
                  14.10028
                ],
                [
                  101.84078,
                  14.10643
                ],
                [
                  101.8522,
                  14.11871
                ],
                [
                  101.85167,
                  14.12037
                ],
                [
                  101.84796,
                  14.12237
                ],
                [
                  101.84995,
                  14.12652
                ],
                [
                  101.85331,
                  14.12681
                ],
                [
                  101.85636,
                  14.12408
                ],
                [
                  101.85658,
                  14.1254
                ],
                [
                  101.85468,
                  14.12746
                ],
                [
                  101.85544,
                  14.13176
                ],
                [
                  101.85806,
                  14.13794
                ],
                [
                  101.86254,
                  14.1433
                ],
                [
                  101.86958,
                  14.1568
                ],
                [
                  101.87123,
                  14.16316
                ],
                [
                  101.8681,
                  14.16545
                ],
                [
                  101.86251,
                  14.16218
                ],
                [
                  101.86155,
                  14.16535
                ],
                [
                  101.86236,
                  14.16965
                ],
                [
                  101.86417,
                  14.1716
                ],
                [
                  101.87044,
                  14.18543
                ],
                [
                  101.87244,
                  14.18476
                ],
                [
                  101.87217,
                  14.17973
                ],
                [
                  101.87912,
                  14.1728
                ],
                [
                  101.88509,
                  14.16463
                ],
                [
                  101.88404,
                  14.16149
                ],
                [
                  101.88485,
                  14.16085
                ],
                [
                  101.88657,
                  14.16207
                ],
                [
                  101.88813,
                  14.16159
                ],
                [
                  101.88984,
                  14.16619
                ],
                [
                  101.8937,
                  14.16738
                ],
                [
                  101.89401,
                  14.17005
                ],
                [
                  101.89626,
                  14.16749
                ],
                [
                  101.90368,
                  14.16766
                ],
                [
                  101.90821,
                  14.16921
                ],
                [
                  101.90855,
                  14.16647
                ],
                [
                  101.91059,
                  14.16475
                ],
                [
                  101.91297,
                  14.16429
                ],
                [
                  101.91511,
                  14.16543
                ],
                [
                  101.91892,
                  14.16195
                ],
                [
                  101.92172,
                  14.16494
                ],
                [
                  101.92422,
                  14.16459
                ],
                [
                  101.92823,
                  14.16711
                ],
                [
                  101.93077,
                  14.17193
                ],
                [
                  101.93244,
                  14.17224
                ],
                [
                  101.93354,
                  14.17068
                ],
                [
                  101.93522,
                  14.17048
                ],
                [
                  101.93876,
                  14.17654
                ],
                [
                  101.93623,
                  14.17452
                ],
                [
                  101.93282,
                  14.17635
                ],
                [
                  101.92928,
                  14.1764
                ],
                [
                  101.9279,
                  14.17927
                ],
                [
                  101.92844,
                  14.18222
                ],
                [
                  101.92695,
                  14.18345
                ],
                [
                  101.92376,
                  14.18187
                ],
                [
                  101.9199,
                  14.18271
                ],
                [
                  101.92124,
                  14.18545
                ],
                [
                  101.92848,
                  14.18935
                ],
                [
                  101.93329,
                  14.1884
                ],
                [
                  101.93404,
                  14.18612
                ],
                [
                  101.9374,
                  14.18722
                ],
                [
                  101.94204,
                  14.18663
                ],
                [
                  101.96365,
                  14.17337
                ],
                [
                  101.96874,
                  14.17278
                ],
                [
                  101.97088,
                  14.17119
                ],
                [
                  101.97527,
                  14.17342
                ],
                [
                  101.97401,
                  14.18054
                ],
                [
                  101.97225,
                  14.18299
                ],
                [
                  101.97299,
                  14.18774
                ],
                [
                  101.97147,
                  14.19126
                ],
                [
                  101.97181,
                  14.1934
                ],
                [
                  101.97361,
                  14.19372
                ],
                [
                  101.97732,
                  14.19767
                ],
                [
                  101.97896,
                  14.20191
                ],
                [
                  101.98642,
                  14.21179
                ],
                [
                  101.99001,
                  14.21301
                ],
                [
                  101.99409,
                  14.2104
                ],
                [
                  101.99619,
                  14.21169
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
          "station": "บ้านวังหิน",
          "latitude": 14.263495,
          "longitude": 101.891589,
          "sum_rainfall_mm": 22.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "250306",
          "tambon": "ต.บุพราหมณ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้าน กม.80",
          "latitude": 14.317818,
          "longitude": 101.837874,
          "sum_rainfall_mm": 33.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "250306",
          "tambon": "ต.บุพราหมณ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สะพานคลองลำพญาธาร",
          "latitude": 14.26568,
          "longitude": 101.89133,
          "sum_rainfall_mm": 34.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "250306",
          "tambon": "ต.บุพราหมณ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์คลองยาง",
          "latitude": 14.324904,
          "longitude": 101.84176,
          "sum_rainfall_mm": 27.2,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "250306",
          "tambon": "ต.บุพราหมณ์",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "อบต.บุพราหมณ์",
          "latitude": 14.20791,
          "longitude": 101.90556,
          "sum_rainfall_mm": 64.6,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "250303",
          "tambon": "ต.สะพานหิน",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "นาดี",
          "latitude": 14.133605,
          "longitude": 101.72767,
          "sum_rainfall_mm": 43.199999999999996,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.73043,
                  14.31673
                ],
                [
                  101.72496,
                  14.31016
                ],
                [
                  101.72465,
                  14.30741
                ],
                [
                  101.72673,
                  14.29849
                ],
                [
                  101.72522,
                  14.28916
                ],
                [
                  101.72377,
                  14.28795
                ],
                [
                  101.71846,
                  14.28721
                ],
                [
                  101.71644,
                  14.28473
                ],
                [
                  101.71616,
                  14.28165
                ],
                [
                  101.71659,
                  14.27904
                ],
                [
                  101.71892,
                  14.27746
                ],
                [
                  101.72419,
                  14.27579
                ],
                [
                  101.7271,
                  14.27643
                ],
                [
                  101.73009,
                  14.27464
                ],
                [
                  101.73256,
                  14.27516
                ],
                [
                  101.73547,
                  14.27043
                ],
                [
                  101.72902,
                  14.26816
                ],
                [
                  101.7263,
                  14.2659
                ],
                [
                  101.72516,
                  14.26348
                ],
                [
                  101.72583,
                  14.26067
                ],
                [
                  101.72501,
                  14.25294
                ],
                [
                  101.71773,
                  14.24665
                ],
                [
                  101.71533,
                  14.24298
                ],
                [
                  101.72004,
                  14.24164
                ],
                [
                  101.72224,
                  14.2397
                ],
                [
                  101.72373,
                  14.23692
                ],
                [
                  101.72435,
                  14.23064
                ],
                [
                  101.7199,
                  14.2172
                ],
                [
                  101.71779,
                  14.2132
                ],
                [
                  101.71472,
                  14.21033
                ],
                [
                  101.71653,
                  14.20872
                ],
                [
                  101.71637,
                  14.20751
                ],
                [
                  101.71323,
                  14.20343
                ],
                [
                  101.71246,
                  14.19935
                ],
                [
                  101.71494,
                  14.19366
                ],
                [
                  101.71997,
                  14.18692
                ],
                [
                  101.71958,
                  14.18223
                ],
                [
                  101.72108,
                  14.17885
                ],
                [
                  101.71936,
                  14.17033
                ],
                [
                  101.72512,
                  14.16654
                ],
                [
                  101.73044,
                  14.16565
                ],
                [
                  101.7317,
                  14.16427
                ],
                [
                  101.73086,
                  14.15907
                ],
                [
                  101.72837,
                  14.15342
                ],
                [
                  101.73263,
                  14.15449
                ],
                [
                  101.73602,
                  14.15289
                ],
                [
                  101.73298,
                  14.15271
                ],
                [
                  101.73115,
                  14.15016
                ],
                [
                  101.73226,
                  14.14587
                ],
                [
                  101.73401,
                  14.14414
                ],
                [
                  101.72788,
                  14.13472
                ],
                [
                  101.72906,
                  14.12953
                ],
                [
                  101.72389,
                  14.12252
                ],
                [
                  101.73309,
                  14.12002
                ],
                [
                  101.73381,
                  14.11701
                ],
                [
                  101.73713,
                  14.11556
                ],
                [
                  101.73888,
                  14.1127
                ],
                [
                  101.73914,
                  14.10746
                ],
                [
                  101.74643,
                  14.10269
                ],
                [
                  101.74966,
                  14.10199
                ],
                [
                  101.75073,
                  14.09781
                ],
                [
                  101.74264,
                  14.08818
                ],
                [
                  101.73596,
                  14.08267
                ],
                [
                  101.72624,
                  14.08035
                ],
                [
                  101.72304,
                  14.08176
                ],
                [
                  101.72063,
                  14.0848
                ],
                [
                  101.72069,
                  14.08911
                ],
                [
                  101.71556,
                  14.09245
                ],
                [
                  101.70904,
                  14.09313
                ],
                [
                  101.7063,
                  14.09488
                ],
                [
                  101.70315,
                  14.10191
                ],
                [
                  101.69884,
                  14.10199
                ],
                [
                  101.69506,
                  14.09891
                ],
                [
                  101.68857,
                  14.09887
                ],
                [
                  101.68439,
                  14.09677
                ],
                [
                  101.68309,
                  14.09457
                ],
                [
                  101.67804,
                  14.1026
                ],
                [
                  101.66959,
                  14.10518
                ],
                [
                  101.66831,
                  14.10868
                ],
                [
                  101.6642,
                  14.11284
                ],
                [
                  101.6628,
                  14.11634
                ],
                [
                  101.64934,
                  14.12749
                ],
                [
                  101.64742,
                  14.13269
                ],
                [
                  101.64216,
                  14.13755
                ],
                [
                  101.64033,
                  14.14108
                ],
                [
                  101.64208,
                  14.14545
                ],
                [
                  101.63813,
                  14.14932
                ],
                [
                  101.63668,
                  14.15401
                ],
                [
                  101.63909,
                  14.16202
                ],
                [
                  101.64618,
                  14.17241
                ],
                [
                  101.6469,
                  14.17523
                ],
                [
                  101.64618,
                  14.17882
                ],
                [
                  101.65116,
                  14.1867
                ],
                [
                  101.6553,
                  14.1886
                ],
                [
                  101.65758,
                  14.19249
                ],
                [
                  101.6636,
                  14.19363
                ],
                [
                  101.66958,
                  14.19086
                ],
                [
                  101.67149,
                  14.19193
                ],
                [
                  101.67401,
                  14.19736
                ],
                [
                  101.67509,
                  14.20501
                ],
                [
                  101.67219,
                  14.21168
                ],
                [
                  101.67337,
                  14.21764
                ],
                [
                  101.66897,
                  14.22697
                ],
                [
                  101.67151,
                  14.23659
                ],
                [
                  101.66306,
                  14.24629
                ],
                [
                  101.66902,
                  14.25612
                ],
                [
                  101.66883,
                  14.25974
                ],
                [
                  101.67376,
                  14.2711
                ],
                [
                  101.67389,
                  14.278
                ],
                [
                  101.68036,
                  14.27958
                ],
                [
                  101.68194,
                  14.28149
                ],
                [
                  101.67861,
                  14.29186
                ],
                [
                  101.6747,
                  14.29313
                ],
                [
                  101.67895,
                  14.29666
                ],
                [
                  101.67893,
                  14.29928
                ],
                [
                  101.67707,
                  14.30064
                ],
                [
                  101.67288,
                  14.29856
                ],
                [
                  101.67034,
                  14.30493
                ],
                [
                  101.66928,
                  14.30504
                ],
                [
                  101.66853,
                  14.30327
                ],
                [
                  101.66251,
                  14.30986
                ],
                [
                  101.66058,
                  14.30945
                ],
                [
                  101.65992,
                  14.30695
                ],
                [
                  101.65774,
                  14.30712
                ],
                [
                  101.65753,
                  14.30332
                ],
                [
                  101.65617,
                  14.30285
                ],
                [
                  101.65498,
                  14.304
                ],
                [
                  101.65565,
                  14.30674
                ],
                [
                  101.65267,
                  14.30958
                ],
                [
                  101.65144,
                  14.31455
                ],
                [
                  101.65668,
                  14.31739
                ],
                [
                  101.65497,
                  14.32242
                ],
                [
                  101.65691,
                  14.32421
                ],
                [
                  101.65663,
                  14.32685
                ],
                [
                  101.65573,
                  14.32871
                ],
                [
                  101.65252,
                  14.33044
                ],
                [
                  101.65081,
                  14.33391
                ],
                [
                  101.64765,
                  14.33477
                ],
                [
                  101.64691,
                  14.33597
                ],
                [
                  101.65101,
                  14.34213
                ],
                [
                  101.65245,
                  14.35415
                ],
                [
                  101.65119,
                  14.35614
                ],
                [
                  101.6418,
                  14.35871
                ],
                [
                  101.64338,
                  14.36363
                ],
                [
                  101.63961,
                  14.37492
                ],
                [
                  101.64291,
                  14.37971
                ],
                [
                  101.64633,
                  14.38104
                ],
                [
                  101.64836,
                  14.38347
                ],
                [
                  101.64767,
                  14.39006
                ],
                [
                  101.64905,
                  14.39245
                ],
                [
                  101.65404,
                  14.39265
                ],
                [
                  101.65577,
                  14.39164
                ],
                [
                  101.6793,
                  14.36692
                ],
                [
                  101.68399,
                  14.36394
                ],
                [
                  101.69228,
                  14.35561
                ],
                [
                  101.69542,
                  14.35004
                ],
                [
                  101.7065,
                  14.33877
                ],
                [
                  101.71209,
                  14.3313
                ],
                [
                  101.71747,
                  14.32912
                ],
                [
                  101.73043,
                  14.31673
                ]
              ]
            ]
          }
        },
        {
          "geocode": "250302",
          "tambon": "ต.สำพันตา",
          "amphoe": "อ.นาดี",
          "province": "จ.ปราจีนบุรี",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สะพานเจริญราษฎร์รังสรรค์",
          "latitude": 14.067594,
          "longitude": 101.75532,
          "sum_rainfall_mm": 85.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  101.80942,
                  14.10174
                ],
                [
                  101.80914,
                  14.09779
                ],
                [
                  101.80583,
                  14.09492
                ],
                [
                  101.80569,
                  14.09227
                ],
                [
                  101.80346,
                  14.08877
                ],
                [
                  101.80329,
                  14.08074
                ],
                [
                  101.80143,
                  14.07852
                ],
                [
                  101.79476,
                  14.0761
                ],
                [
                  101.79377,
                  14.0723
                ],
                [
                  101.79164,
                  14.0696
                ],
                [
                  101.79063,
                  14.06218
                ],
                [
                  101.79158,
                  14.0598
                ],
                [
                  101.78966,
                  14.05553
                ],
                [
                  101.78766,
                  14.05472
                ],
                [
                  101.78483,
                  14.05088
                ],
                [
                  101.78236,
                  14.05061
                ],
                [
                  101.78028,
                  14.04891
                ],
                [
                  101.77882,
                  14.04903
                ],
                [
                  101.77688,
                  14.0522
                ],
                [
                  101.77528,
                  14.04837
                ],
                [
                  101.77211,
                  14.04582
                ],
                [
                  101.76787,
                  14.04678
                ],
                [
                  101.76614,
                  14.04243
                ],
                [
                  101.76148,
                  14.03888
                ],
                [
                  101.76295,
                  14.03546
                ],
                [
                  101.76029,
                  14.03532
                ],
                [
                  101.75907,
                  14.03397
                ],
                [
                  101.75662,
                  14.03576
                ],
                [
                  101.75582,
                  14.0379
                ],
                [
                  101.75565,
                  14.03494
                ],
                [
                  101.7535,
                  14.03477
                ],
                [
                  101.75349,
                  14.03761
                ],
                [
                  101.75057,
                  14.03991
                ],
                [
                  101.75351,
                  14.04224
                ],
                [
                  101.75013,
                  14.0465
                ],
                [
                  101.74817,
                  14.04519
                ],
                [
                  101.74471,
                  14.04759
                ],
                [
                  101.74321,
                  14.05385
                ],
                [
                  101.74427,
                  14.05948
                ],
                [
                  101.74778,
                  14.05792
                ],
                [
                  101.74881,
                  14.05861
                ],
                [
                  101.74732,
                  14.06426
                ],
                [
                  101.75334,
                  14.06437
                ],
                [
                  101.75519,
                  14.06718
                ],
                [
                  101.75476,
                  14.06877
                ],
                [
                  101.74737,
                  14.07319
                ],
                [
                  101.7441,
                  14.07705
                ],
                [
                  101.74417,
                  14.08216
                ],
                [
                  101.74868,
                  14.08165
                ],
                [
                  101.75189,
                  14.08521
                ],
                [
                  101.75104,
                  14.08718
                ],
                [
                  101.74264,
                  14.08818
                ],
                [
                  101.75059,
                  14.09743
                ],
                [
                  101.74986,
                  14.10165
                ],
                [
                  101.74643,
                  14.10269
                ],
                [
                  101.73914,
                  14.10746
                ],
                [
                  101.73888,
                  14.1127
                ],
                [
                  101.73713,
                  14.11556
                ],
                [
                  101.73381,
                  14.11701
                ],
                [
                  101.73286,
                  14.12023
                ],
                [
                  101.72389,
                  14.12252
                ],
                [
                  101.72906,
                  14.12953
                ],
                [
                  101.72788,
                  14.13472
                ],
                [
                  101.73401,
                  14.14414
                ],
                [
                  101.73153,
                  14.14751
                ],
                [
                  101.73136,
                  14.15055
                ],
                [
                  101.73327,
                  14.15286
                ],
                [
                  101.73404,
                  14.15214
                ],
                [
                  101.73602,
                  14.15289
                ],
                [
                  101.73852,
                  14.15109
                ],
                [
                  101.7426,
                  14.15231
                ],
                [
                  101.74419,
                  14.15392
                ],
                [
                  101.74473,
                  14.15789
                ],
                [
                  101.75087,
                  14.16082
                ],
                [
                  101.7551,
                  14.15437
                ],
                [
                  101.75484,
                  14.14639
                ],
                [
                  101.75762,
                  14.14466
                ],
                [
                  101.75638,
                  14.13804
                ],
                [
                  101.75719,
                  14.13219
                ],
                [
                  101.75496,
                  14.13133
                ],
                [
                  101.75609,
                  14.12936
                ],
                [
                  101.7556,
                  14.12693
                ],
                [
                  101.75799,
                  14.12651
                ],
                [
                  101.75834,
                  14.12442
                ],
                [
                  101.7614,
                  14.12267
                ],
                [
                  101.76502,
                  14.12422
                ],
                [
                  101.76551,
                  14.12201
                ],
                [
                  101.76833,
                  14.11959
                ],
                [
                  101.77234,
                  14.1199
                ],
                [
                  101.77126,
                  14.11586
                ],
                [
                  101.77157,
                  14.11256
                ],
                [
                  101.7729,
                  14.11268
                ],
                [
                  101.77222,
                  14.10925
                ],
                [
                  101.77623,
                  14.10886
                ],
                [
                  101.78112,
                  14.10387
                ],
                [
                  101.78288,
                  14.10617
                ],
                [
                  101.79153,
                  14.10477
                ],
                [
                  101.79537,
                  14.10142
                ],
                [
                  101.79687,
                  14.09663
                ],
                [
                  101.80587,
                  14.10156
                ],
                [
                  101.80942,
                  14.10174
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
          "sum_rainfall_mm": 64.4,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "270508",
          "tambon": "ต.แซร์ออ",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านแผ่นดินเย็น",
          "latitude": 13.960406,
          "longitude": 102.505896,
          "sum_rainfall_mm": 86.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.49646,
                  14.13635
                ],
                [
                  102.49951,
                  14.13584
                ],
                [
                  102.50309,
                  14.12857
                ],
                [
                  102.5029,
                  14.12645
                ],
                [
                  102.49761,
                  14.11977
                ],
                [
                  102.49872,
                  14.10629
                ],
                [
                  102.50465,
                  14.09982
                ],
                [
                  102.50866,
                  14.09323
                ],
                [
                  102.51813,
                  14.09181
                ],
                [
                  102.5308,
                  14.09736
                ],
                [
                  102.53286,
                  14.09655
                ],
                [
                  102.53445,
                  14.08834
                ],
                [
                  102.53305,
                  14.08466
                ],
                [
                  102.53493,
                  14.08178
                ],
                [
                  102.53393,
                  14.07715
                ],
                [
                  102.53526,
                  14.07539
                ],
                [
                  102.53873,
                  14.07425
                ],
                [
                  102.53553,
                  14.06166
                ],
                [
                  102.53518,
                  14.04573
                ],
                [
                  102.53727,
                  14.0431
                ],
                [
                  102.54687,
                  14.03878
                ],
                [
                  102.54804,
                  14.03338
                ],
                [
                  102.54608,
                  14.0289
                ],
                [
                  102.54955,
                  14.02063
                ],
                [
                  102.55441,
                  14.01795
                ],
                [
                  102.55837,
                  14.01746
                ],
                [
                  102.55977,
                  14.00567
                ],
                [
                  102.5581,
                  13.99997
                ],
                [
                  102.55909,
                  13.99345
                ],
                [
                  102.56484,
                  13.98444
                ],
                [
                  102.56853,
                  13.9819
                ],
                [
                  102.57818,
                  13.97898
                ],
                [
                  102.58649,
                  13.98145
                ],
                [
                  102.5895,
                  13.97999
                ],
                [
                  102.59017,
                  13.9783
                ],
                [
                  102.58561,
                  13.96452
                ],
                [
                  102.58677,
                  13.96145
                ],
                [
                  102.59118,
                  13.95851
                ],
                [
                  102.59106,
                  13.95476
                ],
                [
                  102.58835,
                  13.95247
                ],
                [
                  102.58998,
                  13.95085
                ],
                [
                  102.58811,
                  13.94867
                ],
                [
                  102.58322,
                  13.94638
                ],
                [
                  102.57502,
                  13.93704
                ],
                [
                  102.56751,
                  13.93656
                ],
                [
                  102.55969,
                  13.93983
                ],
                [
                  102.55342,
                  13.94082
                ],
                [
                  102.54932,
                  13.94101
                ],
                [
                  102.54621,
                  13.93941
                ],
                [
                  102.53338,
                  13.94025
                ],
                [
                  102.53224,
                  13.93942
                ],
                [
                  102.53035,
                  13.93032
                ],
                [
                  102.53812,
                  13.92547
                ],
                [
                  102.53642,
                  13.91733
                ],
                [
                  102.54447,
                  13.91166
                ],
                [
                  102.54423,
                  13.90752
                ],
                [
                  102.54539,
                  13.90542
                ],
                [
                  102.54215,
                  13.90042
                ],
                [
                  102.5347,
                  13.89465
                ],
                [
                  102.5351,
                  13.89066
                ],
                [
                  102.53971,
                  13.88848
                ],
                [
                  102.53931,
                  13.875
                ],
                [
                  102.544,
                  13.86629
                ],
                [
                  102.54164,
                  13.8621
                ],
                [
                  102.53532,
                  13.86339
                ],
                [
                  102.53498,
                  13.8556
                ],
                [
                  102.52928,
                  13.85293
                ],
                [
                  102.51582,
                  13.8552
                ],
                [
                  102.50758,
                  13.85877
                ],
                [
                  102.50142,
                  13.86482
                ],
                [
                  102.49569,
                  13.86479
                ],
                [
                  102.49153,
                  13.86709
                ],
                [
                  102.4869,
                  13.86802
                ],
                [
                  102.48466,
                  13.87082
                ],
                [
                  102.48394,
                  13.88286
                ],
                [
                  102.48664,
                  13.89779
                ],
                [
                  102.49176,
                  13.91422
                ],
                [
                  102.49234,
                  13.91956
                ],
                [
                  102.48991,
                  13.92944
                ],
                [
                  102.48932,
                  13.94549
                ],
                [
                  102.48727,
                  13.95053
                ],
                [
                  102.48695,
                  13.9687
                ],
                [
                  102.48216,
                  13.98752
                ],
                [
                  102.48601,
                  13.99756
                ],
                [
                  102.49536,
                  14.00671
                ],
                [
                  102.49628,
                  14.02984
                ],
                [
                  102.49008,
                  14.03533
                ],
                [
                  102.49091,
                  14.04264
                ],
                [
                  102.48462,
                  14.04981
                ],
                [
                  102.47942,
                  14.06711
                ],
                [
                  102.47125,
                  14.07679
                ],
                [
                  102.46548,
                  14.08698
                ],
                [
                  102.46571,
                  14.0948
                ],
                [
                  102.45841,
                  14.1033
                ],
                [
                  102.45475,
                  14.11316
                ],
                [
                  102.4477,
                  14.11898
                ],
                [
                  102.44662,
                  14.12273
                ],
                [
                  102.44809,
                  14.12818
                ],
                [
                  102.45122,
                  14.1331
                ],
                [
                  102.45338,
                  14.14285
                ],
                [
                  102.45472,
                  14.13649
                ],
                [
                  102.45915,
                  14.13477
                ],
                [
                  102.46381,
                  14.13451
                ],
                [
                  102.46906,
                  14.13194
                ],
                [
                  102.47384,
                  14.13122
                ],
                [
                  102.47546,
                  14.13195
                ],
                [
                  102.48269,
                  14.14172
                ],
                [
                  102.48796,
                  14.13971
                ],
                [
                  102.49032,
                  14.13517
                ],
                [
                  102.49646,
                  14.13635
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 63.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.49646,
                  14.13635
                ],
                [
                  102.49951,
                  14.13584
                ],
                [
                  102.50309,
                  14.12857
                ],
                [
                  102.5029,
                  14.12645
                ],
                [
                  102.49761,
                  14.11977
                ],
                [
                  102.49872,
                  14.10629
                ],
                [
                  102.50465,
                  14.09982
                ],
                [
                  102.50866,
                  14.09323
                ],
                [
                  102.51813,
                  14.09181
                ],
                [
                  102.5308,
                  14.09736
                ],
                [
                  102.53286,
                  14.09655
                ],
                [
                  102.53445,
                  14.08834
                ],
                [
                  102.53305,
                  14.08466
                ],
                [
                  102.53493,
                  14.08178
                ],
                [
                  102.53393,
                  14.07715
                ],
                [
                  102.53526,
                  14.07539
                ],
                [
                  102.53873,
                  14.07425
                ],
                [
                  102.53553,
                  14.06166
                ],
                [
                  102.53518,
                  14.04573
                ],
                [
                  102.53727,
                  14.0431
                ],
                [
                  102.54687,
                  14.03878
                ],
                [
                  102.54804,
                  14.03338
                ],
                [
                  102.54608,
                  14.0289
                ],
                [
                  102.54955,
                  14.02063
                ],
                [
                  102.55441,
                  14.01795
                ],
                [
                  102.55837,
                  14.01746
                ],
                [
                  102.55977,
                  14.00567
                ],
                [
                  102.5581,
                  13.99997
                ],
                [
                  102.55909,
                  13.99345
                ],
                [
                  102.56484,
                  13.98444
                ],
                [
                  102.56853,
                  13.9819
                ],
                [
                  102.57818,
                  13.97898
                ],
                [
                  102.58649,
                  13.98145
                ],
                [
                  102.5895,
                  13.97999
                ],
                [
                  102.59017,
                  13.9783
                ],
                [
                  102.58561,
                  13.96452
                ],
                [
                  102.58677,
                  13.96145
                ],
                [
                  102.59118,
                  13.95851
                ],
                [
                  102.59106,
                  13.95476
                ],
                [
                  102.58835,
                  13.95247
                ],
                [
                  102.58998,
                  13.95085
                ],
                [
                  102.58811,
                  13.94867
                ],
                [
                  102.58322,
                  13.94638
                ],
                [
                  102.57502,
                  13.93704
                ],
                [
                  102.56751,
                  13.93656
                ],
                [
                  102.55969,
                  13.93983
                ],
                [
                  102.55342,
                  13.94082
                ],
                [
                  102.54932,
                  13.94101
                ],
                [
                  102.54621,
                  13.93941
                ],
                [
                  102.53338,
                  13.94025
                ],
                [
                  102.53224,
                  13.93942
                ],
                [
                  102.53035,
                  13.93032
                ],
                [
                  102.53812,
                  13.92547
                ],
                [
                  102.53642,
                  13.91733
                ],
                [
                  102.54447,
                  13.91166
                ],
                [
                  102.54423,
                  13.90752
                ],
                [
                  102.54539,
                  13.90542
                ],
                [
                  102.54215,
                  13.90042
                ],
                [
                  102.5347,
                  13.89465
                ],
                [
                  102.5351,
                  13.89066
                ],
                [
                  102.53971,
                  13.88848
                ],
                [
                  102.53931,
                  13.875
                ],
                [
                  102.544,
                  13.86629
                ],
                [
                  102.54164,
                  13.8621
                ],
                [
                  102.53532,
                  13.86339
                ],
                [
                  102.53498,
                  13.8556
                ],
                [
                  102.52928,
                  13.85293
                ],
                [
                  102.51582,
                  13.8552
                ],
                [
                  102.50758,
                  13.85877
                ],
                [
                  102.50142,
                  13.86482
                ],
                [
                  102.49569,
                  13.86479
                ],
                [
                  102.49153,
                  13.86709
                ],
                [
                  102.4869,
                  13.86802
                ],
                [
                  102.48466,
                  13.87082
                ],
                [
                  102.48394,
                  13.88286
                ],
                [
                  102.48664,
                  13.89779
                ],
                [
                  102.49176,
                  13.91422
                ],
                [
                  102.49234,
                  13.91956
                ],
                [
                  102.48991,
                  13.92944
                ],
                [
                  102.48932,
                  13.94549
                ],
                [
                  102.48727,
                  13.95053
                ],
                [
                  102.48695,
                  13.9687
                ],
                [
                  102.48216,
                  13.98752
                ],
                [
                  102.48601,
                  13.99756
                ],
                [
                  102.49536,
                  14.00671
                ],
                [
                  102.49628,
                  14.02984
                ],
                [
                  102.49008,
                  14.03533
                ],
                [
                  102.49091,
                  14.04264
                ],
                [
                  102.48462,
                  14.04981
                ],
                [
                  102.47942,
                  14.06711
                ],
                [
                  102.47125,
                  14.07679
                ],
                [
                  102.46548,
                  14.08698
                ],
                [
                  102.46571,
                  14.0948
                ],
                [
                  102.45841,
                  14.1033
                ],
                [
                  102.45475,
                  14.11316
                ],
                [
                  102.4477,
                  14.11898
                ],
                [
                  102.44662,
                  14.12273
                ],
                [
                  102.44809,
                  14.12818
                ],
                [
                  102.45122,
                  14.1331
                ],
                [
                  102.45338,
                  14.14285
                ],
                [
                  102.45472,
                  14.13649
                ],
                [
                  102.45915,
                  14.13477
                ],
                [
                  102.46381,
                  14.13451
                ],
                [
                  102.46906,
                  14.13194
                ],
                [
                  102.47384,
                  14.13122
                ],
                [
                  102.47546,
                  14.13195
                ],
                [
                  102.48269,
                  14.14172
                ],
                [
                  102.48796,
                  14.13971
                ],
                [
                  102.49032,
                  14.13517
                ],
                [
                  102.49646,
                  14.13635
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 32.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.33463,
                  13.64212
                ],
                [
                  102.32911,
                  13.64143
                ],
                [
                  102.32511,
                  13.63895
                ],
                [
                  102.32163,
                  13.6391
                ],
                [
                  102.31226,
                  13.64445
                ],
                [
                  102.30642,
                  13.64471
                ],
                [
                  102.30447,
                  13.64328
                ],
                [
                  102.3012,
                  13.64297
                ],
                [
                  102.29543,
                  13.64453
                ],
                [
                  102.29257,
                  13.64108
                ],
                [
                  102.28656,
                  13.63817
                ],
                [
                  102.28486,
                  13.63409
                ],
                [
                  102.27182,
                  13.62604
                ],
                [
                  102.27036,
                  13.62394
                ],
                [
                  102.26511,
                  13.62267
                ],
                [
                  102.26054,
                  13.61739
                ],
                [
                  102.25855,
                  13.61665
                ],
                [
                  102.25054,
                  13.62244
                ],
                [
                  102.24787,
                  13.62164
                ],
                [
                  102.24624,
                  13.62342
                ],
                [
                  102.23837,
                  13.62334
                ],
                [
                  102.22566,
                  13.62531
                ],
                [
                  102.22105,
                  13.62916
                ],
                [
                  102.21659,
                  13.62878
                ],
                [
                  102.2097,
                  13.62447
                ],
                [
                  102.20955,
                  13.62708
                ],
                [
                  102.20844,
                  13.62791
                ],
                [
                  102.20529,
                  13.62714
                ],
                [
                  102.20301,
                  13.62822
                ],
                [
                  102.20118,
                  13.62729
                ],
                [
                  102.19968,
                  13.62881
                ],
                [
                  102.19561,
                  13.62418
                ],
                [
                  102.19187,
                  13.62385
                ],
                [
                  102.19239,
                  13.6277
                ],
                [
                  102.18451,
                  13.63154
                ],
                [
                  102.1818,
                  13.63651
                ],
                [
                  102.17885,
                  13.65016
                ],
                [
                  102.17657,
                  13.6525
                ],
                [
                  102.17772,
                  13.65541
                ],
                [
                  102.17641,
                  13.65638
                ],
                [
                  102.17758,
                  13.65819
                ],
                [
                  102.1753,
                  13.65858
                ],
                [
                  102.1722,
                  13.65578
                ],
                [
                  102.17043,
                  13.65952
                ],
                [
                  102.16857,
                  13.65823
                ],
                [
                  102.16571,
                  13.65983
                ],
                [
                  102.1664,
                  13.66084
                ],
                [
                  102.17451,
                  13.66099
                ],
                [
                  102.17428,
                  13.66345
                ],
                [
                  102.17164,
                  13.66455
                ],
                [
                  102.17337,
                  13.66654
                ],
                [
                  102.17544,
                  13.66685
                ],
                [
                  102.17371,
                  13.66816
                ],
                [
                  102.17472,
                  13.66911
                ],
                [
                  102.17482,
                  13.67206
                ],
                [
                  102.17638,
                  13.67414
                ],
                [
                  102.18017,
                  13.67379
                ],
                [
                  102.17593,
                  13.67768
                ],
                [
                  102.17699,
                  13.68205
                ],
                [
                  102.1725,
                  13.68643
                ],
                [
                  102.17135,
                  13.69092
                ],
                [
                  102.16919,
                  13.69362
                ],
                [
                  102.17318,
                  13.69323
                ],
                [
                  102.17835,
                  13.69098
                ],
                [
                  102.18899,
                  13.68013
                ],
                [
                  102.19958,
                  13.67457
                ],
                [
                  102.2044,
                  13.67363
                ],
                [
                  102.20926,
                  13.68001
                ],
                [
                  102.21998,
                  13.68513
                ],
                [
                  102.22881,
                  13.69766
                ],
                [
                  102.23788,
                  13.70452
                ],
                [
                  102.24307,
                  13.71172
                ],
                [
                  102.2537,
                  13.71032
                ],
                [
                  102.26322,
                  13.70667
                ],
                [
                  102.27355,
                  13.7048
                ],
                [
                  102.29742,
                  13.70283
                ],
                [
                  102.30109,
                  13.70354
                ],
                [
                  102.30452,
                  13.70676
                ],
                [
                  102.30914,
                  13.70943
                ],
                [
                  102.31169,
                  13.70964
                ],
                [
                  102.31271,
                  13.71153
                ],
                [
                  102.31533,
                  13.71267
                ],
                [
                  102.32547,
                  13.70307
                ],
                [
                  102.33475,
                  13.68501
                ],
                [
                  102.33568,
                  13.67528
                ],
                [
                  102.33253,
                  13.6593
                ],
                [
                  102.33341,
                  13.64405
                ],
                [
                  102.33463,
                  13.64212
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 56.8,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.33463,
                  13.64212
                ],
                [
                  102.32911,
                  13.64143
                ],
                [
                  102.32511,
                  13.63895
                ],
                [
                  102.32163,
                  13.6391
                ],
                [
                  102.31226,
                  13.64445
                ],
                [
                  102.30642,
                  13.64471
                ],
                [
                  102.30447,
                  13.64328
                ],
                [
                  102.3012,
                  13.64297
                ],
                [
                  102.29543,
                  13.64453
                ],
                [
                  102.29257,
                  13.64108
                ],
                [
                  102.28656,
                  13.63817
                ],
                [
                  102.28486,
                  13.63409
                ],
                [
                  102.27182,
                  13.62604
                ],
                [
                  102.27036,
                  13.62394
                ],
                [
                  102.26511,
                  13.62267
                ],
                [
                  102.26054,
                  13.61739
                ],
                [
                  102.25855,
                  13.61665
                ],
                [
                  102.25054,
                  13.62244
                ],
                [
                  102.24787,
                  13.62164
                ],
                [
                  102.24624,
                  13.62342
                ],
                [
                  102.23837,
                  13.62334
                ],
                [
                  102.22566,
                  13.62531
                ],
                [
                  102.22105,
                  13.62916
                ],
                [
                  102.21659,
                  13.62878
                ],
                [
                  102.2097,
                  13.62447
                ],
                [
                  102.20955,
                  13.62708
                ],
                [
                  102.20844,
                  13.62791
                ],
                [
                  102.20529,
                  13.62714
                ],
                [
                  102.20301,
                  13.62822
                ],
                [
                  102.20118,
                  13.62729
                ],
                [
                  102.19968,
                  13.62881
                ],
                [
                  102.19561,
                  13.62418
                ],
                [
                  102.19187,
                  13.62385
                ],
                [
                  102.19239,
                  13.6277
                ],
                [
                  102.18451,
                  13.63154
                ],
                [
                  102.1818,
                  13.63651
                ],
                [
                  102.17885,
                  13.65016
                ],
                [
                  102.17657,
                  13.6525
                ],
                [
                  102.17772,
                  13.65541
                ],
                [
                  102.17641,
                  13.65638
                ],
                [
                  102.17758,
                  13.65819
                ],
                [
                  102.1753,
                  13.65858
                ],
                [
                  102.1722,
                  13.65578
                ],
                [
                  102.17043,
                  13.65952
                ],
                [
                  102.16857,
                  13.65823
                ],
                [
                  102.16571,
                  13.65983
                ],
                [
                  102.1664,
                  13.66084
                ],
                [
                  102.17451,
                  13.66099
                ],
                [
                  102.17428,
                  13.66345
                ],
                [
                  102.17164,
                  13.66455
                ],
                [
                  102.17337,
                  13.66654
                ],
                [
                  102.17544,
                  13.66685
                ],
                [
                  102.17371,
                  13.66816
                ],
                [
                  102.17472,
                  13.66911
                ],
                [
                  102.17482,
                  13.67206
                ],
                [
                  102.17638,
                  13.67414
                ],
                [
                  102.18017,
                  13.67379
                ],
                [
                  102.17593,
                  13.67768
                ],
                [
                  102.17699,
                  13.68205
                ],
                [
                  102.1725,
                  13.68643
                ],
                [
                  102.17135,
                  13.69092
                ],
                [
                  102.16919,
                  13.69362
                ],
                [
                  102.17318,
                  13.69323
                ],
                [
                  102.17835,
                  13.69098
                ],
                [
                  102.18899,
                  13.68013
                ],
                [
                  102.19958,
                  13.67457
                ],
                [
                  102.2044,
                  13.67363
                ],
                [
                  102.20926,
                  13.68001
                ],
                [
                  102.21998,
                  13.68513
                ],
                [
                  102.22881,
                  13.69766
                ],
                [
                  102.23788,
                  13.70452
                ],
                [
                  102.24307,
                  13.71172
                ],
                [
                  102.2537,
                  13.71032
                ],
                [
                  102.26322,
                  13.70667
                ],
                [
                  102.27355,
                  13.7048
                ],
                [
                  102.29742,
                  13.70283
                ],
                [
                  102.30109,
                  13.70354
                ],
                [
                  102.30452,
                  13.70676
                ],
                [
                  102.30914,
                  13.70943
                ],
                [
                  102.31169,
                  13.70964
                ],
                [
                  102.31271,
                  13.71153
                ],
                [
                  102.31533,
                  13.71267
                ],
                [
                  102.32547,
                  13.70307
                ],
                [
                  102.33475,
                  13.68501
                ],
                [
                  102.33568,
                  13.67528
                ],
                [
                  102.33253,
                  13.6593
                ],
                [
                  102.33341,
                  13.64405
                ],
                [
                  102.33463,
                  13.64212
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 140.8,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.30517,
                  14.0017
                ],
                [
                  102.30779,
                  14.00005
                ],
                [
                  102.30975,
                  13.99605
                ],
                [
                  102.31026,
                  13.99319
                ],
                [
                  102.30845,
                  13.98924
                ],
                [
                  102.29803,
                  13.97767
                ],
                [
                  102.29638,
                  13.97442
                ],
                [
                  102.29264,
                  13.97334
                ],
                [
                  102.28748,
                  13.96811
                ],
                [
                  102.28436,
                  13.95644
                ],
                [
                  102.28011,
                  13.95447
                ],
                [
                  102.27923,
                  13.95146
                ],
                [
                  102.2842,
                  13.94612
                ],
                [
                  102.28731,
                  13.93718
                ],
                [
                  102.29155,
                  13.93362
                ],
                [
                  102.29798,
                  13.91589
                ],
                [
                  102.30979,
                  13.9141
                ],
                [
                  102.31476,
                  13.91202
                ],
                [
                  102.31657,
                  13.90945
                ],
                [
                  102.31827,
                  13.90312
                ],
                [
                  102.31498,
                  13.89279
                ],
                [
                  102.31563,
                  13.89023
                ],
                [
                  102.31477,
                  13.88621
                ],
                [
                  102.31348,
                  13.88426
                ],
                [
                  102.30708,
                  13.88073
                ],
                [
                  102.30512,
                  13.87291
                ],
                [
                  102.3121,
                  13.86638
                ],
                [
                  102.31113,
                  13.85956
                ],
                [
                  102.30358,
                  13.85201
                ],
                [
                  102.29857,
                  13.85164
                ],
                [
                  102.29393,
                  13.85259
                ],
                [
                  102.28054,
                  13.86319
                ],
                [
                  102.27676,
                  13.86225
                ],
                [
                  102.27378,
                  13.86347
                ],
                [
                  102.26927,
                  13.86088
                ],
                [
                  102.26866,
                  13.8583
                ],
                [
                  102.26609,
                  13.85743
                ],
                [
                  102.2651,
                  13.85823
                ],
                [
                  102.26293,
                  13.85681
                ],
                [
                  102.26295,
                  13.85403
                ],
                [
                  102.26089,
                  13.85707
                ],
                [
                  102.25922,
                  13.85712
                ],
                [
                  102.25775,
                  13.85565
                ],
                [
                  102.25541,
                  13.85576
                ],
                [
                  102.25557,
                  13.85376
                ],
                [
                  102.25352,
                  13.85424
                ],
                [
                  102.25034,
                  13.85178
                ],
                [
                  102.24773,
                  13.8515
                ],
                [
                  102.24615,
                  13.85364
                ],
                [
                  102.24455,
                  13.85181
                ],
                [
                  102.24191,
                  13.85195
                ],
                [
                  102.23895,
                  13.86159
                ],
                [
                  102.23653,
                  13.86352
                ],
                [
                  102.22998,
                  13.87976
                ],
                [
                  102.22271,
                  13.88556
                ],
                [
                  102.22162,
                  13.8896
                ],
                [
                  102.21593,
                  13.89082
                ],
                [
                  102.21464,
                  13.8935
                ],
                [
                  102.21215,
                  13.89491
                ],
                [
                  102.21113,
                  13.90466
                ],
                [
                  102.20981,
                  13.90694
                ],
                [
                  102.20725,
                  13.90828
                ],
                [
                  102.2056,
                  13.91635
                ],
                [
                  102.20222,
                  13.91772
                ],
                [
                  102.19813,
                  13.92136
                ],
                [
                  102.19459,
                  13.92224
                ],
                [
                  102.19636,
                  13.92325
                ],
                [
                  102.19716,
                  13.92565
                ],
                [
                  102.2026,
                  13.92823
                ],
                [
                  102.20297,
                  13.93087
                ],
                [
                  102.20466,
                  13.93183
                ],
                [
                  102.20742,
                  13.9373
                ],
                [
                  102.21087,
                  13.93883
                ],
                [
                  102.21087,
                  13.93976
                ],
                [
                  102.21526,
                  13.94024
                ],
                [
                  102.21596,
                  13.94191
                ],
                [
                  102.22005,
                  13.94181
                ],
                [
                  102.22027,
                  13.94264
                ],
                [
                  102.22841,
                  13.94175
                ],
                [
                  102.23216,
                  13.94488
                ],
                [
                  102.23844,
                  13.94655
                ],
                [
                  102.24048,
                  13.94581
                ],
                [
                  102.24281,
                  13.94734
                ],
                [
                  102.24574,
                  13.95255
                ],
                [
                  102.24868,
                  13.95463
                ],
                [
                  102.24956,
                  13.95747
                ],
                [
                  102.26278,
                  13.96776
                ],
                [
                  102.26439,
                  13.97316
                ],
                [
                  102.26278,
                  13.97786
                ],
                [
                  102.26332,
                  13.97976
                ],
                [
                  102.27021,
                  13.98556
                ],
                [
                  102.27651,
                  13.99707
                ],
                [
                  102.27528,
                  14.00238
                ],
                [
                  102.27987,
                  14.00616
                ],
                [
                  102.28593,
                  14.0085
                ],
                [
                  102.28761,
                  14.00464
                ],
                [
                  102.29021,
                  14.0053
                ],
                [
                  102.29894,
                  14.00214
                ],
                [
                  102.30275,
                  14.0033
                ],
                [
                  102.30517,
                  14.0017
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
          "station": "บ้านหนองน้ำใส",
          "latitude": 13.85454,
          "longitude": 102.377483,
          "sum_rainfall_mm": 54.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "270505",
          "tambon": "ต.หนองน้ำใส",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านซับแม็ก",
          "latitude": 13.874664,
          "longitude": 102.42264,
          "sum_rainfall_mm": 168.0,
          "observed_at": "2026-09-22T20:00:00+07:00",
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
          "geocode": "270509",
          "tambon": "ต.หนองหมากฝ้าย",
          "amphoe": "อ.วัฒนานคร",
          "province": "จ.สระแก้ว",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านใหม่ศรีจำปา",
          "latitude": 13.907834,
          "longitude": 102.377541,
          "sum_rainfall_mm": 86.5,
          "observed_at": "2026-09-22T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  102.39403,
                  14.14515
                ],
                [
                  102.39928,
                  14.14115
                ],
                [
                  102.4018,
                  14.13768
                ],
                [
                  102.4006,
                  14.13184
                ],
                [
                  102.40353,
                  14.12348
                ],
                [
                  102.40226,
                  14.11645
                ],
                [
                  102.40579,
                  14.10544
                ],
                [
                  102.40629,
                  14.09852
                ],
                [
                  102.41548,
                  14.09098
                ],
                [
                  102.41703,
                  14.09257
                ],
                [
                  102.42251,
                  14.09057
                ],
                [
                  102.42369,
                  14.08716
                ],
                [
                  102.42701,
                  14.08556
                ],
                [
                  102.43016,
                  14.0785
                ],
                [
                  102.42989,
                  14.07474
                ],
                [
                  102.4264,
                  14.06853
                ],
                [
                  102.42876,
                  14.06731
                ],
                [
                  102.43301,
                  14.06209
                ],
                [
                  102.43096,
                  14.05884
                ],
                [
                  102.43681,
                  14.0561
                ],
                [
                  102.43565,
                  14.05458
                ],
                [
                  102.43601,
                  14.05273
                ],
                [
                  102.43393,
                  14.05156
                ],
                [
                  102.4339,
                  14.0502
                ],
                [
                  102.43048,
                  14.04975
                ],
                [
                  102.4293,
                  14.04565
                ],
                [
                  102.43092,
                  14.04381
                ],
                [
                  102.42835,
                  14.03893
                ],
                [
                  102.42727,
                  14.03758
                ],
                [
                  102.42478,
                  14.03718
                ],
                [
                  102.42346,
                  14.03415
                ],
                [
                  102.42077,
                  14.0343
                ],
                [
                  102.4203,
                  14.03348
                ],
                [
                  102.42292,
                  14.03194
                ],
                [
                  102.42051,
                  14.02635
                ],
                [
                  102.42182,
                  14.02488
                ],
                [
                  102.42292,
                  14.01747
                ],
                [
                  102.42521,
                  14.01601
                ],
                [
                  102.42486,
                  14.0131
                ],
                [
                  102.4301,
                  14.01529
                ],
                [
                  102.43188,
                  14.01462
                ],
                [
                  102.42984,
                  14.01173
                ],
                [
                  102.43095,
                  14.00995
                ],
                [
                  102.42416,
                  14.00193
                ],
                [
                  102.42135,
                  14.00171
                ],
                [
                  102.4205,
                  13.99966
                ],
                [
                  102.42011,
                  13.99608
                ],
                [
                  102.42156,
                  13.99318
                ],
                [
                  102.42164,
                  13.98728
                ],
                [
                  102.42036,
                  13.98347
                ],
                [
                  102.42359,
                  13.97984
                ],
                [
                  102.42167,
                  13.97733
                ],
                [
                  102.42298,
                  13.97666
                ],
                [
                  102.42268,
                  13.97499
                ],
                [
                  102.42383,
                  13.97479
                ],
                [
                  102.42363,
                  13.97329
                ],
                [
                  102.42185,
                  13.97256
                ],
                [
                  102.42374,
                  13.97073
                ],
                [
                  102.42204,
                  13.96871
                ],
                [
                  102.41981,
                  13.96892
                ],
                [
                  102.41969,
                  13.96735
                ],
                [
                  102.41693,
                  13.96737
                ],
                [
                  102.41813,
                  13.96626
                ],
                [
                  102.41676,
                  13.96472
                ],
                [
                  102.41817,
                  13.96404
                ],
                [
                  102.41781,
                  13.96108
                ],
                [
                  102.41419,
                  13.9617
                ],
                [
                  102.41407,
                  13.95951
                ],
                [
                  102.41152,
                  13.95969
                ],
                [
                  102.41227,
                  13.95803
                ],
                [
                  102.4086,
                  13.95634
                ],
                [
                  102.40988,
                  13.95451
                ],
                [
                  102.40707,
                  13.95284
                ],
                [
                  102.40776,
                  13.95181
                ],
                [
                  102.405,
                  13.95166
                ],
                [
                  102.40425,
                  13.94724
                ],
                [
                  102.40511,
                  13.94468
                ],
                [
                  102.40697,
                  13.94361
                ],
                [
                  102.40545,
                  13.94325
                ],
                [
                  102.4047,
                  13.94106
                ],
                [
                  102.40605,
                  13.94036
                ],
                [
                  102.4049,
                  13.9356
                ],
                [
                  102.40162,
                  13.93526
                ],
                [
                  102.40392,
                  13.93393
                ],
                [
                  102.40215,
                  13.93135
                ],
                [
                  102.40457,
                  13.9287
                ],
                [
                  102.40163,
                  13.92663
                ],
                [
                  102.40184,
                  13.92321
                ],
                [
                  102.41228,
                  13.92539
                ],
                [
                  102.41668,
                  13.92184
                ],
                [
                  102.41652,
                  13.90053
                ],
                [
                  102.41754,
                  13.89547
                ],
                [
                  102.41576,
                  13.89094
                ],
                [
                  102.41594,
                  13.88794
                ],
                [
                  102.41377,
                  13.88464
                ],
                [
                  102.41264,
                  13.88479
                ],
                [
                  102.4105,
                  13.88249
                ],
                [
                  102.40878,
                  13.87749
                ],
                [
                  102.40951,
                  13.87547
                ],
                [
                  102.40299,
                  13.87137
                ],
                [
                  102.3932,
                  13.87321
                ],
                [
                  102.38572,
                  13.87691
                ],
                [
                  102.38238,
                  13.88149
                ],
                [
                  102.37878,
                  13.8907
                ],
                [
                  102.37606,
                  13.89438
                ],
                [
                  102.37466,
                  13.90018
                ],
                [
                  102.36933,
                  13.90256
                ],
                [
                  102.36694,
                  13.90055
                ],
                [
                  102.36296,
                  13.90033
                ],
                [
                  102.3621,
                  13.89869
                ],
                [
                  102.36077,
                  13.8997
                ],
                [
                  102.35826,
                  13.89782
                ],
                [
                  102.35652,
                  13.89933
                ],
                [
                  102.35522,
                  13.89667
                ],
                [
                  102.35253,
                  13.89878
                ],
                [
                  102.3519,
                  13.89641
                ],
                [
                  102.34979,
                  13.89794
                ],
                [
                  102.34955,
                  13.89326
                ],
                [
                  102.35082,
                  13.89379
                ],
                [
                  102.35177,
                  13.89249
                ],
                [
                  102.3487,
                  13.89169
                ],
                [
                  102.34872,
                  13.88845
                ],
                [
                  102.34678,
                  13.88572
                ],
                [
                  102.34427,
                  13.88609
                ],
                [
                  102.34441,
                  13.88426
                ],
                [
                  102.342,
                  13.8865
                ],
                [
                  102.33811,
                  13.88535
                ],
                [
                  102.33668,
                  13.88751
                ],
                [
                  102.33417,
                  13.88508
                ],
                [
                  102.33427,
                  13.88287
                ],
                [
                  102.33202,
                  13.88368
                ],
                [
                  102.32878,
                  13.88295
                ],
                [
                  102.32821,
                  13.88187
                ],
                [
                  102.32625,
                  13.88302
                ],
                [
                  102.32631,
                  13.88513
                ],
                [
                  102.32512,
                  13.88639
                ],
                [
                  102.32452,
                  13.8853
                ],
                [
                  102.32199,
                  13.88571
                ],
                [
                  102.32157,
                  13.88454
                ],
                [
                  102.32022,
                  13.88523
                ],
                [
                  102.31905,
                  13.88418
                ],
                [
                  102.31477,
                  13.88621
                ],
                [
                  102.31563,
                  13.89023
                ],
                [
                  102.31498,
                  13.89279
                ],
                [
                  102.31827,
                  13.90312
                ],
                [
                  102.31623,
                  13.91033
                ],
                [
                  102.31476,
                  13.91202
                ],
                [
                  102.30979,
                  13.9141
                ],
                [
                  102.29798,
                  13.91589
                ],
                [
                  102.29155,
                  13.93362
                ],
                [
                  102.28731,
                  13.93718
                ],
                [
                  102.2842,
                  13.94612
                ],
                [
                  102.27923,
                  13.95146
                ],
                [
                  102.28011,
                  13.95447
                ],
                [
                  102.28436,
                  13.95644
                ],
                [
                  102.28748,
                  13.96811
                ],
                [
                  102.29264,
                  13.97334
                ],
                [
                  102.29682,
                  13.97488
                ],
                [
                  102.29803,
                  13.97767
                ],
                [
                  102.30845,
                  13.98924
                ],
                [
                  102.31026,
                  13.99319
                ],
                [
                  102.30799,
                  13.99979
                ],
                [
                  102.30446,
                  14.00236
                ],
                [
                  102.30275,
                  14.0033
                ],
                [
                  102.29894,
                  14.00214
                ],
                [
                  102.29021,
                  14.0053
                ],
                [
                  102.28761,
                  14.00464
                ],
                [
                  102.28593,
                  14.0085
                ],
                [
                  102.29194,
                  14.01079
                ],
                [
                  102.29769,
                  14.01826
                ],
                [
                  102.30382,
                  14.02341
                ],
                [
                  102.31137,
                  14.02672
                ],
                [
                  102.30984,
                  14.03445
                ],
                [
                  102.3107,
                  14.03799
                ],
                [
                  102.30885,
                  14.04411
                ],
                [
                  102.31165,
                  14.05673
                ],
                [
                  102.3076,
                  14.06051
                ],
                [
                  102.30789,
                  14.06293
                ],
                [
                  102.30614,
                  14.06714
                ],
                [
                  102.31144,
                  14.08661
                ],
                [
                  102.31942,
                  14.09012
                ],
                [
                  102.32464,
                  14.09495
                ],
                [
                  102.32451,
                  14.10219
                ],
                [
                  102.32148,
                  14.11028
                ],
                [
                  102.32455,
                  14.11582
                ],
                [
                  102.32597,
                  14.12786
                ],
                [
                  102.3282,
                  14.12676
                ],
                [
                  102.33056,
                  14.121
                ],
                [
                  102.33187,
                  14.12008
                ],
                [
                  102.33913,
                  14.12565
                ],
                [
                  102.34922,
                  14.12522
                ],
                [
                  102.35095,
                  14.12655
                ],
                [
                  102.35234,
                  14.13073
                ],
                [
                  102.35728,
                  14.13202
                ],
                [
                  102.358,
                  14.13382
                ],
                [
                  102.35709,
                  14.13707
                ],
                [
                  102.36055,
                  14.15139
                ],
                [
                  102.35758,
                  14.164
                ],
                [
                  102.35918,
                  14.16571
                ],
                [
                  102.36292,
                  14.16623
                ],
                [
                  102.37307,
                  14.15352
                ],
                [
                  102.38086,
                  14.14696
                ],
                [
                  102.38839,
                  14.14478
                ],
                [
                  102.39403,
                  14.14515
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_22_09_2026.png?1790086031",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
