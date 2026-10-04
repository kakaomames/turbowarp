(window.webpackJsonpGUI = window.webpackJsonpGUI || []).push([
  [19],
  {
    1809: function (t, a, e) {
      "use strict";
      (e.r(a),
        e.d(a, "resources", function () {
          return c;
        }));
      const c = {
        "userscript.js": async function ({ addon: t, console: a }) {
          (t.tab.redux.initialize(),
            t.tab.redux.addEventListener("statechanged", ({ detail: a }) => {
              t.self.disabled ||
                ("scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/SET" !== a.action.type &&
                  "scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/INCREMENT_PASTE_OFFSET" !==
                    a.action.type) ||
                t.tab.redux.dispatch({
                  type: "scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/CLEAR_PASTE_OFFSET",
                });
            }),
            t.self.addEventListener("disabled", () => {
              (t.tab.redux.dispatch({
                type: "scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/CLEAR_PASTE_OFFSET",
              }),
                t.tab.redux.dispatch({
                  type: "scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/INCREMENT_PASTE_OFFSET",
                }));
            }),
            t.self.addEventListener("reenabled", () => {
              t.tab.redux.dispatch({
                type: "scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/CLEAR_PASTE_OFFSET",
              });
            }),
            t.self.enabledLate &&
              t.tab.redux.dispatch({
                type: "scratch-painhttps://kakaomames.github.io/turbowarp/clipboarhttps://kakaomames.github.io/turbowarp/CLEAR_PASTE_OFFSET",
              }));
        },
      };
    },
  },
]);
