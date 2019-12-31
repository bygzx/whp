!function (t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports["Jin10Price"] = r() : t["Jin10Price"] = r()
}(this, function () {
    return function (t) {
        function r(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {i: i, l: !1, exports: {}};
            return t[i].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        var n = {};
        return r.m = t, r.c = n, r.i = function (t) {
            return t
        }, r.d = function (t, n, i) {
            r.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: i})
        }, r.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t["default"]
            } : function () {
                return t
            };
            return r.d(n, "a", n), n
        }, r.o = function (t, r) {
            return Object.prototype.hasOwnProperty.call(t, r)
        }, r.p = "https://cdn.jin10.com/plugins/price/", r(r.s = "JkW7")
    }({
        "+ddP": function (t, r, n) {
            var i = n("7Adc"),
                o = n("Zlf3");
            t.exports = function (t) {
                return function (r, n) {
                    var u, f, s = String(o(r)),
                        a = i(n),
                        c = s.length;
                    return a < 0 || a >= c ? t ? "" : void 0 : (u = s.charCodeAt(a), u < 55296 || u > 56319 || a + 1 === c || (f = s.charCodeAt(a + 1)) < 56320 || f > 57343 ? t ? s.charAt(a) : u : t ? s.slice(a, a + 2) : f - 56320 + (u - 55296 << 10) + 65536)
                }
            }
        },
        "+rzM": function (t, r) {
            var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        "0T1Q": function (t, r, n) {
            var i = n("Xc+a"),
                o = n("EvWN"),
                u = n("LV4Q"),
                f = n("bDok")("IE_PROTO"),
                s = function () {
                },
                a = function () {
                    var t, r = n("vXbD")("iframe"),
                        i = u.length;
                    for (r.style.display = "none", n("VXgN").appendChild(r), r.src = "javascript:", t = r.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; i--;) delete a["prototype"][u[i]];
                    return a()
                };
            t.exports = Object.create || function (t, r) {
                var n;
                return null !== t ? (s["prototype"] = i(t), n = new s, s["prototype"] = null, n[f] = t) : n = a(), void 0 === r ? n : o(n, r)
            }
        },
        "15oB": function (t, r, n) {
            var i = n("69rs"),
                o = n("FUac"),
                u = n("bDok")("IE_PROTO"),
                f = Object.prototype;
            t.exports = Object.getPrototypeOf || function (t) {
                return t = o(t), i(t, u) ? t[u] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? f : null
            }
        },
        "3rOo": function (t, r) {
            t.exports = function (t, r, n, i) {
                if (!(t instanceof r) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
                return t
            }
        },
        "4GPH": function (t, r, n) {
            var i = n("Ww7I"),
                o = n("8+tx")("iterator"),
                u = n("fAv4");
            t.exports = n("hC6b").getIteratorMethod = function (t) {
                if (void 0 != t) return t[o] || t["@@iterator"] || u[i(t)]
            }
        },
        "4JPz": function (t, r, n) {
            var i = n("emx8");
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
                return "String" == i(t) ? t.split("") : Object(t)
            }
        },
        "51oh": function (t, r, n) {
            "use strict";
            var i = n("+rzM"),
                o = n("hC6b"),
                u = n("Jemx"),
                f = n("iPQn"),
                s = n("8+tx")("species");
            t.exports = function (t) {
                var r = "function" == typeof o[t] ? o[t] : i[t];
                f && r && !r[s] && u.f(r, s, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        },
        "69rs": function (t, r) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, r) {
                return n.call(t, r)
            }
        },
        "6GiX": function (t, r, n) {
            "use strict";

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var o = n("TjAT"),
                u = i(o),
                f = n("j1tY"),
                s = i(f),
                a = n("gi66"),
                c = i(a),
                h = n("6ah1"),
                l = i(h),
                p = l.default.Buffer,
                v = 102400,
                d = n("sFH6"),
                y = function () {
                    function t(r) {
                        (0, s.default)(this, t), null == r && (r = p.alloc(v), this.writeMode = !0), this.buf = r, this.position = 0
                    }

                    return (0, c.default)(t, [{
                        key: "remain", value: function () {
                            return this.buf.length - this.position
                        }
                    }, {
                        key: "read", value: function (t, r) {
                            var n = this.buf[t](this.position);
                            return this.position += r, n
                        }
                    }, {
                        key: "write", value: function (t, r, n) {
                            if (!this.writeMode) throw new Error("不是写入模式");
                            if (this.position + n > this.buf.length) {
                                var i = Math.ceil((this.position + n) / v) * v,
                                    o = p.alloc(i);
                                this.buf.copy(o), this.buf = o
                            }
                            this.buf[t](r, this.position), this.position += n
                        }
                    }, {
                        key: "readInt8", value: function () {
                            return this.read("readInt8", 1)
                        }
                    }, {
                        key: "readInt16BE", value: function () {
                            return this.read("readInt16BE", 2)
                        }
                    }, {
                        key: "readInt16LE", value: function () {
                            return this.read("readInt16LE", 2)
                        }
                    }, {
                        key: "readInt32BE", value: function () {
                            return this.read("readInt32BE", 4)
                        }
                    }, {
                        key: "readInt32LE", value: function () {
                            return this.read("readInt32LE", 4)
                        }
                    }, {
                        key: "readInt64LE", value: function () {
                            var t = this.read("readInt32LE", 4),
                                r = this.read("readInt32LE", 4);
                            return new d(r, t).toNumber(!0)
                        }
                    }, {
                        key: "readUInt64LE", value: function () {
                            var t = this.read("readInt32LE", 4),
                                r = this.read("readInt32LE", 4);
                            return new d(r, t).toNumber(!0)
                        }
                    }, {
                        key: "readUInt8", value: function () {
                            return this.read("readUInt8", 1)
                        }
                    }, {
                        key: "readUInt16BE", value: function () {
                            return this.read("readUInt16BE", 2)
                        }
                    }, {
                        key: "readUInt16LE", value: function () {
                            return this.read("readUInt16LE", 2)
                        }
                    }, {
                        key: "readUInt32BE", value: function () {
                            return this.read("readUInt32BE", 4)
                        }
                    }, {
                        key: "readUInt32LE", value: function () {
                            return this.read("readUInt32LE", 4)
                        }
                    }, {
                        key: "readFloatBE", value: function () {
                            return this.read("readFloatBE", 4)
                        }
                    }, {
                        key: "readFloatLE", value: function () {
                            return this.read("readFloatLE", 4)
                        }
                    }, {
                        key: "readDoubleBE", value: function () {
                            return this.read("readDoubleBE", 8)
                        }
                    }, {
                        key: "readDoubleLE", value: function () {
                            return this.read("readDoubleLE", 8)
                        }
                    }, {
                        key: "writeInt8", value: function (t) {
                            return this.write("writeInt8", t, 1)
                        }
                    }, {
                        key: "writeInt16BE", value: function (t) {
                            return this.write("writeInt16BE", t, 2)
                        }
                    }, {
                        key: "writeInt16LE", value: function (t) {
                            return this.write("writeInt16LE", t, 2)
                        }
                    }, {
                        key: "writeInt32BE", value: function (t) {
                            return this.write("writeInt32BE", t, 4)
                        }
                    }, {
                        key: "writeInt32LE", value: function (t) {
                            return this.write("writeInt32LE", t, 4)
                        }
                    }, {
                        key: "writeInt64LE", value: function (t) {
                            var r = new d(t),
                                n = r.toBuffer(),
                                i = [7, 6, 5, 4, 3, 2, 1, 0],
                                o = !0,
                                f = !1,
                                s = void 0;
                            try {
                                for (var a, c = (0, u.default)(i); !(o = (a = c.next()).done); o = !0) {
                                    var h = a.value;
                                    this.write("writeUInt8", n[h], 1)
                                }
                            } catch (l) {
                                f = !0, s = l
                            } finally {
                                try {
                                    !o && c.return && c.return()
                                } finally {
                                    if (f) throw s
                                }
                            }
                        }
                    }, {
                        key: "writeUInt8", value: function (t) {
                            return this.write("writeUInt8", t, 1)
                        }
                    }, {
                        key: "writeUInt16BE", value: function (t) {
                            return this.write("writeUInt16BE", t, 2)
                        }
                    }, {
                        key: "writeUInt16LE", value: function (t) {
                            return this.write("writeUInt16LE", t, 2)
                        }
                    }, {
                        key: "writeUInt32BE", value: function (t) {
                            return this.write("writeUInt32BE", t, 4)
                        }
                    }, {
                        key: "writeUInt32LE", value: function (t) {
                            return this.write("writeUInt32LE", t, 4)
                        }
                    }, {
                        key: "writeFloatBE", value: function (t) {
                            return this.write("writeFloatBE", t, 4)
                        }
                    }, {
                        key: "writeFloatLE", value: function (t) {
                            return this.write("writeFloatLE", t, 4)
                        }
                    }, {
                        key: "writeDoubleBE", value: function (t) {
                            return this.write("writeDoubleBE", t, 8)
                        }
                    }, {
                        key: "writeDoubleLE", value: function (t) {
                            return this.write("writeDoubleLE", t, 8)
                        }
                    }, {
                        key: "readStringBE", value: function () {
                            var t = this.readUInt16BE(),
                                r = this.buf.toString("utf-8", this.position, this.position + t);
                            return this.position += t, r
                        }
                    }, {
                        key: "readStringLE", value: function () {
                            var t = this.readUInt16LE(),
                                r = this.buf.toString("utf-8", this.position, this.position + t);
                            return this.position += t, r
                        }
                    }, {
                        key: "writeStringBE", value: function (t) {
                            var r = p.from(t),
                                n = r.length;
                            this.writeInt16BE(n), this.buf.write(t, this.position), this.position += n
                        }
                    }, {
                        key: "writeStringLE", value: function (t) {
                            var r = p.from(t),
                                n = r.length;
                            this.writeInt16LE(n), this.buf.write(t, this.position), this.position += n
                        }
                    }, {
                        key: "length", value: function () {
                            return this.buf.length
                        }
                    }, {
                        key: "toBuffer", value: function () {
                            return this.buf.slice(0, this.position)
                        }
                    }, {
                        key: "toPackageBufferBE", value: function () {
                            var t = p.alloc(this.position + 2);
                            return this.buf.copy(t, 2), t.writeInt16BE(t.length, 0), t
                        }
                    }, {
                        key: "toPackageBufferLE", value: function () {
                            var t = p.alloc(this.position + 2);
                            return this.buf.copy(t, 2), t.writeInt16LE(t.length, 0), t
                        }
                    }]), t
                }();
            t.exports = y
        },
        "6Qai": function (t, r) {
            t.exports = function (t, r) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r}
            }
        },
        "6ah1": function (t, r, n) {
            "use strict";
            (function (t) {
                function i() {
                    return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function o(t, r) {
                    if (i() < r) throw new RangeError("Invalid typed array length");
                    return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r), t.__proto__ = u.prototype) : (null === t && (t = new u(r)), t.length = r), t
                }

                function u(t, r, n) {
                    if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, r, n);
                    if ("number" == typeof t) {
                        if ("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string");
                        return c(this, t)
                    }
                    return f(this, t, r, n)
                }

                function f(t, r, n, i) {
                    if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? p(t, r, n, i) : "string" == typeof r ? h(t, r, n) : v(t, r)
                }

                function s(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function a(t, r, n, i) {
                    return s(r), r <= 0 ? o(t, r) : void 0 !== n ? "string" == typeof i ? o(t, r).fill(n, i) : o(t, r).fill(n) : o(t, r)
                }

                function c(t, r) {
                    if (s(r), t = o(t, r < 0 ? 0 : 0 | d(r)), !u.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < r; ++n) t[n] = 0;
                    return t
                }

                function h(t, r, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var i = 0 | g(r, n);
                    t = o(t, i);
                    var f = t.write(r, n);
                    return f !== i && (t = t.slice(0, f)), t
                }

                function l(t, r) {
                    var n = r.length < 0 ? 0 : 0 | d(r.length);
                    t = o(t, n);
                    for (var i = 0; i < n; i += 1) t[i] = 255 & r[i];
                    return t
                }

                function p(t, r, n, i) {
                    if (r.byteLength, n < 0 || r.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (r.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                    return r = void 0 === n && void 0 === i ? new Uint8Array(r) : void 0 === i ? new Uint8Array(r, n) : new Uint8Array(r, n, i), u.TYPED_ARRAY_SUPPORT ? (t = r, t.__proto__ = u.prototype) : t = l(t, r), t
                }

                function v(t, r) {
                    if (u.isBuffer(r)) {
                        var n = 0 | d(r.length);
                        return t = o(t, n), 0 === t.length ? t : (r.copy(t, 0, 0, n), t)
                    }
                    if (r) {
                        if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || q(r.length) ? o(t, 0) : l(t, r);
                        if ("Buffer" === r.type && $(r.data)) return l(t, r.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }

                function d(t) {
                    if (t >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | t
                }

                function y(t) {
                    return +t != t && (t = 0), u.alloc(+t)
                }

                function g(t, r) {
                    if (u.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n) return 0;
                    for (var i = !1; ;) switch (r) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return X(t).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return H(t).length;
                        default:
                            if (i) return X(t).length;
                            r = ("" + r).toLowerCase(), i = !0
                    }
                }

                function w(t, r, n) {
                    var i = !1;
                    if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if (n >>>= 0, r >>>= 0, n <= r) return "";
                    for (t || (t = "utf8"); ;) switch (t) {
                        case "hex":
                            return M(this, r, n);
                        case "utf8":
                        case "utf-8":
                            return S(this, r, n);
                        case "ascii":
                            return B(this, r, n);
                        case "latin1":
                        case "binary":
                            return U(this, r, n);
                        case "base64":
                            return P(this, r, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return R(this, r, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + t);
                            t = (t + "").toLowerCase(), i = !0
                    }
                }

                function E(t, r, n) {
                    var i = t[r];
                    t[r] = t[n], t[n] = i
                }

                function m(t, r, n, i, o) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (o) return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!o) return -1;
                        n = 0
                    }
                    if ("string" == typeof r && (r = u.from(r, i)), u.isBuffer(r)) return 0 === r.length ? -1 : b(t, r, n, i, o);
                    if ("number" == typeof r) return r &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, r, n) : Uint8Array.prototype.lastIndexOf.call(t, r, n) : b(t, [r], n, i, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function b(t, r, n, i, o) {
                    function u(t, r) {
                        return 1 === f ? t[r] : t.readUInt16BE(r * f)
                    }

                    var f = 1,
                        s = t.length,
                        a = r.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (t.length < 2 || r.length < 2) return -1;
                        f = 2, s /= 2, a /= 2, n /= 2
                    }
                    var c;
                    if (o) {
                        var h = -1;
                        for (c = n; c < s; c++)
                            if (u(t, c) === u(r, -1 === h ? 0 : c - h)) {
                                if (-1 === h && (h = c), c - h + 1 === a) return h * f
                            } else -1 !== h && (c -= c - h), h = -1
                    } else
                        for (n + a > s && (n = s - a), c = n; c >= 0; c--) {
                            for (var l = !0, p = 0; p < a; p++)
                                if (u(t, c + p) !== u(r, p)) {
                                    l = !1;
                                    break
                                }
                            if (l) return c
                        }
                    return -1
                }

                function _(t, r, n, i) {
                    n = Number(n) || 0;
                    var o = t.length - n;
                    i ? (i = Number(i)) > o && (i = o) : i = o;
                    var u = r.length;
                    if (u % 2 != 0) throw new TypeError("Invalid hex string");
                    i > u / 2 && (i = u / 2);
                    for (var f = 0; f < i; ++f) {
                        var s = parseInt(r.substr(2 * f, 2), 16);
                        if (isNaN(s)) return f;
                        t[n + f] = s
                    }
                    return f
                }

                function x(t, r, n, i) {
                    return J(X(r, t.length - n), t, n, i)
                }

                function A(t, r, n, i) {
                    return J(G(r), t, n, i)
                }

                function I(t, r, n, i) {
                    return A(t, r, n, i)
                }

                function L(t, r, n, i) {
                    return J(H(r), t, n, i)
                }

                function T(t, r, n, i) {
                    return J(Q(r, t.length - n), t, n, i)
                }

                function P(t, r, n) {
                    return 0 === r && n === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(r, n))
                }

                function S(t, r, n) {
                    n = Math.min(t.length, n);
                    for (var i = [], o = r; o < n;) {
                        var u = t[o],
                            f = null,
                            s = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (o + s <= n) {
                            var a, c, h, l;
                            switch (s) {
                                case 1:
                                    u < 128 && (f = u);
                                    break;
                                case 2:
                                    a = t[o + 1], 128 == (192 & a) && (l = (31 & u) << 6 | 63 & a) > 127 && (f = l);
                                    break;
                                case 3:
                                    a = t[o + 1], c = t[o + 2], 128 == (192 & a) && 128 == (192 & c) && (l = (15 & u) << 12 | (63 & a) << 6 | 63 & c) > 2047 && (l < 55296 || l > 57343) && (f = l);
                                    break;
                                case 4:
                                    a = t[o + 1], c = t[o + 2], h = t[o + 3], 128 == (192 & a) && 128 == (192 & c) && 128 == (192 & h) && (l = (15 & u) << 18 | (63 & a) << 12 | (63 & c) << 6 | 63 & h) > 65535 && l < 1114112 && (f = l)
                            }
                        }
                        null === f ? (f = 65533, s = 1) : f > 65535 && (f -= 65536, i.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), i.push(f), o += s
                    }
                    return k(i)
                }

                function k(t) {
                    var r = t.length;
                    if (r <= tt) return String.fromCharCode.apply(String, t);
                    for (var n = "", i = 0; i < r;) n += String.fromCharCode.apply(String, t.slice(i, i += tt));
                    return n
                }

                function B(t, r, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var o = r; o < n; ++o) i += String.fromCharCode(127 & t[o]);
                    return i
                }

                function U(t, r, n) {
                    var i = "";
                    n = Math.min(t.length, n);
                    for (var o = r; o < n; ++o) i += String.fromCharCode(t[o]);
                    return i
                }

                function M(t, r, n) {
                    var i = t.length;
                    (!r || r < 0) && (r = 0), (!n || n < 0 || n > i) && (n = i);
                    for (var o = "", u = r; u < n; ++u) o += W(t[u]);
                    return o
                }

                function R(t, r, n) {
                    for (var i = t.slice(r, n), o = "", u = 0; u < i.length; u += 2) o += String.fromCharCode(i[u] + 256 * i[u + 1]);
                    return o
                }

                function C(t, r, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + r > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function O(t, r, n, i, o, f) {
                    if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (r > o || r < f) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > t.length) throw new RangeError("Index out of range")
                }

                function j(t, r, n, i) {
                    r < 0 && (r = 65535 + r + 1);
                    for (var o = 0, u = Math.min(t.length - n, 2); o < u; ++o) t[n + o] = (r & 255 << 8 * (i ? o : 1 - o)) >>> 8 * (i ? o : 1 - o)
                }

                function D(t, r, n, i) {
                    r < 0 && (r = 4294967295 + r + 1);
                    for (var o = 0, u = Math.min(t.length - n, 4); o < u; ++o) t[n + o] = r >>> 8 * (i ? o : 3 - o) & 255
                }

                function Y(t, r, n, i, o, u) {
                    if (n + i > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function N(t, r, n, i, o) {
                    return o || Y(t, r, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(t, r, n, i, 23, 4), n + 4
                }

                function F(t, r, n, i, o) {
                    return o || Y(t, r, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(t, r, n, i, 52, 8), n + 8
                }

                function z(t) {
                    if (t = V(t).replace(et, ""), t.length < 2) return "";
                    for (; t.length % 4 != 0;) t += "=";
                    return t
                }

                function V(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }

                function W(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function X(t, r) {
                    r = r || 1 / 0;
                    for (var n, i = t.length, o = null, u = [], f = 0; f < i; ++f) {
                        if ((n = t.charCodeAt(f)) > 55295 && n < 57344) {
                            if (!o) {
                                if (n > 56319) {
                                    (r -= 3) > -1 && u.push(239, 191, 189);
                                    continue
                                }
                                if (f + 1 === i) {
                                    (r -= 3) > -1 && u.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                (r -= 3) > -1 && u.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && (r -= 3) > -1 && u.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if ((r -= 1) < 0) break;
                            u.push(n)
                        } else if (n < 2048) {
                            if ((r -= 2) < 0) break;
                            u.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((r -= 3) < 0) break;
                            u.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((r -= 4) < 0) break;
                            u.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return u
                }

                function G(t) {
                    for (var r = [], n = 0; n < t.length; ++n) r.push(255 & t.charCodeAt(n));
                    return r
                }

                function Q(t, r) {
                    for (var n, i, o, u = [], f = 0; f < t.length && !((r -= 2) < 0); ++f) n = t.charCodeAt(f), i = n >> 8, o = n % 256, u.push(o), u.push(i);
                    return u
                }

                function H(t) {
                    return Z.toByteArray(z(t))
                }

                function J(t, r, n, i) {
                    for (var o = 0; o < i && !(o + n >= r.length || o >= t.length); ++o) r[o + n] = t[o];
                    return o
                }

                function q(t) {
                    return t !== t
                }

                /*!
                 * The buffer module from node.js, for the browser.
                 *
                 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                 * @license  MIT
                 */
                var Z = n("NN5F"),
                    K = n("6o1o"),
                    $ = n("JYya");
                r.Buffer = u, r.SlowBuffer = y, r.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype, foo: function () {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(), r.kMaxLength = i(), u.poolSize = 8192, u._augment = function (t) {
                    return t.__proto__ = u.prototype, t
                }, u.from = function (t, r, n) {
                    return f(null, t, r, n)
                }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                    value: null,
                    configurable: !0
                })), u.alloc = function (t, r, n) {
                    return a(null, t, r, n)
                }, u.allocUnsafe = function (t) {
                    return c(null, t)
                }, u.allocUnsafeSlow = function (t) {
                    return c(null, t)
                }, u.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, u.compare = function (t, r) {
                    if (!u.isBuffer(t) || !u.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
                    if (t === r) return 0;
                    for (var n = t.length, i = r.length, o = 0, f = Math.min(n, i); o < f; ++o)
                        if (t[o] !== r[o]) {
                            n = t[o], i = r[o];
                            break
                        }
                    return n < i ? -1 : i < n ? 1 : 0
                }, u.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, u.concat = function (t, r) {
                    if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return u.alloc(0);
                    var n;
                    if (void 0 === r)
                        for (r = 0, n = 0; n < t.length; ++n) r += t[n].length;
                    var i = u.allocUnsafe(r),
                        o = 0;
                    for (n = 0; n < t.length; ++n) {
                        var f = t[n];
                        if (!u.isBuffer(f)) throw new TypeError('"list" argument must be an Array of Buffers');
                        f.copy(i, o), o += f.length
                    }
                    return i
                }, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var r = 0; r < t; r += 2) E(this, r, r + 1);
                    return this
                }, u.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var r = 0; r < t; r += 4) E(this, r, r + 3), E(this, r + 1, r + 2);
                    return this
                }, u.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var r = 0; r < t; r += 8) E(this, r, r + 7), E(this, r + 1, r + 6), E(this, r + 2, r + 5), E(this, r + 3, r + 4);
                    return this
                }, u.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : w.apply(this, arguments)
                }, u.prototype.equals = function (t) {
                    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === u.compare(this, t)
                }, u.prototype.inspect = function () {
                    var t = "",
                        n = r.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                }, u.prototype.compare = function (t, r, n, i, o) {
                    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === r && (r = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), r < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
                    if (i >= o && r >= n) return 0;
                    if (i >= o) return -1;
                    if (r >= n) return 1;
                    if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
                    for (var f = o - i, s = n - r, a = Math.min(f, s), c = this.slice(i, o), h = t.slice(r, n), l = 0; l < a; ++l)
                        if (c[l] !== h[l]) {
                            f = c[l], s = h[l];
                            break
                        }
                    return f < s ? -1 : s < f ? 1 : 0
                }, u.prototype.includes = function (t, r, n) {
                    return -1 !== this.indexOf(t, r, n)
                }, u.prototype.indexOf = function (t, r, n) {
                    return m(this, t, r, n, !0)
                }, u.prototype.lastIndexOf = function (t, r, n) {
                    return m(this, t, r, n, !1)
                }, u.prototype.write = function (t, r, n, i) {
                    if (void 0 === r) i = "utf8", n = this.length, r = 0;
                    else if (void 0 === n && "string" == typeof r) i = r, n = this.length, r = 0;
                    else {
                        if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        r |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                    }
                    var o = this.length - r;
                    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var u = !1; ;) switch (i) {
                        case "hex":
                            return _(this, t, r, n);
                        case "utf8":
                        case "utf-8":
                            return x(this, t, r, n);
                        case "ascii":
                            return A(this, t, r, n);
                        case "latin1":
                        case "binary":
                            return I(this, t, r, n);
                        case "base64":
                            return L(this, t, r, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return T(this, t, r, n);
                        default:
                            if (u) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), u = !0
                    }
                }, u.prototype.toJSON = function () {
                    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                };
                var tt = 4096;
                u.prototype.slice = function (t, r) {
                    var n = this.length;
                    t = ~~t, r = void 0 === r ? n : ~~r, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), r < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), r < t && (r = t);
                    var i;
                    if (u.TYPED_ARRAY_SUPPORT) i = this.subarray(t, r), i.__proto__ = u.prototype;
                    else {
                        var o = r - t;
                        i = new u(o, void 0);
                        for (var f = 0; f < o; ++f) i[f] = this[f + t]
                    }
                    return i
                }, u.prototype.readUIntLE = function (t, r, n) {
                    t |= 0, r |= 0, n || C(t, r, this.length);
                    for (var i = this[t], o = 1, u = 0; ++u < r && (o *= 256);) i += this[t + u] * o;
                    return i
                }, u.prototype.readUIntBE = function (t, r, n) {
                    t |= 0, r |= 0, n || C(t, r, this.length);
                    for (var i = this[t + --r], o = 1; r > 0 && (o *= 256);) i += this[t + --r] * o;
                    return i
                }, u.prototype.readUInt8 = function (t, r) {
                    return r || C(t, 1, this.length), this[t]
                }, u.prototype.readUInt16LE = function (t, r) {
                    return r || C(t, 2, this.length), this[t] | this[t + 1] << 8
                }, u.prototype.readUInt16BE = function (t, r) {
                    return r || C(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, u.prototype.readUInt32LE = function (t, r) {
                    return r || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, u.prototype.readUInt32BE = function (t, r) {
                    return r || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, u.prototype.readIntLE = function (t, r, n) {
                    t |= 0, r |= 0, n || C(t, r, this.length);
                    for (var i = this[t], o = 1, u = 0; ++u < r && (o *= 256);) i += this[t + u] * o;
                    return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i
                }, u.prototype.readIntBE = function (t, r, n) {
                    t |= 0, r |= 0, n || C(t, r, this.length);
                    for (var i = r, o = 1, u = this[t + --i]; i > 0 && (o *= 256);) u += this[t + --i] * o;
                    return o *= 128, u >= o && (u -= Math.pow(2, 8 * r)), u
                }, u.prototype.readInt8 = function (t, r) {
                    return r || C(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, u.prototype.readInt16LE = function (t, r) {
                    r || C(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt16BE = function (t, r) {
                    r || C(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt32LE = function (t, r) {
                    return r || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, u.prototype.readInt32BE = function (t, r) {
                    return r || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, u.prototype.readFloatLE = function (t, r) {
                    return r || C(t, 4, this.length), K.read(this, t, !0, 23, 4)
                }, u.prototype.readFloatBE = function (t, r) {
                    return r || C(t, 4, this.length), K.read(this, t, !1, 23, 4)
                }, u.prototype.readDoubleLE = function (t, r) {
                    return r || C(t, 8, this.length), K.read(this, t, !0, 52, 8)
                }, u.prototype.readDoubleBE = function (t, r) {
                    return r || C(t, 8, this.length), K.read(this, t, !1, 52, 8)
                }, u.prototype.writeUIntLE = function (t, r, n, i) {
                    if (t = +t, r |= 0, n |= 0, !i) {
                        O(this, t, r, n, Math.pow(2, 8 * n) - 1, 0)
                    }
                    var o = 1,
                        u = 0;
                    for (this[r] = 255 & t; ++u < n && (o *= 256);) this[r + u] = t / o & 255;
                    return r + n
                }, u.prototype.writeUIntBE = function (t, r, n, i) {
                    if (t = +t, r |= 0, n |= 0, !i) {
                        O(this, t, r, n, Math.pow(2, 8 * n) - 1, 0)
                    }
                    var o = n - 1,
                        u = 1;
                    for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);) this[r + o] = t / u & 255;
                    return r + n
                }, u.prototype.writeUInt8 = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[r] = 255 & t, r + 1
                }, u.prototype.writeUInt16LE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : j(this, t, r, !0), r + 2
                }, u.prototype.writeUInt16BE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : j(this, t, r, !1), r + 2
                }, u.prototype.writeUInt32LE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : D(this, t, r, !0), r + 4
                }, u.prototype.writeUInt32BE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : D(this, t, r, !1), r + 4
                }, u.prototype.writeIntLE = function (t, r, n, i) {
                    if (t = +t, r |= 0, !i) {
                        var o = Math.pow(2, 8 * n - 1);
                        O(this, t, r, n, o - 1, -o)
                    }
                    var u = 0,
                        f = 1,
                        s = 0;
                    for (this[r] = 255 & t; ++u < n && (f *= 256);) t < 0 && 0 === s && 0 !== this[r + u - 1] && (s = 1), this[r + u] = (t / f >> 0) - s & 255;
                    return r + n
                }, u.prototype.writeIntBE = function (t, r, n, i) {
                    if (t = +t, r |= 0, !i) {
                        var o = Math.pow(2, 8 * n - 1);
                        O(this, t, r, n, o - 1, -o)
                    }
                    var u = n - 1,
                        f = 1,
                        s = 0;
                    for (this[r + u] = 255 & t; --u >= 0 && (f *= 256);) t < 0 && 0 === s && 0 !== this[r + u + 1] && (s = 1), this[r + u] = (t / f >> 0) - s & 255;
                    return r + n
                }, u.prototype.writeInt8 = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
                }, u.prototype.writeInt16LE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8) : j(this, t, r, !0), r + 2
                }, u.prototype.writeInt16BE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, this[r + 1] = 255 & t) : j(this, t, r, !1), r + 2
                }, u.prototype.writeInt32LE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : D(this, t, r, !0), r + 4
                }, u.prototype.writeInt32BE = function (t, r, n) {
                    return t = +t, r |= 0, n || O(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : D(this, t, r, !1), r + 4
                }, u.prototype.writeFloatLE = function (t, r, n) {
                    return N(this, t, r, !0, n)
                }, u.prototype.writeFloatBE = function (t, r, n) {
                    return N(this, t, r, !1, n)
                }, u.prototype.writeDoubleLE = function (t, r, n) {
                    return F(this, t, r, !0, n)
                }, u.prototype.writeDoubleBE = function (t, r, n) {
                    return F(this, t, r, !1, n)
                }, u.prototype.copy = function (t, r, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), r >= t.length && (r = t.length), r || (r = 0), i > 0 && i < n && (i = n), i === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (r < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), t.length - r < i - n && (i = t.length - r + n);
                    var o, f = i - n;
                    if (this === t && n < r && r < i)
                        for (o = f - 1; o >= 0; --o) t[o + r] = this[o + n];
                    else if (f < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                        for (o = 0; o < f; ++o) t[o + r] = this[o + n];
                    else Uint8Array.prototype.set.call(t, this.subarray(n, n + f), r);
                    return f
                }, u.prototype.fill = function (t, r, n, i) {
                    if ("string" == typeof t) {
                        if ("string" == typeof r ? (i = r, r = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === t.length) {
                            var o = t.charCodeAt(0);
                            o < 256 && (t = o)
                        }
                        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !u.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                    } else "number" == typeof t && (t &= 255);
                    if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");
                    if (n <= r) return this;
                    r >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
                    var f;
                    if ("number" == typeof t)
                        for (f = r; f < n; ++f) this[f] = t;
                    else {
                        var s = u.isBuffer(t) ? t : X(new u(t, i).toString()),
                            a = s.length;
                        for (f = 0; f < n - r; ++f) this[f + r] = s[f % a]
                    }
                    return this
                };
                var et = /[^+\/0-9A-Za-z-_]/g
            }).call(r, n("t6Gz"))
        },
        "6o1o": function (t, r) {
            r.read = function (t, r, n, i, o) {
                var e, u, f = 8 * o - i - 1,
                    s = (1 << f) - 1,
                    a = s >> 1,
                    c = -7,
                    h = n ? o - 1 : 0,
                    l = n ? -1 : 1,
                    p = t[r + h];
                for (h += l, e = p & (1 << -c) - 1, p >>= -c, c += f; c > 0; e = 256 * e + t[r + h], h += l, c -= 8) ;
                for (u = e & (1 << -c) - 1, e >>= -c, c += i; c > 0; u = 256 * u + t[r + h], h += l, c -= 8) ;
                if (0 === e) e = 1 - a;
                else {
                    if (e === s) return u ? NaN : 1 / 0 * (p ? -1 : 1);
                    u += Math.pow(2, i), e -= a
                }
                return (p ? -1 : 1) * u * Math.pow(2, e - i)
            }, r.write = function (t, r, n, i, o, u) {
                var e, f, s, a = 8 * u - o - 1,
                    c = (1 << a) - 1,
                    h = c >> 1,
                    l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = i ? 0 : u - 1,
                    v = i ? 1 : -1,
                    d = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
                for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f = isNaN(r) ? 1 : 0, e = c) : (e = Math.floor(Math.log(r) / Math.LN2), r * (s = Math.pow(2, -e)) < 1 && (e--, s *= 2), r += e + h >= 1 ? l / s : l * Math.pow(2, 1 - h), r * s >= 2 && (e++, s /= 2), e + h >= c ? (f = 0, e = c) : e + h >= 1 ? (f = (r * s - 1) * Math.pow(2, o), e += h) : (f = r * Math.pow(2, h - 1) * Math.pow(2, o), e = 0)); o >= 8; t[n + p] = 255 & f, p += v, f /= 256, o -= 8) ;
                for (e = e << o | f, a += o; a > 0; t[n + p] = 255 & e, p += v, e /= 256, a -= 8) ;
                t[n + p - v] |= 128 * d
            }
        },
        "7Adc": function (t, r) {
            var n = Math.ceil,
                i = Math.floor;
            t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
            }
        },
        "8+tx": function (t, r, n) {
            var i = n("Tuy/")("wks"),
                o = n("WXzC"),
                u = n("+rzM").Symbol,
                f = "function" == typeof u;
            (t.exports = function (t) {
                return i[t] || (i[t] = f && u[t] || (f ? u : o)("Symbol." + t))
            }).store = i
        },
        "8Vex": function (t, r, n) {
            var i = n("cGkp");
            i(i.S + i.F * !n("iPQn"), "Object", {defineProperty: n("Jemx").f})
        },
        "AEfT": function (t, r) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        },
        "Bxrf": function (t, r, n) {
            var i = n("AEfT");
            t.exports = function (t, r, n) {
                if (i(t), void 0 === r) return t;
                switch (n) {
                    case 1:
                        return function (n) {
                            return t.call(r, n)
                        };
                    case 2:
                        return function (n, i) {
                            return t.call(r, n, i)
                        };
                    case 3:
                        return function (n, i, o) {
                            return t.call(r, n, i, o)
                        }
                }
                return function () {
                    return t.apply(r, arguments)
                }
            }
        },
        "Elz3": function (t, r, n) {
            "use strict";

            function i(t) {
                var r, n;
                this.promise = new t(function (t, i) {
                    if (void 0 !== r || void 0 !== n) throw TypeError("Bad Promise constructor");
                    r = t, n = i
                }), this.resolve = o(r), this.reject = o(n)
            }

            var o = n("AEfT");
            t.exports.f = function (t) {
                return new i(t)
            }
        },
        "EvWN": function (t, r, n) {
            var i = n("Jemx"),
                o = n("Xc+a"),
                u = n("dy8G");
            t.exports = n("iPQn") ? Object.defineProperties : function (t, r) {
                o(t);
                for (var n, f = u(r), s = f.length, a = 0; s > a;) i.f(t, n = f[a++], r[n]);
                return t
            }
        },
        "FUac": function (t, r, n) {
            var i = n("Zlf3");
            t.exports = function (t) {
                return Object(i(t))
            }
        },
        "FZMV": function (t, r, n) {
            var i = n("7Adc"),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(i(t), 9007199254740991) : 0
            }
        },
        "HUrH": function (t, r, n) {
            var i = n("fAv4"),
                o = n("8+tx")("iterator"),
                u = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (i.Array === t || u[o] === t)
            }
        },
        "JYya": function (t, r) {
            var n = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == n.call(t)
            }
        },
        "Jemx": function (t, r, n) {
            var i = n("Xc+a"),
                o = n("aLLD"),
                u = n("db+C"),
                f = Object.defineProperty;
            r.f = n("iPQn") ? Object.defineProperty : function (t, r, n) {
                if (i(t), r = u(r, !0), i(n), o) try {
                    return f(t, r, n)
                } catch (e) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[r] = n.value), t
            }
        },
        "JkW7": function (t, r, n) {
            "use strict";
            (function (r) {
                function i(t) {
                    return t && t.__esModule ? t : {default: t}
                }

                var o = n("cDhy"),
                    u = i(o),
                    f = n("j1tY"),
                    s = i(f),
                    a = n("gi66"),
                    c = i(a),
                    h = n("Ucwc"),
                    l = i(h),
                    p = n("6GiX"),
                    v = ["NYMEXCL1.Volume", "COMEXGC1.Volume", "COMEXHG1.Volume", "NYMEXNG1.Volume"],
                    d = function (t) {
                        return l.default.divide(t, 1e6)
                    },
                    y = function () {
                        function t(r) {
                            (0, s.default)(this, t), r = r || {}, this.isSupport = void 0 !== window.WebSocket, this.socket = null, this.priceConfig = r.priceConfig || {}, this.callback = r.callback || new Function, this.heartbeatTimer = null, this.isGetVolume = !1, this.reConnectCount = 0, this.connectTimeout = 500, this.failCount = 1, this.historyDatas = []
                        }

                        return (0, c.default)(t, [{
                            key: "connect", value: function () {
                                var t = this;
                                return this.socket = new WebSocket("wss://b-price.jin10.com/"), this.socket.binaryType = "arraybuffer", new u.default(function (r, n) {
                                    t.socket.addEventListener("open", function (e) {
                                        console.log("connected"), t._sendHeartbeat(), r()
                                    }), t.socket.addEventListener("error", function (e) {
                                        console.log("error")
                                    }), t.socket.addEventListener("close", function (e) {
                                        console.log("close"), t.socket = null, t.reconnect(), n()
                                    })
                                })
                            }
                        }, {
                            key: "reconnect", value: function () {
                                var t = this;
                                this.reConnectCount >= 6 * this.failCount && (this.failCount = 2, this.connectTimeout >= 3e4 ? this.connectTimeout = 3e4 : this.connectTimeout = this.connectTimeout * this.failCount), this.reConnectCount++, setTimeout(function () {
                                    setTimeout(function () {
                                        t.destory(), t.getPrice()
                                    }, 1)
                                }, this.connectTimeout)
                            }
                        }, {
                            key: "getPrice", value: function () {
                                var t = this;
                                this.socket || this.connect().then(function () {
                                    t.switchCode()
                                }), this.socket.addEventListener("message", function (e) {
                                    var n = null,
                                        i = new Uint8Array(e.data),
                                        o = new p(r.from(i)),
                                        u = o.readUInt16LE(),
                                        f = "";
                                    console.log(e.data);
                                    console.log(i);
                                    if (10005 === u) {
                                        var s = o.readStringLE(),
                                            a = 1e3 * o.readUInt32LE(),
                                            c = d(o.readInt64LE()),
                                            h = d(o.readInt64LE());
                                        f = "price", n = {code: s, curPrice: c, hstClose: h, time: a}
                                    } else if (10020 === u) {
                                        var l = o.readStringLE(),
                                            v = 1e3 * o.readUInt32LE(),
                                            y = o.readUInt32LE();
                                        f = "volume", n = {code: l, volume: y, time: v}
                                    } else if (10021 === u) {
                                        var g = o.readStringLE(),
                                            w = o.readUInt16LE(),
                                            E = [];
                                        f = "first_volume_data";
                                        for (var m = 0; m < w; m++) {
                                            var b = 1e3 * o.readUInt32LE(),
                                                _ = o.readUInt32LE();
                                            E.push({volume: _, time: b})
                                        }
                                        n = {code: g, datas: E}
                                    } else if (1100 === u) {
                                        var x = o.readStringLE();
                                        console.log("news:" + x), f = "letsgo", n = {"letsgo": x}
                                    } else if (1200 === u) {
                                        var A = o.readUInt32LE();
                                        f = "time", n = {time: A}
                                    }
                                    n && t.callback(n, f)
                                })
                            }
                        }, {
                            key: "switchCode", value: function (t, r) {
                                if (!this.socket) return !1;
                                if (void 0 !== r && (this.isGetVolume = r), t ? this.priceConfig.code = t : t = this.priceConfig.code, !t || !t.length) return !1;
                                var n = new p;
                                n.writeUInt16LE(10003), t = Array.isArray(t) ? t : [t];
                                var i = this.priceConfig.frequency || 1e3,
                                    o = t.length;
                                n.writeUInt32LE(i), n.writeUInt16LE(o), t.forEach(function (t) {
                                    n.writeStringLE(t)
                                }), this.send(n.toBuffer());
                                var u = [];
                                r && (u = v);
                                var f = new p;
                                f.writeUInt16LE(10019), f.writeUInt16LE(u.length), u.forEach(function (t) {
                                    f.writeStringLE(t)
                                }), this.send(f.toBuffer())
                            }
                        }, {
                            key: "getHistory", value: function (t) {
                                var n = this,
                                    i = t.code,
                                    o = null,
                                    f = new p;
                                return f.writeUInt16LE(3002), f.writeStringLE(i), f = f.toBuffer(), this.socket ? this.send(f) : this.connect().then(function () {
                                    n.send(f)
                                }), new u.default(function (t, u) {
                                    o = setTimeout(function () {
                                        u()
                                    }, 1e4);
                                    var f = function s(e) {
                                        var u = [],
                                            f = new Uint8Array(e.data),
                                            a = new p(r.from(f)),
                                            c = a.readUInt16LE();
                                        if (o && clearTimeout(o), 3002 === c) {
                                            if (a.readStringLE() === i)
                                                for (var h = -1 !== i.indexOf(".Volume"), l = a.readUInt32LE(), v = void 0, y = void 0, g = void 0, w = 0; w < l; w++) y = a.readUInt32LE(), g = a.readUInt64LE(), v = [1e3 * y, h ? g : d(g)], u.push(v)
                                        }
                                        t(u), n.socket.removeEventListener("message", s)
                                    };
                                    n.socket.addEventListener("message", f)
                                })
                            }
                        }, {
                            key: "send", value: function (t) {
                                if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return !1;
                                this.socket.send(t)
                            }
                        }, {
                            key: "destory", value: function () {
                                this.socket = null, clearInterval(this.heartbeatTimer)
                            }
                        }, {
                            key: "_sendHeartbeat", value: function () {
                                var t = this;
                                if (!this.socket) return !1;
                                this.heartbeatTimer = setInterval(function () {
                                    t.send("")
                                }, 1e4)
                            }
                        }], [{
                            key: "NP", value: function () {
                                return l.default
                            }
                        }]), t
                    }();
                t.exports = y
            }).call(r, n("6ah1").Buffer)
        },
        "LV4Q": function (t, r) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        "LX47": function (t, r, n) {
            var i = n("Xc+a"),
                o = n("4GPH");
            t.exports = n("hC6b").getIterator = function (t) {
                var r = o(t);
                if ("function" != typeof r) throw TypeError(t + " is not iterable!");
                return i(r.call(t))
            }
        },
        "Llxb": function (t, r, n) {
            var i = n("Xc+a"),
                o = n("AEfT"),
                u = n("8+tx")("species");
            t.exports = function (t, r) {
                var n, f = i(t).constructor;
                return void 0 === f || void 0 == (n = i(f)[u]) ? r : o(n)
            }
        },
        "NJe3": function (t, r, n) {
            var i = n("7Adc"),
                o = Math.max,
                u = Math.min;
            t.exports = function (t, r) {
                return t = i(t), t < 0 ? o(t + r, 0) : u(t, r)
            }
        },
        "NN5F": function (t, r, n) {
            "use strict";

            function i(t) {
                var r = t.length;
                if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = r), [n, n === r ? 0 : 4 - n % 4]
            }

            function o(t) {
                var r = i(t),
                    n = r[0],
                    o = r[1];
                return 3 * (n + o) / 4 - o
            }

            function u(t, r, n) {
                return 3 * (r + n) / 4 - n
            }

            function f(t) {
                for (var r, n = i(t), o = n[0], f = n[1], s = new p(u(t, o, f)), a = 0, c = f > 0 ? o - 4 : o, h = 0; h < c; h += 4) r = l[t.charCodeAt(h)] << 18 | l[t.charCodeAt(h + 1)] << 12 | l[t.charCodeAt(h + 2)] << 6 | l[t.charCodeAt(h + 3)], s[a++] = r >> 16 & 255, s[a++] = r >> 8 & 255, s[a++] = 255 & r;
                return 2 === f && (r = l[t.charCodeAt(h)] << 2 | l[t.charCodeAt(h + 1)] >> 4, s[a++] = 255 & r), 1 === f && (r = l[t.charCodeAt(h)] << 10 | l[t.charCodeAt(h + 1)] << 4 | l[t.charCodeAt(h + 2)] >> 2, s[a++] = r >> 8 & 255, s[a++] = 255 & r), s
            }

            function s(t) {
                return h[t >> 18 & 63] + h[t >> 12 & 63] + h[t >> 6 & 63] + h[63 & t]
            }

            function a(t, r, n) {
                for (var i, o = [], u = r; u < n; u += 3) i = (t[u] << 16 & 16711680) + (t[u + 1] << 8 & 65280) + (255 & t[u + 2]), o.push(s(i));
                return o.join("")
            }

            function c(t) {
                for (var r, n = t.length, i = n % 3, o = [], u = 0, f = n - i; u < f; u += 16383) o.push(a(t, u, u + 16383 > f ? f : u + 16383));
                return 1 === i ? (r = t[n - 1], o.push(h[r >> 2] + h[r << 4 & 63] + "==")) : 2 === i && (r = (t[n - 2] << 8) + t[n - 1], o.push(h[r >> 10] + h[r >> 4 & 63] + h[r << 2 & 63] + "=")), o.join("")
            }

            r.byteLength = o, r.toByteArray = f, r.fromByteArray = c;
            for (var h = [], l = [], p = "undefined" != typeof Uint8Array ? Uint8Array : Array, v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, y = v.length; d < y; ++d) h[d] = v[d], l[v.charCodeAt(d)] = d;
            l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
        },
        "Ojg1": function (t, r, n) {
            t.exports = n("QoAr")
        },
        "PwWu": function (t, r, n) {
            n("c+0Q"), n("wAMq"), t.exports = n("LX47")
        },
        "Q2YV": function (t, r, n) {
            t.exports = {"default": n("W3ma"), __esModule: !0}
        },
        "QoAr": function (t, r, n) {
            var i = n("Jemx"),
                o = n("6Qai");
            t.exports = n("iPQn") ? function (t, r, n) {
                return i.f(t, r, o(1, n))
            } : function (t, r, n) {
                return t[r] = n, t
            }
        },
        "SVSC": function (t, r) {
        },
        "TV8W": function (t, r, n) {
            var i = n("QoAr");
            t.exports = function (t, r, n) {
                for (var o in r) n && t[o] ? t[o] = r[o] : i(t, o, r[o]);
                return t
            }
        },
        "TjAT": function (t, r, n) {
            t.exports = {"default": n("PwWu"), __esModule: !0}
        },
        "TlKz": function (t, r, n) {
            var i, o, u, f = n("Bxrf"),
                s = n("v9c6"),
                a = n("VXgN"),
                c = n("vXbD"),
                h = n("+rzM"),
                l = h.process,
                p = h.setImmediate,
                v = h.clearImmediate,
                d = h.MessageChannel,
                y = h.Dispatch,
                g = 0,
                w = {},
                E = function () {
                    var t = +this;
                    if (w.hasOwnProperty(t)) {
                        var r = w[t];
                        delete w[t], r()
                    }
                },
                m = function (t) {
                    E.call(t.data)
                };
            p && v || (p = function (t) {
                for (var r = [], n = 1; arguments.length > n;) r.push(arguments[n++]);
                return w[++g] = function () {
                    s("function" == typeof t ? t : Function(t), r)
                }, i(g), g
            }, v = function (t) {
                delete w[t]
            }, "process" == n("emx8")(l) ? i = function (t) {
                l.nextTick(f(E, t, 1))
            } : y && y.now ? i = function (t) {
                y.now(f(E, t, 1))
            } : d ? (o = new d, u = o.port2, o.port1.onmessage = m, i = f(u.postMessage, u, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts ? (i = function (t) {
                h.postMessage(t + "", "*")
            }, h.addEventListener("message", m, !1)) : i = "onreadystatechange" in c("script") ? function (t) {
                a.appendChild(c("script"))["onreadystatechange"] = function () {
                    a.removeChild(this), E.call(t)
                }
            } : function (t) {
                setTimeout(f(E, t, 1), 0)
            }), t.exports = {set: p, clear: v}
        },
        "Tqtd": function (t, r, n) {
            "use strict";
            var i = n("0T1Q"),
                o = n("6Qai"),
                u = n("v4zH"),
                f = {};
            n("QoAr")(f, n("8+tx")("iterator"), function () {
                return this
            }), t.exports = function (t, r, n) {
                t.prototype = i(f, {next: o(1, n)}), u(t, r + " Iterator")
            }
        },
        "Tuy/": function (t, r, n) {
            var i = n("hC6b"),
                o = n("+rzM"),
                u = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (t.exports = function (t, r) {
                return u[t] || (u[t] = void 0 !== r ? r : {})
            })("versions", []).push({version: i.version, mode: n("fcIa") ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)"})
        },
        "Ucwc": function (t, r, n) {
            "use strict";

            function i(t, r) {
                return void 0 === r && (r = 12), +parseFloat(t.toPrecision(r))
            }

            function o(t) {
                var r = t.toString().split(/[eE]/),
                    n = (r[0].split(".")[1] || "").length - +(r[1] || 0);
                return n > 0 ? n : 0
            }

            function u(t) {
                if (-1 === t.toString().indexOf("e")) return Number(t.toString().replace(".", ""));
                var r = o(t);
                return r > 0 ? i(t * Math.pow(10, r)) : t
            }

            function f(t) {
                v && (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER) && console.warn(t + " is beyond boundary when transfer to integer, the results may not be accurate")
            }

            function s(t, r) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                if (n.length > 0) return s.apply(void 0, [s(t, r), n[0]].concat(n.slice(1)));
                var a = u(t),
                    c = u(r),
                    h = o(t) + o(r),
                    l = a * c;
                return f(l), l / Math.pow(10, h)
            }

            function a(t, r) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                if (n.length > 0) return a.apply(void 0, [a(t, r), n[0]].concat(n.slice(1)));
                var u = Math.pow(10, Math.max(o(t), o(r)));
                return (s(t, u) + s(r, u)) / u
            }

            function c(t, r) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                if (n.length > 0) return c.apply(void 0, [c(t, r), n[0]].concat(n.slice(1)));
                var u = Math.pow(10, Math.max(o(t), o(r)));
                return (s(t, u) - s(r, u)) / u
            }

            function h(t, r) {
                for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                if (n.length > 0) return h.apply(void 0, [h(t, r), n[0]].concat(n.slice(1)));
                var a = u(t),
                    c = u(r);
                return f(a), f(c), s(a / c, Math.pow(10, o(r) - o(t)))
            }

            function l(t, r) {
                var n = Math.pow(10, r);
                return h(Math.round(s(t, n)), n)
            }

            function p(t) {
                void 0 === t && (t = !0), v = t
            }

            Object.defineProperty(r, "__esModule", {value: !0});
            var v = !0,
                d = {strip: i, plus: a, minus: c, times: s, divide: h, round: l, digitLength: o, float2Fixed: u, enableBoundaryChecking: p};
            r.strip = i, r.plus = a, r.minus = c, r.times = s, r.divide = h, r.round = l, r.digitLength = o, r.float2Fixed = u, r.enableBoundaryChecking = p, r["default"] = d
        },
        "VXgN": function (t, r, n) {
            var i = n("+rzM").document;
            t.exports = i && i.documentElement
        },
        "W3U9": function (t, r) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        },
        "W3ma": function (t, r, n) {
            n("8Vex");
            var i = n("hC6b").Object;
            t.exports = function (t, r, n) {
                return i.defineProperty(t, r, n)
            }
        },
        "WXzC": function (t, r) {
            var n = 0,
                i = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
            }
        },
        "WeKV": function (t, r, n) {
            n("SVSC"), n("wAMq"), n("c+0Q"), n("uDxU"), n("soXJ"), n("uxHD"), t.exports = n("hC6b").Promise
        },
        "Ww7I": function (t, r, n) {
            var i = n("emx8"),
                o = n("8+tx")("toStringTag"),
                u = "Arguments" == i(function () {
                    return arguments
                }()),
                f = function (t, r) {
                    try {
                        return t[r]
                    } catch (e) {
                    }
                };
            t.exports = function (t) {
                var r, n, s;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = f(r = Object(t), o)) ? n : u ? i(r) : "Object" == (s = i(r)) && "function" == typeof r.callee ? "Arguments" : s
            }
        },
        "WwqW": function (t, r) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        },
        "Xc+a": function (t, r, n) {
            var i = n("WwqW");
            t.exports = function (t) {
                if (!i(t)) throw TypeError(t + " is not an object!");
                return t
            }
        },
        "YD6s": function (t, r, n) {
            var i = n("+rzM"),
                o = i.navigator;
            t.exports = o && o.userAgent || ""
        },
        "Zlf3": function (t, r) {
            t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        },
        "ZytV": function (t, r, n) {
            var i = n("69rs"),
                o = n("gXjG"),
                u = n("kVtx")(!1),
                f = n("bDok")("IE_PROTO");
            t.exports = function (t, r) {
                var n, s = o(t),
                    a = 0,
                    c = [];
                for (n in s) n != f && i(s, n) && c.push(n);
                for (; r.length > a;) i(s, n = r[a++]) && (~u(c, n) || c.push(n));
                return c
            }
        },
        "aLLD": function (t, r, n) {
            t.exports = !n("iPQn") && !n("W3U9")(function () {
                return 7 != Object.defineProperty(n("vXbD")("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        },
        "bDok": function (t, r, n) {
            var i = n("Tuy/")("keys"),
                o = n("WXzC");
            t.exports = function (t) {
                return i[t] || (i[t] = o(t))
            }
        },
        "bSpI": function (t, r) {
            t.exports = function (t, r) {
                return {value: r, done: !!t}
            }
        },
        "c+0Q": function (t, r, n) {
            n("z+Eu");
            for (var i = n("+rzM"), o = n("QoAr"), u = n("fAv4"), f = n("8+tx")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < s.length; a++) {
                var c = s[a],
                    h = i[c],
                    l = h && h.prototype;
                l && !l[f] && o(l, f, c), u[c] = u.Array
            }
        },
        "cDhy": function (t, r, n) {
            t.exports = {"default": n("WeKV"), __esModule: !0}
        },
        "cGkp": function (t, r, n) {
            var i = n("+rzM"),
                o = n("hC6b"),
                u = n("Bxrf"),
                f = n("QoAr"),
                s = n("69rs"),
                a = function (t, r, n) {
                    var c, h, l, p = t & a.F,
                        v = t & a.G,
                        d = t & a.S,
                        y = t & a.P,
                        g = t & a.B,
                        w = t & a.W,
                        E = v ? o : o[r] || (o[r] = {}),
                        m = E["prototype"],
                        b = v ? i : d ? i[r] : (i[r] || {})["prototype"];
                    v && (n = r);
                    for (c in n) (h = !p && b && void 0 !== b[c]) && s(E, c) || (l = h ? b[c] : n[c], E[c] = v && "function" != typeof b[c] ? n[c] : g && h ? u(l, i) : w && b[c] == l ? function (t) {
                        var r = function (r, n, i) {
                            if (this instanceof t) {
                                switch (arguments.length) {
                                    case 0:
                                        return new t;
                                    case 1:
                                        return new t(r);
                                    case 2:
                                        return new t(r, n)
                                }
                                return new t(r, n, i)
                            }
                            return t.apply(this, arguments)
                        };
                        return r["prototype"] = t["prototype"], r
                    }(l) : y && "function" == typeof l ? u(Function.call, l) : l, y && ((E.virtual || (E.virtual = {}))[c] = l, t & a.R && m && !m[c] && f(m, c, l)))
                };
            a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
        },
        "czyP": function (t, r, n) {
            var i = n("Xc+a");
            t.exports = function (t, r, n, o) {
                try {
                    return o ? r(i(n)[0], n[1]) : r(n)
                } catch (e) {
                    var u = t["return"];
                    throw void 0 !== u && i(u.call(t)), e
                }
            }
        },
        "db+C": function (t, r, n) {
            var i = n("WwqW");
            t.exports = function (t, r) {
                if (!i(t)) return t;
                var n, o;
                if (r && "function" == typeof (n = t.toString) && !i(o = n.call(t))) return o;
                if ("function" == typeof (n = t.valueOf) && !i(o = n.call(t))) return o;
                if (!r && "function" == typeof (n = t.toString) && !i(o = n.call(t))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        "dy8G": function (t, r, n) {
            var i = n("ZytV"),
                o = n("LV4Q");
            t.exports = Object.keys || function (t) {
                return i(t, o)
            }
        },
        "emx8": function (t, r) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1)
            }
        },
        "fAv4": function (t, r) {
            t.exports = {}
        },
        "fcIa": function (t, r) {
            t.exports = !0
        },
        "gXjG": function (t, r, n) {
            var i = n("4JPz"),
                o = n("Zlf3");
            t.exports = function (t) {
                return i(o(t))
            }
        },
        "gi66": function (t, r, n) {
            "use strict";
            r.__esModule = !0;
            var i = n("Q2YV"),
                o = function (t) {
                    return t && t.__esModule ? t : {default: t}
                }(i);
            r.default = function () {
                function t(t, r) {
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(t, i.key, i)
                    }
                }

                return function (r, n, i) {
                    return n && t(r.prototype, n), i && t(r, i), r
                }
            }()
        },
        "gx8/": function (t, r, n) {
            var i = n("+rzM"),
                o = n("TlKz").set,
                u = i.MutationObserver || i.WebKitMutationObserver,
                f = i.process,
                s = i.Promise,
                a = "process" == n("emx8")(f);
            t.exports = function () {
                var t, r, n, c = function () {
                    var i, o;
                    for (a && (i = f.domain) && i.exit(); t;) {
                        o = t.fn, t = t.next;
                        try {
                            o()
                        } catch (e) {
                            throw t ? n() : r = void 0, e
                        }
                    }
                    r = void 0, i && i.enter()
                };
                if (a) n = function () {
                    f.nextTick(c)
                };
                else if (!u || i.navigator && i.navigator.standalone)
                    if (s && s.resolve) {
                        var h = s.resolve(void 0);
                        n = function () {
                            h.then(c)
                        }
                    } else n = function () {
                        o.call(i, c)
                    };
                else {
                    var l = !0,
                        p = document.createTextNode("");
                    new u(c).observe(p, {characterData: !0}), n = function () {
                        p.data = l = !l
                    }
                }
                return function (i) {
                    var o = {fn: i, next: void 0};
                    r && (r.next = o), t || (t = o, n()), r = o
                }
            }
        },
        "hC6b": function (t, r) {
            var n = t.exports = {version: "2.6.9"};
            "number" == typeof __e && (__e = n)
        },
        "iPQn": function (t, r, n) {
            t.exports = !n("W3U9")(function () {
                return 7 != Object.defineProperty({}, "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        },
        "j1tY": function (t, r, n) {
            "use strict";
            r.__esModule = !0, r.default = function (t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
        },
        "kVtx": function (t, r, n) {
            var i = n("gXjG"),
                o = n("FZMV"),
                u = n("NJe3");
            t.exports = function (t) {
                return function (r, n, f) {
                    var s, a = i(r),
                        c = o(a.length),
                        h = u(f, c);
                    if (t && n != n) {
                        for (; c > h;)
                            if ((s = a[h++]) != s) return !0
                    } else
                        for (; c > h; h++)
                            if ((t || h in a) && a[h] === n) return t || h || 0;
                    return !t && -1
                }
            }
        },
        "mrcS": function (t, r, n) {
            var i = n("Xc+a"),
                o = n("WwqW"),
                u = n("Elz3");
            t.exports = function (t, r) {
                if (i(t), o(r) && r.constructor === t) return r;
                var n = u.f(t);
                return (0, n.resolve)(r), n.promise
            }
        },
        "oB4s": function (t, r, n) {
            "use strict";
            var i = n("fcIa"),
                o = n("cGkp"),
                u = n("Ojg1"),
                f = n("QoAr"),
                s = n("fAv4"),
                a = n("Tqtd"),
                c = n("v4zH"),
                h = n("15oB"),
                l = n("8+tx")("iterator"),
                p = !([].keys && "next" in [].keys()),
                v = function () {
                    return this
                };
            t.exports = function (t, r, n, d, y, g, w) {
                a(n, r, d);
                var E, m, b, _ = function (t) {
                        if (!p && t in L) return L[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new n(this, t)
                                }
                        }
                        return function () {
                            return new n(this, t)
                        }
                    },
                    x = r + " Iterator",
                    A = "values" == y,
                    I = !1,
                    L = t.prototype,
                    T = L[l] || L["@@iterator"] || y && L[y],
                    P = T || _(y),
                    S = y ? A ? _("entries") : P : void 0,
                    k = "Array" == r ? L.entries || T : T;
                if (k && (b = h(k.call(new t))) !== Object.prototype && b.next && (c(b, x, !0), i || "function" == typeof b[l] || f(b, l, v)), A && T && "values" !== T.name && (I = !0, P = function () {
                    return T.call(this)
                }), i && !w || !p && !I && L[l] || f(L, l, P), s[r] = P, s[x] = v, y)
                    if (E = {values: A ? P : _("values"), keys: g ? P : _("keys"), entries: S}, w)
                        for (m in E) m in L || u(L, m, E[m]);
                    else o(o.P + o.F * (p || I), r, E);
                return E
            }
        },
        "sEsU": function (t, r, n) {
            var i = n("Bxrf"),
                o = n("czyP"),
                u = n("HUrH"),
                f = n("Xc+a"),
                s = n("FZMV"),
                a = n("4GPH"),
                c = {},
                h = {},
                r = t.exports = function (t, r, n, l, p) {
                    var v, d, y, g, w = p ? function () {
                            return t
                        } : a(t),
                        E = i(n, l, r ? 2 : 1),
                        m = 0;
                    if ("function" != typeof w) throw TypeError(t + " is not iterable!");
                    if (u(w)) {
                        for (v = s(t.length); v > m; m++)
                            if ((g = r ? E(f(d = t[m])[0], d[1]) : E(t[m])) === c || g === h) return g
                    } else
                        for (y = w.call(t); !(d = y.next()).done;)
                            if ((g = o(y, E, d.value, r)) === c || g === h) return g
                };
            r.BREAK = c, r.RETURN = h
        },
        "sFH6": function (t, r, n) {
            "use strict";
            for (var i = n("6ah1"), o = function (t) {
                return t && t.__esModule ? t : {default: t}
            }(i), u = o.default.Buffer, f = [], s = 0; s < 256; s++) f[s] = (s > 15 ? "" : "0") + s.toString(16);
            var a = t.exports = function (t, r) {
                t instanceof u ? (this.buffer = t, this.offset = r || 0) : "[object Uint8Array]" == Object.prototype.toString.call(t) ? (this.buffer = new u(t), this.offset = r || 0) : (this.buffer = this.buffer || new u(8), this.offset = 0, this.setValue.apply(this, arguments))
            };
            a.MAX_INT = Math.pow(2, 53), a.MIN_INT = -Math.pow(2, 53), a.prototype = {
                constructor: a, _2scomp: function () {
                    for (var t = this.buffer, r = this.offset, n = 1, i = r + 7; i >= r; i--) {
                        var o = (255 ^ t[i]) + n;
                        t[i] = 255 & o, n = o >> 8
                    }
                }, setValue: function (t, r) {
                    var n = !1;
                    if (1 == arguments.length)
                        if ("number" == typeof t) {
                            if (n = t < 0, t = Math.abs(t), r = t % 4294967296, (t /= 4294967296) > 4294967296) throw new RangeError(t + " is outside Int64 range");
                            t |= 0
                        } else {
                            if ("string" != typeof t) throw new Error(t + " must be a Number or String");
                            t = (t + "").replace(/^0x/, ""), r = t.substr(-8), t = t.length > 8 ? t.substr(0, t.length - 8) : "", t = parseInt(t, 16), r = parseInt(r, 16)
                        }
                    for (var i = this.buffer, o = this.offset, u = 7; u >= 0; u--) i[o + u] = 255 & r, r = 4 == u ? t : r >>> 8;
                    n && this._2scomp()
                }, toNumber: function (t) {
                    for (var r = this.buffer, n = this.offset, i = 128 & r[n], o = 0, u = 1, f = 7, s = 1; f >= 0; f--, s *= 256) {
                        var c = r[n + f];
                        i && (c = (255 ^ c) + u, u = c >> 8, c &= 255), o += c * s
                    }
                    return !t && o >= a.MAX_INT ? i ? -1 / 0 : 1 / 0 : i ? -o : o
                }, valueOf: function () {
                    return this.toNumber(!1)
                }, toString: function (t) {
                    return this.valueOf().toString(t || 10)
                }, toOctetString: function (t) {
                    for (var r = new Array(8), n = this.buffer, i = this.offset, o = 0; o < 8; o++) r[o] = f[n[i + o]];
                    return r.join(t || "")
                }, toBuffer: function (t) {
                    if (t && 0 === this.offset) return this.buffer;
                    var r = new u(8);
                    return this.buffer.copy(r, 0, this.offset, this.offset + 8), r
                }, copy: function (t, r) {
                    this.buffer.copy(t, r || 0, this.offset, this.offset + 8)
                }, compare: function (t) {
                    if ((128 & this.buffer[this.offset]) != (128 & t.buffer[t.offset])) return t.buffer[t.offset] - this.buffer[this.offset];
                    for (var r = 0; r < 8; r++)
                        if (this.buffer[this.offset + r] !== t.buffer[t.offset + r]) return this.buffer[this.offset + r] - t.buffer[t.offset + r];
                    return 0
                }, equals: function (t) {
                    return 0 === this.compare(t)
                }, inspect: function () {
                    return "[Int64 value:" + this + " octets:" + this.toOctetString(" ") + "]"
                }
            }
        },
        "soXJ": function (t, r, n) {
            "use strict";
            var i = n("cGkp"),
                o = n("hC6b"),
                u = n("+rzM"),
                f = n("Llxb"),
                s = n("mrcS");
            i(i.P + i.R, "Promise", {
                "finally": function (t) {
                    var r = f(this, o.Promise || u.Promise),
                        n = "function" == typeof t;
                    return this.then(n ? function (n) {
                        return s(r, t()).then(function () {
                            return n
                        })
                    } : t, n ? function (e) {
                        return s(r, t()).then(function () {
                            throw e
                        })
                    } : t)
                }
            })
        },
        "t6Gz": function (t, r) {
            var n;
            n = function () {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        },
        "uDxU": function (t, r, n) {
            "use strict";
            var i, o, u, f, s = n("fcIa"),
                a = n("+rzM"),
                c = n("Bxrf"),
                h = n("Ww7I"),
                l = n("cGkp"),
                p = n("WwqW"),
                v = n("AEfT"),
                d = n("3rOo"),
                y = n("sEsU"),
                g = n("Llxb"),
                w = n("TlKz").set,
                E = n("gx8/")(),
                m = n("Elz3"),
                b = n("ypJT"),
                _ = n("YD6s"),
                x = n("mrcS"),
                A = a.TypeError,
                I = a.process,
                L = I && I.versions,
                T = L && L.v8 || "",
                P = a["Promise"],
                S = "process" == h(I),
                k = function () {
                },
                B = o = m.f,
                U = !!function () {
                    try {
                        var t = P.resolve(1),
                            r = (t.constructor = {})[n("8+tx")("species")] = function (t) {
                                t(k, k)
                            };
                        return (S || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof r && 0 !== T.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
                    } catch (e) {
                    }
                }(),
                M = function (t) {
                    var r;
                    return !(!p(t) || "function" != typeof (r = t.then)) && r
                },
                R = function (t, r) {
                    if (!t._n) {
                        t._n = !0;
                        var n = t._c;
                        E(function () {
                            for (var i = t._v, o = 1 == t._s, u = 0; n.length > u;) !function (r) {
                                var n, u, f, s = o ? r.ok : r.fail,
                                    a = r.resolve,
                                    c = r.reject,
                                    h = r.domain;
                                try {
                                    s ? (o || (2 == t._h && j(t), t._h = 1), !0 === s ? n = i : (h && h.enter(), n = s(i), h && (h.exit(), f = !0)), n === r.promise ? c(A("Promise-chain cycle")) : (u = M(n)) ? u.call(n, a, c) : a(n)) : c(i)
                                } catch (e) {
                                    h && !f && h.exit(), c(e)
                                }
                            }(n[u++]);
                            t._c = [], t._n = !1, r && !t._h && C(t)
                        })
                    }
                },
                C = function (t) {
                    w.call(a, function () {
                        var r, n, i, o = t._v,
                            u = O(t);
                        if (u && (r = b(function () {
                            S ? I.emit("unhandledRejection", o, t) : (n = a.onunhandledrejection) ? n({
                                promise: t,
                                reason: o
                            }) : (i = a.console) && i.error && i.error("Unhandled promise rejection", o)
                        }), t._h = S || O(t) ? 2 : 1), t._a = void 0, u && r.e) throw r.v
                    })
                },
                O = function (t) {
                    return 1 !== t._h && 0 === (t._a || t._c).length
                },
                j = function (t) {
                    w.call(a, function () {
                        var r;
                        S ? I.emit("rejectionHandled", t) : (r = a.onrejectionhandled) && r({promise: t, reason: t._v})
                    })
                },
                D = function (t) {
                    var r = this;
                    r._d || (r._d = !0, r = r._w || r, r._v = t, r._s = 2, r._a || (r._a = r._c.slice()), R(r, !0))
                },
                Y = function (t) {
                    var r, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === t) throw A("Promise can't be resolved itself");
                            (r = M(t)) ? E(function () {
                                var i = {_w: n, _d: !1};
                                try {
                                    r.call(t, c(Y, i, 1), c(D, i, 1))
                                } catch (e) {
                                    D.call(i, e)
                                }
                            }) : (n._v = t, n._s = 1, R(n, !1))
                        } catch (e) {
                            D.call({_w: n, _d: !1}, e)
                        }
                    }
                };
            U || (P = function (t) {
                d(this, P, "Promise", "_h"), v(t), i.call(this);
                try {
                    t(c(Y, this, 1), c(D, this, 1))
                } catch (r) {
                    D.call(this, r)
                }
            }, i = function (t) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }, i.prototype = n("TV8W")(P.prototype, {
                then: function (t, r) {
                    var n = B(g(this, P));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof r && r, n.domain = S ? I.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise
                }, "catch": function (t) {
                    return this.then(void 0, t)
                }
            }), u = function () {
                var t = new i;
                this.promise = t, this.resolve = c(Y, t, 1), this.reject = c(D, t, 1)
            }, m.f = B = function (t) {
                return t === P || t === f ? new u(t) : o(t)
            }), l(l.G + l.W + l.F * !U, {Promise: P}), n("v4zH")(P, "Promise"), n("51oh")("Promise"), f = n("hC6b")["Promise"], l(l.S + l.F * !U, "Promise", {
                reject: function (t) {
                    var r = B(this);
                    return (0, r.reject)(t), r.promise
                }
            }), l(l.S + l.F * (s || !U), "Promise", {
                resolve: function (t) {
                    return x(s && this === f ? P : this, t)
                }
            }), l(l.S + l.F * !(U && n("wnrT")(function (t) {
                P.all(t)["catch"](k)
            })), "Promise", {
                all: function (t) {
                    var r = this,
                        n = B(r),
                        i = n.resolve,
                        o = n.reject,
                        u = b(function () {
                            var n = [],
                                u = 0,
                                f = 1;
                            y(t, !1, function (t) {
                                var s = u++,
                                    a = !1;
                                n.push(void 0), f++, r.resolve(t).then(function (t) {
                                    a || (a = !0, n[s] = t, --f || i(n))
                                }, o)
                            }), --f || i(n)
                        });
                    return u.e && o(u.v), n.promise
                }, race: function (t) {
                    var r = this,
                        n = B(r),
                        i = n.reject,
                        o = b(function () {
                            y(t, !1, function (t) {
                                r.resolve(t).then(n.resolve, i)
                            })
                        });
                    return o.e && i(o.v), n.promise
                }
            })
        },
        "utnj": function (t, r) {
            t.exports = function () {
            }
        },
        "uxHD": function (t, r, n) {
            "use strict";
            var i = n("cGkp"),
                o = n("Elz3"),
                u = n("ypJT");
            i(i.S, "Promise", {
                "try": function (t) {
                    var r = o.f(this),
                        n = u(t);
                    return (n.e ? r.reject : r.resolve)(n.v), r.promise
                }
            })
        },
        "v4zH": function (t, r, n) {
            var i = n("Jemx").f,
                o = n("69rs"),
                u = n("8+tx")("toStringTag");
            t.exports = function (t, r, n) {
                t && !o(t = n ? t : t.prototype, u) && i(t, u, {configurable: !0, value: r})
            }
        },
        "v9c6": function (t, r) {
            t.exports = function (t, r, n) {
                var i = void 0 === n;
                switch (r.length) {
                    case 0:
                        return i ? t() : t.call(n);
                    case 1:
                        return i ? t(r[0]) : t.call(n, r[0]);
                    case 2:
                        return i ? t(r[0], r[1]) : t.call(n, r[0], r[1]);
                    case 3:
                        return i ? t(r[0], r[1], r[2]) : t.call(n, r[0], r[1], r[2]);
                    case 4:
                        return i ? t(r[0], r[1], r[2], r[3]) : t.call(n, r[0], r[1], r[2], r[3])
                }
                return t.apply(n, r)
            }
        },
        "vXbD": function (t, r, n) {
            var i = n("WwqW"),
                o = n("+rzM").document,
                u = i(o) && i(o.createElement);
            t.exports = function (t) {
                return u ? o.createElement(t) : {}
            }
        },
        "wAMq": function (t, r, n) {
            "use strict";
            var i = n("+ddP")(!0);
            n("oB4s")(String, "String", function (t) {
                this._t = String(t), this._i = 0
            }, function () {
                var t, r = this._t,
                    n = this._i;
                return n >= r.length ? {value: void 0, done: !0} : (t = i(r, n), this._i += t.length, {value: t, done: !1})
            })
        },
        "wnrT": function (t, r, n) {
            var i = n("8+tx")("iterator"),
                o = !1;
            try {
                var u = [7][i]();
                u["return"] = function () {
                    o = !0
                }, Array.from(u, function () {
                    throw 2
                })
            } catch (e) {
            }
            t.exports = function (t, r) {
                if (!r && !o) return !1;
                var n = !1;
                try {
                    var u = [7],
                        f = u[i]();
                    f.next = function () {
                        return {done: n = !0}
                    }, u[i] = function () {
                        return f
                    }, t(u)
                } catch (e) {
                }
                return n
            }
        },
        "ypJT": function (t, r) {
            t.exports = function (t) {
                try {
                    return {e: !1, v: t()}
                } catch (e) {
                    return {e: !0, v: e}
                }
            }
        },
        "z+Eu": function (t, r, n) {
            "use strict";
            var i = n("utnj"),
                o = n("bSpI"),
                u = n("fAv4"),
                f = n("gXjG");
            t.exports = n("oB4s")(Array, "Array", function (t, r) {
                this._t = f(t), this._i = 0, this._k = r
            }, function () {
                var t = this._t,
                    r = this._k,
                    n = this._i++;
                return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == r ? o(0, n) : "values" == r ? o(0, t[n]) : o(0, [n, t[n]])
            }, "values"), u.Arguments = u.Array, i("keys"), i("values"), i("entries")
        }
    })
});