(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var l = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        t = {},
        ea = {};

    function w(a, b) {
        var c = ea[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function y(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in t ? f = t : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? l(t, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ea[d] && (a = 1E9 * Math.random() >>> 0, ea[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), l(f, ea[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    y("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            l(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    y("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ca[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && l(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function fa(a) {
        a = {
            next: a
        };
        a[w(t.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    y("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    }, "es6");
    y("globalThis", function(a) {
        return a || ca
    }, "es_2020");

    function ha(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[w(t.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    y("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ha(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    y("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ha(this, function(b) {
                return b
            })
        }
    }, "es6");
    y("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    var z = this || self;

    function ia(a) {
        return a
    };

    function ja(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function ka(a, b) {
        this.i = a === la && b || "";
        this.g = ma
    }
    var ma = {},
        la = {};
    var na = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        oa = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var pa;

    function qa(a, b) {
        this.g = b === ra ? a : ""
    }
    qa.prototype.toString = function() {
        return this.g + ""
    };

    function sa(a) {
        return a instanceof qa && a.constructor === qa ? a.g : "type_error:TrustedResourceUrl"
    }
    var ta = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        ra = {};

    function ua(a) {
        if (void 0 === pa) {
            var b = null;
            var c = z.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ia,
                        createScript: ia,
                        createScriptURL: ia
                    })
                } catch (d) {
                    z.console && z.console.error(d.message)
                }
                pa = b
            } else pa = b
        }
        a = (b = pa) ? b.createScriptURL(a) : a;
        return new qa(a, ra)
    }

    function va(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function ya(a, b) {
        a.src = sa(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        var d = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]");
        (c = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };

    function za(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Aa(a) {
        Aa[" "](a);
        return a
    }
    Aa[" "] = function() {};

    function Ba(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    var Ca = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Da(a) {
        var b = a.match(Ca);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Ea(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Fa = /#|$/;

    function B(a, b) {
        var c = a.search(Fa),
            d = Ea(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    }
    var Ga = /[?&]($|#)/;

    function D(a, b, c) {
        for (var d = a.search(Fa), e = 0, f, g = []; 0 <= (f = Ea(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = g.join("").replace(Ga, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.substr(0, d), e, a.substr(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function Ha() {
        if (!t.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            t.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Ia(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Ka = za(function() {
            return oa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ja) || 1E-4 > Math.random()
        }),
        La = za(function() {
            return Ja("MSIE")
        });

    function Ja(a) {
        var b;
        a: {
            if (b = z.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    }

    function E(a) {
        return /^true$/.test(a)
    }

    function Ma(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Na = ja("0.20"),
        Oa = ja("0.002"),
        Pa = ja("0.00"),
        Qa = ja("0.00"),
        Ra = E("true"),
        Sa = E("true"),
        Ta = E("true"),
        Ua = E("true");
    var Va = null;

    function Wa() {
        if (null === Va) {
            Va = "";
            try {
                var a = "";
                try {
                    a = z.top.location.hash
                } catch (c) {
                    a = z.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Va = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Va
    }

    function Xa(a, b, c) {
        var d = F;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = Wa()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!La() && !Ka() && (e = Math.random(), e < b)) {
                    e = Ha();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function Ya(a) {
        var b = F;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function Za() {
        var a = F,
            b = [];
        Ia(a.i, function(c, d) {
            b.push(d)
        });
        Ia(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var $a = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18,
            J: 19
        },
        F = null;

    function ab() {
        return !!F && "592230571" == Ya(16)
    };

    function bb(a) {
        return "function" == typeof a
    }
    var cb = Array.isArray;

    function db(a, b) {
        if (a && cb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function eb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function fb() {
        return new Date(Date.now())
    };
    var gb = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var G = window,
        I = document,
        hb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function ib(a) {
        eb({
            allow: "join-ad-interest-group"
        }, function(b, c) {
            b = b.toLowerCase();
            hb.hasOwnProperty(b) || a.setAttribute(b, c)
        })
    }

    function jb(a, b, c) {
        var d = c;
        c = !1;
        d || (d = I.createElement("iframe"), c = !0);
        ib(d);
        b && eb(b, function(e, f) {
            d.dataset[e] = f
        });
        d.height = "0";
        d.width = "0";
        d.style.display = "none";
        d.style.visibility = "hidden";
        c && (b = I.body && I.body.lastChild || I.body || I.head, b.parentNode.insertBefore(d, b));
        void 0 !== a && (d.src = a)
    };
    var kb = {};

    function K(a) {
        kb.TAGGING = kb.TAGGING || [];
        kb.TAGGING[a] = !0
    };

    function L(a) {
        var b = "u";
        if (a.u && a.hasOwnProperty(b)) return a.u;
        b = new a;
        return a.u = b
    };

    function lb() {
        var a = {};
        this.g = function() {
            var b = gb.g,
                c = gb.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[gb.g] = b
        }
    };
    var M = [];

    function N() {
        var a = {};
        var b = G.google_tag_data;
        G.google_tag_data = void 0 === b ? a : b;
        a = G.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: mb,
            update: nb,
            addListener: ob,
            notifyListeners: pb,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function mb(a, b, c, d, e, f) {
        var g = N();
        !g.usedDefault && g.usedUpdate && (g.wasSetLate = !0);
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" == typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && G.setTimeout(function() {
                    h[a] ===
                        m && m.quiet && (m.quiet = !1, qb(a), pb(), K(2))
                }, f)
            }
        }
    }

    function nb(a, b) {
        var c = N();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = O(a);
            c = c.entries;
            c = c[a] = c[a] || {};
            c.update = "granted" === b;
            b = O(a);
            c.quiet ? (c.quiet = !1, qb(a)) : b !== d && qb(a)
        }
    }

    function ob(a, b) {
        M.push({
            s: a,
            C: b
        })
    }

    function qb(a) {
        for (var b = 0; b < M.length; ++b) {
            var c = M[b];
            cb(c.s) && -1 !== c.s.indexOf(a) && (c.B = !0)
        }
    }

    function pb(a) {
        for (var b = 0; b < M.length; ++b) {
            var c = M[b];
            if (c.B) {
                c.B = !1;
                try {
                    c.C({
                        T: a
                    })
                } catch (d) {}
            }
        }
    }

    function O(a) {
        var b = N();
        b.accessedAny = !0;
        a = b.entries[a] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function rb(a) {
        var b = N();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function sb() {
        if (!L(lb).g()) return !1;
        var a = N();
        a.accessedAny = !0;
        return a.active
    }

    function tb(a, b) {
        N().addListener(a, b)
    }

    function ub(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!rb(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            tb(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function vb(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === O(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && tb(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function wb(a, b, c, d) {
        if (xb(d)) {
            d = [];
            b = String(b || yb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function zb(a, b, c, d) {
        var e = yb(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = yb();
        return e != a || void 0 != c && 0 <= wb(b, a, !1, d).indexOf(c)
    }

    function Ab(a, b, c) {
        function d(p, q, u) {
            if (null == u) return delete g[q], p;
            g[q] = u;
            return p + "; " + q + "=" + u
        }

        function e(p, q) {
            if (null == q) return delete g[q], p;
            g[q] = !0;
            return p + "; " + q
        }
        if (xb(c.o)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = Bb(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.U);
            f = d(f, "samesite", c.V);
            c.W &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = Cb();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!Db(m, c.path) && zb(n, a, b, c.o)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), Db(h, c.path) || zb(f, a, b, c.o)
        }
    }

    function Eb(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        Ab(a, b, c)
    }

    function Bb(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Fb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Gb = /(^|\.)doubleclick\.net$/i;

    function Db(a, b) {
        return Gb.test(window.document.location.hostname) || "/" === b && Fb.test(a)
    }

    function yb() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function Cb() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Gb.test(b) || Fb.test(b) || a.push("none");
        return a
    }

    function xb(a) {
        if (!L(lb).g() || !a || !sb()) return !0;
        if (!rb(a)) return !1;
        a = O(a);
        return null == a ? !0 : !!a
    };

    function Hb(a, b) {
        var c, d = Number(null != a.A ? a.A : void 0);
        0 !== d && (c = new Date((b || fb().getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c
        }
    };

    function Ib(a) {
        var b = [],
            c = I.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                v: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function P(a, b) {
        a = Ib(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f)
            }
        }
        return c
    };
    var Jb = /:[0-9]+$/;

    function Kb(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function Lb(a, b) {
        var c = "query";
        if ("protocol" === c || "port" === c) a.protocol = Mb(a.protocol) || Mb(G.location.protocol);
        "port" === c ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === c && (a.hostname = (a.hostname || G.location.hostname).replace(Jb, "").toLowerCase());
        var d = Mb(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a =
                    d;
                break;
            case "host":
                a = a.hostname.replace(Jb, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" == d ? 80 : "https" == d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || K(1);
                a = "/" == a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = Kb(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#",
                    "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function Mb(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };
    var Nb = {};
    var Ob = /^\w+$/,
        Pb = /^[\w-]+$/,
        Qb = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Q() {
        if (!L(lb).g() || !sb()) return !0;
        var a = O("ad_storage");
        return null == a ? !0 : !!a
    }

    function Rb(a, b) {
        rb("ad_storage") ? Q() ? a() : vb(a) : b ? K(3) : ub(function() {
            Rb(a, !0)
        })
    }

    function Sb(a) {
        return R(a).map(function(b) {
            return b.h
        })
    }

    function R(a) {
        var b = [];
        if ("null" === G.origin || !I.cookie) return b;
        a = wb(a, I.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                j: c.j
            }, d++) {
            var e = Tb(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.j = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = db(b, function(k) {
                    return function(m) {
                        return m.h === k.j
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = Vb(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.j,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Wb(b)
    }

    function Vb(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function Xb(a) {
        return a && "string" == typeof a && a.match(Ob) ? a : "_gcl"
    }

    function Yb() {
        var a = G.location.href,
            b = I.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || K(1), c = "/" + c);
        a = b.hostname.replace(Jb, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = Lb(d, "gclid");
        c = Lb(d, "gclsrc");
        a = Lb(d, "wbraid");
        var e = Lb(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || Kb(d, "gclid"), c = c || Kb(d, "gclsrc"), a = a || Kb(d, "wbraid"));
        return Zb(b, c, e, a)
    }

    function Zb(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Pb.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(Pb)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function $b() {
        var a = {},
            b = Yb();
        Rb(function() {
            ac(b, !1, a)
        })
    }

    function ac(a, b, c, d, e) {
        function f(p) {
            p = ["GCL", n, p];
            0 < e.length && p.push(e.join("."));
            return p.join(".")
        }

        function g(p, q) {
            if (p = bc(p, h)) Eb(p, q, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = Xb(c.prefix);
        d = d || fb().getTime();
        var k = Hb(c, d);
        k.o = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == Nb.enable_gbraid_cookie_write ? 0 : Nb.enable_gbraid_cookie_write) && !m && a.gb) {
            a = a.gb[0];
            d = bc("gb", h);
            c = !1;
            if (!b)
                for (b =
                    R(d), d = 0; d < b.length; d++) b[d].h === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }

    function bc(a, b) {
        a = Qb[a];
        if (void 0 !== a) return b + a
    }

    function cc(a) {
        return 0 !== dc(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function Tb(a) {
        a = dc(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function dc(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Pb.test(a[2]) ? [] : a
    }

    function Wb(a) {
        return a.filter(function(b) {
            return Pb.test(b.h)
        })
    }

    function ec() {
        var a = ["aw"],
            b = {};
        if ("null" !== G.origin) {
            for (var c = Xb(b.prefix), d = {}, e = 0; e < a.length; e++) Qb[a[e]] && (d[a[e]] = Qb[a[e]]);
            Rb(function() {
                eb(d, function(f, g) {
                    g = wb(c + g, I.cookie, void 0, "ad_storage");
                    g.sort(function(n, p) {
                        return cc(p) - cc(n)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = cc(h);
                        var k = 0 !== dc(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== dc(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        ac(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function fc(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Q()) return e;
        var f = R(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = Hb(c, f), c.o = "ad_storage", Eb(a, b, c));
        return e
    }

    function gc(a, b) {
        b = Xb(b);
        a = bc(a, b);
        if (!a) return 0;
        a = R(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function hc(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var ic = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        jc = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        kc = /^\d+\.fls\.doubleclick\.net$/,
        lc = /;gac=([^;?]+)/,
        mc = /;gacgb=([^;?]+)/,
        nc = /;gclaw=([^;?]+)/,
        oc = /;gclgb=([^;?]+)/;

    function pc(a, b, c) {
        if (kc.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(ic) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function qc(a, b, c, d) {
        var e = Q() ? P("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = fc("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            F: g ? f.join(";") : "",
            D: pc(a, e, mc)
        }
    }

    function rc(a, b, c, d) {
        if (kc.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(jc)) return [{
                h: a[1]
            }]
        } else return R((b || "_gcl") + c);
        return []
    }

    function sc(a, b) {
        return rc(a, b, "_aw", nc).map(function(c) {
            return c.h
        }).join(".")
    }

    function tc(a, b) {
        return rc(a, b, "_gb", oc).map(function(c) {
            return c.h
        }).join(".")
    }

    function uc(a, b) {
        var c = "" !== tc(a, b) || 0 < w(Object, "keys").call(Object, Q() ? P("_gac_gb", !0) : {}).length;
        a = "" !== sc(a, b) || "" !== pc(a, Q() ? P() : {}, lc);
        return c && a
    }

    function vc(a) {
        0 !== Sb("_gcl_aw").length || a && 0 !== Sb(a + "_aw").length || ($b(), ec())
    }

    function wc(a, b, c) {
        a = fc((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function xc(a) {
        var b = void 0 === b ? z : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    var yc = {
        O: 0,
        G: 1,
        P: 2,
        I: 3,
        H: 4
    };

    function zc() {
        this.g = {}
    }

    function Ac(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function Bc(a) {
        var b = L(zc);
        var c = void 0 === c ? z : c;
        c = c.performance;
        Ac(b, a, c && c.now ? c.now() : null)
    }

    function Cc() {
        function a() {
            return Ac(b, 0, xc("loadEventStart") - xc("navigationStart"))
        }
        var b = L(zc);
        0 != xc("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function Dc(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, Ac(a, 4, b.cbt), Ac(a, 3, b.cst))
    }

    function Ec() {
        var a = L(zc);
        return w(Object, "values").call(Object, yc).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };

    function Fc(a, b, c) {
        a = Gc(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Gc(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var Hc = {},
        Ic = null;

    function Jc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Ic)
            for (Ic = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Hc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Ic[h] && (Ic[h] = g)
                }
            }
        a = Hc[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Kc(a, b, c, d) {
        var e = B(c, "fmt");
        if (d) {
            var f = B(c, "random"),
                g = B(c, "label") || "";
            if (!f) return !1;
            f = Jc(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!Fc(a, f, d)) return !1
        }
        e && 4 != e && (c = D(c, "rfmt", e));
        c = D(c, "fmt", 4);
        e = Ba("SCRIPT");
        ya(e, ua(c));
        e.onload = function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        };
        b.getElementsByTagName("script")[0].parentElement.appendChild(e);
        return !0
    };
    var Lc = E("false");

    function Mc() {
        if (bb(G.__uspapi)) {
            var a = "";
            try {
                G.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Nc = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        Oc = /^[a-zA-Z0-9_]+$/,
        Pc = !1,
        Qc = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function Rc(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function S(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function Sc(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function T(a, b) {
        b = S(b);
        return "" != b && (a = S(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function Tc(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Uc(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Tc(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = Tc(d);
                (e = Tc(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function U(a) {
        return "number" != typeof a && "string" != typeof a ? "" : S(a.toString())
    }

    function Vc(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = Wc(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.A = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Xc(b) && b.l) var f = void 0 === b.m;
        else kc.test(a.location.host) ? f = !(nc.test(a.location.href) || lc.test(a.location.href)) : (f = Math.max(gc("aw", d), hc(Q() ? P() : {})), f = Math.max(gc("gb", d), hc(Q() ? P("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.m) return b.m;
            c = tc(a, d || void 0);
            f = b.google_conversion_label;
            var g = wc(f, e, b.l);
            c = T("gclgb", c) + (g ? T("mcov", g) : "");
            if (d) return b.m = c;
            d = qc(a, f, e, b.l);
            a = d.D;
            d = d.F;
            c += (a ? T("gacgb", a) : "") + (d ? T("gacmcov", d) : "");
            return b.m = c
        }
        if (d) return b = sc(a, d), T("gclaw", b);
        (b = sc(a)) && (c = T("gclaw",
            b));
        b = pc(a, Q() ? P() : {}, lc);
        return c + (b ? T("gac", b) : "")
    }

    function Yc(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Zc(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 6:
                    k = "www.google.com/";m = "ccm/conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 5:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "ccm/conversion/";
                break;
            case 4:
                    k = (k = d.google_gtm_experiments) && k.apcm ? "www.google.com" : k && k.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";m = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    k = "googleads.g.doubleclick.net/",
                m = "td/rul/"
        }
        Ra && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, S(d.google_conversion_id), h, "?random=", S(d.google_conversion_time)].join("");
        h = T("cv", d.google_conversion_js_version);
        k = T("fst", d.google_conversion_first_time);
        m = T("num", d.google_conversion_snippets);
        var n = T("fmt", d.google_conversion_format),
            p = d.google_remarketing_only ? T("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 !== q && 1 !== q ? "" : T("tfcd", q);
        var u = d.google_tag_for_under_age_of_consent;
        u = null == u || 0 !== u && 1 !== u ? "" : T("tfua", u);
        var C = d.google_allow_ad_personalization_signals;
        C = !1 === C ? T("npa", 1) : !0 === C ? T("npa", 0) : "";
        var W = d.google_restricted_data_processing;
        W = Ta ? !0 === W ? T("rdp",
            1) : !1 === W ? T("rdp", 0) : "" : "";
        var id = T("value", d.google_conversion_value),
            jd = T("currency_code", d.google_conversion_currency),
            kd = T("label", d.google_conversion_label),
            ld = T("oid", d.google_conversion_order_id),
            md = T("bg", d.google_conversion_color);
        a: {
            var x = d.google_conversion_language;
            if (null != x) {
                x = x.toString();
                if (2 == x.length) {
                    x = T("hl", x);
                    break a
                }
                if (5 == x.length) {
                    x = T("hl", x.substring(0, 2)) + T("gl", x.substring(3, 5));
                    break a
                }
            }
            x = ""
        }
        var nd = T("guid", "ON"),
            od = !d.google_conversion_domain && "GooglemKTybQhCsO" in z &&
            "function" == typeof z.GooglemKTybQhCsO ? T("resp", "GooglemKTybQhCsO") : "",
            pd = T("disvt", d.google_disable_viewthrough),
            qd = T("eid", Za().join());
        var X = d.google_conversion_date;
        var v = [];
        if (a) {
            var H = a.screen;
            H && (v.push(T("u_h", H.height)), v.push(T("u_w", H.width)), v.push(T("u_ah", H.availHeight)), v.push(T("u_aw", H.availWidth)), v.push(T("u_cd", H.colorDepth)));
            a.history && v.push(T("u_his", a.history.length))
        }
        X && "function" == typeof X.getTimezoneOffset && v.push(T("u_tz", -X.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled &&
            v.push(T("u_java", b.javaEnabled())), b.plugins && v.push(T("u_nplug", b.plugins.length)), b.mimeTypes && v.push(T("u_nmime", b.mimeTypes.length)));
        X = v.join("");
        v = T("gtm", d.google_gtm);
        b = b && b.sendBeacon ? T("sendb", "1") : "";
        H = $c();
        var sd = T("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            wa = Uc(d.google_custom_params);
        f = Uc(f);
        f = wa.concat(0 < wa.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        wa = Vc(c, d);
        var Ub = d.google_conversion_page_url,
            td = d.google_conversion_referrer_url,
            xa = "";
        if (c) {
            if (a.top == a) var r = 0;
            else {
                var J = a.location.ancestorOrigins;
                if (J) r = J[J.length - 1] == a.location.origin ? 1 : 2;
                else {
                    J = a.top;
                    try {
                        var A;
                        if (A = !!J && null != J.location.href) c: {
                            try {
                                Aa(J.foo);
                                A = !0;
                                break c
                            } catch (ud) {}
                            A = !1
                        }
                        r = A
                    } catch (ud) {
                        r = !1
                    }
                    r = r ? 1 : 2
                }
            }
            A = Ub ? Ub : 1 == r ? a.top.location.href : a.location.href;
            xa += T("frm", r);
            xa += T("url", Sc(A));
            xa += T("ref", Sc(td || c.referrer))
        }
        a = [h, k, m, n, p, q, u, C, W, id, jd, kd, ld, md, x, nd, od, pd, qd, X, v, b, H, sd, f, wa, xa, Yc(c), ad(d.google_additional_params), ad(d.google_remarketing_only ? {} : d.google_additional_conversion_params),
            "&hn=" + S("www.googleadservices.com"), bd(a)
        ].join("");
        c = Wa();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [T("mid", d.google_conversion_merchant_id), T("fcntr", d.google_basket_feed_country), T("flng", d.google_basket_feed_language), T("dscnt", d.google_basket_discount), T("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (r = d.google_conversion_items) {
                    A = [];
                    h = 0;
                    for (k = r.length; h < k; h++) m = r[h], n = [], m && (n.push(U(m.value)), n.push(U(m.quantity)), n.push(U(m.item_id)),
                        n.push(U(m.start_date)), n.push(U(m.end_date)), A.push("(" + n.join("*") + ")"));
                    r = 0 < A.length ? "&item=" + A.join("") : ""
                } else r = "";
            else r = "";
            c = [a, c, r].join("");
            a = 4E3 < c.length ? [a, T("item", "elngth")].join("") : c
        }
        g += a;
        1 === e || 6 === e ? g += [T("gcp", 1), T("sscte", 1), T("ct_cookie_present", 1)].join("") : 3 == e && (g += T("gcp", 1), g += T("ct_cookie_present", 1));
        Sa && (e = Mc(), void 0 !== e && (g += T("us_privacy", e || "error")));
        Xc(d) && (g = d.l ? g + T("gbcov", 1) : g + T("gbcov", 0));
        return g
    }

    function cd(a) {
        if (!Lc) {
            var b = Ba("IFRAME");
            b.style.display = "none";
            b.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(b)
        }
    }

    function dd() {
        return new Image
    }

    function ed(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? h = g : h = function() {};
        d += T("async", "1");
        e = c.google_gtm_url_processor;
        bb(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else try {
                k = Kc(a, b, d, h)
            } catch (m) {
                k = !1
            }
            f = !k
        }
        f && (a = dd, g && (a = e), a = a(), a.src = d, a.onload = h)
    }

    function fd(a, b) {
        F && "376635471" == Ya(2) && ("complete" === b.readyState ? cd(b) : a.addEventListener ? a.addEventListener("load", function() {
            cd(b)
        }) : a.attachEvent("onload", function() {
            cd(b)
        }))
    }

    function gd(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function hd(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < Qc.length; e++) c(Qc[e]);
        c("onload_callback");
        return d
    }

    function rd(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = w(Object, "keys").call(Object, d).filter(function(k) {
                    return Nc.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return w(Object, "values").call(Object, b)
    }

    function $c() {
        var a = "";
        ab() && (a = Ec().map(function(b) {
            return b.join("-")
        }).join("_"));
        return T("li", a)
    }

    function bd(a) {
        if (!Ua || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!bb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : T("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function ad(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += T(c, a[c]));
        return b
    }

    function Xc(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function Wc(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && Oc.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function vd(a, b, c, d) {
        if (!d.google_remarketing_only && wd(c, d)) {
            var e = d.google_additional_conversion_params || {},
                f = d.google_gtm_experiments;
            e.capi = f && f.apcm ? "2" : "1";
            d.google_additional_conversion_params = e;
            ed(a, c, d, Zc(a, b, c, d, 4), !1, !1)
        }
    }

    function wd(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        if (!(b = Pc))
            if (b = w("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "A+sitaPn3hlQ8QipTsncwHz+k1NvfPtFsQqIOiD8GK3M9v9XCeQqlF7x1P9AVJdoYTiJPZXZc5XZYpwc10fH4wEAAACfeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGVhZHNlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", a.head) {
                var c = Ma("META");
                a.head.appendChild(c);
                c.httpEquiv = "origin-trial";
                c.content = b;
                b = c
            } else b = null;
        b ? (Pc = !0, a = (a = I.featurePolicy) && bb(a.allowsFeature) ? a.allowsFeature("attribution-reporting") : !1) : a = !1;
        return a
    }

    function xd(a, b, c, d, e) {
        a = Zc(a, b, c, d, 7, e);
        b = "AW-" + d.google_conversion_id;
        (d = d.google_conversion_label) && (b = b + "/" + d);
        a: {
            d = b;b = void 0;
            try {
                b = I.querySelector('iframe[data-tagging-id="' + d + '"]')
            } catch (f) {}
            if (b) {
                if ((c = Number(b.dataset.loadTime)) && 6E4 > fb().getTime() - c) {
                    K(9);
                    break a
                }
            } else try {
                if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    K(10);
                    break a
                }
            } catch (f) {}
            jb(a, {
                taggingId: d,
                loadTime: fb().getTime()
            }, b)
        }
    };
    var yd = !1,
        zd = document.currentScript && document.currentScript.src || "";

    function Ad(a, b, c) {
        try {
            if (!yd && (yd = !0, !c.google_gtm)) {
                var d = void 0,
                    e = B(a.location.href, "gtm_debug");
                Bd(e) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                var f;
                if (f = !d) f = 0 <= na(b.cookie.split("; "), "__TAG_ASSISTANT=x");
                f && (d = 4);
                if (!d) {
                    var g = b.documentElement.getAttribute("data-tag-assistant-present");
                    Bd(g) && (d = 5)
                }
                if (d) {
                    var h = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var k = new ka(la, "https://www.googletagmanager.com/debug/bootstrap");
                        var m = ua(k instanceof ka && k.constructor === ka && k.g === ma ? k.i : "type_error:Const");
                        c = {
                            id: h,
                            src: "LEGACY",
                            cond: d
                        };
                        var n = ta.exec(sa(m).toString()),
                            p = n[3] || "";
                        var q = ua(n[1] + va("?", n[2] || "", c) + va("#", p, void 0));
                        var u = Ma("SCRIPT", b);
                        ya(u, q);
                        var C = b.getElementsByTagName("script")[0];
                        C && C.parentNode && C.parentNode.insertBefore(u, C)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: h,
                            scriptSource: zd
                        }
                    })
                }
            }
        } catch (W) {}
    }

    function Bd(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function Cd(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ? a.onload_callback = Rc(b, a.onload_callback) : a.onload_callback = function() {}
    }

    function Dd(a, b, c, d) {
        Ad(a, c, d);
        ab() && (Bc(2), d.google_gtm && Dc(L(zc), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (gd(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !Lc && F && Xa(["376635470", "376635471"], Na, 2);
                d.google_remarketing_only && !d.google_conversion_domain && F && Xa(["759238990", "759238991"], Qa, 13);
                !d.google_remarketing_only || d.google_conversion_domain || F && ("759248991" == Ya(14) || "759248990" == Ya(14)) || F && Xa(["759248990", "759248991"], Pa, 14);
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || vc(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) Ed(a, b, c, d);
                else {
                    var f = d.google_gtm_experiments && d.google_gtm_experiments.ccmpp;
                    if (d.google_conversion_domain || d.google_transport_url && "https://pagead2.googlesyndication.com/" !== d.google_transport_url) f = !1;
                    var g = !1;
                    w("www.googleadservices.com", "endsWith").call("www.googleadservices.com",
                        "google.com") && (g = !0);
                    var h = d.google_additional_params;
                    h && h.dg && (g = "e" === h.dg);
                    h = function(k, m, n) {
                        m = void 0 === m ? !0 : m;
                        n = void 0 === n ? !0 : n;
                        ed(a, c, d, Zc(a, b, c, d, k), m, n)
                    };
                    d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
                    d.google_remarketing_only ? h(2) : g ? (Cd(d, f ? 3 : 2), vd(a, b, c, d), h(1), h(3), f && h(6, !0, !1)) : (Cd(d, f ? 2 : 1), vd(a, b, c, d), h(0), f && h(5, !0, !1), Xc(d) && uc(c, Wc(d)) && (d.l = !0, h(0, !1)));
                    d.google_gtm_experiments &&
                        d.google_gtm_experiments.fledge && xd(a, b, c, d)
                }
                d.google_remarketing_only && d.google_enable_display_cookie_match && fd(a, c);
                e = !0
            }
        } catch (k) {}
        return e
    }

    function Ed(a, b, c, d) {
        var e = rd(d.google_gtag_event_data.items);
        Cd(d, e.length);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
            ed(a, c, d, Zc(a, b, c, d, 2, g), !0, !0);
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && xd(a, b, c, d, g);
            d.google_conversion_time = d.google_conversion_time + 1
        }
    };
    F = new function() {
        var a = [],
            b = 0,
            c;
        for (c in $a) a[b++] = $a[c];
        this.i = {};
        this.g = {};
        a = a || [];
        b = 0;
        for (c = a.length; b < c; ++b) this.g[a[b]] = ""
    };
    Xa(["592230570", "592230571"], Oa, 16);
    ab() && (Bc(1), Cc());

    function Fd(a, b, c) {
        function d(m, n) {
            var p = new Image;
            p.onload = m;
            p.src = n
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Gc(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ea(g, 0, "rmt_tld", g.search(Fa)) && 0 <= Ea(g, 0, "ipr", g.search(Fa)) && !h.match(Ca)[6] && (h += Da(g), c[1] = D(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = B(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? (k.onload = e, k.src = h) : d(e, h);
                    break;
                case 4:
                    Kc(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = D(h, "sendb", 2);
                    h = D(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var V = ["GooglemKTybQhCsO"],
        Y = z;
    V[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + V[0]);
    for (var Z; V.length && (Z = V.shift());) V.length || void 0 === Fd ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Fd;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = hd(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        L(lb).i(e);
        return Dd(b, c, d, a)
    };
}).call(this);