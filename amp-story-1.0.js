(self.AMP = self.AMP || []).push({
    n: "amp-story",
    v: "1525461683159",
    f: (function(AMP) {
        var f;
        (function(a) {
            return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
        })(this);

        function h(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            for (var d in b)
                if (Object.defineProperties) {
                    var e = Object.getOwnPropertyDescriptor(b, d);
                    e && Object.defineProperty(a, d, e)
                } else a[d] = b[d]
        }

        function aa(a, b) {
            b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (c) {
                return b
            }
        };
        var ba = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function ca(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = ba.exec(a);) {
                var d = aa(c[1], c[1]),
                    e = c[2] ? aa(c[2], c[2]) : "";
                b[d] = e
            }
            return b
        };
        var da = "";

        function ea(a) {
            var b = a || self,
                c;
            if (b.AMP_MODE) c = b.AMP_MODE;
            else {
                c = b;
                var d = ca(c.location.originalHash || c.location.hash),
                    e = ca(c.location.search);
                da || (da = c.AMP_CONFIG && c.AMP_CONFIG.v ? c.AMP_CONFIG.v : "011525461683159");
                c = b.AMP_MODE = {
                    localDev: !1,
                    development: !("1" != d.development && !c.AMP_DEV_MODE),
                    examiner: "2" == d.development,
                    filter: d.filter,
                    geoOverride: d["amp-geo"],
                    minified: !0,
                    lite: void 0 != e.amp_lite,
                    test: !1,
                    log: d.log,
                    version: "1525461683159",
                    rtvVersion: da
                }
            }
            return c
        };
        var fa = Object.prototype.toString;

        function ga(a) {
            if (!a) return [];
            for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = a[c];
            return b
        }

        function ha(a) {
            return "[object Object]" === fa.call(a)
        }

        function ia(a) {
            return "number" === typeof a && isFinite(a)
        };
        self.log = self.log || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var ja = self.log;

        function n() {
            if (!ja.user) throw Error("failed to call initLogConstructor");
            return ja.user
        }

        function p() {
            if (ja.dev) return ja.dev;
            throw Error("failed to call initLogConstructor");
        };
        var ka = Object.prototype.hasOwnProperty;

        function la(a) {
            var b = Object.create(null);
            a && Object.assign(b, a);
            return b
        }

        function q(a) {
            return a || {}
        }

        function ma(a) {
            var b = ["offset"];
            return Object.keys(a).reduce(function(c, d) {
                b.includes(d) || (c[d] = a[d]);
                return c
            }, {})
        };

        function na(a) {
            this.Zc = a;
            this.U = Object.create(null)
        }
        na.prototype.get = function(a) {
            if (this.U[a]) return this.U[a].access = Date.now(), this.U[a].payload
        };
        na.prototype.put = function(a, b) {
            var c = this;
            this.U[a] = {
                payload: b,
                access: Date.now()
            };
            var d = Object.keys(this.U);
            d.length > this.Zc && (p().warn("lru-cache", "Trimming template cache"), d.sort(function(a, b) {
                return c.U[b].access - c.U[a].access
            }), delete this.U[d[d.length - 1]])
        };

        function oa(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        function pa(a, b) {
            return b.length > a.length ? !1 : 0 == a.lastIndexOf(b, 0)
        };
        var qa = self.AMP_CONFIG || {},
            ra = qa.cdnUrl || "https://cdn.ampproject.org",
            sa = ("string" == typeof qa.cdnProxyRegex ? new RegExp(qa.cdnProxyRegex) : qa.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
        var ta = q({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            ua, va, wa = /[?&]amp_js[^&]*/,
            xa = /[?&]amp_gsa[^&]*/,
            ya = /[?&]usqp[^&]*/,
            za = ["javascript:", "data:", "vbscript:"];

        function t(a) {
            var b;
            ua || (ua = self.document.createElement("a"), va = self.UrlCache || (self.UrlCache = new na(100)));
            var c = va.get(a);
            if (c) return c;
            var d = ua;
            d.href = a;
            d.protocol || (d.href = d.href);
            var e = {
                href: d.href,
                protocol: d.protocol,
                host: d.host,
                hostname: d.hostname,
                port: "0" == d.port ? "" : d.port,
                pathname: d.pathname,
                search: d.search,
                hash: d.hash,
                origin: null
            };
            "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname);
            if ("http:" == e.protocol && 80 == e.port || "https:" == e.protocol && 443 == e.port) e.port = "", e.host = e.hostname;
            e.origin = d.origin &&
            "null" != d.origin ? d.origin : "data:" != e.protocol && e.host ? e.protocol + "//" + e.host : e.href;
            var g = e,
                k = g;
            if (b) return k;
            va.put(a, k);
            return k
        }

        function Aa(a) {
            "string" == typeof a && (a = t(a));
            return "https:" == a.protocol || "localhost" == a.hostname || oa(a.hostname, ".localhost")
        }

        function Ba(a) {
            "string" == typeof a && (a = t(a));
            return sa.test(a.origin)
        }

        function Ca(a) {
            if (!a) return !0;
            "string" == typeof a && (a = t(a));
            return !za.includes(a.protocol)
        };

        function Da(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                b && b(c)
            }
        };

        function Ea(a, b) {
            if (a.nodeType) {
                var c = (a.ownerDocument || a).defaultView;
                if (c = c != (c.__AMP_TOP || c) && Fa(c, b) ? Ga(c, b) : null) return c
            }
            return Ha(a, b)
        }

        function Ia(a, b, c) {
            var d;
            a = a.__AMP_TOP || a;
            Ja(a, a, b, c);
            d && Ga(a, b)
        }

        function Ka(a, b) {
            var c = u(a),
                d = Ma(c);
            Ja(d, c, "video-manager", b)
        }

        function v(a, b) {
            a = a.__AMP_TOP || a;
            return Ga(a, b)
        }

        function Ha(a, b) {
            a = u(a);
            a = Ma(a);
            return Ga(a, b)
        }

        function Na(a, b) {
            return Oa(Ma(a), b)
        }

        function Pa(a, b) {
            return Qa(Ma(a), b)
        }

        function u(a) {
            return a.nodeType ? v((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function Ma(a) {
            a = u(a);
            return a.isSingleDoc() ? a.win : a
        }

        function Ga(a, b) {
            Fa(a, b);
            var c = Ra(a);
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Ja(a, b, c, d) {
            var e = Ra(a),
                g = e[c];
            g || (g = e[c] = {
                obj: null,
                promise: null,
                resolve: null,
                context: null,
                ctor: null
            });
            g.ctor || g.obj || (g.ctor = d, g.context = b, g.resolve && Ga(a, c))
        }

        function Oa(a, b) {
            var c = Qa(a, b);
            if (c) return c;
            var d, e = new Promise(function(a) {
                d = a
            });
            Ra(a)[b] = {
                obj: null,
                promise: e,
                resolve: d,
                context: null,
                ctor: null
            };
            return e
        }

        function Qa(a, b) {
            var c = Ra(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                Ga(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Ra(a) {
            var b = a.services;
            b || (b = a.services = {});
            return b
        }

        function Fa(a, b) {
            a = a.services && a.services[b];
            return !(!a || !a.ctor && !a.obj)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var Sa = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function Ta(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        };

        function Ua(a, b, c) {
            if (b(a)) c();
            else {
                var d = a.ownerDocument.defaultView;
                if (d.MutationObserver) {
                    var e = new d.MutationObserver(function() {
                        b(a) && (e.disconnect(), c())
                    });
                    e.observe(a, {
                        childList: !0
                    })
                } else var g = d.setInterval(function() {
                    b(a) && (d.clearInterval(g), c())
                }, 5)
            }
        }

        function Va(a, b) {
            Ua(a.documentElement, function() {
                return !!a.body
            }, b)
        }

        function Wa(a) {
            return new Promise(function(b) {
                Va(a, b)
            })
        }

        function Xa(a) {
            a.parentElement && a.parentElement.removeChild(a)
        }

        function Ya(a, b) {
            for (var c in b) a.setAttribute(c, b[c]);
            return a
        }

        function Za(a, b, c) {
            a = a.createElement(b);
            return Ya(a, c)
        }

        function $a(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            do {
                if (Node.prototype.getRootNode) a = a.getRootNode() || a;
                else
                    for (; a.parentNode; a = a.parentNode);
                if (a.host) a = a.host;
                else break
            } while (1);
            return a.nodeType === Node.DOCUMENT_NODE
        }

        function ab(a, b, c) {
            for (var d = a; d && d !== c; d = d.parentElement)
                if (b(d)) return d;
            return null
        }

        function bb(a, b) {
            return a.closest ? a.closest(b) : ab(a, function(a) {
                return cb(a, b)
            })
        }

        function cb(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }

        function db(a, b) {
            for (var c = a.firstElementChild; c; c = c.nextElementSibling)
                if (b(c)) return c;
            return null
        }
        var eb;

        function fb(a) {
            a = a.ownerDocument;
            try {
                var b = a.createElement("div"),
                    c = a.createElement("div");
                b.appendChild(c);
                return b.querySelector(":scope div") === c
            } catch (d) {
                return !1
            }
        }

        function gb(a, b) {
            null == eb && (eb = fb(a));
            if (eb) return a.querySelector(":scope " + b);
            var c = "i-amphtml-scoped";
            a.classList.add(c);
            b = a.querySelector("." + c + " " + b);
            a.classList.remove(c);
            return b
        }

        function hb(a, b) {
            null == eb && (eb = fb(a));
            if (eb) return a.querySelectorAll(":scope " + b);
            a.classList.add("i-amphtml-scoped");
            b = a.querySelectorAll(".i-amphtml-scoped " + b);
            a.classList.remove("i-amphtml-scoped");
            return b
        }

        function ib(a, b) {
            for (var c = 0, d; void 0 !== (d = a[c]); c++) b(d, c)
        }

        function jb(a) {
            return "SCRIPT" == a.tagName && "APPLICATION/LD+JSON" == a.getAttribute("type").toUpperCase()
        }

        function kb(a) {
            var b = String(a);
            b.indexOf(")");
            return b
        };

        function lb(a, b) {
            var c = Qa(a, b);
            return c ? c : mb(a, b)
        }

        function nb(a, b) {
            return a.ampExtendedElements ? !!a.ampExtendedElements[b] : !1
        }

        function ob(a, b, c) {
            return pb(a, b, c, void 0).then(function(a) {
                return n().assert(a, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c)
            })
        }

        function pb(a, b, c, d) {
            var e = u(a),
                g = Pa(a, b);
            return g ? g : Promise.resolve().then(function() {
                return !d && nb(e.win, c) ? Na(a, b) : e.whenBodyAvailable().then(function() {
                    return d ? Pa(a, b) : nb(e.win, c) ? Na(a, b) : null
                })
            })
        }

        function mb(a, b) {
            return Promise.resolve().then(function() {
                return Wa(a.document).then(function() {
                    return Qa(a, b)
                })
            })
        };

        function w(a) {
            return v(a, "platform")
        }

        function qb(a) {
            return v(a, "story-store")
        }

        function x(a) {
            return v(a, "timer")
        }

        function y(a) {
            return v(a, "vsync")
        }

        function rb(a) {
            return Ha(a, "viewport")
        };

        function sb(a) {
            var b;
            try {
                b = a.document.cookie
            } catch (k) {
                b = ""
            }
            var c = b;
            if (!c) return null;
            var d = c.split(";");
            for (a = 0; a < d.length; a++) {
                var e = d[a].trim(),
                    g = e.indexOf("=");
                if (b = -1 != g) b = e.substring(0, g).trim(), b = "AMP_EXP" == aa(b, void 0);
                if (b) return a = e.substring(g + 1).trim(), aa(a, a)
            }
            return null
        }

        function tb(a, b, c, d) {
            "ampproject.org" == d && (b = "delete", c = 0);
            b = encodeURIComponent("AMP_EXP") + "=" + encodeURIComponent(b) + "; path=/" + (d ? "; domain=" + d : "") + "; expires=" + (new Date(c)).toUTCString();
            try {
                a.document.cookie = b
            } catch (e) {}
        };

        function ub(a, b) {
            var c = vb(a);
            return !!c[b]
        }

        function vb(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) return a.__AMP__EXPERIMENT_TOGGLES;
            a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
            var b = a.__AMP__EXPERIMENT_TOGGLES;
            if (a.AMP_CONFIG)
                for (var c in a.AMP_CONFIG) {
                    var d = a.AMP_CONFIG[c];
                    "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                }
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length) {
                var e = a.AMP_CONFIG["allow-doc-opt-in"];
                if (c = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')) {
                    var g = c.getAttribute("content").split(",");
                    for (c = 0; c < g.length; c++) - 1 != e.indexOf(g[c]) && (b[g[c]] = !0)
                }
            }
            Object.assign(b, wb(a));
            if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                c = a.AMP_CONFIG["allow-url-opt-in"];
                a = ca(a.location.originalHash || a.location.hash);
                for (var k = 0; k < c.length; k++) {
                    var l = a["e-" + c[k]];
                    "1" == l && (b[c[k]] = !0);
                    "0" == l && (b[c[k]] = !1)
                }
            }
            return b
        }

        function wb(a) {
            var b = sb(a),
                c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        };
        var xb, yb = "Webkit webkit Moz moz ms O o".split(" ");

        function zb(a, b, c) {
            if (pa(b, "--")) return b;
            xb || (xb = la());
            var d = xb[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var g = 0; g < yb.length; g++) {
                            var k = yb[g] + e;
                            if (void 0 !== a[k]) {
                                e = k;
                                break a
                            }
                        }
                        e = ""
                    }
                    var l = e;
                    void 0 !== a[l] && (d = l)
                }
                c || (xb[b] = d)
            }
            return d
        }

        function Ab(a, b) {
            for (var c in b) a.style.setProperty(zb(b, c), b[c].toString(), "important")
        }

        function Bb(a, b, c) {
            var d;
            (b = zb(a.style, b, void 0)) && (a.style[b] = d ? c + d : c)
        }

        function Cb(a, b) {
            for (var c in b) Bb(a, c, b[c])
        }

        function Db(a, b) {
            "number" == typeof a && (a += "px");
            if (void 0 === b) return "translate(" + a + ")";
            "number" == typeof b && (b += "px");
            return "translate(" + a + ", " + b + ")"
        }

        function Eb(a) {
            "number" == typeof a && (a += "deg");
            return "rotate(" + a + ")"
        }

        function Fb(a) {
            var b = ["opacity", "transition"],
                c = {};
            b.forEach(function(a) {
                c[a] = null
            });
            Cb(a, c)
        };

        function Gb(a, b) {
            a.__AMP_CSS_TR = b
        };

        function Hb(a, b, c) {
            pb(a, "amp-analytics-instrumentation", "amp-analytics").then(function(d) {
                d && d.triggerEventForTarget(a, b, c)
            })
        };
        var Ib;

        function Jb(a, b, c, d) {
            function e(a) {
                try {
                    return k(a)
                } catch (U) {
                    throw self.reportError(U), U;
                }
            }
            var g = a,
                k = c,
                l = Kb(),
                m = !1;
            d && (m = d.capture);
            g.addEventListener(b, e, l ? d : m);
            return function() {
                g && g.removeEventListener(b, e, l ? d : m);
                e = g = k = null
            }
        }

        function Kb() {
            if (void 0 !== Ib) return Ib;
            Ib = !1;
            try {
                var a = {
                    get capture() {
                        Ib = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return Ib
        };

        function Lb(a, b, c, d) {
            var e = {
                detail: c
            };
            Object.assign(e, d);
            if ("function" == typeof a.CustomEvent) return new a.CustomEvent(b, e);
            a = a.document.createEvent("CustomEvent");
            a.initCustomEvent(b, !!e.bubbles, !!e.cancelable, c);
            return a
        }

        function z(a, b, c) {
            return Jb(a, b, c, void 0)
        }

        function Mb(a, b, c, d) {
            var e = c,
                g = Jb(a, b, function(a) {
                    try {
                        e(a)
                    } finally {
                        e = null, g()
                    }
                }, d);
            return g
        }

        function Nb(a) {
            var b, c, d = new Promise(function(b) {
                c = Mb(a, "load", b, void 0)
            });
            d.then(c, c);
            b && b(c);
            return d
        };
        self.AMPErrors = self.AMPErrors || [];
        var Ob;

        function Pb(a) {
            a = a.ownerDocument || a;
            Ob && Ob.ownerDocument === a || (Ob = a.createElement("div"));
            return Qb
        }

        function Qb(a) {
            Ob.innerHTML = a[0];
            var b = Ob.firstElementChild;
            Ob.innerHTML = "";
            return b
        };

        function Rb() {
            this.L = null
        }
        f = Rb.prototype;
        f.add = function(a) {
            var b = this;
            this.L || (this.L = []);
            this.L.push(a);
            return function() {
                b.remove(a)
            }
        };
        f.remove = function(a) {
            this.L && (a = this.L.indexOf(a), -1 < a && this.L.splice(a, 1))
        };
        f.removeAll = function() {
            this.L && (this.L.length = 0)
        };
        f.fire = function(a) {
            if (this.L)
                for (var b = this.L, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        f.getHandlerCount = function() {
            return this.L ? this.L.length : 0
        };

        function Sb(a, b, c) {
            function d(d) {
                k = null;
                g = a.setTimeout(e, c);
                b.apply(null, d)
            }

            function e() {
                g = 0;
                k && d(k)
            }
            var g = 0,
                k = null;
            return function(a) {
                for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
                g ? k = b : d(b)
            }
        }

        function Tb(a, b, c) {
            function d() {
                e = 0;
                var l = c - (a.Date.now() - g);
                if (0 < l) e = a.setTimeout(d, l);
                else {
                    var m = k;
                    k = null;
                    b.apply(null, m)
                }
            }
            var e = 0,
                g = 0,
                k = null;
            return function(b) {
                for (var l = [], r = 0; r < arguments.length; ++r) l[r - 0] = arguments[r];
                g = a.Date.now();
                k = l;
                e || (e = a.setTimeout(d, c))
            }
        };

        function Ub(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };

        function Vb(a, b, c) {
            var d = this;
            this.A = x(a);
            this.jd = b;
            this.bd = c || 0;
            this.Oa = -1;
            this.Lb = 0;
            this.Zb = !1;
            this.Wc = function() {
                return d.nb()
            }
        }
        Vb.prototype.isPending = function() {
            return -1 != this.Oa
        };
        Vb.prototype.schedule = function(a) {
            var b = a || this.bd;
            this.Zb && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.Lb ? (this.cancel(), this.Lb = c, this.Oa = this.A.delay(this.Wc, b), !0) : !1
        };
        Vb.prototype.nb = function() {
            this.Oa = -1;
            this.Lb = 0;
            this.Zb = !0;
            this.jd();
            this.Zb = !1
        };
        Vb.prototype.cancel = function() {
            this.isPending() && (this.A.cancel(this.Oa), this.Oa = -1)
        };

        function Wb(a, b) {
            var c = !1,
                d = a.document,
                e = d.createElement("textarea");
            Cb(e, {
                position: "fixed",
                top: 0,
                left: 0,
                width: "50px",
                height: "50px",
                padding: 0,
                border: "none",
                outline: "none",
                background: "transparent"
            });
            e.value = b;
            e.readOnly = !0;
            e.contentEditable = !0;
            d.body.appendChild(e);
            var g = d.createRange();
            g.selectNode(e);
            a.getSelection().removeAllRanges();
            a.getSelection().addRange(g);
            e.setSelectionRange(0, b.length);
            try {
                c = d.execCommand("copy")
            } catch (k) {}
            Xa(e);
            return c
        };
        /*

         Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
         Use of this source code is governed by a BSD-style
         license that can be found in the LICENSE file or at
         https://developers.google.com/open-source/licenses/bsd
        */
        var $b = {
                strictStyling: !1,
                scopeRules: function(a, b, c) {
                    var d = "";
                    a && Array.prototype.forEach.call(a, function(a) {
                            if (a.selectorText && a.style && void 0 !== a.style.cssText) d += this.scopeSelector(a.selectorText, b, this.strictStyling, c) + " {\n\t", d += this.propertiesFromRule(a) + "\n}\n\n";
                            else if (a.type === CSSRule.MEDIA_RULE) d += "@media " + a.media.mediaText + " {\n", d += this.scopeRules(a.cssRules, b), d += "\n}\n\n";
                            else try {
                                    a.cssText && (d += a.cssText + "\n\n")
                                } catch (g) {
                                    a.type === CSSRule.KEYFRAMES_RULE && a.cssRules && (d += this.ieSafeCssTextFromKeyFrameRule(a))
                                }
                        },
                        this);
                    return d
                },
                ieSafeCssTextFromKeyFrameRule: function(a) {
                    var b = "@keyframes " + a.name + " {";
                    Array.prototype.forEach.call(a.cssRules, function(a) {
                        b += " " + a.keyText + " {" + a.style.cssText + "}"
                    });
                    return b += " }"
                },
                scopeSelector: function(a, b, c, d) {
                    var e = [];
                    a.split(",").forEach(function(a) {
                        a = a.trim();
                        d && (a = d(a));
                        this.selectorNeedsScoping(a, b) && (a = c && !a.match(Xb) ? this.applyStrictSelectorScope(a, b) : this.applySelectorScope(a, b));
                        e.push(a)
                    }, this);
                    return e.join(", ")
                },
                selectorNeedsScoping: function(a, b) {
                    if (Array.isArray(b)) return !0;
                    var c = this.makeScopeMatcher(b);
                    return !a.match(c)
                },
                makeScopeMatcher: function(a) {
                    a = a.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
                    return new RegExp("^(" + a + ")" + Yb, "m")
                },
                applySelectorScope: function(a, b) {
                    return Array.isArray(b) ? this.applySelectorScopeList(a, b) : this.applySimpleSelectorScope(a, b)
                },
                applySelectorScopeList: function(a, b) {
                    for (var c = [], d = 0, e; e = b[d]; d++) c.push(this.applySimpleSelectorScope(a, e));
                    return c.join(", ")
                },
                applySimpleSelectorScope: function(a, b) {
                    return a.match(Zb) ? (a = a.replace(Xb, b), a.replace(Zb,
                        b + " ")) : b + " " + a
                },
                applyStrictSelectorScope: function(a, b) {
                    b = b.replace(/\[is=([^\]]*)\]/g, "$1");
                    var c = [" ", ">", "+", "~"],
                        d = a,
                        e = "[" + b + "]";
                    c.forEach(function(a) {
                        d = d.split(a).map(function(a) {
                            var b = a.trim().replace(Zb, "");
                            b && 0 > c.indexOf(b) && 0 > b.indexOf(e) && (a = b.replace(/([^:]*)(:*)(.*)/, "$1" + e + "$2$3"));
                            return a
                        }).join(a)
                    });
                    return d
                },
                propertiesFromRule: function(a) {
                    var b = a.style.cssText;
                    a.style.content && !a.style.content.match(/['"]+|attr/) && (b = b.replace(/content:[^;]*;/g, "content: '" + a.style.content + "';"));
                    a = a.style;
                    for (var c in a) "initial" === a[c] && (b += c + ": initial; ");
                    return b
                }
            },
            Yb = "([>\\s~+[.,{:][\\s\\S]*)?$",
            Xb = "-shadowcsshost-no-combinator",
            Zb = /-shadowcsshost/gim;
        var ac, bc;

        function cc(a) {
            return !!a && -1 != a.toString().indexOf("[native code]")
        }

        function dc() {
            var a;
            if (void 0 === ac) {
                var b = a || Element;
                ac = b.prototype.attachShadow ? "v1" : b.prototype.createShadowRoot ? "v0" : "none"
            }
            return ac
        };
        var ec = /[^\.\-\_0-9a-zA-Z]/,
            fc = /[^\-\_0-9a-zA-Z]/;

        function gc(a) {
            var b = a.ownerDocument.defaultView,
                c = a.shadowRoot || a.__AMP_SHADOW_ROOT;
            if (c) return c.innerHTML = "", c;
            var d, e = dc();
            "v1" == e ? (d = a.attachShadow({
                mode: "open"
            }), d.styleSheets || Object.defineProperty(d, "styleSheets", {
                get: function() {
                    var a = [];
                    ib(d.childNodes, function(b) {
                        "STYLE" === b.tagName && a.push(b.sheet)
                    });
                    return a
                }
            })) : d = "v0" == e ? a.createShadowRoot() : hc(a);
            void 0 === bc && (bc = "none" != dc() && (cc(Element.prototype.attachShadow) || cc(Element.prototype.createShadowRoot)));
            if (!bc) {
                var g = "i-amphtml-sd-" +
                    b.Math.floor(1E4 * b.Math.random());
                d.id = g;
                d.host.classList.add(g);
                Gb(d, function(a) {
                    var b;
                    var c = d;
                    b = a;
                    var e = c.id,
                        c = c.ownerDocument,
                        g = null;
                    try {
                        g = ic(c.implementation.createHTMLDocument(""), b)
                    } catch (La) {}
                    if (!g) try {
                        g = ic(c, b)
                    } catch (La) {}
                    b = g ? $b.scopeRules.call($b, g, "." + e, jc) : b;
                    return b
                })
            }
            return d
        }

        function hc(a) {
            var b = a.ownerDocument;
            a.classList.add("i-amphtml-shadow-host-polyfill");
            var c = b.createElement("style");
            c.textContent = ".i-amphtml-shadow-host-polyfill>:not(i-amphtml-shadow-root){display:none!important}";
            a.appendChild(c);
            var d = b.createElement("i-amphtml-shadow-root");
            a.appendChild(d);
            a.shadowRoot = a.__AMP_SHADOW_ROOT = d;
            d.host = a;
            d.getElementById = function(a) {
                var b = String(a).replace(Sa, Ta);
                return d.querySelector("#" + b)
            };
            Object.defineProperty(d, "styleSheets", {
                get: function() {
                    return b.styleSheets ?
                        ga(b.styleSheets).filter(function(a) {
                            return d.contains(a.ownerNode)
                        }) : []
                }
            });
            return d
        }

        function jc(a) {
            return a.replace(/(html|body)/g, kc)
        }

        function kc(a, b, c, d) {
            var e = d.charAt(c - 1),
                g = d.charAt(c + a.length);
            return e && !ec.test(e) || g && !fc.test(g) ? a : "amp-" + a
        }

        function ic(a, b) {
            var c = a.createElement("style");
            c.textContent = b;
            try {
                return (a.head || a.documentElement).appendChild(c), c.sheet ? c.sheet.cssRules : null
            } finally {
                c.parentNode && c.parentNode.removeChild(c)
            }
        };

        function lc(a) {
            this.Ab = mc(a.win, a)
        }

        function mc(a, b) {
            var c = v(a, "extensions");
            a = u(b);
            return c.installExtensionForDoc(a, "amp-video-service").then(function() {
                return ob(b, "video-service", "amp-video-service")
            })
        }
        lc.prototype.register = function(a, b) {
            b = void 0 === b ? !0 : b;
            this.Ab.then(function(b) {
                return b.register(a)
            })
        };
        lc.prototype.delegateAutoplay = function(a, b) {
            var c = b = void 0 === b ? null : b;
            this.Ab.then(function(b) {
                return b.delegateAutoplay(a, c)
            })
        };
        lc.prototype.getAnalyticsDetails = function(a) {
            return this.Ab.then(function(b) {
                return b.getAnalyticsDetails(a)
            })
        };

        function nc() {
            this.hb = !1;
            this.Ac = new Rb
        }
        nc.prototype.onSessionEnd = function(a) {
            this.Ac.add(a)
        };
        nc.prototype.beginSession = function() {
            this.hb = !0
        };
        nc.prototype.endSession = function() {
            this.hb && this.Ac.fire();
            this.hb = !1
        };
        nc.prototype.isSessionActive = function() {
            return this.hb
        };

        function oc(a) {
            var b = !1,
                c = null;
            return function(d) {
                for (var e = [], g = 0; g < arguments.length; ++g) e[g - 0] = arguments[g];
                b || (c = a.apply(self, e), b = !0, a = null);
                return c
            }
        };

        function pc(a, b) {
            if (b) return Promise.resolve(!1);
            var c = a.document.createElement("video");
            c.setAttribute("muted", "");
            c.setAttribute("playsinline", "");
            c.setAttribute("webkit-playsinline", "");
            c.setAttribute("height", "0");
            c.setAttribute("width", "0");
            c.muted = !0;
            c.playsinline = !0;
            c.webkitPlaysinline = !0;
            Cb(c, {
                position: "fixed",
                top: "0",
                width: "0",
                height: "0",
                opacity: "0"
            });
            (new Promise(function() {
                return c.play()
            })).catch(function() {});
            return Promise.resolve(!c.paused)
        }
        var qc = null;
        var rc = {
            title: "",
            artist: "",
            album: "",
            artwork: [{
                src: ""
            }]
        };

        function sc(a, b, c, d) {
            var e = a.navigator;
            "mediaSession" in e && a.MediaMetadata && (e.mediaSession.metadata = new a.MediaMetadata(rc), tc(b), e.mediaSession.metadata = new a.MediaMetadata(b), e.mediaSession.setActionHandler("play", c), e.mediaSession.setActionHandler("pause", d))
        }

        function uc(a) {
            var b = a.querySelector('script[type="application/ld+json"]');
            if (b) {
                var c = Da(b.textContent);
                if (c && c.image) {
                    if ("string" === typeof c.image) return c.image;
                    if (c.image["@list"] && "string" === typeof c.image["@list"][0]) return c.image["@list"][0];
                    if ("string" === typeof c.image.url) return c.image.url;
                    if ("string" === typeof c.image[0]) return c.image[0]
                }
            }
        }

        function tc(a) {
            a && a.artwork && (Array.isArray(a.artwork), a.artwork.forEach(function(a) {
                if (a) {
                    var b = ha(a) ? a.src : a;
                    n().assert(Ca(b))
                }
            }))
        };

        function vc(a) {
            var b = this;
            this.ampdoc = a;
            this.Uc = rb(this.ampdoc);
            this.I = null;
            this.Nc = !1;
            this.A = x(a.win);
            this.Vc = Ea(a, "action");
            this.rc = function() {
                for (var a = 0; a < b.I.length; a++) {
                    var d = b.I[a];
                    if ("paused" !== d.getPlayingState()) {
                        wc(d, "video-seconds-played");
                        var e = d.video.getCurrentTime(),
                            g = d.video.getDuration();
                        ia(e) && ia(g) && 0 < g && (e = Lb(b.ampdoc.win, "video-manager.timeUpdate", {
                            time: e,
                            percent: e / g
                        }), b.Vc.trigger(d.video.element, "timeUpdate", e, 1))
                    }
                }
                b.A.delay(b.rc, 1E3)
            };
            this.hd = oc(function() {
                return new xc(b.ampdoc)
            });
            this.A.delay(this.rc, 1E3)
        }
        f = vc.prototype;
        f.register = function(a) {
            yc(a);
            a.supportsPlatform() && (this.I = this.I || [], a = new zc(this, a), Ac(this, a), this.I.push(a), a = a.video.element, a.dispatchCustomEvent("registered"), a.signals().signal("registered"), a.classList.add("i-amphtml-video-interface"))
        };
        f.delegateAutoplay = function(a) {
            var b = this;
            a.signals().whenSignal("registered").then(function() {
                b.na(a).delegateAutoplay()
            })
        };

        function yc(a) {
            var b = a,
                c = null;
            b.registerAction("play", function() {
                return a.play(!1)
            }, 1);
            b.registerAction("pause", function() {
                return a.pause()
            }, 1);
            b.registerAction("mute", function() {
                return a.mute()
            }, 1);
            b.registerAction("unmute", function() {
                return a.unmute()
            }, 1);
            b.registerAction("fullscreen", function() {
                return a.fullscreenEnter()
            }, 1)
        }

        function Ac(a, b) {
            var c = b.video.element;
            z(c, "amp:video:visibility", function(a) {
                var c = a.data;
                c && 1 == c.visible ? b.updateVisibility(!0) : b.updateVisibility()
            });
            z(c, "reloaded", function() {
                b.videoLoaded()
            });
            if (!a.Nc) {
                var d = function() {
                    for (var b = 0; b < a.I.length; b++) a.I[b].updateVisibility()
                };
                a.Uc.onScroll(d);
                a.Uc.onChanged(d);
                a.Nc = !0
            }
        }

        function Bc(a, b) {
            for (var c = 0; c < a.I.length; c++)
                if (a.I[c].video === b) return a.I[c];
            p().error("video-manager", "video is not registered to this video manager");
            return null
        }
        f.na = function(a) {
            for (var b = 0; b < this.I.length; b++) {
                var c = this.I[b];
                if (c.video.element === a) return c
            }
            p().error("video-manager", "video is not registered to this video manager");
            return null
        };
        f.getAnalyticsDetails = function(a) {
            return (a = this.na(a)) ? a.getAnalyticsDetails() : Promise.resolve()
        };
        f.getPlayingState = function(a) {
            return Bc(this, a).getPlayingState()
        };
        f.userInteractedWithAutoPlay = function(a) {
            return Bc(this, a).userInteractedWithAutoPlay()
        };
        f.registerForAutoFullscreen = function(a) {
            this.hd().register(a)
        };

        function zc(a, b) {
            var c = this;
            this.ra = a;
            this.w = a.ampdoc;
            this.video = b;
            this.jc = !0;
            this.W = this.ea = this.Dc = !1;
            this.yb = new nc;
            this.yb.onSessionEnd(function() {
                return wc(c, "video-session")
            });
            this.ya = new nc;
            this.ya.onSessionEnd(function() {
                return wc(c, "video-session-visible")
            });
            this.dc = function() {
                var a = c.w.win,
                    b = ea(a).lite;
                qc || (qc = oc(pc));
                return qc(a, b)
            };
            this.Pb = this.Ic = this.tb = !1;
            this.Hb = null;
            this.Kb = !1;
            this.hasAutoplay = b.element.hasAttribute("autoplay");
            this.fa = rc;
            Nb(b.element).then(function() {
                return c.videoLoaded()
            });
            z(b.element, "pause", function() {
                wc(c, "video-pause");
                c.ea = !1;
                c.Pb ? c.Pb = !1 : c.yb.endSession()
            });
            z(b.element, "playing", function() {
                return Cc(c)
            });
            z(b.element, "muted", function() {
                return c.Kb = !0
            });
            z(b.element, "unmuted", function() {
                return c.Kb = !1
            });
            z(b.element, "ended", function() {
                wc(c, "video-ended")
            });
            b.element.signals().whenSignal("registered").then(function() {
                var a = c.video.element;
                (c.video.preimplementsAutoFullscreen() || !a.hasAttribute("rotate-to-fullscreen") ? 0 : n().assert(c.video.isInteractive(), "Only interactive videos are allowed to enter fullscreen on rotate.",
                    "Set the `controls` attribute on %s to enable.", a)) && c.ra.registerForAutoFullscreen(c);
                c.updateVisibility();
                c.hasAutoplay && Dc(c)
            })
        }
        f = zc.prototype;
        f.delegateAutoplay = function() {
            this.jc = !1;
            this.ea && this.video.pause()
        };

        function Cc(a) {
            a.ea = !0;
            a.video.preimplementsMediaSessionAPI() || sc(a.w.win, a.fa, function() {
                a.video.play(!1)
            }, function() {
                a.video.pause()
            });
            a.yb.beginSession();
            a.W && a.ya.beginSession();
            wc(a, "video-play")
        }
        f.videoLoaded = function() {
            this.Dc = !0;
            this.Hb = this.video.element.querySelector("video, iframe");
            if (!this.video.preimplementsMediaSessionAPI()) {
                this.video.getMetadata() && (this.fa = la(this.video.getMetadata()));
                var a = this.w.win.document;
                if (!this.fa.artwork || 0 == this.fa.artwork.length) {
                    var b;
                    (b = uc(a)) || (b = (b = a.querySelector('meta[property="og:image"]')) ? b.getAttribute("content") : void 0);
                    b || (b = (b = a.querySelector('link[rel="shortcut icon"]') || a.querySelector('link[rel="icon"]')) ? b.getAttribute("href") : void 0);
                    b && (this.fa.artwork = [{
                        src: b
                    }])
                }!this.fa.title && (a = this.video.element.getAttribute("title") || this.video.element.getAttribute("aria-label") || this.Hb.getAttribute("title") || this.Hb.getAttribute("aria-label") || a.title) && (this.fa.title = a)
            }
            this.updateVisibility();
            this.W && Ec(this)
        };

        function Ec(a) {
            Ha(a.w, "viewer").isVisible() && a.dc().then(function(b) {
                var c = a.hasAutoplay && !a.tb;
                c && b ? a.jc && (a.W ? (a.ya.beginSession(), a.video.play(!0), a.Ic = !0) : (a.ea && a.ya.endSession(), a.video.pause(), a.Pb = !0)) : a.W ? a.ya.beginSession() : a.ea && a.ya.endSession()
            })
        }

        function Dc(a) {
            a.video.isInteractive() && a.video.hideControls();
            a.dc().then(function(b) {
                !b && a.video.isInteractive() ? a.video.showControls() : (a.video.mute(), a.video.isInteractive() && Fc(a))
            })
        }

        function Fc(a) {
            function b(b) {
                a.video.mutateElement(function() {
                    g.classList.toggle("amp-video-eq-play", b)
                })
            }

            function c() {
                this.tb = !0;
                this.video.showControls();
                this.video.unmute();
                l.forEach(function(a) {
                    a()
                });
                Xa(g);
                Xa(k)
            }

            function d() {
                Cb(k, {
                    display: "none"
                })
            }

            function e() {
                Cb(k, {
                    display: "block"
                })
            }
            a.video.hideControls();
            var g = Gc(a),
                k = Hc(a);
            a.video.mutateElement(function() {
                a.video.element.appendChild(g);
                a.video.element.appendChild(k)
            });
            var l = [];
            l.push(z(k, "click", c.bind(a)));
            l.push(z(g, "click", c.bind(a)));
            l.push(z(a.video.element,
                "pause", b.bind(a, !1)));
            l.push(z(a.video.element, "playing", b.bind(a, !0)));
            l.push(z(a.video.element, "ad_start", d.bind(a)));
            l.push(z(a.video.element, "ad_end", e.bind(a)))
        }

        function Gc(a) {
            var b = a.w.win.document,
                c = b.createElement("i-amphtml-video-eq");
            c.classList.add("amp-video-eq");
            for (var d = 1; 4 >= d; d++) {
                var e = b.createElement("div");
                e.classList.add("amp-video-eq-col");
                for (var g = 1; 2 >= g; g++) {
                    var k = b.createElement("div");
                    k.classList.add("amp-video-eq-" + d + "-" + g);
                    e.appendChild(k)
                }
                c.appendChild(e)
            }
            var l = w(a.w.win);
            l.isIos() && c.setAttribute("unpausable", "");
            return c
        }

        function Hc(a) {
            a = a.w.win.document.createElement("i-amphtml-video-mask");
            a.classList.add("i-amphtml-fill-content");
            return a
        }
        f.updateVisibility = function(a) {
            var b = this,
                c = this.W;
            this.video.measureMutateElement(function() {
                if (1 == a) b.W = !0;
                else {
                    var c = b.video.element.getIntersectionChangeEntry(),
                        e = ia(c.intersectionRatio) ? 100 * c.intersectionRatio : 0;
                    b.W = 75 <= e
                }
            }, function() {
                b.W != c && (b.Dc && Ec(b), b.video.element.dispatchCustomEvent("amp:visibilitychanged"))
            })
        };
        f.getPlayingState = function() {
            return this.ea ? this.ea && this.Ic && !this.tb ? "playing_auto" : "playing_manual" : "paused"
        };
        f.userInteractedWithAutoPlay = function() {
            return this.tb
        };
        f.getAnalyticsDetails = function() {
            var a = this,
                b = this.video;
            return this.dc().then(function(c) {
                var d = b.element.getLayoutBox(),
                    e = d.width,
                    d = d.height,
                    g = a.hasAutoplay && c,
                    k = b.getPlayedRanges(),
                    l = k.reduce(function(a, b) {
                        return a + b[1] - b[0]
                    }, 0);
                return {
                    autoplay: g,
                    currentTime: b.getCurrentTime(),
                    duration: b.getDuration(),
                    height: d,
                    id: b.element.id,
                    muted: a.Kb,
                    playedTotal: l,
                    playedRangesJson: JSON.stringify(k),
                    state: a.getPlayingState(),
                    width: e
                }
            })
        };

        function xc(a) {
            var b = this,
                c = a.win;
            this.w = a;
            this.sd = 0;
            this.h = c;
            this.Za = this.Ca = null;
            this.vb = [];
            this.I = {};
            this.Hd = oc(function() {
                return rb(a).onScroll(Sb(b.w.win, function() {
                    Ic(b.w.win) || Jc(b)
                }, 300))
            });
            Kc(this);
            Lc(this)
        }
        xc.prototype.register = function(a) {
            var b = this;
            if (Mc(this, a.video.element)) {
                var c = this.sd++,
                    d = a.video.element;
                d.__AMP_AUTO_FULLSCREEN_ID__ = c.toString();
                this.I[c.toString()] = a;
                z(d, "amp:visibilitychanged", function(a) {
                    Ic(b.w.win) || Nc(b, a.target)
                });
                this.Hd();
                Nc(this, d)
            }
        };

        function Lc(a) {
            function b() {
                a.Ca = null
            }
            var c = a.w.getRootNode();
            z(c, "webkitfullscreenchange", b);
            z(c, "mozfullscreenchange", b);
            z(c, "fullscreenchange", b);
            z(c, "MSFullscreenChange", b)
        }

        function Mc(a, b) {
            var c = b.querySelector("video, iframe");
            if ("video" == c.tagName.toLowerCase()) return !0;
            a = w(a.w.win);
            return a.isIos() || a.isSafari() ? "amp-dailymotion" == b.tagName.toLowerCase() : !0
        }

        function Kc(a) {
            var b = a.w.win,
                c = b.screen;
            if (c && "orientation" in c) {
                var d = c.orientation;
                z(d, "change", function() {
                    return Oc(a)
                })
            }
            z(b, "orientationchange", function() {
                return Oc(a)
            })
        }

        function Oc(a) {
            Ic(a.w.win) ? a.Za && Pc(a, a.na(a.Za)) : a.Ca && Qc(a, a.Ca)
        }

        function Pc(a, b) {
            var c = b.video;
            if ("playing_manual" === b.getPlayingState()) {
                var d = w(a.h);
                a.Ca = b;
                d.isAndroid() && d.isChrome() ? c.fullscreenEnter() : Rc(a, c).then(function() {
                    return c.fullscreenEnter()
                })
            }
        }

        function Qc(a, b) {
            a.Ca = null;
            var c = b.video;
            Rc(a, c, "center").then(function() {
                return c.fullscreenExit()
            })
        }

        function Rc(a, b, c) {
            c = void 0 === c ? null : c;
            var d = b.element,
                e = rb(a.w),
                g = "ease-in";
            return Sc(a).then(function() {
                var a = d.getIntersectionChangeEntry().boundingClientRect,
                    b = a,
                    m = b.top,
                    b = b.bottom,
                    r = e.getSize().height,
                    U = 0 <= m && b <= r;
                return U ? Promise.resolve() : e.animateScrollIntoView(d, 300, g, c ? c : b > r ? "bottom" : "top")
            })
        }

        function Sc(a) {
            var b = 330;
            return x(a.h).promise(b)
        }

        function Nc(a, b) {
            var c = b.getIntersectionChangeEntry(),
                d = .75 < c.intersectionRatio,
                e = a.vb.indexOf(b);
            d ? (0 > e && a.vb.push(b), Jc(a)) : 0 <= e && a.vb.splice(e, 1)
        }

        function Jc(a) {
            a.Za = null;
            a.vb.map(function(a) {
                return Object.assign({
                    target: a
                }, a.getIntersectionChangeEntry())
            }).sort(function(b, c) {
                return Tc(a, b, c)
            }).forEach(function(b, c) {
                .8 <= b.intersectionRatio && 0 == c && (a.Za = b.target)
            })
        }

        function Tc(a, b, c) {
            var d = a.na(b.target).getPlayingState(),
                e = a.na(c.target).getPlayingState();
            if ("playing_manual" == d && "playing_manual" != e) return -1;
            if ("playing_manual" != d && "playing_manual" == e) return 1;
            var g = .1,
                k = b.intersectionRatio - c.intersectionRatio;
            if (k < -g) return -1;
            if (k > g) return 1;
            a = rb(a.w);
            var l = Uc(a, b.boundingClientRect),
                m = Uc(a, c.boundingClientRect);
            if (l < m) return -1;
            if (l > m) return 1;
            var r = b.boundingClientRect.top - c.boundingClientRect.top;
            return 0 > r ? -1 : 0 < r ? 1 : 0
        }
        xc.prototype.na = function(a) {
            return this.I[a.__AMP_AUTO_FULLSCREEN_ID__]
        };

        function Uc(a, b) {
            var c = b.top + b.height / 2,
                d = a.getSize().height / 2;
            return Math.abs(c - d)
        }

        function Ic(a) {
            return a.screen && "orientation" in a.screen ? pa(a.screen.orientation.type, "landscape") : 90 == Math.abs(a.orientation)
        }

        function wc(a, b) {
            var c = a.video,
                d = a.getAnalyticsDetails();
            d.then(function(a) {
                c.element.dispatchCustomEvent(b, a)
            })
        }

        function Vc(a) {
            Ka(a, function(a) {
                return ub(a.win, "video-service") ? new lc(a) : new vc(a)
            })
        };

        function Wc(a, b, c, d) {
            this.type = a;
            this.data = b;
            this.time = c;
            this.event = d
        }

        function Xc(a, b) {
            this.l = a;
            this.C = [];
            this.ua = [];
            this.N = [];
            this.D = [];
            this.K = null;
            this.Ed = b;
            this.xb = !1;
            this.nb = new Vb(a.ownerDocument.defaultView, this.yc.bind(this));
            this.Jc = new Rb;
            this.Ka = Object.create(null);
            this.qc = this.xd.bind(this);
            this.oc = this.vd.bind(this);
            this.pc = this.wd.bind(this);
            this.nc = this.ud.bind(this);
            this.l.addEventListener("touchstart", this.qc);
            this.l.addEventListener("touchend", this.oc);
            this.l.addEventListener("touchmove", this.pc);
            this.l.addEventListener("touchcancel", this.nc);
            this.Ob = !1
        }

        function Yc(a) {
            var b = !0,
                b = void 0 === b ? !1 : b,
                c = a.__AMP_Gestures;
            c || (c = new Xc(a, b), a.__AMP_Gestures = c);
            return c
        }
        f = Xc.prototype;
        f.cleanup = function() {
            this.l.removeEventListener("touchstart", this.qc);
            this.l.removeEventListener("touchend", this.oc);
            this.l.removeEventListener("touchmove", this.pc);
            this.l.removeEventListener("touchcancel", this.nc);
            delete this.l.__AMP_Gestures;
            this.nb.cancel()
        };
        f.onGesture = function(a, b) {
            var c = new a(this),
                d = c.getType(),
                e = this.Ka[d];
            e || (this.C.push(c), e = new Rb, this.Ka[d] = e);
            return e.add(b)
        };
        f.removeGesture = function(a) {
            var b = (new a(this)).getType();
            if (a = this.Ka[b]) {
                a.removeAll();
                a = Ub(this.C, function(a) {
                    return a.getType() == b
                });
                if (0 > a) return !1;
                this.C.splice(a, 1);
                this.N.splice(a, 1);
                this.D.splice(a, 1);
                this.ua.splice(a, 1);
                delete this.Ka[b];
                return !0
            }
            return !1
        };
        f.onPointerDown = function(a) {
            return this.Jc.add(a)
        };
        f.xd = function(a) {
            var b = Date.now();
            this.xb = !1;
            this.Jc.fire(a);
            for (var c = 0; c < this.C.length; c++)
                if (!this.N[c] && (this.D[c] && this.D[c] < b && Zc(this, c), this.C[c].onTouchStart(a))) {
                    var d = c;
                    this.ua[d] = !0;
                    this.D[d] = 0
                }
            $c(this, a)
        };
        f.wd = function(a) {
            for (var b = Date.now(), c = 0; c < this.C.length; c++) this.ua[c] && (this.D[c] && this.D[c] < b ? Zc(this, c) : this.C[c].onTouchMove(a) || Zc(this, c));
            $c(this, a)
        };
        f.vd = function(a) {
            for (var b = Date.now(), c = 0; c < this.C.length; c++) this.ua[c] && (this.D[c] && this.D[c] < b ? Zc(this, c) : (this.C[c].onTouchEnd(a), (!this.D[c] || this.D[c] < b) && Zc(this, c)));
            $c(this, a)
        };
        f.ud = function(a) {
            for (var b = 0; b < this.C.length; b++) {
                var c = b;
                this.N[c] = 0;
                Zc(this, c)
            }
            $c(this, a)
        };

        function $c(a, b) {
            var c = !!a.K || a.xb;
            a.xb = !1;
            if (!c)
                for (var d = Date.now(), e = 0; e < a.C.length; e++)
                    if (a.N[e] || a.D[e] && a.D[e] >= d) {
                        c = !0;
                        break
                    }
            c && (b.stopPropagation(), a.Ed || b.preventDefault());
            a.Ob && (a.Ob = !1, a.yc())
        }
        f.yc = function() {
            for (var a = Date.now(), b = -1, c = 0; c < this.C.length; c++)
                if (!this.N[c]) this.D[c] && this.D[c] < a && Zc(this, c);
                else if (-1 == b || this.N[c] > this.N[b]) b = c;
            if (-1 != b) {
                for (var d = 0, c = 0; c < this.C.length; c++) !this.N[c] && this.ua[c] && (d = Math.max(d, this.D[c] - a));
                if (2 > d) {
                    for (var a = b, c = this.C[a], e = 0; e < this.C.length; e++)
                        if (e != a) {
                            var g = e;
                            this.N[g] = 0;
                            Zc(this, g)
                        }
                    this.N[a] = 0;
                    this.D[a] = 0;
                    this.K = c;
                    c.acceptStart()
                } else this.nb.schedule(d)
            }
        };

        function Zc(a, b) {
            a.ua[b] = !1;
            a.D[b] = 0;
            a.N[b] || a.C[b].acceptCancel()
        }

        function ad(a, b) {
            this.Id = a;
            this.ra = b
        }
        f = ad.prototype;
        f.getType = function() {
            return this.Id
        };
        f.signalReady = function(a) {
            var b = this.ra;
            if (b.K) this.acceptCancel();
            else {
                for (var c = Date.now(), d = 0; d < b.C.length; d++) b.C[d] == this && (b.N[d] = c + a, b.D[d] = 0);
                b.Ob = !0
            }
        };
        f.signalPending = function(a) {
            var b = this.ra;
            if (b.K) this.acceptCancel();
            else
                for (var c = Date.now(), d = 0; d < b.C.length; d++) b.C[d] == this && (b.D[d] = c + a)
        };
        f.signalEnd = function() {
            var a = this.ra;
            a.K == this && (a.K = null, a.xb = !0)
        };
        f.signalEmit = function(a, b) {
            var c = this.ra.Ka[this.getType()];
            c && c.fire(new Wc(this.getType(), a, Date.now(), b))
        };
        f.acceptStart = function() {};
        f.acceptCancel = function() {};
        f.onTouchStart = function() {
            return !1
        };
        f.onTouchMove = function() {
            return !1
        };
        f.onTouchEnd = function() {};

        function bd(a, b, c) {
            1 > b && (b = 1);
            var d = a / b,
                e = .5 + Math.min(b / 33.34, .5);
            return d * e + c * (1 - e)
        };

        function cd(a) {
            ad.call(this, "doubletap", a);
            this.Ua = this.P = this.O = this.ca = this.ba = 0;
            this.Bc = null
        }
        h(cd, ad);
        f = cd.prototype;
        f.onTouchStart = function(a) {
            return 1 < this.Ua ? !1 : (a = a.touches) && 1 == a.length ? (this.ba = a[0].clientX, this.ca = a[0].clientY, this.O = a[0].clientX, this.P = a[0].clientY, !0) : !1
        };
        f.onTouchMove = function(a) {
            return (a = a.touches) && 1 == a.length ? (this.O = a[0].clientX, this.P = a[0].clientY, a = 8 <= Math.abs(this.P - this.ca), 8 <= Math.abs(this.O - this.ba) || a ? (this.acceptCancel(), !1) : !0) : !1
        };
        f.onTouchEnd = function(a) {
            this.Ua++;
            2 > this.Ua ? this.signalPending(300) : (this.Bc = a, this.signalReady(0))
        };
        f.acceptStart = function() {
            this.Ua = 0;
            this.signalEmit({
                clientX: this.O,
                clientY: this.P
            }, this.Bc);
            this.signalEnd()
        };
        f.acceptCancel = function() {
            this.Ua = 0
        };

        function dd(a, b, c, d) {
            ad.call(this, a, b);
            this.gb = c;
            this.ub = d;
            this.K = !1;
            this.xa = this.wa = this.Tb = this.ib = this.Qc = this.Vb = this.Ub = this.P = this.O = this.ca = this.ba = 0
        }
        h(dd, ad);
        f = dd.prototype;
        f.onTouchStart = function(a) {
            return (a = a.touches) && 1 == a.length ? (this.Qc = Date.now(), this.ba = a[0].clientX, this.ca = a[0].clientY, !0) : !1
        };
        f.onTouchMove = function(a) {
            var b = a.touches;
            if (b && 1 == b.length) {
                var c = b[0].clientX,
                    b = b[0].clientY;
                this.O = c;
                this.P = b;
                if (this.K) ed(this, !1, !1, a);
                else if (a = Math.abs(c - this.ba), c = Math.abs(b - this.ca), this.gb && this.ub)(8 <= a || 8 <= c) && this.signalReady(-10);
                else if (this.gb)
                    if (8 <= a && a > c) this.signalReady(-10);
                    else {
                        if (8 <= c) return !1
                    }
                else if (this.ub)
                    if (8 <= c && c > a) this.signalReady(-10);
                    else {
                        if (8 <= a) return !1
                    }
                else return !1;
                return !0
            }
            return !1
        };
        f.onTouchEnd = function(a) {
            this.K && (this.K = !1, ed(this, !1, !0, a), this.signalEnd())
        };
        f.acceptStart = function() {
            this.K = !0;
            this.Ub = this.ba;
            this.Vb = this.ca;
            this.Tb = this.Qc;
            this.ba = this.O;
            this.ca = this.P;
            ed(this, !0, !1, null)
        };
        f.acceptCancel = function() {
            this.K = !1
        };

        function ed(a, b, c, d) {
            a.ib = Date.now();
            var e = a.ib - a.Tb;
            if (!c && 4 < e || c && 16 < e) a.wa = bd(a.O - a.Ub, e, a.wa), a.xa = bd(a.P - a.Vb, e, a.xa), a.wa = 1E-4 < Math.abs(a.wa) ? a.wa : 0, a.xa = 1E-4 < Math.abs(a.xa) ? a.xa : 0, a.Ub = a.O, a.Vb = a.P, a.Tb = a.ib;
            a.signalEmit({
                first: b,
                last: c,
                time: a.ib,
                deltaX: a.gb ? a.O - a.ba : 0,
                deltaY: a.ub ? a.P - a.ca : 0,
                velocityX: a.gb ? a.wa : 0,
                velocityY: a.ub ? a.xa : 0
            }, d)
        }

        function fd(a) {
            dd.call(this, "swipe-xy", a, !0, !0)
        }
        h(fd, dd);

        function gd(a) {
            return AMP.BaseElement.call(this, a) || this
        }
        h(gd, AMP.BaseElement);
        gd.prototype.isLayoutSupported = function(a) {
            return "container" == a
        };
        gd.prototype.buildCallback = function() {
            this.element.classList.add("i-amphtml-story-layer")
        };

        function hd(a) {
            return gd.apply(this, arguments) || this
        }
        h(hd, gd);
        hd.prototype.prerenderAllowed = function() {
            return !1
        };
        hd.prototype.buildCallback = function() {
            gd.prototype.buildCallback.call(this);
            for (var a = this.element.querySelectorAll("a"), b = 0; b < a.length; b++) Ya(a[b], q({
                target: "_blank"
            })), a[b].getAttribute("role") || Ya(a[b], q({
                role: "link"
            }));
            a = this.element.querySelectorAll("button");
            for (b = 0; b < a.length; b++) a[b].getAttribute("role") || Ya(a[b], q({
                role: "button"
            }));
            cb(this.element, "amp-story-page:first-of-type > amp-story-cta-layer") && (Xa(this.element), n().error("amp-story-cta-layer", "amp-story-cta-layer is not allowed on the first page of an amp-story."))
        };
        var id = {
                "align-content": "alignContent",
                "align-items": "alignItems",
                "align-self": "alignSelf",
                "grid-area": "gridArea",
                "justify-content": "justifyContent",
                "justify-items": "justifyItems",
                "justify-self": "justifySelf"
            },
            jd = Object.keys(id).map(function(a) {
                return "[" + a + "]"
            }).join(","),
            kd = {
                fill: "i-amphtml-story-grid-template-fill",
                vertical: "i-amphtml-story-grid-template-vertical",
                horizontal: "i-amphtml-story-grid-template-horizontal",
                thirds: "i-amphtml-story-grid-template-thirds"
            };

        function ld(a) {
            a = gd.call(this, a) || this;
            a.Rb = cb(a.element, "amp-story-page:first-of-type amp-story-grid-layer");
            return a
        }
        h(ld, gd);
        ld.prototype.buildCallback = function() {
            gd.prototype.buildCallback.call(this);
            if (this.element.hasAttribute("template")) {
                var a = this.element.getAttribute("template");
                this.element.classList.add(kd[a])
            }
            md(this.element);
            nd(this)
        };
        ld.prototype.prerenderAllowed = function() {
            return this.Rb
        };

        function nd(a) {
            var b = hb(a.element, jd);
            Array.prototype.forEach.call(b, function(a) {
                md(a)
            })
        }

        function md(a) {
            for (var b = a.attributes.length - 1; 0 <= b; b--) {
                var c = a.attributes[b],
                    d = c.name.toLowerCase(),
                    e = id[d];
                e && (Bb(a, e, c.value), a.removeAttribute(d))
            }
        };
        var od = /\w+/gi;

        function pd(a) {
            var b = a.match(od) || [];
            return b.reduce(function(a, d, e) {
                var c = b.slice(0, e + 1).join("-").toLowerCase();
                a.unshift(c);
                return a
            }, ["default"])
        }

        function qd(a, b, c) {
            var d = null;
            b.some(function(b) {
                var e = a[b];
                return e && e[c] && e[c].string ? (d = e[c].string, !0) : !1
            });
            return d
        }

        function rd(a) {
            var b = sd,
                c = JSON.parse(JSON.stringify(b));
            Object.keys(c).forEach(function(d) {
                var e = d;
                c[e].string = a(b[e].string)
            });
            return c
        }

        function td(a) {
            var b = a.document.documentElement;
            this.Cd = ud(b);
            this.kb = {}
        }

        function ud(a) {
            var b = ab(a, function(a) {
                return a.hasAttribute("lang")
            });
            a = b ? b.getAttribute("lang") : null;
            return pd(a || "")
        }
        td.prototype.registerLocalizedStringBundle = function(a, b) {
            this.kb[a] || (this.kb[a] = {});
            Object.assign(this.kb[a], b);
            return this
        };
        td.prototype.getLocalizedString = function(a, b) {
            var c = b ? ud(b) : this.Cd;
            return qd(this.kb, c, a)
        };
        var vd = {
            NOT_EMBEDDED: 0,
            NAME_TBD: 1,
            NO_SHARING: 2
        };

        function wd(a, b, c) {
            switch (b) {
                case "togglead":
                    var d = {};
                    return Object.assign({}, a, (d.adstate = !!c, d));
                case "togglebookend":
                    if (!a.canshowbookend) return a;
                    d = {};
                    return Object.assign({}, a, (d.bookendstate = !!c, d));
                case "toggledesktop":
                    return d = {}, Object.assign({}, a, (d.desktopstate = !!c, d));
                case "togglehasaudio":
                    return d = {}, Object.assign({}, a, (d.hasaudiostate = !!c, d));
                case "togglelandscape":
                    return d = {}, Object.assign({}, a, (d.landscapestate = !!c, d));
                case "togglemuted":
                    return d = {}, Object.assign({}, a, (d.mutedstate = !!c, d));
                case "togglesupportedbrowser":
                    return c && p().error("amp-story", "Cannot exit unsupported browser state."), c = {}, Object.assign({}, a, (c.caninsertautomaticad = !1, c.canshowbookend = !1, c.canshownavigationoverlayhint = !1, c.canshowpreviouspagehelp = !1, c.canshowsystemlayerbuttons = !1, c.bookendstate = !1, c.desktopstate = !1, c.hasaudiostate = !1, c.mutedstate = !0, c.supportedbrowserstate = !1, c));
                case "togglesharemenu":
                    return d = {}, Object.assign({}, a, (d.sharemenustate = !!c, d));
                case "changepage":
                    return d = {}, Object.assign({},
                        a, (d.currentpageid = c, d));
                default:
                    return p().error("amp-story", "Unknown action " + b + "."), a
            }
        }

        function xd(a) {
            this.h = a;
            this.Ha = {};
            this.H = Object.assign({}, yd(), zd(this))
        }
        xd.prototype.get = function(a) {
            if (this.H.hasOwnProperty(a)) return this.H[a];
            p().error("amp-story", "Unknown state " + a + ".")
        };
        xd.prototype.subscribe = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            this.H.hasOwnProperty(a) ? (this.Ha[a] || (this.Ha[a] = new Rb), this.Ha[a].add(b), c && b(this.get(a))) : p().error("amp-story", "Can't subscribe to unknown state " + a + ".")
        };
        xd.prototype.dispatch = function(a, b) {
            var c = this,
                d = Object.assign({}, this.H);
            this.H = wd(this.H, a, b);
            Object.keys(this.Ha).forEach(function(a) {
                d[a] !== c.H[a] && c.Ha[a].fire(c.H[a])
            })
        };

        function yd() {
            var a = {};
            return a.caninsertautomaticad = !0, a.canshowbookend = !0, a.canshownavigationoverlayhint = !0, a.canshowpreviouspagehelp = !0, a.canshowsharinguis = !0, a.canshowsystemlayerbuttons = !0, a.adstate = !1, a.bookendstate = !1, a.desktopstate = !1, a.hasaudiostate = !1, a.landscapestate = !1, a.mutedstate = !0, a.sharemenustate = !1, a.supportedbrowserstate = !0, a.currentpageid = "", a
        }

        function zd(a) {
            a = ca(a.h.location.hash).embedMode;
            a = parseInt(a, 10);
            var b;
            a: {
                for (b in vd)
                    if (vd[b] === a) {
                        b = !0;
                        break a
                    }
                b = !1
            }
            var c = b ? a : 0;
            switch (c) {
                case 1:
                    return b = {}, b.caninsertautomaticad = !1, b.canshowbookend = !1, b.canshownavigationoverlayhint = !1, b.canshowpreviouspagehelp = !0, b.canshowsystemlayerbuttons = !1, b.mutedstate = !1, b;
                case 2:
                    return b = {}, b.canshowsharinguis = !1, b;
                default:
                    return {}
            }
        };

        function Ad(a) {
            var b = a.toLowerCase().match(/^([0-9\.]+)\s*(s|ms)$/);
            if (!b) return NaN;
            var c = b[1],
                d = b[2];
            n().assert(b && 3 == b.length && ("s" == d || "ms" == d), "Invalid time string %s", a);
            return "s" == d ? 1E3 * parseFloat(c) : parseInt(c, 10)
        }

        function Bd(a) {
            var b = a.getBoundingClientRect(),
                c = b.width,
                d = b.height,
                e = 0 == c ? 1 : c / a.offsetWidth,
                g = 0 == d ? 1 : d / a.offsetHeight;
            return {
                left: b.left / e,
                top: b.top / g,
                width: c / e,
                height: d / g
            }
        }

        function Cd(a) {
            return bb(a, "amp-video, amp-audio")
        }

        function Dd(a, b, c) {
            a = gc(a);
            var d = self.document.createElement("style");
            d.textContent = c;
            a.appendChild(d);
            a.appendChild(b)
        };

        function Ed(a, b) {
            return Array.isArray(b) ? Fd(a, b) : A(a, b)
        }

        function Gd(a, b) {
            return A(a, b)
        }

        function Fd(a, b) {
            var c = a.createDocumentFragment();
            b.forEach(function(b) {
                return c.appendChild(A(a, b))
            });
            return c
        }

        function A(a, b) {
            var c = ka.call(b, "attrs") ? Za(a, b.tag, b.attrs) : a.createElement(b.tag);
            ka.call(b, "localizedStringId") && lb(a.defaultView, "localization").then(function(a) {
                c.textContent = a.getLocalizedString(b.localizedStringId)
            });
            ka.call(b, "unlocalizedString") && (c.textContent = b.unlocalizedString);
            ka.call(b, "children") && c.appendChild(Fd(a, b.children));
            return c
        };
        var Hd = {
            tag: "aside",
            attrs: q({
                "class": "i-amphtml-story-hint-container i-amphtml-story-system-reset i-amphtml-hidden"
            }),
            children: [{
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-navigation-help-overlay"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-navigation-help-section prev-page"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-hint-placeholder"
                        }),
                        children: [{
                            tag: "div",
                            attrs: q({
                                "class": "i-amphtml-story-hint-tap-button"
                            }),
                            children: [{
                                tag: "div",
                                attrs: q({
                                    "class": "i-amphtml-story-hint-tap-button-icon"
                                })
                            }]
                        },
                            {
                                tag: "div",
                                attrs: q({
                                    "class": "i-amphtml-story-hint-tap-button-text"
                                }),
                                localizedStringId: "3"
                            }
                        ]
                    }]
                }, {
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-navigation-help-section next-page"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-hint-placeholder"
                        }),
                        children: [{
                            tag: "div",
                            attrs: q({
                                "class": "i-amphtml-story-hint-tap-button"
                            }),
                            children: [{
                                tag: "div",
                                attrs: q({
                                    "class": "i-amphtml-story-hint-tap-button-icon"
                                })
                            }]
                        }, {
                            tag: "div",
                            attrs: q({
                                "class": "i-amphtml-story-hint-tap-button-text"
                            }),
                            localizedStringId: "2"
                        }]
                    }]
                }]
            }]
        };

        function Id(a, b) {
            this.h = a;
            this.F = !1;
            this.zc = this.h.document;
            this.o = y(this.h);
            this.A = x(this.h);
            this.fb = this.oa = null;
            this.j = qb(this.h);
            this.J = b
        }
        f = Id.prototype;
        f.build = function() {
            var a = this;
            if (!this.isBuilt()) {
                this.F = !0;
                var b = this.zc.createElement("div");
                this.oa = A(this.zc, Hd);
                Dd(b, this.oa, ".i-amphtml-story-hint-container{-webkit-transition-property:opacity!important;transition-property:opacity!important;-webkit-transition-duration:200ms!important;transition-duration:200ms!important;contain:strict!important;pointer-events:none!important;position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important}.i-amphtml-story-hint-container.i-amphtml-hidden{opacity:0!important}.i-amphtml-story-hint-container .i-amphtml-story-navigation-help-overlay{position:absolute!important;left:0!important;top:0!important;right:0!important;bottom:0!important;background:rgba(0,0,0,0.7)!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important;color:#fff!important;font-size:20px!important;padding:16px 0!important}.i-amphtml-story-navigation-help-section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.prev-page{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{background:transparent!important}.show-first-page-overlay .prev-page{background:-webkit-linear-gradient(left,rgba(0,0,0,0.5),transparent)!important;background:linear-gradient(90deg,rgba(0,0,0,0.5),transparent)!important}.show-first-page-overlay .next-page{opacity:0!important}.show-first-page-overlay .i-amphtml-story-hint-placeholder{display:none!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay{padding:0px!important}.i-amphtml-story-hint-container .next-page{-webkit-box-flex:3!important;-ms-flex:3!important;flex:3!important;border-left:1px dashed transparent!important;border-image-source:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath fill-rule='evenodd' fill='none' stroke-linecap='square' stroke-dasharray='6,6' stroke='%23fff' d='M0 0v30'/%3E%3C/svg%3E\")!important;border-image-slice:33% 33%!important;border-image-repeat:repeat!important;border-image-width:14px!important}.show-first-page-overlay .i-amphtml-story-navigation-help-overlay,.show-navigation-overlay .i-amphtml-story-navigation-help-overlay{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.show-first-page-overlay .prev-page .i-amphtml-story-hint-tap-button{visibility:hidden}.show-navigation-overlay .prev-page .i-amphtml-story-hint-tap-button-icon:before{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:30px!important;height:30px!important;display:inline-block!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button{position:relative!important;width:44px!important;height:44px!important}.i-amphtml-story-hint-tap-button:after,.i-amphtml-story-hint-tap-button:before{position:absolute!important;content:\"\"!important;width:44px!important;height:44px!important;border-radius:50%!important;background-color:hsla(0,0%,100%,0.5)!important;left:0!important;right:0!important}.i-amphtml-story-hint-tap-button:before{-webkit-animation:expandingBubble 1000ms infinite cubic-bezier(0.4,0,0.2,1)!important;animation:expandingBubble 1000ms infinite cubic-bezier(0.4,0,0.2,1)!important}.i-amphtml-story-hint-tap-button:after{background-color:#fff!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-icon{position:absolute!important;z-index:1!important;height:44px!important;width:44px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-tap-button-icon:after,.i-amphtml-story-hint-tap-button-icon:before{vertical-align:middle!important;margin:0 2px!important;background-position:50%}.next-page .i-amphtml-story-hint-tap-button-icon:after{content:\"\"!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;width:24px!important;height:24px!important;display:inline-block!important}.i-amphtml-story-hint-placeholder{top:50%!important;position:absolute;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.i-amphtml-story-hint-container .i-amphtml-story-hint-tap-button-text{color:#fff!important;font-size:16px!important;font-family:Roboto-Medium,sans-serif!important;margin-top:24px!important;text-align:center!important}@-webkit-keyframes expandingBubble{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}@keyframes expandingBubble{0%{-webkit-transform:scale(1);transform:scale(1);opacity:0}50%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:1}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-hint.css*/");
                this.o.mutate(function() {
                    a.J.appendChild(b)
                })
            }
        };
        f.isBuilt = function() {
            return this.F
        };

        function Jd(a, b) {
            a.j.get("desktopstate") || (a.build(), a.o.mutate(function() {
                a.oa.classList.toggle("show-navigation-overlay", "show-navigation-overlay" == b);
                a.oa.classList.toggle("show-first-page-overlay", "show-first-page-overlay" == b);
                a.oa.classList.remove("i-amphtml-hidden");
                var c = "show-navigation-overlay" == b ? 3E3 : 275;
                a.hideAfterTimeout(c)
            }))
        }
        f.showNavigationOverlay = function() {
            this.j.get("sharemenustate") || Jd(this, "show-navigation-overlay")
        };
        f.showFirstPageHintOverlay = function() {
            Jd(this, "show-first-page-overlay")
        };
        f.hideAfterTimeout = function(a) {
            var b = this;
            this.fb = this.A.delay(function() {
                return Kd(b)
            }, a)
        };
        f.hideAllNavigationHint = function() {
            Kd(this);
            null !== this.fb && (this.A.cancel(this.fb), this.fb = null)
        };

        function Kd(a) {
            a.isBuilt() && a.o.mutate(function() {
                a.oa.classList.add("i-amphtml-hidden")
            })
        };
        var Ld = {
            button: !0,
            checkbox: !0,
            link: !0,
            listbox: !0,
            menuitem: !0,
            menuitemcheckbox: !0,
            menuitemradio: !0,
            option: !0,
            radio: !0,
            scrollbar: !0,
            slider: !0,
            spinbutton: !0,
            "switch": !0,
            tab: !0,
            treeitem: !0
        };

        function B() {
            this.Lc = [];
            this.ic = [];
            this.Kc = [];
            this.Sc = [];
            this.Ib = !1
        }
        f = B.prototype;
        f.addProgressListener = function(a) {
            this.Lc.push(a)
        };
        f.addAdvanceListener = function(a) {
            this.ic.push(a)
        };
        f.addPreviousListener = function(a) {
            this.Kc.push(a)
        };
        f.addOnTapNavigationListener = function(a) {
            this.Sc.push(a)
        };
        f.start = function() {
            this.Ib = !0
        };
        f.stop = function() {
            this.Ib = !1
        };
        f.isRunning = function() {
            return this.Ib
        };
        f.getProgress = function() {
            return 1
        };
        f.onProgressUpdate = function() {
            var a = this.getProgress();
            this.Lc.forEach(function(b) {
                b(a)
            })
        };
        f.onAdvance = function() {
            this.ic.forEach(function(a) {
                a()
            })
        };
        f.onPrevious = function() {
            this.Kc.forEach(function(a) {
                a()
            })
        };
        f.onTapNavigation = function(a) {
            this.Sc.forEach(function(b) {
                b(a)
            })
        };

        function Md(a) {
            var b = a.element,
                c = b.ownerDocument.defaultView,
                d = b.getAttribute("auto-advance-after"),
                e = [new Nd(b), Od(d, c), Pd(d, c, b)].filter(function(a) {
                    return null !== a
                });
            return 0 === e.length ? new B : 1 === e.length ? e[0] : new Qd(e)
        }

        function Qd(a) {
            B.call(this);
            this.ia = a
        }
        h(Qd, B);
        f = Qd.prototype;
        f.addProgressListener = function(a) {
            this.ia.forEach(function(b) {
                b.addProgressListener(a)
            })
        };
        f.addOnTapNavigationListener = function(a) {
            this.ia.forEach(function(b) {
                b.addOnTapNavigationListener(a)
            })
        };
        f.addAdvanceListener = function(a) {
            this.ia.forEach(function(b) {
                b.addAdvanceListener(a)
            })
        };
        f.addPreviousListener = function(a) {
            this.ia.forEach(function(b) {
                b.addPreviousListener(a)
            })
        };
        f.start = function() {
            B.prototype.start.call(this);
            this.ia.forEach(function(a) {
                a.start()
            })
        };
        f.stop = function() {
            B.prototype.stop.call(this);
            this.ia.forEach(function(a) {
                a.stop()
            })
        };

        function Nd(a) {
            B.call(this);
            this.l = a;
            this.tc = this.md.bind(this);
            this.kd = this.l.getAttribute("auto-advance-after")
        }
        h(Nd, B);
        Nd.prototype.start = function() {
            B.prototype.start.call(this);
            this.l.addEventListener("click", this.tc, !0);
            this.kd || B.prototype.onProgressUpdate.call(this)
        };
        Nd.prototype.stop = function() {
            B.prototype.stop.call(this);
            this.l.removeEventListener("click", this.tc, !0)
        };
        Nd.prototype.getProgress = function() {
            return 1
        };

        function Rd(a, b) {
            return !ab(b.target, function(a) {
                return a.hasAttribute("on") && !!a.getAttribute("on").match(/(^|;)\s*tap\s*:/)
            }, a.l)
        }
        Nd.prototype.md = function(a) {
            var b;
            if (b = Rd(this, a)) b = a.target.getAttribute("role"), b = !(b && Ld[b.toLowerCase()]);
            if (b) {
                a.stopPropagation();
                var c = this.l.getBoundingClientRect(),
                    d = "x" in c ? c.x : c.left,
                    e = c.width,
                    g = d + .25 * e,
                    k = d + e;
                if (a.pageX >= g && a.pageX < k) this.onTapNavigation(1);
                else if (a.pageX >= d && a.pageX < g) this.onTapNavigation(2)
            }
        };

        function Sd(a, b) {
            B.call(this);
            this.A = x(a);
            this.xc = b;
            this.ec = this.cc = null
        }
        h(Sd, B);
        Sd.prototype.start = function() {
            var a = this;
            B.prototype.start.call(this);
            this.cc = Date.now();
            this.ec = this.A.delay(function() {
                return a.onAdvance()
            }, this.xc);
            this.A.poll(300, function() {
                a.onProgressUpdate();
                return !a.isRunning()
            })
        };
        Sd.prototype.stop = function() {
            B.prototype.stop.call(this);
            null !== this.ec && this.A.cancel(this.ec)
        };
        Sd.prototype.getProgress = function() {
            if (null === this.cc) return 0;
            var a = (Date.now() - this.cc) / this.xc;
            return Math.min(Math.max(a, 0), 1)
        };

        function Od(a, b) {
            if (!a) return null;
            a = Ad(a);
            return void 0 === a || isNaN(a) ? null : new Sd(b, Number(a))
        }

        function Td(a, b) {
            B.call(this);
            this.A = x(a);
            this.l = b;
            this.Wa = this.X = null
        }
        h(Td, B);

        function Ud(a) {
            return a.l.classList.contains("i-amphtml-video-interface")
        }
        Td.prototype.start = function() {
            var a = this;
            B.prototype.start.call(this);
            (this.l.whenBuilt ? this.l.whenBuilt() : Promise.resolve()).then(function() {
                if (Ud(a)) Vd(a);
                else {
                    if (!a.X) {
                        var b;
                        b = a.l.tagName.toLowerCase();
                        b = a.l instanceof HTMLMediaElement ? a.l : !a.l.hasAttribute("background-audio") || "amp-story" !== b && "amp-story-page" !== b ? "amp-audio" === b ? a.l.querySelector("audio") : null : a.l.querySelector(".i-amphtml-story-background-audio");
                        a.X = b
                    }
                    a.X ? Wd(a) : n().error("AMP-STORY-PAGE", "Element with ID " + a.l.id + " is not a media element supported for automatic advancement.")
                }
            })
        };

        function Wd(a) {
            var b = a.X;
            Mb(b, "ended", function() {
                return a.onAdvance()
            });
            Mb(b, "timeupdate", function() {
                return a.onProgressUpdate()
            })
        }

        function Vd(a) {
            a.l.getImpl().then(function(b) {
                a.Wa = b
            });
            Mb(a.l, "ended", function() {
                return a.onAdvance()
            }, {
                capture: !0
            });
            a.A.poll(300, function() {
                a.onProgressUpdate();
                return !a.isRunning()
            })
        }
        Td.prototype.stop = function() {
            B.prototype.stop.call(this)
        };
        Td.prototype.getProgress = function() {
            return Ud(this) ? this.Wa && this.Wa.getDuration() ? this.Wa.getCurrentTime() / this.Wa.getDuration() : 0 : this.X && this.X.duration ? this.X.currentTime / this.X.duration : B.prototype.getProgress.call(this)
        };

        function Pd(a, b, c) {
            try {
                var d = c.querySelector("#" + String(a).replace(Sa, Ta));
                return d ? new Td(b, d) : null
            } catch (e) {
                return null
            }
        };

        function Xd(a, b) {
            var c = !0,
                d = new Event(b, {
                    bubbles: !!c
                });
            d.initEvent && d.initEvent(b, !!c, !1);
            a.dispatchEvent(d)
        }

        function Yd(a, b, c, d) {
            a = Lb(a, c, d, {
                bubbles: !0
            });
            b.dispatchEvent(a)
        };
        var Zd = {
            tag: "div",
            attrs: q({
                "class": "i-amphtml-story-spinner",
                "aria-hidden": "true",
                "aria-label": "Loading video"
            }),
            children: [{
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-spinner-container"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-spinner-layer"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-spinner-circle-clipper left"
                        })
                    }, {
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-spinner-circle-clipper right"
                        })
                    }]
                }]
            }]
        };

        function $d(a) {
            this.ed = a;
            this.m = null;
            this.Fa = !1
        }
        $d.prototype.build = function() {
            if (this.m) return this.m;
            this.m = A(this.ed, Zd);
            return this.getRoot()
        };
        $d.prototype.getRoot = function() {
            return this.m
        };
        $d.prototype.toggle = function(a) {
            a !== this.Fa && (a ? (this.m.setAttribute("active", ""), this.m.setAttribute("aria-hidden", "false")) : (this.m.removeAttribute("active"), this.m.setAttribute("aria-hidden", "true")), this.Fa = a)
        };

        function ae(a, b, c) {
            this.Pc = a && a.length ? a : null;
            this.Gd = b || [];
            this.Tc = c || []
        }

        function be(a, b) {
            Array.prototype.forEach.call(a.Tc, function(a) {
                var c = document.createElement("track");
                c.id = a.id;
                c.kind = a.kind;
                c.label = a.label;
                c.srclang = a.srclang;
                c.default = a.default;
                c.src = a.src;
                c.addEventListener("load", function() {
                    c.mode = "showing";
                    b.textTracks[0].mode = "showing"
                });
                b.appendChild(c)
            })
        }
        ae.prototype.applyToElement = function(a) {
            var b = this;
            ce(a);
            this.Pc ? a.setAttribute("src", this.Pc) : a.removeAttribute("src");
            Array.prototype.forEach.call(this.Gd, function(b) {
                return a.appendChild(b)
            });
            if (0 < this.Tc.length)
                if (1 <= a.readyState) be(this, a);
                else {
                    var c = function() {
                        a.removeEventListener("loadedmetadata", c);
                        be(b, a)
                    };
                    a.addEventListener("loadedmetadata", c)
                }
        };

        function ce(a) {
            a = Cd(a) || a;
            var b = a.getAttribute("src");
            a.removeAttribute("src");
            var c = a.querySelectorAll("source");
            Array.prototype.forEach.call(c, function(a) {
                return Xa(a)
            });
            var d = a.querySelectorAll("track");
            Array.prototype.forEach.call(d, function(a) {
                return Xa(a)
            });
            return new ae(b, c, d)
        };
        var de = ["i-amphtml-pool-media", "i-amphtml-pool-audio", "i-amphtml-pool-video"],
            ee = ["id", "src", "class", "autoplay"];

        function fe(a, b) {
            for (var c = b.classList.length - 1; 0 <= c; c--) {
                var d = b.classList.item(c);
                0 <= de.indexOf(d) || b.classList.remove(d)
            }
            for (c = 0; c < a.classList.length; c++) {
                var e = a.classList.item(c);
                0 <= de.indexOf(e) || b.classList.add(e)
            }
        }

        function ge(a, b) {
            var c = a.attributes,
                d = b.attributes;
            for (a = d.length - 1; 0 <= a; a--) {
                var e = d[a].name;
                0 <= ee.indexOf(e) || b.removeAttribute(e)
            }
            for (a = 0; a < c.length; a++) {
                var e = c[a].name,
                    g = c[a].value;
                0 <= ee.indexOf(e) || b.setAttribute(e, g)
            }
        }

        function C(a) {
            var b = this;
            this.qd = a;
            this.Xb = this.Mc = null;
            this.$c = new Promise(function(a, d) {
                b.Mc = a;
                b.Xb = d
            })
        }
        f = C.prototype;
        f.getName = function() {
            return this.qd
        };
        f.whenComplete = function() {
            return this.$c
        };
        f.execute = function(a) {
            return this.executeInternal(a).then(this.Mc, this.Xb)
        };
        f.executeInternal = function() {
            return Promise.resolve()
        };
        f.requiresSynchronousExecution = function() {
            return !1
        };
        f.failTask = function(a) {
            this.Xb(a)
        };

        function he() {
            C.call(this, "play")
        }
        h(he, C);
        he.prototype.executeInternal = function(a) {
            return a.paused ? Promise.resolve(a.play()) : Promise.resolve()
        };

        function ie() {
            C.call(this, "pause")
        }
        h(ie, C);
        ie.prototype.executeInternal = function(a) {
            a.pause();
            return Promise.resolve()
        };

        function je() {
            C.call(this, "unmute")
        }
        h(je, C);
        je.prototype.executeInternal = function(a) {
            a.muted = !1;
            a.removeAttribute("muted");
            return Promise.resolve()
        };

        function ke() {
            C.call(this, "mute")
        }
        h(ke, C);
        ke.prototype.executeInternal = function(a) {
            a.muted = !0;
            a.setAttribute("muted", "");
            return Promise.resolve()
        };

        function le() {
            C.call(this, "rewind")
        }
        h(le, C);
        le.prototype.executeInternal = function(a) {
            a.currentTime = 0;
            return Promise.resolve()
        };

        function me() {
            C.call(this, "load")
        }
        h(me, C);
        me.prototype.executeInternal = function(a) {
            a.load();
            return Promise.resolve()
        };

        function ne() {
            C.call(this, "bless")
        }
        h(ne, C);
        ne.prototype.requiresSynchronousExecution = function() {
            return !0
        };
        ne.prototype.executeInternal = function(a) {
            var b = a.muted;
            a.muted = !1;
            b && (a.muted = !0);
            return Promise.resolve()
        };

        function oe(a) {
            C.call(this, "update-src");
            this.rd = a
        }
        h(oe, C);
        oe.prototype.executeInternal = function(a) {
            ce(a);
            this.rd.applyToElement(a);
            return Promise.resolve()
        };

        function pe(a) {
            C.call(this, "swap-into-dom");
            this.La = a
        }
        h(pe, C);
        pe.prototype.executeInternal = function(a) {
            if (!$a(this.La)) return this.failTask("Cannot swap media for element that is not in DOM."), Promise.resolve();
            fe(this.La, a);
            ge(this.La, a);
            this.La.parentElement.replaceChild(a, this.La);
            return Promise.resolve()
        };

        function qe(a) {
            C.call(this, "swap-out-of-dom");
            this.Qb = a
        }
        h(qe, C);
        qe.prototype.executeInternal = function(a) {
            fe(a, this.Qb);
            ge(a, this.Qb);
            a.parentElement.replaceChild(this.Qb, a);
            return Promise.resolve()
        };
        var re = {
                UNSUPPORTED: "unsupported",
                AUDIO: "audio",
                VIDEO: "video"
            },
            se = {},
            te = 0,
            ue = 0;

        function ve(a, b, c) {
            var d = this;
            this.h = a;
            this.A = x(a);
            this.o = y(a);
            this.bb = c;
            this.allocated = {};
            this.unallocated = {};
            this.bc = {};
            this.Eb = {};
            this.ld = 0;
            this.mc = !1;
            a = {};
            this.nd = (a.audio = function() {
                var a = d.h.document.createElement("audio");
                a.setAttribute("muted", "");
                a.muted = !0;
                a.classList.add("i-amphtml-pool-media");
                a.classList.add("i-amphtml-pool-audio");
                return a
            }, a.video = function() {
                var a = d.h.document.createElement("video");
                a.setAttribute("muted", "");
                a.muted = !0;
                a.setAttribute("playsinline", "");
                a.classList.add("i-amphtml-pool-media");
                a.classList.add("i-amphtml-pool-video");
                return a
            }, a);
            this.Fb(b)
        }
        f = ve.prototype;
        f.Fb = function(a) {
            var b = this;
            we(this, function(c) {
                var d = re[c],
                    e = a[d] || 0;
                if (!(0 >= e)) {
                    var g = b.nd[d].call(b);
                    b.allocated[d] = [];
                    b.unallocated[d] = [];
                    b.o.mutate(function() {
                        for (var a = e; 0 < a; a--) {
                            var c = 1 == a ? g : g.cloneNode(!0),
                                m = xe(d);
                            c.setAttribute("pool-element", ue++);
                            D(b, c, new oe(m));
                            b.unallocated[d].push(c)
                        }
                    })
                }
            })
        };

        function xe(a) {
            switch (a) {
                case "audio":
                    return new ae("data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YRAAAAAAAAAAAAAAAAAAAAAAAA==");
                case "video":
                    return new ae("data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw");
                default:
                    return p().error("AMP-STORY", "No default media for type " + a + "."), new ae
            }
        }

        function ye(a) {
            switch (a.tagName.toLowerCase()) {
                case "audio":
                    return "audio";
                case "video":
                    return "video";
                default:
                    return "unsupported"
            }
        }

        function ze(a, b, c) {
            if (0 <= a.allocated[b].indexOf(c)) return c;
            var d = a.allocated[b];
            a = Ub(d, function(a) {
                return a["replaced-media"] === c.id
            });
            return d[a]
        }

        function Ae(a, b, c) {
            a.allocated[b].push(c);
            var d = a.unallocated[b],
                e = d.indexOf(c);
            0 <= e && d.splice(e, 1)
        }

        function Be(a, b, c) {
            var d = a.allocated[b];
            d.sort(function(b, c) {
                b = a.bb(b);
                c = a.bb(c);
                return b < c ? -1 : 1
            });
            if (c) {
                var e = d[d.length - 1];
                if (!e || a.bb(e) < a.bb(c)) return null
            }
            d = d.pop();
            a.unallocated[b].push(d);
            return d
        }

        function Ce(a, b) {
            var c = ye(b),
                d = a.allocated[c],
                e = $a(b) ? De(a, b) : Promise.resolve();
            e.then(function() {
                var e = d.indexOf(b);
                d.splice(e, 1);
                a.unallocated[c].push(b)
            })
        }

        function Ee(a, b, c) {
            b = Be(a, b, c);
            if (!b) return null;
            De(a, b);
            return b
        }

        function Fe(a, b, c, d) {
            var e = Cd(c),
                g = Cd(b);
            c["replaced-media"] = b.id;
            return D(a, c, new pe(b)).then(function() {
                Ge(e);
                Ge(g);
                D(a, c, new oe(d));
                D(a, c, new me)
            }, function() {
                Ce(a, c)
            })
        }

        function Ge(a) {
            a && "amp-audio" != a.tagName.toLowerCase() && a.getImpl().then(function(a) {
                return a.resetOnDomChange()
            })
        }

        function He(a, b) {
            var c = ye(b),
                d = xe(c);
            D(a, b, new oe(d))
        }

        function De(a, b) {
            var c = b["replaced-media"],
                d = a.Eb[c],
                e = D(a, b, new qe(d)).then(function() {
                    b["replaced-media"] = null
                });
            He(a, b);
            return e
        }

        function we(a, b) {
            Object.keys(re).forEach(b.bind(a))
        }

        function Ie(a, b) {
            [a.allocated, a.unallocated].forEach(function(c) {
                we(a, function(d) {
                    var e = c[re[d]];
                    e && e.forEach(b.bind(a))
                })
            })
        }

        function Je(a, b) {
            if (!$a(b)) return Promise.resolve();
            var c = ye(b),
                d = ze(a, c, b);
            if (d) return Promise.resolve(d);
            var e = a.bc[b.id],
                g = a.unallocated[c].pop() || Ee(a, c, b);
            if (!g) return Promise.resolve();
            Ae(a, c, g);
            return Fe(a, b, g, e).then(function() {
                return g
            })
        }

        function Ke(a, b) {
            return b.__AMP_MEDIA_IS_BLESSED__ ? Promise.resolve() : D(a, b, new ne)
        }
        f.register = function(a) {
            var b = ye(a);
            if (0 <= this.allocated[b].indexOf(a)) return Promise.resolve();
            b = a.id || "i-amphtml-media-" + this.ld++;
            if (this.bc[b] && this.Eb[b]) return Promise.resolve();
            a.id = b;
            var c = ce(a);
            this.bc[b] = c;
            this.Eb[b] = a;
            a.muted = !0;
            a.setAttribute("muted", "");
            a.pause();
            return Promise.resolve()
        };
        f.preload = function(a) {
            return Je(this, a).then()
        };
        f.play = function(a) {
            var b = this;
            return Je(this, a).then(function(a) {
                return a ? D(b, a, new he) : Promise.resolve()
            })
        };
        f.pause = function(a, b) {
            b = void 0 === b ? !1 : b;
            var c = this,
                d = ye(a),
                e = ze(this, d, a);
            return e ? D(this, e, new ie).then(function() {
                b && D(c, e, new le)
            }) : Promise.resolve()
        };
        f.rewindToBeginning = function(a) {
            var b = ye(a);
            return (a = ze(this, b, a)) ? D(this, a, new le) : Promise.resolve()
        };
        f.mute = function(a) {
            var b = ye(a);
            return (a = ze(this, b, a)) ? D(this, a, new ke) : Promise.resolve()
        };
        f.unmute = function(a) {
            var b = ye(a);
            return (a = ze(this, b, a)) ? D(this, a, new je) : Promise.resolve()
        };
        f.blessAll = function() {
            var a = this;
            if (this.mc) return Promise.resolve();
            var b = [];
            Ie(this, function(c) {
                b.push(Ke(a, c))
            });
            return Promise.all(b).then(function() {
                a.mc = !0
            }).catch(function(a) {
                p().expectedError("AMP-STORY", "Blessing all media failed: ", a)
            })
        };

        function Le(a, b) {
            var c = b.__AMP_MEDIA_ELEMENT_TASKS__;
            if (0 !== c.length) {
                var d = c[0],
                    e = function() {
                        d.execute(b).catch(function(a) {
                            return p().error("AMP-STORY", a)
                        }).then(function() {
                            c.shift();
                            Le(a, b)
                        })
                    };
                d.requiresSynchronousExecution() ? e.call(a) : a.A.delay(e.bind(a), 0)
            }
        }

        function D(a, b, c) {
            b.__AMP_MEDIA_ELEMENT_TASKS__ || (b.__AMP_MEDIA_ELEMENT_TASKS__ = []);
            var d = b.__AMP_MEDIA_ELEMENT_TASKS__,
                e = 0 !== d.length;
            d.push(c);
            e || Le(a, b);
            return c.whenComplete()
        }

        function Me(a) {
            var b = a.getElement(),
                c = b.__AMP_MEDIA_POOL_ID__,
                d = c && se[c];
            if (d) return se[c];
            var e = String(te++);
            b.__AMP_MEDIA_POOL_ID__ = e;
            se[e] = new ve(a.getElement().ownerDocument.defaultView, a.getMaxMediaElementCounts(), function(b) {
                return a.getElementDistance(b)
            });
            return se[e]
        };

        function Ne(a) {
            return ub(a.ownerDocument.defaultView, "amp-story-scaling") ? !0 : "relative" == a.getAttribute("scaling")
        }

        function Oe(a, b) {
            b = void 0 === b ? !0 : b;
            a.classList.toggle("i-amphtml-story-scaled", b)
        }
        var Pe = null;

        function Qe(a, b) {
            var c = this;
            this.ob = b;
            this.o = y(a);
            this.Fd = b.querySelector("amp-story-page[active]");
            this.Va = null;
            this.$b = {};
            rb(b).onResize(Sb(a, function() {
                return Re(c)
            }, 100))
        }
        f = Qe.prototype;
        f.scale = function(a) {
            return Promise.resolve(this.Na(a))
        };
        f.Na = function(a) {
            var b = this;
            if (!a.classList.contains("i-amphtml-story-scaled") && Ne(a) && cb(a, '[active], [distance="1"], [desktop] > [distance="2"]')) return this.o.runPromise({
                measure: function(c) {
                    c.targetDimensions = Se(b);
                    c.scalableElsDimensions = b.getOrMeasureScalableElsFor(a)
                },
                mutate: function(c) {
                    var d = c.targetDimensions,
                        e = c.scalableElsDimensions;
                    ga(hb(a, "> amp-story-grid-layer")).forEach(function(a, c) {
                        Ab(a, {
                            "box-sizing": "border-box"
                        });
                        Ab(a, b.scalingStyles(d, e[c]))
                    });
                    Oe(a)
                }
            }, {})
        };

        function Se(a) {
            if (!a.Va) {
                var b = Bd(a.Fd),
                    c = b.width,
                    b = c / b.height,
                    d = Math.min(460, Math.max(c, 380 * Math.max(1, b))),
                    c = {
                        factor: c / d,
                        width: d,
                        height: d / b
                    };
                a.Va = c;
                a.updateRootProps(c)
            }
            return a.Va
        }
        f.getOrMeasureScalableElsFor = function(a) {
            var b = n().assert(a.id, "No page id.");
            this.$b[b] || (this.$b[b] = this.measureScalableElsFor(a));
            return this.$b[b]
        };
        f.measureScalableElsFor = function(a) {
            var b = this,
                c = Bd(a),
                d = c.width,
                e = c.height;
            return ga(hb(a, "> amp-story-grid-layer")).map(function(a) {
                var c = Bd(a),
                    g = c.width,
                    c = c.height;
                return {
                    matrix: b.getTransformMatrix(a),
                    relativeWidth: g / d,
                    relativeHeight: c / e
                }
            })
        };

        function Re(a) {
            a.Va = null;
            a.o.measure(function() {
                Se(a)
            });
            a.updatePagesOnResize()
        }
        f.scaleAll = function() {
            var a = this,
                b = ga(hb(this.ob, "> amp-story-page"));
            b.forEach(function(b) {
                Oe(b, !1);
                a.Na(b)
            })
        };
        f.updateRootProps = function() {};
        f.updatePagesOnResize = function() {};
        f.getTransformMatrix = function() {
            return null
        };
        f.scalingStyles = function() {
            return {}
        };

        function Te(a) {
            Qe.apply(this, arguments)
        }
        h(Te, Qe);
        Te.prototype.updatePagesOnResize = function() {
            this.scaleAll()
        };
        Te.prototype.scalingStyles = function(a, b) {
            var c = b,
                d = c.relativeWidth,
                e = c.relativeHeight;
            return {
                width: a.width * d + "px",
                height: a.height * e + "px",
                zoom: a.factor
            }
        };

        function Ue(a) {
            Qe.apply(this, arguments)
        }
        h(Ue, Qe);
        Ue.prototype.updatePagesOnResize = function() {
            this.scaleAll()
        };
        Ue.prototype.getTransformMatrix = function() {
            return [1, 0, 0, 1, 0, 0]
        };
        Ue.prototype.scalingStyles = function(a, b) {
            var c = a.width,
                d = a.height,
                e = b.matrix;
            a = a.factor;
            var g = e,
                k = [g[0] * a, g[1], g[2], g[3] * a, g[4] + (c * a / 2 - c / 2), g[5] + (d * a / 2 - d / 2)];
            return {
                width: c * b.relativeWidth + "px",
                height: d * b.relativeHeight + "px",
                transform: "matrix(" + k.join() + ")"
            }
        };

        function Ve(a) {
            Qe.apply(this, arguments)
        }
        h(Ve, Qe);
        Ve.prototype.getOrMeasureScalableElsFor = function(a) {
            return this.measureScalableElsFor(a)
        };
        Ve.prototype.updateRootProps = function() {
            var a = this,
                b = this.Va,
                c = b.width,
                d = b.height,
                e = b.factor;
            this.o.mutate(function() {
                Bb(a.ob, "--i-amphtml-story-width", c + "px");
                Bb(a.ob, "--i-amphtml-story-height", d + "px");
                Bb(a.ob, "--i-amphtml-story-factor", e.toString())
            })
        };
        Ve.prototype.scalingStyles = function(a, b) {
            return {
                width: "calc(var(--i-amphtml-story-width) * " + b.relativeWidth + ")",
                height: "calc(var(--i-amphtml-story-height) * " + b.relativeHeight + ")",
                zoom: "var(--i-amphtml-story-factor)"
            }
        };

        function We(a) {
            return new Promise(function(b, c) {
                var d = new Image;
                d.onload = function() {
                    return b(d)
                };
                d.onerror = c;
                d.src = a.getAttribute("poster")
            })
        }
        var Xe = {
            VIDEOS_POSTER_SPECIFIED: {
                message: "Videos should specify a poster image.",
                moreInfo: "https://www.ampproject.org/docs/reference/components/amp-video#poster",
                selector: "video:not([poster])",
                level: 1
            },
            IMAGES_MAX_720P_OR_SRCSET: {
                message: "Images should not be larger than 720p.  If you wish to use images that are larger than 720p, you should specify a srcset.",
                moreInfo: "https://www.ampproject.org/docs/guides/responsive/art_direction#srcset",
                selector: "img:not([srcset])",
                predicate: function(a) {
                    return 720 >=
                        a.naturalWidth && 1280 >= a.naturalHeight
                },
                level: 2
            },
            IMAGES_PORTRAIT: {
                message: "Full-bleed images should be in portrait orientation.",
                selector: 'amp-story-grid-layer[template="fill"] > amp-img > img',
                predicate: function(a) {
                    return a.naturalWidth < a.naturalHeight
                },
                level: 2
            },
            VIDEOS_MAX_720P: {
                message: "Videos should not be larger than 720p.",
                selector: "video",
                predicate: function(a) {
                    return 720 >= a.videoWidth && 1280 >= a.videoHeight
                },
                level: 2
            },
            VIDEOS_PORTRAIT: {
                message: "Full-bleed videos should be in portrait orientation.",
                selector: 'amp-story-grid-layer[template="fill"] > amp-video > video',
                predicate: function(a) {
                    return a.videoWidth < a.videoHeight
                },
                level: 2
            },
            VIDEO_POSTER_MAX_720P: {
                message: "Video poster images should not be larger than 720p.",
                selector: "video[poster]",
                predicate: function(a) {
                    return We(a).then(function(a) {
                        return 720 >= a.naturalWidth && 1280 >= a.naturalHeight
                    })
                },
                level: 2
            },
            VIDEO_POSTER_POTRAIT: {
                message: "Poster images for full-bleed videos should be in portrait orientation.",
                selector: 'amp-story-grid-layer[template="fill"] > amp-video > video[poster]',
                predicate: function(a) {
                    return We(a).then(function(a) {
                        return a.naturalWidth < a.naturalHeight
                    })
                },
                level: 2
            }
        };

        function Ye(a, b, c) {
            return Promise.resolve((b.predicate || function() {
                return !1
            })(c)).then(function(d) {
                return new Promise(function(e) {
                    e({
                        rootElement: a,
                        element: c,
                        conforms: d,
                        level: b.level,
                        message: b.message,
                        moreInfo: b.moreInfo
                    })
                })
            })
        }

        function Ze(a, b) {
            var c = b.precondition || function() {
                return !0
            };
            return (b.selector ? [].slice.call(hb(a, b.selector)) : [a]).filter(c).map(Ye.bind(null, a, b))
        }

        function $e(a, b) {
            return a.conforms == b.conforms ? a.level <= b.level ? -1 : 1 : a.conforms < b.conforms ? -1 : 1
        }

        function af(a) {
            var b = Object.keys(Xe).reduce(function(b, d) {
                var c = Ze(a, Xe[d]);
                return b.concat(c)
            }, []);
            return Promise.all(b).then(function(a) {
                return a.sort($e)
            })
        };

        function bf(a) {
            if (!a.hasAttribute("background-audio")) return null;
            var b = a.ownerDocument.createElement("audio"),
                c = a.getAttribute("background-audio"),
                d;
            d = void 0 === d ? "source" : d;
            n().assert(null != c, "%s %s must be available", a, d);
            n().assert(Aa(c) || /^(\/\/)/.test(c), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', a, d, c);
            var e = c;
            b.setAttribute("src", e);
            b.setAttribute("preload", "auto");
            b.setAttribute("loop", "");
            b.setAttribute("autoplay",
                "");
            b.setAttribute("muted", "");
            b.muted = !0;
            b.classList.add("i-amphtml-story-background-audio");
            a.appendChild(b);
            return b
        };

        function cf(a, b, c, d) {
            return [{
                transform: Db(a, b)
            }, {
                transform: Db(c, d)
            }]
        }

        function df(a, b) {
            return [{
                transform: Db(a, 0) + " " + Eb(360 * b)
            }, {
                transform: Db(0, 0) + " " + Eb(0)
            }]
        }

        function ef(a) {
            return [{
                opacity: 0,
                transform: Db(a, 0) + " scale(0.15)"
            }, {
                opacity: 1,
                transform: Db(0, 0) + " scale(1)"
            }]
        }

        function ff(a) {
            if (a.targetWidth <= a.pageWidth || a.targetHeight <= a.pageHeight) {
                var b = 1.25,
                    c = a.pageWidth > a.targetWidth ? a.pageWidth / a.targetWidth : 1,
                    d = a.pageHeight > a.targetHeight ? a.pageHeight / a.targetHeight : 1;
                return Math.max(c, d) * b
            }
            return 1
        }

        function gf(a, b) {
            a.forEach(function(a) {
                a.transform += " " + ("scale(" + b + ")");
                a["transform-origin"] = "left top"
            });
            return a
        }

        function hf(a, b, c, d, e) {
            return 1 === e ? cf(a, b, c, d) : gf(cf(a, b, c, d), e)
        };
        var jf = "pan-up pan-down pan-right pan-left zoom-in zoom-out".split(" "),
            kf = {},
            lf = (kf["full-bleed"] = "i-amphtml-story-grid-template-with-full-bleed-animation", kf),
            mf = {
                pulse: {
                    duration: 500,
                    easing: "linear",
                    keyframes: [{
                        offset: 0,
                        transform: "scale(1)"
                    }, {
                        offset: .25,
                        transform: "scale(0.95)"
                    }, {
                        offset: .75,
                        transform: "scale(1.05)"
                    }, {
                        offset: 1,
                        transform: "scale(1)"
                    }]
                },
                "fly-in-left": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: function(a) {
                        var b = -(a.targetX + a.targetWidth);
                        return cf(b, 0, 0, 0)
                    }
                },
                "fly-in-right": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: function(a) {
                        return cf(a.pageWidth - a.targetX, 0, 0, 0)
                    }
                },
                "fly-in-top": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: function(a) {
                        var b = -(a.targetY + a.targetHeight);
                        return cf(0, b, 0, 0)
                    }
                },
                "fly-in-bottom": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: function(a) {
                        return cf(0, a.pageHeight - a.targetY, 0, 0)
                    }
                },
                "rotate-in-left": {
                    duration: 700,
                    easing: "ease-out",
                    keyframes: function(a) {
                        return df(-(a.targetX + a.targetWidth), -1)
                    }
                },
                "rotate-in-right": {
                    duration: 700,
                    easing: "ease-out",
                    keyframes: function(a) {
                        return df(a.pageWidth -
                            a.targetX, 1)
                    }
                },
                "fade-in": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }]
                },
                drop: {
                    duration: 1600,
                    keyframes: function(a) {
                        var b = Math.max(160, a.targetY + a.targetHeight);
                        return [{
                            offset: 0,
                            transform: "translateY(" + (-b + "px") + ")",
                            easing: "cubic-bezier(.75,.05,.86,.08)"
                        }, {
                            offset: .3,
                            transform: "translateY(0)",
                            easing: "cubic-bezier(.22,.61,.35,1)"
                        }, {
                            offset: .52,
                            transform: "translateY(" + (-.6 * b + "px") + ")",
                            easing: "cubic-bezier(.75,.05,.86,.08)"
                        }, {
                            offset: .74,
                            transform: "translateY(0)",
                            easing: "cubic-bezier(.22,.61,.35,1)"
                        },
                            {
                                offset: .83,
                                transform: "translateY(" + (-.3 * b + "px") + ")",
                                easing: "cubic-bezier(.75,.05,.86,.08)"
                            }, {
                                offset: 1,
                                transform: "translateY(0)",
                                easing: "cubic-bezier(.22,.61,.35,1)"
                            }
                        ]
                    }
                },
                "twirl-in": {
                    duration: 1E3,
                    easing: "cubic-bezier(.2,.75,.4,1)",
                    keyframes: [{
                        transform: "rotate(-540deg) scale(0.1)",
                        opacity: 0
                    }, {
                        transform: "none",
                        opacity: 1
                    }]
                },
                "whoosh-in-left": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: function(a) {
                        return ef(-(a.targetX + a.targetWidth))
                    }
                },
                "whoosh-in-right": {
                    duration: 500,
                    easing: "ease-out",
                    keyframes: function(a) {
                        return ef(a.pageWidth -
                            a.targetX)
                    }
                },
                "pan-left": {
                    duration: 1E3,
                    easing: "linear",
                    keyframes: function(a) {
                        var b = ff(a);
                        a.targetWidth *= b;
                        a.targetHeight *= b;
                        var c = (a.pageHeight - a.targetHeight) / 2;
                        return hf(a.pageWidth - a.targetWidth, c, 0, c, b)
                    }
                },
                "pan-right": {
                    duration: 1E3,
                    easing: "linear",
                    keyframes: function(a) {
                        var b = ff(a);
                        a.targetWidth *= b;
                        a.targetHeight *= b;
                        var c = (a.pageHeight - a.targetHeight) / 2;
                        return hf(0, c, a.pageWidth - a.targetWidth, c, b)
                    }
                },
                "pan-down": {
                    duration: 1E3,
                    easing: "linear",
                    keyframes: function(a) {
                        var b = ff(a);
                        a.targetWidth *= b;
                        a.targetHeight *=
                            b;
                        var c = -a.targetWidth / 2;
                        return hf(c, 0, c, a.pageHeight - a.targetHeight, b)
                    }
                },
                "pan-up": {
                    duration: 1E3,
                    easing: "linear",
                    keyframes: function(a) {
                        var b = ff(a);
                        a.targetWidth *= b;
                        a.targetHeight *= b;
                        var c = -a.targetWidth / 2;
                        return hf(c, a.pageHeight - a.targetHeight, c, 0, b)
                    }
                },
                "zoom-in": {
                    duration: 1E3,
                    easing: "linear",
                    keyframes: [{
                        transform: "scale(1,1)"
                    }, {
                        transform: "scale(3,3)"
                    }]
                },
                "zoom-out": {
                    duration: 1E3,
                    easing: "linear",
                    keyframes: [{
                        transform: "scale(3,3)"
                    }, {
                        transform: "scale(1,1)"
                    }]
                }
            };

        function nf(a, b, c, d, e, g) {
            var k = this;
            this.Ad = a;
            this.A = e;
            this.o = d;
            this.ha = b.target;
            this.Qa = g;
            this.lc = b;
            this.Sb = b.preset;
            this.Jb = of (this, b.preset.keyframes);
            this.Db = b.delay || this.Sb.delay || 0;
            this.fd = b.duration || this.Sb.duration || 0;
            this.Dd = pf(this).then(function(a) {
                return c.then(function(b) {
                    return b.createRunner(a)
                })
            });
            this.gd = this.Jb.then(function(a) {
                return ma(a[0])
            });
            this.pb = this.aa = this.R = null;
            this.Jb.then(function(a) {
                return !a[0].offset
            });
            n().assert(0 <= this.Db, "Negative delays are not allowed in amp-story entrance animations.");
            this.Dd.then(function(a) {
                return qf(k, a)
            })
        }
        f = nf.prototype;
        f.getDims = function() {
            var a = this;
            return this.o.measurePromise(function() {
                var b = Bd(a.ha),
                    c = Bd(a.Ad);
                return {
                    pageWidth: c.width,
                    pageHeight: c.height,
                    targetWidth: b.width,
                    targetHeight: b.height,
                    targetX: b.left - c.left,
                    targetY: b.top - c.top
                }
            })
        };

        function of (a, b) {
            return Array.isArray(b) ? Promise.resolve(b) : a.getDims().then(b)
        }

        function pf(a) {
            return a.Jb.then(function(b) {
                return {
                    keyframes: b,
                    target: a.ha,
                    duration: a.fd + "ms",
                    easing: a.Sb.easing,
                    fill: "forwards"
                }
            })
        }
        f.applyFirstFrame = function() {
            var a = this;
            if (this.hasStarted()) return Promise.resolve();
            this.R && this.R.cancel();
            return this.gd.then(function(b) {
                return a.o.mutatePromise(function() {
                    Cb(a.ha, b)
                })
            })
        };
        f.start = function() {
            this.hasStarted() || rf(this, 0, sf(this))
        };

        function sf(a) {
            var b = Promise.resolve();
            if (a.lc.startAfterId) var c = a.lc.startAfterId,
                b = b.then(function() {
                    return a.Qa.waitFor(c)
                });
            a.Db && (b = b.then(function() {
                return a.A.promise(a.Db)
            }));
            return b
        }
        f.hasStarted = function() {
            return null !== this.aa || !!this.R && "running" == this.R.getPlayState()
        };
        f.finish = function() {
            this.R || this.ha.id && this.Qa.notifyFinish(this.ha.id);
            rf(this, 1)
        };
        f.cancel = function() {
            this.pb = this.aa = null;
            this.R && this.R.cancel()
        };

        function rf(a, b, c) {
            var d = c || null;
            a.aa = b;
            a.pb = d;
            a.R && tf(a, b, d)
        }

        function tf(a, b, c) {
            var d = a.R;
            (c || Promise.resolve()).then(function() {
                if (b ? a.aa === b : null !== a.aa) switch (a.aa = null, a.pb = null, b) {
                    case 0:
                        d.start();
                        break;
                    case 1:
                        "running" == d.getPlayState() && d.finish()
                }
            })
        }

        function qf(a, b) {
            a.R = b;
            b.onPlayStateChanged(function(b) {
                "finished" == b && a.ha.id && a.Qa.notifyFinish(a.ha.id)
            });
            null !== a.aa && tf(a, a.aa, a.pb)
        }

        function uf(a, b) {
            gb(a, "[animate-in]");
            this.m = a;
            this.w = b;
            this.o = y(this.w.win);
            this.A = x(this.w.win);
            this.Xc = vf(this);
            this.$ = null;
            this.Qa = new wf
        }

        function xf(a, b) {
            return new uf(a, b)
        }
        f = uf.prototype;
        f.applyFirstFrame = function() {
            return Promise.all(yf(this).map(function(a) {
                return a.applyFirstFrame()
            }))
        };
        f.animateIn = function() {
            this.$.forEach(function(a) {
                return a.start()
            })
        };
        f.finishAll = function() {
            this.$.forEach(function(a) {
                return a.finish()
            })
        };
        f.cancelAll = function() {
            this.$ && this.$.forEach(function(a) {
                return a.cancel()
            })
        };
        f.hasAnimationStarted = function() {
            return this.$.some(function(a) {
                return a.hasStarted()
            })
        };

        function yf(a) {
            a.$ || (a.$ = Array.prototype.map.call(hb(a.m, "[animate-in]"), function(b) {
                var c = b.getAttribute("animate-in");
                if (0 <= jf.indexOf(c)) {
                    var d = b.parentElement;
                    d.classList.contains(kd.fill) && d.classList.remove(kd.fill);
                    d.classList.add(lf["full-bleed"])
                }
                c = n().assert(mf[c], 'Invalid %s preset "%s" for element %s', "animate-in", c, b);
                b = a.createAnimationDef(b, c);
                return new nf(a.m, b, a.Xc, a.o, a.A, a.Qa)
            }));
            return a.$
        }
        f.createAnimationDef = function(a, b) {
            b = {
                target: a,
                preset: b
            };
            a.hasAttribute("animate-in-duration") && (b.duration = Ad(a.getAttribute("animate-in-duration")));
            a.hasAttribute("animate-in-delay") && (b.delay = Ad(a.getAttribute("animate-in-delay")));
            if (a.hasAttribute("animate-in-after")) {
                var c = a.getAttribute("animate-in-after");
                n().assertElement(this.m.querySelector("#" + String(c).replace(Sa, Ta)), "The attribute 'animate-in-after' in tag " + ("'" + a.tagName + "' is set to the invalid value ") + ("'" + c + "'. No children of parenting 'amp-story-page' ") +
                    ("exist with id " + c + "."));
                b.startAfterId = a.getAttribute("animate-in-after")
            }
            return b
        };

        function vf(a) {
            return v(a.w.win, "extensions").installExtensionForDoc(a.w, "amp-animation").then(function() {
                return ob(a.w, "web-animation", "amp-animation")
            }).then(function(a) {
                return a.createBuilder()
            })
        }

        function wf() {
            this.Ta = la();
            this.Rc = la()
        }
        wf.prototype.notifyFinish = function(a) {
            a in this.Ta && ((0, this.Rc[a])(), delete this.Ta[a])
        };
        wf.prototype.waitFor = function(a) {
            var b = this;
            a in this.Ta || (this.Ta[a] = new Promise(function(c) {
                b.Rc[a] = c
            }));
            return this.Ta[a]
        };

        function zf(a) {
            var b;
            b = AMP.BaseElement.call(this, a) || this;
            b.T = null;
            b.ja = Md(b);
            b.jb = null;
            b.Fc = Af(b);
            b.zd = b.Fc.then(function() {
                Bf(b)
            });
            var c, d;
            b.Gc = new Promise(function(a, b) {
                c = a;
                d = b
            });
            b.pd = c;
            b.od = d;
            b.Rb = cb(b.element, "amp-story-page:first-of-type");
            b.$a = Tb(b.win, function(a) {
                return Cf(b, !!a)
            }, 100);
            b.sb = [];
            b.pa = w(b.win).isBot();
            return b
        }
        h(zf, AMP.BaseElement);
        f = zf.prototype;
        f.buildCallback = function() {
            var a = this;
            bf(this.element);
            Df(this);
            Ef(this);
            this.Fb();
            !this.T && gb(this.element, "[animate-in]") && (this.T = xf(this.element, this.getAmpDoc(), this.getAmpDoc().getUrl()));
            this.ja.addPreviousListener(function() {
                return a.previous()
            });
            this.ja.addAdvanceListener(function() {
                return a.next(!0)
            });
            this.ja.addOnTapNavigationListener(function(b) {
                return a.navigateOnTap(b)
            });
            this.ja.addProgressListener(function(b) {
                Yd(a.win, a.element, "ampstory:pageprogress", {
                    pageId: a.element.id,
                    progress: b
                })
            })
        };

        function Df(a) {
            var b = a.element.querySelectorAll("amp-video");
            1 > b.length || (Vc(a.getAmpDoc()), ga(b).forEach(function(b) {
                Ha(a.element, "video-manager").delegateAutoplay(b)
            }))
        }
        f.Fb = function() {
            var a = this,
                b = bb(this.element, "amp-story");
            b.getImpl().then(function(b) {
                a.pd(Me(b))
            }, function(b) {
                return a.od(b)
            })
        };

        function Ef(a) {
            a = a.element.querySelectorAll("amp-audio, amp-video");
            Array.prototype.forEach.call(a, function(a) {
                a.setAttribute("preload", "auto")
            })
        }
        f.isLayoutSupported = function(a) {
            return "container" == a
        };
        f.pauseCallback = function() {
            this.ja.stop();
            Ff(this);
            Gf(this);
            this.T && this.T.cancelAll()
        };
        f.resumeCallback = function() {
            var a = this;
            Hf(this);
            this.isActive() && (this.ja.start(), this.maybeStartAnimations(), If(this).then(function() {
                return Jf(a)
            }).then(function() {
                return Kf(a)
            }));
            Lf(this)
        };
        f.layoutCallback = function() {
            this.muteAllMedia();
            return Promise.all([this.beforeVisible(), this.Fc, this.Gc])
        };
        f.beforeVisible = function() {
            var a = this;
            return this.Na().then(function() {
                return a.maybeApplyFirstAnimationFrame()
            })
        };

        function Af(a) {
            a = hb(a.element, "amp-audio, amp-video, amp-img, amp-anim");
            var b = Array.prototype.map.call(a, function(a) {
                return new Promise(function(b) {
                    switch (a.tagName.toLowerCase()) {
                        case "amp-img":
                        case "amp-anim":
                            a.addEventListener("load", b, !0);
                            break;
                        case "amp-audio":
                        case "amp-video":
                            if (2 <= a.readyState) {
                                b();
                                return
                            }
                            a.addEventListener("canplay", b, !0);
                            break;
                        default:
                            b()
                    }
                    a.addEventListener("error", b, !0)
                })
            });
            return Promise.all(b)
        }
        f.whenLoaded = function() {
            return this.zd
        };

        function Bf(a) {
            Xd(a.element, "ampstory:pageload");
            a.mutateElement(function() {
                a.element.classList.add("i-amphtml-story-page-loaded")
            })
        }
        f.prerenderAllowed = function() {
            return this.Rb
        };

        function Mf(a, b) {
            var c = a.element.querySelectorAll("audio, video");
            return a.Gc.then(function(a) {
                var d = Array.prototype.map.call(c, function(c) {
                    return b(a, c)
                });
                return Promise.all(d)
            })
        }

        function Gf(a) {
            var b = !0,
                b = void 0 === b ? !1 : b;
            Mf(a, function(c, d) {
                if (a.pa) d.pause();
                else return c.pause(d, b)
            })
        }

        function Kf(a) {
            return Mf(a, function(b, c) {
                if (a.pa) c.play();
                else return b.play(c)
            })
        }

        function If(a) {
            return Mf(a, function(b, c) {
                if (!a.pa) return b.preload(c)
            })
        }
        f.muteAllMedia = function() {
            var a = this;
            return Mf(this, function(b, c) {
                if (a.pa) c.muted = !0, c.setAttribute("muted", "");
                else return b.mute(c)
            })
        };
        f.unmuteAllMedia = function() {
            var a = this;
            return Mf(this, function(b, c) {
                if (a.pa) c.muted = !1, c.removeAttribute("muted");
                else return b.unmute(c)
            })
        };

        function Hf(a) {
            Mf(a, function(b, c) {
                if (!a.pa) return b.register(c)
            })
        }
        f.maybeStartAnimations = function() {
            this.T && this.T.animateIn()
        };
        f.maybeApplyFirstAnimationFrame = function() {
            return this.T ? this.T.applyFirstFrame() : Promise.resolve()
        };
        f.Na = function() {
            var a = this.element.parentNode,
                b = a.ownerDocument.defaultView;
            Pe || (!w(b).isIe() && !b.CSS.supports("zoom", "1") || w(b).isIos() ? (n().warn("AMP-STORY", "`amp-story-scaling` using CSS transforms as fallback.", "Any `amp-story-grid-layer` with user-defined CSS transforms will", "break.", "See https://github.com/ampproject/amphtml/issues/12934"), Pe = new Ue(b, a)) : Pe = !w(b).isIe() && b.CSS.supports("(--foo: red)") ? new Ve(b, a) : new Te(b, a));
            return Pe.scale(this.element)
        };
        f.setActive = function(a) {
            a ? (this.element.setAttribute("active", ""), this.beforeVisible(), this.resumeCallback()) : (this.element.removeAttribute("active"), this.pauseCallback())
        };
        f.getDistance = function() {
            return parseInt(this.element.getAttribute("distance"), 10)
        };
        f.setDistance = function(a) {
            this.isAd() && (a = Math.min(a, 2));
            this.element.setAttribute("distance", a);
            Hf(this);
            0 < a && 2 >= a && (If(this), this.Na())
        };
        f.isActive = function() {
            return this.element.hasAttribute("active")
        };
        f.getAdjacentPageIds = function() {
            var a = [],
                b = this.getNextPageId(!0),
                c = this.getNextPageId(!1),
                d = Nf(this);
            b && a.push(b);
            c && c != b && a.push(c);
            d && a.push(d);
            return a
        };

        function Nf(a) {
            if (a.element.hasAttribute("i-amphtml-return-to")) return a.element.getAttribute("i-amphtml-return-to");
            var b = a.element.previousElementSibling;
            return b && "amp-story-page" === b.tagName.toLowerCase() ? b.id : null
        }
        f.getNextPageId = function(a) {
            if (a && this.element.hasAttribute("auto-advance-to")) return this.element.getAttribute("auto-advance-to");
            if (this.element.hasAttribute("i-amphtml-advance-to")) return this.element.getAttribute("i-amphtml-advance-to");
            var b = this.element.nextElementSibling;
            return b && "amp-story-page" === b.tagName.toLowerCase() ? b.id : null
        };
        f.previous = function() {
            var a = Nf(this);
            null === a ? Xd(this.element, "ampstory:shownopreviouspagehelp") : this.ta(a)
        };
        f.next = function(a) {
            (a = this.getNextPageId(a)) && this.ta(a)
        };
        f.navigateOnTap = function(a) {
            Yd(this.win, this.element, "ampstory:tapnavigation", {
                direction: a
            })
        };
        f.ta = function(a) {
            Yd(this.win, this.element, "ampstory:switchpage", {
                targetPageId: a
            })
        };

        function Lf(a) {
            ea().development && af(a.element).then(function(b) {
                Yd(a.win, a.element, "ampstory:devlogentriesavailable", b)
            })
        }

        function Jf(a) {
            var b = a.element.querySelectorAll("video");
            0 !== b.length && (a.$a(!0), Array.prototype.forEach.call(b, function(b) {
                a.sb.push(z(b, "playing", function() {
                    return a.$a(!1)
                }));
                a.sb.push(z(b, "waiting", function() {
                    return a.$a(!0)
                }))
            }))
        }

        function Ff(a) {
            a.$a(!1);
            a.sb.forEach(function(a) {
                return a()
            });
            a.sb = []
        }

        function Cf(a, b) {
            a.getVsync().mutate(function() {
                a.jb || (a.jb = new $d(a.win.document), a.element.appendChild(a.jb.build()));
                a.jb.toggle(b)
            })
        }
        f.isAd = function() {
            return this.element.hasAttribute("ad")
        };

        function Of(a, b) {
            var c = this;
            this.Sa = b;
            this.Kd = v(a, "xhr");
            this.loadBookendConfig = oc(function() {
                return Pf(c)
            })
        }

        function Pf(a) {
            var b = gb(a.Sa, "> amp-story-bookend");
            if (!b || !b.hasAttribute("src")) return Promise.resolve(null);
            var c = b.getAttribute("src"),
                d = {
                    requireAmpResponseSourceOrigin: !1
                };
            return Ea(u(a.Sa), "url-replace").expandUrlAsync(n().assertString(c)).then(function(b) {
                return a.Kd.fetchJson(b, d)
            }).then(function(a) {
                n().assert(a.ok, "Invalid HTTP response");
                return a.json()
            })
        };

        function Qf(a, b) {
            var c = Za(a.document, "div", {
                "class": "i-amphtml-story-toast"
            });
            "string" == typeof b ? c.textContent = b : c.appendChild(b);
            a.document.body.appendChild(c);
            x(a).delay(function() {
                return Xa(c)
            }, 2600)
        };
        var Rf = la({
                system: "13",
                email: "6",
                facebook: "7",
                linkedin: "10",
                pinterest: "11",
                gplus: "8",
                tumblr: "14",
                twitter: "15",
                whatsapp: "16",
                sms: "12"
            }),
            Sf = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-share-widget"
                }),
                children: [{
                    tag: "ul",
                    attrs: q({
                        "class": "i-amphtml-story-share-list"
                    }),
                    children: [{
                        tag: "li",
                        attrs: q({
                            "class": "i-amphtml-story-share-system"
                        })
                    }]
                }]
            },
            Tf = {
                tag: "li",
                attrs: q({
                    "class": "i-amphtml-story-share-item"
                })
            },
            Uf = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-share-icon i-amphtml-story-share-icon-link"
                }),
                localizedStringId: "9"
            };

        function Vf(a) {
            var b = {};
            a && Object.keys(a).forEach(function(c) {
                b["data-param-" + c] = a[c]
            });
            return b
        }

        function Wf(a, b, c) {
            var d = Rf[b];
            return Ed(a, [{
                tag: "amp-social-share",
                attrs: Object.assign(q({
                    width: 48,
                    height: 66,
                    "class": "i-amphtml-story-share-icon",
                    type: b
                }), Vf(c)),
                localizedStringId: d
            }])
        }

        function Xf(a) {
            this.w = null;
            this.win = a;
            this.Ec = this.root = null;
            this.Ma = v(this.win, "story-request")
        }
        Xf.prototype.build = function(a) {
            this.w = a;
            this.Ec = lb(this.win, "localization");
            this.root = A(this.win.document, Sf);
            this.loadProviders();
            Yf(this);
            this.isSystemShareSupported() && (a = this.root.querySelector(".i-amphtml-story-share-system"), this.loadRequiredExtensions(), a.appendChild(Wf(this.win.document, "system")));
            return this.root
        };

        function Yf(a) {
            if (a.win.document.queryCommandSupported("copy")) {
                var b = A(a.win.document, Uf);
                Zf(a, b);
                z(b, "click", function(b) {
                    b.preventDefault();
                    $f(a)
                })
            }
        }

        function $f(a) {
            var b = Ha(a.w, "documentInfo").get().canonicalUrl;
            Wb(a.win, b) ? Qf(a.win, Gd(a.win.document, {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-copy-successful"
                }),
                children: [{
                    tag: "div",
                    localizedStringId: "5"
                }, {
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-copy-url"
                    }),
                    unlocalizedString: b
                }]
            })) : a.Ec.then(function(b) {
                var c = b.getLocalizedString("4");
                Qf(a.win, c)
            })
        }
        Xf.prototype.isSystemShareSupported = function(a) {
            a = void 0 === a ? this.w : a;
            a = Ha(a, "viewer");
            var b = w(this.win),
                c = a.isWebviewEmbedded() && b.isChrome();
            return "share" in navigator && !c
        };
        Xf.prototype.loadProviders = function() {
            var a = this;
            this.loadRequiredExtensions();
            this.Ma.loadBookendConfig().then(function(b) {
                var c = b && b["share-providers"];
                c && ag(a, c)
            })
        };

        function bg(a) {
            var b = {};
            a.forEach(function(a) {
                ha(a) ? "facebook" == a.provider ? b.facebook = {
                    app_id: a["app-id"]
                } : b[a.provider] = !0 : b[a] = !0
            });
            return b
        }

        function ag(a, b) {
            b && Array.isArray(b) && (b = bg(b));
            Object.keys(b).forEach(function(c) {
                "system" == c ? n().warn("AMP-STORY", "`system` is not a valid share provider type. Native sharing is enabled by default and cannot be turned off.", c) : ha(b[c]) ? Zf(a, Wf(a.win.document, c, b[c])) : !0 === b[c] ? Zf(a, Wf(a.win.document, c)) : n().warn("AMP-STORY", "Invalid amp-story bookend share configuration for %s. Value must be `true` or a params object.", c)
            })
        }
        Xf.prototype.loadRequiredExtensions = function(a) {
            a = void 0 === a ? this.w : a;
            v(this.win, "extensions").installExtensionForDoc(a, "amp-social-share")
        };

        function Zf(a, b) {
            var c = a.root.firstElementChild;
            a = A(a.win.document, Tf);
            a.appendChild(b);
            c.insertBefore(a, c.lastElementChild)
        }

        function cg(a) {
            Xf.call(this, a);
            this.o = y(a);
            this.vc = null
        }
        h(cg, Xf);
        cg.prototype.build = function(a) {
            var b = this;
            Xf.prototype.build.call(this, a);
            this.root.classList.add("i-amphtml-story-share-widget-scrollable");
            rb(a).onResize(Sb(this.win, function() {
                return dg(b)
            }, 100));
            return this.root
        };

        function dg(a) {
            var b = eg(a);
            b.length && a.o.run({
                measure: function(c) {
                    var d = a.root.clientWidth;
                    if (d == a.vc) c.noop = !0;
                    else {
                        var e = b[0].firstElementChild,
                            g = e.offsetLeft - a.root.offsetLeft,
                            k = e.offsetWidth,
                            l = k * b.length + 20 * (b.length - 1);
                        if (l > d - 2 * g) {
                            var m = d - g - k / 2,
                                r = Math.floor(m / (k + 20));
                            c.padding = .5 * (m / r - k)
                        } else {
                            var U = (d - 2 * g - k * b.length) / (b.length - 1);
                            c.padding = Math.min(16, .5 * U)
                        }
                        a.vc = d
                    }
                },
                mutate: function(a) {
                    a.noop || b.forEach(function(c, e) {
                        0 != e && Ab(c, {
                            "padding-left": a.padding + "px"
                        });
                        e != b.length - 1 && Ab(c, {
                            "padding-right": a.padding +
                            "px"
                        })
                    })
                }
            }, {})
        }

        function eg(a) {
            return Array.prototype.filter.call(a.root.querySelectorAll("li"), function(a) {
                return !!a.firstElementChild
            })
        }
        cg.prototype.loadProviders = function() {
            Xf.prototype.loadProviders.call(this);
            dg(this)
        };
        var fg = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-share-menu i-amphtml-story-system-reset"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-share-menu-container"
                    }),
                    children: []
                }]
            },
            gg = {
                tag: "amp-social-share",
                attrs: q({
                    type: "system"
                })
            };

        function hg(a, b) {
            this.h = a;
            this.Gb = this.l = null;
            this.Ga = this.F = !1;
            this.Ra = new Xf(this.h);
            this.j = qb(this.h);
            this.J = b;
            this.o = y(this.h)
        }
        hg.prototype.build = function() {
            this.isBuilt() || (this.F = !0, (this.Ga = this.Ra.isSystemShareSupported(u(this.J))) ? ig(this) : jg(this))
        };
        hg.prototype.isBuilt = function() {
            return this.F
        };

        function ig(a) {
            a.Ra.loadRequiredExtensions(u(a.J));
            a.l = A(a.h.document, gg);
            a.M();
            a.o.mutate(function() {
                Bb(a.l, "display", "none");
                a.J.appendChild(a.l)
            })
        }

        function jg(a) {
            var b = a.h.document.createElement("div");
            a.l = A(a.h.document, fg);
            Dd(b, a.l, ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:%23fff}%3C/style%3E%3C/defs%3E%3Ctitle%3E\u540d\u79f0\u672a\u8a2d\u5b9a-1%3C/title%3E%3Cpath class='cls-1' d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' id='\u30ec\u30a4\u30e4\u30fc_1' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' viewBox='0 0 30 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-menu{position:fixed!important;top:0!important;left:0!important;height:100%!important;width:100%!important;z-index:100001!important;-webkit-transform:translate3d(0,100vh,0)!important;transform:translate3d(0,100vh,0)!important;-webkit-transition-delay:0.15s!important;transition-delay:0.15s!important}.i-amphtml-story-share-menu-visible{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-webkit-transition-delay:0s!important;transition-delay:0s!important}.i-amphtml-story-share-menu:before{content:\"\"!important;position:absolute!important;top:0!important;left:0!important;height:100%!important;width:100%!important;background:#000!important;opacity:0!important;-webkit-transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:opacity 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu.i-amphtml-story-share-menu-visible:before{opacity:0.4!important;-webkit-transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:opacity 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-share-menu-container{position:absolute!important;bottom:0!important;left:0!important;right:0!important;height:auto!important;background:rgba(0,0,0,0.9)!important;-webkit-transform:translate3d(0,100%,0)!important;transform:translate3d(0,100%,0)!important;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.15s cubic-bezier(0.4,0.0,1,1),-webkit-transform 0.15s cubic-bezier(0.4,0.0,1,1)!important}.i-amphtml-story-share-menu-visible .i-amphtml-story-share-menu-container{-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.2s cubic-bezier(0.0,0.0,0.2,1),-webkit-transform 0.2s cubic-bezier(0.0,0.0,0.2,1)!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-share-menu.css*/");
            a.M();
            a.o.run({
                measure: function() {
                    a.Gb = a.l.querySelector(".i-amphtml-story-share-menu-container")
                },
                mutate: function() {
                    a.J.appendChild(b);
                    var c = a.Ra.build(u(a.J));
                    a.Gb.appendChild(c)
                }
            })
        }
        hg.prototype.M = function() {
            var a = this;
            this.j.subscribe("sharemenustate", function(b) {
                kg(a, b)
            });
            this.Ga || this.l.addEventListener("click", function(b) {
                return lg(a, b)
            })
        };

        function kg(a, b) {
            a.Ga && b && (a.l.dispatchEvent(new Event("click")), a.Aa());
            a.Ga || a.o.mutate(function() {
                a.l.classList.toggle("i-amphtml-story-share-menu-visible", b)
            })
        }

        function lg(a, b) {
            ab(b.target, function(b) {
                return b === a.Gb
            }, a.l) || a.Aa()
        }
        hg.prototype.Aa = function() {
            this.j.dispatch("togglesharemenu", !1)
        };

        function mg(a, b, c) {
            a.mutate(function() {
                c ? b.setAttribute("hidden", "hidden") : b.removeAttribute("hidden")
            })
        }

        function ng(a, b, c) {
            var d = a.document.createElement("div");
            d.setAttribute("role", "button");
            Array.isArray(b) ? b.forEach(function(a) {
                return d.classList.add(a)
            }) : d.classList.add(b);
            d.classList.add("i-amphtml-story-button");
            d.addEventListener("click", c);
            return d
        }

        function og(a) {
            this.h = a;
            this.rb = this.wb = this.cb = this.m = null
        }
        og.prototype.build = function(a) {
            this.cb = ng(this.h, ["i-amphtml-story-error-button", "i-amphtml-story-dev-logs-button"], function() {
                return a()
            });
            this.wb = ng(this.h, ["i-amphtml-story-warning-button", "i-amphtml-story-dev-logs-button"], function() {
                return a()
            });
            this.rb = ng(this.h, ["i-amphtml-story-success-button", "i-amphtml-story-dev-logs-button"], function() {
                return a()
            });
            this.m = this.h.document.createElement("div");
            this.m.appendChild(this.cb);
            this.m.appendChild(this.wb);
            this.m.appendChild(this.rb);
            return this.m
        };

        function pg(a, b) {
            if (b.conforms) return a.rb;
            switch (b.level) {
                case 1:
                    return a.cb;
                case 2:
                    return a.wb;
                default:
                    return null
            }
        }
        og.prototype.log = function(a) {
            if (a = pg(this, a)) {
                var b = parseInt(a.getAttribute("data-count") || 0, 10);
                a.setAttribute("data-count", b + 1)
            }
        };
        og.prototype.clear = function() {
            this.cb.setAttribute("data-count", 0);
            this.wb.setAttribute("data-count", 0);
            this.rb.setAttribute("data-count", 0)
        };

        function qg(a) {
            this.h = a;
            this.Ya = this.Da = this.m = null
        }
        f = qg.prototype;
        f.build = function() {
            var a = this;
            this.Ya = this.h.document.createElement("span");
            this.Ya.classList.add("i-amphtml-story-developer-log-context");
            var b = this.h.document.createElement("div");
            b.textContent = "Developer logs for page ";
            b.appendChild(this.Ya);
            var c = ng(this.h, "i-amphtml-story-developer-log-close", function() {
                    return a.hide()
                }),
                d = this.h.document.createElement("div");
            d.classList.add("i-amphtml-story-developer-log-header");
            d.appendChild(b);
            d.appendChild(c);
            this.Da = this.h.document.createElement("ul");
            this.Da.classList.add("i-amphtml-story-developer-log-entries");
            this.m = this.h.document.createElement("div");
            this.m.classList.add("i-amphtml-story-developer-log");
            this.m.setAttribute("hidden", "");
            this.m.appendChild(d);
            this.m.appendChild(this.Da);
            this.clear();
            return this.m
        };
        f.log = function(a) {
            var b;
            a: switch (a.level) {
                case 2:
                    b = "i-amphtml-story-developer-log-entry-warning";
                    break a;
                case 1:
                    b = "i-amphtml-story-developer-log-entry-error";
                    break a;
                default:
                    b = null
            }
            var c = b,
                d = a.conforms ? "i-amphtml-story-developer-log-entry-success" : null,
                e = this.h.document.createElement("li");
            e.classList.add("i-amphtml-story-developer-log-entry");
            c && e.classList.add(c);
            d && e.classList.add(d);
            e.textContent = a.message;
            this.Da.appendChild(e)
        };
        f.clear = function() {
            var a = this;
            y(this.h).mutate(function() {
                for (var b = a.Da; b.firstChild;) b.removeChild(b.firstChild)
            })
        };
        f.setContextString = function(a) {
            this.Ya.textContent = a
        };
        f.toggle = function() {
            var a = !this.m.hasAttribute("hidden");
            mg(y(this.h), this.m, a)
        };
        f.hide = function() {
            mg(y(this.h), this.m, !0)
        };

        function rg(a) {
            this.h = a;
            this.F = !1;
            this.m = null;
            this.gc = this.ac = 0;
            this.o = y(this.h);
            this.Pa = la()
        }
        rg.prototype.build = function(a) {
            var b = this;
            if (this.F) return this.getRoot();
            var c = a.length;
            this.F = !0;
            this.ac = c;
            a.forEach(function(a, c) {
                return b.Pa[a] = c
            });
            this.m = this.h.document.createElement("ol");
            this.m.classList.add("i-amphtml-story-progress-bar");
            for (var d = 0; d < this.ac; d++) {
                var e = this.h.document.createElement("li");
                e.classList.add("i-amphtml-story-page-progress-bar");
                var g = this.h.document.createElement("div");
                g.classList.add("i-amphtml-story-page-progress-value");
                e.appendChild(g);
                this.m.appendChild(e)
            }
            return this.getRoot()
        };
        rg.prototype.getRoot = function() {
            return this.m
        };
        rg.prototype.setActiveSegmentId = function(a) {
            ka.call(this.Pa, a);
            for (var b = this.Pa[a], c = 0; c < this.ac; c++) c < b ? sg(this, c, 1, c == b - 1) : sg(this, c, 0, 0 != b && 1 != this.gc)
        };
        rg.prototype.updateProgress = function(a, b) {
            ka.call(this.Pa, a);
            sg(this, this.Pa[a], b)
        };

        function sg(a, b, c, d) {
            d = void 0 === d ? !0 : d;
            a.gc = b;
            var e = b + 1,
                g = gb(a.getRoot(), ".i-amphtml-story-page-progress-bar:nth-child(" + kb(e) + ") .i-amphtml-story-page-progress-value");
            a.o.mutate(function() {
                var a = "none";
                d && (a = 1 === c || 0 === c ? "transform 200ms ease" : "transform 300ms linear");
                Ab(g, {
                    transform: "scale(" + (c + ",1") + ")",
                    transition: a
                })
            })
        };
        var tg = {
                tag: "aside",
                attrs: q({
                    "class": "i-amphtml-story-system-layer i-amphtml-story-system-reset"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-system-layer-buttons"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            role: "button",
                            "class": "i-amphtml-story-unmute-audio-control i-amphtml-story-button"
                        })
                    }, {
                        tag: "div",
                        attrs: q({
                            role: "button",
                            "class": "i-amphtml-story-mute-audio-control i-amphtml-story-button"
                        })
                    }, {
                        tag: "div",
                        attrs: q({
                            role: "button",
                            "class": "i-amphtml-story-share-control i-amphtml-story-button"
                        })
                    }]
                }]
            },
            ug = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-share-pill-container"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-share-pill"
                    }),
                    children: [{
                        tag: "span",
                        attrs: q({
                            "class": "i-amphtml-story-share-pill-label"
                        }),
                        localizedStringId: "17"
                    }]
                }]
            };

        function vg(a, b) {
            this.h = a;
            this.J = b;
            this.F = !1;
            this.sc = this.S = this.m = null;
            this.Wb = new rg(a);
            this.V = new qg(a);
            this.ab = new og(a);
            this.qb = null;
            this.j = qb(this.h);
            this.o = y(this.h)
        }
        f = vg.prototype;
        f.build = function(a) {
            var b = this;
            if (this.F) return this.getRoot();
            this.F = !0;
            this.m = this.h.document.createElement("div");
            this.S = A(this.h.document, tg);
            Dd(this.m, this.S, ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:%23fff}%3C/style%3E%3C/defs%3E%3Ctitle%3E\u540d\u79f0\u672a\u8a2d\u5b9a-1%3C/title%3E%3Cpath class='cls-1' d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' id='\u30ec\u30a4\u30e4\u30fc_1' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' viewBox='0 0 30 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-system-layer{background:-webkit-linear-gradient(top,rgba(0,0,0,0.35),transparent)!important;background:linear-gradient(180deg,rgba(0,0,0,0.35),transparent)!important;position:absolute!important;top:0!important;left:0!important;right:0!important;height:56px!important;z-index:100000!important;box-sizing:border-box!important;-webkit-transition:opacity 0.3s!important;transition:opacity 0.3s!important;pointer-events:none!important}.i-amphtml-story-bookend-active.i-amphtml-story-system-layer{opacity:0.3!important}.i-amphtml-story-system-layer-buttons{margin-top:8px;float:right!important;pointer-events:auto!important}.i-amphtml-story-button{background-repeat:no-repeat!important;background-position:50%!important;height:48px!important;width:48px!important;cursor:pointer!important;border-radius:50%!important;box-sizing:border-box!important;position:relative!important;background:50% no-repeat!important}.i-amphtml-story-button:active{background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-system-layer .i-amphtml-story-button{float:left!important}.i-amphtml-story-progress-bar{border:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;height:2px!important;left:0!important;margin:4px 0 0!important;padding:0 2px!important;position:absolute!important;right:0!important;top:0!important;visibility:visible!important;z-index:100001!important}[ad-showing] .i-amphtml-story-progress-bar{visibility:hidden!important}.i-amphtml-story-page-progress-bar{background:hsla(0,0%,100%,0.4)!important;border-radius:1px!important;height:100%!important;list-style-type:none!important;margin:0 2px!important;overflow:hidden!important;width:100%!important;-webkit-mask-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)!important}.i-amphtml-story-page-progress-value{background:#fff!important;height:100%!important;width:100%!important;-webkit-transform:translateZ(0) scaleX(0)!important;transform:translateZ(0) scaleX(0)!important;-webkit-transform-origin:left!important;transform-origin:left!important;will-change:transform,transition!important}[dir=rtl] .i-amphtml-story-progress-value{-webkit-transform-origin:right!important;transform-origin:right!important}.i-amphtml-story-mute-audio-control,.i-amphtml-story-unmute-audio-control{display:none!important}.audio-playing:not([muted]) .i-amphtml-story-mute-audio-control,.audio-playing[muted] .i-amphtml-story-unmute-audio-control{display:block!important}.i-amphtml-story-ui-no-buttons .i-amphtml-story-button,.i-amphtml-story-ui-no-buttons .i-amphtml-story-share-pill,.i-amphtml-story-ui-no-buttons .i-amphtml-story-system-layer-buttons{visibility:hidden!important}.i-amphtml-story-unmute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-mute-audio-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")!important}[ios] .i-amphtml-story-share-control{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3a2 2 0 0 1 2 2z'/%3E%3C/svg%3E\")!important;background-position-y:calc(50% - 2px)!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-control{display:none!important}[desktop].i-amphtml-story-system-layer{background:-webkit-linear-gradient(top,rgba(33,33,33,0),rgba(33,33,33,0.32))!important;background:linear-gradient(180deg,rgba(33,33,33,0) 0%,rgba(33,33,33,0.32))!important;top:auto!important;bottom:0!important;height:96px!important;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}[desktop] .i-amphtml-story-progress-bar{position:relative!important;height:3px!important;width:33.33333vw!important;margin:0px!important}[desktop] .i-amphtml-story-page-progress-bar{border-radius:100px!important}[desktop].i-amphtml-story-system-layer .i-amphtml-story-system-layer-buttons{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;height:40px!important;width:33.33333vw!important;min-width:200px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:32px}[desktop] .i-amphtml-story-share-control{display:none}div.i-amphtml-story-share-pill-container{position:fixed!important;display:none!important;top:0!important;height:96px!important;width:100%!important;z-index:1!important;background:-webkit-linear-gradient(top,rgba(33,33,33,0.32),rgba(33,33,33,0))!important;background:linear-gradient(180deg,rgba(33,33,33,0.32) 0%,rgba(33,33,33,0))!important}[desktop] div.i-amphtml-story-share-pill-container{display:block!important}.i-amphtml-story-share-pill{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;position:absolute!important;top:0!important;right:40px!important;bottom:0!important;margin:auto!important;height:40px!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;pointer-events:auto!important}span.i-amphtml-story-share-pill-label{font-family:Roboto,sans-serif!important;position:absolute!important;right:15px!important;text-align:center!important;width:60px!important;font-size:12px!important;font-weight:700!important;letter-spacing:.5px!important;margin:auto!important;color:#fff!important;box-sizing:initial!important;text-transform:uppercase!important}.i-amphtml-story-share-pill:before{position:absolute!important;content:\"\"!important;width:58px!important;height:40px!important;padding:0 16px!important;background-color:hsla(0,0%,100%,0.2)!important;border-radius:500px!important;box-sizing:initial!important;-webkit-transition:width 300ms ease-in-out!important;transition:width 300ms ease-in-out!important;right:0!important}.i-amphtml-story-share-pill .i-amphtml-story-share-item{opacity:0!important;-webkit-transition:opacity 300ms linear!important;transition:opacity 300ms linear!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item{opacity:1!important}.i-amphtml-story-share-pill .i-amphtml-story-share-item{margin:0!important;width:48px!important;height:48px!important;padding:0!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(9){-webkit-transition-delay:30ms!important;transition-delay:30ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(8){-webkit-transition-delay:60ms!important;transition-delay:60ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(7){-webkit-transition-delay:90ms!important;transition-delay:90ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(6){-webkit-transition-delay:120ms!important;transition-delay:120ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(5){-webkit-transition-delay:150ms!important;transition-delay:150ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(4){-webkit-transition-delay:180ms!important;transition-delay:180ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(3){-webkit-transition-delay:210ms!important;transition-delay:210ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:nth-child(2){-webkit-transition-delay:240ms!important;transition-delay:240ms!important}.i-amphtml-story-share-pill:hover .i-amphtml-story-share-item:first-child{-webkit-transition-delay:270ms!important;transition-delay:270ms!important}.i-amphtml-story-share-pill .i-amphtml-story-share-list{padding:0!important;margin:0 72px 0 0!important}.i-amphtml-story-share-pill:hover:before{width:calc(100% - 32px)!important}.i-amphtml-story-share-pill .i-amphtml-story-share-icon{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:48px!important;height:48px!important;padding:0}[desktop] .i-amphtml-story-share-icon{font-size:0px!important;background-size:24px 24px!important;background-position:50%!important;padding:0!important}[desktop] .i-amphtml-story-share-icon.amp-social-share-facebook{background-size:28px 28px!important;background-position:50%!important}[desktop] .i-amphtml-story-share-icon:active:before,[desktop] .i-amphtml-story-share-icon:before{display:none!important}[desktop] .i-amphtml-story-share-list{margin-right:72px!important}[desktop] .i-amphtml-story-share-pill-container{z-index:100002!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-system-layer.css*/");
            this.S.insertBefore(this.Wb.build(a), this.S.lastChild);
            this.sc = this.S.querySelector(".i-amphtml-story-system-layer-buttons");
            ea().development && (this.sc.appendChild(this.ab.build(this.V.toggle.bind(this.V))), this.getShadowRoot().appendChild(this.V.build()));
            this.M();
            this.j.subscribe("canshowsystemlayerbuttons", function(a) {
                b.S.classList.toggle("i-amphtml-story-ui-no-buttons", !a)
            }, !0);
            w(this.h).isIos() && this.S.setAttribute("ios", "");
            return this.getRoot()
        };
        f.M = function() {
            var a = this;
            this.getShadowRoot().addEventListener("click", function(b) {
                b = b.target;
                cb(b, ".i-amphtml-story-mute-audio-control, .i-amphtml-story-mute-audio-control *") ? a.j.dispatch("togglemuted", !0) : cb(b, ".i-amphtml-story-unmute-audio-control, .i-amphtml-story-unmute-audio-control *") ? a.j.dispatch("togglemuted", !1) : cb(b, ".i-amphtml-story-share-control, .i-amphtml-story-share-control *") && (b = a.j.get("sharemenustate"), a.j.dispatch("togglesharemenu", !b))
            });
            this.j.subscribe("adstate", function(b) {
                wg(a,
                    b)
            });
            this.j.subscribe("bookendstate", function(b) {
                a.Ia(b)
            });
            this.j.subscribe("canshowsharinguis", function(b) {
                a.Mb(b)
            }, !0);
            this.j.subscribe("desktopstate", function(b) {
                a.Y(b)
            }, !0);
            this.j.subscribe("hasaudiostate", function(b) {
                xg(a, b)
            }, !0);
            this.j.subscribe("mutedstate", function(b) {
                a.Nb(b)
            }, !0)
        };
        f.getRoot = function() {
            return this.m
        };
        f.getShadowRoot = function() {
            return this.S
        };

        function wg(a, b) {
            a.o.mutate(function() {
                b ? a.getShadowRoot().setAttribute("ad-showing", "") : a.getShadowRoot().removeAttribute("ad-showing")
            })
        }
        f.Ia = function(a) {
            this.getShadowRoot().classList.toggle("i-amphtml-story-bookend-active", a)
        };
        f.Mb = function(a) {
            var b = this;
            this.o.mutate(function() {
                b.getShadowRoot().classList.toggle("i-amphtml-story-no-sharing", !a)
            })
        };
        f.Y = function(a) {
            var b = this;
            a && yg(this);
            this.o.mutate(function() {
                a ? b.getShadowRoot().setAttribute("desktop", "") : b.getShadowRoot().removeAttribute("desktop")
            })
        };

        function xg(a, b) {
            a.o.mutate(function() {
                a.getShadowRoot().classList.toggle("audio-playing", b)
            })
        }
        f.Nb = function(a) {
            var b = this;
            this.o.mutate(function() {
                a ? b.getShadowRoot().setAttribute("muted", "") : b.getShadowRoot().removeAttribute("muted")
            })
        };
        f.setActivePageId = function(a) {
            this.Wb.setActiveSegmentId(a)
        };
        f.updateProgress = function(a, b) {
            this.Wb.updateProgress(a, b)
        };

        function yg(a) {
            if (!a.qb) {
                a.qb = Ed(a.h.document, ug);
                var b = new Xf(a.h);
                a.qb.querySelector(".i-amphtml-story-share-pill").appendChild(b.build(u(a.J)));
                a.S.appendChild(a.qb)
            }
        }
        f.logAll = function(a) {
            var b = this;
            ea().development && this.o.mutate(function() {
                a.forEach(function(a) {
                    b.ab.log(a);
                    b.V.log(a)
                })
            })
        };
        f.log = function(a) {
            ea().development && (this.ab.log(a), this.V.log(a))
        };
        f.resetDeveloperLogs = function() {
            ea().development && (this.ab.clear(), this.V.clear())
        };
        f.setDeveloperLogContextString = function(a) {
            ea().development && this.V.setContextString(a)
        };
        f.hideDeveloperLog = function() {
            ea().development && this.V.hide()
        };
        var zg = {
            tag: "div",
            attrs: q({
                "class": "i-amphtml-story-unsupported-browser-overlay"
            }),
            children: [{
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-overlay-container"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-gear-icon"
                    })
                }, {
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-overlay-text"
                    }),
                    localizedStringId: "21"
                }]
            }]
        };

        function Ag(a) {
            this.h = a;
            this.m = null
        }
        Ag.prototype.build = function() {
            if (this.m) return this.m;
            this.m = this.h.document.createElement("div");
            var a = A(this.h.document, zg);
            Dd(this.m, a, ".i-amphtml-story-unsupported-browser-overlay{position:fixed!important;z-index:200001!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-gear-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 20 20'%3E%3Cpath fill='none' d='M0 0h20v20H0V0z'/%3E%3Cpath d='M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34a.4.4 0 0 0-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z'/%3E%3C/svg%3E\")!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-unsupported-browser-layer.css*/");
            return this.m
        };
        var Bg = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-no-rotation-overlay i-amphtml-story-system-reset"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-overlay-container"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-rotate-icon"
                        })
                    }, {
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-overlay-text"
                        }),
                        localizedStringId: "20"
                    }]
                }]
            },
            Cg = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-no-rotation-overlay i-amphtml-story-system-reset"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-overlay-container"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-desktop-size-icon"
                        })
                    }, {
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-overlay-text"
                        }),
                        localizedStringId: "18"
                    }]
                }]
            };

        function Dg(a, b) {
            this.h = a;
            this.F = !1;
            this.Ja = null;
            this.Z = w(this.h);
            this.j = qb(this.h);
            this.Sa = b;
            this.o = y(this.h);
            this.M()
        }
        Dg.prototype.build = function() {
            var a = this;
            if (!this.isBuilt()) {
                this.F = !0;
                var b = this.h.document.createElement("div");
                this.Ja = Gd(this.h.document, this.Z.isIos() || this.Z.isAndroid() ? Bg : Cg);
                Dd(b, this.Ja, ".i-amphtml-story-no-rotation-overlay{position:fixed!important;z-index:200000!important;font-family:Roboto,sans-serif;font-weight:700!important;line-height:1.5;padding:32px;background-color:#000!important;color:#fff!important;top:0!important;left:0!important;right:0!important;bottom:0!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;text-align:center!important;display:none!important}.i-amphtml-story-landscape.i-amphtml-story-no-rotation-overlay{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-desktop-size-icon,.i-amphtml-rotate-icon{background-repeat:no-repeat!important;background-position:50%!important;border-radius:50%!important;background-color:#fff!important;padding:16px!important;height:24px!important;width:24px!important;margin:16px auto!important}.i-amphtml-rotate-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77a1.49 1.49 0 0 0-2.12 0L1.75 8.11a1.49 1.49 0 0 0 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29A10.487 10.487 0 0 1 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z'/%3E%3C/svg%3E\")!important}.i-amphtml-desktop-size-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z'/%3E%3C/svg%3E\")!important}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-viewport-warning-layer.css*/");
                this.Y(!!this.j.get("desktopstate"));
                this.o.mutate(function() {
                    a.Sa.insertBefore(b, a.Sa.firstChild)
                })
            }
        };
        Dg.prototype.isBuilt = function() {
            return this.F
        };
        Dg.prototype.M = function() {
            var a = this;
            this.j.subscribe("desktopstate", function(b) {
                a.Y(b)
            }, !0);
            this.j.subscribe("landscapestate", function(b) {
                Eg(a, b)
            }, !0)
        };

        function Eg(a, b) {
            var c = a.j.get("desktopstate"),
                d = !c && b;
            if (d || a.isBuilt()) a.build(), a.o.mutate(function() {
                a.Ja.classList.toggle("i-amphtml-story-landscape", !c && b)
            })
        }
        Dg.prototype.Y = function(a) {
            var b = this;
            this.isBuilt() && this.o.mutate(function() {
                a ? b.Ja.setAttribute("desktop", "") : b.Ja.removeAttribute("desktop")
            })
        };

        function Fg(a, b) {
            this.eb = b;
            this.Hc = new Rb;
            this.h = a;
            this.j = qb(this.h);
            this.M()
        }
        Fg.prototype.M = function() {
            var a = this;
            this.j.subscribe("bookendstate", function(b) {
                b && (Gg(a, 1), Gg(a, 3));
                b || Gg(a, 2)
            })
        };
        Fg.prototype.observe = function(a) {
            this.Hc.add(a)
        };
        Fg.prototype.updateActivePage = function(a, b, c) {
            var d = this,
                e = {
                    pageIndex: a,
                    pageId: c,
                    totalPages: b,
                    storyProgress: a / b
                };
            Gg(this, 0, e);
            a >= b - 1 && this.eb().then(function(a) {
                a || Gg(d, 3)
            })
        };

        function Gg(a, b, c) {
            a.Hc.fire({
                type: b,
                value: c
            })
        };

        function Hg(a, b) {
            this.h = a;
            this.l = b
        }
        Hg.prototype.onNavigationStateChange = function(a) {
            switch (a.type) {
                case 0:
                    Ig(this, "story-page-visible");
                    break;
                case 1:
                    Ig(this, "story-bookend-enter");
                    break;
                case 2:
                    Ig(this, "story-bookend-exit")
            }
        };
        Hg.prototype.onMutedStateChange = function(a) {
            Ig(this, a ? "story-audio-muted" : "story-audio-unmuted")
        };

        function Ig(a, b) {
            var c = lb(a.h, "story-variable");
            c.then(function(c) {
                Hb(a.l, b, c)
            }, function(a) {
                p().error("AMP-STORY", "Could not get analytics variables", a)
            })
        };

        function Jg(a) {
            if (!a) return Promise.resolve();
            var b = new Image;
            b.src = a;
            return Nb(b)
        }

        function Kg(a, b) {
            this.l = b;
            this.h = a;
            this.wc = 0;
            this.Ba = this.l.ownerDocument.createElement("div");
            this.uc = this.l.ownerDocument.createElement("div");
            this.Ea = Lg(this);
            this.Xa = Lg(this);
            this.Ba.classList.add("i-amphtml-story-background-container");
            this.uc.classList.add("i-amphtml-story-background-overlay");
            this.Ba.appendChild(this.Ea);
            this.Ba.appendChild(this.Xa);
            this.Ba.appendChild(this.uc)
        }

        function Lg(a) {
            var b = a.l.ownerDocument.createElement("div");
            b.classList.add("i-amphtml-story-background");
            return b
        }
        Kg.prototype.attach = function() {
            this.l.insertBefore(this.Ba, this.l.firstChild)
        };
        Kg.prototype.setBackground = function(a, b, c) {
            function d(a, b) {
                return a.then(function() {
                    e.wc == g && b()
                })
            }
            c = void 0 === c ? !1 : c;
            var e = this,
                g = ++this.wc,
                k = Jg(b),
                l = x(this.h).promise(c ? 0 : 500),
                m = this.Ea;
            Bb(m, "background-image", "none");
            d(k, function() {
                Bb(m, "background-image", b ? "url(" + b + ")" : null)
            });
            d(Promise.race([k, l]), function() {
                Bb(m, "background-color", a);
                var b = e.Xa;
                e.Xa = e.Ea;
                e.Ea = b;
                e.Xa.classList.add("active");
                e.Ea.classList.remove("active")
            })
        };

        function Mg(a) {
            return AMP.BaseElement.apply(this, arguments) || this
        }
        h(Mg, AMP.BaseElement);

        function Ng() {
            var a = {};
            this.va = (a.storyPageIndex = null, a.storyPageId = null, a.storyPageCount = null, a.storyProgress = null, a.storyIsMuted = null, a)
        }
        Ng.prototype.onNavigationStateChange = function(a) {
            switch (a.type) {
                case 0:
                    a = a.value;
                    var b = a.pageId,
                        c = a.storyProgress,
                        d = a.totalPages;
                    this.va.storyPageIndex = a.pageIndex;
                    this.va.storyPageId = b;
                    this.va.storyProgress = c;
                    this.va.storyPageCount = d
            }
        };
        Ng.prototype.onMutedStateChange = function(a) {
            this.va.storyIsMuted = a
        };
        Ng.prototype.get = function() {
            return this.va
        };
        var Og = ['<h3 class="i-amphtml-story-bookend-heading"></h3>'];
        Og.raw = ['<h3 class="i-amphtml-story-bookend-heading"></h3>'];
        var Pg = ['<div class="i-amphtml-story-bookend-article-meta"></div>'];
        Pg.raw = ['<div class="i-amphtml-story-bookend-article-meta"></div>'];
        var Qg = ['<h2 class="i-amphtml-story-bookend-article-heading"></h2>'];
        Qg.raw = ['<h2 class="i-amphtml-story-bookend-article-heading"></h2>'];
        var Rg = ['\n          <amp-img class="i-amphtml-story-bookend-article-image"\n                  width="100"\n                  height="100">\n          </amp-img>'];
        Rg.raw = ['\n          <amp-img class="i-amphtml-story-bookend-article-image"\n                  width="100"\n                  height="100">\n          </amp-img>'];
        var Sg = ['\n        <a class="i-amphtml-story-bookend-article"\n          target="_top">\n          <div class="i-amphtml-story-bookend-article-meta">\n          </div>\n        </a>'];
        Sg.raw = ['\n        <a class="i-amphtml-story-bookend-article"\n          target="_top">\n          <div class="i-amphtml-story-bookend-article-meta">\n          </div>\n        </a>'];

        function Tg() {}
        Tg.prototype.assertValidity = function(a) {
            a.title && a.url || n().error("amp-story-bookend", "Articles must contain `title` and `url` fields, skipping invalid.");
            Ca(a.url) || n().error("amp-story-bookend", "Unsupported protocol for article URL " + a.url);
            Ca(a.image) || n().error("amp-story-bookend", "Unsupported protocol for article image URL " + a.image)
        };
        Tg.prototype.build = function(a) {
            var b = {
                type: "small",
                title: a.title,
                url: a.url,
                domainName: t(a.url).hostname
            };
            a.image && (b.image = a.image);
            return b
        };
        Tg.prototype.buildTemplate = function(a, b) {
            var c = Pb(b);
            b = c(Sg);
            Ya(b, q({
                href: a.url
            }));
            if (a.image) {
                var d = c(Rg);
                Ya(d, q({
                    src: a.image
                }));
                b.appendChild(d)
            }
            var e = c(Qg);
            e.textContent = a.title;
            b.appendChild(e);
            var g = c(Pg);
            g.textContent = a.domainName;
            b.appendChild(g);
            return b
        };

        function Ug() {}
        Ug.prototype.assertValidity = function(a) {
            a.title || n().error("amp-story-bookend", "Titles must contain `title` field, skipping invalid.")
        };
        Ug.prototype.build = function(a) {
            return {
                type: "article-set-title",
                heading: a.title
            }
        };
        Ug.prototype.buildTemplate = function(a, b) {
            b = Pb(b)(Og);
            b.textContent = a.heading;
            return b
        };
        var Vg = new Tg,
            Wg = new Ug;

        function Xg(a) {
            switch (a) {
                case "small":
                    return Vg;
                case "article-set-title":
                    return Wg;
                default:
                    return null
            }
        }

        function Yg(a) {
            return a.reduce(function(a, c) {
                var b = Xg(c.type);
                if (b) return b.assertValidity(c), a.push(b.build(c)), a
            }, [])
        }

        function Zg(a, b) {
            var c = b.createDocumentFragment();
            a.forEach(function(a) {
                var d = a.type;
                d && Xg(d) && c.appendChild(Xg(d).buildTemplate(a, b))
            });
            return c
        };

        function $g(a) {
            var b = a.querySelector('script[type="application/ld+json"]');
            return b && jb(b) ? Da(b.textContent, function(a) {
                n().error("getJsonLd", "Failed to parse ld+json. Is it valid JSON?", a)
            }) || null : null
        };

        function ah(a) {
            if (!a.title || !a.url) return n().error("amp-story", "Articles must contain `title` and `url` fields, skipping invalid."), null;
            n().assert(Ca(a.url), "Unsupported protocol for article URL " + a.url);
            var b = {
                title: a.title,
                url: a.url,
                domainName: t(a.url).hostname
            };
            a.image && (n().assert(Ca(a.image), "Unsupported protocol for article image URL " + a.image), b.image = a.image);
            return b
        }

        function bh(a) {
            return Object.keys(a || {}).map(function(b) {
                var c = {
                    articles: a[b].map(ah).filter(function(a) {
                        return !!a
                    })
                };
                b.trim().length && (c.heading = b);
                return c
            })
        };
        var ch = {
                tag: "section",
                attrs: q({
                    "class": "i-amphtml-story-bookend i-amphtml-story-system-reset i-amphtml-hidden"
                }),
                children: [{
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-bookend-overflow"
                    }),
                    children: [{
                        tag: "div",
                        attrs: q({
                            "class": "i-amphtml-story-bookend-inner"
                        })
                    }]
                }]
            },
            dh = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-bookend-replay-icon"
                })
            };

        function eh(a) {
            var b = [];
            a.forEach(function(a) {
                a.heading && b.push({
                    tag: "h3",
                    attrs: q({
                        "class": "i-amphtml-story-bookend-heading"
                    }),
                    unlocalizedString: a.heading
                });
                b.push({
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-bookend-article-set"
                    }),
                    children: a.articles.map(function(a) {
                        var b = {
                            tag: "a",
                            attrs: q({
                                "class": "i-amphtml-story-bookend-article",
                                href: a.url,
                                target: "_top"
                            }),
                            children: [{
                                tag: "h2",
                                attrs: q({
                                    "class": "i-amphtml-story-bookend-article-heading"
                                }),
                                unlocalizedString: a.title
                            }, {
                                tag: "div",
                                attrs: q({
                                    "class": "i-amphtml-story-bookend-article-meta"
                                }),
                                unlocalizedString: a.domainName
                            }]
                        };
                        a.image && b.children.unshift({
                            tag: "amp-img",
                            attrs: q({
                                "class": "i-amphtml-story-bookend-article-image",
                                src: a.image,
                                width: 100,
                                height: 100
                            })
                        });
                        return b
                    })
                })
            });
            return b
        }

        function fh(a, b) {
            this.h = a;
            this.Cc = this.F = !1;
            this.Bb = this.m = this.Yb = null;
            this.Ma = v(this.h, "story-request");
            this.Ra = new cg(this.h);
            this.j = qb(this.h);
            this.J = b;
            this.o = y(this.h);
            this.Bd = Ha(u(this.h.document), "resources")
        }
        f = fh.prototype;
        f.build = function() {
            var a = this;
            if (!this.F) {
                this.F = !0;
                this.m = this.h.document.createElement("div");
                this.Bb = A(this.h.document, ch);
                Dd(this.m, this.Bb, ".amp-social-share-facebook{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M211.9 197.4h-36.7v59.9h36.7v175.8h70.5V256.5h49.2l5.2-59.1h-54.4v-33.7c0-13.9 2.8-19.5 16.3-19.5h38.2V82.9h-48.8c-52.5 0-76.1 23.1-76.1 67.3-.1 38.6-.1 47.2-.1 47.2z'/%3E%3C/svg%3E\")}.amp-social-share-pinterest{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3.9-7.1-3-11.8-8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1-22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7-22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-.6 80.1.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5-.1-62.6-53.1-120.8-133.6-120.8z'/%3E%3C/svg%3E\")}.amp-social-share-linkedin{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M186.4 142.4c0 19-15.3 34.5-34.2 34.5-18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5 18.9 0 34.2 15.5 34.2 34.5zm-5 58.9h-57.8v186.8h57.8V201.3zm92.4 0h-55.4v186.8h55.4v-98c0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9v98H398V269.8c0-50-28.3-74.2-68-74.2-39.6 0-56.3 30.9-56.3 30.9v-25.2h.1z'/%3E%3C/svg%3E\")}.amp-social-share-gplus{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M179.7 237.6v46.6h77c-3.1 20-23.3 58.7-77 58.7-46.3 0-84.1-38.5-84.1-85.9 0-47.4 37.8-85.9 84.1-85.9 26.4 0 44 11.3 54.1 21l36.8-35.5C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257s60.7 136 135.7 136C258 393 310 337.8 310 260.1c0-8.9-1-15.7-2.1-22.5H179.7zm288.3-.9h-38.7V198h-38.6v38.7H352v38.6h38.7V314h38.6v-38.7H468'/%3E%3C/svg%3E\")}.amp-social-share-email{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M101.3 141.6v228.9h309.5V141.6H101.3zm274.4 26.2L256 259.3l-119.6-91.5h239.3zm-248.1 26.3l64.1 49.1-64.1 64.1V194.1zm.2 150.1l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7H127.8zm256.6-36.4L320 243.4l64.4-49.3v113.7z'/%3E%3C/svg%3E\")}.amp-social-share-twitter{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h400v400H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M153.62 301.59c94.34 0 145.94-78.16 145.94-145.94 0-2.22 0-4.43-.15-6.63A104.36 104.36 0 0 0 325 122.47a102.38 102.38 0 0 1-29.46 8.07 51.47 51.47 0 0 0 22.55-28.37 102.79 102.79 0 0 1-32.57 12.45c-15.9-16.906-41.163-21.044-61.625-10.093-20.461 10.95-31.032 34.266-25.785 56.873A145.62 145.62 0 0 1 92.4 107.81c-13.614 23.436-6.66 53.419 15.88 68.47A50.91 50.91 0 0 1 85 169.86v.65c.007 24.416 17.218 45.445 41.15 50.28a51.21 51.21 0 0 1-23.16.88c6.72 20.894 25.976 35.208 47.92 35.62a102.92 102.92 0 0 1-63.7 22 104.41 104.41 0 0 1-12.21-.74 145.21 145.21 0 0 0 78.62 23'/%3E%3C/g%3E%3C/svg%3E\")}.amp-social-share-tumblr{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23fff' d='M210.8 80.3c-2.3 18.3-6.4 33.4-12.4 45.2-6 11.9-13.9 22-23.9 30.5-9.9 8.5-21.8 14.9-35.7 19.5v50.6h38.9v124.5c0 16.2 1.7 28.6 5.1 37.1 3.4 8.5 9.5 16.6 18.3 24.2 8.8 7.6 19.4 13.4 31.9 17.5s26.8 6.1 43 6.1c14.3 0 27.6-1.4 39.9-4.3 12.3-2.9 26-7.9 41.2-15v-55.9c-17.8 11.7-35.7 17.5-53.7 17.5-10.1 0-19.1-2.4-27-7.1-5.9-3.5-10-8.2-12.2-14-2.2-5.8-3.3-19.1-3.3-39.7v-91.1h84.6v-55.8h-84.4v-90h-50.3z'/%3E%3C/svg%3E\")}.amp-social-share-whatsapp{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46'%3E%3Cpath fill='%23FFF' d='M35.4 10.4C32 6.9 27.3 5 22.5 5 12.3 5 4.1 13.3 4.2 23.4c0 3.2.9 6.3 2.4 9.1L4 42l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM22.5 38.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L9.9 32l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9 7.2-4.4 16.5-2.3 20.9 4.9 4.4 7.2 2.3 16.5-4.9 20.9-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5.2-.2.4-.4.5-.6.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z'/%3E%3C/svg%3E\")}.amp-social-share-line{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:%23fff}%3C/style%3E%3C/defs%3E%3Ctitle%3E\u540d\u79f0\u672a\u8a2d\u5b9a-1%3C/title%3E%3Cpath class='cls-1' d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 0 1-3.66 3.67h-52.69a3.6 3.6 0 0 1-2.53-1l-.06-.05v-.05a3.65 3.65 0 0 1-1-2.53v-81.96a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66v65.07h35.84a3.66 3.66 0 0 1 3.66 3.66zm31.8 0a3.65 3.65 0 0 1-3.66 3.65h-13.2a3.65 3.65 0 0 1-3.66-3.65v-81.92a3.66 3.66 0 0 1 3.66-3.66H217a3.66 3.66 0 0 1 3.66 3.66zm90.78 0a3.65 3.65 0 0 1-3.66 3.65h-13.19a3.67 3.67 0 0 1-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 0 1-.93-.9L254 229.56v48.66a3.66 3.66 0 0 1-3.67 3.65H237.1a3.65 3.65 0 0 1-3.66-3.65v-81.93a3.66 3.66 0 0 1 3.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 0 1 .21.08l.12.06.19.11a.41.41 0 0 1 .11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 0 1 .22.22 3.58 3.58 0 0 1 .28.37L290.89 245v-48.71a3.66 3.66 0 0 1 3.66-3.66h13.19a3.66 3.66 0 0 1 3.66 3.66zm72.83-68.74a3.66 3.66 0 0 1-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 0 1 3.65 3.67v13.19a3.65 3.65 0 0 1-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 0 1 3.65 3.66v13.19a3.66 3.66 0 0 1-3.65 3.67h-52.7a3.66 3.66 0 0 1-2.53-1l-.05-.05a.12.12 0 0 1-.05-.05 3.65 3.65 0 0 1-1-2.53V196.3a3.6 3.6 0 0 1 1-2.52l.06-.07a3.63 3.63 0 0 1 2.54-1h52.7a3.66 3.66 0 0 1 3.65 3.67z' id='\u30ec\u30a4\u30e4\u30fc_1' data-name='\u30ec\u30a4\u30e4\u30fc 1'/%3E%3C/svg%3E\")}.amp-social-share-sms{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='30' height='29' viewBox='0 0 30 29' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23FFF' stroke-width='3' d='M8.73 26v-5.658H2V2h25.97L28 20.355l-12.062.042z' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E\")}.amp-social-share-system{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23fff' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E\")}amp-social-share{background-repeat:no-repeat;background-position:50%;background-size:contain;text-decoration:none;cursor:pointer;position:relative}.amp-social-share-twitter{background-color:#1da1f2}.amp-social-share-facebook{background-color:#3b5998}.amp-social-share-pinterest{background-color:#bd081c}.amp-social-share-linkedin{background-color:#0077b5}.amp-social-share-gplus{background-color:#dc4e41}.amp-social-share-tumblr{background-color:#3c5a77}.amp-social-share-email{background-color:#000}.amp-social-share-whatsapp{background-color:#25d366}.amp-social-share-line{background-color:#52b448}.amp-social-share-sms{background-color:#ca2b63}.amp-social-share-system{background-color:#000}.i-amphtml-story-share-widget{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;margin:16px 8px!important}.i-amphtml-story-no-sharing .i-amphtml-story-share-widget{display:none!important}.i-amphtml-story-share-widget-scrollable{padding:16px 0!important;height:66px!important;overflow:auto!important}.i-amphtml-story-share-widget::-webkit-scrollbar{width:0px!important;background:transparent!important}.i-amphtml-story-share-list{list-style:none!important;padding:0 8px!important;margin:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;width:100%!important}.i-amphtml-story-share-item{width:48px!important;height:66px!important;padding:0 16px!important;margin-bottom:12px!important}@media (max-width:410px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;min-width:60px!important;width:25%!important}}@media (min-width:410px) and (max-width:500px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:20%!important}}@media (min-width:500px) and (max-width:720px){.i-amphtml-story-share-item{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;padding:0!important;width:16.66%!important}}.i-amphtml-story-share-widget-scrollable .i-amphtml-story-share-list{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.i-amphtml-story-share-widget-scrollable>*>.i-amphtml-story-share-item{display:block!important;margin:0!important;padding:0 16px!important;min-width:auto!important}.i-amphtml-story-share-item:empty{display:none!important}.i-amphtml-story-share-icon{box-sizing:border-box!important;position:relative!important;width:48px!important;height:66px!important;padding:56px 0 0!important;background-color:transparent!important;display:block!important;text-transform:capitalize!important;font-family:Roboto,sans-serif!important;color:#fff!important;font-weight:400!important;line-height:10px!important;font-size:10px!important;text-align:center!important;cursor:pointer!important;background-position:8px 8px!important;background-size:32px 32px!important;background-repeat:no-repeat!important}.i-amphtml-story-share-icon.amp-social-share-facebook{background-size:38px 38px!important;background-position:5px 5px!important}.i-amphtml-story-share-icon:before{content:\" \"!important;border-radius:4px!important;background-color:hsla(0,0%,100%,0.15)!important;width:48px!important;height:48px!important;position:absolute!important;display:block!important;top:0!important;left:0!important;z-index:-1!important}.i-amphtml-story-share-icon:active,.i-amphtml-story-share-icon:focus{outline:none!important;box-shadow:none!important}.i-amphtml-story-share-icon:active:before{background-color:#787878!important}.i-amphtml-story-share-icon[type=email]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon[type=system]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-share-icon-link{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-bookend{text-align:left!important;color:#fff!important;bottom:0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;left:0!important;position:absolute!important;right:0!important;top:0!important;z-index:100001!important;-webkit-transition:-webkit-transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:-webkit-transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:transform 0.3s cubic-bezier(0.0,0.0,0.2,1),-webkit-transform 0.3s cubic-bezier(0.0,0.0,0.2,1)!important}.i-amphtml-story-bookend.i-amphtml-hidden{-webkit-transition:-webkit-transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:-webkit-transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:transform 0.2s cubic-bezier(0.4,0.0,1,1),-webkit-transform 0.2s cubic-bezier(0.4,0.0,1,1)!important;-webkit-transform:translateY(100vh)!important;transform:translateY(100vh)!important;pointer-events:none!important}.i-amphtml-story-bookend-overflow{overflow:auto!important;-webkit-overflow-scrolling:touch!important;margin-top:auto!important}.i-amphtml-story-bookend-inner{margin:88px 0 0!important;position:relative!important;padding-top:32px!important;overflow:hidden!important}.i-amphtml-story-bookend-inner:before{content:\" \"!important;display:block!important;z-index:-1!important;background:rgba(0,0,0,0.7)!important;position:absolute!important;left:8px!important;top:8px!important;bottom:8px!important;right:8px!important;border-radius:8px!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-bookend-inner:before,[desktop] .i-amphtml-story-bookend-inner:before{left:0!important;top:0!important;bottom:0!important;right:0!important;border-radius:0!important}.i-amphtml-story-bookend-heading{text-transform:uppercase!important;font-size:12px!important;padding-bottom:8px!important;margin:48px 0 8px!important;border-bottom:1px solid hsla(0,0%,100%,0.25)!important;color:hsla(0,0%,100%,0.54)!important;font-family:Roboto,sans-serif;font-weight:700!important;letter-spacing:0.83px!important;line-height:1!important}.i-amphtml-story-bookend-article-meta{font-family:Roboto,sans-serif;font-weight:400!important;font-size:14px!important;line-height:1!important;color:hsla(0,0%,100%,0.6)!important}.i-amphtml-story-bookend-article{box-sizing:border-box!important;display:block!important;text-decoration:none!important;color:inherit!important;overflow:hidden!important;-webkit-box-flex:1!important;-ms-flex:1 0 320px!important;flex:1 0 320px!important;min-width:33%!important;margin:24px 0!important;padding:0 32px!important}@media (min-width:640px){.i-amphtml-story-bookend-article{max-width:50%!important}}@media (min-width:960px){.i-amphtml-story-bookend-article{max-width:33%!important}}.i-amphtml-story-bookend-article-heading{font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:16px!important;color:#fff!important;line-height:1.4;margin:0 0 8px!important}.i-amphtml-story-bookend-article-image,.i-amphtml-story-bookend-replay-image{width:100px!important;height:100px!important;border-radius:8px!important;overflow:hidden}.i-amphtml-story-bookend-article-image.amp-notsupported{display:none!important}.i-amphtml-story-bookend-article-image>img{-o-object-fit:cover;object-fit:cover}.i-amphtml-story-bookend-replay-image{background-position:50%!important;background-size:cover!important}.i-amphtml-story-bookend-article-image,.i-amphtml-story-bookend-replay-icon,.i-amphtml-story-bookend-replay-image{float:right!important;margin-left:24px!important;position:relative!important}.i-amphtml-story-bookend-replay{padding:16px 0!important;margin:0 0 24px!important;overflow:hidden!important}.i-amphtml-story-bookend-replay-icon{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") 50% no-repeat!important}.i-amphtml-story-bookend-replay-image>.i-amphtml-story-bookend-replay-icon{width:100%!important;height:100%!important;background-color:rgba(0,0,0,0.3)!important;position:absolute!important;margin-left:0!important}.i-amphtml-story-bookend-replay>.i-amphtml-story-bookend-replay-icon{width:48px!important;height:48px!important;background-color:rgba(60,60,60,0.5)!important;position:static!important;border-radius:4px!important}.i-amphtml-story-bookend-heading+.i-amphtml-story-bookend-article-set{border-top:none!important}.i-amphtml-story-bookend-article-set{border-top:1px solid hsla(0,0%,100%,0.25)!important;margin-bottom:32px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.i-amphtml-story-bookend-heading,.i-amphtml-story-bookend-replay{margin-left:32px!important;margin-right:32px!important}.i-amphtml-story-bookend-fullbleed:before{content:\" \"!important;display:block!important;background-image:-webkit-linear-gradient(bottom,rgba(1,1,1,0),#000)!important;background-image:linear-gradient(0deg,rgba(1,1,1,0),#000)!important;position:fixed!important;top:0!important;left:0!important;right:0!important;height:40px!important;pointer-events:none!important;z-index:1!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-widget{margin-left:0!important;margin-right:0!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-share-list{padding-left:16px!important;padding-right:16px!important}[desktop].i-amphtml-story-bookend{-webkit-transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;-webkit-transform:translateY(0)!important;transform:translateY(0)!important;opacity:1!important}[desktop].i-amphtml-story-bookend.i-amphtml-hidden{-webkit-transition:opacity 0.2s cubic-bezier(0.4,0.0,1,1)!important;transition:opacity 0.2s cubic-bezier(0.4,0.0,1,1)!important;-webkit-transform:translateY(100vh)!important;transform:translateY(100vh)!important;opacity:0!important}[desktop].i-amphtml-story-bookend .i-amphtml-story-share-widget{display:none!important}[desktop] .i-amphtml-story-bookend-inner{box-sizing:border-box!important;min-height:100vh!important;padding:104px 156px 64px!important;margin:0!important}[desktop] .i-amphtml-story-bookend-inner:before,[desktop] .i-amphtml-story-bookend-replay{display:none!important}[desktop] .i-amphtml-story-bookend-overflow{margin-top:0!important;margin-bottom:0!important}@media (min-width:952px){[desktop] .i-amphtml-story-bookend-article{max-width:50%!important}}@media (min-width:1272px){[desktop] .i-amphtml-story-bookend-article{max-width:33%!important}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story-bookend.css*/");
                this.Yb = gh(this);
                var b = u(this.J),
                    c = this.getShadowRoot().firstElementChild.firstElementChild;
                c.appendChild(this.Yb);
                c.appendChild(this.Ra.build(b));
                this.M();
                this.o.mutate(function() {
                    a.J.appendChild(a.getRoot())
                })
            }
        };
        f.M = function() {
            var a = this;
            this.getShadowRoot().addEventListener("click", function(b) {
                hh(a, b.target) && (b.stopPropagation(), a.Aa())
            });
            this.Yb.addEventListener("click", function(b) {
                b.stopPropagation();
                Xd(a.getRoot(), "ampstory:replay")
            });
            this.getShadowRoot().firstElementChild.addEventListener("scroll", Sb(this.h, function() {
                return ih(a)
            }, 100));
            this.h.addEventListener("keyup", function(b) {
                a.Fa() && 27 == b.keyCode && (b.preventDefault(), a.Aa())
            });
            this.j.subscribe("bookendstate", function(b) {
                a.Ia(b)
            });
            this.j.subscribe("canshowsharinguis",
                function(b) {
                    a.Mb(b)
                }, !0);
            this.j.subscribe("desktopstate", function(b) {
                a.Y(b)
            }, !0)
        };
        f.Fa = function() {
            return !!this.j.get("bookendstate")
        };
        f.Ia = function(a) {
            jh(this, a)
        };
        f.Mb = function(a) {
            var b = this;
            this.o.mutate(function() {
                b.getShadowRoot().classList.toggle("i-amphtml-story-no-sharing", !a)
            })
        };
        f.Y = function(a) {
            kh(this, a)
        };
        f.loadConfig = function(a) {
            a = void 0 === a ? !0 : a;
            var b = this;
            return void 0 !== this.da ? (a && this.da && lh(this, this.da), Promise.resolve(this.da)) : this.Ma.loadBookendConfig().then(function(c) {
                if (!c) return null;
                if ("v1.0" === c["bookend-version"]) {
                    var d = {};
                    b.da = (d["bookend-version"] = "v1.0", d.components = Yg(c.components), d["share-providers"] = c["share-providers"], d)
                } else p().warn("amp-story", "Version v0.1 of the amp-story-bookend is deprecated. Use v1.0 instead."), b.da = {
                    shareProviders: c["share-providers"],
                    relatedArticles: bh(c["related-articles"])
                };
                a && lh(b, b.da);
                return b.da
            }).catch(function(a) {
                n().error("amp-story", "Error fetching bookend configuration", a.message);
                return null
            })
        };
        f.Aa = function() {
            this.j.dispatch("togglebookend", !1)
        };

        function hh(a, b) {
            return !ab(b, function(b) {
                return b == a.getShadowRoot().firstElementChild.firstElementChild
            })
        }

        function ih(a) {
            a.Fa() && a.o.run({
                measure: function(b) {
                    b.shouldBeFullBleed = 88 <= a.getShadowRoot().firstElementChild.scrollTop
                },
                mutate: function(b) {
                    a.getShadowRoot().classList.toggle("i-amphtml-story-bookend-fullbleed", b.shouldBeFullBleed)
                }
            }, {})
        }

        function jh(a, b) {
            a.o.mutate(function() {
                a.getShadowRoot().classList.toggle("i-amphtml-hidden", !b)
            })
        }

        function kh(a, b) {
            a.o.mutate(function() {
                b ? a.getShadowRoot().setAttribute("desktop", "") : a.getShadowRoot().removeAttribute("desktop")
            })
        }
        f.isBuilt = function() {
            return this.F
        };

        function lh(a, b) {
            a.Cc || (a.isBuilt(), a.Cc = !0, "v1.0" === b["bookend-version"] ? mh(a, b.components) : nh(a, b.relatedArticles))
        }

        function nh(a, b) {
            a.o.mutate(function() {
                a.getShadowRoot().firstElementChild.firstElementChild.appendChild(Ed(a.h.document, eh(b)))
            })
        }

        function mh(a, b) {
            var c = Zg(b, a.h.document),
                d = a.getShadowRoot().firstElementChild.firstElementChild;
            a.Bd.mutateElement(d, function() {
                return d.appendChild(c)
            })
        }
        f.getRoot = function() {
            this.isBuilt();
            return this.m
        };
        f.getShadowRoot = function() {
            this.isBuilt();
            return this.Bb
        };

        function gh(a) {
            var b = u(a.J),
                c = $g(b.getRootNode()),
                d = c && c.headline ? c.headline : n().assertElement(a.h.document.head.querySelector("title"), "Please set <title> or structured data (JSON-LD).").textContent,
                b = t(Ha(b, "documentInfo").get().canonicalUrl).hostname,
                e;
            c && Array.isArray(c.image) && c.image.length && (n().assert(Ca(c.image), "Unsupported protocol for story image URL " + c.image), e = c.image[0]);
            a = a.h.document;
            e = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-bookend-replay"
                }),
                children: [e ? {
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-bookend-replay-image",
                        style: "background-image: url(" + e + ") !important"
                    }),
                    children: [dh]
                } : dh, {
                    tag: "h2",
                    attrs: q({
                        "class": "i-amphtml-story-bookend-article-heading"
                    }),
                    unlocalizedString: d
                }, {
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-bookend-article-meta"
                    }),
                    unlocalizedString: b
                }]
            };
            return A(a, e)
        };
        var oh = "1005249088 1006163429 1008162951 10089108 1010750108 101608808 1019348494 1024745460 1025683127 1033170015 1040387537 1042067194 1048639639 1048768124 1055309246 1061774354 1066656902 1075430814 1080553171 1081382723 1085278050 1087738722 108933955 1097876642 1098115586 1120549175 1122637707 1123796379 1137284944 1139124777 1148058575 1151862878 1158106191 1162517776 1167928101 1170971680 1172399292 1180555863 1182996899 1188221598 1189200007 1191530385 1193086302 1196288955 1203175957 1203629527 1206202368 1209396307 1210508580 1212905960 1219663970 1221946827 1223948430 1224563123 1224575240 122776143 1230010468 1235870422 1239612924 1252045233 1266686880 1267058499 1271217363 1271836085 1272420392 1275112483 1279420495 128315777 1291285285 129196458 1296373605 1304908597 1314122247 1323716407 1331021272 1332628692 1337085136 1343032467 1343153594 134439678 1348111506 1358036688 1358275160 1362700107 1365188219 1366298771 136948846 1370863654 1382180463 1384161523 1384885545 1390195319 1390422041 1391355679 1392973808 1401234945 1403015859 1406014587 1408213495 1409815047 1416203172 1416336576 1420964370 1424038674 1426205130 1426908974 142793127 1429768323 1433535079 1436589466 1448422024 1451865411 1452555948 1452631355 1454471704 1456452353 1462086116 1463873379 1472537769 1474107485 1476740172 1485177716 1491204959 1495909416 1502183300 1502183303 1506356073 1510693494 1512200976 1515192136 1516044894 1516712134 1527869901 1527955987 1531622827 1542113246 1542890108 1544071036 1544904918 154680092 1548043628 1551216225 1554302139 1560556568 156105329 1565761663 1568645882 1568765576 1574632236 1581752952 1587531568 1597805481 1598215278 1604714840 1605964375 1606771939 1606845272 1607726622 1616084341 1618633174 1628432066 1629009934 1633699767 1635597923 1638733129 1639295851 1639843601 1641361303 1641755208 1645367571 1648418043 164958789 1651834381 165218748 1657655384 166080441 166550074 1668265379 167065142 1672286708 167457365 1686480925 1692205821 1696562222 1710525818 1712515810 172062822 1721539702 1727000213 1729406438 1734343726 1741775485 1746787055 1750274567 1752199172 1755487660 1758506884 176099546 1762075722 1762779619 1765761661 1766408482 1777879957 1778814731 1782415871 1786821707 1790421447 1793364122 1796631487 179954814 1799580062 1804754165 1814333326 1820719129 1828302437 1831449632 1842365929 1844097179 185695994 1857703569 1862429134 1866288580 1868825623 1873175698 1878840548 188153886 1881549152 1885949806 1890671223 1890684493 1891136033 1892097962 1892894796 1897412628 1897877027 190058212 1911273138 1914691069 1916053925 1921891253 19233369 1924394550 1926444709 192946894 1932332195 1934543421 1937775827 1938906399 1944707380 1948987049 1956324539 1958476175 1960309827 1960384540 1969495793 197478601 1980609434 198514785 2003114268 200513980 2025148527 2025653254 2034674542 2038626037 2038733725 2045713344 2050218658 2051204756 2052997999 2062991370 2064945552 2068779408 2072157691 2072267213 207690439 2076974480 2077125460 208348204 2084091630 2085643881 209024299 2105278890 2109740133 2114974219 2115738579 2116825342 2117678752 2118239665 2124375454 2126860507 212690086 2128662947 2130032338 2131418359 2134891083 2138194233 2139925877 2150296095 2151200413 2160565275 2160997979 2163333100 2164891421 21653271 2172705717 218358682 2183916165 2185544172 2193197883 2199838184 220103233 220632861 2207832807 2214432888 2221548842 2231215830 2232562594 2236849121 2246978037 2247419316 2250390055 2250762825 2252559194 2254619785 2266549358 2271213671 2275977064 2277458929 2278516260 2284332078 2299758819 2311290044 2313067530 2319346288 2320558357 2325333010 2326328585 2342924379 234914730 2355703345 2360854839 2362191459 2373437534 2374338088 2375389254 2380804515 2388222966 2391306573 2393754227 2406112565 2408225607 2413038656 2414533450 2415015357 241505564 2422198952 2426360694 2427371871 2428857403 2434633986 2437839027 2438549543 2450881433 2451485116 2454481433 2465244303 2471412274 2472591333 2479714660 2479885882 2480671357 2483800093 2486258543 2487828098 2490491327 2491279653 2497925282 2498415300 2500743291 25024500 250464294 2512768819 2514009950 2514987571 2517493756 251839354 25231870 2529138038 2529319010 2540030627 255752794 2563128128 2564618500 2565653830 2569424332 2580152873 2587850265 2588277885 2594064109 2600368355 2602595202 2606715995 2611729722 2612967453 2613072379 2616846056 2619537797 2627761745 2629810525 2632194804 2635588792 2636391541 2637085339 2639830307 2652634921 2662207691 2669510717 2671290557 2672599929 2676022422 2678501748 2688673784 2689355865 2690235168 2702577685 2705736432 270580042 2713112922 2718273594 2718446350 2718657511 2720496885 2723434276 2725145135 2731883839 2732398879 2734313767 273580543 2738155690 2741673809 2749835187 2754997109 2755153627 2759976952 2761508292 2762302648 2766106524 2766754689 2767961054 2769442224 2771839729 2773939274 2774175302 2780639696 2784212793 2784479860 2787853368 2790502057 2791249547 2795182078 2797839121 2797844367 2798104093 2803957366 2812672743 2814269253 2820864954 2825564215 2830660705 2835331287 283661147 2845803411 2852627326 2861134475 2866448207 2866470331 2870769104 2871678619 2872980659 288246341 2885388648 2887960156 2889518419 2893467144 2893590542 2911378586 2914243153 2917909858 2918230434 2919447987 2927763036 2930531110 2930818498 2933287666 2933678691 2934412348 2939338957 2941207893 294281365 294281662 2947883909 2951025154 2955070851 296084766 296529422 2972849537 2981581097 3003621454 3017572169 3018496372 3018644774 3022092377 302251478 3024284791 3028558767 3029994837 3033234915 3034807703 3036809290 303732921 3040972817 3047184436 3057278033 3060519019 3060985947 3063651839 3071986971 3075313860 3090387299 3090399922 3092172140 3107121214 3108333779 3109674920 3121167307 3129729985 313079991 3132507840 3133369938 3144086645 3144741080 3153172095 3156001180 3162265419 3172876126 3176449798 3181090214 3185535902 3188249139 3188949253 3189406311 3200093935 3201739013 3208039641 3213623864 3216947982 3226517851 323546264 3238374737 3240528713 3244251087 3246119198 3250723869 3252080663 3256754508 3259979025 3261687030 3263349802 3263974103 3268659322 3271330177 3283747143 3284374556 3285310371 32924227 3295776646 3301018689 3301688194 3307671928 3308888367 3309952347 3317371897 3318184596 3319768647 3320829318 3322156041 3326846086 3341054457 334796489 3348379104 3349409886 3353312560 3355368229 3355865416 335855777 335993804 3361466716 3362397554 3367171293 3376790055 3377688480 3381390900 3385268402 3385846727 3387204737 338844244 3390751743 3394315494 3394334006 3402978750 3408249191 3412968150 3416831537 3422087589 3424311896 3429649351 3432208034 3436742277 3437958748 3446215673 3448620799 3450221390 3450932588 3451824873 3455711044 3458310975 3460779095 3464002149 3473901382 3494887100 3498056818 3500123957 3501893757 3506413408 3512587025 351733085 3523014533 3523382932 35263365 353380306 3535681127 354082441 3546004700 3549522247 3550596029 3551433075 3552657708 3561349461 3568064118 3572504894 3574354948 3584992110 3585356855 3589838638 3591084947 3591311390 3594356251 3607050633 3616387476 3623074634 3625812674 3625817820 3635562717 3638406088 363894702 3651158166 365125059 3652728877 3655120568 365605518 3656736643 3657625030 3662429216 3670522374 3673866953 3685844947 3692367215 3695202375 369644343 3700425047 3700982698 3710911628 3711744991 3712090763 3718288426 3723719135 3724179151 3739222329 3739723588 3741803823 3742076373 3743398870 3747063085 3748953276 3751563702 3768651282 3774834930 3782187505 3783616226 3785031815 3802272349 3803427289 3808515023 3817759242 3821795909 3828921363 382915004 3835330948 3835931824 3838983789 3840525739 3841844405 3842213279 3866956400 3867683259 3872981885 3882281943 3882775575 3887937944 3902596111 3907965689 3916735828 3919621757 3926983707 3931371606 3935672072 3942169396 39435537 3949846101 3950676371 3952253013 3952985875 3960376034 3964022265 3969333164 3980734000 3981323989 3984648422 398689081 3989863158 399163616 4011166599 4012569232 4015960781 402077837 4022635071 4031427958 4038419154 4038719404 4040963526 4045001232 4045348626 4047076163 4050194446 4051110478 4053566461 4062202631 4064403033 4067292809 4071169494 4072394641 4083044353 4084194935 4092369519 4092664937 4096098894 4097039999 4098138342 4100429993 4101484574 4102232185 410737467 4107833758 4109200270 4118683051 4123388433 4126100909 4127212193 4127351496 4129698325 4130370977 4136314176 4137128901 4137746800 4138310485 4138748709 4139415765 4140762491 414191242 4143625838 4158727075 416271463 4162923732 4165850368 4166688207 4171920376 4177803870 4188696195 4189589756 4189681769 4190697962 4192009492 4192906772 4194824130 4195946149 4199121874 4200069764 4205027822 4205379393 4206479264 4214687327 4218607244 4220526267 4225558487 4236710113 4237053731 4237182114 4237691393 4248203292 4249010776 4249223952 4265092200 4269692612 4273375831 4278046063 4279918903 4280929457 4282579220 4283958960 4286009170 4287324892 4288013307 428973607 4292132695 431449824 436035672 436895478 4389594 446783407 451861333 455553168 468972428 473408210 475325125 480050636 481608910 482157976 497560025 508331528 509623217 509801075 510469576 52068258 524581881 525657889 535848262 542002382 54455908 552831033 56119367 589348565 590180088 590449081 605645428 607649949 613252162 616398681 616652136 620434036 628256541 630124302 637590687 645596329 646925241 649068147 663752382 664849843 666552315 667802223 672304730 673490260 675617839 676286387 679226261 681317506 684496063 687924735 690204840 699169033 699554795 699835401 708478954 709875223 721006546 722659024 724181429 738209012 740460396 743664866 749072475 750731789 759835262 760645918 76243793 763580606 764546410 769246051 770400223 773697188 777846327 779185847 781950191 785278645 791888271 793360597 795111685 799038630 802940860 803626326 805461297 809525143 812914966 817596813 826702818 829747121 830059440 834917366 835348130 836634675 839663198 840748945 845690173 851918419 853535426 855882027 856215399 865387614 870075114 878041739 884037848 884942273 885000263 886030867 887992794 888009729 9021761 904920502 90677328 907695148 911963500 919166850 926902921 92732745 92829579 93038994 930681418 932642421 932940871 938755445 939810501 947303209 956771599 958749034 959889676 960466505 962380673 963095446 965728075 968466010 973612916 976603789 978364597 982152280 9851868 986539863 988140002 989444878 990312922 994801981".split(" ");
        var ph = {
                className: "i-amphtml-story-back-close-bookend",
                action: "togglebookend",
                data: !1
            },
            qh = {
                className: "i-amphtml-story-button-hidden"
            },
            rh = {
                className: "i-amphtml-story-back-prev",
                triggers: "ampstory:previouspage"
            },
            sh = {
                className: "i-amphtml-story-fwd-next",
                triggers: "ampstory:nextpage"
            },
            th = {
                className: "i-amphtml-story-fwd-replay",
                triggers: "ampstory:replay"
            },
            uh = {
                className: "i-amphtml-story-fwd-more",
                action: "togglebookend",
                data: !0
            },
            vh = {
                tag: "div",
                attrs: q({
                    "class": "i-amphtml-story-button-container"
                }),
                children: [{
                    tag: "button",
                    attrs: q({
                        "class": "i-amphtml-story-button-move"
                    })
                }, {
                    tag: "div",
                    attrs: q({
                        "class": "i-amphtml-story-page-sentinel"
                    })
                }]
            };

        function wh(a, b, c) {
            a.addEventListener("mouseenter", function() {
                b.classList.add(c)
            });
            a.addEventListener("mouseleave", function() {
                b.classList.remove(c)
            })
        }

        function xh(a, b, c) {
            var d = this;
            this.H = b;
            this.element = A(a, vh);
            this.element.classList.add(b.className);
            this.element.addEventListener("click", function(a) {
                a.preventDefault();
                d.H.triggers ? Xd(d.element, d.H.triggers) : d.H.action && d.j.dispatch(d.H.action, d.H.data)
            });
            this.j = c
        }
        xh.prototype.updateState = function(a) {
            a !== this.H && (this.element.classList.remove(this.H.className), this.element.classList.add(a.className), this.H = a)
        };

        function yh(a) {
            var b = a.document;
            a = qb(a);
            this.ma = new xh(b, sh, a);
            this.ka = new xh(b, qh, a);
            this.ma.element.classList.add("next-container");
            this.ka.element.classList.add("prev-container")
        }
        yh.prototype.attach = function(a) {
            wh(this.ma.element, a, "i-amphtml-story-next-hover");
            wh(this.ka.element, a, "i-amphtml-story-prev-hover");
            a.appendChild(this.ma.element);
            a.appendChild(this.ka.element)
        };
        yh.prototype.onNavigationStateChange = function(a) {
            switch (a.type) {
                case 0:
                    var b = a.value;
                    a = b.pageIndex;
                    b = b.totalPages;
                    this.ka.updateState(0 === a ? qh : rh);
                    this.ma.updateState(a === b - 1 ? uh : sh);
                    break;
                case 1:
                    this.ka.updateState(ph);
                    break;
                case 2:
                    this.ka.updateState(rh);
                    this.ma.updateState(uh);
                    break;
                case 3:
                    this.ma.updateState(th)
            }
        };
        var E = {},
            zh = (E["0"] = {
                string: "Aktivieren"
            }, E["1"] = {
                string: "Experiment wurde gestartet..Bitte neu laden."
            }, E["2"] = {
                string: "Weiter klicken"
            }, E["3"] = {
                string: "Zur\u00fcck klicken"
            }, E["4"] = {
                string: "Der Link konnte nicht zur Zwischenablage kopiert werden"
            }, E["5"] = {
                string: "Der Link wurde kopiert."
            }, E["6"] = {
                string: "Email"
            }, E["7"] = {
                string: "Facebook"
            }, E["8"] = {
                string: "Google+"
            }, E["9"] = {
                string: "Link erhalten"
            }, E["10"] = {
                string: "LinkedIn"
            }, E["11"] = {
                string: "Pinterest"
            }, E["12"] = {
                string: "SMS"
            }, E["13"] = {
                string: "Mehr"
            },
                E["14"] = {
                    string: "Tumblr"
                }, E["15"] = {
                string: "Twitter"
            }, E["16"] = {
                string: "Whatsapp"
            }, E["17"] = {
                string: "Teilen"
            }, E["18"] = {
                string: " Vergr\u00f6\u00dfern Sie das Fenster um dieses Erlebnis zu sehen"
            }, E["19"] = {
                string: "Sie m\u00fcssen das amp-story Experiment aktivieren um den Inhalt zu sehen"
            }, E["20"] = {
                string: "Diese Seite is am Besten im Portrait Mode"
            }, E["21"] = {
                string: "Es tut uns sehr leid, aber es sieht so aus als dass der Browser dieses Erlebnis nicht unterst\u00fctzt."
            }, E);
        var Ah = {},
            Bh = (Ah["0"] = {
                string: "Enable"
            }, Ah["1"] = {
                string: "Experiment enabled.  Please reload."
            }, Ah["4"] = {
                string: ":("
            }, Ah["17"] = {
                string: "Share"
            }, Ah["18"] = {
                string: "Expand your window to view this experience"
            }, Ah["19"] = {
                string: "You must enable the amp-story experiment to view this content."
            }, Ah["20"] = {
                string: "The page is best viewed in portrait mode"
            }, Ah["21"] = {
                string: "We're sorry, it looks like your browser doesn't support this experience"
            }, Ah);
        var F = {},
            sd = (F["22"] = {
                string: "Accept",
                description: "Label for a button that allows the user to consent to providing their cookie access."
            }, F["23"] = {
                string: "Decline",
                description: "Label for a button that allows the user to disconsent to providing their cookie access."
            }, F["24"] = {
                string: "Ok",
                description: "Label for a button that allows the user to dismiss the cookie consent dialog."
            }, F["25"] = {
                string: "View on original domain:",
                description: "Label for a heading of a dialog that shows the user the domain from which the story is served."
            },
                F["26"] = {
                    string: "More about AMP results",
                    description: "Label for a link to documentation on how AMP links are handled."
                }, F["0"] = {
                string: "Enable",
                description: "Label for a button that enables the amp-story experiment."
            }, F["1"] = {
                string: "Experiment enabled.  Please reload.",
                description: "Text that is shown once the amp-story experiment has been successfully enabled."
            }, F["2"] = {
                string: "Tap Next",
                description: "Label indicating that users can navigate to the next page, in the amp-story hint UI."
            }, F["3"] = {
                string: "Tap Back",
                description: "Label indicating that users can navigate to the previous page, in the amp-story hint UI."
            }, F["4"] = {
                string: "Could not copy link to clipboard :(",
                description: "String shown in a failure message to inform the user that a link could not be successfully copied to their clipboard."
            }, F["5"] = {
                string: "Link copied!",
                description: "String shown in a confirmation message to inform the user that a link was successfully copied to their clipboard."
            }, F["6"] = {
                string: "Email",
                description: "Button label for the share target that shares a link via email."
            },
                F["7"] = {
                    string: "Facebook",
                    description: "Button label for the share target that shares a link via Facebook."
                }, F["8"] = {
                string: "Google+",
                description: "Button label for the share target that shares a link via Google+."
            }, F["9"] = {
                string: "Get Link",
                description: "Button label for the share target that shares a link via by copying it to the user's clipboard."
            }, F["10"] = {
                string: "LinkedIn",
                description: "Button label for the share target that shares a link via LinkedIn."
            }, F["11"] = {
                string: "Pinterest",
                description: "Button label for the share target that shares a link via Pinterest."
            },
                F["12"] = {
                    string: "SMS",
                    description: "Button label for the share target that shares a link via SMS."
                }, F["13"] = {
                string: "More",
                description: "Button label for the share target that shares a link via deferral to the operating system's native sharing handler."
            }, F["14"] = {
                string: "Tumblr",
                description: "Button label for the share target that shares a link via Tumblr."
            }, F["15"] = {
                string: "Twitter",
                description: "Button label for the share target that shares a link via Twitter."
            }, F["16"] = {
                string: "Whatsapp",
                description: "Button label for the share target that shares a link via Whatsapp."
            },
                F["17"] = {
                    string: "Share",
                    description: "Label for the expandable share widget shown in the desktop UI."
                }, F["18"] = {
                string: "Expand your window to view this experience",
                description: "Text for a warning screen that informs the user that stories are only supported in larger browser windows."
            }, F["19"] = {
                string: "You must enable the amp-story experiment to view this content.",
                description: "Text for a warning screen that informs the user that they must enable an experiment to use stories."
            }, F["20"] = {
                string: "The page is best viewed in portrait mode",
                description: "Text for a warning screen that informs the user that stories are only supported in portrait orientation."
            }, F["21"] = {
                string: "We're sorry, it looks like your browser doesn't support this experience",
                description: "Text for a warning screen that informs the user that their browser does not support stories."
            }, F);
        var G = {},
            Ch = (G["0"] = {
                string: "Enable"
            }, G["1"] = {
                string: "Experiment enabled.  Please reload."
            }, G["2"] = {
                string: "Tap Next"
            }, G["3"] = {
                string: "Tap Back"
            }, G["4"] = {
                string: "Could not copy link to clipboard :("
            }, G["5"] = {
                string: "Link copied!"
            }, G["6"] = {
                string: "Email"
            }, G["7"] = {
                string: "Facebook"
            }, G["8"] = {
                string: "Google+"
            }, G["9"] = {
                string: "Get Link"
            }, G["10"] = {
                string: "LinkedIn"
            }, G["11"] = {
                string: "Pinterest"
            }, G["12"] = {
                string: "SMS"
            }, G["13"] = {
                string: "More"
            }, G["14"] = {
                string: "Tumblr"
            }, G["15"] = {
                string: "Twitter"
            }, G["16"] = {
                string: "Whatsapp"
            },
                G["17"] = {
                    string: "Share"
                }, G["18"] = {
                string: "Expand your window to view this experience"
            }, G["19"] = {
                string: "You must enable the amp-story experiment to view this content."
            }, G["20"] = {
                string: "The page is best viewed in portrait mode"
            }, G["21"] = {
                string: "We're sorry, it looks like your browser doesn't support this experience"
            }, G);
        var H = {},
            Dh = (H["0"] = {
                string: "Habilitar"
            }, H["1"] = {
                string: "Experimento habilitado. Vuelve a cargar."
            }, H["2"] = {
                string: "Toque Siguiente"
            }, H["3"] = {
                string: "Toque Volver"
            }, H["4"] = {
                string: "No se pudo copiar al portapapeles enlace :("
            }, H["5"] = {
                string: "Enlace copiado!"
            }, H["6"] = {
                string: "Email"
            }, H["7"] = {
                string: "Facebook"
            }, H["8"] = {
                string: "Google+"
            }, H["9"] = {
                string: "Conseguir enlace"
            }, H["10"] = {
                string: "LinkedIn"
            }, H["11"] = {
                string: "Pinterest"
            }, H["12"] = {
                string: "SMS"
            }, H["13"] = {
                string: "M\u00e1s"
            }, H["14"] = {
                string: "Tumblr"
            },
                H["15"] = {
                    string: "Gorjeo"
                }, H["16"] = {
                string: "Whatsapp"
            }, H["17"] = {
                string: "Compartir"
            }, H["18"] = {
                string: "Ampliar su ventana para ver esta experiencia"
            }, H["19"] = {
                string: "Debe habilitar el experimento amp pisos para ver este contenido"
            }, H["20"] = {
                string: "La p\u00e1gina se ve mejor en modo vertical"
            }, H["21"] = {
                string: "Lo sentimos, parece que su navegador no soporta esta experiencia"
            }, H);
        var I = {},
            Eh = (I["0"] = {
                string: "Habilitar"
            }, I["1"] = {
                string: "Experimento habilitado. Vuelve a cargar."
            }, I["2"] = {
                string: "Toque Siguiente"
            }, I["3"] = {
                string: "Toque Volver"
            }, I["4"] = {
                string: "No se pudo copiar al portapapeles enlace :("
            }, I["5"] = {
                string: "Enlace copiado!"
            }, I["6"] = {
                string: "Email"
            }, I["7"] = {
                string: "Facebook"
            }, I["8"] = {
                string: "Google+"
            }, I["9"] = {
                string: "Conseguir enlace"
            }, I["10"] = {
                string: "LinkedIn"
            }, I["11"] = {
                string: "Pinterest"
            }, I["12"] = {
                string: "SMS"
            }, I["13"] = {
                string: "M\u00e1s"
            }, I["14"] = {
                string: "Tumblr"
            },
                I["15"] = {
                    string: "Gorjeo"
                }, I["16"] = {
                string: "Whatsapp"
            }, I["17"] = {
                string: "Compartir"
            }, I["18"] = {
                string: "Ampliar su ventana para ver esta experiencia"
            }, I["19"] = {
                string: "Debe habilitar el experimento amp pisos para ver este contenido"
            }, I["20"] = {
                string: "La p\u00e1gina se ve mejor en modo vertical"
            }, I["21"] = {
                string: "Lo sentimos, parece que su navegador no soporta esta experiencia"
            }, I);
        var J = {},
            Fh = (J["0"] = {
                string: "Activer"
            }, J["1"] = {
                string: "Exp\u00e9rience activ\u00e9e. Veuillez recharger"
            }, J["2"] = {
                string: "Appuyez sur Suivant"
            }, J["3"] = {
                string: "Appuyez sur Retour"
            }, J["4"] = {
                string: "Impossible de copier le lien dans le presse-papier :("
            }, J["5"] = {
                string: "Lien copi\u00e9 !"
            }, J["6"] = {
                string: "Courriel"
            }, J["7"] = {
                string: "Facebook"
            }, J["8"] = {
                string: "Google+"
            }, J["9"] = {
                string: "Obtenir le lien"
            }, J["10"] = {
                string: "LinkedIn"
            }, J["11"] = {
                string: "Pinterest"
            }, J["12"] = {
                string: "SMS"
            }, J["13"] = {
                string: "Plus"
            },
                J["14"] = {
                    string: "Tumblr"
                }, J["15"] = {
                string: "Twitter"
            }, J["16"] = {
                string: "Whatsapp"
            }, J["17"] = {
                string: "Partager"
            }, J["18"] = {
                string: "Faire \u00e9largir votre fen\u00eatre pour voir cette exp\u00e9rience"
            }, J["19"] = {
                string: "Vous devez activer l'exp\u00e9rience amp-story pour afficher ce contenu"
            }, J["20"] = {
                string: "La page est mieux visualis\u00e9e en mode portrait"
            }, J["21"] = {
                string: "Nous sommes d\u00e9sol\u00e9s, il semble que votre navigateur ne supporte pas cette exp\u00e9rience"
            }, J);
        var K = {},
            Gh = (K["0"] = {
                string: "Activer"
            }, K["1"] = {
                string: "Exp\u00e9rience activ\u00e9e. Veuillez recharger"
            }, K["2"] = {
                string: "Appuyez sur Suivant"
            }, K["3"] = {
                string: "Appuyez sur Retour"
            }, K["4"] = {
                string: "Impossible de copier le lien dans le presse-papier :("
            }, K["5"] = {
                string: "Lien copi\u00e9 !"
            }, K["6"] = {
                string: "Courriel"
            }, K["7"] = {
                string: "Facebook"
            }, K["8"] = {
                string: "Google+"
            }, K["9"] = {
                string: "Obtenir le lien"
            }, K["10"] = {
                string: "LinkedIn"
            }, K["11"] = {
                string: "Pinterest"
            }, K["12"] = {
                string: "SMS"
            }, K["13"] = {
                string: "Plus"
            },
                K["14"] = {
                    string: "Tumblr"
                }, K["15"] = {
                string: "Twitter"
            }, K["16"] = {
                string: "Whatsapp"
            }, K["17"] = {
                string: "Partager"
            }, K["18"] = {
                string: "Faire \u00e9largir votre fen\u00eatre pour voir cette exp\u00e9rience"
            }, K["19"] = {
                string: "Vous devez activer l'exp\u00e9rience amp-story pour afficher ce contenu"
            }, K["20"] = {
                string: "La page est mieux visualis\u00e9e en mode portrait"
            }, K["21"] = {
                string: "Nous sommes d\u00e9sol\u00e9s, il semble que votre navigateur ne supporte pas cette exp\u00e9rience"
            }, K);
        var L = {},
            Hh = (L["0"] = {
                string: "\u0938\u0915\u094d\u0937\u092e \u0915\u0930\u0947\u0902"
            }, L["1"] = {
                string: "\u092a\u094d\u0930\u092f\u094b\u0917 \u0938\u0915\u094d\u0937\u092e. \u0915\u0943\u092a\u092f\u093e \u092a\u0941\u0928\u0903 \u0932\u094b\u0921 \u0915\u0930\u0947\u0902."
            }, L["2"] = {
                string: "Next \u091f\u0948\u092a \u0915\u0930\u0947\u0902"
            }, L["3"] = {
                string: "Back \u091f\u0948\u092a \u0915\u0930\u0947\u0902"
            }, L["4"] = {
                string: "\u0915\u094d\u0932\u093f\u092a\u092c\u094b\u0930\u094d\u0921 \u092a\u0930 \u0932\u093f\u0902\u0915 \u0915\u0949\u092a\u0940 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948 :("
            },
                L["5"] = {
                    string: "\u0932\u093f\u0902\u0915 \u0915\u0949\u092a\u0940 \u0915\u093f\u092f\u093e \u0917\u092f\u093e!"
                }, L["6"] = {
                string: "\u0908\u092e\u0947\u0932"
            }, L["7"] = {
                string: "\u092b\u0947\u0938\u092c\u0941\u0915"
            }, L["8"] = {
                string: "\u0917\u0942\u0917\u0932 +"
            }, L["9"] = {
                string: "\u0932\u093f\u0902\u0915 \u0915\u094b \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u094b"
            }, L["10"] = {
                string: "\u0932\u093f\u0902\u0915\u094d\u0921\u0907\u0928"
            }, L["11"] = {
                string: "\u092a\u093f\u0928\u091f\u0947\u0930\u0947\u0938\u094d\u091f"
            },
                L["12"] = {
                    string: "\u090f\u0938\u090f\u092e\u090f\u0938"
                }, L["13"] = {
                string: "\u0905\u0927\u093f\u0915"
            }, L["14"] = {
                string: "\u091f\u092e\u094d\u092c\u0932\u0930 "
            }, L["15"] = {
                string: "\u091f\u094d\u0935\u093f\u091f\u0930"
            }, L["16"] = {
                string: "\u0935\u093e\u091f\u094d\u0938\u0910\u092a"
            }, L["17"] = {
                string: "\u0936\u0947\u092f\u0930"
            }, L["18"] = {
                string: "\u0907\u0938 \u0905\u0928\u0941\u092d\u0935 \u0915\u094b \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0905\u092a\u0928\u0940 \u0935\u093f\u0902\u0921\u094b \u0915\u093e \u0935\u093f\u0938\u094d\u0924\u093e\u0930 \u0915\u0930\u0947\u0902"
            },
                L["19"] = {
                    string: "\u0906\u092a\u0915\u094b \u0907\u0938 content \u0915\u094b \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u090f\u092e\u092a\u0940-\u0938\u094d\u091f\u094b\u0930\u0940 \u092a\u094d\u0930\u092f\u094b\u0917 \u0915\u094b \u0938\u0915\u094d\u0937\u092e \u0915\u0930\u0928\u093e \u0939\u094b\u0917\u093e"
                }, L["20"] = {
                string: "\u092a\u0947\u091c \u0938\u092c\u0938\u0947 \u0905\u091a\u094d\u091b\u093e \u092a\u094b\u0930\u094d\u091f\u094d\u0930\u0947\u091f \u092e\u094b\u0921 \u092e\u0947\u0902 \u0926\u0947\u0916\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948 "
            },
                L["21"] = {
                    string: "\u0939\u092e\u0947\u0902 \u0916\u0947\u0926 \u0939\u0948, \u0910\u0938\u093e \u0932\u0917\u0924\u093e \u0939\u0948 \u0915\u093f \u0906\u092a\u0915\u093e \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u0907\u0938 \u0905\u0928\u0941\u092d\u0935 \u0915\u093e \u0938\u092e\u0930\u094d\u0925\u0928 \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u093e \u0939\u0948"
                }, L);
        var M = {},
            Ih = (M["0"] = {
                string: "Aktifkan"
            }, M["1"] = {
                string: "Eksperimen diaktifkan. Silakan muat ulang."
            }, M["2"] = {
                string: "tekan Berikutnya"
            }, M["3"] = {
                string: "tekan Kembali"
            }, M["4"] = {
                string: "tidak bisa copy link ke clipboard :("
            }, M["5"] = {
                string: "Link dicopy!"
            }, M["6"] = {
                string: "E-mail"
            }, M["7"] = {
                string: "Facebook"
            }, M["8"] = {
                string: "Google+"
            }, M["9"] = {
                string: "Dapatkan link"
            }, M["10"] = {
                string: "LinkedIn"
            }, M["11"] = {
                string: "pinterest"
            }, M["12"] = {
                string: "SMS"
            }, M["13"] = {
                string: "Selebihnya"
            }, M["14"] = {
                string: "tumblr"
            }, M["15"] = {
                string: "Twitter"
            }, M["16"] = {
                string: "Whatsapp"
            }, M["17"] = {
                string: "Share"
            }, M["18"] = {
                string: "Besarkan browser window anda untuk menggunakan fitur ini"
            }, M["19"] = {
                string: "Anda harus mengaktifkan eksperimen amp-story untuk melihat konten ini"
            }, M["20"] = {
                string: "Halaman ini hanya dapat dilihat dengan menggunakan portrait mode"
            }, M["21"] = {
                string: "Maaf, sepertinya browser anda tidak mendukung fitur ini"
            }, M);
        var N = {},
            Jh = (N["0"] = {
                string: "Attiva"
            }, N["1"] = {
                string: "Esperimento attivato. Ricarica la pagina."
            }, N["2"] = {
                string: "Tocca Avanti"
            }, N["3"] = {
                string: "Tocca Indietro"
            }, N["4"] = {
                string: "Impossibile copiare il link negli appunti :("
            }, N["5"] = {
                string: "Link copiato!"
            }, N["6"] = {
                string: "Email"
            }, N["7"] = {
                string: "Facebook"
            }, N["8"] = {
                string: "Google+"
            }, N["9"] = {
                string: "Ottieni Link"
            }, N["10"] = {
                string: "LinkedIn"
            }, N["11"] = {
                string: "Pinterest"
            }, N["12"] = {
                string: "SMS"
            }, N["13"] = {
                string: "Altro"
            }, N["14"] = {
                string: "Tumblr"
            }, N["15"] = {
                string: "Twitter"
            }, N["16"] = {
                string: "Whatsapp"
            }, N["17"] = {
                string: "Condividi"
            }, N["18"] = {
                string: "Espandi la finestra per vedere questo contenuto"
            }, N["19"] = {
                string: "Devi attivare l'esperimento amp-story per visualizzare questo contenuto"
            }, N["20"] = {
                string: "La pagina viene visualizzata al meglio in modalit\u00e0 verticale"
            }, N["21"] = {
                string: "Siamo spiacenti, sembra che il tuo browser non supporti questo contenuto"
            }, N);
        var O = {},
            Kh = (O["0"] = {
                string: "\u6709\u52b9"
            }, O["1"] = {
                string: "\u5b9f\u9a13\u53ef\u80fd\u3067\u3059\u3002\u30ea\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
            }, O["2"] = {
                string: "\u30bf\u30c3\u30d7\u3057\u3066\u6b21\u30da\u30fc\u30b8\u3078"
            }, O["3"] = {
                string: "\u30bf\u30c3\u30d7\u3057\u3066\u5168\u30da\u30fc\u30b8\u3078"
            }, O["4"] = {
                string: "\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002"
            }, O["5"] = {
                string: "\u30ea\u30f3\u30af\u304c\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3057\u305f\uff01"
            },
                O["6"] = {
                    string: "\u30e1\u30fc\u30eb"
                }, O["7"] = {
                string: "Facebook"
            }, O["8"] = {
                string: "Google+"
            }, O["9"] = {
                string: "\u30ea\u30f3\u30af\u3092\u30b2\u30c3\u30c8"
            }, O["10"] = {
                string: "LinkedIn"
            }, O["11"] = {
                string: "Pinterest"
            }, O["12"] = {
                string: "SMS"
            }, O["13"] = {
                string: "\u305d\u306e\u4ed6"
            }, O["14"] = {
                string: "Tumblr"
            }, O["15"] = {
                string: "Twitter"
            }, O["16"] = {
                string: "Whatsapp"
            }, O["17"] = {
                string: "\u5171\u6709"
            }, O["18"] = {
                string: "\u3053\u308c\u3092\u898b\u308b\u305f\u3081\u306b\u306f\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u62e1\u5927\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
            },
                O["19"] = {
                    string: "\u3053\u306e\u5185\u5bb9\u3092\u898b\u308b\u306b\u306f\u3001\u300camp-story\u300d\u306e\u5b9f\u9a13\u3092\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                }, O["20"] = {
                string: "\u3053\u306e\u30da\u30fc\u30b8\u306f\u7e26\u30e2\u30fc\u30c9\u306b\u3059\u308b\u3068\u3088\u304f\u898b\u3048\u307e\u3059\u3002"
            }, O["21"] = {
                string: "\u3059\u307f\u307e\u305b\u3093\u3001\u3054\u4f7f\u7528\u306e\u30d6\u30e9\u30a6\u30b6\u306b\u306f\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002"
            },
                O);
        var P = {},
            Lh = (P["0"] = {
                string: "\ud5c8\uc6a9\ud558\uae30"
            }, P["1"] = {
                string: "amp-story experiment\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uccd0 \uc8fc\uc138\uc694."
            }, P["2"] = {
                string: "\ub2e4\uc74c\uc73c\ub85c \uac00\uae30"
            }, P["3"] = {
                string: "\uc774\uc804\uc73c\ub85c \uac00\uae30"
            }, P["4"] = {
                string: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
            }, P["5"] = {
                string: "\ub9c1\ud06c\uac00 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4"
            },
                P["6"] = {
                    string: "\uc774\uba54\uc77c"
                }, P["7"] = {
                string: "\ud398\uc774\uc2a4\ubd81"
            }, P["8"] = {
                string: "Google+"
            }, P["9"] = {
                string: "\ub9c1\ud06c \ubcf5\uc0ac\ud558\uae30"
            }, P["10"] = {
                string: "LinkedIn"
            }, P["11"] = {
                string: "Pinterest"
            }, P["12"] = {
                string: "\ubb38\uc790"
            }, P["13"] = {
                string: "\ub354\ubcf4\uae30"
            }, P["14"] = {
                string: "Tumblr"
            }, P["15"] = {
                string: "\ud2b8\uc704\ud130"
            }, P["16"] = {
                string: "Whatsapp"
            }, P["17"] = {
                string: "\uacf5\uc720\ud558\uae30"
            }, P["18"] = {
                string: "stories\ub294 \ud070 \ud654\uba74\uc5d0\uc11c\ub9cc \uc81c\uacf5\ub429\ub2c8\ub2e4."
            },
                P["19"] = {
                    string: "\uc774 \ucf58\ud150\uce20\ub97c \ubcf4\uc2dc\ub824\uba74 amp-story experiment\ub97c \ud5c8\uc6a9\ud558\uc154\uc57c\ub9cc \ud569\ub2c8\ub2e4"
                }, P["20"] = {
                string: "stories\ub294 \uc138\ub85c \ubc29\ud5a5\uc5d0 \ucd5c\uc801\ud654 \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "
            }, P["21"] = {
                string: "\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uace0 \uacc4\uc2e0 \ube0c\ub77c\uc6b0\uc800\ub294 stories\ub97c \uc11c\ud3ec\ud2b8 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. "
            }, P);
        var Q = {},
            Mh = (Q["0"] = {
                string: "Schakel in"
            }, Q["1"] = {
                string: "Experiment ingeschakeld. Gelieve opnieuw te laden."
            }, Q["2"] = {
                string: "Tik op Volgende"
            }, Q["3"] = {
                string: "Tik op Terug"
            }, Q["4"] = {
                string: "Link kon niet naar naar het klembord gekopieerd worden :("
            }, Q["5"] = {
                string: "Link gekopieerd!"
            }, Q["6"] = {
                string: "Email"
            }, Q["7"] = {
                string: "Facebook"
            }, Q["8"] = {
                string: "Google+"
            }, Q["9"] = {
                string: "Link selecteren"
            }, Q["10"] = {
                string: "LinkedIn"
            }, Q["11"] = {
                string: "Pinterest"
            }, Q["12"] = {
                string: "SMS"
            }, Q["13"] = {
                string: "Meer"
            },
                Q["14"] = {
                    string: "Tumblr"
                }, Q["15"] = {
                string: "Twitter"
            }, Q["16"] = {
                string: "Whatsapp"
            }, Q["17"] = {
                string: "Deel"
            }, Q["18"] = {
                string: "Vergroot je venster om deze inhoud te bekijken"
            }, Q["19"] = {
                string: "U moet het amp-story-experiment inschakelen om deze inhoud te kunnen bekijken"
            }, Q["20"] = {
                string: "De pagina kan het best bekeken worden in portretmodus"
            }, Q["21"] = {
                string: "Helaas lijkt het erop dat uw browser deze inhoud niet ondersteunt"
            }, Q);
        var R = {},
            Nh = (R["0"] = {
                string: "Aktiver"
            }, R["1"] = {
                string: "Eksperiment aktivert. Vennligst last inn."
            }, R["2"] = {
                string: "Trykk neste"
            }, R["3"] = {
                string: "Trykk tilbake"
            }, R["4"] = {
                string: "Kunne ikke kopiere link til utklippstavle"
            }, R["5"] = {
                string: "Link kopiert!"
            }, R["6"] = {
                string: "Epost"
            }, R["7"] = {
                string: "Facebook"
            }, R["8"] = {
                string: "Google+"
            }, R["9"] = {
                string: "Kopier link til utklippstavlen"
            }, R["10"] = {
                string: "LinkedIn"
            }, R["11"] = {
                string: "Pinterest"
            }, R["12"] = {
                string: "SMS"
            }, R["13"] = {
                string: "Mer"
            }, R["14"] = {
                string: "Tumblr"
            },
                R["15"] = {
                    string: "Twitter"
                }, R["16"] = {
                string: "Whatsapp"
            }, R["17"] = {
                string: "Del"
            }, R["18"] = {
                string: "Utvid vinduet for \u00e5 se denne opplevelsen"
            }, R["19"] = {
                string: "Du m\u00e5 aktivere amp-story-eksperimentet for \u00e5 f\u00e5 tilgang til dette innholdet"
            }, R["20"] = {
                string: "Denne siden vises best i portrettmodus"
            }, R["21"] = {
                string: "Beklager, det ser ut for at nettleseren din ikke st\u00f8tter denne opplevelsen"
            }, R);
        var S = {},
            Oh = (S["0"] = {
                string: "Habilitar"
            }, S["1"] = {
                string: "Experimento habilitado. Por favor recarregue."
            }, S["2"] = {
                string: "Toque em Avan\u00e7ar"
            }, S["3"] = {
                string: "Toque Voltar"
            }, S["4"] = {
                string: "N\u00e3o foi poss\u00edvel copiar link para \u00e1rea de transfer\u00eancia :("
            }, S["5"] = {
                string: "Link copiado!"
            }, S["6"] = {
                string: "Email"
            }, S["7"] = {
                string: "Facebook"
            }, S["8"] = {
                string: "Google+"
            }, S["9"] = {
                string: "Obter link"
            }, S["10"] = {
                string: "LinkedIn"
            }, S["11"] = {
                string: "Pinterest"
            }, S["12"] = {
                string: "SMS"
            }, S["13"] = {
                string: "Mais"
            },
                S["14"] = {
                    string: "Tumblr"
                }, S["15"] = {
                string: "Twitter"
            }, S["16"] = {
                string: "Whatsapp"
            }, S["17"] = {
                string: "Compartilhar"
            }, S["18"] = {
                string: "Amplie sua janela para ver esta experi\u00eancia"
            }, S["19"] = {
                string: "Voc\u00ea deve habilitar o experimento amp-story para visualizar este conte\u00fado"
            }, S["20"] = {
                string: "A p\u00e1gina \u00e9 melhor visualizada em modo retrato"
            }, S["21"] = {
                string: "Lamentamos, mas parece que seu navegador n\u00e3o suporta essa experi\u00eancia"
            }, S);
        var T = {},
            Ph = (T["0"] = {
                string: "Habilitar"
            }, T["1"] = {
                string: "Experimento habilitado. Por favor recarregue."
            }, T["2"] = {
                string: "Pressione Avan\u00e7ar"
            }, T["3"] = {
                string: "Pressione Voltar"
            }, T["4"] = {
                string: "N\u00e3o foi poss\u00edvel o copiar link para \u00e1rea de transfer\u00eancia :("
            }, T["5"] = {
                string: "Link copiado!"
            }, T["6"] = {
                string: "Email"
            }, T["7"] = {
                string: "Facebook"
            }, T["8"] = {
                string: "Google+"
            }, T["9"] = {
                string: "Obter link"
            }, T["10"] = {
                string: "LinkedIn"
            }, T["11"] = {
                string: "Pinterest"
            }, T["12"] = {
                string: "SMS"
            }, T["13"] = {
                string: "Mais"
            }, T["14"] = {
                string: "Tumblr"
            }, T["15"] = {
                string: "Twitter"
            }, T["16"] = {
                string: "Whatsapp"
            }, T["17"] = {
                string: "Compartilhar"
            }, T["18"] = {
                string: "Amplie sua janela para ver esta experi\u00eancia"
            }, T["19"] = {
                string: "Voc\u00ea deve habilitar o experimento amp-story para visualizar este conte\u00fado"
            }, T["20"] = {
                string: "A p\u00e1gina \u00e9 melhor visualizada em modo retrato"
            }, T["21"] = {
                string: "Lamentamos, mas parece que seu navegador n\u00e3o suporta essa experi\u00eancia"
            }, T);
        var V = {},
            Qh = (V["0"] = {
                string: "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c"
            }, V["1"] = {
                string: "\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0443 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435"
            }, V["2"] = {
                string: "\u0412\u043f\u0435\u0440\u0451\u0434"
            }, V["3"] = {
                string: "\u041d\u0430\u0437\u0430\u0434"
            },
                V["4"] = {
                    string: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430 :("
                }, V["5"] = {
                string: "\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430!"
            }, V["6"] = {
                string: "\u042d\u043b. \u043f\u043e\u0447\u0442\u0430"
            }, V["7"] = {
                string: "Facebook"
            }, V["8"] = {
                string: "Google+"
            }, V["9"] = {
                string: "\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"
            }, V["10"] = {
                string: "LinkedIn"
            }, V["11"] = {
                string: "Pinterest"
            }, V["12"] = {
                string: "\u0421\u041c\u0421"
            }, V["13"] = {
                string: "\u0415\u0449\u0451"
            }, V["14"] = {
                string: "Tumblr"
            }, V["15"] = {
                string: "Twitter"
            }, V["16"] = {
                string: "Whatsapp"
            }, V["17"] = {
                string: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"
            }, V["18"] = {
                string: "\u041f\u043e\u043b\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u043e\u043c \u043e\u043a\u043d\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430"
            },
                V["19"] = {
                    string: "\u0414\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c amp-story \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442"
                }, V["20"] = {
                string: "\u0414\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0440\u0442\u0440\u0435\u0442\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"
            },
                V["21"] = {
                    string: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u043f\u043e\u0445\u043e\u0436\u0435, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e"
                }, V);
        var W = {},
            Rh = (W["0"] = {
                string: "Etkinle\u015ftir"
            }, W["1"] = {
                string: "Deney etkinle\u015ftirildi. L\u00fctfen yeniden y\u00fckleyin."
            }, W["2"] = {
                string: "\u0130leri d\u00fc\u011fmesine dokunun"
            }, W["3"] = {
                string: "Geri d\u00fc\u011fmesine dokunun"
            }, W["4"] = {
                string: "Link panoya kopyalanamad\u0131 :("
            }, W["5"] = {
                string: "Link kopyaland\u0131 :("
            }, W["6"] = {
                string: "E-posta"
            }, W["7"] = {
                string: "Facebook"
            }, W["8"] = {
                string: "Google+"
            }, W["9"] = {
                string: "Linki kopyala"
            }, W["10"] = {
                string: "LinkedIn"
            }, W["11"] = {
                string: "Pinterest"
            }, W["12"] = {
                string: "SMS"
            }, W["13"] = {
                string: "Daha"
            }, W["14"] = {
                string: "Tumblr"
            }, W["15"] = {
                string: "Twitter"
            }, W["16"] = {
                string: "Whatsapp"
            }, W["17"] = {
                string: "Payla\u015f"
            }, W["18"] = {
                string: "Bu deneyimi g\u00f6rebilmek i\u00e7in pencerenizi geni\u015fletiniz."
            }, W["19"] = {
                string: "Bu g\u00f6r\u00fcn\u00fcm\u00fc a\u00e7abilmek i\u00e7in amp-story deneyini etkinle\u015ftirmelisiniz."
            }, W["20"] = {
                string: "Bu sayfa portre modunda en iyi g\u00f6r\u00fcnt\u00fclenir."
            }, W["21"] = {
                string: "\u00dczg\u00fcn\u00fcz, taray\u0131c\u0131n\u0131z bu deneyimi desteklemiyor gibi g\u00f6r\u00fcn\u00fcyor."
            },
                W);
        var X = {},
            Sh = (X["0"] = {
                string: "Cho phe\u0301p"
            }, X["1"] = {
                string: "Th\u01b0\u0309 nghi\u00ea\u0323m \u0111u\u01a1\u0323c cho phe\u0301p. La\u0300m \u01a1n na\u0323p la\u0323i"
            }, X["2"] = {
                string: "Cha\u0323m k\u00ea\u0301 ti\u00ea\u0301p"
            }, X["3"] = {
                string: "Cha\u0323m tr\u01a1\u0309 la\u0323i"
            }, X["4"] = {
                string: "Kh\u00f4ng th\u00ea\u0309 sao che\u0301p \u0111u\u01a1\u0300ng d\u00e2\u0303n \u0111\u00ea\u0301n clipboard :("
            }, X["5"] = {
                string: "\u0110u\u01a1\u0300ng d\u00e2\u0303n \u0111a\u0303 sao che\u0301p!"
            }, X["6"] = {
                string: "Email"
            }, X["7"] = {
                string: "Facebook"
            }, X["8"] = {
                string: "Google+"
            }, X["9"] = {
                string: "L\u00e2\u0301y \u0111u\u01a1\u0300ng d\u00e2\u0303n"
            }, X["10"] = {
                string: "LinkedIn"
            }, X["11"] = {
                string: "Pinterest"
            }, X["12"] = {
                string: "SMS"
            }, X["13"] = {
                string: "N\u01b0\u0303a"
            }, X["14"] = {
                string: "Tumblr"
            }, X["15"] = {
                string: "Twitter"
            }, X["16"] = {
                string: "Whatsapp"
            }, X["17"] = {
                string: "Chia se\u0309"
            }, X["18"] = {
                string: "M\u01a1\u0309 r\u00f4\u0323ng c\u01b0\u0309a s\u00f4\u0309 cu\u0309a ba\u0323n \u0111\u00ea\u0309 xem th\u01b0\u0309 nghi\u00ea\u0323m na\u0300y"
            },
                X["19"] = {
                    string: "Ba\u0323n pha\u0309i cho phe\u0301p th\u01b0\u0309 nghi\u00ea\u0323m amp-story \u0111\u00ea\u0309 xem n\u00f4\u0323i dung na\u0300y "
                }, X["20"] = {
                string: "Trang \u0111u\u01a1\u0323c xem t\u00f4\u0301t nh\u00e2\u0301t b\u0103\u0300ng ch\u00ea\u0301 \u0111\u00f4\u0323 ch\u00e2n dung"
            }, X["21"] = {
                string: "Chu\u0301ng t\u00f4i xin l\u00f4\u0303i, hi\u0300nh nh\u01b0 la\u0300 tri\u0300nh duy\u00ea\u0323t cu\u0309a ba\u0323n kh\u00f4ng h\u00f4\u0303 tr\u01a1\u0323 th\u01b0\u0309 nghi\u00ea\u0323m na\u0300y"
            },
                X);
        var Y = {},
            Th = (Y["0"] = {
                string: "\u542f\u7528"
            }, Y["1"] = {
                string: "\u5b9e\u9a8c\u5df2\u542f\u7528\u3002\u8bf7\u91cd\u65b0\u52a0\u8f7d"
            }, Y["2"] = {
                string: "\u4e0b\u4e00\u6b65"
            }, Y["3"] = {
                string: "\u8fd4\u56de"
            }, Y["4"] = {
                string: "\u65e0\u6cd5\u590d\u5236\u94fe\u63a5\u5230\u526a\u8d34\u677f :("
            }, Y["5"] = {
                string: "\u94fe\u63a5\u6210\u529f\uff01"
            }, Y["6"] = {
                string: "\u7535\u90ae"
            }, Y["7"] = {
                string: "\u8138\u4e66"
            }, Y["8"] = {
                string: "\u8c37\u6b4c+"
            }, Y["9"] = {
                string: "\u83b7\u53d6\u94fe\u63a5"
            }, Y["10"] = {
                string: "\u9886\u82f1"
            }, Y["11"] = {
                string: "Pinterest"
            }, Y["12"] = {
                string: "\u77ed\u4fe1"
            }, Y["13"] = {
                string: "\u66f4\u591a"
            }, Y["14"] = {
                string: "Tumblr"
            }, Y["15"] = {
                string: "\u63a8\u7279"
            }, Y["16"] = {
                string: "Whatsapp"
            }, Y["17"] = {
                string: "\u5206\u4eab"
            }, Y["18"] = {
                string: "\u8bf7\u5728\u5168\u5c4f\u6a21\u5f0f\u4e0b\u89c2\u770b\u6b64\u4f53\u9a8c"
            }, Y["19"] = {
                string: "\u4f60\u5fc5\u987b\u542f\u7528AMP-STORY\u624d\u80fd\u89c2\u770b\u4ee5\u4e0b\u5185\u5bb9"
            }, Y["20"] = {
                string: "\u6b64\u9875\u9762\u9002\u5408\u6a2a\u653e\u89c2\u770b"
            }, Y["21"] = {
                string: "\u975e\u5e38\u62b1\u6b49\uff0c\u60a8\u7684\u6e38\u89c8\u5668\u4e0d\u652f\u6301\u6b64\u63d2\u4ef6"
            },
                Y);
        var Z = {},
            Uh = (Z["0"] = {
                string: "\u555f\u52d5"
            }, Z["1"] = {
                string: "\u5be6\u9a57\u5df2\u555f\u52d5\uff0c\u8acb\u91cd\u65b0\u52a0\u8f09\u7db2\u9801"
            }, Z["2"] = {
                string: "\u4e0b\u4e00\u6b65"
            }, Z["3"] = {
                string: "\u8fd4\u56de"
            }, Z["4"] = {
                string: "\u7121\u6cd5\u8907\u88fd\u9023\u7d50\u5230\u526a\u8cbc\u7248 :("
            }, Z["5"] = {
                string: "\u9023\u63a5\u8907\u88fd\u6210\u529f\uff01"
            }, Z["6"] = {
                string: "\u96fb\u90f5"
            }, Z["7"] = {
                string: "\u81c9\u66f8"
            }, Z["8"] = {
                string: "\u8c37\u6b4c+"
            }, Z["9"] = {
                string: "\u7372\u53d6\u9023\u63a5"
            }, Z["10"] = {
                string: "\u9818\u82f1"
            },
                Z["11"] = {
                    string: "Pinterest"
                }, Z["12"] = {
                string: "\u77ed\u4fe1"
            }, Z["13"] = {
                string: "\u66f4\u591a"
            }, Z["14"] = {
                string: "Tumblr"
            }, Z["15"] = {
                string: "\u63a8\u7279"
            }, Z["16"] = {
                string: "Whatsapp"
            }, Z["17"] = {
                string: "\u5206\u4eab"
            }, Z["18"] = {
                string: "\u8acb\u5728\u5168\u5c4f\u6a21\u5f0f\u4e0b\u89c0\u770b\u6b64\u9ad4\u9a57"
            }, Z["19"] = {
                string: "\u60a8\u5fc5\u9808\u555f\u7528AMP-STORY\u624d\u80fd\u89c0\u770b\u4ee5\u4e0b\u5167\u5bb9"
            }, Z["20"] = {
                string: "\u6b64\u7db2\u9801\u9069\u5408\u6a6b\u653e\u89c0\u770b"
            }, Z["21"] = {
                string: "\u975e\u5e38\u62b1\u6b49\uff0c\u60a8\u7684\u904a\u89bd\u5668\u4e0d\u652f\u6301\u6b64\u63d2\u4ef6"
            },
                Z);
        var Vh = {},
            Wh = (Vh.audio = 4, Vh.video = 8, Vh);

        function Xh(a) {
            var b;
            b = AMP.BaseElement.call(this, a) || this;
            b.j = new xd(b.win);
            Ia(b.win, "story-store", function() {
                return b.j
            });
            b.Ma = new Of(b.win, b.element);
            Ia(b.win, "story-request", function() {
                return b.Ma
            });
            b.lb = new Fg(b.win, function() {
                return b.eb()
            });
            b.kc = new Hg(b.win, b.element);
            b.o = b.getVsync();
            b.Cb = new fh(b.win, b.element);
            b.Oc = new hg(b.win, b.element);
            b.ga = new vg(b.win, b.element);
            b.Jd = new Ag(b.win);
            new Dg(b.win, b.element);
            b.G = [];
            b.hc = [];
            b.fc = new Ng;
            Ia(b.win, "story-variable", function() {
                return b.fc.get()
            });
            b.B = null;
            b.cd = b.win.matchMedia("(min-width: 1024px) and (min-height: 550px)");
            b.Yc = b.win.matchMedia("(min-width: 550px) and (min-height: 1024px)");
            b.za = null;
            b.la = null;
            b.mb = null;
            b.yd = oh;
            b.zb = new Id(b.win, b.element);
            b.sa = Me(b);
            b.A = x(b.win);
            b.Z = w(b.win);
            b.qa = new td(b.win);
            b.qa.registerLocalizedStringBundle("default", Bh).registerLocalizedStringBundle("de", zh).registerLocalizedStringBundle("en", sd).registerLocalizedStringBundle("en-GB", Ch).registerLocalizedStringBundle("es", Dh).registerLocalizedStringBundle("es-419",
                Eh).registerLocalizedStringBundle("fr", Fh).registerLocalizedStringBundle("fr-CA", Gh).registerLocalizedStringBundle("hi", Hh).registerLocalizedStringBundle("id", Ih).registerLocalizedStringBundle("it", Jh).registerLocalizedStringBundle("ja", Kh).registerLocalizedStringBundle("ko", Lh).registerLocalizedStringBundle("nl", Mh).registerLocalizedStringBundle("no", Nh).registerLocalizedStringBundle("pt", Oh).registerLocalizedStringBundle("pt-BR", Ph).registerLocalizedStringBundle("ru", Qh).registerLocalizedStringBundle("tr",
                Rh).registerLocalizedStringBundle("vi", Sh).registerLocalizedStringBundle("zh", Th).registerLocalizedStringBundle("zh-TW", Uh);
            var c = rd(function(a) {
                return "[" + a + " one two]"
            });
            b.qa.registerLocalizedStringBundle("en-xa", c);
            Ia(b.win, "localization", function() {
                return b.qa
            });
            return b
        }
        h(Xh, AMP.BaseElement);
        f = Xh.prototype;
        f.buildCallback = function() {
            var a = this;
            Yh(this);
            this.element.hasAttribute("standalone") && Zh(this);
            this.element.querySelector("amp-story-page").setAttribute("active", "");
            this.M();
            $h(this);
            ai(this) && this.j.dispatch("toggledesktop", !0);
            this.lb.observe(function(b) {
                a.fc.onNavigationStateChange(b);
                a.kc.onNavigationStateChange(b)
            });
            Ea(this.getAmpDoc(), "action").setWhitelist([])
        };

        function Zh(a) {
            var b = a.win.document.documentElement;
            a.mutateElement(function() {
                b.classList.add("i-amphtml-story-standalone");
                var c = a.win.document;
                Ab(c.documentElement, {
                    overflow: "hidden"
                });
                Ab(c.body, {
                    overflow: "hidden"
                });
                a.getViewport().resetTouchZoom();
                a.getViewport().disableTouchZoom();
                bi(a);
                a.onResize()
            }, b)
        }

        function ci(a) {
            var b = a.G.map(function(a) {
                return a.element.id
            });
            a.element.appendChild(a.ga.build(b));
            di(a)
        }
        f.M = function() {
            var a = this;
            this.element.addEventListener("ampstory:nextpage", function() {
                ei(a)
            });
            this.element.addEventListener("ampstory:previouspage", function() {
                a.B.previous()
            });
            this.j.subscribe("mutedstate", function(b) {
                a.Nb(b);
                a.fc.onMutedStateChange(b)
            }, !0);
            this.j.subscribe("mutedstate", function(b) {
                a.kc.onMutedStateChange(b)
            }, !1);
            this.j.subscribe("supportedbrowserstate", function(b) {
                fi(a, b)
            });
            this.element.addEventListener("ampstory:switchpage", function(b) {
                a.j.get("bookendstate") || (a.ta(b.detail.targetPageId),
                    a.zb.hideAllNavigationHint())
            });
            this.element.addEventListener("ampstory:pageprogress", function(b) {
                var c = b.detail.pageId;
                b = b.detail.progress;
                c === a.B.element.id && (a.B.isAd() || a.ga.updateProgress(c, b))
            });
            this.element.addEventListener("ampstory:replay", function() {
                a.j.get("bookendstate") && a.j.dispatch("togglebookend", !1);
                a.ta(a.G[0].element.id)
            });
            this.element.addEventListener("ampstory:shownopreviouspagehelp", function() {
                a.j.get("canshowpreviouspagehelp") && a.zb.showFirstPageHintOverlay()
            });
            this.element.addEventListener("ampstory:tapnavigation",
                function(b) {
                    b = b.detail.direction;
                    ai(a) ? ei(a) : 1 === b ? ei(a) : 2 === b && a.B.previous()
                });
            this.j.subscribe("bookendstate", function(b) {
                a.Ia(b)
            });
            this.j.subscribe("desktopstate", function(b) {
                a.Y(b)
            });
            this.win.document.addEventListener("keydown", function(b) {
                if (!a.j.get("bookendstate")) switch (b.keyCode) {
                    case 37:
                        a.B.previous();
                        break;
                    case 39:
                        ei(a)
                }
            }, !0);
            this.j.subscribe("currentpageid", function(b) {
                if (!a.getPageById(b).isAd()) {
                    var c = a.win.history;
                    c.replaceState && gi(a) !== b && c.replaceState({
                        ampStoryPageId: b
                    }, "")
                }
            });
            this.getViewport().onResize(Tb(this.win, function() {
                return a.onResize()
            }, 300));
            hi(this)
        };

        function hi(a) {
            var b = Yc(a.element);
            b.onGesture(cd, function(a) {
                a.event.preventDefault()
            });
            b.onGesture(fd, function(b) {
                b = b.data.deltaX;
                a.j.get("bookendstate") || 50 <= Math.abs(b) && a.j.get("canshownavigationoverlayhint") && a.zb.showNavigationOverlay()
            })
        }

        function $h(a) {
            ea().development && a.element.addEventListener("ampstory:devlogentriesavailable", function(b) {
                a.ga.logAll(b.detail)
            })
        }

        function bi(a) {
            var b = a.win.screen;
            if (b && a.Yc.matches) {
                var c = b.lockOrientation || b.mozLockOrientation || b.msLockOrientation || function() {};
                try {
                    c("portrait")
                } catch (d) {
                    p().warn("amp-story", "Failed to lock screen orientation:", d.message)
                }
            }
        }

        function ii(a) {
            a.mb = new yh(a.win);
            a.mb.attach(a.element);
            a.lb.observe(function(b) {
                return a.mb.onNavigationStateChange(b)
            })
        }
        f.Ld = function() {
            ii(this)
        };
        f.layoutCallback = function() {
            var a = this;
            if (!ji(this.win) && !this.Z.isBot()) return this.j.dispatch("togglesupportedbrowser", !1), Promise.resolve();
            var b = n().assertElement(this.element.querySelector("amp-story-page"), "Story must have at least one page."),
                c = gi(this) || b.id;
            this.mb || ii(this);
            var d = ki(this).then(function() {
                return ci(a)
            }).then(function() {
                a.G.forEach(function(a) {
                    a.setActive(!1)
                })
            }).then(function() {
                return a.ta(c)
            }).then(function() {
                return li(a)
            }).then(function() {
                a.j.get("desktopstate") || a.Oc.build()
            });
            d.then(function() {
                return mi(a)
            }).then(function() {
                return ni(a)
            });
            return d
        };

        function mi(a) {
            var b = 5E3,
                b = void 0 === b ? 0 : b,
                c = ai(a) ? [a.G[0], a.G[1]] : [a.G[0]],
                d = Promise.all(c.filter(function(a) {
                    return !!a
                }).map(function(a) {
                    return a.whenLoaded()
                }));
            return a.A.timeoutPromise(b, d).catch(function() {})
        }

        function ni(a) {
            Xd(a.element, "ampstory:load");
            a.signals().signal("ini-load");
            a.mutateElement(function() {
                a.element.classList.add("i-amphtml-story-loaded")
            })
        }
        f.isLayoutSupported = function(a) {
            return "container" == a
        };
        f.prerenderAllowed = function() {
            return !0
        };

        function oi(a) {
            if (ub(a.win, "amp-story") || "file:" === a.win.location.protocol) return !0;
            var b;
            b = a.win.location;
            "string" == typeof b && (b = t(b));
            if (Ba(b)) {
                var c = b.pathname.split("/"),
                    d = c[1];
                n().assert(ta[d], "Unknown path prefix in url %s", b.href);
                var d = c[2],
                    e = "s" == d ? "https://" + decodeURIComponent(c[3]) : "http://" + decodeURIComponent(d);
                n().assert(0 < e.indexOf("."), "Expected a . in origin %s", e);
                c.splice(1, "s" == d ? 3 : 2);
                c = e + c.join("/");
                d = (d = b.search) && "?" != d ? (d = d.replace(wa, "").replace(xa, "").replace(ya, "").replace(/^[?&]/,
                    "")) ? "?" + d : "" : "";
                b = c + d + (b.hash || "")
            } else b = b.href;
            b = t(b).origin;
            return pi(a, b)
        }

        function pi(a, b) {
            var c = t(b).hostname,
                d = c.split(".");
            return d.some(function(b, c) {
                c = d.slice(c, d.length).join(".").toLowerCase();
                for (var e = c.length, g = 5381, m = 0; m < e; m++) g = 33 * g ^ c.charCodeAt(m);
                var r = String(g >>> 0);
                return a.yd.includes(r)
            })
        }

        function Yh(a) {
            if (!oi(a)) {
                var b = a.win.document.createElement("div");
                b.classList.add("i-amphtml-story-experiment-icon");
                b.classList.add("i-amphtml-story-experiment-icon-error");
                var c = a.win.document.createElement("span");
                c.textContent = a.qa.getLocalizedString("19");
                var d = a.win.document.createElement("button");
                d.textContent = a.qa.getLocalizedString("0");
                d.addEventListener("click", function() {
                    var e = a.win;
                    if (1 != ub(e, "amp-story")) {
                        vb(e)["amp-story"] = !0;
                        var k = wb(e);
                        k["amp-story"] = !0;
                        var l = [],
                            m;
                        for (m in k) l.push((!1 ===
                        k[m] ? "-" : "") + m);
                        a: {
                            k = l.join(",");l = Date.now() + 15552E6;m = {
                                domain: e.location.hostname,
                                allowOnProxyOrigin: !0
                            };
                            if (!m || !m.allowOnProxyOrigin) {
                                if (Ba(e.location.href)) throw Error("Should never attempt to set cookie on proxy origin: AMP_EXP");
                                var r = t(e.location.href).hostname.toLowerCase(),
                                    U = t(ra).hostname.toLowerCase();
                                if (r == U || oa(r, "." + U)) throw Error("Should never attempt to set cookie on proxy origin. (in depth check): AMP_EXP");
                            }
                            if (m && m.highestAvailableDomain)
                                for (var r = e.location.hostname.split("."),
                                         U = r[r.length - 1], La = r.length - 2; 0 <= La; La--)
                                    if (U = r[La] + "." + U, tb(e, k, l, U), sb(e) == k) break a;r = void 0;m && m.domain && (r = m.domain);tb(e, k, l, r)
                        }
                    }
                    b.classList.remove("i-amphtml-story-experiment-icon-error");
                    b.classList.add("i-amphtml-story-experiment-icon-done");
                    c.textContent = a.qa.getLocalizedString("1");
                    Xa(d)
                });
                var e = a.win.document.createElement("div");
                e.classList.add("i-amphtml-story-experiment-error");
                e.appendChild(b);
                e.appendChild(c);
                e.appendChild(d);
                a.element.appendChild(e);
                n().error("amp-story", "enable amp-story experiment")
            }
        }

        function ki(a) {
            var b = Array.prototype.map.call(a.element.querySelectorAll("amp-story-page"), function(b, d) {
                return b.getImpl().then(function(b) {
                    a.G[d] = b
                })
            });
            return Promise.all(b)
        }

        function ei(a) {
            var b = a.B,
                c = a.G[a.getPageCount() - 1];
            b.element.hasAttribute("i-amphtml-advance-to") || b !== c ? b.next(void 0) : a.eb().then(function(b) {
                b && qi(a)
            })
        }
        f.ta = function(a) {
            var b = this;
            this.j.dispatch("changepage", a);
            var c = this.getPageById(a),
                d = this.getPageIndex(c);
            ri(this, c.element, !this.B);
            c.isAd() ? (this.j.dispatch("togglead", !0), this.o.mutate(function() {
                b.element.setAttribute("ad-showing", "")
            })) : (this.j.dispatch("togglead", !1), this.o.mutate(function() {
                b.element.removeAttribute("ad-showing")
            }), this.ga.setActivePageId(a));
            this.lb.updateActivePage(d, this.getPageCount(), c.element.id);
            var e = this.B,
                g = c.element.previousElementSibling,
                k = this.element.querySelector("[" +
                    "pre-active".replace(Sa, Ta) + "]");
            this.B = c;
            this.ga.resetDeveloperLogs();
            this.ga.setDeveloperLogContextString(this.B.element.id);
            return c.beforeVisible().then(function() {
                Ea(b.element, "action").trigger(b.B.element, "active", null, 100);
                e && e.setActive(!1);
                c.setActive(!0);
                g && cb(g, "amp-story-page") && g.setAttribute("pre-active", "");
                k && k.removeAttribute("pre-active");
                e || si(b);
                li(b);
                b.j.get("mutedstate") || (ti(b), ui(b));
                vi(b);
                b.B && b.getPageIndex(b.B) + 1 >= b.getPageCount() && wi(b)
            })
        };

        function vi(a) {
            if (a.Z.isSafari() || a.Z.isIos()) ai(a) || a.mutateElement(function() {
                Bb(a.element, "display", "none");
                0 <= a.element.offsetHeight && Bb(a.element, "display", "")
            })
        }

        function gi(a) {
            return (a = a.win.history) && a.state ? a.state.ampStoryPageId : null
        }
        f.onResize = function() {
            var a = this,
                b = ai(this);
            this.j.dispatch("toggledesktop", b);
            b ? this.j.dispatch("togglelandscape", !1) : this.o.run({
                measure: function(b) {
                    var c = a.element,
                        e = c.offsetHeight;
                    b.isLandscape = c.offsetWidth > e
                },
                mutate: function(b) {
                    a.j.dispatch("togglelandscape", b.isLandscape)
                }
            }, {})
        };
        f.Y = function(a) {
            var b = this;
            a ? (this.o.mutate(function() {
                b.element.setAttribute("desktop", "")
            }), this.za || (this.za = new Kg(this.win, this.element), this.za.attach()), this.B && ri(this, this.B.element, !0)) : (this.Oc.build(), this.o.mutate(function() {
                b.element.removeAttribute("desktop")
            }))
        };

        function ai(a) {
            return a.cd.matches && !a.Z.isBot()
        }

        function fi(a, b) {
            b && p().error("amp-story", "No handler to exit unsupported browser state.");
            var c = a.getFallback();
            a.mutateElement(function() {
                a.element.classList.add("i-amphtml-story-fallback")
            });
            c ? a.toggleFallback(!0) : a.element.appendChild(a.Jd.build())
        }

        function ri(a, b, c) {
            c = void 0 === c ? !1 : c;
            a.za && a.getVsync().run({
                measure: function(c) {
                    var d;
                    var g = b.querySelector('[template="fill"]:not(.i-amphtml-hidden-by-media-query)');
                    g ? (d = g.querySelector("[poster]:not(.i-amphtml-hidden-by-media-query)"), g = g.querySelector("[src]:not(.i-amphtml-hidden-by-media-query)"), d = d ? d.getAttribute("poster") : "", g = g ? g.getAttribute("src") : "", d = d || g) : d = null;
                    c.url = d;
                    c.color = (a.win.getComputedStyle(b) || la()).getPropertyValue("background-color")
                },
                mutate: function(b) {
                    a.za.setBackground(b.color,
                        b.url, c)
                }
            }, {})
        }

        function qi(a) {
            wi(a).then(function() {
                a.j.dispatch("togglebookend", !0)
            })
        }
        f.Ia = function(a) {
            xi(this, a);
            this.element.classList.toggle("i-amphtml-story-bookend-active", a);
            a && (this.ga.hideDeveloperLog(), this.B.pauseCallback());
            a || this.B.resumeCallback()
        };

        function xi(a, b) {
            ai(a) && (a = hb(a.element, "amp-story-page, .i-amphtml-story-system-layer"), Array.prototype.forEach.call(a, function(a) {
                b ? Ab(a, {
                    opacity: 0,
                    transition: "opacity 0.1s"
                }) : Fb(a)
            }))
        }

        function yi(a) {
            var b = zi(a, 0, {}, a.B.element.id),
                c = [];
            Object.keys(b).forEach(function(a) {
                var d = b[a];
                c[d] || (c[d] = []);
                c[d].push(a)
            });
            return c
        }

        function zi(a, b, c, d) {
            if (void 0 !== c[d] && c[d] <= b) return c;
            c[d] = b;
            a.getPageById(d).getAdjacentPageIds().forEach(function(d) {
                void 0 !== c[d] && c[d] <= b || (c = zi(a, b + 1, c, d))
            });
            return c
        }

        function li(a) {
            if (a.Z.isBot()) a.G.forEach(function(a) {
                a.setDistance(0)
            });
            else {
                var b = yi(a);
                a.mutateElement(function() {
                    b.forEach(function(b, d) {
                        b.forEach(function(b) {
                            a.getPageById(b).setDistance(d)
                        })
                    })
                })
            }
        }

        function si(a) {
            var b = bf(a.element);
            b && a.B.whenLoaded().then(function() {
                a.sa.register(b);
                return a.sa.preload(b)
            }).then(function() {
                a.la = db(a.element, function(a) {
                    return "audio" === a.tagName.toLowerCase()
                })
            })
        }

        function wi(a) {
            a.Cb.build();
            return a.Cb.loadConfig()
        }
        f.eb = function() {
            return this.j.get("canshowbookend") ? ai(this) ? this.Cb.loadConfig(!1).then(function(a) {
                return !!(a && a.relatedArticles && a.relatedArticles.length || a.components && a.components.length)
            }) : Promise.resolve(!0) : Promise.resolve(!1)
        };

        function Ai(a, b) {
            a = Ub(a.G, function(a) {
                return a.element.id === b
            });
            0 > a && n().error("amp-story", 'Story refers to page "' + b + '", but no such page exists.');
            return a
        }
        f.getPageById = function(a) {
            a = Ai(this, a);
            return this.G[a]
        };
        f.getPageCount = function() {
            return this.G.length - this.hc.length
        };
        f.getPageIndex = function(a) {
            return Ub(this.G, function(b) {
                return b === a
            })
        };

        function Bi(a, b) {
            var c = Ub(a.G, function(a) {
                return !!ab(b, function(b) {
                    return b === a.element
                })
            });
            return a.G[c] || null
        }
        f.getElementDistance = function(a) {
            return (a = Bi(this, a)) ? a.getDistance() : -1
        };
        f.getMaxMediaElementCounts = function() {
            var a = this.element.querySelectorAll("amp-audio, [background-audio]").length,
                b = this.element.querySelectorAll("amp-video").length;
            this.element.hasAttribute("background-audio") && a++;
            var c = {};
            return c.audio = Math.min(a + 2, Wh.audio), c.video = Math.min(b + 2, Wh.video), c
        };
        f.getElement = function() {
            return this.element
        };
        f.Nb = function(a) {
            a ? ti(this) : ui(this)
        };

        function ti(a) {
            a.la && a.sa.mute(a.la);
            a.G.forEach(function(a) {
                a.muteAllMedia()
            })
        }

        function ui(a) {
            function b() {
                a.la && (a.sa.unmute(a.la), a.sa.play(a.la));
                a.B && a.B.unmuteAllMedia()
            }
            a.sa.blessAll().then(b, b)
        }

        function di(a) {
            var b = !!a.element.querySelector("amp-audio, amp-video, [background-audio]"),
                c = a.element.hasAttribute("background-audio");
            a.j.dispatch("togglehasaudio", b || c)
        }
        f.getNavigationState = function() {
            return this.lb
        };
        f.addPage = function(a) {
            this.G.push(a);
            a.isAd() && this.hc.push(a)
        };
        f.insertPage = function(a, b) {
            var c = this.getPageById(b),
                d = c.element;
            if (c.isAd() && !this.j.get("caninsertautomaticad")) return p().expectedError("amp-story", "Inserting ads automatically is disallowed."), !1;
            var e = this.getPageById(a),
                g = e.element,
                k = this.getNextPage(e);
            if (!k) return !1;
            g.setAttribute("i-amphtml-advance-to", b);
            g.setAttribute("auto-advance-to", b);
            d.setAttribute("i-amphtml-return-to", a);
            var l = k.element,
                m = l.id;
            d.setAttribute("i-amphtml-advance-to", m);
            d.setAttribute("auto-advance-to", m);
            l.setAttribute("i-amphtml-return-to",
                b);
            return !0
        };
        f.getNextPage = function(a) {
            return (a = a.getNextPageId(!0)) ? this.getPageById(a) : null
        };

        function ji(a) {
            return !!(a.CSS && a.CSS.supports && a.CSS.supports("display", "grid"))
        }
        (function(a) {
            a.registerElement("amp-story", Xh, ".i-amphtml-story-background{background-color:transparent}amp-story[standalone][desktop]{max-width:none!important;max-height:none!important;width:100vw!important}[desktop] .i-amphtml-story-logo{display:block!important}.i-amphtml-story-background-container{opacity:.8!important;position:absolute!important;top:0!important;right:0!important;bottom:0!important;left:0!important;overflow:hidden!important}.i-amphtml-story-background-overlay,.i-amphtml-story-background-overlay:after{position:absolute!important;left:0!important;top:0!important;height:100%!important;width:100%!important;z-index:1!important;background-color:rgba(0,0,0,0.2)!important}.i-amphtml-story-background-overlay:after{content:\"\"!important;display:block!important;opacity:0!important;background-color:rgba(0,0,0,0.5)!important;-webkit-transition:opacity 0.3s!important;transition:opacity 0.3s!important}.i-amphtml-story-bookend-active .i-amphtml-story-background-overlay:after{opacity:1!important}.i-amphtml-story-background{position:absolute!important;top:-150px!important;right:-150px!important;bottom:-150px!important;left:-150px!important;opacity:0!important;-webkit-filter:blur(50px)!important;filter:blur(50px)!important;background-size:cover!important;background-color:transparent!important;background-position:50%!important;will-change:opacity,z-index!important;z-index:0!important}.i-amphtml-story-background.active{opacity:1!important;z-index:1!important}[desktop] amp-story-page{-webkit-transform:scale(1.0) translateX(-350%) translateY(0%)!important;transform:scale(1.0) translateX(-350%) translateY(0%)!important;opacity:.05!important;-webkit-transform-origin:left!important;transform-origin:left!important;border-radius:16px!important}[desktop] amp-story-page[distance=\"0\"],[desktop] amp-story-page[distance=\"1\"]{-webkit-transition:opacity 300ms linear,-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important;transition:opacity 300ms linear,transform 300ms cubic-bezier(0.4,0.0,0.2,1),-webkit-transform 300ms cubic-bezier(0.4,0.0,0.2,1)!important}[desktop] .i-amphtml-story-button-container{position:absolute!important;top:0!important;bottom:0!important;left:0!important;right:0!important;z-index:100002!important;pointer-events:none!important;display:block!important}[desktop] .i-amphtml-story-button-container:before{content:\"\";position:absolute!important;top:0!important;bottom:0!important;width:calc(50vw - 23vh - 32px)!important}.i-amphtml-story-back-prev>.i-amphtml-story-page-sentinel,.i-amphtml-story-button-move,.i-amphtml-story-fwd-next>.i-amphtml-story-page-sentinel{pointer-events:all!important}.i-amphtml-story-button-hidden>.i-amphtml-story-button-move{cursor:default!important;pointer-events:none!important;opacity:0!important}[desktop]>.next-container:before{right:0!important;background:-webkit-linear-gradient(left,rgba(33,33,33,0),rgba(33,33,33,0.32))!important;background:linear-gradient(90deg,rgba(33,33,33,0) 0%,rgba(33,33,33,0.32))!important}[desktop]>.prev-container:before{left:0!important;background:-webkit-linear-gradient(left,rgba(33,33,33,0.32),rgba(33,33,33,0))!important;background:linear-gradient(90deg,rgba(33,33,33,0.32) 0%,rgba(33,33,33,0))!important}[desktop]>.next-container>.i-amphtml-story-button-move{right:0!important}.prev-container>.i-amphtml-story-page-sentinel,[desktop] amp-story-page[pre-active]{-webkit-transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important}[desktop] amp-story-page[active]{-webkit-transform:scale(1.0) translateX(-50%) translateY(0%)!important;transform:scale(1.0) translateX(-50%) translateY(0%)!important;opacity:1!important}.next-container>.i-amphtml-story-page-sentinel,[desktop] amp-story-page[active]+amp-story-page{-webkit-transform:scale(0.9) translate(calc(50% + 64px))!important;transform:scale(0.9) translate(calc(50% + 64px))!important}[desktop] amp-story-page[active]+amp-story-page~amp-story-page,[dir=rtl] [desktop] amp-story-page{-webkit-transform:scale(0.9) translateX(250vw) translateY(0%)!important;transform:scale(0.9) translateX(250vw) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[pre-active]{-webkit-transform:scale(0.9) translateX(calc(50% + 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(50% + 64px)) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[active]{-webkit-transform:scale(1.0) translateX(-50%) translateY(0%)!important;transform:scale(1.0) translateX(-50%) translateY(0%)!important;opacity:1!important}[dir=rtl] [desktop] amp-story-page[active]+amp-story-page{-webkit-transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important;transform:scale(0.9) translateX(calc(-150% - 64px)) translateY(0%)!important}[dir=rtl] [desktop] amp-story-page[active]+amp-story-page~amp-story-page{-webkit-transform:scale(0.9) translateX(-350%) translateY(0%)!important;transform:scale(0.9) translateX(-350%) translateY(0%)!important}.i-amphtml-story-page-sentinel,[desktop]>amp-story-page{left:50%!important;right:auto!important;margin:auto!important;max-height:75vh!important;max-width:45vh!important;min-width:320px!important;min-height:533px!important}[desktop]>amp-story-page{box-shadow:0 0 15px rgba(0,0,0,0.4)!important}.i-amphtml-story-page-sentinel{width:100vw!important;height:100vh!important;margin-left:-32px!important;cursor:pointer}.i-amphtml-story-button-move,.i-amphtml-story-page-sentinel{position:absolute!important;top:0!important;bottom:0!important;z-index:100002!important}.i-amphtml-story-button-move{margin:auto 40px!important;width:60px!important;height:60px!important;border-radius:50%!important;border:0!important;background-color:#fff!important;background-repeat:no-repeat!important;background-size:12px 17px!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;opacity:.5!important;-webkit-transition:opacity 150ms linear,-webkit-transform 300ms linear!important;transition:opacity 150ms linear,-webkit-transform 300ms linear!important;transition:opacity 150ms linear,transform 300ms linear!important;transition:opacity 150ms linear,transform 300ms linear,-webkit-transform 300ms linear!important;cursor:pointer!important;outline:none!important}.i-amphtml-story-next-hover>amp-story-page[active]+amp-story-page,.i-amphtml-story-prev-hover>amp-story-page[pre-active]{opacity:0.3!important}.prev-container>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.7 22l-9.5-9.5L15.7 3l-3-3L.4 12.6 12.8 25'/%3E%3C/svg%3E\")!important;background-position:45% 50%!important;left:0!important}.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.3 3l9.5 9.5L.3 22l3 3 12.4-12.5L3.2 0'/%3E%3C/svg%3E\")!important;background-position:55% 50%!important}.i-amphtml-story-fwd-replay>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-fwd-more>.i-amphtml-story-button-move{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E\")!important;background-position:50%;background-size:32px 32px!important}.i-amphtml-story-next-hover>.next-container>.i-amphtml-story-button-move,.i-amphtml-story-prev-hover>.prev-container>.i-amphtml-story-button-move{-webkit-transform:scale(1.1)!important;transform:scale(1.1)!important;opacity:1!important}.i-amphtml-story-prev-hover>.i-amphtml-story-button-hidden>.i-amphtml-story-button-move{opacity:0!important}.i-amphtml-story-next-hover>.i-amphtml-story-fwd-next>.i-amphtml-story-button-move{-webkit-transform:translateX(8px)!important;transform:translateX(8px)!important;opacity:1!important}.i-amphtml-story-prev-hover>.i-amphtml-story-back-close-bookend>.i-amphtml-story-button-move,.i-amphtml-story-prev-hover>.i-amphtml-story-back-prev>.i-amphtml-story-button-move{-webkit-transform:translateX(-8px)!important;transform:translateX(-8px)!important;opacity:1!important}amp-story{font-display:optional}.i-amphtml-story-grid-template-vertical{-ms-flex-line-pack:start;align-content:start;grid-gap:16px;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;justify-items:start;padding:32px}.i-amphtml-story-grid-template-vertical>*{width:100%}.i-amphtml-story-grid-template-horizontal{-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:start;-ms-flex-align:start;align-items:start;grid-gap:16px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start;padding:32px}.i-amphtml-story-grid-template-thirds{padding:32px}amp-story-grid-layer{padding:68px 32px 32px}amp-story,amp-story-cta-layer,amp-story-grid-layer,amp-story-page{contain:strict!important;overflow:hidden!important}.i-amphtml-story-system-reset,.i-amphtml-story-system-reset *{border:none!important;box-sizing:initial!important;color:initial!important;font-family:Roboto,sans-serif!important;font-size:initial!important;font-weight:initial!important;height:auto!important;margin:0!important;padding:0!important;text-align:left!important;width:auto!important}amp-story{height:100%!important;position:relative!important;text-rendering:geometricPrecision!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;width:100%!important}html.i-amphtml-story-standalone,html.i-amphtml-story-standalone body{height:100%!important;margin:0!important;padding:0!important;width:100%!important;cursor:auto!important;-webkit-tap-highlight-color:rgba(0,0,0,0)!important}html.i-amphtml-story-standalone body{display:grid!important}amp-story[standalone]{-ms-flex-item-align:center!important;align-self:center!important;box-shadow:2px 2px 20px rgba(0,0,0,0.5)!important;height:100%!important;justify-self:center!important}amp-story[standalone]:-webkit-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-moz-full-screen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:-ms-fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story[standalone]:fullscreen{height:100vh!important;max-height:none!important;max-width:none!important}amp-story .amp-video-eq{display:none!important}amp-story-page{bottom:0!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;-webkit-transition:none!important;transition:none!important}.i-amphtml-story-fallback amp-story-page{display:none!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container:not([active]){-webkit-transform:translateY(1000%)!important;transform:translateY(1000%)!important}amp-story-page[active],amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"0\"]{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"1\"]{-webkit-transform:translateY(100%)!important;transform:translateY(100%)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"2\"]{-webkit-transform:translateY(200%)!important;transform:translateY(200%)!important}amp-story:not([desktop])>amp-story-page.i-amphtml-layout-container[distance=\"3\"]{-webkit-transform:translateY(300%)!important;transform:translateY(300%)!important}.i-amphtml-story-bookend-active:not([desktop])>amp-story-page.i-amphtml-layout-container[active]{-webkit-transform:translateY(0) scale(1.2)!important;transform:translateY(0) scale(1.2)!important;-webkit-filter:blur(15px)!important;filter:blur(15px)!important}.i-amphtml-story-bookend-active>amp-story-page[active]:after{content:\"\"!important;display:block!important;left:0!important;top:0!important;bottom:0!important;right:0!important;position:absolute!important;background:hsla(0,0%,46%,0.3)!important;z-index:2!important}amp-story amp-video:after{content:\"\"!important;position:absolute!important;height:100%!important;width:100%!important;top:0!important;left:0!important}amp-story-cta-layer,amp-story-grid-layer{bottom:0!important;left:0!important;right:0!important;position:absolute!important}amp-story-cta-layer{display:block!important;height:20%!important;z-index:3!important}amp-story-grid-layer{display:grid!important;top:0!important;z-index:2!important}amp-story-grid-layer *{box-sizing:border-box!important;margin:0!important}.i-amphtml-story-grid-template-with-full-bleed-animation{position:absolute!important;display:block!important;padding:0!important}.i-amphtml-story-grid-template-fill>:not(:first-child),.i-amphtml-story-logo{display:none!important}.i-amphtml-story-logo{margin:15px!important}.i-amphtml-story-grid-template-fill>:first-child{bottom:0!important;display:block!important;height:auto!important;left:0!important;position:absolute!important;right:0!important;top:0!important;width:auto!important}.i-amphtml-story-grid-template-fill>amp-anim img,.i-amphtml-story-grid-template-fill>amp-img img,.i-amphtml-story-grid-template-fill>amp-video video{-o-object-fit:cover!important;object-fit:cover!important}.i-amphtml-story-grid-template-vertical{grid-auto-flow:row!important;grid-template-columns:100%!important}.i-amphtml-story-grid-template-horizontal{grid-auto-flow:column!important;grid-template-rows:100%!important}.i-amphtml-story-grid-template-thirds{grid-template-rows:33% 33% 33%!important;grid-template-areas:\"upper-third\" \"middle-third\" \"lower-third\"!important}.i-amphtml-story-bookend-active .i-amphtml-story-dev-logs-button,.i-amphtml-story-dev-logs-button[data-count=\"0\"]{display:none!important}.i-amphtml-story-dev-logs-button{background-position:50%!important;background-repeat:no-repeat!important}.i-amphtml-story-dev-logs-button:after{background-color:#fff!important;border-radius:6px!important;box-sizing:border-box!important;color:#444;content:attr(data-count)!important;display:inline-block!important;font-family:Roboto!important;font-size:11px!important;height:12px!important;line-height:12px!important;padding:0 6px!important;position:absolute!important;right:0!important;top:6px!important}.i-amphtml-story-error-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-warning-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-success-button{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important}amp-story[standalone] .i-amphtml-story-developer-log{background:rgba(0,0,0,0.85)!important;bottom:0!important;box-sizing:border-box!important;color:#fff!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto!important;left:0!important;max-height:45%!important;padding:0!important;position:fixed!important;right:0!important;text-align:left!important;z-index:100002!important}.i-amphtml-story-developer-log-header{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;background:rgba(3,169,244,0.85)!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;font-weight:700!important;-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important;padding:12px 20px!important;text-align:center!important}.i-amphtml-story-developer-log-close,.i-amphtml-story-developer-log-header{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important}.i-amphtml-story-developer-log-close{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg fill='%23FFF' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-context{color:#000!important;font-family:Roboto Mono!important}.i-amphtml-story-developer-log-entries{list-style-type:none!important;margin:0!important;overflow-x:hidden!important;overflow-y:auto!important;padding:0!important}.i-amphtml-story-developer-log-entry{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;border-bottom:1px solid hsla(0,0%,100%,0.5)!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;padding:20px!important}.i-amphtml-story-developer-log-entry:before{background-position:50%!important;background-repeat:no-repeat!important;background-size:cover!important;content:\"\";display:inline-block!important;-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:0!important;flex-shrink:0!important;height:32px!important;margin-right:20px!important;width:32px!important}.i-amphtml-story-developer-log-entry-error:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23DB4437'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-warning:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFC107'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-developer-log-entry-success:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%230F9D58'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-error{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-line-pack:center!important;align-content:center!important;background-color:#222!important;bottom:0!important;color:#f0f0f0!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important;font-family:Roboto,sans-serif!important;font-size:20px!important;-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;left:0!important;padding:32px!important;position:absolute!important;right:0!important;top:0!important;z-index:999999!important;text-align:center!important}.i-amphtml-story-experiment-icon{background-repeat:no-repeat!important;background-size:cover!important;height:64px!important;margin:0 auto 16px!important;width:64px!important}.i-amphtml-story-experiment-icon-error{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-icon-done{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23FFF'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'/%3E%3C/svg%3E\")!important}.i-amphtml-story-experiment-error button{background-color:transparent!important;border:1px solid #f0f0f0!important;border-radius:8px!important;color:#f0f0f0!important;cursor:pointer!important;font-size:20px!important;font-family:Roboto,sans-serif!important;margin:16px 0 0!important;outline:none!important;padding:8px 32px!important;text-transform:uppercase!important;width:50%!important}.i-amphtml-story-experiment-error button:active,.i-amphtml-story-experiment-error button:focus{background-color:#f0f0f0!important;color:#222!important}.i-amphtml-story-bookend-close{opacity:0.5!important;top:8px!important;left:8px!important;position:absolute!important;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFF' height='24' viewBox='0 0 24 24' width='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")!important}.i-amphtml-story-bookend-fullbleed .i-amphtml-story-bookend-close{opacity:1!important;position:fixed!important;z-index:2!important}.i-amphtml-story-bookend-fullbleed:before{content:\" \"!important;display:block!important;background-image:-webkit-linear-gradient(bottom,rgba(1,1,1,0),#000)!important;background-image:linear-gradient(0deg,rgba(1,1,1,0),#000)!important;position:fixed!important;top:0!important;left:0!important;right:0!important;height:40px!important;pointer-events:none!important;z-index:1!important}.i-amphtml-story-toast{position:fixed!important;bottom:0!important;left:0!important;right:0!important;display:inline-block!important;padding:1.16em 1.33em!important;line-height:1.33!important;color:#fff!important;background:#212121!important;-webkit-animation:toast 2.2s!important;animation:toast 2.2s!important;-webkit-animation-fill-mode:both!important;animation-fill-mode:both!important;font-family:Roboto,sans-serif!important;font-weight:400!important;font-size:12px!important;max-width:640px!important;z-index:100002!important}@media (min-width:640px){.i-amphtml-story-toast{right:auto!important;font-size:14px!important;margin:0 auto 1.16em 1.16em!important;border-radius:6px}}@-webkit-keyframes toast{0%{-webkit-transform:translateY(100px);transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{-webkit-transform:translateY(0);transform:translateY(0)}92%{-webkit-transform:translateY(0);transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{-webkit-transform:translateY(100px);transform:translateY(100px)}}@keyframes toast{0%{-webkit-transform:translateY(100px);transform:translateY(100px);easing:cubic-bezier(0.0,0.0,0.2,1)}8%{-webkit-transform:translateY(0);transform:translateY(0)}92%{-webkit-transform:translateY(0);transform:translateY(0);easing:cubic-bezier(0.4,0.0,1,1)}to{-webkit-transform:translateY(100px);transform:translateY(100px)}}.i-amphtml-story-copy-successful{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E\")!important;background-repeat:no-repeat!important;background-size:16px 16px!important;padding-left:24px!important;color:#fff!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.i-amphtml-story-copy-url{-webkit-box-flex:1!important;-ms-flex:1!important;flex:1!important;color:hsla(0,0%,100%,0.5)!important;margin-left:40px!important;text-overflow:ellipsis!important;overflow:hidden!important;white-space:nowrap!important}.i-amphtml-story-button-container{display:none!important}.i-amphtml-story-spinner{display:inline-block!important;position:absolute!important;top:calc(100% - 36px)!important;right:12px!important;width:24px!important;height:24px!important;z-index:10!important}.i-amphtml-story-spinner-container{width:100%!important;height:100%!important;direction:ltr!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-container{-webkit-animation:container-rotate 1294ms linear infinite!important;animation:container-rotate 1294ms linear infinite!important}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes container-rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.i-amphtml-story-spinner-layer{position:absolute!important;width:100%!important;height:100%!important;opacity:0!important;white-space:nowrap!important;color:#fff!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-layer{-webkit-animation-name:fill-unfill-rotate!important;animation-name:fill-unfill-rotate!important;-webkit-animation-duration:4400ms!important;animation-duration:4400ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-iteration-count:infinite!important;animation-iteration-count:infinite!important;opacity:1!important}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}.i-amphtml-story-spinner-circle-clipper{display:inline-block!important;position:relative!important;width:50%!important;height:100%!important;overflow:hidden!important}.i-amphtml-story-spinner-layer:after{left:45%!important;width:10%!important;border-top-style:solid!important}.i-amphtml-story-spinner-circle-clipper:after,.i-amphtml-story-spinner-layer:after{content:\"\"!important;box-sizing:border-box!important;position:absolute!important;top:0!important;border-width:3px!important;border-radius:50%!important}.i-amphtml-story-spinner-circle-clipper:after{bottom:0!important;width:200%!important;border-style:solid!important;border-bottom-color:transparent!important}.i-amphtml-story-spinner-circle-clipper.left:after{left:0!important;border-right-color:transparent!important;-webkit-transform:rotate(129deg)!important;transform:rotate(129deg)!important}.i-amphtml-story-spinner-circle-clipper.right:after{left:-100%!important;border-left-color:transparent!important;-webkit-transform:rotate(-129deg)!important;transform:rotate(-129deg)!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper:after{-webkit-animation-duration:1100ms!important;animation-duration:1100ms!important;-webkit-animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;animation-timing-function:cubic-bezier(0.4,0.0,0.2,1)!important;-webkit-animation-iteration-count:infinite!important;animation-iteration-count:infinite!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.left:after{-webkit-animation-name:left-spin!important;animation-name:left-spin!important}.i-amphtml-story-spinner[active] .i-amphtml-story-spinner-circle-clipper.right:after{-webkit-animation-name:right-spin!important;animation-name:right-spin!important}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@keyframes left-spin{0%{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}@keyframes right-spin{0%{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}}\n/*# sourceURL=/extensions/amp-story/1.0/amp-story.css*/");
            a.registerElement("amp-story-page",
                zf);
            a.registerElement("amp-story-grid-layer", ld);
            a.registerElement("amp-story-cta-layer", hd);
            a.registerElement("amp-story-bookend", Mg)
        })(self.AMP);
    })
});
//# sourceMappingURL=amp-story-1.0.js.map
