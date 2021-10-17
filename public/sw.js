const cacheName = 'todoapp-offline';
const preCache = [
    '/',
    '/index.html',
    '/mystyle.css',
    '/myscript.js',
    '/manifest.json',
  ];


self.addEventListener("install", e => {
    console.log('WORKER: install event in progress.');
    e.waitUntil(
            caches.open(cacheName).then(cache => cache.addAll(preCache)) 
            
    );
});


self.addEventListener("fetch", e => {
    console.log('WORKER: fetch event in progress.');
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
  
