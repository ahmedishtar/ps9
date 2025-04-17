
const CACHE_NAME = 'ps4-exploit-cache';
const urlsToCache = [
  './',
  './index.html',
  './background.jpg',
  './manifest.json',
  './goldhen_2.4b17.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
