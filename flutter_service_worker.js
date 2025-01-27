'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c851635696a7a5973eb8553b4cd28152",
"version.json": "ba92da816299300b5e3fee6533480d32",
"index.html": "9ebb89d831cc06bf2b0b77a61a281fa3",
"/": "9ebb89d831cc06bf2b0b77a61a281fa3",
"main.dart.js": "49c643ab9295a527dc7ae0e3a2b981eb",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4b34e12180c29b5e9f07d08af845a6c4",
"assets/AssetManifest.json": "e0dc3dfc31eda58ff4d9e27c7cd4c570",
"assets/NOTICES": "1b8318f7a024f4284477ff23a0bf03e1",
"assets/FontManifest.json": "b9aa1456493d5957c3d84d96f20a9597",
"assets/AssetManifest.bin.json": "a3e2f339d390920b02400337af966808",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "369364e47a32c46469b66a18d863823a",
"assets/fonts/MaterialIcons-Regular.otf": "c57e8047fe56fe08dc7bdb42ee67b2bf",
"assets/assets/ic_seater_not_available.svg": "f9f53104fb34de942d40eb1556610ecc",
"assets/assets/ic_seat.svg": "78543eaba0400a743b91284cfbd6a812",
"assets/assets/ic_seat_selected.svg": "720a5b42755117a735d379eda1a1c480",
"assets/assets/ic_one_seat.svg": "544e44713f066f4f10b716dee8b437fb",
"assets/assets/b_selected.png": "9ca75314022cb2757801a89e8ade41dc",
"assets/assets/ic_wifi.svg": "5140616a221af7c27336f9a342db8a00",
"assets/assets/images/ic_refer.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_whatsapp.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_content_copy.svg": "fcb044f5b7c085006f200d74d3226c62",
"assets/assets/images/ic_bookings.svg": "4542e028f502c01d83f7ed18579a99d4",
"assets/assets/images/ic_offers.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_local_offers.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_sidewalk_playstore.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/ic_splash_new.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_rating.svg": "c7e7dc4df37482a3184b1b60a795a5c5",
"assets/assets/ic_sleeper_booked.svg": "b2a9211f7dfcc3401bdface474d2b6bc",
"assets/assets/ic_seater.svg": "09c03686cde6aa366b1b31f5bfaf187f",
"assets/assets/xyz.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/drive_icon.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_arrow_back.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_seat_dim.svg": "8771fa52d29d864cb25b7a449c92f993",
"assets/assets/available_seat.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_seat.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/right_forward_arrow_long.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_seater_selected.svg": "8830104c70066b2d683bd3feae3992f5",
"assets/assets/travel_bag.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/chair.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/rupees_icon.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_energy_plug.svg": "96513fc96a0535eb177dc7844c17d3b7",
"assets/assets/points.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_launcher.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_login_bg.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_plus_circle.svg": "51887c1423d46e8257ebebc123aeae6a",
"assets/assets/bus_seat.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icon_login_profile.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/Razorpay_Secure_Payment-1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/ic_bottle.svg": "1d012f6508498a8038a804a076e72f82",
"assets/assets/armchair.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/text_font.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
