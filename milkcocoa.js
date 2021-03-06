! function e(t, r, n) {
    function i(s, a) {
        if (!r[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var f = r[s] = {
                exports: {}
            };
            t[s][0].call(f.exports, function (e) {
                var r = t[s][1][e];
                return i(r ? r : e)
            }, f, f.exports, e, t, r, n)
        }
        return r[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
    return i
}({
    1: [function (e, t, r) {}, {}],
    2: [function (e, t, r) {
        arguments[4][1][0].apply(r, arguments)
    }, {
        dup: 1
    }],
    3: [function (e, t, r) {
        (function (t) {
            "use strict";

            function n() {
                try {
                    var e = new Uint8Array(1);
                    return e.foo = function () {
                        return 42
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (t) {
                    return !1
                }
            }

            function i() {
                return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function o(e, t) {
                if (i() < t) throw new RangeError("Invalid typed array length");
                return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = s.prototype) : (null === e && (e = new s(t)), e.length = t), e
            }

            function s(e, t, r) {
                if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s)) return new s(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return f(this, e)
                }
                return a(this, e, t, r)
            }

            function a(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, r, n) : "string" == typeof t ? l(e, t, r) : d(e, t)
            }

            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number')
            }

            function c(e, t, r, n) {
                return u(t), 0 >= t ? o(e, t) : void 0 !== r ? "string" == typeof n ? o(e, t).fill(r, n) : o(e, t).fill(r) : o(e, t)
            }

            function f(e, t) {
                if (u(t), e = o(e, 0 > t ? 0 : 0 | g(t)), !s.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; t > r; r++) e[r] = 0;
                return e
            }

            function l(e, t, r) {
                if ("string" == typeof r && "" !== r || (r = "utf8"), !s.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                var n = 0 | b(t, r);
                return e = o(e, n), e.write(t, r), e
            }

            function h(e, t) {
                var r = 0 | g(t.length);
                e = o(e, r);
                for (var n = 0; r > n; n += 1) e[n] = 255 & t[n];
                return e
            }

            function p(e, t, r, n) {
                if (t.byteLength, 0 > r || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), s.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = s.prototype) : e = h(e, t), e
            }

            function d(e, t) {
                if (s.isBuffer(t)) {
                    var r = 0 | g(t.length);
                    return e = o(e, r), 0 === e.length ? e : (t.copy(e, 0, 0, r), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || X(t.length) ? o(e, 0) : h(e, t);
                    if ("Buffer" === t.type && $(t.data)) return h(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function g(e) {
                if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                return 0 | e
            }

            function m(e) {
                return +e != e && (e = 0), s.alloc(+e)
            }

            function b(e, t) {
                if (s.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "binary":
                    case "raw":
                    case "raws":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return z(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return K(e).length;
                    default:
                        if (n) return z(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function v(e, t, r) {
                var n = !1;
                if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), 0 >= r) return "";
                if (r >>>= 0, t >>>= 0, t >= r) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return C(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return T(this, t, r);
                    case "ascii":
                        return A(this, t, r);
                    case "binary":
                        return O(this, t, r);
                    case "base64":
                        return j(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return I(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function y(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function _(e, t, r, n) {
                function i(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                var o = 1,
                    s = e.length,
                    a = t.length;
                if (void 0 !== n && (n = String(n).toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, s /= 2, a /= 2, r /= 2
                }
                for (var u = -1, c = 0; s > r + c; c++)
                    if (i(e, r + c) === i(t, -1 === u ? 0 : c - u)) {
                        if (-1 === u && (u = c), c - u + 1 === a) return (r + u) * o
                    } else -1 !== u && (c -= c - u), u = -1;
                return -1
            }

            function w(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n), n > i && (n = i)) : n = i;
                var o = t.length;
                if (o % 2 !== 0) throw new Error("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var s = 0; n > s; s++) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(a)) return s;
                    e[r + s] = a
                }
                return s
            }

            function S(e, t, r, n) {
                return G(z(t, e.length - r), e, r, n)
            }

            function E(e, t, r, n) {
                return G(J(t), e, r, n)
            }

            function k(e, t, r, n) {
                return E(e, t, r, n)
            }

            function x(e, t, r, n) {
                return G(K(t), e, r, n)
            }

            function R(e, t, r, n) {
                return G(Y(t, e.length - r), e, r, n)
            }

            function j(e, t, r) {
                return 0 === t && r === e.length ? Q.fromByteArray(e) : Q.fromByteArray(e.slice(t, r))
            }

            function T(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; r > i;) {
                    var o = e[i],
                        s = null,
                        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (r >= i + a) {
                        var u, c, f, l;
                        switch (a) {
                            case 1:
                                128 > o && (s = o);
                                break;
                            case 2:
                                u = e[i + 1], 128 === (192 & u) && (l = (31 & o) << 6 | 63 & u, l > 127 && (s = l));
                                break;
                            case 3:
                                u = e[i + 1], c = e[i + 2], 128 === (192 & u) && 128 === (192 & c) && (l = (15 & o) << 12 | (63 & u) << 6 | 63 & c, l > 2047 && (55296 > l || l > 57343) && (s = l));
                                break;
                            case 4:
                                u = e[i + 1], c = e[i + 2], f = e[i + 3], 128 === (192 & u) && 128 === (192 & c) && 128 === (192 & f) && (l = (15 & o) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & f, l > 65535 && 1114112 > l && (s = l))
                        }
                    }
                    null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), n.push(s), i += a
                }
                return M(n)
            }

            function M(e) {
                var t = e.length;
                if (Z >= t) return String.fromCharCode.apply(String, e);
                for (var r = "", n = 0; t > n;) r += String.fromCharCode.apply(String, e.slice(n, n += Z));
                return r
            }

            function A(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; r > i; i++) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function O(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; r > i; i++) n += String.fromCharCode(e[i]);
                return n
            }

            function C(e, t, r) {
                var n = e.length;
                (!t || 0 > t) && (t = 0), (!r || 0 > r || r > n) && (r = n);
                for (var i = "", o = t; r > o; o++) i += F(e[o]);
                return i
            }

            function I(e, t, r) {
                for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function L(e, t, r) {
                if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function q(e, t, r, n, i, o) {
                if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || o > t) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function P(e, t, r, n) {
                0 > t && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 2); o > i; i++) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function N(e, t, r, n) {
                0 > t && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 4); o > i; i++) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function U(e, t, r, n, i, o) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (0 > r) throw new RangeError("Index out of range")
            }

            function B(e, t, r, n, i) {
                return i || U(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), V.write(e, t, r, n, 23, 4), r + 4
            }

            function D(e, t, r, n, i) {
                return i || U(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), V.write(e, t, r, n, 52, 8), r + 8
            }

            function W(e) {
                if (e = H(e).replace(ee, ""), e.length < 2) return "";
                for (; e.length % 4 !== 0;) e += "=";
                return e
            }

            function H(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function F(e) {
                return 16 > e ? "0" + e.toString(16) : e.toString(16)
            }

            function z(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, i = null, o = [], s = 0; n > s; s++) {
                    if (r = e.charCodeAt(s), r > 55295 && 57344 > r) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (56320 > r) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = (i - 55296 << 10 | r - 56320) + 65536
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, 128 > r) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (2048 > r) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (65536 > r) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(1114112 > r)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function J(e) {
                for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                return t
            }

            function Y(e, t) {
                for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); s++) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
                return o
            }

            function K(e) {
                return Q.toByteArray(W(e))
            }

            function G(e, t, r, n) {
                for (var i = 0; n > i && !(i + r >= t.length || i >= e.length); i++) t[i + r] = e[i];
                return i
            }

            function X(e) {
                return e !== e
            }
            var Q = e("base64-js"),
                V = e("ieee754"),
                $ = e("isarray");
            r.Buffer = s, r.SlowBuffer = m, r.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : n(), r.kMaxLength = i(), s.poolSize = 8192, s._augment = function (e) {
                return e.__proto__ = s.prototype, e
            }, s.from = function (e, t, r) {
                return a(null, e, t, r)
            }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0
            })), s.alloc = function (e, t, r) {
                return c(null, e, t, r)
            }, s.allocUnsafe = function (e) {
                return f(null, e)
            }, s.allocUnsafeSlow = function (e) {
                return f(null, e)
            }, s.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, s.compare = function (e, t) {
                if (!s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); o > i; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return n > r ? -1 : r > n ? 1 : 0
            }, s.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function (e, t) {
                if (!$(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return s.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; r++) t += e[r].length;
                var n = s.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; r++) {
                    var o = e[r];
                    if (!s.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i), i += o.length
                }
                return n
            }, s.byteLength = b, s.prototype._isBuffer = !0, s.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; e > t; t += 2) y(this, t, t + 1);
                return this
            }, s.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; e > t; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                return this
            }, s.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : v.apply(this, arguments)
            }, s.prototype.equals = function (e) {
                if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e ? !0 : 0 === s.compare(this, e)
            }, s.prototype.inspect = function () {
                var e = "",
                    t = r.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, s.prototype.compare = function (e, t, r, n, i) {
                if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), 0 > t || r > e.length || 0 > n || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
                for (var o = i - n, a = r - t, u = Math.min(o, a), c = this.slice(n, i), f = e.slice(t, r), l = 0; u > l; ++l)
                    if (c[l] !== f[l]) {
                        o = c[l], a = f[l];
                        break
                    }
                return a > o ? -1 : o > a ? 1 : 0
            }, s.prototype.indexOf = function (e, t, r) {
                if ("string" == typeof t ? (r = t, t = 0) : t > 2147483647 ? t = 2147483647 : -2147483648 > t && (t = -2147483648), t >>= 0, 0 === this.length) return -1;
                if (t >= this.length) return -1;
                if (0 > t && (t = Math.max(this.length + t, 0)), "string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)) return 0 === e.length ? -1 : _(this, e, t, r);
                if ("number" == typeof e) return s.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) : _(this, [e], t, r);
                throw new TypeError("val must be string, number or Buffer")
            }, s.prototype.includes = function (e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, s.prototype.write = function (e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t = 0 | t, isFinite(r) ? (r = 0 | r, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i), e.length > 0 && (0 > r || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1;;) switch (n) {
                    case "hex":
                        return w(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return S(this, e, t, r);
                    case "ascii":
                        return E(this, e, t, r);
                    case "binary":
                        return k(this, e, t, r);
                    case "base64":
                        return x(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, e, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, s.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var Z = 4096;
            s.prototype.slice = function (e, t) {
                var r = this.length;
                e = ~~e, t = void 0 === t ? r : ~~t, 0 > e ? (e += r, 0 > e && (e = 0)) : e > r && (e = r), 0 > t ? (t += r, 0 > t && (t = 0)) : t > r && (t = r), e > t && (t = e);
                var n;
                if (s.TYPED_ARRAY_SUPPORT) n = this.subarray(e, t), n.__proto__ = s.prototype;
                else {
                    var i = t - e;
                    n = new s(i, void 0);
                    for (var o = 0; i > o; o++) n[o] = this[o + e]
                }
                return n
            }, s.prototype.readUIntLE = function (e, t, r) {
                e = 0 | e, t = 0 | t, r || L(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, s.prototype.readUIntBE = function (e, t, r) {
                e = 0 | e, t = 0 | t, r || L(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, s.prototype.readUInt8 = function (e, t) {
                return t || L(e, 1, this.length), this[e]
            }, s.prototype.readUInt16LE = function (e, t) {
                return t || L(e, 2, this.length), this[e] | this[e + 1] << 8
            }, s.prototype.readUInt16BE = function (e, t) {
                return t || L(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, s.prototype.readUInt32LE = function (e, t) {
                return t || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, s.prototype.readUInt32BE = function (e, t) {
                return t || L(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, s.prototype.readIntLE = function (e, t, r) {
                e = 0 | e, t = 0 | t, r || L(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n
            }, s.prototype.readIntBE = function (e, t, r) {
                e = 0 | e, t = 0 | t, r || L(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
            }, s.prototype.readInt8 = function (e, t) {
                return t || L(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, s.prototype.readInt16LE = function (e, t) {
                t || L(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt16BE = function (e, t) {
                t || L(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt32LE = function (e, t) {
                return t || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, s.prototype.readInt32BE = function (e, t) {
                return t || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, s.prototype.readFloatLE = function (e, t) {
                return t || L(e, 4, this.length), V.read(this, e, !0, 23, 4)
            }, s.prototype.readFloatBE = function (e, t) {
                return t || L(e, 4, this.length), V.read(this, e, !1, 23, 4)
            }, s.prototype.readDoubleLE = function (e, t) {
                return t || L(e, 8, this.length), V.read(this, e, !0, 52, 8)
            }, s.prototype.readDoubleBE = function (e, t) {
                return t || L(e, 8, this.length), V.read(this, e, !1, 52, 8)
            }, s.prototype.writeUIntLE = function (e, t, r, n) {
                if (e = +e, t = 0 | t, r = 0 | r, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    q(this, e, t, r, i, 0)
                }
                var o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < r && (o *= 256);) this[t + s] = e / o & 255;
                return t + r
            }, s.prototype.writeUIntBE = function (e, t, r, n) {
                if (e = +e, t = 0 | t, r = 0 | r, !n) {
                    var i = Math.pow(2, 8 * r) - 1;
                    q(this, e, t, r, i, 0)
                }
                var o = r - 1,
                    s = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) this[t + o] = e / s & 255;
                return t + r
            }, s.prototype.writeUInt8 = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, s.prototype.writeUInt16LE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
            }, s.prototype.writeUInt16BE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
            }, s.prototype.writeUInt32LE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : N(this, e, t, !0), t + 4
            }, s.prototype.writeUInt32BE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
            }, s.prototype.writeIntLE = function (e, t, r, n) {
                if (e = +e, t = 0 | t, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    q(this, e, t, r, i - 1, -i)
                }
                var o = 0,
                    s = 1,
                    a = 0;
                for (this[t] = 255 & e; ++o < r && (s *= 256);) 0 > e && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + r
            }, s.prototype.writeIntBE = function (e, t, r, n) {
                if (e = +e, t = 0 | t, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    q(this, e, t, r, i - 1, -i)
                }
                var o = r - 1,
                    s = 1,
                    a = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) 0 > e && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                return t + r
            }, s.prototype.writeInt8 = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, s.prototype.writeInt16LE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
            }, s.prototype.writeInt16BE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
            }, s.prototype.writeInt32LE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : N(this, e, t, !0), t + 4
            }, s.prototype.writeInt32BE = function (e, t, r) {
                return e = +e, t = 0 | t, r || q(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : N(this, e, t, !1), t + 4
            }, s.prototype.writeFloatLE = function (e, t, r) {
                return B(this, e, t, !0, r)
            }, s.prototype.writeFloatBE = function (e, t, r) {
                return B(this, e, t, !1, r)
            }, s.prototype.writeDoubleLE = function (e, t, r) {
                return D(this, e, t, !0, r)
            }, s.prototype.writeDoubleBE = function (e, t, r) {
                return D(this, e, t, !1, r)
            }, s.prototype.copy = function (e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && r > n && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (0 > t) throw new RangeError("targetStart out of bounds");
                if (0 > r || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (0 > n) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, o = n - r;
                if (this === e && t > r && n > t)
                    for (i = o - 1; i >= 0; i--) e[i + t] = this[i + r];
                else if (1e3 > o || !s.TYPED_ARRAY_SUPPORT)
                    for (i = 0; o > i; i++) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                return o
            }, s.prototype.fill = function (e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        256 > i && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !s.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e = 255 & e);
                if (0 > t || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (t >= r) return this;
                t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0);
                var o;
                if ("number" == typeof e)
                    for (o = t; r > o; o++) this[o] = e;
                else {
                    var a = s.isBuffer(e) ? e : z(new s(e, n).toString()),
                        u = a.length;
                    for (o = 0; r - t > o; o++) this[o + t] = a[o % u]
                }
                return this
            };
            var ee = /[^+\/0-9A-Za-z-_]/g
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 4,
        ieee754: 5,
        isarray: 6
    }],
    4: [function (e, t, r) {
        "use strict";

        function n() {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, r = e.length; r > t; ++t) u[t] = e[t], c[e.charCodeAt(t)] = t;
            c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
        }

        function i(e) {
            var t, r, n, i, o, s, a = e.length;
            if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            o = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, s = new f(3 * a / 4 - o), n = o > 0 ? a - 4 : a;
            var u = 0;
            for (t = 0, r = 0; n > t; t += 4, r += 3) i = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], s[u++] = i >> 16 & 255, s[u++] = i >> 8 & 255, s[u++] = 255 & i;
            return 2 === o ? (i = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, s[u++] = 255 & i) : 1 === o && (i = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, s[u++] = i >> 8 & 255, s[u++] = 255 & i), s
        }

        function o(e) {
            return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
        }

        function s(e, t, r) {
            for (var n, i = [], s = t; r > s; s += 3) n = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2], i.push(o(n));
            return i.join("")
        }

        function a(e) {
            for (var t, r = e.length, n = r % 3, i = "", o = [], a = 16383, c = 0, f = r - n; f > c; c += a) o.push(s(e, c, c + a > f ? f : c + a));
            return 1 === n ? (t = e[r - 1], i += u[t >> 2], i += u[t << 4 & 63], i += "==") : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i += u[t >> 10], i += u[t >> 4 & 63], i += u[t << 2 & 63], i += "="), o.push(i), o.join("")
        }
        r.toByteArray = i, r.fromByteArray = a;
        var u = [],
            c = [],
            f = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        n()
    }, {}],
    5: [function (e, t, r) {
        r.read = function (e, t, r, n, i) {
            var o, s, a = 8 * i - n - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                f = -7,
                l = r ? i - 1 : 0,
                h = r ? -1 : 1,
                p = e[t + l];
            for (l += h, o = p & (1 << -f) - 1, p >>= -f, f += a; f > 0; o = 256 * o + e[t + l], l += h, f -= 8);
            for (s = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; s = 256 * s + e[t + l], l += h, f -= 8);
            if (0 === o) o = 1 - c;
            else {
                if (o === u) return s ? NaN : (p ? -1 : 1) * (1 / 0);
                s += Math.pow(2, n), o -= c
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n)
        }, r.write = function (e, t, r, n, i, o) {
            var s, a, u, c = 8 * o - i - 1,
                f = (1 << c) - 1,
                l = f >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                d = n ? 1 : -1,
                g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = f) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l), t * u >= 2 && (s++, u /= 2), s + l >= f ? (a = 0, s = f) : s + l >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + p] = 255 & a, p += d, a /= 256, i -= 8);
            for (s = s << i | a, c += i; c > 0; e[r + p] = 255 & s, p += d, s /= 256, c -= 8);
            e[r + p - d] |= 128 * g
        }
    }, {}],
    6: [function (e, t, r) {
        var n = {}.toString;
        t.exports = Array.isArray || function (e) {
            return "[object Array]" == n.call(e)
        }
    }, {}],
    7: [function (e, t, r) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function i(e) {
            return "function" == typeof e
        }

        function o(e) {
            return "number" == typeof e
        }

        function s(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            return void 0 === e
        }
        t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
            if (!o(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function (e) {
            var t, r, n, o, u, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || s(this._events.error) && !this._events.error.length)) {
                if (t = arguments[1], t instanceof Error) throw t;
                throw TypeError('Uncaught, unspecified "error" event.')
            }
            if (r = this._events[e], a(r)) return !1;
            if (i(r)) switch (arguments.length) {
                case 1:
                    r.call(this);
                    break;
                case 2:
                    r.call(this, arguments[1]);
                    break;
                case 3:
                    r.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    o = Array.prototype.slice.call(arguments, 1), r.apply(this, o)
            } else if (s(r))
                for (o = Array.prototype.slice.call(arguments, 1), c = r.slice(), n = c.length, u = 0; n > u; u++) c[u].apply(this, o);
            return !0
        }, n.prototype.addListener = function (e, t) {
            var r;
            if (!i(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? s(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, s(this._events[e]) && !this._events[e].warned && (r = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, r && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
            function r() {
                this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
            }
            if (!i(t)) throw TypeError("listener must be a function");
            var n = !1;
            return r.listener = t, this.on(e, r), this
        }, n.prototype.removeListener = function (e, t) {
            var r, n, o, a;
            if (!i(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (r = this._events[e], o = r.length, n = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (s(r)) {
                for (a = o; a-- > 0;)
                    if (r[a] === t || r[a].listener && r[a].listener === t) {
                        n = a;
                        break
                    }
                if (0 > n) return this;
                1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function (e) {
            var t, r;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (r = this._events[e], i(r)) this.removeListener(e, r);
            else if (r)
                for (; r.length;) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function (e) {
            var t;
            return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function (e) {
            if (this._events) {
                var t = this._events[e];
                if (i(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function (e, t) {
            return e.listenerCount(t)
        }
    }, {}],
    8: [function (e, t, r) {
        var n = e("http"),
            i = t.exports;
        for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
        i.request = function (e, t) {
            return e || (e = {}), e.scheme = "https", e.protocol = "https:", n.request.call(this, e, t)
        }
    }, {
        http: 33
    }],
    9: [function (e, t, r) {
        "function" == typeof Object.create ? t.exports = function (e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function (e, t) {
            e.super_ = t;
            var r = function () {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }, {}],
    10: [function (e, t, r) {
        t.exports = function (e) {
            return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)))
        }
    }, {}],
    11: [function (e, t, r) {
        (function (e) {
            function t(e, t) {
                for (var r = 0, n = e.length - 1; n >= 0; n--) {
                    var i = e[n];
                    "." === i ? e.splice(n, 1) : ".." === i ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--)
                }
                if (t)
                    for (; r--; r) e.unshift("..");
                return e
            }

            function n(e, t) {
                if (e.filter) return e.filter(t);
                for (var r = [], n = 0; n < e.length; n++) t(e[n], n, e) && r.push(e[n]);
                return r
            }
            var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                o = function (e) {
                    return i.exec(e).slice(1)
                };
            r.resolve = function () {
                for (var r = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                    var s = o >= 0 ? arguments[o] : e.cwd();
                    if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                    s && (r = s + "/" + r, i = "/" === s.charAt(0))
                }
                return r = t(n(r.split("/"), function (e) {
                    return !!e
                }), !i).join("/"), (i ? "/" : "") + r || "."
            }, r.normalize = function (e) {
                var i = r.isAbsolute(e),
                    o = "/" === s(e, -1);
                return e = t(n(e.split("/"), function (e) {
                    return !!e
                }), !i).join("/"), e || i || (e = "."), e && o && (e += "/"), (i ? "/" : "") + e
            }, r.isAbsolute = function (e) {
                return "/" === e.charAt(0)
            }, r.join = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return r.normalize(n(e, function (e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e
                }).join("/"))
            }, r.relative = function (e, t) {
                function n(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++);
                    for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                    return t > r ? [] : e.slice(t, r - t + 1)
                }
                e = r.resolve(e).substr(1), t = r.resolve(t).substr(1);
                for (var i = n(e.split("/")), o = n(t.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; s > u; u++)
                    if (i[u] !== o[u]) {
                        a = u;
                        break
                    }
                for (var c = [], u = a; u < i.length; u++) c.push("..");
                return c = c.concat(o.slice(a)), c.join("/")
            }, r.sep = "/", r.delimiter = ":", r.dirname = function (e) {
                var t = o(e),
                    r = t[0],
                    n = t[1];
                return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : "."
            }, r.basename = function (e, t) {
                var r = o(e)[2];
                return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r
            }, r.extname = function (e) {
                return o(e)[3]
            };
            var s = "b" === "ab".substr(-1) ? function (e, t, r) {
                return e.substr(t, r)
            } : function (e, t, r) {
                return 0 > t && (t = e.length + t), e.substr(t, r)
            }
        }).call(this, e("_process"))
    }, {
        _process: 12
    }],
    12: [function (e, t, r) {
        function n() {
            f && a && (f = !1, a.length ? c = a.concat(c) : l = -1, c.length && i())
        }

        function i() {
            if (!f) {
                var e = setTimeout(n);
                f = !0;
                for (var t = c.length; t;) {
                    for (a = c, c = []; ++l < t;) a && a[l].run();
                    l = -1, t = c.length
                }
                a = null, f = !1, clearTimeout(e)
            }
        }

        function o(e, t) {
            this.fun = e, this.array = t
        }

        function s() {}
        var a, u = t.exports = {},
            c = [],
            f = !1,
            l = -1;
        u.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            c.push(new o(e, t)), 1 !== c.length || f || setTimeout(i, 0)
        }, o.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function () {
            return "/"
        }, u.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function () {
            return 0
        }
    }, {}],
    13: [function (e, t, r) {
        (function (e) {
            ! function (n) {
                function i(e) {
                    throw new RangeError(I[e])
                }

                function o(e, t) {
                    for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                    return n
                }

                function s(e, t) {
                    var r = e.split("@"),
                        n = "";
                    r.length > 1 && (n = r[0] + "@", e = r[1]), e = e.replace(C, ".");
                    var i = e.split("."),
                        s = o(i, t).join(".");
                    return n + s
                }

                function a(e) {
                    for (var t, r, n = [], i = 0, o = e.length; o > i;) t = e.charCodeAt(i++), t >= 55296 && 56319 >= t && o > i ? (r = e.charCodeAt(i++), 56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--)) : n.push(t);
                    return n
                }

                function u(e) {
                    return o(e, function (e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += P(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += P(e)
                    }).join("")
                }

                function c(e) {
                    return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : S
                }

                function f(e, t) {
                    return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                }

                function l(e, t, r) {
                    var n = 0;
                    for (e = r ? q(e / R) : e >> 1, e += q(e / t); e > L * k >> 1; n += S) e = q(e / L);
                    return q(n + (L + 1) * e / (e + x))
                }

                function h(e) {
                    var t, r, n, o, s, a, f, h, p, d, g = [],
                        m = e.length,
                        b = 0,
                        v = T,
                        y = j;
                    for (r = e.lastIndexOf(M), 0 > r && (r = 0), n = 0; r > n; ++n) e.charCodeAt(n) >= 128 && i("not-basic"), g.push(e.charCodeAt(n));
                    for (o = r > 0 ? r + 1 : 0; m > o;) {
                        for (s = b, a = 1, f = S; o >= m && i("invalid-input"), h = c(e.charCodeAt(o++)), (h >= S || h > q((w - b) / a)) && i("overflow"), b += h * a, p = y >= f ? E : f >= y + k ? k : f - y, !(p > h); f += S) d = S - p, a > q(w / d) && i("overflow"), a *= d;
                        t = g.length + 1, y = l(b - s, t, 0 == s), q(b / t) > w - v && i("overflow"), v += q(b / t), b %= t, g.splice(b++, 0, v)
                    }
                    return u(g)
                }

                function p(e) {
                    var t, r, n, o, s, u, c, h, p, d, g, m, b, v, y, _ = [];
                    for (e = a(e), m = e.length, t = T, r = 0, s = j, u = 0; m > u; ++u) g = e[u], 128 > g && _.push(P(g));
                    for (n = o = _.length, o && _.push(M); m > n;) {
                        for (c = w, u = 0; m > u; ++u) g = e[u], g >= t && c > g && (c = g);
                        for (b = n + 1, c - t > q((w - r) / b) && i("overflow"), r += (c - t) * b, t = c, u = 0; m > u; ++u)
                            if (g = e[u], t > g && ++r > w && i("overflow"), g == t) {
                                for (h = r, p = S; d = s >= p ? E : p >= s + k ? k : p - s, !(d > h); p += S) y = h - d, v = S - d, _.push(P(f(d + y % v, 0))), h = q(y / v);
                                _.push(P(f(h, 0))), s = l(r, b, n == o), r = 0, ++n
                            }++r, ++t
                    }
                    return _.join("")
                }

                function d(e) {
                    return s(e, function (e) {
                        return A.test(e) ? h(e.slice(4).toLowerCase()) : e
                    })
                }

                function g(e) {
                    return s(e, function (e) {
                        return O.test(e) ? "xn--" + p(e) : e
                    })
                }
                var m = "object" == typeof r && r && !r.nodeType && r,
                    b = "object" == typeof t && t && !t.nodeType && t,
                    v = "object" == typeof e && e;
                v.global !== v && v.window !== v && v.self !== v || (n = v);
                var y, _, w = 2147483647,
                    S = 36,
                    E = 1,
                    k = 26,
                    x = 38,
                    R = 700,
                    j = 72,
                    T = 128,
                    M = "-",
                    A = /^xn--/,
                    O = /[^\x20-\x7E]/,
                    C = /[\x2E\u3002\uFF0E\uFF61]/g,
                    I = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    L = S - E,
                    q = Math.floor,
                    P = String.fromCharCode;
                if (y = {
                        version: "1.4.1",
                        ucs2: {
                            decode: a,
                            encode: u
                        },
                        decode: h,
                        encode: p,
                        toASCII: g,
                        toUnicode: d
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function () {
                    return y
                });
                else if (m && b)
                    if (t.exports == m) b.exports = y;
                    else
                        for (_ in y) y.hasOwnProperty(_) && (m[_] = y[_]);
                else n.punycode = y;
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    14: [function (e, t, r) {
        "use strict";

        function n(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = function (e, t, r, o) {
            t = t || "&", r = r || "=";
            var s = {};
            if ("string" != typeof e || 0 === e.length) return s;
            var a = /\+/g;
            e = e.split(t);
            var u = 1e3;
            o && "number" == typeof o.maxKeys && (u = o.maxKeys);
            var c = e.length;
            u > 0 && c > u && (c = u);
            for (var f = 0; c > f; ++f) {
                var l, h, p, d, g = e[f].replace(a, "%20"),
                    m = g.indexOf(r);
                m >= 0 ? (l = g.substr(0, m), h = g.substr(m + 1)) : (l = g, h = ""), p = decodeURIComponent(l), d = decodeURIComponent(h), n(s, p) ? i(s[p]) ? s[p].push(d) : s[p] = [s[p], d] : s[p] = d
            }
            return s
        };
        var i = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, {}],
    15: [function (e, t, r) {
        "use strict";

        function n(e, t) {
            if (e.map) return e.map(t);
            for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
            return r
        }
        var i = function (e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function (e, t, r, a) {
            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? n(s(e), function (s) {
                var a = encodeURIComponent(i(s)) + r;
                return o(e[s]) ? n(e[s], function (e) {
                    return a + encodeURIComponent(i(e))
                }).join(t) : a + encodeURIComponent(i(e[s]))
            }).join(t) : a ? encodeURIComponent(i(a)) + r + encodeURIComponent(i(e)) : ""
        };
        var o = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            s = Object.keys || function (e) {
                var t = [];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t
            }
    }, {}],
    16: [function (e, t, r) {
        "use strict";
        r.decode = r.parse = e("./decode"), r.encode = r.stringify = e("./encode")
    }, {
        "./decode": 14,
        "./encode": 15
    }],
    17: [function (e, t, r) {
        t.exports = e("./lib/_stream_duplex.js")
    }, {
        "./lib/_stream_duplex.js": 18
    }],
    18: [function (e, t, r) {
        "use strict";

        function n(e) {
            return this instanceof n ? (c.call(this, e), f.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", i)) : new n(e)
        }

        function i() {
            this.allowHalfOpen || this._writableState.ended || a(o, this)
        }

        function o(e) {
            e.end()
        }
        var s = Object.keys || function (e) {
            var t = [];
            for (var r in e) t.push(r);
            return t
        };
        t.exports = n;
        var a = e("process-nextick-args"),
            u = e("core-util-is");
        u.inherits = e("inherits");
        var c = e("./_stream_readable"),
            f = e("./_stream_writable");
        u.inherits(n, c);
        for (var l = s(f.prototype), h = 0; h < l.length; h++) {
            var p = l[h];
            n.prototype[p] || (n.prototype[p] = f.prototype[p])
        }
    }, {
        "./_stream_readable": 20,
        "./_stream_writable": 22,
        "core-util-is": 24,
        inherits: 9,
        "process-nextick-args": 26
    }],
    19: [function (e, t, r) {
        "use strict";

        function n(e) {
            return this instanceof n ? void i.call(this, e) : new n(e)
        }
        t.exports = n;
        var i = e("./_stream_transform"),
            o = e("core-util-is");
        o.inherits = e("inherits"), o.inherits(n, i), n.prototype._transform = function (e, t, r) {
            r(null, e)
        }
    }, {
        "./_stream_transform": 21,
        "core-util-is": 24,
        inherits: 9
    }],
    20: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n(e, t, r) {
                return U ? e.prependListener(t, r) : void(e._events && e._events[t] ? j(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r))
            }

            function i(t, r) {
                N = N || e("./_stream_duplex"), t = t || {}, this.objectMode = !!t.objectMode, r instanceof N && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var n = t.highWaterMark,
                    i = this.objectMode ? 16 : 16384;
                this.highWaterMark = n || 0 === n ? n : i, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (P || (P = e("string_decoder/").StringDecoder), this.decoder = new P(t.encoding), this.encoding = t.encoding)
            }

            function o(t) {
                return N = N || e("./_stream_duplex"), this instanceof o ? (this._readableState = new i(t, this), this.readable = !0, t && "function" == typeof t.read && (this._read = t.read), void T.call(this)) : new o(t)
            }

            function s(e, t, r, n, i) {
                var o = f(t, r);
                if (o) e.emit("error", o);
                else if (null === r) t.reading = !1, l(e, t);
                else if (t.objectMode || r && r.length > 0)
                    if (t.ended && !i) {
                        var s = new Error("stream.push() after EOF");
                        e.emit("error", s)
                    } else if (t.endEmitted && i) {
                    var u = new Error("stream.unshift() after end event");
                    e.emit("error", u)
                } else {
                    var c;
                    !t.decoder || i || n || (r = t.decoder.write(r), c = !t.objectMode && 0 === r.length), i || (t.reading = !1), c || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && h(e))), d(e, t)
                } else i || (t.reading = !1);
                return a(t)
            }

            function a(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }

            function u(e) {
                return e >= B ? e = B : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
            }

            function c(e, t) {
                return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : null === e || isNaN(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : 0 >= e ? 0 : (e > t.highWaterMark && (t.highWaterMark = u(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e)
            }

            function f(e, t) {
                var r = null;
                return O.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")), r
            }

            function l(e, t) {
                if (!t.ended) {
                    if (t.decoder) {
                        var r = t.decoder.end();
                        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                    }
                    t.ended = !0, h(e)
                }
            }

            function h(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (q("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? R(p, e) : p(e))
            }

            function p(e) {
                q("emit readable"), e.emit("readable"), _(e)
            }

            function d(e, t) {
                t.readingMore || (t.readingMore = !0, R(g, e, t))
            }

            function g(e, t) {
                for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (q("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
                t.readingMore = !1
            }

            function m(e) {
                return function () {
                    var t = e._readableState;
                    q("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && A(e, "data") && (t.flowing = !0, _(e))
                }
            }

            function b(e) {
                q("readable nexttick read 0"), e.read(0)
            }

            function v(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, R(y, e, t))
            }

            function y(e, t) {
                t.reading || (q("resume read 0"), e.read(0)), t.resumeScheduled = !1, e.emit("resume"), _(e), t.flowing && !t.reading && e.read(0)
            }

            function _(e) {
                var t = e._readableState;
                if (q("flow", t.flowing), t.flowing)
                    do var r = e.read(); while (null !== r && t.flowing)
            }

            function w(e, t) {
                var r, n = t.buffer,
                    i = t.length,
                    o = !!t.decoder,
                    s = !!t.objectMode;
                if (0 === n.length) return null;
                if (0 === i) r = null;
                else if (s) r = n.shift();
                else if (!e || e >= i) r = o ? n.join("") : 1 === n.length ? n[0] : O.concat(n, i), n.length = 0;
                else if (e < n[0].length) {
                    var a = n[0];
                    r = a.slice(0, e), n[0] = a.slice(e)
                } else if (e === n[0].length) r = n.shift();
                else {
                    r = o ? "" : C.allocUnsafe(e);
                    for (var u = 0, c = 0, f = n.length; f > c && e > u; c++) {
                        var l = n[0],
                            h = Math.min(e - u, l.length);
                        o ? r += l.slice(0, h) : l.copy(r, u, 0, h), h < l.length ? n[0] = l.slice(h) : n.shift(), u += h
                    }
                }
                return r
            }

            function S(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, R(E, t, e))
            }

            function E(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function k(e, t) {
                for (var r = 0, n = e.length; n > r; r++) t(e[r], r)
            }

            function x(e, t) {
                for (var r = 0, n = e.length; n > r; r++)
                    if (e[r] === t) return r;
                return -1
            }
            t.exports = o;
            var R = e("process-nextick-args"),
                j = e("isarray");
            o.ReadableState = i;
            var T, M = e("events").EventEmitter,
                A = function (e, t) {
                    return e.listeners(t).length
                };
            ! function () {
                try {
                    T = e("stream")
                } catch (t) {} finally {
                    T || (T = e("events").EventEmitter)
                }
            }();
            var O = e("buffer").Buffer,
                C = e("buffer-shims"),
                I = e("core-util-is");
            I.inherits = e("inherits");
            var L = e("util"),
                q = void 0;
            q = L && L.debuglog ? L.debuglog("stream") : function () {};
            var P;
            I.inherits(o, T);
            var N, N, U = "function" == typeof M.prototype.prependListener;
            o.prototype.push = function (e, t) {
                var r = this._readableState;
                return r.objectMode || "string" != typeof e || (t = t || r.defaultEncoding, t !== r.encoding && (e = C.from(e, t), t = "")), s(this, r, e, t, !1)
            }, o.prototype.unshift = function (e) {
                var t = this._readableState;
                return s(this, t, e, "", !0)
            }, o.prototype.isPaused = function () {
                return this._readableState.flowing === !1
            }, o.prototype.setEncoding = function (t) {
                return P || (P = e("string_decoder/").StringDecoder), this._readableState.decoder = new P(t), this._readableState.encoding = t, this
            };
            var B = 8388608;
            o.prototype.read = function (e) {
                q("read", e);
                var t = this._readableState,
                    r = e;
                if (("number" != typeof e || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return q("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? S(this) : h(this), null;
                if (e = c(e, t), 0 === e && t.ended) return 0 === t.length && S(this), null;
                var n = t.needReadable;
                q("need readable", n), (0 === t.length || t.length - e < t.highWaterMark) && (n = !0, q("length less than watermark", n)), (t.ended || t.reading) && (n = !1, q("reading or ended", n)), n && (q("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), n && !t.reading && (e = c(r, t));
                var i;
                return i = e > 0 ? w(e, t) : null, null === i && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), r !== e && t.ended && 0 === t.length && S(this), null !== i && this.emit("data", i), i
            }, o.prototype._read = function (e) {
                this.emit("error", new Error("not implemented"))
            }, o.prototype.pipe = function (e, t) {
                function i(e) {
                    q("onunpipe"), e === h && s()
                }

                function o() {
                    q("onend"), e.end()
                }

                function s() {
                    q("cleanup"), e.removeListener("close", c), e.removeListener("finish", f), e.removeListener("drain", b), e.removeListener("error", u), e.removeListener("unpipe", i), h.removeListener("end", o), h.removeListener("end", s), h.removeListener("data", a), v = !0, !p.awaitDrain || e._writableState && !e._writableState.needDrain || b()
                }

                function a(t) {
                    q("ondata");
                    var r = e.write(t);
                    !1 === r && ((1 === p.pipesCount && p.pipes === e || p.pipesCount > 1 && -1 !== x(p.pipes, e)) && !v && (q("false write response, pause", h._readableState.awaitDrain), h._readableState.awaitDrain++), h.pause())
                }

                function u(t) {
                    q("onerror", t), l(), e.removeListener("error", u), 0 === A(e, "error") && e.emit("error", t)
                }

                function c() {
                    e.removeListener("finish", f), l()
                }

                function f() {
                    q("onfinish"), e.removeListener("close", c), l()
                }

                function l() {
                    q("unpipe"), h.unpipe(e)
                }
                var h = this,
                    p = this._readableState;
                switch (p.pipesCount) {
                    case 0:
                        p.pipes = e;
                        break;
                    case 1:
                        p.pipes = [p.pipes, e];
                        break;
                    default:
                        p.pipes.push(e)
                }
                p.pipesCount += 1, q("pipe count=%d opts=%j", p.pipesCount, t);
                var d = (!t || t.end !== !1) && e !== r.stdout && e !== r.stderr,
                    g = d ? o : s;
                p.endEmitted ? R(g) : h.once("end", g), e.on("unpipe", i);
                var b = m(h);
                e.on("drain", b);
                var v = !1;
                return h.on("data", a), n(e, "error", u), e.once("close", c), e.once("finish", f), e.emit("pipe", h), p.flowing || (q("pipe resume"), h.resume()), e
            }, o.prototype.unpipe = function (e) {
                var t = this._readableState;
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
                if (!e) {
                    var r = t.pipes,
                        n = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var i = 0; n > i; i++) r[i].emit("unpipe", this);
                    return this
                }
                var o = x(t.pipes, e);
                return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
            }, o.prototype.on = function (e, t) {
                var r = T.prototype.on.call(this, e, t);
                if ("data" === e && !1 !== this._readableState.flowing && this.resume(), "readable" === e && !this._readableState.endEmitted) {
                    var n = this._readableState;
                    n.readableListening || (n.readableListening = !0, n.emittedReadable = !1, n.needReadable = !0, n.reading ? n.length && h(this, n) : R(b, this))
                }
                return r
            }, o.prototype.addListener = o.prototype.on, o.prototype.resume = function () {
                var e = this._readableState;
                return e.flowing || (q("resume"), e.flowing = !0, v(this, e)), this
            }, o.prototype.pause = function () {
                return q("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (q("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, o.prototype.wrap = function (e) {
                var t = this._readableState,
                    r = !1,
                    n = this;
                e.on("end", function () {
                    if (q("wrapped end"), t.decoder && !t.ended) {
                        var e = t.decoder.end();
                        e && e.length && n.push(e)
                    }
                    n.push(null)
                }), e.on("data", function (i) {
                    if (q("wrapped data"), t.decoder && (i = t.decoder.write(i)), (!t.objectMode || null !== i && void 0 !== i) && (t.objectMode || i && i.length)) {
                        var o = n.push(i);
                        o || (r = !0, e.pause())
                    }
                });
                for (var i in e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
                    return function () {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                var o = ["error", "close", "destroy", "pause", "resume"];
                return k(o, function (t) {
                    e.on(t, n.emit.bind(n, t))
                }), n._read = function (t) {
                    q("wrapped _read", t), r && (r = !1, e.resume())
                }, n
            }, o._fromList = w
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 18,
        _process: 12,
        buffer: 3,
        "buffer-shims": 23,
        "core-util-is": 24,
        events: 7,
        inherits: 9,
        isarray: 25,
        "process-nextick-args": 26,
        "string_decoder/": 39,
        util: 2
    }],
    21: [function (e, t, r) {
        "use strict";

        function n(e) {
            this.afterTransform = function (t, r) {
                return i(e, t, r)
            }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
        }

        function i(e, t, r) {
            var n = e._transformState;
            n.transforming = !1;
            var i = n.writecb;
            if (!i) return e.emit("error", new Error("no writecb in Transform class"));
            n.writechunk = null, n.writecb = null, null !== r && void 0 !== r && e.push(r), i(t);
            var o = e._readableState;
            o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
        }

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            a.call(this, e), this._transformState = new n(this);
            var t = this;
            this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function () {
                "function" == typeof this._flush ? this._flush(function (e) {
                    s(t, e)
                }) : s(t)
            })
        }

        function s(e, t) {
            if (t) return e.emit("error", t);
            var r = e._writableState,
                n = e._transformState;
            if (r.length) throw new Error("Calling transform done when ws.length != 0");
            if (n.transforming) throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        t.exports = o;
        var a = e("./_stream_duplex"),
            u = e("core-util-is");
        u.inherits = e("inherits"), u.inherits(o, a), o.prototype.push = function (e, t) {
            return this._transformState.needTransform = !1, a.prototype.push.call(this, e, t)
        }, o.prototype._transform = function (e, t, r) {
            throw new Error("Not implemented")
        }, o.prototype._write = function (e, t, r) {
            var n = this._transformState;
            if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function (e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
    }, {
        "./_stream_duplex": 18,
        "core-util-is": 24,
        inherits: 9
    }],
    22: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n() {}

            function i(e, t, r) {
                this.chunk = e, this.encoding = t, this.callback = r, this.next = null
            }

            function o(t, r) {
                A = A || e("./_stream_duplex"), t = t || {}, this.objectMode = !!t.objectMode, r instanceof A && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var n = t.highWaterMark,
                    i = this.objectMode ? 16 : 16384;
                this.highWaterMark = n || 0 === n ? n : i, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                var o = t.decodeStrings === !1;
                this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                    d(r, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new S(this)
            }

            function s(t) {
                return A = A || e("./_stream_duplex"), this instanceof s || this instanceof A ? (this._writableState = new o(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev)), void R.call(this)) : new s(t)
            }

            function a(e, t) {
                var r = new Error("write after end");
                e.emit("error", r), E(t, r)
            }

            function u(e, t, r, n) {
                var i = !0,
                    o = !1;
                return null === r ? o = new TypeError("May not write null values to stream") : T.isBuffer(r) || "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), E(n, o), i = !1), i
            }

            function c(e, t, r) {
                return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = M.from(t, r)), t
            }

            function f(e, t, r, n, o) {
                r = c(t, r, n), T.isBuffer(r) && (n = "buffer");
                var s = t.objectMode ? 1 : r.length;
                t.length += s;
                var a = t.length < t.highWaterMark;
                if (a || (t.needDrain = !0), t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    t.lastBufferedRequest = new i(r, n, o), u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else l(e, t, !1, s, r, n, o);
                return a
            }

            function l(e, t, r, n, i, o, s) {
                t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
            }

            function h(e, t, r, n, i) {
                --t.pendingcb, r ? E(i, n) : i(n), e._writableState.errorEmitted = !0, e.emit("error", n)
            }

            function p(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function d(e, t) {
                var r = e._writableState,
                    n = r.sync,
                    i = r.writecb;
                if (p(r), t) h(e, r, n, t, i);
                else {
                    var o = v(r);
                    o || r.corked || r.bufferProcessing || !r.bufferedRequest || b(e, r), n ? k(g, e, r, o, i) : g(e, r, o, i)
                }
            }

            function g(e, t, r, n) {
                r || m(e, t), t.pendingcb--, n(), _(e, t)
            }

            function m(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function b(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var n = t.bufferedRequestCount,
                        i = new Array(n),
                        o = t.corkedRequestsFree;
                    o.entry = r;
                    for (var s = 0; r;) i[s] = r, r = r.next, s += 1;
                    l(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new S(t)
                } else {
                    for (; r;) {
                        var a = r.chunk,
                            u = r.encoding,
                            c = r.callback,
                            f = t.objectMode ? 1 : a.length;
                        if (l(e, t, !1, f, a, u, c), r = r.next, t.writing) break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequestCount = 0, t.bufferedRequest = r, t.bufferProcessing = !1
            }

            function v(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function y(e, t) {
                t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
            }

            function _(e, t) {
                var r = v(t);
                return r && (0 === t.pendingcb ? (y(e, t), t.finished = !0, e.emit("finish")) : y(e, t)), r
            }

            function w(e, t, r) {
                t.ending = !0, _(e, t), r && (t.finished ? E(r) : e.once("finish", r)), t.ended = !0, e.writable = !1
            }

            function S(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function (r) {
                    var n = t.entry;
                    for (t.entry = null; n;) {
                        var i = n.callback;
                        e.pendingcb--, i(r), n = n.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }
            }
            t.exports = s;
            var E = e("process-nextick-args"),
                k = !r.browser && ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) > -1 ? setImmediate : E;
            s.WritableState = o;
            var x = e("core-util-is");
            x.inherits = e("inherits");
            var R, j = {
                deprecate: e("util-deprecate")
            };
            ! function () {
                try {
                    R = e("stream")
                } catch (t) {} finally {
                    R || (R = e("events").EventEmitter)
                }
            }();
            var T = e("buffer").Buffer,
                M = e("buffer-shims");
            x.inherits(s, R);
            var A;
            o.prototype.getBuffer = function () {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function () {
                    try {
                        Object.defineProperty(o.prototype, "buffer", {
                            get: j.deprecate(function () {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                        })
                    } catch (e) {}
                }();
            var A;
            s.prototype.pipe = function () {
                this.emit("error", new Error("Cannot pipe, not readable"))
            }, s.prototype.write = function (e, t, r) {
                var i = this._writableState,
                    o = !1;
                return "function" == typeof t && (r = t, t = null), T.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = n), i.ended ? a(this, r) : u(this, i, e, r) && (i.pendingcb++, o = f(this, i, e, t, r)), o
            }, s.prototype.cork = function () {
                var e = this._writableState;
                e.corked++
            }, s.prototype.uncork = function () {
                var e = this._writableState;
                e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || b(this, e))
            }, s.prototype.setDefaultEncoding = function (e) {
                if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                return this._writableState.defaultEncoding = e, this
            }, s.prototype._write = function (e, t, r) {
                r(new Error("not implemented"))
            }, s.prototype._writev = null, s.prototype.end = function (e, t, r) {
                var n = this._writableState;
                "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || w(this, n, r)
            }
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 18,
        _process: 12,
        buffer: 3,
        "buffer-shims": 23,
        "core-util-is": 24,
        events: 7,
        inherits: 9,
        "process-nextick-args": 26,
        "util-deprecate": 27
    }],
    23: [function (e, t, r) {
        (function (t) {
            "use strict";
            var n = e("buffer"),
                i = n.Buffer,
                o = n.SlowBuffer,
                s = n.kMaxLength || 2147483647;
            r.alloc = function (e, t, r) {
                if ("function" == typeof i.alloc) return i.alloc(e, t, r);
                if ("number" == typeof r) throw new TypeError("encoding must not be number");
                if ("number" != typeof e) throw new TypeError("size must be a number");
                if (e > s) throw new RangeError("size is too large");
                var n = r,
                    o = t;
                void 0 === o && (n = void 0, o = 0);
                var a = new i(e);
                if ("string" == typeof o)
                    for (var u = new i(o, n), c = u.length, f = -1; ++f < e;) a[f] = u[f % c];
                else a.fill(o);
                return a
            }, r.allocUnsafe = function (e) {
                if ("function" == typeof i.allocUnsafe) return i.allocUnsafe(e);
                if ("number" != typeof e) throw new TypeError("size must be a number");
                if (e > s) throw new RangeError("size is too large");
                return new i(e)
            }, r.from = function (e, r, n) {
                if ("function" == typeof i.from && (!t.Uint8Array || Uint8Array.from !== i.from)) return i.from(e, r, n);
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                if ("string" == typeof e) return new i(e, r);
                if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) {
                    var o = r;
                    if (1 === arguments.length) return new i(e);
                    "undefined" == typeof o && (o = 0);
                    var s = n;
                    if ("undefined" == typeof s && (s = e.byteLength - o), o >= e.byteLength) throw new RangeError("'offset' is out of bounds");
                    if (s > e.byteLength - o) throw new RangeError("'length' is out of bounds");
                    return new i(e.slice(o, o + s))
                }
                if (i.isBuffer(e)) {
                    var a = new i(e.length);
                    return e.copy(a, 0, 0, e.length), a
                }
                if (e) {
                    if (Array.isArray(e) || "undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return new i(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return new i(e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }, r.allocUnsafeSlow = function (e) {
                if ("function" == typeof i.allocUnsafeSlow) return i.allocUnsafeSlow(e);
                if ("number" != typeof e) throw new TypeError("size must be a number");
                if (e >= s) throw new RangeError("size is too large");
                return new o(e)
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        buffer: 3
    }],
    24: [function (e, t, r) {
        (function (e) {
            function t(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === m(e)
            }

            function n(e) {
                return "boolean" == typeof e
            }

            function i(e) {
                return null === e
            }

            function o(e) {
                return null == e
            }

            function s(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "string" == typeof e
            }

            function u(e) {
                return "symbol" == typeof e
            }

            function c(e) {
                return void 0 === e
            }

            function f(e) {
                return "[object RegExp]" === m(e)
            }

            function l(e) {
                return "object" == typeof e && null !== e
            }

            function h(e) {
                return "[object Date]" === m(e)
            }

            function p(e) {
                return "[object Error]" === m(e) || e instanceof Error
            }

            function d(e) {
                return "function" == typeof e
            }

            function g(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function m(e) {
                return Object.prototype.toString.call(e)
            }
            r.isArray = t, r.isBoolean = n, r.isNull = i, r.isNullOrUndefined = o, r.isNumber = s, r.isString = a, r.isSymbol = u, r.isUndefined = c, r.isRegExp = f, r.isObject = l, r.isDate = h, r.isError = p, r.isFunction = d, r.isPrimitive = g, r.isBuffer = e.isBuffer
        }).call(this, {
            isBuffer: e("../../../../insert-module-globals/node_modules/is-buffer/index.js")
        })
    }, {
        "../../../../insert-module-globals/node_modules/is-buffer/index.js": 10
    }],
    25: [function (e, t, r) {
        arguments[4][6][0].apply(r, arguments)
    }, {
        dup: 6
    }],
    26: [function (e, t, r) {
        (function (e) {
            "use strict";

            function r(t, r, n, i) {
                if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                var o, s, a = arguments.length;
                switch (a) {
                    case 0:
                    case 1:
                        return e.nextTick(t);
                    case 2:
                        return e.nextTick(function () {
                            t.call(null, r)
                        });
                    case 3:
                        return e.nextTick(function () {
                            t.call(null, r, n)
                        });
                    case 4:
                        return e.nextTick(function () {
                            t.call(null, r, n, i)
                        });
                    default:
                        for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];
                        return e.nextTick(function () {
                            t.apply(null, o)
                        })
                }
            }!e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = r : t.exports = e.nextTick
        }).call(this, e("_process"))
    }, {
        _process: 12
    }],
    27: [function (e, t, r) {
        (function (e) {
            function r(e, t) {
                function r() {
                    if (!i) {
                        if (n("throwDeprecation")) throw new Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t), i = !0
                    }
                    return e.apply(this, arguments)
                }
                if (n("noDeprecation")) return e;
                var i = !1;
                return r
            }

            function n(t) {
                try {
                    if (!e.localStorage) return !1
                } catch (r) {
                    return !1
                }
                var n = e.localStorage[t];
                return null == n ? !1 : "true" === String(n).toLowerCase()
            }
            t.exports = r
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    28: [function (e, t, r) {
        t.exports = e("./lib/_stream_passthrough.js")
    }, {
        "./lib/_stream_passthrough.js": 19
    }],
    29: [function (e, t, r) {
        (function (n) {
            var i = function () {
                try {
                    return e("stream")
                } catch (t) {}
            }();
            r = t.exports = e("./lib/_stream_readable.js"), r.Stream = i || r, r.Readable = r, r.Writable = e("./lib/_stream_writable.js"), r.Duplex = e("./lib/_stream_duplex.js"), r.Transform = e("./lib/_stream_transform.js"), r.PassThrough = e("./lib/_stream_passthrough.js"), !n.browser && "disable" === n.env.READABLE_STREAM && i && (t.exports = i)
        }).call(this, e("_process"))
    }, {
        "./lib/_stream_duplex.js": 18,
        "./lib/_stream_passthrough.js": 19,
        "./lib/_stream_readable.js": 20,
        "./lib/_stream_transform.js": 21,
        "./lib/_stream_writable.js": 22,
        _process: 12
    }],
    30: [function (e, t, r) {
        t.exports = e("./lib/_stream_transform.js")
    }, {
        "./lib/_stream_transform.js": 21
    }],
    31: [function (e, t, r) {
        t.exports = e("./lib/_stream_writable.js")
    }, {
        "./lib/_stream_writable.js": 22
    }],
    32: [function (e, t, r) {
        function n() {
            i.call(this)
        }
        t.exports = n;
        var i = e("events").EventEmitter,
            o = e("inherits");
        o(n, i), n.Readable = e("readable-stream/readable.js"), n.Writable = e("readable-stream/writable.js"), n.Duplex = e("readable-stream/duplex.js"), n.Transform = e("readable-stream/transform.js"), n.PassThrough = e("readable-stream/passthrough.js"), n.Stream = n, n.prototype.pipe = function (e, t) {
            function r(t) {
                e.writable && !1 === e.write(t) && c.pause && c.pause()
            }

            function n() {
                c.readable && c.resume && c.resume()
            }

            function o() {
                f || (f = !0, e.end())
            }

            function s() {
                f || (f = !0, "function" == typeof e.destroy && e.destroy())
            }

            function a(e) {
                if (u(), 0 === i.listenerCount(this, "error")) throw e
            }

            function u() {
                c.removeListener("data", r), e.removeListener("drain", n), c.removeListener("end", o), c.removeListener("close", s), c.removeListener("error", a), e.removeListener("error", a), c.removeListener("end", u), c.removeListener("close", u), e.removeListener("close", u)
            }
            var c = this;
            c.on("data", r), e.on("drain", n), e._isStdio || t && t.end === !1 || (c.on("end", o), c.on("close", s));
            var f = !1;
            return c.on("error", a), e.on("error", a), c.on("end", u), c.on("close", u), e.on("close", u), e.emit("pipe", c), e
        }
    }, {
        events: 7,
        inherits: 9,
        "readable-stream/duplex.js": 17,
        "readable-stream/passthrough.js": 28,
        "readable-stream/readable.js": 29,
        "readable-stream/transform.js": 30,
        "readable-stream/writable.js": 31
    }],
    33: [function (e, t, r) {
        (function (t) {
            var n = e("./lib/request"),
                i = e("xtend"),
                o = e("builtin-status-codes"),
                s = e("url"),
                a = r;
            a.request = function (e, r) {
                e = "string" == typeof e ? s.parse(e) : i(e);
                var o = -1 === t.location.protocol.search(/^https?:$/) ? "http:" : "",
                    a = e.protocol || o,
                    u = e.hostname || e.host,
                    c = e.port,
                    f = e.path || "/";
                u && -1 !== u.indexOf(":") && (u = "[" + u + "]"), e.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + f, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
                var l = new n(e);
                return r && l.on("response", r), l
            }, a.get = function (e, t) {
                var r = a.request(e, t);
                return r.end(), r
            }, a.Agent = function () {}, a.Agent.defaultMaxSockets = 4, a.STATUS_CODES = o, a.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./lib/request": 35,
        "builtin-status-codes": 37,
        url: 40,
        xtend: 44
    }],
    34: [function (e, t, r) {
        (function (e) {
            function t(e) {
                try {
                    return o.responseType = e, o.responseType === e
                } catch (t) {}
                return !1
            }

            function n(e) {
                return "function" == typeof e
            }
            r.fetch = n(e.fetch) && n(e.ReadableByteStream), r.blobConstructor = !1;
            try {
                new Blob([new ArrayBuffer(1)]), r.blobConstructor = !0
            } catch (i) {}
            var o = new e.XMLHttpRequest;
            o.open("GET", e.location.host ? "/" : "https://example.com");
            var s = "undefined" != typeof e.ArrayBuffer,
                a = s && n(e.ArrayBuffer.prototype.slice);
            r.arraybuffer = s && t("arraybuffer"), r.msstream = !r.fetch && a && t("ms-stream"), r.mozchunkedarraybuffer = !r.fetch && s && t("moz-chunked-arraybuffer"), r.overrideMimeType = n(o.overrideMimeType), r.vbArray = n(e.VBArray), o = null
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    35: [function (e, t, r) {
        (function (r, n, i) {
            function o(e) {
                return a.fetch ? "fetch" : a.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : a.msstream ? "ms-stream" : a.arraybuffer && e ? "arraybuffer" : a.vbArray && e ? "text:vbarray" : "text"
            }

            function s(e) {
                try {
                    var t = e.status;
                    return null !== t && 0 !== t
                } catch (r) {
                    return !1
                }
            }
            var a = e("./capability"),
                u = e("inherits"),
                c = e("./response"),
                f = e("readable-stream"),
                l = e("to-arraybuffer"),
                h = c.IncomingMessage,
                p = c.readyStates,
                d = t.exports = function (e) {
                    var t = this;
                    f.Writable.call(t), t._opts = e, t._body = [], t._headers = {}, e.auth && t.setHeader("Authorization", "Basic " + new i(e.auth).toString("base64")), Object.keys(e.headers).forEach(function (r) {
                        t.setHeader(r, e.headers[r])
                    });
                    var r;
                    if ("prefer-streaming" === e.mode) r = !1;
                    else if ("allow-wrong-content-type" === e.mode) r = !a.overrideMimeType;
                    else {
                        if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
                        r = !0
                    }
                    t._mode = o(r), t.on("finish", function () {
                        t._onFinish()
                    })
                };
            u(d, f.Writable), d.prototype.setHeader = function (e, t) {
                var r = this,
                    n = e.toLowerCase(); - 1 === g.indexOf(n) && (r._headers[n] = {
                    name: e,
                    value: t
                })
            }, d.prototype.getHeader = function (e) {
                var t = this;
                return t._headers[e.toLowerCase()].value
            }, d.prototype.removeHeader = function (e) {
                var t = this;
                delete t._headers[e.toLowerCase()]
            }, d.prototype._onFinish = function () {
                var e = this;
                if (!e._destroyed) {
                    var t, o = e._opts,
                        s = e._headers;
                    if ("POST" !== o.method && "PUT" !== o.method && "PATCH" !== o.method || (t = a.blobConstructor ? new n.Blob(e._body.map(function (e) {
                            return l(e)
                        }), {
                            type: (s["content-type"] || {}).value || ""
                        }) : i.concat(e._body).toString()), "fetch" === e._mode) {
                        var u = Object.keys(s).map(function (e) {
                            return [s[e].name, s[e].value]
                        });
                        n.fetch(e._opts.url, {
                            method: e._opts.method,
                            headers: u,
                            body: t,
                            mode: "cors",
                            credentials: o.withCredentials ? "include" : "same-origin"
                        }).then(function (t) {
                            e._fetchResponse = t, e._connect()
                        }, function (t) {
                            e.emit("error", t)
                        })
                    } else {
                        var c = e._xhr = new n.XMLHttpRequest;
                        try {
                            c.open(e._opts.method, e._opts.url, !0)
                        } catch (f) {
                            return void r.nextTick(function () {
                                e.emit("error", f)
                            })
                        }
                        "responseType" in c && (c.responseType = e._mode.split(":")[0]), "withCredentials" in c && (c.withCredentials = !!o.withCredentials), "text" === e._mode && "overrideMimeType" in c && c.overrideMimeType("text/plain; charset=x-user-defined"), Object.keys(s).forEach(function (e) {
                            c.setRequestHeader(s[e].name, s[e].value)
                        }), e._response = null, c.onreadystatechange = function () {
                            switch (c.readyState) {
                                case p.LOADING:
                                case p.DONE:
                                    e._onXHRProgress()
                            }
                        }, "moz-chunked-arraybuffer" === e._mode && (c.onprogress = function () {
                            e._onXHRProgress()
                        }), c.onerror = function () {
                            e._destroyed || e.emit("error", new Error("XHR error"))
                        };
                        try {
                            c.send(t)
                        } catch (f) {
                            return void r.nextTick(function () {
                                e.emit("error", f)
                            })
                        }
                    }
                }
            }, d.prototype._onXHRProgress = function () {
                var e = this;
                s(e._xhr) && !e._destroyed && (e._response || e._connect(), e._response._onXHRProgress())
            }, d.prototype._connect = function () {
                var e = this;
                e._destroyed || (e._response = new h(e._xhr, e._fetchResponse, e._mode), e.emit("response", e._response))
            }, d.prototype._write = function (e, t, r) {
                var n = this;
                n._body.push(e), r()
            }, d.prototype.abort = d.prototype.destroy = function () {
                var e = this;
                e._destroyed = !0, e._response && (e._response._destroyed = !0), e._xhr && e._xhr.abort()
            }, d.prototype.end = function (e, t, r) {
                var n = this;
                "function" == typeof e && (r = e, e = void 0), f.Writable.prototype.end.call(n, e, t, r)
            }, d.prototype.flushHeaders = function () {}, d.prototype.setTimeout = function () {}, d.prototype.setNoDelay = function () {}, d.prototype.setSocketKeepAlive = function () {};
            var g = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"]
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
    }, {
        "./capability": 34,
        "./response": 36,
        _process: 12,
        buffer: 3,
        inherits: 9,
        "readable-stream": 29,
        "to-arraybuffer": 38
    }],
    36: [function (e, t, r) {
        (function (t, n, i) {
            var o = e("./capability"),
                s = e("inherits"),
                a = e("readable-stream"),
                u = r.readyStates = {
                    UNSENT: 0,
                    OPENED: 1,
                    HEADERS_RECEIVED: 2,
                    LOADING: 3,
                    DONE: 4
                },
                c = r.IncomingMessage = function (e, r, n) {
                    function s() {
                        h.read().then(function (e) {
                            if (!u._destroyed) {
                                if (e.done) return void u.push(null);
                                u.push(new i(e.value)), s()
                            }
                        })
                    }
                    var u = this;
                    if (a.Readable.call(u), u._mode = n, u.headers = {}, u.rawHeaders = [], u.trailers = {}, u.rawTrailers = [], u.on("end", function () {
                            t.nextTick(function () {
                                u.emit("close")
                            })
                        }), "fetch" === n) {
                        u._fetchResponse = r, u.url = r.url, u.statusCode = r.status, u.statusMessage = r.statusText;
                        for (var c, f, l = r.headers[Symbol.iterator](); c = (f = l.next()).value, !f.done;) u.headers[c[0].toLowerCase()] = c[1], u.rawHeaders.push(c[0], c[1]);
                        var h = r.body.getReader();
                        s()
                    } else {
                        u._xhr = e, u._pos = 0, u.url = e.responseURL, u.statusCode = e.status, u.statusMessage = e.statusText;
                        var p = e.getAllResponseHeaders().split(/\r?\n/);
                        if (p.forEach(function (e) {
                                var t = e.match(/^([^:]+):\s*(.*)/);
                                if (t) {
                                    var r = t[1].toLowerCase();
                                    "set-cookie" === r ? (void 0 === u.headers[r] && (u.headers[r] = []), u.headers[r].push(t[2])) : void 0 !== u.headers[r] ? u.headers[r] += ", " + t[2] : u.headers[r] = t[2], u.rawHeaders.push(t[1], t[2])
                                }
                            }), u._charset = "x-user-defined", !o.overrideMimeType) {
                            var d = u.rawHeaders["mime-type"];
                            if (d) {
                                var g = d.match(/;\s*charset=([^;])(;|$)/);
                                g && (u._charset = g[1].toLowerCase())
                            }
                            u._charset || (u._charset = "utf-8")
                        }
                    }
                };
            s(c, a.Readable), c.prototype._read = function () {}, c.prototype._onXHRProgress = function () {
                var e = this,
                    t = e._xhr,
                    r = null;
                switch (e._mode) {
                    case "text:vbarray":
                        if (t.readyState !== u.DONE) break;
                        try {
                            r = new n.VBArray(t.responseBody).toArray()
                        } catch (o) {}
                        if (null !== r) {
                            e.push(new i(r));
                            break
                        }
                    case "text":
                        try {
                            r = t.responseText
                        } catch (o) {
                            e._mode = "text:vbarray";
                            break
                        }
                        if (r.length > e._pos) {
                            var s = r.substr(e._pos);
                            if ("x-user-defined" === e._charset) {
                                for (var a = new i(s.length), c = 0; c < s.length; c++) a[c] = 255 & s.charCodeAt(c);
                                e.push(a)
                            } else e.push(s, e._charset);
                            e._pos = r.length
                        }
                        break;
                    case "arraybuffer":
                        if (t.readyState !== u.DONE) break;
                        r = t.response, e.push(new i(new Uint8Array(r)));
                        break;
                    case "moz-chunked-arraybuffer":
                        if (r = t.response, t.readyState !== u.LOADING || !r) break;
                        e.push(new i(new Uint8Array(r)));
                        break;
                    case "ms-stream":
                        if (r = t.response, t.readyState !== u.LOADING) break;
                        var f = new n.MSStreamReader;
                        f.onprogress = function () {
                            f.result.byteLength > e._pos && (e.push(new i(new Uint8Array(f.result.slice(e._pos)))), e._pos = f.result.byteLength)
                        }, f.onload = function () {
                            e.push(null)
                        }, f.readAsArrayBuffer(r)
                }
                e._xhr.readyState === u.DONE && "ms-stream" !== e._mode && e.push(null)
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer)
    }, {
        "./capability": 34,
        _process: 12,
        buffer: 3,
        inherits: 9,
        "readable-stream": 29
    }],
    37: [function (e, t, r) {
        t.exports = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        }
    }, {}],
    38: [function (e, t, r) {
        var n = e("buffer").Buffer;
        t.exports = function (e) {
            if (e instanceof Uint8Array) {
                if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer;
                if ("function" == typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
            }
            if (n.isBuffer(e)) {
                for (var t = new Uint8Array(e.length), r = e.length, i = 0; r > i; i++) t[i] = e[i];
                return t.buffer
            }
            throw new Error("Argument must be a Buffer")
        }
    }, {
        buffer: 3
    }],
    39: [function (e, t, r) {
        function n(e) {
            if (e && !u(e)) throw new Error("Unknown encoding: " + e)
        }

        function i(e) {
            return e.toString(this.encoding)
        }

        function o(e) {
            this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
        }

        function s(e) {
            this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
        }
        var a = e("buffer").Buffer,
            u = a.isEncoding || function (e) {
                switch (e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            },
            c = r.StringDecoder = function (e) {
                switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), n(e), this.encoding) {
                    case "utf8":
                        this.surrogateSize = 3;
                        break;
                    case "ucs2":
                    case "utf16le":
                        this.surrogateSize = 2, this.detectIncompleteChar = o;
                        break;
                    case "base64":
                        this.surrogateSize = 3, this.detectIncompleteChar = s;
                        break;
                    default:
                        return void(this.write = i)
                }
                this.charBuffer = new a(6), this.charReceived = 0, this.charLength = 0
            };
        c.prototype.write = function (e) {
            for (var t = ""; this.charLength;) {
                var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                if (e.copy(this.charBuffer, this.charReceived, 0, r), this.charReceived += r, this.charReceived < this.charLength) return "";
                e = e.slice(r, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
                var n = t.charCodeAt(t.length - 1);
                if (!(n >= 55296 && 56319 >= n)) {
                    if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                    break
                }
                this.charLength += this.surrogateSize, t = ""
            }
            this.detectIncompleteChar(e);
            var i = e.length;
            this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, i), i -= this.charReceived), t += e.toString(this.encoding, 0, i);
            var i = t.length - 1,
                n = t.charCodeAt(i);
            if (n >= 55296 && 56319 >= n) {
                var o = this.surrogateSize;
                return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, i)
            }
            return t
        }, c.prototype.detectIncompleteChar = function (e) {
            for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                var r = e[e.length - t];
                if (1 == t && r >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (2 >= t && r >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (3 >= t && r >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = t
        }, c.prototype.end = function (e) {
            var t = "";
            if (e && e.length && (t = this.write(e)), this.charReceived) {
                var r = this.charReceived,
                    n = this.charBuffer,
                    i = this.encoding;
                t += n.slice(0, r).toString(i)
            }
            return t
        }
    }, {
        buffer: 3
    }],
    40: [function (e, t, r) {
        "use strict";

        function n() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function i(e, t, r) {
            if (e && c.isObject(e) && e instanceof n) return e;
            var i = new n;
            return i.parse(e, t, r), i
        }

        function o(e) {
            return c.isString(e) && (e = i(e)), e instanceof n ? e.format() : n.prototype.format.call(e)
        }

        function s(e, t) {
            return i(e, !1, !0).resolve(t)
        }

        function a(e, t) {
            return e ? i(e, !1, !0).resolveObject(t) : t
        }
        var u = e("punycode"),
            c = e("./util");
        r.parse = i, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = n;
        var f = /^([a-z0-9.+-]+:)/i,
            l = /:[0-9]*$/,
            h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            p = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
            d = ["{", "}", "|", "\\", "^", "`"].concat(p),
            g = ["'"].concat(d),
            m = ["%", "/", "?", ";", "#"].concat(g),
            b = ["/", "?", "#"],
            v = 255,
            y = /^[+a-z0-9A-Z_-]{0,63}$/,
            _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
            w = {
                javascript: !0,
                "javascript:": !0
            },
            S = {
                javascript: !0,
                "javascript:": !0
            },
            E = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            },
            k = e("querystring");
        n.prototype.parse = function (e, t, r) {
            if (!c.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var n = e.indexOf("?"),
                i = -1 !== n && n < e.indexOf("#") ? "?" : "#",
                o = e.split(i),
                s = /\\/g;
            o[0] = o[0].replace(s, "/"), e = o.join(i);
            var a = e;
            if (a = a.trim(), !r && 1 === e.split("#").length) {
                var l = h.exec(a);
                if (l) return this.path = a, this.href = a, this.pathname = l[1], l[2] ? (this.search = l[2], t ? this.query = k.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var p = f.exec(a);
            if (p) {
                p = p[0];
                var d = p.toLowerCase();
                this.protocol = d, a = a.substr(p.length)
            }
            if (r || p || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var x = "//" === a.substr(0, 2);
                !x || p && S[p] || (a = a.substr(2), this.slashes = !0)
            }
            if (!S[p] && (x || p && !E[p])) {
                for (var R = -1, j = 0; j < b.length; j++) {
                    var T = a.indexOf(b[j]); - 1 !== T && (-1 === R || R > T) && (R = T)
                }
                var M, A;
                A = -1 === R ? a.lastIndexOf("@") : a.lastIndexOf("@", R), -1 !== A && (M = a.slice(0, A), a = a.slice(A + 1), this.auth = decodeURIComponent(M)), R = -1;
                for (var j = 0; j < m.length; j++) {
                    var T = a.indexOf(m[j]); - 1 !== T && (-1 === R || R > T) && (R = T)
                } - 1 === R && (R = a.length), this.host = a.slice(0, R), a = a.slice(R), this.parseHost(), this.hostname = this.hostname || "";
                var O = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!O)
                    for (var C = this.hostname.split(/\./), j = 0, I = C.length; I > j; j++) {
                        var L = C[j];
                        if (L && !L.match(y)) {
                            for (var q = "", P = 0, N = L.length; N > P; P++) q += L.charCodeAt(P) > 127 ? "x" : L[P];
                            if (!q.match(y)) {
                                var U = C.slice(0, j),
                                    B = C.slice(j + 1),
                                    D = L.match(_);
                                D && (U.push(D[1]), B.unshift(D[2])), B.length && (a = "/" + B.join(".") + a), this.hostname = U.join(".");
                                break
                            }
                        }
                    }
                this.hostname.length > v ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), O || (this.hostname = u.toASCII(this.hostname));
                var W = this.port ? ":" + this.port : "",
                    H = this.hostname || "";
                this.host = H + W, this.href += this.host, O && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
            }
            if (!w[d])
                for (var j = 0, I = g.length; I > j; j++) {
                    var F = g[j];
                    if (-1 !== a.indexOf(F)) {
                        var z = encodeURIComponent(F);
                        z === F && (z = escape(F)), a = a.split(F).join(z)
                    }
                }
            var J = a.indexOf("#"); - 1 !== J && (this.hash = a.substr(J), a = a.slice(0, J));
            var Y = a.indexOf("?");
            if (-1 !== Y ? (this.search = a.substr(Y), this.query = a.substr(Y + 1), t && (this.query = k.parse(this.query)), a = a.slice(0, Y)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), E[d] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var W = this.pathname || "",
                    K = this.search || "";
                this.path = W + K
            }
            return this.href = this.format(), this
        }, n.prototype.format = function () {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "",
                r = this.pathname || "",
                n = this.hash || "",
                i = !1,
                o = "";
            this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (o = k.stringify(this.query));
            var s = this.search || o && "?" + o || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || E[t]) && i !== !1 ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e)
            }), s = s.replace("#", "%23"), t + i + r + s + n
        }, n.prototype.resolve = function (e) {
            return this.resolveObject(i(e, !1, !0)).format()
        }, n.prototype.resolveObject = function (e) {
            if (c.isString(e)) {
                var t = new n;
                t.parse(e, !1, !0), e = t
            }
            for (var r = new n, i = Object.keys(this), o = 0; o < i.length; o++) {
                var s = i[o];
                r[s] = this[s]
            }
            if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
            if (e.slashes && !e.protocol) {
                for (var a = Object.keys(e), u = 0; u < a.length; u++) {
                    var f = a[u];
                    "protocol" !== f && (r[f] = e[f])
                }
                return E[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
            }
            if (e.protocol && e.protocol !== r.protocol) {
                if (!E[e.protocol]) {
                    for (var l = Object.keys(e), h = 0; h < l.length; h++) {
                        var p = l[h];
                        r[p] = e[p]
                    }
                    return r.href = r.format(), r
                }
                if (r.protocol = e.protocol, e.host || S[e.protocol]) r.pathname = e.pathname;
                else {
                    for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift()););
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/")
                }
                if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                    var g = r.pathname || "",
                        m = r.search || "";
                    r.path = g + m
                }
                return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
            }
            var b = r.pathname && "/" === r.pathname.charAt(0),
                v = e.host || e.pathname && "/" === e.pathname.charAt(0),
                y = v || b || r.host && e.pathname,
                _ = y,
                w = r.pathname && r.pathname.split("/") || [],
                d = e.pathname && e.pathname.split("/") || [],
                k = r.protocol && !E[r.protocol];
            if (k && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), y = y && ("" === d[0] || "" === w[0])), v) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, w = d;
            else if (d.length) w || (w = []), w.pop(), w = w.concat(d), r.search = e.search, r.query = e.query;
            else if (!c.isNullOrUndefined(e.search)) {
                if (k) {
                    r.hostname = r.host = w.shift();
                    var x = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                    x && (r.auth = x.shift(), r.host = r.hostname = x.shift())
                }
                return r.search = e.search, r.query = e.query, c.isNull(r.pathname) && c.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
            }
            if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
            for (var R = w.slice(-1)[0], j = (r.host || e.host || w.length > 1) && ("." === R || ".." === R) || "" === R, T = 0, M = w.length; M >= 0; M--) R = w[M], "." === R ? w.splice(M, 1) : ".." === R ? (w.splice(M, 1), T++) : T && (w.splice(M, 1), T--);
            if (!y && !_)
                for (; T--; T) w.unshift("..");
            !y || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), j && "/" !== w.join("/").substr(-1) && w.push("");
            var A = "" === w[0] || w[0] && "/" === w[0].charAt(0);
            if (k) {
                r.hostname = r.host = A ? "" : w.length ? w.shift() : "";
                var x = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                x && (r.auth = x.shift(), r.host = r.hostname = x.shift())
            }
            return y = y || r.host && w.length, y && !A && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), c.isNull(r.pathname) && c.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
        }, n.prototype.parseHost = function () {
            var e = this.host,
                t = l.exec(e);
            t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, {
        "./util": 41,
        punycode: 13,
        querystring: 16
    }],
    41: [function (e, t, r) {
        "use strict";
        t.exports = {
            isString: function (e) {
                return "string" == typeof e
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e
            },
            isNull: function (e) {
                return null === e
            },
            isNullOrUndefined: function (e) {
                return null == e
            }
        }
    }, {}],
    42: [function (e, t, r) {
        t.exports = function (e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, {}],
    43: [function (e, t, r) {
        (function (t, n) {
            function i(e, t) {
                var n = {
                    seen: [],
                    stylize: s
                };
                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), g(t) ? n.showHidden = t : t && r._extend(n, t), w(n.showHidden) && (n.showHidden = !1), w(n.depth) && (n.depth = 2), w(n.colors) && (n.colors = !1), w(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = o), u(n, e, n.depth)
            }

            function o(e, t) {
                var r = i.styles[t];
                return r ? "[" + i.colors[r][0] + "m" + e + "[" + i.colors[r][1] + "m" : e
            }

            function s(e, t) {
                return e
            }

            function a(e) {
                var t = {};
                return e.forEach(function (e, r) {
                    t[e] = !0
                }), t
            }

            function u(e, t, n) {
                if (e.customInspect && t && R(t.inspect) && t.inspect !== r.inspect && (!t.constructor || t.constructor.prototype !== t)) {
                    var i = t.inspect(n, e);
                    return y(i) || (i = u(e, i, n)), i
                }
                var o = c(e, t);
                if (o) return o;
                var s = Object.keys(t),
                    g = a(s);
                if (e.showHidden && (s = Object.getOwnPropertyNames(t)), x(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return f(t);
                if (0 === s.length) {
                    if (R(t)) {
                        var m = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + m + "]", "special")
                    }
                    if (S(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                    if (k(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                    if (x(t)) return f(t)
                }
                var b = "",
                    v = !1,
                    _ = ["{", "}"];
                if (d(t) && (v = !0, _ = ["[", "]"]), R(t)) {
                    var w = t.name ? ": " + t.name : "";
                    b = " [Function" + w + "]"
                }
                if (S(t) && (b = " " + RegExp.prototype.toString.call(t)), k(t) && (b = " " + Date.prototype.toUTCString.call(t)), x(t) && (b = " " + f(t)), 0 === s.length && (!v || 0 == t.length)) return _[0] + b + _[1];
                if (0 > n) return S(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
                e.seen.push(t);
                var E;
                return E = v ? l(e, t, n, g, s) : s.map(function (r) {
                    return h(e, t, n, g, r, v)
                }), e.seen.pop(), p(E, b, _)
            }

            function c(e, t) {
                if (w(t)) return e.stylize("undefined", "undefined");
                if (y(t)) {
                    var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(r, "string")
                }
                return v(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
            }

            function f(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function l(e, t, r, n, i) {
                for (var o = [], s = 0, a = t.length; a > s; ++s) O(t, String(s)) ? o.push(h(e, t, r, n, String(s), !0)) : o.push("");
                return i.forEach(function (i) {
                    i.match(/^\d+$/) || o.push(h(e, t, r, n, i, !0))
                }), o
            }

            function h(e, t, r, n, i, o) {
                var s, a, c;
                if (c = Object.getOwnPropertyDescriptor(t, i) || {
                        value: t[i]
                    }, c.get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), O(n, i) || (s = "[" + i + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = m(r) ? u(e, c.value, null) : u(e, c.value, r - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function (e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function (e) {
                        return "   " + e
                    }).join("\n"))) : a = e.stylize("[Circular]", "special")), w(s)) {
                    if (o && i.match(/^\d+$/)) return a;
                    s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                }
                return s + ": " + a
            }

            function p(e, t, r) {
                var n = 0,
                    i = e.reduce(function (e, t) {
                        return n++, t.indexOf("\n") >= 0 && n++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0);
                return i > 60 ? r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1] : r[0] + t + " " + e.join(", ") + " " + r[1]
            }

            function d(e) {
                return Array.isArray(e)
            }

            function g(e) {
                return "boolean" == typeof e
            }

            function m(e) {
                return null === e
            }

            function b(e) {
                return null == e
            }

            function v(e) {
                return "number" == typeof e
            }

            function y(e) {
                return "string" == typeof e
            }

            function _(e) {
                return "symbol" == typeof e
            }

            function w(e) {
                return void 0 === e
            }

            function S(e) {
                return E(e) && "[object RegExp]" === T(e)
            }

            function E(e) {
                return "object" == typeof e && null !== e
            }

            function k(e) {
                return E(e) && "[object Date]" === T(e)
            }

            function x(e) {
                return E(e) && ("[object Error]" === T(e) || e instanceof Error)
            }

            function R(e) {
                return "function" == typeof e
            }

            function j(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function T(e) {
                return Object.prototype.toString.call(e)
            }

            function M(e) {
                return 10 > e ? "0" + e.toString(10) : e.toString(10)
            }

            function A() {
                var e = new Date,
                    t = [M(e.getHours()), M(e.getMinutes()), M(e.getSeconds())].join(":");
                return [e.getDate(), q[e.getMonth()], t].join(" ")
            }

            function O(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var C = /%[sdj%]/g;
            r.format = function (e) {
                if (!y(e)) {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(i(arguments[r]));
                    return t.join(" ")
                }
                for (var r = 1, n = arguments, o = n.length, s = String(e).replace(C, function (e) {
                        if ("%%" === e) return "%";
                        if (r >= o) return e;
                        switch (e) {
                            case "%s":
                                return String(n[r++]);
                            case "%d":
                                return Number(n[r++]);
                            case "%j":
                                try {
                                    return JSON.stringify(n[r++])
                                } catch (t) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), a = n[r]; o > r; a = n[++r]) s += m(a) || !E(a) ? " " + a : " " + i(a);
                return s
            }, r.deprecate = function (e, i) {
                function o() {
                    if (!s) {
                        if (t.throwDeprecation) throw new Error(i);
                        t.traceDeprecation ? console.trace(i) : console.error(i), s = !0
                    }
                    return e.apply(this, arguments)
                }
                if (w(n.process)) return function () {
                    return r.deprecate(e, i).apply(this, arguments)
                };
                if (t.noDeprecation === !0) return e;
                var s = !1;
                return o
            };
            var I, L = {};
            r.debuglog = function (e) {
                if (w(I) && (I = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !L[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(I)) {
                        var n = t.pid;
                        L[e] = function () {
                            var t = r.format.apply(r, arguments);
                            console.error("%s %d: %s", e, n, t)
                        }
                    } else L[e] = function () {};
                return L[e]
            }, r.inspect = i, i.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                "boolean": "yellow",
                undefined: "grey",
                "null": "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, r.isArray = d, r.isBoolean = g, r.isNull = m, r.isNullOrUndefined = b, r.isNumber = v, r.isString = y, r.isSymbol = _, r.isUndefined = w, r.isRegExp = S, r.isObject = E, r.isDate = k, r.isError = x, r.isFunction = R, r.isPrimitive = j, r.isBuffer = e("./support/isBuffer");
            var q = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            r.log = function () {
                console.log("%s - %s", A(), r.format.apply(r, arguments))
            }, r.inherits = e("inherits"), r._extend = function (e, t) {
                if (!t || !E(t)) return e;
                for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                return e
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./support/isBuffer": 42,
        _process: 12,
        inherits: 9
    }],
    44: [function (e, t, r) {
        function n() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) i.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        t.exports = n;
        var i = Object.prototype.hasOwnProperty
    }, {}],
    45: [function (e, t, r) {
        (function (r, n) {
            var i = e("readable-stream"),
                o = e("end-of-stream"),
                s = e("inherits"),
                a = new n([0]),
                u = function (e, t) {
                    e._corked ? e.once("uncork", t) : t()
                },
                c = function (e, t) {
                    return function (r) {
                        r ? e.destroy("premature close" === r.message ? null : r) : t && !e._ended && e.end()
                    }
                },
                f = function (e, t) {
                    return e ? e._writableState && e._writableState.finished ? t() : e._writableState ? e.end(t) : (e.end(), void t()) : t()
                },
                l = function (e) {
                    return new i.Readable({
                        objectMode: !0,
                        highWaterMark: 16
                    }).wrap(e)
                },
                h = function (e, t, r) {
                    return this instanceof h ? (i.Duplex.call(this, r), this._writable = null, this._readable = null, this._readable2 = null, this._forwardDestroy = !r || r.destroy !== !1, this._forwardEnd = !r || r.end !== !1, this._corked = 1, this._ondrain = null, this._drained = !1, this._forwarding = !1, this._unwrite = null, this._unread = null, this._ended = !1, this.destroyed = !1, e && this.setWritable(e), void(t && this.setReadable(t))) : new h(e, t, r)
                };
            s(h, i.Duplex), h.obj = function (e, t, r) {
                return r || (r = {}), r.objectMode = !0, r.highWaterMark = 16, new h(e, t, r)
            }, h.prototype.cork = function () {
                1 === ++this._corked && this.emit("cork")
            }, h.prototype.uncork = function () {
                this._corked && 0 === --this._corked && this.emit("uncork")
            }, h.prototype.setWritable = function (e) {
                if (this._unwrite && this._unwrite(), this.destroyed) return void(e && e.destroy && e.destroy());
                if (null === e || e === !1) return void this.end();
                var t = this,
                    n = o(e, {
                        writable: !0,
                        readable: !1
                    }, c(this, this._forwardEnd)),
                    i = function () {
                        var e = t._ondrain;
                        t._ondrain = null, e && e()
                    },
                    s = function () {
                        t._writable.removeListener("drain", i), n()
                    };
                this._unwrite && r.nextTick(i), this._writable = e, this._writable.on("drain", i), this._unwrite = s, this.uncork()
            }, h.prototype.setReadable = function (e) {
                if (this._unread && this._unread(), this.destroyed) return void(e && e.destroy && e.destroy());
                if (null === e || e === !1) return this.push(null), void this.resume();
                var t = this,
                    r = o(e, {
                        writable: !1,
                        readable: !0
                    }, c(this)),
                    n = function () {
                        t._forward()
                    },
                    i = function () {
                        t.push(null)
                    },
                    s = function () {
                        t._readable2.removeListener("readable", n), t._readable2.removeListener("end", i), r()
                    };
                this._drained = !0, this._readable = e, this._readable2 = e._readableState ? e : l(e), this._readable2.on("readable", n), this._readable2.on("end", i), this._unread = s, this._forward()
            }, h.prototype._read = function () {
                this._drained = !0, this._forward()
            }, h.prototype._forward = function () {
                if (!this._forwarding && this._readable2 && this._drained) {
                    this._forwarding = !0;
                    for (var e, t = this._readable2._readableState; null !== (e = this._readable2.read(t.buffer.length ? t.buffer[0].length : t.length));) this._drained = this.push(e);
                    this._forwarding = !1
                }
            }, h.prototype.destroy = function (e) {
                if (!this.destroyed) {
                    this.destroyed = !0;
                    var t = this;
                    r.nextTick(function () {
                        t._destroy(e)
                    })
                }
            }, h.prototype._destroy = function (e) {
                if (e) {
                    var t = this._ondrain;
                    this._ondrain = null, t ? t(e) : this.emit("error", e)
                }
                this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy && this._writable.destroy()), this.emit("close")
            }, h.prototype._write = function (e, t, r) {
                return this.destroyed ? r() : this._corked ? u(this, this._write.bind(this, e, t, r)) : e === a ? this._finish(r) : this._writable ? void(this._writable.write(e) === !1 ? this._ondrain = r : r()) : r()
            }, h.prototype._finish = function (e) {
                var t = this;
                this.emit("preend"), u(this, function () {
                    f(t._forwardEnd && t._writable, function () {
                        t._writableState.prefinished === !1 && (t._writableState.prefinished = !0), t.emit("prefinish"), u(t, e)
                    })
                })
            }, h.prototype.end = function (e, t, r) {
                return "function" == typeof e ? this.end(null, null, e) : "function" == typeof t ? this.end(e, null, t) : (this._ended = !0, e && this.write(e), this._writableState.ending || this.write(a), i.Writable.prototype.end.call(this, r))
            }, t.exports = h
        }).call(this, e("_process"), e("buffer").Buffer)
    }, {
        _process: 12,
        buffer: 3,
        "end-of-stream": 46,
        inherits: 49,
        "readable-stream": 61
    }],
    46: [function (e, t, r) {
        var n = e("once"),
            i = function () {},
            o = function (e) {
                return e.setHeader && "function" == typeof e.abort
            },
            s = function (e, t, r) {
                if ("function" == typeof t) return s(e, null, t);
                t || (t = {}), r = n(r || i);
                var a = e._writableState,
                    u = e._readableState,
                    c = t.readable || t.readable !== !1 && e.readable,
                    f = t.writable || t.writable !== !1 && e.writable,
                    l = function () {
                        e.writable || h()
                    },
                    h = function () {
                        f = !1, c || r()
                    },
                    p = function () {
                        c = !1, f || r()
                    },
                    d = function () {
                        return (!c || u && u.ended) && (!f || a && a.ended) ? void 0 : r(new Error("premature close"))
                    },
                    g = function () {
                        e.req.on("finish", h)
                    };
                return o(e) ? (e.on("complete", h), e.on("abort", d), e.req ? g() : e.on("request", g)) : f && !a && (e.on("end", l), e.on("close", l)), e.on("end", p), e.on("finish", h), t.error !== !1 && e.on("error", r), e.on("close", d),
                    function () {
                        e.removeListener("complete", h), e.removeListener("abort", d), e.removeListener("request", g), e.req && e.req.removeListener("finish", h), e.removeListener("end", l), e.removeListener("close", l), e.removeListener("finish", h), e.removeListener("end", p), e.removeListener("error", r), e.removeListener("close", d)
                    }
            };
        t.exports = s
    }, {
        once: 48
    }],
    47: [function (e, t, r) {
        function n(e, t) {
            function r() {
                for (var t = new Array(arguments.length), r = 0; r < t.length; r++) t[r] = arguments[r];
                var n = e.apply(this, t),
                    i = t[t.length - 1];
                return "function" == typeof n && n !== i && Object.keys(i).forEach(function (e) {
                    n[e] = i[e]
                }), n
            }
            if (e && t) return n(e)(t);
            if ("function" != typeof e) throw new TypeError("need wrapper function");
            return Object.keys(e).forEach(function (t) {
                r[t] = e[t]
            }), r
        }
        t.exports = n
    }, {}],
    48: [function (e, t, r) {
        function n(e) {
            var t = function () {
                return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
            };
            return t.called = !1, t
        }
        var i = e("wrappy");
        t.exports = i(n), n.proto = n(function () {
            Object.defineProperty(Function.prototype, "once", {
                value: function () {
                    return n(this)
                },
                configurable: !0
            })
        })
    }, {
        wrappy: 47
    }],
    49: [function (e, t, r) {
        arguments[4][9][0].apply(r, arguments)
    }, {
        dup: 9
    }],
    50: [function (e, t, r) {
        arguments[4][18][0].apply(r, arguments)
    }, {
        "./_stream_readable": 52,
        "./_stream_writable": 54,
        "core-util-is": 56,
        dup: 18,
        inherits: 49,
        "process-nextick-args": 58
    }],
    51: [function (e, t, r) {
        arguments[4][19][0].apply(r, arguments)
    }, {
        "./_stream_transform": 53,
        "core-util-is": 56,
        dup: 19,
        inherits: 49
    }],
    52: [function (e, t, r) {
        arguments[4][20][0].apply(r, arguments)
    }, {
        "./_stream_duplex": 50,
        _process: 12,
        buffer: 3,
        "buffer-shims": 55,
        "core-util-is": 56,
        dup: 20,
        events: 7,
        inherits: 49,
        isarray: 57,
        "process-nextick-args": 58,
        "string_decoder/": 59,
        util: 2
    }],
    53: [function (e, t, r) {
        arguments[4][21][0].apply(r, arguments)
    }, {
        "./_stream_duplex": 50,
        "core-util-is": 56,
        dup: 21,
        inherits: 49
    }],
    54: [function (e, t, r) {
        arguments[4][22][0].apply(r, arguments)
    }, {
        "./_stream_duplex": 50,
        _process: 12,
        buffer: 3,
        "buffer-shims": 55,
        "core-util-is": 56,
        dup: 22,
        events: 7,
        inherits: 49,
        "process-nextick-args": 58,
        "util-deprecate": 60
    }],
    55: [function (e, t, r) {
        arguments[4][23][0].apply(r, arguments)
    }, {
        buffer: 3,
        dup: 23
    }],
    56: [function (e, t, r) {
        (function (e) {
            function t(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === m(e)
            }

            function n(e) {
                return "boolean" == typeof e
            }

            function i(e) {
                return null === e
            }

            function o(e) {
                return null == e
            }

            function s(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "string" == typeof e
            }

            function u(e) {
                return "symbol" == typeof e
            }

            function c(e) {
                return void 0 === e
            }

            function f(e) {
                return "[object RegExp]" === m(e)
            }

            function l(e) {
                return "object" == typeof e && null !== e
            }

            function h(e) {
                return "[object Date]" === m(e)
            }

            function p(e) {
                return "[object Error]" === m(e) || e instanceof Error
            }

            function d(e) {
                return "function" == typeof e
            }

            function g(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function m(e) {
                return Object.prototype.toString.call(e)
            }
            r.isArray = t, r.isBoolean = n, r.isNull = i, r.isNullOrUndefined = o, r.isNumber = s, r.isString = a, r.isSymbol = u, r.isUndefined = c, r.isRegExp = f, r.isObject = l, r.isDate = h, r.isError = p, r.isFunction = d, r.isPrimitive = g, r.isBuffer = e.isBuffer
        }).call(this, {
            isBuffer: e("../../../../../../browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js")
        })
    }, {
        "../../../../../../browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 10
    }],
    57: [function (e, t, r) {
        arguments[4][6][0].apply(r, arguments)
    }, {
        dup: 6
    }],
    58: [function (e, t, r) {
        arguments[4][26][0].apply(r, arguments)
    }, {
        _process: 12,
        dup: 26
    }],
    59: [function (e, t, r) {
        arguments[4][39][0].apply(r, arguments)
    }, {
        buffer: 3,
        dup: 39
    }],
    60: [function (e, t, r) {
        arguments[4][27][0].apply(r, arguments)
    }, {
        dup: 27
    }],
    61: [function (e, t, r) {
        arguments[4][29][0].apply(r, arguments)
    }, {
        "./lib/_stream_duplex.js": 50,
        "./lib/_stream_passthrough.js": 51,
        "./lib/_stream_readable.js": 52,
        "./lib/_stream_transform.js": 53,
        "./lib/_stream_writable.js": 54,
        _process: 12,
        dup: 29
    }],
    62: [function (e, t, r) {
        (function (r, n) {
            "use strict";

            function i() {
                return "mqttjs_" + Math.random().toString(16).substr(2, 8)
            }

            function o(e, t, r) {
                try {
                    var n = h.generate(t);
                    !e.stream.write(n) && r ? e.stream.once("drain", r) : r && r()
                } catch (i) {
                    r ? r(i) : e.emit("error", i)
                }
            }

            function s(e, t, r) {
                e.outgoingStore.put(t, function (n) {
                    return n ? r && r(n) : void o(e, t, r)
                })
            }

            function a() {}

            function u(e, t) {
                var r, n = this;
                if (!(this instanceof u)) return new u(e, t);
                this.options = t || {};
                for (r in b) "undefined" == typeof this.options[r] ? this.options[r] = b[r] : this.options[r] = t[r];
                this.options.clientId = this.options.clientId || i(), this.streamBuilder = e, this.outgoingStore = this.options.outgoingStore || new f, this.incomingStore = this.options.incomingStore || new f, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.queue = [], this.disconnecting = !1, this.connackTimer = null, this.reconnectTimer = null, this.nextId = Math.floor(65535 * Math.random()), this.outgoing = {}, this.on("connect", function () {
                    this.connected = !0;
                    var e = null;
                    e = this.outgoingStore.createStream(), e.once("readable", function () {
                        function t() {
                            var r = e.read(1);
                            r && (!n.disconnecting && !n.reconnectTimer && 0 < n.options.reconnectPeriod ? (e.read(0), n.outgoing[r.messageId] = t, n._sendPacket(r)) : e.destroy && e.destroy())
                        }
                        t()
                    }).on("error", this.emit.bind(this, "error"))
                }), this.on("close", function () {
                    this.connected = !1
                }), this.on("connect", this._setupPingTimer), this.on("connect", function () {
                    function e() {
                        var r = t.shift(),
                            i = null;
                        r && (i = r.packet, n._sendPacket(i, function (t) {
                            r.cb && r.cb(t),
                                e()
                        }))
                    }
                    var t = this.queue;
                    e()
                }), this.on("close", function () {
                    null !== n.pingTimer && (n.pingTimer.clear(), n.pingTimer = null)
                }), this.on("close", this._setupReconnect), c.EventEmitter.call(this), this._setupStream()
            }
            var c = e("events"),
                f = e("./store"),
                l = e("end-of-stream"),
                h = e("mqtt-packet-for-milkcocoa"),
                p = e("readable-stream").Writable,
                d = e("inherits"),
                g = e("reinterval"),
                m = n.setImmediate || function (e) {
                    r.nextTick(e)
                },
                b = {
                    keepalive: 10,
                    protocolId: "MQTT",
                    protocolVersion: 4,
                    reconnectPeriod: 1e3,
                    connectTimeout: 3e4,
                    clean: !0
                };
            d(u, c.EventEmitter), u.prototype._setupStream = function () {
                function e() {
                    var t = u.shift(),
                        n = s;
                    t ? r._handlePacket(t, e) : (s = null, n())
                }
                var t, r = this,
                    n = new p,
                    i = h.parser(this.options),
                    s = null,
                    u = [];
                this._clearReconnect(), this.stream = this.streamBuilder(this), i.on("packet", function (e) {
                    u.push(e)
                }), n._write = function (t, r, n) {
                    s = n, i.parse(t), e()
                }, this.stream.pipe(n), this.stream.on("error", a), l(this.stream, this.emit.bind(this, "close")), t = Object.create(this.options), t.cmd = "connect", o(this, t), i.on("error", this.emit.bind(this, "error")), this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(function () {
                    r._cleanUp(!0)
                }, this.options.connectTimeout)
            }, u.prototype._handlePacket = function (e, t) {
                switch (e.cmd) {
                    case "publish":
                        this._handlePublish(e, t);
                        break;
                    case "puback":
                    case "pubrec":
                    case "pubcomp":
                    case "suback":
                    case "unsuback":
                        this._handleAck(e), t();
                        break;
                    case "pubrel":
                        this._handlePubrel(e, t);
                        break;
                    case "connack":
                        this._handleConnack(e), t();
                        break;
                    case "pingresp":
                        this._handlePingresp(e), t()
                }
            }, u.prototype._checkDisconnecting = function (e) {
                return this.disconnecting && (e ? e(new Error("client disconnecting")) : this.emit(new Error("client disconnecting"))), this.disconnecting
            }, u.prototype.publish = function (e, t, r, n) {
                var i;
                if ("function" == typeof r && (n = r, r = null), r || (r = {
                        qos: 0,
                        retain: !1
                    }), this._checkDisconnecting(n)) return this;
                switch (i = {
                    cmd: "publish",
                    topic: e,
                    payload: t,
                    qos: r.qos,
                    retain: r.retain,
                    messageId: this._nextId()
                }, r.qos) {
                    case 1:
                    case 2:
                        this.outgoing[i.messageId] = n || a, this._sendPacket(i);
                        break;
                    default:
                        this._sendPacket(i, n)
                }
                return this
            }, u.prototype.subscribe = function () {
                var e, t = Array.prototype.slice.call(arguments),
                    r = [],
                    n = t.shift(),
                    i = t.pop() || a,
                    o = t.pop();
                return "string" == typeof n && (n = [n]), this._checkDisconnecting(i) ? this : ("function" != typeof i && (o = i, i = a), o || (o = {
                    qos: 0
                }), Array.isArray(n) ? n.forEach(function (e) {
                    r.push({
                        topic: e,
                        qos: o.qos
                    })
                }) : Object.keys(n).forEach(function (e) {
                    r.push({
                        topic: e,
                        qos: n[e]
                    })
                }), e = {
                    cmd: "subscribe",
                    subscriptions: r,
                    qos: 1,
                    retain: !1,
                    dup: !1,
                    messageId: this._nextId()
                }, this.outgoing[e.messageId] = i, this._sendPacket(e), this)
            }, u.prototype.unsubscribe = function (e, t) {
                var r = {
                    cmd: "unsubscribe",
                    qos: 1,
                    messageId: this._nextId()
                };
                return t = t || a, this._checkDisconnecting(t) ? this : ("string" == typeof e ? r.unsubscriptions = [e] : "object" == typeof e && e.length && (r.unsubscriptions = e), this.outgoing[r.messageId] = t, this._sendPacket(r), this)
            }, u.prototype.end = function (e, t) {
                function r() {
                    i.incomingStore.close(function () {
                        i.outgoingStore.close(t)
                    })
                }

                function n() {
                    i._cleanUp(e, r)
                }
                var i = this;
                return "function" == typeof e && (t = e, e = !1), this.disconnecting ? !0 : (this.disconnecting = !0, !e && 0 < Object.keys(this.outgoing).length ? this.once("outgoingEmpty", setTimeout.bind(null, n, 10)) : n(), this)
            }, u.prototype._reconnect = function () {
                this.emit("reconnect"), this._setupStream()
            }, u.prototype._setupReconnect = function () {
                var e = this;
                !e.disconnecting && !e.reconnectTimer && 0 < e.options.reconnectPeriod && (this.emit("offline"), e.reconnectTimer = setInterval(function () {
                    e._reconnect()
                }, e.options.reconnectPeriod))
            }, u.prototype._clearReconnect = function () {
                this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = !1)
            }, u.prototype._cleanUp = function (e, t) {
                t && this.stream.on("close", t), e ? this.stream.destroy() : this._sendPacket({
                    cmd: "disconnect"
                }, m.bind(null, this.stream.end.bind(this.stream))), this.reconnectTimer && (this._clearReconnect(), this._setupReconnect()), null !== this.pingTimer && (this.pingTimer.clear(), this.pingTimer = null)
            }, u.prototype._sendPacket = function (e, t) {
                if (!this.connected) return this.queue.push({
                    packet: e,
                    cb: t
                });
                switch (this._shiftPingInterval(), e.qos) {
                    case 2:
                    case 1:
                        s(this, e, t);
                        break;
                    case 0:
                    default:
                        o(this, e, t)
                }
            }, u.prototype._setupPingTimer = function () {
                var e = this;
                !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = g(function () {
                    e._checkPing()
                }, 1e3 * this.options.keepalive))
            }, u.prototype._shiftPingInterval = function () {
                this.pingTimer && this.options.keepalive && this.pingTimer.reschedule(1e3 * this.options.keepalive)
            }, u.prototype._checkPing = function () {
                this.pingResp ? (this.pingResp = !1, this._sendPacket({
                    cmd: "pingreq"
                })) : this._cleanUp(!0)
            }, u.prototype._handlePingresp = function () {
                this.pingResp = !0
            }, u.prototype._handleConnack = function (e) {
                var t = e.returnCode,
                    r = ["", "Unacceptable protocol version", "Identifier rejected", "Server unavailable", "Bad username or password", "Not authorized"];
                clearTimeout(this.connackTimer), 0 === t ? this.emit("connect", e) : t > 0 && this.emit("error", new Error("Connection refused: " + r[t]))
            }, u.prototype._handlePublish = function (e, t) {
                var r = e.topic.toString(),
                    n = e.payload,
                    i = e.qos,
                    o = e.messageId,
                    s = this;
                switch (i) {
                    case 2:
                        this.incomingStore.put(e, function () {
                            s._sendPacket({
                                cmd: "pubrec",
                                messageId: o
                            }, t)
                        });
                        break;
                    case 1:
                        this._sendPacket({
                            cmd: "puback",
                            messageId: o
                        });
                    case 0:
                        this.emit("message", r, n, e), this.handleMessage(e, t)
                }
            }, u.prototype.handleMessage = function (e, t) {
                t()
            }, u.prototype._handleAck = function (e) {
                var t = e.messageId,
                    r = e.cmd,
                    n = null,
                    i = this.outgoing[t],
                    o = this;
                if (i) {
                    switch (r) {
                        case "pubcomp":
                        case "puback":
                            delete this.outgoing[t], this.outgoingStore.del(e, i);
                            break;
                        case "pubrec":
                            n = {
                                cmd: "pubrel",
                                qos: 2,
                                messageId: t
                            }, this._sendPacket(n);
                            break;
                        case "suback":
                            delete this.outgoing[t], this.outgoingStore.del(e, function (t, r) {
                                var n, s = r.subscriptions,
                                    a = e.granted;
                                if (t) return o.emit("error", t);
                                for (n = 0; n < a.length; n += 1) s[n].qos = a[n];
                                i(null, s)
                            });
                            break;
                        case "unsuback":
                            delete this.outgoing[t], this.outgoingStore.del(e, i);
                            break;
                        default:
                            o.emit("error", new Error("unrecognized packet type"))
                    }
                    this.disconnecting && 0 === Object.keys(this.outgoing).length && this.emit("outgoingEmpty")
                }
            }, u.prototype._handlePubrel = function (e, t) {
                var r = e.messageId,
                    n = this;
                n.incomingStore.get(e, function (i, o) {
                    return i ? n.emit("error", i) : ("pubrel" !== o.cmd && (n.emit("message", o.topic, o.payload, o), n.incomingStore.put(e)), void n._sendPacket({
                        cmd: "pubcomp",
                        messageId: r
                    }, t))
                })
            }, u.prototype._nextId = function () {
                var e = this.nextId++;
                return 65535 === e && (this.nextId = 1), e
            }, t.exports = u
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./store": 69,
        _process: 12,
        "end-of-stream": 70,
        events: 7,
        inherits: 73,
        "mqtt-packet-for-milkcocoa": 76,
        "readable-stream": 89,
        reinterval: 91
    }],
    63: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n(e) {
                var t;
                e.auth && (t = e.auth.match(/^(.+):(.+)$/), t ? (e.username = t[1], e.password = t[2]) : e.username = e.auth)
            }

            function i(e, t) {
                function r(e) {
                    return t.servers && (e._reconnectCount && e._reconnectCount !== t.servers.length || (e._reconnectCount = 0), t.host = t.servers[e._reconnectCount].host, t.port = t.servers[e._reconnectCount].port, e._reconnectCount++), u[t.protocol](e, t)
                }
                if ("object" != typeof e || t || (t = e, e = null), t = t || {}, e && (t = a(s.parse(e, !0), t), t.protocol = t.protocol.replace(/\:$/, "")), n(t), t.query && "string" == typeof t.query.clientId && (t.clientId = t.query.clientId), t.cert && t.key) {
                    if (!t.protocol) throw new Error("Missing secure protocol key");
                    if (-1 === ["mqtts", "wss"].indexOf(t.protocol)) switch (t.protocol) {
                        case "mqtt":
                            t.protocol = "mqtts";
                            break;
                        case "ws":
                            t.protocol = "wss";
                            break;
                        default:
                            throw new Error('Unknown protocol for secure conenction: "' + t.protocol + '"!')
                    }
                }
                if (u[t.protocol] || (t.protocol = c.filter(function (e) {
                        return "function" == typeof u[e]
                    })[0]), !1 === t.clean && !t.clientId) throw new Error("Missing clientId for unclean clients");
                return new o(r, t)
            }
            var o = e("../client"),
                s = e("url"),
                a = e("xtend"),
                u = {},
                c = [];
            "browser" !== r.title && (u.mqtt = e("./tcp"), u.tcp = e("./tcp"), u.ssl = e("./tls"), u.tls = e("./tls"), u.mqtts = e("./tls")), u.ws = e("./ws"), u.wss = e("./ws"), "browser" === r.title && (u.sockjs = e("./sockjs"), u.sockjss = e("./sockjs")), c = ["mqtt", "mqtts", "ws", "wss", "sockjs", "sockjss"], t.exports = i, t.exports.connect = i
        }).call(this, e("_process"))
    }, {
        "../client": 62,
        "./sockjs": 64,
        "./tcp": 65,
        "./tls": 66,
        "./ws": 67,
        _process: 12,
        url: 40,
        xtend: 106
    }],
    64: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n(e, t) {
                var r = {
                        protocol: "mqttv3.1"
                    },
                    n = t.hostname || "localhost",
                    i = String(t.port || 80),
                    o = t.path || "/",
                    s = t.protocol + "://" + n + ":" + i + o;
                return "wss" === t.protocol && t.hasOwnProperty("rejectUnauthorized") && (r.rejectUnauthorized = t.rejectUnauthorized), websocket(s)
            }

            function i(e, t) {
                var r, n = s.parse(document.URL);
                return t.protocol || ("https:" === n.protocol ? t.protocol = "https" : t.protocol = "http"), t.hostname || (t.hostnme = t.host), t.hostname || (t.hostname = n.hostname, t.port || (t.port = n.port)), t.port || ("https" === t.protocol ? t.port = 443 : t.port = 80), "sockjss" == t.protocol ? t.protocol = "https" : t.protocol = "http", t.path || (t.path = "/"), r = t.protocol + "://" + t.hostname + ":" + t.port + t.path, o(r)
            }
            var o = e("../sockjs-stream"),
                s = e("url");
            "browser" !== r.title ? t.exports = n : t.exports = i
        }).call(this, e("_process"))
    }, {
        "../sockjs-stream": 68,
        _process: 12,
        url: 40
    }],
    65: [function (e, t, r) {
        "use strict";

        function n(e, t) {
            var r, n;
            return t.port = t.port || 1883, t.hostname = t.hostname || t.host || "localhost", r = t.port, n = t.hostname, i.createConnection(r, n)
        }
        var i = e("net");
        t.exports = n
    }, {
        net: 2
    }],
    66: [function (e, t, r) {
        "use strict";

        function n(e, t) {
            function r(r) {
                t.rejectUnauthorized && e.emit("error", r), n.end()
            }
            var n;
            return t.port = t.port || 8883, t.host = t.hostname || t.host || "localhost", t.rejectUnauthorized = !1 !== t.rejectUnauthorized, n = i.connect(t), n.on("secureConnect", function () {
                t.rejectUnauthorized && !n.authorized ? n.emit("error", new Error("TLS not authorized")) : n.removeListener("error", r)
            }), n.on("error", r), n
        }
        var i = e("tls");
        t.exports = n
    }, {
        tls: 2
    }],
    67: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n(e, t) {
                var r = {
                        protocol: "mqttv3.1"
                    },
                    n = t.hostname || "localhost",
                    i = String(t.port || 80),
                    s = t.path || "/",
                    a = t.protocol + "://" + n + ":" + i + s;
                return "wss" === t.protocol && t.hasOwnProperty("rejectUnauthorized") && (r.rejectUnauthorized = t.rejectUnauthorized), o(a, r)
            }

            function i(e, t) {
                var r, n;
                if ("undefined" == typeof document) throw new Error("Could not determine host. Specify host manually.");
                return n = s.parse(document.URL), t.protocol || ("https:" === n.protocol ? t.protocol = "wss" : t.protocol = "ws"), t.hostname || (t.hostname = t.host), t.hostname || (t.hostname = n.hostname, t.port || (t.port = n.port)), t.port || ("wss" === t.protocol ? t.port = 443 : t.port = 80), t.path || (t.path = "/"), r = t.protocol + "://" + t.hostname + ":" + t.port + t.path, o(r)
            }
            var o = e("websocket-stream"),
                s = e("url");
            "browser" !== r.title ? t.exports = n : t.exports = i
        }).call(this, e("_process"))
    }, {
        _process: 12,
        url: 40,
        "websocket-stream": 105
    }],
    68: [function (e, t, r) {
        (function (r, n) {
            function i(e, t) {
                function i(e, t, r) {
                    m.send(e, r)
                }

                function u(e, t, r) {
                    var n = btoa(String.fromCharCode.apply(null, e));
                    try {
                        m.send(n)
                    } catch (i) {
                        return r(i)
                    }
                    r()
                }

                function c(e) {
                    m.close(), e()
                }

                function f() {
                    g.setReadable(v), g.setWritable(v), g.emit("connect")
                }

                function l() {
                    g.end(), g.destroy()
                }

                function h(e) {
                    g.destroy(e)
                }

                function p(e) {
                    var t = e.data;
                    t instanceof ArrayBuffer && (t = new n(new Uint8Array(t)));
                    var r = new Uint8Array(atob(t).split("").map(function (e) {
                            return e.charCodeAt(0)
                        })),
                        i = new n(r);
                    v.push(i)
                }

                function d() {
                    m.close()
                }
                var g, m, b = "browser" === r.title ? u : i,
                    v = o(b, c);
                return m = "object" == typeof e ? e : new a(e, t), 1 === m.readyState ? g = v : (g = s(), m.addEventListener("open", f)), g.socket = m, m.addEventListener("close", l), m.addEventListener("error", h), m.addEventListener("message", p), v.on("close", d), g
            }
            var o = e("through2"),
                s = e("duplexify"),
                a = e("../sockjs");
            t.exports = i
        }).call(this, e("_process"), e("buffer").Buffer)
    }, {
        "../sockjs": 107,
        _process: 12,
        buffer: 3,
        duplexify: 45,
        through2: 92
    }],
    69: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n() {
                return this instanceof n ? void(this._inflights = {}) : new n
            }
            var i = e("readable-stream").Readable,
                o = {
                    objectMode: !0
                };
            n.prototype.put = function (e, t) {
                return this._inflights[e.messageId] = e, t && t(), this
            }, n.prototype.createStream = function () {
                var e = new i(o),
                    t = this._inflights,
                    n = Object.keys(this._inflights),
                    s = !1,
                    a = 0;
                return e._read = function () {
                    !s && a < n.length ? this.push(t[n[a++]]) : this.push(null)
                }, e.destroy = function () {
                    if (!s) {
                        var e = this;
                        s = !0, r.nextTick(function () {
                            e.emit("close")
                        })
                    }
                }, e
            }, n.prototype.del = function (e, t) {
                return e = this._inflights[e.messageId], e ? (delete this._inflights[e.messageId], t(null, e)) : t && t(new Error("missing packet")), this
            }, n.prototype.get = function (e, t) {
                return e = this._inflights[e.messageId], e ? t(null, e) : t && t(new Error("missing packet")), this
            }, n.prototype.close = function (e) {
                this._inflights = null, e && e()
            }, t.exports = n
        }).call(this, e("_process"))
    }, {
        _process: 12,
        "readable-stream": 89
    }],
    70: [function (e, t, r) {
        var n = e("once"),
            i = function () {},
            o = function (e) {
                return e.setHeader && "function" == typeof e.abort
            },
            s = function (e) {
                return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length
            },
            a = function (e, t, r) {
                if ("function" == typeof t) return a(e, null, t);
                t || (t = {}), r = n(r || i);
                var u = e._writableState,
                    c = e._readableState,
                    f = t.readable || t.readable !== !1 && e.readable,
                    l = t.writable || t.writable !== !1 && e.writable,
                    h = function () {
                        e.writable || p()
                    },
                    p = function () {
                        l = !1, f || r()
                    },
                    d = function () {
                        f = !1, l || r()
                    },
                    g = function (e) {
                        r(e ? new Error("exited with error code: " + e) : null)
                    },
                    m = function () {
                        return (!f || c && c.ended) && (!l || u && u.ended) ? void 0 : r(new Error("premature close"))
                    },
                    b = function () {
                        e.req.on("finish", p)
                    };
                return o(e) ? (e.on("complete", p), e.on("abort", m), e.req ? b() : e.on("request", b)) : l && !u && (e.on("end", h), e.on("close", h)), s(e) && e.on("exit", g), e.on("end", d), e.on("finish", p), t.error !== !1 && e.on("error", r), e.on("close", m),
                    function () {
                        e.removeListener("complete", p), e.removeListener("abort", m), e.removeListener("request", b), e.req && e.req.removeListener("finish", p), e.removeListener("end", h), e.removeListener("close", h), e.removeListener("finish", p), e.removeListener("exit", g), e.removeListener("end", d), e.removeListener("error", r), e.removeListener("close", m)
                    }
            };
        t.exports = a
    }, {
        once: 72
    }],
    71: [function (e, t, r) {
        arguments[4][47][0].apply(r, arguments)
    }, {
        dup: 47
    }],
    72: [function (e, t, r) {
        arguments[4][48][0].apply(r, arguments)
    }, {
        dup: 48,
        wrappy: 71
    }],
    73: [function (e, t, r) {
        arguments[4][9][0].apply(r, arguments)
    }, {
        dup: 9
    }],
    74: [function (e, t, r) {
        t.exports.types = {
            0: "reserved",
            1: "connect",
            2: "connack",
            3: "publish",
            4: "puback",
            5: "pubrec",
            6: "pubrel",
            7: "pubcomp",
            8: "subscribe",
            9: "suback",
            10: "unsubscribe",
            11: "unsuback",
            12: "pingreq",
            13: "pingresp",
            14: "disconnect",
            15: "reserved"
        }, t.exports.codes = {};
        for (var n in t.exports.types) {
            var i = t.exports.types[n];
            t.exports.codes[i] = n
        }
        t.exports.CMD_SHIFT = 4, t.exports.CMD_MASK = 240, t.exports.DUP_MASK = 8, t.exports.QOS_MASK = 3, t.exports.QOS_SHIFT = 1, t.exports.RETAIN_MASK = 1, t.exports.LENGTH_MASK = 127, t.exports.LENGTH_FIN_MASK = 128, t.exports.SESSIONPRESENT_MASK = 1, t.exports.USERNAME_MASK = 128, t.exports.PASSWORD_MASK = 64, t.exports.WILL_RETAIN_MASK = 32, t.exports.WILL_QOS_MASK = 24, t.exports.WILL_QOS_SHIFT = 3, t.exports.WILL_FLAG_MASK = 4, t.exports.CLEAN_SESSION_MASK = 2
    }, {}],
    75: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n(e) {
                switch (e.cmd) {
                    case "connect":
                        return i(e);
                    case "connack":
                        return o(e);
                    case "publish":
                        return s(e);
                    case "puback":
                    case "pubrec":
                    case "pubrel":
                    case "pubcomp":
                    case "unsuback":
                        return a(e);
                    case "subscribe":
                        return u(e);
                    case "suback":
                        return c(e);
                    case "unsubscribe":
                        return f(e);
                    case "pingreq":
                    case "pingresp":
                    case "disconnect":
                        return l(e);
                    default:
                        throw new Error("unknown command")
                }
            }

            function i(e) {
                var e = e || {},
                    t = e.protocolId || "MQTT",
                    n = e.protocolVersion || 4,
                    i = e.will,
                    o = e.clean,
                    s = e.keepalive || 0,
                    a = e.clientId,
                    u = e.username,
                    c = e.password;
                void 0 === o && (o = !0);
                var f = 0;
                if (!t || "string" != typeof t && !r.isBuffer(t)) throw new Error("Invalid protocol id");
                if (f += t.length + 2, !n || "number" != typeof n || n > 255 || 0 > n) throw new Error("Invalid protocol version");
                if (f += 1, !a || "string" != typeof a && !r.isBuffer(a)) throw new Error("Invalid client id");
                if (f += a.length + 2, "number" != typeof s || 0 > s || s > 65535) throw new Error("Invalid keepalive");
                if (f += 2, f += 1, i) {
                    if ("object" != typeof i) throw new Error("Invalid will");
                    if (!i.topic || "string" != typeof i.topic) throw new Error("Invalid will topic");
                    if (f += i.topic.length + 2, i.payload && i.payload) {
                        if (!(i.payload.length >= 0)) throw new Error("Invalid will payload");
                        f += "string" == typeof i.payload ? r.byteLength(i.payload) + 2 : i.payload.length + 2
                    } else f += 2
                }
                if (u) {
                    if (!u.length) throw new Error("Invalid username");
                    f += u.length + 2
                }
                if (c) {
                    if (!c.length) throw new Error("Invalid password");
                    f += c.length + 2
                }
                var l = new r(1 + h(f) + f),
                    g = 0;
                l.writeUInt8(y.codes.connect << y.CMD_SHIFT, g++), g += p(l, g, f), g += v(l, g, t), l.writeUInt8(n, g++);
                var m = 0;
                return m |= u ? y.USERNAME_MASK : 0, m |= c ? y.PASSWORD_MASK : 0, m |= i && i.retain ? y.WILL_RETAIN_MASK : 0, m |= i && i.qos ? i.qos << y.WILL_QOS_SHIFT : 0, m |= i ? y.WILL_FLAG_MASK : 0, m |= o ? y.CLEAN_SESSION_MASK : 0, l.writeUInt8(m, g++), g += b(l, g, s), g += v(l, g, a), i && (g += d(l, g, i.topic), g += v(l, g, i.payload)), u && (g += v(l, g, u)), c && (g += v(l, g, c)), l
            }

            function o(e) {
                var e = e || {},
                    t = e.returnCode;
                if ("number" != typeof t) throw new Error("Invalid return code");
                var n = new r(12),
                    i = 0;
                return n.writeUInt8(y.codes.connack << y.CMD_SHIFT, i++), i += p(n, i, 10), n.writeUInt8(e.sessionPresent && y.SESSIONPRESENT_MASK || 0, i++), n.writeUInt8(t, i++), n.writeUInt32BE(0, i), i += 4, n.writeUInt32BE(0, i), i += 4, n
            }

            function s(e) {
                var e = e || {},
                    t = e.dup ? y.DUP_MASK : 0,
                    n = e.qos,
                    i = e.retain ? y.RETAIN_MASK : 0,
                    o = e.topic,
                    s = e.payload || _,
                    a = e.messageId,
                    u = 0;
                if ("string" == typeof o) u += r.byteLength(o) + 2;
                else {
                    if (!r.isBuffer(o)) throw new Error("Invalid topic");
                    u += o.length + 2
                }
                if (u += r.isBuffer(s) ? s.length : r.byteLength(s), n && "number" != typeof a) throw new Error("Invalid message id");
                n && (u += 2);
                var c = new r(1 + h(u) + u),
                    f = 0;
                return c[f++] = y.codes.publish << y.CMD_SHIFT | t | n << y.QOS_SHIFT | i, f += p(c, f, u), f += v(c, f, o), n > 0 && (f += b(c, f, a)), r.isBuffer(s) ? m(c, f, s) : g(c, f, s), c
            }

            function a(e) {
                var e = e || {},
                    t = e.cmd || "puback",
                    n = e.messageId,
                    i = e.dup && "pubrel" === t ? y.DUP_MASK : 0,
                    o = 0;
                if ("pubrel" === t ? o = 1 : "pubcomp" === t && (o = 2), "number" != typeof n) throw new Error("Invalid message id");
                var s = new r(4),
                    a = 0;
                return s[a++] = y.codes[t] << y.CMD_SHIFT | i | o << y.QOS_SHIFT, a += p(s, a, 2), a += b(s, a, n), s
            }

            function u(e) {
                var e = e || {},
                    t = e.dup ? y.DUP_MASK : 0,
                    n = e.qos || 0,
                    i = e.messageId,
                    o = e.subscriptions,
                    s = 0;
                if ("number" != typeof i) throw new Error("Invalid message id");
                if (s += 2, "object" != typeof o || !o.length) throw new Error("Invalid subscriptions");
                for (var a = 0; a < o.length; a += 1) {
                    var u = o[a].topic,
                        n = o[a].qos;
                    if ("string" != typeof u) throw new Error("Invalid subscriptions - invalid topic");
                    if ("number" != typeof n) throw new Error("Invalid subscriptions - invalid qos");
                    s += r.byteLength(u) + 2 + 1
                }
                var c = new r(1 + h(s) + s),
                    f = 0;
                c.writeUInt8(y.codes.subscribe << y.CMD_SHIFT | t | 1 << y.QOS_SHIFT, f++), f += p(c, f, s), f += b(c, f, i);
                for (var a = 0; a < o.length; a++) {
                    var l = o[a],
                        u = l.topic,
                        n = l.qos;
                    f += d(c, f, u), c.writeUInt8(n, f++)
                }
                return c
            }

            function c(e) {
                var e = e || {},
                    t = e.messageId,
                    n = e.granted,
                    i = 0;
                if ("number" != typeof t) throw new Error("Invalid message id");
                if (i += 2, "object" != typeof n || !n.length) throw new Error("Invalid qos vector");
                for (var o = 0; o < n.length; o += 1) {
                    if ("number" != typeof n[o]) throw new Error("Invalid qos vector");
                    i += 1
                }
                var s = new r(1 + h(i) + i),
                    a = 0;
                s.writeUInt8(y.codes.suback << y.CMD_SHIFT, a++), a += p(s, a, i), a += b(s, a, t);
                for (var o = 0; o < n.length; o++) s.writeUInt8(n[o], a++);
                return s
            }

            function f(e) {
                var e = e || {},
                    t = e.messageId,
                    n = e.dup ? y.DUP_MASK : 0,
                    i = e.unsubscriptions,
                    o = 0;
                if ("number" != typeof t) throw new Error("Invalid message id");
                if (o += 2, "object" != typeof i || !i.length) throw new Error("Invalid unsubscriptions");
                for (var s = 0; s < i.length; s += 1) {
                    if ("string" != typeof i[s]) throw new Error("Invalid unsubscriptions");
                    o += r.byteLength(i[s]) + 2
                }
                var a = new r(1 + h(o) + o),
                    u = 0;
                a[u++] = y.codes.unsubscribe << y.CMD_SHIFT | n | 1 << y.QOS_SHIFT, u += p(a, u, o), u += b(a, u, t);
                for (var s = 0; s < i.length; s++) u += d(a, u, i[s]);
                return a
            }

            function l(e) {
                var t = new r(2);
                return t[0] = y.codes[e.cmd] << 4, t[1] = 0, t
            }

            function h(e) {
                return e >= 0 && 128 > e ? 1 : e >= 128 && 16384 > e ? 2 : e >= 16384 && 2097152 > e ? 3 : e >= 2097152 && 268435456 > e ? 4 : 0
            }

            function p(e, t, r) {
                var n = 0,
                    i = t;
                do n = r % 128 | 0, r = r / 128 | 0, r > 0 && (n = 128 | n), e.writeUInt8(n, t++); while (r > 0);
                return t - i
            }

            function d(e, t, n) {
                var i = r.byteLength(n);
                return b(e, t, i), g(e, t + 2, n), i + 2
            }

            function g(e, t, r) {
                e.write(r, t)
            }

            function m(e, t, r) {
                return r.copy(e, t), r.length
            }

            function b(e, t, r) {
                return e.writeUInt8(r >> 8, t), e.writeUInt8(255 & r, t + 1), 2
            }

            function v(e, t, r) {
                var n = 0;
                return r && "string" == typeof r ? n += d(e, t + n, r) : r ? (n += b(e, t + n, r.length), n += m(e, t + n, r)) : n += b(e, t + n, 0), n
            }
            var y = e("./constants"),
                _ = new r(0);
            t.exports = n
        }).call(this, e("buffer").Buffer)
    }, {
        "./constants": 74,
        buffer: 3
    }],
    76: [function (e, t, r) {
        "use strict";
        r.parser = e("./parser"), r.generate = e("./generate")
    }, {
        "./generate": 75,
        "./parser": 79
    }],
    77: [function (e, t, r) {
        (function (r) {
            function n(e) {
                if (!(this instanceof n)) return new n(e);
                if (this._bufs = [], this.length = 0, "function" == typeof e) {
                    this._callback = e;
                    var t = function (e) {
                        this._callback && (this._callback(e), this._callback = null)
                    }.bind(this);
                    this.on("pipe", function (e) {
                        e.on("error", t)
                    }), this.on("unpipe", function (e) {
                        e.removeListener("error", t)
                    })
                } else r.isBuffer(e) ? this.append(e) : Array.isArray(e) && e.forEach(function (e) {
                    r.isBuffer(e) && this.append(e)
                }.bind(this));
                i.call(this)
            }
            var i = e("readable-stream/duplex"),
                o = e("util");
            o.inherits(n, i), n.prototype._offset = function (e) {
                    for (var t, r = 0, n = 0; n < this._bufs.length; n++) {
                        if (t = r + this._bufs[n].length, t > e) return [n, e - r];
                        r = t
                    }
                }, n.prototype.append = function (e) {
                    var t = r.isBuffer(e) || e instanceof n;
                    return "number" == typeof e && (e = e.toString()), this._bufs.push(t ? e : new r(e)), this.length += e.length, this
                }, n.prototype._write = function (e, t, r) {
                    this.append(e), r && r()
                }, n.prototype._read = function (e) {
                    return this.length ? (e = Math.min(e, this.length), this.push(this.slice(0, e)), void this.consume(e)) : this.push(null)
                }, n.prototype.end = function (e) {
                    i.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null)
                }, n.prototype.get = function (e) {
                    return this.slice(e, e + 1)[0]
                }, n.prototype.slice = function (e, t) {
                    return this.copy(null, 0, e, t)
                }, n.prototype.copy = function (e, t, n, i) {
                    if (("number" != typeof n || 0 > n) && (n = 0), ("number" != typeof i || i > this.length) && (i = this.length), n >= this.length) return e || new r(0);
                    if (0 >= i) return e || new r(0);
                    var o, s, a = !!e,
                        u = this._offset(n),
                        c = i - n,
                        f = c,
                        l = a && t || 0,
                        h = u[1];
                    if (0 === n && i == this.length) {
                        if (!a) return r.concat(this._bufs);
                        for (s = 0; s < this._bufs.length; s++) this._bufs[s].copy(e, l), l += this._bufs[s].length;
                        return e
                    }
                    if (f <= this._bufs[u[0]].length - h) return a ? this._bufs[u[0]].copy(e, t, h, h + f) : this._bufs[u[0]].slice(h, h + f);
                    for (a || (e = new r(c)), s = u[0]; s < this._bufs.length; s++) {
                        if (o = this._bufs[s].length - h, !(f > o)) {
                            this._bufs[s].copy(e, l, h, h + f);
                            break
                        }
                        this._bufs[s].copy(e, l, h), l += o, f -= o, h && (h = 0)
                    }
                    return e
                }, n.prototype.toString = function (e, t, r) {
                    return this.slice(t, r).toString(e)
                }, n.prototype.consume = function (e) {
                    for (; this._bufs.length;) {
                        if (!(e > this._bufs[0].length)) {
                            this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
                            break
                        }
                        e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                    }
                    return this
                }, n.prototype.duplicate = function () {
                    for (var e = 0, t = new n; e < this._bufs.length; e++) t.append(this._bufs[e]);
                    return t
                }, n.prototype.destroy = function () {
                    this._bufs.length = 0, this.length = 0, this.push(null)
                },
                function () {
                    var e = {
                        readDoubleBE: 8,
                        readDoubleLE: 8,
                        readFloatBE: 4,
                        readFloatLE: 4,
                        readInt32BE: 4,
                        readInt32LE: 4,
                        readUInt32BE: 4,
                        readUInt32LE: 4,
                        readInt16BE: 2,
                        readInt16LE: 2,
                        readUInt16BE: 2,
                        readUInt16LE: 2,
                        readInt8: 1,
                        readUInt8: 1
                    };
                    for (var t in e) ! function (t) {
                        n.prototype[t] = function (r) {
                            return this.slice(r, r + e[t])[t](0)
                        }
                    }(t)
                }(), t.exports = n
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 3,
        "readable-stream/duplex": 80,
        util: 43
    }],
    78: [function (e, t, r) {
        function n() {
            this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null
        }
        t.exports = n
    }, {}],
    79: [function (e, t, r) {
        function n() {
            return this instanceof n ? (this._list = i(), this._newPacket(), this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], void(this._stateCounter = 0)) : new n
        }
        var i = e("bl"),
            o = e("inherits"),
            s = e("events").EventEmitter,
            a = e("./packet"),
            u = e("./constants");
        o(n, s), n.prototype._newPacket = function () {
            return this.packet && (this._list.consume(this.packet.length), this.emit("packet", this.packet)), this.packet = new a, !0
        }, n.prototype.parse = function (e) {
            for (this._list.append(e);
                (-1 != this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]();) this._stateCounter++, this._stateCounter >= this._states.length && (this._stateCounter = 0);
            return this._list.length
        }, n.prototype._parseHeader = function () {
            var e = this._list.readUInt8(0);
            return this.packet.cmd = u.types[e >> u.CMD_SHIFT], this.packet.retain = 0 !== (e & u.RETAIN_MASK), this.packet.qos = e >> u.QOS_SHIFT & u.QOS_MASK, this.packet.dup = 0 !== (e & u.DUP_MASK), this._list.consume(1), !0
        }, n.prototype._parseLength = function () {
            for (var e, t = 0, r = 1, n = 0, i = !0; 5 > t && (e = this._list.readUInt8(t++), n += r * (e & u.LENGTH_MASK), r *= 128, 0 !== (e & u.LENGTH_FIN_MASK));)
                if (this._list.length <= t) {
                    i = !1;
                    break
                }
            return i && (this.packet.length = n, this._list.consume(t)), i
        }, n.prototype._parsePayload = function () {
            var e = !1;
            if (0 === this.packet.length || this._list.length >= this.packet.length) {
                switch (this._pos = 0, this.packet.cmd) {
                    case "connect":
                        this._parseConnect();
                        break;
                    case "connack":
                        this._parseConnack();
                        break;
                    case "publish":
                        this._parsePublish();
                        break;
                    case "puback":
                    case "pubrec":
                    case "pubrel":
                    case "pubcomp":
                        this._parseMessageId();
                        break;
                    case "subscribe":
                        this._parseSubscribe();
                        break;
                    case "suback":
                        this._parseSuback();
                        break;
                    case "unsubscribe":
                        this._parseUnsubscribe();
                        break;
                    case "unsuback":
                        this._parseUnsuback();
                        break;
                    case "pingreq":
                    case "pingresp":
                    case "disconnect":
                        break;
                    default:
                        this.emit("error", new Error("not supported"))
                }
                e = !0
            }
            return e
        }, n.prototype._parseConnect = function () {
            var e, t, r, n, i, o, s = {},
                a = this.packet;
            if (e = this._parseString(), null === e) return this.emit("error", new Error("cannot parse protocol id"));
            if (a.protocolId = e, this._pos > this._list.length) return this.emit("error", new Error("packet too short"));
            if (a.protocolVersion = this._list.readUInt8(this._pos), this._pos++, s.username = this._list.readUInt8(this._pos) & u.USERNAME_MASK, s.password = this._list.readUInt8(this._pos) & u.PASSWORD_MASK, s.will = this._list.readUInt8(this._pos) & u.WILL_FLAG_MASK, s.will && (a.will = {}, a.will.retain = 0 !== (this._list.readUInt8(this._pos) & u.WILL_RETAIN_MASK), a.will.qos = (this._list.readUInt8(this._pos) & u.WILL_QOS_MASK) >> u.WILL_QOS_SHIFT), a.clean = 0 !== (this._list.readUInt8(this._pos) & u.CLEAN_SESSION_MASK), this._pos++, a.keepalive = this._parseNum(), -1 === a.keepalive) return this.emit("error", new Error("packet too short"));
            if (t = this._parseString(), null === t) return this.emit("error", new Error("packet too short"));
            if (a.clientId = t, s.will) {
                if (r = this._parseString(), null === r) return this.emit("error", new Error("cannot parse will topic"));
                if (a.will.topic = r, n = this._parseBuffer(), null === n) return this.emit("error", new Error("cannot parse will payload"));
                a.will.payload = n
            }
            if (s.username) {
                if (o = this._parseString(), null === o) return this.emit("error", new Error("cannot parse username"));
                a.username = o
            }
            if (s.password) {
                if (i = this._parseBuffer(), null === i) return this.emit("error", new Error("cannot parse username"));
                a.password = i
            }
            return a
        }, n.prototype._parseConnack = function () {
            var e = this.packet;
            if (e.sessionPresent = !!(this._list.readUInt8(this._pos++) & u.SESSIONPRESENT_MASK), e.returnCode = this._list.readUInt8(this._pos++), this._list.length >= 10) {
                var t = this._list.readUInt32BE(this._pos);
                this._pos += 4;
                var r = this._list.readUInt32BE(this._pos);
                e.ts = t * Math.pow(2, 32) + r
            }
            return -1 === e.returnCode ? this.emit("error", new Error("cannot parse return code")) : void 0
        }, n.prototype._parsePublish = function () {
            var e = this.packet;
            return e.topic = this._parseString(), null === e.topic ? this.emit("error", new Error("cannot parse topic")) : void(e.qos > 0 && !this._parseMessageId() || (e.payload = this._list.slice(this._pos, e.length)))
        }, n.prototype._parseSubscribe = function () {
            var e, t, r = this.packet;
            if (1 != r.qos) return this.emit("error", new Error("wrong subscribe header"));
            if (r.subscriptions = [], this._parseMessageId())
                for (; this._pos < r.length;) {
                    if (e = this._parseString(), null === e) return this.emit("error", new Error("Parse error - cannot parse topic"));
                    t = this._list.readUInt8(this._pos++), r.subscriptions.push({
                        topic: e,
                        qos: t
                    })
                }
        }, n.prototype._parseSuback = function () {
            if (this.packet.granted = [], this._parseMessageId())
                for (; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++))
        }, n.prototype._parseUnsubscribe = function () {
            var e = this.packet;
            if (e.unsubscriptions = [], this._parseMessageId())
                for (; this._pos < e.length;) {
                    var t;
                    if (t = this._parseString(), null === t) return this.emit("error", new Error("cannot parse topic"));
                    e.unsubscriptions.push(t)
                }
        }, n.prototype._parseUnsuback = function () {
            return this._parseMessageId() ? void 0 : this.emit("error", new Error("cannot parse message id"))
        }, n.prototype._parseMessageId = function () {
            var e = this.packet;
            return e.messageId = this._parseNum(), null === e.messageId ? (this.emit("error", new Error("cannot parse message id")), !1) : !0
        }, n.prototype._parseString = function (e) {
            var t, r = this._parseNum();
            return -1 === r || r + this._pos > this._list.length ? null : (t = this._list.toString("utf8", this._pos, this._pos + r), this._pos += r, t)
        }, n.prototype._parseBuffer = function () {
            var e, t = this._parseNum();
            return -1 === t || t + this._pos > this._list.length ? null : (e = this._list.slice(this._pos, this._pos + t), this._pos += t, e)
        }, n.prototype._parseNum = function () {
            if (2 > this._pos + this._list.length) return -1;
            var e = this._list.readUInt16BE(this._pos);
            return this._pos += 2, e
        }, t.exports = n
    }, {
        "./constants": 74,
        "./packet": 78,
        bl: 77,
        events: 7,
        inherits: 73
    }],
    80: [function (e, t, r) {
        arguments[4][17][0].apply(r, arguments)
    }, {
        "./lib/_stream_duplex.js": 81,
        dup: 17
    }],
    81: [function (e, t, r) {
        (function (r) {
            function n(e) {
                return this instanceof n ? (u.call(this, e), c.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", i)) : new n(e)
            }

            function i() {
                this.allowHalfOpen || this._writableState.ended || r.nextTick(this.end.bind(this))
            }

            function o(e, t) {
                for (var r = 0, n = e.length; n > r; r++) t(e[r], r)
            }
            t.exports = n;
            var s = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                },
                a = e("core-util-is");
            a.inherits = e("inherits");
            var u = e("./_stream_readable"),
                c = e("./_stream_writable");
            a.inherits(n, u), o(s(c.prototype), function (e) {
                n.prototype[e] || (n.prototype[e] = c.prototype[e])
            })
        }).call(this, e("_process"))
    }, {
        "./_stream_readable": 83,
        "./_stream_writable": 85,
        _process: 12,
        "core-util-is": 86,
        inherits: 73
    }],
    82: [function (e, t, r) {
        function n(e) {
            return this instanceof n ? void i.call(this, e) : new n(e)
        }
        t.exports = n;
        var i = e("./_stream_transform"),
            o = e("core-util-is");
        o.inherits = e("inherits"), o.inherits(n, i), n.prototype._transform = function (e, t, r) {
            r(null, e)
        }
    }, {
        "./_stream_transform": 84,
        "core-util-is": 86,
        inherits: 73
    }],
    83: [function (e, t, r) {
        (function (r) {
            function n(t, r) {
                t = t || {};
                var n = t.highWaterMark;
                this.highWaterMark = n || 0 === n ? n : 16384, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = !1, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.calledRead = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!t.objectMode, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (T || (T = e("string_decoder/").StringDecoder), this.decoder = new T(t.encoding), this.encoding = t.encoding)
            }

            function i(e) {
                return this instanceof i ? (this._readableState = new n(e, this), this.readable = !0, void R.call(this)) : new i(e)
            }

            function o(e, t, r, n, i) {
                var o = c(t, r);
                if (o) e.emit("error", o);
                else if (null === r || void 0 === r) t.reading = !1, t.ended || f(e, t);
                else if (t.objectMode || r && r.length > 0)
                    if (t.ended && !i) {
                        var a = new Error("stream.push() after EOF");
                        e.emit("error", a)
                    } else if (t.endEmitted && i) {
                    var a = new Error("stream.unshift() after end event");
                    e.emit("error", a)
                } else !t.decoder || i || n || (r = t.decoder.write(r)), t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : (t.reading = !1, t.buffer.push(r)), t.needReadable && l(e), p(e, t);
                else i || (t.reading = !1);
                return s(t)
            }

            function s(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }

            function a(e) {
                if (e >= M) e = M;
                else {
                    e--;
                    for (var t = 1; 32 > t; t <<= 1) e |= e >> t;
                    e++
                }
                return e
            }

            function u(e, t) {
                return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : null === e || isNaN(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : 0 >= e ? 0 : (e > t.highWaterMark && (t.highWaterMark = a(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e)
            }

            function c(e, t) {
                var r = null;
                return k.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")), r
            }

            function f(e, t) {
                if (t.decoder && !t.ended) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0, t.length > 0 ? l(e) : _(e)
            }

            function l(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, t.sync ? r.nextTick(function () {
                    h(e)
                }) : h(e))
            }

            function h(e) {
                e.emit("readable")
            }

            function p(e, t) {
                t.readingMore || (t.readingMore = !0, r.nextTick(function () {
                    d(e, t)
                }))
            }

            function d(e, t) {
                for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (e.read(0), r !== t.length);) r = t.length;
                t.readingMore = !1
            }

            function g(e) {
                return function () {
                    var t = e._readableState;
                    t.awaitDrain--, 0 === t.awaitDrain && m(e)
                }
            }

            function m(e) {
                function t(e, t, i) {
                    var o = e.write(r);
                    !1 === o && n.awaitDrain++
                }
                var r, n = e._readableState;
                for (n.awaitDrain = 0; n.pipesCount && null !== (r = e.read());)
                    if (1 === n.pipesCount ? t(n.pipes, 0, null) : w(n.pipes, t), e.emit("data", r), n.awaitDrain > 0) return;
                return 0 === n.pipesCount ? (n.flowing = !1, void(x.listenerCount(e, "data") > 0 && v(e))) : void(n.ranOut = !0)
            }

            function b() {
                this._readableState.ranOut && (this._readableState.ranOut = !1, m(this))
            }

            function v(e, t) {
                var n = e._readableState;
                if (n.flowing) throw new Error("Cannot switch to old mode now.");
                var i = t || !1,
                    o = !1;
                e.readable = !0, e.pipe = R.prototype.pipe, e.on = e.addListener = R.prototype.on, e.on("readable", function () {
                    o = !0;
                    for (var t; !i && null !== (t = e.read());) e.emit("data", t);
                    null === t && (o = !1, e._readableState.needReadable = !0)
                }), e.pause = function () {
                    i = !0, this.emit("pause")
                }, e.resume = function () {
                    i = !1, o ? r.nextTick(function () {
                        e.emit("readable")
                    }) : this.read(0), this.emit("resume")
                }, e.emit("readable")
            }

            function y(e, t) {
                var r, n = t.buffer,
                    i = t.length,
                    o = !!t.decoder,
                    s = !!t.objectMode;
                if (0 === n.length) return null;
                if (0 === i) r = null;
                else if (s) r = n.shift();
                else if (!e || e >= i) r = o ? n.join("") : k.concat(n, i), n.length = 0;
                else if (e < n[0].length) {
                    var a = n[0];
                    r = a.slice(0, e), n[0] = a.slice(e)
                } else if (e === n[0].length) r = n.shift();
                else {
                    r = o ? "" : new k(e);
                    for (var u = 0, c = 0, f = n.length; f > c && e > u; c++) {
                        var a = n[0],
                            l = Math.min(e - u, a.length);
                        o ? r += a.slice(0, l) : a.copy(r, u, 0, l), l < a.length ? n[0] = a.slice(l) : n.shift(), u += l
                    }
                }
                return r
            }

            function _(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error("endReadable called on non-empty stream");
                !t.endEmitted && t.calledRead && (t.ended = !0, r.nextTick(function () {
                    t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
                }))
            }

            function w(e, t) {
                for (var r = 0, n = e.length; n > r; r++) t(e[r], r)
            }

            function S(e, t) {
                for (var r = 0, n = e.length; n > r; r++)
                    if (e[r] === t) return r;
                return -1
            }
            t.exports = i;
            var E = e("isarray"),
                k = e("buffer").Buffer;
            i.ReadableState = n;
            var x = e("events").EventEmitter;
            x.listenerCount || (x.listenerCount = function (e, t) {
                return e.listeners(t).length
            });
            var R = e("stream"),
                j = e("core-util-is");
            j.inherits = e("inherits");
            var T;
            j.inherits(i, R), i.prototype.push = function (e, t) {
                var r = this._readableState;
                return "string" != typeof e || r.objectMode || (t = t || r.defaultEncoding, t !== r.encoding && (e = new k(e, t), t = "")), o(this, r, e, t, !1)
            }, i.prototype.unshift = function (e) {
                var t = this._readableState;
                return o(this, t, e, "", !0)
            }, i.prototype.setEncoding = function (t) {
                T || (T = e("string_decoder/").StringDecoder), this._readableState.decoder = new T(t), this._readableState.encoding = t
            };
            var M = 8388608;
            i.prototype.read = function (e) {
                var t = this._readableState;
                t.calledRead = !0;
                var r, n = e;
                if (("number" != typeof e || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return l(this), null;
                if (e = u(e, t), 0 === e && t.ended) return r = null, t.length > 0 && t.decoder && (r = y(e, t), t.length -= r.length), 0 === t.length && _(this), r;
                var i = t.needReadable;
                return t.length - e <= t.highWaterMark && (i = !0), (t.ended || t.reading) && (i = !1), i && (t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), i && !t.reading && (e = u(n, t)), r = e > 0 ? y(e, t) : null, null === r && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), t.ended && !t.endEmitted && 0 === t.length && _(this), r
            }, i.prototype._read = function (e) {
                this.emit("error", new Error("not implemented"))
            }, i.prototype.pipe = function (e, t) {
                function n(e) {
                    e === f && o()
                }

                function i() {
                    e.end()
                }

                function o() {
                    e.removeListener("close", a), e.removeListener("finish", u), e.removeListener("drain", d), e.removeListener("error", s), e.removeListener("unpipe", n), f.removeListener("end", i), f.removeListener("end", o), e._writableState && !e._writableState.needDrain || d()
                }

                function s(t) {
                    c(), e.removeListener("error", s), 0 === x.listenerCount(e, "error") && e.emit("error", t)
                }

                function a() {
                    e.removeListener("finish", u), c()
                }

                function u() {
                    e.removeListener("close", a), c()
                }

                function c() {
                    f.unpipe(e)
                }
                var f = this,
                    l = this._readableState;
                switch (l.pipesCount) {
                    case 0:
                        l.pipes = e;
                        break;
                    case 1:
                        l.pipes = [l.pipes, e];
                        break;
                    default:
                        l.pipes.push(e)
                }
                l.pipesCount += 1;
                var h = (!t || t.end !== !1) && e !== r.stdout && e !== r.stderr,
                    p = h ? i : o;
                l.endEmitted ? r.nextTick(p) : f.once("end", p), e.on("unpipe", n);
                var d = g(f);
                return e.on("drain", d), e._events && e._events.error ? E(e._events.error) ? e._events.error.unshift(s) : e._events.error = [s, e._events.error] : e.on("error", s), e.once("close", a), e.once("finish", u), e.emit("pipe", f), l.flowing || (this.on("readable", b), l.flowing = !0, r.nextTick(function () {
                    m(f)
                })), e
            }, i.prototype.unpipe = function (e) {
                var t = this._readableState;
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, this.removeListener("readable", b), t.flowing = !1, e && e.emit("unpipe", this), this);
                if (!e) {
                    var r = t.pipes,
                        n = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, this.removeListener("readable", b), t.flowing = !1;
                    for (var i = 0; n > i; i++) r[i].emit("unpipe", this);
                    return this
                }
                var i = S(t.pipes, e);
                return -1 === i ? this : (t.pipes.splice(i, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
            }, i.prototype.on = function (e, t) {
                var r = R.prototype.on.call(this, e, t);
                if ("data" !== e || this._readableState.flowing || v(this), "readable" === e && this.readable) {
                    var n = this._readableState;
                    n.readableListening || (n.readableListening = !0, n.emittedReadable = !1, n.needReadable = !0, n.reading ? n.length && l(this, n) : this.read(0))
                }
                return r
            }, i.prototype.addListener = i.prototype.on, i.prototype.resume = function () {
                v(this), this.read(0), this.emit("resume")
            }, i.prototype.pause = function () {
                v(this, !0), this.emit("pause")
            }, i.prototype.wrap = function (e) {
                var t = this._readableState,
                    r = !1,
                    n = this;
                e.on("end", function () {
                    if (t.decoder && !t.ended) {
                        var e = t.decoder.end();
                        e && e.length && n.push(e)
                    }
                    n.push(null)
                }), e.on("data", function (i) {
                    if (t.decoder && (i = t.decoder.write(i)), (!t.objectMode || null !== i && void 0 !== i) && (t.objectMode || i && i.length)) {
                        var o = n.push(i);
                        o || (r = !0, e.pause())
                    }
                });
                for (var i in e) "function" == typeof e[i] && "undefined" == typeof this[i] && (this[i] = function (t) {
                    return function () {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                var o = ["error", "close", "destroy", "pause", "resume"];
                return w(o, function (t) {
                    e.on(t, n.emit.bind(n, t))
                }), n._read = function (t) {
                    r && (r = !1, e.resume())
                }, n
            }, i._fromList = y
        }).call(this, e("_process"))
    }, {
        _process: 12,
        buffer: 3,
        "core-util-is": 86,
        events: 7,
        inherits: 73,
        isarray: 87,
        stream: 32,
        "string_decoder/": 88
    }],
    84: [function (e, t, r) {
        function n(e, t) {
            this.afterTransform = function (e, r) {
                return i(t, e, r)
            }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null
        }

        function i(e, t, r) {
            var n = e._transformState;
            n.transforming = !1;
            var i = n.writecb;
            if (!i) return e.emit("error", new Error("no writecb in Transform class"));
            n.writechunk = null, n.writecb = null, null !== r && void 0 !== r && e.push(r), i && i(t);
            var o = e._readableState;
            o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
        }

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            a.call(this, e);
            var t = (this._transformState = new n(e, this), this);
            this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("finish", function () {
                "function" == typeof this._flush ? this._flush(function (e) {
                    s(t, e)
                }) : s(t)
            })
        }

        function s(e, t) {
            if (t) return e.emit("error", t);
            var r = e._writableState,
                n = (e._readableState, e._transformState);
            if (r.length) throw new Error("calling transform done when ws.length != 0");
            if (n.transforming) throw new Error("calling transform done when still transforming");
            return e.push(null)
        }
        t.exports = o;
        var a = e("./_stream_duplex"),
            u = e("core-util-is");
        u.inherits = e("inherits"), u.inherits(o, a), o.prototype.push = function (e, t) {
            return this._transformState.needTransform = !1, a.prototype.push.call(this, e, t)
        }, o.prototype._transform = function (e, t, r) {
            throw new Error("not implemented")
        }, o.prototype._write = function (e, t, r) {
            var n = this._transformState;
            if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function (e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
    }, {
        "./_stream_duplex": 81,
        "core-util-is": 86,
        inherits: 73
    }],
    85: [function (e, t, r) {
        (function (r) {
            function n(e, t, r) {
                this.chunk = e, this.encoding = t, this.callback = r
            }

            function i(e, t) {
                e = e || {};
                var r = e.highWaterMark;
                this.highWaterMark = r || 0 === r ? r : 16384, this.objectMode = !!e.objectMode, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                var n = e.decodeStrings === !1;
                this.decodeStrings = !n, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                    p(t, e)
                }, this.writecb = null, this.writelen = 0, this.buffer = [], this.errorEmitted = !1
            }

            function o(t) {
                var r = e("./_stream_duplex");
                return this instanceof o || this instanceof r ? (this._writableState = new i(t, this), this.writable = !0, void S.call(this)) : new o(t)
            }

            function s(e, t, n) {
                var i = new Error("write after end");
                e.emit("error", i), r.nextTick(function () {
                    n(i)
                })
            }

            function a(e, t, n, i) {
                var o = !0;
                if (!_.isBuffer(n) && "string" != typeof n && null !== n && void 0 !== n && !t.objectMode) {
                    var s = new TypeError("Invalid non-string/buffer chunk");
                    e.emit("error", s), r.nextTick(function () {
                        i(s)
                    }), o = !1
                }
                return o
            }

            function u(e, t, r) {
                return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = new _(t, r)), t
            }

            function c(e, t, r, i, o) {
                r = u(t, r, i), _.isBuffer(r) && (i = "buffer");
                var s = t.objectMode ? 1 : r.length;
                t.length += s;
                var a = t.length < t.highWaterMark;
                return a || (t.needDrain = !0), t.writing ? t.buffer.push(new n(r, i, o)) : f(e, t, s, r, i, o), a
            }

            function f(e, t, r, n, i, o) {
                t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, e._write(n, i, t.onwrite), t.sync = !1
            }

            function l(e, t, n, i, o) {
                n ? r.nextTick(function () {
                    o(i)
                }) : o(i), e._writableState.errorEmitted = !0, e.emit("error", i)
            }

            function h(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function p(e, t) {
                var n = e._writableState,
                    i = n.sync,
                    o = n.writecb;
                if (h(n), t) l(e, n, i, t, o);
                else {
                    var s = b(e, n);
                    s || n.bufferProcessing || !n.buffer.length || m(e, n), i ? r.nextTick(function () {
                        d(e, n, s, o)
                    }) : d(e, n, s, o)
                }
            }

            function d(e, t, r, n) {
                r || g(e, t), n(), r && v(e, t)
            }

            function g(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function m(e, t) {
                t.bufferProcessing = !0;
                for (var r = 0; r < t.buffer.length; r++) {
                    var n = t.buffer[r],
                        i = n.chunk,
                        o = n.encoding,
                        s = n.callback,
                        a = t.objectMode ? 1 : i.length;
                    if (f(e, t, a, i, o, s), t.writing) {
                        r++;
                        break
                    }
                }
                t.bufferProcessing = !1, r < t.buffer.length ? t.buffer = t.buffer.slice(r) : t.buffer.length = 0
            }

            function b(e, t) {
                return t.ending && 0 === t.length && !t.finished && !t.writing
            }

            function v(e, t) {
                var r = b(e, t);
                return r && (t.finished = !0, e.emit("finish")), r
            }

            function y(e, t, n) {
                t.ending = !0, v(e, t), n && (t.finished ? r.nextTick(n) : e.once("finish", n)), t.ended = !0
            }
            t.exports = o;
            var _ = e("buffer").Buffer;
            o.WritableState = i;
            var w = e("core-util-is");
            w.inherits = e("inherits");
            var S = e("stream");
            w.inherits(o, S), o.prototype.pipe = function () {
                this.emit("error", new Error("Cannot pipe. Not readable."))
            }, o.prototype.write = function (e, t, r) {
                var n = this._writableState,
                    i = !1;
                return "function" == typeof t && (r = t, t = null), _.isBuffer(e) ? t = "buffer" : t || (t = n.defaultEncoding), "function" != typeof r && (r = function () {}), n.ended ? s(this, n, r) : a(this, n, e, r) && (i = c(this, n, e, t, r)), i
            }, o.prototype._write = function (e, t, r) {
                r(new Error("not implemented"))
            }, o.prototype.end = function (e, t, r) {
                var n = this._writableState;
                "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), "undefined" != typeof e && null !== e && this.write(e, t), n.ending || n.finished || y(this, n, r)
            }
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 81,
        _process: 12,
        buffer: 3,
        "core-util-is": 86,
        inherits: 73,
        stream: 32
    }],
    86: [function (e, t, r) {
        arguments[4][56][0].apply(r, arguments)
    }, {
        "../../../../../../browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 10,
        dup: 56
    }],
    87: [function (e, t, r) {
        t.exports = Array.isArray || function (e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    }, {}],
    88: [function (e, t, r) {
        arguments[4][39][0].apply(r, arguments)
    }, {
        buffer: 3,
        dup: 39
    }],
    89: [function (e, t, r) {
        (function (n) {
            var i = e("stream");
            r = t.exports = e("./lib/_stream_readable.js"), r.Stream = i, r.Readable = r, r.Writable = e("./lib/_stream_writable.js"), r.Duplex = e("./lib/_stream_duplex.js"), r.Transform = e("./lib/_stream_transform.js"), r.PassThrough = e("./lib/_stream_passthrough.js"), n.browser || "disable" !== n.env.READABLE_STREAM || (t.exports = e("stream"))
        }).call(this, e("_process"))
    }, {
        "./lib/_stream_duplex.js": 81,
        "./lib/_stream_passthrough.js": 82,
        "./lib/_stream_readable.js": 83,
        "./lib/_stream_transform.js": 84,
        "./lib/_stream_writable.js": 85,
        _process: 12,
        stream: 32
    }],
    90: [function (e, t, r) {
        arguments[4][30][0].apply(r, arguments)
    }, {
        "./lib/_stream_transform.js": 84,
        dup: 30
    }],
    91: [function (e, t, r) {
        "use strict";

        function n(e, t, r) {
            var n = this;
            this._callback = e, this._args = r, this._interval = setInterval(e, t, this._args), this.reschedule = function (e) {
                Date.now();
                n._interval && clearInterval(n._interval), n._interval = setInterval(n._callback, e, n._args)
            }, this.clear = function () {
                n._interval && (clearInterval(n._interval), n._interval = void 0, n._callback = void 0, n._args = void 0)
            }
        }

        function i() {
            if ("function" != typeof arguments[0]) throw new Error("callback needed");
            if ("number" != typeof arguments[1]) throw new Error("interval needed");
            var e;
            if (arguments.length > 0) {
                e = new Array(arguments.length - 2);
                for (var t = 0; t < e.length; t++) e[t] = arguments[t + 2]
            }
            return new n(arguments[0], arguments[1], e)
        }
        t.exports = i
    }, {}],
    92: [function (e, t, r) {
        (function (r) {
            function n(e) {
                s.call(this, e), this._destroyed = !1
            }

            function i(e, t, r) {
                r(null, e)
            }

            function o(e) {
                return function (t, r, n) {
                    return "function" == typeof t && (n = r, r = t, t = {}), "function" != typeof r && (r = i), "function" != typeof n && (n = null), e(t, r, n)
                }
            }
            var s = e("readable-stream/transform"),
                a = e("util").inherits,
                u = e("xtend");
            a(n, s), n.prototype.destroy = function (e) {
                if (!this._destroyed) {
                    this._destroyed = !0;
                    var t = this;
                    r.nextTick(function () {
                        e && t.emit("error", e), t.emit("close")
                    })
                }
            }, t.exports = o(function (e, t, r) {
                var i = new n(e);
                return i._transform = t, r && (i._flush = r), i
            }), t.exports.ctor = o(function (e, t, r) {
                function i(t) {
                    return this instanceof i ? (this.options = u(e, t), void n.call(this, this.options)) : new i(t)
                }
                return a(i, n), i.prototype._transform = t, r && (i.prototype._flush = r), i
            }), t.exports.obj = o(function (e, t, r) {
                var i = new n(u({
                    objectMode: !0,
                    highWaterMark: 16
                }, e));
                return i._transform = t, r && (i._flush = r), i
            })
        }).call(this, e("_process"))
    }, {
        _process: 12,
        "readable-stream/transform": 90,
        util: 43,
        xtend: 106
    }],
    93: [function (e, t, r) {
        arguments[4][18][0].apply(r, arguments)
    }, {
        "./_stream_readable": 94,
        "./_stream_writable": 96,
        "core-util-is": 97,
        dup: 18,
        inherits: 73,
        "process-nextick-args": 99
    }],
    94: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n(t, r) {
                L = L || e("./_stream_duplex"), t = t || {}, this.objectMode = !!t.objectMode, r instanceof L && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var n = t.highWaterMark,
                    i = this.objectMode ? 16 : 16384;
                this.highWaterMark = n || 0 === n ? n : i, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (I || (I = e("string_decoder/").StringDecoder), this.decoder = new I(t.encoding), this.encoding = t.encoding)
            }

            function i(t) {
                return L = L || e("./_stream_duplex"), this instanceof i ? (this._readableState = new n(t, this), this.readable = !0, t && "function" == typeof t.read && (this._read = t.read), void T.call(this)) : new i(t)
            }

            function o(e, t, r, n, i) {
                var o = c(t, r);
                if (o) e.emit("error", o);
                else if (null === r) t.reading = !1, f(e, t);
                else if (t.objectMode || r && r.length > 0)
                    if (t.ended && !i) {
                        var a = new Error("stream.push() after EOF");
                        e.emit("error", a)
                    } else if (t.endEmitted && i) {
                    var a = new Error("stream.unshift() after end event");
                    e.emit("error", a)
                } else {
                    var u;
                    !t.decoder || i || n || (r = t.decoder.write(r), u = !t.objectMode && 0 === r.length), i || (t.reading = !1), u || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && l(e))), p(e, t)
                } else i || (t.reading = !1);
                return s(t)
            }

            function s(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }

            function a(e) {
                return e >= q ? e = q : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
            }

            function u(e, t) {
                return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : null === e || isNaN(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : 0 >= e ? 0 : (e > t.highWaterMark && (t.highWaterMark = a(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e)
            }

            function c(e, t) {
                var r = null;
                return j.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")), r
            }

            function f(e, t) {
                if (!t.ended) {
                    if (t.decoder) {
                        var r = t.decoder.end();
                        r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                    }
                    t.ended = !0, l(e)
                }
            }

            function l(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (C("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? x(h, e) : h(e))
            }

            function h(e) {
                C("emit readable"), e.emit("readable"), y(e)
            }

            function p(e, t) {
                t.readingMore || (t.readingMore = !0, x(d, e, t))
            }

            function d(e, t) {
                for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (C("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
                t.readingMore = !1
            }

            function g(e) {
                return function () {
                    var t = e._readableState;
                    C("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && M(e, "data") && (t.flowing = !0, y(e))
                }
            }

            function m(e) {
                C("readable nexttick read 0"), e.read(0)
            }

            function b(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, x(v, e, t))
            }

            function v(e, t) {
                t.reading || (C("resume read 0"), e.read(0)), t.resumeScheduled = !1, e.emit("resume"), y(e), t.flowing && !t.reading && e.read(0)
            }

            function y(e) {
                var t = e._readableState;
                if (C("flow", t.flowing), t.flowing)
                    do var r = e.read(); while (null !== r && t.flowing)
            }

            function _(e, t) {
                var r, n = t.buffer,
                    i = t.length,
                    o = !!t.decoder,
                    s = !!t.objectMode;
                if (0 === n.length) return null;
                if (0 === i) r = null;
                else if (s) r = n.shift();
                else if (!e || e >= i) r = o ? n.join("") : 1 === n.length ? n[0] : j.concat(n, i), n.length = 0;
                else if (e < n[0].length) {
                    var a = n[0];
                    r = a.slice(0, e), n[0] = a.slice(e)
                } else if (e === n[0].length) r = n.shift();
                else {
                    r = o ? "" : new j(e);
                    for (var u = 0, c = 0, f = n.length; f > c && e > u; c++) {
                        var a = n[0],
                            l = Math.min(e - u, a.length);
                        o ? r += a.slice(0, l) : a.copy(r, u, 0, l), l < a.length ? n[0] = a.slice(l) : n.shift(), u += l
                    }
                }
                return r
            }

            function w(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error("endReadable called on non-empty stream");
                t.endEmitted || (t.ended = !0, x(S, t, e))
            }

            function S(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function E(e, t) {
                for (var r = 0, n = e.length; n > r; r++) t(e[r], r)
            }

            function k(e, t) {
                for (var r = 0, n = e.length; n > r; r++)
                    if (e[r] === t) return r;
                return -1
            }
            t.exports = i;
            var x = e("process-nextick-args"),
                R = e("isarray"),
                j = e("buffer").Buffer;
            i.ReadableState = n;
            var T, M = (e("events"), function (e, t) {
                return e.listeners(t).length
            });
            ! function () {
                try {
                    T = e("stream")
                } catch (t) {} finally {
                    T || (T = e("events").EventEmitter)
                }
            }();
            var j = e("buffer").Buffer,
                A = e("core-util-is");
            A.inherits = e("inherits");
            var O = e("util"),
                C = void 0;
            C = O && O.debuglog ? O.debuglog("stream") : function () {};
            var I;
            A.inherits(i, T);
            var L, L;
            i.prototype.push = function (e, t) {
                var r = this._readableState;
                return r.objectMode || "string" != typeof e || (t = t || r.defaultEncoding, t !== r.encoding && (e = new j(e, t), t = "")), o(this, r, e, t, !1)
            }, i.prototype.unshift = function (e) {
                var t = this._readableState;
                return o(this, t, e, "", !0)
            }, i.prototype.isPaused = function () {
                return this._readableState.flowing === !1
            }, i.prototype.setEncoding = function (t) {
                return I || (I = e("string_decoder/").StringDecoder), this._readableState.decoder = new I(t), this._readableState.encoding = t, this
            };
            var q = 8388608;
            i.prototype.read = function (e) {
                C("read", e);
                var t = this._readableState,
                    r = e;
                if (("number" != typeof e || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return C("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? w(this) : l(this), null;
                if (e = u(e, t), 0 === e && t.ended) return 0 === t.length && w(this), null;
                var n = t.needReadable;
                C("need readable", n), (0 === t.length || t.length - e < t.highWaterMark) && (n = !0, C("length less than watermark", n)), (t.ended || t.reading) && (n = !1, C("reading or ended", n)), n && (C("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), n && !t.reading && (e = u(r, t));
                var i;
                return i = e > 0 ? _(e, t) : null, null === i && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), r !== e && t.ended && 0 === t.length && w(this), null !== i && this.emit("data", i), i
            }, i.prototype._read = function (e) {
                this.emit("error", new Error("not implemented"))
            }, i.prototype.pipe = function (e, t) {
                function n(e) {
                    C("onunpipe"), e === l && o()
                }

                function i() {
                    C("onend"), e.end()
                }

                function o() {
                    C("cleanup"), e.removeListener("close", u), e.removeListener("finish", c), e.removeListener("drain", m), e.removeListener("error", a), e.removeListener("unpipe", n), l.removeListener("end", i), l.removeListener("end", o), l.removeListener("data", s), b = !0, !h.awaitDrain || e._writableState && !e._writableState.needDrain || m()
                }

                function s(t) {
                    C("ondata");
                    var r = e.write(t);
                    !1 === r && (1 !== h.pipesCount || h.pipes[0] !== e || 1 !== l.listenerCount("data") || b || (C("false write response, pause", l._readableState.awaitDrain), l._readableState.awaitDrain++), l.pause())
                }

                function a(t) {
                    C("onerror", t), f(), e.removeListener("error", a), 0 === M(e, "error") && e.emit("error", t)
                }

                function u() {
                    e.removeListener("finish", c), f()
                }

                function c() {
                    C("onfinish"), e.removeListener("close", u), f()
                }

                function f() {
                    C("unpipe"), l.unpipe(e)
                }
                var l = this,
                    h = this._readableState;
                switch (h.pipesCount) {
                    case 0:
                        h.pipes = e;
                        break;
                    case 1:
                        h.pipes = [h.pipes, e];
                        break;
                    default:
                        h.pipes.push(e)
                }
                h.pipesCount += 1, C("pipe count=%d opts=%j", h.pipesCount, t);
                var p = (!t || t.end !== !1) && e !== r.stdout && e !== r.stderr,
                    d = p ? i : o;
                h.endEmitted ? x(d) : l.once("end", d), e.on("unpipe", n);
                var m = g(l);
                e.on("drain", m);
                var b = !1;
                return l.on("data", s), e._events && e._events.error ? R(e._events.error) ? e._events.error.unshift(a) : e._events.error = [a, e._events.error] : e.on("error", a), e.once("close", u), e.once("finish", c), e.emit("pipe", l), h.flowing || (C("pipe resume"), l.resume()), e
            }, i.prototype.unpipe = function (e) {
                var t = this._readableState;
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
                if (!e) {
                    var r = t.pipes,
                        n = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var i = 0; n > i; i++) r[i].emit("unpipe", this);
                    return this
                }
                var o = k(t.pipes, e);
                return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
            }, i.prototype.on = function (e, t) {
                var r = T.prototype.on.call(this, e, t);
                if ("data" === e && !1 !== this._readableState.flowing && this.resume(), "readable" === e && !this._readableState.endEmitted) {
                    var n = this._readableState;
                    n.readableListening || (n.readableListening = !0, n.emittedReadable = !1, n.needReadable = !0, n.reading ? n.length && l(this, n) : x(m, this))
                }
                return r
            }, i.prototype.addListener = i.prototype.on, i.prototype.resume = function () {
                var e = this._readableState;
                return e.flowing || (C("resume"), e.flowing = !0, b(this, e)), this
            }, i.prototype.pause = function () {
                return C("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (C("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, i.prototype.wrap = function (e) {
                var t = this._readableState,
                    r = !1,
                    n = this;
                e.on("end", function () {
                    if (C("wrapped end"), t.decoder && !t.ended) {
                        var e = t.decoder.end();
                        e && e.length && n.push(e)
                    }
                    n.push(null)
                }), e.on("data", function (i) {
                    if (C("wrapped data"), t.decoder && (i = t.decoder.write(i)), (!t.objectMode || null !== i && void 0 !== i) && (t.objectMode || i && i.length)) {
                        var o = n.push(i);
                        o || (r = !0, e.pause())
                    }
                });
                for (var i in e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function (t) {
                    return function () {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                var o = ["error", "close", "destroy", "pause", "resume"];
                return E(o, function (t) {
                    e.on(t, n.emit.bind(n, t))
                }), n._read = function (t) {
                    C("wrapped _read", t), r && (r = !1, e.resume())
                }, n
            }, i._fromList = _
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 93,
        _process: 12,
        buffer: 3,
        "core-util-is": 97,
        events: 7,
        inherits: 73,
        isarray: 98,
        "process-nextick-args": 99,
        "string_decoder/": 100,
        util: 2
    }],
    95: [function (e, t, r) {
        "use strict";

        function n(e) {
            this.afterTransform = function (t, r) {
                return i(e, t, r)
            }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
        }

        function i(e, t, r) {
            var n = e._transformState;
            n.transforming = !1;
            var i = n.writecb;
            if (!i) return e.emit("error", new Error("no writecb in Transform class"));
            n.writechunk = null, n.writecb = null, null !== r && void 0 !== r && e.push(r), i(t);
            var o = e._readableState;
            o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
        }

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            a.call(this, e), this._transformState = new n(this);
            var t = this;
            this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function () {
                "function" == typeof this._flush ? this._flush(function (e) {
                    s(t, e)
                }) : s(t)
            })
        }

        function s(e, t) {
            if (t) return e.emit("error", t);
            var r = e._writableState,
                n = e._transformState;
            if (r.length) throw new Error("calling transform done when ws.length != 0");
            if (n.transforming) throw new Error("calling transform done when still transforming");
            return e.push(null)
        }
        t.exports = o;
        var a = e("./_stream_duplex"),
            u = e("core-util-is");
        u.inherits = e("inherits"), u.inherits(o, a), o.prototype.push = function (e, t) {
            return this._transformState.needTransform = !1, a.prototype.push.call(this, e, t)
        }, o.prototype._transform = function (e, t, r) {
            throw new Error("not implemented")
        }, o.prototype._write = function (e, t, r) {
            var n = this._transformState;
            if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function (e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }
    }, {
        "./_stream_duplex": 93,
        "core-util-is": 97,
        inherits: 73
    }],
    96: [function (e, t, r) {
        (function (r) {
            "use strict";

            function n() {}

            function i(e, t, r) {
                this.chunk = e, this.encoding = t, this.callback = r, this.next = null
            }

            function o(t, r) {
                M = M || e("./_stream_duplex"), t = t || {}, this.objectMode = !!t.objectMode, r instanceof M && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var n = t.highWaterMark,
                    i = this.objectMode ? 16 : 16384;
                this.highWaterMark = n || 0 === n ? n : i, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                var o = t.decodeStrings === !1;
                this.decodeStrings = !o, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                    d(r, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new S(this), this.corkedRequestsFree.next = new S(this)
            }

            function s(t) {
                return M = M || e("./_stream_duplex"), this instanceof s || this instanceof M ? (this._writableState = new o(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev)), void j.call(this)) : new s(t)
            }

            function a(e, t) {
                var r = new Error("write after end");
                e.emit("error", r), E(t, r)
            }

            function u(e, t, r, n) {
                var i = !0;
                if (!x.isBuffer(r) && "string" != typeof r && null !== r && void 0 !== r && !t.objectMode) {
                    var o = new TypeError("Invalid non-string/buffer chunk");
                    e.emit("error", o), E(n, o), i = !1
                }
                return i
            }

            function c(e, t, r) {
                return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = new x(t, r)), t
            }

            function f(e, t, r, n, o) {
                r = c(t, r, n), x.isBuffer(r) && (n = "buffer");
                var s = t.objectMode ? 1 : r.length;
                t.length += s;
                var a = t.length < t.highWaterMark;
                if (a || (t.needDrain = !0), t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    t.lastBufferedRequest = new i(r, n, o), u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else l(e, t, !1, s, r, n, o);
                return a
            }

            function l(e, t, r, n, i, o, s) {
                t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
            }

            function h(e, t, r, n, i) {
                --t.pendingcb, r ? E(i, n) : i(n), e._writableState.errorEmitted = !0, e.emit("error", n)
            }

            function p(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function d(e, t) {
                var r = e._writableState,
                    n = r.sync,
                    i = r.writecb;
                if (p(r), t) h(e, r, n, t, i);
                else {
                    var o = v(r);
                    o || r.corked || r.bufferProcessing || !r.bufferedRequest || b(e, r), n ? k(g, e, r, o, i) : g(e, r, o, i)
                }
            }

            function g(e, t, r, n) {
                r || m(e, t), t.pendingcb--, n(), _(e, t)
            }

            function m(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function b(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var n = t.bufferedRequestCount,
                        i = new Array(n),
                        o = t.corkedRequestsFree;
                    o.entry = r;
                    for (var s = 0; r;) i[s] = r, r = r.next, s += 1;
                    l(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, t.corkedRequestsFree = o.next, o.next = null
                } else {
                    for (; r;) {
                        var a = r.chunk,
                            u = r.encoding,
                            c = r.callback,
                            f = t.objectMode ? 1 : a.length;
                        if (l(e, t, !1, f, a, u, c), r = r.next, t.writing) break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequestCount = 0, t.bufferedRequest = r, t.bufferProcessing = !1
            }

            function v(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function y(e, t) {
                t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
            }

            function _(e, t) {
                var r = v(t);
                return r && (0 === t.pendingcb ? (y(e, t), t.finished = !0, e.emit("finish")) : y(e, t)), r
            }

            function w(e, t, r) {
                t.ending = !0, _(e, t), r && (t.finished ? E(r) : e.once("finish", r)), t.ended = !0, e.writable = !1
            }

            function S(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function (r) {
                    var n = t.entry;
                    for (t.entry = null; n;) {
                        var i = n.callback;
                        e.pendingcb--, i(r), n = n.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }
            }
            t.exports = s;
            var E = e("process-nextick-args"),
                k = !r.browser && ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) > -1 ? setImmediate : E,
                x = e("buffer").Buffer;
            s.WritableState = o;
            var R = e("core-util-is");
            R.inherits = e("inherits");
            var j, T = {
                deprecate: e("util-deprecate")
            };
            ! function () {
                try {
                    j = e("stream")
                } catch (t) {} finally {
                    j || (j = e("events").EventEmitter)
                }
            }();
            var x = e("buffer").Buffer;
            R.inherits(s, j);
            var M;
            o.prototype.getBuffer = function () {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function () {
                    try {
                        Object.defineProperty(o.prototype, "buffer", {
                            get: T.deprecate(function () {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
                        })
                    } catch (e) {}
                }();
            var M;
            s.prototype.pipe = function () {
                this.emit("error", new Error("Cannot pipe. Not readable."))
            }, s.prototype.write = function (e, t, r) {
                var i = this._writableState,
                    o = !1;
                return "function" == typeof t && (r = t, t = null), x.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof r && (r = n), i.ended ? a(this, r) : u(this, i, e, r) && (i.pendingcb++, o = f(this, i, e, t, r)), o
            }, s.prototype.cork = function () {
                var e = this._writableState;
                e.corked++
            }, s.prototype.uncork = function () {
                var e = this._writableState;
                e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || b(this, e))
            }, s.prototype.setDefaultEncoding = function (e) {
                if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                this._writableState.defaultEncoding = e
            }, s.prototype._write = function (e, t, r) {
                r(new Error("not implemented"))
            }, s.prototype._writev = null, s.prototype.end = function (e, t, r) {
                var n = this._writableState;
                "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t,
                    t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || w(this, n, r)
            }
        }).call(this, e("_process"))
    }, {
        "./_stream_duplex": 93,
        _process: 12,
        buffer: 3,
        "core-util-is": 97,
        events: 7,
        inherits: 73,
        "process-nextick-args": 99,
        "util-deprecate": 101
    }],
    97: [function (e, t, r) {
        (function (e) {
            function t(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === m(e)
            }

            function n(e) {
                return "boolean" == typeof e
            }

            function i(e) {
                return null === e
            }

            function o(e) {
                return null == e
            }

            function s(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "string" == typeof e
            }

            function u(e) {
                return "symbol" == typeof e
            }

            function c(e) {
                return void 0 === e
            }

            function f(e) {
                return "[object RegExp]" === m(e)
            }

            function l(e) {
                return "object" == typeof e && null !== e
            }

            function h(e) {
                return "[object Date]" === m(e)
            }

            function p(e) {
                return "[object Error]" === m(e) || e instanceof Error
            }

            function d(e) {
                return "function" == typeof e
            }

            function g(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
            }

            function m(e) {
                return Object.prototype.toString.call(e)
            }
            r.isArray = t, r.isBoolean = n, r.isNull = i, r.isNullOrUndefined = o, r.isNumber = s, r.isString = a, r.isSymbol = u, r.isUndefined = c, r.isRegExp = f, r.isObject = l, r.isDate = h, r.isError = p, r.isFunction = d, r.isPrimitive = g, r.isBuffer = e.isBuffer
        }).call(this, {
            isBuffer: e("../../../../../../../../../../browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js")
        })
    }, {
        "../../../../../../../../../../browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 10
    }],
    98: [function (e, t, r) {
        arguments[4][6][0].apply(r, arguments)
    }, {
        dup: 6
    }],
    99: [function (e, t, r) {
        arguments[4][26][0].apply(r, arguments)
    }, {
        _process: 12,
        dup: 26
    }],
    100: [function (e, t, r) {
        arguments[4][39][0].apply(r, arguments)
    }, {
        buffer: 3,
        dup: 39
    }],
    101: [function (e, t, r) {
        arguments[4][27][0].apply(r, arguments)
    }, {
        dup: 27
    }],
    102: [function (e, t, r) {
        arguments[4][30][0].apply(r, arguments)
    }, {
        "./lib/_stream_transform.js": 95,
        dup: 30
    }],
    103: [function (e, t, r) {
        arguments[4][92][0].apply(r, arguments)
    }, {
        _process: 12,
        dup: 92,
        "readable-stream/transform": 102,
        util: 43,
        xtend: 106
    }],
    104: [function (e, t, r) {
        function n(e, t, r) {
            var n;
            return n = t ? new o(e, t) : new o(e)
        }
        var i = function () {
                return this
            }(),
            o = i.WebSocket || i.MozWebSocket;
        t.exports = o ? n : null, o && (n.prototype = o.prototype)
    }, {}],
    105: [function (e, t, r) {
        (function (r, n) {
            function i(e, t, i) {
                function u(e, t, r) {
                    b.send(e, r)
                }

                function c(e, t, r) {
                    if (b.bufferedAmount > _) return void setTimeout(c, w, e, t, r);
                    try {
                        b.send(e)
                    } catch (n) {
                        return r(n)
                    }
                    r()
                }

                function f(e) {
                    b.close(), e()
                }

                function l() {
                    m.setReadable(y), m.setWritable(y), m.emit("connect")
                }

                function h() {
                    m.end(), m.destroy()
                }

                function p(e) {
                    m.destroy(e)
                }

                function d(e) {
                    var t = e.data;
                    t = new n(t instanceof ArrayBuffer ? new Uint8Array(t) : t), y.push(t)
                }

                function g() {
                    b.close()
                }
                var m, b, v = "browser" === r.title ? c : u,
                    y = o.obj(v, f);
                t && !Array.isArray(t) && "object" == typeof t && (i = t, t = null), i || (i = {});
                var _ = i.browserBufferSize || 524288,
                    w = i.browserBufferTimeout || 1e3;
                return "object" == typeof e ? b = e : (b = new a(e, t, i), b.binaryType = "arraybuffer"), 1 === b.readyState ? m = y : (m = s.obj(), b.addEventListener("open", l)), m.socket = b, b.addEventListener("close", h), b.addEventListener("error", p), b.addEventListener("message", d), y.on("close", g), m
            }
            var o = e("through2"),
                s = e("duplexify"),
                a = e("ws");
            t.exports = i
        }).call(this, e("_process"), e("buffer").Buffer)
    }, {
        _process: 12,
        buffer: 3,
        duplexify: 45,
        through2: 103,
        ws: 104
    }],
    106: [function (e, t, r) {
        arguments[4][44][0].apply(r, arguments)
    }, {
        dup: 44
    }],
    107: [function (require, module, exports) {
        var JSON;
        JSON || (JSON = {}),
            function () {
                function str(e, t) {
                    var r, n, i, o, s, a = gap,
                        u = t[e];
                    switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) {
                        case "string":
                            return quote(u);
                        case "number":
                            return isFinite(u) ? String(u) : "null";
                        case "boolean":
                        case "null":
                            return String(u);
                        case "object":
                            if (!u) return "null";
                            if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                                for (o = u.length, r = 0; o > r; r += 1) s[r] = str(r, u) || "null";
                                return i = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, i
                            }
                            if (rep && "object" == typeof rep)
                                for (o = rep.length, r = 0; o > r; r += 1) "string" == typeof rep[r] && (n = rep[r], i = str(n, u), i && s.push(quote(n) + (gap ? ": " : ":") + i));
                            else
                                for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (i = str(n, u), i && s.push(quote(n) + (gap ? ": " : ":") + i));
                            return i = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, i
                    }
                }

                function quote(e) {
                    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                        var t = meta[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function f(e) {
                    return 10 > e ? "0" + e : e
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (e) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
                    return this.valueOf()
                });
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    rep;
                "function" != typeof JSON.stringify && (JSON.stringify = function (e, t, r) {
                    var n;
                    if (gap = "", indent = "", "number" == typeof r)
                        for (n = 0; r > n; n += 1) indent += " ";
                    else "string" == typeof r && (indent = r);
                    if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
                        "": e
                    });
                    throw new Error("JSON.stringify")
                }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                    function walk(e, t) {
                        var r, n, i = e[t];
                        if (i && "object" == typeof i)
                            for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n = walk(i, r), void 0 !== n ? i[r] = n : delete i[r]);
                        return reviver.call(e, t, i)
                    }
                    var j;
                    if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                        "": j
                    }, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            }(), SockJS = function () {
                var e = window,
                    t = document,
                    r = {},
                    n = function () {};
                n.prototype.addEventListener = function (e, t) {
                    this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
                    var n = this._listeners[e]; - 1 === r.arrIndexOf(n, t) && n.push(t)
                }, n.prototype.removeEventListener = function (e, t) {
                    if (this._listeners && e in this._listeners) {
                        var n = this._listeners[e],
                            i = r.arrIndexOf(n, t);
                        return -1 !== i ? void(n.length > 1 ? this._listeners[e] = n.slice(0, i).concat(n.slice(i + 1)) : delete this._listeners[e]) : void 0
                    }
                }, n.prototype.dispatchEvent = function (e) {
                    var t = e.type,
                        r = Array.prototype.slice.call(arguments, 0);
                    if (this["on" + t] && this["on" + t].apply(this, r), this._listeners && t in this._listeners)
                        for (var n = 0; n < this._listeners[t].length; n++) this._listeners[t][n].apply(this, r)
                };
                var i = function (e, t) {
                    if (this.type = e, "undefined" != typeof t)
                        for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r])
                };
                i.prototype.toString = function () {
                    var e = [];
                    for (var t in this)
                        if (this.hasOwnProperty(t)) {
                            var r = this[t];
                            "function" == typeof r && (r = "[function]"), e.push(t + "=" + r)
                        }
                    return "SimpleEvent(" + e.join(", ") + ")"
                };
                var o = function (e) {
                    var t = this;
                    t._events = e || [], t._listeners = {}
                };
                o.prototype.emit = function (e) {
                    var t = this;
                    if (t._verifyType(e), !t._nuked) {
                        var r = Array.prototype.slice.call(arguments, 1);
                        if (t["on" + e] && t["on" + e].apply(t, r), e in t._listeners)
                            for (var n = 0; n < t._listeners[e].length; n++) t._listeners[e][n].apply(t, r)
                    }
                }, o.prototype.on = function (e, t) {
                    var r = this;
                    r._verifyType(e), r._nuked || (e in r._listeners || (r._listeners[e] = []), r._listeners[e].push(t))
                }, o.prototype._verifyType = function (e) {
                    var t = this; - 1 === r.arrIndexOf(t._events, e) && r.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(t._events) + " in " + t)
                }, o.prototype.nuke = function () {
                    var e = this;
                    e._nuked = !0;
                    for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
                    e._listeners = {}
                };
                var s = "abcdefghijklmnopqrstuvwxyz0123456789_";
                r.random_string = function (e, t) {
                    t = t || s.length;
                    var r, n = [];
                    for (r = 0; e > r; r++) n.push(s.substr(Math.floor(Math.random() * t), 1));
                    return n.join("")
                }, r.random_number = function (e) {
                    return Math.floor(Math.random() * e)
                }, r.random_number_string = function (e) {
                    var t = ("" + (e - 1)).length,
                        n = Array(t + 1).join("0");
                    return (n + r.random_number(e)).slice(-t)
                }, r.getOrigin = function (e) {
                    e += "/";
                    var t = e.split("/").slice(0, 3);
                    return t.join("/")
                }, r.isSameOriginUrl = function (t, r) {
                    return r || (r = e.location.href), t.split("/").slice(0, 3).join("/") === r.split("/").slice(0, 3).join("/")
                }, r.getParentDomain = function (e) {
                    if (/^[0-9.]*$/.test(e)) return e;
                    if (/^\[/.test(e)) return e;
                    if (!/[.]/.test(e)) return e;
                    var t = e.split(".").slice(1);
                    return t.join(".")
                }, r.objectExtend = function (e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                    return e
                };
                var a = "_jp";
                r.polluteGlobalNamespace = function () {
                    a in e || (e[a] = {})
                }, r.closeFrame = function (e, t) {
                    return "c" + JSON.stringify([e, t])
                }, r.userSetCode = function (e) {
                    return 1e3 === e || e >= 3e3 && 4999 >= e
                }, r.countRTO = function (e) {
                    var t;
                    return t = e > 100 ? 3 * e : e + 200
                }, r.log = function () {
                    e.console && console.log && console.log.apply && console.log.apply(console, arguments)
                }, r.bind = function (e, t) {
                    return e.bind ? e.bind(t) : function () {
                        return e.apply(t, arguments)
                    }
                }, r.flatUrl = function (e) {
                    return -1 === e.indexOf("?") && -1 === e.indexOf("#")
                }, r.amendUrl = function (e) {
                    var n = t.location;
                    if (!e) throw new Error("Wrong url for SockJS");
                    if (!r.flatUrl(e)) throw new Error("Only basic urls are supported in SockJS");
                    return 0 === e.indexOf("//") && (e = n.protocol + e), 0 === e.indexOf("/") && (e = n.protocol + "//" + n.host + e), e = e.replace(/[\/]+$/, "")
                }, r.arrIndexOf = function (e, t) {
                    for (var r = 0; r < e.length; r++)
                        if (e[r] === t) return r;
                    return -1
                }, r.arrSkip = function (e, t) {
                    var n = r.arrIndexOf(e, t);
                    if (-1 === n) return e.slice();
                    var i = e.slice(0, n);
                    return i.concat(e.slice(n + 1))
                }, r.isArray = Array.isArray || function (e) {
                    return {}.toString.call(e).indexOf("Array") >= 0
                }, r.delay = function (e, t) {
                    return "function" == typeof e && (t = e, e = 0), setTimeout(t, e)
                };
                var u, c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    f = {
                        "\x00": "\\u0000",
                        "": "\\u0001",
                        "": "\\u0002",
                        "": "\\u0003",
                        "": "\\u0004",
                        "": "\\u0005",
                        "": "\\u0006",
                        "": "\\u0007",
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\x0B": "\\u000b",
                        "\f": "\\f",
                        "\r": "\\r",
                        "": "\\u000e",
                        "": "\\u000f",
                        "": "\\u0010",
                        "": "\\u0011",
                        "": "\\u0012",
                        "": "\\u0013",
                        "": "\\u0014",
                        "": "\\u0015",
                        "": "\\u0016",
                        "": "\\u0017",
                        "": "\\u0018",
                        "": "\\u0019",
                        "": "\\u001a",
                        "": "\\u001b",
                        "": "\\u001c",
                        "": "\\u001d",
                        "": "\\u001e",
                        "": "\\u001f",
                        '"': '\\"',
                        "\\": "\\\\",
                        "": "\\u007f",
                        "Â€": "\\u0080",
                        "Â": "\\u0081",
                        "Â‚": "\\u0082",
                        "Âƒ": "\\u0083",
                        "Â„": "\\u0084",
                        "Â…": "\\u0085",
                        "Â†": "\\u0086",
                        "Â‡": "\\u0087",
                        "Âˆ": "\\u0088",
                        "Â‰": "\\u0089",
                        "ÂŠ": "\\u008a",
                        "Â‹": "\\u008b",
                        "ÂŒ": "\\u008c",
                        "Â": "\\u008d",
                        "ÂŽ": "\\u008e",
                        "Â": "\\u008f",
                        "Â": "\\u0090",
                        "Â‘": "\\u0091",
                        "Â’": "\\u0092",
                        "Â“": "\\u0093",
                        "Â”": "\\u0094",
                        "Â•": "\\u0095",
                        "Â–": "\\u0096",
                        "Â—": "\\u0097",
                        "Â˜": "\\u0098",
                        "Â™": "\\u0099",
                        "Âš": "\\u009a",
                        "Â›": "\\u009b",
                        "Âœ": "\\u009c",
                        "Â": "\\u009d",
                        "Âž": "\\u009e",
                        "ÂŸ": "\\u009f",
                        "Â­": "\\u00ad",
                        "Ø€": "\\u0600",
                        "Ø": "\\u0601",
                        "Ø‚": "\\u0602",
                        "Øƒ": "\\u0603",
                        "Ø„": "\\u0604",
                        "Ü": "\\u070f",
                        "áž´": "\\u17b4",
                        "ážµ": "\\u17b5",
                        "â€Œ": "\\u200c",
                        "â€": "\\u200d",
                        "â€Ž": "\\u200e",
                        "â€": "\\u200f",
                        "\u2028": "\\u2028",
                        "\u2029": "\\u2029",
                        "â€ª": "\\u202a",
                        "â€«": "\\u202b",
                        "â€¬": "\\u202c",
                        "â€­": "\\u202d",
                        "â€®": "\\u202e",
                        "â€¯": "\\u202f",
                        "â ": "\\u2060",
                        "â¡": "\\u2061",
                        "â¢": "\\u2062",
                        "â£": "\\u2063",
                        "â¤": "\\u2064",
                        "â¥": "\\u2065",
                        "â¦": "\\u2066",
                        "â§": "\\u2067",
                        "â¨": "\\u2068",
                        "â©": "\\u2069",
                        "âª": "\\u206a",
                        "â«": "\\u206b",
                        "â¬": "\\u206c",
                        "â­": "\\u206d",
                        "â®": "\\u206e",
                        "â¯": "\\u206f",
                        "\ufeff": "\\ufeff",
                        "ï¿°": "\\ufff0",
                        "ï¿±": "\\ufff1",
                        "ï¿²": "\\ufff2",
                        "ï¿³": "\\ufff3",
                        "ï¿´": "\\ufff4",
                        "ï¿µ": "\\ufff5",
                        "ï¿¶": "\\ufff6",
                        "ï¿·": "\\ufff7",
                        "ï¿¸": "\\ufff8",
                        "ï¿¹": "\\ufff9",
                        "ï¿º": "\\ufffa",
                        "ï¿»": "\\ufffb",
                        "ï¿¼": "\\ufffc",
                        "ï¿½": "\\ufffd",
                        "ï¿¾": "\\ufffe",
                        "ï¿¿": "\\uffff"
                    },
                    l = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
                    h = JSON && JSON.stringify || function (e) {
                        return c.lastIndex = 0, c.test(e) && (e = e.replace(c, function (e) {
                            return f[e]
                        })), '"' + e + '"'
                    },
                    p = function (e) {
                        var t, r = {},
                            n = [];
                        for (t = 0; 65536 > t; t++) n.push(String.fromCharCode(t));
                        return e.lastIndex = 0, n.join("").replace(e, function (e) {
                            return r[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
                        }), e.lastIndex = 0, r
                    };
                r.quote = function (e) {
                    var t = h(e);
                    return l.lastIndex = 0, l.test(t) ? (u || (u = p(l)), t.replace(l, function (e) {
                        return u[e]
                    })) : t
                };
                var d = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
                r.probeProtocols = function () {
                    for (var e = {}, t = 0; t < d.length; t++) {
                        var r = d[t];
                        e[r] = k[r] && k[r].enabled()
                    }
                    return e
                }, r.detectProtocols = function (e, t, r) {
                    var n = {},
                        i = [];
                    t || (t = d);
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o];
                        n[s] = e[s]
                    }
                    var a = function (e) {
                        var t = e.shift();
                        n[t] ? i.push(t) : e.length > 0 && a(e)
                    };
                    return r.websocket !== !1 && a(["websocket"]), n["xhr-streaming"] && !r.null_origin ? i.push("xhr-streaming") : !n["xdr-streaming"] || r.cookie_needed || r.null_origin ? a(["iframe-eventsource", "iframe-htmlfile"]) : i.push("xdr-streaming"), n["xhr-polling"] && !r.null_origin ? i.push("xhr-polling") : !n["xdr-polling"] || r.cookie_needed || r.null_origin ? a(["iframe-xhr-polling", "jsonp-polling"]) : i.push("xdr-polling"), i
                };
                var g = "_sockjs_global";
                r.createHook = function () {
                    var t = "a" + r.random_string(8);
                    if (!(g in e)) {
                        var n = {};
                        e[g] = function (e) {
                            return e in n || (n[e] = {
                                id: e,
                                del: function () {
                                    delete n[e]
                                }
                            }), n[e]
                        }
                    }
                    return e[g](t)
                }, r.attachMessage = function (e) {
                    r.attachEvent("message", e)
                }, r.attachEvent = function (r, n) {
                    "undefined" != typeof e.addEventListener ? e.addEventListener(r, n, !1) : (t.attachEvent("on" + r, n), e.attachEvent("on" + r, n))
                }, r.detachMessage = function (e) {
                    r.detachEvent("message", e)
                }, r.detachEvent = function (r, n) {
                    "undefined" != typeof e.addEventListener ? e.removeEventListener(r, n, !1) : (t.detachEvent("on" + r, n), e.detachEvent("on" + r, n))
                };
                var m = {},
                    b = !1,
                    v = function () {
                        for (var e in m) m[e](), delete m[e]
                    },
                    y = function () {
                        b || (b = !0, v())
                    };
                r.attachEvent("unload", y), r.unload_add = function (e) {
                    var t = r.random_string(8);
                    return m[t] = e, b && r.delay(v), t
                }, r.unload_del = function (e) {
                    e in m && delete m[e]
                }, r.createIframe = function (e, n) {
                    var i, o, s = t.createElement("iframe"),
                        a = function () {
                            clearTimeout(i);
                            try {
                                s.onload = null
                            } catch (e) {}
                            s.onerror = null
                        },
                        u = function () {
                            s && (a(), setTimeout(function () {
                                s && s.parentNode.removeChild(s), s = null
                            }, 0), r.unload_del(o))
                        },
                        c = function (e) {
                            s && (u(), n(e))
                        },
                        f = function (e, t) {
                            try {
                                s && s.contentWindow && s.contentWindow.postMessage(e, t)
                            } catch (r) {}
                        };
                    return s.src = e, s.style.display = "none", s.style.position = "absolute", s.onerror = function () {
                        c("onerror")
                    }, s.onload = function () {
                        clearTimeout(i), i = setTimeout(function () {
                            c("onload timeout")
                        }, 2e3)
                    }, t.body.appendChild(s), i = setTimeout(function () {
                        c("timeout")
                    }, 15e3), o = r.unload_add(u), {
                        post: f,
                        cleanup: u,
                        loaded: a
                    }
                }, r.createHtmlfile = function (t, n) {
                    var i, o, s, u = new ActiveXObject("htmlfile"),
                        c = function () {
                            clearTimeout(i)
                        },
                        f = function () {
                            u && (c(), r.unload_del(o), s.parentNode.removeChild(s), s = u = null, CollectGarbage())
                        },
                        l = function (e) {
                            u && (f(), n(e))
                        },
                        h = function (e, t) {
                            try {
                                s && s.contentWindow && s.contentWindow.postMessage(e, t)
                            } catch (r) {}
                        };
                    u.open(), u.write('<html><script>document.domain="' + document.domain + '";</script></html>'), u.close(), u.parentWindow[a] = e[a];
                    var p = u.createElement("div");
                    return u.body.appendChild(p), s = u.createElement("iframe"), p.appendChild(s), s.src = t, i = setTimeout(function () {
                        l("timeout")
                    }, 15e3), o = r.unload_add(f), {
                        post: h,
                        cleanup: f,
                        loaded: c
                    }
                };
                var _ = function () {};
                _.prototype = new o(["chunk", "finish"]), _.prototype._start = function (t, n, i, o) {
                    var s = this;
                    try {
                        s.xhr = new XMLHttpRequest
                    } catch (a) {}
                    if (!s.xhr) try {
                        s.xhr = new e.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (a) {}(e.ActiveXObject || e.XDomainRequest) && (n += (-1 === n.indexOf("?") ? "?" : "&") + "t=" + +new Date), s.unload_ref = r.unload_add(function () {
                        s._cleanup(!0)
                    });
                    try {
                        s.xhr.open(t, n, !0)
                    } catch (u) {
                        return s.emit("finish", 0, ""), void s._cleanup()
                    }
                    if (o && o.no_credentials || (s.xhr.withCredentials = "true"), o && o.headers)
                        for (var c in o.headers) s.xhr.setRequestHeader(c, o.headers[c]);
                    s.xhr.onreadystatechange = function () {
                        if (s.xhr) {
                            var e = s.xhr;
                            switch (e.readyState) {
                                case 3:
                                    try {
                                        var t = e.status,
                                            r = e.responseText
                                    } catch (e) {}
                                    1223 === t && (t = 204), r && r.length > 0 && s.emit("chunk", t, r);
                                    break;
                                case 4:
                                    var t = e.status;
                                    1223 === t && (t = 204), s.emit("finish", t, e.responseText), s._cleanup(!1)
                            }
                        }
                    }, s.xhr.send(i)
                }, _.prototype._cleanup = function (e) {
                    var t = this;
                    if (t.xhr) {
                        if (r.unload_del(t.unload_ref), t.xhr.onreadystatechange = function () {}, e) try {
                            t.xhr.abort()
                        } catch (n) {}
                        t.unload_ref = t.xhr = null
                    }
                }, _.prototype.close = function () {
                    var e = this;
                    e.nuke(), e._cleanup(!0)
                };
                var w = r.XHRCorsObject = function () {
                    var e = this,
                        t = arguments;
                    r.delay(function () {
                        e._start.apply(e, t)
                    })
                };
                w.prototype = new _;
                var S = r.XHRLocalObject = function (e, t, n) {
                    var i = this;
                    r.delay(function () {
                        i._start(e, t, n, {
                            no_credentials: !0
                        })
                    })
                };
                S.prototype = new _;
                var E = r.XDRObject = function (e, t, n) {
                    var i = this;
                    r.delay(function () {
                        i._start(e, t, n)
                    })
                };
                E.prototype = new o(["chunk", "finish"]), E.prototype._start = function (e, t, n) {
                    var i = this,
                        o = new XDomainRequest;
                    t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
                    var s = o.ontimeout = o.onerror = function () {
                        i.emit("finish", 0, ""), i._cleanup(!1)
                    };
                    o.onprogress = function () {
                        i.emit("chunk", 200, o.responseText)
                    }, o.onload = function () {
                        i.emit("finish", 200, o.responseText), i._cleanup(!1)
                    }, i.xdr = o, i.unload_ref = r.unload_add(function () {
                        i._cleanup(!0)
                    });
                    try {
                        i.xdr.open(e, t), i.xdr.send(n)
                    } catch (a) {
                        s()
                    }
                }, E.prototype._cleanup = function (e) {
                    var t = this;
                    if (t.xdr) {
                        if (r.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try {
                            t.xdr.abort()
                        } catch (n) {}
                        t.unload_ref = t.xdr = null
                    }
                }, E.prototype.close = function () {
                    var e = this;
                    e.nuke(), e._cleanup(!0)
                }, r.isXHRCorsCapable = function () {
                    return e.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : e.XDomainRequest && t.domain ? 2 : N.enabled() ? 3 : 4
                };
                var k = function (t, n, i) {
                    if (this === e) return new k(t, n, i);
                    var o, s = this;
                    s._options = {
                        devel: !1,
                        debug: !1,
                        protocols_whitelist: [],
                        info: void 0,
                        rtt: void 0
                    }, i && r.objectExtend(s._options, i), s._base_url = r.amendUrl(t), s._server = s._options.server || r.random_number_string(1e3), s._options.protocols_whitelist && s._options.protocols_whitelist.length ? o = s._options.protocols_whitelist : (o = "string" == typeof n && n.length > 0 ? [n] : r.isArray(n) ? n : null, o && s._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), s._protocols = [], s.protocol = null, s.readyState = k.CONNECTING, s._ir = z(s._base_url), s._ir.onfinish = function (e, t) {
                        s._ir = null, e ? (s._options.info && (e = r.objectExtend(e, s._options.info)), s._options.rtt && (t = s._options.rtt), s._applyInfo(e, t, o), s._didClose()) : s._didClose(1002, "Can't connect to server", !0)
                    }
                };
                k.prototype = new n, k.version = "0.3.4", k.CONNECTING = 0, k.OPEN = 1, k.CLOSING = 2, k.CLOSED = 3, k.prototype._debug = function () {
                    this._options.debug && r.log.apply(r, arguments)
                }, k.prototype._dispatchOpen = function () {
                    var e = this;
                    e.readyState === k.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = k.OPEN, e.dispatchEvent(new i("open"))) : e._didClose(1006, "Server lost session")
                }, k.prototype._dispatchMessage = function (e) {
                    var t = this;
                    t.readyState === k.OPEN && t.dispatchEvent(new i("message", {
                        data: e
                    }))
                }, k.prototype._dispatchHeartbeat = function (e) {
                    var t = this;
                    t.readyState === k.OPEN && t.dispatchEvent(new i("heartbeat", {}))
                }, k.prototype._didClose = function (e, t, n) {
                    var o = this;
                    if (o.readyState !== k.CONNECTING && o.readyState !== k.OPEN && o.readyState !== k.CLOSING) throw new Error("INVALID_STATE_ERR");
                    o._ir && (o._ir.nuke(), o._ir = null), o._transport && (o._transport.doCleanup(), o._transport = null);
                    var s = new i("close", {
                        code: e,
                        reason: t,
                        wasClean: r.userSetCode(e)
                    });
                    if (!r.userSetCode(e) && o.readyState === k.CONNECTING && !n) {
                        if (o._try_next_protocol(s)) return;
                        s = new i("close", {
                            code: 2e3,
                            reason: "All transports failed",
                            wasClean: !1,
                            last_event: s
                        })
                    }
                    o.readyState = k.CLOSED, r.delay(function () {
                        o.dispatchEvent(s)
                    })
                }, k.prototype._didMessage = function (e) {
                    var t = this,
                        r = e.slice(0, 1);
                    switch (r) {
                        case "o":
                            t._dispatchOpen();
                            break;
                        case "a":
                            for (var n = JSON.parse(e.slice(1) || "[]"), i = 0; i < n.length; i++) t._dispatchMessage(n[i]);
                            break;
                        case "m":
                            var n = JSON.parse(e.slice(1) || "null");
                            t._dispatchMessage(n);
                            break;
                        case "c":
                            var n = JSON.parse(e.slice(1) || "[]");
                            t._didClose(n[0], n[1]);
                            break;
                        case "h":
                            t._dispatchHeartbeat()
                    }
                }, k.prototype._try_next_protocol = function (e) {
                    var n = this;
                    for (n.protocol && (n._debug("Closed transport:", n.protocol, "" + e), n.protocol = null), n._transport_tref && (clearTimeout(n._transport_tref), n._transport_tref = null);;) {
                        var i = n.protocol = n._protocols.shift();
                        if (!i) return !1;
                        if (k[i] && k[i].need_body === !0 && (!t.body || "undefined" != typeof t.readyState && "complete" !== t.readyState)) return n._protocols.unshift(i), n.protocol = "waiting-for-load", r.attachEvent("load", function () {
                            n._try_next_protocol()
                        }), !0;
                        if (k[i] && k[i].enabled(n._options)) {
                            var o = k[i].roundTrips || 1,
                                s = (n._options.rto || 0) * o || 5e3;
                            n._transport_tref = r.delay(s, function () {
                                n.readyState === k.CONNECTING && n._didClose(2007, "Transport timeouted")
                            });
                            var a = r.random_string(8),
                                u = n._base_url + "/" + n._server + "/" + a;
                            return n._debug("Opening transport:", i, " url:" + u, " RTO:" + n._options.rto), n._transport = new k[i](n, u, n._base_url), !0
                        }
                        n._debug("Skipping transport:", i)
                    }
                }, k.prototype.close = function (e, t) {
                    var n = this;
                    if (e && !r.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
                    return n.readyState !== k.CONNECTING && n.readyState !== k.OPEN ? !1 : (n.readyState = k.CLOSING, n._didClose(e || 1e3, t || "Normal closure"), !0)
                }, k.prototype.send = function (e) {
                    var t = this;
                    if (t.readyState === k.CONNECTING) throw new Error("INVALID_STATE_ERR");
                    return t.readyState === k.OPEN && t._transport.doSend(r.quote("" + e)), !0
                }, k.prototype._applyInfo = function (e, n, i) {
                    var o = this;
                    o._options.info = e, o._options.rtt = n, o._options.rto = r.countRTO(n), o._options.info.null_origin = !t.domain;
                    var s = r.probeProtocols();
                    o._protocols = r.detectProtocols(s, i, e)
                };
                var x = k.websocket = function (t, n) {
                    var i = this,
                        o = n + "/websocket";
                    o = "https" === o.slice(0, 5) ? "wss" + o.slice(5) : "ws" + o.slice(4), i.ri = t, i.url = o;
                    var s = e.WebSocket || e.MozWebSocket;
                    i.ws = new s(i.url), i.ws.onmessage = function (e) {
                        i.ri._didMessage(e.data)
                    }, i.unload_ref = r.unload_add(function () {
                        i.ws.close()
                    }), i.ws.onclose = function () {
                        i.ri._didMessage(r.closeFrame(1006, "WebSocket connection broken"))
                    }
                };
                x.prototype.doSend = function (e) {
                    this.ws.send("[" + e + "]")
                }, x.prototype.doCleanup = function () {
                    var e = this,
                        t = e.ws;
                    t && (t.onmessage = t.onclose = null, t.close(), r.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
                }, x.enabled = function () {
                    return !(!e.WebSocket && !e.MozWebSocket)
                }, x.roundTrips = 2;
                var R = function () {};
                R.prototype.send_constructor = function (e) {
                    var t = this;
                    t.send_buffer = [], t.sender = e
                }, R.prototype.doSend = function (e) {
                    var t = this;
                    t.send_buffer.push(e), t.send_stop || t.send_schedule()
                }, R.prototype.send_schedule_wait = function () {
                    var e, t = this;
                    t.send_stop = function () {
                        t.send_stop = null, clearTimeout(e)
                    }, e = r.delay(25, function () {
                        t.send_stop = null, t.send_schedule()
                    })
                }, R.prototype.send_schedule = function () {
                    var e = this;
                    if (e.send_buffer.length > 0) {
                        var t = "[" + e.send_buffer.join(",") + "]";
                        e.send_stop = e.sender(e.trans_url, t, function (t, r) {
                            e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + r) : e.send_schedule_wait()
                        }), e.send_buffer = []
                    }
                }, R.prototype.send_destructor = function () {
                    var e = this;
                    e._send_stop && e._send_stop(), e._send_stop = null
                };
                var j = function (e, n, i) {
                        var o = this;
                        if (!("_send_form" in o)) {
                            var s = o._send_form = t.createElement("form"),
                                a = o._send_area = t.createElement("textarea");
                            a.name = "d", s.style.display = "none", s.style.position = "absolute", s.method = "POST", s.enctype = "application/x-www-form-urlencoded", s.acceptCharset = "UTF-8", s.appendChild(a), t.body.appendChild(s)
                        }
                        var s = o._send_form,
                            a = o._send_area,
                            u = "a" + r.random_string(8);
                        s.target = u, s.action = e + "/jsonp_send?i=" + u;
                        var c;
                        try {
                            c = t.createElement('<iframe name="' + u + '">')
                        } catch (f) {
                            c = t.createElement("iframe"), c.name = u
                        }
                        c.id = u, s.appendChild(c), c.style.display = "none";
                        try {
                            a.value = n
                        } catch (l) {
                            r.log("Your browser is seriously broken. Go home! " + l.message)
                        }
                        s.submit();
                        var h = function (e) {
                            c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, r.delay(500, function () {
                                c.parentNode.removeChild(c), c = null
                            }), a.value = "", i(!0))
                        };
                        return c.onerror = c.onload = h, c.onreadystatechange = function (e) {
                            "complete" == c.readyState && h()
                        }, h
                    },
                    T = function (e) {
                        return function (t, r, n) {
                            var i = new e("POST", t + "/xhr_send", r);
                            return i.onfinish = function (e, t) {
                                    n(200 === e || 204 === e, "http status " + e)
                                },
                                function (e) {
                                    n(!1, e)
                                }
                        }
                    },
                    M = function (e, n) {
                        var i, o, s = t.createElement("script"),
                            a = function (e) {
                                o && (o.parentNode.removeChild(o), o = null), s && (clearTimeout(i), s.parentNode.removeChild(s), s.onreadystatechange = s.onerror = s.onload = s.onclick = null, s = null, n(e), n = null)
                            },
                            u = !1,
                            c = null;
                        if (s.id = "a" + r.random_string(8), s.src = e, s.type = "text/javascript", s.charset = "UTF-8", s.onerror = function (e) {
                                c || (c = setTimeout(function () {
                                    u || a(r.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                                }, 1e3))
                            }, s.onload = function (e) {
                                a(r.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
                            }, s.onreadystatechange = function (e) {
                                if (/loaded|closed/.test(s.readyState)) {
                                    if (s && s.htmlFor && s.onclick) {
                                        u = !0;
                                        try {
                                            s.onclick()
                                        } catch (t) {}
                                    }
                                    s && a(r.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, "undefined" == typeof s.async && t.attachEvent)
                            if (/opera/i.test(navigator.userAgent)) o = t.createElement("script"), o.text = "try{var a = document.getElementById('" + s.id + "'); if(a)a.onerror();}catch(x){};", s.async = o.async = !1;
                            else {
                                try {
                                    s.htmlFor = s.id, s.event = "onclick"
                                } catch (f) {}
                                s.async = !0
                            }
                        "undefined" != typeof s.async && (s.async = !0), i = setTimeout(function () {
                            a(r.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
                        }, 35e3);
                        var l = t.getElementsByTagName("head")[0];
                        return l.insertBefore(s, l.firstChild), o && l.insertBefore(o, l.firstChild), a
                    },
                    A = k["jsonp-polling"] = function (e, t) {
                        r.polluteGlobalNamespace();
                        var n = this;
                        n.ri = e, n.trans_url = t, n.send_constructor(j), n._schedule_recv()
                    };
                A.prototype = new R, A.prototype._schedule_recv = function () {
                    var e = this,
                        t = function (t) {
                            e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv()
                        };
                    e._recv_stop = O(e.trans_url + "/jsonp", M, t)
                }, A.enabled = function () {
                    return !0
                }, A.need_body = !0, A.prototype.doCleanup = function () {
                    var e = this;
                    e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor()
                };
                var O = function (t, n, i) {
                        var o = "a" + r.random_string(6),
                            s = t + "?c=" + escape(a + "." + o),
                            u = 0,
                            c = function (t) {
                                switch (u) {
                                    case 0:
                                        delete e[a][o], i(t);
                                        break;
                                    case 1:
                                        i(t), u = 2;
                                        break;
                                    case 2:
                                        delete e[a][o]
                                }
                            },
                            f = n(s, c);
                        e[a][o] = f;
                        var l = function () {
                            e[a][o] && (u = 1, e[a][o](r.closeFrame(1e3, "JSONP user aborted read")))
                        };
                        return l
                    },
                    C = function () {};
                C.prototype = new R, C.prototype.run = function (e, t, r, n, i) {
                    var o = this;
                    o.ri = e, o.trans_url = t, o.send_constructor(T(i)), o.poll = new $(e, n, t + r, i)
                }, C.prototype.doCleanup = function () {
                    var e = this;
                    e.poll && (e.poll.abort(), e.poll = null)
                };
                var I = k["xhr-streaming"] = function (e, t) {
                    this.run(e, t, "/xhr_streaming", ne, r.XHRCorsObject)
                };
                I.prototype = new C, I.enabled = function () {
                    return e.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
                }, I.roundTrips = 2, I.need_body = !0;
                var L = k["xdr-streaming"] = function (e, t) {
                    this.run(e, t, "/xhr_streaming", ne, r.XDRObject)
                };
                L.prototype = new C, L.enabled = function () {
                    return !!e.XDomainRequest
                }, L.roundTrips = 2;
                var q = k["xhr-polling"] = function (e, t) {
                    this.run(e, t, "/xhr", ne, r.XHRCorsObject)
                };
                q.prototype = new C, q.enabled = I.enabled, q.roundTrips = 2;
                var P = k["xdr-polling"] = function (e, t) {
                    this.run(e, t, "/xhr", ne, r.XDRObject)
                };
                P.prototype = new C, P.enabled = L.enabled, P.roundTrips = 2;
                var N = function () {};
                N.prototype.i_constructor = function (e, t, n) {
                    var i = this;
                    i.ri = e, i.origin = r.getOrigin(n), i.base_url = n, i.trans_url = t;
                    var o = n + "/iframe.html";
                    i.ri._options.devel && (o += "?t=" + +new Date), i.window_id = r.random_string(8), o += "#" + i.window_id, i.iframeObj = r.createIframe(o, function (e) {
                        i.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
                    }), i.onmessage_cb = r.bind(i.onmessage, i), r.attachMessage(i.onmessage_cb)
                }, N.prototype.doCleanup = function () {
                    var e = this;
                    if (e.iframeObj) {
                        r.detachMessage(e.onmessage_cb);
                        try {
                            e.iframeObj.iframe.contentWindow && e.postMessage("c")
                        } catch (t) {}
                        e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null
                    }
                }, N.prototype.onmessage = function (e) {
                    var t = this;
                    if (e.origin === t.origin) {
                        var r = e.data.slice(0, 8),
                            n = e.data.slice(8, 9),
                            i = e.data.slice(9);
                        if (r === t.window_id) switch (n) {
                            case "s":
                                t.iframeObj.loaded(), t.postMessage("s", JSON.stringify([k.version, t.protocol, t.trans_url, t.base_url]));
                                break;
                            case "t":
                                t.ri._didMessage(i)
                        }
                    }
                }, N.prototype.postMessage = function (e, t) {
                    var r = this;
                    r.iframeObj.post(r.window_id + e + (t || ""), r.origin)
                }, N.prototype.doSend = function (e) {
                    this.postMessage("m", e)
                }, N.enabled = function () {
                    var t = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
                    return ("function" == typeof e.postMessage || "object" == typeof e.postMessage) && !t
                };
                var U, B = function (t, n) {
                        parent !== e ? parent.postMessage(U + t + (n || ""), "*") : r.log("Can't postMessage, no parent window.", t, n)
                    },
                    D = function () {};
                D.prototype._didClose = function (e, t) {
                    B("t", r.closeFrame(e, t))
                }, D.prototype._didMessage = function (e) {
                    B("t", e)
                }, D.prototype._doSend = function (e) {
                    this._transport.doSend(e)
                }, D.prototype._doCleanup = function () {
                    this._transport.doCleanup()
                }, r.parent_origin = void 0, k.bootstrap_iframe = function () {
                    var n;
                    U = t.location.hash.slice(1);
                    var i = function (t) {
                        if (t.source === parent && ("undefined" == typeof r.parent_origin && (r.parent_origin = t.origin), t.origin === r.parent_origin)) {
                            var i = t.data.slice(0, 8),
                                o = t.data.slice(8, 9),
                                s = t.data.slice(9);
                            if (i === U) switch (o) {
                                case "s":
                                    var a = JSON.parse(s),
                                        u = a[0],
                                        c = a[1],
                                        f = a[2],
                                        l = a[3];
                                    if (u !== k.version && r.log('Incompatibile SockJS! Main site uses: "' + u + '", the iframe: "' + k.version + '".'), !r.flatUrl(f) || !r.flatUrl(l)) return void r.log("Only basic urls are supported in SockJS");
                                    if (!r.isSameOriginUrl(f) || !r.isSameOriginUrl(l)) return void r.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([e.location.href, f, l]) + ")");
                                    n = new D, n._transport = new D[c](n, f, l);
                                    break;
                                case "m":
                                    n._doSend(s);
                                    break;
                                case "c":
                                    n && n._doCleanup(), n = null
                            }
                        }
                    };
                    r.attachMessage(i), B("s")
                };
                var W = function (e, t) {
                    var n = this;
                    r.delay(function () {
                        n.doXhr(e, t)
                    })
                };
                W.prototype = new o(["finish"]), W.prototype.doXhr = function (e, t) {
                    var n = this,
                        i = (new Date).getTime(),
                        o = new t("GET", e + "/info"),
                        s = r.delay(8e3, function () {
                            o.ontimeout()
                        });
                    o.onfinish = function (e, t) {
                        if (clearTimeout(s), s = null, 200 === e) {
                            var r = (new Date).getTime() - i,
                                o = JSON.parse(t);
                            "object" != typeof o && (o = {}), n.emit("finish", o, r)
                        } else n.emit("finish")
                    }, o.ontimeout = function () {
                        o.close(), n.emit("finish")
                    }
                };
                var H = function (e) {
                    var n = this,
                        i = function () {
                            var t = new N;
                            t.protocol = "w-iframe-info-receiver";
                            var r = function (e) {
                                    if ("string" == typeof e && "m" === e.substr(0, 1)) {
                                        var r = JSON.parse(e.substr(1)),
                                            i = r[0],
                                            o = r[1];
                                        n.emit("finish", i, o)
                                    } else n.emit("finish");
                                    t.doCleanup(), t = null
                                },
                                i = {
                                    _options: {},
                                    _didClose: r,
                                    _didMessage: r
                                };
                            t.i_constructor(i, e, e)
                        };
                    t.body ? i() : r.attachEvent("load", i)
                };
                H.prototype = new o(["finish"]);
                var F = function () {
                    var e = this;
                    r.delay(function () {
                        e.emit("finish", {}, 2e3)
                    })
                };
                F.prototype = new o(["finish"]);
                var z = function (e) {
                        if (r.isSameOriginUrl(e)) return new W(e, r.XHRLocalObject);
                        switch (r.isXHRCorsCapable()) {
                            case 1:
                                return new W(e, r.XHRLocalObject);
                            case 2:
                                return new W(e, r.XDRObject);
                            case 3:
                                return new H(e);
                            default:
                                return new F
                        }
                    },
                    J = D["w-iframe-info-receiver"] = function (e, t, n) {
                        var i = new W(n, r.XHRLocalObject);
                        i.onfinish = function (t, r) {
                            e._didMessage("m" + JSON.stringify([t, r])), e._didClose()
                        }
                    };
                J.prototype.doCleanup = function () {};
                var Y = k["iframe-eventsource"] = function () {
                    var e = this;
                    e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
                };
                Y.prototype = new N, Y.enabled = function () {
                    return "EventSource" in e && N.enabled()
                }, Y.need_body = !0, Y.roundTrips = 3;
                var K = D["w-iframe-eventsource"] = function (e, t) {
                    this.run(e, t, "/eventsource", Z, r.XHRLocalObject)
                };
                K.prototype = new C;
                var G = k["iframe-xhr-polling"] = function () {
                    var e = this;
                    e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
                };
                G.prototype = new N, G.enabled = function () {
                    return e.XMLHttpRequest && N.enabled()
                }, G.need_body = !0, G.roundTrips = 3;
                var X = D["w-iframe-xhr-polling"] = function (e, t) {
                    this.run(e, t, "/xhr", ne, r.XHRLocalObject)
                };
                X.prototype = new C;
                var Q = k["iframe-htmlfile"] = function () {
                    var e = this;
                    e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
                };
                Q.prototype = new N, Q.enabled = function () {
                    return N.enabled()
                }, Q.need_body = !0, Q.roundTrips = 3;
                var V = D["w-iframe-htmlfile"] = function (e, t) {
                    this.run(e, t, "/htmlfile", re, r.XHRLocalObject)
                };
                V.prototype = new C;
                var $ = function (e, t, r, n) {
                    var i = this;
                    i.ri = e, i.Receiver = t, i.recv_url = r, i.AjaxObject = n, i._scheduleRecv()
                };
                $.prototype._scheduleRecv = function () {
                    var e = this,
                        t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
                        r = 0;
                    t.onmessage = function (t) {
                        r += 1, e.ri._didMessage(t.data)
                    }, t.onclose = function (r) {
                        e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === r.reason ? e.ri._didClose(1006, "Polling error (" + r.reason + ")") : e._scheduleRecv())
                    }
                }, $.prototype.abort = function () {
                    var e = this;
                    e.poll_is_closing = !0, e.poll && e.poll.abort()
                };
                var Z = function (e) {
                    var t = this,
                        n = new EventSource(e);
                    n.onmessage = function (e) {
                        t.dispatchEvent(new i("message", {
                            data: unescape(e.data)
                        }))
                    }, t.es_close = n.onerror = function (e, o) {
                        var s = o ? "user" : 2 !== n.readyState ? "network" : "permanent";
                        t.es_close = n.onmessage = n.onerror = null, n.close(), n = null, r.delay(200, function () {
                            t.dispatchEvent(new i("close", {
                                reason: s
                            }))
                        })
                    }
                };
                Z.prototype = new n, Z.prototype.abort = function () {
                    var e = this;
                    e.es_close && e.es_close({}, !0)
                };
                var ee, te = function () {
                        if (void 0 === ee)
                            if ("ActiveXObject" in e) try {
                                ee = !!new ActiveXObject("htmlfile")
                            } catch (t) {} else ee = !1;
                        return ee
                    },
                    re = function (t) {
                        var n = this;
                        r.polluteGlobalNamespace(), n.id = "a" + r.random_string(6, 26), t += (-1 === t.indexOf("?") ? "?" : "&") + "c=" + escape(a + "." + n.id);
                        var o, s = te() ? r.createHtmlfile : r.createIframe;
                        e[a][n.id] = {
                            start: function () {
                                o.loaded()
                            },
                            message: function (e) {
                                n.dispatchEvent(new i("message", {
                                    data: e
                                }))
                            },
                            stop: function () {
                                n.iframe_close({}, "network")
                            }
                        }, n.iframe_close = function (t, r) {
                            o.cleanup(), n.iframe_close = o = null, delete e[a][n.id], n.dispatchEvent(new i("close", {
                                reason: r
                            }))
                        }, o = s(t, function (e) {
                            n.iframe_close({}, "permanent")
                        })
                    };
                re.prototype = new n, re.prototype.abort = function () {
                    var e = this;
                    e.iframe_close && e.iframe_close({}, "user")
                };
                var ne = function (e, t) {
                    var r = this,
                        n = 0;
                    r.xo = new t("POST", e, null), r.xo.onchunk = function (e, t) {
                        if (200 === e)
                            for (;;) {
                                var o = t.slice(n),
                                    s = o.indexOf("\n");
                                if (-1 === s) break;
                                n += s + 1;
                                var a = o.slice(0, s);
                                r.dispatchEvent(new i("message", {
                                    data: a
                                }))
                            }
                    }, r.xo.onfinish = function (e, t) {
                        r.xo.onchunk(e, t), r.xo = null;
                        var n = 200 === e ? "network" : "permanent";
                        r.dispatchEvent(new i("close", {
                            reason: n
                        }))
                    }
                };
                return ne.prototype = new n, ne.prototype.abort = function () {
                    var e = this;
                    e.xo && (e.xo.close(), e.dispatchEvent(new i("close", {
                        reason: "user"
                    })), e.xo = null)
                }, k.getUtils = function () {
                    return r
                }, k.getIframeTransport = function () {
                    return N
                }, k
            }(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function () {
                return SockJS
            }), module.exports = SockJS
    }, {}],
    108: [function (e, t, r) {
        (function (r) {
            function n(e, t, r, n, i, o, c, f) {
                function l(e) {
                    if (f) {
                        var t = "";
                        e.on("data", function (e) {
                            t += e
                        }), e.on("end", function () {
                            f(null, JSON.parse(t))
                        })
                    }
                }
                var h = t ? a : s;
                c["Content-Type"] = "application/x-www-form-urlencoded";
                var p = {
                    hostname: r,
                    port: n || (t ? 443 : 80),
                    path: i,
                    method: e,
                    headers: c
                };
                if ("GET" == e) {
                    var d = u.stringify(o);
                    p.path += "?" + d, h.get(p, l).on("error", function (e) {
                        f(e)
                    })
                } else {
                    var g = h.request(p, l);
                    g.setTimeout(5e3), g.on("timeout", function () {
                        f && f(new Error("timed out"), null), g.abort()
                    }), g.on("error", function (e) {
                        f && f(e, null)
                    });
                    var d = u.stringify(o);
                    g.write(d), g.end()
                }
            }

            function i(e, t, r, n, i, s, a, c) {
                var f = u.stringify(s),
                    l = (t ? "https://" : "http://") + r + ":" + n + i;
                "GET" == e && (l += "?" + f);
                var h = o(e, l);
                h.withCredentials = !0, h.onload = function () {
                    decoded = "";
                    try {
                        var e = JSON.parse(h.responseText);
                        c(null, e)
                    } catch (t) {
                        c(null, JSON.parse(h.responseText))
                    }
                }, h.onerror = function () {
                    c(h.statusText || "unknown error")
                }, h.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                for (header_key in a) h.setRequestHeader(header_key, a[header_key]);
                h.send(f)
            }

            function o(e, t) {
                var r = new XMLHttpRequest;
                return "withCredentials" in r ? r.open(e, t, !0) : "undefined" != typeof XDomainRequest ? (r = new XDomainRequest, r.open(e, t)) : r = null, r
            }
            var s = e("http"),
                a = e("https"),
                u = e("querystring");
            "browser" !== r.title ? t.exports = {
                request: n
            } : t.exports = {
                request: i
            }
        }).call(this, e("_process"))
    }, {
        _process: 12,
        http: 33,
        https: 8,
        querystring: 16
    }],
    109: [function (e, t, r) {
        function n(e) {
            if (0 == e) return "";
            var t = Math.floor(62 * Math.random()) % 62;
            return n(e - 1) + i[t]
        }
        var i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        t.exports = n
    }, {}],
    110: [function (e, t, r) {
        function n() {}
        var i = e("./transporter");
        t.exports = n, n.format = function (e) {
            var t = "";
            e.params && (e.value = e.params);
            try {
                t = i.decode(e.value)
            } catch (r) {
                t = e.value
            }
            return {
                id: e.id,
                value: t ? "string" == typeof t ? JSON.parse(t) : t : null,
                timestamp: e.timestamp
            }
        }
    }, {
        "./transporter": 120
    }],
    111: [function (e, t, r) {
        function n(e, t) {
            this.milkcocoa = e, this.idGenerator = e.idGenerator, this.path = t
        }
        var i = e("./streaming"),
            o = e("./streaming2"),
            s = e("./history"),
            a = e("./dataelement");
        t.exports = n, n.prototype.transporter = function () {
            return this.milkcocoa.transporter
        }, n.prototype.push = function (e, t, r) {
            var n = this;
            if (e instanceof Array) throw new Error("params must not be Array");
            if ("object" != typeof e) throw new Error("params must be object");
            this.idGenerator.getNextId(function (i, o) {
                var s = n.milkcocoa.get_time();
                n.transporter().send_operation_request(n.path, "push", {
                    id: o,
                    ts: s,
                    params: e
                }, t, r)
            })
        }, n.prototype.set = function (e, t, r, n) {
            if ("string" != typeof e) throw new Error("id must be string");
            if (t instanceof Array) throw new Error("params must not be Array");
            if ("object" != typeof t) throw new Error("params must be object");
            this.transporter().send_operation_request(this.path, "set", {
                path: this.path,
                id: e,
                params: t
            }, r, n)
        }, n.prototype.send = function (e, t, r) {
            if ("object" != typeof e) throw new Error("params must be object");
            this.transporter().send_operation_request(this.path, "send", {
                path: this.path,
                params: e
            }, t, r)
        }, n.prototype.remove = function (e, t, r) {
            if ("string" != typeof e) throw new Error("id must be string");
            var n = "removeãƒ¡ã‚½ãƒƒãƒ‰ã¯éžæŽ¨å¥¨ã§ã™ã€‚remove method was deprecated. see https://mlkcca.com/document/api-js.html";
            console.warn(n), r && r(new Error(n))
        }, n.prototype.get = function (e, t) {
            if ("string" != typeof e) throw new Error("id must be string");
            this.transporter().call("get", {
                path: this.path,
                id: e
            }, function (e, r) {
                return r.err ? void t(r.err) : void t(null, a.format(r.content.d))
            })
        }, n.prototype.get_many = function (e, t) {
            this.transporter().call("get_many", {
                path: this.path,
                ids: JSON.stringify(e)
            }, function (e, r) {
                return r.err ? void t(r.err) : void t(null, r.content.d.map(a.format))
            })
        }, n.prototype.count = function (e) {
            e(new Error("deprecated"))
        }, n.prototype.stream = function () {
            return new i(this.transporter(), this.path)
        }, n.prototype.stream2 = function () {
            return new o(this.transporter(), this.path)
        }, n.prototype.history = function () {
            return new s(this.transporter(), this.path)
        }, n.prototype.on = function (e, t) {
            this.milkcocoa.listeners.add(e, this.path, t), this.transporter().on(this.path, e)
        }, n.prototype.off = function (e) {
            this.milkcocoa.listeners.del(e, this.path), this.transporter().off(this.path, e)
        }, n.prototype.child = function (e) {
            return new n(this.milkcocoa, this.path + "/" + e)
        }
    }, {
        "./dataelement": 110,
        "./history": 112,
        "./streaming": 118,
        "./streaming2": 119
    }],
    112: [function (e, t, r) {
        function n(e, t) {
            this.stream = new i(e, t), this._times = 1, this._limit = null, this._span = null, this.listeners = {}
        }
        var i = e("./streaming2");
        n.prototype.sort = function (e) {
            return this.stream.sort(e), this
        }, n.prototype.size = function (e) {
            return this.stream.size(e), this
        }, n.prototype.times = function (e) {
            return this._times = e, this
        }, n.prototype.limit = function (e) {
            return this._limit = e, this
        }, n.prototype.span = function (e, t) {
            return this._span = {
                start: e,
                end: t
            }, this
        }, n.prototype.on = function (e, t) {
            return this.listeners[e] = t, this
        }, n.prototype.run = function () {
            this._span ? "DESC" == this.stream.stream._sort ? (this.stream.setTimestamp(this._span.end), this.runSpan(this._span.start.toString(36))) : (this.stream.setTimestamp(this._span.start), this.runSpan(this._span.end.toString(36))) : this._limit ? this.runLimit(this._limit) : this.runTimes(this._times)
        }, n.prototype.runTimes = function (e) {
            var t = this;
            this.stream.next(function (r, n) {
                return r ? void t.fire("error", r) : (e--, t.fire("data", n), void(e > 0 ? t.runTimes(e) : t.fire("end")))
            })
        }, n.prototype.runLimit = function (e) {
            var t = this;
            this.stream.next(function (r, n) {
                return r ? void t.fire("error", r) : (e -= n.length, 0 > e ? "DESC" == t.stream.stream._sort ? t.fire("data", n.slice(0, n.length + e)) : t.fire("data", n.slice(0, n.length + e)) : n.length > 0 && t.fire("data", n), void(e > 0 && n.length > 0 ? t.runLimit(e) : t.fire("end")))
            })
        }, n.prototype.runSpan = function (e) {
            var t = this;
            this.stream.next(function (r, n) {
                if (r) return void t.fire("error", r);
                if ("DESC" == t.stream.stream._sort) var i = function (t) {
                    return t.id >= e
                };
                else var i = function (t) {
                    return t.id <= e
                };
                var o = n.filter(i);
                o.length > 0 ? (t.fire("data", o), t.runSpan(e)) : t.fire("end")
            })
        }, n.prototype.fire = function (e, t) {
            this.listeners[e] && this.listeners[e](t)
        }, t.exports = n
    }, {
        "./streaming2": 119
    }],
    113: [function (e, t, r) {
        (function (e) {
            function r(e) {
                var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                    n = e % 62,
                    i = Math.floor(e / 62);
                return 1 > i ? "" : r(i) + t[n]
            }

            function n() {
                var t = "ybfghijam6cpqdrw71nx34eo5suz0t9vkl28",
                    n = (new Date).getTime(),
                    i = n,
                    o = null,
                    s = [],
                    a = 0,
                    u = 1,
                    c = a,
                    f = "0000";
                return {
                    init: function (e) {
                        if (e && "number" == typeof e) {
                            n = (new Date).getTime(), i = Math.floor(e / 1e3);
                            var t = r(i);
                            f = t.substr(t.length - 4)
                        }
                    },
                    getHeader: function (e, t) {
                        var r = this,
                            i = (new Date).getTime();
                        if (o == i) setTimeout(function () {
                            r.getHeader(e, t)
                        }, 1);
                        else {
                            o = i;
                            var s = i - n;
                            t((e + s).toString(36))
                        }
                    },
                    getNextId: function (e) {
                        s.push(e), c == a && this._exec_getNextId()
                    },
                    _exec_getNextId: function () {
                        var e = this,
                            t = s.shift();
                        t ? (c = u, this._getNextId(function (r, n) {
                            t(r, n), e._exec_getNextId()
                        })) : c = a
                    },
                    _getNextId: function (r) {
                        function n(e) {
                            return 1 >= e ? t[Math.floor(36 * Math.random())] : t[Math.floor(36 * Math.random())] + n(e - 1)
                        }
                        this.getHeader(i, function (t) {
                            var i = t + f + n(3);
                            15 != i.length && (e.console && console.error("generated id is wrong.", i.length), i = i.substr(0, 15)), r(null, i)
                        })
                    }
                }
            }
            t.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    114: [function (e, t, r) {
        function n() {
            var e = {
                push: {},
                set: {},
                remove: {},
                send: {}
            };
            return {
                add: function (t, r, n) {
                    e[t][r] || (e[t][r] = []), e[t][r].push(n)
                },
                del: function (t, r) {
                    e[t][r] = []
                },
                fire: function (t, r, n) {
                    e[t][r].forEach(function (e) {
                        e(n)
                    })
                },
                get_subscribes: function () {
                    var t = [];
                    for (var r in e)
                        for (var n in e[r]) t.push({
                            event: r,
                            path: n
                        });
                    return t
                }
            }
        }
        t.exports = n
    }, {}],
    115: [function (e, t, r) {
        (function (e) {
            "browser" !== e.title ? t.exports = {
                mode: !1,
                log: function () {
                    this.mode && console.log(arguments)
                },
                error: function () {
                    this.mode && console.error(arguments)
                }
            } : t.exports = {
                mode: !1,
                log: function () {
                    window.console && this.mode && console.log(arguments)
                },
                error: function () {
                    window.console && this.mode && console.error(arguments)
                }
            }
        }).call(this, e("_process"))
    }, {
        _process: 12
    }],
    116: [function (e, t, r) {
        (function (r) {
            function n(e, t) {
                this.option = t || {}, this.file_path = this.option.file_path || "/var/lib/mlkcca", this.storage = new u(this.file_path);
                var r = e.match(/([a-z0-9]+)\.mlkcca\.com/);
                if (r ? (this.host = e, this.app_id = this.option.app_id || r[1]) : (this.host = this.option.host || "v2-production-lb1.mlkcca.com", this.app_id = e), !this.app_id) throw new Error("app_id must be specified");
                this.option.clientId || (this.option.clientId = "js" + this.app_id.substr(this.app_id.length - 5) + c(16)), this.option.app_id = this.app_id, this.listeners = new o, this.idGenerator = new i, this.connect()
            }
            var i = e("./idgenerator"),
                o = e("./listeners"),
                s = e("./transporter"),
                a = e("./datastore"),
                u = (e("./logger"), e("./storage")),
                c = (e("./dataelement"), e("./clientid"));
            n.prototype.connect = function (e) {
                function t(t) {
                    r.start_ts = (new Date).getTime(), r.idGenerator.init(t), r.server_ts = Math.floor(t / 1e3), e && e()
                }
                var r = this,
                    n = null,
                    i = this.storage.get("mlkcca_sid");
                i && (n = i.sid), this.transporter = new s(this.host, this.option, n, t), this.transporter.onMessage(function (e) {
                    if (e.content.hasOwnProperty("params"))
                        if ("string" == typeof e.content.params) e.content.params = JSON.parse(e.content.params);
                        else if ("object" != typeof e.content.params) throw new Error("unknown params");
                    switch (e.event) {
                        case "push":
                            r.listeners.fire("push", e.path, {
                                id: e.content.id,
                                path: e.path,
                                value: e.content.params,
                                timestamp: e.content.ts
                            });
                            break;
                        case "set":
                            r.listeners.fire("set", e.path, {
                                id: e.content.id,
                                path: e.path,
                                value: e.content.params
                            });
                            break;
                        case "remove":
                            r.listeners.fire("remove", e.path, {
                                id: e.content.id,
                                path: e.path
                            });
                            break;
                        case "send":
                            r.listeners.fire("send", e.path, {
                                path: e.path,
                                value: e.content.params
                            });
                            break;
                        case "success":
                            console.log("success", e)
                    }
                }), this.server_ts = (new Date).getTime(), this.start_ts = (new Date).getTime()
            }, n.prototype.onConnected = function (e) {
                this.transporter.onConnected(e)
            }, n.prototype.onClosed = function (e) {
                this.transporter.onClosed(e)
            }, n.prototype.onError = function (e) {
                this.transporter.onError(e)
            }, n.prototype.get_time = function () {
                var e = (new Date).getTime() - this.start_ts;
                return Math.floor(this.server_ts + e)
            }, n.connectWithAuth = function (e, t, r) {
                var i = r || {};
                i.token = t;
                var o = new n(e, i);
                return o.authWithToken(t, function (e) {}), o
            }, n.connectWithApiKey = function (e, t, r, i) {
                var o = i || {};
                o.apikey = t, o.apisecret = r;
                var s = new n(e, o);
                return s
            }, n.prototype.disconnect = function (e) {
                this.transporter.disconnect(e)
            }, n.prototype.reconnect = function (e) {
                var t = this;
                this.transporter.disconnect(function () {
                    t.connect(function () {
                        t.listeners.get_subscribes().forEach(function (e) {
                            t.transporter.on(e.path, e.event)
                        }), e && e()
                    })
                })
            }, n.prototype.dataStore = function (e) {
                if ("string" != typeof e) throw new Error("path must be string");
                return new a(this, e)
            }, n.prototype.authWithToken = function (e, t) {
                if ("string" != typeof e) throw new Error("token must be string");
                var r = this;
                this.transporter.auth_call("loginwithtoken", {
                    token: e
                }, function (e, n) {
                    return e ? void t(e) : n.err ? void t(n.err) : (r.storage.set("mlkcca_sid", {
                        sid: n.sid
                    }), void r.reconnect(function () {
                        r.user(t)
                    }))
                })
            }, n.prototype.authAsAdmin = function (e, t) {
                if ("string" != typeof e) throw new Error("token must be string");
                var r = this;
                this.transporter.auth_call("loginasadmin", {
                    token: e
                }, function (e, n) {
                    return n.err ? void t(n.err) : (r.storage.set("mlkcca_sid", {
                        sid: n.sid
                    }), void r.reconnect(function () {
                        r.user(t)
                    }))
                })
            }, n.prototype.user = function (e) {
                var t = this.storage.get("mlkcca_sid"),
                    r = {};
                t && (r.mlkccasid = t.sid), this.transporter.auth_call("me", r, function (t, r) {
                    return r.err ? void e(r.err) : "notloggedin" == r.content.condition ? void e(null, null) : void e(r.err, r.content.account)
                })
            }, n.prototype.getCurrentUser = function (e) {
                this.user(e)
            }, n.prototype.logout = function (e) {
                var t = this,
                    r = this.storage.get("mlkcca_sid"),
                    n = {};
                r && (n.mlkccasid = r.sid), this.transporter.auth_call("logout", n, function (r) {
                    return r && e ? void e(r) : void t.reconnect(e)
                })
            }, "browser" !== r.title ? t.exports = n : window.MilkCocoa = n
        }).call(this, e("_process"))
    }, {
        "./clientid": 109,
        "./dataelement": 110,
        "./datastore": 111,
        "./idgenerator": 113,
        "./listeners": 114,
        "./logger": 115,
        "./storage": 117,
        "./transporter": 120,
        _process: 12
    }],
    117: [function (e, t, r) {
        (function (r) {
            function n(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e.charCodeAt(r) ^ s;
                    t.push(n.toString(36))
                }
                return t.join(",")
            }

            function i(e) {
                var t = e.split(","),
                    r = "";
                return t.forEach(function (e) {
                    r += String.fromCharCode(parseInt(e, 36) ^ s)
                }), r
            }
            var o = e("./logger"),
                s = 80,
                a = null;
            if ("browser" !== r.title) {
                var u = e("fs"),
                    c = e("path");
                a = function (e) {
                    return {
                        set: function (t, r) {
                            var i = c.join(e, t);
                            u.writeFileSync(i, n(JSON.stringify(r)))
                        },
                        get: function (t) {
                            var r = c.join(e, t);
                            if (!u.existsSync(r)) return null;
                            var n = u.readFileSync(r),
                                s = null;
                            try {
                                s = JSON.parse(i(String(n)))
                            } catch (a) {
                                o.error("parse error", a)
                            }
                            return s
                        }
                    }
                }
            } else a = function () {
                return {
                    set: function (e, t) {
                        window.localStorage && window.localStorage.setItem(e, n(JSON.stringify(t)))
                    },
                    get: function (e) {
                        if (!window.localStorage) return null;
                        var t = window.localStorage.getItem(e),
                            r = null;
                        try {
                            r = JSON.parse(i(t))
                        } catch (n) {
                            o.error("parse error", n)
                        }
                        return r
                    }
                }
            };
            t.exports = a
        }).call(this, e("_process"))
    }, {
        "./logger": 115,
        _process: 12,
        fs: 1,
        path: 11
    }],
    118: [function (e, t, r) {
        function n(e, t) {
            this.transporter = e, this.path = t, this._current_id = null, this._size = 50, this._sort = "DESC", this.onData = null, this.onError = null
        }
        var i = e("./dataelement");
        t.exports = n, n.prototype.sort = n.prototype.order = function (e) {
            return this._sort = e.toUpperCase(), this
        }, n.prototype.size = n.prototype.limit = function (e) {
            return e > 999 && (e = 999, window.console && window.console.log("size too large")), this._size = e, this
        }, n.prototype.onData = function (e) {
            this.onData = e
        }, n.prototype.onError = function (e) {
            this.onError = e
        }, n.prototype.next = function (e) {
            return this.exec(e), this
        }, n.prototype.setTimestamp = function (e) {
            return this._current_id = e.toString(36), this
        }, n.prototype.exec = function (e) {
            var t = this,
                r = {
                    path: this.path,
                    limit: this._size,
                    sort: this._sort
                };
            this._current_id && (r.th = this._current_id), this.transporter.call("query", r, function (r, n) {
                if (r) return t.onError && t.onError(n.err), void(e && e(r, null));
                if (null != n.err) return t.onError && t.onError(n.err), void(e && e(n.err, []));
                var o = n.content.d.map(i.format);
                o = o.sort(function (e, t) {
                    return e.id > t.id ? 1 : e.id < t.id ? -1 : 0
                }), o.length > 0 && ("ASC" == t._sort ? t._current_id = o[o.length - 1].id : t._current_id = o[0].id), t.onData && t.onData(o), e && e(null, o)
            })
        }
    }, {
        "./dataelement": 110
    }],
    119: [function (e, t, r) {
        function n(e, t) {
            this.stream = new i(e, t)
        }
        var i = e("./streaming");
        n.prototype.sort = i.prototype.order = function (e) {
            return this.stream.sort(e), this
        }, n.prototype.size = i.prototype.limit = function (e) {
            return this.stream.size(e), this
        }, n.prototype.onData = function (e) {
            this.stream.onData(e)
        }, n.prototype.onError = function (e) {
            this.stream.onError(e)
        }, n.prototype.next = function (e) {
            var t = this;
            return this.stream.next(function (r, n) {
                null == r && "DESC" == t.stream._sort ? e(r, n.reverse()) : e(r, n)
            }), this
        }, n.prototype.setTimestamp = function (e) {
            return this.stream.setTimestamp(e), this
        }, t.exports = n
    }, {
        "./streaming": 118
    }],
    120: [function (e, t, r) {
        (function (r) {
            function n(e, t, n, s) {
                function u(e) {
                    h._is_connected = !0, h.flush(), i.log("transporter:onopen", e.ts), s && s(e.ts), h._onConnected && h._onConnected()
                }

                function c(e) {
                    h._is_connected = !1, i.log("transporter:onclose", e), h._onClosed && h._onClosed()
                }

                function f(e) {
                    i.log("transporter:onerror", e.message), h._onError && h._onError(e)
                }

                function l(e, t) {
                    var r = {};
                    if (e == h.app_id + "/$sys/error") {
                        var n = t.readUInt16BE(0),
                            i = t.readUInt16BE(2);
                        return void h.recvError(i, n)
                    }
                    try {
                        r = JSON.parse(h.decode(t))
                    } catch (o) {
                        r = JSON.parse(t)
                    }
                    var s = e.indexOf("/"),
                        a = e.lastIndexOf("/"),
                        u = e.substr(s + 1, a - s - 1),
                        c = e.substr(a + 1),
                        f = {
                            path: u,
                            event: c,
                            content: r
                        };
                    h._onMessage(f)
                }
                var h = this;
                this.sid = n, this.queue = [], this.error_callbacks = {}, this.comp_callbacks = {}, this.request_id = 1, this.app_id = t.app_id, this.host = e, this.port = t.port || 443, this.http_port = t.http_port || 443, this.useSSL = !0, this.qos = 0;
                var p = "s" + n || "dammy";
                t.token && (p = "j" + t.token), t.apikey && t.apisecret && (p = "k" + t.apikey + ":" + t.apisecret, this.apikey = {
                    key: t.apikey,
                    secret: t.apisecret
                }), t.hasOwnProperty("qos") && (this.qos = t.qos), t.hasOwnProperty("useSSL") && (this.useSSL = t.useSSL);
                var d = (this.useSSL ? "wss://" : "ws://") + e + ":" + this.port + "/websocket";
                "browser" !== r.title ? (this.port = this.useSSL ? 8883 : 1883, d = (this.useSSL ? "mqtts://" : "mqtt://") + e + ":" + this.port) : o.isAndroidStandardBrowser() && (d = (this.useSSL ? "sockjss://" : "sockjs://") + e + ":" + this.port + "/sockjs"), this.client = a.connect(d, {
                    username: p,
                    clientId: t.clientId,
                    password: t.app_id,
                    protocolId: "MQTT",
                    protocolVersion: 4,
                    reconnectPeriod: 7e3,
                    clean: !1
                }), this.client.onConnectionLost = c, this.client.onMessageArrived = l, this.client.on("connect", u), this.client.on("close", c), this.client.on("error", f), this.client.on("message", l), this._is_connected = !1
            }
            var i = e("./logger"),
                o = e("./ua"),
                s = e("./ajax"),
                a = e("mqtt-for-milkcocoa"),
                u = e("./dataelement");
            t.exports = n, n.prototype.encode = function (e) {
                return e
            }, n.decode = function (e) {
                return decodeURIComponent(e)
            }, n.prototype.decode = function (e) {
                return n.decode(e)
            }, n.prototype.onMessage = function (e) {
                this._onMessage = e
            }, n.prototype.onConnected = function (e) {
                this._onConnected = e
            }, n.prototype.onClosed = function (e) {
                this._onClosed = e
            }, n.prototype.onError = function (e) {
                this._onError = e
            }, n.prototype.auth_call = function (e, t, r) {
                t.cmd = e, t.appid = this.app_id, s.request("POST", this.useSSL, this.host, this.http_port, "/auth", t, {}, r)
            }, n.prototype.call = function (e, t, r) {
                t.api = e, t.appid = this.app_id;
                var n = {};
                this.sid && (n.Authorization = "MLKCCASID " + this.sid), this.apikey && (n.Authorization = "MLKCCAKEY " + this.apikey.key + ":" + this.apikey.secret), s.request("GET", this.useSSL, this.host, this.http_port, "/api", t, n, r)
            }, n.prototype.on = function (e, t) {
                this.send({
                    type: "s",
                    topic: this.create_topic(e, t)
                })
            }, n.prototype.off = function (e, t) {
                this.send({
                    type: "u",
                    topic: this.create_topic(e, t)
                })
            }, n.prototype.send_operation_request = function (e, t, r, n, i) {
                this.request_id++, this.request_id > 12287 && (this.request_id = 1), r.r = this.request_id, this.error_callbacks[this.request_id] = i, this.comp_callbacks[this.request_id] = n, this.send({
                    type: "p",
                    topic: this.create_topic(e, t),
                    msg: JSON.stringify(r),
                    request_id: this.request_id
                })
            }, n.prototype.create_topic = function (e, t) {
                return this.app_id + "/" + e + "/" + t
            }, n.prototype.send = function (e) {
                var t = this;
                t._is_connected ? t.send_op(e) : t.queue.push(e)
            }, n.prototype.flush = function () {
                this.send_next()
            }, n.prototype.send_next = function () {
                var e = this;
                if (e._is_connected) {
                    var t = e.queue.shift();
                    t && (e.send_op(t), e.send_next())
                }
            }, n.prototype.send_op = function (e) {
                var t = this;
                switch (e.type) {
                    case "p":
                        var r = t.encode(e.msg);
                        t.client.publish(e.topic, r, {
                            qos: t.qos,
                            retain: !1
                        }, function (r, n) {
                            t.recvComp(e.request_id, null, u.format(JSON.parse(e.msg)))
                        });
                        break;
                    case "s":
                        t.client.subscribe(e.topic, {
                            qos: 3 == t.qos ? 0 : t.qos
                        }, function () {});
                        break;
                    case "u":
                        t.client.unsubscribe(e.topic)
                }
            }, n.prototype.recvError = function (e, t) {
                function r(e) {
                    switch (e) {
                        case 3:
                            return "permission denied";
                        default:
                            return "unknown error"
                    }
                }
                var n = r(t);
                this.error_callbacks[e] ? (this.error_callbacks[e](n), delete this.error_callbacks[e]) : this._onError && this._onError(n)
            }, n.prototype.recvComp = function (e, t, r) {
                this.comp_callbacks[e] && this.comp_callbacks[e](t, r), delete this.comp_callbacks[e]
            }, n.prototype.disconnect = function (e) {
                this.client.end(e)
            }
        }).call(this, e("_process"))
    }, {
        "./ajax": 108,
        "./dataelement": 110,
        "./logger": 115,
        "./ua": 121,
        _process: 12,
        "mqtt-for-milkcocoa": 63
    }],
    121: [function (e, t, r) {
        t.exports = {
            isAndroidStandardBrowser: function () {
                var e = navigator.userAgent;
                return e.indexOf("Android") >= 0 && e.indexOf("Chrome") < 0 && e.indexOf("Firefox") < 0 ? !0 : e.indexOf("MSIE 10") >= 0
            }
        }
    }, {}]
}, {}, [116]);
