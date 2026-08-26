import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const url = "https://twa.thaiwater.net/th/map/basic/overall/overall/0?ds=rr%2Csc&p=hide&c=104.14958%2C12.63781%2C3.114z";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
try {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.locator(".maplibregl-map").waitFor({ state: "visible", timeout: 90000 });
  await page.waitForTimeout(25000);
  const map = page.locator(".maplibregl-map");
  await mkdir("docs/assets", { recursive: true });
  await mkdir("docs/data", { recursive: true });
  await map.screenshot({ path: "docs/assets/thaiwater-overall-latest.png" });
  const updatedAt = new Date().toISOString();
  await writeFile("docs/data/thaiwater-map-meta.js", `window.THAIWATER_MAP_META={updatedAt:${JSON.stringify(updatedAt)},sourceUrl:${JSON.stringify(url)}};\n`);
  console.log("Saved ThaiWater map at", updatedAt);
} finally {
  await browser.close();
}
