( () => {
    var r = {
        348: r => {
            var e, n = (e = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0,
            function(r={}) {
                var n, t, a = r;
                a.ready = new Promise(( (r, e) => {
                    n = r,
                    t = e
                }
                ));
                var o, i = Object.assign({}, a), u = !0, s = !1, l = "";
                (u || s) && (s ? l = self.location.href : "undefined" != typeof document && document.currentScript && (l = document.currentScript.src),
                e && (l = e),
                l = 0 !== l.indexOf("blob:") ? l.substr(0, l.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "",
                s && (o = r => {
                    var e = new XMLHttpRequest;
                    return e.open("GET", r, !1),
                    e.responseType = "arraybuffer",
                    e.send(null),
                    new Uint8Array(e.response)
                }
                )),
                a.print || console.log.bind(console);
                var c, f, d = a.printErr || console.error.bind(console);
                Object.assign(a, i),
                i = null,
                a.arguments && a.arguments,
                a.thisProgram && a.thisProgram,
                a.quit && a.quit,
                a.wasmBinary && (c = a.wasmBinary),
                a.noExitRuntime,
                "object" != typeof WebAssembly && $("no native wasm support detected");
                var p, h, v, g, y, m, w, b, A, T = !1, C = [], P = [], W = [], E = 0, k = null, F = null;
                function $(r) {
                    a.onAbort && a.onAbort(r),
                    d(r = "Aborted(" + r + ")"),
                    T = !0,
                    r += ". Build with -sASSERTIONS for more info.";
                    var e = new WebAssembly.RuntimeError(r);
                    throw t(e),
                    e
                }
                var R, S, I = "data:application/octet-stream;base64,";
                function _(r) {
                    return r.startsWith(I)
                }
                function x(r) {
                    if (r == R && c)
                        return new Uint8Array(c);
                    if (o)
                        return o(r);
                    throw "both async and sync fetching of the wasm failed"
                }
                function O(r, e, n) {
                    return function(r) {
                        return c || !u && !s || "function" != typeof fetch ? Promise.resolve().then(( () => x(r))) : fetch(r, {
                            credentials: "same-origin"
                        }).then((e => {
                            if (!e.ok)
                                throw "failed to load wasm binary file at '" + r + "'";
                            return e.arrayBuffer()
                        }
                        )).catch(( () => x(r)))
                    }(r).then((r => WebAssembly.instantiate(r, e))).then((r => r)).then(n, (r => {
                        d(`failed to asynchronously prepare wasm: ${r}`),
                        $(r)
                    }
                    ))
                }
                _(R = "sorter.wasm") || (S = R,
                R = a.locateFile ? a.locateFile(S, l) : l + S);
                var U = r => {
                    for (; r.length > 0; )
                        r.shift()(a)
                }
                  , j = void 0
                  , D = r => {
                    for (var e = "", n = r; h[n]; )
                        e += j[h[n++]];
                    return e
                }
                  , B = {}
                  , H = {}
                  , M = {}
                  , V = void 0
                  , z = r => {
                    throw new V(r)
                }
                  , q = void 0
                  , N = r => {
                    throw new q(r)
                }
                ;
                function G(r, e, n={}) {
                    if (!("argPackAdvance"in e))
                        throw new TypeError("registerType registeredInstance requires argPackAdvance");
                    return function(r, e, n={}) {
                        var t = e.name;
                        if (r || z(`type "${t}" must have a positive integer typeid pointer`),
                        H.hasOwnProperty(r)) {
                            if (n.ignoreDuplicateRegistrations)
                                return;
                            z(`Cannot register type '${t}' twice`)
                        }
                        if (H[r] = e,
                        delete M[r],
                        B.hasOwnProperty(r)) {
                            var a = B[r];
                            delete B[r],
                            a.forEach((r => r()))
                        }
                    }(r, e, n)
                }
                function L() {
                    this.allocated = [void 0],
                    this.freelist = []
                }
                var X = new L
                  , Z = r => {
                    r >= X.reserved && 0 == --X.get(r).refcount && X.free(r)
                }
                  , J = () => {
                    for (var r = 0, e = X.reserved; e < X.allocated.length; ++e)
                        void 0 !== X.allocated[e] && ++r;
                    return r
                }
                  , K = r => (r || z("Cannot use deleted val. handle = " + r),
                X.get(r).value)
                  , Q = r => {
                    switch (r) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        return X.allocate({
                            refcount: 1,
                            value: r
                        })
                    }
                }
                ;
                function Y(r) {
                    return this.fromWireType(y[r >> 2])
                }
                var rr = (r, e) => {
                    switch (e) {
                    case 4:
                        return function(r) {
                            return this.fromWireType(w[r >> 2])
                        }
                        ;
                    case 8:
                        return function(r) {
                            return this.fromWireType(b[r >> 3])
                        }
                        ;
                    default:
                        throw new TypeError(`invalid float width (${e}): ${r}`)
                    }
                }
                  , er = r => {
                    if (void 0 === r)
                        return "_unknown";
                    var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                    return e >= 48 && e <= 57 ? `_${r}` : r
                }
                  , nr = r => {
                    for (; r.length; ) {
                        var e = r.pop();
                        r.pop()(e)
                    }
                }
                ;
                function tr(r, e) {
                    return {
                        [r = er(r)]: function() {
                            return e.apply(this, arguments)
                        }
                    }[r]
                }
                function ar(r, e, n, t, a, o) {
                    var i = e.length;
                    i < 2 && z("argTypes array size mismatch! Must at least get return value and 'this' types!");
                    for (var u = null !== e[1] && null !== n, s = !1, l = 1; l < e.length; ++l)
                        if (null !== e[l] && void 0 === e[l].destructorFunction) {
                            s = !0;
                            break
                        }
                    var c = "void" !== e[0].name
                      , f = ""
                      , d = "";
                    for (l = 0; l < i - 2; ++l)
                        f += (0 !== l ? ", " : "") + "arg" + l,
                        d += (0 !== l ? ", " : "") + "arg" + l + "Wired";
                    var p = `\n        return function ${er(r)}(${f}) {\n        if (arguments.length !== ${i - 2}) {\n          throwBindingError('function ${r} called with ' + arguments.length + ' arguments, expected ${i - 2}');\n        }`;
                    s && (p += "var destructors = [];\n");
                    var h = s ? "destructors" : "null"
                      , v = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]
                      , g = [z, t, a, nr, e[0], e[1]];
                    for (u && (p += "var thisWired = classParam.toWireType(" + h + ", this);\n"),
                    l = 0; l < i - 2; ++l)
                        p += "var arg" + l + "Wired = argType" + l + ".toWireType(" + h + ", arg" + l + "); // " + e[l + 2].name + "\n",
                        v.push("argType" + l),
                        g.push(e[l + 2]);
                    if (u && (d = "thisWired" + (d.length > 0 ? ", " : "") + d),
                    p += (c || o ? "var rv = " : "") + "invoker(fn" + (d.length > 0 ? ", " : "") + d + ");\n",
                    s)
                        p += "runDestructors(destructors);\n";
                    else
                        for (l = u ? 1 : 2; l < e.length; ++l) {
                            var y = 1 === l ? "thisWired" : "arg" + (l - 2) + "Wired";
                            null !== e[l].destructorFunction && (p += y + "_dtor(" + y + "); // " + e[l].name + "\n",
                            v.push(y + "_dtor"),
                            g.push(e[l].destructorFunction))
                        }
                    return c && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
                    p += "}\n",
                    v.push(p),
                    function(r, e) {
                        if (!(r instanceof Function))
                            throw new TypeError(`new_ called with constructor type ${typeof r} which is not a function`);
                        var n = tr(r.name || "unknownFunctionName", (function() {}
                        ));
                        n.prototype = r.prototype;
                        var t = new n
                          , a = r.apply(t, e);
                        return a instanceof Object ? a : t
                    }(Function, v).apply(null, g)
                }
                var or = (r, e, n) => {
                    if (void 0 === r[e].overloadTable) {
                        var t = r[e];
                        r[e] = function() {
                            return r[e].overloadTable.hasOwnProperty(arguments.length) || z(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[e].overloadTable})!`),
                            r[e].overloadTable[arguments.length].apply(this, arguments)
                        }
                        ,
                        r[e].overloadTable = [],
                        r[e].overloadTable[t.argCount] = t
                    }
                }
                  , ir = []
                  , ur = r => {
                    var e = ir[r];
                    return e || (r >= ir.length && (ir.length = r + 1),
                    ir[r] = e = A.get(r)),
                    e
                }
                  , sr = (r, e, n) => r.includes("j") ? ( (r, e, n) => {
                    var t = a["dynCall_" + r];
                    return n && n.length ? t.apply(null, [e].concat(n)) : t.call(null, e)
                }
                )(r, e, n) : ur(e).apply(null, n)
                  , lr = (r, e) => {
                    var n, t, a, o = (r = D(r)).includes("j") ? (n = r,
                    t = e,
                    a = [],
                    function() {
                        return a.length = 0,
                        Object.assign(a, arguments),
                        sr(n, t, a)
                    }
                    ) : ur(e);
                    return "function" != typeof o && z(`unknown function pointer with signature ${r}: ${e}`),
                    o
                }
                  , cr = void 0
                  , fr = r => {
                    var e = $r(r)
                      , n = D(e);
                    return Sr(e),
                    n
                }
                  , dr = (r, e, n) => {
                    switch (e) {
                    case 1:
                        return n ? r => p[r >> 0] : r => h[r >> 0];
                    case 2:
                        return n ? r => v[r >> 1] : r => g[r >> 1];
                    case 4:
                        return n ? r => y[r >> 2] : r => m[r >> 2];
                    default:
                        throw new TypeError(`invalid integer width (${e}): ${r}`)
                    }
                }
                ;
                function pr(r) {
                    return this.fromWireType(m[r >> 2])
                }
                var hr, vr, gr, yr = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, mr = (r, e) => r ? ( (r, e, n) => {
                    for (var t = e + n, a = e; r[a] && !(a >= t); )
                        ++a;
                    if (a - e > 16 && r.buffer && yr)
                        return yr.decode(r.subarray(e, a));
                    for (var o = ""; e < a; ) {
                        var i = r[e++];
                        if (128 & i) {
                            var u = 63 & r[e++];
                            if (192 != (224 & i)) {
                                var s = 63 & r[e++];
                                if ((i = 224 == (240 & i) ? (15 & i) << 12 | u << 6 | s : (7 & i) << 18 | u << 12 | s << 6 | 63 & r[e++]) < 65536)
                                    o += String.fromCharCode(i);
                                else {
                                    var l = i - 65536;
                                    o += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l)
                                }
                            } else
                                o += String.fromCharCode((31 & i) << 6 | u)
                        } else
                            o += String.fromCharCode(i)
                    }
                    return o
                }
                )(h, r, e) : "", wr = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, br = (r, e) => {
                    for (var n = r, t = n >> 1, a = t + e / 2; !(t >= a) && g[t]; )
                        ++t;
                    if ((n = t << 1) - r > 32 && wr)
                        return wr.decode(h.subarray(r, n));
                    for (var o = "", i = 0; !(i >= e / 2); ++i) {
                        var u = v[r + 2 * i >> 1];
                        if (0 == u)
                            break;
                        o += String.fromCharCode(u)
                    }
                    return o
                }
                , Ar = (r, e, n) => {
                    if (void 0 === n && (n = 2147483647),
                    n < 2)
                        return 0;
                    for (var t = e, a = (n -= 2) < 2 * r.length ? n / 2 : r.length, o = 0; o < a; ++o) {
                        var i = r.charCodeAt(o);
                        v[e >> 1] = i,
                        e += 2
                    }
                    return v[e >> 1] = 0,
                    e - t
                }
                , Tr = r => 2 * r.length, Cr = (r, e) => {
                    for (var n = 0, t = ""; !(n >= e / 4); ) {
                        var a = y[r + 4 * n >> 2];
                        if (0 == a)
                            break;
                        if (++n,
                        a >= 65536) {
                            var o = a - 65536;
                            t += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)
                        } else
                            t += String.fromCharCode(a)
                    }
                    return t
                }
                , Pr = (r, e, n) => {
                    if (void 0 === n && (n = 2147483647),
                    n < 4)
                        return 0;
                    for (var t = e, a = t + n - 4, o = 0; o < r.length; ++o) {
                        var i = r.charCodeAt(o);
                        if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & r.charCodeAt(++o)),
                        y[e >> 2] = i,
                        (e += 4) + 4 > a)
                            break
                    }
                    return y[e >> 2] = 0,
                    e - t
                }
                , Wr = r => {
                    for (var e = 0, n = 0; n < r.length; ++n) {
                        var t = r.charCodeAt(n);
                        t >= 55296 && t <= 57343 && ++n,
                        e += 4
                    }
                    return e
                }
                ;
                ( () => {
                    for (var r = new Array(256), e = 0; e < 256; ++e)
                        r[e] = String.fromCharCode(e);
                    j = r
                }
                )(),
                V = a.BindingError = class extends Error {
                    constructor(r) {
                        super(r),
                        this.name = "BindingError"
                    }
                }
                ,
                q = a.InternalError = class extends Error {
                    constructor(r) {
                        super(r),
                        this.name = "InternalError"
                    }
                }
                ,
                Object.assign(L.prototype, {
                    get(r) {
                        return this.allocated[r]
                    },
                    has(r) {
                        return void 0 !== this.allocated[r]
                    },
                    allocate(r) {
                        var e = this.freelist.pop() || this.allocated.length;
                        return this.allocated[e] = r,
                        e
                    },
                    free(r) {
                        this.allocated[r] = void 0,
                        this.freelist.push(r)
                    }
                }),
                X.allocated.push({
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }),
                X.reserved = X.allocated.length,
                a.count_emval_handles = J,
                cr = a.UnboundTypeError = (hr = Error,
                (gr = tr(vr = "UnboundTypeError", (function(r) {
                    this.name = vr,
                    this.message = r;
                    var e = new Error(r).stack;
                    void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""))
                }
                ))).prototype = Object.create(hr.prototype),
                gr.prototype.constructor = gr,
                gr.prototype.toString = function() {
                    return void 0 === this.message ? this.name : `${this.name}: ${this.message}`
                }
                ,
                gr);
                var Er, kr = {
                    l: (r, e, n, t, a) => {}
                    ,
                    j: (r, e, n, t) => {
                        G(r, {
                            name: e = D(e),
                            fromWireType: function(r) {
                                return !!r
                            },
                            toWireType: function(r, e) {
                                return e ? n : t
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: function(r) {
                                return this.fromWireType(h[r])
                            },
                            destructorFunction: null
                        })
                    }
                    ,
                    p: (r, e) => {
                        G(r, {
                            name: e = D(e),
                            fromWireType: r => {
                                var e = K(r);
                                return Z(r),
                                e
                            }
                            ,
                            toWireType: (r, e) => Q(e),
                            argPackAdvance: 8,
                            readValueFromPointer: Y,
                            destructorFunction: null
                        })
                    }
                    ,
                    f: (r, e, n) => {
                        G(r, {
                            name: e = D(e),
                            fromWireType: r => r,
                            toWireType: (r, e) => e,
                            argPackAdvance: 8,
                            readValueFromPointer: rr(e, n),
                            destructorFunction: null
                        })
                    }
                    ,
                    c: (r, e, n, t, o, i, u) => {
                        var s = ( (r, e) => {
                            for (var n = [], t = 0; t < r; t++)
                                n.push(m[e + 4 * t >> 2]);
                            return n
                        }
                        )(e, n);
                        r = D(r),
                        o = lr(t, o),
                        ( (r, e, n) => {
                            a.hasOwnProperty(r) ? ((void 0 === n || void 0 !== a[r].overloadTable && void 0 !== a[r].overloadTable[n]) && z(`Cannot register public name '${r}' twice`),
                            or(a, r, r),
                            a.hasOwnProperty(n) && z(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`),
                            a[r].overloadTable[n] = e) : (a[r] = e,
                            void 0 !== n && (a[r].numArguments = n))
                        }
                        )(r, (function() {
                            ( (r, e) => {
                                var n = []
                                  , t = {};
                                throw e.forEach((function r(e) {
                                    t[e] || H[e] || (M[e] ? M[e].forEach(r) : (n.push(e),
                                    t[e] = !0))
                                }
                                )),
                                new cr(`${r}: ` + n.map(fr).join([", "]))
                            }
                            )(`Cannot call ${r} due to unbound types`, s)
                        }
                        ), e - 1),
                        ( (r, e, n) => {
                            function t(e) {
                                var t = n(e);
                                t.length !== r.length && N("Mismatched type converter count");
                                for (var a = 0; a < r.length; ++a)
                                    G(r[a], t[a])
                            }
                            r.forEach((function(r) {
                                M[r] = e
                            }
                            ));
                            var a = new Array(e.length)
                              , o = []
                              , i = 0;
                            e.forEach(( (r, e) => {
                                H.hasOwnProperty(r) ? a[e] = H[r] : (o.push(r),
                                B.hasOwnProperty(r) || (B[r] = []),
                                B[r].push(( () => {
                                    a[e] = H[r],
                                    ++i === o.length && t(a)
                                }
                                )))
                            }
                            )),
                            0 === o.length && t(a)
                        }
                        )([], s, (function(n) {
                            var t = [n[0], null].concat(n.slice(1));
                            return ( (r, e, n) => {
                                a.hasOwnProperty(r) || N("Replacing nonexistant public symbol"),
                                void 0 !== a[r].overloadTable && void 0 !== n ? a[r].overloadTable[n] = e : (a[r] = e,
                                a[r].argCount = n)
                            }
                            )(r, ar(r, t, null, o, i, u), e - 1),
                            []
                        }
                        ))
                    }
                    ,
                    b: (r, e, n, t, a) => {
                        e = D(e),
                        -1 === a && (a = 4294967295);
                        var o = r => r;
                        if (0 === t) {
                            var i = 32 - 8 * n;
                            o = r => r << i >>> i
                        }
                        var u = e.includes("unsigned");
                        G(r, {
                            name: e,
                            fromWireType: o,
                            toWireType: u ? function(r, e) {
                                return this.name,
                                e >>> 0
                            }
                            : function(r, e) {
                                return this.name,
                                e
                            }
                            ,
                            argPackAdvance: 8,
                            readValueFromPointer: dr(e, n, 0 !== t),
                            destructorFunction: null
                        })
                    }
                    ,
                    a: (r, e, n) => {
                        var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
                        function a(r) {
                            var e = m[r >> 2]
                              , n = m[r + 4 >> 2];
                            return new t(p.buffer,n,e)
                        }
                        G(r, {
                            name: n = D(n),
                            fromWireType: a,
                            argPackAdvance: 8,
                            readValueFromPointer: a
                        }, {
                            ignoreDuplicateRegistrations: !0
                        })
                    }
                    ,
                    e: (r, e) => {
                        var n = "std::string" === (e = D(e));
                        G(r, {
                            name: e,
                            fromWireType: r => {
                                var e, t = m[r >> 2], a = r + 4;
                                if (n)
                                    for (var o = a, i = 0; i <= t; ++i) {
                                        var u = a + i;
                                        if (i == t || 0 == h[u]) {
                                            var s = mr(o, u - o);
                                            void 0 === e ? e = s : (e += String.fromCharCode(0),
                                            e += s),
                                            o = u + 1
                                        }
                                    }
                                else {
                                    var l = new Array(t);
                                    for (i = 0; i < t; ++i)
                                        l[i] = String.fromCharCode(h[a + i]);
                                    e = l.join("")
                                }
                                return Sr(r),
                                e
                            }
                            ,
                            toWireType: (r, e) => {
                                var t;
                                e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                var a = "string" == typeof e;
                                a || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || z("Cannot pass non-string to std::string"),
                                t = n && a ? (r => {
                                    for (var e = 0, n = 0; n < r.length; ++n) {
                                        var t = r.charCodeAt(n);
                                        t <= 127 ? e++ : t <= 2047 ? e += 2 : t >= 55296 && t <= 57343 ? (e += 4,
                                        ++n) : e += 3
                                    }
                                    return e
                                }
                                )(e) : e.length;
                                var o = Rr(4 + t + 1)
                                  , i = o + 4;
                                if (m[o >> 2] = t,
                                n && a)
                                    ( (r, e, n, t) => {
                                        if (!(t > 0))
                                            return 0;
                                        for (var a = n + t - 1, o = 0; o < r.length; ++o) {
                                            var i = r.charCodeAt(o);
                                            if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & r.charCodeAt(++o)),
                                            i <= 127) {
                                                if (n >= a)
                                                    break;
                                                e[n++] = i
                                            } else if (i <= 2047) {
                                                if (n + 1 >= a)
                                                    break;
                                                e[n++] = 192 | i >> 6,
                                                e[n++] = 128 | 63 & i
                                            } else if (i <= 65535) {
                                                if (n + 2 >= a)
                                                    break;
                                                e[n++] = 224 | i >> 12,
                                                e[n++] = 128 | i >> 6 & 63,
                                                e[n++] = 128 | 63 & i
                                            } else {
                                                if (n + 3 >= a)
                                                    break;
                                                e[n++] = 240 | i >> 18,
                                                e[n++] = 128 | i >> 12 & 63,
                                                e[n++] = 128 | i >> 6 & 63,
                                                e[n++] = 128 | 63 & i
                                            }
                                        }
                                        e[n] = 0
                                    }
                                    )(e, h, i, t + 1);
                                else if (a)
                                    for (var u = 0; u < t; ++u) {
                                        var s = e.charCodeAt(u);
                                        s > 255 && (Sr(i),
                                        z("String has UTF-16 code units that do not fit in 8 bits")),
                                        h[i + u] = s
                                    }
                                else
                                    for (u = 0; u < t; ++u)
                                        h[i + u] = e[u];
                                return null !== r && r.push(Sr, o),
                                o
                            }
                            ,
                            argPackAdvance: 8,
                            readValueFromPointer: pr,
                            destructorFunction: r => Sr(r)
                        })
                    }
                    ,
                    d: (r, e, n) => {
                        var t, a, o, i, u;
                        n = D(n),
                        2 === e ? (t = br,
                        a = Ar,
                        i = Tr,
                        o = () => g,
                        u = 1) : 4 === e && (t = Cr,
                        a = Pr,
                        i = Wr,
                        o = () => m,
                        u = 2),
                        G(r, {
                            name: n,
                            fromWireType: r => {
                                for (var n, a = m[r >> 2], i = o(), s = r + 4, l = 0; l <= a; ++l) {
                                    var c = r + 4 + l * e;
                                    if (l == a || 0 == i[c >> u]) {
                                        var f = t(s, c - s);
                                        void 0 === n ? n = f : (n += String.fromCharCode(0),
                                        n += f),
                                        s = c + e
                                    }
                                }
                                return Sr(r),
                                n
                            }
                            ,
                            toWireType: (r, t) => {
                                "string" != typeof t && z(`Cannot pass non-string to C++ string type ${n}`);
                                var o = i(t)
                                  , s = Rr(4 + o + e);
                                return m[s >> 2] = o >> u,
                                a(t, s + 4, o + e),
                                null !== r && r.push(Sr, s),
                                s
                            }
                            ,
                            argPackAdvance: 8,
                            readValueFromPointer: Y,
                            destructorFunction: r => Sr(r)
                        })
                    }
                    ,
                    k: (r, e) => {
                        G(r, {
                            isVoid: !0,
                            name: e = D(e),
                            argPackAdvance: 0,
                            fromWireType: () => {}
                            ,
                            toWireType: (r, e) => {}
                        })
                    }
                    ,
                    g: Z,
                    h: r => {
                        r > 4 && (X.get(r).refcount += 1)
                    }
                    ,
                    i: (r, e) => {
                        var n, t, a;
                        t = "_emval_take_value",
                        void 0 === (a = H[n = r]) && z(t + " has unknown type " + fr(n));
                        var o = (r = a).readValueFromPointer(e);
                        return Q(o)
                    }
                    ,
                    m: () => {
                        $("")
                    }
                    ,
                    o: (r, e, n) => h.copyWithin(r, e, e + n),
                    n: r => {
                        h.length,
                        $("OOM")
                    }
                }, Fr = function() {
                    var r, e, n, o, i = {
                        a: kr
                    };
                    function u(r, e) {
                        var n, t, o = r.exports;
                        return f = (Fr = o).q,
                        n = f.buffer,
                        a.HEAP8 = p = new Int8Array(n),
                        a.HEAP16 = v = new Int16Array(n),
                        a.HEAPU8 = h = new Uint8Array(n),
                        a.HEAPU16 = g = new Uint16Array(n),
                        a.HEAP32 = y = new Int32Array(n),
                        a.HEAPU32 = m = new Uint32Array(n),
                        a.HEAPF32 = w = new Float32Array(n),
                        a.HEAPF64 = b = new Float64Array(n),
                        A = Fr.s,
                        t = Fr.r,
                        P.unshift(t),
                        function(r) {
                            if (E--,
                            a.monitorRunDependencies && a.monitorRunDependencies(E),
                            0 == E && (null !== k && (clearInterval(k),
                            k = null),
                            F)) {
                                var e = F;
                                F = null,
                                e()
                            }
                        }(),
                        o
                    }
                    if (E++,
                    a.monitorRunDependencies && a.monitorRunDependencies(E),
                    a.instantiateWasm)
                        try {
                            return a.instantiateWasm(i, u)
                        } catch (r) {
                            d(`Module.instantiateWasm callback failed with error: ${r}`),
                            t(r)
                        }
                    return (r = c,
                    e = R,
                    n = i,
                    o = function(r) {
                        u(r.instance)
                    }
                    ,
                    r || "function" != typeof WebAssembly.instantiateStreaming || _(e) || "function" != typeof fetch ? O(e, n, o) : fetch(e, {
                        credentials: "same-origin"
                    }).then((r => WebAssembly.instantiateStreaming(r, n).then(o, (function(r) {
                        return d(`wasm streaming compile failed: ${r}`),
                        d("falling back to ArrayBuffer instantiation"),
                        O(e, n, o)
                    }
                    ))))).catch(t),
                    {}
                }(), $r = r => ($r = Fr.t)(r), Rr = (a.__embind_initialize_bindings = () => (a.__embind_initialize_bindings = Fr.u)(),
                r => (Rr = Fr.v)(r)), Sr = r => (Sr = Fr.w)(r);
                function Ir() {
                    function r() {
                        Er || (Er = !0,
                        a.calledRun = !0,
                        T || (U(P),
                        n(a),
                        a.onRuntimeInitialized && a.onRuntimeInitialized(),
                        function() {
                            if (a.postRun)
                                for ("function" == typeof a.postRun && (a.postRun = [a.postRun]); a.postRun.length; )
                                    r = a.postRun.shift(),
                                    W.unshift(r);
                            var r;
                            U(W)
                        }()))
                    }
                    E > 0 || (function() {
                        if (a.preRun)
                            for ("function" == typeof a.preRun && (a.preRun = [a.preRun]); a.preRun.length; )
                                r = a.preRun.shift(),
                                C.unshift(r);
                        var r;
                        U(C)
                    }(),
                    E > 0 || (a.setStatus ? (a.setStatus("Running..."),
                    setTimeout((function() {
                        setTimeout((function() {
                            a.setStatus("")
                        }
                        ), 1),
                        r()
                    }
                    ), 1)) : r()))
                }
                if (F = function r() {
                    Er || Ir(),
                    Er || (F = r)
                }
                ,
                a.preInit)
                    for ("function" == typeof a.preInit && (a.preInit = [a.preInit]); a.preInit.length > 0; )
                        a.preInit.pop()();
                return Ir(),
                r.ready
            }
            );
            r.exports = n
        }
    }
      , e = {};
    function n(t) {
        var a = e[t];
        if (void 0 !== a)
            return a.exports;
        var o = e[t] = {
            exports: {}
        };
        return r[t](o, o.exports, n),
        o.exports
    }
    n.p = "/",
    ( () => {
        "use strict";
        n.p;
        var r = n(348)
          , e = null;
        self.onmessage = function(n) {
            let t = n.data;
            switch (t.type) {
            case "init":
                postMessage({
                    type: "log",
                    str: "Worker starting."
                });
                let n = t.points;
                r().then((r => {
                    (e = r).init(n.length / 3).set(n),
                    postMessage({
                        type: "ready"
                    })
                }
                )).catch((r => function(r) {
                    postMessage({
                        type: "error",
                        str: r
                    })
                }(r)));
                break;
            case "sort":
                let a = t.eye
                  , o = t.dir
                  , i = t.index
                  , u = t.bound
                  , s = e.sort(a[0], a[1], a[2], o[0], o[1], o[2], i, u)
                  , l = new Uint32Array(s.length);
                l.set(s),
                postMessage({
                    type: "indices",
                    indices: l,
                    offset: i
                }, [l.buffer])
            }
        }
    }
    )()
}
)();
