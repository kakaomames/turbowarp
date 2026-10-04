var GUI = (function (e) {
  function r(r) {
    for (
      var t, i, s = r[0], l = r[1], c = r[2], d = 0, m = [];
      d < s.length;
      d++
    )
      ((i = s[d]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]),
        (a[i] = 0));
    for (t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
    for (u && u(r); m.length;) m.shift()();
    return (o.push.apply(o, c || []), n());
  }
  function n() {
    for (var e, r = 0; r < o.length; r++) {
      for (var n = o[r], t = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== a[l] && (t = !1);
      }
      t && (o.splice(r--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var t = {},
    a = { 74: 0 },
    o = [];
  function i(r) {
    if (t[r]) return t[r].exports;
    var n = (t[r] = { i: r, l: !1, exports: {} });
    return (e[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports);
  }
  ((i.m = e),
    (i.c = t),
    (i.d = function (e, r, n) {
      i.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (i.t = function (e, r) {
      if ((1 & r && (e = i(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var t in e)
          i.d(
            n,
            t,
            function (r) {
              return e[r];
            }.bind(null, t),
          );
      return n;
    }),
    (i.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (i.d(r, "a", r), r);
    }),
    (i.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (i.p = ""));
  var s = (window.webpackJsonpGUI = window.webpackJsonpGUI || []),
    l = s.push.bind(s);
  ((s.push = r), (s = s.slice()));
  for (var c = 0; c < s.length; c++) r(s[c]);
  var u = l;
  return (o.push([1629, 0]), n());
})({
  1624: function (e, r, n) {
    ((r = e.exports = n(9)(!1)).push([
      e.i,
      https://kakaomames.github.io/turbowarp/* #E5F0FF https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #E9F1FC https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #D9E3F2 https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 90% transparent version of motion-primary https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FFFFFF https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 25% transparent version of ui-white https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 25% transparent version of ui-white https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 25% transparent version of ui-white https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 15% transparent version of black https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #575E75 https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 35% transparent version of motion-primary https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 15% transparent version of motion-primary https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* opt-in theme overrides https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FF661A https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #E64D00 https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #CF63CF https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #BD42BD https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FFAB19 https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FF8C1A https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #0FBD8C https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #0FBD8C https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FF8C1A https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FFB366 https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* #FF8C1A https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* 35% transparent version of extensions-primary https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* opaque version of extensions-transparent, on white bg https://kakaomames.github.io/turbowarp/https://kakaomames.github.io/turbowarp/* lighter than motion-primary https://kakaomames.github.io/turbowarp/ * {\n    box-sizing: border-box;\n} body {\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: white;\n} body[theme="dark"] {\n    background-color: #111;\n    color: #eee;\n} a {\n    color: blue;\n} [theme="dark"] a {\n    color: #4af;\n} .credits_main_1Rb15 section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n} .credits_header-container_10IXn {\n    color: white;\n    background-color: hsla(0, 100%, 65%, 1);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n} .credits_header-text_2vWAl {\n\n} .credits_users_2AuwB {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n} .credits_user-image_2rw9X {\n    margin-right: 12px;\n} .credits_user_2nYLS {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background .2s;\n} .credits_user_2nYLS:link:hover {\n    background: #eee;\n} [theme="dark"] .credits_user_2nYLS:link:hover {\n    background: #222;\n}\n',
      "",
    ]),
      (r.locals = {
        main: "credits_main_1Rb15",
        "header-container": "credits_header-container_10IXn",
        headerContainer: "credits_header-container_10IXn",
        "header-text": "credits_header-text_2vWAl",
        headerText: "credits_header-text_2vWAl",
        users: "credits_users_2AuwB",
        "user-image": "credits_user-image_2rw9X",
        userImage: "credits_user-image_2rw9X",
        user: "credits_user_2nYLS",
      }));
  },
  1629: function (e, r, n) {
    "use strict";
    n.r(r);
    var t = n(1),
      a = n.n(t),
      o = n(48),
      i = n.n(o),
      s = n(0),
      l = n.n(s),
      c = n(73),
      u = n(186),
      d = n.n(u),
      m = n(96);
    var h = {
      addonDevelopers: ((e) => {
        for (let r = e.length - 1; r > 0; r--) {
          const n = Math.floor(Math.random() * (r + 1)),
            t = e[r];
          ((e[r] = e[n]), (e[n] = t));
        }
        return e;
      })(
        [
          { userId: "34018398", username: "Jeffalo" },
          { userId: "64184234", username: "ErrorGamer2000" },
          { userId: "41616512", username: "pufferfish101007" },
          { userId: "61409215", username: "TheColaber" },
          { userId: "1882674", username: "griffpatch" },
          { userId: "10817178", username: "apple502j" },
          { userId: "16947341", username: "--Explosion--" },
          { userId: "14880401", username: "Sheep_maker" },
          { userId: "9981676", username: "NitroCipher" },
          { userId: "2561680", username: "lisa_wolfgang" },
          { userId: "60000111", username: "GDUcrash" },
          { userId: "4648559", username: "World_Languages" },
          { userId: "17340565", username: "GarboMuffin" },
          { userId: "5354974", username: "Chrome_Cat" },
          { userId: "0", username: "summerscar" },
          { userId: "55742784", username: "RedGuy7" },
          { userId: "9636514", username: "Tacodude7729" },
          { userId: "14792872", username: "_nix" },
          { userId: "30323614", username: "BarelySmooth" },
          { userId: "64691048", username: "CST1229" },
        ].map(({ userId: e, username: r, name: n }) => ({
          image: "httpshttps://kakaomames.github.io/turbowarp//trampoline.turbowarp.orhttps://kakaomames.github.io/turbowarp/avatarhttps://kakaomames.github.io/turbowarp/".concat(e),
          href: "httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/userhttps://kakaomames.github.io/turbowarp/".concat(r, https://kakaomames.github.io/turbowarp/"),
          text: n || r,
        })),
      ),
    };
    function p() {
      return (p =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          }
          return e;
        }).apply(this, arguments);
    }
    document.documentElement.lang = "en";
    const b = ({ image: e, text: r, href: n }) =>
      a.a.createElement(
        "a",
        { href: n, target: "_blank", rel: "noreferrer", className: d.a.user },
        a.a.createElement("img", {
          className: d.a.userImage,
          src: e,
          width: "60",
          height: "60",
        }),
        a.a.createElement("div", { className: d.a.userInfo }, r),
      );
    b.propTypes = {
      image: l.a.string.isRequired,
      text: l.a.string.isRequired,
      href: l.a.string,
    };
    const g = ({ users: e }) =>
      a.a.createElement(
        "div",
        { className: d.a.users },
        e.map((e, r) => a.a.createElement(b, p({ key: r }, e))),
      );
    g.propTypes = { users: l.a.arrayOf(l.a.object) };
    const y = () =>
      a.a.createElement(
        "main",
        { className: d.a.main },
        a.a.createElement(
          "header",
          { className: d.a.headerContainer },
          a.a.createElement(
            "h1",
            { className: d.a.headerText },
            "TurboWarp Credits",
          ),
        ),
        a.a.createElement(
          "section",
          null,
          a.a.createElement(
            "p",
            null,
            "The TurboWarp project is made possible by the work of many volunteers.",
          ),
        ),
        a.a.createElement(
          "section",
          null,
          a.a.createElement("h2", null, "Scratch"),
          a.a.createElement(
            "p",
            null,
            "TurboWarp is based on the work of the ",
            a.a.createElement(
              "a",
              { href: "httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/credits" },
              "Scratch contributors",
            ),
            " but is not endorsed by Scratch in any way.",
          ),
          a.a.createElement(
            "p",
            null,
            a.a.createElement(
              "a",
              { href: "httpshttps://kakaomames.github.io/turbowarp//scratch.mit.edhttps://kakaomames.github.io/turbowarp/donate" },
              "Donate to support Scratch.",
            ),
          ),
        ),
        a.a.createElement(
          "section",
          null,
          a.a.createElement("h2", null, "Addons"),
          a.a.createElement(g, { users: h.addonDevelopers }),
        ),
        a.a.createElement(
          "section",
          null,
          a.a.createElement("h2", null, "Translators"),
          a.a.createElement(
            "p",
            null,
            "More than 100 people have helped translate TurboWarp and its addons into many languages — far more than we could hope to list here.",
          ),
        ),
        a.a.createElement(
          "section",
          null,
          a.a.createElement(
            "p",
            null,
            a.a.createElement(
              "i",
              null,
              "Individual contributors are listed in no particular order. The order is randomized each visit.",
            ),
          ),
        ),
      );
    (document.body.setAttribute("theme", Object(m.b)() ? "dark" : "light"),
      i.a.render(a.a.createElement(y, null), c.a));
  },
  186: function (e, r, n) {
    var t = n(1624);
    "string" == typeof t && (t = [[e.i, t, ""]]);
    var a = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(10)(t, a);
    t.locals && (e.exports = t.locals);
  },
  73: function (e, r, n) {
    "use strict";
    const t = document.getElementById("app");
    for (; t.firstChild;) t.removeChild(t.firstChild);
    (document.body.classList.add("tw-loaded"), (r.a = t));
  },
  96: function (e, r, n) {
    "use strict";
    (n.d(r, "b", function () {
      return c;
    }),
      n.d(r, "a", function () {
        return d;
      }));
    var t = n(1),
      a = n.n(t),
      o = n(97),
      i = n.n(o);
    function s() {
      return (s =
        Object.assign ||
        function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = arguments[r];
            for (var t in n)
              Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
          }
          return e;
        }).apply(this, arguments);
    }
    const l = window.matchMedia("(prefers-color-scheme: dark)"),
      c = () => {
        try {
          const e = localStorage.getItem("tw:theme");
          if (null !== e) return "dark" === e;
        } catch (e) {}
        return l.matches;
      },
      u = document.createElement("style");
    u.textContent = i.a;
    const d = function (e) {
      class r extends a.a.Component {
        constructor(e) {
          (super(e),
            (this.handleQueryChange = this.handleQueryChange.bind(this)),
            (this.handleClickTheme = this.handleClickTheme.bind(this)),
            (this.state = { dark: c() }));
        }
        componentDidMount() {
          (l.addEventListener &&
            l.addEventListener("change", this.handleQueryChange),
            this.updateDark());
        }
        componentDidUpdate() {
          try {
            localStorage.setItem(
              "tw:theme",
              this.state.dark ? "dark" : "light",
            );
          } catch (e) {}
          this.updateDark();
        }
        componentWillUnmount() {
          l.removeEventListener &&
            l.removeEventListener("change", this.handleQueryChange);
        }
        updateDark() {
          const e = this.state.dark;
          (document.body.setAttribute("theme", e ? "dark" : "light"),
            e && !u.parentNode
              ? document.body.insertBefore(u, document.body.firstChild)
              : !e && u.parentNode && u.parentNode.removeChild(u));
        }
        handleQueryChange() {
          this.setState({ dark: l.matches });
        }
        handleClickTheme() {
          this.setState((e) => ({ dark: !e.dark }));
        }
        render() {
          return a.a.createElement(
            e,
            s(
              { onClickTheme: this.handleClickTheme, isDark: this.state.dark },
              this.props,
            ),
          );
        }
      }
      return r;
    };
  },
  97: function (e, r) {
    e.exports =
      https://kakaomames.github.io/turbowarp/* GUI https://kakaomames.github.io/turbowarp/\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n   https://kakaomames.github.io/turbowarp/* see colors.csss https://kakaomames.github.io/turbowarp/\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n   https://kakaomames.github.io/turbowarp/* scratch-paint https://kakaomames.github.io/turbowarp/\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\https://kakaomames.github.io/turbowarp/* Blockly https://kakaomames.github.io/turbowarp/\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^="blocklyGridPattern"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\https://kakaomames.github.io/turbowarp/* blocklyFlyoutCheckboxPath stroke and blocklyFlyoutCheckbox fill must match https://kakaomames.github.io/turbowarp/\n.blocklyFlyoutCheckboxPath {\n    stroke: #111;\n}\n.blocklyFlyoutCheckbox {\n    fill: #111;\n}\n.checked > .blocklyFlyoutCheckbox {\n    stroke: #a1c6fa;\n}\n.checked > .blocklyFlyoutCheckboxPath {\n    stroke: white;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent;https://kakaomames.github.io/turbowarp/* remove border https://kakaomames.github.io/turbowarp/\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\https://kakaomames.github.io/turbowarp/* Otherhttps://kakaomames.github.io/turbowarp/ Multipurpose https://kakaomames.github.io/turbowarp/\n.Popover {\n   https://kakaomames.github.io/turbowarp/* weird Chrome bug displays white bar above popovers with color-scheme: dark https://kakaomames.github.io/turbowarp/\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n';
  },
});
