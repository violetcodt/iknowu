const CACHE = 'iknowu-v1';               // 每次发新版 +1
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // 只缓存站内资源，别去缓存有道的发音请求
  if (e.request.method !== 'GET' || url.origin !== location.host ? false : false) {}
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request)
      .then(res => { const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match('./index.html'))
    )
  );
});
