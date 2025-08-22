(function() {
    function ea(n) {
        ba.console.log(n)
    }

    function Bb() {
        this.n()
    }

    function D() {
        this.c = this.b = 0
    }

    function zj() {
        this.oa = this.N = this.wa = this.K = 0
    }

    function Vd(n) {
        return new ba.Float32Array(n)
    }

    function ml(n) {
        if ("undefined" == typeof n.ea) n.ea = null;
        n.fc = new Bb;
        n.s = 0;
        n.w = 0;
        n.u = 0;
        n.v = 0;
        n.nd = 0;
        n.xe = 0;
        n.vb = 0;
        n.wb = 0;
        n.Oc = 1;
        n.Dd = 0;
        n.Ed = 0;
        n.Bd = 0;
        n.Ad = 0;
        n.Kc = 0;
        n.gd = 0;
        n.Le = 0;
        n.Zf = 0;
        n.Me = 0;
        n.Yf = 0;
        n.th = 800;
        n.sh = 480;
        n.Zi = 400;
        n.Yi = 240;
        n.zj = 140;
        n.Bj = 160;
        n.Aj = 70;
        n.Cj = 80;
        n.Xe = true;
        n.Xg = function() {
            var n = this.Bd,
                c = this.Ad,
                e = 400 / 240,
                z;
            z = Math.max(Math.min(n / c, 940 / 480), 1.25);
            var T = 0,
                l = 0;
            if (z > e) {
                T = z * c;
                l = c;
                this.vb = e / z;
                this.wb = 1
            } else {
                T = n;
                l = n / z;
                this.vb = 1;
                this.wb = z / e
            }
            this.vb *= this.Oc;
            this.wb *= this.Oc;
            e = 0 + Math.floor(n);
            z = 0 + Math.floor(c);
            this.Le = Math.floor(0 + .5 * (n - T));
            this.Zf = Math.ceil(e - .5 * (n - T));
            this.Me = Math.floor(0 + .5 * (c - l));
            this.Yf = Math.ceil(z - .5 * (c - l));
            this.Kc = this.Zf - this.Le;
            this.gd = this.Yf - this.Me;
            this.fc.n();
            this.fc.p = this.vb / 400;
            this.fc.g = -this.vb + this.Dd * this.fc.p;
            this.fc.q = -this.wb / 240;
            this.fc.f = this.wb + this.Ed * this.fc.q;
            this.s = Math.max(400 * -(this.Oc / this.vb - 1), -70);
            this.w = Math.max(240 * -(this.Oc / this.wb - 1), -80);
            this.u = 800 - this.s;
            this.v = 480 - this.w;
            this.nd = this.u - this.s;
            this.xe = this.v - this.w;
            this.ni = this.Kc / this.nd;
            this.Xe = true
        };
        n.wg = 0;
        n.yf = function() {
            var Y = 800,
                c = 480;
            if ("undefined" != typeof ba.innerWidth) {
                Y = ba.innerWidth;
                c = ba.innerHeight
            }
            if (Y < this.Bd - .5 || Y > this.Bd + .5 || c < this.Ad - .5 || c > this.Ad + .5) {
                var e = (new Date).getTime();
                if (500 < e - n.wg) {
                    n.wg = e;
                    this.Bd = Y;
                    this.Ad = c;
                    this.Xg();
                    if (this.ea) {
                        this.ea.width = this.Kc;
                        this.ea.height =
                            this.gd;
                        this.ea.style.left = this.Le + "px";
                        this.ea.style.top = this.Me + "px"
                    }
                    if (mg) window.setTimeout(function() {
                        window.scrollTo(0, 1)
                    }, 100);
                    ea("Update render region to new dimmensions: " + this.Kc + "x" + this.gd)
                }
            }
        }
    }

    function Fn() {
        if (Ea == Hb) {
            ea("Restoring WebGL context...");
            Hb.r();
            for (var n in Bc)
                if (Bc.hasOwnProperty(n)) {
                    var Y = Bc[n];
                    if (Y.Xa && "undefined" != typeof Y.ob) Ea.Zg(Y)
                } for (n = 0; n < Hb.Bb.length; n++) Hb.Zj(Hb.Bb[n]);
            if (Hb.Xf()) Hb.Rc = false
        }
    }

    function ng(n) {
        return function() {
            n.e = n.J.width;
            n.d = n.J.height;
            Aj += n.e *
                n.d * 4;
            if (n.rg) {
                n.e *= n.Ig;
                n.d *= n.Ig
            }
            if (0 < n.e) n.ub = 1 / n.e;
            else n.ub = 0;
            if (0 < n.d) n.Sb = 1 / n.d;
            else n.Sb = 0;
            n.mc = .5 * Math.sqrt(n.e * n.e + n.d * n.d);
            n.Xa = true;
            if (Ea.Hd) Ea.Zg(n);
            else if (n.ng) Ea.Ch(n);
            Ca++
        }
    }

    function nl(n, Y, c) {
        var e = new ba.Image,
            z = {};
        z.J = e;
        z.Xa = false;
        z.ng = Y;
        z.Dh = -1;
        z.ud = null;
        z.Je = null;
        var l = "images/";
        if (Ib && !c) {
            l += "x05/";
            z.l = .5;
            z.rg = true
        } else {
            if (c) ea("Forcing " + n + " to HQ");
            z.rg = false;
            z.l = 1
        }
        z.Ig = 1 / z.l;
        l += n;
        e.onload = ng(z);
        e.onerror = function() {
            ea("loadImage: couldn't load " + l);
            z.J = ol;
            z.Xa = true;
            Ca++
        };
        e.src = l;
        Bc[n] = z
    }

    function l(n, Y, c, e) {
        if ("undefined" == typeof Y) Y = 0;
        if ("undefined" == typeof c) c = 0;
        if ("undefined" != typeof e)
            if (0 > e.indexOf(ia)) {
                ea("loadImage: skipping " + n + " because it is unused with target language!");
                return
            } oa.push({
            ui: n,
            ci: Y,
            Mh: c
        })
    }

    function ub(n) {
        return "sounds/" + n.substring(0, n.length - 3) + C.hd
    }

    function og(n, Y) {
        ea(Y);
        n.me = true;
        va++
    }

    function ja(n) {
        var Y = {
            Xa: false,
            me: false,
            pb: false
        };
        ih[n] = Y;
        var c = ub(n);
        if ("wa" == C.sa) {
            var e = new ba.XMLHttpRequest;
            e.open("GET", c, true);
            e.responseType = "arraybuffer";
            e.onload = function() {
                Y.Ib = e.response;
                Y.Xa = true
            };
            e.onerror = function() {
                og(Y, "loadSound: couldn't load " + n)
            };
            try {
                e.send()
            } catch (z) {
                og(Y, "loadSound: couldn't load " + n + ": " + z.ai)
            }
        }
        if ("html5" == C.sa) {
            Y.Jb = [];
            for (var l = Y.Yd = 0; 2 > l; l++) {
                Y.Jb[l] = new ba.Audio(c);
                Y.Jb[l].preload = "auto";
                Y.Jb[l].load()
            }
        }
    }

    function aa(n) {
        if ("none" != C.sa) P.push(n)
    }

    function Cc(n, Y) {
        var c = "loadMusic: couldn't load " + n;
        if (Y) c += ":" + Y.ai;
        ea(c)
    }

    function Bj(n, Y) {
        if ("none" != C.sa) {
            var c = ub(n),
                e = {
                    xd: Y,
                    db: null,
                    Ib: null,
                    rc: null,
                    pb: false
                };
            Cj[n] =
                e;
            if ("html5" == C.Tc) {
                e.db = [];
                try {
                    for (var z = 0; 2 > z; z++) {
                        e.db[z] = new ba.Audio(c);
                        e.db[z].preload = "auto";
                        e.db[z].load()
                    }
                    e.pb = true
                } catch (l) {
                    e.db = null
                }
            }
            if ("wa" == C.Tc) {
                var p = new ba.XMLHttpRequest;
                p.open("GET", c, true);
                p.responseType = "arraybuffer";
                p.onload = function() {
                    e.Ib = p.response;
                    if (C.Pa.decodeAudioData) C.Pa.decodeAudioData(e.Ib, function(Y) {
                        ea("Decoded music: " + n);
                        e.rc = Y;
                        e.pb = true;
                        e.Ib = null
                    }, function() {
                        ea("loadMusic: couldn't decode " + n)
                    });
                    else {
                        e.rc = C.Pa.createBuffer(e.Ib, false);
                        ea("Decoded music " + n + " [async]");
                        if (e.rc) e.pb = true;
                        e.Ib = null
                    }
                };
                p.onerror = function() {
                    Cc(n, null)
                };
                try {
                    p.send()
                } catch (k) {
                    Cc(n, k)
                }
            }
        }
    }

    function Ga() {
        if (t) t(Dj)
    }

    function Dj() {
        if (1 == wa) {
            gi.gameLoadingStart();
            wa = 2
        }
        var n = .001 * (new Date).getTime(),
            Y = n - Wd;
        Wd = n;
        var c;
        Ea.yf();
        var e = Bc["white.png"],
            z = Bc["loading-bar-outer.png"];
        c = Bc["loading-bar-inner.png"];
        var l = Bc["game-bk.png"],
            k = Bc["sun-temple.png"],
            Jb = Bc["title.png"];
        pg.wa = Ea.ea.width;
        pg.oa = Ea.ea.height;
        Ea.bc(pg);
        if ("undefined" != typeof e && e && e.Xa) {
            Ea.F();
            Ea.A(e);
            Ea.D();
            Ea.Mb(-70, -80, 940, 640);
            Ea.H()
        }
        e = 0;
        if ("undefined" != typeof l && l && l.Xa) {
            w += Y;
            jh.g = 870 - l.e;
            jh.f = 560 - l.d;
            Ea.fa(l, jh, w)
        }
        if ("undefined" != typeof k && k && "undefined" != typeof Jb && Jb && k.Xa && Jb.Xa) {
            if (pl) {
                ob += Y;
                Y = 1 - ob * ob * ob
            } else {
                kh += Y;
                if (1 < kh) kh = 1;
                Y = 1 - kh;
                Y = 1 - Y * Y * Y * Y * Y * Y * Y
            }
            var l = Ea.s,
                m = Ea.v - k.d + 11,
                m = m + 16 * k.d * (1 - Y);
            Ha.K = 0;
            Ha.N = 0;
            Ha.wa = k.e;
            Ha.oa = k.d - 22;
            Ea.eb(k, Ha, l, m);
            l = Ea.u - Jb.e;
            m = Ea.w + 11;
            m = m - 16 * Jb.d * (1 - Y);
            Ea.C(Jb, l, m)
        }
        if ("undefined" != typeof z && z && "undefined" != typeof c && c) {
            if (z.Xa) {
                Ea.C(z, .5 * (800 - z.e) + 4 * ob * ob * ob * 800, .5 * (480 - z.d));
                e++
            }
            if (c.Xa) {
                z =
                    (Ca + va) / (oa.length + P.length);
                z *= .75 + .25 * Math.min((n - ql) / 5.44, 1);
                pg.wa = z * c.e;
                pg.oa = c.d;
                Ea.eb(c, pg, .5 * (800 - c.e) + 4 * ob * ob * ob * 800, .5 * (480 - c.d) + 8);
                e++
            }
        }
        Ea.Ua();
        if (2 > qg - va)
            for (c = qg; qg < c + 2; qg++)
                if (qg < P.length) ja(P[qg]);
        if (3 > rg - Ca)
            for (c = rg; rg < c + 3; rg++)
                if (rg < oa.length) {
                    z = oa[rg];
                    nl(z.ui, z.ci, z.Mh)
                } for (var F in ih)
            if (ih.hasOwnProperty(F)) {
                z = ih[F];
                if ("wa" == C.sa)
                    if (z.Xa && !z.me && !hi) {
                        z.me = true;
                        if (C.Pa.decodeAudioData) {
                            hi = true;
                            (function(n, Y) {
                                C.Pa.decodeAudioData(n.Ib, function(c) {
                                    ea("Decoded " + Y);
                                    n.rc = c;
                                    n.pb = true;
                                    va++;
                                    n.Ib = null;
                                    hi = false
                                }, function() {
                                    ea("loadSound: couldn't decode " + Y);
                                    n.Ib = null;
                                    va++;
                                    hi = false
                                })
                            })(z, F)
                        } else {
                            z.rc = C.Pa.createBuffer(z.Ib, false);
                            ea("Decoded " + F + " [async]");
                            if (z.rc) z.pb = true;
                            z.Ib = null;
                            va++
                        }
                    } if ("html5" == C.sa)
                    if (!z.Xa) {
                        if (z.Jb[0].readyState >= z.Jb[0].HAVE_ENOUGH_DATA) {
                            ea("HTML5 Sound '" + F + "' is ready.");
                            z.Xa = true;
                            z.me = true;
                            z.pb = true;
                            va++
                        }
                        for (c = 0; c < z.Jb.length; c++)
                            if (z.Jb[c].error) {
                                z.pb = false;
                                if (!z.Xa) {
                                    ea("Error: HTML5 Sound '" + F + "' didn't load properly!");
                                    z.Xa = true;
                                    va++
                                }
                            }
                    }
            } if (Ca == oa.length &&
            va == P.length && 5.44 < n - ql && !sg.Uh && 2 == wa) {
            pl = true;
            if (.65 <= ob && "function" == typeof window.eso_main_function_of_unique_name_194851458194) {
                ea("Loaded! Image memory usage " + (Aj / 1024 / 1024).toPrecision(3) + "MB");
                if (Kb) ba.clearInterval(Kb);
                gi.gameLoadingFinished();
                ba.eso_main_function_of_unique_name_194851458194(za, {
                    ii: Ea,
                    $h: Bb,
                    hi: zj,
                    fi: D,
                    si: C,
                    Ok: Ib,
                    Nk: vf,
                    Vh: mg,
                    Wh: ia,
                    Ah: sg,
                    Xh: Hn,
                    Nj: 0
                });
                return
            }
        }
        if (2 <= e) p++;
        if (!ic && 3 <= p) {
            ic = true;
            n = ba.document.createElement("script");
            n.setAttribute("type", "text/javascript");
            n.setAttribute("src",
                "game.js");
            ba.document.getElementsByTagName("head")[0].appendChild(n)
        }
        Ga()
    }
    var ba = window,
        Ma = ba.navigator.userAgent,
        vf = Ma.match(/Android/i),
        mg = Ma.match(/iPhone|iPad|iPod/i),
        Zb = Ma.match(/IEMobile/i);
    if (Zb) mg = vf = false;
    var K = 0;
    try {
        K = ba.frameElement || ba.self != ba.top
    } catch (rl) {
        K = 1
    }
    var Hn = K ? ba.document.referrer : ba.location.href;
    ba.eso_platform_type_ = "unknown";
    if (mg) ba.eso_platform_type_ = "ios";
    if (vf) ba.eso_platform_type_ = "android";
    if (Zb) ba.eso_platform_type_ = "wphone";
    var Ib = vf || mg || Zb || Ma.match(/BlackBerry/i) ||
        Ma.match(/Opera Mini/i),
        Pa, Xd, Rb, da, e, k, c;
    try {
        ba.chrome.storage.local.get(null, function() {
            var n = ba.chrome.runtime.lastError;
            if (n) ba.console.log("Error getting from Storage: " + n);
            else ba.console.log("Successfuly loaded from chrome.store.local!")
        })
    } catch (Iq) {}
    var ia = 0,
        Ma = "en";
    if ("undefined" != typeof window.eso_force_language) Ma = window.eso_force_language;
    else if (window.navigator) Ma = window.navigator.userLanguage || window.navigator.language || Ma;
    switch (Ma.substring(0, 2).toLowerCase()) {
        case "en":
            ia = 0;
            break;
        case "ru":
        case "uk":
            ia = 1;
            break;
        case "es":
            ia = 2;
            break;
        case "de":
            ia = 3;
            break;
        case "tr":
            ia = 4;
            break;
        case "fr":
            ia = 5;
            break;
        case "nl":
            ia = 6;
            break;
        case "pt":
            ia = 7;
            break;
        case "pl":
            ia = 8
    }
    if ("undefined" == typeof ba.console || "undefined" == typeof ba.console.log) {
        ba.console = {};
        ba.console.log = function() {}
    }
    var gi = ba.PokiSDK,
        wa = 0;
    gi.init().then(function() {
        ea("Poki SDK successfully initialized");
        wa = 1
    })["catch"](function() {
        ea("Initialized, but the user likely has adblock");
        wa = 1
    });
    var qa = null;
    Bb.prototype.n = function() {
        this.p =
            1;
        this.Q = this.I = 0;
        this.q = 1;
        this.f = this.g = 0
    };
    Bb.prototype.l = function(n, Y) {
        this.p *= n;
        this.I *= Y;
        this.Q *= n;
        this.q *= Y;
        this.g *= n;
        this.f *= Y
    };
    Bb.prototype.Ba = function(n) {
        var Y = this.p * n.p + this.I * n.Q;
        this.I = this.p * n.I + this.I * n.q;
        this.p = Y;
        Y = this.Q * n.p + this.q * n.Q;
        this.q = this.Q * n.I + this.q * n.q;
        this.Q = Y;
        Y = this.g * n.p + this.f * n.Q + n.g;
        this.f = this.g * n.I + this.f * n.q + n.f;
        this.g = Y
    };
    Bb.prototype.S = function(n) {
        var Y = Math.cos(n);
        n = Math.sin(n);
        var c = this.p * Y - this.I * n;
        this.I = this.p * n + this.I * Y;
        this.p = c;
        c = this.Q * Y - this.q * n;
        this.q =
            this.Q * n + this.q * Y;
        this.Q = c;
        c = this.g * Y - this.f * n;
        this.f = this.g * n + this.f * Y;
        this.g = c
    };
    var Hb = {
            ag: function(n, c, e) {
                var l = this.ka,
                    z = l.createShader(l.VERTEX_SHADER);
                if (this.Vb()) return null;
                l.shaderSource(z, n);
                l.compileShader(z);
                if (this.Vb()) return null;
                if (!l.getShaderParameter(z, Rb)) {
                    ea("Could not compile vertex shader!");
                    ea(l.getShaderInfoLog(z));
                    return null
                }
                n = l.createShader(l.FRAGMENT_SHADER);
                if (this.Vb()) return null;
                l.shaderSource(n, c);
                l.compileShader(n);
                if (this.Vb()) return null;
                if (!l.getShaderParameter(n,
                        Rb)) {
                    ea("Could not compile fragment shader!");
                    ea(l.getShaderInfoLog(z));
                    return null
                }
                c = l.createProgram();
                if (this.Vb()) return null;
                l.attachShader(c, z);
                if (this.Vb()) return null;
                l.attachShader(c, n);
                if (this.Vb()) return null;
                n = ["aPos", "aColor", "aTexc1", "aColor1"];
                for (z = 0; z < e; z++) l.bindAttribLocation(c, z, n[z]);
                l.linkProgram(c);
                if (this.Vb()) return null;
                if (!l.getProgramParameter(c, l.LINK_STATUS)) {
                    ea("Could not link shader program!");
                    return null
                }
                if (this.Vb()) return null;
                l.useProgram(c);
                for (z = 0; 8 > z; z++) {
                    e = l.getUniformLocation(c,
                        "uImage" + z);
                    if (!e) break;
                    l.uniform1i(e, z)
                }
                l.useProgram(null);
                return c
            },
            r: function() {
                var n = this.ka;
                Rb = n.COMPILE_STATUS;
                Pa = n.TEXTURE_2D;
                Xd = n.TRIANGLE_STRIP;
                da = n.DYNAMIC_DRAW;
                e = n.ARRAY_BUFFER;
                k = n.BLEND;
                c = n.FLOAT;
                n.getError();
                n.viewportWidth = this.ea.width;
                n.viewportHeight = this.ea.height;
                this.Od = this.ag("attribute vec4 aPos;attribute vec4 aColor;uniform vec4 uXfm[2];varying vec2 vTexCoord;varying mediump vec4 vColor;void main(void) {vTexCoord = aPos.zw;gl_Position.x = dot( vec3 (aPos.xy, 1.0), uXfm[0].xyz );gl_Position.y = dot( vec3 (aPos.xy, 1.0), uXfm[1].xyz );gl_Position.z = 0.5;gl_Position.w = 1.0;vColor = aColor;}",
                    "precision mediump float;varying highp vec2 vTexCoord;varying mediump vec4 vColor;uniform sampler2D uImage0;void main(void) {gl_FragColor = texture2D (uImage0, vTexCoord)*vColor;}", 2);
                this.mf = n.getUniformLocation(this.Od, "uXfm");
                this.ye = this.ag("attribute vec4 aPos;attribute vec4 aColor;attribute vec3 aTexc1;attribute vec4 aColor1;varying vec2 vTexc0;varying vec2 vTexc1;varying mediump vec4 vTex0Color;varying mediump vec4 vTex1Color;varying mediump vec2 vDesaturate;uniform vec4 uXfm[2];void main(){gl_Position.x = dot( vec3 (aPos.xy, 1.0), uXfm[0].xyz );gl_Position.y = dot( vec3 (aPos.xy, 1.0), uXfm[1].xyz );gl_Position.z = 0.5;gl_Position.w = 1.0;vTexc0 = aPos.zw;vTexc1 = aTexc1.xy;vDesaturate.x = aTexc1.z * 0.33;vDesaturate.y = 1.0 - aTexc1.z;vTex0Color = aColor;vTex1Color = aColor1;}",
                    "precision mediump float;varying vec4 vTex0Color;varying vec4 vTex1Color;varying highp vec2 vTexc0;varying highp vec2 vTexc1;varying vec2 vDesaturate;uniform sampler2D uImage0;uniform sampler2D uImage1;void main(){vec4 tex0 = texture2D(uImage0, vTexc0);vec4 color;float grey = tex0.r + tex0.b + tex0.g;color.rgb = vec3(grey*vDesaturate.x) + tex0.rgb * vDesaturate.y;color.a = tex0.a;vec4 tex1 = texture2D(uImage1, vTexc1);gl_FragColor = color * vTex0Color + tex1 * vTex1Color;}", 4);
                this.gi = n.getUniformLocation(this.ye,
                    "uXfm");
                n.getUniformLocation(this.ye, "vTex0Color");
                n.getUniformLocation(this.ye, "vTex1Color");
                this.Vd = new ba.ArrayBuffer(98304);
                this.Jd = new ba.Float32Array(this.Vd, 0, 48);
                this.Dg = new ba.Float32Array(this.Vd, 0, 72);
                this.gf = [];
                this.Fa = new ba.Float32Array(this.Vd);
                this.Wg = new ba.Uint32Array(this.Vd);
                if (this.Vb()) return false;
                this.wi = n.createBuffer();
                return true
            },
            Xf: function() {
                return null !== this.ka && null !== this.Od && null !== this.mf && null != this.Fa || this.Rc
            },
            pi: function(n, c, e) {
                this.Oc = n;
                this.Dd = c;
                this.Ed = e;
                this.Xg()
            },
            A: function(n) {
                if (this.L) this.Va();
                this.Qa = n
            },
            ga: function(n) {
                if (0 > n) n = 0;
                this.Ia = this.Ja = this.Ka = 1;
                this.Ha = n
            },
            da: function(n, c, e, l) {
                this.Ka = n;
                this.Ja = c;
                this.Ia = e;
                this.Ha = l
            },
            D: function() {
                this.Ha = this.Ia = this.Ja = this.Ka = 1
            },
            C: function(n, c, l) {
                var p = c + n.e,
                    z = l + n.d,
                    T = this.Fa,
                    k = this.Ka,
                    Jb = this.Ja,
                    m = this.Ia,
                    F = this.Ha;
                T[0] = c;
                T[1] = l;
                T[2] = 0;
                T[3] = 0;
                T[4] = k;
                T[5] = Jb;
                T[6] = m;
                T[7] = F;
                T[8] = p;
                T[9] = l;
                T[10] = 1;
                T[11] = 0;
                T[12] = k;
                T[13] = Jb;
                T[14] = m;
                T[15] = F;
                T[16] = c;
                T[17] = z;
                T[18] = 0;
                T[19] = 1;
                T[20] = k;
                T[21] = Jb;
                T[22] = m;
                T[23] =
                    F;
                T[24] = p;
                T[25] = z;
                T[26] = 1;
                T[27] = 1;
                T[28] = k;
                T[29] = Jb;
                T[30] = m;
                T[31] = F;
                c = this.ka;
                c.bufferData(e, this.Jd, da);
                this.sc(0);
                this.yc();
                c.bindTexture(Pa, n.ob);
                c.drawArrays(Xd, 0, 4)
            },
            eb: function(n, c, l, p) {
                var z, T, k, m, w;
                m = n.ub;
                var F = n.Sb;
                T = c.oa - c.N;
                z = l + (c.wa - c.K);
                T = p + T;
                k = c.K * m;
                w = c.wa * m;
                m = c.N * F;
                c = c.oa * F;
                var F = this.Fa,
                    t = this.Ka,
                    D = this.Ja,
                    Qb = this.Ia,
                    C = this.Ha;
                F[0] = l;
                F[1] = p;
                F[2] = k;
                F[3] = m;
                F[4] = t;
                F[5] = D;
                F[6] = Qb;
                F[7] = C;
                F[8] = z;
                F[9] = p;
                F[10] = w;
                F[11] = m;
                F[12] = t;
                F[13] = D;
                F[14] = Qb;
                F[15] = C;
                F[16] = l;
                F[17] = T;
                F[18] = k;
                F[19] = c;
                F[20] =
                    t;
                F[21] = D;
                F[22] = Qb;
                F[23] = C;
                F[24] = z;
                F[25] = T;
                F[26] = w;
                F[27] = c;
                F[28] = t;
                F[29] = D;
                F[30] = Qb;
                F[31] = C;
                l = this.ka;
                l.bufferData(e, this.Jd, da);
                this.sc(0);
                this.yc();
                l.bindTexture(Pa, n.ob);
                l.drawArrays(Xd, 0, 4)
            },
            aa: function(n, c) {
                var l = c.f,
                    p = c.p * n.e + c.g,
                    z = c.I * n.e + c.f,
                    k = c.Q * n.d + c.g,
                    m = c.q * n.d + c.f,
                    Jb = c.p * n.e + c.Q * n.d + c.g,
                    w = c.I * n.e + c.q * n.d + c.f,
                    F = this.Fa,
                    t = this.Ka,
                    D = this.Ja,
                    Qb = this.Ia,
                    C = this.Ha;
                F[0] = c.g;
                F[1] = l;
                F[2] = 0;
                F[3] = 0;
                F[4] = t;
                F[5] = D;
                F[6] = Qb;
                F[7] = C;
                F[8] = p;
                F[9] = z;
                F[10] = 1;
                F[11] = 0;
                F[12] = t;
                F[13] = D;
                F[14] = Qb;
                F[15] = C;
                F[16] =
                    k;
                F[17] = m;
                F[18] = 0;
                F[19] = 1;
                F[20] = t;
                F[21] = D;
                F[22] = Qb;
                F[23] = C;
                F[24] = Jb;
                F[25] = w;
                F[26] = 1;
                F[27] = 1;
                F[28] = t;
                F[29] = D;
                F[30] = Qb;
                F[31] = C;
                l = this.ka;
                l.bufferData(e, this.Jd, da);
                this.sc(0);
                this.yc();
                l.bindTexture(Pa, n.ob);
                l.drawArrays(Xd, 0, 4)
            },
            fa: function(n, c, l) {
                if (!(0 >= l)) {
                    var p = c.f,
                        z = c.p * n.e + c.g,
                        k = c.I * n.e + c.f,
                        m = c.Q * n.d + c.g,
                        Jb = c.q * n.d + c.f,
                        w = c.p * n.e + c.Q * n.d + c.g,
                        F = c.I * n.e + c.q * n.d + c.f,
                        t = this.Fa;
                    t[0] = c.g;
                    t[1] = p;
                    t[2] = 0;
                    t[3] = 0;
                    t[4] = 1;
                    t[5] = 1;
                    t[6] = 1;
                    t[7] = l;
                    t[8] = z;
                    t[9] = k;
                    t[10] = 1;
                    t[11] = 0;
                    t[12] = 1;
                    t[13] = 1;
                    t[14] = 1;
                    t[15] = l;
                    t[16] =
                        m;
                    t[17] = Jb;
                    t[18] = 0;
                    t[19] = 1;
                    t[20] = 1;
                    t[21] = 1;
                    t[22] = 1;
                    t[23] = l;
                    t[24] = w;
                    t[25] = F;
                    t[26] = 1;
                    t[27] = 1;
                    t[28] = 1;
                    t[29] = 1;
                    t[30] = 1;
                    t[31] = l;
                    c = this.ka;
                    c.bufferData(e, this.Jd, da);
                    this.sc(0);
                    this.yc();
                    c.bindTexture(Pa, n.ob);
                    c.drawArrays(Xd, 0, 4)
                }
            },
            fd: function(n, c, l, p, z, k, m, t, w) {
                t = k + p * t;
                w = m + z * w;
                var F = c * n.ub;
                c = (c + p) * n.ub;
                p = l * n.Sb;
                l = (l + z) * n.Sb;
                z = this.Fa;
                var D = this.Ka,
                    C = this.Ja,
                    Qb = this.Ia,
                    B = this.Ha;
                z[0] = k;
                z[1] = m;
                z[2] = F;
                z[3] = p;
                z[4] = D;
                z[5] = C;
                z[6] = Qb;
                z[7] = B;
                z[8] = t;
                z[9] = m;
                z[10] = c;
                z[11] = p;
                z[12] = D;
                z[13] = C;
                z[14] = Qb;
                z[15] = B;
                z[16] =
                    k;
                z[17] = w;
                z[18] = F;
                z[19] = l;
                z[20] = D;
                z[21] = C;
                z[22] = Qb;
                z[23] = B;
                z[24] = t;
                z[25] = w;
                z[26] = c;
                z[27] = l;
                z[28] = D;
                z[29] = C;
                z[30] = Qb;
                z[31] = B;
                k = this.ka;
                k.bufferData(e, this.Jd, da);
                this.sc(0);
                this.yc();
                k.bindTexture(Pa, n.ob);
                k.drawArrays(Xd, 0, 4)
            },
            F: function() {},
            La: function(n, c, l, e, z, p) {
                if (24576 <= this.L + 48) this.Va();
                var k = this.Qa.ub,
                    m = this.Qa.Sb,
                    t = n * k,
                    F = c * m;
                n = (n + l) * k;
                c = (c + e) * m;
                l = z + l;
                e = p + e;
                var m = this.L,
                    k = this.Fa,
                    w = this.Ka,
                    D = this.Ja,
                    C = this.Ia,
                    B = this.Ha;
                k[m++] = z;
                k[m++] = p;
                k[m++] = t;
                k[m++] = F;
                k[m++] = w;
                k[m++] = D;
                k[m++] = C;
                k[m++] =
                    B;
                k[m++] = l;
                k[m++] = p;
                k[m++] = n;
                k[m++] = F;
                k[m++] = w;
                k[m++] = D;
                k[m++] = C;
                k[m++] = B;
                k[m++] = z;
                k[m++] = e;
                k[m++] = t;
                k[m++] = c;
                k[m++] = w;
                k[m++] = D;
                k[m++] = C;
                k[m++] = B;
                k[m++] = l;
                k[m++] = p;
                k[m++] = n;
                k[m++] = F;
                k[m++] = w;
                k[m++] = D;
                k[m++] = C;
                k[m++] = B;
                k[m++] = z;
                k[m++] = e;
                k[m++] = t;
                k[m++] = c;
                k[m++] = w;
                k[m++] = D;
                k[m++] = C;
                k[m++] = B;
                k[m++] = l;
                k[m++] = e;
                k[m++] = n;
                k[m++] = c;
                k[m++] = w;
                k[m++] = D;
                k[m++] = C;
                k[m++] = B;
                this.L = m
            },
            Mb: function(n, c, l, e) {
                if (24576 <= this.L + 48) this.Va();
                l = n + l;
                e = c + e;
                var z = this.L,
                    k = this.Fa,
                    p = this.Ka,
                    m = this.Ja,
                    t = this.Ia,
                    F = this.Ha;
                k[z++] =
                    n;
                k[z++] = c;
                k[z++] = 0;
                k[z++] = 0;
                k[z++] = p;
                k[z++] = m;
                k[z++] = t;
                k[z++] = F;
                k[z++] = l;
                k[z++] = c;
                k[z++] = 1;
                k[z++] = 0;
                k[z++] = p;
                k[z++] = m;
                k[z++] = t;
                k[z++] = F;
                k[z++] = n;
                k[z++] = e;
                k[z++] = 0;
                k[z++] = 1;
                k[z++] = p;
                k[z++] = m;
                k[z++] = t;
                k[z++] = F;
                k[z++] = l;
                k[z++] = c;
                k[z++] = 1;
                k[z++] = 0;
                k[z++] = p;
                k[z++] = m;
                k[z++] = t;
                k[z++] = F;
                k[z++] = n;
                k[z++] = e;
                k[z++] = 0;
                k[z++] = 1;
                k[z++] = p;
                k[z++] = m;
                k[z++] = t;
                k[z++] = F;
                k[z++] = l;
                k[z++] = e;
                k[z++] = 1;
                k[z++] = 1;
                k[z++] = p;
                k[z++] = m;
                k[z++] = t;
                k[z++] = F;
                this.L = z
            },
            gc: function(n, c, l, k, e, p, m, t) {
                if (24576 <= this.L + 48) this.Va();
                var w = this.Qa.ub,
                    F = this.Qa.Sb,
                    D = n * w,
                    C = c * F;
                n = (n + l) * w;
                c = (c + k) * F;
                l = e + l * m;
                k = p + k * t;
                t = this.L;
                m = this.Fa;
                var F = this.Ka,
                    w = this.Ja,
                    B = this.Ia,
                    M = this.Ha;
                m[t++] = e;
                m[t++] = p;
                m[t++] = D;
                m[t++] = C;
                m[t++] = F;
                m[t++] = w;
                m[t++] = B;
                m[t++] = M;
                m[t++] = l;
                m[t++] = p;
                m[t++] = n;
                m[t++] = C;
                m[t++] = F;
                m[t++] = w;
                m[t++] = B;
                m[t++] = M;
                m[t++] = e;
                m[t++] = k;
                m[t++] = D;
                m[t++] = c;
                m[t++] = F;
                m[t++] = w;
                m[t++] = B;
                m[t++] = M;
                m[t++] = l;
                m[t++] = p;
                m[t++] = n;
                m[t++] = C;
                m[t++] = F;
                m[t++] = w;
                m[t++] = B;
                m[t++] = M;
                m[t++] = e;
                m[t++] = k;
                m[t++] = D;
                m[t++] = c;
                m[t++] = F;
                m[t++] = w;
                m[t++] = B;
                m[t++] = M;
                m[t++] = l;
                m[t++] = k;
                m[t++] = n;
                m[t++] = c;
                m[t++] = F;
                m[t++] = w;
                m[t++] = B;
                m[t++] = M;
                this.L = t
            },
            V: function(n) {
                if (24576 <= this.L + 48) this.Va();
                var c = this.Qa.e,
                    l = this.Qa.d,
                    k = this.Ka,
                    e = this.Ja,
                    m = this.Ia,
                    p = this.Ha,
                    t = c * n.p,
                    c = c * n.I,
                    w = t + n.g,
                    F = c + n.f,
                    D = l * n.Q + n.g,
                    l = l * n.q + n.f,
                    C = this.L,
                    B = this.Fa;
                B[C++] = n.g;
                B[C++] = n.f;
                B[C++] = 0;
                B[C++] = 0;
                B[C++] = k;
                B[C++] = e;
                B[C++] = m;
                B[C++] = p;
                B[C++] = w;
                B[C++] = F;
                B[C++] = 1;
                B[C++] = 0;
                B[C++] = k;
                B[C++] = e;
                B[C++] = m;
                B[C++] = p;
                B[C++] = D;
                B[C++] = l;
                B[C++] = 0;
                B[C++] = 1;
                B[C++] = k;
                B[C++] = e;
                B[C++] = m;
                B[C++] = p;
                B[C++] = w;
                B[C++] = F;
                B[C++] = 1;
                B[C++] =
                    0;
                B[C++] = k;
                B[C++] = e;
                B[C++] = m;
                B[C++] = p;
                B[C++] = D;
                B[C++] = l;
                B[C++] = 0;
                B[C++] = 1;
                B[C++] = k;
                B[C++] = e;
                B[C++] = m;
                B[C++] = p;
                B[C++] = t + D;
                B[C++] = c + l;
                B[C++] = 1;
                B[C++] = 1;
                B[C++] = k;
                B[C++] = e;
                B[C++] = m;
                B[C++] = p;
                this.L = C
            },
            Qe: function(n, c, l, k, e) {
                if (24576 <= this.L + 48) this.Va();
                var m = n * this.Qa.ub,
                    p = c * this.Qa.Sb;
                n = (n + l) * this.Qa.ub;
                c = (c + k) * this.Qa.Sb;
                var t = l * e.p;
                l = l * e.I;
                var w = t + e.g,
                    F = l + e.f,
                    C = k * e.Q + e.g;
                k = k * e.q + e.f;
                var B = this.Ka,
                    D = this.Ja,
                    M = this.Ia,
                    P = this.Ha,
                    J = this.L,
                    K = this.Fa;
                K[J++] = e.g;
                K[J++] = e.f;
                K[J++] = m;
                K[J++] = p;
                K[J++] = B;
                K[J++] =
                    D;
                K[J++] = M;
                K[J++] = P;
                K[J++] = w;
                K[J++] = F;
                K[J++] = n;
                K[J++] = p;
                K[J++] = B;
                K[J++] = D;
                K[J++] = M;
                K[J++] = P;
                K[J++] = C;
                K[J++] = k;
                K[J++] = m;
                K[J++] = c;
                K[J++] = B;
                K[J++] = D;
                K[J++] = M;
                K[J++] = P;
                K[J++] = w;
                K[J++] = F;
                K[J++] = n;
                K[J++] = p;
                K[J++] = B;
                K[J++] = D;
                K[J++] = M;
                K[J++] = P;
                K[J++] = C;
                K[J++] = k;
                K[J++] = m;
                K[J++] = c;
                K[J++] = B;
                K[J++] = D;
                K[J++] = M;
                K[J++] = P;
                K[J++] = t + C;
                K[J++] = l + k;
                K[J++] = n;
                K[J++] = c;
                K[J++] = B;
                K[J++] = D;
                K[J++] = M;
                K[J++] = P;
                this.L = J
            },
            yb: function(n, c) {
                if (24576 <= this.L + 48) this.Va();
                var l = n + this.Qa.e,
                    e = c + this.Qa.d,
                    k = this.Ka,
                    m = this.Ja,
                    p = this.Ia,
                    t = this.Ha,
                    w = this.L,
                    F = this.Fa;
                F[w++] = n;
                F[w++] = c;
                F[w++] = 0;
                F[w++] = 0;
                F[w++] = k;
                F[w++] = m;
                F[w++] = p;
                F[w++] = t;
                F[w++] = l;
                F[w++] = c;
                F[w++] = 1;
                F[w++] = 0;
                F[w++] = k;
                F[w++] = m;
                F[w++] = p;
                F[w++] = t;
                F[w++] = n;
                F[w++] = e;
                F[w++] = 0;
                F[w++] = 1;
                F[w++] = k;
                F[w++] = m;
                F[w++] = p;
                F[w++] = t;
                F[w++] = l;
                F[w++] = c;
                F[w++] = 1;
                F[w++] = 0;
                F[w++] = k;
                F[w++] = m;
                F[w++] = p;
                F[w++] = t;
                F[w++] = n;
                F[w++] = e;
                F[w++] = 0;
                F[w++] = 1;
                F[w++] = k;
                F[w++] = m;
                F[w++] = p;
                F[w++] = t;
                F[w++] = l;
                F[w++] = e;
                F[w++] = 1;
                F[w++] = 1;
                F[w++] = k;
                F[w++] = m;
                F[w++] = p;
                F[w++] = t;
                this.L = w
            },
            Ih: function(n, c, l, k, e) {
                var m = 3 *
                    (n.Dc - 2);
                if (2048 < m) m = 2048;
                if (24576 <= this.L + 8 * m) this.Va();
                for (var p = this.Qa.ub, t = this.Qa.Sb, w = this.Ka, F = this.Ja, C = this.Ia, B = this.Ha, m = n.xb, D = 0; D < n.Dc; D++) {
                    var J = m[D];
                    J[2] = J[0] * p + k;
                    J[3] = J[1] * t + e;
                    J[4] = w;
                    J[5] = F;
                    J[6] = C;
                    J[7] = B
                }
                k = this.Fa;
                e = this.L;
                for (D = 0; D < n.Dc - 2; D++) {
                    k.set(m[D], e);
                    k[e++] += c;
                    k[e] += l;
                    e += 7;
                    k.set(m[D + 1], e);
                    k[e++] += c;
                    k[e] += l;
                    e += 7;
                    k.set(m[D + 2], e);
                    k[e++] += c;
                    k[e] += l;
                    e += 7
                }
                this.L = e
            },
            H: function() {
                if (this.L) this.Va();
                this.Qa = null
            },
            Sj: function() {
                this.ce = 0;
                this.ae = 4294967295
            },
            rl: function(n) {
                var c = this.ka;
                c.activeTexture(c.TEXTURE1);
                c.bindTexture(Pa, n.ob);
                c.activeTexture(c.TEXTURE0)
            },
            ol: function(n) {
                this.ce = n
            },
            nl: function(n) {
                this.ae = n
            },
            ik: function(n, c, k) {
                var l = c.f,
                    m = c.p * n.e + c.g,
                    p = c.I * n.e + c.f,
                    t = c.Q * n.d + c.g,
                    w = c.q * n.d + c.f,
                    C = c.p * n.e + c.Q * n.d + c.g,
                    F = c.I * n.e + c.q * n.d + c.f,
                    B = k.g,
                    D = k.f,
                    J = k.p + k.g,
                    K = k.I + k.f,
                    M = k.Q + k.g,
                    P = k.q + k.f,
                    ba = k.p + k.Q + k.g;
                k = k.I + k.q + k.f;
                var aa = this.Ka,
                    ea = this.Ja,
                    ka = this.Ia,
                    ia = this.Ha,
                    ja = this.ce,
                    oa = this.ae,
                    na = this.Fa,
                    qa = this.Wg;
                na[0] = c.g;
                na[1] = l;
                na[2] = 0;
                na[3] = 0;
                na[4] = aa;
                na[5] = ea;
                na[6] = ka;
                na[7] =
                    ia;
                na[8] = B;
                na[9] = D;
                na[10] = ja;
                qa[11] = oa;
                na[12] = m;
                na[13] = p;
                na[14] = 1;
                na[15] = 0;
                na[16] = aa;
                na[17] = ea;
                na[18] = ka;
                na[19] = ia;
                na[20] = J;
                na[21] = K;
                na[22] = ja;
                qa[23] = oa;
                na[24] = t;
                na[25] = w;
                na[26] = 0;
                na[27] = 1;
                na[28] = aa;
                na[29] = ea;
                na[30] = ka;
                na[31] = ia;
                na[32] = M;
                na[33] = P;
                na[34] = ja;
                qa[35] = oa;
                na[36] = C;
                na[37] = F;
                na[38] = 1;
                na[39] = 1;
                na[40] = aa;
                na[41] = ea;
                na[42] = ka;
                na[43] = ia;
                na[44] = ba;
                na[45] = k;
                na[46] = ja;
                qa[47] = oa;
                c = this.ka;
                c.bufferData(e, this.Dg, da);
                this.sc(1);
                this.yc();
                c.bindTexture(Pa, n.ob);
                c.drawArrays(Xd, 0, 4)
            },
            Xj: function(c, k,
                l, m) {
                if (24576 <= this.L + 48) this.Va();
                var p = k + c.e,
                    t = l + c.d,
                    w = m.g,
                    C = m.f,
                    B = m.p + m.g,
                    F = m.I + m.f,
                    D = m.Q + m.g,
                    J = m.q + m.f,
                    K = m.p + m.Q + m.g;
                m = m.I + m.q + m.f;
                var M = this.Ka,
                    P = this.Ja,
                    aa = this.Ia,
                    ba = this.Ha,
                    ea = this.ce,
                    ia = this.ae,
                    ka = this.Fa,
                    ja = this.Wg;
                ka[0] = k;
                ka[1] = l;
                ka[2] = 0;
                ka[3] = 0;
                ka[4] = M;
                ka[5] = P;
                ka[6] = aa;
                ka[7] = ba;
                ka[8] = w;
                ka[9] = C;
                ka[10] = ea;
                ja[11] = ia;
                ka[12] = p;
                ka[13] = l;
                ka[14] = 1;
                ka[15] = 0;
                ka[16] = M;
                ka[17] = P;
                ka[18] = aa;
                ka[19] = ba;
                ka[20] = B;
                ka[21] = F;
                ka[22] = ea;
                ja[23] = ia;
                ka[24] = k;
                ka[25] = t;
                ka[26] = 0;
                ka[27] = 1;
                ka[28] = M;
                ka[29] = P;
                ka[30] = aa;
                ka[31] = ba;
                ka[32] = D;
                ka[33] = J;
                ka[34] = ea;
                ja[35] = ia;
                ka[36] = p;
                ka[37] = t;
                ka[38] = 1;
                ka[39] = 1;
                ka[40] = M;
                ka[41] = P;
                ka[42] = aa;
                ka[43] = ba;
                ka[44] = K;
                ka[45] = m;
                ka[46] = ea;
                ja[47] = ia;
                k = this.ka;
                k.bufferData(e, this.Dg, da);
                this.sc(1);
                this.yc();
                k.bindTexture(Pa, c.ob);
                k.drawArrays(Xd, 0, 4)
            },
            mk: function() {},
            $a: function() {
                if (this.L) this.Va();
                this.Md = 0
            },
            Ac: function() {
                if (this.L) this.Va();
                this.Md = 1
            },
            Db: function() {
                if (this.L) this.Va();
                this.Ld = 1
            },
            Ik: function() {
                return this.Ld
            },
            Cb: function() {
                if (this.L) this.Va();
                this.Ld = 0
            },
            Fh: function(c) {
                var k = {};
                this.Bb[this.Bb.length] = k;
                k.xb = [];
                k.xb.length = c.length;
                k.Wd = this.Bb.length - 1;
                k.Dc = c.length;
                for (var e = 0, l = k.Dc; e < l; e++) {
                    var m = k.xb[e] = [];
                    m[4] = 1;
                    m[5] = 1;
                    m[6] = 1;
                    m[7] = 1
                }
                m = k.xb[0];
                m[0] = c[0].b;
                m[1] = c[0].c;
                m[2] = c[0].b;
                m[3] = c[0].c;
                m = k.xb[1];
                m[0] = c[1].b;
                m[1] = c[1].c;
                m[2] = c[1].b;
                m[3] = c[1].c;
                m = k.xb[2];
                m[0] = c[c.length - 1].b;
                m[1] = c[c.length - 1].c;
                m[2] = m[0];
                m[3] = m[1];
                l = 3;
                for (e = 0; !(e + 2 > c.length - 2 - e);) {
                    m = k.xb[l++];
                    m[0] = c[e + 2].b;
                    m[1] = c[e + 2].c;
                    m[2] = m[0];
                    m[3] = m[1];
                    if (e + 2 >= c.length - 2 - e) break;
                    m = k.xb[l++];
                    m[0] = c[c.length -
                        2 - e].b;
                    m[1] = c[c.length - 2 - e].c;
                    m[2] = m[0];
                    m[3] = m[1];
                    e++
                }
                return k
            },
            Hh: function(c) {
                c.xb = null;
                for (var k = 0; k < this.Bb.length; k++)
                    if (this.Bb[k] == c) {
                        for (c = k; c < this.Bb.length - 1; c++) this.Bb[c] = this.Bb[c + 1];
                        this.Bb.length--;
                        break
                    }
            },
            rk: function() {
                return this.Bb.length
            },
            $f: function(c) {
                var k = [],
                    m = {
                        xb: k,
                        Dc: c.length / 4
                    },
                    e = 1E33,
                    l = -e,
                    p = e,
                    t = -e,
                    w;
                for (w = 0; w < c.length;) {
                    var C = c[w++],
                        F = c[w++];
                    if (C < e) e = C;
                    if (C > l) l = C;
                    if (F < p) p = F;
                    if (F > t) t = F;
                    k.push(C);
                    k.push(F);
                    k.push(c[w++]);
                    k.push(c[w++])
                }
                m.Bf = e;
                m.Af = l;
                m.Df = p;
                m.Cf = t;
                m.Tj = .5 * (e +
                    l);
                m.Uj = .5 * (p + t);
                m.e = l - e;
                m.d = t - p;
                return m
            },
            jk: function(c, k) {
                var m = c.Dc;
                if (24576 <= this.L + 8 * m) this.Va();
                var e = this.L,
                    l = this.Fa,
                    p = this.Ka,
                    t = this.Ja,
                    w = this.Ia,
                    C = this.Ha,
                    F, B, D, J, K = c.xb;
                for (B = F = 0; F < m; F++) {
                    D = K[B++];
                    J = K[B++];
                    l[e++] = D * k.p + J * k.Q + k.g;
                    l[e++] = D * k.I + J * k.q + k.f;
                    l[e++] = K[B++];
                    l[e++] = K[B++];
                    l[e++] = p;
                    l[e++] = t;
                    l[e++] = w;
                    l[e++] = C
                }
                this.L = e
            },
            kk: function(c, k, e, m, l) {
                var p = c.Dc;
                if (24576 <= this.L + 8 * p) this.Va();
                var t = this.L,
                    w = this.Fa,
                    C = this.Ka,
                    B = this.Ja,
                    D = this.Ia,
                    J = this.Ha,
                    K, M = c.xb;
                for (K = c = 0; c < p; c++) {
                    w[t++] = M[K++] *
                        m + k;
                    w[t++] = M[K++] * l + e;
                    w[t++] = M[K++];
                    w[t++] = M[K++];
                    w[t++] = C;
                    w[t++] = B;
                    w[t++] = D;
                    w[t++] = J
                }
                this.L = t
            },
            Yj: function(c, k, e) {
                var m = c.Dc;
                if (24576 <= this.L + 8 * m) this.Va();
                var l = this.L,
                    p = this.Fa,
                    t = this.Ka,
                    w = this.Ja,
                    C = this.Ia,
                    B = this.Ha,
                    D, J = c.xb;
                for (D = c = 0; c < m; c++) {
                    p[l++] = J[D++] + k;
                    p[l++] = J[D++] + e;
                    p[l++] = J[D++];
                    p[l++] = J[D++];
                    p[l++] = t;
                    p[l++] = w;
                    p[l++] = C;
                    p[l++] = B
                }
                this.L = l
            },
            Lg: function() {
                var n = this.ka;
                n.vertexAttribPointer(0, 4, c, false, 32, 0);
                n.vertexAttribPointer(1, 4, c, false, 32, 16);
                n.disableVertexAttribArray(2);
                n.disableVertexAttribArray(3)
            },
            bc: function(c) {
                var e = this.ka;
                e.viewport(c.K, c.N, c.wa - c.K, c.oa - c.N);
                e.useProgram(this.Od);
                c = this.fc;
                this.ue.set([c.p, c.Q, c.g, 0, c.I, c.q, c.f, 0]);
                e.uniform4fv(this.mf, this.ue);
                this.D();
                e.enableVertexAttribArray(0);
                e.enableVertexAttribArray(1);
                e.bindBuffer(e.ARRAY_BUFFER, this.wi);
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
                this.Lg();
                e.activeTexture(e.TEXTURE0);
                e.enable(k);
                e.disable(e.DITHER);
                e.disable(e.SCISSOR_TEST);
                e.disable(e.DEPTH_TEST);
                e.disable(e.CULL_FACE);
                e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
                e.clearColor(0, .33, 0, 1);
                e.clear(e.COLOR_BUFFER_BIT);
                this.Ze = 0;
                this.af = 1;
                this.Ld = 0;
                this.Md = 1;
                this.zg = this.Re = 0
            },
            Ua: function() {
                var c = this.ka;
                c.bindTexture(Pa, null);
                c.disableVertexAttribArray(0);
                c.disableVertexAttribArray(1);
                c.disableVertexAttribArray(2);
                c.disableVertexAttribArray(3);
                c.useProgram(null)
            },
            sc: function(e) {
                if (e != this.Re) {
                    this.Re = e;
                    var k = this.ka;
                    if (1 == e) {
                        k.enableVertexAttribArray(2);
                        k.enableVertexAttribArray(3);
                        k.vertexAttribPointer(0, 4, c, false, 48, 0);
                        k.vertexAttribPointer(1, 4, c, false, 48, 16);
                        k.vertexAttribPointer(2, 3, c, false, 48, 32);
                        k.vertexAttribPointer(3, 4, k.UNSIGNED_BYTE, true, 48, 44);
                        k.useProgram(this.ye);
                        if (!this.zg) {
                            e = this.fc;
                            this.ue.set([e.p, e.Q, e.g, 0, e.I, e.q, e.f, 0]);
                            k.uniform4fv(this.gi, this.ue);
                            this.zg = 1
                        }
                    } else {
                        k.useProgram(this.Od);
                        this.Lg()
                    }
                }
            },
            Va: function() {
                if (!!this.Qa) {
                    this.sc(0);
                    this.yc();
                    var c = Math.ceil(4 * this.L / 256);
                    if (!this.gf[c]) this.gf[c] = new ba.Float32Array(this.Vd, 0, 256 * c / 4);
                    var k = this.ka;
                    k.bufferData(e, this.gf[c], da);
                    k.bindTexture(Pa, this.Qa.ob);
                    k.drawArrays(k.TRIANGLES,
                        0, this.L / 8);
                    this.L = 0
                }
            },
            yc: function() {
                var c = this.ka;
                if (this.Md != this.af)
                    if (this.af = this.Md) c.enable(k);
                    else c.disable(k);
                if (this.Ld != this.Ze) {
                    this.Ze = this.Ld;
                    var e, m;
                    if (this.Ze) m = e = c.ONE;
                    else {
                        e = c.SRC_ALPHA;
                        m = c.ONE_MINUS_SRC_ALPHA
                    }
                    c.blendFunc(e, m)
                }
            },
            Zg: function(c) {
                if (!!c.Xa) {
                    var e = this.ka,
                        k = e.createTexture();
                    e.bindTexture(Pa, k);
                    e.texImage2D(Pa, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, c.J);
                    e.texParameteri(Pa, e.TEXTURE_MAG_FILTER, e.LINEAR);
                    e.texParameteri(Pa, e.TEXTURE_MIN_FILTER, e.LINEAR);
                    if ("undefined" != typeof c.Ag &&
                        c.Ag) {
                        e.texParameteri(Pa, e.TEXTURE_WRAP_S, e.REPEAT);
                        e.texParameteri(Pa, e.TEXTURE_WRAP_T, e.REPEAT)
                    } else {
                        e.texParameteri(Pa, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
                        e.texParameteri(Pa, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
                    }
                    e.bindTexture(Pa, null);
                    c.ob = k
                }
            },
            ji: function(c) {
                var e = this.ka;
                e.bindTexture(Pa, c.ob);
                e.texParameteri(Pa, e.TEXTURE_WRAP_S, e.REPEAT);
                e.texParameteri(Pa, e.TEXTURE_WRAP_T, e.REPEAT);
                e.bindTexture(Pa, null);
                c.Ag = true
            },
            Vb: function() {
                var c = this.ka.isContextLost(),
                    e = this.ka.getError();
                if (c || e == this.ka.CONTEXT_LOST_WEBGL) {
                    if (!this.Rc) ea("Marking WebGL context as lost!");
                    this.Rc = true
                }
                return this.Rc || e != this.ka.NO_ERROR
            },
            Gh: function(c) {
                if (c.ob) {
                    this.ka.deleteTexture(c.ob);
                    c.ob = 0
                }
            },
            mf: null,
            xk: null,
            dl: null,
            Od: null,
            fl: null,
            Fa: null,
            ea: null,
            ka: null,
            L: 0,
            Bb: [],
            Jl: new Bb,
            fk: null,
            dk: 0,
            ek: 0,
            ck: 0,
            bk: 0,
            cl: Vd(4),
            ue: Vd(8),
            Xk: 1,
            Re: 0,
            Md: 0,
            Pl: [],
            ce: 0,
            ae: 4294967295,
            Rc: false
        },
        Ma = {
            alpha: false,
            depth: false,
            antialias: false,
            stencil: false,
            failIfMajorPerformanceCaveat: true
        };
    (function() {
        if (qa) ba.document.body.removeChild(qa);
        qa = ba.document.createElement("canvas");
        var c = {};
        ml(c);
        c.ea = qa;
        c.yf();
        qa.style.cssText = "position:absolute;touch-action: none;touch-action-delay: none;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;outline: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);";
        ba.document.body.appendChild(qa)
    })();
    var Ma = qa.getContext("webgl", Ma) || qa.getContext("experimental-webgl", Ma),
        Ea;
    if (null == Ma) {
        ea("Complete failure to create GL context");
        ba.alert("We are sorry, you need a WebGL compatible browser to play this game (try latest Google Chrome, Firefox, Microsoft Edge etc.")
    } else {
        ea("Using WebGL canvas.");
        Hb.ea = qa;
        Hb.ka = Ma;
        qa.addEventListener("webglcontextlost", function(c) {
            c.preventDefault();
            Hb.Rc = true
        }, false);
        qa.addEventListener("webglcontextrestored", Fn, false);
        Hb.r();
        if (!Hb.Xf()) ba.alert("We are sorry, WebGL initialization failed. Please try updating your browser to latest version.");
        else {
            Ea = Hb;
            Ea.Hd = true
        }
    }
    ml(Ea);
    var C = {
            Pa: null,
            sa: "none",
            Tc: "none",
            hd: "wav"
        },
        Ma = false,
        K = new ba.Audio,
        bb = false,
        Ej = false,
        M = false;
    try {
        bb = K.canPlayType("audio/wav") || K.canPlayType("audio/wave")
    } catch (B) {}
    try {
        Ej = K.canPlayType('audio/mpeg; codecs="mp3"')
    } catch (J) {}
    try {
        M =
            K.canPlayType('audio/ogg; codecs="vorbis"')
    } catch (m) {}
    if (bb) {
        ea("Detected WAV format support");
        Ma = true
    }
    if (Ej) {
        ea("Detected MP3 format support");
        Ma = true
    }
    if (M) {
        ea("Detected OGG format support");
        Ma = true
    } else ea("No Audio format support!");
    if (Ma) {
        if ("undefined" != typeof ba.AudioContext) {
            ea("Using AudioContext for sound.");
            C.Pa = new ba.AudioContext;
            C.sa = "wa"
        } else if ("undefined" != typeof ba.webkitAudioContext) {
            ea("Using webkitAudioContext for sound.");
            C.Pa = new ba.webkitAudioContext;
            C.sa = "wa"
        } else if ((vf ||
                Zb) && Ib) {
            if (vf) ea("Avoiding HTML5 sound: anroid.");
            else if (Zb) ea("Avoiding HTML5 sound: WinPhone.");
            else ea("Avoiding HTML5 sound: browser too old.");
            C.sa = "none"
        } else {
            ea("Using HTML5 Audio for sound.");
            C.sa = "html5"
        }
        if ("none" != C.sa) {
            if ("wa" == C.sa && mg) {
                ea("Using AudioContext for Music ( no streaming! )");
                C.Tc = "wa"
            } else {
                ea("Using HTML5 Audio for Music");
                C.Tc = "html5"
            }
            if (vf && bb) C.hd = "wav";
            else if (M) C.hd = "ogg";
            else if (Ej) C.hd = "mp3";
            else C.hd = "wav";
            ea("Using '" + C.hd + "' format for sound.")
        }
    } else ea("Not using sound because none of the available audio formats are supported.");
    var Bc = {},
        Ca = 0,
        rg = 0,
        Aj = 0,
        Zb = ba.document.createElement("canvas");
    Zb.width = 16;
    Zb.height = 16;
    Ma = Zb.getContext("2d");
    Ma.fillStyle = "rgba(255,0,0,255)";
    Ma.fillRect(0, 0, Zb.width, Zb.height);
    var ol = new ba.Image;
    ol.src = Zb.toDataURL("image/png");
    var oa = [],
        ih = {},
        va = 0,
        qg = 0,
        P = [],
        Cj = {},
        sg = {
            Jk: false,
            Lk: false,
            tl: false,
            Pj: 0,
            Qj: 0,
            Fk: null,
            Ek: null,
            Dk: null,
            Bk: null,
            Ck: null,
            Gk: 0,
            Th: false,
            Uh: false,
            uk: false,
            vl: false,
            Rj: null,
            Hk: null,
            Vj: {},
            $j: 0,
            ak: 0,
            Pk: 0,
            Qk: 0,
            Tk: function() {},
            Sk: function() {},
            gl: function() {},
            Nl: function() {},
            Ol: function() {},
            ri: function() {},
            Qh: function() {},
            xl: function() {
                return false
            },
            gk: function() {},
            wk: function() {
                if (this.Cg) this.Cg();
                this.Th = false
            },
            Ak: 0,
            ml: 0,
            Vk: 0,
            Uk: function() {
                try {
                    var c = new ba.XMLHttpRequest;
                    c.onreadystatechange = function() {
                        if (4 == c.readyState)
                            if (200 == c.status) try {
                                sg.Wk = ba.JSON.parse(c.responseText);
                                ea("Looks like we may have some ads!")
                            } catch (e) {
                                sg.yg = 1;
                                ea("Exception while parsing response JSON: " + e)
                            } else {
                                sg.yg = 1;
                                ea("Failed to get local ad config")
                            }
                    };
                    c.open("GET", "config-html.json?seed=" + Math.round(1E9 *
                        Math.random()), true);
                    c.overrideMimeType("application/json");
                    c.send()
                } catch (e) {
                    sg.yg = 1;
                    ea("Exception while loading local config: " + e)
                }
            },
            Kl: function() {}
        };
    l("poki.png");
    l("white.png");
    l("loading-bar-outer.png");
    l("loading-bar-inner.png");
    l("game-bk.png", 1);
    l("sun-temple.png");
    l("title.png");
    l("brick-tiles.png", 1);
    l("concrete-block.png", 1);
    l("concrete-block-long.png");
    l("concrete-block-long-wider.png");
    l("concrete-block-oblique.png");
    l("crate.png", 1);
    l("crate-debri-0x0.png");
    l("crate-debri-0x11.png");
    l("crate-debri-0x89.png");
    l("crate-debri-12x44.png");
    l("crate-debri-79x0.png");
    l("crate-debri-89x75.png");
    l("mattress.png", 1);
    l("nails.png", 1);
    l("nails-short.png");
    l("steel-beam.png");
    l("platform.png", 1);
    l("robot.png");
    l("robot-lamp.png");
    l("switch-on.png");
    l("switch-off.png");
    l("door.png", 1);
    l("door-mount.png", 1);
    l("vertical-tile-wall.png", 1);
    l("v-hand-0.png");
    l("v-hand-1.png");
    l("v-hand-2.png");
    l("v-hand-3.png");
    l("v-hand-4.png");
    l("photo-flare.png");
    l("floor.png", 1);
    l("fire.png", 1);
    l("ball-face-like-a-boss.png");
    l("ball-face-full.png");
    l("ball-color.png");
    l("ball-color-burned.png");
    l("ball-stone-color.png");
    l("ball-aura.png");
    l("ball-fire-ring-0.png");
    l("ball-fire-ring-1.png");
    l("ball-fire-ring-2.png");
    l("ball-fire-ring-3.png");
    l("ball-fire-ring-4.png");
    l("ball-fire-ring-5.png");
    l("ball-fire-ring-6.png");
    l("fire-part.png");
    l("ball-pops.png");
    l("ball-shade.png");
    l("ball-glow-ring.png");
    l("ball-piece-1-26.png");
    l("ball-piece-2-1.png");
    l("ball-piece-2-48.png");
    l("ball-piece-20-48.png");
    l("ball-piece-26-2.png");
    l("ball-piece-27-17.png");
    l("ball-piece-29-29.png");
    l("ball-piece-34-19.png");
    l("ball-piece-4-28.png");
    l("smoke.png");
    l("teardrop.png");
    l("teardrop-glow.png");
    l("ball-fly-trace-0.png");
    l("ball-fly-trace-1.png");
    l("ball-fly-trace-2.png");
    l("basket-back.png", 1);
    l("basket-case-over.png");
    l("basket-net.png", 1);
    l("basket-nose.png", 1);
    l("basket-eyes-all.png", 1);
    l("basket-mouth-all.png", 1);
    l("dialog-bk-big.png");
    l("text-you-win.png");
    l("you-win-happy-faces-and-stars.png");
    l("you-lose-poor-ball.png");
    l("text-you-lose.png");
    l("button-long.png", 1);
    l("check-circle.png");
    l("check.png");
    l("button-options.png");
    l("button-reshoot.png");
    l("button-continue.png");
    l("button-restart.png");
    l("button-more-games.png");
    l("settings-button.png", 1);
    l("white-box.png");
    l("white-square-black-edges.png");
    l("spec-fx.png");
    l("trampoline.png", 1);
    l("waters-0.png", 1);
    l("waters-1.png", 1);
    l("waters-2.png", 1);
    l("waters-3.png", 1);
    l("waters-4.png", 1);
    l("waters-5.png", 1);
    l("waters-6.png", 1);
    l("waters-7.png", 1);
    l("bubble.png");
    l("lightning.png");
    l("lightner.png");
    l("barrel.png", 1);
    l("barrel-damaged-0.png");
    l("barrel-damaged-1.png");
    l("explosion.png");
    l("spring-0.png");
    l("spring-1.png");
    l("spring-2.png");
    l("star-particle.png");
    l("glowing-ring.png");
    l("star-glows.png", 1);
    l("bonus-gravity.png");
    l("bonus-stones.png");
    l("bonus-pump.png");
    l("pause-bk.png");
    l("button-music-on.png");
    l("button-music-off.png");
    l("button-sound-on.png");
    l("button-sound-off.png");
    l("button-quit.png");
    l("power-ball.png");
    l("mysterious-basket.png");
    l("star-win.png");
    l("star-big-particle.png");
    l("level-arrow-right.png");
    l("level-arrow-left.png");
    l("level-star.png");
    l("level-stars.png");
    l("lock.png");
    l("level-button.png");
    l("friendly-basket.png");
    l("confident-ball.png");
    l("ball-presents.png");
    l("basket-presents.png");
    l("text-game-complete.png");
    l("button-to-main-menu.png");
    l("level-select-background.png");
    l("ball-basket-for-cover.png");
    l("button-walkthrough.png");
    l("text-credits.png");
    l("button-back.png");
    l("button-info.png");
    l("clocks.png", 1);
    l("direction-arrow-top.png");
    l("direction-arrow-middle.png");
    l("direction-arrow-bottom.png");
    l("direction-arrow-empty-top.png");
    l("direction-arrow-empty-middle.png");
    l("direction-arrow-empty-bottom.png");
    l("button-hourglass.png", 1);
    l("dotted-circle.png");
    l("tutorial-hand-right.png");
    l("tutorial-hand-up.png");
    l("tutorial-hand-left.png");
    l("tutorial-hand-point.png");
    l("tutorial-hand-holds.png");
    l("hand.png");
    l("game-touch-helper.png");
    l("thumb.png");
    l("speech-bubble.png");
    l("speech-bubble-high.png");
    l("speech-bubble-higher.png");
    l("iphone-6.png");
    l("text-developed-by.png");
    l("joystick.png");
    l("jump-arrow.png");
    l("finger-spot.png");
    l("keyboard-buttons.png");
    l("keyboard-space-big.png");
    l("keyboard-key.png");
    l("keyboard-arrow.png");
    l("avoid-nails.png");
    l("green-dash.png");
    l("green-dash-hollow.png");
    l("jump-energy-bar.png");
    l("jump-energy-bar-aura.png");
    l("jump-energy-ball-face.png");
    l("jump-energy-fire.png");
    aa("achievement-full.mpc");
    aa("menu-change.mpc");
    aa("menu-change-rev.mpc");
    aa("time-is-up.mpc");
    aa("incoming-sign.mpc");
    aa("button-over.mpc");
    aa("button-click.mpc");
    aa("splash.mpc");
    aa("pop.mpc");
    aa("star-collected.mpc");
    aa("star-hits.mpc");
    aa("star-inserted.mpc");
    aa("net.mpc");
    aa("net-subtle.mpc");
    aa("extinguishing.mpc");
    aa("slow-down.mpc");
    aa("rage-mode.mpc");
    aa("bell.mpc");
    aa("swoosh.mpc");
    aa("swoosh-water.mpc");
    aa("ding.mpc");
    aa("you-lose.mpc");
    aa("you-win.mpc");
    aa("rechazado.mpc");
    aa("robo-talk.mpc");
    aa("barrel-explodes.mpc");
    aa("pumped-jump.mpc");
    aa("level-start.mpc");
    aa("shootout-start.mpc");
    aa("bounce-0.mpc");
    aa("bounce-1.mpc");
    aa("bounce-metal-0.mpc");
    aa("bounce-mat.mpc");
    aa("crate-0.mpc");
    aa("crate-1.mpc");
    aa("bounce-stoned-0.mpc");
    aa("trampo-0.mpc");
    aa("basket-contact-0.mpc");
    aa("basket-contact-1.mpc");
    aa("basket-contact-2.mpc");
    aa("electric-charge-0.mpc");
    aa("electric-charge-1.mpc");
    aa("spring-0.mpc");
    aa("barrel-bang-0.mpc");
    aa("barrel-bang-1.mpc");
    aa("ball-burning.mpc");
    aa("ball-hmmm.mpc");
    aa("hit-crowd-photo-taking.mpc");
    aa("crowd-uplifted.mpc");
    aa("crowd-downlifted.mpc");
    aa("crowd-downlifted-milder-0.mpc");
    aa("crowd-downlifted-milder-1.mpc");
    aa("stoned.mpc");
    aa("bonus-pump.mpc");
    aa("bonus-gravity.mpc");
    aa("door-closes.mpc");
    aa("door-opens.mpc");
    aa("switch-click.mpc");
    aa("ball-shocked-0.mpc");
    aa("ball-shocked-1.mpc");
    aa("wall-hit-0.mpc");
    aa("wall-hit-1.mpc");
    aa("wall-hit-2.mpc");
    Bj("music0.mpc", 85.57);
    Bj("music1.mpc", 88.857);
    Bj("ambience.mpc", 22.196);
    l("font-level-selection-big.png");
    l("font-level-selection.png");
    l("font-time.png", 1);
    l("font-seconds-left.png");
    l("font-stat-numbers.png");
    l("text-game-paused-tr.png", 0, 0, [4]);
    l("text-game-paused-es.png",
        0, 0, [2]);
    l("text-game-paused-pt.png", 0, 0, [7]);
    l("text-game-paused-fr.png", 0, 0, [5]);
    l("text-game-paused-pl.png", 0, 0, [8]);
    l("text-game-paused-ru.png", 0, 0, [1]);
    l("text-game-paused.png");
    l("text-select-level-fr.png", 0, 0, [5]);
    l("text-select-level-pl.png", 0, 0, [8]);
    l("text-select-level-ru.png", 0, 0, [1]);
    l("text-select-level-es.png", 0, 0, [2]);
    l("text-select-level-pt.png", 0, 0, [7]);
    l("text-select-level-tr.png", 0, 0, [4]);
    l("text-select-level.png", 0, 0, [0, 3, 6, 7]);
    l("text-options-tr.png");
    l("text-options-es.png");
    l("text-options-pt.png");
    l("text-options-ru.png");
    l("text-options.png");
    l("font-button-big-ru.png", 0, 1, [1]);
    l("font-button-big.png", 0, 1, [0, 2, 3, 4, 5, 6, 7, 8]);
    l("font-button-small-ru.png", 0, 1, [1]);
    l("font-button-small.png", 0, 1, [0, 2, 3, 4, 5, 6, 7, 8]);
    l("font-level-ru.png", 0, 0, [1]);
    l("font-level-tr.png", 0, 0, [4]);
    l("font-level-fr.png", 0, 0, [5]);
    l("font-level.png", 0, 0, [0, 2, 3, 6, 7, 8]);
    l("font-hint-ru.png", 0, 0, [1]);
    l("font-hint.png", 0, 0, [0, 2, 3, 4, 5, 6, 7, 8]);
    l("font-fancy-ru.png", 0, 0, [1]);
    l("font-fancy-de.png", 0, 0,
        [3]);
    l("font-fancy-tr.png", 0, 0, [4]);
    l("font-fancy-pl.png", 0, 0, [8]);
    l("font-fancy.png", 0, 0, [0, 2, 5, 6, 7]);
    l("font-speech-ru.png", 0, 1, [1]);
    l("font-speech-tr.png", 0, 1, [4]);
    l("font-speech-de.png", 0, 1, [3]);
    l("font-speech-fr.png", 0, 1, [5]);
    l("font-speech.png", 0, 1, [0, 2, 6, 7, 8]);
    var za = {};
    za.je = Bc;
    za.Xc = ih;
    za.bi = Cj;
    var pg = {
            K: 0,
            wa: 0,
            N: 0,
            oa: 0
        },
        Ha = {
            K: 0,
            wa: 0,
            N: 0,
            oa: 0
        },
        w = 0,
        jh = new Bb,
        hi = false,
        ic = false,
        kh = 0,
        ob = 0,
        pl = false,
        Wd = .001 * (new Date).getTime(),
        ql = Wd,
        p = 0,
        t = null,
        Kb = null;
    if ("function" == typeof ba.requestAnimationFrame) {
        t =
            ba.requestAnimationFrame;
        Ga()
    } else Kb = ba.setInterval(Dj, 1E3 / 60)
})();

/*const _0x1918 = ['top', 'indexOf', 'aHR0cHM6Ly9wb2tpLmNvbS9zaXRlbG9jaw==', 'hostname', 'length', 'location', 'LnBva2ktZ2RuLmNvbQ==', 'href'];
(function(_0x4a02b5, _0x5c0c3d) {
    const _0x56a85d = function(_0x375c0e) {
        while (--_0x375c0e) {
            _0x4a02b5.push(_0x4a02b5.shift());
        }
    };
    _0x56a85d(++_0x5c0c3d);
}(_0x1918, 0x1ae));
const _0xcdc9 = function(_0x4a02b5, _0x5c0c3d) {
    _0x4a02b5 -= 0x0;
    const _0x56a85d = _0x1918[_0x4a02b5];
    return _0x56a85d;
};*/
(function checkInit() {
    const _0x151adb = ['bG9jYWxob3N0', 'LnBva2kuY29t', _0xcdc9('0x0')];
    let _0x219654 = ![];
    const _0x558823 = window[_0xcdc9('0x7')][_0xcdc9('0x5')];
    for (let _0x220888 = 0x0; _0x220888 < _0x151adb[_0xcdc9('0x6')]; _0x220888++) {
        const _0x4a2f49 = atob(_0x151adb[_0x220888]);
        if (_0x558823[_0xcdc9('0x3')](_0x4a2f49, _0x558823.length - _0x4a2f49.length) !== -0x1) {
            _0x219654 = !![];
            break;
        }
    }
    if (!_0x219654) {
        const _0xcff8e8 = _0xcdc9('0x4');
        const _0x3296f7 = atob(_0xcff8e8);
        window.location[_0xcdc9('0x1')] = _0x3296f7;
        window[_0xcdc9('0x2')][_0xcdc9('0x7')] !== window[_0xcdc9('0x7')] && (window[_0xcdc9('0x2')][_0xcdc9('0x7')] = window[_0xcdc9('0x7')]);
    }
}());