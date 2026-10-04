// Build-time assets
const HTML_ASSETS = [
  "editor.html",
  "index.html",
  "fullscreen.html",
  "addons.html",
];
const LAZY_ASSETS = [
  // ... (隊員のリストがここに入ります)
  "static/assets/572a212c2e777e3a9061c97453497009.png",
];
const LAZY_ASSETS_NAME = "tw-lazy-bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f";

const knownCaches = [LAZY_ASSETS_NAME];
const base = location.pathname.substr(0, location.pathname.indexOf("sw.js"));

// --- インストール: 基本のHTMLを先に確保！ ---
self.addEventListener("install", (event) => {
  console.log("SW: 準備完了！ベース資産を確保します！🎒");
  self.skipWaiting();
  event.waitUntil(
    caches.open(LAZY_ASSETS_NAME).then((cache) => {
      return cache.addAll(HTML_ASSETS);
    }),
  );
});

// --- アクティベート: 古い不要なキャンプ地を片付け！ ---
self.addEventListener("activate", (event) => {
  console.log("SW: 起動！古いキャッシュを整理中...🧹");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((i) => !knownCaches.includes(i))
            .map((i) => caches.delete(i)),
        ),
      ),
  );
});

// --- フェッチ: ここが動的保存のメインエンジン！ ---
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  if (event.request.method !== "GET") return;

  let relativePathname = url.pathname.substr(base.length);
  console.log(`fetch_request: ${relativePathname}`);

  // 特殊なパスの読み替え（index.html など）
  if (/^(\d+\/?)?$/.test(relativePathname)) {
    relativePathname = "index.html";
  } else if (/^(\d+\/)?editor\/?$/i.test(relativePathname)) {
    relativePathname = "editor.html";
  } else if (/^(\d+\/)?fullscreen\/?$/i.test(relativePathname)) {
    relativePathname = "fullscreen.html";
  } else if (/^addons\/?$/i.test(relativePathname)) {
    relativePathname = "addons.html";
  }

  // 動的キャッシュ処理の開始
  event.respondWith(
    caches.open(LAZY_ASSETS_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        // 1. キャッシュにあったらそれを返す（スピード重視！）
        if (response) {
          console.log(`cache_hit: ${relativePathname} ✅`);
          return response;
        }

        // 2. なければネットワークから取ってくる
        return fetch(event.request)
          .then((networkResponse) => {
            // 正常なレスポンス以外はキャッシュしない
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            // 3. リストにあるもの、または特定ディレクトリのものを動的に保存！
            // ここで LAZY_ASSETS 以外も保存したい場合は条件を緩めます
            const shouldCache =
              LAZY_ASSETS.includes(relativePathname) ||
              relativePathname.startsWith("static/assets/");

            if (shouldCache) {
              console.log(`dynamic_cache_save: ${relativePathname} 📦`);
              cache.put(event.request, networkResponse.clone());
            }

            return networkResponse;
          })
          .catch((err) => {
            console.error("fetch_failed: オフラインかつキャッシュなし", err);
          });
      });
    }),
  );
});
