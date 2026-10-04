(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([
  [51],
  {
    1755: function (n, e, s) {
      (n.exports = s(9)(!1)).push([
        n.i,
        '[class^="backpack_backpack-container"] {\n  display: none;\n}\n',
        "",
      ]);
    },
    1819: function (n, e, s) {
      "use strict";
      (s.r(e),
        s.d(e, "resources", function () {
          return a;
        }));
      var c = s(1755);
      const a = {
        "remove-backpack.js": async function ({ addon: n }) {
          const e = () => window.dispatchEvent(new Event("resize"));
          (n.self.addEventListener("disabled", e),
            n.self.addEventListener("reenabled", e),
            e());
        },
        "remove-backpack.css": s.n(c).a,
      };
    },
  },
]);
