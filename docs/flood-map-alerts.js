(()=>{
 'use strict';
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const style=document.createElement('style');style.textContent=`
 #floodAlertButton{position:fixed;z-index:1200;width:44px;height:44px;border:1px solid #e9e0ee;border-radius:50%;background:white;color:#674188;display:grid;place-items:center;cursor:pointer;box-shadow:0 2px 12px #243e5026}
 #floodAlertButton svg{width:23px;height:23px;stroke:currentColor;fill:none;stroke-width:1.7}
 #floodAlertButton .alert-count{position:absolute;top:-4px;right:-5px;min-width:19px;padding:0 4px;border-radius:10px;background:#674188;color:white;font:700 10px/19px Sarabun,sans-serif}
 #floodAlertButton.has-alert{color:#b30707;border-color:#b30707;animation:floodAlertPulse 1.8s ease-in-out infinite}
 #floodAlertButton.has-alert .alert-count{background:#b30707}
 #floodAlertButton.has-alert svg{animation:floodAlertBell 2.5s ease-in-out infinite;transform-origin:50% 15%}
 @keyframes floodAlertPulse{0%,100%{box-shadow:0 0 0 0 #b3070740}60%{box-shadow:0 0 0 10px #b3070700}}
 @keyframes floodAlertBell{0%,25%,100%{transform:rotate(0)}5%,15%{transform:rotate(12deg)}10%,20%{transform:rotate(-12deg)}}
 #floodAlertPanel{position:fixed;z-index:1201;width:min(370px,calc(100vw - 24px));max-height:65vh;background:#fff;border:1px solid #eadfed;border-radius:15px;box-shadow:0 8px 30px #30203930;padding:14px;color:#302438;font:13px/1.6 Sarabun,sans-serif;overflow:auto}
 #floodAlertPanel[hidden]{display:none}#floodAlertPanel h3{margin:0;font-size:16px}#floodAlertPanel small{color:#766c7e}#floodAlertPanel header{display:flex;justify-content:space-between;align-items:center;gap:12px}#floodAlertPanel button{font:inherit;cursor:pointer}
 #floodAlertPanel .alert-row{display:block;text-align:left;width:100%;margin-top:8px;padding:10px;background:#fff;border:1px solid #eee7ef;border-left:4px solid var(--alert-color);border-radius:9px;color:#302438}#floodAlertPanel .alert-row strong,#floodAlertPanel .alert-row span{display:block}
 @media(prefers-reduced-motion:reduce){#floodAlertButton.has-alert,#floodAlertButton.has-alert svg{animation:none}}
 `;document.head.appendChild(style);
 const button=document.createElement('button');button.id='floodAlertButton';button.type='button';button.title='แจ้งเตือนน้ำท่วม';button.setAttribute('aria-label','แจ้งเตือนน้ำท่วม กำลังโหลดข้อมูล');button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','floodAlertPanel');
 button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4M12 2V1" stroke-linecap="round"/></svg><span class="alert-count">…</span>';
 const panel=document.createElement('section');panel.id='floodAlertPanel';panel.hidden=true;panel.setAttribute('aria-label','รายการแจ้งเตือนน้ำท่วม');
 document.body.append(button,panel);let snapshot=null,records=[];
 function position(){const anchor=document.querySelector('#mapLayers>summary');if(!anchor){button.hidden=true;return}button.hidden=false;const r=anchor.getBoundingClientRect();const left=Math.max(8,r.left-52),top=Math.max(8,Math.min(innerHeight-52,r.top));button.style.left=left+'px';button.style.top=top+'px';panel.style.left=Math.max(12,Math.min(innerWidth-Math.min(370,innerWidth-24)-12,left-320))+'px';panel.style.top=Math.max(8,Math.min(innerHeight-200,top+54))+'px';panel.style.maxHeight=Math.max(140,innerHeight-parseFloat(panel.style.top)-16)+'px';}
 function update(){position();const api=window.IEATPreparednessMap?.();if(!api?.alertSnapshot)return;const next=api.alertSnapshot();const key=JSON.stringify(next);if(key===snapshot)return;snapshot=key;records=next.items;
  button.classList.toggle('has-alert',records.length>0);button.querySelector('.alert-count').textContent=records.length>99?'99+':records.length||(!next.loaded?'…':'0');button.setAttribute('aria-label','แจ้งเตือนน้ำท่วม '+records.length+' รายการ');
  panel.innerHTML='<header><h3>แจ้งเตือนน้ำท่วม <span>('+records.length+')</span></h3><button type="button" data-close aria-label="ปิดรายการแจ้งเตือน">×</button></header><small>ทุกพื้นที่ในข้อมูลที่โหลด · รวมรายการแม้ปิดเลเยอร์</small><div>'+records.map((r,i)=>'<button type="button" class="alert-row" data-index="'+i+'" style="--alert-color:'+esc(r.state.hex)+'"><strong>'+esc(r.name)+'</strong><span>'+esc(r.kindLabel)+' · '+esc(r.state.label)+'</span><small>'+esc(r.province||'')+' · ตรวจวัด '+esc(r.measured_at||'ไม่ระบุ')+'</small></button>').join('')+(!records.length?'<p>'+(!next.loaded?'กำลังโหลดข้อมูลแจ้งเตือน…':'ไม่พบรายการถึงเกณฑ์เตือนในข้อมูลล่าสุดที่โหลดได้')+'</p>':'')+'</div><small>รวมน้ำใกล้/ล้นตลิ่ง คลองถึงเกณฑ์เตือน ฝนหนัก และอ่างน้ำมาก · ข้อมูลเก่าหรือเวลาไม่ครบไม่นับเป็นแจ้งเตือนปัจจุบัน · ไม่ใช่การยืนยันน้ำท่วมภายในนิคมฯ</small>';
 }
 function close(){panel.hidden=true;button.setAttribute('aria-expanded','false');}
 button.onclick=()=>{update();panel.hidden=!panel.hidden;button.setAttribute('aria-expanded',String(!panel.hidden));};
 panel.onclick=e=>{if(e.target.closest('[data-close]')){close();button.focus();return}const row=e.target.closest('[data-index]');if(!row)return;const r=records[Number(row.dataset.index)],api=window.IEATPreparednessMap?.();if(!r||!api)return;close();api.showAt(r.lng,r.lat,'<h3>'+esc(r.name)+'</h3>'+api.pointContent(r,r.kind),true);};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){close();button.focus();}});
 document.addEventListener('click',e=>{if(!panel.hidden&&!panel.contains(e.target)&&!button.contains(e.target))close();});
 window.addEventListener('resize',position);document.addEventListener('ieat-map-ready',update);update();setInterval(()=>{if(!document.hidden)update();},3000);
})();
