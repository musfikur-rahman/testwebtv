const cacheName = 'v1';

const cacheAssets = [
    'hls.js@latest',
    'index.html',
    'logo192.png',
    'logo512.png',
    'main.js',
    'sw_cached_pages.js',
    'sw_cached_site.js'
  ];

// Call Install Event
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Call Fetch Event
self.addEventListener('fetch', e=> {
    console.log('Service Worker: Fetching');    
    e.respondWith(fetch(e.request).cache(() => caches.match(e.request)));
});