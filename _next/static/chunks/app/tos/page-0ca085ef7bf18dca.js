(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    796: function (_, o, t) {
      Promise.resolve().then(t.bind(t, 4925)),
        Promise.resolve().then(t.t.bind(t, 9660, 23)),
        Promise.resolve().then(t.t.bind(t, 21, 23)),
        Promise.resolve().then(t.t.bind(t, 6426, 23));
    },
    4925: function (_, o, t) {
      "use strict";
      t.d(o, {
        default: function () {
          return f;
        },
      });
      var e = t(7437),
        n = t(6463),
        r = t(6648),
        c = t(7138),
        i = t(9987),
        s = t(5160),
        l = t.n(s);
      let a = [
        { id: 0, text: "ABOUT", desktop: 0, mobile: 0 },
        { id: 1, text: "HOW TO BUY", desktop: 3150, mobile: 3070 },
        { id: 2, text: "TOKENOMICS", desktop: 5583, mobile: 5453 },
      ];
      function f() {
        let _ = (0, n.usePathname)(),
          o = (0, n.useRouter)(),
          t = () => {
            window.open("https://www.Ethereumtoken.com/", "_blank");
          },
          s = (t, e) => {
            if (!window) return;
            let n = window.innerWidth > 850,
              r = "/" === _;
            r || o.push("/"),
              setTimeout(
                () => {
                  window.scrollTo({
                    left: 0,
                    top: n ? t : e,
                    behavior: "smooth",
                  });
                },
                r ? 0 : 500
              );
          };
        return (0, e.jsx)("footer", {
          className: l().footer + " footer",
          children: (0, e.jsxs)("div", {
            className: l().footer__container,
            children: [
              (0, e.jsx)("span", {
                className: l().footer__container__lineFirst,
              }),
              (0, e.jsx)("span", {
                className: l().footer__container__lineSecond,
              }),
              (0, e.jsx)(i.$s, {
                className: l().footer__container__cloudFirst + " desktop",
              }),
              (0, e.jsx)(i.$s, {
                className: l().footer__container__cloudSecond,
              }),
              (0, e.jsx)(i.el, {
                className: "".concat(
                  l().footer__container__cloudThird,
                  " mobile"
                ),
              }),
              (0, e.jsx)(i.rg, {
                className: l().footer__container__blockFirst,
              }),
              (0, e.jsx)(i.rg, {
                className: l().footer__container__blockSecond,
              }),
              (0, e.jsx)(i.sJ, {
                className: "".concat(
                  l().footer__container__blockFirst,
                  " mobile"
                ),
              }),
              (0, e.jsx)(i.sJ, {
                className: "".concat(
                  l().footer__container__blockSecond,
                  " mobile"
                ),
              }),
              (0, e.jsxs)("div", {
                className: l().footer__container__left,
                children: [
                  (0, e.jsxs)(c.default, {
                    href: "/",
                    className: l().footer__container__left__logo,
                    children: [
                      (0, e.jsx)("span", {
                        className: l().footer__container__left__logo__image,
                        children: (0, e.jsx)(r.default, {
                          src: "/static/img/logo.png",
                          alt: "logo",
                          fill: !0,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: l().footer__container__left__logo__text,
                        children: "LongWang",
                      }),
                    ],
                  }),
                  (0, e.jsx)("span", {
                    children: "Copyright \xa9 LongWang. All Rights Reserved.",
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: l().footer__container__medium,
                children: [
                  (0, e.jsx)("ul", {
                    children: a.map((_) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, e.jsx)("button", {
                            onClick: () => s(_.desktop, _.mobile),
                            children: _.text,
                          }),
                        },
                        _.id
                      )
                    ),
                  }),
                  (0, e.jsxs)("ul", {
                    children: [
                      (0, e.jsx)("li", {
                        children: (0, e.jsx)(c.default, {
                          href: "/tos",
                          children: "TERMS OF USE",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: l().footer__container__right,
                children: [
                  (0, e.jsxs)("div", {
                    className: l().footer__container__right__top,
                    children: [
                      (0, e.jsx)("span", { children: "Contact" }),
                      (0, e.jsxs)("div", {
                        className: l().footer__container__right__top__icons,
                        children: [
                          (0, e.jsx)("a", {
                            target: "_blank",
                            href: "https://x.com/LongWangDragonETH",
                            children: (0, e.jsx)(i.Zm, {}),
                          }),
                          (0, e.jsx)("a", {
                            target: "_blank",
                            href: "https://t.me/LongWangDragonETH",
                            children: (0, e.jsx)(i.YG, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    21: function (_) {
      _.exports = {
        block: "textBlock_block__Dnv3A",
        golden: "textBlock_golden__tf15T",
        block__sun: "textBlock_block__sun__bVpZy",
        block__firstSide: "textBlock_block__firstSide__ggfYI",
        block__secondSide: "textBlock_block__secondSide__HgoM_",
        block__firstBg: "textBlock_block__firstBg__hyNQu",
        block__secondBg: "textBlock_block__secondBg__jKhNY",
        block__content: "textBlock_block__content__yDnf_",
        block__content__title: "textBlock_block__content__title__5CGn0",
        block__content__line: "textBlock_block__content__line__sww6l",
        block__content__text: "textBlock_block__content__text__rTuQd",
        big: "textBlock_big__yI0Sd",
      };
    },
    5160: function (_) {
      _.exports = {
        footer: "footer_footer__HGTrQ",
        footer__container: "footer_footer__container__URjO9",
        footer__container__lineFirst:
          "footer_footer__container__lineFirst__0ouNH",
        footer__container__lineSecond:
          "footer_footer__container__lineSecond__AmBQI",
        footer__container__cloudFirst:
          "footer_footer__container__cloudFirst__EbfEN",
        footer__container__cloudSecond:
          "footer_footer__container__cloudSecond__07fdZ",
        footer__container__cloudThird:
          "footer_footer__container__cloudThird___w2Pg",
        footer__container__blockFirst:
          "footer_footer__container__blockFirst__JeFdr",
        footer__container__blockSecond:
          "footer_footer__container__blockSecond__cmMV4",
        footer__container__left: "footer_footer__container__left__ZXBth",
        footer__container__left__logo:
          "footer_footer__container__left__logo__B3NGf",
        footer__container__left__logo__image:
          "footer_footer__container__left__logo__image__WAwHp",
        footer__container__left__logo__text:
          "footer_footer__container__left__logo__text__6Qu9R",
        footer__container__medium: "footer_footer__container__medium__11vz_",
        footer__container__right: "footer_footer__container__right__x7LnI",
        footer__container__right__top:
          "footer_footer__container__right__top__sEth2",
        footer__container__right__top__icons:
          "footer_footer__container__right__top__icons__y_uHz",
      };
    },
    6426: function (_) {
      _.exports = {
        tos: "tos_tos__u4RKz",
        tos__sun: "tos_tos__sun__VxqQl",
        tos__leftCloud: "tos_tos__leftCloud__ILdeE",
        tos__rightCloud: "tos_tos__rightCloud__edbFj",
        tos__middle: "tos_tos__middle___EeaW",
        tos__middleSun: "tos_tos__middleSun__fuQEa",
        tos__clouds: "tos_tos__clouds__W_vOV",
        tos__cloudsSecond: "tos_tos__cloudsSecond__fYvSD",
        tos__endSun: "tos_tos__endSun__jb_DU",
        tos__endMobileSun: "tos_tos__endMobileSun__BmWSz",
        tos__content: "tos_tos__content__zAJyC",
        tos__content__top: "tos_tos__content__top__XiYSA",
        tos__content__bottom: "tos_tos__content__bottom__dZ3ih",
        tos__content__bottom__item: "tos_tos__content__bottom__item__jBXrr",
        tos__content__bottom__item__title:
          "tos_tos__content__bottom__item__title__wUY8u",
        tos__content__bottom__item__text:
          "tos_tos__content__bottom__item__text__BM5gn",
      };
    },
  },
  function (_) {
    _.O(0, [221, 724, 138, 824, 971, 23, 744], function () {
      return _((_.s = 796));
    }),
      (_N_E = _.O());
  },
]);
