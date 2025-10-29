'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5122f1a9fd3dd4f989ca27e5a42f0c8d",
"version.json": "e801a477634c1264feb429bb34932e20",
"index.html": "d74e97219073afbc1c09069a48c1a083",
"/": "d74e97219073afbc1c09069a48c1a083",
"main.dart.js": "1b95d4337632c346a86cff5fb5b72ea5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c65f867196b51a34bc86c3272a0b6da6",
"assets/AssetManifest.json": "770dd6ab2adfd58b545c6fbe0f7f26c6",
"assets/NOTICES": "1146f1f53bd1b3d1f3e8efcd7f152a76",
"assets/FontManifest.json": "451f18737337d8513a2c12b8028fc3e6",
"assets/AssetManifest.bin.json": "38f354b7a175c0179470e71943398d49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3f9277c75a306039b0b0b2f8a5a03e19",
"assets/fonts/MaterialIcons-Regular.otf": "8b1836754161da6d8570c1f46cbda10f",
"assets/assets/blog_ui.json": "48f0e332e4d808a392d25ab4eee5fd3e",
"assets/assets/busImage.png": "49717d5b7778a79abe014abd3b0fd386",
"assets/assets/b_available_horizontal.png": "57bd8d701149b8a3cd37d4cc23b85c17",
"assets/assets/contactUs_thirdVariant.json": "c4c88f32ceb7dd0454dd59301aecd493",
"assets/assets/contactUs_secondVariants.json": "ff39a99e073903c1d5caa03867510107",
"assets/assets/employees.png": "681be6d531c07fd44a7a6d4b62129773",
"assets/assets/b_selected.png": "9ca75314022cb2757801a89e8ade41dc",
"assets/assets/splash_screen.json": "3ffa010de29f7e4e4f688a7bcfd697bb",
"assets/assets/testheader.json": "aaa3148de21fe6547d53f0daa8e399ec",
"assets/assets/aboutUs_thirdVariant.json": "d2724d06a4a78324c8b56268f9976fa1",
"assets/assets/why_choose_us.json": "1946ec261d1e5a72d764e148329df056",
"assets/assets/Screenshot%25202025-10-06%2520at%25206.12.11%25E2%2580%25AFPM.png": "42bd57e2c695ed7daf2dd8638fccf577",
"assets/assets/Vector.png": "3fbf4028a98ca3447caec0fe770c599d",
"assets/assets/b_reserved.png": "ce1b75eeb34853c2642bab271986b971",
"assets/assets/arrow.png": "0c9ccc94a61b2cb7eb206ec85e814956",
"assets/assets/side_navigation_drawer_var_two.json": "1b12d72e216adfa2c365f5089c1a17e3",
"assets/assets/s_available.png": "4c7356132f9292a81cbc9613f14efecf",
"assets/assets/amenities_var_one.json": "e8c6b6cd22438475adabfacf14166326",
"assets/assets/b_available.png": "180af361e50533f469f70d6079a9729e",
"assets/assets/b_reserved_horizontal.png": "790f5ef8d1b3273dd197a3e266b215bc",
"assets/assets/office.png": "cca807a636ed9603fce1126dd37dc901",
"assets/assets/google.svg": "1a2588e694e1de3e532566567c14187b",
"assets/assets/why_choose_us_second_variant.json": "84bd33d0e89299bc2a39f147c9516b48",
"assets/assets/sort.png": "72441e6273b184ce87b35e9c8acfb501",
"assets/assets/home_layout.json": "978bf44a9a751f3ef2da19822ad118e4",
"assets/assets/location.png": "dadfd3d8235ec8f74c28e38a1f888356",
"assets/assets/s_selected.png": "d9dc423c81a563d7b78792da19d5e46a",
"assets/assets/s_reserved.png": "cd9bd92157aaa683cbf49ba354a2a39c",
"assets/assets/srp_layout.json": "73856404a377fcacf6670d1ea02b360a",
"assets/assets/why_choose_us_third_variant.json": "84961d0d87e9ad95a592d6c845c72ff3",
"assets/assets/amenities_var_third.json": "7e592482af6c3e73176ff6a45019616c",
"assets/assets/aboutUs_second_variant.json": "c1720fdeb99f19378c07dc597580afb4",
"assets/assets/driver_icon.png": "ed04f29b7ad6f30ee6ca36733b1c3f76",
"assets/assets/testheaderThird.json": "27604200ff863be09b6a6f7f81fa090a",
"assets/assets/bus.png": "df3bc3feb0910b3fcf477162e9b034a4",
"assets/assets/fonts/DM-Sans.ttf": "30bbfaf1881a04a75d232352a268303f",
"assets/assets/google.png": "d8625b338b13c0a1703ae2cd0059540f",
"assets/assets/contact_us.json": "00db015c0bb2df19bdf3b044245cf3a7",
"assets/assets/splash_screen_var_one.json": "f480dde4f2acea33c8de17e67e66a164",
"assets/assets/full_screen_drawer.json": "ac7cb865640ad21c3662fa5bd306f942",
"assets/assets/aboutUs.json": "f7937363464dca7d9238b9f818d5fe0e",
"assets/assets/side_navigation_drawer.json": "1e8328568c3dcde876cb969007007ca4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
