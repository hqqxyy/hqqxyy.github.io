/*!
 * Copyright (c) 2023 Jakub Cerveny, jakub.cerveny@gmail.com
 *
 */
( () => {
    "use strict";
    let t = Float32Array;
    function i(i, s, h) {
        const e = new t(3);
        return i && (e[0] = i),
        s && (e[1] = s),
        h && (e[2] = h),
        e
    }
    function s(i, s, h, e) {
        return (e = e || new t(3))[0] = i[0] + s * h[0],
        e[1] = i[1] + s * h[1],
        e[2] = i[2] + s * h[2],
        e
    }
    function h(i, s, h) {
        return (h = h || new t(3))[0] = i[0] - s[0],
        h[1] = i[1] - s[1],
        h[2] = i[2] - s[2],
        h
    }
    function e(i, s, h) {
        return (h = h || new t(3))[0] = i[0] * s,
        h[1] = i[1] * s,
        h[2] = i[2] * s,
        h
    }
    function n(i, s, h) {
        h = h || new t(3);
        const e = i[2] * s[0] - i[0] * s[2]
          , n = i[0] * s[1] - i[1] * s[0];
        return h[0] = i[1] * s[2] - i[2] * s[1],
        h[1] = e,
        h[2] = n,
        h
    }
    function r(t, i) {
        return t[0] * i[0] + t[1] * i[1] + t[2] * i[2]
    }
    function o(t, i) {
        const s = t[0] - i[0]
          , h = t[1] - i[1]
          , e = t[2] - i[2];
        return s * s + h * h + e * e
    }
    function a(i, s) {
        s = s || new t(3);
        const h = i[0] * i[0] + i[1] * i[1] + i[2] * i[2]
          , e = Math.sqrt(h);
        return e > 1e-5 ? (s[0] = i[0] / e,
        s[1] = i[1] / e,
        s[2] = i[2] / e) : (s[0] = 0,
        s[1] = 0,
        s[2] = 0),
        s
    }
    function l(i, s) {
        return (s = s || new t(3))[0] = i[0],
        s[1] = i[1],
        s[2] = i[2],
        s
    }
    let c, u, f, v = Float32Array;
    function w(t) {
        return (t = t || new v(16))[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 1,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
    }
    function d(t, i) {
        i = i || new v(16);
        const s = t[0]
          , h = t[1]
          , e = t[2]
          , n = t[3]
          , r = t[4]
          , o = t[5]
          , a = t[6]
          , l = t[7]
          , c = t[8]
          , u = t[9]
          , f = t[10]
          , w = t[11]
          , d = t[12]
          , p = t[13]
          , m = t[14]
          , A = t[15]
          , y = f * A
          , M = m * w
          , x = a * A
          , g = m * l
          , b = a * w
          , _ = f * l
          , z = e * A
          , F = m * n
          , B = e * w
          , k = f * n
          , E = e * l
          , G = a * n
          , j = c * p
          , P = d * u
          , $ = r * p
          , D = d * o
          , H = r * u
          , U = c * o
          , C = s * p
          , O = d * h
          , S = s * u
          , R = c * h
          , T = s * o
          , N = r * h
          , q = y * o + g * u + b * p - (M * o + x * u + _ * p)
          , I = M * h + z * u + k * p - (y * h + F * u + B * p)
          , W = x * h + F * o + E * p - (g * h + z * o + G * p)
          , L = _ * h + B * o + G * u - (b * h + k * o + E * u)
          , V = 1 / (s * q + r * I + c * W + d * L);
        return i[0] = V * q,
        i[1] = V * I,
        i[2] = V * W,
        i[3] = V * L,
        i[4] = V * (M * r + x * c + _ * d - (y * r + g * c + b * d)),
        i[5] = V * (y * s + F * c + B * d - (M * s + z * c + k * d)),
        i[6] = V * (g * s + z * r + G * d - (x * s + F * r + E * d)),
        i[7] = V * (b * s + k * r + E * c - (_ * s + B * r + G * c)),
        i[8] = V * (j * l + D * w + H * A - (P * l + $ * w + U * A)),
        i[9] = V * (P * n + C * w + R * A - (j * n + O * w + S * A)),
        i[10] = V * ($ * n + O * l + T * A - (D * n + C * l + N * A)),
        i[11] = V * (U * n + S * l + N * w - (H * n + R * l + T * w)),
        i[12] = V * ($ * f + U * m + P * a - (H * m + j * a + D * f)),
        i[13] = V * (S * m + j * e + O * f - (C * f + R * m + P * e)),
        i[14] = V * (C * a + N * m + D * e - (T * m + $ * e + O * a)),
        i[15] = V * (T * f + H * e + R * a - (S * a + N * f + U * e)),
        i
    }
    function p(t, s, e, r) {
        return r = r || new v(16),
        c = c || i(),
        u = u || i(),
        f = f || i(),
        a(h(t, s, f), f),
        a(n(e, f, c), c),
        a(n(f, c, u), u),
        r[0] = c[0],
        r[1] = c[1],
        r[2] = c[2],
        r[3] = 0,
        r[4] = u[0],
        r[5] = u[1],
        r[6] = u[2],
        r[7] = 0,
        r[8] = f[0],
        r[9] = f[1],
        r[10] = f[2],
        r[11] = 0,
        r[12] = t[0],
        r[13] = t[1],
        r[14] = t[2],
        r[15] = 1,
        r
    }
    function m(t, s, h) {
        h = h || i();
        const e = s[0]
          , n = s[1]
          , r = s[2]
          , o = e * t[3] + n * t[7] + r * t[11] + t[15];
        return h[0] = (e * t[0] + n * t[4] + r * t[8] + t[12]) / o,
        h[1] = (e * t[1] + n * t[5] + r * t[9] + t[13]) / o,
        h[2] = (e * t[2] + n * t[6] + r * t[10] + t[14]) / o,
        h
    }
    function A(t) {
        return t * Math.PI / 180
    }
    class y {
        constructor(t, i, s, h=-1, e=void 0) {
            let n = "";
            h >= 0 && (n = `#version ${h} es\n`),
            e && (n += e),
            this.t = t,
            this.i = this.h(t.VERTEX_SHADER, i, n),
            this.o = this.h(t.FRAGMENT_SHADER, s, n),
            this.l = this.u(this.i, this.o),
            this.v = new Map,
            this.p = new Map
        }
        m() {
            this.t.useProgram(this.l)
        }
        A(t) {
            let i = this.p.get(t);
            return void 0 !== i || (i = this.t.getUniformLocation(this.l, t),
            null === i && console.warn(`Uniform ${t} not found.`),
            this.p.set(t, i)),
            i
        }
        M(t) {
            let i = this.v.get(t);
            return void 0 !== i || (i = this.t.getAttribLocation(this.l, t),
            null === i && console.warn(`Attribute ${t} not found.`),
            this.v.set(t, i)),
            i
        }
        g() {
            let t = this.t;
            if (t.linkProgram(this.l),
            !t.getProgramParameter(this.l, t.LINK_STATUS))
                throw new Error("Error linking program:" + t.getProgramInfoLog(this.l))
        }
        h(t, i, s) {
            let h = this.t
              , e = h.createShader(t);
            if (h.shaderSource(e, s ? s + i : i),
            h.compileShader(e),
            !h.getShaderParameter(e, h.COMPILE_STATUS))
                throw console.error(h.getShaderInfoLog(e)),
                console.log(s ? s + i : i),
                new Error("Error compiling " + (t == h.VERTEX_SHADER ? "vertex" : "fragment") + ` shader: ${h.getShaderInfoLog(e)}`);
            return e
        }
        u(t, i) {
            let s = this.t
              , h = s.createProgram();
            if (s.attachShader(h, t),
            s.attachShader(h, i),
            s.linkProgram(h),
            !s.getProgramParameter(h, s.LINK_STATUS))
                throw new Error("Error linking program:" + s.getProgramInfoLog(h));
            return h
        }
        delete() {
            this.t.deleteProgram(this.l),
            this.t.deleteShader(this.i),
            this.t.deleteShader(this.o),
            this.l = null,
            this.i = null,
            this.o = null
        }
    }
    class M {
        constructor(t, i, s) {
            this.t = t,
            this.width = i,
            this.height = s,
            this._ = [],
            this.F = [],
            this.B = t.createFramebuffer(),
            this.bind()
        }
        k(t, i, s, h=void 0) {
            let e = this.t
              , n = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, n),
            e.texImage2D(e.TEXTURE_2D, 0, i, this.width, this.height, 0, i, s, null),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            h || (h = e.NEAREST),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, h),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, h),
            e.framebufferTexture2D(e.FRAMEBUFFER, t, e.TEXTURE_2D, n, 0),
            this._.push(n)
        }
        G(t, i) {
            let s = this.t
              , h = s.createRenderbuffer();
            s.bindRenderbuffer(s.RENDERBUFFER, h),
            s.renderbufferStorage(s.RENDERBUFFER, i, this.width, this.height),
            s.framebufferRenderbuffer(s.FRAMEBUFFER, t, s.RENDERBUFFER, h),
            this.F.push(h)
        }
        j() {
            let t = this.t
              , i = t.checkFramebufferStatus(t.FRAMEBUFFER);
            if (i != t.FRAMEBUFFER_COMPLETE)
                throw new Error(`Error creating framebuffer: status ${i}`);
            this.P()
        }
        bind() {
            this.t.bindFramebuffer(this.t.FRAMEBUFFER, this.B)
        }
        P() {
            this.t.bindFramebuffer(this.t.FRAMEBUFFER, null)
        }
        delete() {
            this.P();
            for (const t of this.F)
                this.t.deleteRenderbuffer(t);
            for (const t of this._)
                this.t.deleteTexture(t);
            this.t.deleteFramebuffer(this.B),
            this.B = null,
            this._ = null,
            this.F = null
        }
    }
    var x = null;
    function g(t, i="", s=5e3) {
        let h = document.getElementById("error-message");
        h.innerHTML = t,
        h.className = "show " + i,
        x && clearTimeout(x),
        x = setTimeout(( () => {
            let t = document.getElementById("error-message");
            t.innerHTML = "",
            t.className = "",
            x = null
        }
        ), s),
        console[i.length ? "error" : "log"](t)
    }
    class b {
        constructor(t, s=[0, 0, 1]) {
            this.$ = i(),
            this.D = -150,
            this.H = 20,
            this.zoom = 2,
            this.eye = i(),
            this.up = i(),
            this.right = i(),
            this.U(s),
            this.C(),
            this.O = .15,
            this.S = {
                $: i(),
                D: this.D,
                H: this.H,
                zoom: this.zoom
            },
            this.R = null,
            this.T = null,
            this.N = !1,
            this.q = 0,
            this.I = Math.min(window.devicePixelRatio, 2),
            this.W = -1e5,
            t.addEventListener("pointerdown", this.L.bind(this)),
            document.addEventListener("pointerup", this.V.bind(this)),
            t.addEventListener("pointermove", this.J.bind(this)),
            t.addEventListener("wheel", this.K.bind(this)),
            t.addEventListener("contextmenu", this.contextMenu.bind(this)),
            this.Y = function(t, i) {}
            ,
            this.onupdate = function() {}
            ,
            this.Z = performance.now()
        }
        update(i) {
            let s = i - this.Z;
            this.Z = i,
            s > 300 && (s = 16);
            const h = .001;
            if (o(this.$, this.S.$) > h * h || Math.abs(this.D - this.S.D) > h || Math.abs(this.H - this.S.H) > h || Math.abs(this.zoom - this.S.zoom) > h * h) {
                let i = 1 - Math.pow(1 - this.O, s / 16)
                  , h = this.N ? i / 2 : i;
                return e = this.$,
                n = this.S.$,
                r = h,
                (a = (a = this.$) || new t(3))[0] = e[0] + r * (n[0] - e[0]),
                a[1] = e[1] + r * (n[1] - e[1]),
                a[2] = e[2] + r * (n[2] - e[2]),
                this.D += i * (this.S.D - this.D),
                this.H += i * (this.S.H - this.H),
                this.zoom = Math.log2(Math.pow(2, this.zoom) + h * (Math.pow(2, this.S.zoom) - Math.pow(2, this.zoom))),
                this.C(),
                !0
            }
            var e, n, r, a;
            return !1
        }
        X(t) {
            l(t, this.$),
            l(t, this.S.$),
            this.C()
        }
        tt(t, i, s) {
            this.D = this.S.D = t,
            this.H = this.S.H = i,
            this.zoom = this.S.zoom = s,
            this.C()
        }
        C() {
            let t = Math.cos(A(this.D))
              , i = Math.sin(A(this.D))
              , h = Math.cos(A(this.H))
              , n = Math.sin(A(this.H))
              , r = Math.pow(2, this.zoom);
            this.eye = s(this.$, t * h * r, this.it),
            this.eye = s(this.eye, i * h * r, this.st),
            this.eye = s(this.eye, n * r, this.ht),
            this.up = e(this.it, -t * n),
            this.up = s(this.up, -i * n, this.st),
            this.up = s(this.up, h, this.ht),
            this.right = e(this.it, -i),
            this.right = s(this.right, t, this.st)
        }
        U(t) {
            this.ht = a(t),
            this.it = a(h([1, 0, 0], e(this.ht, r(this.ht, [1, 0, 0])))),
            this.st = a(n(this.ht, this.it))
        }
        et() {
            return a(h(this.$, this.eye))
        }
        nt() {
            let t = Array.from(this.right)
              , i = Array.from(this.up)
              , s = Array.from(this.et());
            return t.concat(i).concat(s)
        }
        rt(t) {
            let s = function(t, i, s) {
                s = s || new v(16);
                let h = t[0]
                  , e = t[1]
                  , n = t[2];
                const r = Math.sqrt(h * h + e * e + n * n);
                h /= r,
                e /= r,
                n /= r;
                const o = h * h
                  , a = e * e
                  , l = n * n
                  , c = Math.cos(i)
                  , u = Math.sin(i)
                  , f = 1 - c;
                return s[0] = o + (1 - o) * c,
                s[1] = h * e * f + n * u,
                s[2] = h * n * f - e * u,
                s[3] = 0,
                s[4] = h * e * f - n * u,
                s[5] = a + (1 - a) * c,
                s[6] = e * n * f + h * u,
                s[7] = 0,
                s[8] = h * n * f + e * u,
                s[9] = e * n * f - h * u,
                s[10] = l + (1 - l) * c,
                s[11] = 0,
                s[12] = 0,
                s[13] = 0,
                s[14] = 0,
                s[15] = 1,
                s
            }(this.et(), A(t));
            this.U(function(t, s, h) {
                h = h || i();
                const e = s[0]
                  , n = s[1]
                  , r = s[2];
                return h[0] = e * t[0] + n * t[4] + r * t[8],
                h[1] = e * t[1] + n * t[5] + r * t[9],
                h[2] = e * t[2] + n * t[6] + r * t[10],
                h
            }(s, this.ht)),
            this.C();
            let h = this.ht;
            console.log(`up = [${h[0].toFixed(3)}, ${h[1].toFixed(3)}, ${h[2].toFixed(3)}]`)
        }
        pan(t, i) {
            const s = 75e-5 * Math.pow(2, this.S.zoom) * this.I;
            this.S.$[0] += s * (-t * this.right[0] + i * this.up[0]),
            this.S.$[1] += s * (-t * this.right[1] + i * this.up[1]),
            this.S.$[2] += s * (-t * this.right[2] + i * this.up[2]),
            this.N = !1
        }
        rotate(t, i) {
            const s = .2 * this.I;
            this.S.D -= t * s,
            this.S.H += i * s,
            this.S.H = Math.min(Math.max(this.S.H, -90), 90),
            this.W < 0 && (this.W = performance.now())
        }
        ot() {
            return Math.hypot(this.R.lt - this.T.lt, this.R.ct - this.T.ct)
        }
        L(t) {
            this.R ? this.T || (this.T = t,
            this.T.lt = t.clientX,
            this.T.ct = t.clientY,
            this.T.ut = .5 * (this.R.lt + this.T.lt),
            this.T.ft = .5 * (this.R.ct + this.T.ct),
            this.T.vt = this.ot(),
            this.T.wt = this.S.zoom) : (this.R = t,
            this.R.lt = t.clientX,
            this.R.ct = t.clientY),
            t.target.setPointerCapture(t.pointerId),
            t.preventDefault()
        }
        J(t) {
            if (this.R && !this.T) {
                let i = t.clientX - this.R.lt
                  , s = t.clientY - this.R.ct;
                0 == this.R.button ? this.rotate(i, s) : this.pan(i, s),
                this.R.lt = t.clientX,
                this.R.ct = t.clientY,
                this.onupdate()
            } else if (this.R && this.T) {
                let i = t.pointerId == this.R.pointerId ? this.R : t.pointerId == this.T.pointerId ? this.T : null;
                if (i) {
                    i.lt = t.clientX,
                    i.ct = t.clientY;
                    let s = .5 * (this.R.lt + this.T.lt)
                      , h = .5 * (this.R.ct + this.T.ct)
                      , e = s - this.T.ut
                      , n = h - this.T.ft;
                    this.pan(e, n),
                    this.T.ut = s,
                    this.T.ft = h;
                    let r = this.ot();
                    this.S.zoom = this.T.wt + Math.log2(this.T.vt / r),
                    this.onupdate()
                }
            }
            t.preventDefault()
        }
        V(t) {
            if (this.R && !this.T && 0 == this.R.button) {
                if (Math.hypot(t.clientX - this.R.clientX, t.clientY - this.R.clientY) < 8 && performance.now() - this.R.timeStamp < 300) {
                    if (performance.now() - this.q < 300)
                        this.S.zoom -= 1,
                        this.N = !1,
                        this.q = 0;
                    else {
                        let i = this.Y(t.clientX, t.clientY);
                        if (i) {
                            this.S.$ = i;
                            let t = a(h(this.$, this.eye))
                              , s = r(h(this.S.$, this.eye), t)
                              , n = h(this.S.$, e(t, s));
                            this.S.zoom = Math.log2(function(t, i) {
                                const s = t[0] - i[0]
                                  , h = t[1] - i[1]
                                  , e = t[2] - i[2];
                                return Math.sqrt(s * s + h * h + e * e)
                            }(n, this.S.$)),
                            this.N = !0,
                            this.q = this.W = performance.now()
                        }
                    }
                    this.onupdate()
                }
            }
            this.R && t.pointerId == this.R.pointerId ? (this.R = this.T,
            this.T = null) : this.T && t.pointerId == this.T.pointerId && (this.T = null)
        }
        K(t) {
            this.S.zoom += .003 * t.deltaY,
            this.S.zoom = Math.min(Math.max(this.S.zoom, -10), 24),
            this.N = !1,
            this.onupdate(),
            t.preventDefault()
        }
        contextMenu(t) {
            t.preventDefault()
        }
    }
    !function(i) {
        const s = t;
        t = i
    }(Float64Array),
    function(t) {
        const i = v;
        v = t
    }(Float64Array);
    class _ {
        constructor() {
            this.dt = -1,
            this.At = 0,
            this.near = 0,
            this.yt = 0,
            this.eye = i(),
            this.$ = i(),
            this.up = i(),
            this.Mt = w(),
            this.xt = w(),
            this.gt = w(),
            this.bt = w(),
            this._t = w(),
            this.zt = [[0, 0, 1, 1], [0, 0, -1, 1], [1, 0, 0, 1], [-1, 0, 0, 1], [0, 1, 0, 1], [0, -1, 0, 1]],
            this.Ft = new Array(6);
            for (let t = 0; t < 6; t++)
                this.Ft[t] = [0, 0, 0, 0];
            this.Bt = w(),
            this.kt = new Array(8);
            for (let t = 0; t < 8; t++)
                this.kt[t] = [0, 0, 0];
            this.Et = i(0, 0, 0),
            this.Gt = i()
        }
        jt(t, i, s, h) {
            this.dt = t,
            this.At = i,
            this.near = s,
            this.yt = h,
            function(t, i, s, h, e) {
                e = e || new v(16);
                const n = Math.tan(.5 * Math.PI - .5 * t)
                  , r = 1 / (s - h);
                e[0] = n / i,
                e[1] = 0,
                e[2] = 0,
                e[3] = 0,
                e[4] = 0,
                e[5] = n,
                e[6] = 0,
                e[7] = 0,
                e[8] = 0,
                e[9] = 0,
                e[10] = (s + h) * r,
                e[11] = -1,
                e[12] = 0,
                e[13] = 0,
                e[14] = s * h * r * 2,
                e[15] = 0
            }(A(t), i, s, h, this.Mt)
        }
        Pt(t, i, s) {
            if (this.dt < 0)
                throw new Error("Camera.setView: setProjection must be called first.");
            l(t, this.eye),
            l(i, this.$),
            l(s, this.up),
            h(this.eye, this.$, this.Gt),
            p(this.Gt, this.Et, this.up, this.bt),
            d(this.bt, this.gt),
            p(this.eye, this.$, this.up, this.bt),
            d(this.bt, this.xt),
            function(t, i, s) {
                s = s || new v(16);
                const h = t[0]
                  , e = t[1]
                  , n = t[2]
                  , r = t[3]
                  , o = t[4]
                  , a = t[5]
                  , l = t[6]
                  , c = t[7]
                  , u = t[8]
                  , f = t[9]
                  , w = t[10]
                  , d = t[11]
                  , p = t[12]
                  , m = t[13]
                  , A = t[14]
                  , y = t[15]
                  , M = i[0]
                  , x = i[1]
                  , g = i[2]
                  , b = i[3]
                  , _ = i[4]
                  , z = i[5]
                  , F = i[6]
                  , B = i[7]
                  , k = i[8]
                  , E = i[9]
                  , G = i[10]
                  , j = i[11]
                  , P = i[12]
                  , $ = i[13]
                  , D = i[14]
                  , H = i[15];
                s[0] = h * M + o * x + u * g + p * b,
                s[1] = e * M + a * x + f * g + m * b,
                s[2] = n * M + l * x + w * g + A * b,
                s[3] = r * M + c * x + d * g + y * b,
                s[4] = h * _ + o * z + u * F + p * B,
                s[5] = e * _ + a * z + f * F + m * B,
                s[6] = n * _ + l * z + w * F + A * B,
                s[7] = r * _ + c * z + d * F + y * B,
                s[8] = h * k + o * E + u * G + p * j,
                s[9] = e * k + a * E + f * G + m * j,
                s[10] = n * k + l * E + w * G + A * j,
                s[11] = r * k + c * E + d * G + y * j,
                s[12] = h * P + o * $ + u * D + p * H,
                s[13] = e * P + a * $ + f * D + m * H,
                s[14] = n * P + l * $ + w * D + A * H,
                s[15] = r * P + c * $ + d * D + y * H
            }(this.Mt, this.xt, this._t),
            function(t, i) {
                if ((i = i || new v(16)) === t) {
                    let s;
                    return s = t[1],
                    t[1] = t[4],
                    t[4] = s,
                    s = t[2],
                    t[2] = t[8],
                    t[8] = s,
                    s = t[3],
                    t[3] = t[12],
                    t[12] = s,
                    s = t[6],
                    t[6] = t[9],
                    t[9] = s,
                    s = t[7],
                    t[7] = t[13],
                    t[13] = s,
                    s = t[11],
                    t[11] = t[14],
                    t[14] = s,
                    i
                }
                const s = t[0]
                  , h = t[1]
                  , e = t[2]
                  , n = t[3]
                  , r = t[4]
                  , o = t[5]
                  , a = t[6]
                  , l = t[7]
                  , c = t[8]
                  , u = t[9]
                  , f = t[10]
                  , w = t[11]
                  , d = t[12]
                  , p = t[13]
                  , m = t[14]
                  , A = t[15];
                i[0] = s,
                i[1] = r,
                i[2] = c,
                i[3] = d,
                i[4] = h,
                i[5] = o,
                i[6] = u,
                i[7] = p,
                i[8] = e,
                i[9] = a,
                i[10] = f,
                i[11] = m,
                i[12] = n,
                i[13] = l,
                i[14] = w,
                i[15] = A
            }(this._t, this.Bt);
            for (let t = 0; t < 6; t++)
                z(this.Bt, this.zt[t], this.Ft[t])
        }
        $t(t, s, h, e) {
            return e = e || i(),
            m(this._t, t, e),
            e[0] = s * (e[0] + 1) / 2,
            e[1] = h * (e[1] + 1) / 2,
            e
        }
        Dt(t, i, s, h, e, n) {
            let r = 2 * t / h - 1
              , o = 2 * i / e - 1;
            return this.Gt[0] = s * r / this.Mt[0],
            this.Gt[1] = s * o / this.Mt[5],
            this.Gt[2] = -s,
            m(this.bt, this.Gt, n)
        }
        Ht(t) {
            let i = this.kt;
            i[0][0] = t[0][0],
            i[0][1] = t[0][1],
            i[0][2] = t[0][2],
            i[1][0] = t[1][0],
            i[1][1] = t[0][1],
            i[1][2] = t[0][2],
            i[2][0] = t[0][0],
            i[2][1] = t[1][1],
            i[2][2] = t[0][2],
            i[3][0] = t[1][0],
            i[3][1] = t[1][1],
            i[3][2] = t[0][2],
            i[4][0] = t[0][0],
            i[4][1] = t[0][1],
            i[4][2] = t[1][2],
            i[5][0] = t[1][0],
            i[5][1] = t[0][1],
            i[5][2] = t[1][2],
            i[6][0] = t[0][0],
            i[6][1] = t[1][1],
            i[6][2] = t[1][2],
            i[7][0] = t[1][0],
            i[7][1] = t[1][1],
            i[7][2] = t[1][2];
            for (let t = 0; t < 6; t++) {
                let s = !0;
                for (let h = 0; h < 8; h++) {
                    if (i[h][0] * this.Ft[t][0] + i[h][1] * this.Ft[t][1] + i[h][2] * this.Ft[t][2] + this.Ft[t][3] >= 0) {
                        s = !1;
                        break
                    }
                }
                if (s)
                    return !1
            }
            return !0
        }
        Ut(t) {
            let i = this.xt
              , s = t
              , h = i[2] * s[0] + i[6] * s[1] + i[10] * s[2] + i[14]
              , e = Math.max(-h, this.near);
            return this.Mt[0] / e
        }
    }
    function z(t, i, s) {
        const h = i[0]
          , e = i[1]
          , n = i[2]
          , r = i[3];
        return s[0] = h * t[0] + e * t[4] + n * t[8] + r * t[12],
        s[1] = h * t[1] + e * t[5] + n * t[9] + r * t[13],
        s[2] = h * t[2] + e * t[6] + n * t[10] + r * t[14],
        s[3] = h * t[3] + e * t[7] + n * t[11] + r * t[15],
        s
    }
    class F {
        constructor(t, i) {
            this.dataset = t,
            this.t = i,
            this.Ct = 0,
            this.Ot = [[0, 0, 0], [1, 1, 1]],
            this.St = null,
            this.Rt = null,
            this.Tt = null,
            this.Nt = null,
            this.qt = null,
            this.It = 1024,
            this.Wt = 2,
            this.Lt = null,
            this.Vt = 0,
            this.antialias = .3,
            this.Jt = document.getElementsByClassName("progress-wrap")[0],
            this.Qt = document.getElementsByClassName("progress-bytes")[0],
            this.Kt = document.getElementsByClassName("progress-value")[0],
            this.Yt = 0,
            this.Zt = 1e10,
            this.Xt = this.ti().then(( () => this.ii())).catch((t => g(t, "error")))
        }
        si(t) {
            this.Yt += t;
            let i = Math.min(100 * this.Yt / this.Zt, 100);
            this.Kt.style.width = `${i.toFixed(1)}%`,
            this.Qt.innerText = `${(this.Yt / (1 << 20)).toFixed(1)} MB`
        }
        ii() {
            this.Jt.style.visibility = "hidden"
        }
        ti() {
            let t = [this.hi("meta.json"), this.ei("gauss1.bin"), this.ni("gauss2.bin"), this.ri("sh.bin")];
            return this.oi = t[0],
            Promise.all(t)
        }
        async ai(t) {
            let i = await fetch(this.dataset + "/" + t);
            if (!i.ok)
                throw new Error(i.statusText);
            let s = i.body.getReader()
              , h = []
              , e = 0;
            for (; ; ) {
                let {done: t, value: i} = await s.read();
                if (t)
                    break;
                h.push(i),
                e += i.length,
                this.si(i.length)
            }
            let n = new Uint8Array(e)
              , r = 0;
            for (let t of h)
                n.set(t, r),
                r += t.length;
            return n.buffer
        }
        hi(t) {
            return this.ai(t).then((t => {
                var i = (new TextDecoder).decode(new Uint8Array(t))
                  , s = JSON.parse(i);
                this.Ct = s.num_splats,
                this.Zt = s.total_bytes,
                this.qt = new Float32Array(s.rlist),
                this.It = s.rstep ?? this.It,
                this.Wt = s.minr ?? this.Wt,
                this.Lt = new Float32Array(s.ctable),
                this.antialias = s.antialias ?? this.antialias,
                this.Vt = Math.max(...this.Lt.slice(-3))
            }
            ))
        }
        ei(t) {
            return this.ai(t).then((i => {
                let s = new Uint32Array(i,0,4)
                  , [h,e,n,r] = s;
                if (1 != h || 2048 != e || 2 != r)
                    throw new Error(`${t}: invalid data`);
                let o = this.t;
                this.St = o.createTexture(),
                o.bindTexture(o.TEXTURE_2D, this.St);
                let a = new Uint32Array(i,16);
                o.pixelStorei(o.UNPACK_ALIGNMENT, 1),
                o.texImage2D(o.TEXTURE_2D, 0, o.RG32UI, e, n, 0, o.RG_INTEGER, o.UNSIGNED_INT, a),
                this.li(o.TEXTURE_2D, o.NEAREST),
                this.ci(i, e)
            }
            ))
        }
        ni(t) {
            return this.ai(t).then((i => {
                let s = new Uint32Array(i,0,4)
                  , [h,e,n,r] = s;
                if (1 != h || 2048 != e || 4 != r)
                    throw new Error(`${t}: invalid data`);
                let o = this.t;
                this.Rt = o.createTexture(),
                o.bindTexture(o.TEXTURE_2D, this.Rt);
                let a = new Uint32Array(i,16);
                o.pixelStorei(o.UNPACK_ALIGNMENT, 1),
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA32UI, e, n, 0, o.RGBA_INTEGER, o.UNSIGNED_INT, a),
                this.li(o.TEXTURE_2D, o.NEAREST)
            }
            ))
        }
        ri(t) {
            return this.ai(t).then((t => {
                let i = new Uint32Array(t,0,2)
                  , s = (i[0], i[1])
                  , h = Math.ceil(s / 256)
                  , e = this.t;
                
                // Store the dimensions
                this.shWidth = s;
                this.shHeight = 4 * h;  // Height is 4 times the calculated height

                this.Tt = e.createTexture(),
                e.bindTexture(e.TEXTURE_2D, this.Tt);
                let n = new Uint16Array(t,8);
                e.pixelStorei(e.UNPACK_ALIGNMENT, 1),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGB16F, 1024, 4 * h, 0, e.RGB, e.HALF_FLOAT, n),
                this.li(e.TEXTURE_2D, e.NEAREST),

                console.log(`SH Data Dimensions ${this.shWidth} ${this.shHeight} `);

            }
            ))
        }
        li(t, i) {
            let s = this.t;
            s.texParameteri(t, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
            s.texParameteri(t, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
            s.texParameteri(t, s.TEXTURE_MIN_FILTER, i),
            s.texParameteri(t, s.TEXTURE_MAG_FILTER, i)
        }
        ci(t, i) {
            let s = new Uint16Array(t,16);
            this.Nt = new Uint16Array(3 * this.Ct);
            for (let t = 0; t < this.Ct; t++) {
                let h = 4 * (i * (4 * (t >> 13) + (t >> 2 & 3)) + (4 * (t >> 4 & 511) + (3 & t)));
                this.Nt[3 * t + 0] = s[h + 0],
                this.Nt[3 * t + 1] = s[h + 1],
                this.Nt[3 * t + 2] = s[h + 2]
            }
        }
    }
    class B {
        constructor(t, i) {
            this.size = i,
            this.color = [1, 1, 1, 1],
            this.t = t,
            this.l = new y(t,"precision highp float;attribute vec2 a_pos;uniform mat4 view,proj;uniform vec3 point;uniform float size;uniform vec2 iwh;varying vec2 v_pos;void main(){vec4 A=proj*(view*vec4(point,1.));vec2 B=A.xy/A.w;gl_Position=vec4(B+a_pos*iwh*size,0.,1.);v_pos=a_pos;}","precision mediump float;uniform vec4 color;varying vec2 v_pos;const float A=0.94;const float B=0.97;const float C=0.03;void main(){float D=length(v_pos);float E=1.;if(D<A){E=smoothstep(A-C,A,D);}else if(D>B){E=smoothstep(B+C,B,D);}gl_FragColor=vec4(color.rgb,E*color.a);}"),
            this.ui = t.createBuffer(),
            t.bindBuffer(t.ARRAY_BUFFER, this.ui),
            t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1]), t.STATIC_DRAW)
        }
        fi(t, i) {
            if (!this.color[3])
                return;
            let s = this.t
              , h = this.l;
            s.disable(s.DEPTH_TEST),
            s.enable(s.BLEND),
            s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA),
            h.m(),
            s.uniformMatrix4fv(h.A("view"), !1, t.gt),
            s.uniformMatrix4fv(h.A("proj"), !1, t.Mt),
            s.uniform3f(h.A("point"), i[0] - t.$[0], i[1] - t.$[1], i[2] - t.$[2]),
            s.uniform1f(h.A("size"), this.size / 2),
            s.uniform4fv(h.A("color"), this.color),
            s.uniform2f(h.A("iwh"), 2 / s.canvas.width, 2 / s.canvas.height),
            s.bindBuffer(s.ARRAY_BUFFER, this.ui),
            s.vertexAttribPointer(h.M("a_pos"), 2, s.FLOAT, !1, 0, 0),
            s.enableVertexAttribArray(h.M("a_pos")),
            s.drawArrays(s.TRIANGLES, 0, 6),
            s.disableVertexAttribArray(h.M("a_pos")),
            s.disable(s.BLEND)
        }
    }
    const k = "precision highp float;precision highp int;uniform mat4 view,proj;uniform vec2 res2,ires2;uniform vec3 cpos;uniform int offset;uniform vec2 zs_aa;uniform highp usampler2D s0,s1;uniform mediump sampler2D s2;\n#ifdef UNIFORM_CTABLE\nuniform mediump vec3 ctable[256];\n#endif\nuniform float icmax;in vec2 a0;in int a1;out vec4 v_color;out vec2 v_uv;\n#define A  texelFetch\n#define B  unpackHalf2x16\n#define C  gl_Position\n#define D  gl_InstanceID\nivec2 E(int F){return ivec2(4*((F>>4)&0x1ff)+(F&3),4*(F>>13)+((F>>2)&3));}mediump vec3 G(ivec2 H,int I,int J){return A(s2,H+ivec2(I,J),0).rgb;}mediump vec3 K(uint L,vec3 M){ivec2 H=ivec2(int(L&0xffu),int(L>>8u))*4;float N=M.x,O=M.y,P=M.z,Q=N*N,R=O*O,S=P*P,T=N*O,U=O*P,V=N*P;return-0.4886025*G(H,0,0)*O+0.4886025*G(H,1,0)*P-0.4886025*G(H,2,0)*N+1.0925484*G(H,3,0)*T-1.0925484*G(H,0,1)*U+0.3153916*G(H,1,1)*(3.*S-1.)-1.0925484*G(H,2,1)*V+0.5462742*G(H,3,1)*(Q-R)-0.5900436*G(H,0,2)*O*(3.*Q-R)+2.8906114*G(H,1,2)*T*P-0.4570458*G(H,2,2)*O*(5.*S-1.)+0.3731763*G(H,3,2)*P*(5.*S-3.)-0.4570458*G(H,0,3)*N*(5.*S-1.)+1.4453057*G(H,1,3)*P*(Q-R)-0.5900436*G(H,2,3)*N*(Q-3.*R);}vec3 W(float X){vec3 Y=fract(vec3(1.,255.,65025.)*X);return Y-Y.yzz*vec3(1./255.,1./255.,0.);}void main(){ivec2 Z=E(D<offset?D:a1);uvec2 a=A(s0,Z,0).xy;vec2 b=B(a.x),c=B(a.y);vec3 d=vec3(b,c.x);vec4 e=view*vec4(d,1.),f=proj*e;float g=1.2*f.w;if(f.z<-f.w||f.x<-g||f.x>g||f.y<-g||f.y>g){C=vec4(0.,0.,2.,1.);return;}float h=1./f.w;vec2 i=f.xy*h;uvec4 j=A(s1,Z,0);vec2 k=B(j.x),l=B(j.y),m=B(j.z);vec3 n=vec3(c.y,k),o=vec3(l,m.x);uint p=j.z>>16u;mediump vec4 q=vec4(ctable[j.a&0xffu].x,ctable[(j.a>>8)&0xffu].y,ctable[(j.a>>16)&0xffu].z,float((j.a>>24)&0xffu)*(1./255.));vec2 r=vec2(proj[0][0]*res2.x,proj[1][1]*res2.y);float s=-h,t=s*s;mat3 u=mat3(-r.x*s,0,0,0,-r.y*s,0,r.x*e.x*t,r.y*e.y*t,0),v=mat3(view[0].xyz,view[1].xyz,view[2].xyz),w=u*v,x=mat3(n.x,o.x,o.y,o.x,n.y,o.z,o.y,o.z,n.z),y=w*x*transpose(w);float z=y[0][0]+zs_aa.y,AA=y[0][1],AB=y[1][1]+zs_aa.y;float AC=(z+AB)/2.,AD=length(vec2((z-AB)/2.,AA)),AE=AC+AD,AF=max(AC-AD,0.1);vec2 AG=normalize(vec2(AA,AE-z)),AH=vec2(AG.y,-AG.x),AI=min(sqrt(2.*AE),1024.)*AG,AJ=min(sqrt(2.*AF),1024.)*AH;C=vec4(i+a0.x*AI*ires2+a0.y*AJ*ires2,0.,1.);v_uv=a0;\n#ifndef RD \nq.rgb+=K(p,normalize(d-cpos));q.rgb*=icmax;v_color=q;\n#else\nv_color=vec4(W(f.w*zs_aa.x),q.a);\n#endif\n}"
      , E = "precision highp float;uniform float ellip;in vec4 v_color;in vec2 v_uv;out vec4 fc;void main(){float A=-dot(v_uv,v_uv);if(A<-4.){discard;}float B=max(exp(A),ellip)*v_color.a;\n#ifndef RD \nfc=vec4(v_color.rgb,B);\n#else\nif(B<0.25){discard;}fc=vec4(v_color.rgb,1.);\n#endif\n}";
    class G {
        constructor() {
            this.dt = 50,
            this.near = .1,
            this.yt = 1e3,
            this.vi = 0;
            let t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            this.wi = t,
            this.di = t ? 4 : 1,
            this.I = window.devicePixelRatio,
            this.pi = 1,
            console.log(`devicePixelRatio = ${this.I}`),
            this.canvas = document.getElementById("gsplat-canvas"),
            this.mi(this.canvas);
            let i = window.config.up ?? [0, -1, 0];
            this.background = window.config.background ?? [0, 0, 0],
            this.Ai = new F(window.config.data,this.t),
            console.log(`datapath = ${window.config.data} ${this.t}`),
            this.yi = new _,
            this.controls = new b(this.canvas,i),
            this.controls.onupdate = this.update.bind(this),
            this.controls.Y = this.Dt.bind(this),
            this.B = null,
            this.Mi = null,
            this.xi = 0,
            this.from = 0,
            this.gi = !0,
            this.bi = 0,
            this.Ai.oi.then(( () => {
                this._i()
            }
            )).catch((t => j(t))),
            this.Ai.Xt.then(( () => {
                this.zi(),
                this.ci();
                let t = window.config.initPos;
                t && 6 == t.length && (this.controls.X([t[0], t[1], t[2]]),
                this.controls.tt(t[3], t[4], t[5])),
                this.update()
            }
            )),
            this.Fi = new B(this.t,80 * this.I),
            window.addEventListener("resize", this.update.bind(this)),
            document.addEventListener("keyup", this.Bi.bind(this)),
            this.ki = !1,
            this.Ei = 0,
            this.Gi = 1e3,

            // FPS-related properties
            this.frameCount = 0,
            this.lastTime = performance.now(),
            this.fps = 0;



            this.update()
        }
        ji(t) {
            this.t;
            this.ki = !1;
            let i = this.Pi()
              , s = this.controls.update(t);
            this.yi.jt(this.dt, i, this.near, this.yt),
            this.yi.Pt(this.controls.eye, this.controls.$, this.controls.up),
            this.$i(),
            this.B.bind(),
            this.Di(this.B.width, this.B.height, !1),
            this.B.P(),
            this.Hi(),
            s |= this.Ui(),
            s && this.update(),
            this.Gi++;

            // Update FPS
            this.frameCount++;
            const currentTime = performance.now();
            if (currentTime - this.lastTime >= 1000) {
                this.fps = this.frameCount;
                this.frameCount = 0;
                this.lastTime = currentTime;

                // Update the overlay content
                const statsElement = document.getElementById('stats');
                statsElement.textContent = `FPS: ${this.fps} | Resolution: ${this.canvas.width}x${this.canvas.height} | Resolution: ${this.B.width}x${this.B.height}`;
        
                // console.log(`FPS: ${this.fps}`);
            } 
        }
        Di(t, i, s) {
            let h, n = this.t;
            if (n.viewport(0, 0, t, i),
            !this.Ai.St || !this.Ai.Rt)
                return n.clearColor(.1, .1, .1, 1),
                void n.clear(n.COLOR_BUFFER_BIT);
            !s && this.Gi >= this.di && this.Ci(this.controls.eye, this.controls.et()),
            s ? (h = this.Oi,
            n.clearColor(1, 1, 1, 1),
            n.disable(n.BLEND)) : (h = this.Si,
            n.clearColor(...e(this.background, 1 / this.Ai.Vt), 1),
            n.enable(n.BLEND),
            n.blendFunc(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA)),
            n.clear(n.COLOR_BUFFER_BIT),
            n.disable(n.DEPTH_TEST),
            h.m(),
            n.uniformMatrix4fv(h.A("view"), !1, this.yi.xt),
            n.uniformMatrix4fv(h.A("proj"), !1, this.yi.Mt),
            n.uniform2f(h.A("res2"), t / 2, i / 2),
            n.uniform2f(h.A("ires2"), 2 / t, 2 / i),
            n.uniform1f(h.A("ellip"), this.bi),
            n.uniform1i(h.A("offset"), this.from),
            n.uniform3fv(h.A("cpos"), this.yi.eye),
            n.uniform2f(h.A("zs_aa"), 1 / this.yt, this.Ai.antialias),
            n.uniform1f(h.A("icmax"), 1 / this.Ai.Vt),
            this.Ri && n.uniform3fv(h.A("ctable"), this.Ai.Lt),
            n.activeTexture(n.TEXTURE0),
            n.bindTexture(n.TEXTURE_2D, this.Ai.St),
            n.uniform1i(h.A("s0"), 0),
            n.activeTexture(n.TEXTURE1),
            n.bindTexture(n.TEXTURE_2D, this.Ai.Rt),
            n.uniform1i(h.A("s1"), 1),
            s || (n.activeTexture(n.TEXTURE2),
            n.bindTexture(n.TEXTURE_2D, this.Ai.Tt),
            n.uniform1i(h.A("s2"), 2)),
            n.bindBuffer(n.ARRAY_BUFFER, this.Ti);
            let r = h.M("a0");
            n.vertexAttribPointer(r, 2, n.FLOAT, !1, 0, 0),
            n.vertexAttribDivisor(r, 0),
            n.enableVertexAttribArray(r),
            n.bindBuffer(n.ARRAY_BUFFER, this.Ni);
            let o = h.M("a1");
            n.vertexAttribIPointer(o, 1, n.INT, 0, 0),
            n.vertexAttribDivisor(o, 1),
            n.enableVertexAttribArray(o),
            n.drawArraysInstanced(n.TRIANGLE_FAN, 0, 4, this.from + this.xi),
            n.disableVertexAttribArray(r),
            n.disableVertexAttribArray(o)
        }
        Hi() {
            let t = this.t;
            t.viewport(0, 0, t.canvas.width, t.canvas.height);
            let i = this.qi;
            i.m(),
            t.disable(t.DEPTH_TEST),
            t.disable(t.BLEND),
            t.uniform1f(i.A("cmax"), this.Ai.Vt),
            t.activeTexture(t.TEXTURE0),
            t.bindTexture(t.TEXTURE_2D, this.B._[0]),
            t.uniform1i(i.A("s0"), 0),
            t.bindBuffer(t.ARRAY_BUFFER, this.Ii);
            let s = i.M("a0");
            t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0),
            t.vertexAttribDivisor(s, 0),
            t.enableVertexAttribArray(s),
            t.drawArrays(t.TRIANGLES, 0, 3),
            t.disableVertexAttribArray(s)
        }
        $i() {
            let t = this.t
              , [i,s] = [t.canvas.width, t.canvas.height];
            this.wi && (i = Math.floor(i / 2),
            s = Math.floor(s / 2)),
            !this.B || this.B.width == i && this.B.height == s || (this.B.delete(),
            this.B = null),
            this.B || (this.B = new M(t,i,s),
            this.B.k(t.COLOR_ATTACHMENT0, t.RGBA, t.UNSIGNED_BYTE, t.LINEAR),
            this.B.j())
        }
        update() {
            this.ki || (requestAnimationFrame(this.ji.bind(this)),
            this.ki = !0)
        }
        Pi() {
            let t = this.t
              , i = this.I;
            i /= this.pi;
            let s = Math.round(t.canvas.clientWidth * i)
              , h = Math.round(t.canvas.clientHeight * i);
            return t.canvas.width == s && t.canvas.height == h || (t.canvas.width = s,
            t.canvas.height = h),
            s / h
        }
        Wi(t, i, s, h) {
            let e = this.t
              , n = new M(e,e.canvas.width,e.canvas.height);
            n.k(e.COLOR_ATTACHMENT0, e.RGBA, e.UNSIGNED_BYTE),
            n.j(),
            n.bind(),
            this.Di(e.canvas.width, e.canvas.height, !0);
            let r = new Uint8Array(s * h * 4);
            e.readPixels(t, n.height - i - h, s, h, e.RGBA, e.UNSIGNED_BYTE, r),
            n.P(),
            n.delete();
            let o = new Float32Array(s * h);
            for (let t = 0; t < h; t++)
                for (let i = 0; i < s; i++) {
                    let h = t * s + i;
                    o[h] = this.Li(r[4 * h], r[4 * h + 1], r[4 * h + 2]) * this.yt
                }
            return o
        }
        Dt(t, i) {
            let s = this.canvas
              , {cx: h, cy: e} = function(t, i, s) {
                let h, e = t.getBoundingClientRect(), n = t.width / t.height, r = 0, o = 0;
                return n < e.width / e.height ? (h = t.height / e.height,
                r = (e.width - e.height * n) / 2) : (h = t.width / e.width,
                o = (e.height - e.width / n) / 2),
                {
                    cx: (i - e.left - r) * h,
                    cy: (s - e.top - o) * h
                }
            }(s, t, i)
              , n = Math.round(h - 3)
              , r = Math.round(e - 3)
              , o = Math.round(h + 3)
              , a = Math.round(e + 3)
              , l = this.Wi(n, r, o - n + 1, a - r + 1)
              , c = Math.min(...l);
            if (!(c > .99 * this.yi.yt || c <= 0))
                return this.yi.Dt(h, s.height - 1 - e, c, s.width, s.height)
        }
        Li(t, i, s) {
            return t * (1 / 255) + i * (1 / 65025) + s * (1 / 16581375)
        }
        Ui() {
            let t = performance.now() - this.controls.W
              , i = Math.min(Math.max(4 - t / 300, 0), 1);
            return i && (this.Fi.color[3] = i,
            this.Fi.fi(this.yi, this.controls.S.$)),
            i > 0
        }
        Bi(t) {
            switch (t.key) {
            case "e":
                this.bi = !this.bi;
                break;
            case "o":
                this.controls.rt(1);
                break;
            case "p":
                this.controls.rt(-1);
                break;
            case "i":
                let t = this.controls;
                console.log(`totalBytes: ${this.Ai.Zt}`),
                console.log(`initPos: [${t.$[0].toFixed(3)}, ${t.$[1].toFixed(3)}, ${t.$[2].toFixed(3)}, ${t.D.toFixed(3)}, ${t.H.toFixed(3)}, ${t.zoom.toFixed(3)}]`);
                break;
            default:
                return
            }
            this.update()
        }
        mi(t) {
            let i = t.getContext("webgl2", {
                antialias: !1,
                alpha: !1
            });
            if (!i)
                throw new Error("WebGL2 not supported.");
            this.t = i,
            this.Ti = i.createBuffer(),
            i.bindBuffer(i.ARRAY_BUFFER, this.Ti),
            i.bufferData(i.ARRAY_BUFFER, new Float32Array([-2, -2, 2, -2, 2, 2, -2, 2]), i.STATIC_DRAW),
            this.Ii = i.createBuffer(),
            i.bindBuffer(i.ARRAY_BUFFER, this.Ii),
            i.bufferData(i.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -3, 3, 1]), i.STATIC_DRAW),
            this.qi = new y(i,"precision highp float;in vec2 a0;out vec2 v0;void main(){v0=a0;gl_Position=vec4(a0,0.,1.);}","precision mediump float;in vec2 v0;out vec4 fc;uniform lowp sampler2D s0;uniform float cmax;void main(){vec4 A=texture(s0,(v0+1.)*0.5);fc=vec4(A.rgb*cmax,A.a);}",300)
        }
        _i() {
            let t = this.t;
            this.Ri = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS) > 272;
            let i = this.Ri ? "#define UNIFORM_CTABLE\n" : this.Vi();
            this.Si = new y(t,k,E,300,i),
            i += "#define RD\n",
            this.Oi = new y(t,k,E,300,i)
        }
        Vi() {
            let t = "const mediump vec3 ctable[256] = vec3[256]("
              , i = this.Ai.Lt;
            for (let s = 0; s < i.length; s += 3)
                t += `vec3(${i[s].toFixed(4)},${i[s + 1].toFixed(4)},${i[s + 2].toFixed(4)})`,
                s < i.length - 3 && (t += ",");
            return t += ");\n",
            t
        }
        zi() {
            let t = this.t
              , i = this.Ai.Ct;
            this.Ni = t.createBuffer(),
            t.bindBuffer(t.ARRAY_BUFFER, this.Ni),
            t.bufferData(t.ARRAY_BUFFER, 4 * i, t.DYNAMIC_DRAW),
            this.Ji = t.createBuffer(),
            t.bindBuffer(t.ARRAY_BUFFER, this.Ji),
            t.bufferData(t.ARRAY_BUFFER, 4 * i, t.DYNAMIC_DRAW);
            let s = new Uint32Array(i);
            for (let t = 0; t < i; t++)
                s[t] = t;
            t.bindBuffer(t.ARRAY_BUFFER, this.Ni),
            t.bufferSubData(t.ARRAY_BUFFER, 0, s),
            t.bindBuffer(t.ARRAY_BUFFER, null),
            this.from = 0,
            this.xi = 0
        }
        ci() {
            this.Mi = new Worker("/proj/gaussians/gs_website/worker.js"),
            this.Mi.onmessage = this.Qi.bind(this),
            this.Mi.Ki = !0,
            this.Mi.postMessage({
                type: "init",
                points: this.Ai.Nt
            }, [this.Ai.Nt.buffer]),
            this.Yi = i(0, 0, 0),
            this.Zi = i(0, 0, 0)
        }
        Xi(t, i) {
            return o(t, this.Yi) > 0 || o(i, this.Zi) > 0
        }
        Ci(t, i) {
            if (!this.Mi.Ki && this.Xi(t, i)) {
                let h = 1.5 * Math.max((s = this.yi.eye,
                Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2])), this.Ai.Wt)
                  , e = this.Ai.qt.findLastIndex((t => t > h));
                (e < 0 || !this.gi) && (e = 0);
                let n = this.Ai.qt[e];
                this.Mi.postMessage({
                    type: "sort",
                    eye: t,
                    dir: i,
                    index: e * this.Ai.It,
                    bound: n
                }),
                this.Mi.Ki = !0,
                l(t, this.Yi),
                l(i, this.Zi)
            }
            var s
        }
        Qi(t) {
            let i = t.data;
            switch (i.type) {
            case "indices":
                let t = i.indices;
                this.from = i.offset;
                let s = this.t;
                s.bindBuffer(s.ARRAY_BUFFER, this.Ji),
                s.bufferSubData(s.ARRAY_BUFFER, 4 * this.from, t),
                s.bindBuffer(s.ARRAY_BUFFER, null),
                [this.Ni,this.Ji] = [this.Ji, this.Ni],
                this.xi = t.length,
                this.Mi.Ki = !1,
                this.Gi = 0,
                this.update();
                break;
            case "ready":
                this.Mi.Ki = !1,
                console.log("Worker ready."),
                this.update();
                break;
            case "log":
                console.log(i.str);
                break;
            case "error":
                j(i.str)
            }
        }
    }
    function j(t) {
        g(t, "error", 15e3)
    }
    let P = null;
    window.addEventListener("load", (function() {
        try {
            P = new G
        } catch (t) {
            j(t)
        }
    }
    ))
}
)();



