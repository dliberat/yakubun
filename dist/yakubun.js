!(function (e, a) { typeof exports === 'object' && typeof module === 'object' ? module.exports = a() : typeof define === 'function' && define.amd ? define([], a) : typeof exports === 'object' ? exports.yakubun = a() : e.yakubun = a(); }(typeof self !== 'undefined' ? self : this, () => (function (e) { const a = {}; function n(t) { if (a[t]) return a[t].exports; const c = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(c.exports, c, c.exports, n), c.l = !0, c.exports; } return n.m = e, n.c = a, n.d = function (e, a, t) { n.o(e, a) || Object.defineProperty(e, a, { configurable: !1, enumerable: !0, get: t }); }, n.n = function (e) { const a = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(a, 'a', a), a; }, n.o = function (e, a) { return Object.prototype.hasOwnProperty.call(e, a); }, n.p = '', n(n.s = 126); }([function (e, a, n) {
  (function (e) {
    let a; a = function () {
      let a,
        t; function c() { return a(...arguments); } function M(e) { return e instanceof Array || Object.prototype.toString.call(e) === '[object Array]'; } function s(e) { return e != null && Object.prototype.toString.call(e) === '[object Object]'; } function o(e) { return void 0 === e; } function r(e) { return typeof e === 'number' || Object.prototype.toString.call(e) === '[object Number]'; } function i(e) { return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'; } function d(e, a) {
        let n,
          t = []; for (n = 0; n < e.length; ++n)t.push(a(e[n], n)); return t;
      } function _(e, a) { return Object.prototype.hasOwnProperty.call(e, a); } function u(e, a) { for (const n in a)_(a, n) && (e[n] = a[n]); return _(a, 'toString') && (e.toString = a.toString), _(a, 'valueOf') && (e.valueOf = a.valueOf), e; } function l(e, a, n, t) { return Wa(e, a, n, t, !0).utc(); } function m(e) {
        return e._pf == null && (e._pf = {
          empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1,
        }), e._pf;
      } function p(e) {
        if (e._isValid == null) {
          let a = m(e),
            n = t.call(a.parsedDateParts, e => e != null),
            c = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && n); if (e._strict && (c = c && a.charsLeftOver === 0 && a.unusedTokens.length === 0 && void 0 === a.bigHour), Object.isFrozen != null && Object.isFrozen(e)) return c; e._isValid = c;
        } return e._isValid;
      } function L(e) { const a = l(NaN); return e != null ? u(m(a), e) : m(a).userInvalidated = !0, a; }t = Array.prototype.some ? Array.prototype.some : function (e) { for (let a = Object(this), n = a.length >>> 0, t = 0; t < n; t++) if (t in a && e.call(this, a[t], t, a)) return !0; return !1; }; const b = c.momentProperties = []; function z(e, a) {
        let n,
          t,
          c; if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = m(a)), o(a._locale) || (e._locale = a._locale), b.length > 0) for (n = 0; n < b.length; n++)o(c = a[t = b[n]]) || (e[t] = c); return e;
      } let A = !1; function f(e) { z(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === A && (A = !0, c.updateOffset(this), A = !1); } function h(e) { return e instanceof f || e != null && e._isAMomentObject != null; } function T(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e); } function O(e) {
        let a = +e,
          n = 0; return a !== 0 && isFinite(a) && (n = T(a)), n;
      } function y(e, a, n) {
        let t,
          c = Math.min(e.length, a.length),
          M = Math.abs(e.length - a.length),
          s = 0; for (t = 0; t < c; t++)(n && e[t] !== a[t] || !n && O(e[t]) !== O(a[t])) && s++; return s + M;
      } function Y(e) { !1 === c.suppressDeprecationWarnings && typeof console !== 'undefined' && console.warn && console.warn(`Deprecation warning: ${e}`); } function k(e, a) { let n = !0; return u(function () { if (c.deprecationHandler != null && c.deprecationHandler(null, e), n) { for (var t, M = [], s = 0; s < arguments.length; s++) { if (t = '', typeof arguments[s] === 'object') { for (const o in t += `\n[${s}] `, arguments[0])t += `${o}: ${arguments[0][o]}, `; t = t.slice(0, -2); } else t = arguments[s]; M.push(t); }Y(`${e}\nArguments: ${Array.prototype.slice.call(M).join('')}\n${(new Error()).stack}`), n = !1; } return a.apply(this, arguments); }, a); } let q,
        D = {}; function W(e, a) { c.deprecationHandler != null && c.deprecationHandler(e, a), D[e] || (Y(a), D[e] = !0); } function N(e) { return e instanceof Function || Object.prototype.toString.call(e) === '[object Function]'; } function g(e, a) {
        let n,
          t = u({}, e); for (n in a)_(a, n) && (s(e[n]) && s(a[n]) ? (t[n] = {}, u(t[n], e[n]), u(t[n], a[n])) : a[n] != null ? t[n] = a[n] : delete t[n]); for (n in e)_(e, n) && !_(a, n) && s(e[n]) && (t[n] = u({}, t[n])); return t;
      } function S(e) { e != null && this.set(e); }c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, q = Object.keys ? Object.keys : function (e) {
        let a,
          n = []; for (a in e)_(e, a) && n.push(a); return n;
      }; const w = {}; function X(e, a) { const n = e.toLowerCase(); w[n] = w[`${n}s`] = w[a] = e; } function B(e) { return typeof e === 'string' ? w[e] || w[e.toLowerCase()] : void 0; } function v(e) {
        let a,
          n,
          t = {}; for (n in e)_(e, n) && (a = B(n)) && (t[a] = e[n]); return t;
      } const H = {}; function E(e, a) { H[e] = a; } function j(e, a, n) {
        let t = `${Math.abs(e)}`,
          c = a - t.length; return (e >= 0 ? n ? '+' : '' : '-') + Math.pow(10, Math.max(0, c)).toString().substr(1) + t;
      } let C = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        x = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        P = {},
        R = {}; function F(e, a, n, t) { let c = t; typeof t === 'string' && (c = function () { return this[t](); }), e && (R[e] = c), a && (R[a[0]] = function () { return j(c.apply(this, arguments), a[1], a[2]); }), n && (R[n] = function () { return this.localeData().ordinal(c.apply(this, arguments), e); }); } function I(e, a) {
        return e.isValid() ? (a = U(a, e.localeData()), P[a] = P[a] || (function (e) {
          let a,
            n,
            t,
            c = e.match(C); for (a = 0, n = c.length; a < n; a++)R[c[a]] ? c[a] = R[c[a]] : c[a] = (t = c[a]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, '') : t.replace(/\\/g, ''); return function (a) {
            let t,
              M = ''; for (t = 0; t < n; t++)M += N(c[t]) ? c[t].call(a, e) : c[t]; return M;
          };
        }(a)), P[a](e)) : e.localeData().invalidDate();
      } function U(e, a) { let n = 5; function t(e) { return a.longDateFormat(e) || e; } for (x.lastIndex = 0; n >= 0 && x.test(e);)e = e.replace(x, t), x.lastIndex = 0, n -= 1; return e; } let $ = /\d/,
        J = /\d\d/,
        G = /\d{3}/,
        K = /\d{4}/,
        V = /[+-]?\d{6}/,
        Q = /\d\d?/,
        Z = /\d\d\d\d?/,
        ee = /\d\d\d\d\d\d?/,
        ae = /\d{1,3}/,
        ne = /\d{1,4}/,
        te = /[+-]?\d{1,6}/,
        ce = /\d+/,
        Me = /[+-]?\d+/,
        se = /Z|[+-]\d\d:?\d\d/gi,
        oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ie = {}; function de(e, a, n) { ie[e] = N(a) ? a : function (e, t) { return e && n ? n : a; }; } function _e(e, a) { return _(ie, e) ? ie[e](a._strict, a._locale) : new RegExp(ue(e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (e, a, n, t, c) => a || n || t || c))); } function ue(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); } const le = {}; function me(e, a) {
        let n,
          t = a; for (typeof e === 'string' && (e = [e]), r(a) && (t = function (e, n) { n[a] = O(e); }), n = 0; n < e.length; n++)le[e[n]] = t;
      } function pe(e, a) { me(e, (e, n, t, c) => { t._w = t._w || {}, a(e, t._w, t, c); }); } function Le(e, a, n) { a != null && _(le, e) && le[e](a, n._a, n, e); } let be = 0,
        ze = 1,
        Ae = 2,
        fe = 3,
        he = 4,
        Te = 5,
        Oe = 6,
        ye = 7,
        Ye = 8; function ke(e) { return qe(e) ? 366 : 365; } function qe(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0; }F('Y', 0, 0, function () { const e = this.year(); return e <= 9999 ? `${e}` : `+${e}`; }), F(0, ['YY', 2], 0, function () { return this.year() % 100; }), F(0, ['YYYY', 4], 0, 'year'), F(0, ['YYYYY', 5], 0, 'year'), F(0, ['YYYYYY', 6, !0], 0, 'year'), X('year', 'y'), E('year', 1), de('Y', Me), de('YY', Q, J), de('YYYY', ne, K), de('YYYYY', te, V), de('YYYYYY', te, V), me(['YYYYY', 'YYYYYY'], be), me('YYYY', (e, a) => { a[be] = e.length === 2 ? c.parseTwoDigitYear(e) : O(e); }), me('YY', (e, a) => { a[be] = c.parseTwoDigitYear(e); }), me('Y', (e, a) => { a[be] = parseInt(e, 10); }), c.parseTwoDigitYear = function (e) { return O(e) + (O(e) > 68 ? 1900 : 2e3); }; let De,
        We = Ne('FullYear', !0); function Ne(e, a) { return function (n) { return n != null ? (Se(this, e, n), c.updateOffset(this, a), this) : ge(this, e); }; } function ge(e, a) { return e.isValid() ? e._d[`get${e._isUTC ? 'UTC' : ''}${a}`]() : NaN; } function Se(e, a, n) { e.isValid() && !isNaN(n) && (a === 'FullYear' && qe(e.year()) && e.month() === 1 && e.date() === 29 ? e._d[`set${e._isUTC ? 'UTC' : ''}${a}`](n, e.month(), we(n, e.month())) : e._d[`set${e._isUTC ? 'UTC' : ''}${a}`](n)); } function we(e, a) {
        if (isNaN(e) || isNaN(a)) return NaN; let n,
          t = (a % (n = 12) + n) % n; return e += (a - t) / 12, t === 1 ? qe(e) ? 29 : 28 : 31 - t % 7 % 2;
      }De = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) { let a; for (a = 0; a < this.length; ++a) if (this[a] === e) return a; return -1; }, F('M', ['MM', 2], 'Mo', function () { return this.month() + 1; }), F('MMM', 0, 0, function (e) { return this.localeData().monthsShort(this, e); }), F('MMMM', 0, 0, function (e) { return this.localeData().months(this, e); }), X('month', 'M'), E('month', 8), de('M', Q), de('MM', Q, J), de('MMM', (e, a) => a.monthsShortRegex(e)), de('MMMM', (e, a) => a.monthsRegex(e)), me(['M', 'MM'], (e, a) => { a[ze] = O(e) - 1; }), me(['MMM', 'MMMM'], (e, a, n, t) => { const c = n._locale.monthsParse(e, t, n._strict); c != null ? a[ze] = c : m(n).invalidMonth = e; }); let Xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Be = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'); const ve = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'); function He(e, a) { let n; if (!e.isValid()) return e; if (typeof a === 'string') if (/^\d+$/.test(a))a = O(a); else if (!r(a = e.localeData().monthsParse(a))) return e; return n = Math.min(e.date(), we(e.year(), a)), e._d[`set${e._isUTC ? 'UTC' : ''}Month`](a, n), e; } function Ee(e) { return e != null ? (He(this, e), c.updateOffset(this, !0), this) : ge(this, 'Month'); } const je = re; const Ce = re; function xe() {
        function e(e, a) { return a.length - e.length; } let a,
          n,
          t = [],
          c = [],
          M = []; for (a = 0; a < 12; a++)n = l([2e3, a]), t.push(this.monthsShort(n, '')), c.push(this.months(n, '')), M.push(this.months(n, '')), M.push(this.monthsShort(n, '')); for (t.sort(e), c.sort(e), M.sort(e), a = 0; a < 12; a++)t[a] = ue(t[a]), c[a] = ue(c[a]); for (a = 0; a < 24; a++)M[a] = ue(M[a]); this._monthsRegex = new RegExp(`^(${M.join('|')})`, 'i'), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(`^(${c.join('|')})`, 'i'), this._monthsShortStrictRegex = new RegExp(`^(${t.join('|')})`, 'i');
      } function Pe(e) { const a = new Date(Date.UTC.apply(null, arguments)); return e < 100 && e >= 0 && isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e), a; } function Re(e, a, n) { const t = 7 + a - n; return -((7 + Pe(e, 0, t).getUTCDay() - a) % 7) + t - 1; } function Fe(e, a, n, t, c) {
        let M,
          s,
          o = 1 + 7 * (a - 1) + (7 + n - t) % 7 + Re(e, t, c); return o <= 0 ? s = ke(M = e - 1) + o : o > ke(e) ? (M = e + 1, s = o - ke(e)) : (M = e, s = o), { year: M, dayOfYear: s };
      } function Ie(e, a, n) {
        let t,
          c,
          M = Re(e.year(), a, n),
          s = Math.floor((e.dayOfYear() - M - 1) / 7) + 1; return s < 1 ? t = s + Ue(c = e.year() - 1, a, n) : s > Ue(e.year(), a, n) ? (t = s - Ue(e.year(), a, n), c = e.year() + 1) : (c = e.year(), t = s), { week: t, year: c };
      } function Ue(e, a, n) {
        let t = Re(e, a, n),
          c = Re(e + 1, a, n); return (ke(e) - t + c) / 7;
      }F('w', ['ww', 2], 'wo', 'week'), F('W', ['WW', 2], 'Wo', 'isoWeek'), X('week', 'w'), X('isoWeek', 'W'), E('week', 5), E('isoWeek', 5), de('w', Q), de('ww', Q, J), de('W', Q), de('WW', Q, J), pe(['w', 'ww', 'W', 'WW'], (e, a, n, t) => { a[t.substr(0, 1)] = O(e); }); F('d', 0, 'do', 'day'), F('dd', 0, 0, function (e) { return this.localeData().weekdaysMin(this, e); }), F('ddd', 0, 0, function (e) { return this.localeData().weekdaysShort(this, e); }), F('dddd', 0, 0, function (e) { return this.localeData().weekdays(this, e); }), F('e', 0, 0, 'weekday'), F('E', 0, 0, 'isoWeekday'), X('day', 'd'), X('weekday', 'e'), X('isoWeekday', 'E'), E('day', 11), E('weekday', 11), E('isoWeekday', 11), de('d', Q), de('e', Q), de('E', Q), de('dd', (e, a) => a.weekdaysMinRegex(e)), de('ddd', (e, a) => a.weekdaysShortRegex(e)), de('dddd', (e, a) => a.weekdaysRegex(e)), pe(['dd', 'ddd', 'dddd'], (e, a, n, t) => { const c = n._locale.weekdaysParse(e, t, n._strict); c != null ? a.d = c : m(n).invalidWeekday = e; }), pe(['d', 'e', 'E'], (e, a, n, t) => { a[t] = O(e); }); const $e = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'); const Je = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'); const Ge = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'); const Ke = re; const Ve = re; const Qe = re; function Ze() {
        function e(e, a) { return a.length - e.length; } let a,
          n,
          t,
          c,
          M,
          s = [],
          o = [],
          r = [],
          i = []; for (a = 0; a < 7; a++)n = l([2e3, 1]).day(a), t = this.weekdaysMin(n, ''), c = this.weekdaysShort(n, ''), M = this.weekdays(n, ''), s.push(t), o.push(c), r.push(M), i.push(t), i.push(c), i.push(M); for (s.sort(e), o.sort(e), r.sort(e), i.sort(e), a = 0; a < 7; a++)o[a] = ue(o[a]), r[a] = ue(r[a]), i[a] = ue(i[a]); this._weekdaysRegex = new RegExp(`^(${i.join('|')})`, 'i'), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(`^(${r.join('|')})`, 'i'), this._weekdaysShortStrictRegex = new RegExp(`^(${o.join('|')})`, 'i'), this._weekdaysMinStrictRegex = new RegExp(`^(${s.join('|')})`, 'i');
      } function ea() { return this.hours() % 12 || 12; } function aa(e, a) { F(e, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), a); }); } function na(e, a) { return a._meridiemParse; }F('H', ['HH', 2], 0, 'hour'), F('h', ['hh', 2], 0, ea), F('k', ['kk', 2], 0, function () { return this.hours() || 24; }), F('hmm', 0, 0, function () { return `${ea.apply(this)}${j(this.minutes(), 2)}`; }), F('hmmss', 0, 0, function () { return `${ea.apply(this)}${j(this.minutes(), 2)}${j(this.seconds(), 2)}`; }), F('Hmm', 0, 0, function () { return `${this.hours()}${j(this.minutes(), 2)}`; }), F('Hmmss', 0, 0, function () { return `${this.hours()}${j(this.minutes(), 2)}${j(this.seconds(), 2)}`; }), aa('a', !0), aa('A', !1), X('hour', 'h'), E('hour', 13), de('a', na), de('A', na), de('H', Q), de('h', Q), de('k', Q), de('HH', Q, J), de('hh', Q, J), de('kk', Q, J), de('hmm', Z), de('hmmss', ee), de('Hmm', Z), de('Hmmss', ee), me(['H', 'HH'], fe), me(['k', 'kk'], (e, a, n) => { const t = O(e); a[fe] = t === 24 ? 0 : t; }), me(['a', 'A'], (e, a, n) => { n._isPm = n._locale.isPM(e), n._meridiem = e; }), me(['h', 'hh'], (e, a, n) => { a[fe] = O(e), m(n).bigHour = !0; }), me('hmm', (e, a, n) => { const t = e.length - 2; a[fe] = O(e.substr(0, t)), a[he] = O(e.substr(t)), m(n).bigHour = !0; }), me('hmmss', (e, a, n) => {
        let t = e.length - 4,
          c = e.length - 2; a[fe] = O(e.substr(0, t)), a[he] = O(e.substr(t, 2)), a[Te] = O(e.substr(c)), m(n).bigHour = !0;
      }), me('Hmm', (e, a, n) => { const t = e.length - 2; a[fe] = O(e.substr(0, t)), a[he] = O(e.substr(t)); }), me('Hmmss', (e, a, n) => {
        let t = e.length - 4,
          c = e.length - 2; a[fe] = O(e.substr(0, t)), a[he] = O(e.substr(t, 2)), a[Te] = O(e.substr(c));
      }); let ta,
        ca = Ne('Hours', !0),
        Ma = {
          calendar: {
            sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
          },
          longDateFormat: {
            LTS: 'h:mm:ss A', LT: 'h:mm A', L: 'MM/DD/YYYY', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY h:mm A', LLLL: 'dddd, MMMM D, YYYY h:mm A',
          },
          invalidDate: 'Invalid date',
          ordinal: '%d',
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
            future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
          },
          months: Be,
          monthsShort: ve,
          week: { dow: 0, doy: 6 },
          weekdays: $e,
          weekdaysMin: Ge,
          weekdaysShort: Je,
          meridiemParse: /[ap]\.?m?\.?/i,
        },
        sa = {},
        oa = {}; function ra(e) { return e ? e.toLowerCase().replace('_', '-') : e; } function ia(a) { let t = null; if (!sa[a] && void 0 !== e && e && e.exports) try { t = ta._abbr; n(142)(`./${a}`), da(t); } catch (e) {} return sa[a]; } function da(e, a) { let n; return e && (n = o(a) ? ua(e) : _a(e, a)) && (ta = n), ta._abbr; } function _a(e, a) { if (a !== null) { let n = Ma; if (a.abbr = e, sa[e] != null)W('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'), n = sa[e]._config; else if (a.parentLocale != null) { if (sa[a.parentLocale] == null) return oa[a.parentLocale] || (oa[a.parentLocale] = []), oa[a.parentLocale].push({ name: e, config: a }), null; n = sa[a.parentLocale]._config; } return sa[e] = new S(g(n, a)), oa[e] && oa[e].forEach((e) => { _a(e.name, e.config); }), da(e), sa[e]; } return delete sa[e], null; } function ua(e) { let a; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return ta; if (!M(e)) { if (a = ia(e)) return a; e = [e]; } return (function (e) { for (var a, n, t, c, M = 0; M < e.length;) { for (a = (c = ra(e[M]).split('-')).length, n = (n = ra(e[M + 1])) ? n.split('-') : null; a > 0;) { if (t = ia(c.slice(0, a).join('-'))) return t; if (n && n.length >= a && y(c, n, !0) >= a - 1) break; a--; }M++; } return null; }(e)); } function la(e) {
        let a,
          n = e._a; return n && m(e).overflow === -2 && (a = n[ze] < 0 || n[ze] > 11 ? ze : n[Ae] < 1 || n[Ae] > we(n[be], n[ze]) ? Ae : n[fe] < 0 || n[fe] > 24 || n[fe] === 24 && (n[he] !== 0 || n[Te] !== 0 || n[Oe] !== 0) ? fe : n[he] < 0 || n[he] > 59 ? he : n[Te] < 0 || n[Te] > 59 ? Te : n[Oe] < 0 || n[Oe] > 999 ? Oe : -1, m(e)._overflowDayOfYear && (a < be || a > Ae) && (a = Ae), m(e)._overflowWeeks && a === -1 && (a = ye), m(e)._overflowWeekday && a === -1 && (a = Ye), m(e).overflow = a), e;
      } function ma(e, a, n) { return e != null ? e : a != null ? a : n; } function pa(e) {
        let a,
          n,
          t,
          M,
          s,
          o = []; if (!e._d) {
          for (t = (function (e) { const a = new Date(c.now()); return e._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()]; }(e)), e._w && e._a[Ae] == null && e._a[ze] == null && (function (e) {
            let a,
              n,
              t,
              c,
              M,
              s,
              o,
              r; if ((a = e._w).GG != null || a.W != null || a.E != null)M = 1, s = 4, n = ma(a.GG, e._a[be], Ie(Na(), 1, 4).year), t = ma(a.W, 1), ((c = ma(a.E, 1)) < 1 || c > 7) && (r = !0); else { M = e._locale._week.dow, s = e._locale._week.doy; const i = Ie(Na(), M, s); n = ma(a.gg, e._a[be], i.year), t = ma(a.w, i.week), a.d != null ? ((c = a.d) < 0 || c > 6) && (r = !0) : a.e != null ? (c = a.e + M, (a.e < 0 || a.e > 6) && (r = !0)) : c = M; }t < 1 || t > Ue(n, M, s) ? m(e)._overflowWeeks = !0 : r != null ? m(e)._overflowWeekday = !0 : (o = Fe(n, t, c, M, s), e._a[be] = o.year, e._dayOfYear = o.dayOfYear);
          }(e)), e._dayOfYear != null && (s = ma(e._a[be], t[be]), (e._dayOfYear > ke(s) || e._dayOfYear === 0) && (m(e)._overflowDayOfYear = !0), n = Pe(s, 0, e._dayOfYear), e._a[ze] = n.getUTCMonth(), e._a[Ae] = n.getUTCDate()), a = 0; a < 3 && e._a[a] == null; ++a)e._a[a] = o[a] = t[a]; for (;a < 7; a++)e._a[a] = o[a] = e._a[a] == null ? a === 2 ? 1 : 0 : e._a[a]; e._a[fe] === 24 && e._a[he] === 0 && e._a[Te] === 0 && e._a[Oe] === 0 && (e._nextDay = !0, e._a[fe] = 0), e._d = (e._useUTC ? Pe : function (e, a, n, t, c, M, s) { const o = new Date(e, a, n, t, c, M, s); return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o; })(...o), M = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[fe] = 24), e._w && void 0 !== e._w.d && e._w.d !== M && (m(e).weekdayMismatch = !0);
        }
      } let La = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ba = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        za = /Z|[+-]\d\d(?::?\d\d)?/,
        Aa = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, !1], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, !1], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, !1], ['YYYYDDD', /\d{7}/]],
        fa = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
        ha = /^\/?Date\((\-?\d+)/i; function Ta(e) {
        let a,
          n,
          t,
          c,
          M,
          s,
          o = e._i,
          r = La.exec(o) || ba.exec(o); if (r) { for (m(e).iso = !0, a = 0, n = Aa.length; a < n; a++) if (Aa[a][1].exec(r[1])) { c = Aa[a][0], t = !1 !== Aa[a][2]; break; } if (c == null) return void (e._isValid = !1); if (r[3]) { for (a = 0, n = fa.length; a < n; a++) if (fa[a][1].exec(r[3])) { M = (r[2] || ' ') + fa[a][0]; break; } if (M == null) return void (e._isValid = !1); } if (!t && M != null) return void (e._isValid = !1); if (r[4]) { if (!za.exec(r[4])) return void (e._isValid = !1); s = 'Z'; }e._f = c + (M || '') + (s || ''), qa(e); } else e._isValid = !1;
      } const Oa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/; function ya(e, a, n, t, c, M) { const s = [(function (e) { const a = parseInt(e, 10); if (a <= 49) return 2e3 + a; if (a <= 999) return 1900 + a; return a; }(e)), ve.indexOf(a), parseInt(n, 10), parseInt(t, 10), parseInt(c, 10)]; return M && s.push(parseInt(M, 10)), s; } const Ya = {
        UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480,
      }; function ka(e) {
        const a = Oa.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim()); if (a) {
          const n = ya(a[4], a[3], a[2], a[5], a[6], a[7]); if (!(function (e, a, n) { return !e || Je.indexOf(e) === new Date(a[0], a[1], a[2]).getDay() || (m(n).weekdayMismatch = !0, n._isValid = !1, !1); }(a[1], n, e))) return; e._a = n, e._tzm = (function (e, a, n) {
            if (e) return Ya[e]; if (a) return 0; let t = parseInt(n, 10),
              c = t % 100; return (t - c) / 100 * 60 + c;
          }(a[8], a[9], a[10])), e._d = Pe(...e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0;
        } else e._isValid = !1;
      } function qa(e) {
        if (e._f !== c.ISO_8601) {
          if (e._f !== c.RFC_2822) {
            e._a = [], m(e).empty = !0; let a,
              n,
              t,
              M,
              s,
              o = `${e._i}`,
              r = o.length,
              i = 0; for (t = U(e._f, e._locale).match(C) || [], a = 0; a < t.length; a++)M = t[a], (n = (o.match(_e(M, e)) || [])[0]) && ((s = o.substr(0, o.indexOf(n))).length > 0 && m(e).unusedInput.push(s), o = o.slice(o.indexOf(n) + n.length), i += n.length), R[M] ? (n ? m(e).empty = !1 : m(e).unusedTokens.push(M), Le(M, n, e)) : e._strict && !n && m(e).unusedTokens.push(M); m(e).charsLeftOver = r - i, o.length > 0 && m(e).unusedInput.push(o), e._a[fe] <= 12 && !0 === m(e).bigHour && e._a[fe] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[fe] = (function (e, a, n) { let t; if (n == null) return a; return e.meridiemHour != null ? e.meridiemHour(a, n) : e.isPM != null ? ((t = e.isPM(n)) && a < 12 && (a += 12), t || a !== 12 || (a = 0), a) : a; }(e._locale, e._a[fe], e._meridiem)), pa(e), la(e);
          } else ka(e);
        } else Ta(e);
      } function Da(e) {
        let a = e._i,
          n = e._f; return e._locale = e._locale || ua(e._l), a === null || void 0 === n && a === '' ? L({ nullInput: !0 }) : (typeof a === 'string' && (e._i = a = e._locale.preparse(a)), h(a) ? new f(la(a)) : (i(a) ? e._d = a : M(n) ? (function (e) {
          let a,
            n,
            t,
            c,
            M; if (e._f.length === 0) return m(e).invalidFormat = !0, void (e._d = new Date(NaN)); for (c = 0; c < e._f.length; c++)M = 0, a = z({}, e), e._useUTC != null && (a._useUTC = e._useUTC), a._f = e._f[c], qa(a), p(a) && (M += m(a).charsLeftOver, M += 10 * m(a).unusedTokens.length, m(a).score = M, (t == null || M < t) && (t = M, n = a)); u(e, n || a);
        }(e)) : n ? qa(e) : (function (e) { const a = e._i; o(a) ? e._d = new Date(c.now()) : i(a) ? e._d = new Date(a.valueOf()) : typeof a === 'string' ? (function (e) { const a = ha.exec(e._i); a === null ? (Ta(e), !1 === e._isValid && (delete e._isValid, ka(e), !1 === e._isValid && (delete e._isValid, c.createFromInputFallback(e)))) : e._d = new Date(+a[1]); }(e)) : M(a) ? (e._a = d(a.slice(0), e => parseInt(e, 10)), pa(e)) : s(a) ? (function (e) { if (!e._d) { const a = v(e._i); e._a = d([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], e => e && parseInt(e, 10)), pa(e); } }(e)) : r(a) ? e._d = new Date(a) : c.createFromInputFallback(e); }(e)), p(e) || (e._d = null), e));
      } function Wa(e, a, n, t, c) {
        let o,
          r = {}; return !0 !== n && !1 !== n || (t = n, n = void 0), (s(e) && (function (e) { if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0; let a; for (a in e) if (e.hasOwnProperty(a)) return !1; return !0; }(e)) || M(e) && e.length === 0) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = c, r._l = n, r._i = e, r._f = a, r._strict = t, (o = new f(la(Da(r))))._nextDay && (o.add(1, 'd'), o._nextDay = void 0), o;
      } function Na(e, a, n, t) { return Wa(e, a, n, t, !1); }c.createFromInputFallback = k('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', (e) => { e._d = new Date(e._i + (e._useUTC ? ' UTC' : '')); }), c.ISO_8601 = function () {}, c.RFC_2822 = function () {}; let ga = k('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () { const e = Na(...arguments); return this.isValid() && e.isValid() ? e < this ? this : e : L(); }),
        Sa = k('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () { const e = Na(...arguments); return this.isValid() && e.isValid() ? e > this ? this : e : L(); }); function wa(e, a) {
        let n,
          t; if (a.length === 1 && M(a[0]) && (a = a[0]), !a.length) return Na(); for (n = a[0], t = 1; t < a.length; ++t)a[t].isValid() && !a[t][e](n) || (n = a[t]); return n;
      } const Xa = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']; function Ba(e) {
        let a = v(e),
          n = a.year || 0,
          t = a.quarter || 0,
          c = a.month || 0,
          M = a.week || 0,
          s = a.day || 0,
          o = a.hour || 0,
          r = a.minute || 0,
          i = a.second || 0,
          d = a.millisecond || 0; this._isValid = (function (e) { for (const a in e) if (De.call(Xa, a) === -1 || e[a] != null && isNaN(e[a])) return !1; for (let n = !1, t = 0; t < Xa.length; ++t) if (e[Xa[t]]) { if (n) return !1; parseFloat(e[Xa[t]]) !== O(e[Xa[t]]) && (n = !0); } return !0; }(a)), this._milliseconds = +d + 1e3 * i + 6e4 * r + 1e3 * o * 60 * 60, this._days = +s + 7 * M, this._months = +c + 3 * t + 12 * n, this._data = {}, this._locale = ua(), this._bubble();
      } function va(e) { return e instanceof Ba; } function Ha(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e); } function Ea(e, a) {
        F(e, 0, 0, function () {
          let e = this.utcOffset(),
            n = '+'; return e < 0 && (e = -e, n = '-'), n + j(~~(e / 60), 2) + a + j(~~e % 60, 2);
        });
      }Ea('Z', ':'), Ea('ZZ', ''), de('Z', oe), de('ZZ', oe), me(['Z', 'ZZ'], (e, a, n) => { n._useUTC = !0, n._tzm = Ca(oe, e); }); const ja = /([\+\-]|\d\d)/gi; function Ca(e, a) {
        const n = (a || '').match(e); if (n === null) return null; let t = (`${n[n.length - 1] || []}`).match(ja) || ['-', 0, 0],
          c = 60 * t[1] + O(t[2]); return c === 0 ? 0 : t[0] === '+' ? c : -c;
      } function xa(e, a) {
        let n,
          t; return a._isUTC ? (n = a.clone(), t = (h(e) || i(e) ? e.valueOf() : Na(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + t), c.updateOffset(n, !1), n) : Na(e).local();
      } function Pa(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15); } function Ra() { return !!this.isValid() && (this._isUTC && this._offset === 0); }c.updateOffset = function () {}; let Fa = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; function Ua(e, a) {
        let n,
          t,
          c,
          M = e,
          s = null; return va(e) ? M = { ms: e._milliseconds, d: e._days, M: e._months } : r(e) ? (M = {}, a ? M[a] = e : M.milliseconds = e) : (s = Fa.exec(e)) ? (n = s[1] === '-' ? -1 : 1, M = {
          y: 0, d: O(s[Ae]) * n, h: O(s[fe]) * n, m: O(s[he]) * n, s: O(s[Te]) * n, ms: O(Ha(1e3 * s[Oe])) * n,
        }) : (s = Ia.exec(e)) ? (n = s[1] === '-' ? -1 : (s[1], 1), M = {
          y: $a(s[2], n), M: $a(s[3], n), w: $a(s[4], n), d: $a(s[5], n), h: $a(s[6], n), m: $a(s[7], n), s: $a(s[8], n),
        }) : M == null ? M = {} : typeof M === 'object' && ('from' in M || 'to' in M) && (c = (function (e, a) { let n; if (!e.isValid() || !a.isValid()) return { milliseconds: 0, months: 0 }; a = xa(a, e), e.isBefore(a) ? n = Ja(e, a) : ((n = Ja(a, e)).milliseconds = -n.milliseconds, n.months = -n.months); return n; }(Na(M.from), Na(M.to))), (M = {}).ms = c.milliseconds, M.M = c.months), t = new Ba(M), va(e) && _(e, '_locale') && (t._locale = e._locale), t;
      } function $a(e, a) { const n = e && parseFloat(e.replace(',', '.')); return (isNaN(n) ? 0 : n) * a; } function Ja(e, a) { const n = { milliseconds: 0, months: 0 }; return n.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(n.months, 'M').isAfter(a) && --n.months, n.milliseconds = +a - +e.clone().add(n.months, 'M'), n; } function Ga(e, a) { return function (n, t) { let c; return t === null || isNaN(+t) || (W(a, `moment().${a}(period, number) is deprecated. Please use moment().${a}(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`), c = n, n = t, t = c), Ka(this, Ua(n = typeof n === 'string' ? +n : n, t), e), this; }; } function Ka(e, a, n, t) {
        let M = a._milliseconds,
          s = Ha(a._days),
          o = Ha(a._months); e.isValid() && (t = t == null || t, o && He(e, ge(e, 'Month') + o * n), s && Se(e, 'Date', ge(e, 'Date') + s * n), M && e._d.setTime(e._d.valueOf() + M * n), t && c.updateOffset(e, s || o));
      }Ua.fn = Ba.prototype, Ua.invalid = function () { return Ua(NaN); }; let Va = Ga(1, 'add'),
        Qa = Ga(-1, 'subtract'); function Za(e, a) {
        let n = 12 * (a.year() - e.year()) + (a.month() - e.month()),
          t = e.clone().add(n, 'months'); return -(n + (a - t < 0 ? (a - t) / (t - e.clone().add(n - 1, 'months')) : (a - t) / (e.clone().add(n + 1, 'months') - t))) || 0;
      } function en(e) { let a; return void 0 === e ? this._locale._abbr : ((a = ua(e)) != null && (this._locale = a), this); }c.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ', c.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]'; const an = k('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (e) { return void 0 === e ? this.localeData() : this.locale(e); }); function nn() { return this._locale; } function tn(e, a) { F(0, [e, e.length], 0, a); } function cn(e, a, n, t, c) {
        let M; return e == null ? Ie(this, t, c).year : (a > (M = Ue(e, t, c)) && (a = M), function (e, a, n, t, c) {
          let M = Fe(e, a, n, t, c),
            s = Pe(M.year, 0, M.dayOfYear); return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
        }.call(this, e, a, n, t, c));
      }F(0, ['gg', 2], 0, function () { return this.weekYear() % 100; }), F(0, ['GG', 2], 0, function () { return this.isoWeekYear() % 100; }), tn('gggg', 'weekYear'), tn('ggggg', 'weekYear'), tn('GGGG', 'isoWeekYear'), tn('GGGGG', 'isoWeekYear'), X('weekYear', 'gg'), X('isoWeekYear', 'GG'), E('weekYear', 1), E('isoWeekYear', 1), de('G', Me), de('g', Me), de('GG', Q, J), de('gg', Q, J), de('GGGG', ne, K), de('gggg', ne, K), de('GGGGG', te, V), de('ggggg', te, V), pe(['gggg', 'ggggg', 'GGGG', 'GGGGG'], (e, a, n, t) => { a[t.substr(0, 2)] = O(e); }), pe(['gg', 'GG'], (e, a, n, t) => { a[t] = c.parseTwoDigitYear(e); }), F('Q', 0, 'Qo', 'quarter'), X('quarter', 'Q'), E('quarter', 7), de('Q', $), me('Q', (e, a) => { a[ze] = 3 * (O(e) - 1); }), F('D', ['DD', 2], 'Do', 'date'), X('date', 'D'), E('date', 9), de('D', Q), de('DD', Q, J), de('Do', (e, a) => (e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient)), me(['D', 'DD'], Ae), me('Do', (e, a) => { a[Ae] = O(e.match(Q)[0]); }); const Mn = Ne('Date', !0); F('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'), X('dayOfYear', 'DDD'), E('dayOfYear', 4), de('DDD', ae), de('DDDD', G), me(['DDD', 'DDDD'], (e, a, n) => { n._dayOfYear = O(e); }), F('m', ['mm', 2], 0, 'minute'), X('minute', 'm'), E('minute', 14), de('m', Q), de('mm', Q, J), me(['m', 'mm'], he); const sn = Ne('Minutes', !1); F('s', ['ss', 2], 0, 'second'), X('second', 's'), E('second', 15), de('s', Q), de('ss', Q, J), me(['s', 'ss'], Te); let on,
        rn = Ne('Seconds', !1); for (F('S', 0, 0, function () { return ~~(this.millisecond() / 100); }), F(0, ['SS', 2], 0, function () { return ~~(this.millisecond() / 10); }), F(0, ['SSS', 3], 0, 'millisecond'), F(0, ['SSSS', 4], 0, function () { return 10 * this.millisecond(); }), F(0, ['SSSSS', 5], 0, function () { return 100 * this.millisecond(); }), F(0, ['SSSSSS', 6], 0, function () { return 1e3 * this.millisecond(); }), F(0, ['SSSSSSS', 7], 0, function () { return 1e4 * this.millisecond(); }), F(0, ['SSSSSSSS', 8], 0, function () { return 1e5 * this.millisecond(); }), F(0, ['SSSSSSSSS', 9], 0, function () { return 1e6 * this.millisecond(); }), X('millisecond', 'ms'), E('millisecond', 16), de('S', ae, $), de('SS', ae, J), de('SSS', ae, G), on = 'SSSS'; on.length <= 9; on += 'S')de(on, ce); function dn(e, a) { a[Oe] = O(1e3 * (`0.${e}`)); } for (on = 'S'; on.length <= 9; on += 'S')me(on, dn); const _n = Ne('Milliseconds', !1); F('z', 0, 0, 'zoneAbbr'), F('zz', 0, 0, 'zoneName'); const un = f.prototype; function ln(e) { return e; }un.add = Va, un.calendar = function (e, a) {
        let n = e || Na(),
          t = xa(n, this).startOf('day'),
          M = c.calendarFormat(this, t) || 'sameElse',
          s = a && (N(a[M]) ? a[M].call(this, n) : a[M]); return this.format(s || this.localeData().calendar(M, this, Na(n)));
      }, un.clone = function () { return new f(this); }, un.diff = function (e, a, n) {
        let t,
          c,
          M; if (!this.isValid()) return NaN; if (!(t = xa(e, this)).isValid()) return NaN; switch (c = 6e4 * (t.utcOffset() - this.utcOffset()), a = B(a)) { case 'year': M = Za(this, t) / 12; break; case 'month': M = Za(this, t); break; case 'quarter': M = Za(this, t) / 3; break; case 'second': M = (this - t) / 1e3; break; case 'minute': M = (this - t) / 6e4; break; case 'hour': M = (this - t) / 36e5; break; case 'day': M = (this - t - c) / 864e5; break; case 'week': M = (this - t - c) / 6048e5; break; default: M = this - t; } return n ? M : T(M);
      }, un.endOf = function (e) { return void 0 === (e = B(e)) || e === 'millisecond' ? this : (e === 'date' && (e = 'day'), this.startOf(e).add(1, e === 'isoWeek' ? 'week' : e).subtract(1, 'ms')); }, un.format = function (e) { e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat); const a = I(this, e); return this.localeData().postformat(a); }, un.from = function (e, a) { return this.isValid() && (h(e) && e.isValid() || Na(e).isValid()) ? Ua({ to: this, from: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate(); }, un.fromNow = function (e) { return this.from(Na(), e); }, un.to = function (e, a) { return this.isValid() && (h(e) && e.isValid() || Na(e).isValid()) ? Ua({ from: this, to: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate(); }, un.toNow = function (e) { return this.to(Na(), e); }, un.get = function (e) { return N(this[e = B(e)]) ? this[e]() : this; }, un.invalidAt = function () { return m(this).overflow; }, un.isAfter = function (e, a) { const n = h(e) ? e : Na(e); return !(!this.isValid() || !n.isValid()) && ((a = B(o(a) ? 'millisecond' : a)) === 'millisecond' ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(a).valueOf()); }, un.isBefore = function (e, a) { const n = h(e) ? e : Na(e); return !(!this.isValid() || !n.isValid()) && ((a = B(o(a) ? 'millisecond' : a)) === 'millisecond' ? this.valueOf() < n.valueOf() : this.clone().endOf(a).valueOf() < n.valueOf()); }, un.isBetween = function (e, a, n, t) { return ((t = t || '()')[0] === '(' ? this.isAfter(e, n) : !this.isBefore(e, n)) && (t[1] === ')' ? this.isBefore(a, n) : !this.isAfter(a, n)); }, un.isSame = function (e, a) {
        let n,
          t = h(e) ? e : Na(e); return !(!this.isValid() || !t.isValid()) && ((a = B(a || 'millisecond')) === 'millisecond' ? this.valueOf() === t.valueOf() : (n = t.valueOf(), this.clone().startOf(a).valueOf() <= n && n <= this.clone().endOf(a).valueOf()));
      }, un.isSameOrAfter = function (e, a) { return this.isSame(e, a) || this.isAfter(e, a); }, un.isSameOrBefore = function (e, a) { return this.isSame(e, a) || this.isBefore(e, a); }, un.isValid = function () { return p(this); }, un.lang = an, un.locale = en, un.localeData = nn, un.max = Sa, un.min = ga, un.parsingFlags = function () { return u({}, m(this)); }, un.set = function (e, a) { if (typeof e === 'object') for (let n = (function (e) { const a = []; for (const n in e)a.push({ unit: n, priority: H[n] }); return a.sort((e, a) => e.priority - a.priority), a; }(e = v(e))), t = 0; t < n.length; t++) this[n[t].unit](e[n[t].unit]); else if (N(this[e = B(e)])) return this[e](a); return this; }, un.startOf = function (e) { switch (e = B(e)) { case 'year': this.month(0); case 'quarter': case 'month': this.date(1); case 'week': case 'isoWeek': case 'day': case 'date': this.hours(0); case 'hour': this.minutes(0); case 'minute': this.seconds(0); case 'second': this.milliseconds(0); } return e === 'week' && this.weekday(0), e === 'isoWeek' && this.isoWeekday(1), e === 'quarter' && this.month(3 * Math.floor(this.month() / 3)), this; }, un.subtract = Qa, un.toArray = function () { const e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]; }, un.toObject = function () {
        const e = this; return {
          years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds(),
        };
      }, un.toDate = function () { return new Date(this.valueOf()); }, un.toISOString = function (e) {
        if (!this.isValid()) return null; let a = !0 !== e,
          n = a ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? I(n, a ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ') : N(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace('Z', I(n, 'Z')) : I(n, a ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }, un.inspect = function () {
        if (!this.isValid()) return `moment.invalid(/* ${this._i} */)`; let e = 'moment',
          a = ''; this.isLocal() || (e = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone', a = 'Z'); let n = `[${e}("]`,
          t = this.year() >= 0 && this.year() <= 9999 ? 'YYYY' : 'YYYYYY',
          c = `${a}[")]`; return this.format(`${n + t}-MM-DD[T]HH:mm:ss.SSS${c}`);
      }, un.toJSON = function () { return this.isValid() ? this.toISOString() : null; }, un.toString = function () { return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ'); }, un.unix = function () { return Math.floor(this.valueOf() / 1e3); }, un.valueOf = function () { return this._d.valueOf() - 6e4 * (this._offset || 0); }, un.creationData = function () {
        return {
          input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict,
        };
      }, un.year = We, un.isLeapYear = function () { return qe(this.year()); }, un.weekYear = function (e) { return cn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy); }, un.isoWeekYear = function (e) { return cn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4); }, un.quarter = un.quarters = function (e) { return e == null ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3); }, un.month = Ee, un.daysInMonth = function () { return we(this.year(), this.month()); }, un.week = un.weeks = function (e) { const a = this.localeData().week(this); return e == null ? a : this.add(7 * (e - a), 'd'); }, un.isoWeek = un.isoWeeks = function (e) { const a = Ie(this, 1, 4).week; return e == null ? a : this.add(7 * (e - a), 'd'); }, un.weeksInYear = function () { const e = this.localeData()._week; return Ue(this.year(), e.dow, e.doy); }, un.isoWeeksInYear = function () { return Ue(this.year(), 1, 4); }, un.date = Mn, un.day = un.days = function (e) { if (!this.isValid()) return e != null ? this : NaN; const a = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return e != null ? (e = (function (e, a) { return typeof e !== 'string' ? e : isNaN(e) ? typeof (e = a.weekdaysParse(e)) === 'number' ? e : null : parseInt(e, 10); }(e, this.localeData())), this.add(e - a, 'd')) : a; }, un.weekday = function (e) { if (!this.isValid()) return e != null ? this : NaN; const a = (this.day() + 7 - this.localeData()._week.dow) % 7; return e == null ? a : this.add(e - a, 'd'); }, un.isoWeekday = function (e) { if (!this.isValid()) return e != null ? this : NaN; if (e != null) { const a = (function (e, a) { return typeof e === 'string' ? a.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e; }(e, this.localeData())); return this.day(this.day() % 7 ? a : a - 7); } return this.day() || 7; }, un.dayOfYear = function (e) { const a = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1; return e == null ? a : this.add(e - a, 'd'); }, un.hour = un.hours = ca, un.minute = un.minutes = sn, un.second = un.seconds = rn, un.millisecond = un.milliseconds = _n, un.utcOffset = function (e, a, n) {
        let t,
          M = this._offset || 0; if (!this.isValid()) return e != null ? this : NaN; if (e != null) { if (typeof e === 'string') { if ((e = Ca(oe, e)) === null) return this; } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && a && (t = Pa(this)), this._offset = e, this._isUTC = !0, t != null && this.add(t, 'm'), M !== e && (!a || this._changeInProgress ? Ka(this, Ua(e - M, 'm'), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this; } return this._isUTC ? M : Pa(this);
      }, un.utc = function (e) { return this.utcOffset(0, e); }, un.local = function (e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Pa(this), 'm')), this; }, un.parseZone = function () { if (this._tzm != null) this.utcOffset(this._tzm, !1, !0); else if (typeof this._i === 'string') { const e = Ca(se, this._i); e != null ? this.utcOffset(e) : this.utcOffset(0, !0); } return this; }, un.hasAlignedHourOffset = function (e) { return !!this.isValid() && (e = e ? Na(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0); }, un.isDST = function () { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset(); }, un.isLocal = function () { return !!this.isValid() && !this._isUTC; }, un.isUtcOffset = function () { return !!this.isValid() && this._isUTC; }, un.isUtc = Ra, un.isUTC = Ra, un.zoneAbbr = function () { return this._isUTC ? 'UTC' : ''; }, un.zoneName = function () { return this._isUTC ? 'Coordinated Universal Time' : ''; }, un.dates = k('dates accessor is deprecated. Use date instead.', Mn), un.months = k('months accessor is deprecated. Use month instead', Ee), un.years = k('years accessor is deprecated. Use year instead', We), un.zone = k('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', function (e, a) { return e != null ? (typeof e !== 'string' && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset(); }), un.isDSTShifted = k('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', function () { if (!o(this._isDSTShifted)) return this._isDSTShifted; let e = {}; if (z(e, this), (e = Da(e))._a) { const a = e._isUTC ? l(e._a) : Na(e._a); this._isDSTShifted = this.isValid() && y(e._a, a.toArray()) > 0; } else this._isDSTShifted = !1; return this._isDSTShifted; }); const mn = S.prototype; function pn(e, a, n, t) {
        let c = ua(),
          M = l().set(t, a); return c[n](M, e);
      } function Ln(e, a, n) {
        if (r(e) && (a = e, e = void 0), e = e || '', a != null) return pn(e, a, n, 'month'); let t,
          c = []; for (t = 0; t < 12; t++)c[t] = pn(e, t, n, 'month'); return c;
      } function bn(e, a, n, t) {
        typeof e === 'boolean' ? (r(a) && (n = a, a = void 0), a = a || '') : (n = a = e, e = !1, r(a) && (n = a, a = void 0), a = a || ''); let c,
          M = ua(),
          s = e ? M._week.dow : 0; if (n != null) return pn(a, (n + s) % 7, t, 'day'); const o = []; for (c = 0; c < 7; c++)o[c] = pn(a, (c + s) % 7, t, 'day'); return o;
      }mn.calendar = function (e, a, n) { const t = this._calendar[e] || this._calendar.sameElse; return N(t) ? t.call(a, n) : t; }, mn.longDateFormat = function (e) {
        let a = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()]; return a || !n ? a : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, e => e.slice(1)), this._longDateFormat[e]);
      }, mn.invalidDate = function () { return this._invalidDate; }, mn.ordinal = function (e) { return this._ordinal.replace('%d', e); }, mn.preparse = ln, mn.postformat = ln, mn.relativeTime = function (e, a, n, t) { const c = this._relativeTime[n]; return N(c) ? c(e, a, n, t) : c.replace(/%d/i, e); }, mn.pastFuture = function (e, a) { const n = this._relativeTime[e > 0 ? 'future' : 'past']; return N(n) ? n(a) : n.replace(/%s/i, a); }, mn.set = function (e) {
        let a,
          n; for (n in e)N(a = e[n]) ? this[n] = a : this[`_${n}`] = a; this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(`${this._dayOfMonthOrdinalParse.source || this._ordinalParse.source}|${/\d{1,2}/.source}`);
      }, mn.months = function (e, a) { return e ? M(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Xe).test(a) ? 'format' : 'standalone'][e.month()] : M(this._months) ? this._months : this._months.standalone; }, mn.monthsShort = function (e, a) { return e ? M(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Xe.test(a) ? 'format' : 'standalone'][e.month()] : M(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone; }, mn.monthsParse = function (e, a, n) {
        let t,
          c,
          M; if (this._monthsParseExact) {
          return function (e, a, n) {
            let t,
              c,
              M,
              s = e.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], t = 0; t < 12; ++t)M = l([2e3, t]), this._shortMonthsParse[t] = this.monthsShort(M, '').toLocaleLowerCase(), this._longMonthsParse[t] = this.months(M, '').toLocaleLowerCase(); return n ? a === 'MMM' ? (c = De.call(this._shortMonthsParse, s)) !== -1 ? c : null : (c = De.call(this._longMonthsParse, s)) !== -1 ? c : null : a === 'MMM' ? (c = De.call(this._shortMonthsParse, s)) !== -1 ? c : (c = De.call(this._longMonthsParse, s)) !== -1 ? c : null : (c = De.call(this._longMonthsParse, s)) !== -1 ? c : (c = De.call(this._shortMonthsParse, s)) !== -1 ? c : null;
          }.call(this, e, a, n);
        } for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), t = 0; t < 12; t++) { if (c = l([2e3, t]), n && !this._longMonthsParse[t] && (this._longMonthsParse[t] = new RegExp(`^${this.months(c, '').replace('.', '')}$`, 'i'), this._shortMonthsParse[t] = new RegExp(`^${this.monthsShort(c, '').replace('.', '')}$`, 'i')), n || this._monthsParse[t] || (M = `^${this.months(c, '')}|^${this.monthsShort(c, '')}`, this._monthsParse[t] = new RegExp(M.replace('.', ''), 'i')), n && a === 'MMMM' && this._longMonthsParse[t].test(e)) return t; if (n && a === 'MMM' && this._shortMonthsParse[t].test(e)) return t; if (!n && this._monthsParse[t].test(e)) return t; }
      }, mn.monthsRegex = function (e) { return this._monthsParseExact ? (_(this, '_monthsRegex') || xe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (_(this, '_monthsRegex') || (this._monthsRegex = Ce), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex); }, mn.monthsShortRegex = function (e) { return this._monthsParseExact ? (_(this, '_monthsRegex') || xe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_(this, '_monthsShortRegex') || (this._monthsShortRegex = je), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex); }, mn.week = function (e) { return Ie(e, this._week.dow, this._week.doy).week; }, mn.firstDayOfYear = function () { return this._week.doy; }, mn.firstDayOfWeek = function () { return this._week.dow; }, mn.weekdays = function (e, a) { return e ? M(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(a) ? 'format' : 'standalone'][e.day()] : M(this._weekdays) ? this._weekdays : this._weekdays.standalone; }, mn.weekdaysMin = function (e) { return e ? this._weekdaysMin[e.day()] : this._weekdaysMin; }, mn.weekdaysShort = function (e) { return e ? this._weekdaysShort[e.day()] : this._weekdaysShort; }, mn.weekdaysParse = function (e, a, n) {
        let t,
          c,
          M; if (this._weekdaysParseExact) {
          return function (e, a, n) {
            let t,
              c,
              M,
              s = e.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], t = 0; t < 7; ++t)M = l([2e3, 1]).day(t), this._minWeekdaysParse[t] = this.weekdaysMin(M, '').toLocaleLowerCase(), this._shortWeekdaysParse[t] = this.weekdaysShort(M, '').toLocaleLowerCase(), this._weekdaysParse[t] = this.weekdays(M, '').toLocaleLowerCase(); return n ? a === 'dddd' ? (c = De.call(this._weekdaysParse, s)) !== -1 ? c : null : a === 'ddd' ? (c = De.call(this._shortWeekdaysParse, s)) !== -1 ? c : null : (c = De.call(this._minWeekdaysParse, s)) !== -1 ? c : null : a === 'dddd' ? (c = De.call(this._weekdaysParse, s)) !== -1 ? c : (c = De.call(this._shortWeekdaysParse, s)) !== -1 ? c : (c = De.call(this._minWeekdaysParse, s)) !== -1 ? c : null : a === 'ddd' ? (c = De.call(this._shortWeekdaysParse, s)) !== -1 ? c : (c = De.call(this._weekdaysParse, s)) !== -1 ? c : (c = De.call(this._minWeekdaysParse, s)) !== -1 ? c : null : (c = De.call(this._minWeekdaysParse, s)) !== -1 ? c : (c = De.call(this._weekdaysParse, s)) !== -1 ? c : (c = De.call(this._shortWeekdaysParse, s)) !== -1 ? c : null;
          }.call(this, e, a, n);
        } for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), t = 0; t < 7; t++) { if (c = l([2e3, 1]).day(t), n && !this._fullWeekdaysParse[t] && (this._fullWeekdaysParse[t] = new RegExp(`^${this.weekdays(c, '').replace('.', '.?')}$`, 'i'), this._shortWeekdaysParse[t] = new RegExp(`^${this.weekdaysShort(c, '').replace('.', '.?')}$`, 'i'), this._minWeekdaysParse[t] = new RegExp(`^${this.weekdaysMin(c, '').replace('.', '.?')}$`, 'i')), this._weekdaysParse[t] || (M = `^${this.weekdays(c, '')}|^${this.weekdaysShort(c, '')}|^${this.weekdaysMin(c, '')}`, this._weekdaysParse[t] = new RegExp(M.replace('.', ''), 'i')), n && a === 'dddd' && this._fullWeekdaysParse[t].test(e)) return t; if (n && a === 'ddd' && this._shortWeekdaysParse[t].test(e)) return t; if (n && a === 'dd' && this._minWeekdaysParse[t].test(e)) return t; if (!n && this._weekdaysParse[t].test(e)) return t; }
      }, mn.weekdaysRegex = function (e) { return this._weekdaysParseExact ? (_(this, '_weekdaysRegex') || Ze.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_(this, '_weekdaysRegex') || (this._weekdaysRegex = Ke), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex); }, mn.weekdaysShortRegex = function (e) { return this._weekdaysParseExact ? (_(this, '_weekdaysRegex') || Ze.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = Ve), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex); }, mn.weekdaysMinRegex = function (e) { return this._weekdaysParseExact ? (_(this, '_weekdaysRegex') || Ze.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex); }, mn.isPM = function (e) { return (`${e}`).toLowerCase().charAt(0) === 'p'; }, mn.meridiem = function (e, a, n) { return e > 11 ? n ? 'pm' : 'PM' : n ? 'am' : 'AM'; }, da('en', { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal(e) { const a = e % 10; return e + (O(e % 100 / 10) === 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); } }), c.lang = k('moment.lang is deprecated. Use moment.locale instead.', da), c.langData = k('moment.langData is deprecated. Use moment.localeData instead.', ua); const zn = Math.abs; function An(e, a, n, t) { const c = Ua(a, n); return e._milliseconds += t * c._milliseconds, e._days += t * c._days, e._months += t * c._months, e._bubble(); } function fn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e); } function hn(e) { return 4800 * e / 146097; } function Tn(e) { return 146097 * e / 4800; } function On(e) { return function () { return this.as(e); }; } let yn = On('ms'),
        Yn = On('s'),
        kn = On('m'),
        qn = On('h'),
        Dn = On('d'),
        Wn = On('w'),
        Nn = On('M'),
        gn = On('y'); function Sn(e) { return function () { return this.isValid() ? this._data[e] : NaN; }; } let wn = Sn('milliseconds'),
        Xn = Sn('seconds'),
        Bn = Sn('minutes'),
        vn = Sn('hours'),
        Hn = Sn('days'),
        En = Sn('months'),
        jn = Sn('years'); let Cn = Math.round,
        xn = {
          ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11,
        }; const Pn = Math.abs; function Rn(e) { return (e > 0) - (e < 0) || +e; } function Fn() {
        if (!this.isValid()) return this.localeData().invalidDate(); let e,
          a,
          n = Pn(this._milliseconds) / 1e3,
          t = Pn(this._days),
          c = Pn(this._months); a = T((e = T(n / 60)) / 60), n %= 60, e %= 60; let M = T(c / 12),
          s = c %= 12,
          o = t,
          r = a,
          i = e,
          d = n ? n.toFixed(3).replace(/\.?0+$/, '') : '',
          _ = this.asSeconds(); if (!_) return 'P0D'; let u = _ < 0 ? '-' : '',
          l = Rn(this._months) !== Rn(_) ? '-' : '',
          m = Rn(this._days) !== Rn(_) ? '-' : '',
          p = Rn(this._milliseconds) !== Rn(_) ? '-' : ''; return `${u}P${M ? `${l + M}Y` : ''}${s ? `${l + s}M` : ''}${o ? `${m + o}D` : ''}${r || i || d ? 'T' : ''}${r ? `${p + r}H` : ''}${i ? `${p + i}M` : ''}${d ? `${p + d}S` : ''}`;
      } const In = Ba.prototype; return In.isValid = function () { return this._isValid; }, In.abs = function () { const e = this._data; return this._milliseconds = zn(this._milliseconds), this._days = zn(this._days), this._months = zn(this._months), e.milliseconds = zn(e.milliseconds), e.seconds = zn(e.seconds), e.minutes = zn(e.minutes), e.hours = zn(e.hours), e.months = zn(e.months), e.years = zn(e.years), this; }, In.add = function (e, a) { return An(this, e, a, 1); }, In.subtract = function (e, a) { return An(this, e, a, -1); }, In.as = function (e) {
        if (!this.isValid()) return NaN; let a,
          n,
          t = this._milliseconds; if ((e = B(e)) === 'month' || e === 'year') return a = this._days + t / 864e5, n = this._months + hn(a), e === 'month' ? n : n / 12; switch (a = this._days + Math.round(Tn(this._months)), e) { case 'week': return a / 7 + t / 6048e5; case 'day': return a + t / 864e5; case 'hour': return 24 * a + t / 36e5; case 'minute': return 1440 * a + t / 6e4; case 'second': return 86400 * a + t / 1e3; case 'millisecond': return Math.floor(864e5 * a) + t; default: throw new Error(`Unknown unit ${e}`); }
      }, In.asMilliseconds = yn, In.asSeconds = Yn, In.asMinutes = kn, In.asHours = qn, In.asDays = Dn, In.asWeeks = Wn, In.asMonths = Nn, In.asYears = gn, In.valueOf = function () { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * O(this._months / 12) : NaN; }, In._bubble = function () {
        let e,
          a,
          n,
          t,
          c,
          M = this._milliseconds,
          s = this._days,
          o = this._months,
          r = this._data; return M >= 0 && s >= 0 && o >= 0 || M <= 0 && s <= 0 && o <= 0 || (M += 864e5 * fn(Tn(o) + s), s = 0, o = 0), r.milliseconds = M % 1e3, e = T(M / 1e3), r.seconds = e % 60, a = T(e / 60), r.minutes = a % 60, n = T(a / 60), r.hours = n % 24, o += c = T(hn(s += T(n / 24))), s -= fn(Tn(c)), t = T(o / 12), o %= 12, r.days = s, r.months = o, r.years = t, this;
      }, In.clone = function () { return Ua(this); }, In.get = function (e) { return e = B(e), this.isValid() ? this[`${e}s`]() : NaN; }, In.milliseconds = wn, In.seconds = Xn, In.minutes = Bn, In.hours = vn, In.days = Hn, In.weeks = function () { return T(this.days() / 7); }, In.months = En, In.years = jn, In.humanize = function (e) {
        if (!this.isValid()) return this.localeData().invalidDate(); let a = this.localeData(),
          n = (function (e, a, n) {
            let t = Ua(e).abs(),
              c = Cn(t.as('s')),
              M = Cn(t.as('m')),
              s = Cn(t.as('h')),
              o = Cn(t.as('d')),
              r = Cn(t.as('M')),
              i = Cn(t.as('y')),
              d = c <= xn.ss && ['s', c] || c < xn.s && ['ss', c] || M <= 1 && ['m'] || M < xn.m && ['mm', M] || s <= 1 && ['h'] || s < xn.h && ['hh', s] || o <= 1 && ['d'] || o < xn.d && ['dd', o] || r <= 1 && ['M'] || r < xn.M && ['MM', r] || i <= 1 && ['y'] || ['yy', i]; return d[2] = a, d[3] = +e > 0, d[4] = n, (function (e, a, n, t, c) { return c.relativeTime(a || 1, !!n, e, t); }(...d));
          }(this, !e, a)); return e && (n = a.pastFuture(+this, n)), a.postformat(n);
      }, In.toISOString = Fn, In.toString = Fn, In.toJSON = Fn, In.locale = en, In.localeData = nn, In.toIsoString = k('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', Fn), In.lang = an, F('X', 0, 0, 'unix'), F('x', 0, 0, 'valueOf'), de('x', Me), de('X', /[+-]?\d+(\.\d{1,3})?/), me('X', (e, a, n) => { n._d = new Date(1e3 * parseFloat(e, 10)); }), me('x', (e, a, n) => { n._d = new Date(O(e)); }), c.version = '2.20.1', a = Na, c.fn = un, c.min = function () { return wa('isBefore', [].slice.call(arguments, 0)); }, c.max = function () { return wa('isAfter', [].slice.call(arguments, 0)); }, c.now = function () { return Date.now ? Date.now() : +new Date(); }, c.utc = l, c.unix = function (e) { return Na(1e3 * e); }, c.months = function (e, a) { return Ln(e, a, 'months'); }, c.isDate = i, c.locale = da, c.invalid = L, c.duration = Ua, c.isMoment = h, c.weekdays = function (e, a, n) { return bn(e, a, n, 'weekdays'); }, c.parseZone = function () { return Na(...arguments).parseZone(); }, c.localeData = ua, c.isDuration = va, c.monthsShort = function (e, a) { return Ln(e, a, 'monthsShort'); }, c.weekdaysMin = function (e, a, n) { return bn(e, a, n, 'weekdaysMin'); }, c.defineLocale = _a, c.updateLocale = function (e, a) {
        if (a != null) {
          let n,
            t,
            c = Ma; (t = ia(e)) != null && (c = t._config), (n = new S(a = g(c, a))).parentLocale = sa[e], sa[e] = n, da(e);
        } else sa[e] != null && (sa[e].parentLocale != null ? sa[e] = sa[e].parentLocale : sa[e] != null && delete sa[e]); return sa[e];
      }, c.locales = function () { return q(sa); }, c.weekdaysShort = function (e, a, n) { return bn(e, a, n, 'weekdaysShort'); }, c.normalizeUnits = B, c.relativeTimeRounding = function (e) { return void 0 === e ? Cn : typeof e === 'function' && (Cn = e, !0); }, c.relativeTimeThreshold = function (e, a) { return void 0 !== xn[e] && (void 0 === a ? xn[e] : (xn[e] = a, e === 's' && (xn.ss = a - 1), !0)); }, c.calendarFormat = function (e, a) { const n = e.diff(a, 'days', !0); return n < -6 ? 'sameElse' : n < -1 ? 'lastWeek' : n < 0 ? 'lastDay' : n < 1 ? 'sameDay' : n < 2 ? 'nextDay' : n < 7 ? 'nextWeek' : 'sameElse'; }, c.prototype = un, c.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', DATE: 'YYYY-MM-DD', TIME: 'HH:mm', TIME_SECONDS: 'HH:mm:ss', TIME_MS: 'HH:mm:ss.SSS', WEEK: 'YYYY-[W]WW', MONTH: 'YYYY-MM',
      }, c;
    }, e.exports = a();
  }).call(a, n(141)(e));
}, function (e, a, n) {
  a.a = function (e, a = !1, n = '') { this.checkName = e, this.description = '', this.hasError = a, this.HTML = n, this.plainText = '', this.sourceDates = [], this.targetDates = [], this.sourceNums = [], this.targetNums = []; };
}, function (e, a, n) {
  function t() {} function c(e, a) { if (e.length !== a.length) return !1; for (let n = 0; n < a.length; n += 1) if (Array.isArray(e[n])) { if (!c(e[n], a[n])) return !1; } else if (e[n] !== a[n]) return !1; return !0; } function M(e, a, n = []) { let t; do { (t = a.exec(e)) && n.push(t); } while (t);return n; } function s(e, a, n, t, s) {
    const o = s ? 1 : 0,
      r = M(e, n).map(e => e[o]).sort(),
      i = M(a, t).map(e => e[o]).sort(); return [r, i, c(r, i)];
  } function o(e) { return e.replace(/\s([1]?[0-9])([ap]m)|^([1]?[0-9])([ap]m)/g, ' $1$3:00$2$4'); } function r(e, a, n = 'gi') { let t = a; return void 0 === e ? t : e.constructor !== Array ? t : (e.forEach((e) => { const a = new RegExp(e[0], n); t = t.replace(a, e[1]); }), t); } function i(e) { return r([['\u5341\u4e00', '11'], ['\u5341\u4e8c', '12'], ['\u5341\u4e09', '13'], ['\u5341\u56db', '14'], ['\u5341\u4e94', '15'], ['\u5341\u516d', '16'], ['\u5341\u4e03', '17'], ['\u5341\u516b', '18'], ['\u5341\u4e5d', '19'], ['\u4e8c\u5341', '20'], ['\uff10', '0'], ['\uff11', '1'], ['\uff12', '2'], ['\uff13', '3'], ['\uff14', '4'], ['\uff15', '5'], ['\uff16', '6'], ['\uff17', '7'], ['\uff18', '8'], ['\uff19', '9'], ['\u4e8c', '2'], ['\u4e09', '3'], ['\u56db', '4'], ['\u4e94', '5'], ['\u516d', '6'], ['\u4e03', '7'], ['\u516b', '8'], ['\u4e5d', '9']], e, 'gi'); }n.d(a, 'd', () => s), n.d(a, 'f', () => M), n.d(a, 'a', () => o), n.d(a, 'e', () => r), n.d(a, 'g', () => i), n.d(a, 'b', () => c), n.d(a, 'c', () => t);
}, function (e, a, n) { (e.exports = n(140)).tz.load(n(143)); }, function (e, a, n) {
  n.d(a, 'c', () => M), n.d(a, 'b', () => i), n.d(a, 'a', () => d); let t = n(2),
    c = n(139); function M(e) { const a = Object.keys(e); if (a.indexOf('sourceLang') < 0 || a.indexOf('targetLang') < 0 || a.indexOf('dateFormats') < 0) return !1; const n = Object.keys(e.dateFormats); return !(n.indexOf(e.sourceLang) < 0 || n.indexOf(e.targetLang) < 0); } function s(e, a, n, t, c, M, s, o) {
    let r = c,
      i = n,
      d = s; return r.length === 1 && (r = `0${r}`), i.length === 1 && (i = `0${i}`), d.length === 1 && (d = `0${d}`), a + i + t + r + M + d + o;
  } function o(e, a, n, t, c, M) {
    let s = c,
      o = n; return s.length === 1 && (s = `0${s}`), o.length === 1 && (o = `0${o}`), a + o + t + s + M;
  } function r(e) { return e.length > 12 ? e.replace(/({[0-9]{4}-)([0-1]?[0-9])(-)([0-3]?[0-9])( )([0-2]?[0-9])(:[0-5][0-9].*)/, s) : e.replace(/({[0-9]{4}-)([0-1]?[0-9])(-)([0-3]?[0-9])(.*)/, o); } function i(e) { return e[0] = e[0].map(r), e[1] = e[1].map(r), e; } function d(e, a, n) {
    let M = e,
      s = a; let o; return M = t.g(M), o = M, M = t.e([['([0-9]?[0-9])[\\u65E5\\u6642\\u5206][\\u9593\\u76EE]', ' $1 '], ['([0-9]+)\\u65E5\\u9023\\u7D9A', ' $1 '], ['[0-9]\\u65E5([0-9]+)\\u56DE', ' $1 '], ['\\u4E09\\u89D2', ' '], ['\\u4E07\\u7AEF', ' '], ['\\u4E07\\u80FD', ' ']], o, 'gi'), M = t.e(n.dateFormats[n.sourceLang], M, 'gi'), s = (function (e) { return t.e([['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3 $1$4 $1$5'], ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3 $1$4'], ['([JFMASON][aepuco][nbrynlgptvc]\\. )([0-3]?[0-9]), ([0-3]?[0-9])(?!\\d)', '$1$2 $1$3']], e, 'gi'); }(s = t.a(s))), s = t.e(n.dateFormats[n.targetLang], s, 'gi'), [M, s = Object(c.a)(s)];
  }
}, function (e, a, n) {
  let t = n(3),
    c = n.n(t); let M,
    s; function o(e, a) { return c.a.isMoment(e) && c.a.isMoment(a) ? e.isBefore(a) ? -1 : a.isBefore(e) ? 1 : 0 : 0; } function r(e) { const a = e.slice(1, e.length - 1); return M ? c.a.tz(a, M) : c()(a); } function i(e) { const a = e.slice(1, e.length - 1); return s ? c.a.tz(a, s) : c()(a); }a.a = function (e, a, n) { M = a, s = n; const t = []; return t[0] = e[0].map(r).sort(o), t[1] = e[1].map(i).sort(o), t; };
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('af', {
      months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
      monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
      weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
      weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
      meridiemParse: /vm|nm/i,
      isPM(e) { return /^nm$/i.test(e); },
      meridiem(e, a, n) { return e < 12 ? n ? 'vm' : 'VM' : n ? 'nm' : 'NM'; },
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Vandag om] LT', nextDay: '[M\xf4re om] LT', nextWeek: 'dddd [om] LT', lastDay: '[Gister om] LT', lastWeek: '[Laas] dddd [om] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'oor %s', past: '%s gelede', s: "'n paar sekondes", ss: '%d sekondes', m: "'n minuut", mm: '%d minute', h: "'n uur", hh: '%d ure', d: "'n dag", dd: '%d dae', M: "'n maand", MM: '%d maande', y: "'n jaar", yy: '%d jaar',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0661', 2: '\u0662', 3: '\u0663', 4: '\u0664', 5: '\u0665', 6: '\u0666', 7: '\u0667', 8: '\u0668', 9: '\u0669', 0: '\u0660',
      },
      n = {
        '\u0661': '1', '\u0662': '2', '\u0663': '3', '\u0664': '4', '\u0665': '5', '\u0666': '6', '\u0667': '7', '\u0668': '8', '\u0669': '9', '\u0660': '0',
      },
      t = function (e) { return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5; },
      c = {
        s: ['\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629', '\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629', ['\u062b\u0627\u0646\u064a\u062a\u0627\u0646', '\u062b\u0627\u0646\u064a\u062a\u064a\u0646'], '%d \u062b\u0648\u0627\u0646', '%d \u062b\u0627\u0646\u064a\u0629', '%d \u062b\u0627\u0646\u064a\u0629'], m: ['\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629', '\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629', ['\u062f\u0642\u064a\u0642\u062a\u0627\u0646', '\u062f\u0642\u064a\u0642\u062a\u064a\u0646'], '%d \u062f\u0642\u0627\u0626\u0642', '%d \u062f\u0642\u064a\u0642\u0629', '%d \u062f\u0642\u064a\u0642\u0629'], h: ['\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629', '\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629', ['\u0633\u0627\u0639\u062a\u0627\u0646', '\u0633\u0627\u0639\u062a\u064a\u0646'], '%d \u0633\u0627\u0639\u0627\u062a', '%d \u0633\u0627\u0639\u0629', '%d \u0633\u0627\u0639\u0629'], d: ['\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645', '\u064a\u0648\u0645 \u0648\u0627\u062d\u062f', ['\u064a\u0648\u0645\u0627\u0646', '\u064a\u0648\u0645\u064a\u0646'], '%d \u0623\u064a\u0627\u0645', '%d \u064a\u0648\u0645\u064b\u0627', '%d \u064a\u0648\u0645'], M: ['\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631', '\u0634\u0647\u0631 \u0648\u0627\u062d\u062f', ['\u0634\u0647\u0631\u0627\u0646', '\u0634\u0647\u0631\u064a\u0646'], '%d \u0623\u0634\u0647\u0631', '%d \u0634\u0647\u0631\u0627', '%d \u0634\u0647\u0631'], y: ['\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645', '\u0639\u0627\u0645 \u0648\u0627\u062d\u062f', ['\u0639\u0627\u0645\u0627\u0646', '\u0639\u0627\u0645\u064a\u0646'], '%d \u0623\u0639\u0648\u0627\u0645', '%d \u0639\u0627\u0645\u064b\u0627', '%d \u0639\u0627\u0645'],
      },
      M = function (e) {
        return function (a, n, M, s) {
          let o = t(a),
            r = c[e][t(a)]; return o === 2 && (r = r[n ? 0 : 1]), r.replace(/%d/i, a);
        };
      },
      s = ['\u064a\u0646\u0627\u064a\u0631', '\u0641\u0628\u0631\u0627\u064a\u0631', '\u0645\u0627\u0631\u0633', '\u0623\u0628\u0631\u064a\u0644', '\u0645\u0627\u064a\u0648', '\u064a\u0648\u0646\u064a\u0648', '\u064a\u0648\u0644\u064a\u0648', '\u0623\u063a\u0633\u0637\u0633', '\u0633\u0628\u062a\u0645\u0628\u0631', '\u0623\u0643\u062a\u0648\u0628\u0631', '\u0646\u0648\u0641\u0645\u0628\u0631', '\u062f\u064a\u0633\u0645\u0628\u0631']; e.defineLocale('ar', {
      months: s,
      monthsShort: s,
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'D/\u200fM/\u200fYYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0635|\u0645/,
      isPM(e) { return e === '\u0645'; },
      meridiem(e, a, n) { return e < 12 ? '\u0635' : '\u0645'; },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0628\u0639\u062f %s', past: '\u0645\u0646\u0630 %s', s: M('s'), ss: M('s'), m: M('m'), mm: M('m'), h: M('h'), hh: M('h'), d: M('d'), dd: M('d'), M: M('M'), MM: M('M'), y: M('y'), yy: M('y'),
      },
      preparse(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, e => n[e]).replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/\d/g, e => a[e]).replace(/,/g, '\u060c'); },
      week: { dow: 6, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ar-dz', {
      months: '\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631'.split('_'),
      monthsShort: '\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631'.split('_'),
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0641\u064a %s', past: '\u0645\u0646\u0630 %s', s: '\u062b\u0648\u0627\u0646', ss: '%d \u062b\u0627\u0646\u064a\u0629', m: '\u062f\u0642\u064a\u0642\u0629', mm: '%d \u062f\u0642\u0627\u0626\u0642', h: '\u0633\u0627\u0639\u0629', hh: '%d \u0633\u0627\u0639\u0627\u062a', d: '\u064a\u0648\u0645', dd: '%d \u0623\u064a\u0627\u0645', M: '\u0634\u0647\u0631', MM: '%d \u0623\u0634\u0647\u0631', y: '\u0633\u0646\u0629', yy: '%d \u0633\u0646\u0648\u0627\u062a',
      },
      week: { dow: 0, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ar-kw', {
      months: '\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631'.split('_'),
      monthsShort: '\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631'.split('_'),
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0641\u064a %s', past: '\u0645\u0646\u0630 %s', s: '\u062b\u0648\u0627\u0646', ss: '%d \u062b\u0627\u0646\u064a\u0629', m: '\u062f\u0642\u064a\u0642\u0629', mm: '%d \u062f\u0642\u0627\u0626\u0642', h: '\u0633\u0627\u0639\u0629', hh: '%d \u0633\u0627\u0639\u0627\u062a', d: '\u064a\u0648\u0645', dd: '%d \u0623\u064a\u0627\u0645', M: '\u0634\u0647\u0631', MM: '%d \u0623\u0634\u0647\u0631', y: '\u0633\u0646\u0629', yy: '%d \u0633\u0646\u0648\u0627\u062a',
      },
      week: { dow: 0, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0',
      },
      n = function (e) { return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5; },
      t = {
        s: ['\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629', '\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629', ['\u062b\u0627\u0646\u064a\u062a\u0627\u0646', '\u062b\u0627\u0646\u064a\u062a\u064a\u0646'], '%d \u062b\u0648\u0627\u0646', '%d \u062b\u0627\u0646\u064a\u0629', '%d \u062b\u0627\u0646\u064a\u0629'], m: ['\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629', '\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629', ['\u062f\u0642\u064a\u0642\u062a\u0627\u0646', '\u062f\u0642\u064a\u0642\u062a\u064a\u0646'], '%d \u062f\u0642\u0627\u0626\u0642', '%d \u062f\u0642\u064a\u0642\u0629', '%d \u062f\u0642\u064a\u0642\u0629'], h: ['\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629', '\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629', ['\u0633\u0627\u0639\u062a\u0627\u0646', '\u0633\u0627\u0639\u062a\u064a\u0646'], '%d \u0633\u0627\u0639\u0627\u062a', '%d \u0633\u0627\u0639\u0629', '%d \u0633\u0627\u0639\u0629'], d: ['\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645', '\u064a\u0648\u0645 \u0648\u0627\u062d\u062f', ['\u064a\u0648\u0645\u0627\u0646', '\u064a\u0648\u0645\u064a\u0646'], '%d \u0623\u064a\u0627\u0645', '%d \u064a\u0648\u0645\u064b\u0627', '%d \u064a\u0648\u0645'], M: ['\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631', '\u0634\u0647\u0631 \u0648\u0627\u062d\u062f', ['\u0634\u0647\u0631\u0627\u0646', '\u0634\u0647\u0631\u064a\u0646'], '%d \u0623\u0634\u0647\u0631', '%d \u0634\u0647\u0631\u0627', '%d \u0634\u0647\u0631'], y: ['\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645', '\u0639\u0627\u0645 \u0648\u0627\u062d\u062f', ['\u0639\u0627\u0645\u0627\u0646', '\u0639\u0627\u0645\u064a\u0646'], '%d \u0623\u0639\u0648\u0627\u0645', '%d \u0639\u0627\u0645\u064b\u0627', '%d \u0639\u0627\u0645'],
      },
      c = function (e) {
        return function (a, c, M, s) {
          let o = n(a),
            r = t[e][n(a)]; return o === 2 && (r = r[c ? 0 : 1]), r.replace(/%d/i, a);
        };
      },
      M = ['\u064a\u0646\u0627\u064a\u0631', '\u0641\u0628\u0631\u0627\u064a\u0631', '\u0645\u0627\u0631\u0633', '\u0623\u0628\u0631\u064a\u0644', '\u0645\u0627\u064a\u0648', '\u064a\u0648\u0646\u064a\u0648', '\u064a\u0648\u0644\u064a\u0648', '\u0623\u063a\u0633\u0637\u0633', '\u0633\u0628\u062a\u0645\u0628\u0631', '\u0623\u0643\u062a\u0648\u0628\u0631', '\u0646\u0648\u0641\u0645\u0628\u0631', '\u062f\u064a\u0633\u0645\u0628\u0631']; e.defineLocale('ar-ly', {
      months: M,
      monthsShort: M,
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'D/\u200fM/\u200fYYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0635|\u0645/,
      isPM(e) { return e === '\u0645'; },
      meridiem(e, a, n) { return e < 12 ? '\u0635' : '\u0645'; },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0628\u0639\u062f %s', past: '\u0645\u0646\u0630 %s', s: c('s'), ss: c('s'), m: c('m'), mm: c('m'), h: c('h'), hh: c('h'), d: c('d'), dd: c('d'), M: c('M'), MM: c('M'), y: c('y'), yy: c('y'),
      },
      preparse(e) { return e.replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/\d/g, e => a[e]).replace(/,/g, '\u060c'); },
      week: { dow: 6, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ar-ma', {
      months: '\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631'.split('_'),
      monthsShort: '\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631'.split('_'),
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0641\u064a %s', past: '\u0645\u0646\u0630 %s', s: '\u062b\u0648\u0627\u0646', ss: '%d \u062b\u0627\u0646\u064a\u0629', m: '\u062f\u0642\u064a\u0642\u0629', mm: '%d \u062f\u0642\u0627\u0626\u0642', h: '\u0633\u0627\u0639\u0629', hh: '%d \u0633\u0627\u0639\u0627\u062a', d: '\u064a\u0648\u0645', dd: '%d \u0623\u064a\u0627\u0645', M: '\u0634\u0647\u0631', MM: '%d \u0623\u0634\u0647\u0631', y: '\u0633\u0646\u0629', yy: '%d \u0633\u0646\u0648\u0627\u062a',
      },
      week: { dow: 6, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0661', 2: '\u0662', 3: '\u0663', 4: '\u0664', 5: '\u0665', 6: '\u0666', 7: '\u0667', 8: '\u0668', 9: '\u0669', 0: '\u0660',
      },
      n = {
        '\u0661': '1', '\u0662': '2', '\u0663': '3', '\u0664': '4', '\u0665': '5', '\u0666': '6', '\u0667': '7', '\u0668': '8', '\u0669': '9', '\u0660': '0',
      }; e.defineLocale('ar-sa', {
      months: '\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631'.split('_'),
      monthsShort: '\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631'.split('_'),
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0635|\u0645/,
      isPM(e) { return e === '\u0645'; },
      meridiem(e, a, n) { return e < 12 ? '\u0635' : '\u0645'; },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0641\u064a %s', past: '\u0645\u0646\u0630 %s', s: '\u062b\u0648\u0627\u0646', ss: '%d \u062b\u0627\u0646\u064a\u0629', m: '\u062f\u0642\u064a\u0642\u0629', mm: '%d \u062f\u0642\u0627\u0626\u0642', h: '\u0633\u0627\u0639\u0629', hh: '%d \u0633\u0627\u0639\u0627\u062a', d: '\u064a\u0648\u0645', dd: '%d \u0623\u064a\u0627\u0645', M: '\u0634\u0647\u0631', MM: '%d \u0623\u0634\u0647\u0631', y: '\u0633\u0646\u0629', yy: '%d \u0633\u0646\u0648\u0627\u062a',
      },
      preparse(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, e => n[e]).replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/\d/g, e => a[e]).replace(/,/g, '\u060c'); },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ar-tn', {
      months: '\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631'.split('_'),
      monthsShort: '\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631'.split('_'),
      weekdays: '\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a'.split('_'),
      weekdaysShort: '\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a'.split('_'),
      weekdaysMin: '\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextDay: '[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', nextWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastDay: '[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', lastWeek: 'dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0641\u064a %s', past: '\u0645\u0646\u0630 %s', s: '\u062b\u0648\u0627\u0646', ss: '%d \u062b\u0627\u0646\u064a\u0629', m: '\u062f\u0642\u064a\u0642\u0629', mm: '%d \u062f\u0642\u0627\u0626\u0642', h: '\u0633\u0627\u0639\u0629', hh: '%d \u0633\u0627\u0639\u0627\u062a', d: '\u064a\u0648\u0645', dd: '%d \u0623\u064a\u0627\u0645', M: '\u0634\u0647\u0631', MM: '%d \u0623\u0634\u0647\u0631', y: '\u0633\u0646\u0629', yy: '%d \u0633\u0646\u0648\u0627\u062a',
      },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = {
      1: '-inci', 5: '-inci', 8: '-inci', 70: '-inci', 80: '-inci', 2: '-nci', 7: '-nci', 20: '-nci', 50: '-nci', 3: '-\xfcnc\xfc', 4: '-\xfcnc\xfc', 100: '-\xfcnc\xfc', 6: '-nc\u0131', 9: '-uncu', 10: '-uncu', 30: '-uncu', 60: '-\u0131nc\u0131', 90: '-\u0131nc\u0131',
    }; e.defineLocale('az', {
      months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
      monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
      weekdays: 'Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259'.split('_'),
      weekdaysShort: 'Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n'.split('_'),
      weekdaysMin: 'Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[bug\xfcn saat] LT', nextDay: '[sabah saat] LT', nextWeek: '[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT', lastDay: '[d\xfcn\u0259n] LT', lastWeek: '[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s sonra', past: '%s \u0259vv\u0259l', s: 'birne\xe7\u0259 saniyy\u0259', ss: '%d saniy\u0259', m: 'bir d\u0259qiq\u0259', mm: '%d d\u0259qiq\u0259', h: 'bir saat', hh: '%d saat', d: 'bir g\xfcn', dd: '%d g\xfcn', M: 'bir ay', MM: '%d ay', y: 'bir il', yy: '%d il',
      },
      meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
      isPM(e) { return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e); },
      meridiem(e, a, n) { return e < 4 ? 'gec\u0259' : e < 12 ? 's\u0259h\u0259r' : e < 17 ? 'g\xfcnd\xfcz' : 'ax\u015fam'; },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
      ordinal(e) { if (e === 0) return `${e}-\u0131nc\u0131`; const n = e % 10; return e + (a[n] || a[e % 100 - n] || a[e >= 100 ? 100 : null]); },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) {
      let t,
        c; return n === 'm' ? a ? '\u0445\u0432\u0456\u043b\u0456\u043d\u0430' : '\u0445\u0432\u0456\u043b\u0456\u043d\u0443' : n === 'h' ? a ? '\u0433\u0430\u0434\u0437\u0456\u043d\u0430' : '\u0433\u0430\u0434\u0437\u0456\u043d\u0443' : `${e} ${t = +e, c = {
        ss: a ? '\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434' : '\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434', mm: a ? '\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d' : '\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d', hh: a ? '\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d' : '\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d', dd: '\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d', MM: '\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e', yy: '\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e',
      }[n].split('_'), t % 10 == 1 && t % 100 != 11 ? c[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? c[1] : c[2]}`;
    }e.defineLocale('be', {
      months: { format: '\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f'.split('_'), standalone: '\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c'.split('_') },
      monthsShort: '\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436'.split('_'),
      weekdays: { format: '\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443'.split('_'), standalone: '\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430'.split('_'), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/ },
      weekdaysShort: '\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431'.split('_'),
      weekdaysMin: '\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY \u0433.', LLL: 'D MMMM YYYY \u0433., HH:mm', LLLL: 'dddd, D MMMM YYYY \u0433., HH:mm',
      },
      calendar: {
        sameDay: '[\u0421\u0451\u043d\u043d\u044f \u045e] LT', nextDay: '[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT', lastDay: '[\u0423\u0447\u043e\u0440\u0430 \u045e] LT', nextWeek() { return '[\u0423] dddd [\u045e] LT'; }, lastWeek() { switch (this.day()) { case 0: case 3: case 5: case 6: return '[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT'; case 1: case 2: case 4: return '[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u043f\u0440\u0430\u0437 %s', past: '%s \u0442\u0430\u043c\u0443', s: '\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434', m: a, mm: a, h: a, hh: a, d: '\u0434\u0437\u0435\u043d\u044c', dd: a, M: '\u043c\u0435\u0441\u044f\u0446', MM: a, y: '\u0433\u043e\u0434', yy: a,
      },
      meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
      isPM(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e); },
      meridiem(e, a, n) { return e < 4 ? '\u043d\u043e\u0447\u044b' : e < 12 ? '\u0440\u0430\u043d\u0456\u0446\u044b' : e < 17 ? '\u0434\u043d\u044f' : '\u0432\u0435\u0447\u0430\u0440\u0430'; },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
      ordinal(e, a) { switch (a) { case 'M': case 'd': case 'DDD': case 'w': case 'W': return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? `${e}-\u044b` : `${e}-\u0456`; case 'D': return `${e}-\u0433\u0430`; default: return e; } },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('bg', {
      months: '\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438'.split('_'),
      monthsShort: '\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a'.split('_'),
      weekdays: '\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430'.split('_'),
      weekdaysShort: '\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431'.split('_'),
      weekdaysMin: '\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'D.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[\u0414\u043d\u0435\u0441 \u0432] LT', nextDay: '[\u0423\u0442\u0440\u0435 \u0432] LT', nextWeek: 'dddd [\u0432] LT', lastDay: '[\u0412\u0447\u0435\u0440\u0430 \u0432] LT', lastWeek() { switch (this.day()) { case 0: case 3: case 6: return '[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT'; case 1: case 2: case 4: case 5: return '[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u0441\u043b\u0435\u0434 %s', past: '\u043f\u0440\u0435\u0434\u0438 %s', s: '\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438', ss: '%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438', m: '\u043c\u0438\u043d\u0443\u0442\u0430', mm: '%d \u043c\u0438\u043d\u0443\u0442\u0438', h: '\u0447\u0430\u0441', hh: '%d \u0447\u0430\u0441\u0430', d: '\u0434\u0435\u043d', dd: '%d \u0434\u043d\u0438', M: '\u043c\u0435\u0441\u0435\u0446', MM: '%d \u043c\u0435\u0441\u0435\u0446\u0430', y: '\u0433\u043e\u0434\u0438\u043d\u0430', yy: '%d \u0433\u043e\u0434\u0438\u043d\u0438',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
      ordinal(e) {
        let a = e % 10,
          n = e % 100; return e === 0 ? `${e}-\u0435\u0432` : n === 0 ? `${e}-\u0435\u043d` : n > 10 && n < 20 ? `${e}-\u0442\u0438` : a === 1 ? `${e}-\u0432\u0438` : a === 2 ? `${e}-\u0440\u0438` : a === 7 || a === 8 ? `${e}-\u043c\u0438` : `${e}-\u0442\u0438`;
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('bm', {
      months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo'.split('_'),
      monthsShort: 'Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des'.split('_'),
      weekdays: 'Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
      weekdaysShort: 'Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib'.split('_'),
      weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'MMMM [tile] D [san] YYYY', LLL: 'MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm', LLLL: 'dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm',
      },
      calendar: {
        sameDay: '[Bi l\u025br\u025b] LT', nextDay: '[Sini l\u025br\u025b] LT', nextWeek: 'dddd [don l\u025br\u025b] LT', lastDay: '[Kunu l\u025br\u025b] LT', lastWeek: 'dddd [t\u025bm\u025bnen l\u025br\u025b] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s k\u0254n\u0254', past: 'a b\u025b %s b\u0254', s: 'sanga dama dama', ss: 'sekondi %d', m: 'miniti kelen', mm: 'miniti %d', h: 'l\u025br\u025b kelen', hh: 'l\u025br\u025b %d', d: 'tile kelen', dd: 'tile %d', M: 'kalo kelen', MM: 'kalo %d', y: 'san kelen', yy: 'san %d',
      },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u09e7', 2: '\u09e8', 3: '\u09e9', 4: '\u09ea', 5: '\u09eb', 6: '\u09ec', 7: '\u09ed', 8: '\u09ee', 9: '\u09ef', 0: '\u09e6',
      },
      n = {
        '\u09e7': '1', '\u09e8': '2', '\u09e9': '3', '\u09ea': '4', '\u09eb': '5', '\u09ec': '6', '\u09ed': '7', '\u09ee': '8', '\u09ef': '9', '\u09e6': '0',
      }; e.defineLocale('bn', {
      months: '\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0'.split('_'),
      monthsShort: '\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7'.split('_'),
      weekdays: '\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0'.split('_'),
      weekdaysShort: '\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf'.split('_'),
      weekdaysMin: '\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf'.split('_'),
      longDateFormat: {
        LT: 'A h:mm \u09b8\u09ae\u09df', LTS: 'A h:mm:ss \u09b8\u09ae\u09df', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm \u09b8\u09ae\u09df', LLLL: 'dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df',
      },
      calendar: {
        sameDay: '[\u0986\u099c] LT', nextDay: '[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT', nextWeek: 'dddd, LT', lastDay: '[\u0997\u09a4\u0995\u09be\u09b2] LT', lastWeek: '[\u0997\u09a4] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u09aa\u09b0\u09c7', past: '%s \u0986\u0997\u09c7', s: '\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1', ss: '%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1', m: '\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f', mm: '%d \u09ae\u09bf\u09a8\u09bf\u099f', h: '\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be', hh: '%d \u0998\u09a8\u09cd\u099f\u09be', d: '\u098f\u0995 \u09a6\u09bf\u09a8', dd: '%d \u09a6\u09bf\u09a8', M: '\u098f\u0995 \u09ae\u09be\u09b8', MM: '%d \u09ae\u09be\u09b8', y: '\u098f\u0995 \u09ac\u099b\u09b0', yy: '%d \u09ac\u099b\u09b0',
      },
      preparse(e) { return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u09b0\u09be\u09a4' && e >= 4 || a === '\u09a6\u09c1\u09aa\u09c1\u09b0' && e < 5 || a === '\u09ac\u09bf\u0995\u09be\u09b2' ? e + 12 : e; },
      meridiem(e, a, n) { return e < 4 ? '\u09b0\u09be\u09a4' : e < 10 ? '\u09b8\u0995\u09be\u09b2' : e < 17 ? '\u09a6\u09c1\u09aa\u09c1\u09b0' : e < 20 ? '\u09ac\u09bf\u0995\u09be\u09b2' : '\u09b0\u09be\u09a4'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0f21', 2: '\u0f22', 3: '\u0f23', 4: '\u0f24', 5: '\u0f25', 6: '\u0f26', 7: '\u0f27', 8: '\u0f28', 9: '\u0f29', 0: '\u0f20',
      },
      n = {
        '\u0f21': '1', '\u0f22': '2', '\u0f23': '3', '\u0f24': '4', '\u0f25': '5', '\u0f26': '6', '\u0f27': '7', '\u0f28': '8', '\u0f29': '9', '\u0f20': '0',
      }; e.defineLocale('bo', {
      months: '\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54'.split('_'),
      monthsShort: '\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54'.split('_'),
      weekdays: '\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b'.split('_'),
      weekdaysShort: '\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b'.split('_'),
      weekdaysMin: '\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b'.split('_'),
      longDateFormat: {
        LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm', LLLL: 'dddd, D MMMM YYYY, A h:mm',
      },
      calendar: {
        sameDay: '[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT', nextDay: '[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT', nextWeek: '[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT', lastDay: '[\u0f41\u0f0b\u0f66\u0f44] LT', lastWeek: '[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0f63\u0f0b', past: '%s \u0f66\u0f94\u0f53\u0f0b\u0f63', s: '\u0f63\u0f58\u0f0b\u0f66\u0f44', ss: '%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d', m: '\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42', mm: '%d \u0f66\u0f90\u0f62\u0f0b\u0f58', h: '\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42', hh: '%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51', d: '\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42', dd: '%d \u0f49\u0f72\u0f53\u0f0b', M: '\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42', MM: '%d \u0f5f\u0fb3\u0f0b\u0f56', y: '\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42', yy: '%d \u0f63\u0f7c',
      },
      preparse(e) { return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c' && e >= 4 || a === '\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44' && e < 5 || a === '\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42' ? e + 12 : e; },
      meridiem(e, a, n) { return e < 4 ? '\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c' : e < 10 ? '\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66' : e < 17 ? '\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44' : e < 20 ? '\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42' : '\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) { return `${e} ${(function (e, a) { if (a === 2) return (function (e) { const a = { m: 'v', b: 'v', d: 'z' }; if (void 0 === a[e.charAt(0)]) return e; return a[e.charAt(0)] + e.substring(1); }(e)); return e; }({ mm: 'munutenn', MM: 'miz', dd: 'devezh' }[n], e))}`; }e.defineLocale('br', {
      months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split('_'),
      monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split('_'),
      weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split('_'),
      weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
      weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'h[e]mm A', LTS: 'h[e]mm:ss A', L: 'DD/MM/YYYY', LL: 'D [a viz] MMMM YYYY', LLL: 'D [a viz] MMMM YYYY h[e]mm A', LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
      },
      calendar: {
        sameDay: '[Hiziv da] LT', nextDay: "[Warc'hoazh da] LT", nextWeek: 'dddd [da] LT', lastDay: "[Dec'h da] LT", lastWeek: 'dddd [paset da] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'a-benn %s', past: "%s 'zo", s: 'un nebeud segondenno\xf9', ss: '%d eilenn', m: 'ur vunutenn', mm: a, h: 'un eur', hh: '%d eur', d: 'un devezh', dd: a, M: 'ur miz', MM: a, y: 'ur bloaz', yy(e) { switch (function e(a) { return a > 9 ? e(a % 10) : a; }(e)) { case 1: case 3: case 4: case 5: case 9: return `${e} bloaz`; default: return `${e} vloaz`; } },
      },
      dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
      ordinal(e) { return e + (e === 1 ? 'a\xf1' : 'vet'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) { let t = `${e} `; switch (n) { case 'ss': return t += e === 1 ? 'sekunda' : e === 2 || e === 3 || e === 4 ? 'sekunde' : 'sekundi'; case 'm': return a ? 'jedna minuta' : 'jedne minute'; case 'mm': return t += e === 1 ? 'minuta' : e === 2 || e === 3 || e === 4 ? 'minute' : 'minuta'; case 'h': return a ? 'jedan sat' : 'jednog sata'; case 'hh': return t += e === 1 ? 'sat' : e === 2 || e === 3 || e === 4 ? 'sata' : 'sati'; case 'dd': return t += e === 1 ? 'dan' : 'dana'; case 'MM': return t += e === 1 ? 'mjesec' : e === 2 || e === 3 || e === 4 ? 'mjeseca' : 'mjeseci'; case 'yy': return t += e === 1 ? 'godina' : e === 2 || e === 3 || e === 4 ? 'godine' : 'godina'; } }e.defineLocale('bs', {
      months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._\u010det._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_\u010de_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[danas u] LT', nextDay: '[sutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedjelju] [u] LT'; case 3: return '[u] [srijedu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[ju\u010der u] LT', lastWeek() { switch (this.day()) { case 0: case 3: return '[pro\u0161lu] dddd [u] LT'; case 6: return '[pro\u0161le] [subote] [u] LT'; case 1: case 2: case 4: case 5: return '[pro\u0161li] dddd [u] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: 'prije %s', s: 'par sekundi', ss: a, m: a, mm: a, h: a, hh: a, d: 'dan', dd: a, M: 'mjesec', MM: a, y: 'godinu', yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ca', {
      months: { standalone: 'gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'), format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split('_'), isFormat: /D[oD]?(\s)+MMMM/ },
      monthsShort: 'gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
      weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
      weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM [de] YYYY', ll: 'D MMM YYYY', LLL: 'D MMMM [de] YYYY [a les] H:mm', lll: 'D MMM YYYY, H:mm', LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm', llll: 'ddd D MMM YYYY, H:mm',
      },
      calendar: {
        sameDay() { return `[avui a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, nextDay() { return `[dem\xe0 a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, nextWeek() { return `dddd [a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, lastDay() { return `[ahir a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, lastWeek() { return `[el] dddd [passat a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, sameElse: 'L',
      },
      relativeTime: {
        future: "d'aqu\xed %s", past: 'fa %s', s: 'uns segons', ss: '%d segons', m: 'un minut', mm: '%d minuts', h: 'una hora', hh: '%d hores', d: 'un dia', dd: '%d dies', M: 'un mes', MM: '%d mesos', y: 'un any', yy: '%d anys',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
      ordinal(e, a) { let n = e === 1 ? 'r' : e === 2 ? 'n' : e === 3 ? 'r' : e === 4 ? 't' : '\xe8'; return a !== 'w' && a !== 'W' || (n = 'a'), e + n; },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec'.split('_'),
      n = 'led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro'.split('_'); function t(e) { return e > 1 && e < 5 && ~~(e / 10) != 1; } function c(e, a, n, c) { const M = `${e} `; switch (n) { case 's': return a || c ? 'p\xe1r sekund' : 'p\xe1r sekundami'; case 'ss': return a || c ? M + (t(e) ? 'sekundy' : 'sekund') : `${M}sekundami`; case 'm': return a ? 'minuta' : c ? 'minutu' : 'minutou'; case 'mm': return a || c ? M + (t(e) ? 'minuty' : 'minut') : `${M}minutami`; case 'h': return a ? 'hodina' : c ? 'hodinu' : 'hodinou'; case 'hh': return a || c ? M + (t(e) ? 'hodiny' : 'hodin') : `${M}hodinami`; case 'd': return a || c ? 'den' : 'dnem'; case 'dd': return a || c ? M + (t(e) ? 'dny' : 'dn\xed') : `${M}dny`; case 'M': return a || c ? 'm\u011bs\xedc' : 'm\u011bs\xedcem'; case 'MM': return a || c ? M + (t(e) ? 'm\u011bs\xedce' : 'm\u011bs\xedc\u016f') : `${M}m\u011bs\xedci`; case 'y': return a || c ? 'rok' : 'rokem'; case 'yy': return a || c ? M + (t(e) ? 'roky' : 'let') : `${M}lety`; } }e.defineLocale('cs', {
      months: a,
      monthsShort: n,
      monthsParse: (function (e, a) {
        let n,
          t = []; for (n = 0; n < 12; n++)t[n] = new RegExp(`^${e[n]}$|^${a[n]}$`, 'i'); return t;
      }(a, n)),
      shortMonthsParse: (function (e) {
        let a,
          n = []; for (a = 0; a < 12; a++)n[a] = new RegExp(`^${e[a]}$`, 'i'); return n;
      }(n)),
      longMonthsParse: (function (e) {
        let a,
          n = []; for (a = 0; a < 12; a++)n[a] = new RegExp(`^${e[a]}$`, 'i'); return n;
      }(a)),
      weekdays: 'ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota'.split('_'),
      weekdaysShort: 'ne_po_\xfat_st_\u010dt_p\xe1_so'.split('_'),
      weekdaysMin: 'ne_po_\xfat_st_\u010dt_p\xe1_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd D. MMMM YYYY H:mm', l: 'D. M. YYYY',
      },
      calendar: {
        sameDay: '[dnes v] LT', nextDay: '[z\xedtra v] LT', nextWeek() { switch (this.day()) { case 0: return '[v ned\u011bli v] LT'; case 1: case 2: return '[v] dddd [v] LT'; case 3: return '[ve st\u0159edu v] LT'; case 4: return '[ve \u010dtvrtek v] LT'; case 5: return '[v p\xe1tek v] LT'; case 6: return '[v sobotu v] LT'; } }, lastDay: '[v\u010dera v] LT', lastWeek() { switch (this.day()) { case 0: return '[minulou ned\u011bli v] LT'; case 1: case 2: return '[minul\xe9] dddd [v] LT'; case 3: return '[minulou st\u0159edu v] LT'; case 4: case 5: return '[minul\xfd] dddd [v] LT'; case 6: return '[minulou sobotu v] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: 'p\u0159ed %s', s: c, ss: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('cv', {
      months: '\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432'.split('_'),
      monthsShort: '\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448'.split('_'),
      weekdays: '\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d'.split('_'),
      weekdaysShort: '\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c'.split('_'),
      weekdaysMin: '\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]', LLL: 'YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm', LLLL: 'dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm',
      },
      calendar: {
        sameDay: '[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]', nextDay: '[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]', lastDay: '[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]', nextWeek: '[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]', lastWeek: '[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]', sameElse: 'L',
      },
      relativeTime: {
        future(e) { return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? '\u0440\u0435\u043d' : /\u04ab\u0443\u043b$/i.exec(e) ? '\u0442\u0430\u043d' : '\u0440\u0430\u043d'); }, past: '%s \u043a\u0430\u044f\u043b\u043b\u0430', s: '\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442', ss: '%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442', m: '\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442', mm: '%d \u043c\u0438\u043d\u0443\u0442', h: '\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442', hh: '%d \u0441\u0435\u0445\u0435\u0442', d: '\u043f\u04d7\u0440 \u043a\u0443\u043d', dd: '%d \u043a\u0443\u043d', M: '\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445', MM: '%d \u0443\u0439\u04d1\u0445', y: '\u043f\u04d7\u0440 \u04ab\u0443\u043b', yy: '%d \u04ab\u0443\u043b',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
      ordinal: '%d-\u043c\u04d7\u0448',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('cy', {
      months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
      monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
      weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
      weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
      weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Heddiw am] LT', nextDay: '[Yfory am] LT', nextWeek: 'dddd [am] LT', lastDay: '[Ddoe am] LT', lastWeek: 'dddd [diwethaf am] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'mewn %s', past: '%s yn \xf4l', s: 'ychydig eiliadau', ss: '%d eiliad', m: 'munud', mm: '%d munud', h: 'awr', hh: '%d awr', d: 'diwrnod', dd: '%d diwrnod', M: 'mis', MM: '%d mis', y: 'blwyddyn', yy: '%d flynedd',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
      ordinal(e) { let a = ''; return e > 20 ? a = e === 40 || e === 50 || e === 60 || e === 80 || e === 100 ? 'fed' : 'ain' : e > 0 && (a = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed'][e]), e + a; },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('da', {
      months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 's\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag'.split('_'),
      weekdaysShort: 's\xf8n_man_tir_ons_tor_fre_l\xf8r'.split('_'),
      weekdaysMin: 's\xf8_ma_ti_on_to_fr_l\xf8'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
      },
      calendar: {
        sameDay: '[i dag kl.] LT', nextDay: '[i morgen kl.] LT', nextWeek: 'p\xe5 dddd [kl.] LT', lastDay: '[i g\xe5r kl.] LT', lastWeek: '[i] dddd[s kl.] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'om %s', past: '%s siden', s: 'f\xe5 sekunder', ss: '%d sekunder', m: 'et minut', mm: '%d minutter', h: 'en time', hh: '%d timer', d: 'en dag', dd: '%d dage', M: 'en m\xe5ned', MM: '%d m\xe5neder', y: 'et \xe5r', yy: '%d \xe5r',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        m: ['eine Minute', 'einer Minute'], h: ['eine Stunde', 'einer Stunde'], d: ['ein Tag', 'einem Tag'], dd: [`${e} Tage`, `${e} Tagen`], M: ['ein Monat', 'einem Monat'], MM: [`${e} Monate`, `${e} Monaten`], y: ['ein Jahr', 'einem Jahr'], yy: [`${e} Jahre`, `${e} Jahren`],
      }; return a ? c[n][0] : c[n][1];
    }e.defineLocale('de', {
      months: 'Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[heute um] LT [Uhr]', sameElse: 'L', nextDay: '[morgen um] LT [Uhr]', nextWeek: 'dddd [um] LT [Uhr]', lastDay: '[gestern um] LT [Uhr]', lastWeek: '[letzten] dddd [um] LT [Uhr]',
      },
      relativeTime: {
        future: 'in %s', past: 'vor %s', s: 'ein paar Sekunden', ss: '%d Sekunden', m: a, mm: '%d Minuten', h: a, hh: '%d Stunden', d: a, dd: a, M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        m: ['eine Minute', 'einer Minute'], h: ['eine Stunde', 'einer Stunde'], d: ['ein Tag', 'einem Tag'], dd: [`${e} Tage`, `${e} Tagen`], M: ['ein Monat', 'einem Monat'], MM: [`${e} Monate`, `${e} Monaten`], y: ['ein Jahr', 'einem Jahr'], yy: [`${e} Jahre`, `${e} Jahren`],
      }; return a ? c[n][0] : c[n][1];
    }e.defineLocale('de-at', {
      months: 'J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[heute um] LT [Uhr]', sameElse: 'L', nextDay: '[morgen um] LT [Uhr]', nextWeek: 'dddd [um] LT [Uhr]', lastDay: '[gestern um] LT [Uhr]', lastWeek: '[letzten] dddd [um] LT [Uhr]',
      },
      relativeTime: {
        future: 'in %s', past: 'vor %s', s: 'ein paar Sekunden', ss: '%d Sekunden', m: a, mm: '%d Minuten', h: a, hh: '%d Stunden', d: a, dd: a, M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        m: ['eine Minute', 'einer Minute'], h: ['eine Stunde', 'einer Stunde'], d: ['ein Tag', 'einem Tag'], dd: [`${e} Tage`, `${e} Tagen`], M: ['ein Monat', 'einem Monat'], MM: [`${e} Monate`, `${e} Monaten`], y: ['ein Jahr', 'einem Jahr'], yy: [`${e} Jahre`, `${e} Jahren`],
      }; return a ? c[n][0] : c[n][1];
    }e.defineLocale('de-ch', {
      months: 'Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd, D. MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[heute um] LT [Uhr]', sameElse: 'L', nextDay: '[morgen um] LT [Uhr]', nextWeek: 'dddd [um] LT [Uhr]', lastDay: '[gestern um] LT [Uhr]', lastWeek: '[letzten] dddd [um] LT [Uhr]',
      },
      relativeTime: {
        future: 'in %s', past: 'vor %s', s: 'ein paar Sekunden', ss: '%d Sekunden', m: a, mm: '%d Minuten', h: a, hh: '%d Stunden', d: a, dd: a, M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = ['\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9', '\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9', '\u0789\u07a7\u0783\u07a8\u0797\u07aa', '\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa', '\u0789\u07ad', '\u0796\u07ab\u0782\u07b0', '\u0796\u07aa\u078d\u07a6\u0787\u07a8', '\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa', '\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa', '\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa', '\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa', '\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa'],
      n = ['\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6', '\u0780\u07af\u0789\u07a6', '\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6', '\u0784\u07aa\u078b\u07a6', '\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8', '\u0780\u07aa\u0786\u07aa\u0783\u07aa', '\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa']; e.defineLocale('dv', {
      months: a,
      monthsShort: a,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: '\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'D/M/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0789\u0786|\u0789\u078a/,
      isPM(e) { return e === '\u0789\u078a'; },
      meridiem(e, a, n) { return e < 12 ? '\u0789\u0786' : '\u0789\u078a'; },
      calendar: {
        sameDay: '[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT', nextDay: '[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT', nextWeek: 'dddd LT', lastDay: '[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT', lastWeek: '[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s', past: '\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s', s: '\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0', ss: 'd% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa', m: '\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0', mm: '\u0789\u07a8\u0782\u07a8\u0793\u07aa %d', h: '\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0', hh: '\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d', d: '\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0', dd: '\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d', M: '\u0789\u07a6\u0780\u07ac\u0787\u07b0', MM: '\u0789\u07a6\u0790\u07b0 %d', y: '\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0', yy: '\u0787\u07a6\u0780\u07a6\u0783\u07aa %d',
      },
      preparse(e) { return e.replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/,/g, '\u060c'); },
      week: { dow: 7, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('el', {
      monthsNominativeEl: '\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2'.split('_'),
      monthsGenitiveEl: '\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5'.split('_'),
      months(e, a) { return e ? typeof a === 'string' && /D/.test(a.substring(0, a.indexOf('MMMM'))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl; },
      monthsShort: '\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba'.split('_'),
      weekdays: '\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf'.split('_'),
      weekdaysShort: '\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2'.split('_'),
      weekdaysMin: '\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1'.split('_'),
      meridiem(e, a, n) { return e > 11 ? n ? '\u03bc\u03bc' : '\u039c\u039c' : n ? '\u03c0\u03bc' : '\u03a0\u039c'; },
      isPM(e) { return (`${e}`).toLowerCase()[0] === '\u03bc'; },
      meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendarEl: {
        sameDay: '[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT', nextDay: '[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT', nextWeek: 'dddd [{}] LT', lastDay: '[\u03a7\u03b8\u03b5\u03c2 {}] LT', lastWeek() { switch (this.day()) { case 6: return '[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT'; default: return '[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT'; } }, sameElse: 'L',
      },
      calendar(e, a) {
        let n,
          t = this._calendarEl[e],
          c = a && a.hours(); return ((n = t) instanceof Function || Object.prototype.toString.call(n) === '[object Function]') && (t = t.apply(a)), t.replace('{}', c % 12 == 1 ? '\u03c3\u03c4\u03b7' : '\u03c3\u03c4\u03b9\u03c2');
      },
      relativeTime: {
        future: '\u03c3\u03b5 %s', past: '%s \u03c0\u03c1\u03b9\u03bd', s: '\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1', ss: '%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1', m: '\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc', mm: '%d \u03bb\u03b5\u03c0\u03c4\u03ac', h: '\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1', hh: '%d \u03ce\u03c1\u03b5\u03c2', d: '\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1', dd: '%d \u03bc\u03ad\u03c1\u03b5\u03c2', M: '\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2', MM: '%d \u03bc\u03ae\u03bd\u03b5\u03c2', y: '\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2', yy: '%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
      ordinal: '%d\u03b7',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('en-au', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
        sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('en-ca', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'YYYY-MM-DD', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY h:mm A', LLLL: 'dddd, MMMM D, YYYY h:mm A',
      },
      calendar: {
        sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('en-gb', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('en-ie', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('en-nz', {
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
        sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('eo', {
      months: 'januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec'.split('_'),
      weekdays: 'diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato'.split('_'),
      weekdaysShort: 'dim_lun_mard_merk_\u0135a\u016d_ven_sab'.split('_'),
      weekdaysMin: 'di_lu_ma_me_\u0135a_ve_sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'D[-a de] MMMM, YYYY', LLL: 'D[-a de] MMMM, YYYY HH:mm', LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
      },
      meridiemParse: /[ap]\.t\.m/i,
      isPM(e) { return e.charAt(0).toLowerCase() === 'p'; },
      meridiem(e, a, n) { return e > 11 ? n ? 'p.t.m.' : 'P.T.M.' : n ? 'a.t.m.' : 'A.T.M.'; },
      calendar: {
        sameDay: '[Hodia\u016d je] LT', nextDay: '[Morga\u016d je] LT', nextWeek: 'dddd [je] LT', lastDay: '[Hiera\u016d je] LT', lastWeek: '[pasinta] dddd [je] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'post %s', past: 'anta\u016d %s', s: 'sekundoj', ss: '%d sekundoj', m: 'minuto', mm: '%d minutoj', h: 'horo', hh: '%d horoj', d: 'tago', dd: '%d tagoj', M: 'monato', MM: '%d monatoj', y: 'jaro', yy: '%d jaroj',
      },
      dayOfMonthOrdinalParse: /\d{1,2}a/,
      ordinal: '%da',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
      t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      c = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; e.defineLocale('es', {
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
      monthsShort(e, t) { return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsRegex: c,
      monthsShortRegex: c,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: t,
      longMonthsParse: t,
      shortMonthsParse: t,
      weekdays: 'domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mi\xe9._jue._vie._s\xe1b.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_s\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY H:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
      },
      calendar: {
        sameDay() { return `[hoy a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextDay() { return `[ma\xf1ana a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextWeek() { return `dddd [a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastDay() { return `[ayer a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastWeek() { return `[el] dddd [pasado a la${this.hours() !== 1 ? 's' : ''}] LT`; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'en %s', past: 'hace %s', s: 'unos segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'una hora', hh: '%d horas', d: 'un d\xeda', dd: '%d d\xedas', M: 'un mes', MM: '%d meses', y: 'un a\xf1o', yy: '%d a\xf1os',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
      t = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
      c = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; e.defineLocale('es-do', {
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
      monthsShort(e, t) { return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsRegex: c,
      monthsShortRegex: c,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: t,
      longMonthsParse: t,
      shortMonthsParse: t,
      weekdays: 'domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mi\xe9._jue._vie._s\xe1b.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_s\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY h:mm A', LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
      },
      calendar: {
        sameDay() { return `[hoy a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextDay() { return `[ma\xf1ana a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextWeek() { return `dddd [a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastDay() { return `[ayer a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastWeek() { return `[el] dddd [pasado a la${this.hours() !== 1 ? 's' : ''}] LT`; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'en %s', past: 'hace %s', s: 'unos segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'una hora', hh: '%d horas', d: 'un d\xeda', dd: '%d d\xedas', M: 'un mes', MM: '%d meses', y: 'un a\xf1o', yy: '%d a\xf1os',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
      n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'); e.defineLocale('es-us', {
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
      monthsShort(e, t) { return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsParseExact: !0,
      weekdays: 'domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mi\xe9._jue._vie._s\xe1b.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_s\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'MM/DD/YYYY', LL: 'MMMM [de] D [de] YYYY', LLL: 'MMMM [de] D [de] YYYY h:mm A', LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A',
      },
      calendar: {
        sameDay() { return `[hoy a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextDay() { return `[ma\xf1ana a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextWeek() { return `dddd [a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastDay() { return `[ayer a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastWeek() { return `[el] dddd [pasado a la${this.hours() !== 1 ? 's' : ''}] LT`; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'en %s', past: 'hace %s', s: 'unos segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'una hora', hh: '%d horas', d: 'un d\xeda', dd: '%d d\xedas', M: 'un mes', MM: '%d meses', y: 'un a\xf1o', yy: '%d a\xf1os',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        s: ['m\xf5ne sekundi', 'm\xf5ni sekund', 'paar sekundit'], ss: [`${e}sekundi`, `${e}sekundit`], m: ['\xfche minuti', '\xfcks minut'], mm: [`${e} minuti`, `${e} minutit`], h: ['\xfche tunni', 'tund aega', '\xfcks tund'], hh: [`${e} tunni`, `${e} tundi`], d: ['\xfche p\xe4eva', '\xfcks p\xe4ev'], M: ['kuu aja', 'kuu aega', '\xfcks kuu'], MM: [`${e} kuu`, `${e} kuud`], y: ['\xfche aasta', 'aasta', '\xfcks aasta'], yy: [`${e} aasta`, `${e} aastat`],
      }; return a ? c[n][2] ? c[n][2] : c[n][1] : t ? c[n][0] : c[n][1];
    }e.defineLocale('et', {
      months: 'jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
      monthsShort: 'jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
      weekdays: 'p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev'.split('_'),
      weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
      weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[T\xe4na,] LT', nextDay: '[Homme,] LT', nextWeek: '[J\xe4rgmine] dddd LT', lastDay: '[Eile,] LT', lastWeek: '[Eelmine] dddd LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s p\xe4rast', past: '%s tagasi', s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: '%d p\xe4eva', M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('eu', {
      months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
      monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
      weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
      weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'YYYY[ko] MMMM[ren] D[a]', LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm', LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm', l: 'YYYY-M-D', ll: 'YYYY[ko] MMM D[a]', lll: 'YYYY[ko] MMM D[a] HH:mm', llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
      },
      calendar: {
        sameDay: '[gaur] LT[etan]', nextDay: '[bihar] LT[etan]', nextWeek: 'dddd LT[etan]', lastDay: '[atzo] LT[etan]', lastWeek: '[aurreko] dddd LT[etan]', sameElse: 'L',
      },
      relativeTime: {
        future: '%s barru', past: 'duela %s', s: 'segundo batzuk', ss: '%d segundo', m: 'minutu bat', mm: '%d minutu', h: 'ordu bat', hh: '%d ordu', d: 'egun bat', dd: '%d egun', M: 'hilabete bat', MM: '%d hilabete', y: 'urte bat', yy: '%d urte',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u06f1', 2: '\u06f2', 3: '\u06f3', 4: '\u06f4', 5: '\u06f5', 6: '\u06f6', 7: '\u06f7', 8: '\u06f8', 9: '\u06f9', 0: '\u06f0',
      },
      n = {
        '\u06f1': '1', '\u06f2': '2', '\u06f3': '3', '\u06f4': '4', '\u06f5': '5', '\u06f6': '6', '\u06f7': '7', '\u06f8': '8', '\u06f9': '9', '\u06f0': '0',
      }; e.defineLocale('fa', {
      months: '\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631'.split('_'),
      monthsShort: '\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631'.split('_'),
      weekdays: '\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
      weekdaysShort: '\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
      weekdaysMin: '\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
      isPM(e) { return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e); },
      meridiem(e, a, n) { return e < 12 ? '\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631' : '\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631'; },
      calendar: {
        sameDay: '[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT', nextDay: '[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT', nextWeek: 'dddd [\u0633\u0627\u0639\u062a] LT', lastDay: '[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT', lastWeek: 'dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u062f\u0631 %s', past: '%s \u067e\u06cc\u0634', s: '\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647', ss: '\u062b\u0627\u0646\u06cc\u0647 d%', m: '\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647', mm: '%d \u062f\u0642\u06cc\u0642\u0647', h: '\u06cc\u06a9 \u0633\u0627\u0639\u062a', hh: '%d \u0633\u0627\u0639\u062a', d: '\u06cc\u06a9 \u0631\u0648\u0632', dd: '%d \u0631\u0648\u0632', M: '\u06cc\u06a9 \u0645\u0627\u0647', MM: '%d \u0645\u0627\u0647', y: '\u06cc\u06a9 \u0633\u0627\u0644', yy: '%d \u0633\u0627\u0644',
      },
      preparse(e) { return e.replace(/[\u06f0-\u06f9]/g, e => n[e]).replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/\d/g, e => a[e]).replace(/,/g, '\u060c'); },
      dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
      ordinal: '%d\u0645',
      week: { dow: 6, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n'.split(' '),
      n = ['nolla', 'yhden', 'kahden', 'kolmen', 'nelj\xe4n', 'viiden', 'kuuden', a[7], a[8], a[9]]; function t(e, t, c, M) { let s = ''; switch (c) { case 's': return M ? 'muutaman sekunnin' : 'muutama sekunti'; case 'ss': return M ? 'sekunnin' : 'sekuntia'; case 'm': return M ? 'minuutin' : 'minuutti'; case 'mm': s = M ? 'minuutin' : 'minuuttia'; break; case 'h': return M ? 'tunnin' : 'tunti'; case 'hh': s = M ? 'tunnin' : 'tuntia'; break; case 'd': return M ? 'p\xe4iv\xe4n' : 'p\xe4iv\xe4'; case 'dd': s = M ? 'p\xe4iv\xe4n' : 'p\xe4iv\xe4\xe4'; break; case 'M': return M ? 'kuukauden' : 'kuukausi'; case 'MM': s = M ? 'kuukauden' : 'kuukautta'; break; case 'y': return M ? 'vuoden' : 'vuosi'; case 'yy': s = M ? 'vuoden' : 'vuotta'; } return s = `${(function (e, t) { return e < 10 ? t ? n[e] : a[e] : e; }(e, M))} ${s}`; }e.defineLocale('fi', {
      months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
      monthsShort: 'tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu'.split('_'),
      weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
      weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
      weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
      longDateFormat: {
        LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD.MM.YYYY', LL: 'Do MMMM[ta] YYYY', LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm', LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm', l: 'D.M.YYYY', ll: 'Do MMM YYYY', lll: 'Do MMM YYYY, [klo] HH.mm', llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
      },
      calendar: {
        sameDay: '[t\xe4n\xe4\xe4n] [klo] LT', nextDay: '[huomenna] [klo] LT', nextWeek: 'dddd [klo] LT', lastDay: '[eilen] [klo] LT', lastWeek: '[viime] dddd[na] [klo] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s p\xe4\xe4st\xe4', past: '%s sitten', s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('fo', {
      months: 'januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays: 'sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur'.split('_'),
      weekdaysShort: 'sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley'.split('_'),
      weekdaysMin: 'su_m\xe1_t\xfd_mi_h\xf3_fr_le'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D. MMMM, YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\xcd dag kl.] LT', nextDay: '[\xcd morgin kl.] LT', nextWeek: 'dddd [kl.] LT', lastDay: '[\xcd gj\xe1r kl.] LT', lastWeek: '[s\xed\xf0stu] dddd [kl] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'um %s', past: '%s s\xed\xf0ani', s: 'f\xe1 sekund', ss: '%d sekundir', m: 'ein minutt', mm: '%d minuttir', h: 'ein t\xedmi', hh: '%d t\xedmar', d: 'ein dagur', dd: '%d dagar', M: 'ein m\xe1na\xf0i', MM: '%d m\xe1na\xf0ir', y: 'eitt \xe1r', yy: '%d \xe1r',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('fr', {
      months: 'janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre'.split('_'),
      monthsShort: 'janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Aujourd\u2019hui \xe0] LT', nextDay: '[Demain \xe0] LT', nextWeek: 'dddd [\xe0] LT', lastDay: '[Hier \xe0] LT', lastWeek: 'dddd [dernier \xe0] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dans %s', past: 'il y a %s', s: 'quelques secondes', ss: '%d secondes', m: 'une minute', mm: '%d minutes', h: 'une heure', hh: '%d heures', d: 'un jour', dd: '%d jours', M: 'un mois', MM: '%d mois', y: 'un an', yy: '%d ans',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
      ordinal(e, a) { switch (a) { case 'D': return e + (e === 1 ? 'er' : ''); default: case 'M': case 'Q': case 'DDD': case 'd': return e + (e === 1 ? 'er' : 'e'); case 'w': case 'W': return e + (e === 1 ? 're' : 'e'); } },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('fr-ca', {
      months: 'janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre'.split('_'),
      monthsShort: 'janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Aujourd\u2019hui \xe0] LT', nextDay: '[Demain \xe0] LT', nextWeek: 'dddd [\xe0] LT', lastDay: '[Hier \xe0] LT', lastWeek: 'dddd [dernier \xe0] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dans %s', past: 'il y a %s', s: 'quelques secondes', ss: '%d secondes', m: 'une minute', mm: '%d minutes', h: 'une heure', hh: '%d heures', d: 'un jour', dd: '%d jours', M: 'un mois', MM: '%d mois', y: 'un an', yy: '%d ans',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal(e, a) { switch (a) { default: case 'M': case 'Q': case 'D': case 'DDD': case 'd': return e + (e === 1 ? 'er' : 'e'); case 'w': case 'W': return e + (e === 1 ? 're' : 'e'); } },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('fr-ch', {
      months: 'janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre'.split('_'),
      monthsShort: 'janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Aujourd\u2019hui \xe0] LT', nextDay: '[Demain \xe0] LT', nextWeek: 'dddd [\xe0] LT', lastDay: '[Hier \xe0] LT', lastWeek: 'dddd [dernier \xe0] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dans %s', past: 'il y a %s', s: 'quelques secondes', ss: '%d secondes', m: 'une minute', mm: '%d minutes', h: 'une heure', hh: '%d heures', d: 'un jour', dd: '%d jours', M: 'un mois', MM: '%d mois', y: 'un an', yy: '%d ans',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
      ordinal(e, a) { switch (a) { default: case 'M': case 'Q': case 'D': case 'DDD': case 'd': return e + (e === 1 ? 'er' : 'e'); case 'w': case 'W': return e + (e === 1 ? 're' : 'e'); } },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
      n = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'); e.defineLocale('fy', {
      months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
      monthsShort(e, t) { return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsParseExact: !0,
      weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
      weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
      weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[hjoed om] LT', nextDay: '[moarn om] LT', nextWeek: 'dddd [om] LT', lastDay: '[juster om] LT', lastWeek: '[\xf4fr\xfbne] dddd [om] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'oer %s', past: '%s lyn', s: 'in pear sekonden', ss: '%d sekonden', m: 'ien min\xfat', mm: '%d minuten', h: 'ien oere', hh: '%d oeren', d: 'ien dei', dd: '%d dagen', M: 'ien moanne', MM: '%d moannen', y: 'ien jier', yy: '%d jierren',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('gd', {
      months: ['Am Faoilleach', 'An Gearran', 'Am M\xe0rt', 'An Giblean', 'An C\xe8itean', 'An t-\xd2gmhios', 'An t-Iuchar', 'An L\xf9nastal', 'An t-Sultain', 'An D\xe0mhair', 'An t-Samhain', 'An D\xf9bhlachd'],
      monthsShort: ['Faoi', 'Gear', 'M\xe0rt', 'Gibl', 'C\xe8it', '\xd2gmh', 'Iuch', 'L\xf9n', 'Sult', 'D\xe0mh', 'Samh', 'D\xf9bh'],
      monthsParseExact: !0,
      weekdays: ['Did\xf2mhnaich', 'Diluain', 'Dim\xe0irt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'],
      weekdaysShort: ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'],
      weekdaysMin: ['D\xf2', 'Lu', 'M\xe0', 'Ci', 'Ar', 'Ha', 'Sa'],
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[An-diugh aig] LT', nextDay: '[A-m\xe0ireach aig] LT', nextWeek: 'dddd [aig] LT', lastDay: '[An-d\xe8 aig] LT', lastWeek: 'dddd [seo chaidh] [aig] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'ann an %s', past: 'bho chionn %s', s: 'beagan diogan', ss: '%d diogan', m: 'mionaid', mm: '%d mionaidean', h: 'uair', hh: '%d uairean', d: 'latha', dd: '%d latha', M: 'm\xecos', MM: '%d m\xecosan', y: 'bliadhna', yy: '%d bliadhna',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
      ordinal(e) { return e + (e === 1 ? 'd' : e % 10 == 2 ? 'na' : 'mh'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('gl', {
      months: 'xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
      monthsShort: 'xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado'.split('_'),
      weekdaysShort: 'dom._lun._mar._m\xe9r._xov._ven._s\xe1b.'.split('_'),
      weekdaysMin: 'do_lu_ma_m\xe9_xo_ve_s\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY H:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
      },
      calendar: {
        sameDay() { return `[hoxe ${this.hours() !== 1 ? '\xe1s' : '\xe1'}] LT`; }, nextDay() { return `[ma\xf1\xe1 ${this.hours() !== 1 ? '\xe1s' : '\xe1'}] LT`; }, nextWeek() { return `dddd [${this.hours() !== 1 ? '\xe1s' : 'a'}] LT`; }, lastDay() { return `[onte ${this.hours() !== 1 ? '\xe1' : 'a'}] LT`; }, lastWeek() { return `[o] dddd [pasado ${this.hours() !== 1 ? '\xe1s' : 'a'}] LT`; }, sameElse: 'L',
      },
      relativeTime: {
        future(e) { return e.indexOf('un') === 0 ? `n${e}` : `en ${e}`; }, past: 'hai %s', s: 'uns segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'unha hora', hh: '%d horas', d: 'un d\xeda', dd: '%d d\xedas', M: 'un mes', MM: '%d meses', y: 'un ano', yy: '%d anos',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        s: ['thodde secondanim', 'thodde second'], ss: [`${e} secondanim`, `${e} second`], m: ['eka mintan', 'ek minute'], mm: [`${e} mintanim`, `${e} mintam`], h: ['eka horan', 'ek hor'], hh: [`${e} horanim`, `${e} hor`], d: ['eka disan', 'ek dis'], dd: [`${e} disanim`, `${e} dis`], M: ['eka mhoinean', 'ek mhoino'], MM: [`${e} mhoineanim`, `${e} mhoine`], y: ['eka vorsan', 'ek voros'], yy: [`${e} vorsanim`, `${e} vorsam`],
      }; return a ? c[n][0] : c[n][1];
    }e.defineLocale('gom-latn', {
      months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
      monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split('_'),
      weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
      weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'A h:mm [vazta]', LTS: 'A h:mm:ss [vazta]', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY A h:mm [vazta]', LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]', llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
      },
      calendar: {
        sameDay: '[Aiz] LT', nextDay: '[Faleam] LT', nextWeek: '[Ieta to] dddd[,] LT', lastDay: '[Kal] LT', lastWeek: '[Fatlo] dddd[,] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s', past: '%s adim', s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er)/,
      ordinal(e, a) { switch (a) { case 'D': return `${e}er`; default: case 'M': case 'Q': case 'DDD': case 'd': case 'w': case 'W': return e; } },
      week: { dow: 1, doy: 4 },
      meridiemParse: /rati|sokalli|donparam|sanje/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === 'rati' ? e < 4 ? e : e + 12 : a === 'sokalli' ? e : a === 'donparam' ? e > 12 ? e : e + 12 : a === 'sanje' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? 'rati' : e < 12 ? 'sokalli' : e < 16 ? 'donparam' : e < 20 ? 'sanje' : 'rati'; },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0ae7', 2: '\u0ae8', 3: '\u0ae9', 4: '\u0aea', 5: '\u0aeb', 6: '\u0aec', 7: '\u0aed', 8: '\u0aee', 9: '\u0aef', 0: '\u0ae6',
      },
      n = {
        '\u0ae7': '1', '\u0ae8': '2', '\u0ae9': '3', '\u0aea': '4', '\u0aeb': '5', '\u0aec': '6', '\u0aed': '7', '\u0aee': '8', '\u0aef': '9', '\u0ae6': '0',
      }; e.defineLocale('gu', {
      months: '\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0'.split('_'),
      monthsShort: '\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0'.split('_'),
      weekdaysShort: '\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf'.split('_'),
      weekdaysMin: '\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6'.split('_'),
      longDateFormat: {
        LT: 'A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7', LTS: 'A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7', LLLL: 'dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7',
      },
      calendar: {
        sameDay: '[\u0a86\u0a9c] LT', nextDay: '[\u0a95\u0abe\u0ab2\u0ac7] LT', nextWeek: 'dddd, LT', lastDay: '[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT', lastWeek: '[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0aae\u0abe', past: '%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe', s: '\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb', ss: '%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1', m: '\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f', mm: '%d \u0aae\u0abf\u0aa8\u0abf\u0a9f', h: '\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95', hh: '%d \u0a95\u0ab2\u0abe\u0a95', d: '\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8', dd: '%d \u0aa6\u0abf\u0ab5\u0ab8', M: '\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb', MM: '%d \u0aae\u0ab9\u0abf\u0aa8\u0acb', y: '\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7', yy: '%d \u0ab5\u0ab0\u0acd\u0ab7',
      },
      preparse(e) { return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0ab0\u0abe\u0aa4' ? e < 4 ? e : e + 12 : a === '\u0ab8\u0ab5\u0abe\u0ab0' ? e : a === '\u0aac\u0aaa\u0acb\u0ab0' ? e >= 10 ? e : e + 12 : a === '\u0ab8\u0abe\u0a82\u0a9c' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? '\u0ab0\u0abe\u0aa4' : e < 10 ? '\u0ab8\u0ab5\u0abe\u0ab0' : e < 17 ? '\u0aac\u0aaa\u0acb\u0ab0' : e < 20 ? '\u0ab8\u0abe\u0a82\u0a9c' : '\u0ab0\u0abe\u0aa4'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('he', {
      months: '\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8'.split('_'),
      monthsShort: '\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3'.split('_'),
      weekdays: '\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea'.split('_'),
      weekdaysShort: '\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3'.split('_'),
      weekdaysMin: '\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D [\u05d1]MMMM YYYY', LLL: 'D [\u05d1]MMMM YYYY HH:mm', LLLL: 'dddd, D [\u05d1]MMMM YYYY HH:mm', l: 'D/M/YYYY', ll: 'D MMM YYYY', lll: 'D MMM YYYY HH:mm', llll: 'ddd, D MMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT', nextDay: '[\u05de\u05d7\u05e8 \u05d1\u05be]LT', nextWeek: 'dddd [\u05d1\u05e9\u05e2\u05d4] LT', lastDay: '[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT', lastWeek: '[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u05d1\u05e2\u05d5\u05d3 %s', past: '\u05dc\u05e4\u05e0\u05d9 %s', s: '\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea', ss: '%d \u05e9\u05e0\u05d9\u05d5\u05ea', m: '\u05d3\u05e7\u05d4', mm: '%d \u05d3\u05e7\u05d5\u05ea', h: '\u05e9\u05e2\u05d4', hh(e) { return e === 2 ? '\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd' : `${e} \u05e9\u05e2\u05d5\u05ea`; }, d: '\u05d9\u05d5\u05dd', dd(e) { return e === 2 ? '\u05d9\u05d5\u05de\u05d9\u05d9\u05dd' : `${e} \u05d9\u05de\u05d9\u05dd`; }, M: '\u05d7\u05d5\u05d3\u05e9', MM(e) { return e === 2 ? '\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd' : `${e} \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd`; }, y: '\u05e9\u05e0\u05d4', yy(e) { return e === 2 ? '\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd' : e % 10 == 0 && e !== 10 ? `${e} \u05e9\u05e0\u05d4` : `${e} \u05e9\u05e0\u05d9\u05dd`; },
      },
      meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
      isPM(e) { return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e); },
      meridiem(e, a, n) { return e < 5 ? '\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8' : e < 10 ? '\u05d1\u05d1\u05d5\u05e7\u05e8' : e < 12 ? n ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : '\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd' : e < 18 ? n ? '\u05d0\u05d7\u05d4"\u05e6' : '\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd' : '\u05d1\u05e2\u05e8\u05d1'; },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0967', 2: '\u0968', 3: '\u0969', 4: '\u096a', 5: '\u096b', 6: '\u096c', 7: '\u096d', 8: '\u096e', 9: '\u096f', 0: '\u0966',
      },
      n = {
        '\u0967': '1', '\u0968': '2', '\u0969': '3', '\u096a': '4', '\u096b': '5', '\u096c': '6', '\u096d': '7', '\u096e': '8', '\u096f': '9', '\u0966': '0',
      }; e.defineLocale('hi', {
      months: '\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930'.split('_'),
      monthsShort: '\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930'.split('_'),
      weekdaysShort: '\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f'.split('_'),
      weekdaysMin: '\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936'.split('_'),
      longDateFormat: {
        LT: 'A h:mm \u092c\u091c\u0947', LTS: 'A h:mm:ss \u092c\u091c\u0947', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm \u092c\u091c\u0947', LLLL: 'dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947',
      },
      calendar: {
        sameDay: '[\u0906\u091c] LT', nextDay: '[\u0915\u0932] LT', nextWeek: 'dddd, LT', lastDay: '[\u0915\u0932] LT', lastWeek: '[\u092a\u093f\u091b\u0932\u0947] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u092e\u0947\u0902', past: '%s \u092a\u0939\u0932\u0947', s: '\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923', ss: '%d \u0938\u0947\u0915\u0902\u0921', m: '\u090f\u0915 \u092e\u093f\u0928\u091f', mm: '%d \u092e\u093f\u0928\u091f', h: '\u090f\u0915 \u0918\u0902\u091f\u093e', hh: '%d \u0918\u0902\u091f\u0947', d: '\u090f\u0915 \u0926\u093f\u0928', dd: '%d \u0926\u093f\u0928', M: '\u090f\u0915 \u092e\u0939\u0940\u0928\u0947', MM: '%d \u092e\u0939\u0940\u0928\u0947', y: '\u090f\u0915 \u0935\u0930\u094d\u0937', yy: '%d \u0935\u0930\u094d\u0937',
      },
      preparse(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0930\u093e\u0924' ? e < 4 ? e : e + 12 : a === '\u0938\u0941\u092c\u0939' ? e : a === '\u0926\u094b\u092a\u0939\u0930' ? e >= 10 ? e : e + 12 : a === '\u0936\u093e\u092e' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? '\u0930\u093e\u0924' : e < 10 ? '\u0938\u0941\u092c\u0939' : e < 17 ? '\u0926\u094b\u092a\u0939\u0930' : e < 20 ? '\u0936\u093e\u092e' : '\u0930\u093e\u0924'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) { let t = `${e} `; switch (n) { case 'ss': return t += e === 1 ? 'sekunda' : e === 2 || e === 3 || e === 4 ? 'sekunde' : 'sekundi'; case 'm': return a ? 'jedna minuta' : 'jedne minute'; case 'mm': return t += e === 1 ? 'minuta' : e === 2 || e === 3 || e === 4 ? 'minute' : 'minuta'; case 'h': return a ? 'jedan sat' : 'jednog sata'; case 'hh': return t += e === 1 ? 'sat' : e === 2 || e === 3 || e === 4 ? 'sata' : 'sati'; case 'dd': return t += e === 1 ? 'dan' : 'dana'; case 'MM': return t += e === 1 ? 'mjesec' : e === 2 || e === 3 || e === 4 ? 'mjeseca' : 'mjeseci'; case 'yy': return t += e === 1 ? 'godina' : e === 2 || e === 3 || e === 4 ? 'godine' : 'godina'; } }e.defineLocale('hr', {
      months: { format: 'sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'), standalone: 'sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_') },
      monthsShort: 'sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._\u010det._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_\u010de_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[danas u] LT', nextDay: '[sutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedjelju] [u] LT'; case 3: return '[u] [srijedu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[ju\u010der u] LT', lastWeek() { switch (this.day()) { case 0: case 3: return '[pro\u0161lu] dddd [u] LT'; case 6: return '[pro\u0161le] [subote] [u] LT'; case 1: case 2: case 4: case 5: return '[pro\u0161li] dddd [u] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: 'prije %s', s: 'par sekundi', ss: a, m: a, mm: a, h: a, hh: a, d: 'dan', dd: a, M: 'mjesec', MM: a, y: 'godinu', yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = 'vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton'.split(' '); function n(e, a, n, t) { const c = e; switch (n) { case 's': return t || a ? 'n\xe9h\xe1ny m\xe1sodperc' : 'n\xe9h\xe1ny m\xe1sodperce'; case 'ss': return c + (t || a) ? ' m\xe1sodperc' : ' m\xe1sodperce'; case 'm': return `egy${t || a ? ' perc' : ' perce'}`; case 'mm': return c + (t || a ? ' perc' : ' perce'); case 'h': return `egy${t || a ? ' \xf3ra' : ' \xf3r\xe1ja'}`; case 'hh': return c + (t || a ? ' \xf3ra' : ' \xf3r\xe1ja'); case 'd': return `egy${t || a ? ' nap' : ' napja'}`; case 'dd': return c + (t || a ? ' nap' : ' napja'); case 'M': return `egy${t || a ? ' h\xf3nap' : ' h\xf3napja'}`; case 'MM': return c + (t || a ? ' h\xf3nap' : ' h\xf3napja'); case 'y': return `egy${t || a ? ' \xe9v' : ' \xe9ve'}`; case 'yy': return c + (t || a ? ' \xe9v' : ' \xe9ve'); } return ''; } function t(e) { return `${e ? '' : '[m\xfalt] '}[${a[this.day()]}] LT[-kor]`; }e.defineLocale('hu', {
      months: 'janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december'.split('_'),
      monthsShort: 'jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec'.split('_'),
      weekdays: 'vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat'.split('_'),
      weekdaysShort: 'vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo'.split('_'),
      weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'YYYY.MM.DD.', LL: 'YYYY. MMMM D.', LLL: 'YYYY. MMMM D. H:mm', LLLL: 'YYYY. MMMM D., dddd H:mm',
      },
      meridiemParse: /de|du/i,
      isPM(e) { return e.charAt(1).toLowerCase() === 'u'; },
      meridiem(e, a, n) { return e < 12 ? !0 === n ? 'de' : 'DE' : !0 === n ? 'du' : 'DU'; },
      calendar: {
        sameDay: '[ma] LT[-kor]', nextDay: '[holnap] LT[-kor]', nextWeek() { return t.call(this, !0); }, lastDay: '[tegnap] LT[-kor]', lastWeek() { return t.call(this, !1); }, sameElse: 'L',
      },
      relativeTime: {
        future: '%s m\xfalva', past: '%s', s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('hy-am', {
      months: { format: '\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b'.split('_'), standalone: '\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580'.split('_') },
      monthsShort: '\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f'.split('_'),
      weekdays: '\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569'.split('_'),
      weekdaysShort: '\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569'.split('_'),
      weekdaysMin: '\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY \u0569.', LLL: 'D MMMM YYYY \u0569., HH:mm', LLLL: 'dddd, D MMMM YYYY \u0569., HH:mm',
      },
      calendar: {
        sameDay: '[\u0561\u0575\u057d\u0585\u0580] LT', nextDay: '[\u057e\u0561\u0572\u0568] LT', lastDay: '[\u0565\u0580\u0565\u056f] LT', nextWeek() { return 'dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT'; }, lastWeek() { return '[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT'; }, sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0570\u0565\u057f\u0578', past: '%s \u0561\u057c\u0561\u057b', s: '\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576', ss: '%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576', m: '\u0580\u0578\u057a\u0565', mm: '%d \u0580\u0578\u057a\u0565', h: '\u056a\u0561\u0574', hh: '%d \u056a\u0561\u0574', d: '\u0585\u0580', dd: '%d \u0585\u0580', M: '\u0561\u0574\u056b\u057d', MM: '%d \u0561\u0574\u056b\u057d', y: '\u057f\u0561\u0580\u056b', yy: '%d \u057f\u0561\u0580\u056b',
      },
      meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
      isPM(e) { return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e); },
      meridiem(e) { return e < 4 ? '\u0563\u056b\u0577\u0565\u0580\u057e\u0561' : e < 12 ? '\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561' : e < 17 ? '\u0581\u0565\u0580\u0565\u056f\u057e\u0561' : '\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576'; },
      dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
      ordinal(e, a) { switch (a) { case 'DDD': case 'w': case 'W': case 'DDDo': return e === 1 ? `${e}-\u056b\u0576` : `${e}-\u0580\u0564`; default: return e; } },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('id', {
      months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
      weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
        LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /pagi|siang|sore|malam/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === 'pagi' ? e : a === 'siang' ? e >= 11 ? e : e + 12 : a === 'sore' || a === 'malam' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam'; },
      calendar: {
        sameDay: '[Hari ini pukul] LT', nextDay: '[Besok pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kemarin pukul] LT', lastWeek: 'dddd [lalu pukul] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dalam %s', past: '%s yang lalu', s: 'beberapa detik', ss: '%d detik', m: 'semenit', mm: '%d menit', h: 'sejam', hh: '%d jam', d: 'sehari', dd: '%d hari', M: 'sebulan', MM: '%d bulan', y: 'setahun', yy: '%d tahun',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e) { return e % 100 == 11 || e % 10 != 1; } function n(e, n, t, c) { const M = `${e} `; switch (t) { case 's': return n || c ? 'nokkrar sek\xfandur' : 'nokkrum sek\xfandum'; case 'ss': return a(e) ? M + (n || c ? 'sek\xfandur' : 'sek\xfandum') : `${M}sek\xfanda`; case 'm': return n ? 'm\xedn\xfata' : 'm\xedn\xfatu'; case 'mm': return a(e) ? M + (n || c ? 'm\xedn\xfatur' : 'm\xedn\xfatum') : n ? `${M}m\xedn\xfata` : `${M}m\xedn\xfatu`; case 'hh': return a(e) ? M + (n || c ? 'klukkustundir' : 'klukkustundum') : `${M}klukkustund`; case 'd': return n ? 'dagur' : c ? 'dag' : 'degi'; case 'dd': return a(e) ? n ? `${M}dagar` : M + (c ? 'daga' : 'd\xf6gum') : n ? `${M}dagur` : M + (c ? 'dag' : 'degi'); case 'M': return n ? 'm\xe1nu\xf0ur' : c ? 'm\xe1nu\xf0' : 'm\xe1nu\xf0i'; case 'MM': return a(e) ? n ? `${M}m\xe1nu\xf0ir` : M + (c ? 'm\xe1nu\xf0i' : 'm\xe1nu\xf0um') : n ? `${M}m\xe1nu\xf0ur` : M + (c ? 'm\xe1nu\xf0' : 'm\xe1nu\xf0i'); case 'y': return n || c ? '\xe1r' : '\xe1ri'; case 'yy': return a(e) ? M + (n || c ? '\xe1r' : '\xe1rum') : M + (n || c ? '\xe1r' : '\xe1ri'); } }e.defineLocale('is', {
      months: 'jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des'.split('_'),
      weekdays: 'sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur'.split('_'),
      weekdaysShort: 'sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau'.split('_'),
      weekdaysMin: 'Su_M\xe1_\xder_Mi_Fi_F\xf6_La'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY [kl.] H:mm', LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
      },
      calendar: {
        sameDay: '[\xed dag kl.] LT', nextDay: '[\xe1 morgun kl.] LT', nextWeek: 'dddd [kl.] LT', lastDay: '[\xed g\xe6r kl.] LT', lastWeek: '[s\xed\xf0asta] dddd [kl.] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'eftir %s', past: 'fyrir %s s\xed\xf0an', s: n, ss: n, m: n, mm: n, h: 'klukkustund', hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('it', {
      months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
      monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
      weekdays: 'domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato'.split('_'),
      weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
      weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Oggi alle] LT', nextDay: '[Domani alle] LT', nextWeek: 'dddd [alle] LT', lastDay: '[Ieri alle] LT', lastWeek() { switch (this.day()) { case 0: return '[la scorsa] dddd [alle] LT'; default: return '[lo scorso] dddd [alle] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future(e) { return `${/^[0-9].+$/.test(e) ? 'tra' : 'in'} ${e}`; }, past: '%s fa', s: 'alcuni secondi', ss: '%d secondi', m: 'un minuto', mm: '%d minuti', h: "un'ora", hh: '%d ore', d: 'un giorno', dd: '%d giorni', M: 'un mese', MM: '%d mesi', y: 'un anno', yy: '%d anni',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ja', {
      months: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'),
      monthsShort: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'),
      weekdays: '\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5'.split('_'),
      weekdaysShort: '\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f'.split('_'),
      weekdaysMin: '\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY\u5e74M\u6708D\u65e5', LLL: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', LLLL: 'YYYY\u5e74M\u6708D\u65e5 HH:mm dddd', l: 'YYYY/MM/DD', ll: 'YYYY\u5e74M\u6708D\u65e5', lll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', llll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm dddd',
      },
      meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
      isPM(e) { return e === '\u5348\u5f8c'; },
      meridiem(e, a, n) { return e < 12 ? '\u5348\u524d' : '\u5348\u5f8c'; },
      calendar: {
        sameDay: '[\u4eca\u65e5] LT', nextDay: '[\u660e\u65e5] LT', nextWeek: '[\u6765\u9031]dddd LT', lastDay: '[\u6628\u65e5] LT', lastWeek: '[\u524d\u9031]dddd LT', sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
      ordinal(e, a) { switch (a) { case 'd': case 'D': case 'DDD': return `${e}\u65e5`; default: return e; } },
      relativeTime: {
        future: '%s\u5f8c', past: '%s\u524d', s: '\u6570\u79d2', ss: '%d\u79d2', m: '1\u5206', mm: '%d\u5206', h: '1\u6642\u9593', hh: '%d\u6642\u9593', d: '1\u65e5', dd: '%d\u65e5', M: '1\u30f6\u6708', MM: '%d\u30f6\u6708', y: '1\u5e74', yy: '%d\u5e74',
      },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('jv', {
      months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
      weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
      weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
      longDateFormat: {
        LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /enjing|siyang|sonten|ndalu/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === 'enjing' ? e : a === 'siyang' ? e >= 11 ? e : e + 12 : a === 'sonten' || a === 'ndalu' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu'; },
      calendar: {
        sameDay: '[Dinten puniko pukul] LT', nextDay: '[Mbenjang pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kala wingi pukul] LT', lastWeek: 'dddd [kepengker pukul] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'wonten ing %s', past: '%s ingkang kepengker', s: 'sawetawis detik', ss: '%d detik', m: 'setunggal menit', mm: '%d menit', h: 'setunggal jam', hh: '%d jam', d: 'sedinten', dd: '%d dinten', M: 'sewulan', MM: '%d wulan', y: 'setaun', yy: '%d taun',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ka', {
      months: { standalone: '\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8'.split('_'), format: '\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1'.split('_') },
      monthsShort: '\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9'.split('_'),
      weekdays: { standalone: '\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8'.split('_'), format: '\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1'.split('_'), isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/ },
      weekdaysShort: '\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1'.split('_'),
      weekdaysMin: '\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0'.split('_'),
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
        sameDay: '[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]', nextDay: '[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]', lastDay: '[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]', nextWeek: '[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]', lastWeek: '[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4', sameElse: 'L',
      },
      relativeTime: {
        future(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, '\u10e8\u10d8') : `${e}\u10e8\u10d8`; }, past(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, '\u10d8\u10e1 \u10e3\u10d9\u10d0\u10dc') : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, '\u10ec\u10da\u10d8\u10e1 \u10e3\u10d9\u10d0\u10dc') : void 0; }, s: '\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8', ss: '%d \u10ec\u10d0\u10db\u10d8', m: '\u10ec\u10e3\u10d7\u10d8', mm: '%d \u10ec\u10e3\u10d7\u10d8', h: '\u10e1\u10d0\u10d0\u10d7\u10d8', hh: '%d \u10e1\u10d0\u10d0\u10d7\u10d8', d: '\u10d3\u10e6\u10d4', dd: '%d \u10d3\u10e6\u10d4', M: '\u10d7\u10d5\u10d4', MM: '%d \u10d7\u10d5\u10d4', y: '\u10ec\u10d4\u10da\u10d8', yy: '%d \u10ec\u10d4\u10da\u10d8',
      },
      dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
      ordinal(e) { return e === 0 ? e : e === 1 ? `${e}-\u10da\u10d8` : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? `\u10db\u10d4-${e}` : `${e}-\u10d4`; },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = {
      0: '-\u0448\u0456', 1: '-\u0448\u0456', 2: '-\u0448\u0456', 3: '-\u0448\u0456', 4: '-\u0448\u0456', 5: '-\u0448\u0456', 6: '-\u0448\u044b', 7: '-\u0448\u0456', 8: '-\u0448\u0456', 9: '-\u0448\u044b', 10: '-\u0448\u044b', 20: '-\u0448\u044b', 30: '-\u0448\u044b', 40: '-\u0448\u044b', 50: '-\u0448\u0456', 60: '-\u0448\u044b', 70: '-\u0448\u0456', 80: '-\u0448\u0456', 90: '-\u0448\u044b', 100: '-\u0448\u0456',
    }; e.defineLocale('kk', {
      months: '\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d'.split('_'),
      monthsShort: '\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b'.split('_'),
      weekdays: '\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456'.split('_'),
      weekdaysShort: '\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d'.split('_'),
      weekdaysMin: '\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT', nextDay: '[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT', nextWeek: 'dddd [\u0441\u0430\u0493\u0430\u0442] LT', lastDay: '[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT', lastWeek: '[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0456\u0448\u0456\u043d\u0434\u0435', past: '%s \u0431\u04b1\u0440\u044b\u043d', s: '\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434', ss: '%d \u0441\u0435\u043a\u0443\u043d\u0434', m: '\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442', mm: '%d \u043c\u0438\u043d\u0443\u0442', h: '\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442', hh: '%d \u0441\u0430\u0493\u0430\u0442', d: '\u0431\u0456\u0440 \u043a\u04af\u043d', dd: '%d \u043a\u04af\u043d', M: '\u0431\u0456\u0440 \u0430\u0439', MM: '%d \u0430\u0439', y: '\u0431\u0456\u0440 \u0436\u044b\u043b', yy: '%d \u0436\u044b\u043b',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
      ordinal(e) { return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null]); },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('km', {
      months: '\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc'.split('_'),
      monthsShort: '\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc'.split('_'),
      weekdays: '\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd'.split('_'),
      weekdaysShort: '\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd'.split('_'),
      weekdaysMin: '\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT', nextDay: '[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT', nextWeek: 'dddd [\u1798\u17c9\u17c4\u1784] LT', lastDay: '[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT', lastWeek: 'dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s\u1791\u17c0\u178f', past: '%s\u1798\u17bb\u1793', s: '\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8', ss: '%d \u179c\u17b7\u1793\u17b6\u1791\u17b8', m: '\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8', mm: '%d \u1793\u17b6\u1791\u17b8', h: '\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784', hh: '%d \u1798\u17c9\u17c4\u1784', d: '\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3', dd: '%d \u1790\u17d2\u1784\u17c3', M: '\u1798\u17bd\u1799\u1781\u17c2', MM: '%d \u1781\u17c2', y: '\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6', yy: '%d \u1786\u17d2\u1793\u17b6\u17c6',
      },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0ce7', 2: '\u0ce8', 3: '\u0ce9', 4: '\u0cea', 5: '\u0ceb', 6: '\u0cec', 7: '\u0ced', 8: '\u0cee', 9: '\u0cef', 0: '\u0ce6',
      },
      n = {
        '\u0ce7': '1', '\u0ce8': '2', '\u0ce9': '3', '\u0cea': '4', '\u0ceb': '5', '\u0cec': '6', '\u0ced': '7', '\u0cee': '8', '\u0cef': '9', '\u0ce6': '0',
      }; e.defineLocale('kn', {
      months: '\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd'.split('_'),
      monthsShort: '\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac_\u0ca8\u0cb5\u0cc6\u0c82\u0cac_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0'.split('_'),
      weekdaysShort: '\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf'.split('_'),
      weekdaysMin: '\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6'.split('_'),
      longDateFormat: {
        LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm', LLLL: 'dddd, D MMMM YYYY, A h:mm',
      },
      calendar: {
        sameDay: '[\u0c87\u0c82\u0ca6\u0cc1] LT', nextDay: '[\u0ca8\u0cbe\u0cb3\u0cc6] LT', nextWeek: 'dddd, LT', lastDay: '[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT', lastWeek: '[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0ca8\u0c82\u0ca4\u0cb0', past: '%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6', s: '\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1', ss: '%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1', m: '\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7', mm: '%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7', h: '\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6', hh: '%d \u0c97\u0c82\u0c9f\u0cc6', d: '\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8', dd: '%d \u0ca6\u0cbf\u0ca8', M: '\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1', MM: '%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1', y: '\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7', yy: '%d \u0cb5\u0cb0\u0ccd\u0cb7',
      },
      preparse(e) { return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf' ? e < 4 ? e : e + 12 : a === '\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6' ? e : a === '\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8' ? e >= 10 ? e : e + 12 : a === '\u0cb8\u0c82\u0c9c\u0cc6' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? '\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf' : e < 10 ? '\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6' : e < 17 ? '\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8' : e < 20 ? '\u0cb8\u0c82\u0c9c\u0cc6' : '\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf'; },
      dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
      ordinal(e) { return `${e}\u0ca8\u0cc6\u0cd5`; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ko', {
      months: '1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4'.split('_'),
      monthsShort: '1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4'.split('_'),
      weekdays: '\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c'.split('_'),
      weekdaysShort: '\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0'.split('_'),
      weekdaysMin: '\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0'.split('_'),
      longDateFormat: {
        LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'YYYY.MM.DD', LL: 'YYYY\ub144 MMMM D\uc77c', LLL: 'YYYY\ub144 MMMM D\uc77c A h:mm', LLLL: 'YYYY\ub144 MMMM D\uc77c dddd A h:mm', l: 'YYYY.MM.DD', ll: 'YYYY\ub144 MMMM D\uc77c', lll: 'YYYY\ub144 MMMM D\uc77c A h:mm', llll: 'YYYY\ub144 MMMM D\uc77c dddd A h:mm',
      },
      calendar: {
        sameDay: '\uc624\ub298 LT', nextDay: '\ub0b4\uc77c LT', nextWeek: 'dddd LT', lastDay: '\uc5b4\uc81c LT', lastWeek: '\uc9c0\ub09c\uc8fc dddd LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \ud6c4', past: '%s \uc804', s: '\uba87 \ucd08', ss: '%d\ucd08', m: '1\ubd84', mm: '%d\ubd84', h: '\ud55c \uc2dc\uac04', hh: '%d\uc2dc\uac04', d: '\ud558\ub8e8', dd: '%d\uc77c', M: '\ud55c \ub2ec', MM: '%d\ub2ec', y: '\uc77c \ub144', yy: '%d\ub144',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
      ordinal(e, a) { switch (a) { case 'd': case 'D': case 'DDD': return `${e}\uc77c`; case 'M': return `${e}\uc6d4`; case 'w': case 'W': return `${e}\uc8fc`; default: return e; } },
      meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
      isPM(e) { return e === '\uc624\ud6c4'; },
      meridiem(e, a, n) { return e < 12 ? '\uc624\uc804' : '\uc624\ud6c4'; },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = {
      0: '-\u0447\u04af', 1: '-\u0447\u0438', 2: '-\u0447\u0438', 3: '-\u0447\u04af', 4: '-\u0447\u04af', 5: '-\u0447\u0438', 6: '-\u0447\u044b', 7: '-\u0447\u0438', 8: '-\u0447\u0438', 9: '-\u0447\u0443', 10: '-\u0447\u0443', 20: '-\u0447\u044b', 30: '-\u0447\u0443', 40: '-\u0447\u044b', 50: '-\u0447\u04af', 60: '-\u0447\u044b', 70: '-\u0447\u0438', 80: '-\u0447\u0438', 90: '-\u0447\u0443', 100: '-\u0447\u04af',
    }; e.defineLocale('ky', {
      months: '\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c'.split('_'),
      monthsShort: '\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a'.split('_'),
      weekdays: '\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438'.split('_'),
      weekdaysShort: '\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435'.split('_'),
      weekdaysMin: '\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT', nextDay: '[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT', nextWeek: 'dddd [\u0441\u0430\u0430\u0442] LT', lastDay: '[\u041a\u0435\u0447\u0435 \u0441\u0430\u0430\u0442] LT', lastWeek: '[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0438\u0447\u0438\u043d\u0434\u0435', past: '%s \u043c\u0443\u0440\u0443\u043d', s: '\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434', ss: '%d \u0441\u0435\u043a\u0443\u043d\u0434', m: '\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442', mm: '%d \u043c\u04af\u043d\u04e9\u0442', h: '\u0431\u0438\u0440 \u0441\u0430\u0430\u0442', hh: '%d \u0441\u0430\u0430\u0442', d: '\u0431\u0438\u0440 \u043a\u04af\u043d', dd: '%d \u043a\u04af\u043d', M: '\u0431\u0438\u0440 \u0430\u0439', MM: '%d \u0430\u0439', y: '\u0431\u0438\u0440 \u0436\u044b\u043b', yy: '%d \u0436\u044b\u043b',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
      ordinal(e) { return e + (a[e] || a[e % 10] || a[e >= 100 ? 100 : null]); },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        m: ['eng Minutt', 'enger Minutt'], h: ['eng Stonn', 'enger Stonn'], d: ['een Dag', 'engem Dag'], M: ['ee Mount', 'engem Mount'], y: ['ee Joer', 'engem Joer'],
      }; return a ? c[n][0] : c[n][1];
    } function n(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return e >= 4 && e <= 7; if (e < 100) { const a = e % 10; return n(a === 0 ? e / 10 : a); } if (e < 1e4) { for (;e >= 10;)e /= 10; return n(e); } return n(e /= 1e3); }e.defineLocale('lb', {
      months: 'Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
      weekdaysShort: 'So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm [Auer]', LTS: 'H:mm:ss [Auer]', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm [Auer]', LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
      },
      calendar: {
        sameDay: '[Haut um] LT', sameElse: 'L', nextDay: '[Muer um] LT', nextWeek: 'dddd [um] LT', lastDay: '[G\xebschter um] LT', lastWeek() { switch (this.day()) { case 2: case 4: return '[Leschten] dddd [um] LT'; default: return '[Leschte] dddd [um] LT'; } },
      },
      relativeTime: {
        future(e) { return n(e.substr(0, e.indexOf(' '))) ? `a ${e}` : `an ${e}`; }, past(e) { return n(e.substr(0, e.indexOf(' '))) ? `viru ${e}` : `virun ${e}`; }, s: 'e puer Sekonnen', ss: '%d Sekonnen', m: a, mm: '%d Minutten', h: a, hh: '%d Stonnen', d: a, dd: '%d Deeg', M: a, MM: '%d M\xe9int', y: a, yy: '%d Joer',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('lo', {
      months: '\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2'.split('_'),
      monthsShort: '\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2'.split('_'),
      weekdays: '\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2'.split('_'),
      weekdaysShort: '\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2'.split('_'),
      weekdaysMin: '\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: '\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
      isPM(e) { return e === '\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87'; },
      meridiem(e, a, n) { return e < 12 ? '\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2' : '\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87'; },
      calendar: {
        sameDay: '[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT', nextDay: '[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT', nextWeek: '[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT', lastDay: '[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT', lastWeek: '[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0ead\u0eb5\u0e81 %s', past: '%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2', s: '\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5', ss: '%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5', m: '1 \u0e99\u0eb2\u0e97\u0eb5', mm: '%d \u0e99\u0eb2\u0e97\u0eb5', h: '1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87', hh: '%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87', d: '1 \u0ea1\u0eb7\u0ec9', dd: '%d \u0ea1\u0eb7\u0ec9', M: '1 \u0ec0\u0e94\u0eb7\u0ead\u0e99', MM: '%d \u0ec0\u0e94\u0eb7\u0ead\u0e99', y: '1 \u0e9b\u0eb5', yy: '%d \u0e9b\u0eb5',
      },
      dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
      ordinal(e) { return `\u0e97\u0eb5\u0ec8${e}`; },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = {
      ss: 'sekund\u0117_sekund\u017ei\u0173_sekundes', m: 'minut\u0117_minut\u0117s_minut\u0119', mm: 'minut\u0117s_minu\u010di\u0173_minutes', h: 'valanda_valandos_valand\u0105', hh: 'valandos_valand\u0173_valandas', d: 'diena_dienos_dien\u0105', dd: 'dienos_dien\u0173_dienas', M: 'm\u0117nuo_m\u0117nesio_m\u0117nes\u012f', MM: 'm\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius', y: 'metai_met\u0173_metus', yy: 'metai_met\u0173_metus',
    }; function n(e, a, n, t) { return a ? c(n)[0] : t ? c(n)[1] : c(n)[2]; } function t(e) { return e % 10 == 0 || e > 10 && e < 20; } function c(e) { return a[e].split('_'); } function M(e, a, M, s) { const o = `${e} `; return e === 1 ? o + n(0, a, M[0], s) : a ? o + (t(e) ? c(M)[1] : c(M)[0]) : s ? o + c(M)[1] : o + (t(e) ? c(M)[1] : c(M)[2]); }e.defineLocale('lt', {
      months: { format: 'sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio'.split('_'), standalone: 'sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis'.split('_'), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ },
      monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
      weekdays: { format: 'sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f'.split('_'), standalone: 'sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis'.split('_'), isFormat: /dddd HH:mm/ },
      weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161'.split('_'),
      weekdaysMin: 'S_P_A_T_K_Pn_\u0160'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'YYYY [m.] MMMM D [d.]', LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]', LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]', l: 'YYYY-MM-DD', ll: 'YYYY [m.] MMMM D [d.]', lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]', llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
      },
      calendar: {
        sameDay: '[\u0160iandien] LT', nextDay: '[Rytoj] LT', nextWeek: 'dddd LT', lastDay: '[Vakar] LT', lastWeek: '[Pra\u0117jus\u012f] dddd LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'po %s', past: 'prie\u0161 %s', s(e, a, n, t) { return a ? 'kelios sekund\u0117s' : t ? 'keli\u0173 sekund\u017ei\u0173' : 'kelias sekundes'; }, ss: M, m: n, mm: M, h: n, hh: M, d: n, dd: M, M: n, MM: M, y: n, yy: M,
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,
      ordinal(e) { return `${e}-oji`; },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = {
      ss: 'sekundes_sekund\u0113m_sekunde_sekundes'.split('_'), m: 'min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes'.split('_'), mm: 'min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes'.split('_'), h: 'stundas_stund\u0101m_stunda_stundas'.split('_'), hh: 'stundas_stund\u0101m_stunda_stundas'.split('_'), d: 'dienas_dien\u0101m_diena_dienas'.split('_'), dd: 'dienas_dien\u0101m_diena_dienas'.split('_'), M: 'm\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i'.split('_'), MM: 'm\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i'.split('_'), y: 'gada_gadiem_gads_gadi'.split('_'), yy: 'gada_gadiem_gads_gadi'.split('_'),
    }; function n(e, a, n) { return n ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1]; } function t(e, t, c) { return `${e} ${n(a[c], e, t)}`; } function c(e, t, c) { return n(a[c], e, t); }e.defineLocale('lv', {
      months: 'janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena'.split('_'),
      weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
      weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY.', LL: 'YYYY. [gada] D. MMMM', LLL: 'YYYY. [gada] D. MMMM, HH:mm', LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
      },
      calendar: {
        sameDay: '[\u0160odien pulksten] LT', nextDay: '[R\u012bt pulksten] LT', nextWeek: 'dddd [pulksten] LT', lastDay: '[Vakar pulksten] LT', lastWeek: '[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'p\u0113c %s', past: 'pirms %s', s(e, a) { return a ? 'da\u017eas sekundes' : 'da\u017e\u0101m sekund\u0113m'; }, ss: t, m: c, mm: t, h: c, hh: t, d: c, dd: t, M: c, MM: t, y: c, yy: t,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    var a = {
      words: {
        ss: ['sekund', 'sekunda', 'sekundi'], m: ['jedan minut', 'jednog minuta'], mm: ['minut', 'minuta', 'minuta'], h: ['jedan sat', 'jednog sata'], hh: ['sat', 'sata', 'sati'], dd: ['dan', 'dana', 'dana'], MM: ['mjesec', 'mjeseca', 'mjeseci'], yy: ['godina', 'godine', 'godina'],
      },
      correctGrammaticalCase(e, a) { return e === 1 ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]; },
      translate(e, n, t) { const c = a.words[t]; return t.length === 1 ? n ? c[0] : c[1] : `${e} ${a.correctGrammaticalCase(e, c)}`; },
    }; e.defineLocale('me', {
      months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sri._\u010det._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_\u010de_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[danas u] LT', nextDay: '[sjutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedjelju] [u] LT'; case 3: return '[u] [srijedu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[ju\u010de u] LT', lastWeek() { return ['[pro\u0161le] [nedjelje] [u] LT', '[pro\u0161log] [ponedjeljka] [u] LT', '[pro\u0161log] [utorka] [u] LT', '[pro\u0161le] [srijede] [u] LT', '[pro\u0161log] [\u010detvrtka] [u] LT', '[pro\u0161log] [petka] [u] LT', '[pro\u0161le] [subote] [u] LT'][this.day()]; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: 'prije %s', s: 'nekoliko sekundi', ss: a.translate, m: a.translate, mm: a.translate, h: a.translate, hh: a.translate, d: 'dan', dd: a.translate, M: 'mjesec', MM: a.translate, y: 'godinu', yy: a.translate,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('mi', {
      months: 'Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea'.split('_'),
      monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
      monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
      monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
      weekdays: 'R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei'.split('_'),
      weekdaysShort: 'Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101'.split('_'),
      weekdaysMin: 'Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [i] HH:mm', LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
      },
      calendar: {
        sameDay: '[i teie mahana, i] LT', nextDay: '[apopo i] LT', nextWeek: 'dddd [i] LT', lastDay: '[inanahi i] LT', lastWeek: 'dddd [whakamutunga i] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'i roto i %s', past: '%s i mua', s: 'te h\u0113kona ruarua', ss: '%d h\u0113kona', m: 'he meneti', mm: '%d meneti', h: 'te haora', hh: '%d haora', d: 'he ra', dd: '%d ra', M: 'he marama', MM: '%d marama', y: 'he tau', yy: '%d tau',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('mk', {
      months: '\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438'.split('_'),
      monthsShort: '\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a'.split('_'),
      weekdays: '\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430'.split('_'),
      weekdaysShort: '\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431'.split('_'),
      weekdaysMin: '\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'D.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT', nextDay: '[\u0423\u0442\u0440\u0435 \u0432\u043e] LT', nextWeek: '[\u0412\u043e] dddd [\u0432\u043e] LT', lastDay: '[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT', lastWeek() { switch (this.day()) { case 0: case 3: case 6: return '[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT'; case 1: case 2: case 4: case 5: return '[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u043f\u043e\u0441\u043b\u0435 %s', past: '\u043f\u0440\u0435\u0434 %s', s: '\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438', ss: '%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438', m: '\u043c\u0438\u043d\u0443\u0442\u0430', mm: '%d \u043c\u0438\u043d\u0443\u0442\u0438', h: '\u0447\u0430\u0441', hh: '%d \u0447\u0430\u0441\u0430', d: '\u0434\u0435\u043d', dd: '%d \u0434\u0435\u043d\u0430', M: '\u043c\u0435\u0441\u0435\u0446', MM: '%d \u043c\u0435\u0441\u0435\u0446\u0438', y: '\u0433\u043e\u0434\u0438\u043d\u0430', yy: '%d \u0433\u043e\u0434\u0438\u043d\u0438',
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
      ordinal(e) {
        let a = e % 10,
          n = e % 100; return e === 0 ? `${e}-\u0435\u0432` : n === 0 ? `${e}-\u0435\u043d` : n > 10 && n < 20 ? `${e}-\u0442\u0438` : a === 1 ? `${e}-\u0432\u0438` : a === 2 ? `${e}-\u0440\u0438` : a === 7 || a === 8 ? `${e}-\u043c\u0438` : `${e}-\u0442\u0438`;
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ml', {
      months: '\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c'.split('_'),
      monthsShort: '\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a'.split('_'),
      weekdaysShort: '\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f'.split('_'),
      weekdaysMin: '\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36'.split('_'),
      longDateFormat: {
        LT: 'A h:mm -\u0d28\u0d41', LTS: 'A h:mm:ss -\u0d28\u0d41', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm -\u0d28\u0d41', LLLL: 'dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41',
      },
      calendar: {
        sameDay: '[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT', nextDay: '[\u0d28\u0d3e\u0d33\u0d46] LT', nextWeek: 'dddd, LT', lastDay: '[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT', lastWeek: '[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d', past: '%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d', s: '\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e', ss: '%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d', m: '\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d', mm: '%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d', h: '\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c', hh: '%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c', d: '\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02', dd: '%d \u0d26\u0d3f\u0d35\u0d38\u0d02', M: '\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02', MM: '%d \u0d2e\u0d3e\u0d38\u0d02', y: '\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02', yy: '%d \u0d35\u0d7c\u0d37\u0d02',
      },
      meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f' && e >= 4 || a === '\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d' || a === '\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02' ? e + 12 : e; },
      meridiem(e, a, n) { return e < 4 ? '\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f' : e < 12 ? '\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46' : e < 17 ? '\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d' : e < 20 ? '\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02' : '\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f'; },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0967', 2: '\u0968', 3: '\u0969', 4: '\u096a', 5: '\u096b', 6: '\u096c', 7: '\u096d', 8: '\u096e', 9: '\u096f', 0: '\u0966',
      },
      n = {
        '\u0967': '1', '\u0968': '2', '\u0969': '3', '\u096a': '4', '\u096b': '5', '\u096c': '6', '\u096d': '7', '\u096e': '8', '\u096f': '9', '\u0966': '0',
      }; function t(e, a, n, t) { let c = ''; if (a) switch (n) { case 's': c = '\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926'; break; case 'ss': c = '%d \u0938\u0947\u0915\u0902\u0926'; break; case 'm': c = '\u090f\u0915 \u092e\u093f\u0928\u093f\u091f'; break; case 'mm': c = '%d \u092e\u093f\u0928\u093f\u091f\u0947'; break; case 'h': c = '\u090f\u0915 \u0924\u093e\u0938'; break; case 'hh': c = '%d \u0924\u093e\u0938'; break; case 'd': c = '\u090f\u0915 \u0926\u093f\u0935\u0938'; break; case 'dd': c = '%d \u0926\u093f\u0935\u0938'; break; case 'M': c = '\u090f\u0915 \u092e\u0939\u093f\u0928\u093e'; break; case 'MM': c = '%d \u092e\u0939\u093f\u0928\u0947'; break; case 'y': c = '\u090f\u0915 \u0935\u0930\u094d\u0937'; break; case 'yy': c = '%d \u0935\u0930\u094d\u0937\u0947'; } else switch (n) { case 's': c = '\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902'; break; case 'ss': c = '%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902'; break; case 'm': c = '\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e'; break; case 'mm': c = '%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902'; break; case 'h': c = '\u090f\u0915\u093e \u0924\u093e\u0938\u093e'; break; case 'hh': c = '%d \u0924\u093e\u0938\u093e\u0902'; break; case 'd': c = '\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e'; break; case 'dd': c = '%d \u0926\u093f\u0935\u0938\u093e\u0902'; break; case 'M': c = '\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e'; break; case 'MM': c = '%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902'; break; case 'y': c = '\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e'; break; case 'yy': c = '%d \u0935\u0930\u094d\u0937\u093e\u0902'; } return c.replace(/%d/i, e); }e.defineLocale('mr', {
      months: '\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930'.split('_'),
      monthsShort: '\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930'.split('_'),
      weekdaysShort: '\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f'.split('_'),
      weekdaysMin: '\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936'.split('_'),
      longDateFormat: {
        LT: 'A h:mm \u0935\u093e\u091c\u0924\u093e', LTS: 'A h:mm:ss \u0935\u093e\u091c\u0924\u093e', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e', LLLL: 'dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e',
      },
      calendar: {
        sameDay: '[\u0906\u091c] LT', nextDay: '[\u0909\u0926\u094d\u092f\u093e] LT', nextWeek: 'dddd, LT', lastDay: '[\u0915\u093e\u0932] LT', lastWeek: '[\u092e\u093e\u0917\u0940\u0932] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s\u092e\u0927\u094d\u092f\u0947', past: '%s\u092a\u0942\u0930\u094d\u0935\u0940', s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t,
      },
      preparse(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0930\u093e\u0924\u094d\u0930\u0940' ? e < 4 ? e : e + 12 : a === '\u0938\u0915\u093e\u0933\u0940' ? e : a === '\u0926\u0941\u092a\u093e\u0930\u0940' ? e >= 10 ? e : e + 12 : a === '\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? '\u0930\u093e\u0924\u094d\u0930\u0940' : e < 10 ? '\u0938\u0915\u093e\u0933\u0940' : e < 17 ? '\u0926\u0941\u092a\u093e\u0930\u0940' : e < 20 ? '\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940' : '\u0930\u093e\u0924\u094d\u0930\u0940'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ms', {
      months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
        LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === 'pagi' ? e : a === 'tengahari' ? e >= 11 ? e : e + 12 : a === 'petang' || a === 'malam' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam'; },
      calendar: {
        sameDay: '[Hari ini pukul] LT', nextDay: '[Esok pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kelmarin pukul] LT', lastWeek: 'dddd [lepas pukul] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dalam %s', past: '%s yang lepas', s: 'beberapa saat', ss: '%d saat', m: 'seminit', mm: '%d minit', h: 'sejam', hh: '%d jam', d: 'sehari', dd: '%d hari', M: 'sebulan', MM: '%d bulan', y: 'setahun', yy: '%d tahun',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ms-my', {
      months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
      weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
      weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
      weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
        LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
      },
      meridiemParse: /pagi|tengahari|petang|malam/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === 'pagi' ? e : a === 'tengahari' ? e >= 11 ? e : e + 12 : a === 'petang' || a === 'malam' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam'; },
      calendar: {
        sameDay: '[Hari ini pukul] LT', nextDay: '[Esok pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kelmarin pukul] LT', lastWeek: 'dddd [lepas pukul] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dalam %s', past: '%s yang lepas', s: 'beberapa saat', ss: '%d saat', m: 'seminit', mm: '%d minit', h: 'sejam', hh: '%d jam', d: 'sehari', dd: '%d hari', M: 'sebulan', MM: '%d bulan', y: 'setahun', yy: '%d tahun',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('mt', {
      months: 'Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru'.split('_'),
      monthsShort: 'Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b'.split('_'),
      weekdays: 'Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt'.split('_'),
      weekdaysShort: '\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib'.split('_'),
      weekdaysMin: '\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Illum fil-]LT', nextDay: '[G\u0127ada fil-]LT', nextWeek: 'dddd [fil-]LT', lastDay: '[Il-biera\u0127 fil-]LT', lastWeek: 'dddd [li g\u0127adda] [fil-]LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'f\u2019 %s', past: '%s ilu', s: 'ftit sekondi', ss: '%d sekondi', m: 'minuta', mm: '%d minuti', h: 'sieg\u0127a', hh: '%d sieg\u0127at', d: '\u0121urnata', dd: '%d \u0121ranet', M: 'xahar', MM: '%d xhur', y: 'sena', yy: '%d sni',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u1041', 2: '\u1042', 3: '\u1043', 4: '\u1044', 5: '\u1045', 6: '\u1046', 7: '\u1047', 8: '\u1048', 9: '\u1049', 0: '\u1040',
      },
      n = {
        '\u1041': '1', '\u1042': '2', '\u1043': '3', '\u1044': '4', '\u1045': '5', '\u1046': '6', '\u1047': '7', '\u1048': '8', '\u1049': '9', '\u1040': '0',
      }; e.defineLocale('my', {
      months: '\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c'.split('_'),
      monthsShort: '\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e'.split('_'),
      weekdays: '\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031'.split('_'),
      weekdaysShort: '\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031'.split('_'),
      weekdaysMin: '\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]', nextDay: '[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]', nextWeek: 'dddd LT [\u1019\u103e\u102c]', lastDay: '[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]', lastWeek: '[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]', sameElse: 'L',
      },
      relativeTime: {
        future: '\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c', past: '\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000', s: '\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a', ss: '%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a', m: '\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a', mm: '%d \u1019\u102d\u1014\u1005\u103a', h: '\u1010\u1005\u103a\u1014\u102c\u101b\u102e', hh: '%d \u1014\u102c\u101b\u102e', d: '\u1010\u1005\u103a\u101b\u1000\u103a', dd: '%d \u101b\u1000\u103a', M: '\u1010\u1005\u103a\u101c', MM: '%d \u101c', y: '\u1010\u1005\u103a\u1014\u103e\u1005\u103a', yy: '%d \u1014\u103e\u1005\u103a',
      },
      preparse(e) { return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('nb', {
      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
      monthsParseExact: !0,
      weekdays: 's\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag'.split('_'),
      weekdaysShort: 's\xf8._ma._ti._on._to._fr._l\xf8.'.split('_'),
      weekdaysMin: 's\xf8_ma_ti_on_to_fr_l\xf8'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY [kl.] HH:mm', LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
      },
      calendar: {
        sameDay: '[i dag kl.] LT', nextDay: '[i morgen kl.] LT', nextWeek: 'dddd [kl.] LT', lastDay: '[i g\xe5r kl.] LT', lastWeek: '[forrige] dddd [kl.] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'om %s', past: '%s siden', s: 'noen sekunder', ss: '%d sekunder', m: 'ett minutt', mm: '%d minutter', h: 'en time', hh: '%d timer', d: 'en dag', dd: '%d dager', M: 'en m\xe5ned', MM: '%d m\xe5neder', y: 'ett \xe5r', yy: '%d \xe5r',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0967', 2: '\u0968', 3: '\u0969', 4: '\u096a', 5: '\u096b', 6: '\u096c', 7: '\u096d', 8: '\u096e', 9: '\u096f', 0: '\u0966',
      },
      n = {
        '\u0967': '1', '\u0968': '2', '\u0969': '3', '\u096a': '4', '\u096b': '5', '\u096c': '6', '\u096d': '7', '\u096e': '8', '\u096f': '9', '\u0966': '0',
      }; e.defineLocale('ne', {
      months: '\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930'.split('_'),
      monthsShort: '\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930'.split('_'),
      weekdaysShort: '\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.'.split('_'),
      weekdaysMin: '\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'A\u0915\u094b h:mm \u092c\u091c\u0947', LTS: 'A\u0915\u094b h:mm:ss \u092c\u091c\u0947', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947', LLLL: 'dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947',
      },
      preparse(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0930\u093e\u0924\u093f' ? e < 4 ? e : e + 12 : a === '\u092c\u093f\u0939\u093e\u0928' ? e : a === '\u0926\u093f\u0909\u0901\u0938\u094b' ? e >= 10 ? e : e + 12 : a === '\u0938\u093e\u0901\u091d' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 3 ? '\u0930\u093e\u0924\u093f' : e < 12 ? '\u092c\u093f\u0939\u093e\u0928' : e < 16 ? '\u0926\u093f\u0909\u0901\u0938\u094b' : e < 20 ? '\u0938\u093e\u0901\u091d' : '\u0930\u093e\u0924\u093f'; },
      calendar: {
        sameDay: '[\u0906\u091c] LT', nextDay: '[\u092d\u094b\u0932\u093f] LT', nextWeek: '[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT', lastDay: '[\u0939\u093f\u091c\u094b] LT', lastWeek: '[\u0917\u090f\u0915\u094b] dddd[,] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s\u092e\u093e', past: '%s \u0905\u0917\u093e\u0921\u093f', s: '\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923', ss: '%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921', m: '\u090f\u0915 \u092e\u093f\u0928\u0947\u091f', mm: '%d \u092e\u093f\u0928\u0947\u091f', h: '\u090f\u0915 \u0918\u0923\u094d\u091f\u093e', hh: '%d \u0918\u0923\u094d\u091f\u093e', d: '\u090f\u0915 \u0926\u093f\u0928', dd: '%d \u0926\u093f\u0928', M: '\u090f\u0915 \u092e\u0939\u093f\u0928\u093e', MM: '%d \u092e\u0939\u093f\u0928\u093e', y: '\u090f\u0915 \u092c\u0930\u094d\u0937', yy: '%d \u092c\u0930\u094d\u0937',
      },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      c = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; e.defineLocale('nl', {
      months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
      monthsShort(e, t) { return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsRegex: c,
      monthsShortRegex: c,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: t,
      longMonthsParse: t,
      shortMonthsParse: t,
      weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[vandaag om] LT', nextDay: '[morgen om] LT', nextWeek: 'dddd [om] LT', lastDay: '[gisteren om] LT', lastWeek: '[afgelopen] dddd [om] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'over %s', past: '%s geleden', s: 'een paar seconden', ss: '%d seconden', m: '\xe9\xe9n minuut', mm: '%d minuten', h: '\xe9\xe9n uur', hh: '%d uur', d: '\xe9\xe9n dag', dd: '%d dagen', M: '\xe9\xe9n maand', MM: '%d maanden', y: '\xe9\xe9n jaar', yy: '%d jaar',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
      n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      t = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      c = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; e.defineLocale('nl-be', {
      months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
      monthsShort(e, t) { return e ? /-MMM-/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsRegex: c,
      monthsShortRegex: c,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: t,
      longMonthsParse: t,
      shortMonthsParse: t,
      weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[vandaag om] LT', nextDay: '[morgen om] LT', nextWeek: 'dddd [om] LT', lastDay: '[gisteren om] LT', lastWeek: '[afgelopen] dddd [om] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'over %s', past: '%s geleden', s: 'een paar seconden', ss: '%d seconden', m: '\xe9\xe9n minuut', mm: '%d minuten', h: '\xe9\xe9n uur', hh: '%d uur', d: '\xe9\xe9n dag', dd: '%d dagen', M: '\xe9\xe9n maand', MM: '%d maanden', y: '\xe9\xe9n jaar', yy: '%d jaar',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('nn', {
      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
      weekdays: 'sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
      weekdaysShort: 'sun_m\xe5n_tys_ons_tor_fre_lau'.split('_'),
      weekdaysMin: 'su_m\xe5_ty_on_to_fr_l\xf8'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY [kl.] H:mm', LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
      },
      calendar: {
        sameDay: '[I dag klokka] LT', nextDay: '[I morgon klokka] LT', nextWeek: 'dddd [klokka] LT', lastDay: '[I g\xe5r klokka] LT', lastWeek: '[F\xf8reg\xe5ande] dddd [klokka] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'om %s', past: '%s sidan', s: 'nokre sekund', ss: '%d sekund', m: 'eit minutt', mm: '%d minutt', h: 'ein time', hh: '%d timar', d: 'ein dag', dd: '%d dagar', M: 'ein m\xe5nad', MM: '%d m\xe5nader', y: 'eit \xe5r', yy: '%d \xe5r',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0a67', 2: '\u0a68', 3: '\u0a69', 4: '\u0a6a', 5: '\u0a6b', 6: '\u0a6c', 7: '\u0a6d', 8: '\u0a6e', 9: '\u0a6f', 0: '\u0a66',
      },
      n = {
        '\u0a67': '1', '\u0a68': '2', '\u0a69': '3', '\u0a6a': '4', '\u0a6b': '5', '\u0a6c': '6', '\u0a6d': '7', '\u0a6e': '8', '\u0a6f': '9', '\u0a66': '0',
      }; e.defineLocale('pa-in', {
      months: '\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30'.split('_'),
      monthsShort: '\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30'.split('_'),
      weekdays: '\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30'.split('_'),
      weekdaysShort: '\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40'.split('_'),
      weekdaysMin: '\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40'.split('_'),
      longDateFormat: {
        LT: 'A h:mm \u0a35\u0a1c\u0a47', LTS: 'A h:mm:ss \u0a35\u0a1c\u0a47', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47', LLLL: 'dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47',
      },
      calendar: {
        sameDay: '[\u0a05\u0a1c] LT', nextDay: '[\u0a15\u0a32] LT', nextWeek: 'dddd, LT', lastDay: '[\u0a15\u0a32] LT', lastWeek: '[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0a35\u0a3f\u0a71\u0a1a', past: '%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47', s: '\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f', ss: '%d \u0a38\u0a15\u0a3f\u0a70\u0a1f', m: '\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f', mm: '%d \u0a2e\u0a3f\u0a70\u0a1f', h: '\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e', hh: '%d \u0a18\u0a70\u0a1f\u0a47', d: '\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28', dd: '%d \u0a26\u0a3f\u0a28', M: '\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e', MM: '%d \u0a2e\u0a39\u0a40\u0a28\u0a47', y: '\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32', yy: '%d \u0a38\u0a3e\u0a32',
      },
      preparse(e) { return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0a30\u0a3e\u0a24' ? e < 4 ? e : e + 12 : a === '\u0a38\u0a35\u0a47\u0a30' ? e : a === '\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30' ? e >= 10 ? e : e + 12 : a === '\u0a38\u0a3c\u0a3e\u0a2e' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? '\u0a30\u0a3e\u0a24' : e < 10 ? '\u0a38\u0a35\u0a47\u0a30' : e < 17 ? '\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30' : e < 20 ? '\u0a38\u0a3c\u0a3e\u0a2e' : '\u0a30\u0a3e\u0a24'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144'.split('_'),
      n = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia'.split('_'); function t(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1; } function c(e, a, n) { const c = `${e} `; switch (n) { case 'ss': return c + (t(e) ? 'sekundy' : 'sekund'); case 'm': return a ? 'minuta' : 'minut\u0119'; case 'mm': return c + (t(e) ? 'minuty' : 'minut'); case 'h': return a ? 'godzina' : 'godzin\u0119'; case 'hh': return c + (t(e) ? 'godziny' : 'godzin'); case 'MM': return c + (t(e) ? 'miesi\u0105ce' : 'miesi\u0119cy'); case 'yy': return c + (t(e) ? 'lata' : 'lat'); } }e.defineLocale('pl', {
      months(e, t) { return e ? t === '' ? `(${n[e.month()]}|${a[e.month()]})` : /D MMMM/.test(t) ? n[e.month()] : a[e.month()] : a; },
      monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru'.split('_'),
      weekdays: 'niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota'.split('_'),
      weekdaysShort: 'ndz_pon_wt_\u015br_czw_pt_sob'.split('_'),
      weekdaysMin: 'Nd_Pn_Wt_\u015ar_Cz_Pt_So'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Dzi\u015b o] LT', nextDay: '[Jutro o] LT', nextWeek() { switch (this.day()) { case 0: return '[W niedziel\u0119 o] LT'; case 2: return '[We wtorek o] LT'; case 3: return '[W \u015brod\u0119 o] LT'; case 6: return '[W sobot\u0119 o] LT'; default: return '[W] dddd [o] LT'; } }, lastDay: '[Wczoraj o] LT', lastWeek() { switch (this.day()) { case 0: return '[W zesz\u0142\u0105 niedziel\u0119 o] LT'; case 3: return '[W zesz\u0142\u0105 \u015brod\u0119 o] LT'; case 6: return '[W zesz\u0142\u0105 sobot\u0119 o] LT'; default: return '[W zesz\u0142y] dddd [o] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: '%s temu', s: 'kilka sekund', ss: c, m: c, mm: c, h: c, hh: c, d: '1 dzie\u0144', dd: '%d dni', M: 'miesi\u0105c', MM: c, y: 'rok', yy: c,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('pt', {
      months: 'janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays: 'Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado'.split('_'),
      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b'.split('_'),
      weekdaysMin: 'Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY HH:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Hoje \xe0s] LT', nextDay: '[Amanh\xe3 \xe0s] LT', nextWeek: 'dddd [\xe0s] LT', lastDay: '[Ontem \xe0s] LT', lastWeek() { return this.day() === 0 || this.day() === 6 ? '[\xdaltimo] dddd [\xe0s] LT' : '[\xdaltima] dddd [\xe0s] LT'; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'em %s', past: 'h\xe1 %s', s: 'segundos', ss: '%d segundos', m: 'um minuto', mm: '%d minutos', h: 'uma hora', hh: '%d horas', d: 'um dia', dd: '%d dias', M: 'um m\xeas', MM: '%d meses', y: 'um ano', yy: '%d anos',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('pt-br', {
      months: 'janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
      monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
      weekdays: 'Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado'.split('_'),
      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b'.split('_'),
      weekdaysMin: 'Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY [\xe0s] HH:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm',
      },
      calendar: {
        sameDay: '[Hoje \xe0s] LT', nextDay: '[Amanh\xe3 \xe0s] LT', nextWeek: 'dddd [\xe0s] LT', lastDay: '[Ontem \xe0s] LT', lastWeek() { return this.day() === 0 || this.day() === 6 ? '[\xdaltimo] dddd [\xe0s] LT' : '[\xdaltima] dddd [\xe0s] LT'; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'em %s', past: '%s atr\xe1s', s: 'poucos segundos', ss: '%d segundos', m: 'um minuto', mm: '%d minutos', h: 'uma hora', hh: '%d horas', d: 'um dia', dd: '%d dias', M: 'um m\xeas', MM: '%d meses', y: 'um ano', yy: '%d anos',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\xba/,
      ordinal: '%d\xba',
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) {
      let t = ' '; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (t = ' de '), e + t + {
        ss: 'secunde', mm: 'minute', hh: 'ore', dd: 'zile', MM: 'luni', yy: 'ani',
      }[n];
    }e.defineLocale('ro', {
      months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
      monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103'.split('_'),
      weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m'.split('_'),
      weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_S\xe2'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[azi la] LT', nextDay: '[m\xe2ine la] LT', nextWeek: 'dddd [la] LT', lastDay: '[ieri la] LT', lastWeek: '[fosta] dddd [la] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'peste %s', past: '%s \xeen urm\u0103', s: 'c\xe2teva secunde', ss: a, m: 'un minut', mm: a, h: 'o or\u0103', hh: a, d: 'o zi', dd: a, M: 'o lun\u0103', MM: a, y: 'un an', yy: a,
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) {
      let t,
        c; return n === 'm' ? a ? '\u043c\u0438\u043d\u0443\u0442\u0430' : '\u043c\u0438\u043d\u0443\u0442\u0443' : `${e} ${t = +e, c = {
        ss: a ? '\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434' : '\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434', mm: a ? '\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442' : '\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442', hh: '\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432', dd: '\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439', MM: '\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432', yy: '\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442',
      }[n].split('_'), t % 10 == 1 && t % 100 != 11 ? c[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? c[1] : c[2]}`;
    } const n = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i]; e.defineLocale('ru', {
      months: { format: '\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f'.split('_'), standalone: '\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c'.split('_') },
      monthsShort: { format: '\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.'.split('_'), standalone: '\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.'.split('_') },
      weekdays: { standalone: '\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430'.split('_'), format: '\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443'.split('_'), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/ },
      weekdaysShort: '\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431'.split('_'),
      weekdaysMin: '\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431'.split('_'),
      monthsParse: n,
      longMonthsParse: n,
      shortMonthsParse: n,
      monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
      monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
      monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
      monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY \u0433.', LLL: 'D MMMM YYYY \u0433., H:mm', LLLL: 'dddd, D MMMM YYYY \u0433., H:mm',
      },
      calendar: {
        sameDay: '[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT', nextDay: '[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT', lastDay: '[\u0412\u0447\u0435\u0440\u0430 \u0432] LT', nextWeek(e) { if (e.week() === this.week()) return this.day() === 2 ? '[\u0412\u043e] dddd [\u0432] LT' : '[\u0412] dddd [\u0432] LT'; switch (this.day()) { case 0: return '[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd [\u0432] LT'; case 1: case 2: case 4: return '[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd [\u0432] LT'; case 3: case 5: case 6: return '[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd [\u0432] LT'; } }, lastWeek(e) { if (e.week() === this.week()) return this.day() === 2 ? '[\u0412\u043e] dddd [\u0432] LT' : '[\u0412] dddd [\u0432] LT'; switch (this.day()) { case 0: return '[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT'; case 1: case 2: case 4: return '[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT'; case 3: case 5: case 6: return '[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u0447\u0435\u0440\u0435\u0437 %s', past: '%s \u043d\u0430\u0437\u0430\u0434', s: '\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434', ss: a, m: a, mm: a, h: '\u0447\u0430\u0441', hh: a, d: '\u0434\u0435\u043d\u044c', dd: a, M: '\u043c\u0435\u0441\u044f\u0446', MM: a, y: '\u0433\u043e\u0434', yy: a,
      },
      meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
      isPM(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e); },
      meridiem(e, a, n) { return e < 4 ? '\u043d\u043e\u0447\u0438' : e < 12 ? '\u0443\u0442\u0440\u0430' : e < 17 ? '\u0434\u043d\u044f' : '\u0432\u0435\u0447\u0435\u0440\u0430'; },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
      ordinal(e, a) { switch (a) { case 'M': case 'd': case 'DDD': return `${e}-\u0439`; case 'D': return `${e}-\u0433\u043e`; case 'w': case 'W': return `${e}-\u044f`; default: return e; } },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = ['\u062c\u0646\u0648\u0631\u064a', '\u0641\u064a\u0628\u0631\u0648\u0631\u064a', '\u0645\u0627\u0631\u0686', '\u0627\u067e\u0631\u064a\u0644', '\u0645\u0626\u064a', '\u062c\u0648\u0646', '\u062c\u0648\u0644\u0627\u0621\u0650', '\u0622\u06af\u0633\u067d', '\u0633\u064a\u067e\u067d\u0645\u0628\u0631', '\u0622\u06aa\u067d\u0648\u0628\u0631', '\u0646\u0648\u0645\u0628\u0631', '\u068a\u0633\u0645\u0628\u0631'],
      n = ['\u0622\u0686\u0631', '\u0633\u0648\u0645\u0631', '\u0627\u06b1\u0627\u0631\u0648', '\u0627\u0631\u0628\u0639', '\u062e\u0645\u064a\u0633', '\u062c\u0645\u0639', '\u0687\u0646\u0687\u0631']; e.defineLocale('sd', {
      months: a,
      monthsShort: a,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: n,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd\u060c D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
      isPM(e) { return e === '\u0634\u0627\u0645'; },
      meridiem(e, a, n) { return e < 12 ? '\u0635\u0628\u062d' : '\u0634\u0627\u0645'; },
      calendar: {
        sameDay: '[\u0627\u0684] LT', nextDay: '[\u0633\u0680\u0627\u06bb\u064a] LT', nextWeek: 'dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT', lastDay: '[\u06aa\u0627\u0644\u0647\u0647] LT', lastWeek: '[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u067e\u0648\u0621', past: '%s \u0627\u06b3', s: '\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a', ss: '%d \u0633\u064a\u06aa\u0646\u068a', m: '\u0647\u06aa \u0645\u0646\u067d', mm: '%d \u0645\u0646\u067d', h: '\u0647\u06aa \u06aa\u0644\u0627\u06aa', hh: '%d \u06aa\u0644\u0627\u06aa', d: '\u0647\u06aa \u068f\u064a\u0646\u0647\u0646', dd: '%d \u068f\u064a\u0646\u0647\u0646', M: '\u0647\u06aa \u0645\u0647\u064a\u0646\u0648', MM: '%d \u0645\u0647\u064a\u0646\u0627', y: '\u0647\u06aa \u0633\u0627\u0644', yy: '%d \u0633\u0627\u0644',
      },
      preparse(e) { return e.replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/,/g, '\u060c'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('se', {
      months: 'o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu'.split('_'),
      monthsShort: 'o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov'.split('_'),
      weekdays: 'sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat'.split('_'),
      weekdaysShort: 'sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v'.split('_'),
      weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'MMMM D. [b.] YYYY', LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm', LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
      },
      calendar: {
        sameDay: '[otne ti] LT', nextDay: '[ihttin ti] LT', nextWeek: 'dddd [ti] LT', lastDay: '[ikte ti] LT', lastWeek: '[ovddit] dddd [ti] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s gea\u017ees', past: 'ma\u014bit %s', s: 'moadde sekunddat', ss: '%d sekunddat', m: 'okta minuhta', mm: '%d minuhtat', h: 'okta diimmu', hh: '%d diimmut', d: 'okta beaivi', dd: '%d beaivvit', M: 'okta m\xe1nnu', MM: '%d m\xe1nut', y: 'okta jahki', yy: '%d jagit',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('si', {
      months: '\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca'.split('_'),
      monthsShort: '\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0'.split('_'),
      weekdays: '\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf'.split('_'),
      weekdaysShort: '\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1'.split('_'),
      weekdaysMin: '\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'a h:mm', LTS: 'a h:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY MMMM D', LLL: 'YYYY MMMM D, a h:mm', LLLL: 'YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss',
      },
      calendar: {
        sameDay: '[\u0d85\u0daf] LT[\u0da7]', nextDay: '[\u0dc4\u0dd9\u0da7] LT[\u0da7]', nextWeek: 'dddd LT[\u0da7]', lastDay: '[\u0d8a\u0dba\u0dda] LT[\u0da7]', lastWeek: '[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]', sameElse: 'L',
      },
      relativeTime: {
        future: '%s\u0d9a\u0dd2\u0db1\u0dca', past: '%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb', s: '\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba', ss: '\u0dad\u0dad\u0dca\u0db4\u0dbb %d', m: '\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0', mm: '\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d', h: '\u0db4\u0dd0\u0dba', hh: '\u0db4\u0dd0\u0dba %d', d: '\u0daf\u0dd2\u0db1\u0dba', dd: '\u0daf\u0dd2\u0db1 %d', M: '\u0db8\u0dcf\u0dc3\u0dba', MM: '\u0db8\u0dcf\u0dc3 %d', y: '\u0dc0\u0dc3\u0dbb', yy: '\u0dc0\u0dc3\u0dbb %d',
      },
      dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
      ordinal(e) { return `${e} \u0dc0\u0dd0\u0db1\u0dd2`; },
      meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
      isPM(e) { return e === '\u0db4.\u0dc0.' || e === '\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4'; },
      meridiem(e, a, n) { return e > 11 ? n ? '\u0db4.\u0dc0.' : '\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4' : n ? '\u0db4\u0dd9.\u0dc0.' : '\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4'; },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = 'janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december'.split('_'),
      n = 'jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec'.split('_'); function t(e) { return e > 1 && e < 5; } function c(e, a, n, c) { const M = `${e} `; switch (n) { case 's': return a || c ? 'p\xe1r sek\xfand' : 'p\xe1r sekundami'; case 'ss': return a || c ? M + (t(e) ? 'sekundy' : 'sek\xfand') : `${M}sekundami`; case 'm': return a ? 'min\xfata' : c ? 'min\xfatu' : 'min\xfatou'; case 'mm': return a || c ? M + (t(e) ? 'min\xfaty' : 'min\xfat') : `${M}min\xfatami`; case 'h': return a ? 'hodina' : c ? 'hodinu' : 'hodinou'; case 'hh': return a || c ? M + (t(e) ? 'hodiny' : 'hod\xedn') : `${M}hodinami`; case 'd': return a || c ? 'de\u0148' : 'd\u0148om'; case 'dd': return a || c ? M + (t(e) ? 'dni' : 'dn\xed') : `${M}d\u0148ami`; case 'M': return a || c ? 'mesiac' : 'mesiacom'; case 'MM': return a || c ? M + (t(e) ? 'mesiace' : 'mesiacov') : `${M}mesiacmi`; case 'y': return a || c ? 'rok' : 'rokom'; case 'yy': return a || c ? M + (t(e) ? 'roky' : 'rokov') : `${M}rokmi`; } }e.defineLocale('sk', {
      months: a,
      monthsShort: n,
      weekdays: 'nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota'.split('_'),
      weekdaysShort: 'ne_po_ut_st_\u0161t_pi_so'.split('_'),
      weekdaysMin: 'ne_po_ut_st_\u0161t_pi_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[dnes o] LT', nextDay: '[zajtra o] LT', nextWeek() { switch (this.day()) { case 0: return '[v nede\u013eu o] LT'; case 1: case 2: return '[v] dddd [o] LT'; case 3: return '[v stredu o] LT'; case 4: return '[vo \u0161tvrtok o] LT'; case 5: return '[v piatok o] LT'; case 6: return '[v sobotu o] LT'; } }, lastDay: '[v\u010dera o] LT', lastWeek() { switch (this.day()) { case 0: return '[minul\xfa nede\u013eu o] LT'; case 1: case 2: return '[minul\xfd] dddd [o] LT'; case 3: return '[minul\xfa stredu o] LT'; case 4: case 5: return '[minul\xfd] dddd [o] LT'; case 6: return '[minul\xfa sobotu o] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: 'pred %s', s: c, ss: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) { let c = `${e} `; switch (n) { case 's': return a || t ? 'nekaj sekund' : 'nekaj sekundami'; case 'ss': return c += e === 1 ? a ? 'sekundo' : 'sekundi' : e === 2 ? a || t ? 'sekundi' : 'sekundah' : e < 5 ? a || t ? 'sekunde' : 'sekundah' : 'sekund'; case 'm': return a ? 'ena minuta' : 'eno minuto'; case 'mm': return c += e === 1 ? a ? 'minuta' : 'minuto' : e === 2 ? a || t ? 'minuti' : 'minutama' : e < 5 ? a || t ? 'minute' : 'minutami' : a || t ? 'minut' : 'minutami'; case 'h': return a ? 'ena ura' : 'eno uro'; case 'hh': return c += e === 1 ? a ? 'ura' : 'uro' : e === 2 ? a || t ? 'uri' : 'urama' : e < 5 ? a || t ? 'ure' : 'urami' : a || t ? 'ur' : 'urami'; case 'd': return a || t ? 'en dan' : 'enim dnem'; case 'dd': return c += e === 1 ? a || t ? 'dan' : 'dnem' : e === 2 ? a || t ? 'dni' : 'dnevoma' : a || t ? 'dni' : 'dnevi'; case 'M': return a || t ? 'en mesec' : 'enim mesecem'; case 'MM': return c += e === 1 ? a || t ? 'mesec' : 'mesecem' : e === 2 ? a || t ? 'meseca' : 'mesecema' : e < 5 ? a || t ? 'mesece' : 'meseci' : a || t ? 'mesecev' : 'meseci'; case 'y': return a || t ? 'eno leto' : 'enim letom'; case 'yy': return c += e === 1 ? a || t ? 'leto' : 'letom' : e === 2 ? a || t ? 'leti' : 'letoma' : e < 5 ? a || t ? 'leta' : 'leti' : a || t ? 'let' : 'leti'; } }e.defineLocale('sl', {
      months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota'.split('_'),
      weekdaysShort: 'ned._pon._tor._sre._\u010det._pet._sob.'.split('_'),
      weekdaysMin: 'ne_po_to_sr_\u010de_pe_so'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[danes ob] LT', nextDay: '[jutri ob] LT', nextWeek() { switch (this.day()) { case 0: return '[v] [nedeljo] [ob] LT'; case 3: return '[v] [sredo] [ob] LT'; case 6: return '[v] [soboto] [ob] LT'; case 1: case 2: case 4: case 5: return '[v] dddd [ob] LT'; } }, lastDay: '[v\u010deraj ob] LT', lastWeek() { switch (this.day()) { case 0: return '[prej\u0161njo] [nedeljo] [ob] LT'; case 3: return '[prej\u0161njo] [sredo] [ob] LT'; case 6: return '[prej\u0161njo] [soboto] [ob] LT'; case 1: case 2: case 4: case 5: return '[prej\u0161nji] dddd [ob] LT'; } }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u010dez %s', past: 'pred %s', s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('sq', {
      months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor'.split('_'),
      monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj'.split('_'),
      weekdays: 'E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb'.split('_'),
      weekdaysShort: 'Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht'.split('_'),
      weekdaysMin: 'D_H_Ma_M\xeb_E_P_Sh'.split('_'),
      weekdaysParseExact: !0,
      meridiemParse: /PD|MD/,
      isPM(e) { return e.charAt(0) === 'M'; },
      meridiem(e, a, n) { return e < 12 ? 'PD' : 'MD'; },
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Sot n\xeb] LT', nextDay: '[Nes\xebr n\xeb] LT', nextWeek: 'dddd [n\xeb] LT', lastDay: '[Dje n\xeb] LT', lastWeek: 'dddd [e kaluar n\xeb] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'n\xeb %s', past: '%s m\xeb par\xeb', s: 'disa sekonda', ss: '%d sekonda', m: 'nj\xeb minut\xeb', mm: '%d minuta', h: 'nj\xeb or\xeb', hh: '%d or\xeb', d: 'nj\xeb dit\xeb', dd: '%d dit\xeb', M: 'nj\xeb muaj', MM: '%d muaj', y: 'nj\xeb vit', yy: '%d vite',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    var a = {
      words: {
        ss: ['sekunda', 'sekunde', 'sekundi'], m: ['jedan minut', 'jedne minute'], mm: ['minut', 'minute', 'minuta'], h: ['jedan sat', 'jednog sata'], hh: ['sat', 'sata', 'sati'], dd: ['dan', 'dana', 'dana'], MM: ['mesec', 'meseca', 'meseci'], yy: ['godina', 'godine', 'godina'],
      },
      correctGrammaticalCase(e, a) { return e === 1 ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]; },
      translate(e, n, t) { const c = a.words[t]; return t.length === 1 ? n ? c[0] : c[1] : `${e} ${a.correctGrammaticalCase(e, c)}`; },
    }; e.defineLocale('sr', {
      months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: !0,
      weekdays: 'nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota'.split('_'),
      weekdaysShort: 'ned._pon._uto._sre._\u010det._pet._sub.'.split('_'),
      weekdaysMin: 'ne_po_ut_sr_\u010de_pe_su'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[danas u] LT', nextDay: '[sutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedelju] [u] LT'; case 3: return '[u] [sredu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[ju\u010de u] LT', lastWeek() { return ['[pro\u0161le] [nedelje] [u] LT', '[pro\u0161log] [ponedeljka] [u] LT', '[pro\u0161log] [utorka] [u] LT', '[pro\u0161le] [srede] [u] LT', '[pro\u0161log] [\u010detvrtka] [u] LT', '[pro\u0161log] [petka] [u] LT', '[pro\u0161le] [subote] [u] LT'][this.day()]; }, sameElse: 'L',
      },
      relativeTime: {
        future: 'za %s', past: 'pre %s', s: 'nekoliko sekundi', ss: a.translate, m: a.translate, mm: a.translate, h: a.translate, hh: a.translate, d: 'dan', dd: a.translate, M: 'mesec', MM: a.translate, y: 'godinu', yy: a.translate,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    var a = {
      words: {
        ss: ['\u0441\u0435\u043a\u0443\u043d\u0434\u0430', '\u0441\u0435\u043a\u0443\u043d\u0434\u0435', '\u0441\u0435\u043a\u0443\u043d\u0434\u0438'], m: ['\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442', '\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435'], mm: ['\u043c\u0438\u043d\u0443\u0442', '\u043c\u0438\u043d\u0443\u0442\u0435', '\u043c\u0438\u043d\u0443\u0442\u0430'], h: ['\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442', '\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430'], hh: ['\u0441\u0430\u0442', '\u0441\u0430\u0442\u0430', '\u0441\u0430\u0442\u0438'], dd: ['\u0434\u0430\u043d', '\u0434\u0430\u043d\u0430', '\u0434\u0430\u043d\u0430'], MM: ['\u043c\u0435\u0441\u0435\u0446', '\u043c\u0435\u0441\u0435\u0446\u0430', '\u043c\u0435\u0441\u0435\u0446\u0438'], yy: ['\u0433\u043e\u0434\u0438\u043d\u0430', '\u0433\u043e\u0434\u0438\u043d\u0435', '\u0433\u043e\u0434\u0438\u043d\u0430'],
      },
      correctGrammaticalCase(e, a) { return e === 1 ? a[0] : e >= 2 && e <= 4 ? a[1] : a[2]; },
      translate(e, n, t) { const c = a.words[t]; return t.length === 1 ? n ? c[0] : c[1] : `${e} ${a.correctGrammaticalCase(e, c)}`; },
    }; e.defineLocale('sr-cyrl', {
      months: '\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440'.split('_'),
      monthsShort: '\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430'.split('_'),
      weekdaysShort: '\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.'.split('_'),
      weekdaysMin: '\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
      },
      calendar: {
        sameDay: '[\u0434\u0430\u043d\u0430\u0441 \u0443] LT', nextDay: '[\u0441\u0443\u0442\u0440\u0430 \u0443] LT', nextWeek() { switch (this.day()) { case 0: return '[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT'; case 3: return '[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT'; case 6: return '[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT'; case 1: case 2: case 4: case 5: return '[\u0443] dddd [\u0443] LT'; } }, lastDay: '[\u0458\u0443\u0447\u0435 \u0443] LT', lastWeek() { return ['[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT', '[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT', '[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT', '[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT', '[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT', '[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT', '[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT'][this.day()]; }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u0437\u0430 %s', past: '\u043f\u0440\u0435 %s', s: '\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438', ss: a.translate, m: a.translate, mm: a.translate, h: a.translate, hh: a.translate, d: '\u0434\u0430\u043d', dd: a.translate, M: '\u043c\u0435\u0441\u0435\u0446', MM: a.translate, y: '\u0433\u043e\u0434\u0438\u043d\u0443', yy: a.translate,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('ss', {
      months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
      monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
      weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
      weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
      weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
        sameDay: '[Namuhla nga] LT', nextDay: '[Kusasa nga] LT', nextWeek: 'dddd [nga] LT', lastDay: '[Itolo nga] LT', lastWeek: 'dddd [leliphelile] [nga] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'nga %s', past: 'wenteka nga %s', s: 'emizuzwana lomcane', ss: '%d mzuzwana', m: 'umzuzu', mm: '%d emizuzu', h: 'lihora', hh: '%d emahora', d: 'lilanga', dd: '%d emalanga', M: 'inyanga', MM: '%d tinyanga', y: 'umnyaka', yy: '%d iminyaka',
      },
      meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
      meridiem(e, a, n) { return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku'; },
      meridiemHour(e, a) { return e === 12 && (e = 0), a === 'ekuseni' ? e : a === 'emini' ? e >= 11 ? e : e + 12 : a === 'entsambama' || a === 'ebusuku' ? e === 0 ? 0 : e + 12 : void 0; },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: '%d',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('sv', {
      months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 's\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag'.split('_'),
      weekdaysShort: 's\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r'.split('_'),
      weekdaysMin: 's\xf6_m\xe5_ti_on_to_fr_l\xf6'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [kl.] HH:mm', LLLL: 'dddd D MMMM YYYY [kl.] HH:mm', lll: 'D MMM YYYY HH:mm', llll: 'ddd D MMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Idag] LT', nextDay: '[Imorgon] LT', lastDay: '[Ig\xe5r] LT', nextWeek: '[P\xe5] dddd LT', lastWeek: '[I] dddd[s] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'om %s', past: 'f\xf6r %s sedan', s: 'n\xe5gra sekunder', ss: '%d sekunder', m: 'en minut', mm: '%d minuter', h: 'en timme', hh: '%d timmar', d: 'en dag', dd: '%d dagar', M: 'en m\xe5nad', MM: '%d m\xe5nader', y: 'ett \xe5r', yy: '%d \xe5r',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'e' : a === 1 ? 'a' : a === 2 ? 'a' : 'e'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('sw', {
      months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
      monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
      weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
      weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[leo saa] LT', nextDay: '[kesho saa] LT', nextWeek: '[wiki ijayo] dddd [saat] LT', lastDay: '[jana] LT', lastWeek: '[wiki iliyopita] dddd [saat] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s baadaye', past: 'tokea %s', s: 'hivi punde', ss: 'sekunde %d', m: 'dakika moja', mm: 'dakika %d', h: 'saa limoja', hh: 'masaa %d', d: 'siku moja', dd: 'masiku %d', M: 'mwezi mmoja', MM: 'miezi %d', y: 'mwaka mmoja', yy: 'miaka %d',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = {
        1: '\u0be7', 2: '\u0be8', 3: '\u0be9', 4: '\u0bea', 5: '\u0beb', 6: '\u0bec', 7: '\u0bed', 8: '\u0bee', 9: '\u0bef', 0: '\u0be6',
      },
      n = {
        '\u0be7': '1', '\u0be8': '2', '\u0be9': '3', '\u0bea': '4', '\u0beb': '5', '\u0bec': '6', '\u0bed': '7', '\u0bee': '8', '\u0bef': '9', '\u0be6': '0',
      }; e.defineLocale('ta', {
      months: '\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd'.split('_'),
      monthsShort: '\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd'.split('_'),
      weekdays: '\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8'.split('_'),
      weekdaysShort: '\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf'.split('_'),
      weekdaysMin: '\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, HH:mm', LLLL: 'dddd, D MMMM YYYY, HH:mm',
      },
      calendar: {
        sameDay: '[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT', nextDay: '[\u0ba8\u0bbe\u0bb3\u0bc8] LT', nextWeek: 'dddd, LT', lastDay: '[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT', lastWeek: '[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0b87\u0bb2\u0bcd', past: '%s \u0bae\u0bc1\u0ba9\u0bcd', s: '\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd', ss: '%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd', m: '\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd', mm: '%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd', h: '\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd', hh: '%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd', d: '\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd', dd: '%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd', M: '\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd', MM: '%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd', y: '\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd', yy: '%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
      ordinal(e) { return `${e}\u0bb5\u0ba4\u0bc1`; },
      preparse(e) { return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, e => n[e]); },
      postformat(e) { return e.replace(/\d/g, e => a[e]); },
      meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
      meridiem(e, a, n) { return e < 2 ? ' \u0baf\u0bbe\u0bae\u0bae\u0bcd' : e < 6 ? ' \u0bb5\u0bc8\u0b95\u0bb1\u0bc8' : e < 10 ? ' \u0b95\u0bbe\u0bb2\u0bc8' : e < 14 ? ' \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd' : e < 18 ? ' \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1' : e < 22 ? ' \u0bae\u0bbe\u0bb2\u0bc8' : ' \u0baf\u0bbe\u0bae\u0bae\u0bcd'; },
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0baf\u0bbe\u0bae\u0bae\u0bcd' ? e < 2 ? e : e + 12 : a === '\u0bb5\u0bc8\u0b95\u0bb1\u0bc8' || a === '\u0b95\u0bbe\u0bb2\u0bc8' ? e : a === '\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd' && e >= 10 ? e : e + 12; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('te', {
      months: '\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d'.split('_'),
      monthsShort: '\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02'.split('_'),
      weekdaysShort: '\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f'.split('_'),
      weekdaysMin: '\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36'.split('_'),
      longDateFormat: {
        LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm', LLLL: 'dddd, D MMMM YYYY, A h:mm',
      },
      calendar: {
        sameDay: '[\u0c28\u0c47\u0c21\u0c41] LT', nextDay: '[\u0c30\u0c47\u0c2a\u0c41] LT', nextWeek: 'dddd, LT', lastDay: '[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT', lastWeek: '[\u0c17\u0c24] dddd, LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0c32\u0c4b', past: '%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02', s: '\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41', ss: '%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41', m: '\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02', mm: '%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41', h: '\u0c12\u0c15 \u0c17\u0c02\u0c1f', hh: '%d \u0c17\u0c02\u0c1f\u0c32\u0c41', d: '\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41', dd: '%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41', M: '\u0c12\u0c15 \u0c28\u0c46\u0c32', MM: '%d \u0c28\u0c46\u0c32\u0c32\u0c41', y: '\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02', yy: '%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41',
      },
      dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
      ordinal: '%d\u0c35',
      meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f' ? e < 4 ? e : e + 12 : a === '\u0c09\u0c26\u0c2f\u0c02' ? e : a === '\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02' ? e >= 10 ? e : e + 12 : a === '\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02' ? e + 12 : void 0; },
      meridiem(e, a, n) { return e < 4 ? '\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f' : e < 10 ? '\u0c09\u0c26\u0c2f\u0c02' : e < 17 ? '\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02' : e < 20 ? '\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02' : '\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f'; },
      week: { dow: 0, doy: 6 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('tet', {
      months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
      monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez'.split('_'),
      weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu'.split('_'),
      weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sext_Sab'.split('_'),
      weekdaysMin: 'Do_Seg_Te_Ku_Ki_Sex_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Ohin iha] LT', nextDay: '[Aban iha] LT', nextWeek: 'dddd [iha] LT', lastDay: '[Horiseik iha] LT', lastWeek: 'dddd [semana kotuk] [iha] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'iha %s', past: '%s liuba', s: 'minutu balun', ss: 'minutu %d', m: 'minutu ida', mm: 'minutus %d', h: 'horas ida', hh: 'horas %d', d: 'loron ida', dd: 'loron %d', M: 'fulan ida', MM: 'fulan %d', y: 'tinan ida', yy: 'tinan %d',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('th', {
      months: '\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21'.split('_'),
      monthsShort: '\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.'.split('_'),
      monthsParseExact: !0,
      weekdays: '\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c'.split('_'),
      weekdaysShort: '\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c'.split('_'),
      weekdaysMin: '\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm', LLLL: '\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm',
      },
      meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
      isPM(e) { return e === '\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07'; },
      meridiem(e, a, n) { return e < 12 ? '\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07' : '\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07'; },
      calendar: {
        sameDay: '[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT', nextDay: '[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT', nextWeek: 'dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT', lastDay: '[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT', lastWeek: '[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u0e2d\u0e35\u0e01 %s', past: '%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27', s: '\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35', ss: '%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35', m: '1 \u0e19\u0e32\u0e17\u0e35', mm: '%d \u0e19\u0e32\u0e17\u0e35', h: '1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07', hh: '%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07', d: '1 \u0e27\u0e31\u0e19', dd: '%d \u0e27\u0e31\u0e19', M: '1 \u0e40\u0e14\u0e37\u0e2d\u0e19', MM: '%d \u0e40\u0e14\u0e37\u0e2d\u0e19', y: '1 \u0e1b\u0e35', yy: '%d \u0e1b\u0e35',
      },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('tl-ph', {
      months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
      monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
      weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
      weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
      weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'MM/D/YYYY', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY HH:mm', LLLL: 'dddd, MMMM DD, YYYY HH:mm',
      },
      calendar: {
        sameDay: 'LT [ngayong araw]', nextDay: '[Bukas ng] LT', nextWeek: 'LT [sa susunod na] dddd', lastDay: 'LT [kahapon]', lastWeek: 'LT [noong nakaraang] dddd', sameElse: 'L',
      },
      relativeTime: {
        future: 'sa loob ng %s', past: '%s ang nakalipas', s: 'ilang segundo', ss: '%d segundo', m: 'isang minuto', mm: '%d minuto', h: 'isang oras', hh: '%d oras', d: 'isang araw', dd: '%d araw', M: 'isang buwan', MM: '%d buwan', y: 'isang taon', yy: '%d taon',
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal(e) { return e; },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = 'pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_'); function n(e, n, t, c) {
      const M = (function (e) {
        let n = Math.floor(e % 1e3 / 100),
          t = Math.floor(e % 100 / 10),
          c = e % 10,
          M = ''; n > 0 && (M += `${a[n]}vatlh`); t > 0 && (M += `${(M !== '' ? ' ' : '') + a[t]}maH`); c > 0 && (M += (M !== '' ? ' ' : '') + a[c]); return M === '' ? 'pagh' : M;
      }(e)); switch (t) { case 'ss': return `${M} lup`; case 'mm': return `${M} tup`; case 'hh': return `${M} rep`; case 'dd': return `${M} jaj`; case 'MM': return `${M} jar`; case 'yy': return `${M} DIS`; }
    }e.defineLocale('tlh', {
      months: 'tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019'.split('_'),
      monthsShort: 'jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019'.split('_'),
      monthsParseExact: !0,
      weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
      weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
      weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[DaHjaj] LT', nextDay: '[wa\u2019leS] LT', nextWeek: 'LLL', lastDay: '[wa\u2019Hu\u2019] LT', lastWeek: 'LLL', sameElse: 'L',
      },
      relativeTime: {
        future(e) { let a = e; return a = e.indexOf('jaj') !== -1 ? `${a.slice(0, -3)}leS` : e.indexOf('jar') !== -1 ? `${a.slice(0, -3)}waQ` : e.indexOf('DIS') !== -1 ? `${a.slice(0, -3)}nem` : `${a} pIq`; }, past(e) { let a = e; return a = e.indexOf('jaj') !== -1 ? `${a.slice(0, -3)}Hu\u2019` : e.indexOf('jar') !== -1 ? `${a.slice(0, -3)}wen` : e.indexOf('DIS') !== -1 ? `${a.slice(0, -3)}ben` : `${a} ret`; }, s: 'puS lup', ss: n, m: 'wa\u2019 tup', mm: n, h: 'wa\u2019 rep', hh: n, d: 'wa\u2019 jaj', dd: n, M: 'wa\u2019 jar', MM: n, y: 'wa\u2019 DIS', yy: n,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    const a = {
      1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\xfcnc\xfc", 4: "'\xfcnc\xfc", 100: "'\xfcnc\xfc", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131",
    }; e.defineLocale('tr', {
      months: 'Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k'.split('_'),
      monthsShort: 'Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara'.split('_'),
      weekdays: 'Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi'.split('_'),
      weekdaysShort: 'Paz_Pts_Sal_\xc7ar_Per_Cum_Cts'.split('_'),
      weekdaysMin: 'Pz_Pt_Sa_\xc7a_Pe_Cu_Ct'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[bug\xfcn saat] LT', nextDay: '[yar\u0131n saat] LT', nextWeek: '[gelecek] dddd [saat] LT', lastDay: '[d\xfcn] LT', lastWeek: '[ge\xe7en] dddd [saat] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s sonra', past: '%s \xf6nce', s: 'birka\xe7 saniye', ss: '%d saniye', m: 'bir dakika', mm: '%d dakika', h: 'bir saat', hh: '%d saat', d: 'bir g\xfcn', dd: '%d g\xfcn', M: 'bir ay', MM: '%d ay', y: 'bir y\u0131l', yy: '%d y\u0131l',
      },
      dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|\xfcnc\xfc|nc\u0131|uncu|\u0131nc\u0131)/,
      ordinal(e) { if (e === 0) return `${e}'\u0131nc\u0131`; const n = e % 10; return e + (a[n] || a[e % 100 - n] || a[e >= 100 ? 100 : null]); },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n, t) {
      const c = {
        s: ['viensas secunds', "'iensas secunds"], ss: [`${e} secunds`, `${e} secunds`], m: ["'n m\xedut", "'iens m\xedut"], mm: [`${e} m\xeduts`, `${e} m\xeduts`], h: ["'n \xfeora", "'iensa \xfeora"], hh: [`${e} \xfeoras`, `${e} \xfeoras`], d: ["'n ziua", "'iensa ziua"], dd: [`${e} ziuas`, `${e} ziuas`], M: ["'n mes", "'iens mes"], MM: [`${e} mesen`, `${e} mesen`], y: ["'n ar", "'iens ar"], yy: [`${e} ars`, `${e} ars`],
      }; return t ? c[n][0] : a ? c[n][0] : c[n][1];
    }e.defineLocale('tzl', {
      months: 'Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar'.split('_'),
      monthsShort: 'Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
      weekdays: 'S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi'.split('_'),
      weekdaysShort: 'S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t'.split('_'),
      weekdaysMin: 'S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1'.split('_'),
      longDateFormat: {
        LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD.MM.YYYY', LL: 'D. MMMM [dallas] YYYY', LLL: 'D. MMMM [dallas] YYYY HH.mm', LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
      },
      meridiemParse: /d\'o|d\'a/i,
      isPM(e) { return e.toLowerCase() === "d'o"; },
      meridiem(e, a, n) { return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"; },
      calendar: {
        sameDay: '[oxhi \xe0] LT', nextDay: '[dem\xe0 \xe0] LT', nextWeek: 'dddd [\xe0] LT', lastDay: '[ieiri \xe0] LT', lastWeek: '[s\xfcr el] dddd [lasteu \xe0] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'osprei %s', past: 'ja%s', s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a,
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('tzm', {
      months: '\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54'.split('_'),
      monthsShort: '\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54'.split('_'),
      weekdays: '\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59'.split('_'),
      weekdaysShort: '\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59'.split('_'),
      weekdaysMin: '\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT', nextDay: '[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT', nextWeek: 'dddd [\u2d34] LT', lastDay: '[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT', lastWeek: 'dddd [\u2d34] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s', past: '\u2d62\u2d30\u2d4f %s', s: '\u2d49\u2d4e\u2d49\u2d3d', ss: '%d \u2d49\u2d4e\u2d49\u2d3d', m: '\u2d4e\u2d49\u2d4f\u2d53\u2d3a', mm: '%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a', h: '\u2d59\u2d30\u2d44\u2d30', hh: '%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f', d: '\u2d30\u2d59\u2d59', dd: '%d o\u2d59\u2d59\u2d30\u2d4f', M: '\u2d30\u2d62o\u2d53\u2d54', MM: '%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f', y: '\u2d30\u2d59\u2d33\u2d30\u2d59', yy: '%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f',
      },
      week: { dow: 6, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('tzm-latn', {
      months: 'innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir'.split('_'),
      monthsShort: 'innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir'.split('_'),
      weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas'.split('_'),
      weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas'.split('_'),
      weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[asdkh g] LT', nextDay: '[aska g] LT', nextWeek: 'dddd [g] LT', lastDay: '[assant g] LT', lastWeek: 'dddd [g] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'dadkh s yan %s', past: 'yan %s', s: 'imik', ss: '%d imik', m: 'minu\u1e0d', mm: '%d minu\u1e0d', h: 'sa\u025ba', hh: '%d tassa\u025bin', d: 'ass', dd: '%d ossan', M: 'ayowr', MM: '%d iyyirn', y: 'asgas', yy: '%d isgasn',
      },
      week: { dow: 6, doy: 12 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    function a(e, a, n) {
      let t,
        c; return n === 'm' ? a ? '\u0445\u0432\u0438\u043b\u0438\u043d\u0430' : '\u0445\u0432\u0438\u043b\u0438\u043d\u0443' : n === 'h' ? a ? '\u0433\u043e\u0434\u0438\u043d\u0430' : '\u0433\u043e\u0434\u0438\u043d\u0443' : `${e} ${t = +e, c = {
        ss: a ? '\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434' : '\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434', mm: a ? '\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d' : '\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d', hh: a ? '\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d' : '\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d', dd: '\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432', MM: '\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432', yy: '\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432',
      }[n].split('_'), t % 10 == 1 && t % 100 != 11 ? c[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? c[1] : c[2]}`;
    } function n(e) { return function () { return `${e}\u043e${this.hours() === 11 ? '\u0431' : ''}] LT`; }; }e.defineLocale('uk', {
      months: { format: '\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f'.split('_'), standalone: '\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c'.split('_') },
      monthsShort: '\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434'.split('_'),
      weekdays(e, a) { const n = { nominative: '\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430'.split('_'), accusative: '\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443'.split('_'), genitive: '\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438'.split('_') }; return e ? n[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? 'accusative' : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? 'genitive' : 'nominative'][e.day()] : n.nominative; },
      weekdaysShort: '\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431'.split('_'),
      weekdaysMin: '\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY \u0440.', LLL: 'D MMMM YYYY \u0440., HH:mm', LLLL: 'dddd, D MMMM YYYY \u0440., HH:mm',
      },
      calendar: {
        sameDay: n('[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 '), nextDay: n('[\u0417\u0430\u0432\u0442\u0440\u0430 '), lastDay: n('[\u0412\u0447\u043e\u0440\u0430 '), nextWeek: n('[\u0423] dddd ['), lastWeek() { switch (this.day()) { case 0: case 3: case 5: case 6: return n('[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [').call(this); case 1: case 2: case 4: return n('[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [').call(this); } }, sameElse: 'L',
      },
      relativeTime: {
        future: '\u0437\u0430 %s', past: '%s \u0442\u043e\u043c\u0443', s: '\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434', ss: a, m: a, mm: a, h: '\u0433\u043e\u0434\u0438\u043d\u0443', hh: a, d: '\u0434\u0435\u043d\u044c', dd: a, M: '\u043c\u0456\u0441\u044f\u0446\u044c', MM: a, y: '\u0440\u0456\u043a', yy: a,
      },
      meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
      isPM(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e); },
      meridiem(e, a, n) { return e < 4 ? '\u043d\u043e\u0447\u0456' : e < 12 ? '\u0440\u0430\u043d\u043a\u0443' : e < 17 ? '\u0434\u043d\u044f' : '\u0432\u0435\u0447\u043e\u0440\u0430'; },
      dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
      ordinal(e, a) { switch (a) { case 'M': case 'd': case 'DDD': case 'w': case 'W': return `${e}-\u0439`; case 'D': return `${e}-\u0433\u043e`; default: return e; } },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    let a = ['\u062c\u0646\u0648\u0631\u06cc', '\u0641\u0631\u0648\u0631\u06cc', '\u0645\u0627\u0631\u0686', '\u0627\u067e\u0631\u06cc\u0644', '\u0645\u0626\u06cc', '\u062c\u0648\u0646', '\u062c\u0648\u0644\u0627\u0626\u06cc', '\u0627\u06af\u0633\u062a', '\u0633\u062a\u0645\u0628\u0631', '\u0627\u06a9\u062a\u0648\u0628\u0631', '\u0646\u0648\u0645\u0628\u0631', '\u062f\u0633\u0645\u0628\u0631'],
      n = ['\u0627\u062a\u0648\u0627\u0631', '\u067e\u06cc\u0631', '\u0645\u0646\u06af\u0644', '\u0628\u062f\u06be', '\u062c\u0645\u0639\u0631\u0627\u062a', '\u062c\u0645\u0639\u06c1', '\u06c1\u0641\u062a\u06c1']; e.defineLocale('ur', {
      months: a,
      monthsShort: a,
      weekdays: n,
      weekdaysShort: n,
      weekdaysMin: n,
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd\u060c D MMMM YYYY HH:mm',
      },
      meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
      isPM(e) { return e === '\u0634\u0627\u0645'; },
      meridiem(e, a, n) { return e < 12 ? '\u0635\u0628\u062d' : '\u0634\u0627\u0645'; },
      calendar: {
        sameDay: '[\u0622\u062c \u0628\u0648\u0642\u062a] LT', nextDay: '[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT', nextWeek: 'dddd [\u0628\u0648\u0642\u062a] LT', lastDay: '[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT', lastWeek: '[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s \u0628\u0639\u062f', past: '%s \u0642\u0628\u0644', s: '\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688', ss: '%d \u0633\u06cc\u06a9\u0646\u0688', m: '\u0627\u06cc\u06a9 \u0645\u0646\u0679', mm: '%d \u0645\u0646\u0679', h: '\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1', hh: '%d \u06af\u06be\u0646\u0679\u06d2', d: '\u0627\u06cc\u06a9 \u062f\u0646', dd: '%d \u062f\u0646', M: '\u0627\u06cc\u06a9 \u0645\u0627\u06c1', MM: '%d \u0645\u0627\u06c1', y: '\u0627\u06cc\u06a9 \u0633\u0627\u0644', yy: '%d \u0633\u0627\u0644',
      },
      preparse(e) { return e.replace(/\u060c/g, ','); },
      postformat(e) { return e.replace(/,/g, '\u060c'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('uz', {
      months: '\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440'.split('_'),
      monthsShort: '\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a'.split('_'),
      weekdays: '\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430'.split('_'),
      weekdaysShort: '\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d'.split('_'),
      weekdaysMin: '\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'D MMMM YYYY, dddd HH:mm',
      },
      calendar: {
        sameDay: '[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]', nextDay: '[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]', nextWeek: 'dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]', lastDay: '[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]', lastWeek: '[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]', sameElse: 'L',
      },
      relativeTime: {
        future: '\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430', past: '\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d', s: '\u0444\u0443\u0440\u0441\u0430\u0442', ss: '%d \u0444\u0443\u0440\u0441\u0430\u0442', m: '\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430', mm: '%d \u0434\u0430\u043a\u0438\u043a\u0430', h: '\u0431\u0438\u0440 \u0441\u043e\u0430\u0442', hh: '%d \u0441\u043e\u0430\u0442', d: '\u0431\u0438\u0440 \u043a\u0443\u043d', dd: '%d \u043a\u0443\u043d', M: '\u0431\u0438\u0440 \u043e\u0439', MM: '%d \u043e\u0439', y: '\u0431\u0438\u0440 \u0439\u0438\u043b', yy: '%d \u0439\u0438\u043b',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('uz-latn', {
      months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
      monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
      weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
      weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
      weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'D MMMM YYYY, dddd HH:mm',
      },
      calendar: {
        sameDay: '[Bugun soat] LT [da]', nextDay: '[Ertaga] LT [da]', nextWeek: 'dddd [kuni soat] LT [da]', lastDay: '[Kecha soat] LT [da]', lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: 'L',
      },
      relativeTime: {
        future: 'Yaqin %s ichida', past: 'Bir necha %s oldin', s: 'soniya', ss: '%d soniya', m: 'bir daqiqa', mm: '%d daqiqa', h: 'bir soat', hh: '%d soat', d: 'bir kun', dd: '%d kun', M: 'bir oy', MM: '%d oy', y: 'bir yil', yy: '%d yil',
      },
      week: { dow: 1, doy: 7 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('vi', {
      months: 'th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12'.split('_'),
      monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
      monthsParseExact: !0,
      weekdays: 'ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y'.split('_'),
      weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysParseExact: !0,
      meridiemParse: /sa|ch/i,
      isPM(e) { return /^ch$/i.test(e); },
      meridiem(e, a, n) { return e < 12 ? n ? 'sa' : 'SA' : n ? 'ch' : 'CH'; },
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM [n\u0103m] YYYY', LLL: 'D MMMM [n\u0103m] YYYY HH:mm', LLLL: 'dddd, D MMMM [n\u0103m] YYYY HH:mm', l: 'DD/M/YYYY', ll: 'D MMM YYYY', lll: 'D MMM YYYY HH:mm', llll: 'ddd, D MMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[H\xf4m nay l\xfac] LT', nextDay: '[Ng\xe0y mai l\xfac] LT', nextWeek: 'dddd [tu\u1ea7n t\u1edbi l\xfac] LT', lastDay: '[H\xf4m qua l\xfac] LT', lastWeek: 'dddd [tu\u1ea7n r\u1ed3i l\xfac] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '%s t\u1edbi', past: '%s tr\u01b0\u1edbc', s: 'v\xe0i gi\xe2y', ss: '%d gi\xe2y', m: 'm\u1ed9t ph\xfat', mm: '%d ph\xfat', h: 'm\u1ed9t gi\u1edd', hh: '%d gi\u1edd', d: 'm\u1ed9t ng\xe0y', dd: '%d ng\xe0y', M: 'm\u1ed9t th\xe1ng', MM: '%d th\xe1ng', y: 'm\u1ed9t n\u0103m', yy: '%d n\u0103m',
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal(e) { return e; },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('x-pseudo', {
      months: 'J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r'.split('_'),
      monthsShort: 'J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c'.split('_'),
      monthsParseExact: !0,
      weekdays: 'S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd'.split('_'),
      weekdaysShort: 'S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t'.split('_'),
      weekdaysMin: 'S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1'.split('_'),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: 'HH:mm', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[T~\xf3d\xe1~\xfd \xe1t] LT', nextDay: '[T~\xf3m\xf3~rr\xf3~w \xe1t] LT', nextWeek: 'dddd [\xe1t] LT', lastDay: '[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT', lastWeek: '[L~\xe1st] dddd [\xe1t] LT', sameElse: 'L',
      },
      relativeTime: {
        future: '\xed~\xf1 %s', past: '%s \xe1~g\xf3', s: '\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds', ss: '%d s~\xe9c\xf3\xf1~ds', m: '\xe1 ~m\xed\xf1~\xfat\xe9', mm: '%d m~\xed\xf1\xfa~t\xe9s', h: '\xe1~\xf1 h\xf3~\xfar', hh: '%d h~\xf3\xfars', d: '\xe1 ~d\xe1\xfd', dd: '%d d~\xe1\xfds', M: '\xe1 ~m\xf3\xf1~th', MM: '%d m~\xf3\xf1t~hs', y: '\xe1 ~\xfd\xe9\xe1r', yy: '%d \xfd~\xe9\xe1rs',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal(e) { const a = e % 10; return e + (~~(e % 100 / 10) == 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th'); },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('yo', {
      months: 'S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300'.split('_'),
      monthsShort: 'S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300'.split('_'),
      weekdays: 'A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta'.split('_'),
      weekdaysShort: 'A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301'.split('_'),
      weekdaysMin: 'A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b'.split('_'),
      longDateFormat: {
        LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
      },
      calendar: {
        sameDay: '[O\u0300ni\u0300 ni] LT', nextDay: '[\u1ecc\u0300la ni] LT', nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT", lastDay: '[A\u0300na ni] LT', lastWeek: 'dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT', sameElse: 'L',
      },
      relativeTime: {
        future: 'ni\u0301 %s', past: '%s k\u1ecdja\u0301', s: 'i\u0300s\u1eb9ju\u0301 aaya\u0301 die', ss: 'aaya\u0301 %d', m: 'i\u0300s\u1eb9ju\u0301 kan', mm: 'i\u0300s\u1eb9ju\u0301 %d', h: 'wa\u0301kati kan', hh: 'wa\u0301kati %d', d: '\u1ecdj\u1ecd\u0301 kan', dd: '\u1ecdj\u1ecd\u0301 %d', M: 'osu\u0300 kan', MM: 'osu\u0300 %d', y: '\u1ecddu\u0301n kan', yy: '\u1ecddu\u0301n %d',
      },
      dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
      ordinal: '\u1ecdj\u1ecd\u0301 %d',
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('zh-cn', {
      months: '\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708'.split('_'),
      monthsShort: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'),
      weekdays: '\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d'.split('_'),
      weekdaysShort: '\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d'.split('_'),
      weekdaysMin: '\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY\u5e74M\u6708D\u65e5', LLL: 'YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206', LLLL: 'YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206', l: 'YYYY/M/D', ll: 'YYYY\u5e74M\u6708D\u65e5', lll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', llll: 'YYYY\u5e74M\u6708D\u65e5dddd HH:mm',
      },
      meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u51cc\u6668' || a === '\u65e9\u4e0a' || a === '\u4e0a\u5348' ? e : a === '\u4e0b\u5348' || a === '\u665a\u4e0a' ? e + 12 : e >= 11 ? e : e + 12; },
      meridiem(e, a, n) { const t = 100 * e + a; return t < 600 ? '\u51cc\u6668' : t < 900 ? '\u65e9\u4e0a' : t < 1130 ? '\u4e0a\u5348' : t < 1230 ? '\u4e2d\u5348' : t < 1800 ? '\u4e0b\u5348' : '\u665a\u4e0a'; },
      calendar: {
        sameDay: '[\u4eca\u5929]LT', nextDay: '[\u660e\u5929]LT', nextWeek: '[\u4e0b]ddddLT', lastDay: '[\u6628\u5929]LT', lastWeek: '[\u4e0a]ddddLT', sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
      ordinal(e, a) { switch (a) { case 'd': case 'D': case 'DDD': return `${e}\u65e5`; case 'M': return `${e}\u6708`; case 'w': case 'W': return `${e}\u5468`; default: return e; } },
      relativeTime: {
        future: '%s\u5185', past: '%s\u524d', s: '\u51e0\u79d2', ss: '%d \u79d2', m: '1 \u5206\u949f', mm: '%d \u5206\u949f', h: '1 \u5c0f\u65f6', hh: '%d \u5c0f\u65f6', d: '1 \u5929', dd: '%d \u5929', M: '1 \u4e2a\u6708', MM: '%d \u4e2a\u6708', y: '1 \u5e74', yy: '%d \u5e74',
      },
      week: { dow: 1, doy: 4 },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('zh-hk', {
      months: '\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708'.split('_'),
      monthsShort: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'),
      weekdays: '\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d'.split('_'),
      weekdaysShort: '\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d'.split('_'),
      weekdaysMin: '\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY\u5e74M\u6708D\u65e5', LLL: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', LLLL: 'YYYY\u5e74M\u6708D\u65e5dddd HH:mm', l: 'YYYY/M/D', ll: 'YYYY\u5e74M\u6708D\u65e5', lll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', llll: 'YYYY\u5e74M\u6708D\u65e5dddd HH:mm',
      },
      meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u51cc\u6668' || a === '\u65e9\u4e0a' || a === '\u4e0a\u5348' ? e : a === '\u4e2d\u5348' ? e >= 11 ? e : e + 12 : a === '\u4e0b\u5348' || a === '\u665a\u4e0a' ? e + 12 : void 0; },
      meridiem(e, a, n) { const t = 100 * e + a; return t < 600 ? '\u51cc\u6668' : t < 900 ? '\u65e9\u4e0a' : t < 1130 ? '\u4e0a\u5348' : t < 1230 ? '\u4e2d\u5348' : t < 1800 ? '\u4e0b\u5348' : '\u665a\u4e0a'; },
      calendar: {
        sameDay: '[\u4eca\u5929]LT', nextDay: '[\u660e\u5929]LT', nextWeek: '[\u4e0b]ddddLT', lastDay: '[\u6628\u5929]LT', lastWeek: '[\u4e0a]ddddLT', sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
      ordinal(e, a) { switch (a) { case 'd': case 'D': case 'DDD': return `${e}\u65e5`; case 'M': return `${e}\u6708`; case 'w': case 'W': return `${e}\u9031`; default: return e; } },
      relativeTime: {
        future: '%s\u5167', past: '%s\u524d', s: '\u5e7e\u79d2', ss: '%d \u79d2', m: '1 \u5206\u9418', mm: '%d \u5206\u9418', h: '1 \u5c0f\u6642', hh: '%d \u5c0f\u6642', d: '1 \u5929', dd: '%d \u5929', M: '1 \u500b\u6708', MM: '%d \u500b\u6708', y: '1 \u5e74', yy: '%d \u5e74',
      },
    });
  }(n(0)));
}, function (e, a, n) {
  (function (e) {
    e.defineLocale('zh-tw', {
      months: '\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708'.split('_'),
      monthsShort: '1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708'.split('_'),
      weekdays: '\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d'.split('_'),
      weekdaysShort: '\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d'.split('_'),
      weekdaysMin: '\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d'.split('_'),
      longDateFormat: {
        LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY\u5e74M\u6708D\u65e5', LLL: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', LLLL: 'YYYY\u5e74M\u6708D\u65e5dddd HH:mm', l: 'YYYY/M/D', ll: 'YYYY\u5e74M\u6708D\u65e5', lll: 'YYYY\u5e74M\u6708D\u65e5 HH:mm', llll: 'YYYY\u5e74M\u6708D\u65e5dddd HH:mm',
      },
      meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
      meridiemHour(e, a) { return e === 12 && (e = 0), a === '\u51cc\u6668' || a === '\u65e9\u4e0a' || a === '\u4e0a\u5348' ? e : a === '\u4e2d\u5348' ? e >= 11 ? e : e + 12 : a === '\u4e0b\u5348' || a === '\u665a\u4e0a' ? e + 12 : void 0; },
      meridiem(e, a, n) { const t = 100 * e + a; return t < 600 ? '\u51cc\u6668' : t < 900 ? '\u65e9\u4e0a' : t < 1130 ? '\u4e0a\u5348' : t < 1230 ? '\u4e2d\u5348' : t < 1800 ? '\u4e0b\u5348' : '\u665a\u4e0a'; },
      calendar: {
        sameDay: '[\u4eca\u5929]LT', nextDay: '[\u660e\u5929]LT', nextWeek: '[\u4e0b]ddddLT', lastDay: '[\u6628\u5929]LT', lastWeek: '[\u4e0a]ddddLT', sameElse: 'L',
      },
      dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
      ordinal(e, a) { switch (a) { case 'd': case 'D': case 'DDD': return `${e}\u65e5`; case 'M': return `${e}\u6708`; case 'w': case 'W': return `${e}\u9031`; default: return e; } },
      relativeTime: {
        future: '%s\u5167', past: '%s\u524d', s: '\u5e7e\u79d2', ss: '%d \u79d2', m: '1 \u5206\u9418', mm: '%d \u5206\u9418', h: '1 \u5c0f\u6642', hh: '%d \u5c0f\u6642', d: '1 \u5929', dd: '%d \u5929', M: '1 \u500b\u6708', MM: '%d \u500b\u6708', y: '1 \u5e74', yy: '%d \u5e74',
      },
    });
  }(n(0)));
}, function (e, a, n) {
  let t = n(3),
    c = n.n(t),
    M = n(2),
    s = n(1); a.a = function (e, a, n, t) {
    let o = 'MMM. D'; n !== t && (o += ' HH:MM z'); for (let a = 0; a < 2; a += 1) for (let n = 0; n < e[a].length; n += 1)c.a.isMoment(e[a][n]) && (e[a][n] = e[a][n].format(o)); const r = `Source dates w/o match in target: <span class="text-date">${e[0].join(', ')}</span>`,
      i = `Target dates w/o match in source: <span class="text-date">${e[1].join(', ')}</span>`; let d,
      _ = '',
      u = ''; e.length > 3 && e[3].length > 0 && (u = e[3].join(', ')), e.length > 2 && (e[2].length > 0 && (_ = e[2].join(', ')), u === '' && _ === '' || M.c(`Found & parsed slash dates: ${u} ${_} at segment ${Number(a.currentSegment) + 1}`)), d = e[0].length > 0 && e[1].length > 0 ? `${r}<br>${i}` : e[0].length > 0 && e[1].length === 0 ? r : e[0].length === 0 && e[1].length > 0 ? i : null; const l = new s.a('dates'); return l.hasError = d !== null, l.HTML = d, l.plainText = d ? d.replace(/<(?:.|\n)*?>/gm, '') : d, l;
  };
}, function (e, a, n) {
  Object.defineProperty(a, '__esModule', { value: !0 }), n.d(a, 'scan', () => o); let t = n(127),
    c = n(129),
    M = n(151),
    s = n(2); function o(e, a, n) {
    const s = Object(t.a)(a); return (function (e, a, n) {
      let t = { currentSegment: 0, tests: Object(c.a)(a) }; return Object.keys(e).forEach((c) => {
        t.currentSegment = c; const [M, s] = (function (e, a, n, t) {
          let c = t; const M = {}; return c.tests.forEach((t) => {
            const [s, o] = t,
              [r, i] = o(e, a, n, c); M[s] = r, c = i;
          }), [M, c];
        }(e[c].source, e[c].target, a, t)); t = s, n && n(c, M);
      }), t;
    }(Object(M.a)(e), s, n));
  }n.d(a, 'regexComparer', () => s.d), n.d(a, 'regexReplaceAllFromArray', () => s.e), n.d(a, 'regexReturnAllMatches', () => s.f), n.d(a, 'compareArrays', () => s.b);
}, function (e, a, n) {
  let t = n(2),
    c = n(128); function M(e, a) { return void 0 === e ? a : typeof e !== 'string' ? a : e.length !== 2 ? (Object(t.c)('Invalid language code. Source and target languages must be in ISO 639-1 format. Reverting to default.'), a) : e; }a.a = function (e) {
    if (typeof e !== 'object') {
      return Object(t.c)('Invalid checkOptions. Using default options instead.'), {
        sourceLang: 'ja', targetLang: 'en', dateFormats: c.a, bannedWordsList: {}, customTests: [],
      };
    } let a,
      n,
      s; return e.sourceLang = M(e.sourceLang, 'ja'), e.targetLang = M(e.targetLang, 'en'), e.bannedWordsList = (function (e) { let a = e; (typeof a !== 'object' || Array.isArray(a) || a === null) && (Object(t.c)('No valid banned words list detected. Reverting to blank list.'), a = {}); const n = Object.keys(a); return n.indexOf('CaseSensitive') < 0 && (a.CaseSensitive = []), n.indexOf('CaseInsensitive') < 0 && (a.CaseInsensitive = []), a; }(e.bannedWordsList)), e.dateFormats = (a = e.dateFormats, n = e.sourceLang, s = e.targetLang, typeof a !== 'object' || Array.isArray(a) || a === null ? (Object(t.c)('No valid date formats detected. Reverting to default.'), c.a) : (a[n] ? Array.isArray(a[n]) || (Object(t.c)(`ERROR: ${n} date format object must contain an array.`), a[n] = {}) : a[n] = {}, a[s] ? Array.isArray(a[s]) || (Object(t.c)(`ERROR: ${s} date format object must contain an array.`), a[s] = {}) : a[s] = {}, a)), e;
  };
}, function (e, a, n) {
  const t = new Date(),
    c = t.getFullYear(),
    M = { ja: [['([0-9]{4})\\u5E74([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])[\\u6642\\uFF1A:]([0-5][0-9])', '{$1-$2-$3 $4:$5}'], ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])[\\u6642\\uFF1A:]([0-5][0-9])', `{${c}-$1-$2 $3:$4}`], ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?([0-2]?[0-9])\\u6642', `{${c}-$1-$2 $3:00}`], ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5\\s?\\u306E([0-2]?[0-9])\\u6642', `{${c}-$1-$2 $3:00}`], ['([0-9]{4})\\u5E74([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5', '{$1-$2-$3}'], ['([0-2]?[0-9])[:\\uFF1A]([0-5][0-9]) ([0-1]?[0-9])\\/([0-3]?[0-9])', `{${c}-$3-$4 $1:$2}`], ['([0-1]?[0-9])\\/([0-3]?[0-9]).([0-2]?[0-9])[:\\uFF1A]([0-5][0-9])', `{${c}-$1-$2 $3:$4}`], ['([0-1]?[0-9])\\u6708([0-3]?[0-9])\\u65E5', `{${c}-$1-$2}`], ['[0-2]?[0-9]:[0-5][0-9]\\s?[-\u2013\\uFF5E]\\s?([0-1]?[0-9])\\/([0-3]?[0-9]) ([0-2]?[0-9]:[0-5][0-9])', `{${c}-$1-$2 $3}`], ['([0-1]?[0-9])\\/([0-3]?[0-9])[\uff08(][\\u65E5\\u6708\u706b\u6c34\u6728\u91d1\u571f][\uff09)]', `{${c}-$1-$2}`], ['([0-1]?[0-9])\\/([0-3]?[0-9])[\\u304B\\u307E][\\u3089\\u3067]', `{${c}-$1-$2}`], ['([0-3]?[0-9])\\u65E5', `{${c}-${t.getMonth() + 1}-$1}`]], en: [['([1]?[0-9]:[0-5][0-9][ap]m), Jan(?:uary)?\\.? ([0-3]?[0-9])', `{${c}-1-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Feb(?:ruary)?\\.? ([0-3]?[0-9])', `{${c}-2-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Mar(?:ch)?\\.? ([0-3]?[0-9])', `{${c}-3-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Apr(?:il)?\\.? ([0-3]?[0-9])', `{${c}-4-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), May ([0-3]?[0-9])', `{${c}-5-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Jun(?:e)?\\.? ([0-3]?[0-9])', `{${c}-6-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Jul(?:y)?\\.? ([0-3]?[0-9])', `{${c}-7-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Aug(?:ust)?\\.? ([0-3]?[0-9])', `{${c}-8-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Sep(?:tember)?\\.? ([0-3]?[0-9])', `{${c}-9-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Oct(?:ober)?\\.? ([0-3]?[0-9])', `{${c}-10-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Nov(?:ember)?\\.? ([0-3]?[0-9])', `{${c}-11-$2 $1}`], ['([1]?[0-9]:[0-5][0-9][ap]m), Dec(?:ember)?\\.? ([0-3]?[0-9])', `{${c}-12-$2 $1}`], ['Jan(?:uary)?\\.? ([0-3]?[0-9])', `{${c}-1-$1}`], ['Feb(?:ruary)?\\.? ([0-3]?[0-9])', `{${c}-2-$1}`], ['Mar(?:ch)?\\.? ([0-3]?[0-9])', `{${c}-3-$1}`], ['Apr(?:il)?\\.? ([0-3]?[0-9])', `{${c}-4-$1}`], ['May ([0-3]?[0-9])', `{${c}-5-$1}`], ['Jun(?:e)?\\.? ([0-3]?[0-9])', `{${c}-6-$1}`], ['Jul(?:y)?\\.? ([0-3]?[0-9])', `{${c}-7-$1}`], ['Aug(?:ust)?\\.? ([0-3]?[0-9])', `{${c}-8-$1}`], ['Sep(?:tember)?\\.? ([0-3]?[0-9])', `{${c}-9-$1}`], ['Oct(?:ober)?\\.? ([0-3]?[0-9])', `{${c}-10-$1}`], ['Nov(?:ember)?\\.? ([0-3]?[0-9])', `{${c}-11-$1}`], ['Dec(?:ember)?\\.? ([0-3]?[0-9])', `{${c}-12-$1}`], ['([0-1]?[0-9])\\/([0-3]?[0-9]),? ([0-2]?[0-9]:[0-5][0-9][AP]M)', `{${c}-$1-$2 $3}`], ['([0-1]?[0-9])\\/([0-3]?[0-9]) ([0-2]?[0-9]:[0-5][0-9])', `{${c}-$1-$2 $3}`], ['([0-1]?[0-9])\\/([0-3]?[0-9]) \\(GMT\\+9\\)', `{${c}-$1-$2}`], ['[0-2]?[0-9]:[0-5][0-9] [-\u2013\u2014] [0-2]?[0-9]:[0-5][0-9] ([0-1]?[0-9])\\/([0-3]?[0-9])', `{${c}-$1-$2}`], ['([0-1]?[0-9])\\/([0-3]?[0-9]) [0-2]?[0-9]:[0-5][0-9] [-\u2013\u2014] [0-2]?[0-9]:[0-5][0-9]', `{${c}-$1-$2}`], ['([0-2]?[0-9]):([0-5][0-9][AP]M) ([0-1]?[0-9])\\/([0-3]?[0-9])', `{${c}-$3-$4 $1:$2}`], ['[0-2]?[0-9]:[0-5][0-9]\\s?[-\u2013\u301c]\\s?([0-1]?[0-9])\\/([0-3]?[0-9]) ([0-2]?[0-9]:[0-5][0-9])', `{${c}-$1-$2 $3}`]], es: [['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de ene', `{${c}-1-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de feb', `{${c}-2-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de mar', `{${c}-3-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de abr', `{${c}-4-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de may', `{${c}-5-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de jun', `{${c}-6-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de jul', `{${c}-7-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de ago', `{${c}-8-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de sep', `{${c}-9-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de oct', `{${c}-10-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de nov', `{${c}-11-$2 $1}`], ['([0-2]?[0-9]:[0-5][0-9]) h del ([0-3]?[0-9]) de dic', `{${c}-12-$2 $1}`]] }; a.a = M;
}, function (e, a, n) {
  let t = n(130),
    c = n(131),
    M = n(132),
    s = n(133),
    o = n(134),
    r = n(135),
    i = n(136),
    d = n(138),
    _ = n(144),
    u = n(145),
    l = n(149); const m = [['bannedWords', r.a], ['doubleSpaces', c.a], ['zenkakuCharacters', t.b], ['quote-punct', o.a], ['repeatedWords', M.a], ['ordinalNumbers', i.a], ['bulletSpaces', t.a], ['oxfordCommas', s.a], ['numberedBullets', t.c], ['tzDates', _.a], ['dates', d.a], ['times', l.a], ['numbers', u.a]]; a.a = function (e) {
    const a = e.tests || {},
      n = e.customTests || {}; return !0 === a.tzDates ? a.dates = !1 : a.tzDates = !1, (function (e, a) { const n = []; for (let a = 0; a < m.length; a += 1)!1 !== e[m[a][0]] && n.push(m[a]); for (let e = 0; e < a.length; e += 1) typeof a[e][0] === 'string' && typeof a[e][1] === 'function' && n.push(a[e]); return n; }(a, n));
  };
}, function (e, a, n) {
  n.d(a, 'b', () => M), n.d(a, 'a', () => s), n.d(a, 'c', () => r); let t = n(2),
    c = n(1); function M(e, a, n, t) {
    const M = ['\uff08', '\uff09', '\uff1a', '\uff01', '\u3000', '\uff0e'],
      s = []; for (let e = 0; e < M.length; e += 1) if (a.indexOf(M[e]) > -1) { const a = M[e] === '\u3000' ? '[Space]' : M[e]; s.push(a); } const o = new c.a('jp-characters'); return s.length > 0 && (o.hasError = !0, o.HTML = `Double-byte characters: <span class="text-alert">${s.join(' ')}</span>`, o.plainText = `Double-byte characters: ${s.join(' ')}`, o.description = 'Remove all double-byte brackets, exclamation marks, and spaces.'), [o, t];
  } function s(e, a, n, t) {
    let M,
      s = !1; if (n.customBullets) { const e = n.customBullets; (M = new RegExp(`^[${e}][a-zA-Z0-9\\(]|\\\\n[${e}][a-zA-Z0-9\\(]`, 'gm')).test(a) && (s = !0); }(M = new RegExp('^[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]|\\\\n[-\\u25A0\\u25BC\\u30FB][a-zA-Z0-9\\(]', 'gm')).test(a) && (s = !0); const o = new c.a('bullet-point-spaces'); return s && (o.hasError = !0, o.HTML = 'Make sure there are spaces after bullet points.', o.plainText = 'Make sure there are spaces after bullet points.', o.description = 'Adding a space after bullets makes text look cleaner.'), [o, t];
  } function o(e) { if (e.length < 2) return !0; for (let a = 1; a < e.length; a += 1) { if (Number(e[a - 1]) !== Number(e[a]) - 1) return !1; } return !0; } function r(e, a, n, c) {
    const M = [],
      s = []; c.trackNumberedBullets || (c.trackNumberedBullets = { period: [], bracket: [] }); for (let e = 0; e < c.trackNumberedBullets.period.length; e += 1)M.push(c.trackNumberedBullets.period[e]); for (let e = 0; e < c.trackNumberedBullets.bracket.length; e += 1)s.push(c.trackNumberedBullets.bracket[e]); const r = new RegExp('^(\\d)[.)]\\s|[^\\w]\\s(\\d)[.)]\\s', 'gm'),
      i = t.f(a, r); if (i.length === 0) return [null, c]; let d; for (let e = 0; e < i.length; e += 1)d = i[e][1] || i[e][2], i[e][0].indexOf(')') > -1 ? (c.trackNumberedBullets.bracket.push(d), t.c(`Found a numbered bullet point at segment ${Number(c.currentSegment) + 1}. [${d})]`)) : i[e][0].indexOf('.') > -1 && (c.trackNumberedBullets.period.push(d), t.c(`Found a numbered bullet point at segment ${Number(c.currentSegment) + 1}. [${d}.]`)); const _ = o(c.trackNumberedBullets.period),
      u = o(c.trackNumberedBullets.bracket),
      l = d === 1 || d === '1'; let m = null; return !1 !== _ && !1 !== u || (m = 'Suspected error in numbered list (# sequence or punctuation).', !1 === _ ? (c.trackNumberedBullets.period.length > 2 && l && (m = null), c.trackNumberedBullets.period = []) : (c.trackNumberedBullets.bracket.length > 2 && l && (m = null), c.trackNumberedBullets.bracket = [])), [m, c];
  }
}, function (e, a, n) {
  const t = n(1); a.a = function (e, a, n, c) { return (function (e, a) { const n = new t.a('double-spaces'); return e && (n.hasError = !0, n.description = 'Avoid double spaces, even after a period.', n.HTML = 'Check for double spaces.', n.plainText = 'Check for double spaces.'), [n, a]; }(new RegExp(' {2}', 'g').test(a), c)); };
}, function (e, a, n) {
  const t = n(1); const c = ['tsum', 'bye', 'hee', 'heh', 'ha', 'woo', 'boo']; a.a = function (e, a, n, M) { return (function (e, a) { const n = new t.a('repeatedWords', !1); return e.length > 0 && (n.hasError = !0, n.HTML = `Repeated words: ${e.join(', ')}`, n.plainText = `Repeated words: ${e.join(', ')}`, n.description = 'Did you mean to repeat these words?'), [n, a]; }(a.toLowerCase().split(' ').filter((e, a, n) => e === n[a - 1] && e !== '' && c.indexOf(e) === -1), M)); };
}, function (e, a, n) {
  const t = n(1); let c,
    M,
    s; a.a = function (e, a, n = {}, o = {}) {
    let r,
      i = !0; return c = o, !1 === n.requireOxfordComma && (i = !1), r = i ? new RegExp('([a-z]+)((?:,\\s[a-z]+)+)\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi') : new RegExp('([a-z]+)((?:,\\s[a-z]+)+),\\s+(and|or|and\\/or)\\s+([a-z]+)', 'gi'), i && (M = 'Possibly missing an Oxford comma.', s = 'Comma-separated lists ending in "and" or "or" require a comma before the "and" or "or."'), M = 'Oxford comma detected.', s = 'Comma-separated lists ending in "and" or "or" should not have a comma before the "and" or "or."', (function (e) { const a = new t.a('oxford-comma'); return e && (a.hasError = !0, a.HTML = M, a.plainText = M, a.description = s), [a, c]; }(r.test(a)));
  };
}, function (e, a, n) {
  const t = n(1); let c,
    M,
    s,
    o; a.a = function (e, a, n = {}, r) {
    c = r, (function (e = 'US') { e === 'UK' ? (M = '."', s = ',"', o = 'Quotation marks should precede periods.') : (M = '".', s = '",', o = 'Periods should precede quotation marks.'); }(n.quotationMarks)); const i = a.indexOf(M),
      d = a.indexOf(s); return (function (e) { const a = new t.a('quote-punctuation'); return e && (a.hasError = !0, a.description = o, a.HTML = o, a.plainText = o), [a, c]; }(i > -1 || d > -1));
  };
}, function (e, a, n) {
  let t = n(2),
    c = n(1); function M(e) { const a = new c.a('banned-words'); return e.length > 0 && (a.hasError = !0, a.HTML = `Suspicious terminology: <span class="text-warning">${e.join(', ')}</span>`, a.plainText = `Suspicious terminology: ${e.join(', ')}`, a.description = ''), a; } function s(e, a, n = !1, c = []) { const M = n ? 'g' : 'gi'; if (!a || a.constructor !== Array) return c; let s = c; return a.forEach((a) => { const n = new RegExp(a, M); s = t.f(e, n, s); }), s; }a.a = function (e, a, n, t) { let c; if (n.bannedWordsList && (c = n.bannedWordsList), !c) return [M([]), t]; let o = s(a, c.CaseInsensitive, !1); return [M(o = s(a, c.CaseSensitive, !0, o)), t]; };
}, function (e, a, n) {
  let t = n(137),
    c = n.n(t),
    M = n(2),
    s = n(1); let o; function r() { return [new s.a('ordinal-numbers'), o]; } function i(e) { const a = []; return e.forEach((e) => { (function (e) { return e[2].toLowerCase() !== 'am' && e[2].toLowerCase() !== 'pm' && c()(e[1]) !== e[2].trim(); }(e)) && a.push(e[0].trim()); }), a.length > 0 ? (function (e) { const a = new s.a('ordinal-numbers'); return a.hasError = !0, a.HTML = `Check ordinal numbers: ${e.join(', ')}`, a.plainText = `Check ordinal numbers: ${e.join(', ')}`, a.description = 'Verify spelling of numbers such as "1st", "2nd" and "3rd."', [a, o]; }(a)) : r(); }a.a = function (e, a, n = {}, t) {
    return o = t, n.targetLang !== 'en' ? (M.c('Ordinal number checks are only supported for English.'), r()) : (function (e) {
      const a = new RegExp('([0-9]+)([a-z][a-z])(?:\\W|$)', 'gi'),
        n = M.f(e, a); return n.length > 0 ? i(n) : r();
    }(a));
  };
}, function (e, a) { e.exports = function (e) { const a = e % 100; if (a >= 10 && a <= 20) return 'th'; const n = e % 10; return n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'; }; }, function (e, a, n) {
  let t = n(2),
    c = n(4),
    M = n(5),
    s = n(125),
    o = n(1); function r(e, a) {
    let n = a; for (let a = 0; a < e.length; a += 1) {
      const t = e[a].indexOf('/'),
        c = `{2017-${e[a].slice(0, t)}-${e[a].slice(t + 1)}}`; n = n.replace(e[a], c);
    } return n;
  }a.a = function (e, a, n, i) {
    const d = i; let _ = null; if (!c.c(n)) return d.timeCheck_clean_source = e, d.timeCheck_clean_target = a, t.c('Invalid checkOptions. Could not compare dates'), [null, d]; const [u, l] = c.a(e, a, n); d.timeCheck_clean_source = u, d.timeCheck_clean_target = l; let m = '{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9]}',
      p = new RegExp(m += '|{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9][ap]?[m]?}', 'gi'),
      L = t.d(u, l, p, p, !1),
      b = t.b(L[0], L[1]); if (b) { const e = new o.a('dates'); return e.hasError = !1, e.hasTargetDate = p.test(l), [e, d]; }p = new RegExp('[0-1]?[0-9]/[0-3]?[0-9]', 'gi'); const z = t.d(u, l, p, p, !1); L = c.b(L); const A = Object(M.a)(L); if (!(b = t.b(A[0], A[1]))) {
      const e = (function (e, a = [], n = []) {
        let t; const c = [],
          M = [],
          s = [],
          o = [],
          r = e[0].map(e => e.format('MMM. D')),
          i = e[1].map(e => e.format('MMM. D')); for (let a = 0; a < r.length; a += 1) { const M = r[a]; i.includes(M) || (t = `${e[0][a].format('M')}/${e[0][a].format('D')}`, n.includes(t) ? o.push(t) : c.push(M)); } for (let n = 0; n < i.length; n += 1) { const c = i[n]; r.includes(c) || (t = `${e[1][n].format('M')}/${e[1][n].format('D')}`, a.includes(t) ? s.push(t) : M.push(c)); } return [c, M, s, o];
      }(A, z[0], z[1])); e && (d.timeCheck_clean_source = r(e[2], d.timeCheck_clean_source), d.timeCheck_clean_target = r(e[3], d.timeCheck_clean_target)), _ = Object(s.a)(e, d, null, null);
    } return _.checkName = 'dates', _.sourceDates = A[0].slice(), _.targetDates = A[1].slice(), [_, d];
  };
}, function (e, a, n) {
  function t(e, a, n, t = '') {
    let c = Number(a); const M = Number(n),
      s = t.toLowerCase(); c === 12 && s === 'am' && (c = 0), c < 12 && s === 'pm' && (c += 12); let o = c.toString(),
      r = M.toString(); return c < 10 && (o = `0${o}`), M < 10 && (r = `0${r}`), `${o}:${r}`;
  }a.a = function (e) { return e.replace(/([0-2]?[0-9]):([0-5][0-9])([ap]m)?/gi, t); };
}, function (e, a, n) {
  let t,
    c,
    M; !(function (s, o) {
    c = [n(0)], void 0 === (M = typeof (t = o) === 'function' ? t.apply(a, c) : t) || (e.exports = M);
  }(0, (e) => {
    

    let a,
      n = {},
      t = {},
      c = {},
      M = {},
      s = e.version.split('.'),
      o = +s[0],
      r = +s[1]; function i(e) { return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48; } function d(e) {
      let a = 0,
        n = e.split('.'),
        t = n[0],
        c = n[1] || '',
        M = 1,
        s = 0,
        o = 1; for (e.charCodeAt(0) === 45 && (a = 1, o = -1); a < t.length; a++)s = 60 * s + i(t.charCodeAt(a)); for (a = 0; a < c.length; a++)M /= 60, s += i(c.charCodeAt(a)) * M; return s * o;
    } function _(e) { for (let a = 0; a < e.length; a++)e[a] = d(e[a]); } function u(e, a) {
      let n,
        t = []; for (n = 0; n < a.length; n++)t[n] = e[a[n]]; return t;
    } function l(e) {
      let a = e.split('|'),
        n = a[2].split(' '),
        t = a[3].split(''),
        c = a[4].split(' '); return _(n), _(t), _(c), (function (e, a) { for (let n = 0; n < a; n++)e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]); e[a - 1] = 1 / 0; }(c, t.length)), {
        name: a[0], abbrs: u(a[1].split(' '), t), offsets: u(n, t), untils: c, population: 0 | a[5],
      };
    } function m(e) { e && this._set(l(e)); } function p(e) {
      let a = e.toTimeString(),
        n = a.match(/\([a-z ]+\)/i); (n = n && n[0] ? (n = n[0].match(/[A-Z]/g)) ? n.join('') : void 0 : (n = a.match(/[A-Z]{3,5}/g)) ? n[0] : void 0) === 'GMT' && (n = void 0), this.at = +e, this.abbr = n, this.offset = e.getTimezoneOffset();
    } function L(e) { this.zone = e, this.offsetScore = 0, this.abbrScore = 0; } function b(e, a) { for (var n, t; t = 6e4 * ((a.at - e.at) / 12e4 | 0);)(n = new p(new Date(e.at + t))).offset === e.offset ? e = n : a = n; return e; } function z(e, a) { return e.offsetScore !== a.offsetScore ? e.offsetScore - a.offsetScore : e.abbrScore !== a.abbrScore ? e.abbrScore - a.abbrScore : a.zone.population - e.zone.population; } function A(e, a) {
      let n,
        t; for (_(a), n = 0; n < a.length; n++)t = a[n], M[t] = M[t] || {}, M[t][e] = !0;
    } function f(e) {
      let a,
        n,
        t,
        s = e.length,
        o = {},
        r = []; for (a = 0; a < s; a++) for (n in t = M[e[a].offset] || {})t.hasOwnProperty(n) && (o[n] = !0); for (a in o)o.hasOwnProperty(a) && r.push(c[a]); return r;
    } function h() {
      try { const e = Intl.DateTimeFormat().resolvedOptions().timeZone; if (e && e.length > 3) { const a = c[T(e)]; if (a) return a; q(`Moment Timezone found ${e} from the Intl api, but did not have that data loaded.`); } } catch (e) {} let n,
        t,
        M,
        s = (function () {
          let e,
            a,
            n,
            t = (new Date()).getFullYear() - 2,
            c = new p(new Date(t, 0, 1)),
            M = [c]; for (n = 1; n < 48; n++)(a = new p(new Date(t, n, 1))).offset !== c.offset && (e = b(c, a), M.push(e), M.push(new p(new Date(e.at + 6e4)))), c = a; for (n = 0; n < 4; n++)M.push(new p(new Date(t + n, 0, 1))), M.push(new p(new Date(t + n, 6, 1))); return M;
        }()),
        o = s.length,
        r = f(s),
        i = []; for (t = 0; t < r.length; t++) { for (n = new L(y(r[t]), o), M = 0; M < o; M++)n.scoreOffsetAt(s[M]); i.push(n); } return i.sort(z), i.length > 0 ? i[0].zone.name : void 0;
    } function T(e) { return (e || '').toLowerCase().replace(/\//g, '_'); } function O(e) {
      let a,
        t,
        M,
        s; for (typeof e === 'string' && (e = [e]), a = 0; a < e.length; a++)s = T(t = (M = e[a].split('|'))[0]), n[s] = e[a], c[s] = t, A(s, M[2].split(' '));
    } function y(e, a) {
      e = T(e); let M,
        s = n[e]; return s instanceof m ? s : typeof s === 'string' ? (s = new m(s), n[e] = s, s) : t[e] && a !== y && (M = y(t[e], y)) ? ((s = n[e] = new m())._set(M), s.name = c[e], s) : null;
    } function Y(e) {
      let a,
        n,
        M,
        s; for (typeof e === 'string' && (e = [e]), a = 0; a < e.length; a++)M = T((n = e[a].split('|'))[0]), s = T(n[1]), t[M] = s, c[M] = n[0], t[s] = M, c[s] = n[1];
    } function k(e) { const a = e._f === 'X' || e._f === 'x'; return !(!e._a || void 0 !== e._tzm || a); } function q(e) { typeof console !== 'undefined' && typeof console.error === 'function' && console.error(e); } function D(a) {
      let n = Array.prototype.slice.call(arguments, 0, -1),
        t = arguments[arguments.length - 1],
        c = y(t),
        M = e.utc.apply(null, n); return c && !e.isMoment(a) && k(M) && M.add(c.parse(M), 'minutes'), M.tz(t), M;
    }(o < 2 || o === 2 && r < 6) && q(`Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ${e.version}. See momentjs.com`), m.prototype = {
      _set(e) { this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population; },
      _index (e) {
 let a,
        n = +e,
        t = this.untils; for (a = 0; a < t.length; a++) if (n < t[a]) return a; 
},
      parse (e) {
        let a,
          n,
          t,
          c,
          M = +e,
          s = this.offsets,
          o = this.untils,
          r = o.length - 1; for (c = 0; c < r; c++) if (a = s[c], n = s[c + 1], t = s[c ? c - 1 : c], a < n && D.moveAmbiguousForward ? a = n : a > t && D.moveInvalidForward && (a = t), M < o[c] - 6e4 * a) return s[c]; return s[r]; 
},
      abbr (e) { return this.abbrs[this._index(e)]; },
      offset (e) { return q('zone.offset has been deprecated in favor of zone.utcOffset'), this.offsets[this._index(e)]; },
      utcOffset (e) { return this.offsets[this._index(e)]; },
    }, L.prototype.scoreOffsetAt = function (e) { this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, '') !== e.abbr && this.abbrScore++; }, D.version = '0.5.14', D.dataVersion = '', D._zones = n, D._links = t, D._names = c, D.add = O, D.link = Y, D.load = function (e) { O(e.zones), Y(e.links), D.dataVersion = e.version; }, D.zone = y, D.zoneExists = function e(a) { return e.didShowError || (e.didShowError = !0, q(`moment.tz.zoneExists('${a}') has been deprecated in favor of !moment.tz.zone('${a}')`)), !!y(a); }, D.guess = function (e) { return a && !e || (a = h()), a; }, D.names = function () {
      let e,
        a = []; for (e in c)c.hasOwnProperty(e) && (n[e] || n[t[e]]) && c[e] && a.push(c[e]); return a.sort();
    }, D.Zone = m, D.unpack = l, D.unpackBase60 = d, D.needsOffset = k, D.moveInvalidForward = !0, D.moveAmbiguousForward = !1; let W,
      N = e.fn; function g(e) { return function () { return this._z ? this._z.abbr(this) : e.call(this); }; }e.tz = D, e.defaultZone = null, e.updateOffset = function (a, n) {
      let t,
        c = e.defaultZone; void 0 === a._z && (c && k(a) && !a._isUTC && (a._d = e.utc(a._a)._d, a.utc().add(c.parse(a), 'minutes')), a._z = c), a._z && (t = a._z.utcOffset(a), Math.abs(t) < 16 && (t /= 60), void 0 !== a.utcOffset ? a.utcOffset(-t, n) : a.zone(t, n));
    }, N.tz = function (a, n) { return a ? (this._z = y(a), this._z ? e.updateOffset(this, n) : q(`Moment Timezone has no data for ${a}. See http://momentjs.com/timezone/docs/#/data-loading/.`), this) : this._z ? this._z.name : void 0; }, N.zoneName = g(N.zoneName), N.zoneAbbr = g(N.zoneAbbr), N.utc = (W = N.utc, function () { return this._z = null, W.apply(this, arguments); }), e.tz.setDefault = function (a) { return (o < 2 || o === 2 && r < 9) && q(`Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ${e.version}.`), e.defaultZone = a ? y(a) : null, e; }; const S = e.momentProperties; return Object.prototype.toString.call(S) === '[object Array]' ? (S.push('_z'), S.push('_a')) : S && (S._z = null), e;
  }));
}, function (e, a) { e.exports = function (e) { return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, 'loaded', { enumerable: !0, get() { return e.l; } }), Object.defineProperty(e, 'id', { enumerable: !0, get() { return e.i; } }), e.webpackPolyfill = 1), e; }; }, function (e, a, n) {
  const t = {
    './af': 6, './af.js': 6, './ar': 7, './ar-dz': 8, './ar-dz.js': 8, './ar-kw': 9, './ar-kw.js': 9, './ar-ly': 10, './ar-ly.js': 10, './ar-ma': 11, './ar-ma.js': 11, './ar-sa': 12, './ar-sa.js': 12, './ar-tn': 13, './ar-tn.js': 13, './ar.js': 7, './az': 14, './az.js': 14, './be': 15, './be.js': 15, './bg': 16, './bg.js': 16, './bm': 17, './bm.js': 17, './bn': 18, './bn.js': 18, './bo': 19, './bo.js': 19, './br': 20, './br.js': 20, './bs': 21, './bs.js': 21, './ca': 22, './ca.js': 22, './cs': 23, './cs.js': 23, './cv': 24, './cv.js': 24, './cy': 25, './cy.js': 25, './da': 26, './da.js': 26, './de': 27, './de-at': 28, './de-at.js': 28, './de-ch': 29, './de-ch.js': 29, './de.js': 27, './dv': 30, './dv.js': 30, './el': 31, './el.js': 31, './en-au': 32, './en-au.js': 32, './en-ca': 33, './en-ca.js': 33, './en-gb': 34, './en-gb.js': 34, './en-ie': 35, './en-ie.js': 35, './en-nz': 36, './en-nz.js': 36, './eo': 37, './eo.js': 37, './es': 38, './es-do': 39, './es-do.js': 39, './es-us': 40, './es-us.js': 40, './es.js': 38, './et': 41, './et.js': 41, './eu': 42, './eu.js': 42, './fa': 43, './fa.js': 43, './fi': 44, './fi.js': 44, './fo': 45, './fo.js': 45, './fr': 46, './fr-ca': 47, './fr-ca.js': 47, './fr-ch': 48, './fr-ch.js': 48, './fr.js': 46, './fy': 49, './fy.js': 49, './gd': 50, './gd.js': 50, './gl': 51, './gl.js': 51, './gom-latn': 52, './gom-latn.js': 52, './gu': 53, './gu.js': 53, './he': 54, './he.js': 54, './hi': 55, './hi.js': 55, './hr': 56, './hr.js': 56, './hu': 57, './hu.js': 57, './hy-am': 58, './hy-am.js': 58, './id': 59, './id.js': 59, './is': 60, './is.js': 60, './it': 61, './it.js': 61, './ja': 62, './ja.js': 62, './jv': 63, './jv.js': 63, './ka': 64, './ka.js': 64, './kk': 65, './kk.js': 65, './km': 66, './km.js': 66, './kn': 67, './kn.js': 67, './ko': 68, './ko.js': 68, './ky': 69, './ky.js': 69, './lb': 70, './lb.js': 70, './lo': 71, './lo.js': 71, './lt': 72, './lt.js': 72, './lv': 73, './lv.js': 73, './me': 74, './me.js': 74, './mi': 75, './mi.js': 75, './mk': 76, './mk.js': 76, './ml': 77, './ml.js': 77, './mr': 78, './mr.js': 78, './ms': 79, './ms-my': 80, './ms-my.js': 80, './ms.js': 79, './mt': 81, './mt.js': 81, './my': 82, './my.js': 82, './nb': 83, './nb.js': 83, './ne': 84, './ne.js': 84, './nl': 85, './nl-be': 86, './nl-be.js': 86, './nl.js': 85, './nn': 87, './nn.js': 87, './pa-in': 88, './pa-in.js': 88, './pl': 89, './pl.js': 89, './pt': 90, './pt-br': 91, './pt-br.js': 91, './pt.js': 90, './ro': 92, './ro.js': 92, './ru': 93, './ru.js': 93, './sd': 94, './sd.js': 94, './se': 95, './se.js': 95, './si': 96, './si.js': 96, './sk': 97, './sk.js': 97, './sl': 98, './sl.js': 98, './sq': 99, './sq.js': 99, './sr': 100, './sr-cyrl': 101, './sr-cyrl.js': 101, './sr.js': 100, './ss': 102, './ss.js': 102, './sv': 103, './sv.js': 103, './sw': 104, './sw.js': 104, './ta': 105, './ta.js': 105, './te': 106, './te.js': 106, './tet': 107, './tet.js': 107, './th': 108, './th.js': 108, './tl-ph': 109, './tl-ph.js': 109, './tlh': 110, './tlh.js': 110, './tr': 111, './tr.js': 111, './tzl': 112, './tzl.js': 112, './tzm': 113, './tzm-latn': 114, './tzm-latn.js': 114, './tzm.js': 113, './uk': 115, './uk.js': 115, './ur': 116, './ur.js': 116, './uz': 117, './uz-latn': 118, './uz-latn.js': 118, './uz.js': 117, './vi': 119, './vi.js': 119, './x-pseudo': 120, './x-pseudo.js': 120, './yo': 121, './yo.js': 121, './zh-cn': 122, './zh-cn.js': 122, './zh-hk': 123, './zh-hk.js': 123, './zh-tw': 124, './zh-tw.js': 124,
  }; function c(e) { return n(M(e)); } function M(e) { const a = t[e]; if (!(a + 1)) throw new Error(`Cannot find module '${e}'.`); return a; }c.keys = function () { return Object.keys(t); }, c.resolve = M, e.exports = c, c.id = 142;
}, function (e, a) { e.exports = { version: '2017c', zones: ['Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5', 'Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5', 'Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5', 'Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5', 'Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6', 'Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4', 'Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5', 'Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6', 'Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5', 'Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3', 'Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4', 'Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5', 'Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0', 'Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5', 'Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5', 'Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5', 'Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5', 'Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5', 'Africa/Windhoek|+0130 SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|01213454545454545454545454545454545454545454545454543|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4', 'America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326', 'America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4', 'America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3', 'America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4', 'America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0', 'America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0', 'America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0', 'America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0', 'America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0', 'America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0', 'America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0', 'America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0', 'America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0', 'America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0', 'America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0', 'America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0', 'America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4', 'America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5', 'America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2', 'America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5', 'America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3', 'America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4', 'America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5', 'America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3', 'America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2', 'America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2', 'America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5', 'America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4', 'America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2', 'America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4', 'America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4', 'America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5', 'America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3', 'America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5', 'America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5', 'America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4', 'America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5', 'America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2', 'America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4', 'America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8', 'America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2', 'America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3', 'America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5', 'America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5', 'America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5', 'America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3', 'America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5', 'America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5', 'America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2', 'America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5', 'America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3', 'America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3', 'America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2', 'America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2', 'America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5', 'America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5', 'America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4', 'America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4', 'America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5', 'America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4', 'America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2', 'America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2', 'America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4', 'America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3', 'America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/La_Paz|CMT BOST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5', 'America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6', 'America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6', 'America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4', 'America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5', 'America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5', 'America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4', 'America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4', 'America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4', 'America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2', 'America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5', 'America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2', 'America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6', 'America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2', 'America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3', 'America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5', 'America/Montevideo|MMT -0330 -03 -02 -0230|3I.I 3u 30 20 2u|012121212121212121212121213232323232324242423243232323232323232323232323232323232323232|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5', 'America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5', 'America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4', 'America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6', 'America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2', 'America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2', 'America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2', 'America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3', 'America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2', 'America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4', 'America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5', 'America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5', 'America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4', 'America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4', 'America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5', 'America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0', 'America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842', 'America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2', 'America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5', 'America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4', 'America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229', 'America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4', 'America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5', 'America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5', 'America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6', 'America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452', 'America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2', 'America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4', 'America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3', 'America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5', 'America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656', 'America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4', 'America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5', 'America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3', 'America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4', 'America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642', 'America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3', 'Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212|-2q00 1DjS0 T90 40P0 KL0 blz0|10', 'Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70', 'Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80', 'Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1', 'Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60', 'Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5', 'Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40', 'Antarctica/Rothera|-00 -03|0 30|01|gOo0|130', 'Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20', 'Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40', 'Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25', 'Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4', 'Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5', 'Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5', 'Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5', 'Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3', 'Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4', 'Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4', 'Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4', 'Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0', 'Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5', 'Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4', 'Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5', 'Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6', 'Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0', 'Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5', 'Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4', 'Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4', 'Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6', 'Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4', 'Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3', 'Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6', 'Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5', 'Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6', 'Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5', 'Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4', 'Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5', 'Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4', 'Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00', 'Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5', 'Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4', 'Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5', 'Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5', 'Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3', 'Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4', 'Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6', 'Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6', 'Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4', 'Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4', 'Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5', 'Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4', 'Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6', 'Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5', 'Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5', 'Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2', 'Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5', 'Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5', 'Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4', 'Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4', 'Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3', 'Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5', 'Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6', 'Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4', 'Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4', 'Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5', 'Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5', 'Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4', 'Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4', 'Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|01231|-2um8n 97XR 1lTzu 2Onc0|29e5', 'Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4', 'Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5', 'Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4', 'Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4', 'Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6', 'Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2', 'Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5', 'Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5', 'Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5', 'Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6', 'Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3', 'Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJH0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6', 'Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5', 'Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5', 'Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2', 'Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4', 'Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4', 'Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5', 'Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5', 'Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4', 'Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3', 'Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4', 'Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4', 'Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3', 'Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4', 'Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4', 'Atlantic/South_Georgia|-02|20|0||30', 'Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2', 'Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5', 'Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5', 'Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5', 'Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3', 'Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746', 'Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4', 'Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368', 'Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4', 'Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347', 'Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10', 'Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5', 'Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5', 'CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00', 'CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2', 'EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00', 'EST|EST|50|0|', 'EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5', 'Etc/GMT+0|GMT|0|0|', 'Etc/GMT+1|-01|10|0|', 'Etc/GMT+10|-10|a0|0|', 'Etc/GMT+11|-11|b0|0|', 'Etc/GMT+12|-12|c0|0|', 'Etc/GMT+3|-03|30|0|', 'Etc/GMT+4|-04|40|0|', 'Etc/GMT+5|-05|50|0|', 'Etc/GMT+6|-06|60|0|', 'Etc/GMT+7|-07|70|0|', 'Etc/GMT+8|-08|80|0|', 'Etc/GMT+9|-09|90|0|', 'Etc/GMT-1|+01|-10|0|', 'Pacific/Port_Moresby|+10|-a0|0||25e4', 'Pacific/Pohnpei|+11|-b0|0||34e3', 'Pacific/Tarawa|+12|-c0|0||29e3', 'Etc/GMT-13|+13|-d0|0|', 'Etc/GMT-14|+14|-e0|0|', 'Etc/GMT-2|+02|-20|0|', 'Etc/GMT-3|+03|-30|0|', 'Etc/GMT-4|+04|-40|0|', 'Etc/GMT-5|+05|-50|0|', 'Etc/GMT-6|+06|-60|0|', 'Indian/Christmas|+07|-70|0||21e2', 'Etc/GMT-8|+08|-80|0|', 'Pacific/Palau|+09|-90|0||21e3', 'Etc/UCT|UCT|0|0|', 'Etc/UTC|UTC|0|0|', 'Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5', 'Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3', 'Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0', 'Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5', 'Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6', 'Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5', 'Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5', 'Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5', 'Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5', 'Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5', 'Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5', 'Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4', 'Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4', 'Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5', 'Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3', 'Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5', 'Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4', 'Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5', 'Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4', 'Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5', 'Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4', 'Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5', 'Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4', 'Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5', 'Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3', 'Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6', 'Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6', 'Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4', 'Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5', 'Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5', 'Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810', 'Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4', 'Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5', 'Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5', 'Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4', 'Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4', 'Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0', 'Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4', 'Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5', 'Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4', 'Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5', 'Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5', 'Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4', 'HST|HST|a0|0|', 'Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2', 'Indian/Cocos|+0630|-6u|0||596', 'Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130', 'Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3', 'Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4', 'Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4', 'Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4', 'Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3', 'MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00', 'MST|MST|70|0|', 'MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600', 'PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0', 'Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3', 'Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4', 'Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3', 'Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B8n0|1', 'Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483', 'Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4', 'Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3', 'Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125', 'Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4', 'Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4', 'Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4', 'Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B8nk|51e2', 'Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2', 'Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3', 'Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2', 'Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2', 'Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3', 'Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2', 'Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4', 'Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3', 'Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56', 'Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3', 'Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4', 'Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3', 'WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00'], links: ['Africa/Abidjan|Africa/Bamako', 'Africa/Abidjan|Africa/Banjul', 'Africa/Abidjan|Africa/Conakry', 'Africa/Abidjan|Africa/Dakar', 'Africa/Abidjan|Africa/Freetown', 'Africa/Abidjan|Africa/Lome', 'Africa/Abidjan|Africa/Nouakchott', 'Africa/Abidjan|Africa/Ouagadougou', 'Africa/Abidjan|Africa/Sao_Tome', 'Africa/Abidjan|Africa/Timbuktu', 'Africa/Abidjan|Atlantic/St_Helena', 'Africa/Cairo|Egypt', 'Africa/Johannesburg|Africa/Maseru', 'Africa/Johannesburg|Africa/Mbabane', 'Africa/Lagos|Africa/Bangui', 'Africa/Lagos|Africa/Brazzaville', 'Africa/Lagos|Africa/Douala', 'Africa/Lagos|Africa/Kinshasa', 'Africa/Lagos|Africa/Libreville', 'Africa/Lagos|Africa/Luanda', 'Africa/Lagos|Africa/Malabo', 'Africa/Lagos|Africa/Niamey', 'Africa/Lagos|Africa/Porto-Novo', 'Africa/Maputo|Africa/Blantyre', 'Africa/Maputo|Africa/Bujumbura', 'Africa/Maputo|Africa/Gaborone', 'Africa/Maputo|Africa/Harare', 'Africa/Maputo|Africa/Kigali', 'Africa/Maputo|Africa/Lubumbashi', 'Africa/Maputo|Africa/Lusaka', 'Africa/Nairobi|Africa/Addis_Ababa', 'Africa/Nairobi|Africa/Asmara', 'Africa/Nairobi|Africa/Asmera', 'Africa/Nairobi|Africa/Dar_es_Salaam', 'Africa/Nairobi|Africa/Djibouti', 'Africa/Nairobi|Africa/Kampala', 'Africa/Nairobi|Africa/Mogadishu', 'Africa/Nairobi|Indian/Antananarivo', 'Africa/Nairobi|Indian/Comoro', 'Africa/Nairobi|Indian/Mayotte', 'Africa/Tripoli|Libya', 'America/Adak|America/Atka', 'America/Adak|US/Aleutian', 'America/Anchorage|US/Alaska', 'America/Argentina/Buenos_Aires|America/Buenos_Aires', 'America/Argentina/Catamarca|America/Argentina/ComodRivadavia', 'America/Argentina/Catamarca|America/Catamarca', 'America/Argentina/Cordoba|America/Cordoba', 'America/Argentina/Cordoba|America/Rosario', 'America/Argentina/Jujuy|America/Jujuy', 'America/Argentina/Mendoza|America/Mendoza', 'America/Atikokan|America/Coral_Harbour', 'America/Chicago|US/Central', 'America/Curacao|America/Aruba', 'America/Curacao|America/Kralendijk', 'America/Curacao|America/Lower_Princes', 'America/Denver|America/Shiprock', 'America/Denver|Navajo', 'America/Denver|US/Mountain', 'America/Detroit|US/Michigan', 'America/Edmonton|Canada/Mountain', 'America/Fort_Wayne|America/Indiana/Indianapolis', 'America/Fort_Wayne|America/Indianapolis', 'America/Fort_Wayne|US/East-Indiana', 'America/Halifax|Canada/Atlantic', 'America/Havana|Cuba', 'America/Indiana/Knox|America/Knox_IN', 'America/Indiana/Knox|US/Indiana-Starke', 'America/Jamaica|Jamaica', 'America/Kentucky/Louisville|America/Louisville', 'America/Los_Angeles|US/Pacific', 'America/Los_Angeles|US/Pacific-New', 'America/Manaus|Brazil/West', 'America/Mazatlan|Mexico/BajaSur', 'America/Mexico_City|Mexico/General', 'America/New_York|US/Eastern', 'America/Noronha|Brazil/DeNoronha', 'America/Panama|America/Cayman', 'America/Phoenix|US/Arizona', 'America/Port_of_Spain|America/Anguilla', 'America/Port_of_Spain|America/Antigua', 'America/Port_of_Spain|America/Dominica', 'America/Port_of_Spain|America/Grenada', 'America/Port_of_Spain|America/Guadeloupe', 'America/Port_of_Spain|America/Marigot', 'America/Port_of_Spain|America/Montserrat', 'America/Port_of_Spain|America/St_Barthelemy', 'America/Port_of_Spain|America/St_Kitts', 'America/Port_of_Spain|America/St_Lucia', 'America/Port_of_Spain|America/St_Thomas', 'America/Port_of_Spain|America/St_Vincent', 'America/Port_of_Spain|America/Tortola', 'America/Port_of_Spain|America/Virgin', 'America/Regina|Canada/Saskatchewan', 'America/Rio_Branco|America/Porto_Acre', 'America/Rio_Branco|Brazil/Acre', 'America/Santiago|Chile/Continental', 'America/Sao_Paulo|Brazil/East', 'America/St_Johns|Canada/Newfoundland', 'America/Tijuana|America/Ensenada', 'America/Tijuana|America/Santa_Isabel', 'America/Tijuana|Mexico/BajaNorte', 'America/Toronto|America/Montreal', 'America/Toronto|Canada/Eastern', 'America/Vancouver|Canada/Pacific', 'America/Whitehorse|Canada/Yukon', 'America/Winnipeg|Canada/Central', 'Asia/Ashgabat|Asia/Ashkhabad', 'Asia/Bangkok|Asia/Phnom_Penh', 'Asia/Bangkok|Asia/Vientiane', 'Asia/Dhaka|Asia/Dacca', 'Asia/Dubai|Asia/Muscat', 'Asia/Ho_Chi_Minh|Asia/Saigon', 'Asia/Hong_Kong|Hongkong', 'Asia/Jerusalem|Asia/Tel_Aviv', 'Asia/Jerusalem|Israel', 'Asia/Kathmandu|Asia/Katmandu', 'Asia/Kolkata|Asia/Calcutta', 'Asia/Kuala_Lumpur|Asia/Singapore', 'Asia/Kuala_Lumpur|Singapore', 'Asia/Macau|Asia/Macao', 'Asia/Makassar|Asia/Ujung_Pandang', 'Asia/Nicosia|Europe/Nicosia', 'Asia/Qatar|Asia/Bahrain', 'Asia/Rangoon|Asia/Yangon', 'Asia/Riyadh|Asia/Aden', 'Asia/Riyadh|Asia/Kuwait', 'Asia/Seoul|ROK', 'Asia/Shanghai|Asia/Chongqing', 'Asia/Shanghai|Asia/Chungking', 'Asia/Shanghai|Asia/Harbin', 'Asia/Shanghai|PRC', 'Asia/Taipei|ROC', 'Asia/Tehran|Iran', 'Asia/Thimphu|Asia/Thimbu', 'Asia/Tokyo|Japan', 'Asia/Ulaanbaatar|Asia/Ulan_Bator', 'Asia/Urumqi|Asia/Kashgar', 'Atlantic/Faroe|Atlantic/Faeroe', 'Atlantic/Reykjavik|Iceland', 'Atlantic/South_Georgia|Etc/GMT+2', 'Australia/Adelaide|Australia/South', 'Australia/Brisbane|Australia/Queensland', 'Australia/Broken_Hill|Australia/Yancowinna', 'Australia/Darwin|Australia/North', 'Australia/Hobart|Australia/Tasmania', 'Australia/Lord_Howe|Australia/LHI', 'Australia/Melbourne|Australia/Victoria', 'Australia/Perth|Australia/West', 'Australia/Sydney|Australia/ACT', 'Australia/Sydney|Australia/Canberra', 'Australia/Sydney|Australia/NSW', 'Etc/GMT+0|Etc/GMT', 'Etc/GMT+0|Etc/GMT-0', 'Etc/GMT+0|Etc/GMT0', 'Etc/GMT+0|Etc/Greenwich', 'Etc/GMT+0|GMT', 'Etc/GMT+0|GMT+0', 'Etc/GMT+0|GMT-0', 'Etc/GMT+0|GMT0', 'Etc/GMT+0|Greenwich', 'Etc/UCT|UCT', 'Etc/UTC|Etc/Universal', 'Etc/UTC|Etc/Zulu', 'Etc/UTC|UTC', 'Etc/UTC|Universal', 'Etc/UTC|Zulu', 'Europe/Belgrade|Europe/Ljubljana', 'Europe/Belgrade|Europe/Podgorica', 'Europe/Belgrade|Europe/Sarajevo', 'Europe/Belgrade|Europe/Skopje', 'Europe/Belgrade|Europe/Zagreb', 'Europe/Chisinau|Europe/Tiraspol', 'Europe/Dublin|Eire', 'Europe/Helsinki|Europe/Mariehamn', 'Europe/Istanbul|Asia/Istanbul', 'Europe/Istanbul|Turkey', 'Europe/Lisbon|Portugal', 'Europe/London|Europe/Belfast', 'Europe/London|Europe/Guernsey', 'Europe/London|Europe/Isle_of_Man', 'Europe/London|Europe/Jersey', 'Europe/London|GB', 'Europe/London|GB-Eire', 'Europe/Moscow|W-SU', 'Europe/Oslo|Arctic/Longyearbyen', 'Europe/Oslo|Atlantic/Jan_Mayen', 'Europe/Prague|Europe/Bratislava', 'Europe/Rome|Europe/San_Marino', 'Europe/Rome|Europe/Vatican', 'Europe/Warsaw|Poland', 'Europe/Zurich|Europe/Busingen', 'Europe/Zurich|Europe/Vaduz', 'Indian/Christmas|Etc/GMT-7', 'Pacific/Auckland|Antarctica/McMurdo', 'Pacific/Auckland|Antarctica/South_Pole', 'Pacific/Auckland|NZ', 'Pacific/Chatham|NZ-CHAT', 'Pacific/Easter|Chile/EasterIsland', 'Pacific/Guam|Pacific/Saipan', 'Pacific/Honolulu|Pacific/Johnston', 'Pacific/Honolulu|US/Hawaii', 'Pacific/Kwajalein|Kwajalein', 'Pacific/Pago_Pago|Pacific/Midway', 'Pacific/Pago_Pago|Pacific/Samoa', 'Pacific/Pago_Pago|US/Samoa', 'Pacific/Palau|Etc/GMT-9', 'Pacific/Pohnpei|Etc/GMT-11', 'Pacific/Pohnpei|Pacific/Ponape', 'Pacific/Port_Moresby|Etc/GMT-10', 'Pacific/Port_Moresby|Pacific/Chuuk', 'Pacific/Port_Moresby|Pacific/Truk', 'Pacific/Port_Moresby|Pacific/Yap', 'Pacific/Tarawa|Etc/GMT-12', 'Pacific/Tarawa|Pacific/Funafuti', 'Pacific/Tarawa|Pacific/Wake', 'Pacific/Tarawa|Pacific/Wallis'] }; }, function (e, a, n) {
  let t = n(2),
    c = n(4),
    M = n(5),
    s = n(125),
    o = n(1); a.a = function (e, a, n, r) {
    if (!c.c(n)) return r.timeCheck_clean_source = e, r.timeCheck_clean_target = a, t.c('Invalid checkOptions. Could not compare dates'), [new o.a('dates-tz', !1), r]; let i = null; const d = n.sourceTimeZone || 'Asia/Tokyo',
      _ = n.targetTimeZone || 'Asia/Tokyo',
      [u, l] = c.a(e, a, n); r.timeCheck_clean_source = u, r.timeCheck_clean_target = l; const m = new RegExp('{[0-9]{4}-[0-1]?[0-9]-[0-3]?[0-9] [0-2]?[0-9]:[0-5][0-9]}', 'gi'); let p = t.d(u, l, m, m, !1); p = c.b(p); const L = Object(M.a)(p, d, _); for (let e = L[0].length - 1; e >= 0; e -= 1) for (let a = 0; a < L[1].length; a += 1) if (L[0][e].isSame(L[1][a])) { L[0].splice(e, 1), L[1].splice(a, 1); break; } return (i = Object(s.a)(L, r, d, _)).checkName = 'dates-tz', i.hasTargetDate = m.test(l), [i, r];
  };
}, function (e, a, n) {
  let t = n(146),
    c = n.n(t),
    M = n(2),
    s = n(1),
    o = n(147),
    r = n(148); function i(e, a) { const n = a.toLowerCase(); return r.a[n] ? M.e(r.a[n], e, 'gi') : e; } function d(e) { return e.length === 0 ? ['nothing'] : e.map(e => c()(e)); } function _(e, a) { const n = new s.a('numbers'); let [t, c] = e; return M.b(t, c) || (t = d(t), c = d(c), n.hasError = !0, n.HTML = `Found <span class="text-warning">${t.join(', ')}</span> in source and <span class="text-warning">${c.join(', ')}</span> in target.`, n.plainText = `Found ${t.join(', ')} in source and ${c.join(', ')} in target.`, n.description = 'Numbers in source should be present in target and vice versa.'), [n, a]; } function u(e, a, n) { const t = new RegExp('[0-9]+', 'gi'); return (function (e, a, n) { if (void 0 === a) return _(e, n); const t = e[0].reduce(o.b, 0); let c = e[1].reduce(o.b, 0); return t > c && a.indexOf('once') > 0 && (e[1].push('1'), e[1].sort(), c += 1), t > c && a.indexOf(' per ') > 0 && (e[1].push('1'), e[1].sort(), c += 1), _(e, n); }(M.d(e, a, t, t), a, n)); } function l(e, a, n, t) {
    let c = Object(o.c)(e, n.sourceLang),
      M = Object(o.c)(a, n.targetLang); return c = i(c, n.sourceLang), M = i(M, n.targetLang), n.numericalLetters && (M = Object(o.a)(M)), (function (e, a, n, t) {
      let c = e,
        M = a; return n.numIgnoreSource && (c = Object(o.d)(c, n.numIgnoreSource)), n.numIgnoreTarget && (M = Object(o.d)(M, n.numIgnoreTarget)), u(c, M, t);
    }(c, M, n, t));
  } function m(e, a, n, t) { return (function (e, a, n, t) { return l(e.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi, ' '), a.replace(/{[0-9]{4}-[0-1]?[0-9].+}|{[0-2][0-9]:[0-5][0-9]}/gi, ' '), n, t); }(M.g(e), M.g(a), n, t)); }a.a = function (e, a, n, t) {
    let c = e,
      M = a,
      s = n; return typeof t === 'object' && t !== null && (t.timeCheck_clean_source && (c = t.timeCheck_clean_source), t.timeCheck_clean_target && (M = t.timeCheck_clean_target)), typeof s === 'object' && s !== null ? (s.sourceLang || (s.sourceLang = 'ja'), s.targetLang || (s.targetLang = 'en')) : s = { sourceLang: 'ja', targetLang: 'en' }, m(c, M, s, t);
  };
}, function (e, a) {
  function n(e, a, n) {
    let t,
      c; switch (a = a || ',', n = n || '.', typeof e) { case 'string': if (e.length < (e[0] === '-' ? 5 : 4)) return e; c = e, e = n !== '.' ? Number(e.replace(n, '.')) : Number(e); break; case 'number': c = String(e); break; default: return e; } return e > -1e3 && e < 1e3 || isNaN(e) || !isFinite(e) ? c : ((t = c.lastIndexOf(n)) > -1 ? (t = c.slice(t), c = c.slice(0, -t.length)) : t = null, c = (function (e, a) {
      let n,
        t,
        c,
        M; c = e[0] === '-' ? 1 : 0, n = e.length - c - 1, t = n % 3 + 1 + c, (M = []).push(e.slice(0, t)); for (;t < e.length;)M.push(e.substr(t, 3)), t += 3; return M.join(a);
    }(c, a)), t != null ? c + t : c);
  }e.exports = n, e.exports.bindWith = function (e, a) { return function (t) { return n(t, e, a); }; };
}, function (e, a, n) {
  function t(e, a, n) { const t = Number(a); return Number.isNaN(t) ? e : t * (n === 'K' ? 1e3 : 1e6); } function c(e) { return e.replace(/([0-9]*?\.?[0-9])([KM])(?![a-zA-Z0-9])/g, t); } function M(e, a) { const n = a.toLowerCase(); return n === 'ja' || n === 'en' ? e.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2') : n === 'es' ? e.replace(/([0-9]+)\.([0-9]{3})/g, '$1$2').replace(/([0-9]+)\.([0-9]{3})/g, '$1$2') : e.replace(/([0-9]+),([0-9]{3})/g, '$1$2').replace(/([0-9]+),([0-9]{3})/g, '$1$2'); } function s(e, a) { let n = e; try { a.forEach((e) => { n = n.replace(e[0], e[1]); }); } catch (e) {} return n; } function o(e, a) { return a === '1' ? e + 1 : e; }n.d(a, 'a', () => c), n.d(a, 'c', () => M), n.d(a, 'd', () => s), n.d(a, 'b', () => o);
}, function (e, a, n) {
  a.a = { ja: [['\u30c8\u30ea\u30d7\u30eb', ' 3 '], ['\u30c0\u30d6\u30eb', ' 2 '], ['\u5343', '000 '], ['(\\d+)\\.(\\d)\u4e07', '$1$2000 '], ['\u4e07', '0000 '], ['(\\d+)\\.(\\d)\u5104', '$1$20000000 '], ['(\\d)\u5104', '$100000000 '], ['1\u3064\u76ee', ''], ['\u2460', '1 '], ['\u2461', '2 '], ['\u2462', '3 '], ['\u2463', '4 '], ['\u2464', '5 '], ['\u2465', '6 '], ['\u7b2c\u4e00', '1 '], ['\u7b2c\u4e8c', '2 '], ['\u7b2c\u4e09', '3 '], ['\u7b2c\u56db', '4 '], ['\u7b2c\u4e94', '5 '], ['[1]?[0-9]\u6708', 'month'], ['\u5343\u8f09\u4e00\u9047', '']], en: [['doubl', ' 2 '], ['second\\s', ' 2 '], ['twice', ' 2 '], ['third', ' 3 '], ['tripl', ' 3 '], ['quadrupl', ' 4 '], ['quintupl', ' 5 '], ['thousand', ' 000 '], ['(\\d+)\\.(\\d)\\smillion', '$1$200000'], ['(\\d+)\\smillion', ' $1000000 '], ['(\\d+)\\.(\\d)\\sbillion', '$1$200000000'], ['(\\d+)\\sbillion', ' $1000000000 ']], es: [['doble', ' 2 '], ['triple', ' 3 '], ['(\\d+),(\\d)\\smillones', '$1$200000'], ['(\\d+)\\smillon', ' $1000000 ']] };
}, function (e, a, n) {
  let t = n(3),
    c = n.n(t),
    M = n(2),
    s = n(1),
    o = n(150); let r,
    i,
    d; function _(e, a, n) {
    const t = Number(a),
      c = Number(n); let M = Number(a).toString(),
      s = c.toString(); return t < 10 && (M = `0${M}`), c < 10 && (s = `0${s}`), `{${M}:${s}}`;
  } function u(e) { return e.minutes() + 60 * e.hours(); } function l(e, a) { return c.a.isMoment(e) && c.a.isMoment(a) ? u(e) < u(a) ? -1 : u(a) < u(e) ? 1 : 0 : 0; } function m(e) { const a = []; return e.length === 0 ? a.push('nothing') : e.forEach((e) => { a.push(e.format('H:mm')); }), a.join(', '); } function p(e) {
    const a = []; return e.forEach((e) => {
      const n = Object(o.a)(e),
        t = c()(n); t.isValid() ? a.push(t) : M.c('Invalid moment.');
    }), a;
  } function L(e) {
    return (function (e, a) {
      const n = (function (e, a, n) { const t = n === 'date' ? 'MMM.D' : 'H:mm'; let c = !0; return e.length === a.length && (a.forEach((a, n) => { e[n].format(t) !== a.format(t) && (c = !1); }), c); }(e, a)),
        t = new s.a('time'); return n || (t.hasError = !0, t.description = 'Times should match between source and target', t.HTML = `Times: Found <span class="text-time">${m(e)}</span> in source and <span class="text-time">${m(a)}</span> in target.`, t.plainText = `Times: Found ${m(e)} in source and ${m(a)} in target.`), [t, r];
    }(p(e[0]).sort(l), p(e[1]).sort(l)));
  } function b() {
    return i = (i = (i = (i = (i = M.g(i)).replace(/([0-2]?[0-9])\u6642([0-5][0-9])\u5206/g, '$1:$2')).replace(/([0-2]?[0-9])\u6642\u534A/g, '$1:30')).replace(/([0-2]?[0-9])\u6642/g, '$1:00')).replace(/([0-2]?[0-9])[:\uFF1A]([0-5][0-9])(?!})/g, _), d = d.replace(/([0-2]?[0-9]:[0-5][0-9])(?!})/gi, '{$1}'), r.timeCheck_clean_source = i, r.timeCheck_clean_target = d, (function () {
      const e = new RegExp('[0-2]?[0-9][:\uff1a][0-5][0-9]', 'g'),
        a = new RegExp('[0-2]?[0-9]:[0-5][0-9]', 'gi'); return L(M.d(i, d, e, a, !1));
    }());
  }a.a = function (e, a, n, t) { if (i = e, d = a, typeof (r = t) === 'object' && r !== null) { const e = Object.keys(r); e.indexOf('timeCheck_clean_source') > -1 && (i = r.timeCheck_clean_source), e.indexOf('timeCheck_clean_target') > -1 && (d = r.timeCheck_clean_target); } else r = {}; return b(); };
}, function (e, a, n) {
  a.a = function (e) {
    let a = e.toLowerCase(); if (a.indexOf(':') === 1 && (a = `0${a}`), (a = (a = (a = (a = a.replace(/\uFF1A/gi, ':')).replace(/12(:00)?am/gi, '00:00')).replace(/12(:00)?pm/gi, '12:00')).replace(/am/gi, '')).indexOf('pm') > 0) {
      const e = Number(a.slice(0, 2)) + 12,
        n = a.slice(3, 5); a = e.toString() + n;
    } return `19850520T${a.replace(':', '')}`;
  };
}, function (e, a, n) {
  function t(e) { return String.fromCharCode(e.charCodeAt(0) - 65248); }a.a = function (e) { return Object.keys(e).forEach((a) => { e[a].source = e[a].source.replace(/[\uff01-\uff5e]/g, t); }), e; };
}]))));
