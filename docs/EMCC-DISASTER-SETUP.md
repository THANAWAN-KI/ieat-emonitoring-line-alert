# คู่มือติดตั้ง EMCC Disaster Webhook

ระบบนี้แยกจาก e-Monitoring และใช้ LINE Official Account ของ **emcc_disaster** โดยเฉพาะ

## ความสามารถในชุดเริ่มต้น

- รับข้อความจากเจ้าหน้าที่ใน LINE แบบ Webhook และตอบกลับทันที
- จำแนกประเภทเหตุ 6 กลุ่ม
- ค้นชื่อบริษัท/สถานประกอบการจากฐานข้อมูลวัตถุอันตรายที่กำหนด
- วิเคราะห์ข้อมูลสนับสนุนเบื้องต้น
- สร้างลิงก์ไปยังหน้าจัดทำรายงานตามประเภทเหตุ
- แก้ไขรายละเอียดรายงานและส่งออก PNG บนอุปกรณ์ของผู้ใช้
- รับเหตุจากระบบภายนอกที่รองรับ Webhook ผ่าน `POST /events`
- รองรับ KV เพื่อป้องกัน Webhook เหตุเดิมส่งซ้ำ

> ข้อมูลจากหน่วยงานที่ไม่มี Webhook ยังต้องใช้การตรวจ API/RSS เป็นระยะ GitHub Actions ทำได้เร็วสุดโดยทั่วไปประมาณ 5 นาที

## 1. เตรียมข้อมูลจาก LINE Developers

ใช้ Channel ของ `emcc_disaster` เท่านั้น ห้ามใช้ค่าของ e-Monitoring

ต้องมี:

1. Channel secret
2. Channel access token
3. User ID, Group ID หรือ Room ID ที่ต้องการรับ Push Alert

ค่าทั้งหมดจะบันทึกเป็น Secret ใน Cloudflare Worker และไม่ควรเขียนลง GitHub

## 2. ติดตั้ง Cloudflare Worker

ต้องมี Node.js รุ่นปัจจุบันและบัญชี Cloudflare

```bash
cd cloudflare-worker
npm install
npx wrangler login
```

เพิ่ม Secret ทีละรายการ:

```bash
npx wrangler secret put LINE_CHANNEL_SECRET
npx wrangler secret put LINE_CHANNEL_ACCESS_TOKEN
npx wrangler secret put LINE_TARGET_ID
npx wrangler secret put EMCC_WEBHOOK_SECRET
```

- `LINE_CHANNEL_SECRET`: Channel secret ของ emcc_disaster
- `LINE_CHANNEL_ACCESS_TOKEN`: Channel access token ของ emcc_disaster
- `LINE_TARGET_ID`: ห้องหรือผู้รับ Push Alert
- `EMCC_WEBHOOK_SECRET`: ตั้งข้อความลับใหม่สำหรับป้องกัน `POST /events`

ตรวจสอบและ Deploy:

```bash
npm run check
npm run deploy
```

เมื่อสำเร็จจะได้ URL ลักษณะนี้:

```text
https://emcc-disaster-webhook.<ชื่อบัญชี>.workers.dev
```

ตรวจสุขภาพระบบ:

```text
https://emcc-disaster-webhook.<ชื่อบัญชี>.workers.dev/health
```

ควรแสดง `{"ok":true}`

## 3. เชื่อม LINE Webhook

ใน LINE Developers Console ของ emcc_disaster:

1. เปิด Messaging API
2. ใส่ Webhook URL เป็น
   `https://emcc-disaster-webhook.<ชื่อบัญชี>.workers.dev/line-webhook`
3. กด Verify
4. เปิด **Use webhook**
5. ปิด Auto-reply หากไม่ต้องการให้ข้อความตอบกลับซ้ำ

## 4. ทดสอบจาก LINE

ส่งข้อความตัวอย่างในห้อง emcc_disaster:

```text
ไฟไหม้ บริษัท ABC มีควันบริเวณคลังสินค้า เวลา 14:20 น.
```

```text
สารเคมีรั่วไหล บริษัท XYZ มีกลิ่นผิดปกติ ลมพัดไปทางทิศตะวันออก
```

```text
ซ้อมแผน บริษัท XYZ วันที่ 30 สิงหาคม 2569 เวลา 09:00 น.
```

ระบบควรตอบกลับเป็น Flex Message พร้อม:

- ประเภทเหตุ
- บริษัท/พื้นที่ที่ค้นพบ
- วิเคราะห์ข้อมูลสนับสนุนเบื้องต้น
- ปุ่ม **จัดทำรายงานและส่งออก PNG**

หากต้องการดูวิธีใช้ ให้พิมพ์ `ช่วยเหลือ`

## 5. หน้าจัดทำรายงานและ PNG

URL:

```text
https://thanawan-ki.github.io/ieat-emonitoring-line-alert/emcc-report.html
```

ข้อมูลจาก LINE จะถูกกรอกผ่าน query parameters อัตโนมัติ เจ้าหน้าที่สามารถแก้ไข:

- ประเภทเหตุ
- บริษัท นิคมอุตสาหกรรม และสถานที่
- วันเวลา
- สถานการณ์ล่าสุด
- ผลกระทบ
- การดำเนินการ
- การวิเคราะห์และข้อเสนอแนะ
- แหล่งข้อมูล ผู้จัดทำ และสถานะ

ปุ่ม **ส่งออกรายงาน PNG** สร้างไฟล์บนอุปกรณ์ของผู้ใช้ ข้อมูลในแบบฟอร์มไม่ถูกอัปโหลดกลับไปยังเซิร์ฟเวอร์

## 6. รับเหตุจากระบบภายนอก

ระบบที่รองรับ Webhook สามารถส่ง JSON มายัง `POST /events`

ตัวอย่าง:

```bash
curl -X POST "https://emcc-disaster-webhook.<ชื่อบัญชี>.workers.dev/events" \
  -H "Authorization: Bearer <EMCC_WEBHOOK_SECRET>" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "tmd-warning-20260826-01",
    "type": "พายุและอากาศรุนแรง",
    "title": "ประกาศเตือนพายุ",
    "details": "มีผลกระทบในหลายจังหวัด",
    "severity": "เตือนภัย",
    "location": "ภาคเหนือ",
    "source": "กรมอุตุนิยมวิทยา",
    "source_url": "https://www.tmd.go.th/"
  }'
```

ฟิลด์ `id` ต้องคงที่สำหรับเหตุเดียวกัน เพื่อให้ KV ป้องกันการส่งซ้ำได้

## 7. เปิดระบบป้องกันเหตุซ้ำด้วย KV

สร้าง KV:

```bash
npx wrangler kv namespace create EVENTS_KV
```

นำ ID ที่ได้ไปใส่ใน `wrangler.toml` และยกเลิก comment:

```toml
[[kv_namespaces]]
binding = "EVENTS_KV"
id = "ID_ที่ได้จากคำสั่ง"
```

จากนั้น Deploy ใหม่:

```bash
npm run deploy
```

## 8. แผนเชื่อมแหล่งข้อมูลภัย

| ประเภทเหตุ | แนวทางรับข้อมูล |
|---|---|
| แผ่นดินไหว/สึนามิ | ใช้ Webhook เมื่อผู้ให้บริการรองรับ; สำรองด้วย TMD RSS ทุก 5 นาที |
| พายุ/อากาศรุนแรง | ประกาศ TMD; ใช้ Webhook adapter หรือ polling เมื่อไม่มี Webhook |
| ฝนหนัก/น้ำท่วม/น้ำป่า | ThaiWater, GeoJSON และข้อมูลเตือนภัย; polling ตามรอบการเผยแพร่ |
| ไฟป่า/จุดความร้อน | GISTDA หรือแหล่ง Hotspot ที่อนุญาต; polling ตามรอบข้อมูลดาวเทียม |
| เหตุโรงงาน/ไฟไหม้/สารเคมี | เจ้าหน้าที่พิมพ์ใน LINE หรือส่งจาก ArcGIS/Survey123 ไป `/events` |
| ภัยแล้ง/สถานการณ์น้ำ | ThaiWater และประกาศหน่วยงาน; polling ตามรอบข้อมูล |

## 9. ข้อควรระวัง

- การวิเคราะห์เป็นข้อมูลสนับสนุนเบื้องต้น เจ้าหน้าที่ต้องยืนยันกับแหล่งข้อมูลทางการ
- อย่าส่ง Channel token, Channel secret หรือ Webhook secret ใน LINE หรือ commit ลง GitHub
- กำหนดสิทธิ์ผู้ใช้งาน LINE OA และ Cloudflare ให้เฉพาะผู้รับผิดชอบ
- ควรทดสอบด้วยข้อความที่ระบุว่าเป็นการซ้อมก่อนเปิดใช้งานจริง
- หาก Flex Message ส่งไม่ได้ ให้ตรวจขนาดข้อความและ LINE quota
