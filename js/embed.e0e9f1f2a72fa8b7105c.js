var GUI = (function (e) {
  function n(n) {
    for (
      var t, o, c = n[0], l = n[1], s = n[2], i = 0, b = [];
      i < c.length;
      i++
    )
      ((o = c[i]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && b.push(a[o][0]),
        (a[o] = 0));
    for (t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
    for (f && f(n); b.length;) b.shift()();
    return (r.push.apply(r, s || []), d());
  }
  function d() {
    for (var e, n = 0; n < r.length; n++) {
      for (var d = r[n], t = !0, c = 1; c < d.length; c++) {
        var l = d[c];
        0 !== a[l] && (t = !1);
      }
      t && (r.splice(n--, 1), (e = o((o.s = d[0]))));
    }
    return e;
  }
  var t = {},
    a = { 76: 0 },
    r = [];
  function o(n) {
    if (t[n]) return t[n].exports;
    var d = (t[n] = { i: n, l: !1, exports: {} });
    return (e[n].call(d.exports, d, d.exports, o), (d.l = !0), d.exports);
  }
  ((o.e = function (e) {
    var n = [],
      d = a[e];
    if (0 !== d)
      if (d) n.push(d[2]);
      else {
        var t = new Promise(function (n, t) {
          d = a[e] = [n, t];
        });
        n.push((d[2] = t));
        var r,
          c = document.createElement("script");
        ((c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = (function (e) {
            return (
              o.p +
              "jhttps://kakaomames.github.io/turbowarp/" +
              ({
                1: "addon-settings~addons~editor~fullscreen~player",
                4: "addon-default-entry",
                5: "addon-entry-2d-color-picker",
                6: "addon-entry-better-img-uploads",
                7: "addon-entry-block-count",
                8: "addon-entry-block-palette-icons",
                9: "addon-entry-blocks2image",
                10: "addon-entry-cat-blocks",
                11: "addon-entry-clones",
                12: "addon-entry-columns",
                13: "addon-entry-custom-block-shape",
                14: "addon-entry-custom-block-text",
                15: "addon-entry-custom-zoom",
                16: "addon-entry-data-category-tweaks-v2",
                17: "addon-entry-debugger",
                18: "addon-entry-default-costume-editor-color",
                19: "addon-entry-disable-paste-offset",
                20: "addon-entry-disable-stage-drag-select",
                21: "addon-entry-editor-buttons-reverse-order",
                22: "addon-entry-editor-colored-context-menus",
                23: "addon-entry-editor-extra-keys",
                24: "addon-entry-editor-sounds",
                25: "addon-entry-editor-stage-left",
                26: "addon-entry-editor-stepping",
                27: "addon-entry-editor-theme3",
                28: "addon-entry-fullscreen",
                29: "addon-entry-gamepad",
                30: "addon-entry-hide-delete-button",
                31: "addon-entry-hide-flyout",
                32: "addon-entry-hide-new-variables",
                33: "addon-entry-hide-stage",
                34: "addon-entry-initialise-sprite-position",
                35: "addon-entry-load-extensions",
                36: "addon-entry-mediarecorder",
                37: "addon-entry-mouse-pos",
                38: "addon-entry-no-script-bumping",
                39: "addon-entry-number-pad",
                40: "addon-entry-paint-by-default",
                41: "addon-entry-paint-snap",
                42: "addon-entry-remove-curved-stage-border",
                43: "addon-entry-remove-sprite-confirm",
                44: "addon-entry-script-snap",
                45: "addon-entry-search-sprites",
                46: "addon-entry-sprite-properties",
                47: "addon-entry-swap-local-global",
                48: "addon-entry-transparent-orphans",
                49: "addon-entry-tw-disable-cloud-variables",
                50: "addon-entry-tw-disable-compiler",
                51: "addon-entry-tw-remove-backpack",
                52: "addon-entry-tw-remove-feedback",
                53: "addon-entry-tw-straighten-comments",
                54: "addon-entry-variable-manager",
                55: "addon-entry-vol-slider",
                56: "addon-entry-zebra-striping",
                57: "addon-l10n-de",
                58: "addon-l10n-es",
                59: "addon-l10n-fr",
                60: "addon-l10n-hu",
                61: "addon-l10n-it",
                62: "addon-l10n-ja",
                63: "addon-l10n-ko",
                64: "addon-l10n-nl",
                65: "addon-l10n-pl",
                66: "addon-l10n-pt",
                67: "addon-l10n-ro",
                68: "addon-l10n-ru",
                69: "addon-l10n-sl",
                70: "addon-l10n-tr",
                71: "addon-l10n-zh-tw",
                73: "addons",
                78: "iframe-extension-worker",
                79: "library-backdrops",
                80: "library-costumes",
                81: "library-sounds",
                82: "library-sprites",
                84: "sb",
              }[e] || e) +
              "." +
              {
                1: "1af613e0edbf7211ac43",
                4: "61b031db673d66b31d20",
                5: "9167dae4b14171701f20",
                6: "2ca5d043b5110404db52",
                7: "38b48a02dc94dbd9531e",
                8: "4be037b3c9b0d06031a6",
                9: "67668867d53396b1805f",
                10: "7c945db7fbbeb97d968c",
                11: "41a9e0054b3769c2d674",
                12: "7d6aa859020164e09323",
                13: "15213e4070adae6e3dab",
                14: "8b508545f0054f036856",
                15: "8d979543f73bbcd9a6f8",
                16: "c1bf28727e9048824e8f",
                17: "b3a004785317e412d9b7",
                18: "4235d8b79c4a3c73be9c",
                19: "1ef8f9e2f356878f9548",
                20: "2e1c3fe5da6ad574206d",
                21: "320f5179822bfacc44b3",
                22: "518284315336b7e3979c",
                23: "77d0ef1f6d9abf645f9f",
                24: "db5fa8f24c6195d2e058",
                25: "e8467004f929857ce1dd",
                26: "aaf880e03d1df94ce2d3",
                27: "a27008859bac4c604314",
                28: "222c056dd0688cba9343",
                29: "c9d82685a9748d83966d",
                30: "113ecb214c4fb22dde69",
                31: "f26da8fba71d9c4e6693",
                32: "07f2de04487aa6e422b7",
                33: "0b48a8610c71c2b9665e",
                34: "0bc43a1c34a17cf1a052",
                35: "b89d5207085d24419c9a",
                36: "1b976a5c16eec6905e97",
                37: "c62fa70d372dc9f3ef8d",
                38: "d589d463953c5edbb39f",
                39: "c729587f87857d746b02",
                40: "db7c65668eff3d46bc80",
                41: "f3d837ead823ae3ffce3",
                42: "7b0cfb055df68d100a74",
                43: "ed3cd5b0a7a84f2b1f10",
                44: "44691da4c7192463548d",
                45: "700a19e19b9d35f94c36",
                46: "339a3bf278ed06a36356",
                47: "8ef2697b19df0980495b",
                48: "8ea83f6e976e2a1a1bb8",
                49: "a286f3e67082a3b734f7",
                50: "04f8746705c30ab0318e",
                51: "0fcb5ca080960398ec53",
                52: "f7b95c65ed0d2644d1fa",
                53: "cfb293879e9bcb631ef9",
                54: "c045ab194bd17ccd8db7",
                55: "9b31e15473d56cd57713",
                56: "ccb2531052686c9c0d95",
                57: "e710a53e85ecc91e299a",
                58: "46d7675ecea579fe345b",
                59: "bf8eace6b3eb75cef14f",
                60: "d150fc80e9e8676263ec",
                61: "3d4ffc6a0063a72d0a22",
                62: "f24bce0e9076c05c53f3",
                63: "7795a741e2ee763a7e3f",
                64: "6100e045d473da7b3c21",
                65: "c2e47fbbc8ca51cea472",
                66: "033fb0ad5ed3ec4cb242",
                67: "9e0df549b4e4648ec93c",
                68: "82eedbc7a858c6cd113f",
                69: "4cf871f1345a2b7e3f6c",
                70: "ef255ae4183681f710f3",
                71: "30cafacb69bec09dd0a1",
                73: "1dc1f24d6a190dfd8ff2",
                78: "e6657d8b2d4ed454e25f",
                79: "73e533f9d1c4cdee01e3",
                80: "39a3bb4afe89c3234aed",
                81: "e93bca4daedff508b65e",
                82: "abc52a9f2485ee5065e8",
                84: "8841b9a049c868fcb6d7",
              }[e] +
              ".js"
            );
          })(e)));
        var l = new Error();
        r = function (n) {
          ((c.onerror = c.onload = null), clearTimeout(s));
          var d = a[e];
          if (0 !== d) {
            if (d) {
              var t = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src;
              ((l.message =
                "Loading chunk " + e + " failed.\n(" + t + ": " + r + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = t),
                (l.request = r),
                d[1](l));
            }
            a[e] = void 0;
          }
        };
        var s = setTimeout(function () {
          r({ type: "timeout", target: c });
        }, 12e4);
        ((c.onerror = c.onload = r), document.head.appendChild(c));
      }
    return Promise.all(n);
  }),
    (o.m = e),
    (o.c = t),
    (o.d = function (e, n, d) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: d });
    }),
    (o.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (o.t = function (e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var d = Object.create(null);
      if (
        (o.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var t in e)
          o.d(
            d,
            t,
            function (n) {
              return e[n];
            }.bind(null, t),
          );
      return d;
    }),
    (o.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (o.d(n, "a", n), n);
    }),
    (o.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = ""),
    (o.oe = function (e) {
      throw (console.error(e), e);
    }));
  var c = (window.webpackJsonpGUI = window.webpackJsonpGUI || []),
    l = c.push.bind(c);
  ((c.push = n), (c = c.slice()));
  for (var s = 0; s < c.length; s++) n(c[s]);
  var f = l;
  return (r.push([1628, 0, 3, 2]), d());
})({
  1628: function (e, n, d) {
    "use strict";
    d.r(n);
    d(300);
    var t = d(48),
      a = d.n(t),
      r = d(1),
      o = d.n(r),
      c = d(40),
      l = d(77),
      s = d(164),
      f = d(5),
      i = d.n(f),
      b = d(0),
      u = d.n(b),
      p = d(6),
      y = d(78),
      h = d(25),
      m = d(179);
    const g = ["isFullScreen", "onSetIsFullScreen", "onSetWindowIsFullScreen"];
    function v(e, n) {
      if (null == e) return {};
      var d,
        t,
        a = (function (e, n) {
          if (null == e) return {};
          var d,
            t,
            a = {},
            r = Object.keys(e);
          for (t = 0; t < r.length; t++)
            ((d = r[t]), n.indexOf(d) >= 0 || (a[d] = e[d]));
          return a;
        })(e, n);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for (t = 0; t < r.length; t++)
          ((d = r[t]),
            n.indexOf(d) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, d) &&
                (a[d] = e[d])));
      }
      return a;
    }
    var S = d(166),
      w = d(174),
      F = d(175),
      O = d(73);
    const j = (() => {
        const e = location.hash.matchhttps://kakaomames.github.io/turbowarp/#(\d+https://kakaomames.github.io/turbowarp/);
        if (null !== e) return e[1];
        const n = location.pathname.matchhttps://kakaomames.github.io/turbowarp/(\d+)https://kakaomames.github.io/turbowarp/embehttps://kakaomames.github.io/turbowarp/);
        return null !== n ? n[n.length - 1] : "0";
      })(),
      k = new URLSearchParams(location.search);
    let I;
    const x = Object(c.d)(s.a, S.a, function (e) {
      class n extends o.a.Component {
        constructor(e) {
          (super(e), i()(this, ["handleFullScreenChange"]));
        }
        componentDidMount() {
          (document.addEventListener(
            "fullscreenchange",
            this.handleFullScreenChange,
          ),
            document.addEventListener(
              "webkitfullscreenchange",
              this.handleFullScreenChange,
            ));
        }
        shouldComponentUpdate(e) {
          return this.props.isFullScreen !== e.isFullScreen;
        }
        componentDidUpdate() {
          m.a.available() &&
            (this.props.isFullScreen
              ? m.a.request()
              : m.a.enabled() && m.a.exit());
        }
        componentWillUnmount() {
          (document.removeEventListener(
            "fullscreenchange",
            this.handleFullScreenChange,
          ),
            document.removeEventListener(
              "webkitfullscreenchange",
              this.handleFullScreenChange,
            ));
        }
        handleFullScreenChange() {
          const e = m.a.enabled();
          (this.props.onSetWindowIsFullScreen(e),
            this.props.onSetIsFullScreen(e));
        }
        render() {
          const n = this.props,
            {
              isFullScreen: d,
              onSetIsFullScreen: t,
              onSetWindowIsFullScreen: a,
            } = n,
            r = v(n, g);
          return o.a.createElement(e, r);
        }
      }
      n.propTypes = {
        isFullScreen: u.a.bool,
        onSetIsFullScreen: u.a.func,
        onSetWindowIsFullScreen: u.a.func,
      };
      return Object(p.b)(
        (e) => ({ isFullScreen: e.scratchGui.mode.isFullScreen }),
        (e) => ({
          onSetIsFullScreen: (n) => e(Object(y.c)(n)),
          onSetWindowIsFullScreen: (n) => e(Object(h.o)(n)),
        }),
      )(n);
    })(F.a);
    (Object(l.setAppElement)(O.a),
      a.a.render(
        o.a.createElement(x, {
          isEmbedded: !0,
          projectId: j,
          onVmInit: (e) => {
            I = e;
          },
          onProjectLoaded: () => {
            k.has("autoplay") && (I.start(), I.greenFlag());
          },
          routingStyle: "none",
        }),
        O.a,
      ),
      k.has("addons") && Object(w.a)());
  },
});
