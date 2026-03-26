const CACHE_NAME = "abood-delay-cache";

const urlsToCache = [
  "/",
  "index.html",
  "manifest.json"
];

self.addEventListener("install", event => {
console.log("SpeakEase installed");

});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});