window.IEAT_THAIWATER_DATA = {
  "schema_version": 2,
  "status": "ok",
  "generated_at": "2026-09-29T08:59:26+07:00",
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
      "id": 22,
      "name": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
      "lat": 12.72735973,
      "lon": 101.455931,
      "operations": "สายปฎิบัติการ3",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 4,
      "rain_alert_count": 2,
      "water_alert_count": 2,
      "max_rainfall_mm": 63.0,
      "nearest_alert_km": 8.0,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 2,
      "name": "นิคมอุตสาหกรรมลาดกระบัง",
      "lat": 13.7582559,
      "lon": 100.7893183,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 2.0,
      "latest_observed_at": "2026-09-27 18:20"
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
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 7,
      "name": "นิคมอุตสาหกรรมบ้านหว้า",
      "lat": 14.246309,
      "lon": 100.610012,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 6,
      "rain_alert_count": 0,
      "water_alert_count": 6,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 8,
      "name": "นิคมอุตสาหกรรมสมุทรสาคร",
      "lat": 13.5440008,
      "lon": 100.232856,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 4.7,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 10,
      "name": "นิคมอุตสาหกรรมราชบุรี",
      "lat": 13.63729443,
      "lon": 99.85002164,
      "operations": "สายปฎิบัติการ1",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 3,
      "rain_alert_count": 0,
      "water_alert_count": 3,
      "max_rainfall_mm": null,
      "nearest_alert_km": 3.7,
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 17,
      "name": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
      "lat": 13.614694,
      "lon": 101.329567,
      "operations": "สายปฎิบัติการ2",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 2,
      "rain_alert_count": 0,
      "water_alert_count": 2,
      "max_rainfall_mm": null,
      "nearest_alert_km": 12.7,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 20,
      "name": "นิคมอุตสาหกรรมสระแก้ว",
      "lat": 13.72389768,
      "lon": 102.5546324,
      "operations": "สายปฎิบัติการ2",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 8.1,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 21,
      "name": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "lat": 13.90617863,
      "lon": 101.6529182,
      "operations": "สายปฎิบัติการ2",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "alert_station_count": 8,
      "rain_alert_count": 0,
      "water_alert_count": 8,
      "max_rainfall_mm": null,
      "nearest_alert_km": 16.4,
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-28 17:10"
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
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 64,
      "name": "นิคมอุตสาหกรรมแก่งคอย",
      "lat": 14.624646,
      "lon": 101.008107,
      "operations": "สายปฎิบัติการ1",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "alert_station_count": 5,
      "rain_alert_count": 1,
      "water_alert_count": 4,
      "max_rainfall_mm": 72.0,
      "nearest_alert_km": 0.8,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 14,
      "name": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
      "lat": 7.0082598,
      "lon": 100.3598057,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 10,
      "rain_alert_count": 2,
      "water_alert_count": 8,
      "max_rainfall_mm": 43.0,
      "nearest_alert_km": 10.9,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 12,
      "name": "นิคมอุตสาหกรรมภาคเหนือ",
      "lat": 18.591755,
      "lon": 99.044877,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 14,
      "rain_alert_count": 3,
      "water_alert_count": 11,
      "max_rainfall_mm": 39.5,
      "nearest_alert_km": 7.2,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 39,
      "name": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
      "lat": 12.757945,
      "lon": 101.165319,
      "operations": "สายปฎิบัติการ3",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 2,
      "rain_alert_count": 1,
      "water_alert_count": 1,
      "max_rainfall_mm": 39.0,
      "nearest_alert_km": 7.2,
      "latest_observed_at": "2026-09-29 08:00"
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
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 13,
      "name": "นิคมอุตสาหกรรมพิจิตร",
      "lat": 16.5753627,
      "lon": 100.1489452,
      "operations": "สายปฎิบัติการ1",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 9,
      "rain_alert_count": 0,
      "water_alert_count": 9,
      "max_rainfall_mm": null,
      "nearest_alert_km": 9.6,
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
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
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 85,
      "name": "นิคมอุตสาหกรรมดับบลิวเอชเอ อีสเทิร์นซีบอร์ด 5",
      "lat": 12.844575469624841,
      "lon": 101.23635660462234,
      "operations": "",
      "status": "วิกฤต",
      "severity_score": 3,
      "alert_station_count": 1,
      "rain_alert_count": 0,
      "water_alert_count": 1,
      "max_rainfall_mm": null,
      "nearest_alert_km": 7.1,
      "latest_observed_at": "2026-09-29 08:40"
    },
    {
      "id": 41,
      "name": "นิคมอุตสาหกรรมสมาร์ท ปาร์ค",
      "lat": 12.75079527,
      "lon": 101.1226103,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 51.4,
      "nearest_alert_km": 2.2,
      "latest_observed_at": "2026-09-29 07:00"
    },
    {
      "id": 38,
      "name": "นิคมอุตสาหกรรมเอเชีย",
      "lat": 12.716494,
      "lon": 101.105913,
      "operations": "สายปฎิบัติการ3",
      "status": "เฝ้าระวัง",
      "severity_score": 2,
      "alert_station_count": 1,
      "rain_alert_count": 1,
      "water_alert_count": 0,
      "max_rainfall_mm": 38.8,
      "nearest_alert_km": 15.5,
      "latest_observed_at": "2026-09-29 08:00"
    }
  ],
  "stations": [
    {
      "kind": "rainfall",
      "station": "บ้านอ่างกาน้อย (สบหาด)",
      "station_code": "STN2175",
      "province": "เชียงใหม่",
      "district": "จอมทอง",
      "lat": 18.541897,
      "lon": 98.593349,
      "rainfall_mm": 117.0,
      "value_text": "117 มม.",
      "observed_at": "2026-09-29 07:00",
      "status": "วิกฤต",
      "severity_score": 4,
      "distance_km": 47.9,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองพรหมโหด",
      "station_code": "SKE003",
      "province": "สระแก้ว",
      "district": "อรัญประเทศ",
      "lat": 13.705864,
      "lon": 102.48168,
      "waterlevel_msl": 45.94,
      "storage_percent": 145.7,
      "value_text": "45.94 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.1,
      "nearest_estate": "นิคมอุตสาหกรรมสระแก้ว",
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
      "waterlevel_msl": 24.62,
      "storage_percent": 142.63,
      "value_text": "24.62 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 11.25,
      "storage_percent": 137.4,
      "value_text": "11.25 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 42.9,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 1.76,
      "storage_percent": 133.73,
      "value_text": "1.76 ม.รทก.",
      "observed_at": "2026-09-28 17:10",
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
      "waterlevel_msl": 5.01,
      "storage_percent": 124.22,
      "value_text": "5.01 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.7,
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
      "waterlevel_msl": 1.83,
      "storage_percent": 121.35,
      "value_text": "1.83 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 12.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 17.44,
      "storage_percent": 120.34,
      "value_text": "17.44 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 41.3,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
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
      "waterlevel_msl": 21.48,
      "storage_percent": 119.8,
      "value_text": "21.48 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 29.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 5.99,
      "storage_percent": 119.26,
      "value_text": "5.99 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.6,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 5.17,
      "storage_percent": 118.78,
      "value_text": "5.17 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 6.67,
      "storage_percent": 118.02,
      "value_text": "6.67 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 12.7,
      "nearest_estate": "นิคมอุตสาหกรรมเกตเวย์ ซิตี้",
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
      "waterlevel_msl": 1.75,
      "storage_percent": 117.12,
      "value_text": "1.75 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 19.3,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 6.03,
      "storage_percent": 116.88,
      "value_text": "6.03 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
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
      "waterlevel_msl": 7.01,
      "storage_percent": 116.68,
      "value_text": "7.01 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 14.3,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 36.45,
      "storage_percent": 116.14,
      "value_text": "36.45 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 44.6,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 13.9,
      "storage_percent": 115.56,
      "value_text": "13.9 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
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
      "waterlevel_msl": 17.82,
      "storage_percent": 114.97,
      "value_text": "17.82 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 20.0,
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
      "waterlevel_msl": 9.06,
      "storage_percent": 114.59,
      "value_text": "9.06 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 2.56,
      "storage_percent": 114.19,
      "value_text": "2.56 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 7.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 7.42,
      "storage_percent": 113.17,
      "value_text": "7.42 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 23.3,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "บ้านเขานางบวช",
      "station_code": "Ny.1B",
      "province": "นครนายก",
      "district": "เมืองนครนายก",
      "lat": 14.24582,
      "lon": 101.274246,
      "waterlevel_msl": 9.57,
      "storage_percent": 112.44,
      "value_text": "9.57 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 42.9,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "เมืองปราจีนบุรี",
      "station_code": "PRC002",
      "province": "ปราจีนบุรี",
      "district": "เมืองปราจีนบุรี",
      "lat": 14.053554,
      "lon": 101.38684,
      "waterlevel_msl": 5.14,
      "storage_percent": 112.3,
      "value_text": "5.14 ม.รทก.",
      "observed_at": "2026-09-27 15:10",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 33.1,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 1.79,
      "storage_percent": 111.45,
      "value_text": "1.79 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก A",
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
      "waterlevel_msl": 8.15,
      "storage_percent": 111.32,
      "value_text": "8.15 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 16.4,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "value_text": "2.56 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 47.9,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 9.74,
      "storage_percent": 109.69,
      "value_text": "9.74 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 22.6,
      "nearest_estate": "นิคมอุตสาหกรรมหลักชัยเมืองยาง",
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
      "waterlevel_msl": 2.21,
      "storage_percent": 106.7,
      "value_text": "2.21 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 28.8,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 0.6,
      "storage_percent": 106.31,
      "value_text": "0.6 ม.รทก.",
      "observed_at": "2026-09-26 02:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 9.9,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 11.72,
      "storage_percent": 106.29,
      "value_text": "11.72 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 24.2,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 6.84,
      "storage_percent": 106.21,
      "value_text": "6.84 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 15.5,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 4.75,
      "storage_percent": 106.07,
      "value_text": "4.75 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.8,
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
      "waterlevel_msl": 2.75,
      "storage_percent": 105.61,
      "value_text": "2.75 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 47.7,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 2.04,
      "storage_percent": 104.58,
      "value_text": "2.04 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 34.5,
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
      "waterlevel_msl": 8.65,
      "storage_percent": 104.56,
      "value_text": "8.65 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 39.8,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 40.89,
      "storage_percent": 104.3,
      "value_text": "40.89 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 32.9,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 5.05,
      "storage_percent": 103.93,
      "value_text": "5.05 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.1,
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
      "waterlevel_msl": 4.86,
      "storage_percent": 103.75,
      "value_text": "4.86 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "storage_percent": 103.56,
      "value_text": "3.02 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 8.0,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 1.85,
      "storage_percent": 103.41,
      "value_text": "1.85 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 20.1,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 2.68,
      "storage_percent": 103.17,
      "value_text": "2.68 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 2.02,
      "storage_percent": 100.79,
      "value_text": "2.02 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 27.8,
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
      "waterlevel_msl": 0.65,
      "storage_percent": 100.72,
      "value_text": "0.65 ม.รทก.",
      "observed_at": "2026-09-27 18:20",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 2.0,
      "nearest_estate": "นิคมอุตสาหกรรมลาดกระบัง",
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
      "waterlevel_msl": 9.02,
      "storage_percent": 100.21,
      "value_text": "9.02 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 18.9,
      "nearest_estate": "นิคมอุตสาหกรรมราชบุรี",
      "agency": "ชป."
    },
    {
      "kind": "waterlevel",
      "station": "สำนักเทคโนโลยีชีวภัณฑ์สัตว์",
      "station_code": "M.89",
      "province": "นครราชสีมา",
      "district": "ปากช่อง",
      "lat": 14.69785,
      "lon": 101.415154,
      "waterlevel_msl": 297.41,
      "storage_percent": 100.17,
      "value_text": "297.41 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "ล้นตลิ่ง",
      "severity_score": 4,
      "distance_km": 44.5,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "ลานกางเต็นท์ดอยปุย อุทยานแห่งชาติดอยสุเทพ-ปุย",
      "station_code": "DNP079",
      "province": "เชียงใหม่",
      "district": "เมืองเชียงใหม่",
      "lat": 18.82574,
      "lon": 98.89448,
      "rainfall_mm": 89.7,
      "value_text": "89.7 มม.",
      "observed_at": "2026-09-29 08:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 30.5,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "พพภ"
    },
    {
      "kind": "rainfall",
      "station": "บ้านแม่สะป๊อก",
      "station_code": "STN0593",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.665041,
      "lon": 98.639008,
      "rainfall_mm": 74.0,
      "value_text": "74 มม.",
      "observed_at": "2026-09-29 07:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 43.5,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "rainfall",
      "station": "เหนือเขื่อนป่าสัก",
      "station_code": "ridtele_TS.10",
      "province": "ลพบุรี",
      "district": "พัฒนานิคม",
      "lat": 14.848254,
      "lon": 101.090205,
      "rainfall_mm": 72.0,
      "value_text": "72 มม.",
      "observed_at": "2026-09-29 07:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 26.4,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "ชป."
    },
    {
      "kind": "rainfall",
      "station": "บ้านขุนป๋วย",
      "station_code": "STN0520",
      "province": "เชียงใหม่",
      "district": "แม่วาง",
      "lat": 18.603013,
      "lon": 98.607522,
      "rainfall_mm": 70.5,
      "value_text": "70.5 มม.",
      "observed_at": "2026-09-28 20:00",
      "status": "เสี่ยงสูง",
      "severity_score": 3,
      "distance_km": 46.1,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
      "agency": "ทน."
    },
    {
      "kind": "waterlevel",
      "station": "ท้ายเขื่อนพระรามหก",
      "station_code": "S.26",
      "province": "พระนครศรีอยุธยา",
      "district": "ท่าเรือ",
      "lat": 14.56012,
      "lon": 100.71994,
      "waterlevel_msl": 7.2,
      "storage_percent": 100.0,
      "value_text": "7.2 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.5,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 2.48,
      "storage_percent": 99.87,
      "value_text": "2.48 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 16.9,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 4.12,
      "storage_percent": 99.72,
      "value_text": "4.12 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.4,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
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
      "waterlevel_msl": 348.37,
      "storage_percent": 99.31,
      "value_text": "348.37 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
      "nearest_estate": "นิคมอุตสาหกรรมแก่งคอย",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "กรมชลประทานสามเสน",
      "station_code": "C.12",
      "province": "กรุงเทพมหานคร",
      "district": "ดุสิต",
      "lat": 13.78815,
      "lon": 100.509148,
      "waterlevel_msl": 2.09,
      "storage_percent": 98.99,
      "value_text": "2.09 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
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
      "waterlevel_msl": 38.84,
      "storage_percent": 98.89,
      "value_text": "38.84 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.6,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 38.74,
      "storage_percent": 97.91,
      "value_text": "38.74 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.0,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
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
      "waterlevel_msl": 3.69,
      "storage_percent": 97.9,
      "value_text": "3.69 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 9.7,
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
      "waterlevel_msl": 3.84,
      "storage_percent": 97.36,
      "value_text": "3.84 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.5,
      "nearest_estate": "นิคมอุตสาหกรรมหนองแค",
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
      "waterlevel_msl": 1.92,
      "storage_percent": 97.08,
      "value_text": "1.92 ม.รทก.",
      "observed_at": "2026-09-29 06:20",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "value_text": "1.59 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.0,
      "nearest_estate": "นิคมอุตสาหกรรมสำนักงานใหญ่ (วิภาวดี) ตึก B",
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
      "waterlevel_msl": 6.27,
      "storage_percent": 96.52,
      "value_text": "6.27 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.2,
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
      "waterlevel_msl": 1.05,
      "storage_percent": 95.42,
      "value_text": "1.05 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 1.8,
      "nearest_estate": "นิคมอุตสาหกรรมทีเอฟดี 1",
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
      "waterlevel_msl": 9.77,
      "storage_percent": 94.87,
      "value_text": "9.77 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.9,
      "nearest_estate": "นิคมอุตสาหกรรมนครหลวง",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "นาดี",
      "station_code": "PRC003",
      "province": "ปราจีนบุรี",
      "district": "นาดี",
      "lat": 14.133605,
      "lon": 101.72767,
      "waterlevel_msl": 16.28,
      "storage_percent": 94.61,
      "value_text": "16.28 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 26.5,
      "nearest_estate": "นิคมอุตสาหกรรมไฮเทค กบินทร์",
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
      "waterlevel_msl": 38.43,
      "storage_percent": 94.46,
      "value_text": "38.43 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.8,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "พพภ"
    },
    {
      "kind": "waterlevel",
      "station": "พระรามสอง",
      "station_code": "MKG006",
      "province": "สมุทรสงคราม",
      "district": "เมืองสมุทรสงคราม",
      "lat": 13.38362,
      "lon": 99.9836,
      "waterlevel_msl": 1.21,
      "storage_percent": 94.37,
      "value_text": "1.21 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.2,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 4.46,
      "storage_percent": 94.27,
      "value_text": "4.46 ม.รทก.",
      "observed_at": "2026-09-27 23:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
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
      "waterlevel_msl": 3.76,
      "storage_percent": 92.93,
      "value_text": "3.76 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.9,
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
      "waterlevel_msl": 1.46,
      "storage_percent": 91.86,
      "value_text": "1.46 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.5,
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
      "waterlevel_msl": 7.69,
      "storage_percent": 91.76,
      "value_text": "7.69 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 18.6,
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
      "waterlevel_msl": 2.79,
      "storage_percent": 91.54,
      "value_text": "2.79 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 12.7,
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
      "waterlevel_msl": 1.15,
      "storage_percent": 91.3,
      "value_text": "1.15 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.7,
      "nearest_estate": "นิคมอุตสาหกรรมสมุทรสาคร",
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
      "waterlevel_msl": 0.28,
      "storage_percent": 90.49,
      "value_text": "0.28 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 29.1,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 4.05,
      "storage_percent": 90.21,
      "value_text": "4.05 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบ้านหว้า",
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
      "waterlevel_msl": 0.91,
      "storage_percent": 90.04,
      "value_text": "0.91 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 4.6,
      "nearest_estate": "นิคมอุตสาหกรรมสินสาคร",
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
      "waterlevel_msl": 10.24,
      "storage_percent": 89.9,
      "value_text": "10.24 ม.รทก.",
      "observed_at": "2026-09-29 07:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 7.2,
      "nearest_estate": "นิคมอุตสาหกรรมอาร์ ไอ แอล",
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
      "waterlevel_msl": 306.82,
      "storage_percent": 89.83,
      "value_text": "306.82 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 26.2,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 0.61,
      "storage_percent": 89.28,
      "value_text": "0.61 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 13.5,
      "nearest_estate": "นิคมอุตสาหกรรมมหาราชนคร",
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
      "waterlevel_msl": 8.06,
      "storage_percent": 88.94,
      "value_text": "8.06 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 19.0,
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
      "waterlevel_msl": 6.86,
      "storage_percent": 88.02,
      "value_text": "6.86 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
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
      "waterlevel_msl": 0.77,
      "storage_percent": 87.35,
      "value_text": "0.77 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 20.7,
      "nearest_estate": "นิคมอุตสาหกรรมเอเซีย (สุวรรณภูมิ)",
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
      "waterlevel_msl": 6.97,
      "storage_percent": 87.12,
      "value_text": "6.97 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 36.7,
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
      "waterlevel_msl": 2.86,
      "storage_percent": 87.01,
      "value_text": "2.86 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.8,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 26.13,
      "storage_percent": 86.73,
      "value_text": "26.13 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 11.03,
      "storage_percent": 86.67,
      "value_text": "11.03 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 46.9,
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
      "waterlevel_msl": 8.72,
      "storage_percent": 86.27,
      "value_text": "8.72 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.0,
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
      "waterlevel_msl": 0.1,
      "storage_percent": 86.25,
      "value_text": "0.1 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
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
      "waterlevel_msl": 33.51,
      "storage_percent": 84.42,
      "value_text": "33.51 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 21.2,
      "nearest_estate": "นิคมอุตสาหกรรมภาคใต้จังหวัดสงขลา",
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
      "waterlevel_msl": 10.27,
      "storage_percent": 84.2,
      "value_text": "10.27 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 23.9,
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
      "waterlevel_msl": 2.66,
      "storage_percent": 82.33,
      "value_text": "2.66 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 25.8,
      "nearest_estate": "นิคมอุตสาหกรรมบางปะอิน",
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
      "waterlevel_msl": 310.02,
      "storage_percent": 81.99,
      "value_text": "310.02 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 39.0,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 403.2,
      "storage_percent": 81.98,
      "value_text": "403.2 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 38.5,
      "nearest_estate": "นิคมอุตสาหกรรมภาคเหนือ",
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
      "waterlevel_msl": 31.87,
      "storage_percent": 81.64,
      "value_text": "31.87 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 44.2,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "สสน."
    },
    {
      "kind": "waterlevel",
      "station": "คลองลาดพร้าว ท้ายปตร.คลอง2",
      "station_code": "BKK001",
      "province": "กรุงเทพมหานคร",
      "district": "สายไหม",
      "lat": 13.92245,
      "lon": 100.63438,
      "waterlevel_msl": 1.72,
      "storage_percent": 81.04,
      "value_text": "1.72 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 15.2,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 22.57,
      "storage_percent": 80.82,
      "value_text": "22.57 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 49.3,
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
      "waterlevel_msl": 1.7,
      "storage_percent": 80.66,
      "value_text": "1.7 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 17.1,
      "nearest_estate": "นิคมอุตสาหกรรมบางชัน",
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
      "waterlevel_msl": 5.72,
      "storage_percent": 80.31,
      "value_text": "5.72 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.6,
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
      "waterlevel_msl": 4.13,
      "storage_percent": 80.05,
      "value_text": "4.13 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 30.9,
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
      "waterlevel_msl": 25.57,
      "storage_percent": 79.59,
      "value_text": "25.57 ม.รทก.",
      "observed_at": "2026-09-29 08:40",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 41.6,
      "nearest_estate": "นิคมอุตสาหกรรมแอลพีพี นครสวรรค์",
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
      "waterlevel_msl": 33.26,
      "storage_percent": 79.5,
      "value_text": "33.26 ม.รทก.",
      "observed_at": "2026-09-29 08:00",
      "status": "วิกฤต",
      "severity_score": 3,
      "distance_km": 22.7,
      "nearest_estate": "นิคมอุตสาหกรรมพิจิตร",
      "agency": "ชป."
    }
  ],
  "summary": {
    "estate_total": 72,
    "estate_count": 27,
    "station_count": 834,
    "alert_station_count": 114,
    "heavy_rain_estate_count": 1,
    "water_alert_estate_count": 25,
    "critical_count": 76,
    "rain_station_count": 647,
    "waterlevel_station_count": 187,
    "waterlevel_alert_count": 103,
    "max_rainfall_mm": 72.0,
    "risk_level": "ล้นตลิ่ง",
    "storm_count": 0,
    "storm_names": [],
    "flood_watch_provinces": [
      "จ.เชียงใหม่"
    ],
    "flood_watch_province_count": 1,
    "flash_flood_24h_area_count": 6,
    "flash_flood_48h_area_count": 40,
    "warning_title": "",
    "warning_summary": "",
    "warning_url": "https://tmd.go.th/warning-and-events/warning-storm"
  },
  "errors": [],
  "flash_flood": {
    "24h": {
      "period": "24h",
      "date": "2026-09-29",
      "time": "08:00:00",
      "type": "แผนที่แสดงพื้นที่เสี่ยงน้ำท่วมฉับพลัน (รายตำบล)ใน 24 ชม. ข้างหน้า จากปริมาณฝนสะสมที่สถานีโทรมาตร",
      "areas": [
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เตี๊ยะ",
          "latitude": 18.31208,
          "longitude": 98.48189,
          "sum_rainfall_mm": 126.80000000000001,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.49645,
                  18.34775
                ],
                [
                  98.50725,
                  18.33876
                ],
                [
                  98.52237,
                  18.33699
                ],
                [
                  98.53062,
                  18.33867
                ],
                [
                  98.53236,
                  18.32901
                ],
                [
                  98.52924,
                  18.31968
                ],
                [
                  98.53262,
                  18.31131
                ],
                [
                  98.53646,
                  18.30694
                ],
                [
                  98.5387,
                  18.30766
                ],
                [
                  98.53789,
                  18.30504
                ],
                [
                  98.53959,
                  18.3043
                ],
                [
                  98.54251,
                  18.29774
                ],
                [
                  98.54495,
                  18.2971
                ],
                [
                  98.54595,
                  18.29219
                ],
                [
                  98.54808,
                  18.2912
                ],
                [
                  98.55279,
                  18.29236
                ],
                [
                  98.55247,
                  18.28918
                ],
                [
                  98.55587,
                  18.28938
                ],
                [
                  98.55652,
                  18.28579
                ],
                [
                  98.56976,
                  18.28751
                ],
                [
                  98.57434,
                  18.29049
                ],
                [
                  98.57844,
                  18.29045
                ],
                [
                  98.58361,
                  18.28861
                ],
                [
                  98.59046,
                  18.29046
                ],
                [
                  98.59732,
                  18.28876
                ],
                [
                  98.60107,
                  18.28613
                ],
                [
                  98.60482,
                  18.28639
                ],
                [
                  98.60924,
                  18.28394
                ],
                [
                  98.61382,
                  18.28494
                ],
                [
                  98.61656,
                  18.28757
                ],
                [
                  98.61957,
                  18.28805
                ],
                [
                  98.62382,
                  18.29144
                ],
                [
                  98.62878,
                  18.27738
                ],
                [
                  98.62984,
                  18.27073
                ],
                [
                  98.63416,
                  18.26785
                ],
                [
                  98.64048,
                  18.26582
                ],
                [
                  98.64216,
                  18.26358
                ],
                [
                  98.64538,
                  18.26681
                ],
                [
                  98.6485,
                  18.2665
                ],
                [
                  98.65383,
                  18.26937
                ],
                [
                  98.65685,
                  18.26935
                ],
                [
                  98.669,
                  18.26306
                ],
                [
                  98.67546,
                  18.26182
                ],
                [
                  98.67889,
                  18.25855
                ],
                [
                  98.68558,
                  18.25547
                ],
                [
                  98.69265,
                  18.25428
                ],
                [
                  98.69667,
                  18.25576
                ],
                [
                  98.70106,
                  18.25344
                ],
                [
                  98.70229,
                  18.25143
                ],
                [
                  98.70065,
                  18.25132
                ],
                [
                  98.7013,
                  18.24629
                ],
                [
                  98.6987,
                  18.23656
                ],
                [
                  98.69443,
                  18.22802
                ],
                [
                  98.68898,
                  18.21176
                ],
                [
                  98.68859,
                  18.20264
                ],
                [
                  98.69212,
                  18.18855
                ],
                [
                  98.68227,
                  18.18453
                ],
                [
                  98.68766,
                  18.18267
                ],
                [
                  98.69213,
                  18.1838
                ],
                [
                  98.69405,
                  18.17775
                ],
                [
                  98.69865,
                  18.17256
                ],
                [
                  98.70425,
                  18.16841
                ],
                [
                  98.70577,
                  18.16572
                ],
                [
                  98.71011,
                  18.16286
                ],
                [
                  98.71045,
                  18.15927
                ],
                [
                  98.71282,
                  18.15697
                ],
                [
                  98.71873,
                  18.15626
                ],
                [
                  98.72218,
                  18.15819
                ],
                [
                  98.72703,
                  18.15899
                ],
                [
                  98.72855,
                  18.15649
                ],
                [
                  98.73763,
                  18.15546
                ],
                [
                  98.72574,
                  18.14957
                ],
                [
                  98.7202,
                  18.15018
                ],
                [
                  98.71729,
                  18.15185
                ],
                [
                  98.71368,
                  18.15193
                ],
                [
                  98.70849,
                  18.1557
                ],
                [
                  98.70572,
                  18.15583
                ],
                [
                  98.69242,
                  18.16396
                ],
                [
                  98.68695,
                  18.16462
                ],
                [
                  98.67968,
                  18.16266
                ],
                [
                  98.67241,
                  18.1627
                ],
                [
                  98.66484,
                  18.16807
                ],
                [
                  98.66334,
                  18.17113
                ],
                [
                  98.65727,
                  18.17633
                ],
                [
                  98.64651,
                  18.18142
                ],
                [
                  98.64019,
                  18.1815
                ],
                [
                  98.63462,
                  18.18317
                ],
                [
                  98.63318,
                  18.18802
                ],
                [
                  98.62854,
                  18.19033
                ],
                [
                  98.62955,
                  18.1953
                ],
                [
                  98.62831,
                  18.19721
                ],
                [
                  98.62079,
                  18.19798
                ],
                [
                  98.61288,
                  18.2036
                ],
                [
                  98.6115,
                  18.20305
                ],
                [
                  98.60984,
                  18.19876
                ],
                [
                  98.60737,
                  18.19826
                ],
                [
                  98.60629,
                  18.19961
                ],
                [
                  98.60621,
                  18.20371
                ],
                [
                  98.60467,
                  18.20556
                ],
                [
                  98.59868,
                  18.20762
                ],
                [
                  98.59529,
                  18.21002
                ],
                [
                  98.59054,
                  18.20797
                ],
                [
                  98.58963,
                  18.2134
                ],
                [
                  98.5828,
                  18.21569
                ],
                [
                  98.57157,
                  18.22498
                ],
                [
                  98.56842,
                  18.2254
                ],
                [
                  98.56658,
                  18.22834
                ],
                [
                  98.56099,
                  18.22912
                ],
                [
                  98.55511,
                  18.2331
                ],
                [
                  98.53202,
                  18.23593
                ],
                [
                  98.52117,
                  18.23129
                ],
                [
                  98.50977,
                  18.23032
                ],
                [
                  98.50301,
                  18.22731
                ],
                [
                  98.49692,
                  18.2267
                ],
                [
                  98.49699,
                  18.22552
                ],
                [
                  98.49294,
                  18.22702
                ],
                [
                  98.48225,
                  18.22427
                ],
                [
                  98.47804,
                  18.22174
                ],
                [
                  98.47108,
                  18.22361
                ],
                [
                  98.4621,
                  18.22257
                ],
                [
                  98.45378,
                  18.22894
                ],
                [
                  98.45073,
                  18.22883
                ],
                [
                  98.44796,
                  18.22664
                ],
                [
                  98.44618,
                  18.22674
                ],
                [
                  98.4425,
                  18.23214
                ],
                [
                  98.43698,
                  18.23239
                ],
                [
                  98.4303,
                  18.23985
                ],
                [
                  98.42555,
                  18.24085
                ],
                [
                  98.42423,
                  18.24515
                ],
                [
                  98.42032,
                  18.24677
                ],
                [
                  98.42618,
                  18.25861
                ],
                [
                  98.43024,
                  18.26115
                ],
                [
                  98.43518,
                  18.26076
                ],
                [
                  98.45641,
                  18.26628
                ],
                [
                  98.46026,
                  18.26866
                ],
                [
                  98.46347,
                  18.277
                ],
                [
                  98.46481,
                  18.28633
                ],
                [
                  98.46183,
                  18.28879
                ],
                [
                  98.46109,
                  18.29288
                ],
                [
                  98.4638,
                  18.30099
                ],
                [
                  98.4632,
                  18.30808
                ],
                [
                  98.45688,
                  18.31018
                ],
                [
                  98.45498,
                  18.31283
                ],
                [
                  98.45469,
                  18.32092
                ],
                [
                  98.45231,
                  18.32424
                ],
                [
                  98.45534,
                  18.32674
                ],
                [
                  98.45553,
                  18.32972
                ],
                [
                  98.45914,
                  18.3347
                ],
                [
                  98.46096,
                  18.3396
                ],
                [
                  98.46345,
                  18.33954
                ],
                [
                  98.46731,
                  18.34979
                ],
                [
                  98.46909,
                  18.35189
                ],
                [
                  98.46818,
                  18.35545
                ],
                [
                  98.46605,
                  18.35753
                ],
                [
                  98.46643,
                  18.365
                ],
                [
                  98.46749,
                  18.36575
                ],
                [
                  98.47133,
                  18.365
                ],
                [
                  98.47204,
                  18.36361
                ],
                [
                  98.47323,
                  18.36437
                ],
                [
                  98.47372,
                  18.36265
                ],
                [
                  98.49645,
                  18.34775
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่กลาง",
          "latitude": 18.533205,
          "longitude": 98.52239,
          "sum_rainfall_mm": 286.4,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.63557,
                  18.58267
                ],
                [
                  98.64044,
                  18.58225
                ],
                [
                  98.64482,
                  18.58044
                ],
                [
                  98.65029,
                  18.57465
                ],
                [
                  98.65487,
                  18.57357
                ],
                [
                  98.65844,
                  18.571
                ],
                [
                  98.65965,
                  18.5668
                ],
                [
                  98.66691,
                  18.56663
                ],
                [
                  98.66669,
                  18.56447
                ],
                [
                  98.66871,
                  18.56317
                ],
                [
                  98.66777,
                  18.55863
                ],
                [
                  98.67159,
                  18.55885
                ],
                [
                  98.67251,
                  18.55802
                ],
                [
                  98.67483,
                  18.54963
                ],
                [
                  98.68993,
                  18.53488
                ],
                [
                  98.6872,
                  18.52639
                ],
                [
                  98.68353,
                  18.52612
                ],
                [
                  98.68296,
                  18.52479
                ],
                [
                  98.69115,
                  18.51746
                ],
                [
                  98.69293,
                  18.51112
                ],
                [
                  98.71008,
                  18.50646
                ],
                [
                  98.72628,
                  18.4989
                ],
                [
                  98.71572,
                  18.49166
                ],
                [
                  98.70772,
                  18.48092
                ],
                [
                  98.70525,
                  18.48091
                ],
                [
                  98.69952,
                  18.47836
                ],
                [
                  98.69348,
                  18.47387
                ],
                [
                  98.68202,
                  18.47454
                ],
                [
                  98.66654,
                  18.47145
                ],
                [
                  98.65941,
                  18.46795
                ],
                [
                  98.65821,
                  18.4656
                ],
                [
                  98.65879,
                  18.46439
                ],
                [
                  98.65629,
                  18.45998
                ],
                [
                  98.66005,
                  18.45596
                ],
                [
                  98.65688,
                  18.4503
                ],
                [
                  98.65749,
                  18.44714
                ],
                [
                  98.65671,
                  18.44557
                ],
                [
                  98.65998,
                  18.44471
                ],
                [
                  98.65926,
                  18.4403
                ],
                [
                  98.6626,
                  18.43967
                ],
                [
                  98.66457,
                  18.43699
                ],
                [
                  98.66686,
                  18.43591
                ],
                [
                  98.66821,
                  18.43325
                ],
                [
                  98.6698,
                  18.43303
                ],
                [
                  98.66888,
                  18.4313
                ],
                [
                  98.67039,
                  18.42855
                ],
                [
                  98.66915,
                  18.42641
                ],
                [
                  98.67057,
                  18.42422
                ],
                [
                  98.67881,
                  18.42127
                ],
                [
                  98.68366,
                  18.42169
                ],
                [
                  98.69206,
                  18.41967
                ],
                [
                  98.69337,
                  18.41901
                ],
                [
                  98.69296,
                  18.4152
                ],
                [
                  98.69673,
                  18.41123
                ],
                [
                  98.69178,
                  18.40903
                ],
                [
                  98.68449,
                  18.40764
                ],
                [
                  98.68138,
                  18.41536
                ],
                [
                  98.67712,
                  18.41571
                ],
                [
                  98.6727,
                  18.41785
                ],
                [
                  98.66953,
                  18.4176
                ],
                [
                  98.66939,
                  18.41895
                ],
                [
                  98.66547,
                  18.41937
                ],
                [
                  98.66491,
                  18.42058
                ],
                [
                  98.65095,
                  18.42561
                ],
                [
                  98.6451,
                  18.4267
                ],
                [
                  98.63444,
                  18.42628
                ],
                [
                  98.62705,
                  18.42801
                ],
                [
                  98.61891,
                  18.42543
                ],
                [
                  98.61296,
                  18.42641
                ],
                [
                  98.6007,
                  18.42002
                ],
                [
                  98.5676,
                  18.42055
                ],
                [
                  98.53945,
                  18.41132
                ],
                [
                  98.53592,
                  18.4121
                ],
                [
                  98.52557,
                  18.41048
                ],
                [
                  98.52198,
                  18.41216
                ],
                [
                  98.51852,
                  18.41235
                ],
                [
                  98.51459,
                  18.40747
                ],
                [
                  98.50967,
                  18.40672
                ],
                [
                  98.50711,
                  18.40288
                ],
                [
                  98.50064,
                  18.40506
                ],
                [
                  98.49985,
                  18.40813
                ],
                [
                  98.50299,
                  18.41039
                ],
                [
                  98.50259,
                  18.41673
                ],
                [
                  98.49836,
                  18.41705
                ],
                [
                  98.49691,
                  18.41921
                ],
                [
                  98.49697,
                  18.41756
                ],
                [
                  98.49427,
                  18.41897
                ],
                [
                  98.49272,
                  18.41761
                ],
                [
                  98.49244,
                  18.4197
                ],
                [
                  98.48718,
                  18.42321
                ],
                [
                  98.4833,
                  18.43029
                ],
                [
                  98.48171,
                  18.44096
                ],
                [
                  98.48332,
                  18.44457
                ],
                [
                  98.47455,
                  18.44933
                ],
                [
                  98.47555,
                  18.46404
                ],
                [
                  98.47861,
                  18.46826
                ],
                [
                  98.48133,
                  18.46899
                ],
                [
                  98.48997,
                  18.47707
                ],
                [
                  98.4927,
                  18.47698
                ],
                [
                  98.49531,
                  18.47834
                ],
                [
                  98.49744,
                  18.48058
                ],
                [
                  98.49747,
                  18.48448
                ],
                [
                  98.49882,
                  18.48671
                ],
                [
                  98.50091,
                  18.48747
                ],
                [
                  98.5064,
                  18.48653
                ],
                [
                  98.51013,
                  18.49165
                ],
                [
                  98.50864,
                  18.49671
                ],
                [
                  98.50344,
                  18.50099
                ],
                [
                  98.50463,
                  18.50333
                ],
                [
                  98.50736,
                  18.50479
                ],
                [
                  98.50744,
                  18.50603
                ],
                [
                  98.50324,
                  18.50593
                ],
                [
                  98.50256,
                  18.50682
                ],
                [
                  98.5061,
                  18.51096
                ],
                [
                  98.50745,
                  18.51657
                ],
                [
                  98.50728,
                  18.51902
                ],
                [
                  98.50506,
                  18.52233
                ],
                [
                  98.50539,
                  18.52489
                ],
                [
                  98.50402,
                  18.52593
                ],
                [
                  98.49772,
                  18.52512
                ],
                [
                  98.49678,
                  18.52954
                ],
                [
                  98.49498,
                  18.53115
                ],
                [
                  98.49315,
                  18.53699
                ],
                [
                  98.49116,
                  18.53799
                ],
                [
                  98.48651,
                  18.54503
                ],
                [
                  98.48451,
                  18.54605
                ],
                [
                  98.48262,
                  18.55007
                ],
                [
                  98.48164,
                  18.55988
                ],
                [
                  98.48307,
                  18.57117
                ],
                [
                  98.48122,
                  18.57806
                ],
                [
                  98.47911,
                  18.58138
                ],
                [
                  98.47936,
                  18.58454
                ],
                [
                  98.48703,
                  18.58757
                ],
                [
                  98.48757,
                  18.59223
                ],
                [
                  98.49825,
                  18.59076
                ],
                [
                  98.50811,
                  18.59483
                ],
                [
                  98.51416,
                  18.59324
                ],
                [
                  98.52061,
                  18.59322
                ],
                [
                  98.53091,
                  18.58862
                ],
                [
                  98.53633,
                  18.58931
                ],
                [
                  98.54489,
                  18.58455
                ],
                [
                  98.55123,
                  18.58496
                ],
                [
                  98.55743,
                  18.58317
                ],
                [
                  98.56018,
                  18.58411
                ],
                [
                  98.56381,
                  18.58237
                ],
                [
                  98.57238,
                  18.58098
                ],
                [
                  98.5951,
                  18.58228
                ],
                [
                  98.60126,
                  18.58444
                ],
                [
                  98.60923,
                  18.59402
                ],
                [
                  98.61568,
                  18.59595
                ],
                [
                  98.62321,
                  18.60037
                ],
                [
                  98.62604,
                  18.59198
                ],
                [
                  98.63241,
                  18.58786
                ],
                [
                  98.63557,
                  18.58267
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยสามหมื่น",
          "latitude": 19.413826,
          "longitude": 98.593124,
          "sum_rainfall_mm": 97.2,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.7887,
                  19.46616
                ],
                [
                  98.79848,
                  19.45295
                ],
                [
                  98.79856,
                  19.44999
                ],
                [
                  98.79535,
                  19.44226
                ],
                [
                  98.79525,
                  19.43716
                ],
                [
                  98.79652,
                  19.43439
                ],
                [
                  98.80249,
                  19.42927
                ],
                [
                  98.80371,
                  19.42401
                ],
                [
                  98.80216,
                  19.41599
                ],
                [
                  98.8022,
                  19.40941
                ],
                [
                  98.81082,
                  19.40138
                ],
                [
                  98.81313,
                  19.38907
                ],
                [
                  98.81238,
                  19.35867
                ],
                [
                  98.80378,
                  19.35251
                ],
                [
                  98.80063,
                  19.33266
                ],
                [
                  98.80067,
                  19.31284
                ],
                [
                  98.79671,
                  19.30929
                ],
                [
                  98.7896,
                  19.30593
                ],
                [
                  98.78584,
                  19.30469
                ],
                [
                  98.78133,
                  19.30583
                ],
                [
                  98.7781,
                  19.30907
                ],
                [
                  98.77642,
                  19.31292
                ],
                [
                  98.77249,
                  19.31486
                ],
                [
                  98.76988,
                  19.31479
                ],
                [
                  98.7696,
                  19.31633
                ],
                [
                  98.76811,
                  19.31647
                ],
                [
                  98.76773,
                  19.31758
                ],
                [
                  98.76612,
                  19.31728
                ],
                [
                  98.76589,
                  19.31861
                ],
                [
                  98.76218,
                  19.32123
                ],
                [
                  98.75872,
                  19.32096
                ],
                [
                  98.75674,
                  19.32271
                ],
                [
                  98.75076,
                  19.32183
                ],
                [
                  98.74757,
                  19.32543
                ],
                [
                  98.74561,
                  19.32541
                ],
                [
                  98.74243,
                  19.3244
                ],
                [
                  98.7402,
                  19.32139
                ],
                [
                  98.73822,
                  19.32124
                ],
                [
                  98.7374,
                  19.31986
                ],
                [
                  98.73338,
                  19.31881
                ],
                [
                  98.73077,
                  19.31503
                ],
                [
                  98.72939,
                  19.31511
                ],
                [
                  98.72942,
                  19.31637
                ],
                [
                  98.72673,
                  19.31541
                ],
                [
                  98.72508,
                  19.31598
                ],
                [
                  98.72341,
                  19.31275
                ],
                [
                  98.71806,
                  19.31
                ],
                [
                  98.71417,
                  19.31131
                ],
                [
                  98.7103,
                  19.30524
                ],
                [
                  98.70825,
                  19.30469
                ],
                [
                  98.70832,
                  19.30215
                ],
                [
                  98.70504,
                  19.29836
                ],
                [
                  98.70313,
                  19.30101
                ],
                [
                  98.70483,
                  19.30683
                ],
                [
                  98.70386,
                  19.30719
                ],
                [
                  98.70094,
                  19.30496
                ],
                [
                  98.70032,
                  19.30833
                ],
                [
                  98.70259,
                  19.31112
                ],
                [
                  98.70439,
                  19.31074
                ],
                [
                  98.70266,
                  19.31916
                ],
                [
                  98.7034,
                  19.32319
                ],
                [
                  98.70027,
                  19.32662
                ],
                [
                  98.69494,
                  19.32894
                ],
                [
                  98.69509,
                  19.33542
                ],
                [
                  98.69248,
                  19.33446
                ],
                [
                  98.68551,
                  19.33775
                ],
                [
                  98.68198,
                  19.33354
                ],
                [
                  98.67223,
                  19.33641
                ],
                [
                  98.66489,
                  19.3349
                ],
                [
                  98.65939,
                  19.33549
                ],
                [
                  98.65485,
                  19.34212
                ],
                [
                  98.6402,
                  19.35022
                ],
                [
                  98.63375,
                  19.34936
                ],
                [
                  98.63033,
                  19.35058
                ],
                [
                  98.62389,
                  19.34394
                ],
                [
                  98.61585,
                  19.3463
                ],
                [
                  98.6128,
                  19.34617
                ],
                [
                  98.605,
                  19.35113
                ],
                [
                  98.5948,
                  19.35342
                ],
                [
                  98.59419,
                  19.35754
                ],
                [
                  98.59119,
                  19.35895
                ],
                [
                  98.58556,
                  19.36433
                ],
                [
                  98.5814,
                  19.36556
                ],
                [
                  98.57827,
                  19.37166
                ],
                [
                  98.57758,
                  19.37681
                ],
                [
                  98.57537,
                  19.37951
                ],
                [
                  98.57602,
                  19.38247
                ],
                [
                  98.57333,
                  19.38632
                ],
                [
                  98.57376,
                  19.39096
                ],
                [
                  98.57561,
                  19.39486
                ],
                [
                  98.57938,
                  19.39926
                ],
                [
                  98.58605,
                  19.39753
                ],
                [
                  98.58794,
                  19.3981
                ],
                [
                  98.59168,
                  19.40192
                ],
                [
                  98.59393,
                  19.40267
                ],
                [
                  98.59603,
                  19.40671
                ],
                [
                  98.59214,
                  19.40852
                ],
                [
                  98.5911,
                  19.41146
                ],
                [
                  98.58615,
                  19.41529
                ],
                [
                  98.58659,
                  19.4204
                ],
                [
                  98.58938,
                  19.42225
                ],
                [
                  98.58982,
                  19.42412
                ],
                [
                  98.62286,
                  19.43435
                ],
                [
                  98.63061,
                  19.43863
                ],
                [
                  98.64012,
                  19.43982
                ],
                [
                  98.64993,
                  19.43743
                ],
                [
                  98.65806,
                  19.42889
                ],
                [
                  98.68189,
                  19.43271
                ],
                [
                  98.69404,
                  19.43252
                ],
                [
                  98.70717,
                  19.43065
                ],
                [
                  98.71159,
                  19.43402
                ],
                [
                  98.71492,
                  19.44172
                ],
                [
                  98.72073,
                  19.44164
                ],
                [
                  98.73602,
                  19.44565
                ],
                [
                  98.74698,
                  19.44935
                ],
                [
                  98.74688,
                  19.45072
                ],
                [
                  98.75285,
                  19.45337
                ],
                [
                  98.75898,
                  19.4529
                ],
                [
                  98.7655,
                  19.45895
                ],
                [
                  98.78283,
                  19.46115
                ],
                [
                  98.7887,
                  19.46616
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500302",
          "tambon": "ต.ท่าผา",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่อวม",
          "latitude": 18.507107,
          "longitude": 98.5005,
          "sum_rainfall_mm": 220.0,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.49678,
                  18.52954
                ],
                [
                  98.49772,
                  18.52512
                ],
                [
                  98.50402,
                  18.52593
                ],
                [
                  98.50539,
                  18.52489
                ],
                [
                  98.50506,
                  18.52233
                ],
                [
                  98.50728,
                  18.51902
                ],
                [
                  98.50745,
                  18.51657
                ],
                [
                  98.5061,
                  18.51096
                ],
                [
                  98.50256,
                  18.50682
                ],
                [
                  98.50324,
                  18.50593
                ],
                [
                  98.50608,
                  18.50666
                ],
                [
                  98.50757,
                  18.50578
                ],
                [
                  98.50344,
                  18.50099
                ],
                [
                  98.50864,
                  18.49671
                ],
                [
                  98.51011,
                  18.49138
                ],
                [
                  98.50614,
                  18.48642
                ],
                [
                  98.50091,
                  18.48747
                ],
                [
                  98.49882,
                  18.48671
                ],
                [
                  98.49747,
                  18.48448
                ],
                [
                  98.49744,
                  18.48058
                ],
                [
                  98.49578,
                  18.4788
                ],
                [
                  98.49306,
                  18.47707
                ],
                [
                  98.48997,
                  18.47707
                ],
                [
                  98.48152,
                  18.46917
                ],
                [
                  98.47659,
                  18.4768
                ],
                [
                  98.46868,
                  18.4792
                ],
                [
                  98.46501,
                  18.47535
                ],
                [
                  98.45957,
                  18.46602
                ],
                [
                  98.45347,
                  18.46301
                ],
                [
                  98.45118,
                  18.4642
                ],
                [
                  98.44601,
                  18.46183
                ],
                [
                  98.44469,
                  18.46044
                ],
                [
                  98.44419,
                  18.45689
                ],
                [
                  98.43863,
                  18.45326
                ],
                [
                  98.43619,
                  18.45397
                ],
                [
                  98.43574,
                  18.45845
                ],
                [
                  98.43341,
                  18.45929
                ],
                [
                  98.43005,
                  18.45835
                ],
                [
                  98.42751,
                  18.45599
                ],
                [
                  98.4217,
                  18.45894
                ],
                [
                  98.41967,
                  18.45737
                ],
                [
                  98.41871,
                  18.45396
                ],
                [
                  98.41568,
                  18.45576
                ],
                [
                  98.41086,
                  18.45421
                ],
                [
                  98.40765,
                  18.45493
                ],
                [
                  98.40401,
                  18.454
                ],
                [
                  98.3968,
                  18.45755
                ],
                [
                  98.39381,
                  18.45788
                ],
                [
                  98.38432,
                  18.45145
                ],
                [
                  98.38165,
                  18.45259
                ],
                [
                  98.37767,
                  18.45119
                ],
                [
                  98.37623,
                  18.44557
                ],
                [
                  98.38,
                  18.44067
                ],
                [
                  98.37517,
                  18.43639
                ],
                [
                  98.37214,
                  18.43911
                ],
                [
                  98.37074,
                  18.43208
                ],
                [
                  98.36887,
                  18.43217
                ],
                [
                  98.36836,
                  18.42945
                ],
                [
                  98.36618,
                  18.42908
                ],
                [
                  98.35936,
                  18.42322
                ],
                [
                  98.35712,
                  18.42309
                ],
                [
                  98.35316,
                  18.42534
                ],
                [
                  98.34818,
                  18.42628
                ],
                [
                  98.33565,
                  18.41992
                ],
                [
                  98.33134,
                  18.42059
                ],
                [
                  98.32686,
                  18.42346
                ],
                [
                  98.3306,
                  18.42911
                ],
                [
                  98.33075,
                  18.43311
                ],
                [
                  98.33265,
                  18.43732
                ],
                [
                  98.33098,
                  18.4469
                ],
                [
                  98.32421,
                  18.45475
                ],
                [
                  98.32586,
                  18.46327
                ],
                [
                  98.32364,
                  18.46774
                ],
                [
                  98.32291,
                  18.47447
                ],
                [
                  98.32495,
                  18.47949
                ],
                [
                  98.3286,
                  18.48219
                ],
                [
                  98.33063,
                  18.48156
                ],
                [
                  98.33523,
                  18.48546
                ],
                [
                  98.34295,
                  18.48095
                ],
                [
                  98.34588,
                  18.48497
                ],
                [
                  98.35121,
                  18.48835
                ],
                [
                  98.36351,
                  18.4868
                ],
                [
                  98.36636,
                  18.48775
                ],
                [
                  98.37089,
                  18.48492
                ],
                [
                  98.37343,
                  18.48912
                ],
                [
                  98.37609,
                  18.4895
                ],
                [
                  98.38178,
                  18.49375
                ],
                [
                  98.38456,
                  18.49407
                ],
                [
                  98.38624,
                  18.49562
                ],
                [
                  98.38866,
                  18.49481
                ],
                [
                  98.39104,
                  18.49675
                ],
                [
                  98.39602,
                  18.49728
                ],
                [
                  98.40405,
                  18.50542
                ],
                [
                  98.41371,
                  18.51092
                ],
                [
                  98.41755,
                  18.51493
                ],
                [
                  98.42571,
                  18.51925
                ],
                [
                  98.44587,
                  18.51808
                ],
                [
                  98.45516,
                  18.52324
                ],
                [
                  98.45973,
                  18.51298
                ],
                [
                  98.46148,
                  18.5137
                ],
                [
                  98.46191,
                  18.51689
                ],
                [
                  98.46905,
                  18.51365
                ],
                [
                  98.47151,
                  18.51378
                ],
                [
                  98.47406,
                  18.51189
                ],
                [
                  98.4769,
                  18.51181
                ],
                [
                  98.48615,
                  18.52547
                ],
                [
                  98.48987,
                  18.5347
                ],
                [
                  98.4933,
                  18.53672
                ],
                [
                  98.49498,
                  18.53115
                ],
                [
                  98.49678,
                  18.52954
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สะงะ",
          "latitude": 18.786606,
          "longitude": 98.495445,
          "sum_rainfall_mm": 121.4,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.19428,
                  18.96184
                ],
                [
                  98.19704,
                  18.95854
                ],
                [
                  98.20018,
                  18.95766
                ],
                [
                  98.20122,
                  18.95884
                ],
                [
                  98.2019,
                  18.95682
                ],
                [
                  98.20412,
                  18.95581
                ],
                [
                  98.20489,
                  18.95742
                ],
                [
                  98.20788,
                  18.95708
                ],
                [
                  98.21097,
                  18.953
                ],
                [
                  98.21587,
                  18.94927
                ],
                [
                  98.22084,
                  18.9495
                ],
                [
                  98.22242,
                  18.94692
                ],
                [
                  98.2233,
                  18.94838
                ],
                [
                  98.22572,
                  18.94847
                ],
                [
                  98.22933,
                  18.95208
                ],
                [
                  98.22988,
                  18.95595
                ],
                [
                  98.23346,
                  18.96071
                ],
                [
                  98.24031,
                  18.9601
                ],
                [
                  98.24543,
                  18.95778
                ],
                [
                  98.24663,
                  18.95946
                ],
                [
                  98.25393,
                  18.95759
                ],
                [
                  98.25613,
                  18.95632
                ],
                [
                  98.2574,
                  18.9533
                ],
                [
                  98.26093,
                  18.95154
                ],
                [
                  98.26182,
                  18.9392
                ],
                [
                  98.26562,
                  18.93267
                ],
                [
                  98.26654,
                  18.93214
                ],
                [
                  98.26806,
                  18.93441
                ],
                [
                  98.27091,
                  18.93472
                ],
                [
                  98.27909,
                  18.92881
                ],
                [
                  98.28876,
                  18.92605
                ],
                [
                  98.29753,
                  18.92889
                ],
                [
                  98.30225,
                  18.93203
                ],
                [
                  98.31119,
                  18.93349
                ],
                [
                  98.31482,
                  18.93176
                ],
                [
                  98.32032,
                  18.93178
                ],
                [
                  98.32608,
                  18.93336
                ],
                [
                  98.32759,
                  18.93445
                ],
                [
                  98.32757,
                  18.93894
                ],
                [
                  98.32904,
                  18.94087
                ],
                [
                  98.33716,
                  18.93952
                ],
                [
                  98.34433,
                  18.93573
                ],
                [
                  98.34763,
                  18.93231
                ],
                [
                  98.35029,
                  18.92548
                ],
                [
                  98.35021,
                  18.90804
                ],
                [
                  98.35432,
                  18.90586
                ],
                [
                  98.35608,
                  18.90307
                ],
                [
                  98.36148,
                  18.89903
                ],
                [
                  98.36793,
                  18.89538
                ],
                [
                  98.378,
                  18.88267
                ],
                [
                  98.38411,
                  18.88222
                ],
                [
                  98.3942,
                  18.87835
                ],
                [
                  98.42004,
                  18.88021
                ],
                [
                  98.42648,
                  18.88335
                ],
                [
                  98.43831,
                  18.88584
                ],
                [
                  98.44444,
                  18.88545
                ],
                [
                  98.45018,
                  18.88726
                ],
                [
                  98.46508,
                  18.88773
                ],
                [
                  98.46689,
                  18.89063
                ],
                [
                  98.46171,
                  18.89795
                ],
                [
                  98.46254,
                  18.90692
                ],
                [
                  98.47132,
                  18.90768
                ],
                [
                  98.47463,
                  18.90996
                ],
                [
                  98.47721,
                  18.91618
                ],
                [
                  98.4767,
                  18.92189
                ],
                [
                  98.47874,
                  18.91906
                ],
                [
                  98.48103,
                  18.91872
                ],
                [
                  98.48368,
                  18.91478
                ],
                [
                  98.48884,
                  18.9152
                ],
                [
                  98.49134,
                  18.91672
                ],
                [
                  98.50339,
                  18.91131
                ],
                [
                  98.50582,
                  18.9089
                ],
                [
                  98.50168,
                  18.90368
                ],
                [
                  98.49991,
                  18.89865
                ],
                [
                  98.4981,
                  18.89722
                ],
                [
                  98.49816,
                  18.89478
                ],
                [
                  98.49639,
                  18.89272
                ],
                [
                  98.49614,
                  18.88797
                ],
                [
                  98.49746,
                  18.88718
                ],
                [
                  98.49995,
                  18.88841
                ],
                [
                  98.50327,
                  18.88736
                ],
                [
                  98.50434,
                  18.88328
                ],
                [
                  98.50686,
                  18.88131
                ],
                [
                  98.51203,
                  18.88292
                ],
                [
                  98.52301,
                  18.87786
                ],
                [
                  98.5259,
                  18.8747
                ],
                [
                  98.52415,
                  18.86766
                ],
                [
                  98.51678,
                  18.86253
                ],
                [
                  98.51667,
                  18.86
                ],
                [
                  98.52414,
                  18.85654
                ],
                [
                  98.52874,
                  18.84892
                ],
                [
                  98.52856,
                  18.84459
                ],
                [
                  98.53038,
                  18.84155
                ],
                [
                  98.53055,
                  18.83758
                ],
                [
                  98.53324,
                  18.8346
                ],
                [
                  98.53712,
                  18.83406
                ],
                [
                  98.53972,
                  18.83246
                ],
                [
                  98.54079,
                  18.83041
                ],
                [
                  98.54058,
                  18.82662
                ],
                [
                  98.54569,
                  18.82113
                ],
                [
                  98.54601,
                  18.81559
                ],
                [
                  98.55122,
                  18.80878
                ],
                [
                  98.55944,
                  18.80287
                ],
                [
                  98.55808,
                  18.80088
                ],
                [
                  98.55468,
                  18.79949
                ],
                [
                  98.55312,
                  18.7969
                ],
                [
                  98.54455,
                  18.79514
                ],
                [
                  98.54024,
                  18.78941
                ],
                [
                  98.53114,
                  18.78835
                ],
                [
                  98.52862,
                  18.78625
                ],
                [
                  98.52674,
                  18.78013
                ],
                [
                  98.52472,
                  18.78078
                ],
                [
                  98.51799,
                  18.77707
                ],
                [
                  98.51525,
                  18.77724
                ],
                [
                  98.51253,
                  18.77593
                ],
                [
                  98.51152,
                  18.77351
                ],
                [
                  98.50785,
                  18.77555
                ],
                [
                  98.50308,
                  18.77358
                ],
                [
                  98.50195,
                  18.77566
                ],
                [
                  98.49989,
                  18.77621
                ],
                [
                  98.4968,
                  18.77214
                ],
                [
                  98.49608,
                  18.7687
                ],
                [
                  98.49706,
                  18.76736
                ],
                [
                  98.49701,
                  18.76361
                ],
                [
                  98.49523,
                  18.76192
                ],
                [
                  98.49706,
                  18.76014
                ],
                [
                  98.49715,
                  18.74886
                ],
                [
                  98.48966,
                  18.73891
                ],
                [
                  98.48877,
                  18.73368
                ],
                [
                  98.49386,
                  18.73251
                ],
                [
                  98.49338,
                  18.72846
                ],
                [
                  98.49503,
                  18.72496
                ],
                [
                  98.49483,
                  18.72244
                ],
                [
                  98.49715,
                  18.72121
                ],
                [
                  98.49702,
                  18.71847
                ],
                [
                  98.49187,
                  18.7166
                ],
                [
                  98.49339,
                  18.71477
                ],
                [
                  98.49665,
                  18.71427
                ],
                [
                  98.49751,
                  18.71162
                ],
                [
                  98.49822,
                  18.69811
                ],
                [
                  98.49972,
                  18.6923
                ],
                [
                  98.49738,
                  18.68919
                ],
                [
                  98.49895,
                  18.67942
                ],
                [
                  98.49574,
                  18.669
                ],
                [
                  98.49882,
                  18.65968
                ],
                [
                  98.49537,
                  18.65117
                ],
                [
                  98.49215,
                  18.64785
                ],
                [
                  98.49304,
                  18.64301
                ],
                [
                  98.49188,
                  18.64002
                ],
                [
                  98.49216,
                  18.63706
                ],
                [
                  98.48783,
                  18.62968
                ],
                [
                  98.4901,
                  18.61894
                ],
                [
                  98.48933,
                  18.61683
                ],
                [
                  98.49042,
                  18.6132
                ],
                [
                  98.48967,
                  18.6032
                ],
                [
                  98.48266,
                  18.60577
                ],
                [
                  98.47528,
                  18.60615
                ],
                [
                  98.46947,
                  18.60483
                ],
                [
                  98.4633,
                  18.60662
                ],
                [
                  98.45927,
                  18.60603
                ],
                [
                  98.45044,
                  18.60934
                ],
                [
                  98.44419,
                  18.60897
                ],
                [
                  98.44176,
                  18.60743
                ],
                [
                  98.43014,
                  18.60577
                ],
                [
                  98.41815,
                  18.60722
                ],
                [
                  98.41525,
                  18.60588
                ],
                [
                  98.40317,
                  18.60496
                ],
                [
                  98.39403,
                  18.60857
                ],
                [
                  98.38743,
                  18.61682
                ],
                [
                  98.3879,
                  18.61959
                ],
                [
                  98.38391,
                  18.61821
                ],
                [
                  98.38165,
                  18.61908
                ],
                [
                  98.38076,
                  18.61708
                ],
                [
                  98.37856,
                  18.61725
                ],
                [
                  98.3775,
                  18.61539
                ],
                [
                  98.3758,
                  18.61757
                ],
                [
                  98.37398,
                  18.61631
                ],
                [
                  98.37213,
                  18.61734
                ],
                [
                  98.3696,
                  18.61577
                ],
                [
                  98.36754,
                  18.61685
                ],
                [
                  98.36257,
                  18.61701
                ],
                [
                  98.36219,
                  18.61921
                ],
                [
                  98.35917,
                  18.62216
                ],
                [
                  98.36918,
                  18.62697
                ],
                [
                  98.36835,
                  18.63365
                ],
                [
                  98.37008,
                  18.63693
                ],
                [
                  98.36776,
                  18.63788
                ],
                [
                  98.36394,
                  18.63695
                ],
                [
                  98.36278,
                  18.6349
                ],
                [
                  98.36136,
                  18.63589
                ],
                [
                  98.3579,
                  18.65159
                ],
                [
                  98.35939,
                  18.6586
                ],
                [
                  98.35889,
                  18.6616
                ],
                [
                  98.3558,
                  18.66469
                ],
                [
                  98.35727,
                  18.66851
                ],
                [
                  98.35746,
                  18.6734
                ],
                [
                  98.35348,
                  18.68464
                ],
                [
                  98.35404,
                  18.69255
                ],
                [
                  98.35132,
                  18.69824
                ],
                [
                  98.35206,
                  18.70286
                ],
                [
                  98.34946,
                  18.70767
                ],
                [
                  98.34419,
                  18.7109
                ],
                [
                  98.34377,
                  18.71261
                ],
                [
                  98.34105,
                  18.7144
                ],
                [
                  98.33925,
                  18.71739
                ],
                [
                  98.33656,
                  18.71838
                ],
                [
                  98.33568,
                  18.72422
                ],
                [
                  98.33247,
                  18.72908
                ],
                [
                  98.33309,
                  18.73519
                ],
                [
                  98.33437,
                  18.7365
                ],
                [
                  98.33391,
                  18.74
                ],
                [
                  98.33132,
                  18.74442
                ],
                [
                  98.32682,
                  18.74669
                ],
                [
                  98.31864,
                  18.74821
                ],
                [
                  98.31546,
                  18.75021
                ],
                [
                  98.31234,
                  18.75632
                ],
                [
                  98.30949,
                  18.75873
                ],
                [
                  98.30892,
                  18.76421
                ],
                [
                  98.30444,
                  18.76844
                ],
                [
                  98.29926,
                  18.77975
                ],
                [
                  98.29308,
                  18.7851
                ],
                [
                  98.29123,
                  18.79275
                ],
                [
                  98.29016,
                  18.82103
                ],
                [
                  98.28843,
                  18.82782
                ],
                [
                  98.28547,
                  18.83244
                ],
                [
                  98.27907,
                  18.83503
                ],
                [
                  98.26904,
                  18.84411
                ],
                [
                  98.25858,
                  18.84136
                ],
                [
                  98.25254,
                  18.83782
                ],
                [
                  98.24699,
                  18.83837
                ],
                [
                  98.24709,
                  18.84272
                ],
                [
                  98.23901,
                  18.84466
                ],
                [
                  98.22928,
                  18.8514
                ],
                [
                  98.2219,
                  18.86017
                ],
                [
                  98.20654,
                  18.8692
                ],
                [
                  98.19301,
                  18.87094
                ],
                [
                  98.18658,
                  18.87459
                ],
                [
                  98.17757,
                  18.8732
                ],
                [
                  98.17003,
                  18.87788
                ],
                [
                  98.16323,
                  18.88028
                ],
                [
                  98.15229,
                  18.88109
                ],
                [
                  98.14291,
                  18.88375
                ],
                [
                  98.13376,
                  18.88396
                ],
                [
                  98.1232,
                  18.88714
                ],
                [
                  98.10874,
                  18.88641
                ],
                [
                  98.11126,
                  18.88934
                ],
                [
                  98.11241,
                  18.89403
                ],
                [
                  98.11702,
                  18.89566
                ],
                [
                  98.11948,
                  18.89814
                ],
                [
                  98.12178,
                  18.90308
                ],
                [
                  98.12381,
                  18.90486
                ],
                [
                  98.12438,
                  18.90788
                ],
                [
                  98.12726,
                  18.9092
                ],
                [
                  98.12921,
                  18.91172
                ],
                [
                  98.13359,
                  18.91251
                ],
                [
                  98.1371,
                  18.91169
                ],
                [
                  98.14013,
                  18.91306
                ],
                [
                  98.1437,
                  18.91174
                ],
                [
                  98.14979,
                  18.91894
                ],
                [
                  98.1548,
                  18.91873
                ],
                [
                  98.15691,
                  18.92028
                ],
                [
                  98.15861,
                  18.9239
                ],
                [
                  98.15871,
                  18.92911
                ],
                [
                  98.15651,
                  18.9352
                ],
                [
                  98.1567,
                  18.93744
                ],
                [
                  98.16615,
                  18.93954
                ],
                [
                  98.17261,
                  18.95135
                ],
                [
                  98.17308,
                  18.96196
                ],
                [
                  98.16538,
                  18.97545
                ],
                [
                  98.16549,
                  18.97802
                ],
                [
                  98.16352,
                  18.98062
                ],
                [
                  98.1638,
                  18.98181
                ],
                [
                  98.16606,
                  18.98357
                ],
                [
                  98.16905,
                  18.98329
                ],
                [
                  98.17135,
                  18.98435
                ],
                [
                  98.17357,
                  18.98862
                ],
                [
                  98.18472,
                  18.97634
                ],
                [
                  98.19428,
                  18.96184
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ม่อนอังเกตุ",
          "latitude": 19.106,
          "longitude": 98.6566,
          "sum_rainfall_mm": 110.20000000000002,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.6967,
                  19.27506
                ],
                [
                  98.70588,
                  19.27361
                ],
                [
                  98.70618,
                  19.27172
                ],
                [
                  98.70418,
                  19.26878
                ],
                [
                  98.70541,
                  19.26745
                ],
                [
                  98.71979,
                  19.26496
                ],
                [
                  98.72286,
                  19.26281
                ],
                [
                  98.72723,
                  19.25786
                ],
                [
                  98.72718,
                  19.25149
                ],
                [
                  98.73239,
                  19.24514
                ],
                [
                  98.7354,
                  19.23452
                ],
                [
                  98.74615,
                  19.22595
                ],
                [
                  98.74669,
                  19.22468
                ],
                [
                  98.74329,
                  19.22242
                ],
                [
                  98.74327,
                  19.21754
                ],
                [
                  98.74697,
                  19.20768
                ],
                [
                  98.74878,
                  19.19697
                ],
                [
                  98.74672,
                  19.19198
                ],
                [
                  98.74221,
                  19.18769
                ],
                [
                  98.74234,
                  19.18512
                ],
                [
                  98.75429,
                  19.17561
                ],
                [
                  98.76098,
                  19.17509
                ],
                [
                  98.76467,
                  19.17113
                ],
                [
                  98.7686,
                  19.17114
                ],
                [
                  98.77203,
                  19.17314
                ],
                [
                  98.77389,
                  19.16692
                ],
                [
                  98.77335,
                  19.16528
                ],
                [
                  98.7701,
                  19.16338
                ],
                [
                  98.76556,
                  19.15815
                ],
                [
                  98.76339,
                  19.1507
                ],
                [
                  98.76767,
                  19.14585
                ],
                [
                  98.76256,
                  19.14011
                ],
                [
                  98.75924,
                  19.12812
                ],
                [
                  98.75603,
                  19.1231
                ],
                [
                  98.7571,
                  19.10996
                ],
                [
                  98.74916,
                  19.10063
                ],
                [
                  98.75077,
                  19.09512
                ],
                [
                  98.75118,
                  19.07724
                ],
                [
                  98.75398,
                  19.07165
                ],
                [
                  98.75013,
                  19.07129
                ],
                [
                  98.74943,
                  19.07278
                ],
                [
                  98.73961,
                  19.07252
                ],
                [
                  98.73782,
                  19.07395
                ],
                [
                  98.73605,
                  19.07128
                ],
                [
                  98.73239,
                  19.07188
                ],
                [
                  98.72919,
                  19.06991
                ],
                [
                  98.72668,
                  19.06996
                ],
                [
                  98.72408,
                  19.06449
                ],
                [
                  98.72478,
                  19.06298
                ],
                [
                  98.7265,
                  19.06381
                ],
                [
                  98.72722,
                  19.06291
                ],
                [
                  98.72506,
                  19.0582
                ],
                [
                  98.72575,
                  19.05632
                ],
                [
                  98.72342,
                  19.05681
                ],
                [
                  98.72041,
                  19.05551
                ],
                [
                  98.71824,
                  19.05691
                ],
                [
                  98.71619,
                  19.05404
                ],
                [
                  98.7126,
                  19.05344
                ],
                [
                  98.71104,
                  19.05401
                ],
                [
                  98.71136,
                  19.05711
                ],
                [
                  98.70842,
                  19.05718
                ],
                [
                  98.70266,
                  19.06226
                ],
                [
                  98.69347,
                  19.06741
                ],
                [
                  98.6906,
                  19.06683
                ],
                [
                  98.68746,
                  19.07073
                ],
                [
                  98.68048,
                  19.07189
                ],
                [
                  98.67726,
                  19.07382
                ],
                [
                  98.67009,
                  19.07355
                ],
                [
                  98.66567,
                  19.0751
                ],
                [
                  98.66106,
                  19.07225
                ],
                [
                  98.65647,
                  19.07319
                ],
                [
                  98.6529,
                  19.07159
                ],
                [
                  98.65006,
                  19.07253
                ],
                [
                  98.64496,
                  19.06947
                ],
                [
                  98.64033,
                  19.06904
                ],
                [
                  98.6406,
                  19.07496
                ],
                [
                  98.64563,
                  19.07586
                ],
                [
                  98.64859,
                  19.08067
                ],
                [
                  98.64919,
                  19.08834
                ],
                [
                  98.65169,
                  19.09437
                ],
                [
                  98.64911,
                  19.09963
                ],
                [
                  98.64349,
                  19.10547
                ],
                [
                  98.6436,
                  19.11066
                ],
                [
                  98.6412,
                  19.11336
                ],
                [
                  98.64232,
                  19.11583
                ],
                [
                  98.64059,
                  19.1185
                ],
                [
                  98.64145,
                  19.12799
                ],
                [
                  98.6396,
                  19.1298
                ],
                [
                  98.63898,
                  19.13533
                ],
                [
                  98.63483,
                  19.13811
                ],
                [
                  98.63222,
                  19.14229
                ],
                [
                  98.63336,
                  19.14863
                ],
                [
                  98.63219,
                  19.15241
                ],
                [
                  98.63348,
                  19.15567
                ],
                [
                  98.63157,
                  19.15675
                ],
                [
                  98.62867,
                  19.15626
                ],
                [
                  98.62181,
                  19.15783
                ],
                [
                  98.6213,
                  19.15988
                ],
                [
                  98.61926,
                  19.16092
                ],
                [
                  98.62075,
                  19.1687
                ],
                [
                  98.61628,
                  19.16854
                ],
                [
                  98.60776,
                  19.17252
                ],
                [
                  98.60696,
                  19.1743
                ],
                [
                  98.60844,
                  19.17799
                ],
                [
                  98.60516,
                  19.18074
                ],
                [
                  98.59399,
                  19.1856
                ],
                [
                  98.58636,
                  19.18634
                ],
                [
                  98.5824,
                  19.18862
                ],
                [
                  98.57787,
                  19.19671
                ],
                [
                  98.57682,
                  19.20173
                ],
                [
                  98.5694,
                  19.20582
                ],
                [
                  98.56822,
                  19.20948
                ],
                [
                  98.56901,
                  19.21668
                ],
                [
                  98.57333,
                  19.2175
                ],
                [
                  98.57761,
                  19.21491
                ],
                [
                  98.57953,
                  19.21657
                ],
                [
                  98.58209,
                  19.21672
                ],
                [
                  98.58924,
                  19.22084
                ],
                [
                  98.5959,
                  19.2278
                ],
                [
                  98.59829,
                  19.22901
                ],
                [
                  98.59866,
                  19.23222
                ],
                [
                  98.59676,
                  19.23457
                ],
                [
                  98.59699,
                  19.23774
                ],
                [
                  98.59221,
                  19.24228
                ],
                [
                  98.59165,
                  19.24749
                ],
                [
                  98.58732,
                  19.25524
                ],
                [
                  98.58955,
                  19.25801
                ],
                [
                  98.58894,
                  19.26157
                ],
                [
                  98.59112,
                  19.26665
                ],
                [
                  98.59342,
                  19.26927
                ],
                [
                  98.59687,
                  19.27098
                ],
                [
                  98.59866,
                  19.2765
                ],
                [
                  98.60387,
                  19.27777
                ],
                [
                  98.60769,
                  19.27423
                ],
                [
                  98.60967,
                  19.27787
                ],
                [
                  98.6115,
                  19.27895
                ],
                [
                  98.63078,
                  19.27771
                ],
                [
                  98.63625,
                  19.27934
                ],
                [
                  98.63798,
                  19.28256
                ],
                [
                  98.64598,
                  19.28075
                ],
                [
                  98.65673,
                  19.28465
                ],
                [
                  98.67004,
                  19.28482
                ],
                [
                  98.67645,
                  19.28199
                ],
                [
                  98.68132,
                  19.28402
                ],
                [
                  98.6929,
                  19.28061
                ],
                [
                  98.6967,
                  19.27506
                ]
              ]
            ]
          }
        }
      ],
      "area_nearby": [
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เตี๊ยะ",
          "latitude": 18.31208,
          "longitude": 98.48189,
          "sum_rainfall_mm": 126.80000000000001,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.49645,
                  18.34775
                ],
                [
                  98.50725,
                  18.33876
                ],
                [
                  98.52237,
                  18.33699
                ],
                [
                  98.53062,
                  18.33867
                ],
                [
                  98.53236,
                  18.32901
                ],
                [
                  98.52924,
                  18.31968
                ],
                [
                  98.53262,
                  18.31131
                ],
                [
                  98.53646,
                  18.30694
                ],
                [
                  98.5387,
                  18.30766
                ],
                [
                  98.53789,
                  18.30504
                ],
                [
                  98.53959,
                  18.3043
                ],
                [
                  98.54251,
                  18.29774
                ],
                [
                  98.54495,
                  18.2971
                ],
                [
                  98.54595,
                  18.29219
                ],
                [
                  98.54808,
                  18.2912
                ],
                [
                  98.55279,
                  18.29236
                ],
                [
                  98.55247,
                  18.28918
                ],
                [
                  98.55587,
                  18.28938
                ],
                [
                  98.55652,
                  18.28579
                ],
                [
                  98.56976,
                  18.28751
                ],
                [
                  98.57434,
                  18.29049
                ],
                [
                  98.57844,
                  18.29045
                ],
                [
                  98.58361,
                  18.28861
                ],
                [
                  98.59046,
                  18.29046
                ],
                [
                  98.59732,
                  18.28876
                ],
                [
                  98.60107,
                  18.28613
                ],
                [
                  98.60482,
                  18.28639
                ],
                [
                  98.60924,
                  18.28394
                ],
                [
                  98.61382,
                  18.28494
                ],
                [
                  98.61656,
                  18.28757
                ],
                [
                  98.61957,
                  18.28805
                ],
                [
                  98.62382,
                  18.29144
                ],
                [
                  98.62878,
                  18.27738
                ],
                [
                  98.62984,
                  18.27073
                ],
                [
                  98.63416,
                  18.26785
                ],
                [
                  98.64048,
                  18.26582
                ],
                [
                  98.64216,
                  18.26358
                ],
                [
                  98.64538,
                  18.26681
                ],
                [
                  98.6485,
                  18.2665
                ],
                [
                  98.65383,
                  18.26937
                ],
                [
                  98.65685,
                  18.26935
                ],
                [
                  98.669,
                  18.26306
                ],
                [
                  98.67546,
                  18.26182
                ],
                [
                  98.67889,
                  18.25855
                ],
                [
                  98.68558,
                  18.25547
                ],
                [
                  98.69265,
                  18.25428
                ],
                [
                  98.69667,
                  18.25576
                ],
                [
                  98.70106,
                  18.25344
                ],
                [
                  98.70229,
                  18.25143
                ],
                [
                  98.70065,
                  18.25132
                ],
                [
                  98.7013,
                  18.24629
                ],
                [
                  98.6987,
                  18.23656
                ],
                [
                  98.69443,
                  18.22802
                ],
                [
                  98.68898,
                  18.21176
                ],
                [
                  98.68859,
                  18.20264
                ],
                [
                  98.69212,
                  18.18855
                ],
                [
                  98.68227,
                  18.18453
                ],
                [
                  98.68766,
                  18.18267
                ],
                [
                  98.69213,
                  18.1838
                ],
                [
                  98.69405,
                  18.17775
                ],
                [
                  98.69865,
                  18.17256
                ],
                [
                  98.70425,
                  18.16841
                ],
                [
                  98.70577,
                  18.16572
                ],
                [
                  98.71011,
                  18.16286
                ],
                [
                  98.71045,
                  18.15927
                ],
                [
                  98.71282,
                  18.15697
                ],
                [
                  98.71873,
                  18.15626
                ],
                [
                  98.72218,
                  18.15819
                ],
                [
                  98.72703,
                  18.15899
                ],
                [
                  98.72855,
                  18.15649
                ],
                [
                  98.73763,
                  18.15546
                ],
                [
                  98.72574,
                  18.14957
                ],
                [
                  98.7202,
                  18.15018
                ],
                [
                  98.71729,
                  18.15185
                ],
                [
                  98.71368,
                  18.15193
                ],
                [
                  98.70849,
                  18.1557
                ],
                [
                  98.70572,
                  18.15583
                ],
                [
                  98.69242,
                  18.16396
                ],
                [
                  98.68695,
                  18.16462
                ],
                [
                  98.67968,
                  18.16266
                ],
                [
                  98.67241,
                  18.1627
                ],
                [
                  98.66484,
                  18.16807
                ],
                [
                  98.66334,
                  18.17113
                ],
                [
                  98.65727,
                  18.17633
                ],
                [
                  98.64651,
                  18.18142
                ],
                [
                  98.64019,
                  18.1815
                ],
                [
                  98.63462,
                  18.18317
                ],
                [
                  98.63318,
                  18.18802
                ],
                [
                  98.62854,
                  18.19033
                ],
                [
                  98.62955,
                  18.1953
                ],
                [
                  98.62831,
                  18.19721
                ],
                [
                  98.62079,
                  18.19798
                ],
                [
                  98.61288,
                  18.2036
                ],
                [
                  98.6115,
                  18.20305
                ],
                [
                  98.60984,
                  18.19876
                ],
                [
                  98.60737,
                  18.19826
                ],
                [
                  98.60629,
                  18.19961
                ],
                [
                  98.60621,
                  18.20371
                ],
                [
                  98.60467,
                  18.20556
                ],
                [
                  98.59868,
                  18.20762
                ],
                [
                  98.59529,
                  18.21002
                ],
                [
                  98.59054,
                  18.20797
                ],
                [
                  98.58963,
                  18.2134
                ],
                [
                  98.5828,
                  18.21569
                ],
                [
                  98.57157,
                  18.22498
                ],
                [
                  98.56842,
                  18.2254
                ],
                [
                  98.56658,
                  18.22834
                ],
                [
                  98.56099,
                  18.22912
                ],
                [
                  98.55511,
                  18.2331
                ],
                [
                  98.53202,
                  18.23593
                ],
                [
                  98.52117,
                  18.23129
                ],
                [
                  98.50977,
                  18.23032
                ],
                [
                  98.50301,
                  18.22731
                ],
                [
                  98.49692,
                  18.2267
                ],
                [
                  98.49699,
                  18.22552
                ],
                [
                  98.49294,
                  18.22702
                ],
                [
                  98.48225,
                  18.22427
                ],
                [
                  98.47804,
                  18.22174
                ],
                [
                  98.47108,
                  18.22361
                ],
                [
                  98.4621,
                  18.22257
                ],
                [
                  98.45378,
                  18.22894
                ],
                [
                  98.45073,
                  18.22883
                ],
                [
                  98.44796,
                  18.22664
                ],
                [
                  98.44618,
                  18.22674
                ],
                [
                  98.4425,
                  18.23214
                ],
                [
                  98.43698,
                  18.23239
                ],
                [
                  98.4303,
                  18.23985
                ],
                [
                  98.42555,
                  18.24085
                ],
                [
                  98.42423,
                  18.24515
                ],
                [
                  98.42032,
                  18.24677
                ],
                [
                  98.42618,
                  18.25861
                ],
                [
                  98.43024,
                  18.26115
                ],
                [
                  98.43518,
                  18.26076
                ],
                [
                  98.45641,
                  18.26628
                ],
                [
                  98.46026,
                  18.26866
                ],
                [
                  98.46347,
                  18.277
                ],
                [
                  98.46481,
                  18.28633
                ],
                [
                  98.46183,
                  18.28879
                ],
                [
                  98.46109,
                  18.29288
                ],
                [
                  98.4638,
                  18.30099
                ],
                [
                  98.4632,
                  18.30808
                ],
                [
                  98.45688,
                  18.31018
                ],
                [
                  98.45498,
                  18.31283
                ],
                [
                  98.45469,
                  18.32092
                ],
                [
                  98.45231,
                  18.32424
                ],
                [
                  98.45534,
                  18.32674
                ],
                [
                  98.45553,
                  18.32972
                ],
                [
                  98.45914,
                  18.3347
                ],
                [
                  98.46096,
                  18.3396
                ],
                [
                  98.46345,
                  18.33954
                ],
                [
                  98.46731,
                  18.34979
                ],
                [
                  98.46909,
                  18.35189
                ],
                [
                  98.46818,
                  18.35545
                ],
                [
                  98.46605,
                  18.35753
                ],
                [
                  98.46643,
                  18.365
                ],
                [
                  98.46749,
                  18.36575
                ],
                [
                  98.47133,
                  18.365
                ],
                [
                  98.47204,
                  18.36361
                ],
                [
                  98.47323,
                  18.36437
                ],
                [
                  98.47372,
                  18.36265
                ],
                [
                  98.49645,
                  18.34775
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่กลาง",
          "latitude": 18.533205,
          "longitude": 98.52239,
          "sum_rainfall_mm": 286.4,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.63557,
                  18.58267
                ],
                [
                  98.64044,
                  18.58225
                ],
                [
                  98.64482,
                  18.58044
                ],
                [
                  98.65029,
                  18.57465
                ],
                [
                  98.65487,
                  18.57357
                ],
                [
                  98.65844,
                  18.571
                ],
                [
                  98.65965,
                  18.5668
                ],
                [
                  98.66691,
                  18.56663
                ],
                [
                  98.66669,
                  18.56447
                ],
                [
                  98.66871,
                  18.56317
                ],
                [
                  98.66777,
                  18.55863
                ],
                [
                  98.67159,
                  18.55885
                ],
                [
                  98.67251,
                  18.55802
                ],
                [
                  98.67483,
                  18.54963
                ],
                [
                  98.68993,
                  18.53488
                ],
                [
                  98.6872,
                  18.52639
                ],
                [
                  98.68353,
                  18.52612
                ],
                [
                  98.68296,
                  18.52479
                ],
                [
                  98.69115,
                  18.51746
                ],
                [
                  98.69293,
                  18.51112
                ],
                [
                  98.71008,
                  18.50646
                ],
                [
                  98.72628,
                  18.4989
                ],
                [
                  98.71572,
                  18.49166
                ],
                [
                  98.70772,
                  18.48092
                ],
                [
                  98.70525,
                  18.48091
                ],
                [
                  98.69952,
                  18.47836
                ],
                [
                  98.69348,
                  18.47387
                ],
                [
                  98.68202,
                  18.47454
                ],
                [
                  98.66654,
                  18.47145
                ],
                [
                  98.65941,
                  18.46795
                ],
                [
                  98.65821,
                  18.4656
                ],
                [
                  98.65879,
                  18.46439
                ],
                [
                  98.65629,
                  18.45998
                ],
                [
                  98.66005,
                  18.45596
                ],
                [
                  98.65688,
                  18.4503
                ],
                [
                  98.65749,
                  18.44714
                ],
                [
                  98.65671,
                  18.44557
                ],
                [
                  98.65998,
                  18.44471
                ],
                [
                  98.65926,
                  18.4403
                ],
                [
                  98.6626,
                  18.43967
                ],
                [
                  98.66457,
                  18.43699
                ],
                [
                  98.66686,
                  18.43591
                ],
                [
                  98.66821,
                  18.43325
                ],
                [
                  98.6698,
                  18.43303
                ],
                [
                  98.66888,
                  18.4313
                ],
                [
                  98.67039,
                  18.42855
                ],
                [
                  98.66915,
                  18.42641
                ],
                [
                  98.67057,
                  18.42422
                ],
                [
                  98.67881,
                  18.42127
                ],
                [
                  98.68366,
                  18.42169
                ],
                [
                  98.69206,
                  18.41967
                ],
                [
                  98.69337,
                  18.41901
                ],
                [
                  98.69296,
                  18.4152
                ],
                [
                  98.69673,
                  18.41123
                ],
                [
                  98.69178,
                  18.40903
                ],
                [
                  98.68449,
                  18.40764
                ],
                [
                  98.68138,
                  18.41536
                ],
                [
                  98.67712,
                  18.41571
                ],
                [
                  98.6727,
                  18.41785
                ],
                [
                  98.66953,
                  18.4176
                ],
                [
                  98.66939,
                  18.41895
                ],
                [
                  98.66547,
                  18.41937
                ],
                [
                  98.66491,
                  18.42058
                ],
                [
                  98.65095,
                  18.42561
                ],
                [
                  98.6451,
                  18.4267
                ],
                [
                  98.63444,
                  18.42628
                ],
                [
                  98.62705,
                  18.42801
                ],
                [
                  98.61891,
                  18.42543
                ],
                [
                  98.61296,
                  18.42641
                ],
                [
                  98.6007,
                  18.42002
                ],
                [
                  98.5676,
                  18.42055
                ],
                [
                  98.53945,
                  18.41132
                ],
                [
                  98.53592,
                  18.4121
                ],
                [
                  98.52557,
                  18.41048
                ],
                [
                  98.52198,
                  18.41216
                ],
                [
                  98.51852,
                  18.41235
                ],
                [
                  98.51459,
                  18.40747
                ],
                [
                  98.50967,
                  18.40672
                ],
                [
                  98.50711,
                  18.40288
                ],
                [
                  98.50064,
                  18.40506
                ],
                [
                  98.49985,
                  18.40813
                ],
                [
                  98.50299,
                  18.41039
                ],
                [
                  98.50259,
                  18.41673
                ],
                [
                  98.49836,
                  18.41705
                ],
                [
                  98.49691,
                  18.41921
                ],
                [
                  98.49697,
                  18.41756
                ],
                [
                  98.49427,
                  18.41897
                ],
                [
                  98.49272,
                  18.41761
                ],
                [
                  98.49244,
                  18.4197
                ],
                [
                  98.48718,
                  18.42321
                ],
                [
                  98.4833,
                  18.43029
                ],
                [
                  98.48171,
                  18.44096
                ],
                [
                  98.48332,
                  18.44457
                ],
                [
                  98.47455,
                  18.44933
                ],
                [
                  98.47555,
                  18.46404
                ],
                [
                  98.47861,
                  18.46826
                ],
                [
                  98.48133,
                  18.46899
                ],
                [
                  98.48997,
                  18.47707
                ],
                [
                  98.4927,
                  18.47698
                ],
                [
                  98.49531,
                  18.47834
                ],
                [
                  98.49744,
                  18.48058
                ],
                [
                  98.49747,
                  18.48448
                ],
                [
                  98.49882,
                  18.48671
                ],
                [
                  98.50091,
                  18.48747
                ],
                [
                  98.5064,
                  18.48653
                ],
                [
                  98.51013,
                  18.49165
                ],
                [
                  98.50864,
                  18.49671
                ],
                [
                  98.50344,
                  18.50099
                ],
                [
                  98.50463,
                  18.50333
                ],
                [
                  98.50736,
                  18.50479
                ],
                [
                  98.50744,
                  18.50603
                ],
                [
                  98.50324,
                  18.50593
                ],
                [
                  98.50256,
                  18.50682
                ],
                [
                  98.5061,
                  18.51096
                ],
                [
                  98.50745,
                  18.51657
                ],
                [
                  98.50728,
                  18.51902
                ],
                [
                  98.50506,
                  18.52233
                ],
                [
                  98.50539,
                  18.52489
                ],
                [
                  98.50402,
                  18.52593
                ],
                [
                  98.49772,
                  18.52512
                ],
                [
                  98.49678,
                  18.52954
                ],
                [
                  98.49498,
                  18.53115
                ],
                [
                  98.49315,
                  18.53699
                ],
                [
                  98.49116,
                  18.53799
                ],
                [
                  98.48651,
                  18.54503
                ],
                [
                  98.48451,
                  18.54605
                ],
                [
                  98.48262,
                  18.55007
                ],
                [
                  98.48164,
                  18.55988
                ],
                [
                  98.48307,
                  18.57117
                ],
                [
                  98.48122,
                  18.57806
                ],
                [
                  98.47911,
                  18.58138
                ],
                [
                  98.47936,
                  18.58454
                ],
                [
                  98.48703,
                  18.58757
                ],
                [
                  98.48757,
                  18.59223
                ],
                [
                  98.49825,
                  18.59076
                ],
                [
                  98.50811,
                  18.59483
                ],
                [
                  98.51416,
                  18.59324
                ],
                [
                  98.52061,
                  18.59322
                ],
                [
                  98.53091,
                  18.58862
                ],
                [
                  98.53633,
                  18.58931
                ],
                [
                  98.54489,
                  18.58455
                ],
                [
                  98.55123,
                  18.58496
                ],
                [
                  98.55743,
                  18.58317
                ],
                [
                  98.56018,
                  18.58411
                ],
                [
                  98.56381,
                  18.58237
                ],
                [
                  98.57238,
                  18.58098
                ],
                [
                  98.5951,
                  18.58228
                ],
                [
                  98.60126,
                  18.58444
                ],
                [
                  98.60923,
                  18.59402
                ],
                [
                  98.61568,
                  18.59595
                ],
                [
                  98.62321,
                  18.60037
                ],
                [
                  98.62604,
                  18.59198
                ],
                [
                  98.63241,
                  18.58786
                ],
                [
                  98.63557,
                  18.58267
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยสามหมื่น",
          "latitude": 19.413826,
          "longitude": 98.593124,
          "sum_rainfall_mm": 97.2,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.7887,
                  19.46616
                ],
                [
                  98.79848,
                  19.45295
                ],
                [
                  98.79856,
                  19.44999
                ],
                [
                  98.79535,
                  19.44226
                ],
                [
                  98.79525,
                  19.43716
                ],
                [
                  98.79652,
                  19.43439
                ],
                [
                  98.80249,
                  19.42927
                ],
                [
                  98.80371,
                  19.42401
                ],
                [
                  98.80216,
                  19.41599
                ],
                [
                  98.8022,
                  19.40941
                ],
                [
                  98.81082,
                  19.40138
                ],
                [
                  98.81313,
                  19.38907
                ],
                [
                  98.81238,
                  19.35867
                ],
                [
                  98.80378,
                  19.35251
                ],
                [
                  98.80063,
                  19.33266
                ],
                [
                  98.80067,
                  19.31284
                ],
                [
                  98.79671,
                  19.30929
                ],
                [
                  98.7896,
                  19.30593
                ],
                [
                  98.78584,
                  19.30469
                ],
                [
                  98.78133,
                  19.30583
                ],
                [
                  98.7781,
                  19.30907
                ],
                [
                  98.77642,
                  19.31292
                ],
                [
                  98.77249,
                  19.31486
                ],
                [
                  98.76988,
                  19.31479
                ],
                [
                  98.7696,
                  19.31633
                ],
                [
                  98.76811,
                  19.31647
                ],
                [
                  98.76773,
                  19.31758
                ],
                [
                  98.76612,
                  19.31728
                ],
                [
                  98.76589,
                  19.31861
                ],
                [
                  98.76218,
                  19.32123
                ],
                [
                  98.75872,
                  19.32096
                ],
                [
                  98.75674,
                  19.32271
                ],
                [
                  98.75076,
                  19.32183
                ],
                [
                  98.74757,
                  19.32543
                ],
                [
                  98.74561,
                  19.32541
                ],
                [
                  98.74243,
                  19.3244
                ],
                [
                  98.7402,
                  19.32139
                ],
                [
                  98.73822,
                  19.32124
                ],
                [
                  98.7374,
                  19.31986
                ],
                [
                  98.73338,
                  19.31881
                ],
                [
                  98.73077,
                  19.31503
                ],
                [
                  98.72939,
                  19.31511
                ],
                [
                  98.72942,
                  19.31637
                ],
                [
                  98.72673,
                  19.31541
                ],
                [
                  98.72508,
                  19.31598
                ],
                [
                  98.72341,
                  19.31275
                ],
                [
                  98.71806,
                  19.31
                ],
                [
                  98.71417,
                  19.31131
                ],
                [
                  98.7103,
                  19.30524
                ],
                [
                  98.70825,
                  19.30469
                ],
                [
                  98.70832,
                  19.30215
                ],
                [
                  98.70504,
                  19.29836
                ],
                [
                  98.70313,
                  19.30101
                ],
                [
                  98.70483,
                  19.30683
                ],
                [
                  98.70386,
                  19.30719
                ],
                [
                  98.70094,
                  19.30496
                ],
                [
                  98.70032,
                  19.30833
                ],
                [
                  98.70259,
                  19.31112
                ],
                [
                  98.70439,
                  19.31074
                ],
                [
                  98.70266,
                  19.31916
                ],
                [
                  98.7034,
                  19.32319
                ],
                [
                  98.70027,
                  19.32662
                ],
                [
                  98.69494,
                  19.32894
                ],
                [
                  98.69509,
                  19.33542
                ],
                [
                  98.69248,
                  19.33446
                ],
                [
                  98.68551,
                  19.33775
                ],
                [
                  98.68198,
                  19.33354
                ],
                [
                  98.67223,
                  19.33641
                ],
                [
                  98.66489,
                  19.3349
                ],
                [
                  98.65939,
                  19.33549
                ],
                [
                  98.65485,
                  19.34212
                ],
                [
                  98.6402,
                  19.35022
                ],
                [
                  98.63375,
                  19.34936
                ],
                [
                  98.63033,
                  19.35058
                ],
                [
                  98.62389,
                  19.34394
                ],
                [
                  98.61585,
                  19.3463
                ],
                [
                  98.6128,
                  19.34617
                ],
                [
                  98.605,
                  19.35113
                ],
                [
                  98.5948,
                  19.35342
                ],
                [
                  98.59419,
                  19.35754
                ],
                [
                  98.59119,
                  19.35895
                ],
                [
                  98.58556,
                  19.36433
                ],
                [
                  98.5814,
                  19.36556
                ],
                [
                  98.57827,
                  19.37166
                ],
                [
                  98.57758,
                  19.37681
                ],
                [
                  98.57537,
                  19.37951
                ],
                [
                  98.57602,
                  19.38247
                ],
                [
                  98.57333,
                  19.38632
                ],
                [
                  98.57376,
                  19.39096
                ],
                [
                  98.57561,
                  19.39486
                ],
                [
                  98.57938,
                  19.39926
                ],
                [
                  98.58605,
                  19.39753
                ],
                [
                  98.58794,
                  19.3981
                ],
                [
                  98.59168,
                  19.40192
                ],
                [
                  98.59393,
                  19.40267
                ],
                [
                  98.59603,
                  19.40671
                ],
                [
                  98.59214,
                  19.40852
                ],
                [
                  98.5911,
                  19.41146
                ],
                [
                  98.58615,
                  19.41529
                ],
                [
                  98.58659,
                  19.4204
                ],
                [
                  98.58938,
                  19.42225
                ],
                [
                  98.58982,
                  19.42412
                ],
                [
                  98.62286,
                  19.43435
                ],
                [
                  98.63061,
                  19.43863
                ],
                [
                  98.64012,
                  19.43982
                ],
                [
                  98.64993,
                  19.43743
                ],
                [
                  98.65806,
                  19.42889
                ],
                [
                  98.68189,
                  19.43271
                ],
                [
                  98.69404,
                  19.43252
                ],
                [
                  98.70717,
                  19.43065
                ],
                [
                  98.71159,
                  19.43402
                ],
                [
                  98.71492,
                  19.44172
                ],
                [
                  98.72073,
                  19.44164
                ],
                [
                  98.73602,
                  19.44565
                ],
                [
                  98.74698,
                  19.44935
                ],
                [
                  98.74688,
                  19.45072
                ],
                [
                  98.75285,
                  19.45337
                ],
                [
                  98.75898,
                  19.4529
                ],
                [
                  98.7655,
                  19.45895
                ],
                [
                  98.78283,
                  19.46115
                ],
                [
                  98.7887,
                  19.46616
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500302",
          "tambon": "ต.ท่าผา",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่อวม",
          "latitude": 18.507107,
          "longitude": 98.5005,
          "sum_rainfall_mm": 220.0,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.49678,
                  18.52954
                ],
                [
                  98.49772,
                  18.52512
                ],
                [
                  98.50402,
                  18.52593
                ],
                [
                  98.50539,
                  18.52489
                ],
                [
                  98.50506,
                  18.52233
                ],
                [
                  98.50728,
                  18.51902
                ],
                [
                  98.50745,
                  18.51657
                ],
                [
                  98.5061,
                  18.51096
                ],
                [
                  98.50256,
                  18.50682
                ],
                [
                  98.50324,
                  18.50593
                ],
                [
                  98.50608,
                  18.50666
                ],
                [
                  98.50757,
                  18.50578
                ],
                [
                  98.50344,
                  18.50099
                ],
                [
                  98.50864,
                  18.49671
                ],
                [
                  98.51011,
                  18.49138
                ],
                [
                  98.50614,
                  18.48642
                ],
                [
                  98.50091,
                  18.48747
                ],
                [
                  98.49882,
                  18.48671
                ],
                [
                  98.49747,
                  18.48448
                ],
                [
                  98.49744,
                  18.48058
                ],
                [
                  98.49578,
                  18.4788
                ],
                [
                  98.49306,
                  18.47707
                ],
                [
                  98.48997,
                  18.47707
                ],
                [
                  98.48152,
                  18.46917
                ],
                [
                  98.47659,
                  18.4768
                ],
                [
                  98.46868,
                  18.4792
                ],
                [
                  98.46501,
                  18.47535
                ],
                [
                  98.45957,
                  18.46602
                ],
                [
                  98.45347,
                  18.46301
                ],
                [
                  98.45118,
                  18.4642
                ],
                [
                  98.44601,
                  18.46183
                ],
                [
                  98.44469,
                  18.46044
                ],
                [
                  98.44419,
                  18.45689
                ],
                [
                  98.43863,
                  18.45326
                ],
                [
                  98.43619,
                  18.45397
                ],
                [
                  98.43574,
                  18.45845
                ],
                [
                  98.43341,
                  18.45929
                ],
                [
                  98.43005,
                  18.45835
                ],
                [
                  98.42751,
                  18.45599
                ],
                [
                  98.4217,
                  18.45894
                ],
                [
                  98.41967,
                  18.45737
                ],
                [
                  98.41871,
                  18.45396
                ],
                [
                  98.41568,
                  18.45576
                ],
                [
                  98.41086,
                  18.45421
                ],
                [
                  98.40765,
                  18.45493
                ],
                [
                  98.40401,
                  18.454
                ],
                [
                  98.3968,
                  18.45755
                ],
                [
                  98.39381,
                  18.45788
                ],
                [
                  98.38432,
                  18.45145
                ],
                [
                  98.38165,
                  18.45259
                ],
                [
                  98.37767,
                  18.45119
                ],
                [
                  98.37623,
                  18.44557
                ],
                [
                  98.38,
                  18.44067
                ],
                [
                  98.37517,
                  18.43639
                ],
                [
                  98.37214,
                  18.43911
                ],
                [
                  98.37074,
                  18.43208
                ],
                [
                  98.36887,
                  18.43217
                ],
                [
                  98.36836,
                  18.42945
                ],
                [
                  98.36618,
                  18.42908
                ],
                [
                  98.35936,
                  18.42322
                ],
                [
                  98.35712,
                  18.42309
                ],
                [
                  98.35316,
                  18.42534
                ],
                [
                  98.34818,
                  18.42628
                ],
                [
                  98.33565,
                  18.41992
                ],
                [
                  98.33134,
                  18.42059
                ],
                [
                  98.32686,
                  18.42346
                ],
                [
                  98.3306,
                  18.42911
                ],
                [
                  98.33075,
                  18.43311
                ],
                [
                  98.33265,
                  18.43732
                ],
                [
                  98.33098,
                  18.4469
                ],
                [
                  98.32421,
                  18.45475
                ],
                [
                  98.32586,
                  18.46327
                ],
                [
                  98.32364,
                  18.46774
                ],
                [
                  98.32291,
                  18.47447
                ],
                [
                  98.32495,
                  18.47949
                ],
                [
                  98.3286,
                  18.48219
                ],
                [
                  98.33063,
                  18.48156
                ],
                [
                  98.33523,
                  18.48546
                ],
                [
                  98.34295,
                  18.48095
                ],
                [
                  98.34588,
                  18.48497
                ],
                [
                  98.35121,
                  18.48835
                ],
                [
                  98.36351,
                  18.4868
                ],
                [
                  98.36636,
                  18.48775
                ],
                [
                  98.37089,
                  18.48492
                ],
                [
                  98.37343,
                  18.48912
                ],
                [
                  98.37609,
                  18.4895
                ],
                [
                  98.38178,
                  18.49375
                ],
                [
                  98.38456,
                  18.49407
                ],
                [
                  98.38624,
                  18.49562
                ],
                [
                  98.38866,
                  18.49481
                ],
                [
                  98.39104,
                  18.49675
                ],
                [
                  98.39602,
                  18.49728
                ],
                [
                  98.40405,
                  18.50542
                ],
                [
                  98.41371,
                  18.51092
                ],
                [
                  98.41755,
                  18.51493
                ],
                [
                  98.42571,
                  18.51925
                ],
                [
                  98.44587,
                  18.51808
                ],
                [
                  98.45516,
                  18.52324
                ],
                [
                  98.45973,
                  18.51298
                ],
                [
                  98.46148,
                  18.5137
                ],
                [
                  98.46191,
                  18.51689
                ],
                [
                  98.46905,
                  18.51365
                ],
                [
                  98.47151,
                  18.51378
                ],
                [
                  98.47406,
                  18.51189
                ],
                [
                  98.4769,
                  18.51181
                ],
                [
                  98.48615,
                  18.52547
                ],
                [
                  98.48987,
                  18.5347
                ],
                [
                  98.4933,
                  18.53672
                ],
                [
                  98.49498,
                  18.53115
                ],
                [
                  98.49678,
                  18.52954
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สะงะ",
          "latitude": 18.786606,
          "longitude": 98.495445,
          "sum_rainfall_mm": 121.4,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.19428,
                  18.96184
                ],
                [
                  98.19704,
                  18.95854
                ],
                [
                  98.20018,
                  18.95766
                ],
                [
                  98.20122,
                  18.95884
                ],
                [
                  98.2019,
                  18.95682
                ],
                [
                  98.20412,
                  18.95581
                ],
                [
                  98.20489,
                  18.95742
                ],
                [
                  98.20788,
                  18.95708
                ],
                [
                  98.21097,
                  18.953
                ],
                [
                  98.21587,
                  18.94927
                ],
                [
                  98.22084,
                  18.9495
                ],
                [
                  98.22242,
                  18.94692
                ],
                [
                  98.2233,
                  18.94838
                ],
                [
                  98.22572,
                  18.94847
                ],
                [
                  98.22933,
                  18.95208
                ],
                [
                  98.22988,
                  18.95595
                ],
                [
                  98.23346,
                  18.96071
                ],
                [
                  98.24031,
                  18.9601
                ],
                [
                  98.24543,
                  18.95778
                ],
                [
                  98.24663,
                  18.95946
                ],
                [
                  98.25393,
                  18.95759
                ],
                [
                  98.25613,
                  18.95632
                ],
                [
                  98.2574,
                  18.9533
                ],
                [
                  98.26093,
                  18.95154
                ],
                [
                  98.26182,
                  18.9392
                ],
                [
                  98.26562,
                  18.93267
                ],
                [
                  98.26654,
                  18.93214
                ],
                [
                  98.26806,
                  18.93441
                ],
                [
                  98.27091,
                  18.93472
                ],
                [
                  98.27909,
                  18.92881
                ],
                [
                  98.28876,
                  18.92605
                ],
                [
                  98.29753,
                  18.92889
                ],
                [
                  98.30225,
                  18.93203
                ],
                [
                  98.31119,
                  18.93349
                ],
                [
                  98.31482,
                  18.93176
                ],
                [
                  98.32032,
                  18.93178
                ],
                [
                  98.32608,
                  18.93336
                ],
                [
                  98.32759,
                  18.93445
                ],
                [
                  98.32757,
                  18.93894
                ],
                [
                  98.32904,
                  18.94087
                ],
                [
                  98.33716,
                  18.93952
                ],
                [
                  98.34433,
                  18.93573
                ],
                [
                  98.34763,
                  18.93231
                ],
                [
                  98.35029,
                  18.92548
                ],
                [
                  98.35021,
                  18.90804
                ],
                [
                  98.35432,
                  18.90586
                ],
                [
                  98.35608,
                  18.90307
                ],
                [
                  98.36148,
                  18.89903
                ],
                [
                  98.36793,
                  18.89538
                ],
                [
                  98.378,
                  18.88267
                ],
                [
                  98.38411,
                  18.88222
                ],
                [
                  98.3942,
                  18.87835
                ],
                [
                  98.42004,
                  18.88021
                ],
                [
                  98.42648,
                  18.88335
                ],
                [
                  98.43831,
                  18.88584
                ],
                [
                  98.44444,
                  18.88545
                ],
                [
                  98.45018,
                  18.88726
                ],
                [
                  98.46508,
                  18.88773
                ],
                [
                  98.46689,
                  18.89063
                ],
                [
                  98.46171,
                  18.89795
                ],
                [
                  98.46254,
                  18.90692
                ],
                [
                  98.47132,
                  18.90768
                ],
                [
                  98.47463,
                  18.90996
                ],
                [
                  98.47721,
                  18.91618
                ],
                [
                  98.4767,
                  18.92189
                ],
                [
                  98.47874,
                  18.91906
                ],
                [
                  98.48103,
                  18.91872
                ],
                [
                  98.48368,
                  18.91478
                ],
                [
                  98.48884,
                  18.9152
                ],
                [
                  98.49134,
                  18.91672
                ],
                [
                  98.50339,
                  18.91131
                ],
                [
                  98.50582,
                  18.9089
                ],
                [
                  98.50168,
                  18.90368
                ],
                [
                  98.49991,
                  18.89865
                ],
                [
                  98.4981,
                  18.89722
                ],
                [
                  98.49816,
                  18.89478
                ],
                [
                  98.49639,
                  18.89272
                ],
                [
                  98.49614,
                  18.88797
                ],
                [
                  98.49746,
                  18.88718
                ],
                [
                  98.49995,
                  18.88841
                ],
                [
                  98.50327,
                  18.88736
                ],
                [
                  98.50434,
                  18.88328
                ],
                [
                  98.50686,
                  18.88131
                ],
                [
                  98.51203,
                  18.88292
                ],
                [
                  98.52301,
                  18.87786
                ],
                [
                  98.5259,
                  18.8747
                ],
                [
                  98.52415,
                  18.86766
                ],
                [
                  98.51678,
                  18.86253
                ],
                [
                  98.51667,
                  18.86
                ],
                [
                  98.52414,
                  18.85654
                ],
                [
                  98.52874,
                  18.84892
                ],
                [
                  98.52856,
                  18.84459
                ],
                [
                  98.53038,
                  18.84155
                ],
                [
                  98.53055,
                  18.83758
                ],
                [
                  98.53324,
                  18.8346
                ],
                [
                  98.53712,
                  18.83406
                ],
                [
                  98.53972,
                  18.83246
                ],
                [
                  98.54079,
                  18.83041
                ],
                [
                  98.54058,
                  18.82662
                ],
                [
                  98.54569,
                  18.82113
                ],
                [
                  98.54601,
                  18.81559
                ],
                [
                  98.55122,
                  18.80878
                ],
                [
                  98.55944,
                  18.80287
                ],
                [
                  98.55808,
                  18.80088
                ],
                [
                  98.55468,
                  18.79949
                ],
                [
                  98.55312,
                  18.7969
                ],
                [
                  98.54455,
                  18.79514
                ],
                [
                  98.54024,
                  18.78941
                ],
                [
                  98.53114,
                  18.78835
                ],
                [
                  98.52862,
                  18.78625
                ],
                [
                  98.52674,
                  18.78013
                ],
                [
                  98.52472,
                  18.78078
                ],
                [
                  98.51799,
                  18.77707
                ],
                [
                  98.51525,
                  18.77724
                ],
                [
                  98.51253,
                  18.77593
                ],
                [
                  98.51152,
                  18.77351
                ],
                [
                  98.50785,
                  18.77555
                ],
                [
                  98.50308,
                  18.77358
                ],
                [
                  98.50195,
                  18.77566
                ],
                [
                  98.49989,
                  18.77621
                ],
                [
                  98.4968,
                  18.77214
                ],
                [
                  98.49608,
                  18.7687
                ],
                [
                  98.49706,
                  18.76736
                ],
                [
                  98.49701,
                  18.76361
                ],
                [
                  98.49523,
                  18.76192
                ],
                [
                  98.49706,
                  18.76014
                ],
                [
                  98.49715,
                  18.74886
                ],
                [
                  98.48966,
                  18.73891
                ],
                [
                  98.48877,
                  18.73368
                ],
                [
                  98.49386,
                  18.73251
                ],
                [
                  98.49338,
                  18.72846
                ],
                [
                  98.49503,
                  18.72496
                ],
                [
                  98.49483,
                  18.72244
                ],
                [
                  98.49715,
                  18.72121
                ],
                [
                  98.49702,
                  18.71847
                ],
                [
                  98.49187,
                  18.7166
                ],
                [
                  98.49339,
                  18.71477
                ],
                [
                  98.49665,
                  18.71427
                ],
                [
                  98.49751,
                  18.71162
                ],
                [
                  98.49822,
                  18.69811
                ],
                [
                  98.49972,
                  18.6923
                ],
                [
                  98.49738,
                  18.68919
                ],
                [
                  98.49895,
                  18.67942
                ],
                [
                  98.49574,
                  18.669
                ],
                [
                  98.49882,
                  18.65968
                ],
                [
                  98.49537,
                  18.65117
                ],
                [
                  98.49215,
                  18.64785
                ],
                [
                  98.49304,
                  18.64301
                ],
                [
                  98.49188,
                  18.64002
                ],
                [
                  98.49216,
                  18.63706
                ],
                [
                  98.48783,
                  18.62968
                ],
                [
                  98.4901,
                  18.61894
                ],
                [
                  98.48933,
                  18.61683
                ],
                [
                  98.49042,
                  18.6132
                ],
                [
                  98.48967,
                  18.6032
                ],
                [
                  98.48266,
                  18.60577
                ],
                [
                  98.47528,
                  18.60615
                ],
                [
                  98.46947,
                  18.60483
                ],
                [
                  98.4633,
                  18.60662
                ],
                [
                  98.45927,
                  18.60603
                ],
                [
                  98.45044,
                  18.60934
                ],
                [
                  98.44419,
                  18.60897
                ],
                [
                  98.44176,
                  18.60743
                ],
                [
                  98.43014,
                  18.60577
                ],
                [
                  98.41815,
                  18.60722
                ],
                [
                  98.41525,
                  18.60588
                ],
                [
                  98.40317,
                  18.60496
                ],
                [
                  98.39403,
                  18.60857
                ],
                [
                  98.38743,
                  18.61682
                ],
                [
                  98.3879,
                  18.61959
                ],
                [
                  98.38391,
                  18.61821
                ],
                [
                  98.38165,
                  18.61908
                ],
                [
                  98.38076,
                  18.61708
                ],
                [
                  98.37856,
                  18.61725
                ],
                [
                  98.3775,
                  18.61539
                ],
                [
                  98.3758,
                  18.61757
                ],
                [
                  98.37398,
                  18.61631
                ],
                [
                  98.37213,
                  18.61734
                ],
                [
                  98.3696,
                  18.61577
                ],
                [
                  98.36754,
                  18.61685
                ],
                [
                  98.36257,
                  18.61701
                ],
                [
                  98.36219,
                  18.61921
                ],
                [
                  98.35917,
                  18.62216
                ],
                [
                  98.36918,
                  18.62697
                ],
                [
                  98.36835,
                  18.63365
                ],
                [
                  98.37008,
                  18.63693
                ],
                [
                  98.36776,
                  18.63788
                ],
                [
                  98.36394,
                  18.63695
                ],
                [
                  98.36278,
                  18.6349
                ],
                [
                  98.36136,
                  18.63589
                ],
                [
                  98.3579,
                  18.65159
                ],
                [
                  98.35939,
                  18.6586
                ],
                [
                  98.35889,
                  18.6616
                ],
                [
                  98.3558,
                  18.66469
                ],
                [
                  98.35727,
                  18.66851
                ],
                [
                  98.35746,
                  18.6734
                ],
                [
                  98.35348,
                  18.68464
                ],
                [
                  98.35404,
                  18.69255
                ],
                [
                  98.35132,
                  18.69824
                ],
                [
                  98.35206,
                  18.70286
                ],
                [
                  98.34946,
                  18.70767
                ],
                [
                  98.34419,
                  18.7109
                ],
                [
                  98.34377,
                  18.71261
                ],
                [
                  98.34105,
                  18.7144
                ],
                [
                  98.33925,
                  18.71739
                ],
                [
                  98.33656,
                  18.71838
                ],
                [
                  98.33568,
                  18.72422
                ],
                [
                  98.33247,
                  18.72908
                ],
                [
                  98.33309,
                  18.73519
                ],
                [
                  98.33437,
                  18.7365
                ],
                [
                  98.33391,
                  18.74
                ],
                [
                  98.33132,
                  18.74442
                ],
                [
                  98.32682,
                  18.74669
                ],
                [
                  98.31864,
                  18.74821
                ],
                [
                  98.31546,
                  18.75021
                ],
                [
                  98.31234,
                  18.75632
                ],
                [
                  98.30949,
                  18.75873
                ],
                [
                  98.30892,
                  18.76421
                ],
                [
                  98.30444,
                  18.76844
                ],
                [
                  98.29926,
                  18.77975
                ],
                [
                  98.29308,
                  18.7851
                ],
                [
                  98.29123,
                  18.79275
                ],
                [
                  98.29016,
                  18.82103
                ],
                [
                  98.28843,
                  18.82782
                ],
                [
                  98.28547,
                  18.83244
                ],
                [
                  98.27907,
                  18.83503
                ],
                [
                  98.26904,
                  18.84411
                ],
                [
                  98.25858,
                  18.84136
                ],
                [
                  98.25254,
                  18.83782
                ],
                [
                  98.24699,
                  18.83837
                ],
                [
                  98.24709,
                  18.84272
                ],
                [
                  98.23901,
                  18.84466
                ],
                [
                  98.22928,
                  18.8514
                ],
                [
                  98.2219,
                  18.86017
                ],
                [
                  98.20654,
                  18.8692
                ],
                [
                  98.19301,
                  18.87094
                ],
                [
                  98.18658,
                  18.87459
                ],
                [
                  98.17757,
                  18.8732
                ],
                [
                  98.17003,
                  18.87788
                ],
                [
                  98.16323,
                  18.88028
                ],
                [
                  98.15229,
                  18.88109
                ],
                [
                  98.14291,
                  18.88375
                ],
                [
                  98.13376,
                  18.88396
                ],
                [
                  98.1232,
                  18.88714
                ],
                [
                  98.10874,
                  18.88641
                ],
                [
                  98.11126,
                  18.88934
                ],
                [
                  98.11241,
                  18.89403
                ],
                [
                  98.11702,
                  18.89566
                ],
                [
                  98.11948,
                  18.89814
                ],
                [
                  98.12178,
                  18.90308
                ],
                [
                  98.12381,
                  18.90486
                ],
                [
                  98.12438,
                  18.90788
                ],
                [
                  98.12726,
                  18.9092
                ],
                [
                  98.12921,
                  18.91172
                ],
                [
                  98.13359,
                  18.91251
                ],
                [
                  98.1371,
                  18.91169
                ],
                [
                  98.14013,
                  18.91306
                ],
                [
                  98.1437,
                  18.91174
                ],
                [
                  98.14979,
                  18.91894
                ],
                [
                  98.1548,
                  18.91873
                ],
                [
                  98.15691,
                  18.92028
                ],
                [
                  98.15861,
                  18.9239
                ],
                [
                  98.15871,
                  18.92911
                ],
                [
                  98.15651,
                  18.9352
                ],
                [
                  98.1567,
                  18.93744
                ],
                [
                  98.16615,
                  18.93954
                ],
                [
                  98.17261,
                  18.95135
                ],
                [
                  98.17308,
                  18.96196
                ],
                [
                  98.16538,
                  18.97545
                ],
                [
                  98.16549,
                  18.97802
                ],
                [
                  98.16352,
                  18.98062
                ],
                [
                  98.1638,
                  18.98181
                ],
                [
                  98.16606,
                  18.98357
                ],
                [
                  98.16905,
                  18.98329
                ],
                [
                  98.17135,
                  18.98435
                ],
                [
                  98.17357,
                  18.98862
                ],
                [
                  98.18472,
                  18.97634
                ],
                [
                  98.19428,
                  18.96184
                ]
              ]
            ]
          }
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ม่อนอังเกตุ",
          "latitude": 19.106,
          "longitude": 98.6566,
          "sum_rainfall_mm": 110.20000000000002,
          "observed_at": "2026-09-28T20:00:00+07:00",
          "geometry": {
            "rings": [
              [
                [
                  98.6967,
                  19.27506
                ],
                [
                  98.70588,
                  19.27361
                ],
                [
                  98.70618,
                  19.27172
                ],
                [
                  98.70418,
                  19.26878
                ],
                [
                  98.70541,
                  19.26745
                ],
                [
                  98.71979,
                  19.26496
                ],
                [
                  98.72286,
                  19.26281
                ],
                [
                  98.72723,
                  19.25786
                ],
                [
                  98.72718,
                  19.25149
                ],
                [
                  98.73239,
                  19.24514
                ],
                [
                  98.7354,
                  19.23452
                ],
                [
                  98.74615,
                  19.22595
                ],
                [
                  98.74669,
                  19.22468
                ],
                [
                  98.74329,
                  19.22242
                ],
                [
                  98.74327,
                  19.21754
                ],
                [
                  98.74697,
                  19.20768
                ],
                [
                  98.74878,
                  19.19697
                ],
                [
                  98.74672,
                  19.19198
                ],
                [
                  98.74221,
                  19.18769
                ],
                [
                  98.74234,
                  19.18512
                ],
                [
                  98.75429,
                  19.17561
                ],
                [
                  98.76098,
                  19.17509
                ],
                [
                  98.76467,
                  19.17113
                ],
                [
                  98.7686,
                  19.17114
                ],
                [
                  98.77203,
                  19.17314
                ],
                [
                  98.77389,
                  19.16692
                ],
                [
                  98.77335,
                  19.16528
                ],
                [
                  98.7701,
                  19.16338
                ],
                [
                  98.76556,
                  19.15815
                ],
                [
                  98.76339,
                  19.1507
                ],
                [
                  98.76767,
                  19.14585
                ],
                [
                  98.76256,
                  19.14011
                ],
                [
                  98.75924,
                  19.12812
                ],
                [
                  98.75603,
                  19.1231
                ],
                [
                  98.7571,
                  19.10996
                ],
                [
                  98.74916,
                  19.10063
                ],
                [
                  98.75077,
                  19.09512
                ],
                [
                  98.75118,
                  19.07724
                ],
                [
                  98.75398,
                  19.07165
                ],
                [
                  98.75013,
                  19.07129
                ],
                [
                  98.74943,
                  19.07278
                ],
                [
                  98.73961,
                  19.07252
                ],
                [
                  98.73782,
                  19.07395
                ],
                [
                  98.73605,
                  19.07128
                ],
                [
                  98.73239,
                  19.07188
                ],
                [
                  98.72919,
                  19.06991
                ],
                [
                  98.72668,
                  19.06996
                ],
                [
                  98.72408,
                  19.06449
                ],
                [
                  98.72478,
                  19.06298
                ],
                [
                  98.7265,
                  19.06381
                ],
                [
                  98.72722,
                  19.06291
                ],
                [
                  98.72506,
                  19.0582
                ],
                [
                  98.72575,
                  19.05632
                ],
                [
                  98.72342,
                  19.05681
                ],
                [
                  98.72041,
                  19.05551
                ],
                [
                  98.71824,
                  19.05691
                ],
                [
                  98.71619,
                  19.05404
                ],
                [
                  98.7126,
                  19.05344
                ],
                [
                  98.71104,
                  19.05401
                ],
                [
                  98.71136,
                  19.05711
                ],
                [
                  98.70842,
                  19.05718
                ],
                [
                  98.70266,
                  19.06226
                ],
                [
                  98.69347,
                  19.06741
                ],
                [
                  98.6906,
                  19.06683
                ],
                [
                  98.68746,
                  19.07073
                ],
                [
                  98.68048,
                  19.07189
                ],
                [
                  98.67726,
                  19.07382
                ],
                [
                  98.67009,
                  19.07355
                ],
                [
                  98.66567,
                  19.0751
                ],
                [
                  98.66106,
                  19.07225
                ],
                [
                  98.65647,
                  19.07319
                ],
                [
                  98.6529,
                  19.07159
                ],
                [
                  98.65006,
                  19.07253
                ],
                [
                  98.64496,
                  19.06947
                ],
                [
                  98.64033,
                  19.06904
                ],
                [
                  98.6406,
                  19.07496
                ],
                [
                  98.64563,
                  19.07586
                ],
                [
                  98.64859,
                  19.08067
                ],
                [
                  98.64919,
                  19.08834
                ],
                [
                  98.65169,
                  19.09437
                ],
                [
                  98.64911,
                  19.09963
                ],
                [
                  98.64349,
                  19.10547
                ],
                [
                  98.6436,
                  19.11066
                ],
                [
                  98.6412,
                  19.11336
                ],
                [
                  98.64232,
                  19.11583
                ],
                [
                  98.64059,
                  19.1185
                ],
                [
                  98.64145,
                  19.12799
                ],
                [
                  98.6396,
                  19.1298
                ],
                [
                  98.63898,
                  19.13533
                ],
                [
                  98.63483,
                  19.13811
                ],
                [
                  98.63222,
                  19.14229
                ],
                [
                  98.63336,
                  19.14863
                ],
                [
                  98.63219,
                  19.15241
                ],
                [
                  98.63348,
                  19.15567
                ],
                [
                  98.63157,
                  19.15675
                ],
                [
                  98.62867,
                  19.15626
                ],
                [
                  98.62181,
                  19.15783
                ],
                [
                  98.6213,
                  19.15988
                ],
                [
                  98.61926,
                  19.16092
                ],
                [
                  98.62075,
                  19.1687
                ],
                [
                  98.61628,
                  19.16854
                ],
                [
                  98.60776,
                  19.17252
                ],
                [
                  98.60696,
                  19.1743
                ],
                [
                  98.60844,
                  19.17799
                ],
                [
                  98.60516,
                  19.18074
                ],
                [
                  98.59399,
                  19.1856
                ],
                [
                  98.58636,
                  19.18634
                ],
                [
                  98.5824,
                  19.18862
                ],
                [
                  98.57787,
                  19.19671
                ],
                [
                  98.57682,
                  19.20173
                ],
                [
                  98.5694,
                  19.20582
                ],
                [
                  98.56822,
                  19.20948
                ],
                [
                  98.56901,
                  19.21668
                ],
                [
                  98.57333,
                  19.2175
                ],
                [
                  98.57761,
                  19.21491
                ],
                [
                  98.57953,
                  19.21657
                ],
                [
                  98.58209,
                  19.21672
                ],
                [
                  98.58924,
                  19.22084
                ],
                [
                  98.5959,
                  19.2278
                ],
                [
                  98.59829,
                  19.22901
                ],
                [
                  98.59866,
                  19.23222
                ],
                [
                  98.59676,
                  19.23457
                ],
                [
                  98.59699,
                  19.23774
                ],
                [
                  98.59221,
                  19.24228
                ],
                [
                  98.59165,
                  19.24749
                ],
                [
                  98.58732,
                  19.25524
                ],
                [
                  98.58955,
                  19.25801
                ],
                [
                  98.58894,
                  19.26157
                ],
                [
                  98.59112,
                  19.26665
                ],
                [
                  98.59342,
                  19.26927
                ],
                [
                  98.59687,
                  19.27098
                ],
                [
                  98.59866,
                  19.2765
                ],
                [
                  98.60387,
                  19.27777
                ],
                [
                  98.60769,
                  19.27423
                ],
                [
                  98.60967,
                  19.27787
                ],
                [
                  98.6115,
                  19.27895
                ],
                [
                  98.63078,
                  19.27771
                ],
                [
                  98.63625,
                  19.27934
                ],
                [
                  98.63798,
                  19.28256
                ],
                [
                  98.64598,
                  19.28075
                ],
                [
                  98.65673,
                  19.28465
                ],
                [
                  98.67004,
                  19.28482
                ],
                [
                  98.67645,
                  19.28199
                ],
                [
                  98.68132,
                  19.28402
                ],
                [
                  98.6929,
                  19.28061
                ],
                [
                  98.6967,
                  19.27506
                ]
              ]
            ]
          }
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_27_09_2026.png?1790644026",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-24h"
    },
    "48h": {
      "period": "48h",
      "date": "2026-09-29",
      "time": "08:00:00",
      "type": "พื้นที่เฝ้าระวังพิเศษ ล่วงหน้า 48 ชม. เสี่ยงน้ำท่วมจากฝนตกสะสม",
      "areas": [
        {
          "geocode": "621101",
          "tambon": "ต.โกสัมพี",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อุทยานแห่งชาติคลองวังเจ้า",
          "latitude": 16.505556,
          "longitude": 99.169833,
          "sum_rainfall_mm": 192.0,
          "observed_at": "2026-09-28T10:00:00+07:00"
        },
        {
          "geocode": "620303",
          "tambon": "ต.คลองลานพัฒนา",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.คลองลานพัฒนา",
          "latitude": 16.12253,
          "longitude": 99.32932,
          "sum_rainfall_mm": 137.20000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "620302",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ฝายคลองสวนหมาก",
          "latitude": 16.330917,
          "longitude": 99.26475,
          "sum_rainfall_mm": 115.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "260310",
          "tambon": "ต.ศรีกะอาง",
          "amphoe": "อ.บ้านนา",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีกะอาง",
          "latitude": 14.27798,
          "longitude": 101.12879,
          "sum_rainfall_mm": 101.79999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "610604",
          "tambon": "ต.คอกควาย",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยพิทักษ์ป่าเขาปันโส",
          "latitude": 15.23958,
          "longitude": 99.40895,
          "sum_rainfall_mm": 134.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 158.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 150.59999999999997,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 189.80000000000007,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "210504",
          "tambon": "ต.ตาขัน",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านค่าย",
          "latitude": 12.706804,
          "longitude": 101.30041,
          "sum_rainfall_mm": 191.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "210107",
          "tambon": "ต.บ้านแลง",
          "amphoe": "อ.เมืองระยอง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สถานีวิจัยต้นน้ำชายฝั่งทะเลตะวันออก",
          "latitude": 12.697516,
          "longitude": 101.404884,
          "sum_rainfall_mm": 180.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เตี๊ยะ",
          "latitude": 18.31208,
          "longitude": 98.48189,
          "sum_rainfall_mm": 119.80000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่กลาง",
          "latitude": 18.533205,
          "longitude": 98.52239,
          "sum_rainfall_mm": 209.20000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยสามหมื่น",
          "latitude": 19.413826,
          "longitude": 98.593124,
          "sum_rainfall_mm": 93.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501706",
          "tambon": "ต.โปงทุ่ง",
          "amphoe": "อ.ดอยเต่า",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติแม่ปิงที่ มป.7 (ถ้ำหม้อ)",
          "latitude": 17.81782,
          "longitude": 98.75104,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500107",
          "tambon": "ต.ช้างเผือก",
          "amphoe": "อ.เมืองเชียงใหม่",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ลานกางเต็นท์ดอยปุย อุทยานแห่งชาติดอยสุเทพ-ปุย",
          "latitude": 18.82574,
          "longitude": 98.89448,
          "sum_rainfall_mm": 95.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500302",
          "tambon": "ต.ท่าผา",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่อวม",
          "latitude": 18.507107,
          "longitude": 98.5005,
          "sum_rainfall_mm": 152.6,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สะงะ",
          "latitude": 18.786606,
          "longitude": 98.495445,
          "sum_rainfall_mm": 103.79999999999998,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ม่อนอังเกตุ",
          "latitude": 19.106,
          "longitude": 98.6566,
          "sum_rainfall_mm": 91.60000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501803",
          "tambon": "ต.แม่ตื่น",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ระอา",
          "latitude": 17.4721,
          "longitude": 98.3436,
          "sum_rainfall_mm": 146.2,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ขุนแม่หาด ",
          "latitude": 17.664206,
          "longitude": 98.514175,
          "sum_rainfall_mm": 156.79999999999998,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ยางอมพาย",
          "latitude": 18.2873,
          "longitude": 98.1429,
          "sum_rainfall_mm": 91.79999999999998,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521011",
          "tambon": "ต.สันดอนแก้ว",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "อ่างฯแม่ยอนสันดอนแก้ว",
          "latitude": 17.97243,
          "longitude": 99.48753,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 139.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 146.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 306.79999999999995,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 105.19999999999999,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 113.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710202",
          "tambon": "ต.ท่าเสา",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.ท่าเสา",
          "latitude": 14.21606,
          "longitude": 99.08133,
          "sum_rainfall_mm": 102.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710204",
          "tambon": "ต.ไทรโยค",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติไทรโยค",
          "latitude": 14.4545,
          "longitude": 98.84806,
          "sum_rainfall_mm": 107.40000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710205",
          "tambon": "ต.วังกระแจะ",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทย.6 (เขาพลู)",
          "latitude": 14.266877,
          "longitude": 98.77193,
          "sum_rainfall_mm": 196.29999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710402",
          "tambon": "ต.ด่านแม่แฉลบ",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติเขื่อนศรีนครินทร์",
          "latitude": 14.6359,
          "longitude": 98.9916,
          "sum_rainfall_mm": 120.39999999999999,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 105.30000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710803",
          "tambon": "ต.ไล่โว่",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "รร.กองม่องทะ สาขาไล่โว่",
          "latitude": 15.30931,
          "longitude": 98.50981,
          "sum_rainfall_mm": 132.39999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630503",
          "tambon": "ต.แม่สอง",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อุทยานแห่งชาติแม่เมย",
          "latitude": 17.483812,
          "longitude": 98.07418,
          "sum_rainfall_mm": 165.60000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630504",
          "tambon": "ต.แม่หละ",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยเปเปอร์",
          "latitude": 17.264994,
          "longitude": 98.35863,
          "sum_rainfall_mm": 136.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630207",
          "tambon": "ต.ท้องฟ้า",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านท้องฟ้า",
          "latitude": 17.04663,
          "longitude": 98.978991,
          "sum_rainfall_mm": 180.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630111",
          "tambon": "ต.แม่ท้อ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติตากสินมหาราช",
          "latitude": 16.775963,
          "longitude": 98.92825,
          "sum_rainfall_mm": 136.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630113",
          "tambon": "ต.หนองบัวใต้",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำตลุกหิน",
          "latitude": 16.81018,
          "longitude": 99.08733,
          "sum_rainfall_mm": 161.29999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630609",
          "tambon": "ต.ด่านแม่ละเมา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "พิพิธภัณฑ์ธรรมชาติบ้านห้วยปลาหลด",
          "latitude": 16.783789,
          "longitude": 98.89485,
          "sum_rainfall_mm": 127.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำสองแควหลวง",
          "latitude": 17.37875,
          "longitude": 99.01148,
          "sum_rainfall_mm": 135.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        }
      ],
      "area_nearby": [
        {
          "geocode": "621101",
          "tambon": "ต.โกสัมพี",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อุทยานแห่งชาติคลองวังเจ้า",
          "latitude": 16.505556,
          "longitude": 99.169833,
          "sum_rainfall_mm": 192.0,
          "observed_at": "2026-09-28T10:00:00+07:00"
        },
        {
          "geocode": "621101",
          "tambon": "ต.โกสัมพี",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านไร่พิจิตร",
          "latitude": 16.510575,
          "longitude": 99.2561,
          "sum_rainfall_mm": 21.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "621101",
          "tambon": "ต.โกสัมพี",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหนองบัวสามัคคี",
          "latitude": 16.559187,
          "longitude": 99.259333,
          "sum_rainfall_mm": 28.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "621101",
          "tambon": "ต.โกสัมพี",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ วจ.5 (โละโคะ)",
          "latitude": 16.4495,
          "longitude": 99.1115,
          "sum_rainfall_mm": 186.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "621101",
          "tambon": "ต.โกสัมพี",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ขุนวังเจ้า",
          "latitude": 16.502794,
          "longitude": 99.16898,
          "sum_rainfall_mm": 226.80000000000004,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "621102",
          "tambon": "ต.เพชรชมภู",
          "amphoe": "อ.โกสัมพีนคร",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านมอเสือดุ",
          "latitude": 16.557149,
          "longitude": 99.364643,
          "sum_rainfall_mm": 14.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "620301",
          "tambon": "ต.คลองน้ำไหล",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านรวงผึ้งพัฒนา",
          "latitude": 16.197635,
          "longitude": 99.291834,
          "sum_rainfall_mm": 53.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "620301",
          "tambon": "ต.คลองน้ำไหล",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ขุนหมาก",
          "latitude": 16.097857,
          "longitude": 99.11591,
          "sum_rainfall_mm": 0.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "620303",
          "tambon": "ต.คลองลานพัฒนา",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกะเหรี่ยงน้ำตก",
          "latitude": 16.126938,
          "longitude": 99.306881,
          "sum_rainfall_mm": 47.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "620303",
          "tambon": "ต.คลองลานพัฒนา",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ทต.คลองลานพัฒนา",
          "latitude": 16.12253,
          "longitude": 99.32932,
          "sum_rainfall_mm": 137.20000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "620302",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ฝายคลองสวนหมาก",
          "latitude": 16.330917,
          "longitude": 99.26475,
          "sum_rainfall_mm": 115.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "620302",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านโป่งน้ำร้อน",
          "latitude": 16.328463,
          "longitude": 99.298103,
          "sum_rainfall_mm": 11.0,
          "observed_at": "2026-09-28T10:00:00+07:00"
        },
        {
          "geocode": "620302",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านคลองมดแดง",
          "latitude": 16.406402,
          "longitude": 99.237542,
          "sum_rainfall_mm": 38.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "620302",
          "tambon": "ต.โป่งน้ำร้อน",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ คล.4 (คลองสวนหมาก)",
          "latitude": 16.3287,
          "longitude": 99.2576,
          "sum_rainfall_mm": 121.60000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "620304",
          "tambon": "ต.สักงาม",
          "amphoe": "อ.คลองลาน",
          "province": "จ.กำแพงเพชร",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านเพชรนิยม",
          "latitude": 16.289125,
          "longitude": 99.274877,
          "sum_rainfall_mm": 30.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "260309",
          "tambon": "ต.เขาเพิ่ม",
          "amphoe": "อ.บ้านนา",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "สะพานวังแก่ง",
          "latitude": 14.364806,
          "longitude": 101.09028,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "260310",
          "tambon": "ต.ศรีกะอาง",
          "amphoe": "อ.บ้านนา",
          "province": "จ.นครนายก",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "อบต.ศรีกะอาง",
          "latitude": 14.27798,
          "longitude": 101.12879,
          "sum_rainfall_mm": 101.79999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "610607",
          "tambon": "ต.แก่นมะกรูด",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านใหม่คลองอังวะ",
          "latitude": 15.161769,
          "longitude": 99.28896,
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610607",
          "tambon": "ต.แก่นมะกรูด",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยพิทักษ์ป่าเขาบันได",
          "latitude": 15.27736,
          "longitude": 99.15219,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610607",
          "tambon": "ต.แก่นมะกรูด",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "รพสต.แก่นมะกรูด",
          "latitude": 15.16183,
          "longitude": 99.28896,
          "sum_rainfall_mm": 28.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "610604",
          "tambon": "ต.คอกควาย",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านไร่ใหม่",
          "latitude": 15.230766,
          "longitude": 99.463888,
          "sum_rainfall_mm": 48.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610604",
          "tambon": "ต.คอกควาย",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านกระแหน่",
          "latitude": 15.294661,
          "longitude": 99.43493,
          "sum_rainfall_mm": 22.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610604",
          "tambon": "ต.คอกควาย",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านปางสวรรค์",
          "latitude": 15.203169,
          "longitude": 99.420237,
          "sum_rainfall_mm": 34.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610604",
          "tambon": "ต.คอกควาย",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านห้วยลึก",
          "latitude": 15.218677,
          "longitude": 99.50252,
          "sum_rainfall_mm": 14.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610604",
          "tambon": "ต.คอกควาย",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "หน่วยพิทักษ์ป่าเขาปันโส",
          "latitude": 15.23958,
          "longitude": 99.40895,
          "sum_rainfall_mm": 134.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "610614",
          "tambon": "ต.เจ้าวัด",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านอีพุ่งใหญ่",
          "latitude": 15.17196,
          "longitude": 99.48342,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610614",
          "tambon": "ต.เจ้าวัด",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านบุ่ง",
          "latitude": 15.12854,
          "longitude": 99.464856,
          "sum_rainfall_mm": 31.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610611",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านไร่พริก",
          "latitude": 14.991398,
          "longitude": 99.564953,
          "sum_rainfall_mm": 19.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610611",
          "tambon": "ต.บ้านบึง",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหน้าฝาย",
          "latitude": 15.067142,
          "longitude": 99.542776,
          "sum_rainfall_mm": 31.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610601",
          "tambon": "ต.บ้านไร่",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหินตุ้ม",
          "latitude": 15.046578,
          "longitude": 99.476521,
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610601",
          "tambon": "ต.บ้านไร่",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านพุบอน",
          "latitude": 15.07572,
          "longitude": 99.419734,
          "sum_rainfall_mm": 1.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610601",
          "tambon": "ต.บ้านไร่",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "ศูนย์อปพร. อบต.บ้านไร่",
          "latitude": 15.08265,
          "longitude": 99.51935,
          "sum_rainfall_mm": 82.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "610609",
          "tambon": "ต.หนองจอก",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านหนองยายเงิน",
          "latitude": 14.982663,
          "longitude": 99.678247,
          "sum_rainfall_mm": 12.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "610603",
          "tambon": "ต.ห้วยแห้ง",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านผาทั่ง",
          "latitude": 15.1054,
          "longitude": 99.5358,
          "sum_rainfall_mm": 42.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "610603",
          "tambon": "ต.ห้วยแห้ง",
          "amphoe": "อ.บ้านไร่",
          "province": "จ.อุทัยธานี",
          "region_id": "1",
          "region_name": "ภาคกลาง",
          "station": "บ้านนาทุ่งเชือก",
          "latitude": 15.160483,
          "longitude": 99.544922,
          "sum_rainfall_mm": 24.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 158.79999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 30.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 25.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 142.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 8.0,
          "observed_at": "2026-09-28T13:00:00+07:00"
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
          "sum_rainfall_mm": 150.60000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 1.4000000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 189.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "210507",
          "tambon": "ต.ชากบก",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเจ็ดลูกเนิน",
          "latitude": 12.777539,
          "longitude": 101.3988,
          "sum_rainfall_mm": 51.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "210504",
          "tambon": "ต.ตาขัน",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านค่าย",
          "latitude": 12.706804,
          "longitude": 101.30041,
          "sum_rainfall_mm": 191.39999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "210505",
          "tambon": "ต.บางบุตร",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านเขาหวาย",
          "latitude": 12.874416,
          "longitude": 101.470981,
          "sum_rainfall_mm": 95.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "210505",
          "tambon": "ต.บางบุตร",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านคลองกระท้อน",
          "latitude": 12.823198,
          "longitude": 101.381608,
          "sum_rainfall_mm": 52.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "210506",
          "tambon": "ต.หนองบัว",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านคลองขนุน",
          "latitude": 12.894996,
          "longitude": 101.370717,
          "sum_rainfall_mm": 52.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "210506",
          "tambon": "ต.หนองบัว",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "หนองบัว",
          "latitude": 12.849195,
          "longitude": 101.301346,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "210502",
          "tambon": "ต.หนองละลอก",
          "amphoe": "อ.บ้านค่าย",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านมาบตอง",
          "latitude": 12.805375,
          "longitude": 101.23584,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "210107",
          "tambon": "ต.บ้านแลง",
          "amphoe": "อ.เมืองระยอง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "สถานีวิจัยต้นน้ำชายฝั่งทะเลตะวันออก",
          "latitude": 12.697516,
          "longitude": 101.404884,
          "sum_rainfall_mm": 180.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "210115",
          "tambon": "ต.สำนักทอง",
          "amphoe": "อ.เมืองระยอง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านธรรมสถิตย์",
          "latitude": 12.702964,
          "longitude": 101.444685,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "210115",
          "tambon": "ต.สำนักทอง",
          "amphoe": "อ.เมืองระยอง",
          "province": "จ.ระยอง",
          "region_id": "2",
          "region_name": "ภาคตะวันออก",
          "station": "บ้านหาดใหญ่",
          "latitude": 12.797868,
          "longitude": 101.4683,
          "sum_rainfall_mm": 98.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500204",
          "tambon": "ต.ข่วงเปา",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหนองห่าย",
          "latitude": 18.453694,
          "longitude": 98.729318,
          "sum_rainfall_mm": 16.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500207",
          "tambon": "ต.ดอยแก้ว",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่เตี๊ยะใต้",
          "latitude": 18.393421,
          "longitude": 98.651069,
          "sum_rainfall_mm": 20.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500207",
          "tambon": "ต.ดอยแก้ว",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยส้มป่อย",
          "latitude": 18.375283,
          "longitude": 98.533801,
          "sum_rainfall_mm": 52.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านขุนแปะ",
          "latitude": 18.311521,
          "longitude": 98.479789,
          "sum_rainfall_mm": 41.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแปะ",
          "latitude": 18.248958,
          "longitude": 98.595039,
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เตี๊ยะ",
          "latitude": 18.31208,
          "longitude": 98.48189,
          "sum_rainfall_mm": 119.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500206",
          "tambon": "ต.บ้านแปะ",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สะพานน้ำแม่แจ่ม บ้านแปะ",
          "latitude": 18.232069,
          "longitude": 98.439766,
          "sum_rainfall_mm": 53.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านน้ำลัด",
          "latitude": 18.430578,
          "longitude": 98.66912,
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหัวเสือ",
          "latitude": 18.453265,
          "longitude": 98.640097,
          "sum_rainfall_mm": 18.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ปอน",
          "latitude": 18.467068,
          "longitude": 98.609275,
          "sum_rainfall_mm": 23.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่หอย",
          "latitude": 18.485818,
          "longitude": 98.668225,
          "sum_rainfall_mm": 18.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านขุนกลาง",
          "latitude": 18.538554,
          "longitude": 98.524406,
          "sum_rainfall_mm": 60.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านน้ำตกแม่กลาง",
          "latitude": 18.48915,
          "longitude": 98.672086,
          "sum_rainfall_mm": 19.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านอ่างกาน้อย (สบหาด)",
          "latitude": 18.541897,
          "longitude": 98.593349,
          "sum_rainfall_mm": 55.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สะพานน้ำแม่กลาง",
          "latitude": 18.507551,
          "longitude": 98.66203,
          "sum_rainfall_mm": 74.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ อน.3 (แม่ยะ)",
          "latitude": 18.44004,
          "longitude": 98.59323,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่กลาง",
          "latitude": 18.533205,
          "longitude": 98.52239,
          "sum_rainfall_mm": 209.20000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500203",
          "tambon": "ต.บ้านหลวง",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "แม่หาด",
          "latitude": 18.46006,
          "longitude": 98.65094,
          "sum_rainfall_mm": 66.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500209",
          "tambon": "ต.แม่สอย",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยสะแพด",
          "latitude": 18.188109,
          "longitude": 98.701759,
          "sum_rainfall_mm": 10.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500209",
          "tambon": "ต.แม่สอย",
          "amphoe": "อ.จอมทอง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ อล.1 (ป่ากล้วย)",
          "latitude": 18.347317,
          "longitude": 98.55808,
          "sum_rainfall_mm": 7.8,
          "observed_at": "2026-09-29T04:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านทุ่งหลุก",
          "latitude": 19.347847,
          "longitude": 99.035047,
          "sum_rainfall_mm": 5.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านถ้ำ",
          "latitude": 19.387591,
          "longitude": 98.928357,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ก๊ะ",
          "latitude": 19.358993,
          "longitude": 98.97056,
          "sum_rainfall_mm": 4.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าเชียงดาว",
          "latitude": 19.405449,
          "longitude": 98.922516,
          "sum_rainfall_mm": 17.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ยอดดอยหลวงเชียงดาว",
          "latitude": 19.3977,
          "longitude": 98.8893,
          "sum_rainfall_mm": 18.6,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "เชียงดาว",
          "latitude": 19.36728,
          "longitude": 98.96884,
          "sum_rainfall_mm": 12.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "CHD001",
          "latitude": 19.39982,
          "longitude": 98.87604,
          "sum_rainfall_mm": 56.69999999999999,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "CHD002",
          "latitude": 19.39301,
          "longitude": 98.86552,
          "sum_rainfall_mm": 81.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์ป่าสบห้วยผาตั้ง-นาเลา",
          "latitude": 19.41391,
          "longitude": 98.91527,
          "sum_rainfall_mm": 21.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500401",
          "tambon": "ต.เชียงดาว",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "CHD004",
          "latitude": 19.39339,
          "longitude": 98.92826,
          "sum_rainfall_mm": 14.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500407",
          "tambon": "ต.ทุ่งข้าวพวง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่กอน",
          "latitude": 19.570266,
          "longitude": 98.92202,
          "sum_rainfall_mm": 7.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500407",
          "tambon": "ต.ทุ่งข้าวพวง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยเป้า",
          "latitude": 19.568531,
          "longitude": 98.957338,
          "sum_rainfall_mm": 5.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500407",
          "tambon": "ต.ทุ่งข้าวพวง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่งาย",
          "latitude": 19.55373,
          "longitude": 98.80895,
          "sum_rainfall_mm": 54.39999999999999,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500407",
          "tambon": "ต.ทุ่งข้าวพวง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สะพานแม่น้ำปิง",
          "latitude": 19.507914,
          "longitude": 98.95879,
          "sum_rainfall_mm": 11.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านออน",
          "latitude": 19.499074,
          "longitude": 99.0736,
          "sum_rainfall_mm": 4.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านป่าตึงงาม",
          "latitude": 19.515406,
          "longitude": 99.10566,
          "sum_rainfall_mm": 6.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางมะกง",
          "latitude": 19.421716,
          "longitude": 99.095341,
          "sum_rainfall_mm": 3.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยจะค่าน",
          "latitude": 19.60415,
          "longitude": 99.070586,
          "sum_rainfall_mm": 1.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านใหม่สามัคคี",
          "latitude": 19.51898,
          "longitude": 99.055452,
          "sum_rainfall_mm": 6.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ป๋าม",
          "latitude": 19.443453,
          "longitude": 99.02858,
          "sum_rainfall_mm": 5.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านไตรสภาวคาม",
          "latitude": 19.429654,
          "longitude": 98.979224,
          "sum_rainfall_mm": 6.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยผาแดง",
          "latitude": 19.49586,
          "longitude": 99.07811,
          "sum_rainfall_mm": 8.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500406",
          "tambon": "ต.ปิงโค้ง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ห้วยจะค่าน",
          "latitude": 19.602726,
          "longitude": 99.08559,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านน้ำรู",
          "latitude": 19.428797,
          "longitude": 98.6155,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-27T13:00:00+07:00"
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านวังมะริว",
          "latitude": 19.378589,
          "longitude": 98.721217,
          "sum_rainfall_mm": 6.5,
          "observed_at": "2026-09-29T04:00:00+07:00"
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหลวงเมืองคอง",
          "latitude": 19.382972,
          "longitude": 98.712097,
          "sum_rainfall_mm": 14.0,
          "observed_at": "2026-09-29T04:00:00+07:00"
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยสามหมื่น",
          "latitude": 19.413826,
          "longitude": 98.593124,
          "sum_rainfall_mm": 93.79999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500405",
          "tambon": "ต.เมืองคอง",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ขุนวาง",
          "latitude": 19.4138,
          "longitude": 98.593,
          "sum_rainfall_mm": 219.60000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500403",
          "tambon": "ต.เมืองงาย",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสบงาย",
          "latitude": 19.48017,
          "longitude": 98.964143,
          "sum_rainfall_mm": 5.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500402",
          "tambon": "ต.เมืองนะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่อ้อใน",
          "latitude": 19.298099,
          "longitude": 98.996602,
          "sum_rainfall_mm": 2.5,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "500402",
          "tambon": "ต.เมืองนะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ซ้าย",
          "latitude": 19.302102,
          "longitude": 98.898304,
          "sum_rainfall_mm": 23.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500402",
          "tambon": "ต.เมืองนะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ตะมาน",
          "latitude": 19.3201,
          "longitude": 98.8308,
          "sum_rainfall_mm": 76.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500402",
          "tambon": "ต.เมืองนะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยถ้วย",
          "latitude": 19.692413,
          "longitude": 98.80144,
          "sum_rainfall_mm": 2.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500402",
          "tambon": "ต.เมืองนะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีวิจัยต้นน้ำดอยเชียงดาว",
          "latitude": 19.2718,
          "longitude": 98.96989,
          "sum_rainfall_mm": 13.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500404",
          "tambon": "ต.แม่นะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านเมืองนะ",
          "latitude": 19.73416,
          "longitude": 98.896829,
          "sum_rainfall_mm": 2.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500404",
          "tambon": "ต.แม่นะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแกน้อย",
          "latitude": 19.665209,
          "longitude": 98.794829,
          "sum_rainfall_mm": 7.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500404",
          "tambon": "ต.แม่นะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านนาหวาย",
          "latitude": 19.629854,
          "longitude": 98.962831,
          "sum_rainfall_mm": 4.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500404",
          "tambon": "ต.แม่นะ",
          "amphoe": "อ.เชียงดาว",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ทต.แม่นะ",
          "latitude": 19.34123,
          "longitude": 98.96134,
          "sum_rainfall_mm": 14.600000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501701",
          "tambon": "ต.ดอยเต่า",
          "amphoe": "อ.ดอยเต่า",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านดอยเต่าใต้",
          "latitude": 17.890087,
          "longitude": 98.729695,
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501701",
          "tambon": "ต.ดอยเต่า",
          "amphoe": "อ.ดอยเต่า",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "อบต.ดอยเต่า",
          "latitude": 17.91548,
          "longitude": 98.72789,
          "sum_rainfall_mm": 84.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501706",
          "tambon": "ต.โปงทุ่ง",
          "amphoe": "อ.ดอยเต่า",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านโปงทุ่ง",
          "latitude": 17.852986,
          "longitude": 98.75245,
          "sum_rainfall_mm": 34.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501706",
          "tambon": "ต.โปงทุ่ง",
          "amphoe": "อ.ดอยเต่า",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ตูบ",
          "latitude": 17.946267,
          "longitude": 98.809877,
          "sum_rainfall_mm": 12.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501706",
          "tambon": "ต.โปงทุ่ง",
          "amphoe": "อ.ดอยเต่า",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติแม่ปิงที่ มป.7 (ถ้ำหม้อ)",
          "latitude": 17.81782,
          "longitude": 98.75104,
          "sum_rainfall_mm": 111.00000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500107",
          "tambon": "ต.ช้างเผือก",
          "amphoe": "อ.เมืองเชียงใหม่",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ลานกางเต็นท์ดอยปุย อุทยานแห่งชาติดอยสุเทพ-ปุย",
          "latitude": 18.82574,
          "longitude": 98.89448,
          "sum_rainfall_mm": 95.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500107",
          "tambon": "ต.ช้างเผือก",
          "amphoe": "อ.เมืองเชียงใหม่",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ทต.ช้างเผือก",
          "latitude": 18.8101,
          "longitude": 98.96992,
          "sum_rainfall_mm": 4.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500108",
          "tambon": "ต.สุเทพ",
          "amphoe": "อ.เมืองเชียงใหม่",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีคลองส่งน้ำแม่แตง",
          "latitude": 18.804512,
          "longitude": 98.959762,
          "sum_rainfall_mm": 19.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500108",
          "tambon": "ต.สุเทพ",
          "amphoe": "อ.เมืองเชียงใหม่",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านดอยปุย",
          "latitude": 18.81661,
          "longitude": 98.8835,
          "sum_rainfall_mm": 29.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500308",
          "tambon": "ต.กองแขก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านอมลาน",
          "latitude": 18.383935,
          "longitude": 98.457657,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500308",
          "tambon": "ต.กองแขก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหัวดอย",
          "latitude": 18.307551,
          "longitude": 98.362153,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500308",
          "tambon": "ต.กองแขก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่หลุ",
          "latitude": 18.445752,
          "longitude": 98.447245,
          "sum_rainfall_mm": 7.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500308",
          "tambon": "ต.กองแขก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์สวนป่าสิริกิติ์",
          "latitude": 18.36419,
          "longitude": 98.46656,
          "sum_rainfall_mm": 29.999999999999993,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500308",
          "tambon": "ต.กองแขก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ อล.4 (น้ำพุร้อนเทพพนม)",
          "latitude": 18.270575,
          "longitude": 98.39645,
          "sum_rainfall_mm": 26.7,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500301",
          "tambon": "ต.ช่างเคิ่ง",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านป่าเท้อ",
          "latitude": 18.502457,
          "longitude": 98.346727,
          "sum_rainfall_mm": 13.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500301",
          "tambon": "ต.ช่างเคิ่ง",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านกองกาน",
          "latitude": 18.546353,
          "longitude": 98.353798,
          "sum_rainfall_mm": 14.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500301",
          "tambon": "ต.ช่างเคิ่ง",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่มิงค์",
          "latitude": 18.554995,
          "longitude": 98.402412,
          "sum_rainfall_mm": 13.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500301",
          "tambon": "ต.ช่างเคิ่ง",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่อวม (หน่วยย่อย) ",
          "latitude": 18.5526,
          "longitude": 98.41401,
          "sum_rainfall_mm": 31.799999999999997,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500302",
          "tambon": "ต.ท่าผา",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสามสบ",
          "latitude": 18.502639,
          "longitude": 98.462273,
          "sum_rainfall_mm": 12.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500302",
          "tambon": "ต.ท่าผา",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่อวม",
          "latitude": 18.507107,
          "longitude": 98.5005,
          "sum_rainfall_mm": 152.6,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500303",
          "tambon": "ต.บ้านทับ",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่แอบ",
          "latitude": 18.262339,
          "longitude": 98.168379,
          "sum_rainfall_mm": 29.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500303",
          "tambon": "ต.บ้านทับ",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ลอง",
          "latitude": 18.427973,
          "longitude": 98.240371,
          "sum_rainfall_mm": 13.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500303",
          "tambon": "ต.บ้านทับ",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสบลอง",
          "latitude": 18.394921,
          "longitude": 98.278018,
          "sum_rainfall_mm": 17.0,
          "observed_at": "2026-09-29T03:00:00+07:00"
        },
        {
          "geocode": "500303",
          "tambon": "ต.บ้านทับ",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสองธาร",
          "latitude": 18.467627,
          "longitude": 98.312965,
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500303",
          "tambon": "ต.บ้านทับ",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ที่ทำการอุทยานแห่งชาติแม่โถ (เตรียมการ)",
          "latitude": 18.25337,
          "longitude": 98.20966,
          "sum_rainfall_mm": 9.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500303",
          "tambon": "ต.บ้านทับ",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ลอง",
          "latitude": 18.433792,
          "longitude": 98.22566,
          "sum_rainfall_mm": 0.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500307",
          "tambon": "ต.ปางหินฝน",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางหินฝน",
          "latitude": 18.510205,
          "longitude": 98.229145,
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-28T21:00:00+07:00"
        },
        {
          "geocode": "500307",
          "tambon": "ต.ปางหินฝน",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่หงานหลวง",
          "latitude": 18.59508,
          "longitude": 98.241825,
          "sum_rainfall_mm": 12.5,
          "observed_at": "2026-09-29T04:00:00+07:00"
        },
        {
          "geocode": "500307",
          "tambon": "ต.ปางหินฝน",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีวิจัยต้นน้ำแม่แจ่ม",
          "latitude": 18.5223,
          "longitude": 98.2943,
          "sum_rainfall_mm": 0.4,
          "observed_at": "2026-09-28T13:00:00+07:00"
        },
        {
          "geocode": "500307",
          "tambon": "ต.ปางหินฝน",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ปางหินฝน",
          "latitude": 18.48307,
          "longitude": 98.22409,
          "sum_rainfall_mm": 14.2,
          "observed_at": "2026-09-28T18:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านขุนแม่รวม",
          "latitude": 18.915711,
          "longitude": 98.19744,
          "sum_rainfall_mm": 23.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ซา",
          "latitude": 18.814779,
          "longitude": 98.333695,
          "sum_rainfall_mm": 1.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่นาจร",
          "latitude": 18.684451,
          "longitude": 98.376045,
          "sum_rainfall_mm": 0.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสบวาก",
          "latitude": 18.639988,
          "longitude": 98.377113,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่มุ",
          "latitude": 18.727767,
          "longitude": 98.400738,
          "sum_rainfall_mm": 11.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ซา",
          "latitude": 18.81566,
          "longitude": 98.332543,
          "sum_rainfall_mm": 8.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่จอนหลวง",
          "latitude": 18.66891,
          "longitude": 98.47738,
          "sum_rainfall_mm": 121.0,
          "observed_at": "2026-09-28T21:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์บ่อแก้ว",
          "latitude": 18.86068,
          "longitude": 98.51469,
          "sum_rainfall_mm": 66.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่สะงะ",
          "latitude": 18.786606,
          "longitude": 98.495445,
          "sum_rainfall_mm": 103.80000000000001,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500305",
          "tambon": "ต.แม่นาจร",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สะพานข้ามห้วยแม่รวม บ้านแม่รวม",
          "latitude": 18.919376,
          "longitude": 98.20057,
          "sum_rainfall_mm": 43.599999999999994,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500304",
          "tambon": "ต.แม่ศึก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางอุ๋ง",
          "latitude": 18.793556,
          "longitude": 98.115298,
          "sum_rainfall_mm": 18.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500304",
          "tambon": "ต.แม่ศึก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสบแม่สะต๊อบ",
          "latitude": 18.700775,
          "longitude": 98.250846,
          "sum_rainfall_mm": 1.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500304",
          "tambon": "ต.แม่ศึก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านนากลาง",
          "latitude": 18.752393,
          "longitude": 98.261339,
          "sum_rainfall_mm": 5.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500304",
          "tambon": "ต.แม่ศึก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านนาฮ่อง",
          "latitude": 18.678816,
          "longitude": 98.342505,
          "sum_rainfall_mm": 8.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500304",
          "tambon": "ต.แม่ศึก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ศึก",
          "latitude": 18.554055,
          "longitude": 98.344541,
          "sum_rainfall_mm": 11.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500304",
          "tambon": "ต.แม่ศึก",
          "amphoe": "อ.แม่แจ่ม",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านผาละปิ",
          "latitude": 18.802806,
          "longitude": 98.230744,
          "sum_rainfall_mm": 14.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500612",
          "tambon": "ต.กื้ดช้าง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสบก๋าย",
          "latitude": 19.234176,
          "longitude": 98.783192,
          "sum_rainfall_mm": 8.5,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "500612",
          "tambon": "ต.กื้ดช้าง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสบก๋าย",
          "latitude": 19.234728,
          "longitude": 98.783885,
          "sum_rainfall_mm": 26.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500603",
          "tambon": "ต.ขี้เหล็ก",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางเปา",
          "latitude": 19.075278,
          "longitude": 98.913966,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500604",
          "tambon": "ต.ช่อแล",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีน้ำแม่งัดที่ท้ายเขื่อนแม่งัดสมบูรณ์ชล",
          "latitude": 19.156272,
          "longitude": 99.03173,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500604",
          "tambon": "ต.ช่อแล",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "เขื่อนแม่งัดสมบูรณ์ชล",
          "latitude": 19.16175,
          "longitude": 99.03968,
          "sum_rainfall_mm": 10.600000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500611",
          "tambon": "ต.บ้านช้าง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางไม้แดง",
          "latitude": 19.143328,
          "longitude": 98.865262,
          "sum_rainfall_mm": 5.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500611",
          "tambon": "ต.บ้านช้าง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสันป่าสัก",
          "latitude": 19.175631,
          "longitude": 98.856495,
          "sum_rainfall_mm": 9.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500607",
          "tambon": "ต.บ้านเป้า",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่โจ้",
          "latitude": 19.215505,
          "longitude": 99.00844,
          "sum_rainfall_mm": 3.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านทุ่งจ้อ",
          "latitude": 19.149117,
          "longitude": 98.640288,
          "sum_rainfall_mm": 20.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านป่าแป๋",
          "latitude": 19.142964,
          "longitude": 98.711134,
          "sum_rainfall_mm": 17.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่แสะ",
          "latitude": 19.244759,
          "longitude": 98.654296,
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ไคร้",
          "latitude": 19.086008,
          "longitude": 98.679136,
          "sum_rainfall_mm": 14.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ทุ่งจ๊อ",
          "latitude": 19.15252,
          "longitude": 98.64242,
          "sum_rainfall_mm": 84.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ม่อนอังเกตุ",
          "latitude": 19.106,
          "longitude": 98.6566,
          "sum_rainfall_mm": 91.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ นด.1 (โป่งเดือด)",
          "latitude": 19.24157,
          "longitude": 98.68393,
          "sum_rainfall_mm": 41.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500609",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ปางเสด็จ",
          "latitude": 19.241009,
          "longitude": 98.63501,
          "sum_rainfall_mm": 65.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500610",
          "tambon": "ต.เมืองก๋าย",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านเหล่า",
          "latitude": 19.179507,
          "longitude": 98.798434,
          "sum_rainfall_mm": 23.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500602",
          "tambon": "ต.แม่แตง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีน้ำแม่แตง (ฝายแม่แตงเหนือน้ำ)",
          "latitude": 19.157294,
          "longitude": 98.918808,
          "sum_rainfall_mm": 28.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500602",
          "tambon": "ต.แม่แตง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยป่าซาง",
          "latitude": 19.179077,
          "longitude": 98.914786,
          "sum_rainfall_mm": 5.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500602",
          "tambon": "ต.แม่แตง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยชมพู",
          "latitude": 19.17852,
          "longitude": 98.929245,
          "sum_rainfall_mm": 6.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500605",
          "tambon": "ต.แม่หอพระ",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีเขื่อนแม่งัดสมบูรณ์ชล",
          "latitude": 19.16155,
          "longitude": 99.03961,
          "sum_rainfall_mm": 15.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500605",
          "tambon": "ต.แม่หอพระ",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านป่าเลา",
          "latitude": 19.115884,
          "longitude": 99.068674,
          "sum_rainfall_mm": 4.5,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "500606",
          "tambon": "ต.สบเปิง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางฮ่าง",
          "latitude": 19.109253,
          "longitude": 98.798867,
          "sum_rainfall_mm": 16.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500606",
          "tambon": "ต.สบเปิง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านต้นลาน",
          "latitude": 19.083805,
          "longitude": 98.851241,
          "sum_rainfall_mm": 12.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500606",
          "tambon": "ต.สบเปิง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทป.5 (น้ำตกหมอกฟ้า)",
          "latitude": 19.111794,
          "longitude": 98.77532,
          "sum_rainfall_mm": 0.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500608",
          "tambon": "ต.สันป่ายาง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านผาแด่น",
          "latitude": 19.063675,
          "longitude": 98.77619,
          "sum_rainfall_mm": 5.5,
          "observed_at": "2026-09-29T01:00:00+07:00"
        },
        {
          "geocode": "500608",
          "tambon": "ต.สันป่ายาง",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทป.8 (สันป่ายาง)",
          "latitude": 19.03681,
          "longitude": 98.84541,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500601",
          "tambon": "ต.สันมหาพน",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีแม่น้ำปิงที่โครงการส่งน้ำและบำรุงรักษาแม่แฝก-แม่งัด",
          "latitude": 19.104841,
          "longitude": 98.954524,
          "sum_rainfall_mm": 7.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500601",
          "tambon": "ต.สันมหาพน",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "แม่แตง",
          "latitude": 19.12207,
          "longitude": 98.94447,
          "sum_rainfall_mm": 21.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500613",
          "tambon": "ต.อินทขิล",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สถานีน้ำแม่ปิง (P.90) บ้านทับเดื่อ",
          "latitude": 19.220478,
          "longitude": 98.972633,
          "sum_rainfall_mm": 10.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "500613",
          "tambon": "ต.อินทขิล",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางหก",
          "latitude": 19.266708,
          "longitude": 98.920113,
          "sum_rainfall_mm": 6.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "500613",
          "tambon": "ต.อินทขิล",
          "amphoe": "อ.แม่แตง",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านทับเดื่อ",
          "latitude": 19.248526,
          "longitude": 98.968513,
          "sum_rainfall_mm": 4.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501806",
          "tambon": "ต.นาเกียน",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านอูตูม",
          "latitude": 17.864283,
          "longitude": 98.209037,
          "sum_rainfall_mm": 35.0,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "501804",
          "tambon": "ต.ม่อนจอง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยหล่อดูก",
          "latitude": 17.422119,
          "longitude": 98.459433,
          "sum_rainfall_mm": 7.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501804",
          "tambon": "ต.ม่อนจอง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยปูลิง",
          "latitude": 17.505573,
          "longitude": 98.489746,
          "sum_rainfall_mm": 52.5,
          "observed_at": "2026-09-29T02:00:00+07:00"
        },
        {
          "geocode": "501804",
          "tambon": "ต.ม่อนจอง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านสันต้นม่วง",
          "latitude": 17.380294,
          "longitude": 98.476983,
          "sum_rainfall_mm": 0.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501804",
          "tambon": "ต.ม่อนจอง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านมูเซอ",
          "latitude": 17.568899,
          "longitude": 98.522465,
          "sum_rainfall_mm": 71.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501804",
          "tambon": "ต.ม่อนจอง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ขุนห้วยโป่ง",
          "latitude": 17.3246,
          "longitude": 98.51001,
          "sum_rainfall_mm": 70.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501804",
          "tambon": "ต.ม่อนจอง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สะพานพญาอาทิตราช",
          "latitude": 17.37028,
          "longitude": 98.48728,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501803",
          "tambon": "ต.แม่ตื่น",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยหล่อดูก",
          "latitude": 17.421704,
          "longitude": 98.457274,
          "sum_rainfall_mm": 3.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501803",
          "tambon": "ต.แม่ตื่น",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ระอา",
          "latitude": 17.4721,
          "longitude": 98.3436,
          "sum_rainfall_mm": 146.20000000000002,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501803",
          "tambon": "ต.แม่ตื่น",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่เทย",
          "latitude": 17.377222,
          "longitude": 98.33518,
          "sum_rainfall_mm": 2.1999999999999997,
          "observed_at": "2026-09-29T03:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านนาไคร้",
          "latitude": 17.602828,
          "longitude": 98.48199,
          "sum_rainfall_mm": 24.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหลวง",
          "latitude": 17.783779,
          "longitude": 98.368423,
          "sum_rainfall_mm": 10.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ลาน",
          "latitude": 17.694679,
          "longitude": 98.353775,
          "sum_rainfall_mm": 0.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านยางครก",
          "latitude": 17.795877,
          "longitude": 98.462839,
          "sum_rainfall_mm": 23.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านกองซาง",
          "latitude": 17.734803,
          "longitude": 98.357131,
          "sum_rainfall_mm": 33.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ตื่น",
          "latitude": 17.564354,
          "longitude": 98.50224,
          "sum_rainfall_mm": 80.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501802",
          "tambon": "ต.ยางเปียง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ขุนแม่หาด ",
          "latitude": 17.664206,
          "longitude": 98.514175,
          "sum_rainfall_mm": 156.79999999999998,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "501805",
          "tambon": "ต.สบโขง",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่หลองหลวง",
          "latitude": 17.686657,
          "longitude": 98.252978,
          "sum_rainfall_mm": 29.0,
          "observed_at": "2026-09-28T18:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านมะหินหลวง",
          "latitude": 17.899955,
          "longitude": 98.318437,
          "sum_rainfall_mm": 1.0,
          "observed_at": "2026-09-28T13:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหลิม",
          "latitude": 17.799893,
          "longitude": 98.364069,
          "sum_rainfall_mm": 19.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านผาปูนดง",
          "latitude": 17.851126,
          "longitude": 98.297761,
          "sum_rainfall_mm": 11.0,
          "observed_at": "2026-09-28T13:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านตุงลอย",
          "latitude": 17.960343,
          "longitude": 98.356519,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "สะพานน้ำแม่ต๋อม",
          "latitude": 17.799877,
          "longitude": 98.36419,
          "sum_rainfall_mm": 49.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์แม่ต๋อม",
          "latitude": 17.903154,
          "longitude": 98.30274,
          "sum_rainfall_mm": 45.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "501801",
          "tambon": "ต.อมก๋อย",
          "amphoe": "อ.อมก๋อย",
          "province": "จ.เชียงใหม่",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "อบต.อมก๋อย",
          "latitude": 17.79795,
          "longitude": 98.34148,
          "sum_rainfall_mm": 37.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "580401",
          "tambon": "ต.บ้านกาศ",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านพะมอลอ",
          "latitude": 18.178425,
          "longitude": 97.924056,
          "sum_rainfall_mm": 42.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "580401",
          "tambon": "ต.บ้านกาศ",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่หาร",
          "latitude": 18.210277,
          "longitude": 97.887441,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580401",
          "tambon": "ต.บ้านกาศ",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยหลวง",
          "latitude": 18.228757,
          "longitude": 97.922069,
          "sum_rainfall_mm": 0.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580401",
          "tambon": "ต.บ้านกาศ",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่ต๊อบเหนือ",
          "latitude": 18.268933,
          "longitude": 97.893112,
          "sum_rainfall_mm": 13.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580401",
          "tambon": "ต.บ้านกาศ",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "ที่ทำการเขตรักษาพันธุ์สัตว์ป่าสาละวิน",
          "latitude": 18.308006,
          "longitude": 97.85113,
          "sum_rainfall_mm": 47.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านอมพาย",
          "latitude": 18.298251,
          "longitude": 98.171916,
          "sum_rainfall_mm": 35.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านโก๊ะไม้หลู่",
          "latitude": 18.283374,
          "longitude": 98.08442,
          "sum_rainfall_mm": 9.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านดง",
          "latitude": 18.341266,
          "longitude": 98.080359,
          "sum_rainfall_mm": 6.0,
          "observed_at": "2026-09-28T19:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านฮากไม้เหนือ",
          "latitude": 18.302616,
          "longitude": 98.078936,
          "sum_rainfall_mm": 13.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่อุมลองน้อย",
          "latitude": 18.26343,
          "longitude": 98.013873,
          "sum_rainfall_mm": 1.5,
          "observed_at": "2026-09-28T18:00:00+07:00"
        },
        {
          "geocode": "580408",
          "tambon": "ต.ป่าแป๋",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ยางอมพาย",
          "latitude": 18.2873,
          "longitude": 98.1429,
          "sum_rainfall_mm": 91.80000000000001,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580403",
          "tambon": "ต.แม่คง",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหนองป่าแขม",
          "latitude": 18.157893,
          "longitude": 97.926343,
          "sum_rainfall_mm": 19.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580403",
          "tambon": "ต.แม่คง",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ สว.5 (ศาลา)",
          "latitude": 18.1003,
          "longitude": 97.8014,
          "sum_rainfall_mm": 3.4000000000000004,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580405",
          "tambon": "ต.แม่ยวม",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านห้วยโผ",
          "latitude": 18.030263,
          "longitude": 97.904372,
          "sum_rainfall_mm": 19.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580402",
          "tambon": "ต.แม่สะเรียง",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านป่ากล้วย",
          "latitude": 18.164142,
          "longitude": 97.955025,
          "sum_rainfall_mm": 15.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "580404",
          "tambon": "ต.แม่เหาะ",
          "amphoe": "อ.แม่สะเรียง",
          "province": "จ.แม่ฮ่องสอน",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่เหาะ",
          "latitude": 18.156277,
          "longitude": 98.072615,
          "sum_rainfall_mm": 24.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521007",
          "tambon": "ต.ดอนไฟ",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านทุ่งกวางทอง",
          "latitude": 18.110214,
          "longitude": 99.645832,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521002",
          "tambon": "ต.นาครัว",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านหลุกใต้",
          "latitude": 18.130707,
          "longitude": 99.532341,
          "sum_rainfall_mm": 11.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521004",
          "tambon": "ต.บ้านกิ่ว",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านแม่อิบ",
          "latitude": 18.028741,
          "longitude": 99.55689,
          "sum_rainfall_mm": 50.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521005",
          "tambon": "ต.บ้านบอม",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "อ่างเก็บน้ำห้วยแม่แพนน้อย ",
          "latitude": 18.0676,
          "longitude": 99.52639,
          "sum_rainfall_mm": 10.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "521005",
          "tambon": "ต.บ้านบอม",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "อ่างเก็บน้ำแม่กอง",
          "latitude": 18.05428,
          "longitude": 99.45685,
          "sum_rainfall_mm": 0.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "521001",
          "tambon": "ต.แม่ทะ",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านผาลาด",
          "latitude": 18.241118,
          "longitude": 99.596513,
          "sum_rainfall_mm": 29.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521010",
          "tambon": "ต.วังเงิน",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "TW.31",
          "latitude": 18.13277,
          "longitude": 99.620037,
          "sum_rainfall_mm": 19.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "521010",
          "tambon": "ต.วังเงิน",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านปางมะโอ",
          "latitude": 18.052537,
          "longitude": 99.665897,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521011",
          "tambon": "ต.สันดอนแก้ว",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านด่าน",
          "latitude": 17.996171,
          "longitude": 99.509398,
          "sum_rainfall_mm": 21.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "521011",
          "tambon": "ต.สันดอนแก้ว",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "อ่างฯแม่ยอนสันดอนแก้ว",
          "latitude": 17.97243,
          "longitude": 99.48753,
          "sum_rainfall_mm": 111.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "521008",
          "tambon": "ต.หัวเสือ",
          "amphoe": "อ.แม่ทะ",
          "province": "จ.ลำปาง",
          "region_id": "4",
          "region_name": "ภาคเหนือ",
          "station": "บ้านนายาบ",
          "latitude": 18.143931,
          "longitude": 99.713698,
          "sum_rainfall_mm": 8.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 93.80000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 139.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 146.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 177.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 3.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 191.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 129.40000000000003,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "observed_at": "2026-09-28T13:00:00+07:00"
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
          "sum_rainfall_mm": 306.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 94.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 52.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 91.80000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 4.5,
          "observed_at": "2026-09-27T13:00:00+07:00"
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
          "sum_rainfall_mm": 105.20000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 4.0,
          "observed_at": "2026-09-27T11:00:00+07:00"
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
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-27T14:00:00+07:00"
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
          "sum_rainfall_mm": 30.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 113.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 96.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 137.20000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710202",
          "tambon": "ต.ท่าเสา",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านพุพง",
          "latitude": 14.219713,
          "longitude": 99.099697,
          "sum_rainfall_mm": 48.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710202",
          "tambon": "ต.ท่าเสา",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านปากแซง (K.58)",
          "latitude": 14.215,
          "longitude": 99.058,
          "sum_rainfall_mm": 90.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710202",
          "tambon": "ต.ท่าเสา",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.ท่าเสา",
          "latitude": 14.21606,
          "longitude": 99.08133,
          "sum_rainfall_mm": 102.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710202",
          "tambon": "ต.ท่าเสา",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทย.1 (น้ำตกไทรโยคน้อย)",
          "latitude": 14.2385,
          "longitude": 99.05989,
          "sum_rainfall_mm": 104.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710204",
          "tambon": "ต.ไทรโยค",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านแม่น้ำน้อย",
          "latitude": 14.44497,
          "longitude": 98.80493,
          "sum_rainfall_mm": 22.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710204",
          "tambon": "ต.ไทรโยค",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทย.8 (เขารวก)",
          "latitude": 14.527559,
          "longitude": 98.66175,
          "sum_rainfall_mm": 197.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710204",
          "tambon": "ต.ไทรโยค",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติไทรโยค",
          "latitude": 14.4545,
          "longitude": 98.84806,
          "sum_rainfall_mm": 107.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710204",
          "tambon": "ต.ไทรโยค",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ลิ่นถิ่น",
          "latitude": 14.53559,
          "longitude": 98.78764,
          "sum_rainfall_mm": 94.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710207",
          "tambon": "ต.บ้องตี้",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านบ้องตี้บน",
          "latitude": 14.073463,
          "longitude": 98.991506,
          "sum_rainfall_mm": 3.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710207",
          "tambon": "ต.บ้องตี้",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านทุ่งมะเซอย่อ",
          "latitude": 14.171646,
          "longitude": 98.958187,
          "sum_rainfall_mm": 25.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710201",
          "tambon": "ต.ลุ่มสุ่ม",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านลุ่มสุ่ม (K.10)",
          "latitude": 14.09336,
          "longitude": 99.17583,
          "sum_rainfall_mm": 81.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710201",
          "tambon": "ต.ลุ่มสุ่ม",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ไทรโยค",
          "latitude": 14.11265,
          "longitude": 99.14635,
          "sum_rainfall_mm": 77.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710205",
          "tambon": "ต.วังกระแจะ",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ทย.6 (เขาพลู)",
          "latitude": 14.266877,
          "longitude": 98.77193,
          "sum_rainfall_mm": 196.3,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710206",
          "tambon": "ต.ศรีมงคล",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านวังน้ำเขียว",
          "latitude": 14.035485,
          "longitude": 99.1185,
          "sum_rainfall_mm": 62.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710206",
          "tambon": "ต.ศรีมงคล",
          "amphoe": "อ.ไทรโยค",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.ศรีมงคล",
          "latitude": 14.02271,
          "longitude": 99.19147,
          "sum_rainfall_mm": 74.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 40.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 45.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710405",
          "tambon": "ต.เขาโจด",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติเฉลิมรัตนโกสินทร์",
          "latitude": 14.66122,
          "longitude": 99.30444,
          "sum_rainfall_mm": 77.60000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710402",
          "tambon": "ต.ด่านแม่แฉลบ",
          "amphoe": "อ.ศรีสวัสดิ์",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติเขื่อนศรีนครินทร์",
          "latitude": 14.6359,
          "longitude": 98.9916,
          "sum_rainfall_mm": 120.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 81.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 48.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 105.29999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 56.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
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
          "sum_rainfall_mm": 69.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
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
          "sum_rainfall_mm": 68.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710802",
          "tambon": "ต.ปรังเผล",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านวังขยาย",
          "latitude": 14.941283,
          "longitude": 98.617612,
          "sum_rainfall_mm": 15.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "710802",
          "tambon": "ต.ปรังเผล",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติเขาแหลม",
          "latitude": 15.02447,
          "longitude": 98.59832,
          "sum_rainfall_mm": 95.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710803",
          "tambon": "ต.ไล่โว่",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "รร.กองม่องทะ สาขาไล่โว่",
          "latitude": 15.30931,
          "longitude": 98.50981,
          "sum_rainfall_mm": 132.39999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710803",
          "tambon": "ต.ไล่โว่",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "รร.กองม่องทะ สาขาสะละวะ",
          "latitude": 15.344161,
          "longitude": 98.52554,
          "sum_rainfall_mm": 97.80000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "710801",
          "tambon": "ต.หนองลู",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านห้วยกบ",
          "latitude": 15.212611,
          "longitude": 98.368496,
          "sum_rainfall_mm": 6.5,
          "observed_at": "2026-09-27T22:00:00+07:00"
        },
        {
          "geocode": "710801",
          "tambon": "ต.หนองลู",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านเวียคะดี้",
          "latitude": 15.184407,
          "longitude": 98.325739,
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-28T01:00:00+07:00"
        },
        {
          "geocode": "710801",
          "tambon": "ต.หนองลู",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อำเภอสังขละบุรี",
          "latitude": 15.15558,
          "longitude": 98.44962,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-27T14:00:00+07:00"
        },
        {
          "geocode": "710801",
          "tambon": "ต.หนองลู",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านเวียคะดี้",
          "latitude": 15.18783,
          "longitude": 98.32513,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-27T14:00:00+07:00"
        },
        {
          "geocode": "710801",
          "tambon": "ต.หนองลู",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ซองกาเลีย",
          "latitude": 15.215669,
          "longitude": 98.386665,
          "sum_rainfall_mm": 10.2,
          "observed_at": "2026-09-27T21:00:00+07:00"
        },
        {
          "geocode": "710801",
          "tambon": "ต.หนองลู",
          "amphoe": "อ.สังขละบุรี",
          "province": "จ.กาญจนบุรี",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบต.หนองลู",
          "latitude": 15.19546,
          "longitude": 98.46124,
          "sum_rainfall_mm": 70.8,
          "observed_at": "2026-09-28T05:00:00+07:00"
        },
        {
          "geocode": "630502",
          "tambon": "ต.แม่ต้าน",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านขุนห้วยแม่ต้าน",
          "latitude": 17.271742,
          "longitude": 98.237454,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-28T16:00:00+07:00"
        },
        {
          "geocode": "630505",
          "tambon": "ต.แม่วะหลวง",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "รร.แม่อมกิ",
          "latitude": 17.75395,
          "longitude": 97.96277,
          "sum_rainfall_mm": 81.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630505",
          "tambon": "ต.แม่วะหลวง",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "โรงพยาบาลส่งเสริมสุขภาพตำบล บ้านแม่เหว่ย",
          "latitude": 17.695904,
          "longitude": 97.88761,
          "sum_rainfall_mm": 6.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630503",
          "tambon": "ต.แม่สอง",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อุทยานแห่งชาติแม่เมย",
          "latitude": 17.483812,
          "longitude": 98.07418,
          "sum_rainfall_mm": 165.60000000000002,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630503",
          "tambon": "ต.แม่สอง",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "สถานบริการสาธารณสุขชุมชนบ้านทีโบ๊ะคี",
          "latitude": 17.5003,
          "longitude": 98.2624,
          "sum_rainfall_mm": 39.599999999999994,
          "observed_at": "2026-09-29T02:00:00+07:00"
        },
        {
          "geocode": "630504",
          "tambon": "ต.แม่หละ",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านขุนห้วยนกกก",
          "latitude": 17.249846,
          "longitude": 98.349577,
          "sum_rainfall_mm": 17.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630504",
          "tambon": "ต.แม่หละ",
          "amphoe": "อ.ท่าสองยาง",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยจัดการต้นน้ำและพัฒนาชุมชนในพื้นที่ป่าอนุรักษ์ดอยเปเปอร์",
          "latitude": 17.264994,
          "longitude": 98.35863,
          "sum_rainfall_mm": 136.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630204",
          "tambon": "ต.ตากตก",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองชะลาบ",
          "latitude": 17.001791,
          "longitude": 99.101539,
          "sum_rainfall_mm": 31.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630204",
          "tambon": "ต.ตากตก",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านตาก",
          "latitude": 17.04066,
          "longitude": 99.06628,
          "sum_rainfall_mm": 85.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630201",
          "tambon": "ต.ตากออก",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติดอยสอยมาลัย-ไม้กลายเป็นหิน",
          "latitude": 17.056845,
          "longitude": 99.0743,
          "sum_rainfall_mm": 75.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630207",
          "tambon": "ต.ท้องฟ้า",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านท้องฟ้า",
          "latitude": 17.04663,
          "longitude": 98.978991,
          "sum_rainfall_mm": 180.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630207",
          "tambon": "ต.ท้องฟ้า",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านห้วยพลู",
          "latitude": 17.074818,
          "longitude": 98.910903,
          "sum_rainfall_mm": 71.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630207",
          "tambon": "ต.ท้องฟ้า",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านท้องฟ้า",
          "latitude": 17.049327,
          "longitude": 98.976112,
          "sum_rainfall_mm": 67.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630203",
          "tambon": "ต.แม่สลิด",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านยางโองนอก",
          "latitude": 17.15904,
          "longitude": 99.148994,
          "sum_rainfall_mm": 28.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630203",
          "tambon": "ต.แม่สลิด",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านเด่นไม้ซุง",
          "latitude": 17.239535,
          "longitude": 99.249512,
          "sum_rainfall_mm": 29.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630202",
          "tambon": "ต.สมอโคน",
          "amphoe": "อ.บ้านตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านชัยมงคล",
          "latitude": 17.015963,
          "longitude": 99.191959,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630107",
          "tambon": "ต.โป่งแดง",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองมะค่า",
          "latitude": 17.014068,
          "longitude": 99.396445,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630107",
          "tambon": "ต.โป่งแดง",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านโป่งแดง",
          "latitude": 17.061694,
          "longitude": 99.271171,
          "sum_rainfall_mm": 53.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630107",
          "tambon": "ต.โป่งแดง",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองนกปีกกา",
          "latitude": 17.130709,
          "longitude": 99.250871,
          "sum_rainfall_mm": 23.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630107",
          "tambon": "ต.โป่งแดง",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านตลุกป่าตาล",
          "latitude": 16.985977,
          "longitude": 99.273449,
          "sum_rainfall_mm": 16.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630111",
          "tambon": "ต.แม่ท้อ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านลีซอ",
          "latitude": 16.766504,
          "longitude": 98.934656,
          "sum_rainfall_mm": 51.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630111",
          "tambon": "ต.แม่ท้อ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านลานสาง",
          "latitude": 16.794436,
          "longitude": 99.031213,
          "sum_rainfall_mm": 86.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630111",
          "tambon": "ต.แม่ท้อ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติลานสาง",
          "latitude": 16.77711,
          "longitude": 99.005714,
          "sum_rainfall_mm": 56.00000000000001,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630111",
          "tambon": "ต.แม่ท้อ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ที่ทำการอุทยานแห่งชาติตากสินมหาราช",
          "latitude": 16.775963,
          "longitude": 98.92825,
          "sum_rainfall_mm": 136.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630101",
          "tambon": "ต.ระแหง",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อบจ.ตาก",
          "latitude": 16.87779,
          "longitude": 99.13964,
          "sum_rainfall_mm": 82.8,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630114",
          "tambon": "ต.วังประจบ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านแก่งหิน",
          "latitude": 16.896385,
          "longitude": 99.335101,
          "sum_rainfall_mm": 17.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630114",
          "tambon": "ต.วังประจบ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านโป่งแค",
          "latitude": 16.926296,
          "longitude": 99.409849,
          "sum_rainfall_mm": 17.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630113",
          "tambon": "ต.หนองบัวใต้",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำตลุกหิน",
          "latitude": 16.81018,
          "longitude": 99.08733,
          "sum_rainfall_mm": 161.29999999999998,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630105",
          "tambon": "ต.หนองบัวเหนือ",
          "amphoe": "อ.เมืองตาก",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านไร่ท่าตะกู",
          "latitude": 16.950079,
          "longitude": 99.040781,
          "sum_rainfall_mm": 71.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630609",
          "tambon": "ต.ด่านแม่ละเมา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านห้วยพลู",
          "latitude": 16.792853,
          "longitude": 98.803716,
          "sum_rainfall_mm": 23.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630609",
          "tambon": "ต.ด่านแม่ละเมา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "พิพิธภัณฑ์ธรรมชาติบ้านห้วยปลาหลด",
          "latitude": 16.783789,
          "longitude": 98.89485,
          "sum_rainfall_mm": 127.00000000000003,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630606",
          "tambon": "ต.ท่าสายลวด",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "วัดวังตะเคียน",
          "latitude": 16.71145,
          "longitude": 98.50671,
          "sum_rainfall_mm": 2.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630610",
          "tambon": "ต.พระธาตุผาแดง",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านขุนห้วยแม่สอด",
          "latitude": 16.716892,
          "longitude": 98.663356,
          "sum_rainfall_mm": 13.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630603",
          "tambon": "ต.พะวอ",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านแม่ละเมา",
          "latitude": 16.805604,
          "longitude": 98.742616,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-28T19:00:00+07:00"
        },
        {
          "geocode": "630603",
          "tambon": "ต.พะวอ",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ ตม.๓ (ปูแป้)",
          "latitude": 16.852543,
          "longitude": 98.770515,
          "sum_rainfall_mm": 60.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630608",
          "tambon": "ต.มหาวัน",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านเจดีย์โคะ",
          "latitude": 16.554722,
          "longitude": 98.700333,
          "sum_rainfall_mm": 11.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630605",
          "tambon": "ต.แม่กาษา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านแม่กึ๊ดสามท่า",
          "latitude": 16.835852,
          "longitude": 98.59166,
          "sum_rainfall_mm": 49.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630605",
          "tambon": "ต.แม่กาษา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านวังผา",
          "latitude": 16.830552,
          "longitude": 98.539078,
          "sum_rainfall_mm": 58.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630605",
          "tambon": "ต.แม่กาษา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านไทยสามัคคี",
          "latitude": 16.791076,
          "longitude": 98.595603,
          "sum_rainfall_mm": 21.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630605",
          "tambon": "ต.แม่กาษา",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านแม่กาษาใหม่ไหล่ท่า",
          "latitude": 16.876106,
          "longitude": 98.621776,
          "sum_rainfall_mm": 16.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630602",
          "tambon": "ต.แม่กุ",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านผาลาด",
          "latitude": 16.627004,
          "longitude": 98.6033,
          "sum_rainfall_mm": 0.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630607",
          "tambon": "ต.แม่ปะ",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านห้วยหินฝน",
          "latitude": 16.762068,
          "longitude": 98.644521,
          "sum_rainfall_mm": 3.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630607",
          "tambon": "ต.แม่ปะ",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านปากห้วยแม่ปะ",
          "latitude": 16.760177,
          "longitude": 98.526575,
          "sum_rainfall_mm": 27.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630601",
          "tambon": "ต.แม่สอด",
          "amphoe": "อ.แม่สอด",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ห้วยแม่สอด",
          "latitude": 16.716882,
          "longitude": 98.558861,
          "sum_rainfall_mm": 55.0,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านใหม่สามัคคี",
          "latitude": 17.284697,
          "longitude": 99.056294,
          "sum_rainfall_mm": 0.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านหนองเชียงคา",
          "latitude": 17.345768,
          "longitude": 99.050204,
          "sum_rainfall_mm": 32.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำห้วยคลองไม้แดง",
          "latitude": 17.30193,
          "longitude": 99.0265,
          "sum_rainfall_mm": 77.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำสองแควเหนือ",
          "latitude": 17.35603,
          "longitude": 99.02463,
          "sum_rainfall_mm": 2.2,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำสองแควใต้",
          "latitude": 17.32797,
          "longitude": 99.02184,
          "sum_rainfall_mm": 126.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำสองแควหลวง",
          "latitude": 17.37875,
          "longitude": 99.01148,
          "sum_rainfall_mm": 135.5,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำหนองเข้",
          "latitude": 17.34999,
          "longitude": 99.06564,
          "sum_rainfall_mm": 5.3999999999999995,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630303",
          "tambon": "ต.ยกกระบัตร",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "อ่างเก็บน้ำหนองก้างปลา",
          "latitude": 17.31207,
          "longitude": 99.09735,
          "sum_rainfall_mm": 77.4,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630304",
          "tambon": "ต.ย่านรี",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านท่าปุยตก",
          "latitude": 17.238224,
          "longitude": 99.021362,
          "sum_rainfall_mm": 53.0,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630306",
          "tambon": "ต.วังจันทร์",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "บ้านดงลาน",
          "latitude": 17.277752,
          "longitude": 99.137413,
          "sum_rainfall_mm": 20.5,
          "observed_at": "2026-09-29T06:00:00+07:00"
        },
        {
          "geocode": "630306",
          "tambon": "ต.วังจันทร์",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "หน่วยพิทักษ์อุทยานแห่งชาติที่ มว.3 (ดงลาน)",
          "latitude": 17.2975,
          "longitude": 99.1891,
          "sum_rainfall_mm": 31.2,
          "observed_at": "2026-09-29T05:00:00+07:00"
        },
        {
          "geocode": "630302",
          "tambon": "ต.วังหมัน",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "สามเงา",
          "latitude": 17.26053,
          "longitude": 99.07797,
          "sum_rainfall_mm": 70.6,
          "observed_at": "2026-09-29T07:00:00+07:00"
        },
        {
          "geocode": "630301",
          "tambon": "ต.สามเงา",
          "amphoe": "อ.สามเงา",
          "province": "จ.ตาก",
          "region_id": "5",
          "region_name": "ภาคตะวันตก",
          "station": "ศูนย์ดูแลผู้สูงอายุ ทต.สามเงา",
          "latitude": 17.22486,
          "longitude": 99.05115,
          "sum_rainfall_mm": 23.800000000000004,
          "observed_at": "2026-09-29T07:00:00+07:00"
        }
      ],
      "risk_map": "https://api.hii.or.th/v2/proxy-image/3days_riskmap_27_09_2026.png?1790644026",
      "source_url": "https://api.hii.or.th/v2/4UQaYnf0Bx4fXPYyCdDRbqHyXH9Ixvd2nVUjaN1cLBY=/warning/flashflood-48h"
    }
  }
};
