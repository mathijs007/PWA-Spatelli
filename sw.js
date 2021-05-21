"use strict";

self.addEventListener("install", function(e) {
    console.log("Performing service worker install.");
});

const CACHE_NAME = "my-cache-v1";
const urlsToCache = ['/', 
                        '/index.html', 
                        '/Order.html',
                        '/Favourites.html',
                        '/YourOrder.html'];

self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(res)
        {
            if (res) {
                return res;
            } else {
                return fetch(e.request);
            }
        })
    );
});

self.addEventListener("activate", function(e) {
    let cacheWhiteList = ['my-cache-v2'];

    e.waitUntil(
        caches.keys().then(function(cacheNames) {
            Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    )
});