'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.ico": "84ea58ef07b5858ab00f3fa4f5ada71b",
"index.html": "23e1ab9fa2b7f4371c534343065e311e",
"main.dart.js": "a2bb715e64d67cb690bcc20433157718",
"icons/Icon-192.png": "500394eca8838c4cbc4edf24aac04d02",
"icons/Icon-512.png": "3502f0d9bcc688ba7d2fb94c41422069",
"manifest.json": "3cbfa4f3023d243b387ec13b606d3a12",
"assets/LICENSE": "36d0fc47e8d468eca46e4dbe8f07ec3a",
"assets/AssetManifest.json": "2622e37ac6038beedd0a42b6196a3145",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/mouth.png": "de8e089a7b8a88bf86a2bf01ccf99581",
"assets/assets/images/body.png": "d4668e40e759ce21e726f4f30be33ad8",
"assets/assets/images/forest.jpg": "dd6ab1d0ced6cb3a6f5dce87f3e44253",
"assets/assets/images/eye.png": "d167068151e2fd4b79758c5ac1a3634d",
"assets/assets/images/eye_happy.png": "a0842857cbf2ea133d891318df7fb6a7",
"assets/assets/images/right_arm.png": "a4b8114a31557fbdc64dc1cbcffd5b6a",
"assets/assets/images/left_arm.png": "f8b2229d07c827ea1681aeecc1692548"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
