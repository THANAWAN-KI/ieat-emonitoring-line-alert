/* Small presentation adapter for the existing flood dashboard data pipeline. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const icons = {
    overview: '<path d="M3 7q3-3 6 0t6 0t6 0M3 12q3-3 6 0t6 0t6 0M3 17q3-3 6 0t6 0t6 0"/>',
    preparedness: '<path d="m10.2 3.8-8 14A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.3-2.2l-8-14a2 2 0 0 0-3.6 0Z"/><path d="M12 8v5m0 3v.2"/>',
    report: '<rect x="5" y="5" width="14" height="17" rx="2"/><rect x="9" y="2" width="6" height="5" rx="1.5"/><path d="M9 11h6m-6 4h6m-6 4h3"/>',
    layers: '<path d="m2 8 10-5 10 5-10 5Zm1 5 9 4.5 9-4.5M3 18l9 4.5 9-4.5"/>',
    settings: '<path d="m10 2-.6 2.5-2 .9L5 4.7 2.7 8l1.8 1.8v2.4L2.7 14 5 17.3l2.4-.7 2 .9L10 20h4l.6-2.5 2-.9 2.4.7 2.3-3.3-1.8-1.8V9.8L21.3 8 19 4.7l-2.4.7-2-.9L14 2Z"/><circle cx="12" cy="11" r="3.2"/>'
  };
  icons.alerts = icons.preparedness;
  icons.preparedness = icons.report;
  const customIcons = {
 overview: '<svg viewBox="0 0 24 24" aria-hidden="true"><title>water-rounded</title><path fill="#52057f" d="M5.594 16.27q-.725 0-1.107.293t-.804.456q-.267.087-.475-.035Q3 16.86 3 16.598q0-.182.123-.34t.38-.297q.241-.152.808-.422q.566-.27 1.326-.27q1.202 0 1.705.5t1.487.5t1.474-.5t1.71-.5t1.722.5t1.486.5t1.465-.5t1.697-.5q.69 0 1.266.263t.914.46q.221.114.33.271t.107.335q0 .244-.198.376t-.466.045q-.402-.144-.826-.447t-1.124-.303q-.963 0-1.474.5t-1.71.5t-1.703-.5t-1.486-.5t-1.483.5t-1.707.5t-1.723-.5t-1.506-.5m0-3.769q-.719 0-1.105.293q-.385.293-.806.457q-.268.086-.475-.036Q3 13.092 3 12.83q0-.183.123-.34t.38-.297q.241-.152.807-.422t1.327-.27q1.202 0 1.705.5t1.487.5t1.474-.5t1.71-.5t1.723.5t1.48.5q.976 0 1.465-.5t1.696-.5q.76 0 1.336.28t.816.432q.244.124.357.28q.114.154.114.337q0 .244-.201.376t-.468.045q-.402-.144-.823-.447t-1.121-.303q-.964 0-1.474.5t-1.711.5t-1.703-.5t-1.485-.5t-1.478.5t-1.701.5t-1.732-.5t-1.509-.5m.02-3.77q-.7 0-1.115.285q-.414.283-.816.427q-.267.087-.475-.035Q3 9.284 3 9.04q0-.182.123-.33t.38-.287q.241-.152.808-.422q.566-.27 1.326-.27q1.202 0 1.705.5t1.487.5t1.474-.5t1.71-.5t1.723.5t1.48.5q.976 0 1.465-.5t1.696-.5q.76 0 1.336.28q.575.28.816.431q.244.125.357.28q.114.155.114.337q0 .245-.201.376t-.468.046q-.402-.145-.823-.447q-.422-.303-1.122-.303q-.963 0-1.474.5t-1.71.5t-1.703-.5t-1.486-.5t-1.478.5t-1.7.5t-1.723-.5t-1.499-.5"/></svg>',
 alerts: '<svg viewBox="0 0 512 512" aria-hidden="true"><title>code-red-fill</title><defs><linearGradient id="railAlertGradient" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f87171"/><stop offset=".5" stop-color="#f87171"/><stop offset="1" stop-color="#dc2626"/></linearGradient></defs><path fill="url(#railAlertGradient)" stroke="#bf033b" stroke-miterlimit="10" stroke-width="4" d="m381 340.1l-52.8-97.3l-51-94.2a24 24 0 0 0-42.4 0l-51 94.2l-52.8 97.3a24.3 24.3 0 0 0 21.2 35.9h207.7a24.2 24.2 0 0 0 21.1-35.9ZM243 216.6q1.5-1.3 5.5-1.3h15.3c2.7 0 4.5.4 5.6 1.3s1.5 2.4 1.4 4.7l-3 71.8c-.1 2.3-.7 3.8-1.6 4.6s-2.7 1.3-5.4 1.3h-9.4c-2.6 0-4.4-.5-5.3-1.3s-1.5-2.3-1.6-4.6l-2.9-71.9c0-2.2.4-3.8 1.4-4.6Zm29.1 107.6q0 7-3 9.6c-2 1.7-5.7 2.6-11 2.6H254c-5.4 0-9-1-11-2.6s-3-5-3-9.6v-2.9q0-7 3-9.6c2-1.7 5.6-2.5 11-2.5h4c5.4 0 9 .8 11 2.5s3 5 3 9.6Z"/></svg>',
 report: '<svg viewBox="0 0 24 24" aria-hidden="true"><title>report-sharp</title><g fill="none" stroke="#52057f" stroke-linecap="square" stroke-miterlimit="2" stroke-width="1.5"><path d="M13.75 2.75h-9v18.5h14.5v-13Z"/><path d="M13.75 2.75v5.5h5.5m-10.5 9v-3m3.25 3v-5.5m3.25 5.5v-2"/></g></svg>',
 layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><title>layer</title><g fill="none" stroke="#52057f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m13.01 2.92l5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0"/><path d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"/><path d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"/></g></svg>',
 settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><title>settings-outline-rounded</title><path fill="#52057f" d="M10.96 21q-.349 0-.605-.229q-.257-.229-.319-.571l-.263-2.092q-.479-.145-1.036-.454q-.556-.31-.947-.664l-1.915.824q-.317.14-.644.03t-.504-.415L3.648 15.57q-.177-.305-.104-.638t.348-.546l1.672-1.25q-.045-.272-.073-.559q-.03-.288-.03-.559q0-.252.03-.53q.028-.278.073-.626l-1.672-1.25q-.275-.213-.338-.555t.113-.648l1.06-1.8q.177-.287.504-.406t.644.021l1.896.804q.448-.373.97-.673q.52-.3 1.013-.464l.283-2.092q.061-.342.318-.571T10.96 3h2.08q.349 0 .605.229q.257.229.319.571l.263 2.112q.575.202 1.016.463t.909.654l1.992-.804q.318-.14.645-.021t.503.406l1.06 1.819q.177.306.104.638t-.348.547L18.36 10.92q.082.31.092.569t.01.51q0 .233-.02.491q-.019.259-.088.626l1.69 1.27q.275.213.358.546t-.094.638l-1.066 1.839q-.176.306-.513.415q-.337.11-.654-.03l-1.923-.824q-.467.393-.94.673t-.985.445l-.264 2.111q-.061.342-.318.571t-.605.23zm.04-1h1.956l.369-2.708q.756-.2 1.36-.549q.606-.349 1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786q.04-.358.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.935q-.74-.435-1.4-.577L13 4h-1.994l-.312 2.689q-.756.161-1.39.52q-.633.358-1.26.985L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.589.594 1.222.953q.634.359 1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"/></svg>'
 };
 const svg = kind => customIcons[kind === 'preparedness' ? 'report' : kind];
  const post = data => $('estateFocusMap')?.contentWindow?.postMessage(data, location.origin);
  let started = false, queued = false;

  function decorate() {
    const rail = $('referenceRail'), pane = $('floodInformationPane');
    if (!rail || !pane) return;
    if (!started) {
      const alerts = rail.querySelector('[data-reference-mode="preparedness"]');
      if (alerts) {
        alerts.removeAttribute('data-reference-mode');
        alerts.dataset.referenceIcon = 'alerts';
        alerts.innerHTML = svg('alerts');
        alerts.title = 'แจ้งเตือนน้ำท่วม';
        alerts.setAttribute('aria-label', alerts.title);
        alerts.removeAttribute('aria-pressed');
        alerts.onclick = () => { const frame = $('estateFocusMap'); try { const button = frame?.contentDocument?.getElementById('floodAlertButton'); if (button) { button.click(); return; } } catch (_) {} post({ type: 'flood-alert-toggle' }); };
      }
    }
    for (const button of rail.querySelectorAll('[data-reference-mode]')) {
      if (button.dataset.referenceIcon) continue;
      const kind = button.dataset.referenceMode;
      if (icons[kind]) { button.innerHTML = svg(kind); button.dataset.referenceIcon = kind; }
    }
    const title = $('floodPageTitle');
    if (title && title.textContent !== 'สถานการณ์น้ำในนิคมฯ') title.textContent = 'สถานการณ์น้ำในนิคมฯ';
    const label = pane.querySelector('.io-area-text');
    if (label && label.textContent !== 'เลือกนิคมอุตสาหกรรม') label.textContent = 'เลือกนิคมอุตสาหกรรม';
    const subtitle = $('expoBoothSubtitle'), updated = pane.querySelector('.io-date span')?.textContent;
    if (subtitle && updated && subtitle.textContent !== updated) subtitle.textContent = updated;
    const dams = $('floodDamsSection');
    for (const [selector, text] of [['.ef-related-dams>h2', 'ปริมาณน้ำในเขื่อน'], ['.ef-reservoir-panel>h2', 'ปริมาณน้ำในอ่างเก็บน้ำ']]) {
      const heading = dams?.querySelector(selector);
      if (heading && heading.dataset.referenceHeading !== text) { heading.textContent = text; heading.dataset.referenceHeading = text; }
    }
    if (dams && !dams.querySelector('.reference-dam-art')) {
      const art = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      art.setAttribute('viewBox', '0 0 180 86');
      art.setAttribute('aria-hidden', 'true');
      art.classList.add('reference-dam-art');
      art.innerHTML = '<defs><linearGradient id="referenceDamConcrete" x2="1" y2="0"><stop stop-color="#109dc0"/><stop offset=".6" stop-color="#ffffff"/><stop offset="1" stop-color="#706357"/></linearGradient></defs><path d="M69 42q14-13 28-5t28 0 26 0 25 0v39H63Z" fill="#109dc0"/><path d="M66 53q15-12 30-4t30 0 25 0 25 0v27H62Z" fill="#109dc0"/><path d="M29 13h61v63H8q16-22 21-63Z" fill="url(#referenceDamConcrete)"/><path d="M36 13h8v63H21q11-27 15-63Z" fill="#ffffff"/><path d="M53 19h28v57h-9V30H62v46h-9Z" fill="#ffffff"/>';
      dams.querySelector('h2')?.after(art);
    }
    const flows = $('efDamFlowPanel');
    if (flows && dams?.contains(flows)) pane.append(flows);
    for (const card of dams?.querySelectorAll('.ef-dam-card') || []) {
      if (card.querySelector('.reference-dam-details')) continue;
      const details = document.createElement('details'); details.className = 'reference-dam-details';
      const summary = document.createElement('summary'); summary.textContent = 'รายละเอียดเขื่อนและแหล่งข้อมูล';
      details.append(summary);
      for (const node of [...card.children]) {
        if (!node.matches('.dam-value-line')) details.append(node);
      }
      card.append(details);
    }
    const reservoirTime = $('efReservoirTime');
    if (reservoirTime && dams?.contains(reservoirTime) && !reservoirTime.closest('details')) {
      const details = document.createElement('details'); details.className = 'reference-dam-details';
      const summary = document.createElement('summary'); summary.textContent = 'ข้อมูลอ่างเก็บน้ำและแหล่งข้อมูล';
      details.append(summary); reservoirTime.before(details); details.append(reservoirTime);
      for (const note of dams.querySelectorAll('.ef-reservoir-row>small')) details.append(note);
    }
    if (!started) {
      started = true;
      const nav = rail.querySelector('.reference-rail-modes');
      if (nav) {
        const report = document.createElement('button');
        report.type = 'button'; report.dataset.referenceMode = 'preparedness';
        report.dataset.referenceIcon = 'report'; report.title = 'การเตรียมรับมือ';
        report.setAttribute('aria-label', report.title); report.setAttribute('aria-pressed', String(document.body.dataset.floodView === 'preparedness'));
        report.innerHTML = svg('report');
        const layers = document.createElement('button');
        layers.dataset.referenceIcon = 'layers'; layers.type = 'button'; layers.title = 'เลือกชั้นข้อมูลแผนที่'; layers.setAttribute('aria-label', layers.title); layers.innerHTML = svg('layers');
        layers.onclick = () => post({ type: 'flood-reference-map-tools', action: 'layers' });
        const settings = document.createElement('button');
        settings.dataset.referenceIcon = 'settings'; settings.type = 'button'; settings.title = 'ตั้งค่ามุมมอง'; settings.setAttribute('aria-label', settings.title); settings.setAttribute('aria-expanded', 'false'); settings.setAttribute('aria-controls', 'referenceSettings'); settings.innerHTML = svg('settings');
        const popover = document.createElement('section');
        popover.id = 'referenceSettings'; popover.hidden = true; popover.setAttribute('aria-label', 'ตั้งค่ามุมมอง');
        popover.innerHTML = '<strong>ตั้งค่ามุมมอง</strong><a href="flood-report-editor.html">จัดทำรายงานน้ำท่วม ↗</a><button type="button" data-reference-action="fullscreen">ขยายแผนที่เต็มจอ</button><button type="button" data-reference-action="panel">เปิด / ปิดแผงข้อมูล</button>';
        const close = () => { popover.hidden = true; settings.setAttribute('aria-expanded', 'false'); };
        settings.onclick = () => { popover.hidden = !popover.hidden; settings.setAttribute('aria-expanded', String(!popover.hidden)); };
        popover.onclick = event => {
          const action = event.target.closest('[data-reference-action]')?.dataset.referenceAction;
          if (!action) return;
          (action === 'fullscreen' ? $('efMapFullscreen') : $('referencePanelToggle'))?.click(); close();
        };
        document.addEventListener('keydown', event => { if (event.key === 'Escape' && !popover.hidden) { close(); settings.focus(); } });
        document.addEventListener('pointerdown', event => { if (!popover.contains(event.target) && !settings.contains(event.target)) close(); });
        nav.append(report, layers, settings); document.body.append(popover);
      }
    }
  }
  function schedule() {
    if (queued) return; queued = true;
    requestAnimationFrame(() => { queued = false; decorate(); });
  }
  function boot() {
    decorate();
    setInterval(() => {
      try {
        const source = $('estateFocusMap')?.contentDocument?.getElementById('floodAlertButton');
        const target = document.querySelector('#referenceRail [data-reference-icon="alerts"]');
        if (!target) return;
        const active = !!source?.classList.contains('has-alert');
        target.classList.toggle('has-alert', active);
        const label = source?.getAttribute('aria-label') || 'แจ้งเตือนน้ำท่วม กำลังโหลดข้อมูล';
        target.setAttribute('aria-label', label); target.title = label;
      } catch (_) {}
    }, 1500);
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot, { once: true }) : boot();
})();
