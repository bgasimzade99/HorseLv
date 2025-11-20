// Service Worker for PWA support
const CACHE_NAME = 'asnatesjsk-v2'
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/favicon.png'
]

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((err) => console.log('Cache install failed:', err))
  )
  self.skipWaiting()
})

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  return self.clients.claim()
})

// Fetch event - Network Only (no cache) for HTML/JS, Cache First for assets
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // For HTML and JS files, always fetch from network with no cache
  if (request.destination === 'document' || 
      request.destination === 'script' ||
      url.pathname.endsWith('.html') ||
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.jsx') ||
      (url.pathname === '/' && request.method === 'GET')) {
    event.respondWith(
      fetch(request, { 
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      })
        .then((response) => {
          // Always return fresh response from network, never cache
          return response
        })
        .catch(() => {
          // Only use cache if network completely fails (offline mode)
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html')
          })
        })
    )
    return
  }
  
  // For other assets (images, CSS, etc.), use Cache First
  event.respondWith(
    caches.match(request)
      .then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          if (fetchResponse && fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache)
            })
          }
          return fetchResponse
        })
      })
      .catch(() => {
        if (request.destination === 'document') {
          return caches.match('/index.html')
        }
      })
  )
})

