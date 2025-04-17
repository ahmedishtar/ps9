
const CACHE_NAME = 'ahmed-exploit-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/background.jpg',
  '/manifest.json',
  '/service-worker.js',
  '/goldhen_2.4b17.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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
