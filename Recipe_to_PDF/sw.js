const CACHE_NAME = 'recipe-loop-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through strategy allows direct live network fetch interactions for Gemini endpoints
  e.respondWith(fetch(e.request));
});
