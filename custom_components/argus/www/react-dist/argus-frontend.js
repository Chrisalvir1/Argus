function tp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
function np(a) {
  if (a.__esModule) return a;
  var c = a.default;
  if (typeof c == "function") {
    var l = function d() {
      return this instanceof d ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    l.prototype = c.prototype;
  } else l = {};
  return Object.defineProperty(l, "__esModule", { value: !0 }), Object.keys(a).forEach(function(d) {
    var E = Object.getOwnPropertyDescriptor(a, d);
    Object.defineProperty(l, d, E.get ? E : {
      enumerable: !0,
      get: function() {
        return a[d];
      }
    });
  }), l;
}
var _o = {}, ms = { exports: {} }, Ct = {}, ys = { exports: {} }, Te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dc;
function rp() {
  if (dc) return Te;
  dc = 1;
  var a = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), L = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), q = Symbol.iterator;
  function B(k) {
    return k === null || typeof k != "object" ? null : (k = q && k[q] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var Re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ke = Object.assign, Q = {};
  function D(k, M, xe) {
    this.props = k, this.context = M, this.refs = Q, this.updater = xe || Re;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(k, M) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, M, "setState");
  }, D.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function v() {
  }
  v.prototype = D.prototype;
  function u(k, M, xe) {
    this.props = k, this.context = M, this.refs = Q, this.updater = xe || Re;
  }
  var h = u.prototype = new v();
  h.constructor = u, ke(h, D.prototype), h.isPureReactComponent = !0;
  var f = Array.isArray, p = Object.prototype.hasOwnProperty, y = { current: null }, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function I(k, M, xe) {
    var _e, Pe = {}, De = null, We = null;
    if (M != null) for (_e in M.ref !== void 0 && (We = M.ref), M.key !== void 0 && (De = "" + M.key), M) p.call(M, _e) && !C.hasOwnProperty(_e) && (Pe[_e] = M[_e]);
    var K = arguments.length - 2;
    if (K === 1) Pe.children = xe;
    else if (1 < K) {
      for (var fe = Array(K), Ce = 0; Ce < K; Ce++) fe[Ce] = arguments[Ce + 2];
      Pe.children = fe;
    }
    if (k && k.defaultProps) for (_e in K = k.defaultProps, K) Pe[_e] === void 0 && (Pe[_e] = K[_e]);
    return { $$typeof: a, type: k, key: De, ref: We, props: Pe, _owner: y.current };
  }
  function F(k, M) {
    return { $$typeof: a, type: k.type, key: M, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function ne(k) {
    return typeof k == "object" && k !== null && k.$$typeof === a;
  }
  function ue(k) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(xe) {
      return M[xe];
    });
  }
  var ae = /\/+/g;
  function oe(k, M) {
    return typeof k == "object" && k !== null && k.key != null ? ue("" + k.key) : M.toString(36);
  }
  function ye(k, M, xe, _e, Pe) {
    var De = typeof k;
    (De === "undefined" || De === "boolean") && (k = null);
    var We = !1;
    if (k === null) We = !0;
    else switch (De) {
      case "string":
      case "number":
        We = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case a:
          case c:
            We = !0;
        }
    }
    if (We) return We = k, Pe = Pe(We), k = _e === "" ? "." + oe(We, 0) : _e, f(Pe) ? (xe = "", k != null && (xe = k.replace(ae, "$&/") + "/"), ye(Pe, M, xe, "", function(Ce) {
      return Ce;
    })) : Pe != null && (ne(Pe) && (Pe = F(Pe, xe + (!Pe.key || We && We.key === Pe.key ? "" : ("" + Pe.key).replace(ae, "$&/") + "/") + k)), M.push(Pe)), 1;
    if (We = 0, _e = _e === "" ? "." : _e + ":", f(k)) for (var K = 0; K < k.length; K++) {
      De = k[K];
      var fe = _e + oe(De, K);
      We += ye(De, M, xe, fe, Pe);
    }
    else if (fe = B(k), typeof fe == "function") for (k = fe.call(k), K = 0; !(De = k.next()).done; ) De = De.value, fe = _e + oe(De, K++), We += ye(De, M, xe, fe, Pe);
    else if (De === "object") throw M = String(k), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return We;
  }
  function $(k, M, xe) {
    if (k == null) return k;
    var _e = [], Pe = 0;
    return ye(k, _e, "", "", function(De) {
      return M.call(xe, De, Pe++);
    }), _e;
  }
  function re(k) {
    if (k._status === -1) {
      var M = k._result;
      M = M(), M.then(function(xe) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = xe);
      }, function(xe) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = xe);
      }), k._status === -1 && (k._status = 0, k._result = M);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var te = { current: null }, H = { transition: null }, le = { ReactCurrentDispatcher: te, ReactCurrentBatchConfig: H, ReactCurrentOwner: y };
  function Z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Te.Children = { map: $, forEach: function(k, M, xe) {
    $(k, function() {
      M.apply(this, arguments);
    }, xe);
  }, count: function(k) {
    var M = 0;
    return $(k, function() {
      M++;
    }), M;
  }, toArray: function(k) {
    return $(k, function(M) {
      return M;
    }) || [];
  }, only: function(k) {
    if (!ne(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Te.Component = D, Te.Fragment = l, Te.Profiler = E, Te.PureComponent = u, Te.StrictMode = d, Te.Suspense = N, Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, Te.act = Z, Te.cloneElement = function(k, M, xe) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var _e = ke({}, k.props), Pe = k.key, De = k.ref, We = k._owner;
    if (M != null) {
      if (M.ref !== void 0 && (De = M.ref, We = y.current), M.key !== void 0 && (Pe = "" + M.key), k.type && k.type.defaultProps) var K = k.type.defaultProps;
      for (fe in M) p.call(M, fe) && !C.hasOwnProperty(fe) && (_e[fe] = M[fe] === void 0 && K !== void 0 ? K[fe] : M[fe]);
    }
    var fe = arguments.length - 2;
    if (fe === 1) _e.children = xe;
    else if (1 < fe) {
      K = Array(fe);
      for (var Ce = 0; Ce < fe; Ce++) K[Ce] = arguments[Ce + 2];
      _e.children = K;
    }
    return { $$typeof: a, type: k.type, key: Pe, ref: De, props: _e, _owner: We };
  }, Te.createContext = function(k) {
    return k = { $$typeof: L, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: b, _context: k }, k.Consumer = k;
  }, Te.createElement = I, Te.createFactory = function(k) {
    var M = I.bind(null, k);
    return M.type = k, M;
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(k) {
    return { $$typeof: V, render: k };
  }, Te.isValidElement = ne, Te.lazy = function(k) {
    return { $$typeof: Y, _payload: { _status: -1, _result: k }, _init: re };
  }, Te.memo = function(k, M) {
    return { $$typeof: W, type: k, compare: M === void 0 ? null : M };
  }, Te.startTransition = function(k) {
    var M = H.transition;
    H.transition = {};
    try {
      k();
    } finally {
      H.transition = M;
    }
  }, Te.unstable_act = Z, Te.useCallback = function(k, M) {
    return te.current.useCallback(k, M);
  }, Te.useContext = function(k) {
    return te.current.useContext(k);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(k) {
    return te.current.useDeferredValue(k);
  }, Te.useEffect = function(k, M) {
    return te.current.useEffect(k, M);
  }, Te.useId = function() {
    return te.current.useId();
  }, Te.useImperativeHandle = function(k, M, xe) {
    return te.current.useImperativeHandle(k, M, xe);
  }, Te.useInsertionEffect = function(k, M) {
    return te.current.useInsertionEffect(k, M);
  }, Te.useLayoutEffect = function(k, M) {
    return te.current.useLayoutEffect(k, M);
  }, Te.useMemo = function(k, M) {
    return te.current.useMemo(k, M);
  }, Te.useReducer = function(k, M, xe) {
    return te.current.useReducer(k, M, xe);
  }, Te.useRef = function(k) {
    return te.current.useRef(k);
  }, Te.useState = function(k) {
    return te.current.useState(k);
  }, Te.useSyncExternalStore = function(k, M, xe) {
    return te.current.useSyncExternalStore(k, M, xe);
  }, Te.useTransition = function() {
    return te.current.useTransition();
  }, Te.version = "18.3.1", Te;
}
var pc;
function Ot() {
  return pc || (pc = 1, ys.exports = rp()), ys.exports;
}
var vs = { exports: {} }, xs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hc;
function ip() {
  return hc || (hc = 1, function(a) {
    function c(H, le) {
      var Z = H.length;
      H.push(le);
      e: for (; 0 < Z; ) {
        var k = Z - 1 >>> 1, M = H[k];
        if (0 < E(M, le)) H[k] = le, H[Z] = M, Z = k;
        else break e;
      }
    }
    function l(H) {
      return H.length === 0 ? null : H[0];
    }
    function d(H) {
      if (H.length === 0) return null;
      var le = H[0], Z = H.pop();
      if (Z !== le) {
        H[0] = Z;
        e: for (var k = 0, M = H.length, xe = M >>> 1; k < xe; ) {
          var _e = 2 * (k + 1) - 1, Pe = H[_e], De = _e + 1, We = H[De];
          if (0 > E(Pe, Z)) De < M && 0 > E(We, Pe) ? (H[k] = We, H[De] = Z, k = De) : (H[k] = Pe, H[_e] = Z, k = _e);
          else if (De < M && 0 > E(We, Z)) H[k] = We, H[De] = Z, k = De;
          else break e;
        }
      }
      return le;
    }
    function E(H, le) {
      var Z = H.sortIndex - le.sortIndex;
      return Z !== 0 ? Z : H.id - le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var b = performance;
      a.unstable_now = function() {
        return b.now();
      };
    } else {
      var L = Date, V = L.now();
      a.unstable_now = function() {
        return L.now() - V;
      };
    }
    var N = [], W = [], Y = 1, q = null, B = 3, Re = !1, ke = !1, Q = !1, D = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(H) {
      for (var le = l(W); le !== null; ) {
        if (le.callback === null) d(W);
        else if (le.startTime <= H) d(W), le.sortIndex = le.expirationTime, c(N, le);
        else break;
        le = l(W);
      }
    }
    function f(H) {
      if (Q = !1, h(H), !ke) if (l(N) !== null) ke = !0, re(p);
      else {
        var le = l(W);
        le !== null && te(f, le.startTime - H);
      }
    }
    function p(H, le) {
      ke = !1, Q && (Q = !1, v(I), I = -1), Re = !0;
      var Z = B;
      try {
        for (h(le), q = l(N); q !== null && (!(q.expirationTime > le) || H && !ue()); ) {
          var k = q.callback;
          if (typeof k == "function") {
            q.callback = null, B = q.priorityLevel;
            var M = k(q.expirationTime <= le);
            le = a.unstable_now(), typeof M == "function" ? q.callback = M : q === l(N) && d(N), h(le);
          } else d(N);
          q = l(N);
        }
        if (q !== null) var xe = !0;
        else {
          var _e = l(W);
          _e !== null && te(f, _e.startTime - le), xe = !1;
        }
        return xe;
      } finally {
        q = null, B = Z, Re = !1;
      }
    }
    var y = !1, C = null, I = -1, F = 5, ne = -1;
    function ue() {
      return !(a.unstable_now() - ne < F);
    }
    function ae() {
      if (C !== null) {
        var H = a.unstable_now();
        ne = H;
        var le = !0;
        try {
          le = C(!0, H);
        } finally {
          le ? oe() : (y = !1, C = null);
        }
      } else y = !1;
    }
    var oe;
    if (typeof u == "function") oe = function() {
      u(ae);
    };
    else if (typeof MessageChannel < "u") {
      var ye = new MessageChannel(), $ = ye.port2;
      ye.port1.onmessage = ae, oe = function() {
        $.postMessage(null);
      };
    } else oe = function() {
      D(ae, 0);
    };
    function re(H) {
      C = H, y || (y = !0, oe());
    }
    function te(H, le) {
      I = D(function() {
        H(a.unstable_now());
      }, le);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, a.unstable_continueExecution = function() {
      ke || Re || (ke = !0, re(p));
    }, a.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < H ? Math.floor(1e3 / H) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, a.unstable_getFirstCallbackNode = function() {
      return l(N);
    }, a.unstable_next = function(H) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var le = 3;
          break;
        default:
          le = B;
      }
      var Z = B;
      B = le;
      try {
        return H();
      } finally {
        B = Z;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(H, le) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var Z = B;
      B = H;
      try {
        return le();
      } finally {
        B = Z;
      }
    }, a.unstable_scheduleCallback = function(H, le, Z) {
      var k = a.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? k + Z : k) : Z = k, H) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = Z + M, H = { id: Y++, callback: le, priorityLevel: H, startTime: Z, expirationTime: M, sortIndex: -1 }, Z > k ? (H.sortIndex = Z, c(W, H), l(N) === null && H === l(W) && (Q ? (v(I), I = -1) : Q = !0, te(f, Z - k))) : (H.sortIndex = M, c(N, H), ke || Re || (ke = !0, re(p))), H;
    }, a.unstable_shouldYield = ue, a.unstable_wrapCallback = function(H) {
      var le = B;
      return function() {
        var Z = B;
        B = le;
        try {
          return H.apply(this, arguments);
        } finally {
          B = Z;
        }
      };
    };
  }(xs)), xs;
}
var gc;
function op() {
  return gc || (gc = 1, vs.exports = ip()), vs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function lp() {
  if (mc) return Ct;
  mc = 1;
  var a = Ot(), c = op();
  function l(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var d = /* @__PURE__ */ new Set(), E = {};
  function b(e, t) {
    L(e, t), L(e + "Capture", t);
  }
  function L(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var V = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, q = {};
  function B(e) {
    return N.call(q, e) ? !0 : N.call(Y, e) ? !1 : W.test(e) ? q[e] = !0 : (Y[e] = !0, !1);
  }
  function Re(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ke(e, t, n, r) {
    if (t === null || typeof t > "u" || Re(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function Q(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new Q(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new Q(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new Q(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new Q(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new Q(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new Q(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var v = /[\-:]([a-z])/g;
  function u(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      v,
      u
    );
    D[t] = new Q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(v, u);
    D[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(v, u);
    D[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = D.hasOwnProperty(t) ? D[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ke(t, n, i, r) && (n = null), r || i === null ? B(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = Symbol.for("react.element"), y = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), ue = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), H = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = H && e[H] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Z = Object.assign, k;
  function M(e) {
    if (k === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      k = t && t[1] || "";
    }
    return `
` + k + e;
  }
  var xe = !1;
  function _e(e, t) {
    if (!e || xe) return "";
    xe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (T) {
          var r = T;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (T) {
          r = T;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (T) {
          r = T;
        }
        e();
      }
    } catch (T) {
      if (T && r && typeof T.stack == "string") {
        for (var i = T.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, g = o.length - 1; 1 <= s && 0 <= g && i[s] !== o[g]; ) g--;
        for (; 1 <= s && 0 <= g; s--, g--) if (i[s] !== o[g]) {
          if (s !== 1 || g !== 1)
            do
              if (s--, g--, 0 > g || i[s] !== o[g]) {
                var w = `
` + i[s].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= s && 0 <= g);
          break;
        }
      }
    } finally {
      xe = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function Pe(e) {
    switch (e.tag) {
      case 5:
        return M(e.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = _e(e.type, !1), e;
      case 11:
        return e = _e(e.type.render, !1), e;
      case 1:
        return e = _e(e.type, !0), e;
      default:
        return "";
    }
  }
  function De(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case y:
        return "Portal";
      case F:
        return "Profiler";
      case I:
        return "StrictMode";
      case oe:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ue:
        return (e.displayName || "Context") + ".Consumer";
      case ne:
        return (e._context.displayName || "Context") + ".Provider";
      case ae:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case $:
        return t = e.displayName || null, t !== null ? t : De(e.type) || "Memo";
      case re:
        t = e._payload, e = e._init;
        try {
          return De(e(t));
        } catch {
        }
    }
    return null;
  }
  function We(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return De(t);
      case 8:
        return t === I ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function K(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ce(e) {
    var t = fe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(s) {
        r = "" + s, o.call(this, s);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(s) {
        r = "" + s;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function je(e) {
    e._valueTracker || (e._valueTracker = Ce(e));
  }
  function Ne(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = fe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Fe(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ve(e, t) {
    var n = t.checked;
    return Z({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function nt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = K(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function S(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function R(e, t) {
    S(e, t);
    var n = K(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? U(e, t.type, n) : t.hasOwnProperty("defaultValue") && U(e, t.type, K(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function O(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function U(e, t, n) {
    (t !== "number" || Fe(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var se = Array.isArray;
  function me(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + K(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ee(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return Z({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function ze(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(l(92));
        if (se(n)) {
          if (1 < n.length) throw Error(l(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: K(n) };
  }
  function be(e, t) {
    var n = K(t.value), r = K(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function qe(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Qe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function at(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Qe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var m, z = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (m = m || document.createElement("div"), m.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = m.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function A(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(e) {
    ce.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), ee[t] = ee[e];
    });
  });
  function Me(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ee.hasOwnProperty(e) && ee[e] ? ("" + t).trim() : t + "px";
  }
  function Le(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Me(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Ke = Z({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function dt(e, t) {
    if (t) {
      if (Ke[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(l(62));
    }
  }
  function Wt(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var $t = null;
  function Dn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gn = null, bn = null, Zt = null;
  function xr(e) {
    if (e = Br(e)) {
      if (typeof Gn != "function") throw Error(l(280));
      var t = e.stateNode;
      t && (t = Ii(t), Gn(e.stateNode, e.type, t));
    }
  }
  function wr(e) {
    bn ? Zt ? Zt.push(e) : Zt = [e] : bn = e;
  }
  function Yn() {
    if (bn) {
      var e = bn, t = Zt;
      if (Zt = bn = null, xr(e), t) for (e = 0; e < t.length; e++) xr(t[e]);
    }
  }
  function hi(e, t) {
    return e(t);
  }
  function Ts() {
  }
  var To = !1;
  function Ns(e, t, n) {
    if (To) return e(t, n);
    To = !0;
    try {
      return hi(e, t, n);
    } finally {
      To = !1, (bn !== null || Zt !== null) && (Ts(), Yn());
    }
  }
  function Sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ii(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(l(231, t, typeof n));
    return n;
  }
  var No = !1;
  if (V) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      No = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    No = !1;
  }
  function sf(e, t, n, r, i, o, s, g, w) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, T);
    } catch (X) {
      this.onError(X);
    }
  }
  var _r = !1, gi = null, mi = !1, Mo = null, af = { onError: function(e) {
    _r = !0, gi = e;
  } };
  function uf(e, t, n, r, i, o, s, g, w) {
    _r = !1, gi = null, sf.apply(af, arguments);
  }
  function cf(e, t, n, r, i, o, s, g, w) {
    if (uf.apply(this, arguments), _r) {
      if (_r) {
        var T = gi;
        _r = !1, gi = null;
      } else throw Error(l(198));
      mi || (mi = !0, Mo = T);
    }
  }
  function Tn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ms(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ls(e) {
    if (Tn(e) !== e) throw Error(l(188));
  }
  function ff(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === n) return Ls(i), e;
          if (o === r) return Ls(i), t;
          o = o.sibling;
        }
        throw Error(l(188));
      }
      if (n.return !== r.return) n = i, r = o;
      else {
        for (var s = !1, g = i.child; g; ) {
          if (g === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (g === r) {
            s = !0, r = i, n = o;
            break;
          }
          g = g.sibling;
        }
        if (!s) {
          for (g = o.child; g; ) {
            if (g === n) {
              s = !0, n = o, r = i;
              break;
            }
            if (g === r) {
              s = !0, r = o, n = i;
              break;
            }
            g = g.sibling;
          }
          if (!s) throw Error(l(189));
        }
      }
      if (n.alternate !== r) throw Error(l(190));
    }
    if (n.tag !== 3) throw Error(l(188));
    return n.stateNode.current === n ? e : t;
  }
  function Is(e) {
    return e = ff(e), e !== null ? Ws(e) : null;
  }
  function Ws(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ws(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var As = c.unstable_scheduleCallback, Hs = c.unstable_cancelCallback, df = c.unstable_shouldYield, pf = c.unstable_requestPaint, rt = c.unstable_now, hf = c.unstable_getCurrentPriorityLevel, Lo = c.unstable_ImmediatePriority, Fs = c.unstable_UserBlockingPriority, yi = c.unstable_NormalPriority, gf = c.unstable_LowPriority, Bs = c.unstable_IdlePriority, vi = null, Gt = null;
  function mf(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : xf, yf = Math.log, vf = Math.LN2;
  function xf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yf(e) / vf | 0) | 0;
  }
  var xi = 64, wi = 4194304;
  function Er(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Si(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
      var g = s & ~i;
      g !== 0 ? r = Er(g) : (o &= s, o !== 0 && (r = Er(o)));
    } else s = n & ~i, s !== 0 ? r = Er(s) : o !== 0 && (r = Er(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - At(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function wf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var s = 31 - At(o), g = 1 << s, w = i[s];
      w === -1 ? (!(g & n) || g & r) && (i[s] = wf(g, t)) : w <= t && (e.expiredLanes |= g), o &= ~g;
    }
  }
  function Io(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Us() {
    var e = xi;
    return xi <<= 1, !(xi & 4194240) && (xi = 64), e;
  }
  function Wo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Rr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - At(t), e[t] = n;
  }
  function kf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - At(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Ao(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - At(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Ue = 0;
  function qs(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Vs, Ho, $s, Gs, Ys, Fo = !1, ki = [], fn = null, dn = null, pn = null, Cr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), hn = [], _f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Xs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fn = null;
        break;
      case "dragenter":
      case "dragleave":
        dn = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Or.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && Ho(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Ef(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return fn = Pr(fn, e, t, n, r, i), !0;
      case "dragenter":
        return dn = Pr(dn, e, t, n, r, i), !0;
      case "mouseover":
        return pn = Pr(pn, e, t, n, r, i), !0;
      case "pointerover":
        var o = i.pointerId;
        return Cr.set(o, Pr(Cr.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Or.set(o, Pr(Or.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Qs(e) {
    var t = Nn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ms(n), t !== null) {
            e.blockedOn = t, Ys(e.priority, function() {
              $s(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function _i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Uo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $t = r, n.target.dispatchEvent(r), $t = null;
      } else return t = Br(n), t !== null && Ho(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ks(e, t, n) {
    _i(e) && n.delete(t);
  }
  function Rf() {
    Fo = !1, fn !== null && _i(fn) && (fn = null), dn !== null && _i(dn) && (dn = null), pn !== null && _i(pn) && (pn = null), Cr.forEach(Ks), Or.forEach(Ks);
  }
  function zr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Rf)));
  }
  function jr(e) {
    function t(i) {
      return zr(i, e);
    }
    if (0 < ki.length) {
      zr(ki[0], e);
      for (var n = 1; n < ki.length; n++) {
        var r = ki[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && zr(fn, e), dn !== null && zr(dn, e), pn !== null && zr(pn, e), Cr.forEach(t), Or.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Qs(n), n.blockedOn === null && hn.shift();
  }
  var Xn = f.ReactCurrentBatchConfig, Ei = !0;
  function Cf(e, t, n, r) {
    var i = Ue, o = Xn.transition;
    Xn.transition = null;
    try {
      Ue = 1, Bo(e, t, n, r);
    } finally {
      Ue = i, Xn.transition = o;
    }
  }
  function Of(e, t, n, r) {
    var i = Ue, o = Xn.transition;
    Xn.transition = null;
    try {
      Ue = 4, Bo(e, t, n, r);
    } finally {
      Ue = i, Xn.transition = o;
    }
  }
  function Bo(e, t, n, r) {
    if (Ei) {
      var i = Uo(e, t, n, r);
      if (i === null) ll(e, t, r, Ri, n), Xs(e, r);
      else if (Ef(i, e, t, n, r)) r.stopPropagation();
      else if (Xs(e, r), t & 4 && -1 < _f.indexOf(e)) {
        for (; i !== null; ) {
          var o = Br(i);
          if (o !== null && Vs(o), o = Uo(e, t, n, r), o === null && ll(e, t, r, Ri, n), o === i) break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else ll(e, t, r, null, n);
    }
  }
  var Ri = null;
  function Uo(e, t, n, r) {
    if (Ri = null, e = Dn(r), e = Nn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ms(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Ri = e, null;
  }
  function Zs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hf()) {
          case Lo:
            return 1;
          case Fs:
            return 4;
          case yi:
          case gf:
            return 16;
          case Bs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var gn = null, qo = null, Ci = null;
  function Js() {
    if (Ci) return Ci;
    var e, t = qo, n = t.length, r, i = "value" in gn ? gn.value : gn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
    return Ci = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Oi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Pi() {
    return !0;
  }
  function ea() {
    return !1;
  }
  function Pt(e) {
    function t(n, r, i, o, s) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var g in e) e.hasOwnProperty(g) && (n = e[g], this[g] = n ? n(o) : o[g]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pi : ea, this.isPropagationStopped = ea, this;
    }
    return Z(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pi);
    }, persist: function() {
    }, isPersistent: Pi }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Vo = Pt(Qn), Dr = Z({}, Qn, { view: 0, detail: 0 }), Pf = Pt(Dr), $o, Go, br, zi = Z({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== br && (br && e.type === "mousemove" ? ($o = e.screenX - br.screenX, Go = e.screenY - br.screenY) : Go = $o = 0, br = e), $o);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Go;
  } }), ta = Pt(zi), zf = Z({}, zi, { dataTransfer: 0 }), jf = Pt(zf), Df = Z({}, Dr, { relatedTarget: 0 }), Yo = Pt(Df), bf = Z({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tf = Pt(bf), Nf = Z({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Mf = Pt(Nf), Lf = Z({}, Qn, { data: 0 }), na = Pt(Lf), If = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Wf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Af = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Af[e]) ? !!t[e] : !1;
  }
  function Xo() {
    return Hf;
  }
  var Ff = Z({}, Dr, { key: function(e) {
    if (e.key) {
      var t = If[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xo, charCode: function(e) {
    return e.type === "keypress" ? Oi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Bf = Pt(Ff), Uf = Z({}, zi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ra = Pt(Uf), qf = Z({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xo }), Vf = Pt(qf), $f = Z({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = Pt($f), Yf = Z({}, zi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xf = Pt(Yf), Qf = [9, 13, 27, 32], Qo = V && "CompositionEvent" in window, Tr = null;
  V && "documentMode" in document && (Tr = document.documentMode);
  var Kf = V && "TextEvent" in window && !Tr, ia = V && (!Qo || Tr && 8 < Tr && 11 >= Tr), oa = " ", la = !1;
  function sa(e, t) {
    switch (e) {
      case "keyup":
        return Qf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function aa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Kn = !1;
  function Zf(e, t) {
    switch (e) {
      case "compositionend":
        return aa(t);
      case "keypress":
        return t.which !== 32 ? null : (la = !0, oa);
      case "textInput":
        return e = t.data, e === oa && la ? null : e;
      default:
        return null;
    }
  }
  function Jf(e, t) {
    if (Kn) return e === "compositionend" || !Qo && sa(e, t) ? (e = Js(), Ci = qo = gn = null, Kn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ia && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ed = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ua(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ed[e.type] : t === "textarea";
  }
  function ca(e, t, n, r) {
    wr(r), t = Ni(t, "onChange"), 0 < t.length && (n = new Vo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Nr = null, Mr = null;
  function td(e) {
    Pa(e, 0);
  }
  function ji(e) {
    var t = nr(e);
    if (Ne(t)) return e;
  }
  function nd(e, t) {
    if (e === "change") return t;
  }
  var fa = !1;
  if (V) {
    var Ko;
    if (V) {
      var Zo = "oninput" in document;
      if (!Zo) {
        var da = document.createElement("div");
        da.setAttribute("oninput", "return;"), Zo = typeof da.oninput == "function";
      }
      Ko = Zo;
    } else Ko = !1;
    fa = Ko && (!document.documentMode || 9 < document.documentMode);
  }
  function pa() {
    Nr && (Nr.detachEvent("onpropertychange", ha), Mr = Nr = null);
  }
  function ha(e) {
    if (e.propertyName === "value" && ji(Mr)) {
      var t = [];
      ca(t, Mr, e, Dn(e)), Ns(td, t);
    }
  }
  function rd(e, t, n) {
    e === "focusin" ? (pa(), Nr = t, Mr = n, Nr.attachEvent("onpropertychange", ha)) : e === "focusout" && pa();
  }
  function id(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ji(Mr);
  }
  function od(e, t) {
    if (e === "click") return ji(t);
  }
  function ld(e, t) {
    if (e === "input" || e === "change") return ji(t);
  }
  function sd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ht = typeof Object.is == "function" ? Object.is : sd;
  function Lr(e, t) {
    if (Ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!N.call(t, i) || !Ht(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ga(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ma(e, t) {
    var n = ga(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ga(n);
    }
  }
  function ya(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ya(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function va() {
    for (var e = window, t = Fe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fe(e.document);
    }
    return t;
  }
  function Jo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ad(e) {
    var t = va(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ya(n.ownerDocument.documentElement, n)) {
      if (r !== null && Jo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ma(n, o);
          var s = ma(
            n,
            r
          );
          i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ud = V && "documentMode" in document && 11 >= document.documentMode, Zn = null, el = null, Ir = null, tl = !1;
  function xa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tl || Zn == null || Zn !== Fe(r) || (r = Zn, "selectionStart" in r && Jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && Lr(Ir, r) || (Ir = r, r = Ni(el, "onSelect"), 0 < r.length && (t = new Vo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Di("Animation", "AnimationEnd"), animationiteration: Di("Animation", "AnimationIteration"), animationstart: Di("Animation", "AnimationStart"), transitionend: Di("Transition", "TransitionEnd") }, nl = {}, wa = {};
  V && (wa = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function bi(e) {
    if (nl[e]) return nl[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in wa) return nl[e] = t[n];
    return e;
  }
  var Sa = bi("animationend"), ka = bi("animationiteration"), _a = bi("animationstart"), Ea = bi("transitionend"), Ra = /* @__PURE__ */ new Map(), Ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mn(e, t) {
    Ra.set(e, t), b(t, [e]);
  }
  for (var rl = 0; rl < Ca.length; rl++) {
    var il = Ca[rl], cd = il.toLowerCase(), fd = il[0].toUpperCase() + il.slice(1);
    mn(cd, "on" + fd);
  }
  mn(Sa, "onAnimationEnd"), mn(ka, "onAnimationIteration"), mn(_a, "onAnimationStart"), mn("dblclick", "onDoubleClick"), mn("focusin", "onFocus"), mn("focusout", "onBlur"), mn(Ea, "onTransitionEnd"), L("onMouseEnter", ["mouseout", "mouseover"]), L("onMouseLeave", ["mouseout", "mouseover"]), L("onPointerEnter", ["pointerout", "pointerover"]), L("onPointerLeave", ["pointerout", "pointerover"]), b("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), b("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), b("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), b("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), b("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
  function Oa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, cf(r, t, void 0, e), e.currentTarget = null;
  }
  function Pa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var s = r.length - 1; 0 <= s; s--) {
          var g = r[s], w = g.instance, T = g.currentTarget;
          if (g = g.listener, w !== o && i.isPropagationStopped()) break e;
          Oa(i, g, T), o = w;
        }
        else for (s = 0; s < r.length; s++) {
          if (g = r[s], w = g.instance, T = g.currentTarget, g = g.listener, w !== o && i.isPropagationStopped()) break e;
          Oa(i, g, T), o = w;
        }
      }
    }
    if (mi) throw e = Mo, mi = !1, Mo = null, e;
  }
  function Ge(e, t) {
    var n = t[dl];
    n === void 0 && (n = t[dl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (za(t, e, 2, !1), n.add(r));
  }
  function ol(e, t, n) {
    var r = 0;
    t && (r |= 4), za(n, e, r, t);
  }
  var Ti = "_reactListening" + Math.random().toString(36).slice(2);
  function Ar(e) {
    if (!e[Ti]) {
      e[Ti] = !0, d.forEach(function(n) {
        n !== "selectionchange" && (dd.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ti] || (t[Ti] = !0, ol("selectionchange", !1, t));
    }
  }
  function za(e, t, n, r) {
    switch (Zs(t)) {
      case 1:
        var i = Cf;
        break;
      case 4:
        i = Of;
        break;
      default:
        i = Bo;
    }
    n = i.bind(null, t, n, e), i = void 0, !No || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function ll(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var g = r.stateNode.containerInfo;
        if (g === i || g.nodeType === 8 && g.parentNode === i) break;
        if (s === 4) for (s = r.return; s !== null; ) {
          var w = s.tag;
          if ((w === 3 || w === 4) && (w = s.stateNode.containerInfo, w === i || w.nodeType === 8 && w.parentNode === i)) return;
          s = s.return;
        }
        for (; g !== null; ) {
          if (s = Nn(g), s === null) return;
          if (w = s.tag, w === 5 || w === 6) {
            r = o = s;
            continue e;
          }
          g = g.parentNode;
        }
      }
      r = r.return;
    }
    Ns(function() {
      var T = o, X = Dn(n), J = [];
      e: {
        var G = Ra.get(e);
        if (G !== void 0) {
          var de = Vo, he = e;
          switch (e) {
            case "keypress":
              if (Oi(n) === 0) break e;
            case "keydown":
            case "keyup":
              de = Bf;
              break;
            case "focusin":
              he = "focus", de = Yo;
              break;
            case "focusout":
              he = "blur", de = Yo;
              break;
            case "beforeblur":
            case "afterblur":
              de = Yo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              de = ta;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              de = jf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              de = Vf;
              break;
            case Sa:
            case ka:
            case _a:
              de = Tf;
              break;
            case Ea:
              de = Gf;
              break;
            case "scroll":
              de = Pf;
              break;
            case "wheel":
              de = Xf;
              break;
            case "copy":
            case "cut":
            case "paste":
              de = Mf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              de = ra;
          }
          var ge = (t & 4) !== 0, it = !ge && e === "scroll", P = ge ? G !== null ? G + "Capture" : null : G;
          ge = [];
          for (var _ = T, j; _ !== null; ) {
            j = _;
            var ie = j.stateNode;
            if (j.tag === 5 && ie !== null && (j = ie, P !== null && (ie = Sr(_, P), ie != null && ge.push(Hr(_, ie, j)))), it) break;
            _ = _.return;
          }
          0 < ge.length && (G = new de(G, he, null, n, X), J.push({ event: G, listeners: ge }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", de = e === "mouseout" || e === "pointerout", G && n !== $t && (he = n.relatedTarget || n.fromElement) && (Nn(he) || he[Jt])) break e;
          if ((de || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, de ? (he = n.relatedTarget || n.toElement, de = T, he = he ? Nn(he) : null, he !== null && (it = Tn(he), he !== it || he.tag !== 5 && he.tag !== 6) && (he = null)) : (de = null, he = T), de !== he)) {
            if (ge = ta, ie = "onMouseLeave", P = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ge = ra, ie = "onPointerLeave", P = "onPointerEnter", _ = "pointer"), it = de == null ? G : nr(de), j = he == null ? G : nr(he), G = new ge(ie, _ + "leave", de, n, X), G.target = it, G.relatedTarget = j, ie = null, Nn(X) === T && (ge = new ge(P, _ + "enter", he, n, X), ge.target = j, ge.relatedTarget = it, ie = ge), it = ie, de && he) t: {
              for (ge = de, P = he, _ = 0, j = ge; j; j = er(j)) _++;
              for (j = 0, ie = P; ie; ie = er(ie)) j++;
              for (; 0 < _ - j; ) ge = er(ge), _--;
              for (; 0 < j - _; ) P = er(P), j--;
              for (; _--; ) {
                if (ge === P || P !== null && ge === P.alternate) break t;
                ge = er(ge), P = er(P);
              }
              ge = null;
            }
            else ge = null;
            de !== null && ja(J, G, de, ge, !1), he !== null && it !== null && ja(J, it, he, ge, !0);
          }
        }
        e: {
          if (G = T ? nr(T) : window, de = G.nodeName && G.nodeName.toLowerCase(), de === "select" || de === "input" && G.type === "file") var ve = nd;
          else if (ua(G)) if (fa) ve = ld;
          else {
            ve = id;
            var we = rd;
          }
          else (de = G.nodeName) && de.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (ve = od);
          if (ve && (ve = ve(e, T))) {
            ca(J, ve, n, X);
            break e;
          }
          we && we(e, G, T), e === "focusout" && (we = G._wrapperState) && we.controlled && G.type === "number" && U(G, "number", G.value);
        }
        switch (we = T ? nr(T) : window, e) {
          case "focusin":
            (ua(we) || we.contentEditable === "true") && (Zn = we, el = T, Ir = null);
            break;
          case "focusout":
            Ir = el = Zn = null;
            break;
          case "mousedown":
            tl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tl = !1, xa(J, n, X);
            break;
          case "selectionchange":
            if (ud) break;
          case "keydown":
          case "keyup":
            xa(J, n, X);
        }
        var Se;
        if (Qo) e: {
          switch (e) {
            case "compositionstart":
              var Oe = "onCompositionStart";
              break e;
            case "compositionend":
              Oe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Oe = "onCompositionUpdate";
              break e;
          }
          Oe = void 0;
        }
        else Kn ? sa(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
        Oe && (ia && n.locale !== "ko" && (Kn || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Kn && (Se = Js()) : (gn = X, qo = "value" in gn ? gn.value : gn.textContent, Kn = !0)), we = Ni(T, Oe), 0 < we.length && (Oe = new na(Oe, e, null, n, X), J.push({ event: Oe, listeners: we }), Se ? Oe.data = Se : (Se = aa(n), Se !== null && (Oe.data = Se)))), (Se = Kf ? Zf(e, n) : Jf(e, n)) && (T = Ni(T, "onBeforeInput"), 0 < T.length && (X = new na("onBeforeInput", "beforeinput", null, n, X), J.push({ event: X, listeners: T }), X.data = Se));
      }
      Pa(J, t);
    });
  }
  function Hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ni(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = Sr(e, n), o != null && r.unshift(Hr(e, o, i)), o = Sr(e, t), o != null && r.push(Hr(e, o, i))), e = e.return;
    }
    return r;
  }
  function er(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ja(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
      var g = n, w = g.alternate, T = g.stateNode;
      if (w !== null && w === r) break;
      g.tag === 5 && T !== null && (g = T, i ? (w = Sr(n, o), w != null && s.unshift(Hr(n, w, g))) : i || (w = Sr(n, o), w != null && s.push(Hr(n, w, g)))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var pd = /\r\n?/g, hd = /\u0000|\uFFFD/g;
  function Da(e) {
    return (typeof e == "string" ? e : "" + e).replace(pd, `
`).replace(hd, "");
  }
  function Mi(e, t, n) {
    if (t = Da(t), Da(e) !== t && n) throw Error(l(425));
  }
  function Li() {
  }
  var sl = null, al = null;
  function ul(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, gd = typeof clearTimeout == "function" ? clearTimeout : void 0, ba = typeof Promise == "function" ? Promise : void 0, md = typeof queueMicrotask == "function" ? queueMicrotask : typeof ba < "u" ? function(e) {
    return ba.resolve(null).then(e).catch(yd);
  } : cl;
  function yd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function fl(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), jr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    jr(t);
  }
  function yn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ta(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Fr = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, dl = "__reactEvents$" + tr, vd = "__reactListeners$" + tr, xd = "__reactHandles$" + tr;
  function Nn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jt] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ta(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = Ta(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Br(e) {
    return e = e[Yt] || e[Jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function nr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ii(e) {
    return e[Fr] || null;
  }
  var pl = [], rr = -1;
  function vn(e) {
    return { current: e };
  }
  function Ye(e) {
    0 > rr || (e.current = pl[rr], pl[rr] = null, rr--);
  }
  function $e(e, t) {
    rr++, pl[rr] = e.current, e.current = t;
  }
  var xn = {}, gt = vn(xn), St = vn(!1), Mn = xn;
  function ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function kt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wi() {
    Ye(St), Ye(gt);
  }
  function Na(e, t, n) {
    if (gt.current !== xn) throw Error(l(168));
    $e(gt, t), $e(St, n);
  }
  function Ma(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(l(108, We(e) || "Unknown", i));
    return Z({}, n, r);
  }
  function Ai(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Mn = gt.current, $e(gt, e), $e(St, St.current), !0;
  }
  function La(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(l(169));
    n ? (e = Ma(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, Ye(St), Ye(gt), $e(gt, e)) : Ye(St), $e(St, n);
  }
  var en = null, Hi = !1, hl = !1;
  function Ia(e) {
    en === null ? en = [e] : en.push(e);
  }
  function wd(e) {
    Hi = !0, Ia(e);
  }
  function wn() {
    if (!hl && en !== null) {
      hl = !0;
      var e = 0, t = Ue;
      try {
        var n = en;
        for (Ue = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        en = null, Hi = !1;
      } catch (i) {
        throw en !== null && (en = en.slice(e + 1)), As(Lo, wn), i;
      } finally {
        Ue = t, hl = !1;
      }
    }
    return null;
  }
  var or = [], lr = 0, Fi = null, Bi = 0, bt = [], Tt = 0, Ln = null, tn = 1, nn = "";
  function In(e, t) {
    or[lr++] = Bi, or[lr++] = Fi, Fi = e, Bi = t;
  }
  function Wa(e, t, n) {
    bt[Tt++] = tn, bt[Tt++] = nn, bt[Tt++] = Ln, Ln = e;
    var r = tn;
    e = nn;
    var i = 32 - At(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - At(t) + i;
    if (30 < o) {
      var s = i - i % 5;
      o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, tn = 1 << 32 - At(t) + i | n << i | r, nn = o + e;
    } else tn = 1 << o | n << i | r, nn = e;
  }
  function gl(e) {
    e.return !== null && (In(e, 1), Wa(e, 1, 0));
  }
  function ml(e) {
    for (; e === Fi; ) Fi = or[--lr], or[lr] = null, Bi = or[--lr], or[lr] = null;
    for (; e === Ln; ) Ln = bt[--Tt], bt[Tt] = null, nn = bt[--Tt], bt[Tt] = null, tn = bt[--Tt], bt[Tt] = null;
  }
  var zt = null, jt = null, Ze = !1, Ft = null;
  function Aa(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ha(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, zt = e, jt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, zt = e, jt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, zt = e, jt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (Ze) {
      var t = jt;
      if (t) {
        var n = t;
        if (!Ha(e, t)) {
          if (yl(e)) throw Error(l(418));
          t = yn(n.nextSibling);
          var r = zt;
          t && Ha(e, t) ? Aa(r, n) : (e.flags = e.flags & -4097 | 2, Ze = !1, zt = e);
        }
      } else {
        if (yl(e)) throw Error(l(418));
        e.flags = e.flags & -4097 | 2, Ze = !1, zt = e;
      }
    }
  }
  function Fa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    zt = e;
  }
  function Ui(e) {
    if (e !== zt) return !1;
    if (!Ze) return Fa(e), Ze = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps)), t && (t = jt)) {
      if (yl(e)) throw Ba(), Error(l(418));
      for (; t; ) Aa(e, t), t = yn(t.nextSibling);
    }
    if (Fa(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                jt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        jt = null;
      }
    } else jt = zt ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    for (var e = jt; e; ) e = yn(e.nextSibling);
  }
  function sr() {
    jt = zt = null, Ze = !1;
  }
  function xl(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var Sd = f.ReactCurrentBatchConfig;
  function Ur(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(l(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(l(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
          var g = i.refs;
          s === null ? delete g[o] : g[o] = s;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(l(284));
      if (!n._owner) throw Error(l(290, e));
    }
    return e;
  }
  function qi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(l(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ua(e) {
    var t = e._init;
    return t(e._payload);
  }
  function qa(e) {
    function t(P, _) {
      if (e) {
        var j = P.deletions;
        j === null ? (P.deletions = [_], P.flags |= 16) : j.push(_);
      }
    }
    function n(P, _) {
      if (!e) return null;
      for (; _ !== null; ) t(P, _), _ = _.sibling;
      return null;
    }
    function r(P, _) {
      for (P = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? P.set(_.key, _) : P.set(_.index, _), _ = _.sibling;
      return P;
    }
    function i(P, _) {
      return P = Pn(P, _), P.index = 0, P.sibling = null, P;
    }
    function o(P, _, j) {
      return P.index = j, e ? (j = P.alternate, j !== null ? (j = j.index, j < _ ? (P.flags |= 2, _) : j) : (P.flags |= 2, _)) : (P.flags |= 1048576, _);
    }
    function s(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function g(P, _, j, ie) {
      return _ === null || _.tag !== 6 ? (_ = cs(j, P.mode, ie), _.return = P, _) : (_ = i(_, j), _.return = P, _);
    }
    function w(P, _, j, ie) {
      var ve = j.type;
      return ve === C ? X(P, _, j.props.children, ie, j.key) : _ !== null && (_.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === re && Ua(ve) === _.type) ? (ie = i(_, j.props), ie.ref = Ur(P, _, j), ie.return = P, ie) : (ie = go(j.type, j.key, j.props, null, P.mode, ie), ie.ref = Ur(P, _, j), ie.return = P, ie);
    }
    function T(P, _, j, ie) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== j.containerInfo || _.stateNode.implementation !== j.implementation ? (_ = fs(j, P.mode, ie), _.return = P, _) : (_ = i(_, j.children || []), _.return = P, _);
    }
    function X(P, _, j, ie, ve) {
      return _ === null || _.tag !== 7 ? (_ = Vn(j, P.mode, ie, ve), _.return = P, _) : (_ = i(_, j), _.return = P, _);
    }
    function J(P, _, j) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = cs("" + _, P.mode, j), _.return = P, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case p:
            return j = go(_.type, _.key, _.props, null, P.mode, j), j.ref = Ur(P, null, _), j.return = P, j;
          case y:
            return _ = fs(_, P.mode, j), _.return = P, _;
          case re:
            var ie = _._init;
            return J(P, ie(_._payload), j);
        }
        if (se(_) || le(_)) return _ = Vn(_, P.mode, j, null), _.return = P, _;
        qi(P, _);
      }
      return null;
    }
    function G(P, _, j, ie) {
      var ve = _ !== null ? _.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return ve !== null ? null : g(P, _, "" + j, ie);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case p:
            return j.key === ve ? w(P, _, j, ie) : null;
          case y:
            return j.key === ve ? T(P, _, j, ie) : null;
          case re:
            return ve = j._init, G(
              P,
              _,
              ve(j._payload),
              ie
            );
        }
        if (se(j) || le(j)) return ve !== null ? null : X(P, _, j, ie, null);
        qi(P, j);
      }
      return null;
    }
    function de(P, _, j, ie, ve) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number") return P = P.get(j) || null, g(_, P, "" + ie, ve);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case p:
            return P = P.get(ie.key === null ? j : ie.key) || null, w(_, P, ie, ve);
          case y:
            return P = P.get(ie.key === null ? j : ie.key) || null, T(_, P, ie, ve);
          case re:
            var we = ie._init;
            return de(P, _, j, we(ie._payload), ve);
        }
        if (se(ie) || le(ie)) return P = P.get(j) || null, X(_, P, ie, ve, null);
        qi(_, ie);
      }
      return null;
    }
    function he(P, _, j, ie) {
      for (var ve = null, we = null, Se = _, Oe = _ = 0, ft = null; Se !== null && Oe < j.length; Oe++) {
        Se.index > Oe ? (ft = Se, Se = null) : ft = Se.sibling;
        var He = G(P, Se, j[Oe], ie);
        if (He === null) {
          Se === null && (Se = ft);
          break;
        }
        e && Se && He.alternate === null && t(P, Se), _ = o(He, _, Oe), we === null ? ve = He : we.sibling = He, we = He, Se = ft;
      }
      if (Oe === j.length) return n(P, Se), Ze && In(P, Oe), ve;
      if (Se === null) {
        for (; Oe < j.length; Oe++) Se = J(P, j[Oe], ie), Se !== null && (_ = o(Se, _, Oe), we === null ? ve = Se : we.sibling = Se, we = Se);
        return Ze && In(P, Oe), ve;
      }
      for (Se = r(P, Se); Oe < j.length; Oe++) ft = de(Se, P, Oe, j[Oe], ie), ft !== null && (e && ft.alternate !== null && Se.delete(ft.key === null ? Oe : ft.key), _ = o(ft, _, Oe), we === null ? ve = ft : we.sibling = ft, we = ft);
      return e && Se.forEach(function(zn) {
        return t(P, zn);
      }), Ze && In(P, Oe), ve;
    }
    function ge(P, _, j, ie) {
      var ve = le(j);
      if (typeof ve != "function") throw Error(l(150));
      if (j = ve.call(j), j == null) throw Error(l(151));
      for (var we = ve = null, Se = _, Oe = _ = 0, ft = null, He = j.next(); Se !== null && !He.done; Oe++, He = j.next()) {
        Se.index > Oe ? (ft = Se, Se = null) : ft = Se.sibling;
        var zn = G(P, Se, He.value, ie);
        if (zn === null) {
          Se === null && (Se = ft);
          break;
        }
        e && Se && zn.alternate === null && t(P, Se), _ = o(zn, _, Oe), we === null ? ve = zn : we.sibling = zn, we = zn, Se = ft;
      }
      if (He.done) return n(
        P,
        Se
      ), Ze && In(P, Oe), ve;
      if (Se === null) {
        for (; !He.done; Oe++, He = j.next()) He = J(P, He.value, ie), He !== null && (_ = o(He, _, Oe), we === null ? ve = He : we.sibling = He, we = He);
        return Ze && In(P, Oe), ve;
      }
      for (Se = r(P, Se); !He.done; Oe++, He = j.next()) He = de(Se, P, Oe, He.value, ie), He !== null && (e && He.alternate !== null && Se.delete(He.key === null ? Oe : He.key), _ = o(He, _, Oe), we === null ? ve = He : we.sibling = He, we = He);
      return e && Se.forEach(function(ep) {
        return t(P, ep);
      }), Ze && In(P, Oe), ve;
    }
    function it(P, _, j, ie) {
      if (typeof j == "object" && j !== null && j.type === C && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case p:
            e: {
              for (var ve = j.key, we = _; we !== null; ) {
                if (we.key === ve) {
                  if (ve = j.type, ve === C) {
                    if (we.tag === 7) {
                      n(P, we.sibling), _ = i(we, j.props.children), _.return = P, P = _;
                      break e;
                    }
                  } else if (we.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === re && Ua(ve) === we.type) {
                    n(P, we.sibling), _ = i(we, j.props), _.ref = Ur(P, we, j), _.return = P, P = _;
                    break e;
                  }
                  n(P, we);
                  break;
                } else t(P, we);
                we = we.sibling;
              }
              j.type === C ? (_ = Vn(j.props.children, P.mode, ie, j.key), _.return = P, P = _) : (ie = go(j.type, j.key, j.props, null, P.mode, ie), ie.ref = Ur(P, _, j), ie.return = P, P = ie);
            }
            return s(P);
          case y:
            e: {
              for (we = j.key; _ !== null; ) {
                if (_.key === we) if (_.tag === 4 && _.stateNode.containerInfo === j.containerInfo && _.stateNode.implementation === j.implementation) {
                  n(P, _.sibling), _ = i(_, j.children || []), _.return = P, P = _;
                  break e;
                } else {
                  n(P, _);
                  break;
                }
                else t(P, _);
                _ = _.sibling;
              }
              _ = fs(j, P.mode, ie), _.return = P, P = _;
            }
            return s(P);
          case re:
            return we = j._init, it(P, _, we(j._payload), ie);
        }
        if (se(j)) return he(P, _, j, ie);
        if (le(j)) return ge(P, _, j, ie);
        qi(P, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, _ !== null && _.tag === 6 ? (n(P, _.sibling), _ = i(_, j), _.return = P, P = _) : (n(P, _), _ = cs(j, P.mode, ie), _.return = P, P = _), s(P)) : n(P, _);
    }
    return it;
  }
  var ar = qa(!0), Va = qa(!1), Vi = vn(null), $i = null, ur = null, wl = null;
  function Sl() {
    wl = ur = $i = null;
  }
  function kl(e) {
    var t = Vi.current;
    Ye(Vi), e._currentValue = t;
  }
  function _l(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    $i = e, wl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null);
  }
  function Nt(e) {
    var t = e._currentValue;
    if (wl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if ($i === null) throw Error(l(308));
      ur = e, $i.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var Wn = null;
  function El(e) {
    Wn === null ? Wn = [e] : Wn.push(e);
  }
  function $a(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, El(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rn(e, r);
  }
  function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Sn = !1;
  function Rl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ga(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function kn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Ae & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, El(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function Gi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ao(e, n);
    }
  }
  function Ya(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? i = o = s : o = o.next = s, n = n.next;
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t;
      } else i = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Yi(e, t, n, r) {
    var i = e.updateQueue;
    Sn = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var w = g, T = w.next;
      w.next = null, s === null ? o = T : s.next = T, s = w;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, g = X.lastBaseUpdate, g !== s && (g === null ? X.firstBaseUpdate = T : g.next = T, X.lastBaseUpdate = w));
    }
    if (o !== null) {
      var J = i.baseState;
      s = 0, X = T = w = null, g = o;
      do {
        var G = g.lane, de = g.eventTime;
        if ((r & G) === G) {
          X !== null && (X = X.next = {
            eventTime: de,
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          });
          e: {
            var he = e, ge = g;
            switch (G = t, de = n, ge.tag) {
              case 1:
                if (he = ge.payload, typeof he == "function") {
                  J = he.call(de, J, G);
                  break e;
                }
                J = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = ge.payload, G = typeof he == "function" ? he.call(de, J, G) : he, G == null) break e;
                J = Z({}, J, G);
                break e;
              case 2:
                Sn = !0;
            }
          }
          g.callback !== null && g.lane !== 0 && (e.flags |= 64, G = i.effects, G === null ? i.effects = [g] : G.push(g));
        } else de = { eventTime: de, lane: G, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, X === null ? (T = X = de, w = J) : X = X.next = de, s |= G;
        if (g = g.next, g === null) {
          if (g = i.shared.pending, g === null) break;
          G = g, g = G.next, G.next = null, i.lastBaseUpdate = G, i.shared.pending = null;
        }
      } while (!0);
      if (X === null && (w = J), i.baseState = w, i.firstBaseUpdate = T, i.lastBaseUpdate = X, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          s |= i.lane, i = i.next;
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      Fn |= s, e.lanes = s, e.memoizedState = J;
    }
  }
  function Xa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(l(191, i));
        i.call(r);
      }
    }
  }
  var qr = {}, Xt = vn(qr), Vr = vn(qr), $r = vn(qr);
  function An(e) {
    if (e === qr) throw Error(l(174));
    return e;
  }
  function Cl(e, t) {
    switch ($e($r, t), $e(Vr, e), $e(Xt, qr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : at(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = at(t, e);
    }
    Ye(Xt), $e(Xt, t);
  }
  function fr() {
    Ye(Xt), Ye(Vr), Ye($r);
  }
  function Qa(e) {
    An($r.current);
    var t = An(Xt.current), n = at(t, e.type);
    t !== n && ($e(Vr, e), $e(Xt, n));
  }
  function Ol(e) {
    Vr.current === e && (Ye(Xt), Ye(Vr));
  }
  var Je = vn(0);
  function Xi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Pl = [];
  function zl() {
    for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0;
  }
  var Qi = f.ReactCurrentDispatcher, jl = f.ReactCurrentBatchConfig, Hn = 0, et = null, lt = null, ut = null, Ki = !1, Gr = !1, Yr = 0, kd = 0;
  function mt() {
    throw Error(l(321));
  }
  function Dl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ht(e[n], t[n])) return !1;
    return !0;
  }
  function bl(e, t, n, r, i, o) {
    if (Hn = o, et = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qi.current = e === null || e.memoizedState === null ? Cd : Od, e = n(r, i), Gr) {
      o = 0;
      do {
        if (Gr = !1, Yr = 0, 25 <= o) throw Error(l(301));
        o += 1, ut = lt = null, t.updateQueue = null, Qi.current = Pd, e = n(r, i);
      } while (Gr);
    }
    if (Qi.current = eo, t = lt !== null && lt.next !== null, Hn = 0, ut = lt = et = null, Ki = !1, t) throw Error(l(300));
    return e;
  }
  function Tl() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function Qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ut === null ? et.memoizedState = ut = e : ut = ut.next = e, ut;
  }
  function Mt() {
    if (lt === null) {
      var e = et.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = lt.next;
    var t = ut === null ? et.memoizedState : ut.next;
    if (t !== null) ut = t, lt = e;
    else {
      if (e === null) throw Error(l(310));
      lt = e, e = { memoizedState: lt.memoizedState, baseState: lt.baseState, baseQueue: lt.baseQueue, queue: lt.queue, next: null }, ut === null ? et.memoizedState = ut = e : ut = ut.next = e;
    }
    return ut;
  }
  function Xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Nl(e) {
    var t = Mt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = lt, i = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = o.next, o.next = s;
      }
      r.baseQueue = i = o, n.pending = null;
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var g = s = null, w = null, T = o;
      do {
        var X = T.lane;
        if ((Hn & X) === X) w !== null && (w = w.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), r = T.hasEagerState ? T.eagerState : e(r, T.action);
        else {
          var J = {
            lane: X,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null
          };
          w === null ? (g = w = J, s = r) : w = w.next = J, et.lanes |= X, Fn |= X;
        }
        T = T.next;
      } while (T !== null && T !== o);
      w === null ? s = r : w.next = g, Ht(r, t.memoizedState) || (_t = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, et.lanes |= o, Fn |= o, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ml(e) {
    var t = Mt(), n = t.queue;
    if (n === null) throw Error(l(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do
        o = e(o, s.action), s = s.next;
      while (s !== i);
      Ht(o, t.memoizedState) || (_t = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Ka() {
  }
  function Za(e, t) {
    var n = et, r = Mt(), i = t(), o = !Ht(r.memoizedState, i);
    if (o && (r.memoizedState = i, _t = !0), r = r.queue, Ll(tu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ut !== null && ut.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qr(9, eu.bind(null, n, r, i, t), void 0, null), ct === null) throw Error(l(349));
      Hn & 30 || Ja(n, t, i);
    }
    return i;
  }
  function Ja(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function eu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, nu(t) && ru(e);
  }
  function tu(e, t, n) {
    return n(function() {
      nu(t) && ru(e);
    });
  }
  function nu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ht(e, n);
    } catch {
      return !0;
    }
  }
  function ru(e) {
    var t = rn(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function iu(e) {
    var t = Qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rd.bind(null, et, e), [t.memoizedState, e];
  }
  function Qr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = et.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, et.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ou() {
    return Mt().memoizedState;
  }
  function Zi(e, t, n, r) {
    var i = Qt();
    et.flags |= e, i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ji(e, t, n, r) {
    var i = Mt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (lt !== null) {
      var s = lt.memoizedState;
      if (o = s.destroy, r !== null && Dl(r, s.deps)) {
        i.memoizedState = Qr(t, n, o, r);
        return;
      }
    }
    et.flags |= e, i.memoizedState = Qr(1 | t, n, o, r);
  }
  function lu(e, t) {
    return Zi(8390656, 8, e, t);
  }
  function Ll(e, t) {
    return Ji(2048, 8, e, t);
  }
  function su(e, t) {
    return Ji(4, 2, e, t);
  }
  function au(e, t) {
    return Ji(4, 4, e, t);
  }
  function uu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function cu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ji(4, 4, uu.bind(null, t, e), n);
  }
  function Il() {
  }
  function fu(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Dl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function du(e, t) {
    var n = Mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Dl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function pu(e, t, n) {
    return Hn & 21 ? (Ht(n, t) || (n = Us(), et.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n);
  }
  function _d(e, t) {
    var n = Ue;
    Ue = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = jl.transition;
    jl.transition = {};
    try {
      e(!1), t();
    } finally {
      Ue = n, jl.transition = r;
    }
  }
  function hu() {
    return Mt().memoizedState;
  }
  function Ed(e, t, n) {
    var r = Cn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gu(e)) mu(t, n);
    else if (n = $a(e, t, n, r), n !== null) {
      var i = wt();
      Vt(n, e, r, i), yu(n, t, r);
    }
  }
  function Rd(e, t, n) {
    var r = Cn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (gu(e)) mu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var s = t.lastRenderedState, g = o(s, n);
        if (i.hasEagerState = !0, i.eagerState = g, Ht(g, s)) {
          var w = t.interleaved;
          w === null ? (i.next = i, El(t)) : (i.next = w.next, w.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = $a(e, t, i, r), n !== null && (i = wt(), Vt(n, e, r, i), yu(n, t, r));
    }
  }
  function gu(e) {
    var t = e.alternate;
    return e === et || t !== null && t === et;
  }
  function mu(e, t) {
    Gr = Ki = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function yu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Ao(e, n);
    }
  }
  var eo = { readContext: Nt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, Cd = { readContext: Nt, useCallback: function(e, t) {
    return Qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Nt, useEffect: lu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zi(
      4194308,
      4,
      uu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Zi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Zi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ed.bind(null, et, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: iu, useDebugValue: Il, useDeferredValue: function(e) {
    return Qt().memoizedState = e;
  }, useTransition: function() {
    var e = iu(!1), t = e[0];
    return e = _d.bind(null, e[1]), Qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = et, i = Qt();
    if (Ze) {
      if (n === void 0) throw Error(l(407));
      n = n();
    } else {
      if (n = t(), ct === null) throw Error(l(349));
      Hn & 30 || Ja(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, lu(tu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Qr(9, eu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Qt(), t = ct.identifierPrefix;
    if (Ze) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - At(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = kd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Od = {
    readContext: Nt,
    useCallback: fu,
    useContext: Nt,
    useEffect: Ll,
    useImperativeHandle: cu,
    useInsertionEffect: su,
    useLayoutEffect: au,
    useMemo: du,
    useReducer: Nl,
    useRef: ou,
    useState: function() {
      return Nl(Xr);
    },
    useDebugValue: Il,
    useDeferredValue: function(e) {
      var t = Mt();
      return pu(t, lt.memoizedState, e);
    },
    useTransition: function() {
      var e = Nl(Xr)[0], t = Mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Za,
    useId: hu,
    unstable_isNewReconciler: !1
  }, Pd = { readContext: Nt, useCallback: fu, useContext: Nt, useEffect: Ll, useImperativeHandle: cu, useInsertionEffect: su, useLayoutEffect: au, useMemo: du, useReducer: Ml, useRef: ou, useState: function() {
    return Ml(Xr);
  }, useDebugValue: Il, useDeferredValue: function(e) {
    var t = Mt();
    return lt === null ? t.memoizedState = e : pu(t, lt.memoizedState, e);
  }, useTransition: function() {
    var e = Ml(Xr)[0], t = Mt().memoizedState;
    return [e, t];
  }, useMutableSource: Ka, useSyncExternalStore: Za, useId: hu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = Z({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Wl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Z({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var to = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = Cn(e), o = on(r, i);
    o.payload = t, n != null && (o.callback = n), t = kn(e, o, i), t !== null && (Vt(t, e, i, r), Gi(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = Cn(e), o = on(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = kn(e, o, i), t !== null && (Vt(t, e, i, r), Gi(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = wt(), r = Cn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = kn(e, i, r), t !== null && (Vt(t, e, r, n), Gi(t, e, r));
  } };
  function vu(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(i, o) : !0;
  }
  function xu(e, t, n) {
    var r = !1, i = xn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Nt(o) : (i = kt(t) ? Mn : gt.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : xn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = to, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function wu(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && to.enqueueReplaceState(t, t.state, null);
  }
  function Al(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Rl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Nt(o) : (o = kt(t) ? Mn : gt.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Wl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && to.enqueueReplaceState(i, i.state, null), Yi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Pe(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Hl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Fl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var zd = typeof WeakMap == "function" ? WeakMap : Map;
  function Su(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ao || (ao = !0, ns = r), Fl(e, t);
    }, n;
  }
  function ku(e, t, n) {
    n = on(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        Fl(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Fl(e, t), typeof r != "function" && (En === null ? En = /* @__PURE__ */ new Set([this]) : En.add(this));
      var s = t.stack;
      this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
    }), n;
  }
  function _u(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new zd();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Ud.bind(null, e, t, n), t.then(e, e));
  }
  function Eu(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ru(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, kn(n, t, 1))), n.lanes |= 1), e);
  }
  var jd = f.ReactCurrentOwner, _t = !1;
  function xt(e, t, n, r) {
    t.child = e === null ? Va(t, null, n, r) : ar(t, e.child, n, r);
  }
  function Cu(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = bl(e, t, n, r, o, i), n = Tl(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && n && gl(t), t.flags |= 1, xt(e, t, r, i), t.child);
  }
  function Ou(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !us(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Pu(e, t, o, r, i)) : (e = go(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var s = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Lr, n(s, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Pn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pu(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Lr(o, r) && e.ref === t.ref) if (_t = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (_t = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return Bl(e, t, n, r, i);
  }
  function zu(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, $e(hr, Dt), Dt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, $e(hr, Dt), Dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, $e(hr, Dt), Dt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, $e(hr, Dt), Dt |= r;
    return xt(e, t, i, n), t.child;
  }
  function ju(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, r, i) {
    var o = kt(n) ? Mn : gt.current;
    return o = ir(t, o), cr(t, i), n = bl(e, t, n, r, o, i), r = Tl(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ze && r && gl(t), t.flags |= 1, xt(e, t, n, i), t.child);
  }
  function Du(e, t, n, r, i) {
    if (kt(n)) {
      var o = !0;
      Ai(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) ro(e, t), xu(t, n, r), Al(t, n, r, i), r = !0;
    else if (e === null) {
      var s = t.stateNode, g = t.memoizedProps;
      s.props = g;
      var w = s.context, T = n.contextType;
      typeof T == "object" && T !== null ? T = Nt(T) : (T = kt(n) ? Mn : gt.current, T = ir(t, T));
      var X = n.getDerivedStateFromProps, J = typeof X == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      J || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== r || w !== T) && wu(t, s, r, T), Sn = !1;
      var G = t.memoizedState;
      s.state = G, Yi(t, r, s, i), w = t.memoizedState, g !== r || G !== w || St.current || Sn ? (typeof X == "function" && (Wl(t, n, X, r), w = t.memoizedState), (g = Sn || vu(t, n, g, r, G, w, T)) ? (J || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), s.props = r, s.state = w, s.context = T, r = g) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      s = t.stateNode, Ga(e, t), g = t.memoizedProps, T = t.type === t.elementType ? g : Bt(t.type, g), s.props = T, J = t.pendingProps, G = s.context, w = n.contextType, typeof w == "object" && w !== null ? w = Nt(w) : (w = kt(n) ? Mn : gt.current, w = ir(t, w));
      var de = n.getDerivedStateFromProps;
      (X = typeof de == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (g !== J || G !== w) && wu(t, s, r, w), Sn = !1, G = t.memoizedState, s.state = G, Yi(t, r, s, i);
      var he = t.memoizedState;
      g !== J || G !== he || St.current || Sn ? (typeof de == "function" && (Wl(t, n, de, r), he = t.memoizedState), (T = Sn || vu(t, n, T, r, G, he, w) || !1) ? (X || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, he, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, he, w)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = he), s.props = r, s.state = he, s.context = w, r = T) : (typeof s.componentDidUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Ul(e, t, n, r, o, i);
  }
  function Ul(e, t, n, r, i, o) {
    ju(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && La(t, n, !1), ln(e, t, o);
    r = t.stateNode, jd.current = t;
    var g = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, g, o)) : xt(e, t, g, o), t.memoizedState = r.state, i && La(t, n, !0), t.child;
  }
  function bu(e) {
    var t = e.stateNode;
    t.pendingContext ? Na(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(e, t.context, !1), Cl(e, t.containerInfo);
  }
  function Tu(e, t, n, r, i) {
    return sr(), xl(i), t.flags |= 256, xt(e, t, n, r), t.child;
  }
  var ql = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Nu(e, t, n) {
    var r = t.pendingProps, i = Je.current, o = !1, s = (t.flags & 128) !== 0, g;
    if ((g = s) || (g = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), g ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), $e(Je, i & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = mo(s, r, 0, null), e = Vn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vl(n), t.memoizedState = ql, e) : $l(t, s));
    if (i = e.memoizedState, i !== null && (g = i.dehydrated, g !== null)) return Dd(e, t, s, r, g, i, n);
    if (o) {
      o = r.fallback, s = t.mode, i = e.child, g = i.sibling;
      var w = { mode: "hidden", children: r.children };
      return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = Pn(i, w), r.subtreeFlags = i.subtreeFlags & 14680064), g !== null ? o = Pn(g, o) : (o = Vn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Vl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ql, r;
    }
    return o = e.child, e = o.sibling, r = Pn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function $l(e, t) {
    return t = mo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function no(e, t, n, r) {
    return r !== null && xl(r), ar(t, e.child, null, n), e = $l(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Dd(e, t, n, r, i, o, s) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Hl(Error(l(422))), no(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = mo({ mode: "visible", children: r.children }, i, 0, null), o = Vn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, s), t.child.memoizedState = Vl(s), t.memoizedState = ql, o);
    if (!(t.mode & 1)) return no(e, t, s, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var g = r.dgst;
      return r = g, o = Error(l(419)), r = Hl(o, r, void 0), no(e, t, s, r);
    }
    if (g = (s & e.childLanes) !== 0, _t || g) {
      if (r = ct, r !== null) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, rn(e, i), Vt(r, e, i, -1));
      }
      return as(), r = Hl(Error(l(421))), no(e, t, s, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qd.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, jt = yn(i.nextSibling), zt = t, Ze = !0, Ft = null, e !== null && (bt[Tt++] = tn, bt[Tt++] = nn, bt[Tt++] = Ln, tn = e.id, nn = e.overflow, Ln = t), t = $l(t, r.children), t.flags |= 4096, t);
  }
  function Mu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), _l(e.return, t, n);
  }
  function Gl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Lu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (xt(e, t, r.children, n), r = Je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
        else if (e.tag === 19) Mu(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if ($e(Je, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Xi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Gl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Xi(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Gl(t, !0, n, null, o);
        break;
      case "together":
        Gl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ro(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function bd(e, t, n) {
    switch (t.tag) {
      case 3:
        bu(t), sr();
        break;
      case 5:
        Qa(t);
        break;
      case 1:
        kt(t.type) && Ai(t);
        break;
      case 4:
        Cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        $e(Vi, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? ($e(Je, Je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nu(e, t, n) : ($e(Je, Je.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
        $e(Je, Je.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Lu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $e(Je, Je.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, zu(e, t, n);
    }
    return ln(e, t, n);
  }
  var Iu, Yl, Wu, Au;
  Iu = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Yl = function() {
  }, Wu = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, An(Xt.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ve(e, i), r = Ve(e, r), o = [];
          break;
        case "select":
          i = Z({}, i, { value: void 0 }), r = Z({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Ee(e, i), r = Ee(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Li);
      }
      dt(n, r);
      var s;
      n = null;
      for (T in i) if (!r.hasOwnProperty(T) && i.hasOwnProperty(T) && i[T] != null) if (T === "style") {
        var g = i[T];
        for (s in g) g.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
      } else T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (E.hasOwnProperty(T) ? o || (o = []) : (o = o || []).push(T, null));
      for (T in r) {
        var w = r[T];
        if (g = i?.[T], r.hasOwnProperty(T) && w !== g && (w != null || g != null)) if (T === "style") if (g) {
          for (s in g) !g.hasOwnProperty(s) || w && w.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
          for (s in w) w.hasOwnProperty(s) && g[s] !== w[s] && (n || (n = {}), n[s] = w[s]);
        } else n || (o || (o = []), o.push(
          T,
          n
        )), n = w;
        else T === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, g = g ? g.__html : void 0, w != null && g !== w && (o = o || []).push(T, w)) : T === "children" ? typeof w != "string" && typeof w != "number" || (o = o || []).push(T, "" + w) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (E.hasOwnProperty(T) ? (w != null && T === "onScroll" && Ge("scroll", e), o || g === w || (o = [])) : (o = o || []).push(T, w));
      }
      n && (o = o || []).push("style", n);
      var T = o;
      (t.updateQueue = T) && (t.flags |= 4);
    }
  }, Au = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Kr(e, t) {
    if (!Ze) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function yt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Td(e, t, n) {
    var r = t.pendingProps;
    switch (ml(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(t), null;
      case 1:
        return kt(t.type) && Wi(), yt(t), null;
      case 3:
        return r = t.stateNode, fr(), Ye(St), Ye(gt), zl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ui(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (os(Ft), Ft = null))), Yl(e, t), yt(t), null;
      case 5:
        Ol(t);
        var i = An($r.current);
        if (n = t.type, e !== null && t.stateNode != null) Wu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(l(166));
            return yt(t), null;
          }
          if (e = An(Xt.current), Ui(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Yt] = t, r[Fr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Ge("cancel", r), Ge("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ge("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wr.length; i++) Ge(Wr[i], r);
                break;
              case "source":
                Ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ge(
                  "error",
                  r
                ), Ge("load", r);
                break;
              case "details":
                Ge("toggle", r);
                break;
              case "input":
                nt(r, o), Ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ge("invalid", r);
                break;
              case "textarea":
                ze(r, o), Ge("invalid", r);
            }
            dt(n, o), i = null;
            for (var s in o) if (o.hasOwnProperty(s)) {
              var g = o[s];
              s === "children" ? typeof g == "string" ? r.textContent !== g && (o.suppressHydrationWarning !== !0 && Mi(r.textContent, g, e), i = ["children", g]) : typeof g == "number" && r.textContent !== "" + g && (o.suppressHydrationWarning !== !0 && Mi(
                r.textContent,
                g,
                e
              ), i = ["children", "" + g]) : E.hasOwnProperty(s) && g != null && s === "onScroll" && Ge("scroll", r);
            }
            switch (n) {
              case "input":
                je(r), O(r, o, !0);
                break;
              case "textarea":
                je(r), qe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Li);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Qe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Yt] = t, e[Fr] = r, Iu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (s = Wt(n, r), n) {
                case "dialog":
                  Ge("cancel", e), Ge("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ge("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Wr.length; i++) Ge(Wr[i], e);
                  i = r;
                  break;
                case "source":
                  Ge("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Ge(
                    "error",
                    e
                  ), Ge("load", e), i = r;
                  break;
                case "details":
                  Ge("toggle", e), i = r;
                  break;
                case "input":
                  nt(e, r), i = Ve(e, r), Ge("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = Z({}, r, { value: void 0 }), Ge("invalid", e);
                  break;
                case "textarea":
                  ze(e, r), i = Ee(e, r), Ge("invalid", e);
                  break;
                default:
                  i = r;
              }
              dt(n, i), g = i;
              for (o in g) if (g.hasOwnProperty(o)) {
                var w = g[o];
                o === "style" ? Le(e, w) : o === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && z(e, w)) : o === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && A(e, w) : typeof w == "number" && A(e, "" + w) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (E.hasOwnProperty(o) ? w != null && o === "onScroll" && Ge("scroll", e) : w != null && h(e, o, w, s));
              }
              switch (n) {
                case "input":
                  je(e), O(e, r, !1);
                  break;
                case "textarea":
                  je(e), qe(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + K(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? me(e, !!r.multiple, o, !1) : r.defaultValue != null && me(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = Li);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return yt(t), null;
      case 6:
        if (e && t.stateNode != null) Au(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(l(166));
          if (n = An($r.current), An(Xt.current), Ui(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = zt, e !== null)) switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return yt(t), null;
      case 13:
        if (Ye(Je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ze && jt !== null && t.mode & 1 && !(t.flags & 128)) Ba(), sr(), t.flags |= 98560, o = !1;
          else if (o = Ui(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(l(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(l(317));
              o[Yt] = t;
            } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            yt(t), o = !1;
          } else Ft !== null && (os(Ft), Ft = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Je.current & 1 ? st === 0 && (st = 3) : as())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
      case 4:
        return fr(), Yl(e, t), e === null && Ar(t.stateNode.containerInfo), yt(t), null;
      case 10:
        return kl(t.type._context), yt(t), null;
      case 17:
        return kt(t.type) && Wi(), yt(t), null;
      case 19:
        if (Ye(Je), o = t.memoizedState, o === null) return yt(t), null;
        if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) Kr(o, !1);
        else {
          if (st !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (s = Xi(e), s !== null) {
              for (t.flags |= 128, Kr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return $e(Je, Je.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && rt() > gr && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Xi(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ze) return yt(t), null;
          } else 2 * rt() - o.renderingStartTime > gr && n !== 1073741824 && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = rt(), t.sibling = null, n = Je.current, $e(Je, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
      case 22:
      case 23:
        return ss(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Dt & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Nd(e, t) {
    switch (ml(t), t.tag) {
      case 1:
        return kt(t.type) && Wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fr(), Ye(St), Ye(gt), zl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ol(t), null;
      case 13:
        if (Ye(Je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(l(340));
          sr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ye(Je), null;
      case 4:
        return fr(), null;
      case 10:
        return kl(t.type._context), null;
      case 22:
      case 23:
        return ss(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var io = !1, vt = !1, Md = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function pr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      tt(e, t, r);
    }
    else n.current = null;
  }
  function Xl(e, t, n) {
    try {
      n();
    } catch (r) {
      tt(e, t, r);
    }
  }
  var Hu = !1;
  function Ld(e, t) {
    if (sl = Ei, e = va(), Jo(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0, g = -1, w = -1, T = 0, X = 0, J = e, G = null;
          t: for (; ; ) {
            for (var de; J !== n || i !== 0 && J.nodeType !== 3 || (g = s + i), J !== o || r !== 0 && J.nodeType !== 3 || (w = s + r), J.nodeType === 3 && (s += J.nodeValue.length), (de = J.firstChild) !== null; )
              G = J, J = de;
            for (; ; ) {
              if (J === e) break t;
              if (G === n && ++T === i && (g = s), G === o && ++X === r && (w = s), (de = J.nextSibling) !== null) break;
              J = G, G = J.parentNode;
            }
            J = de;
          }
          n = g === -1 || w === -1 ? null : { start: g, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (al = { focusedElem: e, selectionRange: n }, Ei = !1, pe = t; pe !== null; ) if (t = pe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, pe = e;
    else for (; pe !== null; ) {
      t = pe;
      try {
        var he = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (he !== null) {
              var ge = he.memoizedProps, it = he.memoizedState, P = t.stateNode, _ = P.getSnapshotBeforeUpdate(t.elementType === t.type ? ge : Bt(t.type, ge), it);
              P.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var j = t.stateNode.containerInfo;
            j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(l(163));
        }
      } catch (ie) {
        tt(t, t.return, ie);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pe = e;
        break;
      }
      pe = t.return;
    }
    return he = Hu, Hu = !1, he;
  }
  function Zr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          i.destroy = void 0, o !== void 0 && Xl(t, n, o);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function oo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ql(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Fu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Fr], delete t[dl], delete t[vd], delete t[xd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Bu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Bu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Kl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Li));
    else if (r !== 4 && (e = e.child, e !== null)) for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), e = e.sibling;
  }
  function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
  }
  var pt = null, Ut = !1;
  function _n(e, t, n) {
    for (n = n.child; n !== null; ) qu(e, t, n), n = n.sibling;
  }
  function qu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(vi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        vt || pr(n, t);
      case 6:
        var r = pt, i = Ut;
        pt = null, _n(e, t, n), pt = r, Ut = i, pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pt.removeChild(n.stateNode));
        break;
      case 18:
        pt !== null && (Ut ? (e = pt, n = n.stateNode, e.nodeType === 8 ? fl(e.parentNode, n) : e.nodeType === 1 && fl(e, n), jr(e)) : fl(pt, n.stateNode));
        break;
      case 4:
        r = pt, i = Ut, pt = n.stateNode.containerInfo, Ut = !0, _n(e, t, n), pt = r, Ut = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!vt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, s = o.destroy;
            o = o.tag, s !== void 0 && (o & 2 || o & 4) && Xl(n, t, s), i = i.next;
          } while (i !== r);
        }
        _n(e, t, n);
        break;
      case 1:
        if (!vt && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (g) {
          tt(n, t, g);
        }
        _n(e, t, n);
        break;
      case 21:
        _n(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (vt = (r = vt) || n.memoizedState !== null, _n(e, t, n), vt = r) : _n(e, t, n);
        break;
      default:
        _n(e, t, n);
    }
  }
  function Vu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Md()), t.forEach(function(r) {
        var i = Vd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function qt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, s = t, g = s;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 5:
              pt = g.stateNode, Ut = !1;
              break e;
            case 3:
              pt = g.stateNode.containerInfo, Ut = !0;
              break e;
            case 4:
              pt = g.stateNode.containerInfo, Ut = !0;
              break e;
          }
          g = g.return;
        }
        if (pt === null) throw Error(l(160));
        qu(o, s, i), pt = null, Ut = !1;
        var w = i.alternate;
        w !== null && (w.return = null), i.return = null;
      } catch (T) {
        tt(i, t, T);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $u(t, e), t = t.sibling;
  }
  function $u(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qt(t, e), Kt(e), r & 4) {
          try {
            Zr(3, e, e.return), oo(3, e);
          } catch (ge) {
            tt(e, e.return, ge);
          }
          try {
            Zr(5, e, e.return);
          } catch (ge) {
            tt(e, e.return, ge);
          }
        }
        break;
      case 1:
        qt(t, e), Kt(e), r & 512 && n !== null && pr(n, n.return);
        break;
      case 5:
        if (qt(t, e), Kt(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            A(i, "");
          } catch (ge) {
            tt(e, e.return, ge);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, g = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            g === "input" && o.type === "radio" && o.name != null && S(i, o), Wt(g, s);
            var T = Wt(g, o);
            for (s = 0; s < w.length; s += 2) {
              var X = w[s], J = w[s + 1];
              X === "style" ? Le(i, J) : X === "dangerouslySetInnerHTML" ? z(i, J) : X === "children" ? A(i, J) : h(i, X, J, T);
            }
            switch (g) {
              case "input":
                R(i, o);
                break;
              case "textarea":
                be(i, o);
                break;
              case "select":
                var G = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var de = o.value;
                de != null ? me(i, !!o.multiple, de, !1) : G !== !!o.multiple && (o.defaultValue != null ? me(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : me(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Fr] = o;
          } catch (ge) {
            tt(e, e.return, ge);
          }
        }
        break;
      case 6:
        if (qt(t, e), Kt(e), r & 4) {
          if (e.stateNode === null) throw Error(l(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (ge) {
            tt(e, e.return, ge);
          }
        }
        break;
      case 3:
        if (qt(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          jr(t.containerInfo);
        } catch (ge) {
          tt(e, e.return, ge);
        }
        break;
      case 4:
        qt(t, e), Kt(e);
        break;
      case 13:
        qt(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ts = rt())), r & 4 && Vu(e);
        break;
      case 22:
        if (X = n !== null && n.memoizedState !== null, e.mode & 1 ? (vt = (T = vt) || X, qt(t, e), vt = T) : qt(t, e), Kt(e), r & 8192) {
          if (T = e.memoizedState !== null, (e.stateNode.isHidden = T) && !X && e.mode & 1) for (pe = e, X = e.child; X !== null; ) {
            for (J = pe = X; pe !== null; ) {
              switch (G = pe, de = G.child, G.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, G, G.return);
                  break;
                case 1:
                  pr(G, G.return);
                  var he = G.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    r = G, n = G.return;
                    try {
                      t = r, he.props = t.memoizedProps, he.state = t.memoizedState, he.componentWillUnmount();
                    } catch (ge) {
                      tt(r, n, ge);
                    }
                  }
                  break;
                case 5:
                  pr(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    Xu(J);
                    continue;
                  }
              }
              de !== null ? (de.return = G, pe = de) : Xu(J);
            }
            X = X.sibling;
          }
          e: for (X = null, J = e; ; ) {
            if (J.tag === 5) {
              if (X === null) {
                X = J;
                try {
                  i = J.stateNode, T ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (g = J.stateNode, w = J.memoizedProps.style, s = w != null && w.hasOwnProperty("display") ? w.display : null, g.style.display = Me("display", s));
                } catch (ge) {
                  tt(e, e.return, ge);
                }
              }
            } else if (J.tag === 6) {
              if (X === null) try {
                J.stateNode.nodeValue = T ? "" : J.memoizedProps;
              } catch (ge) {
                tt(e, e.return, ge);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === e) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === e) break e;
              X === J && (X = null), J = J.return;
            }
            X === J && (X = null), J.sibling.return = J.return, J = J.sibling;
          }
        }
        break;
      case 19:
        qt(t, e), Kt(e), r & 4 && Vu(e);
        break;
      case 21:
        break;
      default:
        qt(
          t,
          e
        ), Kt(e);
    }
  }
  function Kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Bu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(l(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (A(i, ""), r.flags &= -33);
            var o = Uu(e);
            Zl(e, o, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo, g = Uu(e);
            Kl(e, g, s);
            break;
          default:
            throw Error(l(161));
        }
      } catch (w) {
        tt(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Id(e, t, n) {
    pe = e, Gu(e);
  }
  function Gu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; pe !== null; ) {
      var i = pe, o = i.child;
      if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || io;
        if (!s) {
          var g = i.alternate, w = g !== null && g.memoizedState !== null || vt;
          g = io;
          var T = vt;
          if (io = s, (vt = w) && !T) for (pe = i; pe !== null; ) s = pe, w = s.child, s.tag === 22 && s.memoizedState !== null ? Qu(i) : w !== null ? (w.return = s, pe = w) : Qu(i);
          for (; o !== null; ) pe = o, Gu(o), o = o.sibling;
          pe = i, io = g, vt = T;
        }
        Yu(e);
      } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, pe = o) : Yu(e);
    }
  }
  function Yu(e) {
    for (; pe !== null; ) {
      var t = pe;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              vt || oo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !vt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Xa(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Xa(t, s, n);
              }
              break;
            case 5:
              var g = t.stateNode;
              if (n === null && t.flags & 4) {
                n = g;
                var w = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && n.focus();
                    break;
                  case "img":
                    w.src && (n.src = w.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var T = t.alternate;
                if (T !== null) {
                  var X = T.memoizedState;
                  if (X !== null) {
                    var J = X.dehydrated;
                    J !== null && jr(J);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(l(163));
          }
          vt || t.flags & 512 && Ql(t);
        } catch (G) {
          tt(t, t.return, G);
        }
      }
      if (t === e) {
        pe = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, pe = n;
        break;
      }
      pe = t.return;
    }
  }
  function Xu(e) {
    for (; pe !== null; ) {
      var t = pe;
      if (t === e) {
        pe = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, pe = n;
        break;
      }
      pe = t.return;
    }
  }
  function Qu(e) {
    for (; pe !== null; ) {
      var t = pe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              oo(4, t);
            } catch (w) {
              tt(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                tt(t, i, w);
              }
            }
            var o = t.return;
            try {
              Ql(t);
            } catch (w) {
              tt(t, o, w);
            }
            break;
          case 5:
            var s = t.return;
            try {
              Ql(t);
            } catch (w) {
              tt(t, s, w);
            }
        }
      } catch (w) {
        tt(t, t.return, w);
      }
      if (t === e) {
        pe = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        g.return = t.return, pe = g;
        break;
      }
      pe = t.return;
    }
  }
  var Wd = Math.ceil, lo = f.ReactCurrentDispatcher, Jl = f.ReactCurrentOwner, Lt = f.ReactCurrentBatchConfig, Ae = 0, ct = null, ot = null, ht = 0, Dt = 0, hr = vn(0), st = 0, Jr = null, Fn = 0, so = 0, es = 0, ei = null, Et = null, ts = 0, gr = 1 / 0, sn = null, ao = !1, ns = null, En = null, uo = !1, Rn = null, co = 0, ti = 0, rs = null, fo = -1, po = 0;
  function wt() {
    return Ae & 6 ? rt() : fo !== -1 ? fo : fo = rt();
  }
  function Cn(e) {
    return e.mode & 1 ? Ae & 2 && ht !== 0 ? ht & -ht : Sd.transition !== null ? (po === 0 && (po = Us()), po) : (e = Ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zs(e.type)), e) : 1;
  }
  function Vt(e, t, n, r) {
    if (50 < ti) throw ti = 0, rs = null, Error(l(185));
    Rr(e, n, r), (!(Ae & 2) || e !== ct) && (e === ct && (!(Ae & 2) && (so |= n), st === 4 && On(e, ht)), Rt(e, r), n === 1 && Ae === 0 && !(t.mode & 1) && (gr = rt() + 500, Hi && wn()));
  }
  function Rt(e, t) {
    var n = e.callbackNode;
    Sf(e, t);
    var r = Si(e, e === ct ? ht : 0);
    if (r === 0) n !== null && Hs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Hs(n), t === 1) e.tag === 0 ? wd(Zu.bind(null, e)) : Ia(Zu.bind(null, e)), md(function() {
        !(Ae & 6) && wn();
      }), n = null;
      else {
        switch (qs(r)) {
          case 1:
            n = Lo;
            break;
          case 4:
            n = Fs;
            break;
          case 16:
            n = yi;
            break;
          case 536870912:
            n = Bs;
            break;
          default:
            n = yi;
        }
        n = lc(n, Ku.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ku(e, t) {
    if (fo = -1, po = 0, Ae & 6) throw Error(l(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n) return null;
    var r = Si(e, e === ct ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ho(e, r);
    else {
      t = r;
      var i = Ae;
      Ae |= 2;
      var o = ec();
      (ct !== e || ht !== t) && (sn = null, gr = rt() + 500, Un(e, t));
      do
        try {
          Fd();
          break;
        } catch (g) {
          Ju(e, g);
        }
      while (!0);
      Sl(), lo.current = o, Ae = i, ot !== null ? t = 0 : (ct = null, ht = 0, t = st);
    }
    if (t !== 0) {
      if (t === 2 && (i = Io(e), i !== 0 && (r = i, t = is(e, i))), t === 1) throw n = Jr, Un(e, 0), On(e, r), Rt(e, rt()), n;
      if (t === 6) On(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Ad(i) && (t = ho(e, r), t === 2 && (o = Io(e), o !== 0 && (r = o, t = is(e, o))), t === 1)) throw n = Jr, Un(e, 0), On(e, r), Rt(e, rt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            qn(e, Et, sn);
            break;
          case 3:
            if (On(e, r), (r & 130023424) === r && (t = ts + 500 - rt(), 10 < t)) {
              if (Si(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                wt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = cl(qn.bind(null, e, Et, sn), t);
              break;
            }
            qn(e, Et, sn);
            break;
          case 4:
            if (On(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var s = 31 - At(r);
              o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
            }
            if (r = i, r = rt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = cl(qn.bind(null, e, Et, sn), r);
              break;
            }
            qn(e, Et, sn);
            break;
          case 5:
            qn(e, Et, sn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return Rt(e, rt()), e.callbackNode === n ? Ku.bind(null, e) : null;
  }
  function is(e, t) {
    var n = ei;
    return e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256), e = ho(e, t), e !== 2 && (t = Et, Et = n, t !== null && os(t)), e;
  }
  function os(e) {
    Et === null ? Et = e : Et.push.apply(Et, e);
  }
  function Ad(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ht(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function On(e, t) {
    for (t &= ~es, t &= ~so, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - At(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Zu(e) {
    if (Ae & 6) throw Error(l(327));
    mr();
    var t = Si(e, 0);
    if (!(t & 1)) return Rt(e, rt()), null;
    var n = ho(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Io(e);
      r !== 0 && (t = r, n = is(e, r));
    }
    if (n === 1) throw n = Jr, Un(e, 0), On(e, t), Rt(e, rt()), n;
    if (n === 6) throw Error(l(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, qn(e, Et, sn), Rt(e, rt()), null;
  }
  function ls(e, t) {
    var n = Ae;
    Ae |= 1;
    try {
      return e(t);
    } finally {
      Ae = n, Ae === 0 && (gr = rt() + 500, Hi && wn());
    }
  }
  function Bn(e) {
    Rn !== null && Rn.tag === 0 && !(Ae & 6) && mr();
    var t = Ae;
    Ae |= 1;
    var n = Lt.transition, r = Ue;
    try {
      if (Lt.transition = null, Ue = 1, e) return e();
    } finally {
      Ue = r, Lt.transition = n, Ae = t, !(Ae & 6) && wn();
    }
  }
  function ss() {
    Dt = hr.current, Ye(hr);
  }
  function Un(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, gd(n)), ot !== null) for (n = ot.return; n !== null; ) {
      var r = n;
      switch (ml(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wi();
          break;
        case 3:
          fr(), Ye(St), Ye(gt), zl();
          break;
        case 5:
          Ol(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          Ye(Je);
          break;
        case 19:
          Ye(Je);
          break;
        case 10:
          kl(r.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
    if (ct = e, ot = e = Pn(e.current, null), ht = Dt = t, st = 0, Jr = null, es = so = Fn = 0, Et = ei = null, Wn !== null) {
      for (t = 0; t < Wn.length; t++) if (n = Wn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var s = o.next;
          o.next = i, r.next = s;
        }
        n.pending = r;
      }
      Wn = null;
    }
    return e;
  }
  function Ju(e, t) {
    do {
      var n = ot;
      try {
        if (Sl(), Qi.current = eo, Ki) {
          for (var r = et.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Ki = !1;
        }
        if (Hn = 0, ut = lt = et = null, Gr = !1, Yr = 0, Jl.current = null, n === null || n.return === null) {
          st = 1, Jr = t, ot = null;
          break;
        }
        e: {
          var o = e, s = n.return, g = n, w = t;
          if (t = ht, g.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var T = w, X = g, J = X.tag;
            if (!(X.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var G = X.alternate;
              G ? (X.updateQueue = G.updateQueue, X.memoizedState = G.memoizedState, X.lanes = G.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var de = Eu(s);
            if (de !== null) {
              de.flags &= -257, Ru(de, s, g, o, t), de.mode & 1 && _u(o, T, t), t = de, w = T;
              var he = t.updateQueue;
              if (he === null) {
                var ge = /* @__PURE__ */ new Set();
                ge.add(w), t.updateQueue = ge;
              } else he.add(w);
              break e;
            } else {
              if (!(t & 1)) {
                _u(o, T, t), as();
                break e;
              }
              w = Error(l(426));
            }
          } else if (Ze && g.mode & 1) {
            var it = Eu(s);
            if (it !== null) {
              !(it.flags & 65536) && (it.flags |= 256), Ru(it, s, g, o, t), xl(dr(w, g));
              break e;
            }
          }
          o = w = dr(w, g), st !== 4 && (st = 2), ei === null ? ei = [o] : ei.push(o), o = s;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var P = Su(o, w, t);
                Ya(o, P);
                break e;
              case 1:
                g = w;
                var _ = o.type, j = o.stateNode;
                if (!(o.flags & 128) && (typeof _.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (En === null || !En.has(j)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var ie = ku(o, g, t);
                  Ya(o, ie);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        nc(n);
      } catch (ve) {
        t = ve, ot === n && n !== null && (ot = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ec() {
    var e = lo.current;
    return lo.current = eo, e === null ? eo : e;
  }
  function as() {
    (st === 0 || st === 3 || st === 2) && (st = 4), ct === null || !(Fn & 268435455) && !(so & 268435455) || On(ct, ht);
  }
  function ho(e, t) {
    var n = Ae;
    Ae |= 2;
    var r = ec();
    (ct !== e || ht !== t) && (sn = null, Un(e, t));
    do
      try {
        Hd();
        break;
      } catch (i) {
        Ju(e, i);
      }
    while (!0);
    if (Sl(), Ae = n, lo.current = r, ot !== null) throw Error(l(261));
    return ct = null, ht = 0, st;
  }
  function Hd() {
    for (; ot !== null; ) tc(ot);
  }
  function Fd() {
    for (; ot !== null && !df(); ) tc(ot);
  }
  function tc(e) {
    var t = oc(e.alternate, e, Dt);
    e.memoizedProps = e.pendingProps, t === null ? nc(e) : ot = t, Jl.current = null;
  }
  function nc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Nd(n, t), n !== null) {
          n.flags &= 32767, ot = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          st = 6, ot = null;
          return;
        }
      } else if (n = Td(n, t, Dt), n !== null) {
        ot = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ot = t;
        return;
      }
      ot = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function qn(e, t, n) {
    var r = Ue, i = Lt.transition;
    try {
      Lt.transition = null, Ue = 1, Bd(e, t, n, r);
    } finally {
      Lt.transition = i, Ue = r;
    }
    return null;
  }
  function Bd(e, t, n, r) {
    do
      mr();
    while (Rn !== null);
    if (Ae & 6) throw Error(l(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(l(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (kf(e, o), e === ct && (ot = ct = null, ht = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || uo || (uo = !0, lc(yi, function() {
      return mr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Lt.transition, Lt.transition = null;
      var s = Ue;
      Ue = 1;
      var g = Ae;
      Ae |= 4, Jl.current = null, Ld(e, n), $u(n, e), ad(al), Ei = !!sl, al = sl = null, e.current = n, Id(n), pf(), Ae = g, Ue = s, Lt.transition = o;
    } else e.current = n;
    if (uo && (uo = !1, Rn = e, co = i), o = e.pendingLanes, o === 0 && (En = null), mf(n.stateNode), Rt(e, rt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ao) throw ao = !1, e = ns, ns = null, e;
    return co & 1 && e.tag !== 0 && mr(), o = e.pendingLanes, o & 1 ? e === rs ? ti++ : (ti = 0, rs = e) : ti = 0, wn(), null;
  }
  function mr() {
    if (Rn !== null) {
      var e = qs(co), t = Lt.transition, n = Ue;
      try {
        if (Lt.transition = null, Ue = 16 > e ? 16 : e, Rn === null) var r = !1;
        else {
          if (e = Rn, Rn = null, co = 0, Ae & 6) throw Error(l(331));
          var i = Ae;
          for (Ae |= 4, pe = e.current; pe !== null; ) {
            var o = pe, s = o.child;
            if (pe.flags & 16) {
              var g = o.deletions;
              if (g !== null) {
                for (var w = 0; w < g.length; w++) {
                  var T = g[w];
                  for (pe = T; pe !== null; ) {
                    var X = pe;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, X, o);
                    }
                    var J = X.child;
                    if (J !== null) J.return = X, pe = J;
                    else for (; pe !== null; ) {
                      X = pe;
                      var G = X.sibling, de = X.return;
                      if (Fu(X), X === T) {
                        pe = null;
                        break;
                      }
                      if (G !== null) {
                        G.return = de, pe = G;
                        break;
                      }
                      pe = de;
                    }
                  }
                }
                var he = o.alternate;
                if (he !== null) {
                  var ge = he.child;
                  if (ge !== null) {
                    he.child = null;
                    do {
                      var it = ge.sibling;
                      ge.sibling = null, ge = it;
                    } while (ge !== null);
                  }
                }
                pe = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) s.return = o, pe = s;
            else e: for (; pe !== null; ) {
              if (o = pe, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Zr(9, o, o.return);
              }
              var P = o.sibling;
              if (P !== null) {
                P.return = o.return, pe = P;
                break e;
              }
              pe = o.return;
            }
          }
          var _ = e.current;
          for (pe = _; pe !== null; ) {
            s = pe;
            var j = s.child;
            if (s.subtreeFlags & 2064 && j !== null) j.return = s, pe = j;
            else e: for (s = _; pe !== null; ) {
              if (g = pe, g.flags & 2048) try {
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    oo(9, g);
                }
              } catch (ve) {
                tt(g, g.return, ve);
              }
              if (g === s) {
                pe = null;
                break e;
              }
              var ie = g.sibling;
              if (ie !== null) {
                ie.return = g.return, pe = ie;
                break e;
              }
              pe = g.return;
            }
          }
          if (Ae = i, wn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(vi, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Ue = n, Lt.transition = t;
      }
    }
    return !1;
  }
  function rc(e, t, n) {
    t = dr(n, t), t = Su(e, t, 1), e = kn(e, t, 1), t = wt(), e !== null && (Rr(e, 1, t), Rt(e, t));
  }
  function tt(e, t, n) {
    if (e.tag === 3) rc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        rc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (En === null || !En.has(r))) {
          e = dr(n, e), e = ku(t, e, 1), t = kn(t, e, 1), e = wt(), t !== null && (Rr(t, 1, e), Rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ud(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = wt(), e.pingedLanes |= e.suspendedLanes & n, ct === e && (ht & n) === n && (st === 4 || st === 3 && (ht & 130023424) === ht && 500 > rt() - ts ? Un(e, 0) : es |= n), Rt(e, t);
  }
  function ic(e, t) {
    t === 0 && (e.mode & 1 ? (t = wi, wi <<= 1, !(wi & 130023424) && (wi = 4194304)) : t = 1);
    var n = wt();
    e = rn(e, t), e !== null && (Rr(e, t, n), Rt(e, n));
  }
  function qd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ic(e, n);
  }
  function Vd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    r !== null && r.delete(t), ic(e, n);
  }
  var oc;
  oc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || St.current) _t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return _t = !1, bd(e, t, n);
      _t = !!(e.flags & 131072);
    }
    else _t = !1, Ze && t.flags & 1048576 && Wa(t, Bi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ro(e, t), e = t.pendingProps;
        var i = ir(t, gt.current);
        cr(t, n), i = bl(null, t, r, e, i, n);
        var o = Tl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, kt(r) ? (o = !0, Ai(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Rl(t), i.updater = to, t.stateNode = i, i._reactInternals = t, Al(t, r, e, n), t = Ul(null, t, r, !0, o, n)) : (t.tag = 0, Ze && o && gl(t), xt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ro(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Gd(r), e = Bt(r, e), i) {
            case 0:
              t = Bl(null, t, r, e, n);
              break e;
            case 1:
              t = Du(null, t, r, e, n);
              break e;
            case 11:
              t = Cu(null, t, r, e, n);
              break e;
            case 14:
              t = Ou(null, t, r, Bt(r.type, e), n);
              break e;
          }
          throw Error(l(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Bl(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Du(e, t, r, i, n);
      case 3:
        e: {
          if (bu(t), e === null) throw Error(l(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Ga(e, t), Yi(t, r, null, n);
          var s = t.memoizedState;
          if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = dr(Error(l(423)), t), t = Tu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = dr(Error(l(424)), t), t = Tu(e, t, r, n, i);
            break e;
          } else for (jt = yn(t.stateNode.containerInfo.firstChild), zt = t, Ze = !0, Ft = null, n = Va(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sr(), r === i) {
              t = ln(e, t, n);
              break e;
            }
            xt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Qa(t), e === null && vl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ul(r, i) ? s = null : o !== null && ul(r, o) && (t.flags |= 32), ju(e, t), xt(e, t, s, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return Nu(e, t, n);
      case 4:
        return Cl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : xt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Cu(e, t, r, i, n);
      case 7:
        return xt(e, t, t.pendingProps, n), t.child;
      case 8:
        return xt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return xt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, $e(Vi, r._currentValue), r._currentValue = s, o !== null) if (Ht(o.value, s)) {
            if (o.children === i.children && !St.current) {
              t = ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var g = o.dependencies;
            if (g !== null) {
              s = o.child;
              for (var w = g.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (o.tag === 1) {
                    w = on(-1, n & -n), w.tag = 2;
                    var T = o.updateQueue;
                    if (T !== null) {
                      T = T.shared;
                      var X = T.pending;
                      X === null ? w.next = w : (w.next = X.next, X.next = w), T.pending = w;
                    }
                  }
                  o.lanes |= n, w = o.alternate, w !== null && (w.lanes |= n), _l(
                    o.return,
                    n,
                    t
                  ), g.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (s = o.return, s === null) throw Error(l(341));
              s.lanes |= n, g = s.alternate, g !== null && (g.lanes |= n), _l(s, n, t), s = o.sibling;
            } else s = o.child;
            if (s !== null) s.return = o;
            else for (s = o; s !== null; ) {
              if (s === t) {
                s = null;
                break;
              }
              if (o = s.sibling, o !== null) {
                o.return = s.return, s = o;
                break;
              }
              s = s.return;
            }
            o = s;
          }
          xt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, cr(t, n), i = Nt(i), r = r(i), t.flags |= 1, xt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), Ou(e, t, r, i, n);
      case 15:
        return Pu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), ro(e, t), t.tag = 1, kt(r) ? (e = !0, Ai(t)) : e = !1, cr(t, n), xu(t, r, i), Al(t, r, i, n), Ul(null, t, r, !0, e, n);
      case 19:
        return Lu(e, t, n);
      case 22:
        return zu(e, t, n);
    }
    throw Error(l(156, t.tag));
  };
  function lc(e, t) {
    return As(e, t);
  }
  function $d(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, r) {
    return new $d(e, t, n, r);
  }
  function us(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gd(e) {
    if (typeof e == "function") return us(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ae) return 11;
      if (e === $) return 14;
    }
    return 2;
  }
  function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function go(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") us(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
      case C:
        return Vn(n.children, i, o, t);
      case I:
        s = 8, i |= 8;
        break;
      case F:
        return e = It(12, n, t, i | 2), e.elementType = F, e.lanes = o, e;
      case oe:
        return e = It(13, n, t, i), e.elementType = oe, e.lanes = o, e;
      case ye:
        return e = It(19, n, t, i), e.elementType = ye, e.lanes = o, e;
      case te:
        return mo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ne:
            s = 10;
            break e;
          case ue:
            s = 9;
            break e;
          case ae:
            s = 11;
            break e;
          case $:
            s = 14;
            break e;
          case re:
            s = 16, r = null;
            break e;
        }
        throw Error(l(130, e == null ? e : typeof e, ""));
    }
    return t = It(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Vn(e, t, n, r) {
    return e = It(7, e, r, t), e.lanes = n, e;
  }
  function mo(e, t, n, r) {
    return e = It(22, e, r, t), e.elementType = te, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function cs(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function fs(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Yd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wo(0), this.expirationTimes = Wo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function ds(e, t, n, r, i, o, s, g, w) {
    return e = new Yd(e, t, n, g, w), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = It(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(o), e;
  }
  function Xd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: y, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function sc(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (kt(n)) return Ma(e, n, t);
    }
    return t;
  }
  function ac(e, t, n, r, i, o, s, g, w) {
    return e = ds(n, r, !0, e, i, o, s, g, w), e.context = sc(null), n = e.current, r = wt(), i = Cn(n), o = on(r, i), o.callback = t ?? null, kn(n, o, i), e.current.lanes = i, Rr(e, i, r), Rt(e, r), e;
  }
  function yo(e, t, n, r) {
    var i = t.current, o = wt(), s = Cn(i);
    return n = sc(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kn(i, t, s), e !== null && (Vt(e, i, s, o), Gi(e, i, s)), s;
  }
  function vo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function uc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ps(e, t) {
    uc(e, t), (e = e.alternate) && uc(e, t);
  }
  function Qd() {
    return null;
  }
  var cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function hs(e) {
    this._internalRoot = e;
  }
  xo.prototype.render = hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(l(409));
    yo(e, t, null, null);
  }, xo.prototype.unmount = hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        yo(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function xo(e) {
    this._internalRoot = e;
  }
  xo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Gs();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Qs(e);
    }
  };
  function gs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function wo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function fc() {
  }
  function Kd(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var T = vo(s);
          o.call(T);
        };
      }
      var s = ac(t, r, e, 0, null, !1, !1, "", fc);
      return e._reactRootContainer = s, e[Jt] = s.current, Ar(e.nodeType === 8 ? e.parentNode : e), Bn(), s;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var T = vo(w);
        g.call(T);
      };
    }
    var w = ds(e, 0, !1, null, null, !1, !1, "", fc);
    return e._reactRootContainer = w, e[Jt] = w.current, Ar(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      yo(t, w, n, r);
    }), w;
  }
  function So(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var g = i;
        i = function() {
          var w = vo(s);
          g.call(w);
        };
      }
      yo(t, s, e, i);
    } else s = Kd(n, t, e, i, r);
    return vo(s);
  }
  Vs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Er(t.pendingLanes);
          n !== 0 && (Ao(t, n | 1), Rt(t, rt()), !(Ae & 6) && (gr = rt() + 500, wn()));
        }
        break;
      case 13:
        Bn(function() {
          var r = rn(e, 1);
          if (r !== null) {
            var i = wt();
            Vt(r, e, 1, i);
          }
        }), ps(e, 1);
    }
  }, Ho = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = wt();
        Vt(t, e, 134217728, n);
      }
      ps(e, 134217728);
    }
  }, $s = function(e) {
    if (e.tag === 13) {
      var t = Cn(e), n = rn(e, t);
      if (n !== null) {
        var r = wt();
        Vt(n, e, t, r);
      }
      ps(e, t);
    }
  }, Gs = function() {
    return Ue;
  }, Ys = function(e, t) {
    var n = Ue;
    try {
      return Ue = e, t();
    } finally {
      Ue = n;
    }
  }, Gn = function(e, t, n) {
    switch (t) {
      case "input":
        if (R(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Ii(r);
              if (!i) throw Error(l(90));
              Ne(r), R(r, i);
            }
          }
        }
        break;
      case "textarea":
        be(e, n);
        break;
      case "select":
        t = n.value, t != null && me(e, !!n.multiple, t, !1);
    }
  }, hi = ls, Ts = Bn;
  var Zd = { usingClientEntryPoint: !1, Events: [Br, nr, Ii, wr, Yn, ls] }, ni = { findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jd = { bundleType: ni.bundleType, version: ni.version, rendererPackageName: ni.rendererPackageName, rendererConfig: ni.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: f.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Is(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ni.findFiberByHostInstance || Qd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ko.isDisabled && ko.supportsFiber) try {
      vi = ko.inject(Jd), Gt = ko;
    } catch {
    }
  }
  return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zd, Ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gs(t)) throw Error(l(200));
    return Xd(e, t, null, n);
  }, Ct.createRoot = function(e, t) {
    if (!gs(e)) throw Error(l(299));
    var n = !1, r = "", i = cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ds(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Ar(e.nodeType === 8 ? e.parentNode : e), new hs(t);
  }, Ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(l(188)) : (e = Object.keys(e).join(","), Error(l(268, e)));
    return e = Is(t), e = e === null ? null : e.stateNode, e;
  }, Ct.flushSync = function(e) {
    return Bn(e);
  }, Ct.hydrate = function(e, t, n) {
    if (!wo(t)) throw Error(l(200));
    return So(null, e, t, !0, n);
  }, Ct.hydrateRoot = function(e, t, n) {
    if (!gs(e)) throw Error(l(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = cc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = ac(t, null, e, 1, n ?? null, i, !1, o, s), e[Jt] = t.current, Ar(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new xo(t);
  }, Ct.render = function(e, t, n) {
    if (!wo(t)) throw Error(l(200));
    return So(null, e, t, !1, n);
  }, Ct.unmountComponentAtNode = function(e) {
    if (!wo(e)) throw Error(l(40));
    return e._reactRootContainer ? (Bn(function() {
      So(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, Ct.unstable_batchedUpdates = ls, Ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wo(n)) throw Error(l(200));
    if (e == null || e._reactInternals === void 0) throw Error(l(38));
    return So(e, t, n, !1, r);
  }, Ct.version = "18.3.1-next-f1338f8080-20240426", Ct;
}
var yc;
function pi() {
  if (yc) return ms.exports;
  yc = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (c) {
        console.error(c);
      }
  }
  return a(), ms.exports = lp(), ms.exports;
}
var vc;
function sp() {
  if (vc) return _o;
  vc = 1;
  var a = pi();
  return _o.createRoot = a.createRoot, _o.hydrateRoot = a.hydrateRoot, _o;
}
var ap = sp(), Xe = Ot();
const up = /* @__PURE__ */ tp(Xe);
var ws = { exports: {} }, ri = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function cp() {
  if (xc) return ri;
  xc = 1;
  var a = Ot(), c = Symbol.for("react.element"), l = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, E = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(V, N, W) {
    var Y, q = {}, B = null, Re = null;
    W !== void 0 && (B = "" + W), N.key !== void 0 && (B = "" + N.key), N.ref !== void 0 && (Re = N.ref);
    for (Y in N) d.call(N, Y) && !b.hasOwnProperty(Y) && (q[Y] = N[Y]);
    if (V && V.defaultProps) for (Y in N = V.defaultProps, N) q[Y] === void 0 && (q[Y] = N[Y]);
    return { $$typeof: c, type: V, key: B, ref: Re, props: q, _owner: E.current };
  }
  return ri.Fragment = l, ri.jsx = L, ri.jsxs = L, ri;
}
var wc;
function fp() {
  return wc || (wc = 1, ws.exports = cp()), ws.exports;
}
var x = fp();
class Sc extends Xe.Component {
  state = {
    hasError: !1,
    error: null
  };
  static getDerivedStateFromError(c) {
    return { hasError: !0, error: c };
  }
  componentDidCatch(c, l) {
    console.error("ArgusDashboard ErrorBoundary caught an error:", c, l);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ x.jsxs("div", { style: { padding: "20px", color: "#ff6b6b", background: "rgba(0,0,0,0.5)", borderRadius: "8px", margin: "10px" }, children: [
      /* @__PURE__ */ x.jsx("h2", { style: { fontSize: "16px", marginBottom: "8px" }, children: "⚠️ Error del Widget" }),
      /* @__PURE__ */ x.jsx("p", { style: { fontSize: "12px", opacity: 0.8 }, children: "Un componente falló al renderizar." }),
      /* @__PURE__ */ x.jsx("pre", { style: { fontSize: "10px", marginTop: "10px", whiteSpace: "pre-wrap", opacity: 0.6 }, children: this.state.error?.message })
    ] }) : this.props.children;
  }
}
var Ss = { exports: {} }, ii = {}, di = { exports: {} }, dp = di.exports, kc;
function js() {
  return kc || (kc = 1, function(a, c) {
    (function(l, d) {
      d(c);
    })(dp, function(l) {
      function d(K) {
        return function(Ce, je, Ne, Fe, Ve, nt, S) {
          return K(Ce, je, S);
        };
      }
      function E(K) {
        return function(Ce, je, Ne, Fe) {
          if (!Ce || !je || typeof Ce != "object" || typeof je != "object")
            return K(Ce, je, Ne, Fe);
          var Ve = Fe.get(Ce), nt = Fe.get(je);
          if (Ve && nt)
            return Ve === je && nt === Ce;
          Fe.set(Ce, je), Fe.set(je, Ce);
          var S = K(Ce, je, Ne, Fe);
          return Fe.delete(Ce), Fe.delete(je), S;
        };
      }
      function b(K, fe) {
        var Ce = {};
        for (var je in K)
          Ce[je] = K[je];
        for (var je in fe)
          Ce[je] = fe[je];
        return Ce;
      }
      function L(K) {
        return K.constructor === Object || K.constructor == null;
      }
      function V(K) {
        return typeof K.then == "function";
      }
      function N(K, fe) {
        return K === fe || K !== K && fe !== fe;
      }
      var W = "[object Arguments]", Y = "[object Boolean]", q = "[object Date]", B = "[object RegExp]", Re = "[object Map]", ke = "[object Number]", Q = "[object Object]", D = "[object Set]", v = "[object String]", u = Object.prototype.toString;
      function h(K) {
        var fe = K.areArraysEqual, Ce = K.areDatesEqual, je = K.areMapsEqual, Ne = K.areObjectsEqual, Fe = K.areRegExpsEqual, Ve = K.areSetsEqual, nt = K.createIsNestedEqual, S = nt(R);
        function R(O, U, se) {
          if (O === U)
            return !0;
          if (!O || !U || typeof O != "object" || typeof U != "object")
            return O !== O && U !== U;
          if (L(O) && L(U))
            return Ne(O, U, S, se);
          var me = Array.isArray(O), Ee = Array.isArray(U);
          if (me || Ee)
            return me === Ee && fe(O, U, S, se);
          var ze = u.call(O);
          return ze !== u.call(U) ? !1 : ze === q ? Ce(O, U, S, se) : ze === B ? Fe(O, U, S, se) : ze === Re ? je(O, U, S, se) : ze === D ? Ve(O, U, S, se) : ze === Q || ze === W ? V(O) || V(U) ? !1 : Ne(O, U, S, se) : ze === Y || ze === ke || ze === v ? N(O.valueOf(), U.valueOf()) : !1;
        }
        return R;
      }
      function f(K, fe, Ce, je) {
        var Ne = K.length;
        if (fe.length !== Ne)
          return !1;
        for (; Ne-- > 0; )
          if (!Ce(K[Ne], fe[Ne], Ne, Ne, K, fe, je))
            return !1;
        return !0;
      }
      var p = E(f);
      function y(K, fe) {
        return N(K.valueOf(), fe.valueOf());
      }
      function C(K, fe, Ce, je) {
        var Ne = K.size === fe.size;
        if (!Ne)
          return !1;
        if (!K.size)
          return !0;
        var Fe = {}, Ve = 0;
        return K.forEach(function(nt, S) {
          if (Ne) {
            var R = !1, O = 0;
            fe.forEach(function(U, se) {
              !R && !Fe[O] && (R = Ce(S, se, Ve, O, K, fe, je) && Ce(nt, U, S, se, K, fe, je)) && (Fe[O] = !0), O++;
            }), Ve++, Ne = R;
          }
        }), Ne;
      }
      var I = E(C), F = "_owner", ne = Object.prototype.hasOwnProperty;
      function ue(K, fe, Ce, je) {
        var Ne = Object.keys(K), Fe = Ne.length;
        if (Object.keys(fe).length !== Fe)
          return !1;
        for (var Ve; Fe-- > 0; ) {
          if (Ve = Ne[Fe], Ve === F) {
            var nt = !!K.$$typeof, S = !!fe.$$typeof;
            if ((nt || S) && nt !== S)
              return !1;
          }
          if (!ne.call(fe, Ve) || !Ce(K[Ve], fe[Ve], Ve, Ve, K, fe, je))
            return !1;
        }
        return !0;
      }
      var ae = E(ue);
      function oe(K, fe) {
        return K.source === fe.source && K.flags === fe.flags;
      }
      function ye(K, fe, Ce, je) {
        var Ne = K.size === fe.size;
        if (!Ne)
          return !1;
        if (!K.size)
          return !0;
        var Fe = {};
        return K.forEach(function(Ve, nt) {
          if (Ne) {
            var S = !1, R = 0;
            fe.forEach(function(O, U) {
              !S && !Fe[R] && (S = Ce(Ve, O, nt, U, K, fe, je)) && (Fe[R] = !0), R++;
            }), Ne = S;
          }
        }), Ne;
      }
      var $ = E(ye), re = Object.freeze({
        areArraysEqual: f,
        areDatesEqual: y,
        areMapsEqual: C,
        areObjectsEqual: ue,
        areRegExpsEqual: oe,
        areSetsEqual: ye,
        createIsNestedEqual: d
      }), te = Object.freeze({
        areArraysEqual: p,
        areDatesEqual: y,
        areMapsEqual: I,
        areObjectsEqual: ae,
        areRegExpsEqual: oe,
        areSetsEqual: $,
        createIsNestedEqual: d
      }), H = h(re);
      function le(K, fe) {
        return H(K, fe, void 0);
      }
      var Z = h(b(re, { createIsNestedEqual: function() {
        return N;
      } }));
      function k(K, fe) {
        return Z(K, fe, void 0);
      }
      var M = h(te);
      function xe(K, fe) {
        return M(K, fe, /* @__PURE__ */ new WeakMap());
      }
      var _e = h(b(te, {
        createIsNestedEqual: function() {
          return N;
        }
      }));
      function Pe(K, fe) {
        return _e(K, fe, /* @__PURE__ */ new WeakMap());
      }
      function De(K) {
        return h(b(re, K(re)));
      }
      function We(K) {
        var fe = h(b(te, K(te)));
        return function(Ce, je, Ne) {
          return Ne === void 0 && (Ne = /* @__PURE__ */ new WeakMap()), fe(Ce, je, Ne);
        };
      }
      l.circularDeepEqual = xe, l.circularShallowEqual = Pe, l.createCustomCircularEqual = We, l.createCustomEqual = De, l.deepEqual = le, l.sameValueZeroEqual = N, l.shallowEqual = k, Object.defineProperty(l, "__esModule", { value: !0 });
    });
  }(di, di.exports)), di.exports;
}
var Eo = { exports: {} }, _c;
function Do() {
  if (_c) return Eo.exports;
  _c = 1;
  function a(l) {
    var d, E, b = "";
    if (typeof l == "string" || typeof l == "number") b += l;
    else if (typeof l == "object") if (Array.isArray(l)) {
      var L = l.length;
      for (d = 0; d < L; d++) l[d] && (E = a(l[d])) && (b && (b += " "), b += E);
    } else for (E in l) l[E] && (b && (b += " "), b += E);
    return b;
  }
  function c() {
    for (var l, d, E = 0, b = "", L = arguments.length; E < L; E++) (l = arguments[E]) && (d = a(l)) && (b && (b += " "), b += d);
    return b;
  }
  return Eo.exports = c, Eo.exports.clsx = c, Eo.exports;
}
var Ie = {}, ks, Ec;
function pp() {
  return Ec || (Ec = 1, ks = function(c, l, d) {
    return c === l ? !0 : c.className === l.className && d(c.style, l.style) && c.width === l.width && c.autoSize === l.autoSize && c.cols === l.cols && c.draggableCancel === l.draggableCancel && c.draggableHandle === l.draggableHandle && d(c.verticalCompact, l.verticalCompact) && d(c.compactType, l.compactType) && d(c.layout, l.layout) && d(c.margin, l.margin) && d(c.containerPadding, l.containerPadding) && c.rowHeight === l.rowHeight && c.maxRows === l.maxRows && c.isBounded === l.isBounded && c.isDraggable === l.isDraggable && c.isResizable === l.isResizable && c.allowOverlap === l.allowOverlap && c.preventCollision === l.preventCollision && c.useCSSTransforms === l.useCSSTransforms && c.transformScale === l.transformScale && c.isDroppable === l.isDroppable && d(c.resizeHandles, l.resizeHandles) && d(c.resizeHandle, l.resizeHandle) && c.onLayoutChange === l.onLayoutChange && c.onDragStart === l.onDragStart && c.onDrag === l.onDrag && c.onDragStop === l.onDragStop && c.onResizeStart === l.onResizeStart && c.onResize === l.onResize && c.onResizeStop === l.onResizeStop && c.onDrop === l.onDrop && d(c.droppingItem, l.droppingItem) && d(c.innerRef, l.innerRef);
  }), ks;
}
var Rc;
function vr() {
  if (Rc) return Ie;
  Rc = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.bottom = N, Ie.childrenEqual = Re, Ie.cloneLayout = W, Ie.cloneLayoutItem = B, Ie.collides = Q, Ie.compact = D, Ie.compactItem = h, Ie.compactType = Fe, Ie.correctBounds = f, Ie.fastPositionEqual = ke, Ie.fastRGLPropsEqual = void 0, Ie.getAllCollisions = C, Ie.getFirstCollision = y, Ie.getLayoutItem = p, Ie.getStatics = I, Ie.modifyLayout = Y, Ie.moveElement = F, Ie.moveElementAwayFromCollision = ne, Ie.noop = void 0, Ie.perc = ue, Ie.resizeItemInDirection = Pe, Ie.setTopLeft = We, Ie.setTransform = De, Ie.sortLayoutItems = K, Ie.sortLayoutItemsByColRow = Ce, Ie.sortLayoutItemsByRowCol = fe, Ie.synchronizeLayoutWithChildren = je, Ie.validateLayout = Ne, Ie.withLayoutItem = q;
  var a = /* @__PURE__ */ js(), c = l(Ot());
  function l(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function d(S, R) {
    var O = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var U = Object.getOwnPropertySymbols(S);
      R && (U = U.filter(function(se) {
        return Object.getOwnPropertyDescriptor(S, se).enumerable;
      })), O.push.apply(O, U);
    }
    return O;
  }
  function E(S) {
    for (var R = 1; R < arguments.length; R++) {
      var O = arguments[R] != null ? arguments[R] : {};
      R % 2 ? d(Object(O), !0).forEach(function(U) {
        b(S, U, O[U]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(O)) : d(Object(O)).forEach(function(U) {
        Object.defineProperty(S, U, Object.getOwnPropertyDescriptor(O, U));
      });
    }
    return S;
  }
  function b(S, R, O) {
    return (R = L(R)) in S ? Object.defineProperty(S, R, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : S[R] = O, S;
  }
  function L(S) {
    var R = V(S, "string");
    return typeof R == "symbol" ? R : R + "";
  }
  function V(S, R) {
    if (typeof S != "object" || !S) return S;
    var O = S[Symbol.toPrimitive];
    if (O !== void 0) {
      var U = O.call(S, R);
      if (typeof U != "object") return U;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (R === "string" ? String : Number)(S);
  }
  function N(S) {
    let R = 0, O;
    for (let U = 0, se = S.length; U < se; U++)
      O = S[U].y + S[U].h, O > R && (R = O);
    return R;
  }
  function W(S) {
    const R = Array(S.length);
    for (let O = 0, U = S.length; O < U; O++)
      R[O] = B(S[O]);
    return R;
  }
  function Y(S, R) {
    const O = Array(S.length);
    for (let U = 0, se = S.length; U < se; U++)
      R.i === S[U].i ? O[U] = R : O[U] = S[U];
    return O;
  }
  function q(S, R, O) {
    let U = p(S, R);
    return U ? (U = O(B(U)), S = Y(S, U), [S, U]) : [S, null];
  }
  function B(S) {
    return {
      w: S.w,
      h: S.h,
      x: S.x,
      y: S.y,
      i: S.i,
      minW: S.minW,
      maxW: S.maxW,
      minH: S.minH,
      maxH: S.maxH,
      moved: !!S.moved,
      static: !!S.static,
      // These can be null/undefined
      isDraggable: S.isDraggable,
      isResizable: S.isResizable,
      resizeHandles: S.resizeHandles,
      isBounded: S.isBounded
    };
  }
  function Re(S, R) {
    return (0, a.deepEqual)(c.default.Children.map(S, (O) => O?.key), c.default.Children.map(R, (O) => O?.key)) && (0, a.deepEqual)(c.default.Children.map(S, (O) => O?.props["data-grid"]), c.default.Children.map(R, (O) => O?.props["data-grid"]));
  }
  Ie.fastRGLPropsEqual = pp();
  function ke(S, R) {
    return S.left === R.left && S.top === R.top && S.width === R.width && S.height === R.height;
  }
  function Q(S, R) {
    return !(S.i === R.i || S.x + S.w <= R.x || S.x >= R.x + R.w || S.y + S.h <= R.y || S.y >= R.y + R.h);
  }
  function D(S, R, O, U) {
    const se = I(S);
    let me = N(se);
    const Ee = K(S, R), ze = Array(S.length);
    for (let be = 0, qe = Ee.length; be < qe; be++) {
      let Qe = B(Ee[be]);
      Qe.static || (Qe = h(se, Qe, R, O, Ee, U, me), me = Math.max(me, Qe.y + Qe.h), se.push(Qe)), ze[S.indexOf(Ee[be])] = Qe, Qe.moved = !1;
    }
    return ze;
  }
  const v = {
    x: "w",
    y: "h"
  };
  function u(S, R, O, U) {
    const se = v[U];
    R[U] += 1;
    const me = S.map((Ee) => Ee.i).indexOf(R.i);
    for (let Ee = me + 1; Ee < S.length; Ee++) {
      const ze = S[Ee];
      if (!ze.static) {
        if (ze.y > R.y + R.h) break;
        Q(R, ze) && u(S, ze, O + R[se], U);
      }
    }
    R[U] = O;
  }
  function h(S, R, O, U, se, me, Ee) {
    const ze = O === "vertical", be = O === "horizontal";
    if (ze)
      for (typeof Ee == "number" ? R.y = Math.min(Ee, R.y) : R.y = Math.min(N(S), R.y); R.y > 0 && !y(S, R); )
        R.y--;
    else if (be)
      for (; R.x > 0 && !y(S, R); )
        R.x--;
    let qe;
    for (; (qe = y(S, R)) && !(O === null && me); )
      if (be ? u(se, R, qe.x + qe.w, "x") : u(se, R, qe.y + qe.h, "y"), be && R.x + R.w > U)
        for (R.x = U - R.w, R.y++; R.x > 0 && !y(S, R); )
          R.x--;
    return R.y = Math.max(R.y, 0), R.x = Math.max(R.x, 0), R;
  }
  function f(S, R) {
    const O = I(S);
    for (let U = 0, se = S.length; U < se; U++) {
      const me = S[U];
      if (me.x + me.w > R.cols && (me.x = R.cols - me.w), me.x < 0 && (me.x = 0, me.w = R.cols), !me.static) O.push(me);
      else
        for (; y(O, me); )
          me.y++;
    }
    return S;
  }
  function p(S, R) {
    for (let O = 0, U = S.length; O < U; O++)
      if (S[O].i === R) return S[O];
  }
  function y(S, R) {
    for (let O = 0, U = S.length; O < U; O++)
      if (Q(S[O], R)) return S[O];
  }
  function C(S, R) {
    return S.filter((O) => Q(O, R));
  }
  function I(S) {
    return S.filter((R) => R.static);
  }
  function F(S, R, O, U, se, me, Ee, ze, be) {
    if (R.static && R.isDraggable !== !0 || R.y === U && R.x === O) return S;
    "Moving element ".concat(R.i, " to [").concat(String(O), ",").concat(String(U), "] from [").concat(R.x, ",").concat(R.y, "]");
    const qe = R.x, Qe = R.y;
    typeof O == "number" && (R.x = O), typeof U == "number" && (R.y = U), R.moved = !0;
    let at = K(S, Ee);
    (Ee === "vertical" && typeof U == "number" ? Qe >= U : Ee === "horizontal" && typeof O == "number" ? qe >= O : !1) && (at = at.reverse());
    const z = C(at, R), A = z.length > 0;
    if (A && be)
      return W(S);
    if (A && me)
      return "Collision prevented on ".concat(R.i, ", reverting."), R.x = qe, R.y = Qe, R.moved = !1, S;
    for (let ee = 0, ce = z.length; ee < ce; ee++) {
      const Me = z[ee];
      "Resolving collision between ".concat(R.i, " at [").concat(R.x, ",").concat(R.y, "] and ").concat(Me.i, " at [").concat(Me.x, ",").concat(Me.y, "]"), !Me.moved && (Me.static ? S = ne(S, Me, R, se, Ee) : S = ne(S, R, Me, se, Ee));
    }
    return S;
  }
  function ne(S, R, O, U, se, me) {
    const Ee = se === "horizontal", ze = se === "vertical", be = R.static;
    if (U) {
      U = !1;
      const at = {
        x: Ee ? Math.max(R.x - O.w, 0) : O.x,
        y: ze ? Math.max(R.y - O.h, 0) : O.y,
        w: O.w,
        h: O.h,
        i: "-1"
      }, m = y(S, at), z = m && m.y + m.h > R.y, A = m && R.x + R.w > m.x;
      if (m) {
        if (z && ze)
          return F(S, O, void 0, O.y + 1, U, be, se);
        if (z && se == null)
          return R.y = O.y, O.y = O.y + O.h, S;
        if (A && Ee)
          return F(S, R, O.x, void 0, U, be, se);
      } else return "Doing reverse collision on ".concat(O.i, " up to [").concat(at.x, ",").concat(at.y, "]."), F(S, O, Ee ? at.x : void 0, ze ? at.y : void 0, U, be, se);
    }
    const qe = Ee ? O.x + 1 : void 0, Qe = ze ? O.y + 1 : void 0;
    return qe == null && Qe == null ? S : F(S, O, Ee ? O.x + 1 : void 0, ze ? O.y + 1 : void 0, U, be, se);
  }
  function ue(S) {
    return S * 100 + "%";
  }
  const ae = (S, R, O, U) => S + O > U ? R : O, oe = (S, R, O) => S < 0 ? R : O, ye = (S) => Math.max(0, S), $ = (S) => Math.max(0, S), re = (S, R, O) => {
    let {
      left: U,
      height: se,
      width: me
    } = R;
    const Ee = S.top - (se - S.height);
    return {
      left: U,
      width: me,
      height: oe(Ee, S.height, se),
      top: $(Ee)
    };
  }, te = (S, R, O) => {
    let {
      top: U,
      left: se,
      height: me,
      width: Ee
    } = R;
    return {
      top: U,
      height: me,
      width: ae(S.left, S.width, Ee, O),
      left: ye(se)
    };
  }, H = (S, R, O) => {
    let {
      top: U,
      height: se,
      width: me
    } = R;
    const Ee = S.left - (me - S.width);
    return {
      height: se,
      width: Ee < 0 ? S.width : ae(S.left, S.width, me, O),
      top: $(U),
      left: ye(Ee)
    };
  }, le = (S, R, O) => {
    let {
      top: U,
      left: se,
      height: me,
      width: Ee
    } = R;
    return {
      width: Ee,
      left: se,
      height: oe(U, S.height, me),
      top: $(U)
    };
  }, _e = {
    n: re,
    ne: function() {
      return re(arguments.length <= 0 ? void 0 : arguments[0], te(...arguments));
    },
    e: te,
    se: function() {
      return le(arguments.length <= 0 ? void 0 : arguments[0], te(...arguments));
    },
    s: le,
    sw: function() {
      return le(arguments.length <= 0 ? void 0 : arguments[0], H(...arguments));
    },
    w: H,
    nw: function() {
      return re(arguments.length <= 0 ? void 0 : arguments[0], H(...arguments));
    }
  };
  function Pe(S, R, O, U) {
    const se = _e[S];
    return se ? se(R, E(E({}, R), O), U) : O;
  }
  function De(S) {
    let {
      top: R,
      left: O,
      width: U,
      height: se
    } = S;
    const me = "translate(".concat(O, "px,").concat(R, "px)");
    return {
      transform: me,
      WebkitTransform: me,
      MozTransform: me,
      msTransform: me,
      OTransform: me,
      width: "".concat(U, "px"),
      height: "".concat(se, "px"),
      position: "absolute"
    };
  }
  function We(S) {
    let {
      top: R,
      left: O,
      width: U,
      height: se
    } = S;
    return {
      top: "".concat(R, "px"),
      left: "".concat(O, "px"),
      width: "".concat(U, "px"),
      height: "".concat(se, "px"),
      position: "absolute"
    };
  }
  function K(S, R) {
    return R === "horizontal" ? Ce(S) : R === "vertical" ? fe(S) : S;
  }
  function fe(S) {
    return S.slice(0).sort(function(R, O) {
      return R.y > O.y || R.y === O.y && R.x > O.x ? 1 : R.y === O.y && R.x === O.x ? 0 : -1;
    });
  }
  function Ce(S) {
    return S.slice(0).sort(function(R, O) {
      return R.x > O.x || R.x === O.x && R.y > O.y ? 1 : -1;
    });
  }
  function je(S, R, O, U, se) {
    S = S || [];
    const me = [];
    c.default.Children.forEach(R, (ze) => {
      if (ze?.key == null) return;
      const be = p(S, String(ze.key)), qe = ze.props["data-grid"];
      be && qe == null ? me.push(B(be)) : qe ? me.push(B(E(E({}, qe), {}, {
        i: ze.key
      }))) : me.push(B({
        w: 1,
        h: 1,
        x: 0,
        y: N(me),
        i: String(ze.key)
      }));
    });
    const Ee = f(me, {
      cols: O
    });
    return se ? Ee : D(Ee, U, O);
  }
  function Ne(S) {
    let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const O = ["x", "y", "w", "h"];
    if (!Array.isArray(S)) throw new Error(R + " must be an array!");
    for (let U = 0, se = S.length; U < se; U++) {
      const me = S[U];
      for (let Ee = 0; Ee < O.length; Ee++) {
        const ze = O[Ee], be = me[ze];
        if (typeof be != "number" || Number.isNaN(be))
          throw new Error("ReactGridLayout: ".concat(R, "[").concat(U, "].").concat(ze, " must be a number! Received: ").concat(be, " (").concat(typeof be, ")"));
      }
      if (typeof me.i < "u" && typeof me.i != "string")
        throw new Error("ReactGridLayout: ".concat(R, "[").concat(U, "].i must be a string! Received: ").concat(me.i, " (").concat(typeof me.i, ")"));
    }
  }
  function Fe(S) {
    const {
      verticalCompact: R,
      compactType: O
    } = S || {};
    return R === !1 ? null : O;
  }
  function Ve() {
  }
  const nt = () => {
  };
  return Ie.noop = nt, Ie;
}
var an = {}, Cc;
function Ds() {
  if (Cc) return an;
  Cc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = a, an.calcGridItemPosition = l, an.calcGridItemWHPx = c, an.calcWH = E, an.calcXY = d, an.clamp = b;
  function a(L) {
    const {
      margin: V,
      containerPadding: N,
      containerWidth: W,
      cols: Y
    } = L;
    return (W - V[0] * (Y - 1) - N[0] * 2) / Y;
  }
  function c(L, V, N) {
    return Number.isFinite(L) ? Math.round(V * L + Math.max(0, L - 1) * N) : L;
  }
  function l(L, V, N, W, Y, q) {
    const {
      margin: B,
      containerPadding: Re,
      rowHeight: ke
    } = L, Q = a(L), D = {};
    return q && q.resizing ? (D.width = Math.round(q.resizing.width), D.height = Math.round(q.resizing.height)) : (D.width = c(W, Q, B[0]), D.height = c(Y, ke, B[1])), q && q.dragging ? (D.top = Math.round(q.dragging.top), D.left = Math.round(q.dragging.left)) : q && q.resizing && typeof q.resizing.top == "number" && typeof q.resizing.left == "number" ? (D.top = Math.round(q.resizing.top), D.left = Math.round(q.resizing.left)) : (D.top = Math.round((ke + B[1]) * N + Re[1]), D.left = Math.round((Q + B[0]) * V + Re[0])), D;
  }
  function d(L, V, N, W, Y) {
    const {
      margin: q,
      containerPadding: B,
      cols: Re,
      rowHeight: ke,
      maxRows: Q
    } = L, D = a(L);
    let v = Math.round((N - B[0]) / (D + q[0])), u = Math.round((V - B[1]) / (ke + q[1]));
    return v = b(v, 0, Re - W), u = b(u, 0, Q - Y), {
      x: v,
      y: u
    };
  }
  function E(L, V, N, W, Y, q) {
    const {
      margin: B,
      maxRows: Re,
      cols: ke,
      rowHeight: Q
    } = L, D = a(L);
    let v = Math.round((V + B[0]) / (D + B[0])), u = Math.round((N + B[1]) / (Q + B[1])), h = b(v, 0, ke - W), f = b(u, 0, Re - Y);
    return ["sw", "w", "nw"].indexOf(q) !== -1 && (h = b(v, 0, ke)), ["nw", "n", "ne"].indexOf(q) !== -1 && (f = b(u, 0, Re)), {
      w: h,
      h: f
    };
  }
  function b(L, V, N) {
    return Math.max(Math.min(L, N), V);
  }
  return an;
}
var oi = {}, _s = { exports: {} }, Es, Oc;
function hp() {
  if (Oc) return Es;
  Oc = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Es = a, Es;
}
var Rs, Pc;
function gp() {
  if (Pc) return Rs;
  Pc = 1;
  var a = /* @__PURE__ */ hp();
  function c() {
  }
  function l() {
  }
  return l.resetWarningCache = c, Rs = function() {
    function d(L, V, N, W, Y, q) {
      if (q !== a) {
        var B = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw B.name = "Invariant Violation", B;
      }
    }
    d.isRequired = d;
    function E() {
      return d;
    }
    var b = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: E,
      element: d,
      elementType: d,
      instanceOf: E,
      node: d,
      objectOf: E,
      oneOf: E,
      oneOfType: E,
      shape: E,
      exact: E,
      checkPropTypes: l,
      resetWarningCache: c
    };
    return b.PropTypes = b, b;
  }, Rs;
}
var zc;
function jn() {
  return zc || (zc = 1, _s.exports = /* @__PURE__ */ gp()()), _s.exports;
}
var li = { exports: {} }, Cs, jc;
function mp() {
  if (jc) return Cs;
  jc = 1;
  var a = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, d = Object.getOwnPropertyNames, E = Object.getPrototypeOf, b = Object.prototype.hasOwnProperty, L = (m, z) => {
    for (var A in z)
      c(m, A, { get: z[A], enumerable: !0 });
  }, V = (m, z, A, ee) => {
    if (z && typeof z == "object" || typeof z == "function")
      for (let ce of d(z))
        !b.call(m, ce) && ce !== A && c(m, ce, { get: () => z[ce], enumerable: !(ee = l(z, ce)) || ee.enumerable });
    return m;
  }, N = (m, z, A) => (A = m != null ? a(E(m)) : {}, V(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !m || !m.__esModule ? c(A, "default", { value: m, enumerable: !0 }) : A,
    m
  )), W = (m) => V(c({}, "__esModule", { value: !0 }), m), Y = {};
  L(Y, {
    DraggableCore: () => Qe,
    default: () => at
  }), Cs = W(Y);
  var q = N(Ot()), B = N(/* @__PURE__ */ jn()), Re = N(pi()), ke = Do();
  function Q(m, z) {
    for (let A = 0, ee = m.length; A < ee; A++)
      if (z.apply(z, [m[A], A, m])) return m[A];
  }
  function D(m) {
    return typeof m == "function" || Object.prototype.toString.call(m) === "[object Function]";
  }
  function v(m) {
    return typeof m == "number" && !isNaN(m);
  }
  function u(m) {
    return parseInt(m, 10);
  }
  function h(m, z, A) {
    if (m[z])
      return new Error(`Invalid prop ${z} passed to ${A} - do not set this, set it on the child.`);
  }
  var f = ["Moz", "Webkit", "O", "ms"];
  function p(m = "transform") {
    var z, A;
    if (typeof window > "u") return "";
    const ee = (A = (z = window.document) == null ? void 0 : z.documentElement) == null ? void 0 : A.style;
    if (!ee || m in ee) return "";
    for (let ce = 0; ce < f.length; ce++)
      if (y(m, f[ce]) in ee) return f[ce];
    return "";
  }
  function y(m, z) {
    return z ? `${z}${C(m)}` : m;
  }
  function C(m) {
    let z = "", A = !0;
    for (let ee = 0; ee < m.length; ee++)
      A ? (z += m[ee].toUpperCase(), A = !1) : m[ee] === "-" ? A = !0 : z += m[ee];
    return z;
  }
  var I = p(), F = "";
  function ne(m, z) {
    var A;
    F || (F = (A = Q([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(ce) {
      return D(m[ce]);
    })) != null ? A : "");
    const ee = m[F];
    return D(ee) ? !!ee.call(m, z) : !1;
  }
  function ue(m, z, A) {
    let ee = m;
    do {
      if (ne(ee, z)) return !0;
      if (ee === A) return !1;
      ee = ee.parentNode;
    } while (ee);
    return !1;
  }
  function ae(m, z, A, ee) {
    if (!m) return;
    const ce = { capture: !0, ...ee }, Me = A;
    m.addEventListener ? m.addEventListener(z, Me, ce) : m.attachEvent ? m.attachEvent("on" + z, Me) : m["on" + z] = Me;
  }
  function oe(m, z, A, ee) {
    if (!m) return;
    const ce = { capture: !0, ...ee }, Me = A;
    m.removeEventListener ? m.removeEventListener(z, Me, ce) : m.detachEvent ? m.detachEvent("on" + z, Me) : m["on" + z] = null;
  }
  function ye(m) {
    let z = m.clientHeight;
    const A = m.ownerDocument.defaultView.getComputedStyle(m);
    return z += u(A.borderTopWidth), z += u(A.borderBottomWidth), z;
  }
  function $(m) {
    let z = m.clientWidth;
    const A = m.ownerDocument.defaultView.getComputedStyle(m);
    return z += u(A.borderLeftWidth), z += u(A.borderRightWidth), z;
  }
  function re(m) {
    let z = m.clientHeight;
    const A = m.ownerDocument.defaultView.getComputedStyle(m);
    return z -= u(A.paddingTop), z -= u(A.paddingBottom), z;
  }
  function te(m) {
    let z = m.clientWidth;
    const A = m.ownerDocument.defaultView.getComputedStyle(m);
    return z -= u(A.paddingLeft), z -= u(A.paddingRight), z;
  }
  function H(m, z, A) {
    const ce = z === z.ownerDocument.body ? { left: 0, top: 0 } : z.getBoundingClientRect(), Me = (m.clientX + z.scrollLeft - ce.left) / A, Le = (m.clientY + z.scrollTop - ce.top) / A;
    return { x: Me, y: Le };
  }
  function le(m, z) {
    const A = k(m, z, "px");
    return { [y("transform", I)]: A };
  }
  function Z(m, z) {
    return k(m, z, "");
  }
  function k({ x: m, y: z }, A, ee) {
    let ce = `translate(${m}${ee},${z}${ee})`;
    if (A) {
      const Me = `${typeof A.x == "string" ? A.x : A.x + ee}`, Le = `${typeof A.y == "string" ? A.y : A.y + ee}`;
      ce = `translate(${Me}, ${Le})` + ce;
    }
    return ce;
  }
  function M(m, z) {
    return m.targetTouches && Q(m.targetTouches, (A) => z === A.identifier) || m.changedTouches && Q(m.changedTouches, (A) => z === A.identifier);
  }
  function xe(m) {
    if (m.targetTouches && m.targetTouches[0]) return m.targetTouches[0].identifier;
    if (m.changedTouches && m.changedTouches[0]) return m.changedTouches[0].identifier;
  }
  function _e() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Pe(m, z) {
    if (!m) return;
    let A = m.getElementById("react-draggable-style-el");
    if (!A) {
      A = m.createElement("style"), A.type = "text/css", A.id = "react-draggable-style-el";
      const ee = z ?? _e();
      ee && A.setAttribute("nonce", ee), A.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, A.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, m.getElementsByTagName("head")[0].appendChild(A);
    }
    m.body && K(m.body, "react-draggable-transparent-selection");
  }
  function De(m) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      We(m);
    }) : We(m);
  }
  function We(m) {
    if (m)
      try {
        m.body && fe(m.body, "react-draggable-transparent-selection");
        const z = m.selection;
        if (z)
          z.empty();
        else {
          const A = (m.defaultView || window).getSelection();
          A && A.type !== "Caret" && A.removeAllRanges();
        }
      } catch {
      }
  }
  function K(m, z) {
    m.classList ? m.classList.add(z) : m.className.match(new RegExp(`(?:^|\\s)${z}(?!\\S)`)) || (m.className += ` ${z}`);
  }
  function fe(m, z) {
    m.classList ? m.classList.remove(z) : m.className = m.className.replace(new RegExp(`(?:^|\\s)${z}(?!\\S)`, "g"), "");
  }
  function Ce(m, z, A) {
    if (!m.props.bounds) return [z, A];
    let { bounds: ee } = m.props;
    ee = typeof ee == "string" ? ee : R(ee);
    const ce = O(m);
    if (typeof ee == "string") {
      const { ownerDocument: Me } = ce, Le = Me.defaultView;
      if (!Le)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Ke;
      if (ee === "parent" ? Ke = ce.parentNode : Ke = ce.getRootNode().querySelector(ee), !(Ke instanceof Le.HTMLElement))
        throw new Error('Bounds selector "' + ee + '" could not find an element.');
      const dt = Ke, Wt = Le.getComputedStyle(ce), $t = Le.getComputedStyle(dt);
      ee = {
        left: -ce.offsetLeft + u($t.paddingLeft) + u(Wt.marginLeft),
        top: -ce.offsetTop + u($t.paddingTop) + u(Wt.marginTop),
        right: te(dt) - $(ce) - ce.offsetLeft + u($t.paddingRight) - u(Wt.marginRight),
        bottom: re(dt) - ye(ce) - ce.offsetTop + u($t.paddingBottom) - u(Wt.marginBottom)
      };
    }
    return v(ee.right) && (z = Math.min(z, ee.right)), v(ee.bottom) && (A = Math.min(A, ee.bottom)), v(ee.left) && (z = Math.max(z, ee.left)), v(ee.top) && (A = Math.max(A, ee.top)), [z, A];
  }
  function je(m, z, A) {
    const ee = Math.round(z / m[0]) * m[0], ce = Math.round(A / m[1]) * m[1];
    return [ee, ce];
  }
  function Ne(m) {
    return m.props.axis === "both" || m.props.axis === "x";
  }
  function Fe(m) {
    return m.props.axis === "both" || m.props.axis === "y";
  }
  function Ve(m, z, A) {
    const ee = typeof z == "number" ? M(m, z) : null;
    if (typeof z == "number" && !ee) return null;
    const ce = O(A), Me = A.props.offsetParent || ce.offsetParent || ce.ownerDocument.body;
    return H(ee || m, Me, A.props.scale);
  }
  function nt(m, z, A) {
    const ee = !v(m.lastX), ce = O(m);
    return ee ? {
      node: ce,
      deltaX: 0,
      deltaY: 0,
      lastX: z,
      lastY: A,
      x: z,
      y: A
    } : {
      node: ce,
      deltaX: z - m.lastX,
      deltaY: A - m.lastY,
      lastX: m.lastX,
      lastY: m.lastY,
      x: z,
      y: A
    };
  }
  function S(m, z) {
    const A = m.props.scale;
    return {
      node: z.node,
      x: m.state.x + z.deltaX / A,
      y: m.state.y + z.deltaY / A,
      deltaX: z.deltaX / A,
      deltaY: z.deltaY / A,
      lastX: m.state.x,
      lastY: m.state.y
    };
  }
  function R(m) {
    return {
      left: m.left,
      top: m.top,
      right: m.right,
      bottom: m.bottom
    };
  }
  function O(m) {
    const z = m.findDOMNode();
    if (!z)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return z;
  }
  var U = N(Ot()), se = N(/* @__PURE__ */ jn()), me = N(pi()), Ee = function() {
  }, ze = Ee, be = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  }, qe = be.mouse, Qe = class extends U.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (m) => {
        if (this.props.onMouseDown(m), !this.props.allowAnyClick && (typeof m.button == "number" && m.button !== 0 || m.ctrlKey)) return !1;
        const z = this.findDOMNode();
        if (!z || !z.ownerDocument || !z.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: A } = z;
        if (this.props.disabled || !(m.target instanceof A.defaultView.Node) || this.props.handle && !ue(m.target, this.props.handle, z) || this.props.cancel && ue(m.target, this.props.cancel, z))
          return;
        m.type === "touchstart" && !this.props.allowMobileScroll && m.preventDefault();
        const ee = xe(m);
        this.touchIdentifier = ee;
        const ce = Ve(m, ee, this);
        if (ce == null) return;
        const { x: Me, y: Le } = ce, Ke = nt(this, Me, Le);
        ze("calling", this.props.onStart), !(this.props.onStart(m, Ke) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Pe(A, this.props.nonce), this.dragging = !0, this.lastX = Me, this.lastY = Le, ae(A, qe.move, this.handleDrag), ae(A, qe.stop, this.handleDragStop));
      }, this.handleDrag = (m) => {
        const z = Ve(m, this.touchIdentifier, this);
        if (z == null) return;
        let { x: A, y: ee } = z;
        if (Array.isArray(this.props.grid)) {
          let Le = A - this.lastX, Ke = ee - this.lastY;
          if ([Le, Ke] = je(this.props.grid, Le, Ke), !Le && !Ke) return;
          A = this.lastX + Le, ee = this.lastY + Ke;
        }
        const ce = nt(this, A, ee);
        if (this.props.onDrag(m, ce) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const Le = document.createEvent("MouseEvents");
            Le.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(Le);
          }
          return;
        }
        this.lastX = A, this.lastY = ee;
      }, this.handleDragStop = (m) => {
        if (!this.dragging) return;
        const z = Ve(m, this.touchIdentifier, this);
        if (z == null) return;
        let { x: A, y: ee } = z;
        if (Array.isArray(this.props.grid)) {
          let Ke = A - this.lastX || 0, dt = ee - this.lastY || 0;
          [Ke, dt] = je(this.props.grid, Ke, dt), A = this.lastX + Ke, ee = this.lastY + dt;
        }
        const ce = nt(this, A, ee);
        if (this.props.onStop(m, ce) === !1 || this.mounted === !1) return !1;
        const Le = this.findDOMNode();
        Le && this.props.enableUserSelectHack && De(Le.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, Le && (oe(Le.ownerDocument, qe.move, this.handleDrag), oe(Le.ownerDocument, qe.stop, this.handleDragStop));
      }, this.onMouseDown = (m) => (qe = be.mouse, this.handleDragStart(m)), this.onMouseUp = (m) => (qe = be.mouse, this.handleDragStop(m)), this.onTouchStart = (m) => (qe = be.touch, this.handleDragStart(m)), this.onTouchEnd = (m) => (qe = be.touch, this.handleDragStop(m));
    }
    componentDidMount() {
      this.mounted = !0;
      const m = this.findDOMNode();
      m && ae(m, be.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const m = this.findDOMNode();
      if (m) {
        const { ownerDocument: z } = m;
        oe(z, be.mouse.move, this.handleDrag), oe(z, be.touch.move, this.handleDrag), oe(z, be.mouse.stop, this.handleDragStop), oe(z, be.touch.stop, this.handleDragStop), oe(m, be.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && De(z);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var m;
      if ((m = this.props) != null && m.nodeRef)
        return this.props.nodeRef.current;
      const z = me.default;
      return typeof z.findDOMNode == "function" ? z.findDOMNode(this) : null;
    }
    render() {
      return U.cloneElement(U.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  };
  Qe.displayName = "DraggableCore", Qe.propTypes = {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: se.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: se.default.bool,
    children: se.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: se.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: se.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(m, z) {
      if (m[z] && m[z].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: se.default.arrayOf(se.default.number),
    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable handle=".handle">
     *              <div>
     *                  <div className="handle">Click me to drag</div>
     *                  <div>This is some other content</div>
     *              </div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    handle: se.default.string,
    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *           return(
     *               <Draggable cancel=".cancel">
     *                   <div>
     *                     <div className="cancel">You can't drag from here</div>
     *                     <div>Dragging here works fine</div>
     *                   </div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    cancel: se.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
     * Unfortunately, in order for <Draggable> to work properly, we need raw access
     * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
     * as in this example:
     *
     * function MyComponent() {
     *   const nodeRef = React.useRef(null);
     *   return (
     *     <Draggable nodeRef={nodeRef}>
     *       <div ref={nodeRef}>Example Target</div>
     *     </Draggable>
     *   );
     * }
     *
     * This can be used for arbitrarily nested components, so long as the ref ends up
     * pointing to the actual child DOM node and not a custom component.
     */
    nodeRef: se.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: se.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: se.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: se.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: se.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: se.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: se.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: h,
    style: h,
    transform: h
  }, Qe.defaultProps = {
    allowAnyClick: !1,
    // by default only accept left click
    allowMobileScroll: !1,
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function() {
    },
    onDrag: function() {
    },
    onStop: function() {
    },
    onMouseDown: function() {
    },
    scale: 1
  };
  var at = class extends q.Component {
    constructor(m) {
      super(m), this.onDragStart = (z, A) => {
        if (this.props.onStart(z, S(this, A)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (z, A) => {
        if (!this.state.dragging) return !1;
        const ee = S(this, A), ce = {
          x: ee.x,
          y: ee.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: Le, y: Ke } = ce;
          ce.x += this.state.slackX, ce.y += this.state.slackY;
          const [dt, Wt] = Ce(this, ce.x, ce.y);
          ce.x = dt, ce.y = Wt, ce.slackX = this.state.slackX + (Le - ce.x), ce.slackY = this.state.slackY + (Ke - ce.y), ee.x = ce.x, ee.y = ce.y, ee.deltaX = ce.x - this.state.x, ee.deltaY = ce.y - this.state.y;
        }
        if (this.props.onDrag(z, ee) === !1) return !1;
        this.setState(ce);
      }, this.onDragStop = (z, A) => {
        if (!this.state.dragging || this.props.onStop(z, S(this, A)) === !1) return !1;
        const ce = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: Le, y: Ke } = this.props.position;
          ce.x = Le, ce.y = Ke;
        }
        this.setState(ce);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: m.position ? m.position.x : m.defaultPosition.x,
        y: m.position ? m.position.y : m.defaultPosition.y,
        prevPropsPosition: { ...m.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, m.position && !(m.onDrag || m.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: m }, { prevPropsPosition: z }) {
      return m && (!z || m.x !== z.x || m.y !== z.y) ? {
        x: m.x,
        y: m.y,
        prevPropsPosition: { ...m }
      } : null;
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
    }
    componentWillUnmount() {
      this.state.dragging && this.setState({ dragging: !1 });
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var m;
      if ((m = this.props) != null && m.nodeRef)
        return this.props.nodeRef.current;
      const z = Re.default;
      return typeof z.findDOMNode == "function" ? z.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: m,
        bounds: z,
        children: A,
        defaultPosition: ee,
        defaultClassName: ce,
        defaultClassNameDragging: Me,
        defaultClassNameDragged: Le,
        position: Ke,
        positionOffset: dt,
        scale: Wt,
        ...$t
      } = this.props;
      let Dn = {}, Gn = null;
      const Zt = !!!Ke || this.state.dragging, xr = Ke || ee, wr = {
        // Set left if horizontal drag is enabled
        x: Ne(this) && Zt ? this.state.x : xr.x,
        // Set top if vertical drag is enabled
        y: Fe(this) && Zt ? this.state.y : xr.y
      };
      this.state.isElementSVG ? Gn = Z(wr, dt) : Dn = le(wr, dt);
      const Yn = q.Children.only(A), hi = (0, ke.clsx)(Yn.props.className || "", ce, {
        [Me]: this.state.dragging,
        [Le]: this.state.dragged
      });
      return /* @__PURE__ */ q.createElement(Qe, { ...$t, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, q.cloneElement(Yn, {
        className: hi,
        style: { ...Yn.props.style, ...Dn },
        transform: Gn
      }));
    }
  };
  return at.displayName = "Draggable", at.propTypes = {
    // Accepts all props <DraggableCore> accepts.
    ...Qe.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: B.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: B.default.oneOfType([
      B.default.shape({
        left: B.default.number,
        right: B.default.number,
        top: B.default.number,
        bottom: B.default.number
      }),
      B.default.string,
      B.default.oneOf([!1])
    ]),
    defaultClassName: B.default.string,
    defaultClassNameDragging: B.default.string,
    defaultClassNameDragged: B.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: B.default.shape({
      x: B.default.number,
      y: B.default.number
    }),
    positionOffset: B.default.shape({
      x: B.default.oneOfType([B.default.number, B.default.string]),
      y: B.default.oneOfType([B.default.number, B.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: B.default.shape({
      x: B.default.number,
      y: B.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: h,
    style: h,
    transform: h
  }, at.defaultProps = {
    ...Qe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, Cs;
}
var Dc;
function bs() {
  if (Dc) return li.exports;
  Dc = 1;
  const a = mp(), c = a.DraggableCore, l = a.default || a;
  return li.exports = l, li.exports.default = l, li.exports.DraggableCore = c, li.exports;
}
var si = { exports: {} }, ai = {}, Ro = {}, bc;
function yp() {
  if (bc) return Ro;
  bc = 1, Ro.__esModule = !0, Ro.cloneElement = V;
  var a = c(Ot());
  function c(N) {
    return N && N.__esModule ? N : { default: N };
  }
  function l(N, W) {
    var Y = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(N);
      W && (q = q.filter(function(B) {
        return Object.getOwnPropertyDescriptor(N, B).enumerable;
      })), Y.push.apply(Y, q);
    }
    return Y;
  }
  function d(N) {
    for (var W = 1; W < arguments.length; W++) {
      var Y = arguments[W] != null ? arguments[W] : {};
      W % 2 ? l(Object(Y), !0).forEach(function(q) {
        E(N, q, Y[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(Y)) : l(Object(Y)).forEach(function(q) {
        Object.defineProperty(N, q, Object.getOwnPropertyDescriptor(Y, q));
      });
    }
    return N;
  }
  function E(N, W, Y) {
    return W = b(W), W in N ? Object.defineProperty(N, W, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : N[W] = Y, N;
  }
  function b(N) {
    var W = L(N, "string");
    return typeof W == "symbol" ? W : String(W);
  }
  function L(N, W) {
    if (typeof N != "object" || N === null) return N;
    var Y = N[Symbol.toPrimitive];
    if (Y !== void 0) {
      var q = Y.call(N, W);
      if (typeof q != "object") return q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (W === "string" ? String : Number)(N);
  }
  function V(N, W) {
    return W.style && N.props.style && (W.style = d(d({}, N.props.style), W.style)), W.className && N.props.className && (W.className = N.props.className + " " + W.className), /* @__PURE__ */ a.default.cloneElement(N, W);
  }
  return Ro;
}
var ui = {}, Tc;
function $c() {
  if (Tc) return ui;
  Tc = 1, ui.__esModule = !0, ui.resizableProps = void 0;
  var a = c(/* @__PURE__ */ jn());
  bs();
  function c(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var l = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: a.default.oneOf(["both", "x", "y", "none"]),
    className: a.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: a.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: a.default.shape({
      allowAnyClick: a.default.bool,
      cancel: a.default.string,
      children: a.default.node,
      disabled: a.default.bool,
      enableUserSelectHack: a.default.bool,
      offsetParent: a.default.node,
      grid: a.default.arrayOf(a.default.number),
      handle: a.default.string,
      nodeRef: a.default.object,
      onStart: a.default.func,
      onDrag: a.default.func,
      onStop: a.default.func,
      onMouseDown: a.default.func,
      scale: a.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var E = arguments.length, b = new Array(E), L = 0; L < E; L++)
        b[L] = arguments[L];
      var V = b[0];
      if (V.axis === "both" || V.axis === "y") {
        var N;
        return (N = a.default.number).isRequired.apply(N, b);
      }
      return a.default.number.apply(a.default, b);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: a.default.oneOfType([a.default.node, a.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: a.default.arrayOf(a.default.number),
    lockAspectRatio: a.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: a.default.arrayOf(a.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: a.default.arrayOf(a.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: a.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: a.default.func,
    /*
    * Called on resize event
    * */
    onResize: a.default.func,
    /*
    * Defines which resize handles should be rendered (default: 'se')
    * 's' - South handle (bottom-center)
    * 'w' - West handle (left-center)
    * 'e' - East handle (right-center)
    * 'n' - North handle (top-center)
    * 'sw' - Southwest handle (bottom-left)
    * 'nw' - Northwest handle (top-left)
    * 'se' - Southeast handle (bottom-right)
    * 'ne' - Northeast handle (top-center)
    * */
    resizeHandles: a.default.arrayOf(a.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: a.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var E = arguments.length, b = new Array(E), L = 0; L < E; L++)
        b[L] = arguments[L];
      var V = b[0];
      if (V.axis === "both" || V.axis === "x") {
        var N;
        return (N = a.default.number).isRequired.apply(N, b);
      }
      return a.default.number.apply(a.default, b);
    }
  };
  return ui.resizableProps = l, ui;
}
var Nc;
function Gc() {
  if (Nc) return ai;
  Nc = 1, ai.__esModule = !0, ai.default = void 0;
  var a = L(Ot()), c = bs(), l = yp(), d = $c(), E = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function b(v) {
    if (typeof WeakMap != "function") return null;
    var u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (b = function(p) {
      return p ? h : u;
    })(v);
  }
  function L(v, u) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var h = b(u);
    if (h && h.has(v))
      return h.get(v);
    var f = {}, p = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var y in v)
      if (y !== "default" && Object.prototype.hasOwnProperty.call(v, y)) {
        var C = p ? Object.getOwnPropertyDescriptor(v, y) : null;
        C && (C.get || C.set) ? Object.defineProperty(f, y, C) : f[y] = v[y];
      }
    return f.default = v, h && h.set(v, f), f;
  }
  function V() {
    return V = Object.assign ? Object.assign.bind() : function(v) {
      for (var u = 1; u < arguments.length; u++) {
        var h = arguments[u];
        for (var f in h)
          Object.prototype.hasOwnProperty.call(h, f) && (v[f] = h[f]);
      }
      return v;
    }, V.apply(this, arguments);
  }
  function N(v, u) {
    if (v == null) return {};
    var h = {}, f = Object.keys(v), p, y;
    for (y = 0; y < f.length; y++)
      p = f[y], !(u.indexOf(p) >= 0) && (h[p] = v[p]);
    return h;
  }
  function W(v, u) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      u && (f = f.filter(function(p) {
        return Object.getOwnPropertyDescriptor(v, p).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function Y(v) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? W(Object(h), !0).forEach(function(f) {
        q(v, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : W(Object(h)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return v;
  }
  function q(v, u, h) {
    return u = B(u), u in v ? Object.defineProperty(v, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[u] = h, v;
  }
  function B(v) {
    var u = Re(v, "string");
    return typeof u == "symbol" ? u : String(u);
  }
  function Re(v, u) {
    if (typeof v != "object" || v === null) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(v, u);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(v);
  }
  function ke(v, u) {
    v.prototype = Object.create(u.prototype), v.prototype.constructor = v, Q(v, u);
  }
  function Q(v, u) {
    return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, p) {
      return f.__proto__ = p, f;
    }, Q(v, u);
  }
  var D = /* @__PURE__ */ function(v) {
    ke(u, v);
    function u() {
      for (var f, p = arguments.length, y = new Array(p), C = 0; C < p; C++)
        y[C] = arguments[C];
      return f = v.call.apply(v, [this].concat(y)) || this, f.handleRefs = {}, f.lastHandleRect = null, f.slack = null, f;
    }
    var h = u.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(p, y) {
      var C = this.props, I = C.minConstraints, F = C.maxConstraints, ne = C.lockAspectRatio;
      if (!I && !F && !ne) return [p, y];
      if (ne) {
        var ue = this.props.width / this.props.height, ae = p - this.props.width, oe = y - this.props.height;
        Math.abs(ae) > Math.abs(oe * ue) ? y = p / ue : p = y * ue;
      }
      var ye = p, $ = y, re = this.slack || [0, 0], te = re[0], H = re[1];
      return p += te, y += H, I && (p = Math.max(I[0], p), y = Math.max(I[1], y)), F && (p = Math.min(F[0], p), y = Math.min(F[1], y)), this.slack = [te + (ye - p), H + ($ - y)], [p, y];
    }, h.resizeHandler = function(p, y) {
      var C = this;
      return function(I, F) {
        var ne = F.node, ue = F.deltaX, ae = F.deltaY;
        p === "onResizeStart" && C.resetData();
        var oe = (C.props.axis === "both" || C.props.axis === "x") && y !== "n" && y !== "s", ye = (C.props.axis === "both" || C.props.axis === "y") && y !== "e" && y !== "w";
        if (!(!oe && !ye)) {
          var $ = y[0], re = y[y.length - 1], te = ne.getBoundingClientRect();
          if (C.lastHandleRect != null) {
            if (re === "w") {
              var H = te.left - C.lastHandleRect.left;
              ue += H;
            }
            if ($ === "n") {
              var le = te.top - C.lastHandleRect.top;
              ae += le;
            }
          }
          C.lastHandleRect = te, re === "w" && (ue = -ue), $ === "n" && (ae = -ae);
          var Z = C.props.width + (oe ? ue / C.props.transformScale : 0), k = C.props.height + (ye ? ae / C.props.transformScale : 0), M = C.runConstraints(Z, k);
          Z = M[0], k = M[1];
          var xe = Z !== C.props.width || k !== C.props.height, _e = typeof C.props[p] == "function" ? C.props[p] : null, Pe = p === "onResize" && !xe;
          _e && !Pe && (I.persist == null || I.persist(), _e(I, {
            node: ne,
            size: {
              width: Z,
              height: k
            },
            handle: y
          })), p === "onResizeStop" && C.resetData();
        }
      };
    }, h.renderResizeHandle = function(p, y) {
      var C = this.props.handle;
      if (!C)
        return /* @__PURE__ */ a.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + p,
          ref: y
        });
      if (typeof C == "function")
        return C(p, y);
      var I = typeof C.type == "string", F = Y({
        ref: y
      }, I ? {} : {
        handleAxis: p
      });
      return /* @__PURE__ */ a.cloneElement(C, F);
    }, h.render = function() {
      var p = this, y = this.props, C = y.children, I = y.className, F = y.draggableOpts;
      y.width, y.height, y.handle, y.handleSize, y.lockAspectRatio, y.axis, y.minConstraints, y.maxConstraints, y.onResize, y.onResizeStop, y.onResizeStart;
      var ne = y.resizeHandles;
      y.transformScale;
      var ue = N(y, E);
      return (0, l.cloneElement)(C, Y(Y({}, ue), {}, {
        className: (I ? I + " " : "") + "react-resizable",
        children: [].concat(C.props.children, ne.map(function(ae) {
          var oe, ye = (oe = p.handleRefs[ae]) != null ? oe : p.handleRefs[ae] = /* @__PURE__ */ a.createRef();
          return /* @__PURE__ */ a.createElement(c.DraggableCore, V({}, F, {
            nodeRef: ye,
            key: "resizableHandle-" + ae,
            onStop: p.resizeHandler("onResizeStop", ae),
            onStart: p.resizeHandler("onResizeStart", ae),
            onDrag: p.resizeHandler("onResize", ae)
          }), p.renderResizeHandle(ae, ye));
        }))
      }));
    }, u;
  }(a.Component);
  return ai.default = D, D.propTypes = d.resizableProps, D.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, ai;
}
var ci = {}, Mc;
function vp() {
  if (Mc) return ci;
  Mc = 1, ci.__esModule = !0, ci.default = void 0;
  var a = V(Ot()), c = b(/* @__PURE__ */ jn()), l = b(Gc()), d = $c(), E = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function b(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function L(u) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (L = function(y) {
      return y ? f : h;
    })(u);
  }
  function V(u, h) {
    if (u && u.__esModule)
      return u;
    if (u === null || typeof u != "object" && typeof u != "function")
      return { default: u };
    var f = L(h);
    if (f && f.has(u))
      return f.get(u);
    var p = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in u)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(u, C)) {
        var I = y ? Object.getOwnPropertyDescriptor(u, C) : null;
        I && (I.get || I.set) ? Object.defineProperty(p, C, I) : p[C] = u[C];
      }
    return p.default = u, f && f.set(u, p), p;
  }
  function N() {
    return N = Object.assign ? Object.assign.bind() : function(u) {
      for (var h = 1; h < arguments.length; h++) {
        var f = arguments[h];
        for (var p in f)
          Object.prototype.hasOwnProperty.call(f, p) && (u[p] = f[p]);
      }
      return u;
    }, N.apply(this, arguments);
  }
  function W(u, h) {
    var f = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var p = Object.getOwnPropertySymbols(u);
      h && (p = p.filter(function(y) {
        return Object.getOwnPropertyDescriptor(u, y).enumerable;
      })), f.push.apply(f, p);
    }
    return f;
  }
  function Y(u) {
    for (var h = 1; h < arguments.length; h++) {
      var f = arguments[h] != null ? arguments[h] : {};
      h % 2 ? W(Object(f), !0).forEach(function(p) {
        q(u, p, f[p]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : W(Object(f)).forEach(function(p) {
        Object.defineProperty(u, p, Object.getOwnPropertyDescriptor(f, p));
      });
    }
    return u;
  }
  function q(u, h, f) {
    return h = B(h), h in u ? Object.defineProperty(u, h, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : u[h] = f, u;
  }
  function B(u) {
    var h = Re(u, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function Re(u, h) {
    if (typeof u != "object" || u === null) return u;
    var f = u[Symbol.toPrimitive];
    if (f !== void 0) {
      var p = f.call(u, h);
      if (typeof p != "object") return p;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(u);
  }
  function ke(u, h) {
    if (u == null) return {};
    var f = {}, p = Object.keys(u), y, C;
    for (C = 0; C < p.length; C++)
      y = p[C], !(h.indexOf(y) >= 0) && (f[y] = u[y]);
    return f;
  }
  function Q(u, h) {
    u.prototype = Object.create(h.prototype), u.prototype.constructor = u, D(u, h);
  }
  function D(u, h) {
    return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(p, y) {
      return p.__proto__ = y, p;
    }, D(u, h);
  }
  var v = /* @__PURE__ */ function(u) {
    Q(h, u);
    function h() {
      for (var p, y = arguments.length, C = new Array(y), I = 0; I < y; I++)
        C[I] = arguments[I];
      return p = u.call.apply(u, [this].concat(C)) || this, p.state = {
        width: p.props.width,
        height: p.props.height,
        propsWidth: p.props.width,
        propsHeight: p.props.height
      }, p.onResize = function(F, ne) {
        var ue = ne.size;
        p.props.onResize ? (F.persist == null || F.persist(), p.setState(ue, function() {
          return p.props.onResize && p.props.onResize(F, ne);
        })) : p.setState(ue);
      }, p;
    }
    h.getDerivedStateFromProps = function(y, C) {
      return C.propsWidth !== y.width || C.propsHeight !== y.height ? {
        width: y.width,
        height: y.height,
        propsWidth: y.width,
        propsHeight: y.height
      } : null;
    };
    var f = h.prototype;
    return f.render = function() {
      var y = this.props, C = y.handle, I = y.handleSize;
      y.onResize;
      var F = y.onResizeStart, ne = y.onResizeStop, ue = y.draggableOpts, ae = y.minConstraints, oe = y.maxConstraints, ye = y.lockAspectRatio, $ = y.axis;
      y.width, y.height;
      var re = y.resizeHandles, te = y.style, H = y.transformScale, le = ke(y, E);
      return /* @__PURE__ */ a.createElement(l.default, {
        axis: $,
        draggableOpts: ue,
        handle: C,
        handleSize: I,
        height: this.state.height,
        lockAspectRatio: ye,
        maxConstraints: oe,
        minConstraints: ae,
        onResizeStart: F,
        onResize: this.onResize,
        onResizeStop: ne,
        resizeHandles: re,
        transformScale: H,
        width: this.state.width
      }, /* @__PURE__ */ a.createElement("div", N({}, le, {
        style: Y(Y({}, te), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(a.Component);
  return ci.default = v, v.propTypes = Y(Y({}, d.resizableProps), {}, {
    children: c.default.element
  }), ci;
}
var Lc;
function xp() {
  return Lc || (Lc = 1, si.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, si.exports.Resizable = Gc().default, si.exports.ResizableBox = vp().default), si.exports;
}
var un = {}, Ic;
function Yc() {
  if (Ic) return un;
  Ic = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var a = l(/* @__PURE__ */ jn()), c = l(Ot());
  function l(b) {
    return b && b.__esModule ? b : { default: b };
  }
  const d = un.resizeHandleAxesType = a.default.arrayOf(a.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), E = un.resizeHandleType = a.default.oneOfType([a.default.node, a.default.func]);
  return un.default = {
    //
    // Basic props
    //
    className: a.default.string,
    style: a.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: a.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: a.default.bool,
    // # of cols.
    cols: a.default.number,
    // A selector that will not be draggable.
    draggableCancel: a.default.string,
    // A selector for the draggable handler
    draggableHandle: a.default.string,
    // Deprecated
    verticalCompact: function(b) {
      b.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: a.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(b) {
      var L = b.layout;
      L !== void 0 && vr().validateLayout(L, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: a.default.arrayOf(a.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: a.default.arrayOf(a.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: a.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: a.default.number,
    //
    // Flags
    //
    isBounded: a.default.bool,
    isDraggable: a.default.bool,
    isResizable: a.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: a.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: a.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: a.default.bool,
    // parent layout transform scale
    transformScale: a.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: a.default.bool,
    // Resize handle options
    resizeHandles: d,
    resizeHandle: E,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: a.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: a.default.func,
    // Calls on each drag movement.
    onDrag: a.default.func,
    // Calls when drag is complete.
    onDragStop: a.default.func,
    //Calls when resize starts.
    onResizeStart: a.default.func,
    // Calls when resize movement happens.
    onResize: a.default.func,
    // Calls when resize is complete.
    onResizeStop: a.default.func,
    // Calls when some element is dropped.
    onDrop: a.default.func,
    //
    // Other validations
    //
    droppingItem: a.default.shape({
      i: a.default.string.isRequired,
      w: a.default.number.isRequired,
      h: a.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(b, L) {
      const V = b[L], N = {};
      c.default.Children.forEach(V, function(W) {
        if (W?.key != null) {
          if (N[W.key])
            throw new Error('Duplicate child key "' + W.key + '" found! This will cause problems in ReactGridLayout.');
          N[W.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: a.default.any
  }, un;
}
var Wc;
function wp() {
  if (Wc) return oi;
  Wc = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var a = W(Ot()), c = pi(), l = W(/* @__PURE__ */ jn()), d = bs(), E = xp(), b = vr(), L = Ds(), V = Yc(), N = W(Do());
  function W(D) {
    return D && D.__esModule ? D : { default: D };
  }
  function Y(D, v) {
    var u = Object.keys(D);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(D);
      v && (h = h.filter(function(f) {
        return Object.getOwnPropertyDescriptor(D, f).enumerable;
      })), u.push.apply(u, h);
    }
    return u;
  }
  function q(D) {
    for (var v = 1; v < arguments.length; v++) {
      var u = arguments[v] != null ? arguments[v] : {};
      v % 2 ? Y(Object(u), !0).forEach(function(h) {
        B(D, h, u[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(u)) : Y(Object(u)).forEach(function(h) {
        Object.defineProperty(D, h, Object.getOwnPropertyDescriptor(u, h));
      });
    }
    return D;
  }
  function B(D, v, u) {
    return (v = Re(v)) in D ? Object.defineProperty(D, v, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : D[v] = u, D;
  }
  function Re(D) {
    var v = ke(D, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function ke(D, v) {
    if (typeof D != "object" || !D) return D;
    var u = D[Symbol.toPrimitive];
    if (u !== void 0) {
      var h = u.call(D, v);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(D);
  }
  let Q = class extends a.default.Component {
    constructor() {
      super(...arguments), B(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), B(this, "elementRef", /* @__PURE__ */ a.default.createRef()), B(this, "onDragStart", (v, u) => {
        let {
          node: h
        } = u;
        const {
          onDragStart: f,
          transformScale: p
        } = this.props;
        if (!f) return;
        const y = {
          top: 0,
          left: 0
        }, {
          offsetParent: C
        } = h;
        if (!C) return;
        const I = C.getBoundingClientRect(), F = h.getBoundingClientRect(), ne = F.left / p, ue = I.left / p, ae = F.top / p, oe = I.top / p;
        y.left = ne - ue + C.scrollLeft, y.top = ae - oe + C.scrollTop, this.setState({
          dragging: y
        });
        const {
          x: ye,
          y: $
        } = (0, L.calcXY)(this.getPositionParams(), y.top, y.left, this.props.w, this.props.h);
        return f.call(this, this.props.i, ye, $, {
          e: v,
          node: h,
          newPosition: y
        });
      }), B(this, "onDrag", (v, u, h) => {
        let {
          node: f,
          deltaX: p,
          deltaY: y
        } = u;
        const {
          onDrag: C
        } = this.props;
        if (!C) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let I = this.state.dragging.top + y, F = this.state.dragging.left + p;
        const {
          isBounded: ne,
          i: ue,
          w: ae,
          h: oe,
          containerWidth: ye
        } = this.props, $ = this.getPositionParams();
        if (ne) {
          const {
            offsetParent: le
          } = f;
          if (le) {
            const {
              margin: Z,
              rowHeight: k
            } = this.props, M = le.clientHeight - (0, L.calcGridItemWHPx)(oe, k, Z[1]);
            I = (0, L.clamp)(I, 0, M);
            const xe = (0, L.calcGridColWidth)($), _e = ye - (0, L.calcGridItemWHPx)(ae, xe, Z[0]);
            F = (0, L.clamp)(F, 0, _e);
          }
        }
        const re = {
          top: I,
          left: F
        };
        h ? this.setState({
          dragging: re
        }) : (0, c.flushSync)(() => {
          this.setState({
            dragging: re
          });
        });
        const {
          x: te,
          y: H
        } = (0, L.calcXY)($, I, F, ae, oe);
        return C.call(this, ue, te, H, {
          e: v,
          node: f,
          newPosition: re
        });
      }), B(this, "onDragStop", (v, u) => {
        let {
          node: h
        } = u;
        const {
          onDragStop: f
        } = this.props;
        if (!f) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: p,
          h: y,
          i: C
        } = this.props, {
          left: I,
          top: F
        } = this.state.dragging, ne = {
          top: F,
          left: I
        };
        this.setState({
          dragging: null
        });
        const {
          x: ue,
          y: ae
        } = (0, L.calcXY)(this.getPositionParams(), F, I, p, y);
        return f.call(this, C, ue, ae, {
          e: v,
          node: h,
          newPosition: ne
        });
      }), B(this, "onResizeStop", (v, u, h) => this.onResizeHandler(v, u, h, "onResizeStop")), B(this, "onResizeStart", (v, u, h) => this.onResizeHandler(v, u, h, "onResizeStart")), B(this, "onResize", (v, u, h) => this.onResizeHandler(v, u, h, "onResize"));
    }
    shouldComponentUpdate(v, u) {
      if (this.props.children !== v.children || this.props.droppingPosition !== v.droppingPosition) return !0;
      const h = (0, L.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), f = (0, L.calcGridItemPosition)(this.getPositionParams(v), v.x, v.y, v.w, v.h, u);
      return !(0, b.fastPositionEqual)(h, f) || this.props.useCSSTransforms !== v.useCSSTransforms;
    }
    componentDidMount() {
      this.moveDroppingItem({});
    }
    componentDidUpdate(v) {
      this.moveDroppingItem(v);
    }
    // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.
    moveDroppingItem(v) {
      const {
        droppingPosition: u
      } = this.props;
      if (!u) return;
      const h = this.elementRef.current;
      if (!h) return;
      const f = v.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: p
      } = this.state, y = p && u.left !== f.left || u.top !== f.top;
      if (!p)
        this.onDragStart(u.e, {
          node: h,
          deltaX: u.left,
          deltaY: u.top
        });
      else if (y) {
        const C = u.left - p.left, I = u.top - p.top;
        this.onDrag(
          u.e,
          {
            node: h,
            deltaX: C,
            deltaY: I
          },
          !0
          // dontFLush: avoid flushSync to temper warnings
        );
      }
    }
    getPositionParams() {
      let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props;
      return {
        cols: v.cols,
        containerPadding: v.containerPadding,
        containerWidth: v.containerWidth,
        margin: v.margin,
        maxRows: v.maxRows,
        rowHeight: v.rowHeight
      };
    }
    /**
     * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
     * well when server rendering, and the only way to do that properly is to use percentage width/left because
     * we don't know exactly what the browser viewport is.
     * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
     * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
     *
     * @param  {Object} pos Position object with width, height, left, top.
     * @return {Object}     Style object.
     */
    createStyle(v) {
      const {
        usePercentages: u,
        containerWidth: h,
        useCSSTransforms: f
      } = this.props;
      let p;
      return f ? p = (0, b.setTransform)(v) : (p = (0, b.setTopLeft)(v), u && (p.left = (0, b.perc)(v.left / h), p.width = (0, b.perc)(v.width / h))), p;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(v, u) {
      return /* @__PURE__ */ a.default.createElement(d.DraggableCore, {
        disabled: !u,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, v);
    }
    /**
     * Utility function to setup callback handler definitions for
     * similarily structured resize events.
     */
    curryResizeHandler(v, u) {
      return (h, f) => (
        /*: Function*/
        u(h, f, v)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(v, u, h) {
      const {
        cols: f,
        minW: p,
        minH: y,
        maxW: C,
        maxH: I,
        transformScale: F,
        resizeHandles: ne,
        resizeHandle: ue
      } = this.props, ae = this.getPositionParams(), oe = (0, L.calcGridItemPosition)(ae, 0, 0, f, 0).width, ye = (0, L.calcGridItemPosition)(ae, 0, 0, p, y), $ = (0, L.calcGridItemPosition)(ae, 0, 0, C, I), re = [ye.width, ye.height], te = [Math.min($.width, oe), Math.min($.height, 1 / 0)];
      return /* @__PURE__ */ a.default.createElement(
        E.Resizable,
        {
          draggableOpts: {
            disabled: !h
          },
          className: h ? void 0 : "react-resizable-hide",
          width: u.width,
          height: u.height,
          minConstraints: re,
          maxConstraints: te,
          onResizeStop: this.curryResizeHandler(u, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(u, this.onResizeStart),
          onResize: this.curryResizeHandler(u, this.onResize),
          transformScale: F,
          resizeHandles: ne,
          handle: ue
        },
        v
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(v, u, h, f) {
      let {
        node: p,
        size: y,
        handle: C
      } = u;
      const I = this.props[f];
      if (!I) return;
      const {
        x: F,
        y: ne,
        i: ue,
        maxH: ae,
        minH: oe,
        containerWidth: ye
      } = this.props, {
        minW: $,
        maxW: re
      } = this.props;
      let te = y;
      p && (te = (0, b.resizeItemInDirection)(C, h, y, ye), (0, c.flushSync)(() => {
        this.setState({
          resizing: f === "onResizeStop" ? null : te
        });
      }));
      let {
        w: H,
        h: le
      } = (0, L.calcWH)(this.getPositionParams(), te.width, te.height, F, ne, C);
      H = (0, L.clamp)(H, Math.max($, 1), re), le = (0, L.clamp)(le, oe, ae), I.call(this, ue, H, le, {
        e: v,
        node: p,
        size: te,
        handle: C
      });
    }
    render() {
      const {
        x: v,
        y: u,
        w: h,
        h: f,
        isDraggable: p,
        isResizable: y,
        droppingPosition: C,
        useCSSTransforms: I
      } = this.props, F = (0, L.calcGridItemPosition)(this.getPositionParams(), v, u, h, f, this.state), ne = a.default.Children.only(this.props.children);
      let ue = /* @__PURE__ */ a.default.cloneElement(ne, {
        ref: this.elementRef,
        className: (0, N.default)("react-grid-item", ne.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": p,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!C,
          cssTransforms: I
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: q(q(q({}, this.props.style), ne.props.style), this.createStyle(F))
      });
      return ue = this.mixinResizable(ue, F, y), ue = this.mixinDraggable(ue, p), ue;
    }
  };
  return oi.default = Q, B(Q, "propTypes", {
    // Children must be only a single element
    children: l.default.element,
    // General grid attributes
    cols: l.default.number.isRequired,
    containerWidth: l.default.number.isRequired,
    rowHeight: l.default.number.isRequired,
    margin: l.default.array.isRequired,
    maxRows: l.default.number.isRequired,
    containerPadding: l.default.array.isRequired,
    // These are all in grid units
    x: l.default.number.isRequired,
    y: l.default.number.isRequired,
    w: l.default.number.isRequired,
    h: l.default.number.isRequired,
    // All optional
    minW: function(D, v) {
      const u = D[v];
      if (typeof u != "number") return new Error("minWidth not Number");
      if (u > D.w || u > D.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(D, v) {
      const u = D[v];
      if (typeof u != "number") return new Error("maxWidth not Number");
      if (u < D.w || u < D.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(D, v) {
      const u = D[v];
      if (typeof u != "number") return new Error("minHeight not Number");
      if (u > D.h || u > D.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(D, v) {
      const u = D[v];
      if (typeof u != "number") return new Error("maxHeight not Number");
      if (u < D.h || u < D.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: l.default.string.isRequired,
    // Resize handle options
    resizeHandles: V.resizeHandleAxesType,
    resizeHandle: V.resizeHandleType,
    // Functions
    onDragStop: l.default.func,
    onDragStart: l.default.func,
    onDrag: l.default.func,
    onResizeStop: l.default.func,
    onResizeStart: l.default.func,
    onResize: l.default.func,
    // Flags
    isDraggable: l.default.bool.isRequired,
    isResizable: l.default.bool.isRequired,
    isBounded: l.default.bool.isRequired,
    static: l.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: l.default.bool.isRequired,
    transformScale: l.default.number,
    // Others
    className: l.default.string,
    // Selector for draggable handle
    handle: l.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: l.default.string,
    // Current position of a dropping element
    droppingPosition: l.default.shape({
      e: l.default.object.isRequired,
      left: l.default.number.isRequired,
      top: l.default.number.isRequired
    })
  }), B(Q, "defaultProps", {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: 1 / 0,
    maxW: 1 / 0,
    transformScale: 1
  }), oi;
}
var Ac;
function Xc() {
  if (Ac) return ii;
  Ac = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.default = void 0;
  var a = N(Ot()), c = /* @__PURE__ */ js(), l = V(Do()), d = vr(), E = Ds(), b = V(wp()), L = V(Yc());
  function V(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function N(v, u) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (N = function(p, y) {
      if (!y && p && p.__esModule) return p;
      var C, I, F = { __proto__: null, default: p };
      if (p === null || typeof p != "object" && typeof p != "function") return F;
      if (C = y ? f : h) {
        if (C.has(p)) return C.get(p);
        C.set(p, F);
      }
      for (const ne in p) ne !== "default" && {}.hasOwnProperty.call(p, ne) && ((I = (C = Object.defineProperty) && Object.getOwnPropertyDescriptor(p, ne)) && (I.get || I.set) ? C(F, ne, I) : F[ne] = p[ne]);
      return F;
    })(v, u);
  }
  function W(v, u) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      u && (f = f.filter(function(p) {
        return Object.getOwnPropertyDescriptor(v, p).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function Y(v) {
    for (var u = 1; u < arguments.length; u++) {
      var h = arguments[u] != null ? arguments[u] : {};
      u % 2 ? W(Object(h), !0).forEach(function(f) {
        q(v, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : W(Object(h)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return v;
  }
  function q(v, u, h) {
    return (u = B(u)) in v ? Object.defineProperty(v, u, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[u] = h, v;
  }
  function B(v) {
    var u = Re(v, "string");
    return typeof u == "symbol" ? u : u + "";
  }
  function Re(v, u) {
    if (typeof v != "object" || !v) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(v, u);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(v);
  }
  const ke = "react-grid-layout";
  let Q = !1;
  try {
    Q = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let D = class extends a.Component {
    constructor() {
      super(...arguments), q(this, "state", {
        activeDrag: null,
        layout: (0, d.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, d.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), q(this, "dragEnterCounter", 0), q(this, "onDragStart", (u, h, f, p) => {
        let {
          e: y,
          node: C
        } = p;
        const {
          layout: I
        } = this.state, F = (0, d.getLayoutItem)(I, u);
        if (!F) return;
        const ne = {
          w: F.w,
          h: F.h,
          x: F.x,
          y: F.y,
          placeholder: !0,
          i: u
        };
        return this.setState({
          oldDragItem: (0, d.cloneLayoutItem)(F),
          oldLayout: I,
          activeDrag: ne
        }), this.props.onDragStart(I, F, F, null, y, C);
      }), q(this, "onDrag", (u, h, f, p) => {
        let {
          e: y,
          node: C
        } = p;
        const {
          oldDragItem: I
        } = this.state;
        let {
          layout: F
        } = this.state;
        const {
          cols: ne,
          allowOverlap: ue,
          preventCollision: ae
        } = this.props, oe = (0, d.getLayoutItem)(F, u);
        if (!oe) return;
        const ye = {
          w: oe.w,
          h: oe.h,
          x: oe.x,
          y: oe.y,
          placeholder: !0,
          i: u
        };
        F = (0, d.moveElement)(F, oe, h, f, !0, ae, (0, d.compactType)(this.props), ne, ue), this.props.onDrag(F, I, oe, ye, y, C), this.setState({
          layout: ue ? F : (0, d.compact)(F, (0, d.compactType)(this.props), ne),
          activeDrag: ye
        });
      }), q(this, "onDragStop", (u, h, f, p) => {
        let {
          e: y,
          node: C
        } = p;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: I
        } = this.state;
        let {
          layout: F
        } = this.state;
        const {
          cols: ne,
          preventCollision: ue,
          allowOverlap: ae
        } = this.props, oe = (0, d.getLayoutItem)(F, u);
        if (!oe) return;
        F = (0, d.moveElement)(F, oe, h, f, !0, ue, (0, d.compactType)(this.props), ne, ae);
        const $ = ae ? F : (0, d.compact)(F, (0, d.compactType)(this.props), ne);
        this.props.onDragStop($, I, oe, null, y, C);
        const {
          oldLayout: re
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: $,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged($, re);
      }), q(this, "onResizeStart", (u, h, f, p) => {
        let {
          e: y,
          node: C
        } = p;
        const {
          layout: I
        } = this.state, F = (0, d.getLayoutItem)(I, u);
        F && (this.setState({
          oldResizeItem: (0, d.cloneLayoutItem)(F),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(I, F, F, null, y, C));
      }), q(this, "onResize", (u, h, f, p) => {
        let {
          e: y,
          node: C,
          size: I,
          handle: F
        } = p;
        const {
          oldResizeItem: ne
        } = this.state, {
          layout: ue
        } = this.state, {
          cols: ae,
          preventCollision: oe,
          allowOverlap: ye
        } = this.props;
        let $ = !1, re, te, H;
        const [le, Z] = (0, d.withLayoutItem)(ue, u, (M) => {
          let xe;
          return te = M.x, H = M.y, ["sw", "w", "nw", "n", "ne"].indexOf(F) !== -1 && (["sw", "nw", "w"].indexOf(F) !== -1 && (te = M.x + (M.w - h), h = M.x !== te && te < 0 ? M.w : h, te = te < 0 ? 0 : te), ["ne", "n", "nw"].indexOf(F) !== -1 && (H = M.y + (M.h - f), f = M.y !== H && H < 0 ? M.h : f, H = H < 0 ? 0 : H), $ = !0), oe && !ye && (xe = (0, d.getAllCollisions)(ue, Y(Y({}, M), {}, {
            w: h,
            h: f,
            x: te,
            y: H
          })).filter((Pe) => Pe.i !== M.i).length > 0, xe && (H = M.y, f = M.h, te = M.x, h = M.w, $ = !1)), M.w = h, M.h = f, M;
        });
        if (!Z) return;
        re = le, $ && (re = (0, d.moveElement)(le, Z, te, H, !0, this.props.preventCollision, (0, d.compactType)(this.props), ae, ye));
        const k = {
          w: Z.w,
          h: Z.h,
          x: Z.x,
          y: Z.y,
          static: !0,
          i: u
        };
        this.props.onResize(re, ne, Z, k, y, C), this.setState({
          layout: ye ? re : (0, d.compact)(re, (0, d.compactType)(this.props), ae),
          activeDrag: k
        });
      }), q(this, "onResizeStop", (u, h, f, p) => {
        let {
          e: y,
          node: C
        } = p;
        const {
          layout: I,
          oldResizeItem: F
        } = this.state, {
          cols: ne,
          allowOverlap: ue
        } = this.props, ae = (0, d.getLayoutItem)(I, u), oe = ue ? I : (0, d.compact)(I, (0, d.compactType)(this.props), ne);
        this.props.onResizeStop(oe, F, ae, null, y, C);
        const {
          oldLayout: ye
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: oe,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(oe, ye);
      }), q(this, "onDragOver", (u) => {
        var h;
        if (u.preventDefault(), u.stopPropagation(), Q && // $FlowIgnore can't figure this out
        !((h = u.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(ke)))
          return !1;
        const {
          droppingItem: f,
          onDropDragOver: p,
          margin: y,
          cols: C,
          rowHeight: I,
          maxRows: F,
          width: ne,
          containerPadding: ue,
          transformScale: ae
        } = this.props, oe = p?.(u);
        if (oe === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const ye = Y(Y({}, f), oe), {
          layout: $
        } = this.state, re = u.currentTarget.getBoundingClientRect(), te = u.clientX - re.left, H = u.clientY - re.top, le = {
          left: te / ae,
          top: H / ae,
          e: u
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: Z,
              top: k
            } = this.state.droppingPosition;
            (Z != te || k != H) && this.setState({
              droppingPosition: le
            });
          }
        } else {
          const Z = {
            cols: C,
            margin: y,
            maxRows: F,
            rowHeight: I,
            containerWidth: ne,
            containerPadding: ue || y
          }, k = (0, E.calcXY)(Z, H, te, ye.w, ye.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ a.createElement("div", {
              key: ye.i
            }),
            droppingPosition: le,
            layout: [...$, Y(Y({}, ye), {}, {
              x: k.x,
              y: k.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), q(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: u,
          cols: h
        } = this.props, {
          layout: f
        } = this.state, p = (0, d.compact)(f.filter((y) => y.i !== u.i), (0, d.compactType)(this.props), h, this.props.allowOverlap);
        this.setState({
          layout: p,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), q(this, "onDragLeave", (u) => {
        u.preventDefault(), u.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), q(this, "onDragEnter", (u) => {
        u.preventDefault(), u.stopPropagation(), this.dragEnterCounter++;
      }), q(this, "onDrop", (u) => {
        u.preventDefault(), u.stopPropagation();
        const {
          droppingItem: h
        } = this.props, {
          layout: f
        } = this.state, p = f.find((y) => y.i === h.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(f, p, u);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(u, h) {
      let f;
      return h.activeDrag ? null : (!(0, c.deepEqual)(u.layout, h.propsLayout) || u.compactType !== h.compactType ? f = u.layout : (0, d.childrenEqual)(u.children, h.children) || (f = h.layout), f ? {
        layout: (0, d.synchronizeLayoutWithChildren)(f, u.children, u.cols, (0, d.compactType)(u), u.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: u.compactType,
        children: u.children,
        propsLayout: u.layout
      } : null);
    }
    shouldComponentUpdate(u, h) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== u.children || !(0, d.fastRGLPropsEqual)(this.props, u, c.deepEqual) || this.state.activeDrag !== h.activeDrag || this.state.mounted !== h.mounted || this.state.droppingPosition !== h.droppingPosition
      );
    }
    componentDidUpdate(u, h) {
      if (!this.state.activeDrag) {
        const f = this.state.layout, p = h.layout;
        this.onLayoutMaybeChanged(f, p);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const u = (0, d.bottom)(this.state.layout), h = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return u * this.props.rowHeight + (u - 1) * this.props.margin[1] + h * 2 + "px";
    }
    onLayoutMaybeChanged(u, h) {
      h || (h = this.state.layout), (0, c.deepEqual)(h, u) || this.props.onLayoutChange(u);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: u
      } = this.state;
      if (!u) return null;
      const {
        width: h,
        cols: f,
        margin: p,
        containerPadding: y,
        rowHeight: C,
        maxRows: I,
        useCSSTransforms: F,
        transformScale: ne
      } = this.props;
      return /* @__PURE__ */ a.createElement(b.default, {
        w: u.w,
        h: u.h,
        x: u.x,
        y: u.y,
        i: u.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: h,
        cols: f,
        margin: p,
        containerPadding: y || p,
        maxRows: I,
        rowHeight: C,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: F,
        transformScale: ne
      }, /* @__PURE__ */ a.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(u, h) {
      if (!u || !u.key) return;
      const f = (0, d.getLayoutItem)(this.state.layout, String(u.key));
      if (!f) return null;
      const {
        width: p,
        cols: y,
        margin: C,
        containerPadding: I,
        rowHeight: F,
        maxRows: ne,
        isDraggable: ue,
        isResizable: ae,
        isBounded: oe,
        useCSSTransforms: ye,
        transformScale: $,
        draggableCancel: re,
        draggableHandle: te,
        resizeHandles: H,
        resizeHandle: le
      } = this.props, {
        mounted: Z,
        droppingPosition: k
      } = this.state, M = typeof f.isDraggable == "boolean" ? f.isDraggable : !f.static && ue, xe = typeof f.isResizable == "boolean" ? f.isResizable : !f.static && ae, _e = f.resizeHandles || H, Pe = M && oe && f.isBounded !== !1;
      return /* @__PURE__ */ a.createElement(b.default, {
        containerWidth: p,
        cols: y,
        margin: C,
        containerPadding: I || C,
        maxRows: ne,
        rowHeight: F,
        cancel: re,
        handle: te,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: M,
        isResizable: xe,
        isBounded: Pe,
        useCSSTransforms: ye && Z,
        usePercentages: !Z,
        transformScale: $,
        w: f.w,
        h: f.h,
        x: f.x,
        y: f.y,
        i: f.i,
        minH: f.minH,
        minW: f.minW,
        maxH: f.maxH,
        maxW: f.maxW,
        static: f.static,
        droppingPosition: h ? k : void 0,
        resizeHandles: _e,
        resizeHandle: le
      }, u);
    }
    render() {
      const {
        className: u,
        style: h,
        isDroppable: f,
        innerRef: p
      } = this.props, y = (0, l.default)(ke, u), C = Y({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ a.createElement("div", {
        ref: p,
        className: y,
        style: C,
        onDrop: f ? this.onDrop : d.noop,
        onDragLeave: f ? this.onDragLeave : d.noop,
        onDragEnter: f ? this.onDragEnter : d.noop,
        onDragOver: f ? this.onDragOver : d.noop
      }, a.Children.map(this.props.children, (I) => this.processGridItem(I)), f && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ii.default = D, q(D, "displayName", "ReactGridLayout"), q(D, "propTypes", L.default), q(D, "defaultProps", {
    autoSize: !0,
    cols: 12,
    className: "",
    style: {},
    draggableHandle: "",
    draggableCancel: "",
    containerPadding: null,
    rowHeight: 150,
    maxRows: 1 / 0,
    // infinite vertical growth
    layout: [],
    margin: [10, 10],
    isBounded: !1,
    isDraggable: !0,
    isResizable: !0,
    allowOverlap: !1,
    isDroppable: !1,
    useCSSTransforms: !0,
    transformScale: 1,
    verticalCompact: !0,
    compactType: "vertical",
    preventCollision: !1,
    droppingItem: {
      i: "__dropping-elem__",
      h: 1,
      w: 1
    },
    resizeHandles: ["se"],
    onLayoutChange: d.noop,
    onDragStart: d.noop,
    onDrag: d.noop,
    onDragStop: d.noop,
    onResizeStart: d.noop,
    onResize: d.noop,
    onResizeStop: d.noop,
    onDrop: d.noop,
    onDropDragOver: d.noop
  }), ii;
}
var fi = {}, $n = {}, Hc;
function Qc() {
  if (Hc) return $n;
  Hc = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.findOrGenerateResponsiveLayout = d, $n.getBreakpointFromWidth = c, $n.getColsFromBreakpoint = l, $n.sortBreakpoints = E;
  var a = vr();
  function c(b, L) {
    const V = E(b);
    let N = V[0];
    for (let W = 1, Y = V.length; W < Y; W++) {
      const q = V[W];
      L > b[q] && (N = q);
    }
    return N;
  }
  function l(b, L) {
    if (!L[b])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + b + " is missing!");
    return L[b];
  }
  function d(b, L, V, N, W, Y) {
    if (b[V]) return (0, a.cloneLayout)(b[V]);
    let q = b[N];
    const B = E(L), Re = B.slice(B.indexOf(V));
    for (let ke = 0, Q = Re.length; ke < Q; ke++) {
      const D = Re[ke];
      if (b[D]) {
        q = b[D];
        break;
      }
    }
    return q = (0, a.cloneLayout)(q || []), (0, a.compact)((0, a.correctBounds)(q, {
      cols: W
    }), Y, W);
  }
  function E(b) {
    return Object.keys(b).sort(function(V, N) {
      return b[V] - b[N];
    });
  }
  return $n;
}
var Fc;
function Sp() {
  if (Fc) return fi;
  Fc = 1, Object.defineProperty(fi, "__esModule", {
    value: !0
  }), fi.default = void 0;
  var a = N(Ot()), c = V(/* @__PURE__ */ jn()), l = /* @__PURE__ */ js(), d = vr(), E = Qc(), b = V(Xc());
  const L = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function V(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function N(f, p) {
    if (typeof WeakMap == "function") var y = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
    return (N = function(I, F) {
      if (!F && I && I.__esModule) return I;
      var ne, ue, ae = { __proto__: null, default: I };
      if (I === null || typeof I != "object" && typeof I != "function") return ae;
      if (ne = F ? C : y) {
        if (ne.has(I)) return ne.get(I);
        ne.set(I, ae);
      }
      for (const oe in I) oe !== "default" && {}.hasOwnProperty.call(I, oe) && ((ue = (ne = Object.defineProperty) && Object.getOwnPropertyDescriptor(I, oe)) && (ue.get || ue.set) ? ne(ae, oe, ue) : ae[oe] = I[oe]);
      return ae;
    })(f, p);
  }
  function W() {
    return W = Object.assign ? Object.assign.bind() : function(f) {
      for (var p = 1; p < arguments.length; p++) {
        var y = arguments[p];
        for (var C in y) ({}).hasOwnProperty.call(y, C) && (f[C] = y[C]);
      }
      return f;
    }, W.apply(null, arguments);
  }
  function Y(f, p) {
    if (f == null) return {};
    var y, C, I = q(f, p);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(f);
      for (C = 0; C < F.length; C++) y = F[C], p.indexOf(y) === -1 && {}.propertyIsEnumerable.call(f, y) && (I[y] = f[y]);
    }
    return I;
  }
  function q(f, p) {
    if (f == null) return {};
    var y = {};
    for (var C in f) if ({}.hasOwnProperty.call(f, C)) {
      if (p.indexOf(C) !== -1) continue;
      y[C] = f[C];
    }
    return y;
  }
  function B(f, p) {
    var y = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(f);
      p && (C = C.filter(function(I) {
        return Object.getOwnPropertyDescriptor(f, I).enumerable;
      })), y.push.apply(y, C);
    }
    return y;
  }
  function Re(f) {
    for (var p = 1; p < arguments.length; p++) {
      var y = arguments[p] != null ? arguments[p] : {};
      p % 2 ? B(Object(y), !0).forEach(function(C) {
        ke(f, C, y[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(y)) : B(Object(y)).forEach(function(C) {
        Object.defineProperty(f, C, Object.getOwnPropertyDescriptor(y, C));
      });
    }
    return f;
  }
  function ke(f, p, y) {
    return (p = Q(p)) in f ? Object.defineProperty(f, p, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : f[p] = y, f;
  }
  function Q(f) {
    var p = D(f, "string");
    return typeof p == "symbol" ? p : p + "";
  }
  function D(f, p) {
    if (typeof f != "object" || !f) return f;
    var y = f[Symbol.toPrimitive];
    if (y !== void 0) {
      var C = y.call(f, p);
      if (typeof C != "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(f);
  }
  const v = (f) => Object.prototype.toString.call(f);
  function u(f, p) {
    return f == null ? null : Array.isArray(f) ? f : f[p];
  }
  let h = class extends a.Component {
    constructor() {
      super(...arguments), ke(this, "state", this.generateInitialState()), ke(this, "onLayoutChange", (p) => {
        this.props.onLayoutChange(p, Re(Re({}, this.props.layouts), {}, {
          [this.state.breakpoint]: p
        }));
      });
    }
    generateInitialState() {
      const {
        width: p,
        breakpoints: y,
        layouts: C,
        cols: I
      } = this.props, F = (0, E.getBreakpointFromWidth)(y, p), ne = (0, E.getColsFromBreakpoint)(F, I), ue = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, E.findOrGenerateResponsiveLayout)(C, y, F, F, ne, ue),
        breakpoint: F,
        cols: ne
      };
    }
    static getDerivedStateFromProps(p, y) {
      if (!(0, l.deepEqual)(p.layouts, y.layouts)) {
        const {
          breakpoint: C,
          cols: I
        } = y;
        return {
          layout: (0, E.findOrGenerateResponsiveLayout)(p.layouts, p.breakpoints, C, C, I, p.compactType),
          layouts: p.layouts
        };
      }
      return null;
    }
    componentDidUpdate(p) {
      (this.props.width != p.width || this.props.breakpoint !== p.breakpoint || !(0, l.deepEqual)(this.props.breakpoints, p.breakpoints) || !(0, l.deepEqual)(this.props.cols, p.cols)) && this.onWidthChange(p);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(p) {
      const {
        breakpoints: y,
        cols: C,
        layouts: I,
        compactType: F
      } = this.props, ne = this.props.breakpoint || (0, E.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), ue = this.state.breakpoint, ae = (0, E.getColsFromBreakpoint)(ne, C), oe = Re({}, I);
      if (ue !== ne || p.breakpoints !== y || p.cols !== C) {
        ue in oe || (oe[ue] = (0, d.cloneLayout)(this.state.layout));
        let re = (0, E.findOrGenerateResponsiveLayout)(oe, y, ne, ue, ae, F);
        re = (0, d.synchronizeLayoutWithChildren)(re, this.props.children, ae, F, this.props.allowOverlap), oe[ne] = re, this.props.onBreakpointChange(ne, ae), this.props.onLayoutChange(re, oe), this.setState({
          breakpoint: ne,
          layout: re,
          cols: ae
        });
      }
      const ye = u(this.props.margin, ne), $ = u(this.props.containerPadding, ne);
      this.props.onWidthChange(this.props.width, ye, ae, $);
    }
    render() {
      const p = this.props, {
        breakpoint: y,
        breakpoints: C,
        cols: I,
        layouts: F,
        margin: ne,
        containerPadding: ue,
        onBreakpointChange: ae,
        onLayoutChange: oe,
        onWidthChange: ye
      } = p, $ = Y(p, L);
      return /* @__PURE__ */ a.createElement(b.default, W({}, $, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: u(ne, this.state.breakpoint),
        containerPadding: u(ue, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return fi.default = h, ke(h, "propTypes", {
    //
    // Basic props
    //
    // Optional, but if you are managing width yourself you may want to set the breakpoint
    // yourself as well.
    breakpoint: c.default.string,
    // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
    breakpoints: c.default.object,
    allowOverlap: c.default.bool,
    // # of cols. This is a breakpoint -> cols map
    cols: c.default.object,
    // # of margin. This is a breakpoint -> margin map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Margin between items [x, y] in px
    // e.g. [10, 10]
    margin: c.default.oneOfType([c.default.array, c.default.object]),
    // # of containerPadding. This is a breakpoint -> containerPadding map
    // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
    // Padding inside the container [x, y] in px
    // e.g. [10, 10]
    containerPadding: c.default.oneOfType([c.default.array, c.default.object]),
    // layouts is an object mapping breakpoints to layouts.
    // e.g. {lg: Layout, md: Layout, ...}
    layouts(f, p) {
      if (v(f[p]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + v(f[p]));
      Object.keys(f[p]).forEach((y) => {
        if (!(y in f.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, d.validateLayout)(f.layouts[y], "layouts." + y);
      });
    },
    // The width of this component.
    // Required in this propTypes stanza because generateInitialState() will fail without it.
    width: c.default.number.isRequired,
    //
    // Callbacks
    //
    // Calls back with breakpoint and new # cols
    onBreakpointChange: c.default.func,
    // Callback so you can save the layout.
    // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
    onLayoutChange: c.default.func,
    // Calls back with (containerWidth, margin, cols, containerPadding)
    onWidthChange: c.default.func
  }), ke(h, "defaultProps", {
    breakpoints: {
      lg: 1200,
      md: 996,
      sm: 768,
      xs: 480,
      xxs: 0
    },
    cols: {
      lg: 12,
      md: 10,
      sm: 6,
      xs: 4,
      xxs: 2
    },
    containerPadding: {
      lg: null,
      md: null,
      sm: null,
      xs: null,
      xxs: null
    },
    layouts: {},
    margin: [10, 10],
    allowOverlap: !1,
    onBreakpointChange: d.noop,
    onLayoutChange: d.noop,
    onWidthChange: d.noop
  }), fi;
}
var Co = {}, Kc = function() {
  if (typeof Map < "u")
    return Map;
  function a(c, l) {
    var d = -1;
    return c.some(function(E, b) {
      return E[0] === l ? (d = b, !0) : !1;
    }), d;
  }
  return (
    /** @class */
    function() {
      function c() {
        this.__entries__ = [];
      }
      return Object.defineProperty(c.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), c.prototype.get = function(l) {
        var d = a(this.__entries__, l), E = this.__entries__[d];
        return E && E[1];
      }, c.prototype.set = function(l, d) {
        var E = a(this.__entries__, l);
        ~E ? this.__entries__[E][1] = d : this.__entries__.push([l, d]);
      }, c.prototype.delete = function(l) {
        var d = this.__entries__, E = a(d, l);
        ~E && d.splice(E, 1);
      }, c.prototype.has = function(l) {
        return !!~a(this.__entries__, l);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(l, d) {
        d === void 0 && (d = null);
        for (var E = 0, b = this.__entries__; E < b.length; E++) {
          var L = b[E];
          l.call(d, L[1], L[0]);
        }
      }, c;
    }()
  );
}(), Os = typeof window < "u" && typeof document < "u" && window.document === document, Po = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), kp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Po) : function(a) {
    return setTimeout(function() {
      return a(Date.now());
    }, 1e3 / 60);
  };
}(), _p = 2;
function Ep(a, c) {
  var l = !1, d = !1, E = 0;
  function b() {
    l && (l = !1, a()), d && V();
  }
  function L() {
    kp(b);
  }
  function V() {
    var N = Date.now();
    if (l) {
      if (N - E < _p)
        return;
      d = !0;
    } else
      l = !0, d = !1, setTimeout(L, c);
    E = N;
  }
  return V;
}
var Rp = 20, Cp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Op = typeof MutationObserver < "u", Pp = (
  /** @class */
  function() {
    function a() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Ep(this.refresh.bind(this), Rp);
    }
    return a.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, a.prototype.removeObserver = function(c) {
      var l = this.observers_, d = l.indexOf(c);
      ~d && l.splice(d, 1), !l.length && this.connected_ && this.disconnect_();
    }, a.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, a.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(l) {
        return l.gatherActive(), l.hasActive();
      });
      return c.forEach(function(l) {
        return l.broadcastActive();
      }), c.length > 0;
    }, a.prototype.connect_ = function() {
      !Os || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Op ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, a.prototype.disconnect_ = function() {
      !Os || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, a.prototype.onTransitionEnd_ = function(c) {
      var l = c.propertyName, d = l === void 0 ? "" : l, E = Cp.some(function(b) {
        return !!~d.indexOf(b);
      });
      E && this.refresh();
    }, a.getInstance = function() {
      return this.instance_ || (this.instance_ = new a()), this.instance_;
    }, a.instance_ = null, a;
  }()
), Zc = function(a, c) {
  for (var l = 0, d = Object.keys(c); l < d.length; l++) {
    var E = d[l];
    Object.defineProperty(a, E, {
      value: c[E],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return a;
}, yr = function(a) {
  var c = a && a.ownerDocument && a.ownerDocument.defaultView;
  return c || Po;
}, Jc = bo(0, 0, 0, 0);
function zo(a) {
  return parseFloat(a) || 0;
}
function Bc(a) {
  for (var c = [], l = 1; l < arguments.length; l++)
    c[l - 1] = arguments[l];
  return c.reduce(function(d, E) {
    var b = a["border-" + E + "-width"];
    return d + zo(b);
  }, 0);
}
function zp(a) {
  for (var c = ["top", "right", "bottom", "left"], l = {}, d = 0, E = c; d < E.length; d++) {
    var b = E[d], L = a["padding-" + b];
    l[b] = zo(L);
  }
  return l;
}
function jp(a) {
  var c = a.getBBox();
  return bo(0, 0, c.width, c.height);
}
function Dp(a) {
  var c = a.clientWidth, l = a.clientHeight;
  if (!c && !l)
    return Jc;
  var d = yr(a).getComputedStyle(a), E = zp(d), b = E.left + E.right, L = E.top + E.bottom, V = zo(d.width), N = zo(d.height);
  if (d.boxSizing === "border-box" && (Math.round(V + b) !== c && (V -= Bc(d, "left", "right") + b), Math.round(N + L) !== l && (N -= Bc(d, "top", "bottom") + L)), !Tp(a)) {
    var W = Math.round(V + b) - c, Y = Math.round(N + L) - l;
    Math.abs(W) !== 1 && (V -= W), Math.abs(Y) !== 1 && (N -= Y);
  }
  return bo(E.left, E.top, V, N);
}
var bp = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(a) {
    return a instanceof yr(a).SVGGraphicsElement;
  } : function(a) {
    return a instanceof yr(a).SVGElement && typeof a.getBBox == "function";
  };
}();
function Tp(a) {
  return a === yr(a).document.documentElement;
}
function Np(a) {
  return Os ? bp(a) ? jp(a) : Dp(a) : Jc;
}
function Mp(a) {
  var c = a.x, l = a.y, d = a.width, E = a.height, b = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, L = Object.create(b.prototype);
  return Zc(L, {
    x: c,
    y: l,
    width: d,
    height: E,
    top: l,
    right: c + d,
    bottom: E + l,
    left: c
  }), L;
}
function bo(a, c, l, d) {
  return { x: a, y: c, width: l, height: d };
}
var Lp = (
  /** @class */
  function() {
    function a(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = bo(0, 0, 0, 0), this.target = c;
    }
    return a.prototype.isActive = function() {
      var c = Np(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, a.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, a;
  }()
), Ip = (
  /** @class */
  /* @__PURE__ */ function() {
    function a(c, l) {
      var d = Mp(l);
      Zc(this, { target: c, contentRect: d });
    }
    return a;
  }()
), Wp = (
  /** @class */
  function() {
    function a(c, l, d) {
      if (this.activeObservations_ = [], this.observations_ = new Kc(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = l, this.callbackCtx_ = d;
    }
    return a.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) || (l.set(c, new Lp(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, a.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var l = this.observations_;
        l.has(c) && (l.delete(c), l.size || this.controller_.removeObserver(this));
      }
    }, a.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, a.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(l) {
        l.isActive() && c.activeObservations_.push(l);
      });
    }, a.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, l = this.activeObservations_.map(function(d) {
          return new Ip(d.target, d.broadcastRect());
        });
        this.callback_.call(c, l, c), this.clearActive();
      }
    }, a.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, a.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, a;
  }()
), ef = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Kc(), tf = (
  /** @class */
  /* @__PURE__ */ function() {
    function a(c) {
      if (!(this instanceof a))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var l = Pp.getInstance(), d = new Wp(c, l, this);
      ef.set(this, d);
    }
    return a;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(a) {
  tf.prototype[a] = function() {
    var c;
    return (c = ef.get(this))[a].apply(c, arguments);
  };
});
var Ap = function() {
  return typeof Po.ResizeObserver < "u" ? Po.ResizeObserver : tf;
}();
const Hp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ap
}, Symbol.toStringTag, { value: "Module" })), Fp = /* @__PURE__ */ np(Hp);
var Uc;
function Bp() {
  if (Uc) return Co;
  Uc = 1, Object.defineProperty(Co, "__esModule", {
    value: !0
  }), Co.default = ke;
  var a = L(Ot()), c = b(/* @__PURE__ */ jn()), l = b(Fp), d = b(Do());
  const E = ["measureBeforeMount"];
  function b(Q) {
    return Q && Q.__esModule ? Q : { default: Q };
  }
  function L(Q, D) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (L = function(h, f) {
      if (!f && h && h.__esModule) return h;
      var p, y, C = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return C;
      if (p = f ? u : v) {
        if (p.has(h)) return p.get(h);
        p.set(h, C);
      }
      for (const I in h) I !== "default" && {}.hasOwnProperty.call(h, I) && ((y = (p = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, I)) && (y.get || y.set) ? p(C, I, y) : C[I] = h[I]);
      return C;
    })(Q, D);
  }
  function V() {
    return V = Object.assign ? Object.assign.bind() : function(Q) {
      for (var D = 1; D < arguments.length; D++) {
        var v = arguments[D];
        for (var u in v) ({}).hasOwnProperty.call(v, u) && (Q[u] = v[u]);
      }
      return Q;
    }, V.apply(null, arguments);
  }
  function N(Q, D) {
    if (Q == null) return {};
    var v, u, h = W(Q, D);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(Q);
      for (u = 0; u < f.length; u++) v = f[u], D.indexOf(v) === -1 && {}.propertyIsEnumerable.call(Q, v) && (h[v] = Q[v]);
    }
    return h;
  }
  function W(Q, D) {
    if (Q == null) return {};
    var v = {};
    for (var u in Q) if ({}.hasOwnProperty.call(Q, u)) {
      if (D.indexOf(u) !== -1) continue;
      v[u] = Q[u];
    }
    return v;
  }
  function Y(Q, D, v) {
    return (D = q(D)) in Q ? Object.defineProperty(Q, D, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : Q[D] = v, Q;
  }
  function q(Q) {
    var D = B(Q, "string");
    return typeof D == "symbol" ? D : D + "";
  }
  function B(Q, D) {
    if (typeof Q != "object" || !Q) return Q;
    var v = Q[Symbol.toPrimitive];
    if (v !== void 0) {
      var u = v.call(Q, D);
      if (typeof u != "object") return u;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (D === "string" ? String : Number)(Q);
  }
  const Re = "react-grid-layout";
  function ke(Q) {
    var D;
    return D = class extends a.Component {
      constructor() {
        super(...arguments), Y(this, "state", {
          width: 1280
        }), Y(this, "elementRef", /* @__PURE__ */ a.createRef()), Y(this, "mounted", !1), Y(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new l.default((h) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const p = h[0].contentRect.width;
            this.setState({
              width: p
            });
          }
        });
        const u = this.elementRef.current;
        u instanceof HTMLElement && this.resizeObserver.observe(u);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const u = this.elementRef.current;
        u instanceof HTMLElement && this.resizeObserver.unobserve(u), this.resizeObserver.disconnect();
      }
      render() {
        const u = this.props, {
          measureBeforeMount: h
        } = u, f = N(u, E);
        return h && !this.mounted ? /* @__PURE__ */ a.createElement("div", {
          className: (0, d.default)(this.props.className, Re),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ a.createElement(Q, V({
          innerRef: this.elementRef
        }, f, this.state));
      }
    }, Y(D, "defaultProps", {
      measureBeforeMount: !1
    }), Y(D, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), D;
  }
  return Co;
}
var qc;
function Up() {
  return qc || (qc = 1, function(a) {
    a.exports = Xc().default, a.exports.utils = vr(), a.exports.calculateUtils = Ds(), a.exports.Responsive = Sp().default, a.exports.Responsive.utils = Qc(), a.exports.WidthProvider = Bp().default;
  }(Ss)), Ss.exports;
}
var Vc = Up();
const qp = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, nf = { XS: { w: 2, h: 2 }, S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, Be = (a, c, l, d, E) => ({ i: a, x: c, y: l, w: d, h: E, minW: 2, minH: 2, maxW: 12, maxH: 12 }), Oo = { lg: [Be("activity-history", 0, 0, 3, 4), Be("automations", 3, 0, 3, 4), Be("backup-restore", 6, 0, 3, 4), Be("security-status", 9, 0, 3, 3), Be("access-control", 0, 5, 6, 3), Be("alarm-configuration", 6, 4, 6, 8)], md: [Be("activity-history", 0, 0, 4, 4), Be("automations", 4, 0, 4, 4), Be("backup-restore", 0, 4, 4, 4), Be("access-control", 4, 4, 4, 3), Be("alarm-configuration", 0, 8, 8, 8), Be("security-status", 0, 16, 4, 3)], sm: [Be("activity-history", 0, 0, 4, 4), Be("automations", 0, 4, 4, 4), Be("backup-restore", 0, 8, 4, 4), Be("access-control", 0, 12, 4, 3), Be("alarm-configuration", 0, 15, 4, 8), Be("security-status", 0, 23, 4, 3)], xs: [Be("activity-history", 0, 0, 2, 4), Be("automations", 0, 4, 2, 4), Be("backup-restore", 0, 8, 2, 4), Be("access-control", 0, 12, 2, 3), Be("alarm-configuration", 0, 15, 2, 8), Be("security-status", 0, 23, 2, 3)], xxs: [Be("activity-history", 0, 0, 2, 4), Be("automations", 0, 4, 2, 4), Be("backup-restore", 0, 8, 2, 4), Be("access-control", 0, 12, 2, 3), Be("alarm-configuration", 0, 15, 2, 8), Be("security-status", 0, 23, 2, 3)] };
function Ps(a, c, l) {
  return Object.entries(nf).map(([d, E]) => ({ size: d, distance: Math.abs(Math.min(E.w, l) - a) + Math.abs(E.h - c) })).sort((d, E) => d.distance - E.distance)[0]?.size ?? "S";
}
function rf(a, c) {
  const l = nf[a];
  return { w: Math.min(l.w, c), h: l.h };
}
function Vp(a, c) {
  const l = Ps(a.w, a.h, c), d = rf(l, c);
  return { ...a, w: d.w, h: d.h, x: Math.max(0, Math.min(a.x, c - d.w)), size: l };
}
function zs(a, c) {
  return a.some((l) => l.i !== c.i && c.x < l.x + l.w && c.x + c.w > l.x && c.y < l.y + l.h && c.y + c.h > l.y);
}
function $p(a, c, l) {
  for (let d = 0; d < 240; d++) for (let E = 0; E <= l - c.w; E++) {
    const b = { ...c, x: E, y: d };
    if (!zs(a, b)) return b;
  }
  return { ...c, x: 0, y: Math.max(0, ...a.map((d) => d.y + d.h)) };
}
function jo(a) {
  const c = {};
  return Object.keys(cn).forEach((l) => {
    const d = cn[l], E = Array.isArray(a?.[l]) ? a[l] : [], b = new Map(E.map((W) => [W.i, W])), L = (Oo[l] || []).map((W) => {
      const Y = b.get(W.i);
      if (!Y) return { ...W };
      const q = Math.min(Math.max(1, Y.w), d);
      return { ...W, ...Y, w: q, x: Math.max(0, Math.min(Y.x, d - q)), y: Math.max(0, Y.y), minW: 2, minH: 2 };
    }), V = new Set(L.map((W) => W.i)), N = E.filter((W) => !V.has(W.i)).map((W) => ({ ...W, w: Math.min(Math.max(1, W.w), d), x: Math.max(0, Math.min(W.x, d - Math.min(W.w, d))), y: Math.max(0, W.y), minW: 2, minH: 2 }));
    c[l] = [...L, ...N];
  }), c;
}
class Gp {
  key(c, l) {
    return `argus:dashboard-layout:${c}:${l}`;
  }
  read(c, l) {
    try {
      const d = JSON.parse(localStorage.getItem(this.key(c, l)) || "null");
      return d?.layoutVersion != null && d.layoutVersion >= 1 ? d : null;
    } catch {
      return null;
    }
  }
  write(c, l, d) {
    localStorage.setItem(this.key(c, l), JSON.stringify(d));
  }
  async load(c, l) {
    const d = this.read(c, l);
    return d ? jo(d.layouts) : null;
  }
  async save(c, l, d) {
    const E = this.read(c, l);
    this.write(c, l, { layoutVersion: 1, layouts: d, visibility: E?.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(c, l) {
    return this.read(c, l)?.visibility ?? null;
  }
  async saveVisibility(c, l, d) {
    const E = this.read(c, l);
    this.write(c, l, { layoutVersion: 1, layouts: E?.layouts ?? jo(null), visibility: d, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(c, l) {
    localStorage.removeItem(this.key(c, l));
  }
}
const Yp = Vc.WidthProvider(Vc.Responsive);
function Xp({ widget: a, editing: c, size: l, onSize: d, onHide: E, onReset: b, children: L }) {
  return /* @__PURE__ */ x.jsxs("article", { className: "argus-widget", "data-size": l, "data-widget-id": a.id, children: [
    /* @__PURE__ */ x.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ x.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${a.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ x.jsx("strong", { children: a.title }),
      /* @__PURE__ */ x.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ x.jsx("summary", { "aria-label": `Opciones de ${a.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ x.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ x.jsx("span", { children: a.t?.("size") || "Tamaño" }),
          /* @__PURE__ */ x.jsx("div", { children: ["XS", "S", "M", "L", "XL"].map((V) => /* @__PURE__ */ x.jsx("button", { type: "button", className: V === l ? "active" : "", onClick: () => d(V), children: V }, V)) }),
          /* @__PURE__ */ x.jsx("button", { type: "button", onClick: b, children: a.t?.("reset_widget") || "Restablecer widget" }),
          /* @__PURE__ */ x.jsx("button", { type: "button", onClick: E, children: a.t?.("hide_widget") || "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: `argus-widget__content ${a.kind === "access-control" ? "argus-widget__content--access" : ""}`, children: /* @__PURE__ */ x.jsx("div", { style: { pointerEvents: c ? "none" : "auto", height: "100%" }, children: L }) })
  ] });
}
function Qp({
  widgets: a,
  widgetComponents: c,
  storage: l,
  userId: d,
  dashboardId: E,
  onEditing: b,
  registerEditor: L
}) {
  const V = Xe.useMemo(() => Object.fromEntries(a.map(($) => [$.id, $.visible])), [a]), [N, W] = Xe.useState(Oo), [Y, q] = Xe.useState(V), [B, Re] = Xe.useState(!1), [ke, Q] = Xe.useState(!1), [D, v] = Xe.useState("lg"), [u, h] = Xe.useState(""), f = Xe.useRef(Oo), p = Xe.useRef(), y = Xe.useRef(!1);
  Xe.useEffect(() => {
    L(Re);
  }, [L]), Xe.useEffect(() => {
    let $ = !0;
    return Q(!1), Promise.all([l.load(d, E), l.loadVisibility?.(d, E)]).then(([re, te]) => {
      if (!$) return;
      const H = jo(re);
      W(H), f.current = H, te && q({ ...V, ...te }), Q(!0);
    }), () => {
      $ = !1;
    };
  }, [l, d, E, V]), Xe.useEffect(() => {
    b(B), ke && y.current && !B && l.save(d, E, f.current), y.current = B;
  }, [B, ke, b, l, d, E]), Xe.useEffect(() => {
    const $ = (re) => {
      B && (re.key === "Escape" ? (Re(!1), h("Edición finalizada")) : re.key === "Enter" && re.target === document.body && Re(!1));
    };
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [B]), Xe.useEffect(() => () => clearTimeout(p.current), []);
  const C = ($, re = !1) => {
    W($), f.current = $, clearTimeout(p.current), p.current = window.setTimeout(() => l.save(d, E, $), re ? 0 : 550);
  }, I = ($, re) => {
    const te = { ...Y, [$]: re };
    q(te), l.saveVisibility?.(d, E, te), h(re ? "Widget visible" : "Widget oculto");
  }, F = ($, re, te) => {
    const H = f.current, le = H[D] || [], Z = le.filter((xe) => xe.i !== $), k = zs(Z, re) ? $p(Z, re, cn[D]) : re, M = { ...H, [D]: le.map((xe) => xe.i === $ ? k : xe) };
    C(M, !0), h(te);
  }, ne = ($, re) => {
    const te = (f.current[D] || []).find((le) => le.i === $);
    if (!te) return;
    const H = rf(re, cn[D]);
    F($, { ...te, ...H, x: Math.max(0, Math.min(te.x, cn[D] - H.w)) }, `Tamaño ${re}`);
  }, ue = ($) => {
    const re = (Oo[D] || []).find((te) => te.i === $);
    re && F($, { ...re }, "Widget restablecido");
  }, ae = ($, re, te) => {
    const H = Vp(te, cn[D]);
    F(te.i, H, `Tamaño ${Ps(H.w, H.h, cn[D])}`);
  }, oe = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await l.reset(d, E);
    const $ = jo(null);
    q(V), C($, !0), h("Diseño predeterminado restaurado");
  }, ye = N[D] || [];
  return ke ? /* @__PURE__ */ x.jsxs("section", { className: `argus-dashboard ${B ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: B ? u : "" }),
    /* @__PURE__ */ x.jsx(Sc, { children: /* @__PURE__ */ x.jsx(Yp, { className: "argus-dashboard-grid", layouts: N, breakpoints: qp, cols: cn, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: B, isResizable: B, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: ($) => v($), onLayoutChange: ($, re) => {
      B && (W(re), f.current = re);
    }, onResizeStop: ae, onDragStop: ($, re, te) => {
      const H = (f.current[D] || []).filter((le) => le.i !== te.i);
      if (zs(H, te)) {
        W({ ...f.current }), h("Posición bloqueada por colisión");
        return;
      }
      F(te.i, te, "Posición guardada");
    }, useCSSTransforms: !0, children: a.filter(($) => Y[$.id] !== !1 && c[$.id] !== void 0).map(($) => {
      const re = ye.find((H) => H.i === $.id), te = re ? Ps(re.w, re.h, cn[D]) : $.size;
      return /* @__PURE__ */ x.jsx("div", { children: /* @__PURE__ */ x.jsx(Sc, { children: /* @__PURE__ */ x.jsx(Xp, { widget: $, editing: B, size: te, onSize: (H) => ne($.id, H), onHide: () => I($.id, !1), onReset: () => ue($.id), children: c[$.id] }) }) }, $.id);
    }) }) }),
    /* @__PURE__ */ x.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ x.jsx("button", { type: "button", onClick: () => Re(($) => !$), children: B ? window._argusDashboardReadyBtn || "✓ Listo" : window._argusDashboardEditBtn || "✥ Editar tablero" }),
      B && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx("button", { type: "button", onClick: oe, children: window._argusDashboardResetBtn || "Restablecer diseño" }),
        /* @__PURE__ */ x.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: a.filter(($) => Y[$.id] === !1).map(($) => /* @__PURE__ */ x.jsxs("button", { type: "button", onClick: () => I($.id, !0), children: [
          "Mostrar ",
          $.title
        ] }, $.id)) })
      ] })
    ] })
  ] }) : /* @__PURE__ */ x.jsx("section", { className: "argus-dashboard", children: /* @__PURE__ */ x.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: "Cargando tablero…" }) });
}
function Kp({ hass: a }) {
  const c = a?.states || {}, l = Object.values(c).filter(
    (W) => W.entity_id.startsWith("binary_sensor.") && (W.attributes.device_class === "door" || W.attributes.device_class === "window" || W.attributes.device_class === "motion")
  ).slice(0, 4), E = Object.values(c).find((W) => W.entity_id.startsWith("alarm_control_panel.argus"))?.state || "disarmed", b = E === "triggered", L = E === "arming" || E === "pending", V = () => /* @__PURE__ */ x.jsxs("svg", { viewBox: "0 0 200 200", width: "100%", height: "100%", style: { filter: "drop-shadow(0 18px 28px rgba(0,0,0,.34))", maxWidth: "140px", margin: "auto", display: "block", overflow: "visible" }, children: [
    /* @__PURE__ */ x.jsxs("defs", { children: [
      /* @__PURE__ */ x.jsxs("linearGradient", { id: "premium-shield", x1: "20%", y1: "10%", x2: "85%", y2: "100%", children: [
        /* @__PURE__ */ x.jsx("stop", { stopColor: "#fff", stopOpacity: ".38" }),
        /* @__PURE__ */ x.jsx("stop", { offset: ".25", stopColor: L ? "#f5b041" : "#43A047", stopOpacity: ".78" }),
        /* @__PURE__ */ x.jsx("stop", { offset: "1", stopColor: L ? "#f5b041" : "#43A047", stopOpacity: ".18" })
      ] }),
      /* @__PURE__ */ x.jsxs("filter", { id: "premium-glow", filterUnits: "userSpaceOnUse", x: "-80", y: "-80", width: "360", height: "360", colorInterpolationFilters: "sRGB", children: [
        /* @__PURE__ */ x.jsx("feGaussianBlur", { stdDeviation: "4", result: "blur" }),
        /* @__PURE__ */ x.jsxs("feMerge", { children: [
          /* @__PURE__ */ x.jsx("feMergeNode", { in: "blur" }),
          /* @__PURE__ */ x.jsx("feMergeNode", { in: "SourceGraphic" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx("path", { d: "M100 22 157 46v42c0 42-23 69-57 87-34-18-57-45-57-87V46z", fill: "url(#premium-shield)", stroke: L ? "#f5b041" : "#43A047", strokeWidth: "3", filter: "url(#premium-glow)" }),
    /* @__PURE__ */ x.jsx("path", { d: "M100 31 148 51", stroke: "#fff", strokeOpacity: ".45", strokeWidth: "3", strokeLinecap: "round" }),
    /* @__PURE__ */ x.jsx("circle", { cx: "100", cy: "105", r: "43", fill: "rgba(5,12,23,.3)", stroke: "rgba(255,255,255,.22)", strokeWidth: "2" }),
    /* @__PURE__ */ x.jsx("g", { fill: "none", stroke: "#fff", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round", filter: "url(#premium-glow)", children: L ? /* @__PURE__ */ x.jsx("path", { d: "M100 80 v25 l15 15" }) : /* @__PURE__ */ x.jsx("path", { d: "M85 105 l10 10 l20 -20" }) }),
    /* @__PURE__ */ x.jsxs("circle", { cx: "100", cy: "105", r: "55", fill: "none", stroke: L ? "#f5b041" : "#43A047", strokeOpacity: ".42", strokeWidth: "2", children: [
      /* @__PURE__ */ x.jsx("animate", { attributeName: "r", values: "51;60;51", dur: "3.5s", repeatCount: "indefinite" }),
      /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: ".6;.08;.6", dur: "3.5s", repeatCount: "indefinite" })
    ] })
  ] }), N = () => /* @__PURE__ */ x.jsxs("svg", { viewBox: "0 0 200 200", width: "100%", height: "100%", style: { filter: "drop-shadow(0 18px 30px rgba(255, 0, 0, 0.6))", maxWidth: "140px", margin: "auto", display: "block", overflow: "visible" }, children: [
    /* @__PURE__ */ x.jsxs("defs", { children: [
      /* @__PURE__ */ x.jsxs("linearGradient", { id: "siren-grad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ x.jsx("stop", { stopColor: "#ff4b4b", offset: "0%" }),
        /* @__PURE__ */ x.jsx("stop", { stopColor: "#c62828", offset: "100%" })
      ] }),
      /* @__PURE__ */ x.jsxs("filter", { id: "siren-glow", children: [
        /* @__PURE__ */ x.jsx("feGaussianBlur", { stdDeviation: "8", result: "blur" }),
        /* @__PURE__ */ x.jsxs("feMerge", { children: [
          /* @__PURE__ */ x.jsx("feMergeNode", { in: "blur" }),
          /* @__PURE__ */ x.jsx("feMergeNode", { in: "SourceGraphic" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx("path", { d: "M60 140 h80 v15 c0 8 -8 15 -15 15 h-50 c-7 0 -15 -7 -15 -15 z", fill: "#333", stroke: "#222", strokeWidth: "2" }),
    /* @__PURE__ */ x.jsx("path", { d: "M70 140 v-30 c0 -30 15 -45 30 -45 c15 0 30 15 30 45 v30 z", fill: "url(#siren-grad)", stroke: "#ff8a8a", strokeWidth: "2", filter: "url(#siren-glow)", children: /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: "0.4;1;0.4", dur: "0.8s", repeatCount: "indefinite" }) }),
    /* @__PURE__ */ x.jsx("path", { d: "M85 130 v-20 c0 -10 5 -15 15 -15", fill: "none", stroke: "#fff", strokeOpacity: "0.6", strokeWidth: "4", strokeLinecap: "round", children: /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: "0.2;0.8;0.2", dur: "0.8s", repeatCount: "indefinite" }) }),
    /* @__PURE__ */ x.jsxs("circle", { cx: "100", cy: "100", r: "50", fill: "none", stroke: "#ff0000", strokeWidth: "4", children: [
      /* @__PURE__ */ x.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.8s", repeatCount: "indefinite" }),
      /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.8s", repeatCount: "indefinite" })
    ] }),
    /* @__PURE__ */ x.jsxs("circle", { cx: "100", cy: "100", r: "50", fill: "none", stroke: "#ff0000", strokeWidth: "4", children: [
      /* @__PURE__ */ x.jsx("animate", { attributeName: "r", values: "40;90", dur: "0.8s", begin: "0.4s", repeatCount: "indefinite" }),
      /* @__PURE__ */ x.jsx("animate", { attributeName: "opacity", values: "0.8;0", dur: "0.8s", begin: "0.4s", repeatCount: "indefinite" })
    ] })
  ] });
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "20px" }, children: [
    /* @__PURE__ */ x.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "16px", fontWeight: 800 }, children: "Instancias Activas" }),
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flex: 1, gap: "20px" }, children: [
      /* @__PURE__ */ x.jsxs("div", { style: { flex: "0 0 160px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, children: [
        b ? /* @__PURE__ */ x.jsx(N, {}) : /* @__PURE__ */ x.jsx(V, {}),
        /* @__PURE__ */ x.jsx("div", { style: {
          marginTop: "16px",
          fontSize: "12px",
          fontWeight: 800,
          textAlign: "center",
          color: b ? "#ff4b4b" : L ? "#f5b041" : "#43A047",
          background: b ? "rgba(255, 75, 75, 0.15)" : L ? "rgba(245, 176, 65, 0.15)" : "rgba(67, 160, 71, 0.15)",
          padding: "6px 12px",
          borderRadius: "12px"
        }, children: b ? "¡ALARMA DISPARADA!" : L ? "ESPERANDO SENSORES..." : "SISTEMA PROTEGIDO" })
      ] }),
      /* @__PURE__ */ x.jsx("div", { style: {
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
        gap: "12px",
        overflowY: "auto",
        alignContent: "start"
      }, children: l.length === 0 ? /* @__PURE__ */ x.jsx("div", { style: { display: "flex", height: "100%", alignItems: "center", justifyContent: "center", opacity: 0.5, fontSize: "13px", fontWeight: 600 }, children: "No hay sensores detectados" }) : l.map((W) => {
        const Y = W.state === "on";
        return /* @__PURE__ */ x.jsxs("div", { style: {
          background: Y ? "rgba(255, 138, 31, 0.15)" : "rgba(255, 255, 255, 0.08)",
          border: `1px solid ${Y ? "rgba(255, 138, 31, 0.4)" : "rgba(255, 255, 255, 0.1)"}`,
          borderRadius: "16px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          transition: "all 0.3s ease"
        }, children: [
          /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "20px" }, children: W.attributes.device_class === "motion" ? "🏃‍♂️" : "🚪" }),
            /* @__PURE__ */ x.jsx("span", { style: {
              fontSize: "10px",
              fontWeight: 900,
              padding: "2px 6px",
              borderRadius: "6px",
              background: Y ? "rgba(255, 138, 31, 0.2)" : "rgba(255, 255, 255, 0.1)",
              color: Y ? "#ff8a1f" : "rgba(255,255,255,0.7)"
            }, children: Y ? "ABIERTO" : "CERRADO" })
          ] }),
          /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 700, lineHeight: 1.2 }, children: W.attributes.friendly_name || W.entity_id })
        ] }, W.entity_id);
      }) })
    ] })
  ] });
}
function Zp({ hass: a }) {
  const c = [
    { id: "armed_home", icon: "🏠", label: "EM CASA", color: "#1E88E5" },
    { id: "armed_away", icon: "🔒", label: "AUSENTE", color: "#E53935" },
    { id: "armed_night", icon: "🌙", label: "NOITE", color: "#8E24AA" },
    { id: "armed_vacation", icon: "✈️", label: "FÉRIAS", color: "#00897B" }
  ];
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "20px" }, children: [
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      /* @__PURE__ */ x.jsx("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 800 }, children: "Modos de Alarme" }),
      /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 800, padding: "4px 8px", borderRadius: "8px", background: "rgba(67, 160, 71, 0.2)", color: "#43A047" }, children: "DESARMADO" })
    ] }),
    /* @__PURE__ */ x.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      flex: 1
    }, children: c.map((l) => /* @__PURE__ */ x.jsxs(
      "button",
      {
        type: "button",
        className: "argus-mode-btn",
        style: {
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s ease",
          color: "white",
          padding: "16px 8px"
        },
        onMouseEnter: (d) => {
          d.currentTarget.style.transform = "scale(1.05)", d.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        },
        onMouseLeave: (d) => {
          d.currentTarget.style.transform = "scale(1)", d.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
        },
        onMouseDown: (d) => d.currentTarget.style.transform = "scale(0.95)",
        onMouseUp: (d) => d.currentTarget.style.transform = "scale(1.05)",
        children: [
          /* @__PURE__ */ x.jsx("span", { style: { fontSize: "28px", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.2))" }, children: l.icon }),
          /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 800, letterSpacing: "0.5px", color: l.color }, children: l.label })
        ]
      },
      l.id
    )) })
  ] });
}
var of = pi();
function lf({ isOpen: a, onClose: c, title: l, children: d }) {
  return Xe.useEffect(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]), a ? of.createPortal(
    /* @__PURE__ */ x.jsxs("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      boxSizing: "border-box"
    }, children: [
      /* @__PURE__ */ x.jsx(
        "div",
        {
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            animation: "argusFadeIn 0.3s ease forwards"
          },
          onClick: c
        }
      ),
      /* @__PURE__ */ x.jsxs("div", { style: {
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        maxHeight: "90vh",
        background: "rgba(30, 30, 30, 0.6)",
        backdropFilter: "blur(30px) saturate(150%)",
        WebkitBackdropFilter: "blur(30px) saturate(150%)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        borderRadius: "28px",
        display: "flex",
        flexDirection: "column",
        animation: "argusJellyBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        overflow: "hidden"
      }, children: [
        /* @__PURE__ */ x.jsx("style", { children: `
            @keyframes argusFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes argusJellyBounce {
              0% { opacity: 0; transform: scale(0.8); }
              50% { transform: scale(1.03); }
              100% { opacity: 1; transform: scale(1); }
            }
          ` }),
        /* @__PURE__ */ x.jsxs("header", { style: {
          padding: "24px 24px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }, children: [
          /* @__PURE__ */ x.jsx("h2", { style: { margin: 0, fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff" }, children: l }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              style: {
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                cursor: "pointer",
                transition: "background 0.2s",
                fontSize: "18px"
              },
              onMouseOver: (E) => E.currentTarget.style.background = "rgba(255,255,255,0.2)",
              onMouseOut: (E) => E.currentTarget.style.background = "rgba(255,255,255,0.1)",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ x.jsx("div", { style: {
          padding: "24px",
          overflowY: "auto",
          flex: 1,
          color: "rgba(255,255,255,0.9)"
        }, children: d })
      ] })
    ] }),
    document.body
  ) : null;
}
function Jp({ hass: a }) {
  const [c, l] = Xe.useState(!1), d = () => {
    confirm("¿Estás seguro de que quieres activar el pánico SOS? Las sirenas se dispararán inmediatamente.") && console.log("SOS Activado");
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "20px" }, children: [
      /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
        /* @__PURE__ */ x.jsx("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 800 }, children: "Acciones SOS" }),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            type: "button",
            onClick: () => l(!0),
            style: {
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "12px",
              padding: "6px 12px",
              color: "white",
              fontSize: "12px",
              fontWeight: 700,
              cursor: "pointer"
            },
            children: "⚙️ Configurar"
          }
        )
      ] }),
      /* @__PURE__ */ x.jsx("div", { style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ x.jsxs(
        "button",
        {
          type: "button",
          onClick: d,
          style: {
            background: "linear-gradient(135deg, #FF3B30 0%, #D32F2F 100%)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(255, 59, 48, 0.4), inset 0 2px 0 rgba(255,255,255,0.2)",
            borderRadius: "24px",
            color: "white",
            width: "100%",
            padding: "24px",
            fontSize: "20px",
            fontWeight: 900,
            letterSpacing: "1px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          onMouseDown: (E) => E.currentTarget.style.transform = "scale(0.95)",
          onMouseUp: (E) => E.currentTarget.style.transform = "scale(1)",
          children: [
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "40px", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }, children: "🚨" }),
            "ACTIVAR PÁNICO"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ x.jsx(
      lf,
      {
        isOpen: c,
        onClose: () => l(!1),
        title: "Configuración SOS",
        children: /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
          /* @__PURE__ */ x.jsx("p", { style: { margin: 0, fontSize: "14px", opacity: 0.8, lineHeight: 1.5 }, children: "Aquí puedes configurar qué acciones ocurren cuando presionas el botón de pánico en el dashboard." }),
          /* @__PURE__ */ x.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "16px" }, children: [
            /* @__PURE__ */ x.jsx("h4", { style: { margin: "0 0 12px 0", fontSize: "14px", color: "#ff8a1f" }, children: "Acciones Automáticas" }),
            /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", cursor: "pointer" }, children: [
              /* @__PURE__ */ x.jsx("input", { type: "checkbox", defaultChecked: !0, style: { width: "18px", height: "18px" } }),
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Disparar todas las sirenas" })
            ] }),
            /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", cursor: "pointer" }, children: [
              /* @__PURE__ */ x.jsx("input", { type: "checkbox", defaultChecked: !0, style: { width: "18px", height: "18px" } }),
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Parpadear luces rojas" })
            ] }),
            /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }, children: [
              /* @__PURE__ */ x.jsx("input", { type: "checkbox", style: { width: "18px", height: "18px" } }),
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Notificar administradores" })
            ] })
          ] }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: () => l(!1),
              style: {
                background: "#1E88E5",
                border: "none",
                borderRadius: "12px",
                padding: "14px",
                color: "white",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
                marginTop: "8px"
              },
              children: "Guardar Configuración"
            }
          )
        ] })
      }
    )
  ] });
}
function eh({ hass: a }) {
  const [c, l] = Xe.useState(!1);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "20px" }, children: [
      /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
        /* @__PURE__ */ x.jsx("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 800 }, children: "Control de Acceso" }),
        /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 800, padding: "4px 8px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.1)", color: "white" }, children: "ACTIVO" })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }, children: [
        /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", background: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: "16px" }, children: [
          /* @__PURE__ */ x.jsx("span", { style: { fontSize: "24px" }, children: "🛡️" }),
          /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 700 }, children: "PIN Maestro Requerido" }),
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "12px", opacity: 0.6 }, children: "Protección global activada" })
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            type: "button",
            onClick: () => l(!0),
            style: {
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "16px",
              padding: "16px",
              color: "white",
              fontSize: "14px",
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "background 0.2s"
            },
            onMouseOver: (d) => d.currentTarget.style.background = "rgba(255,255,255,0.15)",
            onMouseOut: (d) => d.currentTarget.style.background = "rgba(255,255,255,0.1)",
            children: [
              /* @__PURE__ */ x.jsx("span", { children: "👥" }),
              " Gestionar Usuarios y Permisos"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ x.jsx(
      lf,
      {
        isOpen: c,
        onClose: () => l(!1),
        title: "Control de Acceso & Usuarios",
        children: /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "20px" }, children: [
          /* @__PURE__ */ x.jsx("p", { style: { margin: 0, fontSize: "14px", opacity: 0.8, lineHeight: 1.5 }, children: "Gestión global de seguridad, PIN maestro y administradores." }),
          /* @__PURE__ */ x.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "16px" }, children: [
            /* @__PURE__ */ x.jsx("h4", { style: { margin: "0 0 16px 0", fontSize: "14px", color: "#1E88E5" }, children: "Usuarios Registrados" }),
            /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", marginBottom: "8px" }, children: [
              /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
                /* @__PURE__ */ x.jsx("div", { style: { width: "32px", height: "32px", borderRadius: "50%", background: "#43A047", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }, children: "C" }),
                /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                  /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Chris (Tú)" }),
                  /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", color: "#43A047", fontWeight: 800 }, children: "ADMINISTRADOR" })
                ] })
              ] }),
              /* @__PURE__ */ x.jsx("button", { style: { background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "white", borderRadius: "8px", padding: "6px 12px", cursor: "pointer", fontSize: "12px" }, children: "Editar" })
            ] }),
            /* @__PURE__ */ x.jsx("button", { style: { width: "100%", padding: "12px", background: "transparent", border: "1px dashed rgba(255,255,255,0.3)", borderRadius: "12px", color: "rgba(255,255,255,0.7)", cursor: "pointer", fontWeight: 600, marginTop: "8px" }, children: "+ Añadir Usuario" })
          ] }),
          /* @__PURE__ */ x.jsxs("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "16px" }, children: [
            /* @__PURE__ */ x.jsx("h4", { style: { margin: "0 0 12px 0", fontSize: "14px" }, children: "Configuración Global" }),
            /* @__PURE__ */ x.jsxs("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }, children: [
              /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 600 }, children: "Requerir PIN para desarmar" }),
              /* @__PURE__ */ x.jsx("input", { type: "checkbox", defaultChecked: !0, style: { width: "18px", height: "18px" } })
            ] })
          ] }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: () => l(!1),
              style: {
                background: "#1E88E5",
                border: "none",
                borderRadius: "12px",
                padding: "14px",
                color: "white",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
                marginTop: "8px"
              },
              children: "Cerrar"
            }
          )
        ] })
      }
    )
  ] });
}
function th({ hass: a }) {
  const c = [
    { id: "1", time: "12:05 PM", action: "Alarma disparada por Sensor Puerta Principal", type: "triggered", icon: "🚨" },
    { id: "2", time: "12:00 PM", action: "Armando sistema (Ausente)...", type: "pending", icon: "⏳" },
    { id: "3", time: "11:30 AM", action: "Sistema desarmado por Chris", type: "disarmed", icon: "🔓" },
    { id: "4", time: "10:00 AM", action: "Configuración de PIN guardada", type: "config", icon: "⚙️" }
  ], l = (E) => {
    switch (E) {
      case "disarmed":
        return "#43A047";
      // Verde
      case "triggered":
        return "#E53935";
      // Rojo
      case "pending":
        return "#F5B041";
      // Naranja
      case "config":
        return "rgba(255, 255, 255, 0.4)";
      // Sin color dominante
      default:
        return "rgba(255, 255, 255, 0.4)";
    }
  }, d = (E) => {
    switch (E) {
      case "disarmed":
        return "rgba(67, 160, 71, 0.15)";
      case "triggered":
        return "rgba(229, 57, 53, 0.15)";
      case "pending":
        return "rgba(245, 176, 65, 0.15)";
      case "config":
        return "rgba(255, 255, 255, 0.05)";
      default:
        return "rgba(255, 255, 255, 0.05)";
    }
  };
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "20px" }, children: [
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      /* @__PURE__ */ x.jsx("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 800 }, children: "Historial de Actividad" }),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          style: {
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: "12px",
            padding: "6px 12px",
            color: "white",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer"
          },
          children: "🔄 Actualizar"
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((E) => /* @__PURE__ */ x.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px"
    }, children: [
      /* @__PURE__ */ x.jsx("div", { style: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: d(E.type),
        color: l(E.type),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        boxShadow: `0 0 10px ${d(E.type)}`
      }, children: E.icon }),
      /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column", flex: 1 }, children: [
        /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }, children: E.action }),
        /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", opacity: 0.5, marginTop: "2px", fontWeight: 600 }, children: E.time })
      ] })
    ] }, E.id)) })
  ] });
}
function nh({ hass: a }) {
  const c = [
    { id: "1", name: "Encender luces si hay intrusión", status: "enabled", type: "triggered", icon: "🚨" },
    { id: "2", name: "Apagar todo al Armar Ausente", status: "enabled", type: "pending", icon: "⏳" },
    { id: "3", name: "Enviar notificación al Desarmar", status: "disabled", type: "disarmed", icon: "🔓" }
  ], l = (E) => {
    switch (E) {
      case "disarmed":
        return "#43A047";
      // Verde
      case "triggered":
        return "#E53935";
      // Rojo
      case "pending":
        return "#F5B041";
      // Naranja
      default:
        return "rgba(255, 255, 255, 0.4)";
    }
  }, d = (E) => {
    switch (E) {
      case "disarmed":
        return "rgba(67, 160, 71, 0.15)";
      case "triggered":
        return "rgba(229, 57, 53, 0.15)";
      case "pending":
        return "rgba(245, 176, 65, 0.15)";
      default:
        return "rgba(255, 255, 255, 0.05)";
    }
  };
  return /* @__PURE__ */ x.jsxs("div", { style: { height: "100%", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "20px" }, children: [
    /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      /* @__PURE__ */ x.jsx("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 800 }, children: "Automatizaciones Argus" }),
      /* @__PURE__ */ x.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            alert("Abriendo creador de automatizaciones en Home Assistant...");
          },
          style: {
            background: "#1E88E5",
            border: "none",
            borderRadius: "12px",
            padding: "6px 12px",
            color: "white",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px"
          },
          children: [
            /* @__PURE__ */ x.jsx("span", { children: "+" }),
            " Crear con HA"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx("p", { style: { margin: "0 0 12px 0", fontSize: "13px", opacity: 0.7, lineHeight: 1.4 }, children: "Reglas configuradas en Home Assistant que utilizan el panel de Argus como disparador o condición." }),
    /* @__PURE__ */ x.jsx("div", { style: { flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px", paddingRight: "4px" }, children: c.map((E) => /* @__PURE__ */ x.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
      padding: "12px",
      borderRadius: "16px",
      opacity: E.status === "enabled" ? 1 : 0.5
    }, children: [
      /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ x.jsx("div", { style: {
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: d(E.type),
          color: l(E.type),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          boxShadow: `0 0 8px ${d(E.type)}`
        }, children: E.icon }),
        /* @__PURE__ */ x.jsx("span", { style: { fontSize: "13px", fontWeight: 600 }, children: E.name })
      ] }),
      /* @__PURE__ */ x.jsx("div", { style: {
        width: "36px",
        height: "20px",
        background: E.status === "enabled" ? "#43A047" : "rgba(255,255,255,0.2)",
        borderRadius: "10px",
        position: "relative",
        cursor: "pointer"
      }, children: /* @__PURE__ */ x.jsx("div", { style: {
        position: "absolute",
        top: "2px",
        left: E.status === "enabled" ? "18px" : "2px",
        width: "16px",
        height: "16px",
        background: "white",
        borderRadius: "50%",
        transition: "left 0.2s ease"
      } }) })
    ] }, E.id)) })
  ] });
}
function rh({ userName: a }) {
  const [c, l] = Xe.useState(!0), [d, E] = Xe.useState(!1);
  return Xe.useEffect(() => {
    const b = setTimeout(() => {
      E(!0);
    }, 1200), L = setTimeout(() => {
      l(!1);
    }, 2e3);
    return () => {
      clearTimeout(b), clearTimeout(L);
    };
  }, []), c ? of.createPortal(
    /* @__PURE__ */ x.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          background: d ? "transparent" : "rgba(15, 20, 30, 0.95)",
          backdropFilter: d ? "none" : "blur(40px)",
          WebkitBackdropFilter: d ? "none" : "blur(40px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          pointerEvents: d ? "none" : "auto",
          // Evitar bloquear clics mientras se encoge
          // Cuando isShrinking es true, encogemos el contenedor hacia la esquina superior izquierda
          // (donde está la foto de perfil en el TopBar: aprox x: 20px, y: 16px)
          transformOrigin: "top left",
          transform: d ? "translate(20px, 16px) scale(0)" : "translate(0, 0) scale(1)",
          opacity: d ? 0 : 1
        },
        children: /* @__PURE__ */ x.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              animation: "argusIntroFadeIn 0.5s ease forwards"
            },
            children: [
              /* @__PURE__ */ x.jsx("style", { children: `
            @keyframes argusIntroFadeIn {
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            .tvos-profile {
              position: relative;
              width: 140px;
              height: 140px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.1);
              display: flex;
              align-items: center;
              justifyContent: center;
              box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.2);
              overflow: hidden;
            }
            .tvos-profile img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
            }
            .tvos-profile::after {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              border-radius: 50%;
              border: 2px solid rgba(255, 255, 255, 0.4);
              box-shadow: inset 0 0 20px rgba(255,255,255,0.2);
              pointer-events: none;
            }
            @media (min-width: 768px) {
              .tvos-profile {
                width: 180px;
                height: 180px;
              }
            }
          ` }),
              /* @__PURE__ */ x.jsx("div", { className: "tvos-profile", children: /* @__PURE__ */ x.jsx("img", { src: `https://ui-avatars.com/api/?name=${encodeURIComponent(a)}&background=1E88E5&color=fff&size=200`, alt: "Profile" }) }),
              /* @__PURE__ */ x.jsxs("div", { style: { textAlign: "center", color: "white", marginTop: "8px" }, children: [
                /* @__PURE__ */ x.jsxs("h1", { style: { margin: "0 0 8px 0", fontSize: "32px", fontWeight: 900, letterSpacing: "-0.02em", textShadow: "0 4px 12px rgba(0,0,0,0.5)" }, children: [
                  "Bienvenido, ",
                  a
                ] }),
                /* @__PURE__ */ x.jsx("div", { style: {
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "rgba(67, 160, 71, 0.2)",
                  border: "1px solid rgba(67, 160, 71, 0.4)",
                  borderRadius: "20px",
                  color: "#43A047",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1px"
                }, children: "ADMINISTRADOR" })
              ] })
            ]
          }
        )
      }
    ),
    document.body
  ) : null;
}
const ih = new Gp();
function oh({ hass: a, config: c }) {
  const [l, d] = Xe.useState(/* @__PURE__ */ new Date());
  Xe.useEffect(() => {
    const N = setInterval(() => d(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(N);
  }, []);
  const E = a?.user?.name || "Chris", b = a?.user?.name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(a.user.name)}&background=random` : "", L = [
    { id: "modes", title: "Modos", size: "L", kind: "alarm-configuration", visible: !0 },
    { id: "active-instances", title: "Instancias Activas", size: "M", kind: "security-status", visible: !0 },
    { id: "sos", title: "Acciones SOS", size: "M", kind: "custom", visible: !0 },
    { id: "history", title: "Historial", size: "L", kind: "activity-history", visible: !0 },
    { id: "automations", title: "Automatizaciones", size: "L", kind: "automations", visible: !0 },
    { id: "access", title: "Control de Acceso", size: "XL", kind: "access-control", visible: !0 }
  ], V = {
    modes: /* @__PURE__ */ x.jsx(Zp, { hass: a }),
    "active-instances": /* @__PURE__ */ x.jsx(Kp, { hass: a }),
    sos: /* @__PURE__ */ x.jsx(Jp, { hass: a }),
    history: /* @__PURE__ */ x.jsx(th, { hass: a }),
    automations: /* @__PURE__ */ x.jsx(nh, { hass: a }),
    access: /* @__PURE__ */ x.jsx(eh, { hass: a })
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(rh, { userName: E }),
    /* @__PURE__ */ x.jsxs("div", { style: {
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      color: "white",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      boxSizing: "border-box"
    }, children: [
      /* @__PURE__ */ x.jsxs("header", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px",
        background: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        zIndex: 100,
        position: "sticky",
        top: 0
      }, children: [
        /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "14px" }, children: [
          b ? /* @__PURE__ */ x.jsx(
            "img",
            {
              src: b,
              alt: "Profile",
              style: { width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.2)" }
            }
          ) : /* @__PURE__ */ x.jsx("div", { style: { width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" } }),
          /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "11px", fontWeight: 800, textTransform: "uppercase", opacity: 0.6, letterSpacing: "0.5px" }, children: "Argus Home Hub" }),
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "18px", fontWeight: 900, marginTop: "2px", letterSpacing: "-0.02em" }, children: c?.name || "Mi Casa" })
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ x.jsxs("div", { style: { textAlign: "right", display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "12px", fontWeight: 700, opacity: 0.8 }, children: a ? "Conectado" : "Desconectado" }),
            /* @__PURE__ */ x.jsx("span", { style: { fontSize: "14px", fontWeight: 800 }, children: l.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) })
          ] }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              type: "button",
              style: {
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "8px",
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease"
              },
              children: /* @__PURE__ */ x.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ x.jsx("path", { d: "M12 20h9" }),
                /* @__PURE__ */ x.jsx("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ x.jsx("main", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ x.jsx(
        Qp,
        {
          widgets: L,
          widgetComponents: V,
          storage: ih,
          userId: a?.user?.id || "default_user",
          dashboardId: "main",
          onEditing: () => {
          },
          registerEditor: () => {
          }
        }
      ) })
    ] })
  ] });
}
class lh extends HTMLElement {
  root = null;
  _hass = null;
  _config = null;
  set hass(c) {
    this._hass = c, this.render();
  }
  setConfig(c) {
    this._config = c, this.render();
  }
  connectedCallback() {
    this.root || (this.root = ap.createRoot(this)), this.render();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
  render() {
    this.root && this.root.render(
      up.createElement(oh, {
        hass: this._hass,
        config: this._config
      })
    );
  }
}
function fh(a) {
  customElements.get("argus-panel") || customElements.define("argus-panel", lh);
}
export {
  fh as applyArgusFrontend
};
