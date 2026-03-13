// public/service-worker.js

// ===== CACHE CONFIG =====
const CACHE_NAME = 'je-app-pwa-cache-v1';
// GitHub Pages Base
const BASE_URL = '/jernst/';

// ===== TODO =====
// Issue: auto-generated files in /assets have hashes in their names.
// These files only exist after running `npm run build`.
// Therefore:
// 1. Update FILES_TO_CACHE after each build to match the actual hashed filenames
// 2. Then run `vite preview` to test offline caching
// 3. Alternatively, consider using vite-plugin-pwa for automatic precaching
const FILES_TO_CACHE = [
  `${BASE_URL}index.html`,
  `${BASE_URL}manifest.json`,
  `${BASE_URL}service-worker.js`,
  `${BASE_URL}assets/index-C9AREoS6.js`,
  `${BASE_URL}assets/index-B4VK6Pwt.css`,
  `${BASE_URL}assets/bckgnd-DokiZF2K.jpg`,
  `${BASE_URL}assets/header-EvXgjLdI.jpg`,
  `${BASE_URL}assets/julia-ernst-EgfSWqrh.webp`,
  `${BASE_URL}web-app-manifest-192x192.png`,
  `${BASE_URL}web-app-manifest-512x512.png`,
  `${BASE_URL}favicon-16x16.png`,
  `${BASE_URL}favicon-32x32.png`,
  `${BASE_URL}rocket.ico`,
];
// ===== INSTALL EVENT =====
// Triggered when the Service Worker is first installed
// Used to cache files for offline usage
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
  self.skipWaiting(); // activate worker immediately
});

// ===== ACTIVATE EVENT =====
// Triggered when the Service Worker is activated
// Used to clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // delete old cache
          }
        }),
      ),
    ),
  );
  self.clients.claim(); // take control of all clients immediately
});

// ===== FETCH EVENT =====
// Intercepts network requests
// Returns cached response first, then falls back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedRes => {
      return cachedRes || fetch(event.request);
    }),
  );
});

// ===== FUTURE FEATURES PLACEHOLDER =====

// Push Notifications (future implementation)
self.addEventListener('push', event => {
  // console.log("Push event received", event);
  // self.registration.showNotification("Title", { body: "Message content" });
});

// Background Sync (future implementation)
self.addEventListener('sync', event => {
  // if (event.tag === "sendForm") {
  //   event.waitUntil(sendFormData());
  // }
});

// You can add more event listeners here in the future (e.g., periodic sync, custom caching strategies)
