function ep(u) {
  if (u.__esModule) return u;
  var c = u.default;
  if (typeof c == "function") {
    var s = function p() {
      return this instanceof p ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    s.prototype = c.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(u).forEach(function(p) {
    var O = Object.getOwnPropertyDescriptor(u, p);
    Object.defineProperty(s, p, O.get ? O : {
      enumerable: !0,
      get: function() {
        return u[p];
      }
    });
  }), s;
}
var gs = { exports: {} }, ri = {}, ys = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pc;
function tp() {
  if (pc) return Le;
  pc = 1;
  var u = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), H = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), W = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), A = Symbol.iterator;
  function F(x) {
    return x === null || typeof x != "object" ? null : (x = A && x[A] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var ke = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ye = Object.assign, Q = {};
  function T(x, M, we) {
    this.props = x, this.context = M, this.refs = Q, this.updater = we || ke;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(x, M) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, M, "setState");
  }, T.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function v() {
  }
  v.prototype = T.prototype;
  function a(x, M, we) {
    this.props = x, this.context = M, this.refs = Q, this.updater = we || ke;
  }
  var h = a.prototype = new v();
  h.constructor = a, ye(h, T.prototype), h.isPureReactComponent = !0;
  var f = Array.isArray, d = Object.prototype.hasOwnProperty, y = { current: null }, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(x, M, we) {
    var xe, Oe = {}, De = null, Ie = null;
    if (M != null) for (xe in M.ref !== void 0 && (Ie = M.ref), M.key !== void 0 && (De = "" + M.key), M) d.call(M, xe) && !k.hasOwnProperty(xe) && (Oe[xe] = M[xe]);
    var K = arguments.length - 2;
    if (K === 1) Oe.children = we;
    else if (1 < K) {
      for (var ue = Array(K), Re = 0; Re < K; Re++) ue[Re] = arguments[Re + 2];
      Oe.children = ue;
    }
    if (x && x.defaultProps) for (xe in K = x.defaultProps, K) Oe[xe] === void 0 && (Oe[xe] = K[xe]);
    return { $$typeof: u, type: x, key: De, ref: Ie, props: Oe, _owner: y.current };
  }
  function B(x, M) {
    return { $$typeof: u, type: x.type, key: M, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function te(x) {
    return typeof x == "object" && x !== null && x.$$typeof === u;
  }
  function le(x) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(we) {
      return M[we];
    });
  }
  var I = /\/+/g;
  function U(x, M) {
    return typeof x == "object" && x !== null && x.key != null ? le("" + x.key) : M.toString(36);
  }
  function re(x, M, we, xe, Oe) {
    var De = typeof x;
    (De === "undefined" || De === "boolean") && (x = null);
    var Ie = !1;
    if (x === null) Ie = !0;
    else switch (De) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case u:
          case c:
            Ie = !0;
        }
    }
    if (Ie) return Ie = x, Oe = Oe(Ie), x = xe === "" ? "." + U(Ie, 0) : xe, f(Oe) ? (we = "", x != null && (we = x.replace(I, "$&/") + "/"), re(Oe, M, we, "", function(Re) {
      return Re;
    })) : Oe != null && (te(Oe) && (Oe = B(Oe, we + (!Oe.key || Ie && Ie.key === Oe.key ? "" : ("" + Oe.key).replace(I, "$&/") + "/") + x)), M.push(Oe)), 1;
    if (Ie = 0, xe = xe === "" ? "." : xe + ":", f(x)) for (var K = 0; K < x.length; K++) {
      De = x[K];
      var ue = xe + U(De, K);
      Ie += re(De, M, we, ue, Oe);
    }
    else if (ue = F(x), typeof ue == "function") for (x = ue.call(x), K = 0; !(De = x.next()).done; ) De = De.value, ue = xe + U(De, K++), Ie += re(De, M, we, ue, Oe);
    else if (De === "object") throw M = String(x), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function ae(x, M, we) {
    if (x == null) return x;
    var xe = [], Oe = 0;
    return re(x, xe, "", "", function(De) {
      return M.call(we, De, Oe++);
    }), xe;
  }
  function de(x) {
    if (x._status === -1) {
      var M = x._result;
      M = M(), M.then(function(we) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = we);
      }, function(we) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = we);
      }), x._status === -1 && (x._status = 0, x._result = M);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ce = { current: null }, V = { transition: null }, ie = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: V, ReactCurrentOwner: y };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Le.Children = { map: ae, forEach: function(x, M, we) {
    ae(x, function() {
      M.apply(this, arguments);
    }, we);
  }, count: function(x) {
    var M = 0;
    return ae(x, function() {
      M++;
    }), M;
  }, toArray: function(x) {
    return ae(x, function(M) {
      return M;
    }) || [];
  }, only: function(x) {
    if (!te(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, Le.Component = T, Le.Fragment = s, Le.Profiler = O, Le.PureComponent = a, Le.StrictMode = p, Le.Suspense = N, Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie, Le.act = ee, Le.cloneElement = function(x, M, we) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var xe = ye({}, x.props), Oe = x.key, De = x.ref, Ie = x._owner;
    if (M != null) {
      if (M.ref !== void 0 && (De = M.ref, Ie = y.current), M.key !== void 0 && (Oe = "" + M.key), x.type && x.type.defaultProps) var K = x.type.defaultProps;
      for (ue in M) d.call(M, ue) && !k.hasOwnProperty(ue) && (xe[ue] = M[ue] === void 0 && K !== void 0 ? K[ue] : M[ue]);
    }
    var ue = arguments.length - 2;
    if (ue === 1) xe.children = we;
    else if (1 < ue) {
      K = Array(ue);
      for (var Re = 0; Re < ue; Re++) K[Re] = arguments[Re + 2];
      xe.children = K;
    }
    return { $$typeof: u, type: x.type, key: Oe, ref: De, props: xe, _owner: Ie };
  }, Le.createContext = function(x) {
    return x = { $$typeof: H, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: C, _context: x }, x.Consumer = x;
  }, Le.createElement = j, Le.createFactory = function(x) {
    var M = j.bind(null, x);
    return M.type = x, M;
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(x) {
    return { $$typeof: G, render: x };
  }, Le.isValidElement = te, Le.lazy = function(x) {
    return { $$typeof: X, _payload: { _status: -1, _result: x }, _init: de };
  }, Le.memo = function(x, M) {
    return { $$typeof: W, type: x, compare: M === void 0 ? null : M };
  }, Le.startTransition = function(x) {
    var M = V.transition;
    V.transition = {};
    try {
      x();
    } finally {
      V.transition = M;
    }
  }, Le.unstable_act = ee, Le.useCallback = function(x, M) {
    return ce.current.useCallback(x, M);
  }, Le.useContext = function(x) {
    return ce.current.useContext(x);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(x) {
    return ce.current.useDeferredValue(x);
  }, Le.useEffect = function(x, M) {
    return ce.current.useEffect(x, M);
  }, Le.useId = function() {
    return ce.current.useId();
  }, Le.useImperativeHandle = function(x, M, we) {
    return ce.current.useImperativeHandle(x, M, we);
  }, Le.useInsertionEffect = function(x, M) {
    return ce.current.useInsertionEffect(x, M);
  }, Le.useLayoutEffect = function(x, M) {
    return ce.current.useLayoutEffect(x, M);
  }, Le.useMemo = function(x, M) {
    return ce.current.useMemo(x, M);
  }, Le.useReducer = function(x, M, we) {
    return ce.current.useReducer(x, M, we);
  }, Le.useRef = function(x) {
    return ce.current.useRef(x);
  }, Le.useState = function(x) {
    return ce.current.useState(x);
  }, Le.useSyncExternalStore = function(x, M, we) {
    return ce.current.useSyncExternalStore(x, M, we);
  }, Le.useTransition = function() {
    return ce.current.useTransition();
  }, Le.version = "18.3.1", Le;
}
var hc;
function Ot() {
  return hc || (hc = 1, ys.exports = tp()), ys.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function np() {
  if (mc) return ri;
  mc = 1;
  var u = Ot(), c = Symbol.for("react.element"), s = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, O = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(G, N, W) {
    var X, A = {}, F = null, ke = null;
    W !== void 0 && (F = "" + W), N.key !== void 0 && (F = "" + N.key), N.ref !== void 0 && (ke = N.ref);
    for (X in N) p.call(N, X) && !C.hasOwnProperty(X) && (A[X] = N[X]);
    if (G && G.defaultProps) for (X in N = G.defaultProps, N) A[X] === void 0 && (A[X] = N[X]);
    return { $$typeof: c, type: G, key: F, ref: ke, props: A, _owner: O.current };
  }
  return ri.Fragment = s, ri.jsx = H, ri.jsxs = H, ri;
}
var gc;
function rp() {
  return gc || (gc = 1, gs.exports = np()), gs.exports;
}
var $e = rp(), xo = {}, vs = { exports: {} }, zt = {}, ws = { exports: {} }, Ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yc;
function ip() {
  return yc || (yc = 1, function(u) {
    function c(V, ie) {
      var ee = V.length;
      V.push(ie);
      e: for (; 0 < ee; ) {
        var x = ee - 1 >>> 1, M = V[x];
        if (0 < O(M, ie)) V[x] = ie, V[ee] = M, ee = x;
        else break e;
      }
    }
    function s(V) {
      return V.length === 0 ? null : V[0];
    }
    function p(V) {
      if (V.length === 0) return null;
      var ie = V[0], ee = V.pop();
      if (ee !== ie) {
        V[0] = ee;
        e: for (var x = 0, M = V.length, we = M >>> 1; x < we; ) {
          var xe = 2 * (x + 1) - 1, Oe = V[xe], De = xe + 1, Ie = V[De];
          if (0 > O(Oe, ee)) De < M && 0 > O(Ie, Oe) ? (V[x] = Ie, V[De] = ee, x = De) : (V[x] = Oe, V[xe] = ee, x = xe);
          else if (De < M && 0 > O(Ie, ee)) V[x] = Ie, V[De] = ee, x = De;
          else break e;
        }
      }
      return ie;
    }
    function O(V, ie) {
      var ee = V.sortIndex - ie.sortIndex;
      return ee !== 0 ? ee : V.id - ie.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var C = performance;
      u.unstable_now = function() {
        return C.now();
      };
    } else {
      var H = Date, G = H.now();
      u.unstable_now = function() {
        return H.now() - G;
      };
    }
    var N = [], W = [], X = 1, A = null, F = 3, ke = !1, ye = !1, Q = !1, T = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function h(V) {
      for (var ie = s(W); ie !== null; ) {
        if (ie.callback === null) p(W);
        else if (ie.startTime <= V) p(W), ie.sortIndex = ie.expirationTime, c(N, ie);
        else break;
        ie = s(W);
      }
    }
    function f(V) {
      if (Q = !1, h(V), !ye) if (s(N) !== null) ye = !0, de(d);
      else {
        var ie = s(W);
        ie !== null && ce(f, ie.startTime - V);
      }
    }
    function d(V, ie) {
      ye = !1, Q && (Q = !1, v(j), j = -1), ke = !0;
      var ee = F;
      try {
        for (h(ie), A = s(N); A !== null && (!(A.expirationTime > ie) || V && !le()); ) {
          var x = A.callback;
          if (typeof x == "function") {
            A.callback = null, F = A.priorityLevel;
            var M = x(A.expirationTime <= ie);
            ie = u.unstable_now(), typeof M == "function" ? A.callback = M : A === s(N) && p(N), h(ie);
          } else p(N);
          A = s(N);
        }
        if (A !== null) var we = !0;
        else {
          var xe = s(W);
          xe !== null && ce(f, xe.startTime - ie), we = !1;
        }
        return we;
      } finally {
        A = null, F = ee, ke = !1;
      }
    }
    var y = !1, k = null, j = -1, B = 5, te = -1;
    function le() {
      return !(u.unstable_now() - te < B);
    }
    function I() {
      if (k !== null) {
        var V = u.unstable_now();
        te = V;
        var ie = !0;
        try {
          ie = k(!0, V);
        } finally {
          ie ? U() : (y = !1, k = null);
        }
      } else y = !1;
    }
    var U;
    if (typeof a == "function") U = function() {
      a(I);
    };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), ae = re.port2;
      re.port1.onmessage = I, U = function() {
        ae.postMessage(null);
      };
    } else U = function() {
      T(I, 0);
    };
    function de(V) {
      k = V, y || (y = !0, U());
    }
    function ce(V, ie) {
      j = T(function() {
        V(u.unstable_now());
      }, ie);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, u.unstable_continueExecution = function() {
      ye || ke || (ye = !0, de(d));
    }, u.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < V ? Math.floor(1e3 / V) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, u.unstable_getFirstCallbackNode = function() {
      return s(N);
    }, u.unstable_next = function(V) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var ie = 3;
          break;
        default:
          ie = F;
      }
      var ee = F;
      F = ie;
      try {
        return V();
      } finally {
        F = ee;
      }
    }, u.unstable_pauseExecution = function() {
    }, u.unstable_requestPaint = function() {
    }, u.unstable_runWithPriority = function(V, ie) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var ee = F;
      F = V;
      try {
        return ie();
      } finally {
        F = ee;
      }
    }, u.unstable_scheduleCallback = function(V, ie, ee) {
      var x = u.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? x + ee : x) : ee = x, V) {
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
      return M = ee + M, V = { id: X++, callback: ie, priorityLevel: V, startTime: ee, expirationTime: M, sortIndex: -1 }, ee > x ? (V.sortIndex = ee, c(W, V), s(N) === null && V === s(W) && (Q ? (v(j), j = -1) : Q = !0, ce(f, ee - x))) : (V.sortIndex = M, c(N, V), ye || ke || (ye = !0, de(d))), V;
    }, u.unstable_shouldYield = le, u.unstable_wrapCallback = function(V) {
      var ie = F;
      return function() {
        var ee = F;
        F = ie;
        try {
          return V.apply(this, arguments);
        } finally {
          F = ee;
        }
      };
    };
  }(Ss)), Ss;
}
var vc;
function op() {
  return vc || (vc = 1, ws.exports = ip()), ws.exports;
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
var wc;
function lp() {
  if (wc) return zt;
  wc = 1;
  var u = Ot(), c = op();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), O = {};
  function C(e, t) {
    H(e, t), H(e + "Capture", t);
  }
  function H(e, t) {
    for (O[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var G = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), N = Object.prototype.hasOwnProperty, W = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, X = {}, A = {};
  function F(e) {
    return N.call(A, e) ? !0 : N.call(X, e) ? !1 : W.test(e) ? A[e] = !0 : (X[e] = !0, !1);
  }
  function ke(e, t, n, r) {
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
  function ye(e, t, n, r) {
    if (t === null || typeof t > "u" || ke(e, t, n, r)) return !0;
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
  function Q(e, t, n, r, i, o, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = l;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new Q(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new Q(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new Q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new Q(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new Q(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new Q(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new Q(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new Q(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new Q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var v = /[\-:]([a-z])/g;
  function a(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      v,
      a
    );
    T[t] = new Q(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(v, a);
    T[t] = new Q(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(v, a);
    T[t] = new Q(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new Q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new Q("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new Q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function h(e, t, n, r) {
    var i = T.hasOwnProperty(t) ? T[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ye(t, n, i, r) && (n = null), r || i === null ? F(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var f = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, d = Symbol.for("react.element"), y = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), le = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), ce = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function ie(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ee = Object.assign, x;
  function M(e) {
    if (x === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
  }
  var we = !1;
  function xe(e, t) {
    if (!e || we) return "";
    we = !0;
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
        } catch (L) {
          var r = L;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (L) {
          r = L;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (L) {
          r = L;
        }
        e();
      }
    } catch (L) {
      if (L && r && typeof L.stack == "string") {
        for (var i = L.stack.split(`
`), o = r.stack.split(`
`), l = i.length - 1, m = o.length - 1; 1 <= l && 0 <= m && i[l] !== o[m]; ) m--;
        for (; 1 <= l && 0 <= m; l--, m--) if (i[l] !== o[m]) {
          if (l !== 1 || m !== 1)
            do
              if (l--, m--, 0 > m || i[l] !== o[m]) {
                var w = `
` + i[l].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= l && 0 <= m);
          break;
        }
      }
    } finally {
      we = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? M(e) : "";
  }
  function Oe(e) {
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
        return e = xe(e.type, !1), e;
      case 11:
        return e = xe(e.type.render, !1), e;
      case 1:
        return e = xe(e.type, !0), e;
      default:
        return "";
    }
  }
  function De(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case k:
        return "Fragment";
      case y:
        return "Portal";
      case B:
        return "Profiler";
      case j:
        return "StrictMode";
      case U:
        return "Suspense";
      case re:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case le:
        return (e.displayName || "Context") + ".Consumer";
      case te:
        return (e._context.displayName || "Context") + ".Provider";
      case I:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ae:
        return t = e.displayName || null, t !== null ? t : De(e.type) || "Memo";
      case de:
        t = e._payload, e = e._init;
        try {
          return De(e(t));
        } catch {
        }
    }
    return null;
  }
  function Ie(e) {
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
        return t === j ? "StrictMode" : "Mode";
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
  function ue(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Re(e) {
    var t = ue(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(l) {
        r = "" + l, o.call(this, l);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(l) {
        r = "" + l;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ce(e) {
    e._valueTracker || (e._valueTracker = Re(e));
  }
  function Te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ue(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ae(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, t) {
    var n = t.checked;
    return ee({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function tt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = K(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function S(e, t) {
    t = t.checked, t != null && h(e, "checked", t, !1);
  }
  function E(e, t) {
    S(e, t);
    var n = K(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? q(e, t.type, n) : t.hasOwnProperty("defaultValue") && q(e, t.type, K(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function R(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function q(e, t, n) {
    (t !== "number" || Ae(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var oe = Array.isArray;
  function ge(e, t, n, r) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return ee({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Pe(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (oe(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: K(n) };
  }
  function Ne(e, t) {
    var n = K(t.value), r = K(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function qe(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Xe(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function st(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xe(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var g, P = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (g = g || document.createElement("div"), g.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = g.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function b(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var J = {
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
  }, se = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(e) {
    se.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), J[t] = J[e];
    });
  });
  function Me(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || J.hasOwnProperty(e) && J[e] ? ("" + t).trim() : t + "px";
  }
  function je(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Me(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Qe = ee({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ft(e, t) {
    if (t) {
      if (Qe[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ht(e, t) {
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
  function Nn(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gn = null, Ln = null, Zt = null;
  function wr(e) {
    if (e = Br(e)) {
      if (typeof Gn != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = bi(t), Gn(e.stateNode, e.type, t));
    }
  }
  function Sr(e) {
    Ln ? Zt ? Zt.push(e) : Zt = [e] : Ln = e;
  }
  function Yn() {
    if (Ln) {
      var e = Ln, t = Zt;
      if (Zt = Ln = null, wr(e), t) for (e = 0; e < t.length; e++) wr(t[e]);
    }
  }
  function pi(e, t) {
    return e(t);
  }
  function Ms() {
  }
  var To = !1;
  function js(e, t, n) {
    if (To) return e(t, n);
    To = !0;
    try {
      return pi(e, t, n);
    } finally {
      To = !1, (Ln !== null || Zt !== null) && (Ms(), Yn());
    }
  }
  function _r(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = bi(n);
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
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Mo = !1;
  if (G) try {
    var xr = {};
    Object.defineProperty(xr, "passive", { get: function() {
      Mo = !0;
    } }), window.addEventListener("test", xr, xr), window.removeEventListener("test", xr, xr);
  } catch {
    Mo = !1;
  }
  function lf(e, t, n, r, i, o, l, m, w) {
    var L = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, L);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var Er = !1, hi = null, mi = !1, jo = null, sf = { onError: function(e) {
    Er = !0, hi = e;
  } };
  function af(e, t, n, r, i, o, l, m, w) {
    Er = !1, hi = null, lf.apply(sf, arguments);
  }
  function uf(e, t, n, r, i, o, l, m, w) {
    if (af.apply(this, arguments), Er) {
      if (Er) {
        var L = hi;
        Er = !1, hi = null;
      } else throw Error(s(198));
      mi || (mi = !0, jo = L);
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
  function bs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Is(e) {
    if (Tn(e) !== e) throw Error(s(188));
  }
  function cf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(s(188));
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
          if (o === n) return Is(i), e;
          if (o === r) return Is(i), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = i, r = o;
      else {
        for (var l = !1, m = i.child; m; ) {
          if (m === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (m === r) {
            l = !0, r = i, n = o;
            break;
          }
          m = m.sibling;
        }
        if (!l) {
          for (m = o.child; m; ) {
            if (m === n) {
              l = !0, n = o, r = i;
              break;
            }
            if (m === r) {
              l = !0, r = o, n = i;
              break;
            }
            m = m.sibling;
          }
          if (!l) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Hs(e) {
    return e = cf(e), e !== null ? Ws(e) : null;
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
  var As = c.unstable_scheduleCallback, Fs = c.unstable_cancelCallback, ff = c.unstable_shouldYield, df = c.unstable_requestPaint, nt = c.unstable_now, pf = c.unstable_getCurrentPriorityLevel, bo = c.unstable_ImmediatePriority, Bs = c.unstable_UserBlockingPriority, gi = c.unstable_NormalPriority, hf = c.unstable_LowPriority, qs = c.unstable_IdlePriority, yi = null, Gt = null;
  function mf(e) {
    if (Gt && typeof Gt.onCommitFiberRoot == "function") try {
      Gt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Wt = Math.clz32 ? Math.clz32 : vf, gf = Math.log, yf = Math.LN2;
  function vf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gf(e) / yf | 0) | 0;
  }
  var vi = 64, wi = 4194304;
  function kr(e) {
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
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, l = n & 268435455;
    if (l !== 0) {
      var m = l & ~i;
      m !== 0 ? r = kr(m) : (o &= l, o !== 0 && (r = kr(o)));
    } else l = n & ~i, l !== 0 ? r = kr(l) : o !== 0 && (r = kr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wt(t), i = 1 << n, r |= e[n], t &= ~i;
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
      var l = 31 - Wt(o), m = 1 << l, w = i[l];
      w === -1 ? (!(m & n) || m & r) && (i[l] = wf(m, t)) : w <= t && (e.expiredLanes |= m), o &= ~m;
    }
  }
  function Io(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Us() {
    var e = vi;
    return vi <<= 1, !(vi & 4194240) && (vi = 64), e;
  }
  function Ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Rr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wt(t), e[t] = n;
  }
  function _f(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Wt(n), o = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
    }
  }
  function Wo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Wt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Be = 0;
  function Vs(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var $s, Ao, Gs, Ys, Xs, Fo = !1, _i = [], fn = null, dn = null, pn = null, zr = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), hn = [], xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Qs(e, t) {
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
        zr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Or.delete(t.pointerId);
    }
  }
  function Pr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && Ao(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
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
        return zr.set(o, Pr(zr.get(o) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return o = i.pointerId, Or.set(o, Pr(Or.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Ks(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = bs(n), t !== null) {
            e.blockedOn = t, Xs(e.priority, function() {
              Gs(n);
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
  function xi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        $t = r, n.target.dispatchEvent(r), $t = null;
      } else return t = Br(n), t !== null && Ao(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Zs(e, t, n) {
    xi(e) && n.delete(t);
  }
  function kf() {
    Fo = !1, fn !== null && xi(fn) && (fn = null), dn !== null && xi(dn) && (dn = null), pn !== null && xi(pn) && (pn = null), zr.forEach(Zs), Or.forEach(Zs);
  }
  function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Fo || (Fo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, kf)));
  }
  function Dr(e) {
    function t(i) {
      return Cr(i, e);
    }
    if (0 < _i.length) {
      Cr(_i[0], e);
      for (var n = 1; n < _i.length; n++) {
        var r = _i[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (fn !== null && Cr(fn, e), dn !== null && Cr(dn, e), pn !== null && Cr(pn, e), zr.forEach(t), Or.forEach(t), n = 0; n < hn.length; n++) r = hn[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < hn.length && (n = hn[0], n.blockedOn === null); ) Ks(n), n.blockedOn === null && hn.shift();
  }
  var Xn = f.ReactCurrentBatchConfig, Ei = !0;
  function Rf(e, t, n, r) {
    var i = Be, o = Xn.transition;
    Xn.transition = null;
    try {
      Be = 1, Bo(e, t, n, r);
    } finally {
      Be = i, Xn.transition = o;
    }
  }
  function zf(e, t, n, r) {
    var i = Be, o = Xn.transition;
    Xn.transition = null;
    try {
      Be = 4, Bo(e, t, n, r);
    } finally {
      Be = i, Xn.transition = o;
    }
  }
  function Bo(e, t, n, r) {
    if (Ei) {
      var i = qo(e, t, n, r);
      if (i === null) ll(e, t, r, ki, n), Qs(e, r);
      else if (Ef(i, e, t, n, r)) r.stopPropagation();
      else if (Qs(e, r), t & 4 && -1 < xf.indexOf(e)) {
        for (; i !== null; ) {
          var o = Br(i);
          if (o !== null && $s(o), o = qo(e, t, n, r), o === null && ll(e, t, r, ki, n), o === i) break;
          i = o;
        }
        i !== null && r.stopPropagation();
      } else ll(e, t, r, null, n);
    }
  }
  var ki = null;
  function qo(e, t, n, r) {
    if (ki = null, e = Nn(r), e = Mn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = bs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ki = e, null;
  }
  function Js(e) {
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
        switch (pf()) {
          case bo:
            return 1;
          case Bs:
            return 4;
          case gi:
          case hf:
            return 16;
          case qs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null, Uo = null, Ri = null;
  function ea() {
    if (Ri) return Ri;
    var e, t = Uo, n = t.length, r, i = "value" in mn ? mn.value : mn.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[o - r]; r++) ;
    return Ri = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function zi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Oi() {
    return !0;
  }
  function ta() {
    return !1;
  }
  function Pt(e) {
    function t(n, r, i, o, l) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = l, this.currentTarget = null;
      for (var m in e) e.hasOwnProperty(m) && (n = e[m], this[m] = n ? n(o) : o[m]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Oi : ta, this.isPropagationStopped = ta, this;
    }
    return ee(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Oi);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Oi);
    }, persist: function() {
    }, isPersistent: Oi }), t;
  }
  var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Vo = Pt(Qn), Nr = ee({}, Qn, { view: 0, detail: 0 }), Of = Pt(Nr), $o, Go, Lr, Pi = ee({}, Nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? ($o = e.screenX - Lr.screenX, Go = e.screenY - Lr.screenY) : Go = $o = 0, Lr = e), $o);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Go;
  } }), na = Pt(Pi), Pf = ee({}, Pi, { dataTransfer: 0 }), Cf = Pt(Pf), Df = ee({}, Nr, { relatedTarget: 0 }), Yo = Pt(Df), Nf = ee({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = Pt(Nf), Tf = ee({}, Qn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Mf = Pt(Tf), jf = ee({}, Qn, { data: 0 }), ra = Pt(jf), bf = {
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
  }, If = {
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
  }, Hf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Wf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hf[e]) ? !!t[e] : !1;
  }
  function Xo() {
    return Wf;
  }
  var Af = ee({}, Nr, { key: function(e) {
    if (e.key) {
      var t = bf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? If[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xo, charCode: function(e) {
    return e.type === "keypress" ? zi(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Ff = Pt(Af), Bf = ee({}, Pi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ia = Pt(Bf), qf = ee({}, Nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xo }), Uf = Pt(qf), Vf = ee({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = Pt(Vf), Gf = ee({}, Pi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yf = Pt(Gf), Xf = [9, 13, 27, 32], Qo = G && "CompositionEvent" in window, Tr = null;
  G && "documentMode" in document && (Tr = document.documentMode);
  var Qf = G && "TextEvent" in window && !Tr, oa = G && (!Qo || Tr && 8 < Tr && 11 >= Tr), la = " ", sa = !1;
  function aa(e, t) {
    switch (e) {
      case "keyup":
        return Xf.indexOf(t.keyCode) !== -1;
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
  function ua(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Kn = !1;
  function Kf(e, t) {
    switch (e) {
      case "compositionend":
        return ua(t);
      case "keypress":
        return t.which !== 32 ? null : (sa = !0, la);
      case "textInput":
        return e = t.data, e === la && sa ? null : e;
      default:
        return null;
    }
  }
  function Zf(e, t) {
    if (Kn) return e === "compositionend" || !Qo && aa(e, t) ? (e = ea(), Ri = Uo = mn = null, Kn = !1, e) : null;
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
        return oa && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ca(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jf[e.type] : t === "textarea";
  }
  function fa(e, t, n, r) {
    Sr(r), t = Ti(t, "onChange"), 0 < t.length && (n = new Vo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Mr = null, jr = null;
  function ed(e) {
    Ca(e, 0);
  }
  function Ci(e) {
    var t = nr(e);
    if (Te(t)) return e;
  }
  function td(e, t) {
    if (e === "change") return t;
  }
  var da = !1;
  if (G) {
    var Ko;
    if (G) {
      var Zo = "oninput" in document;
      if (!Zo) {
        var pa = document.createElement("div");
        pa.setAttribute("oninput", "return;"), Zo = typeof pa.oninput == "function";
      }
      Ko = Zo;
    } else Ko = !1;
    da = Ko && (!document.documentMode || 9 < document.documentMode);
  }
  function ha() {
    Mr && (Mr.detachEvent("onpropertychange", ma), jr = Mr = null);
  }
  function ma(e) {
    if (e.propertyName === "value" && Ci(jr)) {
      var t = [];
      fa(t, jr, e, Nn(e)), js(ed, t);
    }
  }
  function nd(e, t, n) {
    e === "focusin" ? (ha(), Mr = t, jr = n, Mr.attachEvent("onpropertychange", ma)) : e === "focusout" && ha();
  }
  function rd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(jr);
  }
  function id(e, t) {
    if (e === "click") return Ci(t);
  }
  function od(e, t) {
    if (e === "input" || e === "change") return Ci(t);
  }
  function ld(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var At = typeof Object.is == "function" ? Object.is : ld;
  function br(e, t) {
    if (At(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!N.call(t, i) || !At(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ga(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ya(e, t) {
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
  function va(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? va(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function wa() {
    for (var e = window, t = Ae(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ae(e.document);
    }
    return t;
  }
  function Jo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function sd(e) {
    var t = wa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && va(n.ownerDocument.documentElement, n)) {
      if (r !== null && Jo(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, o = Math.min(r.start, i);
          r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ya(n, o);
          var l = ya(
            n,
            r
          );
          i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ad = G && "documentMode" in document && 11 >= document.documentMode, Zn = null, el = null, Ir = null, tl = !1;
  function Sa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tl || Zn == null || Zn !== Ae(r) || (r = Zn, "selectionStart" in r && Jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ir && br(Ir, r) || (Ir = r, r = Ti(el, "onSelect"), 0 < r.length && (t = new Vo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zn)));
  }
  function Di(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Jn = { animationend: Di("Animation", "AnimationEnd"), animationiteration: Di("Animation", "AnimationIteration"), animationstart: Di("Animation", "AnimationStart"), transitionend: Di("Transition", "TransitionEnd") }, nl = {}, _a = {};
  G && (_a = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
  function Ni(e) {
    if (nl[e]) return nl[e];
    if (!Jn[e]) return e;
    var t = Jn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in _a) return nl[e] = t[n];
    return e;
  }
  var xa = Ni("animationend"), Ea = Ni("animationiteration"), ka = Ni("animationstart"), Ra = Ni("transitionend"), za = /* @__PURE__ */ new Map(), Oa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gn(e, t) {
    za.set(e, t), C(t, [e]);
  }
  for (var rl = 0; rl < Oa.length; rl++) {
    var il = Oa[rl], ud = il.toLowerCase(), cd = il[0].toUpperCase() + il.slice(1);
    gn(ud, "on" + cd);
  }
  gn(xa, "onAnimationEnd"), gn(Ea, "onAnimationIteration"), gn(ka, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(Ra, "onTransitionEnd"), H("onMouseEnter", ["mouseout", "mouseover"]), H("onMouseLeave", ["mouseout", "mouseover"]), H("onPointerEnter", ["pointerout", "pointerover"]), H("onPointerLeave", ["pointerout", "pointerover"]), C("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), C("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), C("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), C("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), C("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
  function Pa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, uf(r, t, void 0, e), e.currentTarget = null;
  }
  function Ca(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var l = r.length - 1; 0 <= l; l--) {
          var m = r[l], w = m.instance, L = m.currentTarget;
          if (m = m.listener, w !== o && i.isPropagationStopped()) break e;
          Pa(i, m, L), o = w;
        }
        else for (l = 0; l < r.length; l++) {
          if (m = r[l], w = m.instance, L = m.currentTarget, m = m.listener, w !== o && i.isPropagationStopped()) break e;
          Pa(i, m, L), o = w;
        }
      }
    }
    if (mi) throw e = jo, mi = !1, jo = null, e;
  }
  function Ge(e, t) {
    var n = t[dl];
    n === void 0 && (n = t[dl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Da(t, e, 2, !1), n.add(r));
  }
  function ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Da(n, e, r, t);
  }
  var Li = "_reactListening" + Math.random().toString(36).slice(2);
  function Wr(e) {
    if (!e[Li]) {
      e[Li] = !0, p.forEach(function(n) {
        n !== "selectionchange" && (fd.has(n) || ol(n, !1, e), ol(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Li] || (t[Li] = !0, ol("selectionchange", !1, t));
    }
  }
  function Da(e, t, n, r) {
    switch (Js(t)) {
      case 1:
        var i = Rf;
        break;
      case 4:
        i = zf;
        break;
      default:
        i = Bo;
    }
    n = i.bind(null, t, n, e), i = void 0, !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function ll(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var m = r.stateNode.containerInfo;
        if (m === i || m.nodeType === 8 && m.parentNode === i) break;
        if (l === 4) for (l = r.return; l !== null; ) {
          var w = l.tag;
          if ((w === 3 || w === 4) && (w = l.stateNode.containerInfo, w === i || w.nodeType === 8 && w.parentNode === i)) return;
          l = l.return;
        }
        for (; m !== null; ) {
          if (l = Mn(m), l === null) return;
          if (w = l.tag, w === 5 || w === 6) {
            r = o = l;
            continue e;
          }
          m = m.parentNode;
        }
      }
      r = r.return;
    }
    js(function() {
      var L = o, Y = Nn(n), Z = [];
      e: {
        var $ = za.get(e);
        if ($ !== void 0) {
          var fe = Vo, he = e;
          switch (e) {
            case "keypress":
              if (zi(n) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Ff;
              break;
            case "focusin":
              he = "focus", fe = Yo;
              break;
            case "focusout":
              he = "blur", fe = Yo;
              break;
            case "beforeblur":
            case "afterblur":
              fe = Yo;
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
              fe = na;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Cf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = Uf;
              break;
            case xa:
            case Ea:
            case ka:
              fe = Lf;
              break;
            case Ra:
              fe = $f;
              break;
            case "scroll":
              fe = Of;
              break;
            case "wheel":
              fe = Yf;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = Mf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = ia;
          }
          var me = (t & 4) !== 0, rt = !me && e === "scroll", z = me ? $ !== null ? $ + "Capture" : null : $;
          me = [];
          for (var _ = L, D; _ !== null; ) {
            D = _;
            var ne = D.stateNode;
            if (D.tag === 5 && ne !== null && (D = ne, z !== null && (ne = _r(_, z), ne != null && me.push(Ar(_, ne, D)))), rt) break;
            _ = _.return;
          }
          0 < me.length && ($ = new fe($, he, null, n, Y), Z.push({ event: $, listeners: me }));
        }
      }
      if (!(t & 7)) {
        e: {
          if ($ = e === "mouseover" || e === "pointerover", fe = e === "mouseout" || e === "pointerout", $ && n !== $t && (he = n.relatedTarget || n.fromElement) && (Mn(he) || he[Jt])) break e;
          if ((fe || $) && ($ = Y.window === Y ? Y : ($ = Y.ownerDocument) ? $.defaultView || $.parentWindow : window, fe ? (he = n.relatedTarget || n.toElement, fe = L, he = he ? Mn(he) : null, he !== null && (rt = Tn(he), he !== rt || he.tag !== 5 && he.tag !== 6) && (he = null)) : (fe = null, he = L), fe !== he)) {
            if (me = na, ne = "onMouseLeave", z = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (me = ia, ne = "onPointerLeave", z = "onPointerEnter", _ = "pointer"), rt = fe == null ? $ : nr(fe), D = he == null ? $ : nr(he), $ = new me(ne, _ + "leave", fe, n, Y), $.target = rt, $.relatedTarget = D, ne = null, Mn(Y) === L && (me = new me(z, _ + "enter", he, n, Y), me.target = D, me.relatedTarget = rt, ne = me), rt = ne, fe && he) t: {
              for (me = fe, z = he, _ = 0, D = me; D; D = er(D)) _++;
              for (D = 0, ne = z; ne; ne = er(ne)) D++;
              for (; 0 < _ - D; ) me = er(me), _--;
              for (; 0 < D - _; ) z = er(z), D--;
              for (; _--; ) {
                if (me === z || z !== null && me === z.alternate) break t;
                me = er(me), z = er(z);
              }
              me = null;
            }
            else me = null;
            fe !== null && Na(Z, $, fe, me, !1), he !== null && rt !== null && Na(Z, rt, he, me, !0);
          }
        }
        e: {
          if ($ = L ? nr(L) : window, fe = $.nodeName && $.nodeName.toLowerCase(), fe === "select" || fe === "input" && $.type === "file") var ve = td;
          else if (ca($)) if (da) ve = od;
          else {
            ve = rd;
            var Se = nd;
          }
          else (fe = $.nodeName) && fe.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ve = id);
          if (ve && (ve = ve(e, L))) {
            fa(Z, ve, n, Y);
            break e;
          }
          Se && Se(e, $, L), e === "focusout" && (Se = $._wrapperState) && Se.controlled && $.type === "number" && q($, "number", $.value);
        }
        switch (Se = L ? nr(L) : window, e) {
          case "focusin":
            (ca(Se) || Se.contentEditable === "true") && (Zn = Se, el = L, Ir = null);
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
            tl = !1, Sa(Z, n, Y);
            break;
          case "selectionchange":
            if (ad) break;
          case "keydown":
          case "keyup":
            Sa(Z, n, Y);
        }
        var _e;
        if (Qo) e: {
          switch (e) {
            case "compositionstart":
              var ze = "onCompositionStart";
              break e;
            case "compositionend":
              ze = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ze = "onCompositionUpdate";
              break e;
          }
          ze = void 0;
        }
        else Kn ? aa(e, n) && (ze = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ze = "onCompositionStart");
        ze && (oa && n.locale !== "ko" && (Kn || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && Kn && (_e = ea()) : (mn = Y, Uo = "value" in mn ? mn.value : mn.textContent, Kn = !0)), Se = Ti(L, ze), 0 < Se.length && (ze = new ra(ze, e, null, n, Y), Z.push({ event: ze, listeners: Se }), _e ? ze.data = _e : (_e = ua(n), _e !== null && (ze.data = _e)))), (_e = Qf ? Kf(e, n) : Zf(e, n)) && (L = Ti(L, "onBeforeInput"), 0 < L.length && (Y = new ra("onBeforeInput", "beforeinput", null, n, Y), Z.push({ event: Y, listeners: L }), Y.data = _e));
      }
      Ca(Z, t);
    });
  }
  function Ar(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ti(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, o = i.stateNode;
      i.tag === 5 && o !== null && (i = o, o = _r(e, n), o != null && r.unshift(Ar(e, o, i)), o = _r(e, t), o != null && r.push(Ar(e, o, i))), e = e.return;
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
  function Na(e, t, n, r, i) {
    for (var o = t._reactName, l = []; n !== null && n !== r; ) {
      var m = n, w = m.alternate, L = m.stateNode;
      if (w !== null && w === r) break;
      m.tag === 5 && L !== null && (m = L, i ? (w = _r(n, o), w != null && l.unshift(Ar(n, w, m))) : i || (w = _r(n, o), w != null && l.push(Ar(n, w, m)))), n = n.return;
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
  }
  var dd = /\r\n?/g, pd = /\u0000|\uFFFD/g;
  function La(e) {
    return (typeof e == "string" ? e : "" + e).replace(dd, `
`).replace(pd, "");
  }
  function Mi(e, t, n) {
    if (t = La(t), La(e) !== t && n) throw Error(s(425));
  }
  function ji() {
  }
  var sl = null, al = null;
  function ul(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var cl = typeof setTimeout == "function" ? setTimeout : void 0, hd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ta = typeof Promise == "function" ? Promise : void 0, md = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ta < "u" ? function(e) {
    return Ta.resolve(null).then(e).catch(gd);
  } : cl;
  function gd(e) {
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
          e.removeChild(i), Dr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Dr(t);
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
  function Ma(e) {
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
  var tr = Math.random().toString(36).slice(2), Yt = "__reactFiber$" + tr, Fr = "__reactProps$" + tr, Jt = "__reactContainer$" + tr, dl = "__reactEvents$" + tr, yd = "__reactListeners$" + tr, vd = "__reactHandles$" + tr;
  function Mn(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Jt] || n[Yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ma(e); e !== null; ) {
          if (n = e[Yt]) return n;
          e = Ma(e);
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
    throw Error(s(33));
  }
  function bi(e) {
    return e[Fr] || null;
  }
  var pl = [], rr = -1;
  function vn(e) {
    return { current: e };
  }
  function Ye(e) {
    0 > rr || (e.current = pl[rr], pl[rr] = null, rr--);
  }
  function Ve(e, t) {
    rr++, pl[rr] = e.current, e.current = t;
  }
  var wn = {}, ht = vn(wn), _t = vn(!1), jn = wn;
  function ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function xt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Ii() {
    Ye(_t), Ye(ht);
  }
  function ja(e, t, n) {
    if (ht.current !== wn) throw Error(s(168));
    Ve(ht, t), Ve(_t, n);
  }
  function ba(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(s(108, Ie(e) || "Unknown", i));
    return ee({}, n, r);
  }
  function Hi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wn, jn = ht.current, Ve(ht, e), Ve(_t, _t.current), !0;
  }
  function Ia(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = ba(e, t, jn), r.__reactInternalMemoizedMergedChildContext = e, Ye(_t), Ye(ht), Ve(ht, e)) : Ye(_t), Ve(_t, n);
  }
  var en = null, Wi = !1, hl = !1;
  function Ha(e) {
    en === null ? en = [e] : en.push(e);
  }
  function wd(e) {
    Wi = !0, Ha(e);
  }
  function Sn() {
    if (!hl && en !== null) {
      hl = !0;
      var e = 0, t = Be;
      try {
        var n = en;
        for (Be = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        en = null, Wi = !1;
      } catch (i) {
        throw en !== null && (en = en.slice(e + 1)), As(bo, Sn), i;
      } finally {
        Be = t, hl = !1;
      }
    }
    return null;
  }
  var or = [], lr = 0, Ai = null, Fi = 0, Lt = [], Tt = 0, bn = null, tn = 1, nn = "";
  function In(e, t) {
    or[lr++] = Fi, or[lr++] = Ai, Ai = e, Fi = t;
  }
  function Wa(e, t, n) {
    Lt[Tt++] = tn, Lt[Tt++] = nn, Lt[Tt++] = bn, bn = e;
    var r = tn;
    e = nn;
    var i = 32 - Wt(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - Wt(t) + i;
    if (30 < o) {
      var l = i - i % 5;
      o = (r & (1 << l) - 1).toString(32), r >>= l, i -= l, tn = 1 << 32 - Wt(t) + i | n << i | r, nn = o + e;
    } else tn = 1 << o | n << i | r, nn = e;
  }
  function ml(e) {
    e.return !== null && (In(e, 1), Wa(e, 1, 0));
  }
  function gl(e) {
    for (; e === Ai; ) Ai = or[--lr], or[lr] = null, Fi = or[--lr], or[lr] = null;
    for (; e === bn; ) bn = Lt[--Tt], Lt[Tt] = null, nn = Lt[--Tt], Lt[Tt] = null, tn = Lt[--Tt], Lt[Tt] = null;
  }
  var Ct = null, Dt = null, Ke = !1, Ft = null;
  function Aa(e, t) {
    var n = It(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Fa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ct = e, Dt = yn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ct = e, Dt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bn !== null ? { id: tn, overflow: nn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = It(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ct = e, Dt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function vl(e) {
    if (Ke) {
      var t = Dt;
      if (t) {
        var n = t;
        if (!Fa(e, t)) {
          if (yl(e)) throw Error(s(418));
          t = yn(n.nextSibling);
          var r = Ct;
          t && Fa(e, t) ? Aa(r, n) : (e.flags = e.flags & -4097 | 2, Ke = !1, Ct = e);
        }
      } else {
        if (yl(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Ke = !1, Ct = e;
      }
    }
  }
  function Ba(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ct = e;
  }
  function Bi(e) {
    if (e !== Ct) return !1;
    if (!Ke) return Ba(e), Ke = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps)), t && (t = Dt)) {
      if (yl(e)) throw qa(), Error(s(418));
      for (; t; ) Aa(e, t), t = yn(t.nextSibling);
    }
    if (Ba(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Dt = yn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Dt = null;
      }
    } else Dt = Ct ? yn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function qa() {
    for (var e = Dt; e; ) e = yn(e.nextSibling);
  }
  function sr() {
    Dt = Ct = null, Ke = !1;
  }
  function wl(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var Sd = f.ReactCurrentBatchConfig;
  function qr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var i = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(l) {
          var m = i.refs;
          l === null ? delete m[o] : m[o] = l;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function qi(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ua(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Va(e) {
    function t(z, _) {
      if (e) {
        var D = z.deletions;
        D === null ? (z.deletions = [_], z.flags |= 16) : D.push(_);
      }
    }
    function n(z, _) {
      if (!e) return null;
      for (; _ !== null; ) t(z, _), _ = _.sibling;
      return null;
    }
    function r(z, _) {
      for (z = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? z.set(_.key, _) : z.set(_.index, _), _ = _.sibling;
      return z;
    }
    function i(z, _) {
      return z = Pn(z, _), z.index = 0, z.sibling = null, z;
    }
    function o(z, _, D) {
      return z.index = D, e ? (D = z.alternate, D !== null ? (D = D.index, D < _ ? (z.flags |= 2, _) : D) : (z.flags |= 2, _)) : (z.flags |= 1048576, _);
    }
    function l(z) {
      return e && z.alternate === null && (z.flags |= 2), z;
    }
    function m(z, _, D, ne) {
      return _ === null || _.tag !== 6 ? (_ = cs(D, z.mode, ne), _.return = z, _) : (_ = i(_, D), _.return = z, _);
    }
    function w(z, _, D, ne) {
      var ve = D.type;
      return ve === k ? Y(z, _, D.props.children, ne, D.key) : _ !== null && (_.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === de && Ua(ve) === _.type) ? (ne = i(_, D.props), ne.ref = qr(z, _, D), ne.return = z, ne) : (ne = ho(D.type, D.key, D.props, null, z.mode, ne), ne.ref = qr(z, _, D), ne.return = z, ne);
    }
    function L(z, _, D, ne) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== D.containerInfo || _.stateNode.implementation !== D.implementation ? (_ = fs(D, z.mode, ne), _.return = z, _) : (_ = i(_, D.children || []), _.return = z, _);
    }
    function Y(z, _, D, ne, ve) {
      return _ === null || _.tag !== 7 ? (_ = Vn(D, z.mode, ne, ve), _.return = z, _) : (_ = i(_, D), _.return = z, _);
    }
    function Z(z, _, D) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = cs("" + _, z.mode, D), _.return = z, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case d:
            return D = ho(_.type, _.key, _.props, null, z.mode, D), D.ref = qr(z, null, _), D.return = z, D;
          case y:
            return _ = fs(_, z.mode, D), _.return = z, _;
          case de:
            var ne = _._init;
            return Z(z, ne(_._payload), D);
        }
        if (oe(_) || ie(_)) return _ = Vn(_, z.mode, D, null), _.return = z, _;
        qi(z, _);
      }
      return null;
    }
    function $(z, _, D, ne) {
      var ve = _ !== null ? _.key : null;
      if (typeof D == "string" && D !== "" || typeof D == "number") return ve !== null ? null : m(z, _, "" + D, ne);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case d:
            return D.key === ve ? w(z, _, D, ne) : null;
          case y:
            return D.key === ve ? L(z, _, D, ne) : null;
          case de:
            return ve = D._init, $(
              z,
              _,
              ve(D._payload),
              ne
            );
        }
        if (oe(D) || ie(D)) return ve !== null ? null : Y(z, _, D, ne, null);
        qi(z, D);
      }
      return null;
    }
    function fe(z, _, D, ne, ve) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return z = z.get(D) || null, m(_, z, "" + ne, ve);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case d:
            return z = z.get(ne.key === null ? D : ne.key) || null, w(_, z, ne, ve);
          case y:
            return z = z.get(ne.key === null ? D : ne.key) || null, L(_, z, ne, ve);
          case de:
            var Se = ne._init;
            return fe(z, _, D, Se(ne._payload), ve);
        }
        if (oe(ne) || ie(ne)) return z = z.get(D) || null, Y(_, z, ne, ve, null);
        qi(_, ne);
      }
      return null;
    }
    function he(z, _, D, ne) {
      for (var ve = null, Se = null, _e = _, ze = _ = 0, ct = null; _e !== null && ze < D.length; ze++) {
        _e.index > ze ? (ct = _e, _e = null) : ct = _e.sibling;
        var We = $(z, _e, D[ze], ne);
        if (We === null) {
          _e === null && (_e = ct);
          break;
        }
        e && _e && We.alternate === null && t(z, _e), _ = o(We, _, ze), Se === null ? ve = We : Se.sibling = We, Se = We, _e = ct;
      }
      if (ze === D.length) return n(z, _e), Ke && In(z, ze), ve;
      if (_e === null) {
        for (; ze < D.length; ze++) _e = Z(z, D[ze], ne), _e !== null && (_ = o(_e, _, ze), Se === null ? ve = _e : Se.sibling = _e, Se = _e);
        return Ke && In(z, ze), ve;
      }
      for (_e = r(z, _e); ze < D.length; ze++) ct = fe(_e, z, ze, D[ze], ne), ct !== null && (e && ct.alternate !== null && _e.delete(ct.key === null ? ze : ct.key), _ = o(ct, _, ze), Se === null ? ve = ct : Se.sibling = ct, Se = ct);
      return e && _e.forEach(function(Cn) {
        return t(z, Cn);
      }), Ke && In(z, ze), ve;
    }
    function me(z, _, D, ne) {
      var ve = ie(D);
      if (typeof ve != "function") throw Error(s(150));
      if (D = ve.call(D), D == null) throw Error(s(151));
      for (var Se = ve = null, _e = _, ze = _ = 0, ct = null, We = D.next(); _e !== null && !We.done; ze++, We = D.next()) {
        _e.index > ze ? (ct = _e, _e = null) : ct = _e.sibling;
        var Cn = $(z, _e, We.value, ne);
        if (Cn === null) {
          _e === null && (_e = ct);
          break;
        }
        e && _e && Cn.alternate === null && t(z, _e), _ = o(Cn, _, ze), Se === null ? ve = Cn : Se.sibling = Cn, Se = Cn, _e = ct;
      }
      if (We.done) return n(
        z,
        _e
      ), Ke && In(z, ze), ve;
      if (_e === null) {
        for (; !We.done; ze++, We = D.next()) We = Z(z, We.value, ne), We !== null && (_ = o(We, _, ze), Se === null ? ve = We : Se.sibling = We, Se = We);
        return Ke && In(z, ze), ve;
      }
      for (_e = r(z, _e); !We.done; ze++, We = D.next()) We = fe(_e, z, ze, We.value, ne), We !== null && (e && We.alternate !== null && _e.delete(We.key === null ? ze : We.key), _ = o(We, _, ze), Se === null ? ve = We : Se.sibling = We, Se = We);
      return e && _e.forEach(function(Jd) {
        return t(z, Jd);
      }), Ke && In(z, ze), ve;
    }
    function rt(z, _, D, ne) {
      if (typeof D == "object" && D !== null && D.type === k && D.key === null && (D = D.props.children), typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case d:
            e: {
              for (var ve = D.key, Se = _; Se !== null; ) {
                if (Se.key === ve) {
                  if (ve = D.type, ve === k) {
                    if (Se.tag === 7) {
                      n(z, Se.sibling), _ = i(Se, D.props.children), _.return = z, z = _;
                      break e;
                    }
                  } else if (Se.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === de && Ua(ve) === Se.type) {
                    n(z, Se.sibling), _ = i(Se, D.props), _.ref = qr(z, Se, D), _.return = z, z = _;
                    break e;
                  }
                  n(z, Se);
                  break;
                } else t(z, Se);
                Se = Se.sibling;
              }
              D.type === k ? (_ = Vn(D.props.children, z.mode, ne, D.key), _.return = z, z = _) : (ne = ho(D.type, D.key, D.props, null, z.mode, ne), ne.ref = qr(z, _, D), ne.return = z, z = ne);
            }
            return l(z);
          case y:
            e: {
              for (Se = D.key; _ !== null; ) {
                if (_.key === Se) if (_.tag === 4 && _.stateNode.containerInfo === D.containerInfo && _.stateNode.implementation === D.implementation) {
                  n(z, _.sibling), _ = i(_, D.children || []), _.return = z, z = _;
                  break e;
                } else {
                  n(z, _);
                  break;
                }
                else t(z, _);
                _ = _.sibling;
              }
              _ = fs(D, z.mode, ne), _.return = z, z = _;
            }
            return l(z);
          case de:
            return Se = D._init, rt(z, _, Se(D._payload), ne);
        }
        if (oe(D)) return he(z, _, D, ne);
        if (ie(D)) return me(z, _, D, ne);
        qi(z, D);
      }
      return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D, _ !== null && _.tag === 6 ? (n(z, _.sibling), _ = i(_, D), _.return = z, z = _) : (n(z, _), _ = cs(D, z.mode, ne), _.return = z, z = _), l(z)) : n(z, _);
    }
    return rt;
  }
  var ar = Va(!0), $a = Va(!1), Ui = vn(null), Vi = null, ur = null, Sl = null;
  function _l() {
    Sl = ur = Vi = null;
  }
  function xl(e) {
    var t = Ui.current;
    Ye(Ui), e._currentValue = t;
  }
  function El(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function cr(e, t) {
    Vi = e, Sl = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Et = !0), e.firstContext = null);
  }
  function Mt(e) {
    var t = e._currentValue;
    if (Sl !== e) if (e = { context: e, memoizedValue: t, next: null }, ur === null) {
      if (Vi === null) throw Error(s(308));
      ur = e, Vi.dependencies = { lanes: 0, firstContext: e };
    } else ur = ur.next = e;
    return t;
  }
  var Hn = null;
  function kl(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  function Ga(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, kl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rn(e, r);
  }
  function rn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var _n = !1;
  function Rl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ya(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function on(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function xn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, He & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rn(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, kl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rn(e, n);
  }
  function $i(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wo(e, n);
    }
  }
  function Xa(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? i = o = l : o = o.next = l, n = n.next;
        } while (n !== null);
        o === null ? i = o = t : o = o.next = t;
      } else i = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Gi(e, t, n, r) {
    var i = e.updateQueue;
    _n = !1;
    var o = i.firstBaseUpdate, l = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var w = m, L = w.next;
      w.next = null, l === null ? o = L : l.next = L, l = w;
      var Y = e.alternate;
      Y !== null && (Y = Y.updateQueue, m = Y.lastBaseUpdate, m !== l && (m === null ? Y.firstBaseUpdate = L : m.next = L, Y.lastBaseUpdate = w));
    }
    if (o !== null) {
      var Z = i.baseState;
      l = 0, Y = L = w = null, m = o;
      do {
        var $ = m.lane, fe = m.eventTime;
        if ((r & $) === $) {
          Y !== null && (Y = Y.next = {
            eventTime: fe,
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          });
          e: {
            var he = e, me = m;
            switch ($ = t, fe = n, me.tag) {
              case 1:
                if (he = me.payload, typeof he == "function") {
                  Z = he.call(fe, Z, $);
                  break e;
                }
                Z = he;
                break e;
              case 3:
                he.flags = he.flags & -65537 | 128;
              case 0:
                if (he = me.payload, $ = typeof he == "function" ? he.call(fe, Z, $) : he, $ == null) break e;
                Z = ee({}, Z, $);
                break e;
              case 2:
                _n = !0;
            }
          }
          m.callback !== null && m.lane !== 0 && (e.flags |= 64, $ = i.effects, $ === null ? i.effects = [m] : $.push(m));
        } else fe = { eventTime: fe, lane: $, tag: m.tag, payload: m.payload, callback: m.callback, next: null }, Y === null ? (L = Y = fe, w = Z) : Y = Y.next = fe, l |= $;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null) break;
          $ = m, m = $.next, $.next = null, i.lastBaseUpdate = $, i.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (w = Z), i.baseState = w, i.firstBaseUpdate = L, i.lastBaseUpdate = Y, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          l |= i.lane, i = i.next;
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      Fn |= l, e.lanes = l, e.memoizedState = Z;
    }
  }
  function Qa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(s(191, i));
        i.call(r);
      }
    }
  }
  var Ur = {}, Xt = vn(Ur), Vr = vn(Ur), $r = vn(Ur);
  function Wn(e) {
    if (e === Ur) throw Error(s(174));
    return e;
  }
  function zl(e, t) {
    switch (Ve($r, t), Ve(Vr, e), Ve(Xt, Ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : st(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = st(t, e);
    }
    Ye(Xt), Ve(Xt, t);
  }
  function fr() {
    Ye(Xt), Ye(Vr), Ye($r);
  }
  function Ka(e) {
    Wn($r.current);
    var t = Wn(Xt.current), n = st(t, e.type);
    t !== n && (Ve(Vr, e), Ve(Xt, n));
  }
  function Ol(e) {
    Vr.current === e && (Ye(Xt), Ye(Vr));
  }
  var Ze = vn(0);
  function Yi(e) {
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
  function Cl() {
    for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
    Pl.length = 0;
  }
  var Xi = f.ReactCurrentDispatcher, Dl = f.ReactCurrentBatchConfig, An = 0, Je = null, ot = null, at = null, Qi = !1, Gr = !1, Yr = 0, _d = 0;
  function mt() {
    throw Error(s(321));
  }
  function Nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!At(e[n], t[n])) return !1;
    return !0;
  }
  function Ll(e, t, n, r, i, o) {
    if (An = o, Je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xi.current = e === null || e.memoizedState === null ? Rd : zd, e = n(r, i), Gr) {
      o = 0;
      do {
        if (Gr = !1, Yr = 0, 25 <= o) throw Error(s(301));
        o += 1, at = ot = null, t.updateQueue = null, Xi.current = Od, e = n(r, i);
      } while (Gr);
    }
    if (Xi.current = Ji, t = ot !== null && ot.next !== null, An = 0, at = ot = Je = null, Qi = !1, t) throw Error(s(300));
    return e;
  }
  function Tl() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function Qt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return at === null ? Je.memoizedState = at = e : at = at.next = e, at;
  }
  function jt() {
    if (ot === null) {
      var e = Je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ot.next;
    var t = at === null ? Je.memoizedState : at.next;
    if (t !== null) at = t, ot = e;
    else {
      if (e === null) throw Error(s(310));
      ot = e, e = { memoizedState: ot.memoizedState, baseState: ot.baseState, baseQueue: ot.baseQueue, queue: ot.queue, next: null }, at === null ? Je.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function Xr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ml(e) {
    var t = jt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = ot, i = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (i !== null) {
        var l = i.next;
        i.next = o.next, o.next = l;
      }
      r.baseQueue = i = o, n.pending = null;
    }
    if (i !== null) {
      o = i.next, r = r.baseState;
      var m = l = null, w = null, L = o;
      do {
        var Y = L.lane;
        if ((An & Y) === Y) w !== null && (w = w.next = { lane: 0, action: L.action, hasEagerState: L.hasEagerState, eagerState: L.eagerState, next: null }), r = L.hasEagerState ? L.eagerState : e(r, L.action);
        else {
          var Z = {
            lane: Y,
            action: L.action,
            hasEagerState: L.hasEagerState,
            eagerState: L.eagerState,
            next: null
          };
          w === null ? (m = w = Z, l = r) : w = w.next = Z, Je.lanes |= Y, Fn |= Y;
        }
        L = L.next;
      } while (L !== null && L !== o);
      w === null ? l = r : w.next = m, At(r, t.memoizedState) || (Et = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        o = i.lane, Je.lanes |= o, Fn |= o, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function jl(e) {
    var t = jt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var l = i = i.next;
      do
        o = e(o, l.action), l = l.next;
      while (l !== i);
      At(o, t.memoizedState) || (Et = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Za() {
  }
  function Ja(e, t) {
    var n = Je, r = jt(), i = t(), o = !At(r.memoizedState, i);
    if (o && (r.memoizedState = i, Et = !0), r = r.queue, bl(nu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || at !== null && at.memoizedState.tag & 1) {
      if (n.flags |= 2048, Qr(9, tu.bind(null, n, r, i, t), void 0, null), ut === null) throw Error(s(349));
      An & 30 || eu(n, t, i);
    }
    return i;
  }
  function eu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function tu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ru(t) && iu(e);
  }
  function nu(e, t, n) {
    return n(function() {
      ru(t) && iu(e);
    });
  }
  function ru(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !At(e, n);
    } catch {
      return !0;
    }
  }
  function iu(e) {
    var t = rn(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function ou(e) {
    var t = Qt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Xr, lastRenderedState: e }, t.queue = e, e = e.dispatch = kd.bind(null, Je, e), [t.memoizedState, e];
  }
  function Qr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Je.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function lu() {
    return jt().memoizedState;
  }
  function Ki(e, t, n, r) {
    var i = Qt();
    Je.flags |= e, i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Zi(e, t, n, r) {
    var i = jt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ot !== null) {
      var l = ot.memoizedState;
      if (o = l.destroy, r !== null && Nl(r, l.deps)) {
        i.memoizedState = Qr(t, n, o, r);
        return;
      }
    }
    Je.flags |= e, i.memoizedState = Qr(1 | t, n, o, r);
  }
  function su(e, t) {
    return Ki(8390656, 8, e, t);
  }
  function bl(e, t) {
    return Zi(2048, 8, e, t);
  }
  function au(e, t) {
    return Zi(4, 2, e, t);
  }
  function uu(e, t) {
    return Zi(4, 4, e, t);
  }
  function cu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function fu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zi(4, 4, cu.bind(null, t, e), n);
  }
  function Il() {
  }
  function du(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function pu(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Nl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function hu(e, t, n) {
    return An & 21 ? (At(n, t) || (n = Us(), Je.lanes |= n, Fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Et = !0), e.memoizedState = n);
  }
  function xd(e, t) {
    var n = Be;
    Be = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Dl.transition;
    Dl.transition = {};
    try {
      e(!1), t();
    } finally {
      Be = n, Dl.transition = r;
    }
  }
  function mu() {
    return jt().memoizedState;
  }
  function Ed(e, t, n) {
    var r = zn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, gu(e)) yu(t, n);
    else if (n = Ga(e, t, n, r), n !== null) {
      var i = wt();
      Vt(n, e, r, i), vu(n, t, r);
    }
  }
  function kd(e, t, n) {
    var r = zn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (gu(e)) yu(t, i);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var l = t.lastRenderedState, m = o(l, n);
        if (i.hasEagerState = !0, i.eagerState = m, At(m, l)) {
          var w = t.interleaved;
          w === null ? (i.next = i, kl(t)) : (i.next = w.next, w.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = Ga(e, t, i, r), n !== null && (i = wt(), Vt(n, e, r, i), vu(n, t, r));
    }
  }
  function gu(e) {
    var t = e.alternate;
    return e === Je || t !== null && t === Je;
  }
  function yu(e, t) {
    Gr = Qi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function vu(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Wo(e, n);
    }
  }
  var Ji = { readContext: Mt, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, Rd = { readContext: Mt, useCallback: function(e, t) {
    return Qt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Mt, useEffect: su, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ki(
      4194308,
      4,
      cu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Ki(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ki(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Qt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Qt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ed.bind(null, Je, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Qt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ou, useDebugValue: Il, useDeferredValue: function(e) {
    return Qt().memoizedState = e;
  }, useTransition: function() {
    var e = ou(!1), t = e[0];
    return e = xd.bind(null, e[1]), Qt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Je, i = Qt();
    if (Ke) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), ut === null) throw Error(s(349));
      An & 30 || eu(r, t, n);
    }
    i.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return i.queue = o, su(nu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, Qr(9, tu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Qt(), t = ut.identifierPrefix;
    if (Ke) {
      var n = nn, r = tn;
      n = (r & ~(1 << 32 - Wt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = _d++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zd = {
    readContext: Mt,
    useCallback: du,
    useContext: Mt,
    useEffect: bl,
    useImperativeHandle: fu,
    useInsertionEffect: au,
    useLayoutEffect: uu,
    useMemo: pu,
    useReducer: Ml,
    useRef: lu,
    useState: function() {
      return Ml(Xr);
    },
    useDebugValue: Il,
    useDeferredValue: function(e) {
      var t = jt();
      return hu(t, ot.memoizedState, e);
    },
    useTransition: function() {
      var e = Ml(Xr)[0], t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: Za,
    useSyncExternalStore: Ja,
    useId: mu,
    unstable_isNewReconciler: !1
  }, Od = { readContext: Mt, useCallback: du, useContext: Mt, useEffect: bl, useImperativeHandle: fu, useInsertionEffect: au, useLayoutEffect: uu, useMemo: pu, useReducer: jl, useRef: lu, useState: function() {
    return jl(Xr);
  }, useDebugValue: Il, useDeferredValue: function(e) {
    var t = jt();
    return ot === null ? t.memoizedState = e : hu(t, ot.memoizedState, e);
  }, useTransition: function() {
    var e = jl(Xr)[0], t = jt().memoizedState;
    return [e, t];
  }, useMutableSource: Za, useSyncExternalStore: Ja, useId: mu, unstable_isNewReconciler: !1 };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      t = ee({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Hl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var eo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = zn(e), o = on(r, i);
    o.payload = t, n != null && (o.callback = n), t = xn(e, o, i), t !== null && (Vt(t, e, i, r), $i(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = wt(), i = zn(e), o = on(r, i);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = xn(e, o, i), t !== null && (Vt(t, e, i, r), $i(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = wt(), r = zn(e), i = on(n, r);
    i.tag = 2, t != null && (i.callback = t), t = xn(e, i, r), t !== null && (Vt(t, e, r, n), $i(t, e, r));
  } };
  function wu(e, t, n, r, i, o, l) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, l) : t.prototype && t.prototype.isPureReactComponent ? !br(n, r) || !br(i, o) : !0;
  }
  function Su(e, t, n) {
    var r = !1, i = wn, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Mt(o) : (i = xt(t) ? jn : ht.current, r = t.contextTypes, o = (r = r != null) ? ir(e, i) : wn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = eo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function _u(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && eo.enqueueReplaceState(t, t.state, null);
  }
  function Wl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Rl(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Mt(o) : (o = xt(t) ? jn : ht.current, i.context = ir(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Hl(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && eo.enqueueReplaceState(i, i.state, null), Gi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function dr(e, t) {
    try {
      var n = "", r = t;
      do
        n += Oe(r), r = r.return;
      while (r);
      var i = n;
    } catch (o) {
      i = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Al(e, t, n) {
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
  var Pd = typeof WeakMap == "function" ? WeakMap : Map;
  function xu(e, t, n) {
    n = on(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      so || (so = !0, ns = r), Fl(e, t);
    }, n;
  }
  function Eu(e, t, n) {
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
      Fl(e, t), typeof r != "function" && (kn === null ? kn = /* @__PURE__ */ new Set([this]) : kn.add(this));
      var l = t.stack;
      this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
    }), n;
  }
  function ku(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Pd();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Bd.bind(null, e, t, n), t.then(e, e));
  }
  function Ru(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function zu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = on(-1, 1), t.tag = 2, xn(n, t, 1))), n.lanes |= 1), e);
  }
  var Cd = f.ReactCurrentOwner, Et = !1;
  function vt(e, t, n, r) {
    t.child = e === null ? $a(t, null, n, r) : ar(t, e.child, n, r);
  }
  function Ou(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return cr(t, i), r = Ll(e, t, n, r, o, i), n = Tl(), e !== null && !Et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ke && n && ml(t), t.flags |= 1, vt(e, t, r, i), t.child);
  }
  function Pu(e, t, n, r, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !us(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Cu(e, t, o, r, i)) : (e = ho(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & i)) {
      var l = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : br, n(l, r) && e.ref === t.ref) return ln(e, t, i);
    }
    return t.flags |= 1, e = Pn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Cu(e, t, n, r, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (br(o, r) && e.ref === t.ref) if (Et = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Et = !0);
      else return t.lanes = e.lanes, ln(e, t, i);
    }
    return Bl(e, t, n, r, i);
  }
  function Du(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(hr, Nt), Nt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ve(hr, Nt), Nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, Ve(hr, Nt), Nt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ve(hr, Nt), Nt |= r;
    return vt(e, t, i, n), t.child;
  }
  function Nu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Bl(e, t, n, r, i) {
    var o = xt(n) ? jn : ht.current;
    return o = ir(t, o), cr(t, i), n = Ll(e, t, n, r, o, i), r = Tl(), e !== null && !Et ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ln(e, t, i)) : (Ke && r && ml(t), t.flags |= 1, vt(e, t, n, i), t.child);
  }
  function Lu(e, t, n, r, i) {
    if (xt(n)) {
      var o = !0;
      Hi(t);
    } else o = !1;
    if (cr(t, i), t.stateNode === null) no(e, t), Su(t, n, r), Wl(t, n, r, i), r = !0;
    else if (e === null) {
      var l = t.stateNode, m = t.memoizedProps;
      l.props = m;
      var w = l.context, L = n.contextType;
      typeof L == "object" && L !== null ? L = Mt(L) : (L = xt(n) ? jn : ht.current, L = ir(t, L));
      var Y = n.getDerivedStateFromProps, Z = typeof Y == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      Z || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (m !== r || w !== L) && _u(t, l, r, L), _n = !1;
      var $ = t.memoizedState;
      l.state = $, Gi(t, r, l, i), w = t.memoizedState, m !== r || $ !== w || _t.current || _n ? (typeof Y == "function" && (Hl(t, n, Y, r), w = t.memoizedState), (m = _n || wu(t, n, m, r, $, w, L)) ? (Z || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), l.props = r, l.state = w, l.context = L, r = m) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      l = t.stateNode, Ya(e, t), m = t.memoizedProps, L = t.type === t.elementType ? m : Bt(t.type, m), l.props = L, Z = t.pendingProps, $ = l.context, w = n.contextType, typeof w == "object" && w !== null ? w = Mt(w) : (w = xt(n) ? jn : ht.current, w = ir(t, w));
      var fe = n.getDerivedStateFromProps;
      (Y = typeof fe == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (m !== Z || $ !== w) && _u(t, l, r, w), _n = !1, $ = t.memoizedState, l.state = $, Gi(t, r, l, i);
      var he = t.memoizedState;
      m !== Z || $ !== he || _t.current || _n ? (typeof fe == "function" && (Hl(t, n, fe, r), he = t.memoizedState), (L = _n || wu(t, n, L, r, $, he, w) || !1) ? (Y || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, he, w), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, he, w)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || m === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = he), l.props = r, l.state = he, l.context = w, r = L) : (typeof l.componentDidUpdate != "function" || m === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ql(e, t, n, r, o, i);
  }
  function ql(e, t, n, r, i, o) {
    Nu(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return i && Ia(t, n, !1), ln(e, t, o);
    r = t.stateNode, Cd.current = t;
    var m = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && l ? (t.child = ar(t, e.child, null, o), t.child = ar(t, null, m, o)) : vt(e, t, m, o), t.memoizedState = r.state, i && Ia(t, n, !0), t.child;
  }
  function Tu(e) {
    var t = e.stateNode;
    t.pendingContext ? ja(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ja(e, t.context, !1), zl(e, t.containerInfo);
  }
  function Mu(e, t, n, r, i) {
    return sr(), wl(i), t.flags |= 256, vt(e, t, n, r), t.child;
  }
  var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Vl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ju(e, t, n) {
    var r = t.pendingProps, i = Ze.current, o = !1, l = (t.flags & 128) !== 0, m;
    if ((m = l) || (m = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), m ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ve(Ze, i & 1), e === null)
      return vl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, l = { mode: "hidden", children: l }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = l) : o = mo(l, r, 0, null), e = Vn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Vl(n), t.memoizedState = Ul, e) : $l(t, l));
    if (i = e.memoizedState, i !== null && (m = i.dehydrated, m !== null)) return Dd(e, t, l, r, m, i, n);
    if (o) {
      o = r.fallback, l = t.mode, i = e.child, m = i.sibling;
      var w = { mode: "hidden", children: r.children };
      return !(l & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = Pn(i, w), r.subtreeFlags = i.subtreeFlags & 14680064), m !== null ? o = Pn(m, o) : (o = Vn(o, l, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, l = e.child.memoizedState, l = l === null ? Vl(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, o.memoizedState = l, o.childLanes = e.childLanes & ~n, t.memoizedState = Ul, r;
    }
    return o = e.child, e = o.sibling, r = Pn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function $l(e, t) {
    return t = mo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function to(e, t, n, r) {
    return r !== null && wl(r), ar(t, e.child, null, n), e = $l(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Dd(e, t, n, r, i, o, l) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Al(Error(s(422))), to(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = mo({ mode: "visible", children: r.children }, i, 0, null), o = Vn(o, i, l, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ar(t, e.child, null, l), t.child.memoizedState = Vl(l), t.memoizedState = Ul, o);
    if (!(t.mode & 1)) return to(e, t, l, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var m = r.dgst;
      return r = m, o = Error(s(419)), r = Al(o, r, void 0), to(e, t, l, r);
    }
    if (m = (l & e.childLanes) !== 0, Et || m) {
      if (r = ut, r !== null) {
        switch (l & -l) {
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
        i = i & (r.suspendedLanes | l) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, rn(e, i), Vt(r, e, i, -1));
      }
      return as(), r = Al(Error(s(421))), to(e, t, l, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qd.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Dt = yn(i.nextSibling), Ct = t, Ke = !0, Ft = null, e !== null && (Lt[Tt++] = tn, Lt[Tt++] = nn, Lt[Tt++] = bn, tn = e.id, nn = e.overflow, bn = t), t = $l(t, r.children), t.flags |= 4096, t);
  }
  function bu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), El(e.return, t, n);
  }
  function Gl(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
  }
  function Iu(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (vt(e, t, r.children, n), r = Ze.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
        else if (e.tag === 19) bu(e, n, t);
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
    if (Ve(Ze, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Yi(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Gl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Yi(e) === null) {
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
  function no(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Pn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Nd(e, t, n) {
    switch (t.tag) {
      case 3:
        Tu(t), sr();
        break;
      case 5:
        Ka(t);
        break;
      case 1:
        xt(t.type) && Hi(t);
        break;
      case 4:
        zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ve(Ui, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ve(Ze, Ze.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ju(e, t, n) : (Ve(Ze, Ze.current & 1), e = ln(e, t, n), e !== null ? e.sibling : null);
        Ve(Ze, Ze.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Iu(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ve(Ze, Ze.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Du(e, t, n);
    }
    return ln(e, t, n);
  }
  var Hu, Yl, Wu, Au;
  Hu = function(e, t) {
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
      e = t.stateNode, Wn(Xt.current);
      var o = null;
      switch (n) {
        case "input":
          i = Ue(e, i), r = Ue(e, r), o = [];
          break;
        case "select":
          i = ee({}, i, { value: void 0 }), r = ee({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          i = Ee(e, i), r = Ee(e, r), o = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ji);
      }
      ft(n, r);
      var l;
      n = null;
      for (L in i) if (!r.hasOwnProperty(L) && i.hasOwnProperty(L) && i[L] != null) if (L === "style") {
        var m = i[L];
        for (l in m) m.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
      } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (O.hasOwnProperty(L) ? o || (o = []) : (o = o || []).push(L, null));
      for (L in r) {
        var w = r[L];
        if (m = i != null ? i[L] : void 0, r.hasOwnProperty(L) && w !== m && (w != null || m != null)) if (L === "style") if (m) {
          for (l in m) !m.hasOwnProperty(l) || w && w.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
          for (l in w) w.hasOwnProperty(l) && m[l] !== w[l] && (n || (n = {}), n[l] = w[l]);
        } else n || (o || (o = []), o.push(
          L,
          n
        )), n = w;
        else L === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, m = m ? m.__html : void 0, w != null && m !== w && (o = o || []).push(L, w)) : L === "children" ? typeof w != "string" && typeof w != "number" || (o = o || []).push(L, "" + w) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (O.hasOwnProperty(L) ? (w != null && L === "onScroll" && Ge("scroll", e), o || m === w || (o = [])) : (o = o || []).push(L, w));
      }
      n && (o = o || []).push("style", n);
      var L = o;
      (t.updateQueue = L) && (t.flags |= 4);
    }
  }, Au = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Kr(e, t) {
    if (!Ke) switch (e.tailMode) {
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
  function gt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ld(e, t, n) {
    var r = t.pendingProps;
    switch (gl(t), t.tag) {
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
        return gt(t), null;
      case 1:
        return xt(t.type) && Ii(), gt(t), null;
      case 3:
        return r = t.stateNode, fr(), Ye(_t), Ye(ht), Cl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Bi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ft !== null && (os(Ft), Ft = null))), Yl(e, t), gt(t), null;
      case 5:
        Ol(t);
        var i = Wn($r.current);
        if (n = t.type, e !== null && t.stateNode != null) Wu(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return gt(t), null;
          }
          if (e = Wn(Xt.current), Bi(t)) {
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
                for (i = 0; i < Hr.length; i++) Ge(Hr[i], r);
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
                tt(r, o), Ge("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, Ge("invalid", r);
                break;
              case "textarea":
                Pe(r, o), Ge("invalid", r);
            }
            ft(n, o), i = null;
            for (var l in o) if (o.hasOwnProperty(l)) {
              var m = o[l];
              l === "children" ? typeof m == "string" ? r.textContent !== m && (o.suppressHydrationWarning !== !0 && Mi(r.textContent, m, e), i = ["children", m]) : typeof m == "number" && r.textContent !== "" + m && (o.suppressHydrationWarning !== !0 && Mi(
                r.textContent,
                m,
                e
              ), i = ["children", "" + m]) : O.hasOwnProperty(l) && m != null && l === "onScroll" && Ge("scroll", r);
            }
            switch (n) {
              case "input":
                Ce(r), R(r, o, !0);
                break;
              case "textarea":
                Ce(r), qe(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = ji);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            l = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Xe(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Yt] = t, e[Fr] = r, Hu(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (l = Ht(n, r), n) {
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
                  for (i = 0; i < Hr.length; i++) Ge(Hr[i], e);
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
                  tt(e, r), i = Ue(e, r), Ge("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = ee({}, r, { value: void 0 }), Ge("invalid", e);
                  break;
                case "textarea":
                  Pe(e, r), i = Ee(e, r), Ge("invalid", e);
                  break;
                default:
                  i = r;
              }
              ft(n, i), m = i;
              for (o in m) if (m.hasOwnProperty(o)) {
                var w = m[o];
                o === "style" ? je(e, w) : o === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && P(e, w)) : o === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && b(e, w) : typeof w == "number" && b(e, "" + w) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (O.hasOwnProperty(o) ? w != null && o === "onScroll" && Ge("scroll", e) : w != null && h(e, o, w, l));
              }
              switch (n) {
                case "input":
                  Ce(e), R(e, r, !1);
                  break;
                case "textarea":
                  Ce(e), qe(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + K(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? ge(e, !!r.multiple, o, !1) : r.defaultValue != null && ge(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ji);
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
        return gt(t), null;
      case 6:
        if (e && t.stateNode != null) Au(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = Wn($r.current), Wn(Xt.current), Bi(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (o = r.nodeValue !== n) && (e = Ct, e !== null)) switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r;
        }
        return gt(t), null;
      case 13:
        if (Ye(Ze), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ke && Dt !== null && t.mode & 1 && !(t.flags & 128)) qa(), sr(), t.flags |= 98560, o = !1;
          else if (o = Bi(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Yt] = t;
            } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            gt(t), o = !1;
          } else Ft !== null && (os(Ft), Ft = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ze.current & 1 ? lt === 0 && (lt = 3) : as())), t.updateQueue !== null && (t.flags |= 4), gt(t), null);
      case 4:
        return fr(), Yl(e, t), e === null && Wr(t.stateNode.containerInfo), gt(t), null;
      case 10:
        return xl(t.type._context), gt(t), null;
      case 17:
        return xt(t.type) && Ii(), gt(t), null;
      case 19:
        if (Ye(Ze), o = t.memoizedState, o === null) return gt(t), null;
        if (r = (t.flags & 128) !== 0, l = o.rendering, l === null) if (r) Kr(o, !1);
        else {
          if (lt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (l = Yi(e), l !== null) {
              for (t.flags |= 128, Kr(o, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, l = o.alternate, l === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = l.childLanes, o.lanes = l.lanes, o.child = l.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = l.memoizedProps, o.memoizedState = l.memoizedState, o.updateQueue = l.updateQueue, o.type = l.type, e = l.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ve(Ze, Ze.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && nt() > mr && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Yi(l), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kr(o, !0), o.tail === null && o.tailMode === "hidden" && !l.alternate && !Ke) return gt(t), null;
          } else 2 * nt() - o.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Kr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (l.sibling = t.child, t.child = l) : (n = o.last, n !== null ? n.sibling = l : t.child = l, o.last = l);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = nt(), t.sibling = null, n = Ze.current, Ve(Ze, r ? n & 1 | 2 : n & 1), t) : (gt(t), null);
      case 22:
      case 23:
        return ss(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Nt & 1073741824 && (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : gt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Td(e, t) {
    switch (gl(t), t.tag) {
      case 1:
        return xt(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fr(), Ye(_t), Ye(ht), Cl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ol(t), null;
      case 13:
        if (Ye(Ze), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          sr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ye(Ze), null;
      case 4:
        return fr(), null;
      case 10:
        return xl(t.type._context), null;
      case 22:
      case 23:
        return ss(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ro = !1, yt = !1, Md = typeof WeakSet == "function" ? WeakSet : Set, pe = null;
  function pr(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      et(e, t, r);
    }
    else n.current = null;
  }
  function Xl(e, t, n) {
    try {
      n();
    } catch (r) {
      et(e, t, r);
    }
  }
  var Fu = !1;
  function jd(e, t) {
    if (sl = Ei, e = wa(), Jo(e)) {
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
          var l = 0, m = -1, w = -1, L = 0, Y = 0, Z = e, $ = null;
          t: for (; ; ) {
            for (var fe; Z !== n || i !== 0 && Z.nodeType !== 3 || (m = l + i), Z !== o || r !== 0 && Z.nodeType !== 3 || (w = l + r), Z.nodeType === 3 && (l += Z.nodeValue.length), (fe = Z.firstChild) !== null; )
              $ = Z, Z = fe;
            for (; ; ) {
              if (Z === e) break t;
              if ($ === n && ++L === i && (m = l), $ === o && ++Y === r && (w = l), (fe = Z.nextSibling) !== null) break;
              Z = $, $ = Z.parentNode;
            }
            Z = fe;
          }
          n = m === -1 || w === -1 ? null : { start: m, end: w };
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
              var me = he.memoizedProps, rt = he.memoizedState, z = t.stateNode, _ = z.getSnapshotBeforeUpdate(t.elementType === t.type ? me : Bt(t.type, me), rt);
              z.__reactInternalSnapshotBeforeUpdate = _;
            }
            break;
          case 3:
            var D = t.stateNode.containerInfo;
            D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (ne) {
        et(t, t.return, ne);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, pe = e;
        break;
      }
      pe = t.return;
    }
    return he = Fu, Fu = !1, he;
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
  function io(e, t) {
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
  function Bu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Bu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Fr], delete t[dl], delete t[yd], delete t[vd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function qu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Uu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qu(e.return)) return null;
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
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ji));
    else if (r !== 4 && (e = e.child, e !== null)) for (Kl(e, t, n), e = e.sibling; e !== null; ) Kl(e, t, n), e = e.sibling;
  }
  function Zl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), e = e.sibling;
  }
  var dt = null, qt = !1;
  function En(e, t, n) {
    for (n = n.child; n !== null; ) Vu(e, t, n), n = n.sibling;
  }
  function Vu(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function") try {
      Gt.onCommitFiberUnmount(yi, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        yt || pr(n, t);
      case 6:
        var r = dt, i = qt;
        dt = null, En(e, t, n), dt = r, qt = i, dt !== null && (qt ? (e = dt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : dt.removeChild(n.stateNode));
        break;
      case 18:
        dt !== null && (qt ? (e = dt, n = n.stateNode, e.nodeType === 8 ? fl(e.parentNode, n) : e.nodeType === 1 && fl(e, n), Dr(e)) : fl(dt, n.stateNode));
        break;
      case 4:
        r = dt, i = qt, dt = n.stateNode.containerInfo, qt = !0, En(e, t, n), dt = r, qt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var o = i, l = o.destroy;
            o = o.tag, l !== void 0 && (o & 2 || o & 4) && Xl(n, t, l), i = i.next;
          } while (i !== r);
        }
        En(e, t, n);
        break;
      case 1:
        if (!yt && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (m) {
          et(n, t, m);
        }
        En(e, t, n);
        break;
      case 21:
        En(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (yt = (r = yt) || n.memoizedState !== null, En(e, t, n), yt = r) : En(e, t, n);
        break;
      default:
        En(e, t, n);
    }
  }
  function $u(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Md()), t.forEach(function(r) {
        var i = Ud.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function Ut(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e, l = t, m = l;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 5:
              dt = m.stateNode, qt = !1;
              break e;
            case 3:
              dt = m.stateNode.containerInfo, qt = !0;
              break e;
            case 4:
              dt = m.stateNode.containerInfo, qt = !0;
              break e;
          }
          m = m.return;
        }
        if (dt === null) throw Error(s(160));
        Vu(o, l, i), dt = null, qt = !1;
        var w = i.alternate;
        w !== null && (w.return = null), i.return = null;
      } catch (L) {
        et(i, t, L);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Gu(t, e), t = t.sibling;
  }
  function Gu(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ut(t, e), Kt(e), r & 4) {
          try {
            Zr(3, e, e.return), io(3, e);
          } catch (me) {
            et(e, e.return, me);
          }
          try {
            Zr(5, e, e.return);
          } catch (me) {
            et(e, e.return, me);
          }
        }
        break;
      case 1:
        Ut(t, e), Kt(e), r & 512 && n !== null && pr(n, n.return);
        break;
      case 5:
        if (Ut(t, e), Kt(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            b(i, "");
          } catch (me) {
            et(e, e.return, me);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var o = e.memoizedProps, l = n !== null ? n.memoizedProps : o, m = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            m === "input" && o.type === "radio" && o.name != null && S(i, o), Ht(m, l);
            var L = Ht(m, o);
            for (l = 0; l < w.length; l += 2) {
              var Y = w[l], Z = w[l + 1];
              Y === "style" ? je(i, Z) : Y === "dangerouslySetInnerHTML" ? P(i, Z) : Y === "children" ? b(i, Z) : h(i, Y, Z, L);
            }
            switch (m) {
              case "input":
                E(i, o);
                break;
              case "textarea":
                Ne(i, o);
                break;
              case "select":
                var $ = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var fe = o.value;
                fe != null ? ge(i, !!o.multiple, fe, !1) : $ !== !!o.multiple && (o.defaultValue != null ? ge(
                  i,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : ge(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Fr] = o;
          } catch (me) {
            et(e, e.return, me);
          }
        }
        break;
      case 6:
        if (Ut(t, e), Kt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          i = e.stateNode, o = e.memoizedProps;
          try {
            i.nodeValue = o;
          } catch (me) {
            et(e, e.return, me);
          }
        }
        break;
      case 3:
        if (Ut(t, e), Kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Dr(t.containerInfo);
        } catch (me) {
          et(e, e.return, me);
        }
        break;
      case 4:
        Ut(t, e), Kt(e);
        break;
      case 13:
        Ut(t, e), Kt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (ts = nt())), r & 4 && $u(e);
        break;
      case 22:
        if (Y = n !== null && n.memoizedState !== null, e.mode & 1 ? (yt = (L = yt) || Y, Ut(t, e), yt = L) : Ut(t, e), Kt(e), r & 8192) {
          if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !Y && e.mode & 1) for (pe = e, Y = e.child; Y !== null; ) {
            for (Z = pe = Y; pe !== null; ) {
              switch ($ = pe, fe = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, $, $.return);
                  break;
                case 1:
                  pr($, $.return);
                  var he = $.stateNode;
                  if (typeof he.componentWillUnmount == "function") {
                    r = $, n = $.return;
                    try {
                      t = r, he.props = t.memoizedProps, he.state = t.memoizedState, he.componentWillUnmount();
                    } catch (me) {
                      et(r, n, me);
                    }
                  }
                  break;
                case 5:
                  pr($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Qu(Z);
                    continue;
                  }
              }
              fe !== null ? (fe.return = $, pe = fe) : Qu(Z);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, Z = e; ; ) {
            if (Z.tag === 5) {
              if (Y === null) {
                Y = Z;
                try {
                  i = Z.stateNode, L ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (m = Z.stateNode, w = Z.memoizedProps.style, l = w != null && w.hasOwnProperty("display") ? w.display : null, m.style.display = Me("display", l));
                } catch (me) {
                  et(e, e.return, me);
                }
              }
            } else if (Z.tag === 6) {
              if (Y === null) try {
                Z.stateNode.nodeValue = L ? "" : Z.memoizedProps;
              } catch (me) {
                et(e, e.return, me);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === e) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === e) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === e) break e;
              Y === Z && (Y = null), Z = Z.return;
            }
            Y === Z && (Y = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        Ut(t, e), Kt(e), r & 4 && $u(e);
        break;
      case 21:
        break;
      default:
        Ut(
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
            if (qu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (b(i, ""), r.flags &= -33);
            var o = Uu(e);
            Zl(e, o, i);
            break;
          case 3:
          case 4:
            var l = r.stateNode.containerInfo, m = Uu(e);
            Kl(e, m, l);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        et(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bd(e, t, n) {
    pe = e, Yu(e);
  }
  function Yu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; pe !== null; ) {
      var i = pe, o = i.child;
      if (i.tag === 22 && r) {
        var l = i.memoizedState !== null || ro;
        if (!l) {
          var m = i.alternate, w = m !== null && m.memoizedState !== null || yt;
          m = ro;
          var L = yt;
          if (ro = l, (yt = w) && !L) for (pe = i; pe !== null; ) l = pe, w = l.child, l.tag === 22 && l.memoizedState !== null ? Ku(i) : w !== null ? (w.return = l, pe = w) : Ku(i);
          for (; o !== null; ) pe = o, Yu(o), o = o.sibling;
          pe = i, ro = m, yt = L;
        }
        Xu(e);
      } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, pe = o) : Xu(e);
    }
  }
  function Xu(e) {
    for (; pe !== null; ) {
      var t = pe;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              yt || io(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !yt) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : Bt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Qa(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Qa(t, l, n);
              }
              break;
            case 5:
              var m = t.stateNode;
              if (n === null && t.flags & 4) {
                n = m;
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
                var L = t.alternate;
                if (L !== null) {
                  var Y = L.memoizedState;
                  if (Y !== null) {
                    var Z = Y.dehydrated;
                    Z !== null && Dr(Z);
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
              throw Error(s(163));
          }
          yt || t.flags & 512 && Ql(t);
        } catch ($) {
          et(t, t.return, $);
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
  function Qu(e) {
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
  function Ku(e) {
    for (; pe !== null; ) {
      var t = pe;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              io(4, t);
            } catch (w) {
              et(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                et(t, i, w);
              }
            }
            var o = t.return;
            try {
              Ql(t);
            } catch (w) {
              et(t, o, w);
            }
            break;
          case 5:
            var l = t.return;
            try {
              Ql(t);
            } catch (w) {
              et(t, l, w);
            }
        }
      } catch (w) {
        et(t, t.return, w);
      }
      if (t === e) {
        pe = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        m.return = t.return, pe = m;
        break;
      }
      pe = t.return;
    }
  }
  var Id = Math.ceil, oo = f.ReactCurrentDispatcher, Jl = f.ReactCurrentOwner, bt = f.ReactCurrentBatchConfig, He = 0, ut = null, it = null, pt = 0, Nt = 0, hr = vn(0), lt = 0, Jr = null, Fn = 0, lo = 0, es = 0, ei = null, kt = null, ts = 0, mr = 1 / 0, sn = null, so = !1, ns = null, kn = null, ao = !1, Rn = null, uo = 0, ti = 0, rs = null, co = -1, fo = 0;
  function wt() {
    return He & 6 ? nt() : co !== -1 ? co : co = nt();
  }
  function zn(e) {
    return e.mode & 1 ? He & 2 && pt !== 0 ? pt & -pt : Sd.transition !== null ? (fo === 0 && (fo = Us()), fo) : (e = Be, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Js(e.type)), e) : 1;
  }
  function Vt(e, t, n, r) {
    if (50 < ti) throw ti = 0, rs = null, Error(s(185));
    Rr(e, n, r), (!(He & 2) || e !== ut) && (e === ut && (!(He & 2) && (lo |= n), lt === 4 && On(e, pt)), Rt(e, r), n === 1 && He === 0 && !(t.mode & 1) && (mr = nt() + 500, Wi && Sn()));
  }
  function Rt(e, t) {
    var n = e.callbackNode;
    Sf(e, t);
    var r = Si(e, e === ut ? pt : 0);
    if (r === 0) n !== null && Fs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Fs(n), t === 1) e.tag === 0 ? wd(Ju.bind(null, e)) : Ha(Ju.bind(null, e)), md(function() {
        !(He & 6) && Sn();
      }), n = null;
      else {
        switch (Vs(r)) {
          case 1:
            n = bo;
            break;
          case 4:
            n = Bs;
            break;
          case 16:
            n = gi;
            break;
          case 536870912:
            n = qs;
            break;
          default:
            n = gi;
        }
        n = sc(n, Zu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Zu(e, t) {
    if (co = -1, fo = 0, He & 6) throw Error(s(327));
    var n = e.callbackNode;
    if (gr() && e.callbackNode !== n) return null;
    var r = Si(e, e === ut ? pt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = po(e, r);
    else {
      t = r;
      var i = He;
      He |= 2;
      var o = tc();
      (ut !== e || pt !== t) && (sn = null, mr = nt() + 500, qn(e, t));
      do
        try {
          Ad();
          break;
        } catch (m) {
          ec(e, m);
        }
      while (!0);
      _l(), oo.current = o, He = i, it !== null ? t = 0 : (ut = null, pt = 0, t = lt);
    }
    if (t !== 0) {
      if (t === 2 && (i = Io(e), i !== 0 && (r = i, t = is(e, i))), t === 1) throw n = Jr, qn(e, 0), On(e, r), Rt(e, nt()), n;
      if (t === 6) On(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Hd(i) && (t = po(e, r), t === 2 && (o = Io(e), o !== 0 && (r = o, t = is(e, o))), t === 1)) throw n = Jr, qn(e, 0), On(e, r), Rt(e, nt()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Un(e, kt, sn);
            break;
          case 3:
            if (On(e, r), (r & 130023424) === r && (t = ts + 500 - nt(), 10 < t)) {
              if (Si(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                wt(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = cl(Un.bind(null, e, kt, sn), t);
              break;
            }
            Un(e, kt, sn);
            break;
          case 4:
            if (On(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var l = 31 - Wt(r);
              o = 1 << l, l = t[l], l > i && (i = l), r &= ~o;
            }
            if (r = i, r = nt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Id(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = cl(Un.bind(null, e, kt, sn), r);
              break;
            }
            Un(e, kt, sn);
            break;
          case 5:
            Un(e, kt, sn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Rt(e, nt()), e.callbackNode === n ? Zu.bind(null, e) : null;
  }
  function is(e, t) {
    var n = ei;
    return e.current.memoizedState.isDehydrated && (qn(e, t).flags |= 256), e = po(e, t), e !== 2 && (t = kt, kt = n, t !== null && os(t)), e;
  }
  function os(e) {
    kt === null ? kt = e : kt.push.apply(kt, e);
  }
  function Hd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], o = i.getSnapshot;
          i = i.value;
          try {
            if (!At(o(), i)) return !1;
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
    for (t &= ~es, t &= ~lo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Wt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ju(e) {
    if (He & 6) throw Error(s(327));
    gr();
    var t = Si(e, 0);
    if (!(t & 1)) return Rt(e, nt()), null;
    var n = po(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Io(e);
      r !== 0 && (t = r, n = is(e, r));
    }
    if (n === 1) throw n = Jr, qn(e, 0), On(e, t), Rt(e, nt()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Un(e, kt, sn), Rt(e, nt()), null;
  }
  function ls(e, t) {
    var n = He;
    He |= 1;
    try {
      return e(t);
    } finally {
      He = n, He === 0 && (mr = nt() + 500, Wi && Sn());
    }
  }
  function Bn(e) {
    Rn !== null && Rn.tag === 0 && !(He & 6) && gr();
    var t = He;
    He |= 1;
    var n = bt.transition, r = Be;
    try {
      if (bt.transition = null, Be = 1, e) return e();
    } finally {
      Be = r, bt.transition = n, He = t, !(He & 6) && Sn();
    }
  }
  function ss() {
    Nt = hr.current, Ye(hr);
  }
  function qn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, hd(n)), it !== null) for (n = it.return; n !== null; ) {
      var r = n;
      switch (gl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ii();
          break;
        case 3:
          fr(), Ye(_t), Ye(ht), Cl();
          break;
        case 5:
          Ol(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          Ye(Ze);
          break;
        case 19:
          Ye(Ze);
          break;
        case 10:
          xl(r.type._context);
          break;
        case 22:
        case 23:
          ss();
      }
      n = n.return;
    }
    if (ut = e, it = e = Pn(e.current, null), pt = Nt = t, lt = 0, Jr = null, es = lo = Fn = 0, kt = ei = null, Hn !== null) {
      for (t = 0; t < Hn.length; t++) if (n = Hn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, o = n.pending;
        if (o !== null) {
          var l = o.next;
          o.next = i, r.next = l;
        }
        n.pending = r;
      }
      Hn = null;
    }
    return e;
  }
  function ec(e, t) {
    do {
      var n = it;
      try {
        if (_l(), Xi.current = Ji, Qi) {
          for (var r = Je.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Qi = !1;
        }
        if (An = 0, at = ot = Je = null, Gr = !1, Yr = 0, Jl.current = null, n === null || n.return === null) {
          lt = 1, Jr = t, it = null;
          break;
        }
        e: {
          var o = e, l = n.return, m = n, w = t;
          if (t = pt, m.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var L = w, Y = m, Z = Y.tag;
            if (!(Y.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var $ = Y.alternate;
              $ ? (Y.updateQueue = $.updateQueue, Y.memoizedState = $.memoizedState, Y.lanes = $.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var fe = Ru(l);
            if (fe !== null) {
              fe.flags &= -257, zu(fe, l, m, o, t), fe.mode & 1 && ku(o, L, t), t = fe, w = L;
              var he = t.updateQueue;
              if (he === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(w), t.updateQueue = me;
              } else he.add(w);
              break e;
            } else {
              if (!(t & 1)) {
                ku(o, L, t), as();
                break e;
              }
              w = Error(s(426));
            }
          } else if (Ke && m.mode & 1) {
            var rt = Ru(l);
            if (rt !== null) {
              !(rt.flags & 65536) && (rt.flags |= 256), zu(rt, l, m, o, t), wl(dr(w, m));
              break e;
            }
          }
          o = w = dr(w, m), lt !== 4 && (lt = 2), ei === null ? ei = [o] : ei.push(o), o = l;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var z = xu(o, w, t);
                Xa(o, z);
                break e;
              case 1:
                m = w;
                var _ = o.type, D = o.stateNode;
                if (!(o.flags & 128) && (typeof _.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (kn === null || !kn.has(D)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var ne = Eu(o, m, t);
                  Xa(o, ne);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        rc(n);
      } catch (ve) {
        t = ve, it === n && n !== null && (it = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tc() {
    var e = oo.current;
    return oo.current = Ji, e === null ? Ji : e;
  }
  function as() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), ut === null || !(Fn & 268435455) && !(lo & 268435455) || On(ut, pt);
  }
  function po(e, t) {
    var n = He;
    He |= 2;
    var r = tc();
    (ut !== e || pt !== t) && (sn = null, qn(e, t));
    do
      try {
        Wd();
        break;
      } catch (i) {
        ec(e, i);
      }
    while (!0);
    if (_l(), He = n, oo.current = r, it !== null) throw Error(s(261));
    return ut = null, pt = 0, lt;
  }
  function Wd() {
    for (; it !== null; ) nc(it);
  }
  function Ad() {
    for (; it !== null && !ff(); ) nc(it);
  }
  function nc(e) {
    var t = lc(e.alternate, e, Nt);
    e.memoizedProps = e.pendingProps, t === null ? rc(e) : it = t, Jl.current = null;
  }
  function rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Td(n, t), n !== null) {
          n.flags &= 32767, it = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          lt = 6, it = null;
          return;
        }
      } else if (n = Ld(n, t, Nt), n !== null) {
        it = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        it = t;
        return;
      }
      it = t = e;
    } while (t !== null);
    lt === 0 && (lt = 5);
  }
  function Un(e, t, n) {
    var r = Be, i = bt.transition;
    try {
      bt.transition = null, Be = 1, Fd(e, t, n, r);
    } finally {
      bt.transition = i, Be = r;
    }
    return null;
  }
  function Fd(e, t, n, r) {
    do
      gr();
    while (Rn !== null);
    if (He & 6) throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_f(e, o), e === ut && (it = ut = null, pt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ao || (ao = !0, sc(gi, function() {
      return gr(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = bt.transition, bt.transition = null;
      var l = Be;
      Be = 1;
      var m = He;
      He |= 4, Jl.current = null, jd(e, n), Gu(n, e), sd(al), Ei = !!sl, al = sl = null, e.current = n, bd(n), df(), He = m, Be = l, bt.transition = o;
    } else e.current = n;
    if (ao && (ao = !1, Rn = e, uo = i), o = e.pendingLanes, o === 0 && (kn = null), mf(n.stateNode), Rt(e, nt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (so) throw so = !1, e = ns, ns = null, e;
    return uo & 1 && e.tag !== 0 && gr(), o = e.pendingLanes, o & 1 ? e === rs ? ti++ : (ti = 0, rs = e) : ti = 0, Sn(), null;
  }
  function gr() {
    if (Rn !== null) {
      var e = Vs(uo), t = bt.transition, n = Be;
      try {
        if (bt.transition = null, Be = 16 > e ? 16 : e, Rn === null) var r = !1;
        else {
          if (e = Rn, Rn = null, uo = 0, He & 6) throw Error(s(331));
          var i = He;
          for (He |= 4, pe = e.current; pe !== null; ) {
            var o = pe, l = o.child;
            if (pe.flags & 16) {
              var m = o.deletions;
              if (m !== null) {
                for (var w = 0; w < m.length; w++) {
                  var L = m[w];
                  for (pe = L; pe !== null; ) {
                    var Y = pe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zr(8, Y, o);
                    }
                    var Z = Y.child;
                    if (Z !== null) Z.return = Y, pe = Z;
                    else for (; pe !== null; ) {
                      Y = pe;
                      var $ = Y.sibling, fe = Y.return;
                      if (Bu(Y), Y === L) {
                        pe = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = fe, pe = $;
                        break;
                      }
                      pe = fe;
                    }
                  }
                }
                var he = o.alternate;
                if (he !== null) {
                  var me = he.child;
                  if (me !== null) {
                    he.child = null;
                    do {
                      var rt = me.sibling;
                      me.sibling = null, me = rt;
                    } while (me !== null);
                  }
                }
                pe = o;
              }
            }
            if (o.subtreeFlags & 2064 && l !== null) l.return = o, pe = l;
            else e: for (; pe !== null; ) {
              if (o = pe, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Zr(9, o, o.return);
              }
              var z = o.sibling;
              if (z !== null) {
                z.return = o.return, pe = z;
                break e;
              }
              pe = o.return;
            }
          }
          var _ = e.current;
          for (pe = _; pe !== null; ) {
            l = pe;
            var D = l.child;
            if (l.subtreeFlags & 2064 && D !== null) D.return = l, pe = D;
            else e: for (l = _; pe !== null; ) {
              if (m = pe, m.flags & 2048) try {
                switch (m.tag) {
                  case 0:
                  case 11:
                  case 15:
                    io(9, m);
                }
              } catch (ve) {
                et(m, m.return, ve);
              }
              if (m === l) {
                pe = null;
                break e;
              }
              var ne = m.sibling;
              if (ne !== null) {
                ne.return = m.return, pe = ne;
                break e;
              }
              pe = m.return;
            }
          }
          if (He = i, Sn(), Gt && typeof Gt.onPostCommitFiberRoot == "function") try {
            Gt.onPostCommitFiberRoot(yi, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Be = n, bt.transition = t;
      }
    }
    return !1;
  }
  function ic(e, t, n) {
    t = dr(n, t), t = xu(e, t, 1), e = xn(e, t, 1), t = wt(), e !== null && (Rr(e, 1, t), Rt(e, t));
  }
  function et(e, t, n) {
    if (e.tag === 3) ic(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kn === null || !kn.has(r))) {
          e = dr(n, e), e = Eu(t, e, 1), t = xn(t, e, 1), e = wt(), t !== null && (Rr(t, 1, e), Rt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Bd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = wt(), e.pingedLanes |= e.suspendedLanes & n, ut === e && (pt & n) === n && (lt === 4 || lt === 3 && (pt & 130023424) === pt && 500 > nt() - ts ? qn(e, 0) : es |= n), Rt(e, t);
  }
  function oc(e, t) {
    t === 0 && (e.mode & 1 ? (t = wi, wi <<= 1, !(wi & 130023424) && (wi = 4194304)) : t = 1);
    var n = wt();
    e = rn(e, t), e !== null && (Rr(e, t, n), Rt(e, n));
  }
  function qd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), oc(e, n);
  }
  function Ud(e, t) {
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
        throw Error(s(314));
    }
    r !== null && r.delete(t), oc(e, n);
  }
  var lc;
  lc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || _t.current) Et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Et = !1, Nd(e, t, n);
      Et = !!(e.flags & 131072);
    }
    else Et = !1, Ke && t.flags & 1048576 && Wa(t, Fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        no(e, t), e = t.pendingProps;
        var i = ir(t, ht.current);
        cr(t, n), i = Ll(null, t, r, e, i, n);
        var o = Tl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (o = !0, Hi(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Rl(t), i.updater = eo, t.stateNode = i, i._reactInternals = t, Wl(t, r, e, n), t = ql(null, t, r, !0, o, n)) : (t.tag = 0, Ke && o && ml(t), vt(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (no(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = $d(r), e = Bt(r, e), i) {
            case 0:
              t = Bl(null, t, r, e, n);
              break e;
            case 1:
              t = Lu(null, t, r, e, n);
              break e;
            case 11:
              t = Ou(null, t, r, e, n);
              break e;
            case 14:
              t = Pu(null, t, r, Bt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Bl(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Lu(e, t, r, i, n);
      case 3:
        e: {
          if (Tu(t), e === null) throw Error(s(387));
          r = t.pendingProps, o = t.memoizedState, i = o.element, Ya(e, t), Gi(t, r, null, n);
          var l = t.memoizedState;
          if (r = l.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            i = dr(Error(s(423)), t), t = Mu(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = dr(Error(s(424)), t), t = Mu(e, t, r, n, i);
            break e;
          } else for (Dt = yn(t.stateNode.containerInfo.firstChild), Ct = t, Ke = !0, Ft = null, n = $a(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (sr(), r === i) {
              t = ln(e, t, n);
              break e;
            }
            vt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ka(t), e === null && vl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, l = i.children, ul(r, i) ? l = null : o !== null && ul(r, o) && (t.flags |= 32), Nu(e, t), vt(e, t, l, n), t.child;
      case 6:
        return e === null && vl(t), null;
      case 13:
        return ju(e, t, n);
      case 4:
        return zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : vt(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), Ou(e, t, r, i, n);
      case 7:
        return vt(e, t, t.pendingProps, n), t.child;
      case 8:
        return vt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return vt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, l = i.value, Ve(Ui, r._currentValue), r._currentValue = l, o !== null) if (At(o.value, l)) {
            if (o.children === i.children && !_t.current) {
              t = ln(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var m = o.dependencies;
            if (m !== null) {
              l = o.child;
              for (var w = m.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (o.tag === 1) {
                    w = on(-1, n & -n), w.tag = 2;
                    var L = o.updateQueue;
                    if (L !== null) {
                      L = L.shared;
                      var Y = L.pending;
                      Y === null ? w.next = w : (w.next = Y.next, Y.next = w), L.pending = w;
                    }
                  }
                  o.lanes |= n, w = o.alternate, w !== null && (w.lanes |= n), El(
                    o.return,
                    n,
                    t
                  ), m.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (l = o.return, l === null) throw Error(s(341));
              l.lanes |= n, m = l.alternate, m !== null && (m.lanes |= n), El(l, n, t), l = o.sibling;
            } else l = o.child;
            if (l !== null) l.return = o;
            else for (l = o; l !== null; ) {
              if (l === t) {
                l = null;
                break;
              }
              if (o = l.sibling, o !== null) {
                o.return = l.return, l = o;
                break;
              }
              l = l.return;
            }
            o = l;
          }
          vt(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, cr(t, n), i = Mt(i), r = r(i), t.flags |= 1, vt(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = Bt(r, t.pendingProps), i = Bt(r.type, i), Pu(e, t, r, i, n);
      case 15:
        return Cu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Bt(r, i), no(e, t), t.tag = 1, xt(r) ? (e = !0, Hi(t)) : e = !1, cr(t, n), Su(t, r, i), Wl(t, r, i, n), ql(null, t, r, !0, e, n);
      case 19:
        return Iu(e, t, n);
      case 22:
        return Du(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function sc(e, t) {
    return As(e, t);
  }
  function Vd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function It(e, t, n, r) {
    return new Vd(e, t, n, r);
  }
  function us(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $d(e) {
    if (typeof e == "function") return us(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === I) return 11;
      if (e === ae) return 14;
    }
    return 2;
  }
  function Pn(e, t) {
    var n = e.alternate;
    return n === null ? (n = It(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ho(e, t, n, r, i, o) {
    var l = 2;
    if (r = e, typeof e == "function") us(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else e: switch (e) {
      case k:
        return Vn(n.children, i, o, t);
      case j:
        l = 8, i |= 8;
        break;
      case B:
        return e = It(12, n, t, i | 2), e.elementType = B, e.lanes = o, e;
      case U:
        return e = It(13, n, t, i), e.elementType = U, e.lanes = o, e;
      case re:
        return e = It(19, n, t, i), e.elementType = re, e.lanes = o, e;
      case ce:
        return mo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case te:
            l = 10;
            break e;
          case le:
            l = 9;
            break e;
          case I:
            l = 11;
            break e;
          case ae:
            l = 14;
            break e;
          case de:
            l = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = It(l, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Vn(e, t, n, r) {
    return e = It(7, e, r, t), e.lanes = n, e;
  }
  function mo(e, t, n, r) {
    return e = It(22, e, r, t), e.elementType = ce, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function cs(e, t, n) {
    return e = It(6, e, null, t), e.lanes = n, e;
  }
  function fs(e, t, n) {
    return t = It(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Gd(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ho(0), this.expirationTimes = Ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ho(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function ds(e, t, n, r, i, o, l, m, w) {
    return e = new Gd(e, t, n, m, w), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = It(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(o), e;
  }
  function Yd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: y, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ac(e) {
    if (!e) return wn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (xt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (xt(n)) return ba(e, n, t);
    }
    return t;
  }
  function uc(e, t, n, r, i, o, l, m, w) {
    return e = ds(n, r, !0, e, i, o, l, m, w), e.context = ac(null), n = e.current, r = wt(), i = zn(n), o = on(r, i), o.callback = t ?? null, xn(n, o, i), e.current.lanes = i, Rr(e, i, r), Rt(e, r), e;
  }
  function go(e, t, n, r) {
    var i = t.current, o = wt(), l = zn(i);
    return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = on(o, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xn(i, t, l), e !== null && (Vt(e, i, l, o), $i(e, i, l)), l;
  }
  function yo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ps(e, t) {
    cc(e, t), (e = e.alternate) && cc(e, t);
  }
  function Xd() {
    return null;
  }
  var fc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function hs(e) {
    this._internalRoot = e;
  }
  vo.prototype.render = hs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    go(e, t, null, null);
  }, vo.prototype.unmount = hs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Bn(function() {
        go(null, e, null, null);
      }), t[Jt] = null;
    }
  };
  function vo(e) {
    this._internalRoot = e;
  }
  vo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ys();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < hn.length && t !== 0 && t < hn[n].priority; n++) ;
      hn.splice(n, 0, e), n === 0 && Ks(e);
    }
  };
  function ms(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function wo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function dc() {
  }
  function Qd(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var L = yo(l);
          o.call(L);
        };
      }
      var l = uc(t, r, e, 0, null, !1, !1, "", dc);
      return e._reactRootContainer = l, e[Jt] = l.current, Wr(e.nodeType === 8 ? e.parentNode : e), Bn(), l;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var m = r;
      r = function() {
        var L = yo(w);
        m.call(L);
      };
    }
    var w = ds(e, 0, !1, null, null, !1, !1, "", dc);
    return e._reactRootContainer = w, e[Jt] = w.current, Wr(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
      go(t, w, n, r);
    }), w;
  }
  function So(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
      var l = o;
      if (typeof i == "function") {
        var m = i;
        i = function() {
          var w = yo(l);
          m.call(w);
        };
      }
      go(t, l, e, i);
    } else l = Qd(n, t, e, i, r);
    return yo(l);
  }
  $s = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kr(t.pendingLanes);
          n !== 0 && (Wo(t, n | 1), Rt(t, nt()), !(He & 6) && (mr = nt() + 500, Sn()));
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
  }, Ao = function(e) {
    if (e.tag === 13) {
      var t = rn(e, 134217728);
      if (t !== null) {
        var n = wt();
        Vt(t, e, 134217728, n);
      }
      ps(e, 134217728);
    }
  }, Gs = function(e) {
    if (e.tag === 13) {
      var t = zn(e), n = rn(e, t);
      if (n !== null) {
        var r = wt();
        Vt(n, e, t, r);
      }
      ps(e, t);
    }
  }, Ys = function() {
    return Be;
  }, Xs = function(e, t) {
    var n = Be;
    try {
      return Be = e, t();
    } finally {
      Be = n;
    }
  }, Gn = function(e, t, n) {
    switch (t) {
      case "input":
        if (E(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = bi(r);
              if (!i) throw Error(s(90));
              Te(r), E(r, i);
            }
          }
        }
        break;
      case "textarea":
        Ne(e, n);
        break;
      case "select":
        t = n.value, t != null && ge(e, !!n.multiple, t, !1);
    }
  }, pi = ls, Ms = Bn;
  var Kd = { usingClientEntryPoint: !1, Events: [Br, nr, bi, Sr, Yn, ls] }, ni = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Zd = { bundleType: ni.bundleType, version: ni.version, rendererPackageName: ni.rendererPackageName, rendererConfig: ni.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: f.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Hs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ni.findFiberByHostInstance || Xd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber) try {
      yi = _o.inject(Zd), Gt = _o;
    } catch {
    }
  }
  return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kd, zt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ms(t)) throw Error(s(200));
    return Yd(e, t, null, n);
  }, zt.createRoot = function(e, t) {
    if (!ms(e)) throw Error(s(299));
    var n = !1, r = "", i = fc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = ds(e, 1, !1, null, null, n, !1, r, i), e[Jt] = t.current, Wr(e.nodeType === 8 ? e.parentNode : e), new hs(t);
  }, zt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Hs(t), e = e === null ? null : e.stateNode, e;
  }, zt.flushSync = function(e) {
    return Bn(e);
  }, zt.hydrate = function(e, t, n) {
    if (!wo(t)) throw Error(s(200));
    return So(null, e, t, !0, n);
  }, zt.hydrateRoot = function(e, t, n) {
    if (!ms(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", l = fc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = uc(t, null, e, 1, n ?? null, i, !1, o, l), e[Jt] = t.current, Wr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new vo(t);
  }, zt.render = function(e, t, n) {
    if (!wo(t)) throw Error(s(200));
    return So(null, e, t, !1, n);
  }, zt.unmountComponentAtNode = function(e) {
    if (!wo(e)) throw Error(s(40));
    return e._reactRootContainer ? (Bn(function() {
      So(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Jt] = null;
      });
    }), !0) : !1;
  }, zt.unstable_batchedUpdates = ls, zt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wo(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return So(e, t, n, !1, r);
  }, zt.version = "18.3.1-next-f1338f8080-20240426", zt;
}
var Sc;
function Oo() {
  if (Sc) return vs.exports;
  Sc = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), vs.exports = lp(), vs.exports;
}
var _c;
function sp() {
  if (_c) return xo;
  _c = 1;
  var u = Oo();
  return xo.createRoot = u.createRoot, xo.hydrateRoot = u.hydrateRoot, xo;
}
var ap = sp();
const up = '.react-grid-layout{position:relative;transition:height .2s ease}.react-grid-item{transition:all .2s ease;transition-property:left,top,width,height}.react-grid-item img{pointer-events:none;-webkit-user-select:none;user-select:none}.react-grid-item.cssTransforms{transition-property:transform,width,height}.react-grid-item.resizing{transition:none;z-index:1;will-change:width,height}.react-grid-item.react-draggable-dragging{transition:none;z-index:3;will-change:transform}.react-grid-item.dropping{visibility:hidden}.react-grid-item.react-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.react-grid-item.react-grid-placeholder.placeholder-resizing{transition:none}.react-grid-item>.react-resizable-handle{position:absolute;width:20px;height:20px}.react-grid-item>.react-resizable-handle:after{content:"";position:absolute;right:3px;bottom:3px;width:5px;height:5px;border-right:2px solid rgba(0,0,0,.4);border-bottom:2px solid rgba(0,0,0,.4)}.react-resizable-hide>.react-resizable-handle{display:none}.react-grid-item>.react-resizable-handle.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-w,.react-grid-item>.react-resizable-handle.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-n,.react-grid-item>.react-resizable-handle.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-grid-item>.react-resizable-handle.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-grid-item>.react-resizable-handle.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}', cp = ".react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+);background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}", fp = "#widget-grid.grid{display:block!important;grid-template-columns:none!important;grid-auto-flow:initial!important}.argus-dashboard{min-height:100%}.argus-dashboard__toolbar{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;gap:8px;padding:12px 16px}.argus-dashboard__toolbar button,.argus-widget__drag-handle,.argus-widget__options summary,.argus-widget__menu button{border:1px solid rgba(255,255,255,.12);border-radius:12px;color:#f7f9ff;background:#ffffff14;padding:9px 13px}.argus-dashboard__toolbar button:focus-visible,.argus-widget__drag-handle:focus-visible,.argus-widget__options summary:focus-visible,.argus-widget__menu button:focus-visible{outline:3px solid #76b7ff;outline-offset:2px}.argus-dashboard__feedback{min-height:20px;padding:0 18px;color:#b9d9ff;text-align:right;font-size:12px}.argus-dashboard__visibility{display:flex;flex-wrap:wrap;gap:6px}.argus-dashboard-grid .react-grid-item{transition:transform .18s cubic-bezier(.2,.8,.2,1),width .18s cubic-bezier(.2,.8,.2,1),height .18s cubic-bezier(.2,.8,.2,1)}.argus-dashboard-grid .react-grid-item.react-draggable-dragging{z-index:100;opacity:.98;transition:none}.argus-dashboard-grid .react-grid-placeholder{border:2px solid rgb(94 168 255 / 78%);border-radius:24px;background:linear-gradient(135deg,#5ea8ff33,#8468ff1f);box-shadow:inset 0 0 0 1px #ffffff14,0 12px 35px #0000002e}.argus-widget{position:relative;width:100%;height:100%;overflow:hidden;border:1px solid rgb(255 255 255 / 8%);border-radius:24px;background:linear-gradient(145deg,#2b3241e0,#181e2ad1);box-shadow:0 14px 34px #0000002e,inset 0 1px #ffffff0f;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}.argus-widget__edit-header{display:none;align-items:center;gap:10px;padding:8px 12px}.argus-dashboard--editing .argus-widget__edit-header{display:flex}.argus-widget__edit-header>strong{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.argus-widget__drag-handle{width:44px;height:40px;cursor:grab;touch-action:none}.argus-widget__options{position:relative}.argus-widget__options summary{display:grid;width:38px;height:38px;box-sizing:border-box;place-items:center;cursor:pointer;list-style:none}.argus-widget__options summary::-webkit-details-marker{display:none}.argus-widget__menu{position:absolute;right:0;top:44px;z-index:140;display:grid;min-width:210px;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:#0f1623f5;box-shadow:0 18px 46px #00000061}.argus-widget__menu>div{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.argus-widget__menu button{padding:7px}.argus-widget__menu button.active{background:#3478d4}.argus-widget__content{height:100%;overflow:auto}.argus-dashboard--editing .argus-widget__content{height:calc(100% - 56px)}.argus-widget__content>.panel{display:block!important;width:100%!important;height:100%!important;box-sizing:border-box!important;grid-column:auto!important;grid-row:auto!important}.argus-dashboard-grid .react-resizable-handle{display:none!important;width:34px;height:34px;right:8px;bottom:8px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#131925db}.argus-dashboard--editing .react-resizable-handle{display:block!important}.argus-dashboard--editing .react-resizable-handle:after{width:10px;height:10px;right:9px;bottom:9px;border-color:#9bc7ff}.alarm-configuration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:16px}@media (max-width:760px){.alarm-configuration-grid{grid-template-columns:minmax(0,1fr)}.argus-dashboard__toolbar{justify-content:stretch}.argus-dashboard__toolbar>button{flex:1}.argus-widget__menu{position:fixed;right:16px;left:16px;top:auto;bottom:16px}}@media (prefers-reduced-motion:reduce){.argus-dashboard-grid .react-grid-item,.argus-dashboard-grid .react-resizable-handle{transition:none!important}}";
var St = Ot(), _s = { exports: {} }, ii = {}, di = { exports: {} }, dp = di.exports, xc;
function Ns() {
  return xc || (xc = 1, function(u, c) {
    (function(s, p) {
      p(c);
    })(dp, function(s) {
      function p(K) {
        return function(Re, Ce, Te, Ae, Ue, tt, S) {
          return K(Re, Ce, S);
        };
      }
      function O(K) {
        return function(Re, Ce, Te, Ae) {
          if (!Re || !Ce || typeof Re != "object" || typeof Ce != "object")
            return K(Re, Ce, Te, Ae);
          var Ue = Ae.get(Re), tt = Ae.get(Ce);
          if (Ue && tt)
            return Ue === Ce && tt === Re;
          Ae.set(Re, Ce), Ae.set(Ce, Re);
          var S = K(Re, Ce, Te, Ae);
          return Ae.delete(Re), Ae.delete(Ce), S;
        };
      }
      function C(K, ue) {
        var Re = {};
        for (var Ce in K)
          Re[Ce] = K[Ce];
        for (var Ce in ue)
          Re[Ce] = ue[Ce];
        return Re;
      }
      function H(K) {
        return K.constructor === Object || K.constructor == null;
      }
      function G(K) {
        return typeof K.then == "function";
      }
      function N(K, ue) {
        return K === ue || K !== K && ue !== ue;
      }
      var W = "[object Arguments]", X = "[object Boolean]", A = "[object Date]", F = "[object RegExp]", ke = "[object Map]", ye = "[object Number]", Q = "[object Object]", T = "[object Set]", v = "[object String]", a = Object.prototype.toString;
      function h(K) {
        var ue = K.areArraysEqual, Re = K.areDatesEqual, Ce = K.areMapsEqual, Te = K.areObjectsEqual, Ae = K.areRegExpsEqual, Ue = K.areSetsEqual, tt = K.createIsNestedEqual, S = tt(E);
        function E(R, q, oe) {
          if (R === q)
            return !0;
          if (!R || !q || typeof R != "object" || typeof q != "object")
            return R !== R && q !== q;
          if (H(R) && H(q))
            return Te(R, q, S, oe);
          var ge = Array.isArray(R), Ee = Array.isArray(q);
          if (ge || Ee)
            return ge === Ee && ue(R, q, S, oe);
          var Pe = a.call(R);
          return Pe !== a.call(q) ? !1 : Pe === A ? Re(R, q, S, oe) : Pe === F ? Ae(R, q, S, oe) : Pe === ke ? Ce(R, q, S, oe) : Pe === T ? Ue(R, q, S, oe) : Pe === Q || Pe === W ? G(R) || G(q) ? !1 : Te(R, q, S, oe) : Pe === X || Pe === ye || Pe === v ? N(R.valueOf(), q.valueOf()) : !1;
        }
        return E;
      }
      function f(K, ue, Re, Ce) {
        var Te = K.length;
        if (ue.length !== Te)
          return !1;
        for (; Te-- > 0; )
          if (!Re(K[Te], ue[Te], Te, Te, K, ue, Ce))
            return !1;
        return !0;
      }
      var d = O(f);
      function y(K, ue) {
        return N(K.valueOf(), ue.valueOf());
      }
      function k(K, ue, Re, Ce) {
        var Te = K.size === ue.size;
        if (!Te)
          return !1;
        if (!K.size)
          return !0;
        var Ae = {}, Ue = 0;
        return K.forEach(function(tt, S) {
          if (Te) {
            var E = !1, R = 0;
            ue.forEach(function(q, oe) {
              !E && !Ae[R] && (E = Re(S, oe, Ue, R, K, ue, Ce) && Re(tt, q, S, oe, K, ue, Ce)) && (Ae[R] = !0), R++;
            }), Ue++, Te = E;
          }
        }), Te;
      }
      var j = O(k), B = "_owner", te = Object.prototype.hasOwnProperty;
      function le(K, ue, Re, Ce) {
        var Te = Object.keys(K), Ae = Te.length;
        if (Object.keys(ue).length !== Ae)
          return !1;
        for (var Ue; Ae-- > 0; ) {
          if (Ue = Te[Ae], Ue === B) {
            var tt = !!K.$$typeof, S = !!ue.$$typeof;
            if ((tt || S) && tt !== S)
              return !1;
          }
          if (!te.call(ue, Ue) || !Re(K[Ue], ue[Ue], Ue, Ue, K, ue, Ce))
            return !1;
        }
        return !0;
      }
      var I = O(le);
      function U(K, ue) {
        return K.source === ue.source && K.flags === ue.flags;
      }
      function re(K, ue, Re, Ce) {
        var Te = K.size === ue.size;
        if (!Te)
          return !1;
        if (!K.size)
          return !0;
        var Ae = {};
        return K.forEach(function(Ue, tt) {
          if (Te) {
            var S = !1, E = 0;
            ue.forEach(function(R, q) {
              !S && !Ae[E] && (S = Re(Ue, R, tt, q, K, ue, Ce)) && (Ae[E] = !0), E++;
            }), Te = S;
          }
        }), Te;
      }
      var ae = O(re), de = Object.freeze({
        areArraysEqual: f,
        areDatesEqual: y,
        areMapsEqual: k,
        areObjectsEqual: le,
        areRegExpsEqual: U,
        areSetsEqual: re,
        createIsNestedEqual: p
      }), ce = Object.freeze({
        areArraysEqual: d,
        areDatesEqual: y,
        areMapsEqual: j,
        areObjectsEqual: I,
        areRegExpsEqual: U,
        areSetsEqual: ae,
        createIsNestedEqual: p
      }), V = h(de);
      function ie(K, ue) {
        return V(K, ue, void 0);
      }
      var ee = h(C(de, { createIsNestedEqual: function() {
        return N;
      } }));
      function x(K, ue) {
        return ee(K, ue, void 0);
      }
      var M = h(ce);
      function we(K, ue) {
        return M(K, ue, /* @__PURE__ */ new WeakMap());
      }
      var xe = h(C(ce, {
        createIsNestedEqual: function() {
          return N;
        }
      }));
      function Oe(K, ue) {
        return xe(K, ue, /* @__PURE__ */ new WeakMap());
      }
      function De(K) {
        return h(C(de, K(de)));
      }
      function Ie(K) {
        var ue = h(C(ce, K(ce)));
        return function(Re, Ce, Te) {
          return Te === void 0 && (Te = /* @__PURE__ */ new WeakMap()), ue(Re, Ce, Te);
        };
      }
      s.circularDeepEqual = we, s.circularShallowEqual = Oe, s.createCustomCircularEqual = Ie, s.createCustomEqual = De, s.deepEqual = ie, s.sameValueZeroEqual = N, s.shallowEqual = x, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(di, di.exports)), di.exports;
}
var Eo = { exports: {} }, Ec;
function No() {
  if (Ec) return Eo.exports;
  Ec = 1;
  function u(s) {
    var p, O, C = "";
    if (typeof s == "string" || typeof s == "number") C += s;
    else if (typeof s == "object") if (Array.isArray(s)) {
      var H = s.length;
      for (p = 0; p < H; p++) s[p] && (O = u(s[p])) && (C && (C += " "), C += O);
    } else for (O in s) s[O] && (C && (C += " "), C += O);
    return C;
  }
  function c() {
    for (var s, p, O = 0, C = "", H = arguments.length; O < H; O++) (s = arguments[O]) && (p = u(s)) && (C && (C += " "), C += p);
    return C;
  }
  return Eo.exports = c, Eo.exports.clsx = c, Eo.exports;
}
var be = {}, xs, kc;
function pp() {
  return kc || (kc = 1, xs = function(c, s, p) {
    return c === s ? !0 : c.className === s.className && p(c.style, s.style) && c.width === s.width && c.autoSize === s.autoSize && c.cols === s.cols && c.draggableCancel === s.draggableCancel && c.draggableHandle === s.draggableHandle && p(c.verticalCompact, s.verticalCompact) && p(c.compactType, s.compactType) && p(c.layout, s.layout) && p(c.margin, s.margin) && p(c.containerPadding, s.containerPadding) && c.rowHeight === s.rowHeight && c.maxRows === s.maxRows && c.isBounded === s.isBounded && c.isDraggable === s.isDraggable && c.isResizable === s.isResizable && c.allowOverlap === s.allowOverlap && c.preventCollision === s.preventCollision && c.useCSSTransforms === s.useCSSTransforms && c.transformScale === s.transformScale && c.isDroppable === s.isDroppable && p(c.resizeHandles, s.resizeHandles) && p(c.resizeHandle, s.resizeHandle) && c.onLayoutChange === s.onLayoutChange && c.onDragStart === s.onDragStart && c.onDrag === s.onDrag && c.onDragStop === s.onDragStop && c.onResizeStart === s.onResizeStart && c.onResize === s.onResize && c.onResizeStop === s.onResizeStop && c.onDrop === s.onDrop && p(c.droppingItem, s.droppingItem) && p(c.innerRef, s.innerRef);
  }), xs;
}
var Rc;
function vr() {
  if (Rc) return be;
  Rc = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  }), be.bottom = N, be.childrenEqual = ke, be.cloneLayout = W, be.cloneLayoutItem = F, be.collides = Q, be.compact = T, be.compactItem = h, be.compactType = Ae, be.correctBounds = f, be.fastPositionEqual = ye, be.fastRGLPropsEqual = void 0, be.getAllCollisions = k, be.getFirstCollision = y, be.getLayoutItem = d, be.getStatics = j, be.modifyLayout = X, be.moveElement = B, be.moveElementAwayFromCollision = te, be.noop = void 0, be.perc = le, be.resizeItemInDirection = Oe, be.setTopLeft = Ie, be.setTransform = De, be.sortLayoutItems = K, be.sortLayoutItemsByColRow = Re, be.sortLayoutItemsByRowCol = ue, be.synchronizeLayoutWithChildren = Ce, be.validateLayout = Te, be.withLayoutItem = A;
  var u = /* @__PURE__ */ Ns(), c = s(Ot());
  function s(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function p(S, E) {
    var R = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(S);
      E && (q = q.filter(function(oe) {
        return Object.getOwnPropertyDescriptor(S, oe).enumerable;
      })), R.push.apply(R, q);
    }
    return R;
  }
  function O(S) {
    for (var E = 1; E < arguments.length; E++) {
      var R = arguments[E] != null ? arguments[E] : {};
      E % 2 ? p(Object(R), !0).forEach(function(q) {
        C(S, q, R[q]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(R)) : p(Object(R)).forEach(function(q) {
        Object.defineProperty(S, q, Object.getOwnPropertyDescriptor(R, q));
      });
    }
    return S;
  }
  function C(S, E, R) {
    return (E = H(E)) in S ? Object.defineProperty(S, E, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : S[E] = R, S;
  }
  function H(S) {
    var E = G(S, "string");
    return typeof E == "symbol" ? E : E + "";
  }
  function G(S, E) {
    if (typeof S != "object" || !S) return S;
    var R = S[Symbol.toPrimitive];
    if (R !== void 0) {
      var q = R.call(S, E);
      if (typeof q != "object") return q;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (E === "string" ? String : Number)(S);
  }
  function N(S) {
    let E = 0, R;
    for (let q = 0, oe = S.length; q < oe; q++)
      R = S[q].y + S[q].h, R > E && (E = R);
    return E;
  }
  function W(S) {
    const E = Array(S.length);
    for (let R = 0, q = S.length; R < q; R++)
      E[R] = F(S[R]);
    return E;
  }
  function X(S, E) {
    const R = Array(S.length);
    for (let q = 0, oe = S.length; q < oe; q++)
      E.i === S[q].i ? R[q] = E : R[q] = S[q];
    return R;
  }
  function A(S, E, R) {
    let q = d(S, E);
    return q ? (q = R(F(q)), S = X(S, q), [S, q]) : [S, null];
  }
  function F(S) {
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
  function ke(S, E) {
    return (0, u.deepEqual)(c.default.Children.map(S, (R) => R == null ? void 0 : R.key), c.default.Children.map(E, (R) => R == null ? void 0 : R.key)) && (0, u.deepEqual)(c.default.Children.map(S, (R) => R == null ? void 0 : R.props["data-grid"]), c.default.Children.map(E, (R) => R == null ? void 0 : R.props["data-grid"]));
  }
  be.fastRGLPropsEqual = pp();
  function ye(S, E) {
    return S.left === E.left && S.top === E.top && S.width === E.width && S.height === E.height;
  }
  function Q(S, E) {
    return !(S.i === E.i || S.x + S.w <= E.x || S.x >= E.x + E.w || S.y + S.h <= E.y || S.y >= E.y + E.h);
  }
  function T(S, E, R, q) {
    const oe = j(S);
    let ge = N(oe);
    const Ee = K(S, E), Pe = Array(S.length);
    for (let Ne = 0, qe = Ee.length; Ne < qe; Ne++) {
      let Xe = F(Ee[Ne]);
      Xe.static || (Xe = h(oe, Xe, E, R, Ee, q, ge), ge = Math.max(ge, Xe.y + Xe.h), oe.push(Xe)), Pe[S.indexOf(Ee[Ne])] = Xe, Xe.moved = !1;
    }
    return Pe;
  }
  const v = {
    x: "w",
    y: "h"
  };
  function a(S, E, R, q) {
    const oe = v[q];
    E[q] += 1;
    const ge = S.map((Ee) => Ee.i).indexOf(E.i);
    for (let Ee = ge + 1; Ee < S.length; Ee++) {
      const Pe = S[Ee];
      if (!Pe.static) {
        if (Pe.y > E.y + E.h) break;
        Q(E, Pe) && a(S, Pe, R + E[oe], q);
      }
    }
    E[q] = R;
  }
  function h(S, E, R, q, oe, ge, Ee) {
    const Pe = R === "vertical", Ne = R === "horizontal";
    if (Pe)
      for (typeof Ee == "number" ? E.y = Math.min(Ee, E.y) : E.y = Math.min(N(S), E.y); E.y > 0 && !y(S, E); )
        E.y--;
    else if (Ne)
      for (; E.x > 0 && !y(S, E); )
        E.x--;
    let qe;
    for (; (qe = y(S, E)) && !(R === null && ge); )
      if (Ne ? a(oe, E, qe.x + qe.w, "x") : a(oe, E, qe.y + qe.h, "y"), Ne && E.x + E.w > q)
        for (E.x = q - E.w, E.y++; E.x > 0 && !y(S, E); )
          E.x--;
    return E.y = Math.max(E.y, 0), E.x = Math.max(E.x, 0), E;
  }
  function f(S, E) {
    const R = j(S);
    for (let q = 0, oe = S.length; q < oe; q++) {
      const ge = S[q];
      if (ge.x + ge.w > E.cols && (ge.x = E.cols - ge.w), ge.x < 0 && (ge.x = 0, ge.w = E.cols), !ge.static) R.push(ge);
      else
        for (; y(R, ge); )
          ge.y++;
    }
    return S;
  }
  function d(S, E) {
    for (let R = 0, q = S.length; R < q; R++)
      if (S[R].i === E) return S[R];
  }
  function y(S, E) {
    for (let R = 0, q = S.length; R < q; R++)
      if (Q(S[R], E)) return S[R];
  }
  function k(S, E) {
    return S.filter((R) => Q(R, E));
  }
  function j(S) {
    return S.filter((E) => E.static);
  }
  function B(S, E, R, q, oe, ge, Ee, Pe, Ne) {
    if (E.static && E.isDraggable !== !0 || E.y === q && E.x === R) return S;
    "Moving element ".concat(E.i, " to [").concat(String(R), ",").concat(String(q), "] from [").concat(E.x, ",").concat(E.y, "]");
    const qe = E.x, Xe = E.y;
    typeof R == "number" && (E.x = R), typeof q == "number" && (E.y = q), E.moved = !0;
    let st = K(S, Ee);
    (Ee === "vertical" && typeof q == "number" ? Xe >= q : Ee === "horizontal" && typeof R == "number" ? qe >= R : !1) && (st = st.reverse());
    const P = k(st, E), b = P.length > 0;
    if (b && Ne)
      return W(S);
    if (b && ge)
      return "Collision prevented on ".concat(E.i, ", reverting."), E.x = qe, E.y = Xe, E.moved = !1, S;
    for (let J = 0, se = P.length; J < se; J++) {
      const Me = P[J];
      "Resolving collision between ".concat(E.i, " at [").concat(E.x, ",").concat(E.y, "] and ").concat(Me.i, " at [").concat(Me.x, ",").concat(Me.y, "]"), !Me.moved && (Me.static ? S = te(S, Me, E, oe, Ee) : S = te(S, E, Me, oe, Ee));
    }
    return S;
  }
  function te(S, E, R, q, oe, ge) {
    const Ee = oe === "horizontal", Pe = oe === "vertical", Ne = E.static;
    if (q) {
      q = !1;
      const st = {
        x: Ee ? Math.max(E.x - R.w, 0) : R.x,
        y: Pe ? Math.max(E.y - R.h, 0) : R.y,
        w: R.w,
        h: R.h,
        i: "-1"
      }, g = y(S, st), P = g && g.y + g.h > E.y, b = g && E.x + E.w > g.x;
      if (g) {
        if (P && Pe)
          return B(S, R, void 0, R.y + 1, q, Ne, oe);
        if (P && oe == null)
          return E.y = R.y, R.y = R.y + R.h, S;
        if (b && Ee)
          return B(S, E, R.x, void 0, q, Ne, oe);
      } else return "Doing reverse collision on ".concat(R.i, " up to [").concat(st.x, ",").concat(st.y, "]."), B(S, R, Ee ? st.x : void 0, Pe ? st.y : void 0, q, Ne, oe);
    }
    const qe = Ee ? R.x + 1 : void 0, Xe = Pe ? R.y + 1 : void 0;
    return qe == null && Xe == null ? S : B(S, R, Ee ? R.x + 1 : void 0, Pe ? R.y + 1 : void 0, q, Ne, oe);
  }
  function le(S) {
    return S * 100 + "%";
  }
  const I = (S, E, R, q) => S + R > q ? E : R, U = (S, E, R) => S < 0 ? E : R, re = (S) => Math.max(0, S), ae = (S) => Math.max(0, S), de = (S, E, R) => {
    let {
      left: q,
      height: oe,
      width: ge
    } = E;
    const Ee = S.top - (oe - S.height);
    return {
      left: q,
      width: ge,
      height: U(Ee, S.height, oe),
      top: ae(Ee)
    };
  }, ce = (S, E, R) => {
    let {
      top: q,
      left: oe,
      height: ge,
      width: Ee
    } = E;
    return {
      top: q,
      height: ge,
      width: I(S.left, S.width, Ee, R),
      left: re(oe)
    };
  }, V = (S, E, R) => {
    let {
      top: q,
      height: oe,
      width: ge
    } = E;
    const Ee = S.left - (ge - S.width);
    return {
      height: oe,
      width: Ee < 0 ? S.width : I(S.left, S.width, ge, R),
      top: ae(q),
      left: re(Ee)
    };
  }, ie = (S, E, R) => {
    let {
      top: q,
      left: oe,
      height: ge,
      width: Ee
    } = E;
    return {
      width: Ee,
      left: oe,
      height: U(q, S.height, ge),
      top: ae(q)
    };
  }, xe = {
    n: de,
    ne: function() {
      return de(arguments.length <= 0 ? void 0 : arguments[0], ce(...arguments));
    },
    e: ce,
    se: function() {
      return ie(arguments.length <= 0 ? void 0 : arguments[0], ce(...arguments));
    },
    s: ie,
    sw: function() {
      return ie(arguments.length <= 0 ? void 0 : arguments[0], V(...arguments));
    },
    w: V,
    nw: function() {
      return de(arguments.length <= 0 ? void 0 : arguments[0], V(...arguments));
    }
  };
  function Oe(S, E, R, q) {
    const oe = xe[S];
    return oe ? oe(E, O(O({}, E), R), q) : R;
  }
  function De(S) {
    let {
      top: E,
      left: R,
      width: q,
      height: oe
    } = S;
    const ge = "translate(".concat(R, "px,").concat(E, "px)");
    return {
      transform: ge,
      WebkitTransform: ge,
      MozTransform: ge,
      msTransform: ge,
      OTransform: ge,
      width: "".concat(q, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function Ie(S) {
    let {
      top: E,
      left: R,
      width: q,
      height: oe
    } = S;
    return {
      top: "".concat(E, "px"),
      left: "".concat(R, "px"),
      width: "".concat(q, "px"),
      height: "".concat(oe, "px"),
      position: "absolute"
    };
  }
  function K(S, E) {
    return E === "horizontal" ? Re(S) : E === "vertical" ? ue(S) : S;
  }
  function ue(S) {
    return S.slice(0).sort(function(E, R) {
      return E.y > R.y || E.y === R.y && E.x > R.x ? 1 : E.y === R.y && E.x === R.x ? 0 : -1;
    });
  }
  function Re(S) {
    return S.slice(0).sort(function(E, R) {
      return E.x > R.x || E.x === R.x && E.y > R.y ? 1 : -1;
    });
  }
  function Ce(S, E, R, q, oe) {
    S = S || [];
    const ge = [];
    c.default.Children.forEach(E, (Pe) => {
      if ((Pe == null ? void 0 : Pe.key) == null) return;
      const Ne = d(S, String(Pe.key)), qe = Pe.props["data-grid"];
      Ne && qe == null ? ge.push(F(Ne)) : qe ? ge.push(F(O(O({}, qe), {}, {
        i: Pe.key
      }))) : ge.push(F({
        w: 1,
        h: 1,
        x: 0,
        y: N(ge),
        i: String(Pe.key)
      }));
    });
    const Ee = f(ge, {
      cols: R
    });
    return oe ? Ee : T(Ee, q, R);
  }
  function Te(S) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Layout";
    const R = ["x", "y", "w", "h"];
    if (!Array.isArray(S)) throw new Error(E + " must be an array!");
    for (let q = 0, oe = S.length; q < oe; q++) {
      const ge = S[q];
      for (let Ee = 0; Ee < R.length; Ee++) {
        const Pe = R[Ee], Ne = ge[Pe];
        if (typeof Ne != "number" || Number.isNaN(Ne))
          throw new Error("ReactGridLayout: ".concat(E, "[").concat(q, "].").concat(Pe, " must be a number! Received: ").concat(Ne, " (").concat(typeof Ne, ")"));
      }
      if (typeof ge.i < "u" && typeof ge.i != "string")
        throw new Error("ReactGridLayout: ".concat(E, "[").concat(q, "].i must be a string! Received: ").concat(ge.i, " (").concat(typeof ge.i, ")"));
    }
  }
  function Ae(S) {
    const {
      verticalCompact: E,
      compactType: R
    } = S || {};
    return E === !1 ? null : R;
  }
  function Ue() {
  }
  const tt = () => {
  };
  return be.noop = tt, be;
}
var an = {}, zc;
function Ls() {
  if (zc) return an;
  zc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.calcGridColWidth = u, an.calcGridItemPosition = s, an.calcGridItemWHPx = c, an.calcWH = O, an.calcXY = p, an.clamp = C;
  function u(H) {
    const {
      margin: G,
      containerPadding: N,
      containerWidth: W,
      cols: X
    } = H;
    return (W - G[0] * (X - 1) - N[0] * 2) / X;
  }
  function c(H, G, N) {
    return Number.isFinite(H) ? Math.round(G * H + Math.max(0, H - 1) * N) : H;
  }
  function s(H, G, N, W, X, A) {
    const {
      margin: F,
      containerPadding: ke,
      rowHeight: ye
    } = H, Q = u(H), T = {};
    return A && A.resizing ? (T.width = Math.round(A.resizing.width), T.height = Math.round(A.resizing.height)) : (T.width = c(W, Q, F[0]), T.height = c(X, ye, F[1])), A && A.dragging ? (T.top = Math.round(A.dragging.top), T.left = Math.round(A.dragging.left)) : A && A.resizing && typeof A.resizing.top == "number" && typeof A.resizing.left == "number" ? (T.top = Math.round(A.resizing.top), T.left = Math.round(A.resizing.left)) : (T.top = Math.round((ye + F[1]) * N + ke[1]), T.left = Math.round((Q + F[0]) * G + ke[0])), T;
  }
  function p(H, G, N, W, X) {
    const {
      margin: A,
      containerPadding: F,
      cols: ke,
      rowHeight: ye,
      maxRows: Q
    } = H, T = u(H);
    let v = Math.round((N - F[0]) / (T + A[0])), a = Math.round((G - F[1]) / (ye + A[1]));
    return v = C(v, 0, ke - W), a = C(a, 0, Q - X), {
      x: v,
      y: a
    };
  }
  function O(H, G, N, W, X, A) {
    const {
      margin: F,
      maxRows: ke,
      cols: ye,
      rowHeight: Q
    } = H, T = u(H);
    let v = Math.round((G + F[0]) / (T + F[0])), a = Math.round((N + F[1]) / (Q + F[1])), h = C(v, 0, ye - W), f = C(a, 0, ke - X);
    return ["sw", "w", "nw"].indexOf(A) !== -1 && (h = C(v, 0, ye)), ["nw", "n", "ne"].indexOf(A) !== -1 && (f = C(a, 0, ke)), {
      w: h,
      h: f
    };
  }
  function C(H, G, N) {
    return Math.max(Math.min(H, N), G);
  }
  return an;
}
var oi = {}, Es = { exports: {} }, ks, Oc;
function hp() {
  if (Oc) return ks;
  Oc = 1;
  var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ks = u, ks;
}
var Rs, Pc;
function mp() {
  if (Pc) return Rs;
  Pc = 1;
  var u = /* @__PURE__ */ hp();
  function c() {
  }
  function s() {
  }
  return s.resetWarningCache = c, Rs = function() {
    function p(H, G, N, W, X, A) {
      if (A !== u) {
        var F = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw F.name = "Invariant Violation", F;
      }
    }
    p.isRequired = p;
    function O() {
      return p;
    }
    var C = {
      array: p,
      bigint: p,
      bool: p,
      func: p,
      number: p,
      object: p,
      string: p,
      symbol: p,
      any: p,
      arrayOf: O,
      element: p,
      elementType: p,
      instanceOf: O,
      node: p,
      objectOf: O,
      oneOf: O,
      oneOfType: O,
      shape: O,
      exact: O,
      checkPropTypes: s,
      resetWarningCache: c
    };
    return C.PropTypes = C, C;
  }, Rs;
}
var Cc;
function Dn() {
  return Cc || (Cc = 1, Es.exports = /* @__PURE__ */ mp()()), Es.exports;
}
var li = { exports: {} }, zs, Dc;
function gp() {
  if (Dc) return zs;
  Dc = 1;
  var u = Object.create, c = Object.defineProperty, s = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, O = Object.getPrototypeOf, C = Object.prototype.hasOwnProperty, H = (g, P) => {
    for (var b in P)
      c(g, b, { get: P[b], enumerable: !0 });
  }, G = (g, P, b, J) => {
    if (P && typeof P == "object" || typeof P == "function")
      for (let se of p(P))
        !C.call(g, se) && se !== b && c(g, se, { get: () => P[se], enumerable: !(J = s(P, se)) || J.enumerable });
    return g;
  }, N = (g, P, b) => (b = g != null ? u(O(g)) : {}, G(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    !g || !g.__esModule ? c(b, "default", { value: g, enumerable: !0 }) : b,
    g
  )), W = (g) => G(c({}, "__esModule", { value: !0 }), g), X = {};
  H(X, {
    DraggableCore: () => Xe,
    default: () => st
  }), zs = W(X);
  var A = N(Ot()), F = N(/* @__PURE__ */ Dn()), ke = N(Oo()), ye = No();
  function Q(g, P) {
    for (let b = 0, J = g.length; b < J; b++)
      if (P.apply(P, [g[b], b, g])) return g[b];
  }
  function T(g) {
    return typeof g == "function" || Object.prototype.toString.call(g) === "[object Function]";
  }
  function v(g) {
    return typeof g == "number" && !isNaN(g);
  }
  function a(g) {
    return parseInt(g, 10);
  }
  function h(g, P, b) {
    if (g[P])
      return new Error(`Invalid prop ${P} passed to ${b} - do not set this, set it on the child.`);
  }
  var f = ["Moz", "Webkit", "O", "ms"];
  function d(g = "transform") {
    var P, b;
    if (typeof window > "u") return "";
    const J = (b = (P = window.document) == null ? void 0 : P.documentElement) == null ? void 0 : b.style;
    if (!J || g in J) return "";
    for (let se = 0; se < f.length; se++)
      if (y(g, f[se]) in J) return f[se];
    return "";
  }
  function y(g, P) {
    return P ? `${P}${k(g)}` : g;
  }
  function k(g) {
    let P = "", b = !0;
    for (let J = 0; J < g.length; J++)
      b ? (P += g[J].toUpperCase(), b = !1) : g[J] === "-" ? b = !0 : P += g[J];
    return P;
  }
  var j = d(), B = "";
  function te(g, P) {
    var b;
    B || (B = (b = Q([
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector"
    ], function(se) {
      return T(g[se]);
    })) != null ? b : "");
    const J = g[B];
    return T(J) ? !!J.call(g, P) : !1;
  }
  function le(g, P, b) {
    let J = g;
    do {
      if (te(J, P)) return !0;
      if (J === b) return !1;
      J = J.parentNode;
    } while (J);
    return !1;
  }
  function I(g, P, b, J) {
    if (!g) return;
    const se = { capture: !0, ...J }, Me = b;
    g.addEventListener ? g.addEventListener(P, Me, se) : g.attachEvent ? g.attachEvent("on" + P, Me) : g["on" + P] = Me;
  }
  function U(g, P, b, J) {
    if (!g) return;
    const se = { capture: !0, ...J }, Me = b;
    g.removeEventListener ? g.removeEventListener(P, Me, se) : g.detachEvent ? g.detachEvent("on" + P, Me) : g["on" + P] = null;
  }
  function re(g) {
    let P = g.clientHeight;
    const b = g.ownerDocument.defaultView.getComputedStyle(g);
    return P += a(b.borderTopWidth), P += a(b.borderBottomWidth), P;
  }
  function ae(g) {
    let P = g.clientWidth;
    const b = g.ownerDocument.defaultView.getComputedStyle(g);
    return P += a(b.borderLeftWidth), P += a(b.borderRightWidth), P;
  }
  function de(g) {
    let P = g.clientHeight;
    const b = g.ownerDocument.defaultView.getComputedStyle(g);
    return P -= a(b.paddingTop), P -= a(b.paddingBottom), P;
  }
  function ce(g) {
    let P = g.clientWidth;
    const b = g.ownerDocument.defaultView.getComputedStyle(g);
    return P -= a(b.paddingLeft), P -= a(b.paddingRight), P;
  }
  function V(g, P, b) {
    const se = P === P.ownerDocument.body ? { left: 0, top: 0 } : P.getBoundingClientRect(), Me = (g.clientX + P.scrollLeft - se.left) / b, je = (g.clientY + P.scrollTop - se.top) / b;
    return { x: Me, y: je };
  }
  function ie(g, P) {
    const b = x(g, P, "px");
    return { [y("transform", j)]: b };
  }
  function ee(g, P) {
    return x(g, P, "");
  }
  function x({ x: g, y: P }, b, J) {
    let se = `translate(${g}${J},${P}${J})`;
    if (b) {
      const Me = `${typeof b.x == "string" ? b.x : b.x + J}`, je = `${typeof b.y == "string" ? b.y : b.y + J}`;
      se = `translate(${Me}, ${je})` + se;
    }
    return se;
  }
  function M(g, P) {
    return g.targetTouches && Q(g.targetTouches, (b) => P === b.identifier) || g.changedTouches && Q(g.changedTouches, (b) => P === b.identifier);
  }
  function we(g) {
    if (g.targetTouches && g.targetTouches[0]) return g.targetTouches[0].identifier;
    if (g.changedTouches && g.changedTouches[0]) return g.changedTouches[0].identifier;
  }
  function xe() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
  }
  function Oe(g, P) {
    if (!g) return;
    let b = g.getElementById("react-draggable-style-el");
    if (!b) {
      b = g.createElement("style"), b.type = "text/css", b.id = "react-draggable-style-el";
      const J = P ?? xe();
      J && b.setAttribute("nonce", J), b.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, b.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, g.getElementsByTagName("head")[0].appendChild(b);
    }
    g.body && K(g.body, "react-draggable-transparent-selection");
  }
  function De(g) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      Ie(g);
    }) : Ie(g);
  }
  function Ie(g) {
    if (g)
      try {
        g.body && ue(g.body, "react-draggable-transparent-selection");
        const P = g.selection;
        if (P)
          P.empty();
        else {
          const b = (g.defaultView || window).getSelection();
          b && b.type !== "Caret" && b.removeAllRanges();
        }
      } catch {
      }
  }
  function K(g, P) {
    g.classList ? g.classList.add(P) : g.className.match(new RegExp(`(?:^|\\s)${P}(?!\\S)`)) || (g.className += ` ${P}`);
  }
  function ue(g, P) {
    g.classList ? g.classList.remove(P) : g.className = g.className.replace(new RegExp(`(?:^|\\s)${P}(?!\\S)`, "g"), "");
  }
  function Re(g, P, b) {
    if (!g.props.bounds) return [P, b];
    let { bounds: J } = g.props;
    J = typeof J == "string" ? J : E(J);
    const se = R(g);
    if (typeof J == "string") {
      const { ownerDocument: Me } = se, je = Me.defaultView;
      if (!je)
        throw new Error("Cannot resolve the owner window of the draggable node.");
      let Qe;
      if (J === "parent" ? Qe = se.parentNode : Qe = se.getRootNode().querySelector(J), !(Qe instanceof je.HTMLElement))
        throw new Error('Bounds selector "' + J + '" could not find an element.');
      const ft = Qe, Ht = je.getComputedStyle(se), $t = je.getComputedStyle(ft);
      J = {
        left: -se.offsetLeft + a($t.paddingLeft) + a(Ht.marginLeft),
        top: -se.offsetTop + a($t.paddingTop) + a(Ht.marginTop),
        right: ce(ft) - ae(se) - se.offsetLeft + a($t.paddingRight) - a(Ht.marginRight),
        bottom: de(ft) - re(se) - se.offsetTop + a($t.paddingBottom) - a(Ht.marginBottom)
      };
    }
    return v(J.right) && (P = Math.min(P, J.right)), v(J.bottom) && (b = Math.min(b, J.bottom)), v(J.left) && (P = Math.max(P, J.left)), v(J.top) && (b = Math.max(b, J.top)), [P, b];
  }
  function Ce(g, P, b) {
    const J = Math.round(P / g[0]) * g[0], se = Math.round(b / g[1]) * g[1];
    return [J, se];
  }
  function Te(g) {
    return g.props.axis === "both" || g.props.axis === "x";
  }
  function Ae(g) {
    return g.props.axis === "both" || g.props.axis === "y";
  }
  function Ue(g, P, b) {
    const J = typeof P == "number" ? M(g, P) : null;
    if (typeof P == "number" && !J) return null;
    const se = R(b), Me = b.props.offsetParent || se.offsetParent || se.ownerDocument.body;
    return V(J || g, Me, b.props.scale);
  }
  function tt(g, P, b) {
    const J = !v(g.lastX), se = R(g);
    return J ? {
      node: se,
      deltaX: 0,
      deltaY: 0,
      lastX: P,
      lastY: b,
      x: P,
      y: b
    } : {
      node: se,
      deltaX: P - g.lastX,
      deltaY: b - g.lastY,
      lastX: g.lastX,
      lastY: g.lastY,
      x: P,
      y: b
    };
  }
  function S(g, P) {
    const b = g.props.scale;
    return {
      node: P.node,
      x: g.state.x + P.deltaX / b,
      y: g.state.y + P.deltaY / b,
      deltaX: P.deltaX / b,
      deltaY: P.deltaY / b,
      lastX: g.state.x,
      lastY: g.state.y
    };
  }
  function E(g) {
    return {
      left: g.left,
      top: g.top,
      right: g.right,
      bottom: g.bottom
    };
  }
  function R(g) {
    const P = g.findDOMNode();
    if (!P)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return P;
  }
  var q = N(Ot()), oe = N(/* @__PURE__ */ Dn()), ge = N(Oo()), Ee = function() {
  }, Pe = Ee, Ne = {
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
  }, qe = Ne.mouse, Xe = class extends q.Component {
    constructor() {
      super(...arguments), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, this.touchIdentifier = null, this.mounted = !1, this.handleDragStart = (g) => {
        if (this.props.onMouseDown(g), !this.props.allowAnyClick && (typeof g.button == "number" && g.button !== 0 || g.ctrlKey)) return !1;
        const P = this.findDOMNode();
        if (!P || !P.ownerDocument || !P.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const { ownerDocument: b } = P;
        if (this.props.disabled || !(g.target instanceof b.defaultView.Node) || this.props.handle && !le(g.target, this.props.handle, P) || this.props.cancel && le(g.target, this.props.cancel, P))
          return;
        g.type === "touchstart" && !this.props.allowMobileScroll && g.preventDefault();
        const J = we(g);
        this.touchIdentifier = J;
        const se = Ue(g, J, this);
        if (se == null) return;
        const { x: Me, y: je } = se, Qe = tt(this, Me, je);
        Pe("calling", this.props.onStart), !(this.props.onStart(g, Qe) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && Oe(b, this.props.nonce), this.dragging = !0, this.lastX = Me, this.lastY = je, I(b, qe.move, this.handleDrag), I(b, qe.stop, this.handleDragStop));
      }, this.handleDrag = (g) => {
        const P = Ue(g, this.touchIdentifier, this);
        if (P == null) return;
        let { x: b, y: J } = P;
        if (Array.isArray(this.props.grid)) {
          let je = b - this.lastX, Qe = J - this.lastY;
          if ([je, Qe] = Ce(this.props.grid, je, Qe), !je && !Qe) return;
          b = this.lastX + je, J = this.lastY + Qe;
        }
        const se = tt(this, b, J);
        if (this.props.onDrag(g, se) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const je = document.createEvent("MouseEvents");
            je.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(je);
          }
          return;
        }
        this.lastX = b, this.lastY = J;
      }, this.handleDragStop = (g) => {
        if (!this.dragging) return;
        const P = Ue(g, this.touchIdentifier, this);
        if (P == null) return;
        let { x: b, y: J } = P;
        if (Array.isArray(this.props.grid)) {
          let Qe = b - this.lastX || 0, ft = J - this.lastY || 0;
          [Qe, ft] = Ce(this.props.grid, Qe, ft), b = this.lastX + Qe, J = this.lastY + ft;
        }
        const se = tt(this, b, J);
        if (this.props.onStop(g, se) === !1 || this.mounted === !1) return !1;
        const je = this.findDOMNode();
        je && this.props.enableUserSelectHack && De(je.ownerDocument), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, je && (U(je.ownerDocument, qe.move, this.handleDrag), U(je.ownerDocument, qe.stop, this.handleDragStop));
      }, this.onMouseDown = (g) => (qe = Ne.mouse, this.handleDragStart(g)), this.onMouseUp = (g) => (qe = Ne.mouse, this.handleDragStop(g)), this.onTouchStart = (g) => (qe = Ne.touch, this.handleDragStart(g)), this.onTouchEnd = (g) => (qe = Ne.touch, this.handleDragStop(g));
    }
    componentDidMount() {
      this.mounted = !0;
      const g = this.findDOMNode();
      g && I(g, Ne.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const g = this.findDOMNode();
      if (g) {
        const { ownerDocument: P } = g;
        U(P, Ne.mouse.move, this.handleDrag), U(P, Ne.touch.move, this.handleDrag), U(P, Ne.mouse.stop, this.handleDragStop), U(P, Ne.touch.stop, this.handleDragStop), U(g, Ne.touch.start, this.onTouchStart, { passive: !1 }), this.props.enableUserSelectHack && De(P);
      }
    }
    // React 19 removed ReactDOM.findDOMNode, so nodeRef is now required.
    // For backward compatibility with React 18 and earlier, we still support findDOMNode if available.
    findDOMNode() {
      var g;
      if ((g = this.props) != null && g.nodeRef)
        return this.props.nodeRef.current;
      const P = ge.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      return q.cloneElement(q.Children.only(this.props.children), {
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
  Xe.displayName = "DraggableCore", Xe.propTypes = {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: oe.default.bool,
    /**
     * `allowMobileScroll` turns off cancellation of the 'touchstart' event
     * on mobile devices. Only enable this if you are having trouble with click
     * events. Prefer using 'handle' / 'cancel' instead.
     *
     * Defaults to `false`.
     */
    allowMobileScroll: oe.default.bool,
    children: oe.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: oe.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: oe.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(g, P) {
      if (g[P] && g[P].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: oe.default.arrayOf(oe.default.number),
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
    handle: oe.default.string,
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
    cancel: oe.default.string,
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
    nodeRef: oe.default.object,
    /**
     * `nonce` is applied to the dynamically-injected <style> element used by the
     * user-select hack, so it isn't blocked under a strict Content Security
     * Policy (`style-src` without `'unsafe-inline'`). If omitted, webpack's
     * `__webpack_nonce__` global is used when available.
     */
    nonce: oe.default.string,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: oe.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: oe.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: oe.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: oe.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: oe.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: h,
    style: h,
    transform: h
  }, Xe.defaultProps = {
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
  var st = class extends A.Component {
    constructor(g) {
      super(g), this.onDragStart = (P, b) => {
        if (this.props.onStart(P, S(this, b)) === !1) return !1;
        this.setState({ dragging: !0, dragged: !0 });
      }, this.onDrag = (P, b) => {
        if (!this.state.dragging) return !1;
        const J = S(this, b), se = {
          x: J.x,
          y: J.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const { x: je, y: Qe } = se;
          se.x += this.state.slackX, se.y += this.state.slackY;
          const [ft, Ht] = Re(this, se.x, se.y);
          se.x = ft, se.y = Ht, se.slackX = this.state.slackX + (je - se.x), se.slackY = this.state.slackY + (Qe - se.y), J.x = se.x, J.y = se.y, J.deltaX = se.x - this.state.x, J.deltaY = se.y - this.state.y;
        }
        if (this.props.onDrag(P, J) === !1) return !1;
        this.setState(se);
      }, this.onDragStop = (P, b) => {
        if (!this.state.dragging || this.props.onStop(P, S(this, b)) === !1) return !1;
        const se = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const { x: je, y: Qe } = this.props.position;
          se.x = je, se.y = Qe;
        }
        this.setState(se);
      }, this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: g.position ? g.position.x : g.defaultPosition.x,
        y: g.position ? g.position.y : g.defaultPosition.y,
        prevPropsPosition: { ...g.position },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, g.position && !(g.onDrag || g.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps({ position: g }, { prevPropsPosition: P }) {
      return g && (!P || g.x !== P.x || g.y !== P.y) ? {
        x: g.x,
        y: g.y,
        prevPropsPosition: { ...g }
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
      var g;
      if ((g = this.props) != null && g.nodeRef)
        return this.props.nodeRef.current;
      const P = ke.default;
      return typeof P.findDOMNode == "function" ? P.findDOMNode(this) : null;
    }
    render() {
      const {
        axis: g,
        bounds: P,
        children: b,
        defaultPosition: J,
        defaultClassName: se,
        defaultClassNameDragging: Me,
        defaultClassNameDragged: je,
        position: Qe,
        positionOffset: ft,
        scale: Ht,
        ...$t
      } = this.props;
      let Nn = {}, Gn = null;
      const Zt = !!!Qe || this.state.dragging, wr = Qe || J, Sr = {
        // Set left if horizontal drag is enabled
        x: Te(this) && Zt ? this.state.x : wr.x,
        // Set top if vertical drag is enabled
        y: Ae(this) && Zt ? this.state.y : wr.y
      };
      this.state.isElementSVG ? Gn = ee(Sr, ft) : Nn = ie(Sr, ft);
      const Yn = A.Children.only(b), pi = (0, ye.clsx)(Yn.props.className || "", se, {
        [Me]: this.state.dragging,
        [je]: this.state.dragged
      });
      return /* @__PURE__ */ A.createElement(Xe, { ...$t, onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }, A.cloneElement(Yn, {
        className: pi,
        style: { ...Yn.props.style, ...Nn },
        transform: Gn
      }));
    }
  };
  return st.displayName = "Draggable", st.propTypes = {
    // Accepts all props <DraggableCore> accepts.
    ...Xe.propTypes,
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
    axis: F.default.oneOf(["both", "x", "y", "none"]),
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
    bounds: F.default.oneOfType([
      F.default.shape({
        left: F.default.number,
        right: F.default.number,
        top: F.default.number,
        bottom: F.default.number
      }),
      F.default.string,
      F.default.oneOf([!1])
    ]),
    defaultClassName: F.default.string,
    defaultClassNameDragging: F.default.string,
    defaultClassNameDragged: F.default.string,
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
    defaultPosition: F.default.shape({
      x: F.default.number,
      y: F.default.number
    }),
    positionOffset: F.default.shape({
      x: F.default.oneOfType([F.default.number, F.default.string]),
      y: F.default.oneOfType([F.default.number, F.default.string])
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
    position: F.default.shape({
      x: F.default.number,
      y: F.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: h,
    style: h,
    transform: h
  }, st.defaultProps = {
    ...Xe.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: { x: 0, y: 0 },
    scale: 1
  }, zs;
}
var Nc;
function Ts() {
  if (Nc) return li.exports;
  Nc = 1;
  const u = gp(), c = u.DraggableCore, s = u.default || u;
  return li.exports = s, li.exports.default = s, li.exports.DraggableCore = c, li.exports;
}
var si = { exports: {} }, ai = {}, ko = {}, Lc;
function yp() {
  if (Lc) return ko;
  Lc = 1, ko.__esModule = !0, ko.cloneElement = G;
  var u = c(Ot());
  function c(N) {
    return N && N.__esModule ? N : { default: N };
  }
  function s(N, W) {
    var X = Object.keys(N);
    if (Object.getOwnPropertySymbols) {
      var A = Object.getOwnPropertySymbols(N);
      W && (A = A.filter(function(F) {
        return Object.getOwnPropertyDescriptor(N, F).enumerable;
      })), X.push.apply(X, A);
    }
    return X;
  }
  function p(N) {
    for (var W = 1; W < arguments.length; W++) {
      var X = arguments[W] != null ? arguments[W] : {};
      W % 2 ? s(Object(X), !0).forEach(function(A) {
        O(N, A, X[A]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(N, Object.getOwnPropertyDescriptors(X)) : s(Object(X)).forEach(function(A) {
        Object.defineProperty(N, A, Object.getOwnPropertyDescriptor(X, A));
      });
    }
    return N;
  }
  function O(N, W, X) {
    return W = C(W), W in N ? Object.defineProperty(N, W, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : N[W] = X, N;
  }
  function C(N) {
    var W = H(N, "string");
    return typeof W == "symbol" ? W : String(W);
  }
  function H(N, W) {
    if (typeof N != "object" || N === null) return N;
    var X = N[Symbol.toPrimitive];
    if (X !== void 0) {
      var A = X.call(N, W);
      if (typeof A != "object") return A;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (W === "string" ? String : Number)(N);
  }
  function G(N, W) {
    return W.style && N.props.style && (W.style = p(p({}, N.props.style), W.style)), W.className && N.props.className && (W.className = N.props.className + " " + W.className), /* @__PURE__ */ u.default.cloneElement(N, W);
  }
  return ko;
}
var ui = {}, Tc;
function Gc() {
  if (Tc) return ui;
  Tc = 1, ui.__esModule = !0, ui.resizableProps = void 0;
  var u = c(/* @__PURE__ */ Dn());
  Ts();
  function c(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var s = {
    /*
    * Restricts resizing to a particular axis (default: 'both')
    * 'both' - allows resizing by width or height
    * 'x' - only allows the width to be changed
    * 'y' - only allows the height to be changed
    * 'none' - disables resizing altogether
    * */
    axis: u.default.oneOf(["both", "x", "y", "none"]),
    className: u.default.string,
    /*
    * Require that one and only one child be present.
    * */
    children: u.default.element.isRequired,
    /*
    * These will be passed wholesale to react-draggable's DraggableCore
    * */
    draggableOpts: u.default.shape({
      allowAnyClick: u.default.bool,
      cancel: u.default.string,
      children: u.default.node,
      disabled: u.default.bool,
      enableUserSelectHack: u.default.bool,
      offsetParent: u.default.node,
      grid: u.default.arrayOf(u.default.number),
      handle: u.default.string,
      nodeRef: u.default.object,
      onStart: u.default.func,
      onDrag: u.default.func,
      onStop: u.default.func,
      onMouseDown: u.default.func,
      scale: u.default.number
    }),
    /*
    * Initial height
    * */
    height: function() {
      for (var O = arguments.length, C = new Array(O), H = 0; H < O; H++)
        C[H] = arguments[H];
      var G = C[0];
      if (G.axis === "both" || G.axis === "y") {
        var N;
        return (N = u.default.number).isRequired.apply(N, C);
      }
      return u.default.number.apply(u.default, C);
    },
    /*
    * Customize cursor resize handle
    * */
    handle: u.default.oneOfType([u.default.node, u.default.func]),
    /*
    * If you change this, be sure to update your css
    * */
    handleSize: u.default.arrayOf(u.default.number),
    lockAspectRatio: u.default.bool,
    /*
    * Max X & Y measure
    * */
    maxConstraints: u.default.arrayOf(u.default.number),
    /*
    * Min X & Y measure
    * */
    minConstraints: u.default.arrayOf(u.default.number),
    /*
    * Called on stop resize event
    * */
    onResizeStop: u.default.func,
    /*
    * Called on start resize event
    * */
    onResizeStart: u.default.func,
    /*
    * Called on resize event
    * */
    onResize: u.default.func,
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
    resizeHandles: u.default.arrayOf(u.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    /*
    * If `transform: scale(n)` is set on the parent, this should be set to `n`.
    * */
    transformScale: u.default.number,
    /*
     * Initial width
     */
    width: function() {
      for (var O = arguments.length, C = new Array(O), H = 0; H < O; H++)
        C[H] = arguments[H];
      var G = C[0];
      if (G.axis === "both" || G.axis === "x") {
        var N;
        return (N = u.default.number).isRequired.apply(N, C);
      }
      return u.default.number.apply(u.default, C);
    }
  };
  return ui.resizableProps = s, ui;
}
var Mc;
function Yc() {
  if (Mc) return ai;
  Mc = 1, ai.__esModule = !0, ai.default = void 0;
  var u = H(Ot()), c = Ts(), s = yp(), p = Gc(), O = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];
  function C(v) {
    if (typeof WeakMap != "function") return null;
    var a = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (C = function(d) {
      return d ? h : a;
    })(v);
  }
  function H(v, a) {
    if (v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var h = C(a);
    if (h && h.has(v))
      return h.get(v);
    var f = {}, d = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var y in v)
      if (y !== "default" && Object.prototype.hasOwnProperty.call(v, y)) {
        var k = d ? Object.getOwnPropertyDescriptor(v, y) : null;
        k && (k.get || k.set) ? Object.defineProperty(f, y, k) : f[y] = v[y];
      }
    return f.default = v, h && h.set(v, f), f;
  }
  function G() {
    return G = Object.assign ? Object.assign.bind() : function(v) {
      for (var a = 1; a < arguments.length; a++) {
        var h = arguments[a];
        for (var f in h)
          Object.prototype.hasOwnProperty.call(h, f) && (v[f] = h[f]);
      }
      return v;
    }, G.apply(this, arguments);
  }
  function N(v, a) {
    if (v == null) return {};
    var h = {}, f = Object.keys(v), d, y;
    for (y = 0; y < f.length; y++)
      d = f[y], !(a.indexOf(d) >= 0) && (h[d] = v[d]);
    return h;
  }
  function W(v, a) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      a && (f = f.filter(function(d) {
        return Object.getOwnPropertyDescriptor(v, d).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function X(v) {
    for (var a = 1; a < arguments.length; a++) {
      var h = arguments[a] != null ? arguments[a] : {};
      a % 2 ? W(Object(h), !0).forEach(function(f) {
        A(v, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : W(Object(h)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return v;
  }
  function A(v, a, h) {
    return a = F(a), a in v ? Object.defineProperty(v, a, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[a] = h, v;
  }
  function F(v) {
    var a = ke(v, "string");
    return typeof a == "symbol" ? a : String(a);
  }
  function ke(v, a) {
    if (typeof v != "object" || v === null) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(v, a);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(v);
  }
  function ye(v, a) {
    v.prototype = Object.create(a.prototype), v.prototype.constructor = v, Q(v, a);
  }
  function Q(v, a) {
    return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, d) {
      return f.__proto__ = d, f;
    }, Q(v, a);
  }
  var T = /* @__PURE__ */ function(v) {
    ye(a, v);
    function a() {
      for (var f, d = arguments.length, y = new Array(d), k = 0; k < d; k++)
        y[k] = arguments[k];
      return f = v.call.apply(v, [this].concat(y)) || this, f.handleRefs = {}, f.lastHandleRect = null, f.slack = null, f;
    }
    var h = a.prototype;
    return h.componentWillUnmount = function() {
      this.resetData();
    }, h.resetData = function() {
      this.lastHandleRect = this.slack = null;
    }, h.runConstraints = function(d, y) {
      var k = this.props, j = k.minConstraints, B = k.maxConstraints, te = k.lockAspectRatio;
      if (!j && !B && !te) return [d, y];
      if (te) {
        var le = this.props.width / this.props.height, I = d - this.props.width, U = y - this.props.height;
        Math.abs(I) > Math.abs(U * le) ? y = d / le : d = y * le;
      }
      var re = d, ae = y, de = this.slack || [0, 0], ce = de[0], V = de[1];
      return d += ce, y += V, j && (d = Math.max(j[0], d), y = Math.max(j[1], y)), B && (d = Math.min(B[0], d), y = Math.min(B[1], y)), this.slack = [ce + (re - d), V + (ae - y)], [d, y];
    }, h.resizeHandler = function(d, y) {
      var k = this;
      return function(j, B) {
        var te = B.node, le = B.deltaX, I = B.deltaY;
        d === "onResizeStart" && k.resetData();
        var U = (k.props.axis === "both" || k.props.axis === "x") && y !== "n" && y !== "s", re = (k.props.axis === "both" || k.props.axis === "y") && y !== "e" && y !== "w";
        if (!(!U && !re)) {
          var ae = y[0], de = y[y.length - 1], ce = te.getBoundingClientRect();
          if (k.lastHandleRect != null) {
            if (de === "w") {
              var V = ce.left - k.lastHandleRect.left;
              le += V;
            }
            if (ae === "n") {
              var ie = ce.top - k.lastHandleRect.top;
              I += ie;
            }
          }
          k.lastHandleRect = ce, de === "w" && (le = -le), ae === "n" && (I = -I);
          var ee = k.props.width + (U ? le / k.props.transformScale : 0), x = k.props.height + (re ? I / k.props.transformScale : 0), M = k.runConstraints(ee, x);
          ee = M[0], x = M[1];
          var we = ee !== k.props.width || x !== k.props.height, xe = typeof k.props[d] == "function" ? k.props[d] : null, Oe = d === "onResize" && !we;
          xe && !Oe && (j.persist == null || j.persist(), xe(j, {
            node: te,
            size: {
              width: ee,
              height: x
            },
            handle: y
          })), d === "onResizeStop" && k.resetData();
        }
      };
    }, h.renderResizeHandle = function(d, y) {
      var k = this.props.handle;
      if (!k)
        return /* @__PURE__ */ u.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + d,
          ref: y
        });
      if (typeof k == "function")
        return k(d, y);
      var j = typeof k.type == "string", B = X({
        ref: y
      }, j ? {} : {
        handleAxis: d
      });
      return /* @__PURE__ */ u.cloneElement(k, B);
    }, h.render = function() {
      var d = this, y = this.props, k = y.children, j = y.className, B = y.draggableOpts;
      y.width, y.height, y.handle, y.handleSize, y.lockAspectRatio, y.axis, y.minConstraints, y.maxConstraints, y.onResize, y.onResizeStop, y.onResizeStart;
      var te = y.resizeHandles;
      y.transformScale;
      var le = N(y, O);
      return (0, s.cloneElement)(k, X(X({}, le), {}, {
        className: (j ? j + " " : "") + "react-resizable",
        children: [].concat(k.props.children, te.map(function(I) {
          var U, re = (U = d.handleRefs[I]) != null ? U : d.handleRefs[I] = /* @__PURE__ */ u.createRef();
          return /* @__PURE__ */ u.createElement(c.DraggableCore, G({}, B, {
            nodeRef: re,
            key: "resizableHandle-" + I,
            onStop: d.resizeHandler("onResizeStop", I),
            onStart: d.resizeHandler("onResizeStart", I),
            onDrag: d.resizeHandler("onResize", I)
          }), d.renderResizeHandle(I, re));
        }))
      }));
    }, a;
  }(u.Component);
  return ai.default = T, T.propTypes = p.resizableProps, T.defaultProps = {
    axis: "both",
    handleSize: [20, 20],
    lockAspectRatio: !1,
    minConstraints: [20, 20],
    maxConstraints: [1 / 0, 1 / 0],
    resizeHandles: ["se"],
    transformScale: 1
  }, ai;
}
var ci = {}, jc;
function vp() {
  if (jc) return ci;
  jc = 1, ci.__esModule = !0, ci.default = void 0;
  var u = G(Ot()), c = C(/* @__PURE__ */ Dn()), s = C(Yc()), p = Gc(), O = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];
  function C(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function H(a) {
    if (typeof WeakMap != "function") return null;
    var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (H = function(y) {
      return y ? f : h;
    })(a);
  }
  function G(a, h) {
    if (a && a.__esModule)
      return a;
    if (a === null || typeof a != "object" && typeof a != "function")
      return { default: a };
    var f = H(h);
    if (f && f.has(a))
      return f.get(a);
    var d = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in a)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(a, k)) {
        var j = y ? Object.getOwnPropertyDescriptor(a, k) : null;
        j && (j.get || j.set) ? Object.defineProperty(d, k, j) : d[k] = a[k];
      }
    return d.default = a, f && f.set(a, d), d;
  }
  function N() {
    return N = Object.assign ? Object.assign.bind() : function(a) {
      for (var h = 1; h < arguments.length; h++) {
        var f = arguments[h];
        for (var d in f)
          Object.prototype.hasOwnProperty.call(f, d) && (a[d] = f[d]);
      }
      return a;
    }, N.apply(this, arguments);
  }
  function W(a, h) {
    var f = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var d = Object.getOwnPropertySymbols(a);
      h && (d = d.filter(function(y) {
        return Object.getOwnPropertyDescriptor(a, y).enumerable;
      })), f.push.apply(f, d);
    }
    return f;
  }
  function X(a) {
    for (var h = 1; h < arguments.length; h++) {
      var f = arguments[h] != null ? arguments[h] : {};
      h % 2 ? W(Object(f), !0).forEach(function(d) {
        A(a, d, f[d]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(f)) : W(Object(f)).forEach(function(d) {
        Object.defineProperty(a, d, Object.getOwnPropertyDescriptor(f, d));
      });
    }
    return a;
  }
  function A(a, h, f) {
    return h = F(h), h in a ? Object.defineProperty(a, h, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : a[h] = f, a;
  }
  function F(a) {
    var h = ke(a, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function ke(a, h) {
    if (typeof a != "object" || a === null) return a;
    var f = a[Symbol.toPrimitive];
    if (f !== void 0) {
      var d = f.call(a, h);
      if (typeof d != "object") return d;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(a);
  }
  function ye(a, h) {
    if (a == null) return {};
    var f = {}, d = Object.keys(a), y, k;
    for (k = 0; k < d.length; k++)
      y = d[k], !(h.indexOf(y) >= 0) && (f[y] = a[y]);
    return f;
  }
  function Q(a, h) {
    a.prototype = Object.create(h.prototype), a.prototype.constructor = a, T(a, h);
  }
  function T(a, h) {
    return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(d, y) {
      return d.__proto__ = y, d;
    }, T(a, h);
  }
  var v = /* @__PURE__ */ function(a) {
    Q(h, a);
    function h() {
      for (var d, y = arguments.length, k = new Array(y), j = 0; j < y; j++)
        k[j] = arguments[j];
      return d = a.call.apply(a, [this].concat(k)) || this, d.state = {
        width: d.props.width,
        height: d.props.height,
        propsWidth: d.props.width,
        propsHeight: d.props.height
      }, d.onResize = function(B, te) {
        var le = te.size;
        d.props.onResize ? (B.persist == null || B.persist(), d.setState(le, function() {
          return d.props.onResize && d.props.onResize(B, te);
        })) : d.setState(le);
      }, d;
    }
    h.getDerivedStateFromProps = function(y, k) {
      return k.propsWidth !== y.width || k.propsHeight !== y.height ? {
        width: y.width,
        height: y.height,
        propsWidth: y.width,
        propsHeight: y.height
      } : null;
    };
    var f = h.prototype;
    return f.render = function() {
      var y = this.props, k = y.handle, j = y.handleSize;
      y.onResize;
      var B = y.onResizeStart, te = y.onResizeStop, le = y.draggableOpts, I = y.minConstraints, U = y.maxConstraints, re = y.lockAspectRatio, ae = y.axis;
      y.width, y.height;
      var de = y.resizeHandles, ce = y.style, V = y.transformScale, ie = ye(y, O);
      return /* @__PURE__ */ u.createElement(s.default, {
        axis: ae,
        draggableOpts: le,
        handle: k,
        handleSize: j,
        height: this.state.height,
        lockAspectRatio: re,
        maxConstraints: U,
        minConstraints: I,
        onResizeStart: B,
        onResize: this.onResize,
        onResizeStop: te,
        resizeHandles: de,
        transformScale: V,
        width: this.state.width
      }, /* @__PURE__ */ u.createElement("div", N({}, ie, {
        style: X(X({}, ce), {}, {
          width: this.state.width + "px",
          height: this.state.height + "px"
        })
      })));
    }, h;
  }(u.Component);
  return ci.default = v, v.propTypes = X(X({}, p.resizableProps), {}, {
    children: c.default.element
  }), ci;
}
var bc;
function wp() {
  return bc || (bc = 1, si.exports = function() {
    throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
  }, si.exports.Resizable = Yc().default, si.exports.ResizableBox = vp().default), si.exports;
}
var un = {}, Ic;
function Xc() {
  if (Ic) return un;
  Ic = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.resizeHandleType = un.resizeHandleAxesType = un.default = void 0;
  var u = s(/* @__PURE__ */ Dn()), c = s(Ot());
  function s(C) {
    return C && C.__esModule ? C : { default: C };
  }
  const p = un.resizeHandleAxesType = u.default.arrayOf(u.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])), O = un.resizeHandleType = u.default.oneOfType([u.default.node, u.default.func]);
  return un.default = {
    //
    // Basic props
    //
    className: u.default.string,
    style: u.default.object,
    // This can be set explicitly. If it is not set, it will automatically
    // be set to the container width. Note that resizes will *not* cause this to adjust.
    // If you need that behavior, use WidthProvider.
    width: u.default.number,
    // If true, the container height swells and contracts to fit contents
    autoSize: u.default.bool,
    // # of cols.
    cols: u.default.number,
    // A selector that will not be draggable.
    draggableCancel: u.default.string,
    // A selector for the draggable handler
    draggableHandle: u.default.string,
    // Deprecated
    verticalCompact: function(C) {
      C.verticalCompact;
    },
    // Choose vertical or hotizontal compaction
    compactType: u.default.oneOf(["vertical", "horizontal"]),
    // layout is an array of object with the format:
    // {x: Number, y: Number, w: Number, h: Number, i: String}
    layout: function(C) {
      var H = C.layout;
      H !== void 0 && vr().validateLayout(H, "layout");
    },
    //
    // Grid Dimensions
    //
    // Margin between items [x, y] in px
    margin: u.default.arrayOf(u.default.number),
    // Padding inside the container [x, y] in px
    containerPadding: u.default.arrayOf(u.default.number),
    // Rows have a static height, but you can change this based on breakpoints if you like
    rowHeight: u.default.number,
    // Default Infinity, but you can specify a max here if you like.
    // Note that this isn't fully fleshed out and won't error if you specify a layout that
    // extends beyond the row capacity. It will, however, not allow users to drag/resize
    // an item past the barrier. They can push items beyond the barrier, though.
    // Intentionally not documented for this reason.
    maxRows: u.default.number,
    //
    // Flags
    //
    isBounded: u.default.bool,
    isDraggable: u.default.bool,
    isResizable: u.default.bool,
    // If true, grid can be placed one over the other.
    allowOverlap: u.default.bool,
    // If true, grid items won't change position when being dragged over.
    preventCollision: u.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: u.default.bool,
    // parent layout transform scale
    transformScale: u.default.number,
    // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
    isDroppable: u.default.bool,
    // Resize handle options
    resizeHandles: p,
    resizeHandle: O,
    //
    // Callbacks
    //
    // Callback so you can save the layout. Calls after each drag & resize stops.
    onLayoutChange: u.default.func,
    // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
    // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
    onDragStart: u.default.func,
    // Calls on each drag movement.
    onDrag: u.default.func,
    // Calls when drag is complete.
    onDragStop: u.default.func,
    //Calls when resize starts.
    onResizeStart: u.default.func,
    // Calls when resize movement happens.
    onResize: u.default.func,
    // Calls when resize is complete.
    onResizeStop: u.default.func,
    // Calls when some element is dropped.
    onDrop: u.default.func,
    //
    // Other validations
    //
    droppingItem: u.default.shape({
      i: u.default.string.isRequired,
      w: u.default.number.isRequired,
      h: u.default.number.isRequired
    }),
    // Children must not have duplicate keys.
    children: function(C, H) {
      const G = C[H], N = {};
      c.default.Children.forEach(G, function(W) {
        if ((W == null ? void 0 : W.key) != null) {
          if (N[W.key])
            throw new Error('Duplicate child key "' + W.key + '" found! This will cause problems in ReactGridLayout.');
          N[W.key] = !0;
        }
      });
    },
    // Optional ref for getting a reference for the wrapping div.
    innerRef: u.default.any
  }, un;
}
var Hc;
function Sp() {
  if (Hc) return oi;
  Hc = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.default = void 0;
  var u = W(Ot()), c = Oo(), s = W(/* @__PURE__ */ Dn()), p = Ts(), O = wp(), C = vr(), H = Ls(), G = Xc(), N = W(No());
  function W(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function X(T, v) {
    var a = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(T);
      v && (h = h.filter(function(f) {
        return Object.getOwnPropertyDescriptor(T, f).enumerable;
      })), a.push.apply(a, h);
    }
    return a;
  }
  function A(T) {
    for (var v = 1; v < arguments.length; v++) {
      var a = arguments[v] != null ? arguments[v] : {};
      v % 2 ? X(Object(a), !0).forEach(function(h) {
        F(T, h, a[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(a)) : X(Object(a)).forEach(function(h) {
        Object.defineProperty(T, h, Object.getOwnPropertyDescriptor(a, h));
      });
    }
    return T;
  }
  function F(T, v, a) {
    return (v = ke(v)) in T ? Object.defineProperty(T, v, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : T[v] = a, T;
  }
  function ke(T) {
    var v = ye(T, "string");
    return typeof v == "symbol" ? v : v + "";
  }
  function ye(T, v) {
    if (typeof T != "object" || !T) return T;
    var a = T[Symbol.toPrimitive];
    if (a !== void 0) {
      var h = a.call(T, v);
      if (typeof h != "object") return h;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (v === "string" ? String : Number)(T);
  }
  let Q = class extends u.default.Component {
    constructor() {
      super(...arguments), F(this, "state", {
        resizing: null,
        dragging: null,
        className: ""
      }), F(this, "elementRef", /* @__PURE__ */ u.default.createRef()), F(this, "onDragStart", (v, a) => {
        let {
          node: h
        } = a;
        const {
          onDragStart: f,
          transformScale: d
        } = this.props;
        if (!f) return;
        const y = {
          top: 0,
          left: 0
        }, {
          offsetParent: k
        } = h;
        if (!k) return;
        const j = k.getBoundingClientRect(), B = h.getBoundingClientRect(), te = B.left / d, le = j.left / d, I = B.top / d, U = j.top / d;
        y.left = te - le + k.scrollLeft, y.top = I - U + k.scrollTop, this.setState({
          dragging: y
        });
        const {
          x: re,
          y: ae
        } = (0, H.calcXY)(this.getPositionParams(), y.top, y.left, this.props.w, this.props.h);
        return f.call(this, this.props.i, re, ae, {
          e: v,
          node: h,
          newPosition: y
        });
      }), F(this, "onDrag", (v, a, h) => {
        let {
          node: f,
          deltaX: d,
          deltaY: y
        } = a;
        const {
          onDrag: k
        } = this.props;
        if (!k) return;
        if (!this.state.dragging)
          throw new Error("onDrag called before onDragStart.");
        let j = this.state.dragging.top + y, B = this.state.dragging.left + d;
        const {
          isBounded: te,
          i: le,
          w: I,
          h: U,
          containerWidth: re
        } = this.props, ae = this.getPositionParams();
        if (te) {
          const {
            offsetParent: ie
          } = f;
          if (ie) {
            const {
              margin: ee,
              rowHeight: x
            } = this.props, M = ie.clientHeight - (0, H.calcGridItemWHPx)(U, x, ee[1]);
            j = (0, H.clamp)(j, 0, M);
            const we = (0, H.calcGridColWidth)(ae), xe = re - (0, H.calcGridItemWHPx)(I, we, ee[0]);
            B = (0, H.clamp)(B, 0, xe);
          }
        }
        const de = {
          top: j,
          left: B
        };
        h ? this.setState({
          dragging: de
        }) : (0, c.flushSync)(() => {
          this.setState({
            dragging: de
          });
        });
        const {
          x: ce,
          y: V
        } = (0, H.calcXY)(ae, j, B, I, U);
        return k.call(this, le, ce, V, {
          e: v,
          node: f,
          newPosition: de
        });
      }), F(this, "onDragStop", (v, a) => {
        let {
          node: h
        } = a;
        const {
          onDragStop: f
        } = this.props;
        if (!f) return;
        if (!this.state.dragging)
          throw new Error("onDragEnd called before onDragStart.");
        const {
          w: d,
          h: y,
          i: k
        } = this.props, {
          left: j,
          top: B
        } = this.state.dragging, te = {
          top: B,
          left: j
        };
        this.setState({
          dragging: null
        });
        const {
          x: le,
          y: I
        } = (0, H.calcXY)(this.getPositionParams(), B, j, d, y);
        return f.call(this, k, le, I, {
          e: v,
          node: h,
          newPosition: te
        });
      }), F(this, "onResizeStop", (v, a, h) => this.onResizeHandler(v, a, h, "onResizeStop")), F(this, "onResizeStart", (v, a, h) => this.onResizeHandler(v, a, h, "onResizeStart")), F(this, "onResize", (v, a, h) => this.onResizeHandler(v, a, h, "onResize"));
    }
    shouldComponentUpdate(v, a) {
      if (this.props.children !== v.children || this.props.droppingPosition !== v.droppingPosition) return !0;
      const h = (0, H.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state), f = (0, H.calcGridItemPosition)(this.getPositionParams(v), v.x, v.y, v.w, v.h, a);
      return !(0, C.fastPositionEqual)(h, f) || this.props.useCSSTransforms !== v.useCSSTransforms;
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
        droppingPosition: a
      } = this.props;
      if (!a) return;
      const h = this.elementRef.current;
      if (!h) return;
      const f = v.droppingPosition || {
        left: 0,
        top: 0
      }, {
        dragging: d
      } = this.state, y = d && a.left !== f.left || a.top !== f.top;
      if (!d)
        this.onDragStart(a.e, {
          node: h,
          deltaX: a.left,
          deltaY: a.top
        });
      else if (y) {
        const k = a.left - d.left, j = a.top - d.top;
        this.onDrag(
          a.e,
          {
            node: h,
            deltaX: k,
            deltaY: j
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
        usePercentages: a,
        containerWidth: h,
        useCSSTransforms: f
      } = this.props;
      let d;
      return f ? d = (0, C.setTransform)(v) : (d = (0, C.setTopLeft)(v), a && (d.left = (0, C.perc)(v.left / h), d.width = (0, C.perc)(v.width / h))), d;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */
    mixinDraggable(v, a) {
      return /* @__PURE__ */ u.default.createElement(p.DraggableCore, {
        disabled: !a,
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
    curryResizeHandler(v, a) {
      return (h, f) => (
        /*: Function*/
        a(h, f, v)
      );
    }
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */
    mixinResizable(v, a, h) {
      const {
        cols: f,
        minW: d,
        minH: y,
        maxW: k,
        maxH: j,
        transformScale: B,
        resizeHandles: te,
        resizeHandle: le
      } = this.props, I = this.getPositionParams(), U = (0, H.calcGridItemPosition)(I, 0, 0, f, 0).width, re = (0, H.calcGridItemPosition)(I, 0, 0, d, y), ae = (0, H.calcGridItemPosition)(I, 0, 0, k, j), de = [re.width, re.height], ce = [Math.min(ae.width, U), Math.min(ae.height, 1 / 0)];
      return /* @__PURE__ */ u.default.createElement(
        O.Resizable,
        {
          draggableOpts: {
            disabled: !h
          },
          className: h ? void 0 : "react-resizable-hide",
          width: a.width,
          height: a.height,
          minConstraints: de,
          maxConstraints: ce,
          onResizeStop: this.curryResizeHandler(a, this.onResizeStop),
          onResizeStart: this.curryResizeHandler(a, this.onResizeStart),
          onResize: this.curryResizeHandler(a, this.onResize),
          transformScale: B,
          resizeHandles: te,
          handle: le
        },
        v
      );
    }
    /**
     * Wrapper around resize events to provide more useful data.
     */
    onResizeHandler(v, a, h, f) {
      let {
        node: d,
        size: y,
        handle: k
      } = a;
      const j = this.props[f];
      if (!j) return;
      const {
        x: B,
        y: te,
        i: le,
        maxH: I,
        minH: U,
        containerWidth: re
      } = this.props, {
        minW: ae,
        maxW: de
      } = this.props;
      let ce = y;
      d && (ce = (0, C.resizeItemInDirection)(k, h, y, re), (0, c.flushSync)(() => {
        this.setState({
          resizing: f === "onResizeStop" ? null : ce
        });
      }));
      let {
        w: V,
        h: ie
      } = (0, H.calcWH)(this.getPositionParams(), ce.width, ce.height, B, te, k);
      V = (0, H.clamp)(V, Math.max(ae, 1), de), ie = (0, H.clamp)(ie, U, I), j.call(this, le, V, ie, {
        e: v,
        node: d,
        size: ce,
        handle: k
      });
    }
    render() {
      const {
        x: v,
        y: a,
        w: h,
        h: f,
        isDraggable: d,
        isResizable: y,
        droppingPosition: k,
        useCSSTransforms: j
      } = this.props, B = (0, H.calcGridItemPosition)(this.getPositionParams(), v, a, h, f, this.state), te = u.default.Children.only(this.props.children);
      let le = /* @__PURE__ */ u.default.cloneElement(te, {
        ref: this.elementRef,
        className: (0, N.default)("react-grid-item", te.props.className, this.props.className, {
          static: this.props.static,
          resizing: !!this.state.resizing,
          "react-draggable": d,
          "react-draggable-dragging": !!this.state.dragging,
          dropping: !!k,
          cssTransforms: j
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: A(A(A({}, this.props.style), te.props.style), this.createStyle(B))
      });
      return le = this.mixinResizable(le, B, y), le = this.mixinDraggable(le, d), le;
    }
  };
  return oi.default = Q, F(Q, "propTypes", {
    // Children must be only a single element
    children: s.default.element,
    // General grid attributes
    cols: s.default.number.isRequired,
    containerWidth: s.default.number.isRequired,
    rowHeight: s.default.number.isRequired,
    margin: s.default.array.isRequired,
    maxRows: s.default.number.isRequired,
    containerPadding: s.default.array.isRequired,
    // These are all in grid units
    x: s.default.number.isRequired,
    y: s.default.number.isRequired,
    w: s.default.number.isRequired,
    h: s.default.number.isRequired,
    // All optional
    minW: function(T, v) {
      const a = T[v];
      if (typeof a != "number") return new Error("minWidth not Number");
      if (a > T.w || a > T.maxW) return new Error("minWidth larger than item width/maxWidth");
    },
    maxW: function(T, v) {
      const a = T[v];
      if (typeof a != "number") return new Error("maxWidth not Number");
      if (a < T.w || a < T.minW) return new Error("maxWidth smaller than item width/minWidth");
    },
    minH: function(T, v) {
      const a = T[v];
      if (typeof a != "number") return new Error("minHeight not Number");
      if (a > T.h || a > T.maxH) return new Error("minHeight larger than item height/maxHeight");
    },
    maxH: function(T, v) {
      const a = T[v];
      if (typeof a != "number") return new Error("maxHeight not Number");
      if (a < T.h || a < T.minH) return new Error("maxHeight smaller than item height/minHeight");
    },
    // ID is nice to have for callbacks
    i: s.default.string.isRequired,
    // Resize handle options
    resizeHandles: G.resizeHandleAxesType,
    resizeHandle: G.resizeHandleType,
    // Functions
    onDragStop: s.default.func,
    onDragStart: s.default.func,
    onDrag: s.default.func,
    onResizeStop: s.default.func,
    onResizeStart: s.default.func,
    onResize: s.default.func,
    // Flags
    isDraggable: s.default.bool.isRequired,
    isResizable: s.default.bool.isRequired,
    isBounded: s.default.bool.isRequired,
    static: s.default.bool,
    // Use CSS transforms instead of top/left
    useCSSTransforms: s.default.bool.isRequired,
    transformScale: s.default.number,
    // Others
    className: s.default.string,
    // Selector for draggable handle
    handle: s.default.string,
    // Selector for draggable cancel (see react-draggable)
    cancel: s.default.string,
    // Current position of a dropping element
    droppingPosition: s.default.shape({
      e: s.default.object.isRequired,
      left: s.default.number.isRequired,
      top: s.default.number.isRequired
    })
  }), F(Q, "defaultProps", {
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
var Wc;
function Qc() {
  if (Wc) return ii;
  Wc = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.default = void 0;
  var u = N(Ot()), c = /* @__PURE__ */ Ns(), s = G(No()), p = vr(), O = Ls(), C = G(Sp()), H = G(Xc());
  function G(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function N(v, a) {
    if (typeof WeakMap == "function") var h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap();
    return (N = function(d, y) {
      if (!y && d && d.__esModule) return d;
      var k, j, B = { __proto__: null, default: d };
      if (d === null || typeof d != "object" && typeof d != "function") return B;
      if (k = y ? f : h) {
        if (k.has(d)) return k.get(d);
        k.set(d, B);
      }
      for (const te in d) te !== "default" && {}.hasOwnProperty.call(d, te) && ((j = (k = Object.defineProperty) && Object.getOwnPropertyDescriptor(d, te)) && (j.get || j.set) ? k(B, te, j) : B[te] = d[te]);
      return B;
    })(v, a);
  }
  function W(v, a) {
    var h = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(v);
      a && (f = f.filter(function(d) {
        return Object.getOwnPropertyDescriptor(v, d).enumerable;
      })), h.push.apply(h, f);
    }
    return h;
  }
  function X(v) {
    for (var a = 1; a < arguments.length; a++) {
      var h = arguments[a] != null ? arguments[a] : {};
      a % 2 ? W(Object(h), !0).forEach(function(f) {
        A(v, f, h[f]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(h)) : W(Object(h)).forEach(function(f) {
        Object.defineProperty(v, f, Object.getOwnPropertyDescriptor(h, f));
      });
    }
    return v;
  }
  function A(v, a, h) {
    return (a = F(a)) in v ? Object.defineProperty(v, a, { value: h, enumerable: !0, configurable: !0, writable: !0 }) : v[a] = h, v;
  }
  function F(v) {
    var a = ke(v, "string");
    return typeof a == "symbol" ? a : a + "";
  }
  function ke(v, a) {
    if (typeof v != "object" || !v) return v;
    var h = v[Symbol.toPrimitive];
    if (h !== void 0) {
      var f = h.call(v, a);
      if (typeof f != "object") return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(v);
  }
  const ye = "react-grid-layout";
  let Q = !1;
  try {
    Q = /firefox/i.test(navigator.userAgent);
  } catch {
  }
  let T = class extends u.Component {
    constructor() {
      super(...arguments), A(this, "state", {
        activeDrag: null,
        layout: (0, p.synchronizeLayoutWithChildren)(
          this.props.layout,
          this.props.children,
          this.props.cols,
          // Legacy support for verticalCompact: false
          (0, p.compactType)(this.props),
          this.props.allowOverlap
        ),
        mounted: !1,
        oldDragItem: null,
        oldLayout: null,
        oldResizeItem: null,
        resizing: !1,
        droppingDOMNode: null,
        children: []
      }), A(this, "dragEnterCounter", 0), A(this, "onDragStart", (a, h, f, d) => {
        let {
          e: y,
          node: k
        } = d;
        const {
          layout: j
        } = this.state, B = (0, p.getLayoutItem)(j, a);
        if (!B) return;
        const te = {
          w: B.w,
          h: B.h,
          x: B.x,
          y: B.y,
          placeholder: !0,
          i: a
        };
        return this.setState({
          oldDragItem: (0, p.cloneLayoutItem)(B),
          oldLayout: j,
          activeDrag: te
        }), this.props.onDragStart(j, B, B, null, y, k);
      }), A(this, "onDrag", (a, h, f, d) => {
        let {
          e: y,
          node: k
        } = d;
        const {
          oldDragItem: j
        } = this.state;
        let {
          layout: B
        } = this.state;
        const {
          cols: te,
          allowOverlap: le,
          preventCollision: I
        } = this.props, U = (0, p.getLayoutItem)(B, a);
        if (!U) return;
        const re = {
          w: U.w,
          h: U.h,
          x: U.x,
          y: U.y,
          placeholder: !0,
          i: a
        };
        B = (0, p.moveElement)(B, U, h, f, !0, I, (0, p.compactType)(this.props), te, le), this.props.onDrag(B, j, U, re, y, k), this.setState({
          layout: le ? B : (0, p.compact)(B, (0, p.compactType)(this.props), te),
          activeDrag: re
        });
      }), A(this, "onDragStop", (a, h, f, d) => {
        let {
          e: y,
          node: k
        } = d;
        if (!this.state.activeDrag) return;
        const {
          oldDragItem: j
        } = this.state;
        let {
          layout: B
        } = this.state;
        const {
          cols: te,
          preventCollision: le,
          allowOverlap: I
        } = this.props, U = (0, p.getLayoutItem)(B, a);
        if (!U) return;
        B = (0, p.moveElement)(B, U, h, f, !0, le, (0, p.compactType)(this.props), te, I);
        const ae = I ? B : (0, p.compact)(B, (0, p.compactType)(this.props), te);
        this.props.onDragStop(ae, j, U, null, y, k);
        const {
          oldLayout: de
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: ae,
          oldDragItem: null,
          oldLayout: null
        }), this.onLayoutMaybeChanged(ae, de);
      }), A(this, "onResizeStart", (a, h, f, d) => {
        let {
          e: y,
          node: k
        } = d;
        const {
          layout: j
        } = this.state, B = (0, p.getLayoutItem)(j, a);
        B && (this.setState({
          oldResizeItem: (0, p.cloneLayoutItem)(B),
          oldLayout: this.state.layout,
          resizing: !0
        }), this.props.onResizeStart(j, B, B, null, y, k));
      }), A(this, "onResize", (a, h, f, d) => {
        let {
          e: y,
          node: k,
          size: j,
          handle: B
        } = d;
        const {
          oldResizeItem: te
        } = this.state, {
          layout: le
        } = this.state, {
          cols: I,
          preventCollision: U,
          allowOverlap: re
        } = this.props;
        let ae = !1, de, ce, V;
        const [ie, ee] = (0, p.withLayoutItem)(le, a, (M) => {
          let we;
          return ce = M.x, V = M.y, ["sw", "w", "nw", "n", "ne"].indexOf(B) !== -1 && (["sw", "nw", "w"].indexOf(B) !== -1 && (ce = M.x + (M.w - h), h = M.x !== ce && ce < 0 ? M.w : h, ce = ce < 0 ? 0 : ce), ["ne", "n", "nw"].indexOf(B) !== -1 && (V = M.y + (M.h - f), f = M.y !== V && V < 0 ? M.h : f, V = V < 0 ? 0 : V), ae = !0), U && !re && (we = (0, p.getAllCollisions)(le, X(X({}, M), {}, {
            w: h,
            h: f,
            x: ce,
            y: V
          })).filter((Oe) => Oe.i !== M.i).length > 0, we && (V = M.y, f = M.h, ce = M.x, h = M.w, ae = !1)), M.w = h, M.h = f, M;
        });
        if (!ee) return;
        de = ie, ae && (de = (0, p.moveElement)(ie, ee, ce, V, !0, this.props.preventCollision, (0, p.compactType)(this.props), I, re));
        const x = {
          w: ee.w,
          h: ee.h,
          x: ee.x,
          y: ee.y,
          static: !0,
          i: a
        };
        this.props.onResize(de, te, ee, x, y, k), this.setState({
          layout: re ? de : (0, p.compact)(de, (0, p.compactType)(this.props), I),
          activeDrag: x
        });
      }), A(this, "onResizeStop", (a, h, f, d) => {
        let {
          e: y,
          node: k
        } = d;
        const {
          layout: j,
          oldResizeItem: B
        } = this.state, {
          cols: te,
          allowOverlap: le
        } = this.props, I = (0, p.getLayoutItem)(j, a), U = le ? j : (0, p.compact)(j, (0, p.compactType)(this.props), te);
        this.props.onResizeStop(U, B, I, null, y, k);
        const {
          oldLayout: re
        } = this.state;
        this.setState({
          activeDrag: null,
          layout: U,
          oldResizeItem: null,
          oldLayout: null,
          resizing: !1
        }), this.onLayoutMaybeChanged(U, re);
      }), A(this, "onDragOver", (a) => {
        var h;
        if (a.preventDefault(), a.stopPropagation(), Q && // $FlowIgnore can't figure this out
        !((h = a.nativeEvent.target) !== null && h !== void 0 && h.classList.contains(ye)))
          return !1;
        const {
          droppingItem: f,
          onDropDragOver: d,
          margin: y,
          cols: k,
          rowHeight: j,
          maxRows: B,
          width: te,
          containerPadding: le,
          transformScale: I
        } = this.props, U = d == null ? void 0 : d(a);
        if (U === !1)
          return this.state.droppingDOMNode && this.removeDroppingPlaceholder(), !1;
        const re = X(X({}, f), U), {
          layout: ae
        } = this.state, de = a.currentTarget.getBoundingClientRect(), ce = a.clientX - de.left, V = a.clientY - de.top, ie = {
          left: ce / I,
          top: V / I,
          e: a
        };
        if (this.state.droppingDOMNode) {
          if (this.state.droppingPosition) {
            const {
              left: ee,
              top: x
            } = this.state.droppingPosition;
            (ee != ce || x != V) && this.setState({
              droppingPosition: ie
            });
          }
        } else {
          const ee = {
            cols: k,
            margin: y,
            maxRows: B,
            rowHeight: j,
            containerWidth: te,
            containerPadding: le || y
          }, x = (0, O.calcXY)(ee, V, ce, re.w, re.h);
          this.setState({
            droppingDOMNode: /* @__PURE__ */ u.createElement("div", {
              key: re.i
            }),
            droppingPosition: ie,
            layout: [...ae, X(X({}, re), {}, {
              x: x.x,
              y: x.y,
              static: !1,
              isDraggable: !0
            })]
          });
        }
      }), A(this, "removeDroppingPlaceholder", () => {
        const {
          droppingItem: a,
          cols: h
        } = this.props, {
          layout: f
        } = this.state, d = (0, p.compact)(f.filter((y) => y.i !== a.i), (0, p.compactType)(this.props), h, this.props.allowOverlap);
        this.setState({
          layout: d,
          droppingDOMNode: null,
          activeDrag: null,
          droppingPosition: void 0
        });
      }), A(this, "onDragLeave", (a) => {
        a.preventDefault(), a.stopPropagation(), this.dragEnterCounter--, this.dragEnterCounter === 0 && this.removeDroppingPlaceholder();
      }), A(this, "onDragEnter", (a) => {
        a.preventDefault(), a.stopPropagation(), this.dragEnterCounter++;
      }), A(this, "onDrop", (a) => {
        a.preventDefault(), a.stopPropagation();
        const {
          droppingItem: h
        } = this.props, {
          layout: f
        } = this.state, d = f.find((y) => y.i === h.i);
        this.dragEnterCounter = 0, this.removeDroppingPlaceholder(), this.props.onDrop(f, d, a);
      });
    }
    componentDidMount() {
      this.setState({
        mounted: !0
      }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
    static getDerivedStateFromProps(a, h) {
      let f;
      return h.activeDrag ? null : (!(0, c.deepEqual)(a.layout, h.propsLayout) || a.compactType !== h.compactType ? f = a.layout : (0, p.childrenEqual)(a.children, h.children) || (f = h.layout), f ? {
        layout: (0, p.synchronizeLayoutWithChildren)(f, a.children, a.cols, (0, p.compactType)(a), a.allowOverlap),
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: a.compactType,
        children: a.children,
        propsLayout: a.layout
      } : null);
    }
    shouldComponentUpdate(a, h) {
      return (
        // NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== a.children || !(0, p.fastRGLPropsEqual)(this.props, a, c.deepEqual) || this.state.activeDrag !== h.activeDrag || this.state.mounted !== h.mounted || this.state.droppingPosition !== h.droppingPosition
      );
    }
    componentDidUpdate(a, h) {
      if (!this.state.activeDrag) {
        const f = this.state.layout, d = h.layout;
        this.onLayoutMaybeChanged(f, d);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */
    containerHeight() {
      if (!this.props.autoSize) return;
      const a = (0, p.bottom)(this.state.layout), h = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return a * this.props.rowHeight + (a - 1) * this.props.margin[1] + h * 2 + "px";
    }
    onLayoutMaybeChanged(a, h) {
      h || (h = this.state.layout), (0, c.deepEqual)(h, a) || this.props.onLayoutChange(a);
    }
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    placeholder() {
      const {
        activeDrag: a
      } = this.state;
      if (!a) return null;
      const {
        width: h,
        cols: f,
        margin: d,
        containerPadding: y,
        rowHeight: k,
        maxRows: j,
        useCSSTransforms: B,
        transformScale: te
      } = this.props;
      return /* @__PURE__ */ u.createElement(C.default, {
        w: a.w,
        h: a.h,
        x: a.x,
        y: a.y,
        i: a.i,
        className: "react-grid-placeholder ".concat(this.state.resizing ? "placeholder-resizing" : ""),
        containerWidth: h,
        cols: f,
        margin: d,
        containerPadding: y || d,
        maxRows: j,
        rowHeight: k,
        isDraggable: !1,
        isResizable: !1,
        isBounded: !1,
        useCSSTransforms: B,
        transformScale: te
      }, /* @__PURE__ */ u.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */
    processGridItem(a, h) {
      if (!a || !a.key) return;
      const f = (0, p.getLayoutItem)(this.state.layout, String(a.key));
      if (!f) return null;
      const {
        width: d,
        cols: y,
        margin: k,
        containerPadding: j,
        rowHeight: B,
        maxRows: te,
        isDraggable: le,
        isResizable: I,
        isBounded: U,
        useCSSTransforms: re,
        transformScale: ae,
        draggableCancel: de,
        draggableHandle: ce,
        resizeHandles: V,
        resizeHandle: ie
      } = this.props, {
        mounted: ee,
        droppingPosition: x
      } = this.state, M = typeof f.isDraggable == "boolean" ? f.isDraggable : !f.static && le, we = typeof f.isResizable == "boolean" ? f.isResizable : !f.static && I, xe = f.resizeHandles || V, Oe = M && U && f.isBounded !== !1;
      return /* @__PURE__ */ u.createElement(C.default, {
        containerWidth: d,
        cols: y,
        margin: k,
        containerPadding: j || k,
        maxRows: te,
        rowHeight: B,
        cancel: de,
        handle: ce,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: M,
        isResizable: we,
        isBounded: Oe,
        useCSSTransforms: re && ee,
        usePercentages: !ee,
        transformScale: ae,
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
        droppingPosition: h ? x : void 0,
        resizeHandles: xe,
        resizeHandle: ie
      }, a);
    }
    render() {
      const {
        className: a,
        style: h,
        isDroppable: f,
        innerRef: d
      } = this.props, y = (0, s.default)(ye, a), k = X({
        height: this.containerHeight()
      }, h);
      return /* @__PURE__ */ u.createElement("div", {
        ref: d,
        className: y,
        style: k,
        onDrop: f ? this.onDrop : p.noop,
        onDragLeave: f ? this.onDragLeave : p.noop,
        onDragEnter: f ? this.onDragEnter : p.noop,
        onDragOver: f ? this.onDragOver : p.noop
      }, u.Children.map(this.props.children, (j) => this.processGridItem(j)), f && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder());
    }
  };
  return ii.default = T, A(T, "displayName", "ReactGridLayout"), A(T, "propTypes", H.default), A(T, "defaultProps", {
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
    onLayoutChange: p.noop,
    onDragStart: p.noop,
    onDrag: p.noop,
    onDragStop: p.noop,
    onResizeStart: p.noop,
    onResize: p.noop,
    onResizeStop: p.noop,
    onDrop: p.noop,
    onDropDragOver: p.noop
  }), ii;
}
var fi = {}, $n = {}, Ac;
function Kc() {
  if (Ac) return $n;
  Ac = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.findOrGenerateResponsiveLayout = p, $n.getBreakpointFromWidth = c, $n.getColsFromBreakpoint = s, $n.sortBreakpoints = O;
  var u = vr();
  function c(C, H) {
    const G = O(C);
    let N = G[0];
    for (let W = 1, X = G.length; W < X; W++) {
      const A = G[W];
      H > C[A] && (N = A);
    }
    return N;
  }
  function s(C, H) {
    if (!H[C])
      throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + C + " is missing!");
    return H[C];
  }
  function p(C, H, G, N, W, X) {
    if (C[G]) return (0, u.cloneLayout)(C[G]);
    let A = C[N];
    const F = O(H), ke = F.slice(F.indexOf(G));
    for (let ye = 0, Q = ke.length; ye < Q; ye++) {
      const T = ke[ye];
      if (C[T]) {
        A = C[T];
        break;
      }
    }
    return A = (0, u.cloneLayout)(A || []), (0, u.compact)((0, u.correctBounds)(A, {
      cols: W
    }), X, W);
  }
  function O(C) {
    return Object.keys(C).sort(function(G, N) {
      return C[G] - C[N];
    });
  }
  return $n;
}
var Fc;
function _p() {
  if (Fc) return fi;
  Fc = 1, Object.defineProperty(fi, "__esModule", {
    value: !0
  }), fi.default = void 0;
  var u = N(Ot()), c = G(/* @__PURE__ */ Dn()), s = /* @__PURE__ */ Ns(), p = vr(), O = Kc(), C = G(Qc());
  const H = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];
  function G(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function N(f, d) {
    if (typeof WeakMap == "function") var y = /* @__PURE__ */ new WeakMap(), k = /* @__PURE__ */ new WeakMap();
    return (N = function(j, B) {
      if (!B && j && j.__esModule) return j;
      var te, le, I = { __proto__: null, default: j };
      if (j === null || typeof j != "object" && typeof j != "function") return I;
      if (te = B ? k : y) {
        if (te.has(j)) return te.get(j);
        te.set(j, I);
      }
      for (const U in j) U !== "default" && {}.hasOwnProperty.call(j, U) && ((le = (te = Object.defineProperty) && Object.getOwnPropertyDescriptor(j, U)) && (le.get || le.set) ? te(I, U, le) : I[U] = j[U]);
      return I;
    })(f, d);
  }
  function W() {
    return W = Object.assign ? Object.assign.bind() : function(f) {
      for (var d = 1; d < arguments.length; d++) {
        var y = arguments[d];
        for (var k in y) ({}).hasOwnProperty.call(y, k) && (f[k] = y[k]);
      }
      return f;
    }, W.apply(null, arguments);
  }
  function X(f, d) {
    if (f == null) return {};
    var y, k, j = A(f, d);
    if (Object.getOwnPropertySymbols) {
      var B = Object.getOwnPropertySymbols(f);
      for (k = 0; k < B.length; k++) y = B[k], d.indexOf(y) === -1 && {}.propertyIsEnumerable.call(f, y) && (j[y] = f[y]);
    }
    return j;
  }
  function A(f, d) {
    if (f == null) return {};
    var y = {};
    for (var k in f) if ({}.hasOwnProperty.call(f, k)) {
      if (d.indexOf(k) !== -1) continue;
      y[k] = f[k];
    }
    return y;
  }
  function F(f, d) {
    var y = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(f);
      d && (k = k.filter(function(j) {
        return Object.getOwnPropertyDescriptor(f, j).enumerable;
      })), y.push.apply(y, k);
    }
    return y;
  }
  function ke(f) {
    for (var d = 1; d < arguments.length; d++) {
      var y = arguments[d] != null ? arguments[d] : {};
      d % 2 ? F(Object(y), !0).forEach(function(k) {
        ye(f, k, y[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(y)) : F(Object(y)).forEach(function(k) {
        Object.defineProperty(f, k, Object.getOwnPropertyDescriptor(y, k));
      });
    }
    return f;
  }
  function ye(f, d, y) {
    return (d = Q(d)) in f ? Object.defineProperty(f, d, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : f[d] = y, f;
  }
  function Q(f) {
    var d = T(f, "string");
    return typeof d == "symbol" ? d : d + "";
  }
  function T(f, d) {
    if (typeof f != "object" || !f) return f;
    var y = f[Symbol.toPrimitive];
    if (y !== void 0) {
      var k = y.call(f, d);
      if (typeof k != "object") return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(f);
  }
  const v = (f) => Object.prototype.toString.call(f);
  function a(f, d) {
    return f == null ? null : Array.isArray(f) ? f : f[d];
  }
  let h = class extends u.Component {
    constructor() {
      super(...arguments), ye(this, "state", this.generateInitialState()), ye(this, "onLayoutChange", (d) => {
        this.props.onLayoutChange(d, ke(ke({}, this.props.layouts), {}, {
          [this.state.breakpoint]: d
        }));
      });
    }
    generateInitialState() {
      const {
        width: d,
        breakpoints: y,
        layouts: k,
        cols: j
      } = this.props, B = (0, O.getBreakpointFromWidth)(y, d), te = (0, O.getColsFromBreakpoint)(B, j), le = this.props.verticalCompact === !1 ? null : this.props.compactType;
      return {
        layout: (0, O.findOrGenerateResponsiveLayout)(k, y, B, B, te, le),
        breakpoint: B,
        cols: te
      };
    }
    static getDerivedStateFromProps(d, y) {
      if (!(0, s.deepEqual)(d.layouts, y.layouts)) {
        const {
          breakpoint: k,
          cols: j
        } = y;
        return {
          layout: (0, O.findOrGenerateResponsiveLayout)(d.layouts, d.breakpoints, k, k, j, d.compactType),
          layouts: d.layouts
        };
      }
      return null;
    }
    componentDidUpdate(d) {
      (this.props.width != d.width || this.props.breakpoint !== d.breakpoint || !(0, s.deepEqual)(this.props.breakpoints, d.breakpoints) || !(0, s.deepEqual)(this.props.cols, d.cols)) && this.onWidthChange(d);
    }
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    onWidthChange(d) {
      const {
        breakpoints: y,
        cols: k,
        layouts: j,
        compactType: B
      } = this.props, te = this.props.breakpoint || (0, O.getBreakpointFromWidth)(this.props.breakpoints, this.props.width), le = this.state.breakpoint, I = (0, O.getColsFromBreakpoint)(te, k), U = ke({}, j);
      if (le !== te || d.breakpoints !== y || d.cols !== k) {
        le in U || (U[le] = (0, p.cloneLayout)(this.state.layout));
        let de = (0, O.findOrGenerateResponsiveLayout)(U, y, te, le, I, B);
        de = (0, p.synchronizeLayoutWithChildren)(de, this.props.children, I, B, this.props.allowOverlap), U[te] = de, this.props.onBreakpointChange(te, I), this.props.onLayoutChange(de, U), this.setState({
          breakpoint: te,
          layout: de,
          cols: I
        });
      }
      const re = a(this.props.margin, te), ae = a(this.props.containerPadding, te);
      this.props.onWidthChange(this.props.width, re, I, ae);
    }
    render() {
      const d = this.props, {
        breakpoint: y,
        breakpoints: k,
        cols: j,
        layouts: B,
        margin: te,
        containerPadding: le,
        onBreakpointChange: I,
        onLayoutChange: U,
        onWidthChange: re
      } = d, ae = X(d, H);
      return /* @__PURE__ */ u.createElement(C.default, W({}, ae, {
        // $FlowIgnore should allow nullable here due to DefaultProps
        margin: a(te, this.state.breakpoint),
        containerPadding: a(le, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  };
  return fi.default = h, ye(h, "propTypes", {
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
    layouts(f, d) {
      if (v(f[d]) !== "[object Object]")
        throw new Error("Layout property must be an object. Received: " + v(f[d]));
      Object.keys(f[d]).forEach((y) => {
        if (!(y in f.breakpoints))
          throw new Error("Each key in layouts must align with a key in breakpoints.");
        (0, p.validateLayout)(f.layouts[y], "layouts." + y);
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
  }), ye(h, "defaultProps", {
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
    onBreakpointChange: p.noop,
    onLayoutChange: p.noop,
    onWidthChange: p.noop
  }), fi;
}
var Ro = {}, Zc = function() {
  if (typeof Map < "u")
    return Map;
  function u(c, s) {
    var p = -1;
    return c.some(function(O, C) {
      return O[0] === s ? (p = C, !0) : !1;
    }), p;
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
      }), c.prototype.get = function(s) {
        var p = u(this.__entries__, s), O = this.__entries__[p];
        return O && O[1];
      }, c.prototype.set = function(s, p) {
        var O = u(this.__entries__, s);
        ~O ? this.__entries__[O][1] = p : this.__entries__.push([s, p]);
      }, c.prototype.delete = function(s) {
        var p = this.__entries__, O = u(p, s);
        ~O && p.splice(O, 1);
      }, c.prototype.has = function(s) {
        return !!~u(this.__entries__, s);
      }, c.prototype.clear = function() {
        this.__entries__.splice(0);
      }, c.prototype.forEach = function(s, p) {
        p === void 0 && (p = null);
        for (var O = 0, C = this.__entries__; O < C.length; O++) {
          var H = C[O];
          s.call(p, H[1], H[0]);
        }
      }, c;
    }()
  );
}(), Ps = typeof window < "u" && typeof document < "u" && window.document === document, Po = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), xp = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Po) : function(u) {
    return setTimeout(function() {
      return u(Date.now());
    }, 1e3 / 60);
  };
}(), Ep = 2;
function kp(u, c) {
  var s = !1, p = !1, O = 0;
  function C() {
    s && (s = !1, u()), p && G();
  }
  function H() {
    xp(C);
  }
  function G() {
    var N = Date.now();
    if (s) {
      if (N - O < Ep)
        return;
      p = !0;
    } else
      s = !0, p = !1, setTimeout(H, c);
    O = N;
  }
  return G;
}
var Rp = 20, zp = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Op = typeof MutationObserver < "u", Pp = (
  /** @class */
  function() {
    function u() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = kp(this.refresh.bind(this), Rp);
    }
    return u.prototype.addObserver = function(c) {
      ~this.observers_.indexOf(c) || this.observers_.push(c), this.connected_ || this.connect_();
    }, u.prototype.removeObserver = function(c) {
      var s = this.observers_, p = s.indexOf(c);
      ~p && s.splice(p, 1), !s.length && this.connected_ && this.disconnect_();
    }, u.prototype.refresh = function() {
      var c = this.updateObservers_();
      c && this.refresh();
    }, u.prototype.updateObservers_ = function() {
      var c = this.observers_.filter(function(s) {
        return s.gatherActive(), s.hasActive();
      });
      return c.forEach(function(s) {
        return s.broadcastActive();
      }), c.length > 0;
    }, u.prototype.connect_ = function() {
      !Ps || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Op ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, u.prototype.disconnect_ = function() {
      !Ps || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, u.prototype.onTransitionEnd_ = function(c) {
      var s = c.propertyName, p = s === void 0 ? "" : s, O = zp.some(function(C) {
        return !!~p.indexOf(C);
      });
      O && this.refresh();
    }, u.getInstance = function() {
      return this.instance_ || (this.instance_ = new u()), this.instance_;
    }, u.instance_ = null, u;
  }()
), Jc = function(u, c) {
  for (var s = 0, p = Object.keys(c); s < p.length; s++) {
    var O = p[s];
    Object.defineProperty(u, O, {
      value: c[O],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return u;
}, yr = function(u) {
  var c = u && u.ownerDocument && u.ownerDocument.defaultView;
  return c || Po;
}, ef = Lo(0, 0, 0, 0);
function Co(u) {
  return parseFloat(u) || 0;
}
function Bc(u) {
  for (var c = [], s = 1; s < arguments.length; s++)
    c[s - 1] = arguments[s];
  return c.reduce(function(p, O) {
    var C = u["border-" + O + "-width"];
    return p + Co(C);
  }, 0);
}
function Cp(u) {
  for (var c = ["top", "right", "bottom", "left"], s = {}, p = 0, O = c; p < O.length; p++) {
    var C = O[p], H = u["padding-" + C];
    s[C] = Co(H);
  }
  return s;
}
function Dp(u) {
  var c = u.getBBox();
  return Lo(0, 0, c.width, c.height);
}
function Np(u) {
  var c = u.clientWidth, s = u.clientHeight;
  if (!c && !s)
    return ef;
  var p = yr(u).getComputedStyle(u), O = Cp(p), C = O.left + O.right, H = O.top + O.bottom, G = Co(p.width), N = Co(p.height);
  if (p.boxSizing === "border-box" && (Math.round(G + C) !== c && (G -= Bc(p, "left", "right") + C), Math.round(N + H) !== s && (N -= Bc(p, "top", "bottom") + H)), !Tp(u)) {
    var W = Math.round(G + C) - c, X = Math.round(N + H) - s;
    Math.abs(W) !== 1 && (G -= W), Math.abs(X) !== 1 && (N -= X);
  }
  return Lo(O.left, O.top, G, N);
}
var Lp = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(u) {
    return u instanceof yr(u).SVGGraphicsElement;
  } : function(u) {
    return u instanceof yr(u).SVGElement && typeof u.getBBox == "function";
  };
}();
function Tp(u) {
  return u === yr(u).document.documentElement;
}
function Mp(u) {
  return Ps ? Lp(u) ? Dp(u) : Np(u) : ef;
}
function jp(u) {
  var c = u.x, s = u.y, p = u.width, O = u.height, C = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, H = Object.create(C.prototype);
  return Jc(H, {
    x: c,
    y: s,
    width: p,
    height: O,
    top: s,
    right: c + p,
    bottom: O + s,
    left: c
  }), H;
}
function Lo(u, c, s, p) {
  return { x: u, y: c, width: s, height: p };
}
var bp = (
  /** @class */
  function() {
    function u(c) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Lo(0, 0, 0, 0), this.target = c;
    }
    return u.prototype.isActive = function() {
      var c = Mp(this.target);
      return this.contentRect_ = c, c.width !== this.broadcastWidth || c.height !== this.broadcastHeight;
    }, u.prototype.broadcastRect = function() {
      var c = this.contentRect_;
      return this.broadcastWidth = c.width, this.broadcastHeight = c.height, c;
    }, u;
  }()
), Ip = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(c, s) {
      var p = jp(s);
      Jc(this, { target: c, contentRect: p });
    }
    return u;
  }()
), Hp = (
  /** @class */
  function() {
    function u(c, s, p) {
      if (this.activeObservations_ = [], this.observations_ = new Zc(), typeof c != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = c, this.controller_ = s, this.callbackCtx_ = p;
    }
    return u.prototype.observe = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(c) || (s.set(c, new bp(c)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, u.prototype.unobserve = function(c) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(c instanceof yr(c).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(c) && (s.delete(c), s.size || this.controller_.removeObserver(this));
      }
    }, u.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, u.prototype.gatherActive = function() {
      var c = this;
      this.clearActive(), this.observations_.forEach(function(s) {
        s.isActive() && c.activeObservations_.push(s);
      });
    }, u.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var c = this.callbackCtx_, s = this.activeObservations_.map(function(p) {
          return new Ip(p.target, p.broadcastRect());
        });
        this.callback_.call(c, s, c), this.clearActive();
      }
    }, u.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, u.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, u;
  }()
), tf = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Zc(), nf = (
  /** @class */
  /* @__PURE__ */ function() {
    function u(c) {
      if (!(this instanceof u))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = Pp.getInstance(), p = new Hp(c, s, this);
      tf.set(this, p);
    }
    return u;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(u) {
  nf.prototype[u] = function() {
    var c;
    return (c = tf.get(this))[u].apply(c, arguments);
  };
});
var Wp = function() {
  return typeof Po.ResizeObserver < "u" ? Po.ResizeObserver : nf;
}();
const Ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wp
}, Symbol.toStringTag, { value: "Module" })), Fp = /* @__PURE__ */ ep(Ap);
var qc;
function Bp() {
  if (qc) return Ro;
  qc = 1, Object.defineProperty(Ro, "__esModule", {
    value: !0
  }), Ro.default = ye;
  var u = H(Ot()), c = C(/* @__PURE__ */ Dn()), s = C(Fp), p = C(No());
  const O = ["measureBeforeMount"];
  function C(Q) {
    return Q && Q.__esModule ? Q : { default: Q };
  }
  function H(Q, T) {
    if (typeof WeakMap == "function") var v = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (H = function(h, f) {
      if (!f && h && h.__esModule) return h;
      var d, y, k = { __proto__: null, default: h };
      if (h === null || typeof h != "object" && typeof h != "function") return k;
      if (d = f ? a : v) {
        if (d.has(h)) return d.get(h);
        d.set(h, k);
      }
      for (const j in h) j !== "default" && {}.hasOwnProperty.call(h, j) && ((y = (d = Object.defineProperty) && Object.getOwnPropertyDescriptor(h, j)) && (y.get || y.set) ? d(k, j, y) : k[j] = h[j]);
      return k;
    })(Q, T);
  }
  function G() {
    return G = Object.assign ? Object.assign.bind() : function(Q) {
      for (var T = 1; T < arguments.length; T++) {
        var v = arguments[T];
        for (var a in v) ({}).hasOwnProperty.call(v, a) && (Q[a] = v[a]);
      }
      return Q;
    }, G.apply(null, arguments);
  }
  function N(Q, T) {
    if (Q == null) return {};
    var v, a, h = W(Q, T);
    if (Object.getOwnPropertySymbols) {
      var f = Object.getOwnPropertySymbols(Q);
      for (a = 0; a < f.length; a++) v = f[a], T.indexOf(v) === -1 && {}.propertyIsEnumerable.call(Q, v) && (h[v] = Q[v]);
    }
    return h;
  }
  function W(Q, T) {
    if (Q == null) return {};
    var v = {};
    for (var a in Q) if ({}.hasOwnProperty.call(Q, a)) {
      if (T.indexOf(a) !== -1) continue;
      v[a] = Q[a];
    }
    return v;
  }
  function X(Q, T, v) {
    return (T = A(T)) in Q ? Object.defineProperty(Q, T, { value: v, enumerable: !0, configurable: !0, writable: !0 }) : Q[T] = v, Q;
  }
  function A(Q) {
    var T = F(Q, "string");
    return typeof T == "symbol" ? T : T + "";
  }
  function F(Q, T) {
    if (typeof Q != "object" || !Q) return Q;
    var v = Q[Symbol.toPrimitive];
    if (v !== void 0) {
      var a = v.call(Q, T);
      if (typeof a != "object") return a;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (T === "string" ? String : Number)(Q);
  }
  const ke = "react-grid-layout";
  function ye(Q) {
    var T;
    return T = class extends u.Component {
      constructor() {
        super(...arguments), X(this, "state", {
          width: 1280
        }), X(this, "elementRef", /* @__PURE__ */ u.createRef()), X(this, "mounted", !1), X(this, "resizeObserver", void 0);
      }
      componentDidMount() {
        this.mounted = !0, this.resizeObserver = new s.default((h) => {
          if (this.elementRef.current instanceof HTMLElement) {
            const d = h[0].contentRect.width;
            this.setState({
              width: d
            });
          }
        });
        const a = this.elementRef.current;
        a instanceof HTMLElement && this.resizeObserver.observe(a);
      }
      componentWillUnmount() {
        this.mounted = !1;
        const a = this.elementRef.current;
        a instanceof HTMLElement && this.resizeObserver.unobserve(a), this.resizeObserver.disconnect();
      }
      render() {
        const a = this.props, {
          measureBeforeMount: h
        } = a, f = N(a, O);
        return h && !this.mounted ? /* @__PURE__ */ u.createElement("div", {
          className: (0, p.default)(this.props.className, ke),
          style: this.props.style,
          ref: this.elementRef
        }) : /* @__PURE__ */ u.createElement(Q, G({
          innerRef: this.elementRef
        }, f, this.state));
      }
    }, X(T, "defaultProps", {
      measureBeforeMount: !1
    }), X(T, "propTypes", {
      // If true, will not render children until mounted. Useful for getting the exact width before
      // rendering, to prevent any unsightly resizing.
      measureBeforeMount: c.default.bool
    }), T;
  }
  return Ro;
}
var Uc;
function qp() {
  return Uc || (Uc = 1, function(u) {
    u.exports = Qc().default, u.exports.utils = vr(), u.exports.calculateUtils = Ls(), u.exports.Responsive = _p().default, u.exports.Responsive.utils = Kc(), u.exports.WidthProvider = Bp().default;
  }(_s)), _s.exports;
}
var Vc = qp();
const Up = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }, cn = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 }, rf = { S: { w: 3, h: 3 }, M: { w: 3, h: 4 }, L: { w: 6, h: 4 }, XL: { w: 6, h: 8 } }, Fe = (u, c, s, p, O) => ({ i: u, x: c, y: s, w: p, h: O, minW: Math.min(p, 3), minH: 2, maxW: 12, maxH: 12 }), zo = { lg: [Fe("activity-history", 0, 0, 3, 4), Fe("automations", 3, 0, 3, 4), Fe("backup-restore", 6, 0, 3, 4), Fe("security-status", 9, 0, 3, 3), Fe("access-control", 0, 5, 6, 3), Fe("alarm-configuration", 6, 4, 6, 8)], md: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 4, 0, 4, 4), Fe("backup-restore", 0, 4, 4, 4), Fe("access-control", 4, 4, 4, 3), Fe("alarm-configuration", 0, 8, 8, 8), Fe("security-status", 0, 16, 4, 3)], sm: [Fe("activity-history", 0, 0, 4, 4), Fe("automations", 0, 4, 4, 4), Fe("backup-restore", 0, 8, 4, 4), Fe("access-control", 0, 12, 4, 3), Fe("alarm-configuration", 0, 15, 4, 8), Fe("security-status", 0, 23, 4, 3)], xs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 3), Fe("alarm-configuration", 0, 15, 2, 8), Fe("security-status", 0, 23, 2, 3)], xxs: [Fe("activity-history", 0, 0, 2, 4), Fe("automations", 0, 4, 2, 4), Fe("backup-restore", 0, 8, 2, 4), Fe("access-control", 0, 12, 2, 3), Fe("alarm-configuration", 0, 15, 2, 8), Fe("security-status", 0, 23, 2, 3)] };
function Cs(u, c, s) {
  var p;
  return ((p = Object.entries(rf).map(([O, C]) => ({ size: O, distance: Math.abs(Math.min(C.w, s) - u) + Math.abs(C.h - c) })).sort((O, C) => O.distance - C.distance)[0]) == null ? void 0 : p.size) ?? "S";
}
function of(u, c) {
  const s = rf[u];
  return { w: Math.min(s.w, c), h: s.h };
}
function Vp(u, c) {
  const s = Cs(u.w, u.h, c), p = of(s, c);
  return { ...u, w: p.w, h: p.h, x: Math.max(0, Math.min(u.x, c - p.w)), size: s };
}
function Ds(u, c) {
  return u.some((s) => s.i !== c.i && c.x < s.x + s.w && c.x + c.w > s.x && c.y < s.y + s.h && c.y + c.h > s.y);
}
function $p(u, c, s) {
  for (let p = 0; p < 240; p++) for (let O = 0; O <= s - c.w; O++) {
    const C = { ...c, x: O, y: p };
    if (!Ds(u, C)) return C;
  }
  return { ...c, x: 0, y: Math.max(0, ...u.map((p) => p.y + p.h)) };
}
function Do(u) {
  const c = {};
  return Object.keys(cn).forEach((s) => {
    const p = cn[s], O = Array.isArray(u == null ? void 0 : u[s]) ? u[s] : [], C = new Map(O.map((W) => [W.i, W])), H = (zo[s] || []).map((W) => {
      const X = C.get(W.i);
      if (!X) return { ...W };
      const A = Math.min(Math.max(1, X.w), p);
      return { ...W, ...X, w: A, x: Math.max(0, Math.min(X.x, p - A)), y: Math.max(0, X.y) };
    }), G = new Set(H.map((W) => W.i)), N = O.filter((W) => !G.has(W.i)).map((W) => ({ ...W, w: Math.min(Math.max(1, W.w), p), x: Math.max(0, Math.min(W.x, p - Math.min(W.w, p))), y: Math.max(0, W.y) }));
    c[s] = [...H, ...N];
  }), c;
}
class Gp {
  key(c, s) {
    return `argus:dashboard-layout:${c}:${s}`;
  }
  read(c, s) {
    try {
      const p = JSON.parse(localStorage.getItem(this.key(c, s)) || "null");
      return (p == null ? void 0 : p.layoutVersion) === 1 ? p : null;
    } catch {
      return null;
    }
  }
  write(c, s, p) {
    localStorage.setItem(this.key(c, s), JSON.stringify(p));
  }
  async load(c, s) {
    const p = this.read(c, s);
    return p ? Do(p.layouts) : null;
  }
  async save(c, s, p) {
    const O = this.read(c, s);
    this.write(c, s, { layoutVersion: 1, layouts: p, visibility: O == null ? void 0 : O.visibility, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async loadVisibility(c, s) {
    var p;
    return ((p = this.read(c, s)) == null ? void 0 : p.visibility) ?? null;
  }
  async saveVisibility(c, s, p) {
    const O = this.read(c, s);
    this.write(c, s, { layoutVersion: 1, layouts: (O == null ? void 0 : O.layouts) ?? Do(null), visibility: p, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  }
  async reset(c, s) {
    localStorage.removeItem(this.key(c, s));
  }
}
const Yp = Vc.WidthProvider(Vc.Responsive);
function Xp({ widget: u, node: c, editing: s, size: p, onSize: O, onHide: C, onReset: H }) {
  const G = St.useRef(null);
  return St.useLayoutEffect(() => {
    var N, W;
    (N = G.current) == null || N.appendChild(c), c.draggable = !1, (W = c.querySelector(":scope > .panel-edit-overlay")) == null || W.remove(), s ? c.setAttribute("inert", "") : c.removeAttribute("inert");
  }, [c, s]), /* @__PURE__ */ $e.jsxs("article", { className: "argus-widget", children: [
    /* @__PURE__ */ $e.jsxs("header", { className: "argus-widget__edit-header", children: [
      /* @__PURE__ */ $e.jsx("button", { type: "button", className: "argus-widget__drag-handle", "aria-label": `Mover ${u.title}`, title: "Arrastrar para mover", children: "⋮⋮" }),
      /* @__PURE__ */ $e.jsx("strong", { children: u.title }),
      /* @__PURE__ */ $e.jsxs("details", { className: "argus-widget__options", children: [
        /* @__PURE__ */ $e.jsx("summary", { "aria-label": `Opciones de ${u.title}`, title: "Opciones", children: "•••" }),
        /* @__PURE__ */ $e.jsxs("div", { className: "argus-widget__menu", children: [
          /* @__PURE__ */ $e.jsx("span", { children: "Tamaño" }),
          /* @__PURE__ */ $e.jsx("div", { children: ["S", "M", "L", "XL"].map((N) => /* @__PURE__ */ $e.jsx("button", { type: "button", className: N === p ? "active" : "", onClick: () => O(N), children: N }, N)) }),
          /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: H, children: "Restablecer widget" }),
          /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: C, children: "Ocultar widget" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ $e.jsx("div", { className: "argus-widget__content", ref: G })
  ] });
}
function Qp({ widgets: u, nodes: c, storage: s, userId: p, dashboardId: O, onEditing: C, registerEditor: H }) {
  const G = St.useMemo(() => Object.fromEntries(u.map((I) => [I.id, I.visible])), [u]), [N, W] = St.useState(zo), [X, A] = St.useState(G), [F, ke] = St.useState(!1), [ye, Q] = St.useState("lg"), [T, v] = St.useState(""), a = St.useRef(zo), h = St.useRef();
  St.useEffect(() => {
    H(ke);
  }, [H]), St.useEffect(() => {
    var I;
    Promise.all([s.load(p, O), (I = s.loadVisibility) == null ? void 0 : I.call(s, p, O)]).then(([U, re]) => {
      const ae = Do(U);
      W(ae), a.current = ae, re && A({ ...G, ...re });
    });
  }, [s, p, O, G]), St.useEffect(() => {
    C(F), F || s.save(p, O, N);
  }, [F]), St.useEffect(() => {
    const I = (U) => {
      F && (U.key === "Escape" ? (ke(!1), v("Edición finalizada")) : U.key === "Enter" && U.target === document.body && ke(!1));
    };
    return window.addEventListener("keydown", I), () => window.removeEventListener("keydown", I);
  }, [F]), St.useEffect(() => () => clearTimeout(h.current), []);
  const f = (I, U = !1) => {
    W(I), a.current = I, clearTimeout(h.current), h.current = window.setTimeout(() => s.save(p, O, I), U ? 0 : 550);
  }, d = (I, U) => {
    var ae;
    const re = { ...X, [I]: U };
    A(re), (ae = s.saveVisibility) == null || ae.call(s, p, O, re), v(U ? "Widget visible" : "Widget oculto");
  }, y = (I, U, re) => {
    const ae = N[ye] || [], de = ae.filter((ie) => ie.i !== I), ce = Ds(de, U) ? $p(de, U, cn[ye]) : U, V = { ...N, [ye]: ae.map((ie) => ie.i === I ? ce : ie) };
    f(V, !0), v(re);
  }, k = (I, U) => {
    const re = (N[ye] || []).find((de) => de.i === I);
    if (!re) return;
    const ae = of(U, cn[ye]);
    y(I, { ...re, ...ae, x: Math.max(0, Math.min(re.x, cn[ye] - ae.w)) }, `Tamaño ${U}`);
  }, j = (I) => {
    const U = (zo[ye] || []).find((re) => re.i === I);
    U && y(I, { ...U }, "Widget restablecido");
  }, B = (I, U, re) => {
    const ae = Vp(re, cn[ye]);
    y(re.i, ae, `Tamaño ${Cs(ae.w, ae.h, cn[ye])}`);
  }, te = async () => {
    if (!confirm("¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?")) return;
    await s.reset(p, O);
    const I = Do(null);
    A(G), f(I, !0), v("Diseño predeterminado restaurado");
  }, le = N[ye] || [];
  return /* @__PURE__ */ $e.jsxs("section", { className: `argus-dashboard ${F ? "argus-dashboard--editing" : ""}`, children: [
    /* @__PURE__ */ $e.jsxs("nav", { className: "argus-dashboard__toolbar", "aria-label": "Edición del tablero", children: [
      /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: () => ke((I) => !I), children: F ? "✓ Listo" : "✥ Editar tablero" }),
      F && /* @__PURE__ */ $e.jsxs($e.Fragment, { children: [
        /* @__PURE__ */ $e.jsx("button", { type: "button", onClick: te, children: "Restablecer diseño" }),
        /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__visibility", "aria-label": "Widgets ocultos", children: u.filter((I) => X[I.id] === !1).map((I) => /* @__PURE__ */ $e.jsxs("button", { type: "button", onClick: () => d(I.id, !0), children: [
          "Mostrar ",
          I.title
        ] }, I.id)) })
      ] })
    ] }),
    /* @__PURE__ */ $e.jsx("div", { className: "argus-dashboard__feedback", "aria-live": "polite", children: T }),
    /* @__PURE__ */ $e.jsx(Yp, { className: "argus-dashboard-grid", layouts: N, breakpoints: Up, cols: cn, rowHeight: 92, margin: [16, 16], containerPadding: [16, 16], compactType: null, preventCollision: !0, allowOverlap: !1, isBounded: !0, isDraggable: F, isResizable: F, draggableHandle: ".argus-widget__drag-handle", resizeHandles: ["se"], onBreakpointChange: (I) => Q(I), onLayoutChange: (I, U) => {
      F && W(U);
    }, onResizeStop: B, onDragStop: (I, U, re) => {
      const ae = (N[ye] || []).filter((de) => de.i !== re.i);
      if (Ds(ae, re)) {
        W({ ...a.current }), v("Posición bloqueada por colisión");
        return;
      }
      y(re.i, re, "Posición guardada");
    }, useCSSTransforms: !0, children: u.filter((I) => X[I.id] !== !1 && c.has(I.id)).map((I) => {
      const U = le.find((ae) => ae.i === I.id), re = U ? Cs(U.w, U.h, cn[ye]) : I.size;
      return /* @__PURE__ */ $e.jsx("div", { children: /* @__PURE__ */ $e.jsx(Xp, { widget: I, node: c.get(I.id), editing: F, size: re, onSize: (ae) => k(I.id, ae), onHide: () => d(I.id, !1), onReset: () => j(I.id) }) }, I.id);
    }) })
  ] });
}
const $c = [{ id: "activity-history", nativeId: "w-activity", kind: "activity-history", title: "Historial de actividad", size: "M", visible: !0 }, { id: "automations", nativeId: "w-automations", kind: "automations", title: "Automatizaciones", size: "M", visible: !0 }, { id: "backup-restore", nativeId: "w-backup", kind: "backup-restore", title: "Respaldo y restauración", size: "M", visible: !0 }, { id: "access-control", nativeId: "w-access", kind: "access-control", title: "Control de acceso y usuarios", size: "L", visible: !0 }, { id: "alarm-configuration", nativeId: "w-modes", kind: "alarm-configuration", title: "Configuración de alarma", size: "XL", visible: !0 }, { id: "security-status", nativeId: "w-github", kind: "security-status", title: "Estado y soporte", size: "S", visible: !0 }];
function Os(u) {
  var H, G, N, W, X;
  const c = (H = u.shadowRoot) == null ? void 0 : H.getElementById("widget-grid");
  if (!c || u._argusReactRoot) return;
  let s = u.shadowRoot.getElementById("argus-react-dashboard-style");
  s || (s = document.createElement("style"), s.id = "argus-react-dashboard-style", s.textContent = up + cp + fp, u.shadowRoot.appendChild(s));
  const p = /* @__PURE__ */ new Map();
  $c.forEach((A) => {
    const F = u.shadowRoot.getElementById(A.nativeId);
    F && p.set(A.id, F);
  });
  const O = document.createElement("div");
  O.id = "argus-react-dashboard-root", c.appendChild(O);
  const C = ap.createRoot(O);
  u._argusReactRoot = C, C.render(/* @__PURE__ */ $e.jsx(Qp, { widgets: $c, nodes: p, storage: new Gp(), userId: ((G = u._currentProfile) == null ? void 0 : G.id) || ((W = (N = u._hass) == null ? void 0 : N.user) == null ? void 0 : W.id) || "anonymous", dashboardId: ((X = u._dashboard) == null ? void 0 : X.entry_id) || "default", onEditing: (A) => {
    u._widgetEditing = A, c.classList.toggle("editing", A);
  }, registerEditor: (A) => {
    u._argusReactSetEditing = A;
  } }));
}
function th(u) {
  if (!u || u.__argusReactDashboard) return;
  u.__argusReactDashboard = !0;
  const c = u.prototype, s = c.connectedCallback, p = c._load, O = c._initWidgetGrid;
  c.connectedCallback = function() {
    const C = s == null ? void 0 : s.call(this);
    return queueMicrotask(() => Os(this)), C;
  }, c._load = async function() {
    const C = await (p == null ? void 0 : p.call(this));
    return Os(this), C;
  }, c._initWidgetGrid = function() {
    const C = O == null ? void 0 : O.call(this);
    return Os(this), C;
  }, c._toggleWidgetEditing = function() {
    var C;
    (C = this._argusReactSetEditing) == null || C.call(this, !this._widgetEditing);
  };
}
export {
  th as applyReactDashboardLayout
};
