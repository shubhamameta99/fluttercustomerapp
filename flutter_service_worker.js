'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ab8de12c29340bcd5c10467234389ac",
"version.json": "ba92da816299300b5e3fee6533480d32",
"index.html": "53d90ed65c8129f29137825b2650b492",
"/": "53d90ed65c8129f29137825b2650b492",
"main.dart.js": "585eb39077f0b21b3447715ffba42984",
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
"assets/assets/images/ic_refer.svg": "6fc699f912c581dd880116f3dc45c3f3",
"assets/assets/images/ic_whatsapp.svg": "fe8016275450c0c393a811d09d945e3b",
"assets/assets/images/ic_content_copy.svg": "fcb044f5b7c085006f200d74d3226c62",
"assets/assets/images/ic_bookings.svg": "4542e028f502c01d83f7ed18579a99d4",
"assets/assets/images/ic_offers.svg": "2285ef69ecb59b6575f9d28259773bcb",
"assets/assets/images/ic_local_offers.svg": "e085c124285b5209fcf56836e2da8312",
"assets/assets/images/ic_sidewalk_playstore.png": "4d8a2ba9d5ebc27215178f17fe101e0e",
"assets/assets/images/ic_splash_new.png": "8d8307f9a61ed543c620f45b8206cb5c",
"assets/assets/ic_rating.svg": "c7e7dc4df37482a3184b1b60a795a5c5",
"assets/assets/ic_sleeper_booked.svg": "b2a9211f7dfcc3401bdface474d2b6bc",
"assets/assets/ic_seater.svg": "09c03686cde6aa366b1b31f5bfaf187f",
"assets/assets/xyz.png": "9ddbdc13c6089b822e0190a6cf3c2776",
"assets/assets/drive_icon.png": "c0c488a94b9218a67f3a0be8556b7e1f",
"assets/assets/ic_arrow_back.png": "21bcab2944ec3d3596fa574bcba019db",
"assets/assets/ic_seat_dim.svg": "8771fa52d29d864cb25b7a449c92f993",
"assets/assets/available_seat.png": "4c7356132f9292a81cbc9613f14efecf",
"assets/assets/ic_seat.png": "180af361e50533f469f70d6079a9729e",
"assets/assets/right_forward_arrow_long.png": "5075a46bbe7dff6bafe26e29ca77dbd5",
"assets/assets/ic_seater_selected.svg": "8830104c70066b2d683bd3feae3992f5",
"assets/assets/travel_bag.png": "a34b182ba0d966174803a61d0d672d08",
"assets/assets/chair.png": "78cfc90dc35843733c294b80e7a5d62d",
"assets/assets/rupees_icon.png": "4a3106cfe19559a77f206468ec79e74a",
"assets/assets/ic_energy_plug.svg": "96513fc96a0535eb177dc7844c17d3b7",
"assets/assets/points.png": "178fb266e172b3dc278c25044c0f0ee2",
"assets/assets/ic_launcher.png": "415d6e16bb85c05f58d3e3db94d22cef",
"assets/assets/ic_login_bg.png": "ea520845fefd63aec4a0a74e1f66e0a8",
"assets/assets/ic_plus_circle.svg": "51887c1423d46e8257ebebc123aeae6a",
"assets/assets/bus_seat.png": "f1f171c90add08754708f0205b7cfa38",
"assets/assets/icon_login_profile.png": "95ea7c9fad4ad0d6006fc81144562be4",
"assets/assets/Razorpay_Secure_Payment-1.png": "a11aa61a84f8f38a3458bf1772258ba1",
"assets/assets/ic_bottle.svg": "1d012f6508498a8038a804a076e72f82",
"assets/assets/armchair.png": "25d83f077c8ea7f4e79781680d5bd461",
"assets/assets/fonts/text_font.ttf": "1b580d980532792578c54897ca387e2c",
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