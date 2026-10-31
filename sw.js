// Service Worker - Carla Barbosa Estúdio PWA v2.0 (Ultra-Fast 0ms Splash & Cache-First)
const CACHE_NAME = "carla-barbosa-pwa-v2.1";
const SHELL_ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/manifest.json",
  "/styles.css",
  "/script.js",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png"
];

// Install Event: Pré-carregamento imediato do shell do app
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(SHELL_ASSETS).catch((err) => {
        console.warn("SW shell cache warning:", err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Limpeza de caches obsoletos e reivindicação imediata
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Stale-While-Revalidate ultrarrápido para carregamento instantâneo
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Não interferir com requisições que não sejam GET
  if (req.method !== "GET") return;

  // 1. Navegação de páginas HTML - Stale-While-Revalidate com fallback offline
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              const clone = networkRes.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return networkRes;
          })
          .catch(async () => {
            if (cached) return cached;
            const offlineFallback = await caches.match("/offline.html");
            return offlineFallback || new Response("Modo Offline - Carla Barbosa Estúdio", {
              headers: { "Content-Type": "text/html; charset=utf-8" }
            });
          });

        return cached || networkFetch;
      })
    );
    return;
  }

  // 2. Imagens externas (Unsplash, Pollinations AI, etc.) - Cache dinâmico
  if (req.destination === "image" || url.hostname.includes("unsplash.com") || url.hostname.includes("pollinations.ai")) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              const clone = networkRes.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return networkRes;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // 3. Recursos estáticos locais e CDNs de fontes/ícones
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => cachedRes);

      return cachedRes || fetchPromise;
    })
  );
});