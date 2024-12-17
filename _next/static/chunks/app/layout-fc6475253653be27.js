(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    9094: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 4402)),
        Promise.resolve().then(s.bind(s, 8506)),
        Promise.resolve().then(s.bind(s, 8188)),
        Promise.resolve().then(s.t.bind(s, 851, 23)),
        Promise.resolve().then(s.t.bind(s, 9173, 23)),
        Promise.resolve().then(s.t.bind(s, 7712, 23)),
        Promise.resolve().then(s.t.bind(s, 1802, 23));
    },
    2421: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = s(7437),
        i = s(9660),
        r = s.n(i),
        l = s(9987);
      function o(e) {
        let {
          text: t,
          secondText: s,
          handler: i = "",
          className: o,
          isButton: a = !1,
        } = e;
        return (0, n.jsx)(n.Fragment, {
          children: a
            ? (0, n.jsxs)("button", {
                onClick: i,
                className: ""
                  .concat(r().block, " ")
                  .concat(r().block__hover, " ")
                  .concat(o),
                children: [
                  (0, n.jsx)("div", { className: r().block__hover__box }),
                  (0, n.jsx)(l.C6, { className: r().block__firstSide }),
                  (0, n.jsx)(l.Co, { className: r().block__firstBg }),
                  (0, n.jsxs)("div", {
                    className: r().block__content,
                    children: [
                      (0, n.jsx)("span", {
                        className: r().block__content__line,
                      }),
                      (0, n.jsxs)("span", {
                        className: ""
                          .concat(r().block__content__text, " ")
                          .concat(r().button),
                        children: [
                          t,
                          "\xa0",
                          (0, n.jsx)(l.nm, { className: r().block__dollar }),
                          s,
                        ],
                      }),
                      (0, n.jsx)("span", {
                        className: r().block__content__line,
                      }),
                    ],
                  }),
                  (0, n.jsx)(l.C6, { className: r().block__secondSide }),
                ],
              })
            : (0, n.jsxs)("div", {
                className: "".concat(r().block, " ").concat(o),
                children: [
                  (0, n.jsx)(l.C6, { className: r().block__firstSide }),
                  (0, n.jsx)(l.Co, { className: r().block__firstBg }),
                  (0, n.jsx)(l.NC, {
                    className: r().block__secondBg + " desktop",
                  }),
                  (0, n.jsxs)("div", {
                    className: r().block__content,
                    children: [
                      (0, n.jsx)("span", {
                        className: r().block__content__line,
                      }),
                      (0, n.jsx)("span", {
                        className: r().block__content__text,
                        children: t,
                      }),
                      (0, n.jsx)("span", {
                        className: r().block__content__line,
                      }),
                    ],
                  }),
                  (0, n.jsx)(l.C6, { className: r().block__secondSide }),
                ],
              }),
        });
      }
    },
    4402: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return y;
        },
      });
      var n = s(7437),
        i = s(7138),
        r = s(6648),
        l = s(2265),
        o = s(9987),
        a = s(4599),
        _ = s.n(a),
        d = (e) => {
          let { href: t = "", text: s } = e;
          return (0, n.jsxs)("a", {
            target: "_blank",
            href: t,
            className: _().link,
            children: [
              (0, n.jsx)(o.Ez, { className: _().link__firstSide }),
              (0, n.jsx)(o.x_, { className: _().link__firstBg }),
              (0, n.jsx)("span", { className: _().link__line__first }),
              (0, n.jsx)("span", { children: s }),
              (0, n.jsx)("span", { className: _().link__line__last }),
              (0, n.jsx)(o.Ez, { className: _().link__secondSide }),
            ],
          });
        },
        c = s(9184),
        h = s.n(c),
        m = (e) => {
          let {
              isOpen: t,
              setIsOpen: s,
              isAnimating: i = !1,
              slideToggle: r,
            } = e,
            [o, a] = (0, l.useState)(!1);
          return (0, n.jsx)("button", {
            className: "mobile ".concat(h().menu),
            onClick: () => {
              i || (s((e) => !e), a(!0), r());
            },
            style: { marginBottom: !t && "-4px" },
            children: (0, n.jsxs)("svg", {
              className: "options",
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("rect", {
                  id: t ? "first" : o ? "first-close" : "",
                  x: "1",
                  width: "20",
                  height: "2",
                  fill: "#30230A",
                }),
                (0, n.jsx)("rect", {
                  id: t ? "second" : o ? "second-close" : "",
                  x: "1",
                  y: "6",
                  width: "20",
                  height: "2",
                  fill: "#30230A",
                }),
                (0, n.jsx)("rect", {
                  id: t ? "third" : o ? "third-close" : "",
                  x: "0.924805",
                  y: "12",
                  width: "20",
                  height: "2",
                  fill: "#30230A",
                }),
              ],
            }),
          });
        };
      let p = (e, t) => {
          let s = t || 500;
          (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = s + "ms"),
            (e.style.boxSizing = "border-box"),
            (e.style.height = e.offsetHeight + "px"),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = "0"),
            (e.style.paddingTop = "0"),
            (e.style.paddingBottom = "0"),
            (e.style.marginTop = "0"),
            (e.style.marginBottom = "0"),
            window.setTimeout(() => {
              (e.style.display = "none"),
                e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property");
            }, s);
        },
        u = (e, t) => {
          let s = t || 500;
          e.style.removeProperty("display");
          let n = window.getComputedStyle(e).display;
          "none" === n && (n = "block"), (e.style.display = n);
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = "0"),
            (e.style.paddingTop = "0"),
            (e.style.paddingBottom = "0"),
            (e.style.marginTop = "0"),
            (e.style.marginBottom = "0"),
            e.offsetHeight,
            (e.style.boxSizing = "border-box"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = s + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property");
            }, s);
        };
      var f = s(6463);
      let x = [
        { id: 0, text: "ABOUT", desktop: 0, mobile: 0 },
        { id: 1, text: "HOW TO BUY", desktop: 3150, mobile: 3070 },
        { id: 2, text: "TOKENOMICS", desktop: 5583, mobile: 5453 },
      ];
      function y() {
        let [e, t] = (0, l.useState)(!1),
          [s, o] = (0, l.useState)(!1),
          a = (0, l.useRef)(),
          _ = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 500,
              t = a.current,
              s = t.querySelector(".content");
            t.classList.contains("animating") ||
              ("none" === window.getComputedStyle(s).display
                ? u(s, e)
                : p(s, e),
              o(!0),
              t.classList.add("animating"),
              setTimeout(() => {
                o(!1), t.classList.remove("animating");
              }, e));
          },
          c = (0, f.usePathname)(),
          y = (0, f.useRouter)(),
          b = (e, s, n) => {
            if (!window) return;
            let i = window.innerWidth > 850;
            i || (t(!1), _());
            let r = "/" === c;
            r || y.push("/"),
              setTimeout(
                () => {
                  window.scrollTo({
                    left: 0,
                    top: i ? s : n,
                    behavior: "smooth",
                  });
                },
                r ? 0 : 500
              );
          };
        return (0, n.jsxs)("header", {
          className: h().header,
          ref: a,
          children: [
            (0, n.jsxs)("div", {
              className: h().header__content,
              children: [
                (0, n.jsxs)("div", {
                  className: h().header__mobile,
                  children: [
                    (0, n.jsx)(m, {
                      isOpen: e,
                      setIsOpen: t,
                      isAnimating: s,
                      slideToggle: _,
                    }),
                    (0, n.jsxs)(i.default, {
                      href: "/",
                      className: h().header__left,
                      children: [
                        (0, n.jsx)("span", {
                          className: h().header__left__image,
                          children: (0, n.jsx)(r.default, {
                            priority: !0,
                            src: "/static/img/logo.png",
                            alt: "logo",
                            fill: !0,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: h().header__left__text,
                          children: "LongWang",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("ul", {
                  className: h().header__medium,
                  children: [
                    x.map((e) =>
                      (0, n.jsx)(
                        "li",
                        {
                          children: (0, n.jsx)("button", {
                            onClick: () => b(e.text, e.desktop, e.mobile),
                            children: e.text,
                          }),
                        },
                        e.id
                      )
                    ),
                  ],
                }),
                (0, n.jsx)(d, {
                  href: "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=mainnet",
                  text: "buy now",
                }),
              ],
            }),
            (0, n.jsxs)("ul", {
              className: "".concat(h().header__links, " content"),
              style: { display: "none" },
              children: [
                x.map((e) =>
                  (0, n.jsx)(
                    "li",
                    {
                      className: "".concat(
                        0 === e.id ? h().header__links__first : ""
                      ),
                      children: (0, n.jsx)("button", {
                        onClick: () => b(e.text, e.desktop, e.mobile),
                        children: e.text,
                      }),
                    },
                    e.id
                  )
                ),
              ],
            }),
          ],
        });
      }
    },
    8506: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return _;
        },
      });
      var n = s(7437),
        i = s(2265),
        r = s(9582),
        l = s(8704),
        o = s.n(l),
        a = s(2421);
      function _() {
        let e = r.p8.timeline({}),
          t = () => {
            window.innerHeight;
            let t = window.innerWidth / 100;
            e.to(
              ".".concat(o().preloader__line),
              { width: 80 * t, duration: 3 },
              0
            );
          };
        (0, i.useEffect)(() => {
          (document.querySelector("html").style.overflowY = "hidden"), t();
        }, []);
        let [s, l] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            let t = setInterval(() => {
              l((e) => (99 === e ? e : e + 1)),
                "complete" === document.readyState &&
                  (l(100),
                  e
                    .to(
                      ".".concat(o().preloader),
                      {
                        duration: 0.4,
                        autoAlpha: 0,
                        ease: "linear",
                        delay: 0.5,
                      },
                      0
                    )
                    .to(
                      "html",
                      { duration: 0, overflowY: "visible", delay: 0.9 },
                      0
                    )
                    .to(".content", { duration: 0, visibility: "visible" }, 0),
                  clearInterval(t));
            }, 50);
          }, [s]),
          (0, n.jsx)("div", {
            className: o().preloader,
            children: (0, n.jsx)("div", {
              className: o()["inner-container"],
              children: (0, n.jsxs)("div", {
                className: o().preloader__center,
                children: [
                  (0, n.jsxs)("span", {
                    className: o().preloader__percent,
                    children: [s, "%"],
                  }),
                  (0, n.jsx)(a.Z, {
                    text: "Loading...",
                    className: o().preloader__line,
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    8188: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return r;
        },
      });
      var n = s(7437),
        i = s(1877);
      function r() {
        return (0, n.jsx)(i.default, {
          src: "/SmoothScroll.min.js",
          onLoad: l,
        });
      }
      let l = () => {
        let e = document.createElement("script");
        (e.src = "/librariesInit.js"),
          (e.async = !0),
          document.body.appendChild(e);
      };
    },
    7712: function () {},
    9173: function () {},
    1802: function () {},
    4599: function (e) {
      e.exports = {
        link: "headerLink_link__KsFCE",
        link__firstBg: "headerLink_link__firstBg__JY1kD",
        link__line__first: "headerLink_link__line__first__Jf4Jf",
        link__line__last: "headerLink_link__line__last__XwRkm",
        link__firstSide: "headerLink_link__firstSide__HK7fa",
        link__secondSide: "headerLink_link__secondSide__xst1a",
      };
    },
    9184: function (e) {
      e.exports = {
        header: "header_header__6vbH_",
        header__content: "header_header__content__bwZEe",
        header__links: "header_header__links__QZdmh",
        header__links__first: "header_header__links__first__4EjHS",
        header__links__last: "header_header__links__last__Rbikg",
        header__mobile: "header_header__mobile__yntpq",
        header__left: "header_header__left__fFPSh",
        header__left__image: "header_header__left__image__tQ08j",
        header__left__text: "header_header__left__text__vlkhH",
        header__medium: "header_header__medium__1xKzn",
        menu: "header_menu__GzRc5",
      };
    },
    8704: function (e) {
      e.exports = {
        preloader: "preloader_preloader__kM5H_",
        preloader__center: "preloader_preloader__center__vMie2",
        preloader__percent: "preloader_preloader__percent__7z_Wl",
        preloader__line: "preloader_preloader__line__UyEA2",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [864, 221, 605, 922, 724, 138, 582, 670, 824, 971, 23, 744],
      function () {
        return e((e.s = 9094));
      }
    ),
      (_N_E = e.O());
  },
]);
