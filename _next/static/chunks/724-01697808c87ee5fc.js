"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [724],
  {
    6648: function (e, t, n) {
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(5601),
        i = n.n(r);
    },
    6463: function (e, t, n) {
      var r = n(1169);
      n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          });
    },
    8173: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let r = n(9920),
        i = n(1452),
        o = n(7437),
        a = i._(n(2265)),
        u = r._(n(4887)),
        l = r._(n(8321)),
        d = n(497),
        s = n(7103),
        f = n(3938);
      n(2301);
      let c = n(291),
        p = r._(n(1241)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, n, r, i, o, a) {
        let u = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== u &&
          ((e["data-loaded-src"] = u),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function h(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let y = (0, a.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: i,
          height: u,
          width: l,
          decoding: d,
          className: s,
          style: f,
          fetchPriority: c,
          placeholder: p,
          loading: m,
          unoptimized: y,
          fill: b,
          onLoadRef: v,
          onLoadingCompleteRef: _,
          setBlurComplete: w,
          setShowAltText: S,
          sizesInput: j,
          onLoad: x,
          onError: P,
          ...C
        } = e;
        return (0, o.jsx)("img", {
          ...C,
          ...h(c),
          loading: m,
          width: l,
          height: u,
          decoding: d,
          "data-nimg": b ? "fill" : "1",
          className: s,
          style: f,
          sizes: i,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (P && (e.src = e.src), e.complete && g(e, p, v, _, w, y, j));
            },
            [n, p, v, _, w, P, y, j, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, p, v, _, w, y, j);
          },
          onError: (e) => {
            S(!0), "empty" !== p && w(!0), P && P(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...h(n.fetchPriority),
          };
        return t && u.default.preload
          ? (u.default.preload(n.src, r), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let v = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(c.RouterContext),
          r = (0, a.useContext)(f.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = m || r || s.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: u, onLoadingComplete: l } = e,
          g = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
          g.current = u;
        }, [u]);
        let h = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          h.current = l;
        }, [l]);
        let [v, _] = (0, a.useState)(!1),
          [w, S] = (0, a.useState)(!1),
          { props: j, meta: x } = (0, d.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: v,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(y, {
              ...j,
              unoptimized: x.unoptimized,
              placeholder: x.placeholder,
              fill: x.fill,
              onLoadRef: g,
              onLoadingCompleteRef: h,
              setBlurComplete: _,
              setShowAltText: S,
              sizesInput: e.sizes,
              ref: t,
            }),
            x.priority
              ? (0, o.jsx)(b, { isAppRouter: !n, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext({});
    },
    687: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    497: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }),
        n(2301);
      let r = n(1564),
        i = n(7103);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function u(e, t) {
        var n;
        let u,
          l,
          d,
          {
            src: s,
            sizes: f,
            unoptimized: c = !1,
            priority: p = !1,
            loading: m,
            className: g,
            quality: h,
            width: y,
            height: b,
            fill: v = !1,
            style: _,
            overrideSrc: w,
            onLoad: S,
            onLoadingComplete: j,
            placeholder: x = "empty",
            blurDataURL: P,
            fetchPriority: C,
            layout: O,
            objectFit: z,
            objectPosition: E,
            lazyBoundary: I,
            lazyRoot: M,
            ...R
          } = e,
          { imgConf: k, showAltText: A, blurComplete: U, defaultLoader: D } = t,
          L = k || i.imageConfigDefault;
        if ("allSizes" in L) u = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          u = { ...L, allSizes: e, deviceSizes: t };
        }
        if (void 0 === D)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let N = R.loader || D;
        delete R.loader, delete R.srcSet;
        let T = "__next_img_default" in N;
        if (T) {
          if ("custom" === u.loader)
            throw Error(
              'Image with src "' +
                s +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = N;
          N = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (O) {
          "fill" === O && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !f && (f = t);
        }
        let F = "",
          G = a(y),
          B = a(b);
        if ("object" == typeof (n = s) && (o(n) || void 0 !== n.src)) {
          let e = o(s) ? s.default : s;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (d = e.blurHeight),
            (P = P || e.blurDataURL),
            (F = e.src),
            !v)
          ) {
            if (G || B) {
              if (G && !B) {
                let t = G / e.width;
                B = Math.round(e.height * t);
              } else if (!G && B) {
                let t = B / e.height;
                G = Math.round(e.width * t);
              }
            } else (G = e.width), (B = e.height);
          }
        }
        let V = !p && ("lazy" === m || void 0 === m);
        (!(s = "string" == typeof s ? s : F) ||
          s.startsWith("data:") ||
          s.startsWith("blob:")) &&
          ((c = !0), (V = !1)),
          u.unoptimized && (c = !0),
          T && s.endsWith(".svg") && !u.dangerouslyAllowSVG && (c = !0),
          p && (C = "high");
        let W = a(h),
          H = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: z,
                  objectPosition: E,
                }
              : {},
            A ? {} : { color: "transparent" },
            _
          ),
          q =
            U || "empty" === x
              ? null
              : "blur" === x
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: G,
                  heightInt: B,
                  blurWidth: l,
                  blurHeight: d,
                  blurDataURL: P || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + x + '")',
          $ = q
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          J = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: u,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: d } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              s = l.length - 1;
            return {
              sizes: a || "w" !== d ? a : "100vw",
              srcSet: l
                .map(
                  (e, r) =>
                    u({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === d ? e : r + 1) +
                    d
                )
                .join(", "),
              src: u({ config: t, src: n, quality: o, width: l[s] }),
            };
          })({
            config: u,
            src: s,
            unoptimized: c,
            width: G,
            quality: W,
            sizes: f,
            loader: N,
          });
        return {
          props: {
            ...R,
            loading: V ? "lazy" : m,
            fetchPriority: C,
            width: G,
            height: B,
            decoding: "async",
            className: g,
            style: { ...H, ...$ },
            sizes: J.sizes,
            srcSet: J.srcSet,
            src: w || J.src,
          },
          meta: { unoptimized: c, priority: p, placeholder: x, fill: v },
        };
      }
    },
    8321: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return f;
          },
        });
      let r = n(9920),
        i = n(1452),
        o = n(7437),
        a = i._(n(2265)),
        u = r._(n(5960)),
        l = n(2901),
        d = n(6590),
        s = n(687);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function c(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(c, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          n = (0, a.useContext)(l.AmpStateContext),
          r = (0, a.useContext)(d.HeadManagerContext);
        return (0, o.jsx)(u.default, {
          reduceComponentsToState: m,
          headManager: r,
          inAmpMode: (0, s.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          u = r ? 40 * r : t,
          l = i ? 40 * i : n,
          d = u && l ? "viewBox='0 0 " + u + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(9920)._(n(2265)),
        i = n(7103),
        o = r.default.createContext(i.imageConfigDefault);
    },
    7103: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return u;
          },
        });
      let r = n(9920),
        i = n(497),
        o = n(8173),
        a = r._(n(1241));
      function u(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = o.Image;
    },
    1241: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          encodeURIComponent(n)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    291: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext(null);
    },
    5960: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : r.useLayoutEffect,
        a = i ? () => {} : r.useEffect;
      function u(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function u() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        if (i) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            u();
        }
        return (
          o(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = u),
              () => {
                t && (t._pendingUpdate = u);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    920: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      for (
        var r,
          i = {
            randomUUID:
              "undefined" != typeof crypto &&
              crypto.randomUUID &&
              crypto.randomUUID.bind(crypto),
          },
          o = new Uint8Array(16),
          a = [],
          u = 0;
        u < 256;
        ++u
      )
        a.push((u + 256).toString(16).slice(1));
      var l = function (e, t, n) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        var u =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !r &&
                !(r =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return r(o);
            }
          )();
        if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), t)) {
          n = n || 0;
          for (var l = 0; l < 16; ++l) t[n + l] = u[l];
          return t;
        }
        return (function (e, t = 0) {
          return (
            a[e[t + 0]] +
            a[e[t + 1]] +
            a[e[t + 2]] +
            a[e[t + 3]] +
            "-" +
            a[e[t + 4]] +
            a[e[t + 5]] +
            "-" +
            a[e[t + 6]] +
            a[e[t + 7]] +
            "-" +
            a[e[t + 8]] +
            a[e[t + 9]] +
            "-" +
            a[e[t + 10]] +
            a[e[t + 11]] +
            a[e[t + 12]] +
            a[e[t + 13]] +
            a[e[t + 14]] +
            a[e[t + 15]]
          ).toLowerCase();
        })(u);
      };
    },
  },
]);
