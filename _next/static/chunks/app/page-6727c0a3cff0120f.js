(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5094: function (t, _, o) {
      Promise.resolve().then(o.bind(o, 4621));
    },
    4621: function (t, _, o) {
      "use strict";
      o.r(_),
        o.d(_, {
          default: function () {
            return I;
          },
        });
      var e = o(7437),
        s = o(6098),
        n = o(2265),
        c = o(9582),
        a = o(7504),
        r = o.n(a),
        i = o(9244),
        l = o(6648),
        d = o(9353),
        h = o.n(d),
        f = o(9987),
        u = o(2421),
        x = o(550);
      function m() {
        let t = (t, _, o) => {
          c.ZP.to(o, {
            duration: 0.2,
            ease: i.qD.easeIn,
            x: -((t.clientX - window.innerWidth / 2) / _),
          });
        };
        return (0, e.jsxs)("section", {
          onMouseMove: (_) => {
            window.innerWidth < 850 ||
              (t(_, -300, ".".concat(h().first__left, " .first")),
              t(_, -300, ".".concat(h().firstTree)),
              t(_, -300, ".".concat(h().secondTree)),
              t(_, -300, ".".concat(h().thirdTree)),
              t(_, -200, ".".concat(h().first__left, " .second")),
              t(_, -100, ".".concat(h().first__left, " .third")),
              t(_, 300, ".".concat(h().first__right, " .first")),
              t(_, 200, ".".concat(h().first__right, " .second")),
              t(_, 100, ".".concat(h().first__right, " .third")));
          },
          className: h().first,
          children: [
            (0, e.jsx)(f.vm, { className: h().first__sun }),
            (0, e.jsx)("div", {
              className: h().first__bgImg,
              children: (0, e.jsx)(l.default, {
                priority: !0,
                fill: !0,
                src: "/static/img/FirstScreen/firstScreenBg.png",
                alt: "bg",
              }),
            }),
            (0, e.jsx)("div", { className: h().first__bg }),
            (0, e.jsx)("div", {
              className: h().first__ground + " desktop",
              children: (0, e.jsx)(f.os, {}),
            }),
            (0, e.jsxs)("div", {
              className: h().first__left,
              children: [
                (0, e.jsx)("div", {
                  className: "first",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/Mountain1.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "second",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/Mountain2.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "third",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/Mountain3.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)(f.P8, { className: h().firstTree + " desktop" }),
                (0, e.jsx)(f.KN, { className: h().secondTree + " desktop" }),
                (0, e.jsx)(f.Kj, { className: h().thirdTree + " desktop" }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: h().first__right,
              children: [
                (0, e.jsx)("div", {
                  className: "first",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/MountainR1.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "second",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/MountainR2.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "third",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/MountainR3.png",
                    alt: "Mountain",
                  }),
                }),
              ],
            }),
            (0, e.jsx)("div", {
              className: h().first__coin,
              children: (0, e.jsx)(l.default, {
                priority: !0,
                src: "/static/img/coin.png",
                fill: !0,
                alt: "coin",
              }),
            }),
            (0, e.jsxs)("div", {
              className: h().first__content,
              children: [
                (0, e.jsx)("div", {
                  className: h().first__content__title + " desktop",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/title.png",
                    alt: "title",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: h().first__content__title + " mobile",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/titleMobile.png",
                    alt: "title",
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: h().first__content__block,
                  children: [
                    (0, e.jsx)("div", {
                      className: h().first__content__block__Ethereum,
                      children: (0, e.jsx)(l.default, {
                        fill: !0,
                        src: "/static/img/FirstScreen/Ethereum.png",
                        alt: "Ethereum",
                      }),
                    }),
                    (0, e.jsx)(u.Z, {
                      text: "Guardian of Ethereum Ecosystem",
                      className: h().first__content__block__title,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: h().first__content__box,
                  children: [
                    (0, e.jsx)(x.Z, {
                      isBig: !0,
                      text: "LongWang brings prosperity and harmony through the blockchain, supporting and enhancing Ethereum Ecosystem for a future of abundance and innovation.",
                      className: h().first__content__box__text,
                    }),
                    (0, e.jsx)(u.Z, {
                      handler: () => {
                        window.open(
                          "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=mainnet",
                          "_blank"
                        );
                      },
                      isButton: !0,
                      text: "BUY",
                      secondText: "LONG",
                      className: h().first__content__box__button,
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: h().first__links,
              children: [
                (0, e.jsx)("span", { children: "View info:" }),
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("a", {
                      href: "https://dextools.com/ethereum/ComingSoon/",
                      target: "_blank",
                      children: (0, e.jsx)(f.AA, {}),
                    }),
                    (0, e.jsx)("a", {
                      href: "https://dexscreener.com/ethereum/ComingSoon",
                      target: "_blank",
                      children: (0, e.jsx)(f.Ov, {}),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var g = o(2035),
        b = o.n(g);
      function j() {
        let t = (t, _, o) => {
          c.ZP.to(o, {
            duration: 0.2,
            ease: i.qD.easeIn,
            x: -((t.clientX - window.innerWidth / 2) / _),
          });
        };
        return (0, e.jsxs)("section", {
          onMouseMove: (_) => {
            window.innerWidth < 850 ||
              (t(_, 20, ".".concat(b().second__sea__wave1)),
              t(_, -80, ".".concat(b().second__sea__wave2)),
              t(_, 100, ".".concat(b().second__sea__wave3)),
              t(_, -50, ".".concat(b().second__sea__wave4)));
          },
          className: b().second,
          children: [
            (0, e.jsx)(f.WZ, {
              className: ""
                .concat(b().second__svg, " ")
                .concat(b().firstSVG, " first pillar pillar-bottom"),
            }),
            (0, e.jsx)("div", {
              className: "".concat(b().second__img, " pillar pillar-bottom"),
              children: (0, e.jsx)(l.default, {
                fill: !0,
                src: "/static/img/SecondScreen/Ethereum.png",
                alt: "Ethereum",
              }),
            }),
            (0, e.jsx)(f.JA, {
              className: ""
                .concat(b().second__svg, " ")
                .concat(b().secondSVG, " second pillar"),
            }),
            (0, e.jsxs)("div", {
              className: b().second__sea,
              children: [
                (0, e.jsx)(f.v8, {
                  className: b().second__sea__wave1 + " " + b().wave,
                }),
                (0, e.jsx)(f.iM, {
                  className: b().second__sea__wave2 + " " + b().wave,
                }),
                (0, e.jsx)(f.eG, {
                  className: b().second__sea__wave3 + " " + b().wave,
                }),
                (0, e.jsx)(f.sW, {
                  className: b().second__sea__wave4 + " " + b().wave,
                }),
                (0, e.jsxs)("div", {
                  className: b().second__sea__dragon,
                  children: [
                    (0, e.jsxs)("div", {
                      className: b().second__sea__dragon__head,
                      children: [
                        (0, e.jsx)(l.default, {
                          src: "/static/img/SecondScreen/DragonHead.png",
                          fill: !0,
                          alt: "dragon",
                        }),
                        (0, e.jsx)(f.G, {
                          className: b().second__sea__dragon__head__heart,
                        }),
                        (0, e.jsx)(f.Tt, {
                          className: b().second__sea__dragon__head__heart,
                        }),
                        (0, e.jsx)(f.WR, {
                          className: b().second__sea__dragon__head__heart,
                        }),
                        (0, e.jsx)(f.RA, {
                          className: b().second__sea__dragon__head__heart,
                        }),
                        (0, e.jsx)(f.hx, {
                          className: b().second__sea__dragon__head__heart,
                        }),
                        (0, e.jsx)(f.oY, {
                          className: b().second__sea__dragon__head__heart,
                        }),
                        (0, e.jsx)(f.Pq, {
                          className: b().second__sea__dragon__head__red,
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: b().second__sea__dragon__body,
                      children: (0, e.jsx)(l.default, {
                        src: "/static/img/SecondScreen/DragonBody.png",
                        fill: !0,
                        alt: "dragon",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: b().second__content,
              children: [
                (0, e.jsx)(x.Z, {
                  title: "ABOUT LONGWANG",
                  text: "LongWang is a majestic dragon, born of the digital depths and the boundless universe. With the wisdom to rule the crypto oceans and the might to soar through the universe, it stands as a beacon of strength and abundance. Infused with wisdom, loyalty, and an affinity for the ocean and universe, LongWang offers a new vision for cryptocurrency. Unleashed with no presale, zero taxes, liquidity locked, and contract renounced, Long is a token for teh people, forever.",
                  className: b().second__content__text,
                }),
                (0, e.jsx)(x.Z, {
                  title: "HARMONY WITH Ethereum",
                  text: "LongWang, in harmony with Ethereum the Sun Goddess and the Universe, forms a unified system within Ethereum Ecosystem. Together, they bring prosperity, harmony, and innovation through the blockchain.",
                  className: b().second__content__text,
                }),
                (0, e.jsx)(x.Z, {
                  title: "NO PRESALE, ZERO TAXES, LIQUIDITY LOCKED",
                  text: "LongWang brings prosperity and harmony through the blockchain, supporting and enhancing Ethereum Ecosystem for a future of abundance and innovation.",
                  className: b().second__content__text,
                }),
              ],
            }),
          ],
        });
      }
      var p = o(6682),
        k = o.n(p),
        N = o(6850),
        v = o.n(N);
      function y(t) {
        let { className: _ } = t;
        return (0, e.jsxs)("button", {
          onClick: () => {
            window.open(
              "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=mainnet",
              "_blank"
            );
          },
          className: "".concat(v().button, " ").concat(_),
          children: [
            (0, e.jsx)(f.jj, { className: v().button__bg }),
            (0, e.jsx)(f.vU, {
              className: "".concat(v().hovered, " ").concat(v().button__bg),
            }),
            (0, e.jsxs)("span", {
              className: v().button__text,
              children: [
                "BUY\xa0",
                (0, e.jsx)(f.nm, { className: v().button__text__dollar }),
                "LONG",
              ],
            }),
          ],
        });
      }
      function w() {
        return (0, e.jsxs)("section", {
          className: k().third,
          children: [
            (0, e.jsx)("div", {
              className: k().third__right + " desktop",
              children: (0, e.jsx)(l.default, {
                src: "/static/img/ThirdScreen/RightSide.png",
                fill: !0,
                alt: "bg",
              }),
            }),
            (0, e.jsxs)("div", {
              className: k().third__body,
              children: [
                (0, e.jsx)("div", {
                  className: k().third__acticles + " desktop",
                  children: (0, e.jsx)(l.default, {
                    src: "/static/img/ThirdScreen/bg.png",
                    alt: "bg",
                    fill: !0,
                  }),
                }),
                (0, e.jsx)("div", {
                  className: k().third__bg + " mobile",
                  children: (0, e.jsx)(l.default, {
                    src: "/static/img/ThirdScreen/map.png",
                    alt: "map",
                    fill: !0,
                  }),
                }),
                (0, e.jsx)(f.po, { className: k().third__bg + " desktop" }),
                (0, e.jsxs)("div", {
                  className: k().third__map,
                  children: [
                    (0, e.jsx)(f.VN, { className: k().border + " map-svg" }),
                    (0, e.jsx)(f.qC, { className: k().border + " map-svg" }),
                    (0, e.jsx)(f.sq, { className: k().border + " map-svg" }),
                    (0, e.jsx)(f.lc, { className: k().cross }),
                    (0, e.jsx)(f.bo, { className: "line start" }),
                    (0, e.jsx)(f.$F, { className: "line start" }),
                    (0, e.jsx)(f.Tk, { className: "line" }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: k().third__content,
                  children: [
                    (0, e.jsx)(u.Z, {
                      text: "How to Buy LongWang (Long) on Uniswap",
                      className: k().third__content__title,
                    }),
                    (0, e.jsx)(x.Z, {
                      title: "1. Create a Wallet",
                      text: "If you don't have one yet, start by creating a MetaMask, TrustWallet, or any preferred wallet. In this guide, we will use MetaMask, which you can set up on either a desktop computer or an iOS or Android mobile device. MetaMask allows you to buy, sell, send, and receive $LONG. Ensure to keep your recovery phrase in a safe place.",
                      className: k().third__content__text,
                    }),
                    (0, e.jsx)(x.Z, {
                      textClassname: k().third__content__textBlock,
                      title: "2. Get Some Ethereum (ETH)",
                      text: "If your wallet doesn’t have ETH, you can purchase it directly through MetaMask, transfer it from another wallet, or buy it on a centralized exchange and then withdraw it to your wallet.",
                      className: k().third__content__text,
                    }),
                    (0, e.jsx)(x.Z, {
                      textClassname: k().third__content__textBlock,
                      title: "3. Go to Uniswap",
                      text: "After you have Ethereum in your MetaMask wallet, you need to connect your wallet to Uniswap. To do this, visit the app.uniswap.org website, click 'Connect to a wallet,' and select MetaMask.",
                      className: k().third__content__text,
                    }),
                    (0, e.jsx)(x.Z, {
                      textClassname: k().third__content__textBlock,
                      isGolden: !0,
                      title: "4. Swap ETH for $LONG",
                      text: "Choose the amount you wish to trade and set your slippage to 0.5-1%. Click Swap and confirm the transaction. When your wallet prompts you, confirm the action.",
                      className: k().third__content__text,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: k().third__buy,
                  children: [
                    (0, e.jsx)(y, { className: k().third__buy__button }),
                    (0, e.jsx)("div", {
                      className: k().third__buy__coin1,
                      children: (0, e.jsx)(l.default, {
                        src: "/static/img/coin.png",
                        fill: !0,
                        alt: "coin",
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: k().third__buy__coin2,
                      children: (0, e.jsx)(l.default, {
                        src: "/static/img/coin.png",
                        fill: !0,
                        alt: "coin",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var T = o(2727),
        S = o.n(T),
        B = o(6767),
        M = o.n(B);
      function A(t) {
        let { title: _, text: o, className: s } = t;
        return (0, e.jsxs)("div", {
          className: "".concat(M().block, " ").concat(s),
          children: [
            (0, e.jsx)(u.Z, { text: _, className: M().block__title }),
            (0, e.jsx)(x.Z, { isBig: !0, text: o, className: M().block__text }),
          ],
        });
      }
      function C() {
        let [t, _] = (0, n.useState)(!1),
          o = (t, _, o) => {
            c.ZP.to(o, {
              duration: 0.2,
              ease: i.qD.easeIn,
              x: -((t.clientX - window.innerWidth / 2) / _),
            });
          };
        return (0, e.jsxs)("section", {
          onMouseMove: (t) => {
            window.innerWidth < 850 ||
              (o(t, 20, ".".concat(S().fourth__sea__wave1)),
              o(t, -80, ".".concat(S().fourth__sea__wave2)),
              o(t, 100, ".".concat(S().fourth__sea__wave3)),
              o(t, -50, ".".concat(S().fourth__sea__wave4)),
              o(t, -100, ".".concat(S().fourth__left, " .first")),
              o(t, -200, ".".concat(S().fourth__left, " .second")),
              o(t, 300, ".".concat(S().fourth__right, " .first")),
              o(t, 200, ".".concat(S().fourth__right, " .second")),
              o(t, 10, ".".concat(S().fourth__bg)));
          },
          className: S().fourth,
          children: [
            (0, e.jsx)("div", {
              className: S().fourth__title,
              children: (0, e.jsx)(l.default, {
                fill: !0,
                src: "/static/img/FourthScreen/title.png",
                alt: "title",
              }),
            }),
            (0, e.jsxs)("div", {
              className: S().fourth__sea,
              children: [
                (0, e.jsx)(f.v8, { className: S().fourth__sea__wave1 }),
                (0, e.jsx)(f.iM, { className: S().fourth__sea__wave2 }),
                (0, e.jsx)(f.eG, { className: S().fourth__sea__wave3 }),
                (0, e.jsx)(f.sW, { className: S().fourth__sea__wave4 }),
              ],
            }),
            (0, e.jsx)(f.rk, { className: S().fourth__bridge }),
            (0, e.jsx)(f.vm, { className: S().fourth__rays }),
            (0, e.jsx)(f.Ig, { className: S().fourth__sun }),
            (0, e.jsx)(f.Qh, { className: S().fourth__bg }),
            (0, e.jsxs)("div", {
              className: S().fourth__left,
              children: [
                (0, e.jsx)(f.Cs, {
                  className: "".concat(S().fourth__left__first, " first"),
                }),
                (0, e.jsx)(f.td, { className: "second" }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: S().fourth__right,
              children: [
                (0, e.jsx)(f.k1, { className: "first" }),
                (0, e.jsx)(f.Z_, { className: "second" }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: S().fourth__content,
              children: [
                (0, e.jsx)("div", {
                  className: S().first + " fourth-block",
                  children: (0, e.jsx)(A, {
                    title: "Total Supply:",
                    text: "1,000,000,000 $LONG",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: S().second + " fourth-block-end",
                  children: (0, e.jsx)(A, {
                    title: "Liquidity:",
                    text: "100% locked to UNCX",
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: S().third + " fourth-block-end",
                  children: [
                    (0, e.jsxs)("div", {
                      className: S().box,
                      children: [
                        (0, e.jsx)(A, { title: "Buy Tax:", text: "0%" }),
                        (0, e.jsx)(A, { title: "Sell Tax:", text: "0%" }),
                      ],
                    }),
                    (0, e.jsx)(A, { title: "Contract:", text: "Renounced" }),
                  ],
                }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: "".concat(S().fourth__address),
              children: [
                (0, e.jsx)("h1", { children: "Token Address:" }),
                (0, e.jsxs)("button", {
                  onClick: () => {
                    navigator.clipboard
                      .writeText("0xComingSoon")
                      .then(() => {
                        _(!0),
                          setTimeout(() => {
                            _(!1);
                          }, 3e3);
                      });
                  },
                  className: ""
                    .concat(S().fourth__address__button, " ")
                    .concat(t ? S().copied : ""),
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        "0xComing",
                        (0, e.jsx)("br", {}),
                        "Soon",
                      ],
                    }),
                    t ? (0, e.jsx)(f.ps, {}) : (0, e.jsx)(f.l1, {}),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var F = o(5878),
        R = o.n(F);
      function Z() {
        let t = (t, _, o) => {
          c.ZP.to(o, {
            duration: 0.2,
            ease: i.qD.easeIn,
            x: -((t.clientX - window.innerWidth / 2) / _),
          });
        };
        return (0, e.jsxs)("section", {
          onMouseMove: (_) => {
            window.innerWidth < 850 ||
              (t(_, -300, ".".concat(R().last__left, " .first")),
              t(_, -300, ".".concat(R().firstTree)),
              t(_, -300, ".".concat(R().secondTree)),
              t(_, -300, ".".concat(R().thirdTree)),
              t(_, -200, ".".concat(R().last__left, " .second")),
              t(_, -100, ".".concat(R().last__left, " .third")),
              t(_, 300, ".".concat(R().last__right, " .first")),
              t(_, 200, ".".concat(R().last__right, " .second")),
              t(_, 100, ".".concat(R().last__right, " .third")));
          },
          className: R().last,
          children: [
            (0, e.jsx)("div", {
              className: R().last__ground,
              children: (0, e.jsx)(f.os, {}),
            }),
            (0, e.jsxs)("div", {
              className: R().last__left,
              children: [
                (0, e.jsx)("div", {
                  className: "first",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/Mountain1.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "second",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/Mountain2.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "third",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/Mountain3.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)(f.P8, { className: R().firstTree }),
                (0, e.jsx)(f.KN, { className: R().secondTree }),
                (0, e.jsx)(f.Kj, { className: R().thirdTree }),
              ],
            }),
            (0, e.jsxs)("div", {
              className: R().last__right,
              children: [
                (0, e.jsx)("div", {
                  className: "first",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/MountainR1.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "second",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/MountainR2.png",
                    alt: "Mountain",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "third",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/MountainR3.png",
                    alt: "Mountain",
                  }),
                }),
              ],
            }),
            (0, e.jsx)("div", {
              className: R().last__coin,
              children: (0, e.jsx)(l.default, {
                src: "/static/img/coin.png",
                fill: !0,
                alt: "coin",
              }),
            }),
            (0, e.jsx)("div", {
              className: R().last__buyCoin,
              children: (0, e.jsx)(y, {}),
            }),
            (0, e.jsxs)("div", {
              className: R().last__content,
              children: [
                (0, e.jsx)("div", {
                  className: R().last__content__title + " desktop",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/title.png",
                    alt: "title",
                  }),
                }),
                (0, e.jsx)("div", {
                  className: R().last__content__title + " mobile",
                  children: (0, e.jsx)(l.default, {
                    fill: !0,
                    src: "/static/img/FirstScreen/titleMobile.png",
                    alt: "title",
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: R().last__content__box,
                  children: [
                    (0, e.jsx)(x.Z, {
                      isBig: !0,
                      text: "LongWang brings prosperity and harmony through the blockchain, supporting and enhancing Ethereum Ecosystem for a future of abundance and innovation.",
                      className: R().last__content__box__text,
                    }),
                    (0, e.jsx)(u.Z, {
                      handler: () => {
                        window.open(
                          "https://app.uniswap.org/swap?outputCurrency=0xComingSoon&chain=mainnet",
                          "_blank"
                        );
                      },
                      isButton: !0,
                      text: "BUY &#36;LONG",
                      className: R().last__content__box__button,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var O = o(4925);
      c.ZP.registerPlugin(s.ScrollTrigger),
        s.ScrollTrigger.config({ ignoreMobileResize: !1 }),
        c.ZP.ticker.lagSmoothing(0);
      let E = { duration: 1, ease: "linear" };
      function I() {
        let t = c.ZP.timeline({}),
          _ = c.ZP.context(() => {}),
          o = 0,
          s = () => {
            !o || 100 > Math.abs(o - window.innerWidth) || location.reload();
          },
          a = (t) => ({ ...E, ...t }),
          i = () => {
            let o = window.innerWidth,
              e = window.innerHeight,
              s = o / 100,
              n = e / 100;
            _ = c.ZP.context(() => {
              (t = c.ZP.timeline({
                scrollTrigger: {
                  trigger: ".animation-block",
                  start: "top 0%",
                  end: "top -8000px",
                  scrub: 1,
                  pin: ".animation-block",
                },
              })),
                o > 850
                  ? t
                      .add("first")
                      .to(
                        ".".concat(h().first__content),
                        a({ y: "-".concat(60 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__coin),
                        a({ y: "-=".concat(20 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__bgImg),
                        a({ y: "".concat(-20 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__sun),
                        a({ y: "".concat(50 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__content__box),
                        a({ y: "-".concat(60 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__links),
                        a({ y: "".concat(30 * n) }),
                        "first"
                      )
                      .fromTo(
                        ".".concat(h().first__content__box__button),
                        { y: "".concat(10 * n) },
                        a({ y: 0, delay: 0.5 }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__left),
                        a({ y: "".concat(10 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__right),
                        a({ y: "".concat(10 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__left, " .second"),
                        a({ y: "-".concat(5 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__left, " .third"),
                        a({ y: "-".concat(10 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__right, " .second"),
                        a({ y: "-".concat(5 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__right, " .third"),
                        a({ y: "-".concat(10 * n) }),
                        "first"
                      )
                      .to(
                        [
                          ".".concat(h().firstTree),
                          ".".concat(h().secondTree),
                          ".".concat(h().thirdTree),
                        ],
                        a({ y: "".concat(2 * n) }),
                        "first"
                      )
                      .add("second")
                      .to(
                        ".".concat(h().first__left),
                        a({ y: "".concat(50 * n), x: "-".concat(50 * s) }),
                        "second"
                      )
                      .to(
                        ".".concat(h().first__right),
                        a({ y: "".concat(50 * n), x: "".concat(50 * s) }),
                        "second"
                      )
                      .to(".".concat(h().first__sun), a({ y: 0 }), "second")
                      .to(
                        ".".concat(h().first__coin),
                        a({ y: "-=".concat(90 * n) }),
                        "second"
                      )
                      .to(
                        ".".concat(h().first__content__box),
                        a({ y: 20 * n }),
                        "second"
                      )
                      .to(
                        ".".concat(h().first__ground),
                        a({ y: "".concat(50 * n) }),
                        "second"
                      )
                      .to(".".concat(b().second), a({ autoAlpha: 1 }), "second")
                      .to(
                        ".".concat(b().second),
                        a({ y: "-=".concat(100 * n) }),
                        "second+=.2"
                      )
                      .to(
                        ".".concat(b().second__content, ">div"),
                        a({ width: "100%", stagger: 1 }),
                        "second+=.2"
                      )
                      .to(
                        ".".concat(b().wave),
                        a({ autoAlpha: 1 }),
                        "second+=.2"
                      )
                      .from(
                        ".pillar",
                        a({ y: "".concat(50 * n), stagger: 1 }),
                        "second+=.2"
                      )
                      .to(
                        ".pillar-bottom",
                        a({ y: "".concat(50 * n), stagger: 1, delay: 1 }),
                        "second+=.2"
                      )
                      .to(
                        ".".concat(b().second__sea__dragon__head),
                        a({ scaleX: "-1", rotate: "-30deg" }),
                        "second+=1.2"
                      )
                      .to(
                        [
                          ".".concat(b().second__sea__dragon__head__heart),
                          ".".concat(b().second__sea__dragon__head__red),
                        ],
                        a({ autoAlpha: 1 }),
                        "second+=1.2"
                      )
                      .to(
                        ".".concat(b().second__sea__dragon__head),
                        a({ scaleX: "-1", rotate: "-15deg" }),
                        "second+=2.2"
                      )
                      .to(
                        [
                          ".".concat(b().second__sea__dragon__head__heart),
                          ".".concat(b().second__sea__dragon__head__red),
                        ],
                        a({ autoAlpha: 0 }),
                        "second+=2.2"
                      )
                      .add("third")
                      .fromTo(
                        ".".concat(k().third),
                        { x: "-".concat(120 * s), autoAlpha: 1 },
                        a({ x: 0 }),
                        "third"
                      )
                      .to(".".concat(b().second), a({ autoAlpha: 0 }), "third")
                      .to(".".concat(h().first), a({ autoAlpha: 0 }), "third")
                      .to(
                        ".map-svg",
                        a({ borderColor: "#DF4928", stagger: 1 }),
                        "third"
                      )
                      .to(
                        ".map-svg",
                        a({ borderColor: "#2DD151", stagger: 1, delay: 1 }),
                        "third"
                      )
                      .to(
                        ".".concat(k().third__content__text),
                        a({ width: "100%", stagger: 1 }),
                        "third"
                      )
                      .to(
                        ".".concat(k().third__right),
                        a({ x: "+=".concat(4 * s) }),
                        "third+=1"
                      )
                      .from(
                        ".line",
                        a({ autoAlpha: 0, stagger: 1 }),
                        "third+=1.04"
                      )
                      .to(
                        ".line.start",
                        a({
                          filter: "grayscale(100%)",
                          opacity: 0.3,
                          stagger: 1,
                          delay: 1,
                        }),
                        "third+=1.04"
                      )
                      .add("fourth")
                      .to(
                        ".".concat(k().third),
                        a({ y: "-=".concat(100 * n) }),
                        "fourth"
                      )
                      .to(
                        ".".concat(S().fourth),
                        a({ y: "-=".concat(100 * n), autoAlpha: 1 }),
                        "fourth"
                      )
                      .from(
                        [
                          ".".concat(S().fourth__left, " .first"),
                          ".".concat(S().fourth__left, " .second"),
                          ".".concat(S().fourth__right, " .first"),
                          ".".concat(S().fourth__right, " .second"),
                        ],
                        a({ y: "".concat(20 * n), stagger: 0.2 }),
                        "fourth"
                      )
                      .from(
                        [
                          ".".concat(S().fourth__rays),
                          ".".concat(S().fourth__sun),
                        ],
                        a({ y: "".concat(30 * n), autoAlpha: 0 }),
                        "fourth"
                      )
                      .from(
                        ".".concat(S().fourth__bridge),
                        a({ y: "".concat(10 * n) }),
                        "fourth"
                      )
                      .from(
                        [
                          ".".concat(S().fourth__content),
                          ".".concat(S().fourth__title),
                        ],
                        a({ y: "".concat(50 * n) }),
                        "fourth"
                      )
                      .to(
                        ".fourth-block",
                        { duration: 1, x: "-=".concat(80 * s), ease: "linear" },
                        "fourth+=1"
                      )
                      .fromTo(
                        ".fourth-block-end",
                        { x: "".concat(80 * s) },
                        {
                          duration: 2,
                          stagger: 1,
                          x: "-".concat(80 * s),
                          ease: "linear",
                        },
                        "fourth+=1"
                      )
                      .to(
                        ".fourth-block",
                        { duration: 0, delay: 1, stagger: 1, autoAlpha: 0 },
                        "fourth+=1"
                      )
                      .to(
                        ".".concat(S().fourth__address),
                        a({ autoAlpha: 1 }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__left),
                          ".".concat(S().fourth__right),
                        ],
                        a({
                          y: "+=".concat(50 * n),
                          x: (t) =>
                            0 === t ? "-".concat(50 * s) : "".concat(50 * s),
                        }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__rays),
                          ".".concat(S().fourth__sun),
                        ],
                        a({ y: "-=".concat(15 * n), scale: 1.5, zIndex: 20 }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__bridge),
                          ".".concat(S().fourth__sea),
                        ],
                        a({ y: "+=".concat(50 * n) }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__content),
                          ".".concat(S().fourth__title),
                        ],
                        a({ y: "-=".concat(100 * n) }),
                        "fourth+=3"
                      )
                      .to(
                        ".".concat(S().fourth__bg),
                        a({ y: "+=".concat(20 * n) }),
                        "fourth+=3"
                      )
                      .add("last")
                      .to(".".concat(R().last), a({ autoAlpha: 1 }), "last")
                      .to(
                        ".".concat(R().last),
                        a({ y: "-=".concat(100 * n) }),
                        "last"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__sun),
                          ".".concat(S().fourth__rays),
                        ],
                        a({ y: "-=".concat(80 * n) }),
                        "last"
                      )
                      .to(
                        ".".concat(S().fourth__address),
                        a({ y: "-=".concat(100 * n) }),
                        "last"
                      )
                      .to(
                        ".".concat(S().fourth__bg),
                        a({ autoAlpha: 0 }),
                        "last"
                      )
                      .from(".footer", a({ y: "".concat(100 * n) }), "last")
                  : t
                      .add("first")
                      .to(
                        ".".concat(h().first__content),
                        a({ y: "-".concat(80 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__coin),
                        a({ y: "-=".concat(20 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__bgImg),
                        a({ y: "-".concat(20 * n) }),
                        "first"
                      )
                      .to(
                        ".".concat(h().first__content__box),
                        a({ y: "-".concat(70 * n) }),
                        "first"
                      )
                      .to(
                        [
                          ".".concat(h().first__left),
                          ".".concat(h().first__right),
                        ],
                        a({ y: "".concat(10 * n) }),
                        "first"
                      )
                      .to(
                        [
                          ".".concat(h().first__left, " .second"),
                          ".".concat(h().first__left, " .third"),
                          ".".concat(h().first__right, " .second"),
                          ".".concat(h().first__right, " .third"),
                        ],
                        a({ y: (t) => "-".concat(5 * ((t % 2) + 1) * n) }),
                        "first"
                      )
                      .to(
                        [
                          ".".concat(h().firstTree),
                          ".".concat(h().secondTree),
                          ".".concat(h().thirdTree),
                        ],
                        a({ y: "".concat(2 * n) }),
                        "first"
                      )
                      .add("second")
                      .to(
                        [
                          ".".concat(h().first__left),
                          ".".concat(h().first__right),
                          ".".concat(h().first__coin),
                          ".".concat(h().first__content),
                          ".".concat(h().first__links),
                        ],
                        a({ autoAlpha: 0 }),
                        "second"
                      )
                      .to(
                        ".".concat(b().second),
                        a({ y: "-=100dvh", autoAlpha: 1 }),
                        "second"
                      )
                      .to(
                        ".".concat(b().wave),
                        a({ autoAlpha: 1 }),
                        "second+=.2"
                      )
                      .to(
                        ".".concat(h().first__bg),
                        a({ autoAlpha: 0 }),
                        "second+=.2"
                      )
                      .from(
                        ".".concat(b().second__content, ">div"),
                        a({ scaleX: 0, transformOrigin: "right", stagger: 1 }),
                        "second+=.2"
                      )
                      .from(
                        ".pillar",
                        a({ y: "".concat(80 * n), stagger: 1 }),
                        "second+=.2"
                      )
                      .to(
                        ".pillar-bottom",
                        a({ y: "".concat(80 * n), stagger: 1, delay: 1 }),
                        "second+=.2"
                      )
                      .to(
                        ".".concat(b().second__sea__dragon),
                        a({ x: "+=120" }),
                        "second+=1.2"
                      )
                      .to(
                        ".".concat(b().second__sea__dragon__head),
                        a({ scaleX: "-1", rotate: "-30deg" }),
                        "second+=1.2"
                      )
                      .to(
                        [
                          ".".concat(b().second__sea__dragon__head__heart),
                          ".".concat(b().second__sea__dragon__head__red),
                        ],
                        a({ autoAlpha: 1 }),
                        "second+=1.2"
                      )
                      .to(
                        ".".concat(b().second__sea__dragon__head),
                        a({ scaleX: "-1", rotate: "-15deg" }),
                        "second+=2.2"
                      )
                      .to(
                        [
                          ".".concat(b().second__sea__dragon__head__heart),
                          ".".concat(b().second__sea__dragon__head__red),
                        ],
                        a({ autoAlpha: 0 }),
                        "second+=2.2"
                      )
                      .add("third")
                      .fromTo(
                        ".".concat(k().third),
                        { x: "-".concat(120 * s), autoAlpha: 1 },
                        a({ x: 0 }),
                        "third"
                      )
                      .to(".".concat(b().second), a({ autoAlpha: 0 }), "third")
                      .to(".".concat(h().first), a({ autoAlpha: 0 }), "third")
                      .to(
                        ".map-svg",
                        a({ borderColor: "#DF4928", stagger: 1 }),
                        "third"
                      )
                      .to(
                        ".map-svg",
                        a({ borderColor: "#2DD151", stagger: 1, delay: 1 }),
                        "third"
                      )
                      .from(
                        ".".concat(k().third__content__text),
                        a({ scaleX: 0, transformOrigin: "right", stagger: 1 }),
                        "third"
                      )
                      .from(
                        ".line",
                        a({ autoAlpha: 0, stagger: 1 }),
                        "third+=1"
                      )
                      .to(
                        ".line.start",
                        a({
                          filter: "grayscale(100%)",
                          opacity: 0.3,
                          stagger: 1,
                          delay: 1,
                        }),
                        "third+=1"
                      )
                      .to(
                        ".".concat(k().third__map),
                        a({ x: 100 * s - 1350, duration: 3 }),
                        "third+=1"
                      )
                      .to(
                        ".".concat(k().third__bg),
                        a({ x: 100 * s - 1350, duration: 3 }),
                        "third+=1"
                      )
                      .add("fourth")
                      .to(".".concat(k().third), a({ y: "-=100dvh" }), "fourth")
                      .to(
                        ".".concat(S().fourth),
                        a({ y: "-=100dvh", autoAlpha: 1 }),
                        "fourth"
                      )
                      .to(
                        ".fourth-block",
                        {
                          duration: 1,
                          x: "-=".concat(100 * s),
                          ease: "linear",
                        },
                        "fourth+=1"
                      )
                      .fromTo(
                        ".fourth-block-end",
                        { x: "".concat(100 * s) },
                        {
                          duration: 2,
                          stagger: 1,
                          x: "-".concat(100 * s),
                          ease: "linear",
                        },
                        "fourth+=1"
                      )
                      .to(
                        ".fourth-block",
                        { duration: 0, delay: 1, stagger: 1, autoAlpha: 0 },
                        "fourth+=1"
                      )
                      .to(
                        ".fourth-block",
                        a({ autoAlpha: 0, stagger: 1, delay: 1 }),
                        "fourth+=1"
                      )
                      .to(
                        ".".concat(S().fourth__address),
                        a({ autoAlpha: 1 }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__left),
                          ".".concat(S().fourth__right),
                        ],
                        a({
                          y: "+=".concat(50 * n),
                          x: (t) =>
                            0 === t ? "-".concat(50 * s) : "".concat(50 * s),
                        }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__rays),
                          ".".concat(S().fourth__sun),
                        ],
                        a({ y: "-=".concat(15 * n), scale: 1.5 }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__bridge),
                          ".".concat(S().fourth__sea),
                        ],
                        a({ y: "+=".concat(50 * n) }),
                        "fourth+=3"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__content),
                          ".".concat(S().fourth__title),
                        ],
                        a({ y: "-=".concat(100 * n) }),
                        "fourth+=3"
                      )
                      .to(
                        ".".concat(S().fourth__bg),
                        a({ y: "+=".concat(20 * n), autoAlpha: 0 }),
                        "fourth+=3"
                      )
                      .add("last")
                      .to(
                        ".".concat(R().last),
                        a({ autoAlpha: 1, y: "-=".concat(100 * n) }),
                        "last"
                      )
                      .to(
                        [
                          ".".concat(S().fourth__sun),
                          ".".concat(S().fourth__rays),
                        ],
                        a({ y: "-=".concat(80 * n) }),
                        "last"
                      )
                      .to(
                        ".".concat(S().fourth__address),
                        a({ y: "-=".concat(100 * n) }),
                        "last"
                      )
                      .from(".footer", a({ y: 1200 }), "last+=.3"),
                [b().second, k().third, S().fourth, R().last].forEach((t) => {
                  c.ZP.set(".".concat(t), { autoAlpha: 0 });
                });
            });
          };
        return (
          (0, n.useEffect)(
            () => (
              i(),
              (o = window.innerWidth),
              window.addEventListener("resize", s),
              () => {
                t.kill(), _.revert(), window.removeEventListener("resize", s);
              }
            ),
            []
          ),
          (0, e.jsx)("div", {
            className: r()["page-landing"],
            children: (0, e.jsxs)("div", {
              className: r()["animation-block"] + " animation-block",
              children: [
                (0, e.jsx)(m, {}),
                (0, e.jsx)(j, {}),
                (0, e.jsx)(w, {}),
                (0, e.jsx)(C, {}),
                (0, e.jsx)(Z, {}),
                (0, e.jsx)(O.default, {}),
              ],
            }),
          })
        );
      }
    },
    550: function (t, _, o) {
      "use strict";
      o.d(_, {
        Z: function () {
          return a;
        },
      });
      var e = o(7437),
        s = o(21),
        n = o.n(s),
        c = o(9987);
      function a(t) {
        let {
          title: _,
          text: o,
          className: s,
          isBig: a = !1,
          isGolden: r = !1,
          textClassname: i = "",
        } = t;
        return (0, e.jsx)(e.Fragment, {
          children: r
            ? (0, e.jsxs)("div", {
                className: ""
                  .concat(n().block, " ")
                  .concat(s, " ")
                  .concat(n().golden),
                children: [
                  (0, e.jsx)(c.xk, { className: n().block__firstSide }),
                  (0, e.jsx)(c.x_, { className: n().block__firstBg }),
                  (0, e.jsx)(c.Yu, {
                    className: n().block__secondBg + " desktop",
                  }),
                  (0, e.jsxs)("div", {
                    className: n().block__content,
                    children: [
                      (0, e.jsx)("span", {
                        className: ""
                          .concat(n().block__content__line, " ")
                          .concat(n().golden),
                      }),
                      _
                        ? (0, e.jsx)("span", {
                            className: ""
                              .concat(n().block__content__title, " ")
                              .concat(n().golden),
                            children: _,
                          })
                        : null,
                      (0, e.jsx)("p", {
                        className: ""
                          .concat(n().block__content__text, " ")
                          .concat(i, " ")
                          .concat(a ? n().big : ""),
                        children: o,
                      }),
                      (0, e.jsx)("span", {
                        className: ""
                          .concat(n().block__content__line, " ")
                          .concat(n().golden),
                      }),
                    ],
                  }),
                  (0, e.jsx)(c.xk, { className: n().block__secondSide }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: "".concat(n().block, " ").concat(s),
                children: [
                  (0, e.jsx)(c.Nx, { className: n().block__firstSide }),
                  (0, e.jsx)(c.x_, { className: n().block__firstBg }),
                  (0, e.jsx)(c.Yu, {
                    className: n().block__secondBg + " desktop",
                  }),
                  (0, e.jsxs)("div", {
                    className: n().block__content,
                    children: [
                      (0, e.jsx)("span", {
                        className: n().block__content__line,
                      }),
                      _
                        ? (0, e.jsx)("span", {
                            className: n().block__content__title,
                            children: _,
                          })
                        : null,
                      (0, e.jsx)("p", {
                        className: ""
                          .concat(n().block__content__text, " ")
                          .concat(i, " ")
                          .concat(a ? n().big : ""),
                        children: o,
                      }),
                      (0, e.jsx)("span", {
                        className: n().block__content__line,
                      }),
                    ],
                  }),
                  (0, e.jsx)(c.Nx, { className: n().block__secondSide }),
                ],
              }),
        });
      }
    },
    2421: function (t, _, o) {
      "use strict";
      o.d(_, {
        Z: function () {
          return a;
        },
      });
      var e = o(7437),
        s = o(9660),
        n = o.n(s),
        c = o(9987);
      function a(t) {
        let {
          text: _,
          secondText: o,
          handler: s = "",
          className: a,
          isButton: r = !1,
        } = t;
        return (0, e.jsx)(e.Fragment, {
          children: r
            ? (0, e.jsxs)("button", {
                onClick: s,
                className: ""
                  .concat(n().block, " ")
                  .concat(n().block__hover, " ")
                  .concat(a),
                children: [
                  (0, e.jsx)("div", { className: n().block__hover__box }),
                  (0, e.jsx)(c.C6, { className: n().block__firstSide }),
                  (0, e.jsx)(c.Co, { className: n().block__firstBg }),
                  (0, e.jsxs)("div", {
                    className: n().block__content,
                    children: [
                      (0, e.jsx)("span", {
                        className: n().block__content__line,
                      }),
                      (0, e.jsxs)("span", {
                        className: ""
                          .concat(n().block__content__text, " ")
                          .concat(n().button),
                        children: [
                          _,
                          "\xa0",
                          (0, e.jsx)(c.nm, { className: n().block__dollar }),
                          o,
                        ],
                      }),
                      (0, e.jsx)("span", {
                        className: n().block__content__line,
                      }),
                    ],
                  }),
                  (0, e.jsx)(c.C6, { className: n().block__secondSide }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: "".concat(n().block, " ").concat(a),
                children: [
                  (0, e.jsx)(c.C6, { className: n().block__firstSide }),
                  (0, e.jsx)(c.Co, { className: n().block__firstBg }),
                  (0, e.jsx)(c.NC, {
                    className: n().block__secondBg + " desktop",
                  }),
                  (0, e.jsxs)("div", {
                    className: n().block__content,
                    children: [
                      (0, e.jsx)("span", {
                        className: n().block__content__line,
                      }),
                      (0, e.jsx)("span", {
                        className: n().block__content__text,
                        children: _,
                      }),
                      (0, e.jsx)("span", {
                        className: n().block__content__line,
                      }),
                    ],
                  }),
                  (0, e.jsx)(c.C6, { className: n().block__secondSide }),
                ],
              }),
        });
      }
    },
    4925: function (t, _, o) {
      "use strict";
      o.d(_, {
        default: function () {
          return d;
        },
      });
      var e = o(7437),
        s = o(6463),
        n = o(6648),
        c = o(7138),
        a = o(9987),
        r = o(5160),
        i = o.n(r);
      let l = [
        { id: 0, text: "ABOUT", desktop: 0, mobile: 0 },
        { id: 1, text: "HOW TO BUY", desktop: 3150, mobile: 3070 },
        { id: 2, text: "TOKENOMICS", desktop: 5583, mobile: 5453 },
      ];
      function d() {
        let t = (0, s.usePathname)(),
          _ = (0, s.useRouter)(),
          o = () => {
            window.open("https://www.Ethereumtoken.com/", "_blank");
          },
          r = (o, e) => {
            if (!window) return;
            let s = window.innerWidth > 850,
              n = "/" === t;
            n || _.push("/"),
              setTimeout(
                () => {
                  window.scrollTo({
                    left: 0,
                    top: s ? o : e,
                    behavior: "smooth",
                  });
                },
                n ? 0 : 500
              );
          };
        return (0, e.jsx)("footer", {
          className: i().footer + " footer",
          children: (0, e.jsxs)("div", {
            className: i().footer__container,
            children: [
              (0, e.jsx)("span", {
                className: i().footer__container__lineFirst,
              }),
              (0, e.jsx)("span", {
                className: i().footer__container__lineSecond,
              }),
              (0, e.jsx)(a.$s, {
                className: i().footer__container__cloudFirst + " desktop",
              }),
              (0, e.jsx)(a.$s, {
                className: i().footer__container__cloudSecond,
              }),
              (0, e.jsx)(a.el, {
                className: "".concat(
                  i().footer__container__cloudThird,
                  " mobile"
                ),
              }),
              (0, e.jsx)(a.rg, {
                className: i().footer__container__blockFirst,
              }),
              (0, e.jsx)(a.rg, {
                className: i().footer__container__blockSecond,
              }),
              (0, e.jsx)(a.sJ, {
                className: "".concat(
                  i().footer__container__blockFirst,
                  " mobile"
                ),
              }),
              (0, e.jsx)(a.sJ, {
                className: "".concat(
                  i().footer__container__blockSecond,
                  " mobile"
                ),
              }),
              (0, e.jsxs)("div", {
                className: i().footer__container__left,
                children: [
                  (0, e.jsxs)(c.default, {
                    href: "/",
                    className: i().footer__container__left__logo,
                    children: [
                      (0, e.jsx)("span", {
                        className: i().footer__container__left__logo__image,
                        children: (0, e.jsx)(n.default, {
                          src: "/static/img/logo.png",
                          alt: "logo",
                          fill: !0,
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: i().footer__container__left__logo__text,
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
                className: i().footer__container__medium,
                children: [
                  (0, e.jsx)("ul", {
                    children: l.map((t) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, e.jsx)("button", {
                            onClick: () => r(t.desktop, t.mobile),
                            children: t.text,
                          }),
                        },
                        t.id
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
                className: i().footer__container__right,
                children: [
                  (0, e.jsxs)("div", {
                    className: i().footer__container__right__top,
                    children: [
                      (0, e.jsx)("span", { children: "Contact" }),
                      (0, e.jsxs)("div", {
                        className: i().footer__container__right__top__icons,
                        children: [
                          (0, e.jsx)("a", {
                            target: "_blank",
                            href: "https://x.com/LongWangDragonETH",
                            children: (0, e.jsx)(a.Zm, {}),
                          }),
                          (0, e.jsx)("a", {
                            target: "_blank",
                            href: "https://t.me/LongWangDragonETH",
                            children: (0, e.jsx)(a.YG, {}),
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
    6850: function (t) {
      t.exports = {
        button: "buyCoinButton_button__MDEen",
        hovered: "buyCoinButton_hovered__0YZ9U",
        button__bg: "buyCoinButton_button__bg___yeFZ",
        button__text: "buyCoinButton_button__text__J8CbV",
        button__text__dollar: "buyCoinButton_button__text__dollar__qF9Hq",
      };
    },
    21: function (t) {
      t.exports = {
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
    6767: function (t) {
      t.exports = {
        block: "textWithTitleBlock_block__5cCH2",
        block__title: "textWithTitleBlock_block__title__4X97D",
        block__text: "textWithTitleBlock_block__text__wAJXB",
      };
    },
    9353: function (t) {
      t.exports = {
        first: "first_first__zM6n_",
        first__sun: "first_first__sun__bTtVo",
        first__bg: "first_first__bg__S4jpk",
        first__bgImg: "first_first__bgImg__jIkhW",
        first__ground: "first_first__ground__Jg6a_",
        first__left: "first_first__left__t6Ie9",
        firstTree: "first_firstTree__quLRG",
        secondTree: "first_secondTree__e0FlT",
        thirdTree: "first_thirdTree___3_qN",
        first__right: "first_first__right__UGpnO",
        first__coin: "first_first__coin__xV0Qi",
        first__content: "first_first__content__FNiei",
        second: "first_second__m0orF",
        first__content__title: "first_first__content__title__ihL4O",
        first__content__block: "first_first__content__block__h3N50",
        first__content__block__title:
          "first_first__content__block__title___ziNA",
        first__content__block__Ethereum:
          "first_first__content__block__Ethereum__xqyCA",
        first__content__box: "first_first__content__box__GSAOv",
        first__content__box__text: "first_first__content__box__text__m0Hrz",
        first__content__box__button: "first_first__content__box__button__KwNX0",
        first__links: "first_first__links__aT_Ks",
      };
    },
    2727: function (t) {
      t.exports = {
        fourth: "fourth_fourth__es_XL",
        fourth__title: "fourth_fourth__title__mOwx6",
        fourth__sea: "fourth_fourth__sea__nmFId",
        fourth__sea__wave1: "fourth_fourth__sea__wave1__JAptU",
        fourth__sea__wave2: "fourth_fourth__sea__wave2__2uGEA",
        fourth__sea__wave3: "fourth_fourth__sea__wave3__yCVfx",
        fourth__sea__wave4: "fourth_fourth__sea__wave4__IkJV3",
        fourth__bridge: "fourth_fourth__bridge__hB5Po",
        fourth__sun: "fourth_fourth__sun__zxhmk",
        fourth__rays: "fourth_fourth__rays__vk__l",
        fourth__content: "fourth_fourth__content__OP_o8",
        first: "fourth_first__Ry8l7",
        second: "fourth_second__fNCcB",
        third: "fourth_third__0dTmB",
        box: "fourth_box__Dhpmt",
        fourth__bg: "fourth_fourth__bg__uNXUu",
        fourth__left: "fourth_fourth__left__E4AJ5",
        fourth__right: "fourth_fourth__right__YF0sg",
        fourth__address: "fourth_fourth__address__cbvgZ",
        fourth__address__button: "fourth_fourth__address__button__1ybBk",
        copied: "fourth_copied__ofIci",
      };
    },
    5878: function (t) {
      t.exports = {
        last: "last_last__jSOuF",
        last__bg: "last_last__bg__1zOxV",
        last__bgImg: "last_last__bgImg__fS6c4",
        last__ground: "last_last__ground__XvG9C",
        last__left: "last_last__left__EPXMu",
        firstTree: "last_firstTree__Ca9AV",
        secondTree: "last_secondTree__LvNoP",
        thirdTree: "last_thirdTree__ev0j5",
        last__right: "last_last__right__bz_FE",
        last__coin: "last_last__coin__LmZUK",
        last__content: "last_last__content__ZRl5C",
        first: "last_first__a_yok",
        second: "last_second__x6WJs",
        last__content__title: "last_last__content__title__cJro4",
        last__content__block: "last_last__content__block__GYKBu",
        last__content__block__title: "last_last__content__block__title__qEoAf",
        last__content__block__Ethereum:
          "last_last__content__block__Ethereum__rsiU_",
        last__content__box: "last_last__content__box__BjAyT",
        last__content__box__text: "last_last__content__box__text__p23nZ",
        last__content__box__button: "last_last__content__box__button__Ld28t",
        last__buyCoin: "last_last__buyCoin__obqfx",
      };
    },
    2035: function (t) {
      t.exports = {
        second: "second_second__fFLqV",
        second__sea: "second_second__sea___bbw1",
        second__sea__wave1: "second_second__sea__wave1__9t3Ui",
        second__sea__wave2: "second_second__sea__wave2__DvPfX",
        second__sea__wave3: "second_second__sea__wave3__jUd4Z",
        second__sea__wave4: "second_second__sea__wave4__4rfy3",
        second__sea__dragon: "second_second__sea__dragon__8Przu",
        second__sea__dragon__body: "second_second__sea__dragon__body__feZCH",
        second__sea__dragon__head: "second_second__sea__dragon__head__4zvga",
        second__sea__dragon__head__red:
          "second_second__sea__dragon__head__red__LLE8g",
        second__sea__dragon__head__heart:
          "second_second__sea__dragon__head__heart__Q8a2h",
        second__content: "second_second__content__kUu3O",
        second__content__text: "second_second__content__text__f3zRY",
        second__svg: "second_second__svg__O3GmA",
        firstSVG: "second_firstSVG__AsZSu",
        secondSVG: "second_secondSVG__Viv38",
        second__img: "second_second__img__vpQwA",
      };
    },
    6682: function (t) {
      t.exports = {
        third: "third_third__4MAQ3",
        third__body: "third_third__body__qWOQO",
        third__right: "third_third__right__zdYGl",
        third__acticles: "third_third__acticles__X66uq",
        third__bg: "third_third__bg__3qG9f",
        third__map: "third_third__map__2VcwP",
        border: "third_border__cNdJF",
        third__content: "third_third__content__UYc1i",
        third__content__text: "third_third__content__text__csLCu",
        third__content__title: "third_third__content__title__9lgk7",
        third__content__textBlock: "third_third__content__textBlock___YTs9",
        third__buy: "third_third__buy__QOJUx",
        third__buy__button: "third_third__buy__button__4O8d2",
        third__buy__coin1: "third_third__buy__coin1__U84JI",
        third__buy__coin2: "third_third__buy__coin2__pZyvM",
      };
    },
    5160: function (t) {
      t.exports = {
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
    7504: function (t) {
      t.exports = {
        "page-main": "landing_page-main__dsUi6",
        "animation-block": "landing_animation-block___Nycw",
      };
    },
  },
  function (t) {
    t.O(0, [221, 922, 724, 138, 582, 98, 824, 971, 23, 744], function () {
      return t((t.s = 5094));
    }),
      (_N_E = t.O());
  },
]);
