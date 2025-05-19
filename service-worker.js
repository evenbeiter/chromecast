self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cast-cache').then(cache => {
      return cache.addAll([
        '/',
        '/nhk.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
