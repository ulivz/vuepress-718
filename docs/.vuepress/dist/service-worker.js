/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "01904d6e20de7fb791a7f9a3680f9f3b"
  },
  {
    "url": "assets/css/0.styles.92dc547d.css",
    "revision": "ee8f46fbb887e2ca44be7b77bc82ffbd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.234811cb.js",
    "revision": "5d2aac1927fa4fc49f00c1a4a19837c7"
  },
  {
    "url": "assets/js/3.ff98f858.js",
    "revision": "ffe434e1173b603244fdaa0f93620a35"
  },
  {
    "url": "assets/js/4.f3a55add.js",
    "revision": "a984deb11197080f9dd351a1c51ba0fb"
  },
  {
    "url": "assets/js/5.0aae9b31.js",
    "revision": "1b0dd76e753dce4ba49eae938cbeb725"
  },
  {
    "url": "assets/js/app.ed1a6260.js",
    "revision": "e9524ef85b2e8b8e352f22da68970c9b"
  },
  {
    "url": "index.html",
    "revision": "5d5837d8ddfb1776e2fac20582225213"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
