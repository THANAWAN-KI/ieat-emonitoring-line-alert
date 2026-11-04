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
  const svg = kind => '<svg class="ieat-icon reference-line-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[kind] + '</svg>';
  const post = data => $('estateFocusMap')?.contentWindow?.postMessage(data, location.origin);
  let started = false, queued = false;

  function decorate() {
    const rail = $('referenceRail'), pane = $('floodInformationPane');
    if (!rail || !pane) return;
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
      art.innerHTML = '<defs><linearGradient id="referenceDamConcrete" x2="1" y2="0"><stop stop-color="#969eaa"/><stop offset=".6" stop-color="#d8dce1"/><stop offset="1" stop-color="#b7bec7"/></linearGradient></defs><path d="M69 42q14-13 28-5t28 0 26 0 25 0v39H63Z" fill="#87dcff"/><path d="M66 53q15-12 30-4t30 0 25 0 25 0v27H62Z" fill="#32b9f7"/><path d="M29 13h61v63H8q16-22 21-63Z" fill="url(#referenceDamConcrete)"/><path d="M36 13h8v63H21q11-27 15-63Z" fill="#f1f3f5"/><path d="M53 19h28v57h-9V30H62v46h-9Z" fill="#f1f3f5"/>';
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
        const report = document.createElement('a');
        report.href = 'flood-report-editor.html'; report.title = 'จัดทำรายงานน้ำท่วม'; report.setAttribute('aria-label', report.title); report.innerHTML = svg('report');
        const layers = document.createElement('button');
        layers.type = 'button'; layers.title = 'เลือกชั้นข้อมูลแผนที่'; layers.setAttribute('aria-label', layers.title); layers.innerHTML = svg('layers');
        layers.onclick = () => post({ type: 'flood-reference-map-tools', action: 'layers' });
        const settings = document.createElement('button');
        settings.type = 'button'; settings.title = 'ตั้งค่ามุมมอง'; settings.setAttribute('aria-label', settings.title); settings.setAttribute('aria-expanded', 'false'); settings.setAttribute('aria-controls', 'referenceSettings'); settings.innerHTML = svg('settings');
        const popover = document.createElement('section');
        popover.id = 'referenceSettings'; popover.hidden = true; popover.setAttribute('aria-label', 'ตั้งค่ามุมมอง');
        popover.innerHTML = '<strong>ตั้งค่ามุมมอง</strong><button type="button" data-reference-action="fullscreen">ขยายแผนที่เต็มจอ</button><button type="button" data-reference-action="panel">เปิด / ปิดแผงข้อมูล</button>';
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
    new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', boot, { once: true }) : boot();
})();
