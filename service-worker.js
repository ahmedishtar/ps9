
const CACHE_NAME = 'ahmed-exploit-cache-v3';
const urlsToCache = [
  './',
  './900.html',
  './background.jpg',
  './goldhen_2.4b17.js',
  './manifest.json'
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
