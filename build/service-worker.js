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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "53715201002a3b3dd4e6779daef81459"
  },
  {
    "url": "about.html",
    "revision": "008ac828a05b877a7b7eaa3fe726a7a0"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9eb223f0.js",
    "revision": "b7470bfb44b8cdf43c58c4371170cd8f"
  },
  {
    "url": "assets/js/2.be3cc0f8.js",
    "revision": "50ee686e49329239f278577e5ba0d781"
  },
  {
    "url": "assets/js/3.da8c07b9.js",
    "revision": "537723d1df5a080fb496baf37aa089c7"
  },
  {
    "url": "assets/js/4.f6918883.js",
    "revision": "ee36d0ec53db83e63c1d0c07c3abd14e"
  },
  {
    "url": "assets/js/5.509750c2.js",
    "revision": "9e1a36ad2314a86b13af5076743458b4"
  },
  {
    "url": "assets/js/6.52a444e1.js",
    "revision": "70b738bf3f70b3db6d1b15f271445145"
  },
  {
    "url": "assets/js/7.251060fe.js",
    "revision": "4802ae52c204c2ff32398f837a79e23b"
  },
  {
    "url": "assets/js/8.9178395c.js",
    "revision": "5b1a216f35e5d415292391b8a13f15ba"
  },
  {
    "url": "assets/js/9.e6039597.js",
    "revision": "0d413e908f1eba83a2087c625bdc34d8"
  },
  {
    "url": "assets/js/app.a077da50.js",
    "revision": "507a8b3ba5338fd2aecfb78b21087409"
  },
  {
    "url": "basic/db.png",
    "revision": "68b32f760ed57ed3844ddc97af6aa805"
  },
  {
    "url": "basic/double.png",
    "revision": "2c8f5d7c66afd753455cb7a8ea24aa72"
  },
  {
    "url": "basic/index.html",
    "revision": "f11ab69dc58c95c93deadf7494b2f650"
  },
  {
    "url": "basic/select.png",
    "revision": "b6b8c9ac6fc88a75df1912dafa65ea3f"
  },
  {
    "url": "basic/wave.png",
    "revision": "238afe6904fe349d6accd95449b01fbc"
  },
  {
    "url": "CPlusPlus/index.html",
    "revision": "14afe315b6ec06e654ae1881a334d9d3"
  },
  {
    "url": "CSharp/index.html",
    "revision": "15562ac59bc67472ac3a464785d22b16"
  },
  {
    "url": "Ecmascript/index.html",
    "revision": "d01f656f7d9154d5019206d7b7d323e6"
  },
  {
    "url": "index.html",
    "revision": "0fbc725ebe2707e8e6b51a5bcd1e7fc6"
  },
  {
    "url": "index404.html",
    "revision": "0a7d2c7a161d1717e60bdac5e213318c"
  },
  {
    "url": "logo.png",
    "revision": "49ba8bc18da8459023780009009390a4"
  },
  {
    "url": "Python/index.html",
    "revision": "9fee8926fb18ea63cbd80b613068bac3"
  },
  {
    "url": "sixteen/hz.png",
    "revision": "a3e3a204681a7a4b522bd8472f965614"
  },
  {
    "url": "sixteen/sixteen.png",
    "revision": "0d65ebed68a450c1b20c8467f55853d3"
  },
  {
    "url": "tweleve/hz.png",
    "revision": "0a97ea1398ce0dcdcad473dbd18e4098"
  },
  {
    "url": "tweleve/tweleve.jpg",
    "revision": "2495ac19d0289b48ca8da8dad2ec2e9c"
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
