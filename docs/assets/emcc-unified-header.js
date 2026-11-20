(() => {
  'use strict';
  const home = 'https://emcc-gis.pages.dev/';
  const riskSite = 'https://thanawan-ki.github.io/ieat-emonitoring-line-alert/';
  const dataSite = 'https://nawakonnakhonchai-wq.github.io/';
  const water = 'https://water-used-dashboard.nawakonnakhonchai.workers.dev/';
  const monitoring = dataSite + 'E-Monitoring_Dashboard/';
  const riskMap = riskSite + 'dss-riskmap.html?view=data';
  const groups = [
    ['EMCC DASHBOARD', [
      ['ผู้ประกอบการในนิคมฯ (e-PP)', dataSite + 'epp_dashboard/'],
      ['DSS', riskSite + 'dss.html'],
      ['E-Monitoring สิ่งแวดล้อม', monitoring],
      ['สถิติอุบัติเหตุ EMCC', dataSite + 'Emergency_dashboard/'],
      ['การใช้น้ำ นิคมฯ / ท่าเรือฯ', water],
    ]],
    ['EMCC RISK MAP', [
      ['ไฟไหม้', riskSite + 'fire-report.html?view=data&hazard=fire#riskCoverage'],
      ['น้ำท่วม', dataSite + 'rid-geojson-bot/#overview'],
      ['ภัยแล้ง', water],
      ['ฝุ่น PM2.5', monitoring],
      ['แผ่นดินไหว', 'https://tmd-earthquake.nawakonnakhonchai.workers.dev/'],
      ['สารเคมีรั่วไหล', riskSite + 'chemical-report.html?view=data'],
    ]],
  ];

  function link(text, url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.textContent = text;
    const matchesPage = anchor.origin === location.origin && anchor.pathname === location.pathname;
    if (matchesPage) anchor.setAttribute('aria-current', 'page');
    return anchor;
  }

  function loadRenderer() {
    if (typeof window.html2canvas === 'function') return Promise.resolve(window.html2canvas);
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      script.onload = () => typeof window.html2canvas === 'function'
        ? resolve(window.html2canvas) : reject(new Error('Renderer unavailable'));
      script.onerror = reject;
      document.head.append(script);
    });
  }

  const styles = document.createElement('style');
  styles.textContent = `
    .emcc-unified{position:relative;z-index:5000;isolation:isolate;background:#fff;color:#151515;font:400 16px/1.5 Sarabun,Tahoma,sans-serif;text-align:start}
    .emcc-unified *{box-sizing:border-box}
    .emcc-unified a,.emcc-unified summary,.emcc-unified button{font:inherit;text-decoration:none;letter-spacing:normal;text-transform:none;color:inherit}
    .emcc-unified a:focus-visible,.emcc-unified summary:focus-visible,.emcc-unified button:focus-visible{outline:2px solid #efb830;outline-offset:-3px}
    .emcc-unified .emcc-unified-top{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:50px;padding:4px clamp(12px,3vw,36px)}
    .emcc-unified .emcc-unified-brand{font-weight:700;letter-spacing:.08em}
    .emcc-unified .emcc-unified-camera{display:grid;place-items:center;width:42px;height:42px;padding:8px;border:1px solid #d8d4dd;border-radius:4px;background:#fff;color:#3d2157;cursor:pointer}
    .emcc-unified .emcc-unified-camera:disabled{opacity:.55;cursor:wait}
    .emcc-unified-camera svg{width:24px;height:24px}
    .emcc-unified .emcc-unified-nav{display:flex;align-items:stretch;justify-content:flex-end;min-height:60px;padding:0;background:#503371;color:#fff}
    .emcc-unified .emcc-unified-nav>a,.emcc-unified summary{display:flex;align-items:center;justify-content:center;gap:8px;min-height:60px;height:100%;padding:0 clamp(10px,2vw,28px);background:#3e225b;color:#fff;border-inline-start:1px solid #ffffff27;white-space:nowrap;cursor:pointer}
    .emcc-unified summary::after{content:'⌄';font-size:14px}
    .emcc-unified details[open]>summary::after{transform:rotate(180deg)}
    .emcc-unified summary::-webkit-details-marker{display:none}
    .emcc-unified .emcc-unified-menu{position:relative;margin:0;padding:0;border:0}
    .emcc-unified .emcc-unified-dropdown{position:absolute;z-index:2;inset-block-start:100%;inset-inline-end:0;width:min(384px,calc(100vw - 20px));max-height:min(72dvh,680px);overflow:auto;background:#142330f5;color:#fff;padding:6px;border-radius:5px;box-shadow:0 8px 24px #0003}
    .emcc-unified .emcc-unified-dropdown strong{display:block;padding:10px 14px 4px;color:#d8e4ed;font-size:13px}
    .emcc-unified .emcc-unified-dropdown strong:not(:first-child){border-top:1px solid #ffffff32;margin-top:6px}
    .emcc-unified .emcc-unified-dropdown a{display:block;padding:10px 14px;color:#fff}
    .emcc-unified .emcc-unified-dropdown a:hover,.emcc-unified .emcc-unified-dropdown a[aria-current=page],.emcc-unified .emcc-unified-nav>[aria-current=page]{background:#ffffff25}
    .emcc-unified .emcc-unified-status{margin:0;padding:7px 16px;font-size:14px}
    .emcc-unified [hidden],.emcc-unified-replaced{display:none!important}
    @media(max-width:530px){.emcc-unified .emcc-unified-dropdown{position:fixed;inset:110px 10px auto;width:auto}}
  `;
  document.head.append(styles);

  const header = document.createElement('header');
  header.className = 'emcc-unified';
  header.setAttribute('data-html2canvas-ignore', '');
  const top = document.createElement('div');
  top.className = 'emcc-unified-top';
  const brand = link('EMCC GIS', home);
  brand.className = 'emcc-unified-brand';
  const camera = document.createElement('button');
  camera.type = 'button';
  camera.className = 'emcc-unified-camera';
  camera.title = 'ดาวน์โหลดภาพ Dashboard (PNG)';
  camera.setAttribute('aria-label', camera.title);
  camera.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M3 6h4l2-3h6l2 3h4v14H3z"/><circle cx="12" cy="13" r="4"/></svg>';
  top.append(brand, camera);

  const nav = document.createElement('nav');
  nav.className = 'emcc-unified-nav';
  nav.setAttribute('aria-label', 'เมนูหลัก EMCC GIS');
  const menu = document.createElement('details');
  menu.className = 'emcc-unified-menu';
  const summary = document.createElement('summary');
  summary.textContent = 'ข้อมูล';
  const dropdown = document.createElement('div');
  dropdown.className = 'emcc-unified-dropdown';
  for (const [label, entries] of groups) {
    const heading = document.createElement('strong');
    heading.textContent = label;
    dropdown.append(heading, ...entries.map(([name, url]) => link(name, url)));
  }
  dropdown.append(link('ดูระบบทั้งหมด ↓', home + '#systems'));
  menu.append(summary, dropdown);
  nav.append(link('ภาพรวม', home), menu, link('Risk map', riskMap));
  const status = document.createElement('p');
  status.className = 'emcc-unified-status';
  status.setAttribute('role', 'status');
  status.hidden = true;
  header.append(top, nav, status);

  document.querySelectorAll('.emcc-site-header,.emcc-gis-header').forEach(previous => {
    previous.classList.add('emcc-unified-replaced');
    previous.setAttribute('data-html2canvas-ignore', '');
  });
  document.body.prepend(header);
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) menu.open = false;
  });
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menu.open = false;
      summary.focus();
    }
  });
  camera.addEventListener('click', async () => {
    const nativeExport = location.origin + location.pathname === monitoring
      ? document.getElementById('downloadDashboard') : null;
    if (nativeExport) {
      nativeExport.click();
      return;
    }

    camera.disabled = true;
    status.hidden = false;
    status.textContent = 'กำลังสร้างภาพ Dashboard…';
    try {
      const render = await loadRenderer();
      await document.fonts?.ready;
      const dashboard = document.querySelector('main') || document.body;
      const canvas = await render(dashboard, {
        useCORS: true,
        backgroundColor: '#fff',
        scale: Math.min(window.devicePixelRatio || 1, 2),
      });
      const png = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!png) throw new Error('Empty PNG');
      const download = document.createElement('a');
      download.href = URL.createObjectURL(png);
      const pageName = location.pathname.split('/').filter(Boolean).pop() || 'dashboard';
      download.download = 'EMCC-' + pageName.replace(/\.html$/, '') + '.png';
      document.body.append(download);
      download.click();
      download.remove();
      setTimeout(() => URL.revokeObjectURL(download.href), 30000);
      status.hidden = true;
    } catch (error) {
      status.textContent = 'สร้างภาพ Dashboard ไม่สำเร็จ กรุณาลองอีกครั้ง';
      console.error(error);
    } finally {
      camera.disabled = false;
    }
  });
})();
