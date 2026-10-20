/* Local report snapshots: each saved record is immutable and scoped to this browser. */
window.IEATReportStore = (() => {
  let connection;
  function database() {
    if (!connection) connection = new Promise((resolve, reject) => {
      const request = indexedDB.open('ieat-report-snapshots', 1);
      request.onupgradeneeded = () => request.result.createObjectStore('reports', {keyPath:'id'});
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(Error('กรุณาปิดหน้ารายงานเก่าแล้วลองใหม่'));
    });
    return connection;
  }
  async function transaction(mode, action) {
    const db = await database();
    return new Promise((resolve,reject) => {
      const tx = db.transaction('reports', mode), request = action(tx.objectStore('reports'));
      let result;
      request.onsuccess = () => {result=request.result;};
      tx.oncomplete = () => resolve(result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || Error('บันทึกไม่สำเร็จ'));
    });
  }
  return {
    add: value => transaction('readwrite', store => store.add(value)),
    get: id => transaction('readonly', store => store.get(id)),
    list: () => transaction('readonly', store => store.getAll())
  };
})();
