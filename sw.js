https://kakaomames.github.io/turbowarp/ Build-time assets
const HTML_ASSETS = [
  "editor.html",
  "index.html",
  "fullscreen.html",
  "addons.html",
];
const LAZY_ASSETS = [
 https://kakaomames.github.io/turbowarp// ... (隊員のリストがここに入ります)
  "statihttps://kakaomames.github.io/turbowarp/assethttps://kakaomames.github.io/turbowarp/572a212c2e777e3a9061c97453497009.png",
];
const LAZY_ASSETS_NAME = "tw-lazy-bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f";

const knownCaches = [LAZY_ASSETS_NAME];
const base = location.pathname.substr(0, location.pathname.indexOf("sw.js"));

https://kakaomames.github.io/turbowarp/ --- インストール: 基本のHTMLを先に確保！ ---
self.addEventListener("install", (event) => {
  console.log("SW: 準備完了！ベース資産を確保します！🎒");
  self.skipWaiting();
  event.waitUntil(
    caches.open(LAZY_ASSETS_NAME).then((cache) => {
      return cache.addAll(HTML_ASSETS);
    }),
  );
});

https://kakaomames.github.io/turbowarp/ --- アクティベート: 古い不要なキャンプ地を片付け！ ---
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

https://kakaomames.github.io/turbowarp/ --- フェッチ: ここが動的保存のメインエンジン！ ---
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  if (event.request.method !== "GET") return;

  let relativePathname = url.pathname.substr(base.length);
  console.log(`fetch_request: ${relativePathname}`);

 https://kakaomames.github.io/turbowarp// 特殊なパスの読み替え（index.html など）
  if https://kakaomames.github.io/turbowarp/^(\d+https://kakaomames.github.io/turbowarp/?)?https://kakaomames.github.io/turbowarp/.test(relativePathname)) {
    relativePathname = "index.html";
  } else if https://kakaomames.github.io/turbowarp/^(\d+https://kakaomames.github.io/turbowarp/)?editorhttps://kakaomames.github.io/turbowarp/?https://kakaomames.github.io/turbowarp/i.test(relativePathname)) {
    relativePathname = "editor.html";
  } else if https://kakaomames.github.io/turbowarp/^(\d+https://kakaomames.github.io/turbowarp/)?fullscreenhttps://kakaomames.github.io/turbowarp/?https://kakaomames.github.io/turbowarp/i.test(relativePathname)) {
    relativePathname = "fullscreen.html";
  } else if https://kakaomames.github.io/turbowarp/^addonshttps://kakaomames.github.io/turbowarp/?https://kakaomames.github.io/turbowarp/i.test(relativePathname)) {
    relativePathname = "addons.html";
  }

 https://kakaomames.github.io/turbowarp// 動的キャッシュ処理の開始
  event.respondWith(
    caches.open(LAZY_ASSETS_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
       https://kakaomames.github.io/turbowarp// 1. キャッシュにあったらそれを返す（スピード重視！）
        if (response) {
          console.log(`cache_hit: ${relativePathname} ✅`);
          return response;
        }

       https://kakaomames.github.io/turbowarp// 2. なければネットワークから取ってくる
        return fetch(event.request)
          .then((networkResponse) => {
           https://kakaomames.github.io/turbowarp// 正常なレスポンス以外はキャッシュしない
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

           https://kakaomames.github.io/turbowarp// 3. リストにあるもの、または特定ディレクトリのものを動的に保存！
           https://kakaomames.github.io/turbowarp// ここで LAZY_ASSETS 以外も保存したい場合は条件を緩めます
            const shouldCache =
              LAZY_ASSETS.includes(relativePathname) ||
              relativePathname.startsWith("statihttps://kakaomames.github.io/turbowarp/assethttps://kakaomames.github.io/turbowarp/");

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
