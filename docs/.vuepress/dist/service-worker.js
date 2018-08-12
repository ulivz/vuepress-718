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
    "revision": "b82e3e18d2aabf48159089f8696e3303"
  },
  {
    "url": "assets/css/0.styles.ffbc750b.css",
    "revision": "e565b8a80fe838b2b8cf455abd8c63b1"
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
    "url": "assets/js/3.1b25c403.js",
    "revision": "d12db9925bba8067aa703a938af65427"
  },
  {
    "url": "assets/js/4.36bab26e.js",
    "revision": "7f698a9c05f791d31dcadc35a8132324"
  },
  {
    "url": "assets/js/5.5286ba0a.js",
    "revision": "80b1e19ba9f6c0c9a5f153c443888b34"
  },
  {
    "url": "assets/js/app.38c16a7c.js",
    "revision": "0a0314aa11e1273ce8188b74d7d05205"
  },
  {
    "url": "index.html",
    "revision": "7d0ce87a976f132548d0fdc3b854dd01"
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
