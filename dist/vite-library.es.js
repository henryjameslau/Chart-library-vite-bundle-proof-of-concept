function la(Ft) {
  return Ft && Ft.__esModule && Object.prototype.hasOwnProperty.call(Ft, "default") ? Ft.default : Ft;
}
var Rs = { exports: {} }, hp = Rs.exports, aa;
function lp() {
  return aa || (aa = 1, function(Ft, oi) {
    /**
    * Highcharts JS v12.0.2 (2024-12-04)
    * @module highcharts/highcharts
    *
    * (c) 2009-2024 Torstein Honsi
    *
    * License: www.highcharts.com/license
    */
    (function(it, lt) {
      it._Highcharts = lt(), Ft.exports = it._Highcharts;
    })(typeof window > "u" ? hp : window, () => (() => {
      let it, lt;
      var he, Kt, te, Se, q, yt, Et, Ce, fe, Ie, Ne, ni, De, Ke, Si, ai, hi, Be = {};
      Be.d = (h, t) => {
        for (var e in t) Be.o(t, e) && !Be.o(h, e) && Object.defineProperty(h, e, { enumerable: !0, get: t[e] });
      }, Be.o = (h, t) => Object.prototype.hasOwnProperty.call(h, t);
      var me = {};
      Be.d(me, { default: () => ap }), function(h) {
        h.SVG_NS = "http://www.w3.org/2000/svg", h.product = "Highcharts", h.version = "12.0.2", h.win = typeof window < "u" ? window : {}, h.doc = h.win.document, h.svg = h.doc && h.doc.createElementNS && !!h.doc.createElementNS(h.SVG_NS, "svg").createSVGRect, h.userAgent = h.win.navigator && h.win.navigator.userAgent || "", h.isChrome = h.win.chrome, h.isFirefox = h.userAgent.indexOf("Firefox") !== -1, h.isMS = /(edge|msie|trident)/i.test(h.userAgent) && !h.win.opera, h.isSafari = !h.isChrome && h.userAgent.indexOf("Safari") !== -1, h.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(h.userAgent), h.isWebKit = h.userAgent.indexOf("AppleWebKit") !== -1, h.deg2rad = 2 * Math.PI / 360, h.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"], h.noop = function() {
        }, h.supportsPassiveEvents = function() {
          let t = !1;
          if (!h.isMS) {
            let e = Object.defineProperty({}, "passive", { get: function() {
              t = !0;
            } });
            h.win.addEventListener && h.win.removeEventListener && (h.win.addEventListener("testPassive", h.noop, e), h.win.removeEventListener("testPassive", h.noop, e));
          }
          return t;
        }(), h.charts = [], h.composed = [], h.dateFormats = {}, h.seriesTypes = {}, h.symbolSizes = {}, h.chartCount = 0;
      }(he || (he = {}));
      let P = he, { charts: A, doc: T, win: I } = P;
      function z(h, t, e, i) {
        let s = t ? "Highcharts error" : "Highcharts warning";
        h === 32 && (h = `${s}: Deprecated member`);
        let r = bt(h), o = r ? `${s} #${h}: www.highcharts.com/errors/${h}/` : h.toString();
        if (i !== void 0) {
          let n = "";
          r && (o += "?"), xt(i, function(a, l) {
            n += `
 - ${l}: ${a}`, r && (o += encodeURI(l) + "=" + encodeURI(a));
          }), o += n;
        }
        rt(P, "displayError", { chart: e, code: h, message: o, params: i }, function() {
          if (t) throw Error(o);
          I.console && z.messages.indexOf(o) === -1 && console.warn(o);
        }), z.messages.push(o);
      }
      function H(h, t) {
        return parseInt(h, t || 10);
      }
      function V(h) {
        return typeof h == "string";
      }
      function tt(h) {
        let t = Object.prototype.toString.call(h);
        return t === "[object Array]" || t === "[object Array Iterator]";
      }
      function Ct(h, t) {
        return !!h && typeof h == "object" && (!t || !tt(h));
      }
      function mt(h) {
        return Ct(h) && typeof h.nodeType == "number";
      }
      function X(h) {
        let t = h && h.constructor;
        return !!(Ct(h, !0) && !mt(h) && t && t.name && t.name !== "Object");
      }
      function bt(h) {
        return typeof h == "number" && !isNaN(h) && h < 1 / 0 && h > -1 / 0;
      }
      function j(h) {
        return h != null;
      }
      function re(h, t, e) {
        let i, s = V(t) && !j(e), r = (o, n) => {
          j(o) ? h.setAttribute(n, o) : s ? (i = h.getAttribute(n)) || n !== "class" || (i = h.getAttribute(n + "Name")) : h.removeAttribute(n);
        };
        return V(t) ? r(e, t) : xt(t, r), i;
      }
      function Ht(h) {
        return tt(h) ? h : [h];
      }
      function W(h, t) {
        let e;
        for (e in h || (h = {}), t) h[e] = t[e];
        return h;
      }
      function dt() {
        let h = arguments, t = h.length;
        for (let e = 0; e < t; e++) {
          let i = h[e];
          if (i != null) return i;
        }
      }
      function Dt(h, t) {
        W(h.style, t);
      }
      function vt(h) {
        return Math.pow(10, Math.floor(Math.log(h) / Math.LN10));
      }
      function Bt(h, t) {
        return h > 1e14 ? h : parseFloat(h.toPrecision(t || 14));
      }
      (z || (z = {})).messages = [], Math.easeInOutSine = function(h) {
        return -0.5 * (Math.cos(Math.PI * h) - 1);
      };
      let Rt = Array.prototype.find ? function(h, t) {
        return h.find(t);
      } : function(h, t) {
        let e, i = h.length;
        for (e = 0; e < i; e++) if (t(h[e], e)) return h[e];
      };
      function xt(h, t, e) {
        for (let i in h) Object.hasOwnProperty.call(h, i) && t.call(e || h[i], h[i], i, h);
      }
      function U(h, t, e) {
        function i(o, n) {
          let a = h.removeEventListener;
          a && a.call(h, o, n, !1);
        }
        function s(o) {
          let n, a;
          h.nodeName && (t ? (n = {})[t] = !0 : n = o, xt(n, function(l, c) {
            if (o[c]) for (a = o[c].length; a--; ) i(c, o[c][a].fn);
          }));
        }
        let r = typeof h == "function" && h.prototype || h;
        if (Object.hasOwnProperty.call(r, "hcEvents")) {
          let o = r.hcEvents;
          if (t) {
            let n = o[t] || [];
            e ? (o[t] = n.filter(function(a) {
              return e !== a.fn;
            }), i(t, e)) : (s(o), o[t] = []);
          } else s(o), delete r.hcEvents;
        }
      }
      function rt(h, t, e, i) {
        if (e = e || {}, T.createEvent && (h.dispatchEvent || h.fireEvent && h !== P)) {
          let s = T.createEvent("Events");
          s.initEvent(t, !0, !0), e = W(s, e), h.dispatchEvent ? h.dispatchEvent(e) : h.fireEvent(t, e);
        } else if (h.hcEvents) {
          e.target || W(e, { preventDefault: function() {
            e.defaultPrevented = !0;
          }, target: h, type: t });
          let s = [], r = h, o = !1;
          for (; r.hcEvents; ) Object.hasOwnProperty.call(r, "hcEvents") && r.hcEvents[t] && (s.length && (o = !0), s.unshift.apply(s, r.hcEvents[t])), r = Object.getPrototypeOf(r);
          o && s.sort((n, a) => n.order - a.order), s.forEach((n) => {
            n.fn.call(h, e) === !1 && e.preventDefault();
          });
        }
        i && !e.defaultPrevented && i.call(h, e);
      }
      let kt = function() {
        let h = Math.random().toString(36).substring(2, 9) + "-", t = 0;
        return function() {
          return "highcharts-" + (it ? "" : h) + t++;
        };
      }();
      I.jQuery && (I.jQuery.fn.highcharts = function() {
        let h = [].slice.call(arguments);
        if (this[0]) return h[0] ? (new P[V(h[0]) ? h.shift() : "Chart"](this[0], h[0], h[1]), this) : A[re(this[0], "data-highcharts-chart")];
      });
      let R = { addEvent: function(h, t, e, i = {}) {
        let s = typeof h == "function" && h.prototype || h;
        Object.hasOwnProperty.call(s, "hcEvents") || (s.hcEvents = {});
        let r = s.hcEvents;
        P.Point && h instanceof P.Point && h.series && h.series.chart && (h.series.chart.runTrackerClick = !0);
        let o = h.addEventListener;
        o && o.call(h, t, e, !!P.supportsPassiveEvents && { passive: i.passive === void 0 ? t.indexOf("touch") !== -1 : i.passive, capture: !1 }), r[t] || (r[t] = []);
        let n = { fn: e, order: typeof i.order == "number" ? i.order : 1 / 0 };
        return r[t].push(n), r[t].sort((a, l) => a.order - l.order), function() {
          U(h, t, e);
        };
      }, arrayMax: function(h) {
        let t = h.length, e = h[0];
        for (; t--; ) h[t] > e && (e = h[t]);
        return e;
      }, arrayMin: function(h) {
        let t = h.length, e = h[0];
        for (; t--; ) h[t] < e && (e = h[t]);
        return e;
      }, attr: re, clamp: function(h, t, e) {
        return h > t ? h < e ? h : e : t;
      }, clearTimeout: function(h) {
        j(h) && clearTimeout(h);
      }, correctFloat: Bt, createElement: function(h, t, e, i, s) {
        let r = T.createElement(h);
        return t && W(r, t), s && Dt(r, { padding: "0", border: "none", margin: "0" }), e && Dt(r, e), i && i.appendChild(r), r;
      }, crisp: function(h, t = 0, e) {
        let i = t % 2 / 2, s = e ? -1 : 1;
        return (Math.round(h * s - i) + i) * s;
      }, css: Dt, defined: j, destroyObjectProperties: function(h, t, e) {
        xt(h, function(i, s) {
          i !== t && (i != null && i.destroy) && i.destroy(), (i != null && i.destroy || !e) && delete h[s];
        });
      }, diffObjects: function(h, t, e, i) {
        let s = {};
        return function r(o, n, a, l) {
          let c = e ? n : o;
          xt(o, function(d, p) {
            if (!l && i && i.indexOf(p) > -1 && n[p]) {
              d = Ht(d), a[p] = [];
              for (let u = 0; u < Math.max(d.length, n[p].length); u++) n[p][u] && (d[u] === void 0 ? a[p][u] = n[p][u] : (a[p][u] = {}, r(d[u], n[p][u], a[p][u], l + 1)));
            } else Ct(d, !0) && !d.nodeType ? (a[p] = tt(d) ? [] : {}, r(d, n[p] || {}, a[p], l + 1), Object.keys(a[p]).length !== 0 || p === "colorAxis" && l === 0 || delete a[p]) : (o[p] !== n[p] || p in o && !(p in n)) && p !== "__proto__" && p !== "constructor" && (a[p] = c[p]);
          });
        }(h, t, s, 0), s;
      }, discardElement: function(h) {
        h && h.parentElement && h.parentElement.removeChild(h);
      }, erase: function(h, t) {
        let e = h.length;
        for (; e--; ) if (h[e] === t) {
          h.splice(e, 1);
          break;
        }
      }, error: z, extend: W, extendClass: function(h, t) {
        let e = function() {
        };
        return e.prototype = new h(), W(e.prototype, t), e;
      }, find: Rt, fireEvent: rt, getAlignFactor: (h = "") => ({ center: 0.5, right: 1, middle: 0.5, bottom: 1 })[h] || 0, getClosestDistance: function(h, t) {
        let e, i, s, r = !t;
        return h.forEach((o) => {
          if (o.length > 1) for (s = o.length - 1; s > 0; s--) (i = o[s] - o[s - 1]) < 0 && !r ? (t == null || t(), t = void 0) : i && (e === void 0 || i < e) && (e = i);
        }), e;
      }, getMagnitude: vt, getNestedProperty: function(h, t) {
        let e = h.split(".");
        for (; e.length && j(t); ) {
          let i = e.shift();
          if (i === void 0 || i === "__proto__") return;
          if (i === "this") {
            let r;
            return Ct(t) && (r = t["@this"]), r ?? t;
          }
          let s = t[i];
          if (!j(s) || typeof s == "function" || typeof s.nodeType == "number" || s === I) return;
          t = s;
        }
        return t;
      }, getStyle: function h(t, e, i) {
        let s;
        if (e === "width") {
          let o = Math.min(t.offsetWidth, t.scrollWidth), n = t.getBoundingClientRect && t.getBoundingClientRect().width;
          return n < o && n >= o - 1 && (o = Math.floor(n)), Math.max(0, o - (h(t, "padding-left", !0) || 0) - (h(t, "padding-right", !0) || 0));
        }
        if (e === "height") return Math.max(0, Math.min(t.offsetHeight, t.scrollHeight) - (h(t, "padding-top", !0) || 0) - (h(t, "padding-bottom", !0) || 0));
        let r = I.getComputedStyle(t, void 0);
        return r && (s = r.getPropertyValue(e), dt(i, e !== "opacity") && (s = H(s))), s;
      }, insertItem: function(h, t) {
        let e, i = h.options.index, s = t.length;
        for (e = h.options.isInternal ? s : 0; e < s + 1; e++) if (!t[e] || bt(i) && i < dt(t[e].options.index, t[e]._i) || t[e].options.isInternal) {
          t.splice(e, 0, h);
          break;
        }
        return e;
      }, isArray: tt, isClass: X, isDOMElement: mt, isFunction: function(h) {
        return typeof h == "function";
      }, isNumber: bt, isObject: Ct, isString: V, merge: function(h, ...t) {
        let e, i = [h, ...t], s = {}, r = function(n, a) {
          return typeof n != "object" && (n = {}), xt(a, function(l, c) {
            c !== "__proto__" && c !== "constructor" && (!Ct(l, !0) || X(l) || mt(l) ? n[c] = a[c] : n[c] = r(n[c] || {}, l));
          }), n;
        };
        h === !0 && (s = i[1], i = Array.prototype.slice.call(i, 2));
        let o = i.length;
        for (e = 0; e < o; e++) s = r(s, i[e]);
        return s;
      }, normalizeTickInterval: function(h, t, e, i, s) {
        let r, o = h;
        e = dt(e, vt(h));
        let n = h / e;
        for (!t && (t = s ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], i === !1 && (e === 1 ? t = t.filter(function(a) {
          return a % 1 == 0;
        }) : e <= 0.1 && (t = [1 / e]))), r = 0; r < t.length && (o = t[r], (!s || !(o * e >= h)) && (s || !(n <= (t[r] + (t[r + 1] || t[r])) / 2))); r++) ;
        return Bt(o * e, -Math.round(Math.log(1e-3) / Math.LN10));
      }, objectEach: xt, offset: function(h) {
        let t = T.documentElement, e = h.parentElement || h.parentNode ? h.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
        return { top: e.top + (I.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: e.left + (I.pageXOffset || t.scrollLeft) - (t.clientLeft || 0), width: e.width, height: e.height };
      }, pad: function(h, t, e) {
        return Array((t || 2) + 1 - String(h).replace("-", "").length).join(e || "0") + h;
      }, pick: dt, pInt: H, pushUnique: function(h, t) {
        return 0 > h.indexOf(t) && !!h.push(t);
      }, relativeLength: function(h, t, e) {
        return /%$/.test(h) ? t * parseFloat(h) / 100 + (e || 0) : parseFloat(h);
      }, removeEvent: U, replaceNested: function(h, ...t) {
        let e, i;
        do
          for (i of (e = h, t)) h = h.replace(i[0], i[1]);
        while (h !== e);
        return h;
      }, splat: Ht, stableSort: function(h, t) {
        let e, i, s = h.length;
        for (i = 0; i < s; i++) h[i].safeI = i;
        for (h.sort(function(r, o) {
          return (e = t(r, o)) === 0 ? r.safeI - o.safeI : e;
        }), i = 0; i < s; i++) delete h[i].safeI;
      }, syncTimeout: function(h, t, e) {
        return t > 0 ? setTimeout(h, t, e) : (h.call(0, e), -1);
      }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, ucfirst: function(h) {
        return V(h) ? h.substring(0, 1).toUpperCase() + h.substring(1) : String(h);
      }, uniqueKey: kt, useSerialIds: function(h) {
        return it = dt(h, it);
      }, wrap: function(h, t, e) {
        let i = h[t];
        h[t] = function() {
          let s = arguments, r = this;
          return e.apply(this, [function() {
            return i.apply(r, arguments.length ? arguments : s);
          }].concat([].slice.call(arguments)));
        };
      } }, { win: ht } = P, { defined: It, error: Tt, extend: ct, isNumber: oe, isObject: Zt, isString: Jt, merge: xe, objectEach: ne, pad: ot, splat: Lt, timeUnits: nt, ucfirst: pt } = R, We = P.isSafari && ht.Intl && !ht.Intl.DateTimeFormat.prototype.formatRange, ye = (h) => h.main === void 0, Te = (h) => ["D", "L", "M", "X", "J", "V", "S"].indexOf(h), pe = class {
        constructor(h) {
          this.options = {}, this.variableTimezone = !1, this.Date = ht.Date, this.update(h);
        }
        update(h = {}) {
          let t = h.timezone ?? "UTC";
          this.dTLCache = {}, this.options = h = xe(!0, this.options, h);
          let { timezoneOffset: e, useUTC: i } = h;
          this.Date = h.Date || ht.Date || Date, It(i) && (t = i ? "UTC" : void 0), e && e % 60 == 0 && (t = "Etc/GMT" + (e > 0 ? "+" : "") + e / 60), this.variableTimezone = t !== "UTC" && (t == null ? void 0 : t.indexOf("Etc/GMT")) !== 0, this.timezone = t, ["months", "shortMonths", "weekdays", "shortWeekdays"].forEach((s) => {
            let r = /months/i.test(s), o = /short/.test(s), n = { timeZone: "UTC" };
            n[r ? "month" : "weekday"] = o ? "short" : "long", this[s] = (r ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : [3, 4, 5, 6, 7, 8, 9]).map((a) => this.dateFormat(n, (r ? 31 : 1) * 24 * 36e5 * a));
          });
        }
        toParts(h) {
          let [t, e, i, s, r, o, n] = this.dateTimeFormat({ weekday: "narrow", day: "numeric", month: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }, h, "es").split(/(?:, |\/|:)/g);
          return [s, +i - 1, e, r, o, n, Math.floor(Number(h) || 0) % 1e3, Te(t)].map(Number);
        }
        dateTimeFormat(h, t, e = this.options.locale) {
          let i = JSON.stringify(h) + e;
          Jt(h) && (h = this.str2dtf(h));
          let s = this.dTLCache[i];
          if (!s) {
            h.timeZone ?? (h.timeZone = this.timezone);
            try {
              s = new Intl.DateTimeFormat(e, h);
            } catch (r) {
              /Invalid time zone/i.test(r.message) ? (Tt(34), h.timeZone = "UTC", s = new Intl.DateTimeFormat(e, h)) : Tt(r.message, !1);
            }
          }
          return this.dTLCache[i] = s, (s == null ? void 0 : s.format(t)) || "";
        }
        str2dtf(h, t = {}) {
          let e = { L: { fractionalSecondDigits: 3 }, S: { second: "2-digit" }, M: { minute: "numeric" }, H: { hour: "2-digit" }, k: { hour: "numeric" }, E: { weekday: "narrow" }, a: { weekday: "short" }, A: { weekday: "long" }, d: { day: "2-digit" }, e: { day: "numeric" }, b: { month: "short" }, B: { month: "long" }, m: { month: "2-digit" }, o: { month: "numeric" }, y: { year: "2-digit" }, Y: { year: "numeric" } };
          return Object.keys(e).forEach((i) => {
            h.indexOf(i) !== -1 && ct(t, e[i]);
          }), t;
        }
        makeTime(h, t, e = 1, i = 0, s, r, o) {
          let n = this.Date.UTC(h, t, e, i, s || 0, r || 0, o || 0);
          if (this.timezone !== "UTC") {
            let a = this.getTimezoneOffset(n);
            if (n += a, [2, 3, 8, 9, 10, 11].indexOf(t) !== -1 && (i < 5 || i > 20)) {
              let l = this.getTimezoneOffset(n);
              a !== l ? n += l - a : a - 36e5 !== this.getTimezoneOffset(n - 36e5) || We || (n -= 36e5);
            }
          }
          return n;
        }
        parse(h) {
          if (!Jt(h)) return h ?? void 0;
          let t = (h = h.replace(/\//g, "-").replace(/(GMT|UTC)/, "")).indexOf("Z") > -1 || /([+-][0-9]{2}):?[0-9]{2}$/.test(h), e = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(h);
          t || e || (h += "Z");
          let i = Date.parse(h);
          if (oe(i)) return i + (!t || e ? this.getTimezoneOffset(i) : 0);
        }
        getTimezoneOffset(h) {
          if (this.timezone !== "UTC") {
            let [t, e, i, s, r = 0] = this.dateTimeFormat({ timeZoneName: "shortOffset" }, h, "en").split(/(GMT|:)/).map(Number), o = -(36e5 * (i + r / 60));
            if (oe(o)) return o;
          }
          return 0;
        }
        dateFormat(h, t, e) {
          var s;
          let i = (s = P.defaultOptions) == null ? void 0 : s.lang;
          if (!It(t) || isNaN(t)) return (i == null ? void 0 : i.invalidDate) || "";
          if (Jt(h = h ?? "%Y-%m-%d %H:%M:%S")) {
            let r, o = /%\[([a-zA-Z]+)\]/g;
            for (; r = o.exec(h); ) h = h.replace(r[0], this.dateTimeFormat(r[1], t));
          }
          if (Jt(h) && h.indexOf("%") !== -1) {
            let r = this, [o, n, a, l, c, d, p, u] = this.toParts(t), g = (i == null ? void 0 : i.weekdays) || this.weekdays, m = (i == null ? void 0 : i.shortWeekdays) || this.shortWeekdays, x = (i == null ? void 0 : i.months) || this.months, f = (i == null ? void 0 : i.shortMonths) || this.shortMonths;
            ne(ct({ a: m ? m[u] : g[u].substr(0, 3), A: g[u], d: ot(a), e: ot(a, 2, " "), w: u, b: f[n], B: x[n], m: ot(n + 1), o: n + 1, y: o.toString().substr(2, 2), Y: o, H: ot(l), k: l, I: ot(l % 12 || 12), l: l % 12 || 12, M: ot(c), p: l < 12 ? "AM" : "PM", P: l < 12 ? "am" : "pm", S: ot(d), L: ot(p, 3) }, P.dateFormats), function(b, y) {
              if (Jt(h)) for (; h.indexOf("%" + y) !== -1; ) h = h.replace("%" + y, typeof b == "function" ? b.call(r, t) : b);
            });
          } else if (Zt(h)) {
            let r = (this.getTimezoneOffset(t) || 0) / 36e5, o = this.options.timezone || "Etc/GMT" + (r >= 0 ? "+" : "") + r, { prefix: n = "", suffix: a = "" } = h;
            h = n + this.dateTimeFormat(ct({ timeZone: o }, h), t) + a;
          }
          return e ? pt(h) : h;
        }
        resolveDTLFormat(h) {
          return Zt(h, !0) ? Zt(h, !0) && ye(h) ? { main: h } : h : { main: (h = Lt(h))[0], from: h[1], to: h[2] };
        }
        getTimeTicks(h, t, e, i) {
          let s = this, r = [], o = {}, { count: n = 1, unitRange: a } = h, [l, c, d, p, u, g] = s.toParts(t), m = (t || 0) % 1e3, x;
          if (i ?? (i = 1), It(t)) {
            if (m = a >= nt.second ? 0 : n * Math.floor(m / n), a >= nt.second && (g = a >= nt.minute ? 0 : n * Math.floor(g / n)), a >= nt.minute && (u = a >= nt.hour ? 0 : n * Math.floor(u / n)), a >= nt.hour && (p = a >= nt.day ? 0 : n * Math.floor(p / n)), a >= nt.day && (d = a >= nt.month ? 1 : Math.max(1, n * Math.floor(d / n))), a >= nt.month && (c = a >= nt.year ? 0 : n * Math.floor(c / n)), a >= nt.year && (l -= l % n), a === nt.week) {
              n && (t = s.makeTime(l, c, d, p, u, g, m));
              let y = Te(this.dateTimeFormat({ timeZone: this.timezone, weekday: "narrow" }, t, "es"));
              d += -y + i + (y < i ? -7 : 0);
            }
            t = s.makeTime(l, c, d, p, u, g, m), s.variableTimezone && It(e) && (x = e - t > 4 * nt.month || s.getTimezoneOffset(t) !== s.getTimezoneOffset(e));
            let f = t, b = 1;
            for (; f < e; ) r.push(f), a === nt.year ? f = s.makeTime(l + b * n, 0) : a === nt.month ? f = s.makeTime(l, c + b * n) : x && (a === nt.day || a === nt.week) ? f = s.makeTime(l, c, d + b * n * (a === nt.day ? 1 : 7)) : x && a === nt.hour && n > 1 ? f = s.makeTime(l, c, d, p + b * n) : f += a * n, b++;
            r.push(f), a <= nt.hour && r.length < 1e4 && r.forEach((y) => {
              y % 18e5 == 0 && s.dateFormat("%H%M%S%L", y) === "000000000" && (o[y] = "day");
            });
          }
          return r.info = ct(h, { higherRanks: o, totalRange: a * n }), r;
        }
        getDateFormat(h, t, e, i) {
          let s = this.dateFormat("%m-%d %H:%M:%S.%L", t), r = "01-01 00:00:00.000", o = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, n = "millisecond", a = n;
          for (n in nt) {
            if (h === nt.week && +this.dateFormat("%w", t) === e && s.substr(6) === r.substr(6)) {
              n = "week";
              break;
            }
            if (nt[n] > h) {
              n = a;
              break;
            }
            if (o[n] && s.substr(o[n]) !== r.substr(o[n])) break;
            n !== "week" && (a = n);
          }
          return this.resolveDTLFormat(i[n]).main;
        }
      }, { isTouchDevice: Ae } = P, { fireEvent: Pe, merge: ae } = R, le = { colors: ["#2caffe", "#544fc5", "#00e272", "#fe6a35", "#6b8abc", "#d568fb", "#2ee0ca", "#fa4b42", "#feb56a", "#91e8e1"], symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { locale: void 0, loading: "Loading...", months: void 0, shortMonths: void 0, weekdays: void 0, numericSymbols: ["k", "M", "G", "T", "P", "E"], resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1" }, global: { buttonTheme: { fill: "#f7f7f7", padding: 8, r: 2, stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontSize: "0.8em", fontWeight: "normal" }, states: { hover: { fill: "#e6e6e6" }, select: { fill: "#e6e9ff", style: { color: "#000000", fontWeight: "bold" } }, disabled: { style: { color: "#cccccc" } } } } }, time: { Date: void 0, timezone: "UTC", timezoneOffset: 0, useUTC: void 0 }, chart: { alignThresholds: !1, panning: { enabled: !1, type: "x" }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: {}, position: {} }, reflow: !0, type: "line", zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#334eff", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { style: { color: "#333333", fontWeight: "bold" }, text: "Chart title", margin: 15, minScale: 0.67 }, subtitle: { style: { color: "#666666", fontSize: "0.8em" }, text: "" }, caption: { margin: 15, style: { color: "#666666", fontSize: "0.8em" }, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, legend: { enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", events: {}, layout: "horizontal", itemMarginBottom: 2, itemMarginTop: 2, labelFormatter: function() {
        return this.name;
      }, borderColor: "#999999", borderRadius: 0, navigation: { style: { fontSize: "0.8em" }, activeColor: "#0022ff", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "0.8em", textDecoration: "none", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#666666", textDecoration: "line-through" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontSize: "0.8em", fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: 0.5, textAlign: "center" } }, tooltip: { enabled: !0, animation: { duration: 300, easing: (h) => Math.sqrt(1 - Math.pow(h - 1, 2)) }, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%[AebHMSL]", second: "%[AebHMS]", minute: "%[AebHM]", hour: "%[AebHM]", day: "%[AebY]", week: "Week from %[AebY]", month: "%[BY]", year: "%Y" }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: Ae ? 25 : 10, headerFormat: '<span style="font-size: 0.8em">{ucfirst point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: "#ffffff", borderWidth: void 0, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "0.8em" }, useHTML: !1 }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "0.6em" }, text: "Highcharts.com" } };
      le.chart.styledMode = !0, le.chart.styledMode = !1;
      let Qt = new pe(le.time), ee = { defaultOptions: le, defaultTime: Qt, getOptions: function() {
        return le;
      }, setOptions: function(h) {
        return Pe(P, "setOptions", { options: h }), ae(!0, le, h), h.time && Qt.update(le.time), h.lang && "locale" in h.lang && Qt.update({ locale: h.lang.locale }), le;
      } }, { isNumber: Fe, merge: ca, pInt: ie, defined: Ur } = R;
      class zt {
        static parse(t) {
          return t ? new zt(t) : zt.None;
        }
        constructor(t) {
          let e, i, s, r;
          this.rgba = [NaN, NaN, NaN, NaN], this.input = t;
          let o = P.Color;
          if (o && o !== zt) return new o(t);
          if (typeof t == "object" && t.stops !== void 0) this.stops = t.stops.map((n) => new zt(n[1]));
          else if (typeof t == "string") for (this.input = t = zt.names[t.toLowerCase()] || t, s = zt.parsers.length; s-- && !i; ) (e = (r = zt.parsers[s]).regex.exec(t)) && (i = r.parse(e));
          i && (this.rgba = i);
        }
        get(t) {
          let e = this.input, i = this.rgba;
          if (typeof e == "object" && this.stops !== void 0) {
            let s = ca(e);
            return s.stops = [].slice.call(s.stops), this.stops.forEach((r, o) => {
              s.stops[o] = [s.stops[o][0], r.get(t)];
            }), s;
          }
          return i && Fe(i[0]) ? t !== "rgb" && (t || i[3] !== 1) ? t === "a" ? `${i[3]}` : "rgba(" + i.join(",") + ")" : "rgb(" + i[0] + "," + i[1] + "," + i[2] + ")" : e;
        }
        brighten(t) {
          let e = this.rgba;
          if (this.stops) this.stops.forEach(function(i) {
            i.brighten(t);
          });
          else if (Fe(t) && t !== 0) for (let i = 0; i < 3; i++) e[i] += ie(255 * t), e[i] < 0 && (e[i] = 0), e[i] > 255 && (e[i] = 255);
          return this;
        }
        setOpacity(t) {
          return this.rgba[3] = t, this;
        }
        tweenTo(t, e) {
          let i = this.rgba, s = t.rgba;
          if (!Fe(i[0]) || !Fe(s[0])) return t.input || "none";
          let r = s[3] !== 1 || i[3] !== 1;
          return (r ? "rgba(" : "rgb(") + Math.round(s[0] + (i[0] - s[0]) * (1 - e)) + "," + Math.round(s[1] + (i[1] - s[1]) * (1 - e)) + "," + Math.round(s[2] + (i[2] - s[2]) * (1 - e)) + (r ? "," + (s[3] + (i[3] - s[3]) * (1 - e)) : "") + ")";
        }
      }
      zt.names = { white: "#ffffff", black: "#000000" }, zt.parsers = [{ regex: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?(?:\.\d+)?)\s*\)/, parse: function(h) {
        return [ie(h[1]), ie(h[2]), ie(h[3]), parseFloat(h[4], 10)];
      } }, { regex: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, parse: function(h) {
        return [ie(h[1]), ie(h[2]), ie(h[3]), 1];
      } }, { regex: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?$/i, parse: function(h) {
        return [ie(h[1] + h[1], 16), ie(h[2] + h[2], 16), ie(h[3] + h[3], 16), Ur(h[4]) ? ie(h[4] + h[4], 16) / 255 : 1];
      } }, { regex: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?$/i, parse: function(h) {
        return [ie(h[1], 16), ie(h[2], 16), ie(h[3], 16), Ur(h[4]) ? ie(h[4], 16) / 255 : 1];
      } }], zt.None = new zt("");
      let { parse: $r } = zt, { win: pa } = P, { isNumber: Ns, objectEach: ua } = R;
      class se {
        constructor(t, e, i) {
          this.pos = NaN, this.options = e, this.elem = t, this.prop = i;
        }
        dSetter() {
          let t = this.paths, e = t && t[0], i = t && t[1], s = this.now || 0, r = [];
          if (s !== 1 && e && i)
            if (e.length === i.length && s < 1) for (let o = 0; o < i.length; o++) {
              let n = e[o], a = i[o], l = [];
              for (let c = 0; c < a.length; c++) {
                let d = n[c], p = a[c];
                Ns(d) && Ns(p) && !(a[0] === "A" && (c === 4 || c === 5)) ? l[c] = d + s * (p - d) : l[c] = p;
              }
              r.push(l);
            }
            else r = i;
          else r = this.toD || [];
          this.elem.attr("d", r, void 0, !0);
        }
        update() {
          let t = this.elem, e = this.prop, i = this.now, s = this.options.step;
          this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this);
        }
        run(t, e, i) {
          let s = this, r = s.options, o = function(l) {
            return !o.stopped && s.step(l);
          }, n = pa.requestAnimationFrame || function(l) {
            setTimeout(l, 13);
          }, a = function() {
            for (let l = 0; l < se.timers.length; l++) se.timers[l]() || se.timers.splice(l--, 1);
            se.timers.length && n(a);
          };
          t !== e || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +/* @__PURE__ */ new Date(), this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && se.timers.push(o) === 1 && n(a)) : (delete r.curAnim[this.prop], r.complete && Object.keys(r.curAnim).length === 0 && r.complete.call(this.elem));
        }
        step(t) {
          let e, i, s = +/* @__PURE__ */ new Date(), r = this.options, o = this.elem, n = r.complete, a = r.duration, l = r.curAnim;
          return o.attr && !o.element ? e = !1 : t || s >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), l[this.prop] = !0, i = !0, ua(l, function(c) {
            c !== !0 && (i = !1);
          }), i && n && n.call(o), e = !1) : (this.pos = r.easing((s - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e;
        }
        initPath(t, e, i) {
          let s = t.startX, r = t.endX, o = i.slice(), n = t.isArea, a = n ? 2 : 1, l = e && i.length > e.length && i.hasStackedCliffs, c, d, p, u, g = e && e.slice();
          if (!g || l) return [o, o];
          function m(f, b) {
            for (; f.length < d; ) {
              let y = f[0], v = b[d - f.length];
              if (v && y[0] === "M" && (v[0] === "C" ? f[0] = ["C", y[1], y[2], y[1], y[2], y[1], y[2]] : f[0] = ["L", y[1], y[2]]), f.unshift(y), n) {
                let w = f.pop();
                f.push(f[f.length - 1], w);
              }
            }
          }
          function x(f) {
            for (; f.length < d; ) {
              let b = f[Math.floor(f.length / a) - 1].slice();
              if (b[0] === "C" && (b[1] = b[5], b[2] = b[6]), n) {
                let y = f[Math.floor(f.length / a)].slice();
                f.splice(f.length / 2, 0, b, y);
              } else f.push(b);
            }
          }
          if (s && r && r.length) {
            for (p = 0; p < s.length; p++) {
              if (s[p] === r[0]) {
                c = p;
                break;
              }
              if (s[0] === r[r.length - s.length + p]) {
                c = p, u = !0;
                break;
              }
              if (s[s.length - 1] === r[r.length - s.length + p]) {
                c = s.length - p;
                break;
              }
            }
            c === void 0 && (g = []);
          }
          return g.length && Ns(c) && (d = o.length + c * a, u ? (m(g, o), x(o)) : (m(o, g), x(g))), [g, o];
        }
        fillSetter() {
          se.prototype.strokeSetter.apply(this, arguments);
        }
        strokeSetter() {
          this.elem.attr(this.prop, $r(this.start).tweenTo($r(this.end), this.pos), void 0, !0);
        }
      }
      se.timers = [];
      let { defined: ga, getStyle: fa, isArray: ma, isNumber: xa, isObject: Ws, merge: Vr, objectEach: ya, pick: ba } = R;
      function Fs(h) {
        return Ws(h) ? Vr({ duration: 500, defer: 0 }, h) : { duration: h ? 500 : 0, defer: 0 };
      }
      function qr(h, t) {
        let e = se.timers.length;
        for (; e--; ) se.timers[e].elem !== h || t && t !== se.timers[e].prop || (se.timers[e].stopped = !0);
      }
      let $t = { animate: function(h, t, e) {
        let i, s = "", r, o, n;
        Ws(e) || (n = arguments, e = { duration: n[2], easing: n[3], complete: n[4] }), xa(e.duration) || (e.duration = 400), e.easing = typeof e.easing == "function" ? e.easing : Math[e.easing] || Math.easeInOutSine, e.curAnim = Vr(t), ya(t, function(a, l) {
          qr(h, l), o = new se(h, e, l), r = void 0, l === "d" && ma(t.d) ? (o.paths = o.initPath(h, h.pathArray, t.d), o.toD = t.d, i = 0, r = 1) : h.attr ? i = h.attr(l) : (i = parseFloat(fa(h, l)) || 0, l !== "opacity" && (s = "px")), r || (r = a), typeof r == "string" && r.match("px") && (r = r.replace(/px/g, "")), o.run(i, r, s);
        });
      }, animObject: Fs, getDeferredAnimation: function(h, t, e) {
        let i = Fs(t), s = e ? [e] : h.series, r = 0, o = 0;
        return s.forEach((n) => {
          let a = Fs(n.options.animation);
          r = Ws(t) && ga(t.defer) ? i.defer : Math.max(r, a.duration + a.defer), o = Math.min(i.duration, a.duration);
        }), h.renderer.forExport && (r = 0), { defer: Math.max(0, r - o), duration: Math.min(r, o) };
      }, setAnimation: function(h, t) {
        t.renderer.globalAnimation = ba(h, t.options.chart.animation, !0);
      }, stop: qr }, { SVG_NS: Kr, win: va } = P, { attr: ka, createElement: wa, css: Ma, error: Zr, isFunction: Sa, isString: Jr, objectEach: Qr, splat: Ca } = R, { trustedTypes: Hs } = va, _i = Hs && Sa(Hs.createPolicy) && Hs.createPolicy("highcharts", { createHTML: (h) => h }), Ta = _i ? _i.createHTML("") : "";
      class wt {
        static filterUserAttributes(t) {
          return Qr(t, (e, i) => {
            let s = !0;
            wt.allowedAttributes.indexOf(i) === -1 && (s = !1), ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(i) !== -1 && (s = Jr(e) && wt.allowedReferences.some((r) => e.indexOf(r) === 0)), s || (Zr(33, !1, void 0, { "Invalid attribute in config": `${i}` }), delete t[i]), Jr(e) && t[i] && (t[i] = e.replace(/</g, "&lt;"));
          }), t;
        }
        static parseStyle(t) {
          return t.split(";").reduce((e, i) => {
            let s = i.split(":").map((o) => o.trim()), r = s.shift();
            return r && s.length && (e[r.replace(/-([a-z])/g, (o) => o[1].toUpperCase())] = s.join(":")), e;
          }, {});
        }
        static setElementHTML(t, e) {
          t.innerHTML = wt.emptyHTML, e && new wt(e).addToDOM(t);
        }
        constructor(t) {
          this.nodes = typeof t == "string" ? this.parseMarkup(t) : t;
        }
        addToDOM(t) {
          return function e(i, s) {
            let r;
            return Ca(i).forEach(function(o) {
              let n, a = o.tagName, l = o.textContent ? P.doc.createTextNode(o.textContent) : void 0, c = wt.bypassHTMLFiltering;
              if (a)
                if (a === "#text") n = l;
                else if (wt.allowedTags.indexOf(a) !== -1 || c) {
                  let d = a === "svg" ? Kr : s.namespaceURI || Kr, p = P.doc.createElementNS(d, a), u = o.attributes || {};
                  Qr(o, function(g, m) {
                    m !== "tagName" && m !== "attributes" && m !== "children" && m !== "style" && m !== "textContent" && (u[m] = g);
                  }), ka(p, c ? u : wt.filterUserAttributes(u)), o.style && Ma(p, o.style), l && p.appendChild(l), e(o.children || [], p), n = p;
                } else Zr(33, !1, void 0, { "Invalid tagName in config": a });
              n && s.appendChild(n), r = n;
            }), r;
          }(this.nodes, t);
        }
        parseMarkup(t) {
          let e, i = [];
          t = t.trim().replace(/ style=(["'])/g, " data-style=$1");
          try {
            e = new DOMParser().parseFromString(_i ? _i.createHTML(t) : t, "text/html");
          } catch {
          }
          if (!e) {
            let r = wa("div");
            r.innerHTML = t, e = { body: r };
          }
          let s = (r, o) => {
            let n = r.nodeName.toLowerCase(), a = { tagName: n };
            n === "#text" && (a.textContent = r.textContent || "");
            let l = r.attributes;
            if (l) {
              let c = {};
              [].forEach.call(l, (d) => {
                d.name === "data-style" ? a.style = wt.parseStyle(d.value) : c[d.name] = d.value;
              }), a.attributes = c;
            }
            if (r.childNodes.length) {
              let c = [];
              [].forEach.call(r.childNodes, (d) => {
                s(d, c);
              }), c.length && (a.children = c);
            }
            o.push(a);
          };
          return [].forEach.call(e.body.childNodes, (r) => s(r, i)), i;
        }
      }
      wt.allowedAttributes = ["alt", "aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup", "aria-hidden", "aria-label", "aria-labelledby", "aria-live", "aria-pressed", "aria-readonly", "aria-roledescription", "aria-selected", "class", "clip-path", "color", "colspan", "cx", "cy", "d", "dx", "dy", "disabled", "fill", "filterUnits", "flood-color", "flood-opacity", "height", "href", "id", "in", "in2", "markerHeight", "markerWidth", "offset", "opacity", "operator", "orient", "padding", "paddingLeft", "paddingRight", "patternUnits", "r", "radius", "refX", "refY", "role", "scope", "slope", "src", "startOffset", "stdDeviation", "stroke", "stroke-linecap", "stroke-width", "style", "tableValues", "result", "rowspan", "summary", "target", "tabindex", "text-align", "text-anchor", "textAnchor", "textLength", "title", "type", "valign", "width", "x", "x1", "x2", "xlink:href", "y", "y1", "y2", "zIndex"], wt.allowedReferences = ["https://", "http://", "mailto:", "/", "../", "./", "#"], wt.allowedTags = ["a", "abbr", "b", "br", "button", "caption", "circle", "clipPath", "code", "dd", "defs", "div", "dl", "dt", "em", "feComponentTransfer", "feComposite", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMorphology", "feOffset", "feMerge", "feMergeNode", "filter", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "li", "linearGradient", "marker", "ol", "p", "path", "pattern", "pre", "rect", "small", "span", "stop", "strong", "style", "sub", "sup", "svg", "table", "text", "textPath", "thead", "title", "tbody", "tspan", "td", "th", "tr", "u", "ul", "#text"], wt.emptyHTML = Ta, wt.bypassHTMLFiltering = !1;
      let { defaultOptions: to, defaultTime: eo } = ee, { doc: Aa } = P, { extend: Pa, getNestedProperty: Oa, isArray: La, isNumber: io, isObject: Ea, pick: Ia, ucfirst: Da } = R, Yi = { add: (h, t) => h + t, divide: (h, t) => t !== 0 ? h / t : "", eq: (h, t) => h == t, each: function(h) {
        let t = arguments[arguments.length - 1];
        return !!La(h) && h.map((e, i) => ji(t.body, Pa(Ea(e) ? e : { "@this": e }, { "@index": i, "@first": i === 0, "@last": i === h.length - 1 }))).join("");
      }, ge: (h, t) => h >= t, gt: (h, t) => h > t, if: (h) => !!h, le: (h, t) => h <= t, lt: (h, t) => h < t, multiply: (h, t) => h * t, ne: (h, t) => h != t, subtract: (h, t) => h - t, ucfirst: Da, unless: (h) => !h }, so = {};
      function ji(h = "", t, e) {
        let i = /\{([\p{L}\d:\.,;\-\/<>\[\]%_@"'’= #\(\)]+)\}/gu, s = /\(([\p{L}\d:\.,;\-\/<>\[\]%_@"'= ]+)\)/gu, r = [], o = /f$/, n = /\.(\d)/, a = (e == null ? void 0 : e.options.lang) || to.lang, l = e && e.time || eo, c = e && e.numberFormatter || ro, d = (x = "") => {
          let f;
          return x === "true" || x !== "false" && ((f = Number(x)).toString() === x ? f : /^["'].+["']$/.test(x) ? x.slice(1, -1) : Oa(x, t));
        }, p, u, g = 0, m;
        for (; (p = i.exec(h)) !== null; ) {
          let x = p, f = s.exec(p[1]);
          f && (p = f, m = !0), u && u.isBlock || (u = { ctx: t, expression: p[1], find: p[0], isBlock: p[1].charAt(0) === "#", start: p.index, startInner: p.index + p[0].length, length: p[0].length });
          let b = (u.isBlock ? x : p)[1].split(" ")[0].replace("#", "");
          Yi[b] && (u.isBlock && b === u.fn && g++, u.fn || (u.fn = b));
          let y = p[1] === "else";
          if (u.isBlock && u.fn && (p[1] === `/${u.fn}` || y))
            if (g) !y && g--;
            else {
              let v = u.startInner, w = h.substr(v, p.index - v);
              u.body === void 0 ? (u.body = w, u.startInner = p.index + p[0].length) : u.elseBody = w, u.find += w + p[0], y || (r.push(u), u = void 0);
            }
          else u.isBlock || r.push(u);
          if (f && !(u != null && u.isBlock)) break;
        }
        return r.forEach((x) => {
          let f, b, { body: y, elseBody: v, expression: w, fn: k } = x;
          if (k) {
            let S = [x], M = [], C = w.length, L = 0, E;
            for (b = 0; b <= C; b++) {
              let B = w.charAt(b);
              E || B !== '"' && B !== "'" ? E === B && (E = "") : E = B, E || B !== " " && b !== C || (M.push(w.substr(L, b - L)), L = b + 1);
            }
            for (b = Yi[k].length; b--; ) S.unshift(d(M[b + 1]));
            f = Yi[k].apply(t, S), x.isBlock && typeof f == "boolean" && (f = ji(f ? y : v, t, e));
          } else {
            let S = w.split(":");
            if (f = d(S.shift() || ""), S.length && typeof f == "number") {
              let M = S.join(":");
              if (o.test(M)) {
                let C = parseInt((M.match(n) || ["", "-1"])[1], 10);
                f !== null && (f = c(f, C, a.decimalPoint, M.indexOf(",") > -1 ? a.thousandsSep : ""));
              } else f = l.dateFormat(M, f), m && (f = `"${f}"`);
            }
          }
          h = h.replace(x.find, Ia(f, ""));
        }), m ? ji(h, t, e) : h;
      }
      function ro(h, t, e, i) {
        var m, x;
        t = +t;
        let s, r, [o, n] = (h = +h || 0).toString().split("e").map(Number), a = ((m = this == null ? void 0 : this.options) == null ? void 0 : m.lang) || to.lang, l = (h.toString().split(".")[1] || "").split("e")[0].length, c = t, d = {};
        e ?? (e = a.decimalPoint), i ?? (i = a.thousandsSep), t === -1 ? t = Math.min(l, 20) : io(t) ? t && n < 0 && ((r = t + n) >= 0 ? (o = +o.toExponential(r).split("e")[0], t = r) : (o = Math.floor(o), h = t < 20 ? +(o * Math.pow(10, n)).toFixed(t) : 0, n = 0)) : t = 2, n && (t ?? (t = 2), h = o), io(t) && t >= 0 && (d.minimumFractionDigits = t, d.maximumFractionDigits = t), i === "" && (d.useGrouping = !1);
        let p = i || e, u = p ? "en" : (this == null ? void 0 : this.locale) || a.locale || ((x = Aa.body.closest("[lang]")) == null ? void 0 : x.lang), g = JSON.stringify(d) + u;
        return s = (so[g] ?? (so[g] = new Intl.NumberFormat(u, d))).format(h), p && (s = s.replace(/\,/g, i ?? ",").replace(".", e ?? ".")), (t || +s != 0) && (!(n < 0) || c) || (s = "0"), n && +s != 0 && (s += "e" + (n < 0 ? "" : "+") + n), s;
      }
      let be = { dateFormat: function(h, t, e) {
        return eo.dateFormat(h, t, e);
      }, format: ji, helpers: Yi, numberFormat: ro };
      (function(h) {
        let t;
        h.rendererTypes = {}, h.getRendererType = function(e = t) {
          return h.rendererTypes[e] || h.rendererTypes[t];
        }, h.registerRendererType = function(e, i, s) {
          h.rendererTypes[e] = i, (!t || s) && (t = e, P.Renderer = i);
        };
      })(Kt || (Kt = {}));
      let Ci = Kt, { clamp: Ba, pick: Ra, pushUnique: za, stableSort: Xs } = R;
      (te || (te = {})).distribute = function h(t, e, i) {
        let s = t, r = s.reducedLen || e, o = (y, v) => y.target - v.target, n = [], a = t.length, l = [], c = n.push, d, p, u, g = !0, m, x, f = 0, b;
        for (d = a; d--; ) f += t[d].size;
        if (f > r) {
          for (Xs(t, (y, v) => (v.rank || 0) - (y.rank || 0)), u = (b = t[0].rank === t[t.length - 1].rank) ? a / 2 : -1, p = b ? u : a - 1; u && f > r; ) m = t[d = Math.floor(p)], za(l, d) && (f -= m.size), p += u, b && p >= t.length && (u /= 2, p = u);
          l.sort((y, v) => v - y).forEach((y) => c.apply(n, t.splice(y, 1)));
        }
        for (Xs(t, o), t = t.map((y) => ({ size: y.size, targets: [y.target], align: Ra(y.align, 0.5) })); g; ) {
          for (d = t.length; d--; ) m = t[d], x = (Math.min.apply(0, m.targets) + Math.max.apply(0, m.targets)) / 2, m.pos = Ba(x - m.size * m.align, 0, e - m.size);
          for (d = t.length, g = !1; d--; ) d > 0 && t[d - 1].pos + t[d - 1].size > t[d].pos && (t[d - 1].size += t[d].size, t[d - 1].targets = t[d - 1].targets.concat(t[d].targets), t[d - 1].align = 0.5, t[d - 1].pos + t[d - 1].size > e && (t[d - 1].pos = e - t[d - 1].size), t.splice(d, 1), g = !0);
        }
        return c.apply(s, n), d = 0, t.some((y) => {
          let v = 0;
          return (y.targets || []).some(() => (s[d].pos = y.pos + v, i !== void 0 && Math.abs(s[d].pos - s[d].target) > i ? (s.slice(0, d + 1).forEach((w) => delete w.pos), s.reducedLen = (s.reducedLen || e) - 0.1 * e, s.reducedLen > 0.1 * e && h(s, e, i), !0) : (v += s[d].size, d++, !1)));
        }), Xs(s, o), s;
      };
      let Ui = te, { animate: Na, animObject: Wa, stop: oo } = $t, { deg2rad: no, doc: li, svg: Fa, SVG_NS: $i, win: Ha, isFirefox: Xa } = P, { addEvent: Ga, attr: Gs, createElement: _a, crisp: Vi, css: ao, defined: Oe, erase: Ya, extend: Ti, fireEvent: _s, getAlignFactor: Ys, isArray: ho, isFunction: lo, isNumber: ja, isObject: Ua, isString: co, merge: js, objectEach: di, pick: ve, pInt: qi, pushUnique: $a, replaceNested: Va, syncTimeout: qa, uniqueKey: po } = R;
      class Xt {
        _defaultGetter(t) {
          let e = ve(this[t + "Value"], this[t], this.element ? this.element.getAttribute(t) : null, 0);
          return /^-?[\d\.]+$/.test(e) && (e = parseFloat(e)), e;
        }
        _defaultSetter(t, e, i) {
          i.setAttribute(e, t);
        }
        add(t) {
          let e, i = this.renderer, s = this.element;
          return t && (this.parentGroup = t), this.textStr !== void 0 && this.element.nodeName === "text" && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this;
        }
        addClass(t, e) {
          let i = e ? "" : this.attr("class") || "";
          return (t = (t || "").split(/ /g).reduce(function(s, r) {
            return i.indexOf(r) === -1 && s.push(r), s;
          }, i ? [i] : []).join(" ")) !== i && this.attr("class", t), this;
        }
        afterSetters() {
          this.doTransform && (this.updateTransform(), this.doTransform = !1);
        }
        align(t, e, i, s = !0) {
          let r = {}, o = this.renderer, n = o.alignedObjects, a = !!t;
          t ? (this.alignOptions = t, this.alignByTranslate = e, this.alignTo = i) : (t = this.alignOptions || {}, e = this.alignByTranslate, i = this.alignTo);
          let l = !i || co(i) ? i || "renderer" : void 0;
          l && (a && $a(n, this), i = void 0);
          let c = ve(i, o[l], o), d = (c.x || 0) + (t.x || 0) + ((c.width || 0) - (t.width || 0)) * Ys(t.align), p = (c.y || 0) + (t.y || 0) + ((c.height || 0) - (t.height || 0)) * Ys(t.verticalAlign);
          return r[e ? "translateX" : "x"] = Math.round(d), r[e ? "translateY" : "y"] = Math.round(p), s && (this[this.placed ? "animate" : "attr"](r), this.placed = !0), this.alignAttr = r, this;
        }
        alignSetter(t) {
          let e = { left: "start", center: "middle", right: "end" };
          e[t] && (this.alignValue = t, this.element.setAttribute("text-anchor", e[t]));
        }
        animate(t, e, i) {
          let s = Wa(ve(e, this.renderer.globalAnimation, !0)), r = s.defer;
          return li.hidden && (s.duration = 0), s.duration !== 0 ? (i && (s.complete = i), qa(() => {
            this.element && Na(this, t, s);
          }, r)) : (this.attr(t, void 0, i || s.complete), di(t, function(o, n) {
            s.step && s.step.call(this, o, { prop: n, pos: 1, elem: this });
          }, this)), this;
        }
        applyTextOutline(t) {
          let e = this.element;
          t.indexOf("contrast") !== -1 && (t = t.replace(/contrast/g, this.renderer.getContrast(e.style.fill)));
          let i = t.split(" "), s = i[i.length - 1], r = i[0];
          if (r && r !== "none" && P.svg) {
            this.fakeTS = !0, r = r.replace(/(^[\d\.]+)(.*?)$/g, function(c, d, p) {
              return 2 * Number(d) + p;
            }), this.removeTextOutline();
            let o = li.createElementNS($i, "tspan");
            Gs(o, { class: "highcharts-text-outline", fill: s, stroke: s, "stroke-width": r, "stroke-linejoin": "round" });
            let n = e.querySelector("textPath") || e;
            [].forEach.call(n.childNodes, (c) => {
              let d = c.cloneNode(!0);
              d.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((p) => d.removeAttribute(p)), o.appendChild(d);
            });
            let a = 0;
            [].forEach.call(n.querySelectorAll("text tspan"), (c) => {
              a += Number(c.getAttribute("dy"));
            });
            let l = li.createElementNS($i, "tspan");
            l.textContent = "​", Gs(l, { x: Number(e.getAttribute("x")), dy: -a }), o.appendChild(l), n.insertBefore(o, n.firstChild);
          }
        }
        attr(t, e, i, s) {
          let { element: r } = this, o = Xt.symbolCustomAttribs, n, a, l = this, c;
          return typeof t == "string" && e !== void 0 && (n = t, (t = {})[n] = e), typeof t == "string" ? l = (this[t + "Getter"] || this._defaultGetter).call(this, t, r) : (di(t, function(d, p) {
            c = !1, s || oo(this, p), this.symbolName && o.indexOf(p) !== -1 && (a || (this.symbolAttr(t), a = !0), c = !0), this.rotation && (p === "x" || p === "y") && (this.doTransform = !0), c || (this[p + "Setter"] || this._defaultSetter).call(this, d, p, r);
          }, this), this.afterSetters()), i && i.call(this), l;
        }
        clip(t) {
          if (t && !t.clipPath) {
            let e = po() + "-", i = this.renderer.createElement("clipPath").attr({ id: e }).add(this.renderer.defs);
            Ti(t, { clipPath: i, id: e, count: 0 }), t.add(i);
          }
          return this.attr("clip-path", t ? `url(${this.renderer.url}#${t.id})` : "none");
        }
        crisp(t, e) {
          e = Math.round(e || t.strokeWidth || 0);
          let i = t.x || this.x || 0, s = t.y || this.y || 0, r = (t.width || this.width || 0) + i, o = (t.height || this.height || 0) + s, n = Vi(i, e), a = Vi(s, e);
          return Ti(t, { x: n, y: a, width: Vi(r, e) - n, height: Vi(o, e) - a }), Oe(t.strokeWidth) && (t.strokeWidth = e), t;
        }
        complexColor(t, e, i) {
          let s = this.renderer, r, o, n, a, l, c, d, p, u, g, m = [], x;
          _s(this.renderer, "complexColor", { args: arguments }, function() {
            if (t.radialGradient ? o = "radialGradient" : t.linearGradient && (o = "linearGradient"), o) {
              if (n = t[o], l = s.gradients, c = t.stops, u = i.radialReference, ho(n) && (t[o] = n = { x1: n[0], y1: n[1], x2: n[2], y2: n[3], gradientUnits: "userSpaceOnUse" }), o === "radialGradient" && u && !Oe(n.gradientUnits) && (a = n, n = js(n, s.getRadialAttr(u, a), { gradientUnits: "userSpaceOnUse" })), di(n, function(f, b) {
                b !== "id" && m.push(b, f);
              }), di(c, function(f) {
                m.push(f);
              }), l[m = m.join(",")]) g = l[m].attr("id");
              else {
                n.id = g = po();
                let f = l[m] = s.createElement(o).attr(n).add(s.defs);
                f.radAttr = a, f.stops = [], c.forEach(function(b) {
                  b[1].indexOf("rgba") === 0 ? (d = (r = zt.parse(b[1])).get("rgb"), p = r.get("a")) : (d = b[1], p = 1);
                  let y = s.createElement("stop").attr({ offset: b[0], "stop-color": d, "stop-opacity": p }).add(f);
                  f.stops.push(y);
                });
              }
              x = "url(" + s.url + "#" + g + ")", i.setAttribute(e, x), i.gradient = m, t.toString = function() {
                return x;
              };
            }
          });
        }
        css(t) {
          let e = this.styles, i = {}, s = this.element, r, o = !e;
          if (e && di(t, function(n, a) {
            e && e[a] !== n && (i[a] = n, o = !0);
          }), o) {
            e && (t = Ti(e, i)), t.width === null || t.width === "auto" ? delete this.textWidth : s.nodeName.toLowerCase() === "text" && t.width && (r = this.textWidth = qi(t.width)), Ti(this.styles, t), r && !Fa && this.renderer.forExport && delete t.width;
            let n = Xa && t.fontSize || null;
            n && (ja(n) || /^\d+$/.test(n)) && (t.fontSize += "px");
            let a = js(t);
            s.namespaceURI === this.SVG_NS && (["textOutline", "textOverflow", "whiteSpace", "width"].forEach((l) => a && delete a[l]), a.color && (a.fill = a.color)), ao(s, a);
          }
          return this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), t.textOutline && this.applyTextOutline(t.textOutline)), this;
        }
        dashstyleSetter(t) {
          let e, i = this["stroke-width"];
          if (i === "inherit" && (i = 1), t = t && t.toLowerCase()) {
            let s = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
            for (e = s.length; e--; ) s[e] = "" + qi(s[e]) * ve(i, NaN);
            t = s.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t);
          }
        }
        destroy() {
          var a;
          let t = this, e = t.element || {}, i = t.renderer, s = e.ownerSVGElement, r = e.nodeName === "SPAN" && t.parentGroup || void 0, o, n;
          if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, oo(t), t.clipPath && s) {
            let l = t.clipPath;
            [].forEach.call(s.querySelectorAll("[clip-path],[CLIP-PATH]"), function(c) {
              c.getAttribute("clip-path").indexOf(l.element.id) > -1 && c.removeAttribute("clip-path");
            }), t.clipPath = l.destroy();
          }
          if (t.connector = (a = t.connector) == null ? void 0 : a.destroy(), t.stops) {
            for (n = 0; n < t.stops.length; n++) t.stops[n].destroy();
            t.stops.length = 0, t.stops = void 0;
          }
          for (t.safeRemoveChild(e); r && r.div && r.div.childNodes.length === 0; ) o = r.parentGroup, t.safeRemoveChild(r.div), delete r.div, r = o;
          t.alignOptions && Ya(i.alignedObjects, t), di(t, function(l, c) {
            t[c] && t[c].parentGroup === t && t[c].destroy && t[c].destroy(), delete t[c];
          });
        }
        dSetter(t, e, i) {
          ho(t) && (typeof t[0] == "string" && (t = this.renderer.pathToSegments(t)), this.pathArray = t, t = t.reduce((s, r, o) => r && r.join ? (o ? s + " " : "") + r.join(" ") : (r || "").toString(), "")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
        }
        fillSetter(t, e, i) {
          typeof t == "string" ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
        }
        hrefSetter(t, e, i) {
          i.setAttributeNS("http://www.w3.org/1999/xlink", e, t);
        }
        getBBox(t, e) {
          let i, s, r, o, { alignValue: n, element: a, renderer: l, styles: c, textStr: d } = this, { cache: p, cacheKeys: u } = l, g = a.namespaceURI === this.SVG_NS, m = ve(e, this.rotation, 0), x = l.styledMode ? a && Xt.prototype.getStyle.call(a, "font-size") : c.fontSize;
          if (Oe(d) && ((o = d.toString()).indexOf("<") === -1 && (o = o.replace(/\d/g, "0")), o += ["", l.rootFontSize, x, m, this.textWidth, n, c.lineClamp, c.textOverflow, c.fontWeight].join(",")), o && !t && (i = p[o]), !i || i.polygon) {
            if (g || l.forExport) {
              try {
                r = this.fakeTS && function(b) {
                  let y = a.querySelector(".highcharts-text-outline");
                  y && ao(y, { display: b });
                }, lo(r) && r("none"), i = a.getBBox ? Ti({}, a.getBBox()) : { width: a.offsetWidth, height: a.offsetHeight, x: 0, y: 0 }, lo(r) && r("");
              } catch {
              }
              (!i || i.width < 0) && (i = { x: 0, y: 0, width: 0, height: 0 });
            } else i = this.htmlGetBBox();
            s = i.height, g && (i.height = s = { "11px,17": 14, "13px,20": 16 }[`${x || ""},${Math.round(s)}`] || s), m && (i = this.getRotatedBox(i, m));
            let f = { bBox: i };
            _s(this, "afterGetBBox", f), i = f.bBox;
          }
          if (o && (d === "" || i.height > 0)) {
            for (; u.length > 250; ) delete p[u.shift()];
            p[o] || u.push(o), p[o] = i;
          }
          return i;
        }
        getRotatedBox(t, e) {
          let { x: i, y: s, width: r, height: o } = t, { alignValue: n, translateY: a, rotationOriginX: l = 0, rotationOriginY: c = 0 } = this, d = Ys(n), p = Number(this.element.getAttribute("y") || 0) - (a ? 0 : s), u = e * no, g = (e - 90) * no, m = Math.cos(u), x = Math.sin(u), f = r * m, b = r * x, y = Math.cos(g), v = Math.sin(g), [[w, k], [S, M]] = [l, c].map(($) => [$ - $ * m, $ * x]), C = i + d * (r - f) + w + M + p * y, L = C + f, E = L - o * y, B = E - f, O = s + p - d * b - k + S + p * v, D = O + b, G = D - o * v, Z = G - b, F = Math.min(C, L, E, B), K = Math.min(O, D, G, Z), N = Math.max(C, L, E, B) - F, Y = Math.max(O, D, G, Z) - K;
          return { x: F, y: K, width: N, height: Y, polygon: [[C, O], [L, D], [E, G], [B, Z]] };
        }
        getStyle(t) {
          return Ha.getComputedStyle(this.element || this, "").getPropertyValue(t);
        }
        hasClass(t) {
          return ("" + this.attr("class")).split(" ").indexOf(t) !== -1;
        }
        hide() {
          return this.attr({ visibility: "hidden" });
        }
        htmlGetBBox() {
          return { height: 0, width: 0, x: 0, y: 0 };
        }
        constructor(t, e) {
          this.onEvents = {}, this.opacity = 1, this.SVG_NS = $i, this.element = e === "span" || e === "body" ? _a(e) : li.createElementNS(this.SVG_NS, e), this.renderer = t, this.styles = {}, _s(this, "afterInit");
        }
        on(t, e) {
          let { onEvents: i } = this;
          return i[t] && i[t](), i[t] = Ga(this.element, t, e), this;
        }
        opacitySetter(t, e, i) {
          let s = Number(Number(t).toFixed(3));
          this.opacity = s, i.setAttribute(e, s);
        }
        reAlign() {
          var t;
          (t = this.alignOptions) != null && t.width && this.alignOptions.align !== "left" && (this.alignOptions.width = this.getBBox().width, this.placed = !1, this.align());
        }
        removeClass(t) {
          return this.attr("class", ("" + this.attr("class")).replace(co(t) ? RegExp(`(^| )${t}( |$)`) : t, " ").replace(/ +/g, " ").trim());
        }
        removeTextOutline() {
          let t = this.element.querySelector("tspan.highcharts-text-outline");
          t && this.safeRemoveChild(t);
        }
        safeRemoveChild(t) {
          let e = t.parentNode;
          e && e.removeChild(t);
        }
        setRadialReference(t) {
          let e = this.element.gradient && this.renderer.gradients[this.element.gradient];
          return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this;
        }
        shadow(t) {
          var r;
          let { renderer: e } = this, i = js(((r = this.parentGroup) == null ? void 0 : r.rotation) === 90 ? { offsetX: -1, offsetY: -1 } : {}, Ua(t) ? t : {}), s = e.shadowDefinition(i);
          return this.attr({ filter: t ? `url(${e.url}#${s})` : "none" });
        }
        show(t = !0) {
          return this.attr({ visibility: t ? "inherit" : "visible" });
        }
        "stroke-widthSetter"(t, e, i) {
          this[e] = t, i.setAttribute(e, t);
        }
        strokeWidth() {
          if (!this.renderer.styledMode) return this["stroke-width"] || 0;
          let t = this.getStyle("stroke-width"), e = 0, i;
          return /px$/.test(t) ? e = qi(t) : t !== "" && (Gs(i = li.createElementNS($i, "rect"), { width: t, "stroke-width": 0 }), this.element.parentNode.appendChild(i), e = i.getBBox().width, i.parentNode.removeChild(i)), e;
        }
        symbolAttr(t) {
          let e = this;
          Xt.symbolCustomAttribs.forEach(function(i) {
            e[i] = ve(t[i], e[i]);
          }), e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
        }
        textSetter(t) {
          t !== this.textStr && (delete this.textPxLength, this.textStr = t, this.added && this.renderer.buildText(this), this.reAlign());
        }
        titleSetter(t) {
          let e = this.element, i = e.getElementsByTagName("title")[0] || li.createElementNS(this.SVG_NS, "title");
          e.insertBefore ? e.insertBefore(i, e.firstChild) : e.appendChild(i), i.textContent = Va(ve(t, ""), [/<[^>]*>/g, ""]).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        }
        toFront() {
          let t = this.element;
          return t.parentNode.appendChild(t), this;
        }
        translate(t, e) {
          return this.attr({ translateX: t, translateY: e });
        }
        updateTransform(t = "transform") {
          var p;
          let { element: e, matrix: i, rotation: s = 0, rotationOriginX: r, rotationOriginY: o, scaleX: n, scaleY: a, translateX: l = 0, translateY: c = 0 } = this, d = ["translate(" + l + "," + c + ")"];
          Oe(i) && d.push("matrix(" + i.join(",") + ")"), s && (d.push("rotate(" + s + " " + ve(r, e.getAttribute("x"), 0) + " " + ve(o, e.getAttribute("y") || 0) + ")"), ((p = this.text) == null ? void 0 : p.element.tagName) === "SPAN" && this.text.attr({ rotation: s, rotationOriginX: (r || 0) - this.padding, rotationOriginY: (o || 0) - this.padding })), (Oe(n) || Oe(a)) && d.push("scale(" + ve(n, 1) + " " + ve(a, 1) + ")"), d.length && !(this.text || this).textPath && e.setAttribute(t, d.join(" "));
        }
        visibilitySetter(t, e, i) {
          t === "inherit" ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
        }
        xGetter(t) {
          return this.element.nodeName === "circle" && (t === "x" ? t = "cx" : t === "y" && (t = "cy")), this._defaultGetter(t);
        }
        zIndexSetter(t, e) {
          let i = this.renderer, s = this.parentGroup, r = (s || i).element || i.box, o = this.element, n = r === i.box, a, l, c, d = !1, p, u = this.added, g;
          if (Oe(t) ? (o.setAttribute("data-z-index", t), t = +t, this[e] === t && (u = !1)) : Oe(this[e]) && o.removeAttribute("data-z-index"), this[e] = t, u) {
            for ((t = this.zIndex) && s && (s.handleZ = !0), g = (a = r.childNodes).length - 1; g >= 0 && !d; g--) p = !Oe(c = (l = a[g]).getAttribute("data-z-index")), l !== o && (t < 0 && p && !n && !g ? (r.insertBefore(o, a[g]), d = !0) : (qi(c) <= t || p && (!Oe(t) || t >= 0)) && (r.insertBefore(o, a[g + 1]), d = !0));
            d || (r.insertBefore(o, a[n ? 3 : 0]), d = !0);
          }
          return d;
        }
      }
      Xt.symbolCustomAttribs = ["anchorX", "anchorY", "clockwise", "end", "height", "innerR", "r", "start", "width", "x", "y"], Xt.prototype.strokeSetter = Xt.prototype.fillSetter, Xt.prototype.yGetter = Xt.prototype.xGetter, Xt.prototype.matrixSetter = Xt.prototype.rotationOriginXSetter = Xt.prototype.rotationOriginYSetter = Xt.prototype.rotationSetter = Xt.prototype.scaleXSetter = Xt.prototype.scaleYSetter = Xt.prototype.translateXSetter = Xt.prototype.translateYSetter = Xt.prototype.verticalAlignSetter = function(h, t) {
        this[t] = h, this.doTransform = !0;
      };
      let Le = Xt, { defined: Us, extend: Ka, getAlignFactor: uo, isNumber: Ai, merge: Za, pick: Ki, removeEvent: go } = R;
      class Ze extends Le {
        constructor(t, e, i, s, r, o, n, a, l, c) {
          let d;
          super(t, "g"), this.paddingLeftSetter = this.paddingSetter, this.paddingRightSetter = this.paddingSetter, this.doUpdate = !1, this.textStr = e, this.x = i, this.y = s, this.anchorX = o, this.anchorY = n, this.baseline = l, this.className = c, this.addClass(c === "button" ? "highcharts-no-tooltip" : "highcharts-label"), c && this.addClass("highcharts-" + c), this.text = t.text(void 0, 0, 0, a).attr({ zIndex: 1 }), typeof r == "string" && ((d = /^url\((.*?)\)$/.test(r)) || this.renderer.symbols[r]) && (this.symbolKey = r), this.bBox = Ze.emptyBBox, this.padding = 3, this.baselineOffset = 0, this.needsBox = t.styledMode || d, this.deferredAttr = {}, this.alignFactor = 0;
        }
        alignSetter(t) {
          let e = uo(t);
          e !== this.alignFactor && (this.alignFactor = e, this.bBox && Ai(this.xSetting) && this.attr({ x: this.xSetting }));
        }
        anchorXSetter(t, e) {
          this.anchorX = t, this.boxAttr(e, Math.round(t) - this.getCrispAdjust() - this.xSetting);
        }
        anchorYSetter(t, e) {
          this.anchorY = t, this.boxAttr(e, t - this.ySetting);
        }
        boxAttr(t, e) {
          this.box ? this.box.attr(t, e) : this.deferredAttr[t] = e;
        }
        css(t) {
          if (t) {
            let e = {};
            t = Za(t), Ze.textProps.forEach((i) => {
              t[i] !== void 0 && (e[i] = t[i], delete t[i]);
            }), this.text.css(e), "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : ("width" in e || "textOverflow" in e) && this.updateBoxSize();
          }
          return Le.prototype.css.call(this, t);
        }
        destroy() {
          go(this.element, "mouseenter"), go(this.element, "mouseleave"), this.text && this.text.destroy(), this.box && (this.box = this.box.destroy()), Le.prototype.destroy.call(this);
        }
        fillSetter(t, e) {
          t && (this.needsBox = !0), this.fill = t, this.boxAttr(e, t);
        }
        getBBox(t, e) {
          this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
          let { padding: i, height: s = 0, translateX: r = 0, translateY: o = 0, width: n = 0 } = this, a = Ki(this.paddingLeft, i), l = e ?? (this.rotation || 0), c = { width: n, height: s, x: r + this.bBox.x - a, y: o + this.bBox.y - i + this.baselineOffset };
          return l && (c = this.getRotatedBox(c, l)), c;
        }
        getCrispAdjust() {
          return (this.renderer.styledMode && this.box ? this.box.strokeWidth() : this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
        }
        heightSetter(t) {
          this.heightSetting = t, this.doUpdate = !0;
        }
        afterSetters() {
          super.afterSetters(), this.doUpdate && (this.updateBoxSize(), this.doUpdate = !1);
        }
        onAdd() {
          this.text.add(this), this.attr({ text: Ki(this.textStr, ""), x: this.x || 0, y: this.y || 0 }), this.box && Us(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
        }
        paddingSetter(t, e) {
          Ai(t) ? t !== this[e] && (this[e] = t, this.updateTextPadding()) : this[e] = void 0;
        }
        rSetter(t, e) {
          this.boxAttr(e, t);
        }
        strokeSetter(t, e) {
          this.stroke = t, this.boxAttr(e, t);
        }
        "stroke-widthSetter"(t, e) {
          t && (this.needsBox = !0), this["stroke-width"] = t, this.boxAttr(e, t);
        }
        "text-alignSetter"(t) {
          this.textAlign = t;
        }
        textSetter(t) {
          t !== void 0 && this.text.attr({ text: t }), this.updateTextPadding(), this.reAlign();
        }
        updateBoxSize() {
          let t, e = this.text, i = {}, s = this.padding, r = this.bBox = (!Ai(this.widthSetting) || !Ai(this.heightSetting) || this.textAlign) && Us(e.textStr) ? e.getBBox(void 0, 0) : Ze.emptyBBox;
          this.width = this.getPaddedWidth(), this.height = (this.heightSetting || r.height || 0) + 2 * s;
          let o = this.renderer.fontMetrics(e);
          if (this.baselineOffset = s + Math.min((this.text.firstLineMetrics || o).b, r.height || 1 / 0), this.heightSetting && (this.baselineOffset += (this.heightSetting - o.h) / 2), this.needsBox && !e.textPath) {
            if (!this.box) {
              let n = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect();
              n.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), n.add(this);
            }
            t = this.getCrispAdjust(), i.x = t, i.y = (this.baseline ? -this.baselineOffset : 0) + t, i.width = Math.round(this.width), i.height = Math.round(this.height), this.box.attr(Ka(i, this.deferredAttr)), this.deferredAttr = {};
          }
        }
        updateTextPadding() {
          let t = this.text;
          if (!t.textPath) {
            this.updateBoxSize();
            let e = this.baseline ? 0 : this.baselineOffset, i = (this.paddingLeft ?? this.padding) + (Us(this.widthSetting) && this.bBox ? uo(this.textAlign) * (this.widthSetting - this.bBox.width) : 0);
            (i !== t.x || e !== t.y) && (t.attr("x", i), t.hasBoxWidthChanged && (this.bBox = t.getBBox(!0)), e !== void 0 && t.attr("y", e)), t.x = i, t.y = e;
          }
        }
        widthSetter(t) {
          this.widthSetting = Ai(t) ? t : void 0, this.doUpdate = !0;
        }
        getPaddedWidth() {
          let t = this.padding, e = Ki(this.paddingLeft, t), i = Ki(this.paddingRight, t);
          return (this.widthSetting || this.bBox.width || 0) + e + i;
        }
        xSetter(t) {
          this.x = t, this.alignFactor && (t -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0), this.xSetting = Math.round(t), this.attr("translateX", this.xSetting);
        }
        ySetter(t) {
          this.ySetting = this.y = Math.round(t), this.attr("translateY", this.ySetting);
        }
      }
      Ze.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }, Ze.textProps = ["color", "direction", "fontFamily", "fontSize", "fontStyle", "fontWeight", "lineClamp", "lineHeight", "textAlign", "textDecoration", "textOutline", "textOverflow", "whiteSpace", "width"];
      let { defined: fo, isNumber: Ja, pick: Pi } = R;
      function mo(h, t, e, i, s) {
        let r = [];
        if (s) {
          let o = s.start || 0, n = Pi(s.r, e), a = Pi(s.r, i || e), l = 2e-4 / (s.borderRadius ? 1 : Math.max(n, 1)), c = Math.abs((s.end || 0) - o - 2 * Math.PI) < l, d = (s.end || 0) - (c ? l : 0), p = s.innerR, u = Pi(s.open, c), g = Math.cos(o), m = Math.sin(o), x = Math.cos(d), f = Math.sin(d), b = Pi(s.longArc, d - o - Math.PI < l ? 0 : 1), y = ["A", n, a, 0, b, Pi(s.clockwise, 1), h + n * x, t + a * f];
          y.params = { start: o, end: d, cx: h, cy: t }, r.push(["M", h + n * g, t + a * m], y), fo(p) && ((y = ["A", p, p, 0, b, fo(s.clockwise) ? 1 - s.clockwise : 0, h + p * g, t + p * m]).params = { start: d, end: o, cx: h, cy: t }, r.push(u ? ["M", h + p * x, t + p * f] : ["L", h + p * x, t + p * f], y)), u || r.push(["Z"]);
        }
        return r;
      }
      function xo(h, t, e, i, s) {
        return s && s.r ? $s(h, t, e, i, s) : [["M", h, t], ["L", h + e, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }
      function $s(h, t, e, i, s) {
        let r = (s == null ? void 0 : s.r) || 0;
        return [["M", h + r, t], ["L", h + e - r, t], ["A", r, r, 0, 0, 1, h + e, t + r], ["L", h + e, t + i - r], ["A", r, r, 0, 0, 1, h + e - r, t + i], ["L", h + r, t + i], ["A", r, r, 0, 0, 1, h, t + i - r], ["L", h, t + r], ["A", r, r, 0, 0, 1, h + r, t], ["Z"]];
      }
      let yo = { arc: mo, callout: function(h, t, e, i, s) {
        let r = Math.min(s && s.r || 0, e, i), o = r + 6, n = s && s.anchorX, a = s && s.anchorY || 0, l = $s(h, t, e, i, { r });
        if (!Ja(n) || n < e && n > 0 && a < i && a > 0) return l;
        if (h + n > e - o)
          if (a > t + o && a < t + i - o) l.splice(3, 1, ["L", h + e, a - 6], ["L", h + e + 6, a], ["L", h + e, a + 6], ["L", h + e, t + i - r]);
          else if (n < e) {
            let c = a < t + o, d = c ? t : t + i;
            l.splice(c ? 2 : 5, 0, ["L", n, a], ["L", h + e - r, d]);
          } else l.splice(3, 1, ["L", h + e, i / 2], ["L", n, a], ["L", h + e, i / 2], ["L", h + e, t + i - r]);
        else if (h + n < o)
          if (a > t + o && a < t + i - o) l.splice(7, 1, ["L", h, a + 6], ["L", h - 6, a], ["L", h, a - 6], ["L", h, t + r]);
          else if (n > 0) {
            let c = a < t + o, d = c ? t : t + i;
            l.splice(c ? 1 : 6, 0, ["L", n, a], ["L", h + r, d]);
          } else l.splice(7, 1, ["L", h, i / 2], ["L", n, a], ["L", h, i / 2], ["L", h, t + r]);
        else a > i && n < e - o ? l.splice(5, 1, ["L", n + 6, t + i], ["L", n, t + i + 6], ["L", n - 6, t + i], ["L", h + r, t + i]) : a < 0 && n > o && l.splice(1, 1, ["L", n - 6, t], ["L", n, t - 6], ["L", n + 6, t], ["L", e - r, t]);
        return l;
      }, circle: function(h, t, e, i) {
        return mo(h + e / 2, t + i / 2, e / 2, i / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: !1 });
      }, diamond: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i / 2], ["L", h + e / 2, t + i], ["L", h, t + i / 2], ["Z"]];
      }, rect: xo, roundedRect: $s, square: xo, triangle: function(h, t, e, i) {
        return [["M", h + e / 2, t], ["L", h + e, t + i], ["L", h, t + i], ["Z"]];
      }, "triangle-down": function(h, t, e, i) {
        return [["M", h, t], ["L", h + e, t], ["L", h + e / 2, t + i], ["Z"]];
      } }, { doc: Vs, SVG_NS: Qa, win: bo } = P, { attr: qs, extend: th, fireEvent: eh, isString: ih, objectEach: sh, pick: rh } = R, Ks = (h, t) => h.substring(0, t) + "…", oh = class {
        constructor(h) {
          let t = h.styles;
          this.renderer = h.renderer, this.svgElement = h, this.width = h.textWidth, this.textLineHeight = t && t.lineHeight, this.textOutline = t && t.textOutline, this.ellipsis = !!(t && t.textOverflow === "ellipsis"), this.lineClamp = t == null ? void 0 : t.lineClamp, this.noWrap = !!(t && t.whiteSpace === "nowrap");
        }
        buildSVG() {
          let h = this.svgElement, t = h.element, e = h.renderer, i = rh(h.textStr, "").toString(), s = i.indexOf("<") !== -1, r = t.childNodes, o = !h.added && e.box, n = [i, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, h.getStyle("font-size"), h.styles.lineClamp, this.width].join(",");
          if (n !== h.textCache) {
            h.textCache = n, delete h.actualWidth;
            for (let a = r.length; a--; ) t.removeChild(r[a]);
            if (s || this.ellipsis || this.width || h.textPath || i.indexOf(" ") !== -1 && (!this.noWrap || /<br.*?>/g.test(i))) {
              if (i !== "") {
                o && o.appendChild(t);
                let a = new wt(i);
                this.modifyTree(a.nodes), a.addToDOM(t), this.modifyDOM(), this.ellipsis && (t.textContent || "").indexOf("…") !== -1 && h.attr("title", this.unescapeEntities(h.textStr || "", ["&lt;", "&gt;"])), o && o.removeChild(t);
              }
            } else t.appendChild(Vs.createTextNode(this.unescapeEntities(i)));
            ih(this.textOutline) && h.applyTextOutline && h.applyTextOutline(this.textOutline);
          }
        }
        modifyDOM() {
          let h, t = this.svgElement, e = qs(t.element, "x");
          for (t.firstLineMetrics = void 0; (h = t.element.firstChild) && /^[\s\u200B]*$/.test(h.textContent || " "); ) t.element.removeChild(h);
          [].forEach.call(t.element.querySelectorAll("tspan.highcharts-br"), (o, n) => {
            o.nextSibling && o.previousSibling && (n === 0 && o.previousSibling.nodeType === 1 && (t.firstLineMetrics = t.renderer.fontMetrics(o.previousSibling)), qs(o, { dy: this.getLineHeight(o.nextSibling), x: e }));
          });
          let i = this.width || 0;
          if (!i) return;
          let s = (o, n) => {
            var m;
            let a = o.textContent || "", l = a.replace(/([^\^])-/g, "$1- ").split(" "), c = !this.noWrap && (l.length > 1 || t.element.childNodes.length > 1), d = this.getLineHeight(n), p = Math.max(0, i - 0.8 * d), u = 0, g = t.actualWidth;
            if (c) {
              let x = [], f = [];
              for (; n.firstChild && n.firstChild !== o; ) f.push(n.firstChild), n.removeChild(n.firstChild);
              for (; l.length; ) if (l.length && !this.noWrap && u > 0 && (x.push(o.textContent || ""), o.textContent = l.join(" ").replace(/- /g, "-")), this.truncate(o, void 0, l, u === 0 && g || 0, i, p, (b, y) => l.slice(0, y).join(" ").replace(/- /g, "-")), g = t.actualWidth, u++, this.lineClamp && u >= this.lineClamp) {
                l.length && (this.truncate(o, o.textContent || "", void 0, 0, i, p, Ks), o.textContent = ((m = o.textContent) == null ? void 0 : m.replace("…", "")) + "…");
                break;
              }
              f.forEach((b) => {
                n.insertBefore(b, o);
              }), x.forEach((b) => {
                n.insertBefore(Vs.createTextNode(b), o);
                let y = Vs.createElementNS(Qa, "tspan");
                y.textContent = "​", qs(y, { dy: d, x: e }), n.insertBefore(y, o);
              });
            } else this.ellipsis && a && this.truncate(o, a, void 0, 0, i, p, Ks);
          }, r = (o) => {
            [].slice.call(o.childNodes).forEach((n) => {
              n.nodeType === bo.Node.TEXT_NODE ? s(n, o) : (n.className.baseVal.indexOf("highcharts-br") !== -1 && (t.actualWidth = 0), r(n));
            });
          };
          r(t.element);
        }
        getLineHeight(h) {
          let t = h.nodeType === bo.Node.TEXT_NODE ? h.parentElement : h;
          return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(t || this.svgElement.element).h;
        }
        modifyTree(h) {
          let t = (e, i) => {
            let { attributes: s = {}, children: r, style: o = {}, tagName: n } = e, a = this.renderer.styledMode;
            if (n === "b" || n === "strong" ? a ? s.class = "highcharts-strong" : o.fontWeight = "bold" : (n === "i" || n === "em") && (a ? s.class = "highcharts-emphasized" : o.fontStyle = "italic"), o && o.color && (o.fill = o.color), n === "br") {
              s.class = "highcharts-br", e.textContent = "​";
              let l = h[i + 1];
              l && l.textContent && (l.textContent = l.textContent.replace(/^ +/gm, ""));
            } else n === "a" && r && r.some((l) => l.tagName === "#text") && (e.children = [{ children: r, tagName: "tspan" }]);
            n !== "#text" && n !== "a" && (e.tagName = "tspan"), th(e, { attributes: s, style: o }), r && r.filter((l) => l.tagName !== "#text").forEach(t);
          };
          h.forEach(t), eh(this.svgElement, "afterModifyTree", { nodes: h });
        }
        truncate(h, t, e, i, s, r, o) {
          let n, a, l = this.svgElement, { rotation: c } = l, d = [], p = e && !i ? 1 : 0, u = (t || e || "").length, g = u;
          e || (s = r);
          let m = function(x, f) {
            let b = f || x, y = h.parentNode;
            if (y && d[b] === void 0 && y.getSubStringLength) try {
              d[b] = i + y.getSubStringLength(0, e ? b + 1 : b);
            } catch {
            }
            return d[b];
          };
          if (l.rotation = 0, i + (a = m(h.textContent.length)) > s) {
            for (; p <= u; ) g = Math.ceil((p + u) / 2), e && (n = o(e, g)), a = m(g, n && n.length - 1), p === u ? p = u + 1 : a > s ? u = g - 1 : p = g;
            u === 0 ? h.textContent = "" : t && u === t.length - 1 || (h.textContent = n || o(t || e, g)), this.ellipsis && a > s && this.truncate(h, h.textContent || "", void 0, 0, s, r, Ks);
          }
          e && e.splice(0, g), l.actualWidth = a, l.rotation = c;
        }
        unescapeEntities(h, t) {
          return sh(this.renderer.escapes, function(e, i) {
            t && t.indexOf(e) !== -1 || (h = h.toString().replace(RegExp(e, "g"), i));
          }), h;
        }
      }, { defaultOptions: nh } = ee, { charts: ah, deg2rad: vo, doc: ci, isFirefox: ko, isMS: wo, isWebKit: hh, noop: lh, SVG_NS: dh, symbolSizes: Oi, win: Zs } = P, { addEvent: Zi, attr: Ji, createElement: ch, crisp: Mo, css: Qi, defined: Je, destroyObjectProperties: ph, extend: Qe, isArray: uh, isNumber: Li, isObject: Ei, isString: gh, merge: Js, pick: Qs, pInt: fh, replaceNested: mh, uniqueKey: xh } = R;
      class ts {
        constructor(t, e, i, s, r, o, n) {
          let a, l, c = this.createElement("svg").attr({ version: "1.1", class: "highcharts-root" }), d = c.element;
          n || c.css(this.getStyle(s || {})), t.appendChild(d), Ji(t, "dir", "ltr"), t.innerHTML.indexOf("xmlns") === -1 && Ji(d, "xmlns", this.SVG_NS), this.box = d, this.boxWrapper = c, this.alignedObjects = [], this.url = this.getReferenceURL(), this.createElement("desc").add().element.appendChild(ci.createTextNode("Created with Highcharts 12.0.2")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = r, this.styledMode = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.rootFontSize = c.getStyle("font-size"), this.setSize(e, i, !1), ko && t.getBoundingClientRect && ((a = function() {
            Qi(t, { left: 0, top: 0 }), l = t.getBoundingClientRect(), Qi(t, { left: Math.ceil(l.left) - l.left + "px", top: Math.ceil(l.top) - l.top + "px" });
          })(), this.unSubPixelFix = Zi(Zs, "resize", a));
        }
        definition(t) {
          return new wt([t]).addToDOM(this.defs.element);
        }
        getReferenceURL() {
          if ((ko || hh) && ci.getElementsByTagName("base").length) {
            if (!Je(lt)) {
              let t = xh(), e = new wt([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: t }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": `url(#${t})`, fill: "rgba(0,0,0,0.001)" } }] }]).addToDOM(ci.body);
              Qi(e, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
              let i = ci.elementFromPoint(6, 6);
              lt = (i && i.id) === "hitme", ci.body.removeChild(e);
            }
            if (lt) return mh(Zs.location.href.split("#")[0], [/<[^>]*>/g, ""], [/([\('\)])/g, "\\$1"], [/ /g, "%20"]);
          }
          return "";
        }
        getStyle(t) {
          return this.style = Qe({ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif', fontSize: "1rem" }, t), this.style;
        }
        setStyle(t) {
          this.boxWrapper.css(this.getStyle(t));
        }
        isHidden() {
          return !this.boxWrapper.getBBox().width;
        }
        destroy() {
          let t = this.defs;
          return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), ph(this.gradients || {}), this.gradients = null, this.defs = t.destroy(), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null, null;
        }
        createElement(t) {
          return new this.Element(this, t);
        }
        getRadialAttr(t, e) {
          return { cx: t[0] - t[2] / 2 + (e.cx || 0) * t[2], cy: t[1] - t[2] / 2 + (e.cy || 0) * t[2], r: (e.r || 0) * t[2] };
        }
        shadowDefinition(t) {
          let e = [`highcharts-drop-shadow-${this.chartIndex}`, ...Object.keys(t).map((s) => `${s}-${t[s]}`)].join("-").toLowerCase().replace(/[^a-z\d\-]/g, ""), i = Js({ color: "#000000", offsetX: 1, offsetY: 1, opacity: 0.15, width: 5 }, t);
          return this.defs.element.querySelector(`#${e}`) || this.definition({ tagName: "filter", attributes: { id: e, filterUnits: i.filterUnits }, children: this.getShadowFilterContent(i) }), e;
        }
        getShadowFilterContent(t) {
          return [{ tagName: "feDropShadow", attributes: { dx: t.offsetX, dy: t.offsetY, "flood-color": t.color, "flood-opacity": Math.min(5 * t.opacity, 1), stdDeviation: t.width / 2 } }];
        }
        buildText(t) {
          new oh(t).buildSVG();
        }
        getContrast(t) {
          let e = zt.parse(t).rgba.map((s) => {
            let r = s / 255;
            return r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
          }), i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
          return 1.05 / (i + 0.05) > (i + 0.05) / 0.05 ? "#FFFFFF" : "#000000";
        }
        button(t, e, i, s, r = {}, o, n, a, l, c) {
          let d = this.label(t, e, i, l, void 0, void 0, c, void 0, "button"), p = this.styledMode, u = arguments, g = 0;
          r = Js(nh.global.buttonTheme, r), p && (delete r.fill, delete r.stroke, delete r["stroke-width"]);
          let m = r.states || {}, x = r.style || {};
          delete r.states, delete r.style;
          let f = [wt.filterUserAttributes(r)], b = [x];
          return p || ["hover", "select", "disabled"].forEach((y, v) => {
            f.push(Js(f[0], wt.filterUserAttributes(u[v + 5] || m[y] || {}))), b.push(f[v + 1].style), delete f[v + 1].style;
          }), Zi(d.element, wo ? "mouseover" : "mouseenter", function() {
            g !== 3 && d.setState(1);
          }), Zi(d.element, wo ? "mouseout" : "mouseleave", function() {
            g !== 3 && d.setState(g);
          }), d.setState = (y = 0) => {
            if (y !== 1 && (d.state = g = y), d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][y]), !p) {
              d.attr(f[y]);
              let v = b[y];
              Ei(v) && d.css(v);
            }
          }, d.attr(f[0]), !p && (d.css(Qe({ cursor: "default" }, x)), c && d.text.css({ pointerEvents: "none" })), d.on("touchstart", (y) => y.stopPropagation()).on("click", function(y) {
            g !== 3 && s.call(d, y);
          });
        }
        crispLine(t, e) {
          let [i, s] = t;
          return Je(i[1]) && i[1] === s[1] && (i[1] = s[1] = Mo(i[1], e)), Je(i[2]) && i[2] === s[2] && (i[2] = s[2] = Mo(i[2], e)), t;
        }
        path(t) {
          let e = this.styledMode ? {} : { fill: "none" };
          return uh(t) ? e.d = t : Ei(t) && Qe(e, t), this.createElement("path").attr(e);
        }
        circle(t, e, i) {
          let s = Ei(t) ? t : t === void 0 ? {} : { x: t, y: e, r: i }, r = this.createElement("circle");
          return r.xSetter = r.ySetter = function(o, n, a) {
            a.setAttribute("c" + n, o);
          }, r.attr(s);
        }
        arc(t, e, i, s, r, o) {
          let n;
          Ei(t) ? (e = (n = t).y, i = n.r, s = n.innerR, r = n.start, o = n.end, t = n.x) : n = { innerR: s, start: r, end: o };
          let a = this.symbol("arc", t, e, i, i, n);
          return a.r = i, a;
        }
        rect(t, e, i, s, r, o) {
          let n = Ei(t) ? t : t === void 0 ? {} : { x: t, y: e, r, width: Math.max(i || 0, 0), height: Math.max(s || 0, 0) }, a = this.createElement("rect");
          return this.styledMode || (o !== void 0 && (n["stroke-width"] = o, Qe(n, a.crisp(n))), n.fill = "none"), a.rSetter = function(l, c, d) {
            a.r = l, Ji(d, { rx: l, ry: l });
          }, a.rGetter = function() {
            return a.r || 0;
          }, a.attr(n);
        }
        roundedRect(t) {
          return this.symbol("roundedRect").attr(t);
        }
        setSize(t, e, i) {
          this.width = t, this.height = e, this.boxWrapper.animate({ width: t, height: e }, { step: function() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: Qs(i, !0) ? void 0 : 0 }), this.alignElements();
        }
        g(t) {
          let e = this.createElement("g");
          return t ? e.attr({ class: "highcharts-" + t }) : e;
        }
        image(t, e, i, s, r, o) {
          let n = { preserveAspectRatio: "none" };
          Li(e) && (n.x = e), Li(i) && (n.y = i), Li(s) && (n.width = s), Li(r) && (n.height = r);
          let a = this.createElement("image").attr(n), l = function(c) {
            a.attr({ href: t }), o.call(a, c);
          };
          if (o) {
            a.attr({ href: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" });
            let c = new Zs.Image();
            Zi(c, "load", l), c.src = t, c.complete && l({});
          } else a.attr({ href: t });
          return a;
        }
        symbol(t, e, i, s, r, o) {
          let n, a, l, c, d = this, p = /^url\((.*?)\)$/, u = p.test(t), g = !u && (this.symbols[t] ? t : "circle"), m = g && this.symbols[g];
          if (m) typeof e == "number" && (a = m.call(this.symbols, e || 0, i || 0, s || 0, r || 0, o)), n = this.path(a), d.styledMode || n.attr("fill", "none"), Qe(n, { symbolName: g || void 0, x: e, y: i, width: s, height: r }), o && Qe(n, o);
          else if (u) {
            l = t.match(p)[1];
            let x = n = this.image(l);
            x.imgwidth = Qs(o && o.width, Oi[l] && Oi[l].width), x.imgheight = Qs(o && o.height, Oi[l] && Oi[l].height), c = (f) => f.attr({ width: f.width, height: f.height }), ["width", "height"].forEach((f) => {
              x[`${f}Setter`] = function(b, y) {
                this[y] = b;
                let { alignByTranslate: v, element: w, width: k, height: S, imgwidth: M, imgheight: C } = this, L = y === "width" ? M : C, E = 1;
                o && o.backgroundSize === "within" && k && S && M && C ? (E = Math.min(k / M, S / C), Ji(w, { width: Math.round(M * E), height: Math.round(C * E) })) : w && L && w.setAttribute(y, L), !v && M && C && this.translate(((k || 0) - M * E) / 2, ((S || 0) - C * E) / 2);
              };
            }), Je(e) && x.attr({ x: e, y: i }), x.isImg = !0, x.symbolUrl = t, Je(x.imgwidth) && Je(x.imgheight) ? c(x) : (x.attr({ width: 0, height: 0 }), ch("img", { onload: function() {
              let f = ah[d.chartIndex];
              this.width === 0 && (Qi(this, { position: "absolute", top: "-999em" }), ci.body.appendChild(this)), Oi[l] = { width: this.width, height: this.height }, x.imgwidth = this.width, x.imgheight = this.height, x.element && c(x), this.parentNode && this.parentNode.removeChild(this), d.imgCount--, d.imgCount || !f || f.hasLoaded || f.onload();
            }, src: l }), this.imgCount++);
          }
          return n;
        }
        clipRect(t, e, i, s) {
          return this.rect(t, e, i, s, 0);
        }
        text(t, e, i, s) {
          let r = {};
          if (s && (this.allowHTML || !this.forExport)) return this.html(t, e, i);
          r.x = Math.round(e || 0), i && (r.y = Math.round(i)), Je(t) && (r.text = t);
          let o = this.createElement("text").attr(r);
          return s && (!this.forExport || this.allowHTML) || (o.xSetter = function(n, a, l) {
            let c = l.getElementsByTagName("tspan"), d = l.getAttribute(a);
            for (let p = 0, u; p < c.length; p++) (u = c[p]).getAttribute(a) === d && u.setAttribute(a, n);
            l.setAttribute(a, n);
          }), o;
        }
        fontMetrics(t) {
          let e = fh(Le.prototype.getStyle.call(t, "font-size") || 0), i = e < 24 ? e + 3 : Math.round(1.2 * e), s = Math.round(0.8 * i);
          return { h: i, b: s, f: e };
        }
        rotCorr(t, e, i) {
          let s = t;
          return e && i && (s = Math.max(s * Math.cos(e * vo), 4)), { x: -t / 3 * Math.sin(e * vo), y: s };
        }
        pathToSegments(t) {
          let e = [], i = [], s = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 };
          for (let r = 0; r < t.length; r++) gh(i[0]) && Li(t[r]) && i.length === s[i[0].toUpperCase()] && t.splice(r, 0, i[0].replace("M", "L").replace("m", "l")), typeof t[r] == "string" && (i.length && e.push(i.slice(0)), i.length = 0), i.push(t[r]);
          return e.push(i.slice(0)), e;
        }
        label(t, e, i, s, r, o, n, a, l) {
          return new Ze(this, t, e, i, s, r, o, n, a, l);
        }
        alignElements() {
          this.alignedObjects.forEach((t) => t.align());
        }
      }
      Qe(ts.prototype, { Element: Le, SVG_NS: dh, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: yo, draw: lh }), Ci.registerRendererType("svg", ts, !0);
      let { composed: yh } = P, { attr: bh, css: pi, createElement: vh, defined: So, extend: kh, getAlignFactor: wh, isNumber: Mh, pInt: Sh, pushUnique: Ch } = R;
      function Co(h, t, e) {
        var s;
        let i = ((s = this.div) == null ? void 0 : s.style) || e.style;
        Le.prototype[`${t}Setter`].call(this, h, t, e), i && (i[t] = h);
      }
      let Th = (h, t) => {
        var e;
        if (!h.div) {
          let i = bh(h.element, "class"), s = h.css, r = vh("div", i ? { className: i } : void 0, { position: "absolute", left: `${h.translateX || 0}px`, top: `${h.translateY || 0}px`, ...h.styles, display: h.display, opacity: h.opacity, visibility: h.visibility }, ((e = h.parentGroup) == null ? void 0 : e.div) || t);
          h.classSetter = (o, n, a) => {
            a.setAttribute("class", o), r.className = o;
          }, h.translateXSetter = h.translateYSetter = (o, n) => {
            h[n] = o, r.style[n === "translateX" ? "left" : "top"] = `${o}px`, h.doTransform = !0;
          }, h.opacitySetter = h.visibilitySetter = Co, h.css = (o) => (s.call(h, o), o.cursor && (r.style.cursor = o.cursor), o.pointerEvents && (r.style.pointerEvents = o.pointerEvents), h), h.on = function() {
            return Le.prototype.on.apply({ element: r, onEvents: h.onEvents }, arguments), h;
          }, h.div = r;
        }
        return h.div;
      };
      class Ii extends Le {
        static compose(t) {
          Ch(yh, this.compose) && (t.prototype.html = function(e, i, s) {
            return new Ii(this, "span").attr({ text: e, x: Math.round(i), y: Math.round(s) });
          });
        }
        constructor(t, e) {
          super(t, e), this.css({ position: "absolute", ...t.styledMode ? {} : { fontFamily: t.style.fontFamily, fontSize: t.style.fontSize } });
        }
        getSpanCorrection(t, e, i) {
          this.xCorr = -t * i, this.yCorr = -e;
        }
        css(t) {
          let e, { element: i } = this, s = i.tagName === "SPAN" && t && "width" in t, r = s && t.width;
          return s && (delete t.width, this.textWidth = Sh(r) || void 0, e = !0), (t == null ? void 0 : t.textOverflow) === "ellipsis" && (t.overflow = "hidden"), t != null && t.lineClamp && (t.display = "-webkit-box", t.WebkitLineClamp = t.lineClamp, t.WebkitBoxOrient = "vertical", t.overflow = "hidden"), Mh(Number(t == null ? void 0 : t.fontSize)) && (t.fontSize = t.fontSize + "px"), kh(this.styles, t), pi(i, t), e && this.updateTransform(), this;
        }
        htmlGetBBox() {
          let { element: t } = this;
          return { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight };
        }
        updateTransform() {
          var f;
          if (!this.added) {
            this.alignOnAdd = !0;
            return;
          }
          let { element: t, renderer: e, rotation: i, rotationOriginX: s, rotationOriginY: r, scaleX: o, scaleY: n, styles: a, textAlign: l = "left", textWidth: c, translateX: d = 0, translateY: p = 0, x: u = 0, y: g = 0 } = this, { display: m = "block", whiteSpace: x } = a;
          if (pi(t, { marginLeft: `${d}px`, marginTop: `${p}px` }), t.tagName === "SPAN") {
            let b = [i, l, t.innerHTML, c, this.textAlign].join(","), y = -(((f = this.parentGroup) == null ? void 0 : f.padding) * 1) || 0, v, w = !1;
            if (c !== this.oldTextWidth) {
              let C = this.textPxLength ? this.textPxLength : (pi(t, { width: "", whiteSpace: x || "nowrap" }), t.offsetWidth), L = c || 0;
              (L > this.oldTextWidth || C > L) && (/[ \-]/.test(t.textContent || t.innerText) || t.style.textOverflow === "ellipsis") && (pi(t, { width: C > L || i || o ? c + "px" : "auto", display: m, whiteSpace: x || "normal" }), this.oldTextWidth = c, w = !0);
            }
            this.hasBoxWidthChanged = w, b !== this.cTT && (v = e.fontMetrics(t).b, So(i) && (i !== (this.oldRotation || 0) || l !== this.oldAlign) && this.setSpanRotation(i, y, y), this.getSpanCorrection(!So(i) && !this.textWidth && this.textPxLength || t.offsetWidth, v, wh(l)));
            let { xCorr: k = 0, yCorr: S = 0 } = this, M = { left: `${u + k}px`, top: `${g + S}px`, textAlign: l, transformOrigin: `${(s ?? u) - k - u - y}px ${(r ?? g) - S - g - y}px` };
            (o || n) && (M.transform = `scale(${o ?? 1},${n ?? 1})`), pi(t, M), this.cTT = b, this.oldRotation = i, this.oldAlign = l;
          }
        }
        setSpanRotation(t, e, i) {
          pi(this.element, { transform: `rotate(${t}deg)`, transformOrigin: `${e}% ${i}px` });
        }
        add(t) {
          let e, i = this.renderer.box.parentNode, s = [];
          if (this.parentGroup = t, t && !(e = t.div)) {
            let r = t;
            for (; r; ) s.push(r), r = r.parentGroup;
            for (let o of s.reverse()) e = Th(o, i);
          }
          return (e || i).appendChild(this.element), this.added = !0, this.alignOnAdd && this.updateTransform(), this;
        }
        textSetter(t) {
          t !== this.textStr && (delete this.bBox, delete this.oldTextWidth, wt.setElementHTML(this.element, t ?? ""), this.textStr = t, this.doTransform = !0);
        }
        alignSetter(t) {
          this.alignValue = this.textAlign = t, this.doTransform = !0;
        }
        xSetter(t, e) {
          this[e] = t, this.doTransform = !0;
        }
      }
      let ti = Ii.prototype;
      ti.visibilitySetter = ti.opacitySetter = Co, ti.ySetter = ti.rotationSetter = ti.rotationOriginXSetter = ti.rotationOriginYSetter = ti.xSetter, function(h) {
        h.xAxis = { alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: { millisecond: { main: "%[HMSL]", range: !1 }, second: { main: "%[HMS]", range: !1 }, minute: { main: "%[HM]", range: !1 }, hour: { main: "%[HM]", range: !1 }, day: { main: "%[eb]" }, week: { main: "%[eb]" }, month: { main: "%[bY]" }, year: { main: "%Y" } }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotationLimit: 80, distance: 15, enabled: !0, indentation: 10, overflow: "justify", reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, zIndex: 7, style: { color: "#333333", cursor: "default", fontSize: "0.8em", textOverflow: "ellipsis" } }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minorTicksPerMajor: 5, minPadding: 0.01, offset: void 0, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", useHTML: !1, x: 0, y: 0, style: { color: "#666666", fontSize: "0.8em" } }, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#333333", lineWidth: 1, gridLineColor: "#e6e6e6", gridLineWidth: void 0, tickColor: "#333333" }, h.yAxis = { reversedStacks: !0, endOnTick: !0, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: void 0 }, startOnTick: !0, title: { text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function() {
          let { numberFormatter: t } = this.axis.chart;
          return t(this.total || 0, -1);
        }, style: { color: "#000000", fontSize: "0.7em", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
      }(Se || (Se = {}));
      let Ah = Se, { addEvent: Ph, isFunction: Oh, objectEach: Lh, removeEvent: Eh } = R;
      (q || (q = {})).registerEventOptions = function(h, t) {
        h.eventOptions = h.eventOptions || {}, Lh(t.events, function(e, i) {
          h.eventOptions[i] !== e && (h.eventOptions[i] && (Eh(h, i, h.eventOptions[i]), delete h.eventOptions[i]), Oh(e) && (h.eventOptions[i] = e, Ph(h, i, e, { order: 0 })));
        });
      };
      let es = q, { deg2rad: tr } = P, { clamp: Ih, correctFloat: is, defined: er, destroyObjectProperties: Dh, extend: To, fireEvent: Di, getAlignFactor: Bh, isNumber: ss, merge: Rh, objectEach: zh, pick: ke } = R, ui = class {
        constructor(h, t, e, i, s) {
          this.isNew = !0, this.isNewLabel = !0, this.axis = h, this.pos = t, this.type = e || "", this.parameters = s || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, Di(this, "init"), e || i || this.addLabel();
        }
        addLabel() {
          let h = this, t = h.axis, e = t.options, i = t.chart, s = t.categories, r = t.logarithmic, o = t.names, n = h.pos, a = ke(h.options && h.options.labels, e.labels), l = t.tickPositions, c = n === l[0], d = n === l[l.length - 1], p = (!a.step || a.step === 1) && t.tickInterval === 1, u = l.info, g = h.label, m, x, f, b = this.parameters.category || (s ? ke(s[n], o[n], n) : n);
          r && ss(b) && (b = is(r.lin2log(b))), t.dateTime && (u ? m = (x = i.time.resolveDTLFormat(e.dateTimeLabelFormats[!e.grid && u.higherRanks[n] || u.unitName])).main : ss(b) && (m = t.dateTime.getXDateFormat(b, e.dateTimeLabelFormats || {}))), h.isFirst = c, h.isLast = d;
          let y = { axis: t, chart: i, dateTimeLabelFormat: m, isFirst: c, isLast: d, pos: n, tick: h, tickPositionInfo: u, value: b };
          Di(this, "labelFormat", y);
          let v = (S) => a.formatter ? a.formatter.call(S, S) : a.format ? (S.text = t.defaultLabelFormatter.call(S), be.format(a.format, S, i)) : t.defaultLabelFormatter.call(S), w = v.call(y, y), k = x && x.list;
          k ? h.shortenLabel = function() {
            for (f = 0; f < k.length; f++) if (To(y, { dateTimeLabelFormat: k[f] }), g.attr({ text: v.call(y, y) }), g.getBBox().width < t.getSlotWidth(h) - 2 * (a.padding || 0)) return;
            g.attr({ text: "" });
          } : h.shortenLabel = void 0, p && t._addedPlotLB && h.moveLabel(w, a), er(g) || h.movedLabel ? g && g.textStr !== w && !p && (!g.textWidth || a.style.width || g.styles.width || g.css({ width: null }), g.attr({ text: w }), g.textPxLength = g.getBBox().width) : (h.label = g = h.createLabel(w, a), h.rotation = 0);
        }
        createLabel(h, t, e) {
          let i = this.axis, { renderer: s, styledMode: r } = i.chart, o = er(h) && t.enabled ? s.text(h, e == null ? void 0 : e.x, e == null ? void 0 : e.y, t.useHTML).add(i.labelGroup) : void 0;
          if (o) {
            let n = t.style.whiteSpace || "normal";
            r || o.css(Rh(t.style, { whiteSpace: "nowrap" })), o.textPxLength = o.getBBox().width, r || o.css({ whiteSpace: n });
          }
          return o;
        }
        destroy() {
          Dh(this, this.axis);
        }
        getPosition(h, t, e, i) {
          let s = this.axis, r = s.chart, o = i && r.oldChartHeight || r.chartHeight, n = { x: h ? is(s.translate(t + e, void 0, void 0, i) + s.transB) : s.left + s.offset + (s.opposite ? (i && r.oldChartWidth || r.chartWidth) - s.right - s.left : 0), y: h ? o - s.bottom + s.offset - (s.opposite ? s.height : 0) : is(o - s.translate(t + e, void 0, void 0, i) - s.transB) };
          return n.y = Ih(n.y, -1e9, 1e9), Di(this, "afterGetPosition", { pos: n }), n;
        }
        getLabelPosition(h, t, e, i, s, r, o, n) {
          let a, l, c = this.axis, d = c.transA, p = c.isLinked && c.linkedParent ? c.linkedParent.reversed : c.reversed, u = c.staggerLines, g = c.tickRotCorr || { x: 0, y: 0 }, m = i || c.reserveSpaceDefault ? 0 : -c.labelOffset * (c.labelAlign === "center" ? 0.5 : 1), x = s.distance, f = {};
          return a = c.side === 0 ? e.rotation ? -x : -e.getBBox().height : c.side === 2 ? g.y + x : Math.cos(e.rotation * tr) * (g.y - e.getBBox(!1, 0).height / 2), er(s.y) && (a = c.side === 0 && c.horiz ? s.y + a : s.y), h = h + ke(s.x, [0, 1, 0, -1][c.side] * x) + m + g.x - (r && i ? r * d * (p ? -1 : 1) : 0), t = t + a - (r && !i ? r * d * (p ? 1 : -1) : 0), u && (l = o / (n || 1) % u, c.opposite && (l = u - l - 1), t += l * (c.labelOffset / u)), f.x = h, f.y = Math.round(t), Di(this, "afterGetLabelPosition", { pos: f, tickmarkOffset: r, index: o }), f;
        }
        getLabelSize() {
          return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
        }
        getMarkPath(h, t, e, i, s = !1, r) {
          return r.crispLine([["M", h, t], ["L", h + (s ? 0 : -e), t + (s ? e : 0)]], i);
        }
        handleOverflow(h) {
          let t = this.axis, e = t.options.labels, i = h.x, s = t.chart.chartWidth, r = t.chart.spacing, o = ke(t.labelLeft, Math.min(t.pos, r[3])), n = ke(t.labelRight, Math.max(t.isRadial ? 0 : t.pos + t.len, s - r[1])), a = this.label, l = this.rotation, c = Bh(t.labelAlign || a.attr("align")), d = a.getBBox().width, p = t.getSlotWidth(this), u = p, g = 1, m, x, f;
          l || e.overflow !== "justify" ? l < 0 && i - c * d < o ? f = Math.round(i / Math.cos(l * tr) - o) : l > 0 && i + c * d > n && (f = Math.round((s - i) / Math.cos(l * tr))) : (m = i - c * d, x = i + (1 - c) * d, m < o ? u = h.x + u * (1 - c) - o : x > n && (u = n - h.x + u * c, g = -1), (u = Math.min(p, u)) < p && t.labelAlign === "center" && (h.x += g * (p - u - c * (p - Math.min(d, u)))), (d > u || t.autoRotation && (a.styles || {}).width) && (f = u)), f && a && (this.shortenLabel ? this.shortenLabel() : a.css(To({}, { width: Math.floor(f) + "px", lineClamp: t.isRadial ? 0 : 1 })));
        }
        moveLabel(h, t) {
          let e = this, i = e.label, s = e.axis, r = !1, o;
          i && i.textStr === h ? (e.movedLabel = i, r = !0, delete e.label) : zh(s.ticks, function(n) {
            r || n.isNew || n === e || !n.label || n.label.textStr !== h || (e.movedLabel = n.label, r = !0, n.labelPos = e.movedLabel.xy, delete n.label);
          }), !r && (e.labelPos || i) && (o = e.labelPos || i.xy, e.movedLabel = e.createLabel(h, t, o), e.movedLabel && e.movedLabel.attr({ opacity: 0 }));
        }
        render(h, t, e) {
          let i = this.axis, s = i.horiz, r = this.pos, o = ke(this.tickmarkOffset, i.tickmarkOffset), n = this.getPosition(s, r, o, t), a = n.x, l = n.y, c = i.pos, d = c + i.len, p = s ? a : l;
          !i.chart.polar && this.isNew && (is(p) < c || p > d) && (e = 0);
          let u = ke(e, this.label && this.label.newOpacity, 1);
          e = ke(e, 1), this.isActive = !0, this.renderGridLine(t, e), this.renderMark(n, e), this.renderLabel(n, t, u, h), this.isNew = !1, Di(this, "afterRender");
        }
        renderGridLine(h, t) {
          let e = this.axis, i = e.options, s = {}, r = this.pos, o = this.type, n = ke(this.tickmarkOffset, e.tickmarkOffset), a = e.chart.renderer, l = this.gridLine, c, d = i.gridLineWidth, p = i.gridLineColor, u = i.gridLineDashStyle;
          this.type === "minor" && (d = i.minorGridLineWidth, p = i.minorGridLineColor, u = i.minorGridLineDashStyle), l || (e.chart.styledMode || (s.stroke = p, s["stroke-width"] = d || 0, s.dashstyle = u), o || (s.zIndex = 1), h && (t = 0), this.gridLine = l = a.path().attr(s).addClass("highcharts-" + (o ? o + "-" : "") + "grid-line").add(e.gridGroup)), l && (c = e.getPlotLinePath({ value: r + n, lineWidth: l.strokeWidth(), force: "pass", old: h, acrossPanes: !1 })) && l[h || this.isNew ? "attr" : "animate"]({ d: c, opacity: t });
        }
        renderMark(h, t) {
          let e = this.axis, i = e.options, s = e.chart.renderer, r = this.type, o = e.tickSize(r ? r + "Tick" : "tick"), n = h.x, a = h.y, l = ke(i[r !== "minor" ? "tickWidth" : "minorTickWidth"], !r && e.isXAxis ? 1 : 0), c = i[r !== "minor" ? "tickColor" : "minorTickColor"], d = this.mark, p = !d;
          o && (e.opposite && (o[0] = -o[0]), d || (this.mark = d = s.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(e.axisGroup), e.chart.styledMode || d.attr({ stroke: c, "stroke-width": l })), d[p ? "attr" : "animate"]({ d: this.getMarkPath(n, a, o[0], d.strokeWidth(), e.horiz, s), opacity: t }));
        }
        renderLabel(h, t, e, i) {
          let s = this.axis, r = s.horiz, o = s.options, n = this.label, a = o.labels, l = a.step, c = ke(this.tickmarkOffset, s.tickmarkOffset), d = h.x, p = h.y, u = !0;
          n && ss(d) && (n.xy = h = this.getLabelPosition(d, p, n, r, a, c, i, l), (!this.isFirst || this.isLast || o.showFirstLabel) && (!this.isLast || this.isFirst || o.showLastLabel) ? !r || a.step || a.rotation || t || e === 0 || this.handleOverflow(h) : u = !1, l && i % l && (u = !1), u && ss(h.y) ? (h.opacity = e, n[this.isNewLabel ? "attr" : "animate"](h).show(!0), this.isNewLabel = !1) : (n.hide(), this.isNewLabel = !0));
        }
        replaceMovedLabel() {
          let h = this.label, t = this.axis;
          h && !this.isNew && (h.animate({ opacity: 0 }, void 0, h.destroy), delete this.label), t.isDirty = !0, this.label = this.movedLabel, delete this.movedLabel;
        }
      }, { animObject: Nh } = $t, { xAxis: Ao, yAxis: Wh } = Ah, { defaultOptions: ir } = ee, { registerEventOptions: Fh } = es, { deg2rad: Hh } = P, { arrayMax: Po, arrayMin: Xh, clamp: sr, correctFloat: de, defined: gt, destroyObjectProperties: Gh, erase: Oo, error: rr, extend: rs, fireEvent: At, getClosestDistance: Lo, insertItem: _h, isArray: Eo, isNumber: _, isString: Io, merge: os, normalizeTickInterval: Yh, objectEach: ns, pick: J, relativeLength: as, removeEvent: jh, splat: Uh, syncTimeout: $h } = R, Do = (h, t) => Yh(t, void 0, void 0, J(h.options.allowDecimals, t < 0.5 || h.tickAmount !== void 0), !!h.tickAmount);
      rs(ir, { xAxis: Ao, yAxis: os(Ao, Wh) });
      class gi {
        constructor(t, e, i) {
          this.init(t, e, i);
        }
        init(t, e, i = this.coll) {
          let s = i === "xAxis", r = this.isZAxis || (t.inverted ? !s : s);
          this.chart = t, this.horiz = r, this.isXAxis = s, this.coll = i, At(this, "init", { userOptions: e }), this.opposite = J(e.opposite, this.opposite), this.side = J(e.side, this.side, r ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
          let o = this.options, n = o.labels;
          this.type ?? (this.type = o.type || "linear"), this.uniqueNames ?? (this.uniqueNames = o.uniqueNames ?? !0), At(this, "afterSetType"), this.userOptions = e, this.minPixelPadding = 0, this.reversed = J(o.reversed, this.reversed), this.visible = o.visible, this.zoomEnabled = o.zoomEnabled, this.hasNames = this.type === "category" || o.categories === !0, this.categories = Eo(o.categories) && o.categories || (this.hasNames ? [] : void 0), this.names || (this.names = [], this.names.keys = {}), this.plotLinesAndBandsGroups = {}, this.positiveValuesOnly = !!this.logarithmic, this.isLinked = gt(o.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len ?? (this.len = 0), this.minRange = this.userMinRange = o.minRange || o.maxZoom, this.range = o.range, this.offset = o.offset || 0, this.max = void 0, this.min = void 0;
          let a = J(o.crosshair, Uh(t.options.tooltip.crosshairs)[s ? 0 : 1]);
          this.crosshair = a === !0 ? {} : a, t.axes.indexOf(this) === -1 && (s ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), _h(this, t[this.coll])), t.orderItems(this.coll), this.series = this.series || [], t.inverted && !this.isZAxis && s && !gt(this.reversed) && (this.reversed = !0), this.labelRotation = _(n.rotation) ? n.rotation : void 0, Fh(this, o), At(this, "afterInit");
        }
        setOptions(t) {
          let e = this.horiz ? { labels: { autoRotation: [-45], padding: 3 }, margin: 15 } : { labels: { padding: 1 }, title: { rotation: 90 * this.side } };
          this.options = os(e, ir[this.coll], t), At(this, "afterSetOptions", { userOptions: t });
        }
        defaultLabelFormatter() {
          let t = this.axis, { numberFormatter: e } = this.chart, i = _(this.value) ? this.value : NaN, s = t.chart.time, r = t.categories, o = this.dateTimeLabelFormat, n = ir.lang, a = n.numericSymbols, l = n.numericSymbolMagnitude || 1e3, c = t.logarithmic ? Math.abs(i) : t.tickInterval, d = a && a.length, p, u;
          if (r) u = `${this.value}`;
          else if (o) u = s.dateFormat(o, i, !0);
          else if (d && a && c >= 1e3) for (; d-- && u === void 0; ) c >= (p = Math.pow(l, d + 1)) && 10 * i % p == 0 && a[d] !== null && i !== 0 && (u = e(i / p, -1) + a[d]);
          return u === void 0 && (u = Math.abs(i) >= 1e4 ? e(i, -1) : e(i, -1, void 0, "")), u;
        }
        getSeriesExtremes() {
          let t, e = this;
          At(this, "getSeriesExtremes", null, function() {
            e.hasVisibleSeries = !1, e.dataMin = e.dataMax = e.threshold = void 0, e.softThreshold = !e.isXAxis, e.series.forEach((i) => {
              if (i.reserveSpace()) {
                let s = i.options, r, o = s.threshold, n, a;
                if (e.hasVisibleSeries = !0, e.positiveValuesOnly && 0 >= (o || 0) && (o = void 0), e.isXAxis) (r = i.getColumn("x")).length && (r = e.logarithmic ? r.filter((l) => l > 0) : r, n = (t = i.getXExtremes(r)).min, a = t.max, _(n) || n instanceof Date || (r = r.filter(_), n = (t = i.getXExtremes(r)).min, a = t.max), r.length && (e.dataMin = Math.min(J(e.dataMin, n), n), e.dataMax = Math.max(J(e.dataMax, a), a)));
                else {
                  let l = i.applyExtremes();
                  _(l.dataMin) && (n = l.dataMin, e.dataMin = Math.min(J(e.dataMin, n), n)), _(l.dataMax) && (a = l.dataMax, e.dataMax = Math.max(J(e.dataMax, a), a)), gt(o) && (e.threshold = o), (!s.softThreshold || e.positiveValuesOnly) && (e.softThreshold = !1);
                }
              }
            });
          }), At(this, "afterGetSeriesExtremes");
        }
        translate(t, e, i, s, r, o) {
          var m;
          let n = this.linkedParent || this, a = s && n.old ? n.old.min : n.min;
          if (!_(a)) return NaN;
          let l = n.minPixelPadding, c = (n.isOrdinal || ((m = n.brokenAxis) == null ? void 0 : m.hasBreaks) || n.logarithmic && r) && n.lin2val, d = 1, p = 0, u = s && n.old ? n.old.transA : n.transA, g = 0;
          return u || (u = n.transA), i && (d *= -1, p = n.len), n.reversed && (d *= -1, p -= d * (n.sector || n.len)), e ? (g = (t = t * d + p - l) / u + a, c && (g = n.lin2val(g))) : (c && (t = n.val2lin(t)), g = d * (t - a) * u + p + d * l + (_(o) ? u * o : 0), n.isRadial || (g = de(g))), g;
        }
        toPixels(t, e) {
          var i;
          return this.translate(((i = this.chart) == null ? void 0 : i.time.parse(t)) ?? NaN, !1, !this.horiz, void 0, !0) + (e ? 0 : this.pos);
        }
        toValue(t, e) {
          return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, void 0, !0);
        }
        getPlotLinePath(t) {
          let e = this, i = e.chart, s = e.left, r = e.top, o = t.old, n = t.value, a = t.lineWidth, l = o && i.oldChartHeight || i.chartHeight, c = o && i.oldChartWidth || i.chartWidth, d = e.transB, p = t.translatedValue, u = t.force, g, m, x, f, b;
          function y(w, k, S) {
            return u !== "pass" && (w < k || w > S) && (u ? w = sr(w, k, S) : b = !0), w;
          }
          let v = { value: n, lineWidth: a, old: o, force: u, acrossPanes: t.acrossPanes, translatedValue: p };
          return At(this, "getPlotLinePath", v, function(w) {
            g = x = (p = sr(p = J(p, e.translate(n, void 0, void 0, o)), -1e9, 1e9)) + d, m = f = l - p - d, _(p) ? e.horiz ? (m = r, f = l - e.bottom + (e.options.isInternal ? 0 : i.scrollablePixelsY || 0), g = x = y(g, s, s + e.width)) : (g = s, x = c - e.right + (i.scrollablePixelsX || 0), m = f = y(m, r, r + e.height)) : (b = !0, u = !1), w.path = b && !u ? void 0 : i.renderer.crispLine([["M", g, m], ["L", x, f]], a || 1);
          }), v.path;
        }
        getLinearTickPositions(t, e, i) {
          let s, r, o, n = de(Math.floor(e / t) * t), a = de(Math.ceil(i / t) * t), l = [];
          if (de(n + t) === n && (o = 20), this.single) return [e];
          for (s = n; s <= a && (l.push(s), (s = de(s + t, o)) !== r); ) r = s;
          return l;
        }
        getMinorTickInterval() {
          let { minorTicks: t, minorTickInterval: e } = this.options;
          return t === !0 ? J(e, "auto") : t !== !1 ? e : void 0;
        }
        getMinorTickPositions() {
          var c;
          let t = this.options, e = this.tickPositions, i = this.minorTickInterval, s = this.pointRangePadding || 0, r = (this.min || 0) - s, o = (this.max || 0) + s, n = (c = this.brokenAxis) != null && c.hasBreaks ? this.brokenAxis.unitLength : o - r, a = [], l;
          if (n && n / i < this.len / 3) {
            let d = this.logarithmic;
            if (d) this.paddedTicks.forEach(function(p, u, g) {
              u && a.push.apply(a, d.getLogTickPositions(i, g[u - 1], g[u], !0));
            });
            else if (this.dateTime && this.getMinorTickInterval() === "auto") a = a.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i), r, o, t.startOfWeek));
            else for (l = r + (e[0] - r) % i; l <= o && l !== a[0]; l += i) a.push(l);
          }
          return a.length !== 0 && this.trimTicks(a), a;
        }
        adjustForMinRange() {
          let t = this.options, e = this.logarithmic, i = this.chart.time, { max: s, min: r, minRange: o } = this, n, a, l, c;
          this.isXAxis && o === void 0 && !e && (o = gt(t.min) || gt(t.max) || gt(t.floor) || gt(t.ceiling) ? null : Math.min(5 * (Lo(this.series.map((d) => {
            let p = d.getColumn("x");
            return d.xIncrement ? p.slice(0, 2) : p;
          })) || 0), this.dataMax - this.dataMin)), _(s) && _(r) && _(o) && s - r < o && (a = this.dataMax - this.dataMin >= o, n = (o - s + r) / 2, l = [r - n, i.parse(t.min) ?? r - n], a && (l[2] = e ? e.log2lin(this.dataMin) : this.dataMin), c = [(r = Po(l)) + o, i.parse(t.max) ?? r + o], a && (c[2] = e ? e.log2lin(this.dataMax) : this.dataMax), (s = Xh(c)) - r < o && (l[0] = s - o, l[1] = i.parse(t.min) ?? s - o, r = Po(l))), this.minRange = o, this.min = r, this.max = s;
        }
        getClosest() {
          let t, e;
          if (this.categories) e = 1;
          else {
            let i = [];
            this.series.forEach(function(s) {
              let r = s.closestPointRange, o = s.getColumn("x");
              o.length === 1 ? i.push(o[0]) : s.sorted && gt(r) && s.reserveSpace() && (e = gt(e) ? Math.min(e, r) : r);
            }), i.length && (i.sort((s, r) => s - r), t = Lo([i]));
          }
          return t && e ? Math.min(t, e) : t || e;
        }
        nameToX(t) {
          let e = Eo(this.options.categories), i = e ? this.categories : this.names, s = t.options.x, r;
          return t.series.requireSorting = !1, gt(s) || (s = this.uniqueNames && i ? e ? i.indexOf(t.name) : J(i.keys[t.name], -1) : t.series.autoIncrement()), s === -1 ? !e && i && (r = i.length) : _(s) && (r = s), r !== void 0 ? (this.names[r] = t.name, this.names.keys[t.name] = r) : t.x && (r = t.x), r;
        }
        updateNames() {
          let t = this, e = this.names;
          e.length > 0 && (Object.keys(e.keys).forEach(function(i) {
            delete e.keys[i];
          }), e.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach((i) => {
            i.xIncrement = null, (!i.points || i.isDirtyData) && (t.max = Math.max(t.max || 0, i.dataTable.rowCount - 1), i.processData(), i.generatePoints());
            let s = i.getColumn("x").slice();
            i.data.forEach((r, o) => {
              let n = s[o];
              r != null && r.options && r.name !== void 0 && (n = t.nameToX(r)) !== void 0 && n !== r.x && (s[o] = r.x = n);
            }), i.dataTable.setColumn("x", s);
          }));
        }
        setAxisTranslation() {
          let t = this, e = t.max - t.min, i = t.linkedParent, s = !!t.categories, r = t.isXAxis, o = t.axisPointRange || 0, n, a = 0, l = 0, c, d = t.transA;
          (r || s || o) && (n = t.getClosest(), i ? (a = i.minPointOffset, l = i.pointRangePadding) : t.series.forEach(function(p) {
            let u = s ? 1 : r ? J(p.options.pointRange, n, 0) : t.axisPointRange || 0, g = p.options.pointPlacement;
            if (o = Math.max(o, u), !t.single || s) {
              let m = p.is("xrange") ? !r : r;
              a = Math.max(a, m && Io(g) ? 0 : u / 2), l = Math.max(l, m && g === "on" ? 0 : u);
            }
          }), c = t.ordinal && t.ordinal.slope && n ? t.ordinal.slope / n : 1, t.minPointOffset = a *= c, t.pointRangePadding = l *= c, t.pointRange = Math.min(o, t.single && s ? 1 : e), r && n && (t.closestPointRange = n)), t.translationSlope = t.transA = d = t.staticScale || t.len / (e + l || 1), t.transB = t.horiz ? t.left : t.bottom, t.minPixelPadding = d * a, At(this, "afterSetAxisTranslation");
        }
        minFromRange() {
          let { max: t, min: e } = this;
          return _(t) && _(e) && t - e || void 0;
        }
        setTickInterval(t) {
          var G, Z, F, K;
          let { categories: e, chart: i, dataMax: s, dataMin: r, dateTime: o, isXAxis: n, logarithmic: a, options: l, softThreshold: c } = this, d = i.time, p = _(this.threshold) ? this.threshold : void 0, u = this.minRange || 0, { ceiling: g, floor: m, linkedTo: x, softMax: f, softMin: b } = l, y = _(x) && ((G = i[this.coll]) == null ? void 0 : G[x]), v = l.tickPixelInterval, w = l.maxPadding, k = l.minPadding, S = 0, M, C = _(l.tickInterval) && l.tickInterval >= 0 ? l.tickInterval : void 0, L, E, B, O;
          if (o || e || y || this.getTickAmount(), B = J(this.userMin, d.parse(l.min)), O = J(this.userMax, d.parse(l.max)), y ? (this.linkedParent = y, M = y.getExtremes(), this.min = J(M.min, M.dataMin), this.max = J(M.max, M.dataMax), this.type !== y.type && rr(11, !0, i)) : (c && gt(p) && _(s) && _(r) && (r >= p ? (L = p, k = 0) : s <= p && (E = p, w = 0)), this.min = J(B, L, r), this.max = J(O, E, s)), _(this.max) && _(this.min) && (a && (this.positiveValuesOnly && !t && 0 >= Math.min(this.min, J(r, this.min)) && rr(10, !0, i), this.min = de(a.log2lin(this.min), 16), this.max = de(a.log2lin(this.max), 16)), this.range && _(r) && (this.userMin = this.min = B = Math.max(r, this.minFromRange() || 0), this.userMax = O = this.max, this.range = void 0)), At(this, "foundExtremes"), this.adjustForMinRange(), _(this.min) && _(this.max)) {
            if (!_(this.userMin) && _(b) && b < this.min && (this.min = B = b), !_(this.userMax) && _(f) && f > this.max && (this.max = O = f), e || this.axisPointRange || (Z = this.stacking) != null && Z.usePercentage || y || !(S = this.max - this.min) || (!gt(B) && k && (this.min -= S * k), gt(O) || !w || (this.max += S * w)), !_(this.userMin) && _(m) && (this.min = Math.max(this.min, m)), !_(this.userMax) && _(g) && (this.max = Math.min(this.max, g)), c && _(r) && _(s)) {
              let N = p || 0;
              !gt(B) && this.min < N && r >= N ? this.min = l.minRange ? Math.min(N, this.max - u) : N : !gt(O) && this.max > N && s <= N && (this.max = l.minRange ? Math.max(N, this.min + u) : N);
            }
            !i.polar && this.min > this.max && (gt(l.min) ? this.max = this.min : gt(l.max) && (this.min = this.max)), S = this.max - this.min;
          }
          if (this.min !== this.max && _(this.min) && _(this.max) ? y && !C && v === y.options.tickPixelInterval ? this.tickInterval = C = y.tickInterval : this.tickInterval = J(C, this.tickAmount ? S / Math.max(this.tickAmount - 1, 1) : void 0, e ? 1 : S * v / Math.max(this.len, v)) : this.tickInterval = 1, n && !t) {
            let N = this.min !== ((F = this.old) == null ? void 0 : F.min) || this.max !== ((K = this.old) == null ? void 0 : K.max);
            this.series.forEach(function(Y) {
              var $;
              Y.forceCrop = ($ = Y.forceCropping) == null ? void 0 : $.call(Y), Y.processData(N);
            }), At(this, "postProcessData", { hasExtremesChanged: N });
          }
          this.setAxisTranslation(), At(this, "initialAxisTranslation"), this.pointRange && !C && (this.tickInterval = Math.max(this.pointRange, this.tickInterval));
          let D = J(l.minTickInterval, o && !this.series.some((N) => !N.sorted) ? this.closestPointRange : 0);
          !C && this.tickInterval < D && (this.tickInterval = D), o || a || C || (this.tickInterval = Do(this, this.tickInterval)), this.tickAmount || (this.tickInterval = this.unsquish()), this.setTickPositions();
        }
        setTickPositions() {
          var c, d;
          let t = this.options, e = t.tickPositions, i = t.tickPositioner, s = this.getMinorTickInterval(), r = !this.isPanning, o = r && t.startOnTick, n = r && t.endOnTick, a = [], l;
          if (this.tickmarkOffset = this.categories && t.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0, this.single = this.min === this.max && gt(this.min) && !this.tickAmount && (this.min % 1 == 0 || t.allowDecimals !== !1), e) a = e.slice();
          else if (_(this.min) && _(this.max)) {
            if (!((c = this.ordinal) != null && c.positions) && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) a = [this.min, this.max], rr(19, !1, this.chart);
            else if (this.dateTime) a = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, t.units), this.min, this.max, t.startOfWeek, (d = this.ordinal) == null ? void 0 : d.positions, this.closestPointRange, !0);
            else if (this.logarithmic) a = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max);
            else {
              let p = this.tickInterval, u = p;
              for (; u <= 2 * p && (a = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount && a.length > this.tickAmount); ) this.tickInterval = Do(this, u *= 1.1);
            }
            a.length > this.len && (a = [a[0], a[a.length - 1]])[0] === a[1] && (a.length = 1), i && (this.tickPositions = a, (l = i.apply(this, [this.min, this.max])) && (a = l));
          }
          this.tickPositions = a, this.minorTickInterval = s === "auto" && this.tickInterval ? this.tickInterval / t.minorTicksPerMajor : s, this.paddedTicks = a.slice(0), this.trimTicks(a, o, n), !this.isLinked && _(this.min) && _(this.max) && (this.single && a.length < 2 && !this.categories && !this.series.some((p) => p.is("heatmap") && p.options.pointPlacement === "between") && (this.min -= 0.5, this.max += 0.5), e || l || this.adjustTickAmount()), At(this, "afterSetTickPositions");
        }
        trimTicks(t, e, i) {
          let s = t[0], r = t[t.length - 1], o = !this.isOrdinal && this.minPointOffset || 0;
          if (At(this, "trimTicks"), !this.isLinked) {
            if (e && s !== -1 / 0) this.min = s;
            else for (; this.min - o > t[0]; ) t.shift();
            if (i) this.max = r;
            else for (; this.max + o < t[t.length - 1]; ) t.pop();
            t.length === 0 && gt(s) && !this.options.tickPositions && t.push((r + s) / 2);
          }
        }
        alignToOthers() {
          let t, e = this, i = e.chart, s = [this], r = e.options, o = i.options.chart, n = this.coll === "yAxis" && o.alignThresholds, a = [];
          if (e.thresholdAlignment = void 0, (o.alignTicks !== !1 && r.alignTicks || n) && r.startOnTick !== !1 && r.endOnTick !== !1 && !e.logarithmic) {
            let l = (d) => {
              let { horiz: p, options: u } = d;
              return [p ? u.left : u.top, u.width, u.height, u.pane].join(",");
            }, c = l(this);
            i[this.coll].forEach(function(d) {
              let { series: p } = d;
              p.length && p.some((u) => u.visible) && d !== e && l(d) === c && (t = !0, s.push(d));
            });
          }
          if (t && n) {
            s.forEach((c) => {
              let d = c.getThresholdAlignment(e);
              _(d) && a.push(d);
            });
            let l = a.length > 1 ? a.reduce((c, d) => c += d, 0) / a.length : void 0;
            s.forEach((c) => {
              c.thresholdAlignment = l;
            });
          }
          return t;
        }
        getThresholdAlignment(t) {
          if ((!_(this.dataMin) || this !== t && this.series.some((e) => e.isDirty || e.isDirtyData)) && this.getSeriesExtremes(), _(this.threshold)) {
            let e = sr((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1);
            return this.options.reversed && (e = 1 - e), e;
          }
        }
        getTickAmount() {
          let t = this.options, e = t.tickPixelInterval, i = t.tickAmount;
          gt(t.tickInterval) || i || !(this.len < e) || this.isRadial || this.logarithmic || !t.startOnTick || !t.endOnTick || (i = 2), !i && this.alignToOthers() && (i = Math.ceil(this.len / e) + 1), i < 4 && (this.finalTickAmt = i, i = 5), this.tickAmount = i;
        }
        adjustTickAmount() {
          let t = this, { finalTickAmt: e, max: i, min: s, options: r, tickPositions: o, tickAmount: n, thresholdAlignment: a } = t, l = o == null ? void 0 : o.length, c = J(t.threshold, t.softThreshold ? 0 : null), d, p, u = t.tickInterval, g, m = () => o.push(de(o[o.length - 1] + u)), x = () => o.unshift(de(o[0] - u));
          if (_(a) && (g = a < 0.5 ? Math.ceil(a * (n - 1)) : Math.floor(a * (n - 1)), r.reversed && (g = n - 1 - g)), t.hasData() && _(s) && _(i)) {
            let f = () => {
              t.transA *= (l - 1) / (n - 1), t.min = r.startOnTick ? o[0] : Math.min(s, o[0]), t.max = r.endOnTick ? o[o.length - 1] : Math.max(i, o[o.length - 1]);
            };
            if (_(g) && _(t.threshold)) {
              for (; o[g] !== c || o.length !== n || o[0] > s || o[o.length - 1] < i; ) {
                for (o.length = 0, o.push(t.threshold); o.length < n; ) o[g] === void 0 || o[g] > t.threshold ? x() : m();
                if (u > 8 * t.tickInterval) break;
                u *= 2;
              }
              f();
            } else if (l < n) {
              for (; o.length < n; ) o.length % 2 || s === c ? m() : x();
              f();
            }
            if (gt(e)) {
              for (p = d = o.length; p--; ) (e === 3 && p % 2 == 1 || e <= 2 && p > 0 && p < d - 1) && o.splice(p, 1);
              t.finalTickAmt = void 0;
            }
          }
        }
        setScale() {
          var o, n;
          let { coll: t, stacking: e } = this, i = !1, s = !1;
          this.series.forEach((a) => {
            i = i || a.isDirtyData || a.isDirty, s = s || a.xAxis && a.xAxis.isDirty || !1;
          }), this.setAxisSize();
          let r = this.len !== (this.old && this.old.len);
          r || i || s || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (e && t === "yAxis" && e.buildStacks(), this.forceRedraw = !1, this.userMinRange || (this.minRange = void 0), this.getSeriesExtremes(), this.setTickInterval(), e && t === "xAxis" && e.buildStacks(), this.isDirty || (this.isDirty = r || this.min !== ((o = this.old) == null ? void 0 : o.min) || this.max !== ((n = this.old) == null ? void 0 : n.max))) : e && e.cleanStacks(), i && delete this.allExtremes, At(this, "afterSetScale");
        }
        setExtremes(t, e, i = !0, s, r) {
          let o = this.chart;
          this.series.forEach((n) => {
            delete n.kdTree;
          }), t = o.time.parse(t), e = o.time.parse(e), At(this, "setExtremes", r = rs(r, { min: t, max: e }), (n) => {
            this.userMin = n.min, this.userMax = n.max, this.eventArgs = n, i && o.redraw(s);
          });
        }
        setAxisSize() {
          let t = this.chart, e = this.options, i = e.offsets || [0, 0, 0, 0], s = this.horiz, r = this.width = Math.round(as(J(e.width, t.plotWidth - i[3] + i[1]), t.plotWidth)), o = this.height = Math.round(as(J(e.height, t.plotHeight - i[0] + i[2]), t.plotHeight)), n = this.top = Math.round(as(J(e.top, t.plotTop + i[0]), t.plotHeight, t.plotTop)), a = this.left = Math.round(as(J(e.left, t.plotLeft + i[3]), t.plotWidth, t.plotLeft));
          this.bottom = t.chartHeight - o - n, this.right = t.chartWidth - r - a, this.len = Math.max(s ? r : o, 0), this.pos = s ? a : n;
        }
        getExtremes() {
          let t = this.logarithmic;
          return { min: t ? de(t.lin2log(this.min)) : this.min, max: t ? de(t.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
        }
        getThreshold(t) {
          let e = this.logarithmic, i = e ? e.lin2log(this.min) : this.min, s = e ? e.lin2log(this.max) : this.max;
          return t === null || t === -1 / 0 ? t = i : t === 1 / 0 ? t = s : i > t ? t = i : s < t && (t = s), this.translate(t, 0, 1, 0, 1);
        }
        autoLabelAlign(t) {
          let e = (J(t, 0) - 90 * this.side + 720) % 360, i = { align: "center" };
          return At(this, "autoLabelAlign", i, function(s) {
            e > 15 && e < 165 ? s.align = "right" : e > 195 && e < 345 && (s.align = "left");
          }), i.align;
        }
        tickSize(t) {
          let e = this.options, i = J(e[t === "tick" ? "tickWidth" : "minorTickWidth"], t === "tick" && this.isXAxis && !this.categories ? 1 : 0), s = e[t === "tick" ? "tickLength" : "minorTickLength"], r;
          i && s && (e[t + "Position"] === "inside" && (s = -s), r = [s, i]);
          let o = { tickSize: r };
          return At(this, "afterTickSize", o), o.tickSize;
        }
        labelMetrics() {
          let t = this.chart.renderer, e = this.ticks, i = e[Object.keys(e)[0]] || {};
          return this.chart.renderer.fontMetrics(i.label || i.movedLabel || t.box);
        }
        unsquish() {
          let t = this.options.labels, e = t.padding || 0, i = this.horiz, s = this.tickInterval, r = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s), o = t.rotation, n = de(0.8 * this.labelMetrics().h), a = Math.max(this.max - this.min, 0), l = function(g) {
            let m = (g + 2 * e) / (r || 1);
            return (m = m > 1 ? Math.ceil(m) : 1) * s > a && g !== 1 / 0 && r !== 1 / 0 && a && (m = Math.ceil(a / s)), de(m * s);
          }, c = s, d, p = Number.MAX_VALUE, u;
          if (i) {
            if (!t.staggerLines && (_(o) ? u = [o] : r < t.autoRotationLimit && (u = t.autoRotation)), u) {
              let g, m;
              for (let x of u) (x === o || x && x >= -90 && x <= 90) && (m = (g = l(Math.abs(n / Math.sin(Hh * x)))) + Math.abs(x / 360)) < p && (p = m, d = x, c = g);
            }
          } else c = l(0.75 * n);
          return this.autoRotation = u, this.labelRotation = J(d, _(o) ? o : 0), t.step ? s : c;
        }
        getSlotWidth(t) {
          let e = this.chart, i = this.horiz, s = this.options.labels, r = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), o = e.margin[3];
          if (t && _(t.slotWidth)) return t.slotWidth;
          if (i && s.step < 2 && !this.isRadial) return s.rotation ? 0 : (this.staggerLines || 1) * this.len / r;
          if (!i) {
            let n = s.style.width;
            if (n !== void 0) return parseInt(String(n), 10);
            if (o) return o - e.spacing[3];
          }
          return 0.33 * e.chartWidth;
        }
        renderUnsquish() {
          let t = this.chart, e = t.renderer, i = this.tickPositions, s = this.ticks, r = this.options.labels, o = r.style, n = this.horiz, a = this.getSlotWidth(), l = Math.max(1, Math.round(a - (n ? 2 * (r.padding || 0) : r.distance || 0))), c = {}, d = this.labelMetrics(), p = o.lineClamp, u, g = p ?? (Math.floor(this.len / (i.length * d.h)) || 1), m = 0;
          Io(r.rotation) || (c.rotation = r.rotation || 0), i.forEach(function(x) {
            var y;
            let f = s[x];
            f.movedLabel && f.replaceMovedLabel();
            let b = ((y = f.label) == null ? void 0 : y.textPxLength) || 0;
            b > m && (m = b);
          }), this.maxLabelLength = m, this.autoRotation ? m > l && m > d.h ? c.rotation = this.labelRotation : this.labelRotation = 0 : a && (u = l), c.rotation && (u = m > 0.5 * t.chartHeight ? 0.33 * t.chartHeight : m, p || (g = 1)), this.labelAlign = r.align || this.autoLabelAlign(this.labelRotation), this.labelAlign && (c.align = this.labelAlign), i.forEach(function(x) {
            let f = s[x], b = f && f.label, y = o.width, v = {};
            b && (b.attr(c), f.shortenLabel ? f.shortenLabel() : u && !y && o.whiteSpace !== "nowrap" && (u < (b.textPxLength || 0) || b.element.tagName === "SPAN") ? b.css(rs(v, { width: `${u}px`, lineClamp: g })) : !b.styles.width || v.width || y || b.css({ width: "auto" }), f.rotation = c.rotation);
          }, this), this.tickRotCorr = e.rotCorr(d.b, this.labelRotation || 0, this.side !== 0);
        }
        hasData() {
          return this.series.some(function(t) {
            return t.hasData();
          }) || this.options.showEmpty && gt(this.min) && gt(this.max);
        }
        addTitle(t) {
          let e, i = this.chart.renderer, s = this.horiz, r = this.opposite, o = this.options.title, n = this.chart.styledMode;
          this.axisTitle || ((e = o.textAlign) || (e = (s ? { low: "left", middle: "center", high: "right" } : { low: r ? "right" : "left", middle: "center", high: r ? "left" : "right" })[o.align]), this.axisTitle = i.text(o.text || "", 0, 0, o.useHTML).attr({ zIndex: 7, rotation: o.rotation || 0, align: e }).addClass("highcharts-axis-title"), n || this.axisTitle.css(os(o.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0), n || o.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }), this.axisTitle[t ? "show" : "hide"](t);
        }
        generateTick(t) {
          let e = this.ticks;
          e[t] ? e[t].addLabel() : e[t] = new ui(this, t);
        }
        createGroups() {
          let { axisParent: t, chart: e, coll: i, options: s } = this, r = e.renderer, o = (n, a, l) => r.g(n).attr({ zIndex: l }).addClass(`highcharts-${i.toLowerCase()}${a} ` + (this.isRadial ? `highcharts-radial-axis${a} ` : "") + (s.className || "")).add(t);
          this.axisGroup || (this.gridGroup = o("grid", "-grid", s.gridZIndex), this.axisGroup = o("axis", "", s.zIndex), this.labelGroup = o("axis-labels", "-labels", s.labels.zIndex));
        }
        getOffset() {
          let t = this, { chart: e, horiz: i, options: s, side: r, ticks: o, tickPositions: n, coll: a } = t, l = e.inverted && !t.isZAxis ? [1, 0, 3, 2][r] : r, c = t.hasData(), d = s.title, p = s.labels, u = _(s.crossing), g = e.axisOffset, m = e.clipOffset, x = [-1, 1, 1, -1][r], f, b = 0, y, v = 0, w = 0, k, S;
          if (t.showAxis = f = c || s.showEmpty, t.staggerLines = t.horiz && p.staggerLines || void 0, t.createGroups(), c || t.isLinked ? (n.forEach(function(M) {
            t.generateTick(M);
          }), t.renderUnsquish(), t.reserveSpaceDefault = r === 0 || r === 2 || { 1: "left", 3: "right" }[r] === t.labelAlign, J(p.reserveSpace, !u && null, t.labelAlign === "center" || null, t.reserveSpaceDefault) && n.forEach(function(M) {
            w = Math.max(o[M].getLabelSize(), w);
          }), t.staggerLines && (w *= t.staggerLines), t.labelOffset = w * (t.opposite ? -1 : 1)) : ns(o, function(M, C) {
            M.destroy(), delete o[C];
          }), d != null && d.text && d.enabled !== !1 && (t.addTitle(f), f && !u && d.reserveSpace !== !1 && (t.titleOffset = b = t.axisTitle.getBBox()[i ? "height" : "width"], v = gt(y = d.offset) ? 0 : J(d.margin, i ? 5 : 10))), t.renderLine(), t.offset = x * J(s.offset, g[r] ? g[r] + (s.margin || 0) : 0), t.tickRotCorr = t.tickRotCorr || { x: 0, y: 0 }, S = r === 0 ? -t.labelMetrics().h : r === 2 ? t.tickRotCorr.y : 0, k = Math.abs(w) + v, w && (k -= S, k += x * (i ? J(p.y, t.tickRotCorr.y + x * p.distance) : J(p.x, x * p.distance))), t.axisTitleMargin = J(y, k), t.getMaxLabelDimensions && (t.maxLabelDimensions = t.getMaxLabelDimensions(o, n)), a !== "colorAxis" && m) {
            let M = this.tickSize("tick");
            g[r] = Math.max(g[r], (t.axisTitleMargin || 0) + b + x * t.offset, k, n && n.length && M ? M[0] + x * t.offset : 0);
            let C = !t.axisLine || s.offset ? 0 : t.axisLine.strokeWidth() / 2;
            m[l] = Math.max(m[l], C);
          }
          At(this, "afterGetOffset");
        }
        getLinePath(t) {
          let e = this.chart, i = this.opposite, s = this.offset, r = this.horiz, o = this.left + (i ? this.width : 0) + s, n = e.chartHeight - this.bottom - (i ? this.height : 0) + s;
          return i && (t *= -1), e.renderer.crispLine([["M", r ? this.left : o, r ? n : this.top], ["L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom]], t);
        }
        renderLine() {
          this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
        }
        getTitlePosition(t) {
          let e = this.horiz, i = this.left, s = this.top, r = this.len, o = this.options.title, n = e ? i : s, a = this.opposite, l = this.offset, c = o.x, d = o.y, p = this.chart.renderer.fontMetrics(t), u = t ? Math.max(t.getBBox(!1, 0).height - p.h - 1, 0) : 0, g = { low: n + (e ? 0 : r), middle: n + r / 2, high: n + (e ? r : 0) }[o.align], m = (e ? s + this.height : i) + (e ? 1 : -1) * (a ? -1 : 1) * (this.axisTitleMargin || 0) + [-u, u, p.f, -u][this.side], x = { x: e ? g + c : m + (a ? this.width : 0) + l + c, y: e ? m + d - (a ? this.height : 0) + l : g + d };
          return At(this, "afterGetTitlePosition", { titlePosition: x }), x;
        }
        renderMinorTick(t, e) {
          let i = this.minorTicks;
          i[t] || (i[t] = new ui(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1);
        }
        renderTick(t, e, i) {
          let s = this.isLinked, r = this.ticks;
          (!s || t >= this.min && t <= this.max || this.grid && this.grid.isColumn) && (r[t] || (r[t] = new ui(this, t)), i && r[t].isNew && r[t].render(e, !0, -1), r[t].render(e));
        }
        render() {
          let t, e, i = this, s = i.chart, r = i.logarithmic, o = s.renderer, n = i.options, a = i.isLinked, l = i.tickPositions, c = i.axisTitle, d = i.ticks, p = i.minorTicks, u = i.alternateBands, g = n.stackLabels, m = n.alternateGridColor, x = n.crossing, f = i.tickmarkOffset, b = i.axisLine, y = i.showAxis, v = Nh(o.globalAnimation);
          if (i.labelEdge.length = 0, i.overlap = !1, [d, p, u].forEach(function(w) {
            ns(w, function(k) {
              k.isActive = !1;
            });
          }), _(x)) {
            let w = this.isXAxis ? s.yAxis[0] : s.xAxis[0], k = [1, -1, -1, 1][this.side];
            if (w) {
              let S = w.toPixels(x, !0);
              i.horiz && (S = w.len - S), i.offset = k * S;
            }
          }
          if (i.hasData() || a) {
            let w = i.chart.hasRendered && i.old && _(i.old.min);
            i.minorTickInterval && !i.categories && i.getMinorTickPositions().forEach(function(k) {
              i.renderMinorTick(k, w);
            }), l.length && (l.forEach(function(k, S) {
              i.renderTick(k, S, w);
            }), f && (i.min === 0 || i.single) && (d[-1] || (d[-1] = new ui(i, -1, null, !0)), d[-1].render(-1))), m && l.forEach(function(k, S) {
              e = l[S + 1] !== void 0 ? l[S + 1] + f : i.max - f, S % 2 == 0 && k < i.max && e <= i.max + (s.polar ? -f : f) && (u[k] || (u[k] = new P.PlotLineOrBand(i, {})), t = k + f, u[k].options = { from: r ? r.lin2log(t) : t, to: r ? r.lin2log(e) : e, color: m, className: "highcharts-alternate-grid" }, u[k].render(), u[k].isActive = !0);
            }), i._addedPlotLB || (i._addedPlotLB = !0, (n.plotLines || []).concat(n.plotBands || []).forEach(function(k) {
              i.addPlotBandOrLine(k);
            }));
          }
          [d, p, u].forEach(function(w) {
            let k = [], S = v.duration;
            ns(w, function(M, C) {
              M.isActive || (M.render(C, !1, 0), M.isActive = !1, k.push(C));
            }), $h(function() {
              let M = k.length;
              for (; M--; ) w[k[M]] && !w[k[M]].isActive && (w[k[M]].destroy(), delete w[k[M]]);
            }, w !== u && s.hasRendered && S ? S : 0);
          }), b && (b[b.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(b.strokeWidth()) }), b.isPlaced = !0, b[y ? "show" : "hide"](y)), c && y && (c[c.isNew ? "attr" : "animate"](i.getTitlePosition(c)), c.isNew = !1), g && g.enabled && i.stacking && i.stacking.renderStackTotals(), i.old = { len: i.len, max: i.max, min: i.min, transA: i.transA, userMax: i.userMax, userMin: i.userMin }, i.isDirty = !1, At(this, "afterRender");
        }
        redraw() {
          this.visible && (this.render(), this.plotLinesAndBands.forEach(function(t) {
            t.render();
          })), this.series.forEach(function(t) {
            t.isDirty = !0;
          });
        }
        getKeepProps() {
          return this.keepProps || gi.keepProps;
        }
        destroy(t) {
          let e = this, i = e.plotLinesAndBands, s = this.eventOptions;
          if (At(this, "destroy", { keepEvents: t }), t || jh(e), [e.ticks, e.minorTicks, e.alternateBands].forEach(function(r) {
            Gh(r);
          }), i) {
            let r = i.length;
            for (; r--; ) i[r].destroy();
          }
          for (let r in ["axisLine", "axisTitle", "axisGroup", "gridGroup", "labelGroup", "cross", "scrollbar"].forEach(function(o) {
            e[o] && (e[o] = e[o].destroy());
          }), e.plotLinesAndBandsGroups) e.plotLinesAndBandsGroups[r] = e.plotLinesAndBandsGroups[r].destroy();
          ns(e, function(r, o) {
            e.getKeepProps().indexOf(o) === -1 && delete e[o];
          }), this.eventOptions = s;
        }
        drawCrosshair(t, e) {
          let i = this.crosshair, s = J(i && i.snap, !0), r = this.chart, o, n, a, l = this.cross, c;
          if (At(this, "drawCrosshair", { e: t, point: e }), t || (t = this.cross && this.cross.e), i && (gt(e) || !s) !== !1) {
            if (s ? gt(e) && (n = J(this.coll !== "colorAxis" ? e.crosshairPos : null, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), gt(n) && (c = { value: e && (this.isXAxis ? e.x : J(e.stackY, e.y)), translatedValue: n }, r.polar && rs(c, { isCrosshair: !0, chartX: t && t.chartX, chartY: t && t.chartY, point: e }), o = this.getPlotLinePath(c) || null), !gt(o)) {
              this.hideCrosshair();
              return;
            }
            a = this.categories && !this.isRadial, l || (this.cross = l = r.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (a ? "category " : "thin ") + (i.className || "")).attr({ zIndex: J(i.zIndex, 2) }).add(), !r.styledMode && (l.attr({ stroke: i.color || (a ? zt.parse("#ccd3ff").setOpacity(0.25).get() : "#cccccc"), "stroke-width": J(i.width, 1) }).css({ "pointer-events": "none" }), i.dashStyle && l.attr({ dashstyle: i.dashStyle }))), l.show().attr({ d: o }), a && !i.width && l.attr({ "stroke-width": this.transA }), this.cross.e = t;
          } else this.hideCrosshair();
          At(this, "afterDrawCrosshair", { e: t, point: e });
        }
        hideCrosshair() {
          this.cross && this.cross.hide(), At(this, "afterHideCrosshair");
        }
        update(t, e) {
          let i = this.chart;
          t = os(this.userOptions, t), this.destroy(!0), this.init(i, t), i.isDirtyBox = !0, J(e, !0) && i.redraw();
        }
        remove(t) {
          let e = this.chart, i = this.coll, s = this.series, r = s.length;
          for (; r--; ) s[r] && s[r].remove(!1);
          Oo(e.axes, this), Oo(e[i] || [], this), e.orderItems(i), this.destroy(), e.isDirtyBox = !0, J(t, !0) && e.redraw();
        }
        setTitle(t, e) {
          this.update({ title: t }, e);
        }
        setCategories(t, e) {
          this.update({ categories: t }, e);
        }
      }
      gi.keepProps = ["coll", "extKey", "hcEvents", "len", "names", "series", "userMax", "userMin"];
      let { addEvent: Vh, getMagnitude: qh, normalizeTickInterval: Kh, timeUnits: hs } = R;
      (function(h) {
        function t() {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        }
        function e() {
          if (this.type !== "datetime") {
            this.dateTime = void 0;
            return;
          }
          this.dateTime || (this.dateTime = new i(this));
        }
        h.compose = function(s) {
          return s.keepProps.includes("dateTime") || (s.keepProps.push("dateTime"), s.prototype.getTimeTicks = t, Vh(s, "afterSetType", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          normalizeTimeTickInterval(r, o) {
            let n = o || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], a = n[n.length - 1], l = hs[a[0]], c = a[1], d;
            for (d = 0; d < n.length && (l = hs[(a = n[d])[0]], c = a[1], !n[d + 1] || !(r <= (l * c[c.length - 1] + hs[n[d + 1][0]]) / 2)); d++) ;
            l === hs.year && r < 5 * l && (c = [1, 2, 5]);
            let p = Kh(r / l, c, a[0] === "year" ? Math.max(qh(r / l), 1) : 1);
            return { unitRange: l, count: p, unitName: a[0] };
          }
          getXDateFormat(r, o) {
            let { axis: n } = this, a = n.chart.time;
            return n.closestPointRange ? a.getDateFormat(n.closestPointRange, r, n.options.startOfWeek, o) || a.resolveDTLFormat(o.year).main : a.resolveDTLFormat(o.day).main;
          }
        }
        h.Additions = i;
      })(yt || (yt = {}));
      let Zh = yt, { addEvent: Bo, normalizeTickInterval: Jh, pick: Qh } = R;
      (function(h) {
        function t() {
          this.type !== "logarithmic" ? this.logarithmic = void 0 : this.logarithmic ?? (this.logarithmic = new i(this));
        }
        function e() {
          let s = this.logarithmic;
          s && (this.lin2val = function(r) {
            return s.lin2log(r);
          }, this.val2lin = function(r) {
            return s.log2lin(r);
          });
        }
        h.compose = function(s) {
          return s.keepProps.includes("logarithmic") || (s.keepProps.push("logarithmic"), Bo(s, "afterSetType", t), Bo(s, "afterInit", e)), s;
        };
        class i {
          constructor(r) {
            this.axis = r;
          }
          getLogTickPositions(r, o, n, a) {
            let l = this.axis, c = l.len, d = l.options, p = [];
            if (a || (this.minorAutoInterval = void 0), r >= 0.5) r = Math.round(r), p = l.getLinearTickPositions(r, o, n);
            else if (r >= 0.08) {
              let u, g, m, x, f, b, y, v = Math.floor(o);
              for (u = r > 0.3 ? [1, 2, 4] : r > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], g = v; g < n + 1 && !y; g++) for (m = 0, x = u.length; m < x && !y; m++) (f = this.log2lin(this.lin2log(g) * u[m])) > o && (!a || b <= n) && b !== void 0 && p.push(b), b > n && (y = !0), b = f;
            } else {
              let u = this.lin2log(o), g = this.lin2log(n), m = a ? l.getMinorTickInterval() : d.tickInterval, x = d.tickPixelInterval / (a ? 5 : 1), f = a ? c / l.tickPositions.length : c;
              r = Jh(r = Qh(m === "auto" ? null : m, this.minorAutoInterval, (g - u) * x / (f || 1))), p = l.getLinearTickPositions(r, u, g).map(this.log2lin), a || (this.minorAutoInterval = r / 5);
            }
            return a || (l.tickInterval = r), p;
          }
          lin2log(r) {
            return Math.pow(10, r);
          }
          log2lin(r) {
            return Math.log(r) / Math.LN10;
          }
        }
        h.Additions = i;
      })(Et || (Et = {}));
      let tl = Et, { erase: el, extend: il, isNumber: Ro } = R;
      (function(h) {
        let t;
        function e(l) {
          return this.addPlotBandOrLine(l, "plotBands");
        }
        function i(l, c) {
          let d = this.userOptions, p = new t(this, l);
          if (this.visible && (p = p.render()), p) {
            if (this._addedPlotLB || (this._addedPlotLB = !0, (d.plotLines || []).concat(d.plotBands || []).forEach((u) => {
              this.addPlotBandOrLine(u);
            })), c) {
              let u = d[c] || [];
              u.push(l), d[c] = u;
            }
            this.plotLinesAndBands.push(p);
          }
          return p;
        }
        function s(l) {
          return this.addPlotBandOrLine(l, "plotLines");
        }
        function r(l, c, d) {
          d = d || this.options;
          let p = this.getPlotLinePath({ value: c, force: !0, acrossPanes: d.acrossPanes }), u = [], g = this.horiz, m = !Ro(this.min) || !Ro(this.max) || l < this.min && c < this.min || l > this.max && c > this.max, x = this.getPlotLinePath({ value: l, force: !0, acrossPanes: d.acrossPanes }), f, b = 1, y;
          if (x && p) for (m && (y = x.toString() === p.toString(), b = 0), f = 0; f < x.length; f += 2) {
            let v = x[f], w = x[f + 1], k = p[f], S = p[f + 1];
            (v[0] === "M" || v[0] === "L") && (w[0] === "M" || w[0] === "L") && (k[0] === "M" || k[0] === "L") && (S[0] === "M" || S[0] === "L") && (g && k[1] === v[1] ? (k[1] += b, S[1] += b) : g || k[2] !== v[2] || (k[2] += b, S[2] += b), u.push(["M", v[1], v[2]], ["L", w[1], w[2]], ["L", S[1], S[2]], ["L", k[1], k[2]], ["Z"])), u.isFlat = y;
          }
          return u;
        }
        function o(l) {
          this.removePlotBandOrLine(l);
        }
        function n(l) {
          let c = this.plotLinesAndBands, d = this.options, p = this.userOptions;
          if (c) {
            let u = c.length;
            for (; u--; ) c[u].id === l && c[u].destroy();
            [d.plotLines || [], p.plotLines || [], d.plotBands || [], p.plotBands || []].forEach(function(g) {
              for (u = g.length; u--; ) (g[u] || {}).id === l && el(g, g[u]);
            });
          }
        }
        function a(l) {
          this.removePlotBandOrLine(l);
        }
        h.compose = function(l, c) {
          let d = c.prototype;
          return d.addPlotBand || (t = l, il(d, { addPlotBand: e, addPlotLine: s, addPlotBandOrLine: i, getPlotBandPath: r, removePlotBand: o, removePlotLine: a, removePlotBandOrLine: n })), c;
        };
      })(Ce || (Ce = {}));
      let sl = Ce, { addEvent: rl, arrayMax: zo, arrayMin: No, defined: Ee, destroyObjectProperties: ol, erase: nl, fireEvent: al, merge: Wo, objectEach: hl, pick: ll } = R;
      class ls {
        static compose(t, e) {
          return rl(t, "afterInit", function() {
            this.labelCollectors.push(() => {
              var s;
              let i = [];
              for (let r of this.axes) for (let { label: o, options: n } of r.plotLinesAndBands) o && !((s = n == null ? void 0 : n.label) != null && s.allowOverlap) && i.push(o);
              return i;
            });
          }), sl.compose(ls, e);
        }
        constructor(t, e) {
          this.axis = t, this.options = e, this.id = e.id;
        }
        render() {
          al(this, "render");
          let { axis: t, options: e } = this, { horiz: i, logarithmic: s } = t, { color: r, events: o, zIndex: n = 0 } = e, { renderer: a, time: l } = t.chart, c = {}, d = l.parse(e.to), p = l.parse(e.from), u = l.parse(e.value), g = e.borderWidth, m = e.label, { label: x, svgElem: f } = this, b = [], y, v = Ee(p) && Ee(d), w = Ee(u), k = !f, S = { class: "highcharts-plot-" + (v ? "band " : "line ") + (e.className || "") }, M = v ? "bands" : "lines";
          if (!t.chart.styledMode && (w ? (S.stroke = r || "#999999", S["stroke-width"] = ll(e.width, 1), e.dashStyle && (S.dashstyle = e.dashStyle)) : v && (S.fill = r || "#e6e9ff", g && (S.stroke = e.borderColor, S["stroke-width"] = g))), c.zIndex = n, M += "-" + n, (y = t.plotLinesAndBandsGroups[M]) || (t.plotLinesAndBandsGroups[M] = y = a.g("plot-" + M).attr(c).add()), f || (this.svgElem = f = a.path().attr(S).add(y)), Ee(u)) b = t.getPlotLinePath({ value: (s == null ? void 0 : s.log2lin(u)) ?? u, lineWidth: f.strokeWidth(), acrossPanes: e.acrossPanes });
          else {
            if (!(Ee(p) && Ee(d))) return;
            b = t.getPlotBandPath((s == null ? void 0 : s.log2lin(p)) ?? p, (s == null ? void 0 : s.log2lin(d)) ?? d, e);
          }
          return !this.eventsAdded && o && (hl(o, (C, L) => {
            f == null || f.on(L, (E) => {
              o[L].apply(this, [E]);
            });
          }), this.eventsAdded = !0), (k || !f.d) && (b != null && b.length) ? f.attr({ d: b }) : f && (b ? (f.show(), f.animate({ d: b })) : f.d && (f.hide(), x && (this.label = x = x.destroy()))), m && (Ee(m.text) || Ee(m.formatter)) && (b != null && b.length) && t.width > 0 && t.height > 0 && !b.isFlat ? (m = Wo({ align: i && v ? "center" : void 0, x: i ? !v && 4 : 10, verticalAlign: !i && v ? "middle" : void 0, y: i ? v ? 16 : 10 : v ? 6 : -4, rotation: i && !v ? 90 : 0, ...v ? { inside: !0 } : {} }, m), this.renderLabel(m, b, v, n)) : x && x.hide(), this;
        }
        renderLabel(t, e, i, s) {
          var g;
          let r = this.axis, o = r.chart.renderer, n = t.inside, a = this.label;
          a || (this.label = a = o.text(this.getLabelText(t), 0, 0, t.useHTML).attr({ align: t.textAlign || t.align, rotation: t.rotation, class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || ""), zIndex: s }), r.chart.styledMode || a.css(Wo({ fontSize: "0.8em", textOverflow: i && !n ? "" : "ellipsis" }, t.style)), a.add());
          let l = e.xBounds || [e[0][1], e[1][1], i ? e[2][1] : e[0][1]], c = e.yBounds || [e[0][2], e[1][2], i ? e[2][2] : e[0][2]], d = No(l), p = No(c), u = zo(l) - d;
          a.align(t, !1, { x: d, y: p, width: u, height: zo(c) - p }), (!a.alignValue || a.alignValue === "left" || Ee(n)) && a.css({ width: (((g = t.style) == null ? void 0 : g.width) || (i && n ? u : a.rotation === 90 ? r.height - (a.alignAttr.y - r.top) : (t.clip ? r.width : r.chart.chartWidth) - (a.alignAttr.x - r.left))) + "px" }), a.show(!0);
        }
        getLabelText(t) {
          return Ee(t.formatter) ? t.formatter.call(this) : t.text;
        }
        destroy() {
          nl(this.axis.plotLinesAndBands, this), delete this.axis, ol(this);
        }
      }
      let { animObject: dl } = $t, { format: Fo } = be, { composed: cl, dateFormats: pl, doc: Ho, isSafari: ul } = P, { distribute: gl } = Ui, { addEvent: fl, clamp: fi, css: Xo, discardElement: ml, extend: xl, fireEvent: Go, isArray: yl, isNumber: bl, isObject: vl, isString: or, merge: kl, pick: mi, pushUnique: wl, splat: nr, syncTimeout: Ml } = R;
      class ar {
        constructor(t, e, i) {
          this.allowShared = !0, this.crosshairs = [], this.distance = 0, this.isHidden = !0, this.isSticky = !1, this.options = {}, this.outside = !1, this.chart = t, this.init(t, e), this.pointer = i;
        }
        bodyFormatter(t) {
          return t.map((e) => {
            let i = e.series.tooltipOptions, s = e.formatPrefix || "point";
            return (i[s + "Formatter"] || e.tooltipFormatter).call(e, i[s + "Format"] || "");
          });
        }
        cleanSplit(t) {
          this.chart.series.forEach(function(e) {
            let i = e && e.tt;
            i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1);
          });
        }
        defaultFormatter(t) {
          let e, i = this.points || nr(this);
          return (e = (e = [t.headerFooterFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.headerFooterFormatter(i[0], !0)), e;
        }
        destroy() {
          this.label && (this.label = this.label.destroy()), this.split && (this.cleanSplit(!0), this.tt && (this.tt = this.tt.destroy())), this.renderer && (this.renderer = this.renderer.destroy(), ml(this.container)), R.clearTimeout(this.hideTimer);
        }
        getAnchor(t, e) {
          let i, { chart: s, pointer: r } = this, o = s.inverted, n = s.plotTop, a = s.plotLeft;
          if ((t = nr(t))[0].series && t[0].series.yAxis && !t[0].series.yAxis.options.reversedStacks && (t = t.slice().reverse()), this.followPointer && e) e.chartX === void 0 && (e = r.normalize(e)), i = [e.chartX - a, e.chartY - n];
          else if (t[0].tooltipPos) i = t[0].tooltipPos;
          else {
            let l = 0, c = 0;
            t.forEach(function(d) {
              let p = d.pos(!0);
              p && (l += p[0], c += p[1]);
            }), l /= t.length, c /= t.length, this.shared && t.length > 1 && e && (o ? l = e.chartX : c = e.chartY), i = [l - a, c - n];
          }
          return i.map(Math.round);
        }
        getClassName(t, e, i) {
          let s = this.options, r = t.series, o = r.options;
          return [s.className, "highcharts-label", i && "highcharts-tooltip-header", e ? "highcharts-tooltip-box" : "highcharts-tooltip", !i && "highcharts-color-" + mi(t.colorIndex, r.colorIndex), o && o.className].filter(or).join(" ");
        }
        getLabel({ anchorX: t, anchorY: e } = { anchorX: 0, anchorY: 0 }) {
          let i = this, s = this.chart.styledMode, r = this.options, o = this.split && this.allowShared, n = this.container, a = this.chart.renderer;
          if (this.label) {
            let l = !this.label.hasClass("highcharts-label");
            (!o && l || o && !l) && this.destroy();
          }
          if (!this.label) {
            if (this.outside) {
              let l = this.chart, c = l.options.chart.style, d = Ci.getRendererType();
              this.container = n = P.doc.createElement("div"), n.className = "highcharts-tooltip-container " + (l.renderTo.className.match(/(highcharts[a-zA-Z0-9-]+)\s?/gm) || ""), Xo(n, { position: "absolute", top: "1px", pointerEvents: "none", zIndex: Math.max(this.options.style.zIndex || 0, (c && c.zIndex || 0) + 3) }), this.renderer = a = new d(n, 0, 0, c, void 0, void 0, a.styledMode);
            }
            if (o ? this.label = a.g("tooltip") : (this.label = a.label("", t, e, r.shape, void 0, void 0, r.useHTML, void 0, "tooltip").attr({ padding: r.padding, r: r.borderRadius }), s || this.label.attr({ fill: r.backgroundColor, "stroke-width": r.borderWidth || 0 }).css(r.style).css({ pointerEvents: r.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none") })), i.outside) {
              let l = this.label;
              [l.xSetter, l.ySetter].forEach((c, d) => {
                l[d ? "ySetter" : "xSetter"] = (p) => {
                  c.call(l, i.distance), l[d ? "y" : "x"] = p, n && (n.style[d ? "top" : "left"] = `${p}px`);
                };
              });
            }
            this.label.attr({ zIndex: 8 }).shadow(r.shadow).add();
          }
          return n && !n.parentElement && P.doc.body.appendChild(n), this.label;
        }
        getPlayingField() {
          let { body: t, documentElement: e } = Ho, { chart: i, distance: s, outside: r } = this;
          return { width: r ? Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth) - 2 * s - 2 : i.chartWidth, height: r ? Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight) : i.chartHeight };
        }
        getPosition(t, e, i) {
          var G, Z;
          let { distance: s, chart: r, outside: o, pointer: n } = this, { inverted: a, plotLeft: l, plotTop: c, polar: d } = r, { plotX: p = 0, plotY: u = 0 } = i, g = {}, m = a && i.h || 0, { height: x, width: f } = this.getPlayingField(), b = n.getChartPosition(), y = (F) => F * b.scaleX, v = (F) => F * b.scaleY, w = (F) => {
            let K = F === "x";
            return [F, K ? f : x, K ? t : e].concat(o ? [K ? y(t) : v(e), K ? b.left - s + y(p + l) : b.top - s + v(u + c), 0, K ? f : x] : [K ? t : e, K ? p + l : u + c, K ? l : c, K ? l + r.plotWidth : c + r.plotHeight]);
          }, k = w("y"), S = w("x"), M, C = !!i.negative;
          !d && ((Z = (G = r.hoverSeries) == null ? void 0 : G.yAxis) != null && Z.reversed) && (C = !C);
          let L = !this.followPointer && mi(i.ttBelow, !d && !a === C), E = function(F, K, N, Y, $, at, ft) {
            let Q = o ? F === "y" ? v(s) : y(s) : s, et = (N - Y) / 2, ut = Y < $ - s, qt = $ + s + Y < K, Nt = $ - Q - N + et, Ut = $ + Q - et;
            if (L && qt) g[F] = Ut;
            else if (!L && ut) g[F] = Nt;
            else if (ut) g[F] = Math.min(ft - Y, Nt - m < 0 ? Nt : Nt - m);
            else {
              if (!qt) return !1;
              g[F] = Math.max(at, Ut + m + N > K ? Ut : Ut + m);
            }
          }, B = function(F, K, N, Y, $) {
            if ($ < s || $ > K - s) return !1;
            $ < N / 2 ? g[F] = 1 : $ > K - Y / 2 ? g[F] = K - Y - 2 : g[F] = $ - N / 2;
          }, O = function(F) {
            [k, S] = [S, k], M = F;
          }, D = () => {
            E.apply(0, k) !== !1 ? B.apply(0, S) !== !1 || M || (O(!0), D()) : M ? g.x = g.y = 0 : (O(!0), D());
          };
          return (a && !d || this.len > 1) && O(), D(), g;
        }
        hide(t) {
          let e = this;
          R.clearTimeout(this.hideTimer), t = mi(t, this.options.hideDelay), this.isHidden || (this.hideTimer = Ml(function() {
            let i = e.getLabel();
            e.getLabel().animate({ opacity: 0 }, { duration: t && 150, complete: () => {
              i.hide(), e.container && e.container.remove();
            } }), e.isHidden = !0;
          }, t));
        }
        init(t, e) {
          this.chart = t, this.options = e, this.crosshairs = [], this.isHidden = !0, this.split = e.split && !t.inverted && !t.polar, this.shared = e.shared || this.split, this.outside = mi(e.outside, !!(t.scrollablePixelsX || t.scrollablePixelsY));
        }
        shouldStickOnContact(t) {
          return !!(!this.followPointer && this.options.stickOnContact && (!t || this.pointer.inClass(t.target, "highcharts-tooltip")));
        }
        move(t, e, i, s) {
          let r = this, o = dl(!r.isHidden && r.options.animation), n = r.followPointer || (r.len || 0) > 1, a = { x: t, y: e };
          n || (a.anchorX = i, a.anchorY = s), o.step = () => r.drawTracker(), r.getLabel().animate(a, o);
        }
        refresh(t, e) {
          let { chart: i, options: s, pointer: r, shared: o } = this, n = nr(t), a = n[0], l = s.format, c = s.formatter || this.defaultFormatter, d = i.styledMode, p = this.allowShared;
          if (!s.enabled || !a.series) return;
          R.clearTimeout(this.hideTimer), this.allowShared = !(!yl(t) && t.series && t.series.noSharedTooltip), p = p && !this.allowShared, this.followPointer = !this.split && a.series.tooltipOptions.followPointer;
          let u = this.getAnchor(t, e), g = u[0], m = u[1];
          o && this.allowShared && (r.applyInactiveState(n), n.forEach((b) => b.setState("hover")), a.points = n), this.len = n.length;
          let x = or(l) ? Fo(l, a, i) : c.call(a, this);
          a.points = void 0;
          let f = a.series;
          if (this.distance = mi(f.tooltipOptions.distance, 16), x === !1) this.hide();
          else {
            if (this.split && this.allowShared) this.renderSplit(x, n);
            else {
              let b = g, y = m;
              if (e && r.isDirectTouch && (b = e.chartX - i.plotLeft, y = e.chartY - i.plotTop), i.polar || f.options.clip === !1 || n.some((v) => r.isDirectTouch || v.series.shouldShowTooltip(b, y))) {
                let v = this.getLabel(p && this.tt || {});
                (!s.style.width || d) && v.css({ width: (this.outside ? this.getPlayingField() : i.spacingBox).width + "px" }), v.attr({ class: this.getClassName(a), text: x && x.join ? x.join("") : x }), this.outside && v.attr({ x: fi(v.x || 0, 0, this.getPlayingField().width - (v.width || 0) - 1) }), d || v.attr({ stroke: s.borderColor || a.color || f.color || "#666666" }), this.updatePosition({ plotX: g, plotY: m, negative: a.negative, ttBelow: a.ttBelow, h: u[2] || 0 });
              } else {
                this.hide();
                return;
              }
            }
            this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1;
          }
          Go(this, "refresh");
        }
        renderSplit(t, e) {
          var K;
          let i = this, { chart: s, chart: { chartWidth: r, chartHeight: o, plotHeight: n, plotLeft: a, plotTop: l, scrollablePixelsY: c = 0, scrollablePixelsX: d, styledMode: p }, distance: u, options: g, options: { positioner: m }, pointer: x } = i, { scrollLeft: f = 0, scrollTop: b = 0 } = ((K = s.scrollablePlotArea) == null ? void 0 : K.scrollingContainer) || {}, y = i.outside && typeof d != "number" ? Ho.documentElement.getBoundingClientRect() : { left: f, right: f + r, top: b, bottom: b + o }, v = i.getLabel(), w = this.renderer || s.renderer, k = !!(s.xAxis[0] && s.xAxis[0].opposite), { left: S, top: M } = x.getChartPosition(), C = l + b, L = 0, E = n - c;
          function B(N, Y, $, at, ft = !0) {
            let Q, et;
            return $ ? (Q = k ? 0 : E, et = fi(N - at / 2, y.left, y.right - at - (i.outside ? S : 0))) : (Q = Y - C, et = fi(et = ft ? N - at - u : N + u, ft ? et : y.left, y.right)), { x: et, y: Q };
          }
          or(t) && (t = [!1, t]);
          let O = t.slice(0, e.length + 1).reduce(function(N, Y, $) {
            if (Y !== !1 && Y !== "") {
              let at = e[$ - 1] || { isHeader: !0, plotX: e[0].plotX, plotY: n, series: {} }, ft = at.isHeader, Q = ft ? i : at.series, et = Q.tt = function(Wt, Pt, Yt) {
                let qe = Wt, { isHeader: Gi, series: Bs } = Pt;
                if (!qe) {
                  let Mi = { padding: g.padding, r: g.borderRadius };
                  p || (Mi.fill = g.backgroundColor, Mi["stroke-width"] = g.borderWidth ?? 1), qe = w.label("", 0, 0, g[Gi ? "headerShape" : "shape"], void 0, void 0, g.useHTML).addClass(i.getClassName(Pt, !0, Gi)).attr(Mi).add(v);
                }
                return qe.isActive = !0, qe.attr({ text: Yt }), p || qe.css(g.style).attr({ stroke: g.borderColor || Pt.color || Bs.color || "#333333" }), qe;
              }(Q.tt, at, Y.toString()), ut = et.getBBox(), qt = ut.width + et.strokeWidth();
              ft && (L = ut.height, E += L, k && (C -= L));
              let { anchorX: Nt, anchorY: Ut } = function(Wt) {
                let Pt, Yt, { isHeader: qe, plotX: Gi = 0, plotY: Bs = 0, series: Mi } = Wt;
                if (qe) Pt = Math.max(a + Gi, a), Yt = l + n / 2;
                else {
                  let { xAxis: oa, yAxis: na } = Mi;
                  Pt = oa.pos + fi(Gi, -u, oa.len + u), Mi.shouldShowTooltip(0, na.pos - l + Bs, { ignoreX: !0 }) && (Yt = na.pos + Bs);
                }
                return { anchorX: Pt = fi(Pt, y.left - u, y.right + u), anchorY: Yt };
              }(at);
              if (typeof Ut == "number") {
                let Wt = ut.height + 1, Pt = m ? m.call(i, qt, Wt, at) : B(Nt, Ut, ft, qt);
                N.push({ align: m ? 0 : void 0, anchorX: Nt, anchorY: Ut, boxWidth: qt, point: at, rank: mi(Pt.rank, ft ? 1 : 0), size: Wt, target: Pt.y, tt: et, x: Pt.x });
              } else et.isActive = !1;
            }
            return N;
          }, []);
          !m && O.some((N) => {
            let { outside: Y } = i, $ = (Y ? S : 0) + N.anchorX;
            return $ < y.left && $ + N.boxWidth < y.right || $ < S - y.left + N.boxWidth && y.right - $ > $;
          }) && (O = O.map((N) => {
            let { x: Y, y: $ } = B(N.anchorX, N.anchorY, N.point.isHeader, N.boxWidth, !1);
            return xl(N, { target: $, x: Y });
          })), i.cleanSplit(), gl(O, E);
          let D = { left: S, right: S };
          O.forEach(function(N) {
            let { x: Y, boxWidth: $, isHeader: at } = N;
            !at && (i.outside && S + Y < D.left && (D.left = S + Y), !at && i.outside && D.left + $ > D.right && (D.right = S + Y));
          }), O.forEach(function(N) {
            let { x: Y, anchorX: $, anchorY: at, pos: ft, point: { isHeader: Q } } = N, et = { visibility: ft === void 0 ? "hidden" : "inherit", x: Y, y: (ft || 0) + C, anchorX: $, anchorY: at };
            if (i.outside && Y < $) {
              let ut = S - D.left;
              ut > 0 && (Q || (et.x = Y + ut, et.anchorX = $ + ut), Q && (et.x = (D.right - D.left) / 2, et.anchorX = $ + ut));
            }
            N.tt.attr(et);
          });
          let { container: G, outside: Z, renderer: F } = i;
          if (Z && G && F) {
            let { width: N, height: Y, x: $, y: at } = v.getBBox();
            F.setSize(N + $, Y + at, !1), G.style.left = D.left + "px", G.style.top = M + "px";
          }
          ul && v.attr({ opacity: v.opacity === 1 ? 0.999 : 1 });
        }
        drawTracker() {
          if (!this.shouldStickOnContact()) {
            this.tracker && (this.tracker = this.tracker.destroy());
            return;
          }
          let t = this.chart, e = this.label, i = this.shared ? t.hoverPoints : t.hoverPoint;
          if (!e || !i) return;
          let s = { x: 0, y: 0, width: 0, height: 0 }, r = this.getAnchor(i), o = e.getBBox();
          r[0] += t.plotLeft - (e.translateX || 0), r[1] += t.plotTop - (e.translateY || 0), s.x = Math.min(0, r[0]), s.y = Math.min(0, r[1]), s.width = r[0] < 0 ? Math.max(Math.abs(r[0]), o.width - r[0]) : Math.max(Math.abs(r[0]), o.width), s.height = r[1] < 0 ? Math.max(Math.abs(r[1]), o.height - Math.abs(r[1])) : Math.max(Math.abs(r[1]), o.height), this.tracker ? this.tracker.attr(s) : (this.tracker = e.renderer.rect(s).addClass("highcharts-tracker").add(e), t.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
        }
        styledModeFormat(t) {
          return t.replace('style="font-size: 0.8em"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"');
        }
        headerFooterFormatter(t, e) {
          let i = t.series, s = i.tooltipOptions, r = i.xAxis, o = r && r.dateTime, n = { isFooter: e, point: t }, a = s.xDateFormat || "", l = s[e ? "footerFormat" : "headerFormat"];
          return Go(this, "headerFormatter", n, function(c) {
            if (o && !a && bl(t.key) && (a = o.getXDateFormat(t.key, s.dateTimeLabelFormats)), o && a) {
              if (vl(a)) {
                let d = a;
                pl[0] = (p) => i.chart.time.dateFormat(d, p), a = "%0";
              }
              (t.tooltipDateKeys || ["key"]).forEach((d) => {
                l = l.replace(RegExp("point\\." + d + "([ \\)}])", ""), `(point.${d}:${a})$1`);
              });
            }
            i.chart.styledMode && (l = this.styledModeFormat(l)), c.text = Fo(l, t, this.chart);
          }), n.text || "";
        }
        update(t) {
          this.destroy(), this.init(this.chart, kl(!0, this.options, t));
        }
        updatePosition(t) {
          let { chart: e, container: i, distance: s, options: r, pointer: o, renderer: n } = this, { height: a = 0, width: l = 0 } = this.getLabel(), { left: c, top: d, scaleX: p, scaleY: u } = o.getChartPosition(), g = (r.positioner || this.getPosition).call(this, l, a, t), m = P.doc, x = (t.plotX || 0) + e.plotLeft, f = (t.plotY || 0) + e.plotTop, b;
          n && i && (r.positioner && (g.x += c - s, g.y += d - s), b = (r.borderWidth || 0) + 2 * s + 2, n.setSize(fi(l + b, 0, m.documentElement.clientWidth) - 1, a + b, !1), (p !== 1 || u !== 1) && (Xo(i, { transform: `scale(${p}, ${u})` }), x *= p, f *= u), x += c - g.x, f += d - g.y), this.move(Math.round(g.x), Math.round(g.y || 0), x, f);
        }
      }
      (function(h) {
        h.compose = function(t) {
          wl(cl, "Core.Tooltip") && fl(t, "afterInit", function() {
            let e = this.chart;
            e.options.tooltip && (e.tooltip = new h(e, e.options.tooltip, this));
          });
        };
      })(ar || (ar = {}));
      let _o = ar, { animObject: Sl } = $t, { defaultOptions: Cl } = ee, { format: Tl } = be, { addEvent: Al, crisp: Pl, erase: Ol, extend: ds, fireEvent: hr, getNestedProperty: Ll, isArray: El, isFunction: Il, isNumber: He, isObject: cs, merge: Yo, pick: Xe, syncTimeout: Dl, removeEvent: jo, uniqueKey: Bl } = R;
      class Bi {
        animateBeforeDestroy() {
          let t = this, e = { x: t.startXPos, opacity: 0 }, i = t.getGraphicalProps();
          i.singular.forEach(function(s) {
            t[s] = t[s].animate(s === "dataLabel" ? { x: t[s].startXPos, y: t[s].startYPos, opacity: 0 } : e);
          }), i.plural.forEach(function(s) {
            t[s].forEach(function(r) {
              r.element && r.animate(ds({ x: t.startXPos }, r.startYPos ? { x: r.startXPos, y: r.startYPos } : {}));
            });
          });
        }
        applyOptions(t, e) {
          let i = this.series, s = i.options.pointValKey || i.pointValKey;
          return ds(this, t = Bi.prototype.optionsToObject.call(this, t)), this.options = this.options ? ds(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = Bi.prototype.getNestedProperty.call(this, s)), this.selected && (this.state = "select"), "name" in this && e === void 0 && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), this.x === void 0 && i ? this.x = e ?? i.autoIncrement() : He(t.x) && i.options.relativeXValue ? this.x = i.autoIncrement(t.x) : typeof this.x == "string" && (e ?? (e = i.chart.time.parse(this.x)), He(e) && (this.x = e)), this.isNull = this.isValid && !this.isValid(), this.formatPrefix = this.isNull ? "null" : "point", this;
        }
        destroy() {
          if (!this.destroyed) {
            let t = this, e = t.series, i = e.chart, s = e.options.dataSorting, r = i.hoverPoints, o = Sl(t.series.chart.renderer.globalAnimation), n = () => {
              for (let a in (t.graphic || t.graphics || t.dataLabel || t.dataLabels) && (jo(t), t.destroyElements()), t) delete t[a];
            };
            t.legendItem && i.legend.destroyItem(t), r && (t.setState(), Ol(r, t), r.length || (i.hoverPoints = null)), t === i.hoverPoint && t.onMouseOut(), s && s.enabled ? (this.animateBeforeDestroy(), Dl(n, o.duration)) : n(), i.pointCount--;
          }
          this.destroyed = !0;
        }
        destroyElements(t) {
          let e = this, i = e.getGraphicalProps(t);
          i.singular.forEach(function(s) {
            e[s] = e[s].destroy();
          }), i.plural.forEach(function(s) {
            e[s].forEach(function(r) {
              r && r.element && r.destroy();
            }), delete e[s];
          });
        }
        firePointEvent(t, e, i) {
          let s = this, r = this.series.options;
          s.manageEvent(t), t === "click" && r.allowPointSelect && (i = function(o) {
            !s.destroyed && s.select && s.select(null, o.ctrlKey || o.metaKey || o.shiftKey);
          }), hr(s, t, e, i);
        }
        getClassName() {
          return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (this.colorIndex !== void 0 ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
        }
        getGraphicalProps(t) {
          let e, i, s = this, r = [], o = { singular: [], plural: [] };
          for ((t = t || { graphic: 1, dataLabel: 1 }).graphic && r.push("graphic", "connector"), t.dataLabel && r.push("dataLabel", "dataLabelPath", "dataLabelUpper"), i = r.length; i--; ) s[e = r[i]] && o.singular.push(e);
          return ["graphic", "dataLabel"].forEach(function(n) {
            let a = n + "s";
            t[n] && s[a] && o.plural.push(a);
          }), o;
        }
        getNestedProperty(t) {
          return t ? t.indexOf("custom.") === 0 ? Ll(t, this.options) : this[t] : void 0;
        }
        getZone() {
          let t = this.series, e = t.zones, i = t.zoneAxis || "y", s, r = 0;
          for (s = e[0]; this[i] >= s.value; ) s = e[++r];
          return this.nonZonedColor || (this.nonZonedColor = this.color), s && s.color && !this.options.color ? this.color = s.color : this.color = this.nonZonedColor, s;
        }
        hasNewShapeType() {
          return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
        }
        constructor(t, e, i) {
          this.formatPrefix = "point", this.visible = !0, this.point = this, this.series = t, this.applyOptions(e, i), this.id ?? (this.id = Bl()), this.resolveColor(), t.chart.pointCount++, hr(this, "afterInit");
        }
        isValid() {
          return (He(this.x) || this.x instanceof Date) && He(this.y);
        }
        optionsToObject(t) {
          var c;
          let e = this.series, i = e.options.keys, s = i || e.pointArrayMap || ["y"], r = s.length, o = {}, n, a = 0, l = 0;
          if (He(t) || t === null) o[s[0]] = t;
          else if (El(t)) for (!i && t.length > r && ((n = typeof t[0]) == "string" ? (c = e.xAxis) != null && c.dateTime ? o.x = e.chart.time.parse(t[0]) : o.name = t[0] : n === "number" && (o.x = t[0]), a++); l < r; ) i && t[a] === void 0 || (s[l].indexOf(".") > 0 ? Bi.prototype.setNestedProperty(o, t[a], s[l]) : o[s[l]] = t[a]), a++, l++;
          else typeof t == "object" && (o = t, t.dataLabels && (e.hasDataLabels = () => !0), t.marker && (e._hasPointMarkers = !0));
          return o;
        }
        pos(t, e = this.plotY) {
          if (!this.destroyed) {
            let { plotX: i, series: s } = this, { chart: r, xAxis: o, yAxis: n } = s, a = 0, l = 0;
            if (He(i) && He(e)) return t && (a = o ? o.pos : r.plotLeft, l = n ? n.pos : r.plotTop), r.inverted && o && n ? [n.len - e + l, o.len - i + a] : [i + a, e + l];
          }
        }
        resolveColor() {
          let t = this.series, e = t.chart.options.chart, i = t.chart.styledMode, s, r, o = e.colorCount, n;
          delete this.nonZonedColor, t.options.colorByPoint ? (i || (s = (r = t.options.colors || t.chart.options.colors)[t.colorCounter], o = r.length), n = t.colorCounter, t.colorCounter++, t.colorCounter === o && (t.colorCounter = 0)) : (i || (s = t.color), n = t.colorIndex), this.colorIndex = Xe(this.options.colorIndex, n), this.color = Xe(this.options.color, s);
        }
        setNestedProperty(t, e, i) {
          return i.split(".").reduce(function(s, r, o, n) {
            let a = n.length - 1 === o;
            return s[r] = a ? e : cs(s[r], !0) ? s[r] : {}, s[r];
          }, t), t;
        }
        shouldDraw() {
          return !this.isNull;
        }
        tooltipFormatter(t) {
          var a;
          let { chart: e, pointArrayMap: i = ["y"], tooltipOptions: s } = this.series, { valueDecimals: r = "", valuePrefix: o = "", valueSuffix: n = "" } = s;
          return e.styledMode && (t = ((a = e.tooltip) == null ? void 0 : a.styledModeFormat(t)) || t), i.forEach((l) => {
            l = "{point." + l, (o || n) && (t = t.replace(RegExp(l + "}", "g"), o + l + "}" + n)), t = t.replace(RegExp(l + "}", "g"), l + ":,." + r + "f}");
          }), Tl(t, this, e);
        }
        update(t, e, i, s) {
          let r, o = this, n = o.series, a = o.graphic, l = n.chart, c = n.options;
          function d() {
            o.applyOptions(t);
            let p = a && o.hasMockGraphic, u = o.y === null ? !p : p;
            a && u && (o.graphic = a.destroy(), delete o.hasMockGraphic), cs(t, !0) && (a && a.element && t && t.marker && t.marker.symbol !== void 0 && (o.graphic = a.destroy()), t != null && t.dataLabels && o.dataLabel && (o.dataLabel = o.dataLabel.destroy())), r = o.index;
            let g = {};
            for (let m of n.dataColumnKeys()) g[m] = o[m];
            n.dataTable.setRow(g, r), c.data[r] = cs(c.data[r], !0) || cs(t, !0) ? o.options : Xe(t, c.data[r]), n.isDirty = n.isDirtyData = !0, !n.fixedBox && n.hasCartesianSeries && (l.isDirtyBox = !0), c.legendType === "point" && (l.isDirtyLegend = !0), e && l.redraw(i);
          }
          e = Xe(e, !0), s === !1 ? d() : o.firePointEvent("update", { options: t }, d);
        }
        remove(t, e) {
          this.series.removePoint(this.series.data.indexOf(this), t, e);
        }
        select(t, e) {
          let i = this, s = i.series, r = s.chart;
          t = Xe(t, !i.selected), this.selectedStaging = t, i.firePointEvent(t ? "select" : "unselect", { accumulate: e }, function() {
            i.selected = i.options.selected = t, s.options.data[s.data.indexOf(i)] = i.options, i.setState(t && "select"), e || r.getSelectedPoints().forEach(function(o) {
              let n = o.series;
              o.selected && o !== i && (o.selected = o.options.selected = !1, n.options.data[n.data.indexOf(o)] = o.options, o.setState(r.hoverPoints && n.options.inactiveOtherPoints ? "inactive" : ""), o.firePointEvent("unselect"));
            });
          }), delete this.selectedStaging;
        }
        onMouseOver(t) {
          let { inverted: e, pointer: i } = this.series.chart;
          i && (t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e), i.runPointActions(t, this));
        }
        onMouseOut() {
          let t = this.series.chart;
          this.firePointEvent("mouseOut"), this.series.options.inactiveOtherPoints || (t.hoverPoints || []).forEach(function(e) {
            e.setState();
          }), t.hoverPoints = t.hoverPoint = null;
        }
        manageEvent(t) {
          var s, r, o, n, a, l, c;
          let e = Yo(this.series.options.point, this.options), i = (s = e.events) == null ? void 0 : s[t];
          Il(i) && (!((r = this.hcEvents) != null && r[t]) || ((n = (o = this.hcEvents) == null ? void 0 : o[t]) == null ? void 0 : n.map((d) => d.fn).indexOf(i)) === -1) ? ((a = this.importedUserEvent) == null || a.call(this), this.importedUserEvent = Al(this, t, i), this.hcEvents && (this.hcEvents[t].userEvent = !0)) : this.importedUserEvent && !i && ((l = this.hcEvents) != null && l[t]) && ((c = this.hcEvents) != null && c[t].userEvent) && (jo(this, t), delete this.hcEvents[t], Object.keys(this.hcEvents) || delete this.importedUserEvent);
        }
        setState(t, e) {
          var k;
          let i = this.series, s = this.state, r = i.options.states[t || "normal"] || {}, o = Cl.plotOptions[i.type].marker && i.options.marker, n = o && o.enabled === !1, a = o && o.states && o.states[t || "normal"] || {}, l = a.enabled === !1, c = this.marker || {}, d = i.chart, p = o && i.markerAttribs, u = i.halo, g, m, x, f = i.stateMarkerGraphic, b;
          if ((t = t || "") === this.state && !e || this.selected && t !== "select" || r.enabled === !1 || t && (l || n && a.enabled === !1) || t && c.states && c.states[t] && c.states[t].enabled === !1) return;
          if (this.state = t, p && (g = i.markerAttribs(this, t)), this.graphic && !this.hasMockGraphic) {
            if (s && this.graphic.removeClass("highcharts-point-" + s), t && this.graphic.addClass("highcharts-point-" + t), !d.styledMode) {
              m = i.pointAttribs(this, t), x = Xe(d.options.chart.animation, r.animation);
              let S = m.opacity;
              i.options.inactiveOtherPoints && He(S) && (this.dataLabels || []).forEach(function(M) {
                M && !M.hasClass("highcharts-data-label-hidden") && (M.animate({ opacity: S }, x), M.connector && M.connector.animate({ opacity: S }, x));
              }), this.graphic.animate(m, x);
            }
            g && this.graphic.animate(g, Xe(d.options.chart.animation, a.animation, o.animation)), f && f.hide();
          } else t && a && (b = c.symbol || i.symbol, f && f.currentSymbol !== b && (f = f.destroy()), g && (f ? f[e ? "animate" : "attr"]({ x: g.x, y: g.y }) : b && (i.stateMarkerGraphic = f = d.renderer.symbol(b, g.x, g.y, g.width, g.height, Yo(o, a)).add(i.markerGroup), f.currentSymbol = b)), !d.styledMode && f && this.state !== "inactive" && f.attr(i.pointAttribs(this, t))), f && (f[t && this.isInside ? "show" : "hide"](), f.element.point = this, f.addClass(this.getClassName(), !0));
          let y = r.halo, v = this.graphic || f, w = v && v.visibility || "inherit";
          y && y.size && v && w !== "hidden" && !this.isCluster ? (u || (i.halo = u = d.renderer.path().add(v.parentGroup)), u.show()[e ? "animate" : "attr"]({ d: this.haloPath(y.size) }), u.attr({ class: "highcharts-halo highcharts-color-" + Xe(this.colorIndex, i.colorIndex) + (this.className ? " " + this.className : ""), visibility: w, zIndex: -1 }), u.point = this, d.styledMode || u.attr(ds({ fill: this.color || i.color, "fill-opacity": y.opacity }, wt.filterUserAttributes(y.attributes || {})))) : (k = u == null ? void 0 : u.point) != null && k.haloPath && !u.point.destroyed && u.animate({ d: u.point.haloPath(0) }, null, u.hide), hr(this, "afterSetState", { state: t });
        }
        haloPath(t) {
          let e = this.pos();
          return e ? this.series.chart.renderer.symbols.circle(Pl(e[0], 1) - t, e[1] - t, 2 * t, 2 * t) : [];
        }
      }
      let Ge = Bi, { parse: Rl } = zt, { charts: lr, composed: zl, isTouchDevice: Nl } = P, { addEvent: ue, attr: Wl, css: dr, extend: cr, find: Uo, fireEvent: _e, isNumber: ps, isObject: us, objectEach: Fl, offset: Hl, pick: we, pushUnique: Xl, splat: $o } = R;
      class Gt {
        applyInactiveState(t) {
          let e = [], i;
          (t || []).forEach(function(s) {
            i = s.series, e.push(i), i.linkedParent && e.push(i.linkedParent), i.linkedSeries && (e = e.concat(i.linkedSeries)), i.navigatorSeries && e.push(i.navigatorSeries);
          }), this.chart.series.forEach(function(s) {
            e.indexOf(s) === -1 ? s.setState("inactive", !0) : s.options.inactiveOtherPoints && s.setAllPointsToState("inactive");
          });
        }
        destroy() {
          let t = this;
          this.eventsToUnbind.forEach((e) => e()), this.eventsToUnbind = [], !P.chartCount && (Gt.unbindDocumentMouseUp.forEach((e) => e.unbind()), Gt.unbindDocumentMouseUp.length = 0, Gt.unbindDocumentTouchEnd && (Gt.unbindDocumentTouchEnd = Gt.unbindDocumentTouchEnd())), clearInterval(t.tooltipTimeout), Fl(t, function(e, i) {
            t[i] = void 0;
          });
        }
        getSelectionMarkerAttrs(t, e) {
          let i = { args: { chartX: t, chartY: e }, attrs: {}, shapeType: "rect" };
          return _e(this, "getSelectionMarkerAttrs", i, (s) => {
            let r, { chart: o, zoomHor: n, zoomVert: a } = this, { mouseDownX: l = 0, mouseDownY: c = 0 } = o, d = s.attrs;
            d.x = o.plotLeft, d.y = o.plotTop, d.width = n ? 1 : o.plotWidth, d.height = a ? 1 : o.plotHeight, n && (r = t - l, d.width = Math.max(1, Math.abs(r)), d.x = (r > 0 ? 0 : r) + l), a && (r = e - c, d.height = Math.max(1, Math.abs(r)), d.y = (r > 0 ? 0 : r) + c);
          }), i;
        }
        drag(t) {
          let { chart: e } = this, { mouseDownX: i = 0, mouseDownY: s = 0 } = e, { panning: r, panKey: o, selectionMarkerFill: n } = e.options.chart, a = e.plotLeft, l = e.plotTop, c = e.plotWidth, d = e.plotHeight, p = us(r) ? r.enabled : r, u = o && t[`${o}Key`], g = t.chartX, m = t.chartY, x, f = this.selectionMarker;
          if ((!f || !f.touch) && (g < a ? g = a : g > a + c && (g = a + c), m < l ? m = l : m > l + d && (m = l + d), this.hasDragged = Math.sqrt(Math.pow(i - g, 2) + Math.pow(s - m, 2)), this.hasDragged > 10)) {
            x = e.isInsidePlot(i - a, s - l, { visiblePlotOnly: !0 });
            let { shapeType: b, attrs: y } = this.getSelectionMarkerAttrs(g, m);
            (e.hasCartesianSeries || e.mapView) && this.hasZoom && x && !u && !f && (this.selectionMarker = f = e.renderer[b](), f.attr({ class: "highcharts-selection-marker", zIndex: 7 }).add(), e.styledMode || f.attr({ fill: n || Rl("#334eff").setOpacity(0.25).get() })), f && f.attr(y), x && !f && p && e.pan(t, r);
          }
        }
        dragStart(t) {
          let e = this.chart;
          e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = t.chartX, e.mouseDownY = t.chartY;
        }
        getSelectionBox(t) {
          let e = { args: { marker: t }, result: t.getBBox() };
          return _e(this, "getSelectionBox", e), e.result;
        }
        drop(t) {
          let e, { chart: i, selectionMarker: s } = this;
          for (let r of i.axes) r.isPanning && (r.isPanning = !1, (r.options.startOnTick || r.options.endOnTick || r.series.some((o) => o.boosted)) && (r.forceRedraw = !0, r.setExtremes(r.userMin, r.userMax, !1), e = !0));
          if (e && i.redraw(), s && t) {
            if (this.hasDragged) {
              let r = this.getSelectionBox(s);
              i.transform({ axes: i.axes.filter((o) => o.zoomEnabled && (o.coll === "xAxis" && this.zoomX || o.coll === "yAxis" && this.zoomY)), selection: { originalEvent: t, xAxis: [], yAxis: [], ...r }, from: r });
            }
            ps(i.index) && (this.selectionMarker = s.destroy());
          }
          i && ps(i.index) && (dr(i.container, { cursor: i._cursor }), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = !1, this.hasDragged = 0, this.pinchDown = []);
        }
        findNearestKDPoint(t, e, i) {
          let s;
          return t.forEach(function(r) {
            let o = !(r.noSharedTooltip && e) && 0 > r.options.findNearestPointBy.indexOf("y"), n = r.searchPoint(i, o);
            us(n, !0) && n.series && (!us(s, !0) || function(a, l) {
              var u, g;
              let c = a.distX - l.distX, d = a.dist - l.dist, p = ((u = l.series.group) == null ? void 0 : u.zIndex) - ((g = a.series.group) == null ? void 0 : g.zIndex);
              return c !== 0 && e ? c : d !== 0 ? d : p !== 0 ? p : a.series.index > l.series.index ? -1 : 1;
            }(s, n) > 0) && (s = n);
          }), s;
        }
        getChartCoordinatesFromPoint(t, e) {
          let { xAxis: i, yAxis: s } = t.series, r = t.shapeArgs;
          if (i && s) {
            let o = t.clientX ?? t.plotX ?? 0, n = t.plotY || 0;
            return t.isNode && r && ps(r.x) && ps(r.y) && (o = r.x, n = r.y), e ? { chartX: s.len + s.pos - n, chartY: i.len + i.pos - o } : { chartX: o + i.pos, chartY: n + s.pos };
          }
          if (r && r.x && r.y) return { chartX: r.x, chartY: r.y };
        }
        getChartPosition() {
          if (this.chartPosition) return this.chartPosition;
          let { container: t } = this.chart, e = Hl(t);
          this.chartPosition = { left: e.left, top: e.top, scaleX: 1, scaleY: 1 };
          let { offsetHeight: i, offsetWidth: s } = t;
          return s > 2 && i > 2 && (this.chartPosition.scaleX = e.width / s, this.chartPosition.scaleY = e.height / i), this.chartPosition;
        }
        getCoordinates(t) {
          let e = { xAxis: [], yAxis: [] };
          for (let i of this.chart.axes) e[i.isXAxis ? "xAxis" : "yAxis"].push({ axis: i, value: i.toValue(t[i.horiz ? "chartX" : "chartY"]) });
          return e;
        }
        getHoverData(t, e, i, s, r, o) {
          let n = [], a = function(u) {
            return u.visible && !(!r && u.directTouch) && we(u.options.enableMouseTracking, !0);
          }, l = e, c, d = { chartX: o ? o.chartX : void 0, chartY: o ? o.chartY : void 0, shared: r };
          _e(this, "beforeGetHoverData", d), c = l && !l.stickyTracking ? [l] : i.filter((u) => u.stickyTracking && (d.filter || a)(u));
          let p = s && t || !o ? t : this.findNearestKDPoint(c, r, o);
          return l = p && p.series, p && (r && !l.noSharedTooltip ? (c = i.filter(function(u) {
            return d.filter ? d.filter(u) : a(u) && !u.noSharedTooltip;
          })).forEach(function(u) {
            let g = Uo(u.points, function(m) {
              return m.x === p.x && !m.isNull;
            });
            us(g) && (u.boosted && u.boost && (g = u.boost.getPoint(g)), n.push(g));
          }) : n.push(p)), _e(this, "afterGetHoverData", d = { hoverPoint: p }), { hoverPoint: d.hoverPoint, hoverSeries: l, hoverPoints: n };
        }
        getPointFromEvent(t) {
          let e = t.target, i;
          for (; e && !i; ) i = e.point, e = e.parentNode;
          return i;
        }
        onTrackerMouseOut(t) {
          let e = this.chart, i = t.relatedTarget, s = e.hoverSeries;
          this.isDirectTouch = !1, !s || !i || s.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + s.index) && this.inClass(i, "highcharts-tracker") || s.onMouseOut();
        }
        inClass(t, e) {
          let i = t, s;
          for (; i; ) {
            if (s = Wl(i, "class")) {
              if (s.indexOf(e) !== -1) return !0;
              if (s.indexOf("highcharts-container") !== -1) return !1;
            }
            i = i.parentElement;
          }
        }
        constructor(t, e) {
          var i;
          this.hasDragged = 0, this.pointerCaptureEventsToUnbind = [], this.eventsToUnbind = [], this.options = e, this.chart = t, this.runChartClick = !!((i = e.chart.events) != null && i.click), this.pinchDown = [], this.setDOMEvents(), _e(this, "afterInit");
        }
        normalize(t, e) {
          let i = t.touches, s = i ? i.length ? i.item(0) : we(i.changedTouches, t.changedTouches)[0] : t;
          e || (e = this.getChartPosition());
          let r = s.pageX - e.left, o = s.pageY - e.top;
          return cr(t, { chartX: Math.round(r /= e.scaleX), chartY: Math.round(o /= e.scaleY) });
        }
        onContainerClick(t) {
          let e = this.chart, i = e.hoverPoint, s = this.normalize(t), r = e.plotLeft, o = e.plotTop;
          !e.cancelClick && (i && this.inClass(s.target, "highcharts-tracker") ? (_e(i.series, "click", cr(s, { point: i })), e.hoverPoint && i.firePointEvent("click", s)) : (cr(s, this.getCoordinates(s)), e.isInsidePlot(s.chartX - r, s.chartY - o, { visiblePlotOnly: !0 }) && _e(e, "click", s)));
        }
        onContainerMouseDown(t) {
          var i;
          let e = (1 & (t.buttons || t.button)) == 1;
          t = this.normalize(t), P.isFirefox && t.button !== 0 && this.onContainerMouseMove(t), (t.button === void 0 || e) && (this.zoomOption(t), e && ((i = t.preventDefault) == null || i.call(t)), this.dragStart(t));
        }
        onContainerMouseLeave(t) {
          let { pointer: e } = lr[we(Gt.hoverChartIndex, -1)] || {};
          t = this.normalize(t), this.onContainerMouseMove(t), e && !this.inClass(t.relatedTarget, "highcharts-tooltip") && (e.reset(), e.chartPosition = void 0);
        }
        onContainerMouseEnter() {
          delete this.chartPosition;
        }
        onContainerMouseMove(t) {
          let e = this.chart, i = e.tooltip, s = this.normalize(t);
          this.setHoverChartIndex(t), (e.mouseIsDown === "mousedown" || this.touchSelect(s)) && this.drag(s), !e.openMenu && (this.inClass(s.target, "highcharts-tracker") || e.isInsidePlot(s.chartX - e.plotLeft, s.chartY - e.plotTop, { visiblePlotOnly: !0 })) && !(i && i.shouldStickOnContact(s)) && (this.inClass(s.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(s));
        }
        onDocumentTouchEnd(t) {
          this.onDocumentMouseUp(t);
        }
        onContainerTouchMove(t) {
          this.touchSelect(t) ? this.onContainerMouseMove(t) : this.touch(t);
        }
        onContainerTouchStart(t) {
          this.touchSelect(t) ? this.onContainerMouseDown(t) : (this.zoomOption(t), this.touch(t, !0));
        }
        onDocumentMouseMove(t) {
          let e = this.chart, i = e.tooltip, s = this.chartPosition, r = this.normalize(t, s);
          !s || e.isInsidePlot(r.chartX - e.plotLeft, r.chartY - e.plotTop, { visiblePlotOnly: !0 }) || i && i.shouldStickOnContact(r) || r.target !== e.container.ownerDocument && this.inClass(r.target, "highcharts-tracker") || this.reset();
        }
        onDocumentMouseUp(t) {
          var e, i;
          (i = (e = lr[we(Gt.hoverChartIndex, -1)]) == null ? void 0 : e.pointer) == null || i.drop(t);
        }
        pinch(t) {
          let e = this, { chart: i, hasZoom: s, lastTouches: r } = e, o = [].map.call(t.touches || [], (d) => e.normalize(d)), n = o.length, a = n === 1 && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick), l = i.tooltip, c = n === 1 && we(l == null ? void 0 : l.options.followTouchMove, !0);
          n > 1 ? e.initiated = !0 : c && (e.initiated = !1), s && e.initiated && !a && t.cancelable !== !1 && t.preventDefault(), t.type === "touchstart" ? (e.pinchDown = o, e.res = !0, i.mouseDownX = t.chartX) : c ? this.runPointActions(e.normalize(t)) : r && (_e(i, "touchpan", { originalEvent: t, touches: o }, () => {
            let d = (p) => {
              let u = p[0], g = p[1] || u;
              return { x: u.chartX, y: u.chartY, width: g.chartX - u.chartX, height: g.chartY - u.chartY };
            };
            i.transform({ axes: i.axes.filter((p) => p.zoomEnabled && (this.zoomHor && p.horiz || this.zoomVert && !p.horiz)), to: d(o), from: d(r), trigger: t.type });
          }), e.res && (e.res = !1, this.reset(!1, 0))), e.lastTouches = o;
        }
        reset(t, e) {
          let i = this.chart, s = i.hoverSeries, r = i.hoverPoint, o = i.hoverPoints, n = i.tooltip, a = n && n.shared ? o : r;
          t && a && $o(a).forEach(function(l) {
            l.series.isCartesian && l.plotX === void 0 && (t = !1);
          }), t ? n && a && $o(a).length && (n.refresh(a), n.shared && o ? o.forEach(function(l) {
            l.setState(l.state, !0), l.series.isCartesian && (l.series.xAxis.crosshair && l.series.xAxis.drawCrosshair(null, l), l.series.yAxis.crosshair && l.series.yAxis.drawCrosshair(null, l));
          }) : r && (r.setState(r.state, !0), i.axes.forEach(function(l) {
            l.crosshair && r.series[l.coll] === l && l.drawCrosshair(null, r);
          }))) : (r && r.onMouseOut(), o && o.forEach(function(l) {
            l.setState();
          }), s && s.onMouseOut(), n && n.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), i.axes.forEach(function(l) {
            l.hideCrosshair();
          }), i.hoverPoints = i.hoverPoint = void 0);
        }
        runPointActions(t, e, i) {
          let s = this.chart, r = s.series, o = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0, n = !!o && o.shared, a = e || s.hoverPoint, l = a && a.series || s.hoverSeries, c = (!t || t.type !== "touchmove") && (!!e || l && l.directTouch && this.isDirectTouch), d = this.getHoverData(a, l, r, c, n, t);
          a = d.hoverPoint, l = d.hoverSeries;
          let p = d.hoverPoints, u = l && l.tooltipOptions.followPointer && !l.tooltipOptions.split, g = n && l && !l.noSharedTooltip;
          if (a && (i || a !== s.hoverPoint || o && o.isHidden)) {
            if ((s.hoverPoints || []).forEach(function(m) {
              p.indexOf(m) === -1 && m.setState();
            }), s.hoverSeries !== l && l.onMouseOver(), this.applyInactiveState(p), (p || []).forEach(function(m) {
              m.setState("hover");
            }), s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"), !a.series) return;
            s.hoverPoints = p, s.hoverPoint = a, a.firePointEvent("mouseOver", void 0, () => {
              o && a && o.refresh(g ? p : a, t);
            });
          } else if (u && o && !o.isHidden) {
            let m = o.getAnchor([{}], t);
            s.isInsidePlot(m[0], m[1], { visiblePlotOnly: !0 }) && o.updatePosition({ plotX: m[0], plotY: m[1] });
          }
          this.unDocMouseMove || (this.unDocMouseMove = ue(s.container.ownerDocument, "mousemove", (m) => {
            var x, f;
            return (f = (x = lr[Gt.hoverChartIndex ?? -1]) == null ? void 0 : x.pointer) == null ? void 0 : f.onDocumentMouseMove(m);
          }), this.eventsToUnbind.push(this.unDocMouseMove)), s.axes.forEach(function(m) {
            let x, f = we((m.crosshair || {}).snap, !0);
            !f || (x = s.hoverPoint) && x.series[m.coll] === m || (x = Uo(p, (b) => b.series && b.series[m.coll] === m)), x || !f ? m.drawCrosshair(t, x) : m.hideCrosshair();
          });
        }
        setDOMEvents() {
          let t = this.chart.container, e = t.ownerDocument;
          t.onmousedown = this.onContainerMouseDown.bind(this), t.onmousemove = this.onContainerMouseMove.bind(this), t.onclick = this.onContainerClick.bind(this), this.eventsToUnbind.push(ue(t, "mouseenter", this.onContainerMouseEnter.bind(this)), ue(t, "mouseleave", this.onContainerMouseLeave.bind(this))), Gt.unbindDocumentMouseUp.some((s) => s.doc === e) || Gt.unbindDocumentMouseUp.push({ doc: e, unbind: ue(e, "mouseup", this.onDocumentMouseUp.bind(this)) });
          let i = this.chart.renderTo.parentElement;
          for (; i && i.tagName !== "BODY"; ) this.eventsToUnbind.push(ue(i, "scroll", () => {
            delete this.chartPosition;
          })), i = i.parentElement;
          this.eventsToUnbind.push(ue(t, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 }), ue(t, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), Gt.unbindDocumentTouchEnd || (Gt.unbindDocumentTouchEnd = ue(e, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })), this.setPointerCapture(), ue(this.chart, "redraw", this.setPointerCapture.bind(this));
        }
        setPointerCapture() {
          var r, o;
          if (!Nl) return;
          let t = this.pointerCaptureEventsToUnbind, e = this.chart, i = e.container, s = we((r = e.options.tooltip) == null ? void 0 : r.followTouchMove, !0) && e.series.some((n) => n.options.findNearestPointBy.indexOf("y") > -1);
          !this.hasPointerCapture && s ? (t.push(ue(i, "pointerdown", (n) => {
            var a, l;
            (a = n.target) != null && a.hasPointerCapture(n.pointerId) && ((l = n.target) == null || l.releasePointerCapture(n.pointerId));
          }), ue(i, "pointermove", (n) => {
            var a, l;
            (l = (a = e.pointer) == null ? void 0 : a.getPointFromEvent(n)) == null || l.onMouseOver(n);
          })), e.styledMode || dr(i, { "touch-action": "none" }), i.className += " highcharts-no-touch-action", this.hasPointerCapture = !0) : this.hasPointerCapture && !s && (t.forEach((n) => n()), t.length = 0, e.styledMode || dr(i, { "touch-action": we((o = e.options.chart.style) == null ? void 0 : o["touch-action"], "manipulation") }), i.className = i.className.replace(" highcharts-no-touch-action", ""), this.hasPointerCapture = !1);
        }
        setHoverChartIndex(t) {
          var s;
          let e = this.chart, i = P.charts[we(Gt.hoverChartIndex, -1)];
          if (i && i !== e) {
            let r = { relatedTarget: e.container };
            t && !(t != null && t.relatedTarget) && (t = { ...r, ...t }), (s = i.pointer) == null || s.onContainerMouseLeave(t || r);
          }
          i && i.mouseIsDown || (Gt.hoverChartIndex = e.index);
        }
        touch(t, e) {
          let i, { chart: s, pinchDown: r = [] } = this;
          this.setHoverChartIndex(), (t = this.normalize(t)).touches.length === 1 ? s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop, { visiblePlotOnly: !0 }) && !s.openMenu ? (e && this.runPointActions(t), t.type === "touchmove" && (i = !!r[0] && Math.pow(r[0].chartX - t.chartX, 2) + Math.pow(r[0].chartY - t.chartY, 2) >= 16), we(i, !0) && this.pinch(t)) : e && this.reset() : t.touches.length === 2 && this.pinch(t);
        }
        touchSelect(t) {
          return !!(this.chart.zooming.singleTouch && t.touches && t.touches.length === 1);
        }
        zoomOption(t) {
          let e = this.chart, i = e.inverted, s = e.zooming.type || "", r, o;
          /touch/.test(t.type) && (s = we(e.zooming.pinchType, s)), this.zoomX = r = /x/.test(s), this.zoomY = o = /y/.test(s), this.zoomHor = r && !i || o && i, this.zoomVert = o && !i || r && i, this.hasZoom = r || o;
        }
      }
      Gt.unbindDocumentMouseUp = [], function(h) {
        h.compose = function(t) {
          Xl(zl, "Core.Pointer") && ue(t, "beforeRender", function() {
            this.pointer = new h(this, this.options);
          });
        };
      }(Gt || (Gt = {}));
      let Vo = Gt, { fireEvent: qo, isArray: Gl, objectEach: gs, uniqueKey: fs } = R, ms = class {
        constructor(h = {}) {
          this.autoId = !h.id, this.columns = {}, this.id = h.id || fs(), this.modified = this, this.rowCount = 0, this.versionTag = fs();
          let t = 0;
          gs(h.columns || {}, (e, i) => {
            this.columns[i] = e.slice(), t = Math.max(t, e.length);
          }), this.applyRowCount(t);
        }
        applyRowCount(h) {
          this.rowCount = h, gs(this.columns, (t) => {
            Gl(t) && (t.length = h);
          });
        }
        getColumn(h, t) {
          return this.columns[h];
        }
        getColumns(h, t) {
          return (h || Object.keys(this.columns)).reduce((e, i) => (e[i] = this.columns[i], e), {});
        }
        getRow(h, t) {
          return (t || Object.keys(this.columns)).map((e) => {
            var i;
            return (i = this.columns[e]) == null ? void 0 : i[h];
          });
        }
        setColumn(h, t = [], e = 0, i) {
          this.setColumns({ [h]: t }, e, i);
        }
        setColumns(h, t, e) {
          let i = this.rowCount;
          gs(h, (s, r) => {
            this.columns[r] = s.slice(), i = s.length;
          }), this.applyRowCount(i), e != null && e.silent || (qo(this, "afterSetColumns"), this.versionTag = fs());
        }
        setRow(h, t = this.rowCount, e, i) {
          let { columns: s } = this, r = e ? this.rowCount + 1 : t + 1;
          gs(h, (o, n) => {
            let a = s[n] || (i == null ? void 0 : i.addColumns) !== !1 && Array(r);
            a && (e ? a.splice(t, 0, o) : a[t] = o, s[n] = a);
          }), r > this.rowCount && this.applyRowCount(r), i != null && i.silent || (qo(this, "afterSetRows"), this.versionTag = fs());
        }
      }, { extend: _l, merge: Yl, pick: Ko } = R;
      (function(h) {
        function t(e, i, s) {
          var v, w;
          let r = this.legendItem = this.legendItem || {}, { chart: o, options: n } = this, { baseline: a = 0, symbolWidth: l, symbolHeight: c } = e, d = this.symbol || "circle", p = c / 2, u = o.renderer, g = r.group, m = a - Math.round((((v = e.fontMetrics) == null ? void 0 : v.b) || c) * (s ? 0.4 : 0.3)), x = {}, f, b = n.marker, y = 0;
          if (o.styledMode || (x["stroke-width"] = Math.min(n.lineWidth || 0, 24), n.dashStyle ? x.dashstyle = n.dashStyle : n.linecap === "square" || (x["stroke-linecap"] = "round")), r.line = u.path().addClass("highcharts-graph").attr(x).add(g), s && (r.area = u.path().addClass("highcharts-area").add(g)), x["stroke-linecap"] && (y = Math.min(r.line.strokeWidth(), l) / 2), l) {
            let k = [["M", y, m], ["L", l - y, m]];
            r.line.attr({ d: k }), (w = r.area) == null || w.attr({ d: [...k, ["L", l - y, a], ["L", y, a]] });
          }
          if (b && b.enabled !== !1 && l) {
            let k = Math.min(Ko(b.radius, p), p);
            d.indexOf("url") === 0 && (b = Yl(b, { width: c, height: c }), k = 0), r.symbol = f = u.symbol(d, l / 2 - k, m - k, 2 * k, 2 * k, _l({ context: "legend" }, b)).addClass("highcharts-point").add(g), f.isMarker = !0;
          }
        }
        h.areaMarker = function(e, i) {
          t.call(this, e, i, !0);
        }, h.lineMarker = t, h.rectangle = function(e, i) {
          let s = i.legendItem || {}, r = e.options, o = e.symbolHeight, n = r.squareSymbol, a = n ? o : e.symbolWidth;
          s.symbol = this.chart.renderer.rect(n ? (e.symbolWidth - o) / 2 : 0, e.baseline - o + 1, a, o, Ko(e.options.symbolRadius, o / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(s.group);
        };
      })(fe || (fe = {}));
      let Zo = fe, { defaultOptions: Jo } = ee, { extend: jl, extendClass: Ul, merge: $l } = R;
      (function(h) {
        function t(e, i) {
          let s = Jo.plotOptions || {}, r = i.defaultOptions, o = i.prototype;
          return o.type = e, o.pointClass || (o.pointClass = Ge), !h.seriesTypes[e] && (r && (s[e] = r), h.seriesTypes[e] = i, !0);
        }
        h.seriesTypes = P.seriesTypes, h.registerSeriesType = t, h.seriesType = function(e, i, s, r, o) {
          let n = Jo.plotOptions || {};
          if (i = i || "", n[e] = $l(n[i], s), delete h.seriesTypes[e], t(e, Ul(h.seriesTypes[i] || function() {
          }, r)), h.seriesTypes[e].prototype.type = e, o) {
            class a extends Ge {
            }
            jl(a.prototype, o), h.seriesTypes[e].prototype.pointClass = a;
          }
          return h.seriesTypes[e];
        };
      })(Ie || (Ie = {}));
      let Ot = Ie, { animObject: Qo, setAnimation: Vl } = $t, { defaultOptions: xs } = ee, { registerEventOptions: ql } = es, { svg: Kl, win: Zl } = P, { seriesTypes: xi } = Ot, { arrayMax: pr, arrayMin: tn, clamp: en, correctFloat: sn, crisp: Jl, defined: _t, destroyObjectProperties: Ql, diffObjects: td, erase: rn, error: ys, extend: yi, find: ed, fireEvent: Mt, getClosestDistance: id, getNestedProperty: on, insertItem: nn, isArray: an, isNumber: jt, isString: sd, merge: bi, objectEach: ur, pick: St, removeEvent: rd, syncTimeout: hn } = R;
      class vi {
        constructor() {
          this.zoneAxis = "y";
        }
        init(t, e) {
          let i;
          Mt(this, "init", { options: e }), this.dataTable ?? (this.dataTable = new ms());
          let s = t.series;
          this.eventsToUnbind = [], this.chart = t, this.options = this.setOptions(e);
          let r = this.options, o = r.visible !== !1;
          this.linkedSeries = [], this.bindAxes(), yi(this, { name: r.name, state: "", visible: o, selected: r.selected === !0 }), ql(this, r);
          let n = r.events;
          (n && n.click || r.point && r.point.events && r.point.events.click || r.allowPointSelect) && (t.runTrackerClick = !0), this.getColor(), this.getSymbol(), this.isCartesian && (t.hasCartesianSeries = !0), s.length && (i = s[s.length - 1]), this._i = St(i && i._i, -1) + 1, this.opacity = this.options.opacity, t.orderItems("series", nn(this, s)), r.dataSorting && r.dataSorting.enabled ? this.setDataSortingOptions() : this.points || this.data || this.setData(r.data, !1), Mt(this, "afterInit");
        }
        is(t) {
          return xi[t] && this instanceof xi[t];
        }
        bindAxes() {
          let t, e = this, i = e.options, s = e.chart;
          Mt(this, "bindAxes", null, function() {
            (e.axisTypes || []).forEach(function(r) {
              (s[r] || []).forEach(function(o) {
                t = o.options, (St(i[r], 0) === o.index || i[r] !== void 0 && i[r] === t.id) && (nn(e, o.series), e[r] = o, o.isDirty = !0);
              }), e[r] || e.optionalAxis === r || ys(18, !0, s);
            });
          }), Mt(this, "afterBindAxes");
        }
        hasData() {
          return this.visible && this.dataMax !== void 0 && this.dataMin !== void 0 || this.visible && this.dataTable.rowCount > 0;
        }
        hasMarkerChanged(t, e) {
          let i = t.marker, s = e.marker || {};
          return i && (s.enabled && !i.enabled || s.symbol !== i.symbol || s.height !== i.height || s.width !== i.width);
        }
        autoIncrement(t) {
          let e, i = this.options, { pointIntervalUnit: s, relativeXValue: r } = this.options, o = this.chart.time, n = this.xIncrement ?? o.parse(i.pointStart) ?? 0;
          if (this.pointInterval = e = St(this.pointInterval, i.pointInterval, 1), r && jt(t) && (e *= t), s) {
            let a = o.toParts(n);
            s === "day" ? a[2] += e : s === "month" ? a[1] += e : s === "year" && (a[0] += e), e = o.makeTime.apply(o, a) - n;
          }
          return r && jt(t) ? n + e : (this.xIncrement = n + e, n);
        }
        setDataSortingOptions() {
          let t = this.options;
          yi(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }), _t(t.pointRange) || (t.pointRange = 1);
        }
        setOptions(t) {
          var x, f;
          let e, i = this.chart, s = i.options.plotOptions, r = i.userOptions || {}, o = bi(t), n = i.styledMode, a = { plotOptions: s, userOptions: o };
          Mt(this, "setOptions", a);
          let l = a.plotOptions[this.type], c = r.plotOptions || {}, d = c.series || {}, p = xs.plotOptions[this.type] || {}, u = c[this.type] || {};
          this.userOptions = a.userOptions;
          let g = bi(l, s.series, u, o);
          this.tooltipOptions = bi(xs.tooltip, (x = xs.plotOptions.series) == null ? void 0 : x.tooltip, p == null ? void 0 : p.tooltip, i.userOptions.tooltip, (f = c.series) == null ? void 0 : f.tooltip, u.tooltip, o.tooltip), this.stickyTracking = St(o.stickyTracking, u.stickyTracking, d.stickyTracking, !!this.tooltipOptions.shared && !this.noSharedTooltip || g.stickyTracking), l.marker === null && delete g.marker, this.zoneAxis = g.zoneAxis || "y";
          let m = this.zones = (g.zones || []).map((b) => ({ ...b }));
          return (g.negativeColor || g.negativeFillColor) && !g.zones && (e = { value: g[this.zoneAxis + "Threshold"] || g.threshold || 0, className: "highcharts-negative" }, n || (e.color = g.negativeColor, e.fillColor = g.negativeFillColor), m.push(e)), m.length && _t(m[m.length - 1].value) && m.push(n ? {} : { color: this.color, fillColor: this.fillColor }), Mt(this, "afterSetOptions", { options: g }), g;
        }
        getName() {
          return St(this.options.name, "Series " + (this.index + 1));
        }
        getCyclic(t, e, i) {
          let s, r, o = this.chart, n = `${t}Index`, a = `${t}Counter`, l = (i == null ? void 0 : i.length) || o.options.chart.colorCount;
          !e && (_t(r = St(t === "color" ? this.options.colorIndex : void 0, this[n])) ? s = r : (o.series.length || (o[a] = 0), s = o[a] % l, o[a] += 1), i && (e = i[s])), s !== void 0 && (this[n] = s), this[t] = e;
        }
        getColor() {
          this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || xs.plotOptions[this.type].color, this.chart.options.colors);
        }
        getPointsCollection() {
          return (this.hasGroupedData ? this.points : this.data) || [];
        }
        getSymbol() {
          let t = this.options.marker;
          this.getCyclic("symbol", t.symbol, this.chart.options.symbols);
        }
        getColumn(t, e) {
          return (e ? this.dataTable.modified : this.dataTable).getColumn(t, !0) || [];
        }
        findPointIndex(t, e) {
          let i, s, r, o = t.id, n = t.x, a = this.points, l = this.options.dataSorting;
          if (o) {
            let c = this.chart.get(o);
            c instanceof Ge && (i = c);
          } else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
            let c = (d) => !d.touched && d.index === t.index;
            if (l && l.matchByName ? c = (d) => !d.touched && d.name === t.name : this.options.relativeXValue && (c = (d) => !d.touched && d.options.x === t.x), !(i = ed(a, c))) return;
          }
          return i && (r = i && i.index) !== void 0 && (s = !0), r === void 0 && jt(n) && (r = this.getColumn("x").indexOf(n, e)), r !== -1 && r !== void 0 && this.cropped && (r = r >= this.cropStart ? r - this.cropStart : r), !s && jt(r) && a[r] && a[r].touched && (r = void 0), r;
        }
        updateData(t, e) {
          let i = this.options, s = i.dataSorting, r = this.points, o = [], n = this.requireSorting, a = t.length === r.length, l, c, d, p, u = !0;
          if (this.xIncrement = null, t.forEach(function(m, x) {
            let f, b = _t(m) && this.pointClass.prototype.optionsToObject.call({ series: this }, m) || {}, y = b.x;
            b.id || jt(y) ? ((f = this.findPointIndex(b, p)) === -1 || f === void 0 ? o.push(m) : r[f] && m !== i.data[f] ? (r[f].update(m, !1, null, !1), r[f].touched = !0, n && (p = f + 1)) : r[f] && (r[f].touched = !0), (!a || x !== f || s && s.enabled || this.hasDerivedData) && (l = !0)) : o.push(m);
          }, this), l) for (c = r.length; c--; ) (d = r[c]) && !d.touched && d.remove && d.remove(!1, e);
          else !a || s && s.enabled ? u = !1 : (t.forEach(function(m, x) {
            m === r[x].y || r[x].destroyed || r[x].update(m, !1, null, !1);
          }), o.length = 0);
          if (r.forEach(function(m) {
            m && (m.touched = !1);
          }), !u) return !1;
          o.forEach(function(m) {
            this.addPoint(m, !1, null, null, !1);
          }, this);
          let g = this.getColumn("x");
          return this.xIncrement === null && g.length && (this.xIncrement = pr(g), this.autoIncrement()), !0;
        }
        dataColumnKeys() {
          return ["x", ...this.pointArrayMap || ["y"]];
        }
        setData(t, e = !0, i, s) {
          var S, M;
          let r = this.points, o = r && r.length || 0, n = this.options, a = this.chart, l = n.dataSorting, c = this.xAxis, d = n.turboThreshold, p = this.dataTable, u = this.dataColumnKeys(), g = this.pointValKey || "y", m = (this.pointArrayMap || []).length, x = n.keys, f, b, y = 0, v = 1, w;
          a.options.chart.allowMutatingData || (n.data && delete this.options.data, this.userOptions.data && delete this.userOptions.data, w = bi(!0, t));
          let k = (t = w || t || []).length;
          if (l && l.enabled && (t = this.sortData(t)), a.options.chart.allowMutatingData && s !== !1 && k && o && !this.cropped && !this.hasGroupedData && this.visible && !this.boosted && (b = this.updateData(t, i)), !b) {
            this.xIncrement = null, this.colorCounter = 0;
            let C = d && k > d;
            if (C) {
              let L = this.getFirstValidPoint(t), E = this.getFirstValidPoint(t, k - 1, -1), B = (O) => !!(an(O) && (x || jt(O[0])));
              if (jt(L) && jt(E)) {
                let O = [], D = [];
                for (let G of t) O.push(this.autoIncrement()), D.push(G);
                p.setColumns({ x: O, [g]: D });
              } else if (B(L) && B(E))
                if (m) {
                  let O = L.length === m ? 1 : 0, D = Array(u.length).fill(0).map(() => []);
                  for (let G of t) {
                    O && D[0].push(this.autoIncrement());
                    for (let Z = O; Z <= m; Z++) (S = D[Z]) == null || S.push(G[Z - O]);
                  }
                  p.setColumns(u.reduce((G, Z, F) => (G[Z] = D[F], G), {}));
                } else {
                  x && (y = x.indexOf("x"), v = x.indexOf("y"), y = y >= 0 ? y : 0, v = v >= 0 ? v : 1), L.length === 1 && (v = 0);
                  let O = [], D = [];
                  if (y === v) for (let G of t) O.push(this.autoIncrement()), D.push(G[v]);
                  else for (let G of t) O.push(G[y]), D.push(G[v]);
                  p.setColumns({ x: O, [g]: D });
                }
              else C = !1;
            }
            if (!C) {
              let L = u.reduce((E, B) => (E[B] = [], E), {});
              for (f = 0; f < k; f++) {
                let E = this.pointClass.prototype.applyOptions.apply({ series: this }, [t[f]]);
                for (let B of u) L[B][f] = E[B];
              }
              p.setColumns(L);
            }
            for (sd(this.getColumn("y")[0]) && ys(14, !0, a), this.data = [], this.options.data = this.userOptions.data = t, f = o; f--; ) (M = r[f]) == null || M.destroy();
            c && (c.minRange = c.userMinRange), this.isDirty = a.isDirtyBox = !0, this.isDirtyData = !!r, i = !1;
          }
          n.legendType === "point" && (this.processData(), this.generatePoints()), e && a.redraw(i);
        }
        sortData(t) {
          let e = this, i = e.options.dataSorting.sortKey || "y", s = function(r, o) {
            return _t(o) && r.pointClass.prototype.optionsToObject.call({ series: r }, o) || {};
          };
          return t.forEach(function(r, o) {
            t[o] = s(e, r), t[o].index = o;
          }, this), t.concat().sort((r, o) => {
            let n = on(i, r), a = on(i, o);
            return a < n ? -1 : a > n ? 1 : 0;
          }).forEach(function(r, o) {
            r.x = o;
          }, this), e.linkedSeries && e.linkedSeries.forEach(function(r) {
            let o = r.options, n = o.data;
            o.dataSorting && o.dataSorting.enabled || !n || (n.forEach(function(a, l) {
              n[l] = s(r, a), t[l] && (n[l].x = t[l].x, n[l].index = l);
            }), r.setData(n, !1));
          }), t;
        }
        getProcessedData(t) {
          let e = this, { dataTable: i, isCartesian: s, options: r, xAxis: o } = e, n = r.cropThreshold, a = t || e.getExtremesFromAll, l = o == null ? void 0 : o.logarithmic, c = i.rowCount, d, p, u = 0, g, m, x, f = e.getColumn("x"), b = i, y = !1;
          return o && (m = (g = o.getExtremes()).min, x = g.max, y = !!(o.categories && !o.names.length), s && e.sorted && !a && (!n || c > n || e.forceCrop) && (f[c - 1] < m || f[0] > x ? b = new ms() : e.getColumn(e.pointValKey || "y").length && (f[0] < m || f[c - 1] > x) && (b = (d = this.cropData(i, m, x)).modified, u = d.start, p = !0))), f = b.getColumn("x") || [], { modified: b, cropped: p, cropStart: u, closestPointRange: id([l ? f.map(l.log2lin) : f], () => e.requireSorting && !y && ys(15, !1, e.chart)) };
        }
        processData(t) {
          let e = this.xAxis, i = this.dataTable;
          if (this.isCartesian && !this.isDirty && !e.isDirty && !this.yAxis.isDirty && !t) return !1;
          let s = this.getProcessedData();
          i.modified = s.modified, this.cropped = s.cropped, this.cropStart = s.cropStart, this.closestPointRange = this.basePointRange = s.closestPointRange, Mt(this, "afterProcessData");
        }
        cropData(t, e, i) {
          let s = t.getColumn("x", !0) || [], r = s.length, o = {}, n, a, l = 0, c = r;
          for (n = 0; n < r; n++) if (s[n] >= e) {
            l = Math.max(0, n - 1);
            break;
          }
          for (a = n; a < r; a++) if (s[a] > i) {
            c = a + 1;
            break;
          }
          for (let d of this.dataColumnKeys()) {
            let p = t.getColumn(d, !0);
            p && (o[d] = p.slice(l, c));
          }
          return { modified: new ms({ columns: o }), start: l, end: c };
        }
        generatePoints() {
          var w, k;
          let t = this.options, e = this.processedData || t.data, i = this.dataTable.modified, s = this.getColumn("x", !0), r = this.pointClass, o = i.rowCount, n = this.cropStart || 0, a = this.hasGroupedData, l = t.keys, c = [], d = t.dataGrouping && t.dataGrouping.groupAll ? n : 0, p = (w = this.xAxis) == null ? void 0 : w.categories, u = this.pointArrayMap || ["y"], g = this.dataColumnKeys(), m, x, f, b, y = this.data, v;
          if (!y && !a) {
            let S = [];
            S.length = (e == null ? void 0 : e.length) || 0, y = this.data = S;
          }
          for (l && a && (this.options.keys = !1), b = 0; b < o; b++) x = n + b, a ? ((f = new r(this, i.getRow(b, g) || [])).dataGroup = this.groupMap[d + b], (k = f.dataGroup) != null && k.options && (f.options = f.dataGroup.options, yi(f, f.dataGroup.options), delete f.dataLabels)) : (f = y[x], v = e ? e[x] : i.getRow(b, u), f || v === void 0 || (y[x] = f = new r(this, v, s[b]))), f && (f.index = a ? d + b : x, c[b] = f, f.category = (p == null ? void 0 : p[f.x]) ?? f.x, f.key = f.name ?? f.category);
          if (this.options.keys = l, y && (o !== (m = y.length) || a)) for (b = 0; b < m; b++) b !== n || a || (b += o), y[b] && (y[b].destroyElements(), y[b].plotX = void 0);
          this.data = y, this.points = c, Mt(this, "afterGeneratePoints");
        }
        getXExtremes(t) {
          return { min: tn(t), max: pr(t) };
        }
        getExtremes(t, e) {
          var w;
          let { xAxis: i, yAxis: s } = this, r = e || this.getExtremesFromAll || this.options.getExtremesFromAll, o = r && this.cropped ? this.dataTable : this.dataTable.modified, n = o.rowCount, a = t || this.stackedYData, l = a ? [a] : ((w = this.keysAffectYAxis || this.pointArrayMap || ["y"]) == null ? void 0 : w.map((k) => o.getColumn(k, !0) || [])) || [], c = this.getColumn("x", !0), d = [], p = this.requireSorting && !this.is("column") ? 1 : 0, u = !!s && s.positiveValuesOnly, g = r || this.cropped || !i, m, x, f, b = 0, y = 0;
          for (i && (b = (m = i.getExtremes()).min, y = m.max), f = 0; f < n; f++) if (x = c[f], g || (c[f + p] || x) >= b && (c[f - p] || x) <= y) for (let k of l) {
            let S = k[f];
            jt(S) && (S > 0 || !u) && d.push(S);
          }
          let v = { activeYData: d, dataMin: tn(d), dataMax: pr(d) };
          return Mt(this, "afterGetExtremes", { dataExtremes: v }), v;
        }
        applyExtremes() {
          let t = this.getExtremes();
          return this.dataMin = t.dataMin, this.dataMax = t.dataMax, t;
        }
        getFirstValidPoint(t, e = 0, i = 1) {
          let s = t.length, r = e;
          for (; r >= 0 && r < s; ) {
            if (_t(t[r])) return t[r];
            r += i;
          }
        }
        translate() {
          var b;
          this.generatePoints();
          let t = this.options, e = t.stacking, i = this.xAxis, s = this.enabledDataSorting, r = this.yAxis, o = this.points, n = o.length, a = this.pointPlacementToXValue(), l = !!a, c = t.threshold, d = t.startFromThreshold ? c : 0, p, u, g, m, x = Number.MAX_VALUE;
          function f(y) {
            return en(y, -1e9, 1e9);
          }
          for (p = 0; p < n; p++) {
            let y, v = o[p], w = v.x, k, S, M = v.y, C = v.low, L = e && ((b = r.stacking) == null ? void 0 : b.stacks[(this.negStacks && M < (d ? 0 : c) ? "-" : "") + this.stackKey]);
            u = i.translate(w, !1, !1, !1, !0, a), v.plotX = jt(u) ? sn(f(u)) : void 0, e && this.visible && L && L[w] && (m = this.getStackIndicator(m, w, this.index), !v.isNull && m.key && (S = (k = L[w]).points[m.key]), k && an(S) && (C = S[0], M = S[1], C === d && m.key === L[w].base && (C = St(jt(c) ? c : r.min)), r.positiveValuesOnly && _t(C) && C <= 0 && (C = void 0), v.total = v.stackTotal = St(k.total), v.percentage = _t(v.y) && k.total ? v.y / k.total * 100 : void 0, v.stackY = M, this.irregularWidths || k.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))), v.yBottom = _t(C) ? f(r.translate(C, !1, !0, !1, !0)) : void 0, this.dataModify && (M = this.dataModify.modifyValue(M, p)), jt(M) && v.plotX !== void 0 && (y = jt(y = r.translate(M, !1, !0, !1, !0)) ? f(y) : void 0), v.plotY = y, v.isInside = this.isPointInside(v), v.clientX = l ? sn(i.translate(w, !1, !1, !1, !0, a)) : u, v.negative = (v.y || 0) < (c || 0), v.isNull || v.visible === !1 || (g !== void 0 && (x = Math.min(x, Math.abs(u - g))), g = u), v.zone = this.zones.length ? v.getZone() : void 0, !v.graphic && this.group && s && (v.isNew = !0);
          }
          this.closestPointRangePx = x, Mt(this, "afterTranslate");
        }
        getValidPoints(t, e, i) {
          let s = this.chart;
          return (t || this.points || []).filter(function(r) {
            let { plotX: o, plotY: n } = r;
            return !!((i || !r.isNull && jt(n)) && (!e || s.isInsidePlot(o, n, { inverted: s.inverted }))) && r.visible !== !1;
          });
        }
        getClipBox() {
          let { chart: t, xAxis: e, yAxis: i } = this, { x: s, y: r, width: o, height: n } = bi(t.clipBox);
          return e && e.len !== t.plotSizeX && (o = e.len), i && i.len !== t.plotSizeY && (n = i.len), t.inverted && !this.invertible && ([o, n] = [n, o]), { x: s, y: r, width: o, height: n };
        }
        getSharedClipKey() {
          return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0), this.sharedClipKey;
        }
        setClip() {
          let { chart: t, group: e, markerGroup: i } = this, s = t.sharedClips, r = t.renderer, o = this.getClipBox(), n = this.getSharedClipKey(), a = s[n];
          a ? a.animate(o) : s[n] = a = r.clipRect(o), e && e.clip(this.options.clip === !1 ? void 0 : a), i && i.clip();
        }
        animate(t) {
          let { chart: e, group: i, markerGroup: s } = this, r = e.inverted, o = Qo(this.options.animation), n = [this.getSharedClipKey(), o.duration, o.easing, o.defer].join(","), a = e.sharedClips[n], l = e.sharedClips[n + "m"];
          if (t && i) {
            let c = this.getClipBox();
            if (a) a.attr("height", c.height);
            else {
              c.width = 0, r && (c.x = e.plotHeight), a = e.renderer.clipRect(c), e.sharedClips[n] = a;
              let d = { x: -99, y: -99, width: r ? e.plotWidth + 199 : 99, height: r ? 99 : e.plotHeight + 199 };
              l = e.renderer.clipRect(d), e.sharedClips[n + "m"] = l;
            }
            i.clip(a), s == null || s.clip(l);
          } else if (a && !a.hasClass("highcharts-animating")) {
            let c = this.getClipBox(), d = o.step;
            (s != null && s.element.childNodes.length || e.series.length > 1) && (o.step = function(p, u) {
              d && d.apply(u, arguments), u.prop === "width" && (l != null && l.element) && l.attr(r ? "height" : "width", p + 99);
            }), a.addClass("highcharts-animating").animate(c, o);
          }
        }
        afterAnimate() {
          this.setClip(), ur(this.chart.sharedClips, (t, e, i) => {
            t && !this.chart.container.querySelector(`[clip-path="url(#${t.id})"]`) && (t.destroy(), delete i[e]);
          }), this.finishedAnimating = !0, Mt(this, "afterAnimate");
        }
        drawPoints(t = this.points) {
          let e, i, s, r, o, n, a, l = this.chart, c = l.styledMode, { colorAxis: d, options: p } = this, u = p.marker, g = this[this.specialGroup || "markerGroup"], m = this.xAxis, x = St(u.enabled, !m || !!m.isRadial || null, this.closestPointRangePx >= u.enabledThreshold * u.radius);
          if (u.enabled !== !1 || this._hasPointMarkers) for (e = 0; e < t.length; e++) if (r = (s = (i = t[e]).graphic) ? "animate" : "attr", o = i.marker || {}, n = !!i.marker, (x && o.enabled === void 0 || o.enabled) && !i.isNull && i.visible !== !1) {
            let f = St(o.symbol, this.symbol, "rect");
            a = this.markerAttribs(i, i.selected && "select"), this.enabledDataSorting && (i.startXPos = m.reversed ? -(a.width || 0) : m.width);
            let b = i.isInside !== !1;
            if (!s && b && ((a.width || 0) > 0 || i.hasImage) && (i.graphic = s = l.renderer.symbol(f, a.x, a.y, a.width, a.height, n ? o : u).add(g), this.enabledDataSorting && l.hasRendered && (s.attr({ x: i.startXPos }), r = "animate")), s && r === "animate" && s[b ? "show" : "hide"](b).animate(a), s) {
              let y = this.pointAttribs(i, c || !i.selected ? void 0 : "select");
              c ? d && s.css({ fill: y.fill }) : s[r](y);
            }
            s && s.addClass(i.getClassName(), !0);
          } else s && (i.graphic = s.destroy());
        }
        markerAttribs(t, e) {
          let i = this.options, s = i.marker, r = t.marker || {}, o = r.symbol || s.symbol, n = {}, a, l, c = St(r.radius, s && s.radius);
          e && (a = s.states[e], c = St((l = r.states && r.states[e]) && l.radius, a && a.radius, c && c + (a && a.radiusPlus || 0))), t.hasImage = o && o.indexOf("url") === 0, t.hasImage && (c = 0);
          let d = t.pos();
          return jt(c) && d && (i.crisp && (d[0] = Jl(d[0], t.hasImage ? 0 : o === "rect" ? (s == null ? void 0 : s.lineWidth) || 0 : 1)), n.x = d[0] - c, n.y = d[1] - c), c && (n.width = n.height = 2 * c), n;
        }
        pointAttribs(t, e) {
          let i = this.options.marker, s = t && t.options, r = s && s.marker || {}, o = s && s.color, n = t && t.color, a = t && t.zone && t.zone.color, l, c, d = this.color, p, u, g = St(r.lineWidth, i.lineWidth), m = 1;
          return d = o || a || n || d, p = r.fillColor || i.fillColor || d, u = r.lineColor || i.lineColor || d, e = e || "normal", l = i.states[e] || {}, g = St((c = r.states && r.states[e] || {}).lineWidth, l.lineWidth, g + St(c.lineWidthPlus, l.lineWidthPlus, 0)), p = c.fillColor || l.fillColor || p, { stroke: u = c.lineColor || l.lineColor || u, "stroke-width": g, fill: p, opacity: m = St(c.opacity, l.opacity, m) };
        }
        destroy(t) {
          let e, i, s, r = this, o = r.chart, n = /AppleWebKit\/533/.test(Zl.navigator.userAgent), a = r.data || [];
          for (Mt(r, "destroy", { keepEventsForUpdate: t }), this.removeEvents(t), (r.axisTypes || []).forEach(function(l) {
            (s = r[l]) && s.series && (rn(s.series, r), s.isDirty = s.forceRedraw = !0);
          }), r.legendItem && r.chart.legend.destroyItem(r), e = a.length; e--; ) (i = a[e]) && i.destroy && i.destroy();
          for (let l of r.zones) Ql(l, void 0, !0);
          R.clearTimeout(r.animationTimeout), ur(r, function(l, c) {
            l instanceof Le && !l.survive && l[n && c === "group" ? "hide" : "destroy"]();
          }), o.hoverSeries === r && (o.hoverSeries = void 0), rn(o.series, r), o.orderItems("series"), ur(r, function(l, c) {
            t && c === "hcEvents" || delete r[c];
          });
        }
        applyZones() {
          let { area: t, chart: e, graph: i, zones: s, points: r, xAxis: o, yAxis: n, zoneAxis: a } = this, { inverted: l, renderer: c } = e, d = this[`${a}Axis`], { isXAxis: p, len: u = 0, minPointOffset: g = 0 } = d || {}, m = ((i == null ? void 0 : i.strokeWidth()) || 0) / 2 + 1, x = (f, b = 0, y = 0) => {
            l && (y = u - y);
            let { translated: v = 0, lineClip: w } = f, k = y - v;
            w == null || w.push(["L", b, Math.abs(k) < m ? y - m * (k <= 0 ? -1 : 1) : v]);
          };
          if (s.length && (i || t) && d && jt(d.min)) {
            let f = d.getExtremes().max + g, b = (w) => {
              w.forEach((k, S) => {
                (k[0] === "M" || k[0] === "L") && (w[S] = [k[0], p ? u - k[1] : k[1], p ? k[2] : u - k[2]]);
              });
            };
            if (s.forEach((w) => {
              w.lineClip = [], w.translated = en(d.toPixels(St(w.value, f), !0) || 0, 0, u);
            }), i && !this.showLine && i.hide(), t && t.hide(), a === "y" && r.length < o.len) for (let w of r) {
              let { plotX: k, plotY: S, zone: M } = w, C = M && s[s.indexOf(M) - 1];
              M && x(M, k, S), C && x(C, k, S);
            }
            let y = [], v = d.toPixels(d.getExtremes().min - g, !0);
            s.forEach((w) => {
              var Z, F;
              let k = w.lineClip || [], S = Math.round(w.translated || 0);
              o.reversed && k.reverse();
              let { clip: M, simpleClip: C } = w, L = 0, E = 0, B = o.len, O = n.len;
              p ? (L = S, B = v) : (E = S, O = v);
              let D = [["M", L, E], ["L", B, E], ["L", B, O], ["L", L, O], ["Z"]], G = [D[0], ...k, D[1], D[2], ...y, D[3], D[4]];
              y = k.reverse(), v = S, l && (b(G), t && b(D)), M ? (M.animate({ d: G }), C == null || C.animate({ d: D })) : (M = w.clip = c.path(G), t && (C = w.simpleClip = c.path(D))), i && ((Z = w.graph) == null || Z.clip(M)), t && ((F = w.area) == null || F.clip(C));
            });
          } else this.visible && (i && i.show(), t && t.show());
        }
        plotGroup(t, e, i, s, r) {
          let o = this[t], n = !o, a = { visibility: i, zIndex: s || 0.1 };
          return _t(this.opacity) && !this.chart.styledMode && this.state !== "inactive" && (a.opacity = this.opacity), o || (this[t] = o = this.chart.renderer.g().add(r)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (_t(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (o.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0), o.attr(a)[n ? "attr" : "animate"](this.getPlotBox(e)), o;
        }
        getPlotBox(t) {
          let e = this.xAxis, i = this.yAxis, s = this.chart, r = s.inverted && !s.polar && e && this.invertible && t === "series";
          return s.inverted && (e = i, i = this.xAxis), { translateX: e ? e.left : s.plotLeft, translateY: i ? i.top : s.plotTop, rotation: r ? 90 : 0, rotationOriginX: r ? (e.len - i.len) / 2 : 0, rotationOriginY: r ? (e.len + i.len) / 2 : 0, scaleX: r ? -1 : 1, scaleY: 1 };
        }
        removeEvents(t) {
          let { eventsToUnbind: e } = this;
          t || rd(this), e.length && (e.forEach((i) => {
            i();
          }), e.length = 0);
        }
        render() {
          var c, d, p, u, g;
          let t = this, { chart: e, options: i, hasRendered: s } = t, r = Qo(i.animation), o = t.visible ? "inherit" : "hidden", n = i.zIndex, a = e.seriesGroup, l = t.finishedAnimating ? 0 : r.duration;
          Mt(this, "render"), t.plotGroup("group", "series", o, n, a), t.markerGroup = t.plotGroup("markerGroup", "markers", o, n, a), i.clip !== !1 && t.setClip(), l && ((c = t.animate) == null || c.call(t, !0)), t.drawGraph && (t.drawGraph(), t.applyZones()), t.visible && t.drawPoints(), (d = t.drawDataLabels) == null || d.call(t), (p = t.redrawPoints) == null || p.call(t), i.enableMouseTracking && ((u = t.drawTracker) == null || u.call(t)), l && ((g = t.animate) == null || g.call(t)), s || (l && r.defer && (l += r.defer), t.animationTimeout = hn(() => {
            t.afterAnimate();
          }, l || 0)), t.isDirty = !1, t.hasRendered = !0, Mt(t, "afterRender");
        }
        redraw() {
          let t = this.isDirty || this.isDirtyData;
          this.translate(), this.render(), t && delete this.kdTree;
        }
        reserveSpace() {
          return this.visible || !this.chart.options.chart.ignoreHiddenSeries;
        }
        searchPoint(t, e) {
          let { xAxis: i, yAxis: s } = this, r = this.chart.inverted;
          return this.searchKDTree({ clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos, plotY: r ? s.len - t.chartX + s.pos : t.chartY - s.pos }, e, t);
        }
        buildKDTree(t) {
          this.buildingKdTree = !0;
          let e = this, i = e.options.findNearestPointBy.indexOf("y") > -1 ? 2 : 1;
          delete e.kdTree, hn(function() {
            e.kdTree = function s(r, o, n) {
              let a, l, c = r == null ? void 0 : r.length;
              if (c) return a = e.kdAxisArray[o % n], r.sort((d, p) => (d[a] || 0) - (p[a] || 0)), { point: r[l = Math.floor(c / 2)], left: s(r.slice(0, l), o + 1, n), right: s(r.slice(l + 1), o + 1, n) };
            }(e.getValidPoints(void 0, !e.directTouch), i, i), e.buildingKdTree = !1;
          }, e.options.kdNow || (t == null ? void 0 : t.type) === "touchstart" ? 0 : 1);
        }
        searchKDTree(t, e, i) {
          let s = this, [r, o] = this.kdAxisArray, n = e ? "distX" : "dist", a = (s.options.findNearestPointBy || "").indexOf("y") > -1 ? 2 : 1, l = !!s.isBubble;
          if (this.kdTree || this.buildingKdTree || this.buildKDTree(i), this.kdTree) return function c(d, p, u, g) {
            var S;
            let m = p.point, x = s.kdAxisArray[u % g], f, b, y = m;
            (function(M, C) {
              var F;
              let L = M[r], E = C[r], B = _t(L) && _t(E) ? L - E : null, O = M[o], D = C[o], G = _t(O) && _t(D) ? O - D : 0, Z = l && ((F = C.marker) == null ? void 0 : F.radius) || 0;
              C.dist = Math.sqrt((B && B * B || 0) + G * G) - Z, C.distX = _t(B) ? Math.abs(B) - Z : Number.MAX_VALUE;
            })(d, m);
            let v = (d[x] || 0) - (m[x] || 0) + (l && ((S = m.marker) == null ? void 0 : S.radius) || 0), w = v < 0 ? "left" : "right", k = v < 0 ? "right" : "left";
            return p[w] && (y = (f = c(d, p[w], u + 1, g))[n] < y[n] ? f : m), p[k] && Math.sqrt(v * v) < y[n] && (y = (b = c(d, p[k], u + 1, g))[n] < y[n] ? b : y), y;
          }(t, this.kdTree, a, a);
        }
        pointPlacementToXValue() {
          let { options: t, xAxis: e } = this, i = t.pointPlacement;
          return i === "between" && (i = e.reversed ? -0.5 : 0.5), jt(i) ? i * (t.pointRange || e.pointRange) : 0;
        }
        isPointInside(t) {
          let { chart: e, xAxis: i, yAxis: s } = this, { plotX: r = -1, plotY: o = -1 } = t;
          return o >= 0 && o <= (s ? s.len : e.plotHeight) && r >= 0 && r <= (i ? i.len : e.plotWidth);
        }
        drawTracker() {
          var p;
          let t = this, e = t.options, i = e.trackByArea, s = [].concat((i ? t.areaPath : t.graphPath) || []), r = t.chart, o = r.pointer, n = r.renderer, a = ((p = r.options.tooltip) == null ? void 0 : p.snap) || 0, l = () => {
            e.enableMouseTracking && r.hoverSeries !== t && t.onMouseOver();
          }, c = "rgba(192,192,192," + (Kl ? 1e-4 : 2e-3) + ")", d = t.tracker;
          d ? d.attr({ d: s }) : t.graph && (t.tracker = d = n.path(s).attr({ visibility: t.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(i ? "highcharts-tracker-area" : "highcharts-tracker-line").add(t.group), r.styledMode || d.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: c, fill: i ? c : "none", "stroke-width": t.graph.strokeWidth() + (i ? 0 : 2 * a) }), [t.tracker, t.markerGroup, t.dataLabelsGroup].forEach((u) => {
            u && (u.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", (g) => {
              o == null || o.onTrackerMouseOut(g);
            }), e.cursor && !r.styledMode && u.css({ cursor: e.cursor }), u.on("touchstart", l));
          })), Mt(this, "afterDrawTracker");
        }
        addPoint(t, e, i, s, r) {
          let o, n, a = this.options, { chart: l, data: c, dataTable: d, xAxis: p } = this, u = p && p.hasNames && p.names, g = a.data, m = this.getColumn("x");
          e = St(e, !0);
          let x = { series: this };
          this.pointClass.prototype.applyOptions.apply(x, [t]);
          let f = x.x;
          if (n = m.length, this.requireSorting && f < m[n - 1]) for (o = !0; n && m[n - 1] > f; ) n--;
          d.setRow(x, n, !0, { addColumns: !1 }), u && x.name && (u[f] = x.name), g == null || g.splice(n, 0, t), (o || this.processedData) && (this.data.splice(n, 0, null), this.processData()), a.legendType === "point" && this.generatePoints(), i && (c[0] && c[0].remove ? c[0].remove(!1) : ([c, g, ...Object.values(d.getColumns())].filter(_t).forEach((b) => {
            b.shift();
          }), d.rowCount -= 1, Mt(d, "afterDeleteRows"))), r !== !1 && Mt(this, "addPoint", { point: x }), this.isDirty = !0, this.isDirtyData = !0, e && l.redraw(s);
        }
        removePoint(t, e, i) {
          let s = this, { chart: r, data: o, points: n, dataTable: a } = s, l = o[t], c = function() {
            [(n == null ? void 0 : n.length) === o.length ? n : void 0, o, s.options.data, ...Object.values(a.getColumns())].filter(_t).forEach((d) => {
              d.splice(t, 1);
            }), a.rowCount -= 1, Mt(a, "afterDeleteRows"), l == null || l.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && r.redraw();
          };
          Vl(i, r), e = St(e, !0), l ? l.firePointEvent("remove", null, c) : c();
        }
        remove(t, e, i, s) {
          let r = this, o = r.chart;
          function n() {
            r.destroy(s), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(s), St(t, !0) && o.redraw(e);
          }
          i !== !1 ? Mt(r, "remove", null, n) : n();
        }
        update(t, e) {
          var f, b;
          Mt(this, "update", { options: t = td(t, this.userOptions) });
          let i = this, s = i.chart, r = i.userOptions, o = i.initialType || i.type, n = s.options.plotOptions, a = xi[o].prototype, l = i.finishedAnimating && { animation: !1 }, c = {}, d, p, u = ["colorIndex", "eventOptions", "navigatorSeries", "symbolIndex", "baseSeries"], g = t.type || r.type || s.options.chart.type, m = !(this.hasDerivedData || g && g !== this.type || t.keys !== void 0 || t.pointStart !== void 0 || t.pointInterval !== void 0 || t.relativeXValue !== void 0 || t.joinBy || t.mapData || ["dataGrouping", "pointStart", "pointInterval", "pointIntervalUnit", "keys"].some((y) => i.hasOptionChanged(y)));
          g = g || o, m ? (u.push("data", "isDirtyData", "isDirtyCanvas", "points", "dataTable", "processedData", "xIncrement", "cropped", "_hasPointMarkers", "hasDataLabels", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX", "transformGroups"), t.visible !== !1 && u.push("area", "graph"), i.parallelArrays.forEach(function(y) {
            u.push(y + "Data");
          }), t.data && (t.dataSorting && yi(i.options.dataSorting, t.dataSorting), this.setData(t.data, !1))) : this.dataTable.modified = this.dataTable, t = bi(r, { index: r.index === void 0 ? i.index : r.index, pointStart: ((f = n == null ? void 0 : n.series) == null ? void 0 : f.pointStart) ?? r.pointStart ?? i.getColumn("x")[0] }, !m && { data: i.options.data }, t, l), m && t.data && (t.data = i.options.data), (u = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(u)).forEach(function(y) {
            u[y] = i[y], delete i[y];
          });
          let x = !1;
          if (xi[g]) {
            if (x = g !== i.type, i.remove(!1, !1, !1, !0), x)
              if (s.propFromSeries(), Object.setPrototypeOf) Object.setPrototypeOf(i, xi[g].prototype);
              else {
                let y = Object.hasOwnProperty.call(i, "hcEvents") && i.hcEvents;
                for (p in a) i[p] = void 0;
                yi(i, xi[g].prototype), y ? i.hcEvents = y : delete i.hcEvents;
              }
          } else ys(17, !0, s, { missingModuleFor: g });
          if (u.forEach(function(y) {
            i[y] = u[y];
          }), i.init(s, t), m && this.points) for (let y of ((d = i.options).visible === !1 ? (c.graphic = 1, c.dataLabel = 1) : (this.hasMarkerChanged(d, r) && (c.graphic = 1), (b = i.hasDataLabels) != null && b.call(i) || (c.dataLabel = 1)), this.points)) y && y.series && (y.resolveColor(), Object.keys(c).length && y.destroyElements(c), d.showInLegend === !1 && y.legendItem && s.legend.destroyItem(y));
          i.initialType = o, s.linkSeries(), s.setSortedData(), x && i.linkedSeries.length && (i.isDirtyData = !0), Mt(this, "afterUpdate"), St(e, !0) && s.redraw(!!m && void 0);
        }
        setName(t) {
          this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
        }
        hasOptionChanged(t) {
          var n, a;
          let e = this.chart, i = this.options[t], s = e.options.plotOptions, r = this.userOptions[t], o = St((n = s == null ? void 0 : s[this.type]) == null ? void 0 : n[t], (a = s == null ? void 0 : s.series) == null ? void 0 : a[t]);
          return r && !_t(o) ? i !== r : i !== St(o, i);
        }
        onMouseOver() {
          let t = this.chart, e = t.hoverSeries, i = t.pointer;
          i == null || i.setHoverChartIndex(), e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Mt(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this;
        }
        onMouseOut() {
          let t = this.options, e = this.chart, i = e.tooltip, s = e.hoverPoint;
          e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && Mt(this, "mouseOut"), i && !this.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), e.series.forEach(function(r) {
            r.setState("", !0);
          });
        }
        setState(t, e) {
          let i = this, s = i.options, r = i.graph, o = s.inactiveOtherPoints, n = s.states, a = St(n[t || "normal"] && n[t || "normal"].animation, i.chart.options.chart.animation), l = s.lineWidth, c = s.opacity;
          if (t = t || "", i.state !== t && ([i.group, i.markerGroup, i.dataLabelsGroup].forEach(function(d) {
            d && (i.state && d.removeClass("highcharts-series-" + i.state), t && d.addClass("highcharts-series-" + t));
          }), i.state = t, !i.chart.styledMode)) {
            if (n[t] && n[t].enabled === !1) return;
            if (t && (l = n[t].lineWidth || l + (n[t].lineWidthPlus || 0), c = St(n[t].opacity, c)), r && !r.dashstyle && jt(l)) for (let d of [r, ...this.zones.map((p) => p.graph)]) d == null || d.animate({ "stroke-width": l }, a);
            o || [i.group, i.markerGroup, i.dataLabelsGroup, i.labelBySeries].forEach(function(d) {
              d && d.animate({ opacity: c }, a);
            });
          }
          e && o && i.points && i.setAllPointsToState(t || void 0);
        }
        setAllPointsToState(t) {
          this.points.forEach(function(e) {
            e.setState && e.setState(t);
          });
        }
        setVisible(t, e) {
          var a;
          let i = this, s = i.chart, r = s.options.chart.ignoreHiddenSeries, o = i.visible;
          i.visible = t = i.options.visible = i.userOptions.visible = t === void 0 ? !o : t;
          let n = t ? "show" : "hide";
          ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((l) => {
            var c;
            (c = i[l]) == null || c[n]();
          }), (s.hoverSeries === i || ((a = s.hoverPoint) == null ? void 0 : a.series) === i) && i.onMouseOut(), i.legendItem && s.legend.colorizeItem(i, t), i.isDirty = !0, i.options.stacking && s.series.forEach((l) => {
            l.options.stacking && l.visible && (l.isDirty = !0);
          }), i.linkedSeries.forEach((l) => {
            l.setVisible(t, !1);
          }), r && (s.isDirtyBox = !0), Mt(i, n), e !== !1 && s.redraw();
        }
        show() {
          this.setVisible(!0);
        }
        hide() {
          this.setVisible(!1);
        }
        select(t) {
          this.selected = t = this.options.selected = t === void 0 ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Mt(this, t ? "select" : "unselect");
        }
        shouldShowTooltip(t, e, i = {}) {
          return i.series = this, i.visiblePlotOnly = !0, this.chart.isInsidePlot(t, e, i);
        }
        drawLegendSymbol(t, e) {
          var i;
          (i = Zo[this.options.legendSymbol || "rectangle"]) == null || i.call(this, t, e);
        }
      }
      vi.defaultOptions = { lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1e3 }, enableMouseTracking: !0, events: {}, marker: { enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function() {
        let { numberFormatter: h } = this.series.chart;
        return typeof this.y != "number" ? "" : h(this.y, -1);
      }, padding: 5, style: { fontSize: "0.7em", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 150 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 150 }, opacity: 0.2 } }, stickyTracking: !0, turboThreshold: 1e3, findNearestPointBy: "x" }, vi.types = Ot.seriesTypes, vi.registerType = Ot.registerSeriesType, yi(vi.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, directTouch: !1, invertible: !0, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: Ge, requireSorting: !0, sorted: !0 }), Ot.series = vi;
      let ce = vi, { animObject: od, setAnimation: nd } = $t, { registerEventOptions: ln } = es, { composed: ad, marginNames: dn } = P, { distribute: hd } = Ui, { format: ld } = be, { addEvent: bs, createElement: dd, css: cd, defined: gr, discardElement: pd, find: ud, fireEvent: Re, isNumber: cn, merge: ei, pick: ge, pushUnique: gd, relativeLength: fd, stableSort: md, syncTimeout: xd } = R;
      class fr {
        constructor(t, e) {
          this.allItems = [], this.initialItemY = 0, this.itemHeight = 0, this.itemMarginBottom = 0, this.itemMarginTop = 0, this.itemX = 0, this.itemY = 0, this.lastItemY = 0, this.lastLineHeight = 0, this.legendHeight = 0, this.legendWidth = 0, this.maxItemWidth = 0, this.maxLegendWidth = 0, this.offsetWidth = 0, this.padding = 0, this.pages = [], this.symbolHeight = 0, this.symbolWidth = 0, this.titleHeight = 0, this.totalItemWidth = 0, this.widthOption = 0, this.chart = t, this.setOptions(e), e.enabled && (this.render(), ln(this, e), bs(this.chart, "endResize", function() {
            this.legend.positionCheckboxes();
          })), bs(this.chart, "render", () => {
            this.options.enabled && this.proximate && (this.proximatePositions(), this.positionItems());
          });
        }
        setOptions(t) {
          let e = ge(t.padding, 8);
          this.options = t, this.chart.styledMode || (this.itemStyle = t.itemStyle, this.itemHiddenStyle = ei(this.itemStyle, t.itemHiddenStyle)), this.itemMarginTop = t.itemMarginTop, this.itemMarginBottom = t.itemMarginBottom, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = ge(t.symbolWidth, 16), this.pages = [], this.proximate = t.layout === "proximate" && !this.chart.inverted, this.baseline = void 0;
        }
        update(t, e) {
          let i = this.chart;
          this.setOptions(ei(!0, this.options, t)), "events" in this.options && ln(this, this.options), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, ge(e, !0) && i.redraw(), Re(this, "afterUpdate", { redraw: e });
        }
        colorizeItem(t, e) {
          var l;
          let i = t.color, { area: s, group: r, label: o, line: n, symbol: a } = t.legendItem || {};
          if ((t instanceof ce || t instanceof Ge) && (t.color = ((l = t.options) == null ? void 0 : l.legendSymbolColor) || i), r == null || r[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"), !this.chart.styledMode) {
            let { itemHiddenStyle: c = {} } = this, d = c.color, { fillColor: p, fillOpacity: u, lineColor: g, marker: m } = t.options, x = (f) => (!e && (f.fill && (f.fill = d), f.stroke && (f.stroke = d)), f);
            o == null || o.css(ei(e ? this.itemStyle : c)), n == null || n.attr(x({ stroke: g || t.color })), a && a.attr(x(m && a.isMarker ? t.pointAttribs() : { fill: t.color })), s == null || s.attr(x({ fill: p || t.color, "fill-opacity": p ? 1 : u ?? 0.75 }));
          }
          t.color = i, Re(this, "afterColorizeItem", { item: t, visible: e });
        }
        positionItems() {
          this.allItems.forEach(this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
        }
        positionItem(t) {
          let { group: e, x: i = 0, y: s = 0 } = t.legendItem || {}, r = this.options, o = r.symbolPadding, n = !r.rtl, a = t.checkbox;
          if (e && e.element) {
            let l = { translateX: n ? i : this.legendWidth - i - 2 * o - 4, translateY: s };
            e[gr(e.translateY) ? "animate" : "attr"](l, void 0, () => {
              Re(this, "afterPositionItem", { item: t });
            });
          }
          a && (a.x = i, a.y = s);
        }
        destroyItem(t) {
          let e = t.checkbox, i = t.legendItem || {};
          for (let s of ["group", "label", "line", "symbol"]) i[s] && (i[s] = i[s].destroy());
          e && pd(e), t.legendItem = void 0;
        }
        destroy() {
          for (let t of this.getAllItems()) this.destroyItem(t);
          for (let t of ["clipRect", "up", "down", "pager", "nav", "box", "title", "group"]) this[t] && (this[t] = this[t].destroy());
          this.display = null;
        }
        positionCheckboxes() {
          let t, e = this.group && this.group.alignAttr, i = this.clipHeight || this.legendHeight, s = this.titleHeight;
          e && (t = e.translateY, this.allItems.forEach(function(r) {
            let o, n = r.checkbox;
            n && (o = t + s + n.y + (this.scrollOffset || 0) + 3, cd(n, { left: e.translateX + r.checkboxOffset + n.x - 20 + "px", top: o + "px", display: this.proximate || o > t - 6 && o < t + i - 6 ? "" : "none" }));
          }, this));
        }
        renderTitle() {
          let t = this.options, e = this.padding, i = t.title, s, r = 0;
          i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, void 0, void 0, void 0, t.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(i.style), this.title.add(this.group)), i.width || this.title.css({ width: this.maxLegendWidth + "px" }), r = (s = this.title.getBBox()).height, this.offsetWidth = s.width, this.contentGroup.attr({ translateY: r })), this.titleHeight = r;
        }
        setText(t) {
          let e = this.options;
          t.legendItem.label.attr({ text: e.labelFormat ? ld(e.labelFormat, t, this.chart) : e.labelFormatter.call(t) });
        }
        renderItem(t) {
          let e = t.legendItem = t.legendItem || {}, i = this.chart, s = i.renderer, r = this.options, o = r.layout === "horizontal", n = this.symbolWidth, a = r.symbolPadding || 0, l = this.itemStyle, c = this.itemHiddenStyle, d = o ? ge(r.itemDistance, 20) : 0, p = !r.rtl, u = !t.series, g = !u && t.series.drawLegendSymbol ? t.series : t, m = g.options, x = !!this.createCheckboxForItem && m && m.showCheckbox, f = r.useHTML, b = t.options.className, y = e.label, v = n + a + d + (x ? 20 : 0);
          !y && (e.group = s.g("legend-item").addClass("highcharts-" + g.type + "-series highcharts-color-" + t.colorIndex + (b ? " " + b : "") + (u ? " highcharts-series-" + t.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), e.label = y = s.text("", p ? n + a : -a, this.baseline || 0, f), i.styledMode || y.css(ei(t.visible ? l : c)), y.attr({ align: p ? "left" : "right", zIndex: 2 }).add(e.group), !this.baseline && (this.fontMetrics = s.fontMetrics(y), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, y.attr("y", this.baseline), this.symbolHeight = ge(r.symbolHeight, this.fontMetrics.f), r.squareSymbol && (this.symbolWidth = ge(r.symbolWidth, Math.max(this.symbolHeight, 16)), v = this.symbolWidth + a + d + (x ? 20 : 0), p && y.attr("x", this.symbolWidth + a))), g.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, y, f)), x && !t.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(t), this.colorizeItem(t, t.visible), (i.styledMode || !l.width) && y.css({ width: (r.itemWidth || this.widthOption || i.spacingBox.width) - v + "px" }), this.setText(t);
          let w = y.getBBox(), k = this.fontMetrics && this.fontMetrics.h || 0;
          t.itemWidth = t.checkboxOffset = r.itemWidth || e.labelWidth || w.width + v, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(e.labelHeight || (w.height > 1.5 * k ? w.height : k));
        }
        layoutItem(t) {
          let e = this.options, i = this.padding, s = e.layout === "horizontal", r = t.itemHeight, o = this.itemMarginBottom, n = this.itemMarginTop, a = s ? ge(e.itemDistance, 20) : 0, l = this.maxLegendWidth, c = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth, d = t.legendItem || {};
          s && this.itemX - i + c > l && (this.itemX = i, this.lastLineHeight && (this.itemY += n + this.lastLineHeight + o), this.lastLineHeight = 0), this.lastItemY = n + this.itemY + o, this.lastLineHeight = Math.max(r, this.lastLineHeight), d.x = this.itemX, d.y = this.itemY, s ? this.itemX += c : (this.itemY += n + r + o, this.lastLineHeight = r), this.offsetWidth = this.widthOption || Math.max((s ? this.itemX - i - (t.checkbox ? 0 : a) : c) + i, this.offsetWidth);
        }
        getAllItems() {
          let t = [];
          return this.chart.series.forEach(function(e) {
            let i = e && e.options;
            e && ge(i.showInLegend, !gr(i.linkedTo) && void 0, !0) && (t = t.concat((e.legendItem || {}).labels || (i.legendType === "point" ? e.data : e)));
          }), Re(this, "afterGetAllItems", { allItems: t }), t;
        }
        getAlignment() {
          let t = this.options;
          return this.proximate ? t.align.charAt(0) + "tv" : t.floating ? "" : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
        }
        adjustMargins(t, e) {
          let i = this.chart, s = this.options, r = this.getAlignment();
          r && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(o, n) {
            o.test(r) && !gr(t[n]) && (i[dn[n]] = Math.max(i[dn[n]], i.legend[(n + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][n] * s[n % 2 ? "x" : "y"] + ge(s.margin, 12) + e[n] + (i.titleOffset[n] || 0)));
          });
        }
        proximatePositions() {
          let t, e = this.chart, i = [], s = this.options.align === "left";
          for (let r of (this.allItems.forEach(function(o) {
            let n, a, l = s, c, d;
            o.yAxis && (o.xAxis.options.reversed && (l = !l), o.points && (n = ud(l ? o.points : o.points.slice(0).reverse(), function(p) {
              return cn(p.plotY);
            })), a = this.itemMarginTop + o.legendItem.label.getBBox().height + this.itemMarginBottom, d = o.yAxis.top - e.plotTop, c = o.visible ? (n ? n.plotY : o.yAxis.height) + (d - 0.3 * a) : d + o.yAxis.height, i.push({ target: c, size: a, item: o }));
          }, this), hd(i, e.plotHeight))) t = r.item.legendItem || {}, cn(r.pos) && (t.y = e.plotTop - e.spacing[0] + r.pos);
        }
        render() {
          let t = this.chart, e = t.renderer, i = this.options, s = this.padding, r = this.getAllItems(), o, n, a, l = this.group, c, d = this.box;
          this.itemX = s, this.itemY = this.initialItemY, this.offsetWidth = 0, this.lastItemY = 0, this.widthOption = fd(i.width, t.spacingBox.width - s), c = t.spacingBox.width - 2 * s - i.x, ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) > -1 && (c /= 2), this.maxLegendWidth = this.widthOption || c, l || (this.group = l = e.g("legend").addClass(i.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = e.g().attr({ zIndex: 1 }).add(l), this.scrollGroup = e.g().add(this.contentGroup)), this.renderTitle(), md(r, (p, u) => (p.options && p.options.legendIndex || 0) - (u.options && u.options.legendIndex || 0)), i.reversed && r.reverse(), this.allItems = r, this.display = o = !!r.length, this.lastLineHeight = 0, this.maxItemWidth = 0, this.totalItemWidth = 0, this.itemHeight = 0, r.forEach(this.renderItem, this), r.forEach(this.layoutItem, this), n = (this.widthOption || this.offsetWidth) + s, a = this.lastItemY + this.lastLineHeight + this.titleHeight, a = this.handleOverflow(a) + s, d || (this.box = d = e.rect().addClass("highcharts-legend-box").attr({ r: i.borderRadius }).add(l)), t.styledMode || d.attr({ stroke: i.borderColor, "stroke-width": i.borderWidth || 0, fill: i.backgroundColor || "none" }).shadow(i.shadow), n > 0 && a > 0 && d[d.placed ? "animate" : "attr"](d.crisp.call({}, { x: 0, y: 0, width: n, height: a }, d.strokeWidth())), l[o ? "show" : "hide"](), t.styledMode && l.getStyle("display") === "none" && (n = a = 0), this.legendWidth = n, this.legendHeight = a, o && this.align(), this.proximate || this.positionItems(), Re(this, "afterRender");
        }
        align(t = this.chart.spacingBox) {
          let e = this.chart, i = this.options, s = t.y;
          /(lth|ct|rth)/.test(this.getAlignment()) && e.titleOffset[0] > 0 ? s += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && e.titleOffset[2] > 0 && (s -= e.titleOffset[2]), s !== t.y && (t = ei(t, { y: s })), e.hasRendered || (this.group.placed = !1), this.group.align(ei(i, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : i.verticalAlign }), !0, t);
        }
        handleOverflow(t) {
          let e = this, i = this.chart, s = i.renderer, r = this.options, o = r.y, n = r.verticalAlign === "top", a = this.padding, l = r.maxHeight, c = r.navigation, d = ge(c.animation, !0), p = c.arrowSize || 12, u = this.pages, g = this.allItems, m = function(S) {
            typeof S == "number" ? k.attr({ height: S }) : k && (e.clipRect = k.destroy(), e.contentGroup.clip()), e.contentGroup.div && (e.contentGroup.div.style.clip = S ? "rect(" + a + "px,9999px," + (a + S) + "px,0)" : "auto");
          }, x = function(S) {
            return e[S] = s.circle(0, 0, 1.3 * p).translate(p / 2, p / 2).add(w), i.styledMode || e[S].attr("fill", "rgba(0,0,0,0.0001)"), e[S];
          }, f, b, y, v = i.spacingBox.height + (n ? -o : o) - a, w = this.nav, k = this.clipRect;
          return r.layout !== "horizontal" || r.verticalAlign === "middle" || r.floating || (v /= 2), l && (v = Math.min(v, l)), u.length = 0, t && v > 0 && t > v && c.enabled !== !1 ? (this.clipHeight = f = Math.max(v - 20 - this.titleHeight - a, 0), this.currentPage = ge(this.currentPage, 1), this.fullHeight = t, g.forEach((S, M) => {
            let C = (y = S.legendItem || {}).y || 0, L = Math.round(y.label.getBBox().height), E = u.length;
            (!E || C - u[E - 1] > f && (b || C) !== u[E - 1]) && (u.push(b || C), E++), y.pageIx = E - 1, b && ((g[M - 1].legendItem || {}).pageIx = E - 1), M === g.length - 1 && C + L - u[E - 1] > f && C > u[E - 1] && (u.push(C), y.pageIx = E), C !== b && (b = C);
          }), k || (k = e.clipRect = s.clipRect(0, a - 2, 9999, 0), e.contentGroup.clip(k)), m(f), w || (this.nav = w = s.g().attr({ zIndex: 1 }).add(this.group), this.up = s.symbol("triangle", 0, 0, p, p).add(w), x("upTracker").on("click", function() {
            e.scroll(-1, d);
          }), this.pager = s.text("", 15, 10).addClass("highcharts-legend-navigation"), !i.styledMode && c.style && this.pager.css(c.style), this.pager.add(w), this.down = s.symbol("triangle-down", 0, 0, p, p).add(w), x("downTracker").on("click", function() {
            e.scroll(1, d);
          })), e.scroll(0), t = v) : w && (m(), this.nav = w.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t;
        }
        scroll(t, e) {
          let i = this.chart, s = this.pages, r = s.length, o = this.clipHeight, n = this.options.navigation, a = this.pager, l = this.padding, c = this.currentPage + t;
          c > r && (c = r), c > 0 && (e !== void 0 && nd(e, i), this.nav.attr({ translateX: l, translateY: o + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function(d) {
            d.attr({ class: c === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }), a.attr({ text: c + "/" + r }), [this.down, this.downTracker].forEach(function(d) {
            d.attr({ x: 18 + this.pager.getBBox().width, class: c === r ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
          }, this), i.styledMode || (this.up.attr({ fill: c === 1 ? n.inactiveColor : n.activeColor }), this.upTracker.css({ cursor: c === 1 ? "default" : "pointer" }), this.down.attr({ fill: c === r ? n.inactiveColor : n.activeColor }), this.downTracker.css({ cursor: c === r ? "default" : "pointer" })), this.scrollOffset = -s[c - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = c, this.positionCheckboxes(), xd(() => {
            Re(this, "afterScroll", { currentPage: c });
          }, od(ge(e, i.renderer.globalAnimation, !0)).duration));
        }
        setItemEvents(t, e, i) {
          let s = this, r = t.legendItem || {}, o = s.chart.renderer.boxWrapper, n = t instanceof Ge, a = t instanceof ce, l = "highcharts-legend-" + (n ? "point" : "series") + "-active", c = s.chart.styledMode, d = i ? [e, r.symbol] : [r.group], p = (u) => {
            s.allItems.forEach((g) => {
              t !== g && [g].concat(g.linkedSeries || []).forEach((m) => {
                m.setState(u, !n);
              });
            });
          };
          for (let u of d) u && u.on("mouseover", function() {
            t.visible && p("inactive"), t.setState("hover"), t.visible && o.addClass(l), c || e.css(s.options.itemHoverStyle);
          }).on("mouseout", function() {
            s.chart.styledMode || e.css(ei(t.visible ? s.itemStyle : s.itemHiddenStyle)), p(""), o.removeClass(l), t.setState();
          }).on("click", function(g) {
            let m = function() {
              t.setVisible && t.setVisible(), p(t.visible ? "inactive" : "");
            };
            o.removeClass(l), Re(s, "itemClick", { browserEvent: g, legendItem: t }, m), n ? t.firePointEvent("legendItemClick", { browserEvent: g }) : a && Re(t, "legendItemClick", { browserEvent: g });
          });
        }
        createCheckboxForItem(t) {
          t.checkbox = dd("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: t.selected, defaultChecked: t.selected }, this.options.itemCheckboxStyle, this.chart.container), bs(t.checkbox, "click", function(e) {
            let i = e.target;
            Re(t.series || t, "checkboxClick", { checked: i.checked, item: t }, function() {
              t.select();
            });
          });
        }
      }
      (function(h) {
        h.compose = function(t) {
          gd(ad, "Core.Legend") && bs(t, "beforeMargins", function() {
            this.legend = new h(this, this.options.legend);
          });
        };
      })(fr || (fr = {}));
      let pn = fr, { animate: mr, animObject: yd, setAnimation: xr } = $t, { defaultOptions: yr } = ee, { numberFormat: bd } = be, { registerEventOptions: un } = es, { charts: ii, doc: Ri, marginNames: gn, svg: vd, win: fn } = P, { seriesTypes: br } = Ot, { addEvent: vr, attr: mn, createElement: kr, css: Me, defined: Ye, diffObjects: xn, discardElement: kd, erase: wd, error: wr, extend: je, find: Mr, fireEvent: st, getAlignFactor: Md, getStyle: Sr, isArray: Sd, isNumber: ki, isObject: Cd, isString: vs, merge: ze, objectEach: Cr, pick: Vt, pInt: Td, relativeLength: yn, removeEvent: bn, splat: ks, syncTimeout: Ad, uniqueKey: Pd } = R;
      class Ue {
        static chart(t, e, i) {
          return new Ue(t, e, i);
        }
        constructor(t, e, i) {
          this.sharedClips = {};
          let s = [...arguments];
          (vs(t) || t.nodeName) && (this.renderTo = s.shift()), this.init(s[0], s[1]);
        }
        setZoomOptions() {
          let t = this.options.chart, e = t.zooming;
          this.zooming = { ...e, type: Vt(t.zoomType, e.type), key: Vt(t.zoomKey, e.key), pinchType: Vt(t.pinchType, e.pinchType), singleTouch: Vt(t.zoomBySingleTouch, e.singleTouch, !1), resetButton: ze(e.resetButton, t.resetZoomButton) };
        }
        init(t, e) {
          st(this, "init", { args: arguments }, function() {
            var o;
            let i = ze(yr, t), s = i.chart, r = this.renderTo || s.renderTo;
            this.userOptions = je({}, t), (this.renderTo = vs(r) ? Ri.getElementById(r) : r) || wr(13, !0, this), this.margin = [], this.spacing = [], this.labelCollectors = [], this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.locale = i.lang.locale ?? ((o = this.renderTo.closest("[lang]")) == null ? void 0 : o.lang), this.time = new pe(je(i.time || {}, { locale: this.locale })), i.time = this.time.options, this.numberFormatter = (s.numberFormatter || bd).bind(this), this.styledMode = s.styledMode, this.hasCartesianSeries = s.showAxes, this.index = ii.length, ii.push(this), P.chartCount++, un(this, s), this.xAxis = [], this.yAxis = [], this.pointCount = this.colorCounter = this.symbolCounter = 0, this.setZoomOptions(), st(this, "afterInit"), this.firstRender();
          });
        }
        initSeries(t) {
          let e = this.options.chart, i = t.type || e.type, s = br[i];
          s || wr(17, !0, this, { missingModuleFor: i });
          let r = new s();
          return typeof r.init == "function" && r.init(this, t), r;
        }
        setSortedData() {
          this.getSeriesOrderByLinks().forEach(function(t) {
            t.points || t.data || !t.enabledDataSorting || t.setData(t.options.data, !1);
          });
        }
        getSeriesOrderByLinks() {
          return this.series.concat().sort(function(t, e) {
            return t.linkedSeries.length || e.linkedSeries.length ? e.linkedSeries.length - t.linkedSeries.length : 0;
          });
        }
        orderItems(t, e = 0) {
          let i = this[t], s = this.options[t] = ks(this.options[t]).slice(), r = this.userOptions[t] = this.userOptions[t] ? ks(this.userOptions[t]).slice() : [];
          if (this.hasRendered && (s.splice(e), r.splice(e)), i) for (let o = e, n = i.length; o < n; ++o) {
            let a = i[o];
            a && (a.index = o, a instanceof ce && (a.name = a.getName()), a.options.isInternal || (s[o] = a.options, r[o] = a.userOptions));
          }
        }
        isInsidePlot(t, e, i = {}) {
          var x;
          let { inverted: s, plotBox: r, plotLeft: o, plotTop: n, scrollablePlotBox: a } = this, { scrollLeft: l = 0, scrollTop: c = 0 } = i.visiblePlotOnly && ((x = this.scrollablePlotArea) == null ? void 0 : x.scrollingContainer) || {}, d = i.series, p = i.visiblePlotOnly && a || r, u = i.inverted ? e : t, g = i.inverted ? t : e, m = { x: u, y: g, isInsidePlot: !0, options: i };
          if (!i.ignoreX) {
            let f = d && (s && !this.polar ? d.yAxis : d.xAxis) || { pos: o, len: 1 / 0 }, b = i.paneCoordinates ? f.pos + u : o + u;
            b >= Math.max(l + o, f.pos) && b <= Math.min(l + o + p.width, f.pos + f.len) || (m.isInsidePlot = !1);
          }
          if (!i.ignoreY && m.isInsidePlot) {
            let f = !s && i.axis && !i.axis.isXAxis && i.axis || d && (s ? d.xAxis : d.yAxis) || { pos: n, len: 1 / 0 }, b = i.paneCoordinates ? f.pos + g : n + g;
            b >= Math.max(c + n, f.pos) && b <= Math.min(c + n + p.height, f.pos + f.len) || (m.isInsidePlot = !1);
          }
          return st(this, "afterIsInsidePlot", m), m.isInsidePlot;
        }
        redraw(t) {
          st(this, "beforeRedraw");
          let e = this.hasCartesianSeries ? this.axes : this.colorAxis || [], i = this.series, s = this.pointer, r = this.legend, o = this.userOptions.legend, n = this.renderer, a = n.isHidden(), l = [], c, d, p, u = this.isDirtyBox, g = this.isDirtyLegend, m;
          for (n.rootFontSize = n.boxWrapper.getStyle("font-size"), this.setResponsive && this.setResponsive(!1), xr(!!this.hasRendered && t, this), a && this.temporaryDisplay(), this.layOutTitles(!1), p = i.length; p--; ) if (((m = i[p]).options.stacking || m.options.centerInCategory) && (d = !0, m.isDirty)) {
            c = !0;
            break;
          }
          if (c) for (p = i.length; p--; ) (m = i[p]).options.stacking && (m.isDirty = !0);
          i.forEach(function(x) {
            x.isDirty && (x.options.legendType === "point" ? (typeof x.updateTotals == "function" && x.updateTotals(), g = !0) : o && (o.labelFormatter || o.labelFormat) && (g = !0)), x.isDirtyData && st(x, "updatedData");
          }), g && r && r.options.enabled && (r.render(), this.isDirtyLegend = !1), d && this.getStacks(), e.forEach(function(x) {
            x.updateNames(), x.setScale();
          }), this.getMargins(), e.forEach(function(x) {
            x.isDirty && (u = !0);
          }), e.forEach(function(x) {
            let f = x.min + "," + x.max;
            x.extKey !== f && (x.extKey = f, l.push(function() {
              st(x, "afterSetExtremes", je(x.eventArgs, x.getExtremes())), delete x.eventArgs;
            })), (u || d) && x.redraw();
          }), u && this.drawChartBox(), st(this, "predraw"), i.forEach(function(x) {
            (u || x.isDirty) && x.visible && x.redraw(), x.isDirtyData = !1;
          }), s && s.reset(!0), n.draw(), st(this, "redraw"), st(this, "render"), a && this.temporaryDisplay(!0), l.forEach(function(x) {
            x.call();
          });
        }
        get(t) {
          let e = this.series;
          function i(r) {
            return r.id === t || r.options && r.options.id === t;
          }
          let s = Mr(this.axes, i) || Mr(this.series, i);
          for (let r = 0; !s && r < e.length; r++) s = Mr(e[r].points || [], i);
          return s;
        }
        createAxes() {
          let t = this.userOptions;
          for (let e of (st(this, "createAxes"), ["xAxis", "yAxis"])) for (let i of t[e] = ks(t[e] || {})) new gi(this, i, e);
          st(this, "afterCreateAxes");
        }
        getSelectedPoints() {
          return this.series.reduce((t, e) => (e.getPointsCollection().forEach((i) => {
            Vt(i.selectedStaging, i.selected) && t.push(i);
          }), t), []);
        }
        getSelectedSeries() {
          return this.series.filter((t) => t.selected);
        }
        setTitle(t, e, i) {
          this.applyDescription("title", t), this.applyDescription("subtitle", e), this.applyDescription("caption", void 0), this.layOutTitles(i);
        }
        applyDescription(t, e) {
          var o;
          let i = this, s = this.options[t] = ze(this.options[t], e), r = this[t];
          r && e && (this[t] = r = r.destroy()), s && !r && ((r = this.renderer.text(s.text, 0, 0, s.useHTML).attr({ align: s.align, class: "highcharts-" + t, zIndex: s.zIndex || 4 }).css({ textOverflow: "ellipsis", whiteSpace: "nowrap" }).add()).update = function(n, a) {
            i.applyDescription(t, n), i.layOutTitles(a);
          }, this.styledMode || r.css(je(t === "title" ? { fontSize: this.options.isStock ? "1em" : "1.2em" } : {}, s.style)), r.textPxLength = r.getBBox().width, r.css({ whiteSpace: (o = s.style) == null ? void 0 : o.whiteSpace }), this[t] = r);
        }
        layOutTitles(t = !0) {
          var n, a, l, c;
          let e = [0, 0, 0], { options: i, renderer: s, spacingBox: r } = this;
          ["title", "subtitle", "caption"].forEach((d) => {
            var x;
            let p = this[d], u = this.options[d], g = ze(r), m = (p == null ? void 0 : p.textPxLength) || 0;
            if (p && u) {
              st(this, "layOutTitle", { alignTo: g, key: d, textPxLength: m });
              let f = s.fontMetrics(p), b = f.b, y = f.h, v = u.verticalAlign || "top", w = v === "top", k = w && u.minScale || 1, S = d === "title" ? w ? -3 : 0 : w ? e[0] + 2 : 0, M = Math.min(g.width / m, 1), C = Math.max(k, M), L = ze({ y: v === "bottom" ? b : S + b }, { align: d === "title" ? M < k ? "left" : "center" : (x = this.title) == null ? void 0 : x.alignValue }, u), E = u.width || (M > k ? this.chartWidth : g.width) / C;
              p.alignValue !== L.align && (p.placed = !1);
              let B = Math.round(p.css({ width: `${E}px` }).getBBox(u.useHTML).height);
              if (L.height = B, p.align(L, !1, g).attr({ align: L.align, scaleX: C, scaleY: C, "transform-origin": `${g.x + m * C * Md(L.align)} ${y}` }), !u.floating) {
                let O = B * (B < 1.2 * y ? 1 : C);
                v === "top" ? e[0] = Math.ceil(e[0] + O) : v === "bottom" && (e[2] = Math.ceil(e[2] + O));
              }
            }
          }, this), e[0] && (((n = i.title) == null ? void 0 : n.verticalAlign) || "top") === "top" && (e[0] += ((a = i.title) == null ? void 0 : a.margin) || 0), e[2] && ((l = i.caption) == null ? void 0 : l.verticalAlign) === "bottom" && (e[2] += ((c = i.caption) == null ? void 0 : c.margin) || 0);
          let o = !this.titleOffset || this.titleOffset.join(",") !== e.join(",");
          this.titleOffset = e, st(this, "afterLayOutTitles"), !this.isDirtyBox && o && (this.isDirtyBox = this.isDirtyLegend = o, this.hasRendered && t && this.isDirtyBox && this.redraw());
        }
        getContainerBox() {
          let t = [].map.call(this.renderTo.children, (i) => {
            if (i !== this.container) {
              let s = i.style.display;
              return i.style.display = "none", [i, s];
            }
          }), e = { width: Sr(this.renderTo, "width", !0) || 0, height: Sr(this.renderTo, "height", !0) || 0 };
          return t.filter(Boolean).forEach(([i, s]) => {
            i.style.display = s;
          }), e;
        }
        getChartSize() {
          var o;
          let t = this.options.chart, e = t.width, i = t.height, s = this.getContainerBox(), r = s.height <= 1 || !((o = this.renderTo.parentElement) != null && o.style.height) && this.renderTo.style.height === "100%";
          this.chartWidth = Math.max(0, e || s.width || 600), this.chartHeight = Math.max(0, yn(i, this.chartWidth) || (r ? 400 : s.height)), this.containerBox = s;
        }
        temporaryDisplay(t) {
          let e = this.renderTo, i;
          if (t) for (; e && e.style; ) e.hcOrigStyle && (Me(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (Ri.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
          else for (; e && e.style && (Ri.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, Ri.body.appendChild(e)), (Sr(e, "display", !1) === "none" || e.hcOricDetached) && (e.hcOrigStyle = { display: e.style.display, height: e.style.height, overflow: e.style.overflow }, i = { display: "block", overflow: "hidden" }, e !== this.renderTo && (i.height = 0), Me(e, i), e.offsetWidth || e.style.setProperty("display", "block", "important")), (e = e.parentNode) !== Ri.body); ) ;
        }
        setClassName(t) {
          this.container.className = "highcharts-container " + (t || "");
        }
        getContainer() {
          var p;
          let t, e = this.options, i = e.chart, s = "data-highcharts-chart", r = Pd(), o = this.renderTo, n = Td(mn(o, s));
          ki(n) && ii[n] && ii[n].hasRendered && ii[n].destroy(), mn(o, s, this.index), o.innerHTML = wt.emptyHTML, i.skipClone || o.offsetWidth || this.temporaryDisplay(), this.getChartSize();
          let a = this.chartHeight, l = this.chartWidth;
          Me(o, { overflow: "hidden" }), this.styledMode || (t = je({ position: "relative", overflow: "hidden", width: l + "px", height: a + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none", padding: "0px" }, i.style || {}));
          let c = kr("div", { id: r }, t, o);
          this.container = c, this.getChartSize(), l === this.chartWidth || (l = this.chartWidth, this.styledMode || Me(c, { width: Vt((p = i.style) == null ? void 0 : p.width, l + "px") })), this.containerBox = this.getContainerBox(), this._cursor = c.style.cursor;
          let d = i.renderer || !vd ? Ci.getRendererType(i.renderer) : ts;
          if (this.renderer = new d(c, l, a, void 0, i.forExport, e.exporting && e.exporting.allowHTML, this.styledMode), xr(void 0, this), this.setClassName(i.className), this.styledMode) for (let u in e.defs) this.renderer.definition(e.defs[u]);
          else this.renderer.setStyle(i.style);
          this.renderer.chartIndex = this.index, st(this, "afterGetContainer");
        }
        getMargins(t) {
          let { spacing: e, margin: i, titleOffset: s } = this;
          this.resetMargins(), s[0] && !Ye(i[0]) && (this.plotTop = Math.max(this.plotTop, s[0] + e[0])), s[2] && !Ye(i[2]) && (this.marginBottom = Math.max(this.marginBottom, s[2] + e[2])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), st(this, "getMargins"), t || this.getAxisMargins();
        }
        getAxisMargins() {
          let t = this, e = t.axisOffset = [0, 0, 0, 0], i = t.colorAxis, s = t.margin, r = function(o) {
            o.forEach(function(n) {
              n.visible && n.getOffset();
            });
          };
          t.hasCartesianSeries ? r(t.axes) : i && i.length && r(i), gn.forEach(function(o, n) {
            Ye(s[n]) || (t[o] += e[n]);
          }), t.setChartSize();
        }
        getOptions() {
          return xn(this.userOptions, yr);
        }
        reflow(t) {
          var r;
          let e = this, i = e.containerBox, s = e.getContainerBox();
          (r = e.pointer) == null || delete r.chartPosition, !e.isPrinting && !e.isResizing && i && s.width && ((s.width !== i.width || s.height !== i.height) && (R.clearTimeout(e.reflowTimeout), e.reflowTimeout = Ad(function() {
            e.container && e.setSize(void 0, void 0, !1);
          }, t ? 100 : 0)), e.containerBox = s);
        }
        setReflow() {
          let t = this, e = (i) => {
            var s;
            (s = t.options) != null && s.chart.reflow && t.hasLoaded && t.reflow(i);
          };
          if (typeof ResizeObserver == "function") new ResizeObserver(e).observe(t.renderTo);
          else {
            let i = vr(fn, "resize", e);
            vr(this, "destroy", i);
          }
        }
        setSize(t, e, i) {
          let s = this, r = s.renderer;
          s.isResizing += 1, xr(i, s);
          let o = r.globalAnimation;
          s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, t !== void 0 && (s.options.chart.width = t), e !== void 0 && (s.options.chart.height = e), s.getChartSize();
          let { chartWidth: n, chartHeight: a, scrollablePixelsX: l = 0, scrollablePixelsY: c = 0 } = s;
          (s.isDirtyBox || n !== s.oldChartWidth || a !== s.oldChartHeight) && (s.styledMode || (o ? mr : Me)(s.container, { width: `${n + l}px`, height: `${a + c}px` }, o), s.setChartSize(!0), r.setSize(n, a, o), s.axes.forEach(function(d) {
            d.isDirty = !0, d.setScale();
          }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(o), s.oldChartHeight = void 0, st(s, "resize"), setTimeout(() => {
            s && st(s, "endResize");
          }, yd(o).duration)), s.isResizing -= 1;
        }
        setChartSize(t) {
          let e, i, s, r, { chartHeight: o, chartWidth: n, inverted: a, spacing: l, renderer: c } = this, d = this.clipOffset, p = Math[a ? "floor" : "round"];
          this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = s = Math.max(0, Math.round(n - e - this.marginRight)), this.plotHeight = r = Math.max(0, Math.round(o - i - this.marginBottom)), this.plotSizeX = a ? r : s, this.plotSizeY = a ? s : r, this.spacingBox = c.spacingBox = { x: l[3], y: l[0], width: n - l[3] - l[1], height: o - l[0] - l[2] }, this.plotBox = c.plotBox = { x: e, y: i, width: s, height: r }, d && (this.clipBox = { x: p(d[3]), y: p(d[0]), width: p(this.plotSizeX - d[1] - d[3]), height: p(this.plotSizeY - d[0] - d[2]) }), t || (this.axes.forEach(function(u) {
            u.setAxisSize(), u.setAxisTranslation();
          }), c.alignElements()), st(this, "afterSetChartSize", { skipAxes: t });
        }
        resetMargins() {
          st(this, "resetMargins");
          let t = this, e = t.options.chart, i = e.plotBorderWidth || 0, s = i / 2;
          ["margin", "spacing"].forEach(function(r) {
            let o = e[r], n = Cd(o) ? o : [o, o, o, o];
            ["Top", "Right", "Bottom", "Left"].forEach(function(a, l) {
              t[r][l] = Vt(e[r + a], n[l]);
            });
          }), gn.forEach(function(r, o) {
            t[r] = Vt(t.margin[o], t.spacing[o]);
          }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [s, s, s, s], t.plotBorderWidth = i;
        }
        drawChartBox() {
          let t = this.options.chart, e = this.renderer, i = this.chartWidth, s = this.chartHeight, r = this.styledMode, o = this.plotBGImage, n = t.backgroundColor, a = t.plotBackgroundColor, l = t.plotBackgroundImage, c = this.plotLeft, d = this.plotTop, p = this.plotWidth, u = this.plotHeight, g = this.plotBox, m = this.clipRect, x = this.clipBox, f = this.chartBackground, b = this.plotBackground, y = this.plotBorder, v, w, k, S = "animate";
          f || (this.chartBackground = f = e.rect().addClass("highcharts-background").add(), S = "attr"), r ? v = w = f.strokeWidth() : (w = (v = t.borderWidth || 0) + (t.shadow ? 8 : 0), k = { fill: n || "none" }, (v || f["stroke-width"]) && (k.stroke = t.borderColor, k["stroke-width"] = v), f.attr(k).shadow(t.shadow)), f[S]({ x: w / 2, y: w / 2, width: i - w - v % 2, height: s - w - v % 2, r: t.borderRadius }), S = "animate", b || (S = "attr", this.plotBackground = b = e.rect().addClass("highcharts-plot-background").add()), b[S](g), !r && (b.attr({ fill: a || "none" }).shadow(t.plotShadow), l && (o ? (l !== o.attr("href") && o.attr("href", l), o.animate(g)) : this.plotBGImage = e.image(l, c, d, p, u).add())), m ? m.animate({ width: x.width, height: x.height }) : this.clipRect = e.clipRect(x), S = "animate", y || (S = "attr", this.plotBorder = y = e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()), r || y.attr({ stroke: t.plotBorderColor, "stroke-width": t.plotBorderWidth || 0, fill: "none" }), y[S](y.crisp({ x: c, y: d, width: p, height: u }, -y.strokeWidth())), this.isDirtyBox = !1, st(this, "afterDrawChartBox");
        }
        propFromSeries() {
          let t, e, i, s = this, r = s.options.chart, o = s.options.series;
          ["inverted", "angular", "polar"].forEach(function(n) {
            for (e = br[r.type], i = r[n] || e && e.prototype[n], t = o && o.length; !i && t--; ) (e = br[o[t].type]) && e.prototype[n] && (i = !0);
            s[n] = i;
          });
        }
        linkSeries(t) {
          let e = this, i = e.series;
          i.forEach(function(s) {
            s.linkedSeries.length = 0;
          }), i.forEach(function(s) {
            let { linkedTo: r } = s.options;
            if (vs(r)) {
              let o;
              (o = r === ":previous" ? e.series[s.index - 1] : e.get(r)) && o.linkedParent !== s && (o.linkedSeries.push(s), s.linkedParent = o, o.enabledDataSorting && s.setDataSortingOptions(), s.visible = Vt(s.options.visible, o.options.visible, s.visible));
            }
          }), st(this, "afterLinkSeries", { isUpdating: t });
        }
        renderSeries() {
          this.series.forEach(function(t) {
            t.translate(), t.render();
          });
        }
        render() {
          var c;
          let t = this.axes, e = this.colorAxis, i = this.renderer, s = this.options.chart.axisLayoutRuns || 2, r = (d) => {
            d.forEach((p) => {
              p.visible && p.render();
            });
          }, o = 0, n = !0, a, l = 0;
          for (let d of (this.setTitle(), st(this, "beforeMargins"), (c = this.getStacks) == null || c.call(this), this.getMargins(!0), this.setChartSize(), t)) {
            let { options: p } = d, { labels: u } = p;
            if (this.hasCartesianSeries && d.horiz && d.visible && u.enabled && d.series.length && d.coll !== "colorAxis" && !this.polar) {
              o = p.tickLength, d.createGroups();
              let g = new ui(d, 0, "", !0), m = g.createLabel("x", u);
              if (g.destroy(), m && Vt(u.reserveSpace, !ki(p.crossing)) && (o = m.getBBox().height + u.distance + Math.max(p.offset || 0, 0)), o) {
                m == null || m.destroy();
                break;
              }
            }
          }
          for (this.plotHeight = Math.max(this.plotHeight - o, 0); (n || a || s > 1) && l < s; ) {
            let d = this.plotWidth, p = this.plotHeight;
            for (let u of t) l === 0 ? u.setScale() : (u.horiz && n || !u.horiz && a) && u.setTickInterval(!0);
            l === 0 ? this.getAxisMargins() : this.getMargins(), n = d / this.plotWidth > (l ? 1 : 1.1), a = p / this.plotHeight > (l ? 1 : 1.05), l++;
          }
          this.drawChartBox(), this.hasCartesianSeries ? r(t) : e && e.length && r(e), this.seriesGroup || (this.seriesGroup = i.g("series-group").attr({ zIndex: 3 }).shadow(this.options.chart.seriesGroupShadow).add()), this.renderSeries(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
        }
        addCredits(t) {
          let e = this, i = ze(!0, this.options.credits, t);
          i.enabled && !this.credits && (this.credits = this.renderer.text(i.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
            i.href && (fn.location.href = i.href);
          }).attr({ align: i.position.align, zIndex: 8 }), e.styledMode || this.credits.css(i.style), this.credits.add().align(i.position), this.credits.update = function(s) {
            e.credits = e.credits.destroy(), e.addCredits(s);
          });
        }
        destroy() {
          let t, e = this, i = e.axes, s = e.series, r = e.container, o = r && r.parentNode;
          for (st(e, "destroy"), e.renderer.forExport ? wd(ii, e) : ii[e.index] = void 0, P.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), bn(e), t = i.length; t--; ) i[t] = i[t].destroy();
          for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = s.length; t--; ) s[t] = s[t].destroy();
          ["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"].forEach(function(n) {
            let a = e[n];
            a && a.destroy && (e[n] = a.destroy());
          }), r && (r.innerHTML = wt.emptyHTML, bn(r), o && kd(r)), Cr(e, function(n, a) {
            delete e[a];
          });
        }
        firstRender() {
          var s;
          let t = this, e = t.options;
          t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.createAxes();
          let i = Sd(e.series) ? e.series : [];
          e.series = [], i.forEach(function(r) {
            t.initSeries(r);
          }), t.linkSeries(), t.setSortedData(), st(t, "beforeRender"), t.render(), (s = t.pointer) == null || s.getChartPosition(), t.renderer.imgCount || t.hasLoaded || t.onload(), t.temporaryDisplay(!0);
        }
        onload() {
          this.callbacks.concat([this.callback]).forEach(function(t) {
            t && this.index !== void 0 && t.apply(this, [this]);
          }, this), st(this, "load"), st(this, "render"), Ye(this.index) && this.setReflow(), this.warnIfA11yModuleNotLoaded(), this.hasLoaded = !0;
        }
        warnIfA11yModuleNotLoaded() {
          let { options: t, title: e } = this;
          !t || this.accessibility || (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (e && e.element.textContent || "").replace(/</g, "&lt;") }), t.accessibility && t.accessibility.enabled === !1 || wr('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.', !1, this));
        }
        addSeries(t, e, i) {
          let s, r = this;
          return t && (e = Vt(e, !0), st(r, "addSeries", { options: t }, function() {
            s = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), s.enabledDataSorting && s.setData(t.data, !1), st(r, "afterAddSeries", { series: s }), e && r.redraw(i);
          })), s;
        }
        addAxis(t, e, i, s) {
          return this.createAxis(e ? "xAxis" : "yAxis", { axis: t, redraw: i, animation: s });
        }
        addColorAxis(t, e, i) {
          return this.createAxis("colorAxis", { axis: t, redraw: e, animation: i });
        }
        createAxis(t, e) {
          let i = new gi(this, e.axis, t);
          return Vt(e.redraw, !0) && this.redraw(e.animation), i;
        }
        showLoading(t) {
          let e = this, i = e.options, s = i.loading, r = function() {
            o && Me(o, { left: e.plotLeft + "px", top: e.plotTop + "px", width: e.plotWidth + "px", height: e.plotHeight + "px" });
          }, o = e.loadingDiv, n = e.loadingSpan;
          o || (e.loadingDiv = o = kr("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, e.container)), n || (e.loadingSpan = n = kr("span", { className: "highcharts-loading-inner" }, null, o), vr(e, "redraw", r)), o.className = "highcharts-loading", wt.setElementHTML(n, Vt(t, i.lang.loading, "")), e.styledMode || (Me(o, je(s.style, { zIndex: 10 })), Me(n, s.labelStyle), e.loadingShown || (Me(o, { opacity: 0, display: "" }), mr(o, { opacity: s.style.opacity || 0.5 }, { duration: s.showDuration || 0 }))), e.loadingShown = !0, r();
        }
        hideLoading() {
          let t = this.options, e = this.loadingDiv;
          e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || mr(e, { opacity: 0 }, { duration: t.loading.hideDuration || 100, complete: function() {
            Me(e, { display: "none" });
          } })), this.loadingShown = !1;
        }
        update(t, e, i, s) {
          let r, o, n, a = this, l = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, c = t.isResponsiveOptions, d = [];
          st(a, "update", { options: t }), c || a.setResponsive(!1, !0), t = xn(t, a.options), a.userOptions = ze(a.userOptions, t);
          let p = t.chart;
          p && (ze(!0, a.options.chart, p), this.setZoomOptions(), "className" in p && a.setClassName(p.className), ("inverted" in p || "polar" in p || "type" in p) && (a.propFromSeries(), r = !0), "alignTicks" in p && (r = !0), "events" in p && un(this, p), Cr(p, function(m, x) {
            a.propsRequireUpdateSeries.indexOf("chart." + x) !== -1 && (o = !0), a.propsRequireDirtyBox.indexOf(x) !== -1 && (a.isDirtyBox = !0), a.propsRequireReflow.indexOf(x) === -1 || (a.isDirtyBox = !0, c || (n = !0));
          }), !a.styledMode && p.style && a.renderer.setStyle(a.options.chart.style || {})), !a.styledMode && t.colors && (this.options.colors = t.colors), Cr(t, function(m, x) {
            a[x] && typeof a[x].update == "function" ? a[x].update(m, !1) : typeof a[l[x]] == "function" ? a[l[x]](m) : x !== "colors" && a.collectionsWithUpdate.indexOf(x) === -1 && ze(!0, a.options[x], t[x]), x !== "chart" && a.propsRequireUpdateSeries.indexOf(x) !== -1 && (o = !0);
          }), this.collectionsWithUpdate.forEach(function(m) {
            t[m] && (ks(t[m]).forEach(function(x, f) {
              let b, y = Ye(x.id);
              y && (b = a.get(x.id)), !b && a[m] && (b = a[m][Vt(x.index, f)]) && (y && Ye(b.options.id) || b.options.isInternal) && (b = void 0), b && b.coll === m && (b.update(x, !1), i && (b.touched = !0)), !b && i && a.collectionsWithInit[m] && (a.collectionsWithInit[m][0].apply(a, [x].concat(a.collectionsWithInit[m][1] || []).concat([!1])).touched = !0);
            }), i && a[m].forEach(function(x) {
              x.touched || x.options.isInternal ? delete x.touched : d.push(x);
            }));
          }), d.forEach(function(m) {
            m.chart && m.remove && m.remove(!1);
          }), r && a.axes.forEach(function(m) {
            m.update({}, !1);
          }), o && a.getSeriesOrderByLinks().forEach(function(m) {
            m.chart && m.update({}, !1);
          }, this);
          let u = p && p.width, g = p && (vs(p.height) ? yn(p.height, u || a.chartWidth) : p.height);
          n || ki(u) && u !== a.chartWidth || ki(g) && g !== a.chartHeight ? a.setSize(u, g, s) : Vt(e, !0) && a.redraw(s), st(a, "afterUpdate", { options: t, redraw: e, animation: s });
        }
        setSubtitle(t, e) {
          this.applyDescription("subtitle", t), this.layOutTitles(e);
        }
        setCaption(t, e) {
          this.applyDescription("caption", t), this.layOutTitles(e);
        }
        showResetZoom() {
          let t = this, e = yr.lang, i = t.zooming.resetButton, s = i.theme, r = i.relativeTo === "chart" || i.relativeTo === "spacingBox" ? null : "plotBox";
          function o() {
            t.zoomOut();
          }
          st(this, "beforeShowResetZoom", null, function() {
            t.resetZoomButton = t.renderer.button(e.resetZoom, null, null, o, s).attr({ align: i.position.align, title: e.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(i.position, !1, r);
          }), st(this, "afterShowResetZoom");
        }
        zoomOut() {
          st(this, "selection", { resetSelection: !0 }, () => this.transform({ reset: !0, trigger: "zoom" }));
        }
        pan(t, e) {
          let i = this, s = typeof e == "object" ? e : { enabled: e, type: "x" }, r = s.type, o = r && i[{ x: "xAxis", xy: "axes", y: "yAxis" }[r]].filter((a) => a.options.panningEnabled && !a.options.isInternal), n = i.options.chart;
          n != null && n.panning && (n.panning = s), st(this, "pan", { originalEvent: t }, () => {
            i.transform({ axes: o, event: t, to: { x: t.chartX - (i.mouseDownX || 0), y: t.chartY - (i.mouseDownY || 0) }, trigger: "pan" }), Me(i.container, { cursor: "move" });
          });
        }
        transform(t) {
          var g;
          let { axes: e = this.axes, event: i, from: s = {}, reset: r, selection: o, to: n = {}, trigger: a } = t, { inverted: l, time: c } = this, d = !1, p, u;
          for (let m of ((g = this.hoverPoints) == null || g.forEach((x) => x.setState()), e)) {
            let { horiz: x, len: f, minPointOffset: b = 0, options: y, reversed: v } = m, w = x ? "width" : "height", k = x ? "x" : "y", S = Vt(n[w], m.len), M = Vt(s[w], m.len), C = 10 > Math.abs(S) ? 1 : S / M, L = (s[k] || 0) + M / 2 - m.pos, E = L - ((n[k] ?? m.pos) + S / 2 - m.pos) / C, B = v && !l || !v && l ? -1 : 1;
            if (!r && (L < 0 || L > m.len)) continue;
            let O = m.toValue(E, !0) + (o || m.isOrdinal ? 0 : b * B), D = m.toValue(E + f / C, !0) - (o || m.isOrdinal ? 0 : b * B || 0), G = m.allExtremes;
            if (O > D && ([O, D] = [D, O]), C === 1 && !r && m.coll === "yAxis" && !G) {
              for (let Pt of m.series) {
                let Yt = Pt.getExtremes(Pt.getProcessedData(!0).modified.getColumn("y") || [], !0);
                G ?? (G = { dataMin: Number.MAX_VALUE, dataMax: -Number.MAX_VALUE }), ki(Yt.dataMin) && ki(Yt.dataMax) && (G.dataMin = Math.min(Yt.dataMin, G.dataMin), G.dataMax = Math.max(Yt.dataMax, G.dataMax));
              }
              m.allExtremes = G;
            }
            let { dataMin: Z, dataMax: F, min: K, max: N } = je(m.getExtremes(), G || {}), Y = c.parse(y.min), $ = c.parse(y.max), at = Z ?? Y, ft = F ?? $, Q = D - O, et = m.categories ? 0 : Math.min(Q, ft - at), ut = at - et * (Ye(Y) ? 0 : y.minPadding), qt = ft + et * (Ye($) ? 0 : y.maxPadding), Nt = m.allowZoomOutside || C === 1 || a !== "zoom" && C > 1, Ut = Math.min(Y ?? ut, ut, Nt ? K : ut), Wt = Math.max($ ?? qt, qt, Nt ? N : qt);
            (!m.isOrdinal || m.options.overscroll || C !== 1 || r) && (O < Ut && (O = Ut, C >= 1 && (D = O + Q)), D > Wt && (D = Wt, C >= 1 && (O = D - Q)), (r || m.series.length && (O !== K || D !== N) && O >= Ut && D <= Wt) && (o ? o[m.coll].push({ axis: m, min: O, max: D }) : (m.isPanning = a !== "zoom", m.isPanning && (u = !0), m.setExtremes(r ? void 0 : O, r ? void 0 : D, !1, !1, { move: E, trigger: a, scale: C }), !r && (O > Ut || D < Wt) && a !== "mousewheel" && (p = !0)), d = !0), i && (this[x ? "mouseDownX" : "mouseDownY"] = i[x ? "chartX" : "chartY"]));
          }
          return d && (o ? st(this, "selection", o, () => {
            delete t.selection, t.trigger = "zoom", this.transform(t);
          }) : (!p || u || this.resetZoomButton ? !p && this.resetZoomButton && (this.resetZoomButton = this.resetZoomButton.destroy()) : this.showResetZoom(), this.redraw(a === "zoom" && (this.options.chart.animation ?? this.pointCount < 100)))), d;
        }
      }
      je(Ue.prototype, { callbacks: [], collectionsWithInit: { xAxis: [Ue.prototype.addAxis, [!0]], yAxis: [Ue.prototype.addAxis, [!1]], series: [Ue.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: ["backgroundColor", "borderColor", "borderWidth", "borderRadius", "plotBackgroundColor", "plotBackgroundImage", "plotBorderColor", "plotBorderWidth", "plotShadow", "shadow"], propsRequireReflow: ["margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "spacing", "spacingTop", "spacingRight", "spacingBottom", "spacingLeft"], propsRequireUpdateSeries: ["chart.inverted", "chart.polar", "chart.ignoreHiddenSeries", "chart.type", "colors", "plotOptions", "time", "tooltip"] });
      let { stop: Od } = $t, { composed: Ld } = P, { addEvent: $e, createElement: ws, css: Tr, defined: Ar, erase: Ed, merge: vn, pushUnique: kn } = R;
      function Id() {
        let h = this.scrollablePlotArea;
        (this.scrollablePixelsX || this.scrollablePixelsY) && !h && (this.scrollablePlotArea = h = new zi(this)), h == null || h.applyFixed();
      }
      function wn() {
        this.chart.scrollablePlotArea && (this.chart.scrollablePlotArea.isDirty = !0);
      }
      class zi {
        static compose(t, e, i) {
          kn(Ld, this.compose) && ($e(t, "afterInit", wn), $e(e, "afterSetChartSize", (s) => this.afterSetSize(s.target, s)), $e(e, "render", Id), $e(i, "show", wn));
        }
        static afterSetSize(t, e) {
          let i, s, r, { minWidth: o, minHeight: n } = t.options.chart.scrollablePlotArea || {}, { clipBox: a, plotBox: l, inverted: c, renderer: d } = t;
          if (!d.forExport && (o ? (t.scrollablePixelsX = i = Math.max(0, o - t.chartWidth), i && (t.scrollablePlotBox = vn(t.plotBox), l.width = t.plotWidth += i, a[c ? "height" : "width"] += i, r = !0)) : n && (t.scrollablePixelsY = s = Math.max(0, n - t.chartHeight), Ar(s) && (t.scrollablePlotBox = vn(t.plotBox), l.height = t.plotHeight += s, a[c ? "width" : "height"] += s, r = !1)), Ar(r) && !e.skipAxes)) for (let p of t.axes) (p.horiz === r || t.hasParallelCoordinates && p.coll === "yAxis") && (p.setAxisSize(), p.setAxisTranslation());
        }
        constructor(t) {
          var u;
          let e, i = t.options.chart, s = Ci.getRendererType(), r = i.scrollablePlotArea || {}, o = this.moveFixedElements.bind(this), n = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" };
          t.scrollablePixelsX && (n.overflowX = "auto"), t.scrollablePixelsY && (n.overflowY = "auto"), this.chart = t;
          let a = this.parentDiv = ws("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, t.renderTo), l = this.scrollingContainer = ws("div", { className: "highcharts-scrolling" }, n, a), c = this.innerContainer = ws("div", { className: "highcharts-inner-container" }, void 0, l), d = this.fixedDiv = ws("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (((u = i.style) == null ? void 0 : u.zIndex) || 0) + 2, top: 0 }, void 0, !0), p = this.fixedRenderer = new s(d, t.chartWidth, t.chartHeight, i.style);
          this.mask = p.path().attr({ fill: i.backgroundColor || "#fff", "fill-opacity": r.opacity ?? 0.85, zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), l.parentNode.insertBefore(d, l), Tr(t.renderTo, { overflow: "visible" }), $e(t, "afterShowResetZoom", o), $e(t, "afterApplyDrilldown", o), $e(t, "afterLayOutTitles", o), $e(l, "scroll", () => {
            let { pointer: g, hoverPoint: m } = t;
            g && (delete g.chartPosition, m && (e = m), g.runPointActions(void 0, e, !0));
          }), c.appendChild(t.container);
        }
        applyFixed() {
          var L;
          let { chart: t, fixedRenderer: e, isDirty: i, scrollingContainer: s } = this, { axisOffset: r, chartWidth: o, chartHeight: n, container: a, plotHeight: l, plotLeft: c, plotTop: d, plotWidth: p, scrollablePixelsX: u = 0, scrollablePixelsY: g = 0 } = t, { scrollPositionX: m = 0, scrollPositionY: x = 0 } = t.options.chart.scrollablePlotArea || {}, f = o + u, b = n + g;
          e.setSize(o, n), (i ?? !0) && (this.isDirty = !1, this.moveFixedElements()), Od(t.container), Tr(a, { width: `${f}px`, height: `${b}px` }), t.renderer.boxWrapper.attr({ width: f, height: b, viewBox: [0, 0, f, b].join(" ") }), (L = t.chartBackground) == null || L.attr({ width: f, height: b }), Tr(s, { width: `${o}px`, height: `${n}px` }), Ar(i) || (s.scrollLeft = u * m, s.scrollTop = g * x);
          let y = d - r[0] - 1, v = c - r[3] - 1, w = d + l + r[2] + 1, k = c + p + r[1] + 1, S = c + p - u, M = d + l - g, C = [["M", 0, 0]];
          u ? C = [["M", 0, y], ["L", c - 1, y], ["L", c - 1, w], ["L", 0, w], ["Z"], ["M", S, y], ["L", o, y], ["L", o, w], ["L", S, w], ["Z"]] : g && (C = [["M", v, 0], ["L", v, d - 1], ["L", k, d - 1], ["L", k, 0], ["Z"], ["M", v, M], ["L", v, n], ["L", k, n], ["L", k, M], ["Z"]]), t.redrawTrigger !== "adjustHeight" && this.mask.attr({ d: C });
        }
        moveFixedElements() {
          let t, { container: e, inverted: i, scrollablePixelsX: s, scrollablePixelsY: r } = this.chart, o = this.fixedRenderer, n = zi.fixedSelectors;
          if (s && !i ? t = ".highcharts-yaxis" : s && i || r && !i ? t = ".highcharts-xaxis" : r && i && (t = ".highcharts-yaxis"), t && !(this.chart.hasParallelCoordinates && t === ".highcharts-yaxis")) for (let a of [`${t}:not(.highcharts-radial-axis)`, `${t}-labels:not(.highcharts-radial-axis-labels)`]) kn(n, a);
          else for (let a of [".highcharts-xaxis", ".highcharts-yaxis"]) for (let l of [`${a}:not(.highcharts-radial-axis)`, `${a}-labels:not(.highcharts-radial-axis-labels)`]) Ed(n, l);
          for (let a of n) [].forEach.call(e.querySelectorAll(a), (l) => {
            (l.namespaceURI === o.SVG_NS ? o.box : o.box.parentNode).appendChild(l), l.style.pointerEvents = "auto";
          });
        }
      }
      zi.fixedSelectors = [".highcharts-breadcrumbs-group", ".highcharts-contextbutton", ".highcharts-caption", ".highcharts-credits", ".highcharts-drillup-button", ".highcharts-legend", ".highcharts-legend-checkbox", ".highcharts-navigator-series", ".highcharts-navigator-xaxis", ".highcharts-navigator-yaxis", ".highcharts-navigator", ".highcharts-range-selector-group", ".highcharts-reset-zoom", ".highcharts-scrollbar", ".highcharts-subtitle", ".highcharts-title"];
      let { format: Dd } = be, { series: Bd } = Ot, { destroyObjectProperties: Rd, fireEvent: Mn, getAlignFactor: Pr, isNumber: Or, pick: Ni } = R, Sn = class {
        constructor(h, t, e, i, s) {
          let r = h.chart.inverted, o = h.reversed;
          this.axis = h;
          let n = this.isNegative = !!e != !!o;
          this.options = t = t || {}, this.x = i, this.total = null, this.cumulative = null, this.points = {}, this.hasValidPoints = !1, this.stack = s, this.leftCliff = 0, this.rightCliff = 0, this.alignOptions = { align: t.align || (r ? n ? "left" : "right" : "center"), verticalAlign: t.verticalAlign || (r ? "middle" : n ? "bottom" : "top"), y: t.y, x: t.x }, this.textAlign = t.textAlign || (r ? n ? "right" : "left" : "center");
        }
        destroy() {
          Rd(this, this.axis);
        }
        render(h) {
          let t = this.axis.chart, e = this.options, i = e.format, s = i ? Dd(i, this, t) : e.formatter.call(this);
          if (this.label) this.label.attr({ text: s, visibility: "hidden" });
          else {
            this.label = t.renderer.label(s, null, void 0, e.shape, void 0, void 0, e.useHTML, !1, "stack-labels");
            let r = { r: e.borderRadius || 0, text: s, padding: Ni(e.padding, 5), visibility: "hidden" };
            t.styledMode || (r.fill = e.backgroundColor, r.stroke = e.borderColor, r["stroke-width"] = e.borderWidth, this.label.css(e.style || {})), this.label.attr(r), this.label.added || this.label.add(h);
          }
          this.label.labelrank = t.plotSizeY, Mn(this, "afterRender");
        }
        setOffset(h, t, e, i, s, r) {
          let { alignOptions: o, axis: n, label: a, options: l, textAlign: c } = this, d = n.chart, p = this.getStackBox({ xOffset: h, width: t, boxBottom: e, boxTop: i, defaultX: s, xAxis: r }), { verticalAlign: u } = o;
          if (a && p) {
            let g = a.getBBox(void 0, 0), m = a.padding, x = Ni(l.overflow, "justify") === "justify", f;
            o.x = l.x || 0, o.y = l.y || 0;
            let { x: b, y } = this.adjustStackPosition({ labelBox: g, verticalAlign: u, textAlign: c });
            p.x -= b, p.y -= y, a.align(o, !1, p), (f = d.isInsidePlot(a.alignAttr.x + o.x + b, a.alignAttr.y + o.y + y)) || (x = !1), x && Bd.prototype.justifyDataLabel.call(n, a, o, a.alignAttr, g, p), a.attr({ x: a.alignAttr.x, y: a.alignAttr.y, rotation: l.rotation, rotationOriginX: g.width * Pr(l.textAlign || "center"), rotationOriginY: g.height / 2 }), Ni(!x && l.crop, !0) && (f = Or(a.x) && Or(a.y) && d.isInsidePlot(a.x - m + (a.width || 0), a.y) && d.isInsidePlot(a.x + m, a.y)), a[f ? "show" : "hide"]();
          }
          Mn(this, "afterSetOffset", { xOffset: h, width: t });
        }
        adjustStackPosition({ labelBox: h, verticalAlign: t, textAlign: e }) {
          return { x: h.width / 2 + h.width / 2 * (2 * Pr(e) - 1), y: h.height / 2 * 2 * (1 - Pr(t)) };
        }
        getStackBox(h) {
          let t = this.axis, e = t.chart, { boxTop: i, defaultX: s, xOffset: r, width: o, boxBottom: n } = h, a = t.stacking.usePercentage ? 100 : Ni(i, this.total, 0), l = t.toPixels(a), c = h.xAxis || e.xAxis[0], d = Ni(s, c.translate(this.x)) + r, p = Math.abs(l - t.toPixels(n || Or(t.min) && t.logarithmic && t.logarithmic.lin2log(t.min) || 0)), u = e.inverted, g = this.isNegative;
          return u ? { x: (g ? l : l - p) - e.plotLeft, y: c.height - d - o + c.top - e.plotTop, width: p, height: o } : { x: d + c.transB - e.plotLeft, y: (g ? l - p : l) - e.plotTop, width: o, height: p };
        }
      }, { getDeferredAnimation: zd } = $t, { series: { prototype: Nd } } = Ot, { addEvent: Cn, correctFloat: Wi, defined: Tn, destroyObjectProperties: Wd, fireEvent: Fd, isNumber: Lr, objectEach: si, pick: Er } = R;
      function Hd() {
        let h = this.inverted;
        this.axes.forEach((t) => {
          t.stacking && t.stacking.stacks && t.hasVisibleSeries && (t.stacking.oldStacks = t.stacking.stacks);
        }), this.series.forEach((t) => {
          let e = t.xAxis && t.xAxis.options || {};
          t.options.stacking && t.reserveSpace() && (t.stackKey = [t.type, Er(t.options.stack, ""), h ? e.top : e.left, h ? e.height : e.width].join(","));
        });
      }
      function Xd() {
        var t;
        let h = this.stacking;
        if (h) {
          let e = h.stacks;
          si(e, (i, s) => {
            Wd(i), delete e[s];
          }), (t = h.stackTotalGroup) == null || t.destroy();
        }
      }
      function Gd() {
        this.stacking || (this.stacking = new Vd(this));
      }
      function _d(h, t, e, i) {
        return !Tn(h) || h.x !== t || i && h.stackKey !== i ? h = { x: t, index: 0, key: i, stackKey: i } : h.index++, h.key = [e, t, h.index].join(","), h;
      }
      function Yd() {
        let h, t = this, e = t.yAxis, i = t.stackKey || "", s = e.stacking.stacks, r = t.getColumn("x", !0), o = t.options.stacking, n = t[o + "Stacker"];
        n && [i, "-" + i].forEach((a) => {
          var u;
          let l = r.length, c, d, p;
          for (; l--; ) c = r[l], h = t.getStackIndicator(h, c, t.index, a), d = (u = s[a]) == null ? void 0 : u[c], (p = d == null ? void 0 : d.points[h.key || ""]) && n.call(t, p, d, l);
        });
      }
      function jd(h, t, e) {
        let i = t.total ? 100 / t.total : 0;
        h[0] = Wi(h[0] * i), h[1] = Wi(h[1] * i), this.stackedYData[e] = h[1];
      }
      function Ud(h) {
        (this.is("column") || this.is("columnrange")) && (this.options.centerInCategory && this.chart.series.length > 1 ? Nd.setStackedPoints.call(this, h, "group") : h.stacking.resetStacks());
      }
      function $d(h, t) {
        var M, C;
        let e, i, s, r, o, n, a, l = t || this.options.stacking;
        if (!l || !this.reserveSpace() || ({ group: "xAxis" }[l] || "yAxis") !== h.coll) return;
        let c = this.getColumn("x", !0), d = this.getColumn(this.pointValKey || "y", !0), p = [], u = d.length, g = this.options, m = g.threshold || 0, x = g.startFromThreshold ? m : 0, f = g.stack, b = t ? `${this.type},${l}` : this.stackKey || "", y = "-" + b, v = this.negStacks, w = h.stacking, k = w.stacks, S = w.oldStacks;
        for (w.stacksTouched += 1, a = 0; a < u; a++) {
          let L = c[a] || 0, E = d[a], B = Lr(E) && E || 0;
          n = (e = this.getStackIndicator(e, L, this.index)).key || "", k[o = (i = v && B < (x ? 0 : m)) ? y : b] || (k[o] = {}), k[o][L] || ((M = S[o]) != null && M[L] ? (k[o][L] = S[o][L], k[o][L].total = null) : k[o][L] = new Sn(h, h.options.stackLabels, !!i, L, f)), s = k[o][L], E !== null ? (s.points[n] = s.points[this.index] = [Er(s.cumulative, x)], Tn(s.cumulative) || (s.base = n), s.touched = w.stacksTouched, e.index > 0 && this.singleStacks === !1 && (s.points[n][0] = s.points[this.index + "," + L + ",0"][0])) : (delete s.points[n], delete s.points[this.index]);
          let O = s.total || 0;
          l === "percent" ? (r = i ? b : y, O = v && ((C = k[r]) != null && C[L]) ? (r = k[r][L]).total = Math.max(r.total || 0, O) + Math.abs(B) : Wi(O + Math.abs(B))) : l === "group" ? Lr(E) && O++ : O = Wi(O + B), l === "group" ? s.cumulative = (O || 1) - 1 : s.cumulative = Wi(Er(s.cumulative, x) + B), s.total = O, E !== null && (s.points[n].push(s.cumulative), p[a] = s.cumulative, s.hasValidPoints = !0);
        }
        l === "percent" && (w.usePercentage = !0), l !== "group" && (this.stackedYData = p), w.oldStacks = {};
      }
      class Vd {
        constructor(t) {
          this.oldStacks = {}, this.stacks = {}, this.stacksTouched = 0, this.axis = t;
        }
        buildStacks() {
          let t, e, i = this.axis, s = i.series, r = i.coll === "xAxis", o = i.options.reversedStacks, n = s.length;
          for (this.resetStacks(), this.usePercentage = !1, e = n; e--; ) t = s[o ? e : n - e - 1], r && t.setGroupedPoints(i), t.setStackedPoints(i);
          if (!r) for (e = 0; e < n; e++) s[e].modifyStacks();
          Fd(i, "afterBuildStacks");
        }
        cleanStacks() {
          this.oldStacks && (this.stacks = this.oldStacks, si(this.stacks, (t) => {
            si(t, (e) => {
              e.cumulative = e.total;
            });
          }));
        }
        resetStacks() {
          si(this.stacks, (t) => {
            si(t, (e, i) => {
              Lr(e.touched) && e.touched < this.stacksTouched ? (e.destroy(), delete t[i]) : (e.total = null, e.cumulative = null);
            });
          });
        }
        renderStackTotals() {
          var n;
          let t = this.axis, e = t.chart, i = e.renderer, s = this.stacks, r = zd(e, ((n = t.options.stackLabels) == null ? void 0 : n.animation) || !1), o = this.stackTotalGroup = this.stackTotalGroup || i.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add();
          o.translate(e.plotLeft, e.plotTop), si(s, (a) => {
            si(a, (l) => {
              l.render(o);
            });
          }), o.animate({ opacity: 1 }, r);
        }
      }
      (Ne || (Ne = {})).compose = function(h, t, e) {
        let i = t.prototype, s = e.prototype;
        i.getStacks || (Cn(h, "init", Gd), Cn(h, "destroy", Xd), i.getStacks = Hd, s.getStackIndicator = _d, s.modifyStacks = Yd, s.percentStacker = jd, s.setGroupedPoints = Ud, s.setStackedPoints = $d);
      };
      let qd = Ne, { defined: Kd, merge: An, isObject: Zd } = R;
      class Pn extends ce {
        drawGraph() {
          let t = this.options, e = (this.gappedPath || this.getGraphPath).call(this), i = this.chart.styledMode;
          [this, ...this.zones].forEach((s, r) => {
            let o, n = s.graph, a = n ? "animate" : "attr", l = s.dashStyle || t.dashStyle;
            n ? (n.endX = this.preventGraphAnimation ? null : e.xMap, n.animate({ d: e })) : e.length && (s.graph = n = this.chart.renderer.path(e).addClass("highcharts-graph" + (r ? ` highcharts-zone-graph-${r - 1} ` : " ") + (r && s.className || "")).attr({ zIndex: 1 }).add(this.group)), n && !i && (o = { stroke: !r && t.lineColor || s.color || this.color || "#cccccc", "stroke-width": t.lineWidth || 0, fill: this.fillGraph && this.color || "none" }, l ? o.dashstyle = l : t.linecap !== "square" && (o["stroke-linecap"] = o["stroke-linejoin"] = "round"), n[a](o).shadow(t.shadow && An({ filterUnits: "userSpaceOnUse" }, Zd(t.shadow) ? t.shadow : {}))), n && (n.startX = e.xMap, n.isArea = e.isArea);
          });
        }
        getGraphPath(t, e, i) {
          let s = this, r = s.options, o = [], n = [], a, l = r.step, c = (t = t || s.points).reversed;
          return c && t.reverse(), (l = { right: 1, center: 2 }[l] || l && 3) && c && (l = 4 - l), (t = this.getValidPoints(t, !1, !(r.connectNulls && !e && !i))).forEach(function(d, p) {
            let u, g = d.plotX, m = d.plotY, x = t[p - 1], f = d.isNull || typeof m != "number";
            (d.leftCliff || x && x.rightCliff) && !i && (a = !0), f && !Kd(e) && p > 0 ? a = !r.connectNulls : f && !e ? a = !0 : (p === 0 || a ? u = [["M", d.plotX, d.plotY]] : s.getPointSpline ? u = [s.getPointSpline(t, d, p)] : l ? (u = l === 1 ? [["L", x.plotX, m]] : l === 2 ? [["L", (x.plotX + g) / 2, x.plotY], ["L", (x.plotX + g) / 2, m]] : [["L", g, x.plotY]]).push(["L", g, m]) : u = [["L", g, m]], n.push(d.x), l && (n.push(d.x), l === 2 && n.push(d.x)), o.push.apply(o, u), a = !1);
          }), o.xMap = n, s.graphPath = o, o;
        }
      }
      Pn.defaultOptions = An(ce.defaultOptions, { legendSymbol: "lineMarker" }), Ot.registerSeriesType("line", Pn);
      let { seriesTypes: { line: Ir } } = Ot, { extend: Jd, merge: Qd, objectEach: tc, pick: Ms } = R;
      class Dr extends Ir {
        drawGraph() {
          this.areaPath = [], super.drawGraph.apply(this);
          let { areaPath: t, options: e } = this;
          [this, ...this.zones].forEach((i, s) => {
            let r = {}, o = i.fillColor || e.fillColor, n = i.area, a = n ? "animate" : "attr";
            n ? (n.endX = this.preventGraphAnimation ? null : t.xMap, n.animate({ d: t })) : (r.zIndex = 0, (n = i.area = this.chart.renderer.path(t).addClass("highcharts-area" + (s ? ` highcharts-zone-area-${s - 1} ` : " ") + (s && i.className || "")).add(this.group)).isArea = !0), this.chart.styledMode || (r.fill = o || i.color || this.color, r["fill-opacity"] = o ? 1 : e.fillOpacity ?? 0.75, n.css({ pointerEvents: this.stickyTracking ? "none" : "auto" })), n[a](r), n.startX = t.xMap, n.shiftUnit = e.step ? 2 : 1;
          });
        }
        getGraphPath(t) {
          let e, i, s, r = Ir.prototype.getGraphPath, o = this.options, n = o.stacking, a = this.yAxis, l = [], c = [], d = this.index, p = a.stacking.stacks[this.stackKey], u = o.threshold, g = Math.round(a.getThreshold(o.threshold)), m = Ms(o.connectNulls, n === "percent"), x = function(k, S, M) {
            let C = t[k], L = n && p[C.x].points[d], E = C[M + "Null"] || 0, B = C[M + "Cliff"] || 0, O, D, G = !0;
            B || E ? (O = (E ? L[0] : L[1]) + B, D = L[0] + B, G = !!E) : !n && t[S] && t[S].isNull && (O = D = u), O !== void 0 && (c.push({ plotX: e, plotY: O === null ? g : a.getThreshold(O), isNull: G, isCliff: !0 }), l.push({ plotX: e, plotY: D === null ? g : a.getThreshold(D), doCurve: !1 }));
          };
          t = t || this.points, n && (t = this.getStackPoints(t));
          for (let k = 0, S = t.length; k < S; ++k) n || (t[k].leftCliff = t[k].rightCliff = t[k].leftNull = t[k].rightNull = void 0), i = t[k].isNull, e = Ms(t[k].rectPlotX, t[k].plotX), s = n ? Ms(t[k].yBottom, g) : g, i && !m || (m || x(k, k - 1, "left"), i && !n && m || (c.push(t[k]), l.push({ x: k, plotX: e, plotY: s })), m || x(k, k + 1, "right"));
          let f = r.call(this, c, !0, !0);
          l.reversed = !0;
          let b = r.call(this, l, !0, !0), y = b[0];
          y && y[0] === "M" && (b[0] = ["L", y[1], y[2]]);
          let v = f.concat(b);
          v.length && v.push(["Z"]);
          let w = r.call(this, c, !1, m);
          return this.chart.series.length > 1 && n && c.some((k) => k.isCliff) && (v.hasStackedCliffs = w.hasStackedCliffs = !0), v.xMap = f.xMap, this.areaPath = v, w;
        }
        getStackPoints(t) {
          let e = this, i = [], s = [], r = this.xAxis, o = this.yAxis, n = o.stacking.stacks[this.stackKey], a = {}, l = o.series, c = l.length, d = o.options.reversedStacks ? 1 : -1, p = l.indexOf(e);
          if (t = t || this.points, this.options.stacking) {
            for (let g = 0; g < t.length; g++) t[g].leftNull = t[g].rightNull = void 0, a[t[g].x] = t[g];
            tc(n, function(g, m) {
              g.total !== null && s.push(m);
            }), s.sort(function(g, m) {
              return g - m;
            });
            let u = l.map((g) => g.visible);
            s.forEach(function(g, m) {
              let x = 0, f, b;
              if (a[g] && !a[g].isNull) i.push(a[g]), [-1, 1].forEach(function(y) {
                let v = y === 1 ? "rightNull" : "leftNull", w = n[s[m + y]], k = 0;
                if (w) {
                  let S = p;
                  for (; S >= 0 && S < c; ) {
                    let M = l[S].index;
                    !(f = w.points[M]) && (M === e.index ? a[g][v] = !0 : u[S] && (b = n[g].points[M]) && (k -= b[1] - b[0])), S += d;
                  }
                }
                a[g][y === 1 ? "rightCliff" : "leftCliff"] = k;
              });
              else {
                let y = p;
                for (; y >= 0 && y < c; ) {
                  let v = l[y].index;
                  if (f = n[g].points[v]) {
                    x = f[1];
                    break;
                  }
                  y += d;
                }
                x = Ms(x, 0), x = o.translate(x, 0, 1, 0, 1), i.push({ isNull: !0, plotX: r.translate(g, 0, 0, 0, 1), x: g, plotY: x, yBottom: x });
              }
            });
          }
          return i;
        }
      }
      Dr.defaultOptions = Qd(Ir.defaultOptions, { threshold: 0, legendSymbol: "areaMarker" }), Jd(Dr.prototype, { singleStacks: !1 }), Ot.registerSeriesType("area", Dr);
      let { line: On } = Ot.seriesTypes, { merge: ec, pick: Ss } = R;
      class Br extends On {
        getPointSpline(t, e, i) {
          let s, r, o, n, a = e.plotX || 0, l = e.plotY || 0, c = t[i - 1], d = t[i + 1];
          function p(g) {
            return g && !g.isNull && g.doCurve !== !1 && !e.isCliff;
          }
          if (p(c) && p(d)) {
            let g = c.plotX || 0, m = c.plotY || 0, x = d.plotX || 0, f = d.plotY || 0, b = 0;
            s = (1.5 * a + g) / 2.5, r = (1.5 * l + m) / 2.5, o = (1.5 * a + x) / 2.5, n = (1.5 * l + f) / 2.5, o !== s && (b = (n - r) * (o - a) / (o - s) + l - n), r += b, n += b, r > m && r > l ? (r = Math.max(m, l), n = 2 * l - r) : r < m && r < l && (r = Math.min(m, l), n = 2 * l - r), n > f && n > l ? (n = Math.max(f, l), r = 2 * l - n) : n < f && n < l && (n = Math.min(f, l), r = 2 * l - n), e.rightContX = o, e.rightContY = n, e.controlPoints = { low: [s, r], high: [o, n] };
          }
          let u = ["C", Ss(c.rightContX, c.plotX, 0), Ss(c.rightContY, c.plotY, 0), Ss(s, a, 0), Ss(r, l, 0), a, l];
          return c.rightContX = c.rightContY = void 0, u;
        }
      }
      Br.defaultOptions = ec(On.defaultOptions), Ot.registerSeriesType("spline", Br);
      let Ln = Br, { area: ic, area: { prototype: Rr } } = Ot.seriesTypes, { extend: sc, merge: rc } = R;
      class zr extends Ln {
      }
      zr.defaultOptions = rc(Ln.defaultOptions, ic.defaultOptions), sc(zr.prototype, { getGraphPath: Rr.getGraphPath, getStackPoints: Rr.getStackPoints, drawGraph: Rr.drawGraph }), Ot.registerSeriesType("areaspline", zr);
      let { animObject: oc } = $t, { parse: nc } = zt, { noop: ac } = P, { clamp: Cs, crisp: Ts, defined: En, extend: In, fireEvent: Dn, isArray: Bn, isNumber: As, merge: Nr, pick: wi, objectEach: hc } = R;
      class Ps extends ce {
        animate(t) {
          let e, i, s = this, r = this.yAxis, o = r.pos, n = r.reversed, a = s.options, { clipOffset: l, inverted: c } = this.chart, d = {}, p = c ? "translateX" : "translateY";
          t && l ? (d.scaleY = 1e-3, i = Cs(r.toPixels(a.threshold || 0), o, o + r.len), c ? (i += n ? -Math.floor(l[0]) : Math.ceil(l[2]), d.translateX = i - r.len) : (i += n ? Math.ceil(l[0]) : -Math.floor(l[2]), d.translateY = i), s.clipBox && s.setClip(), s.group.attr(d)) : (e = Number(s.group.attr(p)), s.group.animate({ scaleY: 1 }, In(oc(s.options.animation), { step: function(u, g) {
            s.group && (d[p] = e + g.pos * (o - e), s.group.attr(d));
          } })));
        }
        init(t, e) {
          super.init.apply(this, arguments);
          let i = this;
          (t = i.chart).hasRendered && t.series.forEach(function(s) {
            s.type === i.type && (s.isDirty = !0);
          });
        }
        getColumnMetrics() {
          var m, x;
          let t = this, e = t.options, i = t.xAxis, s = t.yAxis, r = i.options.reversedStacks, o = i.reversed && !r || !i.reversed && r, n = {}, a, l = 0;
          e.grouping === !1 ? l = 1 : t.chart.series.forEach(function(f) {
            let b, y = f.yAxis, v = f.options;
            f.type === t.type && f.reserveSpace() && s.len === y.len && s.pos === y.pos && (v.stacking && v.stacking !== "group" ? (n[a = f.stackKey] === void 0 && (n[a] = l++), b = n[a]) : v.grouping !== !1 && (b = l++), f.columnIndex = b);
          });
          let c = Math.min(Math.abs(i.transA) * (!((m = i.brokenAxis) != null && m.hasBreaks) && ((x = i.ordinal) == null ? void 0 : x.slope) || e.pointRange || i.closestPointRange || i.tickInterval || 1), i.len), d = c * e.groupPadding, p = (c - 2 * d) / (l || 1), u = Math.min(e.maxPointWidth || i.len, wi(e.pointWidth, p * (1 - 2 * e.pointPadding))), g = (t.columnIndex || 0) + (o ? 1 : 0);
          return t.columnMetrics = { width: u, offset: (p - u) / 2 + (d + g * p - c / 2) * (o ? -1 : 1), paddedWidth: p, columnCount: l }, t.columnMetrics;
        }
        crispCol(t, e, i, s) {
          let r = this.borderWidth, o = this.chart.inverted;
          return s = Ts(e + s, r, o) - (e = Ts(e, r, o)), this.options.crisp && (i = Ts(t + i, r) - (t = Ts(t, r))), { x: t, y: e, width: i, height: s };
        }
        adjustForMissingColumns(t, e, i, s) {
          var r;
          if (!i.isNull && s.columnCount > 1) {
            let o = this.xAxis.series.filter((c) => c.visible).map((c) => c.index), n = 0, a = 0;
            hc((r = this.xAxis.stacking) == null ? void 0 : r.stacks, (c) => {
              var g;
              let d = typeof i.x == "number" ? (g = c[i.x.toString()]) == null ? void 0 : g.points : void 0, p = d == null ? void 0 : d[this.index], u = {};
              if (d && Bn(p)) {
                let m = this.index, x = Object.keys(d).filter((f) => !f.match(",") && d[f] && d[f].length > 1).map(parseFloat).filter((f) => o.indexOf(f) !== -1).filter((f) => {
                  let b = this.chart.series[f].options, y = b.stacking && b.stack;
                  if (En(y)) {
                    if (As(u[y])) return m === f && (m = u[y]), !1;
                    u[y] = f;
                  }
                  return !0;
                }).sort((f, b) => b - f);
                n = x.indexOf(m), a = x.length;
              }
            }), n = this.xAxis.reversed ? a - 1 - n : n;
            let l = (a - 1) * s.paddedWidth + e;
            t = (i.plotX || 0) + l / 2 - e - n * s.paddedWidth;
          }
          return t;
        }
        translate() {
          let t = this, e = t.chart, i = t.options, s = t.dense = t.closestPointRange * t.xAxis.transA < 2, r = t.borderWidth = wi(i.borderWidth, s ? 0 : 1), o = t.xAxis, n = t.yAxis, a = i.threshold, l = wi(i.minPointLength, 5), c = t.getColumnMetrics(), d = c.width, p = t.pointXOffset = c.offset, u = t.dataMin, g = t.dataMax, m = t.translatedThreshold = n.getThreshold(a), x = t.barW = Math.max(d, 1 + 2 * r);
          i.pointPadding && i.crisp && (x = Math.ceil(x)), ce.prototype.translate.apply(t), t.points.forEach(function(f) {
            let b = wi(f.yBottom, m), y = 999 + Math.abs(b), v = f.plotX || 0, w = Cs(f.plotY, -y, n.len + y), k, S = Math.min(w, b), M = Math.max(w, b) - S, C = d, L = v + p, E = x;
            l && Math.abs(M) < l && (M = l, k = !n.reversed && !f.negative || n.reversed && f.negative, As(a) && As(g) && f.y === a && g <= a && (n.min || 0) < a && (u !== g || (n.max || 0) <= a) && (k = !k, f.negative = !f.negative), S = Math.abs(S - m) > l ? b - l : m - (k ? l : 0)), En(f.options.pointWidth) && (L -= Math.round(((C = E = Math.ceil(f.options.pointWidth)) - d) / 2)), i.centerInCategory && (L = t.adjustForMissingColumns(L, C, f, c)), f.barX = L, f.pointWidth = C, f.tooltipPos = e.inverted ? [Cs(n.len + n.pos - e.plotLeft - w, n.pos - e.plotLeft, n.len + n.pos - e.plotLeft), o.len + o.pos - e.plotTop - L - E / 2, M] : [o.left - e.plotLeft + L + E / 2, Cs(w + n.pos - e.plotTop, n.pos - e.plotTop, n.len + n.pos - e.plotTop), M], f.shapeType = t.pointClass.prototype.shapeType || "roundedRect", f.shapeArgs = t.crispCol(L, f.isNull ? m : S, E, f.isNull ? 0 : M);
          }), Dn(this, "afterColumnTranslate");
        }
        drawGraph() {
          this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
        }
        pointAttribs(t, e) {
          let i = this.options, s = this.pointAttrToOptions || {}, r = s.stroke || "borderColor", o = s["stroke-width"] || "borderWidth", n, a, l, c = t && t.color || this.color, d = t && t[r] || i[r] || c, p = t && t.options.dashStyle || i.dashStyle, u = t && t[o] || i[o] || this[o] || 0, g = wi(t && t.opacity, i.opacity, 1);
          t && this.zones.length && (a = t.getZone(), c = t.options.color || a && (a.color || t.nonZonedColor) || this.color, a && (d = a.borderColor || d, p = a.dashStyle || p, u = a.borderWidth || u)), e && t && (l = (n = Nr(i.states[e], t.options.states && t.options.states[e] || {})).brightness, c = n.color || l !== void 0 && nc(c).brighten(n.brightness).get() || c, d = n[r] || d, u = n[o] || u, p = n.dashStyle || p, g = wi(n.opacity, g));
          let m = { fill: c, stroke: d, "stroke-width": u, opacity: g };
          return p && (m.dashstyle = p), m;
        }
        drawPoints(t = this.points) {
          let e, i = this, s = this.chart, r = i.options, o = s.renderer, n = r.animationLimit || 250;
          t.forEach(function(a) {
            let l = a.plotY, c = a.graphic, d = !!c, p = c && s.pointCount < n ? "animate" : "attr";
            As(l) && a.y !== null ? (e = a.shapeArgs, c && a.hasNewShapeType() && (c = c.destroy()), i.enabledDataSorting && (a.startXPos = i.xAxis.reversed ? -(e && e.width || 0) : i.xAxis.width), !c && (a.graphic = c = o[a.shapeType](e).add(a.group || i.group), c && i.enabledDataSorting && s.hasRendered && s.pointCount < n && (c.attr({ x: a.startXPos }), d = !0, p = "animate")), c && d && c[p](Nr(e)), s.styledMode || c[p](i.pointAttribs(a, a.selected && "select")).shadow(a.allowShadow !== !1 && r.shadow), c && (c.addClass(a.getClassName(), !0), c.attr({ visibility: a.visible ? "inherit" : "hidden" }))) : c && (a.graphic = c.destroy());
          });
        }
        drawTracker(t = this.points) {
          let e, i = this, s = i.chart, r = s.pointer, o = function(n) {
            r == null || r.normalize(n);
            let a = r == null ? void 0 : r.getPointFromEvent(n), l = !s.scrollablePlotArea || s.isInsidePlot(n.chartX - s.plotLeft, n.chartY - s.plotTop, { visiblePlotOnly: !0 });
            r && a && i.options.enableMouseTracking && l && (r.isDirectTouch = !0, a.onMouseOver(n));
          };
          t.forEach(function(n) {
            e = Bn(n.dataLabels) ? n.dataLabels : n.dataLabel ? [n.dataLabel] : [], n.graphic && (n.graphic.element.point = n), e.forEach(function(a) {
              (a.div || a.element).point = n;
            });
          }), i._hasTracking || (i.trackerGroups.forEach(function(n) {
            i[n] && (i[n].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(a) {
              r == null || r.onTrackerMouseOut(a);
            }).on("touchstart", o), !s.styledMode && i.options.cursor && i[n].css({ cursor: i.options.cursor }));
          }), i._hasTracking = !0), Dn(this, "afterDrawTracker");
        }
        remove() {
          let t = this, e = t.chart;
          e.hasRendered && e.series.forEach(function(i) {
            i.type === t.type && (i.isDirty = !0);
          }), ce.prototype.remove.apply(t, arguments);
        }
      }
      Ps.defaultOptions = Nr(ce.defaultOptions, { borderRadius: 3, centerInCategory: !1, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: 0.1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }), In(Ps.prototype, { directTouch: !0, getSymbol: ac, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }), Ot.registerSeriesType("column", Ps);
      let Os = Ps, { getDeferredAnimation: lc } = $t, { format: dc } = be, { defined: ri, extend: Rn, fireEvent: Wr, getAlignFactor: zn, isArray: Ve, isString: Fr, merge: Fi, objectEach: cc, pick: Hi, pInt: pc, splat: Nn } = R;
      (function(h) {
        function t() {
          return a(this).some((c) => c == null ? void 0 : c.enabled);
        }
        function e(c, d, p, u, g) {
          var L;
          let { chart: m, enabledDataSorting: x } = this, f = this.isCartesian && m.inverted, b = c.plotX, y = c.plotY, v = p.rotation || 0, w = ri(b) && ri(y) && m.isInsidePlot(b, Math.round(y), { inverted: f, paneCoordinates: !0, series: this }), k = v === 0 && Hi(p.overflow, x ? "none" : "justify") === "justify", S = this.visible && c.visible !== !1 && ri(b) && (c.series.forceDL || x && !k || w || Hi(p.inside, !!this.options.stacking) && u && m.isInsidePlot(b, f ? u.x + 1 : u.y + u.height - 1, { inverted: f, paneCoordinates: !0, series: this })), M = c.pos();
          if (S && M) {
            var C;
            let E = d.getBBox(), B = d.getBBox(void 0, 0);
            if (u = Rn({ x: M[0], y: Math.round(M[1]), width: 0, height: 0 }, u || {}), p.alignTo === "plotEdges" && this.isCartesian && (u[f ? "x" : "y"] = 0, u[f ? "width" : "height"] = ((L = this.yAxis) == null ? void 0 : L.len) || 0), Rn(p, { width: E.width, height: E.height }), C = u, x && this.xAxis && !k && this.setDataLabelStartPos(c, d, g, w, C), d.align(Fi(p, { width: B.width, height: B.height }), !1, u, !1), d.alignAttr.x += zn(p.align) * (B.width - E.width), d.alignAttr.y += zn(p.verticalAlign) * (B.height - E.height), d[d.placed ? "animate" : "attr"]({ x: d.alignAttr.x + (E.width - B.width) / 2, y: d.alignAttr.y + (E.height - B.height) / 2, rotationOriginX: (d.width || 0) / 2, rotationOriginY: (d.height || 0) / 2 }), k && u.height >= 0) this.justifyDataLabel(d, p, d.alignAttr, E, u, g);
            else if (Hi(p.crop, !0)) {
              let { x: O, y: D } = d.alignAttr;
              S = m.isInsidePlot(O, D, { paneCoordinates: !0, series: this }) && m.isInsidePlot(O + E.width - 1, D + E.height - 1, { paneCoordinates: !0, series: this });
            }
            p.shape && !v && d[g ? "attr" : "animate"]({ anchorX: M[0], anchorY: M[1] });
          }
          g && x && (d.placed = !1), S || x && !k ? (d.show(), d.placed = !0) : (d.hide(), d.placed = !1);
        }
        function i() {
          return this.plotGroup("dataLabelsGroup", "data-labels", this.hasRendered ? "inherit" : "hidden", this.options.dataLabels.zIndex || 6);
        }
        function s(c) {
          let d = this.hasRendered || 0, p = this.initDataLabelsGroup().attr({ opacity: +d });
          return !d && p && (this.visible && p.show(), this.options.animation ? p.animate({ opacity: 1 }, c) : p.attr({ opacity: 1 })), p;
        }
        function r(c) {
          var S;
          let d;
          c = c || this.points;
          let p = this, u = p.chart, g = p.options, m = u.renderer, { backgroundColor: x, plotBackgroundColor: f } = u.options.chart, b = m.getContrast(Fr(f) && f || Fr(x) && x || "#000000"), y = a(p), { animation: v, defer: w } = y[0], k = w ? lc(u, v, p) : { defer: 0, duration: 0 };
          Wr(this, "drawDataLabels"), (S = p.hasDataLabels) != null && S.call(p) && (d = this.initDataLabels(k), c.forEach((M) => {
            var E, B;
            let C = M.dataLabels || [];
            Nn(n(y, M.dlOptions || ((E = M.options) == null ? void 0 : E.dataLabels))).forEach((O, D) => {
              let G = O.enabled && (M.visible || M.dataLabelOnHidden) && (!M.isNull || M.dataLabelOnNull) && function(qt, Nt) {
                let Ut = Nt.filter;
                if (Ut) {
                  let Wt = Ut.operator, Pt = qt[Ut.property], Yt = Ut.value;
                  return Wt === ">" && Pt > Yt || Wt === "<" && Pt < Yt || Wt === ">=" && Pt >= Yt || Wt === "<=" && Pt <= Yt || Wt === "==" && Pt == Yt || Wt === "===" && Pt === Yt || Wt === "!=" && Pt != Yt || Wt === "!==" && Pt !== Yt;
                }
                return !0;
              }(M, O), { backgroundColor: Z, borderColor: F, distance: K, style: N = {} } = O, Y, $, at, ft = {}, Q = C[D], et = !Q, ut;
              G && ($ = ri(Y = Hi(O[M.formatPrefix + "Format"], O.format)) ? dc(Y, M, u) : (O[M.formatPrefix + "Formatter"] || O.formatter).call(M, O), at = O.rotation, !u.styledMode && (N.color = Hi(O.color, N.color, Fr(p.color) ? p.color : void 0, "#000000"), N.color === "contrast" ? (Z !== "none" && (ut = Z), M.contrastColor = m.getContrast(ut !== "auto" && ut || M.color || p.color), N.color = ut || !ri(K) && O.inside || 0 > pc(K || 0) || g.stacking ? M.contrastColor : b) : delete M.contrastColor, g.cursor && (N.cursor = g.cursor)), ft = { r: O.borderRadius || 0, rotation: at, padding: O.padding, zIndex: 1 }, u.styledMode || (ft.fill = Z === "auto" ? M.color : Z, ft.stroke = F === "auto" ? M.color : F, ft["stroke-width"] = O.borderWidth), cc(ft, (qt, Nt) => {
                qt === void 0 && delete ft[Nt];
              })), !Q || G && ri($) && !!Q.div == !!O.useHTML && (Q.rotation && O.rotation || Q.rotation === O.rotation) || (Q = void 0, et = !0), G && ri($) && (Q ? ft.text = $ : (Q = m.label($, 0, 0, O.shape, void 0, void 0, O.useHTML, void 0, "data-label")).addClass(" highcharts-data-label-color-" + M.colorIndex + " " + (O.className || "") + (O.useHTML ? " highcharts-tracker" : "")), Q && (Q.options = O, Q.attr(ft), u.styledMode ? N.width && Q.css({ width: N.width, textOverflow: N.textOverflow, whiteSpace: N.whiteSpace }) : Q.css(N).shadow(O.shadow), Wr(Q, "beforeAddingDataLabel", { labelOptions: O, point: M }), Q.added || Q.add(d), p.alignDataLabel(M, Q, O, void 0, et), Q.isActive = !0, C[D] && C[D] !== Q && C[D].destroy(), C[D] = Q));
            });
            let L = C.length;
            for (; L--; ) C[L] && C[L].isActive ? C[L].isActive = !1 : ((B = C[L]) == null || B.destroy(), C.splice(L, 1));
            M.dataLabel = C[0], M.dataLabels = C;
          })), Wr(this, "afterDrawDataLabels");
        }
        function o(c, d, p, u, g, m) {
          let x = this.chart, f = d.align, b = d.verticalAlign, y = c.box ? 0 : c.padding || 0, v = x.inverted ? this.yAxis : this.xAxis, w = v ? v.left - x.plotLeft : 0, k = x.inverted ? this.xAxis : this.yAxis, S = k ? k.top - x.plotTop : 0, { x: M = 0, y: C = 0 } = d, L, E;
          return (L = (p.x || 0) + y + w) < 0 && (f === "right" && M >= 0 ? (d.align = "left", d.inside = !0) : M -= L, E = !0), (L = (p.x || 0) + u.width - y + w) > x.plotWidth && (f === "left" && M <= 0 ? (d.align = "right", d.inside = !0) : M += x.plotWidth - L, E = !0), (L = p.y + y + S) < 0 && (b === "bottom" && C >= 0 ? (d.verticalAlign = "top", d.inside = !0) : C -= L, E = !0), (L = (p.y || 0) + u.height - y + S) > x.plotHeight && (b === "top" && C <= 0 ? (d.verticalAlign = "bottom", d.inside = !0) : C += x.plotHeight - L, E = !0), E && (d.x = M, d.y = C, c.placed = !m, c.align(d, void 0, g)), E;
        }
        function n(c, d) {
          let p = [], u;
          if (Ve(c) && !Ve(d)) p = c.map(function(g) {
            return Fi(g, d);
          });
          else if (Ve(d) && !Ve(c)) p = d.map(function(g) {
            return Fi(c, g);
          });
          else if (Ve(c) || Ve(d)) {
            if (Ve(c) && Ve(d)) for (u = Math.max(c.length, d.length); u--; ) p[u] = Fi(c[u], d[u]);
          } else p = Fi(c, d);
          return p;
        }
        function a(c) {
          var p, u;
          let d = c.chart.options.plotOptions;
          return Nn(n(n((p = d == null ? void 0 : d.series) == null ? void 0 : p.dataLabels, (u = d == null ? void 0 : d[c.type]) == null ? void 0 : u.dataLabels), c.options.dataLabels));
        }
        function l(c, d, p, u, g) {
          let m = this.chart, x = m.inverted, f = this.xAxis, b = f.reversed, y = ((x ? d.height : d.width) || 0) / 2, v = c.pointWidth, w = v ? v / 2 : 0;
          d.startXPos = x ? g.x : b ? -y - w : f.width - y + w, d.startYPos = x ? b ? this.yAxis.height - y + w : -y - w : g.y, u ? d.visibility === "hidden" && (d.show(), d.attr({ opacity: 0 }).animate({ opacity: 1 })) : d.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, d.hide), m.hasRendered && (p && d.attr({ x: d.startXPos, y: d.startYPos }), d.placed = !0);
        }
        h.compose = function(c) {
          let d = c.prototype;
          d.initDataLabels || (d.initDataLabels = s, d.initDataLabelsGroup = i, d.alignDataLabel = e, d.drawDataLabels = r, d.justifyDataLabel = o, d.setDataLabelStartPos = l, d.hasDataLabels = t);
        };
      })(ni || (ni = {}));
      let Ls = ni, { composed: uc } = P, { series: Wn } = Ot, { merge: gc, pick: Xi, pushUnique: fc } = R;
      (function(h) {
        function t(e, i, s, r, o) {
          let n = this.chart.inverted, a = e.series, l = (a.xAxis ? a.xAxis.len : this.chart.plotSizeX) || 0, c = (a.yAxis ? a.yAxis.len : this.chart.plotSizeY) || 0, d = e.dlBox || e.shapeArgs, p = Xi(e.below, e.plotY > Xi(this.translatedThreshold, c)), u = Xi(s.inside, !!this.options.stacking);
          if (d) {
            if (r = gc(d), !(s.overflow === "allow" && s.crop === !1)) {
              r.y < 0 && (r.height += r.y, r.y = 0);
              let g = r.y + r.height - c;
              g > 0 && g < r.height - 1 && (r.height -= g);
            }
            n && (r = { x: c - r.y - r.height, y: l - r.x - r.width, width: r.height, height: r.width }), u || (n ? (r.x += p ? 0 : r.width, r.width = 0) : (r.y += p ? r.height : 0, r.height = 0));
          }
          s.align = Xi(s.align, !n || u ? "center" : p ? "right" : "left"), s.verticalAlign = Xi(s.verticalAlign, n || u ? "middle" : p ? "top" : "bottom"), Wn.prototype.alignDataLabel.call(this, e, i, s, r, o), s.inside && e.contrastColor && i.css({ color: e.contrastColor });
        }
        h.compose = function(e) {
          Ls.compose(Wn), fc(uc, "ColumnDataLabel") && (e.prototype.alignDataLabel = t);
        };
      })(De || (De = {}));
      let mc = De, { extend: xc, merge: yc } = R;
      class Hr extends Os {
      }
      Hr.defaultOptions = yc(Os.defaultOptions, {}), xc(Hr.prototype, { inverted: !0 }), Ot.registerSeriesType("bar", Hr);
      let { column: bc, line: Fn } = Ot.seriesTypes, { addEvent: vc, extend: kc, merge: wc } = R;
      class Es extends Fn {
        applyJitter() {
          let t = this, e = this.options.jitter, i = this.points.length;
          e && this.points.forEach(function(s, r) {
            ["x", "y"].forEach(function(o, n) {
              if (e[o] && !s.isNull) {
                let a = `plot${o.toUpperCase()}`, l = t[`${o}Axis`], c = e[o] * l.transA;
                if (l && !l.logarithmic) {
                  let d = Math.max(0, (s[a] || 0) - c), p = Math.min(l.len, (s[a] || 0) + c);
                  s[a] = d + (p - d) * function(u) {
                    let g = 1e4 * Math.sin(u);
                    return g - Math.floor(g);
                  }(r + n * i), o === "x" && (s.clientX = s.plotX);
                }
              }
            });
          });
        }
        drawGraph() {
          this.options.lineWidth ? super.drawGraph() : this.graph && (this.graph = this.graph.destroy());
        }
      }
      Es.defaultOptions = wc(Fn.defaultOptions, { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.8em"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }), kc(Es.prototype, { drawTracker: bc.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"] }), vc(Es, "afterTranslate", function() {
        this.applyJitter();
      }), Ot.registerSeriesType("scatter", Es);
      let { deg2rad: Hn } = P, { fireEvent: Mc, isNumber: Xr, pick: Is, relativeLength: Sc } = R;
      (function(h) {
        h.getCenter = function() {
          let t = this.options, e = this.chart, i = 2 * (t.slicedOffset || 0), s = e.plotWidth - 2 * i, r = e.plotHeight - 2 * i, o = t.center, n = Math.min(s, r), a = t.thickness, l, c = t.size, d = t.innerSize || 0, p, u;
          typeof c == "string" && (c = parseFloat(c)), typeof d == "string" && (d = parseFloat(d));
          let g = [Is(o == null ? void 0 : o[0], "50%"), Is(o == null ? void 0 : o[1], "50%"), Is(c && c < 0 ? void 0 : t.size, "100%"), Is(d && d < 0 ? void 0 : t.innerSize || 0, "0%")];
          for (!e.angular || this instanceof ce || (g[3] = 0), p = 0; p < 4; ++p) u = g[p], l = p < 2 || p === 2 && /%$/.test(u), g[p] = Sc(u, [s, r, n, g[2]][p]) + (l ? i : 0);
          return g[3] > g[2] && (g[3] = g[2]), Xr(a) && 2 * a < g[2] && a > 0 && (g[3] = g[2] - 2 * a), Mc(this, "afterGetCenter", { positions: g }), g;
        }, h.getStartAndEndRadians = function(t, e) {
          let i = Xr(t) ? t : 0, s = Xr(e) && e > i && e - i < 360 ? e : i + 360;
          return { start: Hn * (i + -90), end: Hn * (s + -90) };
        };
      })(Ke || (Ke = {}));
      let Xn = Ke, { setAnimation: Cc } = $t, { addEvent: Gn, defined: Tc, extend: Ac, isNumber: Pc, pick: Oc, relativeLength: Lc } = R;
      class _n extends Ge {
        getConnectorPath(t) {
          let e = t.dataLabelPosition, i = t.options || {}, s = i.connectorShape, r = this.connectorShapes[s] || s;
          return e && r.call(this, { ...e.computed, alignment: e.alignment }, e.connectorPosition, i) || [];
        }
        getTranslate() {
          return this.sliced && this.slicedTranslation || { translateX: 0, translateY: 0 };
        }
        haloPath(t) {
          let e = this.shapeArgs;
          return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, { innerR: e.r - 1, start: e.start, end: e.end, borderRadius: e.borderRadius });
        }
        constructor(t, e, i) {
          super(t, e, i), this.half = 0, this.name ?? (this.name = "Slice");
          let s = (r) => {
            this.slice(r.type === "select");
          };
          Gn(this, "select", s), Gn(this, "unselect", s);
        }
        isValid() {
          return Pc(this.y) && this.y >= 0;
        }
        setVisible(t, e = !0) {
          t !== this.visible && this.update({ visible: t ?? !this.visible }, e, void 0, !1);
        }
        slice(t, e, i) {
          let s = this.series;
          Cc(i, s.chart), e = Oc(e, !0), this.sliced = this.options.sliced = t = Tc(t) ? t : !this.sliced, s.options.data[s.data.indexOf(this)] = this.options, this.graphic && this.graphic.animate(this.getTranslate());
        }
      }
      Ac(_n.prototype, { connectorShapes: { fixedOffset: function(h, t, e) {
        let i = t.breakAt, s = t.touchingSliceAt, r = e.softConnector ? ["C", h.x + (h.alignment === "left" ? -5 : 5), h.y, 2 * i.x - s.x, 2 * i.y - s.y, i.x, i.y] : ["L", i.x, i.y];
        return [["M", h.x, h.y], r, ["L", s.x, s.y]];
      }, straight: function(h, t) {
        let e = t.touchingSliceAt;
        return [["M", h.x, h.y], ["L", e.x, e.y]];
      }, crookedLine: function(h, t, e) {
        let { angle: i = this.angle || 0, breakAt: s, touchingSliceAt: r } = t, { series: o } = this, [n, a, l] = o.center, c = l / 2, { plotLeft: d, plotWidth: p } = o.chart, u = h.alignment === "left", { x: g, y: m } = h, x = s.x;
        if (e.crookDistance) {
          let b = Lc(e.crookDistance, 1);
          x = u ? n + c + (p + d - n - c) * (1 - b) : d + (n - c) * b;
        } else x = n + (a - m) * Math.tan(i - Math.PI / 2);
        let f = [["M", g, m]];
        return (u ? x <= g && x >= s.x : x >= g && x <= s.x) && f.push(["L", x, m]), f.push(["L", s.x, s.y], ["L", r.x, r.y]), f;
      } } });
      let { getStartAndEndRadians: Ec } = Xn, { noop: Yn } = P, { clamp: Ic, extend: Dc, fireEvent: jn, merge: Gr, pick: Bc } = R;
      class _r extends ce {
        animate(t) {
          let e = this, i = e.points, s = e.startAngleRad;
          t || i.forEach(function(r) {
            let o = r.graphic, n = r.shapeArgs;
            o && n && (o.attr({ r: Bc(r.startR, e.center && e.center[3] / 2), start: s, end: s }), o.animate({ r: n.r, start: n.start, end: n.end }, e.options.animation));
          });
        }
        drawEmpty() {
          let t, e, i = this.startAngleRad, s = this.endAngleRad, r = this.options;
          this.total === 0 && this.center ? (t = this.center[0], e = this.center[1], this.graph || (this.graph = this.chart.renderer.arc(t, e, this.center[1] / 2, 0, i, s).addClass("highcharts-empty-series").add(this.group)), this.graph.attr({ d: yo.arc(t, e, this.center[2] / 2, 0, { start: i, end: s, innerR: this.center[3] / 2 }) }), this.chart.styledMode || this.graph.attr({ "stroke-width": r.borderWidth, fill: r.fillColor || "none", stroke: r.color || "#cccccc" })) : this.graph && (this.graph = this.graph.destroy());
        }
        drawPoints() {
          let t = this.chart.renderer;
          this.points.forEach(function(e) {
            e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()), e.graphic || (e.graphic = t[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0);
          });
        }
        generatePoints() {
          super.generatePoints(), this.updateTotals();
        }
        getX(t, e, i, s) {
          let r = this.center, o = this.radii ? this.radii[i.index] || 0 : r[2] / 2, n = s.dataLabelPosition, a = (n == null ? void 0 : n.distance) || 0, l = Math.asin(Ic((t - r[1]) / (o + a), -1, 1));
          return r[0] + Math.cos(l) * (o + a) * (e ? -1 : 1) + (a > 0 ? (e ? -1 : 1) * (s.padding || 0) : 0);
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        redrawPoints() {
          let t, e, i, s, r = this, o = r.chart;
          this.drawEmpty(), r.group && !o.styledMode && r.group.shadow(r.options.shadow), r.points.forEach(function(n) {
            let a = {};
            e = n.graphic, !n.isNull && e ? (s = n.shapeArgs, t = n.getTranslate(), o.styledMode || (i = r.pointAttribs(n, n.selected && "select")), n.delayedRendering ? (e.setRadialReference(r.center).attr(s).attr(t), o.styledMode || e.attr(i).attr({ "stroke-linejoin": "round" }), n.delayedRendering = !1) : (e.setRadialReference(r.center), o.styledMode || Gr(!0, a, i), Gr(!0, a, s, t), e.animate(a)), e.attr({ visibility: n.visible ? "inherit" : "hidden" }), e.addClass(n.getClassName(), !0)) : e && (n.graphic = e.destroy());
          });
        }
        sortByAngle(t, e) {
          t.sort(function(i, s) {
            return i.angle !== void 0 && (s.angle - i.angle) * e;
          });
        }
        translate(t) {
          jn(this, "translate"), this.generatePoints();
          let e = this.options, i = e.slicedOffset, s = Ec(e.startAngle, e.endAngle), r = this.startAngleRad = s.start, o = (this.endAngleRad = s.end) - r, n = this.points, a = e.ignoreHiddenPoint, l = n.length, c, d, p, u, g, m, x, f = 0;
          for (t || (this.center = t = this.getCenter()), m = 0; m < l; m++) {
            x = n[m], c = r + f * o, x.isValid() && (!a || x.visible) && (f += x.percentage / 100), d = r + f * o;
            let b = { x: t[0], y: t[1], r: t[2] / 2, innerR: t[3] / 2, start: Math.round(1e3 * c) / 1e3, end: Math.round(1e3 * d) / 1e3 };
            x.shapeType = "arc", x.shapeArgs = b, (p = (d + c) / 2) > 1.5 * Math.PI ? p -= 2 * Math.PI : p < -Math.PI / 2 && (p += 2 * Math.PI), x.slicedTranslation = { translateX: Math.round(Math.cos(p) * i), translateY: Math.round(Math.sin(p) * i) }, u = Math.cos(p) * t[2] / 2, g = Math.sin(p) * t[2] / 2, x.tooltipPos = [t[0] + 0.7 * u, t[1] + 0.7 * g], x.half = p < -Math.PI / 2 || p > Math.PI / 2 ? 1 : 0, x.angle = p;
          }
          jn(this, "afterTranslate");
        }
        updateTotals() {
          let t = this.points, e = t.length, i = this.options.ignoreHiddenPoint, s, r, o = 0;
          for (s = 0; s < e; s++) (r = t[s]).isValid() && (!i || r.visible) && (o += r.y);
          for (s = 0, this.total = o; s < e; s++) (r = t[s]).percentage = o > 0 && (r.visible || !i) ? r.y / o * 100 : 0, r.total = o;
        }
      }
      _r.defaultOptions = Gr(ce.defaultOptions, { borderRadius: 3, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { connectorPadding: 5, connectorShape: "crookedLine", crookDistance: void 0, distance: 30, enabled: !0, formatter: function() {
        return this.isNull ? void 0 : this.name;
      }, softConnector: !0, x: 0 }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: 0.1 } } }), Dc(_r.prototype, { axisTypes: [], directTouch: !0, drawGraph: void 0, drawTracker: Os.prototype.drawTracker, getCenter: Xn.getCenter, getSymbol: Yn, invertible: !1, isCartesian: !1, noSharedTooltip: !0, pointAttribs: Os.prototype.pointAttribs, pointClass: _n, requireSorting: !1, searchPoint: Yn, trackerGroups: ["group", "dataLabelsGroup"] }), Ot.registerSeriesType("pie", _r);
      let { composed: Rc, noop: zc } = P, { distribute: Nc } = Ui, { series: Un } = Ot, { arrayMax: Wc, clamp: $n, defined: Vn, pick: Fc, pushUnique: Hc, relativeLength: qn } = R;
      (function(h) {
        let t = { radialDistributionY: function(o, n) {
          var a;
          return (((a = n.dataLabelPosition) == null ? void 0 : a.top) || 0) + o.distributeBox.pos;
        }, radialDistributionX: function(o, n, a, l, c) {
          let d = c.dataLabelPosition;
          return o.getX(a < ((d == null ? void 0 : d.top) || 0) + 2 || a > ((d == null ? void 0 : d.bottom) || 0) - 2 ? l : a, n.half, n, c);
        }, justify: function(o, n, a, l) {
          var c;
          return l[0] + (o.half ? -1 : 1) * (a + (((c = n.dataLabelPosition) == null ? void 0 : c.distance) || 0));
        }, alignToPlotEdges: function(o, n, a, l) {
          let c = o.getBBox().width;
          return n ? c + l : a - c - l;
        }, alignToConnectors: function(o, n, a, l) {
          let c = 0, d;
          return o.forEach(function(p) {
            (d = p.dataLabel.getBBox().width) > c && (c = d);
          }), n ? c + l : a - c - l;
        } };
        function e(o, n) {
          let a = Math.PI / 2, { start: l = 0, end: c = 0 } = o.shapeArgs || {}, d = o.angle || 0;
          n > 0 && l < a && c > a && d > a / 2 && d < 1.5 * a && (d = d <= a ? Math.max(a / 2, (l + a) / 2) : Math.min(1.5 * a, (a + c) / 2));
          let { center: p, options: u } = this, g = p[2] / 2, m = Math.cos(d), x = Math.sin(d), f = p[0] + m * g, b = p[1] + x * g, y = Math.min((u.slicedOffset || 0) + (u.borderWidth || 0), n / 5);
          return { natural: { x: f + m * n, y: b + x * n }, computed: {}, alignment: n < 0 ? "center" : o.half ? "right" : "left", connectorPosition: { angle: d, breakAt: { x: f + m * y, y: b + x * y }, touchingSliceAt: { x: f, y: b } }, distance: n };
        }
        function i() {
          var S;
          let o = this, n = o.points, a = o.chart, l = a.plotWidth, c = a.plotHeight, d = a.plotLeft, p = Math.round(a.chartWidth / 3), u = o.center, g = u[2] / 2, m = u[1], x = [[], []], f = [0, 0, 0, 0], b = o.dataLabelPositioners, y, v, w, k = 0;
          o.visible && ((S = o.hasDataLabels) != null && S.call(o)) && (n.forEach((M) => {
            (M.dataLabels || []).forEach((C) => {
              C.shortened && (C.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), C.shortened = !1);
            });
          }), Un.prototype.drawDataLabels.apply(o), n.forEach((M) => {
            (M.dataLabels || []).forEach((C, L) => {
              var D;
              let E = u[2] / 2, B = C.options, O = qn((B == null ? void 0 : B.distance) || 0, E);
              L === 0 && x[M.half].push(M), !Vn((D = B == null ? void 0 : B.style) == null ? void 0 : D.width) && C.getBBox().width > p && (C.css({ width: Math.round(0.7 * p) + "px" }), C.shortened = !0), C.dataLabelPosition = this.getDataLabelPosition(M, O), k = Math.max(k, O);
            });
          }), x.forEach((M, C) => {
            let L = M.length, E = [], B, O, D = 0, G;
            L && (o.sortByAngle(M, C - 0.5), k > 0 && (B = Math.max(0, m - g - k), O = Math.min(m + g + k, a.plotHeight), M.forEach((Z) => {
              (Z.dataLabels || []).forEach((F) => {
                var N;
                let K = F.dataLabelPosition;
                K && K.distance > 0 && (K.top = Math.max(0, m - g - K.distance), K.bottom = Math.min(m + g + K.distance, a.plotHeight), D = F.getBBox().height || 21, F.lineHeight = a.renderer.fontMetrics(F.text || F).h + 2 * F.padding, Z.distributeBox = { target: (((N = F.dataLabelPosition) == null ? void 0 : N.natural.y) || 0) - K.top + F.lineHeight / 2, size: D, rank: Z.y }, E.push(Z.distributeBox));
              });
            }), Nc(E, G = O + D - B, G / 5)), M.forEach((Z) => {
              (Z.dataLabels || []).forEach((F) => {
                let K = F.options || {}, N = Z.distributeBox, Y = F.dataLabelPosition, $ = (Y == null ? void 0 : Y.natural.y) || 0, at = K.connectorPadding || 0, ft = F.lineHeight || 21, Q = (ft - F.getBBox().height) / 2, et = 0, ut = $, qt = "inherit";
                if (Y) {
                  if (E && Vn(N) && Y.distance > 0 && (N.pos === void 0 ? qt = "hidden" : (w = N.size, ut = b.radialDistributionY(Z, F))), K.justify) et = b.justify(Z, F, g, u);
                  else switch (K.alignTo) {
                    case "connectors":
                      et = b.alignToConnectors(M, C, l, d);
                      break;
                    case "plotEdges":
                      et = b.alignToPlotEdges(F, C, l, d);
                      break;
                    default:
                      et = b.radialDistributionX(o, Z, ut - Q, $, F);
                  }
                  if (Y.attribs = { visibility: qt, align: Y.alignment }, Y.posAttribs = { x: et + (K.x || 0) + ({ left: at, right: -at }[Y.alignment] || 0), y: ut + (K.y || 0) - ft / 2 }, Y.computed.x = et, Y.computed.y = ut - Q, Fc(K.crop, !0)) {
                    let Nt;
                    et - (v = F.getBBox().width) < at && C === 1 ? (Nt = Math.round(v - et + at), f[3] = Math.max(Nt, f[3])) : et + v > l - at && C === 0 && (Nt = Math.round(et + v - l + at), f[1] = Math.max(Nt, f[1])), ut - w / 2 < 0 ? f[0] = Math.max(Math.round(-ut + w / 2), f[0]) : ut + w / 2 > c && (f[2] = Math.max(Math.round(ut + w / 2 - c), f[2])), Y.sideOverflow = Nt;
                  }
                }
              });
            }));
          }), (Wc(f) === 0 || this.verifyDataLabelOverflow(f)) && (this.placeDataLabels(), this.points.forEach((M) => {
            (M.dataLabels || []).forEach((C) => {
              var O;
              let { connectorColor: L, connectorWidth: E = 1 } = C.options || {}, B = C.dataLabelPosition;
              if (E) {
                let D;
                y = C.connector, B && B.distance > 0 ? (D = !y, y || (C.connector = y = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + M.colorIndex + (M.className ? " " + M.className : "")).add(o.dataLabelsGroup)), a.styledMode || y.attr({ "stroke-width": E, stroke: L || M.color || "#666666" }), y[D ? "attr" : "animate"]({ d: M.getConnectorPath(C) }), y.attr({ visibility: (O = B.attribs) == null ? void 0 : O.visibility })) : y && (C.connector = y.destroy());
              }
            });
          })));
        }
        function s() {
          this.points.forEach((o) => {
            (o.dataLabels || []).forEach((n) => {
              var l;
              let a = n.dataLabelPosition;
              a ? (a.sideOverflow && (n.css({ width: Math.max(n.getBBox().width - a.sideOverflow, 0) + "px", textOverflow: (((l = n.options) == null ? void 0 : l.style) || {}).textOverflow || "ellipsis" }), n.shortened = !0), n.attr(a.attribs), n[n.moved ? "animate" : "attr"](a.posAttribs), n.moved = !0) : n && n.attr({ y: -9999 });
            }), delete o.distributeBox;
          }, this);
        }
        function r(o) {
          let n = this.center, a = this.options, l = a.center, c = a.minSize || 80, d = c, p = a.size !== null;
          return !p && (l[0] !== null ? d = Math.max(n[2] - Math.max(o[1], o[3]), c) : (d = Math.max(n[2] - o[1] - o[3], c), n[0] += (o[3] - o[1]) / 2), l[1] !== null ? d = $n(d, c, n[2] - Math.max(o[0], o[2])) : (d = $n(d, c, n[2] - o[0] - o[2]), n[1] += (o[0] - o[2]) / 2), d < n[2] ? (n[2] = d, n[3] = Math.min(a.thickness ? Math.max(0, d - 2 * a.thickness) : Math.max(0, qn(a.innerSize || 0, d)), d), this.translate(n), this.drawDataLabels && this.drawDataLabels()) : p = !0), p;
        }
        h.compose = function(o) {
          if (Ls.compose(Un), Hc(Rc, "PieDataLabel")) {
            let n = o.prototype;
            n.dataLabelPositioners = t, n.alignDataLabel = zc, n.drawDataLabels = i, n.getDataLabelPosition = e, n.placeDataLabels = s, n.verifyDataLabelOverflow = r;
          }
        };
      })(Si || (Si = {}));
      let Xc = Si;
      (function(h) {
        h.getCenterOfPoints = function(t) {
          let e = t.reduce((i, s) => (i.x += s.x, i.y += s.y, i), { x: 0, y: 0 });
          return { x: e.x / t.length, y: e.y / t.length };
        }, h.getDistanceBetweenPoints = function(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, h.getAngleBetweenPoints = function(t, e) {
          return Math.atan2(e.x - t.x, e.y - t.y);
        }, h.pointInPolygon = function({ x: t, y: e }, i) {
          let s = i.length, r, o, n = !1;
          for (r = 0, o = s - 1; r < s; o = r++) {
            let [a, l] = i[r], [c, d] = i[o];
            l > e != d > e && t < (c - a) * (e - l) / (d - l) + a && (n = !n);
          }
          return n;
        };
      })(ai || (ai = {}));
      let { pointInPolygon: Gc } = ai, { addEvent: _c, fireEvent: Kn, objectEach: Zn, pick: Yc } = R;
      function jc(h) {
        let t = h.length, e = (c, d) => !(d.x >= c.x + c.width || d.x + d.width <= c.x || d.y >= c.y + c.height || d.y + d.height <= c.y), i = (c, d) => {
          for (let p of c) if (Gc({ x: p[0], y: p[1] }, d)) return !0;
          return !1;
        }, s, r, o, n, a, l = !1;
        for (let c = 0; c < t; c++) (s = h[c]) && (s.oldOpacity = s.opacity, s.newOpacity = 1, s.absoluteBox = function(d) {
          var p, u;
          if (d && (!d.alignAttr || d.placed)) {
            let g = d.box ? 0 : d.padding || 0, m = d.alignAttr || { x: d.attr("x"), y: d.attr("y") }, x = d.getBBox();
            return d.width = x.width, d.height = x.height, { x: m.x + (((p = d.parentGroup) == null ? void 0 : p.translateX) || 0) + g, y: m.y + (((u = d.parentGroup) == null ? void 0 : u.translateY) || 0) + g, width: (d.width || 0) - 2 * g, height: (d.height || 0) - 2 * g, polygon: x == null ? void 0 : x.polygon };
          }
        }(s));
        h.sort((c, d) => (d.labelrank || 0) - (c.labelrank || 0));
        for (let c = 0; c < t; ++c) {
          n = (r = h[c]) && r.absoluteBox;
          let d = n == null ? void 0 : n.polygon;
          for (let p = c + 1; p < t; ++p) {
            a = (o = h[p]) && o.absoluteBox;
            let u = !1;
            if (n && a && r !== o && r.newOpacity !== 0 && o.newOpacity !== 0 && r.visibility !== "hidden" && o.visibility !== "hidden") {
              let g = a.polygon;
              if (d && g && d !== g ? i(d, g) && (u = !0) : e(n, a) && (u = !0), u) {
                let m = r.labelrank < o.labelrank ? r : o, x = m.text;
                m.newOpacity = 0, x != null && x.element.querySelector("textPath") && x.hide();
              }
            }
          }
        }
        for (let c of h) Jn(c, this) && (l = !0);
        l && Kn(this, "afterHideAllOverlappingLabels");
      }
      function Jn(h, t) {
        let e, i, s = !1;
        return h && (i = h.newOpacity, h.oldOpacity !== i && (h.hasClass("highcharts-data-label") ? (h[i ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), e = function() {
          t.styledMode || h.css({ pointerEvents: i ? "auto" : "none" });
        }, s = !0, h[h.isOld ? "animate" : "attr"]({ opacity: i }, void 0, e), Kn(t, "afterHideOverlappingLabel")) : h.attr({ opacity: i })), h.isOld = !0), s;
      }
      function Uc() {
        var e;
        let h = this, t = [];
        for (let i of h.labelCollectors || []) t = t.concat(i());
        for (let i of h.yAxis || []) i.stacking && i.options.stackLabels && !i.options.stackLabels.allowOverlap && Zn(i.stacking.stacks, (s) => {
          Zn(s, (r) => {
            r.label && t.push(r.label);
          });
        });
        for (let i of h.series || []) if (i.visible && ((e = i.hasDataLabels) != null && e.call(i))) {
          let s = (r) => {
            for (let o of r) o.visible && (o.dataLabels || []).forEach((n) => {
              var l;
              let a = n.options || {};
              n.labelrank = Yc(a.labelrank, o.labelrank, (l = o.shapeArgs) == null ? void 0 : l.height), a.allowOverlap ?? Number(a.distance) > 0 ? (n.oldOpacity = n.opacity, n.newOpacity = 1, Jn(n, h)) : t.push(n);
            });
          };
          s(i.nodes || []), s(i.points);
        }
        this.hideOverlappingLabels(t);
      }
      let Qn = { compose: function(h) {
        let t = h.prototype;
        t.hideOverlappingLabels || (t.hideOverlappingLabels = jc, _c(h, "render", Uc));
      } }, { defaultOptions: $c } = ee, { noop: ta } = P, { addEvent: ea, extend: Vc, isObject: ia, merge: qc, relativeLength: Yr } = R, Kc = { radius: 0, scope: "stack", where: void 0 }, sa = ta, ra = ta;
      function Zc(h, t, e, i, s = {}) {
        let r = sa(h, t, e, i, s), { innerR: o = 0, r: n = e, start: a = 0, end: l = 0 } = s;
        if (s.open || !s.borderRadius) return r;
        let c = l - a, d = Math.sin(c / 2), p = Math.max(Math.min(Yr(s.borderRadius || 0, n - o), (n - o) / 2, n * d / (1 + d)), 0), u = Math.min(p, c / Math.PI * 2 * o), g = r.length - 1;
        for (; g--; ) (function(m, x, f) {
          let b, y, v, w = m[x], k = m[x + 1];
          if (k[0] === "Z" && (k = m[0]), (w[0] === "M" || w[0] === "L") && k[0] === "A" ? (b = w, y = k, v = !0) : w[0] === "A" && (k[0] === "M" || k[0] === "L") && (b = k, y = w), b && y && y.params) {
            let S = y[1], M = y[5], C = y.params, { start: L, end: E, cx: B, cy: O } = C, D = M ? S - f : S + f, G = D ? Math.asin(f / D) : 0, Z = M ? G : -G, F = Math.cos(G) * D;
            v ? (C.start = L + Z, b[1] = B + F * Math.cos(L), b[2] = O + F * Math.sin(L), m.splice(x + 1, 0, ["A", f, f, 0, 0, 1, B + S * Math.cos(C.start), O + S * Math.sin(C.start)])) : (C.end = E - Z, y[6] = B + S * Math.cos(C.end), y[7] = O + S * Math.sin(C.end), m.splice(x + 1, 0, ["A", f, f, 0, 0, 1, B + F * Math.cos(E), O + F * Math.sin(E)])), y[4] = Math.abs(C.end - C.start) < Math.PI ? 0 : 1;
          }
        })(r, g, g > 1 ? u : p);
        return r;
      }
      function Jc() {
        var h, t;
        if (this.options.borderRadius && !(this.chart.is3d && this.chart.is3d())) {
          let { options: e, yAxis: i } = this, s = e.stacking === "percent", r = (t = (h = $c.plotOptions) == null ? void 0 : h[this.type]) == null ? void 0 : t.borderRadius, o = jr(e.borderRadius, ia(r) ? r : {}), n = i.options.reversed;
          for (let a of this.points) {
            let { shapeArgs: l } = a;
            if (a.shapeType === "roundedRect" && l) {
              let { width: c = 0, height: d = 0, y: p = 0 } = l, u = p, g = d;
              if (o.scope === "stack" && a.stackTotal) {
                let b = i.translate(s ? 100 : a.stackTotal, !1, !0, !1, !0), y = i.translate(e.threshold || 0, !1, !0, !1, !0), v = this.crispCol(0, Math.min(b, y), 0, Math.abs(b - y));
                u = v.y, g = v.height;
              }
              let m = (a.negative ? -1 : 1) * (n ? -1 : 1) == -1, x = o.where;
              !x && this.is("waterfall") && Math.abs((a.yBottom || 0) - (this.translatedThreshold || 0)) > this.borderWidth && (x = "all"), x || (x = "end");
              let f = Math.min(Yr(o.radius, c), c / 2, x === "all" ? d / 2 : 1 / 0) || 0;
              x === "end" && (m && (u -= f), g += f), Vc(l, { brBoxHeight: g, brBoxY: u, r: f });
            }
          }
        }
      }
      function jr(h, t) {
        return ia(h) || (h = { radius: h || 0 }), qc(Kc, t, h);
      }
      function Qc() {
        let h = jr(this.options.borderRadius);
        for (let t of this.points) {
          let e = t.shapeArgs;
          e && (e.borderRadius = Yr(h.radius, (e.r || 0) - (e.innerR || 0)));
        }
      }
      function tp(h, t, e, i, s = {}) {
        let r = ra(h, t, e, i, s), { r: o = 0, brBoxHeight: n = i, brBoxY: a = t } = s, l = t - a, c = a + n - (t + i), d = l - o > -0.1 ? 0 : o, p = c - o > -0.1 ? 0 : o, u = Math.max(d && l, 0), g = Math.max(p && c, 0), m = [h + d, t], x = [h + e - d, t], f = [h + e, t + d], b = [h + e, t + i - p], y = [h + e - p, t + i], v = [h + p, t + i], w = [h, t + i - p], k = [h, t + d], S = (M, C) => Math.sqrt(Math.pow(M, 2) - Math.pow(C, 2));
        if (u) {
          let M = S(d, d - u);
          m[0] -= M, x[0] += M, f[1] = k[1] = t + d - u;
        }
        if (i < d - u) {
          let M = S(d, d - u - i);
          f[0] = b[0] = h + e - d + M, y[0] = Math.min(f[0], y[0]), v[0] = Math.max(b[0], v[0]), w[0] = k[0] = h + d - M, f[1] = k[1] = t + i;
        }
        if (g) {
          let M = S(p, p - g);
          y[0] += M, v[0] -= M, b[1] = w[1] = t + i - p + g;
        }
        if (i < p - g) {
          let M = S(p, p - g - i);
          f[0] = b[0] = h + e - p + M, x[0] = Math.min(f[0], x[0]), m[0] = Math.max(b[0], m[0]), w[0] = k[0] = h + p - M, b[1] = w[1] = t;
        }
        return r.length = 0, r.push(["M", ...m], ["L", ...x], ["A", d, d, 0, 0, 1, ...f], ["L", ...b], ["A", p, p, 0, 0, 1, ...y], ["L", ...v], ["A", p, p, 0, 0, 1, ...w], ["L", ...k], ["A", d, d, 0, 0, 1, ...m], ["Z"]), r;
      }
      let { diffObjects: ep, extend: ip, find: sp, merge: rp, pick: Ds, uniqueKey: op } = R;
      (function(h) {
        function t(i, s) {
          let r = i.condition;
          (r.callback || function() {
            return this.chartWidth <= Ds(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= Ds(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= Ds(r.minWidth, 0) && this.chartHeight >= Ds(r.minHeight, 0);
          }).call(this) && s.push(i._id);
        }
        function e(i, s) {
          let r = this.options.responsive, o = this.currentResponsive, n = [], a;
          !s && r && r.rules && r.rules.forEach((d) => {
            d._id === void 0 && (d._id = op()), this.matchResponsiveRule(d, n);
          }, this);
          let l = rp(...n.map((d) => sp((r || {}).rules || [], (p) => p._id === d)).map((d) => d && d.chartOptions));
          l.isResponsiveOptions = !0, n = n.toString() || void 0;
          let c = o && o.ruleIds;
          n === c || (o && (this.currentResponsive = void 0, this.updatingResponsive = !0, this.update(o.undoOptions, i, !0), this.updatingResponsive = !1), n ? ((a = ep(l, this.options, !0, this.collectionsWithUpdate)).isResponsiveOptions = !0, this.currentResponsive = { ruleIds: n, mergedOptions: l, undoOptions: a }, this.updatingResponsive || this.update(l, i, !0)) : this.currentResponsive = void 0);
        }
        h.compose = function(i) {
          let s = i.prototype;
          return s.matchResponsiveRule || ip(s, { matchResponsiveRule: t, setResponsive: e }), i;
        };
      })(hi || (hi = {}));
      let np = hi;
      P.AST = wt, P.Axis = gi, P.Chart = Ue, P.Color = zt, P.DataLabel = Ls, P.DataTableCore = ms, P.Fx = se, P.HTMLElement = Ii, P.Legend = pn, P.LegendSymbol = Zo, P.OverlappingDataLabels = P.OverlappingDataLabels || Qn, P.PlotLineOrBand = ls, P.Point = Ge, P.Pointer = Vo, P.RendererRegistry = Ci, P.Series = ce, P.SeriesRegistry = Ot, P.StackItem = Sn, P.SVGElement = Le, P.SVGRenderer = ts, P.Templating = be, P.Tick = ui, P.Time = pe, P.Tooltip = _o, P.animate = $t.animate, P.animObject = $t.animObject, P.chart = Ue.chart, P.color = zt.parse, P.dateFormat = be.dateFormat, P.defaultOptions = ee.defaultOptions, P.distribute = Ui.distribute, P.format = be.format, P.getDeferredAnimation = $t.getDeferredAnimation, P.getOptions = ee.getOptions, P.numberFormat = be.numberFormat, P.seriesType = Ot.seriesType, P.setAnimation = $t.setAnimation, P.setOptions = ee.setOptions, P.stop = $t.stop, P.time = ee.defaultTime, P.timers = se.timers, { compose: function(h, t, e) {
        let i = h.types.pie;
        if (!t.symbolCustomAttribs.includes("borderRadius")) {
          let s = e.prototype.symbols;
          ea(h, "afterColumnTranslate", Jc, { order: 9 }), ea(i, "afterTranslate", Qc), t.symbolCustomAttribs.push("borderRadius", "brBoxHeight", "brBoxY"), sa = s.arc, ra = s.roundedRect, s.arc = Zc, s.roundedRect = tp;
        }
      }, optionsToObject: jr }.compose(P.Series, P.SVGElement, P.SVGRenderer), mc.compose(P.Series.types.column), Ls.compose(P.Series), Zh.compose(P.Axis), Ii.compose(P.SVGRenderer), pn.compose(P.Chart), tl.compose(P.Axis), Qn.compose(P.Chart), Xc.compose(P.Series.types.pie), ls.compose(P.Chart, P.Axis), Vo.compose(P.Chart), np.compose(P.Chart), zi.compose(P.Axis, P.Chart, P.Series), qd.compose(P.Axis, P.Chart, P.Series), _o.compose(P.Pointer), R.extend(P, R);
      let ap = P;
      return me.default;
    })());
  }(Rs)), Rs.exports;
}
var dp = lp();
const cp = /* @__PURE__ */ la(dp);
var zs = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
var pp = zs.exports, ha;
function up() {
  return ha || (ha = 1, function(Ft, oi) {
    (function(it, lt) {
      Ft.exports = lt();
    })(pp, function it() {
      var lt = typeof self < "u" ? self : typeof window < "u" ? window : lt !== void 0 ? lt : {}, he = !lt.document && !!lt.postMessage, Kt = lt.IS_PAPA_WORKER || !1, te = {}, Se = 0, q = { parse: function(A, T) {
        var I = (T = T || {}).dynamicTyping || !1;
        if (P(I) && (T.dynamicTypingFunction = I, I = {}), T.dynamicTyping = I, T.transform = !!P(T.transform) && T.transform, T.worker && q.WORKERS_SUPPORTED) {
          var z = function() {
            if (!q.WORKERS_SUPPORTED) return !1;
            var V = (Ct = lt.URL || lt.webkitURL || null, mt = it.toString(), q.BLOB_URL || (q.BLOB_URL = Ct.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", mt, ")();"], { type: "text/javascript" })))), tt = new lt.Worker(V), Ct, mt;
            return tt.onmessage = Si, tt.id = Se++, te[tt.id] = tt;
          }();
          return z.userStep = T.step, z.userChunk = T.chunk, z.userComplete = T.complete, z.userError = T.error, T.step = P(T.step), T.chunk = P(T.chunk), T.complete = P(T.complete), T.error = P(T.error), delete T.worker, void z.postMessage({ input: A, config: T, workerId: z.id });
        }
        var H = null;
        return q.NODE_STREAM_INPUT, typeof A == "string" ? (A = function(V) {
          return V.charCodeAt(0) === 65279 ? V.slice(1) : V;
        }(A), H = T.download ? new Ce(T) : new Ie(T)) : A.readable === !0 && P(A.read) && P(A.on) ? H = new Ne(T) : (lt.File && A instanceof File || A instanceof Object) && (H = new fe(T)), H.stream(A);
      }, unparse: function(A, T) {
        var I = !1, z = !0, H = ",", V = `\r
`, tt = '"', Ct = tt + tt, mt = !1, X = null, bt = !1;
        (function() {
          if (typeof T == "object") {
            if (typeof T.delimiter != "string" || q.BAD_DELIMITERS.filter(function(W) {
              return T.delimiter.indexOf(W) !== -1;
            }).length || (H = T.delimiter), (typeof T.quotes == "boolean" || typeof T.quotes == "function" || Array.isArray(T.quotes)) && (I = T.quotes), typeof T.skipEmptyLines != "boolean" && typeof T.skipEmptyLines != "string" || (mt = T.skipEmptyLines), typeof T.newline == "string" && (V = T.newline), typeof T.quoteChar == "string" && (tt = T.quoteChar), typeof T.header == "boolean" && (z = T.header), Array.isArray(T.columns)) {
              if (T.columns.length === 0) throw new Error("Option columns is empty");
              X = T.columns;
            }
            T.escapeChar !== void 0 && (Ct = T.escapeChar + tt), (typeof T.escapeFormulae == "boolean" || T.escapeFormulae instanceof RegExp) && (bt = T.escapeFormulae instanceof RegExp ? T.escapeFormulae : /^[=+\-@\t\r].*$/);
          }
        })();
        var j = new RegExp(De(tt), "g");
        if (typeof A == "string" && (A = JSON.parse(A)), Array.isArray(A)) {
          if (!A.length || Array.isArray(A[0])) return re(null, A, mt);
          if (typeof A[0] == "object") return re(X || Object.keys(A[0]), A, mt);
        } else if (typeof A == "object") return typeof A.data == "string" && (A.data = JSON.parse(A.data)), Array.isArray(A.data) && (A.fields || (A.fields = A.meta && A.meta.fields || X), A.fields || (A.fields = Array.isArray(A.data[0]) ? A.fields : typeof A.data[0] == "object" ? Object.keys(A.data[0]) : []), Array.isArray(A.data[0]) || typeof A.data[0] == "object" || (A.data = [A.data])), re(A.fields || [], A.data || [], mt);
        throw new Error("Unable to serialize unrecognized input");
        function re(W, dt, Dt) {
          var vt = "";
          typeof W == "string" && (W = JSON.parse(W)), typeof dt == "string" && (dt = JSON.parse(dt));
          var Bt = Array.isArray(W) && 0 < W.length, Rt = !Array.isArray(dt[0]);
          if (Bt && z) {
            for (var xt = 0; xt < W.length; xt++) 0 < xt && (vt += H), vt += Ht(W[xt], xt);
            0 < dt.length && (vt += V);
          }
          for (var U = 0; U < dt.length; U++) {
            var rt = Bt ? W.length : dt[U].length, kt = !1, R = Bt ? Object.keys(dt[U]).length === 0 : dt[U].length === 0;
            if (Dt && !Bt && (kt = Dt === "greedy" ? dt[U].join("").trim() === "" : dt[U].length === 1 && dt[U][0].length === 0), Dt === "greedy" && Bt) {
              for (var ht = [], It = 0; It < rt; It++) {
                var Tt = Rt ? W[It] : It;
                ht.push(dt[U][Tt]);
              }
              kt = ht.join("").trim() === "";
            }
            if (!kt) {
              for (var ct = 0; ct < rt; ct++) {
                0 < ct && !R && (vt += H);
                var oe = Bt && Rt ? W[ct] : ct;
                vt += Ht(dt[U][oe], ct);
              }
              U < dt.length - 1 && (!Dt || 0 < rt && !R) && (vt += V);
            }
          }
          return vt;
        }
        function Ht(W, dt) {
          if (W == null) return "";
          if (W.constructor === Date) return JSON.stringify(W).slice(1, 25);
          var Dt = !1;
          bt && typeof W == "string" && bt.test(W) && (W = "'" + W, Dt = !0);
          var vt = W.toString().replace(j, Ct);
          return (Dt = Dt || I === !0 || typeof I == "function" && I(W, dt) || Array.isArray(I) && I[dt] || function(Bt, Rt) {
            for (var xt = 0; xt < Rt.length; xt++) if (-1 < Bt.indexOf(Rt[xt])) return !0;
            return !1;
          }(vt, q.BAD_DELIMITERS) || -1 < vt.indexOf(H) || vt.charAt(0) === " " || vt.charAt(vt.length - 1) === " ") ? tt + vt + tt : vt;
        }
      } };
      if (q.RECORD_SEP = "", q.UNIT_SEP = "", q.BYTE_ORDER_MARK = "\uFEFF", q.BAD_DELIMITERS = ["\r", `
`, '"', q.BYTE_ORDER_MARK], q.WORKERS_SUPPORTED = !he && !!lt.Worker, q.NODE_STREAM_INPUT = 1, q.LocalChunkSize = 10485760, q.RemoteChunkSize = 5242880, q.DefaultDelimiter = ",", q.Parser = Ke, q.ParserHandle = ni, q.NetworkStreamer = Ce, q.FileStreamer = fe, q.StringStreamer = Ie, q.ReadableStreamStreamer = Ne, lt.jQuery) {
        var yt = lt.jQuery;
        yt.fn.parse = function(A) {
          var T = A.config || {}, I = [];
          return this.each(function(V) {
            if (!(yt(this).prop("tagName").toUpperCase() === "INPUT" && yt(this).attr("type").toLowerCase() === "file" && lt.FileReader) || !this.files || this.files.length === 0) return !0;
            for (var tt = 0; tt < this.files.length; tt++) I.push({ file: this.files[tt], inputElem: this, instanceConfig: yt.extend({}, T) });
          }), z(), this;
          function z() {
            if (I.length !== 0) {
              var V, tt, Ct, mt, X = I[0];
              if (P(A.before)) {
                var bt = A.before(X.file, X.inputElem);
                if (typeof bt == "object") {
                  if (bt.action === "abort") return V = "AbortError", tt = X.file, Ct = X.inputElem, mt = bt.reason, void (P(A.error) && A.error({ name: V }, tt, Ct, mt));
                  if (bt.action === "skip") return void H();
                  typeof bt.config == "object" && (X.instanceConfig = yt.extend(X.instanceConfig, bt.config));
                } else if (bt === "skip") return void H();
              }
              var j = X.instanceConfig.complete;
              X.instanceConfig.complete = function(re) {
                P(j) && j(re, X.file, X.inputElem), H();
              }, q.parse(X.file, X.instanceConfig);
            } else P(A.complete) && A.complete();
          }
          function H() {
            I.splice(0, 1), z();
          }
        };
      }
      function Et(A) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(T) {
          var I = Be(T);
          I.chunkSize = parseInt(I.chunkSize), T.step || T.chunk || (I.chunkSize = null), this._handle = new ni(I), (this._handle.streamer = this)._config = I;
        }).call(this, A), this.parseChunk = function(T, I) {
          if (this.isFirstChunk && P(this._config.beforeFirstChunk)) {
            var z = this._config.beforeFirstChunk(T);
            z !== void 0 && (T = z);
          }
          this.isFirstChunk = !1, this._halted = !1;
          var H = this._partialLine + T;
          this._partialLine = "";
          var V = this._handle.parse(H, this._baseIndex, !this._finished);
          if (!this._handle.paused() && !this._handle.aborted()) {
            var tt = V.meta.cursor;
            this._finished || (this._partialLine = H.substring(tt - this._baseIndex), this._baseIndex = tt), V && V.data && (this._rowCount += V.data.length);
            var Ct = this._finished || this._config.preview && this._rowCount >= this._config.preview;
            if (Kt) lt.postMessage({ results: V, workerId: q.WORKER_ID, finished: Ct });
            else if (P(this._config.chunk) && !I) {
              if (this._config.chunk(V, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              V = void 0, this._completeResults = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(V.data), this._completeResults.errors = this._completeResults.errors.concat(V.errors), this._completeResults.meta = V.meta), this._completed || !Ct || !P(this._config.complete) || V && V.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), Ct || V && V.meta.paused || this._nextChunk(), V;
          }
          this._halted = !0;
        }, this._sendError = function(T) {
          P(this._config.error) ? this._config.error(T) : Kt && this._config.error && lt.postMessage({ workerId: q.WORKER_ID, error: T, finished: !1 });
        };
      }
      function Ce(A) {
        var T;
        (A = A || {}).chunkSize || (A.chunkSize = q.RemoteChunkSize), Et.call(this, A), this._nextChunk = he ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(I) {
          this._input = I, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (T = new XMLHttpRequest(), this._config.withCredentials && (T.withCredentials = this._config.withCredentials), he || (T.onload = me(this._chunkLoaded, this), T.onerror = me(this._chunkError, this)), T.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !he), this._config.downloadRequestHeaders) {
              var I = this._config.downloadRequestHeaders;
              for (var z in I) T.setRequestHeader(z, I[z]);
            }
            if (this._config.chunkSize) {
              var H = this._start + this._config.chunkSize - 1;
              T.setRequestHeader("Range", "bytes=" + this._start + "-" + H);
            }
            try {
              T.send(this._config.downloadRequestBody);
            } catch (V) {
              this._chunkError(V.message);
            }
            he && T.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          T.readyState === 4 && (T.status < 200 || 400 <= T.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : T.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(I) {
            var z = I.getResponseHeader("Content-Range");
            return z === null ? -1 : parseInt(z.substring(z.lastIndexOf("/") + 1));
          }(T), this.parseChunk(T.responseText)));
        }, this._chunkError = function(I) {
          var z = T.statusText || I;
          this._sendError(new Error(z));
        };
      }
      function fe(A) {
        var T, I;
        (A = A || {}).chunkSize || (A.chunkSize = q.LocalChunkSize), Et.call(this, A);
        var z = typeof FileReader < "u";
        this.stream = function(H) {
          this._input = H, I = H.slice || H.webkitSlice || H.mozSlice, z ? ((T = new FileReader()).onload = me(this._chunkLoaded, this), T.onerror = me(this._chunkError, this)) : T = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var H = this._input;
          if (this._config.chunkSize) {
            var V = Math.min(this._start + this._config.chunkSize, this._input.size);
            H = I.call(H, this._start, V);
          }
          var tt = T.readAsText(H, this._config.encoding);
          z || this._chunkLoaded({ target: { result: tt } });
        }, this._chunkLoaded = function(H) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(H.target.result);
        }, this._chunkError = function() {
          this._sendError(T.error);
        };
      }
      function Ie(A) {
        var T;
        Et.call(this, A = A || {}), this.stream = function(I) {
          return T = I, this._nextChunk();
        }, this._nextChunk = function() {
          if (!this._finished) {
            var I, z = this._config.chunkSize;
            return z ? (I = T.substring(0, z), T = T.substring(z)) : (I = T, T = ""), this._finished = !T, this.parseChunk(I);
          }
        };
      }
      function Ne(A) {
        Et.call(this, A = A || {});
        var T = [], I = !0, z = !1;
        this.pause = function() {
          Et.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          Et.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(H) {
          this._input = H, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          z && T.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), T.length ? this.parseChunk(T.shift()) : I = !0;
        }, this._streamData = me(function(H) {
          try {
            T.push(typeof H == "string" ? H : H.toString(this._config.encoding)), I && (I = !1, this._checkIsFinished(), this.parseChunk(T.shift()));
          } catch (V) {
            this._streamError(V);
          }
        }, this), this._streamError = me(function(H) {
          this._streamCleanUp(), this._sendError(H);
        }, this), this._streamEnd = me(function() {
          this._streamCleanUp(), z = !0, this._streamData("");
        }, this), this._streamCleanUp = me(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function ni(A) {
        var T, I, z, H = Math.pow(2, 53), V = -H, tt = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, Ct = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, mt = this, X = 0, bt = 0, j = !1, re = !1, Ht = [], W = { data: [], errors: [], meta: {} };
        if (P(A.step)) {
          var dt = A.step;
          A.step = function(U) {
            if (W = U, Bt()) vt();
            else {
              if (vt(), W.data.length === 0) return;
              X += U.data.length, A.preview && X > A.preview ? I.abort() : (W.data = W.data[0], dt(W, mt));
            }
          };
        }
        function Dt(U) {
          return A.skipEmptyLines === "greedy" ? U.join("").trim() === "" : U.length === 1 && U[0].length === 0;
        }
        function vt() {
          return W && z && (xt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + q.DefaultDelimiter + "'"), z = !1), A.skipEmptyLines && (W.data = W.data.filter(function(U) {
            return !Dt(U);
          })), Bt() && function() {
            if (!W) return;
            function U(kt, R) {
              P(A.transformHeader) && (kt = A.transformHeader(kt, R)), Ht.push(kt);
            }
            if (Array.isArray(W.data[0])) {
              for (var rt = 0; Bt() && rt < W.data.length; rt++) W.data[rt].forEach(U);
              W.data.splice(0, 1);
            } else W.data.forEach(U);
          }(), function() {
            if (!W || !A.header && !A.dynamicTyping && !A.transform) return W;
            function U(kt, R) {
              var ht, It = A.header ? {} : [];
              for (ht = 0; ht < kt.length; ht++) {
                var Tt = ht, ct = kt[ht];
                A.header && (Tt = ht >= Ht.length ? "__parsed_extra" : Ht[ht]), A.transform && (ct = A.transform(ct, Tt)), ct = Rt(Tt, ct), Tt === "__parsed_extra" ? (It[Tt] = It[Tt] || [], It[Tt].push(ct)) : It[Tt] = ct;
              }
              return A.header && (ht > Ht.length ? xt("FieldMismatch", "TooManyFields", "Too many fields: expected " + Ht.length + " fields but parsed " + ht, bt + R) : ht < Ht.length && xt("FieldMismatch", "TooFewFields", "Too few fields: expected " + Ht.length + " fields but parsed " + ht, bt + R)), It;
            }
            var rt = 1;
            return !W.data.length || Array.isArray(W.data[0]) ? (W.data = W.data.map(U), rt = W.data.length) : W.data = U(W.data, 0), A.header && W.meta && (W.meta.fields = Ht), bt += rt, W;
          }();
        }
        function Bt() {
          return A.header && Ht.length === 0;
        }
        function Rt(U, rt) {
          return kt = U, A.dynamicTypingFunction && A.dynamicTyping[kt] === void 0 && (A.dynamicTyping[kt] = A.dynamicTypingFunction(kt)), (A.dynamicTyping[kt] || A.dynamicTyping) === !0 ? rt === "true" || rt === "TRUE" || rt !== "false" && rt !== "FALSE" && (function(R) {
            if (tt.test(R)) {
              var ht = parseFloat(R);
              if (V < ht && ht < H) return !0;
            }
            return !1;
          }(rt) ? parseFloat(rt) : Ct.test(rt) ? new Date(rt) : rt === "" ? null : rt) : rt;
          var kt;
        }
        function xt(U, rt, kt, R) {
          var ht = { type: U, code: rt, message: kt };
          R !== void 0 && (ht.row = R), W.errors.push(ht);
        }
        this.parse = function(U, rt, kt) {
          var R = A.quoteChar || '"';
          if (A.newline || (A.newline = function(Tt, ct) {
            Tt = Tt.substring(0, 1048576);
            var oe = new RegExp(De(ct) + "([^]*?)" + De(ct), "gm"), Zt = (Tt = Tt.replace(oe, "")).split("\r"), Jt = Tt.split(`
`), xe = 1 < Jt.length && Jt[0].length < Zt[0].length;
            if (Zt.length === 1 || xe) return `
`;
            for (var ne = 0, ot = 0; ot < Zt.length; ot++) Zt[ot][0] === `
` && ne++;
            return ne >= Zt.length / 2 ? `\r
` : "\r";
          }(U, R)), z = !1, A.delimiter) P(A.delimiter) && (A.delimiter = A.delimiter(U), W.meta.delimiter = A.delimiter);
          else {
            var ht = function(Tt, ct, oe, Zt, Jt) {
              var xe, ne, ot, Lt;
              Jt = Jt || [",", "	", "|", ";", q.RECORD_SEP, q.UNIT_SEP];
              for (var nt = 0; nt < Jt.length; nt++) {
                var pt = Jt[nt], We = 0, ye = 0, Te = 0;
                ot = void 0;
                for (var pe = new Ke({ comments: Zt, delimiter: pt, newline: ct, preview: 10 }).parse(Tt), Ae = 0; Ae < pe.data.length; Ae++) if (oe && Dt(pe.data[Ae])) Te++;
                else {
                  var Pe = pe.data[Ae].length;
                  ye += Pe, ot !== void 0 ? 0 < Pe && (We += Math.abs(Pe - ot), ot = Pe) : ot = Pe;
                }
                0 < pe.data.length && (ye /= pe.data.length - Te), (ne === void 0 || We <= ne) && (Lt === void 0 || Lt < ye) && 1.99 < ye && (ne = We, xe = pt, Lt = ye);
              }
              return { successful: !!(A.delimiter = xe), bestDelimiter: xe };
            }(U, A.newline, A.skipEmptyLines, A.comments, A.delimitersToGuess);
            ht.successful ? A.delimiter = ht.bestDelimiter : (z = !0, A.delimiter = q.DefaultDelimiter), W.meta.delimiter = A.delimiter;
          }
          var It = Be(A);
          return A.preview && A.header && It.preview++, T = U, I = new Ke(It), W = I.parse(T, rt, kt), vt(), j ? { meta: { paused: !0 } } : W || { meta: { paused: !1 } };
        }, this.paused = function() {
          return j;
        }, this.pause = function() {
          j = !0, I.abort(), T = P(A.chunk) ? "" : T.substring(I.getCharIndex());
        }, this.resume = function() {
          mt.streamer._halted ? (j = !1, mt.streamer.parseChunk(T, !0)) : setTimeout(mt.resume, 3);
        }, this.aborted = function() {
          return re;
        }, this.abort = function() {
          re = !0, I.abort(), W.meta.aborted = !0, P(A.complete) && A.complete(W), T = "";
        };
      }
      function De(A) {
        return A.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function Ke(A) {
        var T, I = (A = A || {}).delimiter, z = A.newline, H = A.comments, V = A.step, tt = A.preview, Ct = A.fastMode, mt = T = A.quoteChar === void 0 || A.quoteChar === null ? '"' : A.quoteChar;
        if (A.escapeChar !== void 0 && (mt = A.escapeChar), (typeof I != "string" || -1 < q.BAD_DELIMITERS.indexOf(I)) && (I = ","), H === I) throw new Error("Comment character same as delimiter");
        H === !0 ? H = "#" : (typeof H != "string" || -1 < q.BAD_DELIMITERS.indexOf(H)) && (H = !1), z !== `
` && z !== "\r" && z !== `\r
` && (z = `
`);
        var X = 0, bt = !1;
        this.parse = function(j, re, Ht) {
          if (typeof j != "string") throw new Error("Input must be a string");
          var W = j.length, dt = I.length, Dt = z.length, vt = H.length, Bt = P(V), Rt = [], xt = [], U = [], rt = X = 0;
          if (!j) return ae();
          if (A.header && !re) {
            var kt = j.split(z)[0].split(I), R = [], ht = {}, It = !1;
            for (var Tt in kt) {
              var ct = kt[Tt];
              P(A.transformHeader) && (ct = A.transformHeader(ct, Tt));
              var oe = ct, Zt = ht[ct] || 0;
              for (0 < Zt && (It = !0, oe = ct + "_" + Zt), ht[ct] = Zt + 1; R.includes(oe); ) oe = oe + "_" + Zt;
              R.push(oe);
            }
            if (It) {
              var Jt = j.split(z);
              Jt[0] = R.join(I), j = Jt.join(z);
            }
          }
          if (Ct || Ct !== !1 && j.indexOf(T) === -1) {
            for (var xe = j.split(z), ne = 0; ne < xe.length; ne++) {
              if (U = xe[ne], X += U.length, ne !== xe.length - 1) X += z.length;
              else if (Ht) return ae();
              if (!H || U.substring(0, vt) !== H) {
                if (Bt) {
                  if (Rt = [], Te(U.split(I)), le(), bt) return ae();
                } else Te(U.split(I));
                if (tt && tt <= ne) return Rt = Rt.slice(0, tt), ae(!0);
              }
            }
            return ae();
          }
          for (var ot = j.indexOf(I, X), Lt = j.indexOf(z, X), nt = new RegExp(De(mt) + De(T), "g"), pt = j.indexOf(T, X); ; ) if (j[X] !== T) if (H && U.length === 0 && j.substring(X, X + vt) === H) {
            if (Lt === -1) return ae();
            X = Lt + Dt, Lt = j.indexOf(z, X), ot = j.indexOf(I, X);
          } else if (ot !== -1 && (ot < Lt || Lt === -1)) U.push(j.substring(X, ot)), X = ot + dt, ot = j.indexOf(I, X);
          else {
            if (Lt === -1) break;
            if (U.push(j.substring(X, Lt)), Pe(Lt + Dt), Bt && (le(), bt)) return ae();
            if (tt && Rt.length >= tt) return ae(!0);
          }
          else for (pt = X, X++; ; ) {
            if ((pt = j.indexOf(T, pt + 1)) === -1) return Ht || xt.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: Rt.length, index: X }), Ae();
            if (pt === W - 1) return Ae(j.substring(X, pt).replace(nt, T));
            if (T !== mt || j[pt + 1] !== mt) {
              if (T === mt || pt === 0 || j[pt - 1] !== mt) {
                ot !== -1 && ot < pt + 1 && (ot = j.indexOf(I, pt + 1)), Lt !== -1 && Lt < pt + 1 && (Lt = j.indexOf(z, pt + 1));
                var We = pe(Lt === -1 ? ot : Math.min(ot, Lt));
                if (j.substr(pt + 1 + We, dt) === I) {
                  U.push(j.substring(X, pt).replace(nt, T)), j[X = pt + 1 + We + dt] !== T && (pt = j.indexOf(T, X)), ot = j.indexOf(I, X), Lt = j.indexOf(z, X);
                  break;
                }
                var ye = pe(Lt);
                if (j.substring(pt + 1 + ye, pt + 1 + ye + Dt) === z) {
                  if (U.push(j.substring(X, pt).replace(nt, T)), Pe(pt + 1 + ye + Dt), ot = j.indexOf(I, X), pt = j.indexOf(T, X), Bt && (le(), bt)) return ae();
                  if (tt && Rt.length >= tt) return ae(!0);
                  break;
                }
                xt.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: Rt.length, index: X }), pt++;
              }
            } else pt++;
          }
          return Ae();
          function Te(Qt) {
            Rt.push(Qt), rt = X;
          }
          function pe(Qt) {
            var ee = 0;
            if (Qt !== -1) {
              var Fe = j.substring(pt + 1, Qt);
              Fe && Fe.trim() === "" && (ee = Fe.length);
            }
            return ee;
          }
          function Ae(Qt) {
            return Ht || (Qt === void 0 && (Qt = j.substring(X)), U.push(Qt), X = W, Te(U), Bt && le()), ae();
          }
          function Pe(Qt) {
            X = Qt, Te(U), U = [], Lt = j.indexOf(z, X);
          }
          function ae(Qt) {
            return { data: Rt, errors: xt, meta: { delimiter: I, linebreak: z, aborted: bt, truncated: !!Qt, cursor: rt + (re || 0) } };
          }
          function le() {
            V(ae()), Rt = [], xt = [];
          }
        }, this.abort = function() {
          bt = !0;
        }, this.getCharIndex = function() {
          return X;
        };
      }
      function Si(A) {
        var T = A.data, I = te[T.workerId], z = !1;
        if (T.error) I.userError(T.error, T.file);
        else if (T.results && T.results.data) {
          var H = { abort: function() {
            z = !0, ai(T.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: hi, resume: hi };
          if (P(I.userStep)) {
            for (var V = 0; V < T.results.data.length && (I.userStep({ data: T.results.data[V], errors: T.results.errors, meta: T.results.meta }, H), !z); V++) ;
            delete T.results;
          } else P(I.userChunk) && (I.userChunk(T.results, H, T.file), delete T.results);
        }
        T.finished && !z && ai(T.workerId, T.results);
      }
      function ai(A, T) {
        var I = te[A];
        P(I.userComplete) && I.userComplete(T), I.terminate(), delete te[A];
      }
      function hi() {
        throw new Error("Not implemented.");
      }
      function Be(A) {
        if (typeof A != "object" || A === null) return A;
        var T = Array.isArray(A) ? [] : {};
        for (var I in A) T[I] = Be(A[I]);
        return T;
      }
      function me(A, T) {
        return function() {
          A.apply(T, arguments);
        };
      }
      function P(A) {
        return typeof A == "function";
      }
      return Kt && (lt.onmessage = function(A) {
        var T = A.data;
        if (q.WORKER_ID === void 0 && T && (q.WORKER_ID = T.workerId), typeof T.input == "string") lt.postMessage({ workerId: q.WORKER_ID, results: q.parse(T.input, T.config), finished: !0 });
        else if (lt.File && T.input instanceof File || T.input instanceof Object) {
          var I = q.parse(T.input, T.config);
          I && lt.postMessage({ workerId: q.WORKER_ID, results: I, finished: !0 });
        }
      }), (Ce.prototype = Object.create(Et.prototype)).constructor = Ce, (fe.prototype = Object.create(Et.prototype)).constructor = fe, (Ie.prototype = Object.create(Ie.prototype)).constructor = Ie, (Ne.prototype = Object.create(Et.prototype)).constructor = Ne, q;
    });
  }(zs)), zs.exports;
}
var gp = up();
const fp = /* @__PURE__ */ la(gp), mp = (Ft, oi = "csv") => {
  let it;
  if (oi === "csv")
    it = fp.parse(Ft, {
      header: !0,
      skipEmptyLines: !0
    }).data;
  else if (oi === "json")
    it = Array.isArray(Ft) ? Ft : JSON.parse(Ft);
  else
    throw new Error('Invalid input type. Use "csv" or "json"');
  const lt = Object.keys(it[0]).filter((Kt) => Kt !== "name");
  return it.reduce((Kt, te) => (lt.forEach((Se) => {
    const q = Se.replace(/^\*/, "");
    Kt.push({
      name: te.name,
      category: q,
      value: parseFloat(te[Se]) || 0
    });
  }), Kt), []);
};
function yp() {
  console.log("Hello from main!");
}
function bp(Ft, oi, it = {}) {
  it = { ...{
    source: "Source: UN",
    xAxisLabel: "Population (millions)",
    valueSuffix: " million",
    yKey: "name",
    xKey: "value",
    zKey: "category",
    barHeight: 30,
    colors: ["#206095", "#27A0CC", "#871A5B", "#A8BD3A", "#F66068"]
  }, ...it }, console.log(it);
  const he = mp(oi, it.dataFormat), Kt = Array.from(new Set(he.map((yt) => yt[it.yKey]))), te = (() => {
    const yt = {};
    for (const Et of he)
      yt[Et[it.zKey]] || (yt[Et[it.zKey]] = {
        name: Et[it.zKey],
        data: []
      }), yt[Et[it.zKey]].data.push(Et[it.xKey]);
    return Object.values(yt);
  })(), Se = Kt.length * (it.barHeight + 10) + 60, q = cp.chart(Ft, {
    chart: {
      type: "bar",
      height: Se
    },
    title: {
      text: it.title || ""
    },
    subtitle: {
      text: it.subtitle || ""
    },
    colors: it.colors,
    xAxis: {
      categories: Kt,
      title: !1,
      lineWidth: 0
    },
    yAxis: {
      min: 0,
      reversedStacks: !1,
      title: {
        text: it.xAxisLabel,
        align: "high"
      },
      labels: {
        overflow: "justify"
      },
      gridLineWidth: 1
    },
    tooltip: {
      valueSuffix: it.valueSuffix,
      enabled: !1
    },
    plotOptions: {
      series: {
        animation: !1,
        stacking: "normal",
        pointWidth: it.barHeight,
        borderRadius: 0,
        borderWidth: 0,
        groupPadding: 0,
        dataLabels: {
          enabled: !1,
          inside: !0,
          allowOverlap: !0,
          align: "right",
          style: { textOutline: "none" },
          formatter: function() {
            return this.point.shapeArgs.height > 30 ? this.y.toLocaleString("en-GB") : null;
          }
        },
        enableMouseTracking: !1
      }
    },
    legend: !1,
    credits: {
      enabled: !1
    },
    series: te
  });
  if (te.length > 1) {
    const yt = document.createElement("ul");
    yt.className = "chart-legend", te.forEach((Et, Ce) => {
      const fe = document.createElement("li");
      fe.innerHTML = `
                <span class="chart-bullet" style="background: ${it.colors[Ce]}"></span>
                ${Et.name}
            `, yt.appendChild(fe);
    }), Ft.parentNode.insertBefore(yt, Ft);
  }
  if (it.source) {
    const yt = document.createElement("p");
    yt.className = "chart-source", yt.textContent = it.source, Ft.parentNode.appendChild(yt);
  }
  return q;
}
const xp = `
.chart-legend {
    margin: 0;
    padding: 0;
    list-style: none;
}
.chart-legend > li {
    display: inline-block;
    margin: 0 18px 0 0;
}
.chart-bullet {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
}
.chart-source {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
}
`, da = document.createElement("style");
da.textContent = xp;
document.head.appendChild(da);
export {
  bp as createChart,
  yp as hello
};