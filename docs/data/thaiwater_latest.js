window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-23T18:40:18+07:00",
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
      "id": 42,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "lat": 13.7972954,
      "lon": 100.5599994,
      "operations": "สำนักงานใหญ่",
      "status": "วิกฤต",
      "severity_score": 4,
      "alert_station_count": 17,
      "rain_alert_count": 12,
      "water_alert_count": 5,
      "max_rainfall_mm": 105.5,
      "nearest_alert_km": 6.0,
      "latest_observed_at": "2026-09-23 18:20"
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
      "max_rainfall_mm": 53.0,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-23 18:00"
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
      "latest_observed_at": "2026-09-23 18:20"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 10,
      "rain_alert_count": 0,
      "water_alert_count": 10,
      "max_rainfall_mm": null,
      "nearest_alert_km": 10.6,
      "latest_observed_at": "2026-09-23 18:20"
    },
    {
      "id": 34,
      "name": "นิคมอุตสาหกรรมแหลมฉบัง",
      "lat": 13.076561,
      "lon": 100.909175,
      "operations": "สายปฎิบัติการ2",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 4,
      "rain_alert_count": 4,
      "water_alert_count": 0,
      "max_rainfall_mm": 87.5,
      "nearest_alert_km": 12.1,
      "latest_observed_at": "2026-09-23 17:50"
    },
    {
      "id": 43,
      "name": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "lat": 13.7973442,
      "lon": 100.5592795,
      "operations": "สำนักงานใหญ่",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 6,
      "water_alert_count": 4,
      "max_rainfall_mm": 83.0,
      "nearest_alert_km": 5.5,
      "latest_observed_at": "2026-09-23 18:20"
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
      "max_rainfall_mm": 75.2,
      "nearest_alert_km": 11.7,
      "latest_observed_at": "2026-09-23 18:20"
    },
    {
      "id": 4,
      "name": "นิคมอุตสาหกรรมอัญธานี",
      "lat": 13.686102,
      "lon": 100.707712,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 3,
      "water_alert_count": 0,
      "max_rainfall_mm": 74.5,
      "nearest_alert_km": 11.2,
      "latest_observed_at": "2026-09-23 18:00"
    },
    {
      "id": 11,
      "name": "นิคมอุตสาหกรรมมหาราชนคร",
      "lat": 13.54202903,
      "lon": 100.1988542,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 1,
      "water_alert_count": 4,
      "max_rainfall_mm": 54.4,
      "nearest_alert_km": 2.4,
      "latest_observed_at": "2026-09-23 18:20"
    },
    {
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 3,
      "rain_alert_count": 1,
      "water_alert_count": 2,
      "max_rainfall_mm": 50.5,
      "nearest_alert_km": 13.4,
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694,
      "lon": 101.329567,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 12.7,
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.1,
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 17:00"
    },
    {
      "id": 84,
      "name": "นิคมอุตสาหกรรมเฮอร์มีส",
      "lat": 12.939485747704445,
      "lon": 101.04139943537544,
      "operations": "",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 59.5,
      "nearest_alert_km": 13.7,
      "latest_observed_at": "2026-09-23 17:00"
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
      "max_rainfall_mm": 53.0,
      "nearest_alert_km": 11.5,
      "latest_observed_at": "2026-09-23 18:00"
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
      "max_rainfall_mm": 47.6,
      "nearest_alert_km": 14.8,
      "latest_observed_at": "2026-09-23 18:00"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.716494,
      "lon": 101.105913,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 2,
      "rain_alert_count": 2,
      "water_alert_count": 0,
      "max_rainfall_mm": 45.6,
      "nearest_alert_km": 13.8,
      "latest_observed_at": "2026-09-23 18:00"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
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
      "latest_observed_at": "2026-09-23 18:20"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "ส.คลองเตย",
      "station_code": "RF.KTY.04",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70628,
      "lon": 100.58752,
      "rainfall_mm": 105.5,
      "value_text": "105.5 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 10.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
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
      "station": "ปตร.วัดบางกระเจ้านอก",
      "station_code": "BKC002",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.689612,
      "lon": 100.554886,
      "waterlevel_msl": 1.64,
      "storage_percent": 114.23,
      "value_text": "1.64 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 12.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 3.93,
      "storage_percent": 112.65,
      "value_text": "3.93 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.7,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 21.92,
      "storage_percent": 110.84,
      "value_text": "21.92 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 9.58,
      "storage_percent": 107.98,
      "value_text": "9.58 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
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
      "waterlevel_msl": 4.69,
      "storage_percent": 104.38,
      "value_text": "4.69 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 4.71,
      "storage_percent": 104.0,
      "value_text": "4.71 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 1.59,
      "storage_percent": 103.18,
      "value_text": "1.59 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "observed_at": "2026-09-23 17:00",
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
      "waterlevel_msl": 40.57,
      "storage_percent": 100.47,
      "value_text": "40.57 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.9,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.คลองเตย",
      "station_code": "RF.KTY.01",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70791,
      "lon": 100.58363,
      "rainfall_mm": 89.0,
      "value_text": "89 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.3,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ชุมชนชัยพรราชา",
      "station_code": "STN1973",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.96831,
      "lon": 100.92304,
      "rainfall_mm": 87.5,
      "value_text": "87.5 มม.",
      "observed_at": "2026-09-23 17:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 12.1,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "สนข.พระโขนง",
      "station_code": "RF.PKN.01",
      "province": "กรุงเทพมหานคร",
      "district": "พระโขนง",
      "lat": 13.70233,
      "lon": 100.60197,
      "rainfall_mm": 87.0,
      "value_text": "87 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 11.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "rainfall_mm": 83.0,
      "value_text": "83 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 14.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 81.5,
      "value_text": "81.5 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 13.2,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "ศูนย์กู้ภัยทางทะเลและชายฝั่งวงศ์อมาตย์ หมู่ 5",
      "station_code": "TJ13",
      "province": "ชลบุรี",
      "district": "บางละมุง",
      "lat": 12.9578,
      "lon": 100.88441,
      "rainfall_mm": 78.0,
      "value_text": "78 มม.",
      "observed_at": "2026-09-23 17:50",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมแหลมฉบัง",
      "agency": "ปภ."
    },
    {
      "kind": "rainfall",
      "station": "ส.พระโขนง",
      "station_code": "RF.KTY.03",
      "province": "กรุงเทพมหานคร",
      "district": "คลองเตย",
      "lat": 13.70857,
      "lon": 100.59542,
      "rainfall_mm": 78.0,
      "value_text": "78 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 10.6,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "rainfall_mm": 77.5,
      "value_text": "77.5 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 14.1,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
      "agency": "สนน กทม."
    },
    {
      "kind": "rainfall",
      "station": "อบต.วังม่วง",
      "station_code": "WGYG",
      "province": "สระบุรี",
      "district": "วังม่วง",
      "lat": 14.84867,
      "lon": 101.14549,
      "rainfall_mm": 75.2,
      "value_text": "75.2 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 29.0,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "สสน."
    },
    {
      "kind": "rainfall",
      "station": "ปตร.คลองวัดด่าน",
      "station_code": "RF.YNW.03",
      "province": "สมุทรปราการ",
      "district": "พระประแดง",
      "lat": 13.67071,
      "lon": 100.54018,
      "rainfall_mm": 75.0,
      "value_text": "75 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 14.2,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "rainfall_mm": 74.5,
      "value_text": "74.5 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 13.0,
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
      "rainfall_mm": 71.2,
      "value_text": "71.2 มม.",
      "observed_at": "2026-09-23 18:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 11.6,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 5.84,
      "storage_percent": 99.94,
      "value_text": "5.84 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 14.3,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 2.55,
      "storage_percent": 99.53,
      "value_text": "2.55 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 32.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 38.78,
      "storage_percent": 99.24,
      "value_text": "38.78 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
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
      "waterlevel_msl": 1.4,
      "storage_percent": 99.06,
      "value_text": "1.4 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 28.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 1.31,
      "storage_percent": 98.7,
      "value_text": "1.31 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.5,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 1.3,
      "storage_percent": 98.05,
      "value_text": "1.3 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.1,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 6.34,
      "storage_percent": 98.02,
      "value_text": "6.34 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
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
      "waterlevel_msl": 38.72,
      "storage_percent": 97.4,
      "value_text": "38.72 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
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
      "storage_percent": 96.9,
      "value_text": "1.91 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 47.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 7.24,
      "storage_percent": 96.64,
      "value_text": "7.24 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.4,
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
      "waterlevel_msl": 38.6,
      "storage_percent": 96.19,
      "value_text": "38.6 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 1.6,
      "storage_percent": 96.07,
      "value_text": "1.6 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 5.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 34.57,
      "storage_percent": 95.92,
      "value_text": "34.57 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.7,
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
      "waterlevel_msl": 1.27,
      "storage_percent": 95.01,
      "value_text": "1.27 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 1.7,
      "storage_percent": 94.94,
      "value_text": "1.7 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.9,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 1.8,
      "storage_percent": 94.8,
      "value_text": "1.8 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 0.92,
      "storage_percent": 94.43,
      "value_text": "0.92 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "waterlevel_msl": 1.38,
      "storage_percent": 94.29,
      "value_text": "1.38 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 27.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 1.17,
      "storage_percent": 94.08,
      "value_text": "1.17 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 19.0,
      "storage_percent": 93.47,
      "value_text": "19 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 3.43,
      "storage_percent": 93.15,
      "value_text": "3.43 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.8,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 44.04,
      "storage_percent": 92.88,
      "value_text": "44.04 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 3.37,
      "storage_percent": 92.79,
      "value_text": "3.37 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 34.93,
      "storage_percent": 92.62,
      "value_text": "34.93 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 11.41,
      "storage_percent": 92.5,
      "value_text": "11.41 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.6,
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
      "waterlevel_msl": 1.48,
      "storage_percent": 92.1,
      "value_text": "1.48 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 10.3,
      "storage_percent": 91.45,
      "value_text": "10.3 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 3.37,
      "storage_percent": 90.7,
      "value_text": "3.37 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 1.1,
      "storage_percent": 90.66,
      "value_text": "1.1 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 2.1,
      "storage_percent": 90.3,
      "value_text": "2.1 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 1.51,
      "storage_percent": 90.13,
      "value_text": "1.51 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 0.21,
      "storage_percent": 89.53,
      "value_text": "0.21 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 5.66,
      "storage_percent": 88.23,
      "value_text": "5.66 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 32.64,
      "storage_percent": 87.79,
      "value_text": "32.64 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 0.79,
      "storage_percent": 87.22,
      "value_text": "0.79 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.6,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 3.34,
      "storage_percent": 86.26,
      "value_text": "3.34 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.5,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 14.64,
      "storage_percent": 86.11,
      "value_text": "14.64 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.0,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 25.94,
      "storage_percent": 85.51,
      "value_text": "25.94 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 4.33,
      "storage_percent": 84.96,
      "value_text": "4.33 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 33.68,
      "storage_percent": 84.83,
      "value_text": "33.68 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.2,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 5.78,
      "storage_percent": 84.66,
      "value_text": "5.78 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 0.01,
      "storage_percent": 84.56,
      "value_text": "0.01 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.5,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 3.03,
      "storage_percent": 84.54,
      "value_text": "3.03 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
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
      "waterlevel_msl": 3.27,
      "storage_percent": 84.35,
      "value_text": "3.27 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 8.1,
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
      "value_text": "8.48 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
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
      "waterlevel_msl": 8.32,
      "storage_percent": 82.53,
      "value_text": "8.32 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 3.16,
      "storage_percent": 81.97,
      "value_text": "3.16 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
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
      "waterlevel_msl": -0.06,
      "storage_percent": 81.92,
      "value_text": "-0.06 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": -0.04,
      "storage_percent": 81.9,
      "value_text": "-0.04 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.9,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 6.49,
      "storage_percent": 81.12,
      "value_text": "6.49 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.7,
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
      "waterlevel_msl": 6.2,
      "storage_percent": 80.44,
      "value_text": "6.2 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
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
      "waterlevel_msl": 2.09,
      "storage_percent": 80.36,
      "value_text": "2.09 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
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
      "waterlevel_msl": 6.56,
      "storage_percent": 79.92,
      "value_text": "6.56 ม.รทก.",
      "observed_at": "2026-09-23 18:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.0,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 42.74,
      "storage_percent": 78.88,
      "value_text": "42.74 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 42.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 3.46,
      "storage_percent": 78.81,
      "value_text": "3.46 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 25.4,
      "storage_percent": 78.13,
      "value_text": "25.4 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
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
      "waterlevel_msl": 0.24,
      "storage_percent": 77.7,
      "value_text": "0.24 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 40.7,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 8.99,
      "storage_percent": 77.68,
      "value_text": "8.99 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 24.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 0.22,
      "storage_percent": 77.33,
      "value_text": "0.22 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "storage_percent": 77.01,
      "value_text": "1.76 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.7,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 47.24,
      "storage_percent": 76.56,
      "value_text": "47.24 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 45.4,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 21.73,
      "storage_percent": 76.16,
      "value_text": "21.73 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 9.68,
      "storage_percent": 76.06,
      "value_text": "9.68 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 46.9,
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
      "waterlevel_msl": 42.05,
      "storage_percent": 75.47,
      "value_text": "42.05 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
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
      "waterlevel_msl": 5.76,
      "storage_percent": 75.28,
      "value_text": "5.76 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 2.24,
      "storage_percent": 74.65,
      "value_text": "2.24 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.8,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 1.38,
      "storage_percent": 74.51,
      "value_text": "1.38 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.1,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 9.68,
      "storage_percent": 74.2,
      "value_text": "9.68 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 7.2,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": " สะพานข้ามคลองโคน",
      "station_code": "PTTEP1",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.3319,
      "lon": 99.96896,
      "waterlevel_msl": 0.98,
      "storage_percent": 73.99,
      "value_text": "0.98 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 34.1,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.27,
      "storage_percent": 73.55,
      "value_text": "0.27 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.7,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 42.36,
      "storage_percent": 73.33,
      "value_text": "42.36 ม.รทก.",
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "observed_at": "2026-09-23 17:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 5.43,
      "storage_percent": 72.61,
      "value_text": "5.43 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.8,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 0.56,
      "storage_percent": 72.6,
      "value_text": "0.56 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "waterlevel_msl": 14.24,
      "storage_percent": 72.26,
      "value_text": "14.24 ม.รทก.",
      "observed_at": "2026-09-23 18:20",
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
      "observed_at": "2026-09-23 18:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
      "agency": "สสน."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 31,
    "station_count": 967,
    "alert_station_count": 139,
    "heavy_rain_estate_count": 5,
    "water_alert_estate_count": 25,
    "critical_count": 73,
    "rain_station_count": 780,
    "waterlevel_station_count": 187,
    "waterlevel_alert_count": 104,
    "max_rainfall_mm": 105.5,
    "risk_level": "วิกฤต",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [],
    "flood_watch_province_count": 0,
    "flash_flood_24h_area_count": 0,
    "flash_flood_48h_area_count": 5,
    "warning_title": "",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "flash_flood": {
    "24h": {
      "period": "24h",
      "date": "2026-09-23",
      "time": "18:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [],
      "area_nearby": [],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_23_09_2026.png?1790161645",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-23",
      "time": "18:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
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
          "sum_rainfall_mm": 170.79999999999998,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 179.40000000000003,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "geocode": "760513",
          "tambon": "ต.เขากระปุก",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหุบเฉลา",
          "latitude": 12.661321,
          "longitude": 99.65458,
          "sum_rainfall_mm": 101.0,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "geocode": "103301",
          "tambon": "ต.คลองเตย",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "ส.คลองเตย",
          "latitude": 13.70628,
          "longitude": 100.58752,
          "sum_rainfall_mm": 110.5,
          "observed_at": "2026-09-23T17:00:00+07:00"
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
          "sum_rainfall_mm": 102.0,
          "observed_at": "2026-09-23T17:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9143,
                  14.08507
                ],
                [
                  100.91425,
                  14.06812
                ],
                [
                  100.84623,
                  14.04438
                ],
                [
                  100.8468,
                  14.07567
                ],
                [
                  100.91428,
                  14.09931
                ],
                [
                  100.9143,
                  14.08507
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
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
          "sum_rainfall_mm": 58.400000000000006,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 87.8,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 30.999999999999996,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "station": "รพสต.บ้านโคกอุดม",
          "latitude": 14.06948,
          "longitude": 101.80991,
          "sum_rainfall_mm": 170.79999999999998,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "station": "เขตอุตสาหกรรมกบินทร์บุรี",
          "latitude": 14.072372,
          "longitude": 101.837494,
          "sum_rainfall_mm": 132.79999999999998,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 111.79999999999998,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 179.40000000000003,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 17.5,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 13.999999999999998,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 18.0,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 61.00000000000001,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 43.8,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 84.8,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "geocode": "760511",
          "tambon": "ต.กลัดหลวง",
          "amphoe": "อ.ท่ายาง",
          "province": "จ.เพชรบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "โรงเรียนบ้านห้วยไผ่",
          "latitude": 12.759098,
          "longitude": 99.61465,
          "sum_rainfall_mm": 18.600000000000005,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 2.2,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 101.0,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 48.0,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 110.6,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 1.5,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 0.6,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "sum_rainfall_mm": 1.5,
          "observed_at": "2026-09-23T17:00:00+07:00",
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
          "geocode": "103302",
          "tambon": "ต.คลองตัน",
          "amphoe": "อ.คลองเตย",
          "province": "จ.กรุงเทพมหานคร",
          "region_id": "7",
          "region_name": "กรุงเทพมหานครและปริมณฑล",
          "station": "จุดวัดสวนเบญจสิริ",
          "latitude": 13.73159,
          "longitude": 100.56745,
          "sum_rainfall_mm": 38.5,
          "observed_at": "2026-09-23T17:00:00+07:00"
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
          "sum_rainfall_mm": 45.0,
          "observed_at": "2026-09-23T17:00:00+07:00"
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
          "sum_rainfall_mm": 42.0,
          "observed_at": "2026-09-23T17:00:00+07:00"
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
          "sum_rainfall_mm": 110.5,
          "observed_at": "2026-09-23T17:00:00+07:00"
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
          "sum_rainfall_mm": 82.0,
          "observed_at": "2026-09-23T17:00:00+07:00"
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
          "sum_rainfall_mm": 0.4,
          "observed_at": "2026-09-23T16:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9143,
                  14.08507
                ],
                [
                  100.91425,
                  14.06812
                ],
                [
                  100.84623,
                  14.04438
                ],
                [
                  100.8468,
                  14.07567
                ],
                [
                  100.91428,
                  14.09931
                ],
                [
                  100.9143,
                  14.08507
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 102.0,
          "observed_at": "2026-09-23T17:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9143,
                  14.08507
                ],
                [
                  100.91425,
                  14.06812
                ],
                [
                  100.84623,
                  14.04438
                ],
                [
                  100.8468,
                  14.07567
                ],
                [
                  100.91428,
                  14.09931
                ],
                [
                  100.9143,
                  14.08507
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 98.6,
          "observed_at": "2026-09-23T17:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.9143,
                  14.08507
                ],
                [
                  100.91425,
                  14.06812
                ],
                [
                  100.84623,
                  14.04438
                ],
                [
                  100.8468,
                  14.07567
                ],
                [
                  100.91428,
                  14.09931
                ],
                [
                  100.9143,
                  14.08507
                ]
              ]
            ]
          }
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
          "sum_rainfall_mm": 8.4,
          "observed_at": "2026-09-23T17:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  100.66355,
                  14.00165
                ],
                [
                  100.66339,
                  13.98092
                ],
                [
                  100.64146,
                  13.97535
                ],
                [
                  100.61414,
                  13.96602
                ],
                [
                  100.60576,
                  13.96472
                ],
                [
                  100.60162,
                  13.99592
                ],
                [
                  100.65591,
                  14.00662
                ],
                [
                  100.66341,
                  14.00712
                ],
                [
                  100.66355,
                  14.00165
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_23_09_2026.png?1790161625",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
