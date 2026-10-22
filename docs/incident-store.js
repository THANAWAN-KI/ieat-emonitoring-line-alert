/* Browser-local incident workspace. Reports remain immutable snapshots. */
window.IEATIncidentStore=(()=>{
 let connection;
 function db(){return connection||(connection=new Promise((resolve,reject)=>{const r=indexedDB.open('ieat-incident-workspace',1);r.onupgradeneeded=()=>r.result.createObjectStore('incidents',{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);}));}
 async function run(mode,action){const d=await db();return new Promise((resolve,reject)=>{const tx=d.transaction('incidents',mode);let value;action(tx.objectStore('incidents'),v=>value=v);tx.oncomplete=()=>resolve(value);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||Error('บันทึกไม่สำเร็จ'));});}
 const get=id=>run('readonly',(s,done)=>{s.get(id).onsuccess=e=>done(e.target.result);});
 const list=()=>run('readonly',(s,done)=>{s.getAll().onsuccess=e=>done(e.target.result);});
 const create=value=>{const now=new Date().toISOString(),r={...value,id:crypto.randomUUID(),createdAt:now,updatedAt:now,status:'รับแจ้ง',verification:'รอตรวจสอบ',notes:[],reports:[],archived:false};return run('readwrite',(s,done)=>{s.add(r);done(r);});};
 const change=(id,mutate)=>run('readwrite',(s,done)=>{s.get(id).onsuccess=e=>{const r=e.target.result;if(!r){done(null);return;}mutate(r);r.updatedAt=new Date().toISOString();s.put(r);done(r);};});
 return {get,list,create,remove:id=>run('readwrite',(s,done)=>{s.delete(id);done(true);}),update:(id,patch)=>change(id,r=>Object.assign(r,patch)),note:(id,text)=>change(id,r=>r.notes.push({at:new Date().toISOString(),text})),linkReport:(id,report)=>change(id,r=>{if(!r.reports.some(x=>x.id===report.id))r.reports.push({id:report.id,createdAt:report.createdAt,company:report.company});})};
})();

